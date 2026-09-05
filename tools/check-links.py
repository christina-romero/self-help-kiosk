"""Check every outbound URL in the kiosk.

Run:  node tools/dump-data.js > tools/_data.json && python tools/check-links.py

Covers concept "More help" links, the Resource Shelf, and the safe-search
engine templates in assets/kiosk.js. Prints anything that is not a 200 so a
dead link never ships to a student. A 403 or 429 is reported but does not fail
the build: that usually means the host blocks datacenter IPs, not that the link
is broken for a student.
"""
import json, os, re, ssl, sys, time, urllib.request
import concurrent.futures as cf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(os.path.join(ROOT, 'tools', '_data.json'), encoding='utf-8'))

urls = {}   # url -> list of places it appears


def add(url, where):
    urls.setdefault(url, []).append(where)


for c in data['CONCEPTS']:
    for l in c.get('links', []):
        add(l['u'], c['id'])
for g in data['RESOURCES']:
    for i in g['items']:
        add(i['u'], 'resources/' + g['group'])

# search engine templates: probe them with a real query
kiosk = open(os.path.join(ROOT, 'assets', 'kiosk.js'), encoding='utf-8').read()
for m in re.finditer(r"u:\s*'(https://[^']+[?&][a-zA-Z_]+=)'", kiosk):
    add(m.group(1) + 'fractions', 'safe-search engine')

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/120.0 Safari/537.36')


def check(url):
    """Try twice. A transient timeout or a rate limit should not fail a build."""
    last = None
    for attempt in range(2):
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        try:
            r = urllib.request.urlopen(req, timeout=30, context=ctx)
            return url, r.status, r.geturl()
        except Exception as e:
            last = getattr(e, 'code', None) or type(e).__name__
            # only a retryable condition is worth a second attempt
            if last not in (429, 503, 'timeout', 'URLError', 'TimeoutError'):
                break
            time.sleep(1.5 * (attempt + 1))
    return url, last, ''


# A 403 or 429 from a CI runner usually means the host blocks datacenter IPs
# or is rate limiting, not that the link is dead for a student on a school
# network. Those are reported but do not fail the build. A 404, 410, or a DNS
# failure is a genuine break and does fail it.
SOFT = {401, 403, 405, 429, 503}

bad, soft, redirects = [], [], []
with cf.ThreadPoolExecutor(8) as ex:
    for url, status, final in ex.map(check, sorted(urls)):
        if status == 200:
            if final and final.rstrip('/') != url.rstrip('/'):
                redirects.append((url, final))
        elif status in SOFT:
            soft.append((url, status, urls[url]))
        else:
            bad.append((url, status, urls[url]))

print(f'{len(urls)} unique URLs checked.\n')
if bad:
    print('BROKEN (' + str(len(bad)) + ') - these fail the build')
    for url, status, where in bad:
        print(f'  [{status}] {url}')
        print(f'          used by: {", ".join(sorted(set(where)))}')
else:
    print(f'No broken links. {len(urls) - len(soft)} returned 200.')

if soft:
    print('\nCOULD NOT VERIFY (' + str(len(soft)) + ') - the host blocked or rate limited us.')
    print('Normal from a CI runner on a datacenter IP. Open these in a browser')
    print('before treating any of them as broken.')
    for url, status, where in soft:
        print(f'  [{status}] {url}')
        print(f'          used by: {", ".join(sorted(set(where)))}')

if redirects:
    print('\nREDIRECTS (still work, but consider updating)')
    for url, final in redirects:
        print(f'  {url}\n    -> {final}')

sys.exit(1 if bad else 0)

"""Check every outbound URL in the kiosk.

Run:  node tools/dump-data.js > tools/_data.json && python tools/check-links.py

Covers concept "More help" links, the Resource Shelf, and the safe-search
engine templates in assets/kiosk.js. Prints anything that is not a 200 so a
dead link never ships to a student.
"""
import json, os, re, ssl, sys, urllib.request
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
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        r = urllib.request.urlopen(req, timeout=30, context=ctx)
        return url, r.status, r.geturl()
    except Exception as e:
        return url, getattr(e, 'code', None) or type(e).__name__, ''


bad, redirects = [], []
with cf.ThreadPoolExecutor(16) as ex:
    for url, status, final in ex.map(check, sorted(urls)):
        if status != 200:
            bad.append((url, status, urls[url]))
        elif final and final.rstrip('/') != url.rstrip('/'):
            redirects.append((url, final))

print(f'{len(urls)} unique URLs checked.\n')
if bad:
    print('FAILED (' + str(len(bad)) + ')')
    for url, status, where in bad:
        print(f'  [{status}] {url}')
        print(f'          used by: {", ".join(sorted(set(where)))}')
else:
    print('All links returned 200.')

if redirects:
    print('\nREDIRECTS (still work, but consider updating)')
    for url, final in redirects:
        print(f'  {url}\n    -> {final}')

sys.exit(1 if bad else 0)

"""Validate the kiosk's concept library.

Run:  node tools/dump-data.js > tools/_data.json && python tools/validate.py

Checks every concept for:
  * required fields and non-empty content
  * unique ids
  * grades drawn from K-8
  * subject drawn from the five kiosk subjects
  * app names that actually exist in data/apps.js
  * TEKS codes that exist in the TEA-derived index, with the code's
    official text printed so a human can sanity-check the match
  * visual specs whose `type` is implemented in assets/visuals.js
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(os.path.join(ROOT, 'tools', '_data.json'), encoding='utf-8'))

TEKS = data['TEKS']
APPS = {a['name'] for a in data['APPS']}
TOOLS = data.get('TOOLS', [])


def tools_for(c):
    out = []
    for tool in TOOLS:
        w = tool.get('when') or {}
        if w.get('subjects') and c['subject'] not in w['subjects']:
            continue
        if w.get('units') and not re.search(w['units'], c.get('unit', '')):
            continue
        if w.get('grades') and not set(c['grades']) & set(w['grades']):
            continue
        out.append(tool)
    return out[:2]
CONCEPTS = data['CONCEPTS']

SUBJECTS = {'math', 'reading', 'language', 'writing', 'vocabulary'}
GRADES = {'K', '1', '2', '3', '4', '5', '6', '7', '8'}
REQUIRED = ['id', 'subject', 'unit', 'grades', 'title', 'stuck', 'teks',
            'plain', 'steps', 'traps', 'check', 'note']
# `links` may be empty: some reading guides have no kid-facing site worth
# sending a student to. What must never be empty is BOTH links and tools,
# checked below.
# `apps` may legitimately be empty: the continuum assigns no writing or
# vocabulary app before grade 3, so a K-2 guide in those subjects has none.

# visual types implemented in assets/visuals.js
viz_src = open(os.path.join(ROOT, 'assets', 'visuals.js'), encoding='utf-8').read()
VIZ_TYPES = set(re.findall(r'VIZ\.(\w+)\s*=\s*function', viz_src))

errors, warnings = [], []
seen_ids = set()

for c in CONCEPTS:
    cid = c.get('id', '<no id>')

    for f in REQUIRED:
        if f not in c or not c[f]:
            errors.append(f'{cid}: missing or empty field "{f}"')

    if cid in seen_ids:
        errors.append(f'{cid}: duplicate id')
    seen_ids.add(cid)

    if c.get('subject') not in SUBJECTS:
        errors.append(f'{cid}: unknown subject "{c.get("subject")}"')

    for g in c.get('grades', []):
        if g not in GRADES:
            errors.append(f'{cid}: bad grade "{g}"')

    # every guide must offer the student somewhere to go
    if not c.get('links') and not tools_for(c):
        errors.append(f'{cid}: no external link and no hands-on tool')

    if 'apps' not in c:
        errors.append(f'{cid}: missing field "apps" (use [] if no app is assigned)')
    for a in c.get('apps', []):
        if a not in APPS:
            errors.append(f'{cid}: app "{a}" is not in data/apps.js')

    prefix = 'MATH|' if c.get('subject') == 'math' else 'ELAR|'
    for code in c.get('teks', []):
        if prefix + code not in TEKS:
            errors.append(f'{cid}: TEKS {code} not found ({prefix.strip("|")})')

    vis = c.get('visual')
    if vis:
        for v in (vis if isinstance(vis, list) else [vis]):
            if v.get('type') not in VIZ_TYPES:
                errors.append(f'{cid}: visual type "{v.get("type")}" is not implemented')

    # content-quality checks
    if len(c.get('steps', [])) < 3:
        warnings.append(f'{cid}: fewer than 3 steps')
    if len(c.get('traps', [])) < 3:
        warnings.append(f'{cid}: fewer than 3 traps')
    if len(c.get('check', [])) < 3:
        warnings.append(f'{cid}: fewer than 3 check questions')
    if not c.get('example'):
        warnings.append(f'{cid}: no worked example')
    # em dashes in prose read as filler; a bare "—" in a table cell means "none"
    if ' — ' in json.dumps(c, ensure_ascii=False):
        warnings.append(f'{cid}: contains an em dash in prose')

# ---- reading level -------------------------------------------------------
# Students use this on their own, so a guide must not read harder than the
# youngest grade it is offered to. Flesch-Kincaid is rough, but it reliably
# catches the two things that lock a young reader out: long sentences and
# long words.
def _syllables(w):
    w = re.sub(r'[^a-z]', '', w.lower())
    if not w:
        return 0
    vowels, n, prev = 'aeiouy', 0, False
    for ch in w:
        cur = ch in vowels
        if cur and not prev:
            n += 1
        prev = cur
    if w.endswith('e') and n > 1:
        n -= 1
    return max(1, n)


def reading_grade(text):
    sentences = [s for s in re.split(r'[.!?]+', text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    if not sentences or not words:
        return None
    syl = sum(_syllables(w) for w in words)
    return 0.39 * (len(words) / len(sentences)) + 11.8 * (syl / len(words)) - 15.59


def student_prose(c):
    """Only what a student actually reads. Titles and metadata do not count."""
    bits = [c.get('plain', ''), c.get('why', '')]
    bits += c.get('steps', []) + c.get('traps', [])
    bits += [w.get('d', '') for w in c.get('words', [])]
    bits += [q.get('a', '') for q in c.get('check', [])]
    return ' '.join(bits)


too_hard = []
for c in CONCEPTS:
    fk = reading_grade(student_prose(c))
    if fk is None:
        continue
    lowest = min(0 if g == 'K' else int(g) for g in c['grades'])
    if fk - lowest > 2:
        too_hard.append((round(fk, 1), lowest, c['id']))

print(f'{len(CONCEPTS)} concepts checked against {len(TEKS)} TEKS codes.\n')

if errors:
    print('ERRORS (' + str(len(errors)) + ')')
    for e in errors:
        print('  ' + e)
else:
    print('No errors.')

if warnings:
    print('\nWARNINGS (' + str(len(warnings)) + ')')
    for w in warnings:
        print('  ' + w)

if too_hard:
    print(f'\nREADING LEVEL ({len(too_hard)}) - reads more than 2 grades above the')
    print('youngest grade the guide is offered to. Shorten sentences and swap long')
    print('words; these are the ones a struggling reader will bounce off.')
    for fk, lowest, cid in sorted(too_hard, reverse=True)[:15]:
        print(f'  grade {fk:>4} text, offered from grade {lowest}   {cid}')
    if len(too_hard) > 15:
        print(f'  ... and {len(too_hard) - 15} more (use --reading to list every guide)')

if '--reading' in sys.argv:
    print('\n--- reading level, every guide ---')
    for c in sorted(CONCEPTS, key=lambda x: -(reading_grade(student_prose(x)) or 0)):
        fk = reading_grade(student_prose(c))
        print(f'  {round(fk, 1) if fk else "?":>5}  {",".join(c["grades"]):<18}{c["id"]}')

if '--teks' in sys.argv:
    print('\n--- TEKS citations with official text ---')
    for c in CONCEPTS:
        prefix = 'MATH|' if c['subject'] == 'math' else 'ELAR|'
        print('\n' + c['id'] + '  (' + c['title'] + ')')
        for code in c['teks']:
            entry = TEKS.get(prefix + code)
            txt = (entry['t'][:120] if entry else '*** NOT FOUND ***')
            print(f'   {code:<10} {txt}')

sys.exit(1 if errors else 0)

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
CONCEPTS = data['CONCEPTS']

SUBJECTS = {'math', 'reading', 'language', 'writing', 'vocabulary'}
GRADES = {'K', '1', '2', '3', '4', '5', '6', '7', '8'}
REQUIRED = ['id', 'subject', 'unit', 'grades', 'title', 'stuck', 'teks',
            'plain', 'steps', 'traps', 'check', 'links', 'note']
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

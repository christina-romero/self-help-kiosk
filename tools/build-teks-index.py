"""Regenerate data/teks-index.js from TEA source documents.

Downloads the official TEKS, extracts every K-8 student expectation for ELAR and
mathematics, and writes the index the kiosk uses to display official standard text.

Run:  python tools/build-teks-index.py

Requires: pypdf  (pip install pypdf)

Sources
  ELAR         19 TAC Chapter 110, Subchapters A (elementary), B (middle school)
               and C (high school: English I = grade 9)
  Mathematics  19 TAC Chapter 111, Subchapters B (middle school) and C
               (high school: Algebra I = grade 9)
               plus the TEA grade-level PDFs for K-5, which carry both subjects
Re-run this if TEA adopts revised standards. Nothing else in the kiosk needs to change:
tools/validate.py will immediately flag any concept whose citation no longer resolves.
"""
import io, json, os, re, ssl, sys, urllib.request

try:
    import pypdf
except ImportError:
    sys.exit('pypdf is required:  pip install pypdf')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = os.path.join(ROOT, 'tools', '_teks')
os.makedirs(WORK, exist_ok=True)

TAC = 'https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-effect'
SBOE = 'https://tea.texas.gov/laws-and-rules/state-board-education/teks'
CI = 'https://tea.texas.gov/curriculum-and-instruction/curriculum-standards'

SOURCES = {
    # grade-level PDFs carry ELAR and mathematics together for K-5
    'kindergarten': SBOE + '/kinder-teks-062024-updated.pdf',
    'grade1': CI + '/grade1-teks-062024.pdf',
    'grade2': CI + '/grade2-teks-062024.pdf',
    'grade3': CI + '/grade3-teks-062024.pdf',
    'grade4': CI + '/grade4-teks-062024.pdf',
    'grade5': SBOE + '/grade5-teks-062024-0.pdf',
    # middle school is published per subject
    'elar_ms': TAC + '/ch110b.pdf',
    'math_ms': TAC + '/ch111b.pdf',
    # grade 9 lives in the high school subchapters: English I and Algebra I.
    # The kiosk keys these as grade "9" so they sit beside K-8 in the grade
    # picker; the official course codes are E1 and A, kept in `course`.
    'elar_hs': TAC + '/ch110c.pdf',
    'math_hs': TAC + '/ch111c.pdf',
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'


def fetch(name, url):
    path = os.path.join(WORK, name + '.pdf')
    if not os.path.exists(path):
        print('downloading', name)
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        with urllib.request.urlopen(req, timeout=90, context=ctx) as r:
            open(path, 'wb').write(r.read())
    return path


def text_of(path):
    reader = pypdf.PdfReader(path)
    raw = '\n'.join(p.extract_text() or '' for p in reader.pages)
    return re.sub(r'[ \t]+', ' ', re.sub(r'\s*\n\s*', ' ', raw))


def clean(s):
    s = re.sub(r'\s+', ' ', s).strip()
    # TEA page furniture leaks into the extracted stream
    s = re.sub(r'\s*revised \w+ \d{4} \d+\s*', ' ', s, flags=re.I)
    s = re.sub(r'\s*§\d{3}\.\d+\..*$', '', s)
    return s.strip().rstrip(';').rstrip('.').strip()


def parse_section(body, grade, subject):
    i = body.find('Knowledge and skills')
    if i < 0:
        return []
    body = body[i:]
    out = []
    tops = list(re.finditer(r'\((\d{1,2})\)\s+([A-Z][^.]{3,200}?)\.\s+The student', body))
    for k, m in enumerate(tops):
        end = tops[k + 1].start() if k + 1 < len(tops) else len(body)
        chunk = body[m.start():end]
        strand = clean(m.group(2))
        ses = []
        subs = list(re.finditer(r'\(([A-Z])\)\s+', chunk))
        for j, s in enumerate(subs):
            e = subs[j + 1].start() if j + 1 < len(subs) else len(chunk)
            txt = clean(chunk[s.end():e])
            if len(txt) > 3:
                ses.append((s.group(1), txt))
        out.append((grade, subject, m.group(1), strand, ses))
    return out


rows = []

for grade, name in [('K', 'kindergarten'), ('1', 'grade1'), ('2', 'grade2'),
                    ('3', 'grade3'), ('4', 'grade4'), ('5', 'grade5')]:
    t = text_of(fetch(name, SOURCES[name]))
    marks = [(m.start(), m.group(0)) for m in
             re.finditer(r'§?.\d{3}\.\d+\.\s*[A-Za-z ,]+?, (?:Kindergarten|Grade \d)', t)]
    for idx, (pos, hdr) in enumerate(marks):
        end = marks[idx + 1][0] if idx + 1 < len(marks) else len(t)
        subj = ('ELAR' if 'English Language Arts' in hdr else
                'MATH' if 'Mathematics' in hdr else None)
        if subj:
            rows += parse_section(t[pos:end], grade, subj)

for name, subj, rx in [
    ('elar_ms', 'ELAR', r'§?.110\.\d+\.\s*English Language Arts and Reading, Grade ([678]), Adopted'),
    ('math_ms', 'MATH', r'§?.111\.(?:26|27|28)\.\s*Grade ([678]), Adopted')
]:
    t = text_of(fetch(name, SOURCES[name]))
    heads = [m.start() for m in re.finditer(r'§?.\d{3}\.\d+\.\s', t)]
    for m in re.finditer(rx, t):
        pos, grade = m.start(), m.group(1)
        nxt = [h for h in heads if h > pos + 5]
        rows += parse_section(t[pos:(nxt[0] if nxt else len(t))], grade, subj)

# ---- grade 9: one named course per subject ----
def course_section(text, marker):
    i = text.index(marker)
    heads = [m.start() for m in re.finditer(r'\u00a7\d{3}\.\d+\.\s', text)]
    nxt = [h for h in heads if h > i + 5]
    return text[i: nxt[0] if nxt else len(text)]


for name, marker, subj, course in [
    ('elar_hs', '110.36. English Language Arts and Reading, English I', 'ELAR', 'E1'),
    ('math_hs', '111.39. Algebra I', 'MATH', 'A'),
]:
    text = text_of(fetch(name, SOURCES[name]))
    rows += [(r[0], r[1], r[2], r[3], r[4], course)
             for r in parse_section(course_section(text, marker), '9', subj)]

index = {}
for row in rows:
    grade, subj, ks, strand, ses = row[:5]
    course = row[5] if len(row) > 5 else None
    extra = {'c': f'{course}.{ks}'} if course else {}
    if not ses:
        index[f'{subj}|{grade}.{ks}'] = dict({'t': strand, 'st': strand}, **extra)
    for code, txt in ses:
        entry = {'t': txt, 'st': strand}
        if course:
            entry['c'] = f'{course}.{ks}({code})'
        index[f'{subj}|{grade}.{ks}.{code}'] = entry

out = io.StringIO()
out.write('/* Auto-generated by tools/build-teks-index.py from TEA source documents\n')
out.write('   (19 TAC Ch.110 English Language Arts and Reading, Ch.111 Mathematics).\n')
out.write('   Do not hand-edit. */\n')
out.write('window.TEKS = ')
json.dump(index, out, ensure_ascii=False, separators=(',', ':'))
out.write(';\n')
open(os.path.join(ROOT, 'data', 'teks-index.js'), 'w', encoding='utf-8').write(out.getvalue())

from collections import Counter
c = Counter(k.split('|')[0] for k in index)
print(f'wrote data/teks-index.js: {len(index)} codes ({c["ELAR"]} ELAR, {c["MATH"]} MATH)')

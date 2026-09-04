# Self-Help Kiosk

A static web app for Timeback learners in grades K&ndash;8. It is for the moment a
student's app marks something wrong and they do not know why: find the skill, look at
the diagram, follow the steps, check the traps list, and write a note in their own
words before going back to the app.

**145 skill guides** across Reading, Language, Writing, Vocabulary, and Math, every one
tagged to the Texas Essential Knowledge and Skills and to the Timeback apps that teach it.

---

## Running it

There is no build step and no server requirement. Open `index.html` in a browser, or
drop the folder on any static host (GitHub Pages, Netlify, a district web share, a USB
stick on a kiosk machine).

```
# optional, for a local server
npx serve .
```

Everything runs from the file system on purpose, so the kiosk keeps working when the
Wi-Fi does not. Notes are stored in `localStorage`, which means **notes stay on the
device** &mdash; a student must use the same kiosk to see them again, or export them.

---

## What is in it

| Route | What it does |
| --- | --- |
| `#/` | Three ways in: search, pick a grade, pick a subject, or pick the app you were stuck in |
| `#/how` | The Unstuck Steps: the six moves to try before asking for help. Printable |
| `#/g/<grade>/<subject>` | All guides for that grade and subject, grouped by unit |
| `#/c/<id>` | A skill guide (the Unstuck Path, below) |
| `#/app/<appId>` | What a Timeback app teaches and which guides map to it |
| `#/search/<query>` | Kiosk results first, then kid-safe web search options |
| `#/library` | Resource Shelf: dictionaries, manipulatives, organizers, passages |
| `#/safesearch` | Where searches go and how to search well |
| `#/notebook` | Every saved note. Print or export as a text file |

### The Unstuck Path

Every guide has the same seven sections, in the same order, so students learn the shape
once:

1. **What it means** &mdash; plain language, plus the vocabulary needed to read the rest
2. **See it** &mdash; the diagram, before any prose
3. **Do it** &mdash; numbered steps, the same steps as an auto-generated flow chart, and a worked example
4. **Watch out** &mdash; the specific errors students actually make on that skill
5. **Check yourself** &mdash; questions with hidden answers
6. **Take a note** &mdash; a structured template that saves to the notebook
7. **More help** &mdash; vetted external links, plus the official TEKS text and related skills

---

## Sources

**The Timeback app stack** (`data/apps.js`) comes from the **App Playbook (K-12) Alpha
App Continuum**, which is the source of truth. It carries the 16 apps assigned to K-8
students on this campus across math, fast math, reading, language, vocabulary, and
writing, with the continuum's own grade bands.

The continuum distinguishes two roles, and the kiosk shows the difference because it
answers a real student question ("why did my app just give me third grade work?"):

* **core** &mdash; the app carrying the grade-level course
* **hole-filling** &mdash; the app running underneath to close gaps from earlier grades

Apps in the Playbook's manual list that are deliberately absent, with reasons, are
documented in the header comment of `data/apps.js`. Two K-2 guides carry no app tag at
all, because the continuum assigns no writing or vocabulary app before grade 3; those
render as "No Timeback app at this grade yet" rather than being silently mistagged.

**When the Playbook changes**, edit `data/apps.js` and then re-tag the guides from the
continuum rather than by hand. `tools/validate.py` fails on any guide referencing an app
that no longer exists, so nothing drifts quietly.

**The TEKS index** (`data/teks-index.js`) is generated directly from TEA source
documents, not typed by hand:

* ELAR &mdash; 19 TAC Chapter 110, Subchapters A and B (Adopted 2017)
* Mathematics &mdash; 19 TAC Chapter 111, Subchapters A and B (Adopted 2012)

That produces **1,008 student expectations** for K&ndash;8 with their official wording,
which is what the kiosk displays at the bottom of each guide. Every TEKS code cited by
a guide is checked against this index by `tools/validate.py`, so a citation cannot drift.

**Visual guides are drawn, not borrowed.** Every diagram is generated as inline SVG at
run time by `assets/visuals.js`. Nothing is hot-linked. That means the visuals always
load, always print, follow the student's theme and text size, and carry no third-party
image licensing. There are 26 diagram types: place-value charts, fraction bars, number
lines, area models, tape diagrams, coordinate planes, Frayer models, paragraph
hamburgers, plot arcs, sentence anatomy, word-part maps, Venn diagrams, ten frames,
sound boxes, classification hierarchies, balance scales, slope triangles, Pythagorean
squares, bar graphs, tables, angle sets, cycles, decision forks, shape cards, text
structure maps, and a generic step flow chart that every guide gets for free.

---

## Safe search: what it does and does not do

This is worth being precise about, because it is a child-safety feature.

The kiosk **does not** filter the internet. It cannot. What it does:

1. Searches its own 145 guides first. Those results are always safe.
2. Hands the query to search services that do their own filtering for schools:
   Kiddle, Kidtopia, Simple Wikipedia, Khan Academy, Math is Fun, Ducksters,
   Wordsmyth Kids Dictionary, National Geographic Kids, and PBS LearningMedia.
3. Blocks a short list of clearly unsafe queries and redirects the student to a Guide
   rather than to a search engine. The blocked-query message is deliberately
   non-punitive: for anything that sounds like self-harm, it tells the student to go
   talk to an adult now and that they will not be in trouble.

Point 3 is a speed bump, not a content filter. **The kiosk should sit behind whatever
network-level filtering the district already runs.** It is not a replacement for it.

---

## Accessibility

* Light, dark, and high-contrast themes (high contrast is yellow-on-black, WCAG AAA)
* Four text sizes and two line-spacing settings
* An easy-read font option with wider letter and word spacing
* Preferences persist across sessions
* Keyboard navigable throughout, with a skip link and visible focus rings
* Every diagram has an `aria-label`; no information is carried by color alone
* Touch targets sized for shared kiosk hardware; no hover-only affordances
* Print stylesheet for the Unstuck Steps poster and the notebook
* `prefers-reduced-motion` respected

---

## Adding or editing a guide

Concepts live in `data/concepts-*.js`. Each one is a plain object:

```js
{
  id: 'm-equivalent-fractions',       // unique, kebab-case, prefix by subject
  subject: 'math',                    // math | reading | language | writing | vocabulary
  unit: 'Fractions',                  // groups the guide on the grade page
  grades: ['3', '4', '5'],            // any of K,1..8
  title: 'Equivalent fractions and simplifying',
  alt: 'extra search keywords students might actually type',
  stuck: ['Why does 1/2 equal 3/6?'], // shown as "sounds like you if you are thinking"
  teks: ['3.3.F', '4.3.C'],           // validated against the TEA index
  apps: ['Zearn', 'Math Academy'],    // must match a name in data/apps.js
  plain: 'One or two sentences in plain language.',
  why: 'Why this matters to the student.',
  words: [{ w: 'equivalent', d: 'Different numbers, same value.' }],
  visual: [{ type: 'fractionbar', bars: [...] }],   // see assets/visuals.js
  steps: ['...'],                     // also auto-rendered as a flow chart
  example: { prompt: '...', work: ['...'], answer: '...' },
  traps: ['...'],                     // the mistakes students really make
  check: [{ q: '...', a: '...' }],
  links: [{ t: 'Math is Fun: ...', u: 'https://...', d: '...' }],
  note: 'steps'                       // steps | frayer | strategy | word
}
```

If you add a new file, register it in both `index.html` and `tools/dump-data.js`.

### House style for guides

* Second person, present tense, short sentences.
* The `traps` list is the highest-value part of a guide. Write the mistake students
  actually make, not the mistake in the abstract.
* The worked example shows every line of work, including the line most people skip.
* No em dashes in prose; American spellings.

---

## Checks

```bash
node tools/dump-data.js > tools/_data.json   # loads the data files exactly as the browser does

python tools/validate.py                     # schema, TEKS codes, app names, diagram types
python tools/validate.py --teks              # also prints each citation with its official TEKS text
python tools/check-links.py                  # every outbound URL must return 200
node tools/smoke.js                          # headless browser walk of every route
node tools/smoke.js --shots                  # ...and save screenshots to tools/shots/
node tools/check-subpath.js                  # proves it still works hosted under /repo-name/

npm run check                                # all of the above in one go
```

Current status: **145 concepts, 16 apps, 0 errors, 193/193 links live, smoke test passing.**

`validate.py` enforces that every guide has at least three steps, three traps, three
check questions, and a worked example, so a thin guide cannot ship quietly.

---

## Known gaps

* **No science or social studies.** Students on this campus do not use those apps, so
  AlphaScience, Nice Academy, PhysicsGraph, and TimeBack Scroll are not in the picker and
  no guide references them. The Playbook does place AlphaScience across grades 3-8 and
  TimeBack Scroll across 3-6, so if the campus turns them on, add the entries to
  `data/apps.js` and the picker will pick them up with no other code changes. Guides
  would still need writing.
* **Pre-K is out of scope.** Happy Numbers, Mentava Basics, and AlphaNumbers are the
  pre-K row of the continuum. The kiosk starts at Kindergarten.
* **English only.** Nothing in the architecture blocks a Spanish version; the concept
  objects would need a `lang` field and the strings would need translating.
* **Notes are per-device.** There is no account system, by design. Students should
  export or print notes they want to keep.
* **The kiosk does not know what a student is working on.** It cannot read from
  Timeback, so the student has to name the skill. The "which app were you in" picker
  exists to narrow that down. If Timeback ever exposes a current-assignment API, that
  is the single highest-value integration.
* **Link rot is a maintenance cost.** Run `check-links.py` at the start of each
  semester. All 193 links were live at build time.

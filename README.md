# Self-Help Kiosk

A static web app for Timeback learners in grades K&ndash;8. It is for the moment a
student's app marks something wrong and they do not know why: find the skill, look at
the picture, learn the move, dodge the trap, then try it. Every guide prints as the
same one-page study note Guides already hand out before a test.

**145 study notes** across Reading, Language, Writing, Vocabulary, and Math, every one
tagged to the Texas Essential Knowledge and Skills and to the Timeback apps that teach it.

---

## Deploying

The site is hosted on **Vercel**, connected to this repo. There is no deploy step to
run: **push to `main` and Vercel rebuilds and publishes automatically.** A pull request
gets its own preview URL, and `vercel.json` tells Vercel there is nothing to install or
build, so a deploy takes seconds.

To roll back, open the Vercel dashboard, find the previous deployment, and choose
*Promote to Production*. That is instant and does not touch git.

There is no build step and no server requirement, so it also runs from `index.html`
opened directly in a browser, from a district web share, or from a USB stick on a kiosk
machine.

```
# optional, for a local server
npx serve .
```

Everything runs from the file system on purpose, so the kiosk keeps working when the
Wi-Fi does not. **Nothing a student types is stored, because there is nothing to type.**
The kiosk has no text inputs beyond the search box and no notebook; students write on
paper. The only `localStorage` keys are display preferences, chosen grade, and recently
viewed guides.

---

## What is in it

| Route | What it does |
| --- | --- |
| `#/` | Three ways in: search, pick a grade, pick a subject, or pick the app you were stuck in |
| `#/how` | The Unstuck Steps: the six moves to try before asking for help. Printable |
| `#/g/<grade>/<subject>` | All guides for that grade and subject, grouped by unit |
| `#/c/<id>` | A skill guide, rendered as a one-page study note (below) |
| `#/app/<appId>` | What a Timeback app teaches and which guides map to it |
| `#/search/<query>` | Kiosk results first, then kid-safe web search options |
| `#/library` | Resource Shelf: dictionaries, manipulatives, organizers, passages |
| `#/safesearch` | Where searches go and how to search well |

### Every guide IS a study note

Guides render in the **Alpha School / Future2 one-page study note** format, the same
sheet Guides already hand students before a test. Same artefact on screen and on
paper, so a student meets one thing, not two.

| Section | Comes from |
| --- | --- |
| Masthead: title, `Study note / subject / one page`, focus chip | `title`, `subject` |
| **You've got it when you can say** (claim in teal, caution in rust) | first two sentences of `plain` |
| **Practice example** (cream panel) | `example.prompt` |
| The picture | the first entry in `visual` |
| Word cards, each with a symbol | `words` |
| **The trap** / **The move** | `traps[0..1]` / the first two `steps` |
| **Now you try**, with write-on blanks | `check` questions |
| **Say it back (cover the sheet first)** | built from `words`, the move and the trap |
| Terse answer key, monospace | `check` answers, clipped at the first sentence |

"One topic, one page" is enforced rather than decorative: the sheet carries **one**
diagram and any others move to a screen-only fold. Sheets run 250 to 270 words
against about 240 for the printed originals, and `smoke.js` fails above 280.

Everything else (hands-on tools, the worked example, the full step list, extra traps,
links, related skills) sits below the sheet inside `.noprint` folds, so **Print**
yields the study note on its own.

The study-note palette is deliberately its own (teal, rust, cream, pink and green)
rather than the kiosk subject colours, so a printed sheet looks the same whatever
subject it came from. It is redefined for dark mode and high contrast.


### Tools sit on the guide, not in a tab

A virtual manipulative is a visual support, so burying it in the Resource Shelf
wasted it. `data/resources.js` defines `TOOLS` with a `when` rule (subject, unit
regex, grades); each guide shows **at most two** matched tools directly under its
picture. 142 of 145 guides get one. The three that do not are K-2 guides outside
the main audience.

`validate.py` fails if a guide has neither an external link nor a tool, so no guide
can end up with nowhere to send a student.

### Everything outward-facing is curated for grades 3-6

The test is simple: would a 9-year-old working alone get anywhere on this page? A
site they bounce off is worse than no link.

| | Before | Now |
| --- | --- | --- |
| Resource Shelf | 21 items | **11** |
| Safe-search engines | 9 | **5** |
| Per-guide links | 268, max 5 per guide | **201, max 2 per guide** |
| Adult-level links on guides | 114 | **0** |

Removed and why:

* **Grammar Monster, Grammar Bytes** (36 links) &mdash; adult grammar reference
* **Purdue OWL** (6) &mdash; a university writing lab
* **Reading Rockets** (52) &mdash; excellent, but its strategy pages are teacher PD:
  "Why use it / How to use it / Differentiate instruction"
* **CommonLit, Newsela, ReadWorks** &mdash; need accounts
* **Vocabulary.com, Etymonline, Membean** &mdash; pitched well above grade 6

Replaced with Khan Academy, ReadWriteThink, Wordsmyth Kids Dictionary, Ducksters and
Storyline Online. A side effect worth noting: every remaining link now verifies
cleanly, because the site that was blocking our checker is no longer linked.

### Note-taking coaching, not a notebook

There is no notebook and nothing is saved. The sheet itself carries the write-on
blanks, and a folded "Taking your own notes on this" panel coaches the habit: own
words, the shortest version that still works, the line you usually do in your head,
*your* error rather than a general warning, and a margin question to self-quiz from.
The prompt set varies by the guide's `note` type (`steps`, `frayer`, `strategy`,
`word`), so a vocabulary guide coaches word study and a procedure guide coaches
worked examples.


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
image licensing. There are 27 diagram types: vocabulary cards, place-value charts,
fraction bars, number lines, area models, tape diagrams, coordinate planes, Frayer
models, paragraph hamburgers, plot arcs, sentence anatomy, word-part maps, Venn
diagrams, ten frames, sound boxes, classification hierarchies, balance scales, slope
triangles, Pythagorean squares, bar graphs, tables, angle sets, cycles, decision forks,
shape cards, text structure maps, and a generic step flow chart every guide gets free.

Diagrams use a **six-hue categorical palette** (`--v1`..`--v6`, redefined per theme),
so anything showing several parallel things gives each one its own color. That lets a
class say "the orange step" instead of "the third step". The palette is redefined for
dark mode and again for high contrast, where every hue becomes a saturated color on
pure black.

**Why we do not source photographs or third-party diagrams.** This was tested, not
assumed. Wikimedia Commons is the only pool large enough to matter that is also safe to
redistribute, and its K-8 coverage is thin and stylistically wrong: the best CC0
candidates for fractions, angles, and place value turned out to be unlabeled, monochrome
encyclopedia line art or charts pitched years above grade. Number lines, ten frames,
protractors, bar graphs, clocks, money, slope, and box plots returned nothing usable at
all. Adopting them would make the kiosk less colorful and less targeted, so the visuals
are purpose-built instead. Colorful third-party material is reachable through the
Resource Shelf and the per-guide links, where licensing stays with the publisher.

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
* Print stylesheet for the Unstuck Steps poster and any guide
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

* **Lalilo is gone.** It is no longer used on this campus, so it is out of the app
  stack and off the nine guides that referenced it. The reason sits in the
  `data/apps.js` header next to the other exclusions.
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
* **Nothing a student writes is captured.** By design: notes go on paper. A Guide who
  wants to see a student's thinking looks at the paper, not at a screen.
* **The kiosk does not know what a student is working on.** It cannot read from
  Timeback, so the student has to name the skill. The "which app were you in" picker
  exists to narrow that down. If Timeback ever exposes a current-assignment API, that
  is the single highest-value integration.
* **Link rot is a maintenance cost.** The Checks workflow runs `check-links.py` on
  every push and every Monday. It fails only on genuinely broken links (404, 410, DNS);
  a 403 or 429 is reported separately because CI runs from a datacenter IP that some
  publishers block. All 110 links were live at build time.

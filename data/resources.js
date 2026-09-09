/* ============================================================
   Outside resources, kept deliberately short.

   Two separate things live here:

   TOOLS      hands-on things a student can move, drag or fill in.
              These are matched to a guide and shown ON the guide,
              right under the picture, because a manipulative is a
              visual support and burying it in a tab wastes it.

   RESOURCES  the Resource Shelf: a small browse list for when a
              student wants to poke around rather than fix one thing.

   Both are curated for grades 3-6 working on their own. That rules
   out anything needing an account, anything written for teachers,
   and anything pitched at high school or university. A site a
   9-year-old bounces off is worse than no link at all.
   ============================================================ */

/* ---------- tools shown directly on a guide ----------
   `when` decides which guides a tool appears on:
     subjects  which of the five kiosk subjects
     units     regex against the guide's unit
     grades    the guide must reach at least one of these
   At most two tools show on any one guide.                        */
window.TOOLS = [
  {
    id: 'toytheater',
    t: 'Toy Theater manipulatives',
    d: 'Blocks, fraction bars, coins, clocks.',
    u: 'https://toytheater.com/category/teacher-tools/virtual-manipulatives/',
    icon: 'grid',
    when: {
      subjects: ['math'],
      units: /Counting|Place value|Adding|Multiplication|Fractions|Geometry and measurement|Data/,
      grades: ['K', '1', '2', '3', '4', '5']
    }
  },
  {
    id: 'mlc',
    t: 'Math Learning Center apps',
    d: 'Number frames, number lines, money.',
    u: 'https://apps.mathlearningcenter.org/',
    icon: 'line',
    when: {
      subjects: ['math'],
      units: /Counting|Place value|Adding|Multiplication|Fractions|Decimals|Geometry and measurement|Data/,
      grades: ['K', '1', '2', '3', '4', '5', '6']
    }
  },
  {
    id: 'polypad',
    t: 'Polypad',
    d: 'Shapes and fraction pieces to drag.',
    u: 'https://polypad.amplify.com/',
    icon: 'parts',
    when: {
      subjects: ['math'],
      units: /Fractions|Geometry|Ratios|Expressions|Linear|Data/,
      grades: ['4', '5', '6', '7', '8']
    }
  },
  {
    id: 'rwt-interactive',
    t: 'ReadWriteThink interactives',
    d: 'Story maps and plot diagrams.',
    u: 'https://www.readwritethink.org/classroom-resources/student-interactives',
    icon: 'book',
    when: {
      subjects: ['reading', 'writing'],
      units: /Reading stories|Reading nonfiction|Understanding|Paragraphs|Essays|Genres|Getting started/,
      grades: ['3', '4', '5', '6', '7', '8']
    }
  },
  {
    id: 'rwt-print',
    t: 'ReadWriteThink printables',
    d: 'Organizers to print and plan on.',
    u: 'https://www.readwritethink.org/classroom-resources/printouts',
    icon: 'pencil',
    when: {
      subjects: ['writing'],
      units: /The writing process|Getting started|Paragraphs|Essays|Genres|Research/,
      grades: ['3', '4', '5', '6', '7', '8']
    }
  },
  {
    id: 'storyline',
    t: 'Storyline Online',
    d: 'Hear actors read books out loud.',
    u: 'https://storylineonline.net/',
    icon: 'sound',
    when: {
      subjects: ['reading'],
      units: /Sounds and letters|Reading smoothly|How books work|Reading stories|Understanding what you read/,
      grades: ['K', '1', '2', '3', '4']
    }
  },
  {
    id: 'wordsmyth-tool',
    t: 'Wordsmyth Kids Dictionary',
    d: 'A dictionary written for you.',
    u: 'https://kids.wordsmyth.net/we/',
    icon: 'search',
    when: {
      subjects: ['vocabulary'],
      units: /.*/,
      grades: ['2', '3', '4', '5', '6', '7', '8']
    }
  },
  {
    id: 'khan-grammar',
    t: 'Khan Academy grammar',
    d: 'Videos and practice, rule by rule.',
    u: 'https://www.khanacademy.org/humanities/grammar',
    icon: 'letters',
    when: {
      subjects: ['language'],
      units: /Building sentences|Parts of speech|Punctuation/,
      grades: ['3', '4', '5', '6', '7', '8']
    }
  },
  {
    id: 'wordsmyth-spelling',
    t: 'Wordsmyth Kids Dictionary',
    d: 'See the syllables and the spelling.',
    u: 'https://kids.wordsmyth.net/we/',
    icon: 'letters',
    when: {
      subjects: ['language'],
      units: /Spelling/,
      grades: ['2', '3', '4', '5', '6', '7', '8']
    }
  },
  {
    id: 'polypad-rational',
    t: 'Polypad number line',
    d: 'Drag along a number line.',
    u: 'https://polypad.amplify.com/',
    icon: 'line',
    when: {
      subjects: ['math'],
      units: /Rational numbers|Problem solving|Personal financial literacy/,
      grades: ['6', '7', '8']
    }
  },
  {
    id: 'rwt-craft',
    t: 'ReadWriteThink interactives',
    d: 'Plan your writing on screen.',
    u: 'https://www.readwritethink.org/classroom-resources/student-interactives',
    icon: 'pencil',
    when: {
      subjects: ['writing', 'reading'],
      units: /Craft|Research|Understanding what you read/,
      grades: ['3', '4', '5', '6', '7', '8']
    }
  },
  {
    id: 'desmos',
    t: 'Desmos graphing calculator',
    d: 'Type an equation, watch the line.',
    u: 'https://www.desmos.com/calculator',
    icon: 'point',
    when: {
      subjects: ['math'],
      units: /Linear relationships/,
      grades: ['7', '8']
    }
  }
];

/* ---------- the browse shelf ---------- */
window.RESOURCES = [
  {
    group: 'Look it up',
    blurb: 'When you need a word or a fact, written at your level.',
    items: [
      { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/',
        d: 'Word meanings in kid language, not dictionary language.' },
      { t: 'Simple Wikipedia', u: 'https://simple.wikipedia.org/wiki/Main_Page',
        d: 'Real encyclopedia articles written in easier English.' },
      { t: 'Ducksters', u: 'https://www.ducksters.com/',
        d: 'Short articles on history, science and biographies.' }
    ]
  },
  {
    group: 'See it explained',
    blurb: 'Short explanations with pictures and worked examples.',
    items: [
      { t: 'Math is Fun', u: 'https://www.mathsisfun.com/index.htm',
        d: 'Every math idea with a diagram and an example.' },
      { t: 'Khan Academy', u: 'https://www.khanacademy.org/',
        d: 'Short videos and practice for math, grammar and reading.' },
      { t: 'PBS LearningMedia', u: 'https://www.pbslearningmedia.org/',
        d: 'Short videos and interactives on almost any topic.' }
    ]
  },
  {
    group: 'Move the pieces yourself',
    blurb: 'Drag things around until the idea makes sense. Best when a picture is not enough.',
    items: [
      { t: 'Toy Theater manipulatives', u: 'https://toytheater.com/category/teacher-tools/virtual-manipulatives/',
        d: 'Base ten blocks, fraction bars, coins and clocks.' },
      { t: 'Math Learning Center apps', u: 'https://apps.mathlearningcenter.org/',
        d: 'Number frames, number lines and money you can move.' },
      { t: 'Polypad', u: 'https://polypad.amplify.com/',
        d: 'Shapes, fraction pieces and tiles on an open canvas.' },
      { t: 'ReadWriteThink interactives', u: 'https://www.readwritethink.org/classroom-resources/student-interactives',
        d: 'Story maps, plot diagrams, Venns and timelines you fill in.' }
    ]
  },
  {
    group: 'Read and listen',
    blurb: 'For when the fix is just more reading.',
    items: [
      { t: 'Storyline Online', u: 'https://storylineonline.net/',
        d: 'Actors reading picture books out loud.' }
    ]
  }
];

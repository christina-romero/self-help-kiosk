/* ============================================================
   The kiosk's shared resource shelf: sites students are allowed
   to open from here. Every URL in this file is checked by
   tools/check-links.py. Keep the list short enough that a
   student can actually scan it.
   ============================================================ */
window.RESOURCES = [
  {
    group: 'Look it up',
    blurb: 'Dictionaries and encyclopedias written for your reading level.',
    items: [
      { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/', d: 'Definitions in kid language, with example sentences.' },
      { t: 'Simple Wikipedia', u: 'https://simple.wikipedia.org/wiki/Main_Page', d: 'Real encyclopedia articles rewritten in easier English.' },
      { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Plain-English definitions plus how the word is really used.' },
      { t: 'Ducksters', u: 'https://www.ducksters.com/', d: 'History, science, and biography articles written for students.' },
      { t: 'Online Etymology Dictionary', u: 'https://www.etymonline.com/', d: 'Where a word came from. Best for grades 6-8 word roots.' }
    ]
  },
  {
    group: 'See it explained',
    blurb: 'Short explanations with diagrams and worked examples.',
    items: [
      { t: 'Math is Fun', u: 'https://www.mathsisfun.com/index.htm', d: 'Every math topic K-8, each with a picture and an example.' },
      { t: 'Khan Academy', u: 'https://www.khanacademy.org/', d: 'Video lessons and practice for math, grammar, and reading.' },
      { t: 'Reading Rockets: strategies', u: 'https://www.readingrockets.org/classroom/classroom-strategies', d: 'How each reading and writing strategy works, with examples.' },
      { t: 'Grammar Bytes', u: 'https://chompchomp.com/handouts.htm', d: 'One-page grammar handouts you can print.' },
      { t: 'Grammar Monster', u: 'https://www.grammar-monster.com/grammar_terms_and_definitions.htm', d: 'A grammar term explained in one screen with examples.' },
      { t: 'PBS LearningMedia', u: 'https://www.pbslearningmedia.org/', d: 'Short videos and interactives on almost any school topic.' }
    ]
  },
  {
    group: 'Try it with a tool',
    blurb: 'Virtual manipulatives and organizers: move the pieces around until it makes sense.',
    items: [
      { t: 'Math Learning Center apps', u: 'https://apps.mathlearningcenter.org/', d: 'Number frames, fractions, number lines, geoboard, money.' },
      { t: 'Polypad', u: 'https://polypad.amplify.com/', d: 'Drag-and-drop fraction bars, algebra tiles, number tiles, and grids.' },
      { t: 'Toy Theater manipulatives', u: 'https://toytheater.com/category/teacher-tools/virtual-manipulatives/', d: 'Base ten blocks, counters, clocks, and rulers.' },
      { t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', d: 'Type an equation and watch the line appear. Grades 6-8.' },
      { t: 'ReadWriteThink interactives', u: 'https://www.readwritethink.org/classroom-resources/student-interactives', d: 'Plot diagram, timeline, compare-contrast, and comic organizers.' },
      { t: 'ReadWriteThink printouts', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Blank graphic organizers you can print and fill in by hand.' }
    ]
  },
  {
    group: 'Read something',
    blurb: 'Real passages at a level you can handle, for when the fix is just more reading.',
    items: [
      { t: 'CommonLit', u: 'https://www.commonlit.org/', d: 'Free reading passages with questions, sorted by grade.' },
      { t: 'ReadWorks', u: 'https://www.readworks.org/', d: 'Nonfiction and fiction passages with comprehension sets.' },
      { t: 'Storyline Online', u: 'https://storylineonline.net/', d: 'Picture books read aloud. Good for hearing fluent reading.' },
      { t: 'Reading Rockets: fluency', u: 'https://www.readingrockets.org/topics/fluency', d: 'What fluent reading sounds like and how to build it.' }
    ]
  }
];

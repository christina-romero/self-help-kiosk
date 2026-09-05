/* ============================================================
   Self-Help Kiosk: application shell
   Hash router, concept renderer, and safe search.
   Nothing a student types is stored: they write on paper instead.
   No build step and no network calls: the whole kiosk runs from
   the file system so it keeps working if the Wi-Fi drops.
   ============================================================ */
(function () {
  'use strict';

  var GRADES = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];
  var SUBJECTS = [
    { id: 'reading', name: 'Reading', cls: 's-reading', icon: '📖', blurb: 'Understanding what you read: main idea, inferences, plot, text structure.' },
    { id: 'language', name: 'Language', cls: 's-language', icon: '🔤', blurb: 'Grammar, punctuation, spelling patterns, and how sentences are built.' },
    { id: 'writing', name: 'Writing', cls: 's-writing', icon: '✏️', blurb: 'Planning, drafting, and revising sentences, paragraphs, and essays.' },
    { id: 'vocabulary', name: 'Vocabulary', cls: 's-vocabulary', icon: '💬', blurb: 'Figuring out new words with context clues, roots, prefixes, and suffixes.' },
    { id: 'math', name: 'Math', cls: 's-math', icon: '🔢', blurb: 'Number sense, operations, fractions, algebra, geometry, and data.' }
  ];
  var SUBJ_BY_ID = {};
  SUBJECTS.forEach(function (s) { SUBJ_BY_ID[s.id] = s; });
  var APP_BY_NAME = {};
  (window.APPS || []).forEach(function (a) { APP_BY_NAME[a.name] = a; });

  // Order units the way the skills actually build, not alphabetically and not
  // by whichever data file happened to load first.
  var UNIT_ORDER = {
    math: ['Counting and early number', 'Place value', 'Adding and subtracting',
      'Multiplication and division', 'Fractions', 'Decimals', 'Rational numbers',
      'Ratios and proportions', 'Expressions and equations', 'Linear relationships',
      'Geometry and measurement', 'Geometry', 'Data', 'Data and probability',
      'Problem solving', 'Personal financial literacy'],
    reading: ['Sounds and letters', 'How books work', 'Reading smoothly',
      'Understanding what you read', 'Reading stories', 'Reading nonfiction', 'Research'],
    language: ['Building sentences', 'Parts of speech', 'Punctuation', 'Spelling'],
    writing: ['Getting started', 'The writing process', 'Paragraphs', 'Essays',
      'Genres', 'Craft', 'Research writing'],
    vocabulary: ['Figuring out new words', 'Word parts', 'Word meaning',
      'Looking words up', 'Academic words', 'Making words stick']
  };

  // Prompts a student copies onto paper. These exist to build note-taking
  // SKILL, not to collect answers, so every prompt names the habit and the
  // reason a strong note-taker does it that way. Nothing is stored anywhere.
  var PAPER_HABITS = [
    'Head the page with the skill name and today’s date, so you can find it again.',
    'Write in your own words. A copied note teaches you nothing.',
    'Leave a wide margin down the left. Questions go there later.',
    'Draw the picture. A note with no diagram is half a note.'
  ];
  var PAPER_PROMPTS = {
    steps: [
      { l: 'Say it in your own words', h: 'One or two sentences, the way you would explain it to a friend. If you cannot, reread step 3.' },
      { l: 'Number your steps, shortest version that still works', h: 'Cut every word you do not need. Put the step you always forget in CAPITALS.' },
      { l: 'Work one example all the way through', h: 'Copy the problem, then show every line. Do not skip the line you usually do in your head.' },
      { l: 'Write the mistake YOU made, not a general warning', h: '"I forgot to bring down the 0" beats "be careful".' },
      { l: 'In the margin, write one question this note answers', h: 'Cover the note later and answer it from memory. That is how you find out if it stuck.' }
    ],
    frayer: [
      { l: 'Your own definition', h: 'Not the words on this screen. If you cannot say it yours, you do not have it yet.' },
      { l: 'Draw it or list what is always true about it', h: 'Pictures and properties are what you will actually recall.' },
      { l: 'Two examples', h: 'Two, not one. One example is a memory; two is a pattern.' },
      { l: 'One non-example, and why it does not count', h: 'The "why not" is where the understanding lives.' },
      { l: 'In the margin, write the question this answers', h: 'Something like "what makes a shape a polygon?"' }
    ],
    strategy: [
      { l: 'Name the signal that tells you to use this', h: 'What does the question look like when this is the right move? That is the trigger.' },
      { l: 'Your steps, in order, in your own words', h: 'Short lines. This is a recipe you will reread under time pressure.' },
      { l: 'One place it worked', h: 'A real question you got right using it. Proof beats theory.' },
      { l: 'Where you slipped, and the fix', h: 'Name your own error precisely so you can catch it next time.' },
      { l: 'In the margin, write the trigger as a question', h: '"When do I use context clues?" Then quiz yourself from it.' }
    ],
    word: [
      { l: 'The word, then your own definition', h: 'Dictionary wording will not stick. Yours will.' },
      { l: 'Break it into parts and label them', h: 'Prefix, root, suffix, and what each part means.' },
      { l: 'A sentence about your real life', h: 'Not a generic example. Your sentence, about you.' },
      { l: 'Words you might mix it up with', h: 'Write the near-misses next to it so you can tell them apart later.' },
      { l: 'In the margin, write the word alone', h: 'Cover the page, read just the word, and say the meaning out loud.' }
    ]
  };

  var UNSAFE = ['porn', 'nude', 'naked', 'sex', 'xxx', 'kill myself', 'suicide', 'self harm', 'selfharm',
    'how to hurt', 'drugs to', 'buy weed', 'gore', 'behead', 'weapon to make', 'make a bomb', 'bomb'];

  var SEARCH_ENGINES = [
    { id: 'kiddle', n: 'Kiddle', d: 'A search engine just for kids. Results are filtered by editors.', ic: '🧒', u: 'https://www.kiddle.co/s.php?q=' },
    { id: 'simplewiki', n: 'Simple Wikipedia', d: 'Real encyclopedia articles written in easier English.', ic: '📘', u: 'https://simple.wikipedia.org/w/index.php?search=' },
    { id: 'khan', n: 'Khan Academy', d: 'Video lessons and practice for math, grammar, and reading.', ic: '🎥', u: 'https://www.khanacademy.org/search?page_search_query=' },
    { id: 'mathsisfun', n: 'Math is Fun', d: 'Short math explanations with pictures and examples.', ic: '🔢', u: 'https://www.mathsisfun.com/search/search.html?query=' },
    { id: 'ducksters', n: 'Ducksters', d: 'Articles on history, science, and biographies, written for students.', ic: '🦆', u: 'https://www.ducksters.com/searchducksters.php?q=' },
    { id: 'wordsmyth', n: 'Wordsmyth Kids Dictionary', d: 'Look up what a word means, in kid language.', ic: '📗', u: 'https://kids.wordsmyth.net/we/?ent=' },
    { id: 'kidtopia', n: 'Kidtopia', d: 'A search engine that only returns pages teachers have approved.', ic: '🧭', u: 'https://www.kidtopia.info/searchresults.html?q=' },
    { id: 'natgeokids', n: 'National Geographic Kids', d: 'Science, animals, and geography from a source you can trust.', ic: '🌍', u: 'https://kids.nationalgeographic.com/search?q=' },
    { id: 'pbslearning', n: 'PBS LearningMedia', d: 'Short videos and interactives from PBS.', ic: '📺', u: 'https://www.pbslearningmedia.org/search/?q=' }
  ];

  /* ---------------- storage ---------------- */
  var LS = {
    get: function (k, fb) {
      try { var v = localStorage.getItem(k); return v == null ? fb : JSON.parse(v); }
      catch (e) { return fb; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { } }
  };
  var K_PREFS = 'shk.prefs.v1', K_GRADE = 'shk.grade.v1', K_RECENT = 'shk.recent.v1';

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function gradeLabel(g) { return g === 'K' ? 'Kindergarten' : 'Grade ' + g; }
  function gradeShort(g) { return g === 'K' ? 'K' : g; }

  var CONCEPTS = (window.CONCEPTS || []).slice();
  var BY_ID = {};
  CONCEPTS.forEach(function (c) { BY_ID[c.id] = c; });

  function teksKey(c, code) { return (c.subject === 'math' ? 'MATH|' : 'ELAR|') + code; }
  function teksText(c, code) {
    var e = window.TEKS && window.TEKS[teksKey(c, code)];
    return e ? e.t : null;
  }

  function conceptsFor(grade, subject) {
    return CONCEPTS.filter(function (c) {
      return (!subject || c.subject === subject) && (!grade || c.grades.indexOf(grade) > -1);
    });
  }

  /* ---------------- search ---------------- */
  function tokenize(s) {
    return String(s || '').toLowerCase().replace(/[^a-z0-9+\-/. ]/g, ' ').split(/\s+/).filter(Boolean);
  }
  var STOP = { a: 1, an: 1, the: 1, i: 1, im: 1, is: 1, are: 1, to: 1, of: 1, on: 1, in: 1, do: 1, how: 1, what: 1, my: 1, me: 1, it: 1, and: 1, with: 1, for: 1, dont: 1, cant: 1, help: 1, stuck: 1 };

  function searchConcepts(q, grade) {
    var toks = tokenize(q).filter(function (t) { return !STOP[t] && t.length > 1; });
    if (!toks.length) return [];
    return CONCEPTS.map(function (c) {
      var hay = {
        title: (c.title + ' ' + (c.alt || '')).toLowerCase(),
        say: (c.stuck || []).join(' ').toLowerCase(),
        body: (c.plain + ' ' + (c.steps || []).join(' ') + ' ' + (c.words || []).map(function (w) { return w.w + ' ' + w.d; }).join(' ')).toLowerCase(),
        tags: ((c.teks || []).join(' ') + ' ' + (c.apps || []).join(' ') + ' ' + c.subject).toLowerCase()
      };
      var score = 0;
      toks.forEach(function (t) {
        if (hay.title.indexOf(t) > -1) score += 12;
        if (hay.say.indexOf(t) > -1) score += 7;
        if (hay.tags.indexOf(t) > -1) score += 5;
        if (hay.body.indexOf(t) > -1) score += 2;
      });
      if (score && grade && c.grades.indexOf(grade) > -1) score += 9;
      return { c: c, score: score };
    }).filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score || a.c.title.localeCompare(b.c.title); })
      .map(function (r) { return r.c; });
  }

  /* ---------------- components ---------------- */
  function conceptCard(c, opts) {
    opts = opts || {};
    var s = SUBJ_BY_ID[c.subject];
    var meta = '';
    if (opts.showSubject) meta += '<span class="tag">' + esc(s.name) + '</span>';
    meta += '<span class="tag tag-grade">' + (c.grades.length > 3
      ? 'Gr ' + gradeShort(c.grades[0]) + '–' + gradeShort(c.grades[c.grades.length - 1])
      : c.grades.map(gradeShort).join(', ')) + '</span>';
    // Show the TEKS code for the grade being browsed, not just the first one
    // in the list, so a grade 7 card never advertises a grade 3 standard.
    var codes = c.teks || [];
    if (opts.grade) {
      var forGrade = codes.filter(function (tk) { return tk.indexOf(opts.grade + '.') === 0; });
      if (forGrade.length) codes = forGrade;
    }
    codes.slice(0, 2).forEach(function (tk) { meta += '<span class="tag tag-teks">TEKS ' + esc(tk) + '</span>'; });
    (c.apps || []).slice(0, 2).forEach(function (a) { meta += '<span class="tag tag-app">' + esc(a) + '</span>'; });
    return '<a class="citem ' + s.cls + '" href="#/c/' + esc(c.id) + '">' +
      '<b>' + esc(c.title) + '</b>' +
      (c.stuck && c.stuck[0] ? '<span class="say">“' + esc(c.stuck[0]) + '”</span>' : '') +
      '<span class="meta">' + meta + '</span></a>';
  }

  function gradeBar(active, subject) {
    return '<div class="gradebar">' + GRADES.map(function (g) {
      var href = '#/g/' + g + (subject ? '/' + subject : '');
      var n = conceptsFor(g, subject).length;
      return '<a class="gradebtn" href="' + href + '"' + (g === active ? ' aria-current="page"' : '') + '>' +
        gradeShort(g) + '<small>' + n + ' guide' + (n === 1 ? '' : 's') + '</small></a>';
    }).join('') + '</div>';
  }

  /* ---------------- views ---------------- */
  var V = {};

  V.home = function () {
    var g = LS.get(K_GRADE, null);
    var recent = (LS.get(K_RECENT, []) || []).map(function (id) { return BY_ID[id]; }).filter(Boolean).slice(0, 4);

    // No search box here on purpose: the one in the header is on every page.
    var h = '<section class="hero">' +
      '<h1>What are you stuck on?</h1>' +
      '<p>This kiosk is for the moment your app says you got it wrong and you are not sure why. Find your skill, look at the pictures, follow the steps, then write it on your paper so you own it next time.</p>' +
      '<p class="muted" style="margin-bottom:0">Use the search box at the top of the screen, or start with one of these:</p>' +
      '<div class="chips">' +
      ['equivalent fractions', 'main idea', 'long division', 'commas', 'context clues', 'inference', 'unit rate', 'topic sentence']
        .map(function (q) { return '<a class="chip" href="#/search/' + encodeURIComponent(q) + '">' + esc(q) + '</a>'; }).join('') +
      '</div></section>';

    h += '<section class="panel"><h2>1. Pick your grade</h2>' +
      '<p class="muted">Not sure? Pick the grade you are in. The kiosk will still show you skills from the grade below if you need them.</p>' +
      gradeBar(g) + '</section>';

    h += '<section class="panel"><h2>2. Or pick what you are working on</h2><div class="grid g-3">' +
      SUBJECTS.map(function (s) {
        var n = conceptsFor(g, s.id).length || conceptsFor(null, s.id).length;
        return '<a class="tile ' + s.cls + '" href="#/g/' + (g || '3') + '/' + s.id + '">' +
          '<h3>' + s.icon + ' ' + esc(s.name) + '</h3><p>' + esc(s.blurb) + '</p>' +
          '<span class="cnt">' + n + ' guides</span></a>';
      }).join('') + '</div></section>';

    h += '<section class="panel"><h2>3. Or start from the app you were in</h2>' +
      '<p class="muted">Tap the Timeback app that gave you trouble and the kiosk will show the skills that app teaches.</p>' +
      '<div class="chips">' + (window.APPS || []).map(function (a) {
        return '<a class="chip" href="#/app/' + encodeURIComponent(a.id) + '">' + esc(a.name) + '</a>';
      }).join('') + '</div></section>';

    if (recent.length) {
      h += '<section class="panel"><h2>Where you left off</h2><div class="clist">' +
        recent.map(function (c) { return conceptCard(c, { showSubject: true }); }).join('') + '</div></section>';
    }

    h += '<section class="grid g-2">' +
      '<a class="tile s-math" href="#/how"><h3>🧭 The Unstuck Steps</h3><p>The six moves to try, in order, before you ask anyone for help. Print it and keep it at your desk.</p></a>' +
      '<a class="tile s-vocabulary" href="#/library"><h3>📚 Resource Shelf</h3><p>Dictionaries, virtual manipulatives, printable organizers, and reading passages your school already trusts.</p></a></section>';
    return h;
  };

  V.how = function () {
    var steps = [
      { h: 'Read it again: out loud if you can', p: 'Most "I do not get it" moments are really "I read it too fast." Read the question again and say what it is actually asking you to find.', s: 'This question wants me to find ______.' },
      { h: 'Name the skill', p: 'You cannot look up "I got it wrong." You can look up "comparing fractions." Find the words the app used at the top of the lesson and type those into this kiosk.', s: 'The skill is called ______.' },
      { h: 'Look at the picture first', p: 'Every guide in this kiosk starts with a diagram or a flow chart. Look at that before you read anything. Pictures load into your head faster than sentences.', s: 'In the picture I notice ______.' },
      { h: 'Follow the steps on one problem', p: 'Do not read all the steps and nod. Take one real problem from your app and do it with the steps in front of you, one line at a time.', s: 'Step 1 says ______, so I will ______.' },
      { h: 'Check the traps list', p: 'Each guide has a "Watch out" list of the exact mistakes students make on that skill. Find yours. That is usually the whole problem.', s: 'My mistake was ______.' },
      { h: 'Write it on your paper, then go back', p: 'Write it in your own words on paper before you leave the page. If you cannot write it, you do not have it yet: reread the steps. Then go back to your app and try again.', s: 'Next time I will remember to ______.' }
    ];
    return '<h1>The Unstuck Steps</h1>' +
      '<p class="muted" style="max-width:64ch">Try these in order. Most of the time you will be moving again by step 4. If you get all the way through step 6 and you are still stuck, that is exactly when you should go get your Guide. And now you can tell them precisely where it broke down.</p>' +
      '<ol class="proto">' + steps.map(function (s) {
        return '<li><h3>' + esc(s.h) + '</h3><p>' + esc(s.p) + '</p><span class="say">' + esc(s.s) + '</span></li>';
      }).join('') + '</ol>' +
      '<div class="panel"><h2>When you do go ask</h2>' +
      '<p>Bring these three sentences. A Guide can help you in 30 seconds instead of 10 minutes.</p>' +
      '<ul class="words"><li><b>1.</b> I am working on <i>(skill name)</i> in <i>(app name)</i>.</li>' +
      '<li><b>2.</b> I already tried <i>(what you did)</i>.</li>' +
      '<li><b>3.</b> The part I do not understand is <i>(the exact step)</i>.</li></ul>' +
      '<p class="noprint" style="margin-top:1rem"><button class="btn" onclick="window.print()">🖨️ Print this page</button></p></div>';
  };

  V.grade = function (g, subjId) {
    if (GRADES.indexOf(g) < 0) return V.notfound();
    LS.set(K_GRADE, g);
    var h = '<p class="crumbs"><a href="#/">Home</a> › ' + esc(gradeLabel(g)) + (subjId ? ' › ' + esc(SUBJ_BY_ID[subjId].name) : '') + '</p>';
    h += '<h1>' + esc(gradeLabel(g)) + '</h1>';
    h += '<div class="panel"><h2 style="font-size:1rem">Change grade</h2>' + gradeBar(g, subjId) + '</div>';

    if (!subjId) {
      h += '<div class="grid g-3">' + SUBJECTS.map(function (s) {
        var n = conceptsFor(g, s.id).length;
        return '<a class="tile ' + s.cls + '" href="#/g/' + g + '/' + s.id + '">' +
          '<h3>' + s.icon + ' ' + esc(s.name) + '</h3><p>' + esc(s.blurb) + '</p>' +
          '<span class="cnt">' + n + ' guide' + (n === 1 ? '' : 's') + '</span></a>';
      }).join('') + '</div>';
      return h;
    }

    var s = SUBJ_BY_ID[subjId];
    if (!s) return V.notfound();
    var list = conceptsFor(g, subjId);
    h += '<div class="panel ' + s.cls + '"><div class="spread"><div>' +
      '<h2 style="color:var(--sc)">' + s.icon + ' ' + esc(s.name) + ': ' + esc(gradeLabel(g)) + '</h2>' +
      '<p class="muted" style="margin:0">' + esc(s.blurb) + '</p></div>' +
      '<div class="row">' + SUBJECTS.filter(function (x) { return x.id !== subjId; }).map(function (x) {
        return '<a class="chip" href="#/g/' + g + '/' + x.id + '">' + x.icon + ' ' + esc(x.name) + '</a>';
      }).join('') + '</div></div></div>';

    if (!list.length) {
      h += '<div class="empty"><div class="big">🔍</div><p>No ' + esc(s.name.toLowerCase()) +
        ' guides are tagged for ' + esc(gradeLabel(g)) + ' yet.</p>' +
        '<p><a class="btn" href="#/g/' + g + '">See other subjects for this grade</a></p></div>';
      return h;
    }

    // group by the concept's own "unit" label, ordered by how skills build
    var groups = {}, order = [];
    list.forEach(function (c) {
      var u = c.unit || 'Other skills';
      if (!groups[u]) { groups[u] = []; order.push(u); }
      groups[u].push(c);
    });
    var pref = UNIT_ORDER[subjId] || [];
    order.sort(function (a, b) {
      var ia = pref.indexOf(a), ib = pref.indexOf(b);
      if (ia < 0) ia = 999; if (ib < 0) ib = 999;
      return ia - ib || a.localeCompare(b);
    });
    h += order.map(function (u) {
      return '<section class="panel ' + s.cls + '"><h2 style="font-size:1.08rem;color:var(--sc)">' + esc(u) + '</h2>' +
        '<div class="clist">' + groups[u].map(function (c) { return conceptCard(c, { grade: g }); }).join('') + '</div></section>';
    }).join('');
    return h;
  };

  V.concept = function (id) {
    var c = BY_ID[id];
    if (!c) return V.notfound();
    var s = SUBJ_BY_ID[c.subject];

    // remember
    var rec = LS.get(K_RECENT, []) || [];
    rec = [id].concat(rec.filter(function (x) { return x !== id; })).slice(0, 8);
    LS.set(K_RECENT, rec);

    var h = '<div class="' + s.cls + '">';
    h += '<p class="crumbs"><a href="#/">Home</a> › <a href="#/g/' + c.grades[0] + '">' + esc(gradeLabel(c.grades[0])) +
      '</a> › <a href="#/g/' + c.grades[0] + '/' + c.subject + '">' + esc(s.name) + '</a> › ' + esc(c.title) + '</p>';

    h += '<header class="chead"><h1>' + esc(c.title) + '</h1>' +
      (c.stuck && c.stuck.length ? '<p class="say">Sounds like you if you are thinking: “' + c.stuck.map(esc).join('” or “') + '”</p>' : '') +
      '<div class="row">' +
      '<span class="tag tag-grade">' + c.grades.map(function (g) { return gradeShort(g); }).join(' · ') + '</span>' +
      ((c.apps && c.apps.length)
        ? c.apps.map(function (a) {
            var app = APP_BY_NAME[a];
            return '<span class="tag tag-app"' + (app ? ' title="' + esc(app.subject + ' · ' + app.grades) + '"' : '') +
              '>' + esc(a) + (app && app.role === 'hole-filling' ? ' (hole-filling)' : '') + '</span>';
          }).join('')
        : '<span class="tag">No Timeback app at this grade yet</span>') +
      (c.teks || []).map(function (tk) {
        var txt = teksText(c, tk);
        return '<span class="tag tag-teks"' + (txt ? ' title="' + esc(txt) + '"' : '') + '>TEKS ' + esc(tk) + '</span>';
      }).join('') +
      '</div></header>';

    h += '<nav class="steps-nav" aria-label="Sections of this guide">' +
      '<a href="#sec-what">What it means</a><a href="#sec-see">See it</a><a href="#sec-do">Do it</a>' +
      '<a href="#sec-watch">Watch out</a><a href="#sec-check">Check yourself</a><a href="#sec-note">Write it down</a>' +
      (c.links && c.links.length ? '<a href="#sec-more">More help</a>' : '') + '</nav>';

    /* 1: what it means */
    h += '<section class="step" id="sec-what"><h2><span class="num">1</span> What it means</h2>' +
      '<p style="font-size:1.06rem">' + esc(c.plain) + '</p>' +
      (c.why ? '<p class="muted"><b>Why it matters:</b> ' + esc(c.why) + '</p>' : '') +
      // New vocabulary always gets a picture, never a bare list of definitions.
      (c.words && c.words.length
        ? '<h3 style="font-size:.95rem;margin-top:1rem">Words you need</h3>' +
          window.Viz.render({ type: 'vocab', words: c.words, title: null,
            caption: 'Say each word out loud before you go on. If a word is new, it goes on your paper.' })
        : '') +
      '</section>';

    /* 2: see it */
    var vizHtml = window.Viz.render(c.visual);
    var flowHtml = window.Viz.render({ type: 'flow', steps: c.steps || [], caption: 'The same steps as a flow chart. Follow the arrows.' });
    h += '<section class="step" id="sec-see"><h2><span class="num">2</span> See it</h2>' +
      '<p class="muted">Look at the picture before you read anything else.</p>' +
      (vizHtml || '') + (vizHtml ? '' : flowHtml) + '</section>';

    /* 3: do it */
    h += '<section class="step" id="sec-do"><h2><span class="num">3</span> Do it: step by step</h2>' +
      '<ol class="howto">' + (c.steps || []).map(function (st) { return '<li>' + esc(st) + '</li>'; }).join('') + '</ol>';
    if (vizHtml) h += '<h3 style="font-size:.95rem;margin-top:1.1rem">The same steps as a flow chart</h3>' + flowHtml;
    if (c.example) {
      h += '<h3 style="font-size:.95rem;margin-top:1.1rem">Worked example</h3><div class="worked">' +
        '<p class="wq">' + esc(c.example.prompt) + '</p>' +
        '<ol>' + (c.example.work || []).map(function (w) { return '<li>' + esc(w) + '</li>'; }).join('') + '</ol>' +
        '<p style="margin:0"><span class="wa">Answer: ' + esc(c.example.answer) + '</span></p></div>';
    }
    h += '</section>';

    /* 4: watch out */
    h += '<section class="step" id="sec-watch"><h2><span class="num">4</span> Watch out for these</h2>' +
      '<p class="muted">These are the mistakes people actually make on this skill. Find yours.</p>' +
      '<ul class="traps">' + (c.traps || []).map(function (tr) { return '<li>' + esc(tr) + '</li>'; }).join('') + '</ul></section>';

    /* 5: check yourself */
    h += '<section class="step" id="sec-check"><h2><span class="num">5</span> Check yourself</h2>' +
      '<p class="muted">Answer in your head or on scrap paper first. Then open the answer.</p>' +
      (c.check || []).map(function (q, i) {
        return '<details class="qa"><summary>' + esc(q.q) + '</summary><div class="ans"><b>Answer:</b> ' + esc(q.a) + '</div></details>';
      }).join('') + '</section>';

    /* 6: write it on paper. Nothing is stored on the device by design. */
    var prompts = PAPER_PROMPTS[c.note || 'steps'] || PAPER_PROMPTS.steps;
    h += '<section class="step" id="sec-note"><h2><span class="num">6</span> Write this on your paper</h2>' +
      '<p class="muted">This is where you practise taking a note worth keeping. Writing it by hand in your own words is what moves it into your memory. If you cannot write it, go back to step 3. That is the signal, not a failure.</p>' +
      '<div class="paper"><p class="paper-head">' + esc(c.title) + '</p><ol class="paper-list">' +
      prompts.map(function (f) {
        return '<li><b>' + esc(f.l) + '</b>' + (f.h ? '<span>' + esc(f.h) + '</span>' : '') + '</li>';
      }).join('') + '</ol></div>' +
      '<div class="habits"><h3>What makes a note worth keeping</h3><ul>' +
      PAPER_HABITS.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<p class="habit-test"><b>Test it before you move on:</b> cover the page and say the skill out loud from memory. ' +
      'If you can, the note works. If you cannot, add what was missing now, while you still remember what confused you.</p></div>' +
      '</section>';

    /* 7: more help */
    if (c.links && c.links.length) {
      h += '<section class="step" id="sec-more"><h2><span class="num">+</span> More help on the web</h2>' +
        '<p class="muted">These open in a new tab. They are teaching sites your school already uses.</p>' +
        '<ul class="links">' + c.links.map(function (l) {
          return '<li><a href="' + esc(l.u) + '" target="_blank" rel="noopener noreferrer">' +
            '<span><span class="lt">' + esc(l.t) + '</span>' + (l.d ? '<span class="ld">' + esc(l.d) + '</span>' : '') + '</span>' +
            '<span class="ext">opens in new tab ↗</span></a></li>';
        }).join('') + '</ul></section>';
    }

    /* TEKS + related */
    var teksRows = (c.teks || []).map(function (tk) {
      var txt = teksText(c, tk);
      return '<li><b>' + esc(tk) + '</b>: ' + esc(txt || 'see the TEKS for this grade') + '</li>';
    }).join('');
    h += '<section class="panel"><h2 style="font-size:1rem">What this is called in the TEKS</h2>' +
      '<p class="muted" style="font-size:.85rem">This is the official Texas standard behind this skill. Useful when you talk to your Guide.</p>' +
      '<ul class="words">' + teksRows + '</ul></section>';

    var related = CONCEPTS.filter(function (x) {
      return x.id !== c.id && x.subject === c.subject &&
        (x.unit === c.unit || x.grades.some(function (g) { return c.grades.indexOf(g) > -1; }));
    }).slice(0, 6);
    if (related.length) {
      h += '<section class="panel"><h2 style="font-size:1rem">Next, you might need…</h2><div class="clist">' +
        related.map(function (x) { return conceptCard(x, { grade: c.grades[0] }); }).join('') + '</div></section>';
    }

    h += '<div class="notice"><p><b>Still stuck after all six steps?</b> That is the right time to ask. Go to your Guide and say: “I am on <i>' +
      esc(c.title) + '</i> in ' + esc((c.apps || ['my app'])[0]) + '. I tried the steps. The part I do not get is ___.”</p></div>';

    return h + '</div>';
  };

  V.app = function (appId) {
    var a = (window.APPS || []).filter(function (x) { return x.id === appId; })[0];
    if (!a) return V.notfound();
    var list = CONCEPTS.filter(function (c) { return (c.apps || []).indexOf(a.name) > -1; });
    var h = '<p class="crumbs"><a href="#/">Home</a> › Apps › ' + esc(a.name) + '</p>';
    var ROLE = { core: 'Your grade-level course', 'hole-filling': 'Runs underneath to close gaps', both: 'Core course and hole-filling' };
    h += '<h1>' + esc(a.name) + '</h1><div class="panel"><div class="row" style="margin-bottom:.6rem">' +
      '<span class="tag">' + esc(a.subject) + '</span><span class="tag tag-grade">' + esc(a.grades) + '</span>' +
      (a.role ? '<span class="tag tag-teks">' + esc(ROLE[a.role] || a.role) + '</span>' : '') +
      (a.alpha ? '<span class="tag tag-app">Built by Alpha</span>' : '<span class="tag">Third-party app</span>') + '</div>' +
      '<p>' + esc(a.what) + '</p>' +
      (a.stuck ? '<p class="muted"><b>What students usually get stuck on here:</b> ' + esc(a.stuck) + '</p>' : '') + '</div>';
    if (list.length) {
      h += '<section class="panel"><h2>Kiosk guides for what this app teaches</h2><div class="clist">' +
        list.map(function (c) { return conceptCard(c, { showSubject: true }); }).join('') + '</div></section>';
    } else {
      h += '<div class="empty"><div class="big">🧭</div><p>No guides are tagged to this app yet. Try searching for the skill name from your lesson instead.</p></div>';
    }
    h += '<section class="panel"><h2 style="font-size:1rem">All Timeback apps</h2><div class="chips">' +
      (window.APPS || []).map(function (x) {
        return '<a class="chip" href="#/app/' + encodeURIComponent(x.id) + '"' + (x.id === a.id ? ' aria-current="page"' : '') + '>' + esc(x.name) + '</a>';
      }).join('') + '</div></section>';
    return h;
  };

  V.search = function (q) {
    var g = LS.get(K_GRADE, null);
    var hits = searchConcepts(q, g);
    var h = '<p class="crumbs"><a href="#/">Home</a> › Search</p><h1>Results for “' + esc(q) + '”</h1>';
    h += '<form class="bigsearch" id="heroForm" style="margin-bottom:1.2rem">' +
      '<label class="sr-only" for="heroQ">Search again</label>' +
      '<input id="heroQ" type="search" value="' + esc(q) + '" placeholder="Search again">' +
      '<button class="btn btn-brand" type="submit">Search</button></form>';
    if (hits.length) {
      h += '<section class="panel"><h2>' + hits.length + ' guide' + (hits.length === 1 ? '' : 's') + ' in the kiosk</h2>' +
        (g ? '<p class="muted" style="font-size:.85rem">Guides for ' + esc(gradeLabel(g)) + ' are listed first.</p>' : '') +
        '<div class="clist">' + hits.slice(0, 25).map(function (c) { return conceptCard(c, { showSubject: true }); }).join('') + '</div></section>';
    } else {
      h += '<div class="notice"><p><b>Nothing in the kiosk matched that.</b> Try the exact words your app used at the top of the lesson, or search the kid-safe web below.</p></div>';
    }
    h += '<section class="panel"><h2>Search the kid-safe web for “' + esc(q) + '”</h2>' +
      '<p class="muted">These open in a new tab. Each one filters results for school.</p><div class="grid g-2">' +
      SEARCH_ENGINES.map(function (e) {
        return '<a class="se" href="' + esc(e.u + encodeURIComponent(q)) + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="ic" aria-hidden="true">' + e.ic + '</span><span><b>' + esc(e.n) + ' ↗</b><span>' + esc(e.d) + '</span></span></a>';
      }).join('') + '</div></section>';
    return h;
  };

  V.safesearch = function () {
    return '<h1>Safe Search</h1>' +
      '<div class="notice ok"><p><b>How this works.</b> Type what you want to know. The kiosk checks its own guides first: those are always safe. Then it hands your words to search engines that filter results for school. It never sends you to the open internet.</p></div>' +
      '<form class="bigsearch" id="heroForm" style="margin-bottom:1.2rem">' +
      '<label class="sr-only" for="heroQ">What do you want to look up?</label>' +
      '<input id="heroQ" type="search" placeholder="What do you want to look up?">' +
      '<button class="btn btn-brand" type="submit">Search safely</button></form>' +
      '<section class="panel"><h2>Where your search goes</h2><div class="grid g-2">' +
      SEARCH_ENGINES.map(function (e) {
        return '<div class="se"><span class="ic" aria-hidden="true">' + e.ic + '</span><span><b>' + esc(e.n) + '</b><span>' + esc(e.d) + '</span></span></div>';
      }).join('') + '</div></section>' +
      '<section class="panel"><h2>Three rules for searching well</h2><ul class="words">' +
      '<li><b>Use the words from your lesson.</b> “Equivalent fractions” finds help. “Fraction thing I got wrong” does not.</li>' +
      '<li><b>Add “for kids” or “explained”.</b> It pushes the reading level down to something you can actually use.</li>' +
      '<li><b>Read two sources, not one.</b> If two sites say the same thing, you can trust it. If they disagree, ask your Guide.</li></ul></section>' +
      '<div class="notice"><p>If a page looks scary, mean, or wrong for school, close the tab and tell your Guide. You will never be in trouble for reporting it.</p></div>';
  };

  V.library = function () {
    var h = '<h1>Resource Shelf</h1>' +
      '<p class="muted" style="max-width:66ch">Every site here is one your school already trusts. Use the shelf when you want to poke around a topic; use a skill guide when you need to fix one thing right now.</p>';
    h += (window.RESOURCES || []).map(function (g) {
      return '<section class="panel"><h2>' + esc(g.group) + '</h2>' +
        '<p class="muted" style="margin-top:-.3em">' + esc(g.blurb) + '</p>' +
        '<ul class="links">' + g.items.map(function (i) {
          return '<li><a href="' + esc(i.u) + '" target="_blank" rel="noopener noreferrer">' +
            '<span><span class="lt">' + esc(i.t) + '</span><span class="ld">' + esc(i.d) + '</span></span>' +
            '<span class="ext">new tab ↗</span></a></li>';
        }).join('') + '</ul></section>';
    }).join('');
    return h;
  };

  V.notfound = function () {
    return '<div class="empty"><div class="big">🧭</div><h1>That page is not here</h1>' +
      '<p>The link may be old, or the skill may have been renamed.</p>' +
      '<p><a class="btn btn-brand" href="#/">Go back to the start</a></p></div>';
  };

  /* ---------------- router ---------------- */
  function route() {
    var hash = location.hash.replace(/^#\/?/, '');
    var parts = hash.split('/').filter(function (x) { return x !== ''; });
    var main = $('#main'), html;

    if (!parts.length) html = V.home();
    else if (parts[0] === 'g') html = V.grade(decodeURIComponent(parts[1] || ''), parts[2]);
    else if (parts[0] === 'c') html = V.concept(decodeURIComponent(parts[1] || ''));
    else if (parts[0] === 'app') html = V.app(decodeURIComponent(parts[1] || ''));
    else if (parts[0] === 'search') html = V.search(decodeURIComponent(parts.slice(1).join('/')));
    else if (parts[0] === 'safesearch') html = V.safesearch();
    else if (parts[0] === 'library') html = V.library();
    else if (parts[0] === 'how') html = V.how();
    else html = V.notfound();

    main.innerHTML = html;
    if (!location.hash || location.hash === '#/') document.title = 'Self-Help Kiosk';
    else {
      var h1 = $('h1', main);
      document.title = (h1 ? h1.textContent + ' · ' : '') + 'Self-Help Kiosk';
    }
    $$('.tnav[data-nav]').forEach(function (a) {
      a.removeAttribute('aria-current');
      if (a.getAttribute('data-nav') === parts[0]) a.setAttribute('aria-current', 'page');
    });
    window.scrollTo(0, 0);
    main.focus();
    bindView();
  }

  /* ---------------- view bindings ---------------- */
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg; el.classList.add('show');
    clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('show'); }, 2600);
  }

  function unsafe(q) {
    var s = ' ' + q.toLowerCase() + ' ';
    return UNSAFE.some(function (w) { return s.indexOf(w) > -1; });
  }

  function doSearch(q) {
    q = String(q || '').trim();
    if (!q) return;
    if (unsafe(q)) {
      $('#main').innerHTML = '<h1>Let us pause on that one</h1>' +
        '<div class="notice stop"><p>That search is not something this kiosk will look up. If it is about something that is worrying you or does not feel safe, please go talk to your Guide or another adult at school right now. They will help, and you will not be in trouble.</p></div>' +
        '<p><a class="btn btn-brand" href="#/">Back to the kiosk</a></p>';
      window.scrollTo(0, 0);
      return;
    }
    location.hash = '#/search/' + encodeURIComponent(q);
  }

  function bindView() {
    var hero = $('#heroForm');
    if (hero) hero.addEventListener('submit', function (e) { e.preventDefault(); doSearch($('#heroQ').value); });

  }

  /* ---------------- preferences ---------------- */
  function applyPrefs() {
    var p = LS.get(K_PREFS, {}) || {};
    var root = document.documentElement;
    root.setAttribute('data-size', p.size || 'm');
    root.setAttribute('data-font', p.font || 'default');
    root.setAttribute('data-theme', p.theme || 'light');
    root.setAttribute('data-lead', p.lead || 'normal');
    ['size', 'font', 'theme', 'lead'].forEach(function (key) {
      $$('[data-' + key + ']').forEach(function (b) {
        if (b.tagName !== 'BUTTON') return;
        b.classList.toggle('on', b.getAttribute('data-' + key) === (p[key] || (key === 'size' ? 'm' : key === 'lead' ? 'normal' : key === 'theme' ? 'light' : 'default')));
      });
    });
  }

  function initPrefs() {
    $('#a11yBtn').addEventListener('click', function () {
      var panel = $('#a11yPanel'), open = panel.hasAttribute('hidden');
      if (open) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', '');
      this.setAttribute('aria-expanded', String(open));
    });
    $$('#a11yPanel button').forEach(function (b) {
      b.addEventListener('click', function () {
        var p = LS.get(K_PREFS, {}) || {};
        ['size', 'font', 'theme', 'lead'].forEach(function (k) {
          if (b.hasAttribute('data-' + k)) p[k] = b.getAttribute('data-' + k);
        });
        LS.set(K_PREFS, p); applyPrefs();
      });
    });
    applyPrefs();
  }

  /* ---------------- boot ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initPrefs();
    $('#topSearchForm').addEventListener('submit', function (e) {
      e.preventDefault(); doSearch($('#topSearch').value); $('#topSearch').value = '';
    });
    window.addEventListener('hashchange', route);
    route();
  });

  window.Kiosk = { concepts: CONCEPTS, byId: BY_ID, subjects: SUBJECTS, grades: GRADES, search: searchConcepts };
})();

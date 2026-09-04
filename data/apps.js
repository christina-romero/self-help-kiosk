/* ============================================================
   The Timeback app stack, as students meet it on this campus.

   SOURCE OF TRUTH: the "App Playbook (K-12)" Alpha App Continuum.
   That document is internal, so its link is not recorded here; ask a
   Guide or the curriculum lead for the current copy.
   Only the K-8 rows are represented here, and only the subjects
   this campus assigns.

   Two things the continuum distinguishes, which matter to a
   student trying to work out why an app looks different today:
     core          the app that carries the grade-level course
     hole-filling  the app that runs underneath to close gaps
                   from earlier grades

   Deliberately NOT listed, with the reason:
     Happy Numbers, Mentava, AlphaNumbers   pre-K only
     Edia                                   grades 9-12 only
     AlphaPhonics, Vocabulon, Math Quest    have manuals but no
                                            slot on the K-8 continuum
     AlphaScience, Nice Academy, PhysicsGraph, TimeBack Scroll
                                            science and social studies,
                                            not assigned on this campus
     TimeBack Dash                          the dashboard, not a course
     Edmentum, Scribble                     high school / staff only

   `stuck` is what students most often come to the kiosk about after
   using that app. It is what drives the tagging on each guide.
   ============================================================ */
window.APPS = [

  /* ---------- Math ---------- */
  { id: 'zearn', name: 'Zearn', subject: 'Math', grades: 'Grades K-2', role: 'core', alpha: false,
    what: 'Guided math lessons that build a concept with pictures and models before the numbers show up. This is your main math course in K, 1, and 2.',
    stuck: 'The model on screen (number bond, ten frame, tape diagram) is unfamiliar even when the arithmetic is easy.' },
  { id: 'math-cakes', name: 'Math Cakes', subject: 'Math', grades: 'Grade 2', role: 'core', alpha: false,
    what: 'Extra grade 2 math practice that runs alongside Zearn.',
    stuck: 'Two-digit addition and subtraction with regrouping.' },
  { id: 'alphamath', name: 'AlphaMath', subject: 'Math', grades: 'Grades 3-4 core, K-8 hole-filling', role: 'both', alpha: true,
    what: 'Your grade-level math course in grades 3 and 4, and the hole-filling app underneath every grade from K to 8. When AlphaMath gives you something that looks easy or looks like it is from a younger grade, that is hole-filling: it found a gap and is closing it.',
    stuck: 'Skills from earlier grades resurfacing, and not knowing why an easy-looking topic reappeared.' },
  { id: 'math-academy', name: 'Math Academy', subject: 'Math', grades: 'Grades 5-8', role: 'core', alpha: false,
    what: 'Your grade-level math course from grade 5 onward, with a grade supplement alongside it. It gives you a worked example, then makes you do it, and will not move on until the skill sticks.',
    stuck: 'A new skill lands before you feel ready, and the worked example moves faster than you can follow.' },

  /* ---------- Fast Math ---------- */
  { id: 'math-raiders', name: 'Math Raiders', subject: 'Fast Math', grades: 'Grades K-5', role: 'core', alpha: true,
    what: 'Timed fact practice, measured in correct answers per minute. The goal is instant recall, not working the fact out.',
    stuck: 'You can get the fact right but not fast enough, so the timer keeps beating you.' },

  /* ---------- Reading ---------- */
  { id: 'alpha-reading-fluency', name: 'Alpha Reading Fluency', subject: 'Reading', grades: 'Grades K-2', role: 'core', alpha: true,
    what: 'Your main reading work in K, 1, and 2. You read a passage out loud and the app scores how accurately and smoothly you read it.',
    stuck: 'Reading smoothly enough without skipping or guessing words, and understanding what you just read.' },
  { id: 'anton', name: 'Anton', subject: 'Reading', grades: 'Grades K-1', role: 'hole-filling', alpha: false,
    what: 'Short skill lessons that run underneath your K and grade 1 reading to close gaps.',
    stuck: 'A rule explained quickly with only one or two examples.' },
  { id: 'mobymax-primer', name: 'MobyMax Primer', subject: 'Reading', grades: 'Grade 2 hole-filling, grades 3-8 primer', role: 'both', alpha: false,
    what: 'Runs alongside your reading course: hole-filling in grade 2, and the Primer from grade 3 up. It targets the exact gaps your diagnostic found.',
    stuck: 'Comprehension question types nobody has taught you to recognize yet.' },
  { id: 'alpharead', name: 'AlphaRead', subject: 'Reading', grades: 'Grades 3-8', role: 'core', alpha: true,
    what: 'Your main reading course from grade 3 up. Short articles matched to your level with comprehension questions after each one, so you get far more practice and feedback than a normal reading class.',
    stuck: 'Main idea, inference, and author\'s purpose questions on nonfiction you only half understood.' },

  /* ---------- Language ---------- */
  { id: 'lalilo', name: 'Lalilo', subject: 'Language', grades: 'Grades K-2', role: 'core', alpha: false,
    what: 'Your language work in K, 1, and 2: phonics, sight words, and early sentence skills in short game-like tasks.',
    stuck: 'Sounding out longer words and hearing each sound in order.' },
  { id: 'mobymax', name: 'MobyMax', subject: 'Language', grades: 'Grades 3-7', role: 'core', alpha: false,
    what: 'Your grammar and conventions course in grades 3 through 7, targeted at the gaps your diagnostic found.',
    stuck: 'Sentence structure: fragments, run-ons, and clauses.' },
  { id: 'egumpp', name: 'eGumpp', subject: 'Language', grades: 'Grade 8', role: 'core', alpha: false,
    what: 'Your grade 8 language course: grammar, usage, mechanics, and punctuation. Scoring is strict, so small errors cost real credit.',
    stuck: 'Comma rules, subject-verb agreement, and pronoun case.' },
  { id: 'freckle', name: 'Freckle', subject: 'Language', grades: 'Grades 3-8', role: 'hole-filling', alpha: false,
    what: 'Adaptive language practice that runs underneath your main course to close gaps. It drops you back a level when accuracy falls.',
    stuck: 'Knowing the rule but not spotting where it applies inside a sentence.' },

  /* ---------- Vocabulary ---------- */
  { id: 'vocabloco', name: 'VocabLoco', subject: 'Vocabulary', grades: 'Grades 3-5 core, 6-8 hole-filling', role: 'both', alpha: false,
    what: 'Your vocabulary course in grades 3 to 5, and the hole-filling app underneath Membean in grades 6 to 8. Built around word meaning in context.',
    stuck: 'Multiple-meaning words, and shades of meaning between words that seem the same.' },
  { id: 'membean', name: 'Membean', subject: 'Vocabulary', grades: 'Grades 6-8', role: 'core', alpha: false,
    what: 'Your vocabulary course from grade 6 up. It builds words through roots and images and shows you a word again right before you would forget it.',
    stuck: 'Words that look alike, and words you can recognize but cannot use in a sentence.' },

  /* ---------- Writing ---------- */
  { id: 'alphawrite', name: 'AlphaWrite', subject: 'Writing', grades: 'Grades 3-8', role: 'core', alpha: true,
    what: 'Your writing course from grade 3 up. Grades 3 to 5 work on sentences and paragraphs; grades 6 to 8 add full essays. You get many more feedback cycles than in a normal writing class.',
    stuck: 'Topic sentences, thesis statements, and using evidence instead of just opinion.' }
];

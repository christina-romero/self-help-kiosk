/* ============================================================
   READING: Kindergarten through Grade 8
   TEKS codes are Chapter 110 (English Language Arts and Reading,
   Adopted 2017). Strand numbering shifts between grade bands:
   comprehension is (5) in K, (6) in grades 1-5, and (5) again in
   grades 6-8. Codes below are written per grade accordingly.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

/* ---------------- Decoding and fluency ---------------- */
{
  id: 'r-blending-sounds', subject: 'reading', unit: 'Sounds and letters', grades: ['K', '1'],
  title: 'Blending sounds into a word',
  alt: 'blending segmenting phonemes sounding out decode',
  stuck: ['I say the sounds but I cannot hear the word', 'I get stuck at the first letter'],
  teks: ['K.2.A', 'K.2.B', '1.2.A', '1.2.B'],
  apps: ['Alpha Reading Fluency', 'Anton'],
  plain: 'Blending means saying each sound in a word and then squishing them together fast enough that they turn into the whole word. The trick is to say them smoothly, without stopping between the sounds.',
  why: 'Blending is the exact moment reading starts working. Every reading app in the stack drills it for a reason.',
  words: [
    { w: 'sound', d: 'One noise a letter or letter team makes. Also called a phoneme.' },
    { w: 'blend', d: 'To push sounds together into a word.' },
    { w: 'segment', d: 'To pull a word apart into its separate sounds.' }
  ],
  visual: [
    { type: 'soundboxes', boxes: ['sh', 'i', 'p'], word: 'ship', title: 'One box for each SOUND, not each letter',
      caption: '"sh" is two letters but only one sound, so it shares one box.' },
    { type: 'flow', steps: [
      'Touch the first box and say its sound. Stretch it: "ssshhh".',
      'Slide your finger to the next box and add its sound without stopping. "shhhiii".',
      'Keep sliding and adding until you reach the end.',
      'Now say it fast, all at once.',
      'Ask yourself: is that a real word I know? If not, check whether you used the right sound for a letter team.'
    ] }
  ],
  steps: [
    'Look at the whole word first so your eyes know how far you are going.',
    'Find the letter teams (sh, ch, th, ai, ee, oa) and treat each team as ONE sound.',
    'Say the first sound and stretch it instead of stopping.',
    'Slide into the next sound without a break between them.',
    'Say the whole thing fast.',
    'Check that it is a real word. If it is not, one of your sounds is probably wrong.'
  ],
  example: { prompt: 'Read the word "chest".',
    work: ['Letter teams: "ch" is one sound.', 'Boxes: ch - e - s - t.', 'Stretch and slide: chhh-eee-sss-t.', 'Fast: chest.'],
    answer: 'chest' },
  traps: [
    'Stopping between the sounds: "c... a... t" never becomes "cat." Keep sliding.',
    'Adding an "uh" to the end of consonants. It is "t," not "tuh."',
    'Sounding out each letter of a letter team separately. "sh" is not "s" then "h."',
    'Guessing from the first letter and the picture instead of reading all the way through the word.'
  ],
  check: [
    { q: 'How many sounds are in "shop"?', a: 'Three: sh - o - p.' },
    { q: 'Why should you not say "buh" for the letter b?', a: 'Because the extra "uh" gets stuck inside the word and makes it hard to blend.' },
    { q: 'You blended a word and it is not real. What now?', a: 'Check your letter teams and vowel sounds, then try again.' }
  ],
  links: [
    { t: 'Reading Rockets: Blending and Segmenting Games', u: 'https://www.readingrockets.org/classroom/classroom-strategies/blending-and-segmenting-games', d: 'Games that build blending.' },
    { t: 'Reading Rockets: Elkonin Boxes', u: 'https://www.readingrockets.org/classroom/classroom-strategies/elkonin-boxes', d: 'The sound-box strategy explained.' }
  ],
  note: 'strategy'
},
{
  id: 'r-decoding-multisyllabic', subject: 'reading', unit: 'Sounds and letters', grades: ['2', '3', '4', '5'],
  title: 'Breaking apart long words',
  alt: 'multisyllabic syllable types chunking long words decoding',
  stuck: ['Long words make me freeze', 'I just skip words I do not recognize'],
  teks: ['2.2.A', '3.2.A', '4.2.A', '5.2.A'],
  apps: ['Alpha Reading Fluency', 'AlphaRead', 'MobyMax Primer'],
  plain: 'You already know how to read short words. A long word is just several short words stuck together. Break it into chunks at the syllable joints and read one chunk at a time.',
  why: 'From about grade 3 on, the words that slow readers down are not hard sounds. They are long words that nobody taught them to break apart.',
  words: [
    { w: 'syllable', d: 'A chunk of a word with exactly one vowel sound.' },
    { w: 'prefix', d: 'A word part added to the front, like un- or re-.' },
    { w: 'suffix', d: 'A word part added to the end, like -ing or -tion.' }
  ],
  visual: [
    { type: 'wordparts', parts: [{ p: 'un', k: 'prefix', m: 'not' }, { p: 'for', k: 'chunk', m: '' }, { p: 'tu', k: 'chunk', m: '' }, { p: 'nate', k: 'suffix', m: '' }],
      word: 'unfortunate', meaning: 'not lucky', title: 'un / for / tu / nate' },
    { type: 'flow', steps: [
      'Cover any prefix you recognize at the front (un-, re-, dis-, pre-, mis-).',
      'Cover any suffix you recognize at the end (-ing, -ed, -tion, -able, -ly).',
      'Look at what is left in the middle.',
      'Find the vowels. Every syllable has exactly one vowel SOUND.',
      'Split between consonants that sit between vowels: nap/kin, rab/bit.',
      'Read each chunk, then push them together and adjust until it sounds like a real word.'
    ] }
  ],
  steps: [
    'Do not look at the whole word at once. That is what causes the freeze.',
    'Peel off a prefix if you see one you know.',
    'Peel off a suffix if you see one you know.',
    'In what remains, count the vowels. That tells you roughly how many chunks there are.',
    'Split between double consonants, and between two consonants that sit between vowels.',
    'Read chunk by chunk, then blend the chunks together.',
    'Flex the vowel: if the first try does not sound like a word, try the other vowel sound.'
  ],
  example: { prompt: 'Read "independently."',
    work: ['Prefix: in-.', 'Suffix: -ly. And before that, -ent.', 'Middle: depend.', 'Chunks: in / de / pend / ent / ly.', 'Blend: independently.'],
    answer: 'independently' },
  traps: [
    'Skipping the word and reading on. You lose the meaning of the sentence, which is what the question will ask about.',
    'Guessing from the first three letters. "Impossible" and "important" start the same way.',
    'Forgetting to flex the vowel. Many chunks work with either the long or the short sound.',
    'Splitting a letter team like "th" or "ch" across two chunks.'
  ],
  check: [
    { q: 'How many syllables are in "celebration"?', a: 'Four: cel / e / bra / tion.' },
    { q: 'What tells you how many syllables a word has?', a: 'The number of vowel SOUNDS, not the number of vowel letters.' },
    { q: 'Where would you split "napkin"?', a: 'nap / kin: between the two consonants in the middle.' }
  ],
  links: [
    { t: 'Reading Rockets: Phonics and Decoding', u: 'https://www.readingrockets.org/topics/phonics-and-decoding', d: 'Strategies for longer words.' },
    { t: 'Reading Rockets: Syllable Games', u: 'https://www.readingrockets.org/classroom/classroom-strategies/syllable-games', d: 'Practice hearing syllable breaks.' }
  ],
  note: 'strategy'
},
{
  id: 'r-fluency', subject: 'reading', unit: 'Reading smoothly', grades: ['1', '2', '3', '4', '5'],
  title: 'Reading fluently: rate, accuracy and expression',
  alt: 'fluency prosody rate accuracy expression repeated reading clearfluency',
  stuck: ['My fluency score is low', 'I read fast but I do not remember any of it'],
  teks: ['1.4', '2.4', '3.4', '4.4', '5.4'],
  apps: ['Alpha Reading Fluency', 'Anton', 'AlphaRead', 'MobyMax Primer'],
  plain: 'Fluency is three things at once: reading the words correctly, at a comfortable speed, and with expression that shows you understand. Racing is not fluency. Neither is reading every word perfectly but sounding like a robot.',
  why: 'ClearFluency and Alpha Reading Fluency score you on a recording. If you push only speed, accuracy drops and you score worse.',
  words: [
    { w: 'accuracy', d: 'Reading the words correctly.' },
    { w: 'rate', d: 'How fast you read: usually words per minute.' },
    { w: 'prosody', d: 'Expression: pausing at punctuation and changing your voice.' }
  ],
  visual: [
    { type: 'table', title: 'What each score is telling you', head: ['Your score pattern', 'What it means', 'What to practice'],
      rows: [['fast but low accuracy', 'you are guessing at words', 'slow down; decode every word'],
             ['accurate but slow', 'you are decoding word by word', 'reread the same passage 3 times'],
             ['accurate and fast, low comprehension', 'you are word-calling, not reading', 'pause at each paragraph and say what happened'],
             ['flat and robotic', 'you are ignoring punctuation', 'read it out loud like you are telling someone the news']] },
    { type: 'flow', steps: [
      'Read the passage once silently just to find out what it is about.',
      'Circle or note any word you had to work out. Practice those words alone.',
      'Read it out loud once, slowly, getting every word right.',
      'Read it a second time, adding expression and pausing at commas and periods.',
      'Read it a third time at a comfortable talking speed.',
      'Now record. The third read is nearly always the best one.'
    ] }
  ],
  steps: [
    'Preview the passage before you record. Silent read it first.',
    'Find the words that trip you and practice just those words.',
    'Read out loud accurately before you worry about speed at all.',
    'Add expression: stop at periods, pause at commas, raise your voice at question marks.',
    'Read it a third time. Repeated reading of the SAME text is what builds fluency.',
    'After you finish, say out loud what the passage was about. If you cannot, you were word-calling.'
  ],
  example: { prompt: 'Your accuracy is 85% and your rate is high. What should you change?',
    work: ['85% accuracy means about 1 word in 7 is wrong. That is guessing.', 'Rate is already high, so speed is not the problem.', 'Slow down deliberately and decode every word.'],
    answer: 'Slow down. Accuracy first, then speed comes back on its own.' },
  traps: [
    'Trying to beat the timer by reading faster. Accuracy falls and the score gets worse.',
    'Recording cold on the first read. Preview first.',
    'Reading in a flat monotone. Expression is part of the score and it also helps you understand.',
    'Ignoring punctuation and running sentences together.'
  ],
  check: [
    { q: 'What are the three parts of fluency?', a: 'Accuracy, rate, and expression (prosody).' },
    { q: 'Which read is usually your best?', a: 'The third read of the same passage.' },
    { q: 'You read quickly but cannot say what happened. What is that called?', a: 'Word-calling. You said the words without reading for meaning.' }
  ],
  links: [
    { t: 'Reading Rockets: Fluency', u: 'https://www.readingrockets.org/topics/fluency', d: 'What fluency is and how to build it.' },
    { t: 'Reading Rockets: Timed Repeated Readings', u: 'https://www.readingrockets.org/classroom/classroom-strategies/timed-repeated-readings', d: 'The repeated reading routine.' },
    { t: 'Storyline Online', u: 'https://storylineonline.net/', d: 'Hear actors read books aloud so you know what expression sounds like.' }
  ],
  note: 'strategy'
},

/* ---------------- Comprehension core ---------------- */
{
  id: 'r-monitor-fixup', subject: 'reading', unit: 'Understanding what you read', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'Noticing when you stopped understanding',
  alt: 'monitor comprehension fix up strategies reread self monitoring',
  stuck: ['I read the whole page and remember nothing', 'My eyes were moving but my brain was somewhere else'],
  teks: ['3.6.I', '4.6.I', '5.6.I', '6.5.I', '7.5.I', '8.5.I'],
  apps: ['Alpha Reading Fluency', 'AlphaRead', 'MobyMax Primer'],
  plain: 'Good readers do not understand everything the first time. What they do differently is NOTICE the moment they stopped understanding, and then do something about it instead of reading on.',
  why: 'AlphaRead gives you a comprehension question after every article. If you finished the article without noticing you lost the thread, the question is already lost.',
  words: [
    { w: 'monitor', d: 'To check on yourself as you read.' },
    { w: 'fix-up strategy', d: 'What you do once you notice you are lost.' }
  ],
  visual: [
    { type: 'decide', question: 'You noticed you are lost. Which fix-up do you use?', branches: [
      { if: 'One word is stopping me', then: 'Reread the sentence around it and look for context clues.' },
      { if: 'One sentence is confusing', then: 'Reread just that sentence slowly, out loud if you can.' },
      { if: 'The whole paragraph made no sense', then: 'Go back to the start of the paragraph and read it again, more slowly.' },
      { if: 'I do not know what any of this is about', then: 'Read the title, headings, and first sentence of each paragraph to rebuild the big picture.' },
      { if: 'I have no background knowledge on this topic', then: 'Look it up on the Resource Shelf, then come back.' }
    ] },
    { type: 'flow', steps: [
      'At the end of every paragraph, stop for two seconds.',
      'Say in your head: "That paragraph was about ___."',
      'If you cannot finish that sentence, you are lost: and now you know it.',
      'Pick a fix-up: reread the sentence, reread the paragraph, or look up the word.',
      'Do the fix-up, then check again before moving on.'
    ] }
  ],
  steps: [
    'Build a stopping habit: pause at the end of each paragraph.',
    'Try to say what that paragraph was about in one sentence.',
    'If you cannot, that is the signal. Do not read on.',
    'Decide what kind of stuck you are: one word, one sentence, or the whole idea.',
    'Use the matching fix-up.',
    'Check yourself again before you continue.'
  ],
  example: { prompt: 'You finish a paragraph about the water cycle and realize you cannot say what it was about.',
    work: ['I noticed. Good. That is the skill.', 'What kind of stuck? The whole paragraph.', 'Fix-up: go back to the start and reread slowly.', 'On the reread, "condensation" is the word I do not know.', 'New fix-up: look up condensation, then reread once more.'],
    answer: 'Reread, identify the blocking word, look it up, reread again.' },
  traps: [
    'Reading on and hoping it will make sense later. It almost never does.',
    'Rereading at the same speed. Slow down on the reread or you will get the same result.',
    'Blaming yourself instead of the strategy. Losing the thread is normal; not noticing is the problem.',
    'Waiting until the end of the page. Check at the end of each paragraph instead.'
  ],
  check: [
    { q: 'What is the first step of fixing comprehension?', a: 'Noticing that you lost it.' },
    { q: 'When should you check yourself?', a: 'At the end of every paragraph, not the end of the page.' },
    { q: 'You are lost because of one unknown word. What is the fix-up?', a: 'Use context clues in the surrounding sentences, or look the word up.' }
  ],
  links: [
    { t: 'Reading Rockets: Think-Alouds', u: 'https://www.readingrockets.org/classroom/classroom-strategies/think-alouds', d: 'What good readers say inside their heads.' },
    { t: 'Reading Rockets: Comprehension', u: 'https://www.readingrockets.org/topics/comprehension', d: 'The full set of comprehension strategies.' }
  ],
  note: 'strategy'
},
{
  id: 'r-main-idea', subject: 'reading', unit: 'Understanding what you read', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Finding the main idea or central idea',
  alt: 'main idea central idea key ideas topic gist summary sentence',
  stuck: ['I picked a detail instead of the main idea', 'The whole passage seems important'],
  teks: ['3.6.G', '4.6.G', '5.6.G', '6.5.G', '7.5.G', '8.5.G'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'The topic is what the passage is about in two or three words. The main idea is the one sentence the whole passage is trying to prove about that topic. Every detail in the passage should support it.',
  why: 'Main idea is the single most common comprehension question type in AlphaRead and on every state test.',
  words: [
    { w: 'topic', d: 'What it is about, in a few words. "Bees."' },
    { w: 'main idea', d: 'What the author says about the topic, in a sentence. "Bees are essential to how food grows."' },
    { w: 'supporting detail', d: 'A fact, example, or reason that backs up the main idea.' }
  ],
  visual: [
    { type: 'hierarchy', levels: [
      { items: ['MAIN IDEA: the one sentence the whole text is proving'] },
      { items: ['Supporting detail', 'Supporting detail', 'Supporting detail'] }
    ], note: 'If a sentence you picked is supported BY other sentences, it is the main idea. If it supports something else, it is a detail.' },
    { type: 'flow', steps: [
      'Read the title and any headings. Authors put the topic there on purpose.',
      'Name the topic in two or three words.',
      'Read the first and last sentence of each paragraph. Main ideas often live there.',
      'Ask: what is the author trying to get me to understand about this topic?',
      'Write that as one full sentence.',
      'Test it: does every paragraph support your sentence? If one does not, your sentence is too narrow.'
    ] }
  ],
  steps: [
    'Read the whole passage once before deciding anything.',
    'Say the topic out loud in two or three words.',
    'Look at the first and last sentences of the passage and of each paragraph.',
    'Ask what the author wants you to understand about the topic. That is your candidate main idea.',
    'Write it as a complete sentence, not a phrase.',
    'Check it against every paragraph. A real main idea covers the whole passage: not just the paragraph you liked best.'
  ],
  example: { prompt: 'A passage describes how bees pollinate crops, how bee populations are shrinking, and what farmers are doing about it.',
    work: ['Topic: bees and farming.', 'Paragraph 1 supports: bees matter to crops.', 'Paragraph 2 supports: bee numbers are falling.', 'Paragraph 3 supports: people are responding.', 'A sentence that covers all three: bees are essential to food production, so their decline is a problem people are working to solve.'],
    answer: 'Bees are essential to growing food, so their shrinking numbers are a serious problem that farmers are trying to fix.' },
  traps: [
    'Picking the most interesting detail. Interesting is not the same as central.',
    'Picking a sentence that only covers one paragraph.',
    'Giving the topic instead of the main idea. "Bees" is a topic; it is not a sentence.',
    'Choosing an answer that is true but not stated or supported in the passage.'
  ],
  check: [
    { q: 'What is the difference between topic and main idea?', a: 'The topic is a few words. The main idea is a full sentence stating what the author says about the topic.' },
    { q: 'How do you test a main idea you picked?', a: 'Check that every paragraph supports it. If one does not, it is too narrow.' },
    { q: 'Where do main ideas often appear?', a: 'In the title, the first sentence, or the last sentence.' }
  ],
  links: [
    { t: 'Reading Rockets: Summarizing', u: 'https://www.readingrockets.org/classroom/classroom-strategies/summarizing', d: 'Finding and stating the central idea.' },
    { t: 'Reading Rockets: Paragraph Shrinking', u: 'https://www.readingrockets.org/classroom/classroom-strategies/paragraph-shrinking', d: 'A routine for boiling a paragraph down to its main idea.' }
  ],
  note: 'strategy'
},
{
  id: 'r-inference', subject: 'reading', unit: 'Understanding what you read', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Making inferences',
  alt: 'inference infer read between the lines evidence clues conclusion',
  stuck: ['The answer is not in the text anywhere', 'How am I supposed to know that?'],
  teks: ['3.6.F', '4.6.F', '5.6.F', '6.5.F', '7.5.F', '8.5.F'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'An inference is a conclusion you build from two things: clues in the text plus what you already know. It is not a guess and it is not a feeling. You have to be able to point at the clue that supports it.',
  why: 'Inference questions are the ones students most often miss, because the answer genuinely is not written down. It is built.',
  words: [
    { w: 'infer', d: 'To work out something the author implied but did not state.' },
    { w: 'evidence', d: 'The exact words in the text that support your conclusion.' },
    { w: 'schema', d: 'What you already know about how the world works.' }
  ],
  visual: [
    { type: 'table', title: 'The inference equation', head: ['Text clue', '+', 'What I already know', '=', 'Inference'],
      rows: [['"She slammed the door and would not look at him"', '+', 'people slam doors when they are angry', '=', 'She is angry with him'],
             ['"He put on his coat and grabbed an umbrella"', '+', 'umbrellas are for rain', '=', 'It is raining or about to rain'],
             ['"The classroom was silent and every desk was empty"', '+', 'schools are noisy when students are there', '=', 'School is out or it is a holiday']] },
    { type: 'flow', steps: [
      'Read the question and note exactly what it is asking you to figure out.',
      'Go back into the text and find the sentence closest to that topic.',
      'Underline the clue words: actions, dialogue, descriptions.',
      'Ask: what do I already know about situations like this?',
      'Combine the two into a conclusion.',
      'Say the sentence: "I think ___ because the text says ___." If you cannot fill the second blank, it is a guess, not an inference.'
    ] }
  ],
  steps: [
    'Reread the part of the text the question points to.',
    'Look for what characters DO and SAY rather than what the author tells you outright.',
    'Underline the specific clue.',
    'Add what you know from your own life or from earlier in the text.',
    'State your conclusion.',
    'Always be able to finish: "because the text says ___."'
  ],
  example: { prompt: 'The text says: "Marcus checked the clock for the fourth time, tapping his pencil. He had already packed his bag." Why is Marcus behaving this way?',
    work: ['Clues: checking the clock repeatedly, tapping, bag already packed.', 'What I know: people check clocks when they are waiting for something and want it to hurry.', 'Conclusion: he is impatient for class to end.'],
    answer: 'Marcus is impatient and eager to leave, because the text says he checked the clock four times and had already packed his bag.' },
  traps: [
    'Answering with something you personally believe that has no clue behind it in the text.',
    'Copying a sentence straight from the text. If the answer is written down, it is not an inference question.',
    'Ignoring what characters do and only reading what the author states.',
    'Picking the most dramatic possible explanation instead of the one the clues actually support.'
  ],
  check: [
    { q: 'What two ingredients make an inference?', a: 'A text clue plus what you already know.' },
    { q: 'How do you check that your inference is not a guess?', a: 'Finish the sentence "because the text says ___" with an actual quote.' },
    { q: 'The text says a character "wiped her eyes and turned away." What can you infer?', a: 'She is upset or crying. The actions are the clue.' }
  ],
  links: [
    { t: 'Reading Rockets: Inferencing', u: 'https://www.readingrockets.org/classroom/classroom-strategies/inferencing', d: 'The strategy with examples and practice.' }
  ],
  note: 'strategy'
},
{
  id: 'r-summarize', subject: 'reading', unit: 'Understanding what you read', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Summarizing without retelling everything',
  alt: 'summary summarize paraphrase retell somebody wanted but so then',
  stuck: ['My summary is as long as the story', 'I do not know what to leave out'],
  teks: ['3.7.D', '4.7.D', '5.7.D', '6.6.D', '7.6.D', '8.6.D'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'A summary keeps only what a reader would need to understand the text, in your own words, in the right order. If your summary is longer than a few sentences, you are retelling, not summarizing.',
  why: 'Summarizing is how you prove you understood, and it is the fastest way to find out that you did not.',
  words: [
    { w: 'summarize', d: 'Give the important parts, briefly, in your own words.' },
    { w: 'paraphrase', d: 'Say the same thing in different words, at about the same length.' },
    { w: 'gist', d: 'The core of it, stripped of detail.' }
  ],
  visual: [
    { type: 'table', title: 'Two frames that do most of the work', head: ['Text type', 'Frame'],
      rows: [['Story / fiction', 'Somebody … wanted … but … so … then …'],
             ['Nonfiction / informational', 'This text is about ___. The most important points are ___, ___, and ___.']],
      note: 'Fill in the blanks and you have a summary. No extra sentences needed.' },
    { type: 'flow', steps: [
      'Reread and mark the most important sentence in each section or paragraph.',
      'Cross out examples, repeated ideas, and anything the reader could live without.',
      'Turn each surviving sentence into your own words.',
      'Put them in the order they appeared.',
      'Read your summary back. Could someone who has not read the text follow it?',
      'Cut anything that is not needed for that.'
    ] }
  ],
  steps: [
    'Read the whole text first. You cannot summarize what you have not finished.',
    'Go paragraph by paragraph and pick the one sentence that matters most.',
    'Delete examples, lists, and repeated ideas.',
    'Rewrite each kept idea in your own words. Copying is not summarizing.',
    'Use a frame: "Somebody wanted but so then" for stories, or a topic-plus-key-points sentence for nonfiction.',
    'Check your summary is much shorter than the original and still makes sense on its own.'
  ],
  example: { prompt: 'Summarize a story where Ana wants to join the school band, cannot afford an instrument, saves money by walking dogs, and finally buys a used clarinet.',
    work: ['Somebody: Ana.', 'Wanted: to join the band.', 'But: she could not afford an instrument.', 'So: she walked dogs to earn money.', 'Then: she bought a used clarinet and joined.'],
    answer: 'Ana wanted to join the school band but could not afford an instrument, so she earned money walking dogs and eventually bought a used clarinet.' },
  traps: [
    'Retelling every event in order. That is a retell, not a summary.',
    'Copying sentences from the text. Use your own words or it does not count.',
    'Adding your opinion. A summary reports what the text said, not what you thought of it.',
    'Leaving out the ending because you ran out of room. The resolution is essential.'
  ],
  check: [
    { q: 'What is the difference between summarizing and paraphrasing?', a: 'A summary is much shorter. A paraphrase is about the same length in different words.' },
    { q: 'What frame works for a story summary?', a: 'Somebody … wanted … but … so … then …' },
    { q: 'Should a summary include your opinion?', a: 'No. Only what the text says.' }
  ],
  links: [
    { t: 'Reading Rockets: Summarizing', u: 'https://www.readingrockets.org/classroom/classroom-strategies/summarizing', d: 'How to teach and use summarizing.' },
    { t: 'Reading Rockets: Paragraph Shrinking', u: 'https://www.readingrockets.org/classroom/classroom-strategies/paragraph-shrinking', d: 'Boiling paragraphs down.' }
  ],
  note: 'strategy'
},
{
  id: 'r-text-evidence', subject: 'reading', unit: 'Understanding what you read', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Using text evidence to back up your answer',
  alt: 'text evidence cite quote support your answer prove it',
  stuck: ['I know the answer but I lose points anyway', 'What counts as evidence?'],
  teks: ['3.7.C', '4.7.C', '5.7.C', '6.6.C', '7.6.C', '8.6.C'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Text evidence is the exact words from the passage that prove your answer. Not what you remember, not what you assume. The words you can point to and quote.',
  why: 'Written-response questions almost always score the evidence separately from the answer. A right answer with no evidence loses half the points.',
  words: [
    { w: 'cite', d: 'To point to and quote the exact words.' },
    { w: 'quote', d: 'The author\'s words copied exactly, inside quotation marks.' },
    { w: 'elaborate', d: 'Explain how the evidence proves your point.' }
  ],
  visual: [
    { type: 'hamburger', layers: [
      { l: 'ANSWER the question', d: 'Restate the question as a statement' },
      { l: 'CITE the evidence', d: 'According to the text, "…"' },
      { l: 'EXPLAIN the link', d: 'This shows that … because …' }
    ], caption: 'Answer, Cite, Explain. Most students skip the third step, and that is where the point is lost.' },
    { type: 'flow', steps: [
      'Reread the question and turn it into the first sentence of your answer.',
      'Go back to the passage and find the exact words that support you.',
      'Copy them accurately, inside quotation marks.',
      'Write one sentence explaining HOW those words prove your point.',
      'Reread: does your evidence actually match your answer, or did you grab a nearby sentence?'
    ] }
  ],
  steps: [
    'Restate the question as a statement to start your answer.',
    'Go back into the text: do not answer from memory.',
    'Find the words that directly support your claim.',
    'Quote them exactly, with quotation marks, and use a lead-in like "The text states…" or "According to paragraph 3…".',
    'Explain the connection in your own words: "This shows that…".',
    'Check that your evidence proves the point you actually made.'
  ],
  example: { prompt: 'Question: How does the author feel about school start times? Support with evidence.',
    work: ['Answer: The author believes school starts too early.', 'Evidence: The text states, "Teenagers who start school after 8:30 report significantly better focus."', 'Explain: This shows the author supports later start times because they present research that later starts help students.'],
    answer: 'The author believes school starts too early. The text states, "Teenagers who start school after 8:30 report significantly better focus." This shows the author supports later start times, because they present evidence that a later start helps students focus.' },
  traps: [
    'Answering from memory without going back to the text.',
    'Quoting a sentence that is near the answer but does not actually prove it.',
    'Dropping a quote in with no explanation. The explanation is what earns the credit.',
    'Paraphrasing when the question asked for a direct quote, or the reverse.'
  ],
  check: [
    { q: 'What are the three parts of an evidence-based answer?', a: 'Answer, cite the evidence, explain the link.' },
    { q: 'Which part do students most often skip?', a: 'The explanation.' },
    { q: 'Can you use evidence from memory?', a: 'No. Go back and find the exact words.' }
  ],
  links: [
    { t: 'Reading Rockets: Question-Answer Relationship (QAR)', u: 'https://www.readingrockets.org/classroom/classroom-strategies/question-answer-relationship-qar', d: 'How to tell where an answer lives in the text.' },
    { t: 'CommonLit', u: 'https://www.commonlit.org/', d: 'Passages with evidence-based questions to practice on.' }
  ],
  note: 'strategy'
},
{
  id: 'r-predictions', subject: 'reading', unit: 'Understanding what you read', grades: ['K', '1', '2', '3'],
  title: 'Making and checking predictions',
  alt: 'predict prediction confirm correct guess what happens next',
  stuck: ['My prediction was wrong', 'I just guess randomly'],
  teks: ['K.5.C', '1.6.C', '2.6.C', '3.6.C'],
  apps: ['Alpha Reading Fluency', 'Anton', 'AlphaRead', 'MobyMax Primer'],
  plain: 'A prediction is a smart guess about what happens next, based on clues the author already gave you. Then you keep reading and either confirm it or correct it. Being wrong is fine: not checking is the problem.',
  why: 'Predicting keeps you thinking ahead, which is exactly what keeps you paying attention while you read.',
  words: [
    { w: 'predict', d: 'Say what you think will happen, using clues.' },
    { w: 'confirm', d: 'Find out you were right.' },
    { w: 'correct', d: 'Change your prediction when new information arrives.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Before reading: look at the title and the pictures. What do you think this is about?',
      'Say your prediction with a reason: "I think ___ because ___."',
      'Read on.',
      'Stop and check: did it happen?',
      'If yes, confirm it. If no, correct it and make a new prediction from the new clues.'
    ] },
    { type: 'table', title: 'Prediction sentence starters', head: ['When', 'Say'],
      rows: [['Before reading', 'I think this will be about ___ because the title says ___.'],
             ['During reading', 'I think ___ will happen next because ___.'],
             ['After checking', 'I was right because ___. / I was wrong, so now I think ___.']] }
  ],
  steps: [
    'Look at the title, cover, and pictures before you start.',
    'Say what you think will happen AND why. The "why" is the whole skill.',
    'Read a little.',
    'Stop and check your prediction against what actually happened.',
    'Confirm it or change it, using the new information.',
    'Make a fresh prediction and keep going.'
  ],
  example: { prompt: 'The title is "The Lost Puppy" and the cover shows a girl looking under a porch.',
    work: ['Clue: the title says lost.', 'Clue: the girl is searching.', 'I think the girl will look for a puppy that ran away, because she is searching and the title says lost.'],
    answer: 'I think the girl will search for a missing puppy, because the title says "lost" and she is looking under a porch.' },
  traps: [
    'Predicting with no reason. "I think a dragon comes" is a guess, not a prediction.',
    'Never checking. The checking is where the learning happens.',
    'Feeling bad about a wrong prediction. Correcting it is exactly what good readers do.',
    'Sticking to your first prediction after the text has clearly gone somewhere else.'
  ],
  check: [
    { q: 'What makes a prediction different from a guess?', a: 'A prediction has a reason based on clues in the text.' },
    { q: 'What do you do after you predict?', a: 'Read on and check whether you were right.' },
    { q: 'Your prediction was wrong. What now?', a: 'Correct it using the new information and predict again.' }
  ],
  links: [
    { t: 'Reading Rockets: Directed Reading Thinking Activity', u: 'https://www.readingrockets.org/classroom/classroom-strategies/directed-reading-thinking-activity-drta', d: 'The predict-read-check routine.' }
  ],
  note: 'strategy'
},

/* ---------------- Literary texts ---------------- */
{
  id: 'r-story-elements', subject: 'reading', unit: 'Reading stories', grades: ['1', '2', '3', '4', '5'],
  title: 'Story elements: character, setting, problem, solution',
  alt: 'story elements character setting plot problem solution story map',
  stuck: ['What is the problem in this story?', 'I mixed up setting and plot'],
  teks: ['2.8.A', '3.8.A', '3.8.C', '4.8.A', '4.8.C', '5.8.C'],
  apps: ['Alpha Reading Fluency', 'Anton', 'AlphaRead', 'MobyMax Primer'],
  plain: 'Every story has the same skeleton: who it is about, where and when it happens, what goes wrong, and how it gets fixed. Once you can find those four things, you can understand any story.',
  why: 'Almost every fiction question is really asking about one of these four elements, even when it does not use the word.',
  words: [
    { w: 'character', d: 'Who the story is about.' },
    { w: 'setting', d: 'Where and when it happens.' },
    { w: 'conflict', d: 'The problem the character faces.' },
    { w: 'resolution', d: 'How the problem gets solved.' }
  ],
  visual: [
    { type: 'table', title: 'The four questions that map any story', head: ['Element', 'Ask yourself', 'Where to look'],
      rows: [['Characters', 'Who is this about?', 'names that keep appearing'],
             ['Setting', 'Where and when?', 'the opening paragraphs'],
             ['Problem', 'What does the main character want, and what is in the way?', 'usually near the start'],
             ['Solution', 'How did it work out?', 'the last few paragraphs']] },
    { type: 'plotarc', l1: 'Beginning', l2: 'Problem grows', l3: 'Biggest moment', l4: 'Things settle', l5: 'Solution',
      caption: 'The problem builds toward the biggest moment, then gets resolved.' }
  ],
  steps: [
    'Read the story all the way through once.',
    'List the characters. The main character is the one whose problem it is.',
    'Find the setting: where and when. Look at the first page.',
    'Find the problem by asking what the main character wants and what is stopping them.',
    'Find the solution by looking at how the story ends.',
    'Fill in a story map so you can see all four at once.'
  ],
  example: { prompt: 'Ana moves to a new town and does not know anyone. She joins the school band and makes friends.',
    work: ['Character: Ana.', 'Setting: a new town, at school.', 'Problem: she is lonely and knows nobody.', 'Solution: she joins the band and makes friends.'],
    answer: 'Character Ana; setting a new town and school; problem loneliness; solution joining the band.' },
  traps: [
    'Confusing setting with plot. Setting is where and when, not what happens.',
    'Naming every character as the main character. The main character is the one with the problem.',
    'Giving an event as the problem. The problem is what the character wants and cannot have yet.',
    'Stopping before the resolution. Read to the end.'
  ],
  check: [
    { q: 'What two things make up the setting?', a: 'Where and when.' },
    { q: 'How do you find the main character?', a: 'Whoever has the problem the story is about.' },
    { q: 'Where does the solution usually appear?', a: 'Near the end.' }
  ],
  links: [
    { t: 'Reading Rockets: Story Maps', u: 'https://www.readingrockets.org/classroom/classroom-strategies/story-maps', d: 'Graphic organizers for story elements.' },
    { t: 'ReadWriteThink: Story map interactive', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/story', d: 'Fill in a story map online.' }
  ],
  note: 'frayer'
},
{
  id: 'r-plot-structure', subject: 'reading', unit: 'Reading stories', grades: ['4', '5', '6', '7', '8'],
  title: 'Plot structure: rising action, climax, resolution',
  alt: 'plot diagram exposition rising action climax falling action resolution conflict',
  stuck: ['Where exactly is the climax?', 'What counts as rising action?'],
  teks: ['4.8.C', '5.8.C', '6.7.C', '7.7.C', '8.7.C'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'A plot builds tension and then releases it. The climax is the moment where the outcome is decided: after it, everything is consequences.',
  why: 'Grade 6-8 questions ask you to analyze plot elements by name, and the climax is the one students most often mislabel.',
  words: [
    { w: 'exposition', d: 'The setup: characters, setting, situation.' },
    { w: 'rising action', d: 'Events that build the conflict and raise the tension.' },
    { w: 'climax', d: 'The turning point where the outcome is decided.' },
    { w: 'falling action', d: 'What follows from the climax.' },
    { w: 'resolution', d: 'How things end up.' }
  ],
  visual: [
    { type: 'plotarc', caption: 'Tension rises to the climax, then releases. The climax is a decision point, not just the loudest scene.' },
    { type: 'decide', question: 'Is this the climax?', branches: [
      { if: 'After this moment, the outcome is basically decided', then: 'Yes, this is the climax.' },
      { if: 'The tension is still building and things could still go either way', then: 'Still rising action.' },
      { if: 'This is just the most exciting or loudest scene', then: 'Not necessarily. Exciting is not the same as decisive.' },
      { if: 'The problem is already solved and we are wrapping up', then: 'Falling action or resolution.' }
    ] }
  ],
  steps: [
    'Name the conflict first. Everything else is measured against it.',
    'Find the exposition: where the author sets up who, where, and what the situation is.',
    'Track the rising action: each event that makes the conflict harder or the stakes higher.',
    'Find the climax by asking: after which moment was the outcome no longer in doubt?',
    'Note the falling action: the consequences that follow.',
    'Find the resolution: the new normal at the end.'
  ],
  example: { prompt: 'A swimmer trains all season, faces a rival, nearly quits after an injury, races the final, wins by a fingertip, and is handed the trophy.',
    work: ['Exposition: the swimmer and the season begin.', 'Rising action: training, the rival, the injury, nearly quitting.', 'Climax: the final race, decided by a fingertip.', 'Falling action: the immediate aftermath.', 'Resolution: receiving the trophy.'],
    answer: 'The climax is the race itself, because that is where the outcome is decided.' },
  traps: [
    'Calling the most dramatic scene the climax. The climax is the decisive scene, which is often but not always the loudest.',
    'Putting the climax at the very end. Something has to come after it.',
    'Listing events without connecting them to the conflict.',
    'Confusing falling action with resolution. Falling action is the consequences; resolution is the final state.'
  ],
  check: [
    { q: 'What is the test for the climax?', a: 'After it, the outcome is essentially decided.' },
    { q: 'What comes between the climax and the resolution?', a: 'The falling action.' },
    { q: 'Can the climax be the last sentence of a story?', a: 'Rarely. Some falling action or resolution usually follows.' }
  ],
  links: [
    { t: 'ReadWriteThink: Plot Diagram', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/plot-diagram', d: 'Build a plot diagram online.' }
  ],
  note: 'frayer'
},
{
  id: 'r-theme', subject: 'reading', unit: 'Reading stories', grades: ['4', '5', '6', '7', '8'],
  title: 'Finding the theme',
  alt: 'theme message lesson moral central message universal',
  stuck: ['Is the theme the same as the main idea?', 'I said the theme was "friendship" and got it wrong'],
  teks: ['4.8.A', '5.8.A', '6.7.A', '7.7.A', '8.7.A'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'A theme is the lesson about life that the story shows. It is a full sentence, not a single word, and it should be true outside this story too.',
  why: 'One-word themes are the most common wrong answer in grades 4 through 8. "Friendship" is a topic. "Real friends tell you the truth even when it is hard" is a theme.',
  words: [
    { w: 'theme', d: 'A message about life that the story reveals.' },
    { w: 'topic', d: 'A subject the story touches on: friendship, courage, family.' },
    { w: 'universal', d: 'True beyond this one story.' }
  ],
  visual: [
    { type: 'table', title: 'Topic vs theme', head: ['Topic (one word)', 'Theme (a sentence about life)'],
      rows: [['friendship', 'Real friends tell the truth even when it is uncomfortable.'],
             ['courage', 'Being brave means acting even while you are afraid.'],
             ['family', 'People can build a family out of those who show up for them.'],
             ['jealousy', 'Wanting what someone else has can cost you what you already have.']],
      note: 'If your answer is one word, it is a topic. Turn it into a sentence about life.' },
    { type: 'flow', steps: [
      'What did the main character want, and what did they learn?',
      'How is the character different at the end than at the start?',
      'Name the topic in one word.',
      'Turn it into a full sentence about life in general.',
      'Test it: could this sentence be true for a completely different story? If not, it is too specific.',
      'Test it again: does the story actually show this? Find two moments that support it.'
    ] }
  ],
  steps: [
    'Notice how the main character changes from beginning to end.',
    'Ask what the character learned, or what the reader is meant to learn.',
    'Name the topic in one word to get started.',
    'Rewrite it as a complete sentence about life, without using any character names.',
    'Check that it would still make sense for another story on the same topic.',
    'Find two moments in the story that support it.'
  ],
  example: { prompt: 'A boy lies to look impressive, loses his best friend, admits the truth, and slowly rebuilds the friendship.',
    work: ['Character change: from lying to being honest.', 'Topic word: honesty.', 'Sentence about life: honesty is worth more than looking impressive.', 'Would this fit another story? Yes.', 'Support: he loses the friend when he lies, and regains him when he tells the truth.'],
    answer: 'Being honest matters more than impressing people, because trust is harder to rebuild than reputation.' },
  traps: [
    'Giving a one-word answer. That is a topic, not a theme.',
    'Using character names in the theme. A theme is about life, not just about this character.',
    'Summarizing the plot instead of stating a message.',
    'Choosing a message the story never actually supports.'
  ],
  check: [
    { q: 'Is "courage" a theme?', a: 'No, it is a topic. A theme would be a sentence like "courage means acting despite fear."' },
    { q: 'Should a theme include character names?', a: 'No. It should be true beyond this story.' },
    { q: 'How do you find a theme?', a: 'Look at how the main character changes and what they learned.' }
  ],
  links: [
    { t: 'Reading Rockets: Comprehension', u: 'https://www.readingrockets.org/topics/comprehension', d: 'Strategies including theme and message.' }
  ],
  note: 'frayer'
},
{
  id: 'r-character-analysis', subject: 'reading', unit: 'Reading stories', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Analyzing characters',
  alt: 'character traits motivation character change dynamic static',
  stuck: ['How do I know what a character is like?', 'The text never says she is brave'],
  teks: ['3.8.B', '4.8.B', '5.8.B', '6.7.B', '7.7.B', '8.7.B'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Authors rarely tell you what a character is like. They show you through what the character does, says, thinks, and how others react to them. You infer the trait from the evidence.',
  why: 'Grades 6 to 8 ask how a character\'s qualities influence the events, which means you need the trait AND the evidence AND the consequence.',
  words: [
    { w: 'trait', d: 'What a character is like on the inside: stubborn, loyal, cautious.' },
    { w: 'motivation', d: 'Why they do what they do: what they want.' },
    { w: 'dynamic character', d: 'One who changes over the story.' },
    { w: 'static character', d: 'One who stays the same.' }
  ],
  visual: [
    { type: 'table', title: 'Four places a trait shows up', head: ['Look at', 'Example', 'Trait it suggests'],
      rows: [['What they DO', 'stays late to redo the project', 'determined'],
             ['What they SAY', '"I will handle it myself"', 'independent, maybe stubborn'],
             ['What they THINK', 'worries nobody will pick her', 'insecure'],
             ['How OTHERS react', 'people go quiet when he enters', 'intimidating']],
      note: 'Actions are the strongest evidence. What a character does under pressure tells you the most.' },
    { type: 'flow', steps: [
      'Pick one specific moment in the story.',
      'Write down exactly what the character did or said.',
      'Ask: what kind of person acts like that?',
      'Name the trait in one precise word. Not "nice": try "generous," "patient," or "forgiving."',
      'Find a second moment that shows the same trait.',
      'For grades 6-8, add: how did that trait change what happened in the story?'
    ] }
  ],
  steps: [
    'Choose the character and a specific scene.',
    'Note what they do, say, and think, and how others respond.',
    'Infer a trait from that evidence.',
    'Choose a precise word. Vague words like "nice" and "mean" get little credit.',
    'Back it with a second piece of evidence.',
    'Explain how the trait affected the plot or the conflict.'
  ],
  example: { prompt: 'Jonas gives his last sandwich to a younger student and tells nobody about it.',
    work: ['Action: gives away his own food.', 'Detail: tells nobody.', 'A person who does that without wanting credit is generous and humble.', 'Evidence for the plot: because he was generous, the younger student trusted him later.'],
    answer: 'Jonas is generous and humble. He gives away his last sandwich and does not tell anyone, which later earns him the younger student\'s trust.' },
  traps: [
    'Using vague words like "nice," "mean," or "good." Be precise.',
    'Describing what the character looks like instead of what they are like.',
    'Naming a trait with no evidence behind it.',
    'Ignoring how the character changed. Change is often what the question is really about.'
  ],
  check: [
    { q: 'What is the strongest kind of evidence for a character trait?', a: 'What the character does, especially under pressure.' },
    { q: 'Is "tall" a character trait?', a: 'No, that is a physical description. Traits are about personality.' },
    { q: 'What is a dynamic character?', a: 'One who changes over the course of the story.' }
  ],
  links: [
    { t: 'Reading Rockets: Story Maps', u: 'https://www.readingrockets.org/classroom/classroom-strategies/story-maps', d: 'Organizers that include character analysis.' }
  ],
  note: 'strategy'
},
{
  id: 'r-point-of-view', subject: 'reading', unit: 'Reading stories', grades: ['4', '5', '6', '7', '8'],
  title: 'Point of view and narrator',
  alt: 'point of view first person third person narrator perspective limited omniscient',
  stuck: ['How do I tell first person from third?', 'What is the difference between narrator and author?'],
  teks: ['4.10.E', '5.10.E', '6.9.E', '7.9.E', '8.9.E'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Point of view is who is telling the story. Look at the pronouns: "I" and "we" mean first person; "he," "she," and "they" mean third person. The narrator is a role in the story, not the same as the author.',
  why: 'Point of view controls what information you get. A first-person narrator can only tell you what they personally know: including things they are wrong about.',
  words: [
    { w: 'first person', d: 'The narrator is a character. Uses I, me, we.' },
    { w: 'third person limited', d: 'Outside narrator who knows one character\'s thoughts.' },
    { w: 'third person omniscient', d: 'Outside narrator who knows everyone\'s thoughts.' },
    { w: 'narrator', d: 'The voice telling the story. Not the author.' }
  ],
  visual: [
    { type: 'decide', question: 'Which point of view is it?', branches: [
      { if: 'The narrator says "I" and is in the story', then: 'FIRST PERSON. You only get what this character knows.' },
      { if: 'Uses he/she/they and reveals ONE character\'s thoughts', then: 'THIRD PERSON LIMITED.' },
      { if: 'Uses he/she/they and reveals SEVERAL characters\' thoughts', then: 'THIRD PERSON OMNISCIENT.' },
      { if: 'Uses he/she/they and reveals NO thoughts, only actions', then: 'THIRD PERSON OBJECTIVE.' }
    ] },
    { type: 'table', title: 'Same scene, different point of view', head: ['POV', 'How it sounds'],
      rows: [['First person', 'I knew the answer but my hand would not go up.'],
             ['Third limited', 'Maya knew the answer, but her hand would not go up.'],
             ['Third omniscient', 'Maya knew the answer. Across the room, Devon was hoping she would speak.']] }
  ],
  steps: [
    'Scan the narration: not the dialogue: for pronouns.',
    'If the narration uses "I" or "we," it is first person.',
    'If it uses "he," "she," or "they," it is third person.',
    'For third person, check whose thoughts you are being shown.',
    'One character\'s thoughts means limited; several means omniscient; none means objective.',
    'Ask what the point of view keeps hidden from you. That is usually what the question is about.'
  ],
  example: { prompt: 'A story says: "Devon slammed his locker. He had no idea that Maya had been waiting all morning to apologize." What point of view is this?',
    work: ['Uses "he," so it is third person.', 'We are told what Devon does, and also what Maya has been feeling.', 'We know something Devon does not.', 'The narrator knows more than one character\'s inner life.'],
    answer: 'Third person omniscient.' },
  traps: [
    'Looking at pronouns inside dialogue. Characters say "I" in every point of view. Look at the narration.',
    'Confusing the narrator with the author. The narrator can be a character who lies.',
    'Calling anything with "he" or "she" omniscient. Check whose thoughts you actually get.',
    'Forgetting that a first-person narrator can be unreliable.'
  ],
  check: [
    { q: 'Where do you look for pronouns to decide POV?', a: 'The narration, not the dialogue.' },
    { q: 'What is the difference between limited and omniscient?', a: 'Limited gives one character\'s thoughts; omniscient gives several.' },
    { q: 'Is the narrator the same as the author?', a: 'No. The narrator is the voice telling the story, which the author created.' }
  ],
  links: [
    { t: 'Grammar Monster: Point of View', u: 'https://www.grammar-monster.com/glossary/point_of_view.htm', d: 'First, second, and third person explained.' }
  ],
  note: 'frayer'
},
{
  id: 'r-figurative-language', subject: 'reading', unit: 'Reading stories', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Figurative language: simile, metaphor, personification, hyperbole',
  alt: 'figurative language simile metaphor personification hyperbole idiom imagery',
  stuck: ['Is this a simile or a metaphor?', 'What does the author mean literally?'],
  teks: ['3.10.D', '4.10.D', '5.10.D', '6.9.D', '7.9.D', '8.9.D'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Figurative language means the words are not literally true, but they create a picture or a feeling. Your job is to work out what the author is really saying and why they chose that image.',
  why: 'Grade 6-8 questions rarely ask you to just name the device. They ask what effect it creates, which means you need the literal meaning first.',
  words: [
    { w: 'simile', d: 'A comparison using LIKE or AS. "Quiet as a library."' },
    { w: 'metaphor', d: 'A comparison stating one thing IS another. "The classroom was a library."' },
    { w: 'personification', d: 'Giving human qualities to a non-human thing. "The wind screamed."' },
    { w: 'hyperbole', d: 'Extreme exaggeration for effect. "I have told you a million times."' },
    { w: 'idiom', d: 'A phrase whose meaning is not the sum of its words. "Break a leg."' }
  ],
  visual: [
    { type: 'table', title: 'Telling them apart', head: ['Device', 'Signal', 'Example'],
      rows: [['Simile', 'has like or as', 'Her voice was like gravel.'],
             ['Metaphor', 'says it IS the thing', 'Her voice was gravel.'],
             ['Personification', 'a non-human thing acts human', 'The old house groaned.'],
             ['Hyperbole', 'obviously impossible exaggeration', 'This backpack weighs a ton.'],
             ['Idiom', 'a set phrase that means something else', 'It cost an arm and a leg.']],
      note: 'Simile and metaphor differ only by the words "like" or "as."' },
    { type: 'flow', steps: [
      'Find the phrase that cannot be literally true.',
      'Ask what two things are being compared or connected.',
      'Ask what those two things have in common. That is the point of the comparison.',
      'State the literal meaning in plain words.',
      'Then answer the real question: what feeling or picture does this create that plain words would not?'
    ] }
  ],
  steps: [
    'Spot the phrase that is not literally true.',
    'Check for "like" or "as": that separates simile from metaphor.',
    'Check whether a non-human thing is doing something human. That is personification.',
    'Check whether it is a wild exaggeration. That is hyperbole.',
    'Translate it into plain literal language.',
    'Explain the effect: what does this image make you feel or picture?'
  ],
  example: { prompt: 'What does "The homework pile stared at me from the desk" mean, and what is the effect?',
    work: ['Homework cannot stare. So this is personification.', 'The pile is being given a human ability.', 'Literal meaning: the homework was sitting there and I was very aware of it.', 'Effect: it makes the homework feel like a pressure or a presence watching him, which shows his dread.'],
    answer: 'Personification. Literally the homework was just sitting there, but describing it as staring makes it feel like a pressure the narrator cannot escape.' },
  traps: [
    'Naming the device and stopping. The question usually wants the meaning and the effect too.',
    'Confusing simile and metaphor. Look for "like" or "as."',
    'Reading figurative language literally and getting confused by an impossible image.',
    'Saying the effect is "to make it more interesting." Be specific about what feeling it creates.'
  ],
  check: [
    { q: '"He is a rock." Simile or metaphor?', a: 'Metaphor: no "like" or "as."' },
    { q: '"The stars winked at us." Which device?', a: 'Personification. Stars cannot wink.' },
    { q: 'What should you always add after naming the device?', a: 'The literal meaning and the effect it creates.' }
  ],
  links: [
    { t: 'Reading Rockets: Vocabulary', u: 'https://www.readingrockets.org/topics/vocabulary', d: 'Includes figurative language strategies.' },
    { t: 'Grammar Monster: Analogy', u: 'https://www.grammar-monster.com/glossary/analogy.htm', d: 'Comparisons and how they work.' }
  ],
  note: 'frayer'
},
{
  id: 'r-poetry-drama', subject: 'reading', unit: 'Reading stories', grades: ['4', '5', '6', '7', '8'],
  title: 'Reading poetry and drama',
  alt: 'poetry stanza line break rhyme scheme drama script stage directions dialogue acts scenes',
  stuck: ['I do not know how to read a poem', 'The play script format confuses me'],
  teks: ['4.9.B', '4.9.C', '5.9.B', '6.8.B', '6.8.C', '7.8.B', '8.8.B'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Poetry and drama have their own structures. In a poem, the line breaks and stanzas carry meaning. In a play, everything you know comes from dialogue and stage directions. There is no narrator to explain.',
  why: 'These genres appear on every assessment, and students who read them like prose lose the meaning that the structure is carrying.',
  words: [
    { w: 'stanza', d: 'A group of lines in a poem, like a paragraph.' },
    { w: 'line break', d: 'Where a line of poetry stops. Poets choose these deliberately.' },
    { w: 'stage directions', d: 'Instructions in a script, usually in italics or brackets.' },
    { w: 'act / scene', d: 'The big and small divisions of a play.' }
  ],
  visual: [
    { type: 'table', title: 'What to notice in each genre', head: ['Poetry', 'Drama'],
      rows: [['stanzas: like paragraphs', 'acts and scenes: the divisions'],
             ['line breaks: where the poet made you pause', 'stage directions: what you would see'],
             ['repeated words or sounds', 'dialogue: the only place thoughts appear'],
             ['imagery: the pictures made from words', 'character list at the start'],
             ['the shift: where the poem changes direction', 'entrances and exits']] },
    { type: 'flow', steps: [
      'POETRY: read it all the way through once without stopping to analyze.',
      'Read it a second time OUT LOUD. Poems are built for the ear.',
      'Notice where the stanzas break and what changes between them.',
      'Find the one line that feels like a turn or a surprise.',
      'DRAMA: read the character list and the setting note first.',
      'Read the stage directions as if you were watching, then read the dialogue as the character would say it.'
    ] }
  ],
  steps: [
    'For poetry, read the whole poem before analyzing any part of it.',
    'Read it again out loud. Sound is doing work that silent reading misses.',
    'Look at the stanza breaks: what changes from one to the next?',
    'Find the turn: the line where the poem shifts in tone or idea.',
    'For drama, read the character list and setting first so you can picture the stage.',
    'Treat stage directions as what you would see, and dialogue as what you would hear.',
    'Remember there is no narrator: everything you learn comes from what characters say and do.'
  ],
  example: { prompt: 'A poem has three stanzas: winter, thaw, spring. What is the structure doing?',
    work: ['Three stanzas, each a season stage.', 'Stanza 1 is cold and still. Stanza 2 introduces movement. Stanza 3 is full of growth.', 'The stanza breaks mark the passage of time.', 'The structure mirrors the change the poem is describing.'],
    answer: 'The three stanzas move through time from winter to spring, so the poem\'s structure enacts the change it describes.' },
  traps: [
    'Reading a poem once and answering. Poems reward a second read out loud.',
    'Ignoring line breaks and stanza breaks. Those are choices the poet made.',
    'Skipping stage directions in a play. They carry information the dialogue does not.',
    'Expecting a narrator in drama to explain what characters are thinking. There is not one.'
  ],
  check: [
    { q: 'What is a stanza?', a: 'A group of lines in a poem, similar to a paragraph.' },
    { q: 'Where do you learn what a character is thinking in a play?', a: 'From their dialogue and actions. There is no narrator.' },
    { q: 'What should you do on the second reading of a poem?', a: 'Read it out loud.' }
  ],
  links: [
    { t: 'ReadWriteThink: Acrostic Poems', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/acrostic-poems', d: 'Write a poem to understand how poems are built.' },
    { t: 'ReadWriteThink: Diamante Poems', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/diamante-poems', d: 'Structured poem builder.' }
  ],
  note: 'strategy'
},

/* ---------------- Informational and argumentative text ---------------- */
{
  id: 'r-text-structure', subject: 'reading', unit: 'Reading nonfiction', grades: ['4', '5', '6', '7', '8'],
  title: 'Text structure in nonfiction',
  alt: 'text structure cause effect compare contrast problem solution chronological description signal words',
  stuck: ['What is the author trying to do here?', 'How does structure help me understand?'],
  teks: ['4.9.D', '5.9.D', '6.8.D', '7.8.D', '8.8.D'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Authors organize information in a handful of predictable patterns. Recognizing the pattern tells you what to look for and where the important information is going to be.',
  why: 'Grade 6-8 asks you to explain how text structure contributes to the author\'s purpose. You cannot do that until you can name the structure.',
  words: [
    { w: 'text structure', d: 'The pattern the author uses to organize information.' },
    { w: 'signal words', d: 'Words that reveal the structure: because, however, first, unlike.' }
  ],
  visual: [
    { type: 'structure', list: [
      { l: 'Cause and effect', d: 'Signal words: because, as a result, therefore, led to, consequently' },
      { l: 'Compare and contrast', d: 'Signal words: however, unlike, similarly, both, on the other hand' },
      { l: 'Problem and solution', d: 'Signal words: problem, issue, one answer, to solve this, resolved' },
      { l: 'Chronological / sequence', d: 'Signal words: first, next, then, finally, in 1920, after that' },
      { l: 'Description', d: 'Signal words: for example, characteristics, such as, for instance' }
    ] },
    { type: 'flow', steps: [
      'Read the headings. They often reveal the structure by themselves.',
      'Circle the signal words in the first and last sentence of each paragraph.',
      'Name the structure.',
      'Use the matching graphic organizer: a Venn diagram for compare-contrast, a chain for cause-effect, a timeline for sequence.',
      'Ask why the author chose this structure. That is what the question will be about.'
    ] }
  ],
  steps: [
    'Preview the headings and any bold text.',
    'Look for signal words in the opening sentences of paragraphs.',
    'Name the structure using the signal words as your evidence.',
    'Draw the organizer that fits: Venn for compare, arrows for cause and effect, timeline for sequence.',
    'Fill in the organizer as you read.',
    'Explain how the structure helps the author make their point.'
  ],
  example: { prompt: 'A passage uses "unlike," "however," and "both" repeatedly while discussing two national parks. What is the structure and why did the author choose it?',
    work: ['Signal words: unlike, however, both.', 'Those all signal comparison.', 'Structure: compare and contrast.', 'Purpose: the author wants you to see how the two parks are alike and different so you can choose or understand each better.'],
    answer: 'Compare and contrast. The author uses it so the reader can weigh the two parks side by side.' },
  traps: [
    'Confusing "sequence" with "cause and effect." Sequence just means things happened in order; cause and effect means one made the other happen.',
    'Naming the structure but not explaining why the author used it.',
    'Assuming the whole text uses one structure. Long texts often switch between paragraphs.',
    'Ignoring headings, which usually give the structure away.'
  ],
  check: [
    { q: 'Which structure uses "as a result" and "therefore"?', a: 'Cause and effect.' },
    { q: 'Which organizer fits compare and contrast?', a: 'A Venn diagram.' },
    { q: 'Does a text have to use only one structure?', a: 'No. Different sections can use different structures.' }
  ],
  links: [
    { t: 'ReadWriteThink: Compare and Contrast', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/compare-contrast', d: 'Build a comparison organizer online.' },
    { t: 'ReadWriteThink: Timeline', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/timeline', d: 'For chronological texts.' },
    { t: 'Reading Rockets: Transition Words', u: 'https://www.readingrockets.org/classroom/classroom-strategies/transition-words', d: 'Signal words by structure.' }
  ],
  note: 'frayer'
},
{
  id: 'r-text-features', subject: 'reading', unit: 'Reading nonfiction', grades: ['2', '3', '4', '5', '6'],
  title: 'Using text features and graphics',
  alt: 'text features headings captions diagrams bold sidebar glossary graphics print features',
  stuck: ['I skipped the diagram and missed the answer', 'What am I supposed to do with a caption?'],
  teks: ['3.9.D', '4.9.D', '5.9.D', '6.8.D', '3.10.C', '4.10.C', '5.10.C'],
  apps: ['Alpha Reading Fluency', 'AlphaRead', 'MobyMax Primer'],
  plain: 'Text features are everything that is not the main paragraphs: headings, bold words, captions, diagrams, charts, sidebars. They are not decoration. They carry information that is often not repeated in the text.',
  why: 'Test questions deliberately place answers inside captions and diagrams because they know students skip them.',
  words: [
    { w: 'caption', d: 'The text underneath a picture that explains it.' },
    { w: 'sidebar', d: 'A box beside the main text with extra information.' },
    { w: 'diagram', d: 'A labeled drawing showing how something works or fits together.' }
  ],
  visual: [
    { type: 'table', title: 'What each feature is for', head: ['Feature', 'What it tells you'],
      rows: [['Title and headings', 'the topic and how the text is organized'],
             ['Bold or highlighted words', 'key vocabulary, usually defined nearby'],
             ['Caption', 'why the picture matters: often info not in the text'],
             ['Diagram with labels', 'how parts fit together'],
             ['Chart or graph', 'numbers and comparisons at a glance'],
             ['Sidebar', 'related information the author did not want in the main flow'],
             ['Glossary', 'definitions for the bold words']] },
    { type: 'flow', steps: [
      'Before reading, do a "picture walk": look at every heading, image, and caption.',
      'Ask what the text is going to be about based only on those.',
      'Read the main text.',
      'When you reach a diagram or chart, stop and actually read it, including the labels.',
      'When you hit a question, check whether the answer might live in a feature rather than a paragraph.'
    ] }
  ],
  steps: [
    'Preview all the features before you read a single paragraph.',
    'Read every heading. They are an outline of the text.',
    'Read every caption. Captions carry information that is often nowhere else.',
    'For a diagram, read the title, then every label, then work out what it is showing.',
    'For a chart, read the title, the axis labels, and the scale before the numbers.',
    'When answering, scan the features as well as the paragraphs.'
  ],
  example: { prompt: 'A question asks how deep the roots go, but the paragraphs never say. Where should you look?',
    work: ['The paragraphs do not have it.', 'There is a labeled diagram of the plant.', 'Diagrams label measurements that the text often leaves out.'],
    answer: 'Check the diagram and its labels, and the caption underneath it.' },
  traps: [
    'Skipping straight to the paragraphs. The features are half the text.',
    'Looking at a picture without reading its caption.',
    'Assuming a diagram just repeats the text. It usually adds something.',
    'Ignoring bold words, which are almost always the vocabulary you will be asked about.'
  ],
  check: [
    { q: 'Why are some words bold in nonfiction?', a: 'They are key vocabulary, usually defined nearby or in the glossary.' },
    { q: 'What should you do before reading the paragraphs?', a: 'Preview the headings, images, and captions.' },
    { q: 'A question\'s answer is not in any paragraph. What next?', a: 'Check the captions, diagrams, charts, and sidebars.' }
  ],
  links: [
    { t: 'Reading Rockets: Reading Guides', u: 'https://www.readingrockets.org/classroom/classroom-strategies/reading-guides', d: 'Guided routines for navigating nonfiction.' }
  ],
  note: 'strategy'
},
{
  id: 'r-argument-claim-evidence', subject: 'reading', unit: 'Reading nonfiction', grades: ['5', '6', '7', '8'],
  title: 'Reading arguments: claim, evidence, and audience',
  alt: 'argumentative text claim evidence reasoning audience persuade bias counterargument',
  stuck: ['What is the author actually arguing?', 'How do I tell fact from opinion here?'],
  teks: ['5.9.E', '6.8.E', '7.8.E', '8.8.E'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'An argumentative text is trying to convince you of something. Your job is to find the claim, judge the evidence behind it, and notice who the author is trying to convince.',
  why: 'This is one of the fastest-growing question types in grades 6 to 8, and it transfers directly into writing your own arguments.',
  words: [
    { w: 'claim', d: 'The position the author wants you to accept.' },
    { w: 'evidence', d: 'Facts, statistics, or examples offered as support.' },
    { w: 'reasoning', d: 'The explanation of how the evidence supports the claim.' },
    { w: 'counterargument', d: 'The other side, which a strong author addresses.' },
    { w: 'intended audience', d: 'Who the author is writing for.' }
  ],
  visual: [
    { type: 'hierarchy', levels: [
      { items: ['CLAIM: what the author wants you to believe'] },
      { items: ['Evidence', 'Evidence', 'Counterargument addressed'] }
    ], note: 'Strong arguments have specific evidence AND acknowledge the other side.' },
    { type: 'flow', steps: [
      'Find the claim. It is often in the first or last paragraph, stated as a should or must.',
      'List every piece of evidence the author gives.',
      'For each one ask: is this a verifiable fact, or an opinion dressed as one?',
      'Ask whether the evidence actually supports the claim, or just sits near it.',
      'Look for a counterargument. If the author ignores the other side, that is a weakness.',
      'Ask who this was written FOR. The audience explains a lot of the word choices.'
    ] }
  ],
  steps: [
    'Read once to get the gist, then find the claim.',
    'State the claim as a sentence: "The author argues that…"',
    'List the evidence in order.',
    'Sort each piece: fact (can be checked) or opinion (a belief).',
    'Judge whether each piece really supports the claim.',
    'Look for whether the author addresses the opposing view.',
    'Identify the intended audience and note how the language is aimed at them.'
  ],
  example: { prompt: 'An article argues that middle schools should start later, citing a sleep study and a quote from a doctor.',
    work: ['Claim: middle schools should start later.', 'Evidence 1: a sleep study: verifiable fact.', 'Evidence 2: a doctor\'s quote: expert opinion, which is strong but still an opinion.', 'Counterargument: the article does not mention bus schedules or parent work hours.', 'Audience: likely school boards and parents.'],
    answer: 'The claim is supported by real research, but the argument is weakened by never addressing the practical objections.' },
  traps: [
    'Confusing the topic with the claim. "School start times" is a topic; "schools should start later" is a claim.',
    'Treating every statement in an argument as fact. Authors mix facts and opinions on purpose.',
    'Ignoring what the author left out. A missing counterargument is a real weakness.',
    'Agreeing or disagreeing instead of analyzing. The question asks how the argument works, not what you think.'
  ],
  check: [
    { q: 'What is a claim?', a: 'The position the author wants you to accept, stated as a sentence.' },
    { q: 'What makes evidence strong?', a: 'It is verifiable and it directly supports the claim.' },
    { q: 'Why does addressing a counterargument make an argument stronger?', a: 'It shows the author considered the other side and still has a case.' }
  ],
  links: [
    { t: 'CommonLit', u: 'https://www.commonlit.org/', d: 'Argumentative passages with analysis questions.' },
    { t: 'Newsela', u: 'https://newsela.com/', d: 'News articles at adjustable reading levels.' }
  ],
  note: 'frayer'
},
{
  id: 'r-authors-purpose', subject: 'reading', unit: 'Reading nonfiction', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Author\'s purpose and message',
  alt: 'authors purpose persuade inform entertain PIE message craft',
  stuck: ['Everything looks like it is to inform', 'How is purpose different from main idea?'],
  teks: ['3.10.A', '4.10.A', '5.10.A', '6.9.A', '7.9.A', '8.9.A'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Author\'s purpose is WHY the text was written. Main idea is WHAT it says. A text can inform you about bees and still have the purpose of persuading you to protect them.',
  why: 'Older grades want more than "to inform." They want you to say what specifically the author was trying to get across, and how the writing achieves it.',
  words: [
    { w: 'purpose', d: 'Why the author wrote it: to inform, persuade, entertain, or explain.' },
    { w: 'message', d: 'The specific thing the author wants you to take away.' },
    { w: 'craft', d: 'The choices the author made: structure, word choice, examples: to achieve the purpose.' }
  ],
  visual: [
    { type: 'table', title: 'Purpose, and how you can tell', head: ['Purpose', 'Signs'],
      rows: [['Inform', 'facts, headings, diagrams, neutral tone'],
             ['Persuade', 'opinion words, should/must, one-sided evidence, calls to action'],
             ['Entertain', 'story elements, humour, vivid description, characters'],
             ['Explain', 'steps, how-it-works language, cause and effect']],
      note: 'Look at word choice. Neutral wording points to informing; loaded wording points to persuading.' },
    { type: 'flow', steps: [
      'Ask: what kind of text is this? Article, story, editorial, manual?',
      'Look at the word choice. Are the words neutral or loaded with opinion?',
      'Look for calls to action: should, must, we need to.',
      'Name the general purpose.',
      'Then get specific: what exactly does the author want me to know, believe, or do?',
      'Point to one craft choice. A structure or a word. That shows this.'
    ] }
  ],
  steps: [
    'Identify what kind of text it is.',
    'Look at the tone and word choice. Loaded language signals persuasion.',
    'Check for facts with sources (informing) or opinions with calls to action (persuading).',
    'Name the broad purpose.',
    'Then state the specific message in a sentence.',
    'Support it by naming one thing the author did: a structure, a word, an example: that achieves it.'
  ],
  example: { prompt: 'An article gives statistics about plastic in the ocean, then ends with "It is time we stopped using single-use plastics."',
    work: ['Facts and statistics point to informing.', 'But the closing line says "it is time we stopped": a call to action.', 'The facts are all on one side.', 'The purpose is to persuade, using information as the tool.'],
    answer: 'The purpose is to persuade readers to stop using single-use plastics. The author builds credibility with statistics first, then closes with a direct call to action.' },
  traps: [
    'Defaulting to "to inform" for anything with facts in it. Facts can be used to persuade.',
    'Giving the main idea instead of the purpose. Purpose is why; main idea is what.',
    'Stopping at the one-word purpose. Say what specifically the author wants.',
    'Ignoring the ending. Authors often reveal their purpose in the final paragraph.'
  ],
  check: [
    { q: 'What is the difference between purpose and main idea?', a: 'Purpose is why the author wrote it. Main idea is what the text says.' },
    { q: 'What word choices signal persuasion?', a: 'Should, must, need to, and other opinion or action words.' },
    { q: 'Can a text have facts and still be persuasive?', a: 'Yes. Selecting only one side\'s facts is a persuasive technique.' }
  ],
  links: [
    { t: 'Reading Rockets: Anticipation Guide', u: 'https://www.readingrockets.org/classroom/classroom-strategies/anticipation-guide', d: 'Getting at what a text is trying to do.' }
  ],
  note: 'frayer'
},
{
  id: 'r-compare-texts', subject: 'reading', unit: 'Reading nonfiction', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Comparing two texts on the same topic',
  alt: 'compare texts two sources synthesize paired passages same topic different',
  stuck: ['I summarized both but did not compare them', 'What am I supposed to compare?'],
  teks: ['3.6.E', '4.6.E', '5.6.E', '6.5.E', '7.5.H', '8.5.H'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Paired passages ask you to notice how two texts on the same topic differ: in what they claim, what evidence they use, what they leave out, and how they are organized. Summarizing each one separately is not comparing.',
  why: 'Paired-passage questions are worth the most points on most assessments, and they are the questions students most often answer as two separate summaries.',
  words: [
    { w: 'synthesize', d: 'Combine information from several sources into one new understanding.' },
    { w: 'perspective', d: 'The angle or viewpoint a text takes on the topic.' }
  ],
  visual: [
    { type: 'venn', aLabel: 'Text 1', bLabel: 'Text 2', a: 'only in text 1', b: 'only in text 2', both: 'in both',
      caption: 'Fill this in as you read the second text, not after.' },
    { type: 'table', title: 'What to compare', head: ['Compare this', 'Ask'],
      rows: [['Main idea', 'Do they agree about what matters most?'],
             ['Evidence', 'Do they use the same facts, or different ones?'],
             ['Purpose', 'Is one informing and the other persuading?'],
             ['Structure', 'Is one chronological and the other cause-effect?'],
             ['What is missing', 'What does one include that the other ignores?']] }
  ],
  steps: [
    'Read the first text and note its main idea and key evidence.',
    'Read the second text with the first one still in mind.',
    'As you read the second, mark anything that agrees, disagrees, or adds something new.',
    'Fill in a Venn diagram or a two-column chart.',
    'Write your answer as a comparison sentence: "While Text 1 argues ___, Text 2 emphasizes ___."',
    'Use evidence from BOTH texts, not just one.'
  ],
  example: { prompt: 'Two articles about school uniforms. One cites a study on reduced bullying; the other quotes students who feel uniforms limit self-expression.',
    work: ['Both are about school uniforms.', 'Text 1 uses research and focuses on behavior.', 'Text 2 uses interviews and focuses on identity.', 'They do not disagree on facts: they emphasize different values.'],
    answer: 'Both texts address school uniforms, but Text 1 uses research to argue uniforms reduce bullying, while Text 2 uses student voices to argue they restrict self-expression. They weigh different values rather than disputing the same facts.' },
  traps: [
    'Writing two summaries and calling it a comparison. You must connect them.',
    'Using evidence from only one text.',
    'Only listing similarities or only differences. Do both.',
    'Comparing surface features (length, difficulty) instead of ideas and evidence.'
  ],
  check: [
    { q: 'What is the most common mistake on paired passages?', a: 'Summarizing each text separately instead of comparing them.' },
    { q: 'Name three things you can compare between two texts.', a: 'Main idea, evidence used, and purpose. Also structure and what is left out.' },
    { q: 'Which texts should your evidence come from?', a: 'Both of them.' }
  ],
  links: [
    { t: 'ReadWriteThink: Compare and Contrast', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/compare-contrast', d: 'A comparison organizer you can fill in online.' },
    { t: 'ReadWriteThink: Venn Diagram', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/venn-diagram', d: 'Classic Venn organizer.' }
  ],
  note: 'strategy'
},
{
  id: 'r-annotating', subject: 'reading', unit: 'Reading nonfiction', grades: ['4', '5', '6', '7', '8'],
  title: 'Taking notes and annotating while you read',
  alt: 'annotate notetaking marking text active reading margin notes',
  stuck: ['I read it but I cannot find anything again', 'What am I supposed to write down?'],
  teks: ['4.7.E', '5.7.E', '6.6.E', '7.6.E', '8.6.E'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Annotating means leaving a trail so you can find things again and so your brain stays active. The point is not to highlight a lot. It is to write short notes in your own words.',
  why: 'The TEKS name notetaking and annotating directly as a response skill, and it is the single habit that most improves comprehension on long texts.',
  words: [
    { w: 'annotate', d: 'Mark up a text with notes, questions, and symbols.' },
    { w: 'gist note', d: 'A few words in the margin saying what a paragraph was about.' }
  ],
  visual: [
    { type: 'table', title: 'A simple annotation code', head: ['Mark', 'Means'],
      rows: [['★', 'important: probably the main idea'], ['?', 'I do not understand this'],
             ['!', 'surprising or strong'], ['→', 'this connects to something earlier'],
             ['circle', 'a word I do not know'], ['margin note', 'what this paragraph was about, in 3-5 words']],
      note: 'Pick four marks and use them consistently. More than that and you will not use any of them.' },
    { type: 'flow', steps: [
      'Read a paragraph.',
      'In the margin, write 3 to 5 words saying what it was about.',
      'Circle any word you did not know.',
      'Put a ? next to anything you did not follow.',
      'Star the sentence that seems most important.',
      'At the end, read only your margin notes. That is your summary already written.'
    ] }
  ],
  steps: [
    'Decide on your marks before you start. Four is plenty.',
    'Read one paragraph at a time.',
    'After each paragraph, write a short gist note in the margin in your own words.',
    'Circle unknown words as you go, but do not stop to look them all up.',
    'Mark confusion with a question mark so you can come back.',
    'When you are finished, reread only your notes. If they do not make sense, reread the text.'
  ],
  example: { prompt: 'You are reading a three-paragraph article about volcanoes.',
    work: ['P1 margin note: "how magma builds pressure".', 'P2 margin note: "3 types of eruption" and circle "pyroclastic".', 'P3 margin note: "warning signs scientists watch" with a ★.'],
    answer: 'Three notes that together summarize the article, plus one word to look up.' },
  traps: [
    'Highlighting whole paragraphs. If most of the page is yellow, nothing stands out.',
    'Writing nothing and just underlining. Underlining does not make you think.',
    'Copying sentences into your notes instead of putting them in your own words.',
    'Using ten different symbols. You will not remember what they mean.'
  ],
  check: [
    { q: 'What should a margin note contain?', a: 'Three to five words in your own words saying what the paragraph was about.' },
    { q: 'What is wrong with highlighting a lot?', a: 'If everything is marked, nothing is marked.' },
    { q: 'How do you use your annotations afterwards?', a: 'Read only the margin notes. They are already a summary.' }
  ],
  links: [
    { t: 'Reading Rockets: Think-Alouds', u: 'https://www.readingrockets.org/classroom/classroom-strategies/think-alouds', d: 'What to notice while reading.' },
    { t: 'Reading Rockets: Exit Slips', u: 'https://www.readingrockets.org/classroom/classroom-strategies/exit-slips', d: 'Quick ways to capture what you understood.' }
  ],
  note: 'strategy'
},
{
  id: 'r-research-sources', subject: 'reading', unit: 'Research', grades: ['4', '5', '6', '7', '8'],
  title: 'Finding and judging sources',
  alt: 'research sources primary secondary reliable credible plagiarism paraphrase bibliography',
  stuck: ['Is this website any good?', 'What counts as a primary source?'],
  teks: ['4.13.C', '4.13.D', '5.13.C', '5.13.F', '6.12.C', '6.12.F', '7.12.D', '8.12.F'],
  apps: ['AlphaRead', 'MobyMax Primer'],
  plain: 'Not every source is equally good. A primary source came from someone who was there. A secondary source describes what someone else found. Both are useful, but you have to know which you are holding.',
  why: 'The inquiry and research strand is directly assessed, and it is what keeps your research honest rather than accidentally plagiarized.',
  words: [
    { w: 'primary source', d: 'Created by someone directly involved: a diary, a photo, an interview, original data.' },
    { w: 'secondary source', d: 'Describes or analyses primary sources: a textbook, an encyclopedia article.' },
    { w: 'plagiarism', d: 'Using someone else\'s words or ideas as if they were yours.' },
    { w: 'paraphrase', d: 'Restating an idea in your own words: and still crediting the source.' }
  ],
  visual: [
    { type: 'table', title: 'Judging a source: five quick questions', head: ['Ask', 'Good sign', 'Warning sign'],
      rows: [['Who wrote it?', 'a named author or known organization', 'no author listed'],
             ['When?', 'recent, or clearly dated', 'no date anywhere'],
             ['Why does it exist?', 'to inform or educate', 'to sell you something'],
             ['Where did the facts come from?', 'sources listed', 'no sources at all'],
             ['Does anyone else say this?', 'two other sources agree', 'only this one site says it']] },
    { type: 'decide', question: 'Primary or secondary?', branches: [
      { if: 'A diary, letter, photo, speech, or interview from the time', then: 'PRIMARY: someone who was there made it.' },
      { if: 'An encyclopedia entry, textbook, or news article about the event', then: 'SECONDARY: written about it afterwards.' },
      { if: 'Original data or an experiment result', then: 'PRIMARY.' },
      { if: 'A summary of several studies', then: 'SECONDARY.' }
    ] }
  ],
  steps: [
    'Write your research question first. Everything else is judged against it.',
    'Search using the specific words from your question, not a whole sentence.',
    'For each source, run the five questions: who, when, why, where from, and who else agrees.',
    'Decide whether it is primary or secondary and note that down.',
    'Take notes in YOUR OWN WORDS. Only copy exact words when you intend to quote them.',
    'Record the title, author, and web address of everything you use so you can build a bibliography.'
  ],
  example: { prompt: 'You need a source about the 1900 Galveston hurricane. You find a survivor\'s letter and an encyclopedia article. Which is which?',
    work: ['The survivor\'s letter was written by someone who was there → primary.', 'The encyclopedia article was written later, about the event → secondary.', 'Both are useful: the letter gives experience, the article gives context.'],
    answer: 'The letter is a primary source; the encyclopedia article is secondary.' },
  traps: [
    'Copying and pasting into your notes. Later you will not remember which words were yours.',
    'Trusting a site because it looks professional. Check who wrote it and why.',
    'Using only one source. Two sources that agree are worth far more than one.',
    'Forgetting to record the web address, then not being able to build your bibliography.'
  ],
  check: [
    { q: 'A photograph taken during an event: primary or secondary?', a: 'Primary.' },
    { q: 'What is the difference between paraphrasing and plagiarism?', a: 'Paraphrasing puts the idea in your own words AND credits the source. Plagiarism does not credit it.' },
    { q: 'How many sources should agree before you trust a fact?', a: 'At least two independent ones.' }
  ],
  links: [
    { t: 'Simple Wikipedia', u: 'https://simple.wikipedia.org/wiki/Main_Page', d: 'A starting point: then follow its sources.' },
    { t: 'Ducksters', u: 'https://www.ducksters.com/', d: 'Student-level articles on history and science.' },
    { t: 'Reading Rockets: Inquiry Charts', u: 'https://www.readingrockets.org/classroom/classroom-strategies/inquiry-charts', d: 'Organizing information from several sources.' }
  ],
  note: 'strategy'
}

]);

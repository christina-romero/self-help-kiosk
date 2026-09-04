/* ============================================================
   EARLY GRADES (K, 1, 2) across reading, language, writing,
   vocabulary and math. Written at a lower reading level than the
   rest of the library, on the assumption that a Guide, an older
   buddy, or a text-to-speech tool may be reading it aloud.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

/* ---------------- Early reading ---------------- */
{
  id: 'r-letter-sounds', subject: 'reading', unit: 'Sounds and letters', grades: ['K', '1'],
  title: 'Letters and the sounds they make',
  alt: 'letter sounds phonics alphabet consonant vowel letter name',
  stuck: ['I know the letter name but not the sound', 'I mix up b and d'],
  teks: ['K.2.B', '1.2.B'],
  apps: ['Alpha Reading Fluency', 'Anton'],
  plain: 'Every letter has a name and a sound, and they are not the same thing. When you read, you use the SOUND. The letter is called "em" but it says /m/.',
  why: 'Every reading app in your day starts here. If the sounds are shaky, everything above them wobbles.',
  words: [
    { w: 'vowel', d: 'a, e, i, o, u (and sometimes y). Every word needs one.' },
    { w: 'consonant', d: 'All the other letters.' },
    { w: 'sound', d: 'What the letter says, not what it is called.' }
  ],
  visual: [
    { type: 'soundboxes', boxes: ['m', 'a', 'p'], word: 'map', title: 'Three letters, three sounds',
      caption: 'Say the sound in each box, then push them together.' },
    { type: 'table', title: 'Letters people mix up', head: ['Letters', 'Trick'],
      rows: [['b and d', 'Make a bed with your fists. The left hand is b, the right is d.'],
             ['p and q', 'p points down and left. q points down and right.'],
             ['m and w', 'm has mountains on top. w has a valley.'],
             ['short a and short e', 'Say them slowly. Your mouth opens wider for a.']] }
  ],
  steps: [
    'Point to the letter and say its SOUND, not its name.',
    'Vowels have a short sound and a long sound. Try the short one first.',
    'If the word does not sound real, flip to the long vowel sound and try again.',
    'For letters you mix up, use the trick every single time until you stop needing it.',
    'Practice the letters you get wrong, not the ones you already know.'
  ],
  example: { prompt: 'Read the word "pet."',
    work: ['p says /p/.', 'e says /e/ (short e).', 't says /t/.', 'Push them together: /p/ /e/ /t/.'],
    answer: 'pet' },
  traps: [
    'Saying the letter name instead of the sound. "See-ay-tee" does not turn into "cat."',
    'Adding an "uh" to the end. It is /t/, not "tuh."',
    'Guessing the word from the first letter and the picture.',
    'Practicing all 26 letters when only four are giving you trouble.'
  ],
  check: [
    { q: 'What sound does the letter s make?', a: '/s/, like the start of "sun."' },
    { q: 'Which letters are vowels?', a: 'a, e, i, o, u, and sometimes y.' },
    { q: 'You read a word and it is not a real word. What should you try?', a: 'The other vowel sound. Try long instead of short.' }
  ],
  links: [
    { t: 'Reading Rockets: Phonics and Decoding', u: 'https://www.readingrockets.org/topics/phonics-and-decoding', d: 'How letters and sounds work.' },
    { t: 'Starfall', u: 'https://www.starfall.com/h/', d: 'Letter sounds you can hear and play with.' }
  ],
  note: 'strategy'
},
{
  id: 'r-rhyming-syllables', subject: 'reading', unit: 'Sounds and letters', grades: ['K', '1', '2'],
  title: 'Hearing rhymes, syllables, and separate sounds',
  alt: 'rhyming syllables phonological awareness clap syllables first sound',
  stuck: ['I cannot tell if two words rhyme', 'How many syllables is that?'],
  teks: ['K.2.A', '1.2.A', '2.2.A'],
  apps: ['Alpha Reading Fluency', 'Anton', 'MobyMax Primer'],
  plain: 'This is listening work, not reading work. You do it with your ears and your mouth, with no letters in front of you at all.',
  why: 'Kids who can hear the parts of a spoken word learn to read faster, because reading is matching letters to sounds you can already hear.',
  words: [
    { w: 'rhyme', d: 'Words that end with the same sound: cat, hat, mat.' },
    { w: 'syllable', d: 'A beat in a word. Every syllable has one vowel sound.' },
    { w: 'first sound', d: 'The very first noise you make when you say a word.' }
  ],
  visual: [
    { type: 'table', title: 'Three listening jobs', head: ['Job', 'How to do it', 'Example'],
      rows: [['Rhyme', 'Say both words. Do the ENDS match?', 'cat / hat: yes. cat / cup: no'],
             ['Syllables', 'Put your hand under your chin. Count the drops.', 'but-ter-fly = 3'],
             ['First sound', 'Say the word and stop after the first noise.', 'sun starts with /s/'],
             ['All the sounds', 'Say the word slowly, one sound at a time.', 'ship = /sh/ /i/ /p/']] },
    { type: 'soundboxes', boxes: ['c', 'a', 't'], word: 'cat', title: 'Say each sound, then say the word' }
  ],
  steps: [
    'Close your eyes. This is listening, so do not look at any letters.',
    'For rhyming, say both words out loud and listen only to the ENDS.',
    'For syllables, put your hand flat under your chin and say the word. Count how many times your chin drops.',
    'For the first sound, say the word and freeze right after the first noise.',
    'To hear all the sounds, stretch the word out slowly like a rubber band.'
  ],
  example: { prompt: 'How many syllables are in "elephant"?',
    work: ['Hand under chin.', 'Say it slowly: el-e-phant.', 'Chin drops three times.'],
    answer: '3 syllables' },
  traps: [
    'Looking at the letters. This is a listening job.',
    'Thinking words rhyme because they start the same. Rhyming is about the END.',
    'Counting letters instead of beats. "Cake" has four letters but one syllable.',
    'Saying the word fast. Slow down and you will hear the parts.'
  ],
  check: [
    { q: 'Do "dog" and "log" rhyme?', a: 'Yes. Both end with /og/.' },
    { q: 'How many syllables in "computer"?', a: '3: com-pu-ter.' },
    { q: 'What is the first sound in "friend"?', a: '/f/.' }
  ],
  links: [
    { t: 'Reading Rockets: Rhyming Games', u: 'https://www.readingrockets.org/classroom/classroom-strategies/rhyming-games', d: 'Games for hearing rhyme.' },
    { t: 'Reading Rockets: Syllable Games', u: 'https://www.readingrockets.org/classroom/classroom-strategies/syllable-games', d: 'Games for counting beats.' }
  ],
  note: 'strategy'
},
{
  id: 'r-vowel-patterns', subject: 'reading', unit: 'Sounds and letters', grades: ['1', '2', '3'],
  title: 'Silent e, vowel teams, and bossy r',
  alt: 'silent e magic e vowel teams r controlled long short vowel patterns',
  stuck: ['Why is it "cape" and not "cap"?', 'Two vowels together confuse me'],
  teks: ['1.2.B', '2.2.B', '3.2.A'],
  apps: ['Alpha Reading Fluency', 'Anton', 'AlphaRead', 'MobyMax Primer'],
  plain: 'Some letters change the sound of the vowel next to them. A silent e at the end makes the vowel say its name. Two vowels together usually make one sound. An r after a vowel bosses it into a whole new sound.',
  why: 'These three patterns cover most of the words that look easy but come out wrong.',
  words: [
    { w: 'silent e', d: 'An e at the end that you do not say. It makes the vowel long.' },
    { w: 'long vowel', d: 'When the vowel says its own name: a in cake.' },
    { w: 'vowel team', d: 'Two vowels working together to make one sound: ai, ea, oa, ee.' },
    { w: 'bossy r', d: 'An r after a vowel changes its sound: ar, er, ir, or, ur.' }
  ],
  visual: [
    { type: 'table', title: 'The three patterns', head: ['Pattern', 'What happens', 'Examples'],
      rows: [['silent e', 'the vowel says its name, the e is quiet', 'cap becomes cape; kit becomes kite; hop becomes hope'],
             ['vowel team', 'two vowels, one sound, usually the first one\'s name', 'rain, meat, boat, feet'],
             ['bossy r', 'the r changes the vowel completely', 'car, her, bird, corn, turn']],
      note: 'Look at the WHOLE word before you decide what the vowel says.' },
    { type: 'flow', steps: [
      'Look at the whole word before you start.',
      'Is there an e on the end? If yes, the vowel probably says its name and the e is silent.',
      'Are there two vowels next to each other? Treat them as one sound.',
      'Is there an r right after the vowel? The r bosses it.',
      'If none of those, the vowel is probably short.',
      'Read the word. If it is not real, try the other vowel sound.'
    ] }
  ],
  steps: [
    'Scan the whole word first. Do not start sounding out until you have.',
    'Look for a silent e at the end.',
    'Look for two vowels touching.',
    'Look for an r right after a vowel.',
    'Decide what the vowel says, then blend the whole word.',
    'Check it is a real word. If not, flip the vowel sound and try again.'
  ],
  example: { prompt: 'Read "shade."',
    work: ['Whole word first: s-h-a-d-e.', '"sh" is one sound.', 'There is an e on the end, so the a says its name.', 'The e is silent.', 'Blend: /sh/ /ay/ /d/.'],
    answer: 'shade' },
  traps: [
    'Sounding out left to right without looking ahead. The silent e is at the END but it changes the MIDDLE.',
    'Saying the silent e out loud.',
    'Sounding out both letters of a vowel team separately.',
    'Forgetting that the r changes the vowel: "car" is not "c-a-r" with a short a.'
  ],
  check: [
    { q: 'What does the e do in "bike"?', a: 'It is silent and it makes the i say its name.' },
    { q: 'How many sounds does "ea" make in "beach"?', a: 'One. It is a vowel team.' },
    { q: 'What is different about the a in "car"?', a: 'The r changes it. It does not say short a or long a.' }
  ],
  links: [
    { t: 'Reading Rockets: Matching Books to Phonics Features', u: 'https://www.readingrockets.org/classroom/classroom-strategies/matching-books-phonics-features', d: 'Practicing a pattern in real books.' },
    { t: 'Reading Rockets: Word Hunts', u: 'https://www.readingrockets.org/classroom/classroom-strategies/word-hunts', d: 'Hunt for a pattern in what you are reading.' }
  ],
  note: 'steps'
},
{
  id: 'r-print-awareness', subject: 'reading', unit: 'How books work', grades: ['K', '1'],
  title: 'How a book works',
  alt: 'print awareness front cover title page left to right return sweep parts of a book',
  stuck: ['I do not know where to start reading', 'Which way do the words go?'],
  teks: ['K.2.D', '1.2.D'],
  apps: ['Alpha Reading Fluency', 'Anton'],
  plain: 'Books have rules. Words go left to right and top to bottom. When you get to the end of a line you drop down and go back to the left. The spaces show where one word stops and the next one starts.',
  why: 'Reading apps assume you already know this. If you are landing in the wrong place on the screen, this is usually why.',
  words: [
    { w: 'title page', d: 'The page near the front with the book name and the author.' },
    { w: 'author', d: 'The person who wrote the words.' },
    { w: 'illustrator', d: 'The person who drew the pictures.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Start at the front cover. The title and the author are there.',
      'Open the book and find the first page with words.',
      'Put your finger on the first word at the TOP LEFT.',
      'Read across to the right.',
      'At the end of the line, drop down one line and go all the way back to the left.',
      'Keep going until the page runs out, then turn the page.'
    ], caption: 'Left to right, top to bottom, then turn the page.' },
    { type: 'table', title: 'The parts of a book', head: ['Part', 'What it tells you'],
      rows: [['Front cover', 'the title, the author, and a picture clue'],
             ['Title page', 'the title and who made the book'],
             ['Words on the page', 'the story or the information'],
             ['Pictures', 'clues about what the words say'],
             ['Back cover', 'a short description of what is inside']] }
  ],
  steps: [
    'Hold the book so the front cover faces you and the words are the right way up.',
    'Read the title out loud.',
    'Open to the first page of the story.',
    'Point at the first word at the top left.',
    'Move your finger left to right as you read.',
    'At the end of a line, drop down and slide all the way back to the left.',
    'Use the spaces to tell where each word ends.'
  ],
  example: { prompt: 'You finish reading the last word on a line. Where does your finger go?',
    work: ['Not further right. The line is over.', 'Down one line.', 'All the way back to the left edge.'],
    answer: 'Down one line and back to the far left.' },
  traps: [
    'Reading the second line right to left because your finger is already on the right.',
    'Pointing at letters instead of whole words when you read.',
    'Skipping the title. The title tells you what the book is about.',
    'Ignoring the spaces, so two words run together.'
  ],
  check: [
    { q: 'Where is the first word on a page?', a: 'Top left.' },
    { q: 'What does the author do?', a: 'Writes the words.' },
    { q: 'What shows you where one word ends?', a: 'The space.' }
  ],
  links: [
    { t: 'Storyline Online', u: 'https://storylineonline.net/', d: 'Watch books being read so you can see how they work.' },
    { t: 'Reading Rockets: Shared Reading', u: 'https://www.readingrockets.org/classroom/classroom-strategies/shared-reading', d: 'Reading together to learn how print works.' }
  ],
  note: 'steps'
},
{
  id: 'r-retell', subject: 'reading', unit: 'Understanding what you read', grades: ['K', '1', '2'],
  title: 'Retelling a story',
  alt: 'retell story beginning middle end sequence somebody wanted first next last',
  stuck: ['I read it but I cannot say what happened', 'I only remember the last part'],
  teks: ['K.6.D', '1.7.D', '2.7.D'],
  apps: ['Alpha Reading Fluency', 'Anton', 'MobyMax Primer'],
  plain: 'Retelling means saying what happened in your own words, in the right order. You do not tell every single thing. You tell the parts someone would need to understand the story.',
  why: 'If you cannot retell it, you did not really read it. Retelling is the fastest way to find that out.',
  words: [
    { w: 'retell', d: 'Say what happened, in order, in your own words.' },
    { w: 'in order', d: 'Beginning first, then middle, then end.' }
  ],
  visual: [
    { type: 'table', title: 'Words that help you retell', head: ['Part', 'Start your sentence with'],
      rows: [['Beginning', 'First… / At the start…'],
             ['Middle', 'Then… / Next… / After that…'],
             ['The problem', 'But then… / The trouble was…'],
             ['End', 'Finally… / At the end…']] },
    { type: 'flow', steps: [
      'Who was the story about?',
      'Where did it happen?',
      'What happened FIRST?',
      'What was the problem?',
      'What happened NEXT?',
      'How did it end?'
    ], caption: 'Answer these six in order and you have retold the story.' }
  ],
  steps: [
    'Say who the story was about.',
    'Say where it happened.',
    'Tell what happened first.',
    'Tell what the problem was.',
    'Tell what happened next.',
    'Tell how it ended.',
    'Use your own words, not the book\'s words.'
  ],
  example: { prompt: 'Retell: A boy loses his dog at the park, looks everywhere, and finds it asleep under a bench.',
    work: ['Who: a boy and his dog.', 'Where: the park.', 'First: he was at the park with his dog.', 'Problem: the dog went missing.', 'Next: he looked everywhere.', 'End: he found it asleep under a bench.'],
    answer: 'First a boy was at the park with his dog. But then the dog went missing. He looked everywhere. Finally he found it asleep under a bench.' },
  traps: [
    'Telling only the exciting part and skipping the beginning.',
    'Telling every tiny detail so the retell takes as long as the story.',
    'Getting the order mixed up.',
    'Reading sentences straight from the book instead of using your own words.'
  ],
  check: [
    { q: 'What three parts does a retell need?', a: 'Beginning, middle, and end, in that order.' },
    { q: 'Should you use the book\'s exact words?', a: 'No. Use your own words.' },
    { q: 'What word can start the middle of a retell?', a: '"Then" or "Next" or "After that."' }
  ],
  links: [
    { t: 'Reading Rockets: Story Sequence', u: 'https://www.readingrockets.org/classroom/classroom-strategies/story-sequence', d: 'Putting events in order.' },
    { t: 'Reading Rockets: Story Maps', u: 'https://www.readingrockets.org/classroom/classroom-strategies/story-maps', d: 'A picture that holds a whole story.' }
  ],
  note: 'strategy'
},
{
  id: 'r-ask-questions', subject: 'reading', unit: 'Understanding what you read', grades: ['K', '1', '2', '3'],
  title: 'Asking questions while you read',
  alt: 'ask questions wonder before during after reading curiosity',
  stuck: ['I read the words but I am not thinking', 'I get bored halfway through'],
  teks: ['K.5.B', '1.6.B', '2.6.B', '3.6.B'],
  apps: ['Alpha Reading Fluency', 'Anton', 'AlphaRead', 'MobyMax Primer'],
  plain: 'Good readers ask questions in their heads the whole time. Asking a question gives your brain a reason to keep reading, because now you want the answer.',
  why: 'Asking questions is the difference between your eyes moving and your brain working.',
  words: [
    { w: 'wonder', d: 'To ask yourself something you want to find out.' },
    { w: 'predict', d: 'To guess what will happen using clues.' }
  ],
  visual: [
    { type: 'table', title: 'Questions for each part of reading', head: ['When', 'Ask yourself'],
      rows: [['Before you read', 'What do I think this will be about? What do I already know?'],
             ['While you read', 'Why did that happen? What does that word mean? What will happen next?'],
             ['After you read', 'What was the most important part? What am I still wondering?']] },
    { type: 'flow', steps: [
      'Before you start, look at the title and the pictures. Ask: what will this be about?',
      'Read a page.',
      'Stop and ask one question. Any question counts.',
      'Keep reading to look for the answer.',
      'At the end, ask what you are still wondering about.'
    ] }
  ],
  steps: [
    'Before reading, look at the cover and ask what the book will be about.',
    'While reading, stop at the end of each page.',
    'Ask one question out loud or in your head.',
    'Keep reading to find the answer.',
    'If the book never answers it, that is fine. Some questions stay open.',
    'After reading, ask what you still want to know.'
  ],
  example: { prompt: 'You read: "Mia hid the box under her bed and did not tell anyone."',
    work: ['Question: what is in the box?', 'Question: why is she hiding it?', 'Question: who does she not want to find it?', 'Keep reading to see which one gets answered.'],
    answer: 'Any of those. Asking is what keeps you reading.' },
  traps: [
    'Waiting until the end to ask anything.',
    'Thinking a question is only good if the book answers it.',
    'Reading on when you already have a question you cannot answer. Stop and reread instead.',
    'Only asking "what happens next." Also ask why and how.'
  ],
  check: [
    { q: 'When should you ask questions?', a: 'Before, during, and after reading.' },
    { q: 'What do you do after you ask a question?', a: 'Keep reading to look for the answer.' },
    { q: 'Is it okay if the book never answers your question?', a: 'Yes. Some questions stay open, and that is normal.' }
  ],
  links: [
    { t: 'Reading Rockets: Think-Alouds', u: 'https://www.readingrockets.org/classroom/classroom-strategies/think-alouds', d: 'What good readers say in their heads.' },
    { t: 'Reading Rockets: Directed Reading Thinking Activity', u: 'https://www.readingrockets.org/classroom/classroom-strategies/directed-reading-thinking-activity-drta', d: 'A predict-and-check routine.' }
  ],
  note: 'strategy'
},
{
  id: 'r-mental-images', subject: 'reading', unit: 'Understanding what you read', grades: ['K', '1', '2', '3'],
  title: 'Making a movie in your head',
  alt: 'mental images visualize picture in your head visualizing sensory',
  stuck: ['The words go in but nothing happens', 'I finish a page and remember nothing'],
  teks: ['K.5.D', '1.6.D', '2.6.D', '3.6.D'],
  apps: ['Alpha Reading Fluency', 'Anton', 'AlphaRead', 'MobyMax Primer'],
  plain: 'While you read, try to see it. Turn the words into a picture or a little movie in your head. If you cannot see anything, that is a sign to slow down and reread.',
  why: 'You remember pictures far better than sentences. Readers who visualize remember much more of what they read.',
  words: [
    { w: 'visualize', d: 'To make a picture in your mind.' },
    { w: 'sensory words', d: 'Words that tell you what something looked, sounded, smelled, or felt like.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Read a sentence or two.',
      'Close your eyes for a second.',
      'Ask: what do I see? What do I hear?',
      'If you see nothing, reread more slowly and look for describing words.',
      'Add to your picture as you keep reading. The movie should change.'
    ] },
    { type: 'table', title: 'Use all your senses', head: ['Ask', 'Example from a text'],
      rows: [['What do I SEE?', 'a tall grey door with peeling paint'],
             ['What do I HEAR?', 'the wind pushing against the window'],
             ['What do I SMELL?', 'wet leaves'],
             ['What do I FEEL?', 'a cold handle under her hand']] }
  ],
  steps: [
    'Read a small chunk, not a whole page.',
    'Pause and make the picture.',
    'Ask yourself what you can see and hear.',
    'Hunt for the describing words. They are what your picture is built from.',
    'Keep reading and update your picture as things change.',
    'If nothing appears, slow down and read that part again.'
  ],
  example: { prompt: 'Text: "The old truck coughed twice and stopped in the middle of the dusty road."',
    work: ['I see an old truck, maybe rusty.', 'I hear the engine cough and go quiet.', 'I see dust hanging in the air around it.', 'I feel that it is hot and dry.'],
    answer: 'A rusty old truck stopped on a hot dusty road, with the engine gone silent.' },
  traps: [
    'Reading a whole page before stopping. Pause more often.',
    'Skipping the describing words, which are the ones that build the picture.',
    'Keeping the same picture even when the story has changed.',
    'Thinking there is one correct picture. Yours will be different from everyone else\'s, and that is fine.'
  ],
  check: [
    { q: 'What should you do if you cannot see anything in your head?', a: 'Slow down and reread, looking for describing words.' },
    { q: 'Which words help you build the picture?', a: 'The ones that describe what things look, sound, smell, or feel like.' },
    { q: 'Should your picture stay the same the whole book?', a: 'No. It should change as the story changes.' }
  ],
  links: [
    { t: 'Reading Rockets: Visual Imagery', u: 'https://www.readingrockets.org/classroom/classroom-strategies/visual-imagery', d: 'The visualizing strategy.' },
    { t: 'Reading Rockets: Descriptive Writing', u: 'https://www.readingrockets.org/classroom/classroom-strategies/descriptive-writing', d: 'The words that make pictures.' }
  ],
  note: 'strategy'
},

/* ---------------- Early language and writing ---------------- */
{
  id: 'l-capital-period', subject: 'language', unit: 'Building sentences', grades: ['K', '1', '2'],
  title: 'Capital letters and end marks',
  alt: 'capital letter period question mark exclamation sentence beginning end',
  stuck: ['My teacher circled the start of my sentence', 'When do I use a question mark?'],
  teks: ['K.10.D', '1.11.D', '2.11.D'],
  apps: ['Lalilo'],
  plain: 'Every sentence starts with a capital letter and ends with a mark. The mark tells the reader how to say it: a period is plain, a question mark asks, and an exclamation point is loud or excited.',
  why: 'This is the first thing every writing app checks, so it is the easiest place to stop losing points.',
  words: [
    { w: 'capital letter', d: 'The big version of a letter: A, B, C.' },
    { w: 'period', d: 'The dot at the end of a telling sentence.' },
    { w: 'question mark', d: 'The mark at the end of a question.' }
  ],
  visual: [
    { type: 'table', title: 'Which end mark?', head: ['If the sentence…', 'Use', 'Example'],
      rows: [['tells you something', 'a period .', 'The dog is asleep.'],
             ['asks something', 'a question mark ?', 'Where is the dog?'],
             ['is loud or excited', 'an exclamation point !', 'The dog got out!']] },
    { type: 'flow', steps: [
      'Start every sentence with a capital letter.',
      'Also use a capital for names and for the word I.',
      'Write your sentence.',
      'Ask: is this telling, asking, or exciting?',
      'Put the matching mark at the end.',
      'Read it back and check both ends.'
    ] }
  ],
  steps: [
    'Capital letter at the start. Every time.',
    'Capital letters for names of people, pets, and places.',
    'The word I is always a capital, even in the middle.',
    'At the end, decide: telling, asking, or exciting?',
    'Put the matching mark.',
    'Reread and check the start and the end before you move on.'
  ],
  example: { prompt: 'Fix: "where is my backpack"',
    work: ['It starts with a lowercase w. Make it a capital W.', 'It is asking something.', 'So it needs a question mark.'],
    answer: 'Where is my backpack?' },
  traps: [
    'Capital at the start but no mark at the end.',
    'Using a period on a question.',
    'Forgetting that names need capitals too.',
    'Writing "i" instead of "I".'
  ],
  check: [
    { q: 'What goes at the end of "Do you have a pencil"?', a: 'A question mark.' },
    { q: 'Which letter is always a capital, even in the middle of a sentence?', a: 'I.' },
    { q: 'Fix: "my name is sam"', a: '"My name is Sam."' }
  ],
  links: [
    { t: 'Grammar Monster: Sentences', u: 'https://www.grammar-monster.com/glossary/sentences.htm', d: 'What a sentence needs.' },
    { t: 'Khan Academy: Punctuation', u: 'https://www.khanacademy.org/humanities/grammar/punctuation', d: 'End marks explained.' }
  ],
  note: 'steps'
},
{
  id: 'w-drawing-to-writing', subject: 'writing', unit: 'Getting started', grades: ['K', '1', '2'],
  title: 'From a picture to a sentence to a story',
  alt: 'draw then write labeling sentences beginning writers plan by drawing',
  stuck: ['I do not know what to write', 'I drew a picture but I cannot start the words'],
  teks: ['K.10.A', 'K.10.B', 'K.11.A', '1.11.A', '1.11.B', '2.11.A'],
  apps: [],
  plain: 'Draw it first. The picture is your plan. Then label the things in the picture, then turn the labels into sentences. That way you never face a blank page.',
  why: 'The TEKS actually say to plan by drawing in these grades. It is not a shortcut, it is the method.',
  words: [
    { w: 'label', d: 'A word written next to the thing it names.' },
    { w: 'plan', d: 'What you decide before you write.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Draw a picture of what you want to write about. Take your time.',
      'Label the things in your picture. Write the word next to each one.',
      'Pick one label and say a sentence about it out loud.',
      'Write that sentence down.',
      'Say and write another sentence.',
      'Read all your sentences back and check the order makes sense.'
    ], caption: 'Draw, label, say, write. Never start at "write."' },
    { type: 'hamburger', layers: [
      { l: 'First…', d: 'what happened at the start' },
      { l: 'Then…', d: 'what happened next' },
      { l: 'Last…', d: 'how it ended' }
    ], caption: 'Three sentences is a whole story when you are getting started.' }
  ],
  steps: [
    'Choose something that really happened to you, or something you know a lot about.',
    'Draw it. Put in the details you want to write about.',
    'Label the things in your drawing.',
    'Say your first sentence out loud before you write it.',
    'Write it down. Capital at the start, mark at the end.',
    'Say and write the next sentence.',
    'Read all of it back out loud.'
  ],
  example: { prompt: 'You want to write about your trip to the park.',
    work: ['Draw the park: a swing, a dog, your sister.', 'Label: swing, dog, Ana.', 'Say it: "First I went to the park with Ana."', 'Write it.', 'Say the next one: "Then we saw a big dog."', 'Write it.'],
    answer: 'First I went to the park with Ana. Then we saw a big dog. Last we went home.' },
  traps: [
    'Starting with the writing. The drawing is the plan, so do it first.',
    'Drawing something you do not actually know about.',
    'Writing one word instead of a sentence. A sentence needs a who and a what.',
    'Skipping the "say it out loud" step. Saying it first makes writing it much easier.'
  ],
  check: [
    { q: 'What comes first, the drawing or the writing?', a: 'The drawing. It is your plan.' },
    { q: 'What is a label?', a: 'A word written next to the thing it names in your picture.' },
    { q: 'What should you do before you write each sentence?', a: 'Say it out loud.' }
  ],
  links: [
    { t: 'ReadWriteThink: Comic Creator', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/comic-creator', d: 'Plan a story in pictures first.' },
    { t: 'ReadWriteThink: Printouts', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Draw-and-write pages you can print.' }
  ],
  note: 'strategy'
},
{
  id: 'v-picture-clues', subject: 'vocabulary', unit: 'Figuring out new words', grades: ['K', '1', '2'],
  title: 'Using pictures to figure out a word',
  alt: 'picture clues illustrations word meaning context early vocabulary',
  stuck: ['There is a word I do not know', 'I do not have a dictionary'],
  teks: ['K.3.B', '1.3.B', '2.3.B'],
  apps: [],
  plain: 'The picture on the page is not just decoration. It usually shows you what the hard word means. Look at the picture, then read the sentence again.',
  why: 'This is the first word-learning strategy you will ever use, and it is a real one the TEKS asks for.',
  words: [
    { w: 'clue', d: 'Something that helps you figure out an answer.' },
    { w: 'illustration', d: 'The picture in a book.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Stop when you hit a word you do not know.',
      'Read to the end of the sentence anyway.',
      'Look at the picture on that page.',
      'Ask: what in the picture might this word be naming?',
      'Say your guess in place of the word.',
      'Does the sentence make sense now? If yes, keep reading.'
    ] },
    { type: 'table', title: 'Where to look for help', head: ['Look at', 'What it tells you'],
      rows: [['The picture', 'what the thing looks like'],
             ['The rest of the sentence', 'what the thing does'],
             ['The sentence before', 'what was happening'],
             ['Ask someone', 'when the other clues run out']] }
  ],
  steps: [
    'Finish the sentence even if one word stopped you.',
    'Look carefully at the picture.',
    'Find the part of the picture the sentence is talking about.',
    'Guess what the word means.',
    'Say the sentence again with your guess instead of the word.',
    'If it makes sense, keep going. If not, ask a Guide.'
  ],
  example: { prompt: 'The sentence says "The kitten crept under the porch." You do not know "crept." The picture shows a kitten low to the ground, moving slowly under a step.',
    work: ['Finish the sentence first.', 'Look at the picture: the kitten is low and slow.', 'Guess: crept means moved slowly and quietly.', 'Try it: "The kitten moved slowly and quietly under the porch." That works.'],
    answer: 'Crept means to move slowly and quietly.' },
  traps: [
    'Stopping at the word and never finishing the sentence.',
    'Skipping the picture.',
    'Guessing without checking whether your guess makes sense.',
    'Giving up instead of asking after you have tried the clues.'
  ],
  check: [
    { q: 'What should you do first when you hit a hard word?', a: 'Finish the sentence anyway.' },
    { q: 'How do you check your guess?', a: 'Say the sentence again with your guess in place of the word.' },
    { q: 'What if the picture does not help?', a: 'Use the rest of the sentence, then ask a Guide.' }
  ],
  links: [
    { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/', d: 'Definitions written for kids.' },
    { t: 'Reading Rockets: Vocabulary', u: 'https://www.readingrockets.org/topics/vocabulary', d: 'Ways to learn new words.' }
  ],
  note: 'word'
},

/* ---------------- Early math ---------------- */
{
  id: 'm-shapes-2d-3d', subject: 'math', unit: 'Geometry and measurement', grades: ['K', '1', '2'],
  title: 'Flat shapes and solid shapes',
  alt: 'two dimensional three dimensional shapes sort attributes sides vertices cube sphere',
  stuck: ['Is a cube a square?', 'How do I sort these shapes?'],
  teks: ['K.6.A', 'K.6.B', 'K.6.E', '1.6.D', '1.6.E', '2.8.B', '2.8.C'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'Flat shapes lie on the paper. Solid shapes take up space and you can hold them. A square is flat. A cube is solid, and each of its faces is a square.',
  why: 'Sorting shapes by their attributes, rather than by how they look, is what geometry is built on all the way up.',
  words: [
    { w: 'side', d: 'A straight edge of a flat shape.' },
    { w: 'vertex', d: 'A corner. More than one is called vertices.' },
    { w: 'face', d: 'A flat surface on a solid shape.' },
    { w: 'attribute', d: 'Something true about the shape: how many sides, how many corners.' }
  ],
  visual: [
    { type: 'shapes', list: [
      { l: 'Circle', sides: 0, d: 'no sides, no corners' },
      { l: 'Triangle', sides: 3, d: '3 sides, 3 corners' },
      { l: 'Square', sides: 4, d: '4 equal sides, 4 corners' },
      { l: 'Hexagon', sides: 6, d: '6 sides, 6 corners' }
    ] },
    { type: 'table', title: 'Flat shape and its solid partner', head: ['Flat (2D)', 'Solid (3D)', 'Real thing'],
      rows: [['circle', 'sphere', 'a ball'], ['circle', 'cylinder', 'a soup can'],
             ['square', 'cube', 'a dice'], ['triangle', 'cone', 'an ice cream cone'],
             ['rectangle', 'rectangular prism', 'a cereal box']] }
  ],
  steps: [
    'Ask first: is this flat like paper, or solid like a block?',
    'For a flat shape, count the straight sides.',
    'Count the corners. Most shapes have the same number of sides and corners.',
    'Name it from the number of sides.',
    'For a solid shape, look at the flat faces and name those.',
    'When sorting, pick one rule first, like "3 sides or not 3 sides," and stick to it.'
  ],
  example: { prompt: 'How is a square different from a cube?',
    work: ['A square is flat. It has 4 sides and 4 corners.', 'A cube is solid. You can hold it.', 'A cube has 6 faces, and every face is a square.'],
    answer: 'A square is flat; a cube is solid and made of six squares.' },
  traps: [
    'Saying a shape is not a triangle because it is turned sideways. Turning does not change the shape.',
    'Counting a curved edge as a side. Sides are straight.',
    'Mixing up flat and solid names: square and cube, circle and sphere.',
    'Sorting by color or size when the question asked about sides and corners.'
  ],
  check: [
    { q: 'How many sides does a hexagon have?', a: 'Six.' },
    { q: 'Is a can a cylinder or a circle?', a: 'A cylinder. It is solid. Its top and bottom are circles.' },
    { q: 'A shape has 3 straight sides. What is it?', a: 'A triangle.' }
  ],
  links: [
    { t: 'Math is Fun: Geometry', u: 'https://www.mathsisfun.com/geometry/index.html', d: 'Shapes with pictures you can turn.' },
    { t: 'Math is Fun: Solid Geometry', u: 'https://www.mathsisfun.com/geometry/solid-geometry.html', d: 'Solid shapes and their faces.' }
  ],
  note: 'frayer'
},
{
  id: 'm-subtraction-meaning', subject: 'math', unit: 'Adding and subtracting', grades: ['K', '1', '2'],
  title: 'What subtraction really means',
  alt: 'subtraction take away difference comparing count back word problems',
  stuck: ['I do not know whether to add or subtract', 'What does "how many more" mean?'],
  teks: ['K.3.A', 'K.3.B', '1.3.B', '1.5.D', '2.4.C'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'Subtraction does two different jobs. Sometimes it takes some away from a group. Sometimes it compares two groups to find how many more one has. Both use the minus sign.',
  why: 'Most subtraction word-problem mistakes are not arithmetic mistakes. They are "I did not know this was a subtraction problem" mistakes.',
  words: [
    { w: 'difference', d: 'The answer to a subtraction.' },
    { w: 'take away', d: 'Removing some from a group.' },
    { w: 'compare', d: 'Looking at two groups to see how many more one has.' }
  ],
  visual: [
    { type: 'tape', rows: [
      { label: 'Ana', units: 8, each: '1' },
      { label: 'Ben', units: 5, each: '1', fill: false, total: '3 more' }
    ], caption: 'Line them up. The extra part is the difference: 8 minus 5 is 3.' },
    { type: 'decide', question: 'Is this a subtraction problem?', branches: [
      { if: 'Some are taken away, eaten, lost, or given', then: 'Yes. Take away.' },
      { if: 'It asks HOW MANY MORE or HOW MANY FEWER', then: 'Yes. Comparing.' },
      { if: 'It gives you the total and one part, and asks for the other part', then: 'Yes. Missing part.' },
      { if: 'Two groups are joined together', then: 'No, that is addition.' }
    ] }
  ],
  steps: [
    'Read the problem and picture what is happening.',
    'Ask: is something being taken away, or are two groups being compared?',
    'Draw it. Circles, sticks, or a bar. Any drawing helps.',
    'For take away, start with the whole group and cross out the ones that go.',
    'For comparing, line the two groups up side by side and look at the extra part.',
    'Count what is left, and write the number sentence to match.'
  ],
  example: { prompt: 'Ana has 8 stickers. Ben has 5. How many more does Ana have?',
    work: ['Nothing is being taken away, so this is comparing.', 'Draw 8 and draw 5 lined up underneath.', 'Ana has extra ones sticking out past Ben\'s row.', 'Count the extras: 3.', 'Number sentence: 8 minus 5 equals 3.'],
    answer: '3 more stickers' },
  traps: [
    'Adding because the problem has two numbers in it.',
    'Thinking subtraction always means something disappeared. Comparing is subtraction too.',
    'Writing the numbers backwards: 5 minus 8 instead of 8 minus 5. Start with the bigger amount.',
    'Skipping the drawing. Drawing is what shows you which kind it is.'
  ],
  check: [
    { q: 'Which words often signal comparing?', a: '"How many more" or "how many fewer."' },
    { q: 'You have 10 and 4 are eaten. Add or subtract?', a: 'Subtract. 10 minus 4 equals 6.' },
    { q: 'What is the answer to a subtraction called?', a: 'The difference.' }
  ],
  links: [
    { t: 'Math Learning Center apps', u: 'https://apps.mathlearningcenter.org/', d: 'Number racks and frames for modeling subtraction.' },
    { t: 'Khan Academy: Early math', u: 'https://www.khanacademy.org/math/early-math', d: 'Subtraction videos and practice.' }
  ],
  note: 'strategy'
},
{
  id: 'm-skip-counting', subject: 'math', unit: 'Counting and early number', grades: ['1', '2', '3'],
  title: 'Skip counting by 2s, 5s, and 10s',
  alt: 'skip counting twos fives tens patterns even odd counting groups',
  stuck: ['I lose my place when I count by 5s', 'What is skip counting even for?'],
  teks: ['1.5.B', '1.4.C', '2.7.A', '3.4.C'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath', 'Math Raiders'],
  plain: 'Skip counting means counting by groups instead of by ones. It is faster, and it is the ramp that takes you straight into multiplication.',
  why: 'Counting coins, telling time, and every multiplication fact you will ever learn sits on top of skip counting.',
  words: [
    { w: 'skip count', d: 'Count by a number bigger than one: 5, 10, 15, 20.' },
    { w: 'pattern', d: 'Something that repeats in a way you can predict.' },
    { w: 'even', d: 'A number you can split into two equal groups. Ends in 0, 2, 4, 6, or 8.' }
  ],
  visual: [
    { type: 'numberline', min: 0, max: 50, title: 'Counting by 5s',
      ticks: [{ v: 0, l: '0' }, { v: 10, l: '10' }, { v: 20, l: '20' }, { v: 30, l: '30' }, { v: 40, l: '40' }, { v: 50, l: '50' }],
      jumps: [{ from: 0, to: 5, l: '+5' }, { from: 5, to: 10, l: '+5' }, { from: 10, to: 15, l: '+5' }],
      caption: 'Each hop is the same size. That is what makes it a pattern.' },
    { type: 'table', title: 'The patterns to notice', head: ['Count by', 'Numbers', 'The pattern'],
      rows: [['2s', '2, 4, 6, 8, 10, 12…', 'always ends in 0, 2, 4, 6, or 8'],
             ['5s', '5, 10, 15, 20, 25…', 'always ends in 5 or 0'],
             ['10s', '10, 20, 30, 40…', 'always ends in 0']] }
  ],
  steps: [
    'Say the numbers out loud. Your ears catch the pattern before your eyes do.',
    'Look at the last digit each time. That is where the pattern lives.',
    'Use your fingers to keep track of how many hops you have made.',
    'If you lose your place, go back to the last number you are sure about.',
    'Practice starting from somewhere other than zero: 35, 40, 45.',
    'Connect it to real things: nickels are 5s, dimes are 10s, pairs of shoes are 2s.'
  ],
  example: { prompt: 'Count by 5s to find how much 7 nickels are worth.',
    work: ['One hop for each nickel.', '5, 10, 15, 20, 25, 30, 35.', 'That is 7 hops.'],
    answer: '35 cents' },
  traps: [
    'Counting the hops instead of saying the numbers. Say the numbers out loud.',
    'Losing track of how many hops you made. Use your fingers.',
    'Only ever starting from zero. Practice starting in the middle.',
    'Not noticing the last-digit pattern, which is the whole shortcut.'
  ],
  check: [
    { q: 'What comes after 25 when counting by 5s?', a: '30.' },
    { q: 'What do all the numbers you say when counting by 10s end in?', a: 'Zero.' },
    { q: 'Count by 2s from 14. Say the next three.', a: '16, 18, 20.' }
  ],
  links: [
    { t: 'Math is Fun: Using the Number Line', u: 'https://www.mathsisfun.com/numbers/number-line-using.html', d: 'Hop along a number line.' },
    { t: 'Math is Fun: Multiplication tables', u: 'https://www.mathsisfun.com/tables.html', d: 'Where skip counting is heading.' }
  ],
  note: 'strategy'
},
{
  id: 'm-halves-fourths', subject: 'math', unit: 'Fractions', grades: ['1', '2', '3'],
  title: 'Halves, fourths, and fair shares',
  alt: 'halves fourths equal parts fair shares partition eighths',
  stuck: ['Are these halves if one piece is bigger?', 'What does "fair share" mean?'],
  teks: ['1.6.G', '1.6.H', '2.3.A', '2.3.B', '2.3.D'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'Halves means two EQUAL parts. Fourths means four EQUAL parts. If the pieces are not the same size, they are not halves or fourths at all, no matter how many there are.',
  why: 'The whole fraction system rests on the word "equal." Getting that idea now prevents a lot of trouble in grades 3 to 5.',
  words: [
    { w: 'equal parts', d: 'Parts that are exactly the same size.' },
    { w: 'fair share', d: 'Everybody gets the same amount.' },
    { w: 'partition', d: 'To split something into parts.' }
  ],
  visual: [
    { type: 'fractionbar', bars: [
      { parts: 2, shaded: 1, label: '1 half', sub: '2 equal parts' },
      { parts: 4, shaded: 1, label: '1 fourth', sub: '4 equal parts' },
      { parts: 8, shaded: 1, label: '1 eighth', sub: '8 equal parts' }
    ], caption: 'More parts means each part is SMALLER. An eighth is smaller than a half.' },
    { type: 'decide', question: 'Is this cut into halves?', branches: [
      { if: 'There are 2 parts and they are the same size', then: 'Yes. Those are halves.' },
      { if: 'There are 2 parts but one is bigger', then: 'No. Two parts is not enough. They must be EQUAL.' },
      { if: 'There are 4 equal parts', then: 'Those are fourths, not halves.' }
    ] }
  ],
  steps: [
    'Count the parts.',
    'Now check that the parts are the SAME SIZE. This is the step people skip.',
    'Two equal parts are called halves.',
    'Four equal parts are called fourths (or quarters).',
    'Eight equal parts are called eighths.',
    'Remember: the more parts you cut, the smaller each part gets.'
  ],
  example: { prompt: 'A sandwich is cut into 4 pieces, but one piece is much bigger than the others. Are these fourths?',
    work: ['Count the parts: 4.', 'Are they equal? No, one is bigger.', 'Fourths must be equal.'],
    answer: 'No. Four parts, but not fourths, because the parts are not equal.' },
  traps: [
    'Counting the parts and forgetting to check they are equal.',
    'Thinking more parts means more to eat. More parts means each piece is smaller.',
    'Believing halves have to be cut the same direction. A circle can be split top-to-bottom or side-to-side and both give halves.',
    'Calling four equal parts "halves" because it was cut in half twice.'
  ],
  check: [
    { q: 'What makes two parts halves?', a: 'They must be exactly the same size.' },
    { q: 'Which is bigger, one half or one fourth?', a: 'One half. Fewer parts means bigger pieces.' },
    { q: 'A cookie is split into 8 equal parts. What is one part called?', a: 'One eighth.' }
  ],
  links: [
    { t: 'Math is Fun: Fractions', u: 'https://www.mathsisfun.com/fractions.html', d: 'Equal parts with pictures.' },
    { t: 'Math Learning Center apps', u: 'https://apps.mathlearningcenter.org/', d: 'Cut shapes into equal parts yourself.' }
  ],
  note: 'frayer'
},
{
  id: 'm-measure-length', subject: 'math', unit: 'Geometry and measurement', grades: ['1', '2'],
  title: 'Measuring how long something is',
  alt: 'measure length ruler units inches centimeters start at zero unit size',
  stuck: ['Do I start at the end of the ruler or at the 1?', 'I got a different answer than my partner'],
  teks: ['1.7.A', '1.7.B', '1.7.D', '2.9.A', '2.9.B', '2.9.D'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'Measuring means finding out how many same-size units fit along something, with no gaps and no overlaps. The units must all be the same size, and you must start at zero.',
  why: 'Almost every wrong measurement comes from starting in the wrong place or using units that are not the same size.',
  words: [
    { w: 'unit', d: 'The thing you measure with: an inch, a centimeter, a paper clip.' },
    { w: 'length', d: 'How long something is.' },
    { w: 'gap', d: 'A space you left between units by accident.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Line up the START of the object with ZERO on the ruler, not with the edge and not with the 1.',
      'Keep the ruler straight along the object.',
      'Read the number where the object ENDS.',
      'Say the number AND the unit: "6 inches," not just "6."',
      'If you are using objects instead of a ruler, line them up with no gaps and no overlaps.'
    ] },
    { type: 'table', title: 'Bigger unit, smaller number', head: ['Measuring the same desk with…', 'You get'],
      rows: [['paper clips (small unit)', 'a big number, like 40'],
             ['your hand (medium unit)', 'a middle number, like 8'],
             ['your arm (big unit)', 'a small number, like 2']],
      note: 'The desk never changed. Bigger units means you need fewer of them.' }
  ],
  steps: [
    'Pick your unit and use the SAME one the whole time.',
    'Line the start of the object up with zero.',
    'Keep everything straight and touching.',
    'Read where the object ends.',
    'Write the number with the unit next to it.',
    'If your answer looks strange, check whether you started at zero.'
  ],
  example: { prompt: 'You measure a pencil. It starts at 0 and ends at 7 on the centimeter ruler.',
    work: ['The start is lined up with zero. Good.', 'The end is at 7.', 'The unit is centimeters.'],
    answer: '7 centimeters' },
  traps: [
    'Starting at the 1 instead of the 0. That makes everything one unit too short.',
    'Starting at the very edge of the ruler when the zero is a little way in.',
    'Leaving gaps between your units when measuring with objects.',
    'Mixing unit sizes, like using two big paper clips and three small ones.',
    'Saying just the number. Always say the unit too.'
  ],
  check: [
    { q: 'Where should the start of the object line up?', a: 'With the zero on the ruler.' },
    { q: 'You measure with small units and get a big number. Why?', a: 'Smaller units means you need more of them.' },
    { q: 'What is wrong with the answer "8"?', a: 'It is missing the unit. Eight what?' }
  ],
  links: [
    { t: 'Math is Fun: Measurement', u: 'https://www.mathsisfun.com/measure/index.html', d: 'Units and how to measure.' },
    { t: 'Toy Theater manipulatives', u: 'https://toytheater.com/category/teacher-tools/virtual-manipulatives/', d: 'Practice with a virtual ruler.' }
  ],
  note: 'steps'
},
{
  id: 'm-picture-graphs-early', subject: 'math', unit: 'Data', grades: ['K', '1', '2'],
  title: 'Sorting things and making a picture graph',
  alt: 'sort categories picture graph bar type graph data collect organize',
  stuck: ['How do I make a graph?', 'What does the graph tell me?'],
  teks: ['K.8.A', 'K.8.B', 'K.8.C', '1.8.A', '1.8.B', '1.8.C', '2.10.A'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'A graph is a way of turning a messy pile into a picture you can read. First you sort into groups, then you make one mark for each thing, then you look at which column is tallest.',
  why: 'Every data question from here to grade 8 is built on the same three moves: sort, show, then read.',
  words: [
    { w: 'sort', d: 'Put things into groups that belong together.' },
    { w: 'category', d: 'One of the groups.' },
    { w: 'graph', d: 'A picture that shows how many are in each group.' }
  ],
  visual: [
    { type: 'bargraph', title: 'Favorite fruit in our class', max: 8, step: 2, yLabel: 'How many', xLabel: 'Fruit',
      bars: [{ l: 'Apple', v: 6 }, { l: 'Banana', v: 3 }, { l: 'Grapes', v: 8 }, { l: 'Pear', v: 2 }],
      caption: 'The tallest bar has the most. The shortest has the fewest.' },
    { type: 'flow', steps: [
      'Decide your groups first. Two or three is plenty.',
      'Sort everything into those groups.',
      'Count each group.',
      'Draw one picture or one square for each thing, stacked in a column.',
      'Label each column so a reader knows what it is.',
      'Now read it: which column is tallest? Which is shortest? How many more?'
    ] }
  ],
  steps: [
    'Choose your categories before you start counting.',
    'Sort every item into exactly one category.',
    'Count how many are in each one.',
    'Draw one mark for each item, lined up in a column.',
    'Write a label under each column and a title on top.',
    'Read the graph: most, fewest, and how many more one has than another.'
  ],
  example: { prompt: 'Using the graph above, how many more people chose grapes than bananas?',
    work: ['Grapes: 8.', 'Bananas: 3.', '"How many more" means subtract.', '8 minus 3 is 5.'],
    answer: '5 more people' },
  traps: [
    'Drawing pictures in different sizes so the columns look wrong.',
    'Leaving gaps in a column so it looks taller than it is.',
    'Forgetting the labels, so nobody can tell what the graph is about.',
    'Putting one thing into two categories.'
  ],
  check: [
    { q: 'What do you do before you make the graph?', a: 'Sort everything into groups and count them.' },
    { q: 'What does the tallest column mean?', a: 'That category has the most.' },
    { q: 'Why does every picture in a graph have to be the same size?', a: 'So the columns can be fairly compared.' }
  ],
  links: [
    { t: 'Math is Fun: Pictographs', u: 'https://www.mathsisfun.com/data/pictographs.html', d: 'Picture graphs explained.' },
    { t: 'Math is Fun: Bar Graphs', u: 'https://www.mathsisfun.com/data/bar-graphs.html', d: 'Making and reading bar graphs.' }
  ],
  note: 'steps'
},
{
  id: 'm-even-odd', subject: 'math', unit: 'Counting and early number', grades: ['2', '3'],
  title: 'Even and odd numbers',
  alt: 'even odd numbers pairs partners leftover last digit',
  stuck: ['How do I tell if a number is even?', 'Is 0 even or odd?'],
  teks: ['2.7.A', '3.4.C'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'A number is even if everything can pair up with a partner and nobody is left over. It is odd if one is left standing alone. You only ever have to look at the last digit.',
  why: 'Even and odd is the first time you meet the idea of splitting a number into equal groups, which becomes division later.',
  words: [
    { w: 'even', d: 'Everything pairs up. No leftovers.' },
    { w: 'odd', d: 'One is left over with no partner.' },
    { w: 'pair', d: 'A group of two.' }
  ],
  visual: [
    { type: 'tenframe', filled: 8, frames: 1, label: '8 is EVEN: 4 full pairs, nobody left over',
      title: 'Pair them up and see who is left' },
    { type: 'table', title: 'Only the last digit matters', head: ['If the number ends in…', 'It is'],
      rows: [['0, 2, 4, 6, or 8', 'EVEN'], ['1, 3, 5, 7, or 9', 'ODD']],
      note: 'It does not matter how long the number is. 1,346 ends in 6, so it is even.' }
  ],
  steps: [
    'To understand it, draw that many dots and circle them in pairs.',
    'If every dot has a partner, the number is even.',
    'If one dot is left with no partner, the number is odd.',
    'To do it fast, ignore the whole number except the last digit.',
    'Last digit 0, 2, 4, 6, or 8 means even. Anything else means odd.',
    'Zero is even, because zero leftovers is still no leftovers.'
  ],
  example: { prompt: 'Is 47 even or odd?',
    work: ['Look only at the last digit: 7.', '7 is not 0, 2, 4, 6, or 8.', 'So 47 is odd.'],
    answer: 'Odd' },
  traps: [
    'Trying to pair up all 47 dots. Just look at the last digit.',
    'Thinking a big number must be even. Size has nothing to do with it.',
    'Thinking zero is odd. It is even.',
    'Looking at the first digit instead of the last.'
  ],
  check: [
    { q: 'Is 130 even or odd?', a: 'Even. It ends in 0.' },
    { q: 'Is 1,005 even or odd?', a: 'Odd. It ends in 5.' },
    { q: 'What does "odd" mean when you pair things up?', a: 'One is left over with no partner.' }
  ],
  links: [
    { t: 'Math Learning Center apps', u: 'https://apps.mathlearningcenter.org/', d: 'Pair up counters and see for yourself.' },
    { t: 'Khan Academy: Grade 2 math', u: 'https://www.khanacademy.org/math/cc-2nd-grade-math', d: 'Even and odd practice.' }
  ],
  note: 'frayer'
},
{
  id: 'm-number-line-early', subject: 'math', unit: 'Counting and early number', grades: ['2', '3'],
  title: 'Finding a number on a number line',
  alt: 'open number line locate point tick marks between numbers estimate position',
  stuck: ['There are no numbers on most of the ticks', 'Where does 640 go?'],
  teks: ['2.2.E', '2.2.F', '2.9.C', '3.2.D'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'A number line is a ruler for numbers. Before you can place anything on it, you have to work out what one jump between the marks is worth.',
  why: 'Number lines show up in rounding, fractions, and negative numbers. Learning to read the scale now saves you three times later.',
  words: [
    { w: 'number line', d: 'A line with numbers spaced evenly along it.' },
    { w: 'tick mark', d: 'One of the little lines showing a spot.' },
    { w: 'interval', d: 'How much one jump between marks is worth.' }
  ],
  visual: [
    { type: 'numberline', min: 600, max: 700, title: 'Where does 640 go?',
      ticks: [{ v: 600, l: '600' }, { v: 620, l: '', big: false }, { v: 640, l: '', big: false }, { v: 660, l: '', big: false }, { v: 680, l: '', big: false }, { v: 700, l: '700' }],
      points: [{ v: 640, l: '640' }],
      caption: 'Five equal jumps from 600 to 700, so each jump is 20. Count two jumps to reach 640.' },
    { type: 'flow', steps: [
      'Find two marks that DO have numbers on them.',
      'Count how many jumps there are between them.',
      'Subtract the two numbers, then divide by the number of jumps. That is what one jump is worth.',
      'Start at a labeled number and count jumps toward your target.',
      'Mark the spot and label it.',
      'Check: is your number between the right two labeled numbers?'
    ] }
  ],
  steps: [
    'Look for the marks that already have numbers.',
    'Count the jumps between them.',
    'Work out the value of one jump.',
    'Start at a labeled number, not at the end of the line.',
    'Count jumps until you reach your number.',
    'Check your answer sits between the two labels it should.'
  ],
  example: { prompt: 'A number line goes from 0 to 50 with 5 equal jumps. Where is 30?',
    work: ['From 0 to 50 is 50.', 'There are 5 jumps.', '50 divided by 5 is 10, so each jump is 10.', 'Start at 0 and count: 10, 20, 30. That is three jumps.'],
    answer: 'Three jumps from 0.' },
  traps: [
    'Assuming every jump is worth 1. Check the labels first.',
    'Counting tick marks instead of jumps. Five marks make four jumps.',
    'Starting at the far left edge instead of at a labeled number.',
    'Placing the number without checking which two labels it falls between.'
  ],
  check: [
    { q: 'A line runs 0 to 100 with 10 equal jumps. What is one jump worth?', a: '10.' },
    { q: 'What is the first thing to work out on any number line?', a: 'What one jump between the marks is worth.' },
    { q: 'Should 75 sit closer to 50 or to 100?', a: 'Closer to 100.' }
  ],
  links: [
    { t: 'Math is Fun: Using the Number Line', u: 'https://www.mathsisfun.com/numbers/number-line-using.html', d: 'An interactive number line.' },
    { t: 'Math Learning Center apps', u: 'https://apps.mathlearningcenter.org/', d: 'Build your own number line.' }
  ],
  note: 'steps'
}

]);

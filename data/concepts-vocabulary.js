/* ============================================================
   VOCABULARY: Grades 2 through 8
   The ELAR vocabulary strand is (3) in grades K-5 and (2) in
   grades 6-8.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

{
  id: 'v-context-clues', subject: 'vocabulary', unit: 'Figuring out new words', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'Using context clues',
  alt: 'context clues unknown word meaning from sentence definition example contrast',
  stuck: ['There is a word I do not know and no dictionary', 'I guessed and got it wrong'],
  teks: ['3.3.B', '4.3.B', '5.3.B', '6.2.B', '7.2.B', '8.2.B'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'The words around an unknown word usually tell you what it means. Authors leave clues on purpose: definitions, examples, contrasts, and general sense. And there are only a few kinds to look for.',
  why: 'You will meet far more new words than you can look up. Context clues are how you keep reading without stopping.',
  words: [
    { w: 'context', d: 'The words and sentences around the unknown word.' },
    { w: 'synonym clue', d: 'A word nearby that means the same thing.' },
    { w: 'antonym clue', d: 'A contrast that tells you what it does NOT mean.' }
  ],
  visual: [
    { type: 'table', title: 'The five kinds of context clue', head: ['Clue type', 'Signal', 'Example'],
      rows: [['Definition', 'is, means, or, which is', 'A ravine, which is a deep narrow valley, cut through the field.'],
             ['Synonym', 'a nearby word meaning the same', 'She was elated, so happy she could not sit still.'],
             ['Antonym / contrast', 'but, unlike, however, instead', 'Unlike his gregarious sister, Sam avoided crowds.'],
             ['Example', 'such as, for instance, including', 'Crustaceans such as crabs and shrimp have hard shells.'],
             ['General sense', 'the whole situation', 'After three days without rain the soil was parched and cracked.']] },
    { type: 'flow', steps: [
      'Reread the sentence with the unknown word.',
      'Read the sentence BEFORE and the sentence AFTER too. Clues are often not in the same sentence.',
      'Look for the five clue types: definition, synonym, contrast, example, or general sense.',
      'Make a guess and substitute it into the sentence.',
      'Does the sentence still make sense? If yes, keep reading. If not, guess again.',
      'If the word matters and you still cannot get it, then look it up.'
    ] }
  ],
  steps: [
    'Do not stop at the word. Finish the sentence first.',
    'Read the sentence before and the sentence after as well.',
    'Hunt for a signal word: or, which is, but, unlike, such as.',
    'Decide what kind of clue it is.',
    'Predict a meaning and swap your prediction into the sentence.',
    'Test it. If the sentence works, you have it close enough to keep reading.'
  ],
  example: { prompt: 'What does "meticulous" mean here? "Unlike her careless brother, Dana was meticulous, checking every measurement twice."',
    work: ['Signal word: "unlike" → contrast clue.', 'It contrasts with "careless."', 'The opposite of careless is careful.', 'Extra support: "checking every measurement twice."', 'Substitute: "Dana was extremely careful."'],
    answer: 'Meticulous means extremely careful and precise about details.' },
  traps: [
    'Looking only at the sentence with the word in it. Clues often sit in the next sentence.',
    'Guessing from what the word looks like. "Meticulous" does not relate to "metal."',
    'Ignoring contrast signals. "But" and "unlike" flip the meaning.',
    'Skipping the substitution test, which is what catches a wrong guess.'
  ],
  check: [
    { q: 'Which clue type does "unlike" signal?', a: 'Contrast. The word means roughly the opposite of what follows.' },
    { q: '"He was ravenous, so hungry he ate two lunches." What kind of clue is that?', a: 'A synonym or definition clue: "so hungry" restates it.' },
    { q: 'How do you test your guess?', a: 'Substitute it into the sentence and check the sentence still makes sense.' }
  ],
  links: [
    { t: 'Reading Rockets: Vocabulary', u: 'https://www.readingrockets.org/topics/vocabulary', d: 'Context clues and other word-learning strategies.' },
    { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/', d: 'For when the context is not enough.' }
  ],
  note: 'strategy'
},
{
  id: 'v-prefixes-suffixes', subject: 'vocabulary', unit: 'Word parts', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Prefixes and suffixes',
  alt: 'prefix suffix affix word parts un re dis pre tion able ness',
  stuck: ['What does "in-" mean in this word?', 'How does the ending change the word?'],
  teks: ['3.3.C', '4.3.C', '5.3.C', '6.2.A', '7.2.A', '8.2.A'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'A prefix goes on the front and changes the MEANING. A suffix goes on the end and usually changes the word\'s JOB: turning a verb into a noun, or a noun into an adjective. Learning about twenty of each unlocks thousands of words.',
  why: 'Membean and VocabLoco are built around word parts, because knowing one prefix gives you a piece of every word that uses it.',
  words: [
    { w: 'affix', d: 'A word part added to a base word. Prefixes and suffixes are both affixes.' },
    { w: 'base word', d: 'The word an affix is attached to.' }
  ],
  visual: [
    { type: 'wordparts', parts: [{ p: 'un', k: 'prefix', m: 'not' }, { p: 'predict', k: 'base', m: 'to say ahead' }, { p: 'able', k: 'suffix', m: 'can be' }],
      word: 'unpredictable', meaning: 'cannot be said ahead of time' },
    { type: 'table', title: 'High-value prefixes and suffixes', head: ['Prefix', 'Means', 'Suffix', 'Turns it into'],
      rows: [['un-, in-, im-, dis-, non-', 'not', '-tion, -sion, -ment, -ness', 'a noun'],
             ['re-', 'again, back', '-able, -ible', 'an adjective (can be)'],
             ['pre-', 'before', '-ful', 'an adjective (full of)'],
             ['sub-', 'under', '-less', 'an adjective (without)'],
             ['trans-', 'across', '-ly', 'an adverb (how)'],
             ['inter-', 'between', '-er, -or, -ist', 'a person who does it'],
             ['mis-', 'wrongly', '-ize, -ify', 'a verb (to make)']] }
  ],
  steps: [
    'Cover the front of the word and see whether a known prefix is hiding there.',
    'Cover the end and look for a known suffix.',
    'What is left is the base word. Do you know it?',
    'Put the meanings together: prefix meaning + base meaning.',
    'Use the suffix to decide the word\'s job in the sentence.',
    'Check your meaning against the sentence it appeared in.'
  ],
  example: { prompt: 'What does "irreplaceable" mean?',
    work: ['Prefix: ir- means not (it is a form of in-).', 'Base: replace.', 'Suffix: -able means can be.', 'Put together: not able to be replaced.'],
    answer: 'Cannot be replaced.' },
  traps: [
    'Seeing a prefix that is not there. The "in" in "invite" is not the prefix meaning "not."',
    'Forgetting that some prefixes change spelling: in- becomes im- before p, b, and m (impossible), and ir- before r.',
    'Ignoring the suffix, which tells you how the word functions in the sentence.',
    'Trusting the parts over the sentence. Always sanity-check against the context.'
  ],
  check: [
    { q: 'What does "pre-" mean?', a: 'Before.' },
    { q: 'What job does "-ness" do?', a: 'It turns a word into a noun: kind → kindness.' },
    { q: 'What does "misinterpret" mean?', a: 'To interpret wrongly.' }
  ],
  links: [
    { t: 'Reading Rockets: Root words, suffixes and prefixes', u: 'https://www.readingrockets.org/topics/spelling-and-word-study/articles/root-words-suffixes-and-prefixes', d: 'Reference lists and how to teach them.' },
    { t: 'PrefixSuffix.com: root chart', u: 'https://www.prefixsuffix.com/rootchart.php', d: 'A searchable chart of affixes and roots.' }
  ],
  note: 'word'
},
{
  id: 'v-greek-latin-roots', subject: 'vocabulary', unit: 'Word parts', grades: ['5', '6', '7', '8'],
  title: 'Greek and Latin roots',
  alt: 'greek latin roots word origins etymology academic vocabulary scrib port dict',
  stuck: ['Academic words all look the same to me', 'Membean keeps showing me word roots'],
  teks: ['5.3.C', '6.2.C', '7.2.C', '8.2.C'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'Most academic English is built from Greek and Latin roots. A root carries the core meaning. Once you know that "scrib/script" means write, you have a foothold in describe, prescription, manuscript, inscription, and scribble.',
  why: 'The grade 6-8 TEKS name Greek and Latin roots specifically, and this is exactly what Membean is training.',
  words: [
    { w: 'root', d: 'The core meaning part of a word, usually from Greek or Latin.' },
    { w: 'etymology', d: 'The history of where a word came from.' }
  ],
  visual: [
    { type: 'table', title: 'Roots that appear constantly', head: ['Root', 'Means', 'Words'],
      rows: [['scrib / script', 'write', 'describe, prescription, manuscript'],
             ['port', 'carry', 'transport, portable, export, import'],
             ['dict', 'say, speak', 'predict, dictate, contradict, verdict'],
             ['spect / spec', 'look', 'inspect, spectator, perspective'],
             ['struct', 'build', 'construct, structure, destruction'],
             ['ject', 'throw', 'project, reject, inject, eject'],
             ['bene', 'good', 'benefit, benevolent, beneficial'],
             ['man / manu', 'hand', 'manual, manufacture, manuscript'],
             ['vac', 'empty', 'vacant, vacuum, evacuate'],
             ['mit / miss', 'send', 'transmit, mission, dismiss, submit']],
      note: 'The TEKS name several of these directly for grades 6-8.' },
    { type: 'wordparts', parts: [{ p: 'trans', k: 'prefix', m: 'across' }, { p: 'port', k: 'root', m: 'carry' }, { p: 'able', k: 'suffix', m: 'can be' }],
      word: 'transportable', meaning: 'able to be carried across' }
  ],
  steps: [
    'Break the word into prefix, root, and suffix.',
    'Identify the root. It is usually in the middle and carries the core meaning.',
    'Recall or look up what the root means.',
    'Combine the meanings of the parts.',
    'Test the meaning against the sentence.',
    'When you learn a new root, immediately list three other words that use it. That is what makes it stick.'
  ],
  example: { prompt: 'You do not know "retrospective." Use the root.',
    work: ['Prefix: retro- means backward.', 'Root: spect means look.', 'Suffix: -ive makes it an adjective.', 'Put together: looking backward.'],
    answer: 'Looking back at something in the past.' },
  traps: [
    'Learning a root without collecting words that use it. One word is not worth the effort; ten words is.',
    'Forcing a root that is not there. Not every word with "port" in it means carry: "portion" does not.',
    'Ignoring the sentence. The root gives you a direction, not a precise definition.',
    'Trying to memorize a hundred roots at once. Learn five a week and use them.'
  ],
  check: [
    { q: 'What does "dict" mean, and name two words?', a: 'To say or speak. Predict, dictate, contradict.' },
    { q: '"Manuscript": break it apart.', a: 'manu (hand) + script (write) = something written by hand.' },
    { q: 'What should you do right after learning a new root?', a: 'List three more words that use it.' }
  ],
  links: [
    { t: 'Membean: word roots', u: 'https://membean.com/rootcasts', d: 'Short explanations of common roots.' },
    { t: 'Online Etymology Dictionary', u: 'https://www.etymonline.com/', d: 'Where any word came from. Best for grades 6-8.' },
    { t: 'LearnThat: root words', u: 'https://www.learnthat.org/pages/view/roots.html', d: 'A large searchable root list.' }
  ],
  note: 'word'
},
{
  id: 'v-multiple-meaning', subject: 'vocabulary', unit: 'Word meaning', grades: ['2', '3', '4', '5', '6'],
  title: 'Multiple-meaning words',
  alt: 'multiple meaning words homographs same word different meanings context',
  stuck: ['I know that word but it does not make sense here', 'The dictionary has six definitions'],
  teks: ['3.3.B', '4.3.B', '5.3.B', '6.2.B'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'Many common words have several meanings. When a familiar word suddenly does not fit, that is your signal that it is being used in a different sense: not that you misread it.',
  why: 'Test questions deliberately use the less common meaning of a familiar word, because that is where careful readers separate themselves.',
  words: [
    { w: 'multiple-meaning word', d: 'A word with more than one definition.' },
    { w: 'homograph', d: 'Words spelled the same with different meanings, sometimes different pronunciations.' }
  ],
  visual: [
    { type: 'table', title: 'Same word, different meanings', head: ['Word', 'Meaning 1', 'Meaning 2', 'Meaning 3'],
      rows: [['bank', 'where money is kept', 'the edge of a river', 'to tilt an aircraft'],
             ['current', 'happening now', 'a flow of water or electricity', '—'],
             ['scale', 'to climb', 'a weighing device', 'fish skin / a ratio on a map'],
             ['present', 'a gift', 'here, not absent', 'to show or give formally'],
             ['trunk', 'part of a tree', 'an elephant\'s nose', 'storage in a car']] },
    { type: 'flow', steps: [
      'Notice the moment the sentence stops making sense with the meaning you know.',
      'That is the signal, not an error.',
      'Look at the words around it. What kind of thing is being discussed?',
      'Ask what job the word is doing: is it a noun, a verb, an adjective?',
      'Pick the meaning that fits both the topic and the job.',
      'Substitute it back in and check.'
    ] }
  ],
  steps: [
    'Treat "this word does not fit" as information, not confusion.',
    'Identify the topic of the passage. That narrows the possible meanings fast.',
    'Determine the word\'s part of speech in that sentence.',
    'Choose the definition that matches both.',
    'If you are using a dictionary, read all the definitions before choosing: do not take the first.',
    'Substitute your chosen meaning into the sentence to confirm.'
  ],
  example: { prompt: 'What does "current" mean in: "The swimmers were pulled sideways by a strong current"?',
    work: ['The meaning I know first is "happening now."', '"A strong happening now" does not work.', 'Topic: swimming in water.', 'Job: it is a noun, the thing doing the pulling.', 'Water meaning: a flow of water.'],
    answer: 'A flow of moving water.' },
  traps: [
    'Assuming you misread the word. Usually you read it correctly and it just has another meaning.',
    'Taking the first dictionary definition without reading the rest.',
    'Ignoring the part of speech, which usually eliminates half the options.',
    'Forcing the familiar meaning to work when the sentence is telling you it does not.'
  ],
  check: [
    { q: '"She had to scale the wall." What does scale mean?', a: 'To climb.' },
    { q: 'What is the first clue to which meaning applies?', a: 'The topic of the passage, plus the word\'s part of speech.' },
    { q: 'A familiar word does not fit. What does that tell you?', a: 'It is probably being used in a different sense.' }
  ],
  links: [
    { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/', d: 'Shows all the meanings in kid language.' },
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Explains how a word is really used.' }
  ],
  note: 'word'
},
{
  id: 'v-synonyms-antonyms', subject: 'vocabulary', unit: 'Word meaning', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'Synonyms, antonyms, and shades of meaning',
  alt: 'synonyms antonyms shades of meaning semantic gradient nuance thesaurus',
  stuck: ['I used a thesaurus and it sounded wrong', 'Are these two words really the same?'],
  teks: ['3.3.D', '4.3.D', '5.3.D', '6.2.B', '7.2.B', '8.2.B'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'Synonyms are close in meaning but almost never identical. "Warm," "hot," and "scorching" all describe heat, but you cannot swap them freely. The differences between them are called shades of meaning.',
  why: 'Thesaurus misuse is one of the most common causes of odd-sounding writing, and shades of meaning are directly tested in vocabulary questions.',
  words: [
    { w: 'synonym', d: 'A word with a similar meaning.' },
    { w: 'antonym', d: 'A word with the opposite meaning.' },
    { w: 'shade of meaning', d: 'The small difference in strength or feeling between similar words.' }
  ],
  visual: [
    { type: 'table', title: 'Shades of meaning, weakest to strongest', head: ['Idea', 'Weak', 'Medium', 'Strong'],
      rows: [['warm', 'mild', 'hot', 'scorching'],
             ['happy', 'content', 'glad', 'ecstatic'],
             ['big', 'large', 'huge', 'enormous'],
             ['upset', 'annoyed', 'angry', 'furious'],
             ['ask', 'ask', 'request', 'demand'],
             ['walk', 'stroll', 'walk', 'march']],
      note: 'A synonym that is too strong is as wrong as one that is too weak.' },
    { type: 'flow', steps: [
      'When you want a synonym, first ask WHY the original word is not working.',
      'Is it too vague? Too repeated? Too weak?',
      'Find candidates, then check what each one actually means and how strong it is.',
      'Substitute your candidate into the sentence and read it out loud.',
      'If it sounds odd, it is probably the wrong shade: pick a milder or stronger one.',
      'Never use a word you cannot define.'
    ] }
  ],
  steps: [
    'Identify what is wrong with the word you have.',
    'Generate a few synonyms.',
    'Look each one up to check its real meaning: not just that a thesaurus listed it.',
    'Consider strength: is it stronger or weaker than what you mean?',
    'Consider feeling: does it carry approval or disapproval?',
    'Substitute and read aloud. Trust your ear.'
  ],
  example: { prompt: 'You wrote "the crowd was happy." Which synonym fits a crowd at a winning game?',
    work: ['"Content" is too weak: content is quiet satisfaction.', '"Glad" is mild and personal.', '"Ecstatic" or "jubilant" match a celebrating crowd.', 'Check: jubilant means joyfully triumphant. That fits.'],
    answer: '"The crowd was jubilant": it matches both the strength and the situation.' },
  traps: [
    'Picking the longest word in the thesaurus list. Long does not mean better.',
    'Using a word you cannot define. Readers can tell.',
    'Ignoring the strength difference. "Furious" is not a synonym for mildly annoyed.',
    'Assuming a synonym works in every sentence. "Slim chance" works; "thin chance" does not.'
  ],
  check: [
    { q: 'Order weakest to strongest: furious, annoyed, angry.', a: 'annoyed, angry, furious.' },
    { q: 'What should you check before using a thesaurus word?', a: 'What it actually means, and whether the strength fits.' },
    { q: 'Are synonyms always interchangeable?', a: 'No. Shades of meaning and common usage both matter.' }
  ],
  links: [
    { t: 'Reading Rockets: Semantic Gradients', u: 'https://www.readingrockets.org/classroom/classroom-strategies/semantic-gradients', d: 'Ordering words by strength.' },
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Shows how words differ in real use.' }
  ],
  note: 'word'
},
{
  id: 'v-idioms', subject: 'vocabulary', unit: 'Word meaning', grades: ['3', '4', '5', '6'],
  title: 'Idioms and figurative expressions',
  alt: 'idiom figurative expression saying literal meaning break a leg',
  stuck: ['The sentence makes no literal sense', 'What does "hit the books" mean?'],
  teks: ['3.3.D', '4.3.D', '5.3.D', '6.2.B'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'An idiom is a phrase whose meaning you cannot work out from the individual words. "It is raining cats and dogs" has nothing to do with animals. You have to learn them as whole units.',
  why: 'Idioms are everywhere in reading passages, and they are especially difficult if English is not the language you speak at home.',
  words: [
    { w: 'idiom', d: 'A set phrase with a meaning different from its literal words.' },
    { w: 'literal', d: 'The actual, word-by-word meaning.' },
    { w: 'figurative', d: 'The real, non-literal meaning.' }
  ],
  visual: [
    { type: 'table', title: 'Common idioms', head: ['Idiom', 'Literal (wrong)', 'Actual meaning'],
      rows: [['hit the books', 'strike a book', 'study hard'],
             ['under the weather', 'beneath a cloud', 'feeling ill'],
             ['piece of cake', 'a slice of dessert', 'very easy'],
             ['break the ice', 'crack frozen water', 'start a conversation'],
             ['bite off more than you can chew', 'take a big bite', 'take on too much'],
             ['on the same page', 'reading the same page', 'in agreement'],
             ['cost an arm and a leg', 'body parts as payment', 'very expensive']] },
    { type: 'flow', steps: [
      'Notice that the literal meaning is impossible or absurd. That is the signal.',
      'Do not try to work it out word by word. That is what makes it an idiom.',
      'Look at what is happening in the passage. What would make sense here?',
      'Substitute your guess and check the sentence works.',
      'If you still cannot get it, look up the whole phrase, not the individual words.',
      'Write down every new idiom you meet. They come back.'
    ] }
  ],
  steps: [
    'Recognize the signal: the literal meaning makes no sense.',
    'Stop translating word by word.',
    'Use the surrounding situation to predict what the phrase must mean.',
    'Substitute your prediction into the sentence.',
    'If needed, search for the whole phrase.',
    'Keep a running list. Idioms are learned by collection, not by rule.'
  ],
  example: { prompt: 'What does this mean: "After failing the first quiz, Devon decided to hit the books"?',
    work: ['Literally striking books makes no sense.', 'Situation: he failed a quiz and is responding.', 'What would someone do after failing a quiz? Study.', 'Substitute: "Devon decided to study hard."'],
    answer: 'To study hard.' },
  traps: [
    'Trying to decode an idiom from its parts. That is the one thing that never works.',
    'Looking up individual words instead of the whole phrase.',
    'Assuming an idiom translates from another language. Most do not.',
    'Not writing them down. Idioms are memory items.'
  ],
  check: [
    { q: 'What does "a piece of cake" mean?', a: 'Something very easy.' },
    { q: 'How do you know a phrase is an idiom?', a: 'The literal meaning makes no sense in the sentence.' },
    { q: 'Should you look up the words or the phrase?', a: 'The whole phrase.' }
  ],
  links: [
    { t: 'Grammar Monster: Sayings and proverbs', u: 'https://www.grammar-monster.com/sayings_proverbs.htm', d: 'Common expressions explained.' },
    { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/', d: 'Look up phrases as well as words.' }
  ],
  note: 'word'
},
{
  id: 'v-dictionary-skills', subject: 'vocabulary', unit: 'Looking words up', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'Using a dictionary well',
  alt: 'dictionary entry guide words pronunciation part of speech syllabication reference',
  stuck: ['The dictionary definition uses words I do not know either', 'Which definition do I pick?'],
  teks: ['3.3.A', '4.3.A', '5.3.A', '6.2.A', '7.2.A', '8.2.A'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'A dictionary entry gives you more than a definition: it tells you how to say the word, how to break it into syllables, what part of speech it is, and all its different meanings. Most people use about a quarter of what is there.',
  why: 'Using print or digital resources to determine meaning, syllabication, and pronunciation is a named TEKS expectation from grade 3 through grade 8.',
  words: [
    { w: 'entry word', d: 'The word being defined, usually shown with syllable dots.' },
    { w: 'pronunciation key', d: 'The symbols showing how to say the word.' },
    { w: 'part of speech', d: 'The abbreviation n., v., adj., adv. telling you the word\'s job.' }
  ],
  visual: [
    { type: 'table', title: 'What is in an entry', head: ['Part', 'Looks like', 'Tells you'],
      rows: [['Entry word', 'me·tic·u·lous', 'the spelling and the syllable breaks'],
             ['Pronunciation', '(muh-TIK-yuh-luhs)', 'how to say it and where the stress goes'],
             ['Part of speech', 'adj.', 'what job it does in a sentence'],
             ['Definitions', '1. … 2. …', 'all the meanings, usually most common first'],
             ['Example sentence', '"a meticulous record"', 'how it is actually used'],
             ['Origin', '[from Latin metus, fear]', 'the root, which helps you remember it']] },
    { type: 'flow', steps: [
      'Find the word.',
      'Check the part of speech FIRST and match it to how the word was used in your sentence.',
      'Read ALL the definitions with that part of speech, not just the first.',
      'Pick the one that fits your sentence.',
      'Read the example sentence to see how it is really used.',
      'Say the word out loud using the pronunciation guide. You will remember it better.'
    ] }
  ],
  steps: [
    'Look the word up in a dictionary written for your level. A hard definition is not more accurate, just harder.',
    'Check the part of speech and match it to how the word appeared.',
    'Read all the definitions for that part of speech.',
    'Choose the one that fits your sentence and substitute it back in.',
    'Read the example sentence.',
    'Say the word out loud, using the syllable breaks and the stress mark.',
    'Write the meaning in YOUR words, not the dictionary\'s.'
  ],
  example: { prompt: 'You look up "novel" and the first definition is "a long fictional story." But your sentence says "a novel approach."',
    work: ['Check the part of speech. In your sentence "novel" describes "approach," so it is an adjective.', 'The first definition was the noun.', 'Scroll to the adjective entry: new and original.', 'Substitute: "a new and original approach." That works.'],
    answer: 'The adjective meaning: new and original.' },
  traps: [
    'Taking the first definition without checking the part of speech.',
    'Using an adult dictionary when a student dictionary would explain it more clearly.',
    'Copying the dictionary wording into your notes. Rewrite it in your own words or it will not stick.',
    'Skipping the example sentence, which is often the most useful part of the entry.'
  ],
  check: [
    { q: 'What should you check before choosing a definition?', a: 'The part of speech, matched to how the word was used.' },
    { q: 'What does "adj." mean?', a: 'Adjective: the word describes a noun.' },
    { q: 'Why read the example sentence?', a: 'It shows how the word is actually used, which a definition alone does not.' }
  ],
  links: [
    { t: 'Wordsmyth Kids Dictionary', u: 'https://kids.wordsmyth.net/we/', d: 'Definitions written for students.' },
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Plain-English explanations plus real usage.' },
    { t: 'Wordsmyth glossary mode', u: 'https://www.wordsmyth.net/?mode=glossary', d: 'Simplified definitions.' }
  ],
  note: 'steps'
},
{
  id: 'v-academic-vocabulary', subject: 'vocabulary', unit: 'Academic words', grades: ['4', '5', '6', '7', '8'],
  title: 'Academic vocabulary: the words that appear in every subject',
  alt: 'academic vocabulary tier two words analyze evaluate infer summarize command words',
  stuck: ['I understand the passage but not the question', 'What does "evaluate" want me to do?'],
  teks: ['4.3.C', '5.3.C', '6.2.C', '7.2.C', '8.2.C'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'Academic vocabulary is the set of words that show up in questions and instructions across every subject: analyze, evaluate, infer, justify, compare. Not knowing them costs you points even when you know the content.',
  why: 'You can understand a passage completely and still lose the question because you did not know what "evaluate" was asking you to do.',
  words: [
    { w: 'academic vocabulary', d: 'Words used across all subjects in questions and instructions.' },
    { w: 'command word', d: 'The verb in a question that tells you what to do.' }
  ],
  visual: [
    { type: 'table', title: 'Command words and what they actually require', head: ['Word', 'What you must do'],
      rows: [['identify / name', 'just state it: no explanation needed'],
             ['describe', 'say what it is like, with detail'],
             ['explain', 'say HOW or WHY, with reasons'],
             ['analyze', 'break it into parts and show how they work together'],
             ['compare', 'give both similarities AND differences'],
             ['contrast', 'differences only'],
             ['evaluate', 'judge how good or effective it is, and justify the judgment'],
             ['infer', 'draw a conclusion from clues, and cite the clues'],
             ['justify', 'give the reasons your answer is right'],
             ['summarize', 'the main points only, briefly, in your own words']],
      note: 'Underline the command word in every question before you answer.' },
    { type: 'flow', steps: [
      'Read the question and underline the command word.',
      'Say what that word requires. "Explain" requires reasons; "identify" does not.',
      'Check whether the question has more than one part.',
      'Answer every part.',
      'Reread the command word and check your answer actually does that.'
    ] }
  ],
  steps: [
    'Underline the command word in every question before you start writing.',
    'Name what it requires: a statement, a description, reasons, a judgment, or a comparison.',
    'Check for multiple parts. "Compare and explain" is two tasks.',
    'Write your answer to match the demand.',
    'Reread the command word and confirm you did what it asked.',
    'Keep a personal list of command words that have tripped you up.'
  ],
  example: { prompt: 'Question: "Evaluate the author\'s use of evidence." What are you being asked to do?',
    work: ['Command word: evaluate.', 'Evaluate means judge how good or effective something is.', 'So you need a judgment: was the evidence strong or weak?', 'And you need to justify it: why?'],
    answer: 'State whether the evidence was effective, and explain what makes it strong or weak.' },
  traps: [
    'Describing when the question said explain. Describing says what; explaining says why.',
    'Comparing only similarities. "Compare" needs both.',
    'Answering the first half of a two-part question and stopping.',
    'Giving a judgment with no justification when asked to evaluate.'
  ],
  check: [
    { q: 'What is the difference between describe and explain?', a: 'Describe says what something is like. Explain says how or why.' },
    { q: '"Compare": similarities, differences, or both?', a: 'Both.' },
    { q: 'What does "justify" require?', a: 'Reasons supporting your answer.' }
  ],
  links: [
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Look up any academic term.' },
    { t: 'Reading Rockets: Concept Sort', u: 'https://www.readingrockets.org/classroom/classroom-strategies/concept-sort', d: 'A way to organize academic terms by meaning.' }
  ],
  note: 'word'
},
{
  id: 'v-connotation', subject: 'vocabulary', unit: 'Word meaning', grades: ['6', '7', '8'],
  title: 'Connotation: the feeling a word carries',
  alt: 'connotation denotation positive negative neutral loaded language word choice',
  stuck: ['Why does the author use "cheap" instead of "affordable"?', 'What is loaded language?'],
  teks: ['6.2.B', '7.2.B', '8.2.B'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'Denotation is a word\'s dictionary meaning. Connotation is the feeling it carries. "Thrifty" and "stingy" mean roughly the same thing, but one is a compliment and one is an insult.',
  why: 'Authors choose loaded words deliberately, and noticing that is how you analyze tone and bias in grades 6 to 8.',
  words: [
    { w: 'denotation', d: 'The literal dictionary meaning.' },
    { w: 'connotation', d: 'The feeling or association a word carries.' },
    { w: 'loaded language', d: 'Words chosen for their emotional effect rather than their precision.' }
  ],
  visual: [
    { type: 'table', title: 'Same denotation, different connotation', head: ['Positive', 'Neutral', 'Negative'],
      rows: [['thrifty', 'careful with money', 'stingy'],
             ['confident', 'sure of oneself', 'arrogant'],
             ['determined', 'persistent', 'stubborn'],
             ['slender', 'thin', 'scrawny'],
             ['inexpensive', 'low-cost', 'cheap'],
             ['curious', 'interested', 'nosy'],
             ['youthful', 'young', 'childish']],
      note: 'Read across each row: the meaning barely changes, but how you feel about the person changes completely.' },
    { type: 'flow', steps: [
      'Notice a word that could have been said more neutrally.',
      'Ask what the neutral version would be.',
      'Ask whether the chosen word feels positive or negative.',
      'Ask what the author gains by that choice.',
      'That is your analysis: the author chose ___ instead of ___ in order to ___.'
    ] }
  ],
  steps: [
    'Read for the words that carry feeling, not just information.',
    'For each one, think of a neutral alternative.',
    'Decide whether the author\'s choice is positive, negative, or neutral.',
    'Ask what effect the choice has on how you see the subject.',
    'In your own writing, check whether your word choices match the tone you want.',
    'In persuasive text, loaded language is a signal that the author is trying to steer you.'
  ],
  example: { prompt: 'An article describes a politician as "relentless" in one paragraph and "obsessive" in another. What is happening?',
    work: ['Both mean not giving up.', '"Relentless" leans admiring: persistence toward a goal.', '"Obsessive" leans critical: unhealthy fixation.', 'The shift signals the author\'s attitude changing, or an attempt to shape yours.'],
    answer: 'The denotation is nearly identical but the connotation flips from admiring to critical, which reveals the author\'s attitude.' },
  traps: [
    'Treating synonyms as interchangeable when their connotations differ sharply.',
    'Missing loaded language in persuasive writing, which is exactly where it does the most work.',
    'Using a negatively loaded word in your own writing when you meant to be neutral.',
    'Confusing connotation with denotation. The dictionary gives you denotation; the feeling is connotation.'
  ],
  check: [
    { q: 'Which is more positive, "curious" or "nosy"?', a: 'Curious. They denote roughly the same thing but nosy is negative.' },
    { q: 'What is denotation?', a: 'The literal dictionary meaning of a word.' },
    { q: 'Why do persuasive writers use loaded language?', a: 'To steer how you feel about the subject, not just what you know about it.' }
  ],
  links: [
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Shows how words feel in real use, not just what they mean.' },
    { t: 'Grammar Monster: Emotive language', u: 'https://www.grammar-monster.com/glossary/emotive_language.htm', d: 'Loaded language and its effects.' }
  ],
  note: 'frayer'
},
{
  id: 'v-remembering-words', subject: 'vocabulary', unit: 'Making words stick', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Making a new word actually stick',
  alt: 'remember vocabulary spaced repetition membean word study review retention',
  stuck: ['I learn a word and forget it by next week', 'Membean keeps showing me the same words'],
  teks: ['4.3.C', '5.3.C', '6.2.C', '7.2.C', '8.2.C'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'You do not own a word when you can pick its definition out of four choices. You own it when you can use it in a sentence about your own life. Getting there takes a few short encounters spread over days, not one long session.',
  why: 'Membean is built on spaced repetition. It shows you a word right before you would forget it. Understanding that is why you stop being annoyed by repeats.',
  words: [
    { w: 'spaced repetition', d: 'Reviewing at increasing intervals, right before you would forget.' },
    { w: 'retrieval practice', d: 'Recalling from memory instead of rereading. Much stronger.' },
    { w: 'productive knowledge', d: 'Being able to USE a word, not just recognize it.' }
  ],
  visual: [
    { type: 'frayer', word: 'the new word', quads: ['Definition in my own words', 'Word parts and origin', 'My own sentence about my life', 'Words I might confuse it with'],
      values: ['not the dictionary wording', 'prefix / root / suffix', 'must be about YOU', 'the near-misses'],
      caption: 'A four-box word map beats a definition list, because each box forces different thinking.' },
    { type: 'flow', steps: [
      'Day 1: meet the word. Write your own definition and your own sentence.',
      'Day 2: cover your notes and try to recall the meaning from memory.',
      'Day 4: use the word in speech or writing once.',
      'Day 8: check yourself again cold.',
      'Day 15: check once more. By now it is yours.',
      'Increase the gaps. Testing yourself is what builds the memory, not rereading.'
    ] }
  ],
  steps: [
    'Write the definition in your own words. Copying the dictionary does almost nothing.',
    'Break the word into parts and note the root: meaning plus structure is stronger than meaning alone.',
    'Write a sentence about YOUR life, not a generic one.',
    'Note the words you might confuse it with.',
    'Review by covering your notes and recalling, not by rereading.',
    'Space the reviews out over days, and use the word out loud at least once.'
  ],
  example: { prompt: 'You just learned "tenacious."',
    work: ['My definition: refusing to let go of something, even when it is hard.', 'Parts: from Latin tenere, to hold. Related: tenant, tenure, retain.', 'My sentence: I was tenacious about finishing the level even after I died eleven times.', 'Confused with: stubborn, but tenacious is a compliment and stubborn usually is not.'],
    answer: 'Four boxes filled in, and a word you will still have next month.' },
  traps: [
    'Copying the dictionary definition. Your brain skips right over it.',
    'Writing a generic sentence that could apply to anyone. Make it about you.',
    'Cramming in one session. Spacing is what creates memory.',
    'Rereading your notes instead of testing yourself. Recall is what builds the memory.',
    'Being annoyed at Membean for repeating a word. The repeat is the entire mechanism.'
  ],
  check: [
    { q: 'Why is writing your own sentence better than copying an example?', a: 'Connecting a word to your own life creates a much stronger memory.' },
    { q: 'What is better than rereading your notes?', a: 'Covering them and recalling from memory.' },
    { q: 'Why does Membean show you the same word repeatedly?', a: 'Spaced repetition. It reappears right before you would forget it.' }
  ],
  links: [
    { t: 'Reading Rockets: Word Maps', u: 'https://www.readingrockets.org/classroom/classroom-strategies/word-maps', d: 'The four-box word map strategy.' },
    { t: 'Reading Rockets: Concept Word Games', u: 'https://www.readingrockets.org/classroom/classroom-strategies/concept-word-games', d: 'Ways to practice words actively.' },
    { t: 'Membean rootcasts', u: 'https://membean.com/rootcasts', d: 'Short root explanations to anchor new words.' }
  ],
  note: 'word'
},
{
  id: 'v-word-relationships', subject: 'vocabulary', unit: 'Word meaning', grades: ['5', '6', '7', '8'],
  title: 'Analogies and word relationships',
  alt: 'analogy word relationships part to whole category antonym pair analogy questions',
  stuck: ['I do not know how to read an analogy', 'How do I figure out the relationship?'],
  teks: ['5.3.D', '6.2.B', '7.2.B', '8.2.B'],
  apps: ['VocabLoco', 'Membean'],
  plain: 'An analogy asks you to find the same relationship between two different pairs of words. The trick is to say the relationship out loud as a full sentence before you look at the answer choices.',
  why: 'Analogy questions are really testing whether you know a word precisely enough to see how it relates to others.',
  words: [
    { w: 'analogy', d: 'A comparison showing that two pairs share the same relationship.' },
    { w: 'bridge sentence', d: 'A sentence stating exactly how the first two words relate.' }
  ],
  visual: [
    { type: 'table', title: 'Common analogy relationships', head: ['Relationship', 'Example'],
      rows: [['synonym', 'happy : joyful'], ['antonym', 'hot : cold'],
             ['part to whole', 'petal : flower'], ['category', 'oak : tree'],
             ['tool to user', 'brush : painter'], ['degree of intensity', 'warm : scorching'],
             ['cause to effect', 'rain : flood'], ['function', 'knife : cut']] },
    { type: 'flow', steps: [
      'Read the first pair.',
      'Say the relationship as a full sentence: "A petal is a PART of a flower."',
      'Make the sentence as specific as you can. Vague bridges let in wrong answers.',
      'Try each answer choice in the same sentence.',
      'Eliminate any that do not fit exactly.',
      'If two choices survive, make the bridge sentence more specific and try again.'
    ] }
  ],
  steps: [
    'Look only at the first pair to start.',
    'Build a bridge sentence stating the exact relationship.',
    'Make it specific: not "they are related" but "a petal is one part of a flower."',
    'Plug each answer pair into your bridge sentence.',
    'Eliminate the ones that do not fit.',
    'If more than one fits, tighten the bridge and repeat.',
    'Check the order: the second pair must follow the same direction as the first.'
  ],
  example: { prompt: 'Solve: chapter : book :: ___ : song. Choices: (a) singer (b) verse (c) music (d) radio',
    work: ['Bridge: "A chapter is one section of a book."', 'Test (a): a singer is not a section of a song. No.', 'Test (b): a verse IS one section of a song. Yes.', 'Test (c): music is not a section of a song. No.', 'Test (d): a radio is not a section of a song. No.'],
    answer: '(b) verse' },
  traps: [
    'Building a vague bridge like "they go together." Almost anything fits that.',
    'Ignoring the direction. "Chapter : book" is part-to-whole, so the answer must be part-to-whole too, not whole-to-part.',
    'Choosing a word that relates to the topic but not by the same relationship.',
    'Skipping the bridge sentence and going straight to the choices.'
  ],
  check: [
    { q: 'What relationship is "oak : tree"?', a: 'Category. An oak is a type of tree.' },
    { q: 'What should you build before looking at answer choices?', a: 'A specific bridge sentence stating the relationship.' },
    { q: 'Why does direction matter?', a: 'Part-to-whole and whole-to-part are different relationships.' }
  ],
  links: [
    { t: 'Grammar Monster: Analogy', u: 'https://www.grammar-monster.com/glossary/analogy.htm', d: 'What analogies are and how they work.' },
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Check the precise meaning of each option.' }
  ],
  note: 'strategy'
}

]);

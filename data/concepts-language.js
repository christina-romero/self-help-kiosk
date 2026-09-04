/* ============================================================
   LANGUAGE (grammar, usage, mechanics, spelling): K through 8
   Conventions live in the ELAR composition strand: the "edit
   drafts using standard English conventions" expectation is
   (11)(D) in grades 1-5 and (10)(D) in grades 6-8.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

/* ---------------- Sentences ---------------- */
{
  id: 'l-complete-sentences', subject: 'language', unit: 'Building sentences', grades: ['1', '2', '3', '4', '5'],
  title: 'What makes a complete sentence',
  alt: 'complete sentence subject predicate fragment capital letter end mark',
  stuck: ['The app says my sentence is incomplete', 'What is a predicate?'],
  teks: ['1.11.D', '2.11.D', '3.11.D', '4.11.D', '5.11.D'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'A complete sentence needs two halves: who or what it is about (the subject), and what they are doing or being (the predicate). It also needs a capital letter at the start and an end mark at the finish.',
  why: 'Every grammar app checks this first. Fragments and run-ons both come from not seeing these two halves.',
  words: [
    { w: 'subject', d: 'Who or what the sentence is about.' },
    { w: 'predicate', d: 'What the subject does or is. It always contains a verb.' },
    { w: 'fragment', d: 'A piece of a sentence that is missing one of the halves.' }
  ],
  visual: [
    { type: 'sentence', subj: 'The tired dog', pred: 'slept on the porch.', hint1: 'Who or what?', hint2: 'What did they do?' },
    { type: 'flow', steps: [
      'Ask: who or what is this about? If you cannot answer, there is no subject.',
      'Ask: what are they doing or being? If you cannot answer, there is no predicate.',
      'Check for a capital letter at the beginning.',
      'Check for an end mark: . ? or !',
      'Read it out loud. Does it sound finished, or does it leave you waiting?'
    ] }
  ],
  steps: [
    'Find the verb first. It is usually the easiest part to spot.',
    'Ask "who or what" is doing that verb. That is your subject.',
    'If either half is missing, it is a fragment.',
    'Add the missing half, or attach the fragment to the sentence next to it.',
    'Check the capital letter and the end mark.',
    'Read it aloud. A complete sentence sounds finished on its own.'
  ],
  example: { prompt: 'Is "Running through the tall grass." a complete sentence?',
    work: ['Verb-ish word: running.', 'Who or what is running? The sentence never says.', 'No subject → it is a fragment.', 'Fix: "The rabbit was running through the tall grass."'],
    answer: 'No, it is a fragment. It needs a subject.' },
  traps: [
    'Thinking length equals completeness. "Because the enormous storm arrived early in the afternoon" is long and still a fragment.',
    'Thinking short means incomplete. "She ran." is a complete sentence.',
    'Missing the subject in a command. In "Sit down," the subject is an understood "you," which counts.',
    'Forgetting the end mark, which many apps score as an error.'
  ],
  check: [
    { q: 'Is "The bright yellow bus with the broken window." complete?', a: 'No. There is no verb telling what the bus does or is.' },
    { q: 'Is "Stop!" complete?', a: 'Yes. The subject is an understood "you."' },
    { q: 'What two halves does every sentence need?', a: 'A subject and a predicate.' }
  ],
  links: [
    { t: 'Grammar Monster: Sentences', u: 'https://www.grammar-monster.com/glossary/sentences.htm', d: 'What a sentence is and the four types.' },
    { t: 'Grammar Bytes: Subject', u: 'https://chompchomp.com/terms/subject.htm', d: 'How to find the subject of any sentence.' }
  ],
  note: 'frayer'
},
{
  id: 'l-fragments-runons', subject: 'language', unit: 'Building sentences', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Fixing fragments, run-ons, and comma splices',
  alt: 'fragment run on comma splice sentence errors fix',
  stuck: ['My app keeps flagging run-ons', 'What is a comma splice?'],
  teks: ['5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'A fragment is too little: it is missing a subject or a verb. A run-on is too much: two complete sentences jammed together with nothing between them. A comma splice is the same thing joined with only a comma, which is not strong enough.',
  why: 'These three are the most commonly flagged errors in eGUMPP and AlphaWrite, and there are only four ways to fix any of them.',
  words: [
    { w: 'independent clause', d: 'A group of words that could stand alone as a sentence.' },
    { w: 'comma splice', d: 'Two independent clauses joined by only a comma.' },
    { w: 'coordinating conjunction', d: 'for, and, nor, but, or, yet, so: the FANBOYS.' }
  ],
  visual: [
    { type: 'table', title: 'The three errors', head: ['Error', 'Example', 'Problem'],
      rows: [['Fragment', 'Because it was raining.', 'cannot stand alone'],
             ['Run-on', 'It was raining we stayed inside.', 'no joining word or punctuation'],
             ['Comma splice', 'It was raining, we stayed inside.', 'a comma alone is too weak']] },
    { type: 'decide', question: 'Four ways to fix a run-on or comma splice', branches: [
      { if: 'The two ideas are separate enough', then: 'Use a period. "It was raining. We stayed inside."' },
      { if: 'The ideas are connected', then: 'Add a comma AND a FANBOYS word. "It was raining, so we stayed inside."' },
      { if: 'The ideas are closely related and balanced', then: 'Use a semicolon. "It was raining; we stayed inside."' },
      { if: 'One idea depends on the other', then: 'Make one a dependent clause. "Because it was raining, we stayed inside."' }
    ] }
  ],
  steps: [
    'Read your sentence out loud and listen for where you naturally pause.',
    'Cover part of the sentence and ask whether what remains could stand alone.',
    'If neither part can stand alone, it is a fragment: add what is missing.',
    'If BOTH parts can stand alone, you have two sentences and you must join them properly.',
    'Pick one of the four fixes: period, comma plus FANBOYS, semicolon, or a subordinating word.',
    'Reread. A comma by itself is never enough to join two complete sentences.'
  ],
  example: { prompt: 'Fix: "The experiment failed, we tried a different method."',
    work: ['Part 1: "The experiment failed": can stand alone.', 'Part 2: "we tried a different method": can stand alone.', 'Two independent clauses joined by only a comma → comma splice.', 'The ideas are connected by cause, so use comma + FANBOYS.'],
    answer: '"The experiment failed, so we tried a different method." (Or: "The experiment failed. We tried a different method.")' },
  traps: [
    'Fixing a run-on by adding a comma. That just turns it into a comma splice.',
    'Assuming a long sentence is a run-on. Length has nothing to do with it. The test is whether two independent clauses are improperly joined.',
    'Using "however" or "therefore" with only a comma. Those need a semicolon before them: "It rained; however, we went anyway."',
    'Leaving a fragment because it sounds fine in speech. Writing is held to a stricter standard.'
  ],
  check: [
    { q: 'Is "Although she studied hard." a fragment?', a: 'Yes. "Although" makes it dependent. It cannot stand alone.' },
    { q: 'Name the four ways to fix a comma splice.', a: 'Period, comma + FANBOYS, semicolon, or make one clause dependent.' },
    { q: 'What are the FANBOYS?', a: 'for, and, nor, but, or, yet, so.' }
  ],
  links: [
    { t: 'Grammar Bytes: Fragment', u: 'https://chompchomp.com/terms/fragment.htm', d: 'What makes a fragment and how to fix it.' },
    { t: 'Grammar Monster: Run-on error', u: 'https://www.grammar-monster.com/lessons/commas_run-on_error.htm', d: 'Comma splices and run-ons explained.' },
    { t: 'Grammar Bytes: Exercises', u: 'https://chompchomp.com/exercises.htm', d: 'Free practice on fragments and run-ons.' }
  ],
  note: 'steps'
},
{
  id: 'l-clauses-sentence-types', subject: 'language', unit: 'Building sentences', grades: ['5', '6', '7', '8'],
  title: 'Clauses and the four sentence types',
  alt: 'independent dependent clause simple compound complex compound-complex subordinating',
  stuck: ['What is the difference between a phrase and a clause?', 'How do I write a complex sentence?'],
  teks: ['5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'A clause has a subject and a verb. If it can stand alone it is independent; if a word like "because" or "although" makes it lean on something else, it is dependent. How you combine clauses determines the sentence type.',
  why: 'Grade 6-8 conventions expectations name complex sentences directly, and sentence variety is scored in AlphaWrite.',
  words: [
    { w: 'clause', d: 'A group of words with a subject and a verb.' },
    { w: 'phrase', d: 'A group of words WITHOUT both a subject and a verb.' },
    { w: 'subordinating conjunction', d: 'because, although, since, when, if, while, after: makes a clause dependent.' }
  ],
  visual: [
    { type: 'table', title: 'The four sentence types', head: ['Type', 'Made of', 'Example'],
      rows: [['Simple', '1 independent clause', 'The dog barked.'],
             ['Compound', '2 independent clauses joined properly', 'The dog barked, and the cat ran.'],
             ['Complex', '1 independent + 1 dependent', 'When the dog barked, the cat ran.'],
             ['Compound-complex', '2 independent + at least 1 dependent', 'When the dog barked, the cat ran and the bird flew off.']] },
    { type: 'flow', steps: [
      'Find every subject-verb pair. Each one is a clause.',
      'Check each clause for a subordinating word at the front (because, although, when, if, since, while).',
      'A clause with one of those words is DEPENDENT. Without one, it is INDEPENDENT.',
      'Count how many of each you have.',
      'Name the sentence type from the count.',
      'If a dependent clause comes FIRST, put a comma after it.'
    ] }
  ],
  steps: [
    'Underline every subject-verb pair.',
    'Look at the front of each clause for a subordinating conjunction.',
    'Label each clause independent or dependent.',
    'Count them and name the sentence type.',
    'Apply the comma rule: dependent clause first means comma after it; dependent clause second usually means no comma.',
    'To improve your writing, deliberately vary the types instead of writing all simple sentences.'
  ],
  example: { prompt: 'Label this sentence: "Although the museum was crowded, we found the exhibit, and it was worth the wait."',
    work: ['Clause 1: "Although the museum was crowded": has "although" → dependent.', 'Clause 2: "we found the exhibit" → independent.', 'Clause 3: "it was worth the wait" → independent.', 'One dependent plus two independent.'],
    answer: 'Compound-complex.' },
  traps: [
    'Confusing a phrase with a clause. "In the morning" has no verb, so it is a phrase.',
    'Forgetting the comma after a leading dependent clause.',
    'Putting a comma before a dependent clause that comes second. "We stayed inside because it rained" needs no comma.',
    'Writing every sentence the same length. Sentence variety is part of the score.'
  ],
  check: [
    { q: 'Is "running down the hall" a clause?', a: 'No, it is a phrase. There is no subject.' },
    { q: 'What makes a clause dependent?', a: 'A subordinating conjunction like because, although, when, or if.' },
    { q: 'Where does the comma go in "Because it snowed we stayed home"?', a: 'After "snowed". The dependent clause comes first.' }
  ],
  links: [
    { t: 'Grammar Monster: Phrases', u: 'https://www.grammar-monster.com/glossary/phrase.htm', d: 'Phrase vs clause, with examples.' },
    { t: 'Grammar Monster: Conjunctions and commas', u: 'https://www.grammar-monster.com/lessons/conjunctions_and_commas.htm', d: 'Joining clauses correctly.' }
  ],
  note: 'frayer'
},

/* ---------------- Parts of speech ---------------- */
{
  id: 'l-parts-of-speech', subject: 'language', unit: 'Parts of speech', grades: ['2', '3', '4', '5', '6'],
  title: 'The parts of speech and how to tell them apart',
  alt: 'noun verb adjective adverb pronoun preposition conjunction interjection parts of speech',
  stuck: ['Is "running" a verb or a noun here?', 'How do I tell an adjective from an adverb?'],
  teks: ['2.11.D', '3.11.D', '4.11.D', '5.11.D', '6.10.D'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'A word\'s part of speech depends on the job it is doing in that sentence, not on the word itself. The same word can be a noun in one sentence and a verb in another.',
  why: 'Grammar apps ask you to identify parts of speech in context, and memorizing lists does not work when the same word can play several roles.',
  words: [
    { w: 'noun', d: 'A person, place, thing, or idea.' },
    { w: 'verb', d: 'An action or a state of being.' },
    { w: 'adjective', d: 'Describes a noun. Which one? What kind? How many?' },
    { w: 'adverb', d: 'Describes a verb, adjective, or another adverb. How? When? Where? To what extent?' },
    { w: 'preposition', d: 'Shows position or relationship: in, on, under, before, with.' }
  ],
  visual: [
    { type: 'table', title: 'The question each part of speech answers', head: ['Part of speech', 'Ask', 'Example'],
      rows: [['Noun', 'Who or what?', 'The teacher opened the window.'],
             ['Verb', 'What is happening / being?', 'The teacher opened the window.'],
             ['Adjective', 'Which? What kind? How many?', 'The new teacher opened the tall window.'],
             ['Adverb', 'How? When? Where?', 'The teacher quickly opened the window.'],
             ['Pronoun', 'Which noun is this replacing?', 'She opened it.'],
             ['Preposition', 'Where or when, in relation to?', 'The book on the desk.'],
             ['Conjunction', 'What is being joined?', 'bread and butter']] },
    { type: 'decide', question: 'Same word, different job', branches: [
      { if: '"The RUN was exhausting."', then: 'NOUN. It is the thing the sentence is about.' },
      { if: '"They RUN every morning."', then: 'VERB. It is the action.' },
      { if: '"She wore a FAST time."', then: 'ADJECTIVE: it describes the noun "time."' },
      { if: '"She ran FAST."', then: 'ADVERB: it describes how she ran.' }
    ] }
  ],
  steps: [
    'Never decide a part of speech from the word alone. Read the whole sentence.',
    'Find the verb first: the action or state of being.',
    'Ask "who or what" is doing it. That is the noun or pronoun subject.',
    'Any word describing a noun is an adjective.',
    'Any word describing a verb (how, when, where, how much) is an adverb. Many end in -ly, but not all.',
    'Short position words (in, on, under, with, before) starting a phrase are prepositions.'
  ],
  example: { prompt: 'What part of speech is "light" in each sentence? (a) Turn on the light. (b) Please light the candle. (c) It is a light backpack.',
    work: ['(a) "the light". It is a thing → noun.', '(b) "light the candle". It is an action → verb.', '(c) "light backpack": it describes the backpack → adjective.'],
    answer: '(a) noun, (b) verb, (c) adjective' },
  traps: [
    'Assuming every word ending in -ly is an adverb. "Friendly" and "lovely" are adjectives.',
    'Assuming every adverb ends in -ly. "Fast," "very," "soon," and "here" are all adverbs.',
    'Deciding from the word alone instead of from its job in the sentence.',
    'Confusing adjectives and adverbs: adjectives describe nouns, adverbs describe verbs.'
  ],
  check: [
    { q: 'In "She sang beautifully," what is "beautifully"?', a: 'An adverb: it describes HOW she sang.' },
    { q: 'In "The beautiful song ended," what is "beautiful"?', a: 'An adjective: it describes the noun "song."' },
    { q: 'Is "friendly" an adverb?', a: 'No. Despite the -ly ending, it describes nouns, so it is an adjective.' }
  ],
  links: [
    { t: 'Grammar Monster: Parts of speech', u: 'https://www.grammar-monster.com/glossary/parts_of_speech.htm', d: 'All eight, with examples of each.' },
    { t: 'Khan Academy: Grammar', u: 'https://www.khanacademy.org/humanities/grammar', d: 'Video lessons on every part of speech.' }
  ],
  note: 'frayer'
},
{
  id: 'l-nouns-plurals', subject: 'language', unit: 'Parts of speech', grades: ['1', '2', '3', '4', '5'],
  title: 'Nouns: common, proper, plural and collective',
  alt: 'nouns common proper plural collective irregular plurals capitalize',
  stuck: ['Why is it "children" and not "childs"?', 'When do I capitalize a noun?'],
  teks: ['1.11.D', '2.11.D', '3.11.D', '4.11.D', '5.11.D'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'A common noun names any member of a group (city). A proper noun names a specific one and gets a capital letter (Houston). Making nouns plural usually means adding -s, but the most common nouns often break the rule.',
  why: 'Capitalization and plural spelling are scored on nearly every writing task.',
  words: [
    { w: 'common noun', d: 'A general name: dog, city, teacher.' },
    { w: 'proper noun', d: 'A specific name, always capitalized: Rex, Houston, Ms. Garza.' },
    { w: 'collective noun', d: 'A word for a group treated as one: team, family, class.' }
  ],
  visual: [
    { type: 'table', title: 'Plural rules', head: ['Ending', 'Rule', 'Example'],
      rows: [['most nouns', 'add -s', 'book → books'],
             ['s, x, z, ch, sh', 'add -es', 'box → boxes, bench → benches'],
             ['consonant + y', 'change y to i, add -es', 'baby → babies'],
             ['vowel + y', 'just add -s', 'key → keys'],
             ['f or fe', 'often change to -ves', 'leaf → leaves, knife → knives'],
             ['irregular', 'memorize them', 'child → children, foot → feet, mouse → mice']] },
    { type: 'flow', steps: [
      'Is this noun naming a SPECIFIC person, place, or thing? Then capitalize it.',
      'To make it plural, look at the last letter or two.',
      'Apply the matching rule from the table.',
      'Check the irregular list. The most common nouns are often irregular.',
      'A collective noun (team, family) is singular when the group acts as one: "The team is winning."'
    ] }
  ],
  steps: [
    'Decide whether the noun is common or proper. Proper nouns always take a capital.',
    'For plurals, look at the final letters.',
    'Add -es after s, x, z, ch, or sh.',
    'Change y to i and add -es only when a consonant comes before the y.',
    'Check whether the word is irregular before you add anything.',
    'For collective nouns, treat the group as one thing and use a singular verb.'
  ],
  example: { prompt: 'Make these plural: box, city, monkey, leaf, tooth.',
    work: ['box ends in x → boxes.', 'city is consonant + y → cities.', 'monkey is vowel + y → monkeys.', 'leaf ends in f → leaves.', 'tooth is irregular → teeth.'],
    answer: 'boxes, cities, monkeys, leaves, teeth' },
  traps: [
    'Adding -s to a word that needs -es: "boxs" instead of "boxes."',
    'Changing the y after a vowel: "monkies" is wrong; it is "monkeys."',
    'Using an apostrophe to make a plural. "Three dog\'s" is wrong: apostrophes show possession, not plurals.',
    'Capitalizing common nouns for emphasis.'
  ],
  check: [
    { q: 'Plural of "wish"?', a: 'wishes: it ends in sh.' },
    { q: 'Plural of "day"?', a: 'days: vowel before the y, so just add -s.' },
    { q: 'Is "the Team are winning" correct?', a: 'No. A collective noun acting as one takes a singular verb: "the team is winning."' }
  ],
  links: [
    { t: 'Grammar Monster: Nouns', u: 'https://www.grammar-monster.com/lessons/nouns.htm', d: 'Every kind of noun with examples.' },
    { t: 'Grammar Monster: Plurals', u: 'https://www.grammar-monster.com/plurals.htm', d: 'All the plural rules including irregulars.' },
    { t: 'Khan Academy: The noun', u: 'https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-noun', d: 'Videos and practice.' }
  ],
  note: 'steps'
},
{
  id: 'l-verb-tense', subject: 'language', unit: 'Parts of speech', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'Verb tense and staying consistent',
  alt: 'verb tense past present future irregular verbs shifting tenses consistency',
  stuck: ['I keep switching between past and present', 'Is it "I have went" or "I have gone"?'],
  teks: ['3.11.D', '4.11.D', '5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['Lalilo', 'MobyMax', 'eGumpp', 'Freckle'],
  plain: 'Tense tells you when something happened. The rule that costs students the most points is not forming a tense. It is switching tenses in the middle of a piece of writing without meaning to.',
  why: 'Grades 6 to 8 explicitly require consistent, appropriate use of verb tenses, and it is one of the most frequently flagged errors in AlphaWrite.',
  words: [
    { w: 'tense', d: 'When the action happens: past, present, or future.' },
    { w: 'irregular verb', d: 'A verb that does not form its past tense with -ed.' },
    { w: 'tense shift', d: 'Changing tense mid-piece without a reason. Usually an error.' }
  ],
  visual: [
    { type: 'table', title: 'Irregular verbs that trip people up', head: ['Present', 'Past', 'Past participle (with have/has/had)'],
      rows: [['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['do', 'did', 'done'], ['write', 'wrote', 'written'],
             ['take', 'took', 'taken'], ['bring', 'brought', 'brought'], ['run', 'ran', 'run'], ['begin', 'began', 'begun']],
      note: 'Never say "have went" or "have saw." With have, has, or had, use the third column.' },
    { type: 'flow', steps: [
      'Decide your tense BEFORE you start writing. Stories are usually past; essays about a text are usually present.',
      'Write the whole piece in that tense.',
      'When you edit, read only the verbs. Circle every one.',
      'Any verb in a different tense needs a reason. If there is no reason, fix it.',
      'For irregular verbs, check whether you used have/has/had: if so, use the participle form.'
    ] }
  ],
  steps: [
    'Choose your main tense before you write.',
    'Write consistently in that tense.',
    'When editing, do a pass where you look at nothing but the verbs.',
    'Circle any verb that does not match your chosen tense.',
    'Ask whether the shift is intentional. Flashbacks and general truths can justify a shift; carelessness cannot.',
    'For irregular verbs, check the have/has/had rule. "I have gone," never "I have went."'
  ],
  example: { prompt: 'Fix the tense: "Yesterday I walk to the store and bought milk. Then I see my neighbor."',
    work: ['The time marker "yesterday" sets past tense.', '"walk" should be "walked."', '"bought" is already past: correct.', '"see" should be "saw."'],
    answer: '"Yesterday I walked to the store and bought milk. Then I saw my neighbor."' },
  traps: [
    'Starting a story in past tense and drifting into present when the action gets exciting.',
    'Saying "have went," "have saw," or "have did." Use gone, seen, done.',
    'Adding -ed to an irregular verb: "runned," "goed," "bringed."',
    'Writing about a text in past tense. Literary analysis is normally written in present: "The author argues," not "argued."'
  ],
  check: [
    { q: 'Past tense of "bring"?', a: 'brought.' },
    { q: 'Is "She has wrote three books" correct?', a: 'No. With "has," use the participle: "has written."' },
    { q: 'Which tense do you normally use to write about a story?', a: 'Present tense: "The character realizes…"' }
  ],
  links: [
    { t: 'Grammar Monster: Verbs', u: 'https://www.grammar-monster.com/lessons/verbs-for-kids.htm', d: 'Verbs and tenses explained simply.' },
    { t: 'Grammar Monster: Irregular verbs', u: 'https://www.grammar-monster.com/important-irregular-verbs.htm', d: 'The list worth memorizing.' }
  ],
  note: 'strategy'
},
{
  id: 'l-subject-verb-agreement', subject: 'language', unit: 'Parts of speech', grades: ['4', '5', '6', '7', '8'],
  title: 'Subject-verb agreement',
  alt: 'subject verb agreement singular plural prepositional phrase interrupt',
  stuck: ['Is it "the group of students is" or "are"?', 'The words in between confuse me'],
  teks: ['4.11.D', '5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'A singular subject takes a singular verb; a plural subject takes a plural verb. The whole difficulty is finding the real subject, because writers put phrases between the subject and the verb that point the wrong way.',
  why: 'The TEKS list prepositional phrases and their influence on subject-verb agreement as a specific expectation in grades 6 to 8, because that is exactly where students get caught.',
  words: [
    { w: 'agreement', d: 'The subject and verb matching in number.' },
    { w: 'prepositional phrase', d: 'A phrase starting with a preposition: of the students, in the boxes.' },
    { w: 'indefinite pronoun', d: 'Words like everyone, each, nobody: almost all are singular.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Find the verb.',
      'Ask "who or what" is doing it, to find the subject.',
      'CROSS OUT every prepositional phrase between them. The subject is never inside a prepositional phrase.',
      'Decide whether what remains is singular or plural.',
      'Match the verb.',
      'Read the sentence with the crossed-out part removed to check it sounds right.'
    ] },
    { type: 'table', title: 'The cases that catch people', head: ['Sentence', 'Correct verb', 'Why'],
      rows: [['The box of markers ___ on the shelf.', 'is', 'the subject is "box," not "markers"'],
             ['Each of the players ___ a jersey.', 'gets', '"each" is singular'],
             ['The team ___ practicing.', 'is', 'collective noun acting as one'],
             ['Neither the coach nor the players ___ ready.', 'are', 'with nor, match the CLOSER subject'],
             ['There ___ three reasons.', 'are', 'the real subject is "reasons"']] }
  ],
  steps: [
    'Locate the verb.',
    'Find the subject by asking who or what performs that verb.',
    'Cross out every phrase that starts with a preposition (of, in, with, between, along with).',
    'Look at what is left. Is it one thing or more than one?',
    'Match the verb: singular subject, singular verb.',
    'For "either/or" and "neither/nor," match the subject that is closest to the verb.',
    'Remember most indefinite pronouns (each, every, everyone, nobody, somebody) are singular.'
  ],
  example: { prompt: 'Choose the verb: "The list of required supplies (was / were) posted online."',
    work: ['Verb: was/were posted.', 'Who or what was posted? The list.', 'Cross out "of required supplies". It is a prepositional phrase.', 'Left with "The list … posted." One list → singular.'],
    answer: 'was' },
  traps: [
    'Matching the verb to the noun closest to it instead of to the real subject.',
    'Treating "each," "every," and "everyone" as plural. They are singular.',
    'Getting confused by "along with" and "as well as." They do not make a singular subject plural: "The teacher, along with the students, is going."',
    'In sentences starting with "there," matching the verb to "there." The real subject comes after the verb.'
  ],
  check: [
    { q: '"The bunch of grapes (is/are) on the table."', a: 'is. The subject is "bunch."' },
    { q: '"Everyone in the classes (has/have) a locker."', a: 'has: "everyone" is singular.' },
    { q: 'What is the first thing to cross out when checking agreement?', a: 'Any prepositional phrase between the subject and the verb.' }
  ],
  links: [
    { t: 'Grammar Monster: Subject-verb agreement', u: 'https://www.grammar-monster.com/lessons/subject_verb_agreement.htm', d: 'Every tricky case, with examples.' },
    { t: 'Grammar Bytes: Exercises', u: 'https://chompchomp.com/exercises.htm', d: 'Free agreement practice.' }
  ],
  note: 'steps'
},
{
  id: 'l-pronouns', subject: 'language', unit: 'Parts of speech', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Pronouns: case, agreement, and clear antecedents',
  alt: 'pronoun antecedent case subjective objective possessive who whom unclear reference',
  stuck: ['Is it "me and him went" or "he and I went"?', 'My teacher says my pronoun is unclear'],
  teks: ['3.11.D', '5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'A pronoun stands in for a noun. Three things can go wrong: using the wrong form (case), not matching the noun it replaces (agreement), or leaving it unclear which noun you meant (reference).',
  why: 'Pronoun-antecedent agreement is named directly in the grade 8 conventions expectation, and unclear reference is one of the most common revision notes in AlphaWrite.',
  words: [
    { w: 'antecedent', d: 'The noun a pronoun refers back to.' },
    { w: 'subjective case', d: 'Used as the subject: I, he, she, we, they, who.' },
    { w: 'objective case', d: 'Used as the object: me, him, her, us, them, whom.' },
    { w: 'possessive case', d: 'Shows ownership: my, his, her, our, their, whose.' }
  ],
  visual: [
    { type: 'table', title: 'Pronoun cases', head: ['Subject', 'Object', 'Possessive'],
      rows: [['I', 'me', 'my / mine'], ['he', 'him', 'his'], ['she', 'her', 'her / hers'],
             ['we', 'us', 'our / ours'], ['they', 'them', 'their / theirs'], ['who', 'whom', 'whose']],
      note: 'Test trick: remove the other person. "Me went to the store" sounds wrong, so it must be "I went."' },
    { type: 'flow', steps: [
      'CASE: is the pronoun doing the action (subject) or receiving it (object)?',
      'With two people, remove the other one and say the sentence alone. Your ear will tell you.',
      'AGREEMENT: find the noun the pronoun replaces. Singular noun needs a singular pronoun.',
      'REFERENCE: could the pronoun point to more than one noun? If so, replace it with the actual noun.',
      'Read your writing and check that every "it," "they," and "this" has one obvious antecedent.'
    ] }
  ],
  steps: [
    'Find the pronoun and ask what noun it replaces.',
    'Check case: subject pronouns do the action, object pronouns receive it.',
    'For compound subjects, test by removing the other person.',
    'Check agreement: singular antecedent, singular pronoun.',
    'Check reference: if a reader could plausibly think the pronoun points to a different noun, rewrite it with the noun itself.',
    'Watch "this" and "it" at the start of a sentence: those are the most commonly unclear.'
  ],
  example: { prompt: 'Fix: "Maria told Jordan that she had won."',
    work: ['"She" could mean Maria or Jordan.', 'That is an unclear antecedent.', 'Rewrite with the actual name.'],
    answer: '"Maria told Jordan that Jordan had won." (Or restructure: "Maria said, \'You won,\' to Jordan.")' },
  traps: [
    'Saying "me and him went." Remove the other person: "me went" is wrong, so it is "he and I went."',
    'Saying "between you and I." After a preposition you need the object form: "between you and me."',
    'Starting a sentence with "This" and never saying what "this" is.',
    'Using "they" for a clearly singular antecedent when the sentence can easily be rewritten.'
  ],
  check: [
    { q: '"The prize was given to (he / him) and me."', a: 'him. It is the object of the preposition "to."' },
    { q: '"Each student must bring (his or her / their) own pencil."', a: 'Traditionally "his or her." Better yet, make it plural: "Students must bring their own pencils."' },
    { q: 'What is an antecedent?', a: 'The noun that a pronoun refers back to.' }
  ],
  links: [
    { t: 'Grammar Monster: Grammar terms', u: 'https://www.grammar-monster.com/grammar_terms_and_definitions.htm', d: 'Look up any pronoun term.' },
    { t: 'Khan Academy: Grammar', u: 'https://www.khanacademy.org/humanities/grammar', d: 'Pronoun lessons and practice.' }
  ],
  note: 'steps'
},
{
  id: 'l-adjectives-adverbs', subject: 'language', unit: 'Parts of speech', grades: ['2', '3', '4', '5', '6'],
  title: 'Adjectives and adverbs, including comparatives',
  alt: 'adjective adverb comparative superlative more most er est good well bad badly',
  stuck: ['Is it "more prettier" or "prettier"?', 'Do I say "he ran good" or "he ran well"?'],
  teks: ['2.11.D', '3.11.D', '4.11.D', '5.11.D'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'Adjectives describe nouns; adverbs describe verbs. When you compare two things you use the comparative form, and for three or more you use the superlative: but you never use both -er and "more" at the same time.',
  why: 'Comparative and superlative forms are named directly in the grades 2 to 5 conventions expectations, and the double-comparative error is extremely common.',
  words: [
    { w: 'comparative', d: 'Comparing TWO things: taller, more careful.' },
    { w: 'superlative', d: 'Comparing THREE or more: tallest, most careful.' }
  ],
  visual: [
    { type: 'table', title: 'Forming comparatives and superlatives', head: ['Word length', 'Comparative', 'Superlative'],
      rows: [['1 syllable', 'add -er (tall → taller)', 'add -est (tallest)'],
             ['2 syllables ending in y', 'change y to i, add -er (happy → happier)', 'happiest'],
             ['2+ syllables', 'use more (careful → more careful)', 'most careful'],
             ['irregular', 'good → better, bad → worse', 'best, worst']],
      note: 'Never both: "more taller" and "most tallest" are always wrong.' },
    { type: 'decide', question: 'Adjective or adverb?', branches: [
      { if: 'It describes a NOUN', then: 'Adjective. "She is a GOOD singer."' },
      { if: 'It describes a VERB (how something was done)', then: 'Adverb. "She sings WELL."' },
      { if: 'After a linking verb (is, seems, feels, tastes)', then: 'Adjective. "The soup tastes GOOD."' },
      { if: 'After an action verb', then: 'Adverb. "He plays BADLY."' }
    ] }
  ],
  steps: [
    'Ask what the word is describing. A noun means adjective; a verb means adverb.',
    'Watch for linking verbs (is, seems, feels, looks, tastes, sounds): they take adjectives, not adverbs.',
    'To compare two things, use the comparative form.',
    'To compare three or more, use the superlative.',
    'Count the syllables to decide between -er/-est and more/most.',
    'Never use both -er and "more," or -est and "most."'
  ],
  example: { prompt: 'Choose: "Of the three runners, Maya was the (faster / fastest)." And: "The soup tastes (good / well)."',
    work: ['Three runners means three or more → superlative → fastest.', '"Tastes" is a linking verb, so it takes an adjective → good.'],
    answer: 'fastest; good' },
  traps: [
    'Doubling up: "more faster," "most fastest."',
    'Using the superlative for two things. With two, use the comparative: "the taller of the two."',
    'Saying "I did good" when you mean "I did well." Good is an adjective; well is the adverb.',
    'Forgetting the irregulars: good/better/best and bad/worse/worst.'
  ],
  check: [
    { q: 'Comparative of "beautiful"?', a: 'more beautiful. It has more than two syllables.' },
    { q: '"He plays the guitar (good / well)."', a: 'well. It describes how he plays, which is a verb.' },
    { q: 'Two dogs. Which one is the "biggest"?', a: 'Neither: with two, say "bigger."' }
  ],
  links: [
    { t: 'Grammar Monster: Adjectives', u: 'https://www.grammar-monster.com/lessons/adjectives-for-kids.htm', d: 'Adjectives including comparatives.' },
    { t: 'Grammar Monster: Parts of speech lists', u: 'https://www.grammar-monster.com/parts_of_speech_lists.htm', d: 'Reference lists you can print.' }
  ],
  note: 'steps'
},
{
  id: 'l-prepositional-phrases', subject: 'language', unit: 'Parts of speech', grades: ['4', '5', '6', '7', '8'],
  title: 'Prepositional phrases and modifier placement',
  alt: 'prepositional phrase preposition modifier misplaced dangling',
  stuck: ['What counts as a prepositional phrase?', 'My sentence sounds funny but I do not know why'],
  teks: ['4.11.D', '5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'A prepositional phrase starts with a preposition and ends with a noun: "under the old bridge." It adds information, but it can never contain the subject of the sentence: and if you put it in the wrong place, the sentence says something you did not mean.',
  why: 'Crossing out prepositional phrases is the fastest way to solve subject-verb agreement, and misplaced modifiers are a common revision note.',
  words: [
    { w: 'preposition', d: 'A word showing position or relationship: in, on, under, before, with, between, of.' },
    { w: 'modifier', d: 'A word or phrase that describes something else.' },
    { w: 'misplaced modifier', d: 'A modifier sitting next to the wrong word, changing the meaning.' }
  ],
  visual: [
    { type: 'table', title: 'Misplaced modifiers change the meaning', head: ['Sentence', 'What it actually says'],
      rows: [['She served sandwiches to the children on paper plates.', 'the children were on paper plates'],
             ['On paper plates, she served sandwiches to the children.', 'better: but still awkward'],
             ['She served the children sandwiches on paper plates.', 'correct. The sandwiches were on the plates'],
             ['Running down the street, the backpack fell off.', 'the backpack was running'],
             ['Running down the street, he dropped his backpack.', 'correct']],
      note: 'A modifier attaches to whatever is closest to it. Put it next to the thing it describes.' },
    { type: 'flow', steps: [
      'Find every preposition (in, on, under, with, of, between, before, after, through).',
      'The phrase runs from that word to the noun that follows it.',
      'Put brackets around the whole phrase.',
      'Ask: what is this phrase describing?',
      'Move it so it sits next to that thing.',
      'For agreement questions, cross the phrase out entirely. The subject is never inside it.'
    ] }
  ],
  steps: [
    'Spot the preposition.',
    'Bracket from the preposition through the noun that ends the phrase.',
    'Ask what the phrase is telling you about.',
    'Check that it sits next to the word it describes.',
    'If it does not, move it.',
    'When checking subject-verb agreement, cross the phrase out first.'
  ],
  example: { prompt: 'Fix: "The teacher handed out the tests to the students in yellow folders."',
    work: ['Prepositional phrases: "to the students," "in yellow folders."', '"In yellow folders" is currently next to "students," so it describes the students.', 'It should describe the tests.'],
    answer: '"The teacher handed out the tests in yellow folders to the students."' },
  traps: [
    'Thinking the subject can be inside a prepositional phrase. It never is.',
    'Leaving a modifier at the end of a sentence where it attaches to the wrong noun.',
    'Starting a sentence with an -ing phrase that has nothing to attach to: "Walking home, the rain started."',
    'Stacking too many prepositional phrases so the sentence loses its shape.'
  ],
  check: [
    { q: 'Bracket the prepositional phrase: "The keys under the mat are mine."', a: '[under the mat]. And note the subject is "keys," so the verb is "are."' },
    { q: 'What is wrong with "I saw a dog walking to school"?', a: 'It sounds like the dog was walking to school. Rewrite: "Walking to school, I saw a dog."' },
    { q: 'Can the subject be inside a prepositional phrase?', a: 'No, never.' }
  ],
  links: [
    { t: 'Grammar Monster: Misplaced modifiers', u: 'https://www.grammar-monster.com/glossary/misplaced_modifier.htm', d: 'Examples of modifiers gone wrong.' },
    { t: 'Grammar Monster: Phrases', u: 'https://www.grammar-monster.com/glossary/phrase.htm', d: 'All phrase types including prepositional.' }
  ],
  note: 'steps'
},

/* ---------------- Punctuation and mechanics ---------------- */
{
  id: 'l-commas', subject: 'language', unit: 'Punctuation', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Comma rules that actually come up',
  alt: 'commas series introductory clause compound sentence appositive comma rules',
  stuck: ['I just put commas where I pause', 'eGUMPP marks my commas wrong constantly'],
  teks: ['3.11.D', '4.11.D', '5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'Commas are not about where you breathe. There are about six rules that cover almost every comma you will ever need, and once you know them you can stop guessing.',
  why: 'Commas are the single most-scored punctuation item in eGUMPP, and "put one where you pause" is wrong often enough to cost real points.',
  words: [
    { w: 'series', d: 'A list of three or more items.' },
    { w: 'introductory element', d: 'A word or phrase before the main clause.' },
    { w: 'appositive', d: 'A rename phrase set off by commas: "My brother, a firefighter, called."' }
  ],
  visual: [
    { type: 'table', title: 'The six rules', head: ['Rule', 'Example'],
      rows: [['1. Items in a series', 'We packed sandwiches, apples, and water.'],
             ['2. Before FANBOYS joining two full sentences', 'It rained, so we stayed in.'],
             ['3. After an introductory word or phrase', 'After the game, we ate.'],
             ['4. Around an appositive (extra rename info)', 'My teacher, Ms. Reyes, is retiring.'],
             ['5. Around non-essential information', 'The book, which I loved, is long.'],
             ['6. In dates, addresses, and after a greeting', 'On May 3, 2025, in Austin, Texas']],
      note: 'If none of the six rules applies, you probably do not need a comma.' },
    { type: 'decide', question: 'Do I need a comma here?', branches: [
      { if: 'I am listing three or more things', then: 'Yes: between each item.' },
      { if: 'I have two complete sentences and a FANBOYS word', then: 'Yes: before the FANBOYS word.' },
      { if: 'Something comes before my main clause', then: 'Yes: after that introductory part.' },
      { if: 'I could delete the phrase and the sentence still makes sense', then: 'Yes: commas around it.' },
      { if: 'None of the above and I just want to pause', then: 'No comma.' }
    ] }
  ],
  steps: [
    'Look at each comma you wrote and name which rule it follows.',
    'If you cannot name a rule, delete it.',
    'For a compound sentence, check that BOTH sides are complete sentences before you use comma + FANBOYS.',
    'For a leading dependent clause or phrase, put the comma at the end of it.',
    'For extra information, test it: can you delete the phrase and still have a working sentence? If yes, use commas around it.',
    'Reread the sentence with the commas as written, not as you meant them.'
  ],
  example: { prompt: 'Add commas: "After the storm passed we walked outside and my neighbor a retired teacher was already cleaning up."',
    work: ['"After the storm passed" is introductory → comma after "passed."', '"we walked outside" and "my neighbor was already cleaning up" are both complete, joined by "and" → comma before "and."', '"a retired teacher" renames the neighbor → commas around it.'],
    answer: 'After the storm passed, we walked outside, and my neighbor, a retired teacher, was already cleaning up.' },
  traps: [
    'Using a comma to join two complete sentences with no FANBOYS word. That is a comma splice.',
    'Putting a comma before "and" in a two-item list. "I bought milk, and eggs" is wrong.',
    'Placing commas wherever you would pause when speaking.',
    'Using only one comma around an appositive. They come in pairs.'
  ],
  check: [
    { q: 'Does "I like pizza and pasta" need a comma?', a: 'No. Only two items and the second half is not a complete sentence.' },
    { q: 'Does "I like pizza, and I like pasta" need one?', a: 'Yes. Both sides are complete sentences joined by "and."' },
    { q: 'Where does the comma go in "Before school I run"?', a: 'After "school". It is an introductory phrase.' }
  ],
  links: [
    { t: 'Grammar Monster: Punctuation lessons', u: 'https://www.grammar-monster.com/punctuation_lessons.htm', d: 'Every comma rule with examples.' },
    { t: 'Grammar Monster: Commas after an introduction', u: 'https://www.grammar-monster.com/lessons/commas_after_a_sentence_introduction.htm', d: 'The introductory comma rule.' },
    { t: 'Grammar Bytes: Handouts', u: 'https://chompchomp.com/handouts.htm', d: 'Printable comma rules.' }
  ],
  note: 'steps'
},
{
  id: 'l-apostrophes', subject: 'language', unit: 'Punctuation', grades: ['2', '3', '4', '5', '6'],
  title: 'Apostrophes: possession and contractions',
  alt: 'apostrophe possessive contraction its it\'s your you\'re plural',
  stuck: ['Is it "its" or "it\'s"?', 'Where does the apostrophe go for plural possessives?'],
  teks: ['2.11.D', '3.11.D', '4.11.D', '5.11.D'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'Apostrophes do exactly two jobs: they show ownership, and they mark where letters were removed in a contraction. They never make a word plural.',
  why: 'The its/it\'s error is one of the most-flagged mistakes in writing apps, and it is a two-second check once you know the trick.',
  words: [
    { w: 'possessive', d: 'Showing ownership: the dog\'s bowl.' },
    { w: 'contraction', d: 'Two words squeezed into one: do not → don\'t.' }
  ],
  visual: [
    { type: 'table', title: 'Where the apostrophe goes', head: ['Situation', 'Rule', 'Example'],
      rows: [['One owner', "add 's", "the dog's bowl"],
             ['More than one owner, ending in s', "add ' after the s", "the dogs' bowls"],
             ['Plural not ending in s', "add 's", "the children's books"],
             ['Contraction', 'apostrophe replaces the missing letters', "do not → don't"],
             ['Plural (no ownership)', 'NO apostrophe', 'three dogs']] },
    { type: 'decide', question: 'its or it\'s?', branches: [
      { if: 'You can replace it with "it is" or "it has"', then: "Use IT'S with the apostrophe." },
      { if: 'You mean "belonging to it"', then: 'Use ITS with no apostrophe.' },
      { if: 'You are unsure', then: 'Read the sentence saying "it is" out loud. If it works, use it\'s.' }
    ] }
  ],
  steps: [
    'Decide what the apostrophe is doing: showing ownership or marking a contraction.',
    'For ownership, find the owner first, THEN add the apostrophe.',
    'If the owner is singular, add \'s. If the owner is plural and already ends in s, add just the apostrophe.',
    'For contractions, the apostrophe goes exactly where the missing letters were.',
    'For its/it\'s, your/you\'re, their/they\'re, test by expanding the contraction.',
    'Never use an apostrophe just to make a word plural.'
  ],
  example: { prompt: 'Fix: "The three student\'s projects were displayed, and its clear they worked hard."',
    work: ['Three students own the projects → plural owner ending in s → students\'.', '"its clear" means "it is clear" → needs the apostrophe: it\'s.'],
    answer: 'The three students\' projects were displayed, and it\'s clear they worked hard.' },
  traps: [
    'Using an apostrophe for a plural: "apple\'s for sale" is wrong.',
    'Writing "it\'s" for possession. It\'s always means "it is" or "it has."',
    'Putting the apostrophe before the s for a plural owner. "The dogs\' bowls" means several dogs.',
    'Confusing your/you\'re and their/they\'re/there. Expand the contraction to test.'
  ],
  check: [
    { q: '"The dog wagged (its / it\'s) tail."', a: 'its. It means "belonging to it."' },
    { q: 'Where does the apostrophe go for bowls belonging to several cats?', a: "The cats' bowls: after the s." },
    { q: 'Is "banana\'s $1 each" correct?', a: 'No. That is a plural, not a possessive. It should be "bananas."' }
  ],
  links: [
    { t: 'Grammar Monster: Punctuation lessons', u: 'https://www.grammar-monster.com/punctuation_lessons.htm', d: 'Apostrophe rules with examples.' },
    { t: 'Grammar Monster: Easily confused words', u: 'https://www.grammar-monster.com/easily_confused_words.htm', d: 'its/it\'s, your/you\'re, their/there/they\'re.' }
  ],
  note: 'steps'
},
{
  id: 'l-quotation-dialogue', subject: 'language', unit: 'Punctuation', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Punctuating dialogue and quotations',
  alt: 'quotation marks dialogue tags punctuation new paragraph speaker quote',
  stuck: ['Does the comma go inside or outside the quotation marks?', 'When do I start a new paragraph?'],
  teks: ['3.11.D', '4.11.D', '5.11.D', '6.10.D', '7.10.D', '8.10.D'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'Quotation marks go around the exact words someone said or wrote. In American English, commas and periods go INSIDE the closing quotation mark, every time. And each new speaker starts a new paragraph.',
  why: 'Dialogue punctuation is scored in AlphaWrite narrative tasks, and quoting text evidence correctly matters in every subject.',
  words: [
    { w: 'dialogue tag', d: 'The "he said" part that identifies the speaker.' },
    { w: 'direct quotation', d: 'The exact words someone used, inside quotation marks.' }
  ],
  visual: [
    { type: 'table', title: 'Where the punctuation goes', head: ['Pattern', 'Example'],
      rows: [['Tag after', '"I am ready," she said.'],
             ['Tag before', 'She said, "I am ready."'],
             ['Tag in the middle', '"I am ready," she said, "but I am nervous."'],
             ['Question inside the quote', '"Are you ready?" she asked.'],
             ['Quoting text evidence', 'The author writes, "Bees pollinate most crops."']],
      note: 'Commas and periods always go inside the closing quotation mark in American English.' },
    { type: 'flow', steps: [
      'Open quotation marks before the first spoken word.',
      'Write exactly what was said.',
      'If a tag follows, end the quote with a comma (not a period) before the closing mark.',
      'Close the quotation marks.',
      'Lowercase the tag: "she said," not "She said."',
      'End the whole sentence with a period after the tag.',
      'When a different person speaks, start a new paragraph.'
    ] }
  ],
  steps: [
    'Put quotation marks around only the exact spoken or quoted words.',
    'Put the comma or period inside the closing quotation mark.',
    'If the quote is a question or exclamation, keep the ? or ! inside and do not add a comma.',
    'Start the dialogue tag in lowercase unless it begins with a name.',
    'Start a new paragraph every time the speaker changes.',
    'When quoting a text as evidence, introduce it with a lead-in and a comma.'
  ],
  example: { prompt: 'Punctuate: I do not think that is right said Marcus but I could be wrong',
    work: ['The spoken words split around the tag.', 'First part ends with a comma inside the quote.', 'Tag is lowercase: said Marcus.', 'Second part reopens quotes and ends the sentence.'],
    answer: '"I do not think that is right," said Marcus, "but I could be wrong."' },
  traps: [
    'Putting the comma outside the quotation marks. In American English it goes inside.',
    'Capitalizing "said" after a quote. The tag continues the same sentence.',
    'Using a period before a tag: "I am ready." she said. It should be a comma.',
    'Keeping two speakers in the same paragraph, which makes it impossible to follow.'
  ],
  check: [
    { q: 'Inside or outside: "I am late," he said.', a: 'Inside. The comma goes before the closing quotation mark.' },
    { q: 'When do you start a new paragraph in dialogue?', a: 'Every time a different person speaks.' },
    { q: 'Fix: "Where are you going." she asked.', a: '"Where are you going?" she asked.' }
  ],
  links: [
    { t: 'Grammar Monster: Punctuation lessons', u: 'https://www.grammar-monster.com/punctuation_lessons.htm', d: 'Quotation marks and speech punctuation.' },
    { t: 'Khan Academy: Punctuation', u: 'https://www.khanacademy.org/humanities/grammar/punctuation', d: 'Video lessons and practice.' }
  ],
  note: 'steps'
},
{
  id: 'l-capitalization', subject: 'language', unit: 'Punctuation', grades: ['1', '2', '3', '4', '5', '8'],
  title: 'Capitalization rules',
  alt: 'capitalization capital letters proper nouns titles months days',
  stuck: ['Do I capitalize seasons?', 'Which words in a title get capitals?'],
  teks: ['1.11.D', '2.11.D', '3.11.D', '4.11.D', '5.11.D', '8.10.D'],
  apps: ['Lalilo', 'MobyMax', 'eGumpp', 'Freckle'],
  plain: 'Capitalize the first word of a sentence, the word I, and any proper noun: a specific name. Categories get lowercase; specific names get capitals.',
  why: 'Correct capitalization is named directly in the grade 8 conventions expectation and is scored on every writing task.',
  words: [
    { w: 'proper noun', d: 'The specific name of a person, place, or thing.' },
    { w: 'common noun', d: 'A general category.' }
  ],
  visual: [
    { type: 'table', title: 'Capital or not?', head: ['Capitalize', 'Do NOT capitalize'],
      rows: [['Monday, March', 'winter, spring, summer, fall'],
             ['Texas, Houston, Buffalo Bayou', 'the state, the city, the river'],
             ['Ms. Garza, Principal Ruiz', 'my teacher, the principal'],
             ['English, Spanish', 'math, science, history (unless a course number)'],
             ['Mars, Earth (as a planet)', 'the moon, the sun'],
             ['Mom (as a name: "Hi, Mom")', 'my mom']],
      note: 'Days and months are capitalized. Seasons are not.' },
    { type: 'flow', steps: [
      'First word of every sentence: capital.',
      'The word I: always capital.',
      'Ask: is this the SPECIFIC name of something, or the general category?',
      'Specific name → capital. Category → lowercase.',
      'In titles, capitalize the first word, the last word, and every important word in between.',
      'Small words in the middle of a title (a, an, the, of, in, and) stay lowercase.'
    ] }
  ],
  steps: [
    'Capitalize the first word of each sentence.',
    'Capitalize the pronoun I, always.',
    'For each noun, ask whether it names something specific or describes a category.',
    'Capitalize days, months, holidays, languages, and nationalities.',
    'Do not capitalize seasons or school subjects (except languages).',
    'For titles, capitalize the first and last words plus all the important words in between.'
  ],
  example: { prompt: 'Fix: "last friday, my Mom and i visited the museum of fine arts in houston during Spring."',
    work: ['"last" starts the sentence → Last.', 'Friday is a day → capital.', '"my mom" is not being used as a name → lowercase mom.', '"i" → I.', 'Museum of Fine Arts is a specific name → capitals, but "of" stays lowercase.', 'Houston is a city name → capital.', 'spring is a season → lowercase.'],
    answer: 'Last Friday, my mom and I visited the Museum of Fine Arts in Houston during spring.' },
  traps: [
    'Capitalizing seasons. Winter, spring, summer, and fall are lowercase.',
    'Capitalizing school subjects. Math and science are lowercase; English and Spanish are capitalized because they are languages.',
    'Capitalizing "mom" or "dad" when a possessive comes first. "My mom" is lowercase; "Hi, Mom" is capital.',
    'Capitalizing every word in a title, including "the" and "of."'
  ],
  check: [
    { q: 'Capitalize or not: "we went in july"?', a: '"We went in July." Months are capitalized.' },
    { q: 'Is "i love Science class" correct?', a: 'No. It should be "I love science class."' },
    { q: 'Which words in a title stay lowercase?', a: 'Small words in the middle: a, an, the, of, in, and, or.' }
  ],
  links: [
    { t: 'Grammar Monster: Common grammar errors', u: 'https://www.grammar-monster.com/common_grammar_errors.htm', d: 'Includes the capitalization mistakes people repeat.' }
  ],
  note: 'steps'
},

/* ---------------- Spelling ---------------- */
{
  id: 'l-spelling-patterns', subject: 'language', unit: 'Spelling', grades: ['2', '3', '4', '5'],
  title: 'Spelling patterns and suffix rules',
  alt: 'spelling patterns doubling rule drop the e change y to i syllable types',
  stuck: ['Do I double the letter before -ing?', 'Is it "hoping" or "hopping"?'],
  teks: ['2.2.B', '3.2.B', '4.2.B', '5.2.B'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'English spelling is more predictable than it looks. Three rules handle most of the words you get wrong when adding an ending: double the final consonant, drop the silent e, or change y to i.',
  why: 'Spelling is a separate TEKS expectation and it is one of the fastest scores to raise, because a small number of rules cover a large number of words.',
  words: [
    { w: 'suffix', d: 'An ending added to a word: -ing, -ed, -er, -est, -ful, -ly.' },
    { w: 'silent e', d: 'The e at the end of a word that changes the vowel sound but is not pronounced.' }
  ],
  visual: [
    { type: 'table', title: 'The three suffix rules', head: ['Rule', 'When', 'Example'],
      rows: [['Double the final consonant', 'one syllable, one vowel, one final consonant, and the suffix starts with a vowel', 'hop → hopping, run → running'],
             ['Drop the silent e', 'word ends in silent e and the suffix starts with a vowel', 'hope → hoping, make → making'],
             ['Change y to i', 'consonant before the y, and the suffix is not -ing', 'happy → happier, carry → carried'],
             ['Keep the y', 'suffix is -ing, or a vowel comes before the y', 'carry → carrying, play → played']],
      note: 'hoping vs hopping: hope had a silent e (dropped it), hop did not (doubled it).' },
    { type: 'flow', steps: [
      'Look at the last letter of the base word.',
      'Ends in silent e? Drop the e if the suffix starts with a vowel.',
      'Ends in one consonant after one vowel, in a one-syllable word? Double the consonant.',
      'Ends in y with a consonant before it? Change the y to i, unless the suffix is -ing.',
      'None of the above? Just add the suffix.',
      'Read it back and check that it looks right.'
    ] }
  ],
  steps: [
    'Write the base word by itself.',
    'Look at how it ends.',
    'Apply the matching rule before you add the suffix.',
    'Say the word out loud. The vowel sound often tells you whether to double.',
    'Check the result against a word you already know that follows the same pattern.',
    'Keep a personal list of words you get wrong more than once.'
  ],
  example: { prompt: 'Add -ed to: hop, hope, carry, play.',
    work: ['hop: one syllable, one vowel, one final consonant → double → hopped.', 'hope: silent e, suffix starts with a vowel → drop the e → hoped.', 'carry: consonant before y, suffix is not -ing → y to i → carried.', 'play: vowel before y → keep it → played.'],
    answer: 'hopped, hoped, carried, played' },
  traps: [
    'Doubling when there is a silent e. "Hopeing" and "hopping" are both wrong for "hope."',
    'Changing y to i before -ing. It stays: "carrying," not "carriing."',
    'Doubling in multi-syllable words where the stress is not on the last syllable. "Visiting," not "visitting."',
    'Relying only on autocorrect. Apps score your spelling, not your device\'s.'
  ],
  check: [
    { q: 'Add -ing to "make."', a: 'making: drop the silent e.' },
    { q: 'Add -er to "big."', a: 'bigger: double the final consonant.' },
    { q: 'Add -es to "study."', a: 'studies: consonant before y, so change y to i.' }
  ],
  links: [
    { t: 'Grammar Monster: Most misspelled words', u: 'https://www.grammar-monster.com/lessons/most-misspelled-words.htm', d: 'The words worth learning on purpose.' },
    { t: 'Reading Rockets: Word Hunts', u: 'https://www.readingrockets.org/classroom/classroom-strategies/word-hunts', d: 'Finding spelling patterns in real text.' }
  ],
  note: 'steps'
},
{
  id: 'l-homophones', subject: 'language', unit: 'Spelling', grades: ['2', '3', '4', '5', '6'],
  title: 'Homophones and easily confused words',
  alt: 'homophones there their they\'re your you\'re to too two affect effect',
  stuck: ['I always mix up there, their and they\'re', 'Is it affect or effect?'],
  teks: ['3.2.B', '3.3.D', '4.3.D', '5.3.D', '6.2.B'],
  apps: ['Lalilo', 'MobyMax', 'Freckle'],
  plain: 'Homophones sound identical but mean different things and are spelled differently. Spell-check will not catch them, because every version is a real word. You need a memory trick for each pair.',
  why: 'These are the errors that survive spell-check, so they show up in your final score even after you proofread.',
  words: [
    { w: 'homophone', d: 'Words that sound the same but have different meanings and spellings.' },
    { w: 'homograph', d: 'Words spelled the same but with different meanings, and sometimes different pronunciations.' }
  ],
  visual: [
    { type: 'table', title: 'The ones that actually cost points', head: ['Words', 'Meaning', 'Memory trick'],
      rows: [['there / their / they\'re', 'place / belonging to them / they are', '"here" is in "there"; "heir" is in "their"; they\'re = they are'],
             ['your / you\'re', 'belonging to you / you are', "you're always expands to you are"],
             ['to / too / two', 'toward / also or excessive / the number', 'too has too many o\'s'],
             ['its / it\'s', 'belonging to it / it is', "it's always expands to it is"],
             ['then / than', 'time or sequence / comparison', 'thAn = compArison; thEn = timE'],
             ['affect / effect', 'to influence (verb) / a result (noun)', 'Action = Affect; End result = Effect']] },
    { type: 'flow', steps: [
      'When you hit a homophone, stop and expand it.',
      'For contractions (you\'re, it\'s, they\'re), read the sentence with the full words. If it works, use the apostrophe version.',
      'For their/there, ask whether the sentence is about ownership or place.',
      'For then/than, ask whether you are comparing or sequencing.',
      'For affect/effect, ask whether it is a verb or a noun.',
      'Add every homophone you get wrong to a personal list and check for it during editing.'
    ] }
  ],
  steps: [
    'Slow down whenever you write one of these words.',
    'Expand contractions to test them.',
    'Ask what job the word is doing in the sentence.',
    'Use the memory trick for that pair.',
    'During editing, do a dedicated pass looking only for these words.',
    'Keep your own list of the ones you personally confuse.'
  ],
  example: { prompt: 'Fix: "Their going to bring they\'re books over there, and its going to be later then we planned."',
    work: ['"Their going" → expand: "they are going" → they\'re.', '"they\'re books" → ownership → their.', '"over there" → place → correct.', '"its going" → "it is going" → it\'s.', '"later then" → comparison → than.'],
    answer: '"They\'re going to bring their books over there, and it\'s going to be later than we planned."' },
  traps: [
    'Trusting spell-check. Every homophone is a correctly spelled word.',
    'Fixing them while drafting. Draft first, then do a dedicated homophone pass.',
    'Learning the trick but never using it. The trick only works if you stop and apply it.',
    'Assuming you only confuse one pair. Most people confuse three or four.'
  ],
  check: [
    { q: '"(Your / You\'re) going to love this."', a: "You're. It expands to \"you are.\"" },
    { q: '"This is bigger (then / than) that."', a: 'than. It is a comparison.' },
    { q: '"The rain will (affect / effect) the game."', a: 'affect. It is an action, a verb.' }
  ],
  links: [
    { t: 'Grammar Monster: Easily confused words', u: 'https://www.grammar-monster.com/easily_confused_words.htm', d: 'A long list with clear explanations.' },
    { t: 'Grammar Monster: Confused words test', u: 'https://www.grammar-monster.com/tests/confused_words_test.htm', d: 'Practice quiz.' }
  ],
  note: 'word'
},
{
  id: 'l-sentence-combining', subject: 'language', unit: 'Building sentences', grades: ['4', '5', '6', '7', '8'],
  title: 'Combining short sentences into better ones',
  alt: 'sentence combining variety choppy writing revise sentences',
  stuck: ['My writing sounds choppy', 'Every sentence I write is the same length'],
  teks: ['4.11.C', '5.11.C', '6.10.C', '7.10.C', '8.10.C'],
  apps: ['MobyMax', 'eGumpp', 'Freckle'],
  plain: 'Choppy writing is a series of short sentences that each carry one small idea. Combining them shows the relationship between the ideas and makes your writing sound like a person instead of a list.',
  why: 'Sentence variety is directly scored in AlphaWrite revision, and combining is the fastest way to improve a draft.',
  words: [
    { w: 'combine', d: 'Join two or more sentences into one that says the same thing more smoothly.' },
    { w: 'sentence variety', d: 'Using different lengths and structures on purpose.' }
  ],
  visual: [
    { type: 'table', title: 'Ways to combine', head: ['Method', 'Before', 'After'],
      rows: [['Use a conjunction', 'It rained. We went inside.', 'It rained, so we went inside.'],
             ['Use a subordinating word', 'It rained. We went inside.', 'Because it rained, we went inside.'],
             ['Move a describing word', 'The dog barked. The dog was old.', 'The old dog barked.'],
             ['Use an appositive', 'Mr. Lee teaches math. He is my neighbor.', 'Mr. Lee, my neighbor, teaches math.'],
             ['Use a list', 'I packed a coat. I packed boots. I packed gloves.', 'I packed a coat, boots, and gloves.']] },
    { type: 'flow', steps: [
      'Read your paragraph out loud. Choppy writing sounds like a robot.',
      'Find two or three sentences in a row that are about the same thing.',
      'Ask how the ideas relate: cause, contrast, sequence, or extra description.',
      'Pick the combining method that matches that relationship.',
      'Rewrite them as one sentence.',
      'Read it back. If the combined sentence is confusing, it was too much: split it again.'
    ] }
  ],
  steps: [
    'Read your draft out loud and listen for a choppy stretch.',
    'Mark short sentences that sit next to each other and share a subject or topic.',
    'Decide the relationship between the ideas.',
    'Choose the matching combining move.',
    'Rewrite, then check that you have not created a run-on.',
    'Vary deliberately: not every sentence should be combined. A short sentence after long ones lands hard.'
  ],
  example: { prompt: 'Combine: "The storm was strong. It knocked down a tree. The tree fell across our driveway."',
    work: ['All three are about the same storm and tree.', 'Relationship: cause, then result.', 'Combine using "which" and a describing phrase.'],
    answer: '"The strong storm knocked down a tree, which fell across our driveway."' },
  traps: [
    'Combining so many sentences that the result is a run-on.',
    'Combining everything. Some short sentences are powerful on purpose.',
    'Joining two unrelated ideas just because they are next to each other.',
    'Losing information in the combination. Check that everything survived.'
  ],
  check: [
    { q: 'Combine: "Maya plays soccer. She also runs track."', a: '"Maya plays soccer and runs track."' },
    { q: 'What is the risk of combining too much?', a: 'You create a run-on or a confusing sentence.' },
    { q: 'How do you find choppy writing?', a: 'Read it out loud. It sounds like a list.' }
  ],
  links: [
    { t: 'Reading Rockets: Sentence Combining', u: 'https://www.readingrockets.org/classroom/classroom-strategies/sentence-combining', d: 'The strategy with practice examples.' },
    { t: 'Grammar Monster: Conjunctions and commas', u: 'https://www.grammar-monster.com/lessons/conjunctions_and_commas.htm', d: 'Joining clauses without creating errors.' }
  ],
  note: 'strategy'
}

]);

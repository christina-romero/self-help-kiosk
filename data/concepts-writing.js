/* ============================================================
   WRITING: Grades 2 through 8
   Composition strand: writing process is (11) in grades 1-5 and
   (10) in grades 6-8; genres are (12) and (11) respectively.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

{
  id: 'w-writing-process', subject: 'writing', unit: 'The writing process', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'The writing process: where you actually are',
  alt: 'writing process plan draft revise edit publish stages',
  stuck: ['I do not know where to start', 'I keep fixing spelling instead of writing'],
  teks: ['3.11.A', '4.11.A', '5.11.A', '6.10.A', '7.10.A', '8.10.A'],
  apps: ['AlphaWrite'],
  plain: 'Writing has five stages and they each have a different job. Most writing blocks come from trying to do two stages at once: usually drafting and editing, which fight each other.',
  why: 'AlphaWrite gives you feedback in cycles. Knowing which stage you are in tells you which feedback to act on now and which to save.',
  words: [
    { w: 'plan', d: 'Gather and organize ideas before you write sentences.' },
    { w: 'draft', d: 'Get the ideas down. Quality comes later.' },
    { w: 'revise', d: 'Change the IDEAS: add, cut, reorder, clarify.' },
    { w: 'edit', d: 'Fix the RULES: spelling, punctuation, grammar.' }
  ],
  visual: [
    { type: 'cycle', title: 'The writing process',
      steps: [{ l: 'Plan', d: 'gather + organize' }, { l: 'Draft', d: 'get it down fast' }, { l: 'Revise', d: 'change the ideas' }, { l: 'Edit', d: 'fix the rules' }],
      center: 'Publish', centerSub: 'when it is ready',
      caption: 'You can loop back. But never draft and edit at the same time.' },
    { type: 'decide', question: 'Which stage am I in?', branches: [
      { if: 'I do not know what to say yet', then: 'PLANNING. Stop writing sentences. Make a list or a map.' },
      { if: 'I know what to say but the page is blank', then: 'DRAFTING. Write badly on purpose. Speed over quality.' },
      { if: 'It is all down but something is missing or out of order', then: 'REVISING. Work on ideas, not commas.' },
      { if: 'The ideas are right but there are errors', then: 'EDITING. Now you fix commas.' }
    ] }
  ],
  steps: [
    'PLAN: brainstorm, list, or map. Do not write full sentences yet.',
    'DRAFT: write straight through without stopping to fix anything. Leave blanks if you get stuck.',
    'Take a break, even a short one. You cannot revise something you just wrote.',
    'REVISE: read for ideas only. Add what is missing, cut what wanders, reorder what is out of sequence.',
    'EDIT: now read for errors. Spelling, punctuation, grammar, capitalization.',
    'PUBLISH: final read, then submit.'
  ],
  example: { prompt: 'You are 20 minutes into a draft and keep rereading and fixing your first paragraph.',
    work: ['Rereading and fixing is editing.', 'You are supposed to be drafting.', 'Editing while drafting kills momentum and you never finish.', 'Fix: turn off the urge to correct. Write to the end, then come back.'],
    answer: 'You are editing during the drafting stage. Push to the end first.' },
  traps: [
    'Editing while drafting. It is the most common reason writing takes forever.',
    'Skipping planning because you are in a hurry. Planning saves more time than it costs.',
    'Calling proofreading "revising." Revising changes ideas; editing changes correctness.',
    'Revising immediately after drafting. Take a break so you read what is there, not what you meant.'
  ],
  check: [
    { q: 'What is the difference between revising and editing?', a: 'Revising changes ideas and organization. Editing fixes spelling, grammar, and punctuation.' },
    { q: 'What should you do if you get stuck mid-draft?', a: 'Leave a blank or a note and keep going. Come back in revision.' },
    { q: 'Which stage should never overlap with drafting?', a: 'Editing.' }
  ],
  links: [
    { t: 'Purdue OWL: The Writing Process', u: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html', d: 'Each stage explained. Best for grades 6-8.' },
    { t: 'ReadWriteThink: Printouts', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Planning organizers you can print.' }
  ],
  note: 'frayer'
},
{
  id: 'w-planning', subject: 'writing', unit: 'The writing process', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Planning before you write',
  alt: 'brainstorm outline plan prewriting graphic organizer mapping freewriting',
  stuck: ['I have no ideas', 'I have ideas but no order'],
  teks: ['3.11.A', '4.11.A', '5.11.A', '6.10.A', '7.10.A', '8.10.A'],
  apps: ['AlphaWrite'],
  plain: 'Planning is not writing a rough version. It is deciding what you will say and in what order, using a form that is faster than sentences: a list, a map, or a chart.',
  why: 'The TEKS name brainstorming, freewriting, and mapping specifically. Students who plan finish faster, even under a timer.',
  words: [
    { w: 'brainstorm', d: 'Dump every idea without judging it.' },
    { w: 'freewrite', d: 'Write nonstop for a set time without stopping to think.' },
    { w: 'graphic organizer', d: 'A chart or map that shows how your ideas connect.' }
  ],
  visual: [
    { type: 'decide', question: 'Which planning tool fits my problem?', branches: [
      { if: 'I have no ideas at all', then: 'Freewrite for 3 minutes without stopping. Do not lift your pen.' },
      { if: 'I have lots of ideas but no shape', then: 'Brainstorm a list, then group similar items and name each group.' },
      { if: 'I am writing an essay', then: 'Outline: thesis, then one line per body paragraph.' },
      { if: 'I am writing a story', then: 'Plot arc: setup, problem, rising action, climax, resolution.' },
      { if: 'I am comparing two things', then: 'Venn diagram or two-column chart.' }
    ] },
    { type: 'hierarchy', levels: [
      { items: ['THESIS or BIG IDEA'] },
      { items: ['Point 1', 'Point 2', 'Point 3'] },
      { items: ['evidence', 'evidence', 'evidence'] }
    ], note: 'An essay outline is three lines plus evidence. That is enough to start drafting.' }
  ],
  steps: [
    'Read the prompt twice and underline exactly what it asks for.',
    'Note the genre, audience, and purpose. Those three decide everything else.',
    'If you have no ideas, freewrite for three minutes without stopping.',
    'If you have too many, list them all and then group the ones that belong together.',
    'Choose an order. Usually strongest point last, or chronological for narrative.',
    'Write your plan as a short outline. Then and only then start drafting.'
  ],
  example: { prompt: 'Prompt: "Should students have homework? Write an argumentative essay."',
    work: ['Genre: argumentative. Audience: teachers/adults. Purpose: persuade.', 'Brainstorm: practice, family time, unequal home support, teaches responsibility, causes stress.', 'Pick a side: limited homework.', 'Group into three points: practice value, time cost, fairness at home.', 'Order: practice value (concede), time cost, fairness (strongest last).'],
    answer: 'A three-point outline ready to draft, in about four minutes.' },
  traps: [
    'Skipping planning under time pressure. Four minutes of planning saves fifteen minutes of rewriting.',
    'Writing full sentences in the plan. Use fragments. It is faster.',
    'Planning without rereading the prompt. Half of off-topic essays start here.',
    'Making a plan and then ignoring it while you draft.'
  ],
  check: [
    { q: 'What three things should you identify from any prompt?', a: 'Genre, audience, and purpose.' },
    { q: 'You have no ideas at all. What is the move?', a: 'Freewrite for three minutes without stopping.' },
    { q: 'How long should an essay outline be?', a: 'A thesis plus one line per body paragraph. That is enough.' }
  ],
  links: [
    { t: 'ReadWriteThink: Printouts', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Free graphic organizers for every genre.' },
    { t: 'ReadWriteThink: Compare and Contrast', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/compare-contrast', d: 'Plan a comparison piece online.' }
  ],
  note: 'strategy'
},
{
  id: 'w-topic-sentence', subject: 'writing', unit: 'Paragraphs', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Writing a topic sentence',
  alt: 'topic sentence paragraph opening main idea sentence controlling idea',
  stuck: ['My paragraphs just start', 'What makes a good topic sentence?'],
  teks: ['3.11.B', '4.11.B', '5.11.B', '6.10.B', '7.10.B', '8.10.B'],
  apps: ['AlphaWrite'],
  plain: 'A topic sentence tells the reader what this one paragraph is going to prove. It should be a claim, not a fact and not an announcement.',
  why: 'AlphaWrite builds from sentences to paragraphs to essays, and a weak topic sentence makes every sentence after it look disorganized.',
  words: [
    { w: 'topic sentence', d: 'The sentence that states what this paragraph will show.' },
    { w: 'controlling idea', d: 'The specific point the rest of the paragraph must support.' }
  ],
  visual: [
    { type: 'table', title: 'Weak vs strong topic sentences', head: ['Weak', 'Why', 'Strong'],
      rows: [['I am going to talk about bees.', 'announces instead of claiming', 'Bees do far more for farming than most people realize.'],
             ['Bees are insects.', 'a fact, nothing to prove', 'Bees are the reason a third of our food exists.'],
             ['Bees.', 'not a sentence', 'Without bees, entire crops would fail.'],
             ['There are many reasons homework is bad.', 'vague, promises a list', 'Homework costs students time that they need for sleep and family.']] },
    { type: 'hamburger', layers: [
      { l: 'Topic sentence', d: 'the claim this paragraph will prove' },
      { l: 'Evidence', d: 'a fact, quote, or example' },
      { l: 'Explanation', d: 'how the evidence proves the claim' },
      { l: 'More evidence', d: 'a second support' },
      { l: 'Closing sentence', d: 'ties back to the claim' }
    ] }
  ],
  steps: [
    'Decide the ONE point this paragraph will make. If you cannot say it in one sentence, the paragraph is trying to do too much.',
    'Write it as a claim: something a reader could agree or disagree with.',
    'Do not announce ("I will explain…"). Just state the point.',
    'Make it specific enough to guide the rest of the paragraph.',
    'After drafting the paragraph, reread your topic sentence. Does every other sentence support it?',
    'If a sentence does not support it, move it to another paragraph or cut it.'
  ],
  example: { prompt: 'Improve: "This paragraph is about why school should start later."',
    work: ['It announces rather than claims.', 'What is the actual point? That teenagers need more sleep than early starts allow.', 'State it directly as a claim.'],
    answer: '"Starting school before 8:00 forces teenagers to lose the sleep their bodies most need."' },
  traps: [
    'Announcing: "In this paragraph I will…" Just make the point.',
    'Stating a plain fact. A fact needs no support, so there is nothing to write about.',
    'Making it so broad that the paragraph wanders.',
    'Writing the topic sentence first and then never checking whether the paragraph delivered it.'
  ],
  check: [
    { q: 'Is "Dogs are mammals" a good topic sentence?', a: 'No. It is a fact with nothing to prove.' },
    { q: 'What should you check after drafting a paragraph?', a: 'That every sentence supports the topic sentence.' },
    { q: 'How many main points should one paragraph make?', a: 'One.' }
  ],
  links: [
    { t: 'Reading Rockets: Paragraph Hamburger', u: 'https://www.readingrockets.org/classroom/classroom-strategies/paragraph-hamburger', d: 'The paragraph structure organizer.' },
    { t: 'Reading Rockets: Framed Paragraphs', u: 'https://www.readingrockets.org/classroom/classroom-strategies/framed-paragraphs', d: 'Sentence frames to get you started.' }
  ],
  note: 'steps'
},
{
  id: 'w-paragraph-structure', subject: 'writing', unit: 'Paragraphs', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Building a full paragraph',
  alt: 'paragraph structure hamburger topic evidence explanation closing body paragraph',
  stuck: ['My paragraph is three sentences long', 'I said my point but I have nothing else to write'],
  teks: ['3.11.B', '4.11.B', '5.11.B', '6.10.B', '7.10.B', '8.10.B'],
  apps: ['AlphaWrite'],
  plain: 'A paragraph makes one point and proves it. The shape is always the same: state the point, give evidence, explain how the evidence proves the point, and close.',
  why: 'Short paragraphs are almost never a lack of ideas. They are a missing explanation step.',
  words: [
    { w: 'evidence', d: 'A fact, quote, statistic, or example.' },
    { w: 'elaboration', d: 'The sentences that explain HOW your evidence proves your point.' }
  ],
  visual: [
    { type: 'hamburger', layers: [
      { l: 'Topic sentence', d: 'the claim' },
      { l: 'Evidence 1', d: 'quote, fact, or example' },
      { l: 'Explain', d: 'this shows … because …' },
      { l: 'Evidence 2', d: 'a second support' },
      { l: 'Explain + close', d: 'tie back to the claim' }
    ], caption: 'The layer students skip is "explain." That is why paragraphs come out short.' },
    { type: 'table', title: 'Elaboration sentence starters', head: ['Move', 'Starter'],
      rows: [['Explain the evidence', 'This shows that…'], ['Connect to the claim', 'This matters because…'],
             ['Add a consequence', 'As a result…'], ['Give an example', 'For instance…'],
             ['Address the other side', 'Some might argue… however…']] }
  ],
  steps: [
    'Write the topic sentence: the one point this paragraph proves.',
    'Give your first piece of evidence. Introduce it, do not just drop it in.',
    'Explain it. Write at least two sentences saying how it proves your point.',
    'Add a second piece of evidence if you have one.',
    'Explain that one too.',
    'Close by connecting back to your topic sentence, using different words.'
  ],
  example: { prompt: 'Your paragraph is: "Homework takes too much time. Students spend two hours a night on it. That is too much."',
    work: ['Topic sentence: present.', 'Evidence: the two-hour statistic.', 'Explanation: "That is too much" is an opinion restated, not an explanation.', 'Fix: explain what those two hours cost.'],
    answer: '"Homework takes too much of a student\'s day. Middle schoolers report spending nearly two hours a night on assignments. Those two hours come directly out of sleep, family time, and activities that build the skills school cannot teach. A student who finishes homework at 10 p.m. arrives the next morning too tired to learn from the lesson that homework was meant to reinforce."' },
  traps: [
    'Dropping in a quote with no lead-in and no explanation.',
    'Restating your claim instead of explaining your evidence.',
    'Putting two different points into one paragraph. Split it.',
    'Ending the paragraph the moment the evidence is on the page.'
  ],
  check: [
    { q: 'Which part of the paragraph do students most often skip?', a: 'The explanation of the evidence.' },
    { q: 'How many main points per paragraph?', a: 'One.' },
    { q: 'What is wrong with "That is too much" as an explanation?', a: 'It restates the opinion instead of explaining what the evidence shows.' }
  ],
  links: [
    { t: 'Reading Rockets: Paragraph Hamburger', u: 'https://www.readingrockets.org/classroom/classroom-strategies/paragraph-hamburger', d: 'The classic paragraph organizer.' },
    { t: 'ReadWriteThink: Printouts', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Printable paragraph frames.' }
  ],
  note: 'steps'
},
{
  id: 'w-thesis', subject: 'writing', unit: 'Essays', grades: ['5', '6', '7', '8'],
  title: 'Writing a thesis statement',
  alt: 'thesis statement claim central idea essay controlling idea',
  stuck: ['My thesis is just the topic', 'How is a thesis different from a topic sentence?'],
  teks: ['5.12.C', '6.11.B', '7.11.B', '8.11.B'],
  apps: ['AlphaWrite'],
  plain: 'A thesis is the one sentence your whole essay exists to prove. It has to be arguable: if nobody could disagree with it, it is a topic, not a thesis.',
  why: 'A vague thesis produces a vague essay. Fixing the thesis fixes everything downstream.',
  words: [
    { w: 'thesis', d: 'The central claim of the whole essay.' },
    { w: 'arguable', d: 'A reasonable person could disagree.' }
  ],
  visual: [
    { type: 'table', title: 'Testing a thesis', head: ['Test', 'Ask', 'Fails if'],
      rows: [['Arguable?', 'Could someone disagree?', 'It is a plain fact'],
             ['Specific?', 'Does it name what and why?', 'It could apply to any topic'],
             ['Provable?', 'Can I support it with evidence?', 'It is only a feeling'],
             ['One sentence?', 'Is it stated in a single sentence?', 'It rambles across three']] },
    { type: 'table', title: 'Weak to strong', head: ['Version', 'Problem'],
      rows: [['Homework is a topic people discuss.', 'not a claim at all'],
             ['Homework is bad.', 'arguable but vague: bad how?'],
             ['Schools should limit homework because it cuts into sleep and widens the gap between students with and without support at home.', 'arguable, specific, and it previews the reasons']] }
  ],
  steps: [
    'State your position on the prompt in one sentence.',
    'Test it: could a reasonable person disagree? If not, it is a fact: sharpen it.',
    'Add the "because." The reasons are what make it specific.',
    'Check that you can actually support each reason with evidence.',
    'Put it at the end of your introduction, where readers expect it.',
    'After drafting, reread it. If the essay went somewhere else, change the thesis to match. That is normal.'
  ],
  example: { prompt: 'Prompt: Should schools have longer lunch periods? Turn "lunch is too short" into a thesis.',
    work: ['"Lunch is too short" is a claim, but vague.', 'Why does it matter? Students do not finish eating, and they get no break.', 'Add the because.'],
    answer: '"Schools should extend lunch to at least thirty minutes, because a rushed lunch means students eat less and return to class without the mental break that afternoon learning requires."' },
  traps: [
    'Announcing the topic instead of taking a position.',
    'Writing a thesis nobody could disagree with.',
    'Making it so broad you cannot cover it in the essay you have time for.',
    'Never revising the thesis after the essay evolved.'
  ],
  check: [
    { q: 'Is "There are three types of volcanoes" a thesis?', a: 'No. It is a fact. Nobody can disagree.' },
    { q: 'Where does the thesis usually go?', a: 'At the end of the introduction.' },
    { q: 'What word usually makes a thesis specific?', a: '"Because": it forces you to name your reasons.' }
  ],
  links: [
    { t: 'Purdue OWL: The Writing Process', u: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html', d: 'Includes thesis development.' }
  ],
  note: 'steps'
},
{
  id: 'w-evidence-elaboration', subject: 'writing', unit: 'Essays', grades: ['4', '5', '6', '7', '8'],
  title: 'Using evidence and elaborating on it',
  alt: 'evidence elaboration quote integration commentary analysis support',
  stuck: ['I have quotes but my essay still feels thin', 'How much explaining is enough?'],
  teks: ['4.12.C', '5.12.C', '6.11.B', '7.11.B', '8.11.B'],
  apps: ['AlphaWrite'],
  plain: 'Evidence is what you found. Elaboration is what you make of it. A quote sitting alone proves nothing. The reader needs you to explain how it supports your point.',
  why: 'On most rubrics, elaboration is worth more than evidence. Students collect quotes and stop, which is exactly where the points are lost.',
  words: [
    { w: 'lead-in', d: 'The words that introduce a quote so it fits the sentence.' },
    { w: 'elaboration', d: 'Your explanation of what the evidence means and why it matters.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Make your claim in your own words.',
      'Introduce the evidence with a lead-in: "According to the article," or "The author explains that…"',
      'Give the evidence: quote it exactly or paraphrase it.',
      'Explain what it means in your own words: "This shows…"',
      'Explain why it matters to your claim: "This matters because…"',
      'Aim for at least two sentences of explanation for every one sentence of evidence.'
    ], caption: 'The 1-to-2 rule: one line of evidence, two lines of explanation.' },
    { type: 'table', title: 'Kinds of evidence', head: ['Type', 'Example', 'Best for'],
      rows: [['Direct quote', '"Bees pollinate 35% of crops."', 'when the exact wording matters'],
             ['Statistic', 'Over a third of crops rely on bees.', 'showing scale'],
             ['Example', 'Almond orchards hire beekeepers each spring.', 'making it concrete'],
             ['Expert opinion', 'Dr. Chen argues that…', 'building credibility']] }
  ],
  steps: [
    'State your claim first, in your own words.',
    'Choose the evidence that most directly supports it: not just the one you found first.',
    'Introduce it. Never drop a quote in on its own line.',
    'Quote it exactly, inside quotation marks, or paraphrase it accurately.',
    'Explain what it means, then explain why it supports your claim.',
    'Check the ratio: for every line of evidence, aim for two lines of your own thinking.'
  ],
  example: { prompt: 'Improve: "School should start later. "Teens who start after 8:30 report better focus." So school should start later."',
    work: ['The quote is dropped in with no lead-in.', 'The explanation just repeats the claim.', 'Add a lead-in and real elaboration.'],
    answer: '"School should start later for middle and high schoolers. A recent sleep study found that "teens who start after 8:30 report better focus." That finding matters because focus is the thing every other academic skill depends on: a student who cannot concentrate in first period loses the lesson entirely, no matter how well it is taught."' },
  traps: [
    'Dropping a quote with no introduction. It reads as if it fell out of the sky.',
    'Following a quote with a sentence that just repeats your claim.',
    'Using evidence that is near your point but does not actually support it.',
    'Writing more evidence than explanation. The explanation is where you earn the score.'
  ],
  check: [
    { q: 'What is the ratio to aim for?', a: 'About one line of evidence to two lines of explanation.' },
    { q: 'What is a lead-in?', a: 'The words that introduce a quote so it fits into your sentence.' },
    { q: 'What is wrong with repeating your claim after a quote?', a: 'It is not elaboration. You have to explain what the evidence shows.' }
  ],
  links: [
    { t: 'CommonLit', u: 'https://www.commonlit.org/', d: 'Passages to practice finding and using evidence.' },
    { t: 'Purdue OWL: The Writing Process', u: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html', d: 'Integrating sources.' }
  ],
  note: 'steps'
},
{
  id: 'w-intros-conclusions', subject: 'writing', unit: 'Essays', grades: ['4', '5', '6', '7', '8'],
  title: 'Introductions and conclusions',
  alt: 'introduction hook conclusion so what restate thesis essay opening ending',
  stuck: ['I do not know how to start', 'My conclusion just repeats my introduction'],
  teks: ['4.12.B', '5.12.B', '6.11.B', '7.11.B', '8.11.B'],
  apps: ['AlphaWrite'],
  plain: 'An introduction moves from wide to narrow: hook, context, thesis. A conclusion moves from narrow to wide: restate the point in new words, then answer "so what?"',
  why: 'These are the two paragraphs every reader remembers, and both have a reliable shape you can reuse.',
  words: [
    { w: 'hook', d: 'The first sentence that makes a reader want to continue.' },
    { w: 'so what', d: 'Why this matters beyond the essay itself.' }
  ],
  visual: [
    { type: 'table', title: 'The two shapes', head: ['Introduction (wide → narrow)', 'Conclusion (narrow → wide)'],
      rows: [['1. Hook: question, surprising fact, or brief scene', '1. Restate the thesis in NEW words'],
             ['2. Context: what the reader needs to know', '2. Pull the main points together in one sentence'],
             ['3. Thesis: your claim, last sentence of the paragraph', '3. So what: why this matters beyond the essay']] },
    { type: 'table', title: 'Hooks that work and hooks that do not', head: ['Works', 'Does not work'],
      rows: [['A surprising statistic', '"Have you ever wondered…"'],
             ['A short specific scene', '"Since the beginning of time…"'],
             ['A sharp question with a real answer', '"In this essay I will…"'],
             ['A brief telling detail', 'A dictionary definition']] }
  ],
  steps: [
    'Write the body paragraphs FIRST. It is far easier to introduce something that already exists.',
    'For the introduction, open with a hook that belongs to your actual topic.',
    'Add one or two sentences of context so the reader can follow.',
    'End the introduction with your thesis.',
    'For the conclusion, restate your thesis using different words.',
    'Pull your main points together in a sentence.',
    'Finish with "so what": the reason this matters outside the essay.'
  ],
  example: { prompt: 'Write a conclusion for an essay arguing for later school start times.',
    work: ['Restate the thesis in new words.', 'Gather the points: sleep science, focus, and fairness.', 'So what: this is a change schools can actually make.'],
    answer: '"Moving the first bell back is not about giving teenagers a lie-in. It is about matching the school day to the way teenage brains actually work, so that the hours students spend in class are hours they can use. Districts cannot change how adolescents sleep. They can change when the day begins."' },
  traps: [
    'Starting with "Have you ever wondered" or "Since the beginning of time." Both are empty.',
    'Opening with a dictionary definition.',
    'Writing a conclusion that copies the introduction word for word.',
    'Introducing brand new evidence in the conclusion. That belongs in a body paragraph.',
    'Ending with "In conclusion." Just conclude.'
  ],
  check: [
    { q: 'Where does the thesis go in the introduction?', a: 'At the end, as the last sentence.' },
    { q: 'What is the "so what" of a conclusion?', a: 'The reason your argument matters beyond the essay.' },
    { q: 'Should you write the introduction first?', a: 'Usually not. Write the body first, then introduce it.' }
  ],
  links: [
    { t: 'Purdue OWL: The Writing Process', u: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html', d: 'Essay structure guidance.' }
  ],
  note: 'steps'
},
{
  id: 'w-transitions', subject: 'writing', unit: 'Essays', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Transitions that show how ideas connect',
  alt: 'transitions transition words linking words coherence flow first next however',
  stuck: ['My writing jumps around', 'I use "and then" for everything'],
  teks: ['3.11.C', '4.11.C', '5.11.C', '6.10.C', '7.10.C', '8.10.C'],
  apps: ['AlphaWrite'],
  plain: 'A transition tells the reader what relationship the next idea has to the last one. Picking the right one is not decoration. It is the difference between a list and an argument.',
  why: 'Coherence is scored directly, and it is the difference between writing that feels organized and writing that feels like separate sentences.',
  words: [
    { w: 'transition', d: 'A word or phrase showing how ideas connect.' },
    { w: 'coherence', d: 'Ideas flowing in an order the reader can follow.' }
  ],
  visual: [
    { type: 'table', title: 'Transitions by the relationship they show', head: ['Relationship', 'Words'],
      rows: [['Adding', 'also, in addition, furthermore, moreover'],
             ['Contrasting', 'however, although, on the other hand, yet, despite'],
             ['Cause and effect', 'because, therefore, as a result, consequently, since'],
             ['Sequence', 'first, next, then, meanwhile, finally'],
             ['Example', 'for example, for instance, specifically, in particular'],
             ['Emphasis', 'in fact, indeed, most importantly'],
             ['Conclusion', 'overall, ultimately, in short']] },
    { type: 'flow', steps: [
      'Read two sentences in a row.',
      'Ask: is the second one adding, contrasting, causing, or exemplifying?',
      'Pick a transition from that row of the table.',
      'Put it at the start of the second sentence and punctuate it correctly.',
      'Reread. If the transition does not match the actual relationship, it makes the writing worse, not better.'
    ] }
  ],
  steps: [
    'Draft first, without worrying about transitions.',
    'On revision, read each pair of consecutive sentences.',
    'Name the relationship between them.',
    'Choose a transition from that category.',
    'Vary them. Using "however" five times in a paragraph is as bad as using none.',
    'Check punctuation: most transitions at the start of a sentence take a comma after them.'
  ],
  example: { prompt: 'Add transitions: "Homework builds practice. It takes time away from sleep. Schools should limit how much they assign."',
    work: ['Sentence 2 contrasts with sentence 1 → however.', 'Sentence 3 is the result of sentences 1 and 2 → therefore.'],
    answer: '"Homework builds practice. However, it takes time away from sleep. Therefore, schools should limit how much they assign."' },
  traps: [
    'Using "and then" for every relationship. It only shows sequence.',
    'Choosing a transition that contradicts the real relationship, like using "however" between two sentences that agree.',
    'Starting every sentence with a transition. Use them where the connection is not obvious.',
    'Forgetting the comma after an introductory transition.'
  ],
  check: [
    { q: 'Which transition shows contrast?', a: 'However, although, on the other hand, yet.' },
    { q: 'Which shows cause and effect?', a: 'Because, therefore, as a result, consequently.' },
    { q: 'What punctuation follows most opening transitions?', a: 'A comma.' }
  ],
  links: [
    { t: 'Reading Rockets: Transition Words', u: 'https://www.readingrockets.org/classroom/classroom-strategies/transition-words', d: 'Transition words grouped by relationship.' }
  ],
  note: 'steps'
},
{
  id: 'w-informational-essay', subject: 'writing', unit: 'Genres', grades: ['4', '5', '6', '7', '8'],
  title: 'Writing an informational or explanatory piece',
  alt: 'informational writing expository explain report central idea supporting evidence',
  stuck: ['I just listed facts', 'How is this different from an argument?'],
  teks: ['4.12.B', '5.12.B', '6.11.B', '7.11.B', '8.11.B'],
  apps: ['AlphaWrite'],
  plain: 'Informational writing teaches the reader something. Unlike an argument, you are not taking a side: but you still need a central idea, or you end up with a pile of facts and no shape.',
  why: 'This is the most-assigned writing genre in middle school and the easiest one to accidentally turn into a list.',
  words: [
    { w: 'central idea', d: 'The one thing you want the reader to understand.' },
    { w: 'text structure', d: 'How you organize: by category, by cause, by sequence, or by comparison.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Decide your central idea: what should the reader understand when they finish?',
      'Choose a structure: categories, chronological, cause-effect, or compare-contrast.',
      'Group your facts under that structure. Each group becomes a paragraph.',
      'Write a topic sentence for each group.',
      'Add evidence and explain it.',
      'Write an introduction that states the central idea, and a conclusion that answers "so what."'
    ] },
    { type: 'decide', question: 'Which structure fits my topic?', branches: [
      { if: 'My topic has natural parts or types', then: 'Categories: one paragraph per type.' },
      { if: 'My topic is a process or a history', then: 'Chronological: in order.' },
      { if: 'My topic is about why something happens', then: 'Cause and effect.' },
      { if: 'My topic involves two things', then: 'Compare and contrast.' }
    ] }
  ],
  steps: [
    'Write your central idea as one sentence before you research anything else.',
    'Gather facts from at least two sources.',
    'Choose an organizing structure and sort your facts into it.',
    'Draft one paragraph per group, each with a topic sentence.',
    'Explain each fact: do not just list it.',
    'Write the introduction last, then a conclusion that says why this matters.'
  ],
  example: { prompt: 'You have twelve facts about hurricanes and no plan.',
    work: ['Central idea: hurricanes are predictable enough that preparation saves lives.', 'Structure: cause and effect works: how they form, what they do, how people prepare.', 'Sort the twelve facts into those three groups.', 'Three body paragraphs, one per group.'],
    answer: 'Three paragraphs organized by cause and effect, each with a topic sentence and explained evidence.' },
  traps: [
    'Listing facts with no organizing idea. The reader cannot tell what matters.',
    'Copying from sources. Paraphrase and cite.',
    'Slipping into argument. Informational writing explains; it does not take sides.',
    'Choosing a structure that fights the topic, like forcing a process into a compare-contrast shape.'
  ],
  check: [
    { q: 'What is the difference between informational and argumentative writing?', a: 'Informational explains something; argumentative takes a position and defends it.' },
    { q: 'What should you decide before you sort your facts?', a: 'Your central idea and your organizing structure.' },
    { q: 'How many sources should you use?', a: 'At least two, so you can check facts against each other.' }
  ],
  links: [
    { t: 'ReadWriteThink: Printouts', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Organizers for informational writing.' },
    { t: 'Ducksters', u: 'https://www.ducksters.com/', d: 'Student-level source material to practice with.' }
  ],
  note: 'strategy'
},
{
  id: 'w-argumentative', subject: 'writing', unit: 'Genres', grades: ['4', '5', '6', '7', '8'],
  title: 'Writing an argument or opinion essay',
  alt: 'argumentative essay opinion claim reasons counterargument rebuttal persuade',
  stuck: ['I just said my opinion over and over', 'What is a counterargument for?'],
  teks: ['4.12.C', '5.12.C', '6.11.C', '7.11.C', '8.11.C'],
  apps: ['AlphaWrite'],
  plain: 'An argument takes a clear position and supports it with reasons and evidence. What separates a strong argument from a rant is that it also deals honestly with the other side.',
  why: 'Argumentative writing is the dominant genre from grade 6 onward, and the counterargument is the part that most raises a score.',
  words: [
    { w: 'claim', d: 'Your position, stated clearly.' },
    { w: 'reason', d: 'Why your claim is true.' },
    { w: 'counterargument', d: 'The strongest point the other side would make.' },
    { w: 'rebuttal', d: 'Your response to the counterargument.' }
  ],
  visual: [
    { type: 'hierarchy', levels: [
      { items: ['CLAIM: your position'] },
      { items: ['Reason + evidence', 'Reason + evidence', 'Counterargument + rebuttal'] }
    ], note: 'The third body paragraph is where most of the improvement lives.' },
    { type: 'table', title: 'Counterargument sentence frames', head: ['Move', 'Frame'],
      rows: [['Name the other side fairly', 'Some argue that ___ because ___.'],
             ['Concede what is true', 'It is true that ___.'],
             ['Turn back to your claim', 'However, ___ outweighs this because ___.'],
             ['Close the door', 'Even accounting for ___, the evidence still shows ___.']] }
  ],
  steps: [
    'Pick a side. A genuinely balanced essay is not an argument.',
    'Write your claim as a single arguable sentence.',
    'List two or three reasons and find evidence for each.',
    'Write one body paragraph per reason: claim, evidence, explanation.',
    'Write a counterargument paragraph: state the other side fairly, concede what is true, then explain why your position still holds.',
    'Order your reasons with the strongest last.',
    'Conclude with why this matters.'
  ],
  example: { prompt: 'Write a counterargument paragraph for "schools should limit homework."',
    work: ['Other side: homework builds independent practice and responsibility.', 'Concede: that is genuinely true for some subjects.', 'Rebut: the benefit levels off quickly, and past a certain point homework costs more sleep than it gains practice.'],
    answer: '"Some argue that homework builds the independent practice students need, and for skills like math fluency that is genuinely true. However, research consistently shows the benefit levels off after about an hour in middle school. Past that point, additional assignments buy very little practice while costing sleep, which is the single largest predictor of next-day learning. Limiting homework does not remove the benefit: it stops paying for it with something more valuable."' },
  traps: [
    'Repeating your opinion instead of giving reasons.',
    'Skipping the counterargument. Addressing it makes you look stronger, not weaker.',
    'Presenting the other side in a weak, easy-to-knock-down form. Take their best point.',
    'Using only feelings as evidence. Facts, statistics, and examples carry more weight.',
    'Attacking people who disagree instead of addressing their reasoning.'
  ],
  check: [
    { q: 'Why include a counterargument?', a: 'It shows you considered the other side and your position still holds.' },
    { q: 'Where should your strongest reason go?', a: 'Last, so it is what the reader remembers.' },
    { q: 'What is a rebuttal?', a: 'Your response explaining why the counterargument does not defeat your claim.' }
  ],
  links: [
    { t: 'CommonLit', u: 'https://www.commonlit.org/', d: 'Argumentative texts to model and respond to.' },
    { t: 'Newsela', u: 'https://newsela.com/', d: 'Current-issue articles at your reading level.' }
  ],
  note: 'steps'
},
{
  id: 'w-narrative', subject: 'writing', unit: 'Genres', grades: ['2', '3', '4', '5', '6', '7', '8'],
  title: 'Writing a personal narrative or story',
  alt: 'personal narrative story writing show dont tell dialogue sensory details',
  stuck: ['My story is just a list of what happened', 'How do I make it interesting?'],
  teks: ['3.12.A', '4.12.A', '5.12.A', '6.11.A', '7.11.A', '8.11.A'],
  apps: ['AlphaWrite'],
  plain: 'A narrative is not a report of your day. It zooms in on one small moment and slows it down, using detail and dialogue so the reader experiences it rather than being told about it.',
  why: 'The most common narrative problem is scope: covering a whole week in a page instead of ten minutes in a page.',
  words: [
    { w: 'small moment', d: 'One short slice of time, told in detail.' },
    { w: 'show, do not tell', d: 'Give the details that let readers conclude the feeling themselves.' },
    { w: 'sensory detail', d: 'What you saw, heard, smelled, felt, or tasted.' }
  ],
  visual: [
    { type: 'table', title: 'Telling vs showing', head: ['Telling', 'Showing'],
      rows: [['I was nervous.', 'My hands would not stay still, so I sat on them.'],
             ['The room was loud.', 'I could not hear my own name being called.'],
             ['She was angry.', 'She closed the laptop very slowly and did not look up.'],
             ['It was a good day.', 'We stayed until the lights came on in the parking lot.']],
      note: 'Showing is not longer. It is more specific.' },
    { type: 'plotarc', l1: 'Set the scene', l2: 'Something starts to go wrong', l3: 'The moment it turns', l4: 'What follows', l5: 'What it meant',
      caption: 'Even a personal narrative has an arc. Find the turn.' }
  ],
  steps: [
    'Pick ONE moment, not a whole event. Ten minutes, not a weekend.',
    'Find the turn: the instant something changed.',
    'Start close to the action, not with waking up in the morning.',
    'Use sensory details: what you actually saw and heard.',
    'Show feelings through actions instead of naming them.',
    'Add dialogue for the important exchanges. Punctuate it correctly.',
    'End with what the moment meant, without stating a moral.'
  ],
  example: { prompt: 'Rewrite: "I was nervous before the game. Then we played and we won and I was happy."',
    work: ['Whole event compressed into two sentences.', 'Feelings are named rather than shown.', 'Pick the moment: the final minute.', 'Show nervousness through a physical detail.'],
    answer: '"With a minute left I could hear my own breathing over the crowd. Coach said my name and I pretended not to hear it, because if I heard it I would have to go in. I went in. When the whistle went, I was still standing exactly where he had put me, and somehow that had been enough."' },
  traps: [
    'Covering too much time. Narrow to one moment.',
    'Starting with "I woke up" or "One day."',
    'Naming feelings instead of showing them.',
    'Ending with an explicit moral: "And that is why you should always try your best."',
    'Writing dialogue with no quotation marks or with every line in one paragraph.'
  ],
  check: [
    { q: 'How much time should a personal narrative cover?', a: 'One small moment, not a whole day or trip.' },
    { q: 'Rewrite "he was excited" as showing.', a: 'Something like: "He read the message three times before he said anything."' },
    { q: 'Where should a narrative start?', a: 'Close to the action, not at the beginning of the day.' }
  ],
  links: [
    { t: 'Reading Rockets: Descriptive Writing', u: 'https://www.readingrockets.org/classroom/classroom-strategies/descriptive-writing', d: 'Building sensory detail.' },
    { t: 'ReadWriteThink: Comic Creator', u: 'https://www.readwritethink.org/classroom-resources/student-interactives/comic-creator', d: 'Plan a narrative visually first.' }
  ],
  note: 'strategy'
},
{
  id: 'w-revise-vs-edit', subject: 'writing', unit: 'The writing process', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Revising is not editing',
  alt: 'revise edit proofread difference add delete rearrange substitute ARMS CUPS',
  stuck: ['I "revised" but my score did not change', 'I only fixed spelling'],
  teks: ['3.11.C', '4.11.C', '5.11.C', '6.10.C', '7.10.C', '8.10.C'],
  apps: ['AlphaWrite'],
  plain: 'Revising changes what your writing SAYS. Editing changes whether it is CORRECT. Fixing every comma in a piece with a weak argument does not improve it.',
  why: 'When AlphaWrite returns a draft, the feedback is usually about ideas. Responding to it with a spell-check is why scores stay flat.',
  words: [
    { w: 'revise', d: 'Add, cut, move, or replace ideas.' },
    { w: 'edit', d: 'Fix spelling, punctuation, grammar, and capitalization.' }
  ],
  visual: [
    { type: 'table', title: 'Two different jobs', head: ['REVISE (ideas)', 'EDIT (correctness)'],
      rows: [['Add: what is missing?', 'Capitalization'],
             ['Remove: what wanders off topic?', 'Usage: right word, right form'],
             ['Move: what is out of order?', 'Punctuation'],
             ['Substitute: what word is vague?', 'Spelling']],
      note: 'Revise first. There is no point perfecting the punctuation of a sentence you are about to cut.' },
    { type: 'flow', steps: [
      'Read your draft once for IDEAS only. Ignore every error you see.',
      'Ask: is anything missing that a reader would need?',
      'Ask: is anything here that does not belong?',
      'Ask: is anything in the wrong order?',
      'Ask: are any words vague: "stuff," "things," "good," "a lot"?',
      'Make those changes. THEN do a separate pass for spelling and punctuation.'
    ] }
  ],
  steps: [
    'Do revising and editing as two separate passes. Never together.',
    'Revision pass one: read for ideas. Add what is missing.',
    'Revision pass two: cut anything off topic, even if you like it.',
    'Revision pass three: check the order. Would a different sequence be clearer?',
    'Revision pass four: replace vague words with precise ones.',
    'Only now, edit: spelling, punctuation, grammar, capitalization.',
    'Read the final version out loud. Your ear catches what your eye skips.'
  ],
  example: { prompt: 'Your feedback says "needs more support in paragraph 2." What do you do?',
    work: ['This is feedback about ideas, so it is a revision note.', 'Fixing commas will not address it.', 'Go to paragraph 2, find the claim, and add evidence plus explanation.'],
    answer: 'Revise paragraph 2 by adding evidence and elaboration: not by proofreading it.' },
  traps: [
    'Calling proofreading "revising" and wondering why the score does not move.',
    'Refusing to cut a sentence you worked hard on that does not serve the piece.',
    'Doing both passes at once so neither gets done properly.',
    'Editing on screen only. Reading aloud catches things silent reading does not.'
  ],
  check: [
    { q: 'Which comes first, revising or editing?', a: 'Revising. Fix the ideas before you fix the commas.' },
    { q: 'Feedback says "your conclusion does not follow from your evidence." Revision or editing?', a: 'Revision. It is about ideas.' },
    { q: 'Name the four revision moves.', a: 'Add, remove, move, substitute.' }
  ],
  links: [
    { t: 'Reading Rockets: Revising', u: 'https://www.readingrockets.org/classroom/classroom-strategies/revising', d: 'Revision strategies with examples.' },
    { t: 'Reading Rockets: Writing Conferences', u: 'https://www.readingrockets.org/classroom/classroom-strategies/writing-conferences', d: 'How to talk about a draft.' }
  ],
  note: 'strategy'
},
{
  id: 'w-word-choice-voice', subject: 'writing', unit: 'Craft', grades: ['4', '5', '6', '7', '8'],
  title: 'Word choice, tone, and voice',
  alt: 'word choice diction tone voice precise words vague words register formal',
  stuck: ['My writing sounds boring', 'My teacher says my tone is too casual'],
  teks: ['4.11.C', '5.11.C', '6.10.C', '7.10.C', '8.10.C'],
  apps: ['AlphaWrite'],
  plain: 'Precise words carry more information than long ones. Voice is how your writing sounds; tone is your attitude toward the subject. Both come mostly from word choice.',
  why: 'Swapping a handful of vague words for precise ones is the fastest visible improvement you can make to a draft.',
  words: [
    { w: 'tone', d: 'Your attitude toward the subject: serious, playful, urgent.' },
    { w: 'voice', d: 'What makes your writing sound like you.' },
    { w: 'register', d: 'How formal the writing is, matched to the audience.' }
  ],
  visual: [
    { type: 'table', title: 'Vague to precise', head: ['Vague', 'Precise'],
      rows: [['stuff, things', 'name the actual thing'],
             ['good, bad', 'effective, careless, thorough, rushed'],
             ['a lot, very', 'give the number, or pick a stronger word'],
             ['said (every time)', 'argued, admitted, insisted, whispered'],
             ['went', 'sprinted, wandered, marched, slipped'],
             ['nice', 'generous, patient, welcoming']],
      note: 'Precise does not mean long. "Slipped" is shorter than "went quietly."' },
    { type: 'decide', question: 'Is my register right?', branches: [
      { if: 'School essay or anything assessed', then: 'Formal. No slang, no contractions, no "you."' },
      { if: 'Personal narrative', then: 'Your natural voice is fine. Contractions are fine.' },
      { if: 'Email to a teacher', then: 'Polite and formal, but shorter than an essay.' },
      { if: 'I am not sure', then: 'Go one notch more formal than you think you need.' }
    ] }
  ],
  steps: [
    'Draft without worrying about word choice.',
    'On revision, circle every vague word: stuff, things, good, bad, a lot, very, nice.',
    'Replace each one with something specific.',
    'Delete "very" and "really" and pick a stronger word instead.',
    'Check your register against your audience.',
    'Read it out loud. If it does not sound like a person, it is probably over-formal rather than under.'
  ],
  example: { prompt: 'Improve: "The book was really good and had a lot of interesting stuff about the war."',
    work: ['"really good" is vague → what specifically was good?', '"a lot of interesting stuff" → name it.', '"the war" → which war?'],
    answer: '"The book made the First World War feel immediate, largely because it quoted soldiers\' letters instead of summarizing them."' },
  traps: [
    'Swapping in long words from a thesaurus without checking what they mean.',
    'Confusing formal with complicated. Formal writing can be simple and clear.',
    'Overusing "very" and "really" instead of choosing a stronger word.',
    'Using slang or texting abbreviations in an assessed piece.'
  ],
  check: [
    { q: 'Replace "very tired" with one word.', a: 'Exhausted, drained, or worn out.' },
    { q: 'What is register?', a: 'How formal your writing is, matched to your audience.' },
    { q: 'What is the risk of using a thesaurus?', a: 'Picking a word that sounds impressive but does not mean what you think.' }
  ],
  links: [
    { t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Check what a word actually means before you use it.' },
    { t: 'Reading Rockets: Semantic Gradients', u: 'https://www.readingrockets.org/classroom/classroom-strategies/semantic-gradients', d: 'Shades of meaning between similar words.' }
  ],
  note: 'strategy'
},
{
  id: 'w-timed-writing', subject: 'writing', unit: 'Craft', grades: ['5', '6', '7', '8'],
  title: 'Writing well under a time limit',
  alt: 'timed writing on demand prompt test essay pacing planning under pressure',
  stuck: ['I run out of time every time', 'I spend so long planning I never finish'],
  teks: ['6.10.A', '7.10.A', '8.10.A', '6.10.B', '7.10.B', '8.10.B'],
  apps: ['AlphaWrite'],
  plain: 'Timed writing is a pacing problem, not a writing problem. If you divide the time before you start and hold to it, you will finish: and a finished average essay always beats an unfinished excellent one.',
  why: 'Standardized Writing Fundamentals is specifically about on-demand writing, and unfinished responses are the most common way points are lost.',
  words: [
    { w: 'on-demand writing', d: 'Writing produced in one sitting, under time pressure, from a prompt.' }
  ],
  visual: [
    { type: 'table', title: 'How to split your time (example: 45 minutes)', head: ['Stage', 'Time', 'What you do'],
      rows: [['Read the prompt', '2 min', 'underline the task, note genre and audience'],
             ['Plan', '5 min', 'thesis plus one line per body paragraph'],
             ['Draft', '30 min', 'write straight through, do not stop to fix'],
             ['Revise + edit', '8 min', 'one pass for ideas, one for errors']],
      note: 'Write the times on your paper before you start writing anything else.' },
    { type: 'flow', steps: [
      'Write your time checkpoints at the top of the page first.',
      'Read the prompt twice and underline exactly what is being asked.',
      'Plan for a fixed number of minutes, then stop planning even if it is not perfect.',
      'Draft without rereading. If you get stuck, leave a blank and keep moving.',
      'When your drafting time ends, stop and write the conclusion even if a body paragraph is thin.',
      'Use the last minutes to revise, then edit.'
    ] }
  ],
  steps: [
    'Before writing anything, divide the total time and write the checkpoints down.',
    'Spend the first two minutes on the prompt alone. Off-topic essays score near zero regardless of quality.',
    'Plan briefly. A thesis and three body-paragraph lines is enough.',
    'Draft straight through without rereading.',
    'Protect the conclusion. Always leave time for it: an essay that stops mid-paragraph reads as unfinished.',
    'Spend the last few minutes on one revision pass and one editing pass.'
  ],
  example: { prompt: 'You have 30 minutes. How do you split it?',
    work: ['Prompt: 1 minute.', 'Plan: 4 minutes.', 'Draft: 20 minutes.', 'Revise and edit: 5 minutes.'],
    answer: '1 / 4 / 20 / 5. Write those checkpoints down before you start.' },
  traps: [
    'Planning until the plan is perfect. Set a timer and stop when it goes.',
    'Rereading and polishing paragraph one while paragraph three never gets written.',
    'Running out of time before the conclusion. Cut a body paragraph short rather than skip the ending.',
    'Misreading the prompt. A brilliant essay on the wrong question scores nothing.'
  ],
  check: [
    { q: 'What should you do in the first two minutes?', a: 'Read the prompt carefully and underline exactly what it asks for.' },
    { q: 'What should you protect time for, no matter what?', a: 'The conclusion.' },
    { q: 'Should you reread while drafting?', a: 'No. Draft straight through and reread in the revision pass.' }
  ],
  links: [
    { t: 'Purdue OWL: The Writing Process', u: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html', d: 'Process guidance that adapts to timed conditions.' }
  ],
  note: 'strategy'
},
{
  id: 'w-citing-sources', subject: 'writing', unit: 'Research writing', grades: ['5', '6', '7', '8'],
  title: 'Citing sources and avoiding plagiarism',
  alt: 'cite sources bibliography works cited plagiarism paraphrase quote credit',
  stuck: ['How much do I have to change for it to be my own words?', 'What goes in a bibliography?'],
  teks: ['5.13.F', '5.13.G', '6.12.F', '6.12.G', '7.12.G', '8.12.H'],
  apps: ['AlphaWrite'],
  plain: 'If an idea or a set of words came from somewhere else, you say where. Quoting means using the exact words in quotation marks. Paraphrasing means putting it fully in your own words: and you still credit the source.',
  why: 'Plagiarism is usually accidental: students paraphrase too lightly or lose track of which notes were copied.',
  words: [
    { w: 'plagiarism', d: 'Presenting someone else\'s words or ideas as your own.' },
    { w: 'paraphrase', d: 'Restate an idea completely in your own words, with credit.' },
    { w: 'bibliography', d: 'The list of sources you used, at the end.' }
  ],
  visual: [
    { type: 'table', title: 'Original, plagiarized, and acceptable', head: ['Version', 'Text', 'Verdict'],
      rows: [['Original', 'Bees pollinate roughly one third of the crops humans eat.', '—'],
             ['Too close', 'Bees pollinate about one third of the crops that humans eat.', 'PLAGIARISM: same structure, swapped words'],
             ['Proper paraphrase', 'About a third of the food on our plates depends on bees moving pollen between plants (Chen, 2023).', 'ACCEPTABLE'],
             ['Direct quote', 'As Chen notes, "Bees pollinate roughly one third of the crops humans eat."', 'ACCEPTABLE']] },
    { type: 'flow', steps: [
      'Read the source passage.',
      'Close it or turn it over. Do not look at it.',
      'Write the idea from memory in your own words.',
      'Open the source and compare. If your sentence structure matches, rewrite it.',
      'Add the credit: author, or title if there is no author.',
      'Record the full source details in your bibliography as you go, not at the end.'
    ] }
  ],
  steps: [
    'Take notes in your own words from the start. Do not copy and paste.',
    'If you copy exact words for later quoting, put quotation marks around them immediately.',
    'To paraphrase, read, look away, and write from memory. Then check.',
    'Changing a few words is not paraphrasing. The sentence structure must be yours too.',
    'Credit the source whether you quoted or paraphrased.',
    'Build the bibliography as you research: title, author, date, and where you found it.'
  ],
  example: { prompt: 'You want to use a fact from an article. What are your options?',
    work: ['Option 1: quote it exactly, in quotation marks, with the author named.', 'Option 2: paraphrase it fully in your own words, and still name the author.', 'Either way, add the source to your bibliography.'],
    answer: 'Quote it or paraphrase it: but credit it either way.' },
  traps: [
    'Thinking that changing a few words counts as paraphrasing. The structure must change too.',
    'Copying into your notes and later forgetting which parts were copied.',
    'Believing that only quotes need credit. Ideas need credit as well.',
    'Leaving the bibliography until the end and not being able to find your sources again.'
  ],
  check: [
    { q: 'Does a paraphrase need a citation?', a: 'Yes. The idea still came from someone else.' },
    { q: 'What is the safest way to paraphrase?', a: 'Read it, look away, write from memory, then check against the original.' },
    { q: 'When should you build your bibliography?', a: 'As you research, not at the end.' }
  ],
  links: [
    { t: 'Purdue OWL: The Writing Process', u: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html', d: 'Research and source guidance.' }
  ],
  note: 'steps'
}

]);

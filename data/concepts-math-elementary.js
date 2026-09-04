/* ============================================================
   MATH: Kindergarten through Grade 5
   TEKS codes are Chapter 111 Subchapter A (Mathematics, Adopted 2012).
   Every code in this file is checked by tools/validate-teks.py.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

/* ---------------- Counting & early number ---------------- */
{
  id: 'm-count-to-20', subject: 'math', unit: 'Counting and early number', grades: ['K'],
  title: 'Counting to 20 without losing your place',
  alt: 'counting forward backward one more one less',
  stuck: ['I skip a number when I count', 'I lose track of what I already counted'],
  teks: ['K.2.A', 'K.2.C', 'K.2.F'],
  apps: ['Zearn', 'AlphaMath', 'Math Raiders'],
  plain: 'Counting means saying the number names in order AND touching one thing for each name you say. The last number you say is how many there are altogether.',
  why: 'Every single thing you do in math later sits on top of this. Adding is just counting on. Subtracting is counting back.',
  words: [
    { w: 'count on', d: 'Start at a number and keep going up: 6, 7, 8…' },
    { w: 'count back', d: 'Start at a number and go down: 8, 7, 6…' },
    { w: 'one more', d: 'The very next number you say when counting up.' }
  ],
  visual: [
    { type: 'tenframe', filled: 7, frames: 2, label: '7', title: 'Ten frames make numbers easy to see', caption: 'Fill the top row first. Then you can see "7" without counting every dot.' },
    { type: 'numberline', min: 0, max: 20, title: 'Count on from 14', ticks: [0, 5, 10, 15, 20].map(function (v) { return { v: v, l: String(v), big: true }; }), points: [{ v: 14, l: '14' }], jumps: [{ from: 14, to: 17, l: '+3' }], caption: 'Start at 14. Hop three times: 15, 16, 17.' }
  ],
  steps: [
    'Point to one object each time you say a number. One touch, one number.',
    'Move each object you have counted to a different pile so you cannot count it twice.',
    'Say the numbers out loud, even quietly. Your ears catch skips your eyes miss.',
    'The last number you say is the answer. You do not have to recount.',
    'To find one more, say the next number. To find one less, say the number before.'
  ],
  example: { prompt: 'How many counters are there? (There are 12 counters in a pile.)',
    work: ['Slide one counter to the side and say "one."', 'Keep sliding and counting: two, three, four… twelve.', 'There are no counters left in the first pile.'],
    answer: '12 counters. The last number I said was twelve.' },
  traps: [
    'Counting the same object twice because you never moved it out of the pile.',
    'Saying the numbers fast but pointing slow, so your words get ahead of your finger.',
    'Forgetting the teen numbers: it goes 12, 13, 14: not 12, 14, 15.',
    'Thinking you must start over at 1. If the screen shows 14 and asks for 3 more, count on from 14.'
  ],
  check: [
    { q: 'You count a pile and the last number you say is 9. How many are in the pile?', a: '9. The last number you say is always how many there are.' },
    { q: 'What is one less than 16?', a: '15: the number you say right before 16.' },
    { q: 'Count on 2 from 18. What do you land on?', a: '20. (18 → 19 → 20)' }
  ],
  links: [
    { t: 'Math Learning Center: Number Frames', u: 'https://apps.mathlearningcenter.org/', d: 'Drag counters into ten frames and see the number take shape.' },
    { t: 'Khan Academy: Early math', u: 'https://www.khanacademy.org/math/early-math', d: 'Short videos on counting and number order.' }
  ],
  note: 'steps'
},
{
  id: 'm-make-ten', subject: 'math', unit: 'Counting and early number', grades: ['K', '1', '2'],
  title: 'Making ten (the strategy that unlocks fact fluency)',
  alt: 'make a ten bridging ten friends of ten number bonds',
  stuck: ['I have to count on my fingers every time', 'The timer beats me on facts like 8 + 5'],
  teks: ['K.2.I', '1.3.C', '1.3.D', '2.4.B'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath', 'Math Raiders'],
  plain: 'Ten is the easiest number in math. When a problem is hard, you break one number apart so you can build a ten first, then add on whatever is left over.',
  why: 'This is the difference between working out 8 + 5 every time and just knowing it. Speed on fluency apps comes from strategies, not from counting faster.',
  words: [
    { w: 'partner to ten', d: 'The number that gets you to 10. The partner of 8 is 2.' },
    { w: 'decompose', d: 'To break a number into smaller parts. 5 can break into 2 and 3.' }
  ],
  visual: [
    { type: 'tenframe', filled: 10, frames: 2, label: '8 + 5 becomes 10 + 3', title: '8 + 5: move 2 over to fill the ten', caption: 'Take 2 from the 5 to finish the first ten frame. Now it is 10 + 3, which you already know.' },
    { type: 'table', title: 'Partners to ten: learn these cold', head: ['Number', 'Partner to 10'], rows: [['1', '9'], ['2', '8'], ['3', '7'], ['4', '6'], ['5', '5']], note: 'They work both ways: 9 + 1 and 1 + 9.' }
  ],
  steps: [
    'Look at the bigger number. Ask: what does it need to become 10?',
    'Break the smaller number into that partner plus whatever is left.',
    'Add the partner to make ten.',
    'Add the leftover onto the ten. Teen numbers are easy: 10 + 3 is thirteen.'
  ],
  example: { prompt: '8 + 5 = ?',
    work: ['8 needs 2 more to reach 10.', 'Break 5 into 2 and 3.', '8 + 2 = 10.', '10 + 3 = 13.'],
    answer: '13' },
  traps: [
    'Breaking apart the bigger number instead of the smaller one. Always break the smaller one.',
    'Forgetting to add the leftover. 8 + 2 = 10 is not the answer; you still owe 3.',
    'Using this on numbers already easy for you. If you just know 6 + 6, do not slow yourself down.',
    'Practicing by counting on fingers under the desk. That gets you the answer but never gets you faster.'
  ],
  check: [
    { q: '9 + 6. What is the partner and what is left over?', a: '9 needs 1. Break 6 into 1 and 5. 9 + 1 = 10, then 10 + 5 = 15.' },
    { q: '7 + 5', a: '7 needs 3. Break 5 into 3 and 2. 10 + 2 = 12.' },
    { q: 'Why does nobody use this for 5 + 5?', a: 'Because you already know it instantly. Strategies are for the facts you do not know yet.' }
  ],
  links: [
    { t: 'Math is Fun: Addition', u: 'https://www.mathsisfun.com/numbers/addition.html', d: 'Addition strategies with pictures.' },
    { t: 'Math Learning Center: Number Frames', u: 'https://apps.mathlearningcenter.org/', d: 'Build the ten yourself and watch it work.' }
  ],
  note: 'strategy'
},
{
  id: 'm-place-value-2digit', subject: 'math', unit: 'Place value', grades: ['1', '2'],
  title: 'Tens and ones: what the digits actually mean',
  alt: 'place value two digit numbers expanded form bundling',
  stuck: ['I mix up 41 and 14', 'I do not get why the 4 is worth more'],
  teks: ['1.2.B', '1.2.C', '2.2.A', '2.2.B'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'The same digit is worth different amounts depending on where it sits. In 41, the 4 is not four. It is four tens, which is forty. Position is everything.',
  why: 'Regrouping, comparing numbers, and rounding all depend on you reading the columns instead of the digits.',
  words: [
    { w: 'digit', d: 'A single number symbol: 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.' },
    { w: 'expanded form', d: 'Writing the number as its parts added: 41 = 40 + 1.' },
    { w: 'bundle', d: 'To trade 10 ones for 1 ten.' }
  ],
  visual: [
    { type: 'placevalue', columns: ['Tens', 'Ones'], digits: [4, 1], title: 'The number 41', note: '4 tens (40) and 1 one (1) → 41' },
    { type: 'placevalue', columns: ['Tens', 'Ones'], digits: [1, 4], title: 'The number 14', note: '1 ten (10) and 4 ones (4) → 14. Same digits, very different number.' }
  ],
  steps: [
    'Start at the right. That column is always ones.',
    'The next column left is tens. Each thing in that column is worth ten.',
    'Read the tens digit and say it as tens: "4 tens is forty."',
    'Add the ones on: forty and one is forty-one.',
    'To check, write it in expanded form: 40 + 1 = 41.'
  ],
  example: { prompt: 'Write 6 tens and 3 ones as a number, and in expanded form.',
    work: ['6 tens = 60.', '3 ones = 3.', '60 + 3 = 63.'],
    answer: '63, or 60 + 3' },
  traps: [
    'Reading left to right like a word. The 4 in 41 is not "four," it is "forty."',
    'Writing 401 for "four tens and one one". You cannot write the 40 out in full inside the number.',
    'Forgetting that 10 ones must be traded for 1 ten. You can never have 10 or more in a single column.',
    'Ignoring a zero. In 40 the zero is doing real work: it holds the ones place open.'
  ],
  check: [
    { q: 'In the number 87, what is the 8 worth?', a: '80. It is 8 tens.' },
    { q: 'Which is bigger, 29 or 92? How do you know without counting?', a: '92. Compare the tens first: 9 tens beats 2 tens.' },
    { q: 'Expanded form of 50?', a: '50 + 0, or just 50. Five tens and zero ones.' }
  ],
  links: [
    { t: 'Math is Fun: Place Value', u: 'https://www.mathsisfun.com/place-value.html', d: 'Clear chart of what each column is worth.' },
    { t: 'Toy Theater: virtual base ten blocks', u: 'https://toytheater.com/category/teacher-tools/virtual-manipulatives/', d: 'Build the number out of tens and ones yourself.' }
  ],
  note: 'steps'
},
{
  id: 'm-compare-numbers', subject: 'math', unit: 'Place value', grades: ['K', '1', '2', '3', '4'],
  title: 'Comparing numbers with >, <, and =',
  alt: 'greater than less than equal compare order numbers',
  stuck: ['I never remember which way the sign points', 'Which is bigger, 3,089 or 3,890?'],
  teks: ['K.2.G', '1.2.E', '1.2.G', '2.2.D', '4.2.C'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'To compare two numbers, you do not look at the whole thing at once. You line them up and compare one place-value column at a time, starting from the left.',
  why: 'Comparing is how you check whether an answer is even reasonable. If your answer is smaller than what you started with and it should be bigger, you caught your own mistake.',
  words: [
    { w: '>', d: 'greater than. 8 > 3.' },
    { w: '<', d: 'less than. 3 < 8.' },
    { w: '=', d: 'equal to. Both sides have the same value.' }
  ],
  visual: [
    { type: 'placevalue', columns: ['Thousands', 'Hundreds', 'Tens', 'Ones'], digits: [3, 0, 8, 9], title: 'Line them up: 3,089', note: 'Same thousands as below. Move right and compare hundreds.' },
    { type: 'placevalue', columns: ['Thousands', 'Hundreds', 'Tens', 'Ones'], digits: [3, 8, 9, 0], title: 'And 3,890', note: '8 hundreds beats 0 hundreds, so 3,890 > 3,089. Stop there. The rest does not matter.' },
    { type: 'decide', question: 'Which sign do I write?', branches: [
      { if: 'Left number is bigger', then: 'Use >   (example: 47 > 12)' },
      { if: 'Right number is bigger', then: 'Use <   (example: 12 < 47)' },
      { if: 'They are the same', then: 'Use =   (example: 47 = 47)' }
    ] }
  ],
  steps: [
    'Write the two numbers one above the other so the place-value columns line up.',
    'Start at the far LEFT column, not the right.',
    'Compare those two digits. If one is bigger, that number is bigger: stop immediately.',
    'If the digits are the same, move one column right and compare again.',
    'Write the sign so the open, wide end faces the bigger number. The point always aims at the smaller one.'
  ],
  example: { prompt: 'Compare 4,507 and 4,570.',
    work: ['Thousands: 4 and 4. Same. Move right.', 'Hundreds: 5 and 5. Same. Move right.', 'Tens: 0 and 7. 7 is bigger.', 'So 4,570 is the bigger number.'],
    answer: '4,507 < 4,570' },
  traps: [
    'Comparing from the right. The ones place almost never decides it.',
    'Thinking a longer number is always bigger: true for whole numbers, false for decimals (0.9 is bigger than 0.15).',
    'Writing the sign backwards. Say it out loud: "four thousand five hundred seven is LESS THAN four thousand five hundred seventy."',
    'Forgetting to line up the columns, so you compare a hundreds digit against a tens digit.'
  ],
  check: [
    { q: 'Which sign goes between 6,204 and 6,240?', a: '< . Thousands and hundreds tie, then 0 tens is less than 4 tens.' },
    { q: 'Is 999 or 1,002 bigger?', a: '1,002. It has a thousands digit; 999 does not.' },
    { q: 'The open end of > faces which number?', a: 'The bigger one. The point faces the smaller one.' }
  ],
  links: [
    { t: 'Math is Fun: Place Value', u: 'https://www.mathsisfun.com/place-value.html', d: 'Use the chart to line numbers up.' }
  ],
  note: 'strategy'
},
{
  id: 'm-add-sub-regroup', subject: 'math', unit: 'Adding and subtracting', grades: ['2', '3', '4'],
  title: 'Regrouping (carrying and borrowing) without losing digits',
  alt: 'carrying borrowing regroup trade column addition subtraction',
  stuck: ['My answer is off by exactly 10 or 100', 'I do not know when to borrow'],
  teks: ['2.4.C', '2.4.D', '3.4.A', '4.4.A'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'A column can never hold 10 or more. When it does, you trade ten of them for one of the next column left. Subtracting works the same way in reverse: if you do not have enough, you unpack one from the column to the left.',
  why: 'Almost every "close but wrong" answer in multi-digit arithmetic is a regrouping slip, not a fact error.',
  words: [
    { w: 'regroup', d: 'Trade 10 of one place for 1 of the next place up (or the reverse).' },
    { w: 'carry', d: 'The 1 you move to the top of the next column when adding.' },
    { w: 'borrow', d: 'Unpacking 1 ten into 10 ones so you have enough to subtract.' }
  ],
  visual: [
    { type: 'placevalue', columns: ['Hundreds', 'Tens', 'Ones'], digits: [3, 6, 8], title: '368 + 47: start in the ones', note: '8 + 7 = 15. That is 1 ten and 5 ones. The ten cannot stay in the ones column.' },
    { type: 'flow', steps: [
      'Line the numbers up by place value. Ones under ones.',
      'Add (or subtract) the ones column only.',
      'If adding and you get 10 or more, write the ones digit and carry the ten above the tens column.',
      'If subtracting and the top digit is too small, cross out the digit to its left, make it one smaller, and put a 1 in front of the top digit.',
      'Move one column left and repeat until you run out of columns.'
    ], caption: 'The same loop for every column. Never skip a column.' }
  ],
  steps: [
    'Line the numbers up by place value, not by the left edge. Ones under ones.',
    'Work right to left. Always start in the ones column.',
    'Adding: if a column totals 10 or more, write only the ones digit and carry the extra ten on top of the next column.',
    'Subtracting: if the top digit is smaller than the bottom digit, go one column left, take 1, and add 10 to the top digit.',
    'Do not forget the carried digit when you add the next column.',
    'Estimate to check: round both numbers and see if your answer is close.'
  ],
  example: { prompt: '502 − 348 = ?',
    work: ['Ones: 2 − 8 does not work. Go left. But the tens digit is 0, so go left again.', 'Take 1 from the 5 hundreds: now 4 hundreds and 10 tens.', 'Take 1 from those 10 tens: now 9 tens and 12 ones.', 'Ones: 12 − 8 = 4.', 'Tens: 9 − 4 = 5.', 'Hundreds: 4 − 3 = 1.'],
    answer: '154' },
  traps: [
    'Carrying but then forgetting to add the carried 1 into the next column. Circle it so you see it.',
    'Subtracting the smaller digit from the bigger one in each column no matter which is on top. 2 − 8 is not 6.',
    'Borrowing across a zero and stopping halfway. When there is a 0, you have to go further left.',
    'Lining numbers up by the left edge when they have different lengths. 502 and 48 must line up at the ones.'
  ],
  check: [
    { q: 'In 47 + 38, what do you write in the ones place and what do you carry?', a: '7 + 8 = 15. Write 5, carry 1 ten.' },
    { q: '400 − 156. Why do you have to borrow twice?', a: 'The tens digit is 0, so you cannot borrow from it directly. You unpack a hundred into tens first, then a ten into ones.' },
    { q: 'Estimate 612 + 289 to check an answer of 901.', a: '600 + 300 = 900. 901 is right next to that, so it is reasonable.' }
  ],
  links: [
    { t: 'Math is Fun: Subtraction by Regrouping', u: 'https://www.mathsisfun.com/numbers/subtraction-regrouping.html', d: 'Step-by-step borrowing with pictures.' },
    { t: 'Khan Academy: Arithmetic', u: 'https://www.khanacademy.org/math/arithmetic', d: 'Videos for multi-digit addition and subtraction.' }
  ],
  note: 'steps'
},
{
  id: 'm-rounding', subject: 'math', unit: 'Place value', grades: ['3', '4', '5'],
  title: 'Rounding and estimating',
  alt: 'round to nearest ten hundred thousand estimate',
  stuck: ['I round the wrong digit', 'What does "round to the nearest hundred" even mean?'],
  teks: ['3.2.C', '3.4.B', '4.2.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Rounding means moving a number to the nearest "friendly" number. You look at the digit just to the RIGHT of the place you are rounding to, and that digit alone decides whether you go up or stay.',
  why: 'Estimating first tells you roughly what your answer should be. That is how you catch an answer that is ten times too big.',
  words: [
    { w: 'round up', d: 'Move to the next higher friendly number.' },
    { w: 'round down', d: 'Stay at the friendly number you are already past.' },
    { w: 'estimate', d: 'A quick, close-enough answer used to check a real one.' }
  ],
  visual: [
    { type: 'numberline', min: 340, max: 350, title: 'Round 347 to the nearest ten',
      ticks: [{ v: 340, l: '340', big: true }, { v: 345, l: '345 (halfway)', big: false }, { v: 350, l: '350', big: true }],
      points: [{ v: 347, l: '347' }], caption: '347 sits past the halfway mark, so it is closer to 350.' },
    { type: 'decide', question: 'Look at the digit to the RIGHT of the rounding place', branches: [
      { if: 'It is 0, 1, 2, 3 or 4', then: 'Round DOWN: keep the digit the same, zero out everything to the right.' },
      { if: 'It is 5, 6, 7, 8 or 9', then: 'Round UP: add 1 to the digit, zero out everything to the right.' }
    ] }
  ],
  steps: [
    'Underline the digit in the place you are rounding to.',
    'Look at the one digit immediately to its right. That is the only digit that decides.',
    'If that digit is 5 or more, add 1 to your underlined digit. If it is 4 or less, leave the underlined digit alone.',
    'Change every digit to the right of the underlined one into a zero.',
    'Do not touch anything to the LEFT of the underlined digit unless carrying forced you to.'
  ],
  example: { prompt: 'Round 2,486 to the nearest hundred.',
    work: ['Hundreds digit is 4. Underline it: 2,4̲86.', 'The digit to its right is 8.', '8 is 5 or more, so round up: 4 becomes 5.', 'Zero out the rest: 2,500.'],
    answer: '2,500' },
  traps: [
    'Looking at the last digit of the number instead of the digit right after the rounding place. For hundreds, you look at the tens digit, not the ones.',
    'Rounding twice in a row. 2,449 to the nearest hundred is 2,400: do not first round to 2,450 and then to 2,500.',
    'Forgetting to zero out. Rounding 347 to the nearest ten gives 350, not 357.',
    'Panicking on 9s. Rounding 396 to the nearest ten makes 39 tens become 40 tens, which is 400. That is correct.'
  ],
  check: [
    { q: 'Round 1,250 to the nearest hundred.', a: '1,300. The tens digit is 5, so round up.' },
    { q: 'Round 8,432 to the nearest thousand.', a: '8,000. The hundreds digit is 4, so round down.' },
    { q: 'Estimate 487 + 212. Is 699 reasonable?', a: '500 + 200 = 700. Yes, 699 is reasonable.' }
  ],
  links: [
    { t: 'Math is Fun: Rounding Numbers', u: 'https://www.mathsisfun.com/rounding-numbers.html', d: 'The rule plus a rounding machine to try.' },
    { t: 'Math is Fun: Estimation', u: 'https://www.mathsisfun.com/numbers/estimation.html', d: 'When and how to estimate.' }
  ],
  note: 'steps'
},

/* ---------------- Multiplication & division ---------------- */
{
  id: 'm-multiplication-meaning', subject: 'math', unit: 'Multiplication and division', grades: ['3', '4'],
  title: 'What multiplication actually means',
  alt: 'equal groups arrays repeated addition times',
  stuck: ['I memorized the facts but word problems still confuse me', 'When do I multiply instead of add?'],
  teks: ['3.4.D', '3.4.E', '3.4.K'],
  apps: ['AlphaMath'],
  plain: 'Multiplication is equal groups. 4 × 6 means four groups with six in each group. That is why it is faster than adding 6 + 6 + 6 + 6. It is the same thing, packaged.',
  why: 'If you only know facts as memorized noises, word problems break you. If you know what multiplication means, you can tell when a problem calls for it.',
  words: [
    { w: 'factor', d: 'One of the numbers being multiplied.' },
    { w: 'product', d: 'The answer to a multiplication.' },
    { w: 'array', d: 'Objects arranged in equal rows and columns.' }
  ],
  visual: [
    { type: 'areamodel', title: '4 × 6 as an array: 4 rows of 6', rows: ['row', 'row', 'row', 'row'], cols: [1, 2, 3, 4, 5, 6],
      cells: [['•', '•', '•', '•', '•', '•'], ['•', '•', '•', '•', '•', '•'], ['•', '•', '•', '•', '•', '•'], ['•', '•', '•', '•', '•', '•']],
      total: '4 rows × 6 in each row = 24', caption: 'Count the rows, count what is in one row, multiply.' },
    { type: 'decide', question: 'Add or multiply?', branches: [
      { if: 'The groups are all the same size', then: 'Multiply. "5 bags with 8 marbles each" → 5 × 8' },
      { if: 'The groups are different sizes', then: 'Add. "A bag with 8, a bag with 3, a bag with 11" → 8 + 3 + 11' }
    ] }
  ],
  steps: [
    'Find the number of groups. That is one factor.',
    'Find how many are in each group. That is the other factor.',
    'Check that every group really is the same size. If not, you cannot multiply.',
    'Multiply the two factors. Write a unit on your answer: 24 what?',
    'Sanity check: the product should be bigger than either factor (unless you multiplied by 0 or 1).'
  ],
  example: { prompt: 'There are 7 tables. Each table has 4 chairs. How many chairs?',
    work: ['Number of groups: 7 tables.', 'Size of each group: 4 chairs.', 'Every table has the same number, so multiply.', '7 × 4 = 28.'],
    answer: '28 chairs' },
  traps: [
    'Multiplying when the groups are not equal. Read carefully for "each," "every," and "per."',
    'Answering with a bare number. 28 what? Chairs. The unit is part of the answer.',
    'Thinking 4 × 6 and 6 × 4 are different problems. They give the same product, though they describe different pictures.',
    'Forgetting that anything times 0 is 0, no matter how big the other factor is.'
  ],
  check: [
    { q: 'Which word in a problem usually signals equal groups?', a: '"Each," "every," or "per." Example: 6 boxes with 9 pencils each.' },
    { q: 'Write 5 + 5 + 5 as a multiplication.', a: '3 × 5 (three groups of five) = 15.' },
    { q: 'A shelf holds 8 books. There are 3 shelves. How many books?', a: '3 × 8 = 24 books.' }
  ],
  links: [
    { t: 'Math is Fun: Multiplication tables', u: 'https://www.mathsisfun.com/tables.html', d: 'The full table plus patterns that make facts easier.' },
    { t: 'Khan Academy: Grade 3 math', u: 'https://www.khanacademy.org/math/cc-third-grade-math', d: 'Videos on equal groups and arrays.' }
  ],
  note: 'steps'
},
{
  id: 'm-mult-fact-strategies', subject: 'math', unit: 'Multiplication and division', grades: ['3', '4'],
  title: 'Multiplication facts: strategies instead of brute memorizing',
  alt: 'times tables fluency automaticity facts 7x8',
  stuck: ['The fluency timer always beats me', 'I know most facts but 7 × 8 and 6 × 7 stop me'],
  teks: ['3.4.F', '3.5.C'],
  apps: ['AlphaMath', 'Math Raiders'],
  plain: 'You do not have 100 facts to learn. You have about a dozen hard ones. Everything else comes from patterns you already know, or from a fact you know sitting right next door.',
  why: 'Fluency apps score correct-answers-per-minute. Counting up gets the right answer too slowly. A strategy gets you there in one step.',
  words: [
    { w: 'automaticity', d: 'Knowing it instantly, without working it out.' },
    { w: 'near fact', d: 'A fact you already know that sits next to the one you need.' }
  ],
  visual: [
    { type: 'table', title: 'The patterns that kill most of the table', head: ['Facts', 'The shortcut'],
      rows: [['× 0', 'Always 0'], ['× 1', 'The number itself'], ['× 2', 'Double it'], ['× 5', 'Half of × 10'], ['× 9', '× 10, then subtract one group'], ['× 10', 'Add a zero']],
      note: 'That covers six of the ten columns before you memorize anything.' },
    { type: 'flow', steps: [
      'Is it × 0, × 1, × 2, × 5, × 9, or × 10? Use the pattern.',
      'Is it a square (6 × 6, 7 × 7, 8 × 8)? Those are worth memorizing straight.',
      'Otherwise, find a near fact you know and adjust by one group.',
      'Say it out loud as a whole sentence: "seven times eight is fifty-six."',
      'The next day, check the same fact cold. If it is slow, it is not learned yet.'
    ] }
  ],
  steps: [
    'Take a fact test and mark only the ones that were slow or wrong. That is your real list: usually 10 to 15 facts.',
    'For each hard fact, pick a strategy: double a known fact, or start from a × 10 and subtract.',
    'Say the fact as a complete sentence when you practice, not just the answer.',
    'Practice in short bursts, several times a day. Ten minutes now beats an hour on Friday.',
    'Test yourself cold the next day. If you had to think, it is not fluent yet.'
  ],
  example: { prompt: '7 × 8 keeps stopping me.',
    work: ['I know 7 × 4 = 28.', '8 is double 4, so 7 × 8 is double 28.', 'Double 28 = 56.', 'Or: 7 × 10 = 70, minus two 7s (14), gives 56.'],
    answer: '56. And now say it out loud five times: "seven times eight is fifty-six."' },
  traps: [
    'Practicing all 100 facts every day. You waste your time on the ones you already own.',
    'Counting on fingers during timed practice. You get credit for that answer but you build no speed.',
    'Skip counting from 1 to get there (7, 14, 21, 28…). It works, but it is far too slow for the timer.',
    'Only ever practicing in order. Fact tests do not go in order.'
  ],
  check: [
    { q: 'Use × 10 to get 9 × 6.', a: '10 × 6 = 60. Subtract one 6: 60 − 6 = 54.' },
    { q: 'Use doubling to get 6 × 8.', a: '3 × 8 = 24. Double it: 48.' },
    { q: 'Why is × 5 half of × 10?', a: 'Because 5 is half of 10. 8 × 10 = 80, so 8 × 5 = 40.' }
  ],
  links: [
    { t: 'Math is Fun: Multiplication tables', u: 'https://www.mathsisfun.com/tables.html', d: 'Patterns and printable tables.' }
  ],
  note: 'strategy'
},
{
  id: 'm-area-model-mult', subject: 'math', unit: 'Multiplication and division', grades: ['3', '4', '5'],
  title: 'Multiplying big numbers with an area model',
  alt: 'partial products box method area model 23 x 47 two digit',
  stuck: ['My answer for 23 × 47 is way too small', 'I do not know where to put the second row'],
  teks: ['4.4.C', '4.4.D', '5.3.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Break both numbers into their place-value parts, multiply every part by every part, then add up all the pieces. It looks longer than the standard algorithm but it is far harder to get wrong, and it shows you exactly what the algorithm is doing.',
  why: 'The most common two-digit multiplication error is forgetting a partial product. A box makes forgetting one impossible. There is a visibly empty square.',
  words: [
    { w: 'partial product', d: 'One piece of the multiplication before you add them all together.' },
    { w: 'decompose', d: 'Break a number into place-value parts: 47 = 40 + 7.' }
  ],
  visual: [
    { type: 'areamodel', title: '23 × 47', rows: ['20', '3'], cols: ['40', '7'],
      cells: [['800', '140'], ['120', '21']], total: '800 + 140 + 120 + 21 = 1,081',
      caption: 'Four boxes, four partial products. None can be forgotten.' },
    { type: 'flow', steps: [
      'Break each factor into place-value parts (47 = 40 + 7).',
      'Draw a box with one row per part of the first number and one column per part of the second.',
      'Multiply the row label by the column label to fill each square.',
      'Add every square. That is your answer.',
      'Estimate to check: round both factors and compare.'
    ] }
  ],
  steps: [
    'Write each factor in expanded form: 23 = 20 + 3, and 47 = 40 + 7.',
    'Draw a grid with those parts as row and column labels.',
    'Fill each square by multiplying its row label by its column label. Use your basic facts and then attach the zeros.',
    'Check that every square has a number in it.',
    'Add all the squares together.',
    'Estimate: 20 × 50 = 1,000. Your answer should be near that.'
  ],
  example: { prompt: '23 × 47',
    work: ['20 × 40 = 800', '20 × 7 = 140', '3 × 40 = 120', '3 × 7 = 21', '800 + 140 + 120 + 21 = 1,081'],
    answer: '1,081' },
  traps: [
    'Only multiplying the tens by the tens and the ones by the ones. That misses half the problem and gives a much-too-small answer.',
    'Losing zeros: 20 × 40 is 800, not 80. Multiply 2 × 4 = 8, then attach both zeros.',
    'Adding the partial products in your head. Stack them and add carefully. That is where the errors hide.',
    'Skipping the estimate. It is the fastest way to catch a missing partial product.'
  ],
  check: [
    { q: 'How many boxes does a two-digit times two-digit problem need?', a: 'Four. Two parts times two parts.' },
    { q: '30 × 60 = ?', a: '1,800. 3 × 6 = 18, then attach the two zeros.' },
    { q: 'Estimate 38 × 52 before you solve it.', a: '40 × 50 = 2,000. Your answer should be close to 2,000.' }
  ],
  links: [
    { t: 'Math is Fun: Long Multiplication', u: 'https://www.mathsisfun.com/numbers/multiplication-long.html', d: 'The standard algorithm, laid out step by step.' },
    { t: 'Polypad', u: 'https://polypad.amplify.com/', d: 'Build the rectangle with tiles and see the four partial products.' }
  ],
  note: 'steps'
},
{
  id: 'm-long-division', subject: 'math', unit: 'Multiplication and division', grades: ['4', '5'],
  title: 'Long division: the four-step loop',
  alt: 'long division dmsb divide multiply subtract bring down remainder',
  stuck: ['I forget what comes next', 'My remainder is bigger than the divisor'],
  teks: ['4.4.E', '4.4.F', '5.3.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Long division is the same four moves repeated: divide, multiply, subtract, bring down. It only feels long because you do the loop once per digit.',
  why: 'This is the last arithmetic algorithm you learn, and fractions, decimals, and ratios all lean on it.',
  words: [
    { w: 'dividend', d: 'The number being split up. It goes inside the box.' },
    { w: 'divisor', d: 'The number you are splitting by: it sits outside.' },
    { w: 'quotient', d: 'The answer, written on top.' },
    { w: 'remainder', d: 'What is left over that cannot be split evenly.' }
  ],
  visual: [
    { type: 'cycle', title: 'The loop you repeat once per digit',
      steps: [{ l: 'Divide', d: 'How many times does it fit?' }, { l: 'Multiply', d: 'Answer × divisor' }, { l: 'Subtract', d: 'Take it away' }, { l: 'Bring down', d: 'Next digit comes down' }],
      center: 'Repeat', centerSub: 'until no digits are left',
      caption: 'D-M-S-B. If you cannot remember what is next, look at what you just did.' },
    { type: 'flow', steps: [
      'Look at the first digit of the dividend. Does the divisor fit into it?',
      'If not, take the first two digits instead.',
      'Write how many times it fits ABOVE the digit you stopped on.',
      'Multiply that answer by the divisor and write it underneath.',
      'Subtract. The result must be smaller than the divisor: if it is not, your quotient digit was too small.',
      'Bring down the next digit and start the loop again.'
    ] }
  ],
  steps: [
    'Set it up: dividend inside the box, divisor outside on the left.',
    'DIVIDE: how many whole times does the divisor go into the digits you are looking at? Write that number on top, directly above the last digit you used.',
    'MULTIPLY: that quotient digit times the divisor. Write the product underneath.',
    'SUBTRACT: take it away. The result must be less than the divisor.',
    'BRING DOWN: pull the next digit of the dividend straight down next to your result.',
    'Repeat until there are no digits left to bring down. Whatever remains is the remainder.'
  ],
  example: { prompt: '738 ÷ 6',
    work: ['6 into 7 goes 1 time. Write 1 above the 7.', '1 × 6 = 6. 7 − 6 = 1.', 'Bring down the 3 → 13.', '6 into 13 goes 2 times. Write 2. 2 × 6 = 12. 13 − 12 = 1.', 'Bring down the 8 → 18.', '6 into 18 goes 3 times. Write 3. 3 × 6 = 18. 18 − 18 = 0.'],
    answer: '123, remainder 0' },
  traps: [
    'Writing the quotient digit in the wrong column. It goes directly above the digit you just finished using.',
    'A remainder that is bigger than the divisor. That always means your quotient digit was too small: bump it up by one and redo the step.',
    'Forgetting to write a 0 in the quotient when the divisor does not fit. If 6 will not go into 2, you write 0 there, you do not skip it.',
    'Bringing down two digits at once. One digit per loop.'
  ],
  check: [
    { q: 'You are dividing by 7 and your subtraction leaves 9. What went wrong?', a: 'Your quotient digit was too small. 9 is bigger than 7, so it fits one more time.' },
    { q: 'What comes right after you subtract?', a: 'Bring down the next digit.' },
    { q: '85 ÷ 4. What is the remainder?', a: '21 remainder 1. (4 × 21 = 84, and 85 − 84 = 1.)' }
  ],
  links: [
    { t: 'Math is Fun: Long Division', u: 'https://www.mathsisfun.com/long_division.html', d: 'An animated walk-through of the loop.' },
    { t: 'Khan Academy: Grade 4 math', u: 'https://www.khanacademy.org/math/cc-fourth-grade-math', d: 'Division videos and practice.' }
  ],
  note: 'steps'
},
{
  id: 'm-order-of-operations', subject: 'math', unit: 'Multiplication and division', grades: ['5', '6'],
  title: 'Order of operations',
  alt: 'pemdas gems parentheses exponents order of operations',
  stuck: ['I got a different answer than the app for the same problem', 'Do I really always do multiplication before addition?'],
  teks: ['5.4.E', '5.4.F', '6.7.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'When one expression has several operations, everyone in the world has agreed on one order to do them in. Without that agreement, the same expression would have several different answers.',
  why: 'Once variables show up in algebra, an order-of-operations slip does not just cost one question: it silently breaks the whole problem.',
  words: [
    { w: 'expression', d: 'Numbers and operations with no equals sign: 3 + 4 × 2.' },
    { w: 'grouping symbol', d: 'Parentheses, brackets, or a fraction bar. Do inside these first.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Grouping symbols first: ( ), [ ], and anything above or below a fraction bar.',
      'Exponents next: 3² becomes 9.',
      'Multiplication AND division together, left to right: whichever comes first.',
      'Addition AND subtraction together, left to right: whichever comes first.'
    ], caption: 'Multiplication does not automatically beat division. They are the same rank; read left to right.' },
    { type: 'table', title: 'Where students go wrong', head: ['Expression', 'Wrong', 'Right'],
      rows: [['3 + 4 × 2', '14', '11'], ['20 − 6 ÷ 2', '7', '17'], ['12 ÷ 3 × 2', '2', '8'], ['(3 + 4) × 2', '11', '14']],
      note: 'The last two rows are the ones people miss most.' }
  ],
  steps: [
    'Scan the whole expression before you write anything.',
    'Do everything inside grouping symbols first, from the innermost outward.',
    'Handle exponents.',
    'Sweep left to right doing multiplication and division as you meet them: do not do all multiplication first.',
    'Sweep left to right doing addition and subtraction as you meet them.',
    'Rewrite the whole expression after each step so you never lose a term.'
  ],
  example: { prompt: '5 + 2 × (8 − 3)² ÷ 5',
    work: ['Parentheses: 8 − 3 = 5 → 5 + 2 × 5² ÷ 5', 'Exponent: 5² = 25 → 5 + 2 × 25 ÷ 5', 'Left to right, × and ÷: 2 × 25 = 50 → 5 + 50 ÷ 5', 'Still left to right: 50 ÷ 5 = 10 → 5 + 10', 'Addition: 15'],
    answer: '15' },
  traps: [
    'Doing all multiplication before all division. In 12 ÷ 3 × 2 you divide first because it comes first: 4 × 2 = 8.',
    'Doing all addition before all subtraction. Same rule: left to right.',
    'Ignoring a fraction bar. It groups everything above it and everything below it, as if there were invisible parentheses.',
    'Doing steps in your head and losing a term. Rewrite the full expression each time.'
  ],
  check: [
    { q: '10 − 2 × 3', a: '4. Multiply first: 2 × 3 = 6, then 10 − 6.' },
    { q: '16 ÷ 4 × 2', a: '8. Left to right: 16 ÷ 4 = 4, then 4 × 2.' },
    { q: '(6 + 2) ÷ 4', a: '2. Parentheses first: 8 ÷ 4.' }
  ],
  links: [
    { t: 'Math is Fun: Order of Operations (PEMDAS)', u: 'https://www.mathsisfun.com/operation-order-pemdas.html', d: 'The rule with worked examples and practice.' }
  ],
  note: 'strategy'
},
{
  id: 'm-factors-multiples', subject: 'math', unit: 'Multiplication and division', grades: ['4', '5', '6'],
  title: 'Factors, multiples, GCF and LCM',
  alt: 'factors multiples prime composite greatest common factor least common multiple',
  stuck: ['I mix up factors and multiples', 'I do not know whether I need GCF or LCM'],
  teks: ['4.4.B', '5.4.A', '6.7.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Factors are the numbers that divide INTO a number. Multiples are what you get when you count BY a number. Factors are always smaller or equal; multiples are always bigger or equal.',
  why: 'You need the LCM to add unlike fractions and the GCF to simplify them. Getting them backwards is a very common source of fraction errors.',
  words: [
    { w: 'factor', d: 'A number that divides in evenly. Factors of 12: 1, 2, 3, 4, 6, 12.' },
    { w: 'multiple', d: 'What you land on counting by that number. Multiples of 12: 12, 24, 36…' },
    { w: 'prime', d: 'A number with exactly two factors: 1 and itself.' },
    { w: 'composite', d: 'A number with more than two factors.' }
  ],
  visual: [
    { type: 'table', title: 'Factors go IN. Multiples go OUT.', head: ['For the number 12', 'List', 'Direction'],
      rows: [['Factors', '1, 2, 3, 4, 6, 12', 'smaller or equal'], ['Multiples', '12, 24, 36, 48…', 'bigger or equal']],
      note: '12 shows up in both lists. That is normal.' },
    { type: 'decide', question: 'GCF or LCM?', branches: [
      { if: 'You are simplifying a fraction', then: 'GCF: the biggest number that divides both top and bottom.' },
      { if: 'You are adding or subtracting unlike fractions', then: 'LCM: the smallest number both denominators go into.' },
      { if: 'You are splitting things into the largest equal groups', then: 'GCF' },
      { if: 'You are asking when two repeating events line up again', then: 'LCM' }
    ] }
  ],
  steps: [
    'To list factors, work in pairs from 1 upward: 1 × 12, 2 × 6, 3 × 4. Stop when the pairs start repeating.',
    'To list multiples, skip count: 12, 24, 36, 48.',
    'For GCF: list the factors of both numbers and take the biggest one that appears in both lists.',
    'For LCM: list the multiples of the larger number and stop at the first one the smaller number divides into.',
    'Sanity check: the GCF is never bigger than the smaller number; the LCM is never smaller than the larger number.'
  ],
  example: { prompt: 'Find the GCF and LCM of 8 and 12.',
    work: ['Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12.', 'Shared factors: 1, 2, 4. Biggest is 4 → GCF = 4.', 'Multiples of 12: 12, 24. Does 8 divide 12? No. Does 8 divide 24? Yes.', 'LCM = 24.'],
    answer: 'GCF = 4, LCM = 24' },
  traps: [
    'Swapping the two words. Say it out loud: "factors fit inside, multiples multiply out."',
    'Forgetting 1 and the number itself when you list factors.',
    'Listing multiples of the smaller number for LCM. It works but takes far longer. Start from the bigger one.',
    'Thinking 1 is prime. It is not: it has only one factor, and primes need exactly two.'
  ],
  check: [
    { q: 'Is 15 a factor or a multiple of 5?', a: 'A multiple. 5 is a factor of 15.' },
    { q: 'GCF of 18 and 24?', a: '6.' },
    { q: 'You are adding 1/4 + 1/6. Do you need GCF or LCM?', a: 'LCM, to find the common denominator: 12.' }
  ],
  links: [
    { t: 'Math is Fun: Greatest Common Factor', u: 'https://www.mathsisfun.com/greatest-common-factor.html', d: 'How to find the GCF, with examples.' },
    { t: 'Math is Fun: Least Common Multiple', u: 'https://www.mathsisfun.com/least-common-multiple.html', d: 'How to find the LCM, with examples.' },
    { t: 'Math is Fun: Prime and Composite Numbers', u: 'https://www.mathsisfun.com/prime-composite-number.html', d: 'What makes a number prime.' }
  ],
  note: 'steps'
},
{
  id: 'm-word-problems', subject: 'math', unit: 'Problem solving', grades: ['3', '4', '5', '6', '7', '8'],
  title: 'Getting into a word problem when you have no idea what to do',
  alt: 'word problems multi step strategy what is it asking',
  stuck: ['I understand the math but not the words', 'I do not know which operation to use'],
  teks: ['4.5.A', '5.4.B', '6.1.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A word problem is a story with a question buried in it. Your job is not to spot a keyword. It is to picture the situation. Once you can picture it, the operation is obvious.',
  why: 'Every math app moves to word problems eventually, and this is where most students lose accuracy even on skills they have mastered.',
  words: [
    { w: 'unknown', d: 'The thing the question is asking you to find.' },
    { w: 'given', d: 'A number the problem already tells you.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Read the whole thing once without touching a pencil. Just get the story.',
      'Read again and underline the actual question. Write it at the top as a sentence: "I need to find ___."',
      'Circle every number, and write its unit next to it. 12 what?',
      'Draw the situation. A bar, a picture, a table: anything. This is the step people skip and it is the step that works.',
      'Decide the operation from the picture, not from a keyword.',
      'Solve, then reread the question and check that your answer answers it.'
    ] },
    { type: 'tape', rows: [
      { label: 'Total (?)', units: 4, each: '15', total: '= 60' },
      { label: 'Each box', units: 1, each: '15', fill: false }
    ], caption: 'Bar models turn "4 boxes of 15" into something you can see: 4 equal parts of 15.' }
  ],
  steps: [
    'Read it all the way through once. Do not start computing.',
    'Underline the question sentence. Rewrite it as "I need to find ___."',
    'Circle the numbers and label each one with its unit.',
    'Cross out information that does not help. Some problems include extra numbers on purpose.',
    'Draw a picture or bar model of the situation.',
    'Choose the operation based on your picture. Estimate what a reasonable answer looks like.',
    'Solve, then reread the question. Did you answer what was asked, with the right unit?'
  ],
  example: { prompt: 'Maya has 4 boxes of markers. Each box holds 15 markers. She gives 22 markers to her class. How many does she have left?',
    work: ['Question: how many markers left.', 'Numbers: 4 boxes, 15 per box, 22 given away.', 'Picture: 4 equal groups of 15, then some removed.', 'Equal groups → multiply: 4 × 15 = 60.', 'Given away → subtract: 60 − 22 = 38.'],
    answer: '38 markers' },
  traps: [
    'Trusting keywords. "Altogether" does not always mean add, and "left" does not always mean subtract.',
    'Doing only the first step of a multi-step problem. If a problem gives you three numbers, one step is probably not enough.',
    'Answering the wrong question. The problem asked how many are LEFT, not how many she started with.',
    'Dropping the unit. "38" is not an answer; "38 markers" is.',
    'Skipping the drawing because it feels slow. It is the fastest part of the whole process.'
  ],
  check: [
    { q: 'What should you do before you touch a pencil?', a: 'Read the entire problem once, just to understand the story.' },
    { q: 'A problem gives you 5 numbers but only needs 3. What is that testing?', a: 'Whether you can tell relevant information from extra information.' },
    { q: 'Your answer is 250 apples for a problem about one lunchbox. What now?', a: 'Recheck. The answer is not reasonable for the situation.' }
  ],
  links: [
    { t: 'Math is Fun: Solving Word Questions', u: 'https://www.mathsisfun.com/algebra/word-questions-solving.html', d: 'How to turn words into math, with examples.' }
  ],
  note: 'strategy'
},

/* ---------------- Fractions ---------------- */
{
  id: 'm-fraction-meaning', subject: 'math', unit: 'Fractions', grades: ['3', '4'],
  title: 'What a fraction actually is',
  alt: 'numerator denominator parts of a whole unit fraction',
  stuck: ['I do not know which number goes on top', 'Why is 1/8 smaller than 1/4?'],
  teks: ['3.3.A', '3.3.B', '3.3.C'],
  apps: ['AlphaMath'],
  plain: 'The bottom number tells you how many equal pieces the whole was cut into. The top number tells you how many of those pieces you have. That is the entire idea.',
  why: 'Nearly every fraction mistake later on traces back to reading the denominator as a count instead of a size.',
  words: [
    { w: 'numerator', d: 'The top number: how many pieces you have.' },
    { w: 'denominator', d: 'The bottom number: how many equal pieces make one whole.' },
    { w: 'unit fraction', d: 'A fraction with 1 on top, like 1/5. One single piece.' }
  ],
  visual: [
    { type: 'fractionbar', bars: [
      { parts: 4, shaded: 3, label: '3/4', sub: '3 of the 4 pieces' },
      { parts: 8, shaded: 3, label: '3/8', sub: 'same 3 pieces, but each piece is smaller' }
    ], caption: 'Same numerator. Bigger denominator means smaller pieces, so a smaller fraction.' },
    { type: 'numberline', min: 0, max: 1, title: 'Fractions live on the number line too',
      ticks: [{ v: 0, l: '0' }, { v: 0.25, l: '1/4', big: false }, { v: 0.5, l: '2/4', big: false }, { v: 0.75, l: '3/4', big: false }, { v: 1, l: '1' }],
      points: [{ v: 0.75, l: '3/4' }], caption: 'The whole is the distance from 0 to 1, split into 4 equal jumps.' }
  ],
  steps: [
    'Find the whole first. One pizza? One number line from 0 to 1? One set of 12 marbles?',
    'Count how many EQUAL pieces the whole is cut into. That number goes on the bottom.',
    'Count how many of those pieces are shaded, eaten, or taken. That number goes on top.',
    'Read it out loud: "three fourths" means three pieces, each one fourth of the whole.',
    'Check the pieces really are equal. Unequal pieces are not fractions.'
  ],
  example: { prompt: 'A chocolate bar is split into 6 equal pieces. You eat 2. What fraction did you eat, and what fraction is left?',
    work: ['The whole bar is cut into 6 equal pieces → denominator is 6.', 'You ate 2 of them → numerator is 2.', 'Eaten: 2/6. Left: 4 pieces of 6 → 4/6.'],
    answer: 'You ate 2/6 and 4/6 is left. (Together they make 6/6, one whole.)' },
  traps: [
    'Putting the count of pieces you have on the bottom. The bottom is always the total number of equal pieces.',
    'Thinking a bigger denominator means a bigger fraction. It means MORE pieces, so each piece is SMALLER.',
    'Accepting unequal pieces. If someone cuts a bar into a big half and a small half, neither one is 1/2.',
    'Forgetting the whole. 1/2 of a small pizza is not the same amount as 1/2 of a big one.'
  ],
  check: [
    { q: 'A shape is cut into 5 equal parts and 2 are shaded. Write the fraction.', a: '2/5' },
    { q: 'Which is bigger, 1/3 or 1/6?', a: '1/3. Thirds are bigger pieces than sixths.' },
    { q: 'What fraction is one whole, if the denominator is 8?', a: '8/8' }
  ],
  links: [
    { t: 'Math is Fun: Fractions', u: 'https://www.mathsisfun.com/fractions.html', d: 'The basics with pictures you can change.' },
    { t: 'Math Learning Center: Fractions app', u: 'https://apps.mathlearningcenter.org/', d: 'Build fractions with bars and circles.' }
  ],
  note: 'frayer'
},
{
  id: 'm-equivalent-fractions', subject: 'math', unit: 'Fractions', grades: ['3', '4', '5'],
  title: 'Equivalent fractions and simplifying',
  alt: 'equivalent fractions simplify reduce lowest terms same value',
  stuck: ['Why does 1/2 equal 3/6?', 'My answer is right but the app says simplify'],
  teks: ['3.3.F', '3.3.G', '4.3.C', '5.3.H'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Two fractions are equivalent when they cover the same amount even though they are written with different numbers. You get one from the other by multiplying or dividing BOTH the top and the bottom by the same number.',
  why: 'You cannot add unlike fractions, compare them reliably, or finish most fraction answers without this.',
  words: [
    { w: 'equivalent', d: 'Different numbers, same value.' },
    { w: 'simplest form', d: 'The version where the only number that divides both top and bottom is 1.' }
  ],
  visual: [
    { type: 'fractionbar', bars: [
      { parts: 2, shaded: 1, label: '1/2', sub: 'one big piece' },
      { parts: 4, shaded: 2, label: '2/4', sub: 'same shaded amount' },
      { parts: 6, shaded: 3, label: '3/6', sub: 'still the same amount' }
    ], caption: 'The shading lines up exactly. Different names, identical amount.' },
    { type: 'flow', steps: [
      'To make an equivalent fraction, pick any number.',
      'Multiply the numerator by it AND the denominator by it. Same number, both places.',
      'To simplify, find the greatest common factor of top and bottom.',
      'Divide BOTH by that factor.',
      'Check: if any number other than 1 still divides both, keep going.'
    ] }
  ],
  steps: [
    'Decide whether you are scaling up (making bigger numbers) or simplifying (making smaller ones).',
    'Scaling up: choose a number and multiply the top and the bottom by it.',
    'Simplifying: find the biggest number that divides both the top and the bottom, then divide both by it.',
    'Whatever you do to the top, do exactly the same to the bottom. That is the only rule.',
    'Check your result: is there still a common factor other than 1? If yes, simplify again.'
  ],
  example: { prompt: 'Simplify 18/24.',
    work: ['Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.', 'Greatest common factor is 6.', '18 ÷ 6 = 3, and 24 ÷ 6 = 4.', 'Check 3/4: nothing but 1 divides both. Done.'],
    answer: '3/4' },
  traps: [
    'Adding to the top and bottom instead of multiplying. 1/2 is NOT the same as 2/3.',
    'Simplifying by a small factor and stopping. 18/24 ÷ 2 gives 9/12, which is still not simplest.',
    'Changing only the numerator or only the denominator. That makes a different fraction, not an equivalent one.',
    'Thinking the app is wrong because your unsimplified answer has the same value. It does. The app is asking for a specific form.'
  ],
  check: [
    { q: 'Write a fraction equivalent to 2/3 with a denominator of 12.', a: '8/12. Multiply top and bottom by 4.' },
    { q: 'Simplify 20/30.', a: '2/3. Divide both by 10.' },
    { q: 'Is 4/6 in simplest form?', a: 'No. Both divide by 2, giving 2/3.' }
  ],
  links: [
    { t: 'Math is Fun: Equivalent Fractions', u: 'https://www.mathsisfun.com/equivalent_fractions.html', d: 'A slider that shows equivalence happening.' },
    { t: 'Math is Fun: Simplifying Fractions', u: 'https://www.mathsisfun.com/simplifying-fractions.html', d: 'How to get to simplest form.' }
  ],
  note: 'steps'
},
{
  id: 'm-compare-fractions', subject: 'math', unit: 'Fractions', grades: ['3', '4', '5'],
  title: 'Comparing fractions',
  alt: 'compare order fractions benchmark common denominator',
  stuck: ['Is 3/5 bigger than 5/8?', 'I compared the top numbers and got it wrong'],
  teks: ['3.3.H', '4.3.D', '4.3.G'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'You cannot compare fractions by looking at the numbers on their own. You need to make them comparable first: either by giving them the same denominator, or by measuring both against a benchmark like 1/2.',
  why: 'Comparing is how you sanity-check every fraction answer you ever produce.',
  words: [
    { w: 'benchmark fraction', d: 'An easy landmark like 0, 1/2, or 1 that you compare against.' },
    { w: 'common denominator', d: 'The same bottom number for both fractions.' }
  ],
  visual: [
    { type: 'decide', question: 'Which comparing method should I use?', branches: [
      { if: 'The denominators are the SAME', then: 'Compare the numerators. More pieces of the same size wins.' },
      { if: 'The numerators are the SAME', then: 'Compare denominators BACKWARDS. Bigger bottom = smaller pieces = smaller fraction.' },
      { if: 'One is clearly over 1/2 and one is clearly under', then: 'Use the 1/2 benchmark. Done in one second.' },
      { if: 'Nothing is obvious', then: 'Rewrite both with a common denominator, then compare numerators.' }
    ] },
    { type: 'fractionbar', bars: [
      { parts: 5, shaded: 3, label: '3/5', sub: 'a bit more than half' },
      { parts: 8, shaded: 5, label: '5/8', sub: 'also a bit more than half' }
    ], caption: 'Both beat 1/2, so the benchmark cannot settle it. Use a common denominator of 40: 24/40 vs 25/40.' }
  ],
  steps: [
    'First check the easy cases: same denominators, or same numerators.',
    'Next try the 1/2 benchmark. Is the numerator more than half the denominator?',
    'If both are on the same side of 1/2, find a common denominator (the LCM of the two denominators works).',
    'Rewrite both fractions with that denominator by multiplying top and bottom.',
    'Now compare the numerators.',
    'Write the comparison with the original fractions, not the rewritten ones.'
  ],
  example: { prompt: 'Which is bigger: 3/5 or 5/8?',
    work: ['Half of 5 is 2.5, and 3 > 2.5, so 3/5 is more than 1/2.', 'Half of 8 is 4, and 5 > 4, so 5/8 is also more than 1/2. Benchmark does not decide it.', 'LCM of 5 and 8 is 40.', '3/5 = 24/40. 5/8 = 25/40.', '25 > 24.'],
    answer: '5/8 > 3/5' },
  traps: [
    'Comparing numerators when the denominators are different. 3/5 vs 5/8: the 5 on top does not mean 5/8 wins automatically. You have to check.',
    'Comparing denominators the normal way. With the same numerator, a BIGGER denominator means a SMALLER fraction.',
    'Forgetting to change the numerator when you change the denominator.',
    'Answering with the rewritten fractions. The question asked about 3/5 and 5/8.'
  ],
  check: [
    { q: 'Which is bigger, 2/7 or 2/9?', a: '2/7. Same numerator, so smaller denominator wins.' },
    { q: 'Which is bigger, 4/9 or 5/9?', a: '5/9. Same denominator, so more pieces wins.' },
    { q: 'Use the 1/2 benchmark: 3/8 or 5/9?', a: '5/9. It is more than half; 3/8 is less than half.' }
  ],
  links: [
    { t: 'Math is Fun: Comparing Fractions', u: 'https://www.mathsisfun.com/comparing-fractions.html', d: 'Methods with worked examples.' }
  ],
  note: 'strategy'
},
{
  id: 'm-add-sub-fractions', subject: 'math', unit: 'Fractions', grades: ['4', '5'],
  title: 'Adding and subtracting fractions',
  alt: 'add subtract fractions like unlike denominators common denominator',
  stuck: ['I added the bottoms too and got it wrong', 'What do I do when the denominators are different?'],
  teks: ['4.3.E', '5.3.H', '5.3.K'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'You can only add pieces that are the same size. If the denominators match, add the tops and keep the bottom. If they do not match, you have to rename the fractions first so the pieces are the same size.',
  why: 'This is the single most-missed skill in upper elementary math, and it comes straight back in algebra when you add rational expressions.',
  words: [
    { w: 'like denominators', d: 'The bottom numbers already match.' },
    { w: 'unlike denominators', d: 'The bottom numbers are different: rename first.' }
  ],
  visual: [
    { type: 'fractionbar', bars: [
      { parts: 4, shaded: 1, label: '1/4', sub: 'rename as 3/12' },
      { parts: 6, shaded: 1, label: '1/6', sub: 'rename as 2/12' },
      { parts: 12, shaded: 5, label: '5/12', sub: '3/12 + 2/12' }
    ], caption: 'Twelfths are a piece size that both fourths and sixths can be cut into.' },
    { type: 'flow', steps: [
      'Look at the two denominators. Do they match?',
      'If yes: add or subtract the numerators. Keep the denominator exactly as it is.',
      'If no: find the least common multiple of the two denominators.',
      'Rewrite each fraction with that denominator by multiplying top and bottom by the same number.',
      'Now add or subtract the numerators. Keep the common denominator.',
      'Simplify the answer if it can be simplified.'
    ] }
  ],
  steps: [
    'Check whether the denominators match.',
    'If they do not, find the least common multiple of the denominators. That is your common denominator.',
    'Rewrite each fraction: multiply the top and the bottom by whatever turns its denominator into the common one.',
    'Add or subtract ONLY the numerators.',
    'Keep the denominator the same. It is the piece size, and the piece size does not change.',
    'Simplify, and turn any improper fraction into a mixed number if the question asks for one.'
  ],
  example: { prompt: '1/4 + 1/6',
    work: ['Denominators 4 and 6 do not match.', 'Multiples of 6: 6, 12. Does 4 divide 12? Yes. LCM = 12.', '1/4 = 3/12 (multiply top and bottom by 3).', '1/6 = 2/12 (multiply top and bottom by 2).', '3/12 + 2/12 = 5/12.', '5/12 cannot be simplified.'],
    answer: '5/12' },
  traps: [
    'Adding the denominators. 1/4 + 1/6 is not 2/10. The bottom is a piece size, not a count.',
    'Finding the common denominator but forgetting to change the numerators too.',
    'Using the product of the denominators when a smaller LCM exists. 4 × 6 = 24 works, but 12 is less painful.',
    'Forgetting to simplify at the end when the app expects simplest form.',
    'Subtracting the smaller numerator from the bigger one regardless of order. 2/5 − 4/5 is negative.'
  ],
  check: [
    { q: '3/8 + 2/8', a: '5/8. Same denominator, so just add the tops.' },
    { q: 'What is the common denominator for 1/3 and 1/5?', a: '15.' },
    { q: '5/6 − 1/2', a: '1/2 = 3/6, so 5/6 − 3/6 = 2/6 = 1/3.' }
  ],
  links: [
    { t: 'Math is Fun: Adding Fractions', u: 'https://www.mathsisfun.com/fractions_addition.html', d: 'Both cases, worked through.' },
    { t: 'Math is Fun: Subtracting Fractions', u: 'https://www.mathsisfun.com/fractions_subtraction.html', d: 'Same method, subtraction version.' }
  ],
  note: 'steps'
},
{
  id: 'm-multiply-divide-fractions', subject: 'math', unit: 'Fractions', grades: ['5', '6'],
  title: 'Multiplying and dividing fractions',
  alt: 'multiply divide fractions reciprocal keep change flip',
  stuck: ['Why does multiplying make it smaller?', 'I flip the wrong fraction when I divide'],
  teks: ['5.3.I', '5.3.J', '5.3.L', '6.3.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Multiplying fractions is the easy one: multiply straight across, no common denominator needed. Dividing is multiplying in disguise: you flip the second fraction and multiply.',
  why: 'Dividing by a fraction is the foundation of unit rates, scale factors, and every "how many of these fit into that" question in middle school.',
  words: [
    { w: 'reciprocal', d: 'A fraction flipped upside down. The reciprocal of 3/4 is 4/3.' },
    { w: 'of', d: 'In fraction problems, "of" almost always means multiply. 1/2 of 8 is 1/2 × 8.' }
  ],
  visual: [
    { type: 'areamodel', title: '2/3 × 3/4: shade 2/3 of 3/4',
      rows: ['1/3', '1/3', '1/3'], cols: ['1/4', '1/4', '1/4', '1/4'],
      cells: [['✓', '✓', '✓', ''], ['✓', '✓', '✓', ''], ['', '', '', '']],
      total: '6 of the 12 boxes are double-shaded → 6/12 = 1/2',
      caption: 'Multiplying two fractions less than 1 always gives something smaller than both.' },
    { type: 'flow', steps: [
      'MULTIPLYING: multiply the numerators, multiply the denominators. That is it.',
      'Simplify at the end (or cancel common factors first to keep the numbers small).',
      'DIVIDING: keep the first fraction exactly as it is.',
      'Change the ÷ into a ×.',
      'Flip the SECOND fraction upside down.',
      'Now multiply as normal, and simplify.'
    ], caption: 'Keep: Change: Flip. Only the second fraction flips.' }
  ],
  steps: [
    'To multiply: multiply top by top and bottom by bottom. No common denominator is needed.',
    'Turn any whole number into a fraction over 1 first. 5 becomes 5/1.',
    'Turn any mixed number into an improper fraction before you start.',
    'To divide: keep the first fraction, change ÷ to ×, and flip the second fraction.',
    'Multiply as normal.',
    'Simplify the answer, and convert back to a mixed number if the question wants one.'
  ],
  example: { prompt: '3/4 ÷ 2/3',
    work: ['Keep 3/4.', 'Change ÷ to ×.', 'Flip 2/3 to 3/2.', '3/4 × 3/2 = 9/8.', '9/8 = 1 1/8.'],
    answer: '9/8, or 1 1/8' },
  traps: [
    'Flipping the first fraction instead of the second. Only the divisor flips.',
    'Looking for a common denominator. You do not need one for multiplying or dividing: only for adding and subtracting.',
    'Being suspicious of an answer that got bigger when you divided. Dividing by a fraction less than 1 SHOULD give a bigger answer: how many halves fit in 3? Six.',
    'Multiplying mixed numbers without converting them first. 2 1/2 × 3 is not 6 1/2.'
  ],
  check: [
    { q: '2/5 × 3/7', a: '6/35. Multiply straight across.' },
    { q: '4 ÷ 1/2', a: '4/1 × 2/1 = 8. Eight halves fit in four wholes.' },
    { q: 'What is the reciprocal of 5?', a: '1/5. Write 5 as 5/1 and flip it.' }
  ],
  links: [
    { t: 'Math is Fun: Multiplying Fractions', u: 'https://www.mathsisfun.com/fractions_multiplication.html', d: 'Straight-across multiplying with pictures.' },
    { t: 'Math is Fun: Dividing Fractions', u: 'https://www.mathsisfun.com/fractions_division.html', d: 'Why flipping works.' }
  ],
  note: 'steps'
},
{
  id: 'm-mixed-improper', subject: 'math', unit: 'Fractions', grades: ['4', '5'],
  title: 'Mixed numbers and improper fractions',
  alt: 'mixed number improper fraction convert whole number and fraction',
  stuck: ['How do I turn 2 3/4 into a fraction?', 'The app wants a mixed number and I gave a fraction'],
  teks: ['4.3.A', '4.3.B', '5.3.H'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A mixed number is a whole number with a fraction stuck on. An improper fraction is the same amount written entirely in pieces. They are two ways to say the same thing, and you need to move between them freely.',
  why: 'You cannot multiply or divide mixed numbers directly. You have to convert first. And most apps want the answer back in mixed form.',
  words: [
    { w: 'mixed number', d: 'A whole plus a fraction, like 2 3/4.' },
    { w: 'improper fraction', d: 'A fraction where the top is bigger than the bottom, like 11/4.' }
  ],
  visual: [
    { type: 'fractionbar', bars: [
      { parts: 4, shaded: 4, label: '4/4 = 1 whole' },
      { parts: 4, shaded: 4, label: '4/4 = 1 whole' },
      { parts: 4, shaded: 3, label: '3/4' }
    ], caption: '2 wholes and 3 quarters. In quarters that is 4 + 4 + 3 = 11 quarters, so 2 3/4 = 11/4.' },
    { type: 'flow', steps: [
      'MIXED → IMPROPER: multiply the whole number by the denominator.',
      'Add the numerator to that.',
      'Put the result over the original denominator. The bottom never changes.',
      'IMPROPER → MIXED: divide the numerator by the denominator.',
      'The quotient is the whole number; the remainder is the new numerator.',
      'The denominator stays exactly the same.'
    ] }
  ],
  steps: [
    'Mixed to improper: whole × denominator, then + numerator, all over the same denominator.',
    'Improper to mixed: numerator ÷ denominator. Quotient is the whole; remainder goes on top.',
    'The denominator never changes in either direction.',
    'Before multiplying or dividing mixed numbers, always convert to improper first.',
    'After you finish, convert back if the question asked for a mixed number.'
  ],
  example: { prompt: 'Convert 2 3/4 to an improper fraction, then convert 17/5 to a mixed number.',
    work: ['2 × 4 = 8. 8 + 3 = 11. So 2 3/4 = 11/4.', '17 ÷ 5 = 3 remainder 2.', 'So 17/5 = 3 2/5.'],
    answer: '11/4 and 3 2/5' },
  traps: [
    'Adding the whole number to the numerator without multiplying first. 2 3/4 is not 5/4.',
    'Changing the denominator. It stays put in both directions.',
    'Leaving an improper fraction when the app wanted a mixed number, or the reverse. Read what is being asked.',
    'Forgetting to convert before multiplying. Mixed numbers cannot be multiplied straight across.'
  ],
  check: [
    { q: 'Convert 3 1/2 to an improper fraction.', a: '3 × 2 = 6, + 1 = 7. So 7/2.' },
    { q: 'Convert 22/7 to a mixed number.', a: '22 ÷ 7 = 3 remainder 1, so 3 1/7.' },
    { q: 'What happens to the denominator when you convert?', a: 'Nothing. It stays the same.' }
  ],
  links: [
    { t: 'Math is Fun: Mixed Fractions', u: 'https://www.mathsisfun.com/mixed-fractions.html', d: 'Converting both ways with examples.' },
    { t: 'Math is Fun: Improper Fractions', u: 'https://www.mathsisfun.com/improper-fractions.html', d: 'Why improper fractions are useful, not wrong.' }
  ],
  note: 'steps'
},

/* ---------------- Decimals ---------------- */
{
  id: 'm-decimal-place-value', subject: 'math', unit: 'Decimals', grades: ['4', '5'],
  title: 'Decimal place value',
  alt: 'tenths hundredths thousandths decimal point compare decimals',
  stuck: ['Is 0.9 bigger than 0.15?', 'I do not know what the second digit after the point means'],
  teks: ['4.2.B', '4.2.E', '5.2.A', '5.2.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Decimals continue the place-value pattern past the ones. Each step right divides by ten: tenths, hundredths, thousandths. The decimal point just marks where the whole numbers stop.',
  why: 'The "longer number is bigger" rule that works for whole numbers is false for decimals, and that single misconception causes a huge number of wrong answers.',
  words: [
    { w: 'tenths', d: 'The first place after the decimal point. One tenth of a whole.' },
    { w: 'hundredths', d: 'The second place after the point. Money uses these: cents.' }
  ],
  visual: [
    { type: 'placevalue', columns: ['Ones', '•', 'Tenths', 'Hundredths', 'Thousandths'], digits: [3, '.', 4, 0, 7],
      title: 'The number 3.407', note: '3 ones, 4 tenths, 0 hundredths, 7 thousandths' },
    { type: 'numberline', min: 0, max: 1, title: 'Why 0.9 beats 0.15',
      ticks: [{ v: 0, l: '0' }, { v: 0.25, l: '0.25', big: false }, { v: 0.5, l: '0.5', big: false }, { v: 0.75, l: '0.75', big: false }, { v: 1, l: '1' }],
      points: [{ v: 0.15, l: '0.15' }, { v: 0.9, l: '0.9' }],
      caption: '0.9 is nearly a whole. 0.15 is barely past a tenth. More digits does not mean more value.' }
  ],
  steps: [
    'Find the decimal point. Everything left of it is whole; everything right is part of a whole.',
    'Name the places going right: tenths, hundredths, thousandths.',
    'To compare decimals, line up the decimal points and compare left to right, exactly like whole numbers.',
    'If one number has fewer decimal places, add zeros on the end so both have the same number of digits. Adding zeros on the RIGHT of a decimal changes nothing.',
    'Read the number the way it is meant to be read: 3.407 is "three and four hundred seven thousandths."'
  ],
  example: { prompt: 'Order from least to greatest: 0.5, 0.45, 0.405',
    work: ['Give them all three decimal places: 0.500, 0.450, 0.405.', 'Compare tenths: 5, 4, 4. So 0.500 is largest.', 'Between 0.450 and 0.405, compare hundredths: 5 vs 0.', '0.405 is smallest.'],
    answer: '0.405, 0.45, 0.5' },
  traps: [
    'Assuming a longer decimal is bigger. 0.15 has more digits than 0.9 but is much smaller.',
    'Adding zeros on the LEFT of the digits after the point. 0.5 and 0.05 are completely different.',
    'Reading 0.45 as "zero point forty-five" and thinking of it as 45. It is 45 hundredths, less than half.',
    'Not lining up the decimal points when comparing or adding.'
  ],
  check: [
    { q: 'Which is bigger, 0.3 or 0.29?', a: '0.3. Compare tenths: 3 beats 2.' },
    { q: 'What is the 7 worth in 2.07?', a: 'Seven hundredths.' },
    { q: 'Is 0.60 the same as 0.6?', a: 'Yes. A zero on the right end does not change the value.' }
  ],
  links: [
    { t: 'Math is Fun: Decimals', u: 'https://www.mathsisfun.com/decimals.html', d: 'Place value after the point, with pictures.' },
    { t: 'Math is Fun: All decimal topics', u: 'https://www.mathsisfun.com/decimals-menu.html', d: 'Every decimal skill in one list.' }
  ],
  note: 'steps'
},
{
  id: 'm-decimal-operations', subject: 'math', unit: 'Decimals', grades: ['4', '5', '6'],
  title: 'Adding, subtracting, multiplying and dividing decimals',
  alt: 'decimal operations line up the point move the decimal',
  stuck: ['Where does the decimal point go in my answer?', 'My answer is 10 times too big'],
  teks: ['4.4.A', '5.3.D', '5.3.E', '5.3.F', '5.3.G'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Each operation has its own decimal-point rule, and they are different from each other. Adding and subtracting: line the points up. Multiplying: ignore the points, then count. Dividing: move both points until the divisor is whole.',
  why: 'Mixing up which rule goes with which operation is why answers come out ten or a hundred times off.',
  words: [
    { w: 'divisor', d: 'The number you are dividing by.' },
    { w: 'decimal places', d: 'How many digits sit after the decimal point.' }
  ],
  visual: [
    { type: 'decide', question: 'Which decimal rule do I need?', branches: [
      { if: 'Adding or subtracting', then: 'Stack them so the decimal points line up vertically. Fill gaps with zeros. Point drops straight down.' },
      { if: 'Multiplying', then: 'Ignore the points and multiply. Then count total decimal places in BOTH factors and put that many in the answer.' },
      { if: 'Dividing', then: 'Move the divisor\'s point to the end. Move the dividend\'s point the SAME number of places. Then divide normally.' }
    ] },
    { type: 'table', title: 'Multiplying: count the places', head: ['Problem', 'Ignore points', 'Places to count', 'Answer'],
      rows: [['0.4 × 0.7', '4 × 7 = 28', '1 + 1 = 2', '0.28'], ['1.2 × 0.05', '12 × 5 = 60', '1 + 2 = 3', '0.060'], ['3.5 × 4', '35 × 4 = 140', '1 + 0 = 1', '14.0']] }
  ],
  steps: [
    'Identify the operation first. The rule depends entirely on which one it is.',
    'ADD / SUBTRACT: stack the numbers so the decimal points line up. Add zeros to fill ragged ends. Bring the point straight down into the answer.',
    'MULTIPLY: ignore the decimal points entirely and multiply the digits. Then count the decimal places in both factors, add them up, and place that many in your answer counting from the right.',
    'DIVIDE: slide the divisor\'s decimal point to the right until it is a whole number. Slide the dividend\'s point exactly the same number of places. Then do long division and bring the point straight up.',
    'Estimate to check. 0.4 × 0.7 should be small: smaller than either factor.'
  ],
  example: { prompt: '7.2 ÷ 0.8',
    work: ['The divisor 0.8 needs its point moved 1 place right to become 8.', 'Move the dividend the same 1 place: 7.2 becomes 72.', 'Now divide: 72 ÷ 8 = 9.'],
    answer: '9' },
  traps: [
    'Lining up the right-hand edges when adding. 3.5 + 0.42 must line up on the point, not the last digit.',
    'Lining up the points when multiplying. You do NOT line up for multiplication: you count places at the end.',
    'Moving only the divisor\'s point when dividing. Both have to move the same number of places.',
    'Being surprised that 0.4 × 0.7 = 0.28 is smaller than both. Multiplying by less than 1 always shrinks a number.'
  ],
  check: [
    { q: '2.5 + 0.75. What do you write to line them up?', a: '2.50 + 0.75. Add a zero so both have two decimal places.' },
    { q: '0.3 × 0.6. How many decimal places in the answer?', a: 'Two. 3 × 6 = 18, so the answer is 0.18.' },
    { q: '4.5 ÷ 0.5. What do you do first?', a: 'Move both points one place: 45 ÷ 5 = 9.' }
  ],
  links: [
    { t: 'Math is Fun: Adding Decimals', u: 'https://www.mathsisfun.com/adding-decimals.html', d: 'Lining up the point.' },
    { t: 'Math is Fun: Multiplying Decimals', u: 'https://www.mathsisfun.com/multiplying-decimals.html', d: 'Counting the places.' },
    { t: 'Math is Fun: Dividing Decimals', u: 'https://www.mathsisfun.com/dividing-decimals.html', d: 'Moving the point.' }
  ],
  note: 'strategy'
},
{
  id: 'm-fraction-decimal-percent', subject: 'math', unit: 'Decimals', grades: ['4', '5', '6'],
  title: 'Switching between fractions, decimals and percents',
  alt: 'convert fraction decimal percent equivalent forms',
  stuck: ['How do I turn 3/8 into a decimal?', 'What is 0.6 as a percent?'],
  teks: ['4.2.G', '5.2.A', '6.4.E', '6.4.G'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Fractions, decimals, and percents are three languages for the same amount. Percent literally means "out of 100," so a percent is just a hundredths decimal wearing a different hat.',
  why: 'Middle school problems switch between these forms constantly, often inside a single question.',
  words: [
    { w: 'percent', d: 'Out of one hundred. 45% means 45 out of 100.' },
    { w: 'terminating decimal', d: 'A decimal that stops, like 0.375.' },
    { w: 'repeating decimal', d: 'A decimal that repeats forever, like 0.333…' }
  ],
  visual: [
    { type: 'table', title: 'The conversions you should just know', head: ['Fraction', 'Decimal', 'Percent'],
      rows: [['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/5', '0.2', '20%'], ['1/3', '0.333…', '33 1/3%'], ['1/10', '0.1', '10%'], ['1/8', '0.125', '12.5%']],
      note: 'Memorize these. They show up constantly and save you real time.' },
    { type: 'flow', steps: [
      'FRACTION → DECIMAL: divide the top by the bottom.',
      'DECIMAL → PERCENT: move the decimal point 2 places RIGHT and add a % sign.',
      'PERCENT → DECIMAL: drop the % and move the point 2 places LEFT.',
      'DECIMAL → FRACTION: say it out loud. "0.35" is "35 hundredths" = 35/100, then simplify.',
      'PERCENT → FRACTION: put it over 100 and simplify.'
    ] }
  ],
  steps: [
    'Fraction to decimal: divide the numerator by the denominator. If it does not come out even, keep going or round as asked.',
    'Decimal to percent: multiply by 100, which means moving the point two places right.',
    'Percent to decimal: divide by 100, which means moving the point two places left.',
    'Decimal to fraction: read the last digit\'s place. That place is your denominator. Then simplify.',
    'Percent to fraction: put the number over 100 and simplify.'
  ],
  example: { prompt: 'Write 3/8 as a decimal and a percent.',
    work: ['3 ÷ 8. 8 does not go into 3, so write 0. and add a zero: 30.', '8 into 30 is 3, remainder 6 → 0.3, bring down: 60.', '8 into 60 is 7, remainder 4 → 0.37, bring down: 40.', '8 into 40 is 5, remainder 0 → 0.375.', 'Move the point two right: 37.5%.'],
    answer: '0.375 and 37.5%' },
  traps: [
    'Dividing bottom by top. 3/8 means 3 ÷ 8, not 8 ÷ 3.',
    'Moving the decimal point the wrong direction. Percent is a BIGGER-looking number, so going to percent moves right.',
    'Writing 0.5 as 5%. It is 50%. Count the places carefully.',
    'Thinking a percent cannot be over 100. 150% is perfectly normal. It means one and a half.'
  ],
  check: [
    { q: 'Write 0.08 as a percent.', a: '8%.' },
    { q: 'Write 60% as a fraction in simplest form.', a: '60/100 = 3/5.' },
    { q: 'Write 1/8 as a decimal.', a: '0.125.' }
  ],
  links: [
    { t: 'Math is Fun: Converting Fractions to Decimals', u: 'https://www.mathsisfun.com/converting-fractions-decimals.html', d: 'Both directions, with examples.' },
    { t: 'Math is Fun: Percentage', u: 'https://www.mathsisfun.com/percentage.html', d: 'What percent means and how to convert.' }
  ],
  note: 'steps'
},

/* ---------------- Geometry & measurement ---------------- */
{
  id: 'm-perimeter-area', subject: 'math', unit: 'Geometry and measurement', grades: ['3', '4', '5'],
  title: 'Perimeter vs area',
  alt: 'perimeter area rectangle square units fence carpet',
  stuck: ['I always mix up perimeter and area', 'Do I add or multiply?'],
  teks: ['3.6.C', '3.7.B', '4.5.C', '4.5.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Perimeter is the distance all the way around the outside: like a fence. Area is how much surface is covered inside: like carpet. Perimeter is measured in units; area is measured in square units.',
  why: 'These get confused more than almost anything else in elementary geometry, and the fix is a picture, not a formula.',
  words: [
    { w: 'perimeter', d: 'The total distance around the edge.' },
    { w: 'area', d: 'The number of unit squares that cover the inside.' },
    { w: 'square units', d: 'The unit for area. Always written with a small 2, like cm².' }
  ],
  visual: [
    { type: 'areamodel', title: 'A 5 by 3 rectangle', rows: ['1', '1', '1'], cols: [1, 2, 3, 4, 5],
      cells: [['□', '□', '□', '□', '□'], ['□', '□', '□', '□', '□'], ['□', '□', '□', '□', '□']],
      total: 'Area = 15 square units. Perimeter = 5 + 3 + 5 + 3 = 16 units.',
      caption: 'Count the squares inside for area. Walk around the outside for perimeter.' },
    { type: 'decide', question: 'Perimeter or area?', branches: [
      { if: 'Fencing a yard, framing a picture, trim around a room', then: 'PERIMETER: add up the sides.' },
      { if: 'Carpet, paint, tiles, grass seed, wrapping a surface', then: 'AREA: multiply length by width.' },
      { if: 'The units are cm, m, in, ft', then: 'Perimeter (or a length).' },
      { if: 'The units are cm², m², in², ft²', then: 'Area.' }
    ] }
  ],
  steps: [
    'Draw the shape and label every side you know.',
    'Ask what the situation is really about: going AROUND something, or COVERING something?',
    'For perimeter, add every side. For a rectangle you can also do 2 × (length + width).',
    'For area of a rectangle, multiply length × width.',
    'Write the unit. Perimeter uses plain units; area uses square units.',
    'Check: does your area number seem bigger than your perimeter number? For most shapes it will be, but not always. That is not a rule, just a sanity nudge.'
  ],
  example: { prompt: 'A rectangular garden is 8 m long and 5 m wide. Find the perimeter and the area.',
    work: ['Perimeter: 8 + 5 + 8 + 5 = 26, or 2 × (8 + 5) = 26.', 'Area: 8 × 5 = 40.'],
    answer: 'Perimeter = 26 m. Area = 40 m².' },
  traps: [
    'Multiplying when the question asks for perimeter, or adding when it asks for area.',
    'Forgetting the "squared" on an area answer. 40 m and 40 m² are different things.',
    'Only adding two sides for the perimeter of a rectangle. There are four sides.',
    'Using the diagonal or a slanted line as a side length when it is not one.'
  ],
  check: [
    { q: 'You are buying baseboard trim for a room. Perimeter or area?', a: 'Perimeter. It goes around the edge.' },
    { q: 'A square has sides of 6 cm. Area?', a: '36 cm².' },
    { q: 'A rectangle has area 24 and length 6. What is the width?', a: '4, because 6 × 4 = 24.' }
  ],
  links: [
    { t: 'Math is Fun: Perimeter', u: 'https://www.mathsisfun.com/geometry/perimeter.html', d: 'Perimeter for every common shape.' },
    { t: 'Math is Fun: Area', u: 'https://www.mathsisfun.com/geometry/area.html', d: 'Area formulas with diagrams.' }
  ],
  note: 'frayer'
},
{
  id: 'm-classify-shapes', subject: 'math', unit: 'Geometry and measurement', grades: ['K', '1', '2', '3', '4', '5'],
  title: 'Naming and classifying 2D shapes',
  alt: 'polygons quadrilateral triangle attributes sides vertices hierarchy',
  stuck: ['Is a square a rectangle?', 'How do I tell a rhombus from a parallelogram?'],
  teks: ['K.6.A', '2.8.A', '3.6.A', '4.6.D', '5.5'],
  apps: ['Zearn', 'Math Cakes', 'Math Academy', 'AlphaMath'],
  plain: 'Shapes are sorted by their attributes: how many sides, whether the sides are equal, and whether the angles are right angles. A shape can belong to several categories at once. A square really is a rectangle.',
  why: 'Grade 5 asks you to place shapes in a hierarchy of sets and subsets, and that only makes sense if you sort by attributes rather than by what a shape looks like.',
  words: [
    { w: 'polygon', d: 'A closed shape made only of straight sides.' },
    { w: 'vertex', d: 'A corner where two sides meet. Plural: vertices.' },
    { w: 'quadrilateral', d: 'Any polygon with exactly four sides.' },
    { w: 'attribute', d: 'A property of the shape: number of sides, equal sides, right angles.' }
  ],
  visual: [
    { type: 'shapes', list: [
      { l: 'Triangle', sides: 3, d: '3 sides, 3 vertices' },
      { l: 'Quadrilateral', sides: 4, d: '4 sides, 4 vertices' },
      { l: 'Pentagon', sides: 5, d: '5 sides' },
      { l: 'Hexagon', sides: 6, d: '6 sides' }
    ] },
    { type: 'hierarchy', levels: [
      { items: ['Quadrilateral: any 4 sides'] },
      { items: ['Parallelogram: both pairs of sides parallel', 'Trapezoid: at least one pair parallel'] },
      { items: ['Rectangle: 4 right angles', 'Rhombus: 4 equal sides'] },
      { items: ['Square: 4 right angles AND 4 equal sides'] }
    ], note: 'Read downward: every square is a rectangle, a rhombus, a parallelogram, and a quadrilateral.' }
  ],
  steps: [
    'Count the sides. That gives you the family name: 3 = triangle, 4 = quadrilateral, 5 = pentagon, 6 = hexagon.',
    'Check whether opposite sides are parallel.',
    'Check whether the sides are equal in length.',
    'Check whether the corners are right angles.',
    'Give the most specific name that fits, but remember all the broader names still apply.'
  ],
  example: { prompt: 'A shape has 4 sides, both pairs of opposite sides parallel, all four sides equal, and four right angles. Name every category it belongs to.',
    work: ['4 sides → quadrilateral.', 'Both pairs parallel → parallelogram.', '4 right angles → rectangle.', '4 equal sides → rhombus.', 'Both right angles and equal sides → square.'],
    answer: 'It is a square, and also a rhombus, a rectangle, a parallelogram, and a quadrilateral.' },
  traps: [
    'Saying a square is not a rectangle. It is. It just also has the extra property of equal sides.',
    'Judging by how the shape is rotated. A square tilted 45 degrees is still a square, not a diamond.',
    'Counting a curved figure as a polygon. Polygons have only straight sides.',
    'Assuming a shape that looks like it has right angles actually does. Look for the little square mark.'
  ],
  check: [
    { q: 'Is every rectangle a square?', a: 'No. Rectangles need right angles; only some also have four equal sides.' },
    { q: 'How many vertices does a hexagon have?', a: 'Six.' },
    { q: 'A quadrilateral has exactly one pair of parallel sides. What is it?', a: 'A trapezoid.' }
  ],
  links: [
    { t: 'Math is Fun: Quadrilaterals', u: 'https://www.mathsisfun.com/quadrilaterals.html', d: 'The whole quadrilateral family with a diagram of how they relate.' },
    { t: 'Math is Fun: Triangles', u: 'https://www.mathsisfun.com/triangle.html', d: 'Sorting triangles by sides and by angles.' }
  ],
  note: 'frayer'
},
{
  id: 'm-angles', subject: 'math', unit: 'Geometry and measurement', grades: ['4', '5'],
  title: 'Measuring and classifying angles',
  alt: 'acute obtuse right straight protractor degrees',
  stuck: ['I read the wrong row on the protractor', 'Is this angle acute or obtuse?'],
  teks: ['4.7.C', '4.7.D', '4.7.E'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'An angle measures how far something turns, in degrees. A right angle is a quarter turn (90°). Everything smaller is acute; everything between 90° and 180° is obtuse.',
  why: 'A protractor has two scales printed on it, and reading the wrong one is one of the most common errors in fourth grade geometry.',
  words: [
    { w: 'degree', d: 'The unit for angles. A full turn is 360°.' },
    { w: 'vertex', d: 'The point where the two rays of the angle meet.' },
    { w: 'ray', d: 'A straight line that starts at a point and goes on forever one way.' }
  ],
  visual: [
    { type: 'angles' },
    { type: 'flow', steps: [
      'Before measuring, guess: is it smaller or bigger than a right angle?',
      'Put the protractor\'s center hole exactly on the vertex.',
      'Line one ray up with the zero line of the protractor.',
      'Read where the OTHER ray crosses the scale.',
      'Pick the scale that matches your guess. If you guessed acute, the answer must be under 90°.'
    ] }
  ],
  steps: [
    'Estimate first. Acute or obtuse? This is what saves you from the two-scale problem.',
    'Place the center point of the protractor on the vertex of the angle.',
    'Rotate the protractor so one ray runs along the 0° line.',
    'Follow the other ray out to the curved scale and read the number.',
    'Choose the reading that matches your estimate. An acute angle can never measure 150°.',
    'Classify it: under 90° is acute, exactly 90° is right, 90° to 180° is obtuse, exactly 180° is straight.'
  ],
  example: { prompt: 'You measure an angle that clearly looks smaller than a corner. The protractor shows both 40 and 140. Which is it?',
    work: ['It looks smaller than a right angle, so it is acute.', 'Acute means less than 90°.', '140 is more than 90, so it cannot be right.'],
    answer: '40°' },
  traps: [
    'Reading the outer scale when you should read the inner one. Estimating first makes this impossible to get wrong.',
    'Putting the edge of the protractor on the vertex instead of the center hole.',
    'Measuring the length of the rays. Ray length has nothing to do with angle size. A wide angle with short rays is still wide.',
    'Forgetting that the two angles on a straight line add to 180°.'
  ],
  check: [
    { q: 'An angle measures 112°. What kind is it?', a: 'Obtuse: more than 90° but less than 180°.' },
    { q: 'Two angles on a straight line: one is 65°. What is the other?', a: '115°, because they must total 180°.' },
    { q: 'Why estimate before you read the protractor?', a: 'So you know which of the two scales is the right one.' }
  ],
  links: [
    { t: 'Math is Fun: Angles', u: 'https://www.mathsisfun.com/angles.html', d: 'Angle types plus an interactive protractor.' }
  ],
  note: 'steps'
},
{
  id: 'm-volume', subject: 'math', unit: 'Geometry and measurement', grades: ['5', '6'],
  title: 'Volume of rectangular prisms',
  alt: 'volume cubic units length width height box',
  stuck: ['What is the difference between area and volume?', 'Why is it cubic units?'],
  teks: ['5.6.A', '5.6.B', '5.4.G'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Volume is how many unit cubes fit inside a solid. For a box, you find how many cubes cover the bottom layer, then multiply by how many layers tall it is.',
  why: 'Understanding volume as layers is what makes the formula make sense, and it transfers straight to prisms and cylinders in grades 7 and 8.',
  words: [
    { w: 'volume', d: 'The amount of space inside a solid, in cubic units.' },
    { w: 'cubic units', d: 'The unit for volume, written with a small 3: cm³.' },
    { w: 'base area', d: 'The area of the bottom face: the size of one layer.' }
  ],
  visual: [
    { type: 'areamodel', title: 'One layer of a 4 × 3 × 2 box', rows: ['1', '1', '1'], cols: [1, 2, 3, 4],
      cells: [['▢', '▢', '▢', '▢'], ['▢', '▢', '▢', '▢'], ['▢', '▢', '▢', '▢']],
      total: 'One layer holds 12 cubes. Two layers → 24 cubic units.',
      caption: 'Find the bottom layer first, then count the layers.' },
    { type: 'flow', steps: [
      'Find the area of the base: length × width.',
      'That tells you how many cubes fit in ONE layer.',
      'Count how many layers tall the solid is. That is the height.',
      'Multiply the base area by the height.',
      'Label the answer in cubic units.'
    ] }
  ],
  steps: [
    'Identify length, width, and height. Any face can be the base as long as the height is measured perpendicular to it.',
    'Multiply length × width to get the base area: one layer of cubes.',
    'Multiply by the height to stack the layers: V = l × w × h, or V = base area × height.',
    'Write the unit as cubic units (cm³, m³, in³).',
    'To go backwards (given the volume, find a missing side), divide instead: h = V ÷ (l × w).'
  ],
  example: { prompt: 'A box is 6 cm long, 4 cm wide and 3 cm tall. Find the volume.',
    work: ['Base area = 6 × 4 = 24 cm².', 'That is 24 cubes in one layer.', 'There are 3 layers.', '24 × 3 = 72.'],
    answer: '72 cm³' },
  traps: [
    'Adding the three dimensions instead of multiplying.',
    'Writing cm² instead of cm³. Area is 2 dimensions; volume is 3.',
    'Using a slanted edge as the height. Height must be straight up from the base.',
    'Mixing units. Convert everything to the same unit before you multiply.'
  ],
  check: [
    { q: 'A cube has edges of 5 cm. Volume?', a: '5 × 5 × 5 = 125 cm³.' },
    { q: 'A prism has base area 20 cm² and height 7 cm. Volume?', a: '140 cm³.' },
    { q: 'Volume is 60 cm³, length 5, width 3. What is the height?', a: '60 ÷ 15 = 4 cm.' }
  ],
  links: [
    { t: 'Math is Fun: Volume', u: 'https://www.mathsisfun.com/geometry/volume.html', d: 'Volume formulas for every common solid.' },
    { t: 'Math is Fun: Solid Geometry', u: 'https://www.mathsisfun.com/geometry/solid-geometry.html', d: '3D shapes and their properties.' }
  ],
  note: 'steps'
},
{
  id: 'm-coordinate-plane', subject: 'math', unit: 'Geometry and measurement', grades: ['5', '6'],
  title: 'Plotting points on the coordinate plane',
  alt: 'coordinate grid ordered pair x axis y axis quadrants origin',
  stuck: ['I plot (3, 5) at the wrong spot', 'Which number comes first?'],
  teks: ['5.8.A', '5.8.B', '5.8.C', '6.11'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'An ordered pair tells you how far to move sideways and then how far to move up or down, always starting from the origin at (0, 0). The x-coordinate always comes first.',
  why: 'Graphs of linear relationships in grades 7 and 8 are impossible if plotting is still shaky.',
  words: [
    { w: 'origin', d: 'The point (0, 0) where the two axes cross.' },
    { w: 'x-coordinate', d: 'The first number. How far right or left.' },
    { w: 'y-coordinate', d: 'The second number. How far up or down.' },
    { w: 'quadrant', d: 'One of the four regions the axes divide the plane into.' }
  ],
  visual: [
    { type: 'coordplane', range: 5, quadrants: true, points: [{ x: 3, y: 4, l: '(3, 4)', path: true }],
      title: 'Plotting (3, 4): right 3, then up 4',
      caption: 'Always start at the origin. Sideways first, then up or down.' }
  ],
  steps: [
    'Put your finger on the origin, (0, 0).',
    'Read the FIRST number. Move that far along the x-axis: right if positive, left if negative.',
    'Read the SECOND number. From where you stopped, move that far up if positive, down if negative.',
    'Mark the point and label it with the ordered pair.',
    'To read a point off a graph, reverse the process: count across to the axis first, then up or down.'
  ],
  example: { prompt: 'Plot (−2, 3) and name its quadrant.',
    work: ['Start at the origin.', 'First number is −2: move 2 to the LEFT.', 'Second number is 3: move 3 UP.', 'Left and up is the upper-left region.'],
    answer: '(−2, 3) is in Quadrant II.' },
  traps: [
    'Going up first and then across. It is always across, then up. "Down the hall, then up the stairs."',
    'Ignoring negative signs and plotting everything in Quadrant I.',
    'Counting the origin as your first step. The origin is where you start, not one unit over.',
    'Miscounting when each grid square is worth more than 1. Check the scale on the axes.'
  ],
  check: [
    { q: 'Which coordinate comes first?', a: 'The x-coordinate: the sideways one.' },
    { q: 'Where is (0, 4)?', a: 'On the y-axis, 4 up from the origin. No sideways movement.' },
    { q: 'Which quadrant has both coordinates negative?', a: 'Quadrant III (bottom left).' }
  ],
  links: [
    { t: 'Math is Fun: Cartesian Coordinates', u: 'https://www.mathsisfun.com/data/cartesian-coordinates.html', d: 'Interactive plotting practice.' }
  ],
  note: 'steps'
},
{
  id: 'm-measurement-conversion', subject: 'math', unit: 'Geometry and measurement', grades: ['4', '5', '6'],
  title: 'Converting units of measurement',
  alt: 'convert units inches feet meters centimeters ounces pounds capacity',
  stuck: ['Do I multiply or divide to convert?', 'How many ounces in a pound again?'],
  teks: ['4.8.A', '4.8.B', '4.8.C', '5.7', '6.4.H'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Converting is just multiplying or dividing by the relationship between the two units. The only thing you have to decide is which one, and the size of the unit tells you.',
  why: 'Unit errors are silent. The arithmetic looks fine and the answer is wrong by a factor of twelve.',
  words: [
    { w: 'convert', d: 'Rewrite a measurement using a different unit.' },
    { w: 'metric', d: 'The system based on tens: mm, cm, m, km.' },
    { w: 'customary', d: 'The US system: inches, feet, ounces, pounds, cups, gallons.' }
  ],
  visual: [
    { type: 'decide', question: 'Multiply or divide?', branches: [
      { if: 'Going to a SMALLER unit (feet → inches)', then: 'MULTIPLY. You need more of them, so the number gets bigger.' },
      { if: 'Going to a BIGGER unit (inches → feet)', then: 'DIVIDE. You need fewer of them, so the number gets smaller.' }
    ] },
    { type: 'table', title: 'The conversions worth memorizing', head: ['Measure', 'Customary', 'Metric'],
      rows: [['Length', '12 in = 1 ft; 3 ft = 1 yd', '10 mm = 1 cm; 100 cm = 1 m; 1000 m = 1 km'],
             ['Weight / mass', '16 oz = 1 lb; 2000 lb = 1 ton', '1000 g = 1 kg'],
             ['Capacity', '8 fl oz = 1 c; 2 c = 1 pt; 4 c = 1 qt; 4 qt = 1 gal', '1000 mL = 1 L']] }
  ],
  steps: [
    'Write down what unit you have and what unit you want.',
    'Ask: is the new unit smaller or bigger than the old one?',
    'Smaller unit → multiply. Bigger unit → divide.',
    'Find the conversion factor (12, 16, 100, 1000…).',
    'Do the arithmetic, then write the new unit on your answer.',
    'Sanity check: converting 5 feet to inches should give a bigger number, not a smaller one.'
  ],
  example: { prompt: 'Convert 4.5 feet to inches.',
    work: ['Have: feet. Want: inches.', 'An inch is smaller than a foot, so multiply.', '1 ft = 12 in.', '4.5 × 12 = 54.'],
    answer: '54 inches' },
  traps: [
    'Dividing when you should multiply. The number of small units is always bigger.',
    'Mixing systems. There is no clean whole-number conversion between inches and centimeters.',
    'Converting only one measurement in a problem and leaving the other alone. Both must match before you compute.',
    'Forgetting that area and volume conversions square or cube the factor. 1 ft² is 144 in², not 12 in².'
  ],
  check: [
    { q: 'Convert 3 pounds to ounces.', a: '3 × 16 = 48 ounces.' },
    { q: 'Convert 250 cm to meters.', a: '250 ÷ 100 = 2.5 m.' },
    { q: 'You convert meters to kilometres and your number gets bigger. What went wrong?', a: 'A kilometre is bigger than a meter, so you should have divided.' }
  ],
  links: [
    { t: 'Math is Fun: Measurement', u: 'https://www.mathsisfun.com/measure/index.html', d: 'Every unit and conversion in one place.' },
    { t: 'Math is Fun: US Standard Lengths', u: 'https://www.mathsisfun.com/measure/us-standard-length.html', d: 'Inches, feet, yards, miles.' }
  ],
  note: 'strategy'
},
{
  id: 'm-tell-time', subject: 'math', unit: 'Geometry and measurement', grades: ['1', '2', '3'],
  title: 'Telling time and finding elapsed time',
  alt: 'clock hour minute hand elapsed time analog',
  stuck: ['I mix up the hour and minute hand', 'How long from 2:45 to 4:20?'],
  teks: ['1.7.E', '2.9.G', '3.7.C'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'The short hand points at the hour. The long hand counts minutes, five for every number it passes. Elapsed time is just counting forward on a number line made of hours and minutes.',
  why: 'Elapsed time problems appear on every state assessment and are one of the few skills where students who can do the arithmetic still get stuck.',
  words: [
    { w: 'elapsed time', d: 'How much time passed between a start and an end.' },
    { w: 'a.m.', d: 'Midnight to noon.' },
    { w: 'p.m.', d: 'Noon to midnight.' }
  ],
  visual: [
    { type: 'numberline', min: 0, max: 120, title: 'Elapsed time from 2:45 to 4:20',
      ticks: [{ v: 0, l: '2:45' }, { v: 15, l: '3:00' }, { v: 75, l: '4:00' }, { v: 95, l: '4:20' }, { v: 120, l: '', big: false }],
      jumps: [{ from: 0, to: 15, l: '+15 min' }, { from: 15, to: 75, l: '+1 hour' }, { from: 75, to: 95, l: '+20 min' }],
      caption: 'Hop to the next whole hour first, then jump whole hours, then finish the minutes.' },
    { type: 'flow', steps: [
      'Mark the start time on a blank number line.',
      'Hop forward to the next whole hour. Write how many minutes that took.',
      'Jump whole hours until you are just before the end time.',
      'Hop the last few minutes.',
      'Add up all the hops: hours together, minutes together.'
    ] }
  ],
  steps: [
    'Reading a clock: the SHORT hand gives the hour: read the number it has already passed, not the one it is closest to.',
    'The LONG hand gives minutes: count by 5 for each number, then by 1 for each small tick.',
    'For elapsed time, draw an open number line and mark the start.',
    'Hop up to the next whole hour and record the minutes.',
    'Jump whole hours toward the end time.',
    'Hop the remaining minutes and add everything up.'
  ],
  example: { prompt: 'Practice starts at 2:45 and ends at 4:20. How long is it?',
    work: ['2:45 → 3:00 is 15 minutes.', '3:00 → 4:00 is 1 hour.', '4:00 → 4:20 is 20 minutes.', 'Total: 1 hour and 35 minutes.'],
    answer: '1 hour 35 minutes' },
  traps: [
    'Reading the hour hand as the number it is nearest to. At 3:50 the hour hand is nearly on 4, but it is still 3 o\'clock.',
    'Subtracting times like ordinary numbers. 4:20 − 2:45 is not 2.25. There are 60 minutes in an hour, not 100.',
    'Forgetting to cross a.m. into p.m. or the other way.',
    'Counting the number the minute hand points at as the minutes. Pointing at 4 means 20 minutes, not 4.'
  ],
  check: [
    { q: 'The minute hand points at 7. How many minutes?', a: '35, because 7 × 5 = 35.' },
    { q: 'A movie starts at 1:50 and lasts 1 hour 25 minutes. When does it end?', a: '1:50 → 3:00 is 1 h 10 min; 15 more minutes gives 3:15.' },
    { q: 'Which hand is the hour hand?', a: 'The short one.' }
  ],
  links: [
    { t: 'Math is Fun: Time', u: 'https://www.mathsisfun.com/time.html', d: 'Reading clocks with an interactive clock face.' }
  ],
  note: 'steps'
},
{
  id: 'm-money', subject: 'math', unit: 'Geometry and measurement', grades: ['1', '2', '3'],
  title: 'Counting money and making change',
  alt: 'coins pennies nickels dimes quarters change dollars cents',
  stuck: ['I do not know how much each coin is worth', 'How do I count coins that are all mixed up?'],
  teks: ['1.4.A', '1.4.C', '2.5.A', '2.5.B'],
  apps: ['Zearn', 'Math Cakes', 'AlphaMath'],
  plain: 'Every coin has a fixed value. To count a mixed pile, sort from biggest value to smallest and count on, changing your skip-count as the coin changes.',
  why: 'Money is skip counting with a purpose, and it makes place value concrete: 100 cents is one dollar the same way 100 ones is one hundred.',
  words: [
    { w: 'penny', d: '1 cent' }, { w: 'nickel', d: '5 cents' },
    { w: 'dime', d: '10 cents' }, { w: 'quarter', d: '25 cents' }
  ],
  visual: [
    { type: 'table', title: 'Coin values', head: ['Coin', 'Value', 'Count by'],
      rows: [['Quarter', '25¢', '25, 50, 75, 100'], ['Dime', '10¢', '10, 20, 30…'], ['Nickel', '5¢', '5, 10, 15…'], ['Penny', '1¢', '1, 2, 3…']],
      note: '4 quarters, 10 dimes, or 20 nickels each make one dollar.' },
    { type: 'numberline', min: 0, max: 100, title: 'Counting 2 quarters, 1 dime, 3 pennies',
      ticks: [{ v: 0, l: '0' }, { v: 25, l: '25' }, { v: 50, l: '50' }, { v: 60, l: '60' }, { v: 63, l: '63', big: false }, { v: 100, l: '100' }],
      jumps: [{ from: 0, to: 25, l: 'Q' }, { from: 25, to: 50, l: 'Q' }, { from: 50, to: 60, l: 'D' }, { from: 60, to: 63, l: '3¢' }],
      caption: 'Biggest coins first, then count on.' }
  ],
  steps: [
    'Sort the coins into piles: quarters, dimes, nickels, pennies.',
    'Start with the quarters and count by 25.',
    'Keep going with the dimes, counting on by 10 from wherever you are.',
    'Then the nickels by 5, then the pennies by 1.',
    'Write the total with a cent sign, or as dollars if it is 100 or more.',
    'For change, count UP from the price to the amount paid.'
  ],
  example: { prompt: 'You have 3 quarters, 2 dimes, and 4 pennies. How much?',
    work: ['Quarters: 25, 50, 75.', 'Dimes: 85, 95.', 'Pennies: 96, 97, 98, 99.'],
    answer: '99¢' },
  traps: [
    'Counting by size instead of value. A nickel is bigger than a dime but worth half as much.',
    'Starting with the pennies. Always start with the largest value.',
    'Losing your place when the coin type changes. Say the running total out loud.',
    'Writing 99¢ as $99. One hundred cents makes one dollar, so 99¢ is $0.99.'
  ],
  check: [
    { q: 'How many nickels make a quarter?', a: 'Five.' },
    { q: 'You have 2 dimes and 3 nickels. How much?', a: '20 + 15 = 35¢.' },
    { q: 'Something costs 65¢ and you pay with a dollar. What is the change?', a: '35¢. Count up: 65 → 75 → 100.' }
  ],
  links: [
    { t: 'Math is Fun: Money', u: 'https://www.mathsisfun.com/money/index.html', d: 'Coin values and counting practice.' }
  ],
  note: 'steps'
},

/* ---------------- Data ---------------- */
{
  id: 'm-graphs-elementary', subject: 'math', unit: 'Data', grades: ['2', '3', '4', '5'],
  title: 'Reading bar graphs, pictographs and dot plots',
  alt: 'bar graph pictograph dot plot frequency table key scale data',
  stuck: ['I read the graph but got the question wrong', 'What does the key mean?'],
  teks: ['2.10.C', '3.8.A', '3.8.B', '4.9.A', '4.9.B', '5.9.C'],
  apps: ['Zearn', 'Math Cakes', 'Math Academy', 'AlphaMath'],
  plain: 'Before you answer anything about a graph, read the title, both labels, and the scale. Most wrong answers come from reading the bars correctly but misunderstanding what the bars are counting.',
  why: 'Data questions are usually easy arithmetic wrapped in a graph. The graph is the part that trips people up.',
  words: [
    { w: 'scale', d: 'What each gridline is worth. It is not always 1.' },
    { w: 'key', d: 'On a pictograph, what one picture stands for.' },
    { w: 'dot plot', d: 'A number line with a dot for each data value.' }
  ],
  visual: [
    { type: 'bargraph', title: 'Books read this month', max: 20, step: 5, yLabel: 'Number of books', xLabel: 'Student',
      bars: [{ l: 'Ana', v: 15 }, { l: 'Ben', v: 5 }, { l: 'Cruz', v: 20 }, { l: 'Dee', v: 10 }],
      caption: 'Each gridline is 5, not 1. Read the scale before you read the bars.' },
    { type: 'flow', steps: [
      'Read the title. What is this graph about?',
      'Read both axis labels. What is being counted, and what are the categories?',
      'Find the scale. How much is one gridline or one picture worth?',
      'Now read the question and find only the bars or dots it asks about.',
      'Do the arithmetic and check the units.'
    ] }
  ],
  steps: [
    'Read the title first.',
    'Read the label on each axis so you know what the numbers count.',
    'Find the scale. Count the gridlines between two labeled numbers.',
    'On a pictograph, read the key. Half a picture means half the key value.',
    'Answer only what is asked. "How many more" means subtract; "how many altogether" means add.',
    'Recheck your answer against the graph before you submit.'
  ],
  example: { prompt: 'Using the bar graph above, how many more books did Cruz read than Ben?',
    work: ['Cruz\'s bar reaches 20.', 'Ben\'s bar reaches 5.', '"How many more" means subtract.', '20 − 5 = 15.'],
    answer: '15 more books' },
  traps: [
    'Assuming each gridline is worth 1. Check the scale every single time.',
    'Counting bars instead of reading their heights.',
    'Answering "how many altogether" when the question asked "how many more."',
    'Ignoring a pictograph key, or forgetting that half a symbol counts as half the key value.'
  ],
  check: [
    { q: 'A pictograph key says one book = 4 books. A row has 3 and a half books. How many?', a: '3.5 × 4 = 14 books.' },
    { q: 'On a dot plot, what does a stack of 5 dots above the number 7 mean?', a: 'Five pieces of data had the value 7.' },
    { q: 'What is the first thing to read on any graph?', a: 'The title, then the axis labels, then the scale.' }
  ],
  links: [
    { t: 'Math is Fun: Bar Graphs', u: 'https://www.mathsisfun.com/data/bar-graphs.html', d: 'How to read and make bar graphs.' },
    { t: 'Math is Fun: Pictographs', u: 'https://www.mathsisfun.com/data/pictographs.html', d: 'Using the key correctly.' },
    { t: 'Math is Fun: Dot Plots', u: 'https://www.mathsisfun.com/data/dot-plots.html', d: 'Reading dot plots.' }
  ],
  note: 'strategy'
}

]);

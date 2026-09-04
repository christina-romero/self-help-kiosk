/* ============================================================
   MATH: Grades 6 through 8
   TEKS codes are Chapter 111 Subchapter B (Mathematics, Adopted 2012).
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

/* ---------------- Rational numbers ---------------- */
{
  id: 'm-integers-absolute-value', subject: 'math', unit: 'Rational numbers', grades: ['6'],
  title: 'Negative numbers, opposites, and absolute value',
  alt: 'integers negative numbers opposite absolute value order rational',
  stuck: ['Is −8 bigger or smaller than −3?', 'What do those two straight lines mean?'],
  teks: ['6.2.B', '6.2.C', '6.2.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Negative numbers live to the left of zero on the number line. Order works exactly the same as always: further right is bigger. Absolute value asks a different question: how far from zero, ignoring direction.',
  why: 'Ordering negatives is the single most common grade 6 error, and absolute value gets confused with "make it positive" in ways that break later work.',
  words: [
    { w: 'integer', d: 'A whole number, positive, negative, or zero. No fractions.' },
    { w: 'opposite', d: 'Same distance from zero, other side. The opposite of 7 is −7.' },
    { w: 'absolute value', d: 'Distance from zero. Written |−8| = 8. Distance is never negative.' }
  ],
  visual: [
    { type: 'numberline', min: -10, max: 10, title: 'Further right is always bigger',
      ticks: [-10, -5, 0, 5, 10].map(function (v) { return { v: v, l: String(v) }; }),
      points: [{ v: -8, l: '−8' }, { v: -3, l: '−3' }],
      caption: '−8 is further LEFT than −3, so −8 is smaller. But |−8| = 8 is larger than |−3| = 3.' },
    { type: 'decide', question: 'Which question is being asked?', branches: [
      { if: 'Which number is greater?', then: 'Use position. Further right on the number line wins.' },
      { if: 'What is the absolute value?', then: 'Use distance from zero. Drop the sign; the result is never negative.' },
      { if: 'What is the opposite?', then: 'Flip the sign. Same distance, other side.' }
    ] }
  ],
  steps: [
    'Draw or picture a number line with zero in the middle.',
    'To compare, place both numbers. Whichever is further right is greater.',
    'For negatives, remember the bigger the digit, the further LEFT it sits, so the smaller it is.',
    'For absolute value, count the distance from zero and ignore which side.',
    'For opposites, keep the distance and flip the side.'
  ],
  example: { prompt: 'Order from least to greatest: −4, 2, |−7|, −9, 0',
    work: ['|−7| = 7, so the list is −4, 2, 7, −9, 0.', 'Place them on a number line: −9 is furthest left, then −4, then 0, then 2, then 7.'],
    answer: '−9, −4, 0, 2, 7' },
  traps: [
    'Treating −8 as bigger than −3 because 8 is bigger than 3. On the negative side, bigger digits mean smaller values.',
    'Writing |−5| = −5. Absolute value output is never negative.',
    'Thinking absolute value means "delete the minus sign." It means distance: that just happens to look the same for a single number.',
    'Forgetting that zero is neither positive nor negative, and that its opposite is itself.'
  ],
  check: [
    { q: 'Which is greater, −12 or −20?', a: '−12. It is further right on the number line.' },
    { q: 'What is |−15|?', a: '15.' },
    { q: 'What is the opposite of −6?', a: '6.' }
  ],
  links: [
    { t: 'Math is Fun: Positive and Negative Integers', u: 'https://www.mathsisfun.com/positive-negative-integers.html', d: 'Negative numbers on the number line.' },
    { t: 'Math is Fun: Using the Number Line', u: 'https://www.mathsisfun.com/numbers/number-line-using.html', d: 'An interactive number line to drag.' }
  ],
  note: 'frayer'
},
{
  id: 'm-integer-operations', subject: 'math', unit: 'Rational numbers', grades: ['6', '7'],
  title: 'Adding, subtracting, multiplying and dividing negatives',
  alt: 'integer operations negative numbers sign rules subtracting a negative',
  stuck: ['Why does minus a negative become plus?', 'I keep getting the sign wrong'],
  teks: ['6.3.C', '6.3.D', '7.3.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Adding and subtracting negatives is about direction on a number line. Multiplying and dividing negatives follows a separate, simpler rule about how many negative signs there are.',
  why: 'Sign errors are the number one reason correct algebra work produces a wrong answer.',
  words: [
    { w: 'additive inverse', d: 'The opposite of a number. Adding it gives zero.' },
    { w: 'sign', d: 'Whether a number is positive or negative.' }
  ],
  visual: [
    { type: 'numberline', min: -8, max: 8, title: '3 − 7 : start at 3, move 7 LEFT',
      ticks: [-8, -4, 0, 4, 8].map(function (v) { return { v: v, l: String(v) }; }),
      points: [{ v: 3, l: 'start' }, { v: -4, l: 'end' }],
      jumps: [{ from: 3, to: -4, l: 'move 7 left' }],
      caption: 'Subtracting means moving left. If you pass zero, you land on a negative.' },
    { type: 'table', title: 'Multiplying and dividing: count the negative signs', head: ['Signs', 'Result', 'Example'],
      rows: [['positive × positive', 'positive', '3 × 4 = 12'], ['negative × positive', 'negative', '−3 × 4 = −12'],
             ['positive × negative', 'negative', '3 × −4 = −12'], ['negative × negative', 'positive', '−3 × −4 = 12']],
      note: 'Even number of negatives → positive. Odd number of negatives → negative.' }
  ],
  steps: [
    'ADDING: think of it as moving on a number line. A positive moves right, a negative moves left.',
    'SUBTRACTING: rewrite it as adding the opposite. 5 − (−3) becomes 5 + 3.',
    'That is why minus a negative becomes plus: you are taking away a debt.',
    'MULTIPLYING or DIVIDING: work out the digits first and ignore signs.',
    'Then count how many negative signs there were. Even count → positive. Odd count → negative.',
    'Write the sign on your answer as a separate deliberate step, not as an afterthought.'
  ],
  example: { prompt: '−6 − (−10)',
    work: ['Subtracting a negative is adding the opposite: −6 + 10.', 'Start at −6, move 10 to the right.', 'You pass zero at step 6 and go 4 further.'],
    answer: '4' },
  traps: [
    'Applying the "two negatives make a positive" rule to addition. −3 + (−5) is −8, not 8. That rule is only for multiplying and dividing.',
    'Losing the negative when you copy the problem to the next line.',
    'Subtracting the smaller from the bigger and then guessing the sign. Rewrite as addition instead.',
    'Forgetting that a negative in front of a whole expression applies to everything inside.'
  ],
  check: [
    { q: '−7 + 3', a: '−4. Start at −7 and move 3 right.' },
    { q: '−5 × −6', a: '30. Two negatives is an even count, so positive.' },
    { q: '−24 ÷ 4', a: '−6. One negative is an odd count, so negative.' }
  ],
  links: [
    { t: 'Math is Fun: Positive and Negative Integers', u: 'https://www.mathsisfun.com/positive-negative-integers.html', d: 'Sign rules with a number line model.' },
    { t: 'Khan Academy: Pre-algebra', u: 'https://www.khanacademy.org/math/pre-algebra', d: 'Video practice on integer operations.' }
  ],
  note: 'strategy'
},
{
  id: 'm-rational-operations', subject: 'math', unit: 'Rational numbers', grades: ['7'],
  title: 'Operations with all rational numbers',
  alt: 'rational numbers fractions decimals negatives mixed operations',
  stuck: ['The problem has a fraction AND a negative and I freeze', 'Do I convert to decimals or keep fractions?'],
  teks: ['7.3.A', '7.3.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A rational number is anything you can write as a fraction: that includes negatives, decimals, and whole numbers. The operation rules you already know all still apply; you just have to apply two of them at once.',
  why: 'Grade 7 stops separating fraction problems from negative-number problems. Handling both at the same time is the whole skill.',
  words: [
    { w: 'rational number', d: 'Any number that can be written as a fraction of two integers.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Decide the form you will work in: all fractions, or all decimals. Do not mix.',
      'Fractions are safer when denominators are 3, 6, 7, or 9 (they give repeating decimals).',
      'Decimals are faster when everything is tenths, hundredths, or quarters.',
      'Convert every number to that form, keeping its sign.',
      'Apply the operation rule (common denominator to add; straight across to multiply).',
      'Apply the sign rule separately, then simplify.'
    ] },
    { type: 'decide', question: 'Fractions or decimals?', branches: [
      { if: 'Denominators are 3, 6, 7, 9, 11', then: 'Stay in fractions. The decimals repeat and you will lose accuracy.' },
      { if: 'Denominators are 2, 4, 5, 10, 20, 25', then: 'Decimals are fine and usually faster.' },
      { if: 'The answer must be exact', then: 'Fractions.' }
    ] }
  ],
  steps: [
    'Scan the problem and choose one form for everything.',
    'Convert, keeping each number\'s sign attached.',
    'Rewrite every subtraction as adding the opposite.',
    'Do the arithmetic using the rule for that operation.',
    'Decide the sign as its own step.',
    'Simplify and convert back to whatever form the question asked for.'
  ],
  example: { prompt: '−3/4 + 1/6',
    work: ['Denominators 4 and 6 → stay in fractions. LCM is 12.', '−3/4 = −9/12. 1/6 = 2/12.', '−9/12 + 2/12: start at −9 twelfths and move 2 right.', '−7/12.'],
    answer: '−7/12' },
  traps: [
    'Converting a repeating decimal and rounding, then getting marked wrong. 1/3 is not 0.33.',
    'Applying the negative sign to only the numerator or only the denominator: it belongs to the whole fraction.',
    'Switching forms mid-problem so you end up adding 0.5 to 1/3 without converting.',
    'Forgetting to simplify the final answer.'
  ],
  check: [
    { q: 'Would you use fractions or decimals for 2/3 − 1/9?', a: 'Fractions. Ninths and thirds do not make clean decimals.' },
    { q: '−0.4 × 2.5', a: '−1. One negative sign, so the answer is negative.' },
    { q: 'Rewrite 5 − (−1/2) as an addition.', a: '5 + 1/2 = 5 1/2.' }
  ],
  links: [
    { t: 'Math is Fun: Fractions', u: 'https://www.mathsisfun.com/fractions-menu.html', d: 'All fraction operations in one index.' }
  ],
  note: 'strategy'
},

/* ---------------- Proportional reasoning ---------------- */
{
  id: 'm-ratios', subject: 'math', unit: 'Ratios and proportions', grades: ['6', '7'],
  title: 'What a ratio is and how to use one',
  alt: 'ratio part to part part to whole equivalent ratios ratio table',
  stuck: ['Is 3:5 three out of five, or three out of eight?', 'How do I scale a ratio up?'],
  teks: ['6.4.C', '6.4.E', '6.5.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A ratio compares two quantities by division. The trap is that a ratio can compare part to part (3 boys to 5 girls) or part to whole (3 boys out of 8 students), and those are different numbers.',
  why: 'Ratios are the doorway to rates, percents, slope, and similarity. Almost all of grade 7 sits on this idea.',
  words: [
    { w: 'ratio', d: 'A multiplicative comparison of two quantities.' },
    { w: 'part-to-part', d: 'Comparing one group to another group: 3 boys to 5 girls, written 3:5.' },
    { w: 'part-to-whole', d: 'Comparing one group to the total: 3 boys out of 8 students, written 3/8.' },
    { w: 'equivalent ratios', d: 'Ratios that scale to each other: 3:5 = 6:10 = 9:15.' }
  ],
  visual: [
    { type: 'tape', rows: [
      { label: 'Boys', units: 3, each: '4' },
      { label: 'Girls', units: 5, each: '4', total: '= 20' }
    ], caption: 'Ratio 3:5. If each unit is worth 4, there are 12 boys and 20 girls: and 32 students in total.' },
    { type: 'table', title: 'A ratio table scales both sides together', head: ['Boys', 'Girls', 'Total'],
      rows: [['3', '5', '8'], ['6', '10', '16'], ['9', '15', '24'], ['12', '20', '32']],
      note: 'Every row is the same ratio. Multiply both columns by the same number.' }
  ],
  steps: [
    'Read the sentence carefully and decide: is this comparing two parts, or a part to the whole?',
    'Write the ratio in the order the words give it. "3 boys to 5 girls" is 3:5, not 5:3.',
    'To find the whole from a part-to-part ratio, add the parts: 3 + 5 = 8 units total.',
    'Build a ratio table. Multiply both quantities by the same number to scale up.',
    'To find a missing value, figure out the scale factor between the rows and apply it to the other column.',
    'Check your answer against the original ratio: does it still simplify back to 3:5?'
  ],
  example: { prompt: 'A recipe uses 2 cups of flour to 3 cups of milk. How much flour for 12 cups of milk?',
    work: ['Ratio flour : milk = 2 : 3.', 'Milk goes from 3 to 12. That is × 4.', 'Do the same to flour: 2 × 4 = 8.'],
    answer: '8 cups of flour' },
  traps: [
    'Reading 3:5 as "3 out of 5" when it is part-to-part. It is 3 out of 8.',
    'Writing the ratio backwards. Follow the order of the words.',
    'Adding instead of multiplying when you scale. Going from 2:3 to 3:4 is not scaling. It is a different ratio.',
    'Scaling only one side of the ratio.'
  ],
  check: [
    { q: 'A bag has 4 red and 6 blue marbles. What is the ratio of red to total?', a: '4:10, which simplifies to 2:5.' },
    { q: 'Scale 5:2 so the first number is 20.', a: '20:8. Multiply both by 4.' },
    { q: 'Is 6:9 equivalent to 2:3?', a: 'Yes. Divide both by 3.' }
  ],
  links: [
    { t: 'Math is Fun: Ratios', u: 'https://www.mathsisfun.com/numbers/ratio.html', d: 'Ratios explained with worked examples.' },
    { t: 'Math is Fun: Proportions', u: 'https://www.mathsisfun.com/algebra/proportions.html', d: 'Setting two ratios equal and solving.' }
  ],
  note: 'frayer'
},
{
  id: 'm-unit-rate', subject: 'math', unit: 'Ratios and proportions', grades: ['6', '7'],
  title: 'Unit rate and the better buy',
  alt: 'unit rate per one price per unit better deal constant of proportionality',
  stuck: ['Which one do I divide by?', 'How do I know which package is the better deal?'],
  teks: ['6.4.D', '7.4.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A unit rate tells you how much of one thing there is for exactly ONE of the other. You get it by dividing so that the second quantity becomes 1.',
  why: 'Unit rate is the same idea as constant of proportionality in grade 7 and slope in grade 8. Learning it once pays off three times.',
  words: [
    { w: 'rate', d: 'A ratio comparing two quantities with different units, like miles per hour.' },
    { w: 'unit rate', d: 'A rate where the second quantity is 1.' },
    { w: 'per', d: 'The word that signals a unit rate. "Per" means "for each one."' }
  ],
  visual: [
    { type: 'table', title: 'Which is the better buy?', head: ['Package', 'Price', 'Ounces', 'Price per ounce'],
      rows: [['A', '$4.50', '15', '$0.30'], ['B', '$6.00', '24', '$0.25']],
      note: 'Divide price by ounces for both, then compare. B is cheaper per ounce.' },
    { type: 'flow', steps: [
      'Write the rate as a fraction, keeping the units attached.',
      'Decide which unit you want to be "1". That one goes on the bottom.',
      'Divide the top quantity by the bottom quantity.',
      'Write the answer with the words "per" and the unit: $0.30 per ounce.',
      'To compare deals, put both options into the SAME unit rate before you compare.'
    ] }
  ],
  steps: [
    'Write the rate as a fraction with units: 4.50 dollars / 15 ounces.',
    'Ask what the question wants "one" of. Price per ounce means one ounce, so ounces goes on the bottom.',
    'Divide the numerator by the denominator.',
    'Attach the units: dollars per ounce.',
    'If you are comparing, compute the same unit rate for every option: never compare price per ounce against ounces per dollar.',
    'For "better buy," the lower price per unit wins. For "better value," the higher units per dollar wins.'
  ],
  example: { prompt: 'A car travels 245 miles on 7 gallons. What is the unit rate?',
    work: ['Rate: 245 miles / 7 gallons.', 'We want miles per ONE gallon, so gallons goes on the bottom.', '245 ÷ 7 = 35.'],
    answer: '35 miles per gallon' },
  traps: [
    'Dividing the wrong way around. The unit that follows "per" is the one that becomes 1, so it goes on the bottom.',
    'Comparing two different unit rates. Price per ounce and ounces per dollar point in opposite directions.',
    'Dropping the units, then not being able to tell if the answer makes sense.',
    'Rounding too early. Round only at the end.'
  ],
  check: [
    { q: '12 pencils cost $3.00. What is the unit price?', a: '$3.00 ÷ 12 = $0.25 per pencil.' },
    { q: 'You run 3 miles in 24 minutes. What is your rate in minutes per mile?', a: '24 ÷ 3 = 8 minutes per mile.' },
    { q: 'In "miles per hour," which quantity goes on the bottom?', a: 'Hours: the unit that follows "per."' }
  ],
  links: [
    { t: 'Math is Fun: Unit Rate', u: 'https://www.mathsisfun.com/definitions/unit-rate.html', d: 'Definition and examples.' },
    { t: 'Math is Fun: Ratios', u: 'https://www.mathsisfun.com/numbers/ratio.html', d: 'How rates connect back to ratios.' }
  ],
  note: 'strategy'
},
{
  id: 'm-proportional-relationships', subject: 'math', unit: 'Ratios and proportions', grades: ['7', '8'],
  title: 'Proportional vs non-proportional relationships',
  alt: 'proportional constant of proportionality y=kx direct variation straight line through origin',
  stuck: ['How do I tell if a table is proportional?', 'What is k and where do I find it?'],
  teks: ['7.4.A', '7.4.C', '7.7', '8.5.E', '8.5.F'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A relationship is proportional when the two quantities always divide to the same number. On a graph that shows up as a straight line that passes through the origin. If there is a starting fee or a head start, it is not proportional.',
  why: 'This is the bridge between grade 7 ratios and grade 8 linear functions. The constant of proportionality k literally becomes the slope m.',
  words: [
    { w: 'constant of proportionality', d: 'The number k in y = kx. Found by dividing y ÷ x.' },
    { w: 'origin', d: 'The point (0, 0).' },
    { w: 'proportional', d: 'y ÷ x gives the same answer for every pair.' }
  ],
  visual: [
    { type: 'table', title: 'Proportional? Divide y by x for every row.', head: ['x', 'y (proportional)', 'y ÷ x', 'y (NOT proportional)', 'y ÷ x'],
      rows: [['1', '3', '3', '5', '5'], ['2', '6', '3', '7', '3.5'], ['3', '9', '3', '9', '3'], ['4', '12', '3', '11', '2.75']],
      note: 'Left side: y ÷ x is always 3, so k = 3 and y = 3x. Right side: the quotient changes, so it is not proportional.' },
    { type: 'decide', question: 'Is it proportional?', branches: [
      { if: 'From a table', then: 'Divide y by x in every row. All the same → proportional.' },
      { if: 'From a graph', then: 'Straight line AND passes through (0, 0) → proportional.' },
      { if: 'From an equation', then: 'Fits y = kx with nothing added or subtracted → proportional.' },
      { if: 'From a story', then: 'No flat fee, no head start, no starting amount → proportional.' }
    ] }
  ],
  steps: [
    'Find at least two (x, y) pairs.',
    'Divide y by x for each pair.',
    'If every quotient is identical, the relationship is proportional and that quotient is k.',
    'Write the equation y = kx using your k.',
    'If the quotients differ, look for a constant that is being added. That makes it y = mx + b, which is linear but not proportional.',
    'On a graph, check both conditions: straight AND through the origin. One without the other is not enough.'
  ],
  example: { prompt: 'A table shows (2, 5), (4, 10), (6, 15). Is it proportional? Write the equation.',
    work: ['5 ÷ 2 = 2.5', '10 ÷ 4 = 2.5', '15 ÷ 6 = 2.5', 'All the same, so it is proportional with k = 2.5.'],
    answer: 'Yes. y = 2.5x' },
  traps: [
    'Checking only one pair. One matching quotient proves nothing.',
    'Calling any straight line proportional. A line with a y-intercept other than zero is linear but not proportional.',
    'Dividing x by y instead of y by x. Be consistent: k is always y ÷ x.',
    'Missing a hidden starting fee in a word problem: "a $5 membership plus $2 per visit" is not proportional.'
  ],
  check: [
    { q: 'y = 4x + 1. Proportional?', a: 'No. The + 1 means it does not pass through the origin.' },
    { q: 'A table has (3, 12) and (5, 20). Proportional?', a: 'Yes. Both quotients are 4, so y = 4x.' },
    { q: 'What does k represent in a "cost per ticket" problem?', a: 'The price of one ticket: the unit rate.' }
  ],
  links: [
    { t: 'Math is Fun: Proportions', u: 'https://www.mathsisfun.com/algebra/proportions.html', d: 'Proportional reasoning and solving.' },
    { t: 'Khan Academy: Grade 7 math', u: 'https://www.khanacademy.org/math/cc-seventh-grade-math', d: 'Proportional relationships unit.' }
  ],
  note: 'frayer'
},
{
  id: 'm-percent-problems', subject: 'math', unit: 'Ratios and proportions', grades: ['6', '7'],
  title: 'Percent problems: part, whole, and percent',
  alt: 'percent of a number find the whole percent increase decrease tax tip discount',
  stuck: ['I do not know which number is the whole', 'How do I find the original price?'],
  teks: ['6.5.B', '7.4.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Every percent problem has three pieces: the part, the whole, and the percent. You are always given two and asked for the third. Set up part over whole equals percent over 100, and solve.',
  why: 'Tax, tip, discount, markup, commission, and percent change are all the same problem wearing different clothes.',
  words: [
    { w: 'whole', d: 'The amount you are taking a percent OF. It usually follows the word "of."' },
    { w: 'part', d: 'The piece of the whole you end up with.' },
    { w: 'percent change', d: '(new − original) ÷ original, then × 100.' }
  ],
  visual: [
    { type: 'table', title: 'The proportion that solves all three cases', head: ['Question', 'Set up', 'Solve for'],
      rows: [['What is 30% of 60?', 'part/60 = 30/100', 'part = 18'],
             ['18 is what percent of 60?', '18/60 = p/100', 'p = 30'],
             ['18 is 30% of what?', '18/whole = 30/100', 'whole = 60']],
      note: 'Same proportion every time. Only the missing spot moves.' },
    { type: 'tape', rows: [
      { label: 'Whole (100%)', units: 10, each: '10%', total: '= 60' },
      { label: '30%', units: 3, each: '10%', total: '= 18' }
    ], caption: 'Ten strips of 10% make the whole. Three of them is 30%.' }
  ],
  steps: [
    'Find the whole. It is almost always the number right after the word "of," or the original/starting amount.',
    'Identify which of the three pieces is missing.',
    'Write the proportion: part / whole = percent / 100.',
    'Fill in the two values you know.',
    'Cross-multiply and solve for the missing piece.',
    'For increase or decrease, remember to add or subtract at the end. The percent you found is the CHANGE, not the final amount.'
  ],
  example: { prompt: 'A jacket is on sale for 30% off. The sale price is $42. What was the original price?',
    work: ['30% off means you pay 70% of the original.', 'So $42 is the part, 70 is the percent, and the original is the whole.', '42 / whole = 70 / 100.', 'Cross-multiply: 70 × whole = 4200.', 'whole = 4200 ÷ 70 = 60.'],
    answer: '$60' },
  traps: [
    'Using the sale price as the whole. The whole is always the ORIGINAL amount.',
    'Finding the discount and calling it the answer when the question asked for the sale price. Subtract it.',
    'For "30% off," multiplying by 0.30. That gives the discount. Multiply by 0.70 to get the sale price directly.',
    'Percent change: dividing by the new value instead of the original. Always divide by the original.'
  ],
  check: [
    { q: 'What is 15% of 80?', a: '12.' },
    { q: 'A $50 item has 8% tax. What is the total?', a: '50 × 0.08 = 4, so $54.' },
    { q: 'A price rises from $20 to $25. What is the percent increase?', a: '5 ÷ 20 = 0.25, so 25%.' }
  ],
  links: [
    { t: 'Math is Fun: Percentage', u: 'https://www.mathsisfun.com/percentage.html', d: 'All three percent cases with examples.' }
  ],
  note: 'strategy'
},
{
  id: 'm-scale-similar', subject: 'math', unit: 'Ratios and proportions', grades: ['7', '8'],
  title: 'Scale factor, similar figures and dilations',
  alt: 'scale factor similar figures dilation enlarge reduce corresponding sides',
  stuck: ['Which side matches which?', 'Do I multiply or divide by the scale factor?'],
  teks: ['7.5.A', '7.5.C', '8.3.A', '8.3.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Similar figures are the same shape at a different size. Every pair of matching sides has the same ratio, and that ratio is the scale factor. Angles never change.',
  why: 'Scale drawings, maps, models, and dilations on the coordinate plane are all one skill.',
  words: [
    { w: 'similar', d: 'Same shape, different size. Angles equal, sides proportional.' },
    { w: 'scale factor', d: 'What you multiply the original by to get the image.' },
    { w: 'corresponding sides', d: 'Sides in the same position in each figure.' }
  ],
  visual: [
    { type: 'table', title: 'A triangle dilated by a scale factor of 2.5', head: ['Side', 'Original', 'Image', 'Image ÷ Original'],
      rows: [['a', '4', '10', '2.5'], ['b', '6', '15', '2.5'], ['c', '8', '20', '2.5']],
      note: 'Every ratio matches. That constant ratio is the scale factor.' },
    { type: 'decide', question: 'Multiply or divide by the scale factor?', branches: [
      { if: 'Going from the original to the bigger image', then: 'MULTIPLY by the scale factor.' },
      { if: 'Going from the image back to the original', then: 'DIVIDE by the scale factor.' },
      { if: 'Scale factor is between 0 and 1', then: 'The image is SMALLER. That is a reduction, and it is still called multiplying.' }
    ] }
  ],
  steps: [
    'Match up corresponding sides. Redraw both figures in the same orientation if you need to.',
    'Divide one image side by its matching original side. That is the scale factor.',
    'Check it with a second pair of sides. If they disagree, the figures are not similar.',
    'To find a missing side on the image, multiply the original by the scale factor.',
    'To find a missing side on the original, divide the image by the scale factor.',
    'Remember: angles stay exactly the same. Only lengths change.'
  ],
  example: { prompt: 'Two similar rectangles. The small one is 3 by 5. The large one has a width of 12. Find its length.',
    work: ['Matching widths: 3 → 12. Scale factor = 12 ÷ 3 = 4.', 'Apply the same factor to the length: 5 × 4 = 20.'],
    answer: '20' },
  traps: [
    'Pairing the wrong sides because one figure is rotated or flipped. Match by position, not by which looks similar on the page.',
    'Adding the difference instead of multiplying. Going from 3 to 12 is × 4, not + 9.',
    'Scaling the angles. Angles never change in similar figures.',
    'Forgetting that area does NOT scale by the same factor. If lengths scale by 3, area scales by 9.'
  ],
  check: [
    { q: 'Scale factor 0.5. Is the image bigger or smaller?', a: 'Smaller. It is half the size.' },
    { q: 'A model is built at 1:24. The real car is 192 inches. How long is the model?', a: '192 ÷ 24 = 8 inches.' },
    { q: 'Similar triangles have a scale factor of 3. What happens to the angles?', a: 'Nothing. They stay identical.' }
  ],
  links: [
    { t: 'Math is Fun: Similar Shapes', u: 'https://www.mathsisfun.com/geometry/similar.html', d: 'What makes two figures similar.' },
    { t: 'Math is Fun: Scale', u: 'https://www.mathsisfun.com/definitions/scale.html', d: 'Scale drawings and models.' }
  ],
  note: 'steps'
},

/* ---------------- Expressions and equations ---------------- */
{
  id: 'm-expressions-variables', subject: 'math', unit: 'Expressions and equations', grades: ['6', '7'],
  title: 'Writing and simplifying algebraic expressions',
  alt: 'variable expression like terms coefficient distribute combine',
  stuck: ['Can I combine 3x and 5?', 'How do I turn words into an expression?'],
  teks: ['6.7.B', '6.7.C', '6.7.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A variable is a letter standing in for a number you do not know yet. You can only add or subtract terms that have exactly the same variable part: 3x and 5x combine, but 3x and 5 do not.',
  why: 'Every equation you solve from here on starts by simplifying an expression. Combining unlike terms is the most common way to break a problem before you have even started solving it.',
  words: [
    { w: 'term', d: 'A single piece of an expression, separated by + or −.' },
    { w: 'coefficient', d: 'The number multiplied by the variable. In 7x the coefficient is 7.' },
    { w: 'like terms', d: 'Terms with the identical variable part: 3x and 5x. Not 3x and 3x².' },
    { w: 'expression', d: 'Math with no equals sign. You simplify it; you do not solve it.' }
  ],
  visual: [
    { type: 'table', title: 'Turning words into expressions', head: ['Words', 'Expression'],
      rows: [['5 more than a number', 'n + 5'], ['5 less than a number', 'n − 5'], ['a number decreased by 5', 'n − 5'],
             ['twice a number, plus 3', '2n + 3'], ['3 less than twice a number', '2n − 3'], ['the quotient of a number and 4', 'n ÷ 4, or n/4']],
      note: 'Watch "less than": it reverses the order. "5 less than n" is n − 5, not 5 − n.' },
    { type: 'flow', steps: [
      'Distribute first: multiply anything outside parentheses by everything inside.',
      'Identify like terms by their variable part, including the exponent.',
      'Combine like terms by adding or subtracting their coefficients only.',
      'The variable part never changes: 3x + 5x is 8x, not 8x².',
      'Terms with no variable (constants) combine only with each other.'
    ] }
  ],
  steps: [
    'If there are parentheses with a number outside, distribute: multiply that number by EVERY term inside.',
    'Underline each set of like terms with a different mark so you can see them.',
    'Add or subtract only the coefficients. Keep the variable part exactly as it was.',
    'Combine the constants separately.',
    'Write the simplified expression, usually with the variable term first.',
    'Check by substituting a number for the variable into both the original and your simplified version. They should give the same value.'
  ],
  example: { prompt: 'Simplify 4(x + 3) − 2x + 5',
    work: ['Distribute the 4: 4x + 12 − 2x + 5.', 'Like terms with x: 4x and −2x → 2x.', 'Constants: 12 and 5 → 17.'],
    answer: '2x + 17' },
  traps: [
    'Combining 3x and 5 into 8x. A constant is not like a variable term.',
    'Distributing to only the first term inside the parentheses. 4(x + 3) is 4x + 12, not 4x + 3.',
    'Forgetting that a minus sign in front of parentheses distributes too. −(x − 4) is −x + 4.',
    'Changing the exponent when you combine. 3x + 5x = 8x, never 8x².'
  ],
  check: [
    { q: 'Simplify 7y − 2y + 4', a: '5y + 4. The 4 cannot combine with the y terms.' },
    { q: 'Write "8 less than three times a number."', a: '3n − 8.' },
    { q: 'Are 5x and 5x² like terms?', a: 'No. The exponents differ, so the variable parts are not identical.' }
  ],
  links: [
    { t: 'Math is Fun: Introduction to Algebra', u: 'https://www.mathsisfun.com/algebra/introduction.html', d: 'What variables and expressions are.' }
  ],
  note: 'steps'
},
{
  id: 'm-one-step-equations', subject: 'math', unit: 'Expressions and equations', grades: ['6', '7'],
  title: 'Solving one-step equations',
  alt: 'one step equations inverse operations solve for x balance',
  stuck: ['Do I add or subtract to get rid of it?', 'How do I know if my answer is right?'],
  teks: ['6.9.A', '6.10.A', '6.10.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'An equation is a balanced scale. To get the variable alone, you undo whatever is being done to it. And you must do the same thing to both sides so the scale stays balanced.',
  why: 'Every equation you will ever solve is this idea repeated. Get it exactly right now and two-step equations are trivial.',
  words: [
    { w: 'inverse operation', d: 'The operation that undoes another. Addition undoes subtraction; division undoes multiplication.' },
    { w: 'isolate', d: 'Get the variable alone on one side.' },
    { w: 'solution', d: 'The value that makes the equation true.' }
  ],
  visual: [
    { type: 'balance', left: 'x + 7', right: '12', title: 'x + 7 = 12',
      rule: 'Subtract 7 from BOTH sides to keep it balanced.', sub: 'x + 7 − 7 = 12 − 7, so x = 5.' },
    { type: 'table', title: 'Which inverse do I use?', head: ['The equation does this to x', 'You do this'],
      rows: [['adds a number (x + 7)', 'subtract that number'], ['subtracts a number (x − 3)', 'add that number'],
             ['multiplies (5x)', 'divide by that number'], ['divides (x/4)', 'multiply by that number']] }
  ],
  steps: [
    'Look at what is being done TO the variable. Is it being added to, subtracted from, multiplied, or divided?',
    'Choose the inverse operation.',
    'Apply that inverse to BOTH sides of the equation. Write it out under both sides; do not do it in your head.',
    'Simplify each side.',
    'The variable should now be alone. That is your solution.',
    'CHECK: put your answer back into the original equation and confirm both sides are equal.'
  ],
  example: { prompt: 'Solve 6x = 42',
    work: ['x is being multiplied by 6.', 'The inverse of multiplying by 6 is dividing by 6.', '6x ÷ 6 = 42 ÷ 6.', 'x = 7.', 'Check: 6 × 7 = 42. ✓'],
    answer: 'x = 7' },
  traps: [
    'Doing the operation to only one side. The scale tips and the answer is wrong.',
    'Using the same operation instead of the inverse. If it says x + 7, you subtract 7. You do not add 7.',
    'Forgetting to check. Substituting your answer back takes ten seconds and catches nearly every error.',
    'With x/4 = 3, subtracting 4. Division is undone by multiplication.'
  ],
  check: [
    { q: 'Solve x − 9 = 4', a: 'Add 9 to both sides: x = 13.' },
    { q: 'Solve n/5 = 6', a: 'Multiply both sides by 5: n = 30.' },
    { q: 'How do you know your solution is right?', a: 'Substitute it into the original equation and check both sides match.' }
  ],
  links: [
    { t: 'Math is Fun: Solving Equations', u: 'https://www.mathsisfun.com/algebra/equations-solving.html', d: 'The balance model, worked through.' }
  ],
  note: 'steps'
},
{
  id: 'm-two-step-equations', subject: 'math', unit: 'Expressions and equations', grades: ['7', '8'],
  title: 'Two-step equations and variables on both sides',
  alt: 'two step equations variables on both sides solve for x distribute',
  stuck: ['Which step do I undo first?', 'There is an x on both sides and I do not know what to do'],
  teks: ['7.10.A', '7.11.A', '8.8.A', '8.8.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Undo the operations in the reverse order they were applied: the opposite of the order of operations. Deal with addition and subtraction first, then multiplication and division. If there are variables on both sides, collect them onto one side first.',
  why: 'This is the last purely procedural equation skill before high school algebra, and it is the one most 8th graders lose points on.',
  words: [
    { w: 'collect terms', d: 'Move all the variable terms to one side of the equation.' },
    { w: 'distribute', d: 'Multiply the outside number by everything inside the parentheses.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Distribute to clear any parentheses.',
      'Combine like terms on each side separately.',
      'If x appears on both sides, add or subtract to move all x terms to one side. Move the SMALLER x term so you avoid negatives.',
      'Undo addition or subtraction first, on both sides.',
      'Undo multiplication or division last, on both sides.',
      'Check by substituting your answer into the ORIGINAL equation.'
    ] },
    { type: 'balance', left: '2x + 3', right: '11', title: 'Undo in reverse order',
      rule: 'Subtract 3 first, then divide by 2.', sub: 'Not the other way round. Peel the outside layer first.' }
  ],
  steps: [
    'Distribute if there are parentheses.',
    'Combine like terms on each side.',
    'If there are variable terms on both sides, subtract the smaller one from both sides so it disappears from one side.',
    'Undo the addition or subtraction that is attached to the variable term.',
    'Undo the multiplication or division on the variable.',
    'Substitute your answer into the ORIGINAL equation to check.'
  ],
  example: { prompt: 'Solve 5x − 4 = 3x + 10',
    work: ['No parentheses, nothing to combine yet.', '3x is the smaller variable term, so subtract 3x from both sides: 2x − 4 = 10.', 'Add 4 to both sides: 2x = 14.', 'Divide both sides by 2: x = 7.', 'Check: 5(7) − 4 = 31, and 3(7) + 10 = 31. ✓'],
    answer: 'x = 7' },
  traps: [
    'Dividing before you subtract. If you divide 2x + 3 = 11 by 2 first, you have to divide the 3 as well: messy and error-prone.',
    'Moving the bigger variable term and creating negatives you did not need.',
    'Distributing a negative to only the first term. −2(x − 5) is −2x + 10.',
    'Checking your answer in a simplified line instead of the original equation. If you made an error in line 2, that check will not catch it.'
  ],
  check: [
    { q: 'Solve 3x + 7 = 22', a: 'Subtract 7: 3x = 15. Divide by 3: x = 5.' },
    { q: 'In 4x + 2 = 7x − 13, which x term should you move?', a: '4x, the smaller one. That keeps the remaining coefficient positive.' },
    { q: 'Solve 2(x + 3) = 16', a: 'Distribute: 2x + 6 = 16. Subtract 6: 2x = 10. Divide: x = 5.' }
  ],
  links: [
    { t: 'Math is Fun: Solving Equations', u: 'https://www.mathsisfun.com/algebra/equations-solving.html', d: 'Multi-step examples.' },
    { t: 'Khan Academy: Grade 8 math', u: 'https://www.khanacademy.org/math/cc-eighth-grade-math', d: 'Equation practice with hints.' }
  ],
  note: 'steps'
},
{
  id: 'm-inequalities', subject: 'math', unit: 'Expressions and equations', grades: ['6', '7'],
  title: 'Solving and graphing inequalities',
  alt: 'inequalities greater than less than open closed circle flip the sign',
  stuck: ['When do I flip the inequality sign?', 'Open circle or closed circle?'],
  teks: ['6.9.B', '6.10.A', '7.11.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'You solve an inequality exactly like an equation, with one extra rule: if you multiply or divide both sides by a NEGATIVE number, the inequality sign flips direction.',
  why: 'The flip rule is a single line of the lesson that costs students a whole unit of accuracy when they miss it.',
  words: [
    { w: 'inequality', d: 'A statement using <, >, ≤, or ≥ instead of =.' },
    { w: '≤', d: 'less than or equal to' }, { w: '≥', d: 'greater than or equal to' }
  ],
  visual: [
    { type: 'numberline', min: -2, max: 8, title: 'Graphing x > 3',
      ticks: [-2, 0, 2, 4, 6, 8].map(function (v) { return { v: v, l: String(v) }; }),
      points: [{ v: 3, l: 'open circle at 3' }],
      jumps: [{ from: 3, to: 8, l: 'shade this way' }],
      caption: 'Open circle because 3 itself is NOT included. Shade right because x is greater.' },
    { type: 'table', title: 'Circle and direction', head: ['Symbol', 'Circle', 'Shade'],
      rows: [['x > 3', 'open (hollow)', 'right'], ['x ≥ 3', 'closed (filled)', 'right'],
             ['x < 3', 'open (hollow)', 'left'], ['x ≤ 3', 'closed (filled)', 'left']],
      note: 'The line under the symbol means "or equal to," which means fill the circle in.' }
  ],
  steps: [
    'Solve it exactly the way you would solve an equation.',
    'Watch for the one exception: if you multiply or divide both sides by a negative number, flip the inequality sign.',
    'Adding or subtracting a negative does NOT flip anything.',
    'To graph, put a circle on the boundary number: open if it is < or >, closed if it is ≤ or ≥.',
    'Shade toward the numbers that make the statement true. Test one number from your shaded side to be sure.'
  ],
  example: { prompt: 'Solve and graph −3x ≥ 12',
    work: ['Divide both sides by −3.', 'Dividing by a negative, so flip ≥ to ≤.', 'x ≤ −4.', 'Graph: closed circle at −4, shade left.', 'Test x = −10: −3(−10) = 30, and 30 ≥ 12. ✓'],
    answer: 'x ≤ −4' },
  traps: [
    'Flipping the sign when you only added or subtracted a negative. The flip is ONLY for multiplying or dividing by a negative.',
    'Forgetting to flip at all. Always test one value from your answer to catch this.',
    'Using an open circle for ≤ or ≥. The line under the symbol means the boundary is included.',
    'Shading the wrong direction after solving. Test a number: it takes five seconds.'
  ],
  check: [
    { q: 'Solve −2x < 10', a: 'Divide by −2 and flip: x > −5.' },
    { q: 'x ≥ 7. Open or closed circle?', a: 'Closed. The "or equal to" includes 7.' },
    { q: 'Does x − 5 > 2 need a flip?', a: 'No. You only add 5 to both sides: x > 7.' }
  ],
  links: [
    { t: 'Math is Fun: Inequalities', u: 'https://www.mathsisfun.com/algebra/inequality.html', d: 'Solving rules including when to flip.' }
  ],
  note: 'steps'
},
{
  id: 'm-exponents', subject: 'math', unit: 'Expressions and equations', grades: ['6', '8'],
  title: 'Exponents and powers',
  alt: 'exponent power base squared cubed exponent rules',
  stuck: ['Is 3² the same as 3 × 2?', 'What does a negative exponent mean?'],
  teks: ['6.7.A', '8.2.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'An exponent tells you how many times to use the base as a factor. 3⁴ means 3 × 3 × 3 × 3, not 3 × 4. That single confusion causes most exponent errors.',
  why: 'Exponents drive scientific notation, area and volume formulas, and every growth pattern in later math.',
  words: [
    { w: 'base', d: 'The number being multiplied. In 3⁴ the base is 3.' },
    { w: 'exponent', d: 'How many times the base is used as a factor. In 3⁴ the exponent is 4.' },
    { w: 'squared', d: 'To the power of 2.' }, { w: 'cubed', d: 'To the power of 3.' }
  ],
  visual: [
    { type: 'table', title: 'What the exponent really means', head: ['Written', 'Means', 'Value', 'NOT'],
      rows: [['3²', '3 × 3', '9', '6'], ['3³', '3 × 3 × 3', '27', '9'], ['2⁵', '2 × 2 × 2 × 2 × 2', '32', '10'],
             ['5¹', '5', '5', '—'], ['7⁰', 'anything to the zero', '1', '0']],
      note: 'Anything (except 0) to the power of 0 equals 1. That is a rule worth memorizing.' },
    { type: 'flow', steps: [
      'Read the exponent as "how many times do I write the base down?"',
      'Write out the repeated multiplication if you are unsure.',
      'Multiply left to right.',
      'For a negative base in parentheses, the sign is included: (−2)³ = −8.',
      'Without parentheses the negative is not part of the base: −2⁴ means −(2⁴) = −16.'
    ] }
  ],
  steps: [
    'Identify the base and the exponent.',
    'Write out the multiplication in full the first few times you practice.',
    'Multiply step by step. Do not try to do it all at once.',
    'Check whether a negative sign is inside or outside the parentheses: it changes the answer.',
    'Remember exponents come before multiplication and division in the order of operations.'
  ],
  example: { prompt: 'Evaluate 2 × 3³',
    work: ['Exponents first: 3³ = 3 × 3 × 3 = 27.', 'Then multiply: 2 × 27 = 54.'],
    answer: '54' },
  traps: [
    'Multiplying the base by the exponent. 3⁴ is 81, not 12.',
    'Doing the multiplication before the exponent. In 2 × 3³, the cube happens first.',
    'Ignoring parentheses on a negative base. (−3)² = 9 but −3² = −9.',
    'Thinking anything to the zero power is 0. It is 1.'
  ],
  check: [
    { q: 'What is 4³?', a: '64. That is 4 × 4 × 4.' },
    { q: 'What is 10⁰?', a: '1.' },
    { q: 'What is (−2)⁴?', a: '16. Four negatives is an even count, so the answer is positive.' }
  ],
  links: [
    { t: 'Math is Fun: Exponents', u: 'https://www.mathsisfun.com/exponent.html', d: 'What exponents mean, with the laws of exponents.' }
  ],
  note: 'frayer'
},
{
  id: 'm-scientific-notation', subject: 'math', unit: 'Expressions and equations', grades: ['8'],
  title: 'Scientific notation',
  alt: 'scientific notation powers of ten very large small numbers standard form',
  stuck: ['Which way do I move the decimal point?', 'What does a negative exponent mean here?'],
  teks: ['8.2.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Scientific notation writes any number as a value between 1 and 10, multiplied by a power of ten. The exponent counts how many places the decimal point moved.',
  why: 'Science classes and calculators both use it constantly, and it makes very large and very small numbers comparable at a glance.',
  words: [
    { w: 'standard form', d: 'The ordinary way of writing a number: 45,000.' },
    { w: 'scientific notation', d: 'a × 10ⁿ, where a is at least 1 and less than 10.' }
  ],
  visual: [
    { type: 'table', title: 'Moving the decimal point', head: ['Standard form', 'Scientific notation', 'Why'],
      rows: [['45,000', '4.5 × 10⁴', 'moved 4 places LEFT → positive 4'],
             ['0.00072', '7.2 × 10⁻⁴', 'moved 4 places RIGHT → negative 4'],
             ['6,200,000', '6.2 × 10⁶', 'moved 6 places left'],
             ['0.038', '3.8 × 10⁻²', 'moved 2 places right']],
      note: 'Big numbers get positive exponents. Small numbers (less than 1) get negative exponents.' },
    { type: 'decide', question: 'Positive or negative exponent?', branches: [
      { if: 'The original number is 10 or bigger', then: 'Positive exponent. It is a big number.' },
      { if: 'The original number is less than 1', then: 'Negative exponent. It is a small number.' },
      { if: 'Converting BACK to standard form and the exponent is positive', then: 'Move the point RIGHT, making the number bigger.' },
      { if: 'Converting back and the exponent is negative', then: 'Move the point LEFT, making the number smaller.' }
    ] }
  ],
  steps: [
    'Place the decimal point so exactly one non-zero digit sits in front of it. That gives you the "a" part.',
    'Count how many places you moved the point.',
    'If the original number was large, the exponent is positive. If it was less than 1, the exponent is negative.',
    'Write it as a × 10ⁿ.',
    'To reverse it, move the point the other way the same number of places, filling with zeros.',
    'Sanity check: a negative exponent must produce a number smaller than 1.'
  ],
  example: { prompt: 'Write 0.000305 in scientific notation.',
    work: ['Put the point after the first non-zero digit: 3.05.', 'Count the moves from 0.000305 to 3.05: four places right.', 'The original was less than 1, so the exponent is negative.'],
    answer: '3.05 × 10⁻⁴' },
  traps: [
    'Leaving more than one digit in front of the decimal. 45 × 10³ is not proper scientific notation; 4.5 × 10⁴ is.',
    'Getting the sign of the exponent backwards. Tiny number, negative exponent.',
    'Thinking a negative exponent makes the number negative. 3 × 10⁻⁴ is small but still positive.',
    'Miscounting the zeros. Count decimal-point moves, not zeros.'
  ],
  check: [
    { q: 'Write 92,000 in scientific notation.', a: '9.2 × 10⁴.' },
    { q: 'Write 5.6 × 10⁻³ in standard form.', a: '0.0056.' },
    { q: 'Which is bigger, 3 × 10⁵ or 9 × 10⁴?', a: '3 × 10⁵. Compare the exponents first.' }
  ],
  links: [
    { t: 'Math is Fun: Scientific Notation', u: 'https://www.mathsisfun.com/numbers/scientific-notation.html', d: 'Converting both directions with practice.' }
  ],
  note: 'steps'
},
{
  id: 'm-square-roots', subject: 'math', unit: 'Expressions and equations', grades: ['8'],
  title: 'Square roots and the real number system',
  alt: 'square root perfect square irrational rational real numbers approximate',
  stuck: ['How do I estimate √50 without a calculator?', 'What makes a number irrational?'],
  teks: ['8.2.A', '8.2.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A square root asks: what number times itself gives this? If the answer is a whole number, the original was a perfect square. If not, the root is irrational: a decimal that never ends and never repeats.',
  why: 'Square roots are how you finish every Pythagorean theorem problem, and the rational/irrational distinction is directly assessed in grade 8.',
  words: [
    { w: 'perfect square', d: 'A number whose square root is a whole number: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.' },
    { w: 'rational', d: 'Can be written as a fraction. Includes terminating and repeating decimals.' },
    { w: 'irrational', d: 'Cannot be written as a fraction. The decimal never ends and never repeats. √2 and π are irrational.' }
  ],
  visual: [
    { type: 'table', title: 'The perfect squares worth memorizing', head: ['n', 'n²'],
      rows: [['1, 2, 3, 4', '1, 4, 9, 16'], ['5, 6, 7, 8', '25, 36, 49, 64'], ['9, 10, 11, 12', '81, 100, 121, 144'], ['13, 14, 15', '169, 196, 225']],
      note: 'Knowing these lets you estimate any square root in your head.' },
    { type: 'numberline', min: 6, max: 8, title: 'Estimating √50',
      ticks: [{ v: 6, l: '6' }, { v: 7, l: '7 (√49)' }, { v: 8, l: '8 (√64)' }],
      points: [{ v: 7.07, l: '√50' }],
      caption: '50 sits just past 49, so √50 is just past 7: about 7.1.' }
  ],
  steps: [
    'Ask: is this a perfect square? Check your memorized list.',
    'If yes, the root is that whole number and the answer is rational.',
    'If no, find the two perfect squares it falls between.',
    'The root is between those two whole numbers.',
    'Judge how close it is to each end to estimate the decimal.',
    'Classify: perfect square roots are rational; all other square roots of whole numbers are irrational.'
  ],
  example: { prompt: 'Estimate √72 and classify it.',
    work: ['64 and 81 are the perfect squares around 72.', 'So √72 is between 8 and 9.', '72 is closer to 64 than to 81, so the answer is a bit past 8.', '8.5² = 72.25, which is just over, so √72 is about 8.49.', '72 is not a perfect square, so √72 is irrational.'],
    answer: 'About 8.5, and irrational.' },
  traps: [
    'Dividing by 2 instead of taking the root. √16 is 4, not 8.',
    'Calling 0.333… irrational. It repeats, so it is rational (it equals 1/3).',
    'Assuming every square root is irrational. √25 is exactly 5.',
    'Rounding to a whole number when the question asks for an estimate to the nearest tenth.'
  ],
  check: [
    { q: 'What is √81?', a: '9.' },
    { q: 'Between which two whole numbers is √30?', a: '5 and 6, because 25 < 30 < 36.' },
    { q: 'Is √49 rational or irrational?', a: 'Rational. It equals exactly 7.' }
  ],
  links: [
    { t: 'Math is Fun: Square Roots', u: 'https://www.mathsisfun.com/square-root.html', d: 'What roots are and how to estimate them.' }
  ],
  note: 'frayer'
},

/* ---------------- Linear functions ---------------- */
{
  id: 'm-slope', subject: 'math', unit: 'Linear relationships', grades: ['8'],
  title: 'Slope and rate of change',
  alt: 'slope rise over run rate of change steepness positive negative',
  stuck: ['Is it rise over run or run over rise?', 'How do I get slope from a table?'],
  teks: ['8.4.A', '8.4.B', '8.4.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Slope measures steepness: how much the line goes up for every one step right. It is rise over run: the change in y divided by the change in x.',
  why: 'Slope is the unit rate from grade 7 in graph form. Everything about linear functions runs through it.',
  words: [
    { w: 'rise', d: 'The vertical change between two points.' },
    { w: 'run', d: 'The horizontal change between two points.' },
    { w: 'rate of change', d: 'The same thing as slope, in a real-world context.' }
  ],
  visual: [
    { type: 'slope', m: 2, b: -1, title: 'y = 2x − 1: slope 2, y-intercept −1' },
    { type: 'table', title: 'Getting slope from a table: divide the changes', head: ['x', 'y', 'change in x', 'change in y'],
      rows: [['1', '5', '—', '—'], ['3', '11', '+2', '+6'], ['5', '17', '+2', '+6'], ['7', '23', '+2', '+6']],
      note: 'Slope = change in y ÷ change in x = 6 ÷ 2 = 3.' }
  ],
  steps: [
    'From a graph: pick two points where the line crosses exact grid intersections.',
    'Count how far UP or DOWN from the first point to the second. That is the rise. Down is negative.',
    'Count how far RIGHT to get to the second point. That is the run.',
    'Slope = rise ÷ run.',
    'From a table: pick two rows. Slope = (change in y) ÷ (change in x).',
    'Check the sign against the picture: a line going up left-to-right has a positive slope; going down means negative.'
  ],
  example: { prompt: 'A line passes through (2, 3) and (6, 11). Find the slope.',
    work: ['Change in y: 11 − 3 = 8.', 'Change in x: 6 − 2 = 4.', 'Slope = 8 ÷ 4 = 2.'],
    answer: 'slope = 2' },
  traps: [
    'Computing run over rise. It is rise (vertical) on top.',
    'Subtracting the coordinates in a different order on top and bottom. If you do y₂ − y₁ on top, you must do x₂ − x₁ on the bottom.',
    'Forgetting the negative on a line that goes downhill.',
    'Reading grid squares as 1 when the axis scale says otherwise.'
  ],
  check: [
    { q: 'A line rises 3 for every 1 across. Slope?', a: '3.' },
    { q: 'A line goes down 2 for every 4 across. Slope?', a: '−2/4 = −1/2.' },
    { q: 'What is the slope of a horizontal line?', a: '0. There is no rise.' }
  ],
  links: [
    { t: 'Math is Fun: Gradient (Slope)', u: 'https://www.mathsisfun.com/gradient.html', d: 'Rise over run with an interactive line.' },
    { t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', d: 'Type an equation and watch the slope change.' }
  ],
  note: 'steps'
},
{
  id: 'm-slope-intercept', subject: 'math', unit: 'Linear relationships', grades: ['8'],
  title: 'Slope-intercept form: y = mx + b',
  alt: 'slope intercept form graph a line y intercept write equation from graph',
  stuck: ['Which letter is the slope again?', 'How do I graph a line from an equation?'],
  teks: ['8.4.C', '8.5.B', '8.5.I'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'In y = mx + b, m is the slope and b is where the line crosses the y-axis. Once you know those two numbers you can draw the line in about ten seconds.',
  why: 'This one form connects tables, graphs, equations, and real situations. Grade 8 asks you to move between all four.',
  words: [
    { w: 'y-intercept', d: 'The y-value where the line crosses the y-axis. It happens when x = 0.' },
    { w: 'm', d: 'The slope.' }, { w: 'b', d: 'The y-intercept.' }
  ],
  visual: [
    { type: 'slope', m: 2, b: -1, title: 'y = 2x − 1' },
    { type: 'flow', steps: [
      'Find b in the equation. Plot that point on the y-axis. That is your starting dot.',
      'Find m. Write it as a fraction (a whole number over 1 if needed).',
      'From the starting dot, move up by the numerator and right by the denominator. Plot the second dot.',
      'If m is negative, move DOWN by the numerator instead.',
      'Draw a straight line through both dots and extend it with arrows.',
      'Check a third point to be sure the line is right.'
    ] }
  ],
  steps: [
    'Rearrange the equation so y is alone on the left, if it is not already.',
    'Read off b (the constant) and m (the coefficient of x).',
    'Plot (0, b) first.',
    'Write m as rise over run and step from that point to plot a second one.',
    'Draw the line through both.',
    'Going backwards from a graph: read b where the line crosses the y-axis, then count rise over run between two clean points to get m.'
  ],
  example: { prompt: 'Graph y = −3/4 x + 5.',
    work: ['b = 5, so plot (0, 5).', 'm = −3/4, so from (0, 5) go DOWN 3 and RIGHT 4.', 'That lands on (4, 2).', 'Draw the line through (0, 5) and (4, 2).'],
    answer: 'A line falling from left to right, crossing the y-axis at 5.' },
  traps: [
    'Mixing up m and b. Say it out loud: "m for move, b for begin."',
    'Plotting the y-intercept on the x-axis.',
    'Applying the negative to the run instead of the rise. Either works mathematically, but pick one and be consistent.',
    'Reading the equation before solving for y. In 2y = 6x + 8, the slope is 3, not 6.'
  ],
  check: [
    { q: 'In y = −2x + 7, what are m and b?', a: 'm = −2 and b = 7.' },
    { q: 'A line crosses the y-axis at −4 with slope 1/2. Write the equation.', a: 'y = 1/2 x − 4.' },
    { q: 'What does b mean in "cost = 3x + 20"?', a: 'A fixed starting cost of 20 before any x is counted.' }
  ],
  links: [
    { t: 'Math is Fun: Equation of a Straight Line', u: 'https://www.mathsisfun.com/equation_of_line.html', d: 'y = mx + b explained and explored.' },
    { t: 'Math is Fun: Linear Equations', u: 'https://www.mathsisfun.com/algebra/linear-equations.html', d: 'All the forms of a line.' }
  ],
  note: 'steps'
},
{
  id: 'm-functions', subject: 'math', unit: 'Linear relationships', grades: ['8'],
  title: 'Is it a function?',
  alt: 'function input output vertical line test mapping relation domain range',
  stuck: ['What makes something a function?', 'What is the vertical line test for?'],
  teks: ['8.5.G'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A function is a rule where every input gives exactly ONE output. Inputs cannot be greedy: you can never put the same x in twice and get two different y values out.',
  why: 'Function is the vocabulary every later math class is built on, and the test for it is quick once you know what you are looking for.',
  words: [
    { w: 'input', d: 'The x value you put in.' },
    { w: 'output', d: 'The y value you get out.' },
    { w: 'vertical line test', d: 'If any vertical line hits a graph more than once, it is not a function.' }
  ],
  visual: [
    { type: 'table', title: 'Function or not?', head: ['Pairs', 'Function?', 'Why'],
      rows: [['(1,3) (2,5) (3,7)', 'Yes', 'every input appears once'],
             ['(1,3) (1,5) (2,7)', 'No', 'input 1 gives two different outputs'],
             ['(1,4) (2,4) (3,4)', 'Yes', 'repeated OUTPUTS are fine'],
             ['(0,2) (4,6) (0,9)', 'No', 'input 0 appears twice with different outputs']],
      note: 'Repeated outputs are allowed. Repeated INPUTS with different outputs are not.' },
    { type: 'decide', question: 'How is the relation given?', branches: [
      { if: 'A list of ordered pairs or a table', then: 'Look for a repeated x with two different y values. Found one → not a function.' },
      { if: 'A graph', then: 'Vertical line test. Any vertical line crossing twice → not a function.' },
      { if: 'A mapping diagram', then: 'Any input arrow splitting to two outputs → not a function.' }
    ] }
  ],
  steps: [
    'Identify the inputs (x) and the outputs (y).',
    'Scan the inputs for repeats.',
    'If an input repeats, check whether its outputs match. Same output is fine; different outputs means it is not a function.',
    'On a graph, sweep an imaginary vertical line across. If it ever touches the graph twice at once, it is not a function.',
    'Remember that repeated outputs never disqualify anything.'
  ],
  example: { prompt: 'Is {(2, 4), (3, 9), (2, 6)} a function?',
    work: ['Inputs: 2, 3, 2.', 'The input 2 appears twice.', 'It gives 4 one time and 6 the other: different outputs.'],
    answer: 'No, it is not a function.' },
  traps: [
    'Thinking repeated y values break the rule. They do not.',
    'Applying a horizontal line test. The test for a function is vertical.',
    'Assuming all straight lines are functions. A vertical line like x = 3 is not.',
    'Checking only the first few pairs in a long list.'
  ],
  check: [
    { q: 'Is {(1,5), (2,5), (3,5)} a function?', a: 'Yes. Every input appears once; repeated outputs are allowed.' },
    { q: 'Is a circle graph a function?', a: 'No. A vertical line crosses it twice.' },
    { q: 'What does the vertical line test check?', a: 'Whether any single input has more than one output.' }
  ],
  links: [
    { t: 'Math is Fun: What is a Function?', u: 'https://www.mathsisfun.com/sets/function.html', d: 'Functions explained with examples and the vertical line test.' }
  ],
  note: 'frayer'
},
{
  id: 'm-systems', subject: 'math', unit: 'Linear relationships', grades: ['8'],
  title: 'Systems of equations: where two lines meet',
  alt: 'system of equations solve by graphing intersection point two equations',
  stuck: ['What does "solution to a system" mean?', 'I graphed both lines, now what?'],
  teks: ['8.9'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A system is two equations at once. The solution is the single (x, y) pair that makes BOTH true: which is exactly where the two lines cross on a graph.',
  why: 'This is where "compare two plans and find the break-even point" problems come from, and it is the last big grade 8 algebra idea.',
  words: [
    { w: 'system', d: 'Two or more equations considered together.' },
    { w: 'solution', d: 'The (x, y) that satisfies every equation in the system.' },
    { w: 'break-even point', d: 'The real-world meaning of the intersection: where two options cost the same.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Put both equations into y = mx + b form.',
      'Graph the first line: plot b, then step by the slope.',
      'Graph the second line the same way.',
      'Find the point where they cross and read off (x, y).',
      'CHECK by substituting that point into BOTH original equations.',
      'If the lines are parallel there is no solution. If they lie on top of each other there are infinitely many.'
    ] },
    { type: 'table', title: 'What the graph is telling you', head: ['The two lines', 'Number of solutions'],
      rows: [['cross at one point', 'exactly one'], ['are parallel (same slope, different b)', 'none'], ['are identical', 'infinitely many']] }
  ],
  steps: [
    'Rewrite both equations in slope-intercept form if they are not already.',
    'Graph both lines carefully on the same axes.',
    'Locate the intersection point.',
    'Write it as an ordered pair.',
    'Substitute into both original equations to verify it works in each one.',
    'In a word problem, say what the point MEANS: "after 5 months, both plans cost $60."'
  ],
  example: { prompt: 'Plan A costs $20 plus $5 per month. Plan B costs $35 plus $2 per month. When do they cost the same?',
    work: ['Plan A: y = 5x + 20. Plan B: y = 2x + 35.', 'Set them equal: 5x + 20 = 2x + 35.', 'Subtract 2x: 3x + 20 = 35.', 'Subtract 20: 3x = 15. So x = 5.', 'Substitute: y = 5(5) + 20 = 45.', 'Check in Plan B: 2(5) + 35 = 45. ✓'],
    answer: 'After 5 months, both cost $45.' },
  traps: [
    'Giving only the x value. A system solution is an ordered pair.',
    'Checking your point in only one equation. It has to satisfy both.',
    'Graphing sloppily and reading an intersection that is slightly off. If the numbers are messy, solve algebraically instead.',
    'Missing that parallel lines mean no solution rather than an error in your work.'
  ],
  check: [
    { q: 'What does the intersection point represent?', a: 'The one (x, y) that makes both equations true at the same time.' },
    { q: 'Two lines both have slope 3 but different y-intercepts. How many solutions?', a: 'None. They are parallel and never cross.' },
    { q: 'You find x = 4. Are you done?', a: 'No. Substitute back to find y, then check the pair in both equations.' }
  ],
  links: [
    { t: 'Math is Fun: Linear Equations', u: 'https://www.mathsisfun.com/algebra/linear-equations.html', d: 'Graphing lines and finding intersections.' },
    { t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', d: 'Graph both equations and see the crossing point exactly.' }
  ],
  note: 'steps'
},

/* ---------------- Geometry ---------------- */
{
  id: 'm-area-triangles-parallelograms', subject: 'math', unit: 'Geometry', grades: ['6', '7'],
  title: 'Area of triangles, parallelograms and trapezoids',
  alt: 'area triangle parallelogram trapezoid base height formula slant',
  stuck: ['Which measurement is the height?', 'Why is there a 1/2 in the triangle formula?'],
  teks: ['6.8.B', '6.8.C', '6.8.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'All of these formulas come from the rectangle. A parallelogram is a rectangle with a corner slid over. A triangle is exactly half of a parallelogram. The height is always perpendicular to the base: never the slanted side.',
  why: 'Grade 6 explicitly asks you to model where the formulas come from, and using a slant length as the height is the single most common area error.',
  words: [
    { w: 'base', d: 'The side you are measuring from.' },
    { w: 'height', d: 'The perpendicular distance from the base to the opposite point or side. It makes a right angle with the base.' }
  ],
  visual: [
    { type: 'table', title: 'The three formulas and where they come from', head: ['Shape', 'Formula', 'Why'],
      rows: [['Rectangle', 'A = b × h', 'rows of unit squares'],
             ['Parallelogram', 'A = b × h', 'cut off the triangle end and slide it over: it becomes a rectangle'],
             ['Triangle', 'A = ½ b h', 'two identical triangles form a parallelogram'],
             ['Trapezoid', 'A = ½ (b₁ + b₂) h', 'average the two parallel sides, then treat it like a rectangle']] },
    { type: 'flow', steps: [
      'Identify the base. Any side can be a base. But pick one you have a matching height for.',
      'Find the height that is PERPENDICULAR to that base. It is often drawn as a dashed line inside the shape.',
      'Ignore any slanted side length. It is there to distract you.',
      'Substitute into the formula for that shape.',
      'Label the answer in square units.'
    ] }
  ],
  steps: [
    'Name the shape so you know which formula applies.',
    'Find a base and its matching perpendicular height. The height meets the base at a right angle.',
    'Check whether a slant length has been given as a distractor. It usually has.',
    'Substitute into the formula.',
    'For a triangle, do not forget to halve. For a trapezoid, add the two parallel sides first.',
    'Write the answer in square units.'
  ],
  example: { prompt: 'A triangle has a base of 10 cm, a perpendicular height of 6 cm, and a slanted side of 7 cm. Find the area.',
    work: ['Triangle formula: A = ½ × b × h.', 'The height is 6, not 7. The 7 is the slant.', 'A = ½ × 10 × 6 = 30.'],
    answer: '30 cm²' },
  traps: [
    'Using the slanted side as the height. The height must be perpendicular to the base.',
    'Forgetting the ½ in the triangle formula, giving exactly double the right answer.',
    'For a trapezoid, multiplying the two bases instead of adding them.',
    'Writing the answer in cm instead of cm².'
  ],
  check: [
    { q: 'A parallelogram has base 8 and height 5. Area?', a: '40 square units.' },
    { q: 'A triangle has area 24 and base 8. What is the height?', a: '24 = ½ × 8 × h, so 24 = 4h, and h = 6.' },
    { q: 'A trapezoid has parallel sides 6 and 10 and height 4. Area?', a: '½ × (6 + 10) × 4 = 32 square units.' }
  ],
  links: [
    { t: 'Math is Fun: Area', u: 'https://www.mathsisfun.com/geometry/area.html', d: 'Every area formula with a labeled diagram.' },
    { t: 'Polypad', u: 'https://polypad.amplify.com/', d: 'Cut and slide shapes to see where the formulas come from.' }
  ],
  note: 'steps'
},
{
  id: 'm-circles', subject: 'math', unit: 'Geometry', grades: ['7'],
  title: 'Circumference and area of circles',
  alt: 'circle circumference area pi radius diameter',
  stuck: ['I keep mixing up the two circle formulas', 'Do I use the radius or the diameter?'],
  teks: ['7.5.B', '7.9.B', '7.9.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Circumference is the distance around a circle. Area is the space inside. Both use π, but circumference uses the radius once and area uses it twice. That squared radius is the difference between the two.',
  why: 'Students who mix these up lose points on every circle question in the unit, and circles reappear inside cylinder volume in grade 8.',
  words: [
    { w: 'radius', d: 'From the center to the edge.' },
    { w: 'diameter', d: 'All the way across through the center. Always twice the radius.' },
    { w: 'π (pi)', d: 'About 3.14. The number of diameters that fit around any circle.' }
  ],
  visual: [
    { type: 'table', title: 'The two formulas', head: ['Question', 'Formula', 'Unit'],
      rows: [['Distance around?', 'C = 2πr, or C = πd', 'cm, m, in'],
             ['Space inside?', 'A = πr²', 'cm², m², in²']],
      note: 'If the answer should be square units, the formula must have a square in it.' },
    { type: 'decide', question: 'Which formula?', branches: [
      { if: 'Fence, ribbon, edging, distance a wheel rolls', then: 'CIRCUMFERENCE: C = 2πr' },
      { if: 'Paint, pizza, surface, space covered', then: 'AREA: A = πr²' },
      { if: 'You were given the diameter', then: 'Halve it to get the radius before using A = πr².' }
    ] }
  ],
  steps: [
    'Decide whether the question is about the distance around or the space inside.',
    'Check whether you were given the radius or the diameter. If it is the diameter, halve it.',
    'Circumference: C = 2πr. Area: A = πr².',
    'For area, square the radius FIRST, then multiply by π.',
    'Use 3.14 for π unless the question says to leave your answer in terms of π.',
    'Label with units, squared for area.'
  ],
  example: { prompt: 'A circle has a diameter of 10 cm. Find the circumference and the area. Use 3.14 for π.',
    work: ['Radius = 10 ÷ 2 = 5 cm.', 'C = 2 × 3.14 × 5 = 31.4 cm.', 'A = 3.14 × 5² = 3.14 × 25 = 78.5 cm².'],
    answer: 'C = 31.4 cm and A = 78.5 cm²' },
  traps: [
    'Using the diameter in A = πr². Halve it first.',
    'Doing (πr)² instead of πr². Square only the radius.',
    'Mixing the formulas. Remember area has the squared term, and area answers have squared units.',
    'Rounding π to 3. Use 3.14 or the π button.'
  ],
  check: [
    { q: 'Radius 3 m. Area?', a: '3.14 × 9 = 28.26 m².' },
    { q: 'Diameter 14 in. Circumference?', a: 'C = πd = 3.14 × 14 = 43.96 in.' },
    { q: 'Your area answer came out in cm not cm². What went wrong?', a: 'You probably used a circumference formula. Area always produces square units.' }
  ],
  links: [
    { t: 'Math is Fun: Circle', u: 'https://www.mathsisfun.com/geometry/circle.html', d: 'Radius, diameter, circumference and area with a diagram.' }
  ],
  note: 'steps'
},
{
  id: 'm-volume-surface-area', subject: 'math', unit: 'Geometry', grades: ['7', '8'],
  title: 'Volume and surface area of prisms, cylinders, cones and spheres',
  alt: 'volume surface area prism cylinder cone pyramid sphere net',
  stuck: ['Volume or surface area?', 'Where does the 1/3 come from?'],
  teks: ['7.9.A', '7.9.D', '8.7.A', '8.7.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Volume is what fits INSIDE, measured in cubic units. Surface area is the wrapping paper you would need to cover the OUTSIDE, measured in square units. The unit on your answer tells you instantly whether you used the right formula.',
  why: 'Nearly every mistake here is choosing the wrong one of the two, and the units are a reliable self-check.',
  words: [
    { w: 'base area', d: 'The area of the flat face the solid stands on.' },
    { w: 'net', d: 'A solid unfolded flat. Useful for counting surface area.' },
    { w: 'lateral area', d: 'The surface area of the sides only, not the bases.' }
  ],
  visual: [
    { type: 'table', title: 'Volume formulas', head: ['Solid', 'Volume'],
      rows: [['Prism (any)', 'V = base area × height'], ['Cylinder', 'V = πr² × h'],
             ['Pyramid', 'V = ⅓ × base area × height'], ['Cone', 'V = ⅓ πr² h'], ['Sphere', 'V = 4/3 πr³']],
      note: 'Cones and pyramids are exactly one third of the prism or cylinder that would contain them.' },
    { type: 'decide', question: 'Volume or surface area?', branches: [
      { if: 'Filling, holding, capacity, how much fits inside', then: 'VOLUME: answer in cubic units.' },
      { if: 'Wrapping, painting, covering, labelling', then: 'SURFACE AREA: answer in square units.' },
      { if: 'You are unsure', then: 'Look at the units the question wants. cm³ means volume; cm² means surface area.' }
    ] }
  ],
  steps: [
    'Decide: inside (volume) or outside (surface area)?',
    'Name the solid so you pick the right formula.',
    'For volume of a prism or cylinder, find the base area first, then multiply by the height.',
    'For a cone or pyramid, do the same then multiply by one third.',
    'For surface area, either use the formula or unfold the solid into a net and add up every face.',
    'Label the answer: cubic units for volume, square units for surface area.'
  ],
  example: { prompt: 'A cylinder has radius 3 cm and height 10 cm. Find its volume. Use 3.14 for π.',
    work: ['Base is a circle: area = πr² = 3.14 × 9 = 28.26 cm².', 'Multiply by the height: 28.26 × 10 = 282.6.'],
    answer: '282.6 cm³' },
  traps: [
    'Using the slant height of a cone where the vertical height is needed, or vice versa. Volume needs the vertical height; lateral surface area needs the slant.',
    'Forgetting the one third for cones and pyramids, giving triple the correct volume.',
    'Forgetting one of the faces when counting a net. A rectangular prism has six.',
    'Writing cm² for a volume answer.'
  ],
  check: [
    { q: 'A prism has base area 12 cm² and height 5 cm. Volume?', a: '60 cm³.' },
    { q: 'A cone and a cylinder have the same base and height. How do their volumes compare?', a: 'The cone is one third of the cylinder.' },
    { q: 'You are painting the outside of a box. Volume or surface area?', a: 'Surface area.' }
  ],
  links: [
    { t: 'Math is Fun: Volume', u: 'https://www.mathsisfun.com/geometry/volume.html', d: 'Volume formulas for every solid.' },
    { t: 'Math is Fun: Solid Geometry', u: 'https://www.mathsisfun.com/geometry/solid-geometry.html', d: '3D shapes, nets, and surface area.' }
  ],
  note: 'strategy'
},
{
  id: 'm-pythagorean', subject: 'math', unit: 'Geometry', grades: ['8'],
  title: 'The Pythagorean theorem',
  alt: 'pythagorean theorem hypotenuse right triangle a2 b2 c2 missing side',
  stuck: ['Which side is c?', 'I got a bigger answer for a leg than for the hypotenuse'],
  teks: ['8.7.C', '8.7.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'In any right triangle, the two short sides squared and added equal the longest side squared. The longest side, c, is always the one directly across from the right angle.',
  why: 'It is the most-used formula in geometry, and it only works on right triangles: checking for the right angle first is part of the skill.',
  words: [
    { w: 'hypotenuse', d: 'The longest side of a right triangle, always opposite the right angle. This is c.' },
    { w: 'leg', d: 'One of the two shorter sides that form the right angle. These are a and b.' }
  ],
  visual: [
    { type: 'pythagoras', note: 'If there is no right angle, this formula does not apply.' },
    { type: 'decide', question: 'Which side am I looking for?', branches: [
      { if: 'The hypotenuse (across from the right angle)', then: 'ADD: c² = a² + b², then take the square root.' },
      { if: 'A leg (one of the sides forming the right angle)', then: 'SUBTRACT: a² = c² − b², then take the square root.' },
      { if: 'Checking whether a triangle is right', then: 'Test whether a² + b² equals c². If yes, it is a right triangle.' }
    ] }
  ],
  steps: [
    'Confirm the triangle has a right angle. If it does not, stop. This formula does not apply.',
    'Label the hypotenuse c. It is the side opposite the right angle and it is always the longest.',
    'Label the other two sides a and b. It does not matter which is which.',
    'If you are finding the hypotenuse, add: c² = a² + b².',
    'If you are finding a leg, subtract: leg² = c² − other leg².',
    'Take the square root at the end. Estimate if it is not a perfect square.',
    'Sanity check: the hypotenuse must be the largest of the three sides.'
  ],
  example: { prompt: 'A right triangle has a hypotenuse of 13 and one leg of 5. Find the other leg.',
    work: ['We are looking for a LEG, so subtract.', 'a² = 13² − 5² = 169 − 25 = 144.', 'a = √144 = 12.', 'Check: 12 is less than 13. ✓'],
    answer: '12' },
  traps: [
    'Adding when you are looking for a leg. That gives an answer bigger than the hypotenuse, which is impossible.',
    'Assuming c is whichever side is labeled last. c is always opposite the right angle.',
    'Forgetting the square root at the end and giving c² as the answer.',
    'Using it on a triangle with no right angle.'
  ],
  check: [
    { q: 'Legs of 6 and 8. Find the hypotenuse.', a: '36 + 64 = 100, so c = 10.' },
    { q: 'You solve for a leg and get 20 when the hypotenuse is 15. What went wrong?', a: 'You added instead of subtracting. A leg is always shorter than the hypotenuse.' },
    { q: 'Is a triangle with sides 5, 12, 13 a right triangle?', a: 'Yes. 25 + 144 = 169, which is 13².' }
  ],
  links: [
    { t: 'Math is Fun: Pythagoras Theorem', u: 'https://www.mathsisfun.com/pythagoras.html', d: 'The proof, plus worked examples both directions.' },
    { t: 'Math is Fun: Square Roots', u: 'https://www.mathsisfun.com/square-root.html', d: 'Finishing the last step.' }
  ],
  note: 'steps'
},
{
  id: 'm-transformations', subject: 'math', unit: 'Geometry', grades: ['8'],
  title: 'Transformations: translations, reflections, rotations and dilations',
  alt: 'transformations translate reflect rotate dilate congruent similar coordinate rules',
  stuck: ['Which coordinate changes when I reflect?', 'Which transformations keep the shape the same size?'],
  teks: ['8.10.A', '8.10.B', '8.10.C'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Three transformations move a shape without changing its size: slide, flip, and turn. The fourth, dilation, resizes it. Each has a coordinate rule you can apply directly to the points.',
  why: 'Grade 8 asks you to describe the effect on coordinates, so knowing the rules beats trying to picture every move.',
  words: [
    { w: 'translation', d: 'A slide. Every point moves the same distance in the same direction.' },
    { w: 'reflection', d: 'A flip across a line, like a mirror.' },
    { w: 'rotation', d: 'A turn around a fixed point.' },
    { w: 'dilation', d: 'A resize by a scale factor.' },
    { w: 'congruent', d: 'Same size and shape.' }
  ],
  visual: [
    { type: 'table', title: 'The coordinate rules', head: ['Transformation', 'Rule', 'Size changes?'],
      rows: [['Translate right a, up b', '(x + a, y + b)', 'no'],
             ['Reflect over the x-axis', '(x, −y)', 'no'],
             ['Reflect over the y-axis', '(−x, y)', 'no'],
             ['Rotate 180° about origin', '(−x, −y)', 'no'],
             ['Rotate 90° counterclockwise', '(−y, x)', 'no'],
             ['Dilate by scale factor k', '(kx, ky)', 'YES']],
      note: 'Only dilation changes size. The first five produce congruent figures.' },
    { type: 'coordplane', range: 5, quadrants: true,
      points: [{ x: 2, y: 3, l: 'A (2,3)' }, { x: 2, y: -3, l: "A' (2,−3)" }],
      title: 'Reflecting over the x-axis flips the sign of y',
      caption: 'Over the x-axis, y flips. Over the y-axis, x flips.' }
  ],
  steps: [
    'Identify which transformation is being asked for.',
    'Write down the coordinate rule before you touch the graph.',
    'Apply the rule to every vertex of the shape, one point at a time. Make a table.',
    'Plot the new points and connect them in the same order.',
    'Check: for a translation, reflection, or rotation, the new shape must be the same size. If it is not, you made an arithmetic slip.',
    'Name the result: congruent for the first three, similar for a dilation.'
  ],
  example: { prompt: 'Triangle with vertices (1, 2), (4, 2), (4, 6) is reflected over the y-axis. Find the image.',
    work: ['Rule for reflecting over the y-axis: (x, y) → (−x, y).', '(1, 2) → (−1, 2)', '(4, 2) → (−4, 2)', '(4, 6) → (−4, 6)'],
    answer: "(−1, 2), (−4, 2), (−4, 6)" },
  traps: [
    'Flipping the wrong coordinate. Reflecting over the x-axis changes y, not x. The axis you flip over stays put.',
    'Applying the rule to only some of the vertices.',
    'Assuming a dilation keeps the figure congruent. It does not. It makes a similar figure.',
    'Mixing up clockwise and counterclockwise for rotations.'
  ],
  check: [
    { q: 'Reflect (3, −5) over the x-axis.', a: '(3, 5). Only y changes sign.' },
    { q: 'Which transformation does NOT preserve size?', a: 'Dilation.' },
    { q: 'Translate (2, 7) left 5 and down 3.', a: '(−3, 4).' }
  ],
  links: [
    { t: 'Math is Fun: Transformations', u: 'https://www.mathsisfun.com/geometry/transformations.html', d: 'Interactive slides, flips, turns, and resizes.' }
  ],
  note: 'steps'
},
{
  id: 'm-angle-relationships', subject: 'math', unit: 'Geometry', grades: ['7', '8'],
  title: 'Angle relationships: complementary, supplementary, vertical and parallel lines',
  alt: 'complementary supplementary vertical angles parallel lines transversal triangle sum',
  stuck: ['Which pairs are equal and which add to 180?', 'How do I find the third angle in a triangle?'],
  teks: ['7.11.C', '8.8.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A handful of angle facts solve almost every diagram problem. Some pairs of angles are equal; some pairs add to 90° or 180°. Knowing which is which turns a scary diagram into a one-step equation.',
  why: 'Grade 8 combines these with algebra: you set two expressions equal, or set their sum to 180, and solve.',
  words: [
    { w: 'complementary', d: 'Two angles that add to 90°.' },
    { w: 'supplementary', d: 'Two angles that add to 180°.' },
    { w: 'vertical angles', d: 'The opposite pair formed when two lines cross. Always equal.' },
    { w: 'transversal', d: 'A line that cuts across two parallel lines.' }
  ],
  visual: [
    { type: 'table', title: 'The facts you need', head: ['Situation', 'Relationship'],
      rows: [['Two angles form a right angle', 'add to 90° (complementary)'],
             ['Two angles form a straight line', 'add to 180° (supplementary)'],
             ['Two lines cross: opposite angles', 'EQUAL (vertical angles)'],
             ['Parallel lines cut by a transversal: corresponding angles', 'EQUAL'],
             ['Parallel lines: alternate interior angles', 'EQUAL'],
             ['Parallel lines: same-side interior angles', 'add to 180°'],
             ['The three angles inside any triangle', 'add to 180°'],
             ['An exterior angle of a triangle', 'equals the two remote interior angles added']] },
    { type: 'flow', steps: [
      'Mark everything you already know on the diagram.',
      'Look for a straight line: those two angles sum to 180°.',
      'Look for crossing lines: opposite angles are equal.',
      'Look for parallel marks (little arrows): corresponding and alternate angles are equal.',
      'Inside a triangle, all three angles sum to 180°.',
      'Write an equation using the relationship you found, then solve.'
    ] }
  ],
  steps: [
    'Label every known angle directly on the diagram.',
    'Scan for a straight line through the vertex. That gives you a pair summing to 180°.',
    'Scan for crossing lines: opposite (vertical) angles are equal.',
    'Scan for parallel line markings: that unlocks corresponding and alternate interior angles.',
    'If it is a triangle, use the 180° sum.',
    'Turn the relationship into an equation, solve for the variable, then answer the actual question.'
  ],
  example: { prompt: 'Two angles are supplementary. One is (3x + 10)° and the other is (2x − 5)°. Find both.',
    work: ['Supplementary means they add to 180.', '(3x + 10) + (2x − 5) = 180', '5x + 5 = 180', '5x = 175, so x = 35.', 'First angle: 3(35) + 10 = 115°.', 'Second angle: 2(35) − 5 = 65°.', 'Check: 115 + 65 = 180. ✓'],
    answer: '115° and 65°' },
  traps: [
    'Mixing up complementary (90) and supplementary (180). "C comes before S, and 90 comes before 180."',
    'Stopping when you find x. The question usually asks for the ANGLES, not the variable.',
    'Assuming lines are parallel because they look parallel. Look for the arrow markings.',
    'Forgetting that vertical angles are equal, not supplementary.'
  ],
  check: [
    { q: 'Two angles are complementary and one is 37°. What is the other?', a: '53°.' },
    { q: 'Two lines cross. One angle is 110°. What is the angle opposite it?', a: '110°. Vertical angles are equal.' },
    { q: 'A triangle has angles 45° and 65°. What is the third?', a: '180 − 45 − 65 = 70°.' }
  ],
  links: [
    { t: 'Math is Fun: Angles', u: 'https://www.mathsisfun.com/angles.html', d: 'Angle pairs and relationships with diagrams.' },
    { t: 'Math is Fun: Triangles', u: 'https://www.mathsisfun.com/triangle.html', d: 'The triangle angle sum and exterior angles.' }
  ],
  note: 'strategy'
},

/* ---------------- Data and probability ---------------- */
{
  id: 'm-data-displays-middle', subject: 'math', unit: 'Data and probability', grades: ['6', '7'],
  title: 'Dot plots, histograms, box plots and stem-and-leaf',
  alt: 'dot plot histogram box plot stem and leaf quartile spread distribution',
  stuck: ['What is the box in a box plot showing?', 'How is a histogram different from a bar graph?'],
  teks: ['6.12.A', '6.12.B', '6.13.A', '7.12.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Each display answers a different question about a data set. Dot plots show every value. Histograms show how many fall in each range. Box plots show how the data is spread into quarters.',
  why: 'Grade 6 and 7 questions rarely ask you to make these: they ask you to READ them and describe center, spread, and shape.',
  words: [
    { w: 'median', d: 'The middle value when the data is in order.' },
    { w: 'quartile', d: 'A value that splits the data into quarters. Q1, median, Q3.' },
    { w: 'range', d: 'The largest value minus the smallest.' },
    { w: 'interquartile range (IQR)', d: 'Q3 − Q1. The spread of the middle half.' }
  ],
  visual: [
    { type: 'table', title: 'Which display does what?', head: ['Display', 'Shows you', 'Best for'],
      rows: [['Dot plot', 'every single data value', 'small data sets, spotting repeats and gaps'],
             ['Stem-and-leaf', 'every value, grouped by tens', 'seeing values and shape at once'],
             ['Histogram', 'how many fall in each interval', 'large data sets, seeing the shape'],
             ['Box plot', 'min, Q1, median, Q3, max', 'comparing spread between two groups']],
      note: 'A histogram has no gaps between bars because the intervals touch. A bar graph does have gaps because the categories are separate.' },
    { type: 'flow', steps: [
      'Read the title and the axis labels first.',
      'Find the scale: how much is each tick or interval worth?',
      'For center, find the median (box plots mark it with the middle line).',
      'For spread, use range or IQR (the width of the box).',
      'For shape, look for clumps, gaps, and outliers.',
      'Answer the question using the display that shows what was asked.'
    ] }
  ],
  steps: [
    'Identify which display you are looking at.',
    'Read the title, labels, and scale before anything else.',
    'For a box plot, name the five numbers left to right: minimum, Q1, median, Q3, maximum.',
    'The box holds the middle 50% of the data. A wide box means a spread-out middle.',
    'For a histogram, note that each bar is an interval, not a single value.',
    'Describe center, spread, and shape in words when the question asks you to compare two sets.'
  ],
  example: { prompt: 'A box plot shows min 12, Q1 18, median 25, Q3 32, max 45. What is the IQR and what does it mean?',
    work: ['IQR = Q3 − Q1 = 32 − 18 = 14.', 'That is the width of the box.', 'It means the middle half of the data is spread across 14 units.'],
    answer: 'IQR = 14. The middle 50% of the values fall between 18 and 32.' },
  traps: [
    'Thinking each section of a box plot holds a different number of values. Each holds 25% of the data. The sections just have different widths.',
    'Reading a histogram bar as one value. It is a range.',
    'Confusing range with IQR. Range uses the extremes; IQR uses the quartiles.',
    'Assuming a wider box means more data points. It means more spread.'
  ],
  check: [
    { q: 'What fraction of the data is inside the box on a box plot?', a: 'One half: the middle 50%.' },
    { q: 'Why does a histogram have no gaps between bars?', a: 'Because the intervals are continuous and touch each other.' },
    { q: 'Range is 40 and IQR is 8. What does that tell you?', a: 'The middle half is tightly clustered, but there are extreme values stretching the range.' }
  ],
  links: [
    { t: 'Math is Fun: Histograms', u: 'https://www.mathsisfun.com/data/histograms.html', d: 'How histograms differ from bar graphs.' },
    { t: 'Math is Fun: Stem and Leaf Plots', u: 'https://www.mathsisfun.com/data/stem-leaf-plots.html', d: 'Reading and building stem-and-leaf displays.' },
    { t: 'Math is Fun: Dot Plots', u: 'https://www.mathsisfun.com/data/dot-plots.html', d: 'Dot plots and what they show.' }
  ],
  note: 'strategy'
},
{
  id: 'm-mean-median-mode', subject: 'math', unit: 'Data and probability', grades: ['6', '7', '8'],
  title: 'Mean, median, mode and which one to use',
  alt: 'mean median mode average outlier measures of center mad',
  stuck: ['Do I use the mean or the median here?', 'An outlier is messing up my average'],
  teks: ['6.12.C', '6.13.A', '8.11.B'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Mean, median and mode are three different ways to say "the typical value." They usually give different answers, and which one is honest depends on whether the data has outliers.',
  why: 'The exam question is almost never "calculate the mean." It is "which measure best describes this data, and why?"',
  words: [
    { w: 'mean', d: 'Add everything, divide by how many. The ordinary average.' },
    { w: 'median', d: 'The middle value when data is in order.' },
    { w: 'mode', d: 'The value that appears most often.' },
    { w: 'outlier', d: 'A value far away from the rest of the data.' }
  ],
  visual: [
    { type: 'table', title: 'Same data, one outlier added', head: ['Data set', 'Mean', 'Median'],
      rows: [['3, 4, 4, 5, 6', '4.4', '4'], ['3, 4, 4, 5, 60', '15.2', '4']],
      note: 'One outlier dragged the mean from 4.4 up to 15.2. The median did not move at all.' },
    { type: 'decide', question: 'Which measure of center should I use?', branches: [
      { if: 'The data has no extreme values', then: 'MEAN. It uses every value.' },
      { if: 'There is an outlier (one very high or very low value)', then: 'MEDIAN. It ignores extremes.' },
      { if: 'The data is categories, not numbers (favorite color)', then: 'MODE. It is the only one that works.' },
      { if: 'Talking about house prices or salaries', then: 'MEDIAN. That is why news reports use it.' }
    ] }
  ],
  steps: [
    'Put the data in order from smallest to largest. Do this first, every time.',
    'Mean: add all the values, then divide by how many values there are.',
    'Median: find the middle. With an even count, average the two middle values.',
    'Mode: find the value that appears most. There can be none, one, or several.',
    'Scan for outliers. If one exists, the median describes the data more honestly.',
    'When asked to justify, say WHY: "the median, because the $200 value is an outlier that pulls the mean up."'
  ],
  example: { prompt: 'Find the mean and median of 4, 7, 7, 9, 38. Which better describes the data?',
    work: ['Already in order.', 'Mean: (4 + 7 + 7 + 9 + 38) ÷ 5 = 65 ÷ 5 = 13.', 'Median: the middle of five values is the third → 7.', '38 is far from the others, so it is an outlier.', 'The mean of 13 is higher than four of the five values.'],
    answer: 'Mean 13, median 7. The median is a better description because 38 is an outlier.' },
  traps: [
    'Forgetting to order the data before finding the median.',
    'With an even number of values, picking one middle value instead of averaging the two.',
    'Dividing by the wrong count. Divide by how many values there are, not by the largest value.',
    'Saying "the median is better" without explaining why. The reason. The outlier: is what earns the credit.'
  ],
  check: [
    { q: 'Median of 2, 5, 8, 9?', a: '(5 + 8) ÷ 2 = 6.5.' },
    { q: 'Mean of 10, 20, 30?', a: '20.' },
    { q: 'Salaries are 30k, 32k, 35k, 36k, 900k. Which measure would you report?', a: 'The median (35k). The 900k is an outlier that makes the mean misleading.' }
  ],
  links: [
    { t: 'Math is Fun: Mean', u: 'https://www.mathsisfun.com/mean.html', d: 'Calculating and interpreting the mean.' },
    { t: 'Math is Fun: Median', u: 'https://www.mathsisfun.com/median.html', d: 'Finding the middle value.' },
    { t: 'Math is Fun: Mode', u: 'https://www.mathsisfun.com/mode.html', d: 'The most common value.' }
  ],
  note: 'frayer'
},
{
  id: 'm-probability', subject: 'math', unit: 'Data and probability', grades: ['7'],
  title: 'Probability: theoretical, experimental and compound events',
  alt: 'probability theoretical experimental compound events independent simple',
  stuck: ['Why did my experiment not match the prediction?', 'How do I find the probability of two things happening?'],
  teks: ['7.6.C', '7.6.D', '7.6.E', '7.6.I'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Theoretical probability is what SHOULD happen based on the setup. Experimental probability is what DID happen when you tried it. They rarely match exactly, and they get closer the more trials you run.',
  why: 'The gap between theoretical and experimental is the whole point of the grade 7 unit, and it is what most students explain incorrectly.',
  words: [
    { w: 'outcome', d: 'One possible result.' },
    { w: 'theoretical probability', d: 'favourable outcomes ÷ total possible outcomes.' },
    { w: 'experimental probability', d: 'times it happened ÷ number of trials.' },
    { w: 'compound event', d: 'Two or more things happening together.' }
  ],
  visual: [
    { type: 'table', title: 'The two probabilities', head: ['Type', 'Formula', 'Example: rolling a 3 on a die'],
      rows: [['Theoretical', 'favourable ÷ total possible', '1 ÷ 6 ≈ 0.167'],
             ['Experimental', 'times it happened ÷ trials', 'rolled 30 times, got a 3 seven times → 7 ÷ 30 ≈ 0.233']],
      note: 'More trials pulls the experimental result closer to the theoretical one.' },
    { type: 'flow', steps: [
      'Count the total number of equally likely outcomes.',
      'Count how many of those count as a success.',
      'Divide: successes ÷ total. That is the theoretical probability.',
      'For compound events with independent parts, MULTIPLY the individual probabilities.',
      'Express the answer as a fraction, decimal, or percent: whichever the question asks for.',
      'Check it is between 0 and 1. A probability can never be more than 1.'
    ] }
  ],
  steps: [
    'List or count all the possible outcomes. A table or tree diagram helps for compound events.',
    'Count the outcomes that count as a success.',
    'Theoretical probability = successes ÷ total outcomes.',
    'Experimental probability = number of times it actually happened ÷ number of trials.',
    'For two independent events both happening, multiply their probabilities.',
    'Simplify, and sanity check that the answer is between 0 and 1.'
  ],
  example: { prompt: 'You flip a coin and roll a die. What is the probability of heads AND a number greater than 4?',
    work: ['P(heads) = 1/2.', 'Numbers greater than 4 on a die: 5 and 6. So P = 2/6 = 1/3.', 'Independent events, so multiply: 1/2 × 1/3 = 1/6.'],
    answer: '1/6' },
  traps: [
    'Expecting the experiment to match the theory exactly. With few trials it usually will not, and that is not an error.',
    'Adding probabilities for "and" events. Multiply for "and"; add only for "or" with outcomes that cannot both happen.',
    'Giving a probability greater than 1. If you get one, you added when you should have multiplied.',
    'Counting outcomes that are not equally likely as if they were.'
  ],
  check: [
    { q: 'A bag has 3 red and 5 blue marbles. P(red)?', a: '3/8.' },
    { q: 'You flip two coins. P(both heads)?', a: '1/2 × 1/2 = 1/4.' },
    { q: 'Your experimental probability does not match the theoretical. What should you do?', a: 'Run more trials. The gap usually narrows as the number of trials grows.' }
  ],
  links: [
    { t: 'Math is Fun: Probability', u: 'https://www.mathsisfun.com/data/probability.html', d: 'Probability basics with examples.' },
    { t: 'Math is Fun: Types of Events', u: 'https://www.mathsisfun.com/data/probability-events-types.html', d: 'Independent and dependent events.' }
  ],
  note: 'frayer'
},
{
  id: 'm-scatterplots', subject: 'math', unit: 'Data and probability', grades: ['8'],
  title: 'Scatterplots, association and trend lines',
  alt: 'scatter plot association positive negative trend line line of best fit correlation',
  stuck: ['What does "association" mean?', 'How do I draw a trend line?'],
  teks: ['8.5.C', '8.5.D', '8.11.A'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'A scatterplot shows two measurements for each thing you observed. The pattern of the dots tells you whether the two measurements move together, move opposite, or have nothing to do with each other.',
  why: 'Reading association and using a trend line to predict is the main data skill in grade 8.',
  words: [
    { w: 'positive association', d: 'As x goes up, y goes up. Dots trend upward.' },
    { w: 'negative association', d: 'As x goes up, y goes down. Dots trend downward.' },
    { w: 'no association', d: 'The dots form no pattern.' },
    { w: 'trend line', d: 'A straight line drawn to follow the general direction of the dots.' }
  ],
  visual: [
    { type: 'table', title: 'Describing what you see', head: ['Pattern of dots', 'Association', 'Real example'],
      rows: [['rising left to right', 'positive', 'hours studied and test score'],
             ['falling left to right', 'negative', 'temperature and hot chocolate sales'],
             ['scattered with no direction', 'none', 'shoe size and test score'],
             ['tightly clustered along a line', 'strong', 'a reliable relationship'],
             ['loosely spread around a line', 'weak', 'a rough relationship']] },
    { type: 'flow', steps: [
      'Read both axis labels so you know what each dot represents.',
      'Describe the direction: rising, falling, or no pattern.',
      'Describe the strength: tightly clustered or widely spread.',
      'Draw a trend line that follows the middle of the dots, with roughly as many above as below.',
      'To predict, find your x value, go up to the trend line, then across to read y.',
      'Say whether your prediction is inside the data range or beyond it: beyond it is much less reliable.'
    ] }
  ],
  steps: [
    'Read the title and both axis labels.',
    'Look at the overall direction of the cloud of dots.',
    'Name the association: positive, negative, or none. Add strong or weak.',
    'Draw a straight trend line through the middle of the pattern. It does not have to touch any dot.',
    'Use the line, not individual dots, to make predictions.',
    'Remember that association is not causation. Two things moving together does not prove one caused the other.'
  ],
  example: { prompt: 'A scatterplot of hours studied vs test score has dots rising steadily. Describe the association and predict the score for 5 hours if the trend line passes through (2, 70) and (6, 90).',
    work: ['Dots rise left to right → positive association.', 'Slope of the trend line: (90 − 70) ÷ (6 − 2) = 20 ÷ 4 = 5.', 'From (2, 70), going to x = 5 is 3 more hours: 3 × 5 = 15 more points.', '70 + 15 = 85.'],
    answer: 'Positive association. Predicted score is about 85.' },
  traps: [
    'Connecting the dots. A trend line is a single straight line, not a zigzag.',
    'Making a prediction from one dot instead of from the trend line.',
    'Claiming causation. Ice cream sales and drowning both rise in summer; neither causes the other.',
    'Predicting far outside the data range and treating it as reliable.'
  ],
  check: [
    { q: 'Dots go down as you move right. What association is that?', a: 'Negative.' },
    { q: 'Should a trend line touch every point?', a: 'No. It follows the general direction, with roughly as many points above as below.' },
    { q: 'Two variables have a strong positive association. Does one cause the other?', a: 'Not necessarily. Association is not causation.' }
  ],
  links: [
    { t: 'Math is Fun: Scatter (x,y) Plots', u: 'https://www.mathsisfun.com/data/scatter-xy-plots.html', d: 'Scatterplots, correlation, and lines of best fit.' }
  ],
  note: 'strategy'
},

/* ---------------- Financial literacy ---------------- */
{
  id: 'm-financial-literacy', subject: 'math', unit: 'Personal financial literacy', grades: ['6', '7', '8'],
  title: 'Budgets, interest, credit and paying for college',
  alt: 'budget simple interest compound interest credit report debit card college costs',
  stuck: ['What is the difference between a debit card and a credit card?', 'How does interest actually work?'],
  teks: ['6.14.A', '6.14.B', '6.14.D', '7.13.A', '7.13.E', '8.12.A', '8.12.D'],
  apps: ['Math Academy', 'AlphaMath'],
  plain: 'Personal financial literacy is a real TEKS strand you get tested on. The math is mostly percent and multiplication. The hard part is knowing what the words mean.',
  why: 'It shows up on state assessments every year and it is the part of math you will use every week for the rest of your life.',
  words: [
    { w: 'budget', d: 'A plan for money: income in, expenses out.' },
    { w: 'debit card', d: 'Spends money you already have in your checking account.' },
    { w: 'credit card', d: 'Borrows money you must pay back, usually with interest if you are late.' },
    { w: 'simple interest', d: 'I = P × r × t. Interest on the original amount only.' },
    { w: 'credit report', d: 'A record of whether you have paid back what you borrowed, on time.' }
  ],
  visual: [
    { type: 'table', title: 'Debit vs credit', head: ['', 'Debit card', 'Credit card'],
      rows: [['Whose money?', 'yours', 'borrowed'], ['Can you overspend?', 'no (usually)', 'yes, up to a limit'],
             ['Interest charged?', 'no', 'yes, if not paid in full'], ['Builds credit history?', 'no', 'yes']] },
    { type: 'flow', steps: [
      'BUDGET: add all income, add all expenses, subtract. A negative result means you are overspending.',
      'SIMPLE INTEREST: I = P × r × t. Turn the percent into a decimal first.',
      'To find the total owed, add the interest back onto the principal.',
      'COMPOUND interest is calculated on the new balance each period, so it grows faster than simple interest.',
      'PAYING FOR COLLEGE: compare savings, grants and scholarships (do not repay) with loans (do repay, with interest).'
    ] }
  ],
  steps: [
    'For a budget, list income and expenses in two columns and subtract. What is left over is savings.',
    'For simple interest, convert the percent to a decimal by dividing by 100.',
    'Multiply principal × rate × time. Time must be in years.',
    'Add the interest to the principal if the question asks for the total amount owed or saved.',
    'For credit questions, remember: paying in full and on time avoids interest and builds a positive credit history.',
    'When comparing ways to pay for college, sort them into "must repay" and "do not repay."'
  ],
  example: { prompt: 'You borrow $1,200 at 6% simple interest for 3 years. How much interest, and how much do you repay in total?',
    work: ['Convert 6% to 0.06.', 'I = P × r × t = 1200 × 0.06 × 3.', '1200 × 0.06 = 72 per year.', '72 × 3 = 216.', 'Total repaid = 1200 + 216 = 1416.'],
    answer: '$216 in interest, $1,416 repaid in total.' },
  traps: [
    'Using 6 instead of 0.06 for the rate, giving an answer 100 times too big.',
    'Giving the interest when the question asked for the total amount. Add the principal back on.',
    'Using months for time without converting to years. 18 months is 1.5 years.',
    'Thinking a credit card is free money. Unpaid balances accumulate interest quickly.'
  ],
  check: [
    { q: 'Convert 4.5% to a decimal.', a: '0.045.' },
    { q: 'Which card builds a credit history?', a: 'A credit card, because it records whether you repay borrowed money.' },
    { q: 'Which forms of college funding do NOT have to be repaid?', a: 'Savings, grants and scholarships. Loans must be repaid with interest.' }
  ],
  links: [
    { t: 'Math is Fun: Percentage', u: 'https://www.mathsisfun.com/percentage.html', d: 'Converting rates and calculating percent amounts.' }
  ],
  note: 'frayer'
}

]);

/* ============================================================
   GRADE 9 — Algebra I and English I

   Grade 9 is the first high school row on the App Playbook continuum:
   Math Academy carries Algebra I with Edia hole-filling underneath,
   AlphaRead carries reading, Membean carries vocabulary with VocabLoco
   underneath, Freckle hole-fills language, and there is NO writing app.
   The writing guides here exist anyway, because students still write.

   TEKS codes are keyed 9.x so grade 9 sits beside K-8 in the picker.
   The official course codes are Algebra I = A.x and English I = E1.x,
   and the generated index carries both.

   Written at a high school register. The reading-level gate allows up
   to grade 11 here, where a grade 3 guide is held to grade 5.
   ============================================================ */
window.CONCEPTS = (window.CONCEPTS || []).concat([

/* ================= ALGEBRA I : FUNCTIONS ================= */
{
  id: 'a1-function-notation', subject: 'math', unit: 'Functions', grades: ['9'],
  title: 'Function notation, domain and range',
  alt: 'function notation f(x) domain range relation vertical line test evaluate',
  stuck: ['What does f(x) actually mean?', 'Is f(x) multiplication?'],
  teks: ['9.12.A', '9.12.B', '9.2.A'],
  apps: ['Math Academy', 'Edia'],
  plain: 'f(x) is a name, not a multiplication. It means "the output of the rule f when the input is x". Domain is every input allowed; range is every output produced.',
  why: 'Every topic after this is written in function notation. Misreading f(x) as f times x breaks everything downstream.',
  words: [
    { w: 'function', d: 'A rule where each input gives exactly one output.' },
    { w: 'domain', d: 'All the inputs (x) the function allows.' },
    { w: 'range', d: 'All the outputs (y) the function produces.' },
    { w: 'evaluate', d: 'Substitute a number for x and work out the output.' }
  ],
  visual: [
    { type: 'table', title: 'Reading function notation', head: ['Written', 'Says', 'Means'],
      rows: [['f(3) = 7', 'f of 3 equals 7', 'input 3 gives output 7'],
             ['f(x) = 2x + 1', 'f of x equals 2x plus 1', 'the rule: double it, add one'],
             ['f(a) = 0', 'f of a equals zero', 'a is an x-intercept'],
             ['f(x) = 5', 'solve f of x equals 5', 'which inputs give output 5?']],
      note: 'The number inside the brackets is the INPUT. The number after the equals is the OUTPUT.' },
    { type: 'decide', question: 'Domain or range?', branches: [
      { if: 'The question asks what x can be', then: 'DOMAIN. Read the graph left to right.' },
      { if: 'The question asks what y can be', then: 'RANGE. Read the graph bottom to top.' },
      { if: 'It is a real context, like tickets sold', then: 'Domain is limited to what makes sense: whole numbers, not negatives.' }
    ] }
  ],
  steps: [
    'Read f(x) as "f of x". The bracket holds the input.',
    'To evaluate f(3), replace every x in the rule with 3, then simplify.',
    'To solve f(x) = 7, set the rule equal to 7 and solve for x. That is the reverse direction.',
    'For domain, ask what inputs are allowed. Read a graph left to right.',
    'For range, ask what outputs come out. Read a graph bottom to top.',
    'In a real context, restrict the domain to values that make sense.'
  ],
  example: { prompt: 'If f(x) = 3x - 4, find f(5) and solve f(x) = 11.',
    work: ['f(5): replace x with 5. 3(5) - 4 = 15 - 4 = 11.', 'f(x) = 11: write 3x - 4 = 11.', 'Add 4: 3x = 15. Divide: x = 5.', 'Notice both directions agree.'],
    answer: 'f(5) = 11, and f(x) = 11 when x = 5' },
  traps: [
    'Reading f(x) as f times x. It is a label, not a product.',
    'Mixing up f(3) and f(x) = 3. The first gives you an output; the second asks for an input.',
    'Giving the domain when the question asked for the range. Domain is the x values.',
    'Ignoring context limits. A function for tickets sold has no negative domain.'
  ],
  check: [
    { q: 'If f(x) = x squared + 1, what is f(4)?', a: '17. Square 4 to get 16, then add 1.' },
    { q: 'What does the domain describe?', a: 'Every input the function allows.' },
    { q: 'Is f(x) the same as f times x?', a: 'No. It is a name for the output when the input is x.' }
  ],
  links: [{ t: 'Math is Fun: What is a Function?', u: 'https://www.mathsisfun.com/sets/function.html', d: 'Functions, domain and range.' }],
  note: 'frayer'
},
{
  id: 'a1-slope-rate', subject: 'math', unit: 'Linear relationships', grades: ['9'],
  title: 'Slope and rate of change from any representation',
  alt: 'slope rate of change table graph two points equation algebra 1',
  stuck: ['I can find slope on a graph but not from a table', 'What does slope mean in a word problem?'],
  teks: ['9.3.A', '9.3.B'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Slope is the change in y for every one unit of change in x. Algebra I asks you to find it four ways: from a graph, a table, two points, or an equation.',
  why: 'Slope is the most reused idea in Algebra I. It becomes rate of change and the m in every linear model.',
  words: [
    { w: 'slope', d: 'Change in y divided by change in x.' },
    { w: 'rate of change', d: 'Slope described in the units of a real situation.' }
  ],
  visual: [
    { type: 'table', title: 'Same slope, four ways to find it', head: ['Given', 'What you do', 'Result'],
      rows: [['Two points (1,5) and (3,11)', '(11 - 5) divided by (3 - 1)', '3'],
             ['A table', 'change in y divided by change in x between rows', '3'],
             ['A graph', 'count rise over run between clean points', '3'],
             ['y = 3x - 2', 'read the coefficient of x', '3']],
      note: 'All four must agree, or it is not linear.' },
    { type: 'slope', m: 3, b: -2, title: 'y = 3x - 2' }
  ],
  steps: [
    'See what you were given: two points, a table, a graph, or an equation.',
    'Two points: use (y2 - y1) divided by (x2 - x1). Keep the order the same top and bottom.',
    'A table: divide the change in y by the change in x between any two rows.',
    'A graph: count rise over run between points on exact intersections.',
    'An equation in y = mx + b form: read the coefficient of x.',
    'In context, add units: "the cost rises $3 per extra ticket".'
  ],
  example: { prompt: 'A table shows (2, 7), (5, 16), (8, 25). Find the rate of change.',
    work: ['Pick two rows: (2, 7) and (5, 16).', 'Change in y: 16 - 7 = 9.', 'Change in x: 5 - 2 = 3.', 'Slope = 9 divided by 3 = 3.', 'Check with another pair: (25 - 16) / (8 - 5) = 3. Consistent.'],
    answer: 'Rate of change is 3' },
  traps: [
    'Subtracting in a different order on the top and the bottom. Fix one point as first and stay with it.',
    'Reading the y-intercept as the slope in y = mx + b.',
    'Checking only one pair of rows in a table. If the quotient changes, it is not linear.',
    'Giving a bare number in a context question. Slope needs units.'
  ],
  check: [
    { q: 'Find the slope through (0, 4) and (2, 10).', a: '3. Six over two.' },
    { q: 'In y = -5x + 2, what is the slope?', a: 'Negative 5.' },
    { q: 'A table gives different quotients between rows. What does that tell you?', a: 'The relationship is not linear.' }
  ],
  links: [{ t: 'Math is Fun: Gradient (Slope)', u: 'https://www.mathsisfun.com/gradient.html', d: 'Slope from every representation.' }],
  note: 'steps'
},
{
  id: 'a1-write-linear', subject: 'math', unit: 'Linear relationships', grades: ['9'],
  title: 'Writing linear equations in every form',
  alt: 'slope intercept point slope standard form Ax+By=C write equation of a line',
  stuck: ['Which form should I use?', 'I have a point and a slope but not the y-intercept'],
  teks: ['9.2.B', '9.2.C', '9.2.D'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Three forms describe the same line. Which one you start in depends on what you were handed.',
  why: 'Algebra I asks you to move between all three. The right starting form turns a long problem into a short one.',
  words: [
    { w: 'slope-intercept', d: 'y = mx + b. Slope m, y-intercept b.' },
    { w: 'point-slope', d: 'y - y1 = m(x - x1). Built from one point and the slope.' },
    { w: 'direct variation', d: 'y = kx. A line through the origin.' }
  ],
  visual: [
    { type: 'decide', question: 'What were you given?', branches: [
      { if: 'Slope and the y-intercept', then: 'Slope-intercept. Substitute straight into y = mx + b.' },
      { if: 'Slope and any other point', then: 'Point-slope. y - y1 = m(x - x1), then rearrange if asked.' },
      { if: 'Two points', then: 'Find the slope first, then use point-slope with either point.' },
      { if: 'A table or verbal description', then: 'Find the rate of change and the starting value, then y = mx + b.' },
      { if: 'It passes through the origin', then: 'Direct variation: y = kx.' }
    ] },
    { type: 'table', title: 'The three forms', head: ['Form', 'Looks like', 'Best for'],
      rows: [['Slope-intercept', 'y = mx + b', 'graphing quickly'],
             ['Point-slope', 'y - y1 = m(x - x1)', 'building from a point'],
             ['Standard', 'Ax + By = C', 'intercepts and systems']] }
  ],
  steps: [
    'See what you have: a slope, points, a table, or a description.',
    'No slope yet? Find it first.',
    'With the y-intercept, write y = mx + b directly.',
    'Without it, use point-slope with any point on the line.',
    'Rearrange only if the question asks for a form.',
    'Check by substituting a known point back in.'
  ],
  example: { prompt: 'Write the equation of the line through (2, 5) with slope 4.',
    work: ['No y-intercept given, so start in point-slope.', 'y - 5 = 4(x - 2).', 'Distribute: y - 5 = 4x - 8.', 'Add 5: y = 4x - 3.', 'Check: 4(2) - 3 = 5. Correct.'],
    answer: 'y = 4x - 3' },
  traps: [
    'Forcing y = mx + b when you have no y-intercept. Point-slope is faster.',
    'Sign errors in point-slope. y - (-3) becomes y + 3.',
    'Rearranging into standard form when the question never asked.',
    'Using a point that is not on the line to check.'
  ],
  check: [
    { q: 'Line through (0, 7) with slope -2. Write it.', a: 'y = -2x + 7. The y-intercept was given.' },
    { q: 'Which form is built from one point and a slope?', a: 'Point-slope form.' },
    { q: 'What makes an equation direct variation?', a: 'It passes through the origin, so y = kx with no constant added.' }
  ],
  links: [{ t: 'Math is Fun: Equation of a Straight Line', u: 'https://www.mathsisfun.com/equation_of_line.html', d: 'All three forms compared.' }],
  note: 'steps'
},
{
  id: 'a1-parallel-perpendicular', subject: 'math', unit: 'Linear relationships', grades: ['9'],
  title: 'Parallel and perpendicular lines',
  alt: 'parallel perpendicular negative reciprocal slope horizontal vertical',
  stuck: ['What is a negative reciprocal?', 'Which one flips the slope?'],
  teks: ['9.2.E', '9.2.F', '9.2.G'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Parallel lines have identical slopes. Perpendicular lines have slopes that multiply to negative one, which means you flip the fraction and change the sign.',
  why: 'This is a short rule that appears constantly, and the perpendicular case is where almost everyone slips.',
  words: [
    { w: 'parallel', d: 'Same slope, never meet.' },
    { w: 'perpendicular', d: 'Meet at a right angle.' },
    { w: 'negative reciprocal', d: 'Flip the fraction and change the sign: 2/3 becomes -3/2.' }
  ],
  visual: [
    { type: 'table', title: 'What happens to the slope', head: ['Original slope', 'Parallel', 'Perpendicular'],
      rows: [['3', '3', '-1/3'], ['-2/5', '-2/5', '5/2'], ['1', '1', '-1'], ['0 (horizontal)', '0', 'undefined (vertical)']],
      note: 'Multiply a slope by its perpendicular partner and you always get -1.' },
    { type: 'flow', steps: [
      'Get both equations into y = mx + b so you can read the slopes.',
      'Same slope means parallel.',
      'Multiply the two slopes: if the product is -1, they are perpendicular.',
      'To build a perpendicular line, flip the fraction and change the sign.',
      'Then use point-slope with the given point.',
      'Horizontal (y = 3) and vertical (x = 3) lines are perpendicular to each other.'
    ] }
  ],
  steps: [
    'Rearrange each equation into y = mx + b.',
    'Compare the slopes: identical means parallel.',
    'For perpendicular, flip the slope and change its sign.',
    'Multiply the two slopes as a check. It must equal -1.',
    'Use point-slope with the new slope and the given point.',
    'Treat horizontal and vertical lines as a special pair: slope 0 and undefined.'
  ],
  example: { prompt: 'Write the line through (4, 1) perpendicular to y = 2x + 9.',
    work: ['Original slope is 2, which is 2/1.', 'Flip and negate: -1/2.', 'Point-slope: y - 1 = -1/2 (x - 4).', 'Distribute: y - 1 = -1/2 x + 2.', 'Add 1: y = -1/2 x + 3.', 'Check: 2 times -1/2 = -1. Correct.'],
    answer: 'y = -1/2 x + 3' },
  traps: [
    'Changing the sign but not flipping the fraction, or flipping but not changing the sign. You must do both.',
    'Comparing slopes before rearranging into y = mx + b.',
    'Thinking a vertical line has slope 0. It is undefined; a horizontal line has slope 0.',
    'Using the original slope by accident after finding the perpendicular one.'
  ],
  check: [
    { q: 'What slope is perpendicular to 3/4?', a: 'Negative 4/3.' },
    { q: 'Two lines both have slope -6. What are they?', a: 'Parallel.' },
    { q: 'What is the product of perpendicular slopes?', a: 'Negative one.' }
  ],
  links: [{ t: 'Math is Fun: Equation of a Straight Line', u: 'https://www.mathsisfun.com/equation_of_line.html', d: 'Parallel and perpendicular slopes.' }],
  note: 'steps'
},
{
  id: 'a1-graph-linear', subject: 'math', unit: 'Linear relationships', grades: ['9'],
  title: 'Graphing lines and reading their key features',
  alt: 'graph linear function x intercept y intercept zeros transformations parent function',
  stuck: ['What counts as a key feature?', 'How does changing the equation move the line?'],
  teks: ['9.3.C', '9.3.E'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Graph from the y-intercept and the slope, then name the key features: where it crosses each axis, whether it rises or falls, and its slope. Changing the equation moves the graph in predictable ways.',
  why: 'Algebra I questions rarely say "graph it". They say "identify the key features", which means you must name them precisely.',
  words: [
    { w: 'x-intercept', d: 'Where the line crosses the x-axis. Here y = 0. Also called a zero.' },
    { w: 'y-intercept', d: 'Where the line crosses the y-axis. Here x = 0.' },
    { w: 'parent function', d: 'The simplest version, f(x) = x.' }
  ],
  visual: [
    { type: 'slope', m: 2, b: -1, title: 'y = 2x - 1: y-intercept -1, x-intercept 0.5' },
    { type: 'table', title: 'What changing the equation does', head: ['Change', 'Effect on the graph'],
      rows: [['f(x) + d', 'shifts up by d'], ['f(x) - d', 'shifts down by d'],
             ['a f(x), a > 1', 'steeper'], ['a f(x), 0 < a < 1', 'flatter'],
             ['-f(x)', 'reflects across the x-axis']] }
  ],
  steps: [
    'Rearrange into y = mx + b if it is not already.',
    'Plot the y-intercept at (0, b).',
    'Step from there using the slope as rise over run, and plot a second point.',
    'Draw the line through both and extend it with arrows.',
    'Find the x-intercept by setting y = 0 and solving.',
    'Name the key features: both intercepts, the slope, and whether it increases or decreases.'
  ],
  example: { prompt: 'Graph y = 2x - 6 and name its key features.',
    work: ['y-intercept: (0, -6).', 'Slope 2 means up 2, right 1.', 'x-intercept: set 0 = 2x - 6, so 2x = 6 and x = 3.', 'It increases because the slope is positive.'],
    answer: 'y-intercept (0, -6), x-intercept (3, 0), slope 2, increasing' },
  traps: [
    'Plotting the y-intercept on the x-axis.',
    'Giving the x-intercept as a y-value. It is a point where y = 0.',
    'Forgetting that a negative slope means the line falls left to right.',
    'Reading grid squares as 1 when the axis scale says otherwise.'
  ],
  check: [
    { q: 'How do you find an x-intercept algebraically?', a: 'Set y to zero and solve for x.' },
    { q: 'What does replacing f(x) with f(x) + 4 do?', a: 'Shifts the whole graph up 4.' },
    { q: 'A line has slope -3. Does it rise or fall left to right?', a: 'It falls.' }
  ],
  links: [{ t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', d: 'Type the equation and watch the line move.' }],
  note: 'steps'
},

/* ========= ALGEBRA I : SOLVING ========= */
{
  id: 'a1-solve-linear', subject: 'math', unit: 'Solving equations and inequalities', grades: ['9'],
  title: 'Solving linear equations with variables on both sides',
  alt: 'solve linear equation distributive property variables both sides no solution infinite',
  stuck: ['The variable cancelled out completely', 'There are fractions everywhere'],
  teks: ['9.5.A'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Clear the parentheses, clear the fractions, collect the variable on one side, then undo the arithmetic. If the variable vanishes you still have an answer, just an unusual one.',
  why: 'This is the backbone skill of Algebra I, and the vanishing-variable case is the one nobody expects.',
  words: [
    { w: 'distributive property', d: 'Multiply the outside term by everything inside the parentheses.' },
    { w: 'no solution', d: 'The variable vanishes and leaves something false, like 3 = 7.' },
    { w: 'infinitely many', d: 'The variable vanishes and leaves something true, like 5 = 5.' }
  ],
  visual: [
    { type: 'flow', steps: [
      'Distribute to clear every set of parentheses.',
      'Clear fractions by multiplying every term by the common denominator.',
      'Combine like terms on each side separately.',
      'Move the smaller variable term across so the remaining coefficient stays positive.',
      'Undo addition and subtraction, then multiplication and division.',
      'Substitute your answer back into the ORIGINAL equation.'
    ] },
    { type: 'decide', question: 'The variable disappeared. Now what?', branches: [
      { if: 'You are left with something true, like 8 = 8', then: 'Infinitely many solutions. Every x works.' },
      { if: 'You are left with something false, like 8 = 3', then: 'No solution. No x works.' },
      { if: 'You are left with a number equal to x', then: 'Normal case: that is your solution.' }
    ] }
  ],
  steps: [
    'Distribute first. A negative outside the parentheses applies to every term inside.',
    'If there are fractions, multiply every term by the least common denominator.',
    'Combine like terms on each side.',
    'Move the smaller variable term to the other side.',
    'Undo the addition or subtraction, then the multiplication or division.',
    'Check in the original equation, not a rewritten line.'
  ],
  example: { prompt: 'Solve 3(x - 2) = 5x + 8.',
    work: ['Distribute: 3x - 6 = 5x + 8.', 'Subtract 3x: -6 = 2x + 8.', 'Subtract 8: -14 = 2x.', 'Divide by 2: x = -7.', 'Check: 3(-7 - 2) = -27 and 5(-7) + 8 = -27. Correct.'],
    answer: 'x = -7' },
  traps: [
    'Distributing a negative to only the first term. -2(x - 5) is -2x + 10.',
    'Treating a vanished variable as an error. It is a real answer, either none or infinitely many.',
    'Multiplying only some terms when clearing fractions. Every term must be multiplied.',
    'Checking in a rewritten line instead of the original, which hides an early slip.'
  ],
  check: [
    { q: 'Solve 2(x + 3) = 2x + 6.', a: 'Infinitely many solutions. Both sides are identical.' },
    { q: 'You reach 4 = 9. What is the answer?', a: 'No solution.' },
    { q: 'What do you do first in 5(x - 1) = 20?', a: 'Distribute, or divide both sides by 5.' }
  ],
  links: [{ t: 'Math is Fun: Solving Equations', u: 'https://www.mathsisfun.com/algebra/equations-solving.html', d: 'Multi-step equations worked through.' }],
  note: 'steps'
},
{
  id: 'a1-inequalities', subject: 'math', unit: 'Solving equations and inequalities', grades: ['9'],
  title: 'Solving and graphing inequalities',
  alt: 'linear inequality flip the sign number line shading compound inequality',
  stuck: ['When exactly does the sign flip?', 'How do I graph a two-variable inequality?'],
  teks: ['9.5.B', '9.2.H', '9.3.D'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Solve an inequality exactly like an equation, with one exception: multiplying or dividing both sides by a negative flips the direction. Two-variable inequalities shade a whole region rather than a line.',
  why: 'The flip rule is one line of the lesson that costs a whole unit of accuracy, and the shading step is new in Algebra I.',
  words: [
    { w: 'boundary line', d: 'The line you graph first, before shading.' },
    { w: 'solid line', d: 'Used for the signs that include equal to.' },
    { w: 'dashed line', d: 'Used for strict inequalities, where the line itself is excluded.' }
  ],
  visual: [
    { type: 'table', title: 'One variable versus two', head: ['', 'One variable', 'Two variables'],
      rows: [['Example', 'x > 3', 'y > 2x + 1'],
             ['Solution looks like', 'a ray on a number line', 'a shaded half of the plane'],
             ['Boundary', 'open or closed circle', 'dashed or solid line'],
             ['How to check', 'test a number', 'test a point, usually (0,0)']] },
    { type: 'numberline', min: -2, max: 8, title: 'x > 3: open circle, shade right',
      ticks: [-2, 0, 2, 4, 6, 8].map(function (v) { return { v: v, l: String(v) }; }),
      points: [{ v: 3, l: 'open at 3' }],
      jumps: [{ from: 3, to: 8, l: 'shade' }] }
  ],
  steps: [
    'Solve exactly as you would an equation.',
    'If you multiply or divide both sides by a negative number, flip the inequality sign.',
    'Adding or subtracting a negative never flips anything.',
    'For one variable, graph on a number line: open circle for < or >, closed for the "or equal to" signs.',
    'For two variables, graph the boundary line first. Dashed for strict, solid for "or equal to".',
    'Shade by testing a point. If (0,0) makes it true, shade that side.'
  ],
  example: { prompt: 'Solve and graph -4x + 2 > 14.',
    work: ['Subtract 2: -4x > 12.', 'Divide by -4 and FLIP: x < -3.', 'Graph: open circle at -3, shade left.', 'Test x = -10: -4(-10) + 2 = 42, and 42 > 14. Correct.'],
    answer: 'x < -3' },
  traps: [
    'Flipping after adding or subtracting a negative. Only multiplying or dividing by a negative flips it.',
    'Forgetting to flip at all. Always test one value from your answer.',
    'Using a solid boundary line for a strict inequality.',
    'Shading without testing a point, then shading the wrong half.'
  ],
  check: [
    { q: 'Solve -2x < 10.', a: 'Divide by -2 and flip: x > -5.' },
    { q: 'Dashed or solid for y is greater than or equal to x?', a: 'Solid, because the line is included.' },
    { q: 'How do you decide which side to shade?', a: 'Test a point, usually the origin.' }
  ],
  links: [{ t: 'Math is Fun: Inequalities', u: 'https://www.mathsisfun.com/algebra/inequality.html', d: 'Solving rules, including when to flip.' }],
  note: 'steps'
},
{
  id: 'a1-systems', subject: 'math', unit: 'Systems and modeling', grades: ['9'],
  title: 'Systems of equations: graphing, substitution, elimination',
  alt: 'system of equations substitution elimination graphing break even point no solution',
  stuck: ['Which method should I pick?', 'Both variables cancelled'],
  teks: ['9.5.C', '9.3.F', '9.3.G', '9.2.I'],
  apps: ['Math Academy', 'Edia'],
  plain: 'A system asks for the one pair that makes both equations true. Graphing shows you where the lines meet, substitution works when a variable is already alone, and elimination works when the equations line up.',
  why: 'Every break-even, comparison and mixture problem in Algebra I is a system. Choosing the right method saves most of the work.',
  words: [
    { w: 'system', d: 'Two or more equations considered together.' },
    { w: 'substitution', d: 'Replace one variable using the other equation.' },
    { w: 'elimination', d: 'Add or subtract the equations to remove a variable.' }
  ],
  visual: [
    { type: 'decide', question: 'Which method?', branches: [
      { if: 'A variable is already alone, like y = 3x - 1', then: 'SUBSTITUTION. Drop it into the other equation.' },
      { if: 'The equations are both in Ax + By = C form', then: 'ELIMINATION. Line them up and add or subtract.' },
      { if: 'You only need an estimate, or the question says graph', then: 'GRAPHING. Read off the intersection.' },
      { if: 'Both variables cancel and you get a true statement', then: 'Infinitely many: the lines are identical.' },
      { if: 'Both cancel and you get a false statement', then: 'No solution: the lines are parallel.' }
    ] },
    { type: 'table', title: 'What the graph tells you', head: ['The lines', 'Solutions'],
      rows: [['cross once', 'exactly one'], ['are parallel', 'none'], ['lie on top of each other', 'infinitely many']] }
  ],
  steps: [
    'Decide the method from the shape of the equations.',
    'For substitution, isolate one variable, substitute into the other equation, and solve.',
    'For elimination, line up like terms and add or subtract to remove one variable.',
    'If needed, multiply one or both equations first so a variable will cancel.',
    'Solve for the remaining variable, then back-substitute for the other.',
    'Write the answer as an ordered pair and check it in BOTH original equations.'
  ],
  example: { prompt: 'Solve: y = 2x + 1 and 3x + y = 11.',
    work: ['y is already alone, so substitute.', '3x + (2x + 1) = 11.', '5x + 1 = 11, so 5x = 10 and x = 2.', 'Back-substitute: y = 2(2) + 1 = 5.', 'Check in both: 3(2) + 5 = 11. Correct.'],
    answer: '(2, 5)' },
  traps: [
    'Giving only x. A system solution is an ordered pair.',
    'Checking in one equation only. It must satisfy both.',
    'Adding the equations when you needed to subtract, so nothing cancels.',
    'Reading a sloppy graph. If the intersection is not on a grid point, solve algebraically.'
  ],
  check: [
    { q: 'Two lines have the same slope and different intercepts. How many solutions?', a: 'None. They are parallel.' },
    { q: 'When is substitution easiest?', a: 'When a variable is already isolated.' },
    { q: 'You find x = 3. Are you finished?', a: 'No. Back-substitute to find y, then check the pair.' }
  ],
  links: [{ t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', d: 'Graph both equations and see the intersection.' }],
  note: 'steps'
},
{
  id: 'a1-linear-models', subject: 'math', unit: 'Systems and modeling', grades: ['9'],
  title: 'Linear models, correlation and causation',
  alt: 'line of best fit correlation coefficient r scatter plot association causation residual',
  stuck: ['What does r actually mean?', 'Does a strong correlation prove it caused it?'],
  teks: ['9.4.A', '9.4.B', '9.4.C'],
  apps: ['Math Academy', 'Edia'],
  plain: 'A line of best fit summarises a cloud of data. The correlation coefficient r measures how tightly the points hug that line, from -1 to 1. A strong r never proves one thing caused the other.',
  why: 'The correlation-causation distinction is tested directly and is the single most misused idea in statistics.',
  words: [
    { w: 'correlation coefficient (r)', d: 'A number from -1 to 1 measuring how linear the data is.' },
    { w: 'line of best fit', d: 'The line that comes closest to all the points.' },
    { w: 'causation', d: 'One variable actually produces the change in the other.' }
  ],
  visual: [
    { type: 'table', title: 'Reading r', head: ['r is about', 'Means'],
      rows: [['1', 'perfect positive: points sit exactly on a rising line'],
             ['0.8', 'strong positive'], ['0.3', 'weak positive'], ['0', 'no linear relationship'],
             ['-0.9', 'strong negative: points fall tightly'], ['-1', 'perfect negative']],
      note: 'The sign gives the direction. The distance from zero gives the strength.' },
    { type: 'decide', question: 'Correlation or causation?', branches: [
      { if: 'Two variables move together in the data', then: 'Correlation. That is all you can claim.' },
      { if: 'A controlled experiment changed one and measured the other', then: 'Causation may be justified.' },
      { if: 'A third factor could explain both', then: 'Confounding. Ice cream sales and drownings both rise with heat.' }
    ] }
  ],
  steps: [
    'Plot the data or read the scatter plot.',
    'Describe the direction: positive, negative, or none.',
    'Describe the strength: tight to a line, or widely scattered.',
    'Use technology to compute r and the line of best fit.',
    'Use the equation to predict, and say whether the prediction is inside the data range.',
    'State the limit explicitly: correlation does not establish causation.'
  ],
  example: { prompt: 'Hours studied versus test score gives r = 0.86 and y = 4.2x + 61. Interpret both.',
    work: ['r = 0.86 is a strong positive correlation.', 'Slope 4.2: each extra hour is associated with about 4.2 more points.', 'Intercept 61: the predicted score with no study.', 'Strong association, but study habits and motivation could drive both.'],
    answer: 'Strong positive correlation; about 4.2 points per hour; association, not proof of cause' },
  traps: [
    'Claiming causation from a high r.',
    'Reading the sign of r as the strength. -0.9 is stronger than 0.3.',
    'Extrapolating far past the data and treating the result as reliable.',
    'Describing direction but never strength, or the reverse. Questions want both.'
  ],
  check: [
    { q: 'r = -0.95. Describe it.', a: 'A strong negative linear relationship.' },
    { q: 'Does r = 0.9 prove one variable caused the other?', a: 'No. It shows a strong association only.' },
    { q: 'What does the slope of a best-fit line mean?', a: 'The predicted change in y for each one-unit rise in x.' }
  ],
  links: [{ t: 'Math is Fun: Scatter (x,y) Plots', u: 'https://www.mathsisfun.com/data/scatter-xy-plots.html', d: 'Correlation and lines of best fit.' }],
  note: 'strategy'
},

/* ========= ALGEBRA I : EXPONENTS AND POLYNOMIALS ========= */
{
  id: 'a1-exponent-laws', subject: 'math', unit: 'Exponents and polynomials', grades: ['9'],
  title: 'The laws of exponents',
  alt: 'exponent rules product quotient power zero negative rational exponents radicals',
  stuck: ['Do I add or multiply the exponents?', 'What does a negative exponent do?'],
  teks: ['9.11.B', '9.11.A'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Every exponent law comes from writing the powers out long. Multiplying the same base adds exponents because you are just counting factors. Nothing here needs memorising if you can expand one example.',
  why: 'Exponent errors quietly wreck polynomial and exponential work later, and they all trace back to three or four rules.',
  words: [
    { w: 'base', d: 'The number being multiplied repeatedly.' },
    { w: 'rational exponent', d: 'A fractional exponent. x to the 1/2 is the square root of x.' }
  ],
  visual: [
    { type: 'table', title: 'The laws, and where they come from', head: ['Law', 'Example', 'Why'],
      rows: [['Multiply: add exponents', 'x³ · x⁴ = x⁷', 'three factors then four is seven'],
             ['Divide: subtract exponents', 'x⁷ ÷ x⁴ = x³', 'four of them cancel'],
             ['Power of a power: multiply', '(x³)⁴ = x¹²', 'four groups of three'],
             ['Zero exponent', 'x⁰ = 1', 'x³ ÷ x³ is 1'],
             ['Negative exponent', 'x⁻³ = 1/x³', 'keep dividing past zero'],
             ['Rational exponent', 'x^(1/2) = √x', 'the power that squares to x']] }
  ],
  steps: [
    'Identify whether the bases are the same. The laws only apply to matching bases.',
    'Multiplying matching bases: add the exponents.',
    'Dividing matching bases: subtract the exponents, top minus bottom.',
    'A power raised to a power: multiply the exponents.',
    'A negative exponent means reciprocal, not a negative answer.',
    'Simplify until every exponent is positive, unless told otherwise.'
  ],
  example: { prompt: 'Simplify (2x³)⁴ ÷ (4x⁵).',
    work: ['Expand the top: 2⁴ x¹² = 16x¹².', 'Divide: 16x¹² ÷ 4x⁵.', 'Numbers: 16 ÷ 4 = 4.', 'Variables: subtract exponents, 12 - 5 = 7.'],
    answer: '4x⁷' },
  traps: [
    'Multiplying exponents when you are multiplying bases. x³ · x⁴ is x⁷, not x¹².',
    'Forgetting the coefficient when raising a power: (2x³)⁴ raises the 2 as well.',
    'Treating x⁻³ as a negative number. It is a reciprocal.',
    'Applying the laws across different bases. x³ · y⁴ does not simplify.'
  ],
  check: [
    { q: 'Simplify x⁵ · x⁶.', a: 'x¹¹. Add the exponents.' },
    { q: 'What is 7⁰?', a: 'One.' },
    { q: 'Write x⁻⁴ without a negative exponent.', a: 'One over x⁴.' }
  ],
  links: [{ t: 'Math is Fun: Exponents', u: 'https://www.mathsisfun.com/exponent.html', d: 'Every law with worked examples.' }],
  note: 'frayer'
},
{
  id: 'a1-polynomial-ops', subject: 'math', unit: 'Exponents and polynomials', grades: ['9'],
  title: 'Adding, subtracting and multiplying polynomials',
  alt: 'polynomial add subtract multiply distribute FOIL like terms degree',
  stuck: ['Subtracting a polynomial keeps going wrong', 'What is FOIL actually doing?'],
  teks: ['9.10.A', '9.10.B', '9.10.D'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Adding and subtracting polynomials is just combining like terms, with one catch: subtraction changes the sign of every term in the second polynomial. Multiplying means every term times every term.',
  why: 'Sign errors on subtraction and missed terms on multiplication are the two highest-frequency mistakes in this unit.',
  words: [
    { w: 'polynomial', d: 'A sum of terms with whole-number exponents.' },
    { w: 'like terms', d: 'Same variable, same exponent. 3x² and 7x² only.' },
    { w: 'degree', d: 'The highest exponent in the expression.' }
  ],
  visual: [
    { type: 'areamodel', title: 'Multiplying (x + 3)(x + 5) as an area',
      cols: ['x', '+5'], rows: ['x', '+3'],
      cells: [['x²', '5x'], ['3x', '15']],
      total: 'x² + 5x + 3x + 15 = x² + 8x + 15' },
    { type: 'flow', steps: [
      'ADDING: drop the brackets and combine like terms.',
      'SUBTRACTING: change the sign of EVERY term in the second polynomial first.',
      'MULTIPLYING: every term in the first times every term in the second.',
      'An area model guarantees you catch every pair.',
      'Combine like terms in the result.',
      'Write the answer in descending order of degree.'
    ] }
  ],
  steps: [
    'For addition, remove the brackets and combine like terms.',
    'For subtraction, distribute the negative to every term in the second polynomial, then combine.',
    'For multiplication, draw an area model with one polynomial across the top and the other down the side.',
    'Fill every cell: each is one term times another.',
    'Add all the cells and combine like terms.',
    'Order the answer from the highest exponent down.'
  ],
  example: { prompt: 'Simplify (3x² + 2x - 1) - (x² - 4x + 6).',
    work: ['Distribute the negative: -x² + 4x - 6.', 'Rewrite: 3x² + 2x - 1 - x² + 4x - 6.', 'x² terms: 3x² - x² = 2x².', 'x terms: 2x + 4x = 6x.', 'Constants: -1 - 6 = -7.'],
    answer: '2x² + 6x - 7' },
  traps: [
    'Distributing the subtraction to only the first term. Every term flips sign.',
    'Combining terms with different exponents. 3x² and 4x are not like terms.',
    'Missing a pair when multiplying. The area model prevents this.',
    'Leaving the answer out of order, which makes the degree hard to read.'
  ],
  check: [
    { q: 'Simplify (2x + 5) + (3x - 8).', a: '5x - 3.' },
    { q: 'What happens to the signs when you subtract a polynomial?', a: 'Every term in the second polynomial changes sign.' },
    { q: 'Multiply (x + 2)(x + 4).', a: 'x² + 6x + 8.' }
  ],
  links: [{ t: 'Polypad', u: 'https://polypad.amplify.com/', d: 'Algebra tiles for building polynomial products.' }],
  note: 'steps'
},
{
  id: 'a1-factoring', subject: 'math', unit: 'Exponents and polynomials', grades: ['9'],
  title: 'Factoring: GCF, trinomials and difference of squares',
  alt: 'factoring greatest common factor trinomial difference of two squares perfect square',
  stuck: ['Which factoring method do I use?', 'I cannot find the two numbers'],
  teks: ['9.10.E', '9.10.F', '9.10.D'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Factoring is multiplying in reverse. Always pull out the greatest common factor first, then look at how many terms are left to decide what to do next.',
  why: 'Factoring is how you solve quadratics by hand and how you find zeros. Skipping the GCF step is why so many factorings come out wrong.',
  words: [
    { w: 'GCF', d: 'The greatest common factor shared by every term.' },
    { w: 'trinomial', d: 'Three terms, usually ax² + bx + c.' },
    { w: 'difference of squares', d: 'a² - b², which factors as (a + b)(a - b).' }
  ],
  visual: [
    { type: 'decide', question: 'How many terms are left after the GCF?', branches: [
      { if: 'Two terms, both perfect squares, subtracted', then: 'Difference of squares: (a + b)(a - b).' },
      { if: 'Three terms with a leading coefficient of 1', then: 'Find two numbers that multiply to c and add to b.' },
      { if: 'Three terms with a leading coefficient above 1', then: 'Multiply a by c, split the middle term, then factor by grouping.' },
      { if: 'Four terms', then: 'Factor by grouping in pairs.' },
      { if: 'Two terms added, both squares', then: 'A sum of squares does not factor over the reals.' }
    ] },
    { type: 'table', title: 'Finding the pair for x² + bx + c', head: ['Signs of b and c', 'The two numbers'],
      rows: [['c positive, b positive', 'both positive'], ['c positive, b negative', 'both negative'],
             ['c negative', 'one positive, one negative'], ['no pair works', 'it does not factor over the integers']] }
  ],
  steps: [
    'Always pull out the GCF first, including a negative if the leading term is negative.',
    'Count the terms that remain.',
    'Two terms: check for a difference of squares.',
    'Three terms with leading coefficient 1: find two numbers multiplying to c and adding to b.',
    'Three terms with a bigger leading coefficient: multiply a times c, split the middle, factor by grouping.',
    'Multiply your factors back out to check you recover the original.'
  ],
  example: { prompt: 'Factor 2x² - 18.',
    work: ['GCF is 2: 2(x² - 9).', 'Two terms left, both perfect squares, subtracted.', 'x² - 9 = (x + 3)(x - 3).', 'Check: 2(x + 3)(x - 3) = 2(x² - 9) = 2x² - 18.'],
    answer: '2(x + 3)(x - 3)' },
  traps: [
    'Skipping the GCF, which leaves an answer that is not fully factored.',
    'Trying to factor a sum of squares. x² + 9 does not factor over the reals.',
    'Getting the signs backwards in the pair. Check by multiplying out.',
    'Stopping after one step when a factor can still be factored further.'
  ],
  check: [
    { q: 'Factor x² - 25.', a: '(x + 5)(x - 5). A difference of squares.' },
    { q: 'Factor x² + 7x + 12.', a: '(x + 3)(x + 4). They multiply to 12 and add to 7.' },
    { q: 'What is the first step, always?', a: 'Pull out the greatest common factor.' }
  ],
  links: [{ t: 'Math is Fun: Factoring', u: 'https://www.mathsisfun.com/algebra/factoring.html', d: 'Every factoring pattern.' }],
  note: 'strategy'
},

/* ========= ALGEBRA I : QUADRATICS AND EXPONENTIALS ========= */
{
  id: 'a1-graph-quadratic', subject: 'math', unit: 'Quadratic functions', grades: ['9'],
  title: 'Graphing quadratics: vertex, axis of symmetry and zeros',
  alt: 'parabola vertex axis of symmetry zeros roots maximum minimum transformations',
  stuck: ['How do I find the vertex from the equation?', 'What is the axis of symmetry for?'],
  teks: ['9.7.A', '9.7.C', '9.6.A'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Every quadratic graphs as a parabola. The vertex is its turning point, the axis of symmetry is the vertical line through it, and the zeros are where it crosses the x-axis. Find the vertex first and the rest follows.',
  why: 'Almost every quadratic question asks for a key feature by name, and the vertex unlocks all of them.',
  words: [
    { w: 'parabola', d: 'The U-shaped graph of a quadratic.' },
    { w: 'vertex', d: 'The turning point: the maximum or the minimum.' },
    { w: 'axis of symmetry', d: 'The vertical line x = -b/(2a) through the vertex.' },
    { w: 'zeros', d: 'The x-values where the graph crosses the x-axis.' }
  ],
  visual: [
    { type: 'table', title: 'Reading a quadratic', head: ['Feature', 'How to find it'],
      rows: [['Opens up or down', 'a positive opens up; a negative opens down'],
             ['Axis of symmetry', 'x = -b divided by 2a'],
             ['Vertex', 'substitute that x back in to get y'],
             ['y-intercept', 'the constant c'],
             ['Zeros', 'set y = 0 and factor or use the formula'],
             ['Max or min', 'the y-value of the vertex']] },
    { type: 'plotarc', l1: 'Falls', l2: 'Approaches', l3: 'Vertex', l4: 'Turns', l5: 'Rises',
      caption: 'A parabola is symmetric: every point on one side has a mirror on the other.' }
  ],
  steps: [
    'Identify a, b and c from the standard form y = ax² + bx + c.',
    'The sign of a tells you whether it opens up or down.',
    'Compute the axis of symmetry with x = -b divided by 2a.',
    'Substitute that x back into the equation to get the vertex y.',
    'The y-intercept is c, and its mirror sits on the other side of the axis.',
    'Find the zeros by factoring or using the quadratic formula.'
  ],
  example: { prompt: 'For y = x² - 6x + 5, find the vertex, axis and zeros.',
    work: ['a = 1, b = -6, c = 5. a is positive so it opens up.', 'Axis: x = 6 divided by 2 = 3.', 'Vertex y: 9 - 18 + 5 = -4, so the vertex is (3, -4).', 'Zeros: factor to (x - 1)(x - 5) = 0, giving x = 1 and x = 5.', 'Note 1 and 5 are symmetric about 3.'],
    answer: 'Vertex (3, -4), axis x = 3, zeros x = 1 and x = 5' },
  traps: [
    'Forgetting the negative in -b/(2a), especially when b is already negative.',
    'Stopping at the axis of symmetry and calling it the vertex. The vertex is a point.',
    'Assuming every parabola has two zeros. It may have one or none.',
    'Mixing up maximum and minimum. A positive a gives a minimum.'
  ],
  check: [
    { q: 'For y = 2x² + 8x + 1, what is the axis of symmetry?', a: 'x = -2. Negative 8 over 4.' },
    { q: 'a is negative. Does the vertex give a max or a min?', a: 'A maximum.' },
    { q: 'What are the zeros also called?', a: 'The roots, or the x-intercepts.' }
  ],
  links: [{ t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', d: 'Change a, b and c and watch the parabola move.' }],
  note: 'steps'
},
{
  id: 'a1-solve-quadratic', subject: 'math', unit: 'Quadratic functions', grades: ['9'],
  title: 'Solving quadratic equations',
  alt: 'solve quadratic factoring square roots completing the square quadratic formula discriminant',
  stuck: ['Which solving method should I use?', 'The formula gives a negative under the root'],
  teks: ['9.8.A', '9.7.B'],
  apps: ['Math Academy', 'Edia'],
  plain: 'There are four ways to solve a quadratic and they all give the same answers. Pick by the shape of the equation: factoring is fastest when it factors, square roots when there is no middle term, and the formula always works.',
  why: 'Choosing well turns a five-minute problem into a one-minute one, and the formula is the safety net when nothing else fits.',
  words: [
    { w: 'zero product property', d: 'If a product is zero, one of the factors must be zero.' },
    { w: 'discriminant', d: 'b² - 4ac. It tells you how many real solutions there are.' }
  ],
  visual: [
    { type: 'decide', question: 'Which method?', branches: [
      { if: 'No middle term, like x² = 49', then: 'TAKE SQUARE ROOTS. Remember the plus and minus.' },
      { if: 'It factors easily', then: 'FACTOR, then set each factor to zero.' },
      { if: 'a is 1 and b is even', then: 'COMPLETING THE SQUARE works neatly.' },
      { if: 'Nothing factors, or you are unsure', then: 'QUADRATIC FORMULA. It always works.' }
    ] },
    { type: 'table', title: 'What the discriminant tells you', head: ['b² - 4ac', 'Real solutions', 'Graph'],
      rows: [['positive', 'two', 'crosses the x-axis twice'],
             ['zero', 'one', 'touches the x-axis once'],
             ['negative', 'none', 'never reaches the x-axis']] }
  ],
  steps: [
    'Rearrange so one side equals zero, unless you are taking square roots.',
    'Choose a method from the shape of the equation.',
    'Factoring: set each factor equal to zero and solve each.',
    'Square roots: isolate the squared term, then take the root and keep both signs.',
    'Formula: x = (-b plus or minus the root of b² - 4ac) all over 2a.',
    'Check each solution in the original equation.'
  ],
  example: { prompt: 'Solve x² - 5x + 6 = 0.',
    work: ['Already equals zero, and it factors.', '(x - 2)(x - 3) = 0.', 'Zero product: x - 2 = 0 or x - 3 = 0.', 'x = 2 or x = 3.', 'Check: 4 - 10 + 6 = 0 and 9 - 15 + 6 = 0. Both work.'],
    answer: 'x = 2 or x = 3' },
  traps: [
    'Forgetting the plus-or-minus when taking square roots, which loses half the answers.',
    'Using the zero product property when the equation does not equal zero first.',
    'Dropping the negative on b in the formula when b is already negative.',
    'Reporting a negative discriminant as an error. It means no real solutions.'
  ],
  check: [
    { q: 'Solve x² = 36.', a: 'x = 6 or x = -6. Keep both signs.' },
    { q: 'The discriminant is zero. How many real solutions?', a: 'Exactly one.' },
    { q: 'Why must one side be zero before factoring?', a: 'The zero product property only works for a product equal to zero.' }
  ],
  links: [{ t: 'Math is Fun: Solving Equations', u: 'https://www.mathsisfun.com/algebra/equations-solving.html', d: 'Quadratic solving methods.' }],
  note: 'strategy'
},
{
  id: 'a1-exponential', subject: 'math', unit: 'Exponential functions and sequences', grades: ['9'],
  title: 'Exponential growth and decay',
  alt: 'exponential function growth decay a b asymptote compound interest half life',
  stuck: ['How is this different from a linear model?', 'What do a and b mean?'],
  teks: ['9.9.A', '9.9.B', '9.9.C', '9.9.D'],
  apps: ['Math Academy', 'Edia'],
  plain: 'In f(x) = ab^x, a is the starting amount and b is what you multiply by each step. Linear models add the same amount each time; exponential models multiply by the same factor each time.',
  why: 'Interest, population, medicine doses and half-life are all exponential, and telling them apart from linear is the first question asked.',
  words: [
    { w: 'a', d: 'The initial value: the output when x is 0.' },
    { w: 'b', d: 'The growth factor. Above 1 grows; between 0 and 1 decays.' },
    { w: 'asymptote', d: 'A line the graph approaches but never reaches, usually y = 0.' }
  ],
  visual: [
    { type: 'table', title: 'Linear or exponential?', head: ['x', 'Linear: +3 each time', 'Exponential: ×3 each time'],
      rows: [['0', '2', '2'], ['1', '5', '6'], ['2', '8', '18'], ['3', '11', '54']],
      note: 'Check the table: constant DIFFERENCES mean linear, constant RATIOS mean exponential.' },
    { type: 'decide', question: 'Growth or decay?', branches: [
      { if: 'b is greater than 1', then: 'GROWTH. b = 1.05 is a 5% rise each step.' },
      { if: 'b is between 0 and 1', then: 'DECAY. b = 0.80 is a 20% fall each step.' },
      { if: 'You are given a percent rate r', then: 'Growth uses b = 1 + r; decay uses b = 1 - r.' }
    ] }
  ],
  steps: [
    'Check the table: constant differences mean linear, constant ratios mean exponential.',
    'Find a as the value when x is 0.',
    'Find b by dividing any output by the one before it.',
    'Write f(x) = ab^x.',
    'If given a percent, convert: add it to 1 for growth, subtract it from 1 for decay.',
    'When graphing, note the y-intercept at a and the asymptote at y = 0.'
  ],
  example: { prompt: 'A car worth $20,000 loses 15% of its value each year. Write the model and find its value after 3 years.',
    work: ['a = 20000, the starting value.', 'Losing 15% means b = 1 - 0.15 = 0.85.', 'f(x) = 20000(0.85)^x.', 'f(3) = 20000(0.85)³ = 20000(0.614125).'],
    answer: 'f(x) = 20000(0.85)^x, worth about $12,282 after 3 years' },
  traps: [
    'Using 0.15 as b for a 15% loss. Decay uses 1 - r, so b is 0.85.',
    'Adding instead of multiplying, which turns it into a linear model.',
    'Checking differences instead of ratios when identifying the type.',
    'Expecting the graph to reach zero. It approaches the asymptote forever.'
  ],
  check: [
    { q: 'In f(x) = 5(2)^x, what is the starting value?', a: 'Five.' },
    { q: 'b = 1.07. Growth or decay, and at what rate?', a: 'Growth of 7% per step.' },
    { q: 'A table has constant ratios. Linear or exponential?', a: 'Exponential.' }
  ],
  links: [{ t: 'Math is Fun: Exponents', u: 'https://www.mathsisfun.com/exponent.html', d: 'Powers behind exponential models.' }],
  note: 'frayer'
},
{
  id: 'a1-sequences', subject: 'math', unit: 'Exponential functions and sequences', grades: ['9'],
  title: 'Arithmetic and geometric sequences',
  alt: 'arithmetic geometric sequence common difference common ratio nth term recursive explicit',
  stuck: ['What is the nth term formula for?', 'Which sequence is which?'],
  teks: ['9.12.C', '9.12.D'],
  apps: ['Math Academy', 'Edia'],
  plain: 'An arithmetic sequence adds the same number each time; a geometric sequence multiplies by the same number each time. The nth term formula lets you jump straight to any term without listing them all.',
  why: 'Sequences are the discrete version of linear and exponential functions, and the link between them is tested directly.',
  words: [
    { w: 'common difference', d: 'What you add each time in an arithmetic sequence.' },
    { w: 'common ratio', d: 'What you multiply by each time in a geometric sequence.' },
    { w: 'explicit formula', d: 'Gives any term directly from its position n.' }
  ],
  visual: [
    { type: 'table', title: 'The two kinds', head: ['', 'Arithmetic', 'Geometric'],
      rows: [['Pattern', 'add d each time', 'multiply by r each time'],
             ['Example', '4, 7, 10, 13', '4, 12, 36, 108'],
             ['Find the step', 'subtract consecutive terms', 'divide consecutive terms'],
             ['nth term', 'a(n) = a1 + (n - 1)d', 'a(n) = a1 · r^(n-1)'],
             ['Related function', 'linear', 'exponential']] }
  ],
  steps: [
    'Test for arithmetic: subtract each term from the next. A constant answer means arithmetic.',
    'Test for geometric: divide each term by the previous. A constant answer means geometric.',
    'Identify a1, the first term.',
    'For arithmetic use a(n) = a1 + (n - 1)d.',
    'For geometric use a(n) = a1 times r to the power (n - 1).',
    'Substitute the term number you want. Watch the n - 1, not n.'
  ],
  example: { prompt: 'Find the 20th term of 5, 9, 13, 17, …',
    work: ['Differences are all 4, so it is arithmetic with d = 4.', 'a1 = 5.', 'a(n) = 5 + (n - 1)(4).', 'a(20) = 5 + 19(4) = 5 + 76.'],
    answer: '81' },
  traps: [
    'Using n instead of n - 1, which shifts every term by one step.',
    'Checking only the first pair. Test at least two gaps.',
    'Mixing the formulas: arithmetic adds, geometric uses a power.',
    'Reading a decreasing sequence as geometric when it is arithmetic with a negative difference.'
  ],
  check: [
    { q: '3, 6, 12, 24. Which type and what is the step?', a: 'Geometric, common ratio 2.' },
    { q: 'What is a1 in the formula?', a: 'The first term.' },
    { q: 'Arithmetic sequences correspond to which kind of function?', a: 'Linear.' }
  ],
  links: [{ t: 'Math is Fun: Sequences', u: 'https://www.mathsisfun.com/algebra/sequences-series.html', d: 'Arithmetic and geometric sequences.' }],
  note: 'frayer'
},
{
  id: 'a1-literal-equations', subject: 'math', unit: 'Solving equations and inequalities', grades: ['9'],
  title: 'Rearranging formulas for a different variable',
  alt: 'literal equations solve for a variable rearrange formula subject of the formula',
  stuck: ['There are letters everywhere and no numbers', 'Which variable am I solving for?'],
  teks: ['9.12.E'],
  apps: ['Math Academy', 'Edia'],
  plain: 'Solving a formula for a different variable uses exactly the same moves as solving for x. The only difference is that your answer is an expression in letters rather than a number.',
  why: 'Science and later maths constantly hand you a formula written for the wrong variable. This is the skill that fixes it.',
  words: [
    { w: 'literal equation', d: 'An equation made mostly of letters, like a formula.' },
    { w: 'isolate', d: 'Get the target variable alone on one side.' }
  ],
  visual: [
    { type: 'table', title: 'Same moves, letters instead of numbers', head: ['Solve for x', 'Solve for b'],
      rows: [['3x + 5 = 20', 'A = bh + c'], ['subtract 5', 'subtract c'],
             ['3x = 15', 'A - c = bh'], ['divide by 3', 'divide by h'],
             ['x = 5', 'b = (A - c) / h']] },
    { type: 'flow', steps: [
      'Underline the variable you are solving for so you never lose track.',
      'Treat every other letter as if it were a number.',
      'Undo addition and subtraction first.',
      'Then undo multiplication and division.',
      'If the target appears twice, collect those terms on one side and factor it out.',
      'Leave the answer as a single expression, simplified.'
    ] }
  ],
  steps: [
    'Underline the target variable.',
    'Treat all other letters as constants.',
    'Move everything that is added or subtracted away from the target.',
    'Divide or multiply to peel off the coefficient.',
    'If the target appears more than once, gather those terms and factor it out.',
    'Check by substituting simple numbers into both the original and your rearranged version.'
  ],
  example: { prompt: 'Solve A = (1/2)bh for h.',
    work: ['Target is h. Treat A and b as numbers.', 'Multiply both sides by 2: 2A = bh.', 'Divide both sides by b: h = 2A / b.', 'Check with A = 6, b = 3: h = 12/3 = 4, and (1/2)(3)(4) = 6. Correct.'],
    answer: 'h = 2A / b' },
  traps: [
    'Solving for the wrong variable because you never marked the target.',
    'Dividing by a term that could be zero without noting it.',
    'Leaving the target on both sides. It must be isolated.',
    'Panicking at the absence of numbers. The moves are identical.'
  ],
  check: [
    { q: 'Solve d = rt for t.', a: 't = d / r.' },
    { q: 'What do you treat the other letters as?', a: 'Constants, exactly like numbers.' },
    { q: 'The target appears twice. What do you do?', a: 'Collect those terms on one side and factor the target out.' }
  ],
  links: [{ t: 'Math is Fun: Solving Equations', u: 'https://www.mathsisfun.com/algebra/equations-solving.html', d: 'The same moves, applied to formulas.' }],
  note: 'steps'
},

/* ================= ENGLISH I : READING ================= */
{
  id: 'e1-inference-evidence', subject: 'reading', unit: 'Understanding what you read', grades: ['9'],
  title: 'Inference and textual evidence at high school level',
  alt: 'inference textual evidence commentary close reading implicit explicit meaning',
  stuck: ['My answer is right but I lose marks', 'What counts as commentary?'],
  teks: ['9.4.F', '9.5.C', '9.5.G'],
  apps: ['AlphaRead'],
  plain: 'An inference is a conclusion built from evidence in the text plus what you already know. In English I the inference alone earns little: the marks are in the commentary that explains how the evidence supports it.',
  why: 'Students routinely quote well and explain nothing. Commentary is the part that is actually assessed.',
  words: [
    { w: 'explicit', d: 'Stated outright in the text.' },
    { w: 'implicit', d: 'Suggested but not stated. You infer it.' },
    { w: 'commentary', d: 'Your explanation of how the evidence proves the claim.' }
  ],
  visual: [
    { type: 'hamburger', layers: [
      { l: 'Claim', d: 'what you are arguing about the text' },
      { l: 'Evidence', d: 'a precise quotation, introduced' },
      { l: 'Commentary', d: 'how the words create that meaning' },
      { l: 'Commentary', d: 'why it matters to the whole text' },
      { l: 'Link', d: 'back to the claim' }
    ], caption: 'Two lines of commentary for every one line of quotation.' },
    { type: 'table', title: 'Quotation alone versus quotation with commentary', head: ['Weak', 'Strong'],
      rows: [['"She slammed the door." This shows she is angry.',
              '"She slammed the door." The verb slammed carries a violence the scene has otherwise suppressed, so her anger surfaces in action before she admits it in speech.']] }
  ],
  steps: [
    'Make a claim about meaning, not a summary of events.',
    'Find the shortest quotation that carries the point.',
    'Introduce it so it reads as part of your sentence.',
    'Name the specific word or device doing the work.',
    'Explain how that choice creates the meaning you claimed.',
    'Connect it back to the text as a whole.'
  ],
  example: { prompt: 'A character "checked the clock for the fourth time, then folded the letter away unopened." What can you infer?',
    work: ['Evidence: repeated clock-checking, and the letter folded away unopened.', 'Reading on: avoidance, not impatience.', 'The word unopened matters: the choice is deliberate.', 'Inference: he is delaying something he already dreads knowing.'],
    answer: 'He is avoiding the letter’s contents; the repetition and "unopened" show deliberate avoidance rather than simple impatience.' },
  traps: [
    'Summarising the plot instead of making a claim about meaning.',
    'Quoting a whole sentence when four words carry the point.',
    'Stopping after the quotation. The commentary is where the marks are.',
    'Restating the quotation in different words and calling it analysis.'
  ],
  check: [
    { q: 'What is the difference between explicit and implicit meaning?', a: 'Explicit is stated outright; implicit is suggested and must be inferred.' },
    { q: 'How much commentary should follow a quotation?', a: 'About twice as much as the quotation itself.' },
    { q: 'Is restating the quote in your own words commentary?', a: 'No. Commentary explains how the language creates the meaning.' }
  ],
  links: [{ t: 'ReadWriteThink interactives', u: 'https://www.readwritethink.org/classroom-resources/student-interactives', d: 'Organisers for evidence and commentary.' }],
  note: 'strategy'
},
{
  id: 'e1-theme-character', subject: 'reading', unit: 'Reading stories', grades: ['9'],
  title: 'How theme is built through character and plot',
  alt: 'theme characterization complex characters plot setting influences theme',
  stuck: ['My theme is one word', 'How does a character develop a theme?'],
  teks: ['9.6.A', '9.6.B', '9.6.D'],
  apps: ['AlphaRead'],
  plain: 'Theme is not a topic. It is a claim the whole text makes about life, and it is built gradually through what characters choose, what those choices cost, and what the setting makes possible.',
  why: 'English I moves past identifying theme to analysing how it is constructed. That shift is where marks are won or lost.',
  words: [
    { w: 'theme', d: 'A complete claim about life that the text develops.' },
    { w: 'characterization', d: 'How an author builds a character: action, speech, thought, others.' },
    { w: 'complex character', d: 'One with competing motives who changes believably.' }
  ],
  visual: [
    { type: 'table', title: 'Topic versus theme', head: ['Topic (one word)', 'Theme (a claim)'],
      rows: [['loyalty', 'Loyalty held past the point of honesty becomes a kind of harm.'],
             ['ambition', 'Ambition pursued alone costs the relationships that made it meaningful.'],
             ['grief', 'Grief delayed does not disappear; it reappears as anger.']],
      note: 'If your answer is one word, it is a topic. Turn it into a sentence about life.' },
    { type: 'flow', steps: [
      'Track what the main character wants and what stands in the way.',
      'Note the moments where they choose, especially under pressure.',
      'Ask what each choice costs them.',
      'Note how the setting enables or forbids those choices.',
      'Turn the pattern into a claim about life, with no character names in it.',
      'Test it: find two separate moments that support it.'
    ] }
  ],
  steps: [
    'Identify the central conflict and what the protagonist wants.',
    'Collect the decisive choices and what each one costs.',
    'Ask how the setting shapes what is possible for them.',
    'Look at how the character is different at the end.',
    'Write the theme as a full sentence about life, without naming characters.',
    'Support it with two moments from different points in the text.'
  ],
  example: { prompt: 'A character lies to protect a friend, loses the trust of her family, and ends the novel reconciled with neither.',
    work: ['Want: to protect the friend. Cost: her family’s trust.', 'The choice is made under pressure and repeated.', 'Setting: a small community where reputation travels fast.', 'She is isolated at the end, by her own choices.'],
    answer: 'Protecting someone through deception can cost the very relationships that made protection meaningful.' },
  traps: [
    'Giving a one-word topic instead of a claim.',
    'Naming characters in the theme, which ties it to one story.',
    'Summarising the plot and calling it theme analysis.',
    'Choosing a theme the text does not actually support.'
  ],
  check: [
    { q: 'Is "courage" a theme?', a: 'No, it is a topic. A theme is a full claim about life.' },
    { q: 'Should a theme statement name characters?', a: 'No. It should hold true beyond this one text.' },
    { q: 'What makes a character complex?', a: 'Competing motives and believable change.' }
  ],
  links: [{ t: 'ReadWriteThink interactives', u: 'https://www.readwritethink.org/classroom-resources/student-interactives', d: 'Plot and character organisers.' }],
  note: 'frayer'
},
{
  id: 'e1-authors-craft', subject: 'reading', unit: 'Reading nonfiction', grades: ['9'],
  title: 'Author’s craft: diction, syntax, tone and rhetorical devices',
  alt: 'diction syntax tone mood voice irony oxymoron understatement overstatement rhetoric',
  stuck: ['I can name the device but not its effect', 'What is the difference between tone and mood?'],
  teks: ['9.8.D', '9.8.E', '9.8.F', '9.8.G'],
  apps: ['AlphaRead', 'Membean'],
  plain: 'Diction is word choice and syntax is sentence construction. Together they create tone, which is the writer’s attitude, and mood, which is what the reader feels. Naming a device earns nothing; explaining its effect earns everything.',
  why: 'English I questions almost always ask for the effect, not the label. The label is the start of the sentence, not the end.',
  words: [
    { w: 'diction', d: 'The writer’s word choices.' },
    { w: 'syntax', d: 'How sentences are built: length, order, rhythm.' },
    { w: 'tone', d: 'The writer’s attitude to the subject.' },
    { w: 'mood', d: 'The feeling created in the reader.' }
  ],
  visual: [
    { type: 'table', title: 'Device, and what it is for', head: ['Device', 'What it does'],
      rows: [['Irony', 'says one thing and means another, exposing a gap'],
             ['Oxymoron', 'pairs opposites to hold two truths at once'],
             ['Understatement', 'downplays, so the reader supplies the weight'],
             ['Overstatement', 'exaggerates to expose absurdity'],
             ['Short syntax', 'speeds the pace, creates pressure'],
             ['Long syntax', 'slows the pace, builds accumulation']] },
    { type: 'flow', steps: [
      'Find the moment where the language shifts.',
      'Name what changed: a word choice, or a sentence pattern.',
      'Name the device only if it has one.',
      'Describe the tone it creates in that moment.',
      'Explain WHY the author would want that effect there.',
      'Write it as one sentence: the author uses X to achieve Y.'
    ] }
  ],
  steps: [
    'Read for the point where the language noticeably changes.',
    'Decide whether the change is in diction or syntax.',
    'Name the device if one applies.',
    'State the tone it produces.',
    'Explain the purpose: what the author gains at that moment.',
    'Never stop at the label. The effect is the answer.'
  ],
  example: { prompt: 'After pages of long descriptive sentences, a writer ends a chapter: "Then the lights went out."',
    work: ['The shift is syntactic: long sentences, then a short one.', 'The abruptness halts the accumulated rhythm.', 'Tone turns flat and final; mood turns uneasy.', 'Purpose: the structural break enacts the sudden loss.'],
    answer: 'The abrupt short sentence breaks an established rhythm, so the form of the sentence enacts the suddenness it describes.' },
  traps: [
    'Naming the device and stopping. The effect is what is assessed.',
    'Confusing tone and mood. Tone is the writer; mood is the reader.',
    'Calling any figurative language "imagery" without saying what it does.',
    'Claiming an effect the passage does not support.'
  ],
  check: [
    { q: 'What is the difference between tone and mood?', a: 'Tone is the writer’s attitude; mood is the feeling created in the reader.' },
    { q: 'What is syntax?', a: 'How sentences are constructed: length, order and rhythm.' },
    { q: 'Is naming a device a complete answer?', a: 'No. You must explain its effect and purpose.' }
  ],
  links: [{ t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Check precise meanings of craft terms.' }],
  note: 'frayer'
},
{
  id: 'e1-argument-analysis', subject: 'reading', unit: 'Reading nonfiction', grades: ['9'],
  title: 'Analysing and evaluating an argument',
  alt: 'argumentative text claim counterargument evidence faulty reasoning logical fallacy bias',
  stuck: ['How do I evaluate rather than summarise?', 'What counts as faulty reasoning?'],
  teks: ['9.7.E', '9.5.J', '9.11.G'],
  apps: ['AlphaRead'],
  plain: 'Analysing an argument means naming its parts: the claim, the evidence, the reasoning, and how it handles the other side. Evaluating means judging whether the reasoning actually holds.',
  why: 'English I asks you to defend or challenge an author’s claim with evidence, which you cannot do until you can see the argument’s structure.',
  words: [
    { w: 'claim', d: 'The arguable position the writer wants accepted.' },
    { w: 'counterargument', d: 'The strongest objection from the other side.' },
    { w: 'faulty reasoning', d: 'A gap between the evidence and the conclusion.' },
    { w: 'bias', d: 'A leaning that shapes what is included and left out.' }
  ],
  visual: [
    { type: 'table', title: 'Common faulty reasoning', head: ['Name', 'What it looks like'],
      rows: [['Hasty generalisation', 'a sweeping claim from one or two cases'],
             ['False cause', 'because B followed A, A caused B'],
             ['False dilemma', 'presenting two options when more exist'],
             ['Circular reasoning', 'the evidence restates the claim'],
             ['Appeal to emotion', 'feeling substituted for evidence'],
             ['Omission', 'leaving out evidence that would weaken the case']] },
    { type: 'hierarchy', levels: [
      { items: ['CLAIM'] },
      { items: ['Evidence', 'Reasoning', 'Counterargument handled'] }
    ], note: 'A strong argument has all three. Check each separately.' }
  ],
  steps: [
    'Find the claim and write it as one sentence.',
    'List the evidence offered for it.',
    'Check each piece: is it verifiable, relevant, and sufficient?',
    'Find the reasoning that connects evidence to claim, and test it.',
    'Look for the counterargument. Is it addressed fairly or strawmanned?',
    'Ask what is missing. Omission is the hardest weakness to spot and the most common.'
  ],
  example: { prompt: 'An article argues phones should be banned in schools, citing one district whose test scores rose after a ban.',
    work: ['Claim: phones should be banned in schools.', 'Evidence: one district, scores rose.', 'Reasoning: the ban caused the rise.', 'Problems: one district is a hasty generalisation, and the causal link is unproven.', 'The article never mentions other changes in that district.'],
    answer: 'The claim rests on a single case and assumes causation from sequence; the omission of other changes in that district is the key weakness.' },
  traps: [
    'Summarising the article instead of judging the reasoning.',
    'Saying whether you agree. Evaluation is about how the argument works.',
    'Treating all evidence as equally strong.',
    'Missing omission, which leaves no trace on the page.'
  ],
  check: [
    { q: 'Evidence restates the claim. What is that called?', a: 'Circular reasoning.' },
    { q: 'What is the difference between analysing and evaluating?', a: 'Analysing names the parts; evaluating judges whether the reasoning holds.' },
    { q: 'Why is omission hard to catch?', a: 'What is left out leaves no trace, so you must ask what a fair treatment would include.' }
  ],
  links: [{ t: 'Ducksters', u: 'https://www.ducksters.com/', d: 'Background when an argument assumes knowledge you lack.' }],
  note: 'strategy'
},
{
  id: 'e1-synthesis', subject: 'reading', unit: 'Understanding what you read', grades: ['9'],
  title: 'Synthesising two or more texts',
  alt: 'synthesis compare texts across genres new understanding paired passages',
  stuck: ['I wrote about both texts but did not connect them', 'What does synthesis actually mean?'],
  teks: ['9.4.H', '9.5.B'],
  apps: ['AlphaRead'],
  plain: 'Comparing lists similarities and differences. Synthesising goes further: it uses two texts together to reach an understanding neither one gives you on its own.',
  why: 'The TEKS asks specifically for new understanding from two texts. Summarising each in turn does not meet that bar.',
  words: [
    { w: 'synthesise', d: 'Combine sources to produce an insight neither contains alone.' },
    { w: 'perspective', d: 'The angle a text takes on its subject.' }
  ],
  visual: [
    { type: 'venn', aLabel: 'Text 1', bLabel: 'Text 2', a: 'its own claim and evidence', b: 'its own claim and evidence', both: 'the new understanding',
      caption: 'The middle is not "things they share". It is what you now know because you read both.' },
    { type: 'flow', steps: [
      'Read the first text and state its claim in one sentence.',
      'Read the second with the first held in mind.',
      'Mark where they agree, conflict, or address different parts of the question.',
      'Ask what the second makes you see in the first that you missed.',
      'Write the new understanding as a single sentence.',
      'Support it with evidence from BOTH texts.'
    ] }
  ],
  steps: [
    'State each text’s central claim in one sentence.',
    'Identify the question both are addressing.',
    'Mark agreement, conflict, and gaps in coverage.',
    'Ask what reading both lets you conclude that neither states.',
    'Write that as your synthesis statement.',
    'Cite evidence from both texts in support.'
  ],
  example: { prompt: 'One article argues social media harms teenage wellbeing; another reports that teenagers use it mainly to maintain existing friendships.',
    work: ['Text 1 claim: harm to wellbeing.', 'Text 2 claim: it sustains existing friendships.', 'They do not contradict; they measure different things.', 'Together: the harm may lie in how it is used, not in using it.'],
    answer: 'Read together, the two suggest the harm is not in the platform itself but in patterns of use, since the same tool also sustains the friendships that protect wellbeing.' },
  traps: [
    'Writing two summaries one after the other. That is not synthesis.',
    'Forcing a contradiction when the texts simply address different aspects.',
    'Drawing evidence from only one text.',
    'Stopping at "both texts discuss X", which is a topic, not an understanding.'
  ],
  check: [
    { q: 'How is synthesis different from comparison?', a: 'Comparison lists similarities and differences; synthesis produces new understanding from both.' },
    { q: 'How many texts must your evidence come from?', a: 'Both.' },
    { q: 'The texts do not contradict. Can you still synthesise?', a: 'Yes. They may address different parts of the same question.' }
  ],
  links: [{ t: 'ReadWriteThink interactives', u: 'https://www.readwritethink.org/classroom-resources/student-interactives', d: 'Comparison and synthesis organisers.' }],
  note: 'strategy'
},
{
  id: 'e1-poetry-drama', subject: 'reading', unit: 'Reading stories', grades: ['9'],
  title: 'Reading poetry and drama at high school level',
  alt: 'poetry prosody line length stanza drama aside soliloquy dramatic irony satire',
  stuck: ['I do not know what to say about a poem', 'What is a soliloquy for?'],
  teks: ['9.7.B', '9.7.C'],
  apps: ['AlphaRead'],
  plain: 'In poetry, the shape carries meaning: where a line breaks, how long it runs, where a word sits. In drama, conventions like asides and soliloquies give you access to what characters will not say aloud to each other.',
  why: 'These genres are assessed on structure, not just content, and structure is what students most often ignore.',
  words: [
    { w: 'prosody', d: 'The rhythm and sound pattern of a poem.' },
    { w: 'enjambment', d: 'A sentence running past the line break without pause.' },
    { w: 'soliloquy', d: 'A character alone, speaking their thoughts to the audience.' },
    { w: 'dramatic irony', d: 'The audience knows something a character does not.' }
  ],
  visual: [
    { type: 'table', title: 'What to analyse', head: ['Poetry', 'Drama'],
      rows: [['where lines break and why', 'asides: private comment to the audience'],
             ['line length and its pace', 'soliloquy: inner thought made audible'],
             ['stanza divisions as movements', 'dramatic irony: audience knows more'],
             ['word position for emphasis', 'satire: criticism through ridicule'],
             ['sound: rhyme, repetition', 'stage directions as meaning']] }
  ],
  steps: [
    'Read the poem once through without stopping, then once aloud.',
    'Mark where lines break and ask what the break does to the meaning.',
    'Note stanza divisions as movements in the argument or feeling.',
    'Find the turn: the point where the poem shifts.',
    'For drama, note who the speech is aimed at: another character, or the audience.',
    'Ask what the convention gives you that ordinary dialogue could not.'
  ],
  example: { prompt: 'A poem ends a stanza mid-sentence, with the final word "falling" alone on its line.',
    work: ['The break interrupts the sentence: enjambment.', 'The isolated word is given extra weight.', '"Falling" alone on the line mimics the fall.', 'Form enacts content rather than describing it.'],
    answer: 'The enjambment isolates "falling", so the line break performs the fall it describes.' },
  traps: [
    'Reading a poem only once and only silently.',
    'Treating line breaks as decoration. They are choices.',
    'Ignoring stage directions, which carry information dialogue does not.',
    'Paraphrasing a poem and calling that analysis.'
  ],
  check: [
    { q: 'What is enjambment?', a: 'A sentence continuing past a line break without pause.' },
    { q: 'Who is a soliloquy addressed to?', a: 'The audience, revealing private thought.' },
    { q: 'What is dramatic irony?', a: 'The audience knows something a character does not.' }
  ],
  links: [{ t: 'ReadWriteThink interactives', u: 'https://www.readwritethink.org/classroom-resources/student-interactives', d: 'Poetry and drama tools.' }],
  note: 'strategy'
},

/* ================= ENGLISH I : VOCABULARY ================= */
{
  id: 'e1-denotation-connotation', subject: 'vocabulary', unit: 'Word meaning', grades: ['9'],
  title: 'Denotation and connotation',
  alt: 'denotation connotation loaded language word choice bias nuance',
  stuck: ['Two words mean the same but feel different', 'How is this tested?'],
  teks: ['9.2.B'],
  apps: ['Membean', 'VocabLoco'],
  plain: 'Denotation is the dictionary meaning. Connotation is the attitude the word carries. Writers choose between near-synonyms precisely because the connotations differ, and that choice is the analysis.',
  why: 'This is a named English I expectation, and it is the mechanism behind most tone and bias questions.',
  words: [
    { w: 'denotation', d: 'The literal dictionary meaning.' },
    { w: 'connotation', d: 'The feeling or judgement a word carries.' },
    { w: 'loaded language', d: 'Words chosen for emotional effect rather than precision.' }
  ],
  visual: [
    { type: 'table', title: 'Same denotation, different connotation', head: ['Positive', 'Neutral', 'Negative'],
      rows: [['thrifty', 'careful with money', 'miserly'],
             ['resolute', 'determined', 'obstinate'],
             ['slender', 'thin', 'gaunt'],
             ['confident', 'self-assured', 'arrogant'],
             ['youthful', 'young', 'immature'],
             ['frugal', 'economical', 'cheap']],
      note: 'Read across a row: the meaning barely moves, but the judgement reverses.' }
  ],
  steps: [
    'Find a word that could have been said more neutrally.',
    'Name the neutral alternative.',
    'Decide whether the author’s choice leans positive or negative.',
    'Ask what that leaning does to how you see the subject.',
    'Write it as: the author chose X rather than Y in order to Z.',
    'In persuasive text, treat a cluster of loaded words as evidence of position.'
  ],
  example: { prompt: 'A report describes protestors first as "a crowd" and later as "a mob".',
    work: ['Both denote a group of people.', '"Crowd" is neutral; "mob" connotes disorder and threat.', 'The shift happens without new evidence.', 'The change manages the reader’s judgement.'],
    answer: 'The shift from "crowd" to "mob" changes the reader’s judgement without presenting new evidence, revealing the writer’s position.' },
  traps: [
    'Treating near-synonyms as interchangeable.',
    'Confusing connotation with denotation. The dictionary gives denotation.',
    'Spotting loaded language but not saying what it achieves.',
    'Using a negatively loaded word in your own writing when you intended neutrality.'
  ],
  check: [
    { q: 'Which is more negative, "resolute" or "obstinate"?', a: 'Obstinate. They denote similar persistence.' },
    { q: 'What is denotation?', a: 'The literal dictionary meaning.' },
    { q: 'Why do persuasive writers use loaded language?', a: 'To steer how the reader feels, not just what they know.' }
  ],
  links: [{ t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'How words are actually used, not just defined.' }],
  note: 'frayer'
},
{
  id: 'e1-academic-vocab', subject: 'vocabulary', unit: 'Word parts', grades: ['9'],
  title: 'Academic vocabulary, roots and foreign phrases',
  alt: 'academic vocabulary greek latin roots foreign phrases bona fide status quo',
  stuck: ['I understand the passage but not the question', 'What does bona fide mean?'],
  teks: ['9.2.A', '9.2.C', '9.5.F'],
  apps: ['Membean', 'VocabLoco'],
  plain: 'High school texts assume a shared academic vocabulary and a handful of borrowed Latin phrases. Most of it is decodable from roots you already know, and the rest is a short list worth learning deliberately.',
  why: 'English I names foreign phrases explicitly, and command words in questions cost marks when misread.',
  words: [
    { w: 'root', d: 'The core meaning part of a word, usually Greek or Latin.' },
    { w: 'academic vocabulary', d: 'Words used across subjects in questions and analysis.' }
  ],
  visual: [
    { type: 'table', title: 'Borrowed phrases English I names', head: ['Phrase', 'Means'],
      rows: [['bona fide', 'genuine, in good faith'], ['status quo', 'the existing state of things'],
             ['per se', 'in itself'], ['ad hoc', 'made for this one purpose'],
             ['vice versa', 'the other way round'], ['et cetera', 'and the rest']] },
    { type: 'table', title: 'Command words in questions', head: ['Word', 'What it requires'],
      rows: [['analyse', 'break into parts and show how they work together'],
             ['evaluate', 'judge how well it works, and justify'],
             ['synthesise', 'combine sources into new understanding'],
             ['critique', 'assess strengths and weaknesses'],
             ['infer', 'conclude from evidence, and cite it']] }
  ],
  steps: [
    'Underline the command word in every question before answering.',
    'Name what that word requires: naming, judging, or combining.',
    'For an unknown word, look for a root you recognise.',
    'Use context to test the meaning the root suggests.',
    'For a borrowed phrase, learn it whole. The parts rarely help.',
    'Use a dictionary to confirm, then write the meaning in your own words.'
  ],
  example: { prompt: 'A question asks you to "evaluate the author’s use of evidence". What must the answer contain?',
    work: ['Command word: evaluate.', 'Evaluate requires a judgement, not a description.', 'So: is the evidence strong or weak?', 'And: the reasons for that judgement.'],
    answer: 'A judgement on the strength of the evidence, plus the reasons supporting that judgement.' },
  traps: [
    'Describing when the question said evaluate.',
    'Decoding a borrowed phrase from its parts. Learn them whole.',
    'Answering only the first half of a two-part command.',
    'Using an impressive word you cannot define.'
  ],
  check: [
    { q: 'What does "status quo" mean?', a: 'The existing state of things.' },
    { q: 'What does "evaluate" require that "describe" does not?', a: 'A judgement, with reasons.' },
    { q: 'What should you do before answering any question?', a: 'Underline the command word.' }
  ],
  links: [{ t: 'Vocabulary.com Dictionary', u: 'https://www.vocabulary.com/dictionary/', d: 'Look up any academic term.' }],
  note: 'word'
},

/* ================= ENGLISH I : WRITING ================= */
{
  id: 'e1-thesis', subject: 'writing', unit: 'Essays', grades: ['9'],
  title: 'Writing a thesis for literary analysis',
  alt: 'thesis statement literary analysis arguable claim essay structure',
  stuck: ['My thesis is a summary', 'It is true but there is nothing to argue'],
  teks: ['9.9.B', '9.10.B', '9.10.C'],
  apps: [],
  plain: 'A literary thesis makes an arguable claim about how a text creates meaning. If nobody could disagree with it, it is an observation, not a thesis.',
  why: 'A weak thesis guarantees a weak essay, because every paragraph inherits its vagueness.',
  words: [
    { w: 'thesis', d: 'The central arguable claim of the essay.' },
    { w: 'arguable', d: 'A reasonable reader could disagree.' }
  ],
  visual: [
    { type: 'table', title: 'From observation to thesis', head: ['Version', 'Problem'],
      rows: [['The novel is about loyalty.', 'a topic, not a claim'],
             ['The author uses symbolism.', 'true of nearly every novel'],
             ['The author uses the river to show how loyalty changes.', 'closer, but vague on how'],
             ['By returning to the river at each betrayal, the author makes loyalty look less like a virtue than a habit the characters cannot break.', 'arguable, specific, and it names the method']] },
    { type: 'flow', steps: [
      'State what the text does, not what it is about.',
      'Name the specific method: a device, a structure, a pattern.',
      'Say what that method produces in the reader.',
      'Test it: could a reasonable person argue the opposite?',
      'Test it again: can you support it from at least three places in the text?',
      'Put it at the end of your introduction.'
    ] }
  ],
  steps: [
    'Identify a pattern you noticed across the text.',
    'Name the method the author uses to create it.',
    'Claim what that method achieves.',
    'Check it is arguable, not merely observable.',
    'Check you can support it from several points in the text.',
    'Revise it after drafting, so it matches the essay you actually wrote.'
  ],
  example: { prompt: 'Turn "the story is about isolation" into a thesis.',
    work: ['That is a topic.', 'Method: the narrator never names another character directly.', 'Effect: the reader is held at the same distance the narrator keeps.', 'Arguable: someone could read the anonymity differently.'],
    answer: 'By refusing to name anyone but the narrator, the author forces the reader into the same isolation the narrator claims to resent.' },
  traps: [
    'Stating a plot summary as a thesis.',
    'Claiming the author uses a device without saying to what end.',
    'Writing a thesis so broad the essay cannot cover it.',
    'Never revising it after the essay has evolved.'
  ],
  check: [
    { q: 'Is "the author uses imagery" a thesis?', a: 'No. It is true of almost any text and makes no claim.' },
    { q: 'What makes a thesis arguable?', a: 'A reasonable reader could take the opposite position.' },
    { q: 'Where does the thesis go?', a: 'At the end of the introduction.' }
  ],
  links: [{ t: 'ReadWriteThink printables', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Essay planning organisers.' }],
  note: 'steps'
},
{
  id: 'e1-revise-edit', subject: 'writing', unit: 'The writing process', grades: ['9'],
  title: 'Revising for clarity, style and sentence effectiveness',
  alt: 'revise edit clarity development organization diction sentence variety syntax',
  stuck: ['I proofread but the grade did not move', 'What counts as style?'],
  teks: ['9.9.C', '9.9.D'],
  apps: ['Freckle'],
  plain: 'Revising changes what the writing says and how it moves. Editing fixes what is incorrect. Fixing commas in a paragraph with a weak argument improves nothing.',
  why: 'Most students edit and call it revising, which is why their second draft scores the same as the first.',
  words: [
    { w: 'revise', d: 'Change ideas, structure, emphasis and sentence effectiveness.' },
    { w: 'edit', d: 'Correct grammar, punctuation and usage.' },
    { w: 'diction', d: 'Word choice: precision and register.' }
  ],
  visual: [
    { type: 'table', title: 'Two different jobs', head: ['REVISE', 'EDIT'],
      rows: [['Is the claim clear and arguable?', 'subject-verb agreement'],
             ['Is each paragraph developed, not asserted?', 'comma splices and run-ons'],
             ['Does the order build an argument?', 'pronoun-antecedent agreement'],
             ['Are the sentences varied in length?', 'spelling and capitalisation'],
             ['Is the diction precise and consistent in register?', 'punctuation of quotations']],
      note: 'Revise first. There is no point perfecting a sentence you are about to cut.' }
  ],
  steps: [
    'Read for argument first, ignoring every error you see.',
    'Ask whether each paragraph develops its claim or merely asserts it.',
    'Check the order: does the argument build, or just accumulate?',
    'Read the sentence openings aloud. If several start alike, vary them.',
    'Replace vague diction with precise words, and check the register is consistent.',
    'Only then edit: agreement, splices, punctuation, spelling.'
  ],
  example: { prompt: 'Feedback says "paragraph three asserts rather than develops". What do you change?',
    work: ['This is a revision note, not an editing note.', 'Find the claim in paragraph three.', 'Add the evidence and the commentary that connects it.', 'Proofreading would not have touched this.'],
    answer: 'Develop paragraph three with evidence and commentary; punctuation is irrelevant to the note.' },
  traps: [
    'Calling proofreading revision and wondering why nothing improved.',
    'Refusing to cut a sentence you worked hard on that does not serve the argument.',
    'Doing both passes at once, so neither gets done properly.',
    'Varying sentences for variety alone, which can bury the argument.'
  ],
  check: [
    { q: 'Which comes first, revising or editing?', a: 'Revising. Fix the argument before the commas.' },
    { q: 'Feedback says your conclusion does not follow. Revision or editing?', a: 'Revision.' },
    { q: 'What is diction?', a: 'Word choice: precision and register.' }
  ],
  links: [{ t: 'ReadWriteThink printables', u: 'https://www.readwritethink.org/classroom-resources/printouts', d: 'Revision checklists.' }],
  note: 'strategy'
},
{
  id: 'e1-research-sources', subject: 'writing', unit: 'Research writing', grades: ['9'],
  title: 'Research: credible sources, synthesis and citation',
  alt: 'research question credibility bias faulty reasoning citation paraphrase plagiarism',
  stuck: ['How do I know a source is credible?', 'When exactly do I have to cite?'],
  teks: ['9.11.E', '9.11.F', '9.11.G', '9.11.H'],
  apps: ['AlphaRead'],
  plain: 'Research is a loop: ask a question, find sources, test them, synthesise, and cite. The testing step is the one most often skipped, and the one English I names explicitly.',
  why: 'English I asks you to examine sources for credibility, bias and faulty reasoning, and to cite paraphrased as well as quoted material.',
  words: [
    { w: 'credibility', d: 'Whether a source can be trusted: who wrote it, on what basis.' },
    { w: 'bias', d: 'A leaning that shapes what is included and omitted.' },
    { w: 'paraphrase', d: 'Restating an idea fully in your own words, still cited.' }
  ],
  visual: [
    { type: 'table', title: 'Testing a source', head: ['Ask', 'Good sign', 'Warning sign'],
      rows: [['Who wrote it?', 'named author with relevant expertise', 'no author'],
             ['On what basis?', 'cites its own sources', 'asserts without support'],
             ['Why does it exist?', 'to inform', 'to sell or recruit'],
             ['What is omitted?', 'acknowledges counter-evidence', 'one side only'],
             ['Who else says it?', 'corroborated elsewhere', 'only this source']] },
    { type: 'flow', steps: [
      'Write the research question before searching.',
      'Locate several sources, not one.',
      'Test each for credibility, bias and faulty reasoning.',
      'Take notes in your own words, marking any exact wording immediately.',
      'Synthesise across sources rather than reporting them in turn.',
      'Cite paraphrase as well as quotation, and keep the details as you go.'
    ] }
  ],
  steps: [
    'Write a focused research question, and revise it if the evidence redirects you.',
    'Find several sources covering different perspectives.',
    'Test each one for authorship, basis, purpose, omission and corroboration.',
    'Take notes in your own words; put quotation marks around exact wording at the moment you copy it.',
    'Synthesise: build an understanding across sources.',
    'Cite everything you took, paraphrase included, and record the details as you go.'
  ],
  example: { prompt: 'You find a well-designed site with no author and no sources, arguing one side forcefully.',
    work: ['No author: cannot assess expertise.', 'No sources: assertions are unsupported.', 'One side only: likely omission.', 'Design quality says nothing about reliability.'],
    answer: 'Treat it as unreliable: anonymous, unsupported and one-sided, however professional it looks.' },
  traps: [
    'Judging credibility by how professional a site looks.',
    'Citing quotations but not paraphrases. Both need citation.',
    'Copying into notes without marking what was copied, which becomes accidental plagiarism later.',
    'Reporting sources one by one instead of synthesising.'
  ],
  check: [
    { q: 'Does a paraphrase need a citation?', a: 'Yes. The idea still came from someone else.' },
    { q: 'Name two things to check about a source.', a: 'Who wrote it, and whether it cites its own evidence.' },
    { q: 'When should you record citation details?', a: 'As you research, not at the end.' }
  ],
  links: [{ t: 'Simple Wikipedia', u: 'https://simple.wikipedia.org/wiki/Main_Page', d: 'A starting point: then follow its sources.' }],
  note: 'strategy'
}

]);

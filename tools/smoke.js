/* Headless smoke test: loads the kiosk, walks the main routes, exercises the
   paper prompt, and fails on any console error or missing content.
   Run: node tools/smoke.js            (add --shots to save screenshots) */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const BASE = 'file://' + ROOT.replace(/\\/g, '/') + '/index.html';
const SHOTS = process.argv.includes('--shots');
const shotDir = path.join(ROOT, 'tools', 'shots');
if (SHOTS && !fs.existsSync(shotDir)) fs.mkdirSync(shotDir, { recursive: true });

const ROUTES = [
  ['home', ''],
  ['how', '#/how'],
  ['grade-3', '#/g/3'],
  ['grade-3-math', '#/g/3/math'],
  ['grade-7-reading', '#/g/7/reading'],
  ['grade-9', '#/g/9'],
  ['grade-9-math', '#/g/9/math'],
  ['grade-K-math', '#/g/K/math'],
  ['concept-fractions', '#/c/m-equivalent-fractions'],
  ['concept-main-idea', '#/c/r-main-idea'],
  ['concept-commas', '#/c/l-commas'],
  ['concept-slope', '#/c/m-slope'],
  ['concept-quadratic', '#/c/a1-graph-quadratic'],
  ['concept-connotation', '#/c/e1-denotation-connotation'],
  ['concept-thesis', '#/c/w-thesis'],
  ['concept-roots', '#/c/v-greek-latin-roots'],
  ['app-alphamath', '#/app/alphamath'],
  ['search', '#/search/equivalent%20fractions'],
  ['library', '#/library'],
  ['safesearch', '#/safesearch'],
  ['notfound', '#/nope/nope']
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const problems = [];

  page.on('console', m => {
    if (m.type() === 'error') problems.push('console error: ' + m.text());
  });
  page.on('pageerror', e => problems.push('page error: ' + e.message));

  await page.goto(BASE);
  await page.waitForFunction(() => window.Kiosk && window.Kiosk.concepts.length > 0);

  const counts = await page.evaluate(() => ({
    concepts: window.Kiosk.concepts.length,
    teks: Object.keys(window.TEKS).length,
    apps: window.APPS.length
  }));
  console.log(`loaded: ${counts.concepts} concepts, ${counts.teks} TEKS codes, ${counts.apps} apps`);

  for (const [name, hash] of ROUTES) {
    await page.goto(BASE + hash);
    await page.waitForTimeout(140);
    const info = await page.evaluate(() => {
      const main = document.getElementById('main');
      return {
        text: (main.innerText || '').trim().length,
        h1: (main.querySelector('h1') || {}).textContent || '',
        svgs: main.querySelectorAll('svg').length,
        links: main.querySelectorAll('a[href^="http"]').length,
        overflow: document.documentElement.scrollWidth > window.innerWidth + 2
      };
    });
    // the not-found page is deliberately short
    const minText = name === 'notfound' ? 60 : 300;
    if (info.text < minText) problems.push(`${name}: page has almost no content (${info.text} chars)`);
    if (!info.h1) problems.push(`${name}: no <h1>`);
    if (info.overflow) problems.push(`${name}: page scrolls horizontally`);
    if (name.startsWith('concept-') && info.svgs < 2) {
      problems.push(`${name}: expected at least 2 diagrams, found ${info.svgs}`);
    }
    console.log(`  ${name.padEnd(20)} h1="${info.h1.slice(0, 42)}" svg=${info.svgs} links=${info.links}`);
    if (SHOTS) {
      await page.screenshot({ path: path.join(shotDir, name + '.png'), fullPage: name.startsWith('concept-') ? false : true });
    }
  }

  // a guide must render as the house study-note sheet, in order
  await page.goto(BASE + '#/c/m-equivalent-fractions');
  await page.waitForTimeout(220);
  const note = await page.evaluate(() => {
    const n = document.querySelector('article.note');
    if (!n) return { missing: true };
    const order = Array.from(n.children).map(el => el.className.split(' ')[0]);
    const q = sel => !!n.querySelector(sel);
    return {
      order,
      head: q('.note-head h1') && q('.focus-chip') && q('.note-sub'),
      gotit: q('.gotit .gotit-quote .q1'),
      practice: q('.practice-text'),
      diagram: q('.note-body svg'),
      words: n.querySelectorAll('.wcard').length,
      trap: q('.trap-box h3'), move: q('.move-box h3'),
      tryit: n.querySelectorAll('.tryit li').length,
      blanks: n.querySelectorAll('.tryit .blank').length,
      sayback: n.querySelectorAll('.sayback li').length,
      answers: (n.querySelector('.answers') || {}).textContent || '',
      brand: ((n.querySelector('.brand-foot') || {}).textContent || '').includes('Future2')
    };
  });
  if (note.missing) problems.push('guide did not render as a study note');
  else {
    for (const [k, label] of [['head', 'masthead'], ['gotit', 'you-have-got-it quote'],
                              ['diagram', 'diagram inside the sheet'], ['trap', 'the trap'],
                              ['move', 'the move'], ['brand', 'Future2 footer']]) {
      if (!note[k]) problems.push(`study note is missing the ${label}`);
    }
    if (note.tryit < 2) problems.push(`Now you try has ${note.tryit} items`);
    if (note.blanks !== note.tryit) problems.push('every Now you try item needs a write-on blank');
    if (note.sayback < 2) problems.push(`Say it back has ${note.sayback} prompts`);
    if (!/Answers:/.test(note.answers)) problems.push('answer key missing');
    const want = ['note-head', 'gotit', 'note-body', 'tm', 'tryit', 'sayback', 'note-foot'];
    if (note.order.join(',') !== want.join(',')) {
      problems.push(`study note sections out of order: ${note.order.join(' > ')}`);
    }
    console.log(`  study note          ${note.order.length} sections in order, ${note.words} word cards, ${note.tryit} practice items`);
  }

  // nothing on a guide may be typeable or stored
  await page.goto(BASE + '#/c/m-long-division');
  await page.waitForTimeout(160);
  const store = await page.evaluate(() => ({
    inputs: document.querySelectorAll('#main textarea, #main input').length,
    keys: Object.keys(localStorage).filter(k => /note/i.test(k))
  }));
  if (store.inputs > 0) problems.push(`guide has ${store.inputs} text input(s); nothing should be typeable`);
  if (store.keys.length) problems.push(`localStorage holds note keys: ${store.keys.join(', ')}`);
  console.log('  no inputs, no storage OK');

  // the notebook route must be gone
  await page.goto(BASE + '#/notebook');
  await page.waitForTimeout(150);
  const gone = await page.evaluate(() => (document.querySelector('#main h1') || {}).textContent || '');
  if (!/not here/i.test(gone)) problems.push(`#/notebook still renders "${gone}"`);
  console.log('  notebook route       removed');

  // an anchor chart must be scannable: check how much text is visible before
  // the reader opens anything, and that the picture comes before the prose.
  for (const cid of ['m-long-division', 'r-inference', 'l-commas', 'm-slope',
                     'a1-solve-quadratic', 'e1-inference-evidence']) {
    await page.goto(BASE + '#/c/' + cid);
    await page.waitForTimeout(180);
    const m = await page.evaluate(() => {
      const main = document.getElementById('main');
      const clone = main.cloneNode(true);
      // the printed sheet is what matters: drop screen-only extras and diagrams
      clone.querySelectorAll('.noprint, svg').forEach(el => el.remove());
      clone.style.position = 'absolute'; clone.style.left = '-9999px';
      document.body.appendChild(clone);
      const words = (clone.innerText || '').split(/\s+/).filter(Boolean).length;
      clone.remove();
      return {
        visible: words,
        firstSection: (main.querySelector('article.note') || {}).tagName ? 'note' : '',
        pictureBeforeMoves: !!main.querySelector('.note-body svg')
      };
    });
    // The Alpha study notes we are matching run about 240 words on the sheet.
    if (m.visible > 280) problems.push(`${cid}: printed sheet is ${m.visible} words (house format runs ~240)`);
    if (m.firstSection !== 'note') problems.push(`${cid}: did not render as a study note`);
    if (!m.pictureBeforeMoves) problems.push(`${cid}: no diagram inside the sheet`);
    console.log(`  ${cid.padEnd(20)} ${String(m.visible).padStart(3)} words on the printed sheet`);
  }

  // search from the header
  await page.goto(BASE);
  await page.waitForTimeout(120);
  await page.fill('#topSearch', 'run on sentence');
  await page.press('#topSearch', 'Enter');
  await page.waitForTimeout(180);
  const results = await page.evaluate(() => document.querySelectorAll('#main .citem').length);
  if (results < 1) problems.push('header search returned no results for "run on sentence"');
  console.log(`  header search        ${results} results`);

  // unsafe query guard
  await page.goto(BASE);
  await page.waitForTimeout(120);
  await page.fill('#topSearch', 'naked pictures');
  await page.press('#topSearch', 'Enter');
  await page.waitForTimeout(180);
  const guard = await page.evaluate(() => document.getElementById('main').innerText);
  if (!guard.includes('Let us pause')) problems.push('unsafe search guard did not trigger');
  console.log('  safe-search guard    OK');

  // themes and text size
  for (const theme of ['dark', 'hc', 'light']) {
    await page.goto(BASE + '#/c/m-equivalent-fractions');
    await page.reload();
    await page.waitForTimeout(150);
    if (await page.getAttribute('#a11yPanel', 'hidden') !== null) await page.click('#a11yBtn');
    await page.click(`[data-theme="${theme}"]`);
    await page.waitForTimeout(120);
    const applied = await page.getAttribute('html', 'data-theme');
    if (applied !== theme) problems.push(`theme ${theme} did not apply`);
    if (SHOTS) await page.screenshot({ path: path.join(shotDir, 'theme-' + theme + '.png') });
  }
  console.log('  themes               light / dark / high-contrast OK');

  // narrow viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(BASE + '#/c/m-area-model-mult');
  await page.waitForTimeout(180);
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
  if (mobileOverflow) problems.push('concept page scrolls horizontally at 390px');
  if (SHOTS) await page.screenshot({ path: path.join(shotDir, 'mobile-concept.png'), fullPage: true });
  console.log('  390px viewport       no horizontal scroll');

  await browser.close();

  console.log('');
  if (problems.length) {
    console.log('PROBLEMS (' + problems.length + ')');
    problems.forEach(p => console.log('  ' + p));
    process.exit(1);
  }
  console.log('Smoke test passed.');
})();

/* Serves the site under /self-help-kiosk/ the way a GitHub Pages project site
   does, then walks it, to prove no asset path or route assumes the domain root. */
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PREFIX = '/self-help-kiosk';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };

const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (!url.startsWith(PREFIX)) { res.writeHead(404); return res.end('outside prefix'); }
  let rel = url.slice(PREFIX.length) || '/';
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); return res.end('not found: ' + rel);
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

server.listen(0, async () => {
  const base = `http://127.0.0.1:${server.address().port}${PREFIX}/`;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const problems = [];
  page.on('pageerror', e => problems.push('page error: ' + e.message));
  page.on('requestfailed', r => problems.push('failed request: ' + r.url()));
  page.on('response', r => { if (r.status() >= 400 && r.url().startsWith('http://127.0.0.1')) problems.push(`${r.status()} ${r.url()}`); });

  for (const hash of ['', '#/g/5/math', '#/c/m-long-division', '#/app/alphamath', '#/safesearch', '#/library']) {
    await page.goto(base + hash);
    await page.waitForTimeout(200);
    const ok = await page.evaluate(() => ({
      concepts: (window.Kiosk && window.Kiosk.concepts.length) || 0,
      body: document.getElementById('main').innerText.trim().length,
      css: getComputedStyle(document.querySelector('.topbar')).position
    }));
    if (ok.concepts !== 145) problems.push(`${hash || '/'}: data did not load (${ok.concepts} concepts)`);
    if (ok.body < 200) problems.push(`${hash || '/'}: page nearly empty`);
    if (ok.css !== 'sticky') problems.push(`${hash || '/'}: stylesheet did not load`);
    console.log(`  ${(hash || '/').padEnd(24)} concepts=${ok.concepts} css=${ok.css} chars=${ok.body}`);
  }
  await browser.close();
  server.close();
  console.log('');
  if (problems.length) { problems.forEach(p => console.log('  ' + p)); process.exit(1); }
  console.log('Subpath hosting OK: works at ' + PREFIX + '/');
});

/* Renders every diagram in every guide and reports text that collides with
   other text, crosses a box border it does not belong to, or spills outside
   its own SVG. Opens the real page, so the real fonts and CSS are in play.

   Two things it deliberately does NOT report:
     - consecutive wrapped lines, which always overlap by 2-3px because a text
       bbox includes ascender and descender space. Real typography, not a bug.
       Hence MIN_OY.
     - a label sitting on a filled circle or ellipse that is drawn over a box
       on purpose: the numbered badge on a flow step, the word in the middle
       of a Frayer model. The shape is its background, so crossing the box
       border underneath it is the design.

   Measurement is via getBoundingClientRect, not getBBox, because getBBox
   ignores transforms and would read a rotated axis label as spilling off
   the left edge. */
const { chromium } = require('playwright');
const path = require('path');
const { pathToFileURL } = require('url');
const ROOT = path.join(__dirname, '..');
const MIN_OY = 4;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(pathToFileURL(path.join(ROOT, 'index.html')).href);
  await p.waitForFunction(() => window.CONCEPTS && window.Viz);

  const report = await p.evaluate((MIN_OY) => {
    const out = [];
    const host = document.createElement('div');
    host.style.cssText = 'position:absolute;left:-99999px;top:0;width:900px';
    document.body.appendChild(host);

    for (const c of window.CONCEPTS) {
      [].concat(c.visual || []).forEach((v, vi) => {
        if (!v || !window.Viz.has(v.type)) return;
        host.innerHTML = window.Viz.render(v);
        const svg = host.querySelector('svg');
        if (!svg) return;
        const vb = svg.viewBox.baseVal;
        const sr = svg.getBoundingClientRect();
        if (!sr.width) return;
        const k = vb.width / sr.width;                 // px -> viewBox units
        const m = el => {
          const r = el.getBoundingClientRect();
          return { x: (r.left - sr.left) * k, y: (r.top - sr.top) * k, w: r.width * k, h: r.height * k };
        };
        const texts = [...svg.querySelectorAll('text')]
          .filter(t => (t.textContent || '').trim())
          .map(t => ({ ...m(t), s: t.textContent }));
        const rects = [...svg.querySelectorAll('rect')].map(m);
        const blobs = [...svg.querySelectorAll('circle, ellipse')].map(m);
        const hits = [];
        const inside = (a, r) => {
          const cx = a.x + a.w / 2, cy = a.y + a.h / 2;
          return cx > r.x && cx < r.x + r.w && cy > r.y && cy < r.y + r.h;
        };
        const lap = (a, z) => ({
          ox: Math.min(a.x + a.w, z.x + z.w) - Math.max(a.x, z.x),
          oy: Math.min(a.y + a.h, z.y + z.h) - Math.max(a.y, z.y)
        });

        for (let i = 0; i < texts.length; i++) {
          for (let j = i + 1; j < texts.length; j++) {
            const { ox, oy } = lap(texts[i], texts[j]);
            if (ox > 1.5 && oy > MIN_OY) {
              hits.push({ k: 'text/text', a: texts[i].s, b: texts[j].s, ox: +ox.toFixed(1), oy: +oy.toFixed(1) });
            }
          }
        }
        for (const a of texts) {
          if (blobs.some(z => inside(a, z))) continue;  // it has its own backing shape
          for (const r of rects) {
            const { ox, oy } = lap(a, r);
            if (ox > 1 && oy > 1 && !inside(a, r)) {
              hits.push({ k: 'crosses-box', a: a.s, ox: +ox.toFixed(1), oy: +oy.toFixed(1) });
              break;
            }
          }
        }
        // text wider than the cell it sits in. wrap() counts characters, which
        // only approximates a proportional font, so a line can run past the
        // border of its own box.
        for (const a of texts) {
          if (blobs.some(z => inside(a, z))) continue;
          const own = rects.filter(r => inside(a, r))
            .sort((r, s) => (r.w * r.h) - (s.w * s.h))[0];
          if (!own) continue;
          const bleed = Math.max(own.x - a.x, a.x + a.w - (own.x + own.w),
            own.y - a.y, a.y + a.h - (own.y + own.h));
          if (bleed > 2) hits.push({ k: 'overflows', a: a.s, ox: +bleed.toFixed(1) });
        }
        for (const a of texts) {
          const over = [];
          if (a.x < -1) over.push('left ' + (-a.x).toFixed(1));
          if (a.y < -1) over.push('top ' + (-a.y).toFixed(1));
          if (a.x + a.w > vb.width + 1) over.push('right ' + (a.x + a.w - vb.width).toFixed(1));
          if (a.y + a.h > vb.height + 1) over.push('bottom ' + (a.y + a.h - vb.height).toFixed(1));
          if (over.length) hits.push({ k: 'spill', a: a.s, where: over.join(', ') });
        }
        if (hits.length) out.push({ id: c.id, grades: c.grades.join(','), vi, type: v.type, hits });
      });
    }
    host.remove();
    return out;
  }, MIN_OY);

  await b.close();

  const byType = {};
  for (const r of report) (byType[r.type] = byType[r.type] || []).push(r);
  let total = 0;
  for (const [type, list] of Object.entries(byType).sort((a, z) => z[1].length - a[1].length)) {
    const n = list.reduce((s, r) => s + r.hits.length, 0);
    total += n;
    console.log('\n######## ' + type + '  -  ' + list.length + ' diagrams, ' + n + ' collisions');
    for (const r of list.slice(0, 5)) {
      console.log('  ' + r.id + ' [' + r.grades + '] visual#' + r.vi);
      for (const h of r.hits.slice(0, 4)) {
        console.log(h.k === 'spill' ? '      spill   "' + h.a + '"  past ' + h.where
          : h.k === 'crosses-box' ? '      border  "' + h.a + '"  cuts a box (' + h.ox + ' x ' + h.oy + ')'
          : h.k === 'overflows' ? '      bleed   "' + h.a + '"  past its own cell by ' + h.ox
            : '      over    "' + h.a + '"  x  "' + h.b + '"  (' + h.ox + ' x ' + h.oy + ')');
      }
    }
    if (list.length > 5) console.log('  ... and ' + (list.length - 5) + ' more of this type');
  }
  console.log('');
  if (total) {
    console.log(total + ' collisions across ' + report.length + ' diagrams.');
    console.log('Fix the renderer in assets/visuals.js, not the guide content.');
    process.exit(1);
  }
  console.log('Diagrams OK: no overlapping, clipped or spilled text.');
})();

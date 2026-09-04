/* ============================================================
   Self-Help Kiosk: visual guide engine
   Every diagram is drawn as inline SVG at run time. Nothing is
   hot-linked, so the visuals always load, always print, always
   match the student's chosen theme and text size, and there is
   no third-party image licensing to manage.
   Add a new diagram by adding a function to VIZ below.
   ============================================================ */
(function () {
  'use strict';

  // Theme-aware paint. Inline SVG inherits CSS custom properties.
  var INK = 'var(--ink)';
  var SUB = 'var(--ink-2)';
  var LINE = 'var(--line)';
  var AC = 'var(--sc, var(--brand))';
  var ACBG = 'var(--scbg, var(--line-2))';
  var PANEL = 'var(--panel)';
  var OK = 'var(--ok)';
  var WARN = 'var(--warn)';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function svg(w, h, body, title) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" role="img" aria-label="' +
      esc(title || 'diagram') + '">' + body + '</svg>';
  }
  function t(x, y, str, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" font-size="' + (o.size || 14) + '" fill="' + (o.fill || INK) +
      '" text-anchor="' + (o.anchor || 'middle') + '" font-weight="' + (o.weight || 400) + '"' +
      (o.style ? ' font-style="' + o.style + '"' : '') + '>' + esc(str) + '</text>';
  }
  // crude text wrap for boxes
  function wrap(str, perLine) {
    var words = String(str).split(/\s+/), lines = [], cur = '';
    for (var i = 0; i < words.length; i++) {
      var tryLine = cur ? cur + ' ' + words[i] : words[i];
      if (tryLine.length > perLine && cur) { lines.push(cur); cur = words[i]; }
      else cur = tryLine;
    }
    if (cur) lines.push(cur);
    return lines;
  }
  function tblock(x, y, str, perLine, o) {
    o = o || {};
    var lh = o.lh || 15, ls = wrap(str, perLine), out = '';
    var start = y - ((ls.length - 1) * lh) / 2;
    for (var i = 0; i < ls.length; i++) out += t(x, start + i * lh + 5, ls[i], o);
    return out;
  }
  function rect(x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r == null ? 8 : o.r) +
      '" fill="' + (o.fill || PANEL) + '" stroke="' + (o.stroke || LINE) + '" stroke-width="' + (o.sw || 2) + '"' +
      (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
  }
  function line(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (o.stroke || LINE) +
      '" stroke-width="' + (o.sw || 2) + '"' + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') +
      (o.cap ? ' stroke-linecap="' + o.cap + '"' : '') + (o.marker ? ' marker-end="url(#arw)"' : '') + '/>';
  }
  var ARROW = '<defs><marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="' + AC + '"/></marker>' +
    '<marker id="arwg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="' + SUB + '"/></marker></defs>';

  var VIZ = {};

  /* ---------- 1. Generic step flowchart (auto-built from any concept's steps) ---------- */
  VIZ.flow = function (p) {
    var steps = p.steps || [];
    if (!steps.length) return '';
    var W = 660, boxH = 58, gap = 20, padTop = 14;
    var heights = steps.map(function (s) { return Math.max(boxH, 26 + wrap(s, 46).length * 15); });
    var H = padTop * 2 + heights.reduce(function (a, b) { return a + b; }, 0) + gap * (steps.length - 1);
    var body = ARROW, y = padTop;
    for (var i = 0; i < steps.length; i++) {
      var h = heights[i];
      body += rect(46, y, W - 92, h, { fill: i === steps.length - 1 ? ACBG : PANEL, stroke: AC, sw: i === steps.length - 1 ? 2.5 : 2 });
      body += '<circle cx="46" cy="' + (y + h / 2) + '" r="15" fill="' + AC + '"/>';
      body += t(46, y + h / 2 + 5, String(i + 1), { fill: PANEL, weight: 800, size: 14 });
      body += tblock(W / 2 + 6, y + h / 2, steps[i], 46, { size: 13.5 });
      y += h;
      if (i < steps.length - 1) { body += line(W / 2, y + 3, W / 2, y + gap - 3, { stroke: AC, sw: 2.5, marker: 1 }); y += gap; }
    }
    return svg(W, H, body, 'Flow chart of the steps');
  };

  /* ---------- 2. Place value chart ---------- */
  VIZ.placevalue = function (p) {
    var cols = p.columns || ['Hundreds', 'Tens', 'Ones'];
    var digits = p.digits || [];
    var W = 660, cw = Math.min(120, (W - 60) / cols.length), x0 = (W - cw * cols.length) / 2;
    var H = 150 + (p.note ? 26 : 0), body = '';
    for (var i = 0; i < cols.length; i++) {
      var x = x0 + i * cw;
      body += rect(x, 34, cw, 34, { fill: ACBG, stroke: AC, r: 0 });
      body += tblock(x + cw / 2, 51, cols[i], 11, { size: 11.5, weight: 700, fill: AC, lh: 12 });
      body += rect(x, 68, cw, 62, { fill: PANEL, stroke: LINE, r: 0 });
      if (digits[i] != null) body += t(x + cw / 2, 112, String(digits[i]), { size: 34, weight: 800 });
    }
    body += t(W / 2, 22, p.title || 'Place value chart', { size: 13, weight: 700, fill: SUB });
    if (p.note) body += t(W / 2, 148, p.note, { size: 12.5, fill: SUB, style: 'italic' });
    return svg(W, H, body, 'Place value chart');
  };

  /* ---------- 3. Fraction bars ---------- */
  VIZ.fractionbar = function (p) {
    var bars = p.bars || [{ parts: 4, shaded: 3, label: '3/4' }];
    var W = 660, bh = 46, gap = 30, H = 24 + bars.length * (bh + gap);
    var body = '';
    for (var b = 0; b < bars.length; b++) {
      var bar = bars[b], y = 18 + b * (bh + gap), bw = W - 190, x0 = 24, pw = bw / bar.parts;
      for (var i = 0; i < bar.parts; i++) {
        var on = i < bar.shaded;
        body += rect(x0 + i * pw, y, pw, bh, { fill: on ? AC : PANEL, stroke: AC, r: 0, sw: 2 });
        if (bar.tick) body += t(x0 + i * pw + pw / 2, y + bh / 2 + 5, bar.tick[i] || '', { size: 12, fill: on ? PANEL : SUB });
      }
      body += t(x0 + bw + 16, y + bh / 2 - 2, bar.label || '', { size: 20, weight: 800, anchor: 'start', fill: AC });
      if (bar.sub) body += t(x0 + bw + 16, y + bh / 2 + 16, bar.sub, { size: 11.5, anchor: 'start', fill: SUB });
    }
    return svg(W, H, body, 'Fraction bars');
  };

  /* ---------- 4. Number line ---------- */
  VIZ.numberline = function (p) {
    var min = p.min, max = p.max, ticks = p.ticks || [];
    var W = 660, H = 128 + (p.jumps ? 34 : 0), y = 78 + (p.jumps ? 34 : 0), x0 = 46, x1 = W - 46;
    var sc = function (v) { return x0 + (v - min) / (max - min) * (x1 - x0); };
    var body = ARROW;
    body += line(x0 - 14, y, x1 + 14, y, { stroke: INK, sw: 2.5, marker: 1 });
    body += line(x1 + 14, y, x0 - 14, y, { stroke: INK, sw: 2.5, marker: 1 });
    for (var i = 0; i < ticks.length; i++) {
      var tk = ticks[i], v = typeof tk === 'object' ? tk.v : tk, lab = typeof tk === 'object' ? tk.l : String(tk);
      var big = typeof tk === 'object' ? tk.big : true;
      body += line(sc(v), y - (big ? 11 : 6), sc(v), y + (big ? 11 : 6), { stroke: INK, sw: 2 });
      if (lab) body += t(sc(v), y + 30, lab, { size: 13, weight: big ? 700 : 400, fill: big ? INK : SUB });
    }
    (p.points || []).forEach(function (pt) {
      body += '<circle cx="' + sc(pt.v) + '" cy="' + y + '" r="8" fill="' + AC + '"/>';
      if (pt.l) body += t(sc(pt.v), y - 20, pt.l, { size: 13, weight: 800, fill: AC });
    });
    (p.jumps || []).forEach(function (j) {
      var a = sc(j.from), b = sc(j.to), mid = (a + b) / 2, r = Math.abs(b - a) / 2;
      body += '<path d="M' + a + ' ' + y + ' A ' + r + ' ' + Math.min(r, 30) + ' 0 0 1 ' + b + ' ' + y +
        '" fill="none" stroke="' + AC + '" stroke-width="2.5" marker-end="url(#arw)"/>';
      if (j.l) body += t(mid, y - Math.min(r, 30) - 8, j.l, { size: 12.5, weight: 700, fill: AC });
    });
    if (p.title) body += t(W / 2, 22, p.title, { size: 13, weight: 700, fill: SUB });
    return svg(W, H, body, 'Number line');
  };

  /* ---------- 5. Area model / partial products ---------- */
  VIZ.areamodel = function (p) {
    var rows = p.rows || [], cols = p.cols || [], cells = p.cells || [];
    var W = 660, lh = 46, cw = Math.min(150, (W - 150) / cols.length), rh = 62;
    var x0 = 110, y0 = 62, H = y0 + rows.length * rh + 56;
    var body = t(W / 2, 24, p.title || 'Area model', { size: 13, weight: 700, fill: SUB });
    for (var c = 0; c < cols.length; c++) {
      body += rect(x0 + c * cw, y0 - 34, cw, 30, { fill: ACBG, stroke: AC, r: 4 });
      body += t(x0 + c * cw + cw / 2, y0 - 13, String(cols[c]), { size: 15, weight: 800, fill: AC });
    }
    for (var r = 0; r < rows.length; r++) {
      body += rect(x0 - 92, y0 + r * rh + 12, 86, 38, { fill: ACBG, stroke: AC, r: 4 });
      body += t(x0 - 49, y0 + r * rh + 37, String(rows[r]), { size: 15, weight: 800, fill: AC });
      for (var c2 = 0; c2 < cols.length; c2++) {
        body += rect(x0 + c2 * cw, y0 + r * rh, cw, rh, { fill: PANEL, stroke: LINE, r: 0 });
        var val = (cells[r] || [])[c2];
        if (val != null) body += t(x0 + c2 * cw + cw / 2, y0 + r * rh + rh / 2 + 6, String(val), { size: 17, weight: 700 });
      }
    }
    if (p.total) body += t(W / 2, y0 + rows.length * rh + 34, p.total, { size: 15, weight: 800, fill: OK });
    return svg(W, H, body, 'Area model');
  };

  /* ---------- 6. Tape / bar diagram ---------- */
  VIZ.tape = function (p) {
    var rows = p.rows || [];
    var W = 660, bh = 44, gap = 22, H = 30 + rows.length * (bh + gap);
    var maxUnits = Math.max.apply(null, rows.map(function (r) { return r.units; }));
    var unitW = (W - 240) / maxUnits;
    var body = '';
    rows.forEach(function (r, i) {
      var y = 22 + i * (bh + gap);
      body += t(104, y + bh / 2 + 5, r.label, { size: 13.5, weight: 700, anchor: 'end' });
      for (var u = 0; u < r.units; u++) {
        body += rect(116 + u * unitW, y, unitW, bh, { fill: r.fill === false ? PANEL : ACBG, stroke: AC, r: 0 });
        if (r.each) body += t(116 + u * unitW + unitW / 2, y + bh / 2 + 5, r.each, { size: 12.5, fill: AC, weight: 700 });
      }
      if (r.total) {
        var x = 116 + r.units * unitW;
        body += line(x + 8, y + 4, x + 8, y + bh - 4, { stroke: SUB, sw: 2 });
        body += t(x + 16, y + bh / 2 + 5, r.total, { size: 13, weight: 800, anchor: 'start', fill: OK });
      }
    });
    return svg(W, H, body, 'Bar model');
  };

  /* ---------- 7. Coordinate plane ---------- */
  VIZ.coordplane = function (p) {
    var n = p.range || 5, S = 30, W = 660, size = n * 2 * S, cx = W / 2, cy = 30 + size / 2, H = size + 76;
    var body = ARROW;
    for (var i = -n; i <= n; i++) {
      body += line(cx - size / 2, cy + i * S, cx + size / 2, cy + i * S, { stroke: LINE, sw: 1 });
      body += line(cx + i * S, cy - size / 2, cx + i * S, cy + size / 2, { stroke: LINE, sw: 1 });
    }
    body += line(cx - size / 2 - 12, cy, cx + size / 2 + 12, cy, { stroke: INK, sw: 2.5, marker: 1 });
    body += line(cx + size / 2 + 12, cy, cx - size / 2 - 12, cy, { stroke: INK, sw: 2.5, marker: 1 });
    body += line(cx, cy + size / 2 + 12, cx, cy - size / 2 - 12, { stroke: INK, sw: 2.5, marker: 1 });
    body += line(cx, cy - size / 2 - 12, cx, cy + size / 2 + 12, { stroke: INK, sw: 2.5, marker: 1 });
    body += t(cx + size / 2 + 22, cy + 5, 'x', { size: 13, weight: 700, fill: SUB });
    body += t(cx - 14, cy - size / 2 - 16, 'y', { size: 13, weight: 700, fill: SUB });
    if (p.quadrants) {
      var q = [['I', 1, -1], ['II', -1, -1], ['III', -1, 1], ['IV', 1, 1]];
      q.forEach(function (a) {
        body += t(cx + a[1] * (size / 2 - 22), cy + a[2] * (size / 2 - 16), a[0], { size: 15, weight: 800, fill: SUB });
      });
    }
    (p.points || []).forEach(function (pt) {
      var px = cx + pt.x * S, py = cy - pt.y * S;
      if (pt.path) {
        body += line(cx, cy, px, cy, { stroke: AC, sw: 2.5, dash: '5 4' });
        body += line(px, cy, px, py, { stroke: AC, sw: 2.5, dash: '5 4' });
      }
      body += '<circle cx="' + px + '" cy="' + py + '" r="7" fill="' + AC + '"/>';
      body += t(px + 4, py - 12, pt.l || ('(' + pt.x + ', ' + pt.y + ')'), { size: 12.5, weight: 800, fill: AC, anchor: 'start' });
    });
    if (p.title) body += t(W / 2, 20, p.title, { size: 13, weight: 700, fill: SUB });
    return svg(W, H, body, 'Coordinate plane');
  };

  /* ---------- 8. Frayer model (word map) ---------- */
  VIZ.frayer = function (p) {
    var W = 660, H = 330, m = 30, bw = (W - m * 2) / 2, bh = (H - m * 2) / 2;
    var q = p.quads || ['Definition in my own words', 'Facts / characteristics', 'Examples', 'Non-examples'];
    var v = p.values || ['', '', '', ''];
    var body = '';
    for (var i = 0; i < 4; i++) {
      var x = m + (i % 2) * bw, y = m + (i > 1 ? 1 : 0) * bh;
      body += rect(x, y, bw, bh, { fill: PANEL, stroke: AC, r: 0 });
      body += t(x + 12, y + 22, q[i], { size: 12, weight: 800, fill: AC, anchor: 'start' });
      if (v[i]) body += tblock(x + bw / 2, y + bh / 2 + 8, v[i], 26, { size: 13, lh: 16 });
    }
    body += '<ellipse cx="' + W / 2 + '" cy="' + H / 2 + '" rx="86" ry="34" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="2.5"/>';
    body += tblock(W / 2, H / 2, p.word || 'the word', 16, { size: 15, weight: 800, fill: AC, lh: 17 });
    return svg(W, H, body, 'Frayer model word map');
  };

  /* ---------- 9. Paragraph hamburger ---------- */
  VIZ.hamburger = function (p) {
    var layers = p.layers || [
      { l: 'Topic sentence', d: 'What is this paragraph about?' },
      { l: 'Detail 1', d: 'Evidence or example' },
      { l: 'Detail 2', d: 'Evidence or example' },
      { l: 'Detail 3', d: 'Evidence or example' },
      { l: 'Closing sentence', d: 'Wrap it up' }
    ];
    var W = 660, H = 40 + layers.length * 52 + 20, body = '';
    body += '<path d="M170 22 Q330 -8 490 22 L490 34 L170 34 Z" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="2"/>';
    layers.forEach(function (L, i) {
      var y = 40 + i * 52;
      var isBun = i === 0 || i === layers.length - 1;
      body += rect(170, y, 320, 42, { fill: isBun ? ACBG : PANEL, stroke: AC, r: isBun ? 12 : 3 });
      body += t(330, y + 20, L.l, { size: 13.5, weight: 800, fill: AC });
      if (L.d) body += t(330, y + 35, L.d, { size: 11.5, fill: SUB });
      body += t(500, y + 26, '← ' + (i + 1), { size: 12, fill: SUB, anchor: 'start' });
    });
    return svg(W, H, body, 'Paragraph hamburger');
  };

  /* ---------- 10. Story plot diagram ---------- */
  VIZ.plotarc = function (p) {
    var W = 660, H = 260;
    var body = ARROW;
    body += '<path d="M60 210 L200 210 L330 60 L470 150 L600 210" fill="none" stroke="' + AC + '" stroke-width="3.5" stroke-linejoin="round"/>';
    var pts = [
      { x: 60, y: 210, l: p.l1 || 'Exposition', d: 'Who, where, when' },
      { x: 200, y: 210, l: p.l2 || 'Rising action', d: 'Problem grows' },
      { x: 330, y: 60, l: p.l3 || 'Climax', d: 'Biggest moment' },
      { x: 470, y: 150, l: p.l4 || 'Falling action', d: 'Things settle' },
      { x: 600, y: 210, l: p.l5 || 'Resolution', d: 'How it ends' }
    ];
    pts.forEach(function (pt, i) {
      body += '<circle cx="' + pt.x + '" cy="' + pt.y + '" r="9" fill="' + AC + '" stroke="' + PANEL + '" stroke-width="2.5"/>';
      var ty = i === 2 ? pt.y - 26 : pt.y + 30;
      body += t(Math.min(Math.max(pt.x, 60), 600), ty, pt.l, { size: 12.5, weight: 800, fill: AC });
      body += t(Math.min(Math.max(pt.x, 60), 600), ty + 15, pt.d, { size: 11, fill: SUB });
    });
    body += line(40, 226, 620, 226, { stroke: LINE, sw: 2 });
    body += t(W / 2, 246, 'beginning → middle → end', { size: 11.5, fill: SUB, style: 'italic' });
    return svg(W, H, body, 'Plot diagram');
  };

  /* ---------- 11. Sentence anatomy ---------- */
  VIZ.sentence = function (p) {
    var W = 660, H = 190, body = '';
    body += t(W / 2, 26, p.title || 'Every sentence needs both halves', { size: 13, weight: 700, fill: SUB });
    body += rect(50, 44, 260, 70, { fill: ACBG, stroke: AC });
    body += t(180, 70, p.subjLabel || 'SUBJECT', { size: 12, weight: 800, fill: AC });
    body += t(180, 94, p.subj || 'The tired dog', { size: 16, weight: 700 });
    body += rect(350, 44, 260, 70, { fill: PANEL, stroke: AC });
    body += t(480, 70, p.predLabel || 'PREDICATE', { size: 12, weight: 800, fill: AC });
    body += t(480, 94, p.pred || 'slept on the porch.', { size: 16, weight: 700 });
    body += t(330, 86, '+', { size: 24, weight: 800, fill: SUB });
    body += t(180, 140, '↑', { size: 16, fill: AC });
    body += t(480, 140, '↑', { size: 16, fill: AC });
    body += t(180, 162, p.hint1 || 'Who or what?', { size: 12, weight: 700, fill: AC });
    body += t(480, 162, p.hint2 || 'What are they doing?', { size: 12, weight: 700, fill: AC });
    return svg(W, H, body, 'Sentence parts');
  };

  /* ---------- 12. Word parts (prefix + root + suffix) ---------- */
  VIZ.wordparts = function (p) {
    var parts = p.parts || [{ p: 'un', k: 'prefix', m: 'not' }, { p: 'break', k: 'root', m: 'to come apart' }, { p: 'able', k: 'suffix', m: 'can be' }];
    var W = 660, H = 210, bw = 150, gap = 26, total = parts.length * bw + (parts.length - 1) * gap;
    var x0 = (W - total) / 2, body = '';
    body += t(W / 2, 26, p.title || 'Break the word into parts', { size: 13, weight: 700, fill: SUB });
    parts.forEach(function (pt, i) {
      var x = x0 + i * (bw + gap);
      body += rect(x, 44, bw, 74, { fill: ACBG, stroke: AC });
      body += t(x + bw / 2, 62, pt.k.toUpperCase(), { size: 10.5, weight: 800, fill: AC });
      body += t(x + bw / 2, 90, pt.p, { size: 21, weight: 800 });
      body += tblock(x + bw / 2, 108, '"' + pt.m + '"', 20, { size: 11, fill: SUB, lh: 12 });
      if (i < parts.length - 1) body += t(x + bw + gap / 2, 90, '+', { size: 22, weight: 800, fill: SUB });
    });
    body += line(x0, 140, x0 + total, 140, { stroke: LINE, sw: 2 });
    body += t(W / 2, 172, p.word || parts.map(function (a) { return a.p; }).join(''), { size: 24, weight: 800, fill: AC });
    if (p.meaning) body += t(W / 2, 195, '= ' + p.meaning, { size: 13, fill: OK, weight: 700 });
    return svg(W, H, body, 'Word parts');
  };

  /* ---------- 13. Venn diagram ---------- */
  VIZ.venn = function (p) {
    var W = 660, H = 260, cy = 130, r = 96, body = '';
    body += '<circle cx="248" cy="' + cy + '" r="' + r + '" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="2.5" opacity="0.75"/>';
    body += '<circle cx="412" cy="' + cy + '" r="' + r + '" fill="' + PANEL + '" stroke="' + AC + '" stroke-width="2.5" opacity="0.75"/>';
    body += t(200, 26, p.aLabel || 'Text A', { size: 14, weight: 800, fill: AC });
    body += t(460, 26, p.bLabel || 'Text B', { size: 14, weight: 800, fill: AC });
    body += tblock(196, cy, p.a || 'only A', 14, { size: 12, lh: 15 });
    body += tblock(464, cy, p.b || 'only B', 14, { size: 12, lh: 15 });
    body += t(330, cy - 44, 'BOTH', { size: 11, weight: 800, fill: SUB });
    body += tblock(330, cy + 2, p.both || 'the same', 12, { size: 12, lh: 15 });
    body += t(W / 2, 246, p.caption || 'Middle = alike. Outsides = different.', { size: 12, fill: SUB, style: 'italic' });
    return svg(W, H, body, 'Venn diagram');
  };

  /* ---------- 14. Ten frame ---------- */
  VIZ.tenframe = function (p) {
    var filled = p.filled || 0, frames = p.frames || 1;
    var W = 660, cell = 44, fw = cell * 5, H = 40 + frames * (cell * 2 + 26);
    var x0 = (W - (fw * frames + (frames - 1) * 30)) / 2, body = '';
    body += t(W / 2, 22, p.title || 'Ten frame', { size: 13, weight: 700, fill: SUB });
    var left = filled;
    for (var f = 0; f < frames; f++) {
      var fx = x0 + f * (fw + 30), fy = 36;
      for (var r = 0; r < 2; r++) for (var c = 0; c < 5; c++) {
        var idx = r * 5 + c;
        body += rect(fx + c * cell, fy + r * cell, cell, cell, { r: 0, stroke: INK, sw: 1.8 });
        if (idx < left) body += '<circle cx="' + (fx + c * cell + cell / 2) + '" cy="' + (fy + r * cell + cell / 2) + '" r="' + (cell / 2 - 7) + '" fill="' + AC + '"/>';
      }
      left -= 10;
    }
    if (p.label) body += t(W / 2, 40 + frames * (cell * 2) + 20, p.label, { size: 16, weight: 800, fill: AC });
    return svg(W, H, body, 'Ten frame');
  };

  /* ---------- 15. Sound boxes (Elkonin) ---------- */
  VIZ.soundboxes = function (p) {
    var boxes = p.boxes || ['s', 'a', 't'];
    var W = 660, bw = 76, H = 150, x0 = (W - boxes.length * bw) / 2, body = '';
    body += t(W / 2, 26, p.title || 'One box for each sound', { size: 13, weight: 700, fill: SUB });
    boxes.forEach(function (b, i) {
      body += rect(x0 + i * bw, 42, bw, 70, { fill: i % 2 ? PANEL : ACBG, stroke: AC, r: 0 });
      body += t(x0 + i * bw + bw / 2, 90, b, { size: 30, weight: 800, fill: AC });
    });
    if (p.word) body += t(W / 2, 138, p.word, { size: 20, weight: 800 });
    return svg(W, H, body, 'Sound boxes');
  };

  /* ---------- 16. Classification tree / hierarchy ---------- */
  VIZ.hierarchy = function (p) {
    var lv = p.levels || [];
    var W = 660, rowH = 74, H = 30 + lv.length * rowH, body = ARROW;
    lv.forEach(function (row, r) {
      var items = row.items || [], n = items.length;
      var bw = Math.min(190, (W - 60) / n - 14), total = n * bw + (n - 1) * 14, x0 = (W - total) / 2;
      items.forEach(function (it, i) {
        var x = x0 + i * (bw + 14), y = 22 + r * rowH;
        body += rect(x, y, bw, 46, { fill: r === 0 ? AC : ACBG, stroke: AC });
        body += tblock(x + bw / 2, y + 23, it, Math.floor(bw / 7), { size: 12.5, weight: 700, fill: r === 0 ? PANEL : AC, lh: 14 });
        if (r > 0) body += line(W / 2, y - rowH + 68, x + bw / 2, y - 2, { stroke: SUB, sw: 1.5, marker: 1 });
      });
    });
    if (p.note) body += t(W / 2, H - 4, p.note, { size: 11.5, fill: SUB, style: 'italic' });
    return svg(W, H + (p.note ? 12 : 0), body, 'Classification chart');
  };

  /* ---------- 17. Balance scale (solving equations) ---------- */
  VIZ.balance = function (p) {
    var W = 660, H = 250, body = '';
    body += t(W / 2, 24, p.title || 'An equation is a balanced scale', { size: 13, weight: 700, fill: SUB });
    body += line(120, 60, 540, 60, { stroke: INK, sw: 4, cap: 'round' });
    body += '<path d="M320 60 L330 60 L338 150 L312 150 Z" fill="' + SUB + '"/>';
    body += '<rect x="288" y="150" width="84" height="12" rx="5" fill="' + INK + '"/>';
    body += rect(150, 74, 220, 58, { fill: ACBG, stroke: AC });
    body += t(260, 110, p.left || '2x + 3', { size: 22, weight: 800, fill: AC });
    body += rect(430, 74, 160, 58, { fill: PANEL, stroke: AC });
    body += t(510, 110, p.right || '11', { size: 22, weight: 800, fill: AC });
    body += t(400, 110, '=', { size: 26, weight: 800, fill: SUB });
    body += t(W / 2, 190, p.rule || 'Whatever you do to one side, do to the other side.', { size: 14, weight: 700, fill: OK });
    if (p.sub) body += t(W / 2, 214, p.sub, { size: 12.5, fill: SUB });
    return svg(W, H, body, 'Balance scale');
  };

  /* ---------- 18. Slope triangle on a line ---------- */
  VIZ.slope = function (p) {
    var W = 660, H = 280, S = 30, n = 4, cx = W / 2, cy = 150, body = ARROW;
    for (var i = -n; i <= n; i++) {
      body += line(cx - n * S, cy + i * S, cx + n * S, cy + i * S, { stroke: LINE, sw: 1 });
      body += line(cx + i * S, cy - n * S, cx + i * S, cy + n * S, { stroke: LINE, sw: 1 });
    }
    body += line(cx - n * S - 10, cy, cx + n * S + 10, cy, { stroke: INK, sw: 2.5 });
    body += line(cx, cy - n * S - 10, cx, cy + n * S + 10, { stroke: INK, sw: 2.5 });
    var m = p.m == null ? 2 : p.m, b = p.b == null ? -1 : p.b;
    var xA = -n, xB = n;
    body += line(cx + xA * S, cy - (m * xA + b) * S, cx + xB * S, cy - (m * xB + b) * S, { stroke: AC, sw: 3.5 });
    var px = 0, py = b;
    body += line(cx + px * S, cy - py * S, cx + (px + 1) * S, cy - py * S, { stroke: OK, sw: 3 });
    body += line(cx + (px + 1) * S, cy - py * S, cx + (px + 1) * S, cy - (py + m) * S, { stroke: OK, sw: 3 });
    body += t(cx + (px + 0.5) * S, cy - py * S + 18, 'run 1', { size: 11.5, weight: 800, fill: OK });
    body += t(cx + (px + 1) * S + 34, cy - (py + m / 2) * S + 4, 'rise ' + m, { size: 11.5, weight: 800, fill: OK });
    body += '<circle cx="' + (cx) + '" cy="' + (cy - b * S) + '" r="7" fill="' + AC + '"/>';
    body += t(cx - 12, cy - b * S - 12, '(0, ' + b + ')', { size: 11.5, weight: 800, fill: AC, anchor: 'end' });
    body += t(W / 2, 24, p.title || ('y = ' + m + 'x ' + (b < 0 ? '- ' + Math.abs(b) : '+ ' + b)), { size: 15, weight: 800, fill: AC });
    body += t(W / 2, H - 18, 'slope = rise ÷ run = ' + m + ' ÷ 1 = ' + m + '   •   y-intercept = where the line crosses the y-axis', { size: 11.5, fill: SUB });
    return svg(W, H, body, 'Slope and y-intercept');
  };

  /* ---------- 19. Right triangle with squares (Pythagorean) ---------- */
  VIZ.pythagoras = function (p) {
    var W = 660, H = 300, a = 60, b = 80, ox = 250, oy = 190, body = '';
    body += '<polygon points="' + ox + ',' + oy + ' ' + (ox + b) + ',' + oy + ' ' + ox + ',' + (oy - a) + '" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="3"/>';
    body += '<rect x="' + ox + '" y="' + (oy - 12) + '" width="12" height="12" fill="none" stroke="' + AC + '" stroke-width="2"/>';
    body += rect(ox - a, oy - a, a, a, { fill: PANEL, stroke: AC, r: 0 });
    body += t(ox - a / 2, oy - a / 2 + 5, 'a²', { size: 17, weight: 800, fill: AC });
    body += rect(ox, oy, b, b, { fill: PANEL, stroke: AC, r: 0 });
    body += t(ox + b / 2, oy + b / 2 + 5, 'b²', { size: 17, weight: 800, fill: AC });
    body += '<polygon points="' + (ox + b) + ',' + oy + ' ' + ox + ',' + (oy - a) + ' ' + (ox - a + b + 20) + ',' + (oy - a - b + 40) + ' ' + (ox + b + a + 20) + ',' + (oy - b + 40) + '" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="2"/>';
    body += t(ox + b + 34, oy - a - 4, 'c²', { size: 17, weight: 800, fill: AC });
    body += t(ox - 12, oy - a / 2, 'a', { size: 14, weight: 700, anchor: 'end' });
    body += t(ox + b / 2, oy + 18, 'b', { size: 14, weight: 700 });
    body += t(W / 2, 40, 'a² + b² = c²', { size: 22, weight: 800, fill: AC });
    body += t(W / 2, 64, 'c is always the longest side (the hypotenuse), across from the right angle.', { size: 12, fill: SUB });
    body += t(W / 2, H - 12, p.note || 'Only works on right triangles.', { size: 12, fill: WARN, weight: 700 });
    return svg(W, H, body, 'Pythagorean theorem');
  };

  /* ---------- 20. Simple bar graph ---------- */
  VIZ.bargraph = function (p) {
    var bars = p.bars || [], W = 660, H = 260, x0 = 70, y0 = 210, gw = W - 120;
    var max = p.max || Math.max.apply(null, bars.map(function (b) { return b.v; }));
    var bw = gw / bars.length, body = '';
    body += t(W / 2, 24, p.title || 'Bar graph', { size: 14, weight: 800, fill: AC });
    for (var g = 0; g <= max; g += (p.step || 1)) {
      var y = y0 - (g / max) * 150;
      body += line(x0, y, x0 + gw, y, { stroke: LINE, sw: 1 });
      body += t(x0 - 10, y + 4, String(g), { size: 11, fill: SUB, anchor: 'end' });
    }
    body += line(x0, y0, x0 + gw, y0, { stroke: INK, sw: 2 });
    body += line(x0, y0, x0, 50, { stroke: INK, sw: 2 });
    bars.forEach(function (b, i) {
      var h = (b.v / max) * 150;
      body += rect(x0 + i * bw + bw * 0.18, y0 - h, bw * 0.64, h, { fill: AC, stroke: AC, r: 4 });
      body += t(x0 + i * bw + bw / 2, y0 + 20, b.l, { size: 12, weight: 700 });
      body += t(x0 + i * bw + bw / 2, y0 - h - 7, String(b.v), { size: 12, weight: 800, fill: AC });
    });
    if (p.yLabel) body += '<g transform="rotate(-90 22 130)">' + t(22, 130, p.yLabel, { size: 11.5, fill: SUB }) + '</g>';
    if (p.xLabel) body += t(W / 2, H - 8, p.xLabel, { size: 11.5, fill: SUB });
    return svg(W, H, body, 'Bar graph');
  };

  /* ---------- 21. Two-column table (ratio tables, input/output) ---------- */
  VIZ.table = function (p) {
    var head = p.head || [], rows = p.rows || [];
    var W = 660, cw = Math.min(150, (W - 80) / head.length), x0 = (W - cw * head.length) / 2;
    var rh = 40, H = 34 + (rows.length + 1) * rh + (p.note ? 26 : 0), body = '';
    if (p.title) body += t(W / 2, 22, p.title, { size: 13, weight: 700, fill: SUB });
    head.forEach(function (h, i) {
      body += rect(x0 + i * cw, 32, cw, rh, { fill: AC, stroke: AC, r: 0 });
      body += t(x0 + i * cw + cw / 2, 32 + rh / 2 + 5, h, { size: 13, weight: 800, fill: PANEL });
    });
    rows.forEach(function (r, ri) {
      r.forEach(function (c, ci) {
        body += rect(x0 + ci * cw, 32 + (ri + 1) * rh, cw, rh, { fill: ri % 2 ? ACBG : PANEL, stroke: LINE, r: 0 });
        body += t(x0 + ci * cw + cw / 2, 32 + (ri + 1) * rh + rh / 2 + 5, String(c), { size: 14, weight: 600 });
      });
    });
    if (p.note) body += t(W / 2, H - 8, p.note, { size: 12, fill: SUB, style: 'italic' });
    return svg(W, H, body, 'Table');
  };

  /* ---------- 22. Angle types ---------- */
  VIZ.angles = function (p) {
    var list = p.list || [
      { l: 'Acute', d: 'less than 90°', deg: 45 },
      { l: 'Right', d: 'exactly 90°', deg: 90 },
      { l: 'Obtuse', d: 'more than 90°, less than 180°', deg: 130 },
      { l: 'Straight', d: 'exactly 180°', deg: 180 }
    ];
    var W = 660, cw = W / list.length, H = 190, body = '';
    list.forEach(function (a, i) {
      var cx = cw * i + cw / 2, cy = 96, r = 42;
      var rad = a.deg * Math.PI / 180;
      body += line(cx, cy, cx + r, cy, { stroke: AC, sw: 3, cap: 'round' });
      body += line(cx, cy, cx + r * Math.cos(-rad), cy + r * Math.sin(-rad), { stroke: AC, sw: 3, cap: 'round' });
      body += '<path d="M' + (cx + 18) + ' ' + cy + ' A 18 18 0 ' + (a.deg > 180 ? 1 : 0) + ' 0 ' +
        (cx + 18 * Math.cos(-rad)) + ' ' + (cy + 18 * Math.sin(-rad)) + '" fill="none" stroke="' + SUB + '" stroke-width="1.8"/>';
      body += '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="' + AC + '"/>';
      body += t(cx, 30, a.l, { size: 14, weight: 800, fill: AC });
      body += tblock(cx, 152, a.d, 20, { size: 11, fill: SUB, lh: 13 });
      body += t(cx, 46, a.deg + '°', { size: 11.5, fill: SUB });
    });
    return svg(W, H, body, 'Types of angles');
  };

  /* ---------- 23. Long division cycle (DMSB) ---------- */
  VIZ.cycle = function (p) {
    var steps = p.steps || [{ l: 'Divide' }, { l: 'Multiply' }, { l: 'Subtract' }, { l: 'Bring down' }];
    var W = 660, H = 280, cx = W / 2, cy = 140, R = 92, body = ARROW;
    steps.forEach(function (s, i) {
      var ang = -Math.PI / 2 + (i * 2 * Math.PI / steps.length);
      var x = cx + R * Math.cos(ang) * 1.75, y = cy + R * Math.sin(ang);
      body += rect(x - 76, y - 26, 152, 52, { fill: ACBG, stroke: AC });
      body += t(x, y - 2, s.l, { size: 14, weight: 800, fill: AC });
      if (s.d) body += t(x, y + 15, s.d, { size: 10.5, fill: SUB });
      var nAng = -Math.PI / 2 + ((i + 1) * 2 * Math.PI / steps.length);
      var nx = cx + R * Math.cos(nAng) * 1.75, ny = cy + R * Math.sin(nAng);
      var mx = (x + nx) / 2, my = (y + ny) / 2;
      body += '<path d="M' + x + ' ' + y + ' Q ' + (mx + (my - cy) * 0.28) + ' ' + (my + (mx - cx) * 0.16) + ' ' + nx + ' ' + ny +
        '" fill="none" stroke="' + SUB + '" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arwg)" opacity="0.55"/>';
    });
    body += t(cx, cy - 4, p.center || 'repeat', { size: 13, weight: 800, fill: SUB });
    body += t(cx, cy + 15, p.centerSub || 'until nothing is left', { size: 10.5, fill: SUB });
    if (p.title) body += t(cx, 24, p.title, { size: 13, weight: 700, fill: SUB });
    return svg(W, H, body, 'Repeating cycle');
  };

  /* ---------- 24. Two-way "which one do I use?" decision fork ---------- */
  VIZ.decide = function (p) {
    var W = 660, H = 40 + (p.branches || []).length * 78 + 60, body = ARROW;
    body += rect(180, 20, 300, 52, { fill: AC, stroke: AC });
    body += tblock(330, 46, p.question || 'Ask yourself:', 40, { size: 13.5, weight: 800, fill: PANEL, lh: 15 });
    (p.branches || []).forEach(function (b, i) {
      var y = 96 + i * 78;
      body += line(330, i === 0 ? 72 : y - 26, 330, y - 6, { stroke: SUB, sw: 2, marker: 1 });
      body += rect(90, y, 160, 56, { fill: ACBG, stroke: AC });
      body += tblock(170, y + 28, b.if, 22, { size: 12, weight: 700, fill: AC, lh: 14 });
      body += line(254, y + 28, 292, y + 28, { stroke: AC, sw: 2, marker: 1 });
      body += rect(298, y, 274, 56, { fill: PANEL, stroke: LINE });
      body += tblock(435, y + 28, b.then, 36, { size: 12, lh: 14 });
    });
    return svg(W, H, body, 'Decision chart');
  };

  /* ---------- 25. Shape attribute cards ---------- */
  VIZ.shapes = function (p) {
    var list = p.list || [];
    var W = 660, n = Math.min(list.length, 4), cw = W / n, H = 190, body = '';
    list.slice(0, 4).forEach(function (s, i) {
      var cx = cw * i + cw / 2, cy = 82, r = 40;
      var pts = [];
      if (s.sides === 0) { body += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="3"/>'; }
      else {
        var k = s.sides, rot = (k % 2 ? -Math.PI / 2 : -Math.PI / 2 + Math.PI / k);
        for (var j = 0; j < k; j++) {
          var a = rot + j * 2 * Math.PI / k;
          pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1));
        }
        body += '<polygon points="' + pts.join(' ') + '" fill="' + ACBG + '" stroke="' + AC + '" stroke-width="3"/>';
      }
      body += t(cx, 30, s.l, { size: 14, weight: 800, fill: AC });
      body += tblock(cx, 150, s.d, 22, { size: 11, fill: SUB, lh: 13 });
    });
    return svg(W, H, body, 'Shapes');
  };

  /* ---------- 26. Text-structure signal map ---------- */
  VIZ.structure = function (p) {
    var list = p.list || [];
    var W = 660, rh = 62, H = 30 + list.length * rh, body = '';
    list.forEach(function (s, i) {
      var y = 16 + i * rh;
      body += rect(24, y, 176, 50, { fill: ACBG, stroke: AC });
      body += tblock(112, y + 25, s.l, 22, { size: 12.5, weight: 800, fill: AC, lh: 14 });
      body += rect(212, y, W - 236, 50, { fill: PANEL, stroke: LINE });
      body += tblock((212 + W - 24) / 2, y + 25, s.d, 58, { size: 11.5, lh: 14 });
    });
    return svg(W, H, body, 'Text structures');
  };

  /* ---------- render ---------- */
  window.Viz = {
    has: function (type) { return typeof VIZ[type] === 'function'; },
    render: function (spec) {
      if (!spec) return '';
      var list = Array.isArray(spec) ? spec : [spec], out = '';
      for (var i = 0; i < list.length; i++) {
        var s = list[i];
        if (!s || !VIZ[s.type]) continue;
        var body = '';
        try { body = VIZ[s.type](s); } catch (e) { body = ''; }
        if (!body) continue;
        out += '<figure class="viz">' + body +
          (s.caption ? '<figcaption class="viz-cap">' + esc(s.caption) + '</figcaption>' : '') + '</figure>';
      }
      return out;
    }
  };
})();

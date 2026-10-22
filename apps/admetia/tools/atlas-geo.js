#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Builds data/atlas/geo.js, the country shapes behind the Atlas (map.html),
 * from Natural Earth's public-domain 1:10m Admin 0 countries.
 *
 *   node tools/atlas-geo.js          (downloads the source once, ~13 MB, into
 *                                     tools/.atlas-cache/, which git ignores)
 *
 * Source: Natural Earth, ne_10m_admin_0_countries_ita.geojson — the
 * "point of view" edition that draws boundaries as Italy, an EU member,
 * recognises them. It matters for three places a reader can click: Crimea is
 * part of Ukraine, not Russia; the Golan Heights are not part of Israel; and
 * Taiwan and Hong Kong are separate shapes, as the Atlas lists them. No
 * position on any boundary is implied beyond that. Public domain:
 * https://www.naturalearthdata.com/about/terms-of-use/
 *
 * What it does: drops Antarctica, simplifies every ring (Douglas–Peucker;
 * finer for the 46 countries a reader can select, coarse for the rest),
 * drops islands too small to see, and stores each ring as integer hundredths
 * of a degree, delta-encoded. Nothing is projected here: js/page-map.js
 * projects at run time, so the world view and each country's hub view draw
 * from the same numbers.
 *
 * The output is plain data; re-run this only to change the detail level.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const CACHE = path.join(__dirname, '.atlas-cache');
const SRC_NAME = 'ne_10m_admin_0_countries_ita.geojson';
const SRC_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/' + SRC_NAME;
const OUT = path.join(ROOT, 'data', 'atlas', 'geo.js');

function download(url, to) {
  return new Promise((ok, fail) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return ok(download(res.headers.location, to));
      if (res.statusCode !== 200) return fail(new Error(url + ': HTTP ' + res.statusCode));
      const file = fs.createWriteStream(to);
      res.pipe(file);
      file.on('finish', () => file.close(ok));
    }).on('error', fail);
  });
}

/* The selectable countries come from the Atlas index, so the two can never
 * disagree about which 46 they are. */
function selectable() {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/atlas/index.js'), 'utf8'), ctx);
  return new Set(ctx.ATLAS.countries.map((c) => c.id));
}

/* ------------------------------------------------------------ geometry --- */

function ringArea(r) {
  let a = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
  return Math.abs(a / 2);
}
function bbox(r) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of r) { if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y; }
  return [x0, y0, x1, y1];
}

function simplify(pts, tol) {
  if (pts.length < 5) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  const t2 = tol * tol;
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len2 = dx * dx + dy * dy;
    let worst = -1, wd = 0;
    for (let i = a + 1; i < b; i++) {
      const [px, py] = pts[i];
      let d;
      if (!len2) d = (px - ax) ** 2 + (py - ay) ** 2;
      else {
        const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
        d = (px - ax - t * dx) ** 2 + (py - ay - t * dy) ** 2;
      }
      if (d > wd) { wd = d; worst = i; }
    }
    if (worst > -1 && wd > t2) { keep[worst] = 1; stack.push([a, worst], [worst, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

/* A closed ring as integer hundredths, delta-encoded: "x,y,dx,dy,...". The
 * closing point is implied. Consecutive duplicates (after rounding) go. */
function encode(ring) {
  const q = [];
  for (const [x, y] of ring) {
    const p = [Math.round(x * 100), Math.round(y * 100)];
    const last = q[q.length - 1];
    if (!last || last[0] !== p[0] || last[1] !== p[1]) q.push(p);
  }
  if (q.length > 1 && q[0][0] === q[q.length - 1][0] && q[0][1] === q[q.length - 1][1]) q.pop();
  if (q.length < 3) return null;
  const out = [q[0][0], q[0][1]];
  for (let i = 1; i < q.length; i++) out.push(q[i][0] - q[i - 1][0], q[i][1] - q[i - 1][1]);
  return out.join(',');
}

function polygonsOf(g) {
  if (!g) return [];
  return g.type === 'MultiPolygon' ? g.coordinates : g.type === 'Polygon' ? [g.coordinates] : [];
}

async function main() {
  fs.mkdirSync(CACHE, { recursive: true });
  const src = path.join(CACHE, SRC_NAME);
  if (!fs.existsSync(src)) {
    console.log('Downloading ' + SRC_URL);
    await download(SRC_URL, src);
  }
  const fc = JSON.parse(fs.readFileSync(src, 'utf8'));
  const pick = selectable();
  const shapes = [];
  const found = new Set();

  for (const f of fc.features) {
    const p = f.properties;
    if (p.ADM0_A3 === 'ATA') continue;
    const iso = /^[A-Z]{2}$/.test(p.ISO_A2_EH) ? p.ISO_A2_EH : null;
    /* Dependencies share their country's code (Clipperton is "FR"); they
     * stay grey, so selecting France means mainland France and its regions. */
    const sel = !!iso && pick.has(iso) && p.TYPE !== 'Dependency';
    /* Outer rings only: no lake or enclave in these countries is large
     * enough to matter at the sizes the Atlas draws. */
    const rings = polygonsOf(f.geometry).map((poly) => poly[0]).filter((r) => r && r.length > 3);
    if (!rings.length) continue;
    const areas = rings.map(ringArea);
    const biggest = Math.max(...areas);
    const [x0, y0, x1, y1] = bbox(rings[areas.indexOf(biggest)]);
    const diag = Math.hypot(x1 - x0, y1 - y0);

    let tol, minArea;
    if (sel) {
      tol = Math.max(0.01, Math.min(0.2, diag * 0.005));
      minArea = Math.max(0.0004, biggest * 0.0008);
    } else {
      tol = 0.12;
      minArea = Math.max(0.25, biggest * 0.01);
      if (biggest < 0.05) continue; /* micro-states and atolls nobody can select */
    }
    const kept = [];
    rings.forEach((r, i) => {
      if (areas[i] < minArea && areas[i] !== biggest) return;
      const e = encode(simplify(r, tol));
      if (e) kept.push(e);
    });
    if (!kept.length) continue;
    if (sel) found.add(iso);
    shapes.push({ id: sel ? iso : null, name: p.NAME_EN || p.NAME, r: kept });
  }

  const missing = [...pick].filter((id) => !found.has(id));
  if (missing.length) throw new Error('No geometry for: ' + missing.join(', '));

  shapes.sort((a, b) => (a.id ? 1 : 0) - (b.id ? 1 : 0)); /* greys first, so selectable outlines sit on top */
  const lines = shapes.map((s) => '    ' + JSON.stringify(s.id ? { id: s.id, r: s.r } : { r: s.r }));
  const out = `/* ---------------------------------------------------------------------------
 * Country shapes for the Atlas. GENERATED by tools/atlas-geo.js — do not edit.
 *
 * Natural Earth 1:10m Admin 0 countries, Italian point of view (public
 * domain, naturalearthdata.com), simplified. Each ring is integer hundredths
 * of a degree, delta-encoded: "lon,lat,dlon,dlat,...". Shapes with an id are
 * the 46 a reader can select; the rest are drawn grey and carry no name, so
 * nothing about them can be selected, focused or read out.
 * ------------------------------------------------------------------------- */

window.ATLAS_GEO = {
  source: 'Natural Earth 1:10m Admin 0 countries (Italian point of view), public domain',
  shapes: [
${lines.join(',\n')}
  ]
};
`;
  fs.writeFileSync(OUT, out);
  const pts = shapes.reduce((n, s) => n + s.r.reduce((m, r) => m + r.split(',').length / 2, 0), 0);
  console.log(`Wrote ${path.relative(ROOT, OUT)}: ${shapes.length} shapes (${found.size} selectable), ${Math.round(pts)} points, ${(Buffer.byteLength(out) / 1024).toFixed(1)} KB`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });

#!/usr/bin/env node
/* Picks up English strings added to the site after chunk.js froze the snapshot.
 * Re-reads the French dictionaries' keys, writes the ones no chunk covers as new
 * chunks (delta<run>-NN), appends them to the manifest as pending and refreshes
 * source-keys.json. Run again whenever the English has moved; it does nothing
 * when there is no delta.
 *
 *   node i18n/es/_meta/delta.js
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '../../..');
const MAX_WORDS = 1500;
const meta = (f) => path.join(__dirname, f);

function keys(file) {
  const d = {}, ctx = { console };
  ctx.window = ctx;
  ctx.I18N = { lang: 'fr', add: (l, e) => { if (l === 'fr') Object.assign(d, e); }, localize: () => {} };
  ctx.ATLAS = { add: () => {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), ctx, { filename: file });
  return Object.keys(d);
}
const words = (s) => s.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

const manifest = JSON.parse(fs.readFileSync(meta('manifest.json'), 'utf8'));
const have = new Set();
for (const e of manifest) Object.values(JSON.parse(fs.readFileSync(path.join(ROOT, e.source), 'utf8'))).forEach((k) => have.add(k));

const dests = ['js/i18n-es.js', 'data/i18n-es-models.js', 'data/atlas/i18n-es.js',
  ...fs.readdirSync(path.join(ROOT, 'data/atlas/fr')).filter((f) => f.endsWith('.js')).sort().map((f) => 'data/atlas/es/' + f)];
const sourceKeys = {}, fresh = [];
for (const dest of dests) {
  const origin = dest.replace('i18n-es', 'i18n-fr').replace('/es/', '/fr/');
  sourceKeys[dest] = keys(origin);
  for (const k of sourceKeys[dest]) if (!have.has(k)) { have.add(k); fresh.push([k, dest, origin]); }
}
fs.writeFileSync(meta('source-keys.json'), JSON.stringify(sourceKeys, null, 1) + '\n');
if (!fresh.length) { console.log('no new strings'); process.exit(0); }

const run = 1 + Math.max(0, ...manifest.map((e) => +(path.basename(e.source).match(/^delta(\d+)-/) || [0, 0])[1]));
const chunks = [[]];
let w = 0;
for (const f of fresh) {
  if (w && w + words(f[0]) > MAX_WORDS) { chunks.push([]); w = 0; }
  chunks[chunks.length - 1].push(f);
  w += words(f[0]);
}
let n = 0;
chunks.forEach((c, i) => {
  const name = `delta${run}-${String(i + 1).padStart(2, '0')}`, body = {};
  c.forEach(([k]) => { body[`delta${run}.${String(++n).padStart(4, '0')}`] = k; });
  fs.writeFileSync(path.join(ROOT, 'i18n/es/chunks/src', name + '.json'), JSON.stringify(body, null, 1) + '\n');
  manifest.push({ source: `i18n/es/chunks/src/${name}.json`, target: `i18n/es/chunks/es/${name}.json`,
    assembles_into: [...new Set(c.map((x) => x[1]))].join(', '), english_from: [...new Set(c.map((x) => x[2].replace('i18n-fr', 'i18n-*').replace('/fr/', '/<lang>/')))].join(', '),
    strings: c.length, words: c.reduce((s, x) => s + words(x[0]), 0), status: 'pending', notes: 'Added to the site after the first snapshot.' });
  console.log(name, c.length, 'strings', manifest[manifest.length - 1].words, 'words', manifest[manifest.length - 1].english_from);
});
fs.writeFileSync(meta('manifest.json'), JSON.stringify(manifest, null, 1) + '\n');

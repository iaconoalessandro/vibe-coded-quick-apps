#!/usr/bin/env node
/* Freezes the English to translate and splits it into worker-sized chunks.
 *
 * The site's convention is a dictionary keyed by the English (js/i18n.js).
 * The French dictionaries are the most complete list of those keys, so their
 * keys are the source snapshot; nothing French is read beyond the keys.
 * Each English string is translated once, wherever it first appears, because
 * the runtime merges every file into one dictionary.
 *
 *   node i18n/es/_meta/chunk.js     writes source-keys.json, chunks/src/, manifest.json
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '../../..');
const OUT = path.join(ROOT, 'i18n/es');
const MAX_WORDS = 1500;

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

/* origin (French file, read for its keys only) -> [chunk prefix, Spanish file in the site's convention] */
const FILES = [
  ['js/i18n-fr.js', 'ui', 'js/i18n-es.js'],
  ['data/i18n-fr-models.js', 'models', 'data/i18n-es-models.js'],
  ['data/atlas/i18n-fr.js', 'atlas-shared', 'data/atlas/i18n-es.js'],
  ...fs.readdirSync(path.join(ROOT, 'data/atlas/fr')).filter((f) => f.endsWith('.js')).sort()
    .map((f) => ['data/atlas/fr/' + f, 'atlas-' + f.slice(0, -3), 'data/atlas/es/' + f])
];

const sourceKeys = {}, manifest = [], seen = new Set();
let total = 0;
for (const [origin, prefix, dest] of FILES) {
  const all = keys(origin);
  sourceKeys[dest] = all;
  const fresh = all.filter((k) => !seen.has(k));
  fresh.forEach((k) => seen.add(k));
  const chunks = [[]];
  let w = 0;
  for (const k of fresh) {
    if (w && w + words(k) > MAX_WORDS) { chunks.push([]); w = 0; }
    chunks[chunks.length - 1].push(k);
    w += words(k);
  }
  let n = 0;
  chunks.filter((c) => c.length).forEach((c, i) => {
    const name = `${prefix}-${String(i + 1).padStart(2, '0')}`;
    const body = {};
    c.forEach((k) => { body[`${prefix}.${String(++n).padStart(4, '0')}`] = k; });
    fs.writeFileSync(path.join(OUT, 'chunks/src', name + '.json'), JSON.stringify(body, null, 1) + '\n');
    const cw = c.reduce((s, k) => s + words(k), 0);
    total += cw;
    manifest.push({ source: `i18n/es/chunks/src/${name}.json`, target: `i18n/es/chunks/es/${name}.json`,
      assembles_into: dest, english_from: origin.replace('i18n-fr', 'i18n-*').replace('/fr/', '/<lang>/'),
      strings: c.length, words: cw, status: 'pending', notes: '' });
  });
}
fs.writeFileSync(path.join(OUT, '_meta/source-keys.json'), JSON.stringify(sourceKeys, null, 1) + '\n');
fs.writeFileSync(path.join(OUT, '_meta/manifest.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log(`${seen.size} unique strings, ${total} words, ${manifest.length} chunks, ${FILES.length} Spanish files`);

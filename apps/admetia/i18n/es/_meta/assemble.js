#!/usr/bin/env node
/* Builds the Spanish dictionary files, in the site's own format, from the
 * reviewed chunks. Each file gets the keys source-keys.json lists for it, in
 * that order, and the same wrapper code as its French counterpart.
 *
 *   node i18n/es/_meta/assemble.js     writes js/i18n-es.js, data/i18n-es-models.js,
 *                                      data/atlas/i18n-es.js and data/atlas/es/, and checks them
 *
 * Refuses to build unless every chunk passes check.js with status reviewed or fixed.
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '../../..');

execFileSync('node', [path.join(__dirname, 'check.js'), '--barrier=reviewed'], { stdio: 'inherit' });

const manifest = require('./manifest.json'), sourceKeys = require('./source-keys.json');
const read = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const es = new Map();
for (const e of manifest) {
  const src = read(e.source), out = read(e.target);
  for (const id in src) es.set(src[id], out[id]);
}

const HEADER = '/* Spanish (es-ES) for students, addressed as tú. English is the lookup key.\n' +
  ' * Built by i18n/es/_meta/assemble.js from the reviewed chunks: edit the chunks\n' +
  ' * and rebuild rather than editing this file. Rules: i18n/es/_meta/style-guide.md. */\n';
const sorted = (s, re) => (String(s).match(re) || []).sort().join(' ');
const placeholders = (s) => sorted(s, /\{\w+\}/g);
const tags = (s) => (String(s).match(/<\/?[a-z][^>]*>/gi) || []).join('');

let files = 0, strings = 0;
for (const dest in sourceKeys) {
  /* Wrapper code comes from the French file: what precedes the first entry and what follows the last. */
  const fr = fs.readFileSync(path.join(ROOT, dest.replace('i18n-es', 'i18n-fr').replace('/es/', '/fr/')), 'utf8').split('\n');
  const open = fr.findIndex((l) => /I18N\.add\(/.test(l));
  let last = fr.length - 1;
  while (last > open && !/^\s*"/.test(fr[last])) last--;
  const firstCode = fr.findIndex((l, i) => i <= open && !/^\s*(\/\*|\*)/.test(l));
  const swap = (l) => l.replace(/(['"])fr\1/g, '$1es$1');
  const missing = sourceKeys[dest].filter((k) => !es.has(k));
  if (missing.length) throw new Error(`${dest}: ${missing.length} strings have no translation, e.g. ${JSON.stringify(missing[0])}; run delta.js`);
  const body = sourceKeys[dest].map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(es.get(k))}`).join(',\n');
  const text = HEADER + fr.slice(firstCode, open + 1).map(swap).join('\n') + '\n' + body + '\n' + fr.slice(last + 1).map(swap).join('\n');
  const file = path.join(ROOT, dest);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);

  /* Self-check: the file runs as the site would run it and registers exactly these keys, none broken. */
  const got = {}, ctx = { console };
  ctx.window = ctx;
  ctx.I18N = { lang: 'es', add: (l, e) => { if (l !== 'es') throw new Error(dest + ': registers ' + l); Object.assign(got, e); }, localize: () => {} };
  ctx.ATLAS = { add: () => {} };
  vm.createContext(ctx);
  vm.runInContext(text, ctx, { filename: dest });
  const keys = Object.keys(got);
  if (keys.length !== new Set(sourceKeys[dest]).size) throw new Error(`${dest}: ${keys.length} keys registered, ${sourceKeys[dest].length} expected`);
  for (const k of keys) {
    if (typeof got[k] !== 'string' || !got[k].trim()) throw new Error(`${dest}: empty value for ${JSON.stringify(k)}`);
    if (placeholders(k) !== placeholders(got[k]) || tags(k) !== tags(got[k])) throw new Error(`${dest}: placeholders or tags differ for ${JSON.stringify(k)}`);
  }
  files++; strings += keys.length;
}
console.log(`${files} files, ${strings} entries (${es.size} unique strings) written and verified`);

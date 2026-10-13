#!/usr/bin/env node
/* Structural check of translated chunks against their English source.
 *
 *   node i18n/es/_meta/check.js [chunk-name ...]      check these chunks (default: all)
 *   node i18n/es/_meta/check.js --mark=translated ... also set that status on the ones that pass
 *   node i18n/es/_meta/check.js --barrier=translated  exit 1 unless every entry passes and has at least that status
 *
 * Fails on: missing or empty target, invalid JSON, different ids or order, an
 * empty value, different {placeholders}, different tag sequence (the same rule
 * as tools/i18n-report.js), different entities, links or line breaks, or
 * changed edge whitespace. Warns on prose left identical to the English.
 */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../../..');
const MANIFEST = path.join(__dirname, 'manifest.json');
const ORDER = ['pending', 'translated', 'reviewed', 'fixed'];

const sorted = (s, re) => (String(s).match(re) || []).sort().join(' ');
const placeholders = (s) => sorted(s, /\{\w+\}/g);
const tags = (s) => (String(s).match(/<\/?[a-z][^>]*>/gi) || []).join('');
/* &amp; may become y/e (style guide), so it is not compared. A name needs two letters, so "H&M;" is not an entity. */
const entities = (s) => sorted(String(s).replace(/&amp;/g, ''), /&(?:#\d+|#x[0-9a-fA-F]+|[A-Za-z][A-Za-z0-9]+);/g);
const urls = (s) => sorted(s, /https?:\/\/[^\s"'<>)]+/g);
const breaks = (s) => (String(s).match(/\n/g) || []).length;
const edge = (s) => String(s).match(/^\s*/)[0] + '|' + String(s).match(/\s*$/)[0];

function checkChunk(e) {
  const errs = [], warns = [];
  const file = path.join(ROOT, e.target);
  if (!fs.existsSync(file) || !fs.statSync(file).size) return { errs: ['target missing or empty'], warns };
  let src, out;
  try { out = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (x) { return { errs: ['invalid JSON: ' + x.message], warns }; }
  src = JSON.parse(fs.readFileSync(path.join(ROOT, e.source), 'utf8'));
  const a = Object.keys(src), b = Object.keys(out);
  if (a.join('\n') !== b.join('\n')) {
    const missing = a.filter((k) => !(k in out)), extra = b.filter((k) => !(k in src));
    errs.push(`ids differ: ${missing.length} missing (${missing.slice(0, 5).join(', ')}), ${extra.length} extra (${extra.slice(0, 5).join(', ')})${!missing.length && !extra.length ? ', order changed' : ''}`);
  }
  for (const id of a) {
    if (!(id in out)) continue;
    const en = src[id], es = out[id];
    if (typeof es !== 'string' || !es.trim()) { errs.push(id + ': empty'); continue; }
    for (const [name, f] of [['placeholders', placeholders], ['tags', tags], ['entities', entities], ['urls', urls], ['line breaks', breaks], ['edge whitespace', edge]]) {
      if (f(en) !== f(es)) errs.push(`${id}: ${name} differ: ${JSON.stringify(f(en))} -> ${JSON.stringify(f(es))}`);
    }
    if (es === en && en.replace(/<[^>]+>/g, ' ').split(/\s+/).filter((w) => /^[a-z]{3,}/.test(w)).length >= 4) warns.push(id + ': identical to the English');
  }
  return { errs, warns };
}

const args = process.argv.slice(2);
const opt = (n) => { const a = args.find((x) => x.startsWith('--' + n + '=')); return a && a.split('=')[1]; };
const mark = opt('mark'), barrier = opt('barrier');
const names = args.filter((a) => !a.startsWith('--'));
const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const name = (e) => path.basename(e.source, '.json');
let failed = 0, warned = 0;
for (const e of manifest) {
  if (names.length && !names.includes(name(e))) continue;
  if (!names.length && !barrier && e.status === 'pending' && !fs.existsSync(path.join(ROOT, e.target))) continue;
  const r = checkChunk(e);
  warned += r.warns.length;
  if (r.errs.length) {
    failed++;
    console.log(`FAIL ${name(e)}\n  ` + r.errs.slice(0, 12).join('\n  ') + (r.errs.length > 12 ? `\n  … ${r.errs.length - 12} more` : ''));
  } else {
    if (r.warns.length) console.log(`warn ${name(e)}: ` + r.warns.join('; '));
    if (mark && ORDER.indexOf(mark) > ORDER.indexOf(e.status)) e.status = mark;
  }
  if (barrier && ORDER.indexOf(e.status) < ORDER.indexOf(barrier)) { failed++; console.log(`NOT ${barrier.toUpperCase()} ${name(e)} (${e.status})`); }
}
if (mark) fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1) + '\n');
const tally = {};
manifest.forEach((e) => { tally[e.status] = (tally[e.status] || 0) + 1; });
console.log(`${failed} failing, ${warned} warnings; manifest: ${JSON.stringify(tally)}`);
process.exit(failed ? 1 : 0);

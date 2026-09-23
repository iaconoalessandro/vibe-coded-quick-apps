#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * How complete the Italian is, and whether it still matches the English.
 *
 *   node tools/i18n-report.js        summary
 *   node tools/i18n-report.js -v     every missing and stale string
 *
 * missing  English prose in the models with no Italian entry. It shows in
 *          English on the Italian site until one is added to
 *          data/i18n-it-models.js. Names of schools, companies and tests are
 *          left untranslated on purpose and show up here too.
 * stale    Italian entries whose English no longer appears anywhere — the
 *          English was edited, so the entry needs its key updating.
 * broken   an entry whose Italian drops or invents a {placeholder} or an
 *          HTML tag. tests/i18n-test.js fails on these.
 *
 * Also exported for the test: require('./tools/i18n-report.js').check().
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const MODELS = ['data/conversions.js', 'data/masters-model.js', 'data/it-model.js', 'data/it-evidence.js',
  'data/mba-model.js', 'data/deadlines.js'];
const GLOBALS = ['MASTERS_MODEL', 'IT_MODEL', 'MBA_MODEL', 'IT_EVIDENCE', 'ADMISSIONS_CALENDAR'];
/* The same prose fields js/i18n.js translates. */
const ALLOW = new Set(['label', 'blurb', 'help', 'note', 'because', 'v', 'k', 'why', 'intro', 'heading', 'detail',
  'title', 'short', 'full', 'from', 'window', 'source', 'unit', 'name', 'items']);
const PAGES = ['index.html', 'business.html', 'it.html', 'mba.html', 'masters.html', 'computing.html'];

function dictionary() {
  const dict = {};
  const ctx = { console };
  ctx.window = ctx;
  ctx.I18N = { lang: 'it', add: (l, d) => Object.assign(dict, d), localize: () => {} };
  vm.createContext(ctx);
  for (const f of ['js/i18n-it.js', 'data/i18n-it-models.js']) vm.runInContext(read(f), ctx, { filename: f });
  return dict;
}

/* Prose in the models, field by field, as js/i18n.js would see it. */
function modelStrings() {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const f of MODELS) vm.runInContext(read(f), ctx, { filename: f });
  const out = new Map();
  for (const g of GLOBALS) {
    const seen = new Set();
    (function walk(o, key) {
      if (!o || typeof o !== 'object' || seen.has(o)) return;
      seen.add(o);
      const arr = Array.isArray(o);
      for (const k of Object.keys(o)) {
        const v = o[k], eff = arr ? key : k;
        if (typeof v === 'string') {
          if (ALLOW.has(eff) && /[a-z]{2}/.test(v) && eff !== 'name' && !out.has(v)) out.set(v, g + '.' + eff);
        } else if (v && typeof v === 'object' && !(v instanceof RegExp)) walk(v, eff);
      }
    }(ctx[g], null));
  }
  return out;
}

/* Every string literal in the interface scripts, with 'a' + 'b' runs joined
 * the way the code joins them. */
function scriptStrings() {
  const out = new Set();
  const files = fs.readdirSync(path.join(ROOT, 'js')).filter((f) => f.endsWith('.js') && !/^i18n/.test(f));
  for (const f of files) {
    const src = read('js/' + f);
    const toks = [];
    for (let i = 0; i < src.length;) {
      const c = src[i];
      if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
      if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2) + 2; continue; }
      if (c === "'" || c === '"') {
        let j = i + 1, s = '';
        while (src[j] !== c) {
          if (src[j] === '\\') {
            const n = src[j + 1];
            if (n === 'u') { s += String.fromCharCode(parseInt(src.substr(j + 2, 4), 16)); j += 6; } else { s += n === 'n' ? '\n' : n; j += 2; }
            continue;
          }
          s += src[j]; j++;
        }
        toks.push({ s, start: i, end: j + 1 });
        i = j + 1;
        continue;
      }
      /* A regular expression literal: skip it whole, so its quotes do not
       * start a string. */
      if (c === '/' && /[=(,:!&|?{};\n]\s*$/.test(src.slice(Math.max(0, i - 20), i))) {
        let j = i + 1;
        while (j < src.length && src[j] !== '/') {
          if (src[j] === '\\') j++;
          else if (src[j] === '[') { while (src[j] !== ']') { if (src[j] === '\\') j++; j++; } }
          j++;
        }
        i = j + 1;
        continue;
      }
      i++;
    }
    for (let k = 0; k < toks.length; k++) {
      let s = toks[k].s, end = toks[k].end;
      while (k + 1 < toks.length && /^\s*\+\s*$/.test(src.slice(end, toks[k + 1].start))) { k++; s += toks[k].s; end = toks[k].end; }
      out.add(s);
    }
  }
  return out;
}

/* Both as written and with entities decoded: paragraphs are looked up by
 * their innerHTML (entities kept), titles and attributes by their text. */
function pagesText() {
  const raw = PAGES.map((p) => read(p).replace(/\s+/g, ' ')).join('\n');
  const decoded = raw.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  return raw + '\n' + decoded;
}

const placeholders = (s) => (String(s).match(/\{\w+\}/g) || []).sort().join(' ');
const tags = (s) => (String(s).match(/<\/?[a-z][^>]*>/gi) || []).join('');

function check() {
  const dict = dictionary();
  const models = modelStrings();
  const scripts = scriptStrings();
  const html = pagesText();
  /* Round labels and regions arrive through the models' own fields. */
  const extra = new Set();
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const f of MODELS) vm.runInContext(read(f), ctx, { filename: f });
  Object.values(ctx.ADMISSIONS_CALENDAR.schools).forEach((e) => (e.rounds || []).forEach((r) => extra.add(r[0])));
  [...ctx.MASTERS_MODEL.schools, ...ctx.IT_MODEL.schools, ...ctx.MBA_MODEL.generalSchools, ...ctx.MBA_MODEL.adjustedSchools]
    .forEach((s) => { extra.add(s.region); if (s.test) extra.add(s.test.policy); });
  [ctx.MASTERS_MODEL.tracks, ctx.IT_MODEL.tracks].forEach((t) => Object.values(t).forEach((x) => extra.add(x.name)));
  [...ctx.MASTERS_MODEL.excluded, ...ctx.IT_MODEL.excluded].forEach((x) => extra.add(x.name));

  const missing = [...models.keys()].filter((s) => dict[s] === undefined);
  const stale = Object.keys(dict).filter((k) => !models.has(k) && !scripts.has(k) && !extra.has(k) && html.indexOf(k) === -1);
  const broken = Object.keys(dict).filter((k) => placeholders(k) !== placeholders(dict[k]) || tags(k) !== tags(dict[k]));
  return { dict, models, missing, stale, broken };
}

module.exports = { check };

if (require.main === module) {
  const verbose = process.argv.includes('-v');
  const r = check();
  const n = Object.keys(r.dict).length;
  console.log(`Italian entries: ${n}`);
  console.log(`Model prose without Italian: ${r.missing.length} of ${r.models.size} (names of schools, companies and tests are left in English on purpose)`);
  if (verbose) r.missing.forEach((s) => console.log('  missing  ' + JSON.stringify(s)));
  console.log(`Entries whose English no longer appears: ${r.stale.length}`);
  r.stale.forEach((s) => console.log('  stale    ' + JSON.stringify(s)));
  console.log(`Entries with mismatched {placeholders} or tags: ${r.broken.length}`);
  r.broken.forEach((s) => console.log('  broken   ' + JSON.stringify(s) + '\n        -> ' + JSON.stringify(r.dict[s])));
}

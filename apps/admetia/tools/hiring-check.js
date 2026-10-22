#!/usr/bin/env node
/* Checks the "How hiring works" files against the full plan: every country has
 * the same rows, every line has Italian with the same numbers and a source (or
 * 'ours'), every route, field, verdict and programme uses the shared vocabulary,
 * and the Working there block holds the fixed set of rows.
 *
 *   node tools/hiring-check.js            all 46 countries
 *   node tools/hiring-check.js de fr it   only those
 *
 * Also required by tests/atlas-test.js. Exit code 1 if anything fails. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

function load() {
  const ctx = { console, Math, Object, String, Number, Array, JSON, Date, RegExp, localStorage: { getItem: () => null, setItem() {} } };
  ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/i18n.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/atlas/index.js'), 'utf8'), ctx);
  const A = ctx.ATLAS, broken = [];
  const run = (rel) => { try { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel }); } catch (e) { broken.push(rel + ': ' + e.message); } };
  fs.readdirSync(path.join(ROOT, 'data/atlas')).filter((f) => /^[a-z]{2}\.js$/.test(f)).forEach((f) => run('data/atlas/' + f));
  fs.readdirSync(path.join(ROOT, 'data/atlas/entry')).filter((f) => /^[a-z]{2}\.js$/.test(f)).forEach((f) => run('data/atlas/entry/' + f));
  return { A, broken };
}
const numsOf = (s) => (String(s).match(/\d{1,3}(?:[., ]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/g) || []).map((n) => n.replace(/[., ]/g, '')).sort().join(' ');
const isDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !isNaN(Date.parse(d));

function check(only) {
  const { A, broken } = load();
  const problems = {}, info = { ours: {}, counts: {} };
  const want = (only || []).map((x) => x.toUpperCase());
  const ids = A.countries.map((c) => c.id).filter((id) => !want.length || want.includes(id));
  const ids_ = (list) => new Set(list.map((x) => x.id));
  const FIELD = ids_(A.entryFields), ROUTE = ids_(A.entryRoutes), PATH = ids_(A.entryPaths), BASIS = ids_(A.entryBasis);
  const LANG = ids_(A.entryLang), INTL = ids_(A.entryIntl), ROWS = A.entryRows.map((r) => r.id);
  const CUS = {}; A.entryCustoms.forEach((C) => { CUS[C.id] = new Set(C.values.map((v) => v.id)); });
  const FG = {}; A.entryFields.forEach((F) => { FG[F.id] = F.g; });
  broken.forEach((b) => (problems.FILES = problems.FILES || []).push(b));
  for (const id of ids) {
    const bad = (m) => (problems[id] = problems[id] || []).push(m);
    const e = A.entries[id], rec = A.records[id];
    if (!e) { bad('no hiring file'); continue; }
    if (!isDate(e.checked) || !/^\d{4}-\d{2}-\d{2}$/.test(e.review) || e.review <= e.checked) bad('dates ' + e.checked + ' → ' + e.review);
    const used = new Set();
    const line = (x, w) => {
      if (!Array.isArray(x) || typeof x[0] !== 'string' || typeof x[1] !== 'string' || !x[0].length || !x[1].length) { bad(w + ': not an [English, Italian, ids] triple'); return; }
      if (numsOf(x[0]) !== numsOf(x[1])) bad(w + ': the Italian has other numbers: ' + x[0].slice(0, 50));
      const ks = String(x[2] || '').split(/\s+/).filter(Boolean);
      if (!ks.length) bad(w + ': cites nothing (a source id, or ours)');
      ks.forEach((k) => { if (k === 'ours') info.ours[id] = (info.ours[id] || 0) + 1; else if (!(e.sources || {})[k]) bad(w + ': ' + k + ' is not in the sources'); else used.add(k); });
    };
    const lines = (xs, w) => { if (!Array.isArray(xs) || !xs.length) bad(w + ': empty'); else xs.forEach((x, i) => line(x, w + ' ' + i)); };
    const cite = (s, w) => { String(s || '').split(/\s+/).filter(Boolean).forEach((k) => { if (k === 'ours') info.ours[id] = (info.ours[id] || 0) + 1; else if (!(e.sources || {})[k]) bad(w + ': ' + k + ' is not in the sources'); else used.add(k); }); };

    lines(e.lead, 'lead');
    if (!Array.isArray(e.ways) || e.ways.length < 3) bad('ways: need at least 3, ranked');
    (e.ways || []).forEach((wy, i) => {
      if (!Array.isArray(wy.name) || !wy.name[0] || !wy.name[1]) bad('way ' + i + ': name is not an [English, Italian] pair');
      if (!ROUTE.has(wy.r)) bad('way ' + i + ': r "' + wy.r + '" is not a route');
      const ps = String(wy.p || '').split(/\s+/).filter(Boolean);
      if (!ps.length || ps.some((x) => !PATH.has(x))) bad('way ' + i + ': p "' + wy.p + '" must list paths: ' + [...PATH].join(' '));
      if (!BASIS.has(wy.basis)) bad('way ' + i + ': basis "' + wy.basis + '"');
      lines(wy.t, 'way ' + i);
    });
    ['cycle', 'schools', 'events'].forEach((k) => lines(e[k], k));
    (e.fields || []).forEach((x) => { if (!FIELD.has(x.f)) bad('field ' + x.f); lines(x.t, 'field ' + x.f); });
    ['biz', 'it'].forEach((g) => { if (!(e.fields || []).some((x) => FG[x.f] === g)) bad('no ' + g + ' field'); });

    const seen = new Set();
    (e.customs || []).forEach((x) => {
      if (!CUS[x.k]) { bad('custom ' + x.k + ' is not in the vocabulary'); return; }
      if (!CUS[x.k].has(x.v)) bad('custom ' + x.k + ': value "' + x.v + '" must be one of ' + [...CUS[x.k]].join(' '));
      if (seen.has(x.k)) bad('custom ' + x.k + ' twice'); seen.add(x.k);
      lines(x.t, 'custom ' + x.k);
    });
    Object.keys(CUS).forEach((k) => { if (!seen.has(k)) bad('custom ' + k + ' is missing'); });

    ROWS.forEach((r) => lines((e.rows || {})[r], 'rows.' + r));
    Object.keys(e.rows || {}).forEach((r) => { if (!ROWS.includes(r)) bad('rows.' + r + ' is not a known row'); });

    if (!Array.isArray(e.lang) || e.lang.length < 3) bad('lang: need at least 3 fields');
    (e.lang || []).forEach((x) => {
      if (!FIELD.has(x.f)) bad('lang: field ' + x.f);
      if (!LANG.has(x.v)) bad('lang ' + x.f + ': v "' + x.v + '" must be ' + [...LANG].join(' '));
      lines(x.t, 'lang ' + x.f);
    });
    ['biz', 'it'].forEach((g) => { if (!(e.lang || []).some((x) => FG[x.f] === g)) bad('lang: no ' + g + ' field'); });

    if (!Array.isArray(e.programmes) || e.programmes.length < 3) bad('programmes: need at least 3');
    (e.programmes || []).forEach((p, i) => {
      const w = 'programme ' + i + ' (' + (p.n || '?') + ')';
      if (!p.n || !p.o) bad(w + ': name and employer');
      if (!FIELD.has(p.f)) bad(w + ': field ' + p.f);
      if (p['in'] != null && typeof p['in'] !== 'number') bad(w + ': in must be a number or null');
      if (p.w != null && !(Array.isArray(p.w) && p.w.length === 2 && p.w.every((m) => m >= 1 && m <= 12))) bad(w + ': w must be null or [firstMonth, lastMonth]');
      if (!p.lang || typeof p.lang !== 'string') bad(w + ': lang, e.g. "DE EN"');
      if (!INTL.has(p.intl)) bad(w + ': intl "' + p.intl + '" must be ' + [...INTL].join(' '));
      if (!String(p.ids || '').trim()) bad(w + ': ids (a source id or ours)'); else cite(p.ids, w);
    });
    if (e.outcomes !== undefined) lines(e.outcomes, 'outcomes');

    Object.keys(e.sources || {}).forEach((k) => {
      const s = e.sources[k];
      if (!Array.isArray(s) || !A.tags.includes(s[0])) bad(k + ': tag ' + (s && s[0]));
      else if (!s[1] || !/^(https?:\/\/|research\/)/.test(s[2] || '') || !isDate(s[3])) bad(k + ': title, link or date missing');
      if (!used.has(k)) bad(k + ': not cited');
    });

    /* Working there: the fixed set. */
    const have = new Set(((rec && rec.work) || []).map((w) => w.k));
    A.workRows.forEach((k) => { if (!have.has(k)) bad('Working there: no "' + k + '" row'); });
    ((rec && rec.work) || []).forEach((w) => { if (!A.workRows.includes(w.k) && !/pay|rent|tax|cost|salar|income/i.test(w.k)) bad('Working there: "' + w.k + '" is not a fixed row (rename it to one of ' + A.workRows.join(', ') + ' or make it a pay/cost row)'); });
    info.counts[id] = [(e.ways || []).length, (e.programmes || []).length, Object.keys(e.sources || {}).length].join('/');
  }
  return { problems, info, ids };
}
module.exports = { check };

if (require.main === module) {
  const r = check(process.argv.slice(2));
  const bad = Object.keys(r.problems);
  bad.forEach((k) => { console.log('FAIL ' + k + ' (' + r.problems[k].length + ')'); r.problems[k].slice(0, 12).forEach((m) => console.log('     ' + m)); if (r.problems[k].length > 12) console.log('     … ' + (r.problems[k].length - 12) + ' more'); });
  console.log((r.ids.length - bad.filter((k) => r.ids.includes(k)).length) + ' of ' + r.ids.length + ' countries pass');
  console.log('(info) own-reading lines: ' + Object.keys(r.info.ours).map((k) => k + ' ' + r.info.ours[k]).join(', '));
  process.exit(bad.length ? 1 : 0);
}

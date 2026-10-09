/* The Atlas (map.html, js/page-map.js, data/atlas/).
 *
 *   countries   exactly the 46 the product brief lists, 25 in Europe, and a
 *               shape for each; nothing else on the map can be selected
 *   records     one file per country, every required field present
 *   claims      every statement tagged, sourced and dated, and used
 *   ratings     every demand level rests on claims, by the method in
 *               data/atlas/index.js; "dominant" needs an official source
 *   visas       one visa file per country, from its research folder: every
 *               line cites the country's source register, the sources at
 *               its foot match the register, the Italian keeps the numbers,
 *               every passport in scope has something to read
 *   scope       no route content where neither end is in Europe
 *   links       calculator programmes a hub lists exist, on that track
 *   privacy     nothing chosen on the map is sent or kept, bar the passport
 *   wiring      the page is built, cached offline and in every page's nav
 *   design      square controls, 44px markers, no italic headline accents
 *
 * The Italian side (every sentence translated, numbers kept) is in
 * tests/i18n-test.js. */

const fs = require('fs'), path = require('path'), vm = require('vm');
const APP = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(APP, f), 'utf8');

let pass = 0, fail = 0;
function t(label, cond, extra) { if (cond) { pass++; console.log('PASS  ' + label); } else { fail++; console.log('FAIL  ' + label + (extra ? '  → ' + extra : '')); } }

/* ------------------------------------------------------------ loading --- */
const ctx = { console, Math, Object, String, Number, Array, JSON, Date, RegExp, Promise };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ['data/atlas/index.js', 'data/atlas/geo.js']) vm.runInContext(read(f), ctx, { filename: f });
const A = ctx.ATLAS, G = ctx.ATLAS_GEO;
const files = fs.readdirSync(path.join(APP, 'data/atlas')).filter((f) => /^[a-z]{2}\.js$/.test(f));
/* A record that does not even run is reported, not fatal, so the others are still checked. */
const broken = [];
for (const f of files) { try { vm.runInContext(read('data/atlas/' + f), ctx, { filename: f }); } catch (e) { broken.push(f + ': ' + e.message); } }
t('every record file runs', broken.length === 0, broken.join(' | '));
const R = A.records;

/* ---------------------------------------------------------- countries --- */
const EUROPE = ['Portugal', 'Spain', 'France', 'Malta', 'Italy', 'Switzerland', 'Iceland', 'Ireland', 'United Kingdom',
  'Denmark', 'Belgium', 'Luxembourg', 'Netherlands', 'Austria', 'Germany', 'Norway', 'Sweden', 'Finland', 'Poland',
  'Lithuania', 'Estonia', 'Czech Republic', 'Greece', 'Romania', 'Bulgaria'];
const OUTSIDE = ['United States', 'Canada', 'Russia', 'Turkey', 'Israel', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait',
  'United Arab Emirates', 'Malaysia', 'Thailand', 'Singapore', 'Vietnam', 'Taiwan', 'China', 'Australia', 'New Zealand',
  'Japan', 'South Korea', 'Hong Kong'];
const names = (eu) => A.countries.filter((c) => c.europe === eu).map((c) => c.name).sort();
t('exactly 46 selectable countries', A.countries.length === 46, String(A.countries.length));
t('the 25 European ones are the brief’s 25 (UK, Switzerland, Norway, Iceland included)', JSON.stringify(names(true)) === JSON.stringify(EUROPE.slice().sort()), names(true).join(', '));
t('the 21 outside Europe are the brief’s 21 (Hong Kong and Taiwan separate)', JSON.stringify(names(false)) === JSON.stringify(OUTSIDE.slice().sort()), names(false).join(', '));
t('country ids are unique ISO-style codes', new Set(A.countries.map((c) => c.id)).size === 46 && A.countries.every((c) => /^[A-Z]{2}$/.test(c.id)));
const ids = new Set(A.countries.map((c) => c.id));
const shapeIds = G.shapes.filter((s) => s.id).map((s) => s.id);
t('every selectable country has exactly one shape', A.countries.every((c) => shapeIds.filter((x) => x === c.id).length === 1), A.countries.filter((c) => !shapeIds.includes(c.id)).map((c) => c.id).join(' '));
t('no other shape carries an id, so nothing else can be selected', shapeIds.every((x) => ids.has(x)) && shapeIds.length === 46);
t('the five tiny places are always marked', ['SG', 'HK', 'MT', 'LU', 'KW'].every((id) => A.byId[id].marker === true));
t('the map has the rest of the world in grey (100+ unnamed shapes)', G.shapes.filter((s) => !s.id).length > 100);

/* The shapes' extent, for checking hub coordinates. */
function bboxOf(id) {
  const s = G.shapes.find((x) => x.id === id);
  let b = [Infinity, Infinity, -Infinity, -Infinity];
  s.r.forEach((r) => { const a = r.split(',').map(Number); let x = 0, y = 0; for (let i = 0; i < a.length; i += 2) { x += a[i]; y += a[i + 1]; b = [Math.min(b[0], x / 100), Math.min(b[1], y / 100), Math.max(b[2], x / 100), Math.max(b[3], y / 100)]; } });
  return b;
}

/* ------------------------------------------------------------ records --- */
/* Local date: a page read this morning in Europe is not "in the future" because UTC is still yesterday. */
const NOW = new Date();
const TODAY = [NOW.getFullYear(), NOW.getMonth() + 1, NOW.getDate()].map((n) => String(n).padStart(2, '0')).join('-');
const isDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !isNaN(Date.parse(d)) && d <= TODAY;
const ROLE = new Set(A.roles.map((r) => r.id)), FIN = new Set(A.financeRoles.map((r) => r.id));
const LEVEL = new Set(A.levels.map((l) => l.id));
const METRIC = new Set(A.metrics.map((m) => m.id)), AREA = new Set(A.areas.map((a) => a.id));
t('fourteen role families, eight finance sub-roles, four levels', ROLE.size === 14 && FIN.size === 8 && LEVEL.size === 4);
t('three standing scales, five steps, four metrics; every country has a region that is a map view', A.scales.length === 3 && A.steps.length === 5 && METRIC.size === 4 && A.countries.every((c) => A.views.some((v) => v.id === c.region && v.id !== 'world')));
t('every role family has adjacent paths to other families', A.roles.every((r) => (A.adjacent[r.id] || []).length >= 2 && A.adjacent[r.id].every((x) => ROLE.has(x) && x !== r.id)));

const missingRecords = A.countries.filter((c) => !R[c.id]).map((c) => c.id);
t('every country has a record (data/atlas/<id>.js)', missingRecords.length === 0, missingRecords.join(' '));
t('each record file holds the country it is named after', files.every((f) => R[f.slice(0, 2).toUpperCase()] && R[f.slice(0, 2).toUpperCase()].id === f.slice(0, 2).toUpperCase()));

/* Calculator programmes, for the hub links. */
const mctx = { console, Math, Object, String, Number, parseFloat, isNaN, Infinity };
mctx.window = mctx;
vm.createContext(mctx);
['data/conversions.js', 'data/masters-model.js', 'data/computing-model.js', 'data/mba-model.js'].forEach((f) => vm.runInContext(read(f), mctx, { filename: f }));
const PROG = {};
mctx.MASTERS_MODEL.schools.forEach((s) => { PROG['masters:' + s.id] = s; });
mctx.IT_MODEL.schools.forEach((s) => { PROG['computing:' + s.id] = s; });
const MBA = new Set([...mctx.MBA_MODEL.generalSchools, ...mctx.MBA_MODEL.adjustedSchools].map((s) => s.name));

const problems = {};
function bad(id, msg) { (problems[id] = problems[id] || []).push(msg); }

Object.values(R).forEach((rec) => {
  const id = rec.id, c = A.byId[id];
  if (!c) { bad(id, 'not one of the 46'); return; }
  const C = rec.claims || {};
  const used = new Set();
  const use = (cid, where) => { if (!C[cid]) bad(id, where + ': no claim ' + cid); used.add(cid); };

  if (!isDate(rec.checked)) bad(id, 'checked date');
  if (!/^P\d+$/.test(rec.log || '')) bad(id, 'log id');
  if (!rec.summary || rec.summary.length < 60) bad(id, 'summary');
  if (!(rec.sectors || []).length) bad(id, 'sectors');
  /* May be empty: then the overview says no family is rated strong anywhere. */
  if (!Array.isArray(rec.roles) || !rec.roles.every((r) => ROLE.has(r))) bad(id, 'roles');
  if (!(rec.hubs || []).length) bad(id, 'hubs');
  /* "Most-requested roles" in the overview are not a separate opinion: each
   * must be rated dominant or strong in at least one of the country's hubs. */
  (rec.roles || []).forEach((r) => {
    const top = (rec.hubs || []).some((h) => { const d = (h.demand || {})[r]; return Array.isArray(d) && (d[0] === 'dominant' || d[0] === 'strong'); });
    if (!top) bad(id, 'most-requested role ' + r + ' is not rated strong or dominant in any hub');
  });

  const box = bboxOf(id), hubIds = new Set();
  (rec.hubs || []).forEach((h) => {
    const w = 'hub ' + h.id;
    if (!/^[a-z0-9-]+$/.test(h.id) || hubIds.has(h.id)) bad(id, w + ': id'); hubIds.add(h.id);
    if (!h.name || !h.knownFor || !(h.sectors || []).length) bad(id, w + ': name, knownFor or sectors');
    if (typeof h.lat !== 'number' || typeof h.lon !== 'number') bad(id, w + ': coordinates');
    else if (h.lon < box[0] - 0.6 || h.lon > box[2] + 0.6 || h.lat < box[1] - 0.6 || h.lat > box[3] + 0.6) bad(id, w + ': outside the country (' + h.lat + ',' + h.lon + ')');
    if (!(h.why || []).length) bad(id, w + ': why');
    (h.why || []).forEach((cid) => use(cid, w + ' why'));
    if (!(h.employers || []).length) bad(id, w + ': employers');
    (h.employers || []).forEach((e) => { if (!e.name === !e.t) bad(id, w + ': employer needs a name or a label, not both'); if (e.c) use(e.c, w + ' employer'); });
    const D = h.demand || {};
    A.roles.forEach((r) => { if (!(r.id in D)) bad(id, w + ': demand misses ' + r.id); });
    Object.keys(D).forEach((k) => { if (!ROLE.has(k)) bad(id, w + ': unknown family ' + k); });
    const rated = [];
    function rating(k, v) {
      if (v === A.GAP) return;
      if (!Array.isArray(v) || !LEVEL.has(v[0]) || v.length < 2) { bad(id, w + ': ' + k + ' is not [level, claims…] or gap'); return; }
      v.slice(1).forEach((cid) => use(cid, w + ' ' + k));
      const tags = v.slice(1).map((cid) => C[cid] && C[cid].tag);
      if (v[0] === 'dominant' && !tags.includes('data')) bad(id, w + ': ' + k + ' dominant without an official or statistical claim');
      if (v[0] === 'strong' && !(tags.includes('data') || v.length >= 3)) bad(id, w + ': ' + k + ' strong needs a statistic or two claims');
      if ((v[0] === 'dominant' || v[0] === 'strong') && tags.every((x) => x === 'anecdotal')) bad(id, w + ': ' + k + ' rests on anecdote');
      rated.push(k);
    }
    Object.keys(D).forEach((k) => rating(k, D[k]));
    /* A hub may rate nothing only when the record says so in its gaps. */
    if (!rated.length && !(rec.gaps || []).some((g) => /^No family is rated/.test(g))) bad(id, w + ': no family rated at all');
    if (h.finance) {
      Object.keys(h.finance).forEach((k) => { if (!FIN.has(k)) bad(id, w + ': unknown finance role ' + k); rating(k, h.finance[k]); });
    }
    /* Standing: [national, regional, world] steps of 1–5 for a role family,
     * never rising with the area, each resting on claims (index.js). */
    const fams = new Set();
    (h.standing || []).forEach((st) => {
      const sw = w + ' standing ' + st.f;
      if (!ROLE.has(st.f) || fams.has(st.f)) bad(id, sw + ': unknown or repeated family'); fams.add(st.f);
      const s3 = st.s || [];
      if (s3.length !== 3 || !s3.every((n) => Number.isInteger(n) && n >= 1 && n <= 5)) { bad(id, sw + ': needs three steps of 1–5'); return; }
      if (s3[1] > s3[0] || s3[2] > s3[1]) bad(id, sw + ': a wider area cannot rank higher than a narrower one');
      if (!(st.c || []).length) bad(id, sw + ': no claims');
      (st.c || []).forEach((cid) => use(cid, sw));
      const tg = (st.c || []).map((cid) => C[cid] && C[cid].tag);
      if ((s3[1] >= 4 || s3[2] >= 4) && tg.every((x) => x === 'anecdotal')) bad(id, sw + ': a 4 or 5 beyond the country rests on anecdote');
      if (s3[0] === 5 && !tg.some((x) => x === 'data' || x === 'practitioner consensus')) bad(id, sw + ': national 5 needs data or practitioner consensus');
    });
    /* Metrics: a number with its own unit, area, year, tag, source and date. */
    Object.keys(h.metrics || {}).forEach((k) => {
      const m = h.metrics[k], mw = w + ' metric ' + k;
      if (!METRIC.has(k)) { bad(id, mw + ': unknown metric'); return; }
      if (typeof m.v !== 'number' || !(m.v > 0)) bad(id, mw + ': value');
      if (k === 'pop' && (m.v < 5000 || m.v > 60e6)) bad(id, mw + ': population out of range ' + m.v);
      if (k !== 'pop' && !/^[A-Z]{3}$/.test(m.cur || '')) bad(id, mw + ': currency code');
      if (k === 'wage' && ['mean', 'median'].indexOf(m.basis) < 0) bad(id, mw + ': basis must be mean or median');
      if (!Number.isInteger(m.year) || m.year < 2015 || m.year > NOW.getFullYear()) bad(id, mw + ': year');
      if (!AREA.has(m.area)) bad(id, mw + ': area');
      if (A.tags.indexOf(m.tag) < 0) bad(id, mw + ': tag');
      if (!m.by || !isDate(m.seen)) bad(id, mw + ': source name or date');
      if (!/^https:\/\//.test(m.src || '') && !(/^research\/[\w.\/-]+\.md$/.test(m.src || '') && fs.existsSync(path.join(APP, m.src)))) bad(id, mw + ': source');
    });
    (h.programmes || []).forEach((p) => {
      if (p.calc === 'mba') { if (!MBA.has(p.name.replace(/ \(MBA\)$/, ''))) bad(id, w + ': no MBA school ' + p.name); return; }
      const s = PROG[p.calc + ':' + p.id];
      if (!s) { bad(id, w + ': no programme ' + p.calc + ':' + p.id); return; }
      if (s.name !== p.name) bad(id, w + ': programme name differs from the model (' + s.name + ')');
      if ((s.tracks || [s.track]).indexOf(p.track) < 0) bad(id, w + ': ' + p.id + ' is not on track ' + p.track);
    });
  });

  /* Routes live in the visa files now (below); a record carries none. */
  if (rec.route) bad(id, 'route: visas and permits come from data/atlas/visas/' + id.toLowerCase() + '.js');
  ['work'].forEach((sec) => {
    if (!(rec[sec] || []).length) bad(id, sec);
    (rec[sec] || []).forEach((it) => { if (!it.k) bad(id, sec + ' label'); (it.c || []).forEach((cid) => use(cid, sec)); });
  });
  (rec.arrival || []).forEach((it) => { if (!it.k) bad(id, 'arrival label'); (it.c || []).forEach((cid) => use(cid, 'arrival')); });
  (rec.advisory || []).forEach((cid) => use(cid, 'advisory'));
  (rec.briefs || []).forEach((b) => { if (!fs.existsSync(path.join(APP, 'research', b[0]))) bad(id, 'brief not found: ' + b[0]); });

  /* Claims: tag, source, date — and none left unused. */
  Object.keys(C).forEach((cid) => {
    const x = C[cid];
    if (!x.t || x.t.length < 20) bad(id, cid + ': text');
    if (A.tags.indexOf(x.tag) < 0) bad(id, cid + ': tag ' + x.tag);
    if (!x.by) bad(id, cid + ': source name');
    if (!isDate(x.seen)) bad(id, cid + ': date ' + x.seen);
    if (/^https:\/\//.test(x.src)) { /* fine */ }
    else if (/^research\/[\w.\/-]+\.md$/.test(x.src)) { if (!fs.existsSync(path.join(APP, x.src))) bad(id, cid + ': library file missing'); }
    else bad(id, cid + ': source must be https or a research brief');
    if (!used.has(cid)) bad(id, cid + ': never shown');
  });
});
const probs = Object.keys(problems);
t('every record passes the schema, claim and rating checks', probs.length === 0,
  probs.slice(0, 4).map((k) => k + ': ' + problems[k].slice(0, 4).join('; ')).join(' | '));
Object.values(R).forEach((rec) => t('  ' + rec.id + ': ' + Object.keys(rec.claims).length + ' claims, ' + rec.hubs.length + ' hub' + (rec.hubs.length === 1 ? '' : 's'), !problems[rec.id], (problems[rec.id] || []).join('; ')));
t('the adjacent-paths basis is itself a tagged, dated claim', A.tags.includes(A.adjacentBasis.tag) && isDate(A.adjacentBasis.seen) && fs.existsSync(path.join(APP, A.adjacentBasis.src)));

/* -------------------------------------------------------------- scope --- */
t('scope: a US passport to Singapore is out of scope', A.inScope('us', 'SG') === false);
t('scope: another passport to Australia is out of scope', A.inScope('other', 'AU') === false);
t('scope: an EU passport to Singapore, a UK passport to the US are in scope', A.inScope('eu', 'SG') && A.inScope('uk', 'US'));
t('scope: every passport to a European country is in scope', A.countries.filter((c) => c.europe).every((c) => A.passports.every((p) => A.inScope(p.id, c.id))));
t('scope: a US passport to the US is home, not a route', A.isHome('us', 'US') && A.isHome('uk', 'GB') && !A.isHome('eu', 'DE'));
const pm = read('js/page-map.js');
t('claims carry a note number; their sources are listed once at the foot of the page, by section',
  /function claim\(rec, cid, tagName\)[\s\S]*?appendClaim/.test(pm) && /function appendClaim[\s\S]*?cite\(\[noteOf\(c\)\]\)/.test(pm) && /page\._notes = el\('section', 'atlas-notes'\)/.test(pm));
t('the page says "outside Admetia’s scope" instead of answering', /Outside Admetia’s scope/.test(pm) && /!A\.inScope\(pid, rec\.id\)/.test(pm));

/* -------------------------------------------------------------- visas --- */
const VS = require('../tools/visas-sources.js');
const vfiles = fs.existsSync(path.join(APP, 'data/atlas/visas')) ? fs.readdirSync(path.join(APP, 'data/atlas/visas')).filter((f) => /^[a-z]{2}\.js$/.test(f)) : [];
const vbroken = [];
for (const f of vfiles) { try { vm.runInContext(read('data/atlas/visas/' + f), ctx, { filename: f }); } catch (e) { vbroken.push(f + ': ' + e.message); } }
t('every visa file runs', vbroken.length === 0, vbroken.join(' | '));
const V = A.visas;
t('every country has a visa file', A.countries.every((c) => V[c.id]), A.countries.filter((c) => !V[c.id]).map((c) => c.id).join(' '));
const STEP = new Set((A.arrivalSteps || []).map((x) => x.id)), arrivalNone = [];
const SIT = new Set(A.situations.map((x) => x.id)), VER = new Set(A.verdicts.map((x) => x.id)), OST = new Set(A.openStates.map((x) => x.id));
const numsOf = (s) => (String(s).match(/\d{1,3}(?:[., ]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/g) || []).map((n) => n.replace(/[., ]/g, '')).sort().join(' ');
const vproblems = {};
Object.values(V).forEach((v) => {
  const id = v.id, c = A.byId[id], bad = (m) => (vproblems[id] = vproblems[id] || []).push(m);
  if (!c) { bad('unknown country'); return; }
  const src = read('data/atlas/visas/' + id.toLowerCase() + '.js');
  if (!fs.existsSync(path.join(APP, 'research/visas_immigration', v.folder || '-'))) bad('research folder missing: ' + v.folder);
  if (!isDate(v.checked) || !/^\d{4}-\d{2}-\d{2}$/.test(v.review) || v.review <= v.checked) bad('dates ' + v.checked + ' → ' + v.review);
  const want = c.europe ? ['eu', 'uk', 'us', 'other'] : ['eu', 'uk'];
  const reg = v.folder ? VS.register(v.folder) : {};
  const pair = (x, w, needIds) => {
    if (!Array.isArray(x) || typeof x[0] !== 'string' || typeof x[1] !== 'string' || !x[0].length || !x[1].length) { bad(w + ': not an [English, Italian] pair'); return; }
    if (numsOf(x[0]) !== numsOf(x[1])) bad(w + ': the Italian has other numbers: ' + x[0].slice(0, 50));
    if (needIds && !x[2]) bad(w + ': cites no source');
    String(x[2] || '').split(/\s+/).filter(Boolean).forEach((k) => { if (!reg[k]) bad(w + ': ' + k + ' is not in the register'); });
  };
  const pass = (item, w) => {
    const ps = String(item.p || '').split(/\s+/).filter(Boolean);
    if (!ps.length) bad(w + ': no passports');
    ps.forEach((p) => { if (!want.includes(p)) bad(w + ': passport ' + p + (c.europe ? '' : ' is out of scope outside Europe')); });
    return ps;
  };
  const covered = new Set();
  if (v.free) { pass(v.free, 'free').forEach((p) => covered.add(p)); (v.free.t || []).forEach((x, i) => pair(x, 'free ' + i, true)); }
  (v.routes || []).forEach((r, i) => {
    const w = 'route ' + i + ' (' + r.k + ')';
    if (!SIT.has(r.k)) bad(w + ': situation ' + r.k);
    if (!VER.has(r.v)) bad(w + ': verdict ' + r.v);
    pass(r, w).forEach((p) => covered.add(p));
    pair(r.name, w + ' name', false);
    if (!(r.t || []).length) bad(w + ': no text');
    (r.t || []).forEach((x, j) => pair(x, w + ' text ' + j, true));
    (r.f || []).forEach((f, j) => { pair(f[0], w + ' figure ' + j + ' label', false); pair([f[1][0], f[1][1], f[2]], w + ' figure ' + j, true); });
    if (r.w) pair(r.w, w + ' watch', true);
  });
  (v.traps || []).forEach((x, i) => { pass(x, 'trap ' + i); pair(x.t, 'trap ' + i, true); });
  (v.open || []).forEach((x, i) => { if (!OST.has(x.st)) bad('open ' + i + ': status ' + x.st); pair(x.t, 'open ' + i, false); });
  want.forEach((p) => { if (!A.isHome(p, id) && !covered.has(p)) bad('nothing for the ' + p + ' passport'); });
  /* First weeks: every step answered for every passport in scope, by text
   * that cites the register or by an explicit none. */
  const answered = {};
  (v.arrival || []).forEach((x, i) => {
    const w = 'arrival ' + i + ' (' + x.k + ')';
    if (!STEP.has(x.k)) bad(w + ': step ' + x.k);
    const ps = pass(x, w);
    if (x.none) { if ((x.t || []).length) bad(w + ': none, but has text'); arrivalNone.push(id + ' ' + x.k + ' [' + ps.join(' ') + ']'); }
    else { if (!(x.t || []).length) bad(w + ': no text'); (x.t || []).forEach((y, j) => pair(y, w + ' text ' + j, true)); }
    ps.forEach((p) => { answered[x.k + ' ' + p] = 1; });
  });
  A.arrivalSteps.forEach((S) => want.forEach((p) => {
    if (!A.isHome(p, id) && !answered[S.id + ' ' + p]) bad('first weeks: ' + S.id + ' not answered for the ' + p + ' passport');
  }));
  if (!src.includes(VS.MARK) || VS.rewrite(src) !== src) bad('sources out of step with the register: run node tools/visas-sources.js ' + id.toLowerCase());
  Object.keys(v.sources || {}).forEach((k) => { const s = v.sources[k]; if (!s || !/^https?:\/\//.test(s[1] || '')) bad(k + ': no link'); });
});
const vp = Object.keys(vproblems);
console.log('  (info) first-weeks steps the research does not cover yet: ' + arrivalNone.length + (arrivalNone.length ? ' — ' + arrivalNone.join(', ') : ''));
t('first weeks come from the visa files, not the country records', Object.values(A.records).every((r) => !r.arrival), Object.values(A.records).filter((r) => r.arrival).map((r) => r.id).join(' '));
t('every visa file passes the schema, source and Italian checks', vp.length === 0, vp.slice(0, 4).map((k) => k + ': ' + vproblems[k].slice(0, 4).join('; ')).join(' | '));
Object.values(V).forEach((v) => t('  ' + v.id + ' visas: ' + (v.routes || []).length + ' routes, ' + Object.keys(v.sources || {}).length + ' sources', !vproblems[v.id], (vproblems[v.id] || []).join('; ')));
t('the country page draws the visa section with the passport switch in it', /function visaSection\(rec, v\)/.test(read('js/page-map.js')) && /tools\.appendChild\(passportControl\(\)\)/.test(read('js/page-map.js')));
t('tools/build.js publishes the visa files', /data\/atlas\/visas/.test(read('tools/build.js')));

/* -------------------------------------------------- how hiring works --- */
/* data/atlas/entry/<id>.js: every line an [English, Italian, ids] triple
 * with the same numbers in both, every id one of the file's own sources or
 * 'ours' (Admetia's reading, shown as such), every source tagged, linked,
 * dated and used, every field and custom from the vocabulary. */
const efiles = fs.existsSync(path.join(APP, 'data/atlas/entry')) ? fs.readdirSync(path.join(APP, 'data/atlas/entry')).filter((f) => /^[a-z]{2}\.js$/.test(f)) : [];
const ebroken = [];
for (const f of efiles) { try { vm.runInContext(read('data/atlas/entry/' + f), ctx, { filename: f }); } catch (e) { ebroken.push(f + ': ' + e.message); } }
t('every hiring file runs', ebroken.length === 0, ebroken.join(' | '));
const E = A.entries || {};
t('every country has a hiring file', A.countries.every((c) => E[c.id]), A.countries.filter((c) => !E[c.id]).map((c) => c.id).join(' '));
const FLD = new Set((A.entryFields || []).map((x) => x.id)), CUS = {};
(A.entryCustoms || []).forEach((C) => { CUS[C.id] = new Set(C.values.map((v) => v.id)); });
const eproblems = {}, eours = {};
Object.values(E).forEach((e) => {
  const id = e.id, bad = (m) => (eproblems[id] = eproblems[id] || []).push(m);
  if (!A.byId[id]) { bad('unknown country'); return; }
  if (!isDate(e.checked) || !/^\d{4}-\d{2}-\d{2}$/.test(e.review) || e.review <= e.checked) bad('dates ' + e.checked + ' → ' + e.review);
  const used = new Set();
  const line = (x, w) => {
    if (!Array.isArray(x) || typeof x[0] !== 'string' || typeof x[1] !== 'string' || !x[0].length || !x[1].length) { bad(w + ': not an [English, Italian, ids] triple'); return; }
    if (numsOf(x[0]) !== numsOf(x[1])) bad(w + ': the Italian has other numbers: ' + x[0].slice(0, 50));
    const ks = String(x[2] || '').split(/\s+/).filter(Boolean);
    if (!ks.length) bad(w + ': cites nothing (a source id, or ours)');
    ks.forEach((k) => { if (k === 'ours') eours[id] = (eours[id] || 0) + 1; else if (!(e.sources || {})[k]) bad(w + ': ' + k + ' is not in the sources'); else used.add(k); });
  };
  const lines = (xs, w) => { if (!Array.isArray(xs) || !xs.length) bad(w + ': empty'); else xs.forEach((x, i) => line(x, w + ' ' + i)); };
  if (!(e.lead || []).length) bad('no lead: say how most people get in');
  else lines(e.lead, 'lead');
  (e.ways || []).forEach((wy, i) => {
    if (!Array.isArray(wy.name) || !wy.name[0] || !wy.name[1]) bad('way ' + i + ': name is not an [English, Italian] pair');
    lines(wy.t, 'way ' + i);
  });
  ['cycle', 'schools', 'events'].forEach((k) => { if (e[k] !== undefined) lines(e[k], k); });
  (e.fields || []).forEach((x, i) => { if (!FLD.has(x.f)) bad('field ' + i + ': ' + x.f); lines(x.t, 'field ' + x.f); });
  const seenC = new Set();
  (e.customs || []).forEach((x, i) => {
    if (!CUS[x.k]) bad('custom ' + i + ': ' + x.k);
    else if (x.v !== undefined && !CUS[x.k].has(x.v)) bad('custom ' + x.k + ': value ' + x.v);
    if (seenC.has(x.k)) bad('custom ' + x.k + ' twice');
    seenC.add(x.k);
    lines(x.t, 'custom ' + x.k);
  });
  Object.keys(e.sources || {}).forEach((k) => {
    const s = e.sources[k];
    if (!Array.isArray(s) || !A.tags.includes(s[0])) bad(k + ': tag ' + (s && s[0]));
    else if (!s[1] || !/^(https?:\/\/|research\/)/.test(s[2] || '') || !isDate(s[3])) bad(k + ': title, link or date missing');
    /* orphan sources are checked by tools/hiring-check.js, which counts every place a source can be cited */
  });
});
const ep = Object.keys(eproblems);
console.log('  (info) hiring lines that are Admetia’s own reading, not a source: ' + Object.keys(eours).map((k) => k + ' ' + eours[k]).join(', '));
t('every hiring file passes the schema, source and Italian checks', ep.length === 0, ep.slice(0, 4).map((k) => k + ': ' + eproblems[k].slice(0, 4).join('; ')).join(' | '));
Object.values(E).forEach((e) => t('  ' + e.id + ' hiring: ' + (e.ways || []).length + ' ways in, ' + (e.fields || []).length + ' fields, ' + Object.keys(e.sources || {}).length + ' sources', !eproblems[e.id], (eproblems[e.id] || []).join('; ')));
const FG = {}; (A.entryFields || []).forEach((F) => { FG[F.id] = F.g; });
const oneSided = Object.values(E).filter((e) => ['biz', 'it'].some((g) => !(e.fields || []).some((x) => FG[x.f] === g))).map((e) => e.id);
console.log('  (info) hiring fields per country (business/computing): ' + Object.values(E).map((e) => e.id + ' ' + (e.fields || []).filter((x) => FG[x.f] === 'biz').length + '/' + (e.fields || []).filter((x) => FG[x.f] === 'it').length).join(', '));
t('every country covers both business and computing fields', oneSided.length === 0, oneSided.join(' '));
t('the country page draws How hiring works', /function entrySection\(e\)/.test(read('js/page-map.js')) && /loadEntry\(id\)/.test(read('js/page-map.js')));
t('tools/build.js publishes the hiring files', /data\/atlas\/entry/.test(read('tools/build.js')));
/* The full plan: the same rows in every country (tools/hiring-check.js). */
const HC = require('../tools/hiring-check.js').check();
const hcBad = Object.keys(HC.problems);
t('every country has every hiring row, with Italian and a source (tools/hiring-check.js)', hcBad.length === 0, hcBad.slice(0, 5).map((k) => k + ': ' + HC.problems[k].slice(0, 3).join('; ')).join(' | ') + (hcBad.length > 5 ? ' … ' + (hcBad.length - 5) + ' more' : ''));
/* data/atlas/outcomes.js, generated by tools/atlas-outcomes.js. */
const outCtx = { console }; outCtx.window = outCtx; vm.createContext(outCtx);
let OUT = null; try { vm.runInContext(read('data/atlas/outcomes.js'), outCtx); OUT = outCtx.ATLAS_OUTCOMES; } catch (e) { OUT = null; }
t('outcomes: data/atlas/outcomes.js runs', !!OUT);
if (OUT) {
  const oBad = [];
  Object.keys(OUT.country).forEach((id) => {
    if (!A.byId[id]) oBad.push(id + ': unknown country');
    Object.keys(OUT.country[id]).forEach((k) => {
      const m = OUT.country[id][k];
      if (!OUT.metrics[k] && !['timeToJob', 'returnOffer'].includes(k)) oBad.push(id + '.' + k + ': unknown metric');
      if (typeof m.v !== 'number' || !isFinite(m.v) || !(m.year >= 2015) || !m.def || !/^https:\/\//.test(m.src || '') || !m.by || !A.tags.includes(m.tag) || !isDate(m.seen)) oBad.push(id + '.' + k + ': value, year, definition, source or date missing');
      if (!['eurostat', 'ilo', 'national'].includes(m.group)) oBad.push(id + '.' + k + ': group');
    });
  });
  t('outcomes: every figure has a value, year, definition, https source and date', oBad.length === 0, oBad.slice(0, 5).join(' | '));
  const noOut = A.countries.filter((c) => !OUT.country[c.id] || !OUT.country[c.id].youthUnemp).map((c) => c.id);
  console.log('  (info) countries without a youth-unemployment figure: ' + (noOut.join(' ') || 'none'));
  const noGrad = A.countries.filter((c) => !OUT.country[c.id] || !OUT.country[c.id].gradUnemp).map((c) => c.id);
  console.log('  (info) countries without a graduate-unemployment figure: ' + (noGrad.join(' ') || 'none'));
  const noRecent = A.countries.filter((c) => !OUT.country[c.id] || !OUT.country[c.id].recentGrad).map((c) => c.id);
  console.log('  (info) countries without a recent-graduate employment figure: ' + (noRecent.join(' ') || 'none'));
}
/* The topic page and the planner. */
t('hiring.html exists and loads the planner and the hiring data', /js\/page-hiring\.js/.test(read('hiring.html')) && /data\/atlas\/outcomes\.js/.test(read('hiring.html')));
t('hiring.html is built and kept offline', /'hiring\.html'\]/.test(read('tools/build.js')) && /'hiring\.html'/.test(read('sw.js')) && /js\/page-hiring\.js/.test(read('sw.js')));
['index.html', 'business.html', 'it.html', 'mba.html', 'masters.html', 'computing.html', 'map.html', 'hiring.html'].forEach((p) => {
  t(p + ' links to the hiring page in its section nav', /href="hiring\.html"[^>]*data-sec="hiring"/.test(read(p)));
});
t('the hiring page draws the planner and the table of countries', /function drawPlanner/.test(read('js/page-hiring.js')) && /function drawTable/.test(read('js/page-hiring.js')));

/* ----------------------------------------------------------- life there --- */
/* data/atlas/life.js, generated by tools/atlas-life.js: every country and
 * every hub covered, every source linked and dated, values in physical
 * range, and each figure filed as country or city. */
const lifeCtx = { }; lifeCtx.window = lifeCtx; vm.createContext(lifeCtx);
let LIFE = null;
try { vm.runInContext(read('data/atlas/life.js'), lifeCtx); LIFE = lifeCtx.ATLAS_LIFE; } catch (e) { LIFE = null; }
t('life there: data/atlas/life.js runs', !!LIFE);
if (LIFE) {
  const lp = [];
  if (!isDate(LIFE.seen)) lp.push('seen ' + LIFE.seen);
  Object.keys(LIFE.sources).forEach((k) => { const S = LIFE.sources[k]; if (!S.by || !/^https:\/\//.test(S.src) || !A.tags.some((x) => x.id === S.tag || x === S.tag)) lp.push('source ' + k); });
  const inr = (v, lo, hi) => v == null || (typeof v === 'number' && v >= lo && v <= hi);
  A.countries.forEach((c) => {
    const C = LIFE.country[c.id];
    if (!C) { lp.push(c.id + ': no country entry'); return; }
    if (!inr(C.prices && C.prices.v, 10, 300)) lp.push(c.id + ' prices');
    if (!inr(C.safety && C.safety.v, 0, 60)) lp.push(c.id + ' safety');
    if (!inr(C.hours && C.hours.v, 20, 60)) lp.push(c.id + ' hours');
    if (!inr(C.oop && C.oop.v, 0, 100)) lp.push(c.id + ' oop');
    if (!inr(C.life && C.life.v, 50, 90)) lp.push(c.id + ' life');
    if (C.english && C.english.score && !inr(C.english.score, 300, 800)) lp.push(c.id + ' english');
    if (C.crime) ['assault', 'robbery', 'theft', 'burglary'].forEach((k) => { const x = C.crime[k]; if (x && (!inr(x.v, 0, 20000) || x.year < 2015)) lp.push(c.id + ' crime ' + k); });
    if (!C.language || !C.language.length) lp.push(c.id + ' language');
    else C.language.forEach((x) => { if (!x.c || !inr(x.pct, 0, 100)) lp.push(c.id + ' language ' + x.c); });
    if (!C.care) lp.push(c.id + ' care');
    else {
      if (!inr(C.care.uhc && C.care.uhc.v, 0, 100)) lp.push(c.id + ' uhc');
      if (!inr(C.care.doctors && C.care.doctors.v, 0, 15)) lp.push(c.id + ' doctors');
      if (!inr(C.care.beds && C.care.beds.v, 0, 20)) lp.push(c.id + ' beds');
      if (!inr(C.care.ncd && C.care.ncd.v, 0, 60)) lp.push(c.id + ' ncd');
    }
    if (C.people) ['friendly', 'friends', 'welcome'].forEach((k) => { if (!inr(C.people[k], 1, C.people.of)) lp.push(c.id + ' people ' + k); });
    (A.records[c.id] ? A.records[c.id].hubs : []).forEach((h) => {
      const H = LIFE.hub[c.id + '/' + h.id], w = c.id + '/' + h.id;
      if (!H) { lp.push(w + ': no hub entry'); return; }
      if (!H.climate || !inr(H.climate.cold.mean, -40, 40) || !inr(H.climate.warm.mean, -10, 45) || H.climate.cold.mean > H.climate.warm.mean) lp.push(w + ' climate');
      if (!H.daylight || !inr(H.daylight.min, 0, 24) || !inr(H.daylight.max, 0, 24)) lp.push(w + ' daylight');
      if (!H.air || !inr(H.air.pm25, 0, 300)) lp.push(w + ' air');
      if (!H.time || !H.time.tz) lp.push(w + ' time');
    });
  });
  t('life there: every country and hub covered, sources linked, values in range', lp.length === 0, lp.slice(0, 12).join('; '));
}
/* data/atlas/culture.js: legal minimums and two guide sentences per country, each with its page. */
const cultCtx = {}; cultCtx.window = cultCtx; vm.createContext(cultCtx);
let CULT = null;
try { vm.runInContext(read('data/atlas/culture.js'), cultCtx); CULT = cultCtx.ATLAS_CULTURE; } catch (e) { CULT = null; }
t('office culture: data/atlas/culture.js runs', !!CULT);
if (CULT) {
  const cp = [];
  if (!isDate(CULT.seen)) cp.push('seen ' + CULT.seen);
  A.countries.forEach((c) => {
    const K = CULT.country[c.id];
    if (!K) { cp.push(c.id + ': no entry'); return; }
    Object.keys(K).forEach((k) => {
      const x = K[k];
      if (!['leave', 'holidays', 'day', 'style'].includes(k)) { cp.push(c.id + ' field ' + k); return; }
      if (!/^https:\/\//.test(x.src || '') || !x.by || !A.tags.includes(x.tag)) cp.push(c.id + ' ' + k + ' source');
      if (k === 'leave' && x.none) return;
      if (k === 'leave' && !(x.days >= 1 && x.days <= 60)) cp.push(c.id + ' leave');
      if (k === 'holidays' && !(x.days >= 1 && x.days <= 30)) cp.push(c.id + ' holidays');
      if ((k === 'day' || k === 'style') && (!x.en || !x.it || x.en.length > 260 || x.it.length > 320)) cp.push(c.id + ' ' + k + ' text');
    });
    if (!K.leave && !K.holidays && !K.day && !K.style) cp.push(c.id + ': empty');
  });
  t('office culture: every country has an entry, each figure or sentence has a page and an Italian sentence', cp.length === 0, cp.slice(0, 12).join('; '));
}
t('map.html and the service worker load data/atlas/culture.js', /data\/atlas\/culture\.js/.test(read('map.html')) && /data\/atlas\/culture\.js/.test(read('sw.js')));
t('the country page draws Life there with a whole-country or by-city mark on every row', /function lifeSection\(rec\)/.test(read('js/page-map.js')) && /function scopeChip\(city, label\)/.test(read('js/page-map.js')));
t('map.html loads data/atlas/life.js', /data\/atlas\/life\.js/.test(read('map.html')));

/* ------------------------------------------------------------ privacy --- */
t('the Atlas page sends nothing: no Stats, fetch, XMLHttpRequest or beacon', !/Stats\.|fetch\(|XMLHttpRequest|sendBeacon|new Image\(/.test(pm));
t('it stores only the passport, under one key, through js/storage.js', /var STORE = 'atlas';/.test(pm) && (pm.match(/Store\.save\(/g) || []).length === 1 && !/localStorage/.test(pm));
const session = read('js/session.js');
t('"Clear everything" removes the passport (it is not a kept setting)', !/'atlas'/.test((/var KEEP = \[[^\]]*\]/.exec(session) || [''])[0]) && /PREFIX \+ 'atlas'/.test(session));

/* ------------------------------------------------------------- wiring --- */
t('tools/build.js publishes map.html', /'map\.html'/.test(read('tools/build.js')));
t('sw.js keeps map.html and the Atlas data offline', /'map\.html'/.test(read('sw.js')) && /'data\/atlas\/index\.js'/.test(read('sw.js')) && /'js\/page-map\.js'/.test(read('sw.js')));
['index.html', 'business.html', 'it.html', 'mba.html', 'masters.html', 'computing.html', 'map.html'].forEach((p) => {
  t(p + ' links to the Atlas in its section nav', /<a class="sec-group" href="map\.html" data-sec="map">Atlas<\/a>/.test(read(p)));
});
t('the 404 page lists the Atlas', /<li><a href="map\.html"/.test(read('404.html')));
t('map.html loads the Atlas index and shapes, not the country records', /data\/atlas\/index\.js/.test(read('map.html')) && /data\/atlas\/geo\.js/.test(read('map.html')) && !/data\/atlas\/[a-z]{2}\.js/.test(read('map.html')));

/* ------------------------------------------------------------- design --- */
const css = read('css/app.css');
const atlasCss = css.slice(css.indexOf('The Atlas (map.html)'));
t('Atlas controls are square: no rounded corners in its styles', !/border-radius:\s*(?!0)[\d.]+/.test(atlasCss));
t('no monospace type in the Atlas', !/monospace/.test(atlasCss));
t('markers are 44px hit areas', /\.mk \{[^}]*width: 44px; height: 44px;/.test(atlasCss) && /var MIN_HIT = 44;/.test(pm));
t('grey countries are hatched and unoutlined, covered ones solid and outlined', /\.land \{ fill: url\(#atlas-hatch\); stroke: none; pointer-events: none; \}/.test(atlasCss) && /\.atlas-svg \.cty \{[^}]*stroke: var\(--ink\)/.test(atlasCss));
t('grey shapes have no role, no name and no tab stop', /p\.setAttribute\('class', 'land'\);\s*p\.setAttribute\('aria-hidden', 'true'\);/.test(pm));
t('the map is one tab stop with arrow-key movement', /function rovingReset\(\)/.test(pm) && /ArrowRight: \[1, 0\]/.test(pm));
t('the Atlas headline has no italic accent word', !/<h1[^>]*>[^<]*<em>/.test(read('map.html')));

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);

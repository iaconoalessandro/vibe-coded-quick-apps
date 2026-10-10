#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Builds the Career Explorer (careers/) from the branch research.
 *
 *   research/branches/index.md                  the 13 branches, scales,
 *                                               background matrix, comparison,
 *                                               assumptions, gaps
 *   research/branches/reports/<branch>.md       one report per branch (the
 *                                               merged file for Finance,
 *                                               Computer Science and AI)
 *   research/branches/reports/italy-pay-addendum.md
 *
 * Two steps, both re-run every time:
 *
 *   1. parse   → careers/data/careers.json      everything, structured
 *   2. render  → careers/**.html                static pages, no runtime
 *                careers/data/search-index.json  for the client-side search
 *                sitemap.xml                     every page of the site
 *                careers/BUILD_NOTES.md          the generated block only
 *
 * The build stops, naming the file and the role, if a report or a role
 * family does not fit the template, if a link would point nowhere, or if an
 * add-on row is not mapped. It never drops a section to carry on.
 *
 *   npm run careers
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const P = require('./careers/parse');
const M = require('./careers/md');
const L = require('./careers/links');
const C = require('./careers/config');
const R = require('./careers/render');
const CC = require('./careers/compass');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'research/branches');
const OUT = path.join(ROOT, 'careers');
const SITE = 'https://iaconoalessandro.github.io/admetia/';

function fail(msg) { throw new P.ParseError(msg); }

/* ------------------------------------------------------------------------ */
/* 1. Parse                                                                 */
/* ------------------------------------------------------------------------ */

function firstInt(s) { const m = /\d+/.exec(s || ''); return m ? Number(m[0]) : null; }
function rangeOf(s) {
  /* Hours: the first figure or range in the cell ("DCM 60-70 (80-90); ..." → 60-70). */
  const m = /(\d+)(?:\s*-\s*(\d+))?/.exec(P.stripMd(s || ''));
  return m ? [Number(m[1]), Number(m[2] || m[1])] : null;
}
/* A 1-5 score cell: the lowest and highest figure in it, so "4 (5 at top
 * boutiques)" is 4-5 and "DCM 3; LevFin 3-4" is 3-4. The cell itself is
 * always printed as written. Any other number in the cell stops the build. */
function scoreOf(s) {
  const n = (P.stripMd(s || '').match(/\b\d+\b/g) || []).map(Number);
  if (!n.length || n.some((x) => x < 1 || x > 5)) return null;
  return [Math.min(...n), Math.max(...n)];
}

function buildData() {
  const index = P.parseIndex(path.join(SRC, 'index.md'));
  const italy = P.parseItaly(path.join(SRC, 'reports/italy-pay-addendum.md'));
  const italyMap = JSON.parse(fs.readFileSync(path.join(__dirname, 'careers/italy-map.json'), 'utf8'));

  const backgrounds = index.backgrounds.map((b) => ({ ...b, slug: P.slugify(b.name) }));
  const bgByName = new Map(backgrounds.map((b) => [b.name.toLowerCase(), b]));

  const fields = [];
  const roles = [];
  for (const br of index.branches) {
    const rep = P.parseReport(path.join(SRC, `reports/${br.slug}.md`), br.slug);
    if (rep.roles.length !== br.roleCount) fail(`${br.slug}: index.md says ${br.roleCount} role families, the report has ${rep.roles.length}`);

    /* Background reasons from section 5(a): the branch table, then parts. */
    const reasons = rep.bgTables.map((t) => {
      const by = {};
      for (const row of t.rows) {
        const b = bgByName.get(P.stripMd(row[0]).toLowerCase());
        if (!b) fail(`${br.slug}: section 5 names an unknown background "${row[0]}"`);
        by[b.key] = { rating: P.stripMd(row[1]), reason: row[2] };
      }
      for (const b of backgrounds) if (!by[b.key]) fail(`${br.slug}: section 5 ${t.part || 'branch'} table has no row for ${b.name}`);
      return { part: t.part, by };
    });

    const it = italy.branches[br.name];
    if (!it) fail(`italy-pay-addendum.md has no section for ${br.name}`);

    const field = {
      slug: br.slug, name: br.name, depth: br.depth, roleCount: br.roleCount, what: br.what,
      title: rep.title, preface: rep.preface, sections: rep.sections, s3blocks: rep.s3blocks,
      summaryHeader: rep.summaryHeader, summaryRows: rep.roles.map((r) => rep.summary[r.num]),
      overall: index.overall[br.slug], reasons, italy: { name: br.name, ...it },
      compareHeader: index.compare.tables[br.slug][0], roles: []
    };
    if (!field.overall) fail(`index.md 3.1 has no row for ${br.slug}`);
    fields.push(field);

    const mrows = new Map(index.matrix.tables[br.slug].slice(1).map((r) => [P.roleId(r[0]), r]));
    const crows = new Map(index.compare.tables[br.slug].slice(1).map((r) => [P.roleId(r[0]), r]));
    for (const r of rep.roles) {
      const id = `${br.slug}/${r.num}`;
      const m = mrows.get(r.num), c = crows.get(r.num);
      if (!m) fail(`index.md 3.2 has no row for ${id}`);
      if (!c) fail(`index.md 4 has no row for ${id}`);
      if (c.length !== 7) fail(`index.md 4 row for ${id} has ${c.length} cells`);
      const matrix = {};
      backgrounds.forEach((b, i) => {
        const v = P.stripMd(m[i + 1]).charAt(0).toUpperCase();
        if (!'SPX'.includes(v) || !v) fail(`index.md 3.2 ${id} ${b.key}="${m[i + 1]}"`);
        matrix[b.key] = v;
      });
      const scores = {
        stress: scoreOf(c[2]), people: scoreOf(c[3]), quant: scoreOf(c[4]), difficulty: scoreOf(c[6]),
        hours: rangeOf(c[1])
      };
      for (const k of ['stress', 'people', 'quant', 'difficulty']) {
        if (!scores[k] || scores[k][0] < 1 || scores[k][1] > 5) fail(`index.md 4 ${id} ${k}="${c[{ stress: 2, people: 3, quant: 4, difficulty: 6 }[k]]}" is not on the 1-5 scale`);
      }
      if (!scores.hours) fail(`index.md 4 ${id} hours="${c[1]}"`);
      const role = {
        id, field: br.slug, num: r.num, part: r.part, title: r.title,
        shortName: P.stripMd(rep.summary[r.num][0]).replace(/^(P\d-)?3\.\d+\s*/, ''),
        preamble: r.preamble, sections: r.sections,
        compare: { name: P.stripMd(c[0]).replace(/^(P\d-)?3\.\d+\s*/, ''), hours: c[1], stress: c[2], people: c[3], quant: c[4], pay: c[5], difficulty: c[6] },
        summary: rep.summary[r.num], matrix, scores
      };
      roles.push(role);
      field.roles.push(id);
    }
  }

  /* Page slugs: the title's words; the field's name first only on a clash. */
  const seen = new Map();
  for (const r of roles) {
    const s = P.slugify(r.title);
    seen.set(s, (seen.get(s) || 0) + 1);
  }
  for (const r of roles) {
    let s = P.slugify(r.title);
    if (seen.get(s) > 1) s = `${r.field}-${s}`;
    r.slug = s;
  }
  const slugs = new Set(roles.map((r) => r.slug));
  if (slugs.size !== roles.length) fail('two role families share a page name');
  const byId = new Map(roles.map((r) => [r.id, r]));

  /* Italy add-on rows onto role pages. */
  const unmappedRows = [];
  for (const [bname, sec] of Object.entries(italy.branches)) {
    const map = italyMap[bname];
    if (!map) fail(`tools/careers/italy-map.json has no entry for "${bname}"`);
    const field = fields.find((f) => f.name === bname);
    const labels = new Set(sec.rows.map((r) => r[0]));
    for (const k of Object.keys(map)) if (!labels.has(k)) fail(`italy-map.json "${bname}" lists "${k}", which is not a row of the add-on`);
    sec.rows.forEach((row, i) => {
      if (!(row[0] in map)) fail(`italy-pay-addendum.md "${bname}" row "${row[0]}" is not in italy-map.json`);
      const targets = map[row[0]];
      if (!targets.length) unmappedRows.push(`${bname}: ${row[0]}`);
      for (const t of targets) {
        const id = t.includes('/') ? t : `${field.slug}/${t}`;
        const r = byId.get(id);
        if (!r) fail(`italy-map.json "${bname}" → "${row[0]}" names ${id}, which is not a role family`);
        (r.italy = r.italy || []).push({ branch: bname, row: i });
      }
    });
  }

  /* Exits → roles, and the reverse. */
  const table = L.nameTable(roles);
  const exitLog = [];
  for (const r of roles) {
    const res = L.resolveExits(r, r.sections.exits.md, table);
    r.exitLinks = res.links;
    exitLog.push({ id: r.id, unresolved: res.unresolved, ambiguous: res.ambiguous });
  }
  for (const r of roles) r.reachedFrom = roles.filter((o) => o.exitLinks.some((l) => l.id === r.id)).map((o) => o.id);

  /* Related: the others in its field, and the closest profiles elsewhere by
   * the four 1-5 scores (mid-points of ranges). */
  const mid = (a) => (a[0] + a[1]) / 2;
  for (const r of roles) {
    const v = ['people', 'quant', 'stress', 'difficulty'].map((k) => mid(r.scores[k]));
    r.similar = roles.filter((o) => o.field !== r.field)
      .map((o) => {
        const w = ['people', 'quant', 'stress', 'difficulty'].map((k) => mid(o.scores[k]));
        const d = Math.sqrt(v.reduce((s, x, i) => s + (x - w[i]) ** 2, 0));
        return { id: o.id, d, h: Math.abs(mid(o.scores.hours) - mid(r.scores.hours)) };
      })
      .sort((a, b) => a.d - b.d || a.h - b.h || a.id.localeCompare(b.id))
      .slice(0, 4).map((x) => x.id);
  }

  /* Calculators, checked against the tracks the site has. */
  const theme = fs.readFileSync(path.join(ROOT, 'js/theme.js'), 'utf8');
  const tracksSrc = /var TRACKS = (\{[^;]+\});/.exec(theme);
  if (!tracksSrc) fail('js/theme.js: TRACKS not found');
  const TRACKS = JSON.parse(tracksSrc[1].replace(/'/g, '"').replace(/(\w+):/g, '"$1":'));
  const calc = (key) => {
    const [page, track] = key.split(':');
    if (!fs.existsSync(path.join(ROOT, page + '.html'))) fail(`calculator page ${page}.html does not exist`);
    if (track && !(TRACKS[page] || []).includes(track)) fail(`calculator track ${key} does not exist in js/theme.js`);
    if (!C.CALC_LABEL[key]) fail(`no label for calculator ${key}`);
    return { key, href: page + '.html' + (track ? '?track=' + track : ''), label: C.CALC_LABEL[key] };
  };
  for (const f of fields) {
    if (!(f.slug in C.CALCULATORS)) fail(`tools/careers/config.js CALCULATORS has no entry for ${f.slug}`);
    f.calculators = C.CALCULATORS[f.slug].map(calc);
  }
  for (const id of Object.keys(C.CALCULATORS_ROLE)) if (!byId.has(id)) fail(`config.js CALCULATORS_ROLE names unknown role ${id}`);
  for (const r of roles) r.calculators = (C.CALCULATORS_ROLE[r.id] || C.CALCULATORS[r.field]).map(calc);

  /* index.md section 6 → the pages each item touches. */
  const gaps = parseGaps(index.gaps);
  const monthYear = /\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.? (\d{1,2} )?20\d\d\b/;
  for (const f of fields) f.gaps = [];
  for (const r of roles) r.gaps = [];
  const touch = (list, n, sub) => { if (!list.some((g) => g.n === n && g.sub === sub)) list.push({ n, sub }); };
  for (const [nStr, rule] of Object.entries(C.GAPS)) {
    const n = Number(nStr);
    if (!gaps.find((g) => g.n === n)) fail(`config.js GAPS names item ${n}, not in index.md section 6`);
    for (const id of rule.roles || []) { if (!byId.has(id)) fail(`config.js GAPS ${n} names unknown role ${id}`); touch(byId.get(id).gaps, n); }
    for (const s of rule.fields || []) touch(fields.find((f) => f.slug === s).gaps, n);
    for (const s of rule.allRolesIn || []) roles.filter((r) => r.field === s).forEach((r) => touch(r.gaps, n));
    (rule.sub || []).forEach((sr, k) => {
      const g = gaps.find((x) => x.n === n);
      if (!g.subs[k]) fail(`config.js GAPS ${n} sub ${k} has no matching sub-item in index.md`);
      for (const s of sr.fields) touch(fields.find((f) => f.slug === s).gaps, n, k);
      roles.filter((r) => sr.in.includes(r.field) && sr.match.test(allText(r))).forEach((r) => touch(r.gaps, n, k));
    });
    if (rule.enterDates) roles.filter((r) => monthYear.test(r.sections.enter.md)).forEach((r) => touch(r.gaps, n));
    if (rule.tierMatch) roles.filter((r) => rule.tierMatch.test(r.sections.tiers.md)).forEach((r) => touch(r.gaps, n));
  }
  for (const n of C.GAPS_FOOTER) if (!gaps.find((g) => g.n === n)) fail(`config.js GAPS_FOOTER names item ${n}, not in index.md`);

  return {
    backgrounds, fields, roles, gaps,
    index: { intro: index.intro, scales: index.scales, matrixIntro: index.matrixIntro, matrixOverall: tableOf(index, 3),
      compareIntro: index.compare.intro, assumptions: index.assumptions, branchesNote: index.branchesNote },
    italy: { preface: italy.preface, howToRead: italy.howToRead, intro: italy.intro, benchmarks: italy.benchmarks, sources: italy.sources, branches: italy.branches },
    log: { exits: exitLog, unmappedItalyRows: unmappedRows }
  };
}

function allText(r) { return [r.preamble, ...Object.values(r.sections).map((s) => s.md)].join('\n'); }

/* The 3.1 table of index.md, as markdown. */
function tableOf(index) {
  const lines = fs.readFileSync(path.join(SRC, 'index.md'), 'utf8').split('\n');
  const at = lines.findIndex((l) => l.startsWith('### 3.1'));
  const start = lines.findIndex((l, i) => i > at && l.startsWith('|'));
  let end = start;
  while (lines[end] && lines[end].startsWith('|')) end++;
  return lines.slice(start, end).join('\n');
}

/* "1. **Title.** text" items, with "   - " sub-items. */
function parseGaps(md) {
  const items = [];
  for (const line of md.split('\n')) {
    const m = /^(\d+)\. (.*)$/.exec(line);
    if (m) { items.push({ n: Number(m[1]), md: line, head: m[2], subs: [] }); continue; }
    if (!items.length) { if (line.trim()) fail('index.md section 6: text before the first item'); continue; }
    const it = items[items.length - 1];
    it.md += '\n' + line;
    const s = /^\s+- (.*)$/.exec(line);
    if (s) it.subs.push(s[1]);
  }
  items.forEach((it) => { it.md = it.md.trim(); });
  return items;
}

/* ------------------------------------------------------------------------ */
/* 2. Render                                                                */
/* ------------------------------------------------------------------------ */

function write(rel, content) {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}

function main() {
  const data = buildData();
  fs.mkdirSync(path.join(OUT, 'data'), { recursive: true });
  const { log, ...publicData } = data;
  fs.writeFileSync(path.join(OUT, 'data/careers.json'), JSON.stringify(publicData, (k, v) => v instanceof RegExp ? String(v) : v, 1) + '\n');

  /* Stale pages from an earlier run go; hand-written assets stay. */
  for (const d of ['roles', 'fields', 'backgrounds']) fs.rmSync(path.join(OUT, d), { recursive: true, force: true });

  const site = R.site(ROOT, data);
  const pages = site.pages();
  for (const p of pages) write(p.path, p.html);
  /* The application toolkit's downloads; stale ones go first. */
  fs.rmSync(path.join(OUT, 'templates'), { recursive: true, force: true });
  for (const f of site.files()) write(f.path.replace(/^careers\//, ''), f.content);
  write('data/search-index.json', JSON.stringify(site.searchIndex()) + '\n');
  write('data/compass-data.js', compassData(data, site));

  writeSitemap(pages.map((p) => 'careers/' + p.path));
  writeNotes(data, site);

  const roles = pages.filter((p) => p.path.startsWith('roles/') && p.path !== 'roles/index.html').length;
  console.log(`Career Explorer: ${pages.length} pages (${data.fields.length} fields, ${data.backgrounds.length} backgrounds, ${roles} roles)`);
  const un = log.exits.reduce((s, e) => s + e.unresolved.length, 0);
  console.log(`  exit links: ${data.roles.reduce((s, r) => s + r.exitLinks.length, 0)} resolved, ${un} unresolved (careers/BUILD_NOTES.md)`);
  if (site.missingIt().length) console.log(`  interface strings without Italian: ${site.missingIt().length} — ${site.missingIt().slice(0, 5).join(' | ')}`);
}

/* The Career Compass's data, as a script so the page also works from
 * file:// (a fetch would not). */
function compassData(data, site) {
  const from = site.U.compass;
  const c = CC.buildCompass(data, (id) => site.rel(from, site.U.role(id)),
    (r) => r.calculators.map((x) => ({ href: site.rel(from, x.href), label: x.label })));
  return '/* Generated by `npm run careers` from research/ (tools/careers/compass.js). Do not edit. */\n' +
    'window.COMPASS_DATA = ' + JSON.stringify(c) + ';\n';
}

function writeSitemap(careerPages) {
  /* Every hand-written page the shell knows (tools/shell.js). */
  const root = Object.keys(require('./shell').ROOT_PAGES);
  for (const p of root) if (!fs.existsSync(path.join(ROOT, p))) fail(`sitemap: ${p} missing`);
  const urls = [''].concat(root.slice(1), careerPages.map((p) => p.replace(/(^|\/)index\.html$/, '$1')));
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') + '\n</urlset>\n';
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
}

/* BUILD_NOTES.md: the hand-written notes stay; the block between the markers
 * is rewritten on every run. */
function writeNotes(data, site) {
  const f = path.join(OUT, 'BUILD_NOTES.md');
  const START = '<!-- generated:start -->', END = '<!-- generated:end -->';
  let text = fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : `# Career Explorer: build notes\n\n${START}\n${END}\n`;
  if (!text.includes(START) || !text.includes(END)) fail('careers/BUILD_NOTES.md lost its generated-block markers');
  const name = (id) => { const r = data.roles.find((x) => x.id === id); return `${r.title} (${id})`; };
  const out = [];
  out.push('## Generated by `npm run careers` (do not edit this block)', '');
  out.push(`- Role families: ${data.roles.length}; fields: ${data.fields.length}; backgrounds: ${data.backgrounds.length}.`);
  out.push(`- Exit links resolved: ${data.roles.reduce((s, r) => s + r.exitLinks.length, 0)}; roles with none: ${data.roles.filter((r) => !r.exitLinks.length).length}.`);
  const amb = data.log.exits.flatMap((e) => e.ambiguous.map((a) => `${e.id}: "${a.name}" could be ${a.ids.join(' or ')}`));
  out.push('', '### Exit names shared by more than one role (not linked)', '');
  out.push(...(amb.length ? [...new Set(amb)].map((a) => '- ' + a) : ['- none']));
  out.push('', '### Italy add-on rows shown on the field page only (no single role)', '');
  out.push(...(data.log.unmappedItalyRows.length ? data.log.unmappedItalyRows.map((r) => '- ' + r) : ['- none']));
  out.push('', '### Roles with no Italy add-on row', '');
  out.push(...data.roles.filter((r) => !r.italy).map((r) => '- ' + name(r.id)));
  out.push('', '### Exit items with no matching role family', '',
    'Each "After N years" list, split at commas and semicolons outside brackets. An item is listed here when it contains none of the role names (see tools/careers/links.js for how names are derived).', '');
  for (const e of data.log.exits) {
    if (!e.unresolved.length) continue;
    out.push(`- **${name(e.id)}**: ${e.unresolved.map((u) => '“' + u + '”').join('; ')}`);
  }
  const block = `${START}\n${out.join('\n')}\n${END}`;
  text = text.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
  fs.writeFileSync(f, text);
}

if (require.main === module) {
  try { main(); } catch (e) {
    if (e instanceof P.ParseError) { console.error('Career Explorer build FAILED: ' + e.message); process.exit(1); }
    throw e;
  }
}

module.exports = { buildData, compassData };

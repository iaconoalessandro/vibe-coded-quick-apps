/* ---------------------------------------------------------------------------
 * Career Explorer: reads research/branches/ into one structured object.
 *
 * The thirteen branch reports share a template (six numbered sections, ten
 * labelled parts per role family) but were written by different hands, so
 * the labels come in three spellings:
 *
 *   **What you actually do.** text          (paragraph, full stop)
 *   **What you actually do:** text          (paragraph, colon)
 *   - **What you actually do**: text        (list item, nested lines under it)
 *
 * Everything is kept. Text before a role's first label is its preamble; text
 * between labels belongs to the label above it; the parts of section 3 that
 * are not role families (part introductions, the summary table) stay with
 * the branch. Anything that does not fit the template stops the build with
 * the file and the role named, rather than being dropped.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');

class ParseError extends Error {}
function fail(where, msg) { throw new ParseError(`${where}: ${msg}`); }

/* The ten template parts, in template order. `key` is ours; `label` is the
 * start of the bold label as every report writes it. */
const TEMPLATE = [
  { key: 'what', label: 'What you actually do', anchor: 'what-you-do' },
  { key: 'day', label: 'A typical day and week', anchor: 'typical-day' },
  { key: 'hours', label: 'Hours, stress and lifestyle', anchor: 'hours-stress-lifestyle' },
  { key: 'profile', label: 'Human vs. quantitative profile', anchor: 'profile' },
  { key: 'pay', label: 'Compensation', anchor: 'pay' },
  { key: 'path', label: 'Career path', anchor: 'career-path' },
  { key: 'exits', label: 'Exit opportunities', anchor: 'exits' },
  { key: 'tiers', label: 'Tier list of employers', anchor: 'employers' },
  { key: 'enter', label: 'How to enter', anchor: 'how-to-enter' },
  { key: 'downsides', label: 'Honest downsides and who it is NOT a good fit for', anchor: 'downsides' }
];

/* Split a document on headings of exactly `level` (2 = "## "). Returns the
 * text before the first one and a list of { title, body }. */
function splitHeadings(text, level) {
  const re = new RegExp(`^${'#'.repeat(level)} (.+)$`, 'gm');
  const out = [];
  let m, last = null, head = null;
  while ((m = re.exec(text))) {
    if (last) last.body = text.slice(last.start, m.index);
    else head = text.slice(0, m.index);
    last = { title: m[1].trim(), start: m.index + m[0].length };
    out.push(last);
  }
  if (last) last.body = text.slice(last.start);
  else head = text;
  out.forEach((s) => delete s.start);
  return { head, sections: out };
}

/* Pipe tables: every table in `text`, as arrays of row cell-lists, header
 * first, separator row dropped. */
function tables(text) {
  const lines = text.split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith('|') || !/^\|\s*:?-/.test(lines[i + 1] || '')) continue;
    const rows = [];
    let j = i;
    for (; j < lines.length && lines[j].startsWith('|'); j++) {
      if (j === i + 1) continue;
      rows.push(splitRow(lines[j]));
    }
    out.push(rows);
    i = j;
  }
  return out;
}
function splitRow(line) {
  const s = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return s.split('|').map((c) => c.trim());
}

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').trim();

/* "P1-3.1 M&A and industry/coverage banker" -> "P1-3.1" */
function roleId(cell) {
  const m = /^((?:P\d-)?3\.\d+)\b/.exec(stripMd(cell));
  return m ? m[1] : null;
}

function slugify(s) {
  return s.toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/→/g, ' to ')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .split('-').slice(0, 8).join('-');
}

/* ------------------------------------------------------------------------ */
/* One role family's body                                                   */
/* ------------------------------------------------------------------------ */

const LABEL_LINE = /^(- )?\*\*([^*]+?)\*\*(.*)$/;

function templateKey(label) {
  const l = label.replace(/[.:]\s*$/, '').trim();
  for (const t of TEMPLATE) if (l === t.label || l.startsWith(t.label + ' ') || l.startsWith(t.label + '(')) return t;
  return null;
}

function parseRole(where, body) {
  const lines = body.replace(/\s+$/, '').split('\n');
  const parts = [];
  let cur = { key: '_pre', lines: [] };
  for (const line of lines) {
    const m = LABEL_LINE.exec(line);
    const t = m && templateKey(m[2]);
    if (t) {
      parts.push(cur);
      /* What follows the label on its own line: the punctuation that closes
       * the label is dropped; a qualifier in italics stays as text. */
      let rest = m[3].replace(/^[.:]\s?/, '').replace(/^\s+/, '');
      let label = m[2].trim().replace(/[.:]\s*$/, '');
      cur = { key: t.key, label, list: !!m[1], lines: [rest] };
      continue;
    }
    cur.lines.push(line);
  }
  parts.push(cur);

  const pre = parts.shift();
  const found = parts.map((p) => p.key);
  for (const t of TEMPLATE) {
    const n = found.filter((k) => k === t.key).length;
    if (n !== 1) fail(where, `template part "${t.label}" appears ${n} times (expected once)`);
  }
  const order = found.join(',');
  if (order !== TEMPLATE.map((t) => t.key).join(',')) fail(where, `template parts out of order: ${order}`);

  const sections = {};
  for (const p of parts) {
    let ls = p.lines;
    /* A list-item label's nested lines are indented under it. */
    if (p.list) ls = [ls[0]].concat(ls.slice(1).map((l) => l.replace(/^ {2}/, '')));
    /* The rule that closes a role family is layout, not content. */
    while (ls.length && /^\s*(---)?\s*$/.test(ls[ls.length - 1])) ls.pop();
    const md = ls.join('\n').replace(/^\s*\n/, '').trim();
    if (!md) fail(where, `template part "${p.label}" is empty`);
    sections[p.key] = { label: p.label, md };
  }
  const preMd = pre.lines.join('\n').replace(/^\s*---\s*$/gm, '').trim();
  return { preamble: preMd, sections };
}

/* ------------------------------------------------------------------------ */
/* One branch report                                                        */
/* ------------------------------------------------------------------------ */

const SECTION_TITLES = [
  '1. What this branch is',
  '2. Map of areas and sectors',
  '3. Role families',
  '4. Banks vs. other employer types',
  '5. Which backgrounds fit this branch',
  '6. Sources'
];

function parseReport(file, slug) {
  const where = path.relative(process.cwd(), file);
  if (!fs.existsSync(file)) fail(where, 'report missing');
  const text = fs.readFileSync(file, 'utf8');
  const top = splitHeadings(text, 2);
  const titles = top.sections.map((s) => s.title);
  if (titles.join('|') !== SECTION_TITLES.join('|')) fail(where, `sections are [${titles.join(' | ')}], expected the six template sections`);
  const h1 = /^# (.+)$/m.exec(top.head);
  if (!h1) fail(where, 'no title');
  const preface = top.head.slice(h1.index + h1[0].length).replace(/^\s*---\s*$/gm, '').trim();
  const sec = {};
  top.sections.forEach((s, i) => { sec[i + 1] = s.body.replace(/^\s*---\s*$/gm, '').trim(); });

  /* Section 3: role families at ### (one part) or #### under "### Part N". */
  const s3 = sec[3];
  const roleRe = /^(#{3,4}) ((?:P\d-)?3\.\d+) (.+)$/gm;
  const heads = [];
  let m;
  while ((m = roleRe.exec(s3))) heads.push({ index: m.index, end: m.index + m[0].length, level: m[1].length, id: m[2], title: m[3].trim() });
  if (!heads.length) fail(where, 'no role families found in section 3');

  /* Boundaries: the next role, the next "### " heading (a part, the summary),
   * or the end of the section. */
  const h3 = [];
  const h3re = /^### (.+)$/gm;
  while ((m = h3re.exec(s3))) h3.push({ index: m.index, end: m.index + m[0].length, title: m[1].trim() });

  const blocks = [];   /* section 3 in order: md / part / role */
  let pos = 0;
  const pushMd = (to) => { const md = s3.slice(pos, to).replace(/^\s*---\s*$/gm, '').trim(); if (md) blocks.push({ type: 'md', md }); };
  const marks = [...heads.map((h) => ({ ...h, kind: 'role' })), ...h3.filter((h) => !heads.some((r) => r.index === h.index)).map((h) => ({ ...h, kind: 'h3' }))]
    .sort((a, b) => a.index - b.index);
  const roles = [];
  marks.forEach((mk, i) => {
    const next = i + 1 < marks.length ? marks[i + 1].index : s3.length;
    pushMd(mk.index);
    if (mk.kind === 'h3') {
      blocks.push({ type: 'heading', title: mk.title });
      pos = mk.end;
    } else {
      const body = s3.slice(mk.end, next);
      const r = parseRole(`${where} ${mk.id}`, body);
      roles.push({ num: mk.id, title: mk.title, level: mk.level, ...r });
      blocks.push({ type: 'role', num: mk.id });
      pos = next;
    }
  });
  pushMd(s3.length);

  /* Parts: the "### Part N: ..." heading a role sits under. */
  let part = null;
  for (const b of blocks) {
    if (b.type === 'heading') part = /^Part \d/.test(b.title) ? b.title : null;
    if (b.type === 'role') roles.find((r) => r.num === b.num).part = part;
  }

  /* The summary table: the 7-column table under "### Role family summary". */
  const sumIdx = s3.search(/^### Role family summary/m);
  if (sumIdx < 0) fail(where, 'no "Role family summary" in section 3');
  const sumT = tables(s3.slice(sumIdx)).find((t) => t[0].length === 7);
  if (!sumT) fail(where, 'role family summary is not a 7-column table');
  const summaryHeader = sumT[0];
  const summary = {};
  for (const row of sumT.slice(1)) {
    const id = roleId(row[0]);
    if (!id) fail(where, `summary row without a role number: ${row[0]}`);
    summary[id] = row;
  }
  for (const r of roles) if (!summary[r.num]) fail(where, `role ${r.num} missing from the summary table`);
  if (Object.keys(summary).length !== roles.length) fail(where, `summary has ${Object.keys(summary).length} rows, section 3 has ${roles.length} role families`);

  /* Section 5(a): the 3-column background tables. The first is the branch's;
   * multi-part branches add one per part, under "#### Part N: ...". */
  const s5 = sec[5];
  const bgTables = [];
  const partRe = /^#{3,4} (Part \d[^\n]*)$/gm;
  const partMarks = [];
  while ((m = partRe.exec(s5))) partMarks.push({ index: m.index, title: m[1].trim() });
  const lines5 = s5.split('\n');
  let off = 0;
  for (let i = 0; i < lines5.length; i++) {
    const l = lines5[i];
    if (l.startsWith('|') && /^\|\s*:?-/.test(lines5[i + 1] || '') && splitRow(l).length === 3) {
      const t = tables(lines5.slice(i).join('\n'))[0];
      const pm = partMarks.filter((p) => p.index <= off).pop();
      bgTables.push({ part: pm ? pm.title : null, rows: t.slice(1) });
    }
    off += l.length + 1;
  }
  if (!bgTables.length) fail(where, 'no background ratings table in section 5');

  return { slug, title: h1[1].trim(), preface, sections: sec, s3blocks: blocks, roles, summaryHeader, summary, bgTables };
}

/* ------------------------------------------------------------------------ */
/* index.md                                                                 */
/* ------------------------------------------------------------------------ */

function parseIndex(file) {
  const where = path.relative(process.cwd(), file);
  const text = fs.readFileSync(file, 'utf8');
  const top = splitHeadings(text, 2);
  const want = ['1. The branches', '2. Shared scales and conventions', '3. Background fit matrix',
    '4. Role families compared across branches', '5. Assumptions made', '6. Gaps and low-confidence areas to verify'];
  const got = top.sections.map((s) => s.title);
  if (got.join('|') !== want.join('|')) fail(where, `sections are [${got.join(' | ')}]`);
  const S = {};
  top.sections.forEach((s, i) => { S[i + 1] = s.body.trim(); });

  const branchT = tables(S[1])[0];
  const branches = branchT.slice(1).map((r) => {
    const lm = /\[([^\]]+)\]\(reports\/([a-z-]+)\.md\)/.exec(r[0]);
    if (!lm) fail(where, `branch row without a report link: ${r[0]}`);
    return { name: lm[1], slug: lm[2], depth: r[1], roleCount: Number(r[2]), what: r[3] };
  });
  const afterTable = S[1].split('\n').filter((l) => !l.startsWith('|')).join('\n').trim();

  /* Background abbreviations, from the sentence that defines them. */
  const defs = /Columns are the 11 base backgrounds: (.+?)\. Ratings/.exec(S[3]);
  if (!defs) fail(where, 'background abbreviations not found in section 3');
  const backgrounds = defs[1].split(', ').map((p) => {
    const [k, v] = p.split(' = ');
    return { key: k.trim(), name: v.trim() };
  });
  if (backgrounds.length !== 11) fail(where, `expected 11 backgrounds, found ${backgrounds.length}`);

  const s3 = splitHeadings(S[3], 3);
  const byBranchT = tables(s3.sections.find((s) => s.title.startsWith('3.1')).body)[0];
  const overall = {};
  for (const r of byBranchT.slice(1)) {
    const slug = /reports\/([a-z-]+)\.md/.exec(r[0])[1];
    overall[slug] = {};
    backgrounds.forEach((b, i) => { overall[slug][b.key] = r[i + 1]; });
  }

  /* 3.2 and 4: one table per branch, under "#### [Name](reports/slug.md)". */
  function perBranch(body) {
    const out = {};
    const parts = splitHeadings(body, 4);
    for (const s of parts.sections) {
      const slug = /reports\/([a-z-]+)\.md/.exec(s.title);
      if (!slug) fail(where, `branch heading without link: ${s.title}`);
      out[slug[1]] = tables(s.body)[0];
    }
    return { intro: parts.head.trim(), tables: out };
  }
  const matrix = perBranch(s3.sections.find((s) => s.title.startsWith('3.2')).body);
  const compare = perBranch(S[4]);

  return {
    intro: top.head.replace(/^# .+$/m, '').trim(),
    branches, branchesNote: afterTable, scales: S[2], matrixIntro: s3.head.trim(),
    backgrounds, overall, matrix, compare, assumptions: S[5], gaps: S[6]
  };
}

/* ------------------------------------------------------------------------ */
/* The Italy pay addendum                                                   */
/* ------------------------------------------------------------------------ */

function parseItaly(file) {
  const where = path.relative(process.cwd(), file);
  const text = fs.readFileSync(file, 'utf8');
  const top = splitHeadings(text, 2);
  const titles = top.sections.map((s) => s.title);
  const want = ['1. How to read Italian pay', '2. Pay by branch and role family', '3. Graduate outcome benchmarks', '4. Sources'];
  if (titles.join('|') !== want.join('|')) fail(where, `sections are [${titles.join(' | ')}]`);
  const S = {};
  top.sections.forEach((s, i) => { S[i + 1] = s.body.trim(); });
  const s2 = splitHeadings(S[2], 3);
  const branches = {};
  for (const b of s2.sections) {
    const t = tables(b.body);
    if (t.length !== 1) fail(where, `${b.title}: expected one table, found ${t.length}`);
    const lines = b.body.split('\n');
    const before = lines.slice(0, lines.findIndex((l) => l.startsWith('|'))).join('\n').trim();
    const after = lines.slice(lines.length - [...lines].reverse().findIndex((l) => l.startsWith('|'))).join('\n').trim();
    branches[b.title] = { header: t[0][0], rows: t[0].slice(1), before, after };
  }
  return { preface: top.head.replace(/^# .+$/m, '').trim(), howToRead: S[1], intro: s2.head.trim(), branches, benchmarks: S[3], sources: S[4] };
}

module.exports = { parseReport, parseIndex, parseItaly, tables, splitRow, roleId, slugify, stripMd, norm, TEMPLATE, ParseError };

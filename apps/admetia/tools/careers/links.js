/* ---------------------------------------------------------------------------
 * Career Explorer: which role families an exit list names.
 *
 * A role is linked from another role's exits only on an exact match: one of
 * its names, as a whole phrase, appears in the exit text, and that name
 * belongs to no other role family (a name shared by two roles is ambiguous
 * and is logged, not linked). A role's names are derived mechanically from
 * its heading, so the rule can be read and checked:
 *
 *   - the heading without brackets, and each " / " or " → " alternative in it
 *     ("DevOps / site reliability / platform engineer" gives three);
 *   - an acronym written in brackets (ECM, DFIR, SDET);
 *   - the summary table's short name for the role;
 *   - for a name ending in a job word, the field it names ("data engineer"
 *     also matches "data engineering", "project manager" "project management")
 *     and the name without the job word, when two or more words remain.
 *
 * Single words are too loose to count as an exact match ("research",
 * "operations") unless listed in SINGLE below, and a bracketed acronym
 * counts only in capitals ("PhD" is not one). NOT_A_NAME removes the few
 * derived names that are ordinary phrases in this corpus; each is recorded in
 * careers/BUILD_NOTES.md.
 * ------------------------------------------------------------------------- */

'use strict';

const JOB = {
  analyst: [], specialist: [], professional: [], associate: [], officer: [], coordinator: [], steward: [],
  engineer: ['engineering'], manager: ['management'], consultant: ['consulting'], developer: ['development'],
  banker: ['banking'], trader: ['trading'], marketer: ['marketing'], accountant: ['accounting'],
  auditor: ['audit', 'auditing'], researcher: ['research'], advisor: ['advisory'], adviser: ['advisory'],
  planner: ['planning'], scientist: ['science'], economist: [], statistician: ['statistics'],
  architect: ['architecture'], tester: ['testing'], responder: ['response'], salesperson: ['sales'],
  structurer: ['structuring']
};
const SINGLE = new Set(['restructuring', 'structurer', 'structuring', 'devops', 'ecm', 'dcm', 'levfin', 'dfir', 'sdet', 'fp&a', 'mlops']);
const NOT_A_NAME = new Set([
  /* "Data science consultant" minus its job word: the whole field, not the role. */
  'data science'
]);

const clean = (s) => s.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();

function namesFor(role) {
  const out = new Set();
  const title = role.title;
  const acr = title.match(/\(([^)]*)\)/g) || [];
  acr.forEach((p) => p.replace(/[()]/g, '').split(/[\/,;]| and /).forEach((a) => {
    a = a.trim();
    if (/^[A-Z][A-Z&]{1,7}$/.test(a) || SINGLE.has(clean(a))) out.add(clean(a));
  }));
  const base = title.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  const segs = [base, ...base.split(/ \/ | → |: |, /)];
  if (role.shortName) segs.push(role.shortName.replace(/\([^)]*\)/g, ' '));
  for (let s of segs) {
    s = clean(s).replace(/^(the|a|an) /, '').replace(/[.,;:]+$/, '');
    if (!s) continue;
    add(out, s);
    const words = s.split(' ');
    const last = words[words.length - 1];
    if (JOB[last] !== undefined) {
      JOB[last].forEach((f) => add(out, words.slice(0, -1).concat(f).join(' ')));
      if (words.length - 1 >= 2) add(out, words.slice(0, -1).join(' '));
    }
  }
  return [...out].filter((n) => !NOT_A_NAME.has(n));
}
function add(set, s) {
  s = s.trim();
  if (!s) return;
  if (s.split(' ').length < 2 && !SINGLE.has(s)) return;
  set.add(s);
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* name -> [role ids], over every role. */
function nameTable(roles) {
  const t = new Map();
  for (const r of roles) for (const n of namesFor(r)) {
    if (!t.has(n)) t.set(n, new Set());
    t.get(n).add(r.id);
  }
  return t;
}

/* The roles an exit text names, plus what it named that matched nothing.
 * `text` is the markdown of the exits section. */
function resolveExits(role, text, table) {
  const plain = ' ' + clean(text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '')) + ' ';
  const hits = new Map();     /* role id -> name matched */
  const ambiguous = [];
  /* Longest names first, so "private equity associate" wins over "private equity". */
  const names = [...table.keys()].sort((a, b) => b.length - a.length);
  const taken = [];
  for (const n of names) {
    const re = new RegExp(`(^|[^a-z0-9&])(${esc(n)})(s|es)?(?=$|[^a-z0-9&])`, 'g');
    let m;
    while ((m = re.exec(plain))) {
      const start = m.index + m[1].length, end = start + m[2].length;
      if (taken.some(([a, b]) => start < b && end > a)) continue;
      const ids = [...table.get(n)].filter((id) => id !== role.id);
      if (table.get(n).has(role.id)) { taken.push([start, end]); continue; }   /* names itself */
      if (ids.length === 1) {
        if (!hits.has(ids[0])) hits.set(ids[0], n);
        taken.push([start, end]);
      } else if (ids.length > 1) {
        ambiguous.push({ name: n, ids });
        taken.push([start, end]);
      }
    }
  }
  /* What it named that has no page: the items of each "After N years:" list,
   * split at commas and semicolons outside brackets, with no match inside. */
  const unresolved = [];
  for (const item of exitItems(text)) {
    const s = ' ' + clean(item) + ' ';
    const matched = names.some((n) => new RegExp(`(^|[^a-z0-9&])${esc(n)}(s|es)?(?=$|[^a-z0-9&])`).test(s));
    if (!matched) unresolved.push(item);
  }
  return { links: [...hits.entries()].map(([id, name]) => ({ id, name })), ambiguous, unresolved };
}

function exitItems(text) {
  const plain = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').replace(/\n\s*-\s*/g, '\n');
  const out = [];
  const re = /After [^:]{1,40}?:\s*([^\n]*?)(?=(?:\.\s+[A-Z]|\.\s*$|\n|$))/g;
  let m;
  while ((m = re.exec(plain))) {
    let depth = 0, cur = '';
    for (const ch of m[1]) {
      if (ch === '(') depth++;
      if (ch === ')') depth = Math.max(0, depth - 1);
      if ((ch === ',' || ch === ';') && depth === 0) { push(cur); cur = ''; } else cur += ch;
    }
    push(cur);
  }
  function push(s) {
    s = s.replace(/^\s*(or|and|then)\s+/i, '').replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim().replace(/[.;:]$/, '');
    if (s && /[a-z]/i.test(s)) out.push(s);
  }
  return out;
}

module.exports = { namesFor, nameTable, resolveExits, SINGLE, NOT_A_NAME };

/* ---------------------------------------------------------------------------
 * Visuals drawn from data the site already publishes, as static HTML and SVG
 * that tools/build-shell.js stamps between <!-- gen:name --> markers. Each
 * one answers a single question, names where its data comes from, and has a
 * text or table equivalent beside it; none adds a figure of its own.
 *
 *   pathways   Which master's track leads to which career field?
 *              careers/data/careers.json: the calculators each field page
 *              links to (tools/careers/config.js CALCULATORS).
 *   timeline   When does each recruiting window open, and for whom?
 *              tools/careers/calendar.js ROWS, the same rows the recruiting
 *              calendar page draws in full.
 *   countries  The 46 countries, by region, each with its hiring view.
 *              data/atlas/index.js.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function atlas() {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/atlas/index.js'), 'utf8'), ctx);
  return ctx.ATLAS;
}

/* ---------------------------------------------------------------- pathways */

const TRACKS = [
  ['mba', 'MBA', 'mba.html'],
  ['masters:mif', 'Finance', 'masters.html?track=mif'],
  ['masters:mim', 'Management', 'masters.html?track=mim'],
  ['masters:marketing', 'Marketing', 'masters.html?track=marketing'],
  ['computing:cs', 'Computer Science', 'computing.html?track=cs'],
  ['computing:dsai', 'Data & AI', 'computing.html?track=dsai'],
  ['computing:conversion', 'Conversion', 'computing.html?track=conversion']
];

function pathways() {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'careers/data/careers.json'), 'utf8'));
  const fields = data.fields.map((f) => ({ slug: f.slug, name: f.name, roles: f.roles.length, calc: f.calculators.map((c) => c.key) }));
  /* Fields in the order that keeps the lines from crossing more than they
   * must: by the first track each one links to, unlinked fields last. */
  const order = (f) => { const i = TRACKS.findIndex((t) => f.calc.includes(t[0])); return i < 0 ? 99 : i; };
  fields.sort((a, b) => order(a) - order(b) || a.name.localeCompare(b.name));

  const W = 760, LW = 190, RW = 280, RH = 32, TOP = 34;
  const H = TOP + fields.length * RH + 8;
  const lGap = (fields.length * RH) / TRACKS.length;
  const ly = (i) => TOP + lGap * i + lGap / 2;
  const ry = (i) => TOP + RH * i + RH / 2;
  let svg = `<svg class="path-svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true" focusable="false">`;
  svg += `<text class="path-col" x="0" y="14">Master’s track</text><text class="path-col" x="${W - RW}" y="14">Career field</text>`;
  fields.forEach((f, fi) => {
    f.calc.forEach((k) => {
      const ti = TRACKS.findIndex((t) => t[0] === k);
      const x1 = LW, y1 = ly(ti), x2 = W - RW - 8, y2 = ry(fi), mx = (x1 + x2) / 2;
      svg += `<path class="path-line path-t${ti}" d="M${x1} ${y1.toFixed(1)} C${mx} ${y1.toFixed(1)} ${mx} ${y2.toFixed(1)} ${x2} ${y2.toFixed(1)}"/>`;
    });
  });
  TRACKS.forEach((t, i) => {
    svg += `<rect class="path-node path-t${i}" x="0" y="${(ly(i) - 15).toFixed(1)}" width="${LW}" height="30"/>` +
      `<text class="path-label" x="12" y="${(ly(i) + 5).toFixed(1)}">${esc(t[1])}</text>`;
  });
  fields.forEach((f, i) => {
    svg += `<circle class="path-dot${f.calc.length ? '' : ' path-none'}" cx="${W - RW - 8}" cy="${ry(i)}" r="4"/>` +
      `<text class="path-label${f.calc.length ? '' : ' path-muted'}" x="${W - RW + 4}" y="${ry(i) + 5}">${esc(f.name)}</text>`;
  });
  svg += '</svg>';

  const trackName = Object.fromEntries(TRACKS.map((t) => [t[0], t]));
  const table = `<div class="tbl-scroll" role="region" tabindex="0" aria-labelledby="path-cap"><table class="path-table">
<caption id="path-cap">Career fields and the master’s calculators linked from each</caption>
<thead><tr><th scope="col">Career field</th><th scope="col">Role families</th><th scope="col">Master’s calculators on this site</th></tr></thead>
<tbody>
${fields.map((f) => `<tr><th scope="row"><a href="careers/fields/${f.slug}.html" translate="no">${esc(f.name)}</a></th><td class="num">${f.roles}</td><td>${f.calc.length
    ? f.calc.map((k) => `<a href="${trackName[k][2]}">${esc(trackName[k][1])}</a>`).join(' · ')
    : '<span class="path-muted">None on this site</span>'}</td></tr>`).join('\n')}
</tbody></table></div>`;

  const total = fields.reduce((n, f) => n + f.roles, 0);
  return `<figure class="fig path-fig">
  <div class="path-draw">${svg}</div>
  ${table}
  <figcaption><span>The diagram and the table show the same links.</span> <span>A line means the field’s page in the Career Explorer points to that calculator; it is Admetia’s own mapping, not an entry requirement, and many roles are open to several degrees.</span> <span>Economics has no matching calculator here, except economic consulting, which links to Finance.</span> <span class="fig-src">Source: the Career Explorer’s ${fields.length} field reports (${total} role families), researched 9 October 2026.</span></figcaption>
</figure>`;
}

/* ---------------------------------------------------------------- timeline */

const KIND = [
  ['peak', 'B', 'Best time to apply'],
  ['open', 'A', 'Applications open'],
  ['rolling', 'R', 'Open all year'],
  ['before', 'E', 'Opened before this season'],
  ['assess', 'T', 'Tests and interviews'],
  ['event', 'S', 'Programme or start']
];
const FLAG = { H: 'High', M: 'Medium', L: 'Low' };

function timeline() {
  const C = require('./careers/calendar');
  const who = Object.fromEntries(C.WHO);
  const short = { ug1: 'First year', pen: 'Penultimate year', final: 'Final year', grad: 'Recent graduates', enrolled: 'Enrolled students only' };
  for (const k of Object.keys(who)) if (!short[k]) throw new Error(`visuals.js: no short label for calendar audience "${k}"`);
  const rows = C.ROWS.map((r) => {
    const cells = C.AXIS.map((m, i) => {
      const kinds = KIND.filter(([k]) => r.segs.some((s) => s[2] === k && i >= s[0] && i <= s[1]));
      if (!kinds.length) return '<td></td>';
      return `<td class="tl-on">${kinds.map(([k, letter, name]) => `<span class="tl-m tl-${k}"><span aria-hidden="true">${letter}</span><span class="visually-hidden">${esc(name)}</span></span>`).join('')}</td>`;
    }).join('');
    return `<tr><th scope="row"><a href="careers/recruiting-calendar.html#rc-${r.id}">${esc(r.name)}</a><span class="tl-who">${r.who.map((w) => `<span>${esc(short[w])}</span>`).join(', ')}</span></th><td class="tl-flag"><abbr title="${FLAG[r.flag]} confidence">${r.flag}</abbr></td>${cells}</tr>`;
  }).join('\n');
  return `<figure class="fig tl-fig">
  <ul class="tl-legend" aria-label="Key">
${KIND.map(([k, letter, name]) => `    <li><span class="tl-m tl-${k}" aria-hidden="true">${letter}</span> <span>${esc(name)}</span></li>`).join('\n')}
  </ul>
  <div class="tbl-scroll" role="region" tabindex="0" aria-labelledby="tl-cap"><table class="tl-table">
<caption id="tl-cap">One recruiting season, month by month: July of the year before a summer internship or a September start, to September of the start year</caption>
<thead>
<tr><td></td><td></td><th scope="colgroup" colspan="6" class="tl-year">The year before</th><th scope="colgroup" colspan="9" class="tl-year">The start year</th></tr>
<tr><th scope="col">Recruiting window and who can apply</th><th scope="col"><abbr title="How sure the line is">Sure?</abbr></th>${C.AXIS.map((m) => `<th scope="col" class="tl-mo">${m}</th>`).join('')}</tr>
</thead>
<tbody>
${rows}
</tbody></table></div>
  <figcaption><span>Each row links to its full entry in the recruiting calendar: who can apply, the evidence quoted and the official portals.</span> <span>“Sure?” is the research’s own confidence: H is stated by the employer for the current cycle or official data, M is a university careers service or several practitioners agreeing, L is inferred or from a single source, so check it before you plan around it.</span> <span class="fig-src">Source: Admetia’s reading of research/getting-in/recruiting-calendar.md; portal links opened 10 October 2026.</span></figcaption>
</figure>`;
}

/* --------------------------------------------------------------- countries */

function countries(view, label) {
  const A = atlas();
  const groups = [['Europe', A.countries.filter((c) => c.europe)], ['Outside Europe', A.countries.filter((c) => !c.europe)]];
  return `<div class="country-index">
${groups.map(([name, list]) => `  <div class="country-group">
    <h3>${esc(name)} <span class="count">${list.length}</span></h3>
    <ul class="country-links" aria-label="${esc(label)}: ${esc(name)}">
${list.slice().sort((a, b) => a.name.localeCompare(b.name)).map((c) => `      <li><a href="map.html#${c.id.toLowerCase()}${view ? '/' + view : ''}">${esc(c.name)}</a></li>`).join('\n')}
    </ul>
  </div>`).join('\n')}
</div>`;
}

/* The interface strings these blocks print, for the Italian checks. */
function strings() {
  const C = require('./careers/calendar');
  const out = new Set(['Master’s track', 'Career field', 'Career fields and the master’s calculators linked from each', 'Role families',
    'Master’s calculators on this site', 'None on this site', 'Key', 'Recruiting window and who can apply', 'Sure?', 'The year before', 'The start year',
    'Europe', 'Outside Europe']);
  KIND.forEach((k) => out.add(k[2]));
  C.AXIS.forEach((m) => out.add(m));
  return [...out];
}

module.exports = { pathways, timeline, countries, atlas, strings, TRACKS };

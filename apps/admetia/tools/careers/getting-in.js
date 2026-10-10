/* ---------------------------------------------------------------------------
 * Getting in: three pages of the Career Explorer, built with the rest of it.
 *
 *   careers/recruiting-calendar.html   when to apply, by sector and place
 *   careers/toolkit.html               CV templates (LaTeX, Word), letters
 *   careers/interview-prep.html        what is asked, stories, cards, cases
 *   careers/templates/*.tex, *.docx    the downloadable templates
 *
 * Content comes from research/getting-in/ (printed as written, in English,
 * translate="no") and from three editorial files beside this one:
 * calendar.js, templates.js and interview.js. Every passage those files
 * quote is looked up in the research here, and the build stops if one has
 * gone. Interface strings go through ui() like the rest of the explorer.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const P = require('./parse');
const M = require('./md');
const CAL = require('./calendar');
const TPL = require('./templates');
const IV = require('./interview');
const DOCX = require('./docx');

const SITE = 'https://iaconoalessandro.github.io/admetia/';
const READ_ON = '10 October 2026';

function build(ctx) {
  const { ROOT, ui, uiRaw, rel, U, esc, add, md } = ctx;
  const fail = (msg) => { throw new P.ParseError(msg); };

  /* ------------------------------------------------------------ research */
  const cache = new Map();
  const research = (f) => {
    if (!cache.has(f)) {
      const p = path.join(ROOT, 'research', f);
      if (!fs.existsSync(p)) fail(`research/${f} is missing`);
      cache.set(f, fs.readFileSync(p, 'utf8'));
    }
    return cache.get(f);
  };
  const flat = (s) => s.replace(/\s+/g, ' ');
  /* A quoted passage must still be in its file, word for word. */
  const check = (file, text, who) => {
    if (!flat(research(file)).toLowerCase().includes(flat(text).toLowerCase())) fail(`${who}: research/${file} no longer contains "${text.slice(0, 80)}…"`);
    return text;
  };
  /* The block under a heading, up to the next heading of the same level or higher. */
  const section = (file, prefix) => {
    const src = research(file);
    const lines = src.split('\n');
    const at = lines.findIndex((l) => l.startsWith(prefix));
    if (at < 0) fail(`research/${file}: no heading starting "${prefix}"`);
    const level = /^#+/.exec(lines[at])[0].length;
    let end = at + 1;
    while (end < lines.length && !(new RegExp(`^#{1,${level}} `).test(lines[end]))) end++;
    return { title: lines[at].replace(/^#+\s*/, ''), body: lines.slice(at + 1, end).join('\n').trim() };
  };
  /* A run of lines from the one starting with `prefix` up to (not
   * including) the first line matching `until`. */
  const blockFrom = (file, prefix, until) => {
    const lines = research(file).split('\n');
    const at = lines.findIndex((l) => l.startsWith(prefix));
    if (at < 0) fail(`research/${file}: no line starting "${prefix}"`);
    let end = at + 1;
    while (end < lines.length && !until.test(lines[end])) end++;
    if (end === lines.length) fail(`research/${file}: "${prefix}" never reaches ${until}`);
    return lines.slice(at, end).join('\n').trim();
  };
  /* Numbered items ("1. **…**") of a section, by number. */
  const numbered = (body) => {
    const out = new Map();
    for (const line of body.split('\n')) {
      const m = /^(\d+)\. (.*)$/.exec(line);
      if (m) out.set(Number(m[1]), m[2]);
    }
    return out;
  };
  const en = (html, tag = 'div', cls = '') => `<${tag}${cls ? ` class="${cls}"` : ''} translate="no" lang="en">${html}</${tag}>`;
  const ext = (href, text) => `<a href="${esc(href)}" rel="noopener noreferrer">${text}</a>`;
  const srcName = (f) => `research/${f}`;

  U.calendar = 'careers/recruiting-calendar.html';
  U.toolkit = 'careers/toolkit.html';
  U.interview = 'careers/interview-prep.html';
  const files = [];

  const head = (kicker, h1, standfirst) => `<header class="cx-head">
  <p class="kicker">${ui(kicker)}</p>
  <h1 class="headline cx-h1">${ui(h1)}</h1>
  <p class="standfirst">${ui(standfirst)}</p>
</header>`;
  const toc = (entries) => `<nav class="cx-toc" aria-labelledby="toc-title"><details open><summary id="toc-title">${ui('On this page')}</summary><ol>
${entries.map(([id, t]) => `<li><a href="#${id}">${ui(t)}</a></li>`).join('\n')}
</ol></details></nav>`;
  const flagBox = (from) => `<aside class="gi-flags" aria-labelledby="flags-h">
  <h2 id="flags-h" class="rubric">${ui('How sure is each line?')}</h2>
  <dl class="gi-flaglist">
    <div><dt><span class="gi-flag gi-H">H</span></dt><dd>${ui('Stated by the employer for the current cycle, or official data.')}</dd></div>
    <div><dt><span class="gi-flag gi-M">M</span></dt><dd>${ui('A university careers service or several independent practitioners agree.')}</dd></div>
    <div><dt><span class="gi-flag gi-L">L</span></dt><dd>${ui('Inferred, or from a single or anecdotal source. Check before you plan around it.')}</dd></div>
  </dl>
</aside>`;

  /* ================================================================ calendar */
  (function calendarPage() {
    const from = U.calendar;
    const A = CAL.AXIS;
    const sectorName = new Map(CAL.SECTORS), placeName = new Map(CAL.PLACES), whoName = new Map(CAL.WHO);
    const mon = (i) => `<span>${ui(A[i])}</span>`;
    const span = (s, e) => s === e ? mon(s) : `${mon(s)}–${mon(e)}`;
    const names = (list) => list.map((x) => `<span>${x}</span>`).join(' · ');
    const KIND = { open: 'Applications open', peak: 'Best time to apply', assess: 'Tests and interviews', event: 'Programme or start', rolling: 'Open all year', before: 'Opened before this season' };

    for (const r of CAL.ROWS) {
      for (const [f, q] of r.quotes) check(f, q, `calendar row ${r.id}`);
      for (const s of r.sectors) if (!sectorName.has(s)) fail(`calendar row ${r.id}: unknown sector ${s}`);
      for (const p of r.places) if (!placeName.has(p)) fail(`calendar row ${r.id}: unknown place ${p}`);
      for (const w of r.who) if (!whoName.has(w)) fail(`calendar row ${r.id}: unknown group ${w}`);
      for (const k of r.portals) if (!CAL.P[k]) fail(`calendar row ${r.id}: unknown portal ${k}`);
      for (const [s, e, k] of r.segs) if (!(s >= 0 && e < A.length && s <= e && KIND[k])) fail(`calendar row ${r.id}: bad segment ${s}-${e} ${k}`);
      if (!/^[HML]$/.test(r.flag)) fail(`calendar row ${r.id}: flag ${r.flag}`);
    }

    const axis = `<div class="rc-axis" aria-hidden="true"><span class="rc-axis-pad"></span><div class="rc-months">${A.map((m, i) => `<span${i === 6 || i === 12 ? ' class="rc-jan"' : ''}>${ui(m)}</span>`).join('')}</div></div>
<div class="rc-years" aria-hidden="true"><span class="rc-axis-pad"></span><div class="rc-yearband"><span style="grid-column:1 / 7">${ui('The year before')}</span><span style="grid-column:7 / 16">${ui('The start year')}</span></div></div>`;

    const rows = CAL.ROWS.map((r) => {
      const kinds = [...new Set(r.segs.map((s) => s[2]))];
      const lines = kinds.map((k) => {
        const segs = r.segs.filter((s) => s[2] === k).map(([s, e]) => span(s, e)).join(', ');
        const label = r.labels && r.labels[k] ? ui(r.labels[k]) : ui(KIND[k]);
        return `<li><span class="rc-key rc-${k}" aria-hidden="true"></span><b>${k === 'before' || k === 'rolling' ? ui(KIND[k]) : segs}</b> ${label}</li>`;
      }).concat((r.marks || []).map(([m, t]) => `<li><span class="rc-key rc-markkey" aria-hidden="true"></span>${ui(t)}</li>`));
      const portals = r.portals.length ? `<p class="rc-portals"><b>${ui('Where to apply')}</b> ${r.portals.map((k) => ext(CAL.P[k][1], `<span translate="no">${esc(CAL.P[k][0])}</span>`)).join(' · ')}</p>` : '';
      return `<li class="rc-row" id="rc-${r.id}" data-sectors="${r.sectors.join(' ')}" data-places="${r.places.join(' ')}" data-who="${r.who.join(' ')}">
  <div class="rc-row-h">
    <h3 class="rc-name">${ui(r.name)}</h3>
    <p class="rc-meta"><span class="gi-flag gi-${r.flag}">${r.flag}</span> ${names(r.sectors.map((s) => ui(sectorName.get(s))))} <span class="rc-dot">·</span> ${r.places.length === CAL.PLACES.length ? `<span>${ui('All countries')}</span>` : names(r.places.map((p) => ui(placeName.get(p))))}</p>
  </div>
  <div class="rc-track" aria-hidden="true">${r.segs.map(([s, e, k]) => `<i class="rc-bar rc-${k}" style="--s:${s};--e:${e}"></i>`).join('')}${(r.marks || []).map(([m]) => `<b class="rc-mark" style="--m:${m}"></b>`).join('')}</div>
  <ul class="rc-lines">${lines.join('')}</ul>
  <details class="rc-more"><summary>${ui('Who can apply, the evidence and where to apply')}</summary>
    <p class="rc-who"><b>${ui('Who can apply')}</b> ${r.who.map((w) => `<span>${ui(whoName.get(w))}</span>`).join('; ')}</p>
    <p class="rc-note">${ui(r.note)}</p>
    <ul class="rc-quotes" translate="no" lang="en">${r.quotes.map(([f, q]) => `<li>“${M.inline(q, {})}” <span class="rc-src">${esc(srcName(f))}</span></li>`).join('')}</ul>
    ${portals}
  </details>
</li>`;
    }).join('\n');

    const filters = `<form class="cx-filters rc-filters" data-rc-filters aria-label="${ui('Filter the calendar')}" hidden>
  <div><label class="cx-label" for="rc-sector">${ui('Sector')}</label><select id="rc-sector" class="cx-input" name="sector"><option value="">${ui('All sectors')}</option>${CAL.SECTORS.map(([k, n]) => `<option value="${k}">${ui(n)}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="rc-place">${ui('Country')}</label><select id="rc-place" class="cx-input" name="place"><option value="">${ui('All countries')}</option>${CAL.PLACES.map(([k, n]) => `<option value="${k}">${ui(n)}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="rc-who">${ui('Where you are')}</label><select id="rc-who" class="cx-input" name="who"><option value="">${ui('Show every row')}</option>${CAL.WHO.map(([k, n]) => `<option value="${k}">${ui(n)}</option>`).join('')}</select></div>
  <p class="cx-f-count" aria-live="polite" data-rc-count></p>
</form>`;

    const legend = `<ul class="rc-legend" aria-label="${ui('Key')}">${['peak', 'open', 'assess', 'event', 'rolling'].map((k) => `<li><span class="rc-key rc-${k}" aria-hidden="true"></span>${ui(KIND[k])}</li>`).join('')}<li><span class="rc-key rc-markkey" aria-hidden="true"></span>${ui('A dated deadline')}</li><li class="rc-today-key" hidden><span class="rc-key rc-todaykey" aria-hidden="true"></span>${ui('Today')}</li></ul>`;

    /* Month-by-month tables, decision rules and myths: quoted whole. */
    const tables = CAL.TABLES.map(([id, label, prefix]) => {
      const s = section(CAL.RC, prefix);
      return `<details class="cx-srcfold" id="mm-${id}"${id === 'msc' ? ' open' : ''}><summary>${ui(label)}</summary>${en(`<p class="gi-srcline">${esc(s.title)}</p>${md(from, s.body)}`)}</details>`;
    }).join('\n');
    const rules = numbered(section(CAL.RC, '## Decision rules').body);
    const myths = numbered(section(CAL.RC, '## Common mistakes and myths').body);
    for (const n of [...CAL.RULES]) if (!rules.has(n)) fail(`recruiting-calendar.md has no decision rule ${n}`);
    for (const n of [...CAL.MYTHS]) if (!myths.has(n)) fail(`recruiting-calendar.md has no myth ${n}`);
    const h2 = blockFrom(CAL.RC, '**H2. "Rolling applications', /^\*\*H3\./);

    const body = `${head('Getting in · recruiting calendar', 'When to apply', 'The recruiting windows for internships, graduate schemes and six-month stages in banking, consulting, Big 4, FMCG and tech, in London, Paris, Frankfurt, Milan, Zurich and the US. Filter by sector, country and where you are in your studies.')}
<div class="cx-layout">
${toc([['timeline', 'The timeline'], ['early', 'Why early beats the deadline'], ['month-by-month', 'Month by month, by programme'], ['rules', 'Decision rules'], ['myths', 'Myths'], ['cal-sources', 'Sources and limits']])}
<div class="cx-body">
<section id="timeline" class="cx-sec" aria-labelledby="timeline-h">
<h2 id="timeline-h">${ui('The timeline')}</h2>
<p class="cx-note">${ui('One season runs from July of the year before a summer internship or a September start to September of the start year. Each row shows when applications open, the weeks to aim for, when assessments run and when the programme starts. Open a row for who can apply, the evidence and the official portals.')}</p>
${flagBox(from)}
${filters}
${legend}
<div class="rc-gantt" data-rc-gantt>
${axis}
<ol class="rc-rows">
${rows}
</ol>
<p class="cx-empty" data-rc-none hidden>${ui('No row matches these filters.')}</p>
</div>
</section>
<section id="early" class="cx-sec" aria-labelledby="early-h">
<h2 id="early-h">${ui('Why early beats the deadline')}</h2>
<p>${ui('In a rolling process the stated deadline is the last possible day, not the recommended one. Employers say assessments start before the deadline and that roles close when they are full; none publishes offer rates by application week, so how much earlier helps is unknown. The research’s verdict on this, word for word:')}</p>
${en(md(from, h2), 'div', 'cx-prose gi-quote')}
<p class="cx-src-note">${ui('Some figures in circulation put a number on the advantage (for example that applying three days before a deadline cuts interview odds by 70–80%). The research file carries them without a source, and they contradict its own verdict above, so this page does not use them.')}</p>
</section>
<section id="month-by-month" class="cx-sec" aria-labelledby="mm-h">
<h2 id="mm-h">${ui('Month by month, by programme')}</h2>
<p class="cx-note">${ui('The research’s two calendars, for a one-year UK master’s and a two-year continental Master in Management. “Y” is the year you finish a one-year UK MSc, and the year of your first-year summer internship in a two-year MiM.')}</p>
${tables}
</section>
<section id="rules" class="cx-sec" aria-labelledby="rules-h">
<h2 id="rules-h">${ui('Decision rules')}</h2>
${en(`<ol class="gi-numbered">${CAL.RULES.map((n) => `<li value="${n}">${M.inline(rules.get(n), {})}</li>`).join('')}</ol>`, 'div', 'cx-prose')}
</section>
<section id="myths" class="cx-sec" aria-labelledby="myths-h">
<h2 id="myths-h">${ui('Myths')}</h2>
${en(`<ol class="gi-numbered">${CAL.MYTHS.map((n) => `<li value="${n}">${M.inline(myths.get(n), {})}</li>`).join('')}</ol>`, 'div', 'cx-prose')}
</section>
<section id="cal-sources" class="cx-sec" aria-labelledby="cal-src-h">
<h2 id="cal-src-h">${ui('Sources and limits')}</h2>
<p>${ui('Months and flags come from research/getting-in/recruiting-calendar.md (researched 30 September 2026, with employer pages re-read on 10 October 2026). Dates move every cycle: confirm each one on the employer’s own page before you plan around it. Portal links were opened on 10 October 2026.')}</p>
<p class="cx-src-note">${ui('Several bank, McKinsey and BCG pages could not be read by the researchers, so some opening dates rest on careers-service and practitioner consensus (flag M). The Paris, Frankfurt, Milan and Zurich stage windows are practitioner consensus only (flag L).')}</p>
</section>
</div></div>`;
    add({ path: from, title: 'Recruiting calendar', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Recruiting calendar' }],
      scripts: ['careers/assets/getting-in.js'],
      description: 'When to apply for internships, graduate schemes and six-month stages in banking, consulting, Big 4, FMCG and tech across London, Paris, Frankfurt, Milan, Zurich and the US, with official portals.', body });
  }());

  /* ================================================================= toolkit */
  (function toolkitPage() {
    const from = U.toolkit;
    for (const [k, [f, q]] of Object.entries(TPL.Q)) check(f, q, `templates.js quote ${k}`);
    const quote = (k) => {
      const [f, q] = TPL.Q[k];
      return `<li translate="no" lang="en">“${M.inline(q, {})}” <span class="rc-src">${esc(srcName(f))}</span></li>`;
    };
    const tplPath = (slug, ext) => `careers/templates/${slug}.${ext}`;
    const overleaf = (slug, name) => `https://www.overleaf.com/docs?snip_uri=${encodeURIComponent(SITE + tplPath(slug, 'tex'))}&snip_name=${encodeURIComponent(name)}&engine=pdflatex`;

    /* The files themselves. */
    for (const d of TPL.documents()) {
      files.push({ path: tplPath(d.slug, 'tex'), content: TPL.toTex(d) });
      files.push({ path: tplPath(d.slug, 'docx'), content: DOCX.docx(d.blocks, d.title) });
    }

    const downloads = (slug, name) => `<p class="tk-dl">
  <a class="btn primary small" href="${rel(from, tplPath(slug, 'docx'))}" download>${ui('Word (.docx)')}</a>
  <a class="btn small" href="${rel(from, tplPath(slug, 'tex'))}" download>${ui('LaTeX (.tex)')}</a>
  <a class="btn small ghost" href="${esc(overleaf(slug, name))}" rel="noopener noreferrer">${ui('Open in Overleaf')}</a>
</p>`;

    /* An HTML preview of a document, from the same blocks as the files. */
    const preview = (blocks) => {
      const out = [];
      let list = false;
      const inl = (s) => M.inline(s, {});
      for (const b of blocks) {
        if (b.bullet !== undefined) { if (!list) { out.push('<ul>'); list = true; } out.push(`<li>${inl(b.bullet)}</li>`); continue; }
        if (list) { out.push('</ul>'); list = false; }
        if (b.name) out.push(`<p class="tk-name">${inl(b.name)}</p>`);
        else if (b.contact) out.push(`<p class="tk-contact">${inl(b.contact)}</p>`);
        else if (b.h) out.push(`<p class="tk-h">${inl(b.h)}</p>`);
        else if (b.left !== undefined) out.push(`<p class="tk-entry"><b>${inl(b.left)}</b><span>${inl(b.right || '')}</span></p>`);
        else if (b.sub !== undefined) out.push(`<p class="tk-sub">${inl(b.sub)}</p>`);
        else if (b.note !== undefined) out.push(`<p class="tk-guide">${inl(b.note)}</p>`);
        else out.push(`<p>${inl(b.text)}</p>`);
      }
      if (list) out.push('</ul>');
      return `<div class="tk-sheet" translate="no" lang="en">${out.join('')}</div>`;
    };

    const cvCards = TPL.CVS.map((c, i) => `<article class="tk-card" id="${c.slug}" aria-labelledby="${c.slug}-h">
  <p class="kicker"><span>${ui('Template')}</span> ${i + 1}</p>
  <h3 id="${c.slug}-h" class="tk-card-h">${ui(c.title)}</h3>
  <p class="tk-for"><b>${ui('For')}</b> ${ui(c.for)}</p>
  <ul class="tk-why">${c.why.map((w) => `<li>${ui(w)}</li>`).join('')}</ul>
  ${downloads(c.slug, c.title)}
  <details class="tk-prev"><summary>${ui('Preview the template')}</summary>${preview(c.blocks)}</details>
  <details class="tk-ev"><summary>${ui('The research behind it')}</summary><ul class="rc-quotes">${c.quotes.map(quote).join('')}</ul></details>
</article>`).join('\n');

    /* Motivation letters, school by school. */
    const unitName = (L, n) => `${n.toLocaleString('en-GB')} <span>${ui(L.unit === 'chars' ? 'characters' : 'words')}</span>`;
    const outline = (L, items, max) => `<ol class="tk-outline">${items.map(([h, n, g]) => `<li><div class="tk-ol-h"><b>${ui(h)}</b><span><span>${ui('about')}</span> ${unitName(L, n)}</span></div><span class="tk-budget" aria-hidden="true"><i style="width:${(100 * n / max).toFixed(1)}%"></i></span><p>${ui(g)}</p></li>`).join('')}</ol>`;
    for (const L of TPL.LETTERS) {
      const parts = L.parts || [{ max: L.max, outline: L.outline }];
      for (const p of parts) {
        const sum = p.outline.reduce((s, o) => s + o[1], 0);
        if (sum > p.max) fail(`templates.js ${L.slug}: the outline budgets (${sum}) exceed the limit (${p.max})`);
      }
    }
    const letterCards = TPL.LETTERS.map((L) => `<article class="tk-card tk-letter" id="${L.slug}" aria-labelledby="${L.slug}-h">
  <p class="kicker"><span translate="no">${esc(L.school)}</span> · <span translate="no">${esc(L.programme)}</span></p>
  <h3 id="${L.slug}-h" class="tk-card-h"><span>${ui('Limit:')}</span> ${ui(L.limitLabel)} <span class="gi-flag gi-${L.flag}" title="${ui(L.flagWhy)}">${L.flag}</span></h3>
  <details class="tk-ev" open><summary>${ui('What the school says')}</summary><ul class="rc-quotes">${L.says.map(quote).join('')}</ul></details>
  <p class="tk-sug">${ui('A way to spend the limit (Admetia’s suggestion, not the school’s rule):')}</p>
  ${L.parts ? L.parts.map((p) => `<p class="tk-part">${ui(p.label)}</p>${outline(L, p.outline, p.max)}`).join('') : outline(L, L.outline, L.max)}
  ${downloads(L.slug, `Motivation letter: ${L.school}`)}
</article>`).join('\n');

    const checker = `<div class="tk-check" data-tk-check data-tk-config="${esc(JSON.stringify({ letters: TPL.LETTERS.map((L) => ({ slug: L.slug, school: L.school, unit: L.unit, max: L.max, min: L.min || 0, parts: (L.parts || []).map((p) => ({ label: p.label, max: p.max })) })), checks: TPL.CHECKS }))}" hidden>
  <div class="tk-check-row">
    <div><label class="cx-label" for="tk-school">${ui('School and limit')}</label><select id="tk-school" class="cx-input" data-tk-school></select></div>
    <p class="tk-counts" aria-live="polite" data-tk-counts></p>
  </div>
  <label class="cx-label" for="tk-text">${ui('Your draft')}</label>
  <textarea id="tk-text" class="cx-input tk-text" rows="12" data-tk-text spellcheck="true"></textarea>
  <div class="tk-meter" aria-hidden="true"><i data-tk-meter></i></div>
  <ul class="tk-flags" data-tk-flags aria-live="polite"></ul>
  <p class="cx-src-note">${ui('Counted in this browser; nothing is sent. The draft is kept in this browser until you clear it.')} <button type="button" class="cx-btn-text" data-tk-clear>${ui('Clear the draft')}</button></p>
</div>
<noscript><p class="cc-warn">${ui('The draft checker needs JavaScript. The limits are listed with each school above.')}</p></noscript>`;

    const cvTable = section('getting-in/breaking-in.md', '## 3. CV norms by country');
    const cvTableMd = cvTable.body.split('\n').filter((l) => l.startsWith('|')).join('\n');

    const body = `${head('Getting in · application toolkit', 'Application toolkit', 'Four one-column CV templates that applicant tracking systems can read, in Word and LaTeX, and motivation-letter skeletons sized to Bocconi’s, Imperial’s, LSE’s and ESCP’s own limits, with a checker for your draft.')}
<div class="cx-layout">
${toc([['cvs', 'CV templates'], ['cv-rules', 'CV rules by country'], ['bullets', 'Writing the bullets'], ['letters', 'Motivation letters by school'], ['checker', 'Check your draft'], ['tk-ai', 'AI and your own words']])}
<div class="cx-body">
<section id="cvs" class="cx-sec" aria-labelledby="cvs-h">
<h2 id="cvs-h">${ui('CV templates')}</h2>
<p class="cx-note">${ui('Each template is one column with standard headings, the contact details in the body, real bullets and no tables, text boxes, icons or photos: the safe default for applicant tracking systems. Replace every [bracketed] placeholder. The Word file opens in Word, Google Docs, Pages and LibreOffice; the LaTeX file compiles with pdfLaTeX, and the Overleaf button opens a copy in your own Overleaf account.')}</p>
<div class="tk-cards">
${cvCards}
</div>
</section>
<section id="cv-rules" class="cx-sec" aria-labelledby="cv-rules-h">
<h2 id="cv-rules-h">${ui('CV rules by country')}</h2>
<p class="cx-note">${ui('The templates follow the UK and US finance and consulting norm (one page, no photo, grades shown). For a local employer elsewhere, the research’s table, word for word:')}</p>
${en(md(from, cvTableMd), 'div', 'cx-prose')}
<ul class="rc-quotes">${['photoBias', 'imperialPages', 'hecCv', 'lbsCv', 'hsgCv', 'escpCv'].map(quote).join('')}</ul>
</section>
<section id="bullets" class="cx-sec" aria-labelledby="bullets-h">
<h2 id="bullets-h">${ui('Writing the bullets')}</h2>
<p>${ui('Start with a verb, say what you worked on, and end with a result, with a number where there is one. The first screen is quick and pattern-based, so the employer, the deal or project and the number should be readable at a glance.')}</p>
<div class="cx-table" role="region" tabindex="0" aria-labelledby="bullets-cap"><table class="tk-ba"><caption id="bullets-cap" class="visually-hidden">${ui('Weak and strong versions of the same bullet')}</caption>
<thead><tr><th scope="col">${ui('Weak')}</th><th scope="col">${ui('Strong')}</th></tr></thead><tbody translate="no" lang="en">
<tr><td>Responsible for financial analysis on deals.</td><td>Built a three-statement model and DCF for a €120m packaging target; the valuation range went into the client’s board deck.</td></tr>
<tr><td>Helped organise events for the finance society.</td><td>Organised 6 recruiting events with 4 banks; attendance up from 40 to 150 a session.</td></tr>
<tr><td>Worked on a machine-learning project.</td><td>Trained a gradient-boosted model on 2m transactions in Python; cut false fraud alerts by 18% against the rules-based baseline.</td></tr>
<tr><td>Team player with strong communication skills.</td><td>Led a 5-person team through a 48-hour case competition; 2nd of 60 teams.</td></tr>
</tbody></table></div>
<p class="cx-src-note">${ui('The examples are invented to show the pattern. Never invent a number on your own CV: interviewers ask about every line.')}</p>
</section>
<section id="letters" class="cx-sec" aria-labelledby="letters-h">
<h2 id="letters-h">${ui('Motivation letters by school')}</h2>
<p class="cx-note">${ui('Limits differ by an order of magnitude, so one letter cannot be reused: write a bank of facts and stories once, then write each letter to that school’s prompt and limit. The schools publish limits and prompts; how to divide the space is our suggestion.')}</p>
<ul class="rc-quotes">${['noReuse', 'factBank', 'noBlueprint'].map(quote).join('')}</ul>
<div class="tk-cards">
${letterCards}
</div>
</section>
<section id="checker" class="cx-sec" aria-labelledby="checker-h">
<h2 id="checker-h">${ui('Check your draft')}</h2>
<p class="cx-note">${ui('Paste a draft to count it against the school’s limit, and to flag what schools ask you to leave out: rankings, generic praise of the city or the school, and another school’s name left in from a different letter.')}</p>
${checker}
</section>
<section id="tk-ai" class="cx-sec" aria-labelledby="tk-ai-h">
<h2 id="tk-ai-h">${ui('AI and your own words')}</h2>
<p>${ui('Employers and schools allow AI for research, structure and proofreading, and ban it for writing answers in assessments and interviews. Detectors misread non-native English, so the practical risk is a follow-up question about a sentence you cannot explain.')}</p>
<ul class="rc-quotes">${quote('aiLetters')}</ul>
</section>
</div></div>`;
    add({ path: from, title: 'Application toolkit', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Application toolkit' }],
      scripts: ['careers/assets/getting-in.js'],
      description: 'Free one-column CV templates in Word and LaTeX for banking, consulting, tech and master’s applications, and motivation-letter skeletons sized to Bocconi, Imperial, LSE and ESCP limits.', body });
  }());

  /* ================================================================ interview */
  (function interviewPage() {
    const from = U.interview;
    const FREQ = ['Always', 'Usually', 'Often', 'Sometimes'];

    /* The research tables, area by area, with the frequency read from them. */
    const areas = IV.AREAS.map(([key, name, prefix]) => {
      const s = section(IV.IC, prefix);
      const t = P.tables(s.body)[0];
      if (!t) fail(`interview-cases.md "${s.title}" has no table`);
      const col = t[0].findIndex((c) => /How often/i.test(c));
      if (col < 0) fail(`interview-cases.md "${s.title}": no "How often" column`);
      const counts = Object.fromEntries(FREQ.map((f) => [f, 0]));
      for (const row of t.slice(1)) {
        const f = (/\*\*(Always|Usually|Often|Sometimes)\*\*/.exec(row[col]) || [])[1];
        if (!f) fail(`interview-cases.md "${s.title}": a row has no frequency word: ${row[0]}`);
        counts[f]++;
      }
      return { key, name, s, counts };
    });
    for (const [firm, list] of IV.CRITERIA) for (const c of list) check(IV.IC, c, `interview.js criteria ${firm}`);

    const freqBox = `<dl class="gi-freq">${FREQ.map((f) => `<div><dt><span class="iv-pill iv-${f.toLowerCase()}">${ui(f)}</span></dt><dd>${ui({ Always: 'The employer states the stage is part of the process for that role.', Usually: 'Several employers state it, or one says it applies to most candidates.', Often: 'Practitioners or repeated candidate reports agree; no employer states it as a rule.', Sometimes: 'Reported for some firms, offices or years only.' }[f])}</dd></div>`).join('')}</dl>`;

    const grid = `<div class="cx-table" role="region" tabindex="0" aria-labelledby="iv-grid-cap"><table class="iv-grid"><caption id="iv-grid-cap" class="visually-hidden">${ui('Exercises by career area and how often they appear')}</caption>
<thead><tr><th scope="col">${ui('Career area')}</th>${FREQ.map((f) => `<th scope="col">${ui(f)}</th>`).join('')}</tr></thead><tbody>
${areas.map((a) => `<tr><th scope="row"><a href="#area-${a.key}">${ui(a.name)}</a></th>${FREQ.map((f) => `<td>${a.counts[f] || '<span class="iv-zero">–</span>'}</td>`).join('')}</tr>`).join('\n')}
</tbody></table></div>`;

    const areaBlocks = areas.map((a, i) => `<details class="cx-srcfold iv-area" id="area-${a.key}"${i === 0 ? ' open' : ''}><summary>${ui(a.name)}</summary>${en(`<p class="gi-srcline">${esc(a.s.title)}</p>${md(from, a.s.body).replace(/<strong>(Always|Usually|Often|Sometimes)<\/strong>/g, (m, f) => `<strong class="iv-pill iv-${f.toLowerCase()}">${f}</strong>`)}`, 'div', 'cx-prose iv-research')}</details>`).join('\n');

    const bottom = numbered(section(IV.IC, '## Bottom line').body);
    const official = `<ul class="cx-links iv-official">${IV.OFFICIAL.map(([firm, what, url]) => `<li>${ext(url, `<span translate="no">${esc(firm)}</span>`)} <span class="iv-off-what" translate="no" lang="en">${esc(what)}</span></li>`).join('')}</ul>`;
    const caseTypes = blockFrom(IV.IC, '**The official practice cases', /^Sources: McKinsey/);

    /* STAR builder. */
    const star = `<div class="iv-star" data-iv-star hidden>
  <div class="iv-tabs" role="tablist" aria-label="${ui('Your five stories')}">${IV.STORIES.map((s, i) => `<button type="button" role="tab" class="iv-tab" id="star-tab-${s.key}" aria-controls="star-${s.key}" aria-selected="${i === 0}" data-iv-tab="${s.key}">${ui(s.name)}<span class="iv-tick" data-iv-done="${s.key}" aria-hidden="true"></span></button>`).join('')}</div>
  ${IV.STORIES.map((s, i) => `<div class="iv-panel" role="tabpanel" id="star-${s.key}" aria-labelledby="star-tab-${s.key}" data-iv-panel="${s.key}"${i ? ' hidden' : ''}>
    <p class="iv-shows"><b>${ui('What it has to show')}</b> ${ui(s.shows)}</p>
    <p class="iv-prompts"><b>${ui('How it is asked')}</b> ${s.prompts.map((p) => `<span class="iv-q" translate="no" lang="en">“${esc(p)}”</span>`).join(' ')}</p>
    <div class="iv-fields">
      ${[['title', 'A title you will recognise', 1], ['s', 'Situation: where, when, what was at stake', 3], ['t', 'Task: what you, personally, had to do', 2], ['a', 'Action: what you did, step by step, in the first person', 6], ['r', 'Result: what changed, with a number if there is one', 3], ['l', 'What you learned or would do differently', 2]].map(([k, label, rows]) => `<label class="cx-label" for="star-${s.key}-${k}">${ui(label)}</label>${rows === 1 ? `<input id="star-${s.key}-${k}" class="cx-input" type="text" data-iv-f="${k}">` : `<textarea id="star-${s.key}-${k}" class="cx-input" rows="${rows}" data-iv-f="${k}"></textarea>`}`).join('\n      ')}
    </div>
    <fieldset class="iv-crit"><legend class="cx-label">${ui('Which criteria does this story show? Employers’ own words:')}</legend>
      ${IV.CRITERIA.map(([firm, list, note]) => `<p class="iv-critrow"><b translate="no">${esc(firm)}</b>${note ? ` <span class="iv-crit-note">(<span>${ui(note)}</span>)</span>` : ''} ${list.map((c) => `<label class="iv-chip"><input type="checkbox" data-iv-c="${esc(firm + ': ' + c)}"><span translate="no" lang="en">${esc(c)}</span></label>`).join('')}</p>`).join('\n      ')}
    </fieldset>
    <ul class="iv-checks" data-iv-checks aria-live="polite"></ul>
  </div>`).join('\n  ')}
  <div class="iv-star-foot">
    <p class="cx-src-note" data-iv-time></p>
    <p class="cc-tools"><button type="button" class="btn small primary" data-iv-copy>${ui('Copy all five stories')}</button><button type="button" class="btn small" data-iv-download>${ui('Download as text')}</button><button type="button" class="btn small ghost" data-iv-clear>${ui('Clear my stories')}</button></p>
    <p class="cc-flash" data-iv-flash aria-live="polite"></p>
  </div>
  <h3 class="cc-h3">${ui('Coverage: which criteria your stories show')}</h3>
  <div class="cx-table" role="region" tabindex="0" aria-label="${ui('Coverage: which criteria your stories show')}"><table class="iv-cover" data-iv-cover></table></div>
</div>
<noscript><p class="cc-warn">${ui('The story builder needs JavaScript. The five story types and how they are asked are listed below.')}</p></noscript>`;
    const starStatic = `<ul class="iv-star-static" data-iv-static>${IV.STORIES.map((s) => `<li><b>${ui(s.name)}</b> ${ui(s.shows)} <span translate="no" lang="en">${s.prompts.map((p) => `“${esc(p)}”`).join(' ')}</span></li>`).join('')}</ul>`;

    /* Study cards. */
    const decks = `<div class="iv-decks" data-iv-decks>
  <div class="iv-deckbar" data-iv-deckbar hidden>
    <label class="cx-label" for="iv-deck">${ui('Deck')}</label>
    <select id="iv-deck" class="cx-input" data-iv-deck><option value="all">${ui('All four decks')}</option>${IV.DECKS.map((d) => `<option value="${d.key}">${ui(d.name)}</option>`).join('')}</select>
    <button type="button" class="btn small primary" data-iv-flash-start>${ui('Practise as flashcards')}</button>
  </div>
  <div class="iv-flashcard" data-iv-card hidden>
    <p class="iv-fc-meta" data-iv-fc-meta></p>
    <div class="iv-fc-q" data-iv-fc-q translate="no" lang="en"></div>
    <div class="iv-fc-a" data-iv-fc-a translate="no" lang="en" hidden></div>
    <p class="cc-tools"><button type="button" class="btn small primary" data-iv-fc-show>${ui('Show the answer')}</button><button type="button" class="btn small" data-iv-fc-again hidden>${ui('Again later')}</button><button type="button" class="btn small" data-iv-fc-know hidden>${ui('I knew it')}</button><button type="button" class="btn small ghost" data-iv-fc-stop>${ui('Back to the list')}</button></p>
  </div>
  ${IV.DECKS.map((d) => `<div class="iv-deck" data-iv-deckset="${d.key}"><h3 class="cc-h3">${ui(d.name)} <span class="cx-count">${d.cards.length}</span></h3>
  <ol class="iv-cards">${d.cards.map(([q, a], i) => `<li><details class="iv-card" data-iv-q="${d.key}-${i}"><summary translate="no" lang="en">${esc(q)}</summary><div class="iv-a" translate="no" lang="en">${M.inline(a, {})}</div></details></li>`).join('')}</ol></div>`).join('\n  ')}
</div>`;

    /* Consulting primer. */
    const styles = `<div class="cx-table" role="region" tabindex="0" aria-labelledby="styles-cap"><table class="iv-styles"><caption id="styles-cap" class="visually-hidden">${ui('Interviewer-led and candidate-led cases compared')}</caption>
<thead><tr><th scope="col"></th><th scope="col">${ui('Interviewer-led')}</th><th scope="col">${ui('Candidate-led')}</th></tr></thead><tbody>
${IV.CASE_STYLES.map(([k, a, b]) => `<tr><th scope="row">${ui(k)}</th><td>${ui(a)}</td><td>${ui(b)}</td></tr>`).join('\n')}
</tbody></table></div>`;
    const steps = `<ol class="iv-steps">${IV.CASE_STEPS.map(([k, t]) => `<li><b>${ui(k)}</b> ${ui(t)}</li>`).join('')}</ol>`;
    const sizing = `<div class="iv-sizing" translate="no" lang="en"><p class="iv-sz-q">“${esc(IV.SIZING.question)}”</p><ol>${IV.SIZING.steps.map(([k, t, , kind]) => `<li><b>${esc(k)}.</b> ${esc(t)} <span class="iv-sz-kind">${esc(kind)}</span></li>`).join('')}</ol><p><b>Sanity check.</b> ${esc(IV.SIZING.check)}</p><p class="cx-src-note">${esc(IV.SIZING.note)}</p></div>`;
    const shortcuts = `<dl class="iv-shortcuts" translate="no" lang="en">${IV.SHORTCUTS.map(([k, t]) => `<div><dt>${esc(k)}</dt><dd>${esc(t)}</dd></div>`).join('')}</dl>`;
    const drill = `<div class="iv-drill" data-iv-drill hidden>
  <p class="iv-drill-meta" data-iv-drill-meta aria-live="polite"></p>
  <p class="iv-drill-q" data-iv-drill-q aria-live="polite"></p>
  <form class="iv-drill-form" data-iv-drill-form><label class="cx-label" for="iv-drill-a">${ui('Your answer')}</label><input id="iv-drill-a" class="cx-input" inputmode="decimal" autocomplete="off" data-iv-drill-a><button type="submit" class="btn small primary">${ui('Check')}</button></form>
  <p class="cc-tools"><button type="button" class="btn small primary" data-iv-drill-start>${ui('Start a two-minute drill')}</button></p>
  <p class="cc-flash" data-iv-drill-flash aria-live="polite"></p>
</div>`;

    /* Practice cases. */
    const practice = IV.PRACTICE.map((c) => `<article class="iv-case" id="case-${c.key}" aria-labelledby="case-${c.key}-h">
  <p class="kicker"><span translate="no">${esc(c.area)}</span> · <span translate="no">${esc(c.type)}</span></p>
  <h3 id="case-${c.key}-h" class="tk-card-h" translate="no" lang="en">${esc(c.title)}</h3>
  <p class="iv-prompt" translate="no" lang="en">${esc(c.prompt)}</p>
  ${c.data ? `<div class="cx-table" role="region" tabindex="0" aria-label="${esc(c.title)}"><table translate="no" lang="en"><thead><tr>${c.data[0].map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${c.data.slice(1).map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((x) => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
  <details class="iv-ans"><summary>${ui('A worked answer')}</summary>${c.sizing ? sizing : `<ol translate="no" lang="en">${c.answer.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>`}${c.source ? `<p class="rc-src">${esc('research/getting-in/' + c.source)}</p>` : ''}</details>
</article>`).join('\n');

    const coaching = section(IV.AI, '## Bottom line');
    const coachLine = numbered(coaching.body).get(2);
    if (!coachLine) fail('applications-and-interviews.md Bottom line has no item 2');

    const body = `${head('Getting in · interview prep', 'Interview prep', 'What each career area actually asks, and how often, from employers’ own pages; a builder for the five behavioural stories every process needs; study cards for the finance technical core; a consulting case primer with a mental-arithmetic drill; and practice cases with worked answers.')}
<div class="cx-layout">
${toc([['face', 'What you will face'], ['official', 'Free official practice'], ['star', 'Your five stories'], ['technicals', 'Finance technical cards'], ['cases', 'Consulting case primer'], ['practice', 'Practice cases'], ['iv-evidence', 'What preparation is worth']])}
<div class="cx-body">
<section id="face" class="cx-sec" aria-labelledby="face-h">
<h2 id="face-h">${ui('What you will face')}</h2>
<p class="cx-note">${ui('Every exercise below carries a frequency word, read from the research, and the evidence for it. Open an area for the full table, quoted as written.')}</p>
${freqBox}
${grid}
${en(`<ol class="gi-numbered">${[1, 4, 6, 7, 8].map((n) => `<li value="${n}">${M.inline(bottom.get(n), {})}</li>`).join('')}</ol>`, 'div', 'cx-prose iv-bottom')}
${areaBlocks}
</section>
<section id="official" class="cx-sec" aria-labelledby="official-h">
<h2 id="official-h">${ui('Free official practice')}</h2>
<p class="cx-note">${ui('The firms publish practice material for free. Use it before anything paid: it shows the format and what is scored.')}</p>
${official}
${en(md(from, caseTypes), 'div', 'cx-prose')}
</section>
<section id="star" class="cx-sec" aria-labelledby="star-h">
<h2 id="star-h">${ui('Your five stories')}</h2>
<p class="cx-note">${ui('Five stories cover most behavioural questions: leadership, failure, conflict, innovation and high pressure. Write each in the STAR order (situation, task, action, result), add what you learned, and tag the criteria it shows. McKinsey asks for two examples per theme, so keep a second version of your strongest ones.')}</p>
${star}
${starStatic}
<p class="cx-src-note">${ui('Your stories are saved only in this browser. The checks are rules of thumb from the employers’ guidance (your own actions, a measurable result), not any employer’s scoring rubric, which none publishes.')}</p>
</section>
<section id="technicals" class="cx-sec" aria-labelledby="tech-h">
<h2 id="tech-h">${ui('Finance technical cards')}</h2>
<p class="cx-note">${ui('Thirty-two cards on the four topics practitioners agree banks test: how the three statements link, enterprise to equity value, the DCF and the WACC. No bank publishes a question list; these are standard textbook answers, written for this site.')}</p>
${decks}
</section>
<section id="cases" class="cx-sec" aria-labelledby="cases-h">
<h2 id="cases-h">${ui('Consulting case primer')}</h2>
<h3 class="cc-h3">${ui('Who leads the case')}</h3>
${styles}
<h3 class="cc-h3">${ui('Five steps of any case')}</h3>
${steps}
<h3 class="cc-h3">${ui('Market sizing: a worked example')}</h3>
${sizing}
<h3 class="cc-h3">${ui('Mental arithmetic shortcuts')}</h3>
${shortcuts}
${drill}
</section>
<section id="practice" class="cx-sec" aria-labelledby="practice-h">
<h2 id="practice-h">${ui('Practice cases')}</h2>
<p class="cx-note">${ui('Seven short cases, one or two per career area, written for this site in the style of the official ones. Try each before opening the worked answer.')}</p>
<div class="iv-cases">
${practice}
</div>
</section>
<section id="iv-evidence" class="cx-sec" aria-labelledby="iv-ev-h">
<h2 id="iv-ev-h">${ui('What preparation is worth')}</h2>
${en(`<p>${M.inline(coachLine, {})}</p>`, 'div', 'cx-prose gi-quote')}
<p class="cx-src-note">${ui('From research/getting-in/applications-and-interviews.md. The frequencies and official cases on this page are from research/getting-in/interview-cases.md, read on 10 October 2026.')}</p>
</section>
</div></div>`;
    add({ path: from, title: 'Interview prep', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Interview prep' }],
      scripts: ['careers/assets/getting-in.js'],
      description: 'What consulting, banking, trading, PE, Big 4, FMCG and tech interviews ask and how often, a STAR story builder, finance technical flashcards, a consulting case primer and practice cases.', body });
  }());

  return { files };
}

module.exports = { build, READ_ON };

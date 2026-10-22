#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * The content migration ledger: proof that restructuring the site moved
 * content without losing any.
 *
 * It compares what the site published at a baseline git ref (default: main)
 * with what the working tree publishes now, at four levels:
 *
 *   blocks     Every block of text inside <main> on every published HTML
 *              page at the baseline (headings, paragraphs, list items, table
 *              cells, captions…). A block is accounted for when the same
 *              text is on some page now: as a block of its own, or inside a
 *              longer one. Where it now lives is recorded.
 *   data       Every data file a page draws from (data/, careers/data/) and
 *              every download (careers/templates/): byte-identical, or
 *              listed.
 *   strings    Every sentence-like string literal in the page scripts at the
 *              baseline (the Atlas, hiring, directory and calculators are
 *              drawn by script): still present in a script now, or listed.
 *   links      Every external link in the baseline pages' content: still on
 *              some page now, or listed.
 *
 * A block, string or link that is gone must be explained in
 * docs/ux-refactor/content-exceptions.json (an interface label that was
 * renamed, say), or the run fails. tests/ux-test.js runs this.
 *
 *   node tools/ux-ledger.js            check, print a summary
 *   node tools/ux-ledger.js --write    also write docs/ux-refactor/ledger-*.{csv,json}
 *                                      (--all: every block, not only moved ones)
 *   node tools/ux-ledger.js --ref=<git ref>
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'docs/ux-refactor');
const args = process.argv.slice(2);
const REF = (args.find((a) => a.startsWith('--ref=')) || '--ref=main').slice(6);

const git = (...a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });
const gitBuf = (...a) => execFileSync('git', a, { cwd: ROOT, maxBuffer: 1 << 28 });
const sha = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);

/* What the build publishes: tools/build.js copies everything but these. */
const UNPUBLISHED = /^(tests|tools|design|docs|graphify-out|node_modules|\.github|\.claude|_site)\/|^(README|CLAUDE|PRODUCT|DESIGN)\.md$|^package(-lock)?\.json$|^\.git|BUILD_NOTES\.md$|careers\.json$|careers-progress\.md$/;

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', ndash: '–', mdash: '—', hellip: '…', middot: '·', rarr: '→', larr: '←', times: '×', euro: '€', pound: '£' };
function decode(s) {
  return s.replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/g, (m, n) => (ENT[n] !== undefined ? ENT[n] : m));
}
const norm = (s) => decode(s).replace(/\s+/g, ' ').trim();

/* The text blocks of a page's <main>, in order, each with the id of the
 * nearest heading or section above it (its anchor). */
const BLOCK = 'h[1-6]|p|li|td|th|dt|dd|figcaption|caption|summary|blockquote|cite|label|option|button|legend|div|section|article|aside|header|footer|nav|ul|ol|dl|table|thead|tbody|tr|figure|details|form|main|pre|hr|br';
function blocks(html) {
  const m = /<main\b[^>]*>([\s\S]*)<\/main>/.exec(html);
  let body = m ? m[1] : html;
  body = body.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<!--[\s\S]*?-->|<svg\b[\s\S]*?<\/svg>/g, ' ');
  const out = [];
  let anchor = '';
  const re = new RegExp(`<(/?)(${BLOCK})\\b([^>]*)>`, 'gi');
  let last = 0, mm;
  const push = (chunk) => {
    const text = norm(chunk.replace(/<[^>]+>/g, ''));
    if (/[\p{L}\p{N}]{2}/u.test(text)) out.push({ text, anchor });
  };
  while ((mm = re.exec(body))) {
    push(body.slice(last, mm.index));
    last = re.lastIndex;
    const id = /\sid="([^"]+)"/.exec(mm[3]);
    if (!mm[1] && id) anchor = id[1];
  }
  push(body.slice(last));
  return out;
}

function externalLinks(html) {
  const m = /<main\b[^>]*>([\s\S]*)<\/main>/.exec(html);
  return [...(m ? m[1] : html).matchAll(/\shref="(https?:[^"]+)"/g)].map((x) => decode(x[1]));
}

/* Sentence-like string literals in a script: three or more words. */
function literals(src) {
  const out = new Set();
  for (const m of src.matchAll(/'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g)) {
    const s = (m[1] !== undefined ? m[1] : m[2]).replace(/\\(['"])/g, '$1').replace(/\\u([0-9a-f]{4})/gi, (x, h) => String.fromCharCode(parseInt(h, 16)));
    if (s.split(/\s+/).length >= 3 && /[a-z]{3}/i.test(s) && !/^[\w\s.#>:,()[\]=~^$*+-]+\{/.test(s)) out.add(s);
  }
  return out;
}

function run() {
  const baseFiles = git('ls-tree', '-r', '--name-only', REF).split('\n').filter(Boolean).filter((f) => !UNPUBLISHED.test(f));
  const nowFiles = git('ls-files', '--cached', '--others', '--exclude-standard').split('\n').filter(Boolean).filter((f) => !UNPUBLISHED.test(f) && fs.existsSync(path.join(ROOT, f)));
  const exceptions = fs.existsSync(path.join(OUT, 'content-exceptions.json')) ? JSON.parse(fs.readFileSync(path.join(OUT, 'content-exceptions.json'), 'utf8')) : { blocks: {}, strings: {}, links: {}, files: {} };
  const report = { ref: REF, pages: [], missingBlocks: [], dataChanged: [], dataRemoved: [], missingStrings: [], missingLinks: [], counts: {} };

  /* ---- now: every block of every published page, and each page's text */
  const nowHtml = nowFiles.filter((f) => f.endsWith('.html'));
  const where = new Map();          /* block text → first page that has it */
  const pageText = [];              /* [file, all its block texts joined] */
  const nowLinks = new Set();
  const ownBlocks = new Map();      /* page → its block texts */
  for (const f of nowHtml) {
    const html = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const bs = blocks(html);
    for (const b of bs) if (!where.has(b.text)) where.set(b.text, f + (b.anchor ? '#' + b.anchor : ''));
    pageText.push([f, bs.map((b) => b.text).join(' \n ')]);
    ownBlocks.set(f, new Set(bs.map((b) => b.text)));
    externalLinks(html).forEach((l) => nowLinks.add(l));
  }
  const byFile = new Map(pageText);

  /* ---- blocks */
  const rows = [];
  let total = 0, moved = 0;
  for (const f of baseFiles.filter((x) => x.endsWith('.html'))) {
    const html = git('show', `${REF}:${f}`);
    const bs = blocks(html);
    const page = { file: f, blocks: bs.length, same: 0, moved: 0, missing: 0, to: {} };
    bs.forEach((b, i) => {
      total++;
      const id = `${f}#${i + 1}`;
      let dest = null;
      const own = byFile.get(f);
      if (own !== undefined && (b.text.length >= 25 ? own.includes(b.text) : ownBlocks.get(f).has(b.text))) dest = f;
      else if (where.has(b.text)) dest = where.get(b.text);
      /* Inside a longer block somewhere: only for text long enough that
       * the match cannot be an accident ("01" is in a thousand places). */
      else if (b.text.length >= 25) { const hit = pageText.find(([, t]) => t.includes(b.text)); if (hit) dest = hit[0]; }
      let status = 'same-page';
      if (!dest) {
        const why = exceptions.blocks[b.text];
        status = why ? 'explained' : 'MISSING';
        if (!why) { page.missing++; report.missingBlocks.push({ id, anchor: b.anchor, text: b.text.slice(0, 200) }); }
      } else if (dest.split('#')[0] !== f) { status = 'moved'; page.moved++; moved++; const d = dest.split('#')[0]; page.to[d] = (page.to[d] || 0) + 1; }
      else page.same++;
      rows.push([id, b.anchor, sha(b.text), status, dest || '', b.text.slice(0, 90).replace(/"/g, '""')]);
    });
    report.pages.push(page);
    for (const l of externalLinks(html)) if (!nowLinks.has(l) && !exceptions.links[l]) report.missingLinks.push({ file: f, href: l });
  }

  /* ---- data files and downloads */
  const nowSet = new Set(nowFiles);
  for (const f of baseFiles) {
    if (!/^(data\/|careers\/data\/|careers\/templates\/|img\/|fonts\/|research\/|CREDITS\.md$)/.test(f)) continue;
    if (!nowSet.has(f)) { if (!exceptions.files[f]) report.dataRemoved.push(f); continue; }
    const a = gitBuf('show', `${REF}:${f}`), b = fs.readFileSync(path.join(ROOT, f));
    if (!a.equals(b) && !exceptions.files[f]) report.dataChanged.push(f);
  }

  /* ---- script strings */
  const scripts = (f) => /^(js\/|careers\/assets\/)[^/]+\.js$/.test(f);
  const nowSrc = nowFiles.filter(scripts).map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n')
    /* Text that moved from a script into a page's own HTML still counts. */
    + '\n' + pageText.map(([, t]) => t).join('\n');
  const nowLits = literals(nowSrc);
  let nStrings = 0;
  for (const f of baseFiles.filter(scripts)) {
    for (const s of literals(git('show', `${REF}:${f}`))) {
      nStrings++;
      if (nowLits.has(s) || nowSrc.includes(s) || exceptions.strings[s]) continue;
      report.missingStrings.push({ file: f, text: s.slice(0, 200) });
    }
  }

  report.counts = { baselinePages: report.pages.length, blocks: total, movedToAnotherPage: moved, missingBlocks: report.missingBlocks.length,
    scriptStrings: nStrings, missingStrings: report.missingStrings.length, missingLinks: report.missingLinks.length,
    dataChanged: report.dataChanged.length, dataRemoved: report.dataRemoved.length, pagesNow: nowHtml.length };

  if (args.includes('--write')) {
    fs.mkdirSync(OUT, { recursive: true });
    /* Blocks still on their own page are counted per page (ledger-pages.json);
     * the CSV lists the ones that moved or were replaced. --all lists every
     * block (about 4 MB). */
    const listed = args.includes('--all') ? rows : rows.filter((r) => r[3] !== 'same-page');
    fs.writeFileSync(path.join(OUT, 'ledger-blocks.csv'), 'id,anchor,sha1,status,now_at,text\n' + listed.map((r) => r.map((c, i) => (i === 5 ? `"${c}"` : c)).join(',')).join('\n') + '\n');
    fs.writeFileSync(path.join(OUT, 'ledger-pages.json'), JSON.stringify({ ref: REF, generated: 'node tools/ux-ledger.js --write', counts: report.counts, pages: report.pages }, null, 1) + '\n');
  }
  return report;
}

if (require.main === module) {
  const r = run();
  console.log(JSON.stringify(r.counts, null, 1));
  const show = (label, list, f) => { if (list.length) { console.log(`\n${label} (${list.length})`); list.slice(0, 40).forEach((x) => console.log('  ' + f(x))); } };
  show('MISSING blocks', r.missingBlocks, (x) => `${x.id} [${x.anchor}] ${x.text}`);
  show('MISSING script strings', r.missingStrings, (x) => `${x.file}: ${x.text}`);
  show('MISSING external links', r.missingLinks, (x) => `${x.file}: ${x.href}`);
  show('Data files changed', r.dataChanged, (x) => x);
  show('Data files removed', r.dataRemoved, (x) => x);
  const bad = r.missingBlocks.length + r.missingStrings.length + r.missingLinks.length + r.dataChanged.length + r.dataRemoved.length;
  process.exit(bad ? 1 : 0);
}

module.exports = { run, blocks, literals };

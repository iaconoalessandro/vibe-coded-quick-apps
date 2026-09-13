'use strict';
/*
 * gradcafe-aggregate.js — one-time collector for the IT & Computing track.
 *
 * Applicant-reported admissions outcomes are the only public source of per-programme
 * student experience for computing master's. This script turns five years of them into
 * the aggregates in data/it-evidence.js.
 *
 * It stores counts, shares and date distributions. It never stores the free-text notes
 * applicants write, and no verbatim post reaches the repository.
 *
 * GradCafe's robots.txt is "Allow: /" with "Content-Signal: search=yes, ai-train=no,
 * use=reference". Aggregating for reference is within that; nothing here trains a model.
 * Requests are serialised with a delay, and pages are cached so a re-run costs nothing.
 *
 *   node tools/gradcafe-aggregate.js fetch    # download (~506 pages, ~13 min)
 *   node tools/gradcafe-aggregate.js names    # list school names by volume
 *   node tools/gradcafe-aggregate.js build    # write data/it-evidence.js
 *
 * Cache lives outside the repo; override with GRADCAFE_CACHE.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const zlib = require('zlib');

const CACHE = process.env.GRADCAFE_CACHE ||
  path.join(require('os').tmpdir(), 'gradcafe-cache');
const OUT = path.join(__dirname, '..', 'data', 'it-evidence.js');

const SINCE = '2021-01-01';
const DELAY_MS = 1500;
const PER_PAGE = 20;

// The programme filter is a controlled vocabulary. These six are every computing
// heading a master's applicant in this dataset files under.
const PROGRAMMES = [
  'Computer Science',
  'Data Science',
  'Artificial Intelligence',
  'Machine Learning',
  'Informatics',
  'Computer Engineering'
];

/* Only these institutions are modelled, so only these are fetched — crawling the
 * whole computing slice would pull ~10,000 records to keep ~700.
 *
 * The institution filter matches on the name as the poster typed it, and those
 * names are inconsistent: EPFL is filed as "Ecole Polytechnique Federale de
 * Lausanne", TU Delft as "Delft University of Technology", TUM under at least
 * four spellings. Each institution therefore lists every alias worth trying,
 * and results are merged and de-duplicated. `verify` checks the totals against
 * counts measured independently before this script existed. */
const INSTITUTION_QUERIES = [
  ['University of Oxford',      ['University of Oxford']],
  ['University of Cambridge',   ['University of Cambridge']],
  ['Imperial College London',   ['Imperial College London']],
  ['University College London', ['University College London']],
  ['University of Edinburgh',   ['University of Edinburgh']],
  ["King's College London",     ["King's College London"]],
  ['University of Warwick',     ['University of Warwick']],
  ['University of Manchester',  ['University of Manchester']],
  ['University of Bristol',     ['University of Bristol']],
  ['University of Southampton', ['University of Southampton']],
  ['University of Glasgow',     ['University of Glasgow']],
  ['University of St Andrews',  ['University of St Andrews', 'St Andrews']],
  ['ETH Zurich',                ['ETH Zurich']],
  ['EPFL',                      ['Ecole Polytechnique Federale de Lausanne',
                                 'Swiss Federal Institute of Technology Lausanne (EPFL)']],
  ['TU Delft',                  ['Delft University of Technology']],
  ['TU Munchen',                ['Technical University of Munich', 'Technische Universitat Munchen', 'TUM']],
  ['KTH',                       ['KTH Royal Institute of Technology']],
  ['University of Amsterdam',   ['University of Amsterdam']]
];

/* Counts measured directly against the live survey before this collector was
 * written, used to catch a filter that silently stops matching.
 *
 * These are FLOORS, not targets: they were measured across three programme
 * headings (Computer Science, Data Science, Artificial Intelligence) and the
 * collector queries six, so coming in higher is expected and correct. Only a
 * count materially below the floor means something has broken. */
const EXPECTED = {
  'University of Oxford': 54, 'University of Cambridge': 30, 'Imperial College London': 21,
  'University College London': 13, 'University of Edinburgh': 22, 'University of Manchester': 5,
  "King's College London": 3, 'University of Warwick': 0, 'University of Bristol': 2,
  'University of Southampton': 1, 'ETH Zurich': 341, 'EPFL': 69, 'TU Delft': 20,
  'KTH': 7, 'University of Amsterdam': 14
};

// ---------------------------------------------------------------- fetching

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'admissions-calculator research aggregator (one-time, aggregates only)',
        'Accept': 'text/html',
        'Accept-Encoding': 'gzip'
      }
    }, res => {
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
      }
      const chunks = [];
      const stream = res.headers['content-encoding'] === 'gzip'
        ? res.pipe(zlib.createGunzip()) : res;
      stream.on('data', c => chunks.push(c));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      stream.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(45000, () => req.destroy(new Error('timeout: ' + url)));
  });
}

// The survey page is an Inertia app: the whole result payload is JSON in a data-page
// attribute. Parsing that is cheaper and far more stable than scraping the markup.
function extract(htmlText) {
  const m = /data-page="([^"]+)"/.exec(htmlText);
  if (!m) throw new Error('no data-page payload — page shape changed');
  const json = m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#039;/g, "'");
  return JSON.parse(json).props.results;
}

/* The survey paginates by CURSOR, not by offset: a `page` parameter is
 * accepted and silently ignored, so asking for page 5 returns page 1 again.
 * Each response carries meta.next_cursor, which must be passed back. */
function pageUrl(programme, institution, cursor) {
  const p = new URLSearchParams({
    program: programme,
    degree: 'Masters',
    institution: institution,
    decision_start: SINCE,
    per_page: String(PER_PAGE)
  });
  if (cursor) p.set('cursor', cursor);
  return 'https://www.thegradcafe.com/survey/?' + p.toString();
}

function slugify(x) { return x.toLowerCase().replace(/[^a-z0-9]+/g, '-'); }

async function fetchAll() {
  fs.mkdirSync(CACHE, { recursive: true });

  for (const [canonical, aliases] of INSTITUTION_QUERIES) {
    let institutionRows = 0;

    for (const alias of aliases) {
      for (const programme of PROGRAMMES) {
        const slug = slugify(canonical) + '__' + slugify(alias) + '__' + slugify(programme);
        let page = 1, cursor = null, total = null;

        const existing = fs.readdirSync(CACHE).filter(f => f.indexOf(slug + '--') === 0).sort();
        if (existing.length) {
          const last = JSON.parse(fs.readFileSync(path.join(CACHE, existing[existing.length - 1]), 'utf8'));
          if (!last.nextCursor) { institutionRows += existing.length * PER_PAGE; continue; }
          page = existing.length + 1;
          cursor = last.nextCursor;
          total = last.total;
        }

        while (true) {
          let res;
          try {
            res = extract(await get(pageUrl(programme, alias, cursor)));
          } catch (err) {
            console.error('  ! ' + canonical + ' / ' + programme + ': ' + err.message);
            await sleep(DELAY_MS * 4);
            continue;
          }
          const meta = res.meta || {};
          total = meta.total || 0;
          if (!total) break;

          /* Store only the fields we aggregate. `notes` is dropped here, on
           * purpose, so applicant free text never lands on disk. */
          const rows = (res.data || []).map(d => ({
            school: d.school, program: d.program, season: d.season,
            decision: d.decision, date: d.date_of_notification,
            gpa: d.ugpa, greq: d.greq, status: d.status
          }));
          fs.writeFileSync(path.join(CACHE, slug + '--' + String(page).padStart(3, '0') + '.json'),
            JSON.stringify({ canonical, alias, programme, total,
                             nextCursor: meta.next_cursor || null, rows }));
          institutionRows += rows.length;

          cursor = meta.next_cursor || null;
          if (!cursor || rows.length === 0) break;
          page++;
          await sleep(DELAY_MS);
        }
        await sleep(DELAY_MS);
      }
    }

    let flag = '';
    if (EXPECTED[canonical] !== undefined) {
      const floor = EXPECTED[canonical];
      flag = institutionRows >= floor ? '  ok'
        : '  ** below the ' + floor + ' measured directly — filter may have broken **';
    }
    console.log(canonical.padEnd(28) + String(institutionRows).padStart(5) + flag);
  }
}

// ---------------------------------------------------------------- loading

function loadRows() {
  if (!fs.existsSync(CACHE)) {
    console.error('No cache at ' + CACHE + '. Run: node tools/gradcafe-aggregate.js fetch');
    process.exit(1);
  }

  /* Duplicates arise in exactly one way: an institution queried under two name
   * spellings (EPFL, TUM) returns the same record twice. Records within a
   * single alias+programme stream are already distinct.
   *
   * So de-duplication happens per (institution, programme) and preserves
   * multiplicity — for each row signature, the count kept is the largest any
   * single alias returned. A looser rule collapses real people: Oxford has
   * fifty-four results of which ten share a signature with another, because
   * several applicants posted the same decision on the same day without a
   * grade. Those are different applicants, not one duplicated. */
  const streams = Object.create(null);
  for (const f of fs.readdirSync(CACHE).filter(f => f.endsWith('.json'))) {
    const d = JSON.parse(fs.readFileSync(path.join(CACHE, f), 'utf8'));
    const stream = d.canonical + '|' + d.programme + '|' + d.alias;
    (streams[stream] = streams[stream] || []).push(...d.rows);
  }

  const sig = r => [r.school, r.program, r.season, r.decision, r.date, r.gpa, r.greq, r.status].join('|');

  const byGroup = Object.create(null);
  for (const stream of Object.keys(streams)) {
    const parts = stream.split('|');
    const group = parts[0] + '|' + parts[1];
    const counts = Object.create(null);
    const sample = Object.create(null);
    for (const r of streams[stream]) {
      const k = sig(r);
      counts[k] = (counts[k] || 0) + 1;
      sample[k] = r;
    }
    byGroup[group] = byGroup[group] || { counts: Object.create(null), sample: Object.create(null) };
    for (const k of Object.keys(counts)) {
      byGroup[group].counts[k] = Math.max(byGroup[group].counts[k] || 0, counts[k]);
      byGroup[group].sample[k] = sample[k];
    }
  }

  const rows = [];
  for (const group of Object.keys(byGroup)) {
    const g = byGroup[group];
    for (const k of Object.keys(g.counts)) {
      for (let i = 0; i < g.counts[k]; i++) rows.push(g.sample[k]);
    }
  }
  return rows;
}

function listNames() {
  const rows = loadRows();
  const count = Object.create(null);
  for (const r of rows) count[r.school] = (count[r.school] || 0) + 1;
  Object.keys(count).sort((a, b) => count[b] - count[a])
    .forEach(n => console.log(String(count[n]).padStart(5) + '  ' + n));
  console.log('\n' + rows.length + ' records, ' + Object.keys(count).length + ' distinct school names');
}

if (require.main === module) {
  const cmd = process.argv[2];
  if (cmd === 'fetch') fetchAll().catch(e => { console.error(e); process.exit(1); });
  else if (cmd === 'names') listNames();
  else if (cmd === 'build') require('./build-evidence.js').build(loadRows(), OUT);
  else {
    console.error('usage: node tools/gradcafe-aggregate.js fetch|names|build');
    process.exit(1);
  }
}

module.exports = { loadRows, CACHE };

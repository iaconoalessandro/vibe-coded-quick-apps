/* Builds data/atlas/life.js: "Life there" for the 46 Atlas countries and
 * their 200 hubs, each topic from one source that covers every country, so
 * pages compare. Every value says whether it describes the whole country or
 * one city (a hub, read at its city-centre coordinates).
 *
 *   node tools/atlas-life.js            fetch what is not cached, then write
 *   node tools/atlas-life.js --offline  write from the cache only
 *
 * Responses are cached in .cache/atlas-life/ (git-ignored), so a rerun after
 * a failure only fetches what is missing. Run by hand when a source updates.
 *
 * City (hub coordinates)
 *   climate   NASA POWER climatology API, 2001–2020 monthly means (MERRA-2,
 *             about 50 km cells): mean temperature of the coldest and warmest
 *             month, yearly rain, cloud cover
 *   daylight  computed from latitude with NOAA's solar position equations:
 *             hours of daylight on the shortest and longest day
 *   air       CAMS global, through the Open-Meteo air quality API: mean PM2.5
 *             over the first 14 days of each month of 2025, against the WHO
 *             2021 guideline of 5 µg/m³ a year
 *   time      IANA time zone of the hub (from Open-Meteo): offset from UTC
 *             in January and July, and from Central European Time
 *   english   EF EPI city score, where EF publishes one for that city
 * Country
 *   english   EF EPI score, band and world rank (not published for countries
 *             where English is the main language)
 *   prices    price level: GDP at market rates over GDP at PPP, IMF World
 *             Economic Outlook (US = 100)
 *   safety    intentional homicides per 100,000 people, UNODC through the
 *             World Bank (latest year with a figure)
 *   hours     mean weekly hours actually worked per employed person, ILOSTAT
 *   health    out-of-pocket spending as % of current health spending (WHO
 *             Global Health Expenditure Database) and life expectancy at
 *             birth, both through the World Bank
 *   crime     offences recorded by the police per 100,000 people, UNODC
 *             (CTS): serious assault and robbery (counts over UNODC's own
 *             population), theft and burglary (UNODC rates). The UK is
 *             reported as England and Wales. Not ranked: recording differs
 *             between countries
 *   language  official and regional-official languages with the share of
 *             people who speak each, Unicode CLDR territory data
 *   care      health-service quality: UHC service coverage index (WHO and
 *             World Bank, 0–100), doctors and hospital beds per 1,000 people,
 *             and the chance of dying between 30 and 70 from heart disease,
 *             cancer, diabetes or chronic lung disease (WHO, via the World
 *             Bank)
 *   people    InterNations Expat Insider, Ease of Settling In Index: the
 *             country's rank among the destinations surveyed for local
 *             friendliness, finding friends, and culture and welcome, as
 *             foreign residents perceive them
 * ------------------------------------------------------------------------- */
'use strict';
const fs = require('fs'), path = require('path'), https = require('https'), dns = require('dns'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const CACHE = path.join(ROOT, '.cache/atlas-life');
const OFFLINE = process.argv.includes('--offline');
const YEAR_AIR = 2025;
const ISO3 = { PT: 'PRT', ES: 'ESP', FR: 'FRA', MT: 'MLT', IT: 'ITA', CH: 'CHE', IS: 'ISL', IE: 'IRL', GB: 'GBR', DK: 'DNK',
  BE: 'BEL', LU: 'LUX', NL: 'NLD', AT: 'AUT', DE: 'DEU', NO: 'NOR', SE: 'SWE', FI: 'FIN', PL: 'POL', LT: 'LTU', EE: 'EST',
  CZ: 'CZE', GR: 'GRC', RO: 'ROU', BG: 'BGR', US: 'USA', CA: 'CAN', RU: 'RUS', TR: 'TUR', IL: 'ISR', SA: 'SAU', OM: 'OMN',
  QA: 'QAT', KW: 'KWT', AE: 'ARE', MY: 'MYS', TH: 'THA', SG: 'SGP', VN: 'VNM', TW: 'TWN', CN: 'CHN', AU: 'AUS', NZ: 'NZL',
  JP: 'JPN', KR: 'KOR', HK: 'HKG' };
/* EF's country names where they differ from the Atlas's. */
const EF_NAME = { AE: 'U.A.E.', KR: 'South Korea', CZ: 'Czech Republic', HK: 'Hong Kong, China' };
/* EF does not rank countries where English is the main language. */
const EF_NATIVE = ['GB', 'IE', 'US', 'CA', 'AU', 'NZ'];

/* Resolve hosts with DNS queries rather than the system resolver, which
 * fails for some hosts in sandboxed shells. */
function lookup(host, opts, cb) {
  dns.resolve4(host, (e, a) => {
    if (!e && a.length) return opts && opts.all ? cb(null, a.map((x) => ({ address: x, family: 4 }))) : cb(null, a[0], 4);
    dns.lookup(host, opts, cb);
  });
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function fetchText(u, tries) {
  tries = tries || 0;
  return new Promise((ok, no) => {
    https.get(u, { lookup, headers: { 'User-Agent': /ef\.com/.test(u) ? 'Mozilla/5.0 (Admetia atlas-life)' : 'curl/8.0', Accept: '*/*' }, timeout: 120000 }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) { r.resume(); return ok(fetchText(new URL(r.headers.location, u).href)); }
      let b = ''; r.setEncoding('utf8'); r.on('data', (d) => b += d);
      r.on('end', () => (r.statusCode === 200 ? ok(b) : no(new Error(r.statusCode + ' ' + u + ' ' + b.slice(0, 200)))));
    }).on('error', no).on('timeout', function () { this.destroy(new Error('timeout ' + u)); });
  }).catch(async (e) => {
    if (tries >= 4 || /\b(400|404)\b/.test(e.message)) throw e;
    await sleep(2000 * (tries + 1) * (/429/.test(e.message) ? 15 : 1));
    return fetchText(u, tries + 1);
  });
}
/* Cached fetch: key → file. */
async function cached(key, u, parse) {
  const f = path.join(CACHE, key.replace(/[^\w.-]+/g, '_'));
  if (fs.existsSync(f)) return parse ? parse(fs.readFileSync(f, 'utf8')) : fs.readFileSync(f, 'utf8');
  if (OFFLINE) return null;
  const t = await fetchText(u);
  fs.mkdirSync(CACHE, { recursive: true });
  fs.writeFileSync(f, t);
  return parse ? parse(t) : t;
}
const json = (t) => JSON.parse(t);
const r1 = (x) => (x == null || isNaN(x) ? null : Math.round(x * 10) / 10);

/* ------------------------------------------------------------- daylight --- */
/* Day length in hours at latitude φ on day-of-year n, NOAA's approximation:
 * solar declination from the fractional year, sunrise at a zenith of
 * 90.833° (refraction and the sun's radius). */
function dayLength(lat, n) {
  const g = 2 * Math.PI / 365 * (n - 1);
  const decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
  const phi = lat * Math.PI / 180, z = 90.833 * Math.PI / 180;
  const c = Math.cos(z) / (Math.cos(phi) * Math.cos(decl)) - Math.tan(phi) * Math.tan(decl);
  if (c >= 1) return 0; if (c <= -1) return 24;
  return 2 * Math.acos(c) * 180 / Math.PI / 15;
}
function daylight(lat) {
  let min = 24, max = 0;
  for (let n = 1; n <= 365; n++) { const d = dayLength(lat, n); if (d < min) min = d; if (d > max) max = d; }
  return { min: r1(min), max: r1(max) };
}

/* ----------------------------------------------------------------- time --- */
function offset(tz, iso) {
  const d = new Date(iso);
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: tz, timeZoneName: 'longOffset' }).formatToParts(d);
  const s = (f.find((p) => p.type === 'timeZoneName') || {}).value || 'GMT';
  const m = /GMT([+-])(\d{2}):?(\d{2})?/.exec(s);
  return m ? (m[1] === '-' ? -1 : 1) * (+m[2] + (+(m[3] || 0)) / 60) : 0;
}
function timeOf(tz) {
  const jan = offset(tz, YEAR_AIR + '-01-15T12:00:00Z'), jul = offset(tz, YEAR_AIR + '-07-15T12:00:00Z');
  const cetJan = offset('Europe/Rome', YEAR_AIR + '-01-15T12:00:00Z'), cetJul = offset('Europe/Rome', YEAR_AIR + '-07-15T12:00:00Z');
  return { tz, jan, jul, vsJan: jan - cetJan, vsJul: jul - cetJul };
}

/* -------------------------------------------------------------- climate --- */
const MON = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
async function climate(h) {
  const u = 'https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=T2M,PRECTOTCORR,CLOUD_AMT' +
    '&community=RE&longitude=' + h.lon + '&latitude=' + h.lat + '&format=JSON';
  const d = await cached('power-' + h.lat + '_' + h.lon + '.json', u, json);
  if (!d) return null;
  const p = d.properties.parameter;
  let cold = 0, warm = 0;
  MON.forEach((m, i) => { if (p.T2M[m] < p.T2M[MON[cold]]) cold = i; if (p.T2M[m] > p.T2M[MON[warm]]) warm = i; });
  return {
    cold: { m: cold + 1, mean: r1(p.T2M[MON[cold]]) },
    warm: { m: warm + 1, mean: r1(p.T2M[MON[warm]]) },
    rain: Math.round(p.PRECTOTCORR.ANN * 365), cloud: Math.round(p.CLOUD_AMT.ANN)
  };
}

/* ------------------------------------------------------------------ air --- */
async function air(h) {
  const vals = []; let tz = null;
  for (let m = 1; m <= 12; m++) {
    const mm = String(m).padStart(2, '0');
    const u = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=' + h.lat + '&longitude=' + h.lon +
      '&hourly=pm2_5&timezone=auto&start_date=' + YEAR_AIR + '-' + mm + '-01&end_date=' + YEAR_AIR + '-' + mm + '-14';
    const d = await cached('aq-' + h.lat + '_' + h.lon + '-' + YEAR_AIR + mm + '.json', u, json);
    if (!d) return null;
    tz = tz || d.timezone;
    (d.hourly.pm2_5 || []).forEach((v) => { if (v != null) vals.push(v); });
    if (!OFFLINE) await sleep(120);
  }
  return { pm25: vals.length ? r1(vals.reduce((a, b) => a + b, 0) / vals.length) : null, n: vals.length, tz };
}

/* -------------------------------------------------------------- english --- */
function plainText(html) {
  return html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, '’').replace(/\s+/g, ' ');
}
const BANDS = [[600, 'very high'], [550, 'high'], [500, 'moderate'], [450, 'low'], [0, 'very low']];
async function efIndex() {
  const html = await cached('ef-epi.html', 'https://www.ef.com/wwen/epi/');
  if (!html) return { links: {}, edition: null };
  const links = {};
  html.replace(/href="(\/wwen\/epi\/regions\/[a-z-]+\/[a-z0-9-]+\/)"[^>]*aria-label="([^"]+)"/g, (m, href, name) => { links[name] = 'https://www.ef.com' + href; return m; });
  const ed = /EF EPI (20\d\d)/.exec(html);
  return { links, edition: ed ? +ed[1] : null };
}
async function efCountry(id, name, idx) {
  const u = idx.links[EF_NAME[id] || name];
  if (!u) return null;
  const html = await cached('ef-' + id + '.html', u);
  if (!html) return null;
  const t = plainText(html);
  const score = /EF EPI score\s*:\s*(\d{3})/.exec(t), rank = /Global ranking\s*:\s*#\s*(\d+)/.exec(t);
  if (!score) return null;
  const cities = [];
  const cm = / Cities (.*?) (Load more|Test your English)/.exec(t);
  if (cm) cm[1].replace(/([^\d]+?) (\d{3})(?= |$)/g, (m, c, s) => { cities.push([c.replace(/[\u200b-\u200d\ufeff]/g, '').trim(), +s]); return m; });
  const band = BANDS.find((b) => +score[1] >= b[0])[1];
  return { score: +score[1], rank: rank ? +rank[1] : null, band, src: u, cities };
}
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim();
function efCities(h, cities) {
  const hn = ' ' + norm(h.name + ' ' + h.id.replace(/-/g, ' ')) + ' ';
  return cities.filter(([c]) => { const n = norm(c); return n.length > 2 && hn.indexOf(' ' + n + ' ') > -1; })
    .map(([c, s]) => ({ city: c, score: s }));
}

/* -------------------------------------------------------- country data --- */
async function worldBank(code) {
  const out = {};
  const ids = Object.values(ISO3).join(';');
  const u = 'https://api.worldbank.org/v2/country/' + ids + '/indicator/' + code + '?format=json&source=2&per_page=4000&date=2010:2026';
  const d = await cached('wb-' + code + '.json', u, json);
  if (!d || !d[1]) return out;
  d[1].forEach((x) => {
    if (x.value == null) return;
    const id = Object.keys(ISO3).find((k) => ISO3[k] === x.countryiso3code);
    if (id && (!out[id] || +x.date > out[id].year)) out[id] = { v: r1(x.value), year: +x.date };
  });
  return { values: out, label: d[1][0] && d[1][0].indicator.value, updated: d[0].lastupdated };
}
async function ilo() {
  const u = 'https://sdmx.ilo.org/rest/data/ILO,DF_HOW_TEMP_SEX_ECO_NB/' + Object.values(ISO3).join('+') +
    '.A..SEX_T.ECO_AGGREGATE_TOTAL?startPeriod=2015&format=csv';
  const t = await cached('ilo-hours.csv', u);
  const out = {};
  if (!t) return out;
  const rows = t.trim().split('\n'), head = rows.shift().split(',');
  const iA = head.indexOf('REF_AREA'), iT = head.indexOf('TIME_PERIOD'), iV = head.indexOf('OBS_VALUE');
  rows.forEach((r) => {
    const c = r.split(','), id = Object.keys(ISO3).find((k) => ISO3[k] === c[iA]);
    if (!id || c[iV] === '') return;
    if (!out[id] || +c[iT] > out[id].year) out[id] = { v: r1(+c[iV]), year: +c[iT] };
  });
  return out;
}
async function imfPrices() {
  const year = String(new Date().getFullYear() - 1);
  const a = await cached('imf-NGDPD-' + year + '.json', 'https://www.imf.org/external/datamapper/api/v1/NGDPD?periods=' + year, json);
  const b = await cached('imf-PPPGDP-' + year + '.json', 'https://www.imf.org/external/datamapper/api/v1/PPPGDP?periods=' + year, json);
  const meta = await cached('imf-indicators.json', 'https://www.imf.org/external/datamapper/api/v1/indicators', json);
  const out = {};
  if (!a || !b) return { values: out };
  Object.keys(ISO3).forEach((id) => {
    const n = (a.values.NGDPD[ISO3[id]] || {})[year], p = (b.values.PPPGDP[ISO3[id]] || {})[year];
    if (n && p) out[id] = { v: Math.round(n / p * 100), year: +year };
  });
  return { values: out, edition: meta && meta.indicators.NGDPD.source, year: +year };
}

/* ---------------------------------------------------------------- crime --- */
const { execFileSync } = require('child_process');
function fetchBuffer(u) {
  return new Promise((ok, no) => {
    https.get(u, { lookup, headers: { 'User-Agent': 'Mozilla/5.0 (Admetia atlas-life)' }, timeout: 180000 }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) { r.resume(); return ok(fetchBuffer(new URL(r.headers.location, u).href)); }
      const parts = []; r.on('data', (d) => parts.push(d));
      r.on('end', () => (r.statusCode === 200 ? ok(Buffer.concat(parts)) : no(new Error(r.statusCode + ' ' + u))));
    }).on('error', no);
  });
}
/* The rows of the first sheet of an .xlsx, as arrays of cell text. */
function xlsxRows(file) {
  const unz = (m) => { try { return execFileSync('unzip', ['-p', file, m], { maxBuffer: 1 << 30 }).toString('utf8'); } catch (e) { return ''; } };
  const dec = (x) => x.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
  const shared = [];
  unz('xl/sharedStrings.xml').replace(/<si>([\s\S]*?)<\/si>/g, (m, si) => { let t = ''; si.replace(/<t[^>]*>([\s\S]*?)<\/t>/g, (mm, x) => { t += x; return mm; }); shared.push(dec(t)); return m; });
  const col = (ref) => ref.replace(/\d+/g, '').split('').reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0) - 1;
  const rows = [];
  unz('xl/worksheets/sheet1.xml').replace(/<row[^>]*>([\s\S]*?)<\/row>/g, (m, body) => {
    const row = [];
    body.replace(/<c r="([A-Z]+\d+)"([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g, (mm, ref, attrs, inner) => {
      let v = null;
      if (inner) {
        const vm_ = /<v>([\s\S]*?)<\/v>/.exec(inner), is = /<t[^>]*>([\s\S]*?)<\/t>/.exec(inner);
        if (/t="s"/.test(attrs) && vm_) v = shared[+vm_[1]];
        else if (vm_) v = dec(vm_[1]);
        else if (is) v = dec(is[1]);
      }
      row[col(ref)] = v;
      return mm;
    });
    rows.push(row);
    return m;
  });
  return rows;
}
async function unodcRows(report) {
  const page = await cached('unodc-' + report + '.html', 'https://data.unodc.org/datareport/' + report);
  if (!page) return { rows: [], src: null };
  const m = /href="(\/sites\/dataportal\.unodc\.org\/files\/[^"]+\.xlsx)"/.exec(page.replace(/data_portal_m49_regions\.xlsx/g, ''));
  const u = m && 'https://data.unodc.org' + m[1];
  const f = path.join(CACHE, 'unodc-' + report + '.xlsx');
  if (!fs.existsSync(f)) {
    if (OFFLINE || !u) return { rows: [], src: null };
    fs.writeFileSync(f, await fetchBuffer(u));
  }
  return { rows: xlsxRows(f), src: 'https://data.unodc.org/datareport/' + report, file: u };
}
const numOf = (x) => (x == null || x === '' ? null : +String(x).replace(/,/g, ''));
/* id → the area UNODC reports for it. */
const CRIME_AREA = { GB: { iso: 'GBR_E_W', area: 'England and Wales' } };
async function crime() {
  const econ = await unodcRows('econ-corruption'), viol = await unodcRows('violent-offences');
  const out = {};
  if (!econ.rows.length) return { values: out };
  const hi = econ.rows.findIndex((r) => r && r[0] === 'Iso3_code'), head = econ.rows[hi];
  const ix = (h) => head.indexOf(h);
  const [iI, iN, iC, iY, iU, iV] = ['Iso3_code', 'Country', 'Category', 'Year', 'Unit of measurement', 'VALUE'].map(ix);
  const rate = {}, count = {}, nameIso = {};
  econ.rows.slice(hi + 1).forEach((r) => {
    if (!r || !r[iI]) return;
    nameIso[r[iN]] = r[iI];
    const v = numOf(r[iV]); if (v == null) return;
    const key = r[iI] + '|' + r[iC] + '|' + r[iY];
    if (/^Rate/.test(r[iU])) rate[key] = v; else count[key] = v;
  });
  /* UNODC's population for a year, from a theft count and its rate. */
  const pop = (iso, y) => {
    for (const d of [0, -1, 1, -2, 2, -3, 3]) {
      for (const c of ['Theft', 'Burglary']) {
        const k = iso + '|' + c + '|' + (y + d);
        if (count[k] && rate[k]) return count[k] / rate[k] * 1e5;
      }
    }
    return null;
  };
  /* A rate series {year: rate} for one offence, from rates or from counts
   * over UNODC's population. */
  const series = (obj, iso, cat, fromCounts) => {
    const out = {};
    Object.keys(obj).forEach((k) => {
      const [i, c, y] = k.split('|');
      if (i !== iso || c !== cat) return;
      if (!fromCounts) { out[+y] = obj[k]; return; }
      const p = pop(iso, +y); if (p) out[+y] = obj[k] / p * 1e5;
    });
    return out;
  };
  /* The latest year from MIN_YEAR on, and the change from about five years
   * earlier (four to six), when both exist. */
  const MIN_YEAR = 2015;
  const summary = (ser) => {
    const ys = Object.keys(ser).map(Number).filter((y) => y >= MIN_YEAR).sort((a, b) => b - a);
    if (!ys.length) return null;
    const y = ys[0], out = { v: r1(ser[y]), year: y };
    for (const d of [5, 4, 6]) {
      const b = ser[y - d];
      if (b != null && b > 0) { out.from = y - d; out.change = Math.round((ser[y] - b) / b * 100); break; }
    }
    return out;
  };
  const vh = viol.rows.findIndex((r) => r && r[2] === 'Country'), vcount = {};
  viol.rows.slice(vh + 1).forEach((r) => {
    if (!r || !r[2]) return;
    const iso = nameIso[r[2]], v = numOf(r[5]);
    if (iso && v != null) vcount[iso + '|' + r[3] + '|' + r[4]] = v;
  });
  Object.keys(ISO3).forEach((id) => {
    const iso = (CRIME_AREA[id] || {}).iso || ISO3[id];
    const rec = { area: (CRIME_AREA[id] || {}).area || null };
    rec.assault = summary(series(vcount, iso, 'Serious assault', true));
    rec.robbery = summary(series(vcount, iso, 'Robbery', true));
    rec.theft = summary(series(rate, iso, 'Theft', false));
    rec.burglary = summary(series(rate, iso, 'Burglary', false));
    if (rec.assault || rec.robbery || rec.theft || rec.burglary) out[id] = rec;
  });
  return { values: out, src: viol.src || econ.src };
}

/* --------------------------------------------------------------- people --- */
const PEOPLE_NAME = { AE: 'UAE', US: 'USA', TR: 'Türkiye', KR: 'South Korea', CZ: 'Czechia', HK: 'Hong Kong', GB: 'United Kingdom' };
async function people(A) {
  const year = 2025;
  const u = 'https://www.internations.org/expat-insider/' + year + '/ease-of-settling-in-' + year;
  const html = await cached('expat-insider-settling-' + year + '.html', u);
  const out = {};
  if (!html) return { values: out };
  const lists = {};
  (html.match(/aria-description="([^"]*)"/g) || []).forEach((m) => {
    const t = m.slice(18, -1).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/<[^>]+>/g, '');
    t.split(';').forEach((part) => {
      const mm = /^([^:]+?):\s*(1 .*)$/.exec(part.trim());
      if (!mm) return;
      const ranks = {};
      mm[2].replace(/(\d+) ([^\d]+?)(?= \d+ |\s*$)/g, (x, n, name) => { ranks[name.trim()] = +n; return x; });
      if (!lists[mm[1]] || Object.keys(ranks).length > Object.keys(lists[mm[1]]).length) lists[mm[1]] = ranks;
    });
  });
  const L = (k) => lists[Object.keys(lists).find((x) => x.indexOf(k) === 0)] || {};
  const idx = L('Ease of Settling In'), fr = L('Local Friendliness'), ff = L('Finding Friends'), cw = L('Culture & Welcome');
  const of = Object.keys(fr).length;
  A.countries.forEach((c) => {
    const n = PEOPLE_NAME[c.id] || c.name;
    if (fr[n]) out[c.id] = { friendly: fr[n], friends: ff[n] || null, welcome: cw[n] || null, settling: idx[n] || null, of, year };
  });
  return { values: out, src: u, of, year };
}

/* ------------------------------------------------------------- language --- */
async function languages() {
  const u = 'https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-core/supplemental/territoryInfo.json';
  const d = await cached('cldr-territoryInfo.json', u, json);
  const out = {};
  if (!d) return { values: out };
  const T = d.supplemental.territoryInfo;
  Object.keys(ISO3).forEach((id) => {
    const lp = (T[id] || {}).languagePopulation;
    if (!lp) return;
    const rows = Object.keys(lp).filter((c) => lp[c]._officialStatus && (lp[c]._officialStatus !== 'official_regional' || +lp[c]._populationPercent >= 1))
      .map((c) => ({ c: c.replace(/_[A-Z][a-z]{3}$/, ''), pct: Math.round(+lp[c]._populationPercent), st: lp[c]._officialStatus }))
      .sort((a, b) => (a.st === 'official_regional') - (b.st === 'official_regional') || b.pct - a.pct);
    const seen = {};
    out[id] = rows.filter((r) => (seen[r.c] ? false : (seen[r.c] = true)));
  });
  return { values: out };
}

/* ----------------------------------------------------------------- main --- */
(async () => {
  const ctx = { I18N: { add() {}, t: (s) => s } }; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/atlas/index.js'), 'utf8'), ctx);
  const A = ctx.ATLAS;
  fs.readdirSync(path.join(ROOT, 'data/atlas')).filter((f) => /^[a-z]{2}\.js$/.test(f))
    .forEach((f) => vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/atlas', f), 'utf8'), ctx));
  const today = new Date().toISOString().slice(0, 10);

  const efIdx = await efIndex();
  const [homicide, oop, life, hours, prices] = [await worldBank('VC.IHR.PSRC.P5'), await worldBank('SH.XPD.OOPC.CH.ZS'),
    await worldBank('SP.DYN.LE00.IN'), await ilo(), await imfPrices()];
  const [uhc, phys, beds, ncd] = [await worldBank('SH_UHC_SCI'), await worldBank('SH.MED.PHYS.ZS'),
    await worldBank('SH.MED.BEDS.ZS'), await worldBank('SH.DYN.NCOM.ZS')];
  const langs = await languages();
  const crimes = await crime(), folk = await people(A);

  const country = {}, hub = {}, missing = [];
  const ONLY = (process.env.ONLY || '').split(',').filter(Boolean);
  for (const c of A.countries.filter((x) => !ONLY.length || ONLY.includes(x.id))) {
    const rec = A.records[c.id];
    if (!rec) { missing.push(c.id + ': no record'); continue; }
    const ef = await efCountry(c.id, c.name, efIdx);
    country[c.id] = {
      english: ef ? { score: ef.score, rank: ef.rank, band: ef.band, src: ef.src } : (EF_NATIVE.includes(c.id) ? { native: true } : null),
      prices: prices.values[c.id] || null,
      safety: (homicide.values || {})[c.id] || null,
      hours: hours[c.id] || null,
      oop: (oop.values || {})[c.id] || null,
      life: (life.values || {})[c.id] || null,
      crime: crimes.values[c.id] || null,
      language: langs.values[c.id] || null,
      care: { uhc: (uhc.values || {})[c.id] || null, doctors: (phys.values || {})[c.id] || null,
        beds: (beds.values || {})[c.id] || null, ncd: (ncd.values || {})[c.id] || null },
      people: folk.values[c.id] || null
    };
    for (const h of rec.hubs) {
      const key = c.id + '/' + h.id;
      process.stdout.write('\r' + key + '                    ');
      const [cl, aq] = [await climate(h), await air(h)];
      if (!cl) missing.push(key + ' climate');
      if (!aq) missing.push(key + ' air');
      hub[key] = {
        climate: cl, daylight: daylight(h.lat), air: aq ? { pm25: aq.pm25, n: aq.n } : null,
        time: aq && aq.tz ? timeOf(aq.tz) : null,
        english: ef ? efCities(h, ef.cities) : []
      };
    }
  }
  process.stdout.write('\n');

  const out = {
    seen: today,
    sources: {
      climate: { by: 'NASA POWER climatology, 2001–2020 monthly means (MERRA-2 reanalysis, about 50 km cells)', src: 'https://power.larc.nasa.gov/docs/services/api/temporal/climatology/', tag: 'data' },
      daylight: { by: 'Admetia calculation from the hub’s latitude with NOAA’s solar position equations', src: 'https://gml.noaa.gov/grad/solcalc/calcdetails.html', tag: 'data' },
      air: { by: 'CAMS global atmospheric composition forecasts, through the Open-Meteo air quality API: modelled mean PM2.5, natural desert dust included, over the first 14 days of each month of ' + YEAR_AIR, src: 'https://open-meteo.com/en/docs/air-quality-api', tag: 'data' },
      airGuide: { by: 'WHO global air quality guidelines (2021): PM2.5, 5 µg/m³ annual mean', src: 'https://www.who.int/publications/i/item/9789240034228', tag: 'data' },
      time: { by: 'IANA time zone database, zone of the hub’s coordinates', src: 'https://www.iana.org/time-zones', tag: 'data' },
      english: { by: 'EF English Proficiency Index' + (efIdx.edition ? ' ' + efIdx.edition : '') + ' (scores from a self-selected sample of EF test takers)', src: 'https://www.ef.com/wwen/epi/', tag: 'data', edition: efIdx.edition },
      language: { by: 'Unicode CLDR territory data: official and regional-official languages and the estimated share of the population who speak each', src: 'https://cldr.unicode.org/', tag: 'data' },
      uhc: { by: 'UHC service coverage index (0–100: essential health services such as maternal and child health, infectious disease, noncommunicable disease and service capacity), WHO and World Bank', src: 'https://data.worldbank.org/indicator/SH.UHC.SRVS.CV.XD', tag: 'data' },
      doctors: { by: 'Physicians per 1,000 people, WHO Global Health Workforce Statistics, through the World Bank', src: 'https://data.worldbank.org/indicator/SH.MED.PHYS.ZS', tag: 'data' },
      beds: { by: 'Hospital beds per 1,000 people, WHO, through the World Bank', src: 'https://data.worldbank.org/indicator/SH.MED.BEDS.ZS', tag: 'data' },
      ncd: { by: 'Probability of dying between ages 30 and 70 from cardiovascular disease, cancer, diabetes or chronic respiratory disease, WHO, through the World Bank', src: 'https://data.worldbank.org/indicator/SH.DYN.NCOM.ZS', tag: 'data' },
      prices: { by: 'Price level: GDP at market exchange rates over GDP at purchasing-power parity, IMF ' + (prices.edition || 'World Economic Outlook') + ', ' + prices.year + ' (US = 100)', src: 'https://www.imf.org/external/datamapper/datasets/WEO', tag: 'data' },
      safety: { by: 'Intentional homicides per 100,000 people, UNODC, through the World Bank World Development Indicators', src: 'https://data.worldbank.org/indicator/VC.IHR.PSRC.P5', tag: 'data' },
      hours: { by: 'Mean weekly hours actually worked per employed person, ILOSTAT', src: 'https://ilostat.ilo.org/topics/working-time/', tag: 'data' },
      oop: { by: 'Out-of-pocket spending, % of current health expenditure, WHO Global Health Expenditure Database, through the World Bank', src: 'https://data.worldbank.org/indicator/SH.XPD.OOPC.CH.ZS', tag: 'data' },
      life: { by: 'Life expectancy at birth, World Bank World Development Indicators', src: 'https://data.worldbank.org/indicator/SP.DYN.LE00.IN', tag: 'data' },
      crime: { by: 'UNODC crime statistics (CTS): offences recorded by the police, per 100,000 people; serious assault and robbery computed from UNODC counts and population', src: crimes.src || 'https://data.unodc.org/dataportal', tag: 'data' },
      people: { by: 'InterNations, Expat Insider ' + (folk.year || '') + ', Ease of Settling In Index: ranks of ' + (folk.of || '') + ' destinations from a survey of more than 10,000 foreign residents (how they perceive locals; a self-selected sample)', src: folk.src || 'https://www.internations.org/expat-insider/', tag: 'data', of: folk.of, year: folk.year }
    },
    country, hub
  };
  const body = '/* ---------------------------------------------------------------------------\n' +
    ' * Life there, for the Atlas. GENERATED by tools/atlas-life.js — do not edit.\n' +
    ' * country: values for the whole country; hub: values for one city, read at\n' +
    ' * the hub’s city-centre coordinates. null: the source publishes no figure.\n' +
    ' * ------------------------------------------------------------------------- */\n\n' +
    'window.ATLAS_LIFE = ' + JSON.stringify(out) + ';\n';
  fs.writeFileSync(path.join(ROOT, 'data/atlas/life.js'), body);
  console.log('wrote data/atlas/life.js:', Object.keys(country).length, 'countries,', Object.keys(hub).length, 'hubs');
  if (missing.length) console.log('missing:', missing.join(', '));
})().catch((e) => { console.error(e); process.exit(1); });

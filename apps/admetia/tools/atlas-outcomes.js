/* Builds data/atlas/outcomes.js: how graduates fare in each Atlas country.
 *
 * Two kinds of figure, kept apart so a page can say which it shows:
 *   Eurostat (EU labour force survey, which also covers Norway, Iceland,
 *   Switzerland and Turkey) is fetched here from the dissemination API, one
 *   definition for every country that has it; the figures are counts and
 *   shares only, tagged data.
 *   research/outcomes/researched.json holds the countries Eurostat does not
 *   cover (the UK, whose Eurostat series stops at 2019, the US, Canada, the Gulf, Asia-Pacific...), read by hand
 *   from national statistics offices, the OECD and graduate surveys, each
 *   figure with its own definition, year and link. Definitions differ, so
 *   the page never ranks across the two groups.
 *
 *   node tools/atlas-outcomes.js
 *
 * Metrics:
 *   recentGrad  employment rate of tertiary graduates aged 20-34, 1 to 3 years
 *               after finishing, not in education (edat_lfse_24)
 *   gradUnemp   unemployment rate of 25-64s with a tertiary degree (lfsa_urgaed)
 *   youthUnemp  unemployment rate, 15-24 (une_rt_a)
 *   overqual    share of employed 25-34s with a degree who work in jobs that do
 *               not need one (lfsa_eoqgan)
 *   foreignGrad employment rate of foreign-born 25-64s with a degree
 *               (lfsa_ergaedcob)
 *   timeToJob   months to a first job (researched only)
 *   returnOffer share of interns kept on (researched only) */
const fs = require('fs'), path = require('path'), https = require('https');
const ROOT = path.join(__dirname, '..');
const GEO = { PT: 'PT', ES: 'ES', FR: 'FR', MT: 'MT', IT: 'IT', CH: 'CH', IS: 'IS', IE: 'IE', DK: 'DK', BE: 'BE', LU: 'LU',
  NL: 'NL', AT: 'AT', DE: 'DE', NO: 'NO', SE: 'SE', FI: 'FI', PL: 'PL', LT: 'LT', EE: 'EE', CZ: 'CZ', GR: 'EL', RO: 'RO', BG: 'BG',
  TR: 'TR' };
const BASE = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/';
const get = (u) => new Promise((ok, no) => https.get(u, { headers: { 'User-Agent': 'curl/8.0', Accept: 'application/json' } }, (r) => {
  let b = ''; r.on('data', (d) => b += d); r.on('end', () => { try { ok(JSON.parse(b)); } catch (e) { no(new Error(u + ' → ' + b.slice(0, 120))); } });
}).on('error', no));

const METRICS = {
  recentGrad: { code: 'edat_lfse_24', q: 'duration=Y1-3&isced11=ED5-8&age=Y20-34&sex=T&unit=PC',
    def: 'Employment rate of people aged 20-34 with a tertiary degree who finished 1 to 3 years ago and are no longer studying' },
  gradUnemp: { code: 'lfsa_urgaed', q: 'isced11=ED5-8&age=Y25-64&sex=T&unit=PC',
    def: 'Unemployment rate of people aged 25-64 with a tertiary degree' },
  youthUnemp: { code: 'une_rt_a', q: 'age=Y15-24&sex=T&unit=PC_ACT',
    def: 'Unemployment rate of people aged 15-24 (share of the labour force)' },
  overqual: { code: 'lfsa_eoqgan', q: 'citizen=TOTAL&age=Y25-34&sex=T&unit=PC',
    def: 'Share of employed people aged 25-34 with a tertiary degree who work in a job that does not require one' },
  foreignGrad: { code: 'lfsa_ergaedcob', q: 'c_birth=FOR&isced11=ED5-8&age=Y25-64&sex=T&unit=PC',
    def: 'Employment rate of people aged 25-64 with a tertiary degree who were born abroad' }
};

(async () => {
  const country = {}, today = new Date().toISOString().slice(0, 10);
  for (const [key, M] of Object.entries(METRICS)) {
    const geos = Object.values(GEO).map((g) => 'geo=' + g).join('&');
    const j = await get(BASE + M.code + '?format=JSON&lang=en&' + M.q + '&' + geos);
    const dims = j.id, size = j.size, idx = (d) => j.dimension[d].category.index;
    const gi = idx('geo'), ti = idx('time');
    const stride = {}; let s = 1;
    for (let i = dims.length - 1; i >= 0; i--) { stride[dims[i]] = s; s *= size[i]; }
    const up = j.updated ? j.updated.slice(0, 10) : today;
    for (const [id, g] of Object.entries(GEO)) {
      if (!(g in gi)) continue;
      let best = null;
      for (const [yr, ti_] of Object.entries(ti)) {
        const pos = gi[g] * stride.geo + ti_ * stride.time;
        const v = j.value[pos];
        if (v == null) continue;
        if (!best || +yr > best.year) best = { v: Math.round(v * 10) / 10, year: +yr, flag: (j.status || {})[pos] || '' };
      }
      if (!best) continue;
      (country[id] = country[id] || {})[key] = { v: best.v, year: best.year, flag: best.flag || undefined, def: M.def,
        by: 'Eurostat, ' + M.code, src: 'https://ec.europa.eu/eurostat/databrowser/view/' + M.code + '/default/table', tag: 'data', seen: today, group: 'eurostat', updated: up };
    }
    console.log(key.padEnd(12), Object.keys(country).filter((c) => country[c][key]).length + ' countries, latest years ' +
      [...new Set(Object.values(country).map((c) => c[key] && c[key].year).filter(Boolean))].sort().join(' '));
  }
  /* Countries Eurostat does not cover: the ILO's modelled estimates, published by the World Bank, one
   * definition for all of them (so comparable with each other, not with Eurostat's). */
  const ISO3 = { GB: 'GBR', US: 'USA', CA: 'CAN', AU: 'AUS', NZ: 'NZL', JP: 'JPN', KR: 'KOR', CN: 'CHN', HK: 'HKG', SG: 'SGP', TW: 'TWN',
    MY: 'MYS', TH: 'THA', VN: 'VNM', IL: 'ISR', RU: 'RUS', AE: 'ARE', SA: 'SAU', QA: 'QAT', KW: 'KWT', OM: 'OMN' };
  const WB = {
    gradUnemp: { code: 'SL.UEM.ADVN.ZS', def: 'Unemployment rate of people with an advanced (tertiary) education, share of the labour force with that education (ILO modelled estimate)',
      defIt: 'Tasso di disoccupazione di chi ha un’istruzione avanzata (terziaria), quota delle forze di lavoro con quel titolo (stima modellata dell’ILO)' },
    youthUnemp: { code: 'SL.UEM.1524.ZS', def: 'Unemployment rate of people aged 15-24, share of the labour force (ILO modelled estimate)',
      defIt: 'Tasso di disoccupazione di chi ha 15-24 anni, quota delle forze di lavoro (stima modellata dell’ILO)' }
  };
  const byIso = Object.fromEntries(Object.entries(ISO3).map(([k, v]) => [v, k]));
  for (const [key, M] of Object.entries(WB)) {
    const j = await get('https://api.worldbank.org/v2/country/' + Object.values(ISO3).join(';') + '/indicator/' + M.code + '?format=json&mrv=4&per_page=400');
    const rows = (j[1] || []).filter((r) => r.value != null).sort((a, b) => +b.date - +a.date);
    const done = new Set();
    for (const r of rows) {
      const id = byIso[r.countryiso3code];
      if (!id || done.has(id)) continue;
      done.add(id);
      (country[id] = country[id] || {})[key] = { v: Math.round(r.value * 10) / 10, year: +r.date, def: M.def, defIt: M.defIt,
        by: 'World Bank, ' + M.code + ' (ILO modelled estimate)', src: 'https://data.worldbank.org/indicator/' + M.code, tag: 'data', seen: today, group: 'ilo' };
    }
    console.log(key.padEnd(12), done.size + ' of the countries outside Eurostat');
  }
  const rp = path.join(ROOT, 'research/outcomes/researched.json');
  if (fs.existsSync(rp)) {
    const R = JSON.parse(fs.readFileSync(rp, 'utf8'));
    for (const [id, ms] of Object.entries(R)) {
      for (const [k, m] of Object.entries(ms)) {
        if (!m) continue;
        (country[id] = country[id] || {})[k] = Object.assign({ tag: 'data', seen: today, group: 'national' }, m);
      }
    }
  }
  const out = `/* ---------------------------------------------------------------------------
 * How graduates fare, per country, for the Atlas. GENERATED by tools/atlas-outcomes.js — do not edit.
 * Eurostat figures are fetched; the others are in research/outcomes/researched.json, each with its
 * own definition. group "eurostat" and group "ilo" are each comparable within themselves; "national" is not.
 * ------------------------------------------------------------------------- */

window.ATLAS_OUTCOMES = ${JSON.stringify({ seen: today, metrics: Object.fromEntries(Object.entries(METRICS).map(([k, m]) => [k, m.def])), country }, null, 0).replace(/\},"/g, '},\n"')};
`;
  fs.writeFileSync(path.join(ROOT, 'data/atlas/outcomes.js'), out);
  console.log('wrote data/atlas/outcomes.js,', Object.keys(country).length, 'countries');
})().catch((e) => { console.error(e); process.exit(1); });

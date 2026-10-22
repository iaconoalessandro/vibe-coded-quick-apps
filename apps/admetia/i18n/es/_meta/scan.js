#!/usr/bin/env node
/* Consistency scan: where the English has a glossary term, the Spanish must
 * (or must not) match a pattern. Reports the ids that do not, by rule.
 *
 *   node i18n/es/_meta/scan.js            counts per rule
 *   node i18n/es/_meta/scan.js <rule>     every hit of the rules whose name contains <rule>
 *   node i18n/es/_meta/scan.js --json     all hits as JSON ({rule: {chunk: [id]}})
 */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../../..');
const manifest = require('./manifest.json');

/* [name, English pattern, Spanish must match, Spanish must not match] */
const RULES = [
  ['route=vía', /\broutes?\b/i, /\bvías?\b|\bruta|\btrayecto|\bGraduate Route\b/i, /\bitinerarios?\b/i],
  ['hub=polo', /\bhubs?\b/i, /\bpolos?\b/i, null],
  ['standing=relevancia', /\bstanding\b/i, /relevancia|permanente|antigüedad|situación/i, null],
  ['library=biblioteca de fuentes', /\bthe library\b/i, /biblioteca de fuentes/i, null],
  ['track=itinerario', /\btracks?\b/i, /itinerario|trayectoria|historial|seguimiento|fast[- ]track|vía rápida/i, null],
  ['taught=con docencia', /\btaught (master|postgraduate|MSc|programme|degree)/i, /con docencia/i, null],
  ['target=objetivo', /\b(non-)?target (school|universit|list|campus)/i, /objetivo/i, null],
  ['return offer', /\breturn offers?\b/i, /tras las prácticas/i, null],
  ['civil service=función pública', /\bcivil service\b/i, /función pública|funcionari/i, /servicio civil/i],
  ['salary expectation=pretensiones', /\bsalary expectations?\b|\bexpected salary\b/i, /pretensiones salariales/i, null],
  ['LFS', /Labour Force Survey/i, /Encuesta de Población Activa|encuesta de población activa/, /Labour Force Survey/],
  ['settlement=residencia permanente', /\bsettlement\b/i, /residencia permanente|liquidación|asentamiento/i, null],
  ['shortage occupation', /\bshortage occupations?\b/i, /escasez de personal/i, null],
  ['single permit', /\bsingle permit\b/i, /permiso único/i, null],
  ['exits=desinversiones', /\bexits\b/i, /desinversion/i, null],
  ['Series A', /\bSeries [A-D]\b/, /Serie [A-D]\b/, /Series [A-D]\b/],
  ['H1/H2', /\bH[12] 20\d\d/, /semestre/i, /\bH[12] 20\d\d/],
  ['attestation=legalización', /\battest(ation|ed)\b/i, /legaliz/i, null],
  ['graduate programme', /\bgraduate (programme|scheme)s?\b/i, /programas? (\w+ )?para recién titulados|Graduate Programme/i, null],
  ['internship=prácticas', /\binternships?\b/i, /prácticas|becari/i, /pasantía|internship/i],
  ['deadline=fecha límite', /\bdeadlines?\b/i, /fechas? límite|plazo/i, null],
  ['employer', /\bemployers?\b/i, /emplead(or|ora|ores)|empresa/i, /patr[oó]n(es)?\b/i],
  ['visa=visado', /\bvisas?\b/i, /visado|Visa\b|e-?visa/i, /\b(la|una|las|de) visas?\b/i],
  ['numbered visa left English', /\b\d{3} visa\b/i, null, /\b\d{3} visa\b/i],
  ['job application=candidatura', /\bjob applications?\b/i, /candidatura/i, null],
  ['billion >= 1000', /\b\d{1,3},\d{3}(\.\d+)? billion\b/i, /billon|billón/i, /mil millones/i],
  ['usted', /./, null, /\busted(es)?\b|\bvosotros\b|\bsu perfil\b/i],
  ['tax office', /\btax office\b/i, /oficina tributaria|agencia tributaria/i, null],
  ['cover letter', /\bcover letters?\b/i, /cartas? de presentación/i, null],
  ['probation', /\bprobation(ary)?\b/i, /periodos? de prueba/i, null],
  ['assessment centre', /\bassessment cent(re|er)s?\b/i, /assessment cent/i, null],
  ['recent graduate', /\brecent graduates?\b/i, /recién titulad/i, /recién graduad|recién licenciad/i],
  ['graduado', /\bgraduates?\b/i, null, /\bgraduados?\b|\begresados?\b/i],
  ['master', /\bmaster'?s?\b/i, null, /\bmaestrías?\b|\bmasters?\b(?! in| of)/],
  ['ordenador/computadora', /./, null, /\bcomputadoras?\b|\bpasantías?\b|\bvisas? de\b/i],
];

const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const hits = {};
for (const e of manifest) {
  const src = JSON.parse(fs.readFileSync(path.join(ROOT, e.source), 'utf8'));
  const out = JSON.parse(fs.readFileSync(path.join(ROOT, e.target), 'utf8'));
  const chunk = path.basename(e.source, '.json');
  for (const id of Object.keys(src)) {
    const en = src[id], es = out[id] || '';
    for (const [name, enRe, must, mustNot] of RULES) {
      if (!enRe.test(en)) continue;
      if ((must && !must.test(es)) || (mustNot && mustNot.test(es))) ((hits[name] = hits[name] || {})[chunk] = hits[name][chunk] || []).push({ id, en, es });
    }
  }
}
if (process.argv.includes('--json')) {
  const o = {};
  for (const r in hits) { o[r] = {}; for (const c in hits[r]) o[r][c] = hits[r][c].map((h) => h.id); }
  console.log(JSON.stringify(o));
} else {
  for (const [name] of RULES) {
    const h = hits[name] || {}, n = Object.values(h).reduce((a, b) => a + b.length, 0);
    if (only.length && !only.some((o) => name.includes(o))) continue;
    console.log(`${name}: ${n} in ${Object.keys(h).length} chunks`);
    if (only.length) for (const c in h) for (const x of h[c]) console.log(`  ${x.id}\n    EN ${x.en.slice(0, 260)}\n    ES ${x.es.slice(0, 260)}`);
  }
}

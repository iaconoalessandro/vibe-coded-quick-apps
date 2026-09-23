/* The Italian translation (js/i18n.js, js/i18n-it.js, data/i18n-it-models.js).
 *
 * Two things must never happen: an entry that drops or invents a {placeholder}
 * or an HTML tag, and a translation that changes a score. Missing or stale
 * entries are reported but do not fail — an edited English sentence simply
 * shows in English until its Italian is updated, and that must not block a
 * deadline refresh from being published. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const report=require('../tools/i18n-report.js').check();

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* ------------------------------------------------------------ entries --- */
t('no entry drops or invents a {placeholder} or an HTML tag',report.broken.length===0,report.broken.slice(0,5).join(' | '));
t('there is a substantial dictionary',Object.keys(report.dict).length>1000,String(Object.keys(report.dict).length));
const empty=Object.keys(report.dict).filter(k=>typeof report.dict[k]!=='string'||!report.dict[k].trim());
t('no entry is empty',empty.length===0,empty.slice(0,5).join(' | '));
console.log('  (info) model prose without Italian: '+report.missing.length+', stale entries: '+report.stale.length+
  ' — run node tools/i18n-report.js -v for the list');

/* ------------------------------------------------- the engine in Node --- */
function sandbox(lang){
  const store={'admissions-calc:lang':lang};
  const s={console,Math,parseFloat,parseInt,isNaN,Object,Infinity,String,Number,Date,RegExp,Array,JSON,
    localStorage:{getItem:k=>store[k]===undefined?null:store[k],setItem:(k,v)=>{store[k]=String(v);}}};
  s.window=s;
  vm.createContext(s);
  const files=['js/i18n.js','js/i18n-it.js','data/conversions.js','data/masters-model.js','data/it-model.js',
    'data/it-evidence.js','data/mba-model.js','data/mba-companies.js','data/deadlines.js','data/i18n-it-models.js',
    'js/score-masters.js','js/score-it.js','js/score-mba.js'];
  for(const f of files) vm.runInContext(fs.readFileSync(path.join(APP,f),'utf8'),s,{filename:f});
  return s;
}
const EN=sandbox('en'), IT=sandbox('it');

t('English readers get English',EN.I18N.lang==='en'&&EN.I18N.t('Me now')==='Me now');
t('Italian readers get Italian',IT.I18N.lang==='it'&&IT.I18N.t('Me now')==='Io adesso');
t('templates are filled after lookup',IT.I18N.t('in {n} days',{n:12})==='tra 12 giorni');
t('an unknown string stays in English',IT.I18N.t('No such sentence here')==='No such sentence here');
t('plural picks the singular at one',IT.I18N.tn(1,'{n} published rule','{n} published rules')==='1 regola pubblicata');
t('plural picks the plural otherwise',IT.I18N.tn(3,'{n} published rule','{n} published rules')==='3 regole pubblicate');
t('Italian keeps figures where English writes words',EN.I18N.words(3)==='three'&&IT.I18N.words(3)==='3');
t('Italian ordinals',IT.I18N.ordinal(75)==='75º'&&EN.I18N.ordinal(73)==='73rd');
t('Italian month names',IT.I18N.month(8)==='set'&&EN.I18N.month(8)==='Sep');

/* The models really are translated in place... */
t('Italian models carry Italian questions',IT.MASTERS_MODEL.steps[0].title==='La tua laurea'&&EN.MASTERS_MODEL.steps[0].title==='Your degree');
/* ...but nothing the scorers compare is touched. */
const ids=(M)=>JSON.stringify(M.steps.map(s=>s.groups.map(g=>[g.id,(g.options||[]).map(o=>o.id)])));
t('question and option ids are identical in both languages',ids(EN.MASTERS_MODEL)===ids(IT.MASTERS_MODEL)&&ids(EN.IT_MODEL)===ids(IT.IT_MODEL)&&ids(EN.MBA_MODEL)===ids(IT.MBA_MODEL));
const places=(M)=>JSON.stringify(M.schools.map(s=>[s.id,s.region,s.name]));
t('school ids, regions and names are identical in both languages',places(EN.MASTERS_MODEL)===places(IT.MASTERS_MODEL)&&places(EN.IT_MODEL)===places(IT.IT_MODEL));
t('calendar keys and dates are identical in both languages',
  JSON.stringify(Object.keys(EN.ADMISSIONS_CALENDAR.schools).map(k=>[k,EN.ADMISSIONS_CALENDAR.schools[k].rounds&&EN.ADMISSIONS_CALENDAR.schools[k].rounds.map(r=>r[1])]))===
  JSON.stringify(Object.keys(IT.ADMISSIONS_CALENDAR.schools).map(k=>[k,IT.ADMISSIONS_CALENDAR.schools[k].rounds&&IT.ADMISSIONS_CALENDAR.schools[k].rounds.map(r=>r[1])])));

/* Every score, for a spread of profiles, is the same number in both languages. */
function profile(M,pick){
  const a={};
  M.steps.forEach(st=>st.groups.forEach(g=>{
    if(g.type==='radio'&&g.options&&g.options.length){ const o=g.options[pick%g.options.length]; if(!o.requires) a[g.id]=o.id; }
    else if(g.type==='checkbox'&&g.options) g.options.forEach((o,i)=>{ if((i+pick)%2) a[o.id]=true; });
    else if(g.type==='number'&&g.min!==undefined) a[g.id]=g.min+((g.max-g.min)*((pick%5)/4));
  }));
  return a;
}
let same=true, n=0;
for(let pick=0;pick<6;pick++){
  for(const tr of ['mim','mif','marketing']){
    const a=profile(EN.MASTERS_MODEL,pick);
    const x=EN.MASTERS_SCORE.evaluate(a,tr), y=IT.MASTERS_SCORE.evaluate(a,tr);
    same=same&&x.score.total===y.score.total&&JSON.stringify(x.rows.map(r=>[r.school.id,r.adjusted,r.eligible,r.verdict.tone]))===JSON.stringify(y.rows.map(r=>[r.school.id,r.adjusted,r.eligible,r.verdict.tone]));
    n++;
  }
  for(const tr of ['cs','dsai','conversion']){
    const a=profile(EN.IT_MODEL,pick);
    const x=EN.IT_SCORE.evaluate(a,tr), y=IT.IT_SCORE.evaluate(a,tr);
    same=same&&x.score.total===y.score.total&&JSON.stringify(x.rows.map(r=>[r.school.id,r.adjusted,r.eligible,r.verdict.tone]))===JSON.stringify(y.rows.map(r=>[r.school.id,r.adjusted,r.eligible,r.verdict.tone]));
    n++;
  }
  const a=profile(EN.MBA_MODEL,pick);
  for(const mode of ['published','corrected']){
    const x=EN.MBA_SCORE.score(a,mode), y=IT.MBA_SCORE.score(a,mode);
    same=same&&x.base===y.base&&JSON.stringify(x.schools)===JSON.stringify(y.schools);
    n++;
  }
}
t('every score is the same in Italian as in English ('+n+' profile × track runs)',same);

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

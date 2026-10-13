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
  const files=['js/i18n.js','js/i18n-it.js','js/i18n-fr.js','data/conversions.js','data/masters-model.js','data/computing-model.js',
    'data/computing-evidence.js','data/mba-model.js','data/mba-companies.js','data/deadlines.js','data/i18n-it-models.js','data/i18n-fr-models.js',
    'js/score-masters.js','js/score-computing.js','js/score-mba.js'];
  for(const f of files) vm.runInContext(fs.readFileSync(path.join(APP,f),'utf8'),s,{filename:f});
  return s;
}
const EN=sandbox('en'), IT=sandbox('it'), FR=sandbox('fr');

t('English readers get English',EN.I18N.lang==='en'&&EN.I18N.t('Me now')==='Me now');
t('Italian readers get Italian',IT.I18N.lang==='it'&&IT.I18N.t('Me now')==='Io adesso');
t('templates are filled after lookup',IT.I18N.t('in {n} days',{n:12})==='tra 12 giorni');
t('an unknown string stays in English',IT.I18N.t('No such sentence here')==='No such sentence here');
t('plural picks the singular at one',IT.I18N.tn(1,'{n} published rule','{n} published rules')==='1 regola pubblicata');
t('plural picks the plural otherwise',IT.I18N.tn(3,'{n} published rule','{n} published rules')==='3 regole pubblicate');
t('Italian keeps figures where English writes words',EN.I18N.words(3)==='three'&&IT.I18N.words(3)==='3');
t('Italian ordinals',IT.I18N.ordinal(75)==='75º'&&EN.I18N.ordinal(73)==='73rd');
t('Italian month names',IT.I18N.month(8)==='set'&&EN.I18N.month(8)==='Sep');
t('French is a saved language with French number and date formatting',FR.I18N.lang==='fr'&&FR.I18N.locale==='fr-FR'&&FR.I18N.month(7)==='août'&&FR.I18N.ordinal(1)==='1er'&&FR.I18N.ordinal(2)==='2e');
t('French has familiar labels and explains technical abbreviations',FR.I18N.t('Running score')==='Votre score actuel'&&FR.I18N.t('Data & AI')==='Données et intelligence artificielle'&&FR.I18N.t('GMAT').includes('Test d’admission'));
t('French questions are translated before a calculator draws them',FR.MASTERS_MODEL.steps[0].title==='Votre diplôme');
t('French templates preserve their variables',FR.I18N.t('in {n} days',{n:12})==='dans 12 jours');
t('the language picker includes all three languages',FR.I18N.langs.map(x=>x.id).join(',')==='en,it,fr');

/* Generated metadata uses shared templates, including names containing
 * punctuation. It must translate without altering the English source. */
function metadataDocument(template, vars) {
  const title={getAttribute:k=>k==='data-i18n'?template:k==='data-i18n-vars'?vars:null};
  const meta={getAttribute:k=>k==='content'?'English description':null,setAttribute:()=>{}};
  const body={tagName:'BODY',getAttribute:()=>null,firstChild:null,firstElementChild:null};
  return {title:'English title',body,querySelector:q=>q==='title'?title:meta};
}
IT.document=metadataDocument('If you studied {name} — Career Explorer — Admetia',JSON.stringify({name:'Finance'}));
IT.I18N.translateDom();
t('generated metadata translates its template and background name',IT.document.title==='Se hai studiato Finanza — Esplora le carriere — Admetia');
IT.document=metadataDocument('{name} — Career Explorer — Admetia',JSON.stringify({name:'Analyst "A&B"'}));
IT.I18N.translateDom();
t('generated metadata preserves punctuation in untranslated role names',IT.document.title==='Analyst "A&B" — Esplora le carriere — Admetia');
IT.document=metadataDocument('{name} — Career Explorer — Admetia','invalid JSON');
IT.I18N.translateDom();
t('malformed metadata variables retain the English fallback',IT.document.title==='English title');
delete IT.document;
const careersData=JSON.parse(fs.readFileSync(path.join(APP,'careers/data/careers.json'),'utf8'));
t('all 154 career names have French descriptions for students',careersData.roles.every(r=>FR.I18N.t(r.title)!==r.title));
t('French career descriptions avoid unexplained specialist labels',FR.I18N.t('Backend software engineer')==='Développeur des fonctions internes d’un logiciel'&&FR.I18N.t('SOC analyst (tier 1-3)')==='Analyste de sécurité informatique, niveaux 1 à 3');
const summary=`What ${careersData.roles.length} graduate jobs in ${careersData.fields.length} fields are really like: the work, hours, stress, pay by region, the way in and the exits. Start from your degree, a field or the job you want.`;
t('the Italian career summary preserves the current role and field counts',
  IT.I18N.t(summary)!==summary&&IT.I18N.t(summary).includes(String(careersData.roles.length))&&IT.I18N.t(summary).includes(String(careersData.fields.length)));

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
let sameFrench=true;
for(let pick=0;pick<6;pick++){
  for(const [model,scorer,tracks] of [['MASTERS_MODEL','MASTERS_SCORE',['mim','mif','marketing']],['IT_MODEL','IT_SCORE',['cs','dsai','conversion']]]){
    for(const track of tracks){
      const a=profile(EN[model],pick),x=EN[scorer].evaluate(a,track),y=FR[scorer].evaluate(a,track);
      sameFrench=sameFrench&&x.score.total===y.score.total&&JSON.stringify(x.rows.map(r=>[r.school.id,r.adjusted,r.eligible,r.verdict.tone]))===JSON.stringify(y.rows.map(r=>[r.school.id,r.adjusted,r.eligible,r.verdict.tone]));
    }
  }
  for(const mode of ['published','corrected']){
    const a=profile(EN.MBA_MODEL,pick),x=EN.MBA_SCORE.score(a,mode),y=FR.MBA_SCORE.score(a,mode);
    sameFrench=sameFrench&&x.base===y.base&&JSON.stringify(x.schools)===JSON.stringify(y.schools);
  }
}
t('French preserves every score and eligibility result (48 profile × track runs)',sameFrench);
const frenchReport=require('../tools/i18n-report.js').check('fr');
t('French preserves all placeholders and HTML tags',frenchReport.broken.length===0,frenchReport.broken.slice(0,3).join(' | '));
t('French covers culture, outcomes, fee notes, employer programmes and diagram labels',frenchReport.supplementalMissing.length===0,frenchReport.supplementalMissing.slice(0,5).join(' | '));
const frenchScopeErrors=Object.entries({...frenchReport.dict,...frenchReport.atlas}).filter(([en,fr])=>
  /non[- ]EU\b/i.test(en)&&!/non[- ]European\b/i.test(en)&&/non[- ]européen/i.test(fr));
t('French keeps non-EU distinct from non-European',frenchScopeErrors.length===0,frenchScopeErrors.map(x=>x[0]).slice(0,3).join(' | '));
t('French covers every existing Italian interface and model lookup key',Object.keys(report.dict).every(k=>frenchReport.dict[k]!==undefined));
t('French covers the country vocabulary and all existing Italian country text',Object.keys(report.atlas).every(k=>frenchReport.atlas[k]!==undefined||frenchReport.dict[k]!==undefined));
const countryPairs=new Set();
function collectPairs(o){
  if(!o||typeof o!=='object')return;
  if(Array.isArray(o)&&typeof o[0]==='string'&&typeof o[1]==='string'&&/[a-z]{3}/.test(o[0]))countryPairs.add(o[0]);
  Object.values(o).forEach(v=>{if(v&&typeof v==='object')collectPairs(v);});
}
const countryBox={console,ATLAS:{addEntry:collectPairs,addVisas:collectPairs,visaSources:()=>{}}};
vm.createContext(countryBox);
for(const dir of ['data/atlas/entry','data/atlas/visas']){
  for(const f of fs.readdirSync(path.join(APP,dir)).filter(f=>/^[a-z]{2}\.js$/.test(f)))vm.runInContext(readCountry(dir+'/'+f),countryBox);
}
function readCountry(f){return fs.readFileSync(path.join(APP,f),'utf8');}
t('French covers every hiring and visa sentence in all 46 guides',Array.from(countryPairs).every(k=>frenchReport.atlas[k]!==undefined||frenchReport.dict[k]!==undefined));

/* ------------------------------------------------------------ the Atlas --- */
/* Every sentence in a country record has Italian, in the same file; the
 * Italian keeps every number the English has; no entry is left over from
 * edited English; and translating never changes a rating, an id or a
 * coordinate — the Atlas's equivalent of a score. */
function atlasLoad(lang){
  const store={'admissions-calc:lang':lang};
  const s={console,Math,Object,String,Number,Array,JSON,Date,RegExp,
    localStorage:{getItem:k=>store[k]===undefined?null:store[k],setItem:()=>{}}};
  s.window=s;
  vm.createContext(s);
  vm.runInContext(fs.readFileSync(path.join(APP,'js/i18n.js'),'utf8'),s);
  vm.runInContext(fs.readFileSync(path.join(APP,'data/atlas/index.js'),'utf8'),s);
  return s;
}
const atlasFiles=fs.readdirSync(path.join(APP,'data/atlas')).filter(f=>/^[a-z]{2}\.js$/.test(f));
const AEN=atlasLoad('en'), AIT=atlasLoad('it');
atlasFiles.forEach(f=>{ const src=fs.readFileSync(path.join(APP,'data/atlas',f),'utf8'); try{ vm.runInContext(src,AEN); vm.runInContext(src,AIT); }catch(e){ console.log('FAIL  Atlas: '+f+' does not run → '+e.message); } });

function prose(rec){
  const out=[];
  const add=s=>{ if(typeof s==='string'&&s) out.push(s); };
  add(rec.summary); (rec.sectors||[]).forEach(add); (rec.gaps||[]).forEach(add);
  (rec.briefs||[]).forEach(b=>add(b[1]));
  (rec.hubs||[]).forEach(h=>{ add(h.knownFor); (h.sectors||[]).forEach(add); (h.employers||[]).forEach(e=>{ add(e.note); add(e.t); }); });
  Object.values(rec.route||{}).forEach(r=>Array.isArray(r)&&r.forEach(it=>add(it.k)));
  (rec.work||[]).forEach(it=>add(it.k)); (rec.arrival||[]).forEach(it=>add(it.k));
  Object.values(rec.claims||{}).forEach(c=>add(c.t));
  return out;
}
/* Digits, with thousands and decimal separators dropped, so 50,700 and
 * 50.700 (or 45,934.20 and 45.934,20) count as the same number. */
const nums=s=>(String(s).match(/\d{1,3}(?:[., ]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/g)||[]).map(n=>n.replace(/[., ]/g,'')).sort().join(' ');
/* The shared vocabulary (country names, families, levels) lives in index.js. */
const atlasIndexDict={};
(function(){ const c={console,window:null,I18N:{add:(l,d)=>{ if(l==='it') Object.assign(atlasIndexDict,d); }}}; c.window=c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(APP,'data/atlas/index.js'),'utf8'),c); }());
let atlasMissing=[], atlasNums=[], atlasStale=[];
/* ATLAS_ONLY=ee,lt limits the three lists below to those records and prints them in full. */
const ONLY=(process.env.ATLAS_ONLY||'').split(',').filter(Boolean).map(x=>x.trim().toLowerCase()+'.js');
atlasFiles.forEach(f=>{
  if(ONLY.length&&ONLY.indexOf(f)<0) return;
  const dict={};
  const c={console,window:null,ATLAS:{add:()=>{}},I18N:{add:(l,d)=>{ if(l==='it') Object.assign(dict,d); }}};
  c.window=c; vm.createContext(c);
  try{ vm.runInContext(fs.readFileSync(path.join(APP,'data/atlas',f),'utf8'),c); }catch(e){ return; }
  const rec=AEN.ATLAS.records[f.slice(0,2).toUpperCase()];
  if(!rec) return;
  const ps=prose(rec), shared=IT.I18N;
  ps.forEach(s=>{
    const it=dict[s]!==undefined?dict[s]:atlasIndexDict[s];
    if(it===undefined) atlasMissing.push(f+': '+s.slice(0,60));
    else if(nums(s)!==nums(it)) atlasNums.push(f+': '+s.slice(0,50)+' ['+nums(s)+' vs '+nums(it)+']');
  });
  const set=new Set(ps);
  Object.keys(dict).forEach(k=>{ if(!set.has(k)) atlasStale.push(f+': '+k.slice(0,60)); });
});
t('Atlas: every sentence in every country record has Italian ('+atlasFiles.length+' records)',atlasMissing.length===0,atlasMissing.length+': '+atlasMissing.slice(0,ONLY.length?1e6:40).join(' | '));
t('Atlas: the Italian keeps every number the English has',atlasNums.length===0,atlasNums.slice(0,ONLY.length?1e6:3).join(' | '));
t('Atlas: no Italian entry is left over from edited English',atlasStale.length===0,atlasStale.slice(0,ONLY.length?1e6:3).join(' | '));
const idx=[...AEN.ATLAS.countries.map(c=>c.name),...AEN.ATLAS.views.map(v=>v.label),...AEN.ATLAS.roles.map(r=>r.name),
  ...AEN.ATLAS.financeRoles.map(r=>r.name),...AEN.ATLAS.levels.map(l=>l.name),...AEN.ATLAS.levels.map(l=>l.note),
  ...AEN.ATLAS.passports.map(p=>p.label),AEN.ATLAS.adjacentBasis.t,
  ...AEN.ATLAS.scales.map(x=>x.name),...AEN.ATLAS.steps.map(x=>x.name),...(AEN.ATLAS.arrivalSteps||[]).map(x=>x.name),...AEN.ATLAS.metrics.map(x=>x.name),...AEN.ATLAS.areas.map(x=>x.name)];
const idxMissing=idx.filter(s=>AIT.I18N.t(s)===s&&!/^(Malta|Austria|Estonia|Romania|Bulgaria|Canada|Russia|Oman|Qatar|Kuwait|Malaysia|Singapore|Vietnam|Taiwan|Australia|Hong Kong|Business|Management|Marketing|Analytics|IT|Software|Investment banking|Asset management|Private equity|Venture capital|Risk management)$/.test(s));
t('Atlas: country names, views, role families, levels and passports have Italian',idxMissing.length===0,idxMissing.join(' | '));
const shape=(A)=>JSON.stringify(Object.values(A.ATLAS.records).map(r=>[r.id,r.roles,r.hubs.map(h=>[h.id,h.lat,h.lon,h.demand,h.finance||null,(h.programmes||[]).map(p=>p.id),h.standing||null,h.metrics||null])]));
t('Atlas: ratings, ids and coordinates are identical in both languages',shape(AEN)===shape(AIT)&&atlasFiles.length>0);

/* A temporary country request failure must not leave French permanently
 * unavailable, and simultaneous consumers share the same request. */
async function finalChecks() {
  const scripts=[];
  FR.document={createElement:()=>({remove(){}}),head:{appendChild:s=>scripts.push(s)}};
  const first=FR.I18N.countryLanguage('FR'),second=FR.I18N.countryLanguage('fr');
  t('French country consumers share one request',first===second&&scripts.length===1);
  scripts[0].onerror();
  t('French country loading retries a temporary failure',scripts.length===2&&scripts[1].src.endsWith('data/atlas/fr/fr.js'));
  scripts[1].onload();await first;
  const failed=FR.I18N.countryLanguage('gb').then(()=>false,()=>true);
  for(let i=2;i<5;i++)scripts[i].onerror();
  t('French country loading rejects persistent failure instead of hanging',await failed);
  const again=FR.I18N.countryLanguage('gb');
  t('a failed French country request can be tried again',scripts.length===6);
  scripts[5].onload();await again;

  const label={textContent:'Fact table'};
  const svg={tagName:'svg',getAttribute:k=>k==='lang'?'en':null,querySelectorAll:()=>[label],setAttribute:(k,v)=>{svg[k]=v}};
  FR.document={querySelector:()=>null};FR.I18N.translateDom(svg);
  t('French diagrams translate text without changing SVG geometry',label.textContent==='Table'&&svg.lang==='fr');
  const original={...svg,lang:'en'};label.textContent='Fact table';EN.document=FR.document;EN.I18N.translateDom(original);
  t('English diagram labels remain English',label.textContent==='Fact table');
  console.log('\n'+pass+' passed, '+fail+' failed');process.exit(fail?1:0);
}
finalChecks().catch(e=>{console.error(e);process.exit(1)});

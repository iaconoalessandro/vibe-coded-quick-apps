/* IT & Computing model — gates, profiles, counterfactuals, data integrity.
 * Same sandbox harness as tests/masters-test.js: no JSON, Array, Date or
 * RegExp globals, so the data and scorer must not reach for them. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const s={window:{},Math,console,parseFloat,parseInt,isNaN,Object,Infinity,String,Number};
vm.createContext(s);
for(const f of ['data/it-model.js','data/it-evidence.js','js/score-it.js'])
  vm.runInContext(fs.readFileSync(path.join(APP,f),'utf8'),s,{filename:f});
const S=s.window.IT_SCORE, M=s.window.IT_MODEL;

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* A maximal computing applicant: first-class CS degree from a strong place,
 * every prerequisite, research output, experience, the lot. */
const strong={
  gradeScale:'sc_uk', gradeBand:'gb_top5', institution:'inst_global',
  degreeField:'fld_cs', bachelorLength:'bl_4',
  cv_algo:true, cv_discrete:true, cv_prog:true, cv_systems:true, cv_theory:true,
  cv_db:true, cv_net:true, cv_se:true,
  csEcts:'ce_max', programming:'pr_prof',
  mv_linalg:true, mv_prob:true, mv_calc:true, mv_proof:true, mv_opt:true,
  mathsEcts:'me_max',
  research:'rs_top1', projects:'pj_major', competitive:'cp_icpc',
  workMonths:'wm_36', workKind:'wk_eng_top',
  references:'rf_two_acad', statement:'st_strong',
  english:'en_native', round:'rd_early'
};
function with_(over){ return Object.assign({},strong,over); }

/* ------------------------------------------------------------ bounds --- */
t('empty profile scores 0 and does not throw', S.score({},'cs').total===0);
t('maximal profile stays within 100', S.score(strong,'cs').total<=100, S.score(strong,'cs').total);
t('maximal profile scores highly', S.score(strong,'cs').total>=90, S.score(strong,'cs').total);
['cs','dsai','conversion'].forEach(tr=>{
  const v=S.score(strong,tr).total;
  t('score in range for track '+tr, v>=0&&v<=100, v);
});

/* ------------------------------------------------------------- gates --- */
function row(a,trackId,id){ return S.evaluate(a,trackId).rows.filter(r=>r.school.id===id)[0]; }

t('first-class gate blocks a median applicant at Oxford',
  row(with_({gradeBand:'gb_mid'}),'cs','oxford-acs').verdict.label==='Ineligible');
t('a top-5% applicant is not blocked at Oxford',
  row(strong,'cs','oxford-acs').verdict.label!=='Ineligible');

t('csDegreeRequired blocks a humanities graduate at Imperial',
  row(with_({degreeField:'fld_other',csEcts:'ce_0'}),'cs','imperial-advcomp').verdict.label==='Ineligible');
t('a maths graduate with computing credit gets a warning, not a bar',
  (()=>{const r=row(with_({degreeField:'fld_maths'}),'cs','imperial-advcomp');
        return r.verdict.label!=='Ineligible'&&r.gates.warnings.length>0;})());

/* The inverting gate — the one rule here that a stronger profile makes worse. */
t('noCsDegree blocks a computing graduate from a conversion MSc',
  row(strong,'conversion','ucl-cs-conv').verdict.label==='Ineligible');
t('the same applicant without a computing degree is not blocked',
  row(with_({degreeField:'fld_life',csEcts:'ce_0'}),'conversion','ucl-cs-conv').verdict.label!=='Ineligible');
t('heavy computing credit warns even without a computing degree',
  row(with_({degreeField:'fld_life',csEcts:'ce_max'}),'conversion','ucl-cs-conv').gates.warnings.length>0);

t('minMathsEcts blocks a thin-maths applicant at Edinburgh AI',
  row(with_({mathsEcts:'me_0'}),'dsai','edinburgh-ai').verdict.label==='Ineligible');
t('minModules blocks when the named modules are missing at TU Delft',
  row(with_({cv_algo:false,cv_discrete:false,cv_theory:false,cv_systems:false,cv_net:false}),'cs','tudelft-cs')
    .verdict.label==='Ineligible');
t('minEnglish blocks below the stated band at Cambridge',
  row(with_({english:'en_b2'}),'cs','cambridge-acs').verdict.label==='Ineligible');

/* A maximal applicant — every module, every credit, top of the cohort — must be
 * blocked by nothing, on any track. This catches gates that are unsatisfiable or
 * that look for their modules in the wrong place; both bugs existed and both hid
 * from targeted per-gate tests. */
['cs','dsai','conversion'].forEach(tr=>{
  const rows=S.evaluate(tr==='conversion'?with_({degreeField:'fld_life',csEcts:'ce_0'}):strong,tr).rows;
  const stuck=rows.filter(r=>!r.eligible);
  t('nothing blocks a maximal applicant on '+tr,
    stuck.length===0,
    stuck.map(r=>r.school.id+': '+r.gates.failures.map(f=>f.label).join('; ')).join(' | '));
});

/* A rule that names fewer modules than it demands can never be satisfied. */
t('no minModules gate demands more modules than it names',
  M.schools.every(x=>(x.gates||[]).every(gt=>
    gt.type!=='minModules'||(gt.modules||[]).length>=gt.value)),
  (()=>{for(const x of M.schools) for(const gt of (x.gates||[]))
    if(gt.type==='minModules'&&(gt.modules||[]).length<gt.value)
      return x.id+' wants '+gt.value+' of '+(gt.modules||[]).length; })());

/* ------------------------------------------------------- gate/score --- */
t('a blocked school still carries a score and a band',
  (()=>{const r=row(with_({english:'en_b2'}),'cs','cambridge-acs');
        return r.verdict.label==='Ineligible'&&r.adjusted>0&&!!r.band.label;})());

/* ------------------------------------------------------------ timing --- */
t('gathered field costs nothing in the middle of the cycle',
  row(with_({round:'rd_mid'}),'dsai','edinburgh-ai').roundMod===0);
t('gathered field costs the late applicant',
  row(with_({round:'rd_late'}),'dsai','edinburgh-ai').roundMod<0);
t('a single-deadline school is indifferent to timing',
  row(with_({round:'rd_late'}),'cs','eth-cs').roundMod===0);
t('rolling admission penalises the late applicant most',
  row(with_({round:'rd_late'}),'cs','imperial-advcomp').roundMod<=-5);

/* ----------------------------------------------------------- profiles --- */
['cs','dsai','conversion'].forEach(tr=>{
  const base=M.tracks[tr].weights;
  const total=Object.keys(base).reduce((a,k)=>a+base[k],0);
  Object.keys(M.profiles).forEach(p=>{
    const w=S.profileWeights(tr,p);
    const sum=Object.keys(w).reduce((a,k)=>a+w[k],0);
    t('profile '+p+' renormalises to the track total on '+tr, Math.abs(sum-total)<0.001, sum);
  });
});
t('an unknown profile falls back rather than throwing',
  S.score(strong,'cs','no-such-profile').total===S.score(strong,'cs','balanced').total);
t('balanced equals the unmodified track weighting',
  S.score(strong,'cs','balanced').total===S.score(strong,'cs').total);

/* A lopsided applicant should be read differently by different schools —
 * that is the entire point of having profiles. */
const bookish=with_({research:'rs_none',projects:'pj_none',competitive:'cp_none',
                     workMonths:'wm_0',workKind:null,statement:'st_weak',references:'rf_acad_weak'});
t('a transcript-only applicant scores higher under transcript than research',
  S.score(bookish,'cs','transcript').total>S.score(bookish,'cs','research').total,
  S.score(bookish,'cs','transcript').total+' vs '+S.score(bookish,'cs','research').total);

/* ----------------------------------------------------- data integrity --- */
t('every school names a defined profile',
  M.schools.every(x=>!!M.profiles[x.profile]),
  (M.schools.filter(x=>!M.profiles[x.profile])[0]||{}).id);
t('every school names a defined regime',
  M.schools.every(x=>!!M.regimes[x.regime]));
t('every school says what its profile assignment rests on',
  M.schools.every(x=>typeof x.because==='string'&&x.because.length>20));
t('every profile defined is actually used',
  Object.keys(M.profiles).filter(p=>p!=='balanced')
    .every(p=>M.schools.some(x=>x.profile===p)),
  Object.keys(M.profiles).filter(p=>p!=='balanced'&&!M.schools.some(x=>x.profile===p)).join(','));
t('every school belongs to at least one defined track',
  M.schools.every(x=>x.tracks.length>0&&x.tracks.every(tr=>!!M.tracks[tr])));
t('strong sits above threshold everywhere',
  M.schools.every(x=>x.strong>x.threshold));
t('every fact carries a source tag',
  M.schools.every(x=>x.facts.every(f=>typeof f.src==='string'&&f.src.length>0)),
  (M.schools.filter(x=>x.facts.some(f=>!f.src))[0]||{}).id);
t('every gate carries a source tag and a label',
  M.schools.every(x=>(x.gates||[]).every(gt=>!!gt.src&&!!gt.label)));
const TAGS=['OFF','OFF2','FOI','TP','GC','NP','CAL'];
t('every source tag is one of the declared vocabulary',
  M.schools.every(x=>x.facts.every(f=>TAGS.indexOf(f.src)>-1)),
  (()=>{for(const x of M.schools) for(const f of x.facts) if(TAGS.indexOf(f.src)<0) return x.id+':'+f.src;})());
t('every school id is unique',
  new Set(M.schools.map(x=>x.id)).size===M.schools.length);
t('option ids are unique across every step',
  (()=>{const seen={};let ok=true;
    M.steps.forEach(st=>st.groups.forEach(gp=>(gp.options||[]).forEach(o=>{
      if(seen[o.id]) ok=false; seen[o.id]=1; })));
    return ok;})());
t('every gate type is one the scorer handles',
  (()=>{const known=['minDegreeClass','csDegreeRequired','noCsDegree','minModules','minCsEcts',
    'minMathsEcts','minWorkMonths','bachelorLength','minEnglish','testRequired','testMinGreQ'];
    for(const x of M.schools) for(const gt of (x.gates||[]))
      if(known.indexOf(gt.type)<0) return false;
    return true;})());
t('every minModules gate names modules that exist',
  (()=>{const ids={};
    M.steps.forEach(st=>st.groups.forEach(gp=>(gp.options||[]).forEach(o=>{ids[o.id]=1;})));
    for(const x of M.schools) for(const gt of (x.gates||[]))
      if(gt.type==='minModules') for(const m of (gt.modules||[])) if(!ids[m]) return false;
    return true;})());
t('excluded programmes each say why',
  M.excluded.every(x=>typeof x.why==='string'&&x.why.length>40));

/* ----------------------------------------------- the honesty invariant --- */
/* The rule the whole evidence design rests on: no school may claim a
 * per-school applicant grade distribution below the sample-size bar. */
const EV=s.window.IT_EVIDENCE;
if(EV){
  t('no school claims a grade distribution below the report bar',
    Object.keys(EV.schools).every(k=>!EV.schools[k].gpa||EV.schools[k].n>=EV.minGpaN),
    Object.keys(EV.schools).filter(k=>EV.schools[k].gpa&&EV.schools[k].n<EV.minGpaN).join(','));
  /* The bar that actually protects the median: how many ACCEPTED applicants'
   * grades it rests on. Oxford clears the first bar and fails this one. */
  t('no grade distribution rests on too few accepted grades',
    Object.keys(EV.schools).every(k=>!EV.schools[k].gpa||EV.schools[k].gpa.accN>=EV.minAcceptedGpaN),
    Object.keys(EV.schools).filter(k=>EV.schools[k].gpa&&EV.schools[k].gpa.accN<EV.minAcceptedGpaN).join(','));
  t('pooled tier figures clear the same bars',
    Object.keys(EV.tiers).every(k=>!EV.tiers[k].gpa||
      (EV.tiers[k].n>=EV.minGpaN&&EV.tiers[k].gpa.accN>=EV.minAcceptedGpaN)));
  t('every school with a tier names one that exists',
    Object.keys(EV.schools).every(k=>!EV.schools[k].tier||!!EV.tiers[EV.schools[k].tier]));
  t('every evidence key matches a real school id',
    Object.keys(EV.schools).every(k=>M.schools.some(x=>x.id===k)),
    Object.keys(EV.schools).filter(k=>!M.schools.some(x=>x.id===k)).join(','));
} else {
  console.log('SKIP  evidence assertions — data/it-evidence.js not built yet');
}

/* ---------------------------------------------------- counterfactuals --- */
const weak={gradeScale:'sc_uk',gradeBand:'gb_top50',institution:'inst_solid',
  degreeField:'fld_cs',bachelorLength:'bl_3',cv_algo:true,cv_prog:true,
  csEcts:'ce_60',programming:'pr_ok',mv_linalg:true,mathsEcts:'me_15',
  research:'rs_none',projects:'pj_course',competitive:'cp_none',
  workMonths:'wm_6',workKind:'wk_eng',references:'rf_acad_weak',
  statement:'st_ok',english:'en_c1h',round:'rd_early'};

const imps=S.improvements(weak,'cs');
t('improvements are offered for an improvable profile', imps.length>0);
t('improvements never suggest changing a fixed answer',
  imps.every(i=>M.fixedGroups.indexOf(i.groupId)===-1),
  imps.filter(i=>M.fixedGroups.indexOf(i.groupId)>-1).map(i=>i.groupId).join(','));
t('improvements never suggest applying at a different time',
  imps.every(i=>i.groupId!=='round'));
t('improvements are sorted by gain, descending',
  imps.every((x,i)=>i===0||imps[i-1].gain>=x.gain));
t('every claimed gain recomputes exactly',
  (()=>{const base=S.score(weak,'cs').total;
    for(const i of imps){
      const grp=(()=>{let g=null;M.steps.forEach(st=>st.groups.forEach(x=>{if(x.id===i.groupId)g=x;}));return g;})();
      const o=grp.options.filter(o=>o.label===i.optionLabel)[0];
      const trial=Object.assign({},weak);
      if(grp.type==='radio') trial[grp.id]=o.id; else trial[o.id]=true;
      const got=Math.round((S.score(trial,'cs').total-base)*10)/10;
      if(Math.abs(got-i.gain)>0.051) return false;
    }
    return true;})());
t('prerequisite modules are suggestable — the advice that matters at an audited school',
  S.improvements(weak,'cs','prereq').some(i=>i.groupId==='core'||i.groupId==='mathsCore'));

/* Advice must be computed under the school's own weighting, or it is wrong
 * advice: telling a TU Delft applicant to publish a paper would be useless. */
t('per-school advice differs by profile',
  JSON.stringify(S.improvements(weak,'cs','research').map(i=>i.groupId))!==
  JSON.stringify(S.improvements(weak,'cs','prereq').map(i=>i.groupId)));

/* ------------------------------------------------------ completeness --- */
t('completeness is 0 for an empty form', S.completeness({})===0);
t('completeness is 100 for a full one', S.completeness(strong)===100, S.completeness(strong));

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

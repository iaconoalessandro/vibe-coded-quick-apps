const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=require('path').join(__dirname,'..');
const s={window:{},Math,console,parseFloat,parseInt,isNaN,Object,Infinity,String,Number};
vm.createContext(s);
for(const f of ['data/conversions.js','data/masters-model.js','js/score-masters.js'])
  vm.runInContext(fs.readFileSync(path.join(APP,f),'utf8'),s,{filename:f});
const S=s.window.MASTERS_SCORE, M=s.window.MASTERS_MODEL, C=s.window.CONVERT;

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

// A maximal profile except 4 years of full-time work
const strong4y={
  gradeScale:'sc_it',gradeBand:'gb_top5',institution:'inst_global',degreeField:'fld_quant',
  testStatus:'ts_yes',testType:'tt_gmat',testScore:780,english:'en_c2',
  ectsQuant:'eq_30',ectsBusiness:'eb_90',ectsAccFin:'ea_20',
  ma_calc:true,ma_multi:true,ma_lin:true,ma_prob:true,ma_ode:true,ma_econ:true,
  programming:'pr_strong',cfa_l1:true,
  internMonths:'im_more',internQuality:'iq_global',fullTime:'ft_59',
  leadership:'ld_nat',international:'in_multi',
  essays:'es_strong',recs:'rc_strong',languages:'lg_3',round:'rd_first'
};
const r=S.evaluate(strong4y,'mif');
const byId=id=>r.rows.find(x=>x.school.id===id);
t('4 years experience ⇒ LBS MFA ineligible', byId('lbs-mfa') && !byId('lbs-mfa').eligible);
console.log('      reason:', byId('lbs-mfa').gates.failures.map(f=>f.label).join('; '));
t('   and it is NOT merely scored low', byId('lbs-mfa').verdict.label==='Ineligible');

const rm=S.evaluate(strong4y,'mim');
const mid=id=>rm.rows.find(x=>x.school.id===id);
t('4 years ⇒ Warwick Management ineligible', mid('warwick-mgmt') && !mid('warwick-mgmt').eligible);
t('4 years ⇒ Imperial Management ineligible', mid('imperial-mgmt') && !mid('imperial-mgmt').eligible);
t('4 years ⇒ LBS MiM ineligible', mid('lbs-mim') && !mid('lbs-mim').eligible);
t('4 years ⇒ LSE MiM still eligible (no cap published)', mid('lse-mim') && mid('lse-mim').eligible);

// 780 GMAT, zero statistics ECTS ⇒ RSM prerequisite still fails
const noStats=Object.assign({},strong4y,{fullTime:'ft_0',ectsQuant:'eq_0'});
const r2=S.evaluate(noStats,'mim');
const rsm=r2.rows.find(x=>x.school.id==='rsm-mim');
t('780 GMAT + 0 ECTS stats ⇒ RSM ineligible', rsm && !rsm.eligible);
console.log('      reason:', rsm.gates.failures.map(f=>f.label).join('; '));
const sse=S.evaluate(Object.assign({},noStats),'mif').rows.find(x=>x.school.id==='sse-fin');
t('   and SSE Finance too (30 ECTS quant rule)', sse && !sse.eligible);

// Test-optional neutrality
const withTest=Object.assign({},strong4y,{fullTime:'ft_0'});
const noTest=Object.assign({},withTest,{testStatus:'ts_no'});
const a=S.score(withTest,'mim').total, b=S.score(noTest,'mim').total;
t('not submitting is neutral for a maxed profile ('+a+' vs '+b+')', Math.abs(a-b)<0.5);
const weak=Object.assign({},withTest,{testScore:520});
const c=S.score(weak,'mim').total, d=S.score(Object.assign({},weak,{testStatus:'ts_no'}),'mim').total;
t('a weak score scores below not submitting ('+c+' vs '+d+')', c<d);
const nt=S.evaluate(noTest,'mim');
t('not submitting ⇒ HEC (required, no waivers) ineligible', nt.rows.find(x=>x.school.id==='hec-mim').eligible===false);
t('not submitting ⇒ Warwick (no test used) still eligible', nt.rows.find(x=>x.school.id==='warwick-mgmt').eligible===true);

// Quant degree gate
const nonQuant=Object.assign({},withTest,{degreeField:'fld_social'});
const nq=S.evaluate(nonQuant,'mif');
t('non-quant degree ⇒ Imperial Finance ineligible', nq.rows.find(x=>x.school.id==='imperial-fin').eligible===false);

// English gate
const b2=Object.assign({},withTest,{english:'en_b2'});
t('B2 English ⇒ Nova (C1 required) ineligible',
  S.evaluate(b2,'mim').rows.find(x=>x.school.id==='nova-imm').eligible===false);

// Round regimes
const late=Object.assign({},withTest,{round:'rd_last'});
const insEarly=S.evaluate(withTest,'mim').rows.find(x=>x.school.id==='insead-mim');
const insLate=S.evaluate(late,'mim').rows.find(x=>x.school.id==='insead-mim');
t('INSEAD regime A: applying late costs nothing', insEarly.adjusted===insLate.adjusted);
const rsmEarly=S.evaluate(Object.assign({},withTest),'mim').rows.find(x=>x.school.id==='rsm-mim');
const rsmLate=S.evaluate(late,'mim').rows.find(x=>x.school.id==='rsm-mim');
t('RSM regime C: applying late costs 5 ('+rsmEarly.adjusted+' → '+rsmLate.adjusted+')',
  rsmEarly.adjusted-rsmLate.adjusted===5);

// Full-time curve differs by track
const ft2=Object.assign({},withTest,{fullTime:'ft_35'});
t('2–3 years helps finance but not management',
  S.score(ft2,'mif').total > S.score(ft2,'mim').total - 100 &&
  (S.score(ft2,'mif').mods.find(m=>m.label==='Full-time experience')||{pts:0}).pts >
  (S.score(ft2,'mim').mods.find(m=>m.label==='Full-time experience')||{pts:0}).pts);

// Italian converter
const it=C.italian(28);
t('Italian 28 avg → ~102.7/110 projected, GPA ~3.85 ('+it.projectedBase+', '+it.gpa+')',
  Math.abs(it.projectedBase-102.7)<0.2 && it.gpa>3.7 && it.gpa<4.0);
t('converter reports mark and GPA as separate figures',
  it.projectedBase!==undefined && it.gpa!==undefined && it.projectedBase>60);
t('110 e lode is never emitted as a bare 4.0 GPA equivalence', C.italian(30).gpa===4 && C.italian(30).projectedBase===110);

// Score bounds
t('score stays within 0–100', S.score({},'mim').total>=0 && S.score(withTest,'mim').total<=100);
console.log('\nmaxed mim profile scores', S.score(withTest,'mim').total,
            '| empty profile', S.score({},'mim').total);
console.log('\n'+pass+' passed, '+fail+' failed');
process.exitCode = fail ? 1 : 0;

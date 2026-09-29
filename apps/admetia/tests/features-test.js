const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const s={window:{},Math,console,parseFloat,parseInt,isNaN,Object,Infinity,String,Number};
s.window.MBA_COMPANIES=[];
vm.createContext(s);
for(const f of ['data/conversions.js','data/masters-model.js','js/score-masters.js','data/mba-model.js','js/score-mba.js'])
  vm.runInContext(fs.readFileSync(path.join(APP,f),'utf8'),s,{filename:f});
const MS=s.window.MASTERS_SCORE, MM=s.window.MASTERS_MODEL, C=s.window.CONVERT, BS=s.window.MBA_SCORE;
let pass=0,fail=0;
const t=(l,c,e)=>{ c?(pass++,console.log('PASS  '+l)):(fail++,console.log('FAIL  '+l+(e?' → '+e:''))); };

// --- mid-strength profile, no test ---
const p={gradeScale:'sc_it',gradeBand:'gb_top25',institution:'inst_solid',degreeField:'fld_econ',
 testStatus:'ts_no',english:'en_c1',ectsQuant:'eq_19',ectsBusiness:'eb_59',ectsAccFin:'ea_9',
 ma_calc:true,ma_prob:true,programming:'pr_basic',internMonths:'im_6',internQuality:'iq_national',
 fullTime:'ft_11',leadership:'ld_member',international:'in_exch',essays:'es_medium',
 recs:'rc_medium',languages:'lg_2',round:'rd_mid'};
const r=MS.evaluate(p,'mif');
console.log('\n  score (no test):', r.score.total);

t('improvements never suggest a fixed factor',
  r.improvements.every(i=>!['gradeBand','institution','degreeField','gradeScale'].includes(i.groupId)),
  JSON.stringify(r.improvements.map(i=>i.groupId)));
t('improvements never suggest changing work experience or round',
  r.improvements.every(i=>!['fullTime','round'].includes(i.groupId)));
t('improvements are sorted by gain, descending',
  r.improvements.every((x,i,arr)=>i===0||arr[i-1].gain>=x.gain));
console.log('  top improvements:', r.improvements.slice(0,3).map(i=>i.groupLabel+' +'+i.gain).join(', '));

// --- break-even test advice ---
t('break-even percentile computed when not submitting', r.breakEven && r.breakEven.percentile>0,
  JSON.stringify(r.breakEven));
console.log('  break-even:', JSON.stringify(r.breakEven));
const be=r.breakEven.percentile;
t('submitting just below break-even lowers the score',
  MS.score(p,'mif',be-6).total < MS.score(p,'mif').total);
t('submitting just above break-even raises it',
  MS.score(p,'mif',be+6).total > MS.score(p,'mif').total);

// --- minimum test to reach a school ---
const mid=Object.assign({},p,{gradeBand:'gb_top10',institution:'inst_target',essays:'es_strong',internMonths:'im_12',leadership:'ld_lead'});
const rmid=MS.evaluate(mid,'mif');
const short=rmid.rows.find(x=>x.gap>0 && x.minTest);
t('a short school reports the test score that would close the gap', !!short, 'none found');
if(short){
  console.log('  '+short.school.name+': gap '+short.gap+', needs ~GMAT '+short.minTest.gmat+' (p'+short.minTest.percentile+')');
  /* Including the deduction for landing below this school's usual range. */
  const at=pct=>MS.score(mid,'mif',pct,short.school.profile).total + short.roundMod +
    MS.rangePenalty(C.fromPercentile('gmat',pct), short.school.est).pts;
  t('  that score actually reaches the threshold', at(short.minTest.percentile) >= short.school.threshold - 0.15);
  t('  one percentile lower does not', at(short.minTest.percentile-2) < short.school.threshold);
}

// --- scores far below a school's usual range ---
const hec=MM.schools.find(x=>x.id==='hec-mim');
t('a score inside the school\'s middle range costs nothing', MS.rangePenalty(690,hec.est).pts===0);
t('one SD below costs little, three SDs below costs a lot',
  MS.rangePenalty(650,hec.est).pts>-2 && MS.rangePenalty(600,hec.est).pts<-5, MS.rangePenalty(650,hec.est).pts+' / '+MS.rangePenalty(600,hec.est).pts);
t('the deduction is capped', MS.rangePenalty(400,hec.est).pts===-12);
const maxed={gradeScale:'sc_it',gradeBand:'gb_top5',institution:'inst_global',degreeField:'fld_quant',
  english:'en_c2',ectsQuant:'eq_30',ectsBusiness:'eb_90',ectsAccFin:'ea_20',ma_calc:true,ma_multi:true,ma_lin:true,ma_prob:true,
  programming:'pr_strong',internMonths:'im_more',internQuality:'iq_global',fullTime:'ft_0',leadership:'ld_nat',
  international:'in_multi',essays:'es_strong',recs:'rc_strong',languages:'lg_3',round:'rd_first',
  testStatus:'ts_yes',testType:'tt_gmat',testScore:550};
const hec550=MS.evaluate(maxed,'mim').rows.find(x=>x.school.id==='hec-mim');
t('a perfect file with a 550 is no longer Strong at HEC', hec550.verdict.label!=='Strong', hec550.verdict.label+' '+hec550.adjusted);
const noScore=MS.evaluate(Object.assign({},maxed,{testStatus:'ts_no'}),'mim').rows.find(x=>x.school.id==='nova-imm');
t('not submitting carries no deduction', noScore.rangeMod===0);

// --- Bocconi: test 44, grades 36 (55:45), motivation 10, internships 10 ---
['mim','mif','marketing'].forEach(tr=>{
  const e=MS.emphasis(tr,'ranked'), w=k=>e.find(x=>x.key===k).weight;
  t('Bocconi '+tr+': test 44, grades 36, essays 10, internships 10, nothing else',
    w('test')===44 && w('academic')===36 && w('essays')===10 && w('internship')===10 &&
    e.filter(x=>['test','academic','essays','internship'].indexOf(x.key)<0).every(x=>x.weight===0));
});

// --- audit fixes, September 2026 ---
const rowOf=(a,tr,id)=>MS.evaluate(a,tr).rows.find(x=>x.school.id===id);
const late=Object.assign({},maxed,{testScore:720,round:'rd_last'});
t('LSE is rolling: applying late now costs points', rowOf(late,'mim','lse-mim').roundMod<0);
t('HEC: only the final round costs points',
  rowOf(Object.assign({},late,{round:'rd_mid'}),'mim','hec-mim').roundMod===0 && rowOf(late,'mim','hec-mim').roundMod<0);
const gre=Object.assign({},maxed,{testType:'tt_gre',testScore:330,greQuant:168});
t('WU Vienna rejects a GRE score', rowOf(gre,'mim','wu-simc').eligible===false);
t('WU Vienna needs C1 English', rowOf(Object.assign({},maxed,{testScore:720,english:'en_b2'}),'mim','wu-simc').eligible===false);
t('Nova Finance needs 12 weeks of experience',
  rowOf(Object.assign({},maxed,{testScore:720,internMonths:'im_0',fullTime:'ft_0'}),'mif','nova-imf').eligible===false &&
  rowOf(Object.assign({},maxed,{testScore:720,internMonths:'im_6',fullTime:'ft_0'}),'mif','nova-imf').eligible===true);
const rsm=rowOf(Object.assign({},maxed,{testScore:620,essays:'es_weak'}),'mim','rsm-mim');
t('RSM: meeting the requirements is the verdict', rsm.eligible && rsm.verdict.label==='Meets the requirements', rsm.verdict.label);
t('RSM: a late application only qualifies if places remain',
  rowOf(Object.assign({},maxed,{testScore:620,round:'rd_last'}),'mim','rsm-mim').verdict.tone==='mid');
t('RSM: 10–19 EC of research methods is no longer enough',
  rowOf(Object.assign({},maxed,{testScore:720,ectsQuant:'eq_19'}),'mim','rsm-mim').eligible===false);

// --- programmes added 30 September 2026 ---
{
  const e=MS.emphasis('mif','split'), w=k=>e.find(x=>x.key===k).weight;
  t('St. Gallen MBF: grades 30, test 30, letter 25 — the split its admission page publishes',
    w('academic')===30 && w('test')===30 && w('essays')===25 && w('institution')===0);
}
const noTest=Object.assign({},maxed,{testStatus:'ts_no'});
t('Mannheim: a missing test scores nothing rather than being rescaled away',
  MS.score(noTest,'mim',undefined,'points').total < MS.score(maxed,'mim',95,'points').total - 25 &&
  !MS.score(noTest,'mim',undefined,'points').testDropped);
t('  while elsewhere not submitting still rescales',
  MS.score(noTest,'mim',undefined,'balanced').testDropped);
t('TUM Master in Management turns away an economics graduate',
  rowOf(Object.assign({},maxed,{testScore:720,degreeField:'fld_econ'}),'mim','tum-mim').eligible===false &&
  rowOf(Object.assign({},maxed,{testScore:720}),'mim','tum-mim').eligible===true);
t('Mannheim\'s MMM is scored on both the management and the marketing tracks',
  !!rowOf(maxed,'mim','mannheim-mmm') && !!rowOf(maxed,'marketing','mannheim-mmm'));
t('ESCP Marketing & Creativity needs 18 months, internships included',
  rowOf(Object.assign({},maxed,{testScore:720,internMonths:'im_12',fullTime:'ft_0'}),'marketing','escp-mkt').eligible===false &&
  rowOf(Object.assign({},maxed,{testScore:720,internMonths:'im_more',fullTime:'ft_11'}),'marketing','escp-mkt').eligible===true);

// --- ineligible schools still get a score and band ---
const strong4y=Object.assign({},p,{fullTime:'ft_59',gradeBand:'gb_top5',institution:'inst_global',
  testStatus:'ts_yes',testType:'tt_gmat',testScore:750,ectsQuant:'eq_30',essays:'es_strong'});
const r2=MS.evaluate(strong4y,'mif');
const lbs=r2.rows.find(x=>x.school.id==='lbs-mfa');
t('blocked school still carries a numeric score', lbs && lbs.adjusted>0, JSON.stringify(lbs&&lbs.adjusted));
t('blocked school still carries a band', lbs && ['Strong','Competitive','Possible','Stretch'].includes(lbs.band.label));
t('but its headline verdict stays Ineligible', lbs.verdict.label==='Ineligible');
console.log('  LBS MFA blocked: score '+lbs.adjusted+' / '+lbs.school.threshold+' → band "'+lbs.band.label+'"');

// --- estimated distributions ---
const withEst=MM.schools.filter(x=>x.est);
t('most schools carry an estimated GMAT distribution', withEst.length>=35, withEst.length+' of '+MM.schools.length);
t('schools that use no test and publish nothing carry no estimate',
  ['warwick-mgmt','manchester-mgmt','cbs-mgmt','warwick-fin','manchester-fin','warwick-mkt','manchester-mkt']
    .every(id=>MM.schools.find(x=>x.id===id).est===null));
t('Princeton keeps an estimate despite requiring no test (it publishes a GRE median)',
  MM.schools.find(x=>x.id==='princeton-mfin').est.basis==='published');
t('every estimate states its basis', withEst.every(x=>x.est.basis&&x.est.from&&x.est.sd>0));
t('published-basis estimates match the published figure',
  MM.schools.find(x=>x.id==='hec-mim').est.median===710 &&
  MM.schools.find(x=>x.id==='imperial-mgmt').est.median===653);
const z=C.zAgainst(750, MM.schools.find(x=>x.id==='lbs-mfa').est);
t('z-score against an estimate is sane (750 vs LBS MFA ~700/35 → +1.43)', Math.abs(z-1.4286)<0.01, z);
t('fromPercentile inverts percentile', Math.abs(C.percentile('gmat', C.fromPercentile('gmat',75))-75)<1.5);

// --- MBA counterfactuals ---
const weak={age:'ag_32',gender:'gd_male',gpa:'gp_30',gmat:'gm_650',undergrad:'ug_other',
 essays:'es_weak',recs:'rc_weak',resume:'rs_weak',round:'rd_last',
 workExp:'we_36',community:'cs_none',origin:'or_india'};
const imp=BS.improvements(weak,'published');
t('MBA improvements only suggest changeable things',
  imp.every(i=>['essays','recs','resume','round','community','gmat'].includes(i.groupId)),
  JSON.stringify(imp.map(i=>i.groupId)));
t('MBA test advice is the next band up, not a perfect score',
  (imp.find(i=>i.groupId==='gmat')||{}).optionLabel==='retake and reach 670',
  JSON.stringify((imp.find(i=>i.groupId==='gmat')||{}).optionLabel));
console.log('  MBA top fixes:', imp.slice(0,4).map(i=>i.groupLabel+' +'+i.gain).join(', '));
const base=BS.score(weak,'published').base;
const applied=Object.assign({},weak,{essays:'es_strong'});
t('claimed gain matches an actual recomputation',
  Math.abs((BS.score(applied,'published').base-base) - imp.find(i=>i.groupId==='essays').gain) < 0.05);
const pth=BS.pathTo(20, imp);
t('pathTo accumulates until the gap is closed', pth.total>=20 || !pth.reached);
console.log('\n'+pass+' passed, '+fail+' failed');
process.exitCode = fail ? 1 : 0;

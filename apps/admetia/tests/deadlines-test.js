/* Application calendar (data/deadlines.js) and the date logic in
 * js/results-kit.js that turns it into countdowns. Unlike the scorer suites
 * this one runs with Date and RegExp available: the calendar is dates. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const s={window:{},Math,console,parseFloat,parseInt,isNaN,Object,Infinity,String,Number,Date,RegExp,Array,JSON};
vm.createContext(s);
for(const f of ['data/masters-model.js','data/it-model.js','data/mba-model.js','data/deadlines.js'])
  vm.runInContext(fs.readFileSync(path.join(APP,f),'utf8'),s,{filename:f});
/* results-kit.js only needs Wizard.el at load time; nothing here draws. */
s.window.Wizard={el:()=>({})};
s.Wizard=s.window.Wizard;
vm.runInContext(fs.readFileSync(path.join(APP,'js/results-kit.js'),'utf8'),s,{filename:'js/results-kit.js'});

const CAL=s.window.ADMISSIONS_CALENDAR, K=s.window.ResultsKit;
const MM=s.window.MASTERS_MODEL, IT=s.window.IT_MODEL, MBA=s.window.MBA_MODEL;

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* ------------------------------------------------------------ coverage --- */
const keys=[...MM.schools.map(x=>x.id),...IT.schools.map(x=>x.id),
  ...MBA.generalSchools.map(x=>'mba:'+x.name),...MBA.adjustedSchools.map(x=>'mba:'+x.name)];
const missing=keys.filter(k=>!CAL.schools[k]);
t('every scored programme has an entry, even if only a link',missing.length===0,missing.join(', '));
const orphans=Object.keys(CAL.schools).filter(k=>keys.indexOf(k)<0);
t('every calendar key names a programme a model scores',orphans.length===0,orphans.join(', '));

/* --------------------------------------------------------------- shape --- */
const E=Object.entries(CAL.schools);
t('every link is https',E.every(([,e])=>/^https:\/\/[^\s]+$/.test(e.url)),
  E.filter(([,e])=>!/^https:\/\//.test(e.url)).map(([k])=>k).join(', '));
const ISO=/^\d{4}-\d{2}-\d{2}$/;
const badDate=E.filter(([,e])=>(e.rounds||[]).some(r=>!ISO.test(r[1])||isNaN(new Date(r[1]))));
t('every deadline is a real YYYY-MM-DD date',badDate.length===0,badDate.map(([k])=>k).join(', '));
const unordered=E.filter(([,e])=>(e.rounds||[]).some((r,i,a)=>i>0&&a[i-1][1]>=r[1]));
t('rounds are listed in date order, no two on the same day',unordered.length===0,unordered.map(([k])=>k).join(', '));
const TAGS=['OFF','OFF2','TP'];
const unsourced=E.filter(([,e])=>(e.rounds||e.rolling)&&TAGS.indexOf(e.src)<0);
t('every date and every rolling claim carries a source tag',unsourced.length===0,unsourced.map(([k])=>k).join(', '));
const labelled=E.every(([,e])=>(e.rounds||[]).every(r=>typeof r[0]==='string'&&r[0].length>0));
t('every round has a label',labelled);
/* Read on 23 September 2026 for the 2026–27 cycle: nothing may be older
 * than the start of that cycle, nor further out than its end. */
const outside=E.filter(([,e])=>(e.rounds||[]).some(r=>r[1]<'2026-08-01'||r[1]>'2027-07-31'));
t('every date falls inside the 2026–27 cycle',outside.length===0,outside.map(([k])=>k).join(', '));
t('the calendar says when it was read',ISO.test(CAL.checked));

/* ---------------------------------------------------------- countdowns --- */
const at=(iso)=>{ const p=iso.split('-'); return new Date(+p[0],+p[1]-1,+p[2],15,30); };
let c=K.calendar('mba:Harvard',at('2026-09-01'));
t('before round 1, round 1 is next',c.next.label==='Round 1'&&c.next.days===8,JSON.stringify(c.next));
c=K.calendar('mba:Harvard',at('2026-09-09'));
t('on the deadline day it is still open, at 0 days',c.next.label==='Round 1'&&c.next.days===0);
c=K.calendar('mba:Harvard',at('2026-09-10'));
t('the day after, the next round takes over',c.next.label==='Round 2'&&!c.after);
c=K.calendar('mba:Harvard',at('2027-02-01'));
t('after the last round the cycle reads as passed',!c.next&&c.passed);
c=K.calendar('lse-mim',at('2026-10-01'));
t('a rolling programme has no countdown and is not "passed"',c.rolling&&!c.next&&!c.passed);
c=K.calendar('lbs-mim',at('2026-10-01'));
t('a link-only programme has no countdown',!c.next&&!c.passed&&!c.rolling&&/^https:/.test(c.url));
c=K.calendar('hec-mim',at('2026-09-23'));
t('the following round is offered alongside the next',c.after&&c.after.label==='Round 2');
t('an unknown key has no calendar',K.calendar('nope',at('2026-09-23'))===null);
/* Daylight saving: late March and late October must not shift a day. */
c=K.calendar('bocconi-mgmt',at('2026-10-24'));
t('a countdown across the October clock change counts whole days',c.next.days===5,String(c.next.days));
c=K.calendar('bocconi-mgmt',at('2027-03-27'));
t('a countdown across the March clock change counts whole days',c.next.days===33,String(c.next.days));

/* --------------------------------------------------------------- regions --- */
t('UK reads as UK',K.regionOf('UK')==='uk');
t('USA reads as US',K.regionOf('USA')==='us');
t('Canada reads as Canada',K.regionOf('Canada')==='ca');
t('INSEAD’s two campuses read as Europe',K.regionOf('France / Singapore')==='eu');
t('a multi-campus European school reads as Europe',K.regionOf('Europe (multi-campus)')==='eu');
t('every MBA school now names a region',
  MBA.generalSchools.concat(MBA.adjustedSchools).every(x=>typeof x.region==='string'&&x.region.length>1));

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

/* The opening titles (js/intro.js).
 *
 *   plan      Arriving at the site gets the full titles; a reader already on
 *             it (reload, back/forward, the site's own links) the flash; and
 *             nobody who asks for reduced motion gets either.
 *   wiring    Every page loads it straight after js/theme.js, in <head>, and
 *             the service worker caches it.
 *   words     Three lines of four beats, in English and Italian.
 *   counts    The numbers in the corner match the models. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(APP,f),'utf8');
const PAGES=['index.html','business.html','it.html','mba.html','masters.html','computing.html'];

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* Load it with no matchMedia: it publishes window.Intro and stops there. */
const ctx={window:{},document:{documentElement:{}},navigator:{userAgent:''},URL};
ctx.window=ctx; vm.createContext(ctx);
vm.runInContext(read('js/intro.js'),ctx,{filename:'js/intro.js'});
const I=ctx.Intro;
t('js/intro.js publishes its plan without touching the page',!!I&&typeof I.plan==='function');

/* ------------------------------------------------------------- plan --- */
const base={onSite:false,reduced:false,animate:true,robot:false};
const plan=o=>I.plan(Object.assign({},base,o));
t('arriving at the site gets the full titles',plan({})==='full');
t('a reader already on the site gets the flash',plan({onSite:true})==='flash');
t('reduced motion gets nothing, arriving or not',plan({reduced:true})==='none'&&plan({reduced:true,onSite:true})==='none');
t('no Web Animations, no titles',plan({animate:false})==='none');
t('crawlers and automated browsers get nothing',plan({robot:true})==='none');
const HERE='https://iaconoalessandro.github.io/admissions-calculator/mba.html';
const on=(type,ref)=>I.onSite(type,ref,HERE);
t('a new tab, a typed address or a bookmark counts as arriving',on('navigate','')===false);
t('a link from another site counts as arriving',on('navigate','https://www.google.com/search?q=mba')===false);
t('a link from another project on the same github.io host counts as arriving',on('navigate','https://iaconoalessandro.github.io/other-project/')===false);
t('the site\'s own links count as already on the site',on('navigate','https://iaconoalessandro.github.io/admissions-calculator/index.html')===true&&on('navigate','https://iaconoalessandro.github.io/admissions-calculator/')===true);
t('a reload counts as already on the site',on('reload','')===true);
t('back and forward count as already on the site',on('back_forward','')===true);
const src=read('js/intro.js');
t('nothing about a visit is remembered: old keys are cleared, none written',/removeItem\('admissions-calc:intro-seen'\)/.test(src)&&!/setItem\(/.test(src));
t('the flash is the nameplate alone: no colour strip',/function flash\(\) \{[^}]*landing\(ed, \.45\);\s*\}/.test(src)&&!/strip/.test(src));
t('The City\'s nameplate is spelled once: the typed-in letters replace the text, not follow it',
  /np\.textContent = '';\s*letters\(np, 'ADMISSION CHANCES'\)/.test(src));

/* ----------------------------------------------------------- wiring --- */
PAGES.forEach(p=>t(p+' loads js/intro.js in <head>, straight after js/theme.js',
  read(p).indexOf('<script src="js/theme.js"></script>\n<script src="js/intro.js"></script>\n')>-1&&read(p).indexOf('js/intro.js')<read(p).indexOf('</head>')));
t('sw.js caches js/intro.js',/'js\/intro\.js'/.test(read('sw.js')));
t('there is no footer switch for the titles',!/opening titles/.test(read('js/session.js'))&&!/intro-/.test(read('js/session.js'))&&!/opening titles/.test(read('js/i18n-it.js')));
t('tools/build.js inlines it',/swap\('<script src="js\/intro\.js"><\/script>'/.test(read('tools/build.js')));

/* ------------------------------------------------------------ words --- */
['en','it'].forEach(l=>{
  const lines=I.TXT[l].lines;
  t(l+': three lines of four beats',lines.length===3&&lines.every(x=>x.length===4&&x.every(w=>typeof w==='string'&&w.length)));
  t(l+': a skip label, a loading label, the motto and the counts',['skip','loading','motto','data'].every(k=>I.TXT[l][k]));
});
const itDict=read('js/i18n-it.js');
t('the Italian motto is the one the masthead uses',itDict.indexOf("': '"+I.TXT.it.motto+"'")>-1&&itDict.indexOf("'"+I.TXT.en.motto+"'")>-1);

/* ----------------------------------------------------------- counts --- */
const s={window:{},Math,console,Object,String,Number,parseFloat,isNaN,Infinity};
vm.createContext(s);
['data/masters-model.js','data/it-model.js','data/mba-model.js'].forEach(f=>vm.runInContext(read(f),s,{filename:f}));
const MBA=s.window.MBA_MODEL, IT=s.window.IT_MODEL, MS=s.window.MASTERS_MODEL;
const mbaN=MBA.generalSchools.length+MBA.adjustedSchools.length;
const mastersN=MS.schools.reduce((n,x)=>n+(x.tracks?x.tracks.length:1),0);
t('the MBA count matches the model',I.COUNT.mba===mbaN,I.COUNT.mba+' vs '+mbaN);
t('the computing count matches the model',I.COUNT.computing===IT.schools.length,I.COUNT.computing+' vs '+IT.schools.length);
const home=/more than (\d+) programmes/.exec(read('index.html'));
t('the business count is the one the front page states',!!home&&I.COUNT.programmes===+home[1],home&&home[1]);
t('and the models do score more than that many business programmes',mastersN+mbaN>I.COUNT.programmes,(mastersN+mbaN)+' vs '+I.COUNT.programmes);

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

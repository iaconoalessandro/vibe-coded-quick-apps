/* The opening titles (js/intro.js).
 *
 *   plan      Arriving at the site gets the full titles, a reload a plain
 *             fade, moving around the site nothing; reduced motion nothing.
 *   wiring    Every page loads it straight after js/theme.js, in <head>, and
 *             the service worker caches it.
 *   words     Three lines of four beats, in English and Italian.
 *   counts    The numbers in the corner match the models. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(APP,f),'utf8');
const PAGES=['index.html','study.html','business.html','it.html','mba.html','masters.html','computing.html'];

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* Load it with no matchMedia: it publishes window.Intro and stops there. */
const ctx={window:{},document:{documentElement:{}},navigator:{userAgent:''},URL};
ctx.window=ctx; vm.createContext(ctx);
vm.runInContext(read('js/intro.js'),ctx,{filename:'js/intro.js'});
const I=ctx.Intro;
t('js/intro.js publishes its plan without touching the page',!!I&&typeof I.plan==='function');

/* ------------------------------------------------------------- plan --- */
const HERE='https://iaconoalessandro.github.io/admetia/mba.html';
const base={navType:'navigate',referrer:'',here:HERE,reduced:false,animate:true,robot:false};
const plan=o=>I.plan(Object.assign({},base,o));
t('a new tab, a typed address or a bookmark gets the full titles',plan({})==='full');
t('a link from another site gets the full titles',plan({referrer:'https://www.google.com/search?q=mba'})==='full');
t('a link from another project on the same github.io host gets the full titles',plan({referrer:'https://iaconoalessandro.github.io/other-project/'})==='full');
t('a reload gets the fade',plan({navType:'reload'})==='fade'&&plan({navType:'reload',referrer:HERE})==='fade');
t('the site\'s own links get nothing',plan({referrer:'https://iaconoalessandro.github.io/admetia/index.html'})==='none'&&plan({referrer:'https://iaconoalessandro.github.io/admetia/'})==='none');
t('back and forward get nothing',plan({navType:'back_forward'})==='none');
t('reduced motion gets nothing, even on arrival or reload',plan({reduced:true})==='none'&&plan({reduced:true,navType:'reload'})==='none');
t('no Web Animations, no titles',plan({animate:false})==='none');
t('crawlers and automated browsers get nothing',plan({robot:true})==='none');
const src=read('js/intro.js');
t('nothing about a visit is remembered: old keys are cleared, none written',/removeItem\('admissions-calc:intro-seen'\)/.test(src)&&!/setItem\(/.test(src));
t('the reload fade is a plain fade: no nameplate, no movement',/function fade\(\) \{[^}]*whenParsed\(function \(\) \{ finish\(320\); \}\);\s*\}/.test(src)&&!/function flash/.test(src));
t('The City\'s nameplate is spelled once: the typed-in letters replace the text, not follow it',
  /np\.textContent = '';\s*letters\(np, name\)/.test(src));
t('the titles carry the site\'s name, and the pages\' nameplate says the same',I.NAME==='Admetia'&&PAGES.every(p=>read(p).indexOf('<a class="nameplate" href="index.html">'+I.NAME+'</a>')>-1));

/* ----------------------------------------------------------- wiring --- */
/* The titles belong to the master's fronts: a reader who follows a link
 * straight to a tool, a country or a role is not made to watch them. */
const INTRO_PAGES=['study.html','business.html','it.html'];
INTRO_PAGES.forEach(p=>t(p+' loads js/intro.js in <head>, straight after js/theme.js',
  read(p).indexOf('<script src="js/theme.js"></script>\n<script src="js/intro.js"></script>\n')>-1&&read(p).indexOf('js/intro.js')<read(p).indexOf('</head>')));
t('pages a reader lands on mid-task do not play the titles',['index.html','mba.html','masters.html','computing.html','programmes.html','map.html','hiring.html','jobs.html','method.html'].every(p=>read(p).indexOf('js/intro.js')<0));
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
['data/masters-model.js','data/computing-model.js','data/mba-model.js'].forEach(f=>vm.runInContext(read(f),s,{filename:f}));
const MBA=s.window.MBA_MODEL, IT=s.window.IT_MODEL, MS=s.window.MASTERS_MODEL;
const mbaN=MBA.generalSchools.length+MBA.adjustedSchools.length;
const mastersN=MS.schools.reduce((n,x)=>n+(x.tracks?x.tracks.length:1),0);
t('the MBA count matches the model',I.COUNT.mba===mbaN,I.COUNT.mba+' vs '+mbaN);
t('the computing count matches the model',I.COUNT.computing===IT.schools.length,I.COUNT.computing+' vs '+IT.schools.length);
const home=/more than (\d+) programmes/.exec(read('study.html'));
t('the business count is the one the front page states',!!home&&I.COUNT.programmes===+home[1],home&&home[1]);
t('and the models do score more than that many business programmes',mastersN+mbaN>I.COUNT.programmes,(mastersN+mbaN)+' vs '+I.COUNT.programmes);

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

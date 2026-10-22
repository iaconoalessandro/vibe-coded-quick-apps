/* The newspaper touches.
 *
 *   404        A page-not-found set as a correction, linking to every section,
 *              and working at any depth of a missing address.
 *   results    Stamps, the deadline calendar, the share image and the plan's
 *              newspaper masthead are wired into all three calculators, and
 *              printing a results page prints the plan.
 *   design     The City is the only design, including for returning readers.
 *   words      Every new line has its Italian. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(APP,f),'utf8');
let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* -------------------------------------------------------------- 404 --- */
const nf=read('404.html');
t('404.html resolves links from the site\'s folder, at any depth',/<base href="' \+ \(\/\^\\\/admetia\\\/\/\.test\(location\.pathname\)/.test(nf));
t('404.html is kept out of search results',/<meta name="robots" content="noindex">/.test(nf));
const links=[...nf.matchAll(/<li><a href="([^"?]+)/g)].map(m=>m[1]);
t('404.html links to the front page and every calculator page, all of which exist',
  ['index.html','mba.html','masters.html','computing.html'].every(p=>links.includes(p))&&links.every(p=>fs.existsSync(path.join(APP,p))),links.join(' '));
t('404.html uses The City and preserves the reader\'s language',/admissions-calc:theme/.test(nf)&&/admissions-calc:lang/.test(nf)&&/'This page never went to press\.': '/.test(nf));

/* ---------------------------------------------------------- results --- */
const kit=read('js/results-kit.js');
t('verdicts stamp once per visit, and not under reduced motion',/var stamped = false;/.test(kit)&&/if \(stamped\) return;\s*stamped = true;\s*if \(window\.matchMedia && window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\) return;/.test(kit));
t('the share image says what it is: an estimate, not a decision',/'An independent estimate from a points model — not an admission decision\.'/.test(kit));
t('the share image is made in the browser, never uploaded',/cv\.toBlob\(/.test(kit)&&!/fetch\(|XMLHttpRequest|sendBeacon/.test(kit));
t('the plan is set as a newspaper page under the site\'s name',/el\('span', 'plan-name', 'Admetia'\)/.test(kit)&&/'plan-dateline'/.test(kit));
const css=read('css/app.css');
t('the plan prints The City paper edge to edge, with its inks and live nameplate',
  /html\.print-plan \.plan \{ display: block; color: var\(--ink\);/.test(css)&&!/html\.print-plan \.plan \* \{ color: #000/.test(css)&&
  /@page plan \{ size: A4; margin: 0; \}/.test(css)&&/print-color-adjust: exact/.test(css)&&
  /\.plan-name \{[^}]*var\(--font-mast\)/.test(css));
t('the opening titles never print, and never hide text while a face loads',/@media print\{\.intro\{display:none!important\}/.test(read('js/intro.js'))&&!/font-display:block/.test(read('js/intro.js')));
t('printing a results page prints the plan',/addEventListener\('beforeprint'[\s\S]{0,300}planDoc\(build\(\)\)/.test(kit));
['page-mba.js','page-masters.js','page-computing.js'].forEach(f=>{
  const src=read('js/'+f);
  t(f+' shows the deadline calendar and links to it',/var cal = kit && kit\.deadlineCalendar\(\);/.test(src)&&/\{ label: 'Deadlines', count: cal && cal\.count, target: cal \}/.test(src));
  t(f+' has no separate "Print the page" button any more',!/Print the page/.test(src));
});

t('each calculator\'s jump bar opens the key to its verdicts',
  /\}, 'mba'\), sum\.nextSibling\);/.test(read('js/page-mba.js'))&&/\}, 'masters'\), sum\.nextSibling\);/.test(read('js/page-masters.js'))&&/\}, 'it'\), grid\.nextSibling\);/.test(read('js/page-computing.js')));
t('the MBA key gives the model\'s own odds, and says whose they are',/'Roughly 75–80%'/.test(kit)&&/'Roughly 50%'/.test(kit)&&/'Roughly 10%'/.test(kit)&&/model author’s own stated figures, not measured outcomes/.test(kit));
t('the master\'s and computing key gives rules, never a percentage',(function(){ const m=/rules: \{[\s\S]*?\n    \}/.exec(kit); return !!m&&!/%/.test(m[0])&&/a ranking, not probabilities/.test(m[0]); })());
t('no verdict is sold as a certainty',!/guaranteed|certain to|100%/i.test(kit.replace(/No verdict is a guarantee/g,'').replace(/Likely, not certain/g,'')));

/* ------------------------------------------- honesty, filters, clear --- */
['study.html','business.html','it.html','mba.html','masters.html','computing.html'].forEach(p=>{
  const h=read(p);
  t(p+' ends with a frank reality check: an estimate, a shifting pool, human readers',
    /<aside class="reality"/.test(h)&&/not a guarantee/.test(h)&&/every school can change its mind/.test(h)&&/The competition shifts every intake/.test(h)&&/Human judgment beats pure math/.test(h)&&h.indexOf('class="reality"')<h.indexOf('</footer>'));
});
const itd=read('js/i18n-it.js');
t('the reality check is in Italian, all five paragraphs',['A reality check on admissions','The competition shifts every intake','Criteria change constantly','Human judgment beats pure math','Treat these numbers as an orientation point'].every(k=>itd.indexOf(k)>-1));
t('there is no "forget everything when I close this tab" setting any more; "Clear everything" stays',
  !/Forget everything|wipeOnClose|wipe-on-close'\) === '1'|pagehide/.test(read('js/session.js'))&&/'Clear everything'/.test(read('js/session.js'))&&!/Forget everything/.test(itd));
t('the filter bar is labelled (Filter, Region, Verdict), explained in a hint, and can be cleared in one press',
  /el\('span', 'pill-k', 'Filter'\)/.test(kit)&&/el\('span', 'pill-k', 'Region'\)/.test(kit)&&/el\('span', 'pill-k', 'Verdict'\)/.test(kit)&&/'Tap to filter\.'/.test(kit)&&/el\('button', 'filter-clear', 'Show all'\)/.test(kit));
t('on a phone the filters lead the strip, ahead of the search and the order',/\.filters > \.filter-search, \.filters > \.filter-sort \{ order: 5; \}/.test(read('css/app.css')));
t('every verdict badge is a keyboard-reachable button marked with a +',
  /b\.setAttribute\('role', 'button'\);\s*b\.tabIndex = 0;/.test(kit)&&/\.badge\[role="button"\]::after \{[^}]*content: "\+"/.test(read('css/app.css'))&&/e\.key === 'Enter' \|\| e\.key === ' '/.test(kit));
t('and none of it prints',/\.filter-hint, \.whatif/.test(read('css/app.css'))&&/\.has-key \.row \.badge\[role="button"\]::after, \.has-key \.dlcal-row \.badge\[role="button"\]::after \{ display: none; \}/.test(read('css/app.css')));

/* ------------------------------------------------------------ design --- */
const theme=read('js/theme.js');
const retired=/wallstreet|watchlist|Roboto Serif|Noto Serif|img\/wordmark|editionchange|data-ed/;
['js/theme.js','js/intro.js','js/results-kit.js','css/app.css','css/fonts.css','404.html','tools/shell.js','tools/build-brand.py','tools/build-images.sh','design/intro/lab.html'].forEach(f=>{
  t(f+' has no retired template code or assets',!retired.test(read(f)));
});
const shell=require('../tools/shell');
Object.keys(shell.ROOT_PAGES).forEach(p=>{
  t(p+' uses The City before scripts run and keeps only the language host',
    /<html[^>]*data-theme="city"/.test(read(p))&&/class="language"/.test(read(p))&&!/class="edition"|data-ed/.test(read(p)));
});
['careers/index.html','careers/roles/frontend-engineer.html'].forEach(p=>{
  t(p+' uses the same City shell',/<html[^>]*data-theme="city"/.test(read(p))&&/class="language"/.test(read(p)));
});
t('the language picker stays labelled and keyboard operable',/querySelector\('\.language'\)/.test(read('js/i18n.js'))&&/setAttribute\('aria-label', t\('Language'\)\)/.test(read('js/i18n.js'))&&/ArrowRight/.test(read('js/i18n.js')));

/* Exercise early page setup with saved preferences, blocked storage and nested URLs. */
function setup(source,saved,blocked,script) {
  const values={'admissions-calc:theme':saved,'admissions-calc:lang':'it'},attrs={},fonts=[];
  const root={lang:'en',setAttribute:(k,v)=>attrs[k]=v,classList:{remove(){},add(){}}};
  const ctx={document:{documentElement:root,currentScript:script?{src:script}:null,
    createElement:()=>({}),head:{appendChild:l=>fonts.push(l.href)},addEventListener(){}},
    navigator:{},localStorage:{getItem:k=>{if(blocked)throw Error('blocked');return values[k];},removeItem:k=>{if(blocked)throw Error('blocked');delete values[k];}},
    setTimeout(){},URL};
  ctx.window=ctx;ctx.addEventListener=()=>{};
  vm.runInNewContext(source,ctx);
  return {values,attrs,fonts,root};
}
const nfSetup=[...nf.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).find(s=>/admissions-calc:theme/.test(s));
['wallstreet','watchlist','newsprint','dark','city',null].forEach(saved=>{
  const r=setup(theme,saved,false,'https://example.com/admetia/js/theme.js');
  t('saved '+saved+' becomes The City, clearing only the obsolete preference',r.attrs['data-theme']==='city'&&!('admissions-calc:theme' in r.values)&&r.values['admissions-calc:lang']==='it'&&r.root.lang==='it');
  const n=setup(nfSetup,saved,false);
  t('404 uses The City for saved '+saved+' and keeps Italian',n.attrs['data-theme']==='city'&&n.root.lang==='it');
});
t('The City works when storage is blocked',setup(theme,'watchlist',true).attrs['data-theme']==='city'&&setup(nfSetup,'wallstreet',true).attrs['data-theme']==='city');
const fonts=setup(theme,'wallstreet',false,'https://example.com/admetia/js/theme.js').fonts;
t('nested pages preload only The City fonts from the site root',fonts.length===2&&fonts.every(f=>f.startsWith('https://example.com/admetia/fonts/')));

/* ------------------------------------------------------------ words --- */
const it=read('js/i18n-it.js');
['What the verdicts mean','What each verdict means in practice','Building your list','Close','Share my shortlist','Deadline calendar','Deadlines','My shortlist','Page {n} of 2','Battle plan','Show all {n}','today','day','days',
 'An independent estimate from a points model — not an admission decision.','Estimates presented as fact.',
 'A self-selected sample, never an acceptance rate.'].forEach(k=>{
  t('Italian for "'+k+'"',it.indexOf("'"+k.replace(/'/g,"\\'")+"': '")>-1);
});

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

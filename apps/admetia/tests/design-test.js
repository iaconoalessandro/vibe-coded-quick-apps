/* The newspaper touches.
 *
 *   404        A page-not-found set as a correction, linking to every section,
 *              and working at any depth of a missing address.
 *   results    Stamps, the deadline calendar, the share image and the plan's
 *              newspaper masthead are wired into all three calculators, and
 *              printing a results page prints the plan.
 *   editions   Changing edition runs as a press run, and never for readers
 *              who ask for less motion.
 *   words      Every new line has its Italian. */

const fs=require('fs'),path=require('path');
const APP=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(APP,f),'utf8');
let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* -------------------------------------------------------------- 404 --- */
const nf=read('404.html');
t('404.html resolves links from the site\'s folder, at any depth',/<base href="' \+ \(\/\^\\\/admissions-calculator\\\/\/\.test\(location\.pathname\)/.test(nf));
t('404.html is kept out of search results',/<meta name="robots" content="noindex">/.test(nf));
const links=[...nf.matchAll(/<li><a href="([^"?]+)/g)].map(m=>m[1]);
t('404.html links to the front page and every calculator page, all of which exist',
  ['index.html','mba.html','masters.html','computing.html'].every(p=>links.includes(p))&&links.every(p=>fs.existsSync(path.join(APP,p))),links.join(' '));
t('404.html follows the reader\'s edition and language',/admissions-calc:theme/.test(nf)&&/admissions-calc:lang/.test(nf)&&/'This page never went to press\.': '/.test(nf));

/* ---------------------------------------------------------- results --- */
const kit=read('js/results-kit.js');
t('verdicts stamp once per visit, and not under reduced motion',/var stamped = false;/.test(kit)&&/if \(stamped\) return;\s*stamped = true;\s*if \(window\.matchMedia && window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\) return;/.test(kit));
t('the share image says what it is: an estimate, not a decision',/'An independent estimate from a points model — not an admission decision\.'/.test(kit));
t('the share image is made in the browser, never uploaded',/cv\.toBlob\(/.test(kit)&&!/fetch\(|XMLHttpRequest|sendBeacon/.test(kit));
t('the plan is set as a newspaper page under the site\'s name',/el\('span', 'plan-name', 'Admetia'\)/.test(kit)&&/'plan-dateline'/.test(kit));
const css=read('css/app.css');
t('the plan prints in the reader\'s edition: its paper edge to edge, its inks, its nameplate',
  /html\.print-plan \.plan \{ display: block; color: var\(--ink\);/.test(css)&&!/html\.print-plan \.plan \* \{ color: #000/.test(css)&&
  /@page plan \{ size: A4; margin: 0; \}/.test(css)&&/print-color-adjust: exact/.test(css)&&
  /:root\[data-theme="watchlist"\] \.plan-mast \{[^}]*background: #171717/.test(css)&&/:root\[data-theme="wallstreet"\] \.plan-name \{/.test(css));
t('the opening titles never print, and never hide text while a face loads',/@media print\{\.intro\{display:none!important\}/.test(read('js/intro.js'))&&!/font-display:block/.test(read('js/intro.js')));
t('printing a results page prints the plan',/addEventListener\('beforeprint'[\s\S]{0,300}planDoc\(build\(\)\)/.test(kit));
['page-mba.js','page-masters.js','page-it.js'].forEach(f=>{
  const src=read('js/'+f);
  t(f+' shows the deadline calendar and links to it',/var cal = kit && kit\.deadlineCalendar\(\);/.test(src)&&/\{ label: 'Deadlines', count: cal && cal\.count, target: cal \}/.test(src));
  t(f+' has no separate "Print the page" button any more',!/Print the page/.test(src));
});

t('each calculator\'s jump bar opens the key to its verdicts',
  /\}, 'mba'\), sum\.nextSibling\);/.test(read('js/page-mba.js'))&&/\}, 'masters'\), sum\.nextSibling\);/.test(read('js/page-masters.js'))&&/\}, 'it'\), grid\.nextSibling\);/.test(read('js/page-it.js')));
t('the MBA key gives the model\'s own odds, and says whose they are',/'Roughly 75–80%'/.test(kit)&&/'Roughly 50%'/.test(kit)&&/'Roughly 10%'/.test(kit)&&/model author’s own stated figures, not measured outcomes/.test(kit));
t('the master\'s and computing key gives rules, never a percentage',(function(){ const m=/rules: \{[\s\S]*?\n    \}/.exec(kit); return !!m&&!/%/.test(m[0])&&/a ranking, not probabilities/.test(m[0]); })());
t('no verdict is sold as a certainty',!/guaranteed|certain to|100%/i.test(kit.replace(/No verdict is a guarantee/g,'').replace(/Likely, not certain/g,'')));

/* ------------------------------------------- honesty, filters, clear --- */
['index.html','business.html','it.html','mba.html','masters.html','computing.html'].forEach(p=>{
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

/* --------------------------------------------------------- editions --- */
const theme=read('js/theme.js');
t('changing edition runs as a press run where the browser can',/document\.startViewTransition\(change\)/.test(theme)&&/::view-transition-new\(root\) \{ animation: press-in/.test(read('css/app.css')));
t('  and plainly for readers who ask for less motion',/if \(!document\.startViewTransition \|\| still \|\| id === current\(\)\) return change\(\);/.test(theme));

/* ------------------------------------------------------------ words --- */
const it=read('js/i18n-it.js');
['What the verdicts mean','What each verdict means in practice','Building your list','Close','Share my shortlist','Deadline calendar','Deadlines','My shortlist','Page {n} of 2','Battle plan','Show all {n}','today','day','days',
 'An independent estimate from a points model — not an admission decision.','Estimates presented as fact.',
 'A self-selected sample, never an acceptance rate.'].forEach(k=>{
  t('Italian for "'+k+'"',it.indexOf("'"+k.replace(/'/g,"\\'")+"': '")>-1);
});

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

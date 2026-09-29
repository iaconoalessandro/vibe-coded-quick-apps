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
t('printing a results page prints the plan',/addEventListener\('beforeprint'[\s\S]{0,300}planDoc\(build\(\)\)/.test(kit));
['page-mba.js','page-masters.js','page-it.js'].forEach(f=>{
  const src=read('js/'+f);
  t(f+' shows the deadline calendar and links to it',/var cal = kit && kit\.deadlineCalendar\(\);/.test(src)&&/\{ label: 'Deadlines', count: cal && cal\.count, target: cal \}/.test(src));
  t(f+' has no separate "Print the page" button any more',!/Print the page/.test(src));
});

/* --------------------------------------------------------- editions --- */
const theme=read('js/theme.js');
t('changing edition runs as a press run where the browser can',/document\.startViewTransition\(change\)/.test(theme)&&/::view-transition-new\(root\) \{ animation: press-in/.test(read('css/app.css')));
t('  and plainly for readers who ask for less motion',/if \(!document\.startViewTransition \|\| still \|\| id === current\(\)\) return change\(\);/.test(theme));

/* ------------------------------------------------------------ words --- */
const it=read('js/i18n-it.js');
['Share my shortlist','Deadline calendar','Deadlines','My shortlist','Page {n} of 2','Battle plan','Show all {n}','today','day','days',
 'An independent estimate from a points model — not an admission decision.','Estimates presented as fact.',
 'A self-selected sample, never an acceptance rate.'].forEach(k=>{
  t('Italian for "'+k+'"',it.indexOf("'"+k.replace(/'/g,"\\'")+"': '")>-1);
});

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

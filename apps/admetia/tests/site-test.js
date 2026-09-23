/* The pages themselves: what they claim, what they are called, and how they
 * look when shared.
 *
 *   names    The three editions are styled after real papers but carry their
 *            own names — The City, Wall Street, FBI Watchlist. No real
 *            paper's name may appear in anything a reader sees: the pages,
 *            the interface scripts' strings, or the Italian dictionaries.
 *            (Developer comments in the CSS may cite their sources.)
 *   counts   Numbers the pages state in words must match the models.
 *   sharing  Every page has a link-preview card, and the image exists. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(APP,f),'utf8');
const PAGES=['index.html','business.html','it.html','mba.html','masters.html','computing.html'];

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* ------------------------------------------------------------- names --- */
const REAL=/Financial Times|\bFT\b|ft\.com|Wall Street Journal|\bWSJ\b|Forbes/i;
const stripComments=s=>s.replace(/<!--[\s\S]*?-->/g,'').replace(/\/\*[\s\S]*?\*\//g,'').replace(/(^|[^:'"])\/\/.*$/gm,'$1');
const seen=[];
PAGES.forEach(p=>{ if(REAL.test(stripComments(read(p)))) seen.push(p); });
fs.readdirSync(path.join(APP,'js')).filter(f=>f.endsWith('.js')).forEach(f=>{ if(REAL.test(stripComments(read('js/'+f)))) seen.push('js/'+f); });
['data/i18n-it-models.js'].forEach(f=>{ if(REAL.test(stripComments(read(f)))) seen.push(f); });
t('no real newspaper name appears in anything a reader sees',seen.length===0,seen.join(', '));
const theme=read('js/theme.js');
t('the editions keep their own names',/'The City'/.test(theme)&&/'Wall Street'/.test(theme)&&/'FBI Watchlist'/.test(theme));

/* ------------------------------------------------------------ counts --- */
const s={window:{},Math,console,Object,String,Number,parseFloat,isNaN,Infinity};
vm.createContext(s);
['data/masters-model.js','data/it-model.js','data/mba-model.js'].forEach(f=>vm.runInContext(read(f),s,{filename:f}));
const IT=s.window.IT_MODEL, MBA=s.window.MBA_MODEL;
const WORDS={twenty:20,thirty:30,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9};
const m=/(Twenty|Thirty)-?(one|two|three|four|five|six|seven|eight|nine)? programmes across/.exec(read('it.html'));
const stated=m?WORDS[m[1].toLowerCase()]+(m[2]?WORDS[m[2]]:0):null;
t('the computing page states the number of programmes the model scores',stated===IT.schools.length,stated+' vs '+IT.schools.length);
const usCount=IT.schools.filter(x=>/USA/.test(x.region)).length;
t('and mentions the US when the model has US programmes',!usCount||/the US, scored/.test(read('it.html'))&&/Europe and the US\./.test(read('index.html')));
const mbaN=MBA.generalSchools.length+MBA.adjustedSchools.length;
t('the MBA description states the number of schools the model scores',read('mba.html').indexOf('across '+mbaN+' business schools')>-1,String(mbaN));

/* ----------------------------------------------------------- sharing --- */
PAGES.forEach(p=>{
  const h=read(p);
  const img=/<meta property="og:image" content="https:\/\/iaconoalessandro\.github\.io\/admissions-calculator\/([^"]+)">/.exec(h);
  t(p+' has a preview card (title, description, image, large-card tag)',
    /property="og:title"/.test(h)&&/property="og:description"/.test(h)&&!!img&&/name="twitter:card" content="summary_large_image"/.test(h));
  t(p+' points its card at an image that exists',!!img&&fs.existsSync(path.join(APP,img[1])),img&&img[1]);
});

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

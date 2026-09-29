/* The pages themselves: what they claim, what they are called, and how they
 * look when shared.
 *
 *   names    The three editions carry their own names — The City, Wall Street,
 *            FBI Watchlist. No trademarked newspaper name may appear in anything
 *            a reader sees: the pages, the interface scripts' strings, or the
 *            Italian dictionaries.
 *   counts   Numbers the pages state in words must match the models.
 *   sharing  Every page has a link-preview card, and the image exists. */

const fs=require('fs'),path=require('path'),vm=require('vm');
const APP=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(APP,f),'utf8');
const PAGES=['index.html','business.html','it.html','mba.html','masters.html','computing.html'];

let pass=0,fail=0;
function t(label,cond,extra){ if(cond){pass++;console.log('PASS  '+label);} else {fail++;console.log('FAIL  '+label+(extra?'  → '+extra:''));} }

/* ------------------------------------------------------------- names --- */
const REAL=new RegExp(['Financial'+' '+'Times','Wall'+' '+'Street'+' '+'Journal','For'+'bes','\\bF'+'T\\b','\\bW'+'SJ\\b','ft'+'\\.com'].join('|'),'i');
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

/* ---------------------------------------------------------- journeys --- */
/* Results sit at #results, so Back returns to the answers; the resume banner,
 * the track pickers and the front page link straight to them. */
const pageKeys={'page-mba.js':["'mba2'"],'page-masters.js':["'masters:' + trackId"],'page-it.js':["'it:' + trackId"]};
Object.keys(pageKeys).forEach(f=>{
  const src=read('js/'+f);
  t(f+' puts its results in the browser history, and opens on them from #results',
    /Wizard\.resultsRoute\(/.test(src)&&/route\.shown\(\)/.test(src)&&/route\.initial\(\)/.test(src)&&/function backToAnswers\(\) \{ route\.leave\(\); \}/.test(src));
  t(f+' offers the jump bar and the battle plan near the top',/ResultsKit\.jumpBar\(/.test(src));
});
const session=read('js/session.js');
const calcKeys=[...session.matchAll(/\['([a-z0-9:]+)', '([a-z]+\.html(?:\?track=[a-z]+)?)'/g)].map(m=>[m[1],m[2]]);
t('every calculator is listed for "See your results" links',calcKeys.length===7,calcKeys.map(k=>k[0]).join(' '));
calcKeys.forEach(([key,href])=>{
  const page=href.split('?')[0], track=(href.split('=')[1]||'');
  const ok=page==='mba.html'?key==='mba2':page==='masters.html'?key==='masters:'+track:key==='it:'+track;
  t('  '+href+' reads the answers saved under '+key,ok);
  if(page!=='mba.html'){
    const picker=read(page==='masters.html'?'business.html':'it.html');
    t('  its picker card links to '+href,picker.indexOf('class="story reveal" href="'+href+'"')>-1||picker.indexOf('href="'+href+'"')>-1);
  }
});
const kit=read('js/results-kit.js');
t('the filters use the verdict badges\' words',/\['safe', 'Strong'\], \['target', 'Competitive'\]/.test(kit)&&!/'Safe'|'Dream'/.test(kit));

/* ----------------------------------------------------------- sharing --- */
PAGES.forEach(p=>{
  const h=read(p);
  const img=/<meta property="og:image" content="https:\/\/iaconoalessandro\.github\.io\/admetia\/([^"]+)">/.exec(h);
  t(p+' has a preview card (title, description, image, large-card tag)',
    /property="og:title"/.test(h)&&/property="og:description"/.test(h)&&!!img&&/name="twitter:card" content="summary_large_image"/.test(h));
  t(p+' points its card at an image that exists',!!img&&fs.existsSync(path.join(APP,img[1])),img&&img[1]);
});

console.log('\n'+pass+' passed, '+fail+' failed');
process.exit(fail?1:0);

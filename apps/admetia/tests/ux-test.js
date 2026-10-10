/* The site's structure: one chrome, task navigation, routes that keep
 * working, and nothing lost in the reorganisation.
 *
 *   shell      every hand-written page carries exactly what tools/shell.js
 *              and tools/visuals.js produce (npm run shell), with a skip
 *              link, one <main>, one <h1> and the five sections
 *   routes     old addresses resolve: map.html#de is still Germany,
 *              #de/munich still opens Munich, hiring plans still parse; the
 *              new views and parts parse; no hub is named like a view
 *   views      every section of a country's guide belongs to a view, and
 *              the whole-guide view prints them all
 *   content    every block of text, script string, data file and external
 *              link the site published before the restructuring is still
 *              published (tools/ux-ledger.js against the commit before it)
 *   facts      the numbers the new pages state match the data
 *   visuals    each generated figure has its table or list beside it
 *   words      every string the chrome and the figures print has Italian
 *   provenance research notes sit in their own section on every field page
 */

const fs = require('fs'), path = require('path'), vm = require('vm');
const { execFileSync } = require('child_process');
const APP = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(APP, f), 'utf8');
let pass = 0, fail = 0;
function t(label, cond, extra) { if (cond) { pass++; console.log('PASS  ' + label); } else { fail++; console.log('FAIL  ' + label + (extra ? '  → ' + extra : '')); } }

const S = require('../tools/shell.js');
const V = require('../tools/visuals.js');
const { stamp } = require('../tools/build-shell.js');
const PAGES = Object.keys(S.ROOT_PAGES);

/* ------------------------------------------------------------- shell --- */
const stale = PAGES.filter((p) => stamp(p, read(p)) !== read(p));
t('every root page carries the current shell and figures (run `npm run shell`)', stale.length === 0, stale.join(', '));
PAGES.forEach((p) => {
  const h = read(p);
  const nav = /<nav class="site-nav" aria-label="Main">[\s\S]*?<\/nav>/.exec(h);
  t(p + ': skip link first, one <main id="main">, the five sections in the global navigation',
    /<body>\s*<!-- shell:top -->\s*<a class="skip" href="#main">/.test(h) && (h.match(/<main\b/g) || []).length === 1 && /<main class="shell" id="main" tabindex="-1">/.test(h) &&
    !!nav && S.SECTIONS.every((s) => nav[0].includes(`data-section="${s.id}"`)) && (nav[0].match(/<li>/g) || []).length === S.SECTIONS.length);
  const cfg = S.ROOT_PAGES[p];
  if (cfg.section) t(p + ': marks its own section as current, and no other', new RegExp(`data-section="${cfg.section}" aria-current="(page|true)"`).test(nav[0]) && (nav[0].match(/aria-current=/g) || []).length === 1);
  else t(p + ': the front page marks no section as current', !/aria-current=/.test(nav[0]));
  /* map.html draws a country's own <h1> when one is open; its static one is
   * the world view's. */
  /* The two calculators with tracks have no <h1> of their own: js/engine.js
   * writes it, with the track's name in it. */
  const drawn = /<div id="wizard"/.test(h) && !/<h1\b/.test(h) && /el\('h1', 'headline'/.test(read('js/engine.js'));
  t(p + ': exactly one <h1>, in its own HTML or written by the questionnaire', (h.match(/<h1\b/g) || []).length === 1 || drawn, String((h.match(/<h1\b/g) || []).length));
  t(p + ': the footer has the site index', /<nav class="site-foot" aria-label="Site index">/.test(h) && h.indexOf('class="site-foot"') < h.indexOf('</footer>'));
  t(p + ': carries the Admissions index only if it is a master’s page', /class="ticker-track"/.test(h) === !!cfg.ticker && /js\/ticker\.js/.test(h) === !!cfg.ticker);
});
t('the ticker can be paused, and stays still for readers who ask for less motion',
  /function tickerPause\(\)/.test(read('js/theme.js')) && /prefers-reduced-motion: reduce\)'\)\.matches\) paused = true/.test(read('js/theme.js')) && /\.ticker\.paused \.ticker-track \{ animation-play-state: paused; \}/.test(read('css/app.css')));
t('the global navigation folds behind a Menu button only with script, and Escape closes it',
  /btn\.hidden = false;\s*nav\.classList\.add\('has-toggle'\)/.test(read('js/theme.js')) && /e\.key === 'Escape'/.test(read('js/theme.js')) && /class="site-nav-toggle" aria-expanded="false" aria-controls="site-nav-list" hidden/.test(read('index.html')));
t('the Career Explorer is built with the same shell', /const SH = require\('\.\.\/shell'\)/.test(read('tools/careers/render.js')) && /SH\.top\(\{ path: from, section, current, crumbs/.test(read('tools/careers/render.js')));
t('the service worker keeps the new pages offline', ['study.html', 'jobs.html', 'method.html'].every((p) => read('sw.js').includes(`'${p}'`)));

/* ------------------------------------------------------------ routes --- */
const pm = read('js/page-map.js');
const A = V.atlas();
const viewsSrc = /var VIEWS = (\[[\s\S]*?\n {2}\]);/.exec(pm);
const parseSrc = /function parse\(hash\) \{[\s\S]*?\n {2}\}/.exec(pm);
const secSrc = /var VIEW_SECTIONS = (\{[\s\S]*?\n {2}\});/.exec(pm);
t('js/page-map.js declares its views, its sections and how it reads an address', !!viewsSrc && !!parseSrc && !!secSrc);
const box = { A: { byId: Object.fromEntries(A.countries.map((c) => [c.id, c])) } };
vm.createContext(box);
vm.runInContext(`var VIEWS = ${viewsSrc[1]}; var viewById = {}; VIEWS.forEach(function (v) { viewById[v.id] = v; }); ${parseSrc[0]}; var VIEW_SECTIONS = ${secSrc[1]};`, box);
const parse = (h) => vm.runInContext(`JSON.stringify(parse(${JSON.stringify(h)}))`, box);
const is = (h, want) => t(`map.html${h} → ${want === null ? 'the world view' : JSON.stringify(want)}`, parse(h) === JSON.stringify(want), parse(h));
is('', null);
is('#', null);
is('#countries', null);
is('#zz', null);
is('#de', { id: 'DE', view: 'overview', hub: null, part: null });
is('#DE', { id: 'DE', view: 'overview', hub: null, part: null });
is('#de/munich', { id: 'DE', view: 'cities', hub: 'munich', part: null });
is('#de/cities', { id: 'DE', view: 'cities', hub: null, part: null });
is('#de/cities/munich', { id: 'DE', view: 'cities', hub: 'munich', part: null });
is('#de/hiring', { id: 'DE', view: 'hiring', hub: null, part: null });
is('#de/hiring/apply', { id: 'DE', view: 'hiring', hub: null, part: 'apply' });
is('#de/visas', { id: 'DE', view: 'visas', hub: null, part: null });
is('#de/arrival/bank', { id: 'DE', view: 'arrival', hub: null, part: 'bank' });
is('#de/overview/advice', { id: 'DE', view: 'overview', hub: null, part: 'advice' });
is('#de/all', { id: 'DE', view: 'all', hub: null, part: null });
const viewIds = vm.runInContext('VIEWS.map(function (v) { return v.id; })', box);
const hubIds = new Set();
fs.readdirSync(path.join(APP, 'data/atlas')).filter((f) => /^[a-z]{2}\.js$/.test(f)).forEach((f) => {
  for (const m of read('data/atlas/' + f).matchAll(/\bid: '([a-z0-9-]+)'/g)) hubIds.add(m[1]);
});
const clash = viewIds.filter((v) => hubIds.has(v));
t(`no hub is named like a view, so #de/<hub> can never be mistaken (${hubIds.size} ids)`, hubIds.size > 150 && clash.length === 0, clash.join(', '));
const paths = A.entryPaths.map((p) => p.id), arrival = A.arrivalSteps.map((s) => s.id);
t('a path named on the hiring view sets the routes filter', /sel\.view === 'hiring' && sel\.part && \(A\.entryPaths \|\| \[\]\)\.some/.test(pm) && paths.join() === 'first,intern,exp');
t('a part named in the address is opened if it is folded, and gets the keyboard', /function goPart\(id\)[\s\S]{0,260}n\.open = true;[\s\S]{0,400}t\.focus\(/.test(pm));
t('a picked hub still writes #cc/<hub> to the address', /var want = '#' \+ rec\.id\.toLowerCase\(\) \+ '\/' \+ h\.id;/.test(pm));
t('arrival steps are parts of their view', arrival.length === 7 && /row\.id = 'part-' \+ S\.id;/.test(pm));

const ph = read('js/page-hiring.js');
const hre = /var m = (\/\^#\(\[a-z\]\{2\}\|-\)[^;]+)\.exec\(location\.hash\.toLowerCase\(\)\);/.exec(ph);
t('the hiring planner still reads #cc/stage/path[/field], and now "-" before a country is chosen', !!hre);
if (hre) {
  const re = vm.runInNewContext(hre[1]);
  t('  hiring.html#de/graduated/first/finance', re.test('#de/graduated/first/finance'));
  t('  hiring.html#de/studying/intern', re.test('#de/studying/intern'));
  t('  hiring.html#-/working/exp', re.test('#-/working/exp'));
  t('  and nothing else', !re.test('#de') && !re.test('#de/retired/first') && !re.test('#compare'));
}
t('the hiring table and the planner link into the country’s hiring view', /a\.href = 'map\.html#' \+ r\.c\.id\.toLowerCase\(\) \+ '\/hiring';/.test(ph) && /'\/hiring\/' \+ plan\.path/.test(ph));
t('hiring.html#compare is a real anchor', /<div id="compare" tabindex="-1">/.test(read('hiring.html')));
t('map.html#countries is a real anchor', /<h2 class="visually-hidden" id="countries" tabindex="-1">/.test(read('map.html')));
t('the calculators’ addresses are untouched: tracks, ?school= and #results',
  /params\.get\('track'\)|new URLSearchParams\(window\.location\.search\)/.test(read('js/page-masters.js')) && /\.get\('school'\)/.test(read('js/results-kit.js')) && /Wizard\.resultsRoute\(/.test(read('js/page-mba.js')));

/* ------------------------------------------------------------- views --- */
const VS = JSON.parse(vm.runInContext('JSON.stringify(VIEW_SECTIONS)', box));
const builders = [...pm.matchAll(/^ {4}([a-z]+): function \(c\) \{/gm)].map((m) => m[1]);
t('the whole-guide view prints every section the page can draw', builders.length >= 9 && builders.every((b) => VS.all.includes(b)) && VS.all.every((b) => builders.includes(b)), builders.join(' ') + ' vs ' + VS.all.join(' '));
const homeless = VS.all.filter((s) => !Object.keys(VS).some((v) => v !== 'all' && VS[v].includes(s)));
t('every section belongs to a view of its own, not only to the whole guide', homeless.length === 0, homeless.join(', '));
t('every view has its sections, and every view is in the navigation', viewIds.every((v) => Array.isArray(VS[v])) && Object.keys(VS).every((v) => viewIds.includes(v)));
t('official advice is printed on the overview and with the visas, and announced on every other view',
  VS.overview.includes('advisory') && VS.visas.includes('advisory') && /list\.indexOf\('advisory'\) < 0\) main\.appendChild\(advisoryNotice\(rec\)\)/.test(pm));
t('the Sources view lists the whole guide’s sources, with the research notes', /VIEW_SECTIONS\.all\.forEach\(function \(k\) \{ if \(k !== 'research'\) SECTIONS\[k\]\(off\); \}\)/.test(pm) && VS.sources.join() === 'research');
t('folded parts are native <details>, open in the whole guide, on request and in print',
  /var d = el\('details', 'disc'\);/.test(pm) && /state\.sel\.view === 'all'/.test(pm) && /addEventListener\('beforeprint', function \(\) \{ allDiscs\(\)/.test(pm) && /function setExpand\(on\)/.test(pm));
t('what a reader must know before deciding is open: routes, the market, language at work',
  ["id: 'routes', open: true", "id: 'market', open: true", "id: 'language', open: true"].every((x) => pm.includes(x)));
t('whether employers sponsor stays visible in its folded part’s label', /disc\(R\.name, cell, \{ id: R\.id, extra: V \? el\('span', 'verdict entry-v cv-sponsorr-'/.test(pm));
t('the routes filter always offers every path, and says how many it is showing', /\{ id: '', label: 'Every path' \}/.test(pm) && /routes serve this path\. The ranking is among all/.test(pm));
t('an unknown first-weeks step is marked, not skipped', /xs\.every\(function \(x\) \{ return x\.none; \}\)\) st\.appendChild\(el\('span', 'move-none', 'Not covered yet'\)\)/.test(pm));

/* ----------------------------------------------------------- content --- */
/* The commit before the restructuring. A shallow clone (CI) does not have
 * it: the check is then skipped, and says so. */
const BASE = 'cb68ad51befbfa866a57eeb1bef427d05bc1ef1c';
let haveBase = true;
try { execFileSync('git', ['cat-file', '-e', BASE + '^{commit}'], { cwd: APP, stdio: 'ignore' }); } catch (e) { haveBase = false; }
if (!haveBase) console.log('  (info) baseline commit ' + BASE.slice(0, 7) + ' is not in this clone: the content ledger was not run');
else {
  process.argv.push('--ref=' + BASE);
  const L = require('../tools/ux-ledger.js').run();
  t(`every published block of text is still published (${L.counts.blocks} blocks on ${L.counts.baselinePages} pages)`, L.counts.blocks > 30000 && L.missingBlocks.length === 0, L.missingBlocks.slice(0, 3).map((b) => b.id + ' ' + b.text.slice(0, 60)).join(' | '));
  t(`every sentence the page scripts printed is still in a script or a page (${L.counts.scriptStrings})`, L.missingStrings.length === 0, L.missingStrings.slice(0, 3).map((b) => b.text.slice(0, 60)).join(' | '));
  t('every external link in the pages’ content is still there', L.missingLinks.length === 0, L.missingLinks.slice(0, 3).map((b) => b.href).join(' '));
  t('data, downloads, photographs, research and retained typefaces are preserved', L.dataChanged.length === 0 && L.dataRemoved.length === 0, L.dataChanged.concat(L.dataRemoved).slice(0, 5).join(', '));
  t('no page was removed', L.pages.every((p) => fs.existsSync(path.join(APP, p.file))));
}
const ex = JSON.parse(read('docs/ux-refactor/content-exceptions.json'));
t('every exception to the ledger gives its reason, and is a label or decoration', Object.values(ex.blocks).concat(Object.values(ex.strings)).every((r) => /^(Interface label|Decoration|Not a string)/.test(r)) && !Object.keys(ex.links).length);
const retiredFiles = [
  'fonts/OFL-noto-serif-display.txt', 'fonts/OFL-roboto-serif.txt',
  'fonts/noto-serif-display.woff2', 'fonts/roboto-serif-condensed.woff2',
  'img/wordmark/OFL-gloock.txt', 'img/wordmark/OFL-roboto-serif.txt',
  'img/wordmark/README.md', 'img/wordmark/fbi-watchlist.png',
  'img/wordmark/fbi-watchlist.webp', 'img/wordmark/wall-street.png', 'img/wordmark/wall-street.webp'
];
t('file exceptions cover only updated credits and explicitly retired template assets',
  Object.keys(ex.files).sort().join() === ['CREDITS.md','fonts/README.md',...retiredFiles].sort().join() &&
  ['CREDITS.md','fonts/README.md'].every(f=>/^Updated: /.test(ex.files[f])) &&
  retiredFiles.every(f=>/^Removed: /.test(ex.files[f])&&!fs.existsSync(path.join(APP,f))) &&
  ['Pexels 37758542', 'Pexels 8730981', 'Pexels 7683734', 'CC0'].every(x=>read('CREDITS.md').includes(x)));

/* ------------------------------------------------------------- facts --- */
const m = { window: {}, Math, console, Object, String, Number, parseFloat, isNaN, Infinity };
vm.createContext(m);
['data/masters-model.js', 'data/computing-model.js', 'data/mba-model.js'].forEach((f) => vm.runInContext(read(f), m, { filename: f }));
const nProg = m.window.MASTERS_MODEL.schools.length + m.window.IT_MODEL.schools.length +
  m.window.MBA_MODEL.generalSchools.length + m.window.MBA_MODEL.adjustedSchools.length;
const careers = JSON.parse(read('careers/data/careers.json'));
const recs = {};
const actx = { console }; actx.window = actx; vm.createContext(actx);
vm.runInContext(read('data/atlas/index.js'), actx);
fs.readdirSync(path.join(APP, 'data/atlas')).filter((f) => /^[a-z]{2}\.js$/.test(f)).forEach((f) => vm.runInContext(read('data/atlas/' + f), actx, { filename: f }));
const nHubs = Object.values(actx.ATLAS.records).reduce((n, r) => n + r.hubs.length, 0);
const home = read('index.html');
t(`the front page’s programme count is the models’ (${nProg})`, home.includes(`Compare ${nProg} MBA, business and computing programmes`) && read('study.html').includes(`lists all ${nProg} programmes`));
t(`its role and field counts are the Career Explorer’s (${careers.roles.length} in ${careers.fields.length})`, home.includes(`${careers.roles.length} role families in ${careers.fields.length} fields`));
t(`its country and hub counts are the Atlas’s (${A.countries.length} and ${nHubs})`, home.includes(`${A.countries.length} countries and ${nHubs} city hubs`) && read('method.html').includes(`${nHubs} city hubs`));
t('the method page’s counts match too', read('method.html').includes(`lists the ${nProg} programmes`) && read('method.html').includes('covers 46 countries: 25 in Europe') && A.countries.filter((c) => c.europe).length === 25);
t('the jobs page says fifteen windows, and the calendar has fifteen', /Fifteen recruiting windows/.test(read('jobs.html')) && require('../tools/careers/calendar.js').ROWS.length === 15);
t('the old front page’s content is on the master’s page, whole', ['Work out where you <em>actually</em> stand.', 'Choose your field', 'id="highest"', 'What this is', 'Three things this does that a generic calculator does not.', 'A reality check on admissions'].every((x) => read('study.html').includes(x)));

/* ----------------------------------------------------------- visuals --- */
const study = read('study.html'), jobs = read('jobs.html');
const pathRows = (/<table class="path-table">[\s\S]*?<\/table>/.exec(study) || [''])[0].match(/<tr><th scope="row">/g) || [];
t('the track-to-field diagram has its table beside it, one row per field, and says whose mapping it is',
  /<svg class="path-svg"[^>]*aria-hidden="true"/.test(study) && pathRows.length === careers.fields.length && /it is Admetia’s own mapping, not an entry requirement/.test(study) && /class="fig-src">Source:/.test(study));
const links = careers.fields.reduce((n, f) => n + f.calculators.length, 0);
t(`the diagram draws exactly the links the field pages have (${links})`, (study.match(/<path class="path-line /g) || []).length === links);
const tlRows = (/<table class="tl-table">[\s\S]*?<\/table>/.exec(jobs) || [''])[0].match(/<tr><th scope="row">/g) || [];
t('the recruiting timeline is a table: one row per window, each linked to its full entry, with its confidence',
  tlRows.length === 15 && (jobs.match(/href="careers\/recruiting-calendar\.html#rc-/g) || []).length === 15 && (jobs.match(/<td class="tl-flag"><abbr title="(High|Medium|Low) confidence">[HML]<\/abbr>/g) || []).length === 15);
t('every mark in the timeline has a letter and a name, not only a colour', !/<span class="tl-m tl-[a-z]+"><\/span>/.test(jobs) && /<span class="visually-hidden">Applications open<\/span>/.test(jobs));
t('every window’s full entry exists on the calendar page', require('../tools/careers/calendar.js').ROWS.every((r) => read('careers/recruiting-calendar.html').includes(`id="rc-${r.id}"`)));
t('the jobs page lists all 46 countries, each linked to its hiring view', (jobs.match(/<li><a href="map\.html#[a-z]{2}\/hiring">/g) || []).length === 46);
t('the first-weeks line is drawn from the country’s own steps, with the way in first', /var seq = el\('ol', 'move-seq'\);/.test(pm) && /el\('span', 'move-k', 'The way in'\)/.test(pm));
t('new graphics keep the site’s square corners', !/border-radius:\s*(?!0)[\d.]+/.test(read('css/app.css').slice(read('css/app.css').indexOf('Shared chrome and components'))));

/* ------------------------------------------------------------- words --- */
const dict = {};
vm.runInNewContext(read('js/i18n-it.js'), { I18N: { add: (l, d) => Object.assign(dict, d) } });
const noIt = [...S.strings(), ...V.strings()].filter((k) => /[a-z]{3}/.test(k) && k !== 'MBA' && dict[k] === undefined && dict[k.replace(/&/g, '&amp;')] === undefined);
t('every string the shell and the figures print has Italian', noIt.length === 0, noIt.slice(0, 6).join(' | '));
const viewWords = [...viewsSrc[1].matchAll(/(?:nav|about): '((?:[^'\\]|\\.)+)'/g)].map((x) => x[1]);
const noIt2 = viewWords.filter((k) => dict[k] === undefined);
t(`every view’s name and description has Italian (${viewWords.length})`, viewWords.length >= 15 && noIt2.length === 0, noIt2.slice(0, 3).join(' | '));
['Open every part', 'Fold the optional parts', 'Read the whole guide on one page', 'In this guide', 'What do you need to know?', 'Show routes for', 'Every path', 'The way in', 'Not covered yet', 'Read the advice',
  'Where to go next', 'Pause', 'Play', 'Menu', 'Pick up where you left off', '{name} calculator: see your results'].forEach((k) => t('Italian for "' + k + '"', dict[k] !== undefined));
t('the Italian motto is the masthead’s', dict[S.MOTTO] !== undefined && read('js/intro.js').includes(dict[S.MOTTO]));

/* -------------------------------------------------------- provenance --- */
const fields = careers.fields.map((f) => 'careers/fields/' + f.slug + '.html');
const badNotes = fields.filter((f) => {
  const h = read(f);
  const notes = /<section id="research-notes"[\s\S]*?<\/section>/.exec(h);
  const s1 = /<section id="what-it-is"[\s\S]*?<\/section>/.exec(h);
  return !notes || !/Scope notes/.test(notes[0]) || !s1 || /Scope notes/.test(s1[0]) || !/href="#research-notes"/.test(s1[0]) || (h.match(/Scope notes/g) || []).length < 1;
});
t('every field page keeps its report’s scope notes whole, in “How this field was researched”, and section 1 points there', badNotes.length === 0, badNotes.join(', '));
const srcOpen = fields.filter((f) => !/<details class="disc cx-disc" id="sources"><summary><h2 class="disc-t"/.test(read(f)));
t('every field page’s sources are one labelled part, with its length', srcOpen.length === 0, srcOpen.join(', '));
const dupIds = [...fields, 'study.html', 'jobs.html', 'method.html', 'index.html'].filter((f) => { const ids = [...read(f).matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]); return new Set(ids).size !== ids.length; });
t('no page repeats an id', dupIds.length === 0, dupIds.join(', '));
t('folded parts on the field pages open for a link into them, on request and in print', /function arrive\(\)/.test(read('careers/assets/careers.js')) && /data-disc-all/.test(read('careers/assets/careers.js')) && /addEventListener\('beforeprint'/.test(read('careers/assets/careers.js')));
t('the method page says where each kind of working note lives', ['id="tags"', 'id="calculators"', 'id="directory"', 'id="careers"', 'id="jobs"', 'id="atlas"', 'id="library"', 'id="languages"', 'id="privacy"', 'id="credits"'].every((x) => read('method.html').includes(x)));
t('the research library is linked, folder by folder, and every linked file exists', [...read('method.html').matchAll(/href="(research\/[^"]+|CREDITS\.md)"/g)].every((x) => fs.existsSync(path.join(APP, x[1]))) && (read('method.html').match(/href="research\//g) || []).length >= 11);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);

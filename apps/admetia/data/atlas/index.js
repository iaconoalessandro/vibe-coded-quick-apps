/* ---------------------------------------------------------------------------
 * The Atlas: which countries a reader can select, and the vocabulary every
 * country record (data/atlas/<id>.js) is written in.
 *
 * Scope. A route is in scope only when Europe is its origin or its
 * destination: Europe → Europe, Europe → outside, outside → Europe. A route
 * between two non-European places (a US passport to Singapore) is outside
 * Admetia's scope, gets no content, and the page says so (inScope below).
 *
 * The 46 countries are fixed by the product brief: 25 in Europe (the UK,
 * Switzerland, Norway and Iceland count as Europe), 21 outside it, with Hong
 * Kong and Taiwan as separate entries. tests/atlas-test.js holds the list.
 *
 * Country records are loaded on demand by js/page-map.js, one file each, and
 * register themselves with ATLAS.add(). Every statement of fact in a record is
 * a claim: its text, one evidence tag, a source, and the date it was read.
 * Demand ratings point at the claims they rest on; a rating with nothing to
 * rest on is 'gap', and the page shows it as not rated.
 *
 * Evidence tags are the research library's (research/README.md):
 *   data                    official statistics, government portals, laws
 *   employer-stated         an employer's own page or release
 *   practitioner consensus  several independent specialists agree, or a
 *                           synthesis in the library resting on such sources
 *   anecdotal               forums and single blogs; a signal only
 * ------------------------------------------------------------------------- */

window.ATLAS = (function () {
  'use strict';

  function C(id, name, europe, extra) {
    var c = { id: id, name: name, europe: europe };
    if (extra) for (var k in extra) c[k] = extra[k];
    return c;
  }

  /* `marker`: too small to tap at world scale, so it always gets a marker
   * with a 44px hit area as well as its shape. */
  var countries = [
    C('PT', 'Portugal', true), C('ES', 'Spain', true), C('FR', 'France', true),
    C('MT', 'Malta', true, { marker: true }), C('IT', 'Italy', true), C('CH', 'Switzerland', true),
    C('IS', 'Iceland', true), C('IE', 'Ireland', true), C('GB', 'United Kingdom', true),
    C('DK', 'Denmark', true), C('BE', 'Belgium', true), C('LU', 'Luxembourg', true, { marker: true }),
    C('NL', 'Netherlands', true), C('AT', 'Austria', true), C('DE', 'Germany', true),
    C('NO', 'Norway', true), C('SE', 'Sweden', true), C('FI', 'Finland', true),
    C('PL', 'Poland', true), C('LT', 'Lithuania', true), C('EE', 'Estonia', true),
    C('CZ', 'Czech Republic', true), C('GR', 'Greece', true), C('RO', 'Romania', true),
    C('BG', 'Bulgaria', true),

    C('US', 'United States', false), C('CA', 'Canada', false), C('RU', 'Russia', false),
    C('TR', 'Turkey', false), C('IL', 'Israel', false), C('SA', 'Saudi Arabia', false),
    C('OM', 'Oman', false), C('QA', 'Qatar', false), C('KW', 'Kuwait', false, { marker: true }),
    C('AE', 'United Arab Emirates', false), C('MY', 'Malaysia', false), C('TH', 'Thailand', false),
    C('SG', 'Singapore', false, { marker: true }), C('VN', 'Vietnam', false), C('TW', 'Taiwan', false),
    C('CN', 'China', false), C('AU', 'Australia', false), C('NZ', 'New Zealand', false),
    C('JP', 'Japan', false), C('KR', 'South Korea', false), C('HK', 'Hong Kong', false, { marker: true })
  ];
  var byId = {};
  countries.forEach(function (c) { byId[c.id] = c; });

  /* The region a country's hubs are compared within, for the middle step of
   * a hub's standing (below). It is one of the map views: Russia is compared
   * within Europe; Turkey and Israel within the Middle East. */
  var regionOf = { US: 'americas', CA: 'americas', TR: 'mideast', IL: 'mideast', SA: 'mideast', OM: 'mideast',
    QA: 'mideast', KW: 'mideast', AE: 'mideast', RU: 'europe' };
  countries.forEach(function (c) { c.region = c.europe ? 'europe' : (regionOf[c.id] || 'asia'); });

  /* Map views: [west, south, east, north] in degrees. */
  var views = [
    { id: 'world', label: 'World', box: [-168, -48, 180, 76] },
    { id: 'europe', label: 'Europe', box: [-25, 34, 42, 71.5] },
    { id: 'americas', label: 'North America', box: [-168, 14, -50, 72] },
    { id: 'mideast', label: 'Middle East', box: [24, 12, 62, 44] },
    { id: 'asia', label: 'Asia-Pacific', box: [92, -48, 180, 48] }
  ];

  var roles = [
    { id: 'business', name: 'Business' },
    { id: 'finance', name: 'Finance' },
    { id: 'economics', name: 'Economics' },
    { id: 'accounting', name: 'Accounting' },
    { id: 'management', name: 'Management' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'it', name: 'IT' },
    { id: 'software', name: 'Software' },
    { id: 'datasci', name: 'Data Science' },
    { id: 'ai', name: 'AI' },
    { id: 'cs', name: 'Computer Science' },
    { id: 'bigdata', name: 'Big Data' }
  ];

  var financeRoles = [
    { id: 'ib', name: 'Investment banking' },
    { id: 'banking', name: 'Banking' },
    { id: 'am', name: 'Asset management' },
    { id: 'pe', name: 'Private equity' },
    { id: 'vc', name: 'Venture capital' },
    { id: 'corpfin', name: 'Corporate finance' },
    { id: 'risk', name: 'Risk management' },
    { id: 'finconsult', name: 'Financial consulting' }
  ];

  /* Qualitative, in this order. Each level is a judgement from cited claims,
   * never a measurement, and the page says so. */
  var levels = [
    { id: 'dominant', name: 'Dominant', mark: '●●●●', note: 'The family this hub is defined by: the claims show a leading national concentration of employers or jobs.' },
    { id: 'strong', name: 'Strong', mark: '●●●○', note: 'Many named employers hire this family here; one of the country’s main concentrations.' },
    { id: 'present', name: 'Present', mark: '●●○○', note: 'Named employers hire this family here, but it is not what the hub is known for.' },
    { id: 'marginal', name: 'Marginal', mark: '●○○○', note: 'Little sourced evidence of entry-level hiring in this family here.' }
  ];
  var GAP = 'gap';

  /* Standing: how a hub ranks in one role family at three scales — in its
   * country, in its region (Europe, North America, the Middle East or
   * Asia-Pacific) and in the world. Tallinn is the centre of Estonian
   * software (5) but one of many in Europe and minor beside Silicon Valley.
   * Each step is a judgement from cited claims, by this rubric:
   *   5  the leading centre at that scale (an official source or a published
   *      ranking puts it first)
   *   4  among the top handful (roughly the top five)
   *   3  a recognised secondary centre (roughly the top fifteen)
   *   2  present, but small at that scale
   *   1  negligible at that scale
   * A hub cannot stand higher in a wider area than in a narrower one, so the
   * three steps never rise. A 4 or 5 beyond the country needs a claim that
   * compares cities across that area: a ranking or a cross-country statistic. */
  var scales = [
    { id: 'nat', name: 'National' },
    { id: 'reg', name: 'Regional' },
    { id: 'world', name: 'World' }
  ];
  var steps = [
    { n: 5, name: 'Leading' },
    { n: 4, name: 'Major' },
    { n: 3, name: 'Notable' },
    { n: 2, name: 'Minor' },
    { n: 1, name: 'Negligible' }
  ];

  /* Metrics: four numbers a reader can compare hubs by, each with its own
   * source, tag and date (no sentence, so nothing to translate). Chosen
   * because together they size a market and say what a starting salary is
   * worth there: how many people live there, the output of the area (the
   * volume of business), what people earn and what a flat costs.
   *   pop   residents                       v in people
   *   gdp   output of the area              v in billions of `cur`
   *   wage  average gross monthly earnings  v in `cur` (basis: mean | median)
   *   rent  monthly rent, one-bedroom flat  v in `cur`
   * `area` says what the figure covers, so a city is not compared with a
   * metropolitan region by mistake. */
  var metrics = [
    { id: 'pop', name: 'Population', unit: 'people' },
    { id: 'gdp', name: 'Economic output (GDP)', unit: 'bn' },
    { id: 'wage', name: 'Average monthly pay (gross)', unit: 'cur' },
    { id: 'rent', name: 'Rent, one-bedroom flat', unit: 'cur' }
  ];
  var areas = [
    { id: 'city', name: 'city' },
    { id: 'metro', name: 'metropolitan area' },
    { id: 'region', name: 'region' }
  ];

  var tags = ['data', 'employer-stated', 'practitioner consensus', 'anecdotal'];

  var passports = [
    { id: 'eu', label: 'EU / EEA / Swiss', short: 'EU/EEA/CH', europe: true },
    { id: 'uk', label: 'UK', short: 'UK', europe: true },
    { id: 'us', label: 'US', short: 'US', europe: false },
    { id: 'other', label: 'Another passport', short: 'Other', europe: false }
  ];
  var passportById = {};
  passports.forEach(function (p) { passportById[p.id] = p; });

  /* The scope rule. Every passport may look at a European country; only a
   * European passport may look at a route to a country outside Europe. A US
   * passport looking at the US is at home, not on a route. */
  function inScope(passportId, countryId) {
    var p = passportById[passportId], c = byId[countryId];
    if (!p || !c) return false;
    if (c.europe) return true;
    return p.europe;
  }
  function isHome(passportId, countryId) {
    return (passportId === 'uk' && countryId === 'GB') || (passportId === 'us' && countryId === 'US');
  }

  /* Where graduates of each family commonly end up besides the obvious
   * door. A synthesis of the library's career files, not a measurement. */
  var adjacent = {
    business: ['management', 'marketing', 'logistics'],
    finance: ['accounting', 'economics', 'analytics'],
    economics: ['finance', 'analytics', 'datasci'],
    accounting: ['finance', 'management', 'analytics'],
    management: ['business', 'logistics', 'marketing'],
    marketing: ['analytics', 'business', 'management'],
    logistics: ['management', 'analytics', 'business'],
    analytics: ['datasci', 'finance', 'marketing'],
    it: ['software', 'datasci', 'bigdata'],
    software: ['ai', 'bigdata', 'it'],
    datasci: ['ai', 'analytics', 'bigdata'],
    ai: ['datasci', 'software', 'cs'],
    cs: ['software', 'ai', 'it'],
    bigdata: ['datasci', 'software', 'analytics']
  };
  var adjacentBasis = {
    t: 'Adjacent paths are the library’s synthesis of where graduates of each family move: finance into accounting, controlling and risk; business graduates into analytics; computing graduates between software, data and AI roles.',
    tag: 'practitioner consensus',
    src: 'research/careers/tech-data-and-ai.md',
    by: 'Admetia research library: careers/tech-data-and-ai.md §8, careers/accounting-and-corporate.md, careers/finance.md',
    seen: '2026-10-02'
  };

  var records = {};
  function add(rec) { records[rec.id] = rec; }
  function file(id) { return 'data/atlas/' + String(id).toLowerCase() + '.js'; }

  /* Visas and permits: one file per country (data/atlas/visas/<id>.js),
   * drawn from the country's folder in research/visas_immigration/ (guide,
   * source register, open questions). Each route is for a situation and the
   * passports it applies to, with a verdict; every sentence, figure and trap
   * cites ids of the country's source register (DE-SRC-21), whose titles and
   * links tools/visas-sources.js writes at the foot of the file. Text comes
   * in pairs, [English, Italian], because it is the country's own research,
   * not shared vocabulary. */
  var situations = [
    { id: 'study', name: 'Studying' },
    { id: 'intern', name: 'Internship' },
    { id: 'search', name: 'Job search after graduating' },
    { id: 'work', name: 'First skilled job' },
    { id: 'research', name: 'PhD and research' },
    { id: 'whv', name: 'Working holiday' },
    { id: 'short', name: 'Visits up to 90 days' },
    { id: 'stay', name: 'Staying for good' },
    { id: 'tax', name: 'Tax relief for newcomers' }
  ];
  var verdicts = [
    { id: 'free', name: 'No permit needed', note: 'Free movement: register where you live, then study and work like a local.' },
    { id: 'open', name: 'Open to you', note: 'A route you can apply for yourself, if you meet its conditions.' },
    { id: 'sponsor', name: 'Needs a sponsor', note: 'Only with an employer, university or host institution applying for you or backing you.' },
    { id: 'limited', name: 'Limited', note: 'Quotas, ballots, points, age limits or only some nationalities.' },
    { id: 'closed', name: 'Not available', note: 'No route for this passport.' }
  ];
  var openStates = [
    { id: 'open', name: 'Unsettled' },
    { id: 'watch', name: 'Being watched' },
    { id: 'pending', name: 'Change pending' }
  ];
  /* First weeks: the same seven steps on every country page, in the order
   * most people meet them. A visa file's arrival list answers each step for
   * the passports it applies to, from the same research and register as the
   * routes; a step the research has not covered for a passport is marked
   * none, so the page says so instead of leaving a hole. */
  var arrivalSteps = [
    { id: 'before', name: 'Before you leave' },
    { id: 'address', name: 'Register where you live' },
    { id: 'card', name: 'Your residence document' },
    { id: 'number', name: 'Personal and tax number' },
    { id: 'health', name: 'Health cover' },
    { id: 'bank', name: 'Bank account and digital ID' },
    { id: 'keep', name: 'Keeping your status' }
  ];
  var visas = {};
  function addVisas(v) { visas[v.id] = v; }
  function visaSources(id, map) { if (visas[id]) visas[id].sources = map; }
  function visaFile(id) { return 'data/atlas/visas/' + String(id).toLowerCase() + '.js'; }

  /* How hiring works: one file per country (data/atlas/entry/<id>.js). There
   * are always many ways into a job; this is the one most graduates in that
   * country actually take, in order of how many people each carries, and
   * what it means for someone used to "apply on LinkedIn from abroad and
   * hope". Then what a downturn does to it, where a field works differently,
   * the schools and people that open doors, where employers meet students,
   * and the customs of applying. Text comes in [English, Italian, ids]
   * triples like the visa files; ids point at the file's own sources, or
   * are 'ours' where the line is Admetia's own reading and no source was
   * read, which the page says. A part with nothing reliable is left out. */
  /* Two groups, as the site's calculators split them: business (business,
   * economics, finance, accounting, marketing) and computing (IT, software,
   * data, AI). A country page shows each group as one row. */
  var entryGroups = [
    { id: 'biz', name: 'Business fields' },
    { id: 'it', name: 'Computing fields' }
  ];
  var entryFields = [
    { id: 'finance', g: 'biz', name: 'Finance and banking' },
    { id: 'accounting', g: 'biz', name: 'Accounting and audit' },
    { id: 'consulting', g: 'biz', name: 'Consulting' },
    { id: 'marketing', g: 'biz', name: 'Marketing and consumer goods' },
    { id: 'business', g: 'biz', name: 'Corporate and industry' },
    { id: 'public', g: 'biz', name: 'Public sector and international bodies' },
    { id: 'tech', g: 'it', name: 'Software and IT' },
    { id: 'ai', g: 'it', name: 'Data and AI' },
    { id: 'cyber', g: 'it', name: 'Cybersecurity' }
  ];
  /* The ways in. Every route in a country file is one of these, so pages
   * compare and the planner can filter by them. */
  var entryRoutes = [
    { id: 'scheme', name: 'Graduate scheme or trainee programme' },
    { id: 'direct', name: 'Direct application' },
    { id: 'intern', name: 'Internship that turns into an offer' },
    { id: 'dual', name: 'Dual study or working-student job' },
    { id: 'apprentice', name: 'Apprenticeship or alternance' },
    { id: 'campus', name: 'Campus recruiting' },
    { id: 'bulk', name: 'National new-graduate hiring cycle' },
    { id: 'public', name: 'Public-sector exam or competition' },
    { id: 'agency', name: 'Agency or headhunter' },
    { id: 'network', name: 'Referral and networks' },
    { id: 'startup', name: 'Start-up hiring' },
    { id: 'freelance', name: 'Contract or freelance first' },
    { id: 'transfer', name: 'Company transfer' }
  ];
  /* What the reader is trying to do. */
  var entryPaths = [
    { id: 'first', name: 'First job' },
    { id: 'intern', name: 'Internship to job' },
    { id: 'exp', name: 'Experienced hire' }
  ];
  /* What a ranking of routes rests on. */
  var entryBasis = [
    { id: 'data', name: 'Statistics' },
    { id: 'consensus', name: 'Practitioner consensus' },
    { id: 'anecdotal', name: 'Anecdotal' }
  ];
  /* Text rows every country has, in the order shown. */
  var entryRows = [
    { id: 'process', name: 'Selection process' },
    { id: 'offer', name: 'Offer and contract' },
    { id: 'sponsor', name: 'Sponsorship in practice' },
    { id: 'where', name: 'Where to apply' },
    { id: 'mistakes', name: 'Common mistakes' }
  ];
  /* Verdict rows, in two groups. Each has a short verdict (a chip) and the
   * evidence behind it; the groups are headed on the page. */
  var entryCustomGroups = [
    { id: 'market', name: 'The market' },
    { id: 'apply', name: 'How to apply' }
  ];
  var entryCustoms = [
    { id: 'season', g: 'market', name: 'Hiring calendar', values: [
      { id: 'fixed', name: 'One national season' },
      { id: 'cyclical', name: 'Seasonal peaks' },
      { id: 'rolling', name: 'Rolling all year' }
    ] },
    { id: 'masters', g: 'market', name: 'Is a master’s expected', values: [
      { id: 'expected', name: 'Expected' },
      { id: 'helpful', name: 'Helpful' },
      { id: 'irrelevant', name: 'Not decisive' },
      { id: 'handicap', name: 'Can count against you' }
    ] },
    { id: 'degrees', g: 'market', name: 'Foreign degrees', values: [
      { id: 'free', name: 'Accepted without paperwork' },
      { id: 'eval', name: 'Evaluation often asked' },
      { id: 'regulated', name: 'Regulated professions need recognition' }
    ] },
    { id: 'brand', g: 'market', name: 'School name', values: [
      { id: 'high', name: 'Matters a lot' },
      { id: 'some', name: 'Matters somewhat' },
      { id: 'low', name: 'School-blind' }
    ] },
    { id: 'dual', g: 'market', name: 'Apprenticeship and dual-study culture', values: [
      { id: 'strong', name: 'Central' },
      { id: 'some', name: 'Present' },
      { id: 'little', name: 'Marginal' }
    ] },
    { id: 'publicw', g: 'market', name: 'Public-sector weight', values: [
      { id: 'high', name: 'Large' },
      { id: 'mid', name: 'Medium' },
      { id: 'low', name: 'Small' }
    ] },
    { id: 'sponsorr', g: 'market', name: 'Employers who sponsor visas', values: [
      { id: 'ready', name: 'Common' },
      { id: 'some', name: 'Some, mostly large firms' },
      { id: 'rare', name: 'Rare' }
    ] },
    { id: 'photo', g: 'apply', name: 'Photo on the CV', values: [
      { id: 'expected', name: 'Expected' },
      { id: 'common', name: 'Common' },
      { id: 'optional', name: 'Up to you' },
      { id: 'avoid', name: 'Leave it off' }
    ] },
    { id: 'cv', g: 'apply', name: 'CV length', values: [
      { id: 'one', name: 'One page' },
      { id: 'two', name: 'Up to two pages' },
      { id: 'long', name: 'Longer is normal' }
    ] },
    { id: 'letter', g: 'apply', name: 'Cover letter', values: [
      { id: 'expected', name: 'Expected' },
      { id: 'optional', name: 'Optional' },
      { id: 'skip', name: 'Rarely read' }
    ] },
    { id: 'refs', g: 'apply', name: 'References', values: [
      { id: 'required', name: 'Asked up front' },
      { id: 'later', name: 'On request, later' },
      { id: 'none', name: 'Not part of it' }
    ] },
    { id: 'docs', g: 'apply', name: 'Transcripts and certificates', values: [
      { id: 'certified', name: 'Certified or translated copies' },
      { id: 'copies', name: 'Plain copies' },
      { id: 'none', name: 'Rarely asked' }
    ] },
    { id: 'salary', g: 'apply', name: 'Salary expectation in the application', values: [
      { id: 'asked', name: 'Asked for' },
      { id: 'later', name: 'Raised later' },
      { id: 'never', name: 'Not stated' }
    ] },
    { id: 'check', g: 'apply', name: 'Background and reference checks', values: [
      { id: 'routine', name: 'Routine' },
      { id: 'some', name: 'Some employers' },
      { id: 'rare', name: 'Rare' }
    ] },
    { id: 'contact', g: 'apply', name: 'How doors open', values: [
      { id: 'people', name: 'Mostly through people' },
      { id: 'mixed', name: 'People and applications' },
      { id: 'open', name: 'Applications work' }
    ] },
    { id: 'abroad', g: 'apply', name: 'Applying from abroad', values: [
      { id: 'there', name: 'Be there first' },
      { id: 'hard', name: 'Hard' },
      { id: 'workable', name: 'Workable' }
    ] },
    { id: 'language', g: 'apply', name: 'Language', values: [
      { id: 'local', name: 'Local language needed' },
      { id: 'mostly', name: 'Local language for most roles' },
      { id: 'english', name: 'English is enough for many roles' }
    ] }
  ];
  /* Language at work, by field: the verdict on each line. */
  var entryLang = [
    { id: 'english', name: 'English is enough' },
    { id: 'bilingual', name: 'Both languages' },
    { id: 'local', name: 'Local language required' }
  ];
  /* Whether an employer's programme takes graduates from abroad. */
  var entryIntl = [
    { id: 'yes', name: 'Takes international graduates' },
    { id: 'eu', name: 'EU/EEA citizens only' },
    { id: 'local', name: 'Local degree or residents' },
    { id: 'unknown', name: 'Not stated' }
  ];
  /* The rows every country's Working there block is held to: it is the
   * block's fixed set, so a missing one is reported. Pay and cost rows live
   * elsewhere (Life there, Entry pay) and are not in this list. */
  var workRows = ['Language', 'Recruiting calendar', 'Where demand is now', 'Graduate labour market'];
  var entries = {};
  function addEntry(e) { entries[e.id] = e; }
  function entryFile(id) { return 'data/atlas/entry/' + String(id).toLowerCase() + '.js'; }

  return {
    countries: countries,
    byId: byId,
    views: views,
    roles: roles,
    financeRoles: financeRoles,
    levels: levels,
    GAP: GAP,
    scales: scales,
    steps: steps,
    metrics: metrics,
    areas: areas,
    tags: tags,
    passports: passports,
    passportById: passportById,
    inScope: inScope,
    isHome: isHome,
    adjacent: adjacent,
    adjacentBasis: adjacentBasis,
    records: records,
    add: add,
    file: file,
    situations: situations,
    verdicts: verdicts,
    openStates: openStates,
    arrivalSteps: arrivalSteps,
    visas: visas,
    addVisas: addVisas,
    visaSources: visaSources,
    visaFile: visaFile,
    entryGroups: entryGroups,
    entryFields: entryFields,
    entryCustoms: entryCustoms,
    entryCustomGroups: entryCustomGroups,
    entryRoutes: entryRoutes,
    entryPaths: entryPaths,
    entryBasis: entryBasis,
    entryRows: entryRows,
    entryLang: entryLang,
    entryIntl: entryIntl,
    workRows: workRows,
    entries: entries,
    addEntry: addEntry,
    entryFile: entryFile
  };
}());

if (window.I18N) I18N.add('it', {
  'Studying': 'Studiare', 'Internship': 'Tirocinio', 'Job search after graduating': 'Cercare lavoro dopo la laurea',
  'First skilled job': 'Primo lavoro qualificato', 'PhD and research': 'Dottorato e ricerca', 'Working holiday': 'Vacanza-lavoro',
  'Visits up to 90 days': 'Soggiorni fino a 90 giorni', 'Staying for good': 'Restare a lungo', 'Tax relief for newcomers': 'Agevolazioni fiscali per chi arriva',
  'No permit needed': 'Nessun permesso', 'Free movement: register where you live, then study and work like a local.':
    'Libera circolazione: ti registri dove vivi, poi studi e lavori come chi è del posto.',
  'Open to you': 'Aperto a te', 'A route you can apply for yourself, if you meet its conditions.':
    'Un percorso a cui puoi fare domanda da solo, se ne soddisfi le condizioni.',
  'Needs a sponsor': 'Serve uno sponsor', 'Only with an employer, university or host institution applying for you or backing you.':
    'Solo con un datore di lavoro, un’università o un ente ospitante che fa domanda per te o ti sostiene.',
  'Limited': 'Limitato', 'Quotas, ballots, points, age limits or only some nationalities.':
    'Quote, sorteggi, punteggi, limiti d’età o solo alcune nazionalità.',
  'Not available': 'Non disponibile', 'No route for this passport.': 'Nessun percorso per questo passaporto.',
  'Unsettled': 'Non chiarito', 'Being watched': 'Sotto osservazione', 'Change pending': 'Modifica in arrivo',
  'Before you leave': 'Prima di partire', 'Register where you live': 'Registrare la residenza',
  'Your residence document': 'Il documento di soggiorno', 'Personal and tax number': 'Codice personale e fiscale',
  'Health cover': 'Copertura sanitaria', 'Bank account and digital ID': 'Conto in banca e identità digitale',
  'Keeping your status': 'Mantenere lo status',
  'Finance and banking': 'Finanza e banche', 'Consulting': 'Consulenza',
  'Corporate and industry': 'Aziende e industria', 'Accounting and audit': 'Contabilità e revisione',
  'Marketing and consumer goods': 'Marketing e beni di consumo', 'Business fields': 'Settori business', 'Computing fields': 'Settori informatici',
  'Software and IT': 'Software e IT',
  'Data and AI': 'Dati e IA', 'Cybersecurity': 'Cybersicurezza',
  'Public sector and international bodies': 'Settore pubblico e organismi internazionali',
  'Photo on the CV': 'Foto nel CV', 'Expected': 'Attesa', 'Common': 'Diffusa', 'Up to you': 'A tua scelta', 'Leave it off': 'Meglio non metterla',
  'How doors open': 'Come si aprono le porte', 'Mostly through people': 'Soprattutto tramite persone',
  'People and applications': 'Persone e candidature', 'Applications work': 'Le candidature funzionano',
  'Applying from abroad': 'Candidarsi dall’estero', 'Be there first': 'Prima bisogna esserci', 'Hard': 'Difficile', 'Workable': 'Fattibile',
  'Local language needed': 'Serve la lingua locale', 'Local language for most roles': 'Lingua locale per la maggior parte dei ruoli',
  'English is enough for many roles': 'L’inglese basta per molti ruoli',
  'Portugal': 'Portogallo', 'Spain': 'Spagna', 'France': 'Francia', 'Malta': 'Malta', 'Italy': 'Italia',
  'Switzerland': 'Svizzera', 'Iceland': 'Islanda', 'Ireland': 'Irlanda', 'United Kingdom': 'Regno Unito',
  'Denmark': 'Danimarca', 'Belgium': 'Belgio', 'Luxembourg': 'Lussemburgo', 'Netherlands': 'Paesi Bassi',
  'Austria': 'Austria', 'Germany': 'Germania', 'Norway': 'Norvegia', 'Sweden': 'Svezia', 'Finland': 'Finlandia',
  'Poland': 'Polonia', 'Lithuania': 'Lituania', 'Estonia': 'Estonia', 'Czech Republic': 'Repubblica Ceca',
  'Greece': 'Grecia', 'Romania': 'Romania', 'Bulgaria': 'Bulgaria',
  'United States': 'Stati Uniti', 'Canada': 'Canada', 'Russia': 'Russia', 'Turkey': 'Turchia', 'Israel': 'Israele',
  'Saudi Arabia': 'Arabia Saudita', 'Oman': 'Oman', 'Qatar': 'Qatar', 'Kuwait': 'Kuwait',
  'United Arab Emirates': 'Emirati Arabi Uniti', 'Malaysia': 'Malaysia', 'Thailand': 'Thailandia',
  'Singapore': 'Singapore', 'Vietnam': 'Vietnam', 'Taiwan': 'Taiwan', 'China': 'Cina', 'Australia': 'Australia',
  'New Zealand': 'Nuova Zelanda', 'Japan': 'Giappone', 'South Korea': 'Corea del Sud', 'Hong Kong': 'Hong Kong',

  'World': 'Mondo', 'Europe': 'Europa', 'North America': 'Nord America', 'Middle East': 'Medio Oriente',
  'Asia-Pacific': 'Asia-Pacifico',

  'Business': 'Business', 'Finance': 'Finanza', 'Economics': 'Economia', 'Accounting': 'Contabilità',
  'Management': 'Management', 'Marketing': 'Marketing', 'Logistics': 'Logistica', 'Analytics': 'Analytics',
  'IT': 'IT', 'Software': 'Software', 'Data Science': 'Data science', 'AI': 'IA',
  'Computer Science': 'Informatica', 'Big Data': 'Big data',

  'Investment banking': 'Investment banking', 'Banking': 'Banca', 'Asset management': 'Asset management',
  'Private equity': 'Private equity', 'Venture capital': 'Venture capital', 'Corporate finance': 'Finanza d’impresa',
  'Risk management': 'Risk management', 'Financial consulting': 'Consulenza finanziaria',

  'National': 'Nazionale', 'Regional': 'Regionale', 'Leading': 'Al vertice', 'Major': 'Di primo piano',
  'Notable': 'Di rilievo', 'Minor': 'Minore', 'Negligible': 'Trascurabile',
  'Population': 'Popolazione', 'Economic output (GDP)': 'Prodotto economico (PIL)',
  'Average monthly pay (gross)': 'Retribuzione media mensile (lorda)', 'Rent, one-bedroom flat': 'Affitto, bilocale',
  'city': 'città', 'metropolitan area': 'area metropolitana', 'region': 'regione',

  'Dominant': 'Dominante', 'Strong': 'Forte', 'Present': 'Presente', 'Marginal': 'Marginale',
  'The family this hub is defined by: the claims show a leading national concentration of employers or jobs.':
    'La famiglia che definisce questo polo: le fonti indicano la principale concentrazione nazionale di datori di lavoro o di posti.',
  'Many named employers hire this family here; one of the country’s main concentrations.':
    'Molti datori di lavoro citati assumono qui in questa famiglia; è una delle concentrazioni principali del paese.',
  'Named employers hire this family here, but it is not what the hub is known for.':
    'Qui assumono datori di lavoro citati, ma non è ciò per cui il polo è noto.',
  'Little sourced evidence of entry-level hiring in this family here.':
    'Poche prove documentate di assunzioni a livello junior in questa famiglia.',

  'EU / EEA / Swiss': 'UE / SEE / Svizzera', 'UK': 'Regno Unito', 'US': 'Stati Uniti', 'Another passport': 'Altro passaporto',
  'Other': 'Altro',

  /* Labels and sector names every record uses; a record may repeat them. */
  'Entering': 'Ingresso', 'Studying': 'Studiare', 'Working': 'Lavorare', 'Work while you study': 'Lavorare durante gli studi',
  'After graduating': 'Dopo la laurea', 'Living and working': 'Vivere e lavorare', 'Staying for good': 'Restare stabilmente',
  'Language': 'Lingua', 'Recruiting calendar': 'Calendario delle selezioni', 'Where demand is now': 'Dove si concentra la domanda oggi',
  'Tax and net pay': 'Tasse e stipendio netto', 'Register your address': 'Registrare la residenza',
  'Health insurance while you study': 'Assicurazione sanitaria durante gli studi', 'Student residence permit': 'Permesso di soggiorno per studio',
  'Government': 'Pubblica amministrazione', 'Technology': 'Tecnologia', 'Insurance': 'Assicurazioni', 'Software and ICT': 'Software e ICT',
  'Energy': 'Energia', 'Media': 'Media', 'Automotive': 'Automotive', 'Aviation': 'Aviazione', 'Semiconductors': 'Semiconduttori',
  'Chemicals': 'Chimica', 'Consumer goods': 'Beni di consumo', 'Tourism': 'Turismo', 'Manufacturing': 'Manifattura',
  'Retail': 'Commercio al dettaglio', 'Telecoms': 'Telecomunicazioni', 'Pharmaceuticals': 'Farmaceutica', 'Shipping': 'Trasporto marittimo',
  'Real estate': 'Immobiliare', 'Professional services': 'Servizi professionali', 'Higher education': 'Istruzione universitaria',
  'Defence': 'Difesa', 'Agriculture and food': 'Agricoltura e alimentare', 'Gaming': 'Videogiochi', 'Luxury and fashion': 'Lusso e moda',
  'Start-ups': 'Start-up', 'Fintech': 'Fintech', 'Cybersecurity': 'Cybersicurezza', 'Public sector': 'Settore pubblico',

  'Adjacent paths are the library’s synthesis of where graduates of each family move: finance into accounting, controlling and risk; business graduates into analytics; computing graduates between software, data and AI roles.':
    'I percorsi affini sono la sintesi della biblioteca di ricerca su dove si spostano i laureati di ogni famiglia: dalla finanza alla contabilità, al controllo di gestione e al rischio; dal business all’analytics; in informatica tra software, dati e IA.'
});

/* Italian for the hiring vocabulary: routes, paths, verdict rows, table headings. */
if (window.I18N) I18N.add('it', {
  'Graduate scheme or trainee programme': 'Programma per laureati o trainee', 'Direct application': 'Candidatura diretta',
  'Internship that turns into an offer': 'Tirocinio che diventa un’offerta', 'Dual study or working-student job': 'Studio duale o lavoro da studente',
  'Apprenticeship or alternance': 'Apprendistato o alternanza', 'Campus recruiting': 'Selezione nelle università',
  'National new-graduate hiring cycle': 'Ciclo nazionale di assunzione dei neolaureati', 'Public-sector exam or competition': 'Concorso o esame nel settore pubblico',
  'Agency or headhunter': 'Agenzia o cacciatore di teste', 'Referral and networks': 'Segnalazioni e reti di contatti', 'Start-up hiring': 'Assunzioni nelle start-up',
  'Contract or freelance first': 'Prima a contratto o freelance', 'Company transfer': 'Trasferimento interno',
  'First job': 'Primo lavoro', 'Internship to job': 'Dal tirocinio al lavoro', 'Experienced hire': 'Assunzione con esperienza',
  'Statistics': 'Statistiche', 'Practitioner consensus': 'Consenso degli addetti ai lavori', 'Anecdotal': 'Aneddotico',
  'Ranked on: {b}': 'Classifica basata su: {b}',
  'Selection process': 'Processo di selezione', 'Offer and contract': 'Offerta e contratto', 'Sponsorship in practice': 'Sponsorizzazione nella pratica',
  'Where to apply': 'Dove candidarsi', 'Common mistakes': 'Errori comuni', 'Employers with programmes': 'Datori di lavoro con programmi',
  'The market': 'Il mercato', 'Language at work': 'Lingua sul lavoro', 'Graduate outcomes': 'Esiti dei laureati', 'In numbers': 'In cifre',
  'What the numbers do not show': 'Ciò che le cifre non mostrano',
  'Hiring calendar': 'Calendario delle assunzioni', 'One national season': 'Un’unica stagione nazionale', 'Seasonal peaks': 'Picchi stagionali', 'Rolling all year': 'Tutto l’anno',
  'Is a master’s expected': 'La magistrale è attesa?', 'Helpful': 'Utile', 'Not decisive': 'Non decisiva', 'Can count against you': 'Può essere uno svantaggio',
  'Foreign degrees': 'Titoli stranieri', 'Accepted without paperwork': 'Accettati senza pratiche', 'Evaluation often asked': 'Spesso serve una valutazione',
  'Regulated professions need recognition': 'Le professioni regolamentate richiedono il riconoscimento',
  'School name': 'Il nome dell’università', 'Matters a lot': 'Conta molto', 'Matters somewhat': 'Conta in parte', 'School-blind': 'Non conta',
  'Apprenticeship and dual-study culture': 'Cultura di apprendistato e studio duale', 'Central': 'Centrale', 'Present': 'Presente', 'Marginal': 'Marginale',
  'Public-sector weight': 'Peso del settore pubblico', 'Large': 'Grande', 'Medium': 'Medio', 'Small': 'Piccolo',
  'Employers who sponsor visas': 'Datori di lavoro che sponsorizzano il visto', 'Some, mostly large firms': 'Alcuni, soprattutto grandi aziende', 'Rare': 'Rari',
  'CV length': 'Lunghezza del CV', 'One page': 'Una pagina', 'Up to two pages': 'Fino a due pagine', 'Longer is normal': 'Più lungo è normale',
  'Cover letter': 'Lettera di presentazione', 'Optional': 'Facoltativa', 'Rarely read': 'Letta di rado',
  'References': 'Referenze', 'Asked up front': 'Chieste subito', 'On request, later': 'Su richiesta, più avanti', 'Not part of it': 'Non previste',
  'Transcripts and certificates': 'Trascrizioni e certificati', 'Certified or translated copies': 'Copie certificate o tradotte', 'Plain copies': 'Copie semplici', 'Rarely asked': 'Chiesti di rado',
  'Salary expectation in the application': 'Aspettativa di stipendio nella candidatura', 'Asked for': 'Richiesta', 'Raised later': 'Si discute più avanti', 'Not stated': 'Non indicata',
  'Background and reference checks': 'Controlli sui precedenti e sulle referenze', 'Routine': 'Di routine', 'Some employers': 'Alcuni datori di lavoro',
  'English is enough': 'Basta l’inglese', 'Both languages': 'Entrambe le lingue', 'Local language required': 'Serve la lingua locale',
  'Takes international graduates': 'Accetta laureati dall’estero', 'EU/EEA citizens only': 'Solo cittadini UE/SEE', 'Local degree or residents': 'Titolo locale o residenti',
  'Graduate labour market': 'Mercato del lavoro dei laureati', 'Recruiting calendar': 'Calendario delle selezioni', 'Where demand is now': 'Dove c’è domanda ora',
  'Programme': 'Programma', 'Field': 'Settore', 'Intake': 'Posti', 'Applications open': 'Candidature aperte', 'Languages': 'Lingue', 'International graduates': 'Laureati dall’estero',
  'about {n} a year': 'circa {n} l’anno', 'not stated': 'non indicato', '{n} months': '{n} mesi',
  'Measure': 'Misura', 'Figure': 'Dato', 'What it counts': 'Che cosa conta',
  'Recent graduates in work': 'Neolaureati che lavorano', 'Graduate unemployment': 'Disoccupazione dei laureati', 'Youth unemployment (15-24)': 'Disoccupazione giovanile (15-24 anni)',
  'Graduates in jobs below their degree': 'Laureati in lavori sotto il loro titolo', 'Foreign-born graduates in work': 'Laureati nati all’estero che lavorano',
  'Months to a first job': 'Mesi per il primo lavoro', 'Interns kept on': 'Tirocinanti confermati',
  'Employment rate of people aged 20-34 with a tertiary degree who finished 1 to 3 years ago and are no longer studying':
    'Tasso di occupazione di chi ha 20-34 anni, ha una laurea e ha finito da 1 a 3 anni fa e non studia più',
  'Unemployment rate of people aged 25-64 with a tertiary degree': 'Tasso di disoccupazione di chi ha 25-64 anni e una laurea',
  'Unemployment rate of people aged 15-24 (share of the labour force)': 'Tasso di disoccupazione di chi ha 15-24 anni (quota delle forze di lavoro)',
  'Share of employed people aged 25-34 with a tertiary degree who work in a job that does not require one': 'Quota di occupati di 25-34 anni con una laurea che fanno un lavoro per cui non serve',
  'Employment rate of people aged 25-64 with a tertiary degree who were born abroad': 'Tasso di occupazione di chi ha 25-64 anni, una laurea ed è nato all’estero',
  'This country is not in Eurostat’s survey: each figure has its own definition and year, so do not set it beside another country’s.':
    'Questo paese non è nell’indagine Eurostat: ogni dato ha una propria definizione e un proprio anno, quindi non confrontarlo con quello di un altro paese.',
  'Eurostat’s labour force survey, the same definitions for every country in it, so these figures can be compared with each other. Recent graduates are people with a degree who finished 1 to 3 years ago.':
    'Indagine Eurostat sulle forze di lavoro: stesse definizioni per tutti i paesi, quindi questi dati si possono confrontare. I neolaureati sono persone con una laurea che hanno finito da 1 a 3 anni fa.'
});

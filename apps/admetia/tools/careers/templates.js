/* ---------------------------------------------------------------------------
 * Application toolkit: four one-column CV templates and four motivation
 * letter skeletons, each written once here and rendered three ways:
 *
 *   careers/templates/<slug>.tex    LaTeX (pdfLaTeX; opens in Overleaf)
 *   careers/templates/<slug>.docx   Word, built by ./docx.js
 *   careers/toolkit.html            an HTML preview and the guidance
 *
 * The templates are Admetia's own layouts filled with [placeholders]. What
 * they follow is research, and every school or country rule the page states
 * is quoted from research/ and checked at build time (SOURCES below): the
 * build stops if a quoted passage is no longer in its file.
 * ------------------------------------------------------------------------- */

'use strict';

/* --------------------------------------------------------------- sources */

/* Passages the toolkit page quotes or relies on: [file, exact text]. */
const Q = {
  ukOnePage: ['getting-in/breaking-in.md', 'For UK and US finance and consulting, use one page, no photo, grades visible.'],
  europass: ['getting-in/breaking-in.md', 'the EU\'s own Europass template recommends a professional photo (Europass, 2026) [employer-stated, EU body]'],
  germany: ['getting-in/breaking-in.md', 'German applications have traditionally carried a photo'],
  itfr: ['getting-in/breaking-in.md', 'I could not verify Italian or French norms from a primary source.'],
  gpa: ['getting-in/breaking-in.md', 'omitting a GPA is read as a very bad one'],
  imperialPages: ['getting-in/breaking-in.md', 'Imperial\'s UK guidance says a good CV should "fill one or two whole pages"'],
  photoBias: ['getting-in/breaking-in.md', 'A photo is therefore not a neutral formality: it adds information that employers can and do use.'],
  ats1: ['getting-in/applications-and-interviews.md', 'a single-column CV with standard headings (Experience, Education, Skills), contact details in the body rather than a header or footer, and no tables or text boxes is the safe default'],
  ats2: ['getting-in/applications-and-interviews.md', 'Automatic rejection comes from knockout questions, not from a hidden CV score.'],
  dates: ['getting-in/applications-and-interviews.md', 'Give dates as month and year'],
  escpCv: ['getting-in/applications-and-interviews.md', 'CV up to two pages with month and year for every role; "list only travels that lasted longer than seven days"'],
  hecCv: ['getting-in/applications-and-interviews.md', 'Programme-specific essays, length not stated on the page I read; CV limited to one page'],
  lbsCv: ['getting-in/applications-and-interviews.md', 'One-page CV (template preferred); one reference required, professional preferred, academic acceptable'],
  hsgCv: ['getting-in/applications-and-interviews.md', 'CV on the SIM template, in English; two named contacts on the CV, one academic and one professional'],
  credits: ['getting-in/admissions.md', 'other degree classes must show a minimum number of CFU in named disciplinary sectors (SSD), for example "at least 24 CFU" in listed sectors for some programmes'],
  creditsGate: ['getting-in/admissions.md', 'This is a hard gate that a test score does not waive.'],
  referees: ['getting-in/applications-and-interviews.md', 'HEC wants an academic referee; LBS prefers a professional one; St. Gallen wants one of each on the CV; Esade accepts either.'],
  /* letters */
  bocconi: ['getting-in/applications-and-interviews.md', 'Motivation letter to programme directors, "around 1 to 2 pages (indicatively no more than 4000 characters)" (search summary of Bocconi admissions page)'],
  bocconiSel: ['getting-in/applications-and-interviews.md', 'Bocconi states: "The selection process is based on the admission test performance, your GPA, your \'Dossier\' and your Motivation"'],
  imperialQ1: ['getting-in/applications-and-interviews.md', 'Q1 "Why do you want to study at Imperial Business School and how will you contribute to our community?" 3,500 characters (~500 words)'],
  imperialQ2: ['getting-in/applications-and-interviews.md', 'Q2 describe a time you embodied an Imperial value (Respect, Collaboration, Integrity, Innovation, Excellence) and its impact, 2,500 characters (~350 words)'],
  imperialAdvice: ['getting-in/applications-and-interviews.md', 'Admissions blog: "we want to hear about you, not us"; do not paste statements from other applications and "use the correct programme title"'],
  lse: ['getting-in/applications-and-interviews.md', '"Statement of academic purpose", typically 1,000-1,500 words, programme-specific'],
  lseAvoid: ['getting-in/applications-and-interviews.md', '"avoid general statements about LSE\'s performance in global rankings, and generic statements about London being a global/cosmopolitan centre of excellence"'],
  escp: ['getting-in/applications-and-interviews.md', 'a one-page motivation letter answering why ESCP, what you contribute, how the degree fits your goals'],
  noReuse: ['getting-in/applications-and-interviews.md', 'Reusing one letter across schools breaks at least one limit and, per Imperial, risks naming the wrong programme.'],
  noBlueprint: ['getting-in/applications-and-interviews.md', 'The schools publish limits and prompts, not percentages.'],
  factBank: ['getting-in/applications-and-interviews.md', 'write a **fact bank** (stories, numbers, projects) once, then rewrite each letter to that school\'s limit and prompts'],
  aiLetters: ['getting-in/applications-and-interviews.md', 'keep a dated draft in your own words and be able to explain every sentence']
};

/* ------------------------------------------------------------------- CVs */

const CONTACT = '[City, Country] · [+39 333 000 0000] · [name.surname@university.edu] · [linkedin.com/in/yourname]';

const CVS = [
  {
    slug: 'cv-banking-markets',
    title: 'Investment banking and markets: one-page CV',
    short: 'Banking & markets',
    for: 'Investment banking, sales and trading, equity research, asset management, private equity (graduate and intern roles), and finance roles at London-run schemes.',
    why: [
      'Education first, with the grade in the local system and the scale beside it: finance screens read grades, and a missing grade is read as a bad one.',
      'Experience bullets name the deal type, the size and the analysis you did, because the first screen looks for those words.',
      'One page, no photo, no date of birth: the UK and US finance norm, and the norm for London-run schemes recruiting in Milan or Frankfurt.'
    ],
    quotes: ['ukOnePage', 'gpa', 'ats1'],
    blocks: [
      { name: '[FIRST NAME LAST NAME]' },
      { contact: CONTACT },
      { h: 'Education' },
      { left: '[University name], [City]', right: '[Sep 2026 – Sep 2027 (expected)]' },
      { sub: '[MSc in Finance]', subRight: '' },
      { bullet: 'Grade: [current average, e.g. 71% (Distinction: 70% and above)]; [scholarship or prize, with how selective it is, e.g. "top 5% of 400 admits"]' },
      { bullet: 'Relevant modules: [Corporate Finance, Valuation, Financial Statement Analysis, Econometrics]' },
      { left: '[University name], [City]', right: '[Sep 2023 – Jul 2026]' },
      { sub: '[BSc in Economics and Finance]', subRight: '' },
      { bullet: 'Final grade: [110/110 cum laude] ([top 3% of the cohort], if your school publishes it); thesis: [title], supervised by [Prof. Name]' },
      { bullet: 'Exchange: [University], [City], [Jan 2025 – Jun 2025]; [courses taken, grade]' },
      { h: 'Experience' },
      { left: '[Firm name], [City]', right: '[Jun 2026 – Aug 2026]' },
      { sub: '[Summer Analyst, Mergers & Acquisitions]', subRight: '' },
      { bullet: '[Built a three-statement model and DCF for a €[x]m [sector] target; the valuation range was used in the client\'s board presentation]' },
      { bullet: '[Prepared trading comparables for [n] listed peers in [n] countries and a precedent-transactions table of [n] deals]' },
      { bullet: '[Drafted [n] pages of the information memorandum for a [sector] carve-out; coordinated data requests with [n] client teams]' },
      { left: '[Firm name], [City]', right: '[Jan 2026 – Mar 2026]' },
      { sub: '[Off-cycle Intern, Equity Research, [sector] team]', subRight: '' },
      { bullet: '[Updated earnings models for [n] covered companies and wrote [n] results notes published to clients]' },
      { bullet: '[Built a [screen / dataset] of [what]; it changed the team\'s estimate of [metric] by [x]%]' },
      { h: 'Leadership and activities' },
      { left: '[University Finance Society], [City]', right: '[Oct 2024 – Jun 2026]' },
      { sub: '[Head of the student investment fund]', subRight: '' },
      { bullet: '[Led [n] analysts managing a €[x]k portfolio; returned [x]% against [x]% for the benchmark over [period]]' },
      { bullet: '[Organised [n] events with [firm names]; [n] attendees]' },
      { h: 'Skills, languages and interests' },
      { text: '**Technical:** [Excel (financial modelling), PowerPoint, Bloomberg, FactSet, Python (pandas)]' },
      { text: '**Certifications:** [Bloomberg Market Concepts; CFA Level I candidate, Jun 2027]' },
      { text: '**Languages:** [Italian (native), English (C2, IELTS 8.0), French (B2)]' },
      { text: '**Interests:** [specific ones you can talk about for two minutes, e.g. marathon running (3 finished), chess (club captain)]' }
    ]
  },
  {
    slug: 'cv-consulting',
    title: 'Strategy consulting: one-page CV',
    short: 'Consulting',
    for: 'Strategy and management consulting (MBB, tier 2, Big 4 consulting and deals), corporate strategy and rotational programmes.',
    why: [
      'Every bullet is an action, its context and a result with a number, so the CV doubles as the list of stories for the fit interview.',
      'Leadership gets its own section: McKinsey, BCG and Bain all interview on it, and the CV is where the interviewer picks the story.',
      'One page, no photo, standard headings, contact details in the body.'
    ],
    quotes: ['ukOnePage', 'ats1', 'dates'],
    blocks: [
      { name: '[FIRST NAME LAST NAME]' },
      { contact: CONTACT },
      { h: 'Education' },
      { left: '[University name], [City]', right: '[Sep 2025 – Jul 2027 (expected)]' },
      { sub: '[Master in Management]', subRight: '' },
      { bullet: 'Grade: [average and scale, e.g. 28.9/30]; [CEMS or double-degree track, if any]' },
      { bullet: '[Case competition, consulting club or field project, with the result, e.g. "1st of 42 teams, [Competition], 2026"]' },
      { left: '[University name], [City]', right: '[Sep 2022 – Jul 2025]' },
      { sub: '[BSc in Business Administration]', subRight: '' },
      { bullet: 'Final grade: [110/110]; thesis: [title, one line on the finding]' },
      { h: 'Experience' },
      { left: '[Firm name], [City]', right: '[Jun 2026 – Sep 2026]' },
      { sub: '[Summer Consultant / Visiting Associate]', subRight: '' },
      { bullet: '[Sized the [market] in [n] countries from [n] data sources; the estimate set the client\'s 3-year revenue target of €[x]m]' },
      { bullet: '[Interviewed [n] customers and [n] experts; synthesised findings into [n] slides presented to the client\'s CEO]' },
      { bullet: '[Identified €[x]m of cost savings in [area] by [method]; [x]% adopted in the client\'s budget]' },
      { left: '[Company name], [City]', right: '[Jan 2025 – Jun 2025]' },
      { sub: '[Business Analyst Intern, Strategy team]', subRight: '' },
      { bullet: '[Built the business case for [initiative]; approved with a €[x]k budget]' },
      { bullet: '[Automated [report] in [tool], cutting preparation from [x] hours to [y] a week]' },
      { h: 'Leadership and impact' },
      { left: '[Organisation], [City]', right: '[Sep 2023 – Jun 2025]' },
      { sub: '[President / Project lead]', subRight: '' },
      { bullet: '[Grew membership from [x] to [y] by [what you did]; raised €[x]k in sponsorship from [n] firms]' },
      { bullet: '[Led a team of [n] volunteers to [outcome, with a number]]' },
      { h: 'Additional information' },
      { text: '**Languages:** [Italian (native), English (C1), German (B2: name it if you target DACH offices, which often interview in German)]' },
      { text: '**Skills:** [Excel, PowerPoint, Alteryx or Tableau, SQL (basic)]' },
      { text: '**Interests:** [two or three, specific]' }
    ]
  },
  {
    slug: 'cv-tech-data',
    title: 'Software engineering and data: one-page CV',
    short: 'Tech & data',
    for: 'Software engineering, data science and analytics, machine learning, quantitative developer roles and technical product roles.',
    why: [
      'Technical skills sit high and are grouped by type, because recruiters and parsers search for named languages and tools.',
      'Projects come before experience if they are stronger: each names the stack, links the code and gives a measurable result.',
      'One column with no skill bars or icons; parsers cannot read graphics.'
    ],
    quotes: ['ats1', 'ats2'],
    blocks: [
      { name: '[FIRST NAME LAST NAME]' },
      { contact: '[City, Country] · [+39 333 000 0000] · [name.surname@email.com] · [github.com/yourname] · [linkedin.com/in/yourname]' },
      { h: 'Education' },
      { left: '[University name], [City]', right: '[Sep 2025 – Jul 2027 (expected)]' },
      { sub: '[MSc in Computer Science / Data Science]', subRight: '' },
      { bullet: 'Grade: [average and scale]; modules: [Algorithms, Machine Learning, Distributed Systems, Databases]' },
      { left: '[University name], [City]', right: '[Sep 2022 – Jul 2025]' },
      { sub: '[BSc in Computer Engineering]', subRight: '' },
      { bullet: 'Final grade: [110/110]; thesis: [title, one line on what you built or found]' },
      { h: 'Technical skills' },
      { text: '**Languages:** [Python, Java, C++, SQL, TypeScript]' },
      { text: '**Frameworks and libraries:** [PyTorch, scikit-learn, pandas, React, Spring]' },
      { text: '**Tools and platforms:** [Git, Docker, Kubernetes, AWS (EC2, S3, Lambda), PostgreSQL, Linux]' },
      { h: 'Projects' },
      { left: '[Project name] · [github.com/yourname/project]', right: '[2026]' },
      { bullet: '[Built a [what] in [stack] that [does what]; [n] users / [x]% faster than [baseline] / [n] stars]' },
      { bullet: '[Designed [component]; handled [n] requests per second with [latency] at p95]' },
      { left: '[Project name] · [github.com/yourname/project]', right: '[2025]' },
      { bullet: '[Trained a [model] on [dataset, size]; [metric] of [x] against a [y] baseline]' },
      { h: 'Experience' },
      { left: '[Company name], [City]', right: '[Jun 2026 – Sep 2026]' },
      { sub: '[Software Engineering Intern, [team]]', subRight: '' },
      { bullet: '[Shipped [feature] to production in [stack]; used by [n] customers / reduced [metric] by [x]%]' },
      { bullet: '[Wrote [n] tests and a CI check that cut failed deployments from [x] to [y] a month]' },
      { h: 'Hackathons, competitions and awards' },
      { bullet: '[Hackathon name, year]: [place] of [n] teams for [what you built]' },
      { bullet: '[Kaggle / ICPC / Olympiad]: [result, with the size of the field]' },
      { h: 'Languages' },
      { text: '[Italian (native), English (C1), [other]]' }
    ]
  },
  {
    slug: 'cv-academic-masters',
    title: 'Master\'s application CV (academic)',
    short: 'Master\'s application',
    for: 'Applications to MSc, MiM and MiF programmes, and scholarship applications. Admissions offices read credits, grades and tests first.',
    why: [
      'Credits by subject area, in ECTS or CFU, sit under each degree: continental schools gate on credits in named sectors, and a test score does not waive them.',
      'The thesis, test scores and language certificates have their own lines, with dates.',
      'Referees sit at the end, typed by school: some want an academic referee, some a professional one, some one of each on the CV.'
    ],
    quotes: ['credits', 'creditsGate', 'referees', 'escpCv'],
    blocks: [
      { name: '[FIRST NAME LAST NAME]' },
      { contact: CONTACT },
      { h: 'Education' },
      { left: '[University name], [City]', right: '[Sep 2023 – Jul 2026]' },
      { sub: '[Bachelor\'s degree in Economics and Management], [180 ECTS]', subRight: '' },
      { bullet: 'Final grade: [108/110] (Italian scale, 110 maximum; pass 66); weighted average [27.4/30]' },
      { bullet: '**Credits by area:** Quantitative [36 ECTS: Mathematics 12, Statistics 12, Econometrics 12]; Economics [30 ECTS]; Business and management [48 ECTS]; Finance and accounting [24 ECTS]' },
      { bullet: 'Thesis: "[Title]", supervisor [Prof. Name]; grade [x]; [one line on the method and finding]' },
      { bullet: 'Exchange: [University], [City], [Sep 2024 – Jan 2025], [30 ECTS]' },
      { h: 'Tests and certificates' },
      { text: '[GMAT Focus 665 (Quant 85, Verbal 82, Data Insights 81), Jun 2026] · [IELTS Academic 7.5, May 2026]' },
      { h: 'Academic projects and research' },
      { left: '[Project or research assistantship], [Department]', right: '[Feb 2025 – Jun 2025]' },
      { bullet: '[Collected and cleaned a dataset of [n] [observations] and estimated [model] in [Stata/R/Python]; results presented at [seminar]]' },
      { h: 'Professional experience' },
      { left: '[Company name], [City]', right: '[Jun 2025 – Aug 2025]' },
      { sub: '[Intern, [function]]', subRight: '' },
      { bullet: '[What you did, with a number]' },
      { h: 'Activities' },
      { bullet: '[Society, role, dates]: [what changed because of you]' },
      { bullet: '[Volunteering or sport, dates, level]' },
      { h: 'Languages and skills' },
      { text: '**Languages (CEFR):** [Italian (native), English (C1), Spanish (B2)]' },
      { text: '**Software:** [Excel, Stata, R, Python]' },
      { h: 'Referees' },
      { text: '[Prof. Name Surname], [Professor of …], [University]; [email]  (academic)' },
      { text: '[Name Surname], [Job title], [Company]; [email]  (professional)' }
    ]
  }
];

/* --------------------------------------------------------------- letters */

/* Budgets are Admetia's suggestion for spending the school's limit; the
 * schools publish limits and prompts, not shares (the research says so). */
const LETTERS = [
  {
    slug: 'letter-bocconi',
    school: 'Bocconi', programme: 'MSc programmes', unit: 'chars', max: 4000,
    limitLabel: 'about 4,000 characters (1–2 pages)',
    flag: 'M', flagWhy: 'The 4,000-character figure comes from a search summary of Bocconi\'s admissions page, not a full read.',
    says: ['bocconi', 'bocconiSel'],
    outline: [
      ['Why this programme', 1000, 'Name the programme, two or three courses or tracks you want and why. Show you know how it differs from the alternatives.'],
      ['What prepared you', 1000, 'Your degree, the courses and grades that matter for this programme, your thesis. If you are short of credits in a required area, say how you are filling the gap.'],
      ['Evidence from experience', 1000, 'One internship, project or activity told as a short story with a result.'],
      ['Your goal and the link', 700, 'The role or sector you aim for after the programme, and which parts of it get you there.'],
      ['Close', 300, 'One or two sentences. No list of adjectives.']
    ]
  },
  {
    slug: 'letter-imperial',
    school: 'Imperial Business School', programme: 'MSc programmes', unit: 'chars', max: 6000,
    limitLabel: '3,500 + 2,500 characters (two questions)',
    flag: 'H', flagWhy: 'Question wording and limits from Imperial\'s admissions blog (9 Dec 2024), read in full.',
    says: ['imperialQ1', 'imperialQ2', 'imperialAdvice'],
    parts: [
      { label: 'Question 1 (3,500 characters)', max: 3500, outline: [
        ['Why Imperial Business School', 1400, 'The programme by its correct name, the modules, projects or people that matter to you, and why they fit what you want to do.'],
        ['What you will contribute', 1500, 'Two pieces of evidence: what you have done that other students will gain from (a skill, an experience, a perspective).'],
        ['Where it leads', 600, 'One sentence on your goal and how the year gets you there.']
      ] },
      { label: 'Question 2 (2,500 characters)', max: 2500, outline: [
        ['The value and the situation', 450, 'Name the value (Respect, Collaboration, Integrity, Innovation or Excellence) and set the scene in two sentences.'],
        ['What you did', 1250, 'Your actions, in the first person, in the order you took them.'],
        ['The impact', 550, 'What changed, with a number where there is one.'],
        ['What you took from it', 250, 'One sentence.']
      ] }
    ]
  },
  {
    slug: 'letter-lse',
    school: 'LSE', programme: 'Statement of academic purpose', unit: 'words', min: 1000, max: 1500,
    limitLabel: '1,000–1,500 words',
    flag: 'H', flagWhy: 'From LSE\'s statement-of-academic-purpose page, read in full.',
    says: ['lse', 'lseAvoid'],
    outline: [
      ['The academic question that interests you', 250, 'A topic or problem from your studies you want to go further with, stated precisely.'],
      ['How your studies prepared you', 400, 'Courses, grades, thesis and methods, linked to what the programme teaches.'],
      ['Why this programme', 400, 'Specific modules, the department\'s research, the structure of the programme. Not the school\'s ranking, not London.'],
      ['Relevant experience', 200, 'Work, research or projects that show you can do the work.'],
      ['Your plans', 150, 'Further study or the career you intend, and how the programme fits.']
    ]
  },
  {
    slug: 'letter-escp',
    school: 'ESCP', programme: 'Master in Management', unit: 'words', max: 500,
    limitLabel: 'one page (about 450–500 words)',
    flag: 'H', flagWhy: 'From ESCP\'s best-practices blog (8 Jan 2026), read in full. The word count is Admetia\'s estimate of one page.',
    says: ['escp'],
    outline: [
      ['Why ESCP', 160, 'The multi-campus structure, tracks or specialisations that matter to you, specifically.'],
      ['What you contribute', 170, 'One or two experiences, with results, that will add to your class.'],
      ['How the degree fits your goals', 170, 'Where you want to work and how the programme gets you there.']
    ]
  }
];

/* Words that schools tell applicants to leave out, and a list of other
 * schools to catch a pasted letter. Checked in the browser, never sent. */
const CHECKS = {
  boilerplate: [
    { re: '\\brank(?:ed|ing|ings)?\\b', why: 'LSE asks you to avoid statements about its performance in rankings.' },
    { re: 'cosmopolitan|centre of excellence|center of excellence|global (?:city|centre|center|hub)', why: 'LSE asks you to avoid generic statements about London being a global or cosmopolitan centre.' },
    { re: 'world[- ]class|prestigious|renowned', why: 'Imperial wants to hear about you, not the school.' }
  ],
  schools: ['Bocconi', 'LSE', 'London School of Economics', 'Imperial', 'ESCP', 'HEC', 'ESSEC', 'London Business School', 'LBS', 'St. Gallen', 'St Gallen', 'HSG', 'Esade', 'IE Business School', 'Mannheim', 'RSM', 'Rotterdam School', 'WU Vienna', 'Copenhagen Business School', 'Stockholm School']
};

/* ------------------------------------------------------------- renderers */

/* Specials, and the non-ASCII punctuation the templates use, as macros, so
 * the files compile the same under pdfLaTeX, XeLaTeX and LuaLaTeX. */
const TEX_SPECIAL = { '\\': '\\textbackslash{}', '&': '\\&', '%': '\\%', '$': '\\$', '#': '\\#', '_': '\\_', '{': '\\{', '}': '\\}', '~': '\\textasciitilde{}', '^': '\\textasciicircum{}',
  '≥': '$\\geq$', '≤': '$\\leq$', '×': '$\\times$', '→': '$\\rightarrow$',
  '–': '--', '—': '---', '…': '\\ldots{}', '€': '\\texteuro{}', '£': '\\pounds{}', '·': '\\textperiodcentered{}', '’': "'", '‘': '`' };
function texEsc(s) { return String(s).replace(/[\\&%$#_{}~^≥≤×→–—…€£·’‘]/g, (c) => TEX_SPECIAL[c]); }
function texInline(s) {
  s = String(s).replace(/"([^"]*)"/g, '``$1\'\'');
  let out = '', last = 0, m;
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  while ((m = re.exec(s))) {
    out += texEsc(s.slice(last, m.index));
    out += m[1] !== undefined ? `\\textbf{${texEsc(m[1])}}` : `\\textit{${texEsc(m[2])}}`;
    last = re.lastIndex;
  }
  return out + texEsc(s.slice(last));
}
/* "\item [x]" would read [x] as the item's label. */
const item = (s) => '  \\item ' + (s.startsWith('[') ? '{}' : '') + texInline(s);

const TEX_HEAD = (title, kind) => `% ${title}
% Admetia application toolkit (https://iaconoalessandro.github.io/admetia/careers/toolkit.html).
% One column, no tables, graphics or text boxes, so applicant tracking
% systems can read it. Compile with pdfLaTeX (Overleaf's default).
% Replace every [bracketed] placeholder; delete lines you do not need.
\\documentclass[10pt,a4paper]{article}
\\usepackage[a4paper,margin=1.6cm]{geometry}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{textcomp}
\\usepackage{enumitem}
\\usepackage{xcolor}
\\usepackage[hidelinks]{hyperref}
% Copyable, searchable text in the PDF (pdfLaTeX only).
\\ifdefined\\pdfgentounicode\\input{glyphtounicode}\\pdfgentounicode=1\\fi
\\pagestyle{empty}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{${kind === 'letter' ? '6pt' : '1pt'}}
\\setlist[itemize]{leftmargin=1.2em,itemsep=0pt,topsep=1pt,parsep=0pt,partopsep=0pt}
\\newcommand{\\cvsection}[1]{\\vspace{7pt}{\\large\\bfseries\\MakeUppercase{#1}}\\par\\vspace{1pt}\\hrule\\vspace{3pt}}
\\newcommand{\\cventry}[2]{\\vspace{2pt}\\textbf{#1}\\hfill #2\\par}
\\newcommand{\\cvsub}[1]{\\textit{#1}\\par}
\\newcommand{\\guide}[1]{{\\itshape\\color{gray}#1}\\par}
\\begin{document}
`;

function toTex(doc) {
  const out = [TEX_HEAD(doc.title, doc.kind)];
  let inList = false;
  const close = () => { if (inList) { out.push('\\end{itemize}'); inList = false; } };
  const blocks = doc.blocks;
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.bullet !== undefined) {
      if (!inList) { out.push('\\begin{itemize}'); inList = true; }
      out.push(item(b.bullet));
      continue;
    }
    close();
    if (b.name) {
      const c = blocks[i + 1] && blocks[i + 1].contact;
      out.push(`\\begin{center}{\\LARGE\\bfseries ${texInline(b.name)}}${c ? `\\\\[3pt]\n${texInline(c)}` : ''}\n\\end{center}`);
      if (c) i++;
    } else if (b.contact) out.push(`\\begin{center}${texInline(b.contact)}\\end{center}`);
    else if (b.h) out.push(`\\cvsection{${texInline(b.h)}}`);
    else if (b.left !== undefined) out.push(`\\cventry{${texInline(b.left)}}{${texInline(b.right || '')}}`);
    else if (b.sub !== undefined) out.push(`\\cvsub{${texInline(b.sub)}}`);
    else if (b.note !== undefined) out.push(`\\guide{${texInline(b.note)}}`);
    else if (b.text !== undefined) out.push(`${texInline(b.text)}\\par`);
    else throw new Error('tex: unknown block');
  }
  close();
  out.push('\\end{document}', '');
  return out.join('\n');
}

/* A letter skeleton as blocks: the school's limit, then a heading per part
 * with its budget and guidance, then a place to write. */
function letterBlocks(L) {
  const unit = (n) => L.unit === 'chars' ? `${n.toLocaleString('en-GB')} characters` : `${n.toLocaleString('en-GB')} words`;
  const blocks = [
    { name: `Motivation letter: ${L.school}` },
    { contact: `${L.programme} · limit: ${L.limitLabel}` },
    { note: 'Admetia skeleton. The headings and budgets below are a suggestion for spending the limit; the school publishes the limit and the prompt, not the parts. Delete every grey line before you submit, and check the limit on the school\'s own page.' }
  ];
  const section = (o) => {
    blocks.push({ h: `${o[0]} (about ${unit(o[1])})` }, { note: o[2] }, { text: '[Write here.]' });
  };
  if (L.parts) {
    for (const p of L.parts) { blocks.push({ left: p.label, right: '' }); p.outline.forEach(section); }
  } else L.outline.forEach(section);
  return blocks;
}

function documents() {
  const docs = CVS.map((c) => ({ slug: c.slug, title: c.title, kind: 'cv', blocks: c.blocks }));
  for (const L of LETTERS) docs.push({ slug: L.slug, title: `Motivation letter: ${L.school}`, kind: 'letter', blocks: letterBlocks(L) });
  return docs;
}

module.exports = { Q, CVS, LETTERS, CHECKS, documents, toTex, letterBlocks, texInline };

/* ---------------------------------------------------------------------------
 * Recruiting calendar: one row per recruiting window, drawn as a timeline on
 * careers/recruiting-calendar.html.
 *
 * The months, flags and eligibility are our reading of the research; each
 * row quotes the passages it rests on, and the build stops if a quoted
 * passage is no longer in its file. The flag is the research's own (H, M,
 * L: see research/getting-in/recruiting-calendar.md). Portal links were
 * opened on 10 October 2026.
 *
 * The axis is one recruiting season: July of the year before a summer
 * internship or a September start, to September of the start year.
 * Months are indices into AXIS. Segment kinds:
 *   open     applications open (rolling unless said otherwise)
 *   peak     the weeks to aim for: early in a rolling window
 *   assess   tests, interviews, assessment centres
 *   event    the programme, internship or start date
 *   rolling  open all year
 *   before   the window opened before this season began
 * Markers are single dated deadlines.
 * ------------------------------------------------------------------------- */

'use strict';

const AXIS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

const SECTORS = [
  ['banking', 'Banking and markets'],
  ['consulting', 'Consulting'],
  ['big4', 'Big 4 and audit'],
  ['fmcg', 'FMCG and corporate'],
  ['tech', 'Tech']
];
const PLACES = [
  ['uk', 'UK (London)'],
  ['fr', 'France (Paris)'],
  ['de', 'Germany and Austria'],
  ['it', 'Italy (Milan)'],
  ['ch', 'Switzerland (Zurich)'],
  ['us', 'United States']
];
const WHO = [
  ['ug1', 'First-year undergraduates'],
  ['pen', 'Penultimate year (incl. year one of a two-year master’s)'],
  ['final', 'Final year (incl. a one-year master’s)'],
  ['grad', 'Recent graduates'],
  ['enrolled', 'Enrolled students only (internship agreement needed)']
];

const RC = 'getting-in/recruiting-calendar.md';
const EP = 'getting-in/employer-pipelines.md';

const P = {
  rothschildInsight: ['Rothschild & Co: 2027 UK Spring Insight', 'https://www.rothschildandco.com/en/careers/students-and-graduates/opportunities/2027-uk-global-advisory-spring-insight-programme/'],
  db: ['Deutsche Bank: students and graduates', 'https://careers.db.com/students-graduates/'],
  deloitte: ['Deloitte UK: early careers', 'https://www.deloitte.com/uk/en/careers/early-careers.html'],
  bofa: ['Bank of America: students', 'https://careers.bankofamerica.com/en-us/students'],
  citi: ['Citi: early careers and internships', 'https://jobs.citi.com/early-career-programs-internships'],
  gs: ['Goldman Sachs: students', 'https://www.goldmansachs.com/careers/students'],
  jpm: ['J.P. Morgan: programmes', 'https://www.jpmorganchase.com/careers/explore-opportunities/programs'],
  ms: ['Morgan Stanley: students and graduates', 'https://www.morganstanley.com/people-opportunities/students-graduates'],
  barclays: ['Barclays: early careers', 'https://search.jobs.barclays/early-careers'],
  rothschild: ['Rothschild & Co: students and graduates', 'https://www.rothschildandco.com/en/careers/students-and-graduates/'],
  lazard: ['Lazard: students', 'https://www.lazard.com/careers/students/'],
  lseBanking: ['LSE Careers: banking and investment guide', 'https://info.lse.ac.uk/current-students/careers/information-and-resources/employment-sectors/banking-and-investment'],
  lseConsult: ['LSE Careers: consultancy guide', 'https://info.lse.ac.uk/current-students/careers/information-and-resources/employment-sectors/consultancy'],
  mck: ['McKinsey: students', 'https://www.mckinsey.com/careers/students'],
  bcg: ['BCG: careers', 'https://careers.bcg.com/global/en'],
  bain: ['Bain: find a role', 'https://www.bain.com/careers/find-a-role/'],
  bcgVa: ['BCG: Visiting Associate (Germany and Austria)', 'https://careers.bcg.com/global/en/visiting-associate-germany-austria'],
  ey: ['EY UK: students', 'https://www.ey.com/en_uk/careers/students'],
  kpmg: ['KPMG UK: graduates', 'https://www.kpmgcareers.co.uk/graduate/'],
  pwc: ['PwC UK: early careers', 'https://www.pwc.co.uk/careers/early-careers.html'],
  unileverUk: ['Unilever: UK & Ireland Future Leaders Programme', 'https://careers.unilever.com/en/uk-and-ireland-unilever-future-leaders-programme-2026'],
  unilever: ['Unilever: early careers', 'https://careers.unilever.com/en/early-careers'],
  pg: ['P&G: hiring process', 'https://www.pgcareers.com/global/en/hiring-process'],
  loreal: ['L’Oréal: careers', 'https://careers.loreal.com/en'],
  hec: ['HEC Paris: MiM gap year', 'https://www.hec.edu/en/master-s-programs/master-management/course-content/optional-gap-year'],
  mediobanca: ['Mediobanca: work with us', 'https://www.mediobanca.com/en/work-with-us/index.html'],
  unicredit: ['UniCredit: careers', 'https://www.unicreditgroup.eu/en/careers.html']
};

const ROWS = [
  {
    id: 'spring-weeks', name: 'Spring weeks and insight programmes',
    sectors: ['banking', 'big4'], places: ['uk'], who: ['ug1'], flag: 'H',
    segs: [[2, 3, 'peak'], [4, 5, 'open'], [8, 9, 'event']],
    labels: { open: 'Rolling from opening; closes when full', event: 'A few days in spring' },
    note: 'For first-year undergraduates (second year on a four-year degree). Master’s students cannot apply: go to the summer internship row instead. Strong spring-week performers are fast-tracked to the next summer’s assessments.',
    quotes: [[RC, 'Application start date: 29 September 2026'], [RC, 'Spring weeks and insight programmes are mostly closed to master\'s students.'], [RC, 'a fast-track assessment process for the following year\'s Summer Internship programme']],
    portals: ['rothschildInsight', 'db', 'deloitte']
  },
  {
    id: 'ib-summer-london', name: 'Investment banking summer internship (London)',
    sectors: ['banking'], places: ['uk'], who: ['pen', 'final'], flag: 'H',
    segs: [[0, 2, 'peak'], [3, 5, 'open'], [3, 5, 'assess'], [11, 13, 'event']],
    marks: [[3, '11 Oct: Bank of America deadline (2027 cycle)']],
    labels: { peak: 'Portals open from July: apply in the first weeks', assess: 'Tests and video interviews, then superdays', event: '10-week internship; return offers at the end' },
    note: 'Rolling: Bank of America says assessments often begin before the deadline, and Citi London has no deadline. A one-year UK master’s student finishing within the bank’s window is eligible on paper, but the internship clashes with the dissertation.',
    quotes: [[RC, 'LSE Careers says banking applications "generally open as early as July and close between October and December"'], [RC, 'Bank of America\'s London 2027 IB summer analyst role closes on 11 October 2026'], [RC, 'Citi London\'s equivalent role has "no deadline"']],
    portals: ['bofa', 'citi', 'gs', 'jpm', 'ms', 'barclays', 'lseBanking']
  },
  {
    id: 'ib-graduate-london', name: 'Investment banking graduate analyst (London)',
    sectors: ['banking'], places: ['uk'], who: ['final', 'grad'], flag: 'M',
    segs: [[2, 4, 'open'], [3, 5, 'assess'], [12, 14, 'event']],
    labels: { open: 'Apply September–November', event: 'Start: July–September' },
    note: 'Fewer places than the internship, because banks fill most graduate seats with their own summer interns. Stronger with a prior internship or a relevant master’s.',
    quotes: [[RC, 'London IB graduate analyst (start after the MSc) | Sept–Nov of the MSc year'], [RC, 'there are a limited number of graduate level roles']],
    portals: ['gs', 'jpm', 'ms', 'barclays', 'lseBanking']
  },
  {
    id: 'offcycle-london', name: 'Off-cycle internships and boutiques (London)',
    sectors: ['banking'], places: ['uk'], who: ['final', 'grad'], flag: 'M',
    segs: [[0, 14, 'rolling'], [3, 5, 'peak'], [10, 12, 'peak']],
    labels: { rolling: 'Year-round', peak: 'Busiest: Oct–Dec for January starts; May–Jul for autumn starts' },
    note: 'The most realistic bank door for late starters. 3–6 months; boutiques hire when a deal team needs someone.',
    quotes: [[RC, 'Off-cycle internship (start Oct–Jan after the MSc) | Spring and summer of the MSc year | Most realistic bank door for late starters; boutiques recruit year-round. **M**'], [RC, 'Off-Cycle Analyst (3–6 months) | Jan–Jun / Spring / Autumn | Oct–Dec (for Jan) / May–Jul (for Autumn)']],
    portals: ['rothschild', 'lazard', 'lseBanking']
  },
  {
    id: 'ib-us', name: 'Investment banking summer internship (US)',
    sectors: ['banking'], places: ['us'], who: ['pen'], flag: 'H',
    segs: [[0, 0, 'before'], [11, 13, 'event']],
    labels: { before: 'Opened about 18 months ahead (December, two years before)', event: 'Internship' },
    note: 'US recruiting runs 6–12 months earlier than London. It matters only if you study at a US programme or want a US summer; a European candidate for London should follow the London rows.',
    quotes: [[RC, 'US 2027 summer analyst roles were open by December 2025 (RBC)'], [RC, 'So US junior-summer recruiting for summer Y starts around December Y-2 to early Y-1, which is 18 months ahead.']],
    portals: ['gs', 'jpm', 'ms', 'bofa']
  },
  {
    id: 'consulting-uk', name: 'Consulting internships and graduate roles (UK)',
    sectors: ['consulting'], places: ['uk'], who: ['pen', 'final'], flag: 'M',
    segs: [[2, 4, 'peak'], [3, 5, 'open'], [4, 7, 'assess'], [11, 13, 'event'], [14, 14, 'event']],
    labels: { peak: 'September–November: events and fairs', open: 'Applications open and close October–December (varies by firm)', assess: 'Case rounds, final rounds and offers, November–February', event: 'Summer internship (10–12 weeks), or a start the next autumn' },
    note: 'Some firms recruit on a rolling basis and others set deadlines. Case preparation has to start before the window opens.',
    quotes: [[RC, 'applications open and close from **October to December** (varies by firm); assessment centres, final rounds and offers from **November to February**'], [RC, 'some firms recruit on rolling basis, others have specific deadlines']],
    portals: ['mck', 'bcg', 'bain', 'lseConsult']
  },
  {
    id: 'consulting-dach', name: 'Consulting internships with binding offers (Germany, Austria)',
    sectors: ['consulting'], places: ['de'], who: ['pen', 'final', 'enrolled'], flag: 'H',
    segs: [[0, 14, 'rolling']],
    marks: [[6, '6 Jan: BCG Women’s deadline'], [9, '5 Apr: BCG Women’s deadline'], [11, '26 Jun: BCG Women’s deadline']],
    labels: { rolling: 'Visiting Associate internships recruit through the year' },
    note: 'The 8–12 week internship is the main door: strong interns get a binding full-time offer (BCG FAST FORWARD) with no interviews at graduation. Open from the third bachelor’s semester and in a gap year. Interviews are often partly in German.',
    quotes: [[RC, 'BCG Women\'s deadline 5 Apr'], [RC, 'BCG Women\'s deadline 26 Jun'], [RC, 'BCG Women\'s deadline 6 Jan'], [RC, 'the Visiting Associate internship can be taken from the third bachelor\'s semester onwards and during a gap year, and converts through FAST FORWARD']],
    portals: ['bcgVa']
  },
  {
    id: 'big4-uk', name: 'Big 4 graduate schemes (UK, September start)',
    sectors: ['big4'], places: ['uk'], who: ['final', 'grad'], flag: 'H',
    segs: [[0, 1, 'open'], [2, 4, 'peak'], [5, 8, 'open'], [3, 7, 'assess'], [14, 14, 'event']],
    labels: { peak: 'Apply September–November: places fill in order', assess: 'Online tests, video interview, in-person final stage', open: 'Roles close when full; some reopen', event: 'Programmes start in September' },
    note: 'EY allows one programme application every six months, with a six-month wait after a rejection, so practise the tests before the first application of the season.',
    quotes: [[RC, 'Big 4 graduate scheme (September start the following year) | Sept–Nov of the MSc year | Fills in order; Deloitte graduate programmes start in September. **H**'], [RC, 'EY UK: one programme application every six months, and a six-month wait after rejection']],
    portals: ['ey', 'kpmg', 'deloitte', 'pwc']
  },
  {
    id: 'fmcg-uk', name: 'FMCG graduate schemes (UK and Ireland)',
    sectors: ['fmcg'], places: ['uk'], who: ['final', 'grad'], flag: 'H',
    segs: [[3, 5, 'open'], [3, 3, 'peak'], [4, 7, 'assess'], [14, 14, 'event']],
    labels: { open: 'Opens once a year, around Q4; closes each role when it has enough applications', assess: 'Personality and online tests, recorded interview with a business case, a final day', event: 'Programme starts in September' },
    note: 'Unilever’s timing is stated for its UK and Ireland programme; other FMCG employers’ months are practitioner consensus (September–November openings). P&G recruits role by role, and its tests decide progression for most roles.',
    quotes: [[RC, 'opens "once a year (around Q4)"'], [RC, 'FMCG graduate schemes in the UK open between September and November and close between November and January']],
    portals: ['unileverUk', 'unilever', 'pg', 'loreal']
  },
  {
    id: 'france-final-stage', name: 'Final-year internship that leads to the job (France)',
    sectors: ['banking', 'consulting', 'fmcg', 'big4', 'tech'], places: ['fr'], who: ['final', 'enrolled'], flag: 'H',
    segs: [[2, 5, 'open'], [6, 11, 'event']],
    labels: { open: 'Apply in the autumn of the final year', event: 'Stage de fin d’études, up to six months: the main hiring channel' },
    note: '42.3% of grande école graduates in work were hired by their final internship or apprenticeship host. You need a convention de stage from a school, so it has to happen while you are enrolled.',
    quotes: [[RC, '42.3% of grande école graduates in work were hired through their final internship or apprenticeship host'], [RC, 'No offer? Apply to graduate analyst (London) and to the **stage de fin d\'études** in Paris for Jan–Jun Y+1 **M/L**']],
    portals: ['hec', 'rothschild', 'lazard', 'loreal']
  },
  {
    id: 'paris-stage', name: 'Six-month stages in Paris (two intakes)',
    sectors: ['banking', 'consulting'], places: ['fr'], who: ['pen', 'final', 'enrolled'], flag: 'L',
    segs: [[2, 4, 'open'], [6, 11, 'event'], [7, 9, 'open'], [12, 14, 'event']],
    labels: { open: 'Apply Sep–Nov for January; Feb–Apr for July', event: 'Six-month stage' },
    note: 'Practitioner consensus, not confirmed by employers. Internships over two months need a convention de stage, so you must be enrolled.',
    quotes: [[RC, '**Cohort A (January / February start to June / July):** Primary application window opens in **September and runs through November**.'], [RC, '**Cohort B (July / August start to December / January):** Primary application window opens in **February and runs through April**.'], [RC, 'Paris, Frankfurt and Milan off-cycle and stage timing patterns** (Sept–Jan recruiting for Jan–Jul starts): practitioner consensus only.']],
    portals: ['rothschild', 'lazard']
  },
  {
    id: 'de-praktikum', name: 'Praktikum in Frankfurt and Munich (two intakes)',
    sectors: ['banking', 'consulting'], places: ['de'], who: ['pen', 'final', 'enrolled'], flag: 'L',
    segs: [[0, 0, 'open'], [3, 8, 'event'], [4, 6, 'open'], [9, 14, 'event'], [10, 12, 'open']],
    labels: { open: 'Apply May–Jul for October; Nov–Jan for April', event: 'Internship, 3–6 months' },
    note: 'Timing is practitioner consensus. The legal point is firm: a voluntary internship over three months must pay the minimum wage unless it is mandatory under university rules (MiLoG §22), so employers want enrolled students.',
    quotes: [[RC, '**Winter Semester Intake (October / November start):** Applications open **May through July**.'], [RC, '**Summer Semester Intake (April / May start):** Applications open **November through January**.'], [RC, 'German law makes voluntary internships over three months subject to the minimum wage unless they are mandatory under university rules (MiLoG §22)']],
    portals: ['db', 'bcgVa']
  },
  {
    id: 'milan-stage', name: 'Stage curriculare and extracurriculare (Milan)',
    sectors: ['banking', 'consulting'], places: ['it'], who: ['pen', 'final', 'grad', 'enrolled'], flag: 'L',
    segs: [[0, 14, 'rolling'], [3, 5, 'peak'], [10, 12, 'peak']],
    labels: { rolling: 'Rolling, with intakes in Jan–Feb and Sep–Oct', peak: 'Busiest: Oct–Dec for January; May–Jul for September' },
    note: 'Curricular stages run while enrolled, for credits; extracurricular stages within 12 months of graduating, with a regional minimum allowance (€800 a month in Lombardy). Elite boutiques and MBB Milan offices take six-month interns year-round. Timing is practitioner consensus.',
    quotes: [[RC, 'Continuous and rolling, with high-volume intakes in **January–February** and **September–October**.'], [RC, 'Oct–Dec (for Jan) / May–Jul (for Sep)'], [RC, 'Regione Lombardia sets a mandatory minimum allowance of €800/month gross']],
    portals: ['mediobanca', 'unicredit', 'rothschild', 'lazard']
  },
  {
    id: 'zurich', name: 'Off-cycle internships (Zurich)',
    sectors: ['banking'], places: ['ch'], who: ['pen', 'final', 'grad', 'enrolled'], flag: 'L',
    segs: [[0, 14, 'rolling']],
    labels: { rolling: 'Rolling starts in Jan, Apr, Jul and Oct; apply 3–5 months ahead' },
    note: 'In practice open to Swiss and EU/EFTA citizens, and to non-EU students enrolled at a Swiss university doing a required internship.',
    quotes: [[RC, 'Rolling (Jan / Apr / Jul / Oct) | 3–5 months prior to start date'], [RC, 'Swiss internships are practically accessible only to Swiss citizens, EU/EFTA passport holders, or non-EU students currently enrolled at a Swiss university']],
    portals: []
  },
  {
    id: 'tech', name: 'Tech internships and graduate roles (US-headquartered firms)',
    sectors: ['tech'], places: ['uk', 'us', 'de', 'fr', 'it', 'ch'], who: ['pen', 'final'], flag: 'L',
    segs: [[0, 8, 'rolling'], [0, 2, 'peak']],
    labels: { rolling: 'Rolling, role by role', peak: 'Some internships open as early as July' },
    note: 'The research has no employer dates for tech; this row says only that some US-headquartered firms open internships as early as July. Check each employer’s listing.',
    quotes: [[RC, 'Tech internships (US-headquartered) may already be open **L**']],
    portals: []
  }
];

/* The two month-by-month tables, quoted whole from the research. */
const TABLES = [
  ['msc', 'One-year UK master’s', '### (a) One-year UK MSc'],
  ['mim', 'Two-year continental MiM', '### (b) Two-year continental MiM']
];

/* Decision rules and myths the page quotes, by number. */
const RULES = [1, 2, 3, 4, 5, 6, 7, 8];
const MYTHS = [1, 2, 4, 7, 8];

module.exports = { AXIS, SECTORS, PLACES, WHO, ROWS, P, TABLES, RULES, MYTHS, RC, EP };

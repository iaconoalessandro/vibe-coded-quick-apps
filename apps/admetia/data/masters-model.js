/* ---------------------------------------------------------------------------
 * Pre-experience business master's model (MiM / MiF / Marketing).
 *
 * This is NOT a reproduction of anything — no published tool exists for these
 * programmes. It is an original model, and it is built to be honest about the
 * fact that the underlying data is thin.
 *
 * Two things follow from the research and shape everything below:
 *
 *  1. Most published admissions requirements at this level are pass/fail
 *     eligibility rules, not weights. A 780 GMAT does not repair a missing
 *     10 ECTS of statistics at RSM. So schools are filtered by `gates` first
 *     and only then scored.
 *
 *  2. The great majority of European programmes publish no admitted-student
 *     test average at all. Every fact carries a source tag, and the score
 *     thresholds are openly labelled as calibration, because no school
 *     publishes a "points needed" figure.
 *
 * Source tags: OFF  = read from the school's own page
 *              OFF2 = official school document, via a secondary summary
 *              TP   = third-party aggregator or consultancy, unverified
 *              FOI  = UK Freedom-of-Information disclosure
 *              NP   = the school publishes nothing on this
 *              CAL  = my calibration, not sourced from anyone
 * ------------------------------------------------------------------------- */

window.MASTERS_MODEL = (function () {
  'use strict';

  var TRACKS = {
    mim: {
      id: 'mim', name: 'Management',
      full: 'Master in Management / MSc Management',
      blurb: 'Aimed at recent graduates. Several of these programmes cap the amount ' +
        'of full-time experience they will accept, and one redirects you to its MBA.',
      weights: { academic: 22, test: 13, institution: 13, quant: 5, internship: 15, leadership: 12, international: 8, essays: 12 },
      fullTimeCurve: { 0: 0, 6: 1.5, 18: 2, 30: 0, 48: -4, 72: -8 }
    },
    mif: {
      id: 'mif', name: 'Finance',
      full: 'Master in Finance / MSc Finance / MFin / MFE',
      blurb: 'Quantitative coursework is a hard prerequisite at most of these, ' +
        'expressed as ECTS rules in Europe and named courses in the US.',
      weights: { academic: 22, test: 15, institution: 11, quant: 20, internship: 12, leadership: 5, international: 4, essays: 11 },
      fullTimeCurve: { 0: 0, 6: 1.5, 18: 2.5, 30: 1.5, 48: -2, 72: -5 }
    },
    marketing: {
      id: 'marketing', name: 'Marketing',
      full: 'MSc Marketing / Marketing Management',
      blurb: 'The least documented track here. Few of these programmes publish ' +
        'anything about who they admit, so most thresholds below are calibration only.',
      weights: { academic: 20, test: 11, institution: 12, quant: 4, internship: 16, leadership: 12, international: 9, essays: 16 },
      fullTimeCurve: { 0: 0, 6: 1.5, 18: 2, 30: 0, 48: -4, 72: -8 }
    }
  };

  /* ----------------------------------------------------------------------- */
  /* Selection profiles                                                       */
  /*                                                                          */
  /* A track weighting alone says what a Master in Finance applicant is        */
  /* generally judged on. It does not say what any particular school does      */
  /* with the file, and the difference between schools is large enough to      */
  /* change the answer.                                                        */
  /*                                                                          */
  /* Bocconi is the clearest case. It runs no interview and takes no           */
  /* reference letters on the standard route, names GPA as a compulsory        */
  /* pillar, reserves the right to recalculate that GPA from your transcript   */
  /* itself, and applies a published test floor to everyone. Whatever else     */
  /* is in the file, the transcript and the test are what rank you. HEC and    */
  /* IE sit at the other end: essays, recorded answers and live interviews     */
  /* are the process, and neither publishes a formula.                         */
  /*                                                                           */
  /* So each school carries a profile. The multipliers below are applied to    */
  /* the track weights and the result is renormalised back to the same total,  */
  /* which means a profile redistributes emphasis rather than inflating or     */
  /* deflating anyone's score. A balanced applicant scores about the same      */
  /* everywhere; a lopsided one — high GPA and GMAT, thin extracurriculars,    */
  /* or the reverse — is what the profiles separate.                           */
  /*                                                                           */
  /* The assignment of a school to a profile is CAL, my reading of the         */
  /* published process. `because` quotes what that reading rests on, and the   */
  /* underlying process facts carry their own source tags in `facts`.          */
  /* ----------------------------------------------------------------------- */

  var PROFILES = {
    balanced: {
      id: 'balanced', label: 'Whole file, evenly weighted',
      short: 'Balanced read',
      blurb: 'Nothing published points to one part of the file carrying the ' +
        'decision, so the track weighting is used unchanged.',
      mult: {}, mods: {}
    },
    metric: {
      id: 'metric', label: 'Numbers-led — GPA and test decide it',
      short: 'GPA + test dominate',
      blurb: 'Selection runs off the transcript and the test score. There is no ' +
        'interview on the standard route, and what you write about yourself carries ' +
        'very little. Grades and the test are worth roughly twice what they are ' +
        'worth at an interview-led school.',
      mult: { academic: 1.85, test: 1.95, institution: 1.15, quant: 1.15,
              internship: 0.5, leadership: 0.2, international: 0.35, essays: 0.1 },
      mods: { recs: 0, languages: 0.5 }
    },
    transcript: {
      id: 'transcript', label: 'Transcript-led — grades and institution',
      short: 'Grades + institution',
      blurb: 'No test is used and there is no interview, so the degree class, your ' +
        'position in the cohort and the standing of the institution are almost the ' +
        'whole decision.',
      mult: { academic: 2.0, test: 0.9, institution: 1.7, quant: 1.05,
              internship: 0.55, leadership: 0.35, international: 0.5, essays: 0.45 },
      mods: { recs: 0.5 }
    },
    academic: {
      id: 'academic', label: 'Academic committee',
      short: 'Degree class first',
      blurb: 'Read by academics against a transcript. The degree class, the ' +
        'discipline you studied and the depth of the coursework carry it; a test ' +
        'is a check rather than a ranking device.',
      mult: { academic: 1.75, test: 1.0, institution: 1.5, quant: 1.3,
              internship: 0.5, leadership: 0.4, international: 0.6, essays: 0.75 },
      mods: {}
    },
    quant: {
      id: 'quant', label: 'Technical intake',
      short: 'Quantitative preparation',
      blurb: 'A quantitative-prerequisite programme. Coursework in mathematics, ' +
        'statistics and programming, and the quantitative half of the test, outweigh ' +
        'everything else in the file.',
      mult: { academic: 1.2, test: 1.45, institution: 1.0, quant: 2.3,
              internship: 0.6, leadership: 0.25, international: 0.4, essays: 0.55 },
      mods: { languages: 0.4 }
    },
    holistic: {
      id: 'holistic', label: 'Holistic — the file is read whole',
      short: 'Essays and interview',
      blurb: 'Essays, interviews and what you have actually done carry weight ' +
        'alongside the numbers. The test is a screen rather than a ranking device, ' +
        'and a strong story genuinely moves the outcome.',
      mult: { academic: 0.85, test: 0.8, institution: 0.95, quant: 0.8,
              internship: 1.3, leadership: 1.55, international: 1.4, essays: 1.55 },
      mods: { recs: 1.4 }
    }
  };

  /* ----------------------------------------------------------------------- */
  /* Questions                                                                */
  /* ----------------------------------------------------------------------- */

  var STEPS = [
    {
      id: 'degree',
      title: 'Your degree',
      blurb: 'Where you studied and how well you did. At this level academics carry ' +
        'more weight than anything else — the opposite of an MBA application.',
      groups: [
        {
          id: 'gradeScale', type: 'radio', label: 'Which grading scale is yours?',
          help: 'Used to label the bands below and to offer the right converter.',
          options: [
            { id: 'sc_it', label: 'Italian (18–30 exams, 66–110 degree)' },
            { id: 'sc_uk', label: 'UK classification (First, 2:1, 2:2)' },
            { id: 'sc_us', label: 'US GPA out of 4.0' },
            { id: 'sc_ects', label: 'ECTS grades or a percentage' },
            { id: 'sc_other', label: 'Something else' }
          ]
        },
        {
          id: 'gradeBand', type: 'radio', label: 'Where do you sit in your cohort?',
          help: 'Rank within your own cohort travels across borders far better than a ' +
            'converted number does. If you are unsure, use the class-rank column.',
          options: [
            { id: 'gb_top5', label: 'Top ~5%', note: '110 e lode · First (high) · 3.9+ · A+', v: 1.0 },
            { id: 'gb_top10', label: 'Top ~10%', note: '110 · strong First · 3.8 · A', v: 0.9 },
            { id: 'gb_top25', label: 'Top ~25%', note: '105–109 · First / high 2:1 · 3.6 · A−', v: 0.74 },
            { id: 'gb_top50', label: 'Top ~50%', note: '100–104 · 2:1 · 3.3 · B+', v: 0.56 },
            { id: 'gb_mid', label: 'Around the median', note: '95–99 · low 2:1 · 3.0 · B', v: 0.4 },
            { id: 'gb_low', label: 'Below the median', note: 'under 95 · 2:2 or below · under 3.0', v: 0.2 }
          ]
        },
        {
          id: 'italianConverter', type: 'custom', render: 'italian',
          label: 'Italian grade converter', optional: true,
          help: 'Only relevant on the Italian scale. Shows why the 110 mark and a US GPA ' +
            'are not the same measurement.'
        },
        {
          id: 'institution', type: 'radio', label: 'Your undergraduate institution',
          help: 'Manchester states outright that it weighs "the standing of the institution ' +
            'where you studied". Others do it without saying so. A weaker institution is a ' +
            'penalty you can partly buy back with a strong test score.',
          options: [
            { id: 'inst_global', label: 'Globally ranked top-50, or the leading school in a major country', v: 1.0 },
            { id: 'inst_target', label: 'Well known internationally; a recruiting target in its region', v: 0.8 },
            { id: 'inst_solid', label: 'Respected nationally, little international recognition', v: 0.58 },
            { id: 'inst_other', label: 'Accredited, but not widely known outside its area', v: 0.38 }
          ]
        },
        {
          id: 'degreeField', type: 'radio', label: 'What did you study?',
          help: 'Engineering is the single largest group in HEC\'s management intake, so it ' +
            'is no handicap for MiM. For finance it works the other way — Berkeley\'s MFE ' +
            'class is roughly three-quarters quantitative-STEM.',
          options: [
            { id: 'fld_quant', label: 'Maths, statistics, physics, engineering or computer science', quant: true, v: 1.0 },
            { id: 'fld_econ', label: 'Economics or econometrics', quant: true, v: 0.95 },
            { id: 'fld_finance', label: 'Finance or accounting', quant: true, v: 0.9 },
            { id: 'fld_business', label: 'Business or management', quant: false, v: 0.8 },
            { id: 'fld_social', label: 'Social sciences or humanities', quant: false, v: 0.62 },
            { id: 'fld_other', label: 'Something else', quant: false, v: 0.6 }
          ]
        }
      ]
    },

    {
      id: 'tests',
      title: 'Tests',
      blurb: 'GMAT 10th Edition and GMAT Focus are different scales and are not ' +
        'interchangeable, so the scale is asked for explicitly.',
      groups: [
        {
          id: 'testStatus', type: 'radio', label: 'Are you submitting a test score?',
          help: 'Not submitting is genuinely neutral here — the test weight is removed and ' +
            'the rest is rescaled. It will still disqualify you at schools that require one.',
          options: [
            { id: 'ts_yes', label: 'Yes, I have a score' },
            { id: 'ts_no', label: 'No, I am not submitting one' },
            { id: 'ts_planned', label: 'Not yet, but I intend to' }
          ]
        },
        {
          id: 'testType', type: 'radio', label: 'Which test?', optional: true,
          options: [
            { id: 'tt_focus', label: 'GMAT Focus Edition', kind: 'focus' },
            { id: 'tt_gmat', label: 'GMAT 10th Edition', kind: 'gmat' },
            { id: 'tt_gre', label: 'GRE', kind: 'gre' }
          ]
        },
        {
          id: 'testScore', type: 'number', label: 'Total score', optional: true,
          min: 130, max: 805, step: 5,
          help: 'GMAT Focus 205–805, GMAT 10th Edition 200–800. For the GRE, put your total ' +
            'here and your quant score below.'
        },
        {
          id: 'greQuant', type: 'number', label: 'GRE quantitative score', optional: true,
          min: 130, max: 170, step: 1,
          help: 'Only needed for the GRE. Several finance programmes look at quant alone — ' +
            'Stockholm requires at least 155 and sets no verbal minimum.'
        },
        {
          id: 'english', type: 'radio', label: 'English',
          help: 'Two TOEFL standards are now in circulation: the 0–120 scale for tests sat ' +
            'before 21 January 2026, and a banded scale after it. CEMS rejects TOEFL MyBest ' +
            'Scores and the IELTS One Skill Retake outright.',
          options: [
            { id: 'en_native', label: 'Native speaker, or a full degree taught in English', v: 1.0, level: 'C2' },
            { id: 'en_c2', label: 'C2 — IELTS 8.0+, TOEFL 110+', v: 1.0, level: 'C2' },
            { id: 'en_c1h', label: 'C1 strong — IELTS 7.5, TOEFL 105', v: 0.9, level: 'C1' },
            { id: 'en_c1', label: 'C1 — IELTS 7.0, TOEFL 100', v: 0.8, level: 'C1' },
            { id: 'en_b2', label: 'B2 — IELTS 6.5, TOEFL 90', v: 0.6, level: 'B2' },
            { id: 'en_none', label: 'Below B2, or not tested yet', v: 0.35, level: 'none' }
          ]
        }
      ]
    },

    {
      id: 'quant',
      title: 'Quantitative preparation',
      blurb: 'European programmes gate on ECTS credits; US ones gate on named courses. ' +
        'Both are pass/fail, so answer these as accurately as you can.',
      groups: [
        {
          id: 'ectsQuant', type: 'radio', label: 'ECTS in statistics, research methods or quantitative subjects',
          options: [
            { id: 'eq_0', label: 'None', n: 0, v: 0 },
            { id: 'eq_9', label: '1 – 9 ECTS', n: 5, v: 0.25 },
            { id: 'eq_19', label: '10 – 19 ECTS', n: 15, v: 0.5 },
            { id: 'eq_29', label: '20 – 29 ECTS', n: 25, v: 0.75 },
            { id: 'eq_30', label: '30 ECTS or more', n: 35, v: 1.0 }
          ]
        },
        {
          id: 'ectsBusiness', type: 'radio', label: 'ECTS in business administration or economics',
          options: [
            { id: 'eb_0', label: 'None', n: 0, v: 0 },
            { id: 'eb_29', label: '1 – 29 ECTS', n: 15, v: 0.3 },
            { id: 'eb_44', label: '30 – 44 ECTS', n: 37, v: 0.55 },
            { id: 'eb_59', label: '45 – 59 ECTS', n: 52, v: 0.75 },
            { id: 'eb_89', label: '60 – 89 ECTS', n: 75, v: 0.9 },
            { id: 'eb_90', label: '90 ECTS or more', n: 100, v: 1.0 }
          ]
        },
        {
          id: 'ectsAccFin', type: 'radio', label: 'ECTS in accounting and finance', optional: true,
          options: [
            { id: 'ea_0', label: 'None', n: 0, v: 0 },
            { id: 'ea_9', label: '1 – 9 ECTS', n: 5, v: 0.35 },
            { id: 'ea_19', label: '10 – 19 ECTS', n: 15, v: 0.7 },
            { id: 'ea_20', label: '20 ECTS or more', n: 25, v: 1.0 }
          ]
        },
        {
          id: 'maths', type: 'checkbox', label: 'Mathematics you have actually taken', optional: true,
          help: 'Princeton expects linear algebra, multivariable calculus, differential ' +
            'equations and probability at intermediate undergraduate level. MIT names ' +
            'calculus, statistics, linear algebra, probability and Python.',
          options: [
            { id: 'ma_calc', label: 'Single-variable calculus', v: 0.14 },
            { id: 'ma_multi', label: 'Multivariable calculus', v: 0.2 },
            { id: 'ma_lin', label: 'Linear algebra', v: 0.22 },
            { id: 'ma_prob', label: 'Probability and statistics', v: 0.22 },
            { id: 'ma_ode', label: 'Differential equations', v: 0.12 },
            { id: 'ma_econ', label: 'Econometrics', v: 0.1 }
          ]
        },
        {
          id: 'programming', type: 'radio', label: 'Programming', optional: true,
          help: 'MIT admits candidates without Python but requires proficiency before ' +
            'matriculation, and every student must pass a Python literacy test.',
          options: [
            { id: 'pr_none', label: 'None', v: 0 },
            { id: 'pr_basic', label: 'Basic — coursework exposure', v: 0.4 },
            { id: 'pr_good', label: 'Comfortable in Python or R', v: 0.8 },
            { id: 'pr_strong', label: 'Strong — used professionally or in research', v: 1.0 }
          ]
        },
        {
          id: 'cfa', type: 'checkbox', label: 'CFA', optional: true,
          help: 'Not decoration: a CFA Level 1 pass is the only accepted substitute for the ' +
            'GMAT at LBS\'s Masters in Financial Analysis, and WashU names it as a valid ' +
            'signal for test non-submitters.',
          options: [
            { id: 'cfa_l1', label: 'CFA Level 1 passed', v: 1 },
            { id: 'cfa_reg', label: 'Registered for CFA Level 1', v: 0 }
          ]
        }
      ]
    },

    {
      id: 'experience',
      title: 'Experience',
      blurb: 'Internships are what these programmes want. Full-time experience helps ' +
        'only up to a point, then starts costing you — and at several schools it is a ' +
        'hard disqualification.',
      groups: [
        {
          id: 'internMonths', type: 'radio', label: 'Internship experience',
          help: 'For scale: INSEAD\'s management intake averages about 10 months of ' +
            'experience, Duke\'s averages 14, and LSE\'s averages roughly 3.',
          options: [
            { id: 'im_0', label: 'None', n: 0, v: 0 },
            { id: 'im_3', label: '1 – 3 months', n: 2, v: 0.3 },
            { id: 'im_6', label: '4 – 6 months', n: 5, v: 0.55 },
            { id: 'im_12', label: '7 – 12 months', n: 9, v: 0.85 },
            { id: 'im_more', label: 'More than 12 months', n: 15, v: 1.0 }
          ]
        },
        {
          id: 'internQuality', type: 'radio', label: 'Where those internships were', optional: true,
          options: [
            { id: 'iq_none', label: 'Not applicable', v: 0 },
            { id: 'iq_small', label: 'Small or local organisations', v: 0.45 },
            { id: 'iq_national', label: 'Recognised national employers', v: 0.75 },
            { id: 'iq_global', label: 'Global names — the banks, the consultancies, the big tech firms', v: 1.0 }
          ],
          examples: {
            intro: 'Read "Global" as: a business person in another country would recognise ' +
              'the name without you explaining what it does. The bucket people misjudge is ' +
              'the middle one — "National" — a big, real employer well known at home that ' +
              'does not travel abroad as a household name.',
            sections: [
              {
                heading: 'Recognised national employers — the tricky middle tier',
                kind: 'why',
                items: [
                  ['Eni', 'Italian oil & gas major'],
                  ['Enel', 'Italian national utility'],
                  ['Iberdrola', 'Spanish national utility'],
                  ['Intesa Sanpaolo', 'Italy’s largest bank'],
                  ['UniCredit', 'major bank across ~13 European countries'],
                  ['BBVA', 'major Spanish bank'],
                  ['Commerzbank', 'major German bank'],
                  ['Amundi', 'large European asset manager'],
                  ['Deutsche Börse', 'German stock exchange operator'],
                  ['Euronext', 'pan-European exchange operator'],
                  ['Booz Allen Hamilton', 'US government-facing consultancy'],
                  ['BearingPoint', 'European consultancy'],
                  ['Revolut', 'fast-growing European fintech'],
                  ['Klarna', 'Swedish fintech'],
                  ['N26', 'German fintech'],
                  ['Barilla', 'Italian pasta and food group'],
                  ['Sky', 'UK broadcaster'],
                  ['A national central bank or government ministry', 'known at home, not abroad']
                ]
              },
              {
                heading: 'Global names — strategy & professional services', kind: 'list',
                items: ['McKinsey', 'Bain', 'BCG', 'Oliver Wyman', 'Kearney', 'Roland Berger',
                  'Accenture', 'Deloitte', 'EY', 'KPMG', 'PwC', 'Mercer']
              },
              {
                heading: 'Global names — banking, investing & fintech', kind: 'list',
                items: ['Goldman Sachs', 'Morgan Stanley', 'JPMorgan Chase', 'Lazard',
                  'Rothschild & Co', 'Barclays', 'Deutsche Bank', 'UBS', 'HSBC', 'BlackRock',
                  'Blackstone', 'KKR', 'Visa', 'Mastercard', 'Stripe']
              },
              {
                heading: 'Global names — technology', kind: 'list',
                items: ['Google', 'Amazon', 'Apple', 'Meta', 'Microsoft', 'NVIDIA', 'Tesla',
                  'Netflix', 'IBM', 'Samsung', 'Salesforce', 'Uber', 'Airbnb']
              },
              {
                heading: 'Global names — consumer, retail & luxury', kind: 'list',
                items: ['Procter & Gamble', 'Nike', 'LVMH', 'Unilever', 'Nestlé',
                  'L’Oréal', 'Coca-Cola', 'PepsiCo', 'Adidas', 'IKEA', 'H&M',
                  'Chanel', 'Hermès']
              },
              {
                heading: 'Global names — automotive, industrial, energy & pharma', kind: 'list',
                items: ['Mercedes-Benz', 'BMW', 'Ferrari', 'Volkswagen', 'Airbus', 'Boeing',
                  'Siemens', 'Shell', 'BP', 'Johnson & Johnson', 'Pfizer', 'Roche']
              },
              {
                heading: 'Global names — public sector & multilateral', kind: 'list',
                items: ['World Bank', 'IMF', 'United Nations', 'European Central Bank',
                  'European Commission', 'OECD', 'NATO']
              }
            ],
            note: 'Not listed? Compare it to the closest peer above. Most first internships ' +
              'are honestly Small/local — that is the normal, correct answer for most ' +
              'people, not a weak one.'
          }
        },
        {
          id: 'fullTime', type: 'radio', label: 'Full-time work experience after graduating',
          help: 'This is the factor most likely to disqualify you outright. LBS caps its ' +
            'finance master\'s at two years, Imperial reviews anything over two, and ' +
            'Warwick sends applicants with three or more to its MBA instead.',
          options: [
            { id: 'ft_0', label: 'None', n: 0 },
            { id: 'ft_11', label: 'Under a year', n: 6 },
            { id: 'ft_23', label: '1 – 2 years', n: 18 },
            { id: 'ft_35', label: '2 – 3 years', n: 30 },
            { id: 'ft_59', label: '3 – 5 years', n: 48 },
            { id: 'ft_60', label: 'More than 5 years', n: 72 }
          ]
        },
        {
          id: 'leadership', type: 'radio', label: 'Leadership and extracurriculars',
          options: [
            { id: 'ld_none', label: 'Nothing significant', v: 0 },
            { id: 'ld_member', label: 'Active member of societies or clubs', v: 0.35 },
            { id: 'ld_lead', label: 'Led a project, committee or society', v: 0.65 },
            { id: 'ld_pres', label: 'President or founder of a substantial organisation', v: 0.9 },
            { id: 'ld_nat', label: 'National-level role, or founded something with real traction', v: 1.0 }
          ]
        },
        {
          id: 'international', type: 'radio', label: 'International exposure',
          options: [
            { id: 'in_none', label: 'Studied and worked in one country', v: 0.15 },
            { id: 'in_exch', label: 'Exchange semester abroad', v: 0.55 },
            { id: 'in_degree', label: 'A full degree or a long placement abroad', v: 0.85 },
            { id: 'in_multi', label: 'Lived or worked in several countries', v: 1.0 }
          ]
        }
      ]
    },

    {
      id: 'application',
      title: 'Your application',
      blurb: 'Weighting here varies more than anywhere else. Bocconi\'s standard route ' +
        'has no interview and no references; RSM\'s has no motivation letter either. ' +
        'At those two, the transcript is very nearly the whole file.',
      groups: [
        {
          id: 'essays', type: 'radio', label: 'Essays and motivation letter',
          options: [
            { id: 'es_strong', label: 'Strong — specific, well argued, tied to the programme', v: 1.0 },
            { id: 'es_medium', label: 'Medium — competent but generic', v: 0.6 },
            { id: 'es_weak', label: 'Weak', v: 0.25 },
            { id: 'es_none', label: 'Not written yet', v: 0.4 }
          ]
        },
        {
          id: 'recs', type: 'radio', label: 'References', optional: true,
          options: [
            { id: 'rc_strong', label: 'Strong, from people who know my work well', mod: 2 },
            { id: 'rc_medium', label: 'Adequate', mod: 0 },
            { id: 'rc_weak', label: 'Weak or generic', mod: -2 },
            { id: 'rc_na', label: 'Not required where I am applying', mod: 0 }
          ]
        },
        {
          id: 'languages', type: 'radio', label: 'Languages you can work in',
          help: 'Some CEMS member schools require three languages at specified levels at ' +
            'the point of admission.',
          options: [
            { id: 'lg_1', label: 'One', mod: 0, n: 1 },
            { id: 'lg_2', label: 'Two', mod: 1, n: 2 },
            { id: 'lg_3', label: 'Three or more', mod: 2, n: 3 }
          ]
        },
        {
          id: 'round', type: 'radio', label: 'When are you applying?',
          help: 'This does not mean the same thing everywhere. INSEAD states its five ' +
            'rounds carry no competitive disadvantage; RSM closes at 300 applications ' +
            'whether or not the deadline has passed. Each school below is tagged with ' +
            'which regime it follows.',
          options: [
            { id: 'rd_first', label: 'First round, or early in a rolling cycle', idx: 0 },
            { id: 'rd_mid', label: 'A middle round', idx: 1 },
            { id: 'rd_last', label: 'Final round, or late in a rolling cycle', idx: 2 }
          ]
        },
        {
          id: 'cems', type: 'checkbox', label: 'CEMS and double degrees', optional: true,
          options: [{
            id: 'cems_interest', label: 'I want a CEMS or double-degree track',
            note: 'Not a separate application — you must first be admitted to a member school.'
          }]
        }
      ]
    }
  ];

  /* ----------------------------------------------------------------------- */
  /* Round regimes                                                            */
  /* ----------------------------------------------------------------------- */

  var REGIMES = {
    A: { label: 'Rounds are equal', mods: [0, 0, 0],
         note: 'The school states rounds carry no competitive disadvantage.' },
    B: { label: 'Equal to admit, not to fund', mods: [0, -1, -2],
         note: 'Admission criteria do not change, but the popular seats and most ' +
               'scholarships go in the earlier rounds.' },
    C: { label: 'Capacity-limited or rolling', mods: [0, -2, -5],
         note: 'Seats fill as the cycle runs. Applying late can mean the door is shut ' +
               'regardless of your profile.' },
    D: { label: 'Single deadline', mods: [0, 0, 0],
         note: 'Everything is read after the deadline. Applying early gains you nothing.' }
  };

  /* ----------------------------------------------------------------------- */
  /* Schools                                                                  */
  /*                                                                          */
  /* `threshold` and `strong` are CALIBRATION (CAL) — no school publishes a    */
  /* points requirement. `facts` are sourced individually.                    */
  /* ----------------------------------------------------------------------- */

  function g(type, value, label, src) { return { type: type, value: value, label: label, src: src }; }

  var SCHOOLS = [
    /* ---------------- Management ---------------- */
    {
      id: 'hec-mim', name: 'HEC Paris — MiM', tracks: ['mim'], region: 'France',
      threshold: 80, strong: 88, regime: 'A',
      profile: 'holistic', because: 'Essays and a live interview sit at the centre of the route, and the school publishes a median GMAT rather than a formula.',
      test: { policy: 'required', note: 'GMAT, GRE or TAGE MAGE. No waivers.', src: 'OFF' },
      facts: [
        { k: 'Median GMAT of the incoming class', v: '710', src: 'OFF' },
        { k: 'Recommended GMAT Focus', v: '645–655', src: 'OFF' },
        { k: 'Average age', v: '23', src: 'TP' },
        { k: 'Interview', v: 'Live, in English, on campus or remote', src: 'OFF' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: []
    },
    {
      id: 'insead-mim', name: 'INSEAD — MiM', tracks: ['mim'], region: 'France / Singapore',
      threshold: 80, strong: 88, regime: 'A',
      profile: 'holistic', because: 'A Kira video interview of five recorded answers, then an alumni interview.',
      test: { policy: 'required', note: 'Mandatory. No minimum, but Focus guidance is 60th percentile verbal and 66th quant.', src: 'OFF' },
      facts: [
        { k: 'Class of 2026', v: '202 students, average age 23, 43% women, 33 nationalities', src: 'TP' },
        { k: 'Average work experience', v: '10 months', src: 'TP' },
        { k: 'Rounds', v: 'Five, with roughly equal seat allocations and no disadvantage to later ones', src: 'OFF' },
        { k: 'Interview', v: 'Kira video (4 spoken, 1 written) then an alumni interview', src: 'OFF' },
        { k: 'Tuition', v: '€57,870', src: 'OFF' },
        { k: 'Scholarships', v: '36% of the class, averaging €13,300', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'lbs-mim', name: 'London Business School — MiM', tracks: ['mim'], region: 'UK',
      threshold: 79, strong: 87, regime: 'C',
      profile: 'holistic', because: 'Essays and an interview, and the school declines to publish an average score at all.',
      test: { policy: 'required', note: 'GMAT or GRE required.', src: 'OFF' },
      facts: [
        { k: 'Experience', v: '0–2 years typical; recent graduates preferred', src: 'OFF' },
        { k: 'Average GMAT', v: 'Not published by the school. Third-party sources say ~690.', src: 'NP' },
        { k: 'Tuition', v: '£52,950 (2026) + £200', src: 'OFF' },
        { k: 'Funding', v: 'About 20% of the Graduate Masters class receives some', src: 'OFF' }
      ],
      gates: [g('maxWorkMonths', 30, 'Aimed at 0–2 years of experience; beyond that you are outside the target profile', 'OFF')]
    },
    {
      id: 'lse-mim', name: 'LSE — Master\'s in Management', tracks: ['mim'], region: 'UK',
      threshold: 80, strong: 88, regime: 'D',
      profile: 'academic', because: 'One deadline, everything read afterwards, an entry requirement stated as a 2:1, and no interview on the standard route.',
      test: { policy: 'conditional', note: 'Required unless you hold a UK degree.', src: 'OFF' },
      facts: [
        { k: 'Selectivity', v: '1,125 applications for 75 places — about 6.7%', src: 'OFF' },
        { k: 'Entry requirement', v: '2:1 or international equivalent', src: 'OFF' },
        { k: 'Experience', v: '3 months or more is ideal but not required; the 2024/25 cohort averaged about 3 months', src: 'OFF' },
        { k: 'Average GMAT', v: 'None published, and no minimum is set', src: 'NP' },
        { k: 'Tuition', v: '£42,900 (2026/27), home and overseas alike', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'essec-mim', name: 'ESSEC — MiM', tracks: ['mim', 'marketing'], region: 'France',
      threshold: 76, strong: 85, regime: 'B',
      profile: 'holistic', because: 'Shortlisting on file, then a 45-minute interview.',
      test: { policy: 'required', note: 'GMAT, GMAT Focus, GRE, TAGE MAGE or CAT.', src: 'OFF' },
      facts: [
        { k: 'Average GMAT', v: 'None published, and no minimum set. Consultancy "competitive ranges" are estimates.', src: 'NP' },
        { k: 'Class', v: 'Average age 23, 50% women, 50+ nationalities', src: 'OFF' },
        { k: 'English', v: 'TOEIC 850 / IELTS 6.5 / TOEFL 95 / Cambridge B2 First 175', src: 'OFF' },
        { k: 'Interview', v: '45-minute videoconference after shortlisting', src: 'OFF' },
        { k: 'Tuition', v: '€23,100 intensive; €46,200–69,300 flexible track', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'escp-mim', name: 'ESCP — MiM', tracks: ['mim'], region: 'Europe (multi-campus)',
      threshold: 73, strong: 82, regime: 'C',
      profile: 'balanced', because: 'A test is required but no minimum is published, alongside a conventional file.',
      test: { policy: 'required', note: 'GMAT, GRE, CAT or TAGE MAGE — or ESCP\'s own test if none is available. No published minimum.', src: 'OFF' },
      facts: [
        { k: 'Average entry age', v: '22', src: 'OFF' },
        { k: 'Class', v: '~1,300 students, 57 nationalities, 50/50 gender', src: 'OFF' },
        { k: 'Experience', v: 'A plus, not required. The Global track needs at least 3 months.', src: 'OFF' },
        { k: 'English', v: 'B2 — IELTS 6.5 / TOEFL 90', src: 'OFF' },
        { k: 'Tuition', v: '€24,300/yr European, €28,000/yr non-European', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'bocconi-mgmt', name: 'Bocconi — MSc Management', tracks: ['mim'], region: 'Italy',
      threshold: 74, strong: 83, regime: 'B',
      profile: 'metric', because: 'No interview and no reference letters on the standard route. GPA is named as a compulsory pillar, Bocconi may recalculate it from your transcript, and a test floor applies to everyone.',
      test: { policy: 'required', note: 'GMAT, GMAT Focus, GRE or Bocconi\'s own online test.', src: 'OFF' },
      facts: [
        { k: 'Test floors', v: 'GMAT 500 / Focus 485 / GRE per a published combination table', src: 'OFF' },
        { k: 'Average GMAT of admits', v: 'Not published for any programme', src: 'NP' },
        { k: 'Interview', v: 'None on the standard route, and no reference letters', src: 'OFF' },
        { k: 'GPA', v: 'A compulsory pillar, no minimum published; Bocconi may recalculate it from your transcript', src: 'OFF' },
        { k: 'Rounds', v: 'The sought-after seats and most scholarships go early', src: 'OFF' }
      ],
      gates: [g('testMinGmat', 500, 'GMAT 500 / Focus 485 floor', 'OFF')]
    },
    {
      id: 'bocconi-im', name: 'Bocconi — MSc International Management', tracks: ['mim'], region: 'Italy',
      threshold: 78, strong: 86, regime: 'B',
      profile: 'metric', because: 'The same numbers-led route as the other Bocconi programmes, with a higher test floor and a recorded video on the double-degree tracks.',
      test: { policy: 'required', note: 'Higher floor than the standard programmes.', src: 'OFF' },
      facts: [
        { k: 'Test floor', v: 'GMAT 555 for the ESSEC and Asia double-degree tracks', src: 'OFF' },
        { k: 'Conflicting figure', v: 'A third-party source states 600 for International Management. Unresolved — verify before relying on it.', src: 'TP' },
        { k: 'Interview', v: 'A recorded video is mandatory for the CEMS, Asia and ESSEC tracks', src: 'OFF' }
      ],
      gates: [g('testMinGmat', 555, 'GMAT 555 floor on the double-degree tracks', 'OFF')]
    },
    {
      id: 'rsm-mim', name: 'RSM Rotterdam — MScBA Management', tracks: ['mim'], region: 'Netherlands',
      threshold: 72, strong: 81, regime: 'C',
      profile: 'metric', because: 'No interview, no motivation letter and no references on the standard route — a test minimum and an ECTS prerequisite do the work.',
      test: { policy: 'conditional', note: 'Mandatory unless you hold a Dutch research-university bachelor. Superscore accepted.', src: 'OFF' },
      facts: [
        { k: 'Test minimum', v: 'GMAT Focus 565 / GMAT 600. Below that you may apply but face extra scrutiny.', src: 'OFF' },
        { k: 'Prerequisite', v: '20 EC research methods and statistics, of which 10 EC quantitative', src: 'TP' },
        { k: 'Process', v: 'No interview, no motivation letter, no references on the standard route', src: 'TP' },
        { k: 'Capacity', v: 'Closes 15 May or at 300 applications, whichever comes first — historically months early', src: 'TP' },
        { k: 'Tuition', v: '€2,695 EU/EEA statutory; €25,800 non-EU (2026–27)', src: 'TP' }
      ],
      gates: [
        g('testMinGmat', 600, 'GMAT 600 / Focus 565 minimum', 'OFF'),
        g('minEctsQuant', 10, '10 EC of quantitative methods required', 'TP')
      ]
    },
    {
      id: 'imperial-mgmt', name: 'Imperial College — MSc Management', tracks: ['mim'], region: 'UK',
      threshold: 76, strong: 85, regime: 'C',
      profile: 'balanced', because: 'Two references, a CV, three essays and a video interview, alongside published test guidance.',
      test: { policy: 'optional', note: 'Strongly recommended, not mandatory, if quant strength is evidenced another way.', src: 'OFF' },
      facts: [
        { k: 'Test guidance', v: 'Focus at or above the 55th percentile; GMAT 600+, with a current average of 653', src: 'OFF' },
        { k: 'Entry requirement', v: 'First or 2:1, any discipline', src: 'OFF' },
        { k: 'Experience', v: 'More than 2 years triggers individual review', src: 'OFF' },
        { k: 'Interview', v: 'Asynchronous video, about 20 minutes', src: 'OFF' },
        { k: 'Application', v: 'Two references, CV and three essays of 350–500 words', src: 'OFF' },
        { k: 'Tuition', v: '£47,000, £6,500 deposit', src: 'OFF' }
      ],
      gates: [g('maxWorkMonths', 30, 'Over 2 years of experience is reviewed individually rather than in the standard pool', 'OFF')]
    },
    {
      id: 'warwick-mgmt', name: 'Warwick WBS — MSc Management', tracks: ['mim'], region: 'UK',
      threshold: 68, strong: 78, regime: 'C',
      profile: 'transcript', because: 'No test, no interview. The published requirement is a 2:1 and nothing else is scored.',
      test: { policy: 'none', note: 'Neither GMAT nor GRE appears in the entry requirements.', src: 'TP' },
      facts: [
        { k: 'Entry requirement', v: '2:1 in any subject; non-business backgrounds welcomed', src: 'TP' },
        { k: 'Experience', v: 'Three or more years post-graduation and you are redirected to the MBA', src: 'TP' },
        { k: 'Interview', v: 'None', src: 'TP' },
        { k: 'Tuition', v: '£38,570 overseas / £30,320 UK (Sept 2026)', src: 'TP' }
      ],
      gates: [g('maxWorkMonths', 36, 'Three or more years of experience and you are redirected to the MBA', 'TP')]
    },
    {
      id: 'manchester-mgmt', name: 'Alliance Manchester — MSc Management', tracks: ['mim'], region: 'UK',
      threshold: 66, strong: 76, regime: 'C',
      profile: 'transcript', because: 'The published criteria are the grade average, class position and the standing of the institution you studied at — and no test is used at all.',
      test: { policy: 'none', note: 'Not required and not used.', src: 'TP' },
      facts: [
        { k: 'Entry requirement', v: 'First or 2:1 with a 60% average', src: 'TP' },
        { k: 'Stated criteria', v: 'Grade average, class position, and the standing of the institution you studied at', src: 'TP' },
        { k: 'English', v: 'IELTS 6.5 to be considered, 7.0 to enrol', src: 'TP' },
        { k: 'Tuition', v: '£33,100 international / £20,000 UK (2026)', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'wu-simc', name: 'WU Vienna — Strategy, Innovation & Management Control', tracks: ['mim'], region: 'Austria',
      threshold: 75, strong: 84, regime: 'C',
      profile: 'balanced', because: 'A hard GMAT floor and an ECTS prerequisite screen the file, but a motivation letter, a video interview and a group discussion decide it afterwards.',
      test: { policy: 'required', note: 'GMAT mandatory. GRE is not accepted at all, and experience cannot waive it.', src: 'TP' },
      facts: [
        { k: 'Selectivity', v: 'About 600 applications for 60 places — roughly 10%', src: 'TP' },
        { k: 'Test minimum', v: 'GMAT 600 / GMAT Focus 565', src: 'TP' },
        { k: 'Prerequisite', v: 'A prior degree of 180 ECTS with at least 45 ECTS in business or economics', src: 'TP' },
        { k: 'Process', v: 'Document screening, motivation letter, video interview and a group discussion', src: 'TP' }
      ],
      gates: [
        g('testMinGmat', 600, 'GMAT 600 / Focus 565 minimum, no GRE accepted', 'TP'),
        g('minEctsBusiness', 45, '45 ECTS of business or economics required', 'TP')
      ]
    },
    {
      id: 'cbs-mgmt', name: 'Copenhagen CBS — cand.merc. / MSc EBA', tracks: ['mim'], region: 'Denmark',
      threshold: 70, strong: 80, regime: 'C',
      profile: 'transcript', because: 'No test and no minimum GPA: a ranked comparison of transcripts against the rest of the pool.',
      test: { policy: 'none', note: 'No GMAT or GRE requirement.', src: 'TP' },
      facts: [
        { k: 'Selection', v: 'No minimum GPA — a ranked comparison against the rest of the applicant pool', src: 'TP' },
        { k: 'Prerequisite', v: '90 ECTS, of which 45 across six core areas (micro, organisation, marketing, quantitative methods, accounting, finance) at 5 ECTS minimum each', src: 'TP' },
        { k: 'Tuition', v: 'Free for EU/EEA/Swiss; about €32,000 total otherwise', src: 'TP' },
        { k: 'Deadlines', v: 'Applicants needing a residence permit apply by 15 January', src: 'TP' }
      ],
      gates: [
        g('minEctsBusiness', 45, '45 ECTS across six named core business areas', 'TP'),
        g('minEctsQuant', 5, 'Quantitative methods is one of the six required core areas', 'TP')
      ]
    },
    {
      id: 'nova-imm', name: 'Nova SBE — International Master in Management', tracks: ['mim'], region: 'Portugal',
      threshold: 68, strong: 78, regime: 'B',
      profile: 'holistic', because: 'Test scores are optional supporting documents. The one hard requirement is twelve weeks of professional experience.',
      test: { policy: 'optional', note: 'Described as supporting documents that may enrich an application. No minimum.', src: 'TP' },
      facts: [
        { k: 'Hard requirement', v: 'At least 12 weeks of cumulative professional experience. Internships count; volunteering does not.', src: 'TP' },
        { k: 'English', v: 'C1 — higher than Nova\'s other master\'s programmes, which need B2', src: 'TP' },
        { k: 'Class', v: '~69 students, average age 23–24, 93% non-Portuguese, 35 nationalities', src: 'TP' },
        { k: 'Admitted GMAT', v: 'Reported to cluster 620–710. Unverified.', src: 'TP' },
        { k: 'Tuition', v: '€11,900 EU/EEA, €13,000 non-EU (2026/27)', src: 'TP' },
        { k: 'CEMS', v: 'CEMS and double-degree places are decided in the earlier international round', src: 'TP' }
      ],
      gates: [
        g('minWorkMonths', 3, 'At least 12 weeks of professional experience, internships included', 'TP'),
        g('minEnglish', 'C1', 'C1 English required', 'TP')
      ]
    },
    {
      id: 'ie-mim', name: 'IE Business School — Master in Management', tracks: ['mim'], region: 'Spain',
      threshold: 70, strong: 80, regime: 'C',
      profile: 'holistic', because: 'An online assessment with recorded answers, IE\'s own entrance exam, then a personal interview.',
      test: { policy: 'required', note: 'GMAT, GRE or IE\'s own ieGAT, which is machine-proctored and available around the clock.', src: 'OFF' },
      facts: [
        { k: 'Average GMAT', v: 'Not published. The "~660" figure in circulation is a consultancy estimate.', src: 'NP' },
        { k: 'Class', v: '~248 students, average age 23, 0–3 years of experience', src: 'TP' },
        { k: 'Process', v: 'Application, online assessment (1 written and 2 recorded answers), entrance exam, then a personal interview', src: 'OFF' },
        { k: 'English', v: 'TOEFL 100 / IELTS 7.0 / Duolingo 130', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'iese-mim', name: 'IESE — MiM', tracks: ['mim'], region: 'Spain',
      threshold: 74, strong: 83, regime: 'C',
      profile: 'holistic', because: 'An interview by invitation, with an optional Assessment Day on top.',
      test: { policy: 'required', note: 'GMAT, GRE or the IESE Test.', src: 'OFF2' },
      facts: [
        { k: 'Test scores', v: 'No MiM average published. IESE publishes a Focus 545–715 band across all programmes.', src: 'NP' },
        { k: 'Class of 2026', v: '149 students, 31 nationalities, 74% from outside Spain', src: 'TP' },
        { k: 'Interview', v: 'Required, by invitation. A separate Assessment Day is optional and not a substitute.', src: 'OFF2' },
        { k: 'English', v: 'TOEFL 100 / IELTS 7.0', src: 'OFF2' }
      ],
      gates: []
    },
    {
      id: 'stgallen-sim', name: 'St. Gallen — Strategy & International Management', tracks: ['mim'], region: 'Switzerland',
      threshold: 79, strong: 87, regime: 'C',
      profile: 'academic', because: 'The school states that the average grade on your degree certificate is decisive, and that accounting knowledge must be proven or examined.',
      test: { policy: 'required', note: 'GMAT total, or GRE where both verbal and quant are decisive. Maximum five years old.', src: 'OFF2' },
      facts: [
        { k: 'Average GMAT', v: 'Not published. Third-party claims range from 680 to 720 and contradict each other.', src: 'NP' },
        { k: 'Entry requirement', v: 'The average grade on your degree certificate is decisive. Accounting knowledge must be proven or examined.', src: 'OFF2' },
        { k: 'Class size', v: 'About 55 admitted per cohort', src: 'TP' },
        { k: 'Published weighting', v: 'The widely-circulated 20/20/20/10/30 split could not be confirmed on the school\'s own site. Do not rely on it.', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'duke-mms', name: 'Duke Fuqua — MMS Foundations of Business', tracks: ['mim'], region: 'USA',
      threshold: 72, strong: 82, regime: 'C',
      profile: 'balanced', because: 'Publishes both a GPA average and test ranges, and still reads essays and a video interview.',
      test: { policy: 'optional', note: 'Policy not confirmed this cycle; ranges are published for submitters.', src: 'NP' },
      facts: [
        { k: 'GMAT Focus', v: '525–695 (middle 80%)', src: 'OFF' },
        { k: 'GRE', v: 'Verbal 151–168, Quant 152–170 (middle 80%)', src: 'OFF' },
        { k: 'Average GPA', v: '3.48', src: 'OFF' },
        { k: 'Class of 2027', v: '199 students, average age 22, 40% women, 24 countries, 122 undergraduate institutions', src: 'OFF' },
        { k: 'Experience', v: 'Average 14 months, and only 16% have any prior work experience', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'ross-mm', name: 'Michigan Ross — Master of Management', tracks: ['mim'], region: 'USA',
      threshold: 70, strong: 80, regime: 'C',
      profile: 'metric', because: 'The test is reported to be waived outright at a 3.30 GPA, and the class averages 3.65 — the transcript is doing the work.',
      test: { policy: 'optional', note: 'Reported to be waived at a cumulative undergraduate GPA of 3.30 or above. Third-party; worth verifying directly.', src: 'TP' },
      facts: [
        { k: 'Average GPA', v: '3.65 (class of 2025)', src: 'TP' },
        { k: 'Class', v: '121 students, 57% women', src: 'TP' },
        { k: 'Test averages', v: 'Not published', src: 'NP' }
      ],
      gates: []
    },

    /* ---------------- Finance ---------------- */
    {
      id: 'lbs-mfa', name: 'London Business School — Masters in Financial Analysis', tracks: ['mif'], region: 'UK',
      threshold: 80, strong: 88, regime: 'C',
      profile: 'balanced', because: 'A required test with a published class average, read alongside essays and an interview.',
      test: { policy: 'required', note: 'No waivers. A CFA Level 1 pass is the only accepted substitute.', src: 'OFF' },
      facts: [
        { k: 'Average GMAT', v: '706 (2022), 702 (2023), 698 (2024)', src: 'OFF2' },
        { k: 'Entry requirement', v: 'UK First or 2:1 equivalent, or GPA of at least 3.3, in any subject', src: 'OFF' },
        { k: 'Class of 2024', v: '221 students, average age 23, 41% women, 54 nationalities, 96% international', src: 'OFF2' },
        { k: 'Experience cap', v: 'At most 2 years post-graduation. Internships during your degree do not count.', src: 'OFF' },
        { k: 'Tuition', v: '£52,950 (2026) + £200', src: 'OFF' }
      ],
      gates: [g('maxWorkMonths', 24, 'Hard cap of 2 years of post-graduation experience', 'OFF')]
    },
    {
      id: 'oxford-mfe', name: 'Oxford Saïd — MSc Financial Economics', tracks: ['mif'], region: 'UK',
      threshold: 86, strong: 92, regime: 'C',
      profile: 'quant', because: 'The class is concentrated in economics, maths, statistics and engineering, and the test is required with no waivers.',
      test: { policy: 'required', note: 'GMAT or GRE required, no waivers, and no minimum score.', src: 'TP' },
      facts: [
        { k: 'Average GMAT', v: 'Three third-party figures conflict: 750/698 Focus, 743/717, and a median of 720 with a middle-80% of 700–740. Unresolved.', src: 'TP' },
        { k: 'Acceptance rate', v: 'An estimate of ~9% circulates. Not published by the school.', src: 'TP' },
        { k: 'Class', v: '~70–80 students, average age 23–24, concentrated in economics, maths, statistics and engineering', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'imperial-fin', name: 'Imperial College — MSc Finance', tracks: ['mif'], region: 'UK',
      threshold: 78, strong: 86, regime: 'C',
      profile: 'quant', because: 'The degree itself must be in a highly quantitative discipline, and GRE Quant is singled out as strengthening the file.',
      test: { policy: 'optional', note: 'Recommended, not mandatory.', src: 'OFF' },
      facts: [
        { k: 'Test guidance', v: 'Focus at or above the 55th percentile; GMAT 600+, current average 645. GRE Quant 159 strengthens.', src: 'OFF' },
        { k: 'Entry requirement', v: 'First preferred, 2:1 considered — and it must be in a highly quantitative discipline', src: 'OFF' },
        { k: 'English', v: 'IELTS 7.0 (6.5 per section), TOEFL 100 or the new banded 5.0, Duolingo 125', src: 'OFF' },
        { k: 'Interview', v: 'Video, about 20 minutes', src: 'OFF' },
        { k: 'Tuition', v: '£51,000 (Aug 2027), £6,500 deposit', src: 'OFF' }
      ],
      gates: [g('quantDegree', true, 'Your degree must be in a highly quantitative discipline', 'OFF')]
    },
    {
      id: 'lse-fin', name: 'LSE — MSc Finance', tracks: ['mif'], region: 'UK',
      threshold: 82, strong: 89, regime: 'D',
      profile: 'academic', because: 'A 2:1 in a related subject, one deadline, and commentary that most admits hold Firsts.',
      test: { policy: 'conditional', note: 'Required for applicants without a UK degree, with GMAT strongly preferred.', src: 'OFF2' },
      facts: [
        { k: 'Entry requirement', v: '2:1 in a related subject; commentary suggests most admits hold Firsts', src: 'TP' },
        { k: 'Test averages', v: 'Not published', src: 'NP' },
        { k: 'Sibling programme selectivity', v: 'MSc Finance & Economics took 53 of 761 applicants in 2024 — 6.9%', src: 'FOI' }
      ],
      gates: []
    },
    {
      id: 'sse-fin', name: 'Stockholm School of Economics — MSc Finance', tracks: ['mif'], region: 'Sweden',
      threshold: 76, strong: 85, regime: 'C',
      profile: 'metric', because: 'Hard test minimums including an explicit GRE Quant floor, plus a 60-ECTS prerequisite of which 30 must be quantitative.',
      test: { policy: 'conditional', note: 'Required, except for holders of a Swedish university BSc or an SSE Riga degree.', src: 'OFF' },
      facts: [
        { k: 'Test minimum', v: 'GMAT Focus 555 / GMAT 600. GRE Quant at least 155, with no verbal minimum.', src: 'OFF' },
        { k: 'Prerequisite', v: 'At least 60 ECTS in social sciences of which 30 ECTS quantitative, plus a business-administration base', src: 'OFF' },
        { k: 'English', v: 'IELTS 7.0, TOEFL 100 or the new 5.0, PTE 68', src: 'OFF' },
        { k: 'Admitted averages', v: 'Not published. Meeting the minimum does not guarantee admission.', src: 'NP' }
      ],
      gates: [
        g('testMinGmat', 600, 'GMAT 600 / Focus 555 / GRE Quant 155 minimum', 'OFF'),
        g('minEctsQuant', 30, '30 ECTS of quantitative coursework', 'OFF')
      ]
    },
    {
      id: 'bocconi-fin', name: 'Bocconi — MSc Finance', tracks: ['mif'], region: 'Italy',
      threshold: 76, strong: 85, regime: 'B',
      profile: 'metric', because: 'No interview on the standard route, a university-wide test floor, and a GPA the school may recalculate itself.',
      test: { policy: 'required', note: 'GMAT, GMAT Focus, GRE or Bocconi\'s own test.', src: 'OFF' },
      facts: [
        { k: 'Test floors', v: 'GMAT 500 / Focus 485', src: 'OFF' },
        { k: 'Admitted averages', v: 'Not published', src: 'NP' },
        { k: 'Interview', v: 'None on the standard route', src: 'OFF' },
        { k: 'Composition', v: 'Roughly two-thirds of seats effectively go to Bocconi\'s own bachelor graduates', src: 'TP' }
      ],
      gates: [g('testMinGmat', 500, 'GMAT 500 / Focus 485 floor', 'OFF')]
    },
    {
      id: 'hec-mif', name: 'HEC Paris — MSc International Finance', tracks: ['mif'], region: 'France',
      threshold: 80, strong: 88, regime: 'C',
      profile: 'holistic', because: 'The same essay-and-interview route as the rest of HEC, with no waivers on the test.',
      test: { policy: 'required', note: 'GMAT, GRE or TAGE MAGE. No waivers anywhere at HEC.', src: 'OFF' },
      facts: [
        { k: 'Admitted averages', v: 'Not published separately from the management programme', src: 'NP' },
        { k: 'Rounds', v: 'Rolling, year-round', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'esade-fin', name: 'Esade — MSc Finance', tracks: ['mif'], region: 'Spain',
      threshold: 70, strong: 80, regime: 'C',
      profile: 'balanced', because: 'A required test with reported averages, read alongside a conventional file.',
      test: { policy: 'required', note: 'GMAT, GRE or the Esade Admission Test. Valid five years.', src: 'TP' },
      facts: [
        { k: 'Reported averages', v: 'GMAT ~615 Focus / ~660 old scale, GRE ~160–162. Not an official class profile.', src: 'TP' },
        { k: 'Experience', v: 'Not required for any MSc', src: 'TP' },
        { k: 'Tuition', v: 'Sources conflict badly — €24,500 and €37,500 both reported. Verify before budgeting.', src: 'TP' },
        { k: 'Scholarships', v: 'Excellence Awards of 10–50% of tuition; last intake averaged 26%', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'nova-imf', name: 'Nova SBE — International Master in Finance', tracks: ['mif'], region: 'Portugal',
      threshold: 68, strong: 78, regime: 'B',
      profile: 'holistic', because: 'The test is a supporting document rather than a requirement.',
      test: { policy: 'optional', note: 'Supporting document rather than a requirement.', src: 'TP' },
      facts: [
        { k: 'Selectivity', v: '490 candidates, 72 enrolled in 2025/26 — about 15%, 78% international', src: 'TP' },
        { k: 'English', v: 'C1', src: 'TP' },
        { k: 'Tuition', v: '€11,900 EU/EEA, €13,000 non-EU', src: 'TP' }
      ],
      gates: [g('minEnglish', 'C1', 'C1 English required', 'TP')]
    },
    {
      id: 'warwick-fin', name: 'Warwick WBS — MSc Finance', tracks: ['mif'], region: 'UK',
      threshold: 70, strong: 80, regime: 'C',
      profile: 'transcript', because: 'No test required. The published requirement is a 2:1 plus quantitative skills.',
      test: { policy: 'none', note: 'Not required. A strong GRE may be submitted voluntarily.', src: 'TP' },
      facts: [
        { k: 'Entry requirement', v: '2:1 plus good quantitative skills', src: 'TP' },
        { k: 'Test averages', v: 'Not published', src: 'NP' }
      ],
      gates: []
    },
    {
      id: 'manchester-fin', name: 'Alliance Manchester — MSc Finance', tracks: ['mif'], region: 'UK',
      threshold: 67, strong: 77, regime: 'C',
      profile: 'transcript', because: 'No test in normal use — the published criteria are the grade average and the standing of your institution. A test is only requested afterwards if your degree lacks quantitative modules.',
      test: { policy: 'none', note: 'Not required, but admissions may request a GMAT or GRE after initial review if your degree lacks quantitative modules.', src: 'TP' },
      facts: [
        { k: 'Entry requirement', v: 'First or 2:1 with a 60% average', src: 'TP' },
        { k: 'English', v: 'IELTS 6.5 to be considered, 7.0 to enrol', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'mit-mfin', name: 'MIT Sloan — Master of Finance', tracks: ['mif'], region: 'USA',
      threshold: 84, strong: 91, regime: 'D',
      profile: 'quant', because: 'A 30-minute quantitative assessment inside a mandatory interview, and a published preparation list of calculus, statistics, linear algebra, probability and Python.',
      test: { policy: 'optional', note: 'Optional but strongly encouraged if you have a score. No minimum.', src: 'OFF' },
      facts: [
        { k: 'Test averages', v: 'Not published. The "~730 median" in circulation is third-party.', src: 'NP' },
        { k: 'Rounds', v: 'No rolling admissions, no early reads — everything is reviewed after the deadline', src: 'OFF' },
        { k: 'English tests', v: 'TOEFL and IELTS are not accepted. English is assessed in the interview.', src: 'OFF' },
        { k: 'Interview', v: 'Mandatory: a 30-minute quantitative assessment plus a 30-minute behavioural interview', src: 'OFF' },
        { k: 'Preparation', v: 'Calculus, statistics, linear algebra, probability and Python are highly beneficial. Every student must pass a Python literacy test.', src: 'OFF' },
        { k: 'Experience', v: 'Recent graduates with an internship through about 3 years', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'princeton-mfin', name: 'Princeton — Master in Finance', tracks: ['mif'], region: 'USA',
      threshold: 88, strong: 94, regime: 'D',
      profile: 'quant', because: 'No test is required at all. What is published instead is a preparation list: linear algebra, multivariable calculus, differential equations, probability and statistics.',
      test: { policy: 'none', note: 'Neither GRE nor GMAT is required, and not submitting will not affect your application. GRE is preferred if you do submit.', src: 'OFF' },
      facts: [
        { k: 'Acceptance rate', v: 'About 5%, averaged over the last five years', src: 'OFF' },
        { k: 'Median GRE Quant', v: '167 among entering students', src: 'OFF' },
        { k: 'Preparation', v: 'Linear algebra, multivariable calculus, differential equations, and probability and statistics at intermediate undergraduate level', src: 'OFF' },
        { k: 'Class', v: '45 students entering 2025–26, the largest so far', src: 'TP' },
        { k: 'English', v: 'TOEFL speaking below 27 triggers a placement test and possible mandatory classes', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'berkeley-mfe', name: 'Berkeley Haas — Master of Financial Engineering', tracks: ['mif'], region: 'USA',
      threshold: 86, strong: 93, regime: 'C',
      profile: 'quant', because: 'Roughly three-quarters of the class holds a quantitative-STEM degree and GRE Quant averages the 91st percentile.',
      test: { policy: 'required', note: 'Policy not confirmed this cycle.', src: 'NP' },
      facts: [
        { k: 'GRE', v: 'Quant averages the 91st percentile, verbal the 79th', src: 'OFF' },
        { k: 'Average GPA', v: '3.77 (US students)', src: 'OFF' },
        { k: 'Class', v: '84 enrolled (2025), average age 25, average 2.47 years of experience, 30% women', src: 'OFF' },
        { k: 'Backgrounds', v: 'CS 20%, engineering 19%, maths 18%, finance 12%, statistics 11%. 26% already hold a master\'s or PhD.', src: 'OFF' },
        { k: 'Acceptance rate', v: '~17% reported third-party, not on the school\'s class profile', src: 'TP' }
      ],
      gates: [g('quantDegree', true, 'Effectively a quantitative-STEM intake — 74% of the class', 'OFF')]
    },
    {
      id: 'washu-msf', name: 'WashU Olin — MSc Finance', tracks: ['mif'], region: 'USA',
      threshold: 74, strong: 83, regime: 'C',
      profile: 'metric', because: 'Non-submitters are told to compensate with a high GPA, quantitative experience or a CPA/CFA, and per-track GMAT and GPA averages are published.',
      test: { policy: 'optional', note: 'Not required but recommended. Non-submitters must compensate with a high GPA, quantitative experience, an advanced degree, or a CPA/CFA.', src: 'OFF' },
      facts: [
        { k: 'Quantitative track', v: 'GMAT 694, GPA 3.5, GRE 160V / 168Q (2025 entering class)', src: 'OFF2' },
        { k: 'Corporate Finance & Investments', v: 'GMAT 681, GPA 3.5, GRE 159V / 166Q', src: 'OFF2' },
        { k: 'Wealth & Asset Management', v: 'GMAT 676, GPA 3.4, GRE 159V / 167Q', src: 'OFF2' },
        { k: 'English', v: 'TOEFL 90 / IELTS 6.5 / Duolingo 125', src: 'OFF' },
        { k: 'Rounds', v: 'Four rounds then rolling after 15 April', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'vanderbilt-msf', name: 'Vanderbilt Owen — MS Finance', tracks: ['mif'], region: 'USA',
      threshold: 72, strong: 81, regime: 'C',
      profile: 'transcript', because: 'A median GPA of 3.8 with a published middle-80% band, and test figures deliberately withheld from the class profile.',
      test: { policy: 'optional', note: 'Policy not confirmed.', src: 'NP' },
      facts: [
        { k: 'Median GPA', v: '3.8, with a middle 80% of 3.6–3.9', src: 'OFF' },
        { k: 'Test scores', v: 'Deliberately not published on the class profile. Third-party claims of 680–730 are unverified.', src: 'NP' },
        { k: 'Class of 2026', v: '103 students, average age 22, 23% women, 17% international, 73 undergraduate institutions', src: 'OFF' }
      ],
      gates: []
    },

    /* ---------------- Marketing ---------------- */
    {
      id: 'bocconi-mkt', name: 'Bocconi — MSc Marketing Management', tracks: ['marketing'], region: 'Italy',
      threshold: 74, strong: 83, regime: 'B',
      profile: 'metric', because: 'The university-wide route: a test floor, a compulsory GPA pillar, and no interview.',
      test: { policy: 'required', note: 'Same university-wide rules as the other MSc programmes.', src: 'OFF' },
      facts: [
        { k: 'Test floors', v: 'GMAT 500 / Focus 485', src: 'OFF' },
        { k: 'Admitted averages', v: 'Not published', src: 'NP' },
        { k: 'Interview', v: 'None on the standard route', src: 'OFF' }
      ],
      gates: [g('testMinGmat', 500, 'GMAT 500 / Focus 485 floor', 'OFF')]
    },
    {
      id: 'esade-mkt', name: 'Esade — MSc Marketing Management', tracks: ['marketing'], region: 'Spain',
      threshold: 69, strong: 79, regime: 'C',
      profile: 'holistic', because: 'A required test with no published programme-level average, read alongside a conventional file.',
      test: { policy: 'required', note: 'GMAT, GRE or the Esade Admission Test.', src: 'TP' },
      facts: [
        { k: 'Reported averages', v: 'Programme-level figures are not published; school-wide reports are third-party', src: 'NP' },
        { k: 'Experience', v: 'Not required', src: 'TP' },
        { k: 'Scholarships', v: 'Excellence Awards of 10–50%, averaging 26% last intake', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'imperial-mkt', name: 'Imperial College — MSc Strategic Marketing', tracks: ['marketing'], region: 'UK',
      threshold: 74, strong: 83, regime: 'C',
      profile: 'balanced', because: 'The school\'s general policy — recommended rather than mandatory testing — plus a video interview.',
      test: { policy: 'optional', note: 'Follows the school\'s general policy: recommended, not mandatory, where quant strength is evidenced.', src: 'OFF' },
      facts: [
        { k: 'Entry requirement', v: 'First or 2:1, in line with the school\'s other master\'s programmes', src: 'OFF' },
        { k: 'Programme-level averages', v: 'Not published', src: 'NP' },
        { k: 'Interview', v: 'Asynchronous video, about 20 minutes', src: 'OFF' }
      ],
      gates: []
    },
    {
      id: 'warwick-mkt', name: 'Warwick WBS — MSc Marketing & Strategy', tracks: ['marketing'], region: 'UK',
      threshold: 68, strong: 78, regime: 'C',
      profile: 'transcript', because: 'No test. The published requirement is a 2:1 in any subject.',
      test: { policy: 'none', note: 'In line with WBS practice, no GMAT or GRE requirement.', src: 'TP' },
      facts: [
        { k: 'Entry requirement', v: '2:1 in any subject', src: 'TP' },
        { k: 'Experience', v: 'Pre-experience; substantial full-time experience points you to the MBA', src: 'TP' },
        { k: 'Programme-level averages', v: 'Not published', src: 'NP' }
      ],
      gates: [g('maxWorkMonths', 36, 'Pre-experience programme; three or more years redirects you to the MBA', 'TP')]
    },
    {
      id: 'manchester-mkt', name: 'Alliance Manchester — MSc Marketing', tracks: ['marketing'], region: 'UK',
      threshold: 66, strong: 76, regime: 'C',
      profile: 'transcript', because: 'No test is used. The published criteria are the grade average, class position and the standing of your institution.',
      test: { policy: 'none', note: 'Not used.', src: 'TP' },
      facts: [
        { k: 'Entry requirement', v: 'First or 2:1 with a 60% average', src: 'TP' },
        { k: 'Stated criteria', v: 'Grade average, class position and the standing of your institution', src: 'TP' },
        { k: 'English', v: 'IELTS 6.5 to be considered, 7.0 to enrol', src: 'TP' }
      ],
      gates: []
    },
    {
      id: 'rsm-mkt', name: 'RSM Rotterdam — MSc Marketing Management', tracks: ['marketing'], region: 'Netherlands',
      threshold: 71, strong: 80, regime: 'C',
      profile: 'metric', because: 'The same numbers-led RSM route: a test minimum and a statistics prerequisite, with no interview.',
      test: { policy: 'conditional', note: 'Mandatory unless you hold a Dutch research-university bachelor.', src: 'OFF' },
      facts: [
        { k: 'Test minimum', v: 'GMAT Focus 565 / GMAT 600', src: 'OFF' },
        { k: 'Prerequisite', v: 'Research methods and statistics credits, as across RSM\'s master\'s portfolio', src: 'TP' },
        { k: 'Capacity', v: 'RSM programmes close on an application cap as well as a date', src: 'TP' }
      ],
      gates: [
        g('testMinGmat', 600, 'GMAT 600 / Focus 565 minimum', 'OFF'),
        g('minEctsQuant', 10, 'Quantitative methods credits required', 'TP')
      ]
    },
    {
      id: 'essec-mkt', name: 'ESSEC — MiM with a marketing specialisation', tracks: ['marketing'], region: 'France',
      threshold: 76, strong: 85, regime: 'B',
      profile: 'holistic', because: 'Entry is through the MiM, so the same shortlist-then-interview route applies.',
      test: { policy: 'required', note: 'Entry is through the Master in Management.', src: 'OFF' },
      facts: [
        { k: 'Route', v: 'Marketing is a specialisation inside the MiM rather than a standalone admission', src: 'OFF' },
        { k: 'Interview', v: '45-minute videoconference after shortlisting', src: 'OFF' },
        { k: 'Admitted averages', v: 'Not published', src: 'NP' }
      ],
      gates: []
    }
  ];

  /* Programmes deliberately left out, with the reason. */
  var EXCLUDED = [
    {
      name: 'Cambridge Judge — Master of Finance',
      why: 'Not a pre-experience programme. Every participant has at least two years in ' +
        'finance, the class averages five years and the range runs to eighteen. It belongs ' +
        'with the MBA-tier tools, not here.',
      src: 'OFF'
    }
  ];

  /* ----------------------------------------------------------------------- */
  /* Estimated admitted-score distributions                                   */
  /*                                                                          */
  /* Most of these schools publish nothing, which is unhelpful when you are    */
  /* trying to decide whether to sit the test again. So each programme gets an */
  /* ESTIMATED median and standard deviation on the GMAT 10th Edition scale,   */
  /* with the basis stated. These are labelled "estimate" everywhere they      */
  /* appear and must never be presented as the school's own figure.            */
  /*                                                                          */
  /* basis:                                                                    */
  /*   published — anchored to a figure the school itself publishes            */
  /*   partial   — anchored to a published floor, band or third-party range     */
  /*   peer      — inferred from peer programmes of similar selectivity         */
  /* ----------------------------------------------------------------------- */

  var EST_GMAT = {
    /* Management */
    'hec-mim':          { median: 710, sd: 40, basis: 'published', from: 'the school\'s published median of 710' },
    'insead-mim':       { median: 680, sd: 40, basis: 'partial', from: 'INSEAD\'s own percentile guidance (60th verbal, 66th quant on Focus)' },
    'lbs-mim':          { median: 690, sd: 40, basis: 'partial', from: 'third-party reports of ~690' },
    'lse-mim':          { median: 700, sd: 45, basis: 'peer', from: 'a 6.7% admit rate and a 2:1 floor, against peer programmes' },
    'essec-mim':        { median: 660, sd: 45, basis: 'peer', from: 'peer French grandes écoles; ESSEC publishes nothing' },
    'escp-mim':         { median: 640, sd: 50, basis: 'peer', from: 'peer programmes; ESCP sets no minimum and accepts its own test' },
    'bocconi-mgmt':     { median: 640, sd: 55, basis: 'partial', from: 'the published 500 floor and a large, partly internal intake' },
    'bocconi-im':       { median: 670, sd: 45, basis: 'partial', from: 'the higher 555 floor on the double-degree tracks' },
    'rsm-mim':          { median: 645, sd: 40, basis: 'partial', from: 'the published 600 minimum, with admits sitting above it' },
    'imperial-mgmt':    { median: 653, sd: 40, basis: 'published', from: 'the school\'s stated current average of 653' },
    'wu-simc':          { median: 640, sd: 40, basis: 'partial', from: 'the published 600 minimum and a ~10% admit rate' },
    'nova-imm':         { median: 655, sd: 35, basis: 'partial', from: 'a third-party admitted range of 620–710' },
    'ie-mim':           { median: 655, sd: 45, basis: 'partial', from: 'third-party reports of ~660; IE publishes nothing' },
    'iese-mim':         { median: 660, sd: 45, basis: 'partial', from: 'IESE\'s cross-programme Focus band of 545–715' },
    'stgallen-sim':     { median: 690, sd: 40, basis: 'partial', from: 'conflicting third-party claims of 680 and 720' },
    'duke-mms':         { median: 660, sd: 55, basis: 'published', from: 'the published Focus middle-80% of 525–695' },
    'ross-mm':          { median: 660, sd: 45, basis: 'peer', from: 'peer US pre-experience programmes; Ross publishes no test average' },
    'warwick-mgmt':     null,
    'manchester-mgmt':  null,
    'cbs-mgmt':         null,

    /* Finance */
    'lbs-mfa':          { median: 700, sd: 35, basis: 'published', from: 'published class averages of 706, 702 and 698' },
    'oxford-mfe':       { median: 730, sd: 30, basis: 'partial', from: 'three conflicting third-party figures spanning 720–750' },
    'imperial-fin':     { median: 645, sd: 40, basis: 'published', from: 'the school\'s stated current average of 645' },
    'lse-fin':          { median: 710, sd: 40, basis: 'peer', from: 'a ~7% admit rate at the sibling programme and a Firsts-heavy intake' },
    'sse-fin':          { median: 660, sd: 40, basis: 'partial', from: 'the published 600 minimum' },
    'bocconi-fin':      { median: 660, sd: 50, basis: 'partial', from: 'the published 500 floor; finance skews above the school median' },
    'hec-mif':          { median: 700, sd: 40, basis: 'peer', from: 'HEC\'s published MiM median of 710, adjusted for a finance intake' },
    'esade-fin':        { median: 660, sd: 45, basis: 'partial', from: 'third-party reports of ~660 on the old scale' },
    'nova-imf':         { median: 650, sd: 40, basis: 'peer', from: 'the sibling management programme and a ~15% admit rate' },
    'mit-mfin':         { median: 730, sd: 30, basis: 'partial', from: 'third-party reports of a ~730 median; MIT publishes nothing' },
    'princeton-mfin':   { median: 740, sd: 30, basis: 'published', from: 'the published median GRE Quant of 167, converted' },
    'berkeley-mfe':     { median: 735, sd: 30, basis: 'published', from: 'the published 91st-percentile average GRE Quant, converted' },
    'washu-msf':        { median: 685, sd: 35, basis: 'published', from: 'published track averages of 676, 681 and 694' },
    'vanderbilt-msf':   { median: 690, sd: 35, basis: 'partial', from: 'third-party reports of 680–730; the school withholds test data' },
    'warwick-fin':      null,
    'manchester-fin':   null,

    /* Marketing */
    'bocconi-mkt':      { median: 645, sd: 50, basis: 'partial', from: 'the published 500 floor' },
    'esade-mkt':        { median: 650, sd: 45, basis: 'peer', from: 'the sibling Esade programmes' },
    'imperial-mkt':     { median: 645, sd: 40, basis: 'peer', from: 'Imperial\'s published averages on its sibling programmes' },
    'rsm-mkt':          { median: 640, sd: 40, basis: 'partial', from: 'the published 600 minimum' },
    'essec-mkt':        { median: 660, sd: 45, basis: 'peer', from: 'the parent ESSEC management programme' },
    'warwick-mkt':      null,
    'manchester-mkt':   null
  };

  SCHOOLS.forEach(function (s) {
    s.est = EST_GMAT[s.id] || null;
  });

  /* Answers you cannot change by next cycle. Counterfactual advice must never
   * suggest these — telling someone to have gone to a better university is not
   * advice. */
  var FIXED_GROUPS = ['gradeScale', 'gradeBand', 'italianConverter', 'institution', 'degreeField'];

  return {
    tracks: TRACKS,
    steps: STEPS,
    profiles: PROFILES,
    regimes: REGIMES,
    schools: SCHOOLS,
    excluded: EXCLUDED,
    fixedGroups: FIXED_GROUPS
  };
}());

/* ---------------------------------------------------------------------------
 * IT & Computing master's model (MSc CS / Data Science & AI / conversion MSc).
 *
 * Like the business master's model this is original, not a reproduction. Unlike
 * it, the data underneath is shaped differently, and that shape decided the
 * design:
 *
 *  1. UK computing programmes publish real acceptance rates. They are subject
 *     to Freedom of Information, and applications, offers and acceptances by
 *     MSc course have been disclosed course by course. Where that exists it is
 *     stated as fact, not estimated. Nothing on the business side had this.
 *
 *  2. Almost none of them publish an admitted-student profile. There is no
 *     equivalent of a class GMAT median here, so this model carries no
 *     estimated admitted distributions at all. What it carries instead is what
 *     applicants reported about timing and outcomes — see data/it-evidence.js,
 *     and read the caveat there before trusting any of it.
 *
 *  3. Entry requirements are unusually concrete: named prerequisite modules,
 *     degree-class floors, ECTS thresholds, English bands. So, as on the
 *     business side, schools are filtered by `gates` before they are scored —
 *     but here the gates do much more of the work.
 *
 *  4. The GRE is close to absent in this geography. It is not a scored factor;
 *     where a programme genuinely requires a test it is a gate.
 *
 * Source tags: OFF  = read from the programme's own page
 *              OFF2 = official document, via a secondary summary
 *              FOI  = UK Freedom-of-Information disclosure
 *              TP   = third-party aggregator or consultancy, unverified
 *              GC   = applicant-reported, self-selected sample
 *              NP   = the programme publishes nothing on this
 *              CAL  = my calibration, not sourced from anyone
 * ------------------------------------------------------------------------- */

window.IT_MODEL = (function () {
  'use strict';

  var TRACKS = {
    cs: {
      id: 'cs', name: 'Computer Science',
      full: 'MSc Computer Science / Advanced Computing / Informatics',
      blurb: 'The most prerequisite-driven track here. Most of these programmes audit ' +
        'your transcript for named modules before anyone reads the rest of the file.',
      weights: { academic: 24, institution: 12, foundations: 22, maths: 12, evidence: 10, experience: 6, essays: 8, references: 6 }
    },
    dsai: {
      id: 'dsai', name: 'Data Science & AI',
      full: 'MSc Data Science / Artificial Intelligence / Machine Learning',
      blurb: 'Selects on mathematics far more than the CS track does. Linear algebra ' +
        'and probability are the two that get checked, and they get checked by name.',
      weights: { academic: 22, institution: 11, foundations: 16, maths: 20, evidence: 13, experience: 6, essays: 7, references: 5 }
    },
    conversion: {
      id: 'conversion', name: 'Conversion MSc',
      full: 'MSc Computing for graduates of other subjects',
      blurb: 'Built for people without a computing degree — and at several of these, ' +
        'holding one disqualifies you. A category that barely exists outside the UK.',
      weights: { academic: 26, institution: 12, foundations: 4, maths: 15, evidence: 9, experience: 13, essays: 14, references: 7 }
    }
  };

  /* ----------------------------------------------------------------------- */
  /* Selection profiles                                                       */
  /*                                                                          */
  /* Same mechanism as the business model: multipliers on the track weights,   */
  /* renormalised back to the same total, so a profile redistributes emphasis  */
  /* rather than inflating anyone's score.                                     */
  /*                                                                          */
  /* One profile here has no business-side equivalent and is worth naming.     */
  /* `rulebased` covers the continental European public universities where     */
  /* admission is a published checklist rather than a ranking — meet the       */
  /* stated prerequisites and you are in, miss them and no amount of the rest  */
  /* of the file compensates. For those schools the gates carry almost the     */
  /* whole decision and the score is close to a formality, which is why the    */
  /* multipliers are so flat.                                                  */
  /*                                                                          */
  /* Assignment of a school to a profile is CAL — my reading of the published  */
  /* process. `because` says what that reading rests on.                       */
  /* ----------------------------------------------------------------------- */

  var PROFILES = {
    balanced: {
      id: 'balanced', label: 'Whole file, evenly weighted',
      short: 'Balanced read',
      blurb: 'Nothing published points to one part of the file carrying the decision, ' +
        'so the track weighting is used unchanged.',
      mult: {}, mods: {}
    },
    transcript: {
      id: 'transcript', label: 'Transcript-led — degree class and institution',
      short: 'Class + institution',
      blurb: 'No interview, no test and no portfolio. The class of your degree, your ' +
        'position in the cohort and the standing of the institution are very nearly ' +
        'the whole decision. This is the default for UK taught MScs.',
      mult: { academic: 1.9, institution: 1.7, foundations: 1.0, maths: 0.9,
              evidence: 0.45, experience: 0.5, essays: 0.5, references: 0.6 },
      mods: {}
    },
    prereq: {
      id: 'prereq', label: 'Prerequisite audit',
      short: 'Named modules checked',
      blurb: 'Your transcript is read module by module against a published list before ' +
        'anything else counts. Coverage of the named foundations, and the mathematics ' +
        'behind them, outweigh everything you have done outside a lecture theatre.',
      mult: { academic: 1.25, institution: 0.95, foundations: 2.1, maths: 1.6,
              evidence: 0.55, experience: 0.4, essays: 0.5, references: 0.6 },
      mods: {}
    },
    research: {
      id: 'research', label: 'Read by academics for research fit',
      short: 'Fit and referees',
      blurb: 'Judged as a potential research student. What you have built or published, ' +
        'who vouches for you and how well your stated interests match the department ' +
        'genuinely move the outcome — more than a decimal place of grade average does.',
      mult: { academic: 1.1, institution: 1.1, foundations: 0.95, maths: 1.05,
              evidence: 1.85, experience: 0.75, essays: 1.6, references: 1.8 },
      mods: {}
    },
    open: {
      id: 'open', label: 'Built for non-specialists',
      short: 'Motivation + aptitude',
      blurb: 'A conversion programme. Prior computing coursework is not what is being ' +
        'looked for — at some of these it is a disqualification — so numeracy, what ' +
        'you have done since graduating, and why you want to change field carry it.',
      mult: { academic: 1.3, institution: 1.1, foundations: 0.15, maths: 1.4,
              evidence: 0.9, experience: 1.35, essays: 1.6, references: 0.9 },
      mods: {}
    },
    rulebased: {
      id: 'rulebased', label: 'Published checklist, not a ranking',
      short: 'Meet the rule or not',
      blurb: 'A state university with rule-based admission. The published prerequisites ' +
        'decide it almost entirely: clear them and you are very likely in, miss them ' +
        'and the rest of the file does not compensate. Read the gates above the score.',
      mult: { academic: 1.35, institution: 0.7, foundations: 1.6, maths: 1.45,
              evidence: 0.5, experience: 0.5, essays: 0.45, references: 0.45 },
      mods: {}
    }
  };

  /* ----------------------------------------------------------------------- */
  /* Questions                                                                */
  /* ----------------------------------------------------------------------- */

  var STEPS = [
    {
      id: 'degree',
      title: 'Your degree',
      blurb: 'Where you studied, what in, and how well. In this geography the class of ' +
        'your degree is the single largest thing on the file.',
      groups: [
        {
          id: 'gradeScale', type: 'radio', label: 'Which grading scale is yours?',
          help: 'Used only to label the bands below.',
          options: [
            { id: 'sc_uk', label: 'UK classification (First, 2:1, 2:2)' },
            { id: 'sc_ects', label: 'ECTS grades or a percentage' },
            { id: 'sc_it', label: 'Italian (18–30 exams, 66–110 degree)' },
            { id: 'sc_in', label: 'Indian percentage or CGPA' },
            { id: 'sc_cn', label: 'Chinese 100-point average' },
            { id: 'sc_us', label: 'US GPA out of 4.0' },
            { id: 'sc_other', label: 'Something else' }
          ]
        },
        {
          id: 'gradeBand', type: 'radio', label: 'Where do you sit in your cohort?',
          help: 'Rank within your own cohort travels across borders better than a converted ' +
            'number does. Most of these programmes state a class requirement — a 2:1 or an ' +
            'equivalent — and then quietly select well above it.',
          options: [
            { id: 'gb_top5', label: 'Top ~5%', note: 'First (high) · 110 e lode · 85+ CN · 3.9+', cls: 'first', v: 1.0 },
            { id: 'gb_top10', label: 'Top ~10%', note: 'strong First · 110 · 83 CN · 3.8', cls: 'first', v: 0.9 },
            { id: 'gb_top25', label: 'Top ~25%', note: 'First / high 2:1 · 105–109 · 80 CN · 3.6', cls: '2:1h', v: 0.74 },
            { id: 'gb_top50', label: 'Top ~50%', note: 'solid 2:1 · 100–104 · 75 CN · 3.3', cls: '2:1', v: 0.56 },
            { id: 'gb_mid', label: 'Around the median', note: 'low 2:1 · 95–99 · 70 CN · 3.0', cls: '2:1', v: 0.4 },
            { id: 'gb_low', label: 'Below the median', note: '2:2 or below · under 95 · under 3.0', cls: '2:2', v: 0.18 }
          ]
        },
        {
          id: 'institution', type: 'radio', label: 'Your undergraduate institution',
          help: 'Several of these departments weigh this openly, and some operate published ' +
            'lists of recognised institutions by country. It is the part of the file you can ' +
            'do least about, so it is never suggested as an improvement.',
          options: [
            { id: 'inst_global', label: 'Globally ranked top-100, or the leading technical university in a major country', v: 1.0 },
            { id: 'inst_target', label: 'Well known internationally; a serious research department', v: 0.8 },
            { id: 'inst_solid', label: 'Respected nationally, little international recognition', v: 0.56 },
            { id: 'inst_other', label: 'Accredited, but not widely known outside its area', v: 0.36 }
          ]
        },
        {
          id: 'degreeField', type: 'radio', label: 'What was your bachelor\'s in?',
          help: 'This drives two opposite rules. Most programmes here require a computing or ' +
            'closely related degree. The conversion MScs require the reverse — several will ' +
            'not take you if you already hold one.',
          options: [
            { id: 'fld_cs', label: 'Computer science, informatics or software engineering', cs: true, quant: true, v: 1.0 },
            { id: 'fld_ce', label: 'Computer or electronic engineering', cs: true, quant: true, v: 0.95 },
            { id: 'fld_maths', label: 'Mathematics, statistics or physics', cs: false, quant: true, v: 0.88 },
            { id: 'fld_eng', label: 'Another engineering or physical science', cs: false, quant: true, v: 0.75 },
            { id: 'fld_quantsoc', label: 'Economics, finance or a quantitative social science', cs: false, quant: true, v: 0.6 },
            { id: 'fld_life', label: 'Life sciences, psychology or medicine', cs: false, quant: false, v: 0.5 },
            { id: 'fld_other', label: 'Humanities, arts, law or something else', cs: false, quant: false, v: 0.42 }
          ]
        },
        {
          id: 'bachelorLength', type: 'radio', label: 'How long was your bachelor\'s degree?',
          help: 'Not a formality. A three-year bachelor is the European norm and is fine across ' +
            'the UK and EU, but a handful of programmes require four years or a specific credit ' +
            'count, and it rules people out every cycle.',
          options: [
            { id: 'bl_3', label: 'Three years (180 ECTS or equivalent)', n: 3 },
            { id: 'bl_4', label: 'Four years or more', n: 4 },
            { id: 'bl_int', label: 'An integrated master\'s (MEng, MSci, Laurea Magistrale)', n: 5 }
          ]
        }
      ]
    },

    {
      id: 'foundations',
      title: 'Computing foundations',
      blurb: 'The named-module audit. Tick what you actually passed as an assessed course — ' +
        'not what you have read about or picked up at work. Most of these programmes check ' +
        'this against your transcript before reading anything else.',
      groups: [
        {
          id: 'core', type: 'checkbox', label: 'Assessed modules you have passed',
          help: 'Algorithms and discrete mathematics are the two that appear on nearly every ' +
            'published prerequisite list. Oxford and Imperial name them explicitly; the EU ' +
            'technical universities express the same thing as an ECTS count.',
          options: [
            { id: 'cv_algo', label: 'Data structures and algorithms', v: 0.26 },
            { id: 'cv_discrete', label: 'Discrete mathematics or logic', v: 0.2 },
            { id: 'cv_prog', label: 'Programming, beyond an introductory course', v: 0.14 },
            { id: 'cv_systems', label: 'Operating systems or computer architecture', v: 0.12 },
            { id: 'cv_theory', label: 'Theory of computation, automata or complexity', v: 0.12 },
            { id: 'cv_db', label: 'Databases', v: 0.06 },
            { id: 'cv_net', label: 'Computer networks', v: 0.05 },
            { id: 'cv_se', label: 'Software engineering or compilers', v: 0.05 }
          ]
        },
        {
          id: 'csEcts', type: 'radio', label: 'Roughly how much of your degree was computing?',
          help: 'The continental technical universities state this as a credit threshold rather ' +
            'than a module list. 60 ECTS is a common floor; some ask for more.',
          options: [
            { id: 'ce_0', label: 'None to speak of', n: 0, v: 0 },
            { id: 'ce_30', label: 'Up to 30 ECTS — a minor, or a few modules', n: 30, v: 0.3 },
            { id: 'ce_60', label: '30 – 60 ECTS', n: 45, v: 0.6 },
            { id: 'ce_90', label: '60 – 90 ECTS', n: 75, v: 0.85 },
            { id: 'ce_max', label: 'More than 90 ECTS — a full computing degree', n: 100, v: 1.0 }
          ]
        },
        {
          id: 'programming', type: 'radio', label: 'How strong is your programming, honestly?',
          help: 'Self-assessment, so it is weighted modestly. The projects question later is ' +
            'where this gets evidenced.',
          options: [
            { id: 'pr_prof', label: 'I have shipped and maintained production software', v: 1.0 },
            { id: 'pr_strong', label: 'Comfortable in several languages; substantial coursework projects', v: 0.8 },
            { id: 'pr_ok', label: 'Competent in one language for coursework', v: 0.55 },
            { id: 'pr_basic', label: 'Introductory scripting only', v: 0.3 },
            { id: 'pr_none', label: 'None yet', v: 0.05 }
          ]
        }
      ]
    },

    {
      id: 'maths',
      title: 'Mathematics',
      blurb: 'The line between a CS intake and a data science or AI intake runs through this ' +
        'step. Linear algebra and probability get checked by name for machine-learning ' +
        'programmes, and a strong programmer without them is routinely turned down.',
      groups: [
        {
          id: 'mathsCore', type: 'checkbox', label: 'Assessed mathematics you have passed',
          options: [
            { id: 'mv_linalg', label: 'Linear algebra', v: 0.28 },
            { id: 'mv_prob', label: 'Probability and statistics', v: 0.28 },
            { id: 'mv_calc', label: 'Calculus or multivariable analysis', v: 0.16 },
            { id: 'mv_proof', label: 'A proof-based course — real analysis or abstract algebra', v: 0.14 },
            { id: 'mv_opt', label: 'Optimisation or numerical methods', v: 0.14 }
          ]
        },
        {
          id: 'mathsEcts', type: 'radio', label: 'Roughly how much mathematics in total?',
          help: 'ETH, TU Delft and the German technical universities state a credit floor here.',
          options: [
            { id: 'me_0', label: 'Almost none', n: 0, v: 0 },
            { id: 'me_15', label: 'Up to 15 ECTS', n: 15, v: 0.3 },
            { id: 'me_30', label: '15 – 30 ECTS', n: 25, v: 0.6 },
            { id: 'me_45', label: '30 – 45 ECTS', n: 38, v: 0.85 },
            { id: 'me_max', label: 'More than 45 ECTS', n: 50, v: 1.0 }
          ]
        }
      ]
    },

    {
      id: 'evidence',
      title: 'What you have built',
      blurb: 'The part of a computing application that has no business-school equivalent. ' +
        'For the research-led programmes this can outweigh a grade point; for the ' +
        'transcript-led ones it barely registers. The results page tells you which is which.',
      groups: [
        {
          id: 'research', type: 'radio', label: 'Research output',
          help: 'Venue tier matters more than count. One first-author paper at a top conference ' +
            'is worth more than several workshop papers.',
          options: [
            { id: 'rs_top1', label: 'First-author paper at a top venue', note: 'NeurIPS, ICML, ICLR, CVPR, ACL, SOSP, OSDI, STOC', v: 1.0 },
            { id: 'rs_top_co', label: 'Co-authored paper at a top venue', v: 0.8 },
            { id: 'rs_other', label: 'Published at another peer-reviewed venue or workshop', v: 0.6 },
            { id: 'rs_submitted', label: 'Submitted or under review', v: 0.42 },
            { id: 'rs_thesis', label: 'A substantial research thesis or project, unpublished', v: 0.32 },
            { id: 'rs_assist', label: 'Worked as a research assistant', v: 0.26 },
            { id: 'rs_none', label: 'None', v: 0 }
          ]
        },
        {
          id: 'projects', type: 'radio', label: 'Projects and open source',
          options: [
            { id: 'pj_major', label: 'Maintain or substantially contribute to a used open-source project', v: 1.0 },
            { id: 'pj_sub', label: 'A substantial personal or team system others have used', v: 0.72 },
            { id: 'pj_course', label: 'Coursework projects, nothing beyond them', v: 0.35 },
            { id: 'pj_none', label: 'Nothing I would put in an application', v: 0 }
          ]
        },
        {
          id: 'competitive', type: 'radio', label: 'Competitions', optional: true,
          help: 'Genuinely read at some departments and ignored at others. Weighted modestly ' +
            'because it is the least universal signal on this page.',
          options: [
            { id: 'cp_icpc', label: 'ICPC regional or world finals, or an IOI medal', v: 1.0 },
            { id: 'cp_strong', label: 'Strong competitive-programming or Kaggle record', v: 0.7 },
            { id: 'cp_some', label: 'Took part, no notable placing', v: 0.3 },
            { id: 'cp_none', label: 'None', v: 0 }
          ]
        }
      ]
    },

    {
      id: 'application',
      title: 'Experience and the application',
      blurb: 'Work history, who writes for you, and when you apply. Several of these ' +
        'programmes fill on a rolling basis, which makes timing a real part of the answer.',
      groups: [
        {
          id: 'workMonths', type: 'radio', label: 'Full-time professional experience',
          help: 'Unlike the business master\'s tracks, nothing here penalises you for having ' +
            'worked. On the conversion track it is one of the strongest things you can bring.',
          options: [
            { id: 'wm_0', label: 'None', n: 0, v: 0 },
            { id: 'wm_6', label: 'Internships only', n: 6, v: 0.3 },
            { id: 'wm_18', label: 'Up to 2 years', n: 18, v: 0.62 },
            { id: 'wm_36', label: '2 – 4 years', n: 36, v: 0.85 },
            { id: 'wm_60', label: 'More than 4 years', n: 60, v: 1.0 }
          ]
        },
        {
          id: 'workKind', type: 'radio', label: 'What kind of work?', optional: true,
          help: 'Engineering-led employers are read as evidence of the same skills the degree ' +
            'teaches. A recognisable name in another industry is worth much less here than it ' +
            'would be on an MBA application.',
          options: [
            { id: 'wk_eng_top', label: 'Software or research engineering at an engineering-led employer', note: 'a major technology firm, a research lab, or a serious engineering startup', v: 1.0 },
            { id: 'wk_eng', label: 'Software, data or ML engineering anywhere else', v: 0.82 },
            { id: 'wk_tech_adj', label: 'Technical but not engineering — analysis, IT operations, QA', v: 0.55 },
            { id: 'wk_other', label: 'Unrelated to computing', v: 0.25 }
          ],
          examples: {
            intro: 'The question is whether the work is evidence of engineering ability, not ' +
              'whether the employer is famous. A quantitative developer at a trading firm scores ' +
              'above a marketing analyst at a household technology name.',
            sections: [
              { heading: 'Engineering-led — the top box',
                kind: 'why',
                items: [
                  ['Research labs', 'DeepMind, FAIR, MSR, a national research institute'],
                  ['Major technology firms', 'in an engineering or data role, not a business one'],
                  ['Quantitative finance', 'Jane Street, Optiver, Two Sigma and peers'],
                  ['Serious engineering startups', 'small teams shipping a technical product']
                ] },
              { heading: 'Second box — engineering work anywhere else', kind: 'list',
                items: ['Banks and insurers', 'Telecoms', 'Consultancies with a real engineering arm',
                  'Public sector digital teams', 'Non-technology corporates with in-house software'] }
            ],
            note: 'If you are unsure, ask what you would put on the CV line. If it is a system you ' +
              'built, the top two boxes apply. If it is a process you ran, it is the third.'
          }
        },
        {
          id: 'references', type: 'radio', label: 'Who is writing your references?',
          help: 'Academic references are the expected form at every programme here. A manager ' +
            'who has seen you build things is a reasonable second reference; two professional ' +
            'ones is a weakness at the research-led departments.',
          options: [
            { id: 'rf_two_acad', label: 'Two academics who supervised my work directly', v: 1.0 },
            { id: 'rf_mixed', label: 'One academic who knows my work well, one professional', v: 0.78 },
            { id: 'rf_acad_weak', label: 'Academics who taught me but do not know me well', v: 0.5 },
            { id: 'rf_prof', label: 'Professional references only', v: 0.34 },
            { id: 'rf_unsure', label: 'Not arranged yet', v: 0.3 }
          ]
        },
        {
          id: 'statement', type: 'radio', label: 'Your personal statement',
          help: 'At the research-led programmes this is read as a proposal: what you want to ' +
            'work on and who you want to work with. At the transcript-led ones it is checked ' +
            'for coherence and little more.',
          options: [
            { id: 'st_strong', label: 'Specific about what I want to work on, and names the group or people', v: 1.0 },
            { id: 'st_good', label: 'Clear motivation, tied to what I have already done', v: 0.78 },
            { id: 'st_ok', label: 'Competent and general', v: 0.5 },
            { id: 'st_weak', label: 'Not written yet, or generic', v: 0.25 }
          ]
        },
        {
          id: 'english', type: 'radio', label: 'English',
          help: 'A hard gate almost everywhere and never a scoring factor. Several UK programmes ' +
            'also set a per-component minimum, which trips people whose overall band is fine.',
          options: [
            { id: 'en_native', label: 'Native speaker, or a full degree taught in English', level: 'C2' },
            { id: 'en_c2', label: 'IELTS 7.5+ / TOEFL 109+', level: 'C2' },
            { id: 'en_c1h', label: 'IELTS 7.0 / TOEFL 100', level: 'C1H' },
            { id: 'en_c1', label: 'IELTS 6.5 / TOEFL 92', level: 'C1' },
            { id: 'en_b2', label: 'IELTS 6.0 / TOEFL 79', level: 'B2' },
            { id: 'en_none', label: 'Below that, or not tested yet', level: 'none' }
          ]
        },
        {
          id: 'round', type: 'radio', label: 'When are you applying?',
          help: 'What this costs you depends entirely on how the programme admits — see the ' +
            'timing note against each school in the results.',
          options: [
            { id: 'rd_early', label: 'As soon as applications open', idx: 0 },
            { id: 'rd_mid', label: 'Midway through the cycle', idx: 1 },
            { id: 'rd_late', label: 'Close to the final deadline', idx: 2 }
          ]
        }
      ]
    }
  ];

  /* ----------------------------------------------------------------------- */
  /* Timing regimes                                                           */
  /*                                                                          */
  /* `mods` is indexed by the round option's idx and added straight to the     */
  /* score. E is the one the business model has no equivalent for.            */
  /* ----------------------------------------------------------------------- */

  var REGIMES = {
    A: { label: 'One deadline, all files read together', mods: [0, 0, 0],
         note: 'A single closing date, after which everything is read as one pile. Applying ' +
           'early gains you nothing and costs you nothing.' },
    B: { label: 'Staged deadlines, no stated disadvantage', mods: [0, 0, -1],
         note: 'Several closing dates. The programme states that later applicants are not ' +
           'disadvantaged, but the last stage is thinner on places in practice.' },
    C: { label: 'Rolling until full', mods: [0, -2, -5],
         note: 'Decided as applications arrive, against remaining places. Applying late is a ' +
           'real and substantial disadvantage.' },
    D: { label: 'One deadline, hard cap on places', mods: [0, -1, -3],
         note: 'A single deadline, but a small fixed intake and heavy oversubscription; late ' +
           'files are read last and the margin narrows.' },
    E: { label: 'Gathered field', mods: [0, 0, -4],
         note: 'Applications are collected and judged in batches at set points rather than as ' +
           'they arrive. Early gains nothing — but missing a batch can cost the cycle, and the ' +
           'final batch competes for whatever is left.' }
  };


  /* ----------------------------------------------------------------------- */
  /* Schools                                                                  */
  /*                                                                          */
  /* `threshold` and `strong` are CAL. No programme here publishes a points   */
  /* requirement, and unlike the business side there is no admitted-profile   */
  /* distribution to anchor them to either — so they are calibration against  */
  /* the published rules and the selectivity implied by them, and nothing     */
  /* more. Read them as a ranking device.                                     */
  /*                                                                          */
  /* Everything in `facts` and `gates` is sourced. OFF means I read the       */
  /* programme's own page; OFF2 means the programme's own wording reached me  */
  /* through a secondary summary and I could not open the page directly.      */
  /* Oxford's site and WhatDoTheyKnow both refuse automated requests, so       */
  /* several figures that exist officially are tagged TP here rather than     */
  /* being claimed as verified.                                               */
  /* ----------------------------------------------------------------------- */

  function g(type, value, label, src, extra) {
    var gate = { type: type, value: value, label: label, src: src };
    if (extra) { Object.keys(extra).forEach(function (k) { gate[k] = extra[k]; }); }
    return gate;
  }

  var SCHOOLS = [

    /* ---------------------------------------------------------- UK, CS --- */
    {
      id: 'oxford-acs', name: 'Oxford — MSc Advanced Computer Science',
      tracks: ['cs', 'dsai'], region: 'UK',
      threshold: 84, strong: 91, regime: 'D', profile: 'prereq',
      because: 'The course description assumes fluency in discrete mathematics, linear algebra, probability and algorithm analysis from day one, and says so — the transcript is audited against that before anything else.',
      facts: [
        { k: 'Entry requirement', v: 'First-class undergraduate degree in computer science or mathematics; US applicants normally 3.7 GPA', src: 'OFF2' },
        { k: 'Assumed knowledge', v: 'Fluency in discrete mathematics, linear algebra, probability and algorithm analysis; evidence of having implemented algorithms', src: 'OFF2' },
        { k: 'Selectivity', v: 'Approximately 921 applications for about 70 places (~7–8%)', src: 'TP' },
        { k: 'Note on that figure', v: 'Oxford publishes applications-per-place on its own course pages, but the site refuses automated requests, so this is a third-party figure rather than one I read at source', src: 'CAL' }
      ],
      gates: [
        g('minDegreeClass', 'first', 'Requires a first-class degree', 'OFF2'),
        g('csDegreeRequired', true, 'Requires a degree in computer science or mathematics', 'OFF2'),
        g('minModules', 3, 'Assumes discrete mathematics, linear algebra, probability and algorithm analysis', 'OFF2',
          { modules: ['cv_algo', 'cv_discrete', 'mv_linalg', 'mv_prob'] }),
        g('minEnglish', 'C2', 'Higher-level English requirement', 'OFF2')
      ]
    },
    {
      id: 'cambridge-acs', name: 'Cambridge — MPhil in Advanced Computer Science',
      tracks: ['cs', 'dsai'], region: 'UK',
      threshold: 84, strong: 91, regime: 'C', profile: 'research',
      because: 'The application carries a 500-word project proposal used by the admissions panel to identify a potential supervisor, and two academic references. That is a research-fit process, not a transcript audit.',
      facts: [
        { k: 'Entry requirement', v: 'First-class honours in computer science, or a comparable degree in engineering, science or mathematics with significant relevant preparation', src: 'OFF2' },
        { k: 'Application', v: 'Two academic references and a project proposal of no more than 500 words, used to identify potential supervisors', src: 'OFF2' },
        { k: 'Purpose', v: 'Designed to prepare students for doctoral research', src: 'OFF2' },
        { k: 'Timing', v: 'Self-funding applicants may apply until 26 February, but places are limited and early application is encouraged', src: 'OFF2' },
        { k: 'English', v: 'IELTS 7.5 / TOEFL 107', src: 'OFF2' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('minDegreeClass', 'first', 'Requires a first-class degree', 'OFF2'),
        g('minEnglish', 'C2', 'IELTS 7.5 / TOEFL 107', 'OFF2')
      ]
    },
    {
      id: 'imperial-advcomp', name: 'Imperial — MSc Advanced Computing',
      tracks: ['cs'], region: 'UK',
      threshold: 82, strong: 89, regime: 'C', profile: 'prereq',
      because: 'A first-class degree "with a substantial Computing component" is the stated bar, and the department runs staged rounds without guaranteeing places remain in later ones. The transcript decides it and the calendar constrains it.',
      facts: [
        { k: 'Entry requirement', v: 'First-class honours in a subject with a substantial computing component', src: 'OFF' },
        { k: 'Rounds', v: 'Applications open 30 September; round 2 closes 6 January with decisions by 3 March', src: 'OFF' },
        { k: 'On timing', v: '"We recommend applying as early as you can — we cannot guarantee that places will be available, or that courses will remain open, in later rounds"', src: 'OFF' },
        { k: 'English', v: 'Imperial\'s higher university requirement', src: 'OFF' },
        { k: 'Acceptance rate', v: 'Not published by the department; FOI disclosures covering the MSc Computing family exist but could not be retrieved automatically', src: 'NP' }
      ],
      gates: [
        g('minDegreeClass', 'first', 'Requires a first-class degree', 'OFF'),
        g('csDegreeRequired', true, 'Requires a substantial computing component in the degree', 'OFF'),
        g('minEnglish', 'C1H', 'Higher English requirement', 'OFF')
      ]
    },
    {
      id: 'imperial-aiml', name: 'Imperial — MSc Computing (AI and Machine Learning)',
      tracks: ['dsai'], region: 'UK',
      threshold: 82, strong: 89, regime: 'C', profile: 'prereq',
      because: 'On top of a first-class degree it requires computing coursework equivalent to two years of a CS undergraduate programme — the most explicit credit rule of any UK programme here.',
      facts: [
        { k: 'Entry requirement', v: 'First-class honours in a subject with a substantial computing component', src: 'OFF2' },
        { k: 'Coursework rule', v: 'All applicants must have taken computing courses equating to two years of a computer science undergraduate programme', src: 'OFF2' },
        { k: 'Rounds', v: 'Staged, as for the department\'s other MSc courses; later rounds are not guaranteed to stay open', src: 'OFF' }
      ],
      gates: [
        g('minDegreeClass', 'first', 'Requires a first-class degree', 'OFF2'),
        g('csDegreeRequired', true, 'Requires a substantial computing component in the degree', 'OFF2'),
        g('minCsEcts', 75, 'Requires computing coursework equal to two years of a CS degree', 'OFF2'),
        g('minEnglish', 'C1H', 'Higher English requirement', 'OFF')
      ]
    },
    {
      id: 'ucl-dsml', name: 'UCL — MSc Data Science and Machine Learning',
      tracks: ['dsai'], region: 'UK',
      threshold: 76, strong: 84, regime: 'C', profile: 'transcript',
      because: 'A 2:1 in a highly quantitative subject plus first-year university mathematics is the whole published bar. There is no interview and no portfolio; the class of the degree and the subject carry it.',
      facts: [
        { k: 'Entry requirement', v: 'Upper second-class (2:1) degree in a highly quantitative subject — computer science, mathematics, engineering, physics or statistics', src: 'OFF2' },
        { k: 'Mathematics', v: 'Linear algebra, calculus, probability and statistics at least to UK first-year undergraduate level in the mathematical sciences', src: 'OFF2' },
        { k: 'Programming', v: 'Modules require programming in both R and Python; prior experience in a high-level language is useful', src: 'OFF2' },
        { k: 'Deadlines', v: 'Visa applicants 20 October – 27 March; others until 28 August', src: 'OFF2' },
        { k: 'Other', v: 'Relevant work experience may also be considered', src: 'OFF2' }
      ],
      gates: [
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'OFF2'),
        g('minModules', 2, 'Requires linear algebra and probability at university level', 'OFF2',
          { modules: ['mv_linalg', 'mv_prob'] }),
        g('minEnglish', 'C1', 'UCL English requirement', 'OFF2')
      ]
    },
    {
      id: 'edinburgh-ai', name: 'Edinburgh — MSc Artificial Intelligence',
      tracks: ['dsai'], region: 'UK',
      threshold: 76, strong: 84, regime: 'E', profile: 'prereq',
      because: 'It names both the acceptable bachelor subjects and a credit quantity of mathematics — 30 ECTS covering calculus, linear algebra, discrete mathematics and probability. The audit is the process.',
      facts: [
        { k: 'Entry requirement', v: '2:1 minimum, but "a typical offer will normally require a UK first class honours degree"', src: 'OFF' },
        { k: 'Acceptable backgrounds', v: 'Informatics, AI, cognitive science, computer science, econometrics, electrical engineering, linguistics, mathematics, philosophy, physics or psychology', src: 'OFF' },
        { k: 'Mathematics', v: '60 SCQF / 30 ECTS covering calculus, linear algebra, discrete mathematics and probability; probability is singled out as particularly important', src: 'OFF' },
        { k: 'Programming', v: 'Competence in at least one of C/C++, Java, Python, R, Matlab, Haskell or ML', src: 'OFF' },
        { k: 'Process', v: 'Applications open in October and close 31 March. Ongoing offers go to outstanding candidates, but the majority of applications are held until the deadline and decided together, within eight weeks', src: 'OFF' },
        { k: 'English', v: 'IELTS 7.0 / TOEFL 100', src: 'OFF' }
      ],
      gates: [
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'OFF'),
        g('minMathsEcts', 25, 'Requires about 30 ECTS of mathematics', 'OFF'),
        g('minModules', 2, 'Requires calculus, linear algebra, discrete mathematics and probability', 'OFF',
          { modules: ['mv_linalg', 'mv_prob', 'mv_calc'] }),
        g('minEnglish', 'C1H', 'IELTS 7.0 / TOEFL 100', 'OFF')
      ]
    },
    {
      id: 'edinburgh-informatics', name: 'Edinburgh — MSc Informatics',
      tracks: ['cs'], region: 'UK',
      threshold: 74, strong: 82, regime: 'E', profile: 'prereq',
      because: 'Same school, same gathered-field process and the same style of named-prerequisite audit as the AI degree, applied to a broader computing intake.',
      facts: [
        { k: 'Entry requirement', v: '2:1 in informatics, computer science or a closely related discipline; competitive offers sit above the minimum', src: 'OFF2' },
        { k: 'Process', v: 'Gathered field — applications are held and assessed together at set points rather than as they arrive', src: 'OFF' },
        { k: 'English', v: 'IELTS 7.0 / TOEFL 100', src: 'OFF' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'OFF2'),
        g('csDegreeRequired', true, 'Requires informatics, computer science or a closely related degree', 'OFF2'),
        g('minEnglish', 'C1H', 'IELTS 7.0 / TOEFL 100', 'OFF')
      ]
    },
    {
      id: 'kcl-ai', name: "King's College London — MSc Artificial Intelligence",
      tracks: ['dsai'], region: 'UK',
      threshold: 70, strong: 79, regime: 'C', profile: 'transcript',
      because: 'A numeric bar — a high 2:1 at minimum 65% — in a named list of quantitative subjects, with mathematics checked by topic. No interview is published.',
      facts: [
        { k: 'Entry requirement', v: 'High 2:1, minimum 65%, in computer science or another relevant quantitative discipline', src: 'OFF2' },
        { k: 'Acceptable backgrounds', v: 'Mathematics, statistics, physics, natural science, electronic engineering, general engineering, operations research, or a joint degree in two such subjects', src: 'OFF2' },
        { k: 'Mathematics', v: 'Sound background in calculus, trigonometry, linear algebra, vectors and matrix mathematics', src: 'OFF2' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('minDegreeClass', '2:1h', 'Requires a high 2:1 — minimum 65%', 'OFF2'),
        g('minModules', 1, 'Requires linear algebra', 'OFF2', { modules: ['mv_linalg'] }),
        g('minEnglish', 'C1', "King's English requirement", 'OFF2')
      ]
    },
    {
      id: 'warwick-cs', name: 'Warwick — MSc Computer Science',
      tracks: ['cs'], region: 'UK',
      threshold: 72, strong: 80, regime: 'C', profile: 'transcript',
      because: 'A class requirement in a named list of quantitative subjects, with no published interview or portfolio stage. Degree class and subject do the ranking.',
      facts: [
        { k: 'Entry requirement', v: 'First-class or high 2:1 in computer science, mathematics, statistics, physics or another quantitatively focused degree', src: 'TP' },
        { k: 'Non-computing routes', v: 'Quantitative degrees such as mathematics or physics at 60% or above are accepted — a strict computing background is not mandatory', src: 'TP' },
        { k: 'English', v: 'IELTS 6.5 overall with no component below 6.0', src: 'TP' },
        { k: 'Applicant reports', v: 'No applicant-reported results at all since 2021 in the sample used here', src: 'GC' }
      ],
      gates: [
        g('minDegreeClass', '2:1h', 'Requires a first or high 2:1', 'TP'),
        g('minEnglish', 'C1', 'IELTS 6.5 with no component below 6.0', 'TP')
      ]
    },
    {
      id: 'manchester-acs', name: 'Alliance Manchester — MSc Advanced Computer Science',
      tracks: ['cs'], region: 'UK',
      threshold: 70, strong: 79, regime: 'C', profile: 'transcript',
      because: 'Manchester states that it gives preference to applicants from high-ranking institutions and to grades above the minimum. Where a school says the institution matters, the institution matters.',
      facts: [
        { k: 'Entry requirement', v: 'A strong computer science background, reflected in solid programming and software development skills', src: 'OFF2' },
        { k: 'Institution', v: 'Preference is given to students from high-ranking institutions and with grades above the minimum entry requirement', src: 'OFF2' },
        { k: 'Country rules', v: 'The department publishes country-specific entry requirements', src: 'OFF2' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'OFF2'),
        g('csDegreeRequired', true, 'Requires a strong computer science background', 'OFF2'),
        g('minEnglish', 'C1', 'Manchester English requirement', 'OFF2')
      ]
    },
    {
      id: 'southampton-ai', name: 'Southampton — MSc Artificial Intelligence',
      tracks: ['dsai'], region: 'UK',
      threshold: 68, strong: 77, regime: 'C', profile: 'prereq',
      because: 'The clearest module-level rule in the UK set: a 2:1 standard is required within named individual modules, not just overall.',
      facts: [
        { k: 'Entry requirement', v: '2:1 in computer science, computer engineering, software engineering, artificial intelligence, mathematics with computing, or information technology', src: 'OFF2' },
        { k: 'Module rule', v: 'An upper 2:1 standard is required in each of: a programming language, linear algebra or another advanced mathematics module, and a module in AI, machine learning or advanced algorithms', src: 'OFF2' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'OFF2'),
        g('csDegreeRequired', true, 'Requires a computing or computing-adjacent degree', 'OFF2'),
        g('minModules', 2, 'Requires programming and linear algebra at 2:1 standard within the modules themselves', 'OFF2',
          { modules: ['cv_prog', 'mv_linalg', 'cv_algo'] })
      ]
    },

    /* ---------------------------------------------------------- EU, CS --- */
    {
      id: 'eth-cs', name: 'ETH Zürich — MSc Computer Science',
      tracks: ['cs', 'dsai'], region: 'Switzerland',
      threshold: 80, strong: 88, regime: 'A', profile: 'prereq',
      because: 'ETH publishes what its holistic evaluation actually contains — undergraduate performance, the ranking of the university, background in the field, motivation letter and references — and leads with the transcript.',
      facts: [
        { k: 'Entry requirement', v: 'Bachelor of at least three years / 180 ECTS, in computer science — or a related field such as electrical engineering, physics or mathematics, graduated with distinction', src: 'OFF2' },
        { k: 'What is assessed', v: 'Performance in the undergraduate programme, the ranking of the university, background in the chosen field, standardised test scores where required, the motivation letter and the references', src: 'OFF2' },
        { k: 'Language', v: 'Taught exclusively in English', src: 'OFF2' },
        { k: 'Applicant reports', v: 'The only programme in this set with enough applicant-reported results since 2021 to say anything per school', src: 'GC' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('csDegreeRequired', true, 'Requires computer science, or a related field with distinction', 'OFF2'),
        g('bachelorLength', 3, 'Requires a bachelor of at least three years / 180 ECTS', 'OFF2')
      ]
    },
    {
      id: 'epfl-cs', name: 'EPFL — MSc Computer Science',
      tracks: ['cs'], region: 'Switzerland',
      threshold: 78, strong: 86, regime: 'A', profile: 'prereq',
      because: 'The required skills are listed by name — calculus, discrete mathematics, linear algebra, probability, algorithms, data structures, databases and real programming experience — and external applicants are admitted on the dossier against them.',
      facts: [
        { k: 'Entry requirement', v: 'Consecutive to an EPFL bachelor in computer science or communication systems; the same degrees from elsewhere are eligible on a dossier basis and must show excellent academic records', src: 'OFF2' },
        { k: 'Required skills', v: 'Calculus, discrete mathematics, linear algebra and probability; a solid understanding of algorithms, data structures and databases', src: 'OFF2' },
        { k: 'Programming', v: 'Proficiency in Python, Java or C++, with software development experience', src: 'OFF2' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('csDegreeRequired', true, 'Requires computer science or communication systems', 'OFF2'),
        g('minModules', 3, 'Requires algorithms, data structures and databases', 'OFF2',
          { modules: ['cv_algo', 'cv_db', 'cv_prog', 'cv_discrete'] }),
        g('minMathsEcts', 25, 'Requires calculus, discrete mathematics, linear algebra and probability', 'OFF2')
      ]
    },
    {
      id: 'tudelft-cs', name: 'TU Delft — MSc Computer Science',
      tracks: ['cs'], region: 'Netherlands',
      threshold: 72, strong: 80, regime: 'A', profile: 'rulebased',
      because: 'The requirement is a credit checklist with four separately enforced sub-thresholds. Meeting it is very nearly the decision; missing one line is not compensated by the rest of the file.',
      facts: [
        { k: 'Entry requirement', v: 'An engineering bachelor in computer science or a closely related field, with good scores in the key subjects', src: 'OFF2' },
        { k: 'Credit rule', v: 'Minimum 120 ECTS in computer science, of which at least 100 ECTS in key subjects', src: 'OFF2' },
        { k: 'Key subject floors', v: 'Mathematics and modelling 15 ECTS; software development fundamentals 30 ECTS; computer systems 10 ECTS; fundamental computer science 15 ECTS', src: 'OFF2' },
        { k: 'Grade rule', v: 'International applicants: CGPA of 75% or better', src: 'OFF2' },
        { k: 'How it is judged', v: 'Assessed by the admission committee on academic performance and study load in the key subjects', src: 'OFF2' }
      ],
      gates: [
        g('csDegreeRequired', true, 'Requires a computer science or closely related engineering bachelor', 'OFF2'),
        g('minCsEcts', 100, 'Requires at least 100 ECTS in key computing subjects', 'OFF2'),
        g('minMathsEcts', 15, 'Requires at least 15 ECTS of mathematics and modelling', 'OFF2'),
        g('minDegreeClass', '2:1', 'Requires a CGPA of 75% or better', 'OFF2'),
        g('minModules', 3, 'Requires logic, algorithms and data structures, computability and computer systems', 'OFF2',
          { modules: ['cv_algo', 'cv_discrete', 'cv_theory', 'cv_systems', 'cv_net'] })
      ]
    },
    {
      id: 'tum-informatics', name: 'TUM — MSc Informatics',
      tracks: ['cs'], region: 'Germany',
      threshold: 72, strong: 80, regime: 'A', profile: 'rulebased',
      because: 'TUM runs a formal two-stage aptitude assessment with a published points scheme — over 55 points passes the first stage, and an interview follows. The rule is the process, written down.',
      facts: [
        { k: 'Entry requirement', v: 'A bachelor in informatics or computer science equivalent to the TUM BSc Informatics; other programmes do not qualify', src: 'OFF2' },
        { k: 'Aptitude assessment', v: 'Two stages. Over 55 points passes the first; the second is an interview assessing research ability, specialised knowledge and commitment. Total points across both decide admission', src: 'OFF2' },
        { k: 'What is assessed', v: 'Ability to do research and methodological work, specialised knowledge from the undergraduate degree, ability to solve complex problems, and interest in applying them', src: 'OFF2' },
        { k: 'Applicant reports', v: 'None found since 2021 — TUM is recorded under several different name spellings, and none carried computing master\'s results in the window used here', src: 'GC' }
      ],
      gates: [
        g('csDegreeRequired', true, 'Requires an informatics or computer science bachelor equivalent to TUM\'s own', 'OFF2'),
        g('minCsEcts', 100, 'Requires a degree equivalent in content to the TUM BSc Informatics', 'OFF2')
      ]
    },
    {
      id: 'kth-ml', name: 'KTH — MSc Machine Learning',
      tracks: ['dsai'], region: 'Sweden',
      threshold: 74, strong: 82, regime: 'A', profile: 'rulebased',
      because: 'Swedish state admission: a published list of required topics, assessed against the transcript. No interview, no portfolio, no discretion worth modelling.',
      facts: [
        { k: 'Entry requirement', v: 'A bachelor of 180 ECTS with at least one level of mathematics and computer science', src: 'OFF2' },
        { k: 'Required topics', v: 'Algorithms, data structures, calculus, linear algebra and statistics', src: 'OFF2' },
        { k: 'Selectivity', v: '58 admitted from 1,019 applicants for 2026 (about 6%)', src: 'TP' },
        { k: 'English', v: 'English 6 / English Level 2 — IELTS 6.5', src: 'OFF2' }
      ],
      gates: [
        g('bachelorLength', 3, 'Requires a bachelor of 180 ECTS', 'OFF2'),
        g('minModules', 1, 'Requires algorithms and data structures', 'OFF2', { modules: ['cv_algo'] }),
        g('minMathsEcts', 15, 'Requires calculus, linear algebra and statistics', 'OFF2'),
        g('minEnglish', 'C1', 'IELTS 6.5', 'OFF2')
      ]
    },
    {
      id: 'uva-ai', name: 'University of Amsterdam — MSc Artificial Intelligence',
      tracks: ['dsai'], region: 'Netherlands',
      threshold: 74, strong: 82, regime: 'A', profile: 'rulebased',
      because: 'A credit floor in computing plus three named mathematics areas, with motivation assessed for fit against the programme content. The checklist is published and enforced.',
      facts: [
        { k: 'Entry requirement', v: 'A Dutch or foreign qualification comparable to artificial intelligence or computer science', src: 'OFF2' },
        { k: 'Computing credit', v: 'Basic knowledge of computer science, at least 12 EC', src: 'OFF2' },
        { k: 'Mathematics', v: 'Basic university-level calculus, linear algebra, and probability and statistics', src: 'OFF2' },
        { k: 'Motivation', v: 'A motivation that matches the content of the programme', src: 'OFF2' },
        { k: 'Length', v: 'Two years — longer than the UK equivalents', src: 'OFF2' }
      ],
      gates: [
        g('minCsEcts', 30, 'Requires at least 12 EC of computer science', 'OFF2'),
        g('minModules', 2, 'Requires calculus, linear algebra and probability', 'OFF2',
          { modules: ['mv_linalg', 'mv_prob', 'mv_calc'] })
      ]
    },

    /* ---------------------------------------------------------- US, CS --- */
    /* Four programmes read at source in September 2026 for Fall 2027 entry.
     * None requires a computing degree and none publishes a GPA or test bar
     * beyond Berkeley's university-wide 3.0, so the gates are thin and the
     * decision sits in the file — which is how US departments describe their
     * own process. MIT is not here: see EXCLUDED. */
    {
      id: 'stanford-mscs', name: 'Stanford — MS in Computer Science',
      tracks: ['cs', 'dsai'], region: 'USA',
      threshold: 86, strong: 92, regime: 'A', profile: 'research',
      because: 'Three letters, no more and no fewer, and a two-page statement of purpose, with no test and no subject requirement. With the transcript unable to separate a field this strong, the referees and the statement carry the difference.',
      facts: [
        { k: 'Entry requirement', v: '"While we do not require a specific undergraduate coursework, it is important that applicants have strong quantitative and analytical skills; a Bachelor\'s degree in Computer Science is not required"', src: 'OFF' },
        { k: 'Application', v: 'Exactly three recommendation letters; a statement of purpose of no more than two pages; unofficial transcripts; $125 fee', src: 'OFF' },
        { k: 'Tests', v: 'The GRE is not required for MS applicants', src: 'OFF' },
        { k: 'English', v: 'TOEFL iBT 89 minimum for School of Engineering master\'s applicants; the department may set a higher bar', src: 'OFF2' },
        { k: 'Deadline', v: '8 December 2026 for Autumn 2027 entry; the application opened 15 September 2026 and decisions follow in March', src: 'OFF' },
        { k: 'On the PhD', v: '"Entering the MS program is by no means a guaranteed path to a PhD at Stanford"', src: 'OFF' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('minEnglish', 'C1', 'TOEFL iBT 89 — the nearest band in this form is IELTS 6.5 / TOEFL 92', 'OFF2')
      ]
    },
    {
      id: 'cmu-mscs', symbol: 'CMU', name: 'Carnegie Mellon — MS in Computer Science',
      tracks: ['cs'], region: 'USA',
      threshold: 85, strong: 91, regime: 'B', profile: 'research',
      because: 'The statement of purpose is specified as an essay on "your primary research interests", and at least two of three letters must come from faculty or recent employers. That is a department reading the file for fit.',
      facts: [
        { k: 'Who it is for', v: '"You don\'t need a bachelor\'s degree in computer science specifically for the program, but a technical undergraduate background will set you up for success"', src: 'OFF' },
        { k: 'Deadlines', v: 'Early 18 November 2026, final 9 December 2026 (3 p.m. EST), for Fall 2027 entry', src: 'OFF' },
        { k: 'Tests', v: 'The GRE is "strongly recommended" but not required; applicants without one should explain their mathematical background', src: 'OFF' },
        { k: 'Application', v: 'Three letters, at least two from faculty or recent employers; a one- or two-page statement on research interests and objectives', src: 'OFF' },
        { k: 'English', v: 'TOEFL, IELTS or Duolingo for F-1 and J-1 applicants who are not native speakers; no waivers, and no published minimum', src: 'OFF' },
        { k: 'Acceptance rate', v: 'Not published per programme', src: 'NP' }
      ],
      gates: []
    },
    {
      id: 'cmu-msml', symbol: 'CMU', name: 'Carnegie Mellon — MS in Machine Learning',
      tracks: ['dsai'], region: 'USA',
      threshold: 86, strong: 92, regime: 'B', profile: 'prereq',
      because: 'The department states the mathematics its first-year courses assume — a year of probability and statistics, matrix algebra and multivariate calculus — and its admitted class averaged a 3.9 GPA and 169 GRE quant. The transcript is read against that before anything else.',
      facts: [
        { k: 'Prerequisites', v: 'A strong background in computer science, including complexity theory and good programming skills; at least one year of college-level probability and statistics, matrix algebra and multivariate calculus', src: 'OFF' },
        { k: 'Degree field', v: '"An undergraduate degree in computer science is not required"', src: 'OFF' },
        { k: 'Admitted profile', v: 'Fall 2025 admits averaged a 3.9 GPA, 169 GRE quantitative and 111 TOEFL', src: 'OFF' },
        { k: 'Tests', v: 'The GRE was optional for Fall 2025 and 2026 entry; the Fall 2027 policy is not yet stated on the programme page', src: 'OFF' },
        { k: 'Deadlines', v: 'Early 18 November 2026, final 9 December 2026 (3 p.m. EST), for Fall 2027 entry', src: 'OFF2' }
      ],
      gates: [
        g('minModules', 3, 'Assumes probability and statistics, matrix algebra and multivariate calculus', 'OFF',
          { modules: ['mv_prob', 'mv_linalg', 'mv_calc'] })
      ]
    },
    {
      id: 'berkeley-meng', symbol: 'BERKELEY', name: 'UC Berkeley — MEng in EECS',
      tracks: ['cs'], region: 'USA',
      threshold: 82, strong: 89, regime: 'A', profile: 'balanced',
      because: 'A one-year professional master\'s with a capstone and leadership courses, for people going straight into industry, which asks for "a mixture of academic and industry letters". Nothing published points to one part of the file carrying it.',
      facts: [
        { k: 'Who it is for', v: 'A professional master\'s for students who plan to join the engineering profession immediately after graduating: a technical concentration, leadership courses and a capstone project, in one academic year', src: 'OFF' },
        { k: 'Deadline', v: '6 January 2027 for Fall 2027 entry; applications are taken once a year and most admits hear by mid-April', src: 'OFF' },
        { k: 'Tests', v: '"The EECS department no longer requires, accepts, or considers GRE scores"', src: 'OFF' },
        { k: 'Grades', v: 'The Graduate Division requires a minimum undergraduate GPA of 3.0 on a 4.0 scale, or its equivalent', src: 'OFF2' },
        { k: 'English', v: 'TOEFL iBT 90 or IELTS 7 for degrees from non-English-speaking universities', src: 'OFF' },
        { k: 'Application', v: 'Three letters, ideally a mix of academic and industry; a statement of purpose and a personal history statement', src: 'OFF' },
        { k: 'MS route', v: 'Berkeley\'s research MS is part of the MS/PhD admission and is not modelled here', src: 'CAL' }
      ],
      gates: [
        g('minDegreeClass', '2:1', 'Requires a GPA of at least 3.0 on a 4.0 scale', 'OFF2'),
        g('minEnglish', 'C1', 'TOEFL iBT 90 or IELTS 7', 'OFF')
      ]
    },

    /* ------------------------------------------------------- Conversion --- */
    {
      id: 'imperial-computing', name: 'Imperial — MSc Computing (conversion)',
      tracks: ['conversion'], region: 'UK',
      threshold: 80, strong: 88, regime: 'C', profile: 'open',
      because: 'Explicitly for people who have not formally studied computing, and it asks for a first-class degree in any subject outside it — the highest bar of any conversion programme here.',
      facts: [
        { k: 'Entry requirement', v: 'First-class honours in any subject outside computing or computer science, ideally with enough quantitative or analytical content to complete the MSc', src: 'OFF2' },
        { k: 'Mathematics', v: 'At least an A in GCSE mathematics or equivalent for non-STEM degrees', src: 'OFF2' },
        { k: 'Who it is for', v: 'Aimed at individuals who have not formally studied computing but want to acquire core computing skills', src: 'OFF2' },
        { k: 'Note', v: 'The first-class requirement is a higher bar than most conversion competitors, which generally accept a 2:1', src: 'TP' }
      ],
      gates: [
        g('noCsDegree', true, 'Requires a degree outside computing or computer science', 'OFF2'),
        g('minDegreeClass', 'first', 'Requires a first-class degree', 'OFF2'),
        g('minEnglish', 'C1H', 'Higher English requirement', 'OFF')
      ]
    },
    {
      id: 'ucl-cs-conv', name: 'UCL — MSc Computer Science (conversion)',
      tracks: ['conversion'], region: 'UK',
      threshold: 74, strong: 82, regime: 'C', profile: 'open',
      because: 'A conversion degree that states both halves of the rule: a 2:1 in a subject other than computing, and outright non-admission for degrees already containing significant computer science.',
      facts: [
        { k: 'Entry requirement', v: 'Upper second-class (2:1) degree in a subject other than computer science or information technology', src: 'OFF2' },
        { k: 'Exclusion', v: 'Graduates whose degrees already contain significant computer science content are not admitted', src: 'OFF2' },
        { k: 'Mathematics', v: 'Evidence of mathematical skills to at least A-level standard, and of analytical skills, must be included in the application', src: 'OFF2' },
        { k: 'Intake', v: 'The majority of each intake has little or no computing experience from prior education or employment', src: 'OFF2' }
      ],
      gates: [
        g('noCsDegree', true, 'Requires a degree in a subject other than computer science or IT', 'OFF2'),
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'OFF2'),
        g('minEnglish', 'C1', 'UCL English requirement', 'OFF2')
      ]
    },
    {
      id: 'bristol-cs-conv', name: 'Bristol — MSc Computer Science (conversion)',
      tracks: ['conversion'], region: 'UK',
      threshold: 66, strong: 75, regime: 'C', profile: 'open',
      because: 'Aimed at students from a variety of academic backgrounds with little or no previous academic computing experience, which is the definition of the category.',
      facts: [
        { k: 'Who it is for', v: 'Students from a variety of academic backgrounds with little or no previous academic computing experience', src: 'OFF2' },
        { k: 'Entry requirement', v: 'Published in the programme\'s own admissions statement rather than the prospectus page; not read at source here', src: 'NP' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('noCsDegree', true, 'Intended for applicants with little or no prior academic computing', 'OFF2'),
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'TP'),
        g('minEnglish', 'C1', 'Bristol English requirement', 'TP')
      ]
    },
    {
      id: 'glasgow-it', name: 'Glasgow — MSc Information Technology (conversion)',
      tracks: ['conversion'], region: 'UK',
      threshold: 62, strong: 71, regime: 'C', profile: 'open',
      because: 'The only programme here that quantifies the exclusion — a degree in any subject with less than half its credit-bearing modules in computing — and the only one that names experience as an alternative route.',
      facts: [
        { k: 'Entry requirement', v: '2:1 honours in any subject with less than 50% of credit-bearing modules in computing', src: 'OFF2' },
        { k: 'Experience route', v: 'A 2:2 is sometimes accepted with more than eight years of work experience', src: 'OFF2' },
        { k: 'Who it is for', v: 'A conversion degree for students without a computing science background', src: 'OFF2' }
      ],
      gates: [
        g('noCsDegree', true, 'Requires less than 50% of credit-bearing modules in computing', 'OFF2'),
        g('minDegreeClass', '2:1', 'Requires a 2:1 — a 2:2 is sometimes accepted with eight years of experience', 'OFF2')
      ]
    },
    {
      id: 'standrews-cs-conv', name: 'St Andrews — MSc Computer Science (conversion)',
      tracks: ['conversion'], region: 'UK',
      threshold: 64, strong: 73, regime: 'C', profile: 'open',
      because: 'A conversion MSc whose own page warns that the listed qualifications are indicative and that competitive applicants are expected above them — a published gap between the stated bar and the real one.',
      facts: [
        { k: 'Entry requirement', v: 'Listed qualifications are "indicative of standard requirements for entry"; schools may require higher grades to be competitive', src: 'OFF2' },
        { k: 'Who it is for', v: 'Graduates converting into computer science from another subject', src: 'OFF2' },
        { k: 'Acceptance rate', v: 'Not published', src: 'NP' }
      ],
      gates: [
        g('noCsDegree', true, 'A conversion degree, for graduates of other subjects', 'OFF2'),
        g('minDegreeClass', '2:1', 'Requires a 2:1 or equivalent', 'TP')
      ]
    }
  ];

  /* Programmes deliberately not modelled, and why. */
  var EXCLUDED = [
    {
      name: 'Georgia Tech OMSCS and other online master\'s',
      why: 'Admission is close to open by the standards of everything else here, and the ' +
        'selection question this tool answers barely applies. Modelling it alongside Oxford ' +
        'would misrepresent both.',
      src: 'CAL'
    },
    {
      name: 'RWTH Aachen, Saarland, DTU and Aalto computing master\'s',
      why: 'Real programmes worth applying to, left out of this build because I could not ' +
        'read their published entry rules at source, and there are no applicant-reported ' +
        'results for them in the five-year window either. A record with no verifiable rule ' +
        'and no evidence behind it would be invention.',
      src: 'CAL'
    },
    {
      name: 'MIT — Electrical Engineering and Computer Science',
      why: 'MIT EECS offers no terminal master\'s. Its Master of Engineering is open only to ' +
        'MIT\'s own undergraduates, and every outside applicant is admitted into the PhD, ' +
        'earning a master\'s on the way. There is no master\'s application to score.',
      src: 'OFF2'
    },
    {
      name: 'The rest of the US computing master\'s',
      why: 'Stanford, Carnegie Mellon and Berkeley are modelled from their published rules. ' +
        'The applicant-reported results used for the UK and European programmes do not yet ' +
        'cover them — Carnegie Mellon alone has more reported results since 2021 than every ' +
        'programme here combined — so no US programme shows applicant reports, and more ' +
        'US schools will wait until that evidence is built properly rather than guessed at.',
      src: 'CAL'
    }
  ];

  /* Answers that are already fixed by the time you apply. Never suggested as
   * improvements. Note that the prerequisite modules are NOT here: taking a
   * discrete mathematics course before you apply is a real option, and at a
   * prerequisite-audited school it is usually the only one that helps. */
  var FIXED_GROUPS = ['gradeScale', 'gradeBand', 'institution', 'degreeField', 'bachelorLength'];

  return {
    tracks: TRACKS,
    steps: STEPS,
    profiles: PROFILES,
    regimes: REGIMES,
    schools: SCHOOLS,
    excluded: EXCLUDED,
    fixedGroups: FIXED_GROUPS
  };
})();

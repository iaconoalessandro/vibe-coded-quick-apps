/* ---------------------------------------------------------------------------
 * MBA scoring model.
 *
 * Points-based: each answer carries a fixed number of points, GPA and test
 * score are scored jointly off one table, and eight schools apply their own
 * adjustments on top of the total. The values follow a points-based MBA
 * admissions model published by a third-party consultancy, so the calculator
 * reproduces that model's results. The schema and identifiers are this
 * project's own.
 *
 * Two of the model's test-score checks list individual scores where a range is
 * evidently meant, so a 760 misses the high-score bonus and a 690 escapes the
 * low-score penalty. Both readings are kept, `published` and `corrected`, and
 * the results page switches between them.
 * ------------------------------------------------------------------------- */

window.MBA_MODEL = (function () {
  'use strict';

  /* GMAT / GMAT Focus / GRE equivalences. Note the 770-790 rows all map to a
   * Focus 805 ceiling, and 650-670 all map to 615 — the table is coarse at
   * both ends. */
  var CONVERSION = [
    { id: 'gm_790', gmat: 790, focus: 805, gre: 338 },
    { id: 'gm_780', gmat: 780, focus: 805, gre: 336 },
    { id: 'gm_770', gmat: 770, focus: 805, gre: 335 },
    { id: 'gm_760', gmat: 760, focus: 715, gre: 334 },
    { id: 'gm_750', gmat: 750, focus: 715, gre: 333 },
    { id: 'gm_740', gmat: 740, focus: 695, gre: 332 },
    { id: 'gm_730', gmat: 730, focus: 695, gre: 330 },
    { id: 'gm_720', gmat: 720, focus: 675, gre: 329 },
    { id: 'gm_710', gmat: 710, focus: 665, gre: 328 },
    { id: 'gm_700', gmat: 700, focus: 655, gre: 327 },
    { id: 'gm_690', gmat: 690, focus: 645, gre: 326 },
    { id: 'gm_680', gmat: 680, focus: 635, gre: 325 },
    { id: 'gm_670', gmat: 670, focus: 615, gre: 324 },
    { id: 'gm_660', gmat: 660, focus: 615, gre: 322 },
    { id: 'gm_650', gmat: 650, focus: 615, gre: 321 },
    { id: 'gm_640', gmat: 640, focus: 595, gre: 320 },
    { id: 'gm_630', gmat: 630, focus: 585, gre: 319 },
    { id: 'gm_620', gmat: 620, focus: 585, gre: 318 },
    { id: 'gm_610', gmat: 610, focus: 575, gre: 316 },
    { id: 'gm_600', gmat: 600, focus: 565, gre: 315 },
    { id: 'gm_590', gmat: 590, focus: 555, gre: 314 },
    { id: 'gm_580', gmat: 580, focus: 555, gre: 313 },
    { id: 'gm_570', gmat: 570, focus: 545, gre: 312 },
    { id: 'gm_560', gmat: 560, focus: 535, gre: 310 },
    { id: 'gm_550', gmat: 550, focus: 525, gre: 309 }
  ];

  var GPA_BANDS = [
    { id: 'gp_26', label: 'GPA 2.6 – 2.79' },
    { id: 'gp_28', label: 'GPA 2.8 – 2.99' },
    { id: 'gp_30', label: 'GPA 3.0 – 3.19' },
    { id: 'gp_32', label: 'GPA 3.2+ / top 20% of class' },
    { id: 'gp_34', label: 'GPA 3.4+ / top 15% of class' },
    { id: 'gp_top10', label: 'Cum Laude / distinction / top 10%' },
    { id: 'gp_magna', label: 'Magna Cum Laude' },
    { id: 'gp_summa', label: 'Summa Cum Laude / high distinction' }
  ];

  /* GPA and GMAT are scored jointly, not independently. Each row covers a band
   * of GMAT scores; the eight values are the points for each GPA band in the
   * order of GPA_BANDS. Zeros are real: at GMAT 550 anything below Cum Laude
   * contributes nothing at all. */
  var GPA_GMAT_ROWS = [
    { gmats: [550], pts: [0, 0, 0, 0, 0, 1, 2, 3] },
    { gmats: [560, 570, 580], pts: [0, 1, 1, 2, 3, 4, 5, 6] },
    { gmats: [590, 600, 610], pts: [1, 1, 2, 3, 4, 6, 7, 8] },
    { gmats: [620, 630], pts: [3, 3, 4, 5, 6, 8, 9, 11] },
    { gmats: [640, 650, 660], pts: [3, 4, 5, 6, 7, 9, 12, 15] },
    { gmats: [670, 680, 690], pts: [5, 7, 8, 9, 10, 12, 15, 17] },
    { gmats: [700, 710, 720], pts: [6.5, 8.5, 11.5, 13.5, 14.5, 16.5, 17.5, 19.5] },
    { gmats: [730, 740], pts: [8.5, 12.5, 14.5, 15.5, 16.5, 18.5, 19.5, 21.5] },
    { gmats: [750, 760], pts: [13.5, 15.5, 16.5, 17.5, 18.5, 20.5, 21.5, 22.5] },
    { gmats: [770, 780, 790], pts: [16.5, 17.5, 18.5, 19.5, 20.5, 22.5, 22.5, 22.5] }
  ];

  /* The test-score checks some schools apply, in both readings. */
  var GMAT_TESTS = {
    high: { published: [750, 780], corrected: { gte: 750 } },
    low: { published: [550, 580, 600, 630, 650, 680], corrected: { lt: 700 } },
    nyuHigh: { published: [730, 750, 780], corrected: { gte: 730 } }
  };

  /* ----------------------------------------------------------------------- */
  /* Wizard definition                                                        */
  /* ----------------------------------------------------------------------- */

  var gmatOptions = CONVERSION.map(function (c) {
    return {
      id: c.id,
      label: String(c.gmat),
      note: 'Focus ' + c.focus + ' · GRE ' + c.gre,
      gmat: c.gmat
    };
  });

  var STEPS = [
    {
      id: 'about',
      title: 'About you',
      blurb: 'Age at the point you submit the application, not at matriculation.',
      groups: [
        {
          id: 'age', type: 'radio', label: 'Age when you submit',
          options: [
            { id: 'ag_under28', label: 'Under 28', pts: 5 },
            { id: 'ag_28_29', label: '28 – 29', pts: 5 },
            { id: 'ag_30', label: '30', pts: 4 },
            { id: 'ag_31', label: '31', pts: 3 },
            { id: 'ag_32', label: '32', pts: 3 },
            { id: 'ag_33', label: '33', pts: 1 },
            { id: 'ag_34_35', label: '34 – 35', pts: 1 },
            { id: 'ag_over35', label: 'Over 35', pts: 0 }
          ]
        },
        {
          id: 'gender', type: 'radio', label: 'Gender',
          help: 'The model assigns points here. They are kept so the scores stay unchanged.',
          options: [
            { id: 'gd_female', label: 'Female', pts: 3.5 },
            { id: 'gd_male', label: 'Male', pts: 0 }
          ]
        }
      ]
    },

    {
      id: 'academics',
      title: 'Academics',
      blurb: 'GPA and test score are scored together, not separately — a strong ' +
        'GPA is worth far more at a high GMAT than at a low one.',
      groups: [
        {
          id: 'gpa', type: 'radio', label: 'Undergraduate result',
          help: 'If you fall between two bands, take the higher one. ' +
            'With two bachelor degrees, use the one that best reflects your overall record.',
          options: GPA_BANDS.map(function (b) { return { id: b.id, label: b.label, pts: 0 }; })
        },
        {
          id: 'gmat', type: 'radio', label: 'Test score', layout: 'grid',
          help: 'Pick the row matching your best score on any of the three scales.',
          options: gmatOptions
        },
        {
          id: 'undergrad', type: 'radio', label: 'Undergraduate university',
          options: [
            { id: 'ug_harvard', label: 'Harvard', pts: 8 },
            { id: 'ug_prestigious', label: 'A very prestigious university', pts: 7 },
            { id: 'ug_top50', label: 'A top-50 school', pts: 5 },
            { id: 'ug_other', label: 'Other university', pts: 3 }
          ]
        },
        {
          id: 'masters', type: 'radio', label: "Master's degree", optional: true,
          options: [
            { id: 'ma_graduated', label: 'Graduated', pts: 0.5 },
            { id: 'ma_dist', label: 'With distinction (no distinction in BA)', pts: 1 },
            { id: 'ma_dist_ba', label: 'With distinction (and BA distinction)', pts: 1.5 },
            { id: 'ma_high', label: 'With high distinction (no distinction in BA)', pts: 2 },
            { id: 'ma_high_ba', label: 'With high distinction (and BA distinction)', pts: 2.5 }
          ]
        }
      ]
    },

    {
      id: 'application',
      title: 'Application quality',
      blurb: 'These three groups carry more weight than anything else in the model — ' +
        'over 30 points between them, against roughly 22 for a perfect GPA and GMAT.',
      groups: [
        {
          id: 'essays', type: 'radio', label: 'Essays',
          options: [
            { id: 'es_strong', label: 'Strong', pts: 10.5 },
            { id: 'es_medium', label: 'Medium', pts: 6.5 },
            { id: 'es_weak', label: 'Weak', pts: 1.5 }
          ]
        },
        {
          id: 'recs', type: 'radio', label: 'Recommendations',
          options: [
            { id: 'rc_strong', label: 'Strong', pts: 10 },
            { id: 'rc_medium', label: 'Medium', pts: 7.5 },
            { id: 'rc_weak', label: 'Weak', pts: 4 }
          ]
        },
        {
          id: 'resume', type: 'radio', label: 'Resume and application forms',
          options: [
            { id: 'rs_strong', label: 'Strong', pts: 10 },
            { id: 'rs_medium', label: 'Medium', pts: 8 },
            { id: 'rs_weak', label: 'Weak', pts: 4 }
          ]
        },
        {
          id: 'round', type: 'radio', label: 'Application round',
          help: 'An average across schools and years. Real round effects vary, and at ' +
            'some programmes they reverse.',
          options: [
            { id: 'rd_first', label: 'First round', pts: 4.5 },
            { id: 'rd_middle', label: 'Second round, or any round before the last', pts: 3.6 },
            { id: 'rd_last', label: 'Last round', pts: 2.2 }
          ]
        }
      ]
    },

    {
      id: 'employment',
      title: 'Employment history',
      blurb: 'Counted up to the point your programme starts.',
      groups: [
        {
          id: 'workExp', type: 'radio', label: 'Full-time work experience',
          options: [
            { id: 'we_0', label: '0 months', pts: 0 },
            { id: 'we_1_11', label: '1 – 11 months', pts: 2 },
            { id: 'we_12_23', label: '12 – 23 months', pts: 3 },
            { id: 'we_24_35', label: '24 – 35 months', pts: 4 },
            { id: 'we_36', label: '3 years or more', pts: 4.5 },
            { id: 'we_service_only', label: 'Only pre-BA mandatory military service', pts: -1 }
          ]
        },
        {
          id: 'officerRank', type: 'checkbox', label: 'Military rank',
          options: [{ id: 'mil_officer', label: 'I was a military officer', pts: 0.25 }]
        },
        {
          id: 'people', type: 'radio', label: 'People you manage',
          help: 'One selection only. Choose a "previously" option only if you do not ' +
            'currently manage anyone.',
          groupsOf: [
            { heading: 'Currently', tag: 'now' },
            { heading: 'Previously', tag: 'past' }
          ],
          options: [
            { id: 'pm_now_1_2', tag: 'now', label: '1 – 2 people', pts: 1 },
            { id: 'pm_now_3_4', tag: 'now', label: '3 – 4 people', pts: 1.5 },
            { id: 'pm_now_5', tag: 'now', label: '5 people', pts: 1.5 },
            { id: 'pm_now_6', tag: 'now', label: '6 people', pts: 2 },
            { id: 'pm_now_7_9', tag: 'now', label: '7 – 9 people', pts: 2 },
            { id: 'pm_now_10_19', tag: 'now', label: '10 – 19 people', pts: 2.5 },
            { id: 'pm_now_20_49', tag: 'now', label: '20 – 49 people', pts: 3 },
            { id: 'pm_now_50_100', tag: 'now', label: '50 – 100 people', pts: 3.5 },
            { id: 'pm_past_1_2', tag: 'past', label: '1 – 2 people', pts: 0 },
            { id: 'pm_past_3_4', tag: 'past', label: '3 – 4 people', pts: 0.5 },
            { id: 'pm_past_5', tag: 'past', label: '5 people', pts: 0.5 },
            { id: 'pm_past_6', tag: 'past', label: '6 people', pts: 0.75 },
            { id: 'pm_past_7_9', tag: 'past', label: '7 – 9 people', pts: 0.75 },
            { id: 'pm_past_10_19', tag: 'past', label: '10 – 19 people', pts: 1 },
            { id: 'pm_past_20_49', tag: 'past', label: '20 – 49 people', pts: 1.25 },
            { id: 'pm_past_50_100', tag: 'past', label: '50 – 100 people', pts: 1.5 }
          ]
        },
        {
          /* Applied to the management subtotal in this order: add, then divide. */
          id: 'peopleAdjust', type: 'checkbox', label: 'Management adjustments',
          options: [
            {
              id: 'pm_more_before', add: 0.5,
              label: 'I managed more people in the past than I do now',
              note: 'Only available once you have selected a "currently" option above.',
              requires: { group: 'people', tag: 'now' }
            },
            {
              id: 'pm_matrix', divide: 3,
              label: 'I manage in a matrix or project structure',
              note: 'Divides the management subtotal by three.'
            }
          ]
        },
        {
          id: 'employer', type: 'number', label: 'Employer prestige', min: 0, max: 4, step: 0.1,
          help: 'Search your employer below, or enter a value from 0 to 4 directly.',
          picker: 'companies',
          examples: {
            intro: 'Find the closest peer below and use the same number. Values marked † ' +
              'are my own calibration rather than the model’s published employer guidance, ' +
              'using the rule shown next to each band.',
            sections: [
              {
                heading: 'Value 4 — the ceiling', kind: 'list',
                items: ['McKinsey', 'Bain', 'BCG', 'Goldman Sachs', 'Google', 'Amazon',
                  'Apple', 'Meta', 'OpenAI †', 'Blackstone †', 'KKR †', 'Citadel †',
                  'Jane Street †']
              },
              {
                heading: 'Value 3', kind: 'list',
                items: ['Oliver Wyman †', 'Morgan Stanley', 'JPMorgan Chase', 'Lazard †',
                  'Rothschild & Co †', 'Evercore †', 'Centerview Partners †', 'BlackRock',
                  'The Carlyle Group †', 'Apollo Global Management †', 'EQT †',
                  'CVC Capital Partners †', 'Bridgewater Associates †', 'Point72 †',
                  'Two Sigma †', 'Stripe †', 'Microsoft', 'NVIDIA', 'Netflix †', 'Tesla †',
                  'Palantir †', 'Procter & Gamble', 'Nike', 'LVMH †',
                  'The Walt Disney Company']
              },
              {
                heading: 'Value 2', kind: 'list',
                items: ['Kearney', 'Roland Berger †', 'Strategy&', 'Monitor Deloitte †',
                  'L.E.K. Consulting', 'Accenture', 'Deloitte', 'ZS Associates', 'Barclays',
                  'Deutsche Bank', 'UBS', 'Mediobanca †', 'Vanguard †', 'PIMCO †',
                  'Man Group †', 'Visa †', 'Mastercard †', 'Nasdaq †', 'Adyen †', 'ASML †',
                  'SAP †', 'Salesforce', 'Spotify †', 'Uber †', 'Airbnb †', 'Booking.com †',
                  'IBM', 'Intel', 'Samsung', 'TSMC †', 'Unilever', 'Nestlé †', 'L’Oréal †',
                  'Coca-Cola', 'PepsiCo', 'AB InBev †', 'Diageo †', 'Red Bull †', 'Kering †',
                  'Chanel †', 'Hermès †', 'Estée Lauder †', 'Adidas †', 'Mercedes-Benz †',
                  'BMW †', 'Ferrari †', 'Airbus †', 'Siemens', 'Shell', 'Johnson & Johnson',
                  'Pfizer', 'Roche †', 'Novartis †', 'AstraZeneca †', 'World Bank', 'IMF',
                  'United Nations', 'European Central Bank †', 'European Commission †']
              },
              {
                heading: 'Value 1 (or 0.5)', kind: 'list',
                items: ['Booz Allen Hamilton', 'BearingPoint †', 'EY', 'KPMG',
                  'PwC (audit and advisory) †', 'Mercer', 'Alvarez & Marsal †',
                  'Bank of America', 'Citigroup', 'Jefferies', 'Houlihan Lokey †',
                  'BNP Paribas †', 'HSBC †', 'Société Générale †', 'Nomura †', 'Santander †',
                  'ING †', 'UniCredit †', 'Intesa Sanpaolo †', 'BBVA †', 'Commerzbank †',
                  'Fidelity Investments', 'Amundi †', 'Deutsche Börse †',
                  'London Stock Exchange Group †', 'Euronext †',
                  'Intercontinental Exchange (ICE) †', 'PayPal †', 'Revolut †', 'Klarna †',
                  'Oracle', 'Danone †', 'Mondelez †', 'Heineken †', 'Inditex (Zara) †',
                  'H&M †', 'IKEA †', 'Ferrero †', 'Volkswagen †', 'Stellantis †', 'Boeing †',
                  'Rolls-Royce †', 'Bosch †', 'ABB †', 'Schneider Electric †', 'BP †',
                  'TotalEnergies †', 'Eni †', 'Enel †', 'Iberdrola †', 'Bayer †', 'Sanofi †',
                  'GSK †', 'Warner Bros. Discovery †', 'Ogilvy †', 'WPP †',
                  'Publicis Groupe †', 'Omnicom †', 'Sky †', 'European Investment Bank †',
                  'OECD †', 'NATO †', 'a national central bank or ministry †',
                  'Médecins Sans Frontières / Red Cross †']
              }
            ],
            note: 'A few names — N26, Infosys, Tata Consultancy Services, Dentsu, Barilla — ' +
              'sit closer to 0.5 than 1; round up to 1 if you would rather not split hairs. ' +
              'Not listed, and clearly smaller or local? Enter 0 — that is not a penalty.'
          }
        },
        {
          id: 'service', type: 'radio', label: 'Government or military background', optional: true,
          options: [
            { id: 'sv_government', label: 'Current government career', pts: 1.25 },
            { id: 'sv_military', label: 'Current military career', pts: 0.5 },
            { id: 'sv_fighter_pilot', label: 'Military fighter pilot, now or previously', pts: 1.5 },
            { id: 'sv_pilot', label: 'Military pilot, now or previously', pts: 1 },
            { id: 'sv_special_forces', label: 'Special forces unit, now or previously', pts: 1 }
          ]
        },
        {
          id: 'promoContext', type: 'checkbox', label: 'Promotion context',
          options: [{
            id: 'pr_outside',
            label: 'My promotions were in neither my current nor my target industry',
            note: 'Applies a penalty that grows with the number of promotions.'
          }]
        },
        {
          id: 'promotions', type: 'radio', label: 'Past promotions', optional: true,
          help: 'A promotion means a more senior title than a previous role, within the same ' +
            'organisation or a comparable one. Military rank advancement counts.',
          groupsOf: [
            { heading: 'Within the same industry', tag: 'same' },
            { heading: 'Across different industries', tag: 'other' }
          ],
          options: [
            { id: 'pr_same_1', tag: 'same', label: '1 promotion', pts: 0.2, penalty: -0.1 },
            { id: 'pr_same_2', tag: 'same', label: '2 promotions', pts: 0.75, penalty: -0.2 },
            { id: 'pr_same_3', tag: 'same', label: '3 promotions', pts: 1.5, penalty: -0.6 },
            { id: 'pr_same_4', tag: 'same', label: '4 promotions', pts: 2, penalty: -1 },
            { id: 'pr_same_5', tag: 'same', label: '5 promotions', pts: 2.5, penalty: -1.2 },
            { id: 'pr_same_6', tag: 'same', label: '6 promotions', pts: 3, penalty: -1.5 },
            { id: 'pr_other_1', tag: 'other', label: '1 promotion', pts: 0, penalty: -0.1 },
            { id: 'pr_other_2', tag: 'other', label: '2 promotions', pts: 0.3, penalty: -0.2 },
            { id: 'pr_other_3', tag: 'other', label: '3 promotions', pts: 1, penalty: -0.6 },
            { id: 'pr_other_4', tag: 'other', label: '4 promotions', pts: 1.5, penalty: -1 },
            { id: 'pr_other_5', tag: 'other', label: '5 promotions', pts: 2, penalty: -1.2 },
            { id: 'pr_other_6', tag: 'other', label: '6 promotions', pts: 2.5, penalty: -1.5 }
          ]
        }
      ]
    },

    {
      id: 'other',
      title: 'Everything else',
      blurb: 'Awards, service, sport, student government and background factors.',
      groups: [
        {
          id: 'awards', type: 'radio', label: 'Awards and distinctions', optional: true,
          options: [
            { id: 'aw_major', label: 'Major award (e.g. a national prize)', pts: 1.2 },
            { id: 'aw_personal', label: 'Award such as distinguished employee or officer', pts: 0.7 },
            { id: 'aw_team_led', label: 'Award for a team I led', pts: 0.7 },
            { id: 'aw_team', label: 'Award for a team I was part of', pts: 0.2 }
          ]
        },
        {
          id: 'community', type: 'radio', label: 'Community service',
          help: 'Roughly: 30 hrs/yr over 3 years is Solid; 300 hrs/yr over 3 years, or ' +
            '30 hrs/yr over 6 years, is Strong. Under 50 hrs in the last year is Basic.',
          options: [
            { id: 'cs_none', label: 'None', pts: -1.5 },
            { id: 'cs_basic', label: 'Basic', pts: -0.5 },
            { id: 'cs_solid', label: 'Solid', pts: 0.5 },
            { id: 'cs_strong', label: 'Strong', pts: 1.7 }
          ]
        },
        {
          id: 'sport', type: 'radio', label: 'Sport', optional: true,
          options: [
            { id: 'sp_captain_semipro', label: 'Captain of a semi-professional team', pts: 0.75 },
            { id: 'sp_captain_pro', label: 'Captain of a professional team', pts: 1.25 },
            { id: 'sp_captain_pro_champ', label: 'Captain of a professional team, national champions', pts: 2 },
            { id: 'sp_captain_national', label: 'Captain of a national team', pts: 2 },
            { id: 'sp_player_pro', label: 'Player on a professional team', pts: 0.4 },
            { id: 'sp_player_champ', label: 'Player on a national or professional team, national champions', pts: 0.75 },
            { id: 'sp_individual_champ', label: 'National champion in an individual sport', pts: 2 }
          ]
        },
        {
          /* Each ticked adjustment multiplies the sport subtotal in turn. */
          id: 'sportAdjust', type: 'checkbox', label: 'Sport adjustments',
          options: [
            { id: 'sp_under18', multiply: 0.25, label: 'This was before I turned 18', note: 'Cuts the sport subtotal by 75%.' },
            { id: 'sp_minor_sport', multiply: 0.5, label: 'Not a top-5 sport in the school’s country', note: 'Halves the sport subtotal.' }
          ]
        },
        {
          id: 'studentLead', type: 'radio', label: 'Student government', optional: true,
          options: [
            { id: 'sl_head_large', label: 'Head of student government, large or established university', pts: 2.1 },
            { id: 'sl_head_small', label: 'Head of student government, smaller or newer university', pts: 1.5 },
            { id: 'sl_head_school', label: 'Head of school student government', pts: 1.2 },
            { id: 'sl_class_rep', label: 'Class representative', pts: 0.4 }
          ]
        },
        {
          id: 'extras', type: 'checkbox', label: 'Additional factors', optional: true,
          help: 'Two pairs of entries here are near-identical (1/2 and 7/8). Both are ' +
            'kept, because each adds points.',
          options: [
            { id: 'ex_family_business', label: 'Family business with 200+ employees, or a widely recognised family background', pts: 2 },
            { id: 'ex_family_business_b', label: 'Family business with 200+ employees, or a widely recognised family background', pts: 2, duplicate: true },
            { id: 'ex_parent_ceo', label: 'A parent is CEO of a company with 500+ employees', pts: 1 },
            { id: 'ex_raised_5m', label: 'I have raised $5M from investors', pts: 2 },
            { id: 'ex_founder_early', label: 'Founded an early-stage startup', pts: 0.15 },
            { id: 'ex_founder_5', label: 'Founded a company with 5+ employees', pts: 0.3 },
            { id: 'ex_biotech', label: 'Work experience in biotech, biomedical engineering, bioinformatics or nanotech', pts: 0.7 },
            { id: 'ex_biotech_b', label: 'Work experience in biotech, biomedical engineering, bioinformatics or nanotech', pts: 0.7, duplicate: true },
            { id: 'ex_vc_pe', label: 'Work experience in venture capital, private equity or hedge funds', pts: 0.7 },
            { id: 'ex_family_industry', label: 'Family business in one of the industries above', pts: 2 },
            { id: 'ex_phd', label: 'PhD in science or engineering', pts: 2.5 }
          ]
        },
        {
          id: 'origin', type: 'radio', label: 'Applicant origin and destination',
          options: [
            { id: 'or_na_to_eu', label: 'North American applying to a European programme', pts: 1.5 },
            { id: 'or_na_to_us', label: 'North American applying to a US programme', pts: 0.5 },
            { id: 'or_eu_to_us', label: 'European applying to a US programme', pts: 1 },
            { id: 'or_eu_to_eu', label: 'European applying to a European programme', pts: 0.5 },
            { id: 'or_india', label: 'Applicant from India', pts: -1 },
            { id: 'or_asia', label: 'Applicant from Asia', pts: 0 },
            { id: 'or_africa', label: 'Applicant from Africa', pts: 0 },
            { id: 'or_middle_east', label: 'Applicant from the Middle East', pts: 0 }
          ]
        }
      ]
    },

    {
      id: 'schoolspecific',
      title: 'School-specific',
      blurb: 'These only affect the individually modelled schools, and are ignored ' +
        'for everything scored off the general table.',
      groups: [
        {
          id: 'columbiaTech', type: 'checkbox', label: 'Columbia',
          options: [{ id: 'co_tech', label: 'My background is strictly high tech, excluding finance-related tech' }]
        },
        {
          id: 'columbiaFounder', type: 'radio', label: 'Columbia — founder status', optional: true,
          options: [
            { id: 'co_founder_some', label: 'Founded a company with some progress but no particular success', pts: 0.15 },
            { id: 'co_founder_5', label: 'Founded a company that now employs 5 people', pts: 0.2 }
          ]
        },
        {
          id: 'harvardIndustry', type: 'radio', label: 'Harvard — current industry', optional: true,
          options: [
            { id: 'hb_bio', label: 'Biotech / biomedical engineering / bioinformatics', pts: 0.5 },
            { id: 'hb_nano', label: 'Nanotechnology', pts: 0.5 },
            { id: 'hb_clean', label: 'Clean technology', pts: 0.5 }
          ]
        },
        {
          id: 'mitFounder', type: 'radio', label: 'MIT — founder status', optional: true,
          options: [
            { id: 'mit_founder_some', label: 'Founded a company with some progress but no particular success', pts: 0.15 },
            { id: 'mit_founder_5', label: 'Founded a company that now employs 5 people', pts: 0.35 }
          ]
        },
        {
          id: 'nyuEngineer', type: 'checkbox', label: 'NYU Stern',
          options: [{ id: 'ny_engineer', label: 'My background is primarily engineering, excluding finance-related engineering' }]
        }
      ]
    }
  ];

  /* ----------------------------------------------------------------------- */
  /* Base score                                                               */
  /* ----------------------------------------------------------------------- */

  /* The lines of the base score, in order. Each becomes a row of the breakdown
   * on the results page; a line worth nothing is left out.
   *   group      points of the chosen option (or its `field`)
   *   joint      the GPA × test score table
   *   ticks      sum of the ticked options in a checkbox group
   *   number     a numeric answer
   *   adjustedBy a checkbox group whose ticked options add / divide / multiply
   *   ifTicked   the line only counts when this option is ticked */
  var TOTAL = [
    { label: 'Age', group: 'age' },
    { label: 'Gender', group: 'gender' },
    { label: 'GPA and test score combined', joint: true },
    { label: 'Undergraduate university', group: 'undergrad' },
    { label: "Master's degree", group: 'masters' },
    { label: 'Essays', group: 'essays' },
    { label: 'Recommendations', group: 'recs' },
    { label: 'Resume and forms', group: 'resume' },
    { label: 'Work experience', group: 'workExp' },
    { label: 'Military officer', ticks: 'officerRank' },
    { label: 'People management', group: 'people', adjustedBy: 'peopleAdjust' },
    { label: 'Employer prestige', number: 'employer' },
    { label: 'Government or military background', group: 'service' },
    { label: 'Promotions', group: 'promotions' },
    { label: 'Promotions outside target industry', group: 'promotions', field: 'penalty', ifTicked: 'pr_outside' },
    { label: 'Awards', group: 'awards' },
    { label: 'Community service', group: 'community' },
    { label: 'Sport', group: 'sport', adjustedBy: 'sportAdjust' },
    { label: 'Student government', group: 'studentLead' },
    { label: 'Additional factors', ticks: 'extras' },
    { label: 'Origin and destination', group: 'origin' },
    { label: 'Application round', group: 'round' }
  ];

  /* ----------------------------------------------------------------------- */
  /* Schools                                                                  */
  /* ----------------------------------------------------------------------- */

  /* Scored off the base total. Verdict comes from (score - points). */
  var GENERAL_SCHOOLS = [
    { name: 'Chicago Booth', points: 73, region: 'USA' },
    { name: 'Kellogg', points: 72, region: 'USA' },
    { name: 'INSEAD', points: 70, region: 'France / Singapore' },
    { name: 'Berkeley Haas', points: 69, region: 'USA' },
    { name: 'Tuck', points: 68, region: 'USA' },
    { name: 'London Business School', points: 68, region: 'UK' },
    { name: 'Michigan Ross', points: 67, region: 'USA' },
    { name: 'Duke Fuqua', points: 66, region: 'USA' },
    { name: 'Cambridge Judge', points: 66, region: 'UK' },
    { name: 'Oxford Saïd', points: 65, region: 'UK' },
    { name: 'UCLA Anderson', points: 65, region: 'USA' },
    { name: 'Darden', points: 65, region: 'USA' },
    { name: 'Cornell Johnson', points: 65, region: 'USA' },
    { name: 'Carnegie Mellon Tepper', points: 63, region: 'USA' },
    { name: 'IESE', points: 63, region: 'Spain' },
    { name: 'Toronto Rotman', points: 63, region: 'Canada' },
    { name: 'UNC Kenan-Flagler', points: 62, region: 'USA' },
    { name: 'USC Marshall', points: 62, region: 'USA' },
    { name: 'UT Austin McCombs', points: 62, region: 'USA' },
    { name: 'Emory Goizueta', points: 62, region: 'USA' },
    { name: 'Georgetown McDonough', points: 62, region: 'USA' },
    { name: 'HEC Paris', points: 61, region: 'France' },
    { name: 'ESADE', points: 61, region: 'Spain' },
    { name: 'IE Business School', points: 61, region: 'Spain' },
    { name: 'Ivey', points: 61, region: 'Canada' },
    { name: 'McGill Desautels', points: 61, region: 'Canada' },
    { name: 'Schulich', points: 61, region: 'Canada' },
    { name: 'Babson', points: 61, region: 'USA' },
    { name: 'SDA Bocconi', points: 61, region: 'Italy' },
    { name: 'WashU Olin', points: 61, region: 'USA' }
  ];

  /* Gap between your score and a school's points, mapped to a verdict. */
  var GAP_LEGEND = [
    { max: -7, label: 'Stretch', tone: 'low', detail: 'Candidates with this profile are rarely admitted. Roughly 10%.' },
    { max: -5, label: 'Closer to Stretch than Competitive', tone: 'low' },
    { max: -4, label: 'Between Competitive and Stretch', tone: 'mid' },
    { max: -3, label: 'Closer to Competitive than Stretch', tone: 'mid' },
    { max: -1, label: 'Competitive', tone: 'mid', detail: 'The committee will hesitate. Roughly 50%, and heavily influenced by who else applies in your round.' },
    { max: 0, label: 'Competitive, with scholarship potential', tone: 'good' },
    { max: 1, label: 'Competitive to Strong, with scholarship potential', tone: 'good' },
    { max: Infinity, label: 'Strong, with scholarship potential', tone: 'high', detail: 'Good chance of admission, possibly with a significant scholarship. Roughly 75–80%.' }
  ];

  /* Individually modelled schools, each with its own Stretch / Competitive /
   * Strong thresholds and its own adjustments to the base total, applied in
   * order. An adjustment is worth:
   *   delta             a fixed amount, when its conditions hold
   *   answer (+ table)  the chosen option's points, or its entry in `table`
   * and its conditions are:
   *   test              one of the test-score checks fires
   *   ticked            an option is ticked
   *   unlessTicked      an option is not ticked */
  var ADJUSTED_SCHOOLS = [
    {
      id: 'Columbia', name: 'Columbia', region: 'USA', stretch: 64, competitive: 70, strong: 74,
      adjust: [
        { label: 'High-tech background', ticked: 'co_tech', delta: -0.5 },
        { label: 'Founder status', answer: 'columbiaFounder' },
        { label: 'High test score', test: 'high', delta: 0.5 },
        { label: 'Low test score', test: 'low', delta: -0.5 }
      ]
    },
    {
      /* Starts below the base total, then rebuilds management and promotions
       * on its own scale. */
      id: 'Harvard', name: 'Harvard', region: 'USA', stretch: 67, competitive: 73, strong: 77,
      adjust: [
        { label: 'Base adjustment', delta: -4.9 },
        {
          label: 'Management', answer: 'people', unlessTicked: 'pm_matrix',
          table: {
            pm_now_3_4: 0.5, pm_now_5: 0.9, pm_now_6: 0.9, pm_now_7_9: 1.25,
            pm_now_10_19: 1.5, pm_now_20_49: 2,
            pm_past_5: 0.1, pm_past_6: 0.1, pm_past_7_9: 0.25, pm_past_10_19: 0.5,
            pm_past_20_49: 1
          }
        },
        {
          label: 'Promotions', answer: 'promotions',
          table: {
            pr_same_3: 0.5, pr_other_3: 0.5, pr_same_4: 1.25, pr_other_4: 1.25,
            pr_same_5: 1.75, pr_other_5: 1.75, pr_same_6: 1.75, pr_other_6: 1.75
          }
        },
        { label: 'Industry', answer: 'harvardIndustry' },
        {
          label: 'Age', answer: 'age',
          table: { ag_under28: 2.4, ag_28_29: 1.4, ag_30: 0.5, ag_31: 0.5, ag_32: 0.2, ag_33: 0.2 }
        }
      ]
    },
    {
      /* Rewards being older rather than younger. */
      id: 'IMD', name: 'IMD', region: 'Switzerland', stretch: 63, competitive: 69, strong: 73,
      adjust: [
        {
          label: 'Age', answer: 'age',
          table: { ag_30: 2, ag_31: 2, ag_32: 2, ag_33: 4, ag_34_35: 4, ag_over35: 3 }
        }
      ]
    },
    {
      id: 'MIT', name: 'MIT Sloan', region: 'USA', stretch: 63, competitive: 69, strong: 73,
      adjust: [
        { label: 'Founder status', answer: 'mitFounder' }
      ]
    },
    {
      /* The only school where applying in round one costs you points. */
      id: 'NYU', name: 'NYU Stern', region: 'USA', stretch: 59, competitive: 65, strong: 69,
      adjust: [
        { label: 'High test score', test: 'nyuHigh', delta: 1 },
        { label: 'Low test score', test: 'low', delta: -0.5 },
        { label: 'Engineering background', ticked: 'ny_engineer', delta: -0.5 },
        { label: 'First round', answer: 'round', table: { rd_first: -0.5 } }
      ]
    },
    {
      id: 'Stanford', name: 'Stanford GSB', region: 'USA', stretch: 67, competitive: 73, strong: 77,
      adjust: [
        { label: 'High test score', test: 'high', delta: 0.5 },
        { label: 'Low test score', test: 'low', delta: -0.5 }
      ]
    },
    {
      /* Re-weights community service more sharply than the base. */
      id: 'Wharton', name: 'Wharton', region: 'USA', stretch: 65, competitive: 72, strong: 75,
      adjust: [
        {
          label: 'Community service', answer: 'community',
          table: { cs_none: -1, cs_basic: -0.5, cs_solid: 0.5, cs_strong: 1 }
        }
      ]
    },
    {
      id: 'Yale', name: 'Yale SOM', region: 'USA', stretch: 62, competitive: 68, strong: 72,
      adjust: [
        { label: 'Low test score', test: 'low', delta: -0.5 }
      ]
    }
  ];

  return {
    conversion: CONVERSION,
    gpaBands: GPA_BANDS,
    gpaGmatRows: GPA_GMAT_ROWS,
    gmatTests: GMAT_TESTS,
    steps: STEPS,
    total: TOTAL,
    generalSchools: GENERAL_SCHOOLS,
    gapLegend: GAP_LEGEND,
    adjustedSchools: ADJUSTED_SCHOOLS
  };
}());

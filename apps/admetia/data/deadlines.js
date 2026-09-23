/* ---------------------------------------------------------------------------
 * Application calendar: the official admissions page for every programme the
 * calculators score, and — where it could be confirmed — the round deadlines
 * for the 2026–27 application cycle (entry in 2027).
 *
 * Read 23 September 2026. Dates change from cycle to cycle and are sometimes
 * moved within one, so the results page always shows the official link beside
 * a countdown and says when these dates were read. A programme without
 * `rounds` has no countdown on purpose: either the school had not published
 * dates for this cycle yet, or its page could not be read at source, and a
 * guessed deadline is worse than none.
 *
 * Keys: master's and computing programmes by their model id; MBA schools by
 * 'mba:' plus the name the MBA model uses.
 *
 *   rounds   [label, 'YYYY-MM-DD'] in date order; a deadline is taken to close
 *            at the end of that day, local time
 *   rolling  true where the programme admits on a rolling basis — no countdown,
 *            but a reminder that earlier is better
 *   note     anything the dates alone would mislead about
 *   checked  'YYYY-MM-DD' — when this one entry was last read, if it was
 *            re-read on its own. Without it an entry counts as read on the
 *            file's own `checked` date at the bottom.
 *   src      OFF  = read from the school's own page
 *            OFF2 = the school's own wording, reached through a search summary
 *            TP   = a third-party deadline list (mbaMission, Clear Admit and
 *                   others), spot-checked against official pages where they
 *                   could be read; Harvard, Stanford GSB, INSEAD, Rotman and
 *                   Georgetown all matched
 *
 * Keeping it fresh (every three or four months):
 *   - re-read every school's page, fix the rounds, and set `checked` at the
 *     bottom of this file to the day you finished;
 *   - if you only re-read some schools, give each of them its own `checked`
 *     instead, e.g. r(url, 'OFF', rounds, { checked: '2027-01-10' }).
 * Every programme shows "Checked <date>" beside its deadline. Once the oldest
 * date here is more than 120 days old (STALE_DAYS in js/results-kit.js),
 * every results page carries a warning telling the developer to get moving.
 * ------------------------------------------------------------------------- */

window.ADMISSIONS_CALENDAR = (function () {
  'use strict';

  function r(url, src, rounds, extra) {
    var e = { url: url, src: src, rounds: rounds || null };
    if (extra) Object.keys(extra).forEach(function (k) { e[k] = extra[k]; });
    return e;
  }
  function link(url, extra) {
    var e = { url: url, src: null, rounds: null };
    if (extra) Object.keys(extra).forEach(function (k) { e[k] = extra[k]; });
    return e;
  }

  var S = {

    /* ------------------------------------------------------------ MBA --- */
    'mba:Harvard': r('https://www.hbs.edu/mba/admissions/application-dates', 'OFF',
      [['Round 1', '2026-09-09'], ['Round 2', '2027-01-05']],
      { note: 'Applications after Round 2 are not reviewed for the Class of 2029.' }),
    'mba:Stanford GSB': r('https://www.gsb.stanford.edu/programs/mba/admission/deadlines', 'OFF',
      [['Round 1', '2026-09-09'], ['Round 2', '2027-01-06'], ['Round 3', '2027-04-07']]),
    'mba:Wharton': r('https://mba.wharton.upenn.edu/admissions/', 'TP',
      [['Round 1', '2026-09-08'], ['Round 2', '2027-01-05'], ['Round 3', '2027-03-31']]),
    'mba:Columbia': r('https://business.columbia.edu/mba/admissions', 'TP',
      [['Round 1', '2026-09-09'], ['Round 2', '2027-01-05'], ['Round 3', '2027-03-29']]),
    'mba:MIT Sloan': r('https://mitsloan.mit.edu/mba/admissions', 'TP',
      [['Round 1', '2026-09-29'], ['Round 2', '2027-01-12']]),
    'mba:NYU Stern': r('https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions', 'TP',
      [['Round 1', '2026-09-15'], ['Round 1b', '2026-10-15'], ['Round 2', '2027-01-15'], ['Round 3', '2027-04-15']]),
    'mba:Yale SOM': r('https://som.yale.edu/programs/mba/admissions', 'TP',
      [['Round 1', '2026-09-15'], ['Round 2', '2027-01-06'], ['Round 3', '2027-04-07']]),
    'mba:IMD': link('https://www.imd.org/mba/'),
    'mba:Chicago Booth': r('https://www.chicagobooth.edu/mba/full-time/admissions', 'TP',
      [['Round 1', '2026-09-15'], ['Round 2', '2027-01-07'], ['Round 3', '2027-04-01']]),
    'mba:Kellogg': r('https://www.kellogg.northwestern.edu/programs/full-time-mba/admissions/', 'TP',
      [['Round 1', '2026-09-09'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-31']]),
    'mba:INSEAD': r('https://www.insead.edu/master-programmes/master-business-administration/admissions', 'OFF',
      [['Round 1', '2026-09-15'], ['Round 2', '2026-11-03'], ['Round 3', '2027-01-19'], ['Round 4', '2027-03-09']],
      { note: 'For the August 2027 intake. The January 2027 intake closed in August.' }),
    'mba:Berkeley Haas': r('https://mba.haas.berkeley.edu/admissions', 'TP',
      [['Round 1', '2026-09-10'], ['Round 2', '2027-01-07'], ['Round 3', '2027-04-01']]),
    'mba:Tuck': r('https://www.tuck.dartmouth.edu/admissions', 'TP',
      [['Round 1', '2026-09-24'], ['Round 2', '2027-01-05'], ['Round 3', '2027-03-24']]),
    'mba:London Business School': r('https://www.london.edu/masters-degrees/mba/apply', 'TP',
      [['Round 1', '2026-09-03'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-22']]),
    'mba:Michigan Ross': r('https://michiganross.umich.edu/graduate/full-time-mba/admissions', 'TP',
      [['Round 1', '2026-09-08'], ['Round 2', '2027-01-04'], ['Round 3', '2027-03-29']]),
    'mba:Duke Fuqua': r('https://www.fuqua.duke.edu/programs/daytime-mba/admissions-facts-dates', 'TP',
      [['Early decision', '2026-09-02'], ['Round 1', '2026-09-30'], ['Round 2', '2027-01-05'], ['Round 3', '2027-03-25']]),
    'mba:Cambridge Judge': r('https://www.jbs.cam.ac.uk/programmes/mba/', 'TP',
      [['Round 1', '2026-08-24'], ['Round 2', '2026-10-05'], ['Round 3', '2027-01-04'], ['Round 4', '2027-03-22']]),
    'mba:Oxford Saïd': r('https://www.sbs.ox.ac.uk/programmes/degrees/mba', 'TP',
      [['Stage 1', '2026-09-02'], ['Stage 2', '2026-10-05'], ['Stage 3', '2026-11-04'], ['Stage 4', '2027-01-06']]),
    'mba:UCLA Anderson': r('https://www.anderson.ucla.edu/degrees/full-time-mba/admissions', 'TP',
      [['Round 1', '2026-10-01'], ['Round 2', '2027-01-06'], ['Round 3', '2027-04-07']]),
    'mba:Darden': r('https://www.darden.virginia.edu/mba/admissions', 'TP',
      [['Early decision', '2026-09-09'], ['Round 1', '2026-10-07'], ['Round 2', '2027-01-07'], ['Round 3', '2027-03-01']]),
    'mba:Cornell Johnson': r('https://business.cornell.edu/programs/mba/', 'TP',
      [['Round 1', '2026-09-17'], ['Round 2', '2027-01-05'], ['Round 3', '2027-04-06']]),
    'mba:Carnegie Mellon Tepper': r('https://www.cmu.edu/tepper/programs/mba/admissions/', 'TP',
      [['Round 1', '2026-09-30'], ['Round 2', '2027-01-08'], ['Round 3', '2027-03-03'], ['Round 4', '2027-05-05']]),
    'mba:IESE': r('https://www.iese.edu/mba/admissions-fees/', 'TP',
      [['Round 1', '2026-09-23'], ['Round 2', '2027-01-07'], ['Round 3', '2027-03-09'], ['Round 4', '2027-05-06']]),
    'mba:Toronto Rotman': r('https://www.rotman.utoronto.ca/programs/mba-programs/full-time-mba/admissions/', 'OFF2',
      [['Round 1', '2026-09-16'], ['Round 2', '2026-11-11'], ['Round 3', '2027-01-13'], ['Round 4', '2027-03-10'], ['Final round', '2027-05-05']]),
    'mba:UNC Kenan-Flagler': r('https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/', 'TP',
      [['Round 1', '2026-09-30'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-03'], ['Round 4', '2027-04-21']]),
    'mba:USC Marshall': r('https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba', 'TP',
      [['Round 1', '2026-10-15'], ['Round 2', '2027-01-15'], ['Round 3', '2027-03-01'], ['Round 4', '2027-04-15']]),
    'mba:UT Austin McCombs': r('https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/', 'TP',
      [['Round 1', '2026-10-15'], ['Round 2', '2027-01-15'], ['Round 3', '2027-04-01']]),
    'mba:Emory Goizueta': r('https://goizueta.emory.edu/mba/apply', 'TP',
      [['Round 1', '2026-09-30'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-17']]),
    'mba:Georgetown McDonough': r('https://msb.georgetown.edu/full-time-mba/admissions-tuition/', 'OFF2',
      [['Early action', '2026-09-09'], ['Round 1', '2026-10-01'], ['Round 2', '2027-01-06'], ['Round 3', '2027-04-01'], ['Round 4', '2027-05-17']]),
    'mba:HEC Paris': r('https://www.hec.edu/en/mba-executive-mba/mba/admissions/application-deadlines', 'TP',
      [['Round 1', '2026-09-20'], ['Round 2', '2026-10-18'], ['Round 3', '2026-11-15'], ['Round 4', '2027-01-11']],
      { note: 'For the September 2027 intake; the January intake runs on its own rounds.' }),
    'mba:ESADE': r('https://www.esade.edu/en/programmes/mba/full-time', 'TP',
      [['Round 1', '2026-10-01'], ['Round 2', '2026-11-19'], ['Round 3', '2027-01-14']]),
    'mba:IE Business School': r('https://www.ie.edu/business-school/programs/full-time/international-mba/admissions-fees/', 'OFF2',
      null, { rolling: true }),
    'mba:Ivey': link('https://www.ivey.uwo.ca/mba/admissions/'),
    'mba:McGill Desautels': r('https://www.mcgill.ca/desautels/programs/mba', 'TP',
      [['Round 1', '2026-11-15'], ['Round 2', '2027-01-15'], ['Round 3', '2027-03-15']]),
    'mba:Schulich': link('https://schulich.yorku.ca/programs/mba/'),
    'mba:Babson': r('https://www.babson.edu/graduate/admissions/how-to-apply/deadlines/', 'OFF2',
      [['Next deadline', '2026-10-21']],
      { note: 'Only the next deadline was confirmed; later rounds are on Babson’s page.' }),
    'mba:SDA Bocconi': r('https://www.sdabocconi.it/en/mba-executive-mba/full-time-mba/admissions/', 'OFF2',
      null, { rolling: true, note: 'Applications are reviewed from September 2026 to July 2027.' }),
    'mba:WashU Olin': r('https://olin.washu.edu/programs/mbas/full-time-mba/apply.php', 'TP',
      [['Round 1', '2026-10-08'], ['Round 2', '2027-01-07'], ['Round 3', '2027-02-25']]),

    /* ------------------------------------------------------- Master's --- */
    'hec-mim': r('https://www.hec.edu/en/master-s-programs/master-management/admissions', 'OFF',
      [['Round 1', '2026-10-07'], ['Round 2', '2026-11-26'], ['Round 3', '2027-02-17'], ['Round 4', '2027-04-28']],
      { note: 'Applying directly to HEC. The Join a School in France route runs on different dates.' }),
    'insead-mim': r('https://www.insead.edu/master-programmes/master-management/admissions', 'OFF',
      [['Round 1', '2026-10-06'], ['Round 2', '2026-12-08'], ['Round 3', '2027-02-23'], ['Round 4', '2027-04-27']]),
    'lbs-mim': link('https://www.london.edu/masters-degrees/masters-in-management/apply'),
    'lse-mim': r('https://www.lse.ac.uk/study-at-lse/graduate/masters-in-management', 'OFF2',
      null, { rolling: true, note: 'Closes when full; funding has its own, earlier deadline.' }),
    'essec-mim': link('https://www.essec.edu/en/program/business-school/master-management-grande-ecole/admission/'),
    'escp-mim': link('https://escp.eu/programmes/master-in-management/apply'),
    'bocconi-mgmt': r('https://www.unibocconi.it/en/applying-bocconi/master-science-and-ma-programs/timeline', 'OFF',
      [['Round I', '2026-10-29'], ['Round II', '2027-01-20'], ['Round III', '2027-03-11'], ['Round IV', '2027-04-29']]),
    'bocconi-im': r('https://www.unibocconi.it/en/applying-bocconi/master-science-and-ma-programs/timeline', 'OFF',
      [['Round I', '2026-10-29'], ['Round II', '2027-01-20'], ['Round III', '2027-03-11'], ['Round IV', '2027-04-29']]),
    'rsm-mim': r('https://www.rsm.nl/education/master/msc-programmes/mscba-master-in-management/', 'OFF2',
      [['Applications close', '2027-05-15']],
      { note: 'Or sooner: the programme closes at 300 applications, historically months early.' }),
    'imperial-mgmt': r('https://www.imperial.ac.uk/business-school/programmes/msc-management/admissions/key-dates-and-deadlines/', 'OFF',
      [['Round 1', '2026-09-29'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-10'], ['Round 4', '2027-04-28']]),
    'warwick-mgmt': link('https://www.wbs.ac.uk/courses/masters/management/'),
    'manchester-mgmt': link('https://www.alliancembs.manchester.ac.uk/study/masters/msc-management/'),
    'wu-simc': link('https://www.wu.ac.at/en/programs/masters-programs/strategy-innovation-and-management-control'),
    'cbs-mgmt': link('https://www.cbs.dk/en/study-programmes/master-programmes'),
    'nova-imm': link('https://www.novasbe.unl.pt/en/programs/apply/masters/admission'),
    'ie-mim': link('https://www.ie.edu/business-school/programs/masters/master-in-management/'),
    'iese-mim': r('https://www.iese.edu/master-in-management/admissions-fees/', 'OFF2',
      null, { rolling: true, note: 'One round a month, with a decision four to six weeks after a complete file.' }),
    'stgallen-sim': r('https://www.unisg.ch/en/studying/admission/admission-master/strategy-and-international-management/', 'OFF2',
      [['Round 1', '2026-11-04'], ['Round 2', '2027-01-31'], ['Round 3', '2027-03-31'], ['Round 4', '2027-04-30']],
      { note: 'St. Gallen states these as recurring dates rather than for one cycle.' }),
    'duke-mms': r('https://www.fuqua.duke.edu/programs/mms-foundations-of-business/admissions-facts-dates', 'OFF',
      [['Round 1', '2026-10-07'], ['Round 2', '2027-01-13'], ['Round 3', '2027-03-04'], ['Round 4', '2027-04-13']],
      { note: 'International applicants should aim for the earlier rounds, for visa time.' }),
    'ross-mm': link('https://michiganross.umich.edu/graduate/master-of-management/admissions'),
    'lbs-mfa': link('https://www.london.edu/masters-degrees/masters-in-financial-analysis/apply'),
    'oxford-mfe': link('https://www.sbs.ox.ac.uk/programmes/degrees/msc-financial-economics'),
    'imperial-fin': r('https://www.imperial.ac.uk/business-school/programmes/msc-finance/admissions/key-dates-and-deadlines/', 'OFF',
      [['Round 1', '2026-09-29'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-10'], ['Round 4', '2027-04-28']]),
    'lse-fin': r('https://www.lse.ac.uk/study-at-lse/graduate/msc-finance-full-time', 'OFF2',
      null, { rolling: true, note: 'Closes when full; funding has its own, earlier deadline.' }),
    'sse-fin': r('https://www.hhs.se/en/education/msc/mfin/mfin-admission/', 'OFF2',
      [['Early deadline', '2026-11-15'], ['Final deadline', '2027-01-15']],
      { note: 'A test score must be taken before whichever deadline you use.' }),
    'bocconi-fin': r('https://www.unibocconi.it/en/applying-bocconi/master-science-and-ma-programs/timeline', 'OFF',
      [['Round I', '2026-10-29'], ['Round II', '2027-01-20'], ['Round III', '2027-03-11'], ['Round IV', '2027-04-29']]),
    'hec-mif': link('https://www.hec.edu/en/all-masters-admissions'),
    'esade-fin': link('https://www.esade.edu/en/programmes/masters/finance'),
    'nova-imf': link('https://www.novasbe.unl.pt/en/programs/masters/international-masters-in-finance/overview'),
    'warwick-fin': link('https://www.wbs.ac.uk/courses/masters/finance/'),
    'manchester-fin': link('https://www.alliancembs.manchester.ac.uk/study/masters/msc-finance/'),
    'mit-mfin': r('https://mitsloan.mit.edu/mfin/admissions', 'OFF2',
      [['Deadline', '2027-01-05']]),
    'princeton-mfin': r('https://bcf.princeton.edu/academic-programs/master-in-finance/apply-for-the-master-in-finance-program/', 'OFF2',
      [['Deadline', '2026-12-15']]),
    'berkeley-mfe': link('https://mfe.haas.berkeley.edu/admissions'),
    'washu-msf': link('https://olin.washu.edu/programs/specialized-masters/ms-in-finance/index.php'),
    'vanderbilt-msf': r('https://business.vanderbilt.edu/masters-in-finance/admissions/', 'OFF',
      [['Round 1', '2026-09-10'], ['Round 2', '2026-10-29'], ['Round 3', '2027-01-13'], ['Round 4', '2027-02-24'], ['Round 5', '2027-04-28']],
      { note: 'International applicants: final date 5 April 2027.' }),
    'bocconi-mkt': r('https://www.unibocconi.it/en/applying-bocconi/master-science-and-ma-programs/timeline', 'OFF',
      [['Round I', '2026-10-29'], ['Round II', '2027-01-20'], ['Round III', '2027-03-11'], ['Round IV', '2027-04-29']]),
    'esade-mkt': link('https://www.esade.edu/en/programmes/masters/marketing-management'),
    'imperial-mkt': r('https://www.imperial.ac.uk/business-school/programmes/msc-strategic-marketing/admissions/key-dates-and-deadlines/', 'OFF',
      [['Round 1', '2026-09-29'], ['Round 2', '2027-01-06'], ['Round 3', '2027-03-10'], ['Round 4', '2027-04-28']]),
    'warwick-mkt': link('https://www.wbs.ac.uk/courses/masters/marketing-and-strategy/'),
    'manchester-mkt': link('https://www.alliancembs.manchester.ac.uk/study/masters/msc-marketing/'),
    'rsm-mkt': link('https://www.rsm.nl/education/master/msc-programmes/msc-marketing-management/'),
    'essec-mkt': link('https://www.essec.edu/en/program/business-school/master-management-grande-ecole/admission/'),

    /* ------------------------------------------------------ Computing --- */
    'oxford-acs': r('https://www.ox.ac.uk/admissions/graduate/courses/msc-advanced-computer-science', null,
      null, { note: 'Oxford had not yet announced the date; its computing deadlines usually fall in January.' }),
    'cambridge-acs': r('https://www.cst.cam.ac.uk/admissions/acs', 'OFF2',
      [['Funding deadline', '2026-12-02'], ['Applications close', '2027-02-25']],
      { note: 'Places are limited and early application is encouraged.' }),
    'imperial-advcomp': r('https://www.imperial.ac.uk/study/courses/postgraduate-taught/advanced-computing/', 'OFF',
      [['Round 2', '2027-01-06'], ['Round 3', '2027-03-10'], ['Round 4', '2027-04-28']],
      { note: 'Later rounds are not guaranteed to stay open.' }),
    'imperial-aiml': r('https://www.imperial.ac.uk/study/courses/postgraduate-taught/computing-artificial-intelligence-msc/', 'OFF2',
      [['Round 2', '2027-01-06'], ['Round 3', '2027-03-10'], ['Round 4', '2027-04-28']],
      { note: 'The Department of Computing’s rounds, read on two of its other MSc pages.' }),
    'ucl-dsml': link('https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/data-science-machine-learning-msc'),
    'edinburgh-ai': r('https://study.ed.ac.uk/programmes/postgraduate-taught/107-artificial-intelligence', 'OFF2',
      [['Deadline', '2027-03-31']],
      { note: 'Most files are held and decided together after the deadline.' }),
    'edinburgh-informatics': r('https://informatics.ed.ac.uk/study-with-us/our-degrees/postgraduate-taught', 'OFF2',
      [['Deadline', '2027-03-31']]),
    'kcl-ai': link('https://www.kcl.ac.uk/study/postgraduate-taught/courses/artificial-intelligence-msc'),
    'warwick-cs': link('https://warwick.ac.uk/study/postgraduate/courses/msc-computer-science/'),
    'manchester-acs': link('https://www.manchester.ac.uk/study/masters/courses/list/21573/msc-advanced-computer-science/'),
    'southampton-ai': link('https://www.southampton.ac.uk/courses/artificial-intelligence-masters-msc'),
    'eth-cs': r('https://ethz.ch/en/studies/master/application/dates.html', 'OFF',
      [['Application window closes', '2026-11-30']],
      { note: 'The only window for a bachelor’s from outside Switzerland (noon CET).' }),
    'epfl-cs': r('https://www.epfl.ch/education/admission/admission-2/master-admission-criteria-application/', 'OFF2',
      [['First deadline', '2026-12-15'], ['Second deadline', '2027-03-31']]),
    'tudelft-cs': r('https://www.tudelft.nl/en/education/programmes/masters/cs/msc-computer-science/admission-and-application', 'OFF2',
      [['Non-EU/EFTA deadline', '2027-01-15']],
      { note: 'EU/EFTA applicants have a later deadline.' }),
    'tum-informatics': r('https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/', 'OFF2',
      [['Deadline', '2027-05-31']],
      { note: 'Applicants who need a visa are advised to apply by 31 March.' }),
    'kth-ml': r('https://www.kth.se/en/studies/master/machine-learning/', 'OFF2',
      [['Deadline', '2027-01-15']],
      { note: 'Through University Admissions in Sweden; the fee is due by 1 February.' }),
    'uva-ai': link('https://www.uva.nl/en/programmes/masters/artificial-intelligence/application-and-admission/application-and-admission.html'),
    'stanford-mscs': r('https://www.cs.stanford.edu/admissions/masters-admissions', 'OFF',
      [['Deadline', '2026-12-08']]),
    'cmu-mscs': r('https://csd.cmu.edu/academics/masters/admissions', 'OFF',
      [['Early deadline', '2026-11-18'], ['Final deadline', '2026-12-09']]),
    'cmu-msml': r('https://ml.cmu.edu/academics/primary-ms-machine-learning-masters', 'OFF2',
      [['Early deadline', '2026-11-18'], ['Final deadline', '2026-12-09']]),
    'berkeley-meng': r('https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/apply/', 'OFF',
      [['Deadline', '2027-01-06']]),
    'imperial-computing': r('https://www.imperial.ac.uk/study/courses/postgraduate-taught/computing/', 'OFF',
      [['Round 2', '2027-01-06'], ['Round 3', '2027-03-10'], ['Round 4', '2027-04-28']],
      { note: 'Later rounds are not guaranteed to stay open.' }),
    'ucl-cs-conv': link('https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc'),
    'bristol-cs-conv': link('https://www.bristol.ac.uk/study/postgraduate/taught/msc-computer-science-conversion/'),
    'glasgow-it': link('https://www.gla.ac.uk/postgraduate/taught/informationtechnology/'),
    'standrews-cs-conv': link('https://www.st-andrews.ac.uk/subjects/computer-science/computer-science-msc/')
  };

  return { checked: '2026-09-23', cycle: '2026–27', schools: S };
}());

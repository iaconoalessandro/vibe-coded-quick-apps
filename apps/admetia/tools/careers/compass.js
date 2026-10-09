/* ---------------------------------------------------------------------------
 * Career Compass: the data behind the questionnaire (careers/compass.html).
 *
 * Two kinds of input, kept apart so a reader can tell them apart:
 *
 *   our reading    the per-role tags below (what the work mostly is, the kind
 *                  of employer, relative pay and so on). They are editorial
 *                  judgements made from each role's own page, like the Italy
 *                  add-on mapping in italy-map.json, and the page says so.
 *   the research   every sentence the results page shows about a career is
 *                  quoted from research/*.md at build time: the myths table,
 *                  the cross-career table, the master's verdicts, the sector
 *                  bottom lines and the decision rules. If a quoted passage
 *                  moves or disappears, the build stops and names it.
 *
 * The scores the compass compares against (hours, stress, people, quant,
 * entry difficulty, background fit) are the explorer's own, from
 * research/branches/index.md; nothing here restates them.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const M = require('./md');
const P = require('./parse');

const VERSION = '1.0';

/* --------------------------------------------------------------- tags --- */

/* What the work mostly is: the activities a student picks from. The first
 * tag is the role's core activity and counts most. */
const ACTIVITIES = ['build', 'data', 'quant', 'protect', 'advise', 'deals', 'invest', 'sell', 'create', 'operate', 'check', 'research', 'people'];
/* Kinds of employer. "bank" includes funds and other financial firms. */
const ORGS = ['bank', 'consult', 'corp', 'tech', 'startup', 'public', 'agency', 'lab'];
const SECTORS = ['pharma', 'luxury', 'energy', 'industrial', 'public', 'tech', 'sports', 'realestate', 'sustainability'];

/* One line per role family:
 *   a=      activities, core first          o=   employer types
 *   pay=    entry pay 1-3, relative, our reading of index.md section 4
 *   up=     long-run pay upside 1-3         ex=  breadth of exits 1-3
 *   st=     stability of the entry route 1-3 (cyclical, shrinking or lateral-only = 1)
 *   ai=     AI exposure of junior work 1-3, from evidence/trends.md section 2
 *           and the cross-career table in decisions/decision-framework.md
 *   lang=   local language in continental Europe: 0 English common, 1 helps,
 *           2 usually required (decision-framework.md Step 0)
 *   mi      public mission     cr   creative output
 *   cit     citizenship or nationality conditions are common
 *   spons=rare  employers of this kind rarely sponsor visas
 *   qual    a professional qualification is taken on the job
 *   df= ms= the row of the cross-career table / the master's table it reads
 *   sec=    sector lenses that lift it */
const ROLES = {
  'finance/P1-3.1': 'a=deals,advise,quant o=bank pay=3 up=3 st=2 ex=3 ai=2 lang=1 df=ib ms=ib sec=realestate',
  'finance/P1-3.2': 'a=deals,sell,advise o=bank pay=3 up=3 st=2 ex=2 ai=2 lang=1 df=ib ms=ib',
  'finance/P1-3.3': 'a=deals,quant,advise o=bank pay=3 up=3 st=2 ex=2 ai=2 lang=1 df=ib ms=ib',
  'finance/P1-3.4': 'a=deals,advise,quant o=bank,agency pay=3 up=3 st=3 ex=3 ai=2 lang=1 df=ib ms=ib',
  'finance/P1-3.5': 'a=sell,advise,deals o=bank pay=2 up=2 st=3 ex=2 ai=1 lang=2',
  'finance/P1-3.6': 'a=deals,quant,check o=consult pay=2 up=2 st=2 ex=3 ai=2 lang=2 df=big4cons',
  'finance/P2-3.1': 'a=invest,quant o=bank pay=3 up=3 st=1 ex=2 ai=2 lang=0 df=quant ms=quant',
  'finance/P2-3.2': 'a=sell,invest o=bank pay=3 up=3 st=1 ex=2 ai=1 lang=1',
  'finance/P2-3.3': 'a=quant,deals,sell o=bank pay=3 up=3 st=2 ex=2 ai=2 lang=0 df=quant ms=quant',
  'finance/P2-3.4': 'a=research,invest,quant o=bank pay=2 up=2 st=1 ex=3 ai=3 lang=1 df=am ms=am',
  'finance/P2-3.5': 'a=invest,deals,operate o=corp,bank pay=3 up=3 st=1 ex=2 ai=2 lang=0 sec=energy',
  'finance/P2-3.6': 'a=invest,research o=bank pay=3 up=3 st=1 ex=1 ai=2 lang=0 gate=exp',
  'finance/P3-3.1': 'a=invest,research,quant o=bank pay=2 up=3 st=2 ex=2 ai=2 lang=1 df=am ms=am',
  'finance/P3-3.2': 'a=sell,invest o=bank pay=2 up=2 st=2 ex=2 ai=1 lang=2 df=am',
  'finance/P3-3.3': 'a=invest,quant,research o=bank pay=3 up=3 st=1 ex=2 ai=2 lang=0',
  'finance/P3-3.4': 'a=deals,invest,quant o=bank pay=3 up=3 st=2 ex=3 ai=1 lang=1 gate=exp sec=realestate',
  'finance/P3-3.5': 'a=invest,sell,research o=bank,startup pay=2 up=3 st=1 ex=2 ai=1 lang=0 gate=exp sec=tech',
  'finance/P3-3.6': 'a=deals,quant,invest o=bank pay=3 up=3 st=2 ex=2 ai=2 lang=0 sec=sustainability',
  'finance/P3-3.7': 'a=invest,research o=public,bank pay=2 up=2 st=3 ex=2 ai=2 lang=1',
  'finance/P3-3.8': 'a=sell,invest,advise o=bank pay=2 up=3 st=2 ex=1 ai=1 lang=2',
  'finance/P4-3.1': 'a=quant,operate,check o=corp pay=2 up=2 st=3 ex=2 ai=2 lang=1 df=corp ms=corp sec=pharma,industrial,luxury',
  'finance/P4-3.2': 'a=quant,check,operate o=corp pay=2 up=2 st=3 ex=2 ai=2 lang=1',
  'finance/P4-3.3': 'a=deals,advise o=corp pay=2 up=3 st=2 ex=3 ai=1 lang=1 gate=exp',
  'finance/P4-3.4': 'a=quant,check,research o=bank pay=2 up=2 st=3 ex=2 ai=2 lang=1',
  'finance/P4-3.5': 'a=check,protect,research o=bank pay=1 up=2 st=3 ex=1 ai=2 lang=2',
  'finance/P4-3.6': 'a=quant,build o=bank pay=3 up=3 st=2 ex=2 ai=2 lang=0 df=quant ms=quant',
  'finance/P4-3.7': 'a=quant,invest,research o=bank pay=3 up=3 st=2 ex=2 ai=1 lang=0 df=quant ms=quant',
  'finance/P4-3.8': 'a=build,quant o=bank,tech pay=3 up=3 st=2 ex=2 ai=2 lang=0 df=quant ms=quant',
  'finance/P4-3.9': 'a=operate,sell,data o=startup,tech pay=2 up=2 st=1 ex=2 ai=2 lang=1 df=tech ms=tech sec=tech',

  'computer-science/P1-3.1': 'a=build o=tech,startup pay=2 up=3 st=2 ex=2 ai=2 lang=0 sec=tech',
  'computer-science/P1-3.2': 'a=build,create o=tech,startup pay=2 up=2 st=2 ex=2 ai=3 lang=0 cr sec=tech',
  'computer-science/P1-3.3': 'a=build,create o=tech,startup pay=2 up=2 st=2 ex=2 ai=2 lang=0 cr sec=tech',
  'computer-science/P1-3.4': 'a=build,create o=tech pay=2 up=2 st=2 ex=2 ai=2 lang=0 cr',
  'computer-science/P1-3.5': 'a=build,create o=tech pay=1 up=2 st=1 ex=1 ai=2 lang=0 cr sec=sports',
  'computer-science/P1-3.6': 'a=check,build o=tech pay=1 up=1 st=2 ex=1 ai=3 lang=0',
  'computer-science/P1-3.7': 'a=sell,build,advise o=tech pay=2 up=3 st=2 ex=2 ai=1 lang=1 sec=tech',
  'computer-science/P2-3.1': 'a=build,operate,protect o=tech pay=2 up=3 st=2 ex=2 ai=2 lang=0',
  'computer-science/P2-3.2': 'a=build,operate,advise o=tech,consult pay=2 up=3 st=3 ex=2 ai=2 lang=0',
  'computer-science/P2-3.3': 'a=build,quant o=corp,tech pay=2 up=2 st=3 ex=1 ai=1 lang=1 sec=industrial',
  'computer-science/P2-3.4': 'a=build,data o=tech,corp pay=2 up=3 st=2 ex=2 ai=2 lang=0',
  'computer-science/P2-3.5': 'a=operate,advise,build o=corp,consult pay=1 up=1 st=2 ex=1 ai=3 lang=1',
  'computer-science/P2-3.6': 'a=advise,build,operate o=consult pay=1 up=2 st=2 ex=2 ai=2 lang=1',
  'computer-science/P2-3.7': 'a=research,build,quant o=lab pay=1 up=2 st=2 ex=2 ai=1 lang=0 gate=phd',

  'artificial-intelligence/P1-3.1': 'a=build,quant o=tech,startup pay=3 up=3 st=2 ex=3 ai=1 lang=0 sec=tech',
  'artificial-intelligence/P1-3.2': 'a=build,create o=tech,startup pay=3 up=3 st=2 ex=3 ai=1 lang=0 cr sec=tech',
  'artificial-intelligence/P1-3.3': 'a=build,operate o=tech pay=3 up=3 st=2 ex=2 ai=2 lang=0',
  'artificial-intelligence/P1-3.4': 'a=build,quant o=corp,tech,lab pay=2 up=3 st=2 ex=2 ai=1 lang=0 sec=industrial',
  'artificial-intelligence/P1-3.5': 'a=check,research o=tech,agency pay=1 up=1 st=1 ex=1 ai=3 lang=0',
  'artificial-intelligence/P2-3.1': 'a=research,quant,build o=lab,tech pay=3 up=3 st=2 ex=2 ai=1 lang=0 gate=phd',
  'artificial-intelligence/P2-3.2': 'a=build,research,quant o=lab,tech pay=3 up=3 st=2 ex=2 ai=1 lang=0',
  'artificial-intelligence/P2-3.3': 'a=research,protect,quant o=lab,tech,public pay=3 up=3 st=2 ex=2 ai=1 lang=0 mi',
  'artificial-intelligence/P2-3.4': 'a=build,advise,sell o=tech,startup pay=3 up=3 st=2 ex=3 ai=1 lang=0',
  'artificial-intelligence/P2-3.5': 'a=research,check,advise o=public,tech,consult pay=2 up=2 st=2 ex=2 ai=1 lang=1 mi sec=public',
  'artificial-intelligence/P2-3.6': 'a=create,operate,data o=tech pay=3 up=3 st=2 ex=3 ai=1 lang=0 cr gate=exp',

  'data-science/3.1': 'a=data,quant o=tech pay=2 up=3 st=2 ex=3 ai=2 lang=0 sec=tech',
  'data-science/3.2': 'a=quant,build,data o=tech,corp pay=2 up=3 st=2 ex=2 ai=2 lang=0',
  'data-science/3.3': 'a=quant,operate o=corp pay=2 up=2 st=3 ex=2 ai=1 lang=0 sec=industrial',
  'data-science/3.4': 'a=quant,research o=corp,public,lab pay=2 up=2 st=3 ex=1 ai=1 lang=0 mi sec=pharma',
  'data-science/3.5': 'a=quant,data,check o=bank pay=2 up=2 st=3 ex=2 ai=2 lang=1',
  'data-science/3.6': 'a=research,quant,build o=tech,lab pay=3 up=3 st=2 ex=2 ai=1 lang=0 gate=phd',
  'data-science/3.7': 'a=advise,data,quant o=consult pay=2 up=2 st=2 ex=3 ai=2 lang=1',

  'data-analytics/3.1': 'a=data,operate o=corp pay=1 up=2 st=2 ex=2 ai=3 lang=1',
  'data-analytics/3.2': 'a=data,build o=corp pay=1 up=2 st=2 ex=1 ai=3 lang=1',
  'data-analytics/3.3': 'a=build,data o=tech pay=2 up=2 st=2 ex=2 ai=2 lang=0',
  'data-analytics/3.4': 'a=data,create o=tech,corp,agency pay=1 up=2 st=2 ex=2 ai=3 lang=1',
  'data-analytics/3.5': 'a=data,operate o=corp pay=1 up=2 st=3 ex=2 ai=2 lang=1 sec=industrial',
  'data-analytics/3.6': 'a=data,people o=corp pay=1 up=2 st=3 ex=1 ai=2 lang=1',
  'data-analytics/3.7': 'a=check,data o=corp,bank pay=1 up=1 st=3 ex=1 ai=2 lang=1',
  'data-analytics/3.8': 'a=advise,data o=consult pay=2 up=2 st=2 ex=3 ai=2 lang=1',

  'cybersecurity/3.1': 'a=protect,data o=corp,consult pay=1 up=2 st=3 ex=2 ai=2 lang=1',
  'cybersecurity/3.2': 'a=protect,research o=consult,public pay=2 up=2 st=3 ex=2 ai=1 lang=1 gate=exp',
  'cybersecurity/3.3': 'a=research,protect o=public,consult pay=2 up=2 st=3 ex=2 ai=2 lang=1 cit gate=exp',
  'cybersecurity/3.4': 'a=protect,build o=consult pay=2 up=2 st=3 ex=2 ai=2 lang=0',
  'cybersecurity/3.5': 'a=protect,build o=tech pay=2 up=3 st=3 ex=2 ai=1 lang=0 sec=tech',
  'cybersecurity/3.6': 'a=protect,build,operate o=tech,corp pay=2 up=2 st=3 ex=2 ai=2 lang=0',
  'cybersecurity/3.7': 'a=protect,build,advise o=corp pay=3 up=3 st=3 ex=2 ai=1 lang=1 gate=exp',
  'cybersecurity/3.8': 'a=check,protect,advise o=consult,corp pay=1 up=2 st=3 ex=2 ai=2 lang=2 sec=public',
  'cybersecurity/3.9': 'a=protect,operate o=corp,public pay=2 up=2 st=3 ex=1 ai=1 lang=1 cit sec=industrial,energy',
  'cybersecurity/3.10': 'a=advise,protect,sell o=consult pay=2 up=3 st=2 ex=3 ai=1 lang=1',

  'management/3.1': 'a=operate,people,sell o=corp pay=2 up=3 st=2 ex=3 ai=1 lang=2 df=corp ms=corp sec=pharma,luxury,industrial',
  'management/3.2': 'a=operate,people o=corp pay=2 up=2 st=2 ex=2 ai=1 lang=2 sec=industrial',
  'management/3.3': 'a=operate,people o=corp,consult,public pay=1 up=2 st=2 ex=2 ai=2 lang=1 sec=industrial',
  'management/3.4': 'a=people,advise o=corp pay=1 up=2 st=3 ex=1 ai=2 lang=2',
  'management/3.5': 'a=advise,deals,research o=corp pay=2 up=3 st=2 ex=3 ai=1 lang=1',
  'management/3.6': 'a=operate,people,research o=public pay=1 up=1 st=3 ex=1 ai=1 lang=2 mi cit df=eu sec=public',

  'logistics-supply-chain/3.1': 'a=deals,operate,sell o=corp pay=1 up=2 st=3 ex=2 ai=2 lang=2 sec=industrial,energy',
  'logistics-supply-chain/3.2': 'a=data,operate,quant o=corp pay=1 up=2 st=3 ex=2 ai=2 lang=1 sec=industrial',
  'logistics-supply-chain/3.3': 'a=operate,sell o=corp pay=1 up=1 st=2 ex=1 ai=2 lang=2',
  'logistics-supply-chain/3.4': 'a=operate,people o=corp pay=2 up=2 st=2 ex=1 ai=1 lang=2',
  'logistics-supply-chain/3.5': 'a=deals,sell,operate o=corp,agency pay=1 up=3 st=1 ex=1 ai=1 lang=0 sec=energy',
  'logistics-supply-chain/3.6': 'a=data,build,operate o=corp pay=1 up=2 st=3 ex=2 ai=2 lang=1',
  'logistics-supply-chain/3.7': 'a=advise,operate,data o=consult pay=2 up=2 st=2 ex=3 ai=2 lang=1',

  'accounting/3.1': 'a=check,advise o=consult pay=1 up=2 st=2 ex=3 ai=3 lang=2 qual df=audit ms=audit',
  'accounting/3.2': 'a=check,advise,research o=consult pay=1 up=2 st=3 ex=2 ai=3 lang=2 qual df=audit ms=audit',
  'accounting/3.3': 'a=check,quant o=corp pay=1 up=2 st=3 ex=2 ai=3 lang=2 qual',
  'accounting/3.4': 'a=check,operate,quant o=corp pay=1 up=2 st=3 ex=2 ai=2 lang=2 qual sec=industrial',
  'accounting/3.5': 'a=check,advise o=corp,bank pay=1 up=2 st=3 ex=2 ai=2 lang=2 qual gate=exp',
  'accounting/3.6': 'a=check,research,protect o=consult pay=2 up=2 st=3 ex=2 ai=2 lang=1 qual gate=exp',
  'accounting/3.7': 'a=check,research,advise o=consult,corp pay=1 up=2 st=1 ex=2 ai=2 lang=1 mi qual gate=exp sec=sustainability',

  'marketing/3.1': 'a=create,operate,sell o=corp pay=2 up=3 st=2 ex=3 ai=2 lang=2 cr df=fmcg ms=fmcg sec=luxury,pharma',
  'marketing/3.2': 'a=data,create o=agency,tech pay=1 up=2 st=2 ex=2 ai=3 lang=1 df=agency',
  'marketing/3.3': 'a=create,sell o=agency,startup pay=1 up=1 st=1 ex=1 ai=3 lang=2 cr df=agency spons=rare sec=sports,luxury',
  'marketing/3.4': 'a=create,sell,data o=tech pay=2 up=3 st=2 ex=2 ai=2 lang=1 cr df=tech ms=tech sec=tech',
  'marketing/3.5': 'a=data,create o=corp,tech pay=1 up=2 st=2 ex=1 ai=3 lang=1',
  'marketing/3.6': 'a=research,data o=agency,corp pay=1 up=2 st=2 ex=2 ai=3 lang=2',
  'marketing/3.7': 'a=advise,create,sell o=agency pay=1 up=2 st=1 ex=2 ai=3 lang=2 cr df=agency spons=rare',
  'marketing/3.8': 'a=sell,deals o=tech,corp,startup pay=2 up=3 st=2 ex=2 ai=1 lang=2 df=tech ms=tech sec=tech',

  'economics/3.1': 'a=research,quant o=public pay=2 up=2 st=3 ex=2 ai=1 lang=1 mi cit df=eu sec=public',
  'economics/3.2': 'a=research,quant,advise o=public pay=3 up=2 st=3 ex=2 ai=1 lang=0 mi cit sec=public',
  'economics/3.3': 'a=research,quant,data o=public pay=1 up=1 st=3 ex=1 ai=2 lang=2 mi cit sec=public',
  'economics/3.4': 'a=research,quant,advise o=consult pay=2 up=3 st=2 ex=2 ai=1 lang=0',
  'economics/3.5': 'a=research,quant,data o=tech pay=3 up=3 st=2 ex=2 ai=1 lang=0 gate=phd',
  'economics/3.6': 'a=research,advise o=public pay=1 up=1 st=2 ex=2 ai=2 lang=1 mi sec=public',
  'economics/3.7': 'a=research,quant o=lab pay=1 up=2 st=2 ex=1 ai=1 lang=0 gate=phd',

  'management-consulting/3.1': 'a=advise,quant,operate o=consult pay=3 up=3 st=2 ex=3 ai=1 lang=2 df=mbb ms=mbb',
  'management-consulting/3.2': 'a=advise,operate o=consult pay=2 up=2 st=2 ex=3 ai=2 lang=2 df=big4cons',
  'management-consulting/3.3': 'a=advise,research,quant o=consult,agency pay=2 up=2 st=2 ex=2 ai=2 lang=1 sec=pharma,sustainability',
  'management-consulting/3.4': 'a=advise,build,operate o=consult pay=2 up=2 st=2 ex=2 ai=2 lang=1',
  'management-consulting/3.5': 'a=advise,operate,research o=corp pay=2 up=2 st=2 ex=3 ai=1 lang=1',

  'product-management-startups/3.1': 'a=create,operate,data o=tech,startup pay=3 up=3 st=2 ex=3 ai=1 lang=0 cr df=tech ms=tech sec=tech',
  'product-management-startups/3.2': 'a=create,operate,data o=tech pay=3 up=3 st=2 ex=3 ai=1 lang=0 cr df=tech ms=tech sec=tech',
  'product-management-startups/3.3': 'a=operate,build o=tech pay=2 up=2 st=2 ex=2 ai=2 lang=0 df=tech sec=tech',
  'product-management-startups/3.4': 'a=operate,sell,people o=startup pay=1 up=2 st=1 ex=3 ai=1 lang=0 df=tech spons=rare sec=tech',
  'product-management-startups/3.5': 'a=create,sell,people o=startup pay=1 up=3 st=1 ex=3 ai=1 lang=0 cr spons=rare sec=tech'
};

/* Roles that are rarely a first job. The note is our paraphrase of the
 * role's own "How to enter"; the role page has the full text. A student who
 * has worked 2+ years sees `exp` roles as open now. */
const GATES = {
  'finance/P2-3.6': 'Almost no direct graduate entry: a sell-side desk seat and a track record come first.',
  'finance/P3-3.4': 'Almost all associates come from top banks’ M&A or leveraged-finance analyst classes, or from strategy consulting.',
  'finance/P3-3.5': 'No standard path: hires come from start-ups, banking, consulting, private equity or founding.',
  'finance/P4-3.3': 'Few direct graduate programmes: most join after 2–4 years in banking, transaction services, consulting or private equity.',
  'computer-science/P2-3.7': 'Research roles go through a PhD programme first.',
  'artificial-intelligence/P2-3.1': 'Research scientist roles expect a PhD or equivalent research record.',
  'artificial-intelligence/P2-3.6': 'Rarely a first job; associate product manager programmes are the exception.',
  'data-science/3.6': 'Expects a PhD, or an excellent master’s with research output.',
  'cybersecurity/3.2': 'Most hires come after 1–3 years in a SOC or sysadmin job.',
  'cybersecurity/3.3': 'Mostly hired after 1–3 years in SOC or analytics work.',
  'cybersecurity/3.7': 'Not an entry job: people progress into it through engineering or consulting.',
  'accounting/3.5': 'Most internal-audit hires come after 1–3 years in audit or controls.',
  'accounting/3.6': 'Many enter after 2–4 years in audit or risk.',
  'accounting/3.7': 'Most hires come after 1–3 years in audit or consulting.',
  'economics/3.5': 'A PhD from a strong programme is practically required.',
  'economics/3.7': 'Faculty jobs require a PhD; a pre-doc or research-assistant post comes first.'
};

/* Notes on single roles that the tags cannot carry. */
const ROLE_NOTES = {
  'finance/P4-3.7': 'A PhD is common, and for many hedge-fund research roles effectively expected.',
  'economics/3.1': 'Research-economist posts expect a PhD; research-assistant and analyst posts take a bachelor’s or master’s.',
  'economics/3.2': 'The IMF Economist Program takes recent PhDs; the IMF Research Analyst Program and OECD Young Associates take bachelor’s graduates.',
  'economics/3.4': 'In Europe a master’s with strong econometrics is the standard; a MiM or MBA without graduate econometrics is screened out.'
};

/* ---------------------------------------------------- research quotes --- */

/* Rows of decisions/decision-framework.md's cross-career table, by the
 * first words of the Family cell. */
const DF_ROWS = {
  ib: 'IB (M&A, ECM/DCM)', quant: 'Quant / e-trading', am: 'Asset management / equity research',
  mbb: 'MBB consulting', tier2: 'Tier-2 strategy (DACH)', big4cons: 'Big 4 consulting / deals', audit: 'Big 4 audit / tax',
  corp: 'Corporate rotational programmes', fmcg: 'FMCG brand management', luxury: 'Luxury',
  agency: 'Agencies / digital marketing', tech: 'Tech business roles / startups', eu: 'EU institutions / central banks'
};
/* Rows of decisions/should-you-do-a-masters.md section 2. */
const MS_ROWS = {
  ib: 'London IB', mbb: 'MBB (UK/US)', mbbdach: 'MBB (DACH)', audit: 'Big 4 audit/tax',
  corp: 'Corporate rotational programmes', fmcg: 'FMCG brand management', tech: 'Tech business roles',
  quant: 'Quant / e-trading', am: 'Asset management / equity research', german: 'German industry'
};

/* Sector lenses: research/careers/<file>.md, the bottom-line items quoted. */
const SECTOR_SRC = {
  pharma: { file: 'careers/healthcare-and-pharma.md', items: [1, 2, 6, 7] },
  luxury: { file: 'careers/luxury-and-fashion.md', items: [1, 3, 5, 6], df: 'luxury' },
  energy: { file: 'careers/commodities-and-energy.md', items: [1, 2, 3, 8] },
  industrial: { file: 'careers/industrial-automotive-defence.md', items: [1, 3, 5, 8], ms: 'german' },
  public: { file: 'careers/public-policy-and-academia.md', items: [1, 3, 5, 7], df: 'eu' },
  tech: { file: 'careers/tech-business-and-startups.md', items: [1, 2, 4, 6] },
  sports: { file: 'careers/economic-consulting-real-estate-and-sustainability.md', items: [5] },
  realestate: { file: 'careers/economic-consulting-real-estate-and-sustainability.md', items: [3] },
  sustainability: { file: 'careers/economic-consulting-real-estate-and-sustainability.md', items: [4] }
};

/* Other quoted passages, by key. `num` is a numbered item in a section,
 * `bullet` an item that starts with its id ("- B3."). */
const QUOTES = {
  /* Stage */
  b1: { file: 'decisions/decision-framework.md', section: 'If you are still in your bachelor', bullet: 'B3' },
  b2: { file: 'decisions/decision-framework.md', section: 'If you are still in your bachelor', bullet: 'B4' },
  b3: { file: 'decisions/decision-framework.md', section: 'If you are still in your bachelor', bullet: 'B6' },
  b4: { file: 'decisions/decision-framework.md', section: 'If you are still in your bachelor', bullet: 'B8' },
  window: { file: 'decisions/decision-framework.md', section: 'Bottom line', num: 5 },
  internship: { file: 'decisions/decision-framework.md', section: 'Bottom line', num: 3 },
  ukmsc: { file: 'getting-in/recruiting-calendar.md', section: 'Bottom line', num: 2 },
  deadzone: { file: 'decisions/mba-and-career-switchers.md', section: 'Bottom line', num: 1 },
  nonDegree: { file: 'decisions/mba-and-career-switchers.md', section: 'Bottom line', num: 8 },
  /* Constraints */
  constraints: { file: 'decisions/decision-framework.md', section: 'Bottom line', num: 2 },
  channel: { file: 'decisions/decision-framework.md', section: 'If your school is not a', bullet: 'N1' },
  /* AI */
  aiTrend: { file: 'evidence/trends.md', section: 'Bottom line', num: 2 },
  aiRule: { file: 'evidence/trends.md', section: 'Decision rules', num: 1 },
  /* Testing a role cheaply: the questions to ask */
  askHours: { file: 'decisions/long-horizon-careers.md', section: 'Decision rules', num: 4 },
  askAI: { file: 'decisions/long-horizon-careers.md', section: 'Decision rules', num: 8 },
  exits: { file: 'decisions/long-horizon-careers.md', section: 'Decision rules', num: 6 },
  adjacent: { file: 'decisions/decision-framework.md', section: 'Step 1. Pick a target career family', rule: 'R1.1' },
  netRent: { file: 'decisions/decision-framework.md', section: 'Step 1. Pick a target career family', rule: 'R1.3' },
  /* Master's */
  mastersWhy: { file: 'decisions/should-you-do-a-masters.md', section: 'Bottom line', num: 5 },
  mastersWhyNot: { file: 'decisions/should-you-do-a-masters.md', section: 'Bottom line', num: 6 }
};

/* ------------------------------------------------------------ helpers --- */

const RESEARCH = path.join(__dirname, '../../research');

function fail(msg) { throw new P.ParseError('Career Compass: ' + msg); }

function readSrc(file) {
  const f = path.join(RESEARCH, file);
  if (!fs.existsSync(f)) fail(`research/${file} not found`);
  return fs.readFileSync(f, 'utf8');
}

/* The text under the first heading (any level) that starts with `title`,
 * up to the next heading of the same or a higher level. */
function section(file, title) {
  const lines = readSrc(file).split('\n');
  const at = lines.findIndex((l) => /^#{1,3} /.test(l) && l.replace(/^#+ /, '').startsWith(title));
  if (at < 0) fail(`research/${file}: no heading starting "${title}"`);
  const level = /^#+/.exec(lines[at])[0].length;
  let end = at + 1;
  while (end < lines.length && !(new RegExp(`^#{1,${level}} `).test(lines[end]))) end++;
  return lines.slice(at + 1, end).join('\n');
}

/* "1. text" items with their indented continuation lines. */
function numbered(text) {
  const out = {};
  let cur = null;
  for (const line of text.split('\n')) {
    const m = /^(\d+)\. (.*)$/.exec(line);
    if (m) { cur = Number(m[1]); out[cur] = m[2]; continue; }
    if (cur && /^\s+\S/.test(line)) out[cur] += '\n' + line;
    else if (cur && line.trim() && !/^\s/.test(line)) cur = null;
  }
  return out;
}

/* "- B3. text" (or "- R1.1 **If**…") items with their sub-lines. */
function bulleted(text, id) {
  const lines = text.split('\n');
  const esc = id.replace(/\./g, '\\.');
  const at = lines.findIndex((l) => new RegExp(`^- (\\*\\*)?${esc}[.\\s*]`).test(l));
  if (at < 0) return null;
  const out = [lines[at].replace(/^- /, '')];
  for (let i = at + 1; i < lines.length && (/^\s+\S/.test(lines[i]) || lines[i] === ''); i++) out.push(lines[i]);
  return out.join('\n').trim();
}

/* Table rows of the first pipe table in `text`, as arrays of cells. */
function tableRows(text) {
  const rows = text.split('\n').filter((l) => l.startsWith('|'));
  return rows.slice(2).map((l) => l.slice(1, -1).split('|').map((c) => c.trim()));
}

/* Markdown → HTML for the results page. Links to other research files have
 * no page on the site, so they become plain text; long bare addresses show
 * as "source". */
function html(md) {
  const out = /\n\s*- /.test(md)
    ? M.render(md, { link: () => null })
    : M.inline(md.replace(/\n\s*/g, ' '), { link: () => null });
  return out.replace(/(<a class="cx-url" href="[^"]+" rel="noopener noreferrer">)[^<]+(<\/a>)/g, '$1source$2');
}

function parseTags(id, line) {
  const t = { a: [], o: [], sec: [] };
  for (const tok of line.split(/\s+/)) {
    const [k, v] = tok.split('=');
    if (v === undefined) {
      if (!['mi', 'cr', 'cit', 'qual'].includes(k)) fail(`${id}: unknown flag "${k}"`);
      t[k] = 1;
    } else if (['a', 'o', 'sec'].includes(k)) t[k] = v.split(',');
    else if (['pay', 'up', 'st', 'ex', 'ai', 'lang'].includes(k)) t[k] = Number(v);
    else if (['df', 'ms', 'gate', 'spons'].includes(k)) t[k] = v;
    else fail(`${id}: unknown tag "${k}"`);
  }
  for (const a of t.a) if (!ACTIVITIES.includes(a)) fail(`${id}: unknown activity "${a}"`);
  for (const o of t.o) if (!ORGS.includes(o)) fail(`${id}: unknown employer type "${o}"`);
  for (const s of t.sec) if (!SECTORS.includes(s)) fail(`${id}: unknown sector "${s}"`);
  if (!t.a.length || !t.o.length) fail(`${id}: needs at least one activity and one employer type`);
  for (const k of ['pay', 'up', 'st', 'ex', 'ai']) if (!(t[k] >= 1 && t[k] <= 3)) fail(`${id}: ${k} must be 1-3`);
  if (!(t.lang >= 0 && t.lang <= 2)) fail(`${id}: lang must be 0-2`);
  if (t.gate && !['phd', 'exp'].includes(t.gate)) fail(`${id}: gate must be phd or exp`);
  if (t.gate && !GATES[id]) fail(`${id}: gate without a note in GATES`);
  if (!t.gate && GATES[id]) fail(`${id}: GATES note but no gate tag`);
  if (t.df && !DF_ROWS[t.df]) fail(`${id}: unknown cross-career row "${t.df}"`);
  if (t.ms && !MS_ROWS[t.ms]) fail(`${id}: unknown master's row "${t.ms}"`);
  if (t.spons && t.spons !== 'rare') fail(`${id}: spons must be "rare"`);
  return t;
}

/* ------------------------------------------------------------- build --- */

function buildCompass(data, roleHref, calcFor) {
  const ids = new Set(data.roles.map((r) => r.id));
  for (const id of Object.keys(ROLES)) if (!ids.has(id)) fail(`ROLES has "${id}", which the research does not`);
  for (const id of [...Object.keys(GATES), ...Object.keys(ROLE_NOTES)]) if (!ids.has(id)) fail(`note for unknown role "${id}"`);

  /* Cross-career table: header + rows keyed by our short names. */
  const dfText = section('decisions/decision-framework.md', 'Cross-career comparison');
  const dfHead = dfText.split('\n').find((l) => l.startsWith('|')).slice(1, -1).split('|').map((c) => c.trim());
  const dfAll = tableRows(dfText);
  const df = {};
  for (const [k, name] of Object.entries(DF_ROWS)) {
    const row = dfAll.find((r) => P.stripMd(r[0]).startsWith(name));
    if (!row) fail(`decision-framework.md cross-career table has no row "${name}"`);
    /* Columns: family, pay, hours, master's helps, language, visa, AI, door, file. */
    df[k] = { name: P.stripMd(row[0]), cells: {
      masters: html(row[3]), language: html(row[4]), visa: html(row[5]), ai: html(row[6]), door: html(row[7])
    }, file: P.stripMd(row[8]) };
  }
  if (!/Master's helps/.test(dfHead[3]) || !/Language/.test(dfHead[4]) || !/Visa/.test(dfHead[5]) || !/AI exposure/.test(dfHead[6]) || !/Main door/.test(dfHead[7])) {
    fail('decision-framework.md cross-career table columns changed: ' + dfHead.join(' | '));
  }

  const msAll = tableRows(section('decisions/should-you-do-a-masters.md', '2. Career-by-career'));
  const ms = {};
  for (const [k, name] of Object.entries(MS_ROWS)) {
    const row = msAll.find((r) => P.stripMd(r[0]).startsWith(name));
    if (!row) fail(`should-you-do-a-masters.md section 2 has no row "${name}"`);
    ms[k] = { name: P.stripMd(row[0]), without: html(row[1]), adds: html(row[2]), verdict: html(row[3]) };
  }

  const mythRows = tableRows(section('decisions/decision-framework.md', 'The myths that most often derail'));
  const myths = {};
  for (const r of mythRows) myths[Number(r[0])] = { myth: html(r[1]), reality: html(r[2]), file: P.stripMd(r[3]) };
  if (Object.keys(myths).length !== 15) fail(`decision-framework.md myths table has ${Object.keys(myths).length} rows, expected 15`);

  const sectors = {};
  for (const [k, s] of Object.entries(SECTOR_SRC)) {
    const items = numbered(section(s.file, 'Bottom line'));
    sectors[k] = { file: s.file, items: s.items.map((n) => {
      if (!items[n]) fail(`research/${s.file}: bottom line has no item ${n}`);
      return html(items[n]);
    }), df: s.df || null, ms: s.ms || null };
  }

  const quotes = {};
  for (const [k, q] of Object.entries(QUOTES)) {
    const text = section(q.file, q.section);
    let md = null;
    if (q.num) md = numbered(text)[q.num];
    else if (q.bullet) md = bulleted(text, q.bullet);
    else if (q.rule) md = bulleted(text, q.rule);
    if (!md) fail(`research/${q.file} "${q.section}": item ${q.num || q.bullet || q.rule} not found`);
    quotes[k] = { html: html(md), file: q.file };
  }

  const roles = data.roles.map((r) => {
    if (!ROLES[r.id]) fail(`no compass tags for ${r.id} (${r.title})`);
    const t = parseTags(r.id, ROLES[r.id]);
    const f = data.fields.find((x) => x.slug === r.field);
    return {
      id: r.id, t: r.title, n: r.compare.name || r.shortName, f: r.field, fn: f.name, u: roleHref(r.id),
      s: { h: r.scores.hours, st: r.scores.stress, p: r.scores.people, q: r.scores.quant, d: r.scores.difficulty },
      hours: r.compare.hours, pay: html(r.compare.pay), m: r.matrix,
      a: t.a, o: t.o, pay3: t.pay, up: t.up, stab: t.st, ex: t.ex, ai: t.ai, lang: t.lang,
      mi: t.mi || 0, cr: t.cr || 0, cit: t.cit || 0, qual: t.qual || 0, spons: t.spons || null,
      gate: t.gate || null, gateNote: GATES[r.id] || null, note: ROLE_NOTES[r.id] || null,
      df: t.df || null, ms: t.ms || null, sec: t.sec, calc: calcFor(r),
      rf: (r.reachedFrom || []).map((x) => x.id || x)
    };
  });

  return {
    version: VERSION,
    researched: '9 October 2026',
    backgrounds: data.backgrounds.map((b) => ({ key: b.key, name: b.name })),
    fields: data.fields.map((f) => ({ slug: f.slug, name: f.name, what: html(f.what) })),
    roles, df, ms, myths, sectors, quotes
  };
}

module.exports = { buildCompass, ACTIVITIES, ORGS, SECTORS, ROLES, VERSION };

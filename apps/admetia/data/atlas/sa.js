/* Atlas record: Saudi Arabia. Read 3 October 2026; log P72
 * (research/verification/round-4i.md, round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Saudisation, the regional-headquarters programme and
 * the employers' graduate pages are carried from
 * research/places/gulf-and-central-eastern-europe.md §1–2 (read 2 October 2026); entry and the
 * advisory were re-read on the FCDO content API. Round 5d (3 October 2026) added standing
 * (GFCI 40 and Startup Genome 2026), city populations from the 2022 census, regional labour
 * data from DataSaudi and a hub for the Eastern Province (Dammam and Dhahran, Aramco's home).
 * GASTAT publishes no regional GDP, wage or rent series, so those metrics are left out.
 * Brief: research/countries/sa-saudi-arabia.md. */

ATLAS.add({
  id: "SA",
  checked: "2026-10-03",
  log: "P72",
  summary: "A door built for experienced hires more than graduates: the biggest graduate schemes, such as PIF’s and Aramco’s, are for Saudi nationals, and localisation quotas reserve 40% of consulting roles and 60% of marketing and sales roles for Saudis. Riyadh is the finance and headquarters centre, with hundreds of multinationals licensed to set up regional headquarters there, and Dhahran is Aramco’s home. Every job is employer-sponsored. Read the UK’s advice on Houthi attacks, including on Riyadh.",
  sectors: ["Oil, gas and petrochemicals", "Public investment and giga-projects", "Banking and financial services", "Consulting", "Construction"],
  roles: ["finance", "business"],
  hubs: [
    {
      id: "riyadh", name: "Riyadh", lat: 24.71, lon: 46.68,
      knownFor: "The capital, home of the sovereign fund and of multinationals’ regional headquarters",
      why: ["sa-pif", "sa-rhq", "sa-gfci", "sa-rhq-count", "sa-ryd-labour", "sa-pop"],
      sectors: ["Public investment", "Banking and financial services", "Consulting", "Government"],
      employers: [
        { name: "Public Investment Fund (PIF)", note: "graduate programme for Saudi nationals", c: "sa-pif" },
        { t: "Multinationals’ regional headquarters", note: "at least 15 staff each, 3 of them C-level", c: "sa-rhq" },
        {
          t: "Regional-headquarters licences",
          note: "180 by November 2023; 450 foreign investors licensed later",
          c: "sa-rhq-count"
        },
        {
          name: "PwC Middle East, BCG Saudi",
          note: "Riyadh graduate and student postings, mostly needing existing work rights",
          c: "sa-big4"
        },
        { name: "SABIC", note: "student and graduate programmes for Saudis", c: "sa-sabic" },
        { t: "Financial centre", note: "46th in the world, third in the Middle East", c: "sa-gfci" }
      ],
      demand: {
        business: ["strong", "sa-rhq-count", "sa-rhq"],
        finance: ["strong", "sa-gfci", "sa-pif"],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [5, 4, 2], c: ["sa-gfci"] },
        { f: "business", s: [5, 3, 2], c: ["sa-rhq-count", "sa-rhq"] },
        { f: "software", s: [5, 4, 2], c: ["sa-gser"] }
      ],
      metrics: {
        pop: {
          v: 6900000,
          year: 2022,
          area: "city",
          tag: "data",
          src: "https://saudipedia.com/en/top-five-saudi-cities-by-population",
          by: "Saudipedia (Saudi government encyclopedia), 2022 census, population of Riyadh city, \"approximately\", rounded",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "jeddah", name: "Jeddah", lat: 21.49, lon: 39.19,
      knownFor: "The Red Sea port city and commercial centre",
      why: ["sa-jeddah", "sa-pop", "sa-gfci"],
      sectors: ["Ports and logistics", "Trade", "Tourism"],
      employers: [
        { t: "Jeddah Islamic Port", note: "capacity to rise to four million TEU", c: "sa-jeddah" },
        {
          t: "Financial centre",
          note: "not among the 117 centres of the Global Financial Centres Index",
          c: "sa-gfci"
        }
      ],
      demand: {
        logistics: ["present", "sa-jeddah"],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "logistics", s: [3, 2, 1], c: ["sa-jeddah"] }],
      metrics: {
        pop: {
          v: 3700000,
          year: 2022,
          area: "city",
          tag: "data",
          src: "https://saudipedia.com/en/top-five-saudi-cities-by-population",
          by: "Saudipedia (Saudi government encyclopedia), 2022 census, population of Jeddah city, \"approximately\", rounded",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "dammam-dhahran", name: "Dammam and Dhahran", lat: 26.38, lon: 50.1,
      knownFor: "The Eastern Province, home of Aramco",
      why: ["sa-aramco-f", "sa-east-labour", "sa-aramco-intl"],
      sectors: ["Oil, gas and petrochemicals", "Manufacturing", "Construction"],
      employers: [
        {
          name: "Aramco",
          note: "headquarters in Dhahran; Fortune Global 500 rank 5, about 76,000 staff",
          c: "sa-aramco-f"
        },
        {
          name: "Aramco (international hiring)",
          note: "five to 10 years of experience required",
          c: "sa-aramco-intl"
        },
        {
          t: "Eastern Region employment",
          note: "323,110 in manufacturing and 928,796 in construction (Q2 2026)",
          c: "sa-east-labour"
        }
      ],
      demand: {
        business: ["present", "sa-aramco-f"],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "business", s: [4, 3, 2], c: ["sa-aramco-f"] }],
      metrics: {
        pop: {
          v: 1400000,
          year: 2022,
          area: "city",
          tag: "data",
          src: "https://saudipedia.com/en/top-five-saudi-cities-by-population",
          by: "Saudipedia (Saudi government encyclopedia), 2022 census, population of Dammam city, \"approximately\", rounded",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["sa-lang"] },
    { k: "Recruiting calendar", c: ["sa-cal"] },
    { k: "Where demand is now", c: ["sa-hays", "sa-jisr", "sa-ryd-labour", "sa-rhq", "sa-rhq-count"] },
    { k: "Graduate labour market", c: ["sa-grad-lab", "sa-wb", "sa-nitaqat", "sa-consult", "sa-pif", "sa-sabic", "sa-aramco-intl", "sa-big4"] }
  ],

  advisory: ["sa-fcdo"],

  briefs: [
    [
      "countries/sa-saudi-arabia.md",
      "Country brief: Riyadh, Jeddah and the Eastern Province, rules, employers and standing"
    ],
    [
      "places/gulf-and-central-eastern-europe.md",
      "§1–3 Gulf work rules, Saudisation, hiring evidence, pay and safety"
    ],
    ["careers/consulting.md", "Riyadh consulting pay and openness to European juniors"]
  ],
  gaps: [
    "No source read gives Riyadh’s jobs by sector for graduates or the number of regional headquarters that are operating; the licence counts read are from 2023 and a headline, so finance and business are rated strong on a ranking and on licences, not on hiring.",
    "No employer-stated entry pay for expatriate graduates was found.",
    "Saudi Arabia visas, residency rules, Qiwa contracts, Premium Residency and Study in Saudi routes are fully verified in visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md.",
    "The statistics authority publishes no regional GDP, wage or rent series, so Saudi hubs carry population only; city populations are the 2022 census as given by Saudipedia (rounded), not the census tables, which were not read.",
    "Jeddah and the Eastern Province are thin: no Jeddah employer beyond its port was read, Aramco’s own graduate pages are for Saudis, and the Eastern Province is rated only for Aramco’s headquarters."
  ],

  claims: {
    'sa-pif': { t: "The Public Investment Fund’s 12-month Graduate Development Program is aimed at, and open only to, Saudi nationals; 1,033 graduates have enrolled over nine cohorts.", tag: "employer-stated", src: "research/places/gulf-and-central-eastern-europe.md", by: "PIF graduate programme page (read 2 Oct 2026), via places/gulf-and-central-eastern-europe.md §2", seen: "2026-10-02" },
    'sa-nitaqat': { t: "The labour ministry announced in January 2026 Saudisation of 60% in marketing and sales professions (in force from 19 April 2026), 30% in 46 engineering professions (from 30 June 2026) and 70% in 12 procurement professions, and announced a new phase from 2026 to localise more than 340,000 private-sector jobs.", tag: "data", src: "research/places/gulf-and-central-eastern-europe.md", by: "Ministry of Human Resources and Social Development news (Nov 2025 to Feb 2026), via places/gulf-and-central-eastern-europe.md §1; effective dates from Clyde & Co, The first Saudisation updates of 2026 (Feb 2026), read 8 Oct 2026", seen: "2026-10-08" },
    'sa-consult': { t: "Since 25 March 2024, 40% of roles such as business consultant, financial-advisory specialist and project manager in consulting firms must be held by Saudi nationals.", tag: "data", src: "research/places/gulf-and-central-eastern-europe.md", by: "Ministry of Human Resources and Social Development (6 May 2024) and Consultancy-ME (25 Mar 2024), via places/gulf-and-central-eastern-europe.md §1", seen: "2026-10-02" },
    'sa-rhq': { t: "Since 1 January 2024 most foreign companies without a licensed regional headquarters in the Kingdom cannot win government contracts; a headquarters must hire at least 15 staff within a year, 3 of them C-level, and is exempt from Saudisation for 10 years.", tag: "practitioner consensus", src: "research/places/gulf-and-central-eastern-europe.md", by: "DLA Piper (7 Mar 2024), via places/gulf-and-central-eastern-europe.md §1", seen: "2026-10-02" },
    'sa-fcdo': { t: "The UK Foreign Office advises against all travel within 10 km of the Yemen border and all but essential travel from 10 to 80 km of it, now including Abha and Khamis Mushait; since 13 July 2026 the Houthis have launched missiles and drones at Saudi cities, Riyadh among them.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/saudi-arabia", by: "FCDO travel advice, Saudi Arabia (updated 20 Sep 2026)", seen: "2026-10-03" },
    'sa-jeddah': { t: "The Saudi Ports Authority and DP World are expanding the container terminal at Jeddah Islamic Port, a SAR 3 billion investment raising capacity from 1.8 million to four million TEU.", tag: "data", src: "https://www.argaam.com/en/article/articledetail/id/1795621", by: "Saudi Ports Authority (MAWANI) and DP World, reported by Argaam (7 Mar 2025)", seen: "2026-10-03" },
    'sa-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Riyadh 46th of 117 financial centres (61st in the March 2026 edition), fourth in the Middle East and Africa after Dubai (9th), Abu Dhabi (13th) and Casablanca (38th); Doha is 52nd and Kuwait City 60th, and Jeddah is not listed.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1 and regional summary", seen: "2026-10-03" },
    'sa-gser': { t: "Startup Genome ranks Riyadh third among the Middle East and North Africa’s start-up ecosystems in 2026, after Tel Aviv and Dubai, and puts Abu Dhabi fourth.", tag: "data", src: "https://startupgenome.com/insights/menas-startup-ecosystems-become-market-of-capability", by: "Startup Genome, MENA start-up ecosystems (15 Jul 2026), GSER 2026", seen: "2026-10-03" },
    'sa-rhq-count': { t: "The investment minister said on 8 November 2023 that Saudi Arabia had issued 180 regional-headquarters licences, against a target of 160 for the year, and the state news agency later headlined that 450 foreign investors had been licensed; a foreign company that wants government contracts must base its regional headquarters in Riyadh.", tag: "data", src: "https://www.arabnews.com/business/saudi-arabia-exceeding-regional-headquarters-target-says-investment-minister-2405381", by: "Arab News (8 Nov 2023), quoting the Minister of Investment; Saudi Press Agency headline \"Ministry of Investment Grants Licenses to 450 Foreign Investors for Establishing Regional Headquarters\" (https://www.spa.gov.sa/en/N2056681; its body and date did not load)", seen: "2026-10-03" },
    'sa-wb': { t: "As of the second quarter of 2025 Saudi Arabia’s unemployment rate was 2.8% overall and 6.8% for Saudis, 52.8% of employed Saudis worked in the private sector, and 35.8% of Saudis had tertiary education against 24.4% of expatriates.", tag: "data", src: "https://documents1.worldbank.org/curated/en/099012226144031210/pdf/P179647-b378ec18-7e40-488a-8327-0cc6f6c5dd18.pdf", by: "World Bank, A Decade of Progress: Inside Saudi Arabia’s Labor Market Transformation, Table 2 (data from the labour ministry, MHRSD)", seen: "2026-10-03" },
    'sa-ryd-labour': { t: "In the second quarter of 2026 the Riyadh region’s three largest employing activities were construction (1,403,894 employees), administrative and support services (937,517) and wholesale and retail trade (678,141); its registered employees numbered 7,672,179 and the Saudi unemployment rate was 4.2%.", tag: "data", src: "https://datasaudi.sa/en/region/al-riyadh", by: "DataSaudi (Saudi national data portal), Al-Riyadh regional profile, Q2 2026", seen: "2026-10-03" },
    'sa-east-labour': { t: "The Eastern Region had 5,125,254 residents in the 2022 census; in the second quarter of 2026 its largest employing activities were construction (928,796 employees), manufacturing (323,110) and wholesale and retail trade (260,954), and the Saudi unemployment rate was 5.3%.", tag: "data", src: "https://datasaudi.sa/en/region/eastern-region", by: "DataSaudi (Saudi national data portal), Eastern Region profile, Q2 2026", seen: "2026-10-03" },
    'sa-aramco-f': { t: "Fortune’s 2026 Global 500 ranks Saudi Aramco fifth in the world, headquartered in Dhahran, with revenue of $445.5 billion and 76,664 employees; Aramco itself reports a workforce of more than 76,000.", tag: "data", src: "https://fortune.com/company/saudi-aramco/global500/", by: "Fortune, Global 500 2026, Saudi Aramco company profile (updated 28 Jul 2026), and Aramco, About us", seen: "2026-10-03" },
    'sa-aramco-intl': { t: "Aramco’s page for international applicants asks for a minimum of five to 10 years of applicable experience, in engineering, geosciences, drilling, R&D, finance, law and administration, and names no graduate programme for non-Saudis.", tag: "employer-stated", src: "https://www.aramco.com/en/careers/for-international-applicants", by: "Aramco, careers for international applicants", seen: "2026-10-03" },
    'sa-sabic': { t: "SABIC’s student and fresh-graduate programmes in the Middle East and Africa say they \"attract and nurture young Saudi talents\", and its Basic Operation Training states \"The applicant has to be Saudi\".", tag: "employer-stated", src: "research/places/gulf-and-central-eastern-europe.md", by: "SABIC careers pages (read 2 Oct 2026), via places/gulf-and-central-eastern-europe.md §2", seen: "2026-10-03" },
    'sa-big4': { t: "PwC Middle East’s postings for Riyadh and other Saudi offices require candidates to be eligible to work without PwC sponsorship, while for Qatar and the UAE sponsorship \"may\" be available; BCG Saudi advertises Visiting Associate roles in Riyadh for students graduating between November 2026 and September 2027 without stating nationality rules.", tag: "employer-stated", src: "research/places/gulf-and-central-eastern-europe.md", by: "PwC Middle East postings and a job-board copy of the BCG Saudi posting (read Oct 2026), via places/gulf-and-central-eastern-europe.md §2", seen: "2026-10-03" },
    'sa-pop': { t: "The 2022 census puts the population of Riyadh city at about 6.9 million, Jeddah at about 3.7 million, Mecca at about 2.4 million, Medina at about 1.4 million and Dammam at about 1.4 million; Riyadh, Makkah and the Eastern Province hold about 67.5% of the Kingdom’s 32,175,224 residents.", tag: "data", src: "https://saudipedia.com/en/top-five-saudi-cities-by-population", by: "Saudipedia (Saudi government encyclopedia), from the 2022 census", seen: "2026-10-03" },
    'sa-lang': { t: "Saudi employment documents must be issued in Arabic, and standard Qiwa contracts are Arabic or Arabic and English side by side with the Arabic prevailing; Riyad Bank's 2026 graduate programme asks for advanced English; no source measured the English or Arabic level employers require of graduates.", tag: "practitioner consensus", src: "https://www.morganlewis.com/blogs/shiftingsandsoflaborlaw/2025/12/navigating-employment-in-the-middle-east-ksa-part-1-takeaways", by: "Morgan Lewis, Navigating employment in the Middle East, KSA part 1 (December 2025); Riyad Bank careers, Fursan Al Riyad 2026 programme (read 8 Oct 2026)", seen: "2026-10-08" },
    'sa-cal': { t: "Graduate recruiting in Saudi Arabia runs on university fairs and rolling postings rather than one national season: King Abdulaziz University held its 13th Career Forum in Jeddah on 6-8 April 2026, KFUPM its fair in Dhahran on 28-30 April 2026 with more than 70 organisations, and PwC Middle East's Riyadh graduate postings for 2026 appeared on 17 November 2025 and 8 July 2026; for an expatriate, the work visa takes 8 to 14 weeks in practice.", tag: "employer-stated", src: "https://news.kfupm.edu.sa/news/career-fair-2026-draws-over-11000-visitors/310/", by: "KFUPM news (1 May 2026); King Abdulaziz University event page; PwC Middle East careers postings; library visa guide (all read 8 Oct 2026)", seen: "2026-10-08" },
    'sa-grad-lab': { t: "The Saudi unemployment rate was 6.4% in the first quarter of 2026 and 6.5% in the second (3.1% and 3.0% overall), with 13.8% for Saudi men and 20.4% for Saudi women aged 15 to 24 in the first quarter; only 42% of employed Saudis with tertiary education worked in the private sector in 2025; no graduate-specific unemployment figure and none for expatriate graduates was found.", tag: "data", src: "https://gulfnews.com/world/gulf/saudi/saudi-unemployment-falls-to-64-in-q1-2026-1.500592445", by: "GASTAT Labour Force Survey as reported by Gulf News (30 Jun 2026) and Trading Economics (30 Sep 2026); World Bank, A Decade of Progress (read 8 Oct 2026)", seen: "2026-10-08" },
    'sa-hays': { t: "Hays's Salary Guide 2026 for Saudi Arabia has 74% of firms planning to grow headcount in 2026 and 62% having grown in 2025, with recruitment activity in Riyadh (69%), Jeddah (43%) and the Eastern Province (37%), concentrated in tech, construction, property, finance and banking.", tag: "practitioner consensus", src: "https://enterpriseam.com/ksa/2026/05/04/hiring-expansion-and-expectation-gaps-to-define-the-2026-saudi-job-market/", by: "EnterpriseAM, quoting the Hays Salary Guide 2026 (4 May 2026)", seen: "2026-10-08" },
    'sa-jisr': { t: "Jisr's 2025-2026 hiring report found Saudis were 41% of new hires, Riyadh took more than half of all new hires, and close to 60% of HR leaders expected expatriate numbers to shrink further, with foreign hiring focused on highly specialised roles.", tag: "practitioner consensus", src: "https://me.peoplemattersglobal.com/news/workforce-planning/saudi-companies-hire-more-nationals-as-expatriate-numbers-fall-jisr-report-48195", by: "People Matters on the Jisr State of Hiring Report 2025-2026 (28 Jan 2026)", seen: "2026-10-08" }
  }
});

if (window.I18N) I18N.add('it', {
  "A door built for experienced hires more than graduates: the biggest graduate schemes, such as PIF’s and Aramco’s, are for Saudi nationals, and localisation quotas reserve 40% of consulting roles and 60% of marketing and sales roles for Saudis. Riyadh is the finance and headquarters centre, with hundreds of multinationals licensed to set up regional headquarters there, and Dhahran is Aramco’s home. Every job is employer-sponsored. Read the UK’s advice on Houthi attacks, including on Riyadh.":
    "Una porta pensata più per i profili esperti che per i neolaureati: i principali programmi per laureati, come quelli di PIF e Aramco, sono per cittadini sauditi, e le quote di localizzazione riservano ai sauditi il 40% dei ruoli di consulenza e il 60% di quelli di marketing e vendite. Riad è il centro della finanza e delle sedi centrali, con centinaia di multinazionali autorizzate ad aprirvi una sede regionale, e Dhahran è la casa di Aramco. Ogni lavoro richiede lo sponsor del datore di lavoro. Leggi l’avvertenza britannica sugli attacchi degli Houthi, anche su Riad.",
  "Oil, gas and petrochemicals":
    "Petrolio, gas e petrolchimica",
  "Public investment and giga-projects":
    "Investimenti pubblici e giga-progetti",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Consulting":
    "Consulenza",
  "Construction":
    "Costruzioni",
  "No source read gives Riyadh’s jobs by sector for graduates or the number of regional headquarters that are operating; the licence counts read are from 2023 and a headline, so finance and business are rated strong on a ranking and on licences, not on hiring.":
    "Nessuna fonte letta riporta i posti di lavoro per laureati di Riad per settore né il numero di sedi regionali operative; i conteggi delle licenze letti risalgono al 2023 e a un titolo di giornale, quindi finanza e business sono valutate forti su un ranking e sulle licenze, non sulle assunzioni.",
  "No employer-stated entry pay for expatriate graduates was found.":
    "Non sono stati trovati stipendi d’ingresso dichiarati dai datori di lavoro per i neolaureati stranieri.",
  "Saudi Arabia visas, residency rules, Qiwa contracts, Premium Residency and Study in Saudi routes are fully verified in visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md.":
    "Le regole sui visti per l’Arabia Saudita, le norme di soggiorno, i contratti Qiwa, la Premium Residency e i percorsi Study in Saudi sono interamente verificati in visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md.",
  "The statistics authority publishes no regional GDP, wage or rent series, so Saudi hubs carry population only; city populations are the 2022 census as given by Saudipedia (rounded), not the census tables, which were not read.":
    "L’autorità statistica non pubblica serie regionali di PIL, retribuzioni o affitti, quindi i poli sauditi riportano solo la popolazione; le popolazioni cittadine sono quelle del censimento 2022 riportate da Saudipedia (arrotondate), non le tavole del censimento, che non sono state lette.",
  "Jeddah and the Eastern Province are thin: no Jeddah employer beyond its port was read, Aramco’s own graduate pages are for Saudis, and the Eastern Province is rated only for Aramco’s headquarters.":
    "Gedda e la Provincia Orientale sono poco coperte: non è stato letto alcun datore di lavoro di Gedda oltre al suo porto, le pagine di Aramco per laureati sono per sauditi, e la Provincia Orientale è valutata solo per la sede di Aramco.",
  "Country brief: Riyadh, Jeddah and the Eastern Province, rules, employers and standing":
    "Dossier sul paese: Riad, Gedda e la Provincia Orientale, regole, datori di lavoro e posizionamento",
  "§1–3 Gulf work rules, Saudisation, hiring evidence, pay and safety":
    "§1–3 regole del lavoro nel Golfo, saudizzazione, prove di assunzione, stipendi e sicurezza",
  "Riyadh consulting pay and openness to European juniors":
    "Stipendi della consulenza a Riad e apertura ai junior europei",
  "The capital, home of the sovereign fund and of multinationals’ regional headquarters":
    "La capitale, sede del fondo sovrano e delle sedi regionali delle multinazionali",
  "Public investment":
    "Investimenti pubblici",
  "Government":
    "Pubblica amministrazione",
  "graduate programme for Saudi nationals":
    "programma per laureati riservato ai cittadini sauditi",
  "at least 15 staff each, 3 of them C-level":
    "almeno 15 dipendenti ciascuna, 3 dei quali dirigenti di vertice",
  "Multinationals’ regional headquarters":
    "Le sedi regionali delle multinazionali",
  "180 by November 2023; 450 foreign investors licensed later":
    "180 a novembre 2023; in seguito autorizzati 450 investitori esteri",
  "Regional-headquarters licences":
    "Licenze per sedi regionali",
  "Riyadh graduate and student postings, mostly needing existing work rights":
    "annunci per laureati e studenti a Riad, per lo più con diritto al lavoro già acquisito",
  "student and graduate programmes for Saudis":
    "programmi per studenti e neolaureati riservati ai sauditi",
  "46th in the world, third in the Middle East":
    "46º al mondo, terzo in Medio Oriente",
  "Financial centre":
    "Centro finanziario",
  "The Red Sea port city and commercial centre":
    "La città portuale e commerciale sul Mar Rosso",
  "Ports and logistics":
    "Porti e logistica",
  "Trade":
    "Commercio",
  "Tourism":
    "Turismo",
  "capacity to rise to four million TEU":
    "capacità in aumento a quattro milioni di TEU",
  "Jeddah Islamic Port":
    "Porto islamico di Gedda",
  "not among the 117 centres of the Global Financial Centres Index":
    "non tra i 117 centri del Global Financial Centres Index",
  "The Eastern Province, home of Aramco":
    "La Provincia Orientale, sede di Aramco",
  "Manufacturing":
    "Manifattura",
  "headquarters in Dhahran; Fortune Global 500 rank 5, about 76,000 staff":
    "sede a Dhahran; 5ª nella Fortune Global 500, circa 76.000 dipendenti",
  "five to 10 years of experience required":
    "servono da cinque a 10 anni di esperienza",
  "323,110 in manufacturing and 928,796 in construction (Q2 2026)":
    "323.110 nella manifattura e 928.796 nelle costruzioni (2º trimestre 2026)",
  "Eastern Region employment":
    "Occupazione nella Regione Orientale",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "The Public Investment Fund’s 12-month Graduate Development Program is aimed at, and open only to, Saudi nationals; 1,033 graduates have enrolled over nine cohorts.":
    "Il Graduate Development Program di 12 mesi del Public Investment Fund è rivolto e aperto solo ai cittadini sauditi; vi si sono iscritti 1.033 laureati in nove edizioni.",
  "The labour ministry announced in January 2026 Saudisation of 60% in marketing and sales professions (in force from 19 April 2026), 30% in 46 engineering professions (from 30 June 2026) and 70% in 12 procurement professions, and announced a new phase from 2026 to localise more than 340,000 private-sector jobs.":
    "Il ministero del lavoro ha annunciato a gennaio 2026 una saudizzazione del 60% nelle professioni di marketing e vendite (in vigore dal 19 aprile 2026), del 30% in 46 professioni ingegneristiche (dal 30 giugno 2026) e del 70% in 12 professioni degli acquisti, e ha annunciato una nuova fase dal 2026 per localizzare oltre 340.000 posti nel settore privato.",
  "Since 25 March 2024, 40% of roles such as business consultant, financial-advisory specialist and project manager in consulting firms must be held by Saudi nationals.":
    "Dal 25 marzo 2024 il 40% di ruoli come consulente aziendale, specialista di consulenza finanziaria e project manager nelle società di consulenza deve essere occupato da cittadini sauditi.",
  "Since 1 January 2024 most foreign companies without a licensed regional headquarters in the Kingdom cannot win government contracts; a headquarters must hire at least 15 staff within a year, 3 of them C-level, and is exempt from Saudisation for 10 years.":
    "Dal 1° gennaio 2024 la maggior parte delle aziende estere senza una sede regionale autorizzata nel Regno non può vincere appalti pubblici; una sede deve assumere almeno 15 persone entro un anno, 3 delle quali dirigenti di vertice, ed è esente dalla saudizzazione per 10 anni.",
  "The UK Foreign Office advises against all travel within 10 km of the Yemen border and all but essential travel from 10 to 80 km of it, now including Abha and Khamis Mushait; since 13 July 2026 the Houthis have launched missiles and drones at Saudi cities, Riyadh among them.":
    "Il Foreign Office britannico sconsiglia tutti i viaggi entro 10 km dal confine con lo Yemen e quelli non essenziali tra 10 e 80 km, ora comprese Abha e Khamis Mushait; dal 13 luglio 2026 gli Houthi hanno lanciato missili e droni contro città saudite, tra cui Riad.",
  "The Saudi Ports Authority and DP World are expanding the container terminal at Jeddah Islamic Port, a SAR 3 billion investment raising capacity from 1.8 million to four million TEU.":
    "L’Autorità portuale saudita e DP World stanno ampliando il terminal container del porto islamico di Gedda, un investimento di 3 miliardi di SAR che porta la capacità da 1,8 a quattro milioni di TEU.",
  "The Global Financial Centres Index 40 (September 2026) ranks Riyadh 46th of 117 financial centres (61st in the March 2026 edition), fourth in the Middle East and Africa after Dubai (9th), Abu Dhabi (13th) and Casablanca (38th); Doha is 52nd and Kuwait City 60th, and Jeddah is not listed.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Riad al 46º posto su 117 centri finanziari (61º nell’edizione di marzo 2026), al quarto posto in Medio Oriente e Africa dopo Dubai (9º), Abu Dhabi (13º) e Casablanca (38º); Doha è 52ª e Kuwait City 60ª, e Gedda non è presente.",
  "Startup Genome ranks Riyadh third among the Middle East and North Africa’s start-up ecosystems in 2026, after Tel Aviv and Dubai, and puts Abu Dhabi fourth.":
    "Startup Genome pone Riad al terzo posto tra gli ecosistemi di start-up del Medio Oriente e Nord Africa nel 2026, dopo Tel Aviv e Dubai, e Abu Dhabi al quarto.",
  "The investment minister said on 8 November 2023 that Saudi Arabia had issued 180 regional-headquarters licences, against a target of 160 for the year, and the state news agency later headlined that 450 foreign investors had been licensed; a foreign company that wants government contracts must base its regional headquarters in Riyadh.":
    "Il ministro degli investimenti ha dichiarato l’8 novembre 2023 che l’Arabia Saudita aveva rilasciato 180 licenze per sedi regionali, contro un obiettivo di 160 per l’anno, e l’agenzia di stampa statale ha poi titolato che erano stati autorizzati 450 investitori esteri; un’azienda straniera che vuole appalti pubblici deve collocare la propria sede regionale a Riad.",
  "As of the second quarter of 2025 Saudi Arabia’s unemployment rate was 2.8% overall and 6.8% for Saudis, 52.8% of employed Saudis worked in the private sector, and 35.8% of Saudis had tertiary education against 24.4% of expatriates.":
    "Nel secondo trimestre 2025 il tasso di disoccupazione dell’Arabia Saudita era del 2,8% in generale e del 6,8% tra i sauditi, il 52,8% dei sauditi occupati lavorava nel settore privato e il 35,8% dei sauditi aveva un’istruzione terziaria contro il 24,4% degli espatriati.",
  "In the second quarter of 2026 the Riyadh region’s three largest employing activities were construction (1,403,894 employees), administrative and support services (937,517) and wholesale and retail trade (678,141); its registered employees numbered 7,672,179 and the Saudi unemployment rate was 4.2%.":
    "Nel secondo trimestre 2026 le tre attività con più occupati nella regione di Riad erano le costruzioni (1.403.894 addetti), i servizi amministrativi e di supporto (937.517) e il commercio all’ingrosso e al dettaglio (678.141); i dipendenti registrati erano 7.672.179 e il tasso di disoccupazione dei sauditi era del 4,2%.",
  "The Eastern Region had 5,125,254 residents in the 2022 census; in the second quarter of 2026 its largest employing activities were construction (928,796 employees), manufacturing (323,110) and wholesale and retail trade (260,954), and the Saudi unemployment rate was 5.3%.":
    "La Regione Orientale aveva 5.125.254 residenti nel censimento del 2022; nel secondo trimestre 2026 le sue attività con più occupati erano le costruzioni (928.796 addetti), la manifattura (323.110) e il commercio all’ingrosso e al dettaglio (260.954), e il tasso di disoccupazione dei sauditi era del 5,3%.",
  "Fortune’s 2026 Global 500 ranks Saudi Aramco fifth in the world, headquartered in Dhahran, with revenue of $445.5 billion and 76,664 employees; Aramco itself reports a workforce of more than 76,000.":
    "La Global 500 di Fortune del 2026 pone Saudi Aramco al quinto posto nel mondo, con sede a Dhahran, ricavi di 445,5 miliardi di $ e 76.664 dipendenti; Aramco stessa dichiara una forza lavoro di oltre 76.000 persone.",
  "Aramco’s page for international applicants asks for a minimum of five to 10 years of applicable experience, in engineering, geosciences, drilling, R&D, finance, law and administration, and names no graduate programme for non-Saudis.":
    "La pagina di Aramco per i candidati internazionali chiede un minimo da cinque a 10 anni di esperienza pertinente, in ingegneria, geoscienze, perforazione, R&S, finanza, diritto e amministrazione, e non cita alcun programma per laureati non sauditi.",
  "SABIC’s student and fresh-graduate programmes in the Middle East and Africa say they \"attract and nurture young Saudi talents\", and its Basic Operation Training states \"The applicant has to be Saudi\".":
    "I programmi di SABIC per studenti e neolaureati in Medio Oriente e Africa dicono di \"attrarre e far crescere giovani talenti sauditi\", e il suo Basic Operation Training afferma che \"il candidato deve essere saudita\".",
  "PwC Middle East’s postings for Riyadh and other Saudi offices require candidates to be eligible to work without PwC sponsorship, while for Qatar and the UAE sponsorship \"may\" be available; BCG Saudi advertises Visiting Associate roles in Riyadh for students graduating between November 2026 and September 2027 without stating nationality rules.":
    "Gli annunci di PwC Middle East per Riad e le altre sedi saudite richiedono candidati con diritto a lavorare senza sponsorizzazione di PwC, mentre per Qatar ed Emirati la sponsorizzazione \"può\" essere disponibile; BCG Saudi pubblica ruoli di Visiting Associate a Riad per studenti che si laureano tra novembre 2026 e settembre 2027 senza indicare regole di nazionalità.",
  "The 2022 census puts the population of Riyadh city at about 6.9 million, Jeddah at about 3.7 million, Mecca at about 2.4 million, Medina at about 1.4 million and Dammam at about 1.4 million; Riyadh, Makkah and the Eastern Province hold about 67.5% of the Kingdom’s 32,175,224 residents.":
    "Il censimento del 2022 stima la popolazione della città di Riad in circa 6,9 milioni, Gedda in circa 3,7 milioni, La Mecca in circa 2,4 milioni, Medina in circa 1,4 milioni e Dammam in circa 1,4 milioni; Riad, La Mecca e la Provincia Orientale contano circa il 67,5% dei 32.175.224 residenti del Regno.",
  "Saudi employment documents must be issued in Arabic, and standard Qiwa contracts are Arabic or Arabic and English side by side with the Arabic prevailing; Riyad Bank's 2026 graduate programme asks for advanced English; no source measured the English or Arabic level employers require of graduates.":
    "I documenti di lavoro sauditi devono essere redatti in arabo, e i contratti standard su Qiwa sono in arabo o in arabo e inglese affiancati con prevalenza dell’arabo; il programma per laureati 2026 di Riyad Bank chiede inglese avanzato; nessuna fonte ha misurato il livello di inglese o arabo richiesto dai datori di lavoro ai laureati.",
  "Graduate recruiting in Saudi Arabia runs on university fairs and rolling postings rather than one national season: King Abdulaziz University held its 13th Career Forum in Jeddah on 6-8 April 2026, KFUPM its fair in Dhahran on 28-30 April 2026 with more than 70 organisations, and PwC Middle East's Riyadh graduate postings for 2026 appeared on 17 November 2025 and 8 July 2026; for an expatriate, the work visa takes 8 to 14 weeks in practice.":
    "La selezione dei laureati in Arabia Saudita si basa su fiere universitarie e annunci continui più che su un’unica stagione nazionale: la King Abdulaziz University ha tenuto il suo 13º Career Forum a Gedda il 6-8 aprile 2026, il KFUPM la sua fiera a Dhahran il 28-30 aprile 2026 con più di 70 organizzazioni, e gli annunci di PwC Middle East per laureati a Riad per il 2026 sono comparsi il 17 novembre 2025 e l’8 luglio 2026; per un espatriato il visto di lavoro richiede nella pratica da 8 a 14 settimane.",
  "The Saudi unemployment rate was 6.4% in the first quarter of 2026 and 6.5% in the second (3.1% and 3.0% overall), with 13.8% for Saudi men and 20.4% for Saudi women aged 15 to 24 in the first quarter; only 42% of employed Saudis with tertiary education worked in the private sector in 2025; no graduate-specific unemployment figure and none for expatriate graduates was found.":
    "Il tasso di disoccupazione dei sauditi era del 6,4% nel primo trimestre 2026 e del 6,5% nel secondo (3,1% e 3,0% in complesso), con il 13,8% per gli uomini sauditi e il 20,4% per le donne saudite tra 15 e 24 anni nel primo trimestre; solo il 42% dei sauditi occupati con istruzione terziaria lavorava nel settore privato nel 2025; non è stato trovato alcun dato specifico sulla disoccupazione dei laureati né sui laureati stranieri.",
  "Hays's Salary Guide 2026 for Saudi Arabia has 74% of firms planning to grow headcount in 2026 and 62% having grown in 2025, with recruitment activity in Riyadh (69%), Jeddah (43%) and the Eastern Province (37%), concentrated in tech, construction, property, finance and banking.":
    "La Salary Guide 2026 di Hays per l’Arabia Saudita indica che il 74% delle aziende prevede di aumentare l’organico nel 2026 e il 62% lo ha aumentato nel 2025, con l’attività di selezione a Riad (69%), Gedda (43%) e nella Provincia Orientale (37%), concentrata in tecnologia, costruzioni, immobiliare, finanza e banche.",
  "Jisr's 2025-2026 hiring report found Saudis were 41% of new hires, Riyadh took more than half of all new hires, and close to 60% of HR leaders expected expatriate numbers to shrink further, with foreign hiring focused on highly specialised roles.":
    "Il rapporto sulle assunzioni 2025-2026 di Jisr ha rilevato che i sauditi erano il 41% delle nuove assunzioni, che Riad ha raccolto più della metà di tutte le nuove assunzioni e che quasi il 60% dei responsabili HR si aspettava un’ulteriore riduzione degli espatriati, con le assunzioni di stranieri concentrate su ruoli molto specializzati."
});

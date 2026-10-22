/* Atlas record: United Arab Emirates. Read 2 and 3 October 2026; log P34
 * (research/verification/round-4a.md, round-5d.md). Outside Europe, so routes are given
 * for EU/EEA/Swiss and UK passports only. Gulf employer rules and the
 * Emiratisation charge come from research/places/gulf-and-central-eastern-europe.md, verified in
 * rounds 3a and 3g. Round 5d (3 October 2026) added standing, metrics for the two emirates
 * (population and GDP from the emirates' statistics offices), the GFCI and Startup Genome
 * rankings, and Dubai's finance share of GDP; Dubai's finance rating is now dominant. Brief:
 * research/countries/ae-united-arab-emirates.md. */

ATLAS.add({
  id: "AE",
  checked: "2026-10-03",
  log: "P34",
  summary: "Two financial centres a hundred kilometres apart: Dubai, with the region’s largest regulated finance community and its main tech district, and Abu Dhabi, home to the sovereign funds and a fast-growing asset-management and AI scene. Graduate schemes at the biggest employers are for UAE nationals; Europeans usually enter through open roles or transfers.",
  sectors: ["Banking and wealth management", "Asset management and sovereign funds", "Technology", "Logistics and aviation", "Energy", "Real estate and tourism"],
  roles: ["finance", "software", "it"],
  hubs: [
    {
      id: "dubai", name: "Dubai", lat: 25.2, lon: 55.27,
      knownFor: "Regional headquarters for banks, wealth managers and tech firms",
      why: ["ae-dxb-difc", "ae-dxb-dic", "ae-gfci", "ae-dxb-gdp", "ae-dxb-fin", "ae-gser"],
      sectors: ["Banking", "Wealth and asset management", "Insurance", "Technology", "Ports and logistics"],
      employers: [
        { name: "DIFC", note: "1,052 regulated firms, 50,200 workers", c: "ae-dxb-difc" },
        {
          name: "Dubai Internet City",
          note: "Google, Oracle, SAP, Amazon, IBM among 4,000 companies",
          c: "ae-dxb-dic"
        },
        { name: "DP World, Jebel Ali", note: "the region’s main container port", c: "ae-dxb-port" },
        {
          name: "Emirates Group",
          note: "airline group headquartered in Dubai; Fortune Global 500 rank 474",
          c: "ae-emirates"
        },
        {
          name: "Emirates NBD",
          note: "30,000 employees; graduate programmes presented for UAE nationals",
          c: "ae-enbd"
        },
        { t: "Financial and insurance activities", note: "12% of Dubai’s GDP", c: "ae-dxb-fin" }
      ],
      demand: {
        business: ["present", "ae-emirates"],
        finance: ["dominant", "ae-dxb-difc", "ae-gfci", "ae-dxb-fin"],
        logistics: ["strong", "ae-dxb-port", "ae-emirates"],
        it: ["strong", "ae-dxb-dic", "ae-dxb-innov"],
        software: ["strong", "ae-dxb-dic", "ae-dxb-innov"],
        ai: ["present", "ae-dxb-innov"],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["strong", "ae-dxb-difc"],
        am: ["strong", "ae-dxb-difc"],
        vc: ["present", "ae-gser"],
        ib: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [5, 5, 3], c: ["ae-gfci", "ae-dxb-difc", "ae-dxb-fin"] },
        { f: "software", s: [5, 4, 2], c: ["ae-gser", "ae-gser-emerging", "ae-dxb-dic"] },
        { f: "it", s: [5, 4, 2], c: ["ae-gser", "ae-dxb-dic"] },
        { f: "logistics", s: [4, 3, 2], c: ["ae-dxb-port", "ae-emirates"] }
      ],
      metrics: {
        pop: {
          v: 4248200,
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://www.dubai.ae/dubai-fact-sheet",
          by: "Government of Dubai, Dubai fact sheet: population of the Emirate of Dubai at the end of 2024",
          seen: "2026-10-03"
        },
        gdp: {
          v: 442.94,
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://www.dubai.ae/dubai-fact-sheet",
          by: "Government of Dubai, Dubai fact sheet: GDP of the Emirate of Dubai at constant prices, AED 442.942 billion (AED 540.677 billion at current prices)",
          seen: "2026-10-03",
          cur: "AED"
        }
      },
      programmes: []
    },
    {
      id: "abu-dhabi", name: "Abu Dhabi", lat: 24.45, lon: 54.38,
      knownFor: "Sovereign wealth, asset managers and an AI start-up push",
      why: ["ae-auh-adgm", "ae-auh-hub71", "ae-gfci", "ae-auh-gdp", "ae-auh-pop", "ae-gser", "ae-gser-emerging"],
      sectors: ["Sovereign wealth funds", "Asset management", "Energy", "AI and start-ups", "Government"],
      employers: [
        { name: "ADGM", note: "347 financial institutions, 171 asset and fund managers", c: "ae-auh-adgm" },
        { name: "Hub71", note: "390 start-ups, with an AI programme", c: "ae-auh-hub71" },
        { name: "ADIA, Mubadala, ADNOC", note: "graduate programmes for UAE nationals", c: "ae-natl" },
        {
          t: "Abu Dhabi’s economy",
          note: "real GDP of about AED 1.2 trillion in 2024, 54.7% non-oil",
          c: "ae-auh-gdp"
        }
      ],
      demand: {
        finance: ["strong", "ae-auh-adgm", "ae-gfci"],
        software: ["present", "ae-auh-hub71"],
        ai: ["strong", "ae-gser", "ae-auh-hub71"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        am: ["strong", "ae-auh-adgm"],
        vc: ["present", "ae-auh-hub71"],
        ib: 'gap', banking: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [4, 4, 3], c: ["ae-gfci", "ae-auh-adgm"] },
        { f: "ai", s: [4, 4, 2], c: ["ae-gser", "ae-gser-emerging", "ae-auh-hub71"] }
      ],
      metrics: {
        pop: {
          v: 4135985,
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://dge.gov.ae/en/news/2025-scad-population-update/",
          by: "Statistics Centre Abu Dhabi, population of the Emirate of Abu Dhabi in 2024 (4,135,985; the Abu Dhabi Region alone is about 2.8 million)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 1200,
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://www.mediaoffice.abudhabi/en/economy/statistics-centre-abu-dhabi-reports-3-percent-growth-in-emirates-gdp-in-2024/",
          by: "Abu Dhabi Media Office, reporting Statistics Centre Abu Dhabi: real GDP of the Emirate of Abu Dhabi in 2024, AED 1.2 trillion as published (rounded; constant prices)",
          seen: "2026-10-03",
          cur: "AED"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["ae-lang"] },
    { k: "Recruiting calendar", c: ["ae-cal"] },
    { k: "Graduate labour market", c: ["ae-natl", "ae-emiratisation", "ae-grad-lab"] },
    { k: "Tax and net pay", c: ["ae-tax", "ae-aire"] },
    { k: "Pay", c: ["ae-salary"] },
    { k: "Where demand is now", c: ["ae-dxb-fin", "ae-auh-gdp", "ae-gser"] }
  ],

  advisory: ["ae-fcdo"],

  briefs: [
    [
      "countries/ae-united-arab-emirates.md",
      "Country brief: Dubai and Abu Dhabi, employers, standing and who the schemes are for"
    ],
    ["places/gulf-and-central-eastern-europe.md", "§1–3 Gulf work rules, hiring evidence, pay, tax and safety"],
    ["places/visas-and-work-rights.md", "§8 UAE Golden visa"],
    ["money/salaries-and-roi.md", "§5 net pay and rent, Dubai"]
  ],
  gaps: [
    "UAE visas, residency rules, MoHRE contracts, Green and Golden visas and student routes are fully verified in visas_immigration/uae/uae_visas_immigration_guide.md.",
    "No employer-stated entry pay for expatriate graduates was found; the only pay evidence is a recruiter’s guide saying most positions pay AED 10,000 to 40,000 a month.",
    "The Italian foreign ministry’s travel advice (Viaggiare Sicuri) could not be read; only the UK’s is cited.",
    "The UAE’s agreement with the EU does not cover Swiss, Norwegian, Icelandic or Irish citizens; their entry rules are not covered here.",
    "Metrics are for the emirates, not the cities: Dubai’s GDP is at constant prices and Abu Dhabi’s is the published rounded figure; no average pay or rent figure from an official source was found, so neither is shown.",
    "The Startup Genome ranks for Dubai and Abu Dhabi are reported through news sites for the global list (Dubai 12th and Abu Dhabi 41–50 among emerging ecosystems); the regional ranks come from Startup Genome’s own page.",
    "Economics, accounting, management, marketing, analytics, data science and big data are not rated: no source read measures them by emirate."
  ],

  claims: {
    'ae-natl': { t: "The best-known graduate programmes — ADIA, Mubadala, Emirates NBD, FAB and ADNOC — are for UAE nationals; non-nationals are mostly hired as experienced staff or transfers.", tag: "employer-stated", src: "research/places/gulf-and-central-eastern-europe.md", by: "Employers’ own pages, read 2 Oct 2026, via places/gulf-and-central-eastern-europe.md §2", seen: "2026-10-02" },
    'ae-emiratisation': { t: "Private firms with 50 or more staff must add 2% Emiratis in skilled jobs each year; from 1 July 2026 each unfilled position costs AED 10,000 a month.", tag: "data", src: "https://www.wam.ae/en/article/c0uqocb-mohre-reaffirms-june-deadline-for-private-sector", by: "WAM, quoting the labour ministry, 22 Jun 2026, via places/gulf-and-central-eastern-europe.md", seen: "2026-10-02" },
    'ae-tax': { t: "The UAE levies no income tax on individuals; VAT is 5%.", tag: "data", src: "https://u.ae/en/information-and-services/finance-and-investment/taxation", by: "u.ae, taxation", seen: "2026-10-02" },
    'ae-aire': { t: "Italians who move without registering with AIRE are presumed to remain Italian tax residents; for the UAE, registering may not be enough without proof that your life has moved.", tag: "data", src: "research/places/gulf-and-central-eastern-europe.md", by: "Italian foreign ministry note “AIRE e fisco”, 18 Mar 2024, via places/gulf-and-central-eastern-europe.md §3", seen: "2026-10-02" },
    'ae-fcdo': { t: "The UK Foreign Office reports strikes and retaliatory attacks by Iran in the region since 8 July 2026 and warns of flight cancellations and airspace closures; it does not advise against travel to the UAE as a whole.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/united-arab-emirates", by: "FCDO travel advice, UAE (updated 24 Jul 2026)", seen: "2026-10-02" },
    'ae-dxb-difc': { t: "Dubai International Financial Centre counts 1,052 regulated firms — over 290 banks and capital-markets firms, 135 insurers and over 500 wealth and asset managers — and a workforce of 50,200 at the end of 2025.", tag: "data", src: "https://www.difc.com/whats-on/news/dubai-international-financial-centre-announces-landmark-annual-results-for-2025", by: "DIFC Authority, 2025 results (5 Feb 2026)", seen: "2026-10-02" },
    'ae-dxb-innov': { t: "DIFC also hosts 1,677 AI, fintech and innovation companies, up 35% in 2025.", tag: "data", src: "https://www.difc.com/whats-on/news/dubai-international-financial-centre-announces-landmark-annual-results-for-2025", by: "DIFC Authority, 2025 results (5 Feb 2026)", seen: "2026-10-02" },
    'ae-dxb-dic': { t: "Dubai Internet City has about 4,000 companies and more than 31,000 professionals, among them Oracle, SAP, Amazon, Google, IBM and Cisco, and generates 65% of Dubai’s technology-sector output.", tag: "employer-stated", src: "https://tecomgroup.ae/press-release/new-study-reveals-dubai-internet-citys-aed-100-billion-impact-on-dubais-economy", by: "TECOM Group, 19 Feb 2025", seen: "2026-10-02" },
    'ae-dxb-port': { t: "Jebel Ali handled 15.5 million TEU in 2024, its highest since 2015; DP World calls it the region’s leading trade and logistics hub.", tag: "employer-stated", src: "https://www.dpworld.com/en/news/dp-world-records-highest-cargo-volumes-at-jebel-ali-port-since-2015", by: "DP World, 19 Feb 2025", seen: "2026-10-02" },
    'ae-auh-adgm': { t: "Abu Dhabi Global Market had 347 financial institutions, 171 asset and fund managers and a workforce of 44,339 at the end of 2025, up by more than half in a year.", tag: "data", src: "https://www.adgm.com/media/announcements/adgm-celebrates-decade-of-operations-with-36-surge-in-aum-51-increase-in-workforce-and-over-12000-licences-in-2025", by: "ADGM, 2025 results (30 Mar 2026)", seen: "2026-10-02" },
    'ae-auh-hub71': { t: "Abu Dhabi’s Hub71 counts 390 start-ups that have raised more than US$2.7 billion, with dedicated programmes for AI, climate tech, digital assets and life sciences.", tag: "employer-stated", src: "https://www.hub71.com/latest-news/press-release/hub71-startups-surpass-$2.7-billion-in-funding-as-abu-dhabi-gains-momentum-as-a-global-techhub", by: "Hub71, 8 Jun 2026", seen: "2026-10-02" },
    'ae-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Dubai 9th of 117 financial centres (7th in the March 2026 edition) and first in the Middle East and Africa, and Abu Dhabi 13th (21st in March) and second, ahead of Casablanca (38th), Riyadh (46th), Doha (52nd) and Kuwait City (60th).", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Tables 1 and 12", seen: "2026-10-03" },
    'ae-gser': { t: "Startup Genome’s July 2026 report on the Middle East and North Africa ranks Tel Aviv first, Dubai second (ecosystem value US$30 billion, US$1.14 billion of Series A funding), Riyadh third and Abu Dhabi fourth (US$73 billion, with an AI-native ecosystem value of US$5.4 billion), and Doha eighth.", tag: "data", src: "https://startupgenome.com/insights/menas-startup-ecosystems-become-market-of-capability", by: "Startup Genome, MENA’s startup ecosystems become market of capability (15 Jul 2026)", seen: "2026-10-03" },
    'ae-gser-emerging': { t: "Reports on Startup Genome’s 2026 global ranking say Dubai is 12th among the top 100 emerging ecosystems, level with Riyadh at four unicorns, and Abu Dhabi has moved into the 41–50 band, up from 51–60.", tag: "practitioner consensus", src: "https://mena.entrepreneur.com/business-news/abu-dhabi-enters-worlds-top-50-startup-ecosystems-as-value-surges-to-73-4-billion", by: "Entrepreneur Middle East (18 Jun 2026) and Sharikat Mubasher (25 Jun 2026), secondary reports of Startup Genome", seen: "2026-10-03" },
    'ae-dxb-gdp': { t: "Dubai’s GDP was AED 442.9 billion at constant prices in 2024 (AED 540.7 billion at current prices, up 5.8%), and its population reached 4,248,200 by the end of 2024.", tag: "data", src: "https://www.dubai.ae/dubai-fact-sheet", by: "Government of Dubai, Dubai fact sheet (dubai.ae)", seen: "2026-10-03" },
    'ae-dxb-fin': { t: "Dubai’s economy produced about AED 355 billion in the first nine months of 2025, up 4.7%; financial and insurance activities were worth AED 42.8 billion, 12% of GDP.", tag: "data", src: "https://mediaoffice.ae/en/news/2026/january/31-01/dubai-gdp-first-9-months-of-2025", by: "Dubai Media Office (31 Jan 2026), Dubai GDP in the first nine months of 2025", seen: "2026-10-03" },
    'ae-auh-gdp': { t: "Abu Dhabi’s real GDP reached AED 1.2 trillion in 2024, up 3.8%; non-oil activities made AED 644.3 billion, a record 54.7% of the total.", tag: "data", src: "https://www.mediaoffice.abudhabi/en/economy/statistics-centre-abu-dhabi-reports-3-percent-growth-in-emirates-gdp-in-2024/", by: "Abu Dhabi Media Office, reporting Statistics Centre Abu Dhabi (28 Mar 2025)", seen: "2026-10-03" },
    'ae-auh-pop': { t: "Abu Dhabi’s population grew 7.5% in 2024 to 4,135,985 people, 51% more than in 2014.", tag: "data", src: "https://dge.gov.ae/en/news/2025-scad-population-update/", by: "Statistics Centre Abu Dhabi, population update, via Abu Dhabi Department of Government Enablement (30 Jun 2025)", seen: "2026-10-03" },
    'ae-emirates': { t: "Fortune’s 2026 Global 500 lists the Emirates Group at rank 474, headquartered in Dubai, with 130,919 employees.", tag: "data", src: "https://fortune.com/ranking/global500/", by: "Fortune, Global 500 2026, Emirates Group company profile (market value as of 13 July 2026)", seen: "2026-10-03" },
    'ae-enbd': { t: "Emirates NBD’s careers page counts 30,000 employees and presents its graduate programmes within its Emiratisation offer for UAE nationals.", tag: "employer-stated", src: "https://www.emiratesnbd.com/en/careers", by: "Emirates NBD, careers", seen: "2026-10-03" },
    'ae-lang': { t: "In a SkillDrift analysis of 7,025 UAE job postings, English was named in 21.3% and Arabic in 7.4% (13.2% in Saudi Arabia and 13.5% in Qatar), on a sample weighted to operations, engineering, sales and hospitality; the statutory job offer is issued in Arabic and English plus a third language the worker understands.", tag: "practitioner consensus", src: "https://www.khaleejtimes.com/business/uae-jobs-communication-tops-uae-employers-wish-list-as-human-skills-lead-hiring", by: "Khaleej Times, 5 Oct 2026, reporting SkillDrift's index of 7,025 UAE postings; u.ae on the job offer (read 8 Oct 2026)", seen: "2026-10-08" },
    'ae-cal': { t: "Graduate intakes are staggered rather than national: PwC Middle East’s assurance graduate programme starts in September 2026 and its summer internship runs from June to August 2026; Dubai Business Associates, a nine-month programme open worldwide, closed applications on 1 March 2026 for a September start; Emirates NBD takes one Ruwad cohort a year and Bedaya graduates at several points in the year; ADIA runs two cycles for UAE nationals, with applications due before 1 February and before 6 July.", tag: "employer-stated", src: "https://www.consultancy-me.com/news/12280/dubais-fully-funded-graduate-training-programme-kicks-off-2026-applications-process", by: "Consultancy-me.com on Dubai Business Associates; University of Aberdeen relaying PwC Middle East; Emirates NBD graduate page; library note on ADIA (read 8 Oct 2026)", seen: "2026-10-08" },
    'ae-grad-lab': { t: "The Federal Competitiveness and Statistics Centre reports UAE unemployment of 1.9% in 2024 (2.1% in 2023) and youth unemployment, ages 15 to 24, of 5.2% (16.7% in 2023); Khaleej Times quoted employers in June 2026 saying internships, project portfolios and certifications have become the minimum for entry-level roles.", tag: "data", src: "https://gulfnews.com/uae/government/uae-among-worlds-lowest-in-unemployment-as-labour-force-hits-record-94-million-1.500309490", by: "Gulf News on the FCSC labour force survey, updated 16 Oct 2025; Khaleej Times, 22 Jun 2026 (both read 8 Oct 2026)", seen: "2026-10-08" },
    'ae-salary': { t: "In Michael Page’s UAE Salary Guide 2026, more than 60% of the positions pay between AED 10,000 and AED 40,000 a month, and technology, digital, finance and accounting make up a third of them.", tag: "practitioner consensus", src: "https://thenational.shorthandstories.com/uae-salary-guide-2026-trends/", by: "The National (Abu Dhabi), UAE salary guide 2026, reporting Michael Page", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "Two financial centres a hundred kilometres apart: Dubai, with the region’s largest regulated finance community and its main tech district, and Abu Dhabi, home to the sovereign funds and a fast-growing asset-management and AI scene. Graduate schemes at the biggest employers are for UAE nationals; Europeans usually enter through open roles or transfers.":
    "Due centri finanziari a cento chilometri l’uno dall’altro: Dubai, con la maggiore comunità finanziaria regolamentata della regione e il suo principale distretto tecnologico, e Abu Dhabi, sede dei fondi sovrani e di un settore dell’asset management e dell’IA in rapida crescita. I programmi per neolaureati dei maggiori datori di lavoro sono riservati ai cittadini emiratini; gli europei entrano di solito con posizioni aperte o trasferimenti.",
  "Banking and wealth management":
    "Banche e gestione patrimoniale",
  "Asset management and sovereign funds":
    "Asset management e fondi sovrani",
  "Technology":
    "Tecnologia",
  "Logistics and aviation":
    "Logistica e aviazione",
  "Energy":
    "Energia",
  "Real estate and tourism":
    "Immobiliare e turismo",
  "UAE visas, residency rules, MoHRE contracts, Green and Golden visas and student routes are fully verified in visas_immigration/uae/uae_visas_immigration_guide.md.":
    "Le norme sui visti degli Emirati, le regole di residenza, i contratti MoHRE, i Green e Golden visa e i percorsi per studenti sono integralmente verificati in visas_immigration/uae/uae_visas_immigration_guide.md.",
  "No employer-stated entry pay for expatriate graduates was found; the only pay evidence is a recruiter’s guide saying most positions pay AED 10,000 to 40,000 a month.":
    "Non è stato trovato alcuno stipendio d’ingresso dichiarato dai datori di lavoro per neolaureati espatriati; l’unica prova sugli stipendi è la guida di un selezionatore secondo cui la maggior parte delle posizioni paga da 10.000 a 40.000 AED al mese.",
  "The Italian foreign ministry’s travel advice (Viaggiare Sicuri) could not be read; only the UK’s is cited.":
    "Non è stato possibile leggere gli avvisi di viaggio della Farnesina (Viaggiare Sicuri); è citato solo quello britannico.",
  "The UAE’s agreement with the EU does not cover Swiss, Norwegian, Icelandic or Irish citizens; their entry rules are not covered here.":
    "L’accordo degli Emirati con l’UE non copre i cittadini svizzeri, norvegesi, islandesi o irlandesi; le loro regole d’ingresso non sono trattate qui.",
  "Metrics are for the emirates, not the cities: Dubai’s GDP is at constant prices and Abu Dhabi’s is the published rounded figure; no average pay or rent figure from an official source was found, so neither is shown.":
    "Le metriche riguardano gli emirati, non le città: il PIL di Dubai è a prezzi costanti e quello di Abu Dhabi è la cifra arrotondata pubblicata; non è stata trovata alcuna cifra ufficiale su retribuzione media o affitto, quindi nessuna delle due è mostrata.",
  "The Startup Genome ranks for Dubai and Abu Dhabi are reported through news sites for the global list (Dubai 12th and Abu Dhabi 41–50 among emerging ecosystems); the regional ranks come from Startup Genome’s own page.":
    "I posti di Startup Genome per Dubai e Abu Dhabi sono riportati da siti di notizie per la classifica globale (Dubai 12ª e Abu Dhabi 41–50 tra gli ecosistemi emergenti); i posti regionali vengono dalla pagina di Startup Genome.",
  "Economics, accounting, management, marketing, analytics, data science and big data are not rated: no source read measures them by emirate.":
    "Economia, contabilità, management, marketing, analytics, data science e big data non sono valutati: nessuna fonte letta li misura per emirato.",
  "Country brief: Dubai and Abu Dhabi, employers, standing and who the schemes are for":
    "Dossier sul paese: Dubai e Abu Dhabi, datori di lavoro, posizionamento e a chi sono rivolti i programmi",
  "§1–3 Gulf work rules, hiring evidence, pay, tax and safety":
    "§1–3 regole del lavoro nel Golfo, assunzioni, stipendi, tasse e sicurezza",
  "§8 UAE Golden visa":
    "§8 Golden visa degli Emirati",
  "§5 net pay and rent, Dubai":
    "§5 stipendio netto e affitto, Dubai",
  "Regional headquarters for banks, wealth managers and tech firms":
    "Sedi regionali di banche, gestori patrimoniali e aziende tecnologiche",
  "Banking":
    "Banca",
  "Wealth and asset management":
    "Gestione patrimoniale e asset management",
  "Insurance":
    "Assicurazioni",
  "Ports and logistics":
    "Porti e logistica",
  "1,052 regulated firms, 50,200 workers":
    "1.052 società regolamentate, 50.200 addetti",
  "Google, Oracle, SAP, Amazon, IBM among 4,000 companies":
    "Google, Oracle, SAP, Amazon, IBM tra 4.000 aziende",
  "the region’s main container port":
    "il principale porto container della regione",
  "airline group headquartered in Dubai; Fortune Global 500 rank 474":
    "gruppo aereo con sede a Dubai; posto 474 nella Fortune Global 500",
  "30,000 employees; graduate programmes presented for UAE nationals":
    "30.000 dipendenti; programmi per neolaureati presentati per i cittadini emiratini",
  "12% of Dubai’s GDP":
    "il 12% del PIL di Dubai",
  "Financial and insurance activities":
    "Attività finanziarie e assicurative",
  "Sovereign wealth, asset managers and an AI start-up push":
    "Fondi sovrani, gestori patrimoniali e una spinta sulle start-up di IA",
  "Sovereign wealth funds":
    "Fondi sovrani",
  "Asset management":
    "Asset management",
  "AI and start-ups":
    "IA e start-up",
  "Government":
    "Pubblica amministrazione",
  "347 financial institutions, 171 asset and fund managers":
    "347 istituzioni finanziarie, 171 gestori di patrimoni e di fondi",
  "390 start-ups, with an AI programme":
    "390 start-up, con un programma dedicato all’IA",
  "graduate programmes for UAE nationals":
    "programmi per neolaureati riservati ai cittadini emiratini",
  "real GDP of about AED 1.2 trillion in 2024, 54.7% non-oil":
    "PIL reale di circa 1,2 trilioni di AED nel 2024, il 54,7% non petrolifero",
  "Abu Dhabi’s economy":
    "L’economia di Abu Dhabi",
  "Language":
    "Lingua",
  "Recruiting calendar":
    "Calendario delle selezioni",
  "Graduate labour market":
    "Mercato del lavoro per i laureati",
  "Tax and net pay":
    "Tasse e stipendio netto",
  "Pay":
    "Retribuzioni",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "The best-known graduate programmes — ADIA, Mubadala, Emirates NBD, FAB and ADNOC — are for UAE nationals; non-nationals are mostly hired as experienced staff or transfers.":
    "I programmi per neolaureati più noti — ADIA, Mubadala, Emirates NBD, FAB e ADNOC — sono riservati ai cittadini emiratini; gli stranieri sono assunti per lo più come personale esperto o con trasferimenti.",
  "Private firms with 50 or more staff must add 2% Emiratis in skilled jobs each year; from 1 July 2026 each unfilled position costs AED 10,000 a month.":
    "Le aziende private con 50 o più dipendenti devono aggiungere ogni anno il 2% di emiratini nei lavori qualificati; dal 1° luglio 2026 ogni posizione non coperta costa 10.000 AED al mese.",
  "The UAE levies no income tax on individuals; VAT is 5%.":
    "Gli Emirati non applicano imposte sul reddito alle persone fisiche; l’IVA è del 5%.",
  "Italians who move without registering with AIRE are presumed to remain Italian tax residents; for the UAE, registering may not be enough without proof that your life has moved.":
    "Gli italiani che si trasferiscono senza iscriversi all’AIRE si presumono ancora residenti fiscali in Italia; per gli Emirati l’iscrizione può non bastare senza la prova che la tua vita si è spostata.",
  "The UK Foreign Office reports strikes and retaliatory attacks by Iran in the region since 8 July 2026 and warns of flight cancellations and airspace closures; it does not advise against travel to the UAE as a whole.":
    "Il ministero degli Esteri britannico segnala attacchi e rappresaglie dell’Iran nella regione dall’8 luglio 2026 e avverte di possibili cancellazioni di voli e chiusure dello spazio aereo; non sconsiglia i viaggi negli Emirati nel loro complesso.",
  "Dubai International Financial Centre counts 1,052 regulated firms — over 290 banks and capital-markets firms, 135 insurers and over 500 wealth and asset managers — and a workforce of 50,200 at the end of 2025.":
    "Il Dubai International Financial Centre conta 1.052 società regolamentate — oltre 290 banche e operatori dei mercati dei capitali, 135 assicuratori e oltre 500 gestori patrimoniali — e 50.200 addetti a fine 2025.",
  "DIFC also hosts 1,677 AI, fintech and innovation companies, up 35% in 2025.":
    "Il DIFC ospita anche 1.677 aziende di IA, fintech e innovazione, il 35% in più nel 2025.",
  "Dubai Internet City has about 4,000 companies and more than 31,000 professionals, among them Oracle, SAP, Amazon, Google, IBM and Cisco, and generates 65% of Dubai’s technology-sector output.":
    "Dubai Internet City conta circa 4.000 aziende e oltre 31.000 professionisti, tra cui Oracle, SAP, Amazon, Google, IBM e Cisco, e genera il 65% del prodotto del settore tecnologico di Dubai.",
  "Jebel Ali handled 15.5 million TEU in 2024, its highest since 2015; DP World calls it the region’s leading trade and logistics hub.":
    "Jebel Ali ha movimentato 15,5 milioni di TEU nel 2024, il massimo dal 2015; DP World lo definisce il principale polo commerciale e logistico della regione.",
  "Abu Dhabi Global Market had 347 financial institutions, 171 asset and fund managers and a workforce of 44,339 at the end of 2025, up by more than half in a year.":
    "A fine 2025 l’Abu Dhabi Global Market contava 347 istituzioni finanziarie, 171 gestori di patrimoni e di fondi e 44.339 addetti, oltre la metà in più in un anno.",
  "Abu Dhabi’s Hub71 counts 390 start-ups that have raised more than US$2.7 billion, with dedicated programmes for AI, climate tech, digital assets and life sciences.":
    "L’Hub71 di Abu Dhabi conta 390 start-up che hanno raccolto oltre 2,7 miliardi di dollari, con programmi dedicati a IA, climate tech, asset digitali e scienze della vita.",
  "The Global Financial Centres Index 40 (September 2026) ranks Dubai 9th of 117 financial centres (7th in the March 2026 edition) and first in the Middle East and Africa, and Abu Dhabi 13th (21st in March) and second, ahead of Casablanca (38th), Riyadh (46th), Doha (52nd) and Kuwait City (60th).":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Dubai al 9º posto su 117 centri finanziari (7º nell’edizione di marzo 2026) e al primo in Medio Oriente e Africa, e Abu Dhabi al 13º (21º a marzo) e al secondo, davanti a Casablanca (38º), Riyadh (46º), Doha (52º) e Kuwait City (60º).",
  "Startup Genome’s July 2026 report on the Middle East and North Africa ranks Tel Aviv first, Dubai second (ecosystem value US$30 billion, US$1.14 billion of Series A funding), Riyadh third and Abu Dhabi fourth (US$73 billion, with an AI-native ecosystem value of US$5.4 billion), and Doha eighth.":
    "Il rapporto di luglio 2026 di Startup Genome su Medio Oriente e Nord Africa pone Tel Aviv al primo posto, Dubai al secondo (valore dell’ecosistema 30 miliardi di dollari, 1,14 miliardi di dollari di finanziamenti Series A), Riyadh al terzo e Abu Dhabi al quarto (73 miliardi di dollari, con un ecosistema nativo dell’IA da 5,4 miliardi di dollari), e Doha all’ottavo.",
  "Reports on Startup Genome’s 2026 global ranking say Dubai is 12th among the top 100 emerging ecosystems, level with Riyadh at four unicorns, and Abu Dhabi has moved into the 41–50 band, up from 51–60.":
    "Le cronache sul ranking globale 2026 di Startup Genome dicono che Dubai è al 12º posto tra i primi 100 ecosistemi emergenti, alla pari con Riyadh con quattro unicorni, e che Abu Dhabi è salita nella fascia 41–50, dalla 51–60.",
  "Dubai’s GDP was AED 442.9 billion at constant prices in 2024 (AED 540.7 billion at current prices, up 5.8%), and its population reached 4,248,200 by the end of 2024.":
    "Il PIL di Dubai nel 2024 è stato di 442,9 miliardi di AED a prezzi costanti (540,7 miliardi a prezzi correnti, +5,8%), e la popolazione ha raggiunto 4.248.200 persone a fine 2024.",
  "Dubai’s economy produced about AED 355 billion in the first nine months of 2025, up 4.7%; financial and insurance activities were worth AED 42.8 billion, 12% of GDP.":
    "L’economia di Dubai ha prodotto circa 355 miliardi di AED nei primi nove mesi del 2025, il 4,7% in più; le attività finanziarie e assicurative valevano 42,8 miliardi di AED, il 12% del PIL.",
  "Abu Dhabi’s real GDP reached AED 1.2 trillion in 2024, up 3.8%; non-oil activities made AED 644.3 billion, a record 54.7% of the total.":
    "Il PIL reale di Abu Dhabi ha raggiunto 1,2 trilioni di AED nel 2024, il 3,8% in più; le attività non petrolifere hanno prodotto 644,3 miliardi di AED, un record del 54,7% del totale.",
  "Abu Dhabi’s population grew 7.5% in 2024 to 4,135,985 people, 51% more than in 2014.":
    "La popolazione di Abu Dhabi è cresciuta del 7,5% nel 2024 fino a 4.135.985 persone, il 51% in più rispetto al 2014.",
  "Fortune’s 2026 Global 500 lists the Emirates Group at rank 474, headquartered in Dubai, with 130,919 employees.":
    "La Global 500 di Fortune 2026 elenca il Gruppo Emirates al posto 474, con sede a Dubai e 130.919 dipendenti.",
  "Emirates NBD’s careers page counts 30,000 employees and presents its graduate programmes within its Emiratisation offer for UAE nationals.":
    "La pagina carriere di Emirates NBD conta 30.000 dipendenti e presenta i suoi programmi per neolaureati nell’ambito dell’offerta di emiratizzazione per i cittadini emiratini.",
  "In Michael Page’s UAE Salary Guide 2026, more than 60% of the positions pay between AED 10,000 and AED 40,000 a month, and technology, digital, finance and accounting make up a third of them.":
    "Nella UAE Salary Guide 2026 di Michael Page, oltre il 60% delle posizioni paga tra 10.000 e 40.000 AED al mese, e tecnologia, digitale, finanza e contabilità ne costituiscono un terzo.",
  "In a SkillDrift analysis of 7,025 UAE job postings, English was named in 21.3% and Arabic in 7.4% (13.2% in Saudi Arabia and 13.5% in Qatar), on a sample weighted to operations, engineering, sales and hospitality; the statutory job offer is issued in Arabic and English plus a third language the worker understands.":
    "In un’analisi SkillDrift di 7.025 annunci di lavoro negli Emirati, l’inglese era indicato nel 21,3% e l’arabo nel 7,4% (13,2% in Arabia Saudita e 13,5% in Qatar), su un campione orientato a operations, ingegneria, vendite e ospitalità; l’offerta di lavoro prevista dalla legge è emessa in arabo e inglese più una terza lingua che il lavoratore comprende.",
  "Graduate intakes are staggered rather than national: PwC Middle East’s assurance graduate programme starts in September 2026 and its summer internship runs from June to August 2026; Dubai Business Associates, a nine-month programme open worldwide, closed applications on 1 March 2026 for a September start; Emirates NBD takes one Ruwad cohort a year and Bedaya graduates at several points in the year; ADIA runs two cycles for UAE nationals, with applications due before 1 February and before 6 July.":
    "Gli ingressi dei laureati sono scaglionati e non seguono una stagione nazionale: il programma di revisione per laureati di PwC Middle East inizia a settembre 2026 e il suo stage estivo va da giugno ad agosto 2026; Dubai Business Associates, un programma di nove mesi aperto al mondo, ha chiuso le candidature il 1° marzo 2026 per un inizio a settembre; Emirates NBD prende una coorte Ruwad all’anno e laureati Bedaya in più momenti dell’anno; ADIA gestisce due cicli per cittadini emiratini, con candidature entro il 1° febbraio ed entro il 6 luglio.",
  "The Federal Competitiveness and Statistics Centre reports UAE unemployment of 1.9% in 2024 (2.1% in 2023) and youth unemployment, ages 15 to 24, of 5.2% (16.7% in 2023); Khaleej Times quoted employers in June 2026 saying internships, project portfolios and certifications have become the minimum for entry-level roles.":
    "Il Federal Competitiveness and Statistics Centre riporta una disoccupazione negli Emirati dell’1,9% nel 2024 (2,1% nel 2023) e una disoccupazione giovanile, tra i 15 e i 24 anni, del 5,2% (16,7% nel 2023); a giugno 2026 Khaleej Times ha raccolto la voce di datori di lavoro secondo cui stage, portfolio di progetti e certificazioni sono ormai il minimo per i ruoli di primo livello."
});

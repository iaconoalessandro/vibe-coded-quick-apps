/* Atlas record: Israel. Read 3 October 2026; log P76
 * (research/verification/round-4i.md, round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Israel had no coverage in the research library. The
 * high-tech figures are national (Israel Innovation Authority, April 2025,
 * PDF extracted locally), so they describe the country, not the hub. The
 * Bank of Israel's list of supervised banks sits behind a bot check and was
 * not read; its 2023 list of foreign banks' representative offices was. The
 * advisory repeats the UK Foreign Office's wording. Round 5d (3 October 2026) added
 * standing (Startup Genome 2026, GFCI 40), city populations from the Central Bureau of
 * Statistics (localities file 2023, preliminary), average pay from the National Insurance
 * Institute's wage report (first half of 2025; Tel Aviv and Jerusalem only, the Haifa figure was
 * not in the English release), the Har Hotzvim park in Jerusalem (a new hub, named in the earlier
 * gaps) Intel's Haifa R&D, Check Point, Elbit, the Technion and one Mobileye vacancy snapshot. Brief: research/countries/il-israel.md. */

ATLAS.add({
  id: "IL",
  checked: "2026-10-03",
  log: "P76",
  summary: "A high-tech economy, with about 391,000 high-tech employees, 11.5% of the workforce, and a Tel Aviv start-up ecosystem that Startup Genome puts in the world top five, but employment has stalled since 2022 and R&D roles dominate. Students are generally not allowed to work, and foreign expert routes require employer sponsorship. Read the UK’s travel advice, which rules out several border areas.",
  sectors: ["High-tech and software", "Cybersecurity", "Banking and financial services", "Defence", "Pharmaceuticals"],
  roles: ["software"],
  hubs: [
    {
      id: "tel-aviv", name: "Tel Aviv", lat: 32.08, lon: 34.78,
      knownFor: "Where most foreign banks’ representative offices in Israel are",
      why: ["il-rep", "il-gser", "il-gfci", "il-ht", "il-pop", "il-wage", "il-checkpoint"],
      sectors: ["High-tech and software", "Banking and financial services", "Start-ups"],
      employers: [
        {
          t: "Representative offices of foreign banks",
          note: "10 of the 14 listed are in Tel Aviv (2023)",
          c: "il-rep"
        },
        {
          name: "Check Point",
          note: "international headquarters in Tel Aviv; more than 7,000 staff",
          c: "il-checkpoint"
        },
        { t: "Start-up ecosystem", note: "in the world top five, with $15.6 billion raised in 2025", c: "il-gser" },
        { t: "High-tech employment (national)", note: "about 391,000 people, half in R&D roles", c: "il-ht" },
        { t: "Average monthly pay in the city", note: "NIS 22,359 in the first half of 2025", c: "il-wage" }
      ],
      demand: {
        finance: ["present", "il-rep", "il-gfci"],
        software: ["dominant", "il-gser", "il-ht"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "software", s: [5, 5, 4], c: ["il-gser", "il-ht"] }, { f: "finance", s: [5, 2, 1], c: ["il-gfci", "il-rep"] }],
      metrics: {
        pop: {
          v: 495230,
          year: 2023,
          area: "city",
          tag: "data",
          src: "https://data.gov.il/api/3/action/datastore_search?resource_id=d47a54ff-87f0-44b3-b33a-f284c0c38e5a",
          by: "Central Bureau of Statistics, localities file 2023 (preliminary population of Tel Aviv-Yafo, read through the data.gov.il open-data API)",
          seen: "2026-10-03"
        },
        wage: {
          v: 22359,
          cur: "ILS",
          basis: "mean",
          year: 2025,
          area: "city",
          tag: "data",
          src: "https://www.btl.gov.il/English%20Homepage/About/PressReleases/Pages/dovrotdohsachar2025.aspx",
          by: "National Insurance Institute, average monthly wage of employees in Tel Aviv-Yafo, first half of 2025 (gross, employer-reported)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "haifa", name: "Haifa", lat: 32.79, lon: 34.99,
      knownFor: "The northern port city, home of the Technion",
      why: ["il-haifa", "il-intel", "il-pop", "il-elbit", "il-technion", "il-mobileye"],
      sectors: ["Ports and logistics", "Technology", "Chemicals"],
      employers: [
        {
          name: "Haifa Port (Adani–Gadot)",
          note: "the second-largest port in Israel, according to its owners",
          c: "il-haifa"
        },
        { name: "Intel", note: "R&D centre in Haifa; about 9,300 staff in Israel", c: "il-intel" },
        { name: "Elbit Systems", note: "headquarters in Haifa; over 21,000 staff worldwide", c: "il-elbit" },
        { name: "Mobileye", note: "25 open positions in Haifa on its careers page", c: "il-mobileye" },
        { name: "Technion", note: "about 14,600 students (10,200 undergraduate, 4,400 graduate)", c: "il-technion" }
      ],
      demand: {
        logistics: ["present", "il-haifa"],
        cs: ["present", "il-intel", "il-elbit", "il-mobileye"],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "logistics", s: [4, 2, 1], c: ["il-haifa"] }, { f: "cs", s: [3, 2, 1], c: ["il-intel", "il-elbit"] }],
      metrics: {
        pop: {
          v: 298312,
          year: 2023,
          area: "city",
          tag: "data",
          src: "https://data.gov.il/api/3/action/datastore_search?resource_id=d47a54ff-87f0-44b3-b33a-f284c0c38e5a",
          by: "Central Bureau of Statistics, localities file 2023 (preliminary population of Haifa, read through the data.gov.il open-data API)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "jerusalem", name: "Jerusalem", lat: 31.77, lon: 35.21,
      knownFor: "The capital and its Har Hotzvim technology park",
      why: ["il-hotzvim", "il-mobileye", "il-pop", "il-wage"],
      sectors: ["High-tech and software", "Defence", "Government"],
      employers: [
        { name: "Intel, Mobileye", note: "tenants of the Har Hotzvim technology park", c: "il-hotzvim" },
        { name: "Mobileye", note: "67 open positions in Jerusalem, the most of any of its sites", c: "il-mobileye" },
        {
          name: "Rafael Advanced Defense Systems, Elbit Systems Rokar",
          note: "tenants of the Har Hotzvim technology park",
          c: "il-hotzvim"
        },
        {
          t: "Average monthly pay in the city",
          note: "NIS 11,415 in the first half of 2025, among the lowest of the large cities",
          c: "il-wage"
        }
      ],
      demand: {
        software: ["strong", "il-hotzvim", "il-mobileye"],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "software", s: [3, 2, 1], c: ["il-hotzvim", "il-mobileye"] }],
      metrics: {
        pop: {
          v: 1028366,
          year: 2023,
          area: "city",
          tag: "data",
          src: "https://data.gov.il/api/3/action/datastore_search?resource_id=d47a54ff-87f0-44b3-b33a-f284c0c38e5a",
          by: "Central Bureau of Statistics, localities file 2023 (preliminary population of Jerusalem, read through the data.gov.il open-data API)",
          seen: "2026-10-03"
        },
        wage: {
          v: 11415,
          cur: "ILS",
          basis: "mean",
          year: 2025,
          area: "city",
          tag: "data",
          src: "https://en.globes.co.il/en/article-wages-1001529721",
          by: "National Insurance Institute salary report, first half of 2025, average monthly wage of employees in Jerusalem (gross, employer-reported), as reported by Globes (21 Dec 2025)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["il-lang"] },
    { k: "Recruiting calendar", c: ["il-cal"] },
    { k: "Where demand is now", c: ["il-ht", "il-rd", "il-gser"] },
    { k: "Graduate labour market", c: ["il-grad-lab"] },
    { k: "Pay by city", c: ["il-wage"] }
  ],

  advisory: ["il-fcdo"],

  briefs: [["countries/il-israel.md", "Country brief: Tel Aviv, Haifa and Jerusalem, high-tech, pay and standing"]],
  gaps: [
    "Israel was not covered by the research library before this record.",
    "Israel visas, student work prohibitions, ETA-IL, and B/1 foreign expert pathways (PIBA Procedures 5.3.0040, 5.3.0041, 5.3.0043, 5.8.0002) are fully verified in visas_immigration/israel/israel_visas_immigration_guide.md.",
    "The high-tech figures are national: no source read gives Tel Aviv’s share, so software is rated dominant in Tel Aviv on Startup Genome’s ranking of its ecosystem and the national figures, not on a city count of jobs.",
    "Tax, entry pay outside accounting and high-tech, and Hebrew levels or certificates by employer were not researched on a page that could be dated.",
    "The Bank of Israel’s list of supervised banks could not be read: the site runs a bot check, which was not bypassed.",
    "City populations are the Central Bureau of Statistics’ preliminary 2023 figures; the Haifa wage was not in the English release of the National Insurance Institute’s report, and no city GDP or rent series was read. Intel’s headcount comes from a business-press article of July 2025.",
    "Jerusalem software is rated strong on the Har Hotzvim park’s own tenant list and one Mobileye vacancy snapshot (67 openings), not on a headcount; none was read from the Jerusalem Development Authority."
  ],

  claims: {
    'il-ht': { t: "Israeli high-tech employed about 391,000 people in 2024, about 5,000 fewer than in 2023, the first decline in at least a decade; its share of all employees has stayed at about 11.5% for several years.", tag: "data", src: "https://innovationisrael.org.il/en/wp-content/uploads/sites/3/2025/04/Innovation-Authority-High-Tech-Employment-Report-English-Final.pdf", by: "Israel Innovation Authority, 2025 High-Tech Employment Status Report (April 2025)", seen: "2026-10-03" },
    'il-rd': { t: "About 51% of high-tech employees, some 200,000, worked in R&D roles in 2024, against 37% in 2012; headquarters roles fell from 41% to 29%.", tag: "data", src: "https://innovationisrael.org.il/en/wp-content/uploads/sites/3/2025/04/Innovation-Authority-High-Tech-Employment-Report-English-Final.pdf", by: "Israel Innovation Authority, 2025 High-Tech Employment Status Report (April 2025)", seen: "2026-10-03" },
    'il-rep': { t: "Of the 14 representative offices of foreign banks on the Bank of Israel’s list, 10 are in Tel Aviv, among them J.P. Morgan, BNP Paribas, Julius Baer and Pictet; the others are in Herzliya and Ramat Gan.", tag: "data", src: "https://boi.org.il/media/fs4lstrr/202327en.pdf", by: "Bank of Israel, representative offices of foreign banks (updated 23 Jul 2023)", seen: "2026-10-03" },
    'il-fcdo': { t: "The UK Foreign Office advises against all travel to Gaza, within 500 m of its border, to parts of the northern West Bank and to areas near the northern border and the Golan Heights, and against all but essential travel to most of the rest of the West Bank; it also reports Iranian strikes in the region since 8 July 2026.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/israel", by: "FCDO travel advice, Israel (updated 22 Jul 2026)", seen: "2026-10-03" },
    'il-haifa': { t: "The Adani–Gadot group, owner of Haifa port since 2023, calls it the second-largest port in Israel.", tag: "employer-stated", src: "https://gadot.com/new/adani-gadot-group-are-the-new-owners-of-haifa-port-the-second-largest-port-in-israel/", by: "Gadot Group news", seen: "2026-10-03" },
    'il-gser': { t: "Startup Genome’s 2026 report says Tel Aviv holds the top spot in the Middle East and North Africa and sits in the global top five, with an ecosystem value of $250 billion; Israeli tech companies raised about $15.6 billion in 2025, alongside exits of roughly $46 billion.", tag: "data", src: "https://startupgenome.com/insights/menas-startup-ecosystems-become-market-of-capability", by: "Startup Genome, MENA start-up ecosystems (15 Jul 2026), GSER 2026", seen: "2026-10-03" },
    'il-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Tel Aviv 94th of 117 financial centres (88th in the March 2026 edition), the only Israeli centre listed; in the Gulf, Dubai is 9th, Riyadh 46th and Doha 52nd, and in the region Istanbul is 89th.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'il-pop': { t: "The Central Bureau of Statistics’ preliminary 2023 figures give Jerusalem 1,028,366 residents, Tel Aviv-Yafo 495,230, Haifa 298,312 and Be’er Sheva 218,995; it noted in June 2024 that Jerusalem had passed one million.", tag: "data", src: "https://data.gov.il/api/3/action/datastore_search?resource_id=d47a54ff-87f0-44b3-b33a-f284c0c38e5a", by: "Central Bureau of Statistics, localities file 2023 (data.gov.il) and media release 165/2024 (3 Jun 2024)", seen: "2026-10-03" },
    'il-wage': { t: "In the first half of 2025 the average monthly wage in Tel Aviv was NIS 22,359, against NIS 11,415 in Jerusalem and NIS 15,098 across Israel, whose median was NIS 10,586; Jerusalem had the most employees of any large city, 287,984.", tag: "data", src: "https://www.btl.gov.il/English%20Homepage/About/PressReleases/Pages/dovrotdohsachar2025.aspx", by: "National Insurance Institute, salary report for the first half of 2025 (employer-reported wages), press release; the Jerusalem average is as reported by Globes (21 Dec 2025)", seen: "2026-10-03" },
    'il-checkpoint': { t: "Check Point says it has more than 7,000 employees, more than 3,500 of them security experts, and gives its international corporate headquarters as 5 Shlomo Kaplan Street, Tel Aviv.", tag: "employer-stated", src: "https://www.checkpoint.com/about-us/", by: "Check Point Software Technologies, About us", seen: "2026-10-03" },
    'il-mobileye': { t: "Mobileye’s careers page listed 187 open positions worldwide, 67 of them in Jerusalem, 33 in Ramat Gan, 25 in Haifa, 23 in Petah Tikva and one in Tel Aviv, against two in Munich, four in Koblenz and 12 in Shanghai.", tag: "employer-stated", src: "https://www.mobileye.com/careers/", by: "Mobileye, Careers (read 3 Oct 2026; a snapshot, openings change daily)", seen: "2026-10-03" },
    'il-elbit': { t: "Elbit Systems gives its headquarters as P.O.B. 539, Haifa, and says it employs over 21,000 people in dozens of countries, with revenues of $2,287.1 million in the quarter to 30 June 2026 and an order backlog of $32.0 billion.", tag: "employer-stated", src: "https://elbitsystems.com/contact-us/", by: "Elbit Systems, Contact us (headquarters) and About us (https://www.elbitsystems.com/about-us/; staff, revenue and backlog)", seen: "2026-10-03" },
    'il-technion': { t: "The Technion says more than 10,200 undergraduate and about 4,400 graduate students are enrolled, that it has awarded about 92,500 bachelor’s degrees since 1924, and that many students work in industry during their studies.", tag: "employer-stated", src: "https://www.technion.ac.il/en/about/", by: "Technion – Israel Institute of Technology, About (read 3 Oct 2026)", seen: "2026-10-03" },
    'il-intel': { t: "Intel Israel employs about 9,300 people, around 4,000 of them at the Kiryat Gat plant, with R&D centres in Haifa and Petah Tikva, and has been cutting jobs, including at Kiryat Gat for the first time.", tag: "practitioner consensus", src: "https://www.calcalistech.com/ctechnews/article/x1d3e8dw6", by: "Calcalist, Intel Israel begins latest round of layoffs (7 Jul 2025)", seen: "2026-10-03" },
    'il-lang': { t: "Israeli employment contracts should be drafted in Hebrew, Nefesh B’Nefesh says a CV sent to an Israeli employer should usually be in Hebrew but that this matters less in hi-tech, and one of its interviews rates Hebrew 8 out of 10 in essentiality for financial jobs, while Check Point’s programme pages are in English; no source measured Hebrew levels or certificates by employer.", tag: "practitioner consensus", src: "https://www.nbn.org.il/aliyahpedia/employment-israel/managing-the-job-search/adjusting-resume-israeli-market/", by: "Nefesh B’Nefesh CV guide (12 May 2024) and banking guide; Rivermate Israel guides (28 Jul 2026); Check Point programmes page; all read 8 Oct 2026", seen: "2026-10-08" },
    'il-cal': { t: "Israel has no national graduate season: Tel Aviv University holds a technology career fair each winter (7 January 2026) and a general job fair each spring, vacancies are posted all year (AllJobs showed 33,500 jobs), a 2019 survey of Viola Group portfolio companies put average hiring time at 6 to 8 weeks, and a foreign hire adds 60 to 90 working days for the work permit.", tag: "practitioner consensus", src: "https://english.tau.ac.il/node/2440", by: "Tel Aviv University job-fair pages; AllJobs front page; CTech on Viola Group’s 2019 survey; library visa guide (all read 8 Oct 2026)", seen: "2026-10-08" },
    'il-grad-lab': { t: "Unemployment was 2.8% in May 2026 according to the Central Bureau of Statistics, but university graduates’ share of job seekers rose from 14% in August 2022 to 20.5% in August 2026 according to the Employment Service, and only 88 of 5,641 tech vacancies in June 2025 were aimed at people without experience.", tag: "data", src: "https://www.calcalistech.com/ctechnews/article/vpax9md4l", by: "CTech (Calcalist), 14 Sep 2026, Employment Service data; Jerusalem Post, 6 Jul 2026, CBS labour-force survey; Globes, 11 Jun 2025 (all read 8 Oct 2026)", seen: "2026-10-08" },
    'il-hotzvim': { t: "The Har Hotzvim Hi-Tech Park in Jerusalem says its tenants include Intel, Mobileye, Rafael Advanced Defense Systems, Ophir Optronics, Elbit Systems Rokar and Alpha Tau, alongside medium-sized firms and start-ups.", tag: "employer-stated", src: "https://hotzvim.org.il/en/high-tech-park/park-companies/", by: "Har Hotzvim Hi-Tech Park management, Park companies", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "A high-tech economy, with about 391,000 high-tech employees, 11.5% of the workforce, and a Tel Aviv start-up ecosystem that Startup Genome puts in the world top five, but employment has stalled since 2022 and R&D roles dominate. Students are generally not allowed to work, and foreign expert routes require employer sponsorship. Read the UK’s travel advice, which rules out several border areas.":
    "Un’economia dell’alta tecnologia, con circa 391.000 addetti high-tech, l’11,5% degli occupati, e un ecosistema di start-up a Tel Aviv che Startup Genome colloca tra i primi cinque al mondo, ma l’occupazione è ferma dal 2022 e prevalgono i ruoli di R&S. Gli studenti in genere non possono lavorare, e le rotte per esperti stranieri richiedono la sponsorizzazione di un datore di lavoro. Leggi l’avvertenza britannica, che esclude diverse zone di confine.",
  "High-tech and software":
    "Alta tecnologia e software",
  "Cybersecurity":
    "Cybersicurezza",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Defence":
    "Difesa",
  "Pharmaceuticals":
    "Farmaceutica",
  "Israel was not covered by the research library before this record.":
    "Israele non era coperto dalla biblioteca di ricerca prima di questa scheda.",
  "The high-tech figures are national: no source read gives Tel Aviv’s share, so software is rated dominant in Tel Aviv on Startup Genome’s ranking of its ecosystem and the national figures, not on a city count of jobs.":
    "I dati sull’alta tecnologia sono nazionali: nessuna fonte letta indica la quota di Tel Aviv, quindi il software è valutato dominante a Tel Aviv sulla classifica dell’ecosistema di Startup Genome e sui dati nazionali, non su un conteggio dei posti di lavoro in città.",
  "Israel visas, student work prohibitions, ETA-IL, and B/1 foreign expert pathways (PIBA Procedures 5.3.0040, 5.3.0041, 5.3.0043, 5.8.0002) are fully verified in visas_immigration/israel/israel_visas_immigration_guide.md.":
    "I visti per Israele, i divieti di lavoro per studenti, l’ETA-IL e i percorsi B/1 per esperti stranieri (Procedure PIBA 5.3.0040, 5.3.0041, 5.3.0043, 5.8.0002) sono interamente verificati in visas_immigration/israel/israel_visas_immigration_guide.md.",
  "Tax, entry pay outside accounting and high-tech, and Hebrew levels or certificates by employer were not researched on a page that could be dated.":
    "Le imposte, le retribuzioni d’ingresso fuori dalla contabilità e dall’alta tecnologia, e i livelli o certificati di ebraico per datore di lavoro non sono stati ricercati su una pagina databile.",
  "The Bank of Israel’s list of supervised banks could not be read: the site runs a bot check, which was not bypassed.":
    "L’elenco delle banche vigilate della Banca d’Israele non è stato letto: il sito usa un controllo anti-bot, che non è stato aggirato.",
  "City populations are the Central Bureau of Statistics’ preliminary 2023 figures; the Haifa wage was not in the English release of the National Insurance Institute’s report, and no city GDP or rent series was read. Intel’s headcount comes from a business-press article of July 2025.":
    "Le popolazioni delle città sono i dati preliminari 2023 dell’Ufficio centrale di statistica; la retribuzione di Haifa non era nel comunicato in inglese del rapporto dell’Istituto nazionale di previdenza, e non è stata letta alcuna serie di PIL o affitti per città. Il numero di dipendenti di Intel proviene da un articolo della stampa economica di luglio 2025.",
  "Jerusalem software is rated strong on the Har Hotzvim park’s own tenant list and one Mobileye vacancy snapshot (67 openings), not on a headcount; none was read from the Jerusalem Development Authority.":
    "Il software di Gerusalemme è valutato forte sull’elenco degli inquilini del parco di Har Hotzvim e su un’istantanea delle offerte di Mobileye (67 posizioni), non su un conteggio degli addetti; nessuno è stato letto dalla Jerusalem Development Authority.",
  "Country brief: Tel Aviv, Haifa and Jerusalem, high-tech, pay and standing":
    "Dossier sul paese: Tel Aviv, Haifa e Gerusalemme, alta tecnologia, retribuzioni e posizionamento",
  "Where most foreign banks’ representative offices in Israel are":
    "Dove si trova la maggior parte degli uffici di rappresentanza delle banche estere in Israele",
  "Start-ups":
    "Start-up",
  "10 of the 14 listed are in Tel Aviv (2023)":
    "10 dei 14 elencati sono a Tel Aviv (2023)",
  "Representative offices of foreign banks":
    "Gli uffici di rappresentanza delle banche estere",
  "international headquarters in Tel Aviv; more than 7,000 staff":
    "sede internazionale a Tel Aviv; più di 7.000 dipendenti",
  "in the world top five, with $15.6 billion raised in 2025":
    "tra i primi cinque al mondo, con 15,6 miliardi di $ raccolti nel 2025",
  "Start-up ecosystem":
    "Ecosistema di start-up",
  "about 391,000 people, half in R&D roles":
    "circa 391.000 persone, metà in ruoli di R&S",
  "High-tech employment (national)":
    "Occupazione high-tech (nazionale)",
  "NIS 22,359 in the first half of 2025":
    "22.359 NIS nel primo semestre 2025",
  "Average monthly pay in the city":
    "Retribuzione media mensile in città",
  "The northern port city, home of the Technion":
    "La città portuale del nord, sede del Technion",
  "Ports and logistics":
    "Porti e logistica",
  "Technology":
    "Tecnologia",
  "Chemicals":
    "Chimica",
  "the second-largest port in Israel, according to its owners":
    "il secondo porto di Israele, secondo i proprietari",
  "R&D centre in Haifa; about 9,300 staff in Israel":
    "centro di R&S a Haifa; circa 9.300 dipendenti in Israele",
  "headquarters in Haifa; over 21,000 staff worldwide":
    "sede a Haifa; oltre 21.000 dipendenti nel mondo",
  "25 open positions in Haifa on its careers page":
    "25 posizioni aperte a Haifa sulla pagina carriere",
  "about 14,600 students (10,200 undergraduate, 4,400 graduate)":
    "circa 14.600 studenti (10.200 di primo livello, 4.400 di livello superiore)",
  "The capital and its Har Hotzvim technology park":
    "La capitale e il suo parco tecnologico di Har Hotzvim",
  "Government":
    "Pubblica amministrazione",
  "tenants of the Har Hotzvim technology park":
    "inquilini del parco tecnologico di Har Hotzvim",
  "67 open positions in Jerusalem, the most of any of its sites":
    "67 posizioni aperte a Gerusalemme, più che in qualsiasi altra sua sede",
  "NIS 11,415 in the first half of 2025, among the lowest of the large cities":
    "11.415 NIS nel primo semestre 2025, tra le più basse delle grandi città",
  "Language":
    "Lingua",
  "Recruiting calendar":
    "Calendario delle selezioni",
  "Graduate labour market":
    "Mercato del lavoro per i laureati",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "Pay by city":
    "Retribuzioni per città",
  "Israeli high-tech employed about 391,000 people in 2024, about 5,000 fewer than in 2023, the first decline in at least a decade; its share of all employees has stayed at about 11.5% for several years.":
    "Nel 2024 l’alta tecnologia israeliana impiegava circa 391.000 persone, circa 5.000 in meno del 2023, il primo calo da almeno un decennio; la sua quota sul totale degli occupati è ferma da diversi anni intorno all’11,5%.",
  "About 51% of high-tech employees, some 200,000, worked in R&D roles in 2024, against 37% in 2012; headquarters roles fell from 41% to 29%.":
    "Nel 2024 circa il 51% degli addetti high-tech, circa 200.000, lavorava in ruoli di R&S, contro il 37% del 2012; i ruoli di sede centrale sono scesi dal 41% al 29%.",
  "Of the 14 representative offices of foreign banks on the Bank of Israel’s list, 10 are in Tel Aviv, among them J.P. Morgan, BNP Paribas, Julius Baer and Pictet; the others are in Herzliya and Ramat Gan.":
    "Dei 14 uffici di rappresentanza di banche estere nell’elenco della Banca d’Israele, 10 sono a Tel Aviv, tra cui J.P. Morgan, BNP Paribas, Julius Baer e Pictet; gli altri sono a Herzliya e Ramat Gan.",
  "The UK Foreign Office advises against all travel to Gaza, within 500 m of its border, to parts of the northern West Bank and to areas near the northern border and the Golan Heights, and against all but essential travel to most of the rest of the West Bank; it also reports Iranian strikes in the region since 8 July 2026.":
    "Il Foreign Office britannico sconsiglia tutti i viaggi a Gaza, entro 500 m dal suo confine, in parti della Cisgiordania settentrionale e nelle zone vicine al confine settentrionale e alle Alture del Golan, e quelli non essenziali nella maggior parte del resto della Cisgiordania; riporta anche attacchi iraniani nella regione dall’8 luglio 2026.",
  "The Adani–Gadot group, owner of Haifa port since 2023, calls it the second-largest port in Israel.":
    "Il gruppo Adani–Gadot, proprietario del porto di Haifa dal 2023, lo definisce il secondo porto di Israele.",
  "Startup Genome’s 2026 report says Tel Aviv holds the top spot in the Middle East and North Africa and sits in the global top five, with an ecosystem value of $250 billion; Israeli tech companies raised about $15.6 billion in 2025, alongside exits of roughly $46 billion.":
    "Il rapporto 2026 di Startup Genome afferma che Tel Aviv è al primo posto in Medio Oriente e Nord Africa e tra i primi cinque al mondo, con un valore dell’ecosistema di 250 miliardi di $; le aziende tecnologiche israeliane hanno raccolto circa 15,6 miliardi di $ nel 2025, con exit per circa 46 miliardi.",
  "The Global Financial Centres Index 40 (September 2026) ranks Tel Aviv 94th of 117 financial centres (88th in the March 2026 edition), the only Israeli centre listed; in the Gulf, Dubai is 9th, Riyadh 46th and Doha 52nd, and in the region Istanbul is 89th.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Tel Aviv al 94º posto su 117 centri finanziari (88º nell’edizione di marzo 2026), unico centro israeliano presente; nel Golfo Dubai è 9º, Riad 46º e Doha 52ª, e nella regione Istanbul è 89ª.",
  "The Central Bureau of Statistics’ preliminary 2023 figures give Jerusalem 1,028,366 residents, Tel Aviv-Yafo 495,230, Haifa 298,312 and Be’er Sheva 218,995; it noted in June 2024 that Jerusalem had passed one million.":
    "I dati preliminari 2023 dell’Ufficio centrale di statistica danno a Gerusalemme 1.028.366 residenti, a Tel Aviv-Yafo 495.230, a Haifa 298.312 e a Be’er Sheva 218.995; a giugno 2024 ha segnalato che Gerusalemme aveva superato il milione.",
  "In the first half of 2025 the average monthly wage in Tel Aviv was NIS 22,359, against NIS 11,415 in Jerusalem and NIS 15,098 across Israel, whose median was NIS 10,586; Jerusalem had the most employees of any large city, 287,984.":
    "Nel primo semestre 2025 il salario medio mensile a Tel Aviv era di 22.359 NIS, contro 11.415 NIS a Gerusalemme e 15.098 NIS in tutto Israele, dove la mediana era di 10.586 NIS; Gerusalemme aveva più dipendenti di ogni altra grande città, 287.984.",
  "Check Point says it has more than 7,000 employees, more than 3,500 of them security experts, and gives its international corporate headquarters as 5 Shlomo Kaplan Street, Tel Aviv.":
    "Check Point dichiara di avere più di 7.000 dipendenti, di cui più di 3.500 esperti di sicurezza, e indica come sede internazionale 5 Shlomo Kaplan Street, a Tel Aviv.",
  "Mobileye’s careers page listed 187 open positions worldwide, 67 of them in Jerusalem, 33 in Ramat Gan, 25 in Haifa, 23 in Petah Tikva and one in Tel Aviv, against two in Munich, four in Koblenz and 12 in Shanghai.":
    "La pagina carriere di Mobileye elencava 187 posizioni aperte nel mondo, 67 a Gerusalemme, 33 a Ramat Gan, 25 a Haifa, 23 a Petah Tikva e una a Tel Aviv, contro due a Monaco, quattro a Coblenza e 12 a Shanghai.",
  "Elbit Systems gives its headquarters as P.O.B. 539, Haifa, and says it employs over 21,000 people in dozens of countries, with revenues of $2,287.1 million in the quarter to 30 June 2026 and an order backlog of $32.0 billion.":
    "Elbit Systems indica come sede P.O.B. 539, Haifa, e dichiara di impiegare oltre 21.000 persone in decine di paesi, con ricavi di 2.287,1 milioni di $ nel trimestre al 30 giugno 2026 e un portafoglio ordini di 32,0 miliardi di $.",
  "The Technion says more than 10,200 undergraduate and about 4,400 graduate students are enrolled, that it has awarded about 92,500 bachelor’s degrees since 1924, and that many students work in industry during their studies.":
    "Il Technion dichiara che sono iscritti più di 10.200 studenti di primo livello e circa 4.400 di livello superiore, che dal 1924 ha conferito circa 92.500 lauree triennali e che molti studenti lavorano nell’industria durante gli studi.",
  "Intel Israel employs about 9,300 people, around 4,000 of them at the Kiryat Gat plant, with R&D centres in Haifa and Petah Tikva, and has been cutting jobs, including at Kiryat Gat for the first time.":
    "Intel Israel impiega circa 9.300 persone, circa 4.000 delle quali nello stabilimento di Kiryat Gat, con centri di R&S a Haifa e Petah Tikva, e sta tagliando posti di lavoro, per la prima volta anche a Kiryat Gat.",
  "The Har Hotzvim Hi-Tech Park in Jerusalem says its tenants include Intel, Mobileye, Rafael Advanced Defense Systems, Ophir Optronics, Elbit Systems Rokar and Alpha Tau, alongside medium-sized firms and start-ups.":
    "Il Har Hotzvim Hi-Tech Park di Gerusalemme dichiara che tra i suoi inquilini ci sono Intel, Mobileye, Rafael Advanced Defense Systems, Ophir Optronics, Elbit Systems Rokar e Alpha Tau, oltre a medie imprese e start-up.",
  "Israeli employment contracts should be drafted in Hebrew, Nefesh B’Nefesh says a CV sent to an Israeli employer should usually be in Hebrew but that this matters less in hi-tech, and one of its interviews rates Hebrew 8 out of 10 in essentiality for financial jobs, while Check Point’s programme pages are in English; no source measured Hebrew levels or certificates by employer.":
    "I contratti di lavoro israeliani dovrebbero essere redatti in ebraico, Nefesh B’Nefesh dice che un CV inviato a un datore israeliano dovrebbe di solito essere in ebraico ma che nell’hi-tech conta meno, e una sua intervista valuta l’ebraico 8 su 10 per essenzialità nei lavori finanziari, mentre le pagine dei programmi di Check Point sono in inglese; nessuna fonte ha misurato livelli o certificati di ebraico per datore di lavoro.",
  "Israel has no national graduate season: Tel Aviv University holds a technology career fair each winter (7 January 2026) and a general job fair each spring, vacancies are posted all year (AllJobs showed 33,500 jobs), a 2019 survey of Viola Group portfolio companies put average hiring time at 6 to 8 weeks, and a foreign hire adds 60 to 90 working days for the work permit.":
    "Israele non ha una stagione nazionale per i laureati: la Tel Aviv University tiene ogni inverno una fiera della carriera tecnologica (7 gennaio 2026) e ogni primavera una fiera del lavoro generale, le offerte sono pubblicate tutto l’anno (AllJobs mostrava 33.500 offerte), un’indagine del 2019 sulle aziende in portafoglio a Viola Group indicava in 6-8 settimane il tempo medio di assunzione, e un assunto straniero aggiunge da 60 a 90 giorni lavorativi per il permesso di lavoro.",
  "Unemployment was 2.8% in May 2026 according to the Central Bureau of Statistics, but university graduates’ share of job seekers rose from 14% in August 2022 to 20.5% in August 2026 according to the Employment Service, and only 88 of 5,641 tech vacancies in June 2025 were aimed at people without experience.":
    "La disoccupazione era del 2,8% a maggio 2026 secondo l’Ufficio centrale di statistica, ma la quota di laureati universitari tra le persone in cerca di lavoro è salita dal 14% di agosto 2022 al 20,5% di agosto 2026 secondo il Servizio per l’impiego, e solo 88 su 5.641 vacancy tech di giugno 2025 erano rivolte a persone senza esperienza."
});

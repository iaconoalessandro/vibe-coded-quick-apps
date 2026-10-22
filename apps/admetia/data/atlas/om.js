/* Atlas record: Oman. Read 3 October 2026; log P75
 * (research/verification/round-4i.md, round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Oman had no coverage in the research library. The
 * hub rests on the central bank's list of licensed banks (read locally from
 * the page's HTML; the site's certificate failed a strict check); Ruwi, Hai
 * Al Mina, Madinat Al Fahal and Al Khuwair, the postal areas given, are in
 * Muscat. Round 5d (3 October 2026) added standing (GFCI 40, where Muscat is only an
 * associate centre), governorate populations from the statistics centre (December 2025, as
 * reported by Muscat Daily), 2025 GDP, and Sohar's 2025 and first-half 2026 port results
 * (the port's own figures, as reported). Oman publishes no governorate GDP, wage or rent
 * series that could be read. Brief: research/countries/om-oman.md. */

ATLAS.add({
  id: "OM",
  checked: "2026-10-03",
  log: "P75",
  summary: "The least documented Gulf market in this guide: Oman’s local banks are based in Muscat, and Sohar’s port and free zone handled 72 million tonnes in 2025, but no graduate route or hiring evidence for Europeans was found, and work needs a visa arranged before you start. Read the UK’s advice on regional attacks.",
  sectors: ["Oil and gas", "Banking and financial services", "Logistics and ports", "Tourism", "Public sector"],
  roles: ["logistics"],
  hubs: [
    {
      id: "muscat", name: "Muscat", lat: 23.59, lon: 58.41,
      knownFor: "The capital, where Oman’s licensed banks are based",
      why: ["om-banks", "om-gfci", "om-pop", "om-gdp"],
      sectors: ["Banking and financial services", "Public sector", "Tourism"],
      employers: [
        { name: "Bank Muscat", note: "Ruwi", c: "om-banks" },
        { name: "National Bank of Oman", note: "Ruwi", c: "om-banks" },
        { name: "Sohar International", note: "Hai Al Mina", c: "om-banks" },
        {
          name: "Bank Muscat (graduate programme)",
          note: "two-year programme for its own staff; training aimed at \"the national cadre\"",
          c: "om-bm"
        }
      ],
      demand: {
        finance: ["present", "om-banks"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["present", "om-banks"],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [{ f: "finance", s: [5, 2, 1], c: ["om-banks", "om-gfci"] }],
      metrics: {
        pop: {
          v: 1532234,
          year: 2025,
          area: "region",
          tag: "data",
          src: "https://www.muscatdaily.com/2026/01/20/omanis-make-up-56-7-of-population-as-total-reaches-5-36mn/",
          by: "National Centre for Statistics and Information, Muscat governorate at 31 December 2025, as reported by Muscat Daily",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "sohar", name: "Sohar", lat: 24.35, lon: 56.71,
      knownFor: "An industrial port and free zone between Muscat and Dubai",
      why: ["om-sohar", "om-sohar-25", "om-sohar-26"],
      sectors: ["Ports and logistics", "Steel and metals", "Chemicals"],
      employers: [
        { name: "Sohar Port and Freezone", note: "over USD 27 billion of investment (2020)", c: "om-sohar" },
        {
          name: "Sohar Port and Freezone (2025)",
          note: "72 million tonnes handled, USD 968 million of new commitments",
          c: "om-sohar-25"
        },
        { name: "Sohar Port and Freezone (first half of 2026)", note: "545,000 TEU, up 40%", c: "om-sohar-26" }
      ],
      demand: {
        logistics: ["strong", "om-sohar", "om-sohar-25", "om-sohar-26"],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "logistics", s: [4, 3, 2], c: ["om-sohar-25", "om-sohar-26"] }],
      metrics: {
        pop: {
          v: 940999,
          year: 2025,
          area: "region",
          tag: "data",
          src: "https://www.muscatdaily.com/2026/01/20/omanis-make-up-56-7-of-population-as-total-reaches-5-36mn/",
          by: "National Centre for Statistics and Information, North Batinah governorate (which contains Sohar) at 31 December 2025, as reported by Muscat Daily",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["om-lang"] },
    { k: "Recruiting calendar", c: ["om-cal"] },
    { k: "Where demand is now", c: ["om-banks", "om-gdp", "om-sohar-26"] },
    { k: "Graduate labour market", c: ["om-grad-lab"] }
  ],

  advisory: ["om-fcdo"],

  briefs: [
    ["countries/om-oman.md", "Country brief: Muscat and Sohar, banks, the port, graduate schemes and standing"],
    [
      "places/gulf-and-central-eastern-europe.md",
      "§1 and §3 Gulf work rules and safety (Oman is not covered separately)"
    ]
  ],
  gaps: [
    "Oman visas, residence permits, labour quotas, and student routes are fully verified in visas_immigration/oman/oman_visas_immigration_guide.md.",
    "Oman was not covered by the research library before this record.",
    "No source read gives Muscat’s jobs by sector, graduate programmes open to foreigners, pay or tax; finance is rated only present.",
    "Sohar logistics is rated strong on the port’s own figures as reported in the press (throughput, commitments, project value), not on hiring; no employer inside the freezone was named on a page read.",
    "Oman publishes no governorate GDP, wage or rent series that could be read; populations are the December 2025 statistics-centre figures as reported by a newspaper, for whole governorates (Sohar is a wilayat within North Batinah)."
  ],

  claims: {
    'om-banks': { t: "The central bank’s list of licensed banks gives Muscat-area addresses (Ruwi, Hai Al Mina, Madinat Al Fahal, Al Khuwair) for Oman’s local banks, among them Bank Muscat, National Bank of Oman, Bank Dhofar, Oman Arab Bank, Sohar International and Ahli Bank, and for foreign banks such as Standard Chartered and HSBC.", tag: "data", src: "https://cbo.gov.om/Pages/LicensedBanks.aspx", by: "Central Bank of Oman, licensed banks (area identification by Admetia)", seen: "2026-10-03" },
    'om-fcdo': { t: "The UK Foreign Office reports strikes and retaliatory attacks by Iran in the region, Oman included, since 8 July 2026, and warns of flight cancellations and airspace closures; it does not advise against travel to Oman as a whole.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/oman", by: "FCDO travel advice, Oman (updated 22 Jul 2026)", seen: "2026-10-03" },
    'om-sohar': { t: "Sohar Port and Freezone said in 2020 that it had attracted over OMR10.4 billion (USD 27 billion) of investment since the port opened 16 years earlier.", tag: "employer-stated", src: "https://timesofoman.com/article/95367-sohar-port-and-freezone-attracts-omr104-billion-worth-of-investment", by: "Sohar Port and Freezone, via Times of Oman (18 Nov 2020)", seen: "2026-10-03" },
    'om-gfci': { t: "The Global Financial Centres Index 40 (September 2026) does not rank Muscat: it is one of 22 associate centres, with 23 assessments in 24 months against the 150 needed to be listed, and a mean assessment of 630.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 2 (associate centres)", seen: "2026-10-03" },
    'om-pop': { t: "At the end of 2025 Oman had 5,359,557 residents, 43.3% of them expatriates; Muscat governorate had 1,532,234 (936,383 expatriates and 595,851 Omanis) and North Batinah, where Sohar is, 940,999.", tag: "data", src: "https://www.muscatdaily.com/2026/01/20/omanis-make-up-56-7-of-population-as-total-reaches-5-36mn/", by: "National Centre for Statistics and Information, population at 31 December 2025, as reported by Muscat Daily (20 Jan 2026)", seen: "2026-10-03" },
    'om-gdp': { t: "Oman’s real GDP was OMR 39.30 billion in 2025, up 2.4%; non-oil activities rose 3.1% to OMR 28.70 billion and petroleum activities 1.1% to OMR 12.02 billion.", tag: "data", src: "https://www.omanobserver.om/article/1186973/business/economy/omans-non-oil-gdp-hits-ro-287-billion-in-2025", by: "Ministry of Economy monthly bulletin, as reported by Oman Observer (30 Mar 2026)", seen: "2026-10-03" },
    'om-sohar-25': { t: "SOHAR Port and Freezone says its annual throughput rose from 62 million tonnes in 2019 to 72 million by the end of 2025, with 3,427 vessel calls, and that in 2025 it secured $968 million of new commitments across eight agreements; its freezone ranked third globally in fDi Intelligence’s free-zone index.", tag: "employer-stated", src: "https://www.omanobserver.om/article/1183075/business/sohar-port-and-freezone-emerges-as-a-pillar-of-omans-diversification-drive", by: "SOHAR Port and Freezone annual business reception, as reported by Oman Observer (21 Jan 2026)", seen: "2026-10-03" },
    'om-sohar-26': { t: "SOHAR Port and Freezone reported cargo throughput of 52 million tonnes in the first half of 2026, up 52%, and container throughput of 545,000 TEU, up 40%; projects under way across the port and freezone are worth OMR 2.62 billion.", tag: "employer-stated", src: "https://container-news.com/sohar-port-and-freezone-records-cargo-growth-in-first-half-of-2026/", by: "SOHAR Port and Freezone first-half 2026 results, as reported by Container News", seen: "2026-10-03" },
    'om-bm': { t: "Bank Muscat’s two-year High Potential Graduate Development programme enrolled 57 of its own employees in two batches in October 2023, and the bank describes its training as developing \"the national cadre\".", tag: "employer-stated", src: "https://timesofoman.com/article/136977-bank-muscat-organizes-leadership-seminar-and-launches-the-graduate-program-for-the-year", by: "Bank Muscat, as reported by Times of Oman (8 Oct 2023)", seen: "2026-10-03" },
    'om-lang': { t: "English is standard for multinational firms and Arabic is often required for government and local companies, according to a CV guide; an Omani labour contract must be written in Arabic in two copies, and KPMG Middle East's graduate assessments test English; no source measured the level employers require.", tag: "practitioner consensus", src: "https://www.resumly.ai/ai-resume-builder-oman", by: "Resumly CV guide for Oman; Oman Observer on Royal Decree 53/2023; KPMG Oman graduate programme page (all read 8 Oct 2026)", seen: "2026-10-08" },
    'om-cal': { t: "Graduate recruiting in Oman runs on university fairs and autumn postings rather than a national season: the Oman Internship Fair was held on 26 January 2026 with more than 65 companies, Sohar University's Career Training Fair on 2-4 February 2026 and Sultan Qaboos University's Career Fair on 13-15 April 2026; the Oman Airports graduate programme was posted on 1 October 2025 with a deadline of 12 October 2025, and OQ's 130 graduates were onboarded by 4 February 2026.", tag: "practitioner consensus", src: "https://timesofoman.com/article/167399-oman-internship-fair-2026-to-be-held-on-26-january-at-the-diplomatic-club", by: "Times of Oman; Sohar University; Black and White Oman; MCBS on Oman Airports; Oman Observer on OQ (all read 8 Oct 2026)", seen: "2026-10-08" },
    'om-grad-lab': { t: "Oman's job-seeker rate was 3.1% in 2025 and 2.4% in June 2026 (13.2% for ages 15 to 24); among bachelor's holders it was 12.4% for women and 1.3% for men, and 0.5% for master's and doctoral holders; at the end of June 2026 Omanis held 441,737 private-sector and 392,962 government jobs, and in the Employer Survey 2025 47% of private employers had hired graduates with no work experience; no figure for expatriate graduates was found.", tag: "data", src: "https://www.omanobserver.om/article/1194314/oman/community/71-of-higher-education-diploma-holders-are-job-seekers", by: "NCSI monthly bulletin June 2026 as reported by Oman Observer; Oman Observer (6 May 2026); People Matters (5 Aug 2026); Employer Survey 2025 as reported by People Matters (read 8 Oct 2026)", seen: "2026-10-08" }
  }
});

if (window.I18N) I18N.add('it', {
  "The least documented Gulf market in this guide: Oman’s local banks are based in Muscat, and Sohar’s port and free zone handled 72 million tonnes in 2025, but no graduate route or hiring evidence for Europeans was found, and work needs a visa arranged before you start. Read the UK’s advice on regional attacks.":
    "Il mercato del Golfo meno documentato di questa guida: le banche locali dell’Oman hanno sede a Mascate, e il porto e la zona franca di Sohar hanno movimentato 72 milioni di tonnellate nel 2025, ma non sono stati trovati percorsi per neolaureati né prove di assunzioni di europei, e per lavorare serve un visto ottenuto prima di iniziare. Leggi l’avvertenza britannica sugli attacchi nella regione.",
  "Oil and gas":
    "Petrolio e gas",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Logistics and ports":
    "Logistica e porti",
  "Tourism":
    "Turismo",
  "Public sector":
    "Settore pubblico",
  "Oman was not covered by the research library before this record.":
    "L’Oman non era coperto dalla biblioteca di ricerca prima di questa scheda.",
  "No source read gives Muscat’s jobs by sector, graduate programmes open to foreigners, pay or tax; finance is rated only present.":
    "Nessuna fonte letta riporta i posti di lavoro di Mascate per settore, programmi per laureati aperti agli stranieri, stipendi o tasse; la finanza è valutata solo presente.",
  "Oman visas, residence permits, labour quotas, and student routes are fully verified in visas_immigration/oman/oman_visas_immigration_guide.md.":
    "Le norme su visti, permessi di soggiorno, quote di lavoro e percorsi di studio in Oman sono interamente verificate in visas_immigration/oman/oman_visas_immigration_guide.md.",
  "Sohar logistics is rated strong on the port’s own figures as reported in the press (throughput, commitments, project value), not on hiring; no employer inside the freezone was named on a page read.":
    "La logistica di Sohar è valutata forte sui dati del porto stesso riportati dalla stampa (traffico, impegni, valore dei progetti), non sulle assunzioni; nessun datore di lavoro dentro la zona franca è stato citato in una pagina letta.",
  "Oman publishes no governorate GDP, wage or rent series that could be read; populations are the December 2025 statistics-centre figures as reported by a newspaper, for whole governorates (Sohar is a wilayat within North Batinah).":
    "L’Oman non pubblica serie di PIL, retribuzioni o affitti per governatorato che si siano potute leggere; le popolazioni sono i dati di dicembre 2025 del centro statistico riportati da un giornale, per interi governatorati (Sohar è un wilayat del Nord Batinah).",
  "Country brief: Muscat and Sohar, banks, the port, graduate schemes and standing":
    "Dossier sul paese: Mascate e Sohar, banche, porto, programmi per laureati e posizionamento",
  "§1 and §3 Gulf work rules and safety (Oman is not covered separately)":
    "§1 e §3 regole del lavoro e sicurezza nel Golfo (l’Oman non è trattato a parte)",
  "The capital, where Oman’s licensed banks are based":
    "La capitale, dove hanno sede le banche autorizzate dell’Oman",
  "Ruwi":
    "Ruwi",
  "Hai Al Mina":
    "Hai Al Mina",
  "two-year programme for its own staff; training aimed at \"the national cadre\"":
    "programma biennale per il proprio personale; formazione rivolta al \"personale nazionale\"",
  "An industrial port and free zone between Muscat and Dubai":
    "Un porto industriale e zona franca tra Mascate e Dubai",
  "Ports and logistics":
    "Porti e logistica",
  "Steel and metals":
    "Siderurgia e metalli",
  "Chemicals":
    "Chimica",
  "over USD 27 billion of investment (2020)":
    "oltre 27 miliardi di USD di investimenti (2020)",
  "72 million tonnes handled, USD 968 million of new commitments":
    "72 milioni di tonnellate movimentate, 968 milioni di USD di nuovi impegni",
  "545,000 TEU, up 40%":
    "545.000 TEU, in crescita del 40%",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "The central bank’s list of licensed banks gives Muscat-area addresses (Ruwi, Hai Al Mina, Madinat Al Fahal, Al Khuwair) for Oman’s local banks, among them Bank Muscat, National Bank of Oman, Bank Dhofar, Oman Arab Bank, Sohar International and Ahli Bank, and for foreign banks such as Standard Chartered and HSBC.":
    "L’elenco delle banche autorizzate della banca centrale indica indirizzi nell’area di Mascate (Ruwi, Hai Al Mina, Madinat Al Fahal, Al Khuwair) per le banche locali dell’Oman, tra cui Bank Muscat, National Bank of Oman, Bank Dhofar, Oman Arab Bank, Sohar International e Ahli Bank, e per banche estere come Standard Chartered e HSBC.",
  "The UK Foreign Office reports strikes and retaliatory attacks by Iran in the region, Oman included, since 8 July 2026, and warns of flight cancellations and airspace closures; it does not advise against travel to Oman as a whole.":
    "Il Foreign Office britannico riporta attacchi e rappresaglie dell’Iran nella regione, Oman compreso, dall’8 luglio 2026, e avverte di cancellazioni di voli e chiusure dello spazio aereo; non sconsiglia i viaggi in Oman nel suo complesso.",
  "Sohar Port and Freezone said in 2020 that it had attracted over OMR10.4 billion (USD 27 billion) of investment since the port opened 16 years earlier.":
    "Nel 2020 il porto e la zona franca di Sohar hanno dichiarato di aver attratto oltre 10,4 miliardi di OMR (27 miliardi di USD) di investimenti dall’apertura del porto 16 anni prima.",
  "The Global Financial Centres Index 40 (September 2026) does not rank Muscat: it is one of 22 associate centres, with 23 assessments in 24 months against the 150 needed to be listed, and a mean assessment of 630.":
    "Il Global Financial Centres Index 40 (settembre 2026) non classifica Mascate: è uno dei 22 centri associati, con 23 valutazioni in 24 mesi contro le 150 necessarie per essere inserita, e una valutazione media di 630.",
  "At the end of 2025 Oman had 5,359,557 residents, 43.3% of them expatriates; Muscat governorate had 1,532,234 (936,383 expatriates and 595,851 Omanis) and North Batinah, where Sohar is, 940,999.":
    "Alla fine del 2025 l’Oman contava 5.359.557 residenti, il 43,3% dei quali espatriati; il governatorato di Mascate ne aveva 1.532.234 (936.383 espatriati e 595.851 omaniti) e Nord Batinah, dove si trova Sohar, 940.999.",
  "Oman’s real GDP was OMR 39.30 billion in 2025, up 2.4%; non-oil activities rose 3.1% to OMR 28.70 billion and petroleum activities 1.1% to OMR 12.02 billion.":
    "Il PIL reale dell’Oman è stato di 39,30 miliardi di OMR nel 2025, in crescita del 2,4%; le attività non petrolifere sono salite del 3,1% a 28,70 miliardi di OMR e quelle petrolifere dell’1,1% a 12,02 miliardi di OMR.",
  "SOHAR Port and Freezone says its annual throughput rose from 62 million tonnes in 2019 to 72 million by the end of 2025, with 3,427 vessel calls, and that in 2025 it secured $968 million of new commitments across eight agreements; its freezone ranked third globally in fDi Intelligence’s free-zone index.":
    "SOHAR Port and Freezone dichiara che il traffico annuo è salito da 62 milioni di tonnellate nel 2019 a 72 milioni alla fine del 2025, con 3.427 scali di navi, e che nel 2025 ha ottenuto 968 milioni di $ di nuovi impegni in otto accordi; la sua zona franca si è classificata terza al mondo nell’indice delle zone franche di fDi Intelligence.",
  "SOHAR Port and Freezone reported cargo throughput of 52 million tonnes in the first half of 2026, up 52%, and container throughput of 545,000 TEU, up 40%; projects under way across the port and freezone are worth OMR 2.62 billion.":
    "SOHAR Port and Freezone ha comunicato un traffico merci di 52 milioni di tonnellate nel primo semestre 2026, in crescita del 52%, e un traffico container di 545.000 TEU, in crescita del 40%; i progetti in corso nel porto e nella zona franca valgono 2,62 miliardi di OMR.",
  "Bank Muscat’s two-year High Potential Graduate Development programme enrolled 57 of its own employees in two batches in October 2023, and the bank describes its training as developing \"the national cadre\".":
    "Il programma biennale High Potential Graduate Development di Bank Muscat ha iscritto 57 dei suoi dipendenti in due gruppi a ottobre 2023, e la banca descrive la propria formazione come lo sviluppo del \"personale nazionale\".",
  "English is standard for multinational firms and Arabic is often required for government and local companies, according to a CV guide; an Omani labour contract must be written in Arabic in two copies, and KPMG Middle East's graduate assessments test English; no source measured the level employers require.":
    "L’inglese è lo standard per le multinazionali e l’arabo è spesso richiesto per il settore pubblico e le aziende locali, secondo una guida ai CV; un contratto di lavoro omanita deve essere scritto in arabo in due copie, e le valutazioni per laureati di KPMG Middle East verificano l’inglese; nessuna fonte ha misurato il livello richiesto dai datori di lavoro.",
  "Graduate recruiting in Oman runs on university fairs and autumn postings rather than a national season: the Oman Internship Fair was held on 26 January 2026 with more than 65 companies, Sohar University's Career Training Fair on 2-4 February 2026 and Sultan Qaboos University's Career Fair on 13-15 April 2026; the Oman Airports graduate programme was posted on 1 October 2025 with a deadline of 12 October 2025, and OQ's 130 graduates were onboarded by 4 February 2026.":
    "La selezione dei laureati in Oman si basa su fiere universitarie e annunci autunnali più che su una stagione nazionale: l’Oman Internship Fair si è tenuta il 26 gennaio 2026 con più di 65 aziende, la Career Training Fair della Sohar University il 2-4 febbraio 2026 e la Career Fair della Sultan Qaboos University il 13-15 aprile 2026; il programma per laureati di Oman Airports è stato pubblicato il 1° ottobre 2025 con scadenza il 12 ottobre 2025, e i 130 laureati di OQ erano stati inseriti entro il 4 febbraio 2026.",
  "Oman's job-seeker rate was 3.1% in 2025 and 2.4% in June 2026 (13.2% for ages 15 to 24); among bachelor's holders it was 12.4% for women and 1.3% for men, and 0.5% for master's and doctoral holders; at the end of June 2026 Omanis held 441,737 private-sector and 392,962 government jobs, and in the Employer Survey 2025 47% of private employers had hired graduates with no work experience; no figure for expatriate graduates was found.":
    "Il tasso di persone in cerca di lavoro in Oman era del 3,1% nel 2025 e del 2,4% a giugno 2026 (13,2% tra 15 e 24 anni); tra chi ha una laurea triennale era del 12,4% per le donne e dell’1,3% per gli uomini, e dello 0,5% per chi ha una laurea magistrale o un dottorato; alla fine di giugno 2026 gli omaniti occupavano 441.737 posti nel settore privato e 392.962 nel settore pubblico, e nell’Employer Survey 2025 il 47% dei datori di lavoro privati aveva assunto laureati senza esperienza lavorativa; non è stato trovato alcun dato sui laureati stranieri."
});

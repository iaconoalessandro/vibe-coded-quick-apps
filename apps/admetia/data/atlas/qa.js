/* Atlas record: Qatar. Read 3 October 2026; log P73
 * (research/verification/round-4i.md, round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. The library had only QIA's graduate programme and a
 * snippet on PwC sponsorship (not used); Qatar's labour and Qatarisation rules
 * were not read on an official page. Round 5d (3 October 2026) added standing (GFCI 40),
 * the Doha municipality population from the National Planning Council's open data, Q3 2025
 * growth, average pay by activity (2023, open data) and the Startup Genome 2026 facts.
 * Qatar publishes no city GDP or rent series, so only population is a hub metric.
 * Brief: research/countries/qa-qatar.md. */

ATLAS.add({
  id: "QA",
  checked: "2026-10-03",
  log: "P73",
  summary: "A small, fast-registering business centre: the Qatar Financial Centre had over 4,700 firms by June 2026, with technology the largest group of new ones, and the Global Financial Centres Index ranks Doha 52nd. Graduate evidence is thin: the graduate programmes of the sovereign fund and of QatarEnergy are for Qataris, and no source read gives jobs by role. Read the UK’s advice on regional attacks.",
  sectors: ["Natural gas and energy", "Banking and financial services", "Technology", "Construction", "Aviation"],
  roles: ["finance"],
  hubs: [
    {
      id: "doha", name: "Doha", lat: 25.29, lon: 51.53,
      knownFor: "The capital and seat of the Qatar Financial Centre",
      why: ["qa-qfc", "qa-gfci", "qa-gser", "qa-econ", "qa-pop"],
      sectors: ["Banking and financial services", "Technology", "Consulting and professional services", "Media"],
      employers: [
        { t: "Firms registered at the Qatar Financial Centre", note: "over 4,700 by June 2026", c: "qa-qfc" },
        { name: "Qatar Investment Authority", note: "graduate programme for Qatari nationals", c: "qa-qia" },
        { name: "QatarEnergy", note: "graduate programme for Qatari graduates", c: "qa-qe" },
        { t: "Technology start-ups", note: "over 300, with $58.7 million raised in 2025", c: "qa-gser" },
        {
          t: "Financial and insurance workers",
          note: "28,856 paid workers averaging QAR 29,403 a month in 2023",
          c: "qa-wage"
        }
      ],
      demand: {
        finance: ["strong", "qa-qfc", "qa-gfci"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [5, 4, 2], c: ["qa-gfci", "qa-qfc"] }, { f: "software", s: [5, 3, 1], c: ["qa-gser"] }],
      metrics: {
        pop: {
          v: 1186023,
          year: 2020,
          area: "city",
          tag: "data",
          src: "https://www.data.gov.qa/explore/dataset/population-by-municipality-and-age-groups/",
          by: "National Planning Council, open data: population of Doha municipality (the 2020 census base, repeated in the tables to 2024); the built-up area spills into Al Rayyan and other municipalities",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["qa-lang"] },
    { k: "Recruiting calendar", c: ["qa-cal"] },
    { k: "Where demand is now", c: ["qa-qfc", "qa-econ", "qa-gser"] },
    { k: "Graduate labour market", c: ["qa-grad-lab"] },
    { k: "Pay by sector", c: ["qa-wage"] }
  ],

  advisory: ["qa-fcdo"],

  briefs: [
    ["countries/qa-qatar.md", "Country brief: Doha, the Qatar Financial Centre, pay, employers and standing"],
    ["places/gulf-and-central-eastern-europe.md", "§1–3 Gulf work rules, hiring evidence and safety"]
  ],
  gaps: [
    "The Qatar Financial Centre reports firm registrations, not jobs or roles, so finance is rated strong on those registrations and the Global Financial Centres Index, not on hiring.",
    "Qatar’s labour law, Qatarisation rules and sponsorship practice for graduates are fully verified in visas_immigration/qatar/qatar_visas_immigration_guide.md.",
    "Entry for EU passports and tax were not researched; average pay is whole-country and by activity, with no entry pay and no figure for Doha alone.",
    "Qatar publishes no city GDP or rent series, and the Doha population is the 2020 census base for the municipality, not the wider built-up area.",
    "Qatar Airways’ graduate pages could not be read, and no European-graduate employer in Doha was found beyond the free-zone registrations."
  ],

  claims: {
    'qa-qia': { t: "The Qatar Investment Authority’s one-year Journey graduate programme requires a Qatari national or the child of a Qatari mother; its international hiring is for highly experienced specialists.", tag: "employer-stated", src: "research/places/gulf-and-central-eastern-europe.md", by: "QIA Journey Program and careers pages (Wayback captures, 2025–26), via places/gulf-and-central-eastern-europe.md §2", seen: "2026-10-02" },
    'qa-qfc': { t: "The Qatar Financial Centre onboarded 1,135 firms in the first half of 2026, 37% more than a year earlier, for a total of over 4,700; the largest groups of new firms were technology and innovation (544), media (173) and consulting and professional services (166).", tag: "data", src: "https://www.qfc.qa/en/news-detail/?id=1434", by: "Qatar Financial Centre, 24 Aug 2026", seen: "2026-10-03" },
    'qa-fcdo': { t: "The UK Foreign Office reports strikes and retaliatory attacks by Iran in the region, Qatar included, since 8 July 2026, and warns of flight cancellations and airspace closures; it does not advise against travel to Qatar as a whole.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/qatar", by: "FCDO travel advice, Qatar (updated 19 Aug 2026)", seen: "2026-10-03" },
    'qa-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Doha 52nd of 117 financial centres (48th in the March 2026 edition), fifth in the Middle East and Africa after Dubai (9th), Abu Dhabi (13th), Casablanca (38th) and Riyadh (46th); Kuwait City is 60th.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1 and regional summary", seen: "2026-10-03" },
    'qa-gser': { t: "Startup Genome’s 2026 report counts over 300 technology start-ups in Qatar, which raised $58.7 million (QAR 214 million) of venture funding in 2025, nearly double the year before, with 93% of deals at early stage and more than 22 incubators and innovation platforms.", tag: "data", src: "https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/activating-markets-for-startups-how-qatar-turns-innovation-into-economic-outcomes", by: "Startup Genome, Global Startup Ecosystem Report 2026, Qatar chapter (June 2026)", seen: "2026-10-03" },
    'qa-econ': { t: "Qatar’s real GDP grew 2.9% in the third quarter of 2025 against QAR 180.9 billion a year earlier, with non-hydrocarbon activities up 4.4% and 15 of 17 economic activities growing.", tag: "data", src: "https://www.npc.qa/en/statistics/Pages/news/28122025.aspx", by: "National Planning Council, National Statistics Center (28 Dec 2025)", seen: "2026-10-03" },
    'qa-wage': { t: "In 2023 Qatar’s 28,856 paid workers in financial and insurance activities averaged QAR 29,403 a month and its 25,965 in information and communication QAR 28,517, against QAR 11,025 for all 2,171,062 paid workers (author’s weighting of the male and female averages).", tag: "data", src: "https://www.data.gov.qa/explore/dataset/workers-in-paid-employment-15-years-and-above-and-monthly-average-wage-q/", by: "National Planning Council, open data: workers in paid employment and monthly average wage by gender and economic activity, 2023; whole-country averages, not entry pay", seen: "2026-10-03" },
    'qa-pop': { t: "The National Planning Council’s open data give Doha municipality 1,186,023 residents, about 40% of the country, from the 2020 census base that its tables repeat for 2020 to 2024.", tag: "data", src: "https://www.data.gov.qa/explore/dataset/population-by-municipality-and-age-groups/", by: "National Planning Council, open data: population by municipality and age groups; share from Gulf Times (not read)", seen: "2026-10-03" },
    'qa-lang': { t: "Standard employment contracts in Qatar are registered in Arabic and English on the Ministry of Labour portal, EY's Doha graduate programme for nationals asks for excellent written and verbal communication in Arabic and English, and Qatar Living's CV guide says Arabic matters more for government, semi-government and some customer-facing roles; no source measured English at work.", tag: "practitioner consensus", src: "https://www.qatarliving.com/en/article/writing-first-cv-qatar-job-market", by: "Qatar Living CV guide (8 Aug 2026); EY Qatar graduate posting for nationals; library visa guide (contract registration); all read 8 Oct 2026", seen: "2026-10-08" },
    'qa-cal': { t: "Graduate recruiting in Qatar runs on university fairs rather than one national season: the Doha Institute for Graduate Studies held its 9th fair on 21 January 2026 with about 30 organisations, the Qatar Foundation Alumni Office its Education City Job Fair on 15 February 2026 for Qatar Foundation students and alumni, Lusail University its third fair on 22-23 October 2025, and Qatar University's fair of 11-14 September 2023 had 73 employers; QatarEnergy says its graduate assessment may take up to 90 days.", tag: "practitioner consensus", src: "https://www.qatarliving.com/en/article/career-fairs-networking-events-young-people-qatar", by: "Qatar Living career-fairs guide (checked 10 Aug 2026); The Peninsula on Lusail University; Qatar Tribune on Qatar University; QatarEnergy careers portal (all read 8 Oct 2026)", seen: "2026-10-08" },
    'qa-grad-lab': { t: "Foreign nationals were 83% of Qatar's private workforce and 94% of its total workforce in 2023, the national strategy aims for 20% Qatari participation in the private and semi-private workforce by 2030, and the World Bank's modelled youth unemployment rate for Qatar was 0.559% in 2025; no graduate-specific unemployment or time-to-first-job figure was found.", tag: "data", src: "https://oxfordbusinessgroup.com/reports/qatar/2025-report/economy/domestic-talent-new-regulation-targets-the-development-of-the-local-workforce-analysis/", by: "Oxford Business Group, Qatar 2025 report; World Bank youth unemployment series via FRED (read 8 Oct 2026)", seen: "2026-10-08" },
    'qa-qe': { t: "QatarEnergy’s graduate pages describe a programme for \"recent Qatari graduates\", with a selection process that can take up to 90 days, and its vocational and scholarship programmes are for Qataris and children of Qatari women.", tag: "employer-stated", src: "https://careerportal.qatarenergy.qa/graduates", by: "QatarEnergy careers portal, Graduates", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "A small, fast-registering business centre: the Qatar Financial Centre had over 4,700 firms by June 2026, with technology the largest group of new ones, and the Global Financial Centres Index ranks Doha 52nd. Graduate evidence is thin: the graduate programmes of the sovereign fund and of QatarEnergy are for Qataris, and no source read gives jobs by role. Read the UK’s advice on regional attacks.":
    "Un piccolo centro d’affari dove le registrazioni crescono in fretta: a giugno 2026 il Qatar Financial Centre contava oltre 4.700 aziende, con la tecnologia primo gruppo tra le nuove, e il Global Financial Centres Index pone Doha al 52º posto. Le prove per i neolaureati sono scarse: i programmi per laureati del fondo sovrano e di QatarEnergy sono per i qatarioti, e nessuna fonte letta riporta i posti per ruolo. Leggi l’avvertenza britannica sugli attacchi nella regione.",
  "Natural gas and energy":
    "Gas naturale ed energia",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Technology":
    "Tecnologia",
  "Construction":
    "Costruzioni",
  "Aviation":
    "Aviazione",
  "The Qatar Financial Centre reports firm registrations, not jobs or roles, so finance is rated strong on those registrations and the Global Financial Centres Index, not on hiring.":
    "Il Qatar Financial Centre riporta le registrazioni di aziende, non posti di lavoro o ruoli, quindi la finanza è valutata forte su quelle registrazioni e sul Global Financial Centres Index, non sulle assunzioni.",
  "Qatar’s labour law, Qatarisation rules and sponsorship practice for graduates are fully verified in visas_immigration/qatar/qatar_visas_immigration_guide.md.":
    "Il diritto del lavoro del Qatar, le regole di qatarizzazione e la prassi di sponsorizzazione per i laureati sono interamente verificati in visas_immigration/qatar/qatar_visas_immigration_guide.md.",
  "Entry for EU passports and tax were not researched; average pay is whole-country and by activity, with no entry pay and no figure for Doha alone.":
    "L’ingresso con passaporto UE e le tasse non sono stati ricercati; la retribuzione media è riferita all’intero paese e per attività, senza stipendi d’ingresso né un dato per la sola Doha.",
  "Qatar publishes no city GDP or rent series, and the Doha population is the 2020 census base for the municipality, not the wider built-up area.":
    "Il Qatar non pubblica serie di PIL o affitti per città, e la popolazione di Doha è la base del censimento 2020 per il comune, non l’area urbana più ampia.",
  "Qatar Airways’ graduate pages could not be read, and no European-graduate employer in Doha was found beyond the free-zone registrations.":
    "Le pagine di Qatar Airways per i laureati non si sono potute leggere, e a Doha non è stato trovato alcun datore di lavoro per laureati europei oltre alle registrazioni nella zona franca.",
  "Country brief: Doha, the Qatar Financial Centre, pay, employers and standing":
    "Dossier sul paese: Doha, il Qatar Financial Centre, retribuzioni, datori di lavoro e posizionamento",
  "§1–3 Gulf work rules, hiring evidence and safety":
    "§1–3 regole del lavoro nel Golfo, prove di assunzione e sicurezza",
  "The capital and seat of the Qatar Financial Centre":
    "La capitale e sede del Qatar Financial Centre",
  "Consulting and professional services":
    "Consulenza e servizi professionali",
  "Media":
    "Media",
  "over 4,700 by June 2026":
    "oltre 4.700 a giugno 2026",
  "Firms registered at the Qatar Financial Centre":
    "Le aziende registrate al Qatar Financial Centre",
  "graduate programme for Qatari nationals":
    "programma per laureati riservato ai cittadini qatarioti",
  "graduate programme for Qatari graduates":
    "programma per neolaureati qatarioti",
  "over 300, with $58.7 million raised in 2025":
    "oltre 300, con 58,7 milioni di $ raccolti nel 2025",
  "Technology start-ups":
    "Start-up tecnologiche",
  "28,856 paid workers averaging QAR 29,403 a month in 2023":
    "28.856 lavoratori dipendenti con una media di 29.403 QAR al mese nel 2023",
  "Financial and insurance workers":
    "Lavoratori della finanza e delle assicurazioni",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "Pay by sector":
    "Retribuzioni per settore",
  "The Qatar Investment Authority’s one-year Journey graduate programme requires a Qatari national or the child of a Qatari mother; its international hiring is for highly experienced specialists.":
    "Il Journey Program di un anno della Qatar Investment Authority richiede la cittadinanza qatariota o una madre qatariota; le assunzioni internazionali sono per specialisti molto esperti.",
  "The Qatar Financial Centre onboarded 1,135 firms in the first half of 2026, 37% more than a year earlier, for a total of over 4,700; the largest groups of new firms were technology and innovation (544), media (173) and consulting and professional services (166).":
    "Nel primo semestre 2026 il Qatar Financial Centre ha registrato 1.135 aziende, il 37% in più di un anno prima, per un totale di oltre 4.700; i gruppi più numerosi di nuove aziende erano tecnologia e innovazione (544), media (173) e consulenza e servizi professionali (166).",
  "The UK Foreign Office reports strikes and retaliatory attacks by Iran in the region, Qatar included, since 8 July 2026, and warns of flight cancellations and airspace closures; it does not advise against travel to Qatar as a whole.":
    "Il Foreign Office britannico riporta attacchi e rappresaglie dell’Iran nella regione, Qatar compreso, dall’8 luglio 2026, e avverte di cancellazioni di voli e chiusure dello spazio aereo; non sconsiglia i viaggi in Qatar nel suo complesso.",
  "The Global Financial Centres Index 40 (September 2026) ranks Doha 52nd of 117 financial centres (48th in the March 2026 edition), fifth in the Middle East and Africa after Dubai (9th), Abu Dhabi (13th), Casablanca (38th) and Riyadh (46th); Kuwait City is 60th.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Doha al 52º posto su 117 centri finanziari (48º nell’edizione di marzo 2026), al quinto posto in Medio Oriente e Africa dopo Dubai (9º), Abu Dhabi (13º), Casablanca (38º) e Riad (46º); Kuwait City è 60ª.",
  "Startup Genome’s 2026 report counts over 300 technology start-ups in Qatar, which raised $58.7 million (QAR 214 million) of venture funding in 2025, nearly double the year before, with 93% of deals at early stage and more than 22 incubators and innovation platforms.":
    "Il rapporto 2026 di Startup Genome conta oltre 300 start-up tecnologiche in Qatar, che nel 2025 hanno raccolto 58,7 milioni di $ (214 milioni di QAR) di venture capital, quasi il doppio dell’anno prima, con il 93% degli accordi in fase iniziale e più di 22 incubatori e piattaforme di innovazione.",
  "Qatar’s real GDP grew 2.9% in the third quarter of 2025 against QAR 180.9 billion a year earlier, with non-hydrocarbon activities up 4.4% and 15 of 17 economic activities growing.":
    "Il PIL reale del Qatar è cresciuto del 2,9% nel terzo trimestre 2025 rispetto ai 180,9 miliardi di QAR dell’anno prima, con le attività non legate agli idrocarburi in crescita del 4,4% e 15 attività economiche su 17 in espansione.",
  "In 2023 Qatar’s 28,856 paid workers in financial and insurance activities averaged QAR 29,403 a month and its 25,965 in information and communication QAR 28,517, against QAR 11,025 for all 2,171,062 paid workers (author’s weighting of the male and female averages).":
    "Nel 2023 i 28.856 lavoratori dipendenti del Qatar nelle attività finanziarie e assicurative guadagnavano in media 29.403 QAR al mese e i 25.965 nell’informazione e comunicazione 28.517 QAR, contro 11.025 QAR per tutti i 2.171.062 lavoratori dipendenti (media ponderata di chi scrive tra le medie di uomini e donne).",
  "The National Planning Council’s open data give Doha municipality 1,186,023 residents, about 40% of the country, from the 2020 census base that its tables repeat for 2020 to 2024.":
    "I dati aperti del National Planning Council danno al comune di Doha 1.186.023 residenti, circa il 40% del paese, dalla base del censimento del 2020 che le sue tabelle ripetono per il periodo 2020-2024.",
  "Standard employment contracts in Qatar are registered in Arabic and English on the Ministry of Labour portal, EY's Doha graduate programme for nationals asks for excellent written and verbal communication in Arabic and English, and Qatar Living's CV guide says Arabic matters more for government, semi-government and some customer-facing roles; no source measured English at work.":
    "I contratti di lavoro standard in Qatar sono registrati in arabo e inglese sul portale del Ministero del Lavoro, il programma per laureati di EY a Doha per i cittadini chiede un’ottima comunicazione scritta e orale in arabo e inglese, e la guida ai CV di Qatar Living dice che l’arabo conta di più per i ruoli governativi, semi-governativi e a contatto con i clienti; nessuna fonte ha misurato l’inglese al lavoro.",
  "Graduate recruiting in Qatar runs on university fairs rather than one national season: the Doha Institute for Graduate Studies held its 9th fair on 21 January 2026 with about 30 organisations, the Qatar Foundation Alumni Office its Education City Job Fair on 15 February 2026 for Qatar Foundation students and alumni, Lusail University its third fair on 22-23 October 2025, and Qatar University's fair of 11-14 September 2023 had 73 employers; QatarEnergy says its graduate assessment may take up to 90 days.":
    "Il reclutamento dei laureati in Qatar si regge sulle fiere universitarie più che su un’unica stagione nazionale: il Doha Institute for Graduate Studies ha tenuto la sua 9ª fiera il 21 gennaio 2026 con circa 30 organizzazioni, il Qatar Foundation Alumni Office la sua Education City Job Fair il 15 febbraio 2026 per studenti ed ex studenti della Qatar Foundation, la Lusail University la sua terza fiera il 22-23 ottobre 2025, e la fiera della Qatar University dell’11-14 settembre 2023 ha avuto 73 datori di lavoro; QatarEnergy dice che la sua valutazione per laureati può durare fino a 90 giorni.",
  "Foreign nationals were 83% of Qatar's private workforce and 94% of its total workforce in 2023, the national strategy aims for 20% Qatari participation in the private and semi-private workforce by 2030, and the World Bank's modelled youth unemployment rate for Qatar was 0.559% in 2025; no graduate-specific unemployment or time-to-first-job figure was found.":
    "Gli stranieri erano l’83% della forza lavoro privata del Qatar e il 94% di quella totale nel 2023, la strategia nazionale mira a una partecipazione qatariota del 20% nella forza lavoro privata e semi-privata entro il 2030, e il tasso di disoccupazione giovanile stimato dalla Banca Mondiale per il Qatar era dello 0,559% nel 2025; non è stato trovato alcun dato su disoccupazione dei laureati o tempi per il primo lavoro.",
  "QatarEnergy’s graduate pages describe a programme for \"recent Qatari graduates\", with a selection process that can take up to 90 days, and its vocational and scholarship programmes are for Qataris and children of Qatari women.":
    "Le pagine di QatarEnergy per i laureati descrivono un programma per \"neolaureati qatarioti\", con una selezione che può durare fino a 90 giorni, e i suoi programmi professionali e di borse di studio sono per qatarioti e figli di donne qatariote."
});

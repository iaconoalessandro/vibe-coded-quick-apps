/* Atlas record: Turkey. Read 3 October 2026; log P77
 * (research/verification/round-4j.md, round-4k.md, round-5d.md). Outside Europe in this guide: routes
 * for EU/EEA/Swiss and UK passports only. Turkey had no coverage in the
 * research library. Student work rules are read on Study in Türkiye (run by
 * the Council of Higher Education) and METU's international office; the
 * city figures on the Banks Association of Türkiye's yearbook (PDF,
 * extracted locally). Advisories: the UK's (FCDO content API) and the US
 * State Department's (read through its advisories RSS feed; the page itself
 * refused automated reads). Italy's Viaggiare Sicuri could not be read.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5d (3 October 2026) added standing
 * (GFCI 40, Startup Genome), province populations (TurkStat, 2025) and GDP (TurkStat, 2024,
 * reported by the press; the statistics office's own portal does not serve its tables to
 * scripts), Koç Holding's Fortune Global 500 entry, Turkish Aerospace in Ankara, the Aegean
 * Free Zone and Oyak Renault in Bursa. No Turkish wage series or rent could be read
 * (Numbeo returned HTTP 429). Brief: research/countries/tr-turkey.md. */

ATLAS.add({
  id: "TR",
  checked: "2026-10-05",
  log: "P77",
  summary: "Istanbul is Turkey’s banking capital, with 44% of the country’s bank staff and the state banks’ head offices in its finance centre, and a start-up ecosystem Startup Genome ranks third among emerging ecosystems worldwide. Master’s students can get a work permit from their first year through an employer’s application, and graduates can obtain a one-year job-search residence permit within six months of graduation. The UK advises against the Syrian border area; the US warns of arbitrary detentions.",
  sectors: ["Banking and financial services", "Manufacturing", "Automotive", "Tourism", "Construction"],
  roles: ["finance"],
  hubs: [
    {
      id: "istanbul", name: "Istanbul", lat: 41.01, lon: 28.98,
      knownFor: "Turkey’s banking capital and home of its stock exchange",
      why: ["tr-banks", "tr-gfci", "tr-gser", "tr-koc", "tr-pop", "tr-gdp", "tr-gdppc"],
      sectors: ["Banking", "Capital markets", "Insurance", "Trade", "Start-ups"],
      employers: [
        { t: "Banks", note: "83,582 staff in Istanbul, against 18,621 in Ankara (end of 2025)", c: "tr-banks" },
        { name: "Ziraat Bankası", note: "head office in the Istanbul Finance Centre", c: "tr-banks" },
        { name: "Akbank", note: "head office in Levent, Istanbul", c: "tr-banks" },
        {
          name: "Koç Holding",
          note: "headquarters in Istanbul; 120,219 staff, 203rd on the Fortune Global 500",
          c: "tr-koc"
        },
        { t: "Start-up ecosystem", note: "third among emerging ecosystems worldwide (Startup Genome)", c: "tr-gser" }
      ],
      demand: {
        finance: ["dominant", "tr-banks", "tr-gfci"],
        software: ["strong", "tr-gser"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["dominant", "tr-banks"],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [{ f: "finance", s: [5, 2, 1], c: ["tr-banks", "tr-gfci"] }, { f: "software", s: [5, 3, 2], c: ["tr-gser"] }],
      metrics: {
        pop: {
          v: 15754053,
          year: 2025,
          area: "region",
          tag: "data",
          src: "https://www.birgun.net/haber/tuik-announced-turkeys-population-has-passed-86-million-691706",
          by: "TurkStat, Address Based Population Registration System results 2025 (31 December 2025, published 9 Feb 2026), Istanbul province, as reported by BirGün",
          seen: "2026-10-03"
        },
        gdp: {
          v: 13010.7,
          cur: "TRY",
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://www.capital.com.tr/haberler/tum-haberler/tuik-acikladi-2024-yilinda-gayrisafi-yurt-ici-hasiladan-en-yuksek-payi-hangi-il-aldi",
          by: "TurkStat, Gross Domestic Product by Provinces 2024 (current prices, Istanbul province), as reported by Capital (Dec 2025)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "ankara", name: "Ankara", lat: 39.93, lon: 32.86,
      knownFor: "The capital, second in Turkey for bank staff",
      why: ["tr-ankara", "tr-tusas", "tr-pop", "tr-gdp", "tr-gdppc"],
      sectors: ["Government", "Banking", "Defence"],
      employers: [
        { t: "Banks", note: "18,621 staff (2025)", c: "tr-ankara" },
        {
          name: "Turkish Aerospace (TUSAŞ)",
          note: "headquarters in Kahramankazan; research building at METU Teknokent",
          c: "tr-tusas"
        }
      ],
      demand: {
        finance: ["strong", "tr-ankara"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [4, 2, 1], c: ["tr-ankara"] }],
      metrics: {
        pop: {
          v: 5910320,
          year: 2025,
          area: "region",
          tag: "data",
          src: "https://www.birgun.net/haber/tuik-announced-turkeys-population-has-passed-86-million-691706",
          by: "TurkStat, Address Based Population Registration System results 2025 (31 December 2025, published 9 Feb 2026), Ankara province, as reported by BirGün",
          seen: "2026-10-03"
        },
        gdp: {
          v: 4672.8,
          cur: "TRY",
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://www.capital.com.tr/haberler/tum-haberler/tuik-acikladi-2024-yilinda-gayrisafi-yurt-ici-hasiladan-en-yuksek-payi-hangi-il-aldi",
          by: "TurkStat, Gross Domestic Product by Provinces 2024 (current prices, Ankara province), as reported by Capital (Dec 2025)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "izmir", name: "Izmir", lat: 38.42, lon: 27.14,
      knownFor: "The Aegean port city, third in Turkey for bank staff",
      why: ["tr-izmir", "tr-esbas", "tr-pop", "tr-gdp", "tr-gdppc"],
      sectors: ["Ports and logistics", "Trade", "Agriculture and food"],
      employers: [
        { t: "Banks", note: "9,943 staff (2025)", c: "tr-izmir" },
        {
          name: "Aegean Free Zone (ESBAŞ)",
          note: "about 23,500 people employed; $3.2 billion of exports in 2025",
          c: "tr-esbas"
        }
      ],
      demand: {
        finance: ["strong", "tr-izmir"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [3, 2, 1], c: ["tr-izmir"] }],
      metrics: {
        pop: {
          v: 4504185,
          year: 2025,
          area: "region",
          tag: "data",
          src: "https://www.birgun.net/haber/tuik-announced-turkeys-population-has-passed-86-million-691706",
          by: "TurkStat, Address Based Population Registration System results 2025 (31 December 2025, published 9 Feb 2026), Izmir province, as reported by BirGün",
          seen: "2026-10-03"
        },
        gdp: {
          v: 2562.8,
          cur: "TRY",
          year: 2024,
          area: "region",
          tag: "data",
          src: "https://www.capital.com.tr/haberler/tum-haberler/tuik-acikladi-2024-yilinda-gayrisafi-yurt-ici-hasiladan-en-yuksek-payi-hangi-il-aldi",
          by: "TurkStat, Gross Domestic Product by Provinces 2024 (current prices, Izmir province), as reported by Capital (Dec 2025)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "bursa", name: "Bursa", lat: 40.19, lon: 29.06,
      knownFor: "Turkey’s car-making and textile city south of Istanbul",
      why: ["tr-bursa", "tr-renault", "tr-pop", "tr-gdppc"],
      sectors: ["Automotive", "Manufacturing", "Luxury and fashion"],
      employers: [
        { t: "Banks", note: "4,714 staff (2025)", c: "tr-bursa" },
        { name: "Oyak Renault", note: "387,113 vehicles built in Bursa in 2025", c: "tr-renault" }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [2, 1, 1], c: ["tr-bursa"] }],
      metrics: {
        pop: {
          v: 3263011,
          year: 2025,
          area: "region",
          tag: "data",
          src: "https://www.birgun.net/haber/tuik-announced-turkeys-population-has-passed-86-million-691706",
          by: "TurkStat, Address Based Population Registration System results 2025 (31 December 2025, published 9 Feb 2026), Bursa province, as reported by BirGün",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["tr-lang"] },
    { k: "Recruiting calendar", c: ["tr-cal"] },
    { k: "Where demand is now", c: ["tr-banks", "tr-gser", "tr-renault"] },
    { k: "Graduate labour market", c: ["tr-grad-lab"] }
  ],

  advisory: ["tr-fcdo", "tr-us"],

  briefs: [
    [
      "countries/tr-turkey.md",
      "Country brief: Istanbul, Ankara, Izmir and Bursa, banks, start-ups, industry and standing"
    ]
  ],
  gaps: [
    "Turkey was not covered by the research library before this record.",
    "Turkey visas, student work rules and the one-year graduate job-search permit (Law 6458 Art 31/1-ı) are fully verified in visas_immigration/turkey/turkey_visas_immigration_guide.md.",
    "Pay, tax, Turkish-language demands, youth unemployment and demand outside banking and start-ups were not researched on a page that could be dated.",
    "TurkStat’s own tables (population, provincial GDP) were not served to scripts: the figures are the institute’s, as reported by newspapers. Bursa’s total GDP was not in any report read; no wage series and no rent (Numbeo answered HTTP 429) was read for any city.",
    "No family is rated in Bursa; Ankara and Izmir are rated from bank-staff counts alone (strong means second or third in Turkey with at least 5,000 staff). Istanbul software is rated strong on Startup Genome’s ranking, not on a count of employers or jobs; Turkish Aerospace in Ankara and the Aegean Free Zone in Izmir are named but not rated, because no source says they hire graduates in a rated family."
  ],

  claims: {
    "tr-cal": { t: "Graduate recruiting in Turkey is concentrated in spring: Akbank’s management-trainee applications closed on 30 March 2026, Koç’s Genç Yetenek ran from 26 March to 19 April 2026 (summit on 5 May, results on 15 June, start in July), and Turkcell’s GNÇYTNK evaluation began in January; Bilkent’s career fair was on 17–18 February 2026, Kariyer.net’s online Career Days are on 27 October 2026, and the 2026 KPSS exams for graduates were held in September.", tag: "employer-stated", src: "https://anbeankampus.co/koc-holding/koc-genc-yetenek-programi/", by: "AnBean Kampüs pages for Akbank and Koç programmes; Yeni Birlik on Turkcell GNÇYTNK; Bilkent University; Kariyer.net; ÖSYM (all read 8 Oct 2026)", seen: "2026-10-08" },
    "tr-lang": { t: "Turkish is the language of nearly all graduate hiring pages and processes read, and English is tested in banking: Kuveyt Türk’s trainee process starts with an English exam (2018 page) and Ziraat’s written exam has 40 English questions out of 140, with a 60% pass mark for that section; Akbank’s 2026 trainee page mentions no English exam.", tag: "practitioner consensus", src: "https://rehberpanda.com/blog/2026-bankaci-olma-komple-kariyer-rehberi-turk-bankacilik-devlet-ozel-banka-mufettis-cfa-frm-fintech-yurt-disi-maas-bant/", by: "RehberPanda bank-career guide 2026; Kuveyt Türk management-trainee page; AnBean Kampüs Akbank page (all read 8 Oct 2026)", seen: "2026-10-08" },
    "tr-grad-lab": { t: "In 2025, 73.9% of Turkey’s bachelor’s graduates were in registered employment, they took 14.2 months on average to find a first job, and 56.7% of those in paid work held a job matching their field; unemployment among 15-to-24-year-olds was 16.2% in June 2025 (12.3% for men, 23.7% for women).", tag: "data", src: "https://www.cumhuriyet.com.tr/ekonomi/tuik-2025-yuksekogretim-istihdam-gostergelerini-acikladi-en-cok-kazandiran-ve-en-hizli-is-bulan-bolumler-belli-oldu-2523191", by: "TÜİK higher-education employment indicators 2025 (23 Jul 2026) via Cumhuriyet and Hürriyet Daily News; TÜİK June 2025 youth unemployment via Bianet", seen: "2026-10-08" },
    'tr-banks': { t: "Of Turkey’s 189,636 bank employees at the end of 2025, 83,582 (44%) worked in Istanbul and 18,621 in Ankara; the state banks Ziraat, Halkbank and Vakıfbank give head-office addresses in the Istanbul Finance Centre at Ümraniye, and Akbank in Levent.", tag: "data", src: "https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf", by: "Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17 and bank directory", seen: "2026-10-03" },
    'tr-fcdo': { t: "The UK Foreign Office advises against all travel within 10 km of the border with Syria because of fighting and a heightened risk of terrorism, and reports Iranian strikes in the wider region since 8 July 2026.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/turkey", by: "FCDO travel advice, Turkey (updated 21 Sep 2026)", seen: "2026-10-03" },
    'tr-us': { t: "The US State Department rates Türkiye Level 2, exercise increased caution, because of terrorism, armed conflict and arbitrary detentions, and says not to travel to the border region with Syria and Iraq; it reports Americans detained on scant evidence and subject to exit bans.", tag: "data", src: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/turkey-travel-advisory.html", by: "US Department of State travel advisory (9 Jun 2026), read through its advisories RSS feed", seen: "2026-10-03" },
    'tr-ankara': { t: "Ankara had 18,621 bank employees at the end of 2025, the second-largest number after Istanbul’s 83,582.", tag: "data", src: "https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf", by: "Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17", seen: "2026-10-03" },
    'tr-izmir': { t: "Izmir had 9,943 bank employees at the end of 2025, third after Istanbul and Ankara.", tag: "data", src: "https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf", by: "Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17", seen: "2026-10-03" },
    'tr-bursa': { t: "Bursa had 4,714 bank employees at the end of 2025.", tag: "data", src: "https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf", by: "Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17", seen: "2026-10-03" },
    'tr-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Istanbul 89th of 117 financial centres (101st in the March 2026 edition); in the region Dubai is 9th, Abu Dhabi 13th, Riyadh 46th, Doha 52nd, Kuwait City 60th, Bahrain 74th and Tel Aviv 94th.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'tr-gser': { t: "Startup Genome ranks Istanbul third among emerging start-up ecosystems worldwide (Global Startup Ecosystem Report 2025), after a 423% rise in funding in 2024; its 2024 edition placed it fifth in Europe for affordable talent and in the top ten in Europe for funding.", tag: "data", src: "https://startupgenome.com/insights/istanbuls-tech-ecosystem-by-the-numbers", by: "Startup Genome, Istanbul’s Tech Ecosystem By the Numbers (insight page; the 2026 edition’s Istanbul entry was not read)", seen: "2026-10-03" },
    'tr-koc': { t: "Koç Holding, headquartered in Istanbul, ranks 203rd on the Fortune Global 500 of 2026, with revenues of $69,742 million and 120,219 employees.", tag: "data", src: "https://fortune.com/company/koc-holding/global500/", by: "Fortune, Global 500 2026, company page (updated 16 Sep 2026)", seen: "2026-10-03" },
    'tr-pop': { t: "TurkStat’s address-based population count at 31 December 2025 gives Turkey 86,092,168 residents, of whom 15,754,053 (18.3%) live in Istanbul, 5,910,320 in Ankara, 4,504,185 in Izmir and 3,263,011 in Bursa.", tag: "data", src: "https://www.birgun.net/haber/tuik-announced-turkeys-population-has-passed-86-million-691706", by: "TurkStat, Address Based Population Registration System results 2025 (published 9 Feb 2026), as reported by BirGün; the bulletin itself is on data.tuik.gov.tr, which does not serve its tables to scripts", seen: "2026-10-03" },
    'tr-gdp': { t: "In 2024 Istanbul produced TRY 13,010.7 billion of gross domestic product, 29.2% of Turkey’s, ahead of Ankara with TRY 4,672.8 billion (10.5%) and Izmir with TRY 2,562.8 billion (5.7%); the five largest provinces made 53.0% of the total.", tag: "data", src: "https://www.capital.com.tr/haberler/tum-haberler/tuik-acikladi-2024-yilinda-gayrisafi-yurt-ici-hasiladan-en-yuksek-payi-hangi-il-aldi", by: "TurkStat, Gross Domestic Product by Provinces 2024, as reported by Capital (Dec 2025)", seen: "2026-10-03" },
    'tr-gdppc': { t: "Gross domestic product per head in 2024 was $24,452 in Istanbul, $24,031 in Ankara, $16,949 in Izmir and $15,014 in Bursa, which ranked 13th among Turkey’s 81 provinces.", tag: "data", src: "https://www.haberturk.com/turkiye-nin-en-zengin-illeri-belli-oldu-3844630-ekonomi", by: "TurkStat, Gross Domestic Product by Provinces 2024, as reported by Habertürk", seen: "2026-10-03" },
    'tr-tusas': { t: "Turkish Aerospace (TUSAŞ) gives its headquarters as Kahramankazan, Ankara, with a research building at the METU Teknokent in Ankara and an office at the İTÜ ARI Teknokent in Istanbul, and runs student-team, university-industry and in-house start-up programmes.", tag: "employer-stated", src: "https://www.tusas.com/en/contact", by: "Turkish Aerospace, Contact (offices) and University-Industry Collaboration pages", seen: "2026-10-03" },
    'tr-esbas': { t: "The Aegean Free Zone (ESBAŞ), the operator says, exported $3.2 billion in 2025, up 12%, on a trade volume of $6.332 billion; it employed about 23,500 people and made 24% of Izmir’s exports.", tag: "employer-stated", src: "https://www.dunya.com/ekonomi/ege-serbest-bolgesinden-rekor-ihracat-38-sehrin-toplamini-astilar-haberi-811256", by: "ESBAŞ chairman Faruk Güler, as reported by Dünya (2026; the text read carries no date)", seen: "2026-10-03" },
    'tr-renault': { t: "Oyak Renault’s Bursa factory built 387,113 vehicles in 2025, of which 336,336 were passenger cars, and exported 271,994, about 14% more than in 2024; its chairman said more than 70% of output is exported.", tag: "employer-stated", src: "https://www.ekonomigazetesi.com/sirket-haberleri/oyak-renaultnun-2025-uretimi-387-bini-asti-69943", by: "Oyak Renault, as reported by Ekonomi Gazetesi (15 Jan 2026)", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "Graduate recruiting in Turkey is concentrated in spring: Akbank’s management-trainee applications closed on 30 March 2026, Koç’s Genç Yetenek ran from 26 March to 19 April 2026 (summit on 5 May, results on 15 June, start in July), and Turkcell’s GNÇYTNK evaluation began in January; Bilkent’s career fair was on 17–18 February 2026, Kariyer.net’s online Career Days are on 27 October 2026, and the 2026 KPSS exams for graduates were held in September.":
    "Il reclutamento dei neolaureati in Turchia si concentra in primavera: le candidature al programma management trainee di Akbank sono chiuse il 30 marzo 2026, il Genç Yetenek di Koç si è svolto dal 26 marzo al 19 aprile 2026 (vertice il 5 maggio, risultati il 15 giugno, inizio a luglio), e la valutazione del GNÇYTNK di Turkcell è iniziata a gennaio; la fiera della carriera della Bilkent era il 17–18 febbraio 2026, le Giornate della Carriera online di Kariyer.net sono il 27 ottobre 2026, e gli esami KPSS 2026 per i laureati si sono tenuti a settembre.",
  "Turkish is the language of nearly all graduate hiring pages and processes read, and English is tested in banking: Kuveyt Türk’s trainee process starts with an English exam (2018 page) and Ziraat’s written exam has 40 English questions out of 140, with a 60% pass mark for that section; Akbank’s 2026 trainee page mentions no English exam.":
    "Il turco è la lingua di quasi tutte le pagine e i processi di selezione per neolaureati letti, e l’inglese è verificato nel settore bancario: il processo da trainee di Kuveyt Türk parte con un esame di inglese (pagina del 2018) e l’esame scritto di Ziraat ha 40 domande di inglese su 140, con una soglia del 60% per quella sezione; la pagina trainee 2026 di Akbank non menziona un esame di inglese.",
  "In 2025, 73.9% of Turkey’s bachelor’s graduates were in registered employment, they took 14.2 months on average to find a first job, and 56.7% of those in paid work held a job matching their field; unemployment among 15-to-24-year-olds was 16.2% in June 2025 (12.3% for men, 23.7% for women).":
    "Nel 2025 il 73,9% dei laureati triennali turchi aveva un impiego registrato, hanno impiegato in media 14,2 mesi per trovare il primo lavoro, e il 56,7% di chi aveva un lavoro retribuito svolgeva un lavoro coerente con il proprio campo; la disoccupazione tra i 15-24enni era del 16,2% a giugno 2025 (12,3% per gli uomini, 23,7% per le donne).",
  "Istanbul is Turkey’s banking capital, with 44% of the country’s bank staff and the state banks’ head offices in its finance centre, and a start-up ecosystem Startup Genome ranks third among emerging ecosystems worldwide. Master’s students can get a work permit from their first year through an employer’s application, and graduates can obtain a one-year job-search residence permit within six months of graduation. The UK advises against the Syrian border area; the US warns of arbitrary detentions.":
    "Istanbul è la capitale bancaria della Turchia, con il 44% dei dipendenti bancari del paese e le sedi centrali delle banche pubbliche nel suo centro finanziario, e un ecosistema di start-up che Startup Genome colloca al terzo posto tra gli ecosistemi emergenti del mondo. Gli studenti di master possono ottenere un permesso di lavoro dal primo anno su domanda di un datore di lavoro, e i laureati possono ottenere un permesso di soggiorno per ricerca lavoro di un anno entro sei mesi dalla laurea. Il Regno Unito sconsiglia la zona di confine con la Siria; gli Stati Uniti avvertono di detenzioni arbitrarie.",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Manufacturing":
    "Manifattura",
  "Automotive":
    "Automotive",
  "Tourism":
    "Turismo",
  "Construction":
    "Costruzioni",
  "Turkey was not covered by the research library before this record.":
    "La Turchia non era coperta dalla biblioteca di ricerca prima di questa scheda.",
  "Turkey visas, student work rules and the one-year graduate job-search permit (Law 6458 Art 31/1-ı) are fully verified in visas_immigration/turkey/turkey_visas_immigration_guide.md.":
    "I visti per la Turchia, le regole di lavoro per studenti e il permesso di soggiorno per ricerca lavoro di un anno per laureati (Legge 6458 art. 31/1-ı) sono pienamente verificati in visas_immigration/turkey/turkey_visas_immigration_guide.md.",
  "Pay, tax, Turkish-language demands, youth unemployment and demand outside banking and start-ups were not researched on a page that could be dated.":
    "Gli stipendi, le tasse, i requisiti di turco, la disoccupazione giovanile e la domanda fuori da banche e start-up non sono stati ricercati su una pagina databile.",
  "TurkStat’s own tables (population, provincial GDP) were not served to scripts: the figures are the institute’s, as reported by newspapers. Bursa’s total GDP was not in any report read; no wage series and no rent (Numbeo answered HTTP 429) was read for any city.":
    "Le tabelle di TurkStat (popolazione, PIL provinciale) non sono state rese accessibili agli script: i dati sono dell’istituto, riportati dai giornali. Il PIL totale di Bursa non figurava in nessun rapporto letto; non è stata letta alcuna serie di retribuzioni né alcun affitto (Numbeo ha risposto HTTP 429) per nessuna città.",
  "No family is rated in Bursa; Ankara and Izmir are rated from bank-staff counts alone (strong means second or third in Turkey with at least 5,000 staff). Istanbul software is rated strong on Startup Genome’s ranking, not on a count of employers or jobs; Turkish Aerospace in Ankara and the Aegean Free Zone in Izmir are named but not rated, because no source says they hire graduates in a rated family.":
    "Nessuna famiglia è valutata a Bursa; Ankara e Smirne sono valutate solo dal numero di dipendenti bancari (forte significa seconda o terza in Turchia con almeno 5.000 dipendenti). Il software di Istanbul è valutato forte sulla classifica di Startup Genome, non su un conteggio di datori di lavoro o posti; Turkish Aerospace ad Ankara e la Zona franca dell’Egeo a Smirne sono citate ma non valutate, perché nessuna fonte dice che assumano laureati in una famiglia valutata.",
  "Country brief: Istanbul, Ankara, Izmir and Bursa, banks, start-ups, industry and standing":
    "Dossier sul paese: Istanbul, Ankara, Smirne e Bursa, banche, start-up, industria e posizionamento",
  "Turkey’s banking capital and home of its stock exchange":
    "La capitale bancaria della Turchia e sede della sua borsa",
  "Banking":
    "Banca",
  "Capital markets":
    "Mercati dei capitali",
  "Insurance":
    "Assicurazioni",
  "Trade":
    "Commercio",
  "Start-ups":
    "Start-up",
  "83,582 staff in Istanbul, against 18,621 in Ankara (end of 2025)":
    "83.582 dipendenti a Istanbul, contro 18.621 ad Ankara (fine 2025)",
  "Banks":
    "Le banche",
  "head office in the Istanbul Finance Centre":
    "sede nel Centro finanziario di Istanbul",
  "head office in Levent, Istanbul":
    "sede a Levent, Istanbul",
  "headquarters in Istanbul; 120,219 staff, 203rd on the Fortune Global 500":
    "sede a Istanbul; 120.219 dipendenti, 203º nella Fortune Global 500",
  "third among emerging ecosystems worldwide (Startup Genome)":
    "terzo tra gli ecosistemi emergenti del mondo (Startup Genome)",
  "Start-up ecosystem":
    "Ecosistema di start-up",
  "The capital, second in Turkey for bank staff":
    "La capitale, seconda in Turchia per personale bancario",
  "Government":
    "Pubblica amministrazione",
  "Defence":
    "Difesa",
  "18,621 staff (2025)":
    "18.621 dipendenti (2025)",
  "headquarters in Kahramankazan; research building at METU Teknokent":
    "sede a Kahramankazan; edificio di ricerca al METU Teknokent",
  "The Aegean port city, third in Turkey for bank staff":
    "La città portuale dell’Egeo, terza in Turchia per personale bancario",
  "Ports and logistics":
    "Porti e logistica",
  "Agriculture and food":
    "Agricoltura e alimentare",
  "9,943 staff (2025)":
    "9.943 dipendenti (2025)",
  "about 23,500 people employed; $3.2 billion of exports in 2025":
    "circa 23.500 persone occupate; 3,2 miliardi di $ di esportazioni nel 2025",
  "Turkey’s car-making and textile city south of Istanbul":
    "La città turca dell’auto e del tessile a sud di Istanbul",
  "Luxury and fashion":
    "Lusso e moda",
  "4,714 staff (2025)":
    "4.714 dipendenti (2025)",
  "387,113 vehicles built in Bursa in 2025":
    "387.113 veicoli prodotti a Bursa nel 2025",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "Of Turkey’s 189,636 bank employees at the end of 2025, 83,582 (44%) worked in Istanbul and 18,621 in Ankara; the state banks Ziraat, Halkbank and Vakıfbank give head-office addresses in the Istanbul Finance Centre at Ümraniye, and Akbank in Levent.":
    "Dei 189.636 dipendenti bancari della Turchia a fine 2025, 83.582 (il 44%) lavoravano a Istanbul e 18.621 ad Ankara; le banche pubbliche Ziraat, Halkbank e Vakıfbank indicano la sede centrale nel Centro finanziario di Istanbul, a Ümraniye, e Akbank a Levent.",
  "The UK Foreign Office advises against all travel within 10 km of the border with Syria because of fighting and a heightened risk of terrorism, and reports Iranian strikes in the wider region since 8 July 2026.":
    "Il Foreign Office britannico sconsiglia tutti i viaggi entro 10 km dal confine con la Siria per i combattimenti e l’elevato rischio di terrorismo, e riporta attacchi iraniani nella regione dall’8 luglio 2026.",
  "The US State Department rates Türkiye Level 2, exercise increased caution, because of terrorism, armed conflict and arbitrary detentions, and says not to travel to the border region with Syria and Iraq; it reports Americans detained on scant evidence and subject to exit bans.":
    "Il Dipartimento di Stato statunitense classifica la Turchia al livello 2, maggiore prudenza, per terrorismo, conflitti armati e detenzioni arbitrarie, e sconsiglia di recarsi nella regione di confine con Siria e Iraq; riporta cittadini americani detenuti con prove scarse e soggetti a divieti di espatrio.",
  "Ankara had 18,621 bank employees at the end of 2025, the second-largest number after Istanbul’s 83,582.":
    "A fine 2025 Ankara contava 18.621 dipendenti bancari, il secondo numero più alto dopo gli 83.582 di Istanbul.",
  "Izmir had 9,943 bank employees at the end of 2025, third after Istanbul and Ankara.":
    "A fine 2025 Smirne contava 9.943 dipendenti bancari, terza dopo Istanbul e Ankara.",
  "Bursa had 4,714 bank employees at the end of 2025.":
    "A fine 2025 Bursa contava 4.714 dipendenti bancari.",
  "The Global Financial Centres Index 40 (September 2026) ranks Istanbul 89th of 117 financial centres (101st in the March 2026 edition); in the region Dubai is 9th, Abu Dhabi 13th, Riyadh 46th, Doha 52nd, Kuwait City 60th, Bahrain 74th and Tel Aviv 94th.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Istanbul all’89º posto su 117 centri finanziari (101º nell’edizione di marzo 2026); nella regione Dubai è 9º, Abu Dhabi 13º, Riad 46º, Doha 52º, Kuwait City 60º, Bahrein 74º e Tel Aviv 94º.",
  "Startup Genome ranks Istanbul third among emerging start-up ecosystems worldwide (Global Startup Ecosystem Report 2025), after a 423% rise in funding in 2024; its 2024 edition placed it fifth in Europe for affordable talent and in the top ten in Europe for funding.":
    "Startup Genome colloca Istanbul al terzo posto tra gli ecosistemi di start-up emergenti del mondo (Global Startup Ecosystem Report 2025), dopo un aumento dei finanziamenti del 423% nel 2024; l’edizione 2024 l’aveva messa quinta in Europa per talento a costi accessibili e tra le prime dieci in Europa per finanziamenti.",
  "Koç Holding, headquartered in Istanbul, ranks 203rd on the Fortune Global 500 of 2026, with revenues of $69,742 million and 120,219 employees.":
    "Koç Holding, con sede a Istanbul, è al 203º posto nella Fortune Global 500 del 2026, con ricavi di 69.742 milioni di $ e 120.219 dipendenti.",
  "TurkStat’s address-based population count at 31 December 2025 gives Turkey 86,092,168 residents, of whom 15,754,053 (18.3%) live in Istanbul, 5,910,320 in Ankara, 4,504,185 in Izmir and 3,263,011 in Bursa.":
    "Il censimento anagrafico dell’istituto di statistica TurkStat al 31 dicembre 2025 dà alla Turchia 86.092.168 residenti, dei quali 15.754.053 (18,3%) a Istanbul, 5.910.320 ad Ankara, 4.504.185 a Smirne e 3.263.011 a Bursa.",
  "In 2024 Istanbul produced TRY 13,010.7 billion of gross domestic product, 29.2% of Turkey’s, ahead of Ankara with TRY 4,672.8 billion (10.5%) and Izmir with TRY 2,562.8 billion (5.7%); the five largest provinces made 53.0% of the total.":
    "Nel 2024 Istanbul ha prodotto 13.010,7 miliardi di TRY di prodotto interno lordo, il 29,2% di quello turco, davanti ad Ankara con 4.672,8 miliardi di TRY (10,5%) e a Smirne con 2.562,8 miliardi di TRY (5,7%); le cinque province maggiori hanno realizzato il 53,0% del totale.",
  "Gross domestic product per head in 2024 was $24,452 in Istanbul, $24,031 in Ankara, $16,949 in Izmir and $15,014 in Bursa, which ranked 13th among Turkey’s 81 provinces.":
    "Il prodotto interno lordo pro capite nel 2024 è stato di 24.452 $ a Istanbul, 24.031 $ ad Ankara, 16.949 $ a Smirne e 15.014 $ a Bursa, che si è collocata al 13º posto tra le 81 province turche.",
  "Turkish Aerospace (TUSAŞ) gives its headquarters as Kahramankazan, Ankara, with a research building at the METU Teknokent in Ankara and an office at the İTÜ ARI Teknokent in Istanbul, and runs student-team, university-industry and in-house start-up programmes.":
    "Turkish Aerospace (TUSAŞ) indica come sede Kahramankazan, Ankara, con un edificio di ricerca al METU Teknokent di Ankara e un ufficio all’İTÜ ARI Teknokent di Istanbul, e gestisce programmi per squadre di studenti, di collaborazione università-industria e di imprenditorialità interna.",
  "The Aegean Free Zone (ESBAŞ), the operator says, exported $3.2 billion in 2025, up 12%, on a trade volume of $6.332 billion; it employed about 23,500 people and made 24% of Izmir’s exports.":
    "La Zona franca dell’Egeo (ESBAŞ), secondo il suo gestore, ha esportato 3,2 miliardi di $ nel 2025, il 12% in più, su un volume di scambi di 6,332 miliardi di $; ha occupato circa 23.500 persone e ha realizzato il 24% delle esportazioni di Smirne.",
  "Oyak Renault’s Bursa factory built 387,113 vehicles in 2025, of which 336,336 were passenger cars, and exported 271,994, about 14% more than in 2024; its chairman said more than 70% of output is exported.":
    "Lo stabilimento Oyak Renault di Bursa ha prodotto 387.113 veicoli nel 2025, di cui 336.336 autovetture, e ne ha esportati 271.994, circa il 14% in più rispetto al 2024; il suo presidente ha detto che oltre il 70% della produzione è esportato."
});

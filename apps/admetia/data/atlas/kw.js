/* Atlas record: Kuwait. Read 3 October 2026; log P74
 * (research/verification/round-4i.md, round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Kuwait had no coverage in the research library. The
 * hub rests on the central bank's list of Kuwaiti conventional banks (read
 * locally from the page's HTML); Sharq and Qibla, where they are, are
 * districts of Kuwait City. Round 5d (3 October 2026) added standing (GFCI 40), the
 * Capital governorate's population from the 2021 census, and the national graduate
 * programmes of the Kuwait Investment Authority and Kuwait Petroleum Corporation (both for
 * Kuwaitis). Kuwait publishes no city GDP, wage or rent series that could be read.
 * Brief: research/countries/kw-kuwait.md. */

ATLAS.add({
  id: "KW",
  checked: "2026-10-03",
  log: "P74",
  summary: "Kuwait’s conventional banks all have their head offices in the capital’s central districts, and the Global Financial Centres Index ranks Kuwait City 60th. The graduate programmes read, at the Kuwait Investment Authority and Kuwait Petroleum Corporation, are for Kuwaitis, and work needs an employer-sponsored visa. The UK lifted its advice against travel in August 2026, but still warns of regional attacks.",
  sectors: ["Oil and gas", "Banking and financial services", "Public sector", "Trade and logistics", "Construction"],
  roles: [],
  hubs: [
    {
      id: "kuwait-city", name: "Kuwait City", lat: 29.37, lon: 47.98,
      knownFor: "The capital, where Kuwait’s conventional banks have their head offices",
      why: ["kw-banks", "kw-gfci", "kw-kia", "kw-kpc", "kw-pop"],
      sectors: ["Banking and financial services", "Public sector", "Oil and gas"],
      employers: [
        { name: "National Bank of Kuwait", note: "head office in Sharq", c: "kw-banks" },
        { name: "Gulf Bank", note: "head office in Qibla", c: "kw-banks" },
        { name: "Burgan Bank", note: "head office in Sharq", c: "kw-banks" },
        { name: "Kuwait Investment Authority", note: "graduate programme for Kuwaiti nationals", c: "kw-kia" },
        {
          name: "Kuwait Petroleum Corporation",
          note: "fresh-graduate campaigns restricted to nationals",
          c: "kw-kpc"
        }
      ],
      demand: {
        finance: ["present", "kw-banks", "kw-gfci"],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["present", "kw-banks"],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [{ f: "finance", s: [5, 3, 2], c: ["kw-gfci", "kw-banks"] }],
      metrics: {
        pop: {
          v: 574839,
          year: 2021,
          area: "region",
          tag: "data",
          src: "https://www.citypopulation.de/en/kuwait/admin/",
          by: "Central Statistical Office of Kuwait, 2021 census, Capital governorate (which contains Kuwait City), as compiled by City Population",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["kw-lang"] },
    { k: "Recruiting calendar", c: ["kw-cal"] },
    { k: "Where demand is now", c: ["kw-banks", "kw-gfci"] },
    { k: "Graduate labour market", c: ["kw-grad-lab", "kw-kia", "kw-kpc"] }
  ],

  advisory: ["kw-fcdo"],

  briefs: [
    ["countries/kw-kuwait.md", "Country brief: Kuwait City, the banks, graduate schemes and standing"],
    [
      "places/gulf-and-central-eastern-europe.md",
      "§1 and §3 Gulf work rules and safety (Kuwait is not covered separately)"
    ]
  ],
  gaps: [
    "Kuwait was not covered by the research library before this record.",
    "No source read gives Kuwait City’s jobs by sector or graduate programmes open to foreigners; the two national schemes read are for Kuwaitis.",
    "Kuwait visas, PAM work permits, residency rules and entry for EU/UK passports are fully verified in visas_immigration/kuwait/kuwait_visas_immigration_guide.md.",
    "The population is the 2021 census for the Capital governorate (not the city proper), as compiled by a third party."
  ],

  claims: {
    'kw-banks': { t: "The central bank lists five Kuwaiti conventional banks, National Bank of Kuwait, Commercial Bank of Kuwait, Gulf Bank, Al Ahli Bank of Kuwait and Burgan Bank, all with head offices in Sharq or Qibla, central districts of Kuwait City.", tag: "data", src: "https://www.cbk.gov.kw/en/supervision/regulated-entities/kuwaiti-banks/conventional-banks", by: "Central Bank of Kuwait, conventional banks (district identification by Admetia)", seen: "2026-10-03" },
    'kw-fcdo': { t: "The UK Foreign Office stopped advising against all but essential travel to Kuwait on 20 August 2026; it reports Iranian strikes in the region, Kuwait included, since 8 July 2026, and reduced flights through Kuwait’s airport.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/kuwait", by: "FCDO travel advice, Kuwait (updated 20 Aug 2026)", seen: "2026-10-03" },
    'kw-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Kuwait City 60th of 117 financial centres (67th in the March 2026 edition), behind Dubai (9th), Abu Dhabi (13th), Riyadh (46th) and Doha (52nd) in the Gulf.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'kw-kia': { t: "The Kuwait Investment Authority’s Fresh Graduate Training Program, eleven months long with a ten-week international assignment and more than 600 alumni since 1995, is \"designed for high-performing nationals\"; applicants must be no older than 26 and hold a bachelor’s awarded within three years.", tag: "employer-stated", src: "https://www.kia.gov.kw/training-programs/", by: "Kuwait Investment Authority, Training programs", seen: "2026-10-03" },
    'kw-kpc': { t: "Kuwait Petroleum Corporation hires fresh graduates in non-engineering and non-science majors only through announced recruitment campaigns, which it says are \"restricted to nationals\"; engineering and science graduates apply through Kuwait Oil Company or Kuwait National Petroleum Company.", tag: "employer-stated", src: "https://www.kpc.com.kw/OurHiringProcess", by: "Kuwait Petroleum Corporation, Our hiring process", seen: "2026-10-03" },
    'kw-lang': { t: "Employment contracts in Kuwait must be in Arabic, with a translation allowed, and the Kuwait Investment Authority asks its Kuwaiti applicants for proficiency in Arabic and English in reading, writing and conversation; no source read measured the language of work for foreign graduates.", tag: "employer-stated", src: "https://www.kia.gov.kw/training-programs/", by: "Kuwait Investment Authority, Training programs; Rivermate, Kuwait employment agreements guide (6 Aug 2026); both read 8 Oct 2026", seen: "2026-10-08" },
    'kw-cal': { t: "Kuwait has no national graduate season: Kuwait Petroleum Corporation opens fresh-graduate campaigns only when it announces them, Zain’s 2026 graduate posting closed on 28 February 2026, the Australian University’s career fair was held on 16–17 October 2022 and on 24 October 2024, Kuwait University held its fair in July 2022, and a Career Fair at the Kuwait International Fair was listed for 9 September 2026; a foreign hire waits about 4 to 8 weeks for the work visa after a formal offer.", tag: "practitioner consensus", src: "https://www.kpc.com.kw/OurHiringProcess", by: "KPC hiring process; Zain Kuwait careers; Australian University (Kuwait) fair pages; Kuwait Times on the Kuwait University fair; ExpoFP listing; Rivermate recruitment guide (all read 8 Oct 2026)", seen: "2026-10-08" },
    'kw-grad-lab': { t: "On 30 June 2026 unemployment among Kuwaiti citizens was 6.45% (31,794 people, up from 6.2% at the end of 2025) against 0.18% for expatriates; 80.1% of employed Kuwaitis worked in the public sector and non-Kuwaitis were 96.4% of the private-sector workforce; no graduate-specific figure was found.", tag: "data", src: "https://kuwaittimes.com/article/46967/kuwait/other-news/new-data-highlights-kuwaits-persistent-public-private-employment-divide/", by: "Kuwait Times, 23 Jul 2026, reporting Public Authority for Civil Information data to 30 June 2026 (read 8 Oct 2026)", seen: "2026-10-08" },
    'kw-pop': { t: "The 2021 census counted 4,385,717 people in Kuwait, 574,839 of them in the Capital governorate, which includes Kuwait City; Farwaniya (1,110,560) and Hawalli (926,170) were larger.", tag: "data", src: "https://www.citypopulation.de/en/kuwait/admin/", by: "Central Statistical Office of Kuwait, 2021 census (30 Jun 2021), as compiled by City Population", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "Kuwait’s conventional banks all have their head offices in the capital’s central districts, and the Global Financial Centres Index ranks Kuwait City 60th. The graduate programmes read, at the Kuwait Investment Authority and Kuwait Petroleum Corporation, are for Kuwaitis, and work needs an employer-sponsored visa. The UK lifted its advice against travel in August 2026, but still warns of regional attacks.":
    "Le banche convenzionali del Kuwait hanno tutte la sede centrale nei quartieri centrali della capitale, e il Global Financial Centres Index pone Kuwait City al 60º posto. I programmi per laureati letti, alla Kuwait Investment Authority e alla Kuwait Petroleum Corporation, sono per i kuwaitiani, e il lavoro richiede un visto sponsorizzato dal datore di lavoro. Il Regno Unito ha revocato l’avvertenza contro i viaggi ad agosto 2026, ma segnala ancora attacchi nella regione.",
  "Oil and gas":
    "Petrolio e gas",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Public sector":
    "Settore pubblico",
  "Trade and logistics":
    "Commercio e logistica",
  "Construction":
    "Costruzioni",
  "Kuwait was not covered by the research library before this record.":
    "Il Kuwait non era trattato nella biblioteca di ricerca prima di questa scheda.",
  "No source read gives Kuwait City’s jobs by sector or graduate programmes open to foreigners; the two national schemes read are for Kuwaitis.":
    "Nessuna fonte letta riporta i posti di lavoro di Kuwait City per settore né programmi per laureati aperti a stranieri; i due programmi nazionali letti sono per i kuwaitiani.",
  "Kuwait visas, PAM work permits, residency rules and entry for EU/UK passports are fully verified in visas_immigration/kuwait/kuwait_visas_immigration_guide.md.":
    "I visti per il Kuwait, i permessi di lavoro PAM, le regole di soggiorno e l’ingresso per passaporti UE/UK sono interamente verificati in visas_immigration/kuwait/kuwait_visas_immigration_guide.md.",
  "The population is the 2021 census for the Capital governorate (not the city proper), as compiled by a third party.":
    "La popolazione è quella del censimento 2021 per il governatorato della Capitale (non la città vera e propria), come compilata da terzi.",
  "Country brief: Kuwait City, the banks, graduate schemes and standing":
    "Dossier sul paese: Kuwait City, le banche, i programmi per laureati e il posizionamento",
  "§1 and §3 Gulf work rules and safety (Kuwait is not covered separately)":
    "§1 e §3 regole del lavoro e sicurezza nel Golfo (il Kuwait non è trattato a parte)",
  "The capital, where Kuwait’s conventional banks have their head offices":
    "La capitale, dove hanno sede le banche convenzionali del Kuwait",
  "head office in Sharq":
    "sede a Sharq",
  "head office in Qibla":
    "sede a Qibla",
  "graduate programme for Kuwaiti nationals":
    "programma per laureati riservato ai cittadini kuwaitiani",
  "fresh-graduate campaigns restricted to nationals":
    "selezioni per neolaureati riservate ai cittadini",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "Language":
    "Lingua",
  "Recruiting calendar":
    "Calendario delle selezioni",
  "Graduate labour market":
    "Mercato del lavoro per i laureati",
  "The central bank lists five Kuwaiti conventional banks, National Bank of Kuwait, Commercial Bank of Kuwait, Gulf Bank, Al Ahli Bank of Kuwait and Burgan Bank, all with head offices in Sharq or Qibla, central districts of Kuwait City.":
    "La banca centrale elenca cinque banche convenzionali kuwaitiane, National Bank of Kuwait, Commercial Bank of Kuwait, Gulf Bank, Al Ahli Bank of Kuwait e Burgan Bank, tutte con sede a Sharq o Qibla, quartieri centrali di Kuwait City.",
  "The UK Foreign Office stopped advising against all but essential travel to Kuwait on 20 August 2026; it reports Iranian strikes in the region, Kuwait included, since 8 July 2026, and reduced flights through Kuwait’s airport.":
    "Il 20 agosto 2026 il Foreign Office britannico ha smesso di sconsigliare i viaggi non essenziali in Kuwait; riporta attacchi iraniani nella regione, Kuwait compreso, dall’8 luglio 2026, e voli ridotti nell’aeroporto del Kuwait.",
  "The Global Financial Centres Index 40 (September 2026) ranks Kuwait City 60th of 117 financial centres (67th in the March 2026 edition), behind Dubai (9th), Abu Dhabi (13th), Riyadh (46th) and Doha (52nd) in the Gulf.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Kuwait City al 60º posto su 117 centri finanziari (67º nell’edizione di marzo 2026), dopo Dubai (9º), Abu Dhabi (13º), Riad (46º) e Doha (52ª) nel Golfo.",
  "The Kuwait Investment Authority’s Fresh Graduate Training Program, eleven months long with a ten-week international assignment and more than 600 alumni since 1995, is \"designed for high-performing nationals\"; applicants must be no older than 26 and hold a bachelor’s awarded within three years.":
    "Il Fresh Graduate Training Program della Kuwait Investment Authority, di undici mesi con un incarico internazionale di dieci settimane e più di 600 ex partecipanti dal 1995, è \"pensato per cittadini molto capaci\"; i candidati non devono avere più di 26 anni e devono avere una laurea triennale conseguita da non più di tre anni.",
  "Kuwait Petroleum Corporation hires fresh graduates in non-engineering and non-science majors only through announced recruitment campaigns, which it says are \"restricted to nationals\"; engineering and science graduates apply through Kuwait Oil Company or Kuwait National Petroleum Company.":
    "La Kuwait Petroleum Corporation assume neolaureati di aree non ingegneristiche né scientifiche solo tramite campagne di selezione annunciate, che secondo l’azienda sono \"riservate ai cittadini\"; i laureati in ingegneria e scienze si candidano tramite Kuwait Oil Company o Kuwait National Petroleum Company.",
  "The 2021 census counted 4,385,717 people in Kuwait, 574,839 of them in the Capital governorate, which includes Kuwait City; Farwaniya (1,110,560) and Hawalli (926,170) were larger.":
    "Il censimento del 2021 ha contato 4.385.717 persone in Kuwait, 574.839 delle quali nel governatorato della Capitale, che comprende Kuwait City; Farwaniya (1.110.560) e Hawalli (926.170) erano più popolosi.",
  "Employment contracts in Kuwait must be in Arabic, with a translation allowed, and the Kuwait Investment Authority asks its Kuwaiti applicants for proficiency in Arabic and English in reading, writing and conversation; no source read measured the language of work for foreign graduates.":
    "I contratti di lavoro in Kuwait devono essere in arabo, con traduzione ammessa, e la Kuwait Investment Authority chiede ai candidati kuwaitiani padronanza di arabo e inglese in lettura, scrittura e conversazione; nessuna fonte letta ha misurato la lingua di lavoro per i laureati stranieri.",
  "Kuwait has no national graduate season: Kuwait Petroleum Corporation opens fresh-graduate campaigns only when it announces them, Zain’s 2026 graduate posting closed on 28 February 2026, the Australian University’s career fair was held on 16–17 October 2022 and on 24 October 2024, Kuwait University held its fair in July 2022, and a Career Fair at the Kuwait International Fair was listed for 9 September 2026; a foreign hire waits about 4 to 8 weeks for the work visa after a formal offer.":
    "Il Kuwait non ha una stagione nazionale per i laureati: la Kuwait Petroleum Corporation apre le campagne per neolaureati solo quando le annuncia, l’annuncio per laureati di Zain del 2026 si è chiuso il 28 febbraio 2026, la fiera della carriera dell’Australian University si è tenuta il 16–17 ottobre 2022 e il 24 ottobre 2024, la Kuwait University ha tenuto la sua fiera a luglio 2022, e una Career Fair al Kuwait International Fair era in programma il 9 settembre 2026; un assunto straniero attende circa 4-8 settimane per il visto di lavoro dopo un’offerta formale.",
  "On 30 June 2026 unemployment among Kuwaiti citizens was 6.45% (31,794 people, up from 6.2% at the end of 2025) against 0.18% for expatriates; 80.1% of employed Kuwaitis worked in the public sector and non-Kuwaitis were 96.4% of the private-sector workforce; no graduate-specific figure was found.":
    "Al 30 giugno 2026 la disoccupazione tra i cittadini kuwaitiani era del 6,45% (31.794 persone, in aumento dal 6,2% di fine 2025) contro lo 0,18% degli espatriati; l’80,1% dei kuwaitiani occupati lavorava nel settore pubblico e i non kuwaitiani erano il 96,4% della forza lavoro del settore privato; non è stato trovato alcun dato specifico sui laureati."
});

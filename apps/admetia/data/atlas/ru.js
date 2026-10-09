/* Atlas record: Russia. Read 3 October 2026; log P78
 * (research/verification/round-4j.md, round-4k.md, round-5d.md). Outside Europe in this guide: routes
 * for EU/EEA/Swiss and UK passports only. Russia had no coverage in the
 * research library. This record is mostly advisories and sanctions, stated
 * as the governments state them: the UK's (FCDO content API, re-read 3 October 2026:
 * updated 18 September 2026, avoid all travel to the whole country), the US State
 * Department's (read through its advisories RSS feed; the page refused
 * automated reads) and the European Commission's sanctions page (the
 * Council's page refused automated reads). Italy's Viaggiare Sicuri could
 * not be read. No family is rated, and no Russian employer is recommended.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5d (3 October 2026) added standing
 * and metrics as descriptive statistics only: GFCI 40 ranks, Fortune Global 500 head-office
 * counts, populations and gross regional product, from sources chosen with care (a Moscow
 * mayoral statement reported by Expert, the Moscow city estimate in a rating agency release,
 * Petrostat figures quoted by Centrum Balticum). Rosstat's own pages were not served to
 * scripts. Pay and rent were not used: the Moscow and St Petersburg pay figures found cover
 * different periods. Brief: research/countries/ru-russia.md. */

ATLAS.add({
  id: "RU",
  checked: "2026-10-03",
  log: "P78",
  summary: "The UK advises against all travel to Russia and the US says do not travel, both citing the war against Ukraine and the risk of detention. The EU has adopted 21 sanctions packages, the latest in July 2026, binding on everyone under EU jurisdiction. Visa and Mastercard cards issued abroad do not work there. This guide does not rate demand in Russia; the rankings and figures below describe the cities’ size, not a recommendation.",
  sectors: ["Oil and gas", "Metals and mining", "Banking and financial services", "Defence", "Agriculture and food"],
  roles: [],
  hubs: [
    {
      id: "moscow", name: "Moscow", lat: 55.76, lon: 37.62,
      knownFor: "The capital, with more than a quarter of Russia’s GDP in its metropolitan area (2021)",
      why: ["ru-msk", "ru-msk-grp", "ru-msk-pop", "ru-gfci", "ru-g500"],
      sectors: ["Banking and financial services", "Government", "Technology"],
      employers: [
        {
          t: "Firms in the Moscow metropolitan area",
          note: "almost half of Russia’s stock of foreign direct investment (2021)",
          c: "ru-msk"
        },
        {
          name: "Sberbank, Rosneft, Lukoil",
          note: "headquartered in Moscow (Fortune Global 500 2026); check the sanctions rules before any dealings",
          c: "ru-g500"
        }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [5, 2, 1], c: ["ru-gfci", "ru-msk"] }],
      metrics: {
        pop: {
          v: 13300000,
          year: 2025,
          area: "city",
          tag: "data",
          src: "https://expert.ru/news/chislennost-naseleniya-moskvy-dostigla-13-3-mln-chelovek/",
          by: "Moscow mayor’s office, residents at 1 January 2025 (13.3 million, rounded by the source), as reported by Expert",
          seen: "2026-10-03"
        },
        gdp: {
          v: 31800,
          cur: "RUB",
          year: 2023,
          area: "city",
          tag: "data",
          src: "https://raexpert.ru/releases/2024/nov13b",
          by: "City of Moscow’s own estimate of gross regional product 2023, as reported by Expert RA (13 Nov 2024)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "st-petersburg", name: "St Petersburg", lat: 59.94, lon: 30.31,
      knownFor: "Russia’s second city, on the Baltic",
      why: ["ru-spb", "ru-spb-pop", "ru-gfci", "ru-g500"],
      sectors: ["Ports and logistics", "Manufacturing", "Tourism"],
      employers: [
        { t: "Businesses in the city", note: "GRP of RUB 10,908 billion (2023)", c: "ru-spb" },
        {
          name: "Gazprom",
          note: "head office in St Petersburg (Fortune Global 500 2026); check the sanctions rules before any dealings",
          c: "ru-g500"
        }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [4, 2, 1], c: ["ru-gfci", "ru-spb"] }],
      metrics: {
        pop: {
          v: 5563000,
          year: 2025,
          area: "city",
          tag: "data",
          src: "https://centrumbalticum.org/wp-content/uploads/2026/04/BSR_Policy_Briefing_6_2025.pdf",
          by: "Petrostat, residents of St Petersburg at 1 January 2025 (5.563 million, rounded by the source), as quoted by Centrum Balticum",
          seen: "2026-10-03"
        },
        gdp: {
          v: 10908,
          cur: "RUB",
          year: 2023,
          area: "city",
          tag: "data",
          src: "https://centrumbalticum.org/wp-content/uploads/2026/04/BSR_Policy_Briefing_6_2025.pdf",
          by: "Petrostat, gross regional product of St Petersburg 2023, as quoted by Centrum Balticum",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["ru-lang"] },
    { k: "Recruiting calendar", c: ["ru-cal"] },
    { k: "Where demand is now", c: ["ru-msk"] },
    { k: "Graduate labour market", c: ["ru-grad-lab"] }
  ],

  advisory: ["ru-fcdo", "ru-us"],

  briefs: [
    [
      "countries/ru-russia.md",
      "Country brief: travel advice and sanctions first, then Moscow and St Petersburg as a statistical picture"
    ]
  ],
  gaps: [
    "No family is rated: this guide does not assess graduate demand in Russia, and the one economic figure read for Moscow’s role dates from before the full-scale invasion of Ukraine.",
    "Russia was not covered by the research library before this record.",
    "Italy’s Viaggiare Sicuri advice and the Council of the EU’s sanctions page could not be read; the EU position is taken from the European Commission’s page.",
    "Study visas, work rules, entry for EU passports and whether particular jobs would breach sanctions were not researched: check the sanctions rules with a qualified adviser before accepting any offer.",
    "Rosstat’s and Mosstat’s own pages were not read: Moscow’s population is a mayoral statement reported by a business weekly, its output is the city’s own estimate as reported by a rating agency, and St Petersburg’s figures are Petrostat’s as quoted in a policy briefing, so the two cities’ figures are not from one compiler. No pay or rent figure is used: the Moscow (2025) and St Petersburg (11 months of 2025) averages found cover different periods."
  ],

  claims: {
    "ru-cal": { t: "Graduate recruiting is visible in spring: MISIS’s job fair on 30 March 2026 brought together about 60 employers and 5,200 students, and Yandex announced its 2025 internship season in February with a candidate event on 20 March; its internships run three to six months and can be combined with study.", tag: "employer-stated", src: "https://misis.ru/university/news/exhibitions/2026-03/", by: "MISIS spring job fair news (30 Mar 2026); Yandex on Habr (12 Feb 2025), both read 8 Oct 2026", seen: "2026-10-08" },
    "ru-lang": { t: "The job boards, university career pages and employer internship pages read (hh.ru, HSE, MISIS, Yandex, Sber) are in Russian and state no English requirement; no page read describes English-language hiring for graduates.", tag: "employer-stated", src: "https://hh.ru", by: "hh.ru; HSE Career Development Centre; MISIS; Yandex on Habr; Sber developers site (all read 8 Oct 2026)", seen: "2026-10-08" },
    "ru-grad-lab": { t: "We found no current graduate employment or unemployment rate for Russia; the most reliable statement read is HeadHunter’s ranking of 411 universities by employer demand for their graduates, built on more than 500,000 graduate CVs from 2021–2022 (published April 2023), which put HSE University first.", tag: "practitioner consensus", src: "https://hse.ru/en/news/828812773.html", by: "HSE University news on the HeadHunter ranking (20 Apr 2023), read 8 Oct 2026", seen: "2026-10-08" },
    'ru-msk': { t: "The Moscow city government’s analytical centre said in April 2021 that the Moscow metropolitan area accounted for more than a quarter of Russia’s GDP and almost half of its stock of foreign direct investment.", tag: "data", src: "https://en.ac-mos.ru/news/1123/", by: "Moscow Analytical Center (city government agency), 28 Apr 2021", seen: "2026-10-03" },
    'ru-fcdo': { t: "The UK Foreign Office advises against all travel to Russia because of its continuing invasion of Ukraine; it reports an increased risk of British nationals being detained, Russia’s record of holding foreign nationals as leverage, a high likelihood of terrorist attacks, and drone attacks disrupting airports.", tag: "data", src: "https://www.gov.uk/foreign-travel-advice/russia", by: "FCDO travel advice, Russia (updated 18 Sep 2026)", seen: "2026-10-03" },
    'ru-us': { t: "The US State Department rates Russia Level 4, do not travel, citing the war with Ukraine, the risk of wrongful detention, arbitrary enforcement of laws and terrorism, and tells US citizens in Russia to leave immediately.", tag: "data", src: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/russia-travel-advisory.html", by: "US Department of State travel advisory (29 Dec 2025), read through its advisories RSS feed", seen: "2026-10-03" },
    'ru-spb': { t: "St Petersburg is Russia’s second-largest city; its gross regional product in 2023 was RUB 10,908 billion, about EUR 117.5 billion at the official average exchange rate.", tag: "data", src: "https://centrumbalticum.org/wp-content/uploads/2026/04/BSR_Policy_Briefing_6_2025.pdf", by: "Centrum Balticum, BSR Policy Briefing 6/2025, citing Petrostat", seen: "2026-10-03" },
    'ru-gfci': { t: "The Global Financial Centres Index 40 (September 2026) ranks Moscow 100th and St Petersburg 104th of 117 financial centres (103rd and 110th in March 2026), the only Russian centres listed.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'ru-g500': { t: "The Fortune Global 500 of 2026 lists Sberbank (rank 64), Rosneft (109) and Lukoil (239) as headquartered in Moscow and Gazprom (89) in St Petersburg; Fortune gives them 291,795, 302,100, 88,950 and 501,000 employees. Fortune’s pages say nothing about sanctions: read the sanctions claim before any dealings with Russian companies.", tag: "data", src: "https://fortune.com/company/sberbank/global500/", by: "Fortune, Global 500 2026, company pages for Sberbank, Rosneft, Lukoil and Gazprom (updated 16 Sep 2026)", seen: "2026-10-03" },
    'ru-msk-pop': { t: "The mayor of Moscow told President Putin that the city had 13.3 million residents on 1 January 2025, after natural growth of 4,800 in 2024.", tag: "data", src: "https://expert.ru/news/chislennost-naseleniya-moskvy-dostigla-13-3-mln-chelovek/", by: "Moscow mayor’s office statement, as reported by Expert (a Russian business weekly)", seen: "2026-10-03" },
    'ru-msk-grp': { t: "The rating agency Expert RA, citing the Moscow city government’s own estimate, reports Moscow’s gross regional product in 2023 at RUB 31.8 trillion, 4.0% more than in 2022 in comparable prices, and says the city accounts for about 20% of the GRP of all Russian regions.", tag: "data", src: "https://raexpert.ru/releases/2024/nov13b", by: "Expert RA (Russian rating agency), rating release of 13 Nov 2024 on the City of Moscow; the figure is the city’s own estimate", seen: "2026-10-03" },
    'ru-spb-pop': { t: "St Petersburg had 5.563 million residents on 1 January 2025 according to Petrostat, the regional statistics service; a Centrum Balticum policy briefing notes that Gazprom has moved its head office to the city from Moscow, and that foreign-trade statistics for the port stopped being published after April 2022.", tag: "data", src: "https://centrumbalticum.org/wp-content/uploads/2026/04/BSR_Policy_Briefing_6_2025.pdf", by: "Centrum Balticum, BSR Policy Briefing 6/2025, citing Petrostat", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "Graduate recruiting is visible in spring: MISIS’s job fair on 30 March 2026 brought together about 60 employers and 5,200 students, and Yandex announced its 2025 internship season in February with a candidate event on 20 March; its internships run three to six months and can be combined with study.":
    "Il reclutamento dei neolaureati è visibile in primavera: la fiera del lavoro del MISIS del 30 marzo 2026 ha riunito circa 60 datori di lavoro e 5.200 studenti, e Yandex ha annunciato a febbraio la stagione di tirocini 2025 con un evento per i candidati il 20 marzo; i suoi tirocini durano da tre a sei mesi e si possono conciliare con lo studio.",
  "The job boards, university career pages and employer internship pages read (hh.ru, HSE, MISIS, Yandex, Sber) are in Russian and state no English requirement; no page read describes English-language hiring for graduates.":
    "I portali del lavoro, le pagine dei servizi carriera universitari e le pagine dei tirocini dei datori di lavoro letti (hh.ru, HSE, MISIS, Yandex, Sber) sono in russo e non indicano alcun requisito di inglese; nessuna pagina letta descrive assunzioni di laureati in lingua inglese.",
  "We found no current graduate employment or unemployment rate for Russia; the most reliable statement read is HeadHunter’s ranking of 411 universities by employer demand for their graduates, built on more than 500,000 graduate CVs from 2021–2022 (published April 2023), which put HSE University first.":
    "Non abbiamo trovato alcun tasso attuale di occupazione o disoccupazione dei laureati per la Russia; l’affermazione più affidabile letta è la classifica di HeadHunter di 411 università per domanda dei datori di lavoro verso i loro laureati, costruita su più di 500.000 CV di laureati del 2021–2022 (pubblicata ad aprile 2023), che ha messo al primo posto l’Università HSE.",
  "The UK advises against all travel to Russia and the US says do not travel, both citing the war against Ukraine and the risk of detention. The EU has adopted 21 sanctions packages, the latest in July 2026, binding on everyone under EU jurisdiction. Visa and Mastercard cards issued abroad do not work there. This guide does not rate demand in Russia; the rankings and figures below describe the cities’ size, not a recommendation.":
    "Il Regno Unito sconsiglia tutti i viaggi in Russia e gli Stati Uniti dicono di non andarci, entrambi per la guerra contro l’Ucraina e il rischio di detenzione. L’UE ha adottato 21 pacchetti di sanzioni, l’ultimo a luglio 2026, vincolanti per chiunque sia soggetto alla giurisdizione dell’UE. Le carte Visa e Mastercard emesse all’estero lì non funzionano. Questa guida non valuta la domanda in Russia; le classifiche e i dati che seguono descrivono la dimensione delle città, non sono una raccomandazione.",
  "Oil and gas":
    "Petrolio e gas",
  "Metals and mining":
    "Metalli e miniere",
  "Banking and financial services":
    "Banche e servizi finanziari",
  "Defence":
    "Difesa",
  "Agriculture and food":
    "Agricoltura e alimentare",
  "No family is rated: this guide does not assess graduate demand in Russia, and the one economic figure read for Moscow’s role dates from before the full-scale invasion of Ukraine.":
    "Nessuna famiglia è valutata: questa guida non valuta la domanda di laureati in Russia, e l’unico dato economico letto sul ruolo di Mosca è precedente all’invasione su vasta scala dell’Ucraina.",
  "Russia was not covered by the research library before this record.":
    "La Russia non era coperta dalla biblioteca di ricerca prima di questa scheda.",
  "Italy’s Viaggiare Sicuri advice and the Council of the EU’s sanctions page could not be read; the EU position is taken from the European Commission’s page.":
    "Le indicazioni di Viaggiare Sicuri della Farnesina e la pagina sulle sanzioni del Consiglio dell’UE non sono state lette; la posizione dell’UE è tratta dalla pagina della Commissione europea.",
  "Study visas, work rules, entry for EU passports and whether particular jobs would breach sanctions were not researched: check the sanctions rules with a qualified adviser before accepting any offer.":
    "I visti per studio, le regole sul lavoro, l’ingresso con passaporto UE e se determinati lavori violerebbero le sanzioni non sono stati ricercati: verifica le regole sulle sanzioni con un consulente qualificato prima di accettare qualsiasi offerta.",
  "Rosstat’s and Mosstat’s own pages were not read: Moscow’s population is a mayoral statement reported by a business weekly, its output is the city’s own estimate as reported by a rating agency, and St Petersburg’s figures are Petrostat’s as quoted in a policy briefing, so the two cities’ figures are not from one compiler. No pay or rent figure is used: the Moscow (2025) and St Petersburg (11 months of 2025) averages found cover different periods.":
    "Le pagine di Rosstat e Mosstat non sono state lette: la popolazione di Mosca è una dichiarazione del sindaco riportata da un settimanale economico, il suo prodotto è la stima della città stessa riportata da un’agenzia di rating, e i dati di San Pietroburgo sono di Petrostat come citati in un rapporto di politica economica, quindi i dati delle due città non provengono dallo stesso compilatore. Non si usa alcun dato su retribuzioni o affitti: le medie trovate per Mosca (2025) e San Pietroburgo (11 mesi del 2025) coprono periodi diversi.",
  "Country brief: travel advice and sanctions first, then Moscow and St Petersburg as a statistical picture":
    "Dossier sul paese: prima le avvertenze di viaggio e le sanzioni, poi Mosca e San Pietroburgo come quadro statistico",
  "The capital, with more than a quarter of Russia’s GDP in its metropolitan area (2021)":
    "La capitale, con oltre un quarto del PIL russo nella sua area metropolitana (2021)",
  "Government":
    "Pubblica amministrazione",
  "Technology":
    "Tecnologia",
  "almost half of Russia’s stock of foreign direct investment (2021)":
    "quasi metà dello stock di investimenti diretti esteri in Russia (2021)",
  "Firms in the Moscow metropolitan area":
    "Le aziende dell’area metropolitana di Mosca",
  "headquartered in Moscow (Fortune Global 500 2026); check the sanctions rules before any dealings":
    "con sede a Mosca (Fortune Global 500 2026); verifica le regole sulle sanzioni prima di qualsiasi rapporto",
  "Russia’s second city, on the Baltic":
    "La seconda città della Russia, sul Baltico",
  "Ports and logistics":
    "Porti e logistica",
  "Manufacturing":
    "Manifattura",
  "Tourism":
    "Turismo",
  "GRP of RUB 10,908 billion (2023)":
    "prodotto regionale di 10.908 miliardi di RUB (2023)",
  "Businesses in the city":
    "Le imprese della città",
  "head office in St Petersburg (Fortune Global 500 2026); check the sanctions rules before any dealings":
    "sede a San Pietroburgo (Fortune Global 500 2026); verifica le regole sulle sanzioni prima di qualsiasi rapporto",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "The Moscow city government’s analytical centre said in April 2021 that the Moscow metropolitan area accounted for more than a quarter of Russia’s GDP and almost half of its stock of foreign direct investment.":
    "Ad aprile 2021 il centro analitico del governo cittadino di Mosca ha indicato che l’area metropolitana di Mosca valeva oltre un quarto del PIL russo e quasi metà dello stock di investimenti diretti esteri.",
  "The UK Foreign Office advises against all travel to Russia because of its continuing invasion of Ukraine; it reports an increased risk of British nationals being detained, Russia’s record of holding foreign nationals as leverage, a high likelihood of terrorist attacks, and drone attacks disrupting airports.":
    "Il Foreign Office britannico sconsiglia tutti i viaggi in Russia per la sua continua invasione dell’Ucraina; segnala un rischio maggiore di detenzione per i cittadini britannici, la prassi russa di trattenere stranieri come merce di scambio, un’alta probabilità di attentati e attacchi con droni che disturbano gli aeroporti.",
  "The US State Department rates Russia Level 4, do not travel, citing the war with Ukraine, the risk of wrongful detention, arbitrary enforcement of laws and terrorism, and tells US citizens in Russia to leave immediately.":
    "Il Dipartimento di Stato statunitense classifica la Russia al livello 4, non andare, per la guerra con l’Ucraina, il rischio di detenzione ingiusta, l’applicazione arbitraria delle leggi e il terrorismo, e invita i cittadini statunitensi in Russia ad andarsene subito.",
  "St Petersburg is Russia’s second-largest city; its gross regional product in 2023 was RUB 10,908 billion, about EUR 117.5 billion at the official average exchange rate.":
    "San Pietroburgo è la seconda città della Russia; il suo prodotto regionale lordo nel 2023 era di 10.908 miliardi di RUB, circa 117,5 miliardi di EUR al cambio medio ufficiale.",
  "The Global Financial Centres Index 40 (September 2026) ranks Moscow 100th and St Petersburg 104th of 117 financial centres (103rd and 110th in March 2026), the only Russian centres listed.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Mosca al 100º posto e San Pietroburgo al 104º su 117 centri finanziari (103º e 110º a marzo 2026), gli unici centri russi presenti.",
  "The Fortune Global 500 of 2026 lists Sberbank (rank 64), Rosneft (109) and Lukoil (239) as headquartered in Moscow and Gazprom (89) in St Petersburg; Fortune gives them 291,795, 302,100, 88,950 and 501,000 employees. Fortune’s pages say nothing about sanctions: read the sanctions claim before any dealings with Russian companies.":
    "La Fortune Global 500 del 2026 elenca Sberbank (posto 64), Rosneft (109) e Lukoil (239) con sede a Mosca e Gazprom (89) a San Pietroburgo; Fortune indica rispettivamente 291.795, 302.100, 88.950 e 501.000 dipendenti. Le pagine di Fortune non dicono nulla sulle sanzioni: leggi l’indicazione sulle sanzioni prima di qualsiasi rapporto con società russe.",
  "The mayor of Moscow told President Putin that the city had 13.3 million residents on 1 January 2025, after natural growth of 4,800 in 2024.":
    "Il sindaco di Mosca ha detto al presidente Putin che la città contava 13,3 milioni di residenti al 1º gennaio 2025, dopo una crescita naturale di 4.800 persone nel 2024.",
  "The rating agency Expert RA, citing the Moscow city government’s own estimate, reports Moscow’s gross regional product in 2023 at RUB 31.8 trillion, 4.0% more than in 2022 in comparable prices, and says the city accounts for about 20% of the GRP of all Russian regions.":
    "L’agenzia di rating Expert RA, citando la stima del governo cittadino di Mosca, indica il prodotto regionale lordo di Mosca nel 2023 in 31,8 mila miliardi di RUB, il 4,0% in più rispetto al 2022 a prezzi comparabili, e afferma che la città vale circa il 20% del prodotto regionale lordo di tutte le regioni russe.",
  "St Petersburg had 5.563 million residents on 1 January 2025 according to Petrostat, the regional statistics service; a Centrum Balticum policy briefing notes that Gazprom has moved its head office to the city from Moscow, and that foreign-trade statistics for the port stopped being published after April 2022.":
    "San Pietroburgo contava 5,563 milioni di residenti al 1º gennaio 2025 secondo Petrostat, il servizio statistico regionale; un rapporto di politica economica del Centrum Balticum osserva che Gazprom ha trasferito la sede da Mosca alla città e che le statistiche sul commercio estero del porto non sono più pubblicate dopo aprile 2022."
});

/* How hiring works: Saudi Arabia. Extended on 8 Oct 2026 to the full schema. Started from the library's
 * Gulf brief (research/places/gulf-and-central-eastern-europe.md §1 and §2) and the visa guide. Pages opened
 * that day: Aramco's international and Saudi applicant pages, Clyde & Co, DLA Piper and People Matters on the
 * 2025-2026 Saudisation decisions, Sovereign Group on Nitaqat, Mondaq on the interview rules and on the
 * Qualification Verification Program, King & Spalding, Morgan Lewis and Middle East Briefing on the amended
 * Labor Law and Qiwa contracts, the Hague Conference status table, Gulf News and Trading Economics on the
 * Labour Force Survey, the World Bank labour-market report, EnterpriseAM (Hays) and People Matters (Jisr) on
 * hiring, the US-Saudi Business Council review, a Durham thesis on wasta, KFUPM and KAU on their 2026 fairs,
 * Consultancy-ME on KPMG Hamaat and PwC's 2019 intake, Riyad Bank's 2026 programme, KAUST's VSRP page and
 * Gulf News on Jadarat. Not established: the selection steps of any graduate programme (PwC's and KPMG's
 * Saudi postings show only "filled", Aramco's hiring-process page returned an error, PIF's site returned 403),
 * the quota for IT roles (sources conflict), entry pay, whether graduates negotiate, and a graduate-specific
 * unemployment figure. */
ATLAS.addEntry({
  id: 'SA',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Saudi graduate programmes are built for Saudi nationals: PIF’s, SABIC’s and Aramco’s graduate intakes are for Saudis, and Aramco hires internationals only with five to ten years of experience. Saudisation quotas reach into marketing, sales, engineering and consulting.',
      'I programmi per laureati sauditi sono pensati per i cittadini sauditi: le selezioni per laureati di PIF, SABIC e Aramco sono per sauditi, e Aramco assume internazionali solo con cinque-dieci anni di esperienza. Le quote di saudizzazione arrivano a marketing, vendite, ingegneria e consulenza.', 'sa-gulf'],
    ['In the hiring report of the HR-software firm Jisr, Saudis were 41% of new hires and close to 60% of HR leaders expected expatriate numbers to shrink further, with foreign hiring focused on highly specialised roles. An expatriate graduate therefore competes mainly for specialised and transfer roles, and most of the graduate schemes we could read are for Saudi nationals or ask for an existing work right.',
      'Nel rapporto sulle assunzioni di Jisr, azienda di software per le risorse umane, i sauditi erano il 41% delle nuove assunzioni e quasi il 60% dei responsabili HR si aspettava un’ulteriore riduzione degli espatriati, con le assunzioni di stranieri concentrate su ruoli molto specializzati. Un laureato espatriato compete quindi soprattutto per ruoli specializzati e per trasferimenti, e la maggior parte dei programmi per laureati che abbiamo potuto leggere è riservata ai cittadini sauditi o chiede un diritto di lavoro già esistente.', 'sa-jisr sa-gulf']
  ],

  ways: [
    { name: ['Referrals and personal introductions', 'Segnalazioni e presentazioni personali'], r: 'network', p: 'first exp', basis: 'anecdotal', t: [
      ['The US-Saudi Business Council’s review of its members’ comments (October 2019) calls referrals from current staff the top hiring method and a first source for entry-level professional posts, ahead of online listings (LinkedIn, Bayt, Naukrigulf, the government’s Taqat portal) and agencies, whose results varied with local knowledge. It is an informal review by one business council, not a survey.',
        'La rassegna dei commenti dei soci del US-Saudi Business Council (ottobre 2019) indica le segnalazioni del personale interno come il metodo di assunzione principale e una prima fonte per i posti professionali d’ingresso, davanti agli annunci online (LinkedIn, Bayt, Naukrigulf, il portale governativo Taqat) e alle agenzie, i cui risultati dipendevano dalla conoscenza del luogo. È una rassegna informale di un solo consiglio commerciale, non un’indagine.', 'sa-ussbc'],
      ['A 2017 Durham doctoral thesis, based on interviews with 30 Saudi employees and managers at two telecom companies, finds wasta (informal influence, often through an intermediary) increasingly used in recruitment, promotion and training. It is a small study of Saudi staff and does not show how it works for a foreign graduate at a multinational.',
        'Una tesi di dottorato di Durham del 2017, basata su interviste a 30 dipendenti e dirigenti sauditi di due società di telecomunicazioni, rileva che la wasta (influenza informale, spesso tramite un intermediario) è usata sempre più spesso nelle assunzioni, nelle promozioni e nella formazione. È uno studio ristretto su personale saudita e non mostra come funzioni per un laureato straniero in una multinazionale.', 'sa-wasta']
    ] },
    { name: ['Direct application or recruiter, with the employer as sponsor', 'Candidatura diretta o tramite selezionatore, con il datore di lavoro come sponsor'], r: 'direct', p: 'exp first', basis: 'consensus', t: [
      ['Hays’s Salary Guide 2026 for Saudi Arabia (reported by EnterpriseAM, May 2026) has 74% of firms planning to grow headcount in 2026 and 62% having grown in 2025, with recruitment activity in Riyadh (69%), Jeddah (43%) and the Eastern Province (37%); the growth is in tech, construction, property, finance and banking.',
        'La Salary Guide 2026 di Hays per l’Arabia Saudita (riportata da EnterpriseAM, maggio 2026) indica che il 74% delle aziende prevede di aumentare l’organico nel 2026 e il 62% lo ha aumentato nel 2025, con l’attività di selezione a Riad (69%), Gedda (43%) e nella Provincia Orientale (37%); la crescita è in tecnologia, costruzioni, immobiliare, finanza e banche.', 'sa-hays'],
      ['MHRSD’s rules on private-sector job advertising and interviews (reported in September 2025) require vacancies to follow the national occupation classification and appear on approved platforms or the employer’s own site, give candidates at least three working days’ notice of an interview and require the outcome within 30 days. After an offer, the library puts the real time to a work visa at 8 to 14 weeks.',
        'Le norme dell’MHRSD sugli annunci di lavoro e sui colloqui nel settore privato (riportate a settembre 2025) richiedono che le offerte seguano la classificazione nazionale delle professioni e compaiano su piattaforme approvate o sul sito del datore di lavoro, concedono ai candidati almeno tre giorni lavorativi di preavviso per il colloquio e richiedono l’esito entro 30 giorni. Dopo un’offerta, la libreria indica in 8-14 settimane il tempo reale per ottenere il visto di lavoro.', 'sa-mq-rec sa-vis']
    ] },
    { name: ['Transfer within an international firm', 'Trasferimento interno a un’azienda internazionale'], r: 'transfer', p: 'exp', basis: 'anecdotal', t: [
      ['Foreigners usually reach Riyadh as experienced staff or through a transfer from another office; some Big Four postings require the candidate to hold a work right already.',
        'Gli stranieri di solito arrivano a Riad come personale esperto o con un trasferimento da un altro ufficio; alcuni annunci delle Big Four richiedono che il candidato abbia già un diritto di lavoro.', 'sa-gulf'],
      ['Aramco’s page for international applicants asks for a minimum of five to 10 years of applicable experience, and Aramco’s Saudi page, not this one, is where its student programmes and graduate jobs are listed.',
        'La pagina di Aramco per i candidati internazionali chiede un minimo da cinque a 10 anni di esperienza pertinente, e i programmi per studenti e i lavori per laureati di Aramco sono elencati nella sua pagina per i candidati sauditi, non in questa.', 'sa-aramco-int sa-aramco-sa']
    ] },
    { name: ['Graduate schemes (for Saudi nationals)', 'Programmi per laureati (per cittadini sauditi)'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['The graduate schemes we could read are for Saudi nationals: PIF’s Graduate Development Program (1,033 graduates over nine cohorts), SABIC’s student and fresh-graduate programmes (“young Saudi talents”), KPMG’s Hamaat programme (nearly 300 young Saudis in its first cohort in 2024, as part of the firm’s nationalisation drive) and PwC’s 2019 intake (all 104 who joined in Saudi Arabia were Saudi citizens, about 35% of them women).',
        'I programmi per laureati che abbiamo potuto leggere sono per cittadini sauditi: il Graduate Development Program di PIF (1.033 laureati in nove edizioni), i programmi di SABIC per studenti e neolaureati («giovani talenti sauditi»), il programma Hamaat di KPMG (quasi 300 giovani sauditi nella prima edizione nel 2024, nell’ambito dell’impegno di nazionalizzazione della società) e la selezione 2019 di PwC (tutti i 104 che sono entrati in Arabia Saudita erano cittadini sauditi, circa il 35% donne).', 'sa-gulf sa-kpmg sa-pwc19'],
      ['Riyad Bank’s 2026 Fursan Al Riyad programme is a six-month rotation for graduates with 0 to 1 years of experience and advanced English; the listing states no nationality rule and has expired. PwC Middle East’s Riyadh graduate postings for 2026 (Consulting on 17 November 2025, Assurance on 8 July 2026) now show as filled, and the library records that PwC’s Saudi postings ask for a work right without PwC sponsorship.',
        'Il programma Fursan Al Riyad 2026 di Riyad Bank è una rotazione di sei mesi per laureati con da 0 a 1 anni di esperienza e inglese avanzato; l’annuncio non indica requisiti di nazionalità ed è scaduto. Gli annunci di PwC Middle East per laureati a Riad per il 2026 (Consulenza il 17 novembre 2025, Revisione l’8 luglio 2026) risultano ora coperti, e la libreria registra che gli annunci sauditi di PwC chiedono un diritto di lavoro senza la sponsorizzazione di PwC.', 'sa-riyad sa-pwc-con sa-pwc-ass sa-gulf']
    ] },
    { name: ['Campus recruiting at Saudi universities', 'Reclutamento nelle università saudite'], r: 'campus', p: 'first intern', basis: 'anecdotal', t: [
      ['KFUPM’s Career Fair in Dhahran (28–30 April 2026) had more than 70 organisations and over 11,000 visitors, with Aramco as platinum sponsor and Riyad Bank as gold sponsor; King Abdulaziz University’s 13th Career Forum was held at the Jeddah Superdome on 6–8 April 2026. KFUPM says its fair is for its students and graduates and external attendees; KAU’s page does not say who may attend.',
        'La Career Fair di KFUPM a Dhahran (28–30 aprile 2026) ha avuto più di 70 organizzazioni e oltre 11.000 visitatori, con Aramco come sponsor platino e Riyad Bank come sponsor oro; il 13º Career Forum della King Abdulaziz University si è tenuto al Jeddah Superdome il 6–8 aprile 2026. KFUPM dice che la sua fiera è per i propri studenti e laureati e per partecipanti esterni; la pagina della KAU non dice chi può partecipare.', 'sa-kfupm sa-kau'],
      ['A student on a Saudi student Iqama may not take private-sector work off campus; the library describes a route for graduates: a company on Qiwa with Nitaqat capacity can take over the sponsorship before the student Iqama ends, otherwise the graduate must leave and restart as a work-visa applicant from abroad.',
        'Uno studente con Iqama studentesca saudita non può svolgere lavoro nel settore privato fuori dal campus; la libreria descrive una via per i laureati: un’azienda iscritta a Qiwa con capienza Nitaqat può rilevare la sponsorizzazione prima della scadenza dell’Iqama studentesca, altrimenti il laureato deve partire e ricominciare come richiedente di visto di lavoro dall’estero.', 'sa-vis']
    ] },
    { name: ['Research internships (KAUST) and the lack of an internship visa', 'Tirocini di ricerca (KAUST) e assenza di un visto di tirocinio'], r: 'intern', p: 'intern first', basis: 'consensus', t: [
      ['KAUST’s Visiting Student Research Program takes STEM undergraduates (third year or above) and master’s students with a GPA of at least 3.5 out of 4 for 2 to 6 months at USD 1,000 a month, with tuition, a private room and return airfare; it is open all year, and those finishing their degree within a year of the start date qualify. It is research, not an employer internship that converts to an offer.',
        'Il Visiting Student Research Program di KAUST accoglie studenti STEM di triennale (dal terzo anno in poi) e di magistrale con una media di almeno 3,5 su 4 per 2-6 mesi con 1.000 USD al mese, con tasse, camera privata e volo di ritorno; è aperto tutto l’anno, e chi conclude gli studi entro un anno dalla data di inizio è ammesso. È ricerca, non un tirocinio in azienda che porta a un’offerta.', 'sa-kaust'],
      ['The library finds no stand-alone internship visa: a company would have to sponsor a Qiwa temporary work visa (SAR 1,000, 90 days, extendable to 180) for a foreign graduate, and Middle East Briefing reports these had not been issued since 28 April 2025, with no resumption date announced. Interning on a tourist eVisa is prohibited.',
        'La libreria non trova alcun visto di tirocinio autonomo: un’azienda dovrebbe sponsorizzare un visto di lavoro temporaneo Qiwa (1.000 SAR, 90 giorni, prorogabile a 180) per un laureato straniero, e Middle East Briefing riferisce che non venivano rilasciati dal 28 aprile 2025, senza data di ripresa annunciata. Fare un tirocinio con eVisa turistico è vietato.', 'sa-vis sa-meb']
    ] }
  ],

  cycle: [
    ['There is no national season: the fairs read fall in April (KAU on 6–8 April 2026 in Jeddah, KFUPM on 28–30 April 2026 in Dhahran), and postings appear at different times of the year (PwC Middle East’s Riyadh graduate programme for 2026 was posted on 17 November 2025 for Consulting and on 8 July 2026 for Assurance; Riyad Bank’s programme on 7 April 2026).',
      'Non c’è una stagione nazionale: le fiere lette cadono ad aprile (KAU il 6–8 aprile 2026 a Gedda, KFUPM il 28–30 aprile 2026 a Dhahran), e gli annunci compaiono in momenti diversi dell’anno (il programma di PwC Middle East per laureati a Riad per il 2026 è stato pubblicato il 17 novembre 2025 per Consulenza e l’8 luglio 2026 per Revisione; quello di Riyad Bank il 7 aprile 2026).', 'sa-kau sa-kfupm sa-pwc-con sa-pwc-ass sa-riyad'],
    ['Quota dates shape what employers can hire: marketing and sales 60% from 19 April 2026, engineering 30% from 30 June 2026, accounting 50% from 27 October 2026 and project management 70% from 14 February 2027.',
      'Le date delle quote condizionano ciò che i datori possono assumere: marketing e vendite 60% dal 19 aprile 2026, ingegneria 30% dal 30 giugno 2026, contabilità 50% dal 27 ottobre 2026 e project management 70% dal 14 febbraio 2027.', 'sa-clyde26 sa-dla'],
    ['For an expatriate the lead time is the work visa: the library gives 4 to 6 weeks officially and 8 to 14 weeks in practice, and the qualification check (QVP) adds about 15 days, so an offer has to come three months or more before the start date.',
      'Per un espatriato i tempi dipendono dal visto di lavoro: la libreria indica 4-6 settimane ufficiali e 8-14 settimane nella pratica, e la verifica delle qualifiche (QVP) aggiunge circa 15 giorni, quindi l’offerta deve arrivare tre mesi o più prima della data di inizio.', 'sa-vis sa-qvp']
  ],

  schools: [
    ['Fairs are run by universities for their own students: KFUPM’s (with Aramco as platinum sponsor) and King Abdulaziz University’s are the two with 2026 dates we could open, and both are in the Kingdom.',
      'Le fiere sono organizzate dalle università per i propri studenti: quelle del KFUPM (con Aramco come sponsor platino) e della King Abdulaziz University sono le due con date 2026 che abbiamo potuto aprire, ed entrambe si tengono nel Regno.', 'sa-kfupm sa-kau'],
    ['We found no ranking of foreign schools by Saudi employers; what counts at the visa stage is that the degree can be verified (QVP accreditation, an apostille and a sworn Arabic translation). This is our reading of the employer side.',
      'Non abbiamo trovato alcuna classifica delle scuole estere da parte dei datori di lavoro sauditi; ciò che conta nella fase del visto è che il titolo sia verificabile (accreditamento QVP, apostille e traduzione giurata in arabo). Per il lato dei datori di lavoro è una nostra lettura.', 'sa-qvp sa-vis ours']
  ],

  events: [
    ['KFUPM Career Fair, Dhahran: 28–30 April 2026, more than 70 organisations, over 11,000 visitors and more than 300 career-coaching sessions; Aramco was platinum sponsor.',
      'KFUPM Career Fair, Dhahran: 28–30 aprile 2026, più di 70 organizzazioni, oltre 11.000 visitatori e più di 300 sessioni di coaching di carriera; Aramco era sponsor platino.', 'sa-kfupm'],
    ['King Abdulaziz University, 13th Career Forum: 6–8 April 2026 at the Jeddah Superdome, with employers and job seekers under one roof.',
      '13º Career Forum della King Abdulaziz University: 6–8 aprile 2026 al Jeddah Superdome, con datori di lavoro e persone in cerca di lavoro nello stesso luogo.', 'sa-kau']
  ],

  fields: [
    { f: 'accounting', t: [
      ['Accounting is being localised in five phases from 27 October 2025: 40% of 44 accounting roles in firms with five or more people in those roles (Saudis counted at a minimum of SAR 6,000 with a bachelor’s degree), rising to 50% from 27 October 2026 and to 70% at the end. The library adds that accountants need SOCPA accreditation before the licence on Qiwa.',
        'La contabilità viene localizzata in cinque fasi dal 27 ottobre 2025: il 40% di 44 ruoli contabili nelle aziende con cinque o più persone in quei ruoli (sauditi conteggiati con un minimo di 6.000 SAR con laurea triennale), che sale al 50% dal 27 ottobre 2026 e al 70% alla fine. La libreria aggiunge che i contabili devono avere l’accreditamento SOCPA prima della licenza su Qiwa.', 'sa-acc sa-dla sa-vis']
    ] },
    { f: 'marketing', t: [
      ['Ten marketing occupations and nine sales occupations carry a 60% Saudi quota from 19 April 2026 for establishments with three or more workers in them, so a foreign marketing or sales graduate competes against a quota.',
        'Dieci professioni di marketing e nove di vendita hanno una quota saudita del 60% dal 19 aprile 2026 per le aziende con tre o più addetti in quei ruoli, quindi un laureato straniero in marketing o vendite compete contro una quota.', 'sa-clyde26']
    ] },
    { f: 'business', t: [
      ['Hays’s guide puts technical and digital skills (49%) and business and analytical skills (46%) at the top of what employers want in 2026; procurement roles carry a 70% Saudi quota and project management 70% from 14 February 2027.',
        'La guida di Hays pone le competenze tecniche e digitali (49%) e quelle di business e analisi (46%) in cima a ciò che i datori di lavoro cercano nel 2026; i ruoli degli acquisti hanno una quota saudita del 70% e il project management del 70% dal 14 febbraio 2027.', 'sa-hays sa-dla sa-gulf']
    ] },
    { f: 'finance', t: [
      ['Riyad Bank’s Fursan Al Riyad graduate programme (six months, Riyadh) asks for a bachelor’s degree, 0 to 1 years of experience and advanced English and states no nationality rule; PIF’s programme is for Saudis only.',
        'Il programma per laureati Fursan Al Riyad di Riyad Bank (sei mesi, Riad) chiede una laurea triennale, da 0 a 1 anni di esperienza e inglese avanzato e non indica regole di nazionalità; il programma di PIF è solo per sauditi.', 'sa-riyad sa-gulf']
    ] },
    { f: 'public', t: [
      ['Only 42% of employed Saudis with tertiary education worked in the private sector in 2025, up from 19% in 2015, so state and state-linked bodies still employ most Saudi graduates; the national employment platform Jadarat, launched in August 2024, is aimed primarily at Saudi citizens.',
        'Solo il 42% dei sauditi occupati con istruzione terziaria lavorava nel settore privato nel 2025, contro il 19% nel 2015, quindi lo Stato e gli enti collegati impiegano ancora la maggior parte dei laureati sauditi; la piattaforma nazionale per l’impiego Jadarat, lanciata ad agosto 2024, è rivolta soprattutto ai cittadini sauditi.', 'sa-wb sa-jadarat']
    ] },
    { f: 'consulting', t: [
      ['Consulting firms must keep 40% of quota roles Saudi, and Riyadh offices are staffed with Saudi graduates first.',
        'Le società di consulenza devono riservare ai sauditi il 40% dei ruoli soggetti a quota, e gli uffici di Riad assumono prima i laureati sauditi.', 'sa-gulf']
    ] },
    { f: 'tech', t: [
      ['Aramco, STC and government-linked bodies such as the data and AI authority SDAIA are steady recruiters of Saudi graduates in software, data and cybersecurity, with structured mentoring; the giga-projects prefer people who already have a specialism.',
        'Aramco, STC ed enti governativi come l’autorità per dati e IA SDAIA reclutano con regolarità laureati sauditi in software, dati e cybersicurezza, con un affiancamento strutturato; i giga-progetti preferiscono persone che hanno già una specializzazione.', 'sa-edarabia'],
      ['We did not establish the Saudi quota for IT roles: sources read give conflicting percentages and none is an official text.',
        'Non abbiamo stabilito la quota saudita per i ruoli IT: le fonti lette danno percentuali contrastanti e nessuna è un testo ufficiale.', 'ours']
    ] },
    { f: 'cyber', t: [
      ['STC’s academy was set up to train Saudi graduates in cybersecurity and data analysis.',
        'L’accademia di STC è stata creata per formare laureati sauditi in cybersicurezza e analisi dei dati.', 'sa-stc']
    ] }
  ],

  customs: [
    { k: 'season', v: 'cyclical', t: [
      ['University fairs cluster in April (KAU, KFUPM) and programme postings come at different times of year (PwC in November and July, Riyad Bank in April); the pages read show no single national season.',
        'Le fiere universitarie si concentrano ad aprile (KAU, KFUPM) e gli annunci dei programmi escono in momenti diversi dell’anno (PwC a novembre e luglio, Riyad Bank ad aprile); le pagine lette non mostrano alcuna stagione nazionale unica.', 'sa-kau sa-kfupm sa-pwc-con sa-pwc-ass sa-riyad']
    ] },
    { k: 'masters', v: 'irrelevant', t: [
      ['The graduate programme page read asks for a bachelor’s degree and 0 to 1 years of experience, and Aramco asks internationals for years of experience rather than a degree level; neither mentions a master’s as an advantage. This is our reading.',
        'La pagina del programma per laureati letta chiede una laurea triennale e da 0 a 1 anni di esperienza, e Aramco chiede ai candidati internazionali anni di esperienza più che un livello di laurea; nessuna delle due cita la magistrale come vantaggio. È una nostra lettura.', 'sa-riyad sa-aramco-int ours']
    ] },
    { k: 'degrees', v: 'eval', t: [
      ['Foreign degrees are verified, not just accepted: work-visa applicants from many countries must obtain Qualification Verification Program (QVP) accreditation online (USD 93, about 15 more days; one law firm lists 19 countries, unofficially, and the portal decides which applies), and the library requires an apostille, which Saudi Arabia has accepted since 7 December 2022, plus a sworn Arabic translation. Engineers need Saudi Council of Engineers registration (5 years of experience for foreigners) and accountants SOCPA accreditation.',
        'I titoli esteri vengono verificati, non solo accettati: chi chiede un visto di lavoro da molti paesi deve ottenere online l’accreditamento del Qualification Verification Program (QVP) (93 USD, circa 15 giorni in più; uno studio legale elenca 19 paesi, in modo non ufficiale, e il portale decide quale si applica), e la libreria richiede l’apostille, che l’Arabia Saudita accetta dal 7 dicembre 2022, più una traduzione giurata in arabo. Gli ingegneri devono iscriversi al Saudi Council of Engineers (5 anni di esperienza per gli stranieri) e i contabili avere l’accreditamento SOCPA.', 'sa-qvp sa-hcch sa-vis']
    ] },
    { k: 'brand', v: 'some', t: [
      ['The fairs read are run by individual universities for their own students and the biggest sponsors are state-linked (Aramco, Riyad Bank); we found no ranking of schools by employers. This is our reading.',
        'Le fiere lette sono organizzate dalle singole università per i propri studenti e i principali sponsor sono legati allo Stato (Aramco, Riyad Bank); non abbiamo trovato alcuna classifica delle scuole da parte dei datori di lavoro. È una nostra lettura.', 'sa-kfupm sa-kau ours']
    ] },
    { k: 'dual', v: 'little', t: [
      ['We found no apprenticeship or dual-study route into graduate jobs for foreigners; the library finds no stand-alone internship visa and describes co-op training only for students enrolled in Saudi universities. This is our reading.',
        'Non abbiamo trovato vie di apprendistato o di studio duale verso i lavori per laureati per gli stranieri; la libreria non trova alcun visto di tirocinio autonomo e descrive la formazione co-op solo per gli studenti iscritti a università saudite. È una nostra lettura.', 'sa-vis ours']
    ] },
    { k: 'publicw', v: 'high', t: [
      ['Only 42% of employed Saudis with tertiary education worked in the private sector in 2025 (19% in 2015), and the largest graduate schemes (PIF, Aramco, SABIC) are state-linked and for Saudis; for a foreign graduate the public sector is largely closed.',
        'Solo il 42% dei sauditi occupati con istruzione terziaria lavorava nel settore privato nel 2025 (19% nel 2015), e i principali programmi per laureati (PIF, Aramco, SABIC) sono legati allo Stato e riservati ai sauditi; per un laureato straniero il settore pubblico è in gran parte chiuso.', 'sa-wb sa-gulf']
    ] },
    { k: 'sponsorr', v: 'some', t: [
      ['Every foreign hire is employer-sponsored and the employer pays the visa quota (SAR 2,000) and the expatriate levy (SAR 9,600 a year); but foreign hiring is focused on highly specialised roles and employers need Nitaqat room (Medium Green or above) to sponsor at all. See Visas for the rules.',
        'Ogni assunzione di stranieri è sponsorizzata dal datore di lavoro, che paga la quota visto (2.000 SAR) e la tassa sugli espatriati (9.600 SAR l’anno); ma le assunzioni di stranieri si concentrano su ruoli molto specializzati e i datori hanno bisogno di margine Nitaqat (Medium Green o superiore) per sponsorizzare. Vedi Visti per le regole.', 'sa-vis sa-jisr sa-ml']
    ] },
    { k: 'photo', v: 'common', t: [
      ['A Saudi CV guide (April 2023) calls a neat, conservative professional photo common practice, while noting some experts caution against photos. MHRSD’s interview rules bar discrimination by gender, age or marital status.',
        'Una guida ai CV sauditi (aprile 2023) definisce prassi comune una foto professionale sobria e curata, notando che alcuni esperti sconsigliano le foto. Le norme dell’MHRSD sui colloqui vietano la discriminazione per sesso, età o stato civile.', 'sa-cv sa-mq-rec']
    ] },
    { k: 'cv', v: 'two', t: [
      ['The same guide says to keep the CV to two to three pages depending on experience, starting with contact details and a phone number with the international code.',
        'La stessa guida dice di mantenere il CV tra due e tre pagine a seconda dell’esperienza, iniziando con i recapiti e un numero di telefono con il prefisso internazionale.', 'sa-cv']
    ] },
    { k: 'letter', v: 'optional', t: [
      ['The programme page read (Riyad Bank) lists no cover-letter requirement, and the CV guide read does not mention one. This is our reading.',
        'La pagina del programma letta (Riyad Bank) non indica l’obbligo di una lettera di presentazione, e la guida ai CV letta non ne parla. È una nostra lettura.', 'sa-riyad sa-cv ours']
    ] },
    { k: 'refs', v: 'later', t: [
      ['None of the programme and posting pages read asks for references with the application; the contract stage brings the checks. This is our reading.',
        'Nessuna delle pagine di programmi e annunci lette chiede referenze con la candidatura; i controlli arrivano alla fase del contratto. È una nostra lettura.', 'sa-riyad sa-qvp ours']
    ] },
    { k: 'docs', v: 'certified', t: [
      ['Degrees and certificates must be apostilled with a sworn Arabic translation, and the QVP accreditation is needed before the work visa is stamped and the Iqama issued.',
        'Titoli e certificati devono avere l’apostille e una traduzione giurata in arabo, e l’accreditamento QVP serve prima che il visto di lavoro venga apposto e l’Iqama emessa.', 'sa-vis sa-qvp']
    ] },
    { k: 'salary', v: 'later', t: [
      ['We found no page saying Saudi employers ask for a salary expectation with the first application; the salary is set in the Qiwa contract, and no entry pay for expatriate graduates was found. This is our reading for the application stage.',
        'Non abbiamo trovato alcuna pagina che dica che i datori di lavoro sauditi chiedono una pretesa salariale con la prima candidatura; lo stipendio è fissato nel contratto su Qiwa, e non è stato trovato alcuno stipendio d’ingresso per laureati stranieri. Per la fase di candidatura è una nostra lettura.', 'sa-ml ours']
    ] },
    { k: 'check', v: 'routine', t: [
      ['Checks run through the state for a foreign hire: the QVP qualification check, a pre-departure medical on the official form, an apostilled criminal-record certificate and a second medical in the Kingdom (Efada) before the Iqama.',
        'Per un assunto straniero i controlli passano dallo Stato: la verifica delle qualifiche QVP, una visita medica prima della partenza sul modulo ufficiale, un certificato penale con apostille e una seconda visita nel Regno (Efada) prima dell’Iqama.', 'sa-qvp sa-vis']
    ] },
    { k: 'contact', v: 'people', t: [
      ['Referrals from staff are the top hiring method in the US-Saudi Business Council’s 2019 review, and a 2017 study of two telecom companies finds wasta used in recruitment; recruiters and agencies are used with mixed results.',
        'Le segnalazioni del personale sono il metodo di assunzione principale nella rassegna del US-Saudi Business Council del 2019, e uno studio del 2017 su due società di telecomunicazioni rileva che la wasta è usata nelle assunzioni; selezionatori e agenzie sono usati con risultati alterni.', 'sa-ussbc sa-wasta']
    ] },
    { k: 'abroad', v: 'hard', t: [
      ['A foreign fresh graduate rarely fits a programme; every role needs an employer-sponsored permit.',
        'Un neolaureato straniero rientra di rado in un programma; ogni ruolo richiede un permesso sponsorizzato dal datore.', 'sa-gulf'],
      ['MHRSD’s rules allow interviews in person, remote or by phone, and the work visa takes 8 to 14 weeks in practice after the contract is accepted on Qiwa, so a search can start from abroad but work cannot start on a tourist eVisa.',
        'Le norme dell’MHRSD ammettono colloqui di persona, a distanza o per telefono, e il visto di lavoro richiede 8-14 settimane nella pratica dopo l’accettazione del contratto su Qiwa, quindi la ricerca può partire dall’estero ma non si può iniziare a lavorare con un eVisa turistico.', 'sa-mq-rec sa-vis']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['English in multinationals and in Riyad Bank’s graduate programme (advanced English), but employment documents must be in Arabic, with an English copy common and the Arabic text prevailing; Arabic is increasingly expected as roles are localised.',
        'L’inglese nelle multinazionali e nel programma per laureati di Riyad Bank (inglese avanzato), ma i documenti di lavoro devono essere in arabo, con una copia in inglese comune e il testo arabo che prevale; l’arabo è sempre più richiesto man mano che i ruoli vengono localizzati.', 'sa-riyad sa-ml ours']
    ] }
  ],

  rows: {
    process: [
      ['MHRSD’s rules on private-sector interviews (reported September 2025) require the employer to tell the candidate the format (in person, remote or phone), the date and the time at least three working days ahead; a panel of at least two Saudi members including an HR specialist; and a result within 30 days of the interview, with reasons given to unsuccessful candidates. Interviews may not discriminate on grounds such as gender, age or marital status.',
        'Le norme dell’MHRSD sui colloqui nel settore privato (riportate a settembre 2025) richiedono che il datore di lavoro comunichi al candidato il formato (di persona, a distanza o per telefono), la data e l’ora con almeno tre giorni lavorativi di anticipo; una commissione di almeno due membri sauditi, tra cui uno specialista HR; e un esito entro 30 giorni dal colloquio, con le motivazioni date ai candidati non selezionati. I colloqui non possono discriminare per motivi come sesso, età o stato civile.', 'sa-mq-rec'],
      ['After an accepted offer the contract is issued on Qiwa and the work visa follows; the library gives 4 to 6 weeks officially and 8 to 14 weeks in practice, and the QVP qualification check adds about 15 days.',
        'Dopo un’offerta accettata il contratto è emesso su Qiwa e segue il visto di lavoro; la libreria indica 4-6 settimane ufficiali e 8-14 settimane nella pratica, e la verifica delle qualifiche QVP aggiunge circa 15 giorni.', 'sa-vis sa-qvp'],
      ['We could not open the selection steps of any graduate programme (PwC’s and KPMG’s Saudi postings show only “filled” and Aramco’s hiring-process page returned an error), so the number of rounds, online tests, assessment-centre practice, interview language and dress norms are not established here.',
        'Non siamo riusciti ad aprire le fasi di selezione di alcun programma per laureati (gli annunci sauditi di PwC e KPMG mostrano solo «coperto» e la pagina del processo di assunzione di Aramco ha restituito un errore), quindi il numero di colloqui, i test online, la prassi degli assessment center, la lingua dei colloqui e le norme sull’abbigliamento non sono stabiliti qui.', 'ours']
    ],
    offer: [
      ['Employers must issue contracts on the Qiwa portal; expatriates can only be on fixed-term contracts (one guide adds a maximum of four years), and a contract is normally in Arabic, often with an English copy, the Arabic text prevailing if the two differ.',
        'I datori di lavoro devono emettere i contratti sul portale Qiwa; gli espatriati possono avere solo contratti a tempo determinato (una guida aggiunge un massimo di quattro anni), e un contratto è normalmente in arabo, spesso con una copia in inglese, con prevalenza del testo arabo in caso di differenze.', 'sa-ml sa-meb'],
      ['Probation can last up to 180 days (raised from 90 by the amendments in force since 19 February 2025), must be written into the contract, and either side may end the contract during it without notice or compensation. Employers must provide housing and transport, or equivalent compensation.',
        'La prova può durare fino a 180 giorni (portata da 90 dalle modifiche in vigore dal 19 febbraio 2025), deve essere scritta nel contratto, e ciascuna parte può risolvere il contratto durante la prova senza preavviso né indennizzo. I datori di lavoro devono fornire alloggio e trasporto, o un compenso equivalente.', 'sa-ks sa-meb'],
      ['On indefinite-term contracts notice is 30 days for the employee and 60 days for the employer, and a resignation is deemed accepted if the employer does not reply within 30 days. The library gives the end-of-service award as half a month’s pay per year for the first five years and a full month after, and on resignation nothing under two years, one-third from two to five years and two-thirds from five to ten.',
        'Nei contratti a tempo indeterminato il preavviso è di 30 giorni per il dipendente e di 60 giorni per il datore di lavoro, e le dimissioni si considerano accettate se il datore non risponde entro 30 giorni. La libreria indica l’indennità di fine servizio in mezza mensilità per ciascuno dei primi cinque anni e una mensilità intera dopo, e in caso di dimissioni nulla sotto i due anni, un terzo da due a cinque anni e due terzi da cinque a dieci.', 'sa-ks sa-vis'],
      ['We did not establish whether graduates negotiate, how long employers give to decide, or entry pay; no employer-stated entry pay for expatriate graduates was found.',
        'Non abbiamo stabilito se i neolaureati negoziano, quanto tempo i datori di lavoro concedono per decidere né gli stipendi d’ingresso; non è stato trovato alcuno stipendio d’ingresso dichiarato dai datori di lavoro per i laureati stranieri.', 'ours']
    ],
    sponsor: [
      ['Under Nitaqat, employers are rated Platinum, Green (low, medium or high) or Red, and only Medium Green and above can apply for new visas, renew work permits or transfer sponsorship. A new three-year phase launched in 2026 aims at more than 340,000 additional private-sector jobs for Saudis, and profession-specific requirements apply even when a company meets its overall ratio.',
        'Con il sistema Nitaqat i datori di lavoro sono classificati Platinum, Green (basso, medio o alto) o Red, e solo Medium Green e superiori possono chiedere nuovi visti, rinnovare i permessi di lavoro o trasferire la sponsorizzazione. Una nuova fase triennale avviata nel 2026 punta a più di 340.000 posti aggiuntivi per i sauditi nel settore privato, e i requisiti per singola professione si applicano anche quando un’azienda rispetta il rapporto complessivo.', 'sa-ml sa-sov'],
      ['Quotas by role: consulting 40% of quota roles (since 25 March 2024); marketing and sales 60% (from 19 April 2026); engineering 30% (from 30 June 2026, firms with five or more engineers, and only Saudi Council of Engineers-registered engineers count); accounting 40% rising to 70% in five phases; project management 70% from 14 February 2027; administrative support 100% from 4 October 2026.',
        'Quote per ruolo: consulenza 40% dei ruoli soggetti a quota (dal 25 marzo 2024); marketing e vendite 60% (dal 19 aprile 2026); ingegneria 30% (dal 30 giugno 2026, aziende con cinque o più ingegneri, e contano solo gli ingegneri iscritti al Saudi Council of Engineers); contabilità 40% in salita al 70% in cinque fasi; project management 70% dal 14 febbraio 2027; supporto amministrativo 100% dal 4 ottobre 2026.', 'sa-gulf sa-clyde26 sa-acc sa-dla'],
      ['Regional headquarters licensed under the 2024 rule must hire at least 15 staff, three at C-level, and are exempt from Saudisation for 10 years. The library says foreign graduates cannot get the engineer title (the Saudi Council of Engineers asks foreigners for 5 years of certified experience), and a downgrade to technician costs the right to a family visa.',
        'Le sedi regionali autorizzate con la norma del 2024 devono assumere almeno 15 persone, tre di livello dirigenziale, e sono esenti dalla saudizzazione per 10 anni. La libreria dice che i laureati stranieri non possono ottenere il titolo di ingegnere (il Saudi Council of Engineers chiede agli stranieri 5 anni di esperienza certificata), e un declassamento a tecnico fa perdere il diritto al visto familiare.', 'sa-gulf sa-vis'],
      ['The employer bears the visa quota (SAR 2,000), the expatriate levy (SAR 9,600 a year, or SAR 8,400 for compliant employers), the Iqama fee (SAR 650 a year), health insurance and return travel; the worker pays only the dependants’ levy.',
        'Il datore di lavoro sostiene la quota visto (2.000 SAR), la tassa sugli espatriati (9.600 SAR l’anno, o 8.400 SAR per i datori in regola), la tassa dell’Iqama (650 SAR l’anno), l’assicurazione sanitaria e il viaggio di rientro; il lavoratore paga solo la tassa per i familiari a carico.', 'sa-vis']
    ],
    where: [
      ['Public platforms: Jadarat, the unified national employment platform launched in August 2024 (it brought together Taqat and Jadarah), is aimed primarily at Saudi citizens; for expatriates the contract runs through Qiwa (qiwa.sa) once an employer has hired you, and the qualification check through the QVP portal (qvp.qiwa.sa).',
        'Piattaforme pubbliche: Jadarat, la piattaforma nazionale unificata per l’impiego lanciata ad agosto 2024 (ha riunito Taqat e Jadarah), è rivolta soprattutto ai cittadini sauditi; per gli espatriati il contratto passa da Qiwa (qiwa.sa) una volta assunti e la verifica delle qualifiche dal portale QVP (qvp.qiwa.sa).', 'sa-jadarat sa-vis sa-qvp'],
      ['Boards named by employers in the US-Saudi Business Council’s 2019 review: LinkedIn, Bayt, Naukrigulf and Taqat.sa (now succeeded by Jadarat). Hays’s Salary Guide 2026 is a recent read of where recruiters see demand.',
        'Portali citati dai datori di lavoro nella rassegna del US-Saudi Business Council del 2019: LinkedIn, Bayt, Naukrigulf e Taqat.sa (ora sostituito da Jadarat). La Salary Guide 2026 di Hays è una lettura recente di dove i selezionatori vedono domanda.', 'sa-ussbc sa-jadarat sa-hays'],
      ['Employer pages: Aramco (careers for international applicants and for Saudi applicants), PwC Middle East’s graduate postings, Riyad Bank’s careers site (careers.riyadbank.com.sa) and SABIC’s student and fresh-graduate programmes; most are for Saudis (see Common mistakes).',
        'Pagine dei datori di lavoro: Aramco (carriere per candidati internazionali e per candidati sauditi), gli annunci per laureati di PwC Middle East, il sito carriere di Riyad Bank (careers.riyadbank.com.sa) e i programmi di SABIC per studenti e neolaureati; la maggior parte è per sauditi (vedi Errori comuni).', 'sa-aramco-int sa-aramco-sa sa-pwc-ass sa-riyad sa-gulf'],
      ['University services and fairs: the KFUPM Career Fair (April), King Abdulaziz University’s Career Forum (April) and KAUST’s Visiting Student Research Program (admissions.kaust.edu.sa/study/internships) for STEM students.',
        'Servizi universitari e fiere: la KFUPM Career Fair (aprile), il Career Forum della King Abdulaziz University (aprile) e il Visiting Student Research Program di KAUST (admissions.kaust.edu.sa/study/internships) per gli studenti STEM.', 'sa-kfupm sa-kau sa-kaust']
    ],
    mistakes: [
      ['Applying to the Saudi-only schemes (PIF, SABIC, KPMG Hamaat) as a foreign graduate, or assuming a PwC or Aramco page is open to you: Aramco’s international page asks for five to ten years, and PwC’s Saudi postings ask for a work right without PwC sponsorship.',
        'Candidarsi ai programmi riservati ai sauditi (PIF, SABIC, KPMG Hamaat) da laureato straniero, o dare per scontato che una pagina di PwC o Aramco sia aperta a voi: la pagina internazionale di Aramco chiede da cinque a dieci anni, e gli annunci sauditi di PwC chiedono un diritto di lavoro senza la sponsorizzazione di PwC.', 'sa-gulf sa-kpmg sa-aramco-int'],
      ['Working, doing a trial day or interning on a tourist eVisa: the library cites arrest, up to 6 months in prison, a fine of up to SAR 50,000 and deportation with a ban on return.',
        'Lavorare, fare una giornata di prova o un tirocinio con eVisa turistico: la libreria cita arresto, reclusione fino a 6 mesi, una multa fino a 50.000 SAR ed espulsione con divieto di rientro.', 'sa-vis'],
      ['Leaving the country after entering on the work visa but before the Iqama is issued: the library says the visa lapses at the border and the whole procedure restarts abroad.',
        'Lasciare il paese dopo essere entrati con il visto di lavoro ma prima dell’emissione dell’Iqama: la libreria dice che il visto decade alla frontiera e l’intera procedura riparte dall’estero.', 'sa-vis'],
      ['Starting the degree check late: QVP accreditation (USD 93) adds about 15 days and must clear before the visa is stamped, and the apostille and sworn translation come before it.',
        'Avviare tardi la verifica del titolo: l’accreditamento QVP (93 USD) aggiunge circa 15 giorni e deve concludersi prima che il visto venga apposto, e l’apostille e la traduzione giurata vengono prima.', 'sa-qvp sa-vis'],
      ['Expecting an engineer’s title as a new graduate (the Saudi Council of Engineers asks foreigners for 5 years) or planning to move to a rival in the first 12 months: the library says a worker cannot change employer before 12 months of service, except for serious breaches by the employer.',
        'Aspettarsi il titolo di ingegnere da neolaureato (il Saudi Council of Engineers chiede agli stranieri 5 anni) o pensare di passare a un concorrente nei primi 12 mesi: la libreria dice che un lavoratore non può cambiare datore di lavoro prima di 12 mesi di servizio, salvo gravi inadempienze del datore.', 'sa-vis']
    ]
  },

  lang: [
    { f: 'finance', v: 'english', lv: 'Advanced English (Riyad Bank programme)', t: [
      ['Riyad Bank’s 2026 graduate programme lists advanced English among its requirements and states no Arabic level; the pages read give no test or certificate.',
        'Il programma per laureati 2026 di Riyad Bank elenca l’inglese avanzato tra i requisiti e non indica un livello di arabo; le pagine lette non indicano alcun test o certificato.', 'sa-riyad']
    ] },
    { f: 'business', v: 'bilingual', lv: 'English and Arabic (level not stated)', t: [
      ['Employment documents must be in Arabic and standard Qiwa contracts are Arabic or Arabic-English side by side, with the Arabic prevailing; advertised posts follow the national occupation classification. No source measured the English or Arabic level employers ask of graduates.',
        'I documenti di lavoro devono essere in arabo e i contratti standard su Qiwa sono in arabo o in arabo e inglese affiancati, con prevalenza dell’arabo; le offerte pubblicate seguono la classificazione nazionale delle professioni. Nessuna fonte ha misurato il livello di inglese o arabo richiesto ai laureati.', 'sa-ml sa-mq-rec ours']
    ] },
    { f: 'public', v: 'local', lv: 'Arabic (level not stated)', t: [
      ['Public and state-linked employers recruit Saudi nationals mainly through the national platform Jadarat, and employment documents must be in Arabic; we found no page stating an Arabic level. This is our reading for the language.',
        'I datori di lavoro pubblici e collegati allo Stato assumono cittadini sauditi soprattutto tramite la piattaforma nazionale Jadarat, e i documenti di lavoro devono essere in arabo; non abbiamo trovato alcuna pagina che indichi un livello di arabo. Per la lingua è una nostra lettura.', 'sa-jadarat sa-ml ours']
    ] },
    { f: 'tech', v: 'english', lv: 'English (level not stated)', t: [
      ['Technical and digital skills are the most wanted capability in Hays’s 2026 guide (49% of employers), but we found no page testing English or Arabic for graduates in software, data or cybersecurity. This is our reading.',
        'Le competenze tecniche e digitali sono le più richieste nella guida 2026 di Hays (49% dei datori di lavoro), ma non abbiamo trovato alcuna pagina che verifichi l’inglese o l’arabo per i laureati in software, dati o cybersicurezza. È una nostra lettura.', 'sa-hays ours']
    ] }
  ],

  programmes: [
    { n: 'Graduate Development Program', o: 'Public Investment Fund (PIF)', f: 'finance', in: null, w: null, lang: 'n/s', intl: 'local', ids: 'sa-gulf' },
    { n: 'Hamaat (Advisory, Audit and Tax)', o: 'KPMG Saudi Arabia', f: 'accounting', in: null, w: null, lang: 'n/s', intl: 'local', ids: 'sa-kpmg' },
    { n: 'Student and fresh-graduate programmes (Middle East and Africa)', o: 'SABIC', f: 'business', in: null, w: null, lang: 'n/s', intl: 'local', ids: 'sa-gulf' },
    { n: 'Fursan Al Riyad graduate development programme (6 months)', o: 'Riyad Bank', f: 'finance', in: null, w: null, lang: 'EN', intl: 'unknown', ids: 'sa-riyad' },
    { n: 'Graduate Programme 2026 (Assurance, Consulting, Riyadh and other offices)', o: 'PwC Middle East', f: 'accounting', in: null, w: null, lang: 'n/s', intl: 'local', ids: 'sa-pwc-ass sa-gulf' },
    { n: 'Visiting Student Research Program (VSRP)', o: 'KAUST', f: 'tech', in: null, w: null, lang: 'EN', intl: 'yes', ids: 'sa-kaust' }
  ],

  outcomes: [
    ['The Saudi unemployment rate was 6.4% in the first quarter of 2026 (Saudi men 4.9%, Saudi women 9%) and 6.5% in the second, against 3.1% and 3.0% for the whole labour force; for Saudis aged 15 to 24 it was 13.8% for men and 20.4% for women in the first quarter. These are all-education figures: we found no graduate-specific unemployment, return-offer or time-to-first-job figure, and none for expatriate graduates.',
      'Il tasso di disoccupazione dei sauditi era del 6,4% nel primo trimestre 2026 (uomini sauditi 4,9%, donne saudite 9%) e del 6,5% nel secondo, contro il 3,1% e il 3,0% dell’intera forza lavoro; per i sauditi tra 15 e 24 anni era del 13,8% per gli uomini e del 20,4% per le donne nel primo trimestre. Sono dati per tutti i livelli di istruzione: non abbiamo trovato alcun dato specifico sulla disoccupazione dei laureati, sulle conferme post-tirocinio o sui tempi per il primo lavoro, né per i laureati stranieri.', 'sa-gnlfs sa-te'],
    ['Saudis made up 41% of new hires in Jisr’s 2025–2026 report, and Riyadh took more than half of all new hires; the World Bank counts 35.8% of Saudis with tertiary education in 2025 against 24.4% of expatriates.',
      'I sauditi erano il 41% delle nuove assunzioni nel rapporto 2025–2026 di Jisr, e Riad ha raccolto più della metà di tutte le nuove assunzioni; la Banca Mondiale conta il 35,8% dei sauditi con istruzione terziaria nel 2025 contro il 24,4% degli espatriati.', 'sa-jisr sa-wb']
  ],

  sources: {
    'sa-gulf': ['employer-stated', 'Admetia research library: places/gulf-and-central-eastern-europe.md §1 and §2 (HRSD, PIF, Aramco, SABIC and PwC pages)', 'research/places/gulf-and-central-eastern-europe.md', '2026-10-02'],
    'sa-vis': ['practitioner consensus', 'Admetia research library: visas_immigration/saudi_arabia, Saudi Arabia visa guide (work-visa steps, costs, QVP-era checks, Apostille, engineer registration, end-of-service award)', 'research/visas_immigration/saudi_arabia/saudi_arabia_visas_immigration_guide.md', '2026-10-05'],
    'sa-edarabia': ['practitioner consensus', 'Edarabia: what computer science graduates in Saudi Arabia actually do after graduation', 'https://www.edarabia.com/what-computer-science-graduates-saudi-arabia-actually-do-after-graduation/', '2026-10-07'],
    'sa-stc': ['employer-stated', 'Arab News: Saudi Telecom Academy promises a new generation of digital leaders', 'https://arabnews.com/node/1246096', '2026-10-07'],
    'sa-aramco-int': ['employer-stated', 'Aramco: careers for international applicants', 'https://www.aramco.com/en/careers/for-international-applicants', '2026-10-08'],
    'sa-aramco-sa': ['employer-stated', 'Aramco: careers for Saudi applicants (student programs, jobs for Saudi graduates)', 'https://www.aramco.com/en/careers/for-saudi-applicants', '2026-10-08'],
    'sa-clyde26': ['practitioner consensus', 'Clyde & Co: the first Saudisation updates of 2026, key changes across marketing, sales, engineering and more (February 2026)', 'https://www.clydeco.com/es/insights/2026/02/the-first-saudisation-updates-of-2026-key-changes', '2026-10-08'],
    'sa-sov': ['practitioner consensus', 'Sovereign Group: a 2026 guide to Saudization and Nitaqat (10 July 2026)', 'https://www.sovereigngroup.com/news/a-2026-guide-to-saudization-and-nitaqat/', '2026-10-08'],
    'sa-dla': ['practitioner consensus', 'DLA Piper: Saudi Arabia announces further Saudisation increases for key professions (2026)', 'https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/-saudi-arabia-announces-further-saudisation-increases-for-key-professions', '2026-10-08'],
    'sa-acc': ['practitioner consensus', 'People Matters: KSA HR ministry begins 40% Saudization in 44 accounting professions (28 October 2025)', 'https://me.peoplemattersglobal.com/news/economy-policy/ksa-hr-ministry-begins-40percent-saudization-in-44-accounting-professions-46982', '2026-10-08'],
    'sa-mq-rec': ['practitioner consensus', 'Mondaq: new regulations for private sector job advertising and interviews, Saudi Arabia (29 September 2025)', 'https://www.mondaq.com/saudiarabia/employee-rights-labour-relations/1683580/new-regulations-for-private-sector-job-advertising-and-interviews', '2026-10-08'],
    'sa-ks': ['practitioner consensus', 'King & Spalding: amendments to the Saudi Labor Law approved', 'https://www.kslaw.com/insights/articles/amendments-to-the-saudi-labor-law-approved', '2026-10-08'],
    'sa-ml': ['practitioner consensus', 'Morgan Lewis: navigating employment in the Middle East, KSA part 1 takeaways (December 2025)', 'https://www.morganlewis.com/blogs/shiftingsandsoflaborlaw/2025/12/navigating-employment-in-the-middle-east-ksa-part-1-takeaways', '2026-10-08'],
    'sa-meb': ['practitioner consensus', 'Middle East Briefing: how to hire in Saudi Arabia legally, a step-by-step guide', 'https://www.middleeastbriefing.com/news/how-to-hire-in-saudi-arabia-legally-a-step-by-step-guide/', '2026-10-08'],
    'sa-qvp': ['practitioner consensus', 'Mondaq: expansion of the Qualification Verification Program, Saudi Arabia work visas (9 December 2024)', 'https://www.mondaq.com/saudiarabia/work-visas/1555360/expansion-of-the-qualification-verification-program', '2026-10-08'],
    'sa-hcch': ['data', 'Hague Conference on Private International Law: Apostille Convention status table (Saudi Arabia, in force 7 December 2022)', 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41', '2026-10-08'],
    'sa-gnlfs': ['data', 'Gulf News: Saudi unemployment falls to 6.4% in Q1 2026 (GASTAT Labour Force Survey)', 'https://gulfnews.com/world/gulf/saudi/saudi-unemployment-falls-to-64-in-q1-2026-1.500592445', '2026-10-08'],
    'sa-te': ['data', 'Trading Economics: Saudi Arabia jobless rate edges down to 3.0% in the second quarter of 2026 (30 September 2026)', 'https://tradingeconomics.com/saudi-arabia/unemployment-rate/news/588098', '2026-10-08'],
    'sa-wb': ['data', 'World Bank: A Decade of Progress, Inside Saudi Arabia’s Labor Market Transformation', 'https://documents1.worldbank.org/curated/en/099012226144031210/pdf/P179647-b378ec18-7e40-488a-8327-0cc6f6c5dd18.pdf', '2026-10-08'],
    'sa-hays': ['practitioner consensus', 'EnterpriseAM: hiring expansion and expectation gaps to define the 2026 Saudi job market (Hays Salary Guide 2026, 4 May 2026)', 'https://enterpriseam.com/ksa/2026/05/04/hiring-expansion-and-expectation-gaps-to-define-the-2026-saudi-job-market/', '2026-10-08'],
    'sa-jisr': ['practitioner consensus', 'People Matters: Saudi companies hire more nationals as expatriate numbers fall, Jisr report (28 January 2026)', 'https://me.peoplemattersglobal.com/news/workforce-planning/saudi-companies-hire-more-nationals-as-expatriate-numbers-fall-jisr-report-48195', '2026-10-08'],
    'sa-ussbc': ['anecdotal', 'US-Saudi Business Council: hiring in Saudi Arabia, what our members say (17 October 2019)', 'https://ussaudi.org/hiring-in-saudi-arabia-what-our-members-say/', '2026-10-08'],
    'sa-wasta': ['practitioner consensus', 'Durham University e-theses: Organizational culture in the Saudi telecommunication sector, focusing on the role of wasta (Alofi, 2017)', 'https://etheses.durham.ac.uk/id/eprint/10567/', '2026-10-08'],
    'sa-kfupm': ['employer-stated', 'KFUPM news: Career Fair 2026 draws over 11,000 visitors (1 May 2026) and KFUPM launches Career Fair 2026 (28 April 2026)', 'https://news.kfupm.edu.sa/news/career-fair-2026-draws-over-11000-visitors/310/', '2026-10-08'],
    'sa-kau': ['employer-stated', 'King Abdulaziz University: invitation to attend the 13th Career Forum (6–8 April 2026)', 'https://www.kau.edu.sa/en/event/invitation-to-attend-the-13th-career-forum-at-king-abdulaziz-university', '2026-10-08'],
    'sa-kpmg': ['practitioner consensus', 'Consultancy-ME: KPMG welcomes 300 young Saudis in new Hamaat graduate program (17 September 2024)', 'https://www.consultancy-me.com/news/9252/kpmg-welcomes-300-young-saudis-in-new-hamaat-graduate-program', '2026-10-08'],
    'sa-pwc19': ['practitioner consensus', 'Consultancy-ME: PwC welcomes more than 300 graduate recruits across Middle East (27 September 2019)', 'https://www.consultancy-me.com/news/2361/pwc-welcomes-more-than-300-graduate-recruits-across-middle-east', '2026-10-08'],
    'sa-pwc-ass': ['employer-stated', 'PwC Middle East careers: Assurance, Graduate Programme 2026 (Riyadh), listed 8 July 2026, now filled', 'https://careers.pwc.com/job/Riyadh-Assurance%2C-Graduate-Programme-2026-Middle-East-Riya/1268226301', '2026-10-08'],
    'sa-pwc-con': ['employer-stated', 'PwC Middle East careers: Consulting, Graduate Programme 2026 (Riyadh), listed 17 November 2025, now filled', 'https://careers.pwc.com/job/Riyadh-Consulting%2C-Graduate-Programme-2026-Middle-East-Riya/1268225801', '2026-10-08'],
    'sa-riyad': ['employer-stated', 'Riyad Bank careers: 2026 Fursan Al Riyad programme (graduate development), posted 7 April 2026', 'https://careers.riyadbank.com/ar/saudi-arabia/jobs/2026-fursan-al-riyad-program-1100081721/', '2026-10-08'],
    'sa-kaust': ['employer-stated', 'KAUST admissions: Visiting Student Research Program (VSRP) internships', 'https://admissions.kaust.edu.sa/study/internships', '2026-10-08'],
    'sa-jadarat': ['practitioner consensus', 'Gulf News: Saudi Arabia launches Jadarat employment platform with over 70,000 job openings (August 2024)', 'https://gulfnews.com/world/gulf/saudi/saudi-arabia-launches-jadarat-employment-platform-with-over-70000-job-openings-1.103871823', '2026-10-08'],
    'sa-cv': ['practitioner consensus', 'Jobera: Saudi CV writing guide (17 April 2023)', 'https://jobera.com/resources/saudi-cv-writing-guide/', '2026-10-08']
  }
});

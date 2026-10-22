/* Visas and permits: United Kingdom. From research/visas_immigration/united_kingdom/
 * (guide, source register, open questions), council check of 5 Oct 2026 and the
 * review of 6 Oct 2026 (fees re-read on gov.uk). British citizens are at home. */
ATLAS.addVisas({
  id: 'GB',
  folder: 'united_kingdom',
  checked: '2026-10-06',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu us other', v: 'open',
      name: ['Student visa', 'Visto Student'], law: 'Appendix Student',
      t: [
        ['A licensed university issues the CAS; then apply online. EU citizens verify identity in the UK Immigration: ID Check app and need not upload bank statements, though they must hold the money.',
          'Un’università con licenza rilascia il CAS; poi si fa domanda online. I cittadini UE verificano l’identità nell’app UK Immigration: ID Check e non devono caricare gli estratti conto, ma devono avere i soldi.', 'UK-SRC-12 UK-SRC-26 UK-SRC-13'],
        ['Up to 20 hours a week in term and full time in official vacations; no self-employment, freelancing or gig work.',
          'Fino a 20 ore a settimana durante i corsi e a tempo pieno nelle vacanze ufficiali; niente lavoro autonomo, freelance o gig economy.', 'UK-SRC-12'],
        ['Since January 2024 taught master’s students cannot bring a partner or children; research degrees still can.',
          'Da gennaio 2024 chi fa un master taught non può portare partner o figli; i corsi di ricerca sì.', 'UK-SRC-12']
      ],
      f: [
        [['Funds, until 29 November 2026', 'Mezzi, fino al 29 novembre 2026'], ['£1,529 a month in London, £1,171 elsewhere, for up to 9 months', '1.529 £ al mese a Londra, 1.171 £ altrove, per un massimo di 9 mesi'], 'UK-SRC-13 UK-SRC-04'],
        [['Fees', 'Costi'], ['£558 + health surcharge £776 a year', '558 £ + supplemento sanitario 776 £ l’anno'], 'UK-SRC-07 UK-SRC-06']
      ] },

    { k: 'intern', p: 'eu us other', v: 'sponsor',
      name: ['Government Authorised Exchange', 'Government Authorised Exchange'], law: 'Appendix Temporary Work',
      t: [
        ['Internships are not allowed as a visitor. Outside a degree, you need a GAE visa through an approved umbrella sponsor such as the British Council or BUNAC: up to 12 months, a supernumerary role paid at least the minimum wage.',
          'I tirocini non sono ammessi come visitatore. Fuori da un corso di laurea serve un visto GAE tramite uno sponsor ombrello approvato come British Council o BUNAC: fino a 12 mesi, un ruolo in soprannumero pagato almeno il salario minimo.', 'UK-SRC-14 UK-SRC-16 UK-SRC-23'],
        ['On a Student visa, an assessed placement can take up to half the course.',
          'Con il visto Student, un tirocinio valutato può occupare fino a metà del corso.', 'UK-SRC-12']
      ],
      f: [[['Fees', 'Costi'], ['£340 + health surcharge £1,035 a year; funds £1,270', '340 £ + supplemento sanitario 1.035 £ l’anno; mezzi 1.270 £'], 'UK-SRC-07 UK-SRC-06 UK-SRC-13']] },

    { k: 'search', p: 'eu us other', v: 'open',
      name: ['Graduate visa', 'Visto Graduate'], law: 'Appendix Graduate',
      t: [['After a UK degree, apply from inside the UK before the Student visa ends: any work, no sponsor, once only. Two years if you apply by 31 December 2026, 18 months from 1 January 2027; three years after a PhD.',
        'Dopo una laurea nel Regno Unito si fa domanda dall’interno prima che scada il visto Student: qualsiasi lavoro, senza sponsor, una sola volta. Due anni se si fa domanda entro il 31 dicembre 2026, 18 mesi dal 1° gennaio 2027; tre anni dopo un dottorato.', 'UK-SRC-10 UK-SRC-02']],
      f: [[['Fees', 'Costi'], ['£937 + health surcharge £1,035 a year', '937 £ + supplemento sanitario 1.035 £ l’anno'], 'UK-SRC-07 UK-SRC-06']],
      w: ['Apply only after the university has told the Home Office you finished: an early application is refused and the fee is lost.',
        'Fare domanda solo dopo che l’università ha comunicato al Home Office la fine del corso: una domanda anticipata viene respinta e la tassa è persa.', 'UK-SRC-10 UK-SRC-07'] },

    { k: 'search', p: 'eu us other', v: 'open',
      name: ['High Potential Individual visa', 'Visto High Potential Individual'], law: 'Appendix HPI',
      t: [['For a degree from the last five years at a university on the Home Office’s Global Universities List (TUM, PSL, TU Delft, KU Leuven, ETH Zurich among them; specialist business schools are not): two years, any work, capped at 8,000 a year, English at B2.',
        'Per una laurea degli ultimi cinque anni in un’università della Global Universities List del Home Office (tra cui TUM, PSL, TU Delft, KU Leuven, ETH Zurigo; le business school specializzate no): due anni, qualsiasi lavoro, tetto di 8.000 l’anno, inglese B2.', 'UK-SRC-11 UK-SRC-02']],
      f: [[['Fees', 'Costi'], ['£880 + health surcharge £1,035 a year; funds £1,270', '880 £ + supplemento sanitario 1.035 £ l’anno; mezzi 1.270 £'], 'UK-SRC-07 UK-SRC-06 UK-SRC-13']] },

    { k: 'work', p: 'eu us other', v: 'sponsor',
      name: ['Skilled Worker visa', 'Visto Skilled Worker'], law: 'Appendix Skilled Worker',
      t: [
        ['A licensed sponsor assigns a Certificate of Sponsorship for a graduate-level job (RQF 6); English at B2 since 8 January 2026. There is no general visa for jobs below degree level.',
          'Uno sponsor con licenza assegna un Certificate of Sponsorship per un lavoro di livello laurea (RQF 6); inglese B2 dall’8 gennaio 2026. Non esiste un visto generale per lavori sotto il livello di laurea.', 'UK-SRC-23 UK-SRC-03 UK-SRC-02 UK-SRC-08'],
        ['The lower new-entrant rate applies to under-26s and to people switching from Student or Graduate, for four years in total including Graduate time.',
          'La soglia ridotta per i nuovi entrati vale per gli under 26 e per chi passa da Student o Graduate, per quattro anni in tutto compreso il periodo Graduate.', 'UK-SRC-08 UK-SRC-09']
      ],
      f: [
        [['Salary', 'Stipendio'], ['£41,700, or the occupation’s going rate if higher', '41.700 £, o la tariffa di mercato della professione se più alta'], 'UK-SRC-03 UK-SRC-09'],
        [['Salary, new entrants', 'Stipendio, nuovi entrati'], ['£33,400, or 70% of the going rate if higher', '33.400 £, o il 70% della tariffa di mercato se più alto'], 'UK-SRC-03 UK-SRC-09'],
        [['Fees, up to 3 years', 'Costi, fino a 3 anni'], ['£819 from abroad, £943 in the UK + health surcharge £1,035 a year', '819 £ dall’estero, 943 £ nel Regno Unito + supplemento sanitario 1.035 £ l’anno'], 'UK-SRC-07 UK-SRC-06']
      ],
      w: ['Settlement comes after five years on this visa; time on Student or Graduate visas does not count.',
        'La residenza permanente arriva dopo cinque anni con questo visto; il periodo con Student o Graduate non conta.', 'UK-SRC-08'] },

    { k: 'research', p: 'eu us other', v: 'sponsor',
      name: ['PhD, Global Talent and research routes', 'Dottorato, Global Talent e percorsi di ricerca'], law: 'Appendix Student; Appendix Global Talent',
      t: [
        ['A PhD is a Student visa that keeps the right to bring family; STEM candidates outside the EU, US, Canada, Australia and Japan need ATAS clearance.',
          'Un dottorato è un visto Student che conserva il diritto di portare la famiglia; i candidati STEM fuori da UE, USA, Canada, Australia e Giappone hanno bisogno del nulla osta ATAS.', 'UK-SRC-12 UK-SRC-19'],
        ['Researchers come on Global Talent after endorsement by UKRI, the Royal Society or the British Academy, which leads to settlement in three years, or on Skilled Worker.',
          'I ricercatori arrivano con Global Talent dopo l’endorsement di UKRI, Royal Society o British Academy, che porta alla residenza permanente in tre anni, oppure con Skilled Worker.', 'UK-SRC-07 UK-SRC-08 UK-SRC-05']
      ],
      f: [[['Fees, Global Talent', 'Costi, Global Talent'], ['£755 + health surcharge £1,035 a year', '755 £ + supplemento sanitario 1.035 £ l’anno'], 'UK-SRC-07 UK-SRC-06']] },

    { k: 'whv', p: 'eu us', v: 'closed',
      name: ['Youth Mobility Scheme', 'Youth Mobility Scheme'], law: 'Appendix Youth Mobility Scheme',
      t: [['There is no youth-mobility deal with the EU or the US. An EU–UK scheme is under negotiation but not agreed.',
        'Non esiste un accordo di mobilità giovanile con l’UE né con gli Stati Uniti. Uno schema UE–Regno Unito è in negoziazione ma non concluso.', 'UK-SRC-15 UK-SRC-28']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Youth Mobility Scheme', 'Youth Mobility Scheme'], law: 'Appendix Youth Mobility Scheme',
      t: [['For citizens of Australia, Canada, New Zealand and South Korea aged 18 to 35, and of Andorra, Iceland, Japan, Monaco, San Marino and Uruguay aged 18 to 30; Taiwan, Hong Kong and India by ballot. Two years of any work, three for Australians, Canadians and New Zealanders.',
        'Per cittadini di Australia, Canada, Nuova Zelanda e Corea del Sud dai 18 ai 35 anni, e di Andorra, Islanda, Giappone, Monaco, San Marino e Uruguay dai 18 ai 30; Taiwan, Hong Kong e India a sorteggio. Due anni di qualsiasi lavoro, tre per australiani, canadesi e neozelandesi.', 'UK-SRC-15']],
      f: [[['Fees', 'Costi'], ['£340 + health surcharge £776 a year; funds £2,530', '340 £ + supplemento sanitario 776 £ l’anno; mezzi 2.530 £'], 'UK-SRC-07 UK-SRC-06 UK-SRC-13']] },

    { k: 'short', p: 'eu us other', v: 'open',
      name: ['Visitor', 'Visitatore'], law: 'Appendix Visitor',
      t: [
        ['EU and US citizens need an Electronic Travel Authorisation, valid two years; visa nationals need a Standard Visitor visa. Up to six months for tourism, meetings, interviews, short courses or thesis research, with no work.',
          'I cittadini UE e statunitensi hanno bisogno di un’Electronic Travel Authorisation, valida due anni; chi è soggetto a visto ha bisogno di un visto Standard Visitor. Fino a sei mesi per turismo, riunioni, colloqui, corsi brevi o ricerca per la tesi, senza lavorare.', 'UK-SRC-17 UK-SRC-16'],
        ['Irish citizens need nothing: under the Common Travel Area they live and work in the UK freely.',
          'I cittadini irlandesi non hanno bisogno di nulla: grazie alla Common Travel Area vivono e lavorano liberamente nel Regno Unito.', 'UK-SRC-01']
      ],
      f: [[['Fees', 'Costi'], ['ETA £20; visitor visa £135', 'ETA 20 £; visto visitatore 135 £'], 'UK-SRC-17 UK-SRC-07']],
      w: ['A visitor cannot switch to a student or work visa inside the UK: you must apply from abroad.',
        'Un visitatore non può passare a un visto per studio o lavoro dall’interno del Regno Unito: bisogna fare domanda dall’estero.', 'UK-SRC-08 UK-SRC-16'] }
  ],

  arrival: [
    { k: 'before', p: 'eu us other', t: [
      ['Pay the Immigration Health Surcharge with your visa application: £1,035 a year, or £776 for students. It gives you NHS cover for the whole visa.',
        'Paga il contributo sanitario per l’immigrazione (Immigration Health Surcharge) con la domanda di visto: 1.035 £ l’anno, o 776 £ per gli studenti. Ti dà la copertura NHS per tutta la durata del visto.', 'UK-SRC-06 UK-SRC-22'],
      ['Never pay for a Certificate of Sponsorship or a “guaranteed visa”: the employer assigns and pays for the certificate, and job offers that ask you for visa fees up front are a known fraud.',
        'Non pagare mai per un Certificate of Sponsorship o un “visto garantito”: è il datore ad assegnare e pagare il certificato, e le offerte di lavoro che chiedono in anticipo le tasse del visto sono una frode nota.', 'UK-SRC-23 UK-SRC-31']
    ] },
    { k: 'address', p: 'eu us other', t: [
      ['Landlords must check your right to rent: give them a share code from gov.uk/prove-right-to-rent.',
        'I proprietari devono verificare il tuo diritto di affittare: forniscigli un codice di condivisione da gov.uk/prove-right-to-rent.', 'UK-SRC-26']
    ] },
    { k: 'card', p: 'eu us other', t: [
      ['There is no physical card: residence permit cards (BRPs) have ended, and your status is an eVisa in your UKVI account, linked to your passport.',
        'Non c’è una tessera fisica: i permessi di soggiorno biometrici (BRP) sono stati aboliti, e il tuo status è un eVisa nel tuo account UKVI, collegato al passaporto.', 'UK-SRC-26']
    ] },
    { k: 'number', p: 'eu us other', t: [
      ['Apply online for a National Insurance number after you arrive. You may start work before it comes, by giving your employer a right-to-work share code; payroll uses an emergency tax code meanwhile.',
        'Chiedi online il National Insurance number dopo l’arrivo. Puoi iniziare a lavorare prima che arrivi, fornendo al datore un codice di condivisione del diritto al lavoro; nel frattempo la busta paga usa un codice fiscale d’emergenza.', 'UK-SRC-25']
    ] },
    { k: 'health', p: 'eu us other', t: [
      ['The surcharge gives NHS cover but no family doctor: find a surgery at nhs.uk, register with form GMS1 and get your NHS number, needed for appointments and prescriptions.',
        'Il contributo dà la copertura NHS ma non un medico di famiglia: trova un ambulatorio su nhs.uk, registrati con il modulo GMS1 e ottieni il numero NHS, che serve per visite e prescrizioni.', 'UK-SRC-22 UK-SRC-27']
    ] },
    { k: 'bank', p: 'eu us other', t: [
      ['Your eVisa is your digital proof of status: generate share codes, valid 90 days, at gov.uk/prove-right-to-work for employers, and keep your passport number up to date in your UKVI account before any trip, or you may be stopped at boarding.',
        'L’eVisa è la tua prova digitale dello status: genera codici di condivisione, validi 90 giorni, su gov.uk/prove-right-to-work per i datori, e tieni aggiornato il numero di passaporto nel tuo account UKVI prima di ogni viaggio, o potresti essere fermato all’imbarco.', 'UK-SRC-26']
    ] },
    { k: 'keep', p: 'eu us other', t: [
      ['Apply to extend or switch before your visa expires: your leave and its rights then continue by law until the decision (section 3C).',
        'Chiedi la proroga o il cambio prima che il visto scada: il soggiorno e i suoi diritti continuano per legge fino alla decisione (sezione 3C).', 'UK-SRC-01'],
      ['Do not leave the UK and Ireland while an application is pending: it is treated as withdrawn the day you leave, the fee is lost, and routes you can only apply for from inside, like the Graduate visa, are gone.',
        'Non lasciare il Regno Unito e l’Irlanda mentre una domanda è pendente: si considera ritirata il giorno della partenza, la tassa è persa, e i percorsi richiedibili solo dall’interno, come il Graduate visa, svaniscono.', 'UK-SRC-20 UK-SRC-10'],
      ['The Home Office never calls, texts or emails to ask for money or passport details; check your status only in your UKVI account.',
        'Il Home Office non chiama, non manda SMS né email per chiedere denaro o dati del passaporto; verifica il tuo status solo nell’account UKVI.', 'UK-SRC-31']
    ] }
  ],

  traps: [
    { p: 'eu us other', t: ['Leave the UK and Common Travel Area while an extension or switch is pending and the application counts as withdrawn; if your old visa has expired you cannot come back.',
      'Se si lascia il Regno Unito e la Common Travel Area mentre una proroga o un cambio è in corso, la domanda si considera ritirata; se il vecchio visto è scaduto non si può rientrare.', 'UK-SRC-20 UK-SRC-01'] },
    { p: 'eu us other', t: ['Working as a visitor or on an ETA is a criminal offence, with removal and a re-entry ban.',
      'Lavorare come visitatore o con l’ETA è un reato, con allontanamento e divieto di rientro.', 'UK-SRC-01'] },
    { p: 'eu us other', t: ['Nobody can sell you a Certificate of Sponsorship: the employer pays for it. The Home Office never asks for money or passport details by phone or email.',
      'Nessuno può venderti un Certificate of Sponsorship: lo paga il datore. Il Home Office non chiede mai soldi o dati del passaporto per telefono o email.', 'UK-SRC-31 UK-SRC-23'] },
    { p: 'eu us other', t: ['There are no plastic residence cards any more: status is an eVisa, shown to employers and landlords with a share code.',
      'Non esistono più carte di soggiorno in plastica: lo status è un eVisa, mostrato a datori e proprietari con uno share code.', 'UK-SRC-26'] }
  ],

  open: [
    { st: 'pending', t: ['Student funds rise to £1,570 a month in London and £1,203 elsewhere for applications from 30 November 2026.',
      'I mezzi per studenti salgono a 1.570 £ al mese a Londra e 1.203 £ altrove per le domande dal 30 novembre 2026.'] },
    { st: 'pending', t: ['An EU–UK youth experience scheme for 18 to 30 year olds is being negotiated, with no date.',
      'Uno schema di esperienza giovanile UE–Regno Unito per chi ha dai 18 ai 30 anni è in negoziazione, senza data.'] },
    { st: 'watch', t: ['The government consulted on “earned settlement”, raising the usual wait for settlement to ten years.',
      'Il governo ha consultato sull’“earned settlement”, che porterebbe a dieci anni l’attesa ordinaria per la residenza permanente.'] },
    { st: 'watch', t: ['A new Global Universities List for the HPI visa is due in November 2026.',
      'Una nuova Global Universities List per il visto HPI è attesa a novembre 2026.'] },
    { st: 'pending', t: ['A £925 yearly levy per international student on English universities from 2028 may feed into tuition fees.',
      'Un prelievo annuo di 925 £ per ogni studente internazionale a carico delle università inglesi dal 2028 potrebbe riflettersi sulle rette.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/united_kingdom/united_kingdom_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('GB', {
  "UK-SRC-12": ["Home Office: Immigration Rules Appendix Student (ST 1.1–ST 38.2) — Work hours, placement & dependants ban","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student","2026-10-05"],
  "UK-SRC-26": ["Home Office: View and prove your immigration status (eVisa) & Share Code system","https://www.gov.uk/view-prove-immigration-status","2026-10-05"],
  "UK-SRC-13": ["Home Office: Immigration Rules Appendix Finance (FIN 1.1–FIN 9.2) — 28-day rule & thresholds","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance","2026-10-05"],
  "UK-SRC-04": ["Home Office / Legislation.gov.uk: Statement of Changes in Immigration Rules HC 584 (3 Settembre 2026) — Student Maintenance Update (Decorrenza 30/11/2026)","https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584","2026-10-05"],
  "UK-SRC-07": ["Home Office immigration and nationality fees (Revisione 8 Aprile 2026)","https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-april-2026","2026-10-05"],
  "UK-SRC-06": ["UK Parliament / Legislation.gov.uk: The Immigration (Health Charge) (Amendment) Order 2024 (S.I. 2024/55) — IHS £1.035 / £776","https://www.legislation.gov.uk/uksi/2024/55/made","2026-10-05"],
  "UK-SRC-14": ["Home Office: Immigration Rules Appendix Temporary Work: Government Authorised Exchange","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-temporary-work-government-authorised-exchange","2026-10-05"],
  "UK-SRC-16": ["Home Office: Immigration Rules Appendix V: Visitor (V 1.1–V 17.3) — Research, short study & permitted activities","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-v-visitor","2026-10-05"],
  "UK-SRC-23": ["Home Office: Workers and Temporary Workers: guidance for sponsors (Part 2: Sponsor a worker & CoS fees)","https://www.gov.uk/government/publications/workers-and-temporary-workers-guidance-for-sponsors-part-2-sponsor-a-worker","2026-10-05"],
  "UK-SRC-10": ["Home Office: Immigration Rules Appendix Graduate (GR 1.1–GR 8.1)","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate","2026-10-05"],
  "UK-SRC-02": ["Home Office / Legislation.gov.uk: Statement of Changes in Immigration Rules HC 1333 (14 Ottobre 2025) — Graduate Route 18m, HPI cap 8.000, English B2","https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025","2026-10-05"],
  "UK-SRC-11": ["Home Office: Immigration Rules Appendix High Potential Individual & Global Universities List 2025","https://www.gov.uk/government/publications/high-potential-individual-visa-global-universities-list/high-potential-individual-visa-global-universities-list-2025","2026-10-05"],
  "UK-SRC-03": ["Home Office / Legislation.gov.uk: Statement of Changes in Immigration Rules HC 997 (1 Luglio 2025, in vigore 22 Luglio 2025)","https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-997-1-july-2025","2026-10-05"],
  "UK-SRC-08": ["Home Office: Immigration Rules Appendix Skilled Worker (SW 1.1–SW 25.1)","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-worker","2026-10-05"],
  "UK-SRC-09": ["Home Office: Immigration Rules Appendix Skilled Occupations (Table 1: Eligible occupations RQF 6+)","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-occupations","2026-10-05"],
  "UK-SRC-19": ["Home Office: Immigration Rules Appendix ATAS: Academic Technology Approval Scheme","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-academic-technology-approval-scheme-atas","2026-10-05"],
  "UK-SRC-05": ["UK Parliament / Legislation.gov.uk: The Immigration Skills Charge (Amendment) Regulations 2025 (S.I. 2025/1324) — ISC +32% (£1.320 / £480)","https://www.legislation.gov.uk/uksi/2025/1324/made","2026-10-05"],
  "UK-SRC-15": ["Home Office: Immigration Rules Appendix Youth Mobility Scheme (YMS 1.1–YMS 6.1)","https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-youth-mobility-scheme","2026-10-05"],
  "UK-SRC-28": ["European Parliament (EPRS): EU-UK relations: Mobility and youth opportunities (Briefing PE 782.680, March 2026)","https://www.europarl.europa.eu/RegData/etudes/ATAG/2026/782680/EPRS_ATA(2026","2026-10-05"],
  "UK-SRC-17": ["Home Office: Immigration Rules Appendix Electronic Travel Authorisation (ETA) & Apply for an ETA","https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta","2026-10-05"],
  "UK-SRC-01": ["UK Parliament / Legislation.gov.uk: Immigration Act 1971 (c. 77) — Section 1(3), Section 3C, Section 9, Section 24","https://www.legislation.gov.uk/ukpga/1971/77/contents","2026-10-05"],
  "UK-SRC-22": ["Home Office: Pay for UK healthcare as part of your immigration application (IHS calculator & rates)","https://www.gov.uk/healthcare-immigration-application/how-much-pay","2026-10-05"],
  "UK-SRC-31": ["Home Office / GOV.UK: Fraud, tricks and scams (guidance on immigration fraud: false job offers, impersonation of Home Office officials,…","https://www.gov.uk/government/publications/frauds-tricks-and-scams/fraud-tricks-and-scams","2026-10-06"],
  "UK-SRC-25": ["DWP / HMRC / GOV.UK: Apply for a National Insurance number & Prove your right to work to an employer","https://www.gov.uk/apply-national-insurance-number","2026-10-05"],
  "UK-SRC-27": ["NHS England: How to register with a GP surgery & NHS numbers for overseas visitors","https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/","2026-10-05"],
  "UK-SRC-20": ["Home Office: Immigration Rules Part 1: General Provisions — Paragraph 34K (Withdrawal upon leaving CTA)","https://www.gov.uk/guidance/immigration-rules/immigration-rules-part-1-leave-to-enter-or-stay-in-the-uk","2026-10-05"]
});

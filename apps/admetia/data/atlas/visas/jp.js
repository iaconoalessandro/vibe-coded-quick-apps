/* Visas and permits: Japan. From research/visas_immigration/japan/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only; the research takes an Italian citizen as reference. */
ATLAS.addVisas({
  id: 'JP',
  folder: 'japan',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student status (Ryūgaku)', 'Status di studente (Ryūgaku)'], law: 'ICRRA, Table I (4)',
      t: [
        ['The school applies for your Certificate of Eligibility; then the consulate issues the visa (free for Italians). Land at one of the seven main airports to get the residence card on arrival.',
          'La scuola chiede il tuo Certificate of Eligibility; poi il consolato rilascia il visto (gratuito per gli italiani). Atterra in uno dei sette aeroporti principali per ricevere la carta di residenza all’arrivo.', 'JP-SRC-14 JP-SRC-11 JP-SRC-01 JP-SRC-24'],
        ['Hand in the form for permission to work at the airport: 28 hours a week in term, 40 in vacations, never in nightlife or adult entertainment. Students can defer the national pension.',
          'Consegna il modulo per il permesso di lavoro in aeroporto: 28 ore a settimana durante i corsi, 40 nelle vacanze, mai in locali notturni o d’intrattenimento per adulti. Gli studenti possono differire la pensione nazionale.', 'JP-SRC-07 JP-SRC-16']
      ],
      f: [[['Funds', 'Mezzi'], ['2,000,000 to 2,500,000 JPY for a year', 'da 2.000.000 a 2.500.000 JPY per un anno'], 'JP-SRC-14 JP-SRC-25']] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Internships', 'Tirocini'], law: 'ICRRA; Designated Activities 9 and 12',
      t: [['Unpaid internships up to 90 days fit a visa-free stay, with only documented expenses reimbursed; longer unpaid ones need Cultural Activities status. A paid internship for credit, under an agreement between your university and the company, uses Designated Activities, up to a year.',
        'I tirocini non retribuiti fino a 90 giorni rientrano nel soggiorno senza visto, con solo il rimborso delle spese documentate; quelli più lunghi richiedono lo status Cultural Activities. Un tirocinio retribuito con crediti, con un accordo tra la tua università e l’azienda, usa i Designated Activities, fino a un anno.', 'JP-SRC-02 JP-SRC-01']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Job search after a Japanese degree, and J-Find', 'Ricerca di lavoro dopo una laurea giapponese, e J-Find'], law: 'Designated Activities',
      t: [
        ['Graduates of Japanese universities can stay six months, renewable once, to look for work, with the university’s recommendation, and work 28 hours a week.',
          'I laureati di università giapponesi possono restare sei mesi, rinnovabili una volta, per cercare lavoro, con la raccomandazione dell’università, e lavorare 28 ore a settimana.', 'JP-SRC-09 JP-SRC-07'],
        ['J-Find gives up to two years, with work allowed, to graduates of the last five years from universities in the top 100 of two of the QS, THE and ARWU rankings; no Italian university qualifies.',
          'J-Find dà fino a due anni, con lavoro consentito, ai laureati degli ultimi cinque anni di università tra le prime 100 di due delle classifiche QS, THE e ARWU; nessuna università italiana rientra.', 'JP-SRC-06']
      ],
      f: [[['J-Find funds', 'Mezzi J-Find'], ['200,000 JPY', '200.000 JPY'], 'JP-SRC-06']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Engineer, Humanities and International Services', 'Engineer, Humanities and International Services'], law: 'ICRRA, Table I (2)',
      t: [
        ['The usual status for graduate jobs: a degree related to the role (or 10 years of experience), pay at least equal to a Japanese colleague, for 3 months to 5 years. The employer applies for the Certificate of Eligibility, valid three months.',
          'Lo status abituale per i lavori da laureati: una laurea attinente al ruolo (o 10 anni di esperienza), una paga almeno pari a quella di un collega giapponese, da 3 mesi a 5 anni. Il datore chiede il Certificate of Eligibility, valido tre mesi.', 'JP-SRC-03 JP-SRC-01'],
        ['The points-based Highly Skilled Professional status (70 points) gives five years at once and permanent residence after three years, or one with 80 points.',
          'Lo status a punti Highly Skilled Professional (70 punti) dà subito cinque anni e la residenza permanente dopo tre anni, o uno con 80 punti.', 'JP-SRC-04']
      ],
      f: [[['Renewal in Japan, from 1 October 2026', 'Rinnovo in Giappone, dal 1° ottobre 2026'], ['33,000 JPY, 27,000 online', '33.000 JPY, 27.000 online'], 'JP-SRC-12']],
      w: ['Report a change of employer to immigration within 14 days.',
        'Comunica un cambio di datore all’immigrazione entro 14 giorni.', 'JP-SRC-01'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Researchers and PhDs', 'Ricercatori e dottorati'], law: 'ICRRA',
      t: [
        ['Unpaid thesis visits use Student, Cultural Activities or a visa-free stay; paid researchers hold Researcher or Professor status.',
          'Le visite di tesi non retribuite usano lo status Student, Cultural Activities o un soggiorno senza visto; i ricercatori retribuiti hanno lo status Researcher o Professor.', 'JP-SRC-01 JP-SRC-02'],
        ['MEXT scholarships cover tuition and flights with a tax-free monthly stipend; JSPS post-doctoral fellowships pay about 362,000 JPY a month.',
          'Le borse MEXT coprono tasse e voli con un assegno mensile esentasse; le fellowship post-dottorali JSPS pagano circa 362.000 JPY al mese.', 'JP-SRC-21']
      ],
      f: [[['MEXT stipend', 'Assegno MEXT'], ['144,000 JPY a month (master’s), up to 147,000 (PhD)', '144.000 JPY al mese (master), fino a 147.000 (dottorato)'], 'JP-SRC-21']] },

    { k: 'whv', p: 'eu', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [
        ['Terms depend on your country. The Italy–Japan agreement has run since 1 April 2026: Italians resident in Italy aged 18 to 30, 500 visas a year, 12 months, once, free.',
          'Le condizioni dipendono dal paese. L’accordo Italia–Giappone è in vigore dal 1° aprile 2026: italiani residenti in Italia dai 18 ai 30 anni, 500 visti l’anno, 12 mesi, una volta, gratuito.', 'JP-SRC-10 JP-SRC-11'],
        ['Work must be secondary to the holiday, and never in nightlife; motivation letters about building a career get refused.',
          'Il lavoro deve essere secondario rispetto alla vacanza, e mai nei locali notturni; le lettere motivazionali sulla carriera vengono respinte.', 'JP-SRC-10 JP-SRC-07 JP-SRC-24']
      ],
      f: [[['Funds', 'Mezzi'], ['€1,800 with a return ticket, €3,800 without', '1.800 € con biglietto di ritorno, 3.800 € senza'], 'JP-SRC-10']] },

    { k: 'whv', p: 'uk', v: 'limited',
      name: ['Youth mobility', 'Mobilità giovanile'], law: 'bilateral agreement',
      t: [['The UK has its own youth scheme with Japan; the research covers the Italian agreement only, so check the British terms with the Japanese foreign ministry.',
        'Il Regno Unito ha un proprio programma giovanile con il Giappone; la ricerca copre solo l’accordo italiano, quindi verifica le condizioni britanniche con il ministero degli Esteri giapponese.', 'JP-SRC-10']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'ICRRA',
      t: [['Up to 90 days with no paid work. Only citizens of Austria, Germany, Ireland, the UK and a few other countries can extend by another 90 days; Italians and most EU citizens cannot.',
        'Fino a 90 giorni senza lavoro retribuito. Solo i cittadini di Austria, Germania, Irlanda, Regno Unito e pochi altri paesi possono prorogare di altri 90 giorni; italiani e la maggior parte dei cittadini UE no.', 'JP-SRC-02 JP-SRC-01']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Your sponsor (employer or school) applies for the Certificate of Eligibility (COE) at the regional immigration office; it is issued electronically, usually in 1 to 3 months, and is valid exactly 3 months: if you do not land in time it lapses.',
        'Lo sponsor (datore o scuola) chiede il Certificate of Eligibility (COE) all’ufficio regionale dell’immigrazione; viene rilasciato in formato elettronico, di solito in 1-3 mesi, e vale esattamente 3 mesi: se non atterri in tempo decade.', 'JP-SRC-01 JP-SRC-03'],
      ['Book a registered share house, school dormitory or company housing from home: hostels, hotels and Airbnb listings are refused for residence registration.',
        'Prenota da casa una share house registrata, un dormitorio scolastico o un alloggio aziendale: ostelli, alberghi e annunci Airbnb vengono rifiutati per la registrazione della residenza.', 'JP-SRC-24']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Within 14 days of moving into your home, register your residence at the ward or city office (kuyakusho, shiyakusho): the clerk prints the address on the back of your residence card.',
        'Entro 14 giorni dall’ingresso nell’alloggio, registra la residenza all’ufficio di quartiere o comunale (kuyakusho, shiyakusho): l’impiegato stampa l’indirizzo sul retro della carta di soggiorno.', 'JP-SRC-01']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['The residence card (zairyū card) is printed on landing only at Narita, Haneda, Kansai, Chubu, New Chitose, Hiroshima and Fukuoka; at other airports you get a passport stamp and the card comes by post after you register.',
        'La carta di soggiorno (zairyū card) viene stampata all’arrivo solo a Narita, Haneda, Kansai, Chubu, New Chitose, Hiroshima e Fukuoka; negli altri aeroporti ricevi un timbro sul passaporto e la carta arriva per posta dopo la registrazione.', 'JP-SRC-01 JP-SRC-24'],
      ['Students should hand in the permission form for part-time work at the immigration desk on arrival: applying later means 2 to 6 weeks without the right to work.',
        'Gli studenti dovrebbero consegnare al varco dell’immigrazione, all’arrivo, il modulo per il permesso di lavoro part-time: chiederlo dopo significa da 2 a 6 settimane senza diritto di lavorare.', 'JP-SRC-07 JP-SRC-24']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Registering your residence also issues your My Number, the personal number used for tax and social security.',
        'La registrazione della residenza rilascia anche il My Number, il numero personale usato per fisco e previdenza.', 'JP-SRC-01']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Employees are enrolled by their company in employee health insurance and the employees’ pension, with contributions split 50:50 and withheld at source; others join the municipal National Health Insurance.',
        'I dipendenti sono iscritti dall’azienda all’assicurazione sanitaria dei lavoratori e alla pensione dei dipendenti, con contributi divisi 50:50 e trattenuti alla fonte; gli altri aderiscono all’Assicurazione sanitaria nazionale del comune.', 'JP-SRC-15 JP-SRC-16']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['A card without the address on the back is not accepted for bank or phone contracts. First get a Japanese voice SIM from a provider for foreign residents that takes foreign credit cards (Mobal, Sakura Mobile, GTN Mobile).',
        'Una carta senza indirizzo sul retro non è accettata per contratti bancari o telefonici. Prendi prima una SIM voce giapponese da un operatore per residenti stranieri che accetta carte di credito estere (Mobal, Sakura Mobile, GTN Mobile).', 'JP-SRC-24'],
      ['Then open an account at Japan Post Bank (Yūcho), the one bank that opens ordinary accounts in your first 6 months; after 6 months, have it switched from non-resident to resident.',
        'Poi apri un conto presso Japan Post Bank (Yūcho), l’unica banca che apre conti ordinari nei primi 6 mesi; dopo 6 mesi, fallo convertire da non residente a residente.', 'JP-SRC-23']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['For trips abroad under a year, tick the special re-entry permit box on the embarkation card at the airport; it is free, but if you forget it, your status ends when you leave.',
        'Per viaggi all’estero sotto un anno, spunta in aeroporto la casella del permesso di rientro speciale sul tagliando d’imbarco; è gratuito, ma se te ne dimentichi lo status decade all’uscita.', 'JP-SRC-13']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Register your address at the town hall within 14 days; hostels, hotels and Airbnb are not accepted, so book a registered share house or dormitory.',
      'Registra l’indirizzo in comune entro 14 giorni; ostelli, alberghi e Airbnb non sono accettati, quindi prenota una share house registrata o un dormitorio.', 'JP-SRC-01 JP-SRC-24'] },
    { p: 'eu uk', t: ['When leaving for under a year, tick “special re-entry permit” on the embarkation card, or your status ends at departure.',
      'Quando parti per meno di un anno, spunta “special re-entry permit” sul cartoncino d’imbarco, o lo status decade alla partenza.', 'JP-SRC-13'] },
    { p: 'eu uk', t: ['Most banks refuse accounts in your first six months; Japan Post Bank is the exception.',
      'La maggior parte delle banche rifiuta i conti nei primi sei mesi; Japan Post Bank è l’eccezione.', 'JP-SRC-23'] },
    { p: 'eu uk', t: ['The Certificate of Eligibility lapses if you do not land within three months.',
      'Il Certificate of Eligibility decade se non atterri entro tre mesi.', 'JP-SRC-01'] }
  ],

  open: [
    { st: 'open', t: ['Whether working holidaymakers can switch to a work status inside Japan is left to immigration’s discretion.',
      'Se chi è in vacanza-lavoro possa passare a uno status lavorativo in Giappone è lasciato alla discrezione dell’immigrazione.'] },
    { st: 'pending', t: ['From 2027 a new training system replaces the technical intern programme, and permanent residence can be revoked for unpaid tax or pension.',
      'Dal 2027 un nuovo sistema di formazione sostituisce il programma per tirocinanti tecnici, e la residenza permanente può essere revocata per tasse o pensione non pagate.'] },
    { st: 'watch', t: ['The digital nomad visa gives no residence card, so holders cannot register an address.',
      'Il visto per nomadi digitali non dà la carta di residenza, quindi i titolari non possono registrare un indirizzo.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/japan/japan_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('JP', {
  "JP-SRC-14": ["JASSO / MEXT (文部科学省): Student Visa Requirements & Financial Proof Guidelines for Higher Education","https://www.studyinjapan.go.jp/en/planning/educational-system/","2026-10-05"],
  "JP-SRC-11": ["Tariffario Consolare Ufficiale e Accordo di Reciprocità sui Diritti Consolari","https://www.it.emb-japan.go.jp","2026-10-05"],
  "JP-SRC-01": ["Ministry of Justice / ISA (出入国在留管理庁): Immigration Control and Refugee Recognition Act (出入国管理及び難民認定法 - ICRRA), Cabinet Order No. 319/1951","https://elaws.e-gov.go.jp/document?lawid=326CO0000000319","2026-10-05"],
  "JP-SRC-24": ["Istruzioni Operative per la Richiesta Visti, Foto e Modalità di Presentazione","https://www.it.emb-japan.go.jp/itpr_it/visti.html","2026-10-05"],
  "JP-SRC-07": ["Immigration Services Agency of Japan (ISA): Permission to Engage in Activity other than that Permitted (資格外活動許可 - Shikakugai Katsudo Kyoka)","https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri01_00109.html","2026-10-05"],
  "JP-SRC-16": ["Japan Pension Service (日本年金機構 - Nenkin): Statutory National Pension Contribution Rates (国民年金保険料) FY 2026","https://www.nenkin.go.jp","2026-10-05"],
  "JP-SRC-25": ["Bank of Japan (BOJ) & European Central Bank (ECB): Tassi Ufficiali di Cambio di Riferimento Interbancario (05/10/2026)","https://www.boj.or.jp","2026-10-05"],
  "JP-SRC-02": ["Ministry of Foreign Affairs of Japan (MOFA / 外務省): Exemption of Visa (Short-Term Stay) - 71 Countries and Regions","https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html","2026-10-05"],
  "JP-SRC-09": ["Immigration Services Agency of Japan (ISA): Designated Activities: Continuation of Job-Hunting for Foreign Graduates (継続就職活動)","https://www.moj.go.jp/isa/applications/status/designatedactivities14.html","2026-10-05"],
  "JP-SRC-06": ["Immigration Services Agency of Japan (ISA): Future Creation Individual Visa (J-Find / 未来創造個別人材制度)","https://www.moj.go.jp/isa/content/001401538.pdf","2026-10-05"],
  "JP-SRC-03": ["Immigration Services Agency of Japan (ISA): Status of Residence: Engineer/Specialist in Humanities/International Services (技術・人文知識・国際業務 - Gijinkoku)","https://www.moj.go.jp/isa/applications/status/gijinkoku.html","2026-10-05"],
  "JP-SRC-04": ["Immigration Services Agency of Japan (ISA): Point-Based Preferential Immigration Treatment for Highly Skilled Foreign Professionals (高度専門職 - HSP I & II)","https://www.moj.go.jp/isa/policies/hlp/index.html","2026-10-05"],
  "JP-SRC-12": ["Ministry of Justice / ISA: Decreto sulle Tariffe per le Procedure di Immigrazione in Giappone (In vigore dal 01/10/2026)","https://www.isa.go.jp/en/applications/procedures/","2026-10-05"],
  "JP-SRC-21": ["MEXT / JASSO (Study in Japan): Borse di Studio Governative Monbukagakusho (MEXT Scholarship) e JASSO Exchange Support","https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/","2026-10-05"],
  "JP-SRC-10": ["Accordo Bilaterale Working Holiday Italia - Giappone (Legge 17 settembre 2025, n. 136, G.U. n. 224 del 26/09/2025)","https://www.mofa.go.jp/j_info/visit/w_holiday/index.html","2026-10-05"],
  "JP-SRC-15": ["Ministry of Health, Labour and Welfare (MHLW / 厚生労働省): National Health Insurance Act (国民健康保険法) & Sistema di Riduzione 70%","https://www.mhlw.go.jp","2026-10-05"],
  "JP-SRC-23": ["Ministry of Finance (MOF) / Bank of Japan: Foreign Exchange and Foreign Trade Act (FEFTA / 外為法) - Classificazione di Non-Residente Bancario","https://www.mof.go.jp","2026-10-05"],
  "JP-SRC-13": ["Immigration Services Agency of Japan (ISA): Special Re-entry Permit (みなし再入国許可 - Minashi Sainyukoku Kyoka) e Re-entry Permit Ordinario","https://www.isa.go.jp/en/applications/procedures/minashisainyuukoku_00001.html","2026-10-05"]
});

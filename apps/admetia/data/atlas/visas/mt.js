/* Visas and permits: Malta. From research/visas_immigration/malta/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'MT',
  folder: 'malta',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens may work from day one: the employer files the Jobsplus engagement form by the first day, which also gives you social-security and tax numbers.',
        'I cittadini UE, SEE e svizzeri possono lavorare dal primo giorno: il datore invia il modulo di assunzione Jobsplus entro il primo giorno, che genera anche i numeri di previdenza e fiscale.', 'MT-SRC-06 MT-SRC-16 MT-SRC-09'],
      ['Within 90 days, register online with Identità and collect a free eResidence card, valid five years; you need a lease registered with the Housing Authority.',
        'Entro 90 giorni ci si registra online presso Identità e si ritira una eResidence card gratuita, valida cinque anni; serve un contratto d’affitto registrato presso la Housing Authority.', 'MT-SRC-25 MT-SRC-18 MT-SRC-06']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student residence permit', 'Permesso di soggiorno per studenti'], law: 'S.L. 217.22',
      t: [
        ['Since March 2024 every non-EU student on a course over 90 days, UK and US citizens included, needs a national D visa before travelling; then apply for the permit within 30 days of arriving.',
          'Da marzo 2024 ogni studente extra-UE con un corso oltre i 90 giorni, cittadini britannici e statunitensi compresi, ha bisogno del visto nazionale D prima di partire; poi si chiede il permesso entro 30 giorni dall’arrivo.', 'MT-SRC-14 MT-SRC-19'],
        ['No work in the first 90 days; from day 91, up to 20 hours a week on degree courses, with a Jobsplus licence the employer pays for and that is tied to that employer.',
          'Niente lavoro nei primi 90 giorni; dal 91° giorno, fino a 20 ore a settimana nei corsi universitari, con una licenza Jobsplus pagata dal datore e legata a quel datore.', 'MT-SRC-04 MT-SRC-16'],
        ['A non-EU student with a permit from another EU country in an EU programme can study here up to 360 days on notification, with no Maltese visa.',
          'Uno studente extra-UE con permesso di un altro paese UE in un programma europeo può studiare qui fino a 360 giorni con una notifica, senza visto maltese.', 'MT-SRC-04']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€745.68 a month (€8,948.16 a year)', '745,68 € al mese (8.948,16 € l’anno)'], 'MT-SRC-10 MT-SRC-14'],
        [['Health insurance', 'Assicurazione sanitaria'], ['at least €100,000 hospital cover', 'almeno 100.000 € di copertura ospedaliera'], 'MT-SRC-11'],
        [['Fees', 'Costi'], ['€100 visa; €50 + €27.50 card', '100 € il visto; 50 € + 27,50 € la carta'], 'MT-SRC-14 MT-SRC-19']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Trainee permit', 'Permesso per tirocinanti'], law: 'S.L. 217.22',
      t: [['For graduates of the last two years or students abroad, with a training agreement, a tutor and the host’s written commitment to cover your living costs; up to six months, 12 at most, not convertible to work on the spot.',
        'Per chi si è laureato negli ultimi due anni o studia all’estero, con una convenzione di tirocinio, un tutor e l’impegno scritto dell’ente a coprire le spese di soggiorno; fino a sei mesi, al massimo 12, non convertibile sul posto in lavoro.', 'MT-SRC-04 MT-SRC-10']],
      f: [[['Fees', 'Costi'], ['€50 + €27.50 card', '50 € + 27,50 € la carta'], 'MT-SRC-04']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Permit to look for work or start a business after graduating', 'Permesso per cercare lavoro o avviare un’impresa dopo la laurea'], law: 'S.L. 217.22 reg. 22',
      t: [['After a bachelor’s, master’s or PhD in Malta, apply before your student permit expires: nine months, not renewable. It does not itself allow work; a job offer converts it to a single permit without leaving Malta.',
        'Dopo una laurea, un master o un dottorato a Malta si fa domanda prima che scada il permesso per studio: nove mesi, non rinnovabili. Di per sé non consente di lavorare; un’offerta lo converte in permesso unico senza lasciare Malta.', 'MT-SRC-04']],
      f: [[['Fees', 'Costi'], ['€50 + €27.50 card', '50 € + 27,50 € la carta'], 'MT-SRC-19']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Key and specialist employee schemes, EU Blue Card', 'Schemi per dipendenti chiave e specialisti, Carta Blu UE'], law: 'KEI; SEI; S.L. 217.27',
      t: [
        ['The Key Employee Initiative gives a decision in five working days for senior or highly specialised roles; the Specialist Employee Initiative in 15. Both need a degree or three years of relevant experience.',
          'La Key Employee Initiative dà una decisione in cinque giorni lavorativi per ruoli apicali o molto specializzati; la Specialist Employee Initiative in 15. Entrambe richiedono una laurea o tre anni di esperienza pertinente.', 'MT-SRC-12 MT-SRC-13'],
        ['The Blue Card needs a contract of at least six months and a three-year degree; family joins at once with the right to work.',
          'La Carta Blu richiede un contratto di almeno sei mesi e una laurea triennale; la famiglia arriva subito con diritto al lavoro.', 'MT-SRC-03']
      ],
      f: [
        [['Salary, key employee', 'Stipendio, dipendente chiave'], ['€45,000 a year', '45.000 € l’anno'], 'MT-SRC-12'],
        [['Salary, specialist employee', 'Stipendio, specialista'], ['€30,000 a year', '30.000 € l’anno'], 'MT-SRC-13'],
        [['Salary, EU Blue Card, 2026', 'Stipendio, Carta Blu UE, 2026'], ['€38,628 a year', '38.628 € l’anno'], 'MT-SRC-24'],
        [['Fees', 'Costi'], ['€600, then €150 a year to renew', '600 €, poi 150 € l’anno per il rinnovo'], 'MT-SRC-12 MT-SRC-03']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Single permit', 'Permesso unico'], law: 'S.L. 217.17',
      t: [['The employer applies after a Jobsplus labour-market test; since March 2026 you must first pass a 20-hour online pre-departure course, and hospitality jobs also need the Skills Pass. You then get a D visa.',
        'Fa domanda il datore dopo il test del mercato di Jobsplus; da marzo 2026 si deve prima superare un corso online pre-partenza di 20 ore, e i lavori nell’ospitalità richiedono anche lo Skills Pass. Poi si ottiene il visto D.', 'MT-SRC-16 MT-SRC-17 MT-SRC-14']],
      f: [[['Fees', 'Costi'], ['€600 + €250 course + €100 visa', '600 € + 250 € corso + 100 € visto'], 'MT-SRC-11 MT-SRC-17 MT-SRC-14']],
      w: ['Lose your job and a new employer must file a complete change-of-employer application within 30 days.',
        'Se perdi il lavoro, un nuovo datore deve presentare una domanda completa di cambio datore entro 30 giorni.', 'MT-SRC-11'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'S.L. 217.22',
      t: [
        ['A hosting agreement with a research body accredited by Xjenza Malta; no labour-market test, family reunion at once.',
          'Una convenzione di accoglienza con un ente di ricerca accreditato da Xjenza Malta; nessun test del mercato, ricongiungimento immediato.', 'MT-SRC-04'],
        ['A PhD on a university scholarship comes as a student and the scholarship is tax-free; one on a research contract pays ordinary tax and social security.',
          'Un dottorato con borsa universitaria entra come studente e la borsa è esente; uno con contratto di ricerca paga imposte e contributi ordinari.', 'MT-SRC-08 MT-SRC-09']
      ],
      f: [[['Fees', 'Costi'], ['€50 + €27.50 card', '50 € + 27,50 € la carta'], 'MT-SRC-04']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Malta has working-holiday arrangements only with Australia, New Zealand, Japan and Andorra, plus a scheme for young people of Maltese descent.',
        'Malta ha accordi di vacanza-lavoro solo con Australia, Nuova Zelanda, Giappone e Andorra, più uno schema per giovani di origine maltese.', 'MT-SRC-21']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For citizens of the partner countries aged 18 to 30: 12 months, once, at most six months with one employer; no Maltese visa fee.',
        'Per cittadini dei paesi partner dai 18 ai 30 anni: 12 mesi, una sola volta, al massimo sei mesi con lo stesso datore; nessuna tassa maltese per il visto.', 'MT-SRC-21']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180 with no work; since 1 August 2025 a tourist stay cannot be converted into a work permit on the spot.',
        'Fino a 90 giorni ogni 180 senza lavoro; dal 1° agosto 2025 un soggiorno turistico non si può convertire sul posto in permesso di lavoro.', 'MT-SRC-14 MT-SRC-11']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'MT-SRC-14']] },

    { k: 'tax', p: 'eu uk us other', v: 'limited',
      name: ['15% rate for highly skilled individuals', 'Aliquota del 15% per figure altamente qualificate'], law: 'LN 20/2026',
      t: [['Senior roles in finance, gaming and aviation earning at least €65,000 can pay a flat 15% on employment income.',
        'I ruoli apicali in finanza, gaming e aviazione con almeno 65.000 € possono pagare un’aliquota fissa del 15% sul reddito da lavoro.', 'MT-SRC-08']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Rent only a flat whose lease is registered with the Housing Authority (rentregistration.mt): since 1 September 2024 a bedroom may hold at most 2 people, and permit applications need the authority’s approval letter and an attestation form signed by a notary or lawyer in Malta.',
        'Affitta solo un alloggio con il contratto registrato presso la Housing Authority (rentregistration.mt): dal 1° settembre 2024 una camera può ospitare al massimo 2 persone, e le domande di permesso richiedono la lettera di approvazione dell’autorità e un modulo di attestazione firmato da un notaio o avvocato a Malta.', 'MT-SRC-07 MT-SRC-18']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Since 1 August 2025 you cannot enter as a visitor and apply for a work permit in Malta: your employer files the single permit (€600) while you are abroad, and you then get the D visa (€100). Since 1 March 2026 workers must also pass a 20-hour online pre-departure course (€250).',
        'Dal 1° agosto 2025 non puoi entrare come visitatore e chiedere un permesso di lavoro a Malta: il datore presenta il permesso unico (600 €) mentre sei all’estero, e poi ottieni il visto D (100 €). Dal 1° marzo 2026 i lavoratori devono anche superare un corso online pre-partenza di 20 ore (250 €).', 'MT-SRC-11 MT-SRC-14 MT-SRC-17'],
      ['Students on courses over 90 days, UK and US citizens included, need the study D visa (€100) before travelling.',
        'Gli studenti di corsi oltre 90 giorni, britannici e statunitensi compresi, devono avere il visto D per studio (100 €) prima di partire.', 'MT-SRC-14']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Your address is the registered lease: the Housing Authority approval is what Identità checks for any residence document.',
        'Il tuo indirizzo è il contratto registrato: l’approvazione della Housing Authority è ciò che Identità verifica per qualsiasi documento di soggiorno.', 'MT-SRC-07 MT-SRC-18']
    ] },
    { k: 'card', p: 'eu', t: [
      ['You may work from day one. Within 90 days, apply online to Identità with form A (employment), your contract, the Jobsplus engagement form and registered lease; after biometrics in Msida you get a free eResidence card valid 5 years.',
        'Puoi lavorare dal primo giorno. Entro 90 giorni, fai domanda online a Identità con il modulo A (lavoro), il contratto, il modulo di assunzione Jobsplus e il contratto d’affitto registrato; dopo i dati biometrici a Msida ricevi gratis la carta eResidence valida 5 anni.', 'MT-SRC-25 MT-SRC-06 MT-SRC-16']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Workers book biometrics at Valley Road, Msida, bring their €100,000 health policy, and get an interim permit; the plastic card takes 4 to 8 weeks. Students apply online within 30 days of arriving (form N.01): €50 plus €27.50 for the card.',
        'I lavoratori prenotano i dati biometrici a Valley Road, Msida, portano la polizza sanitaria da 100.000 € e ricevono un permesso provvisorio; la tessera plastificata richiede 4-8 settimane. Gli studenti fanno domanda online entro 30 giorni dall’arrivo (modulo N.01): 50 € più 27,50 € per la carta.', 'MT-SRC-11 MT-SRC-19']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your employer’s Jobsplus engagement form, filed by your first day, generates your social security number, and the tax office assigns your tax identification number.',
        'Il modulo di assunzione Jobsplus del datore, presentato entro il primo giorno, genera il numero di previdenza sociale, e l’ufficio delle imposte assegna il codice fiscale.', 'MT-SRC-16 MT-SRC-09 MT-SRC-23']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Your European Health Insurance Card covers you until you work; employees are covered by public health care through their Class 1 contributions.',
        'La Tessera europea di assicurazione malattia ti copre finché non lavori; i dipendenti sono coperti dalla sanità pubblica tramite i contributi Class 1.', 'MT-SRC-25 MT-SRC-09']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Every non-EU permit needs health insurance of at least €100,000 for hospital and medical care in Malta: travel policies of €30,000 are refused.',
        'Ogni permesso non UE richiede un’assicurazione sanitaria di almeno 100.000 € per ricoveri e cure a Malta: le polizze di viaggio da 30.000 € vengono rifiutate.', 'MT-SRC-11']
    ] },
    { k: 'bank', p: 'eu uk us other', none: true },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['If your job ends, a new employer has only 30 days to file a complete change of employer (€600); do not start the new job before it is approved.',
        'Se il lavoro finisce, un nuovo datore ha solo 30 giorni per presentare un cambio di datore completo (600 €); non iniziare il nuovo lavoro prima dell’approvazione.', 'MT-SRC-11'],
      ['The interim receipt and the employer’s “still working” letter let you keep working while a renewal is processed, but are valid only in Malta: leaving, even for a Schengen stopover, can mean refused boarding and losing the application.',
        'La ricevuta provvisoria e la lettera “still working” del datore ti permettono di continuare a lavorare durante il rinnovo, ma valgono solo a Malta: partire, anche per uno scalo Schengen, può significare il rifiuto all’imbarco e la perdita della domanda.', 'MT-SRC-11 MT-SRC-26'],
      ['Students may not work at all in their first 90 days; from day 91, up to 20 hours a week with a Jobsplus licence the employer requests.',
        'Gli studenti non possono lavorare nei primi 90 giorni; dal 91° giorno, fino a 20 ore a settimana con una licenza Jobsplus richiesta dal datore.', 'MT-SRC-04 MT-SRC-16']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['The interim receipt and “still working” letter are valid only in Malta: leaving while a renewal is pending can strand you abroad.',
      'La ricevuta provvisoria e la lettera “still working” valgono solo a Malta: partire con un rinnovo in corso può lasciarti bloccato all’estero.', 'MT-SRC-26'] },
    { p: 'eu uk us other', t: ['Leases must be registered with the Housing Authority, with at most two people per bedroom; Identità refuses applications without the approval letter.',
      'I contratti d’affitto vanno registrati presso la Housing Authority, con al massimo due persone per camera; Identità rifiuta le domande senza la lettera di approvazione.', 'MT-SRC-07 MT-SRC-18'] },
    { p: 'uk us other', t: ['Ordinary €30,000 travel insurance is refused: cover must reach €100,000.',
      'Le assicurazioni di viaggio ordinarie da 30.000 € vengono rifiutate: la copertura deve arrivare a 100.000 €.', 'MT-SRC-11'] }
  ],

  open: [
    { st: 'watch', t: ['The Skills Pass may be extended beyond hospitality.',
      'Lo Skills Pass potrebbe essere esteso oltre l’ospitalità.'] },
    { st: 'pending', t: ['EU citizens working in hospitality will need the Skills Pass from 1 January 2027, unless postponed again.',
      'I cittadini UE che lavorano nell’ospitalità avranno bisogno dello Skills Pass dal 1° gennaio 2027, salvo nuovo rinvio.'] },
    { st: 'open', t: ['Visa appointments at VFS centres in India and elsewhere take 6 to 16 weeks, with slots resold illegally.',
      'Gli appuntamenti per il visto nei centri VFS in India e altrove richiedono da 6 a 16 settimane, con slot rivenduti illegalmente.'] },
    { st: 'pending', t: ['A reform of the non-domiciled tax regime is announced for 2027.',
      'Una riforma del regime fiscale per i non domiciliati è annunciata per il 2027.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/malta/malta_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('MT', {
  "MT-SRC-06": ["Legislation Malta / Identità: Free Movement of European Union Nationals and their Family Members Order (Subsidiary Legislation 460.17, recepimento…","https://legislation.mt/eli/sl/460.17/eng","2026-10-05"],
  "MT-SRC-16": ["Jobsplus Malta: Employment Licences Unit Guidelines","https://jobsplus.gov.mt/employment-licences","2026-10-05"],
  "MT-SRC-09": ["Department of Social Security / Legislation Malta: Social Security Act (Cap. 318), Tenth Schedule","https://legislation.mt/eli/cap/318/eng","2026-10-05"],
  "MT-SRC-25": ["Identità Malta (Expatriates Unit): Modulo CEA Form A (Employment","https://identita.gov.mt/expatriates-unit-checklists-and-forms-eu-nationals/","2026-10-05"],
  "MT-SRC-18": ["Housing Authority Malta: Portale telematico di registrazione contratti di locazione (rentregistration.mt)","https://rentregistration.mt","2026-10-05"],
  "MT-SRC-14": ["Identità Malta (Central Visa Unit - CVU): Schede informative Visti Nazionali D (studio/lavoro tariffa €100) e Visti Schengen C (tariffa €90 da Reg. UE…","https://identita.gov.mt/central-visa-unit-sec-page-visa-types/","2026-10-05"],
  "MT-SRC-19": ["University of Malta (International Office): International Student Guidelines: Visto D, Student Residence Permit (e-Residence Form N.01 €50 + card €27.50),…","https://www.um.edu.mt/international/students/visas","2026-10-05"],
  "MT-SRC-04": ["Legislation Malta / Identità: Conditions of Entry and Residence of Third-Country Nationals for the Purposes of Research, Studies, Training...…","https://legislation.mt/eli/sl/217.22/eng","2026-10-05"],
  "MT-SRC-10": ["Department of Industrial and Employment Relations (DIER): National Minimum Wage National Standard Order 2026 & Cost of Living Adjustment (COLA 2026: €4.66/settimana","https://dier.gov.mt/en/Employment-Conditions/National%20Standard%20Orders/Pages/National-Minimum-Wage-Order.aspx","2026-10-05"],
  "MT-SRC-11": ["Identità Malta (Expatriates Unit): Single Permit Application Guidelines & Fee Schedule (Riforma 01/08/2025: tassa domanda €600, rinnovo €150/anno, cambio…","https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/","2026-10-05"],
  "MT-SRC-12": ["Identità Malta (Expatriates Unit): Key Employee Initiative (KEI) Guidelines","https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/key-employee-initiative/","2026-10-05"],
  "MT-SRC-13": ["Identità Malta (Expatriates Unit): Specialist Employee Initiative (SEI) Guidelines","https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/specialist-employee-initiative/","2026-10-05"],
  "MT-SRC-03": ["Legislation Malta / Identità: Conditions of Entry and Residence of Third-Country Nationals for the Purpose of Highly Qualified Employment","https://legislation.mt/eli/sl/217.27/20231222/eng","2026-10-05"],
  "MT-SRC-24": ["National Statistics Office (NSO) Malta: Labour Force Survey & Average Gross Annual Salary (base di calcolo per la soglia 1.5x della Carta Blu UE ex S.L.…","https://nso.gov.mt","2026-10-05"],
  "MT-SRC-17": ["Institute of Tourism Studies (ITS) & Malta Tourism Authority: Skills Pass Malta & Pre-Departure Course Portal (skillspass.org.mt)","https://skillspass.org.mt","2026-10-05"],
  "MT-SRC-08": ["Legislation Malta / Commissioner for Tax and Customs: Income Tax Act (Cap. 123) & Tax Treatment of Highly Skilled Individuals Rules, 2026 (Legal Notice 20 of 2026)","https://legislation.mt/eli/sl/123.197/eng","2026-10-05"],
  "MT-SRC-21": ["Identità Malta (Central Visa Unit): Working Holiday Schemes","https://identita.gov.mt/central-visa-unit-sec-page-working-holiday-visa/","2026-10-05"],
  "MT-SRC-07": ["Legislation Malta / Housing Authority: Private Residential Leases Act (Cap. 604) e modifiche Act XX of 2024","https://legislation.mt/eli/cap/604/eng","2026-10-05"],
  "MT-SRC-23": ["Commissioner for Tax and Customs (CFR): Aliquote d'imposta sul reddito persone fisiche (Resident Single Tax Rates 2026: 0% fino a €12.000, 15%…","https://cfr.gov.mt/en/rates/Pages/Tax-Rates.aspx","2026-10-05"],
  "MT-SRC-26": ["Identità Malta (Central Visa Unit / Expatriates Unit): Circolare operativa Still Working Letter / Interim Permit","https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/","2026-10-05"]
});

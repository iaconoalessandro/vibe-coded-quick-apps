/* Visas and permits: Luxembourg. From research/visas_immigration/luxembourg/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'LU',
  folder: 'luxembourg',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work and study with no permit or labour-market test.',
        'I cittadini UE, SEE e svizzeri lavorano e studiano senza permessi né test del mercato del lavoro.', 'LU-SRC-01'],
      ['Declare your arrival at the commune within eight days, then register within three months with your contract, or for students your enrolment, health card and statement of means; both are free, and the registration certificate has no expiry.',
        'Si dichiara l’arrivo al comune entro otto giorni, poi ci si registra entro tre mesi con il contratto o, per gli studenti, l’iscrizione, la tessera sanitaria e la dichiarazione dei mezzi; entrambe sono gratuite, e l’attestato di registrazione non scade.', 'LU-SRC-11 LU-SRC-12'],
      ['Your employer registers you with social security within eight days, which gives you a 13-digit national number; public transport in second class is free.',
        'Il datore ti iscrive alla previdenza entro otto giorni, e ricevi un numero nazionale di 13 cifre; i trasporti pubblici in seconda classe sono gratuiti.', 'LU-SRC-08 LU-SRC-23 LU-SRC-29']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student residence permit', 'Permesso di soggiorno per studenti'], law: 'Loi du 29 août 2008 art. 56',
      t: [
        ['The temporary stay authorisation must be approved before you enter; then the D visa, the arrival declaration at the commune within three working days, a medical check with TB screening, and the biometric permit.',
          'L’autorizzazione di soggiorno temporaneo va approvata prima dell’ingresso; poi il visto D, la dichiarazione di arrivo al comune entro tre giorni lavorativi, la visita medica con screening TBC e il permesso biometrico.', 'LU-SRC-01 LU-SRC-21 LU-SRC-11 LU-SRC-22'],
        ['You may work 15 hours a week on average in term (60 a month) and full time in the holidays.',
          'Si può lavorare in media 15 ore a settimana durante le lezioni (60 al mese) e a tempo pieno nelle vacanze.', 'LU-SRC-01'],
        ['A non-EU student with a permit from another EU country can study here up to 360 days without a D visa, after the university notifies the immigration directorate.',
          'Uno studente extra-UE con permesso di un altro paese UE può studiare qui fino a 360 giorni senza visto D, dopo la notifica dell’università alla Direzione immigrazione.', 'LU-SRC-01 LU-SRC-06']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['€1,555.52 a month (€18,666.24 a year)', '1.555,52 € al mese (18.666,24 € l’anno)'], 'LU-SRC-10 LU-SRC-15'],
        [['Fees', 'Costi'], ['€50 visa, €80 permit', '50 € il visto, 80 € il permesso'], 'LU-SRC-21']
      ] },

    { k: 'intern', p: 'eu uk us other', v: 'open',
      name: ['Internships: the pay rules', 'Tirocini: le regole sulla paga'], law: 'Code du travail L. 151-1',
      t: [
        ['A study internship lasts at most six months; from four weeks on it must pay at least 30% of the minimum wage. A practical internship within two years of graduating pays 40% for weeks 4 to 12 and 75% after.',
          'Uno stage curricolare dura al massimo sei mesi; dalla quarta settimana deve pagare almeno il 30% del salario minimo. Uno stage pratico entro due anni dalla laurea paga il 40% dalla 4ª alla 12ª settimana e il 75% dopo.', 'LU-SRC-07 LU-SRC-08'],
        ['Non-EU interns need a trainee authorisation approved before entry, with funds topping the allowance up to the legal minimum.',
          'Gli stagisti extra-UE hanno bisogno di un’autorizzazione da tirocinante approvata prima dell’ingresso, con fondi che integrino l’indennità fino al minimo legale.', 'LU-SRC-01 LU-SRC-17']
      ],
      f: [
        [['Study internship, from four weeks', 'Stage curricolare, dalla quarta settimana'], ['€831.40 gross a month', '831,40 € lordi al mese'], 'LU-SRC-07'],
        [['Graduate internship, weeks 4 to 12', 'Stage dopo la laurea, settimane 4-12'], ['€1,108.53 gross a month', '1.108,53 € lordi al mese'], 'LU-SRC-07'],
        [['Graduate internship, from week 13', 'Stage dopo la laurea, dalla 13ª settimana'], ['€2,078.50 gross a month', '2.078,50 € lordi al mese'], 'LU-SRC-07']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search or business permit after a master’s or PhD', 'Permesso per ricerca lavoro o impresa dopo master o dottorato'], law: 'Loi du 29 août 2008 art. 59',
      t: [
        ['After a master’s or doctorate in Luxembourg, or at the end of a research stay: 12 months, not renewable.',
          'Dopo un master o un dottorato in Lussemburgo, o alla fine di un soggiorno di ricerca: 12 mesi, non rinnovabili.', 'LU-SRC-01 LU-SRC-05 LU-SRC-18'],
        ['A job linked to your studies at the qualified minimum wage converts it with no labour-market test.',
          'Un lavoro legato agli studi al salario minimo qualificato lo converte senza test del mercato del lavoro.', 'LU-SRC-05 LU-SRC-08']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€1,555.52 a month', '1.555,52 € al mese'], 'LU-SRC-10'],
        [['Qualified minimum wage', 'Salario minimo qualificato'], ['€3,325.60 gross a month', '3.325,60 € lordi al mese'], 'LU-SRC-08']
      ],
      w: ['Apply at least 30 days before your student permit expires; after it has expired the right is lost.',
        'Fai domanda almeno 30 giorni prima della scadenza del permesso per studio; a permesso scaduto il diritto si perde.', 'LU-SRC-01'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Loi du 4 juin 2024',
      t: [['A contract of at least six months, a three-year degree or three years of senior experience in the last seven (IT); no labour-market test, a four-year card and immediate family reunion.',
        'Un contratto di almeno sei mesi, una laurea triennale o tre anni di esperienza qualificata negli ultimi sette (informatica); nessun test del mercato del lavoro, una carta di quattro anni e il ricongiungimento immediato.', 'LU-SRC-02 LU-SRC-03 LU-SRC-14']],
      f: [
        [['Salary, standard', 'Stipendio, soglia ordinaria'], ['€65,652 a year', '65.652 € l’anno'], 'LU-SRC-04'],
        [['Salary, shortage occupations', 'Stipendio, professioni carenti'], ['€47,174 a year', '47.174 € l’anno'], 'LU-SRC-04'],
        [['Fees', 'Costi'], ['€50 visa, €80 card', '50 € il visto, 80 € la carta'], 'LU-SRC-21']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Salaried worker permit', 'Permesso per lavoratore dipendente'], law: 'Loi du 29 août 2008 art. 42',
      t: [['The employer declares the vacancy to the employment agency ADEM: for jobs on the severe-shortage list (IT, engineering, accounting) the certificate comes in five working days with no test; otherwise ADEM checks local job-seekers for seven working days.',
        'Il datore dichiara il posto all’agenzia per l’impiego ADEM: per i mestieri in grave carenza (informatica, ingegneria, contabilità) il certificato arriva in cinque giorni lavorativi senza test; altrimenti ADEM verifica per sette giorni lavorativi i disoccupati residenti.', 'LU-SRC-05 LU-SRC-20'],
        ['The first permit lasts a year in one sector, then three years in any.',
          'Il primo permesso dura un anno in un settore, poi tre anni in qualsiasi settore.', 'LU-SRC-13']],
      f: [[['Minimum wage', 'Salario minimo'], ['€2,771.33 unqualified, €3,325.60 qualified, gross a month', '2.771,33 € non qualificato, 3.325,60 € qualificato, lordi al mese'], 'LU-SRC-08']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhD contracts', 'Permesso per ricercatori e contratti di dottorato'], law: 'Loi du 29 août 2008 art. 65',
      t: [
        ['A hosting agreement with a research body accredited by the ministry, which covers living and return costs up to six months after the project; no labour-market test, and family can join at once.',
          'Una convenzione di accoglienza con un ente di ricerca accreditato dal ministero, che copre i costi di soggiorno e rientro fino a sei mesi dopo il progetto; nessun test del mercato del lavoro, e la famiglia può arrivare subito.', 'LU-SRC-01 LU-SRC-16'],
        ['A PhD employed by the University of Luxembourg or a public institute (LIST, LIH, LISER) comes as a researcher with full social security; one on a foreign grant comes as a student, limited to 15 hours of other work.',
          'Un dottorando assunto dall’Università del Lussemburgo o da un istituto pubblico (LIST, LIH, LISER) entra come ricercatore con piena previdenza; uno con borsa estera entra come studente, con il limite di 15 ore di altro lavoro.', 'LU-SRC-01 LU-SRC-18']
      ],
      f: [[['Minimum resources', 'Risorse minime'], ['€3,325.60 gross a month', '3.325,60 € lordi al mese'], 'LU-SRC-08']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Luxembourg has working-holiday agreements only with Australia, New Zealand, Japan, Canada, Chile, South Korea and Taiwan.',
        'Il Lussemburgo ha accordi di vacanza-lavoro solo con Australia, Nuova Zelanda, Giappone, Canada, Cile, Corea del Sud e Taiwan.', 'LU-SRC-19']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Australia, New Zealand and Japan aged 18 to 30, or Canada, Chile, South Korea and Taiwan aged 18 to 35: a 12-month D visa, not renewable, with annual quotas.',
        'Solo per cittadini di Australia, Nuova Zelanda e Giappone dai 18 ai 30 anni, o di Canada, Cile, Corea del Sud e Taiwan dai 18 ai 35: un visto D di 12 mesi, non rinnovabile, con quote annuali.', 'LU-SRC-19']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay and business visits', 'Soggiorno breve e visite d’affari'], law: 'Loi du 29 août 2008 art. 39',
      t: [
        ['Up to 90 days in any 180: meetings, negotiations and fairs are allowed, productive work is not.',
          'Fino a 90 giorni ogni 180: riunioni, trattative e fiere sono consentite, il lavoro produttivo no.', 'LU-SRC-01 LU-SRC-30'],
        ['No one who entered for a short stay can apply for a work, study or internship permit from inside Luxembourg: the application is inadmissible.',
          'Chi è entrato per un soggiorno breve non può chiedere un permesso di lavoro, studio o tirocinio dal Lussemburgo: la domanda è inammissibile.', 'LU-SRC-01']
      ],
      f: [[['Means for a short stay', 'Mezzi per un soggiorno breve'], ['€50 a day, at least €500', '50 € al giorno, almeno 500 €'], 'LU-SRC-30']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Hotels and short-term rentals cannot be your registered address, and a room “sans domiciliation” risks a false registration, punished with 1 month to 3 years in prison. Since 1 August 2024 a deposit is capped at 2 months’ rent and agency fees are split 50:50 with the landlord; each bedroom needs at least 9 m² per occupant.',
        'Alberghi e affitti brevi non possono essere il tuo indirizzo registrato, e una stanza “sans domiciliation” espone a una falsa registrazione, punita con la reclusione da 1 mese a 3 anni. Dal 1° agosto 2024 la cauzione è al massimo di 2 mesi di affitto e le spese d’agenzia sono divise 50:50 con il proprietario; ogni camera deve avere almeno 9 m² per occupante.', 'LU-SRC-01 LU-SRC-24 LU-SRC-25']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Get the temporary residence authorisation from the Directorate of Immigration before you enter: you cannot apply from inside the country, even after a visa-free entry. Then get the D visa if you need one (€50). Bring a criminal record under 3 months old, apostilled and translated into French, German or English.',
        'Ottieni l’autorizzazione temporanea di soggiorno dalla Direzione dell’immigrazione prima di entrare: non puoi fare domanda dall’interno del paese, nemmeno dopo un ingresso senza visto. Poi prendi il visto D se ti serve (50 €). Porta un casellario giudiziale di meno di 3 mesi, apostillato e tradotto in francese, tedesco o inglese.', 'LU-SRC-01 LU-SRC-21']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Declare your arrival at the town hall’s population office within 8 days, with ID and a registered lease or the owner’s accommodation statement. It is free, and you get a stamped receipt.',
        'Dichiara l’arrivo all’ufficio della popolazione del comune entro 8 giorni, con documento d’identità e un contratto registrato o la dichiarazione di alloggio del proprietario. È gratuito, e ricevi una ricevuta timbrata.', 'LU-SRC-01 LU-SRC-23 LU-SRC-11']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['Declare your arrival at the town hall within 3 working days of entering, with passport, authorisation, D visa and lease. It is free.',
        'Dichiara l’arrivo al comune entro 3 giorni lavorativi dall’ingresso, con passaporto, autorizzazione, visto D e contratto d’affitto. È gratuito.', 'LU-SRC-01 LU-SRC-11']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Within 3 months, register at the town hall with your work contract, or as a student your enrolment, funds and insurance: the registration certificate is issued on the spot, free, and does not expire.',
        'Entro 3 mesi, registrati al comune con il contratto di lavoro, o da studente con iscrizione, mezzi e assicurazione: l’attestato di registrazione viene rilasciato subito, gratis, e non scade.', 'LU-SRC-01 LU-SRC-12']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Within 30 days, have the medical check: a GP visit (about €56 to €65) and a free chest X-ray for tuberculosis at the Ligue Médico-Sociale; without the health certificate the permit is refused.',
        'Entro 30 giorni, fai il controllo medico: una visita dal medico (circa 56-65 €) e una radiografia del torace gratuita per la tubercolosi alla Ligue Médico-Sociale; senza il certificato sanitario il permesso è respinto.', 'LU-SRC-01 LU-SRC-22'],
      ['Within 3 months of arriving, apply to the Directorate of Immigration for the residence card, with the arrival declaration, proof of the €80 fee and proof of housing; you are then called for photo and fingerprints.',
        'Entro 3 mesi dall’arrivo, chiedi alla Direzione dell’immigrazione la carta di soggiorno, con la dichiarazione d’arrivo, la prova del pagamento di 80 € e la prova dell’alloggio; vieni poi convocato per foto e impronte.', 'LU-SRC-13 LU-SRC-21']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your employer declares you to the social security centre (CCSS) within 8 days of starting, which generates your 13-digit national number in 1 to 3 weeks.',
        'Il datore ti dichiara al centro comune della sicurezza sociale (CCSS) entro 8 giorni dall’inizio, che genera il numero nazionale a 13 cifre in 1-3 settimane.', 'LU-SRC-08 LU-SRC-23'],
      ['The tax office then issues your withholding tax card; if it is not ready for your first payslip, your employer must withhold a flat 33%, recovered on later payslips or with the annual statement.',
        'L’ufficio delle imposte rilascia poi la scheda delle ritenute; se non è pronta per la prima busta paga, il datore deve trattenere il 33% forfettario, recuperato nelle buste paga successive o con il conguaglio annuale.', 'LU-SRC-26']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['The health card (CNS) arrives by post 3 to 6 weeks after you are registered. Until your national number is active, pay doctors and pharmacies in full, keep the receipted bills and send them to the CNS for a refund.',
        'La tessera sanitaria (CNS) arriva per posta 3-6 settimane dopo l’iscrizione. Finché il numero nazionale non è attivo, paga medici e farmacie per intero, conserva le ricevute quietanzate e inviale alla CNS per il rimborso.', 'LU-SRC-08 LU-SRC-23']
    ] },
    { k: 'bank', p: 'eu uk us other', none: true },
    { k: 'keep', p: 'eu', t: [
      ['Nothing to renew: the registration certificate does not expire.',
        'Niente da rinnovare: l’attestato di registrazione non scade.', 'LU-SRC-12']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['A false address declaration leads to removal from the register, loss of the permit and expulsion, besides fines of €251 to €12,500.',
        'Una falsa dichiarazione dell’indirizzo comporta la cancellazione anagrafica, la perdita del permesso e l’espulsione, oltre a multe da 251 a 12.500 €.', 'LU-SRC-01']
    ] }
  ],

  traps: [
    { p: 'eu uk us other', t: ['If your employer has no tax card for your first salary, 33% is withheld; plan on €6,000 to €7,000 of cash for the first month (rent, two months’ deposit, agency fee and health costs paid up front).',
      'Se il datore non ha la scheda fiscale al primo stipendio, si trattiene il 33%; prevedi 6.000-7.000 € di liquidità per il primo mese (affitto, due mesi di cauzione, agenzia e spese sanitarie anticipate).', 'LU-SRC-26 LU-SRC-24'] },
    { p: 'eu uk us other', t: ['Hotels and Airbnb cannot be declared as your address, and a flat with fewer than 9 m² of bedroom per person blocks registration.',
      'Alberghi e Airbnb non si possono dichiarare come indirizzo, e un alloggio con meno di 9 m² di camera per persona blocca l’iscrizione.', 'LU-SRC-25'] },
    { p: 'eu uk us other', t: ['A false address registration can cost the permit and lead to a prison term of one month to three years and a fine of €251 to €12,500.',
      'Una falsa iscrizione anagrafica può costare il permesso e portare alla reclusione da un mese a tre anni e a un’ammenda da 251 a 12.500 €.', 'LU-SRC-01'] },
    { p: 'eu uk us other', t: ['Until your social-security number is active, pay doctors in full and keep the stamped receipts to claim back from the CNS.',
      'Finché il numero di previdenza non è attivo, paga i medici per intero e conserva le ricevute timbrate per il rimborso della CNS.', 'LU-SRC-08'] },
    { p: 'eu', t: ['Cross-border workers living in France, Belgium or Germany: working more than 34 days a year outside Luxembourg makes all those days taxable at home.',
      'Frontalieri residenti in Francia, Belgio o Germania: lavorare oltre 34 giorni l’anno fuori dal Lussemburgo rende tutte quelle giornate imponibili nel paese di residenza.', 'LU-SRC-27'] }
  ],

  open: [
    { st: 'pending', t: ['The next automatic wage indexation, raising the minimum wage and the thresholds linked to it, is expected in spring or summer 2027.',
      'Il prossimo adeguamento automatico dei salari, che alza il salario minimo e le soglie collegate, è atteso tra primavera ed estate 2027.'] },
    { st: 'pending', t: ['A reform would replace the tax classes with a single neutral class.',
      'Una riforma sostituirebbe le classi d’imposta con un’unica classe neutra.'] },
    { st: 'watch', t: ['The severe-shortage list for 2027, which decides the five-day ADEM route, has not yet been published.',
      'La lista dei mestieri in grave carenza per il 2027, che decide la via ADEM in cinque giorni, non è ancora stata pubblicata.'] },
    { st: 'open', t: ['Some landlords still rent single rooms without the head tenant’s consent, and communes then refuse registration.',
      'Alcuni proprietari affittano ancora singole stanze senza il consenso dell’inquilino principale, e i comuni rifiutano poi l’iscrizione.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/luxembourg/luxembourg_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('LU', {
  "LU-SRC-01": ["Loi modifiée du 29 août 2008 sur la libre circulation des personnes et l’immigration","https://legilux.public.lu/eli/etat/leg/loi/2008/08/29/n1/consolide/20260612","2026-10-05"],
  "LU-SRC-11": ["Guichet.lu (État du Grand-Duché): Déclaration d'arrivée auprès de la commune de résidence","https://guichet.public.lu/fr/citoyens/citoyennete/installation-luxembourg/demarches-arrivee/declaration-arrivee-commune.html","2026-10-05"],
  "LU-SRC-12": ["Guichet.lu (État du Grand-Duché): Déclaration d'enregistrement pour citoyens de l'UE","https://guichet.public.lu/fr/citoyens/immigration/plus-3-mois/citoyen-ue/declaration-enregistrement.html","2026-10-05"],
  "LU-SRC-08": ["CCSS (Centre commun de la sécurité sociale): Paramètres sociaux au 1er juin 2026","https://www.ccss.public.lu/fr/parametres-sociaux.html","2026-10-05"],
  "LU-SRC-23": ["Loi du 19 juin 2013 relative à l'identification des personnes physiques","https://legilux.public.lu/eli/etat/leg/loi/2013/06/19/n2/jo","2026-10-05"],
  "LU-SRC-29": ["Ministère de la Mobilité / CFL / Luxtram: Réglementation sur la gratuité des transports publics","https://www.mobiliteit.lu","2026-10-05"],
  "LU-SRC-21": ["Direction générale de l'immigration (MAEE): Tarifs et instructions visti e autorizzazioni di soggiorno","https://maee.gouvernement.lu","2026-10-05"],
  "LU-SRC-22": ["Direction de la santé & Ligue Médico-Sociale (LMS): Contrôle médical obligatoire des ressortissants de pays tiers","https://guichet.public.lu/fr/citoyens/immigration/nouveau-resident-luxembourg/arrivee-luxembourg/controle-medical-ressortissant-pays-tiers.html","2026-10-05"],
  "LU-SRC-06": ["Loi du 1er août 2018 portant transposition de la directive (UE) 2016/801","https://legilux.public.lu","2026-10-05"],
  "LU-SRC-10": ["FNS (Fonds National de Solidarité): Montants du Revenu d'Inclusion Sociale (REVIS) 2026","https://www.fns.lu","2026-10-05"],
  "LU-SRC-15": ["Guichet.lu (État du Grand-Duché): Titre de séjour pour étudiant (ressortissant tiers)","https://guichet.public.lu/fr/citoyens/immigration/plus-3-mois/ressortissant-tiers/etudiant/titre-sejour-etudiant.html","2026-10-05"],
  "LU-SRC-07": ["Code du travail luxembourgeois","https://legilux.public.lu","2026-10-05"],
  "LU-SRC-17": ["Guichet.lu (État du Grand-Duché): Titre de séjour en qualité de stagiaire","https://guichet.public.lu","2026-10-05"],
  "LU-SRC-05": ["Loi du 7 août 2023 portant modification du Code du travail et de la loi modifiée du 29 août 2008","https://legilux.public.lu/eli/etat/leg/loi/2023/08/07/a556/jo","2026-10-05"],
  "LU-SRC-18": ["Guichet.lu (État du Grand-Duché): Séjour pour recherche d'emploi ou création d'entreprise après les études","https://guichet.public.lu/fr/citoyens/immigration/plus-3-mois/ressortissant-tiers/etudiant/recherche-emploi-creation-entreprise.html","2026-10-05"],
  "LU-SRC-02": ["Loi du 4 juin 2024 portant transposition de la directive (UE) 2021/1883","https://legilux.public.lu/eli/etat/leg/loi/2024/06/04/a262/jo","2026-10-05"],
  "LU-SRC-03": ["Règlement grand-ducal du 20 juin 2024 portant exécution de la loi du 4 juin 2024","https://legilux.public.lu/eli/etat/leg/rgd/2024/06/20/a283/jo","2026-10-05"],
  "LU-SRC-14": ["Guichet.lu (État du Grand-Duché): Carte bleue européenne pour travailleur hautement qualifié","https://guichet.public.lu/fr/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/carte-bleue.html","2026-10-05"],
  "LU-SRC-04": ["Règlement ministériel du 23 février 2026 fixant le montant du salaire annuel brut moyen","https://legilux.public.lu","2026-10-05"],
  "LU-SRC-20": ["ADEM (Agence pour le développement de l'emploi): Recruter un salarié ressortissant de pays tiers & Liste métiers en pénurie","https://adem.public.lu/fr/employeurs/recruter-ressortissant-pays-tiers.html","2026-10-05"],
  "LU-SRC-13": ["Guichet.lu (État du Grand-Duché): Titre de séjour pour travailleur salarié (ressortissant tiers)","https://guichet.public.lu/fr/citoyens/immigration/plus-3-mois/ressortissant-tiers/salarie/titre-sejour-salarie.html","2026-10-05"],
  "LU-SRC-16": ["Guichet.lu (État du Grand-Duché): Titre de séjour pour chercheur (Directive 2016/801)","https://guichet.public.lu","2026-10-05"],
  "LU-SRC-19": ["Guichet.lu (État du Grand-Duché): Programme Vacances-Travail (accords bilatéraux)","https://guichet.public.lu","2026-10-05"],
  "LU-SRC-30": ["Commissione Europea (DG HOME): Reference amounts for external borders crossing (Schengen, Luxembourg)","https://home-affairs.ec.europa.eu","2026-10-05"],
  "LU-SRC-24": ["Loi du 23 juillet 2024 portant modification de la loi du 21 septembre 2006 sur le bail à loyer","https://legilux.public.lu/eli/etat/leg/loi/2024/07/23/a343/jo","2026-10-05"],
  "LU-SRC-25": ["Loi du 20 décembre 2019 sur la salubrité et l'habitabilité des logements","https://legilux.public.lu/eli/etat/leg/loi/2019/12/20/a894/jo","2026-10-05"],
  "LU-SRC-26": ["ACD (Administration des contributions directes): Circulaires L.I.R. sur la retenue d'impôt et la fiche de retenue d'impôt","https://impotsdirects.public.lu","2026-10-05"],
  "LU-SRC-27": ["Avenants aux conventions fiscales de non-double imposition (FR, BE, DE)","https://impotsdirects.public.lu","2026-10-05"]
});

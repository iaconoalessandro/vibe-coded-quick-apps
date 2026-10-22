/* Visas and permits: Estonia. From research/visas_immigration/estonia/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'EE',
  folder: 'estonia',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens may work from day one; the employer enters you in the employment register before you start.',
        'I cittadini UE, SEE e svizzeri possono lavorare dal primo giorno; il datore ti iscrive nel registro dell’occupazione prima che inizi.', 'EE-SRC-02 EE-SRC-29'],
      ['Within three months, register your address with the municipality: you get a personal code and a five-year right of residence. Within a month after that, apply for the ID card, €45.',
        'Entro tre mesi si registra l’indirizzo presso il comune: si ottiene il codice personale e un diritto di soggiorno di cinque anni. Entro un mese da allora si chiede la carta d’identità, 45 €.', 'EE-SRC-05 EE-SRC-02 EE-SRC-04']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Temporary residence permit for study', 'Permesso di soggiorno temporaneo per studio'], law: 'Aliens Act §§ 160–168',
      t: [
        ['Issued for the full nominal length of the course. Students may work without an hourly limit, as long as the studies stay on track.',
          'Rilasciato per l’intera durata nominale del corso. Gli studenti possono lavorare senza limite di ore, purché gli studi procedano regolarmente.', 'EE-SRC-13 EE-SRC-24'],
        ['The permit gives no public health cover: you need private insurance until a job with social tax makes you insured.',
          'Il permesso non dà copertura sanitaria pubblica: serve un’assicurazione privata finché un lavoro con imposta sociale non ti rende assicurato.', 'EE-SRC-28 EE-SRC-26'],
        ['A non-EU student with a study permit from another EU country can study here up to 360 days with no Estonian visa or permit.',
          'Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza visto né permesso estone.', 'EE-SRC-24']
      ],
      f: [
        [['Funds, legal minimum', 'Mezzi, minimo di legge'], ['€220 a month (€2,640 a year)', '220 € al mese (2.640 € l’anno)'], 'EE-SRC-10'],
        [['Health insurance', 'Assicurazione sanitaria'], ['at least €30,000', 'almeno 30.000 €'], 'EE-SRC-26'],
        [['Fees', 'Costi'], ['€225 in Estonia, €255 at an embassy', '225 € in Estonia, 255 € in ambasciata'], 'EE-SRC-04 EE-SRC-17']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Practical-training visa', 'Visto per formazione pratica'], law: 'Aliens Act § 62',
      t: [['For students abroad or graduates of the last two years: the host registers the traineeship with the police, then you get a D visa for up to 365 days, with a three-party training agreement. Interns studying in Estonia are covered by their study permit.',
        'Per studenti all’estero o laureati negli ultimi due anni: l’ente registra il tirocinio presso la polizia, poi si ottiene un visto D fino a 365 giorni, con una convenzione tripartita. Chi studia in Estonia è coperto dal permesso per studio.', 'EE-SRC-14 EE-SRC-01 EE-SRC-13']],
      f: [[['Fees', 'Costi'], ['€130 registration + €120 visa', '130 € registrazione + 120 € visto'], 'EE-SRC-04 EE-SRC-19']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['270 days after graduating', '270 giorni dopo la laurea'], law: 'Aliens Act § 43(5)',
      t: [
        ['After a degree in Estonia you may stay 270 days to find work or start a company, and work full time meanwhile.',
          'Dopo una laurea in Estonia si può restare 270 giorni per trovare lavoro o avviare un’impresa, lavorando a tempo pieno nel frattempo.', 'EE-SRC-01 EE-SRC-24'],
        ['An Estonian graduate who is hired skips the quota, the labour-market test and the average-salary rule: the minimum wage, €946 a month, is enough.',
          'Un laureato in Estonia che viene assunto salta la quota, il test del mercato e la soglia del salario medio: basta il salario minimo, 946 € al mese.', 'EE-SRC-01 EE-SRC-31 EE-SRC-09']
      ],
      w: ['The 270 days hold only inside Estonia: with an expired card you cannot travel in Schengen and come back.',
        'I 270 giorni valgono solo in Estonia: con la carta scaduta non si può viaggiare nello spazio Schengen e rientrare.', 'EE-SRC-01'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card, top specialist, ICT and start-up routes', 'Carta Blu UE, top specialist, ICT e start-up'], law: 'Aliens Act §§ 178¹, 181, 181¹, 189',
      t: [
        ['All four are outside the quota and need no labour-market test, and family can come at once.',
          'Tutti e quattro sono fuori quota e non richiedono il test del mercato, e la famiglia può arrivare subito.', 'EE-SRC-31 EE-SRC-23 EE-SRC-15'],
        ['The Blue Card needs a contract of six months and a degree or three years of experience in the last seven; ICT roles need only the average wage; start-ups certified by Startup Estonia may pay the minimum wage.',
          'La Carta Blu richiede un contratto di sei mesi e una laurea o tre anni di esperienza negli ultimi sette; i ruoli ICT richiedono solo il salario medio; le start-up certificate da Startup Estonia possono pagare il salario minimo.', 'EE-SRC-15 EE-SRC-01 EE-SRC-27 EE-SRC-09']
      ],
      f: [
        [['Salary, Blue Card and top specialist', 'Stipendio, Carta Blu e top specialist'], ['€3,138 a month gross', '3.138 € lordi al mese'], 'EE-SRC-08 EE-SRC-15'],
        [['Salary, Blue Card in shortage or STEM roles', 'Stipendio, Carta Blu in ruoli carenti o STEM'], ['€2,594.08 a month gross', '2.594,08 € lordi al mese'], 'EE-SRC-08 EE-SRC-15'],
        [['Salary, ICT', 'Stipendio, ICT'], ['€2,092 a month gross', '2.092 € lordi al mese'], 'EE-SRC-08'],
        [['Fees', 'Costi'], ['€250 in Estonia, €280 at an embassy', '250 € in Estonia, 280 € in ambasciata'], 'EE-SRC-04']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Short-term employment', 'Lavoro a breve termine'], law: 'Aliens Act § 106',
      t: [['The employer registers the job with the police; no quota and no labour-market test, but the pay must reach the Estonian average wage and the company must have traded for six months. Up to 365 days in any 455, then 90 days away.',
        'Il datore registra il lavoro presso la polizia; nessuna quota e nessun test del mercato, ma la paga deve raggiungere il salario medio estone e l’azienda deve operare da sei mesi. Fino a 365 giorni ogni 455, poi 90 giorni fuori.', 'EE-SRC-14 EE-SRC-01 EE-SRC-31 EE-SRC-23']],
      f: [
        [['Salary', 'Stipendio'], ['€2,092 a month gross', '2.092 € lordi al mese'], 'EE-SRC-08'],
        [['Fees', 'Costi'], ['€130 registration + €120 visa', '130 € registrazione + 120 € visto'], 'EE-SRC-04 EE-SRC-19']
      ] },

    { k: 'work', p: 'other', v: 'limited',
      name: ['Temporary residence permit for work', 'Permesso di soggiorno temporaneo per lavoro'], law: 'Aliens Act §§ 176–181',
      t: [['Needs a labour-market test by Töötukassa (three weeks of advertising) and a place in the yearly quota of 1,292, which usually runs out in the first weeks of the year. Employers often use short-term employment first.',
        'Richiede il test del mercato di Töötukassa (tre settimane di annuncio) e un posto nella quota annuale di 1.292, che di solito si esaurisce nelle prime settimane dell’anno. I datori spesso usano prima il lavoro a breve termine.', 'EE-SRC-23 EE-SRC-31']],
      f: [[['Salary', 'Stipendio'], ['€2,092 a month gross', '2.092 € lordi al mese'], 'EE-SRC-08']],
      w: ['After five years on this permit, renewal needs Estonian at A2.',
        'Dopo cinque anni con questo permesso, il rinnovo richiede l’estone a livello A2.', 'EE-SRC-01 EE-SRC-11'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'Aliens Act §§ 171–175',
      t: [
        ['A hosting agreement with an institution in the ETIS register; outside the quota, no labour-market test, family at once.',
          'Una convenzione di accoglienza con un ente iscritto al registro ETIS; fuori quota, nessun test del mercato, famiglia subito.', 'EE-SRC-16 EE-SRC-31'],
        ['Since 2022 PhD students are hired as junior research fellows on four-year contracts, with salary, public health cover and pension.',
          'Dal 2022 i dottorandi sono assunti come ricercatori junior con contratti di quattro anni, con stipendio, copertura sanitaria pubblica e pensione.', 'EE-SRC-25 EE-SRC-06']
      ],
      f: [[['Fees', 'Costi'], ['€225 in Estonia, €255 at an embassy; D visa €120', '225 € in Estonia, 255 € in ambasciata; visto D 120 €'], 'EE-SRC-04 EE-SRC-19']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Estonia’s working-holiday agreements are only with Australia, New Zealand, Canada and Japan.',
        'Gli accordi di vacanza-lavoro dell’Estonia sono solo con Australia, Nuova Zelanda, Canada e Giappone.', 'EE-SRC-21']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For citizens of the partner countries aged 18 to 30 (Canada 18 to 35): a D visa for 12 months, outside the quota.',
        'Per cittadini dei paesi partner dai 18 ai 30 anni (Canada dai 18 ai 35): un visto D di 12 mesi, fuori quota.', 'EE-SRC-21']],
      f: [[['Visa', 'Visto'], ['€120', '120 €'], 'EE-SRC-04']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180. Visa-free visitors may work only if the employer has registered short-term employment first.',
        'Fino a 90 giorni ogni 180. Chi è esente da visto può lavorare solo se il datore ha prima registrato il lavoro a breve termine.', 'EE-SRC-14 EE-SRC-01']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'EE-SRC-20']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Bring a valid passport or ID card and your European Health Insurance Card, which covers you until you are insured locally. You may work from day one; your employer must enter you in the employment register before you start.',
        'Porta un passaporto o una carta d’identità validi e la Tessera europea di assicurazione malattia, che ti copre finché non sei assicurato sul posto. Puoi lavorare dal primo giorno; il datore deve iscriverti nel registro dell’occupazione prima che inizi.', 'EE-SRC-02 EE-SRC-06 EE-SRC-29']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['For a first job, employers usually register short-term employment and you apply for a D visa (€120) at an Estonian embassy or visa centre: the temporary residence permit route is often closed by the annual quota.',
        'Per un primo lavoro, i datori di solito registrano il lavoro a breve termine e chiedi un visto D (120 €) presso un’ambasciata estone o un centro visti: la via del permesso di soggiorno temporaneo è spesso chiusa dalla quota annuale.', 'EE-SRC-14 EE-SRC-19 EE-SRC-31']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Staying over 3 months, register your residence in the population register within 3 months of arriving, at the local government office or the International House of Estonia in Tallinn, with your lease. It is done on the spot and starts your 5-year right of residence.',
        'Se resti oltre 3 mesi, registra la residenza nel registro della popolazione entro 3 mesi dall’arrivo, presso l’ufficio comunale o l’International House of Estonia a Tallinn, con il contratto d’affitto. Si fa in giornata e avvia il tuo diritto di soggiorno di 5 anni.', 'EE-SRC-02 EE-SRC-05']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['After arriving, register your address in the population register, and make sure your employer has entered you in the employment register before your first day of work.',
        'Dopo l’arrivo, registra l’indirizzo nel registro della popolazione, e verifica che il datore ti abbia iscritto nel registro dell’occupazione prima del primo giorno di lavoro.', 'EE-SRC-05 EE-SRC-29']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Within 1 month of registering, apply at a Police and Border Guard office (book at broneering.politsei.ee) for the Estonian ID card for EU citizens: €45, ready in 10 to 15 working days.',
        'Entro 1 mese dalla registrazione, chiedi presso un ufficio della Polizia e Guardia di frontiera (prenota su broneering.politsei.ee) la carta d’identità estone per cittadini UE: 45 €, pronta in 10-15 giorni lavorativi.', 'EE-SRC-03 EE-SRC-04 EE-SRC-17 EE-SRC-18']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['A temporary residence permit comes as a biometric residence card (elamisloakaart); a student permit costs €225 if you apply in Estonia, €255 at an embassy, decided within 2 months.',
        'Il permesso di soggiorno temporaneo è rilasciato come carta di soggiorno biometrica (elamisloakaart); quello per studio costa 225 € se fai domanda in Estonia, 255 € presso un’ambasciata, con decisione entro 2 mesi.', 'EE-SRC-03 EE-SRC-04 EE-SRC-13']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Registering in the population register gives you the Estonian personal identification code (isikukood), used for tax, health and every digital service.',
        'La registrazione nel registro della popolazione ti assegna il codice personale estone (isikukood), usato per fisco, sanità e tutti i servizi digitali.', 'EE-SRC-05 EE-SRC-02']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Public health cover (Tervisekassa) starts when your employer pays social tax for you, after a 14-day waiting period from your entry in the employment register.',
        'La copertura sanitaria pubblica (Tervisekassa) inizia quando il datore versa per te l’imposta sociale, dopo un periodo di carenza di 14 giorni dall’iscrizione nel registro dell’occupazione.', 'EE-SRC-06 EE-SRC-28']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Until then, and as a student, your European Health Insurance Card covers you.',
        'Fino ad allora, e da studente, ti copre la Tessera europea di assicurazione malattia.', 'EE-SRC-06']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['A study permit does not give public cover: keep compliant private insurance (ERGO, Inges, Swisscare) of at least €30,000 for the whole stay, unless you are employed.',
        'Il permesso per studio non dà la copertura pubblica: mantieni per tutto il soggiorno un’assicurazione privata conforme (ERGO, Inges, Swisscare) di almeno 30.000 €, a meno che tu non sia dipendente.', 'EE-SRC-26 EE-SRC-28']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['High-street banks charge newcomers a non-refundable identity-check fee of up to €250; your employer must accept a European IBAN (Wise, Revolut) for your pay. With an Estonian ID card, an account at LHV or Swedbank opens online for free.',
        'Le banche tradizionali fanno pagare ai nuovi arrivati una commissione non rimborsabile per le verifiche d’identità fino a 250 €; il datore deve accettare un IBAN europeo (Wise, Revolut) per lo stipendio. Con la carta d’identità estone, un conto presso LHV o Swedbank si apre online gratis.', 'EE-SRC-33'],
      ['The ID card is your digital ID: use it with the DigiDoc4 software and a card reader, then set up the Smart-ID app to log in and sign legally from your phone.',
        'La carta d’identità è la tua identità digitale: usala con il software DigiDoc4 e un lettore di carte, poi configura l’app Smart-ID per accedere e firmare con valore legale dal telefono.', 'EE-SRC-32']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['Your right of residence depends on a valid address in the population register: register a new flat within 30 days of moving, or the right lapses, and with it your health cover.',
        'Il diritto di soggiorno dipende da un indirizzo valido nel registro della popolazione: registra il nuovo appartamento entro 30 giorni dal trasloco, o il diritto decade, e con esso la copertura sanitaria.', 'EE-SRC-02 EE-SRC-05']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['A first permit application gives no right to stay while you wait: if your visa or visa-free days run out first, you must leave. Only a renewal filed at least 2 months before expiry keeps you legal until the decision.',
        'La prima domanda di permesso non dà diritto a restare durante l’attesa: se il visto o i giorni senza visto finiscono prima, devi partire. Solo un rinnovo presentato almeno 2 mesi prima della scadenza ti mantiene in regola fino alla decisione.', 'EE-SRC-01']
    ] }
  ],

  traps: [
    { p: 'eu', t: ['Your EU right of residence hangs on a registered address: move without re-registering within 30 days, or be struck off by the landlord, and it lapses.',
      'Il diritto di soggiorno UE dipende da un indirizzo registrato: se cambi casa senza registrarti entro 30 giorni, o il proprietario ti cancella, decade.', 'EE-SRC-02 EE-SRC-05'] },
    { p: 'eu uk us other', t: ['Address registration needs a proper lease or the owner’s consent, from every co-owner; cash-in-hand landlords block it.',
      'La registrazione dell’indirizzo richiede un contratto regolare o il consenso del proprietario, di tutti i comproprietari; chi affitta in nero la blocca.', 'EE-SRC-05'] },
    { p: 'uk us other', t: ['A first permit application gives no right to stay: if your visa-free days or visa run out before the decision, you must leave.',
      'Una prima domanda di permesso non dà diritto a restare: se i giorni in esenzione o il visto scadono prima della decisione, bisogna partire.', 'EE-SRC-01'] },
    { p: 'eu uk us other', t: ['Public health cover starts 14 days after the employer registers you; keep the EHIC or private insurance until then.',
      'La copertura sanitaria pubblica parte 14 giorni dopo l’iscrizione da parte del datore; fino ad allora tieni la tessera europea o un’assicurazione privata.', 'EE-SRC-06'] },
    { p: 'uk us other', t: ['e-Residency is a digital ID for running a company remotely: it gives no right to enter, live or work in Estonia.',
      'L’e-Residency è un’identità digitale per gestire un’azienda a distanza: non dà alcun diritto di entrare, vivere o lavorare in Estonia.', 'EE-SRC-03 EE-SRC-30'] }
  ],

  open: [
    { st: 'open', t: ['Police appointments in Tallinn are much scarcer in August to October and January than the booking site suggests.',
      'Gli appuntamenti con la polizia a Tallinn sono molto più scarsi ad agosto-ottobre e gennaio di quanto mostri il sito di prenotazione.'] },
    { st: 'open', t: ['Some embassies ask students for far more money than the legal €220 a month.',
      'Alcune ambasciate chiedono agli studenti molto più dei 220 € al mese previsti dalla legge.'] },
    { st: 'watch', t: ['Whether certified start-ups may pay just the minimum wage or must meet the scale-up threshold is still read differently by the police and Startup Estonia.',
      'Se le start-up certificate possano pagare solo il salario minimo o debbano rispettare la soglia delle scale-up è ancora letto in modo diverso da polizia e Startup Estonia.'] },
    { st: 'pending', t: ['Restrictions on Russian and Belarusian citizens are renewed by decree and keep changing.',
      'Le restrizioni per i cittadini russi e bielorussi sono rinnovate per decreto e continuano a cambiare.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/estonia/estonia_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('EE', {
  "EE-SRC-02": ["Riigi Teataja / Riigikogu: Euroopa Liidu kodaniku seadus (Citizen of the European Union Act","https://www.riigiteataja.ee/akt/ELKS","2026-10-05"],
  "EE-SRC-29": ["Maksu- ja Tolliamet (Agenzia delle Entrate): Registro dell'Occupazione (Töötamise register","https://www.emta.ee/en/business-client/registration-and-business/employment-register","2026-10-05"],
  "EE-SRC-05": ["Riigi Teataja / Riigikogu: Rahvastikuregistri seadus (Population Register Act","https://www.riigiteataja.ee/akt/RRS","2026-10-05"],
  "EE-SRC-04": ["Riigi Teataja / Riigikogu: Riigilõivuseadus (State Fees Act","https://www.riigiteataja.ee/akt/130122014001","2026-10-05"],
  "EE-SRC-13": ["Politsei- ja Piirivalveamet (PBGB): Istruzioni per il Permesso di Soggiorno Temporaneo per Studio (Tähtajaline elamisluba õppimiseks), requisiti, durata e…","https://www.politsei.ee/en/instructions/residence-permit-for-study","2026-10-05"],
  "EE-SRC-24": ["Study in Estonia / Harno: Guida ufficiale per studenti internazionali: diritti di lavoro senza limiti di ore, periodo di tolleranza post-laurea…","https://www.studyinestonia.ee","2026-10-05"],
  "EE-SRC-28": ["Eesti Tervisekassa: Fondo di Assicurazione Sanitaria Estone: condizioni di assicurazione, lavoratori dipendenti e studenti internazionali","https://www.tervisekassa.ee/en","2026-10-05"],
  "EE-SRC-26": ["Tallinna Tehnikaülikool (TalTech): Linee guida sanitarie e amministrative per studenti extra-UE: polizze private obbligatorie conformi (ERGO, Inges,…","https://taltech.ee/en/health-insurance","2026-10-05"],
  "EE-SRC-10": ["Riigieelarve seadus 2026 / Sotsiaalministeerium: Soglia minima di sussistenza (Toimetulekupiir) elevata a 220 €/mese per il 2026 (base legale per i mezzi di…","https://www.sm.ee/toimetulekutoetus","2026-10-05"],
  "EE-SRC-17": ["Politsei- ja Piirivalveamet (PBGB): Tabella ufficiale delle tariffe statali (Riigilõivude määrad): visti D, TRP studio/lavoro, carte d'identità e…","https://www.politsei.ee/en/instructions/rates-of-state-fee","2026-10-05"],
  "EE-SRC-14": ["Politsei- ja Piirivalveamet (PBGB): Procedura di Registrazione del Lavoro a Breve Termine (Lühiajalise töötamise registreerimine","https://www.politsei.ee/en/instructions/registration-of-short-term-employment","2026-10-05"],
  "EE-SRC-01": ["Riigi Teataja / Riigikogu: Välismaalaste seadus (Aliens Act","https://www.riigiteataja.ee/akt/106072023023","2026-10-05"],
  "EE-SRC-19": ["Välisministeerium: Portale visti estone: Visto nazionale per soggiorni di lunga durata (Visto D, tariffa 120 €), requisiti, modulistica e…","https://vm.ee/en/consular-visa-and-travel-information/visa-information/long-stay-d-visa","2026-10-05"],
  "EE-SRC-31": ["Siseministeerium: Regolamento quota annuale di immigrazione (Sisserände piirarv 2026, 1.292 posti) ed elenco tassativo delle esenzioni…","https://www.siseministeerium.ee","2026-10-05"],
  "EE-SRC-09": ["Riigi Teataja / Sotsiaalministeerium: Vabariigi Valitsuse määrus nr 36 (23.03.2026)","https://www.sm.ee/uudised/valitsus-kinnitas-tootasu-alammaaraks-946-eurot","2026-10-05"],
  "EE-SRC-23": ["Eesti Töötukassa (Cassa Disoccupazione): Autorizzazione all'assunzione di lavoratori stranieri (Töötukassa luba), test del mercato del lavoro (3 settimane) ed…","https://www.tootukassa.ee/en/services/work-and-study-estonia/permission-fill-job-alien","2026-10-05"],
  "EE-SRC-15": ["Politsei- ja Piirivalveamet (PBGB): Carta Blu UE (EL sinine kaart): requisiti contrattuali (min. 6 mesi), soglie 1,5x (3.138 €) e 1,24x STEM (2.594 €),…","https://www.politsei.ee/en/instructions/residence-permit-for-employment","2026-10-05"],
  "EE-SRC-27": ["Startup Estonia / EAS: Comitato di valutazione per Startup Visa (Startup Committee), qualificazione iduettevõte e soglia salariale agevolata…","https://startupestonia.ee/visa/","2026-10-05"],
  "EE-SRC-08": ["Statistikaamet (Statistics Estonia): Serie PA101/PA107 – Stipendio mensile lordo medio nazionale estone (2.092 €/mese consuntivo 2025, base di calcolo dei…","https://andmed.stat.ee/en/stat/majandus__palk-ja-toojeukulu__palk__aastastatistika/PA101","2026-10-05"],
  "EE-SRC-11": ["Politsei- ja Piirivalveamet (PBGB): Scheda informativa e criteri retributivi per il Permesso di Soggiorno Temporaneo per Lavoro (Tähtajaline elamisluba…","https://www.politsei.ee/en/instructions/residence-permit-for-employment","2026-10-05"],
  "EE-SRC-16": ["Politsei- ja Piirivalveamet (PBGB): Permesso di Soggiorno Temporaneo per Ricerca Scientifica (Teadustööks), Hosting Agreement e fellowship universitarie","https://www.politsei.ee/en/instructions/residence-permit-for-scientific-research","2026-10-05"],
  "EE-SRC-25": ["Tartu Ülikool (Università di Tartu): International Student Services & Riforma del dottorato 2022: contratto di lavoro dipendente Nooremteadur (Junior…","https://ut.ee/en/content/residence-permits-and-visas","2026-10-05"],
  "EE-SRC-06": ["Riigi Teataja / Riigikogu: Ravikindlustuse seadus (Health Insurance Act","https://www.riigiteataja.ee/akt/Ravikindlustuse%20seadus","2026-10-05"],
  "EE-SRC-21": ["Välisministeerium: Accordi bilaterali di vacanza-lavoro (Working Holiday Schemes): Australia, Nuova Zelanda, Canada e Giappone","https://vm.ee/en/consular-visa-and-travel-information/visa-information/working-holiday-visas","2026-10-05"],
  "EE-SRC-20": ["Välisministeerium: Visto Schengen di breve durata (Visto C, tariffa 90 € da giugno 2024), calcolatore 90/180 giorni","https://vm.ee/en/consular-visa-and-travel-information/visa-information/short-stay-schengen-visa","2026-10-05"],
  "EE-SRC-03": ["Riigi Teataja / Riigikogu: Isikut tõendavate dokumentide seadus (Identity Documents Act","https://www.riigiteataja.ee/akt/ITDS","2026-10-05"],
  "EE-SRC-18": ["Politsei- ja Piirivalveamet (PBGB): Sistema di prenotazione appuntamenti (broneering.politsei.ee) e portale self-service (iseteenindus.politsei.ee)","https://broneering.politsei.ee","2026-10-05"],
  "EE-SRC-33": ["Swedbank AS / SEB Pank / LHV Pank: Fogli informativi e condizioni contrattuali per non-residenti: commissione istruttoria KYC non rimborsabile (250 €) e…","https://www.swedbank.ee","2026-10-05"],
  "EE-SRC-32": ["Riigi Infosüsteemi Amet (RIA): Infrastruttura digitale e-Estonia: certificati digitali ID-kaart, software DigiDoc4, app Smart-ID e valore legale…","https://www.id.ee/en/","2026-10-05"],
  "EE-SRC-30": ["e-Residency Knowledge Base: Portale governativo e-Residency: perimetro giuridico dell'identità digitale per non residenti e divieto di…","https://learn.e-resident.gov.ee/hc/en-gb/articles/360000711978-What-is-e-Residency","2026-10-05"]
});

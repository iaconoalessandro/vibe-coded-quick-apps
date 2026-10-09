/* Visas and permits: Iceland. From research/visas_immigration/iceland/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'IS',
  folder: 'iceland',
  checked: '2026-10-05',
  review: '2027-04-05',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa or residence permit and are treated as Icelanders.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto né di permesso di soggiorno e sono trattati come gli islandesi.', 'IS-SRC-01'],
      ['Staying over three months, register your right of residence and address with Registers Iceland (forms A-260 and A-270) to get your ID number (kennitala); it is free.',
        'Per un soggiorno oltre i tre mesi si registrano diritto di soggiorno e indirizzo presso il registro nazionale (moduli A-260 e A-270) per ricevere il numero d’identità (kennitala); è gratuito.', 'IS-SRC-08'],
      ['Bring an S1 form for health cover from arrival; the address must be a proper residential property.',
        'Porta il modulo S1 per la copertura sanitaria dall’arrivo; l’indirizzo deve essere un immobile residenziale regolare.', 'IS-SRC-11 IS-SRC-10']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student residence permit', 'Permesso di soggiorno per studenti'], law: 'Lög nr. 80/2016',
      t: [
        ['Full-time study at a recognised Icelandic university; apply to the Directorate of Immigration (ÚTL) by 1 June for autumn or 1 October for spring.',
          'Studio a tempo pieno in un’università islandese riconosciuta; si fa domanda alla Direzione immigrazione (ÚTL) entro il 1° giugno per l’autunno o il 1° ottobre per la primavera.', 'IS-SRC-12'],
        ['Since 8 July 2026 students may work up to 60% of full time in term and full time in holidays without a separate work permit, but not before the card is issued and never self-employed.',
          'Dall’8 luglio 2026 gli studenti possono lavorare fino al 60% del tempo pieno durante le lezioni e a tempo pieno nelle vacanze senza permesso di lavoro separato, ma non prima del rilascio della carta e mai come autonomi.', 'IS-SRC-03 IS-SRC-04'],
        ['Renewal needs 75% of the year’s credits. Iceland does not apply the EU student-mobility rules, so exchange students from another EU country need their own permit.',
          'Il rinnovo richiede il 75% dei crediti dell’anno. L’Islanda non applica le regole UE sulla mobilità studentesca, quindi gli studenti in scambio da un altro paese UE hanno bisogno di un proprio permesso.', 'IS-SRC-03 IS-SRC-12']
      ],
      f: [
        [['Funds, from 18 May 2026', 'Mezzi, dal 18 maggio 2026'], ['ISK 259,951 a month (ISK 3,119,412 a year)', 'ISK 259.951 al mese (ISK 3.119.412 l’anno)'], 'IS-SRC-05'],
        [['Permit fee', 'Costo del permesso'], ['ISK 70,000', 'ISK 70.000'], 'IS-SRC-06'],
        [['University of Iceland registration fee', 'Iscrizione all’Università d’Islanda'], ['ISK 100,000 a year', 'ISK 100.000 l’anno'], 'IS-SRC-22']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Internship permit', 'Permesso per tirocinio'], law: 'Lög nr. 80/2016',
      t: [['Only for an internship that is a compulsory part of a degree you are studying abroad, with a training agreement and funds; internships after graduating or purely commercial ones are not allowed.',
        'Solo per un tirocinio che è parte obbligatoria di un corso che stai seguendo all’estero, con convenzione e mezzi; i tirocini dopo la laurea o puramente commerciali non sono ammessi.', 'IS-SRC-12 IS-SRC-05']],
      f: [[['Funds', 'Mezzi'], ['ISK 259,951 a month', 'ISK 259.951 al mese'], 'IS-SRC-05']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search permit after an Icelandic degree', 'Permesso per ricerca lavoro dopo una laurea islandese'], law: 'Lög nr. 80/2016',
      t: [['After a degree from an Icelandic university: up to 18 months (reduced from three years in July 2026) to find specialist work, which converts it from inside Iceland. PhD graduates get 12 months more on their specialist permit.',
        'Dopo una laurea in un’università islandese: fino a 18 mesi (ridotti da tre anni a luglio 2026) per trovare un lavoro da specialista, che lo converte dall’Islanda. Chi conclude un dottorato ottiene altri 12 mesi sul permesso da specialista.', 'IS-SRC-15 IS-SRC-03 IS-SRC-13']],
      f: [
        [['Funds', 'Mezzi'], ['ISK 259,951 a month', 'ISK 259.951 al mese'], 'IS-SRC-05'],
        [['Fee', 'Costo'], ['ISK 70,000', 'ISK 70.000'], 'IS-SRC-06']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Specialist permit', 'Permesso per specialisti'], law: 'Lög nr. 97/2002 art. 7',
      t: [['A degree or certified specialist training linked to the job and a contract at the collective-agreement rate; no labour-market test, a spouse may work at once, and permanent residence after four years (three with an Icelandic PhD).',
        'Una laurea o una formazione specialistica certificata legata al lavoro e un contratto alla paga del contratto collettivo; nessun test del mercato, il coniuge può lavorare subito, e residenza permanente dopo quattro anni (tre con un dottorato islandese).', 'IS-SRC-13 IS-SRC-20 IS-SRC-19']],
      f: [[['Fee', 'Costo'], ['ISK 80,000', 'ISK 80.000'], 'IS-SRC-06']] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Labour-shortage permit', 'Permesso per carenza di manodopera'], law: 'Lög nr. 97/2002 art. 8',
      t: [['The employer applies after advertising with the labour directorate and EURES and finding no Icelandic or EEA candidate; the union checks the pay. You wait abroad; the permit lasts a year, renewable once, and does not lead to permanent residence.',
        'Fa domanda il datore dopo aver pubblicato l’offerta presso la direzione del lavoro ed EURES senza trovare candidati islandesi o SEE; il sindacato verifica la paga. Si aspetta all’estero; il permesso dura un anno, rinnovabile una volta, e non porta alla residenza permanente.', 'IS-SRC-14 IS-SRC-07']],
      f: [[['Fee', 'Costo'], ['ISK 80,000', 'ISK 80.000'], 'IS-SRC-06']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researchers and PhDs', 'Ricercatori e dottorati'], law: 'Lög nr. 80/2016',
      t: [
        ['Visiting researchers can get a short-stay permit for 90 to 180 days; scholarship holders a special-purpose permit; researchers employed by a university the specialist permit. Teaching or conferences up to four weeks a year need no work permit.',
          'I ricercatori in visita possono ottenere un permesso breve da 90 a 180 giorni; i borsisti un permesso per motivo speciale; i ricercatori assunti da un’università il permesso da specialista. Insegnamento o conferenze fino a quattro settimane l’anno non richiedono permesso di lavoro.', 'IS-SRC-18 IS-SRC-06 IS-SRC-13 IS-SRC-02'],
        ['A PhD on a scholarship comes as a student; a salaried PhD as a specialist, with permanent residence after three years.',
          'Un dottorato con borsa entra come studente; uno stipendiato come specialista, con residenza permanente dopo tre anni.', 'IS-SRC-03 IS-SRC-13 IS-SRC-20']
      ],
      f: [[['Short research stay fee', 'Costo del soggiorno breve di ricerca'], ['ISK 12,200', 'ISK 12.200'], 'IS-SRC-06']] },

    { k: 'whv', p: 'uk', v: 'open',
      name: ['Youth mobility', 'Mobilità giovanile'], law: 'bilateral agreement',
      t: [['UK citizens aged 18 to 30 can get 12 months, renewable once, with an unrestricted work permit included, as long as work stays secondary to the holiday.',
        'I cittadini britannici dai 18 ai 30 anni possono ottenere 12 mesi, rinnovabili una volta, con un permesso di lavoro illimitato incluso, purché il lavoro resti secondario rispetto alla vacanza.', 'IS-SRC-17']],
      f: [[['Fee', 'Costo'], ['ISK 40,000', 'ISK 40.000'], 'IS-SRC-06']] },

    { k: 'whv', p: 'us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Iceland has youth-mobility agreements only with the UK, Canada, Japan, Andorra and Chile.',
        'L’Islanda ha accordi di mobilità giovanile solo con Regno Unito, Canada, Giappone, Andorra e Cile.', 'IS-SRC-17']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For citizens of Canada, Japan, Andorra and Chile aged 18 to 30: 12 months, renewable once except for Japanese citizens, who pay no fee.',
        'Per cittadini di Canada, Giappone, Andorra e Cile dai 18 ai 30 anni: 12 mesi, rinnovabili una volta tranne per i giapponesi, che non pagano la tassa.', 'IS-SRC-17 IS-SRC-06']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180 with no work. Applying for a permit while visa-free does not stop the 90-day clock: past day 90 without a decision you are unlawfully present.',
        'Fino a 90 giorni ogni 180 senza lavorare. Fare domanda di permesso mentre si è esenti da visto non ferma il conteggio dei 90 giorni: oltre il 90° giorno senza decisione il soggiorno è irregolare.', 'IS-SRC-07']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Rent only a flat registered as a dwelling and without a clause banning registration: a lease in a commercial or industrial building cannot be your legal domicile and is grounds for refusing a permit.',
        'Affitta solo un alloggio accatastato come abitazione e senza clausole che vietino la registrazione: un contratto in un immobile commerciale o industriale non può essere il tuo domicilio legale ed è motivo di rifiuto del permesso.', 'IS-SRC-10']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['If you need a visa, you may not wait in Iceland while a first application is decided; if you are visa-free, applying does not stop your 90 Schengen days. Get the criminal record and translations apostilled.',
        'Se hai bisogno del visto, non puoi attendere in Islanda la decisione su una prima domanda; se sei esente da visto, la domanda non ferma i tuoi 90 giorni Schengen. Fai apostillare casellario giudiziale e traduzioni.', 'IS-SRC-07 IS-SRC-01']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Staying over 3 months, register with Registers Iceland: form A-260 for your right of residence and A-270 for your domicile, with your work contract; students use form A-271 within 3 months, with enrolment, a statement of funds and the European Health Insurance Card. It is free.',
        'Se resti oltre 3 mesi, registrati presso Registers Iceland: modulo A-260 per il diritto di soggiorno e A-270 per il domicilio, con il contratto di lavoro; gli studenti usano il modulo A-271 entro 3 mesi, con iscrizione, dichiarazione dei mezzi e Tessera europea di assicurazione malattia. È gratuito.', 'IS-SRC-08 IS-SRC-09']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['Register your legal domicile with Registers Iceland (forms A-270 or A-271) once the permit is approved: it unlocks housing benefit and starts the clock for public health cover.',
        'Registra il domicilio legale presso Registers Iceland (moduli A-270 o A-271) dopo l’approvazione del permesso: sblocca il sussidio per l’alloggio e fa partire il conteggio per la copertura sanitaria pubblica.', 'IS-SRC-10 IS-SRC-11']
    ] },
    { k: 'card', p: 'eu', t: [
      ['None beyond the registration: EEA citizens get no residence card.',
        'Nessuno oltre alla registrazione: i cittadini SEE non ricevono una carta di soggiorno.', 'IS-SRC-08']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['There is no biometrics desk at Keflavík airport: book an appointment at the Directorate of Immigration’s service centre to give photo and fingerprints for the residence card.',
        'All’aeroporto di Keflavík non c’è uno sportello per i dati biometrici: prenota un appuntamento al centro servizi della Direzione per l’immigrazione per foto e impronte per la carta di soggiorno.', 'IS-SRC-31']
    ] },
    { k: 'card', p: 'uk other', t: [
      ['Citizens of non-EEA Europe (including the UK), Asia, Africa and Latin America must have a medical check for infectious diseases after arriving before the permit and card are issued.',
        'I cittadini dell’Europa non SEE (Regno Unito compreso), dell’Asia, dell’Africa e dell’America latina devono sottoporsi dopo l’arrivo a una visita per malattie infettive prima del rilascio di permesso e carta.', 'IS-SRC-33']
    ] },
    { k: 'card', p: 'us', t: [
      ['US citizens are exempt from the medical check required of many other nationalities.',
        'I cittadini statunitensi sono esenti dalla visita medica richiesta a molte altre nazionalità.', 'IS-SRC-33']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your national ID number (kennitala) comes with the EEA registration, or is generated for others after biometrics and permit approval; state, university and contract systems all use it.',
        'Il codice nazionale (kennitala) arriva con la registrazione SEE, o viene generato per gli altri dopo i dati biometrici e l’approvazione del permesso; lo usano tutti i sistemi pubblici, universitari e contrattuali.', 'IS-SRC-08']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Show the S1 (or E104) form on arrival for immediate public cover; students use the European Health Insurance Card.',
        'Presenta all’arrivo il modulo S1 (o E104) per la copertura pubblica immediata; gli studenti usano la Tessera europea di assicurazione malattia.', 'IS-SRC-11']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Public cover starts after 3 months of registered domicile (6 months before 1 August 2026); until then you need private insurance of at least 2,000,000 ISK, valid from the day you register.',
        'La copertura pubblica inizia dopo 3 mesi di domicilio registrato (6 mesi prima del 1° agosto 2026); fino ad allora serve un’assicurazione privata di almeno 2.000.000 ISK, valida dal giorno della registrazione.', 'IS-SRC-11']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Get the electronic ID (rafræn skilríki) in person with your kennitala, passport and an Icelandic phone number: it opens island.is, the health portal, the tax office and online banking. Banks then open an account with your kennitala, passport, proof of domicile and work or study contract.',
        'Ottieni l’identità elettronica (rafræn skilríki) di persona con kennitala, passaporto e un numero di telefono islandese: apre island.is, il portale sanitario, il fisco e l’home banking. Le banche aprono poi un conto con kennitala, passaporto, prova del domicilio e contratto di lavoro o studio.', 'IS-SRC-32']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to renew on island.is at least 4 weeks before your card expires: a late application is treated as a first one, ending your right to work and resetting the 4 years counted towards permanent residence. Students must pass 75% of a year’s credits to renew.',
        'Chiedi il rinnovo su island.is almeno 4 settimane prima della scadenza della carta: una domanda tardiva è trattata come prima domanda, fa cessare il diritto al lavoro e azzera i 4 anni maturati per la residenza permanente. Gli studenti devono superare il 75% dei crediti annui per rinnovare.', 'IS-SRC-16 IS-SRC-20 IS-SRC-12']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['Renew at least four weeks before your card expires: a late application is treated as a first one, stopping your right to work and resetting the years towards permanent residence.',
      'Rinnova almeno quattro settimane prima della scadenza della carta: una domanda tardiva è trattata come prima domanda, interrompe il diritto al lavoro e azzera gli anni per la residenza permanente.', 'IS-SRC-16 IS-SRC-20'] },
    { p: 'uk us other', t: ['Private health insurance must cover at least ISK 2,000,000 from the day you register your address; non-EEA arrivals get public cover after three months.',
      'L’assicurazione sanitaria privata deve coprire almeno ISK 2.000.000 dal giorno della registrazione dell’indirizzo; chi arriva da fuori SEE ha la copertura pubblica dopo tre mesi.', 'IS-SRC-11'] },
    { p: 'eu uk us other', t: ['A lease in a commercial building, or one forbidding registration, blocks your address registration and permit.',
      'Un affitto in un immobile commerciale, o che vieta la registrazione, blocca l’iscrizione dell’indirizzo e il permesso.', 'IS-SRC-10'] },
    { p: 'uk us other', t: ['Criminal records and translations without an apostille are a common reason for refusal.',
      'Casellari e traduzioni senza apostille sono un motivo frequente di rifiuto.', 'IS-SRC-01'] }
  ],

  open: [
    { st: 'pending', t: ['Public universities may charge non-EEA students tuition from autumn 2027; the fee tables are not yet set.',
      'Le università pubbliche potranno far pagare le tasse agli studenti extra-SEE dall’autunno 2027; le tariffe non sono ancora fissate.'] },
    { st: 'watch', t: ['Work permits moved from the labour directorate to ÚTL on 8 July 2026, slowing first applications this autumn.',
      'I permessi di lavoro sono passati dalla direzione del lavoro all’ÚTL l’8 luglio 2026, rallentando le prime domande in autunno.'] },
    { st: 'open', t: ['Newcomers without an Icelandic biometric passport wait three to six weeks for an in-person bank appointment to activate the electronic ID.',
      'I nuovi arrivati senza passaporto biometrico islandese aspettano da tre a sei settimane un appuntamento in banca per attivare l’identità elettronica.'] },
    { st: 'open', t: ['Many Reykjavík landlords still rent off the books and refuse address registration.',
      'Molti proprietari a Reykjavík affittano ancora in nero e rifiutano la registrazione dell’indirizzo.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/iceland/iceland_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('IS', {
  "IS-SRC-01": ["Alþingi: Lög um útlendinga nr. 80/2016 (Legge sugli Stranieri, Cap. XI: Libera circolazione e soggiorno cittadini SEE/EFTA).","https://www.althingi.is/lagas/nuna/2016080.html","2026-10-05"],
  "IS-SRC-08": ["Þjóðskrá Íslands: Moving to Iceland / EEA and EFTA citizens (Registrazione soggiorno cittadini UE/SEE oltre 3 mesi, Modulo A-260 e…","https://www.skra.is/english/people/change-of-address/moving-to-iceland/i-am-an-eea-efta-citizen/","2026-10-05"],
  "IS-SRC-11": ["Sjúkratryggingar / island.is: Health insurance for residence permits & Riforma 1 agosto 2026 (Riduzione periodo di carenza per extra-SEE da 6 a 3…","https://island.is/en/health-insurance","2026-10-05"],
  "IS-SRC-10": ["Alþingi: Lög um lögheimili og aðsetur nr. 80/2018 (Legge sul Domicilio Legale e Residenza: vincolo di accatastamento…","https://www.althingi.is/lagas/nuna/2018080.html","2026-10-05"],
  "IS-SRC-12": ["Útlendingastofnun: Residence permit for students (Requisiti Modulo D-108, studio full-time, limite lavoro 60% FTE, divieto lavoro…","https://island.is/en/residence-permit-students","2026-10-05"],
  "IS-SRC-03": ["Alþingi / ÚTL: New residence and work permit rules take effect (Riforma dell'8 luglio 2026: lavoro studenti al 60% senza permesso,…","https://island.is/en/o/directorate-of-immigration/news/new-residence-and-work-permit-rules-take-effect","2026-10-05"],
  "IS-SRC-04": ["Útlendingastofnun: Student permit holders no longer need work permits (Decreto attuativo 29 giugno 2026: soppressione permesso di lavoro…","https://island.is/en/o/directorate-of-immigration/news/student-residence-permits-work-permits-no-longer-required","2026-10-05"],
  "IS-SRC-05": ["Útlendingastofnun: Higher amount required as means of support (Aggiornamento soglie di sussistenza al 18 maggio 2026: 259.951 ISK/mese…","https://island.is/en/o/directorate-of-immigration/news/higher-amount-as-means-of-support","2026-10-05"],
  "IS-SRC-06": ["Fees / Processing fees (Gjaldskrá Útlendingastofnunar) (Tariffario in vigore dal 1° gennaio 2026: D-107 lavoro 80.000…","https://island.is/en/o/directorate-of-immigration/fees","2026-10-05"],
  "IS-SRC-22": ["Háskóli Íslands (HÍ): Tuition and Registration Fees (Tassa di registrazione A.A. 2026/2027 a 100.000 ISK","https://www.hi.is","2026-10-05"],
  "IS-SRC-15": ["Útlendingastofnun: Residence permit after graduation (Estensione D-108 fino a 18 mesi per ricerca lavoro qualificato post-laurea ateneo…","https://island.is/en/residence-permit-students","2026-10-05"],
  "IS-SRC-13": ["Útlendingastofnun: Residence permit for specialists / expert knowledge (Modulo D-107, deroga labour market test, qualifica accademica,…","https://island.is/en/expert-knowledge-temporary-work-permit","2026-10-05"],
  "IS-SRC-20": ["Útlendingastofnun: Permanent residence permit (Ótímabundið dvalarleyfi) (Requisito di 4 anni ininterrotti, esame di lingua islandese,…","https://island.is/en/permanent-residence-permit","2026-10-05"],
  "IS-SRC-19": ["Útlendingastofnun: Family reunification (Modulo D-101 coniuge tariffa 110.000 ISK, D-102 minori 60.000 ISK","https://island.is/en/family-reunification","2026-10-05"],
  "IS-SRC-14": ["Útlendingastofnun: Residence permit based on labour shortage (Modulo D-107, test prioritario SEE, annuncio EURES, visto preventivo…","https://island.is/en/work-permit-labour-shortage","2026-10-05"],
  "IS-SRC-07": ["Útlendingastofnun: Staying in Iceland when applying for a residence permit (Divieto di attesa in loco per extra-UE con visto","https://island.is/en/staying-in-iceland-when-applying","2026-10-05"],
  "IS-SRC-18": ["Útlendingastofnun: Skammtímadvalarleyfi (Permesso per soggiorni brevi da 90 a 180 giorni per ricercatori, scienziati, artisti","https://island.is/en/o/directorate-of-immigration/fees","2026-10-05"],
  "IS-SRC-02": ["Alþingi: Lög um atvinnuréttindi útlendinga nr. 97/2002 (Legge sui Diritti di Lavoro dei Cittadini Stranieri, Art. 7…","https://www.althingi.is/lagas/nuna/2002097.html","2026-10-05"],
  "IS-SRC-17": ["Útlendingastofnun: Youth Mobility / Working Holiday Schemes (Accordi con UK, Canada, Giappone, Andorra, Cile","https://island.is/en/o/directorate-of-immigration/applications-and-forms","2026-10-05"],
  "IS-SRC-09": ["Þjóðskrá Íslands: EEA/EFTA student registration (Registrazione domicilio per studenti SEE entro 3 mesi, Modulo A-271, dichiarazione…","https://www.skra.is/english/people/change-of-address/moving-to-iceland/i-am-an-eea-efta-citizen/staying-more-than-6-months/i-am-a-student/","2026-10-05"],
  "IS-SRC-31": ["ÚTL / Noona / Isavia: Biometric booking and service center (Assenza presidio biometrico a Keflavík KEF","https://www.noona.is/utlendingastofnun","2026-10-05"],
  "IS-SRC-33": ["Útlendingastofnun (Directorate of Immigration) / island.is: https://island.is/en/help/directorate-of-immigration/residence-permit-general-conditions/thurfa-allir-ad-gangast-undir-…","https://island.is/en/help/directorate-of-immigration/residence-permit-general-conditions/thurfa-allir-ad-gangast-undir-laeknisskodun-til-ad-fa-utgefid-dvalarleyfi","2026-10-05"],
  "IS-SRC-32": ["Auðkenni / Landsbankinn: Onboarding e Rafræn skilríki per cittadini esteri (Requisiti per identità digitale, attivazione in presenza con…","https://www.audkenni.is","2026-10-05"],
  "IS-SRC-16": ["Útlendingastofnun: Renewal of residence permit (Termine perentorio 4 settimane prima della scadenza","https://island.is/en/renewal-of-residence-permit","2026-10-05"]
});

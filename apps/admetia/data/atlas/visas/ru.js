/* Visas and permits: Russia. From research/visas_immigration/russia/
 * (guide, source register, open questions), council check of 5 Oct 2026 and the
 * HQS note of 6 Oct 2026. EU and UK passports only. */
ATLAS.addVisas({
  id: 'RU',
  folder: 'russia',
  checked: '2026-10-06',
  review: '2027-02-28',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Study visa and RVPO permit', 'Visto di studio e permesso RVPO'], law: 'Art. 6.2 Law 115-FZ',
      t: [
        ['The university requests an invitation from the Interior Ministry; you then get a 90-day study visa. Full-time students can switch to the RVPO permit, valid for the whole course plus 180 days, with a multi-entry visa and public health cover.',
          'L’università chiede l’invito al ministero dell’Interno; poi si ottiene un visto di studio di 90 giorni. Gli studenti a tempo pieno possono passare al permesso RVPO, valido per tutto il corso più 180 giorni, con visto multiplo e copertura sanitaria pubblica.', 'RU-SRC-08 RU-SRC-04'],
        ['Full-time students may work in their free time with no work permit.',
          'Gli studenti a tempo pieno possono lavorare nel tempo libero senza permesso di lavoro.', 'RU-SRC-05 RU-SRC-01'],
        ['Erasmus+ links with Russian universities are suspended: only direct agreements between universities, or enrolling on your own, remain.',
          'I legami Erasmus+ con le università russe sono sospesi: restano solo accordi diretti tra atenei, o l’iscrizione individuale.', 'RU-SRC-32 RU-SRC-01']
      ],
      f: [
        [['Fees', 'Costi'], ['visa €80 + €30 centre; invitation 8,000 RUB; RVPO 8,000 RUB', 'visto 80 € + 30 € centro; invito 8.000 RUB; RVPO 8.000 RUB'], 'RU-SRC-09 RU-SRC-27 RU-SRC-08']
      ] },

    { k: 'intern', p: 'eu uk', v: 'limited',
      name: ['Internships', 'Tirocini'], law: 'Law 114-FZ',
      t: [['There is no internship visa. Students enrolled in Russia are covered; others can come only through a university traineeship on a study visa, or be hired as ordinary or highly qualified employees. An internship on a business or tourist visa means expulsion.',
        'Non esiste un visto per tirocinio. Gli iscritti in Russia sono coperti; gli altri possono venire solo con uno stage universitario su visto di studio, o essere assunti come dipendenti ordinari o altamente qualificati. Un tirocinio con visto d’affari o turistico porta all’espulsione.', 'RU-SRC-02 RU-SRC-29 RU-SRC-04 RU-SRC-14']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['After a Russian degree', 'Dopo una laurea russa'], law: 'Art. 8 Law 115-FZ',
      t: [['The RVPO stays valid 180 days after graduating, with the right to work. RVPO holders can apply for a permanent residence permit within three years of graduating, honours graduates at once; other graduates get a temporary permit outside the quota.',
        'L’RVPO resta valido 180 giorni dopo la laurea, con diritto di lavorare. I titolari di RVPO possono chiedere il permesso di soggiorno permanente entro tre anni dalla laurea, i laureati con lode subito; gli altri laureati ottengono un permesso temporaneo fuori quota.', 'RU-SRC-04 RU-SRC-01']],
      f: [[['Fees, permanent residence permit', 'Costi, permesso permanente'], ['30,000 RUB', '30.000 RUB'], 'RU-SRC-08']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Highly qualified specialist (HQS)', 'Specialista altamente qualificato (HQS)'], law: 'Art. 13.2 Law 115-FZ',
      t: [
        ['Outside the quota, with no employer pre-approval and no Russian-language exam: a three-year multi-entry work visa and permit. After two years, a permanent residence permit for you and your family.',
          'Fuori quota, senza autorizzazione preventiva del datore e senza esame di russo: visto di lavoro multiplo e permesso di tre anni. Dopo due anni, un permesso di soggiorno permanente per te e la famiglia.', 'RU-SRC-01 RU-SRC-03'],
        ['From 1 March 2027 the floor becomes 717,000 RUB a month, or 358,500 for teachers, doctors, researchers and some IT firms.',
          'Dal 1° marzo 2027 la soglia diventa 717.000 RUB al mese, o 358.500 per docenti, medici, ricercatori e alcune aziende IT.', 'RU-SRC-33']
      ],
      f: [
        [['Salary until February 2027', 'Stipendio fino a febbraio 2027'], ['750,000 RUB a quarter', '750.000 RUB a trimestre'], 'RU-SRC-03'],
        [['Fees', 'Costi'], ['visa €240 + €30 centre; permit 5,000 RUB', 'visto 240 € + 30 € centro; permesso 5.000 RUB'], 'RU-SRC-09 RU-SRC-27 RU-SRC-08']
      ],
      w: ['Pay below the threshold in any quarter, even through sick leave, and the status ends.',
        'Se la paga scende sotto la soglia in un trimestre, anche per malattia, lo status decade.', 'RU-SRC-03'] },

    { k: 'work', p: 'eu uk', v: 'limited',
      name: ['Ordinary work permit', 'Permesso di lavoro ordinario'], law: 'Law 115-FZ',
      t: [['Ordinary hiring goes through yearly quotas the employer requests by 1 July of the year before, with 30 days of advertising; then a 90-day work visa becomes a one-year one in Russia.',
        'Le assunzioni ordinarie passano dalle quote annuali che il datore chiede entro il 1° luglio dell’anno prima, con 30 giorni di annuncio; poi un visto di lavoro di 90 giorni diventa annuale in Russia.', 'RU-SRC-01 RU-SRC-29']],
      f: [[['State fees', 'Imposte statali'], ['employer 15,000 RUB; permit 5,000 RUB; invitation 8,000 RUB', 'datore 15.000 RUB; permesso 5.000 RUB; invito 8.000 RUB'], 'RU-SRC-08']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Teachers and researchers', 'Docenti e ricercatori'], law: 'Art. 13(4) Law 115-FZ',
      t: [
        ['Teachers and researchers invited by accredited universities or institutes need no work permit and no quota; from 83,500 RUB a month the host can use the three-year HQS route.',
          'Docenti e ricercatori invitati da università o istituti accreditati non hanno bisogno di permesso di lavoro né di quota; da 83.500 RUB al mese l’ente può usare il percorso HQS di tre anni.', 'RU-SRC-01'],
        ['Short scientific visits use a humanitarian visa: at most 90 days in any 180, with no Russian salary.',
          'Le brevi visite scientifiche usano un visto umanitario: al massimo 90 giorni ogni 180, senza stipendio russo.', 'RU-SRC-02 RU-SRC-29'],
        ['Full-time PhD students get the RVPO for the whole programme plus 180 days, and may teach without a work permit.',
          'I dottorandi a tempo pieno ottengono l’RVPO per tutto il programma più 180 giorni, e possono insegnare senza permesso di lavoro.', 'RU-SRC-04 RU-SRC-01']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Russia has no working-holiday agreements; casual work on a short visa leads to expulsion and a five-year ban.',
        'La Russia non ha accordi di vacanza-lavoro; lavorare saltuariamente con un visto breve porta all’espulsione e a un divieto di cinque anni.', 'RU-SRC-02 RU-SRC-14']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['E-visa or tourist visa', 'Visto elettronico o turistico'], law: 'Law 114-FZ',
      t: [
        ['EU citizens can get a single-entry e-visa: up to 30 days, used within 120 days of issue, not extendable or convertible. British citizens are excluded and need a paper visa with a tour operator’s confirmation.',
          'I cittadini UE possono ottenere un visto elettronico a ingresso singolo: fino a 30 giorni, da usare entro 120 giorni dal rilascio, non prorogabile né convertibile. I britannici ne sono esclusi e hanno bisogno di un visto cartaceo con la conferma di un tour operator.', 'RU-SRC-17 RU-SRC-27'],
        ['A business visa runs up to a year, at most 90 days in any 180.',
          'Un visto d’affari dura fino a un anno, al massimo 90 giorni ogni 180.', 'RU-SRC-02']
      ],
      f: [
        [['E-visa', 'Visto elettronico'], ['about $52', 'circa 52 $'], 'RU-SRC-17'],
        [['Paper visa', 'Visto cartaceo'], ['€80 + €30 centre', '80 € + 30 € centro'], 'RU-SRC-09 RU-SRC-27']
      ] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['EU countries and the UK are on Russia’s list of “unfriendly” states: visa fees are four times higher and consulates can take up to 8 weeks.',
        'I paesi UE e il Regno Unito sono nell’elenco russo degli Stati “ostili”: le tariffe dei visti sono quadruplicate e i consolati possono impiegare fino a 8 settimane.', 'RU-SRC-22 RU-SRC-09'],
      ['Apostille documents at home, but have them translated with a notarised translation made in Russia: sworn translations from European courts have no legal value there.',
        'Fai apporre l’apostille ai documenti nel tuo paese, ma falli tradurre con una traduzione autenticata da un notaio in Russia: le traduzioni giurate dei tribunali europei lì non hanno valore legale.', 'RU-SRC-01'],
      ['European Visa, Mastercard and Amex cards do not work, and taking more than USD 10,000 in foreign currency out of Russia is a criminal offence.',
        'Le carte europee Visa, Mastercard e Amex non funzionano, e portare fuori dalla Russia più di 10.000 USD in valuta estera è un reato penale.', 'RU-SRC-20 RU-SRC-21 RU-SRC-15']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['You must be registered with the migration authorities within 7 working days. Most private landlords refuse to register tenants, and registrations bought online are a crime: stay in an accredited hotel or residence for the first weeks.',
        'Devi essere registrato presso le autorità migratorie entro 7 giorni lavorativi. La maggior parte dei proprietari privati rifiuta di registrare gli inquilini, e le registrazioni comprate online sono un reato: alloggia in un albergo o residence accreditato nelle prime settimane.', 'RU-SRC-13 RU-SRC-15']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Since 1 September 2026 workers, students and family members must complete the medical screening and biometrics (photo and fingerprints) within 30 calendar days of entering; missing it means an order to leave within 3 days.',
        'Dal 1° settembre 2026 lavoratori, studenti e familiari devono completare lo screening medico e i dati biometrici (foto e impronte) entro 30 giorni di calendario dall’ingresso; non farlo significa un ordine di lasciare il paese entro 3 giorni.', 'RU-SRC-07 RU-SRC-06 RU-SRC-01'],
      ['Always carry the originals: passport with visa, migration card and registration slip. Copies or phone photos are not accepted by the police.',
        'Porta sempre con te gli originali: passaporto con visto, carta di migrazione e tagliando di registrazione. Copie o foto sul telefono non sono accettate dalla polizia.', 'RU-SRC-13 RU-SRC-14']
    ] },
    { k: 'number', p: 'eu uk', none: true },
    { k: 'health', p: 'eu uk', t: [
      ['The compulsory medical screening includes a drug test: medicines containing codeine, methylphenidate or psychotropics can test positive and lead to criminal charges.',
        'Lo screening medico obbligatorio comprende un test tossicologico: farmaci con codeina, metilfenidato o psicotropi possono risultare positivi e portare ad accuse penali.', 'RU-SRC-07 RU-SRC-15']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['A permit application receipt keeps you legal in Russia even if your visa expires, but you must not leave: crossing the border cancels the application.',
        'La ricevuta della domanda di permesso ti mantiene in regola in Russia anche se il visto scade, ma non devi partire: attraversare la frontiera annulla la domanda.', 'RU-SRC-01 RU-SRC-02'],
      ['Border officers may inspect your phone, chats and social media; a donation to Ukrainian causes, even a small one, can be prosecuted as treason.',
        'Gli agenti di frontiera possono ispezionare telefono, chat e social network; una donazione a cause ucraine, anche piccola, può essere perseguita come alto tradimento.', 'RU-SRC-02 RU-SRC-15']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['All EU countries and the UK are on Russia’s “unfriendly” list: consular fees are four times higher and visas can take eight weeks.',
      'Tutti i paesi UE e il Regno Unito sono nella lista dei paesi “ostili”: le tariffe consolari sono quadruplicate e i visti possono richiedere otto settimane.', 'RU-SRC-22 RU-SRC-09'] },
    { p: 'eu uk', t: ['You must be registered at your address within seven working days; most private landlords refuse, and bought registrations are a crime.',
      'Bisogna essere registrati all’indirizzo entro sette giorni lavorativi; la maggior parte dei proprietari privati rifiuta, e le registrazioni comprate sono un reato.', 'RU-SRC-13 RU-SRC-15'] },
    { p: 'eu uk', t: ['Staying over 90 days, you must finish medical checks and fingerprinting within 30 days of entry, or be ordered to leave within three days.',
      'Restando oltre 90 giorni, si devono completare visite mediche e impronte entro 30 giorni dall’ingresso, o arriva l’ordine di partire entro tre giorni.', 'RU-SRC-07 RU-SRC-01'] },
    { p: 'eu uk', t: ['European Visa, Mastercard and Amex cards do not work: bring cash and open a MIR card on arrival.',
      'Le carte Visa, Mastercard e Amex europee non funzionano: porta contanti e apri una carta MIR all’arrivo.', 'RU-SRC-20 RU-SRC-21'] },
    { p: 'eu uk', t: ['Border guards may search phones and chats; donations to Ukrainian causes have led to treason charges.',
      'Le guardie di frontiera possono controllare telefoni e chat; donazioni a cause ucraine hanno portato ad accuse di alto tradimento.', 'RU-SRC-02 RU-SRC-15'] },
    { p: 'eu', t: ['An e-visa is not valid for entering by land from Belarus.',
      'Il visto elettronico non vale per entrare via terra dalla Bielorussia.', 'RU-SRC-19'] },
    { p: 'eu uk', t: ['Sworn translations made in Europe are not accepted: apostille the original and have it translated by a notarised translator in Russia.',
      'Le traduzioni giurate fatte in Europa non sono accettate: si appone l’apostille all’originale e lo si fa tradurre da un traduttore con autentica notarile in Russia.', 'RU-SRC-01'] }
  ],

  open: [
    { st: 'watch', t: ['How strictly the new 30-day deadline for medical checks is applied to students.',
      'Quanto rigidamente viene applicato agli studenti il nuovo termine di 30 giorni per le visite mediche.'] },
    { st: 'pending', t: ['The higher HQS salary floor from 1 March 2027 is reported by secondary legal sources only.',
      'La soglia HQS più alta dal 1° marzo 2027 è riportata solo da fonti giuridiche secondarie.'] },
    { st: 'open', t: ['Consular appointments in southern Italy are scarce since the Palermo visa centre closed.',
      'Gli appuntamenti consolari nel Sud Italia scarseggiano da quando il centro visti di Palermo ha chiuso.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/russia/russia_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('RU', {
  "RU-SRC-08": ["Legge Federale 26.06.2026 n. 190-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=603912045","2026-10-05"],
  "RU-SRC-04": ["Legge Federale 14.07.2022 n. 357-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=602796245","2026-10-05"],
  "RU-SRC-05": ["Legge Federale 06.02.2020 n. 16-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102657351","2026-10-05"],
  "RU-SRC-01": ["Legge Federale 25.07.2002 n. 115-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102077054","2026-10-05"],
  "RU-SRC-32": ["Regolamento (UE) 2022/576 e Decisione UE 2022/1500","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32022R0576","2026-10-05"],
  "RU-SRC-09": ["Legge Federale 25.12.2023 n. 646-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=603758912","2026-10-05"],
  "RU-SRC-27": ["Centro Visti per la Russia in Italia: INTERLINK S.r.l. - visa-it.com","https://visa-it.com","2026-10-05"],
  "RU-SRC-02": ["Legge Federale 15.08.1996 n. 114-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102042838","2026-10-05"],
  "RU-SRC-29": ["Decreto Governativo 09.06.2003 n. 335","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102081977","2026-10-05"],
  "RU-SRC-14": ["Codice degli Illeciti Amministrativi (KoAP RF)","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102073832","2026-10-05"],
  "RU-SRC-03": ["Legge Federale 10.07.2023 n. 316-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=603681438","2026-10-05"],
  "RU-SRC-33": ["PPT.ru / Schneider Group (fonti giuridiche secondarie): Soglie HQS dal 01/03/2027 – modifica della legge 115-FZ (L. 26/07/2026 n. 241-FZ)","https://ppt.ru/news/trudoustrojstvo-inostrannyh-grazhdan/podnyali-porog-zarplaty-dlya-nayma-inostrannykh-vks","2026-10-06"],
  "RU-SRC-17": ["MID Rossii: Portale Ufficiale E-Visa Unificato","https://electronic-visa.kdmid.ru","2026-10-05"],
  "RU-SRC-22": ["Disposizione Governativa 05.03.2022 n. 430-r","http://pravo.gov.ru/proxy/ips/?docbody=&nd=602330812","2026-10-05"],
  "RU-SRC-20": ["Tassi Ufficiali di Cambio al 05/10/2026","https://www.cbr.ru/currency_base/daily/","2026-10-05"],
  "RU-SRC-21": ["Decreto Presidenziale 01.03.2022 n. 81","http://pravo.gov.ru/proxy/ips/?docbody=&nd=602324901","2026-10-05"],
  "RU-SRC-15": ["Codice Penale RF (UK RF)","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102041891","2026-10-05"],
  "RU-SRC-13": ["Legge Federale 18.07.2006 n. 109-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=102107937","2026-10-05"],
  "RU-SRC-07": ["Legge Federale 10.06.2026 n. 162-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=603889124","2026-10-05"],
  "RU-SRC-06": ["Legge Federale 01.07.2021 n. 274-FZ","http://pravo.gov.ru/proxy/ips/?docbody=&nd=602497672","2026-10-05"],
  "RU-SRC-19": ["Governi di Russia e Bielorussia: Accordo di Mutuo Riconoscimento dei Visti","https://pravo.by","2026-10-05"]
});

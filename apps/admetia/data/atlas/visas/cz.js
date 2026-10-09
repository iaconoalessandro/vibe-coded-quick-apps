/* Visas and permits: Czech Republic. From research/visas_immigration/czech_republic/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'CZ',
  folder: 'czech_republic',
  checked: '2026-10-06',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work with no authorisation; the employer notifies the labour office by the first day.',
        'I cittadini UE, SEE e svizzeri lavorano senza autorizzazione; il datore avvisa l’ufficio del lavoro entro il primo giorno.', 'CZ-SRC-02'],
      ['Staying over 30 days in a private flat, report your address to the foreigners’ police within 30 days; hotels and registered dorms do it for you.',
        'Per un soggiorno oltre 30 giorni in un alloggio privato, si dichiara l’indirizzo alla Polizia degli stranieri entro 30 giorni; alberghi e studentati registrati lo fanno per te.', 'CZ-SRC-01 CZ-SRC-27'],
      ['The registration certificate after three months is optional (CZK 200), but in practice banks and landlords ask for it.',
        'L’attestato di registrazione dopo tre mesi è facoltativo (CZK 200), ma in pratica banche e proprietari lo chiedono.', 'CZ-SRC-01 CZ-SRC-04']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Long-term visa and residence for study', 'Visto e permesso di lungo soggiorno per studio'], law: 'Zákon 326/1999 § 64',
      t: [
        ['Full-time students on accredited university programmes may work without a work permit or hours limit; private language courses give no right to work.',
          'Gli studenti a tempo pieno di corsi universitari accreditati possono lavorare senza permesso di lavoro né limiti orari; i corsi di lingua privati non danno diritto a lavorare.', 'CZ-SRC-01 CZ-SRC-02'],
        ['Funds must be in an account in your own name, with an international card linked to it; health insurance must be a comprehensive policy of at least €400,000 with no excess.',
          'I fondi devono stare su un conto a tuo nome, con una carta internazionale collegata; l’assicurazione sanitaria deve essere una polizza completa di almeno 400.000 € senza franchigia.', 'CZ-SRC-01 CZ-SRC-06'],
        ['A non-EU student with a permit from another EU country in an EU programme can stay up to 360 days without a Czech visa, after the university notifies the immigration department (OAMP).',
          'Uno studente extra-UE con permesso di un altro paese UE in un programma europeo può restare fino a 360 giorni senza visto ceco, dopo la notifica dell’università al dipartimento immigrazione (OAMP).', 'CZ-SRC-01 CZ-SRC-23']
      ],
      f: [
        [['Funds', 'Mezzi'], ['CZK 115,810 for a year, CZK 78,250 for a semester', 'CZK 115.810 per un anno, CZK 78.250 per un semestre'], 'CZ-SRC-01 CZ-SRC-24'],
        [['Visa or permit fee', 'Costo del visto o del permesso'], ['CZK 2,500', 'CZK 2.500'], 'CZ-SRC-04']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Traineeship stay', 'Soggiorno per tirocinio'], law: 'Zákon 326/1999 §§ 42d, 64',
      t: [
        ['For students abroad or graduates of the last two years, with a written traineeship agreement covering the training plan, supervision, pay or allowance, housing and health cover.',
          'Per studenti all’estero o chi si è laureato negli ultimi due anni, con una convenzione scritta che indichi piano formativo, supervisione, compenso, alloggio e copertura sanitaria.', 'CZ-SRC-01 CZ-SRC-23'],
        ['An internship within a Czech degree needs no work permit.',
          'Un tirocinio all’interno di un corso ceco non richiede permesso di lavoro.', 'CZ-SRC-02']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Stay to look for work or start a business', 'Soggiorno per cercare lavoro o avviare un’impresa'], law: 'Zákon 326/1999 § 42 (3)',
      t: [
        ['After a Czech degree, apply in person before your study permit expires: nine months, not renewable. You may also open a business straight away.',
          'Dopo una laurea ceca si fa domanda di persona prima che scada il permesso per studio: nove mesi, non prorogabili. Si può anche avviare subito un’attività.', 'CZ-SRC-01'],
        ['Anyone who completes an accredited Czech degree has free access to the labour market for life: a job only needs the non-dual employee card.',
          'Chi completa una laurea ceca accreditata ha accesso libero al mercato del lavoro a vita: per un impiego basta la carta del dipendente non duale.', 'CZ-SRC-02 CZ-SRC-01']
      ],
      f: [[['Fee', 'Costo'], ['CZK 2,500', 'CZK 2.500'], 'CZ-SRC-04']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Employee card', 'Carta del dipendente'], law: 'Zákon 326/1999 § 42g',
      t: [
        ['Since July 2024 there is no waiting period on the job advert: you apply as soon as the vacancy is in the labour office register. UK and US citizens (and seven other countries) have free access to work and get the simpler non-dual card.',
          'Da luglio 2024 non c’è più l’attesa sull’annuncio: si fa domanda appena il posto è nel registro dell’ufficio del lavoro. I cittadini britannici e statunitensi (e di altri sette paesi) hanno libero accesso al lavoro e ricevono la carta non duale, più semplice.', 'CZ-SRC-08 CZ-SRC-29'],
        ['At least 15 hours a week at the minimum wage; you cannot change employer in the first six months, and later only after notifying the ministry 30 days ahead.',
          'Almeno 15 ore a settimana al salario minimo; nei primi sei mesi non si può cambiare datore, e dopo solo avvisando il ministero 30 giorni prima.', 'CZ-SRC-09 CZ-SRC-01 CZ-SRC-26']
      ],
      f: [
        [['Minimum wage, 2026', 'Salario minimo, 2026'], ['CZK 22,400 a month', 'CZK 22.400 al mese'], 'CZ-SRC-09'],
        [['Fee', 'Costo'], ['CZK 5,000 abroad, CZK 2,500 in the country', 'CZK 5.000 all’estero, CZK 2.500 nel paese'], 'CZ-SRC-04 CZ-SRC-07']
      ],
      w: ['A first employee card cannot be applied for in the country after a visa-free entry: file it at a consulate abroad.',
        'Una prima carta del dipendente non si può chiedere nel paese dopo un ingresso senza visto: va presentata a un consolato all’estero.', 'CZ-SRC-01'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Zákon 326/1999 § 42i',
      t: [['A contract of at least six months for highly qualified work and a three-year degree, or for IT three years of experience in the last seven; the card lasts up to three years, and family can join at once.',
        'Un contratto di almeno sei mesi per lavoro altamente qualificato e una laurea triennale, o per l’informatica tre anni di esperienza negli ultimi sette; la carta dura fino a tre anni, e la famiglia può arrivare subito.', 'CZ-SRC-01 CZ-SRC-22']],
      f: [
        [['Salary, 2026/27', 'Stipendio, 2026/27'], ['CZK 73,823 gross a month', 'CZK 73.823 lordi al mese'], 'CZ-SRC-10'],
        [['Fee', 'Costo'], ['CZK 5,000', 'CZK 5.000'], 'CZ-SRC-04']
      ] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs', 'Permesso per ricercatori e dottorati'], law: 'Zákon 326/1999 § 42f',
      t: [
        ['A hosting agreement with a research organisation on the approved register; free access to work for the project, family reunion at once, and nine months after the project to find a job.',
          'Una convenzione di accoglienza con un ente di ricerca iscritto nel registro approvato; libero accesso al lavoro per il progetto, ricongiungimento immediato, e nove mesi dopo il progetto per trovare lavoro.', 'CZ-SRC-01 CZ-SRC-33 CZ-SRC-02'],
        ['A doctoral stipend is free of income tax and social contributions.',
          'Una borsa di dottorato è esente da imposte e contributi sociali.', 'CZ-SRC-12']
      ],
      f: [[['Fee', 'Costo'], ['CZK 2,500', 'CZK 2.500'], 'CZ-SRC-04']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['The Czech Republic has working-holiday agreements only with New Zealand, Canada, South Korea, Israel, Chile, Japan, Australia, Taiwan and Peru.',
        'La Repubblica Ceca ha accordi di vacanza-lavoro solo con Nuova Zelanda, Canada, Corea del Sud, Israele, Cile, Giappone, Australia, Taiwan e Perù.', 'CZ-SRC-34']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For citizens of the partner countries aged 18 to 30 (35 for Canada): 12 months, not convertible to any other permit inside the country.',
        'Per cittadini dei paesi partner dai 18 ai 30 anni (35 per il Canada): 12 mesi, non convertibili in nessun altro permesso nel paese.', 'CZ-SRC-34 CZ-SRC-01']],
      f: [[['Visa', 'Visto'], ['CZK 2,500', 'CZK 2.500'], 'CZ-SRC-04']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180, with no work beyond a few short exempt activities. Staying privately, non-EU visitors report to the foreigners’ police within three working days.',
        'Fino a 90 giorni ogni 180, senza lavoro salvo poche brevi attività esenti. Chi alloggia privatamente, se extra-UE, si dichiara alla Polizia degli stranieri entro tre giorni lavorativi.', 'CZ-SRC-02 CZ-SRC-27']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'CZ-SRC-21']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: you need no visa or work permit, and your employer notifies the labour office by your first day of work.',
        'Niente da preparare in anticipo: non servono visto né permesso di lavoro, e il datore comunica l’assunzione all’ufficio del lavoro entro il primo giorno.', 'CZ-SRC-02']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Apply for your first permit at a Czech consulate abroad: even visa-free nationals (UK, US) cannot switch from a short stay to a work permit inside the country.',
        'Chiedi il primo permesso a un consolato ceco all’estero: anche chi entra senza visto (Regno Unito, Stati Uniti) non può passare da un soggiorno breve a un permesso di lavoro nel paese.', 'CZ-SRC-01 CZ-SRC-20'],
      ['Check the flat is registered as a dwelling, and that a sublet has the owner’s written consent: otherwise it is not valid proof of housing. Have translations done by a translator sworn in the Czech Republic.',
        'Verifica che l’appartamento sia accatastato come abitazione, e che un subaffitto abbia il consenso scritto del proprietario: altrimenti non vale come prova di alloggio. Fai fare le traduzioni da un traduttore giurato nella Repubblica Ceca.', 'CZ-SRC-01 CZ-SRC-16 CZ-SRC-14']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Staying more than 30 days in private housing, report your address to the Foreign Police within 30 days of arriving; hotels and registered student residences do it for you. Missing it can be fined up to 3,000 CZK.',
        'Se resti più di 30 giorni in un alloggio privato, dichiara l’indirizzo alla Polizia degli stranieri entro 30 giorni dall’arrivo; alberghi e studentati registrati lo fanno per te. Non farlo può costare fino a 3.000 CZK.', 'CZ-SRC-01 CZ-SRC-27 CZ-SRC-28']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['In a private flat or short-term rental, report to the Foreign Police in person within 3 working days of arriving, or face a fine of up to 3,000 CZK.',
        'In un appartamento privato o in affitto breve, presentati di persona alla Polizia degli stranieri entro 3 giorni lavorativi dall’arrivo, o rischi una multa fino a 3.000 CZK.', 'CZ-SRC-01 CZ-SRC-27']
    ] },
    { k: 'card', p: 'eu', t: [
      ['The registration certificate (osvědčení o registraci) for stays over 3 months is optional and costs 200 CZK, but banks, car registration and parking permits ask for it.',
        'L’attestato di registrazione (osvědčení o registraci) per soggiorni oltre 3 mesi è facoltativo e costa 200 CZK, ma lo chiedono banche, immatricolazione dell’auto e permessi di sosta.', 'CZ-SRC-01 CZ-SRC-04']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Collect your residence card from the Interior Ministry’s office (OAMP). The legal processing time is 60 to 90 days; in practice it takes 3 to 6 months.',
        'Ritira la carta di soggiorno presso l’ufficio del Ministero dell’Interno (OAMP). Il termine legale è di 60-90 giorni; nella pratica servono da 3 a 6 mesi.', 'CZ-SRC-01 CZ-SRC-26']
    ] },
    { k: 'number', p: 'eu', t: [
      ['The registration certificate is in practice what gets you a Czech personal number (rodné číslo) without delay.',
        'L’attestato di registrazione è nella pratica ciò che ti fa ottenere senza ritardi il codice personale ceco (rodné číslo).', 'CZ-SRC-01']
    ] },
    { k: 'number', p: 'uk us other', none: true },
    { k: 'health', p: 'eu uk us other', t: [
      ['Employees are enrolled in public health insurance through their employer, with a fund such as VZP.',
        'I dipendenti sono iscritti all’assicurazione sanitaria pubblica tramite il datore, presso una cassa come VZP.', 'CZ-SRC-35']
    ] },
    { k: 'health', p: 'eu', t: [
      ['EU students use their European Health Insurance Card.',
        'Gli studenti UE usano la Tessera europea di assicurazione malattia.', 'CZ-SRC-13']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students and others not employed need comprehensive private insurance covering at least €400,000 with no deductible, typically 10,000 to 14,000 CZK a year; a policy with a deductible is refused.',
        'Studenti e chi non è dipendente devono avere un’assicurazione privata completa con massimale di almeno 400.000 € e senza franchigia, di solito da 10.000 a 14.000 CZK l’anno; una polizza con franchigia viene rifiutata.', 'CZ-SRC-06']
    ] },
    { k: 'bank', p: 'eu', t: [
      ['Banks ask for the registration certificate before a mortgage.',
        'Le banche chiedono l’attestato di registrazione prima di concedere un mutuo.', 'CZ-SRC-01']
    ] },
    { k: 'bank', p: 'uk us other', t: [
      ['Students prove funds with a statement from an account in their own name only, with a copy of the card linked to it.',
        'Gli studenti dimostrano i mezzi con l’estratto di un conto intestato solo a loro, con copia della carta collegata.', 'CZ-SRC-01']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['Renew between 120 days before and the last day of your permit: one day late and the status is lost.',
        'Rinnova tra 120 giorni prima e l’ultimo giorno di validità del permesso: un solo giorno di ritardo e lo status è perso.', 'CZ-SRC-01'],
      ['The paper receipt is valid only inside the Czech Republic; before travelling, have the free bridging sticker (překlenovací štítek) put in your passport at OAMP.',
        'La ricevuta cartacea vale solo nella Repubblica Ceca; prima di viaggiare, fatti apporre gratuitamente sul passaporto il visto ponte (překlenovací štítek) presso l’OAMP.', 'CZ-SRC-01 CZ-SRC-26'],
      ['Attend the 4-hour integration course within 1 year of collecting your permit (1,500 CZK), or face a fine of up to 10,000 CZK; and tell OAMP within 3 working days if your job ends.',
        'Frequenta il corso di integrazione di 4 ore entro 1 anno dal ritiro del permesso (1.500 CZK), o rischi una multa fino a 10.000 CZK; e comunica all’OAMP entro 3 giorni lavorativi la fine del rapporto di lavoro.', 'CZ-SRC-01 CZ-SRC-17']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['Renew between 120 days before and the last day of your permit: one day late and you lose your status and the years towards permanent residence.',
      'Rinnova tra 120 giorni prima e l’ultimo giorno del permesso: un giorno di ritardo e si perdono lo status e gli anni per la residenza permanente.', 'CZ-SRC-01'] },
    { p: 'uk us other', t: ['The paper receipt is valid only inside the Czech Republic: before any trip while you wait, get the free bridging visa sticker at OAMP.',
      'La ricevuta cartacea vale solo in Repubblica Ceca: prima di qualsiasi viaggio durante l’attesa, fatti apporre gratuitamente il visto ponte all’OAMP.', 'CZ-SRC-01 CZ-SRC-26'] },
    { p: 'uk us other', t: ['A sublet needs the registered owner’s written consent, and a non-residential unit (atelier) cannot be your address.',
      'Un subaffitto richiede il consenso scritto del proprietario registrato, e un’unità non residenziale (atelier) non può essere il tuo indirizzo.', 'CZ-SRC-01'] },
    { p: 'uk us other', t: ['Attend the four-hour integration course within a year of getting an employee card, or face fines up to CZK 10,000.',
      'Frequenta il corso di integrazione di quattro ore entro un anno dalla carta del dipendente, o rischi multe fino a CZK 10.000.', 'CZ-SRC-01 CZ-SRC-17'] },
    { p: 'uk us other', t: ['Report the end of a job to OAMP within three working days, or the card can be withdrawn.',
      'Comunica all’OAMP la fine di un lavoro entro tre giorni lavorativi, altrimenti la carta può essere revocata.', 'CZ-SRC-01'] }
  ],

  open: [
    { st: 'watch', t: ['Non-EU residents of Italy and other Schengen countries apply through the consulate in Dresden, which requires two years of legal residence in Schengen.',
      'I residenti extra-UE in Italia e in altri paesi Schengen fanno domanda tramite il consolato di Dresda, che richiede due anni di residenza legale in area Schengen.'] },
    { st: 'open', t: ['Employee cards take 4 to 8 months in Prague and Brno, against a legal 60 to 90 days.',
      'Le carte del dipendente richiedono da 4 a 8 mesi a Praga e Brno, contro i 60-90 giorni di legge.'] },
    { st: 'pending', t: ['A new immigration code, fully digital, is before parliament.',
      'Un nuovo codice dell’immigrazione, interamente digitale, è all’esame del parlamento.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/czech_republic/czech_republic_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('CZ', {
  "CZ-SRC-02": ["Zákon č. 435/2004 Sb., o zaměstnanosti","https://www.e-sbirka.cz/eli/cz/sb/2004/435","2026-10-05"],
  "CZ-SRC-01": ["Zákon č. 326/1999 Sb., o pobytu cizinců na území České republiky a o změně některých zákonů","https://www.e-sbirka.cz/eli/cz/sb/1999/326","2026-10-05"],
  "CZ-SRC-27": ["Ředitelství služby cizinecké policie: Hlášení pobytu cizinců","https://www.policie.cz/clanek/hlaseni-pobytu-cizincu.aspx","2026-10-05"],
  "CZ-SRC-04": ["Zákon č. 634/2004 Sb., o správních poplatcích","https://www.e-sbirka.cz/eli/cz/sb/2004/634","2026-10-05"],
  "CZ-SRC-06": ["Zákon č. 278/2023 Sb., kterým se mění zákon č. 326/1999 Sb., o pobytu cizinců","https://www.e-sbirka.cz/eli/cz/sb/2023/278","2026-10-05"],
  "CZ-SRC-23": ["Direttiva (UE) 2016/801 del Parlamento Europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "CZ-SRC-24": ["Banca Nazionale Ceca (ČNB): Devizové kurzy - Kurzovní lístek ČNB (05/10/2026)","https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/","2026-10-05"],
  "CZ-SRC-08": ["Zákon č. 163/2024 Sb. e Nařízení vlády č. 158/2024 Sb.","https://www.e-sbirka.cz/eli/cz/sb/2024/163","2026-10-05"],
  "CZ-SRC-29": ["Portál MPSV: Zaměstnávání cizinců a Centrální evidence volných pracovních míst","https://www.mpsv.cz/zahranicni-zamestnanost","2026-10-05"],
  "CZ-SRC-09": ["Zákon č. 230/2024 Sb., Nařízení vlády č. 285/2024 Sb. e Sdělení MPSV č. 356/2025 Sb.","https://www.e-sbirka.cz/eli/cz/sb/2024/230","2026-10-05"],
  "CZ-SRC-26": ["Informační portál pro cizince (IPC)","https://ipc.gov.cz/en/","2026-10-05"],
  "CZ-SRC-07": ["Zákon č. 349/2023 Sb. (Konsolidační balíček)","https://www.e-sbirka.cz/eli/cz/sb/2023/349","2026-10-05"],
  "CZ-SRC-22": ["Direttiva (UE) 2021/1883 del Parlamento Europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2021/1883/oj","2026-10-05"],
  "CZ-SRC-10": ["Sdělení MPSV č. 44/2026 Sb.","https://www.mpsv.cz/modre-karty","2026-10-05"],
  "CZ-SRC-33": ["Registr vysokých škol a výzkumných organizací pro přijímání cizinců","https://www.msmt.gov.cz/vyzkum-a-vyvoj-2/vyzkumne-organizace","2026-10-05"],
  "CZ-SRC-12": ["Zákon č. 586/1992 Sb., o daních z příjmů","https://www.e-sbirka.cz/eli/cz/sb/1992/586","2026-10-05"],
  "CZ-SRC-34": ["Programy pracovní dovolené (Working Holiday)","https://www.mzv.gov.cz/jnp/cz/informace_pro_cizince/aktuality/pracovni_dovolena.html","2026-10-05"],
  "CZ-SRC-21": ["Regolamento Delegato (UE) 2024/1415 della Commissione","https://eur-lex.europa.eu/eli/reg_del/2024/1415/oj","2026-10-05"],
  "CZ-SRC-20": ["Vyhláška MZV č. 429/2010 Sb.","https://www.zakonyprolidi.cz/cs/2010-429","2026-10-05"],
  "CZ-SRC-16": ["Zákon č. 89/2012 Sb., občanský zákoník","https://www.e-sbirka.cz/eli/cz/sb/2012/89","2026-10-05"],
  "CZ-SRC-14": ["Zákon č. 354/2019 Sb. e Vyhláška č. 507/2020 Sb.","https://www.e-sbirka.cz/eli/cz/sb/2019/354","2026-10-05"],
  "CZ-SRC-28": ["Portale della Pubblica Amministrazione (portal.gov.cz): Hlášení místa pobytu občanů EU (Scheda servizio S7764)","https://portal.gov.cz/en/sluzby-vs/reporting-the-place-of-residence-of-citizens-of-the-eu-and-family-members-of-an-eu-citizen-in-the-territory-of-the-czech-republic-S7764","2026-10-05"],
  "CZ-SRC-35": ["Všeobecná zdravotní pojišťovna (VZP ČR): Zdravotní pojištění cizinců v ČR","https://www.vzp.cz/pojistenci/informace-a-zivotni-situace/pojisteni-cizincu","2026-10-05"],
  "CZ-SRC-13": ["Zákon č. 48/1997 Sb., o veřejném zdravotním pojištění","https://www.e-sbirka.cz/eli/cz/sb/1997/48","2026-10-05"],
  "CZ-SRC-17": ["Vyhláška č. 520/2020 Sb., o rozsahu a podmínkách provádění adaptačně-integračního kurzu","https://www.mvcr.cz/clanek/adaptacne-integracni-kurzy.aspx","2026-10-05"]
});

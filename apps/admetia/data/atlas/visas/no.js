/* Visas and permits: Norway. From research/visas_immigration/norway/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'NO',
  folder: 'norway',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens may work from the first day under the EEA agreement; a delay in getting a police appointment does not make the stay irregular.',
        'I cittadini UE, SEE e svizzeri possono lavorare dal primo giorno grazie all’accordo SEE; un ritardo nell’appuntamento con la polizia non rende irregolare il soggiorno.', 'NO-SRC-01 NO-SRC-17'],
      ['Within three months, register with the police or a Service Centre for Foreign Workers (SUA) for the free registration certificate.',
        'Entro tre mesi ci si registra presso la polizia o un Service Centre for Foreign Workers (SUA) per l’attestato di registrazione, gratuito.', 'NO-SRC-02 NO-SRC-16 NO-SRC-10'],
      ['Staying six months or more, you get a national identity number, which banks need for BankID; shorter stays get a D-number.',
        'Per soggiorni di sei mesi o più si riceve il numero d’identità nazionale, necessario alle banche per il BankID; per soggiorni più brevi si ha un D-number.', 'NO-SRC-14 NO-SRC-31']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Study permit', 'Permesso per studio'], law: 'Utlendingsforskriften § 6-19',
      t: [
        ['Apply online to the immigration directorate (UDI) and give biometrics at VFS. The year’s living costs go into a blocked account run by the university before you arrive, and state universities now charge non-EU students tuition.',
          'Si fa domanda online alla Direzione immigrazione (UDI) e si rilasciano i dati biometrici presso VFS. Le spese dell’anno vanno su un conto vincolato gestito dall’università prima dell’arrivo, e le università statali ora fanno pagare le tasse agli studenti extra-UE.', 'NO-SRC-35 NO-SRC-12 NO-SRC-34 NO-SRC-11'],
        ['Work 20 hours a week in term and full time in holidays; no self-employment. Student years do not count towards permanent residence.',
          'Si lavora 20 ore a settimana durante le lezioni e a tempo pieno nelle vacanze; niente lavoro autonomo. Gli anni di studio non contano per la residenza permanente.', 'NO-SRC-08 NO-SRC-25'],
        ['Norway does not apply the EU student-mobility rules: a student permit from an EU country does not cover studying here, though Erasmus+ exchange students pay no tuition.',
          'La Norvegia non applica le regole UE sulla mobilità studentesca: un permesso per studio di un paese UE non copre lo studio qui, anche se gli studenti Erasmus+ non pagano tasse.', 'NO-SRC-01 NO-SRC-11']
      ],
      f: [
        [['Funds, 2026/27', 'Mezzi, 2026/27'], ['NOK 170,368 for the year', 'NOK 170.368 per l’anno'], 'NO-SRC-12'],
        [['Fee', 'Costo'], ['NOK 5,400', 'NOK 5.400'], 'NO-SRC-10']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Trainee permit', 'Permesso per tirocinanti'], law: 'Utlendingsforskriften § 6-21',
      t: [['For people aged 18 to 30 whose internship is closely linked to studies abroad, with a training plan signed by the Norwegian employer: up to six months (exceptionally 12), not convertible to a work permit inside Norway.',
        'Per chi ha dai 18 ai 30 anni e svolge un tirocinio strettamente legato agli studi all’estero, con un piano formativo firmato dal datore norvegese: fino a sei mesi (eccezionalmente 12), non convertibile in permesso di lavoro in Norvegia.', 'NO-SRC-22']],
      f: [[['Fee', 'Costo'], ['NOK 6,300', 'NOK 6.300'], 'NO-SRC-10']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-seeker permit after studies in Norway', 'Permesso per cercare lavoro dopo gli studi in Norvegia'], law: 'Utlendingsforskriften § 6-29',
      t: [
        ['After a bachelor’s, master’s or PhD in Norway, or a research stay: up to 12 months, not renewable, with full-time work in any sector allowed. A qualified job converts it to a skilled-worker permit.',
          'Dopo una laurea, un master o un dottorato in Norvegia, o un soggiorno di ricerca: fino a 12 mesi, non rinnovabili, con lavoro a tempo pieno in qualsiasi settore. Un lavoro qualificato lo converte in permesso per lavoratore qualificato.', 'NO-SRC-09 NO-SRC-08 NO-SRC-04'],
        ['PhD holders need to show funds for only three months.',
          'Chi ha un dottorato deve dimostrare mezzi solo per tre mesi.', 'NO-SRC-30']
      ],
      f: [
        [['Funds', 'Mezzi'], ['NOK 28,448 a month (NOK 341,373 for 12 months)', 'NOK 28.448 al mese (NOK 341.373 per 12 mesi)'], 'NO-SRC-09'],
        [['Fee', 'Costo'], ['NOK 6,300', 'NOK 6.300'], 'NO-SRC-10']
      ],
      w: ['Apply online before your study permit expires; afterwards you can no longer apply from inside Norway.',
        'Fai domanda online prima che scada il permesso per studio; dopo non si può più fare domanda dalla Norvegia.', 'NO-SRC-09'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Skilled worker permit', 'Permesso per lavoratore qualificato'], law: 'Utlendingsloven § 23; forskriften § 6-1',
      t: [
        ['A bachelor’s, master’s or three-year vocational qualification and a full-time offer (at least 80%) in a job that needs it; pay follows the collective agreement or UDI’s minimums.',
          'Una laurea, un master o una qualifica professionale triennale e un’offerta a tempo pieno (almeno 80%) in un lavoro che la richieda; la paga segue il contratto collettivo o i minimi UDI.', 'NO-SRC-04 NO-SRC-03 NO-SRC-06 NO-SRC-05'],
        ['Ordinary unskilled jobs are closed to non-EU citizens, except seasonal work. Skilled-work years count towards permanent residence after three.',
          'I lavori non qualificati sono preclusi ai cittadini extra-UE, salvo quelli stagionali. Gli anni di lavoro qualificato contano per la residenza permanente dopo tre.', 'NO-SRC-03 NO-SRC-25']
      ],
      f: [
        [['Minimum salary, master’s roles', 'Stipendio minimo, ruoli con master'], ['NOK 624,700 a year', 'NOK 624.700 l’anno'], 'NO-SRC-05'],
        [['Minimum salary, bachelor’s roles', 'Stipendio minimo, ruoli con laurea'], ['NOK 545,400 a year', 'NOK 545.400 l’anno'], 'NO-SRC-05'],
        [['Fee', 'Costo'], ['NOK 6,300', 'NOK 6.300'], 'NO-SRC-10']
      ],
      w: ['Start before the decision only with written approval of early start from the police or SUA; otherwise it is illegal work.',
        'Inizia prima della decisione solo con l’autorizzazione scritta all’inizio anticipato della polizia o del SUA; altrimenti è lavoro illegale.', 'NO-SRC-29'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['PhD research fellows and guest researchers', 'Dottorandi e ricercatori ospiti'], law: 'Utlendingsforskriften §§ 6-1, 6-20',
      t: [
        ['A Norwegian PhD fellow is a salaried state employee on a skilled-worker permit, pays no tuition, and the years count in full towards permanent residence.',
          'Un dottorando norvegese è un dipendente pubblico stipendiato con permesso per lavoratore qualificato, non paga tasse, e gli anni contano per intero per la residenza permanente.', 'NO-SRC-28 NO-SRC-04 NO-SRC-25'],
        ['A researcher funded from abroad comes with a hosting agreement and their own means; that time does not count towards permanent residence. Unpaid invited researchers can stay up to three months after notifying the police.',
          'Un ricercatore finanziato dall’estero entra con una convenzione di accoglienza e mezzi propri; quel periodo non conta per la residenza permanente. I ricercatori invitati non retribuiti possono restare fino a tre mesi avvisando la polizia.', 'NO-SRC-23 NO-SRC-25']
      ],
      f: [[['PhD salary', 'Stipendio da dottorando'], ['NOK 536,200 to 558,000 a year', 'NOK 536.200-558.000 l’anno'], 'NO-SRC-28']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'Utlendingsforskriften § 6-27',
      t: [['Norway has working-holiday agreements only with Argentina, Australia, Canada, Japan, New Zealand and Andorra.',
        'La Norvegia ha accordi di vacanza-lavoro solo con Argentina, Australia, Canada, Giappone, Nuova Zelanda e Andorra.', 'NO-SRC-24']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'Utlendingsforskriften § 6-27',
      t: [['For citizens of those six countries aged 18 to 30 (35 for Canadians): one year, at most six months with one employer, not convertible and not counting towards permanent residence.',
        'Per cittadini di quei sei paesi dai 18 ai 30 anni (35 per i canadesi): un anno, al massimo sei mesi con lo stesso datore, non convertibile e non utile per la residenza permanente.', 'NO-SRC-24 NO-SRC-25']],
      f: [[['Fee', 'Costo'], ['NOK 6,300', 'NOK 6.300'], 'NO-SRC-10']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Norway is in Schengen: up to 90 days in any 180, with no work of any kind.',
        'La Norvegia è nell’area Schengen: fino a 90 giorni ogni 180, senza alcun lavoro.', 'NO-SRC-01']] },

    { k: 'stay', p: 'uk us other', v: 'open',
      name: ['Permanent residence', 'Residenza permanente'], law: 'Utlendingsloven § 62',
      t: [['After three years of continuous residence on permits that count: skilled work and salaried PhDs do; study, traineeship, working holiday and the job-seeker year do not.',
        'Dopo tre anni di residenza continuativa con permessi che contano: lavoro qualificato e dottorati stipendiati sì; studio, tirocinio, vacanza-lavoro e anno di ricerca lavoro no.', 'NO-SRC-25']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['No visa or prior authorisation: enter with a passport or ID card. You may start work on the agreed date even before you get a registration appointment.',
        'Nessun visto né autorizzazione preventiva: entri con passaporto o carta d’identità. Puoi iniziare a lavorare dalla data concordata anche prima di ottenere l’appuntamento per la registrazione.', 'NO-SRC-01 NO-SRC-17']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Apply online in the UDI portal and give biometrics and documents at a VFS Global centre: the fee is NOK 6,300 for work or job search, NOK 5,400 for students, plus a VFS service charge of NOK 290 to 410.',
        'Fai domanda online sul portale UDI e consegna dati biometrici e documenti in un centro VFS Global: la tassa è di 6.300 NOK per lavoro o ricerca lavoro, 5.400 NOK per gli studenti, più una commissione VFS da 290 a 410 NOK.', 'NO-SRC-35 NO-SRC-10'],
      ['Students transfer the year’s funds (NOK 170,368 for 2026/2027) to the deposit account run by their university or student welfare body, which releases them after arrival.',
        'Gli studenti trasferiscono i mezzi dell’anno (170.368 NOK per il 2026/2027) sul conto di deposito gestito dall’università o dall’ente per il diritto allo studio, che li sblocca dopo l’arrivo.', 'NO-SRC-12 NO-SRC-34']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Staying at least 6 months, notify the Tax Administration that you have moved to Norway (melding om flytting), with a registered lease and your work or study contract, at an ID check in person.',
        'Se resti almeno 6 mesi, comunica all’Agenzia delle entrate il trasferimento in Norvegia (melding om flytting), con un contratto d’affitto registrato e il contratto di lavoro o studio, durante un controllo d’identità di persona.', 'NO-SRC-14']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Register within 3 months of arriving with the police or a Service Centre for Foreign Workers (SUA), with your work contract or employer’s statement, or as a student your enrolment, European Health Insurance Card and a statement of means. The registration certificate is free and does not expire.',
        'Registrati entro 3 mesi dall’arrivo presso la polizia o un Centro servizi per lavoratori stranieri (SUA), con il contratto di lavoro o la dichiarazione del datore, o da studente con iscrizione, Tessera europea di assicurazione malattia e dichiarazione sui mezzi. Il certificato di registrazione è gratuito e non scade.', 'NO-SRC-02 NO-SRC-10 NO-SRC-16']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Give fingerprints and a photo at the police or a SUA centre; the biometric residence card comes by post.',
        'Fornisci impronte e foto presso la polizia o un centro SUA; la carta di soggiorno biometrica arriva per posta.', 'NO-SRC-16']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Staying under 6 months, or needing a number at once, you get a temporary 11-digit D number; staying 6 months or more, a permanent national identity number (fødselsnummer), sent by post.',
        'Se resti meno di 6 mesi, o ti serve subito un numero, ricevi un numero D temporaneo a 11 cifre; se resti 6 mesi o più, un numero d’identità nazionale permanente (fødselsnummer), spedito per posta.', 'NO-SRC-14'],
      ['Apply for your tax card the day you arrive: without it your employer must withhold 50% of gross pay. Newcomers may be taxed at a flat 25% (PAYE) with no deductions; on lower pay, check whether ordinary taxation is cheaper.',
        'Chiedi la carta fiscale il giorno dell’arrivo: senza, il datore deve trattenere il 50% dello stipendio lordo. I nuovi arrivati possono essere tassati con un’aliquota fissa del 25% (PAYE) senza deduzioni; con stipendi più bassi, verifica se la tassazione ordinaria conviene.', 'NO-SRC-15 NO-SRC-13']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['With a national identity number you choose a GP (fastlege) on Helsenorge; patient charges stop at NOK 3,278 a year.',
        'Con il numero d’identità nazionale scegli il medico di base (fastlege) su Helsenorge; i ticket si fermano a 3.278 NOK l’anno.', 'NO-SRC-20']
    ] },
    { k: 'health', p: 'eu', t: [
      ['With only a D number, or as a student staying under 6 months, use your European Health Insurance Card at municipal emergency clinics (legevakt) or private clinics.',
        'Con il solo numero D, o da studente per meno di 6 mesi, usa la Tessera europea di assicurazione malattia presso i pronto soccorso comunali (legevakt) o le cliniche private.', 'NO-SRC-20']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['BankID, the national digital ID for banks, Vipps, contracts and public portals, needs the national identity number, not a D number; use MinID or Buypass for the tax office, NAV and Altinn in the first weeks.',
        'BankID, l’identità digitale nazionale per banche, Vipps, contratti e portali pubblici, richiede il numero d’identità nazionale, non il numero D; nelle prime settimane usa MinID o Buypass per fisco, NAV e Altinn.', 'NO-SRC-31'],
      ['A rent deposit must be held in a separate deposit account in your name, with the fees paid by the landlord; without a bank account yet, a rent guarantee from an insurer is the usual way round.',
        'La cauzione d’affitto deve stare su un conto di deposito separato a tuo nome, con le spese a carico del proprietario; senza ancora un conto, il rimedio abituale è una garanzia d’affitto assicurativa.', 'NO-SRC-21']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['Nothing to renew: the registration certificate does not expire.',
        'Niente da rinnovare: il certificato di registrazione non scade.', 'NO-SRC-02']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['Years on a study, internship, working holiday or job-search permit do not count towards the 3 years needed for permanent residence: the count starts with a skilled-work permit.',
        'Gli anni con un permesso per studio, tirocinio, vacanza-lavoro o ricerca di lavoro non contano per i 3 anni necessari alla residenza permanente: il conteggio parte con un permesso per lavoro qualificato.', 'NO-SRC-25']
    ] }
  ],

  traps: [
    { p: 'eu uk us other', t: ['Without a tax card on your first payday, the employer withholds 50% of your gross pay: request it from Skatteetaten on arrival.',
      'Senza scheda fiscale al primo stipendio, il datore trattiene il 50% del lordo: chiedila a Skatteetaten all’arrivo.', 'NO-SRC-15'] },
    { p: 'eu uk us other', t: ['The flat 25% PAYE scheme for newcomers allows no deductions; on lower salaries ordinary taxation can be cheaper, so simulate before choosing.',
      'Il regime forfettario PAYE al 25% per i nuovi arrivati non ammette deduzioni; con stipendi più bassi la tassazione ordinaria può costare meno, quindi fai una simulazione prima di scegliere.', 'NO-SRC-13'] },
    { p: 'eu uk us other', t: ['A rent deposit must go into a separate deposit account; without BankID, a rental guarantee is the usual alternative.',
      'La cauzione d’affitto va su un conto di deposito separato; senza BankID, la garanzia locativa è l’alternativa usuale.', 'NO-SRC-21'] }
  ],

  open: [
    { st: 'pending', t: ['A proposal would raise the family-reunion income requirement from 3.2 to 4 times the base amount (G).',
      'Una proposta porterebbe il reddito richiesto per il ricongiungimento da 3,2 a 4 volte l’importo base (G).'] },
    { st: 'watch', t: ['Since August 2026 universities may cut tuition for non-EU students; amounts now vary by institution.',
      'Da agosto 2026 le università possono ridurre le tasse per gli studenti extra-UE; gli importi ora variano da ateneo ad ateneo.'] },
    { st: 'pending', t: ['The skilled-worker salary minimums follow the spring wage settlement and will change in May 2027.',
      'Le soglie per lavoratori qualificati seguono gli accordi salariali di primavera e cambieranno a maggio 2027.'] },
    { st: 'pending', t: ['ETIAS, when it starts, will apply to visa-exempt visitors to Norway too.',
      'ETIAS, quando entrerà in funzione, varrà anche per i visitatori esenti da visto in Norvegia.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/norway/norway_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('NO', {
  "NO-SRC-01": ["Lovdata: Utlendingsloven (LOV-2008-05-15-35) Kap. 13 (§§ 109–125)","https://lovdata.no/dokument/NL/lov/2008-05-15-35/KAPITTEL_13","2026-10-05"],
  "NO-SRC-17": ["Politiet: Opphold i Norge for EU/EØS-borgere","https://www.politiet.no/tjenester/opphold-i-norge/for-eu-eos-borgere/","2026-10-05"],
  "NO-SRC-02": ["Lovdata: Utlendingsloven (LOV-2008-05-15-35) § 117","https://lovdata.no/dokument/NL/lov/2008-05-15-35/KAPITTEL_13#§117","2026-10-05"],
  "NO-SRC-16": ["SUA (Centro Lavoratori Esteri): Servicesenter for utenlandske arbeidstakere","https://www.sua.no/en/","2026-10-05"],
  "NO-SRC-10": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 17-10","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_17#§17-10","2026-01-01"],
  "NO-SRC-14": ["Skatteetaten (Fisco): National identity numbers and D-numbers","https://www.skatteetaten.no/en/person/national-id-number/","2026-10-05"],
  "NO-SRC-31": ["BankID Norge / Finanstilsynet: Regler for utstedelse av BankID og hvitvasking","https://www.bankid.no/","2026-10-05"],
  "NO-SRC-35": ["VFS Global Norway: Service fees and biometric enrolment abroad","https://www.vfsglobal.com/norway/","2026-10-05"],
  "NO-SRC-12": ["Lånekassen / UDI: Basisstøtte og underholdskrav for studenter 2026–2027","https://lanekassen.no/","2026-10-05"],
  "NO-SRC-34": ["Universitetet i Oslo (UiO): Deposit account and financing for international students","https://www.uio.no/english/studies/admission/","2026-10-05"],
  "NO-SRC-11": ["Lovdata: Universitets- og høyskoleloven (LOV-2024-03-08-9) § 8-3","https://lovdata.no/dokument/NL/lov/2024-03-08-9/KAPITTEL_8#§8-3","2026-08-01"],
  "NO-SRC-08": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-33","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-33","2026-10-05"],
  "NO-SRC-25": ["Lovdata: Utlendingsloven (LOV-2008-05-15-35) § 62","https://lovdata.no/dokument/NL/lov/2008-05-15-35/KAPITTEL_7#§62","2026-10-05"],
  "NO-SRC-22": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-21","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-21","2026-10-05"],
  "NO-SRC-09": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-29","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-29","2026-10-05"],
  "NO-SRC-04": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-1","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-1","2026-10-05"],
  "NO-SRC-30": ["Justis- og beredskapsdepartementet: Instruks GI-06/2025 (Fondi ricerca lavoro PhD)","https://www.regjeringen.no/no/dokumenter/instrukser/","2026-10-05"],
  "NO-SRC-03": ["Lovdata: Utlendingsloven (LOV-2008-05-15-35) § 23","https://lovdata.no/dokument/NL/lov/2008-05-15-35/KAPITTEL_3#§23","2026-10-05"],
  "NO-SRC-06": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-10","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-10","2026-10-05"],
  "NO-SRC-05": ["UDI (Direttorato Immigrazione): Pay and working conditions in Norway (Soglie salariali)","https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway/","2026-05-01"],
  "NO-SRC-29": ["UDI (Direttorato Immigrazione): Early employment start (Tidlig arbeidsstart)","https://www.udi.no/en/word-definitions/early-employment-start/","2026-10-05"],
  "NO-SRC-28": ["Forskerforbundet / Hovedtariffavtalen: Lønnsregulativ for statstilsatte (SKO 1017 Stipendiat)","https://www.forskerforbundet.no/","2024-05-01"],
  "NO-SRC-23": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-20","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-20","2026-10-05"],
  "NO-SRC-24": ["Lovdata: Utlendingsforskriften (FOR-2009-10-15-1286) § 6-27","https://lovdata.no/dokument/SF/forskrift/2009-10-15-1286/KAPITTEL_6#§6-27","2026-10-05"],
  "NO-SRC-15": ["Skatteetaten (Fisco): Tax deduction card (skattekort) e ritenuta al 50%","https://www.skatteetaten.no/en/person/taxes/tax-deduction-card-and-advance-tax/","2026-10-05"],
  "NO-SRC-13": ["Skatteetaten (Fisco): PAYE scheme (kildeskatt på lønn)","https://www.skatteetaten.no/en/person/taxes/get-a-tax-card/paye-scheme/","2026-10-05"],
  "NO-SRC-20": ["Helsenorge / Helfo: General Practitioner Scheme (Fastlege) & User fee exemption","https://www.helsenorge.no/en/gp/","2026-10-05"],
  "NO-SRC-21": ["Lovdata: Husleieloven (LOV-1999-03-26-17) § 3-5","https://lovdata.no/dokument/NL/lov/1999-03-26-17/KAPITTEL_3#§3-5","2026-10-05"]
});

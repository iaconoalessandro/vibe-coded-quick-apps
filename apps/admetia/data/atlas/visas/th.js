/* Visas and permits: Thailand. From research/visas_immigration/thailand/
 * (guide, source register, open questions), council check of 5 Oct 2026; ED Plus
 * and the DTV fee were confirmed in the review of 6 Oct 2026. EU and UK only. */
ATLAS.addVisas({
  id: 'TH',
  folder: 'thailand',
  checked: '2026-10-06',
  review: '2027-02-28',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Non-Immigrant ED Plus', 'Non-Immigrant ED Plus'], law: 'Cabinet resolution of 28 May 2024',
      t: [
        ['For degree students at universities accredited by the higher-education ministry, applied for on thaievisa.go.th: no re-entry permit needed, extensions handled by the university. No work during studies.',
          'Per studenti di corsi di laurea in università accreditate dal ministero dell’istruzione superiore, si chiede su thaievisa.go.th: niente permesso di rientro, proroghe gestite dall’università. Niente lavoro durante gli studi.', 'TH-SRC-05 TH-SRC-16 TH-SRC-06 TH-SRC-02']
      ],
      f: [
        [['Visa', 'Visto'], ['€80', '80 €'], 'TH-SRC-07'],
        [['Funds, usually asked', 'Mezzi, di solito richiesti'], ['100,000 to 200,000 THB', 'da 100.000 a 200.000 THB'], 'TH-SRC-06']
      ] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Internships', 'Tirocini'], law: 'Emergency Decree on the Work of Aliens 2017',
      t: [['A required, credit-bearing internship uses a Non-Immigrant ED visa with your university’s letter; a paid one also needs a work permit. Any other internship is work in law and needs a Non-B visa and work permit from a qualifying employer. An internship as a tourist leads to arrest.',
        'Un tirocinio obbligatorio con crediti usa un visto Non-Immigrant ED con la lettera della tua università; se retribuito serve anche il permesso di lavoro. Qualsiasi altro tirocinio per legge è lavoro e richiede visto Non-B e permesso di lavoro da un datore idoneo. Un tirocinio da turista porta all’arresto.', 'TH-SRC-01 TH-SRC-06 TH-SRC-02 TH-SRC-14 TH-SRC-10']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['One year after graduating (ED Plus)', 'Un anno dopo la laurea (ED Plus)'], law: 'Cabinet resolution of 28 May 2024',
      t: [['ED Plus graduates of Thai universities get a one-year extension to look for work, and can switch to a work visa and permit without leaving.',
        'I laureati ED Plus di università thailandesi ottengono una proroga di un anno per cercare lavoro, e possono passare a visto e permesso di lavoro senza partire.', 'TH-SRC-05 TH-SRC-08']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Non-B visa and work permit', 'Visto Non-B e permesso di lavoro'], law: 'Royal Thai Police order 542/2566',
      t: [
        ['The employer gets a pre-approval letter, you apply for a 90-day Non-B visa, collect the digital work permit, then extend for a year. Ordinary companies need 2 million THB of paid-up capital and four Thai staff per foreigner; BOI-promoted firms are exempt. 40 occupations are closed to foreigners.',
          'Il datore ottiene una lettera di pre-approvazione, chiedi un visto Non-B di 90 giorni, ritiri il permesso di lavoro digitale, poi proroghi per un anno. Le società ordinarie devono avere 2 milioni di THB di capitale versato e quattro dipendenti thai per ogni straniero; le aziende promosse dal BOI ne sono esenti. 40 professioni sono chiuse agli stranieri.', 'TH-SRC-14 TH-SRC-06 TH-SRC-01 TH-SRC-04 TH-SRC-11 TH-SRC-03'],
        ['SMART and Long-Term Resident visas need no separate work permit, and the LTR offers a 17% flat tax on Thai employment income.',
          'I visti SMART e Long-Term Resident non richiedono un permesso di lavoro separato, e l’LTR offre un’imposta fissa del 17% sul reddito da lavoro thailandese.', 'TH-SRC-12 TH-SRC-13 TH-SRC-22']
      ],
      f: [
        [['Salary, EU and UK citizens', 'Stipendio, cittadini UE e britannici'], ['50,000 THB a month', '50.000 THB al mese'], 'TH-SRC-04'],
        [['Fees, first year', 'Costi, primo anno'], ['about 9,000 THB', 'circa 9.000 THB'], 'TH-SRC-24']
      ] },

    { k: 'work', p: 'eu uk', v: 'open',
      name: ['Destination Thailand Visa', 'Destination Thailand Visa'], law: 'Cabinet resolution of 28 May 2024',
      t: [['A five-year multiple-entry visa for remote workers with foreign employers or clients: 180 days per entry, extendable once by 180. Working for Thai employers or clients is forbidden.',
        'Un visto quinquennale a ingressi multipli per lavoratori da remoto con datori o clienti esteri: 180 giorni per ingresso, prorogabili una volta di 180. Lavorare per datori o clienti thailandesi è vietato.', 'TH-SRC-05 TH-SRC-02']],
      f: [
        [['Funds', 'Mezzi'], ['500,000 THB', '500.000 THB'], 'TH-SRC-05'],
        [['Fee', 'Costo'], ['10,000 THB (€350 in Rome)', '10.000 THB (350 € a Roma)'], 'TH-SRC-06 TH-SRC-07']
      ] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research visas and PhDs', 'Visti per ricerca e dottorati'], law: 'National Research Council Act',
      t: [
        ['Thesis research uses a Non-Immigrant ED visa with an agreement between universities; structured research a Non-Immigrant RS visa, only after approval by the National Research Council. Field research without it means losing the visa.',
          'La ricerca di tesi usa un visto Non-Immigrant ED con un accordo tra università; la ricerca strutturata un visto Non-Immigrant RS, solo dopo l’approvazione del National Research Council. Fare ricerca sul campo senza di essa significa perdere il visto.', 'TH-SRC-01 TH-SRC-17'],
        ['PhD students hold ED Plus; scholarships need no work permit, but paid teaching does.',
          'I dottorandi hanno l’ED Plus; le borse non richiedono permesso di lavoro, l’insegnamento retribuito sì.', 'TH-SRC-05']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Thailand has working-holiday agreements only with Australia and New Zealand.',
        'La Thailandia ha accordi di vacanza-lavoro solo con Australia e Nuova Zelanda.', 'TH-SRC-19']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Cabinet resolution of 19 May 2026',
      t: [['Since 15 September 2026 citizens of 60 countries, the whole EU included, stay up to 30 days visa-free for tourism only, extendable once by 30 days. Fill in the Thailand Digital Arrival Card within three days before arriving; ignore paid “ETA” sites.',
        'Dal 15 settembre 2026 i cittadini di 60 paesi, tutta l’UE compresa, restano fino a 30 giorni senza visto solo per turismo, prorogabili una volta di 30 giorni. Si compila la Thailand Digital Arrival Card nei tre giorni prima dell’arrivo; ignora i siti “ETA” a pagamento.', 'TH-SRC-09 TH-SRC-01 TH-SRC-25']],
      f: [[['Extension', 'Proroga'], ['1,900 THB', '1.900 THB'], 'TH-SRC-01']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['The apostille does not yet work for Thailand, where the convention takes effect only on 28 February 2027: until then, Italian documents go through the Italian prosecutor’s office or prefecture, a sworn English translation and legalisation at the Thai embassy in Rome (€15 a stamp), then the Foreign Ministry in Bangkok.',
        'L’apostille non vale ancora per la Thailandia, dove la convenzione entra in vigore solo il 28 febbraio 2027: fino ad allora, i documenti italiani passano per Procura o Prefettura, traduzione giurata in inglese e legalizzazione presso l’ambasciata thailandese a Roma (15 € a timbro), poi il Ministero degli Esteri a Bangkok.', 'TH-SRC-18 TH-SRC-07 TH-SRC-06'],
      ['For a job, the company first gets the work permit pre-approval letter (WP.3); you then apply on thaievisa.go.th for the Non-Immigrant B visa, a 90-day single entry (€80).',
        'Per un lavoro, l’azienda ottiene prima la lettera di pre-approvazione del permesso di lavoro (WP.3); poi chiedi su thaievisa.go.th il visto Non-Immigrant B, a ingresso singolo di 90 giorni (80 €).', 'TH-SRC-14 TH-SRC-06 TH-SRC-07']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Whoever houses you, landlord, host or hotel, must notify immigration within 24 hours (TM.30): private landlords often forget, which blocks your visa extension and brings a fine of 800 to 2,000 THB, so ask for the receipt in your first 48 hours.',
        'Chi ti ospita, proprietario, ospite o albergo, deve notificarlo all’immigrazione entro 24 ore (TM.30): i proprietari privati spesso se ne dimenticano, il che blocca l’estensione del visto e comporta una multa da 800 a 2.000 THB, quindi chiedi la ricevuta nelle prime 48 ore.', 'TH-SRC-20'],
      ['Staying over 90 days, confirm your address every 90 days (TM.47), or pay 2,000 THB.',
        'Se resti oltre 90 giorni, conferma l’indirizzo ogni 90 giorni (TM.47), o paghi 2.000 THB.', 'TH-SRC-20']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Do not start work on the visa alone: collect the digital work permit from the Department of Employment (3,100 THB) after a local medical check. In the last 30 days of the 90-day visa, apply for the one-year extension (TM.7, 1,900 THB).',
        'Non iniziare a lavorare con il solo visto: ritira il permesso di lavoro digitale dal Dipartimento dell’impiego (3.100 THB) dopo una visita medica sul posto. Negli ultimi 30 giorni del visto di 90 giorni, chiedi l’estensione annuale (TM.7, 1.900 THB).', 'TH-SRC-02 TH-SRC-14 TH-SRC-15 TH-SRC-01']
    ] },
    { k: 'number', p: 'eu uk', none: true },
    { k: 'health', p: 'eu uk', t: [
      ['The work permit needs a local medical certificate showing none of the 6 prohibited diseases, with a VDRL test (about 300 THB).',
        'Il permesso di lavoro richiede un certificato medico locale che attesti l’assenza delle 6 malattie ostative, con il test VDRL (circa 300 THB).', 'TH-SRC-15 TH-SRC-24']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['Before any trip abroad, get a re-entry permit (TM.8: 1,000 THB single, 3,800 THB multiple): leaving without one cancels your extension at the exit stamp. Avoid travelling during the 30-day “under consideration” period of an extension.',
        'Prima di ogni viaggio all’estero, ottieni il permesso di rientro (TM.8: 1.000 THB singolo, 3.800 THB multiplo): partire senza annulla l’estensione al timbro d’uscita. Evita di viaggiare durante i 30 giorni “under consideration” di un’estensione.', 'TH-SRC-21 TH-SRC-01 TH-SRC-04'],
      ['Overstaying costs 500 THB a day up to 20,000 THB, and more than 90 days brings an entry ban of 1 year or longer.',
        'Restare oltre il consentito costa 500 THB al giorno fino a 20.000 THB, e oltre 90 giorni comporta un divieto d’ingresso di 1 anno o più.', 'TH-SRC-01 TH-SRC-10']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Leave Thailand without a re-entry permit and your yearly extension is cancelled at the airport.',
      'Se lasci la Thailandia senza permesso di rientro la proroga annuale viene cancellata in aeroporto.', 'TH-SRC-01 TH-SRC-21'] },
    { p: 'eu uk', t: ['Your landlord must report you within 24 hours (TM.30); if they do not, your extension is blocked and you are fined.',
      'Il proprietario deve segnalarti entro 24 ore (TM.30); se non lo fa, la proroga viene bloccata e ricevi una multa.', 'TH-SRC-20'] },
    { p: 'eu uk', t: ['Report your address every 90 days, or pay 2,000 THB.',
      'Segnala il tuo indirizzo ogni 90 giorni, o paghi 2.000 THB.', 'TH-SRC-20'] },
    { p: 'eu uk', t: ['Overstay costs 500 THB a day; caught by the police, even a short overstay brings a five-year ban.',
      'L’overstay costa 500 THB al giorno; se fermati dalla polizia, anche un breve overstay comporta un divieto di cinque anni.', 'TH-SRC-01 TH-SRC-10'] },
    { p: 'eu uk', t: ['Apostilles are not valid in Thailand until 28 February 2027: until then documents need consular legalisation.',
      'L’apostille non vale in Thailandia fino al 28 febbraio 2027: fino ad allora i documenti richiedono la legalizzazione consolare.', 'TH-SRC-18 TH-SRC-07'] }
  ],

  open: [
    { st: 'pending', t: ['Thailand joins the Apostille Convention on 28 February 2027.',
      'La Thailandia aderisce alla Convenzione dell’Aja sull’apostille il 28 febbraio 2027.'] },
    { st: 'open', t: ['Some embassies want months of bank history for the DTV, beyond the written 500,000 THB rule.',
      'Alcune ambasciate chiedono mesi di storico bancario per il DTV, oltre alla regola scritta dei 500.000 THB.'] },
    { st: 'watch', t: ['How fast ED Plus graduates actually get a work permit after switching.',
      'Quanto in fretta i laureati ED Plus ottengano davvero il permesso di lavoro dopo il cambio.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/thailand/thailand_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('TH', {
  "TH-SRC-05": ["Cabinet Resolution 28 May 2024 & MFA Notification (15 Luglio 2024)","https://www.mfa.go.th","2026-10-05"],
  "TH-SRC-16": ["Regolamento Istituti Accademici e Certificazione Titoli Universitari","https://www.mhesi.go.th","2026-10-05"],
  "TH-SRC-06": ["Portale Ufficiale Thai E-Visa (ระบบตรวจลงตราอิเล็กทรอนิกส์)","https://www.thaievisa.go.th","2026-10-05"],
  "TH-SRC-02": ["Emergency Decree on Managing the Work of Aliens, B.E. 2560 (2017) & No. 2 B.E. 2561 (2018) (พ.ร.ก.…","https://www.doe.go.th","2026-10-05"],
  "TH-SRC-07": ["Istruzioni Consolari, Visti Elettronici e Legalizzazioni Diplomatiche","https://rome.thaiembassy.org","2026-10-05"],
  "TH-SRC-01": ["Royal Thai Police / Immigration Bureau: Immigration Act, B.E. 2522 (1979) e successive modifiche (พระราชบัญญัติคนเข้าเมือง พ.ศ. ๒๕๒๒)","https://www.immigration.go.th","2026-10-05"],
  "TH-SRC-14": ["Circolare Amministrativa Modulo WP.3 e Digital Work Permit","https://www.doe.go.th/alien","2026-10-05"],
  "TH-SRC-10": ["Order of the Ministry of Interior No. 1/2558 (Overstay Blacklist)","https://www.immigration.go.th","2026-10-05"],
  "TH-SRC-08": ["Royal Thai Embassy, London: Regolamento Ufficiale Visti Non-ED e Non-ED Plus","https://london.thaiembassy.org/en/page/non-ed-plus-visa","2026-10-05"],
  "TH-SRC-04": ["Royal Thai Police / Immigration Bureau: Order of the Royal Thai Police No. 542/2566 & No. 327/2557 (Criteria for Alien Temporary Stay)","https://www.immigration.go.th","2026-10-05"],
  "TH-SRC-11": ["Board of Investment (BOI): Investment Promotion Act, B.E. 2520 (1977) e delibere OSOS / TIESC","https://www.boi.go.th","2026-10-05"],
  "TH-SRC-03": ["Notification Prescribing Occupations Prohibited to Foreigners, B.E. 2563 (2020)","https://www.doe.go.th","2026-10-05"],
  "TH-SRC-12": ["Board of Investment (BOI): SMART Visa Scheme Regulations (BOI, NIA, DEPA, NSTDA)","https://smart-visa.boi.go.th","2026-10-05"],
  "TH-SRC-13": ["Board of Investment (BOI): Long-Term Resident (LTR) Visa Regulations (10-Year Visa)","https://ltr.boi.go.th","2026-10-05"],
  "TH-SRC-22": ["Revenue Department of Thailand (RD): Revenue Code: Imposta sul Reddito delle Persone Fisiche (P.N.D. 1)","https://www.rd.go.th","2026-10-05"],
  "TH-SRC-24": ["Bank of Thailand (BOT) / Banca Centrale Europea (BCE): Tassi di Cambio di Riferimento Interbancario al 05/10/2026","https://www.bot.or.th","2026-10-05"],
  "TH-SRC-17": ["National Research Council of Thailand (NRCT): Guidelines for Foreign Researchers Conducting Research in Thailand","https://www.nrct.go.th","2026-10-05"],
  "TH-SRC-19": ["Accordi Bilaterali Working Holiday Schemes (WHA)","https://www.mfa.go.th","2026-10-05"],
  "TH-SRC-09": ["Cabinet Resolution 19 Maggio 2026 (In vigore dal 15 Settembre 2026)","https://consular.mfa.go.th","2026-10-05"],
  "TH-SRC-25": ["Avviso Ufficiale Thailand Digital Arrival Card (TDAC) & Sospensione ETA","https://www.tatnews.org","2026-10-05"],
  "TH-SRC-18": ["HCCH Status Table: 1961 Apostille Convention (Thailand Accession)","https://www.hcch.net","2026-10-05"],
  "TH-SRC-20": ["Immigration Bureau: Procedure Operative Notifiche TM.30 (Alloggio) e TM.47 (90 Giorni)","https://www.immigration.go.th","2026-10-05"],
  "TH-SRC-15": ["Ministerial Regulations on Prohibited Diseases for Alien Work Permit","https://www.moph.go.th","2026-10-05"],
  "TH-SRC-21": ["Immigration Bureau: Procedure Re-Entry Permit (TM.8) e Conversione di Status (TM.86/TM.87)","https://www.immigration.go.th","2026-10-05"]
});

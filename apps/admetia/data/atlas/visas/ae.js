/* Visas and permits: United Arab Emirates. From research/visas_immigration/uae/
 * (guide, source register, open questions), council check of 5 Oct 2026; the
 * Green Visa threshold was confirmed in the review of 6 Oct 2026. EU and UK only. */
ATLAS.addVisas({
  id: 'AE',
  folder: 'uae',
  checked: '2026-10-06',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student residence visa', 'Visto di residenza per studenti'], law: 'Cabinet Resolution 65/2022',
      t: [
        ['The university, accredited by the Commission for Academic Accreditation, sponsors a one-year renewable visa; the medical and Emirates ID follow on arrival. Part-time work needs the university’s consent and a labour-ministry permit.',
          'L’università, accreditata dalla Commission for Academic Accreditation, sponsorizza un visto annuale rinnovabile; visita medica ed Emirates ID seguono all’arrivo. Il lavoro part-time richiede il consenso dell’università e un permesso del ministero del Lavoro.', 'UAE-SRC-01 UAE-SRC-13 UAE-SRC-17 UAE-SRC-02'],
        ['The European health card is worthless here: you need private insurance.',
          'La tessera sanitaria europea qui non vale: serve un’assicurazione privata.', 'UAE-SRC-18 UAE-SRC-19']
      ],
      f: [[['University visa package', 'Pacchetto visto dell’università'], ['AED 2,500 to 4,500 a year, plus a deposit', 'da 2.500 a 4.500 AED l’anno, più un deposito'], 'UAE-SRC-13']] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Training permits', 'Permessi per tirocinio'], law: 'Decree-Law 33/2021',
      t: [['No internship on a visa waiver. Resident students need a student training permit requested by the company; candidates from abroad need an entry permit for training sponsored by a university or company, for 60 to 180 days. In the DIFC, interns get a visitor pass of up to three months.',
        'Nessun tirocinio in esenzione visto. Gli studenti residenti hanno bisogno di un permesso di tirocinio chiesto dall’azienda; i candidati dall’estero di un permesso d’ingresso per formazione sponsorizzato da un’università o un’azienda, da 60 a 180 giorni. Nel DIFC i tirocinanti ricevono un pass fino a tre mesi.', 'UAE-SRC-03 UAE-SRC-02 UAE-SRC-01 UAE-SRC-12 UAE-SRC-15']],
      f: [[['Training entry permit deposit, refundable', 'Deposito per il permesso di formazione, rimborsabile'], ['AED 1,025', '1.025 AED'], 'UAE-SRC-12']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['Job-seeker visa and graduate grace period', 'Visto per cercare lavoro e periodo di grazia per laureati'], law: 'Cabinet Resolution 65/2022',
      t: [
        ['A job-seeker visit visa of 60, 90 or 120 days, with no sponsor, for graduates of the last two years from a top-500 university or people in skill levels 1 to 3. It does not allow work; once hired you change status without leaving.',
          'Un visto di visita per cercare lavoro di 60, 90 o 120 giorni, senza sponsor, per laureati degli ultimi due anni in un’università tra le prime 500 o per chi rientra nei livelli professionali da 1 a 3. Non consente di lavorare; una volta assunti si cambia status senza partire.', 'UAE-SRC-12 UAE-SRC-07'],
        ['Graduates of UAE universities get a 60-day grace period after the student visa is cancelled.',
          'I laureati di università degli Emirati hanno 60 giorni di grazia dopo la cancellazione del visto studentesco.', 'UAE-SRC-01']
      ],
      f: [[['Fees', 'Costi'], ['AED 200, 300 or 400, plus a refundable AED 1,025 deposit', '200, 300 o 400 AED, più un deposito rimborsabile di 1.025 AED'], 'UAE-SRC-12']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Employment visa', 'Visto di lavoro'], law: 'Decree-Law 33/2021',
      t: [
        ['The employer pays every hiring and visa cost by law. You can change status inside the country if you are already there legally. Degrees must go through consular legalisation (no apostille) and recognition, or you are graded as a non-graduate.',
          'Per legge il datore paga ogni costo di assunzione e visto. Si può cambiare status nel paese se ci si trova già regolarmente. I titoli devono passare dalla legalizzazione consolare (niente apostille) e dal riconoscimento, altrimenti si viene inquadrati come non laureati.', 'UAE-SRC-02 UAE-SRC-07 UAE-SRC-29 UAE-SRC-26'],
        ['Mainland firms with 50 or more staff must hire Emiratis each year; the DIFC and ADGM free zones are exempt.',
          'Le aziende mainland con 50 o più dipendenti devono assumere emiratini ogni anno; le zone franche DIFC e ADGM ne sono esenti.', 'UAE-SRC-05']
      ],
      f: [[['You pay', 'Paghi tu'], ['unemployment insurance AED 63 or 126 a year', 'assicurazione contro la disoccupazione 63 o 126 AED l’anno'], 'UAE-SRC-21']],
      w: ['Quit during probation without the notice required (14 days to leave, 30 to change employer) and you get a one-year labour ban.',
        'Se ti dimetti durante la prova senza il preavviso richiesto (14 giorni per partire, 30 per cambiare datore) ricevi un divieto di lavoro di un anno.', 'UAE-SRC-02'] },

    { k: 'work', p: 'eu uk', v: 'open',
      name: ['Green and Golden residence', 'Residenza Green e Golden'], law: 'Cabinet Resolution 65/2022',
      t: [['Self-sponsored residence: Green for five years with a degree and a skilled job, Golden for ten years for skill levels 1 and 2. Golden holders can live abroad without losing the visa. Recent graduates of a world top-100 university with a high GPA can also get a Golden Visa.',
        'Residenza senza sponsor: Green per cinque anni con una laurea e un lavoro qualificato, Golden per dieci anni per i livelli 1 e 2. I titolari Golden possono vivere all’estero senza perdere il visto. Anche i neolaureati di un’università tra le prime 100 al mondo con una media alta possono ottenere il Golden Visa.', 'UAE-SRC-09 UAE-SRC-10 UAE-SRC-01 UAE-SRC-11']],
      f: [
        [['Salary, Green', 'Stipendio, Green'], ['AED 15,000 a month', '15.000 AED al mese'], 'UAE-SRC-09'],
        [['Salary, Golden', 'Stipendio, Golden'], ['AED 30,000 a month', '30.000 AED al mese'], 'UAE-SRC-10']
      ] },

    { k: 'work', p: 'eu uk', v: 'open',
      name: ['Remote work residence', 'Residenza per lavoro da remoto'], law: 'Cabinet Resolution 65/2022',
      t: [['A one-year renewable visa for people employed abroad or owning a company abroad, with six months of bank statements and UAE health insurance.',
        'Un visto annuale rinnovabile per chi lavora per un datore estero o possiede un’azienda all’estero, con sei mesi di estratti conto e assicurazione sanitaria valida negli Emirati.', 'UAE-SRC-01 UAE-SRC-26']],
      f: [[['Income', 'Reddito'], ['$3,500 a month', '3.500 $ al mese'], 'UAE-SRC-01']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Researchers and PhDs', 'Ricercatori e dottorati'], law: 'Cabinet Resolution 65/2022',
      t: [
        ['Unpaid thesis or research stays up to 90 days fit the EU visa waiver with a hosting agreement; longer stays need a visa from the host. MBZUAI funds every PhD in AI fully, with a monthly stipend.',
          'I soggiorni di tesi o ricerca non retribuiti fino a 90 giorni rientrano nell’esenzione UE con una convenzione di accoglienza; quelli più lunghi richiedono un visto dall’ente. MBZUAI finanzia interamente ogni dottorato in IA, con una borsa mensile.', 'UAE-SRC-28 UAE-SRC-01 UAE-SRC-14'],
        ['Scientists recommended by the Emirates Scientists Council can get a ten-year Golden Visa.',
          'Gli scienziati raccomandati dall’Emirates Scientists Council possono ottenere un Golden Visa decennale.', 'UAE-SRC-10']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['The UAE has no working-holiday agreements; the job-seeker visa is the nearest alternative.',
        'Gli Emirati non hanno accordi di vacanza-lavoro; il visto per cercare lavoro è l’alternativa più vicina.', 'UAE-SRC-01 UAE-SRC-12']] },

    { k: 'short', p: 'eu', v: 'open',
      name: ['Visa waiver', 'Esenzione dal visto'], law: 'EU–UAE agreement 2015',
      t: [['EU citizens get 90 days in any 180 free of charge, except the Irish, who get 30 days on arrival. Working is a crime.',
        'I cittadini UE ottengono gratuitamente 90 giorni ogni 180, tranne gli irlandesi, che ricevono 30 giorni all’arrivo. Lavorare è un reato.', 'UAE-SRC-28 UAE-SRC-03']] },

    { k: 'short', p: 'uk', v: 'open',
      name: ['Visa on arrival', 'Visto all’arrivo'], law: 'Decree-Law 29/2021',
      t: [['British citizens get a free 30-day visa on arrival, extendable inside the country. Working is a crime.',
        'I cittadini britannici ottengono un visto gratuito di 30 giorni all’arrivo, prorogabile nel paese. Lavorare è un reato.', 'UAE-SRC-31 UAE-SRC-03']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['The UAE is not in the apostille convention: degrees and other documents need the full four-step consular legalisation in your home country (about €300 to €600), then attestation by the UAE Foreign Ministry.',
        'Gli Emirati non aderiscono alla convenzione sull’apostille: titoli di studio e altri documenti richiedono la legalizzazione consolare completa in quattro passaggi nel tuo paese (circa 300-600 €), poi l’attestazione del Ministero degli Esteri emiratino.', 'UAE-SRC-29 UAE-SRC-25']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Register your yearly lease on Ejari in Dubai or Tawtheeq in Abu Dhabi, usually in your first month.',
        'Registra il contratto d’affitto annuale su Ejari a Dubai o Tawtheeq ad Abu Dhabi, di solito entro il primo mese.', 'UAE-SRC-22 UAE-SRC-23']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['The employment entry permit lets you stay 60 days to complete the steps: your unified ID number (UID) is stamped at the border, then the medical fitness test (DHA in Dubai, SEHA in Abu Dhabi), biometrics for the Emirates ID at an ICP centre, and the digital residence visa. The plastic Emirates ID comes by courier.',
        'Il permesso d’ingresso per lavoro ti consente di restare 60 giorni per completare i passaggi: il numero d’identificazione unificato (UID) viene timbrato alla frontiera, poi il test di idoneità medica (DHA a Dubai, SEHA ad Abu Dhabi), i dati biometrici per l’Emirates ID in un centro ICP e il visto di residenza digitale. L’Emirates ID plastificato arriva per corriere.', 'UAE-SRC-01 UAE-SRC-17 UAE-SRC-06 UAE-SRC-08'],
      ['Until the Emirates ID and residence visa are issued, do not leave the country: leaving cancels the process and the fees paid.',
        'Finché l’Emirates ID e il visto di residenza non sono rilasciati, non lasciare il paese: partire annulla la procedura e le tasse pagate.', 'UAE-SRC-01']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['The Emirates ID number is your identifier for government services, bank and contracts.',
        'Il numero dell’Emirates ID è il tuo identificativo per servizi pubblici, banca e contratti.', 'UAE-SRC-06']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Your employer must give you health insurance, compulsory in Dubai, Abu Dhabi and, since 2024, nationwide.',
        'Il datore deve fornirti un’assicurazione sanitaria, obbligatoria a Dubai, ad Abu Dhabi e, dal 2024, in tutto il paese.', 'UAE-SRC-18 UAE-SRC-19 UAE-SRC-20']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Open a resident current account once you have the Emirates ID; salaries are paid through the Wages Protection System.',
        'Apri un conto corrente da residente una volta ottenuto l’Emirates ID; gli stipendi sono pagati tramite il Wages Protection System.', 'UAE-SRC-24']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['Register for the compulsory unemployment insurance (ILOE) at iloe.ae within 120 days, or pay an automatic AED 400 fine; it costs AED 63 or 126 a year.',
        'Iscriviti all’assicurazione obbligatoria contro la disoccupazione (ILOE) su iloe.ae entro 120 giorni, o paghi una multa automatica di 400 AED; costa 63 o 126 AED l’anno.', 'UAE-SRC-21'],
      ['A residence visa lapses after more than 180 days abroad, except for Golden Visa holders.',
        'Il visto di residenza decade dopo più di 180 giorni all’estero, tranne per i titolari del Golden Visa.', 'UAE-SRC-01 UAE-SRC-10']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Between entry and the residence visa you cannot leave the UAE: leaving cancels the process.',
      'Tra l’ingresso e il visto di residenza non si possono lasciare gli Emirati: partire annulla la procedura.', 'UAE-SRC-01'] },
    { p: 'eu uk', t: ['A “trial period” on a tourist visa is illegal work: fines of AED 100,000 to 1,000,000 for the employer, deportation and a ban for you.',
      'Un “periodo di prova” con visto turistico è lavoro irregolare: multe da 100.000 a 1.000.000 AED per il datore, espulsione e divieto per te.', 'UAE-SRC-03'] },
    { p: 'eu uk', t: ['Register for unemployment insurance within four months of starting, or pay an automatic AED 400 fine.',
      'Iscriviti all’assicurazione contro la disoccupazione entro quattro mesi dall’inizio, o paghi una multa automatica di 400 AED.', 'UAE-SRC-21'] },
    { p: 'eu', t: ['Italy lists the UAE as a tax haven: registering with AIRE is not enough, you must prove you really left Italy.',
      'L’Italia considera gli Emirati un paradiso fiscale: l’iscrizione all’AIRE non basta, bisogna dimostrare di aver davvero lasciato l’Italia.', 'UAE-SRC-30'] },
    { p: 'eu uk', t: ['Overstay costs AED 50 a day.',
      'L’overstay costa 50 AED al giorno.', 'UAE-SRC-06'] }
  ],

  open: [
    { st: 'open', t: ['Moving between Dubai and the other emirates can create a duplicate ID record that blocks visas for days.',
      'Spostarsi tra Dubai e gli altri emirati può creare un doppio record d’identità che blocca i visti per giorni.'] },
    { st: 'open', t: ['Banks often refuse the digital Emirates ID, so newcomers spend their first weeks in temporary housing.',
      'Le banche spesso rifiutano l’Emirates ID digitale, quindi chi arriva passa le prime settimane in alloggi temporanei.'] },
    { st: 'watch', t: ['Old healed TB scars mean a 6 to 8 week culture test, stuck in limbo.',
      'Le vecchie cicatrici da TBC guarite comportano una coltura di 6-8 settimane, bloccati nel limbo.'] },
    { st: 'open', t: ['Degree recognition through the higher-education ministry and DataFlow can take one to three months.',
      'Il riconoscimento dei titoli tramite il ministero dell’istruzione superiore e DataFlow può richiedere da uno a tre mesi.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/uae/uae_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('AE', {
  "UAE-SRC-01": ["Federal Decree-Law No. 29 of 2021 (Entry and Residence of Foreigners) e Cabinet Resolution No. 65 of 2022 (Executive…","https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/justice-safety-and-security/the-advanced-visa-system","2026-10-05"],
  "UAE-SRC-13": ["Residence Visa for Studying in the UAE","https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/residence-visa-for-studying-in-the-uae","2026-10-05"],
  "UAE-SRC-17": ["Cabinet Resolution No. 7 of 2008 e Cabinet Resolution No. 5 of 2016 (Medical Screening for Expatriates)","https://u.ae","2026-10-05"],
  "UAE-SRC-02": ["Federal Decree-Law No. 33 of 2021 (Regulation of Labour Relations) e Cabinet Resolution No. 1 of 2022","https://www.mohre.gov.ae/en/laws-and-regulations/laws.aspx","2026-10-05"],
  "UAE-SRC-18": ["Dubai Health Authority (DHA): Dubai Health Insurance Law No. 11 of 2013","https://www.dha.gov.ae","2026-10-05"],
  "UAE-SRC-19": ["Department of Health Abu Dhabi (DOH): Abu Dhabi Health Insurance Law No. 23 of 2005","https://www.doh.gov.ae","2026-10-05"],
  "UAE-SRC-03": ["Federal Decree-Law No. 9 of 2024 (Amendments to Federal Decree-Law No. 33 of 2021)","https://www.mohre.gov.ae/en/media-centre/news/12/8/2024/mohre-announces-new-penalties-for-labour-law-violations.aspx","2026-10-05"],
  "UAE-SRC-12": ["Jobseeker Visit Visa (Senza Sponsor)","https://u.ae/en/information-and-services/visa-and-emirates-id/for-visiting-the-uae/jobseeker-visit-visa","2026-10-05"],
  "UAE-SRC-15": ["Dubai International Financial Centre (DIFC): DIFC Employment Law No. 2 of 2019 e DIFC Law No. 4 of 2021","https://www.difc.com/business/laws-regulations/legal-database/difc-laws/employment-law-difc-law-no-2-of-2019","2026-10-05"],
  "UAE-SRC-07": ["General Directorate of Residency and Foreigners Affairs…: Portale Ufficiale GDRFA Dubai e Rete AMER","https://gdrfad.gov.ae","2026-10-05"],
  "UAE-SRC-29": ["Status Table Convention of 5 October 1961 (Apostille Convention)","https://www.hcch.net/en/instruments/conventions/status-table/?cid=41","2026-10-05"],
  "UAE-SRC-26": ["Ministry of Higher Education and Scientific Research…: Sistema di Riconoscimento Titoli Universitari Esteri (Certificate of Recognition)","https://www.mohesr.gov.ae","2026-10-05"],
  "UAE-SRC-05": ["MoHRE / Agenzia Stampa WAM: Decisioni Ministeriali sulle Quote di Emiratizzazione (Nafis) & Comunicato Ufficiale WAM 22 Giugno 2026","https://www.wam.ae/en/article/c0uqocb-mohre-reaffirms-june-deadline-for-private-sector","2026-10-05"],
  "UAE-SRC-21": ["Federal Decree-Law No. 13 of 2022 (Involuntary Loss of Employment - ILOE) & Portale ILOE","https://www.iloe.ae","2026-10-05"],
  "UAE-SRC-09": ["Green Residence for Skilled Employees and Freelancers","https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/green-visa","2026-10-05"],
  "UAE-SRC-10": ["Golden Residency Categories and Regulations (10 Anni)","https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa","2026-10-05"],
  "UAE-SRC-11": ["ICP / MoE: Golden Visa for Outstanding Graduates (Atenei Esteri e Nazionali)","https://icp.gov.ae/en/services/uae-golden-residency/","2026-10-05"],
  "UAE-SRC-28": ["Accordo di Esenzione dal Visto per Soggiorni di Breve Durata UE-EAU (GUUE L 125 del 21.05.2015)","https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:22015A0521%2801%29","2026-10-05"],
  "UAE-SRC-14": ["Mohamed bin Zayed University of Artificial Intelligence…: Borse di Studio Totali Ph.D. e M.Sc. in Intelligenza Artificiale","https://mbzuai.ac.ae/admissions/","2026-10-05"],
  "UAE-SRC-31": ["UK Foreign, Commonwealth & Development Office (FCDO): Foreign Travel Advice: United Arab Emirates (Entry Requirements & Security)","https://www.gov.uk/foreign-travel-advice/united-arab-emirates","2026-10-05"],
  "UAE-SRC-25": ["Sistema Elettronico di Attestazione Documenti Esteri (MoFA e-Attestation)","https://www.mofa.gov.ae/en/services/attestation","2026-10-05"],
  "UAE-SRC-22": ["Dubai Land Department (DLD): Legge n. 26 del 2007 e Legge n. 33 del 2008 (Sistema Ejari)","https://dubailand.gov.ae","2026-10-05"],
  "UAE-SRC-23": ["Legge n. 20 del 2006 (Sistema Tawtheeq)","https://www.tamm.abudhabi","2026-10-05"],
  "UAE-SRC-06": ["Federal Authority for Identity, Citizenship, Customs and…: Portale Ufficiale ICP e Piattaforma Smart Services","https://icp.gov.ae","2026-10-05"],
  "UAE-SRC-08": ["Residence Visa for Working in the UAE (Mainland & Free Zone)","https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/residence-visa-for-working-in-the-uae","2026-10-05"],
  "UAE-SRC-20": ["Delibera di Gabinetto sull'Assicurazione Sanitaria Federale Obbligatoria (2024)","https://u.ae/en/information-and-services/health-and-fitness/health-insurance","2026-10-05"],
  "UAE-SRC-24": ["Central Bank of the UAE (CBUAE): Tassi Ufficiali di Cambio CBUAE & Regolamento Wages Protection System (WPS)","https://www.cbuae.gov.ae","2026-10-05"],
  "UAE-SRC-30": ["Art. 2 comma 2-bis TUIR (DPR 917/1986) & D.M. 4 maggio 1999 (Blacklist) & Convenzione Doppie Imposizioni Italia-EAU…","https://www.def.finanze.it","2026-10-05"]
});

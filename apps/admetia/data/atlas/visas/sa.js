/* Visas and permits: Saudi Arabia. From research/visas_immigration/saudi_arabia/
 * (guide, source register, open questions), council check of 5 Oct 2026. The
 * review re-read only the Premium Residency fee; other fees are as the guide gives. */
ATLAS.addVisas({
  id: 'SA',
  folder: 'saudi_arabia',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Educational visa and student iqama', 'Visto educativo e iqama per studenti'], law: 'Council of Ministers decision 138',
      t: [
        ['Apply through the Study in Saudi portal: a long-term educational visa for a full degree, with a student iqama sponsored by the university; a short-term one for language courses and exchanges up to a year.',
          'Si fa domanda sul portale Study in Saudi: un visto educativo di lungo periodo per un corso completo, con iqama per studenti sponsorizzata dall’università; uno di breve periodo per corsi di lingua e scambi fino a un anno.', 'KSA-SRC-10'],
        ['Students may not work off campus at all; only paid research or teaching assistant roles at the university.',
          'Gli studenti non possono lavorare fuori dal campus; solo ruoli retribuiti di assistente alla ricerca o alla didattica nell’università.', 'KSA-SRC-01 KSA-SRC-10']
      ],
      f: [[['Visa fee', 'Costo del visto'], ['SAR 800, or free with a scholarship', '800 SAR, o gratuito con borsa'], 'KSA-SRC-10']] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Research internships and temporary work visas', 'Tirocini di ricerca e visti di lavoro temporanei'], law: 'Qiwa',
      t: [['There is no internship visa. KAUST’s Visiting Student Research Program takes STEM students for 3 to 6 months with a stipend, housing and the visa paid; a company hosting a graduate must sponsor a temporary work visa. Internships on a tourist or business visa lead to expulsion.',
        'Non esiste un visto per tirocinio. Il Visiting Student Research Program di KAUST accoglie studenti STEM per 3-6 mesi con borsa, alloggio e visto pagati; un’azienda che ospita un laureato deve sponsorizzare un visto di lavoro temporaneo. I tirocini con visto turistico o d’affari portano all’espulsione.', 'KSA-SRC-03 KSA-SRC-24 KSA-SRC-01']],
      f: [
        [['KAUST stipend', 'Borsa KAUST'], ['$1,000 a month', '1.000 $ al mese'], 'KSA-SRC-24'],
        [['Temporary work visa, paid by the company', 'Visto di lavoro temporaneo, pagato dall’azienda'], ['SAR 1,000 for 90 days', '1.000 SAR per 90 giorni'], 'KSA-SRC-03']
      ] },

    { k: 'search', p: 'eu uk', v: 'closed',
      name: ['After graduating', 'Dopo la laurea'], law: 'Labor Law',
      t: [['There is no job-search visa. A graduate who signs with an employer on Qiwa before the student iqama ends can transfer sponsorship without leaving; otherwise the university issues a final exit.',
        'Non esiste un visto per cercare lavoro. Un laureato che firma con un datore su Qiwa prima della scadenza dell’iqama per studenti può trasferire lo sponsor senza partire; altrimenti l’università emette l’uscita definitiva.', 'KSA-SRC-01 KSA-SRC-02 KSA-SRC-03']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Work visa and iqama', 'Visto di lavoro e iqama'], law: 'Labor Law arts 33–40',
      t: [
        ['The employer allocates a visa on Qiwa, you accept the electronic contract, and the visa is issued at a Tasheer centre; the iqama follows within 90 days of arrival. There is no income tax on salaries.',
          'Il datore assegna un visto su Qiwa, accetti il contratto elettronico, e il visto viene rilasciato in un centro Tasheer; l’iqama segue entro 90 giorni dall’arrivo. Sugli stipendi non c’è imposta sul reddito.', 'KSA-SRC-03 KSA-SRC-08 KSA-SRC-05 KSA-SRC-16'],
        ['The employer pays the visa, the yearly expat levy and the iqama; you pay for dependants. Some fields reserve 40% to 70% of roles for Saudis, and foreign engineers need five years of experience to register.',
          'Il datore paga visto, tassa annuale sugli espatriati e iqama; tu paghi per i familiari. Alcuni settori riservano dal 40% al 70% dei ruoli ai sauditi, e gli ingegneri stranieri hanno bisogno di cinque anni di esperienza per iscriversi all’ordine.', 'KSA-SRC-01 KSA-SRC-04 KSA-SRC-17']
      ],
      f: [
        [['Employer, yearly', 'Datore, ogni anno'], ['expat levy SAR 9,600 + iqama SAR 650', 'tassa espatriati 9.600 SAR + iqama 650 SAR'], 'KSA-SRC-01 KSA-SRC-07'],
        [['You, per dependant', 'Tu, per familiare'], ['SAR 400 a month', '400 SAR al mese'], 'KSA-SRC-06']
      ],
      w: ['No change of employer in the first 12 months unless the employer fails to pay or to issue the iqama.',
        'Nessun cambio di datore nei primi 12 mesi, salvo che il datore non paghi o non rilasci l’iqama.', 'KSA-SRC-02'] },

    { k: 'work', p: 'eu uk', v: 'limited',
      name: ['Premium Residency, Special Talent', 'Premium Residency, Special Talent'], law: 'Royal Decree M/106',
      t: [['Residence with no sponsor for five years, free to change jobs, without the expat or dependant levies; permanent after 30 months of actual stay.',
        'Residenza senza sponsor per cinque anni, liberi di cambiare lavoro, senza tasse su espatriati e familiari; permanente dopo 30 mesi di soggiorno effettivo.', 'KSA-SRC-09']],
      f: [
        [['Salary, executives', 'Stipendio, dirigenti'], ['SAR 80,000 a month', '80.000 SAR al mese'], 'KSA-SRC-09'],
        [['Salary, researchers', 'Stipendio, ricercatori'], ['SAR 14,000 a month', '14.000 SAR al mese'], 'KSA-SRC-09'],
        [['Fee', 'Costo'], ['SAR 4,000', '4.000 SAR'], 'KSA-SRC-09']
      ] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['KAUST and research visits', 'KAUST e visite di ricerca'], law: 'Study in Saudi',
      t: [
        ['Every KAUST master’s and PhD student gets a fellowship: no tuition, free campus housing and health cover, and a yearly allowance.',
          'Ogni studente di master e dottorato KAUST riceve una fellowship: niente tasse, alloggio nel campus e copertura sanitaria gratuiti, e un assegno annuale.', 'KSA-SRC-24'],
        ['Research stays up to six months need a host invitation and a short-term educational visa; a tourist visa does not give lab access.',
          'I soggiorni di ricerca fino a sei mesi richiedono l’invito di un ente e un visto educativo breve; il visto turistico non dà accesso ai laboratori.', 'KSA-SRC-08 KSA-SRC-10']
      ],
      f: [[['KAUST allowance', 'Assegno KAUST'], ['$20,000 a year (master’s), $25,000 to $30,000 (PhD)', '20.000 $ l’anno (master), da 25.000 a 30.000 $ (dottorato)'], 'KSA-SRC-24']] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Saudi Arabia has no working-holiday agreements; working on a tourist visa is a crime.',
        'L’Arabia Saudita non ha accordi di vacanza-lavoro; lavorare con un visto turistico è un reato.', 'KSA-SRC-01']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Tourist eVisa', 'eVisa turistico'], law: 'MOFA',
      t: [['EU and UK citizens get a one-year multiple-entry eVisa or a visa on arrival, up to 90 days a visit, with no work or internships.',
        'I cittadini UE e britannici ottengono un eVisa annuale a ingressi multipli o un visto all’arrivo, fino a 90 giorni per visita, senza lavoro né tirocini.', 'KSA-SRC-08 KSA-SRC-01']],
      f: [[['eVisa, insurance included', 'eVisa, assicurazione inclusa'], ['SAR 535', '535 SAR'], 'KSA-SRC-08']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Check and accept your contract on Qiwa, do the medical screening (Tasheer from Italy, Wafid elsewhere), apostille your degrees and a criminal record no older than 3 to 6 months, and collect the work visa sticker at a Tasheer centre.',
        'Verifica e accetta il contratto su Qiwa, fai lo screening medico (Tasheer dall’Italia, Wafid altrove), fai apostillare titoli di studio e un casellario giudiziale non più vecchio di 3-6 mesi, e ritira l’adesivo del visto di lavoro in un centro Tasheer.', 'KSA-SRC-03 KSA-SRC-19 KSA-SRC-21 KSA-SRC-08']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Within the first 30 days, register your National Address with Saudi Post (SPL). Leases are signed digitally on the government platform Ejar, which needs your residence permit (iqama) and Nafath login.',
        'Entro i primi 30 giorni, registra l’Indirizzo nazionale presso Saudi Post (SPL). I contratti d’affitto si firmano digitalmente sulla piattaforma pubblica Ejar, che richiede il permesso di soggiorno (iqama) e l’accesso Nafath.', 'KSA-SRC-14 KSA-SRC-15']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['At the border you get a 10-digit border number; within 90 days of entry your employer must pay the expat levy (SAR 9,600) and the iqama fee (SAR 650) and issue your iqama on Muqeem.',
        'Alla frontiera ricevi un numero di frontiera a 10 cifre; entro 90 giorni dall’ingresso il datore deve pagare la tassa sugli espatriati (9.600 SAR) e la tassa dell’iqama (650 SAR) ed emettere l’iqama su Muqeem.', 'KSA-SRC-05 KSA-SRC-07'],
      ['On a single-entry work visa, do not leave before the iqama is issued: the visa lapses at the border and the whole process starts again from abroad.',
        'Con un visto di lavoro a ingresso singolo, non partire prima del rilascio dell’iqama: il visto decade alla frontiera e l’intera procedura ricomincia dall’estero.', 'KSA-SRC-05']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Once you have the iqama, move your SIM from the border number to it, activate Absher at a self-service kiosk, and set up Nafath, the face-recognition login for government services and banks.',
        'Con l’iqama, trasferisci la SIM dal numero di frontiera all’iqama, attiva Absher a un chiosco self-service, e configura Nafath, l’accesso con riconoscimento facciale per servizi pubblici e banche.', 'KSA-SRC-18 KSA-SRC-05 KSA-SRC-13']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Within 30 days, have the local medical check, uploaded to the Efada system (SAR 150 to 300); your employer activates your health insurance with the Council of Health Insurance.',
        'Entro 30 giorni, fai la visita medica locale, caricata nel sistema Efada (150-300 SAR); il datore attiva l’assicurazione sanitaria presso il Consiglio per l’assicurazione sanitaria.', 'KSA-SRC-19 KSA-SRC-11']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['A payroll account at a Saudi bank (SNB, Al Rajhi, Riyad Bank, SAB) needs an active iqama, the National Address and Nafath: with the border number alone you cannot open one.',
        'Un conto stipendio presso una banca saudita (SNB, Al Rajhi, Riyad Bank, SAB) richiede l’iqama attiva, l’Indirizzo nazionale e Nafath: con il solo numero di frontiera non puoi aprirlo.', 'KSA-SRC-13']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['To travel abroad with an iqama you need an active exit and re-entry visa on Absher; leaving without one, or coming back late, cancels the iqama and brings a 3-year ban on returning to work.',
        'Per viaggiare all’estero con l’iqama serve un visto di uscita e rientro attivo su Absher; partire senza, o rientrare in ritardo, annulla l’iqama e comporta un divieto di 3 anni di rientro per lavoro.', 'KSA-SRC-05']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Before the iqama is issued you cannot leave: the single-entry work visa lapses at the border. Afterwards every trip needs an exit and re-entry visa on Absher.',
      'Prima del rilascio dell’iqama non si può uscire: il visto di lavoro a ingresso singolo decade alla frontiera. Dopo, ogni viaggio richiede un visto di uscita e rientro su Absher.', 'KSA-SRC-05'] },
    { p: 'eu uk', t: ['A positive test for HIV, hepatitis B or C, syphilis or TB scarring in the local medical means deportation and a ban across the Gulf.',
      'Un test positivo per HIV, epatite B o C, sifilide o esiti di TBC alla visita medica locale comporta l’espulsione e il divieto in tutto il Golfo.', 'KSA-SRC-19'] },
    { p: 'eu uk', t: ['Resign before two years and you get no end-of-service award.',
      'Se ti dimetti prima di due anni non ricevi alcuna indennità di fine servizio.', 'KSA-SRC-01'] },
    { p: 'eu', t: ['Italians who do not register with AIRE within 90 days remain tax residents in Italy, which then taxes the Saudi salary.',
      'Gli italiani che non si iscrivono all’AIRE entro 90 giorni restano residenti fiscali in Italia, che tassa lo stipendio saudita.', 'KSA-SRC-26'] },
    { p: 'eu uk', t: ['Foreigners pay no Saudi pension contributions, and there is no pension agreement with Italy: those years are a gap.',
      'Gli stranieri non versano contributi pensionistici sauditi, e non esiste un accordo pensionistico con l’Italia: quegli anni restano scoperti.', 'KSA-SRC-12'] }
  ],

  open: [
    { st: 'open', t: ['Most Saudi fees were not re-checked against official tables in the latest review.',
      'La maggior parte delle tariffe saudite non è stata ricontrollata sulle tabelle ufficiali nell’ultima revisione.'] },
    { st: 'open', t: ['Temporary bank accounts on a border number exist on paper; in practice new hires wait 30 to 45 days for a salary account.',
      'I conti bancari temporanei con il border number esistono sulla carta; in pratica i neoassunti aspettano 30-45 giorni per un conto stipendio.'] },
    { st: 'watch', t: ['Compound housing in Riyadh is saturated by companies moving regional headquarters there.',
      'Gli alloggi nei compound di Riad sono saturi per le aziende che vi spostano le sedi regionali.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/saudi_arabia/saudi_arabia_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('SA', {
  "KSA-SRC-10": ["Piattaforma Unificata 'Study in Saudi' & Delibera n. 138","https://studyinsaudi.moe.gov.sa/","2026-10-05"],
  "KSA-SRC-01": ["Saudi Labor Law (Regio Decreto M/51 del 23/08/1426H) e Riforma approvata con Delibera n. 89 del 06/08/2024 (in vigore…","https://hrsd.gov.sa/knowledge-centre/decisions-and-regulations-labor-law","2026-10-05"],
  "KSA-SRC-03": ["Piattaforma Unificata Qiwa (MHRSD / Takamol): Servizi Contratti Elettronici, Trasferimento e Visti di Lavoro","https://qiwa.sa/en/services/work-permits","2026-10-05"],
  "KSA-SRC-24": ["King Abdullah University of Science and Technology (KAUST): KAUST Fellowship & Visiting Student Research Program (VSRP)","https://www.kaust.edu.sa/en/study/funding","2026-10-05"],
  "KSA-SRC-02": ["Labour Reform Initiative (LRI) & Regolamento Piattaforma Qiwa","https://hrsd.gov.sa/en/media-center/news/041120201","2026-10-05"],
  "KSA-SRC-08": ["Portale Nazionale dei Visti (KSA Visa)","https://ksavisa.sa","2026-10-05"],
  "KSA-SRC-05": ["Tariffario Ufficiale Visti e Permessi di Soggiorno (Iqama)","https://www.absher.sa","2026-10-05"],
  "KSA-SRC-16": ["Programma Sedi Regionali delle Multinazionali (RHQ Program)","https://misa.gov.sa","2026-10-05"],
  "KSA-SRC-04": ["MHRSD: Decreti di Saudizzazione Settoriale (Nitaqat Mutawar 2024–2026)","https://www.hrsd.gov.sa/en/media-center/news/190220261","2026-10-05"],
  "KSA-SRC-17": ["Saudi Council of Engineers (SCE): Decreto di Accreditamento Obbligatorio per Professioni di Ingegneria","https://www.saudieng.sa","2026-10-05"],
  "KSA-SRC-07": ["MHRSD / SADAD: Contributo Finanziario sulle Licenze di Lavoro (Expat Levy / Maktab Amal)","https://hrsd.gov.sa","2026-10-05"],
  "KSA-SRC-06": ["Regolamento Finanziario sul Dependent Levy (Marafiqeen)","https://www.my.gov.sa","2026-10-05"],
  "KSA-SRC-09": ["Premium Residency Centre (PRC): Legge sulla Residenza Premium (Regio Decreto M/106) e Nuovi Prodotti 2024","https://pr.gov.sa","2026-10-05"],
  "KSA-SRC-19": ["Linee Guida di Screening Infettivologico per il Soggiorno","https://wafid.com","2026-10-05"],
  "KSA-SRC-21": ["Adesione dell'Arabia Saudita alla Convenzione Apostille del 1961","https://www.hcch.net/en/instruments/conventions/status-table/?cid=41","2026-10-05"],
  "KSA-SRC-14": ["Saudi Post Subul (SPL): Regolamento sull'Indirizzo Nazionale (National Address)","https://splonline.com.sa","2026-10-05"],
  "KSA-SRC-15": ["Sistema di Registrazione Obbligatoria delle Locazioni (Ejar)","https://www.ejar.sa","2026-10-05"],
  "KSA-SRC-18": ["Autorità delle Telecomunicazioni (CST): Normativa sull'Intestazione Biometrica delle SIM Card","https://www.cst.gov.sa","2026-10-05"],
  "KSA-SRC-13": ["Saudi Central Bank (SAMA): Linee Guida sull'Apertura Conti e Adeguata Verifica (KYC)","https://www.sama.gov.sa","2026-10-05"],
  "KSA-SRC-11": ["Regolamento Esecutivo della Polizza Sanitaria Unificata","https://chi.gov.sa","2026-10-05"],
  "KSA-SRC-26": ["Convenzione per evitare le doppie imposizioni Italia - Arabia Saudita (Legge 23/10/2009 n. 159)","https://www.def.finanze.it","2026-10-05"],
  "KSA-SRC-12": ["Organizzazione Generale per le Assicurazioni Sociali (GOSI): Regolamento Previdenziale per Lavoratori Non Sauditi","https://www.gosi.gov.sa","2026-10-05"]
});

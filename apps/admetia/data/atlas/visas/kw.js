/* Visas and permits: Kuwait. From research/visas_immigration/kuwait/
 * (guide, source register, open questions), council check of 5 Oct 2026; the
 * conversion surcharge and residence fees were confirmed in the review of
 * 6 Oct 2026, the recruitment fees were not. EU and UK passports only. */
ATLAS.addVisas({
  id: 'KW',
  folder: 'kuwait',
  checked: '2026-10-06',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student residence (Article 23)', 'Residenza per studio (articolo 23)'], law: 'Decree-Law 114/2024',
      t: [
        ['A university accredited by the higher-education ministry, such as Kuwait University, GUST or AUK, sponsors the visa. Kuwait is not in the Apostille Convention: diplomas and records need full consular legalisation, with wet-ink signatures.',
          'Un’università accreditata dal ministero dell’istruzione superiore, come Kuwait University, GUST o AUK, sponsorizza il visto. Il Kuwait non aderisce alla Convenzione dell’Aja: diplomi e certificati richiedono la legalizzazione consolare completa, con firme autografe.', 'KW-SRC-12 KW-SRC-02 KW-SRC-16 KW-SRC-18'],
        ['Paid work off campus is forbidden.',
          'Il lavoro retribuito fuori dal campus è vietato.', 'KW-SRC-01']
      ],
      f: [[['Fees', 'Costi'], ['visa 10 KWD; residence 20 KWD a year; health insurance 100 KWD a year', 'visto 10 KWD; residenza 20 KWD l’anno; assicurazione sanitaria 100 KWD l’anno'], 'KW-SRC-02 KW-SRC-10']] },

    { k: 'intern', p: 'eu uk', v: 'closed',
      name: ['Internships', 'Tirocini'], law: 'Decree-Law 114/2024',
      t: [['Kuwait has no visa for interns. An internship on a tourist, business or visit visa, even unpaid, is illegal work leading to detention and expulsion; only students already resident may do unpaid curricular placements.',
        'Il Kuwait non ha visti per tirocinanti. Un tirocinio con visto turistico, d’affari o di visita, anche non retribuito, è lavoro irregolare che porta a detenzione ed espulsione; solo gli studenti già residenti possono fare tirocini curricolari non retribuiti.', 'KW-SRC-01 KW-SRC-05 KW-SRC-02']] },

    { k: 'search', p: 'eu uk', v: 'closed',
      name: ['After graduating', 'Dopo la laurea'], law: 'Decree-Law 114/2024',
      t: [['There is no grace period. A graduate with a formal offer before the student residence is cancelled can move straight to a private-sector work residence; otherwise you must leave.',
        'Non esiste un periodo di grazia. Un laureato con un’offerta formale prima della cancellazione della residenza per studio può passare direttamente a una residenza per lavoro nel settore privato; altrimenti bisogna partire.', 'KW-SRC-01 KW-SRC-05 KW-SRC-02']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Private-sector work residence (Article 18)', 'Residenza per lavoro privato (articolo 18)'], law: 'Labour Law 6/2010',
      t: [
        ['The employer obtains the work permit and entry visa; within 60 days of arrival come the medical, fingerprints, residence and Civil ID. The employer pays all first-year fees by law.',
          'Il datore ottiene il permesso di lavoro e il visto d’ingresso; entro 60 giorni dall’arrivo seguono visita medica, impronte, residenza e Civil ID. Per legge il datore paga tutte le tasse del primo anno.', 'KW-SRC-06 KW-SRC-02 KW-SRC-01 KW-SRC-05'],
        ['Engineers need degree equivalency from the higher-education ministry, doctors the Kuwait licensing exam; enter with a downgraded job title and it cannot be corrected later.',
          'Gli ingegneri hanno bisogno dell’equipollenza del ministero dell’istruzione superiore, i medici dell’esame di abilitazione kuwaitiano; entrare con una qualifica declassata non si può correggere dopo.', 'KW-SRC-07 KW-SRC-12 KW-SRC-09 KW-SRC-06']
      ],
      f: [[['Employer, first year', 'Datore, primo anno'], ['305.25 KWD', '305,25 KWD'], 'KW-SRC-02 KW-SRC-06 KW-SRC-10 KW-SRC-08']],
      w: ['You cannot move to a new employer in the first three years without the current sponsor’s written consent.',
        'Non puoi passare a un nuovo datore nei primi tre anni senza il consenso scritto dello sponsor attuale.', 'KW-SRC-05 KW-SRC-06'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research visits and contracts', 'Visite e contratti di ricerca'], law: 'Decree-Law 114/2024',
      t: [['Unpaid archive work, interviews or seminars up to 90 days can be done on a tourist eVisa; structured research at KISR or Kuwait University needs a visit visa from the host, and paid research beyond 90 days a government contract. PhD students are students; KFAS or KISR funding makes them employees.',
        'Archivi, interviste o seminari non retribuiti fino a 90 giorni si possono fare con l’eVisa turistico; la ricerca strutturata al KISR o alla Kuwait University richiede un visto di visita dall’ente, e quella retribuita oltre 90 giorni un contratto governativo. I dottorandi sono studenti; un finanziamento KFAS o KISR li rende dipendenti.', 'KW-SRC-02 KW-SRC-04 KW-SRC-01 KW-SRC-12']] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Kuwait has no working-holiday agreements; working, even remotely for foreign clients, on a tourist visa leads to arrest and expulsion.',
        'Il Kuwait non ha accordi di vacanza-lavoro; lavorare con un visto turistico, anche da remoto per clienti esteri, porta all’arresto e all’espulsione.', 'KW-SRC-01 KW-SRC-05']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Tourist eVisa', 'eVisa turistico'], law: 'Ministerial resolution 2249/2025',
      t: [['EU and UK citizens get an eVisa or visa on arrival for up to 90 days, with no work. A visit visa can become residence only exceptionally, with a 150 KWD surcharge.',
        'I cittadini UE e britannici ottengono un eVisa o un visto all’arrivo fino a 90 giorni, senza lavorare. Un visto di visita può diventare residenza solo eccezionalmente, con una sovrattassa di 150 KWD.', 'KW-SRC-04 KW-SRC-02 KW-SRC-01 KW-SRC-03']],
      f: [[['eVisa', 'eVisa'], ['10 KWD a month', '10 KWD al mese'], 'KW-SRC-02']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Kuwait is not in the apostille convention: have your criminal record (under 3 months old) translated into Arabic and fully legalised at the Kuwaiti consulate in Milan or embassy in Rome (€25 a stamp), then countersigned by the Foreign Ministry in Kuwait (5 KWD a document).',
        'Il Kuwait non aderisce alla convenzione sull’apostille: fai tradurre in arabo il casellario giudiziale (di meno di 3 mesi) e legalizzarlo completamente presso il consolato kuwaitiano a Milano o l’ambasciata a Roma (25 € a timbro), poi controfirmare dal Ministero degli Esteri in Kuwait (5 KWD a documento).', 'KW-SRC-16 KW-SRC-18'],
      ['Since an inactive lung scar counts as unfit, a high-resolution chest X-ray at home before you resign or pay for the move is a prudent check.',
        'Poiché anche una cicatrice polmonare inattiva vale come non idoneità, una radiografia del torace ad alta risoluzione a casa prima di dimetterti o pagare il trasferimento è una verifica prudente.', 'KW-SRC-09 KW-SRC-17']
    ] },
    { k: 'address', p: 'eu uk', none: true },
    { k: 'card', p: 'eu uk', t: [
      ['Entering on the work entry visa starts a 60-day deadline to complete residence. You may not start work, even informally, before the Civil ID or its digital version is issued.',
        'L’ingresso con il visto d’ingresso per lavoro fa partire un termine di 60 giorni per completare la residenza. Non puoi iniziare a lavorare, nemmeno in prova, prima del rilascio della Civil ID o della sua versione digitale.', 'KW-SRC-01 KW-SRC-02 KW-SRC-08'],
      ['A positive or doubtful result in the medical screening, including healed tuberculosis scars, means deportation and a lifetime ban from all Gulf states.',
        'Un risultato positivo o dubbio nello screening medico, comprese cicatrici di tubercolosi guarita, comporta l’espulsione e il divieto a vita da tutti gli Stati del Golfo.', 'KW-SRC-09 KW-SRC-01 KW-SRC-21']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Register with the civil information authority (PACI) for the Civil ID: the digital ID appears at once in the Hawiti app, and the chip card costs 5.250 KWD.',
        'Registrati presso l’autorità per l’informazione civile (PACI) per la Civil ID: l’identità digitale compare subito nell’app Hawiti, e la tessera con chip costa 5,250 KWD.', 'KW-SRC-08']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['After arriving, have the compulsory medical screening at the Ministry of Health centres in Shuwaikh or Sabhan, and pay the state health insurance (100 KWD a year, or 130 KWD through Dhaman); for workers the employer pays.',
        'Dopo l’arrivo, fai lo screening medico obbligatorio presso i centri del Ministero della Salute a Shuwaikh o Sabhan, e paga l’assicurazione sanitaria statale (100 KWD l’anno, o 130 KWD tramite Dhaman); per i lavoratori paga il datore.', 'KW-SRC-09 KW-SRC-10']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['The Central Bank has frozen the cards and accounts of anyone who did not complete the biometric registration with the Interior Ministry; salaries are paid through the Wages Protection System.',
        'La Banca centrale ha bloccato carte e conti di chi non ha completato la registrazione biometrica presso il Ministero dell’Interno; gli stipendi sono pagati tramite il Wages Protection System.', 'KW-SRC-11 KW-SRC-15']
    ] },
    { k: 'keep', p: 'eu uk', none: true }
  ],

  traps: [
    { p: 'eu uk', t: ['Any old scar or calcification on the chest X-ray is treated as TB: medically unfit, deportation and a lifelong Gulf ban, with no appeal. Get a chest X-ray at home first.',
      'Qualsiasi vecchia cicatrice o calcificazione alla radiografia del torace è trattata come TBC: inidoneità, espulsione e divieto a vita nel Golfo, senza ricorso. Fai prima una radiografia a casa.', 'KW-SRC-09 KW-SRC-21 KW-SRC-17'] },
    { p: 'eu uk', t: ['An employer can file an “absence” report: the Civil ID is revoked, accounts frozen and a travel ban imposed.',
      'Un datore può presentare una denuncia di “assenza”: la Civil ID viene revocata, i conti congelati e scatta il divieto di espatrio.', 'KW-SRC-01 KW-SRC-05 KW-SRC-11'] },
    { p: 'eu uk', t: ['Overstaying a visit visa costs 10 KWD a day and a permanent ban.',
      'L’overstay su un visto di visita costa 10 KWD al giorno e un divieto permanente.', 'KW-SRC-01 KW-SRC-02'] },
    { p: 'eu uk', t: ['Using a degree the ministry has not recognised is a crime carrying up to five years in prison.',
      'Usare un titolo non riconosciuto dal ministero è un reato punito fino a cinque anni di carcere.', 'KW-SRC-24'] }
  ],

  open: [
    { st: 'open', t: ['How the ministry treats Italian three-year engineering degrees now that it handles equivalency itself.',
      'Come il ministero tratti le lauree triennali italiane in ingegneria ora che gestisce direttamente l’equipollenza.'] },
    { st: 'open', t: ['Who exactly qualifies for the 150 KWD visit-to-residence conversion.',
      'Chi esattamente possa accedere alla conversione da visita a residenza con 150 KWD.'] },
    { st: 'watch', t: ['Whether old, inactive TB scars will get a review procedure.',
      'Se le vecchie cicatrici da TBC inattive avranno una procedura di revisione.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/kuwait/kuwait_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('KW', {
  "KW-SRC-12": ["Regolamento Equipollenza ed Equivalenza Titoli Accademici Esteri (Moadala)","https://www.mohe.edu.kw","2026-10-06"],
  "KW-SRC-02": ["Risoluzione Ministeriale n. 2249 del 2025 (Regolamento Esecutivo Residenza Stranieri)","https://moi.gov.kw","2025-12-23"],
  "KW-SRC-16": ["Tabella dello Stato della Convenzione dell'Aja del 1961 sull'Apostille (Convenzione n. 12)","https://www.hcch.net/en/instruments/conventions/status-table/?cid=41","2026-10-06"],
  "KW-SRC-18": ["Consolato Generale del Kuwait a Milano: Requisiti di Legalizzazione Titoli di Studio, Casellario Penale e Documenti Commerciali","https://www.kuwaitconsulate.it","2026-10-06"],
  "KW-SRC-01": ["Decreto-Legge n. 114 del 2024 sulla Residenza degli Stranieri (Kuwait Aliens Residence Law)","https://www.e.gov.kw","2025-01-05"],
  "KW-SRC-10": ["Regolamento Assicurazione Sanitaria Obbligatoria per Espatriati (Dhaman Health Assurance)","https://www.moh.gov.kw","2026-10-06"],
  "KW-SRC-05": ["Legge n. 6 del 2010 sul Lavoro nel Settore Privato (Private Sector Labour Law)","https://manpower.gov.kw","2026-10-06"],
  "KW-SRC-06": ["Public Authority for Manpower (PAM): Risoluzione PAM n. 4 del 2025 (Tassa standard di 150 KWD per nuovo reclutamento estero su portale Ashal)","https://manpower.gov.kw","2026-10-06"],
  "KW-SRC-07": ["Public Authority for Manpower (PAM): Risoluzione di Revoca Accordo KSE e Riconoscimento Titoli Ingegneri tramite MoHE (Settembre 2024)","https://manpower.gov.kw","2024-09-08"],
  "KW-SRC-09": ["Dipartimento per la Medicina dei Porti e degli Espatriati (Screening Medico Obbligatorio Post-Arrivo)","https://www.moh.gov.kw","2026-10-06"],
  "KW-SRC-08": ["Public Authority for Civil Information (PACI): Legge n. 32 del 1982 sull'Anagrafe Civile e Portale Servizi Civil ID / App Kuwait Mobile ID (Hawiti)","https://www.paci.gov.kw","2026-10-06"],
  "KW-SRC-04": ["Portale Visti Elettronici del Kuwait (Kuwait eVisa Portal)","https://kuwaitvisa.moi.gov.kw","2026-10-06"],
  "KW-SRC-03": ["Decisione Ministeriale n. 1091 del 2026 (Tassa di conversione visti di visita e modifiche al DM 2249/2025)","https://moi.gov.kw","2026-08-02"],
  "KW-SRC-17": ["Guida ai Servizi Consolari e Quadro per i Cittadini Italiani","https://ambkuwait.esteri.it","2026-10-06"],
  "KW-SRC-21": ["Gulf Health Council (GHC): Portale Wafid (ex-GAMCA) per il pre-screening medico dei paesi ad alta incidenza sanitaria","https://wafid.com","2026-10-06"],
  "KW-SRC-11": ["Central Bank of Kuwait (CBK): Tassi di Cambio Ufficiali e Regolamento Wages Protection System (WPS)","https://www.cbk.gov.kw","2026-10-06"],
  "KW-SRC-15": ["Direttiva di Sicurezza per la Campagna Biometrica e Proroga Scadenza al 30/12/2024","https://moi.gov.kw","2024-12-30"],
  "KW-SRC-24": ["Legge n. 78 del 2019 sul Divieto e la Sanzione Penale dell'Uso di Titoli di Studio Non Accreditati","https://www.e.gov.kw","2026-10-06"]
});

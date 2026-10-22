/* Visas and permits: Oman. From research/visas_immigration/oman/
 * (guide, source register, open questions), council check of 5 Oct 2026; the
 * work-permit fees were confirmed in the review of 6 Oct 2026. EU and UK only. */
ATLAS.addVisas({
  id: 'OM',
  folder: 'oman',
  checked: '2026-10-06',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student visa', 'Visto per studenti'], law: 'Royal Decree 40/1993',
      t: [
        ['The university, accredited by the higher-education ministry, sponsors the visa; you need an unconditional offer, apostilled certificates with an equivalency certificate, and a medical on arrival.',
          'L’università, accreditata dal ministero dell’istruzione superiore, sponsorizza il visto; servono un’ammissione incondizionata, titoli apostillati con certificato di equipollenza, e una visita medica all’arrivo.', 'OM-SRC-03 OM-SRC-15 OM-SRC-20 OM-SRC-12'],
        ['Students may not work at all, not even part time; only unpaid required placements with the university’s approval.',
          'Gli studenti non possono lavorare in alcun modo, nemmeno part-time; solo tirocini obbligatori non retribuiti con l’approvazione dell’università.', 'OM-SRC-01 OM-SRC-15']
      ],
      f: [[['Fees', 'Costi'], ['visa 30 OMR; card 5 OMR a year; medical 30 OMR', 'visto 30 OMR; tessera 5 OMR l’anno; visita medica 30 OMR'], 'OM-SRC-03 OM-SRC-13 OM-SRC-12']] },

    { k: 'intern', p: 'eu uk', v: 'limited',
      name: ['Student training visa', 'Visto per formazione'], law: 'ROP executive regulation',
      t: [['There is no company internship visa: an unpaid internship arranged privately is illegal work. A training visa can be sponsored only by an Omani university or accredited training institution; it pays an allowance, not a wage, and cannot become a work visa inside the country.',
        'Non esiste un visto per tirocinio in azienda: un tirocinio non retribuito concordato privatamente è lavoro irregolare. Un visto per formazione può essere sponsorizzato solo da un’università o un ente formativo omanita accreditato; prevede un’indennità, non uno stipendio, e non può diventare visto di lavoro nel paese.', 'OM-SRC-01 OM-SRC-03 OM-SRC-06']],
      f: [[['Fee', 'Costo'], ['20 OMR', '20 OMR'], 'OM-SRC-03']] },

    { k: 'search', p: 'eu uk', v: 'closed',
      name: ['After graduating', 'Dopo la laurea'], law: 'Labour Law',
      t: [['There is no job-search permit: graduates have about 30 days to leave or be hired, and Omanisation keeps most entry-level roles for Omanis.',
        'Non esiste un permesso per cercare lavoro: i laureati hanno circa 30 giorni per partire o essere assunti, e l’omanizzazione riserva la maggior parte dei ruoli junior agli omaniti.', 'OM-SRC-01 OM-SRC-15 OM-SRC-08 OM-SRC-09']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Employment visa and labour permit', 'Visto di lavoro e permesso di lavoro'], law: 'Royal Decree 53/2023',
      t: [
        ['The employer obtains labour clearance and the employment visa before you travel; after arrival come the medical, fingerprints and the resident card. The employer pays all fees.',
          'Il datore ottiene il nulla osta lavorativo e il visto di lavoro prima della partenza; dopo l’arrivo seguono visita medica, impronte e carta di residente. Il datore paga tutte le tasse.', 'OM-SRC-01 OM-SRC-03 OM-SRC-12 OM-SRC-13'],
        ['Over 207 occupations are reserved for Omanis, including marketing, sales, HR and, since January 2026, programmers and computer engineers. Engineers and doctors also need professional licensing.',
          'Oltre 207 professioni sono riservate agli omaniti, tra cui marketing, vendite, risorse umane e, da gennaio 2026, programmatori e ingegneri informatici. Ingegneri e medici hanno anche bisogno dell’abilitazione professionale.', 'OM-SRC-08 OM-SRC-09 OM-SRC-15 OM-SRC-12']
      ],
      f: [[['Labour permit, specialists', 'Permesso di lavoro, specialisti'], ['251 OMR, 176 OMR for compliant employers', '251 OMR, 176 OMR per i datori in regola'], 'OM-SRC-07']] },

    { k: 'work', p: 'eu uk', v: 'limited',
      name: ['Investor residency', 'Residenza per investitori'], law: 'Invest Oman',
      t: [['Residence without a sponsor: ten years for an investment of 500,000 OMR (or a 200,000 OMR property in tourist complexes), five years for 250,000 OMR.',
        'Residenza senza sponsor: dieci anni per un investimento di 500.000 OMR (o un immobile da 200.000 OMR nei complessi turistici), cinque anni per 250.000 OMR.', 'OM-SRC-14']],
      f: [[['Fee', 'Costo'], ['500 OMR (10 years), 250 OMR (5 years)', '500 OMR (10 anni), 250 OMR (5 anni)'], 'OM-SRC-14']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research visits and PhDs', 'Visite di ricerca e dottorati'], law: 'MoHERI',
      t: [
        ['Fieldwork, sampling or interviews as a tourist are forbidden: a host institution requests a research visa and the ministry issues a researcher facilitation letter.',
          'Ricerca sul campo, campionamenti o interviste da turista sono vietati: un ente ospitante chiede un visto per ricerca e il ministero rilascia una lettera di facilitazione per ricercatori.', 'OM-SRC-01 OM-SRC-03 OM-SRC-15'],
        ['PhD students hold a student visa; there is no income tax, and the scholarship needs no labour permit.',
          'I dottorandi hanno un visto per studenti; non c’è imposta sul reddito, e la borsa non richiede permesso di lavoro.', 'OM-SRC-15 OM-SRC-26 OM-SRC-01']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: '—',
      t: [['Oman has no working-holiday agreements; casual work on a tourist visa leads to detention, expulsion and a Gulf-wide ban.',
        'L’Oman non ha accordi di vacanza-lavoro; lavori occasionali con visto turistico portano a detenzione, espulsione e divieto in tutto il Golfo.', 'OM-SRC-01']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['14 days visa-free, or a tourist eVisa', '14 giorni senza visto, o eVisa turistico'], law: 'ROP decision 109/2026',
      t: [['Citizens of 103 countries, the EU included, enter free for 14 days with a return ticket, hotel booking and health insurance; before day 14 you can switch to a 30-day tourist visa. Since October 2023 no visit visa can become a work visa inside Oman.',
        'I cittadini di 103 paesi, UE compresa, entrano gratis per 14 giorni con biglietto di ritorno, prenotazione alberghiera e assicurazione sanitaria; prima del 14° giorno si può passare a un visto turistico di 30 giorni. Da ottobre 2023 nessun visto di visita può diventare visto di lavoro in Oman.', 'OM-SRC-05 OM-SRC-06']],
      f: [[['30-day eVisa', 'eVisa di 30 giorni'], ['20 OMR', '20 OMR'], 'OM-SRC-03']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['A tourist visa cannot be turned into a work visa inside Oman: your employer gets the employment visa online, and you travel with a passport valid more than 6 months and the printed visa.',
        'Un visto turistico non può essere convertito in visto di lavoro in Oman: il datore ottiene online il visto di lavoro, e tu viaggi con un passaporto valido oltre 6 mesi e il visto stampato.', 'OM-SRC-06 OM-SRC-03'],
      ['Do not pack medicines with benzodiazepines, opioids such as codeine or tramadol, ADHD stimulants or CBD without prior approval from the Ministry of Health: it can mean arrest for drug trafficking at Muscat airport.',
        'Non mettere in valigia farmaci con benzodiazepine, oppioidi come codeina o tramadolo, stimolanti per l’ADHD o CBD senza autorizzazione preventiva del Ministero della Salute: può significare l’arresto per traffico di stupefacenti all’aeroporto di Mascate.', 'OM-SRC-24']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Register your lease on the Muscat Municipality’s Ejar portal, paying the 3% municipal fee; electricity and water are then transferred to that contract.',
        'Registra il contratto d’affitto sul portale Ejar della Municipalità di Mascate, pagando la tassa comunale del 3%; elettricità e acqua vengono poi intestate a quel contratto.', 'OM-SRC-18']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['Once declared fit, give fingerprints and a photo at the police Civil Status directorate and receive the resident card on the spot (10 OMR for 2 years). You may not work before the card is issued and the contract registered with the Ministry of Labour.',
        'Una volta dichiarato idoneo, fornisci impronte e foto alla Direzione dello stato civile della polizia e ricevi subito la carta di residente (10 OMR per 2 anni). Non puoi lavorare prima del rilascio della carta e della registrazione del contratto presso il Ministero del Lavoro.', 'OM-SRC-13 OM-SRC-01']
    ] },
    { k: 'number', p: 'eu uk', none: true },
    { k: 'health', p: 'eu uk', t: [
      ['Book the medical fitness check through a Sanad centre (30 OMR): blood tests for HIV, hepatitis B and C and syphilis, and a tuberculosis test. An unfit result means the visa is cancelled and you are expelled, with no appeal.',
        'Prenota la visita di idoneità tramite un centro Sanad (30 OMR): esami del sangue per HIV, epatite B e C e sifilide, e un test per la tubercolosi. Un esito di non idoneità comporta l’annullamento del visto e l’espulsione, senza ricorso.', 'OM-SRC-12']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Buy an Omani SIM in your passport name, needed for digital identity; then open an account (Bank Muscat, NBO, Sohar International) with your resident card, passport and the employer’s salary transfer letter, linked to the Wages Protection System.',
        'Compra una SIM omanita a nome del passaporto, necessaria per l’identità digitale; poi apri un conto (Bank Muscat, NBO, Sohar International) con carta di residente, passaporto e lettera di accredito stipendio del datore, collegato al Wages Protection System.', 'OM-SRC-01']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['Overstaying costs 10 OMR a day on a visit visa and 20 OMR a day from 30 days after a resident card expires, with no cap: you cannot leave until you pay.',
        'Restare oltre il consentito costa 10 OMR al giorno con un visto di visita e 20 OMR al giorno da 30 giorni dopo la scadenza della carta di residente, senza tetto: non puoi partire finché non paghi.', 'OM-SRC-19'],
      ['Italians can convert their driving licence without a test, with an eye check and a 20 OMR fee.',
        'Gli italiani possono convertire la patente senza esami, con una visita della vista e una tariffa di 20 OMR.', 'OM-SRC-22']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Overstay costs 10 OMR a day with no cap, and you cannot board until it is paid.',
      'L’overstay costa 10 OMR al giorno senza tetto, e non si può imbarcare finché non è pagato.', 'OM-SRC-19'] },
    { p: 'eu uk', t: ['Working before the resident card is issued and the contract registered is illegal work, punished with jail, fines and a Gulf-wide ban.',
      'Lavorare prima che la carta di residente sia rilasciata e il contratto registrato è lavoro irregolare, punito con carcere, multe e divieto in tutto il Golfo.', 'OM-SRC-01'] },
    { p: 'eu uk', t: ['A positive test for HIV, hepatitis B or C, syphilis or TB in the arrival medical means expulsion, with no appeal.',
      'Un test positivo per HIV, epatite B o C, sifilide o TBC alla visita medica d’arrivo comporta l’espulsione, senza ricorso.', 'OM-SRC-12'] },
    { p: 'eu uk', t: ['Benzodiazepines, codeine, tramadol, ADHD stimulants or CBD without Health Ministry approval lead to arrest at customs.',
      'Benzodiazepine, codeina, tramadolo, stimolanti per ADHD o CBD senza autorizzazione del ministero della Salute portano all’arresto in dogana.', 'OM-SRC-24'] }
  ],

  open: [
    { st: 'open', t: ['Bringing family normally needs 600 OMR a month; whether the police accept 300 OMR for academics, doctors and engineers is case by case.',
      'Portare la famiglia richiede di norma 600 OMR al mese; se la polizia accetti 300 OMR per accademici, medici e ingegneri si decide caso per caso.'] },
    { st: 'open', t: ['Ministries still often ask for foreign-ministry attestation of documents despite the apostille.',
      'I ministeri chiedono ancora spesso l’attestazione del ministero degli Esteri sui documenti nonostante l’apostille.'] },
    { st: 'watch', t: ['Whether business and management graduates will also need source verification of degrees.',
      'Se anche i laureati in economia e management dovranno far verificare i titoli alla fonte.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/oman/oman_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('OM', {
  "OM-SRC-03": ["Royal Oman Police (ROP): Portale Nazionale eVisa & Tipologie di Visto Elettronico","https://evisa.rop.gov.om","2026-10-05"],
  "OM-SRC-15": ["Ministry of Higher Education (MoHERI): Regolamento Equivalenza Titoli di Studio Esteri e Visti Accademici","https://www.moheri.gov.om","2026-10-05"],
  "OM-SRC-20": ["Adesione dell'Oman alla Convenzione Apostille del 1961","https://www.hcch.net/en/instruments/conventions/status-table/?cid=41","2026-10-05"],
  "OM-SRC-12": ["Ministry of Health (MoH): Regolamento Screening Medical Fitness per Lavoratori e Residenti Stranieri","https://moh.gov.om","2026-10-05"],
  "OM-SRC-01": ["Regio Decreto 53/2023 (Nuova Legge sul Lavoro dell'Oman - Labour Law)","https://decree.om/rd/2023-53/","2026-10-05"],
  "OM-SRC-13": ["ROP Directorate General of Civil Status: Regolamento di Rilascio della Carta d'Identità di Residenza (Bitaqa Muqeem)","https://www.rop.gov.om","2026-10-05"],
  "OM-SRC-06": ["Royal Oman Police (ROP): Direttiva ROP del 31 Ottobre 2023 (Divieto Assoluto di Conversione Visto Turistico in Lavoro in loco)","https://evisa.rop.gov.om","2026-10-05"],
  "OM-SRC-08": ["Ministry of Labour (MoL): Decisione Ministeriale 235/2022 (Professioni Riservate agli Omaniti)","https://decree.om/md/2022-235/","2026-10-05"],
  "OM-SRC-09": ["Ministry of Labour (MoL): Decisione Ministeriale 501/2024 (Piano di Omanizzazione Scaglionata 2024–2027)","https://decree.om/md/2024-501/","2026-10-05"],
  "OM-SRC-07": ["Ministry of Labour (MoL): Decisione Ministeriale 602/2025 & MD 44/2026 (Regolamento Licenze e Tasse Permessi di Lavoro)","https://decree.om/md/2025-602/","2026-10-05"],
  "OM-SRC-14": ["MOCIIP / Invest Oman: Investor Residency Programme (IRP - Golden Visa Oman)","https://investoman.om","2026-10-05"],
  "OM-SRC-26": ["Convenzione per evitare le doppie imposizioni Italia - Oman (Legge 14/02/2003 n. 45)","https://www.def.finanze.it","2026-10-05"],
  "OM-SRC-05": ["Decisione ROP 109/2026 (Codificazione dell'Esenzione 14 Giorni e Conversione Visti Turistici)","https://decree.om/md/2026-109/","2026-10-05"],
  "OM-SRC-24": ["Regio Decreto 17/1999 (Legge sul Contrasto a Stupefacenti e Sostanze Psicotrope)","https://decree.om/rd/1999-17/","2026-10-05"],
  "OM-SRC-18": ["Muscat Municipality (Baladiyat Muscat): Regolamento Registrazione Contratti di Locazione (Ejar)","https://www.mm.gov.om","2026-10-05"],
  "OM-SRC-19": ["ROP Exit Penalty Payment Service: Sistema Telematico Sanzioni Overstay ROP","https://www.rop.gov.om/onlineservices/ExitPenaltyPayment/en/","2026-10-05"],
  "OM-SRC-22": ["Requisiti di Ingresso, Visti, Legalizzazioni e Circolazione","https://ambmascate.esteri.it","2026-10-05"]
});

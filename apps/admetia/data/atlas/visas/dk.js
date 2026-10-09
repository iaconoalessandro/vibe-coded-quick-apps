/* Visas and permits: Denmark. From research/visas_immigration/denmark/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'DK',
  folder: 'denmark',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa or work permit. Within three months (six if looking for work), apply online (form OD1) for the EU residence document; it is free.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto né di permesso di lavoro. Entro tre mesi (sei se si cerca lavoro) si chiede online (modulo OD1) il documento di soggiorno UE; è gratuito.', 'DK-SRC-01'],
      ['Then register an address to get your CPR number and the yellow health card, which gives free public health care; book at International Citizen Service (ICS).',
        'Poi si registra un indirizzo per ricevere il numero CPR e la tessera sanitaria gialla, che dà accesso gratuito alla sanità pubblica; l’appuntamento si prende all’International Citizen Service (ICS).', 'DK-SRC-23 DK-SRC-24 DK-SRC-22'],
      ['Salaries go to a Danish account registered as your NemKonto.',
        'Gli stipendi vanno su un conto danese registrato come NemKonto.', 'DK-SRC-26']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Higher education permit', 'Permesso per istruzione superiore'], law: 'Udlændingeloven § 9c',
      t: [
        ['The university starts form ST1 online and you complete it, then give biometrics at a consulate or VFS centre. Non-EU students pay tuition.',
          'L’università avvia il modulo ST1 online e tu lo completi, poi si rilasciano i dati biometrici a un consolato o centro VFS. Gli studenti extra-UE pagano le tasse universitarie.', 'DK-SRC-09'],
        ['Work up to 90 hours a month from September to May and full time in June, July and August; self-employment is not allowed.',
          'Si lavora fino a 90 ore al mese da settembre a maggio e a tempo pieno a giugno, luglio e agosto; il lavoro autonomo non è consentito.', 'DK-SRC-09'],
        ['Denmark is outside the EU rules on student mobility: a student permit from another EU country gives no right to study here, Erasmus included.',
          'La Danimarca è fuori dalle regole UE sulla mobilità studentesca: un permesso per studio di un altro paese UE non dà diritto di studiare qui, nemmeno in Erasmus.', 'DK-SRC-12']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['DKK 7,426 a month (DKK 89,112 a year), in your own account', 'DKK 7.426 al mese (DKK 89.112 l’anno), su un conto a tuo nome'], 'DK-SRC-09'],
        [['Fee', 'Costo'], ['DKK 3,060', 'DKK 3.060'], 'DK-SRC-18']
      ],
      w: ['Working even one hour over 90 a month in term is illegal work and can cost the permit.',
        'Lavorare anche un’ora oltre le 90 mensili durante le lezioni è lavoro illegale e può costare il permesso.', 'DK-SRC-09 DK-SRC-11'] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Intern permit', 'Permesso per tirocinanti'], law: 'Udlændingeloven § 9k',
      t: [
        ['For people aged 18 to 35 whose internship is part of a degree abroad, or within 12 months of graduating; an internship agreement, collective-agreement pay and accident insurance, for up to 18 months, only with that host.',
          'Per chi ha dai 18 ai 35 anni e svolge il tirocinio come parte di un corso all’estero, o entro 12 mesi dalla laurea; convenzione di tirocinio, paga da contratto collettivo e assicurazione infortuni, fino a 18 mesi, solo presso quell’ente.', 'DK-SRC-08'],
        ['Students already in Denmark do an internship their degree requires on their student permit.',
          'Gli studenti già in Danimarca svolgono il tirocinio previsto dal corso con il permesso per studio.', 'DK-SRC-08 DK-SRC-09']
      ],
      f: [
        [['Fee', 'Costo'], ['DKK 4,305', 'DKK 4.305'], 'DK-SRC-18'],
        [['Own funds if unpaid', 'Fondi propri se non retribuito'], ['DKK 7,426 a month', 'DKK 7.426 al mese'], 'DK-SRC-08']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search stay after a Danish degree', 'Soggiorno per ricerca lavoro dopo una laurea danese'], law: 'Udlændingeloven § 9a (15)',
      t: [
        ['After a Danish degree you can stay to look for work: three years if your study application was filed before 1 October 2026, one year if filed later; PhD graduates keep three years.',
          'Dopo una laurea danese si può restare a cercare lavoro: tre anni se la domanda di studio è stata presentata prima del 1° ottobre 2026, un anno se dopo; chi ha un dottorato mantiene tre anni.', 'DK-SRC-10'],
        ['During the search you keep student work rights (90 hours a month); a job at the pay-limit levels lets you start work on the day you apply for the work permit.',
          'Durante la ricerca restano i diritti di lavoro da studente (90 ore al mese); un lavoro alle soglie del Pay Limit consente di iniziare il giorno stesso della domanda di permesso.', 'DK-SRC-10 DK-SRC-02 DK-SRC-03']
      ],
      f: [[['Fee', 'Costo'], ['DKK 3,060', 'DKK 3.060'], 'DK-SRC-18']],
      w: ['The old establishment card was abolished on 1 April 2023; offers built on it are out of date.',
        'La vecchia establishment card è stata abolita il 1° aprile 2023; le proposte basate su di essa sono superate.', 'DK-SRC-17'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Pay limit and fast-track schemes', 'Pay Limit e Fast Track'], law: 'Udlændingeloven § 9a (2)',
      t: [
        ['The pay limit scheme needs only a salary above the threshold, paid into a Danish account; the supplementary scheme a lower salary and a job advertised for two weeks on Jobnet and EURES. Neither needs a specific degree.',
          'Il Pay Limit richiede solo uno stipendio sopra la soglia, accreditato su un conto danese; il Supplementary Pay Limit uno stipendio più basso e un annuncio di due settimane su Jobnet ed EURES. Nessuno dei due richiede una laurea specifica.', 'DK-SRC-02 DK-SRC-03'],
        ['With a certified employer (fast track) you may start work as soon as the application and biometrics are in, without waiting for the decision. Jobs on the positive lists need a degree or skilled qualification in that occupation.',
          'Con un datore certificato (Fast Track) si può iniziare a lavorare appena inviati domanda e dati biometrici, senza aspettare la decisione. I lavori delle liste positive richiedono una laurea o una qualifica in quella professione.', 'DK-SRC-04 DK-SRC-05 DK-SRC-06']
      ],
      f: [
        [['Pay limit, 2026', 'Soglia Pay Limit, 2026'], ['DKK 552,000 a year', 'DKK 552.000 l’anno'], 'DK-SRC-02'],
        [['Supplementary pay limit, 2026', 'Soglia supplementare, 2026'], ['DKK 446,000 a year', 'DKK 446.000 l’anno'], 'DK-SRC-03'],
        [['Fee', 'Costo'], ['DKK 6,810', 'DKK 6.810'], 'DK-SRC-18']
      ],
      w: ['Benefits such as a car, housing or uncertain bonuses do not count towards the pay limit.',
        'Benefit come auto, alloggio o bonus incerti non contano per la soglia.', 'DK-SRC-02'] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary employment', 'Lavoro ordinario'], law: 'Udlændingeloven § 9a (1)',
      t: [['Below those levels the job must be advertised on Jobnet and EURES for two weeks with no suitable Danish or EU candidate, the regional labour council is consulted, and pay must follow Danish collective agreements.',
        'Sotto quelle soglie il posto va pubblicato su Jobnet ed EURES per due settimane senza un candidato danese o UE adatto, si consulta il consiglio regionale del lavoro, e la paga deve seguire i contratti collettivi danesi.', 'DK-SRC-07']],
      f: [[['Fee', 'Costo'], ['DKK 6,810', 'DKK 6.810'], 'DK-SRC-18']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['PhD and guest researchers', 'Dottorato e ricercatori ospiti'], law: 'Udlændingeloven § 9a (13)',
      t: [
        ['A Danish PhD is a salaried job under the academics’ collective agreement, with 17.1% pension paid by the employer; the university starts form PHD1.',
          'Un dottorato danese è un impiego stipendiato secondo il contratto collettivo degli accademici, con il 17,1% di pensione a carico del datore; l’università avvia il modulo PHD1.', 'DK-SRC-13 DK-SRC-14'],
        ['A guest researcher invited but not paid by a Danish institution applies on form AR1 and must show their own means.',
          'Un ricercatore ospite invitato ma non pagato da un ente danese fa domanda con il modulo AR1 e deve dimostrare mezzi propri.', 'DK-SRC-15']
      ],
      f: [
        [['Typical PhD salary', 'Stipendio tipico da dottorando'], ['DKK 32,500 to 36,500 a month', 'DKK 32.500-36.500 al mese'], 'DK-SRC-14'],
        [['Guest researcher’s means', 'Mezzi del ricercatore ospite'], ['DKK 7,426 a month alone', 'DKK 7.426 al mese da solo'], 'DK-SRC-15']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'Udlændingeloven § 9h',
      t: [['Denmark has working-holiday agreements only with Australia, Canada, New Zealand, Japan, South Korea, Chile and Argentina.',
        'La Danimarca ha accordi di vacanza-lavoro solo con Australia, Canada, Nuova Zelanda, Giappone, Corea del Sud, Cile e Argentina.', 'DK-SRC-16']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'Udlændingeloven § 9h',
      t: [['For citizens of the partner countries aged 18 to 30 (35 for Australia and Canada): 12 months, work for at most six (nine for Canadians) and no more than three with one employer.',
        'Per cittadini dei paesi partner dai 18 ai 30 anni (35 per Australia e Canada): 12 mesi, lavoro al massimo per sei (nove per i canadesi) e non più di tre con lo stesso datore.', 'DK-SRC-16']],
      f: [[['Fee', 'Costo'], ['DKK 3,060', 'DKK 3.060'], 'DK-SRC-18']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180; no ordinary paid work, only meetings or unpaid guest lectures. Other nationalities may need a Schengen visa.',
        'Fino a 90 giorni ogni 180; nessun lavoro retribuito ordinario, solo riunioni o lezioni come ospite non retribuite. Altre nazionalità possono aver bisogno di un visto Schengen.', 'DK-SRC-19']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Book your appointment online at icitizen.dk at one of the International Citizen Service centres (Copenhagen, Aarhus, Odense, Aalborg), which handle residence, civil registration, health card and tax in one visit.',
        'Prenota online su icitizen.dk l’appuntamento presso uno dei centri International Citizen Service (Copenaghen, Aarhus, Odense, Aalborg), che gestiscono soggiorno, anagrafe, tessera sanitaria e fisco in un’unica visita.', 'DK-SRC-22']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Give your biometrics (photo and fingerprints) at a Danish mission or visa centre abroad, or at SIRI on arrival, as part of the permit application.',
        'Fornisci i dati biometrici (foto e impronte) presso una rappresentanza danese o un centro visti all’estero, o al SIRI all’arrivo, come parte della domanda di permesso.', 'DK-SRC-29']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register in the civil register (Folkeregister) with a valid lease (lejekontrakt) or a written statement from the landlord: that is what gives you a CPR number.',
        'Registrati all’anagrafe (Folkeregister) con un contratto d’affitto valido (lejekontrakt) o una dichiarazione scritta del proprietario: è ciò che ti dà il numero CPR.', 'DK-SRC-23']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Show your work contract or university enrolment letter to receive the EU registration certificate (registreringsbevis).',
        'Presenta il contratto di lavoro o la lettera d’iscrizione universitaria per ricevere il certificato di registrazione UE (registreringsbevis).', 'DK-SRC-01 DK-SRC-22']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Confirm your presence at SIRI or the centre, and the residence card (opholdskort) arrives by post within 2 to 4 weeks.',
        'Conferma la tua presenza al SIRI o al centro, e la carta di soggiorno (opholdskort) arriva per posta entro 2-4 settimane.', 'DK-SRC-22']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['The 10-digit CPR number (birth date plus four digits) is the key to banking, leases, phone contracts, health care and pay.',
        'Il numero CPR a 10 cifre (data di nascita più quattro cifre) è la chiave per banca, affitti, contratti telefonici, sanità e stipendio.', 'DK-SRC-23'],
      ['With it, fill in your income estimate (forskudsopgørelse) at skat.dk to get a tax card: without one, your employer must withhold 55% tax, plus the 8% labour market contribution.',
        'Con quello, compila la stima del reddito (forskudsopgørelse) su skat.dk per ottenere la scheda fiscale: senza, il datore deve trattenere il 55% di imposta, più il contributo dell’8% sul lavoro.', 'DK-SRC-27 DK-SRC-31']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Registering gives you the yellow health card (sundhedskort), with your CPR number and assigned GP: it makes GP and hospital care free.',
        'La registrazione ti dà la tessera sanitaria gialla (sundhedskort), con il numero CPR e il medico di base assegnato: rende gratuite le cure dal medico e in ospedale.', 'DK-SRC-24']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Activate MitID, the national digital ID used for borger.dk, skat.dk, the state digital post and online banking: in the app by scanning your passport chip, or in person at Borgerservice.',
        'Attiva MitID, l’identità digitale nazionale per borger.dk, skat.dk, la posta digitale di Stato e l’home banking: nell’app leggendo il chip del passaporto, o di persona al Borgerservice.', 'DK-SRC-25'],
      ['Open an account at a Danish bank and register it as your NemKonto: employers and every public body pay into it through your CPR number.',
        'Apri un conto presso una banca danese e registralo come NemKonto: i datori di lavoro e tutti gli enti pubblici vi versano i pagamenti tramite il numero CPR.', 'DK-SRC-26']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['Apply to extend or change status before your permit expires to keep the right to stay while you wait.',
        'Chiedi la proroga o il cambio di status prima che il permesso scada per mantenere il diritto di soggiorno durante l’attesa.', 'DK-SRC-11'],
      ['If the old permit has expired and the new card has not arrived, you cannot travel abroad: the receipt is not a travel document. For an emergency, ask SIRI for a re-entry permit first.',
        'Se il vecchio permesso è scaduto e la nuova carta non è arrivata, non puoi viaggiare all’estero: la ricevuta non è un documento di viaggio. In caso di emergenza, chiedi prima al SIRI un permesso di rientro.', 'DK-SRC-11']
    ] }
  ],

  traps: [
    { p: 'eu uk us other', t: ['Without a tax card, 55% of your salary is withheld, plus the 8% labour-market contribution; request it on skat.dk as soon as you have your CPR number.',
      'Senza scheda fiscale si trattiene il 55% dello stipendio, più il contributo dell’8%; chiedila su skat.dk appena hai il numero CPR.', 'DK-SRC-31 DK-SRC-27'] },
    { p: 'uk us other', t: ['If your permit has expired and the new card has not arrived, do not travel abroad without a re-entry permit: the SIRI receipt is not a travel document.',
      'Se il permesso è scaduto e la nuova carta non è arrivata, non viaggiare all’estero senza un permesso di rientro: la ricevuta SIRI non è un documento di viaggio.', 'DK-SRC-11'] },
    { p: 'uk us other', t: ['Family reunion outside the skilled schemes requires both partners to be 24, a bank guarantee of DKK 61,709.34, suitable housing and Danish tests.',
      'Il ricongiungimento fuori dagli schemi qualificati richiede che entrambi i partner abbiano 24 anni, una garanzia bancaria di DKK 61.709,34, un alloggio adeguato e test di danese.', 'DK-SRC-21'] }
  ],

  open: [
    { st: 'watch', t: ['The supplementary pay-limit scheme closes to new applications whenever national unemployment passes the legal threshold.',
      'Lo schema supplementare si chiude alle nuove domande quando la disoccupazione nazionale supera la soglia di legge.'] },
    { st: 'open', t: ['Without a phone that reads your passport chip, activating MitID can take two to four weeks.',
      'Senza un telefono che legga il chip del passaporto, attivare MitID può richiedere da due a quattro settimane.'] },
    { st: 'open', t: ['Fast-track workers may start at once, but a Danish bank account needs the CPR number and MitID, which can take 15 to 25 days.',
      'Chi entra con il Fast Track può iniziare subito, ma un conto danese richiede numero CPR e MitID, che possono richiedere 15-25 giorni.'] },
    { st: 'open', t: ['PhD students paid from abroad risk double taxation unless the tax treaty is applied correctly.',
      'I dottorandi pagati dall’estero rischiano la doppia imposizione se la convenzione fiscale non è applicata correttamente.'] },
    { st: 'watch', t: ['The master’s reform (Kandidatreform) may shorten some programmes; no primary source has been read yet.',
      'La riforma dei master (Kandidatreform) potrebbe accorciare alcuni corsi; non è ancora stata letta una fonte primaria.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/denmark/denmark_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('DK', {
  "DK-SRC-01": ["SIRI (Udlændinge- og Integrationsministeriet): EU-opholdsdokument (Registreringsbevis ex Direttiva 2004/38/CE, Modulo OD1)","https://nyidanmark.dk/en-GB/Applying/Residence-as-a-Nordic-citizen-or-EU-EEA-citizen/EU-student","2026-10-05"],
  "DK-SRC-23": ["CPR Administrationen (Indenrigs- og Sundhedsministeriet): Registrazione anagrafica al Folkeregister e assegnazione CPR-nummer (Lov om Det Centrale Personregister)","https://cpr.dk/borgere/hvad-er-et-cpr-nummer","2026-10-05"],
  "DK-SRC-24": ["Sundhedsdatastyrelsen / Borger.dk: Sundhedskort (Yellow Card) e copertura sanitaria universale primaria","https://www.borger.dk/sundhed-og-sygdom/sygesikring-og-laegevalg/Sundhedskortet","2026-10-05"],
  "DK-SRC-22": ["International Citizen Service (ICS): Onboarding unificato: Registrazione SIRI, Folkeregister CPR, Sundhedskort, MitID, Skattekort","https://icitizen.dk","2026-10-05"],
  "DK-SRC-26": ["NemKonto (Økonomistyrelsen): Assegnazione del conto bancario personale come NemKonto per accrediti pubblici","https://www.nemkonto.dk","2026-10-05"],
  "DK-SRC-09": ["SIRI (Udlændinge- og Integrationsministeriet): Higher Education Study Permit (Modulo ST1, diritti lavoro 90 ore/mese e full-time estivo)","https://nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education","2026-10-05"],
  "DK-SRC-12": ["Protocollo n. 22 sulla posizione della Danimarca (Opt-out GAI e non applicabilità Direttiva UE 2016/801)","https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:12016E/PRO/22","2026-10-05"],
  "DK-SRC-18": ["SIRI / Udlændingestyrelsen: Tariffe ufficiali per pratiche SIRI 2026 (Case Order ID: Lavoro 6.810 DKK, Studio 3.060 DKK, Stage 4.305 DKK)","https://nyidanmark.dk/en-GB/You-want-to-apply/Fee","2026-10-05"],
  "DK-SRC-11": ["Folketinget / Retsinformation: Lovbekendtgørelse af udlændingeloven (Testo Unico Immigrazione Danese, LBK nr. 1079 coord. 2026)","https://www.retsinformation.dk/eli/lta/2026/1079","2026-10-05"],
  "DK-SRC-08": ["SIRI (Udlændinge- og Integrationsministeriet): Praktikantordningen (Tirocinio curriculare ed extracurriculare, Modulo PR1, tariffa 4.305 DKK)","https://nyidanmark.dk/en-GB/You-want-to-apply/Intern","2026-10-05"],
  "DK-SRC-10": ["SIRI (Udlændinge- og Integrationsministeriet): Riforma 1° Ottobre 2026: Jobsøgningsophold (Ricerca lavoro post-studio 1 anno vs 3 anni)","https://nyidanmark.dk/en-GB/You-want-to-apply/Study/Study---job-seeking","2026-10-05"],
  "DK-SRC-02": ["SIRI (Udlændinge- og Integrationsministeriet): Beløbsordningen (Pay Limit Scheme 2026: soglia 552.000 DKK/anno, Modulo AR1)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme","2026-10-05"],
  "DK-SRC-03": ["SIRI (Udlændinge- og Integrationsministeriet): Supplerende Beløbsordning (Supplementary Pay Limit Scheme 2026: soglia 446.000 DKK/anno)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/Supplementary-pay-limit-scheme","2026-10-05"],
  "DK-SRC-17": ["SIRI (Udlændinge- og Integrationsministeriet): Abolizione Etableringskort (01/04/2023) e disciplina post-laurea vigente","https://nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Establishment-card-repealed","2026-10-05"],
  "DK-SRC-04": ["SIRI (Udlændinge- og Integrationsministeriet): Fast-track ordningen (Aziende certificate, Kvikstart, 5 track, Modulo AR6)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track","2026-10-05"],
  "DK-SRC-05": ["SIRI (Udlændinge- og Integrationsministeriet): Positivlisten for personer med en videregående uddannelse (Aggiornamenti semestrali)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-people-with-a-higher-education","2026-10-05"],
  "DK-SRC-06": ["SIRI (Udlændinge- og Integrationsministeriet): Positivlisten for faglært arbejde (Lavoratori specializzati con formazione professionale)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-skilled-work","2026-10-05"],
  "DK-SRC-07": ["SIRI (Udlændinge- og Integrationsministeriet): Almindelig beskæftigelse (Lavoro ordinario ex § 9a, stk. 1 e test RAR del mercato)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/Ordinary-employment","2026-10-05"],
  "DK-SRC-13": ["SIRI (Udlændinge- og Integrationsministeriet): Ph.d.-uddannelse (Dottorato di ricerca, Modulo PHD1, inquadramento salariale e ferie)","https://nyidanmark.dk/en-GB/You-want-to-apply/Phd","2026-10-05"],
  "DK-SRC-14": ["Medarbejder- og Kompetencestyrelsen: Cirkulære om overenskomst for Akademikere i staten (Contratto collettivo AC ricercatori e PhD)","https://medst.dk/overenskomster-og-aftaler/akademikere/","2026-10-05"],
  "DK-SRC-15": ["SIRI (Udlændinge- og Integrationsministeriet): Gæsteforsker (Guest researcher non retribuito o finanziato dall'estero, Modulo AR1)","https://nyidanmark.dk/en-GB/You-want-to-apply/Work/Guest-researcher","2026-10-05"],
  "DK-SRC-16": ["SIRI (Udlændinge- og Integrationsministeriet): Working Holiday Scheme (Accordi bilaterali per 7+ paesi, Modulo WH1, tariffa 3.060 DKK)","https://nyidanmark.dk/en-GB/You-want-to-apply/Working-Holiday","2026-10-05"],
  "DK-SRC-19": ["Udlændingestyrelsen (DIS): Visto C Schengen per turismo e affari (Regolamento CE 810/2009 e proroga Modulo VF1)","https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa","2026-10-05"],
  "DK-SRC-29": ["Udenrigsministeriet: Rete consolare danese e convenzioni VFS Global per visti D e raccolta dati biometrici all'estero","https://um.dk/en/travel-and-residence","2026-10-05"],
  "DK-SRC-27": ["Skatteforvaltningen (Skat): Skattekort (Hovedkort, Bikort, Frikort) e imposta sul lavoro AM-bidrag (8%)","https://skat.dk/borger/skattekort-og-forskudsopgoerelse","2026-10-05"],
  "DK-SRC-31": ["Skatteforvaltningen (Skat): Get a tax card as a non-Danish employee (assenza di skattekort: 55% di imposta","https://skat.dk/en-us/businesses/employees-and-pay/non-danish-labour/get-a-tax-card-as-a-non-danish-employee","2026-10-06"],
  "DK-SRC-25": ["Digitaliseringsstyrelsen: MitID – Identità digitale nazionale danese per l'accesso ai servizi pubblici e bancari","https://www.mitid.dk","2026-10-05"],
  "DK-SRC-21": ["Udlændingestyrelsen (DIS): Ricongiungimento familiare nazionale ex § 9 Udlændingeloven (24-års-reglen, bankgaranti, Modulo FA1)","https://nyidanmark.dk/en-GB/You-want-to-apply/Family/Family-reunification","2026-10-05"]
});

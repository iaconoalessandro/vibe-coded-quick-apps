/* Visas and permits: Greece. From research/visas_immigration/greece/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'GR',
  folder: 'greece',
  checked: '2026-10-05',
  review: '2027-04-05',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens may work from the first day; the employer registers the job in the ERGANI II system before you start.',
        'I cittadini UE, SEE e svizzeri possono lavorare dal primo giorno; il datore registra l’assunzione nel sistema ERGANI II prima dell’inizio.', 'GR-SRC-02'],
      ['Staying over three months, register in person at the police aliens department; the certificate never expires and costs €0.50.',
        'Per un soggiorno oltre i tre mesi ci si registra di persona all’ufficio stranieri della polizia; il certificato non scade e costa 0,50 €.', 'GR-SRC-02 GR-SRC-18'],
      ['You need a tax number (AFM) and a social-security number (AMKA) to rent, work and see a doctor.',
        'Servono il codice fiscale (AFM) e il numero di previdenza (AMKA) per affittare, lavorare e andare dal medico.', 'GR-SRC-22 GR-SRC-32']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student residence permit (H.1)', 'Permesso di soggiorno per studio (H.1)'], law: 'Law 5038/2023',
      t: [
        ['Full-time admission to an accredited Greek university, then the D visa, and the permit online at services.migration.gov.gr, issued for the whole course.',
          'Ammissione a tempo pieno in un’università greca accreditata, poi il visto D, e il permesso online su services.migration.gov.gr, rilasciato per tutto il corso.', 'GR-SRC-09 GR-SRC-16'],
        ['You may work part time up to 20 hours a week (80 a month) with no separate authorisation.',
          'Si può lavorare part time fino a 20 ore a settimana (80 al mese) senza autorizzazione separata.', 'GR-SRC-05'],
        ['A non-EU student with a permit from another EU country can study here up to 360 days with no Greek visa, after notifying the migration ministry.',
          'Uno studente extra-UE con permesso di un altro paese UE può studiare qui fino a 360 giorni senza visto greco, dopo aver avvisato il ministero della Migrazione.', 'GR-SRC-01 GR-SRC-26']
      ],
      f: [
        [['Funds', 'Mezzi'], ['€400 a month (€4,800 a year)', '400 € al mese (4.800 € l’anno)'], 'GR-SRC-25'],
        [['Fees', 'Costi'], ['€90 to €180 visa; €150 + €16 card', '90-180 € il visto; 150 € + 16 € la carta'], 'GR-SRC-15 GR-SRC-06']
      ],
      w: ['Travel insurance is refused: the policy must state three set covers, starting with €1,500 for doctors and medicines.',
        'Le assicurazioni di viaggio vengono rifiutate: la polizza deve indicare tre coperture fissate, a partire da 1.500 € per visite e farmaci.', 'GR-SRC-24'] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Trainee permit', 'Permesso per tirocinanti'], law: 'Law 5038/2023 arts. 114-115',
      t: [['For students of foreign universities: a three-way traineeship agreement with a Greek host, which also undertakes to cover living and return costs, for up to six months. An internship within a Greek degree is covered by the student permit.',
        'Per studenti di università estere: una convenzione tripartita con un ente greco, che si impegna anche a coprire costi di soggiorno e rientro, fino a sei mesi. Un tirocinio all’interno di un corso greco è coperto dal permesso per studio.', 'GR-SRC-09']],
      f: [[['Fees', 'Costi'], ['€150 + €16 card', '150 € + 16 € la carta'], 'GR-SRC-06']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Permit to look for work or start a business (H.11)', 'Permesso per cercare lavoro o avviare un’impresa (H.11)'], law: 'Law 5038/2023 art. 119',
      t: [['After a Greek bachelor’s, master’s or PhD, or a research project: 12 months, not extendable, applied for online before the student permit expires. A qualified job then converts it inside Greece, outside the quotas.',
        'Dopo una laurea, un master o un dottorato greci, o un progetto di ricerca: 12 mesi, non prorogabili, chiesti online prima che scada il permesso per studio. Un lavoro qualificato lo converte poi in Grecia, fuori dalle quote.', 'GR-SRC-04 GR-SRC-16']],
      f: [[['Fees', 'Costi'], ['€150 + €16 card', '150 € + 16 € la carta'], 'GR-SRC-06']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card (E.1)', 'Carta Blu UE (E.1)'], law: 'Law 5038/2023 arts. 27-46',
      t: [['A contract of at least six months in a highly qualified job and a three-year degree, or five years of experience (three in the last seven for IT); the card lasts three years, decisions take 30 days with an accredited employer, and family joins at once with the right to work.',
        'Un contratto di almeno sei mesi in un lavoro altamente qualificato e una laurea triennale, o cinque anni di esperienza (tre negli ultimi sette per l’informatica); la carta dura tre anni, la decisione arriva in 30 giorni con un datore accreditato, e la famiglia arriva subito con diritto al lavoro.', 'GR-SRC-07 GR-SRC-11']],
      f: [
        [['Salary, standard', 'Stipendio, soglia ordinaria'], ['€31,918.83 a year', '31.918,83 € l’anno'], 'GR-SRC-08'],
        [['Salary, shortage jobs and recent graduates', 'Stipendio, professioni carenti e neolaureati'], ['€25,535.06 a year', '25.535,06 € l’anno'], 'GR-SRC-08'],
        [['Fees', 'Costi'], ['€180 visa; €150 + €16 card', '180 € il visto; 150 € + 16 € la carta'], 'GR-SRC-15 GR-SRC-06']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary employment through quotas (metaklisi)', 'Lavoro ordinario con le quote (metaklisi)'], law: 'Law 5038/2023',
      t: [['Hiring from abroad for ordinary jobs runs on two-year quotas by region and occupation: the employer requests clearance online, then you get the D visa, at no less than the minimum wage.',
        'L’assunzione dall’estero per lavori ordinari passa per quote biennali per regione e mestiere: il datore chiede il nulla osta online, poi si ottiene il visto D, a una paga non inferiore al salario minimo.', 'GR-SRC-33 GR-SRC-01']],
      f: [[['Minimum wage', 'Salario minimo'], ['€830 gross a month, 14 payments', '830 € lordi al mese, 14 mensilità'], 'GR-SRC-21']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit (H.3), and PhDs', 'Permesso per ricercatori (H.3) e dottorati'], law: 'Law 5038/2023 arts. 110-111',
      t: [
        ['A hosting agreement with an accredited Greek research body or university, which covers return costs; family reunion at once.',
          'Una convenzione di accoglienza con un ente di ricerca o un’università greca accreditati, che copre i costi di rientro; ricongiungimento immediato.', 'GR-SRC-09 GR-SRC-11'],
        ['Academic scholarships from public bodies are free of income tax.',
          'Le borse accademiche di enti pubblici sono esenti da imposte.', 'GR-SRC-03']
      ],
      f: [[['Minimum means', 'Mezzi minimi'], ['€900 a month', '900 € al mese'], 'GR-SRC-10']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Greece has working-holiday agreements only with Australia and Canada.',
        'La Grecia ha accordi di vacanza-lavoro solo con Australia e Canada.', 'GR-SRC-29 GR-SRC-30']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Australians aged 18 to 30 (500 places a year) and Canadians aged 18 to 35 can stay up to 12 months; apply only at a Greek consulate in those countries.',
        'Gli australiani dai 18 ai 30 anni (500 posti all’anno) e i canadesi dai 18 ai 35 possono restare fino a 12 mesi; si fa domanda solo ai consolati greci in quei paesi.', 'GR-SRC-29 GR-SRC-30']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180 with no local work; other nationalities may need a Schengen visa.',
        'Fino a 90 giorni ogni 180 senza lavoro locale; altre nazionalità possono aver bisogno di un visto Schengen.', 'GR-SRC-28 GR-SRC-15']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'GR-SRC-15']] },

    { k: 'tax', p: 'eu uk us other', v: 'open',
      name: ['50% income-tax relief for new residents', 'Sconto del 50% sull’imposta per i nuovi residenti'], law: 'Law 4172/2013 art. 5Γ',
      t: [['Workers who move their tax residence to Greece pay half the income tax on their employment income for seven tax years.',
        'Chi trasferisce la residenza fiscale in Grecia paga metà dell’imposta sul reddito da lavoro per sette anni fiscali.', 'GR-SRC-03 GR-SRC-23']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: you may enter with a passport or ID card and work from day one, once your employer has registered the job in the ERGANI II system.',
        'Niente da preparare in anticipo: puoi entrare con passaporto o carta d’identità e lavorare dal primo giorno, dopo che il datore ha registrato l’assunzione nel sistema ERGANI II.', 'GR-SRC-02']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Get documents apostilled in the issuing country first, then translated in Greece by a translator registered at metafraseis.services.gov.gr: Greek offices refuse translations made before the apostille. A foreign criminal record counts for only 3 months.',
        'Fai apostillare i documenti prima nel paese che li ha emessi, poi tradurli in Grecia da un traduttore registrato su metafraseis.services.gov.gr: gli uffici greci rifiutano le traduzioni fatte prima dell’apostille. Il casellario giudiziale estero vale solo 3 mesi.', 'GR-SRC-31 GR-SRC-01'],
      ['Apply for the national D visa at a Greek consulate: €180, or €90 for study.',
        'Chiedi il visto nazionale D a un consolato greco: 180 €, o 90 € per studio.', 'GR-SRC-15']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Paper leases count for nothing: your landlord registers the lease on Taxisnet and you accept it online with your tax number (AFM). If you stay with someone, they file a sworn declaration on gov.gr.',
        'I contratti d’affitto cartacei non valgono nulla: il proprietario registra il contratto su Taxisnet e tu lo accetti online con il codice fiscale (AFM). Se sei ospite, chi ti ospita presenta una dichiarazione sostitutiva su gov.gr.', 'GR-SRC-22']
    ] },
    { k: 'card', p: 'eu', t: [
      ['After 3 months, register in person at a police Aliens Department, with your enrolment and European Health Insurance Card if you study. The paper certificate costs €0.50, is issued the same day and does not expire; in Athens there are no bookings, so queue from about 4:30 in the morning.',
        'Dopo 3 mesi, registrati di persona presso un Dipartimento stranieri della polizia, con iscrizione e Tessera europea di assicurazione malattia se studi. Il certificato cartaceo costa 0,50 €, viene rilasciato in giornata e non scade; ad Atene non si prenota, quindi mettiti in fila dalle 4:30 circa del mattino.', 'GR-SRC-02 GR-SRC-18 GR-SRC-06 GR-SRC-19']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Before your D visa expires, apply online at services.migration.gov.gr for the residence permit (€150, plus €16 for the card); the receipt with a QR code lets you work until the biometrics appointment. Filing late makes you irregular, with fines of €600 to €1,200.',
        'Prima che scada il visto D, chiedi online il permesso di soggiorno su services.migration.gov.gr (150 €, più 16 € per la carta); la ricevuta con codice QR ti permette di lavorare fino all’appuntamento per i dati biometrici. Fare domanda in ritardo ti rende irregolare, con multe da 600 a 1.200 €.', 'GR-SRC-06 GR-SRC-16 GR-SRC-01']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Get a tax number (AFM) first: without it you cannot register a lease or sign a work contract. Apply at the tax office, naming a resident tax representative, or through myAADElive.',
        'Ottieni prima il codice fiscale (AFM): senza non puoi registrare un affitto né firmare un contratto di lavoro. Chiedilo all’ufficio delle imposte, nominando un rappresentante fiscale residente, o tramite myAADElive.', 'GR-SRC-22'],
      ['Then ask for a social security number (AMKA) at a citizens’ service centre (KEP) or e-EFKA; the PAAYPA number is only for asylum seekers.',
        'Poi chiedi il numero di previdenza sociale (AMKA) presso un centro servizi al cittadino (KEP) o l’e-EFKA; il numero PAAYPA è solo per i richiedenti asilo.', 'GR-SRC-32']
    ] },
    { k: 'health', p: 'eu', t: [
      ['EU students register with their European Health Insurance Card.',
        'Gli studenti UE si registrano con la Tessera europea di assicurazione malattia.', 'GR-SRC-02 GR-SRC-18']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Generic travel policies are refused for the permit: the insurance must state €1,500 for doctor visits and medicines, €10,000 for hospital stays (with at most 20% excess) and €15,000 for permanent disability.',
        'Le polizze di viaggio generiche vengono respinte per il permesso: l’assicurazione deve indicare 1.500 € per visite e farmaci, 10.000 € per ricoveri (con franchigia massima del 20%) e 15.000 € per invalidità permanente.', 'GR-SRC-24']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['High-street banks ask for extensive paperwork; an authorised institution with a Greek IBAN, such as Viva.com, is a quicker start.',
        'Le banche tradizionali chiedono molta documentazione; un istituto autorizzato con IBAN greco, come Viva.com, è un inizio più rapido.', 'GR-SRC-22']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['Nothing to renew: the EU registration certificate does not expire.',
        'Niente da rinnovare: il certificato di registrazione UE non scade.', 'GR-SRC-18']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['The application receipt makes your stay legal only inside Greece: with an expired D visa, do not change planes in a Schengen airport. You may leave and return only by a direct route to a non-Schengen country, and only while the yearly ministry circular allows it.',
        'La ricevuta della domanda rende legale il soggiorno solo in Grecia: con il visto D scaduto, non fare scalo in un aeroporto Schengen. Puoi uscire e rientrare solo per una via diretta verso un paese extra-Schengen, e solo finché lo consente la circolare ministeriale annuale.', 'GR-SRC-20']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['File the permit online before the last day of your D visa: late filing is refused and irregular stay is fined €600 to €1,200.',
      'Presenta il permesso online prima dell’ultimo giorno del visto D: la domanda tardiva viene respinta e il soggiorno irregolare costa da 600 a 1.200 €.', 'GR-SRC-01'] },
    { p: 'uk us other', t: ['The online receipt is valid only in Greece: with an expired D visa, travel only on direct flights home, never through another Schengen airport.',
      'La ricevuta online vale solo in Grecia: con il visto D scaduto si viaggia solo con voli diretti verso casa, mai attraverso un altro aeroporto Schengen.', 'GR-SRC-20'] },
    { p: 'uk us other', t: ['Apostille the original document first, then have it translated in full, apostille included, by a certified Greek translator.',
      'Prima l’apostille sul documento originale, poi la traduzione integrale, apostille compresa, da un traduttore greco certificato.', 'GR-SRC-31'] },
    { p: 'eu uk us other', t: ['A paper lease has no value for immigration: the landlord registers it on Taxisnet and you accept it online with your tax number.',
      'Un contratto d’affitto cartaceo non vale per l’immigrazione: il proprietario lo registra su Taxisnet e tu lo accetti online con il tuo codice fiscale.', 'GR-SRC-22'] },
    { p: 'eu', t: ['There are no online appointments for EU registration at Petrou Ralli in Athens: people queue from 4:30 in the morning for 20 to 30 numbers.',
      'Non ci sono appuntamenti online per la registrazione UE a Petrou Ralli ad Atene: si fa la fila dalle 4:30 del mattino per 20-30 numeri.', 'GR-SRC-18'] }
  ],

  open: [
    { st: 'open', t: ['Immigration offices in Attica and Thessaloniki take far longer than the legal 60 days.',
      'Gli uffici immigrazione dell’Attica e di Salonicco impiegano molto più dei 60 giorni di legge.'] },
    { st: 'watch', t: ['Travelling home on the receipt depends on a return circular renewed each year.',
      'Rientrare a casa con la ricevuta dipende da una circolare di rientro rinnovata ogni anno.'] },
    { st: 'open', t: ['Some consulates charge students €90 for the D visa, others the standard €180.',
      'Alcuni consolati fanno pagare agli studenti 90 € per il visto D, altri i 180 € ordinari.'] },
    { st: 'open', t: ['Greek banks ask newcomers for a long paper trail.',
      'Le banche greche chiedono ai nuovi arrivati molti documenti cartacei.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/greece/greece_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('GR', {
  "GR-SRC-02": ["Προεδρικό Διάταγμα 106/2007, ΦΕΚ Α΄ 135/21.06.2007 (recepimento Direttiva 2004/38/CE)","https://www.astynomia.gr","2026-10-05"],
  "GR-SRC-18": ["Registro Nazionale Servizi Pubblici (MITOS): Procedura ID DD 2045: Rilascio attestato di registrazione per cittadini UE (Βεβαίωση εγγραφής πολιτών Ε.Ε.) presso…","https://mitos.gov.gr/index.php/%CE%94%CE%94:Certificate_of_registration_for_citizens_of_the_Union_residing_in_Greece_as_employees_or_non-employees","2026-10-05"],
  "GR-SRC-22": ["Autorità Indipendente Entrate Pubbliche (AADE): Servizio digitale myAADE per attribuzione codice fiscale AFM (ΑΦΜ), dichiarazione locazioni immobiliari Taxisnet e…","https://www.aade.gr/myAADE","2026-10-05"],
  "GR-SRC-32": ["e-EFKA / KEP: Νόμος 5078/2023 (artt. 66–70) & JMD 71670/2021","https://www.amka.gr","2026-10-05"],
  "GR-SRC-09": ["Νόμος 5038/2023, Άρθρα 104–117","https://www.taxheaven.gr/law/5038/2023/arthro/104","2026-10-05"],
  "GR-SRC-16": ["Portale telematico unico delle domande di permesso di soggiorno (ΟΠΣ Μετανάστευση) e rilascio ricevuta provvisoria con…","https://services.migration.gov.gr","2026-10-05"],
  "GR-SRC-05": ["Νόμος 5038/2023, Άρθρο 118","https://www.taxheaven.gr/law/5038/2023/arthro/118","2026-10-05"],
  "GR-SRC-01": ["Νόμος 5038/2023 (Κώδικας Μετανάστευσης), ΦΕΚ Α΄ 81/01.04.2023 (in vigore dal 31/03/2024)","https://www.taxheaven.gr/law/5038/2023","2026-10-05"],
  "GR-SRC-26": ["Commissione Europea / Eur-Lex: Direttiva (UE) 2016/801 del Parlamento europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "GR-SRC-25": ["Decisione Ministeriale Congiunta (KYA) 41712/2014","https://www.et.gr","2026-10-05"],
  "GR-SRC-15": ["Tariffario consolare ufficiale per Visti Nazionali D (180,00 € ordinario","https://www.mfa.gr/en/visas/visa-types/national-visas.html","2026-10-05"],
  "GR-SRC-06": ["Νόμος 5038/2023, Άρθρο 171","https://www.taxheaven.gr/law/5038/2023/arthro/171","2026-10-05"],
  "GR-SRC-24": ["Decisione Ministeriale Congiunta (KYA) 53821/2014 & KYA 5388/2021","https://www.et.gr","2026-10-05"],
  "GR-SRC-04": ["Νόμος 5038/2023, Άρθρο 119","https://www.taxheaven.gr/law/5038/2023/arthro/119","2026-10-05"],
  "GR-SRC-07": ["Νόμος 5038/2023, Άρθρα 27–46","https://www.taxheaven.gr/law/5038/2023/arthro/27","2026-10-05"],
  "GR-SRC-11": ["Νόμος 5038/2023, Άρθρα 84–98","https://www.taxheaven.gr/law/5038/2023/arthro/84","2026-10-05"],
  "GR-SRC-08": ["Νόμος 5038/2023, Άρθρο 31 par. 1(a)","https://www.taxheaven.gr/law/5038/2023/arthro/31","2026-10-05"],
  "GR-SRC-33": ["Servizio Pubblico per l'Impiego (DYPA): Procedura contingentamento ingressi per lavoro subordinato (Μετάκληση): delibera biennale e verifica indisponibilità…","https://www.dypa.gov.gr","2026-10-05"],
  "GR-SRC-21": ["Salario minimo nazionale legale (Κατώτατος Μισθός): D.M. 20562/2024 (FEK B' 1999/29.03.2024) e L. 5163/2024: 830 €/m…","https://ypergasias.gov.gr","2026-10-05"],
  "GR-SRC-03": ["Νόμος 4172/2013 (Κώδικας Φορολογίας Εισοδήματος","https://www.taxheaven.gr/law/4172/2013/arthro/5g","2026-10-05"],
  "GR-SRC-10": ["Νόμος 5038/2023, Άρθρο 110 par. 1(c)","https://www.taxheaven.gr/law/5038/2023/arthro/110","2026-10-05"],
  "GR-SRC-29": ["Νόμος 4353/2015 & Νόμος 4655/2020","https://www.taxheaven.gr/law/4353/2015","2026-10-05"],
  "GR-SRC-30": ["Νόμος 4091/2012 & Νόμος 4992/2022","https://www.taxheaven.gr/law/4992/2022","2026-10-05"],
  "GR-SRC-28": ["Commissione Europea / Eur-Lex: Direttiva 2004/38/CE del Parlamento europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2004/38/oj","2026-10-05"],
  "GR-SRC-23": ["Circolari attuative Art. 5Γ L. 4172/2013: A.1087/2021 (modalità di domanda) e E.2224/2021 (chiarimenti interpretativi…","https://www.aade.gr/pol/a-1087-2021","2026-10-05"],
  "GR-SRC-31": ["Νόμος 4781/2021 (artt. 144–157) & Νόμος 4194/2013 (art. 36)","https://metafraseis.services.gov.gr","2026-10-05"],
  "GR-SRC-19": ["Polizia Ellenica (Ελληνική Αστυνομία - EL.AS.): Competenza territoriale Dipartimenti Stranieri (Τμήματα Αλλοδαπών) di Attica (Petrou Ralli 24) e Salonicco per…","https://www.astynomia.gr","2026-10-05"],
  "GR-SRC-20": ["Circolare annuale uscite/rientri con Veveosi: Decisione n. 4000/3/99-στ΄ (FEK B' 7069/29.12.2025) per il 2026","https://www.et.gr","2026-10-05"]
});

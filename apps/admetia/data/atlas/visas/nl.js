/* Visas and permits: Netherlands. From research/visas_immigration/netherlands/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'NL',
  folder: 'netherlands',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa, work permit or residence document; the immigration service (IND) can confirm your right of residence for €85 if you want proof.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto, permesso di lavoro o documento di soggiorno; il servizio immigrazione (IND) può attestare il diritto di soggiorno per 85 € se serve una prova.', 'NL-SRC-12 NL-SRC-02'],
      ['Staying more than four months, register with the municipality within five days of arriving and you get your citizen service number (BSN) on the spot; for shorter stays there is the non-resident register (RNI).',
        'Per un soggiorno di oltre quattro mesi ci si iscrive al comune entro cinque giorni dall’arrivo e si riceve subito il numero di servizio al cittadino (BSN); per soggiorni più brevi c’è il registro dei non residenti (RNI).', 'NL-SRC-17 NL-SRC-18'],
      ['A student who works, even one hour a week, must take out Dutch basic health insurance within four months; one who does not work stays on the European Health Insurance Card.',
        'Uno studente che lavora, anche un’ora a settimana, deve stipulare l’assicurazione sanitaria olandese di base entro quattro mesi; chi non lavora resta con la tessera sanitaria europea.', 'NL-SRC-21']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Residence permit for study', 'Permesso di soggiorno per studio'], law: 'Vw 2000; MoMi',
      t: [
        ['You cannot apply yourself: your university, a recognised sponsor, applies to the IND. US, UK and some other nationals need no entry visa (MVV).',
          'Non si può fare domanda da soli: la presenta all’IND l’università, sponsor riconosciuto. Cittadini di USA, Regno Unito e alcuni altri paesi non hanno bisogno del visto d’ingresso (MVV).', 'NL-SRC-06 NL-SRC-14 NL-SRC-25'],
        ['Earn at least half of each year’s credits, or the university must report you and the permit is withdrawn.',
          'Bisogna ottenere almeno metà dei crediti di ogni anno, altrimenti l’università deve segnalarlo e il permesso viene revocato.', 'NL-SRC-06'],
        ['Employed work: 16 hours a week in term, or full time in June, July and August, never both, and only once the employer has a work permit (TWV). Freelance work needs no TWV.',
          'Lavoro dipendente: 16 ore a settimana durante le lezioni, oppure a tempo pieno a giugno, luglio e agosto, mai entrambe, e solo dopo che il datore ha ottenuto il permesso di lavoro (TWV). Il lavoro autonomo non richiede TWV.', 'NL-SRC-06 NL-SRC-08 NL-SRC-27'],
        ['A non-EU student with a student permit from another EU country can study here up to 360 days without a Dutch permit, after the university notifies the IND.',
          'Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza permesso olandese, dopo la notifica dell’università all’IND.', 'NL-SRC-16']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['€1,130.77 a month (€13,569.24 a year), plus tuition', '1.130,77 € al mese (13.569,24 € l’anno), più la retta'], 'NL-SRC-01'],
        [['IND fee', 'Costo IND'], ['€254', '254 €'], 'NL-SRC-02']
      ],
      w: ['A student who works without Dutch basic health insurance can be fined €529.74 by the CAK, and again.',
        'Uno studente che lavora senza l’assicurazione sanitaria olandese di base può ricevere dal CAK una multa di 529,74 €, anche ripetuta.', 'NL-SRC-21'] },

    { k: 'intern', p: 'uk us other', v: 'open',
      name: ['Internship during a Dutch degree', 'Tirocinio durante una laurea olandese'], law: 'BuWav 2022 art. 3.1',
      t: [['An internship your Dutch degree requires needs no work permit, only the Nuffic standard internship agreement signed by you, your university and the company.',
        'Un tirocinio richiesto dal corso olandese non richiede permesso di lavoro, solo la convenzione standard Nuffic firmata da te, dall’università e dall’azienda.', 'NL-SRC-22 NL-SRC-27']] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Internship from abroad or after graduating', 'Tirocinio dall’estero o dopo la laurea'], law: 'Wav',
      t: [['Students of foreign universities and graduates cannot use the Nuffic agreement: the host needs a work permit (TWV) for up to 90 days, or a single permit from the IND for longer, with a real training plan.',
        'Studenti di università estere e neolaureati non possono usare la convenzione Nuffic: l’azienda ha bisogno di un permesso di lavoro (TWV) fino a 90 giorni, o di un permesso unico dell’IND per periodi più lunghi, con un vero piano formativo.', 'NL-SRC-22 NL-SRC-08 NL-SRC-02']],
      f: [[['IND fee, over 90 days', 'Costo IND, oltre 90 giorni'], ['€423', '423 €'], 'NL-SRC-02']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Orientation year (zoekjaar)', 'Anno di orientamento (zoekjaar)'], law: 'Vb 2000 art. 3.42',
      t: [
        ['Within three years of a Dutch bachelor’s, master’s or PhD, or of a master’s or PhD from a university in the top 200 of two of THE, QS and ARWU: one year, not renewable, to work in any job without a work permit.',
          'Entro tre anni da una laurea, un master o un dottorato olandesi, o da un master o dottorato in un’università tra le prime 200 di due classifiche fra THE, QS e ARWU: un anno, non rinnovabile, per lavorare in qualsiasi impiego senza permesso di lavoro.', 'NL-SRC-05'],
        ['A job with a recognised sponsor then needs only the lower highly-skilled salary, and keeps it on later renewals and job changes.',
          'Un lavoro presso uno sponsor riconosciuto richiede poi solo lo stipendio ridotto per lavoratori altamente qualificati, che resta valido anche per rinnovi e cambi di lavoro.', 'NL-SRC-01 NL-SRC-03']
      ],
      f: [
        [['IND fee', 'Costo IND'], ['€254', '254 €'], 'NL-SRC-02'],
        [['Lower highly-skilled salary afterwards', 'Stipendio ridotto per altamente qualificati, dopo'], ['€3,122 gross a month', '3.122 € lordi al mese'], 'NL-SRC-01']
      ],
      w: ['The three years run from the official graduation date on your certificate, not from the ceremony.',
        'I tre anni decorrono dalla data ufficiale di laurea indicata sul certificato, non dalla cerimonia.', 'NL-SRC-05'] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Highly skilled migrant (kennismigrant)', 'Migrante altamente qualificato (kennismigrant)'], law: 'Vw 2000',
      t: [['The employer must be a recognised sponsor of the IND; there is no labour-market test, and the IND decides in about two weeks.',
        'Il datore deve essere uno sponsor riconosciuto dell’IND; non c’è test del mercato del lavoro, e l’IND decide in circa due settimane.', 'NL-SRC-03 NL-SRC-14 NL-SRC-15']],
      f: [
        [['Salary, 30 or older', 'Stipendio, 30 anni o più'], ['€5,942 gross a month', '5.942 € lordi al mese'], 'NL-SRC-01'],
        [['Salary, under 30', 'Stipendio, sotto i 30 anni'], ['€4,357 gross a month', '4.357 € lordi al mese'], 'NL-SRC-01'],
        [['Salary, within three years of a Dutch or top-200 degree', 'Stipendio, entro tre anni da una laurea olandese o top 200'], ['€3,122 gross a month', '3.122 € lordi al mese'], 'NL-SRC-01'],
        [['IND fee', 'Costo IND'], ['€423', '423 €'], 'NL-SRC-02']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Directive 2021/1883',
      t: [['Any employer established in the Netherlands can hire you, recognised sponsor or not: a contract of at least six months and a three-year degree, or three years of comparable experience in the last seven.',
        'Qualsiasi datore stabilito nei Paesi Bassi può assumerti, sponsor riconosciuto o no: un contratto di almeno sei mesi e una laurea triennale, o tre anni di esperienza equivalente negli ultimi sette.', 'NL-SRC-04']],
      f: [
        [['Salary, standard', 'Stipendio, soglia ordinaria'], ['€5,942 gross a month', '5.942 € lordi al mese'], 'NL-SRC-01'],
        [['Salary, graduates of the last three years', 'Stipendio, laureati degli ultimi tre anni'], ['€4,754 gross a month', '4.754 € lordi al mese'], 'NL-SRC-01']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Single permit (GVVA)', 'Permesso unico (GVVA)'], law: 'Wav',
      t: [['For other jobs the employer applies, after reporting the vacancy to the employment agency UWV at least five weeks ahead and showing no Dutch or EU candidate was found.',
        'Per gli altri lavori la domanda la presenta il datore, dopo aver segnalato il posto all’agenzia per l’impiego UWV almeno cinque settimane prima e dimostrato che non si è trovato un candidato olandese o UE.', 'NL-SRC-07 NL-SRC-20']],
      f: [[['Minimum wage, 2026', 'Salario minimo, 2026'], ['€2,337 gross a month, without holiday pay', '2.337 € lordi al mese, senza indennità ferie'], 'NL-SRC-01 NL-SRC-24']],
      w: ['Do not start work on the application receipt alone: the Labour Inspectorate fines up to €8,000 per worker.',
        'Non iniziare a lavorare con la sola ricevuta della domanda: l’Ispettorato del lavoro multa fino a 8.000 € per lavoratore.', 'NL-SRC-27'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and PhDs as employees', 'Permesso per ricercatori e dottorandi dipendenti'], law: 'Directive 2016/801',
      t: [
        ['A hosting agreement with a university or institute that is a recognised sponsor; no work permit is needed, and you can research elsewhere in the EU for up to 360 days.',
          'Una convenzione di accoglienza con un’università o un istituto sponsor riconosciuto; non serve permesso di lavoro, e si può fare ricerca altrove nell’UE fino a 360 giorni.', 'NL-SRC-09 NL-SRC-16'],
        ['Most Dutch PhD candidates are salaried employees on a four-year contract, entering as researchers or highly skilled migrants, not students; those years count in full towards permanent residence, student years only half.',
          'La maggior parte dei dottorandi olandesi è dipendente stipendiata con contratto di quattro anni, entrata come ricercatore o migrante altamente qualificato, non come studente; quegli anni contano per intero per la residenza permanente, quelli da studente solo a metà.', 'NL-SRC-28 NL-SRC-13']
      ],
      f: [
        [['Minimum pay', 'Retribuzione minima'], ['€2,337 gross a month', '2.337 € lordi al mese'], 'NL-SRC-01'],
        [['IND fee', 'Costo IND'], ['€254', '254 €'], 'NL-SRC-02']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['The Netherlands has no working-holiday agreement with the UK or the US.',
        'I Paesi Bassi non hanno accordi di vacanza-lavoro con il Regno Unito o gli Stati Uniti.', 'NL-SRC-10']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Argentina, Australia, Canada, Japan, New Zealand, South Korea, Taiwan, Uruguay and Hong Kong aged 18 to 30: one year, not renewable, with casual work.',
        'Solo per cittadini di Argentina, Australia, Canada, Giappone, Nuova Zelanda, Corea del Sud, Taiwan, Uruguay e Hong Kong dai 18 ai 30 anni: un anno, non rinnovabile, con lavori occasionali.', 'NL-SRC-10']],
      f: [[['IND fee', 'Costo IND'], ['€85', '85 €'], 'NL-SRC-02']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; Vw 2000 art. 17',
      t: [['Up to 90 days in any 180; no employed work without a TWV. Only nationals exempt from the entry visa (UK, US, Canada, Australia, Japan, South Korea, New Zealand and a few others) can apply for a residence permit after arriving; anyone else who comes as a tourist must go home to apply.',
        'Fino a 90 giorni ogni 180; nessun lavoro dipendente senza TWV. Solo i cittadini esenti dal visto d’ingresso (Regno Unito, USA, Canada, Australia, Giappone, Corea del Sud, Nuova Zelanda e pochi altri) possono chiedere il permesso dopo l’arrivo; chi arriva da turista da altri paesi deve rientrare per fare domanda.', 'NL-SRC-23 NL-SRC-08 NL-SRC-25']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'NL-SRC-02 NL-SRC-23']] },

    { k: 'stay', p: 'uk us other', v: 'open',
      name: ['Permanent residence after five years', 'Residenza permanente dopo cinque anni'], law: 'Vw 2000 art. 45b',
      t: [['After five years of legal residence, with the civic integration exam at A2 Dutch and a contract for at least another year at the minimum wage. Years as a researcher, highly skilled migrant or PhD employee count in full, student years half and only for the EU long-term status.',
        'Dopo cinque anni di soggiorno legale, con l’esame di integrazione civica (olandese A2) e un contratto di almeno un altro anno al salario minimo. Gli anni da ricercatore, migrante altamente qualificato o dottorando dipendente contano per intero, quelli da studente a metà e solo per lo status UE di lungo periodo.', 'NL-SRC-13 NL-SRC-37 NL-SRC-29']],
      f: [[['IND fee', 'Costo IND'], ['€254', '254 €'], 'NL-SRC-02']] },

    { k: 'tax', p: 'eu uk us other', v: 'limited',
      name: ['30% ruling (30%-regeling)', 'Regime del 30% (30%-regeling)'], law: 'Wet LB 1964 art. 31a',
      t: [['Recruits from abroad receive 30% of their salary tax-free in 2026, falling to 27% from 2027. You must have lived more than 150 km from the Dutch border for 16 of the previous 24 months, and the employer must apply within four months of your start date to cover you from day one.',
        'Chi è assunto dall’estero riceve il 30% dello stipendio esente da imposte nel 2026, il 27% dal 2027. Bisogna aver vissuto a più di 150 km dal confine olandese per 16 dei 24 mesi precedenti, e il datore deve fare domanda entro quattro mesi dall’inizio per coprire dal primo giorno.', 'NL-SRC-19 NL-SRC-35']],
      f: [[['Salary needed, 2026', 'Stipendio richiesto, 2026'], ['€48,013 a year; €36,497 under 30 with a master’s', '48.013 € l’anno; 36.497 € sotto i 30 anni con un master'], 'NL-SRC-19 NL-SRC-35']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['With the housing shortage, check that the lease allows registration at the town hall (“inschrijving mogelijk”) and get the landlord’s signed consent with a copy of their ID: a room without it means a fine of up to €325 and 52% tax withheld from your pay.',
        'Con la carenza di alloggi, verifica che il contratto consenta la registrazione al comune (“inschrijving mogelijk”) e fatti dare il consenso firmato del proprietario con copia del suo documento: una stanza senza significa una multa fino a 325 € e il 52% di imposta trattenuto sullo stipendio.', 'NL-SRC-17 NL-SRC-30 NL-SRC-38'],
      ['Bring your birth certificate: EU citizens can use the multilingual EU extract, which needs no translation; others need an apostille or legalisation, and a sworn translation unless it is in Dutch, English, French or German.',
        'Porta l’atto di nascita: i cittadini UE possono usare l’estratto plurilingue UE, che non richiede traduzione; gli altri hanno bisogno di apostille o legalizzazione, e di una traduzione giurata se non è in olandese, inglese, francese o tedesco.', 'NL-SRC-30']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Your sponsor (employer or university) files the combined application with the IND. Unless your nationality is exempt (UK, US and a few others are), you then collect the MVV entry visa at the consulate, with biometrics. You cannot switch from a tourist stay in the Netherlands.',
        'Lo sponsor (datore o università) presenta la domanda combinata all’IND. Se la tua nazionalità non è esente (Regno Unito, Stati Uniti e pochi altri lo sono), ritiri poi al consolato il visto d’ingresso MVV, con i dati biometrici. Non puoi convertire un soggiorno turistico nei Paesi Bassi.', 'NL-SRC-03 NL-SRC-06 NL-SRC-23 NL-SRC-25']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Staying more than 4 months, register in the personal records database (BRP) at your town hall within 5 working days of arriving, with passport, lease and landlord’s consent, and birth certificate.',
        'Se resti più di 4 mesi, iscriviti all’anagrafe (BRP) del tuo comune entro 5 giorni lavorativi dall’arrivo, con passaporto, contratto d’affitto e consenso del proprietario, e atto di nascita.', 'NL-SRC-17 NL-SRC-30'],
      ['Staying under 4 months, register as a non-resident (RNI) instead; since 2026 non-EU citizens can only do so at the Breda or Venlo desks.',
        'Se resti meno di 4 mesi, iscriviti invece come non residente (RNI); dal 2026 i cittadini non UE possono farlo solo agli sportelli di Breda o Venlo.', 'NL-SRC-18 NL-SRC-36']
    ] },
    { k: 'card', p: 'eu', t: [
      ['No IND document is required; you may ask for an optional statement that you live here lawfully (€85).',
        'Non serve alcun documento dell’IND; puoi chiedere una dichiarazione facoltativa di soggiorno regolare (85 €).', 'NL-SRC-02 NL-SRC-12']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['When the IND writes that your residence document is ready, book an appointment at an IND desk to collect it; if you gave no fingerprints abroad, book a biometrics appointment first.',
        'Quando l’IND ti scrive che il documento di soggiorno è pronto, prenota un appuntamento a uno sportello IND per ritirarlo; se non hai dato le impronte all’estero, prenota prima un appuntamento per i dati biometrici.', 'NL-SRC-15']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your citizen service number (BSN) is given at the end of the BRP appointment: it is the key to your work contract, tax and health insurance.',
        'Il numero di servizio al cittadino (BSN) viene assegnato alla fine dell’appuntamento BRP: è la chiave per contratto di lavoro, fisco e assicurazione sanitaria.', 'NL-SRC-17']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Anyone who works, even a student working one hour a week or a paid intern, must take out basic health insurance (basisverzekering) within 4 months of starting, backdated to the first day: about €145 to €165 a month in 2026, with a €385 yearly excess. Missing it costs a €529.74 fine.',
        'Chiunque lavori, anche uno studente che lavora un’ora a settimana o un tirocinante retribuito, deve stipulare l’assicurazione sanitaria di base (basisverzekering) entro 4 mesi dall’inizio, retroattiva al primo giorno: circa 145-165 € al mese nel 2026, con una franchigia annua di 385 €. Non farlo costa una multa di 529,74 €.', 'NL-SRC-21'],
      ['On a modest income you can claim up to €129 a month of health-care allowance (zorgtoeslag). Register with a GP near home; if all refuse, your insurer must find one within 10 working days.',
        'Con un reddito modesto puoi chiedere fino a 129 € al mese di contributo sanitario (zorgtoeslag). Registrati da un medico di base vicino a casa; se tutti rifiutano, l’assicuratore deve trovartene uno entro 10 giorni lavorativi.', 'NL-SRC-31 NL-SRC-21']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Activate DigiD, the state digital ID for the tax office, MijnOverheid, health insurance and the IND, online at digid.nl with your BSN and postcode; the code comes by post within 3 working days, or at once with an NFC check of your passport.',
        'Attiva DigiD, l’identità digitale di Stato per fisco, MijnOverheid, assicurazione sanitaria e IND, online su digid.nl con BSN e codice postale; il codice arriva per posta entro 3 giorni lavorativi, o subito con una verifica NFC del passaporto.', 'NL-SRC-17'],
      ['Never pay a deposit into an anonymous fintech account before viewing the flat and checking the owner in the land registry (Kadaster).',
        'Non versare mai un deposito su un conto fintech anonimo prima di aver visto l’alloggio e verificato il proprietario nel catasto (Kadaster).', 'NL-SRC-25']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['Do not leave the Netherlands with only an IND receipt or a residence sticker: get a return visa first (€197), or you can be stopped at the border or refused boarding.',
        'Non lasciare i Paesi Bassi con la sola ricevuta IND o lo sticker di soggiorno: chiedi prima un visto di rientro (197 €), o puoi essere fermato alla frontiera o non imbarcato.', 'NL-SRC-34'],
      ['Nationals who must take it have the tuberculosis screening at the municipal health service (GGD) within 3 months of arriving. Students who earn under 50% of their credits in a year can lose the permit.',
        'Chi vi è tenuto fa lo screening per la tubercolosi presso il servizio sanitario municipale (GGD) entro 3 mesi dall’arrivo. Gli studenti che ottengono meno del 50% dei crediti in un anno possono perdere il permesso.', 'NL-SRC-15 NL-SRC-06']
    ] }
  ],

  traps: [
    { p: 'eu uk us other', t: ['Refuse a room where you cannot register at the municipality: without registration your employer withholds 52% of your salary and your bank account can be blocked.',
      'Rifiuta una stanza dove non puoi iscriverti al comune: senza iscrizione il datore trattiene il 52% dello stipendio e il conto in banca può essere bloccato.', 'NL-SRC-38 NL-SRC-30'] },
    { p: 'uk us other', t: ['The IND waiting sticker or receipt is valid only inside the Netherlands: to travel before the card arrives you need a return visa (€197).',
      'L’adesivo di attesa o la ricevuta dell’IND valgono solo nei Paesi Bassi: per viaggiare prima che arrivi la carta serve un visto di ritorno (197 €).', 'NL-SRC-34 NL-SRC-02'] },
    { p: 'uk us other', t: ['A partner can join only if both of you are at least 21 on the day you apply.',
      'Il partner può ricongiungersi solo se entrambi avete almeno 21 anni il giorno della domanda.', 'NL-SRC-11 NL-SRC-26'] },
    { p: 'uk us other', t: ['Since 1 January 2026 non-EU citizens can register as non-residents (to get a BSN for a stay under four months) only in Breda or Venlo.',
      'Dal 1° gennaio 2026 i cittadini extra-UE possono iscriversi come non residenti (per avere il BSN in un soggiorno sotto i quattro mesi) solo a Breda o Venlo.', 'NL-SRC-36'] },
    { p: 'eu uk us other', t: ['Never pay a deposit to an anonymous account before seeing the flat and checking the owner in the land registry (Kadaster).',
      'Non pagare mai una caparra su un conto anonimo prima di aver visto l’alloggio e verificato il proprietario nel catasto (Kadaster).', 'NL-SRC-30'] }
  ],

  open: [
    { st: 'watch', t: ['For a foreign university near the top-200 line, which year’s ranking the IND uses for the orientation year can be unclear; check with the IND before applying.',
      'Per un’università estera al limite della top 200, quale classifica annuale usi l’IND per l’anno di orientamento può essere incerto; verifica con l’IND prima di fare domanda.'] },
    { st: 'open', t: ['In Amsterdam, Utrecht, Rotterdam, Delft and Eindhoven many rooms are offered without the right to register.',
      'Ad Amsterdam, Utrecht, Rotterdam, Delft ed Eindhoven molte stanze sono offerte senza diritto di iscrizione.'] },
    { st: 'pending', t: ['Bills before parliament would raise naturalisation from five to ten years of residence and the civic integration level from A2 to B1.',
      'Proposte in parlamento porterebbero la naturalizzazione da cinque a dieci anni di residenza e il livello di integrazione civica da A2 a B1.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/netherlands/netherlands_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('NL', {
  "NL-SRC-12": ["Immigratie- en Naturalisatiedienst (IND): EU/EEA or Swiss citizens – Diritto di libera circolazione e Verificatie tegen EU-gemeenschapsrecht","https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens","2026-10-05"],
  "NL-SRC-02": ["Immigratie- en Naturalisatiedienst (IND): Fees: costs of an application 2026 (Tabelle tariffe e leges per studio, lavoro, famiglia, residenza)","https://ind.nl/en/fees-costs-of-an-application","2026-10-05"],
  "NL-SRC-17": ["Government of the Netherlands: When should I register with the Personal Records Database (BRP)? – Regola dei 5 giorni e 4 mesi","https://www.government.nl/topics/personal-data/question-and-answer/when-should-i-register-with-the-personal-records-database-as-a-resident","2026-10-05"],
  "NL-SRC-18": ["Government of the Netherlands: Non-residents registration (RNI) – Ottenimento BSN per soggiorni inferiori a 4 mesi","https://www.government.nl/topics/personal-data/question-and-answer/how-do-i-register-in-the-non-residents-records-database-rni","2026-10-05"],
  "NL-SRC-21": ["Zorginstituut Nederland / Het CAK: Compulsory health insurance in the Netherlands (Zorgverzekeringswet) – Obblighi lavoratori e studenti","https://www.hetcak.nl/regelingen/zorgverzekering-buitenland","2026-10-05"],
  "NL-SRC-06": ["Immigratie- en Naturalisatiedienst (IND): Student residence permit (Higher education / University) – Requisiti ateneo e progresso 50% MoMi","https://ind.nl/en/residence-permits/study/student-residence-permit-university-or-higher-professional-education","2026-10-05"],
  "NL-SRC-14": ["Immigratie- en Naturalisatiedienst (IND): Public register of recognised sponsors (Erkende referenten)","https://ind.nl/en/about-us/public-register-recognised-sponsors","2026-10-05"],
  "NL-SRC-25": ["Overheid.nl – Wetgeving: Vreemdelingenwet 2000 (Vw 2000) – Testo consolidato coordinato al 2026","https://wetten.overheid.nl/BWBR0011823/","2026-10-05"],
  "NL-SRC-08": ["Immigratie- en Naturalisatiedienst (IND): Working in the Netherlands without a residence permit: TWV (Tewerkstellingsvergunning)","https://ind.nl/en/residence-permits/work/working-in-the-netherlands-without-a-residence-permit-twv","2026-10-05"],
  "NL-SRC-27": ["Overheid.nl – Wetgeving: Wet arbeid vreemdelingen (Wav) e Besluit uitvoering Wav 2022 (BuWav 2022, art. 3.1 lid 2)","https://wetten.overheid.nl/BWBR0046162/","2026-10-05"],
  "NL-SRC-16": ["Immigratie- en Naturalisatiedienst (IND): Intra-EU mobility for students and researchers under Directive (EU) 2016/801","https://ind.nl/en/residence-permits/study/intra-eu-mobility-for-students","2026-10-05"],
  "NL-SRC-01": ["Immigratie- en Naturalisatiedienst (IND): Required amounts and income requirements 2026 (Kennismigrant, Blue Card, Study, WML)","https://ind.nl/en/required-amounts-income-requirements","2026-10-05"],
  "NL-SRC-22": ["Nuffic (Dutch organisation for internationalisation in…: Standard Internship Agreement for non-EU students (Stageovereenkomst Wav art. 4.3)","https://www.nuffic.nl/en/subjects/internships-in-the-netherlands","2026-10-05"],
  "NL-SRC-05": ["Immigratie- en Naturalisatiedienst (IND): Residence permit for orientation year (Zoekjaar hoogopgeleiden) – Condizioni e classifiche top 200","https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year","2026-10-05"],
  "NL-SRC-03": ["Immigratie- en Naturalisatiedienst (IND): Highly skilled migrant (Kennismigrant) – Condizioni, sponsor riconosciuto, diritti","https://ind.nl/en/residence-permits/work/highly-skilled-migrant","2026-10-05"],
  "NL-SRC-15": ["Immigratie- en Naturalisatiedienst (IND): Decision periods and processing times (Termini ordinari 90 gg vs fast-track 2 settimane)","https://ind.nl/en/decision-periods-and-process-times","2026-10-05"],
  "NL-SRC-04": ["Immigratie- en Naturalisatiedienst (IND): European Blue Card – Transposizione Direttiva (UE) 2021/1883, soglie e mobilità","https://ind.nl/en/residence-permits/work/european-blue-card","2026-10-05"],
  "NL-SRC-07": ["Immigratie- en Naturalisatiedienst (IND): Working in the Netherlands: Single permit (GVVA) – Procedura combinata soggiorno/lavoro","https://ind.nl/en/residence-permits/work/working-in-the-netherlands-general-employment","2026-10-05"],
  "NL-SRC-20": ["UWV (Uitvoeringsinstituut Werknemersverzekeringen): Werkvergunning (TWV) – Procedura istruttoria, prioriteitgenietend aanbod e test di mercato","https://www.uwv.nl/werkgevers/werkvergunning/","2026-10-05"],
  "NL-SRC-24": ["Rijksoverheid: Bedragen minimumloon 2026 (Wet minimumloon en minimumvakantiebijslag WML)","https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon","2026-10-05"],
  "NL-SRC-09": ["Immigratie- en Naturalisatiedienst (IND): Researcher under Directive (EU) 2016/801 – Convenzione di accoglienza ed esenzione TWV","https://ind.nl/en/residence-permits/work/researcher-under-directive-eu-2016801","2026-10-05"],
  "NL-SRC-28": ["Universiteiten van Nederland (UNL): Collective Labour Agreement (CAO) of Dutch Universities – Status contrattuale Werknemer-promovendus","https://www.universiteitenvannederland.nl/en_GB/cao-universiteiten","2026-10-05"],
  "NL-SRC-13": ["Immigratie- en Naturalisatiedienst (IND): Permanent residence and long-term EU residency – Condizioni di 5 anni e inburgering","https://ind.nl/en/residence-permits/continuous-residence-and-permanent-residence/permanent-residence-or-long-term-eu-residency","2026-10-05"],
  "NL-SRC-10": ["Immigratie- en Naturalisatiedienst (IND): Working Holiday Programme & Scheme (WHP/WHS) – Paesi bilaterali, età 18-30 e limiti","https://ind.nl/en/residence-permits/work/working-holiday","2026-10-05"],
  "NL-SRC-23": ["Netherlands Worldwide (Ministry of Foreign Affairs): Visa for the Netherlands – Costi visti C Schengen (90 €) e procedura MVV consolare","https://www.netherlandsworldwide.nl/visa-the-netherlands","2026-10-05"],
  "NL-SRC-37": ["Immigratie- en Naturalisatiedienst (IND): Aanvraag onbepaalde tijd en EU-langdurig ingezetene – Condizioni 5 anni, computo 100% PhD e A2","https://ind.nl/en/residence-permits/continuous-residence-and-permanent-residence/permanent-residence-or-long-term-eu-residency","2026-10-05"],
  "NL-SRC-29": ["Dienst Uitvoering Onderwijs (DUO): Civic integration examination abroad (Basisexamen inburgering buitenland)","https://www.duo.nl/particulier/inburgeren-in-het-buitenland/","2026-10-05"],
  "NL-SRC-19": ["Belastingdienst (Dutch Tax Administration): 30% facility for incoming employees – Requisiti distanza 150 km, soglie 2026 (€48.013/€36.497) e cap","https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility","2026-10-05"],
  "NL-SRC-35": ["Ministerie van Financiën: Belastingplan 2025 / 2026 – Modifica alla 30%-regeling (aliquota unica 27% dal 01/01/2027)","https://www.rijksoverheid.nl/onderwerpen/belastingplan","2026-10-05"],
  "NL-SRC-30": ["Gemeente Amsterdam: Registering in Amsterdam from abroad – Requisiti documentali, apostille e controllo residenza","https://www.amsterdam.nl/en/civil-status/first-registration-amsterdam/","2026-10-05"],
  "NL-SRC-38": ["Belastingdienst: Wet op de loonbelasting 1964, art. 26b – Applicazione dell'Anoniementarief al 52% senza BSN","https://wetten.overheid.nl/BWBR0002471/","2026-10-05"],
  "NL-SRC-36": ["RvIG (Rijksdienst voor Identiteitsgegevens): Regeling RNI – Iscrizione non residenti e restrizione sportelli Breda e Venlo per extra-UE 2026","https://www.rvig.nl/brp/rni","2026-10-05"],
  "NL-SRC-31": ["Belastingdienst / Toeslagen: Zorgtoeslag – Sussidio statale per i costi della polizza sanitaria olandese (€129/mese)","https://www.toeslagen.nl/zorgtoeslag","2026-10-05"],
  "NL-SRC-34": ["Immigratie- en Naturalisatiedienst (IND): Return visa (Terugkeervisum) – Condizioni di rilascio, diritti di viaggio e tariffa 197 €","https://ind.nl/en/residence-permits/travel-with-a-residence-permit/return-visa","2026-10-05"],
  "NL-SRC-11": ["Immigratie- en Naturalisatiedienst (IND): Residence permit for spouse or registered partner – Requisito età 21 anni e reddito sponsor","https://ind.nl/en/residence-permits/family/residence-permit-for-spouse-or-registered-partner","2026-10-05"],
  "NL-SRC-26": ["Overheid.nl – Wetgeving: Vreemdelingenbesluit 2000 (Vb 2000) – Norme di attuazione su soggiorni studio, lavoro e famiglia","https://wetten.overheid.nl/BWBR0011825/","2026-10-05"]
});

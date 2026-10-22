/* Visas and permits: Switzerland. From research/visas_immigration/switzerland/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'CH',
  folder: 'switzerland',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU and EFTA citizens work in Switzerland under the free-movement agreement, with no labour-market test or quota: a contract of up to 364 days gives an L permit, a longer or open-ended one a B permit valid five years.',
        'I cittadini UE e AELS lavorano in Svizzera grazie all’accordo sulla libera circolazione, senza test del mercato né contingenti: un contratto fino a 364 giorni dà il permesso L, uno più lungo o a tempo indeterminato il permesso B valido cinque anni.', 'CH-SRC-03'],
      ['Register at the commune within 14 days of arriving and before your first day of work; the receipt lets you start. Up to 90 days of work a year need only an online notice by the employer.',
        'Ci si annuncia al comune entro 14 giorni dall’arrivo e prima del primo giorno di lavoro; la ricevuta consente di iniziare. Fino a 90 giorni di lavoro all’anno basta una notifica online del datore.', 'CH-SRC-04 CH-SRC-13'],
      ['Take out Swiss basic health insurance within three months; it is charged back to your arrival. A student who does not work can be exempted with the European Health Insurance Card.',
        'Si stipula l’assicurazione malattie di base svizzera entro tre mesi; è dovuta a ritroso dall’arrivo. Uno studente che non lavora può essere esentato con la tessera sanitaria europea.', 'CH-SRC-06 CH-SRC-07']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student visa (D) and B permit', 'Visto D per studio e permesso B'], law: 'LStrI art. 27; OASA arts. 23-24',
      t: [
        ['Apply for the D visa at the Swiss embassy three to four months before term, with admission, a study plan and a written undertaking to leave when you finish; the canton decides.',
          'Si chiede il visto D all’ambasciata svizzera tre o quattro mesi prima dell’inizio, con l’ammissione, un piano di studi e l’impegno scritto a lasciare il paese a fine studi; decide il cantone.', 'CH-SRC-28 CH-SRC-02'],
        ['No paid work in the first six months; after that, 15 hours a week in term with cantonal approval, full time in holidays.',
          'Nessun lavoro retribuito nei primi sei mesi; poi 15 ore a settimana durante le lezioni con l’autorizzazione cantonale, a tempo pieno nelle vacanze.', 'CH-SRC-02'],
        ['Switzerland does not follow the EU student-mobility rules: a student permit from an EU country gives no right to study here, even on an exchange.',
          'La Svizzera non applica le regole UE sulla mobilità studentesca: un permesso per studio di un paese UE non dà diritto di studiare qui, nemmeno in scambio.', 'CH-SRC-28 CH-SRC-16']
      ],
      f: [
        [['Funds in a Swiss bank (by canton)', 'Mezzi in una banca svizzera (per cantone)'], ['CHF 21,000 a year in Zurich; CHF 24,000 in Vaud, Geneva, Basel and St. Gallen', 'CHF 21.000 l’anno a Zurigo; CHF 24.000 in Vaud, Ginevra, Basilea e San Gallo'], 'CH-SRC-23 CH-SRC-24 CH-SRC-25 CH-SRC-26'],
        [['Fees', 'Costi'], ['CHF 90 visa, CHF 95 entry approval, CHF 142 to 182 permit', 'CHF 90 visto, CHF 95 autorizzazione d’ingresso, CHF 142-182 permesso'], 'CH-SRC-05 CH-SRC-23']
      ],
      w: ['The student health exemption ends the moment you take any paid work, even a few hours as an assistant: then Swiss insurance at the full premium is compulsory.',
        'L’esenzione sanitaria per studenti decade appena si svolge un lavoro retribuito, anche poche ore da assistente: da quel momento è obbligatoria l’assicurazione svizzera a premio pieno.', 'CH-SRC-06 CH-SRC-07'] },

    { k: 'intern', p: 'eu', v: 'free',
      name: ['Internships', 'Tirocini'], law: 'ALCP',
      t: [['Up to 90 days a year the employer only notifies the job online; from 91 days to a year you register at the commune and get an L permit.',
        'Fino a 90 giorni all’anno il datore notifica solo online; da 91 giorni a un anno ci si annuncia al comune e si riceve un permesso L.', 'CH-SRC-13 CH-SRC-03']] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Compulsory internship of a degree', 'Tirocinio obbligatorio del corso'], law: 'OASA art. 39',
      t: [['Only an internship your degree, Swiss or foreign, requires, up to half the length of the course: the company applies to the cantonal labour office with the university’s certificate. Internships after graduating are not allowed, except under the young-professionals agreements or within the job-search months after a Swiss degree.',
        'Solo un tirocinio richiesto dal corso, svizzero o estero, fino a metà della sua durata: l’azienda fa domanda all’ufficio cantonale del lavoro con il certificato dell’università. I tirocini dopo la laurea non sono ammessi, salvo gli accordi per giovani professionisti o i mesi di ricerca lavoro dopo una laurea svizzera.', 'CH-SRC-02 CH-SRC-01 CH-SRC-15']] },

    { k: 'search', p: 'uk us other', v: 'limited',
      name: ['Six months to look for work after a Swiss degree', 'Sei mesi per cercare lavoro dopo una laurea svizzera'], law: 'LStrI art. 21 (3)',
      t: [
        ['After a Swiss degree you may stay six months to find a job; the employer must then show the hire is of preponderant scientific or economic interest to skip the priority for residents.',
          'Dopo una laurea svizzera si può restare sei mesi per trovare lavoro; il datore deve poi dimostrare un interesse scientifico o economico preponderante per evitare la priorità ai residenti.', 'CH-SRC-01'],
        ['The hire still needs a place in the annual quotas: a bill to exempt Swiss graduates was shelved.',
          'L’assunzione richiede comunque un posto nei contingenti annuali: il disegno di legge per esentare i laureati svizzeri è stato archiviato.', 'CH-SRC-29 CH-SRC-14']
      ],
      f: [[['Funds for the six months', 'Mezzi per i sei mesi'], ['CHF 10,500 in Zurich, CHF 12,000 in Vaud, Geneva and Basel', 'CHF 10.500 a Zurigo, CHF 12.000 a Vaud, Ginevra e Basilea'], 'CH-SRC-23 CH-SRC-25 CH-SRC-24 CH-SRC-26']] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Specialist or manager permit (B or L)', 'Permesso per specialisti e quadri (B o L)'], law: 'LStrI arts. 20-23',
      t: [
        ['Only managers, specialists with a university degree and highly experienced professionals qualify; ordinary jobs are closed to non-EU citizens. The employer must show no suitable candidate was found in Switzerland or the EU/EFTA, and pay the local and sector rate.',
          'Sono ammessi solo quadri, specialisti con laurea e professionisti molto esperti; i lavori ordinari sono preclusi ai cittadini extra-UE. Il datore deve dimostrare di non aver trovato un candidato adatto in Svizzera o nell’UE/AELS, e pagare lo stipendio d’uso locale e di settore.', 'CH-SRC-01 CH-SRC-19'],
        ['The canton and then the federal migration office approve; a quota place is needed: 4,500 B and 4,000 L permits in 2026, with a separate 3,500 for UK citizens.',
          'Approvano il cantone e poi la Segreteria di Stato della migrazione; serve un posto nei contingenti: 4.500 permessi B e 4.000 L nel 2026, con 3.500 a parte per i cittadini britannici.', 'CH-SRC-16 CH-SRC-14']
      ],
      f: [[['Fees', 'Costi'], ['CHF 322 to 329 in all', 'CHF 322-329 in totale'], 'CH-SRC-05']] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['PhD and research posts', 'Dottorato e posti di ricerca'], law: 'OASA art. 40',
      t: [
        ['Swiss PhD students and postdocs are salaried staff; the university’s HR files the permit, and academic research enjoys easier admission, without the residents’ priority.',
          'Dottorandi e postdoc in Svizzera sono dipendenti stipendiati; le risorse umane dell’ateneo presentano la domanda, e la ricerca accademica gode di un’ammissione agevolata, senza priorità ai residenti.', 'CH-SRC-02 CH-SRC-22'],
        ['As employees they must join Swiss health insurance at the full premium.',
          'Da dipendenti devono iscriversi all’assicurazione malattie svizzera a premio pieno.', 'CH-SRC-06 CH-SRC-07']
      ],
      f: [[['Typical PhD salary', 'Stipendio tipico da dottorando'], ['CHF 48,000 to 55,000 a year', 'CHF 48.000-55.000 l’anno'], 'CH-SRC-22']] },

    { k: 'whv', p: 'uk us other', v: 'limited',
      name: ['Young professionals (stagiaires)', 'Giovani professionisti (stagiaires)'], law: 'bilateral agreements',
      t: [['There is no working-holiday visa. Instead, citizens of 14 countries, the UK and the US among them, aged 18 to 35 with a degree or vocational qualification, can work full time in their own field for up to 18 months, outside the quotas and with no residents’ priority.',
        'Non esiste un visto vacanza-lavoro. In cambio, i cittadini di 14 paesi, tra cui Regno Unito e Stati Uniti, dai 18 ai 35 anni con laurea o qualifica professionale, possono lavorare a tempo pieno nel proprio campo fino a 18 mesi, fuori contingente e senza priorità ai residenti.', 'CH-SRC-15 CH-SRC-01']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; LStrI',
      t: [['Visits up to 90 days in any 180; any paid work, even for a day, needs prior cantonal approval for non-EU citizens.',
        'Visite fino a 90 giorni ogni 180; qualsiasi lavoro retribuito, anche di un giorno, richiede per i cittadini extra-UE l’autorizzazione cantonale preventiva.', 'CH-SRC-01 CH-SRC-28']] },

    { k: 'stay', p: 'uk us other', v: 'open',
      name: ['Settlement (C permit)', 'Domicilio (permesso C)'], law: 'LStrI art. 34',
      t: [['Normally after ten years with a B permit, or five with good integration (B1 spoken, A1 written in the local language). Study years count only if followed by at least two years on an ordinary B permit.',
        'Di regola dopo dieci anni con permesso B, o cinque con buona integrazione (B1 orale, A1 scritto nella lingua del luogo). Gli anni di studio contano solo se seguiti da almeno due anni con un permesso B ordinario.', 'CH-SRC-01']] },

    { k: 'stay', p: 'eu', v: 'free',
      name: ['Settlement (C permit)', 'Domicilio (permesso C)'], law: 'ALCP',
      t: [['EU and EFTA citizens usually get the permanent C permit after five years.',
        'I cittadini UE e AELS ottengono di solito il permesso permanente C dopo cinque anni.', 'CH-SRC-01 CH-SRC-03']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Line up housing that lets you register within 14 days: towns refuse registration on an Airbnb or hotel booking, and vacancy rates are 0.11% in Zurich and 0.31% in Geneva, so many newcomers book a serviced apartment first.',
        'Trova un alloggio che ti permetta di registrarti entro 14 giorni: i comuni rifiutano la registrazione con una prenotazione Airbnb o d’albergo, e i tassi di sfitto sono dello 0,11% a Zurigo e dello 0,31% a Ginevra, quindi molti nuovi arrivati prenotano prima un appartamento con servizi.', 'CH-SRC-04 CH-SRC-19']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Once the canton approves, collect the D visa (90 CHF) before you travel; the permit fees in Switzerland are CHF 137 to 144.',
        'Dopo l’approvazione del cantone, ritira il visto D (90 CHF) prima di partire; le tasse del permesso in Svizzera vanno da 137 a 144 CHF.', 'CH-SRC-05 CH-SRC-23']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register with the residents’ office (Einwohnerkontrolle, contrôle des habitants) within 14 days of arriving and before your first day of work, with passport, lease or the main tenant’s accommodation statement, work contract or enrolment, 2 photos and civil-status papers. Working before registering counts as undeclared work.',
        'Registrati all’ufficio controllo abitanti entro 14 giorni dall’arrivo e prima del primo giorno di lavoro, con passaporto, contratto d’affitto o dichiarazione d’alloggio del locatario principale, contratto di lavoro o immatricolazione, 2 fototessere e atti di stato civile. Lavorare prima della registrazione è lavoro nero.', 'CH-SRC-04 CH-SRC-01']
    ] },
    { k: 'card', p: 'eu uk us other', t: [
      ['The registration receipt (Meldebestätigung) lets you work and start other formalities while the biometric permit card is made, in 3 to 8 weeks.',
        'La ricevuta di registrazione (Meldebestätigung) ti permette di lavorare e avviare le altre pratiche mentre viene prodotta la carta biometrica del permesso, in 3-8 settimane.', 'CH-SRC-23']
    ] },
    { k: 'card', p: 'eu', t: [
      ['With a work contract of a year or more you get a B permit valid 5 years.',
        'Con un contratto di lavoro di un anno o più ricevi un permesso B valido 5 anni.', 'CH-SRC-03']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Your 13-digit social insurance number (AHV/AVS, starting 756) is assigned through your employer’s compensation fund, or through the residents’ office for students and people not working.',
        'Il numero di assicurazione sociale a 13 cifre (AVS/AHV, che inizia con 756) viene assegnato tramite la cassa di compensazione del datore, o tramite il controllo abitanti per studenti e chi non lavora.', 'CH-SRC-08'],
      ['Without a C permit, tax is withheld from your pay at source; earning CHF 120,000 a year or more, you must also file an ordinary tax return every year.',
        'Senza permesso C, l’imposta è trattenuta alla fonte sullo stipendio; con un reddito di 120.000 CHF l’anno o più, devi anche presentare ogni anno la dichiarazione ordinaria.', 'CH-SRC-09 CH-SRC-10']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Take out basic health insurance within 3 months of taking up residence: it is backdated to day one, and if you miss the deadline the canton assigns you an insurer, with a late-payment surcharge. Premiums average CHF 393.30 a month in 2026, with a CHF 300 deductible and 10% co-payment up to CHF 700 a year.',
        'Stipula l’assicurazione malattie di base entro 3 mesi dalla presa di residenza: è retroattiva al primo giorno, e se superi il termine il cantone ti assegna un assicuratore, con un supplemento per il ritardo. I premi sono in media di 393,30 CHF al mese nel 2026, con franchigia di 300 CHF e quota del 10% fino a 700 CHF l’anno.', 'CH-SRC-06 CH-SRC-17']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Students can be exempted by showing a valid European Health Insurance Card and filing the cantonal exemption form within the 3 months; any paid work in Switzerland ends the exemption.',
        'Gli studenti possono essere esentati presentando una Tessera europea di assicurazione malattia valida e il modulo cantonale di esenzione entro i 3 mesi; qualsiasi lavoro retribuito in Svizzera fa decadere l’esenzione.', 'CH-SRC-07']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students can be exempted with an equivalent private student policy (about CHF 38 to 115 a month) certified by the canton; any paid work in Switzerland ends the exemption.',
        'Gli studenti possono essere esentati con una polizza privata per studenti equivalente (circa 38-115 CHF al mese) certificata dal cantone; qualsiasi lavoro retribuito in Svizzera fa decadere l’esenzione.', 'CH-SRC-07 CH-SRC-18']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['PostFinance must open a basic Swiss franc account for anyone resident in Switzerland; private banks may refuse until you hold the permit card, and app banks (Neon, Yuh) accept only the card itself.',
        'PostFinance deve aprire un conto base in franchi a chiunque risieda in Svizzera; le banche private possono rifiutare finché non hai la carta del permesso, e le banche via app (Neon, Yuh) accettano solo la carta stessa.', 'CH-SRC-11']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['The registration receipt is not a travel document: if your D visa has expired before the card arrives, ask the cantonal migration office for a return visa (90 CHF), granted only for urgent reasons, before you leave.',
        'La ricevuta di registrazione non è un documento di viaggio: se il visto D è scaduto prima che arrivi la carta, chiedi all’ufficio cantonale della migrazione un visto di ritorno (90 CHF), concesso solo per motivi urgenti, prima di partire.', 'CH-SRC-05']
    ] }
  ],

  traps: [
    { p: 'eu uk us other', t: ['Starting work before registering at the commune counts as undeclared work.',
      'Iniziare a lavorare prima dell’annuncio al comune è lavoro nero.', 'CH-SRC-04 CH-SRC-01'] },
    { p: 'eu uk us other', t: ['Miss the three-month health-insurance deadline and the canton assigns you an insurer at the standard model, with a late surcharge.',
      'Mancata la scadenza dei tre mesi per l’assicurazione malattie, il cantone assegna d’ufficio una cassa con il modello standard e un supplemento per il ritardo.', 'CH-SRC-06'] },
    { p: 'eu uk us other', t: ['Communes refuse registration on an Airbnb or hotel booking; a serviced apartment booked before you arrive is the usual way out.',
      'I comuni rifiutano l’annuncio con una prenotazione Airbnb o d’albergo; un appartamento ammobiliato prenotato prima di arrivare è la via d’uscita usuale.', 'CH-SRC-04'] },
    { p: 'uk us other', t: ['The commune’s receipt is not a travel document: leaving after your D visa expires and before the card arrives needs a return visa (CHF 90).',
      'La ricevuta del comune non è un documento di viaggio: uscire dopo la scadenza del visto D e prima della carta richiede un visto di ritorno (CHF 90).', 'CH-SRC-05'] },
    { p: 'eu', t: ['A posting notice filed even one day short of eight full days before work starts is treated as undeclared work, with fines and possible bans.',
      'Una notifica di distacco presentata anche un giorno meno degli otto giorni pieni prima dell’inizio è trattata come lavoro nero, con multe ed eventuali divieti.', 'CH-SRC-12'] },
    { p: 'eu uk us other', t: ['With a B, L or G permit, tax is withheld from your pay; above CHF 120,000 a year you must file a full return every year.',
      'Con un permesso B, L o G l’imposta è trattenuta alla fonte; sopra CHF 120.000 l’anno bisogna presentare ogni anno la dichiarazione completa.', 'CH-SRC-09'] }
  ],

  open: [
    { st: 'pending', t: ['The new Switzerland–EU package (Bilaterals III), signed on 2 March 2026, still has to be ratified and may change free movement.',
      'Il nuovo pacchetto Svizzera–UE (Bilaterali III), firmato il 2 marzo 2026, deve ancora essere ratificato e potrebbe cambiare la libera circolazione.'] },
    { st: 'pending', t: ['Switzerland may rejoin Erasmus+ in 2027; until then exchanges run through the Swiss SEMP programme.',
      'La Svizzera potrebbe rientrare in Erasmus+ nel 2027; fino ad allora gli scambi passano per il programma svizzero SEMP.'] },
    { st: 'open', t: ['Cantons differ on accepting temporary housing and sublets for registration.',
      'I cantoni non concordano nell’accettare alloggi temporanei e subaffitti per l’annuncio.'] },
    { st: 'open', t: ['What counts as “preponderant economic interest” for hiring a non-EU graduate of a Swiss university varies by canton.',
      'Che cosa valga come “interesse economico preponderante” per assumere un laureato extra-UE di un ateneo svizzero varia da cantone a cantone.'] },
    { st: 'open', t: ['Cantons differ on which foreign private policies they accept for the students’ health exemption.',
      'I cantoni non concordano su quali polizze private estere accettare per l’esenzione sanitaria degli studenti.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/switzerland/switzerland_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('CH', {
  "CH-SRC-03": ["Accordo tra la Confederazione Svizzera e la Comunità europea sulla libera circolazione delle persone (ALCP / FZA, RS…","https://www.fedlex.admin.ch/eli/cc/2002/243/it","2026-10-05"],
  "CH-SRC-04": ["Ordinanza sull'introduzione della libera circolazione delle persone (OLCP, RS 142.203)","https://www.fedlex.admin.ch/eli/cc/2002/262/it","2026-10-05"],
  "CH-SRC-13": ["SEM: Portale e Procedura di Notifica (Meldeverfahren per 90 giorni)","https://www.sem.admin.ch/sem/it/home/themen/arbeit/meldeverfahren.html","2026-10-05"],
  "CH-SRC-06": ["Legge federale sull'assicurazione malattie (LAMal / KVG, RS 832.10)","https://www.fedlex.admin.ch/eli/cc/1995/1328_1328_1328/it","2026-10-05"],
  "CH-SRC-07": ["Ordinanza sull'assicurazione malattie (OAMal / KVV, RS 832.102)","https://www.fedlex.admin.ch/eli/cc/1995/3867_3867_3867/it","2026-10-05"],
  "CH-SRC-28": ["DFAE / EDA: Prescrizioni d'entrata e rilascio visti nazionali D","https://www.eda.admin.ch/eda/it/dfae/ingresso-svizzera-soggiorno/visti-ingresso-soggiorno.html","2026-10-05"],
  "CH-SRC-02": ["Ordinanza sull'ammissione, il soggiorno e l'attività lucrativa (OASA / VZAE, RS 142.201)","https://www.fedlex.admin.ch/eli/cc/2007/759/it","2026-10-05"],
  "CH-SRC-16": ["SEM: Direttive LStrI (Weisungen Ausländerbereich)","https://www.sem.admin.ch/sem/it/home/publiservice/weisungen-kreisschreiben/auslaenderbereich.html","2026-10-05"],
  "CH-SRC-23": ["Cantone Zurigo (ZH): Migrationsamt & Amt für Wirtschaft und Arbeit (AWA)","https://www.zh.ch/de/migration-integration.html","2026-10-05"],
  "CH-SRC-24": ["Cantone Ginevra (GE): Office cantonal de la population et des migrations (OCPM)","https://www.ge.ch/ocpm","2026-10-05"],
  "CH-SRC-25": ["Cantone Vaud (VD): Service de la population (SPOP)","https://www.vd.ch/population/population-etrangere","2026-10-05"],
  "CH-SRC-26": ["Cantone Basilea-Città (BS): Bevölkerungsdienste und Migration & AWA","https://www.bs.ch/themen/arbeit-und-wirtschaft","2026-10-05"],
  "CH-SRC-05": ["Ordinanza sugli emolumenti della legge federale sugli stranieri e la loro integrazione (OEmol-LStrI / GebV-AIG, RS…","https://www.fedlex.admin.ch/eli/cc/2007/763/it","2026-10-05"],
  "CH-SRC-01": ["Legge federale sugli stranieri e la loro integrazione (LStrI / AIG, RS 142.20)","https://www.fedlex.admin.ch/eli/cc/2007/758/it","2026-10-05"],
  "CH-SRC-15": ["SEM: Programmi per Giovani Professionisti (Stagiaires)","https://www.sem.admin.ch/sem/it/home/themen/arbeit/berufspraktika.html","2026-10-05"],
  "CH-SRC-29": ["Oggetto Parlamentare 22.067 (Zulassungserleichterung)","https://www.parlament.ch/it/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20220067","2026-10-05"],
  "CH-SRC-14": ["Decisione Contingenti Lavoratori Stranieri 2026","https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-103328.html","2025-11-19"],
  "CH-SRC-19": ["UST / BFS: Rilevazione svizzera della struttura dei salari (LSE 2024) & Salarium","https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html","2025-11-25"],
  "CH-SRC-22": ["FNS / SNSF (Fondo Nazionale Svizzero): Regolamenti e tabelle salariali dottorandi e postdoc","https://www.snf.ch/fr/eDsqz0aJ3O7f8P12/page/salaires-et-reglements","2026-10-05"],
  "CH-SRC-08": ["Legge federale sull'assicurazione per la vecchiaia e per i superstiti (LAVS, RS 831.10)","https://www.fedlex.admin.ch/eli/cc/63/837_843_843/it","2026-10-05"],
  "CH-SRC-09": ["Legge federale sull'imposta federale diretta (LIFD / DBG, RS 642.11)","https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/it","2026-10-05"],
  "CH-SRC-10": ["Ordinanza del DFF sull'imposta alla fonte (OIFo, RS 642.118.2)","https://www.fedlex.admin.ch/eli/cc/2018/274/it","2026-10-05"],
  "CH-SRC-17": ["UFSP / BAG: Premi medi dell'assicurazione malattie 2026 & Portale Priminfo","https://www.priminfo.admin.ch","2026-10-05"],
  "CH-SRC-18": ["Gemeinsame Einrichtung KVG: Direttive di esenzione dall'obbligo assicurativo per studenti","https://www.kvg.org","2026-10-05"],
  "CH-SRC-11": ["Legge sulle poste (LPO / PostG, RS 783.0)","https://www.fedlex.admin.ch/eli/cc/2012/585/it","2026-10-05"],
  "CH-SRC-12": ["Legge sui lavoratori distaccati (LDist / EntsG, RS 823.20)","https://www.fedlex.admin.ch/eli/cc/2003/231/it","2026-10-05"]
});

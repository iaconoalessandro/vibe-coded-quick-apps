/* Visas and permits: Poland. From research/visas_immigration/poland/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'PL',
  folder: 'poland',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work with no authorisation.',
        'I cittadini UE, SEE e svizzeri lavorano senza autorizzazione.', 'PL-SRC-02'],
      ['Staying over three months, register your stay at the voivode’s office by the day after the three months end; the certificate is free.',
        'Per un soggiorno oltre i tre mesi si registra il soggiorno all’ufficio del voivoda entro il giorno successivo alla scadenza dei tre mesi; il certificato è gratuito.', 'PL-SRC-03 PL-SRC-08'],
      ['Register your address (meldunek) at the town hall within 30 days of moving in; it gives you a PESEL number at no cost.',
        'Si registra l’indirizzo (meldunek) in comune entro 30 giorni dall’ingresso nell’alloggio; dà gratuitamente il numero PESEL.', 'PL-SRC-13']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student visa and temporary residence permit', 'Visto per studio e permesso di soggiorno temporaneo'], law: 'Ustawa o cudzoziemcach art. 144',
      t: [
        ['Get the national student visa (D09) at a consulate; the first residence permit lasts 15 months and is applied for online on the MOS portal, where the university signs its part.',
          'Si ottiene il visto nazionale per studio (D09) al consolato; il primo permesso dura 15 mesi e si chiede online sul portale MOS, dove l’università firma la sua parte.', 'PL-SRC-01 PL-SRC-12'],
        ['Full-time (stationary) students may work without limit and with no work permit; part-time or weekend students need one.',
          'Gli studenti a tempo pieno (corsi stazionari) possono lavorare senza limiti e senza permesso di lavoro; gli studenti part-time o del fine settimana ne hanno bisogno.', 'PL-SRC-02'],
        ['A non-EU student with a permit from another EU country in an EU programme needs no Polish visa or permit for up to 360 days, after the university notifies the Border Guard.',
          'Uno studente extra-UE con permesso di un altro paese UE in un programma europeo non ha bisogno di visto o permesso polacco fino a 360 giorni, dopo la notifica dell’università alla Guardia di frontiera.', 'PL-SRC-01 PL-SRC-17']
      ],
      f: [
        [['Funds, beyond housing costs', 'Mezzi, oltre ai costi dell’alloggio'], ['PLN 1,010 a month', 'PLN 1.010 al mese'], 'PL-SRC-10'],
        [['Return fare to show', 'Fondi per il rientro'], ['PLN 2,500 from outside the EU', 'PLN 2.500 da fuori UE'], 'PL-SRC-11'],
        [['Fees', 'Costi'], ['€135 visa; PLN 340 + PLN 100 card', '135 € visto; PLN 340 + PLN 100 la carta'], 'PL-SRC-06 PL-SRC-08']
      ] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Trainee permit', 'Permesso per tirocinanti'], law: 'Ustawa o cudzoziemcach art. 157a',
      t: [
        ['For graduates of the last two years or students outside the EU, with a written traineeship contract at a host approved by the interior ministry; up to six months, renewable once.',
          'Per chi si è laureato negli ultimi due anni o studia fuori dall’UE, con un contratto di tirocinio scritto presso un ente approvato dal ministero dell’Interno; fino a sei mesi, rinnovabili una volta.', 'PL-SRC-01'],
        ['Full-time students in Poland can do internships with no permit.',
          'Gli studenti a tempo pieno in Polonia possono fare tirocini senza permesso.', 'PL-SRC-02']
      ],
      f: [[['Fees', 'Costi'], ['€135 visa; PLN 340 + PLN 100 card', '135 € visto; PLN 340 + PLN 100 la carta'], 'PL-SRC-06 PL-SRC-08']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Permit for graduates of Polish universities', 'Permesso per laureati in università polacche'], law: 'Ustawa o cudzoziemcach art. 186 (1)(6)',
      t: [
        ['After a degree or doctorate in Poland, apply while still lawfully resident: nine months, once, to find work or start a business.',
          'Dopo una laurea o un dottorato in Polonia si fa domanda mentre il soggiorno è ancora regolare: nove mesi, una volta, per trovare lavoro o avviare un’impresa.', 'PL-SRC-01'],
        ['Graduates of full-time Polish programmes are exempt from work permits for life: any employer can hire them directly, with no labour-market test.',
          'Chi si è laureato in un corso polacco a tempo pieno è esente dal permesso di lavoro a vita: qualsiasi datore può assumerlo direttamente, senza test del mercato.', 'PL-SRC-02']
      ],
      f: [[['Fees', 'Costi'], ['PLN 340 + PLN 100 card', 'PLN 340 + PLN 100 la carta'], 'PL-SRC-08']] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'Ustawa o cudzoziemcach art. 127',
      t: [['A contract of at least six months and a three-year degree, or five years of experience (three in the last seven for IT and managers); no labour-market test, and a spouse may work at once. Apply online through MOS.',
        'Un contratto di almeno sei mesi e una laurea triennale, o cinque anni di esperienza (tre negli ultimi sette per informatici e manager); nessun test del mercato, e il coniuge può lavorare subito. La domanda si fa online su MOS.', 'PL-SRC-01 PL-SRC-23 PL-SRC-12']],
      f: [
        [['Salary, applications in 2026', 'Stipendio, domande nel 2026'], ['PLN 13,355.34 gross a month', 'PLN 13.355,34 lordi al mese'], 'PL-SRC-09'],
        [['Fees', 'Costi'], ['PLN 440 + PLN 100 card', 'PLN 440 + PLN 100 la carta'], 'PL-SRC-08']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['Single permit to stay and work', 'Permesso unico di soggiorno e lavoro'], law: 'Ustawa o cudzoziemcach art. 114',
      t: [['The employer first gets a work permit from the voivode, usually after a labour-market test by the job centre, then you get a D visa and apply for the single permit online before the visa runs out.',
        'Il datore ottiene prima un permesso di lavoro dal voivoda, di solito dopo un test del mercato del centro per l’impiego, poi si ottiene un visto D e si chiede online il permesso unico prima della scadenza del visto.', 'PL-SRC-02 PL-SRC-01 PL-SRC-12']],
      f: [
        [['Fees', 'Costi'], ['€135 visa; PLN 440 + PLN 100 card; employer PLN 400', '135 € visto; PLN 440 + PLN 100 la carta; datore PLN 400'], 'PL-SRC-06 PL-SRC-08 PL-SRC-05']
      ] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, and doctoral schools', 'Permesso per ricercatori e scuole dottorali'], law: 'Ustawa o cudzoziemcach art. 151',
      t: [
        ['A master’s degree and a hosting agreement with a research body approved by the science ministry; no work permit is needed for the project.',
          'Un master e una convenzione di accoglienza con un ente di ricerca approvato dal ministero della Scienza; per il progetto non serve permesso di lavoro.', 'PL-SRC-01 PL-SRC-02'],
        ['Doctoral-school students receive a stipend free of income tax but with pension contributions, and need no work permit.',
          'I dottorandi delle scuole dottorali ricevono una borsa esente da imposte ma con contributi pensionistici, e non hanno bisogno di permesso di lavoro.', 'PL-SRC-20 PL-SRC-18 PL-SRC-14 PL-SRC-02']
      ],
      f: [[['Doctoral stipend', 'Borsa dottorale'], ['PLN 3,570.50 gross a month for the first two years, PLN 5,500.50 after', 'PLN 3.570,50 lordi al mese i primi due anni, PLN 5.500,50 dopo'], 'PL-SRC-20']] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Poland has working-holiday agreements only with New Zealand, Australia, Canada, Japan, Taiwan, South Korea, Chile and Argentina.',
        'La Polonia ha accordi di vacanza-lavoro solo con Nuova Zelanda, Australia, Canada, Giappone, Taiwan, Corea del Sud, Cile e Argentina.', 'PL-SRC-16']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['For citizens of those countries aged 18 to 30 (35 for Canada): a 12-month D visa with work allowed and no permit, usually not convertible inside Poland.',
        'Per cittadini di quei paesi dai 18 ai 30 anni (35 per il Canada): un visto D di 12 mesi con lavoro consentito senza permesso, di regola non convertibile in Polonia.', 'PL-SRC-16 PL-SRC-02']],
      f: [[['Visa', 'Visto'], ['€135', '135 €'], 'PL-SRC-06']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen',
      t: [['Up to 90 days in any 180; work only with an authorisation obtained before you start.',
        'Fino a 90 giorni ogni 180; si lavora solo con un’autorizzazione ottenuta prima di iniziare.', 'PL-SRC-07 PL-SRC-02']],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'PL-SRC-07']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: work is open to you, and registration is needed only if you stay more than 3 months.',
        'Niente da preparare in anticipo: il lavoro ti è aperto, e la registrazione serve solo se resti più di 3 mesi.', 'PL-SRC-03']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Since 27 April 2026 every residence application goes through the MOS portal (mos.cudzoziemcy.gov.pl), signed with a Trusted Profile; paper applications are set aside unexamined. For a work permit, your employer completes and signs its annex from a link MOS sends.',
        'Dal 27 aprile 2026 ogni domanda di soggiorno passa dal portale MOS (mos.cudzoziemcy.gov.pl), firmata con il Profil Zaufany; le domande cartacee vengono archiviate senza esame. Per un permesso di lavoro, il datore compila e firma il suo allegato da un link inviato da MOS.', 'PL-SRC-12']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register your address (zameldowanie) at the local municipal office within 30 days of moving in, with passport or ID, residence document or visa, and a lease signed by the owner; EU citizens must once they stay over 3 months, others once they stay over 30 days. It is free; a paper certificate costs 21 PLN.',
        'Registra l’indirizzo (zameldowanie) all’ufficio comunale entro 30 giorni dall’ingresso nell’alloggio, con passaporto o carta d’identità, documento di soggiorno o visto, e contratto d’affitto firmato dal proprietario; i cittadini UE devono farlo se restano oltre 3 mesi, gli altri oltre 30 giorni. È gratuito; un certificato cartaceo costa 21 PLN.', 'PL-SRC-13 PL-SRC-08']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Staying over 3 months, register your stay at the voivode’s office by the day after the 3 months end; students bring enrolment, a statement of means and the European Health Insurance Card. The paper certificate is free and valid 10 years.',
        'Se resti oltre 3 mesi, registra il soggiorno all’ufficio del voivoda entro il giorno successivo alla fine dei 3 mesi; gli studenti portano iscrizione, dichiarazione sui mezzi e Tessera europea di assicurazione malattia. Il certificato cartaceo è gratuito e vale 10 anni.', 'PL-SRC-03 PL-SRC-08']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Attend the voivode’s appointment for fingerprints; once the decision is positive, pay 100 PLN to collect the residence card. The stamp duty for the application is 440 PLN for work and 340 PLN for study or research.',
        'Presentati all’appuntamento del voivoda per le impronte; con la decisione positiva, paga 100 PLN per ritirare la carta di soggiorno. L’imposta di bollo per la domanda è di 440 PLN per lavoro e 340 PLN per studio o ricerca.', 'PL-SRC-01 PL-SRC-05']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['The 11-digit PESEL number, needed for tax, work contracts, public health care and digital ID, is given free when you register your address; without a lease yet, you can ask for it for tax purposes.',
        'Il numero PESEL a 11 cifre, necessario per fisco, contratti di lavoro, sanità pubblica e identità digitale, viene assegnato gratis alla registrazione dell’indirizzo; se non hai ancora un contratto d’affitto, puoi chiederlo a fini fiscali.', 'PL-SRC-13']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Your employer must register you with ZUS within 7 days of hiring, which brings public health cover (NFZ). Students under 26 on a civil-law contract (zlecenie) pay no ZUS or income tax.',
        'Il datore deve iscriverti alla ZUS entro 7 giorni dall’assunzione, il che comporta la copertura sanitaria pubblica (NFZ). Gli studenti sotto i 26 anni con un contratto civilistico (zlecenie) non pagano ZUS né imposta sul reddito.', 'PL-SRC-14 PL-SRC-18']
    ] },
    { k: 'health', p: 'eu', t: [
      ['Students and trainees without a job use the European Health Insurance Card.',
        'Studenti e tirocinanti senza lavoro usano la Tessera europea di assicurazione malattia.', 'PL-SRC-03']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students without cover take private insurance of at least €30,000, or voluntary NFZ insurance at about 55.80 PLN a month for foreign students.',
        'Gli studenti senza copertura stipulano un’assicurazione privata di almeno 30.000 €, o l’assicurazione volontaria NFZ a circa 55,80 PLN al mese per gli studenti stranieri.', 'PL-SRC-14']
    ] },
    { k: 'bank', p: 'eu uk us other', t: [
      ['Activate the Trusted Profile (Profil Zaufany), the state’s digital ID and e-signature, in two minutes through a Polish bank (mBank, PKO BP, Santander, Pekao, Millennium, ING, Alior), or online at pz.gov.pl with a check in person at a tax office, ZUS or the voivode’s office. It is free.',
        'Attiva il Profil Zaufany, l’identità digitale e firma elettronica dello Stato, in due minuti tramite una banca polacca (mBank, PKO BP, Santander, Pekao, Millennium, ING, Alior), o online su pz.gov.pl con una verifica di persona presso un ufficio delle imposte, la ZUS o il voivodato. È gratuito.', 'PL-SRC-21']
    ] },
    { k: 'keep', p: 'eu', t: [
      ['The registration certificate lasts 10 years.',
        'Il certificato di registrazione dura 10 anni.', 'PL-SRC-03']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['File for a new permit by the last day of your legal stay: you then stay legally until the decision, but may work only if you already could, or are renewing a single permit with the same employer and job.',
        'Presenta la domanda di nuovo permesso entro l’ultimo giorno di soggiorno legale: resti così in regola fino alla decisione, ma puoi lavorare solo se già potevi, o se rinnovi un permesso unico con lo stesso datore e le stesse mansioni.', 'PL-SRC-01 PL-SRC-25'],
      ['The MOS certificate or the voivode’s stamp is not a travel document: you may leave by a direct route home, but cannot return with it, and must not travel in Schengen once your visa or visa-free days run out.',
        'Il certificato MOS o il timbro del voivoda non sono documenti di viaggio: puoi partire per una via diretta verso casa, ma non rientrare con essi, e non devi viaggiare in Schengen una volta scaduti il visto o i giorni senza visto.', 'PL-SRC-17']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['Since 27 April 2026 residence applications are accepted only online through MOS, which needs a Trusted Profile (Profil Zaufany); paper applications are dismissed.',
      'Dal 27 aprile 2026 le domande di soggiorno si accettano solo online tramite MOS, che richiede il Profil Zaufany; le domande cartacee vengono archiviate.', 'PL-SRC-12 PL-SRC-21'] },
    { p: 'uk us other', t: ['A pending application does not by itself let you work, and its certificate is not a travel document: you may leave on a direct flight home, but cannot re-enter Poland with it.',
      'Una domanda pendente non consente di per sé di lavorare, e la sua attestazione non è un documento di viaggio: si può partire con un volo diretto verso casa, ma non rientrare in Polonia con essa.', 'PL-SRC-25 PL-SRC-17'] },
    { p: 'uk us other', t: ['Decisions take 6 to 12 months in Warsaw and Kraków, against a legal 60 days.',
      'Le decisioni richiedono da 6 a 12 mesi a Varsavia e Cracovia, contro i 60 giorni di legge.', 'PL-SRC-19 PL-SRC-01'] }
  ],

  open: [
    { st: 'watch', t: ['The switch to the MOS portal and the end of the passport stamp are still settling in.',
      'Il passaggio al portale MOS e l’abolizione del timbro sul passaporto sono ancora in fase di assestamento.'] },
    { st: 'open', t: ['The Mazowieckie and Małopolskie voivode offices are structurally overloaded.',
      'Gli uffici dei voivoda di Mazowieckie e Małopolskie sono cronicamente sovraccarichi.'] },
    { st: 'open', t: ['Banks often refuse an account to people holding only the application certificate.',
      'Le banche rifiutano spesso il conto a chi ha solo l’attestazione della domanda.'] },
    { st: 'open', t: ['Private landlords are often reluctant to confirm your address registration.',
      'I proprietari privati sono spesso riluttanti a confermare l’iscrizione dell’indirizzo.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/poland/poland_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('PL', {
  "PL-SRC-02": ["Ustawa z dnia 20 kwietnia 2004 r. o promocji zatrudnienia i instytucjach rynku pracy (Dz.U. z 2024 r. poz. 475 z późn.…","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20040991001","2026-10-05"],
  "PL-SRC-03": ["Ustawa z dnia 14 lipca 2006 r. o wjeździe na terytorium RP, pobycie oraz wyjeździe obywateli UE i członków ich rodzin…","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20061521099","2026-10-05"],
  "PL-SRC-08": ["Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (Dz.U. z 2023 r. poz. 2111) & Rozporządzenie MSWiA z dnia 29…","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20062251635","2026-10-05"],
  "PL-SRC-13": ["Ustawa z dnia 24 września 2010 r. o ewidencji ludności (Dz.U. 2024 poz. 736)","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20102171427","2026-10-05"],
  "PL-SRC-01": ["Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Dz.U. z 2024 r. poz. 797 z późn. zm.)","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20130001650","2026-10-05"],
  "PL-SRC-12": ["Ustawa z dnia 24 kwietnia 2025 r. o zmianie ustawy o cudzoziemcach (riforma telematica MOS obbligatoria dal…","https://mos.cudzoziemcy.gov.pl/","2026-10-05"],
  "PL-SRC-17": ["Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Art. 108 ust. 2, Art. 149b–149d) & Komenda Główna Straży Granicznej…","https://www.strazgraniczna.pl/","2026-10-05"],
  "PL-SRC-10": ["Rozporządzenie Rady Ministrów z dnia 12 lipca 2024 r. w sprawie zweryfikowanych kryteriów dochodowych oraz kwot…","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001044","2026-10-05"],
  "PL-SRC-11": ["Rozporządzenie MSWiA z dnia 23 lutego 2015 r. w sprawie środków finansowych wymaganych od cudzoziemca... (Dz.U. 2014…","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20140000223","2026-10-05"],
  "PL-SRC-06": ["Rozporządzenie MSZ z dnia 15 maja 2024 r. zmieniające rozporządzenie w sprawie opłat konsularnych (Dz.U. z 2024 r.…","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240000753","2026-10-05"],
  "PL-SRC-23": ["Ustawa z dnia 24 kwietnia 2025 r. o zmianie ustawy o cudzoziemcach (Recepimento Direttiva UE 2021/1883)","https://eur-lex.europa.eu/eli/dir/2021/1883/oj","2026-10-05"],
  "PL-SRC-09": ["Komunikat Prezesa GUS z dnia 11 lutego 2025 r. e 9 lutego 2026 r. w sprawie przeciętnego wynagrodzenia w gospodarce…","https://stat.gov.pl/sygnalne/komunikaty-i-obwieszczenia/lista-komunikatow-i-obwieszczen/","2026-10-05"],
  "PL-SRC-05": ["Rozporządzenie MRPiPS z dnia 20 listopada 2025 r. zmieniające rozporządzenie w sprawie wysokości wpłat dokonywanych w…","https://isap.sejm.gov.pl/","2026-10-05"],
  "PL-SRC-20": ["Rozporządzenie Ministra Nauki i Szkolnictwa Wyższego z dnia 14 kwietnia 2026 r.","https://isap.sejm.gov.pl/","2026-10-05"],
  "PL-SRC-18": ["Ustawa z dnia 26 lipca 1991 r. o podatku dochodowym od osób fizycznych (PIT) (Dz.U. 2024 poz. 226 z późn. zm.)","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19910800350","2026-10-05"],
  "PL-SRC-14": ["Ustawa z dnia 27 sierpnia 2004 r. o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych (Dz.U. 2024…","https://www.nfz.gov.pl/dla-pacjenta/ubezpieczenia-w-nfz/ubezpieczenie-dobrowolne/","2026-10-05"],
  "PL-SRC-16": ["Accordi bilaterali internazionali sul programma vacanza-lavoro (Program Zwiedzaj i Pracuj / Working Holiday)","https://www.gov.pl/web/dyplomacja/umowy-miedzynarodowe","2026-10-05"],
  "PL-SRC-07": ["Rozporządzenie Delegowane Komisji (UE) 2024/1415 z dnia 14 marca 2024 r.","https://eur-lex.europa.eu/eli/reg_del/2024/1415/oj","2026-10-05"],
  "PL-SRC-21": ["Ministerstwo Cyfryzacji – Piattaforma dei Servizi Fiduciari (Profil Zaufany / login.gov.pl)","https://pz.gov.pl/","2026-10-05"],
  "PL-SRC-25": ["Ustawa o promocji zatrudnienia... (Art. 88za) in combinato con Ustawa o cudzoziemcach (Art. 108)","https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20040991001","2026-10-05"],
  "PL-SRC-19": ["Najwyższa Izba Kontroli (NIK) – Dipartimento Pubblica Amministrazione","https://www.nik.gov.pl/aktualnosci/obsluga-cudzoziemcow.html","2026-10-05"]
});

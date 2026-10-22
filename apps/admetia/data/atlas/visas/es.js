/* Visas and permits: Spain. From research/visas_immigration/spain/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'ES',
  folder: 'spain',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens work in Spain without permits or quotas, and enter with a passport or national identity card.',
        'I cittadini UE, SEE e svizzeri lavorano in Spagna senza permessi né quote, ed entrano con passaporto o carta d’identità.', 'ES-SRC-04'],
      ['Staying over three months, apply within three months for the EU registration certificate (CUE, the green card) at the police: form EX-18, with your contract or enrolment and your town-hall registration (padrón).',
        'Per un soggiorno oltre i tre mesi si chiede entro tre mesi il certificato di registrazione UE (CUE, il foglio verde) alla polizia: modulo EX-18, con contratto o iscrizione e l’iscrizione anagrafica al comune (padrón).', 'ES-SRC-04 ES-SRC-20'],
      ['To break the usual loop, get your social-security number online with your passport, register at the town hall with your passport and lease, and let the employer register you before the CUE appointment.',
        'Per uscire dal solito circolo vizioso, chiedi online il numero di previdenza sociale con il passaporto, iscriviti al comune con passaporto e contratto d’affitto, e fatti registrare dal datore prima dell’appuntamento per il CUE.', 'ES-SRC-26 ES-SRC-20']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student stay authorisation (estancia por estudios)', 'Autorizzazione di soggiorno per studio (estancia por estudios)'], law: 'RD 1155/2024',
      t: [
        ['Apply for the student visa at a Spanish consulate, or from inside Spain within the first 60 days of a legal stay, as long as 30 days of it remain.',
          'Si chiede il visto per studio a un consolato spagnolo, oppure dalla Spagna entro i primi 60 giorni di soggiorno regolare, purché ne restino almeno 30.', 'ES-SRC-14 ES-SRC-01 ES-SRC-02'],
        ['University students may work up to 30 hours a week, employed or self-employed, with no separate authorisation. Health insurance must be a Spanish private policy with no co-payments, no waiting periods and repatriation.',
          'Gli studenti universitari possono lavorare fino a 30 ore a settimana, da dipendenti o in proprio, senza autorizzazione separata. L’assicurazione sanitaria deve essere una polizza privata spagnola senza franchigie, senza carenze e con rimpatrio.', 'ES-SRC-01 ES-SRC-05'],
        ['To renew, pass at least half of the year’s exams or credits. A non-EU student with a student permit from another EU country can study here up to 360 days without a Spanish visa, after the university notifies the immigration office.',
          'Per rinnovare bisogna superare almeno metà degli esami o crediti dell’anno. Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza visto spagnolo, dopo la comunicazione dell’università all’ufficio stranieri.', 'ES-SRC-12 ES-SRC-19']
      ],
      f: [
        [['Proof of funds', 'Mezzi di sussistenza'], ['€600 a month (€7,200 a year)', '600 € al mese (7.200 € l’anno)'], 'ES-SRC-07'],
        [['Visa and identity card (TIE)', 'Visto e carta d’identità (TIE)'], ['€80 + €16.08', '80 € + 16,08 €'], 'ES-SRC-14 ES-SRC-11']
      ],
      w: ['Travel insurance is always refused: the policy must say it has no co-payments and no waiting periods.',
        'Le assicurazioni di viaggio vengono sempre rifiutate: la polizza deve dire espressamente che non ha franchigie né periodi di carenza.', 'ES-SRC-05'] },

    { k: 'intern', p: 'eu uk us other', v: 'open',
      name: ['Internships during your studies', 'Tirocini durante gli studi'], law: 'RD 592/2014',
      t: [['An internship within your degree needs no work authorisation or extra visa. Since January 2024 every intern, paid or not, must be registered with social security: get your number online before the first day.',
        'Un tirocinio nel corso di studi non richiede autorizzazione al lavoro né visto aggiuntivo. Da gennaio 2024 ogni tirocinante, retribuito o no, va iscritto alla previdenza sociale: chiedi il numero online prima del primo giorno.', 'ES-SRC-15 ES-SRC-16 ES-SRC-26']] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Internship authorisation for recent graduates', 'Autorizzazione per tirocinio dei neolaureati'], law: 'Ley 14/2013, DA 18ª',
      t: [['Within two years of a degree, from Spain or abroad: either a training agreement of six months, extendable to a year, or a training employment contract of up to a year. The host applies online and silence after 30 days means yes.',
        'Entro due anni dalla laurea, spagnola o estera: una convenzione di tirocinio di sei mesi prorogabile a un anno, oppure un contratto formativo fino a un anno. L’ente ospitante fa domanda online e il silenzio dopo 30 giorni vale come assenso.', 'ES-SRC-03']],
      f: [
        [['Minimum pay, training agreement', 'Compenso minimo, convenzione'], ['€600 a month', '600 € al mese'], 'ES-SRC-07'],
        [['Minimum pay, training contract', 'Retribuzione minima, contratto formativo'], ['€1,221 a month (14 payments)', '1.221 € al mese (14 mensilità)'], 'ES-SRC-06']
      ] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Straight to work after your degree', 'Passaggio diretto al lavoro dopo la laurea'], law: 'RD 1155/2024 art. 190',
      t: [['With a job offer paying at least the minimum wage, a graduate of Spanish higher education switches straight to a work permit; once the application is filed you may already work full time while it is decided.',
        'Con un’offerta pagata almeno il salario minimo, chi ha concluso studi superiori in Spagna passa direttamente al permesso di lavoro; depositata la domanda, si può già lavorare a tempo pieno durante l’istruttoria.', 'ES-SRC-01 ES-SRC-30']],
      f: [[['Minimum wage, 2026', 'Salario minimo, 2026'], ['€17,094 a year', '17.094 € l’anno'], 'ES-SRC-06']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search or start-up permit', 'Permesso per ricerca lavoro o avvio d’impresa'], law: 'Ley 14/2013, DA 17ª',
      t: [['After a Spanish bachelor’s, official master’s or doctorate, apply from 60 days before to 90 days after your student permit ends: 12 months, not extendable, to find a job or set up a business. It does not itself let you work; a job turns it into a work permit with no labour-market test.',
        'Dopo una laurea, un master ufficiale o un dottorato in Spagna, si fa domanda da 60 giorni prima a 90 giorni dopo la scadenza del permesso per studio: 12 mesi non prorogabili per trovare lavoro o avviare un’impresa. Di per sé non consente di lavorare; un impiego lo converte in permesso di lavoro senza test del mercato.', 'ES-SRC-03']],
      f: [
        [['Funds', 'Mezzi'], ['€600 a month (€7,200)', '600 € al mese (7.200 €)'], 'ES-SRC-07'],
        [['Fees', 'Costi'], ['about €73.26 + €16.08', 'circa 73,26 € + 16,08 €'], 'ES-SRC-11']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card or highly qualified professional', 'Carta Blu UE o professionista altamente qualificato'], law: 'Ley 11/2023; Ley 14/2013',
      t: [
        ['Both skip the labour-market test and are decided online by the large-companies unit (UGE-CE) within 20 working days; silence means yes. The Blue Card needs a three-year degree, or five years of experience (three in the last seven for managers and IT), and a contract of at least six months.',
          'Entrambi evitano il test del mercato del lavoro e sono decisi online dall’unità grandi imprese (UGE-CE) entro 20 giorni lavorativi; il silenzio vale come assenso. La Carta Blu richiede una laurea triennale, o cinque anni di esperienza (tre negli ultimi sette per dirigenti e informatici), e un contratto di almeno sei mesi.', 'ES-SRC-03 ES-SRC-09'],
        ['The lower threshold applies to shortage occupations and to graduates of the last three years; only fixed base pay counts, not bonuses.',
          'La soglia ridotta vale per le professioni carenti e per chi si è laureato negli ultimi tre anni; conta solo la retribuzione fissa, non i bonus.', 'ES-SRC-10']
      ],
      f: [
        [['Salary, standard', 'Stipendio, soglia ordinaria'], ['€41,356.36 a year', '41.356,36 € l’anno'], 'ES-SRC-10'],
        [['Salary, lower threshold', 'Stipendio, soglia ridotta'], ['€33,085.09 a year', '33.085,09 € l’anno'], 'ES-SRC-10'],
        [['Card length', 'Durata'], ['3 years', '3 anni'], 'ES-SRC-09']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary employment', 'Lavoro subordinato ordinario'], law: 'LOEX; RD 1155/2024',
      t: [
        ['Hiring from abroad needs a job on the hard-to-fill occupations list or a certificate that no resident candidate was found; a full-time contract of at least a year at no less than the minimum wage.',
          'L’assunzione dall’estero richiede un lavoro nell’elenco delle professioni difficili da coprire o un certificato che nessun candidato residente è stato trovato; un contratto a tempo pieno di almeno un anno, non sotto il salario minimo.', 'ES-SRC-02 ES-SRC-01 ES-SRC-06'],
        ['First permit for one year; the first renewal is for four, and after five years comes long-term residence.',
          'Primo permesso di un anno; il primo rinnovo vale quattro anni, e dopo cinque anni si ottiene la residenza di lungo periodo.', 'ES-SRC-01 ES-SRC-02']
      ],
      f: [[['Employer fee', 'Tassa per il datore'], ['€203.84, or €407.71 above twice the minimum wage', '203,84 €, o 407,71 € sopra il doppio del salario minimo'], 'ES-SRC-13']],
      w: ['The employer must register you with social security within three months of your arrival, or the permit lapses.',
        'Il datore deve iscriverti alla previdenza sociale entro tre mesi dal tuo arrivo, altrimenti il permesso decade.', 'ES-SRC-01'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit, PhDs included', 'Permesso per ricercatori, dottorandi inclusi'], law: 'Ley 14/2013 art. 72',
      t: [
        ['A university or research centre signs a hosting agreement and applies online; the decision comes within 20 working days and silence means yes. The permit lasts up to three years and counts towards Spanish citizenship.',
          'Un’università o un centro di ricerca firma una convenzione di accoglienza e fa domanda online; la decisione arriva entro 20 giorni lavorativi e il silenzio vale come assenso. Il permesso dura fino a tre anni e conta per la cittadinanza spagnola.', 'ES-SRC-03'],
        ['Since August 2026 PhD students on a pre-doctoral contract or a qualifying scholarship come as researchers, not on a student visa.',
          'Da agosto 2026 i dottorandi con contratto predottorale o borsa qualificata entrano come ricercatori, non con il visto per studio.', 'ES-SRC-18 ES-SRC-17']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Spain has working-holiday agreements only with Australia, Canada, New Zealand, Japan and South Korea.',
        'La Spagna ha accordi di vacanza-lavoro solo con Australia, Canada, Nuova Zelanda, Giappone e Corea del Sud.', 'ES-SRC-24']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Australia, Canada, New Zealand, Japan and South Korea aged 18 to 30 (35 for Canadians): 12 months, at most six with one employer, and it cannot be converted in Spain.',
        'Solo per cittadini di Australia, Canada, Nuova Zelanda, Giappone e Corea del Sud dai 18 ai 30 anni (35 per i canadesi): 12 mesi, al massimo sei con lo stesso datore, e non è convertibile in Spagna.', 'ES-SRC-24']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; RD 1155/2024 art. 12',
      t: [['Up to 90 days in any 180, with no paid work. At the border you may be asked to show about €122 a day, at least €1,098.90. Arriving through another Schengen airport, declare your entry at a police station within 72 working hours and keep your boarding passes.',
        'Fino a 90 giorni ogni 180, senza lavoro retribuito. Alla frontiera possono chiedere di dimostrare circa 122 € al giorno, almeno 1.098,90 €. Arrivando da un altro aeroporto Schengen, dichiara l’ingresso in un commissariato entro 72 ore lavorative e conserva le carte d’imbarco.', 'ES-SRC-23 ES-SRC-01']] },

    { k: 'tax', p: 'eu uk us other', v: 'limited',
      name: ['Beckham regime for people moving to Spain', 'Regime Beckham per chi si trasferisce in Spagna'], law: 'LIRPF art. 93',
      t: [['A flat 24% tax on up to €600,000 of employment income for the year of arrival and five more, if you were not tax-resident in Spain for the previous five years and moved for the job. Coming first to study and then being hired does not qualify.',
        'Un’aliquota fissa del 24% sui primi 600.000 € di reddito da lavoro per l’anno di arrivo e i cinque successivi, se non si è stati residenti fiscali in Spagna nei cinque anni precedenti e ci si è trasferiti per il lavoro. Arrivare prima per studiare e poi essere assunti non dà diritto al regime.', 'ES-SRC-08']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk us other', t: [
      ['Book police appointments (cita previa) only through the official site or an accredited lawyer: appointments sold by bots or middlemen are refused at the door when the names do not match, and can bring criminal charges.',
        'Prenota gli appuntamenti con la polizia (cita previa) solo dal sito ufficiale o tramite un avvocato accreditato: quelli venduti da bot o intermediari vengono respinti all’ingresso se i nomi non corrispondono, e possono comportare accuse penali.', 'ES-SRC-27 ES-SRC-28 ES-SRC-29']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['With an approved work authorisation, you have 1 month to apply for the D visa at the Spanish consulate (€80), with an apostilled criminal record under 90 days old and a medical certificate.',
        'Con l’autorizzazione al lavoro approvata, hai 1 mese per chiedere il visto D al consolato spagnolo (80 €), con il casellario giudiziale apostillato di non oltre 90 giorni e un certificato medico.', 'ES-SRC-14']
    ] },
    { k: 'address', p: 'eu uk us other', t: [
      ['Register on the town hall’s population register (empadronamiento) with your passport and lease: everyone resident must, and the town hall may not demand a NIE first. The certificate is accepted for 3 months in immigration paperwork.',
        'Iscriviti all’anagrafe comunale (empadronamiento) con passaporto e contratto d’affitto: è obbligatorio per tutti i residenti, e il comune non può pretendere prima il NIE. Il certificato è accettato per 3 mesi nelle pratiche di immigrazione.', 'ES-SRC-20']
    ] },
    { k: 'card', p: 'eu', t: [
      ['Within 3 months, get the EU registration certificate (CUE) at the police (form EX-18, €12), with your ID, the register certificate and your employer’s Social Security enrolment; it carries your definitive NIE.',
        'Entro 3 mesi, ottieni il certificato di registrazione UE (CUE) presso la polizia (modulo EX-18, 12 €), con documento d’identità, certificato anagrafico e iscrizione alla Previdenza fatta dal datore; riporta il tuo NIE definitivo.', 'ES-SRC-04 ES-SRC-11'],
      ['It is a green paper card with no photo: always show it with your passport or ID, and never laminate it, which voids it.',
        'È un cartoncino verde senza foto: mostralo sempre con passaporto o carta d’identità, e non plastificarlo mai, perché lo annulla.', 'ES-SRC-04']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Within 30 days of your Social Security enrolment, book a fingerprint appointment for the foreigner’s identity card (TIE): form EX-17 and fee 790-012, €16.08.',
        'Entro 30 giorni dall’iscrizione alla Previdenza, prenota l’appuntamento per le impronte della carta d’identità per stranieri (TIE): modulo EX-17 e tassa 790-012, 16,08 €.', 'ES-SRC-11']
    ] },
    { k: 'number', p: 'eu uk us other', t: [
      ['Ask for your Social Security number (NUSS) online at Import@ss with your passport, before the job starts. A white NIE certificate (€9.84) is only a tax number, not a residence right.',
        'Chiedi il numero di Previdenza sociale (NUSS) online su Import@ss con il passaporto, prima dell’inizio del lavoro. Il certificato bianco NIE (9,84 €) è solo un codice fiscale, non un diritto di soggiorno.', 'ES-SRC-26 ES-SRC-11']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Employees, researchers and interns are enrolled free in the national health service and get the individual health card (TSI).',
        'Dipendenti, ricercatori e tirocinanti sono iscritti gratuitamente al servizio sanitario nazionale e ricevono la tessera sanitaria individuale (TSI).', 'ES-SRC-16'],
      ['Legal residents not working and without private cover can join the public scheme (convenio especial) after 12 months on the population register: €60 a month under 65.',
        'I residenti legali che non lavorano e non hanno una copertura privata possono aderire al regime pubblico (convenio especial) dopo 12 mesi di iscrizione anagrafica: 60 € al mese sotto i 65 anni.', 'ES-SRC-22']
    ] },
    { k: 'bank', p: 'eu uk us other', none: true },
    { k: 'keep', p: 'eu', t: [
      ['Keep your population-register entry current: registering at an address where you do not live leads to removal from the register and criminal charges for false documents.',
        'Mantieni aggiornata l’iscrizione anagrafica: registrarti a un indirizzo dove non vivi comporta la cancellazione e accuse penali per falso documentale.', 'ES-SRC-29']
    ] },
    { k: 'keep', p: 'uk us other', t: [
      ['Renew your population-register entry every 2 years, or it is cancelled and breaks the continuity you need for renewals and citizenship.',
        'Rinnova l’iscrizione anagrafica ogni 2 anni, o viene cancellata e interrompe la continuità che serve per rinnovi e cittadinanza.', 'ES-SRC-20'],
      ['The renewal receipt keeps your stay and right to work, but is not valid for travel in Schengen: for a trip, ask the police for a return authorisation (about €10.72), and fly direct to and from a non-Schengen country.',
        'La ricevuta del rinnovo mantiene il soggiorno e il diritto al lavoro, ma non vale per viaggiare in Schengen: per un viaggio, chiedi alla polizia l’autorizzazione al rientro (circa 10,72 €), e vola diretto da e verso un paese extra-Schengen.', 'ES-SRC-01']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['With an expired card and only the renewal receipt you may not travel in the Schengen area. A return authorisation lets you fly only directly between Spain and your home country, with no Schengen stopover.',
      'Con la carta scaduta e la sola ricevuta di rinnovo non si può viaggiare nell’area Schengen. L’autorizzazione al rientro consente solo voli diretti tra la Spagna e il proprio paese, senza scali Schengen.', 'ES-SRC-01'] },
    { p: 'eu uk us other', t: ['Police appointments sold online by bots or middlemen (€50 to €250) can be refused at the door when the names do not match, and buying them can be a crime.',
      'Gli appuntamenti con la polizia venduti online da bot o intermediari (da 50 a 250 €) possono essere rifiutati all’ingresso se i nomi non corrispondono, e comprarli può essere reato.', 'ES-SRC-28 ES-SRC-29'] },
    { p: 'uk us other', t: ['Non-EU residents without long-term residence must renew their town-hall registration every two years, or it is cancelled and the years stop counting.',
      'I residenti extra-UE senza residenza di lungo periodo devono rinnovare l’iscrizione al comune ogni due anni, altrimenti viene cancellata e gli anni smettono di contare.', 'ES-SRC-20'] },
    { p: 'eu uk us other', t: ['A town-hall registration at an address where you do not live, or a fake job contract, is a crime that can cost the permit and lead to removal.',
      'Un’iscrizione al comune a un indirizzo dove non si vive, o un contratto di lavoro fittizio, è reato e può costare il permesso e portare all’espulsione.', 'ES-SRC-29'] },
    { p: 'eu', t: ['Never laminate the green EU certificate: it becomes void. Always carry it with your passport or identity card.',
      'Non plastificare mai il certificato UE verde: diventa nullo. Portalo sempre insieme al passaporto o alla carta d’identità.', 'ES-SRC-04'] }
  ],

  open: [
    { st: 'watch', t: ['Some universities mention 24 months for the job-search permit; the law says 12, not extendable.',
      'Alcune università indicano 24 mesi per il permesso di ricerca lavoro; la legge dice 12, non prorogabili.'] },
    { st: 'open', t: ['PhD students funded entirely by a foreign government are handled differently depending on whether the university signs a hosting agreement.',
      'I dottorandi finanziati interamente da un governo estero vengono trattati diversamente a seconda che l’università firmi o no la convenzione di accoglienza.'] },
    { st: 'open', t: ['Approval by silence is the law, but banks and payroll often wait for the formal certificate, which takes another 30 to 60 days.',
      'L’assenso per silenzio è legge, ma banche e uffici del personale aspettano spesso il certificato formale, che richiede altri 30-60 giorni.'] },
    { st: 'watch', t: ['Middlemen still capture police appointment slots despite one-time SMS codes and bot filters.',
      'Gli intermediari continuano a catturare gli appuntamenti con la polizia nonostante i codici SMS monouso e i filtri anti-bot.'] },
    { st: 'open', t: ['Whether the Beckham regime applies after an online Spanish master taken from abroad is not settled by the tax authority.',
      'Se il regime Beckham si applichi dopo un master spagnolo seguito online dall’estero non è stato chiarito dall’amministrazione fiscale.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/spain/spain_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('ES', {
  "ES-SRC-04": ["Boletín Oficial del Estado (BOE): Real Decreto 240/2007, de 16 de febrero (cittadini UE/SEE e familiari)","https://www.boe.es/buscar/act.php?id=BOE-A-2007-4184","2026-10-05"],
  "ES-SRC-20": ["Boletín Oficial del Estado (BOE): Resolución conjunta INE y DGP de 29 de abril de 2020","https://www.boe.es/buscar/act.php?id=BOE-A-2020-4784","2026-10-05"],
  "ES-SRC-26": ["Tesorería General de la Seguridad Social: Portale Import@ss: Asignación de NUSS","https://importass.seg-social.gob.es","2026-10-05"],
  "ES-SRC-14": ["Ministerio de Asuntos Exteriores (MAEC): Portal de Visados Nacionales / Tasas Consulares MAEC","https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Visados-Nacionales.aspx","2026-10-05"],
  "ES-SRC-01": ["Boletín Oficial del Estado (BOE): Real Decreto 1155/2024, de 19 de noviembre (mod. RD 316/2026)","https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099","2026-10-05"],
  "ES-SRC-02": ["Boletín Oficial del Estado (BOE): Ley Orgánica 4/2000, de 11 de enero (LOEX consolidata)","https://www.boe.es/buscar/act.php?id=BOE-A-2000-544","2026-10-05"],
  "ES-SRC-05": ["Boletín Oficial del Estado (BOE): Orden PRE/1490/2012, de 9 de julio","https://www.boe.es/buscar/act.php?id=BOE-A-2012-9216","2026-10-05"],
  "ES-SRC-12": ["Ministerio de Política Territorial: Sede Electrónica: Tasa Modelo 790 Código 052","https://sede.administracionespublicas.gob.es/pagina/index/directorio/tasa052","2026-10-05"],
  "ES-SRC-19": ["EUR-Lex: Direttiva (UE) 2016/801 del Parlamento Europeo e del Consiglio","https://eur-lex.europa.eu/eli/dir/2016/801/oj","2026-10-05"],
  "ES-SRC-07": ["Boletín Oficial del Estado (BOE): Ley 31/2022 (LPGE prorogata 2024-2026 ex art. 134.4 CE)","https://www.boe.es/buscar/act.php?id=BOE-A-2022-21913","2026-10-05"],
  "ES-SRC-11": ["Dirección General de la Policía: Sede Electrónica: Tasa Modelo 790 Código 012","https://sede.policia.gob.es/portalCiudadano/_es/tramites_extranjeria_tramite_certificadoregistro_ciudadanoue.php","2026-10-05"],
  "ES-SRC-15": ["Boletín Oficial del Estado (BOE): Real Decreto 592/2014, de 11 de julio","https://www.boe.es/buscar/act.php?id=BOE-A-2014-7064","2026-10-05"],
  "ES-SRC-16": ["Boletín Oficial del Estado (BOE): Real Decreto-ley 2/2023, de 16 de marzo (DA 52ª LGSS)","https://www.boe.es/buscar/act.php?id=BOE-A-2023-6967","2026-10-05"],
  "ES-SRC-03": ["Boletín Oficial del Estado (BOE): Ley 14/2013, de 27 de septiembre (mod. Ley 28/2022 de Startups e Ley 11/2023)","https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074","2026-10-05"],
  "ES-SRC-06": ["Boletín Oficial del Estado (BOE): Real Decreto 126/2026, de 18 de febrero (SMI 2026)","https://www.boe.es/buscar/act.php?id=BOE-A-2026-3814","2026-10-05"],
  "ES-SRC-30": ["Boletín Oficial del Estado (BOE): Real Decreto 316/2026, de 14 de abril","https://www.boe.es/buscar/act.php?id=BOE-A-2026-7890","2026-10-05"],
  "ES-SRC-09": ["Boletín Oficial del Estado (BOE): Ley 11/2023, de 8 de mayo (recepimento Direttiva UE 2021/1883)","https://www.boe.es/buscar/act.php?id=BOE-A-2023-11022","2026-10-05"],
  "ES-SRC-10": ["Ministerio de Inclusión / INE: Orden PJC/44/2026 e Criterios DGM / INE Encuesta Salarial","https://inclusion.gob.es/web/unidad-de-grandes-empresas-y-colectivos-estrategicos","2026-10-05"],
  "ES-SRC-13": ["Ministerio de Inclusión, Seguridad Social: Sede Electrónica: Tasa Modelo 790 Código 062","https://sede.administracionespublicas.gob.es/pagina/index/directorio/tasa062","2026-10-05"],
  "ES-SRC-18": ["Dirección General de Gestión Migratoria: Criterio de Gestión 2/2026, de 4 de agosto de 2026","https://inclusion.gob.es/web/migraciones/criterios-de-gestion","2026-10-05"],
  "ES-SRC-17": ["Boletín Oficial del Estado (BOE): Ley 14/2011 (mod. Ley 17/2022) e RD 103/2019 (Estatuto EPI)","https://www.boe.es/buscar/act.php?id=BOE-A-2011-9617","2026-10-05"],
  "ES-SRC-24": ["Boletín Oficial del Estado (BOE): Accordi bilaterali Movilidad Jóvenes (Australia, Canada, NZ, JP, KR)","https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Visados-Nacionales.aspx","2026-10-05"],
  "ES-SRC-23": ["Boletín Oficial del Estado (BOE): Orden PRE/1282/2007 (aggiornata ai valori SMI 2026)","https://www.boe.es/buscar/act.php?id=BOE-A-2007-9545","2026-10-05"],
  "ES-SRC-08": ["Boletín Oficial del Estado (BOE): Ley 35/2006 (LIRPF), art. 93 (mod. Ley 28/2022 cd. Ley de Startups)","https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764","2026-10-05"],
  "ES-SRC-27": ["Ministerio de Política Territorial: Piattaforma MERCURIO / Red SARA","https://sede.administracionespublicas.gob.es/mercurio/inicio.html","2026-10-05"],
  "ES-SRC-28": ["Defensor del Pueblo de España: Informes Anuales y Recomendaciones sobre Extranjería (2024–2026)","https://www.defensordelpueblo.es","2026-10-05"],
  "ES-SRC-29": ["Boletín Oficial del Estado (BOE): Ley Orgánica 10/1995 (Código Penal consolidato)","https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444","2026-10-05"],
  "ES-SRC-22": ["Boletín Oficial del Estado (BOE): Real Decreto 576/2013, de 26 de julio","https://www.boe.es/buscar/act.php?id=BOE-A-2013-8188","2026-10-05"]
});

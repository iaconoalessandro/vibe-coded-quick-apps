/* Visas and permits: Italy. From research/visas_immigration/italy/
 * (guide, source register, open questions), council check of 5 Oct 2026. */
ATLAS.addVisas({
  id: 'IT',
  folder: 'italy',
  checked: '2026-10-05',
  review: '2027-03-31',

  free: {
    p: 'eu',
    t: [
      ['EU, EEA and Swiss citizens need no visa or residence permit and are hired on the same terms as Italians.',
        'I cittadini UE, SEE e svizzeri non hanno bisogno di visto né di permesso di soggiorno e vengono assunti alle stesse condizioni degli italiani.', 'IT-SRC-01'],
      ['Staying more than three months, you register as a resident with the town hall (anagrafe), showing a work contract, or for students a university enrolment, enough money and health cover.',
        'Per un soggiorno oltre i tre mesi ci si iscrive all’anagrafe del comune, mostrando un contratto di lavoro oppure, per gli studenti, l’iscrizione all’università, risorse sufficienti e una copertura sanitaria.', 'IT-SRC-02 IT-SRC-17'],
      ['Workers join the national health service free of charge and choose a family doctor.',
        'Chi lavora si iscrive gratuitamente al Servizio sanitario nazionale e sceglie il medico di base.', 'IT-SRC-10']
    ]
  },

  routes: [
    { k: 'study', p: 'uk us other', v: 'open',
      name: ['Student visa and residence permit', 'Visto e permesso di soggiorno per studio'], law: 'TUI art. 39; DPR 394/1999',
      t: [
        ['Pre-enrol on Universitaly; the university validates your file and sends it to the consulate. Have your degree assessed by CIMEA or get a declaration of value from the consulate.',
          'Ci si preiscrive su Universitaly; l’ateneo convalida la pratica e la trasmette al consolato. Il titolo va valutato dal CIMEA, oppure serve la dichiarazione di valore del consolato.', 'IT-SRC-09 IT-SRC-36'],
        ['Within eight working days of arriving, send the residence-permit application from a post office (the yellow kit). You may work 20 hours a week, 1,040 a year; self-employment is not allowed.',
          'Entro otto giorni lavorativi dall’arrivo si spedisce la domanda di permesso da un ufficio postale (kit giallo). Si può lavorare 20 ore a settimana, 1.040 all’anno; il lavoro autonomo non è consentito.', 'IT-SRC-06 IT-SRC-13'],
        ['To renew, pass at least one exam in the first year and two in each later year. A non-EU student with a student permit from another EU country can study here up to 360 days without an Italian visa.',
          'Per rinnovare serve almeno un esame nel primo anno e due in ciascuno dei successivi. Uno studente extra-UE con permesso per studio di un altro paese UE può studiare qui fino a 360 giorni senza visto italiano.', 'IT-SRC-13 IT-SRC-22']
      ],
      f: [
        [['Proof of funds, 2026/27', 'Mezzi di sussistenza, 2026/27'], ['€848.32 a month, €10,179.85 a year', '848,32 € al mese, 10.179,85 € l’anno'], 'IT-SRC-09'],
        [['Visa', 'Visto'], ['€50', '50 €'], 'IT-SRC-07'],
        [['Post-office kit for the permit', 'Kit postale per il permesso'], ['€116.46', '116,46 €'], 'IT-SRC-05 IT-SRC-06'],
        [['National health service, voluntary', 'Servizio sanitario, iscrizione volontaria'], ['€700 a calendar year', '700 € per anno solare'], 'IT-SRC-10']
      ],
      w: ['Health-service enrolment ends on 31 December whatever the date you pay: arriving in autumn, use private insurance for the first months and pay the €700 from 1 January.',
        'L’iscrizione al Servizio sanitario scade il 31 dicembre qualunque sia la data del pagamento: arrivando in autunno, usa una polizza privata per i primi mesi e paga i 700 € dal 1° gennaio.', 'IT-SRC-10'] },

    { k: 'intern', p: 'uk us other', v: 'open',
      name: ['Internship during studies', 'Tirocinio curriculare'], law: 'DPR 394/1999 art. 14',
      t: [['An internship for university credits is not employment: on your student permit you may do it full time, and it does not count against the 20 hours a week.',
        'Un tirocinio per crediti universitari non è lavoro: con il permesso per studio si può svolgere a tempo pieno e non rientra nelle 20 ore settimanali.', 'IT-SRC-13 IT-SRC-14']] },

    { k: 'intern', p: 'uk us other', v: 'sponsor',
      name: ['Internship from abroad or after graduating', 'Tirocinio extracurriculare dall’estero'], law: 'TUI art. 27-bis',
      t: [['A training agreement between the host company and an accredited promoter (university, job centre or agency) must first be approved by the region; then the internship visa, and the post-office kit within eight working days of arriving.',
        'Una convenzione tra azienda ospitante ed ente promotore accreditato (università, centro per l’impiego o agenzia) va prima approvata dalla Regione; poi il visto per tirocinio, e il kit postale entro otto giorni lavorativi dall’arrivo.', 'IT-SRC-14 IT-SRC-15 IT-SRC-03']],
      f: [
        [['Minimum monthly allowance', 'Indennità mensile minima'], ['set by each region, e.g. €500 in Lombardy, €800 in Lazio', 'fissata da ogni Regione, es. 500 € in Lombardia, 800 € nel Lazio'], 'IT-SRC-15'],
        [['Visa and kit', 'Visto e kit'], ['€116 + €116.46', '116 € + 116,46 €'], 'IT-SRC-07 IT-SRC-06']
      ] },

    { k: 'intern', p: 'eu', v: 'free',
      name: ['Internships', 'Tirocini'], law: 'regional rules',
      t: [['Internships outside a degree follow regional rules, which set a minimum monthly allowance, for example €500 in Lombardy and €800 in Lazio.',
        'I tirocini extracurriculari seguono le regole regionali, che fissano un’indennità mensile minima, per esempio 500 € in Lombardia e 800 € nel Lazio.', 'IT-SRC-15']] },

    { k: 'search', p: 'uk us other', v: 'open',
      name: ['Job-search permit for graduates in Italy', 'Permesso per ricerca lavoro dei laureati in Italia'], law: 'TUI art. 39-bis.1',
      t: [
        ['After an Italian bachelor’s, master’s, university master, doctorate or AFAM diploma, apply before your student permit expires: 9 to 12 months to look for work, registered as available for work at the job centre.',
          'Dopo una laurea triennale o magistrale, un master universitario, un dottorato o un diploma AFAM in Italia, si fa domanda prima che scada il permesso per studio: da 9 a 12 mesi per cercare lavoro, con la dichiarazione di disponibilità al centro per l’impiego.', 'IT-SRC-16'],
        ['A job offer or a VAT number turns it into a work permit straight away, at any time of the year and outside the annual quotas.',
          'Un’offerta di lavoro o l’apertura di partita IVA lo convertono subito in permesso di lavoro, in qualsiasi momento dell’anno e fuori dalle quote annuali.', 'IT-SRC-18']
      ],
      f: [
        [['Funds', 'Mezzi'], ['about €7,100 a year (the INPS social allowance)', 'circa 7.100 € l’anno (l’assegno sociale INPS)'], 'IT-SRC-16 IT-SRC-17'],
        [['Post-office kit', 'Kit postale'], ['€116.46', '116,46 €'], 'IT-SRC-06']
      ] },

    { k: 'work', p: 'uk us other', v: 'sponsor',
      name: ['EU Blue Card', 'Carta Blu UE'], law: 'TUI art. 27-quater',
      t: [
        ['Any time of the year, outside the quotas: a contract of at least six months in a skilled job, and a three-year degree assessed by CIMEA, or five years of comparable experience, or for IT three years in the last seven.',
          'In qualsiasi momento dell’anno, fuori quota: un contratto di almeno sei mesi in un lavoro qualificato, e una laurea triennale valutata dal CIMEA, oppure cinque anni di esperienza comparabile, o per l’informatica tre anni negli ultimi sette.', 'IT-SRC-19 IT-SRC-36'],
        ['The employer applies online to the immigration desk (SUI); your family can join you straight away.',
          'Il datore fa domanda online allo Sportello unico per l’immigrazione (SUI); la famiglia può raggiungerti subito.', 'IT-SRC-19 IT-SRC-27']
      ],
      f: [
        [['Salary', 'Stipendio'], ['at least €36,278.51 gross a year', 'almeno 36.278,51 € lordi l’anno'], 'IT-SRC-19 IT-SRC-20'],
        [['Visa and kit', 'Visto e kit'], ['€116 + €176.46', '116 € + 176,46 €'], 'IT-SRC-07 IT-SRC-05']
      ] },

    { k: 'work', p: 'uk us other', v: 'limited',
      name: ['Ordinary employment through the quota decree', 'Lavoro subordinato con il Decreto flussi'], law: 'TUI art. 22; DL 145/2024',
      t: [
        ['Hiring someone who did not study in Italy for an ordinary job goes through the annual quotas: the job centre is checked for local candidates, then the employer files on the set click day, and only after the clearance do you apply for the visa.',
          'Assumere per un lavoro ordinario chi non ha studiato in Italia passa dalle quote annuali: si verifica al centro per l’impiego la disponibilità di lavoratori locali, poi il datore invia la domanda nel click day stabilito, e solo dopo il nulla osta si chiede il visto.', 'IT-SRC-33'],
        ['Graduates of Italian universities convert their student permit to work at any time, outside the quotas.',
          'Chi si è laureato in Italia converte il permesso per studio in lavoro in qualsiasi momento, fuori quota.', 'IT-SRC-18']
      ],
      f: [[['Visa and kit', 'Visto e kit'], ['€116 + €116.46 (one-year contract)', '116 € + 116,46 € (contratto di un anno)'], 'IT-SRC-07 IT-SRC-06']],
      w: ['Have the housing suitability certificate ready before you sign the residence contract at the immigration desk.',
        'Prepara il certificato di idoneità alloggiativa prima di firmare il contratto di soggiorno allo Sportello unico.', 'IT-SRC-27'] },

    { k: 'research', p: 'uk us other', v: 'sponsor',
      name: ['Researcher permit and PhD', 'Permesso per ricerca e dottorato'], law: 'TUI art. 27-ter',
      t: [
        ['A university or research body accredited by the ministry signs a hosting agreement, pays at least twice the social allowance and applies for the clearance; the permit is outside the quotas, and the family can join at once.',
          'Un ateneo o ente di ricerca accreditato dal ministero firma una convenzione di accoglienza, paga almeno il doppio dell’assegno sociale e chiede il nulla osta; il permesso è fuori quota e la famiglia può arrivare subito.', 'IT-SRC-21 IT-SRC-27'],
        ['A doctoral scholarship is free of income tax but pays pension contributions to the INPS separate scheme, one third from you; you need your tax code on day one to be paid.',
          'Una borsa di dottorato è esente da IRPEF ma versa contributi alla Gestione separata INPS, un terzo a tuo carico; serve il codice fiscale dal primo giorno per riceverla.', 'IT-SRC-23 IT-SRC-24 IT-SRC-12']
      ] },

    { k: 'whv', p: 'uk us', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Italy has working-holiday agreements only with Australia, New Zealand, Canada, Japan and South Korea.',
        'L’Italia ha accordi di vacanza-lavoro solo con Australia, Nuova Zelanda, Canada, Giappone e Corea del Sud.', 'IT-SRC-25']] },

    { k: 'whv', p: 'other', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Only for citizens of Australia, New Zealand, Canada, Japan and South Korea aged 18 to 30 (35 for Canadians and Australians): up to 12 months, work for at most six of them, and no conversion to another permit in Italy.',
        'Solo per cittadini di Australia, Nuova Zelanda, Canada, Giappone e Corea del Sud dai 18 ai 30 anni (35 per canadesi e australiani): fino a 12 mesi, lavoro al massimo per sei, e nessuna conversione in altro permesso in Italia.', 'IT-SRC-25']],
      f: [[['Visa and kit', 'Visto e kit'], ['€116 + €116.46', '116 € + 116,46 €'], 'IT-SRC-07 IT-SRC-06']] },

    { k: 'short', p: 'uk us other', v: 'open',
      name: ['Short stay', 'Soggiorno breve'], law: 'Schengen; Law 68/2007',
      t: [
        ['UK and US citizens visit without a visa for up to 90 days in any 180, recorded by the EES border system; ETIAS is not yet in operation. Other nationalities may need a Schengen visa. No paid work is allowed.',
          'I cittadini britannici e statunitensi entrano senza visto fino a 90 giorni ogni 180, registrati dal sistema di frontiera EES; ETIAS non è ancora in funzione. Altre nazionalità possono aver bisogno di un visto Schengen. Nessun lavoro retribuito è consentito.', 'IT-SRC-26 IT-SRC-37 IT-SRC-08'],
        ['Arriving through another Schengen country, declare your presence at the police headquarters (questura) within eight working days unless you stay in a hotel. A visa-free entry cannot normally be turned into a study or work permit from inside Italy.',
          'Arrivando da un altro paese Schengen, si presenta la dichiarazione di presenza in questura entro otto giorni lavorativi, salvo alloggio in albergo. Un ingresso senza visto non si può di norma trasformare in permesso per studio o lavoro dall’Italia.', 'IT-SRC-26']
      ],
      f: [[['Schengen visa', 'Visto Schengen'], ['€90', '90 €'], 'IT-SRC-08']] },

    { k: 'tax', p: 'eu uk us other', v: 'open',
      name: ['Tax relief for people moving to Italy', 'Regime fiscale per gli impatriati'], law: 'D.Lgs. 209/2023 art. 5',
      t: [['Highly qualified workers who were tax-resident abroad for the previous three years and stay in Italy at least four pay tax on half their work income for five years, up to €600,000; 40% with a child, so 60% is exempt.',
        'I lavoratori altamente qualificati residenti fiscalmente all’estero nei tre anni precedenti che restano in Italia almeno quattro anni pagano le imposte sulla metà del reddito da lavoro per cinque anni, fino a 600.000 €; sul 40% con un figlio, quindi con il 60% esente.', 'IT-SRC-34']] }
  ],

  arrival: [
    { k: 'before', p: 'eu', t: [
      ['Nothing to arrange in advance: EU, EEA and Swiss citizens need no visa or permit and are hired on the same terms as Italians.',
        'Niente da preparare in anticipo: i cittadini UE, SEE e svizzeri non hanno bisogno di visto né permesso e sono assunti alle stesse condizioni degli italiani.', 'IT-SRC-01']
    ] },
    { k: 'before', p: 'uk us other', t: [
      ['Students pre-enrol on Universitaly, get foreign qualifications compared (a CIMEA statement or a declaration of value from the consulate), then apply for the study D visa (€50) with funds of €848.32 a month and private health insurance of at least €30,000.',
        'Gli studenti fanno la pre-iscrizione su Universitaly, fanno valutare i titoli esteri (attestato CIMEA o dichiarazione di valore del consolato), poi chiedono il visto D per studio (50 €) con mezzi di 848,32 € al mese e un’assicurazione sanitaria privata di almeno 30.000 €.', 'IT-SRC-09 IT-SRC-36 IT-SRC-07'],
      ['Workers need the employer’s clearance (nulla osta) first, then the work D visa from the Italian consulate (€116); have the housing suitability certificate ready for signing the residence contract.',
        'I lavoratori hanno bisogno prima del nulla osta del datore, poi del visto D per lavoro dal consolato italiano (116 €); prepara il certificato di idoneità alloggiativa per la firma del contratto di soggiorno.', 'IT-SRC-33 IT-SRC-07 IT-SRC-27']
    ] },
    { k: 'address', p: 'eu', t: [
      ['Staying over 3 months, register as a resident (iscrizione anagrafica) at the town hall where you live, with a registered work contract and your tax code; students bring enrolment, a statement of resources of at least the social allowance (about €7,100 a year) and the European Health Insurance Card or private cover.',
        'Se resti oltre 3 mesi, iscriviti all’anagrafe del comune in cui vivi, con un contratto di lavoro registrato e il codice fiscale; gli studenti portano iscrizione, dichiarazione di risorse almeno pari all’assegno sociale (circa 7.100 € l’anno) e Tessera europea di assicurazione malattia o polizza privata.', 'IT-SRC-02 IT-SRC-17']
    ] },
    { k: 'address', p: 'uk us other', t: [
      ['You may register as a resident at the town hall with your visa and residence contract, without waiting for the permit card.',
        'Puoi iscriverti all’anagrafe del comune con il visto e il contratto di soggiorno, senza aspettare la tessera del permesso.', 'IT-SRC-30']
    ] },
    { k: 'card', p: 'eu', t: [
      ['None: EU citizens get no residence permit; the town-hall registration is the formality.',
        'Nessuno: i cittadini UE non ricevono un permesso di soggiorno; l’iscrizione anagrafica è l’adempimento.', 'IT-SRC-01 IT-SRC-02']
    ] },
    { k: 'card', p: 'uk us other', t: [
      ['Within 8 working days of arriving, send the permit application in the postal kit from a “Sportello Amico” post office: €116.46 for up to a year (€126.46 for a two-year permit). Workers first sign the residence contract with their employer at the immigration desk (SUI).',
        'Entro 8 giorni lavorativi dall’arrivo, spedisci la domanda di permesso con il kit postale da un ufficio “Sportello Amico”: 116,46 € fino a un anno (126,46 € per un permesso biennale). I lavoratori firmano prima il contratto di soggiorno con il datore allo Sportello unico per l’immigrazione (SUI).', 'IT-SRC-06 IT-SRC-05 IT-SRC-03'],
      ['The police headquarters (Questura) then calls you for fingerprints and to collect the card: the legal limit is 60 days, but in big cities it takes 8 to 14 months.',
        'La Questura ti convoca poi per le impronte e il ritiro della tessera: il termine di legge è 60 giorni, ma nelle grandi città servono da 8 a 14 mesi.', 'IT-SRC-04 IT-SRC-31']
    ] },
    { k: 'number', p: 'eu', t: [
      ['The town hall asks for your tax code (codice fiscale) when you register.',
        'Il comune chiede il codice fiscale al momento dell’iscrizione anagrafica.', 'IT-SRC-02']
    ] },
    { k: 'number', p: 'uk us other', t: [
      ['Workers are given their tax code at the immigration desk when they sign the residence contract.',
        'I lavoratori ricevono il codice fiscale allo Sportello unico quando firmano il contratto di soggiorno.', 'IT-SRC-03']
    ] },
    { k: 'health', p: 'eu uk us other', t: [
      ['Workers must enrol in the national health service (SSN), free, and choose a family doctor.',
        'I lavoratori devono iscriversi al servizio sanitario nazionale (SSN), gratuitamente, e scegliere il medico di base.', 'IT-SRC-10']
    ] },
    { k: 'health', p: 'uk us other', t: [
      ['Students may join the SSN for €700 a calendar year, paid with form F24; cover ends on 31 December, so if you arrive in autumn use your private policy first and pay from 1 January.',
        'Gli studenti possono iscriversi al SSN con 700 € per anno solare, pagati con il modello F24; la copertura scade il 31 dicembre, quindi se arrivi in autunno usa prima la polizza privata e paga dal 1° gennaio.', 'IT-SRC-10 IT-SRC-11']
    ] },
    { k: 'bank', p: 'eu', none: true },
    { k: 'bank', p: 'uk us other', t: [
      ['The postal receipt is enough to register a lease and open a basic account; some banks limit accounts once it reaches its expiry date, at most 9 months after filing.',
        'La ricevuta postale basta per registrare un contratto d’affitto e aprire un conto di base; alcune banche limitano i conti quando raggiunge la scadenza, al massimo 9 mesi dopo la domanda.', 'IT-SRC-04 IT-SRC-38']
    ] },
    { k: 'keep', p: 'eu', none: true },
    { k: 'keep', p: 'uk us other', t: [
      ['The postal receipt lets you work, sign contracts and use the health service while you wait. Students renew by post at least 60 days before expiry, with at least 1 exam passed for the first renewal and 2 for later ones.',
        'La ricevuta postale ti consente di lavorare, firmare contratti e usare il servizio sanitario durante l’attesa. Gli studenti rinnovano per posta almeno 60 giorni prima della scadenza, con almeno 1 esame superato per il primo rinnovo e 2 per i successivi.', 'IT-SRC-04 IT-SRC-10 IT-SRC-13'],
      ['With only the receipt, fly only non-stop between Italy and your home country outside Schengen; on a first permit you can come back only while your D visa is still valid for multiple entries.',
        'Con la sola ricevuta, vola solo senza scali tra l’Italia e il tuo paese fuori da Schengen; con un primo permesso puoi rientrare solo finché il visto D è valido e a ingressi multipli.', 'IT-SRC-28']
    ] }
  ],

  traps: [
    { p: 'uk us other', t: ['With only the post-office receipt you may fly in and out of Italy only on direct flights to your home country: a stopover in another Schengen country can end in refusal at the border. On a first permit you can come back only while your D visa is still valid.',
      'Con la sola ricevuta postale si può uscire e rientrare in Italia solo con voli diretti verso il proprio paese: uno scalo in un altro paese Schengen può finire con il respingimento. Per un primo permesso si rientra solo finché il visto D è valido.', 'IT-SRC-28'] },
    { p: 'uk us other', t: ['The post-office receipt now shows an expiry of at most nine months, while big police headquarters can take longer to call you; some banks limit accounts once it passes.',
      'La ricevuta postale riporta ora una scadenza di massimo nove mesi, mentre le grandi questure possono convocare più tardi; alcune banche limitano i conti dopo quella data.', 'IT-SRC-38'] },
    { p: 'uk us other', t: ['Entering as a tourist to sort out a study or work permit later usually fails: the 90 days run out and you become irregular.',
      'Entrare da turista per sistemare dopo il permesso per studio o lavoro di solito non funziona: i 90 giorni scadono e si diventa irregolari.', 'IT-SRC-26'] },
    { p: 'uk us other', t: ['Waiting times for the plastic card in the big cities run to 8 to 14 months against a legal 60 days.',
      'I tempi per la tessera plastificata nelle grandi città arrivano a 8-14 mesi contro i 60 giorni di legge.', 'IT-SRC-31 IT-SRC-04'] }
  ],

  open: [
    { st: 'open', t: ['Consulates disagree on whether a researcher’s visa is free or costs €116 when the host funds the post itself.',
      'I consolati non concordano se il visto per ricerca sia gratuito o costi 116 € quando l’ente finanzia il posto con fondi propri.'] },
    { st: 'open', t: ['Some local health authorities, notably in Rome and Campania, refuse a family doctor to students who have only the post-office receipt and the €700 payment.',
      'Alcune aziende sanitarie, specie a Roma e in Campania, rifiutano il medico di base agli studenti con la sola ricevuta postale e il versamento di 700 €.'] },
    { st: 'open', t: ['Whether banks accept the post-office receipt past its nine-month date while you wait for the police appointment.',
      'Se le banche accettino la ricevuta postale oltre i nove mesi mentre si attende l’appuntamento in questura.'] },
    { st: 'pending', t: ['The Blue Card salary threshold will be updated from new ISTAT figures around the start of 2027.',
      'La soglia di stipendio della Carta Blu sarà aggiornata con i nuovi dati ISTAT verso l’inizio del 2027.'] },
    { st: 'pending', t: ['The INPS social allowance, which sets the funds for the job-search permit and family reunion, is revised each January.',
      'L’assegno sociale INPS, che fissa i mezzi per il permesso di ricerca lavoro e il ricongiungimento, viene rivalutato ogni gennaio.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/italy/italy_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('IT', {
  "IT-SRC-01": ["D.Lgs. 6 febbraio 2007, n. 30, art. 6 comma 1","https://www.poliziadistato.it/articolo/17985b2d0db2288ab785808552","2026-10-05"],
  "IT-SRC-02": ["D.Lgs. 6 febbraio 2007, n. 30, art. 7 commi 1-3","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2007-02-06;30","2026-10-05"],
  "IT-SRC-17": ["INPS: Circolare di rivalutazione annuale prestazioni assistenziali","https://www.inps.it","2026-10-05"],
  "IT-SRC-10": ["Legge 30 dicembre 2023, n. 213 (Legge Bilancio 2024), art. 1 c. 240","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-12-30;213","2026-10-05"],
  "IT-SRC-09": ["MUR / MAECI: Linee Guida studenti internazionali A.A. 2026/2027","https://www.universitaly.it","2026-10-05"],
  "IT-SRC-36": ["CIMEA / MUR: Piattaforma Diplome / Guida accreditamento titoli","https://www.cimea.it","2026-10-05"],
  "IT-SRC-06": ["Circolare congiunta MEF/Interno; Tariffa postale","https://www.poliziadistato.it/articolo/225","2026-10-05"],
  "IT-SRC-13": ["D.P.R. 31 agosto 1999, n. 394, art. 14 comma 4","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394","2026-10-05"],
  "IT-SRC-22": ["D.Lgs. 286/1998, art. 39-bis comma 2-bis (Direttiva UE 2016/801)","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286","2026-10-05"],
  "IT-SRC-07": ["MAECI: D.Lgs. 71/2011, art. 67 (Tariffa consolare) / Visto per l'Italia","https://vistoperitalia.esteri.it","2026-10-05"],
  "IT-SRC-05": ["D.M. Economia e Finanze 5 maggio 2017 (G.U. n. 131/2017)","https://www.poliziadistato.it/articolo/view/10617","2026-10-05"],
  "IT-SRC-14": ["Ispettorato Nazionale del Lavoro: Nota INL n. 320 del 14/02/2023 e Nota n. 1074 del 24/05/2022","https://www.ispettorato.gov.it","2026-10-05"],
  "IT-SRC-15": ["Portale Integrazione Migranti, nota operativa tirocini","https://integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3085/","2026-10-05"],
  "IT-SRC-03": ["D.Lgs. 25 luglio 1998, n. 286 (TUI), art. 5 comma 2","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286","2026-10-05"],
  "IT-SRC-16": ["D.Lgs. 286/1998, art. 39-bis.1 (inserito da D.Lgs. 71/2018)","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286","2026-10-05"],
  "IT-SRC-18": ["D.L. 10 marzo 2023, n. 20 (Decreto Cutro conv. in L. 50/2023)","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2023-03-10;20","2026-10-05"],
  "IT-SRC-19": ["D.Lgs. 18 ottobre 2023, n. 152 e Circolare n. 2829 del 28/03/2024","https://www.interno.gov.it","2026-10-05"],
  "IT-SRC-27": ["D.Lgs. 286/1998, artt. 28 e 29 (Ricongiungimento familiare)","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286","2026-10-05"],
  "IT-SRC-20": ["ISTAT: Rilevazione retribuzioni medie lorde per dipendente","https://www.istat.it","2026-10-05"],
  "IT-SRC-33": ["D.L. 11 ottobre 2024, n. 145 conv. in Legge 7 dicembre 2024, n. 187","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-10-11;145","2026-10-05"],
  "IT-SRC-21": ["D.Lgs. 286/1998, art. 27-ter (D.Lgs. 71/2018)","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286","2026-10-05"],
  "IT-SRC-23": ["Legge 30 novembre 1989, n. 398 e Legge 13 agosto 1984, n. 476, art. 4","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1984-08-13;476","2026-10-05"],
  "IT-SRC-24": ["Legge 8 agosto 1995, n. 335, art. 2 comma 26","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1995-08-08;335","2026-10-05"],
  "IT-SRC-12": ["Agenzia delle Entrate: D.P.R. 29 settembre 1973, n. 605, art. 6","https://www.agenziaentrate.gov.it/portale/codice-fiscale-tessera-sanitaria-partita-iva","2026-10-05"],
  "IT-SRC-25": ["MAECI: Accordi bilaterali Vacanza-Lavoro (AU, NZ, CA, JP, KR)","https://vistoperitalia.esteri.it","2026-10-05"],
  "IT-SRC-26": ["Legge 28 maggio 2007, n. 68 e D.M. Interno 26 luglio 2007","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2007-05-28;68","2026-10-05"],
  "IT-SRC-37": ["Commissione Europea – DG Home Affairs: Smart borders: Entry/Exit System (EES) e ETIAS","https://home-affairs.ec.europa.eu/policies/schengen/smart-borders_en","2026-10-06"],
  "IT-SRC-08": ["Commissione Europea: Regolamento Delegato (UE) 2024/1415 (in vigore 11/06/2024)","https://eur-lex.europa.eu/eli/reg_del/2024/1415/oj","2026-10-05"],
  "IT-SRC-34": ["D.Lgs. 27 dicembre 2023, n. 209, art. 5 commi 1-4 (Impatriati)","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-27;209","2026-10-05"],
  "IT-SRC-30": ["Circolari n. 16 del 02/04/2007 e n. 43 del 02/08/2007 (Anagrafe)","https://www.interno.gov.it","2026-10-05"],
  "IT-SRC-04": ["D.Lgs. 25 luglio 1998, n. 286 (TUI), art. 5 comma 9, 9-bis","https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286","2026-10-05"],
  "IT-SRC-31": ["Giustizia Amministrativa: TAR Lazio, Sez. II-Quater, sentenza n. 15448 del 30 luglio 2024","https://www.giustizia-amministrativa.it","2026-10-05"],
  "IT-SRC-11": ["Agenzia delle Entrate: Risoluzione istituzione codici tributo F24 sanità","https://www.agenziaentrate.gov.it/portale/schede/pagamenti/f24","2026-10-05"],
  "IT-SRC-38": ["Circolare 13/11/2024 n. 400/B/2024 – scadenza a 9 mesi della ricevuta kit postale","http://dirittimigranti.ancitoscana.it/viewtopic.php?t=1461","2026-10-06"],
  "IT-SRC-28": ["Direttiva 5 agosto 2006 e Circolare 11 marzo 2009 (Viaggi ricevuta)","https://www.interno.gov.it","2026-10-05"]
});

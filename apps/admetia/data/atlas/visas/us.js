/* Visas and permits: United States. From research/visas_immigration/united_states/
 * (guide, source register, open questions) and the US triage of 7 Oct 2026. Many
 * 2026 rules are in court: the open list says what applies today. EU and UK only. */
ATLAS.addVisas({
  id: 'US',
  folder: 'united_states',
  checked: '2026-10-07',
  review: '2027-01-15',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['F-1 student visa', 'Visto studentesco F-1'], law: '8 CFR 214.2(f)',
      t: [
        ['A SEVP-certified school issues the I-20, which states the money you must show; there is no federal threshold. Pay the SEVIS fee before an in-person interview, with social-media profiles set to public.',
          'Una scuola certificata SEVP rilascia l’I-20, che indica la somma da dimostrare; non esiste una soglia federale. Si paga la tassa SEVIS prima di un colloquio in persona, con i profili social impostati come pubblici.', 'US-SRC-34 US-SRC-39 US-SRC-35 US-SRC-62'],
        ['The visa can be issued up to 365 days before the course and you may arrive up to 30 days before it starts. On campus you may work 20 hours a week in term.',
          'Il visto può essere rilasciato fino a 365 giorni prima del corso e si può arrivare fino a 30 giorni prima dell’inizio. Nel campus si può lavorare 20 ore a settimana durante i corsi.', 'US-SRC-34 US-SRC-38 US-SRC-01'],
        ['An F-1 visa for Italians is valid 16 months, for British citizens 60: your status continues, but re-entering after a trip abroad may need a new visa.',
          'Un visto F-1 per gli italiani vale 16 mesi, per i britannici 60: lo status continua, ma rientrare dopo un viaggio all’estero può richiedere un nuovo visto.', 'US-SRC-49 US-SRC-107']
      ],
      f: [[['Fees', 'Costi'], ['$350 SEVIS + $185 visa = $535', '350 $ SEVIS + 185 $ visto = 535 $'], 'US-SRC-36 US-SRC-48']] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['J-1 Intern and Trainee', 'J-1 Intern e Trainee'], law: '22 CFR 62.22',
      t: [
        ['Through a sponsor designated by the State Department. Intern: enrolled abroad or graduated within 12 months, up to 12 months. Trainee: a degree and a year of experience abroad, or five years of experience, up to 18 months.',
          'Tramite uno sponsor designato dal Dipartimento di Stato. Intern: iscritto all’estero o laureato da non più di 12 mesi, fino a 12 mesi. Trainee: una laurea e un anno di esperienza all’estero, o cinque anni di esperienza, fino a 18 mesi.', 'US-SRC-08 US-SRC-75 US-SRC-76'],
        ['Inside a US degree, curricular practical training has since August 2026 been allowed only where the course requires it of every student.',
          'Dentro un corso negli Stati Uniti, il tirocinio curricolare è ammesso da agosto 2026 solo se il corso lo richiede a tutti gli studenti.', 'US-SRC-24 US-SRC-25']
      ],
      f: [
        [['Fees', 'Costi'], ['$220 SEVIS + $185 visa = $405', '220 $ SEVIS + 185 $ visto = 405 $'], 'US-SRC-36 US-SRC-48'],
        [['Health insurance', 'Assicurazione sanitaria'], ['at least $100,000 per accident or illness', 'almeno 100.000 $ per incidente o malattia'], 'US-SRC-05']
      ] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['OPT and STEM OPT', 'OPT e STEM OPT'], law: '8 CFR 214.2(f)(10)',
      t: [
        ['Only after a US degree: up to 12 months of work in your field, with 90 days of unemployment allowed. A degree on the DHS STEM list adds 24 months with an E-Verify employer.',
          'Solo dopo una laurea negli Stati Uniti: fino a 12 mesi di lavoro nel proprio campo, con 90 giorni di disoccupazione ammessi. Una laurea nell’elenco STEM del DHS aggiunge 24 mesi con un datore iscritto a E-Verify.', 'US-SRC-28 US-SRC-29'],
        ['Apply from 90 days before to 60 days after the programme ends, within 30 days of the school’s recommendation.',
          'Si fa domanda da 90 giorni prima a 60 giorni dopo la fine del programma, entro 30 giorni dalla raccomandazione della scuola.', 'US-SRC-28']
      ],
      f: [[['Fees', 'Costi'], ['$520 on paper, $470 online', '520 $ su carta, 470 $ online'], 'US-SRC-02 US-SRC-03']],
      w: ['STEM status follows the programme’s CIP code, not its name: Finance (52.0801) is not on the list.',
        'Lo status STEM dipende dal codice CIP del programma, non dal nome: Finance (52.0801) non è nell’elenco.', 'US-SRC-30'] },

    { k: 'work', p: 'eu uk', v: 'limited',
      name: ['H-1B', 'H-1B'], law: 'INA 214(g)',
      t: [
        ['65,000 visas a year plus 20,000 for US master’s degrees; a European master’s does not count. Since 2026 the lottery is weighted by wage level, and universities are outside the cap.',
          '65.000 visti l’anno più 20.000 per i master statunitensi; un master europeo non conta. Dal 2026 la lotteria è ponderata per livello salariale, e le università sono fuori quota.', 'US-SRC-17 US-SRC-18'],
        ['A $100,000 payment set by proclamation runs to 21 September 2027, but two courts have struck down its rules and it is not being collected for now.',
          'Un pagamento di 100.000 $ fissato per proclamazione vale fino al 21 settembre 2027, ma due tribunali ne hanno annullato le regole e per ora non viene riscosso.', 'US-SRC-19 US-SRC-21 US-SRC-22']
      ],
      f: [
        [['Projected odds per person, lowest to highest wage level', 'Probabilità stimate per persona, dal livello salariale più basso al più alto'], ['15.29% to 61.16%', 'dal 15,29% al 61,16%'], 'US-SRC-18'],
        [['Fees', 'Costi'], ['$205 visa; Italians also pay $153 reciprocity', '205 $ il visto; gli italiani pagano anche 153 $ di reciprocità'], 'US-SRC-48 US-SRC-49']
      ] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['L-1, E-1/E-2 and O-1', 'L-1, E-1/E-2 e O-1'], law: 'INA 101(a)(15)',
      t: [
        ['L-1 moves you within your company after a year with it abroad in the last three. E-1 and E-2 serve trade and investment for treaty countries, Italy and the UK among them; the employee must share the company’s nationality. O-1 is for extraordinary ability.',
          'L-1 ti trasferisce nella tua azienda dopo un anno con essa all’estero negli ultimi tre. E-1 ed E-2 servono a commercio e investimento per i paesi con trattato, tra cui Italia e Regno Unito; il dipendente deve avere la nazionalità dell’azienda. O-1 è per abilità straordinarie.', 'US-SRC-68 US-SRC-69 US-SRC-49 US-SRC-107 US-SRC-70']
      ],
      f: [[['Visa fees', 'Costi del visto'], ['$205 for L and O, $315 for E', '205 $ per L e O, 315 $ per E'], 'US-SRC-48']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['J-1 scholar, and PhDs', 'J-1 scholar e dottorati'], law: '22 CFR 62.20',
      t: [
        ['A J-1 Research Scholar stays up to five years, a Short-term Scholar six months; a PhD is usually an F-1 with assistantships counted as campus work.',
          'Un J-1 Research Scholar resta fino a cinque anni, uno Short-term Scholar sei mesi; un dottorato è di solito un F-1 con assistentati considerati lavoro nel campus.', 'US-SRC-06 US-SRC-07 US-SRC-38'],
        ['Students and scholars on F or J are exempt from Social Security and Medicare for their first five calendar years.',
          'Studenti e ricercatori con F o J sono esenti da Social Security e Medicare per i primi cinque anni solari.', 'US-SRC-78']
      ],
      f: [[['Fees, J-1', 'Costi, J-1'], ['$220 SEVIS + $185 visa = $405', '220 $ SEVIS + 185 $ visto = 405 $'], 'US-SRC-36 US-SRC-48']],
      w: ['Some J-1 holders must live two years at home before an H or L visa or a green card.',
        'Alcuni titolari J-1 devono vivere due anni nel proprio paese prima di un visto H o L o della green card.', 'US-SRC-131'] },

    { k: 'whv', p: 'eu uk', v: 'limited',
      name: ['J-1 Summer Work Travel', 'J-1 Summer Work Travel'], law: '22 CFR 62.32',
      t: [['There is no working-holiday visa. The nearest is Summer Work Travel: full-time students enrolled abroad, up to four months in the break between academic years, with seasonal work arranged by a sponsor.',
        'Non esiste un visto vacanza-lavoro. Il più vicino è Summer Work Travel: studenti a tempo pieno iscritti all’estero, fino a quattro mesi nella pausa tra un anno accademico e l’altro, con lavoro stagionale organizzato da uno sponsor.', 'US-SRC-10 US-SRC-77']],
      f: [[['Fees', 'Costi'], ['$35 SEVIS + $185 visa = $220', '35 $ SEVIS + 185 $ visto = 220 $'], 'US-SRC-36 US-SRC-48']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['ESTA or B visa', 'ESTA o visto B'], law: 'Visa Waiver Program',
      t: [
        ['Citizens of 24 EU countries, and British citizens with the right of abode, visit up to 90 days with an ESTA: no work and no study for credit. Bulgaria, Cyprus and Romania are outside the programme and need a B visa.',
          'I cittadini di 24 paesi UE, e i britannici con right of abode, visitano fino a 90 giorni con l’ESTA: niente lavoro e niente studio con crediti. Bulgaria, Cipro e Romania sono fuori dal programma e hanno bisogno del visto B.', 'US-SRC-52 US-SRC-53'],
        ['An ESTA entry cannot be changed into another status inside the US.',
          'Un ingresso con ESTA non si può trasformare in un altro status negli Stati Uniti.', 'US-SRC-52']
      ],
      f: [
        [['ESTA', 'ESTA'], ['$40.27, $40.62 from 16 October 2026', '40,27 $, 40,62 $ dal 16 ottobre 2026'], 'US-SRC-55'],
        [['B visa', 'Visto B'], ['$185', '185 $'], 'US-SRC-48']
      ] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Get the I-20 (F or M student) or DS-2019 (J exchange) from a certified school or sponsor, with name and birth date exactly as in your passport, then pay the SEVIS I-901 fee (F/M $350, J $220) before the interview.',
        'Ottieni l’I-20 (studenti F o M) o il DS-2019 (scambi J) da una scuola o uno sponsor certificati, con nome e data di nascita identici al passaporto, poi paga la tassa SEVIS I-901 (F/M 350 $, J 220 $) prima del colloquio.', 'US-SRC-34 US-SRC-75 US-SRC-36 US-SRC-35'],
      ['Fill in the DS-160, pay the visa fee ($185 for F, M, J and B; $205 for H, L and O) and book the interview through usvisa-info in your country of citizenship or residence. Set your social media profiles to public, and travel with a passport valid 6 months beyond your return.',
        'Compila il DS-160, paga la tassa del visto (185 $ per F, M, J e B; 205 $ per H, L e O) e prenota il colloquio tramite usvisa-info nel paese di cittadinanza o residenza. Rendi pubblici i profili social, e viaggia con un passaporto valido 6 mesi oltre il rientro.', 'US-SRC-84 US-SRC-48 US-SRC-103 US-SRC-41'],
      ['Students may get the visa up to 365 days ahead but arrive no more than 30 days before the programme starts.',
        'Gli studenti possono ottenere il visto fino a 365 giorni prima ma arrivare non più di 30 giorni prima dell’inizio del programma.', 'US-SRC-34']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Report every change of address to USCIS on form AR-11 within 10 days.',
        'Comunica ogni cambio di indirizzo all’USCIS con il modulo AR-11 entro 10 giorni.', 'US-SRC-82']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['At the border show your I-20 or DS-2019, passport and proof of funds; your arrival record (I-94) is electronic. If documents are missing you get form I-515A and 30 days to fix it.',
        'Alla frontiera mostra l’I-20 o il DS-2019, il passaporto e la prova dei fondi; il registro d’ingresso (I-94) è elettronico. Se mancano documenti ricevi il modulo I-515A e 30 giorni per rimediare.', 'US-SRC-42'],
      ['Check in with your school’s designated official (DSO) as soon as you arrive, and before the programme start date.',
        'Presentati al responsabile designato della scuola (DSO) appena arrivi, e prima della data d’inizio del programma.', 'US-SRC-40']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['A Social Security number is only for people authorised to work (on campus, CPT, OPT): apply online, then in person at a Social Security office at least 10 days after arriving, with letters from your DSO and employer. It is free and the card comes by post in 5 to 10 working days.',
        'Il numero di Social Security è solo per chi è autorizzato a lavorare (nel campus, CPT, OPT): fai domanda online, poi di persona in un ufficio della Social Security almeno 10 giorni dopo l’arrivo, con le lettere del DSO e del datore. È gratuito e la tessera arriva per posta in 5-10 giorni lavorativi.', 'US-SRC-43 US-SRC-126'],
      ['Without one, use an ITIN (form W-7) for tax. File form 8843 every year, and form 1040-NR if you have taxable US income.',
        'Senza, usa un ITIN (modulo W-7) per il fisco. Presenta ogni anno il modulo 8843, e il 1040-NR se hai redditi imponibili negli Stati Uniti.', 'US-SRC-44 US-SRC-79 US-SRC-80']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['J exchange visitors must hold insurance of at least $100,000 per incident, $25,000 for repatriation and $50,000 for evacuation. For F-1 students no federal rule requires insurance: ask your school what it requires.',
        'I visitatori di scambio J devono avere un’assicurazione di almeno 100.000 $ per evento, 25.000 $ per il rimpatrio e 50.000 $ per l’evacuazione. Per gli studenti F-1 nessuna norma federale impone un’assicurazione: chiedi alla scuola cosa richiede.', 'US-SRC-05 US-SRC-134']
    ] },
    { k: 'bank', p: 'eu uk', none: true },
    { k: 'keep', p: 'eu uk', t: [
      ['Keep your status: study full time, do no unauthorised work, and extend before your end date. To travel, get your DSO’s signature on the I-20 within the last year and stay away no more than 5 months.',
        'Mantieni lo status: studia a tempo pieno, non svolgere lavori non autorizzati, e chiedi la proroga prima della data di fine. Per viaggiare, fatti firmare l’I-20 dal DSO nell’ultimo anno e non restare via più di 5 mesi.', 'US-SRC-40 US-SRC-41'],
      ['After finishing your programme you have a 60-day grace period today; a pending rule would change it to 30 days.',
        'Dopo la fine del programma hai oggi un periodo di tolleranza di 60 giorni; una norma in sospeso lo ridurrebbe a 30 giorni.', 'US-SRC-46 US-SRC-11']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Moving from F-1 to H-1B inside the US escapes the $100,000 payment only if the change is granted: not if it is refused or you leave before the decision.',
      'Passare da F-1 a H-1B negli Stati Uniti evita il pagamento di 100.000 $ solo se il cambio è concesso: non se viene negato o se si parte prima della decisione.', 'US-SRC-15'] },
    { p: 'eu uk', t: ['Doing something your visa forbids within 90 days of entry, such as working on a visitor visa, lets the consul presume you lied when applying.',
      'Fare qualcosa che il visto vieta entro 90 giorni dall’ingresso, come lavorare con un visto turistico, permette al console di presumere che tu abbia mentito nella domanda.', 'US-SRC-136'] },
    { p: 'eu uk', t: ['Apply for an ESTA only on esta.cbp.dhs.gov; dual citizens of Cuba, Iran, Iraq, North Korea, Sudan or Syria, and recent visitors to several of those countries, need a visa.',
      'L’ESTA si chiede solo su esta.cbp.dhs.gov; chi ha anche la cittadinanza di Cuba, Iran, Iraq, Corea del Nord, Sudan o Siria, o vi è stato di recente, ha bisogno del visto.', 'US-SRC-93 US-SRC-52'] },
    { p: 'eu uk', t: ['Messages saying you won the green-card lottery and asking for money are scams: the State Department runs it.',
      'I messaggi che annunciano una vincita alla lotteria della green card e chiedono soldi sono truffe: la gestisce il Dipartimento di Stato.', 'US-SRC-83'] }
  ],

  open: [
    { st: 'pending', t: ['A rule ending “duration of status” for students, with four-year admissions and a 30-day grace period, is postponed by a court; today the 60-day grace period still applies.',
      'Una regola che abolisce la “duration of status” per gli studenti, con ammissioni di quattro anni e 30 giorni di grazia, è sospesa da un tribunale; oggi valgono ancora i 60 giorni di grazia.'] },
    { st: 'pending', t: ['Universities sued on 5 October 2026 over the narrower curricular-training rules.',
      'Le università hanno fatto causa il 5 ottobre 2026 contro le regole più restrittive sul tirocinio curricolare.'] },
    { st: 'watch', t: ['Appeals on the $100,000 H-1B payment, and a separate proposed $103,265 fee on capped petitions.',
      'Gli appelli sul pagamento H-1B da 100.000 $, e una tariffa separata proposta di 103.265 $ sulle petizioni soggette a quota.'] },
    { st: 'pending', t: ['A rule on OPT fees has cleared White House review but is unpublished; the amount is unknown.',
      'Una regola sulle tariffe OPT ha superato la revisione della Casa Bianca ma non è pubblicata; l’importo non è noto.'] },
    { st: 'open', t: ['A $250 visa integrity fee is in the law, but no one has confirmed it is being collected.',
      'Una visa integrity fee di 250 $ è prevista dalla legge, ma nessuno ha confermato che venga riscossa.'] },
    { st: 'pending', t: ['No diversity-lottery visas have been issued since 31 August 2026.',
      'Nessun visto della lotteria diversity è stato rilasciato dal 31 agosto 2026.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/united_states/united_states_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('US', {
  "US-SRC-34": ["DHS / ICE (Study in the States): Students and the Form I-20","https://studyinthestates.dhs.gov/students/prepare/students-and-the-form-i-20","2026-10-06"],
  "US-SRC-39": ["DHS / ICE (Study in the States): Financial Ability","https://studyinthestates.dhs.gov/students/prepare/financial-ability","2026-10-06"],
  "US-SRC-35": ["DHS / ICE (Study in the States): Paying the I-901 SEVIS Fee","https://studyinthestates.dhs.gov/students/prepare/paying-the-i-901-sevis-fee","2026-10-06"],
  "US-SRC-62": ["U.S. Department of State: Visas News (indice; avvisi: Interview Waiver Update, Expanded Screening and Vetting, DV issuance guidance, entry…","https://travel.state.gov/content/travel/en/News/visas-news.html","2026-10-06"],
  "US-SRC-38": ["DHS / ICE (Study in the States): Working in the United States","https://studyinthestates.dhs.gov/students/work/working-in-the-united-states","2026-10-06"],
  "US-SRC-01": ["eCFR / Office of the Federal Register: 8 CFR 214.2 (nonimmigrant classes: F, J, M)","https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2","2026-10-06"],
  "US-SRC-49": ["U.S. Department of State: Visa Reciprocity and Civil Documents by Country: Italy","https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Italy.html","2026-10-06"],
  "US-SRC-107": ["U.S. Department of State: Reciprocity Schedule: United Kingdom","https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/UnitedKingdom.html","2026-10-07"],
  "US-SRC-36": ["DHS / ICE SEVP: I-901 SEVIS Fee","https://www.ice.gov/sevis/i901","2026-10-06"],
  "US-SRC-48": ["U.S. Department of State: Fees for Visa Services","https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html","2026-10-06"],
  "US-SRC-08": ["eCFR / Office of the Federal Register: 22 CFR 62.22 (trainees and interns)","https://www.ecfr.gov/current/title-22/part-62/section-62.22","2026-10-06"],
  "US-SRC-75": ["U.S. Department of State (BridgeUSA): J-1 Intern","https://j1visa.state.gov/programs/intern","2026-10-06"],
  "US-SRC-76": ["U.S. Department of State (BridgeUSA): J-1 Trainee","https://j1visa.state.gov/programs/trainee","2026-10-06"],
  "US-SRC-24": ["DHS / ICE SEVP: SEVP Broadcast Message 2608-01, Reminder of Liability for DSOs Regarding CPT Authorization","https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf","2026-10-06"],
  "US-SRC-25": ["DHS / ICE SEVP: SEVP Broadcast Message 2608-02, Guidance for DSOs regarding CPT","https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf","2026-10-06"],
  "US-SRC-05": ["eCFR / Office of the Federal Register: 22 CFR 62.14 (insurance, J program)","https://www.ecfr.gov/current/title-22/chapter-I/subchapter-G/part-62/subpart-A/section-62.14","2026-10-06"],
  "US-SRC-28": ["USCIS: Optional Practical Training (OPT) for F-1 Students","https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students","2026-10-06"],
  "US-SRC-29": ["USCIS: Optional Practical Training Extension for STEM Students (STEM OPT)","https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt","2026-10-07"],
  "US-SRC-02": ["eCFR / Office of the Federal Register: 8 CFR 106.2 (USCIS fee schedule)","https://www.ecfr.gov/current/title-8/part-106/section-106.2","2026-10-06"],
  "US-SRC-03": ["eCFR / Office of the Federal Register: 8 CFR 106.1 (fees: general), par. (g)","https://www.ecfr.gov/current/title-8/part-106/section-106.1","2026-10-06"],
  "US-SRC-30": ["DHS / ICE SEVP: STEM Designated Degree Program List","https://www.ice.gov/doclib/sevis/pdf/stemList2024.pdf","2026-10-06"],
  "US-SRC-17": ["USCIS: H-1B Cap Season","https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-cap-season","2026-10-06"],
  "US-SRC-18": ["DHS / USCIS (Federal Register): Weighted Selection Process for Registrants and Petitioners Seeking To File Cap-Subject H-1B Petitions (final rule, 90…","https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b","2026-10-06"],
  "US-SRC-19": ["The White House (Federal Register): Proclamation 11069, Restriction on Entry of Certain Nonimmigrant Workers (91 FR 60497)","https://www.federalregister.gov/d/2026-19554","2026-10-06"],
  "US-SRC-21": ["U.S. District Court, N.D. Cal. (CourtListener): Global Nurse Force v. Trump, No. 4:25-cv-08454-HSG, Doc 130","https://www.courtlistener.com/docket/71541425/130/global-nurse-force-v-trump/","2026-10-06"],
  "US-SRC-22": ["U.S. Court of Appeals, 1st Cir.: State of California v. Mullin, No. 26-1699, Order of Court","https://www.ca1.uscourts.gov/sites/ca1/files/opnfiles/26-1699O-01A.pdf","2026-10-06"],
  "US-SRC-68": ["USCIS: L-1A Intracompany Transferee Executive or Manager","https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager","2026-10-06"],
  "US-SRC-69": ["USCIS: E-2 Treaty Investors","https://www.uscis.gov/working-in-the-united-states/temporary-workers/e-2-treaty-investors","2026-10-06"],
  "US-SRC-70": ["USCIS: O-1 Visa: Individuals with Extraordinary Ability or Achievement","https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement","2026-10-06"],
  "US-SRC-06": ["eCFR / Office of the Federal Register: 22 CFR 62.20 (professors and research scholars)","https://www.ecfr.gov/current/title-22/part-62/section-62.20","2026-10-06"],
  "US-SRC-07": ["eCFR / Office of the Federal Register: 22 CFR 62.21 (short-term scholars)","https://www.ecfr.gov/current/title-22/part-62/section-62.21","2026-10-06"],
  "US-SRC-78": ["IRS: Foreign Student Liability for Social Security and Medicare Taxes","https://www.irs.gov/individuals/international-taxpayers/foreign-student-liability-for-social-security-and-medicare-taxes","2026-10-06"],
  "US-SRC-131": ["U.S. House Office of the Law Revision Counsel / GPO: 8 U.S.C. 1182 (INA 212), lettera (e)","https://www.govinfo.gov/link/uscode/8/1182","2026-10-07"],
  "US-SRC-10": ["eCFR / Office of the Federal Register: 22 CFR 62.32 (summer work travel)","https://www.ecfr.gov/current/title-22/part-62/section-62.32","2026-10-06"],
  "US-SRC-77": ["U.S. Department of State (BridgeUSA): J-1 Summer Work Travel","https://j1visa.state.gov/programs/summer-work-travel","2026-10-06"],
  "US-SRC-52": ["U.S. Department of State / CBP: Visa Waiver Program","https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html","2026-10-06"],
  "US-SRC-53": ["U.S. Department of Homeland Security: Visa Waiver Program","https://www.dhs.gov/visa-waiver-program","2026-10-06"],
  "US-SRC-55": ["DHS / CBP (Federal Register): Certain DHS Immigration-Related Fees Required by HR-1: FY2027 (91 FR 62534)","https://www.federalregister.gov/d/2026-20185","2026-10-06"],
  "US-SRC-84": ["U.S. Department of State (appointment portal): U.S. Visa Information and Appointment Services, Italia (NIV)","https://ais.usvisa-info.com/it-it/niv","2026-10-06"],
  "US-SRC-103": ["U.S. Department of State: Announcement of Expanded Screening and Vetting for Visa Applicants","https://travel.state.gov/content/travel/en/News/visas-news/announcement-of-expanded-screening-and-vetting-for-visa-applicants.html","2026-10-07"],
  "US-SRC-41": ["DHS / ICE (Study in the States): Traveling as an F or M Student","https://studyinthestates.dhs.gov/students/study/traveling-as-an-f-or-m-student","2026-10-07"],
  "US-SRC-82": ["USCIS: Change of Address (AR-11)","https://www.uscis.gov/addresschange","2026-10-06"],
  "US-SRC-42": ["DHS / ICE (Study in the States): Getting to the United States","https://studyinthestates.dhs.gov/students/travel/getting-to-the-united-states","2026-10-06"],
  "US-SRC-40": ["DHS / ICE (Study in the States): Maintaining Status","https://studyinthestates.dhs.gov/students/maintaining-status","2026-10-06"],
  "US-SRC-43": ["DHS / ICE (Study in the States): Obtaining a Social Security Number","https://studyinthestates.dhs.gov/students/work/obtaining-a-social-security-number","2026-10-07"],
  "US-SRC-126": ["SSA: Request Social Security number for the first time","https://www.ssa.gov/number-card/request-number-first-time","2026-10-07"],
  "US-SRC-44": ["DHS / ICE (Study in the States): Individual Taxpayer Identification Number (ITIN)","https://studyinthestates.dhs.gov/students/work/individual-taxpayer-identification-number-itin","2026-10-06"],
  "US-SRC-79": ["IRS: About Form 8843","https://www.irs.gov/forms-pubs/about-form-8843","2026-10-06"],
  "US-SRC-80": ["IRS: Taxation of Nonresident Aliens","https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens","2026-10-06"],
  "US-SRC-134": ["eCFR / Office of the Federal Register: Ricerca eCFR \"health insurance\" in 8 CFR parte 214","https://www.ecfr.gov/api/search/v1/results?query=%22health+insurance%22&hierarchy%5Btitle%5D=8&hierarchy%5Bpart%5D=214","2026-10-07"],
  "US-SRC-46": ["DHS / ICE (Study in the States): International Student Life Cycle","https://studyinthestates.dhs.gov/students/get-started/international-student-life-cycle","2026-10-06"],
  "US-SRC-11": ["DHS / ICE (Federal Register): Establishing a Fixed Time Period of Admission and an Extension of Stay Procedure for Nonimmigrant Academic Students,…","https://www.federalregister.gov/d/2026-14439","2026-10-06"],
  "US-SRC-15": ["USCIS: H-1B Specialty Occupations","https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations","2026-10-06"],
  "US-SRC-136": ["U.S. Department of State: 9 FAM 302.9 Ineligibility based on Illegal Entry, Misrepresentation and Other Immigration Violations (INA 212(a)(6))","https://fam.state.gov/fam/09FAM/09FAM030209.html","2026-10-07"],
  "US-SRC-93": ["DHS / CBP: ESTA FAQ (Visa Waiver Program)","https://www.cbp.gov/travel/international-visitors/esta/frequently-asked-questions-about-visa-waiver-program-vwp-and-electronic-system-travel","2026-10-07"],
  "US-SRC-83": ["USCIS: Common Scams","https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/common-scams","2026-10-06"]
});

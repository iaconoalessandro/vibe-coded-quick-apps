/* Visas and permits: Malaysia. From research/visas_immigration/malaysia/
 * (guide, source register, open questions), council check of 5 Oct 2026; the
 * Employment Pass thresholds and the Graduate Pass list were confirmed in the
 * review of 6 Oct 2026. EU and UK passports only. */
ATLAS.addVisas({
  id: 'MY',
  folder: 'malaysia',
  checked: '2026-10-06',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student Pass', 'Student Pass'], law: 'Immigration Act 1959/63',
      t: [
        ['All applications go through Education Malaysia Global Services: the university applies, you travel with the approval letter, and within seven working days of arrival take a medical including a urine drug test.',
          'Tutte le domande passano da Education Malaysia Global Services: l’università fa domanda, si viaggia con la lettera di approvazione, ed entro sette giorni lavorativi dall’arrivo si fa una visita medica con test tossicologico delle urine.', 'MYS-SRC-11'],
        ['No work during term; in breaks of more than seven days, up to 20 hours a week in restaurants, petrol stations, minimarkets or hotels only, and never as a cashier.',
          'Niente lavoro durante i corsi; nelle pause di oltre sette giorni, fino a 20 ore a settimana solo in ristoranti, distributori, minimarket o alberghi, e mai come cassiere.', 'MYS-SRC-12']
      ],
      f: [[['Fees, first year', 'Costi, primo anno'], ['about RM 2,760 to RM 3,220, medical and insurance included', 'circa da 2.760 a 3.220 RM, visita medica e assicurazione incluse'], 'MYS-SRC-11']],
      w: ['The pass is renewed only with 80% attendance and a CGPA of at least 2.00.',
        'Il pass si rinnova solo con l’80% di frequenza e una media di almeno 2.00.', 'MYS-SRC-11'] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Professional Visit Pass for interns', 'Professional Visit Pass per tirocinanti'], law: 'Immigration Act 1959/63',
      t: [['Students of Malaysian universities intern on their Student Pass. Students of foreign universities need a Professional Visit Pass requested by the host company: typically 3 to 6 months, 12 at most, with an allowance but no salary. An internship as a tourist is illegal, even unpaid.',
        'Gli studenti di università malesi fanno il tirocinio con lo Student Pass. Gli studenti di università estere hanno bisogno di un Professional Visit Pass chiesto dall’azienda ospitante: di solito da 3 a 6 mesi, al massimo 12, con un’indennità ma senza stipendio. Un tirocinio da turista è illegale, anche se non retribuito.', 'MYS-SRC-11 MYS-SRC-05 MYS-SRC-01 MYS-SRC-24']] },

    { k: 'search', p: 'eu', v: 'limited',
      name: ['Graduate Pass', 'Graduate Pass'], law: 'EMGS',
      t: [['A 12-month pass to look for work after a degree from a Malaysian university, open only to citizens of 32 listed countries, among them Germany, France, the Netherlands and the Nordic countries. Italy is not on the list.',
        'Un pass di 12 mesi per cercare lavoro dopo una laurea in un’università malese, aperto solo ai cittadini di 32 paesi in elenco, tra cui Germania, Francia, Paesi Bassi e paesi nordici. L’Italia non è nell’elenco.', 'MYS-SRC-13']] },

    { k: 'search', p: 'uk', v: 'open',
      name: ['Graduate Pass', 'Graduate Pass'], law: 'EMGS',
      t: [['British graduates of Malaysian universities can get a 12-month pass to travel, work part time and look for a job.',
        'I laureati britannici di università malesi possono ottenere un pass di 12 mesi per viaggiare, lavorare part-time e cercare lavoro.', 'MYS-SRC-13']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['Employment Pass', 'Employment Pass'], law: 'Employment Act 1955, s. 60K',
      t: [
        ['The employer first gets labour-department approval, then applies; since 1 June 2026 all three categories may bring family. Foreign-owned sponsors need RM 500,000 of paid-up capital.',
          'Il datore ottiene prima l’autorizzazione del dipartimento del Lavoro, poi fa domanda; dal 1° giugno 2026 tutte e tre le categorie possono portare la famiglia. Gli sponsor a capitale estero devono avere 500.000 RM di capitale versato.', 'MYS-SRC-02 MYS-SRC-03 MYS-SRC-06'],
        ['Since October 2025 foreign employees pay 2% into the EPF pension fund, matched by the employer.',
          'Da ottobre 2025 i dipendenti stranieri versano il 2% al fondo pensione EPF, con altrettanto dal datore.', 'MYS-SRC-21']
      ],
      f: [
        [['Salary, category I', 'Stipendio, categoria I'], ['RM 20,000 a month', '20.000 RM al mese'], 'MYS-SRC-03'],
        [['Salary, category II', 'Stipendio, categoria II'], ['RM 10,000 to 19,999 a month', 'da 10.000 a 19.999 RM al mese'], 'MYS-SRC-03'],
        [['Salary, category III', 'Stipendio, categoria III'], ['RM 5,000 to 9,999 a month', 'da 5.000 a 9.999 RM al mese'], 'MYS-SRC-03']
      ],
      w: ['An Employment Pass from Kuala Lumpur does not cover work in Sabah or Sarawak, which run their own immigration.',
        'Un Employment Pass di Kuala Lumpur non copre il lavoro in Sabah o Sarawak, che hanno una propria immigrazione.', 'MYS-SRC-28'] },

    { k: 'work', p: 'eu uk', v: 'open',
      name: ['DE Rantau nomad pass', 'DE Rantau nomad pass'], law: 'MDEC',
      t: [['For remote workers and freelancers with foreign clients only: 3 to 12 months, renewable once.',
        'Solo per lavoratori da remoto e freelance con clienti esteri: da 3 a 12 mesi, rinnovabile una volta.', 'MYS-SRC-15']],
      f: [[['Income', 'Reddito'], ['$24,000 a year in tech, $60,000 otherwise', '24.000 $ l’anno nel tech, 60.000 $ negli altri casi'], 'MYS-SRC-15']] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Research passes and PhDs', 'Pass per ricerca e dottorati'], law: 'Income Tax Act 1967',
      t: [
        ['Thesis research at a Malaysian university uses a student mobility pass through EMGS, 1 to 12 months; research at institutes or companies a Professional Visit Pass. Field research may need government clearance.',
          'La ricerca di tesi in un’università malese usa un pass di mobilità studentesca tramite EMGS, da 1 a 12 mesi; la ricerca presso istituti o aziende un Professional Visit Pass. La ricerca sul campo può richiedere un’autorizzazione governativa.', 'MYS-SRC-11 MYS-SRC-01 MYS-SRC-05'],
        ['PhD and master’s students keep the Student Pass, may bring family, and research assistantships are free of income tax.',
          'Dottorandi e studenti di master mantengono lo Student Pass, possono portare la famiglia, e gli assegni di ricerca sono esenti da imposta sul reddito.', 'MYS-SRC-11 MYS-SRC-01 MYS-SRC-19']
      ] },

    { k: 'whv', p: 'eu uk', v: 'closed',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Malaysia has working-holiday agreements only with Australia and New Zealand.',
        'La Malaysia ha accordi di vacanza-lavoro solo con Australia e Nuova Zelanda.', 'MYS-SRC-30']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Immigration Act 1959/63',
      t: [['Up to 90 days with no work; fill in the free Malaysia Digital Arrival Card within three days before arriving. Repeated border runs to reset the 90 days lead to refusal and a blacklist.',
        'Fino a 90 giorni senza lavorare; si compila la Malaysia Digital Arrival Card gratuita nei tre giorni prima dell’arrivo. Uscite e rientri ripetuti per azzerare i 90 giorni portano al respingimento e alla lista nera.', 'MYS-SRC-01 MYS-SRC-24 MYS-SRC-09']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Fill in the Malaysia Digital Arrival Card before you travel. Students apply through Education Malaysia Global Services (EMGS); workers through their employer and the Expatriate Services Division.',
        'Compila la Malaysia Digital Arrival Card prima di partire. Gli studenti fanno domanda tramite Education Malaysia Global Services (EMGS); i lavoratori tramite il datore e la Expatriate Services Division.', 'MYS-SRC-09 MYS-SRC-11 MYS-SRC-06'],
      ['Expect to pay 2 months’ damage deposit, 1 month in advance and half a month’s utility deposit when you rent.',
        'Per affittare, mettiti in conto 2 mesi di deposito per danni, 1 mese anticipato e mezzo mese di deposito per le utenze.', 'MYS-SRC-20']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Have the lease stamped with stamp duty on e-Duti Setem (MyTax) within 30 days of signing: an unstamped lease is not valid proof of residence for a bank account or utilities.',
        'Fai bollare il contratto d’affitto con l’imposta di bollo su e-Duti Setem (MyTax) entro 30 giorni dalla firma: un contratto non bollato non vale come prova di residenza per conto bancario o utenze.', 'MYS-SRC-20 MYS-SRC-17']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['On arrival you get a temporary special pass, usually 30 days. Your employer or university then hands your passport to immigration for the visa sticker and the i-Kad card, which takes 2 to 6 weeks; meanwhile you cannot leave the country or fly to Sabah or Sarawak.',
        'All’arrivo ricevi un pass speciale provvisorio, di solito di 30 giorni. Il datore o l’università consegna poi il passaporto all’immigrazione per l’adesivo del visto e la carta i-Kad, cosa che richiede da 2 a 6 settimane; nel frattempo non puoi lasciare il paese né volare verso Sabah o Sarawak.', 'MYS-SRC-01 MYS-SRC-11 MYS-SRC-28']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Register your tax identification number online on MyTax. Until you have spent 182 days in Malaysia, your employer withholds a flat 30%; for arrivals in the second half of the year, more than 14 days abroad on holiday can break the count.',
        'Registra online su MyTax il numero d’identificazione fiscale. Finché non hai trascorso 182 giorni in Malesia, il datore trattiene il 30% fisso; per chi arriva nel secondo semestre, più di 14 giorni all’estero in vacanza possono interrompere il conteggio.', 'MYS-SRC-18'],
      ['Since 1 October 2025 employees on an Employment Pass pay 2% into the EPF pension fund, matched by 2% from the employer, refundable when you leave for good.',
        'Dal 1° ottobre 2025 i dipendenti con Employment Pass versano il 2% al fondo pensione EPF, con un altro 2% dal datore, rimborsabile quando parti definitivamente.', 'MYS-SRC-21']
    ] },
    { k: 'health', p: 'eu uk', t: [
      ['Your employer must cover you under the SOCSO employment injury and invalidity schemes; expatriates are excluded from the unemployment insurance scheme.',
        'Il datore deve coprirti con gli schemi SOCSO per infortuni sul lavoro e invalidità; gli espatriati sono esclusi dall’assicurazione contro la disoccupazione.', 'MYS-SRC-22']
    ] },
    { k: 'bank', p: 'eu uk', t: [
      ['Banks (Maybank, CIMB, Public Bank, RHB) refuse accounts on a tourist visa or approval letter: bring your passport with the visa sticker, the i-Kad, a letter from your employer or university addressed to the branch, and the stamped lease.',
        'Le banche (Maybank, CIMB, Public Bank, RHB) rifiutano i conti con un visto turistico o una lettera di approvazione: porta il passaporto con l’adesivo del visto, la i-Kad, una lettera del datore o dell’università indirizzata alla filiale, e il contratto bollato.', 'MYS-SRC-17 MYS-SRC-20']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['When you leave for good, the visa cancellation (check-out memo) and tax clearance are needed to withdraw your EPF savings.',
        'Quando parti definitivamente, servono la cancellazione del visto (check-out memo) e la liberatoria fiscale per ritirare il montante EPF.', 'MYS-SRC-21']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Until you have spent 182 days in Malaysia in the year, employers withhold a flat 30% tax.',
      'Finché non si sono trascorsi 182 giorni in Malaysia nell’anno, i datori trattengono un’imposta fissa del 30%.', 'MYS-SRC-18'] },
    { p: 'eu uk', t: ['Malaysia does not accept apostilles: documents need consular legalisation at the Malaysian embassy.',
      'La Malaysia non accetta l’apostille: i documenti richiedono la legalizzazione consolare presso l’ambasciata malese.', 'MYS-SRC-23 MYS-SRC-25'] },
    { p: 'eu uk', t: ['A positive urine test is a crime even if the drug was taken legally abroad; CBD products are banned.',
      'Un test delle urine positivo è un reato anche se la sostanza è stata assunta legalmente all’estero; i prodotti al CBD sono vietati.', 'MYS-SRC-26'] },
    { p: 'eu uk', t: ['Same-sex relations are criminalised, with prison sentences of up to 20 years.',
      'I rapporti tra persone dello stesso sesso sono reato, con pene fino a 20 anni di carcere.', 'MYS-SRC-27'] },
    { p: 'eu uk', t: ['While your passport is with immigration for the pass sticker, 2 to 6 weeks, you cannot travel abroad or to Sabah and Sarawak.',
      'Mentre il passaporto è all’immigrazione per l’adesivo del pass, da 2 a 6 settimane, non si può andare all’estero né in Sabah e Sarawak.', 'MYS-SRC-11 MYS-SRC-28'] }
  ],

  open: [
    { st: 'pending', t: ['Employers renewing category II and III passes must file a local succession plan from 1 January 2027; the criteria are not out.',
      'Dal 1° gennaio 2027 i datori che rinnovano i pass di categoria II e III devono presentare un piano di successione locale; i criteri non sono usciti.'] },
    { st: 'watch', t: ['Whether Italy will be added to the Graduate Pass list.',
      'Se l’Italia verrà aggiunta all’elenco del Graduate Pass.'] },
    { st: 'open', t: ['Whether a tourist can still pay to switch to a student pass inside Malaysia.',
      'Se un turista possa ancora pagare per passare a un pass per studenti in Malaysia.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/malaysia/malaysia_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('MY', {
  "MYS-SRC-11": ["Education Malaysia Global Services (EMGS) & KPT: Schedule of Fees & Guidelines for International Student Visa Applications","https://visa.educationmalaysia.gov.my","2026-10-05"],
  "MYS-SRC-12": ["EMGS & Jabatan Imigresen Malaysia (JIM): Guidelines on Part-Time Employment for International Students","https://hub.emgs.com.my/part-time-job-while-studying/","2026-10-05"],
  "MYS-SRC-05": ["ESD / MYXpats Centre: Announcement No. 231 (01/08/2024): Revision of Expatriate Services Processing Fees","https://esd.imi.gov.my/portal/latest-news/announcement/announcement-231-new-application-features/","2026-10-05"],
  "MYS-SRC-01": ["Immigration Act 1959/63 (Act 155) & Immigration Regulations 1963","https://lom.agc.gov.my/act-detail.php?act=155","2026-10-05"],
  "MYS-SRC-24": ["Viaggiare Sicuri — Scheda Paese Malaysia","https://www.viaggiaresicuri.it/find-country/country/MYS","2026-10-05"],
  "MYS-SRC-13": ["EMGS & Jabatan Imigresen Malaysia (JIM): Graduate Pass (Pas Lawatan Sosial Graduan) Guidelines","https://visa.educationmalaysia.gov.my/graduate-pass","2026-10-05"],
  "MYS-SRC-02": ["Employment Act 1955 (Act 265) con emendamenti 2022/2023 & Section 60K","https://lom.agc.gov.my/act-detail.php?act=265","2026-10-05"],
  "MYS-SRC-03": ["Revised Employment Pass Salary Policy Effective 1 June 2026 (Announcement No. 266) & Comunicato KDN 14/01/2026","https://esd.imi.gov.my/portal/latest-news/announcement/announcement-266-ep-salary-policy-2026/","2026-10-05"],
  "MYS-SRC-06": ["Expatriate Services Division (ESD): ESD Online Guidebook (Chapter 2: Company Registration Requirements & Paid-Up Capital)","https://esd.imi.gov.my/portal/employers/","2026-10-05"],
  "MYS-SRC-21": ["Employees Provident Fund (EPF / KWSP): EPF (Amendment) Act 2025 & Mandatory Foreign Workers Contribution Circular","https://www.kwsp.gov.my","2026-10-05"],
  "MYS-SRC-28": ["Immigration Act 1959/63: Part VII (Special Provisions for East Malaysia - Sabah & Sarawak) & MA63","https://lom.agc.gov.my/act-detail.php?act=155","2026-10-05"],
  "MYS-SRC-15": ["Malaysia Digital Economy Corporation (MDEC): DE Rantau Nomad Pass Guidelines & Requirements","https://mdec.my/derantau","2026-10-05"],
  "MYS-SRC-19": ["Lembaga Hasil Dalam Negeri (LHDN): Income Tax Act 1967: Schedule 6, Paragraph 24 (Scholarship Tax Exemption)","https://www.hasil.gov.my","2026-10-05"],
  "MYS-SRC-30": ["Accordi Bilaterali Working Holiday Scheme (WHS)","https://www.imi.gov.my","2026-10-05"],
  "MYS-SRC-09": ["Jabatan Imigresen Malaysia (JIM): Malaysia Digital Arrival Card (MDAC) Official Portal","https://imigresen-online.imi.gov.my/mdac/main","2026-10-05"],
  "MYS-SRC-20": ["Lembaga Hasil Dalam Negeri (LHDN): Stamp Act 1949 & Portale e-Duti Setem su MyTax","https://mytax.hasil.gov.my","2026-10-05"],
  "MYS-SRC-17": ["Bank Negara Malaysia (BNM): Anti-Money Laundering & Financial Institution Account Opening Standards","https://www.bnm.gov.my","2026-10-05"],
  "MYS-SRC-18": ["Lembaga Hasil Dalam Negeri (LHDN): Income Tax Act 1967 (Act 53): Section 7 (Tax Residency) & Flat Rate Non-Residents","https://www.hasil.gov.my","2026-10-05"],
  "MYS-SRC-22": ["Social Security Organisation (SOCSO / PERKESO): Employees’ Social Security Act 1969 & Employment Injury / Invalidity Scheme for Foreign Workers","https://www.perkeso.gov.my","2026-10-05"],
  "MYS-SRC-23": ["Status Table Convention of 5 October 1961 (Apostille Convention)","https://www.hcch.net/en/instruments/conventions/status-table/?cid=41","2026-10-05"],
  "MYS-SRC-25": ["Consular Services: Visa Requirements & Document Attestation","https://www.kln.gov.my/web/ita_rome/requirement_foreigner","2026-10-05"],
  "MYS-SRC-26": ["Dangerous Drugs Act 1952 (Act 234) & Abolition of Mandatory Death Penalty Act 2023","https://lom.agc.gov.my/act-detail.php?act=234","2026-10-05"],
  "MYS-SRC-27": ["Penal Code (Kanun Keseksaan - Act 574): Sections 377A, 377B & 377D","https://lom.agc.gov.my/act-detail.php?act=574","2026-10-05"]
});

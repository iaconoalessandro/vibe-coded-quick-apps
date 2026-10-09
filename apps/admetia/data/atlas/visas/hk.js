/* Visas and permits: Hong Kong. From research/visas_immigration/hong_kong/
 * (guide, source register, open questions), council check of 5 Oct 2026.
 * EU and UK passports only. */
ATLAS.addVisas({
  id: 'HK',
  folder: 'hong_kong',
  checked: '2026-10-05',
  review: '2027-03-31',

  routes: [
    { k: 'study', p: 'eu uk', v: 'open',
      name: ['Student visa', 'Visto per studenti'], law: 'Immigration Ordinance (Cap. 115)',
      t: [
        ['With an offer from an accredited university, which sponsors the application; show funds for tuition and living costs. Stays over 180 days need a Smart HKID, which also opens public healthcare.',
          'Con un’offerta di un’università accreditata, che sponsorizza la domanda; si dimostrano i mezzi per retta e spese di vita. I soggiorni oltre 180 giorni richiedono la Smart HKID, che apre anche la sanità pubblica.', 'HK-SRC-14 HK-SRC-03'],
        ['Under a trial measure, full-time students may work part time or intern with no limit on hours; exchange students may not.',
          'Con una misura sperimentale gli studenti a tempo pieno possono lavorare part-time o fare tirocini senza limiti di ore; gli studenti di scambio no.', 'HK-SRC-15 HK-SRC-14']
      ],
      f: [
        [['Funds, recommended', 'Mezzi, consigliati'], ['HK$200,000 to 280,000', 'da 200.000 a 280.000 HK$'], 'HK-SRC-14'],
        [['Visa', 'Visto'], ['HK$330', '330 HK$'], 'HK-SRC-02 HK-SRC-06']
      ] },

    { k: 'intern', p: 'eu uk', v: 'sponsor',
      name: ['Training visa', 'Visto per formazione'], law: 'Immigration Ordinance (Cap. 115)',
      t: [['There is no free-standing internship visa. From abroad, a Hong Kong company can sponsor a training visa with a detailed training plan, for up to 12 months, not extendable. Students enrolled in Hong Kong intern under their student visa.',
        'Non esiste un visto autonomo per tirocinio. Dall’estero, un’azienda di Hong Kong può sponsorizzare un visto per formazione con un piano dettagliato, fino a 12 mesi, non prorogabile. Gli iscritti a Hong Kong fanno il tirocinio con il visto per studenti.', 'HK-SRC-13 HK-SRC-14']],
      f: [[['Visa', 'Visto'], ['HK$330', '330 HK$'], 'HK-SRC-02 HK-SRC-06']] },

    { k: 'search', p: 'eu uk', v: 'open',
      name: ['IANG and the Top Talent Pass', 'IANG e Top Talent Pass'], law: 'Immigration Ordinance (Cap. 115)',
      t: [
        ['Graduates of Hong Kong universities who apply within six months get 24 months with no job offer needed. Renewal at month 24 needs a market-rate job or an operating business.',
          'I laureati di università di Hong Kong che fanno domanda entro sei mesi ottengono 24 mesi senza bisogno di offerta di lavoro. Il rinnovo al 24° mese richiede un lavoro a condizioni di mercato o un’impresa attiva.', 'HK-SRC-10'],
        ['The Top Talent Pass gives two years without a sponsor to bachelor’s graduates of the last five years from about 200 listed universities, Politecnico di Milano among them; 10,000 places a year for those with under three years of experience. A master’s alone does not count.',
          'Il Top Talent Pass dà due anni senza sponsor ai laureati triennali degli ultimi cinque anni di circa 200 università in elenco, tra cui il Politecnico di Milano; 10.000 posti l’anno per chi ha meno di tre anni di esperienza. Un master da solo non conta.', 'HK-SRC-08 HK-SRC-09']
      ],
      f: [[['Fees', 'Costi'], ['HK$600 + HK$1,300', '600 HK$ + 1.300 HK$'], 'HK-SRC-02 HK-SRC-06']] },

    { k: 'work', p: 'eu uk', v: 'sponsor',
      name: ['General Employment Policy', 'General Employment Policy'], law: 'Immigration Ordinance (Cap. 115)',
      t: [
        ['A Hong Kong employer sponsors a genuine full-time job at market pay, showing it tried to hire locally; you need a relevant degree. The visa runs three years, then three and two, tied to the employer.',
          'Un datore di Hong Kong sponsorizza un lavoro vero a tempo pieno con paga di mercato, dimostrando di aver cercato localmente; serve una laurea attinente. Il visto dura tre anni, poi tre e due, legato al datore.', 'HK-SRC-07'],
        ['Spouses of work-visa holders may work freely. Seven years of residence lead to permanent residence.',
          'I coniugi dei titolari di visto di lavoro possono lavorare liberamente. Sette anni di residenza portano alla residenza permanente.', 'HK-SRC-20 HK-SRC-01']
      ],
      f: [[['Fees', 'Costi'], ['HK$600 + HK$1,300', '600 HK$ + 1.300 HK$'], 'HK-SRC-02 HK-SRC-06']],
      w: ['Changing employer needs immigration’s written approval first.',
        'Cambiare datore richiede prima l’approvazione scritta dell’immigrazione.', 'HK-SRC-07'] },

    { k: 'research', p: 'eu uk', v: 'sponsor',
      name: ['Visiting students and PhDs', 'Studenti in visita e dottorati'], law: 'Immigration Ordinance (Cap. 115)',
      t: [
        ['Thesis research of 1 to 12 months uses a visiting-student visa with the host department’s letter.',
          'La ricerca di tesi da 1 a 12 mesi usa un visto da studente in visita con la lettera del dipartimento ospitante.', 'HK-SRC-14'],
        ['The Hong Kong PhD Fellowship Scheme funds about 300 doctoral students a year; the stipend is free of salaries tax.',
          'L’Hong Kong PhD Fellowship Scheme finanzia circa 300 dottorandi l’anno; la borsa è esente dall’imposta sui salari.', 'HK-SRC-16 HK-SRC-04']
      ],
      f: [[['HKPFS stipend', 'Borsa HKPFS'], ['HK$344,400 a year', '344.400 HK$ l’anno'], 'HK-SRC-16']] },

    { k: 'whv', p: 'eu', v: 'limited',
      name: ['Working holiday', 'Vacanza-lavoro'], law: 'bilateral agreements',
      t: [['Open to citizens of Austria, France, Germany, Hungary, Ireland, the Netherlands and Sweden aged 18 to 30: 12 months, at most six months with one employer. Italy signed an agreement in 2019, but applications are not open.',
        'Aperto ai cittadini di Austria, Francia, Germania, Ungheria, Irlanda, Paesi Bassi e Svezia dai 18 ai 30 anni: 12 mesi, al massimo sei mesi con lo stesso datore. L’Italia ha firmato un accordo nel 2019, ma le domande non sono aperte.', 'HK-SRC-17']],
      f: [[['Funds', 'Mezzi'], ['HK$20,000', '20.000 HK$'], 'HK-SRC-17']] },

    { k: 'whv', p: 'uk', v: 'open',
      name: ['Youth mobility', 'Mobilità giovanile'], law: 'bilateral agreement',
      t: [['British citizens aged 18 to 30 can get a 12-month working holiday visa.',
        'I cittadini britannici dai 18 ai 30 anni possono ottenere un visto vacanza-lavoro di 12 mesi.', 'HK-SRC-17']],
      f: [[['Visa', 'Visto'], ['HK$330', '330 HK$'], 'HK-SRC-17']] },

    { k: 'short', p: 'eu uk', v: 'open',
      name: ['Visa-free visit', 'Visita senza visto'], law: 'Immigration Regulations (Cap. 115A)',
      t: [['EU citizens visit up to 90 days, British citizens up to 180, with no work or regular study. BN(O) passports are not accepted for entry.',
        'I cittadini UE visitano fino a 90 giorni, i britannici fino a 180, senza lavoro né studio regolare. I passaporti BN(O) non sono accettati per l’ingresso.', 'HK-SRC-18 HK-SRC-01 HK-SRC-19']] }
  ],

  arrival: [
    { k: 'before', p: 'eu uk', t: [
      ['Download and print your e-Visa before you fly. Hong Kong applies the apostille convention: Italian certificates need only an apostille, plus a sworn English translation that also carries one.',
        'Scarica e stampa l’e-Visa prima di partire. Hong Kong applica la convenzione sull’apostille: i certificati italiani richiedono solo l’apostille, più una traduzione giurata in inglese anch’essa apostillata.', 'HK-SRC-06 HK-SRC-22']
    ] },
    { k: 'address', p: 'eu uk', t: [
      ['Banks ask for proof of a residential address issued in the last 3 months: a lease stamped by the Inland Revenue Department, a utility bill in your name or a university housing certificate.',
        'Le banche chiedono una prova dell’indirizzo di residenza emessa negli ultimi 3 mesi: un contratto d’affitto registrato all’Inland Revenue Department, una bolletta a tuo nome o un certificato di alloggio universitario.', 'HK-SRC-24']
    ] },
    { k: 'card', p: 'eu uk', t: [
      ['At the border you get a landing slip with your limit of stay instead of a passport stamp: keep it in your passport, as banks, employers and universities ask for it.',
        'Alla frontiera ricevi un landing slip con il limite di soggiorno al posto del timbro sul passaporto: conservalo nel passaporto, perché lo chiedono banche, datori e università.', 'HK-SRC-01'],
      ['Admitted for more than 180 days, you must register for a smart identity card (HKID) within 30 days of entering, or face a HK$5,000 fine: book online as soon as you have the e-Visa. The receipt (ROP 140) lets you work until the card is ready, after about 10 working days.',
        'Se sei ammesso per più di 180 giorni, devi registrarti per la carta d’identità smart (HKID) entro 30 giorni dall’ingresso, o rischi una multa di 5.000 HK$: prenota online appena hai l’e-Visa. La ricevuta (ROP 140) ti permette di lavorare finché la carta è pronta, dopo circa 10 giorni lavorativi.', 'HK-SRC-03']
    ] },
    { k: 'number', p: 'eu uk', t: [
      ['Salaries tax is territorial: you pay the lower of progressive rates up to 17% after allowances, or a flat 15% on gross income. The tax year runs from 1 April to 31 March.',
        'L’imposta sui salari è territoriale: paghi la minore tra le aliquote progressive fino al 17% dopo le deduzioni, o un’aliquota fissa del 15% sul reddito lordo. L’anno fiscale va dal 1° aprile al 31 marzo.', 'HK-SRC-04'],
      ['Foreign employees are exempt from the Mandatory Provident Fund for their first 13 months; after that, 5% of pay from you and 5% from your employer.',
        'I dipendenti stranieri sono esenti dal Mandatory Provident Fund per i primi 13 mesi; dopo, il 5% dello stipendio a carico tuo e il 5% del datore.', 'HK-SRC-05']
    ] },
    { k: 'health', p: 'eu uk', none: true },
    { k: 'bank', p: 'eu uk', t: [
      ['Banks (HSBC, Standard Chartered, Bank of China HK, Hang Seng) want passport, e-Visa, landing slip, HKID or ROP 140, contract or enrolment letter and proof of address, plus your home tax number: for Italians, the 16-character codice fiscale. Virtual banks (ZA Bank, Mox) accept only the physical HKID.',
        'Le banche (HSBC, Standard Chartered, Bank of China HK, Hang Seng) vogliono passaporto, e-Visa, landing slip, HKID o ROP 140, contratto o lettera d’iscrizione e prova dell’indirizzo, più il codice fiscale del tuo paese: per gli italiani, il codice fiscale di 16 caratteri. Le banche virtuali (ZA Bank, Mox) accettano solo la HKID fisica.', 'HK-SRC-24']
    ] },
    { k: 'keep', p: 'eu uk', t: [
      ['A first application gives no right to stay or work while it is pending; a renewal filed before your visa expires lets you wait in Hong Kong on the same terms.',
        'Una prima domanda non dà diritto a restare né a lavorare durante l’attesa; un rinnovo presentato prima della scadenza del visto ti permette di attendere a Hong Kong alle stesse condizioni.', 'HK-SRC-01'],
      ['Leaving for good, your employer files form IR56G and holds your last pay until the tax clearance letter is issued.',
        'Se parti definitivamente, il datore presenta il modulo IR56G e trattiene l’ultimo stipendio fino al rilascio della lettera di liberatoria fiscale.', 'HK-SRC-04']
    ] }
  ],

  traps: [
    { p: 'eu uk', t: ['Register for a Smart HKID within 30 days if you stay over 180 days; slots run out weeks ahead.',
      'Registrati per la Smart HKID entro 30 giorni se resti oltre 180 giorni; gli appuntamenti si esauriscono con settimane di anticipo.', 'HK-SRC-03'] },
    { p: 'eu uk', t: ['Working as a visitor, even a few hours or a trial while waiting for the e-Visa, is a crime carrying up to two years in prison.',
      'Lavorare da visitatore, anche poche ore o una prova in attesa dell’e-Visa, è un reato punito fino a due anni di carcere.', 'HK-SRC-01'] },
    { p: 'eu uk', t: ['Bought sponsors and shell companies are prosecuted; false statements carry up to 14 years.',
      'Gli sponsor comprati e le società fittizie sono perseguiti; le false dichiarazioni comportano fino a 14 anni.', 'HK-SRC-01'] },
    { p: 'eu', t: ['Banks require your home country’s tax number, the codice fiscale for Italians.',
      'Le banche richiedono il codice fiscale del tuo paese, il codice fiscale per gli italiani.', 'HK-SRC-24'] }
  ],

  open: [
    { st: 'pending', t: ['When applications under the Italy–Hong Kong working holiday agreement will open.',
      'Quando apriranno le domande nell’ambito dell’accordo di vacanza-lavoro Italia–Hong Kong.'] },
    { st: 'watch', t: ['The unlimited part-time work for students is a trial measure that could end.',
      'Il lavoro part-time senza limiti per gli studenti è una misura sperimentale che potrebbe finire.'] },
    { st: 'open', t: ['There is no public counter for the 10,000 Top Talent places for recent graduates.',
      'Non esiste un contatore pubblico dei 10.000 posti Top Talent per i neolaureati.'] }
  ]
});

/* Sources: generated by tools/visas-sources.js from research/visas_immigration/hong_kong/hong_kong_sources.md.
 * Do not edit by hand: change the register, then run the tool. */
ATLAS.visaSources('HK', {
  "HK-SRC-14": ["Immigration Department (ImmD): Entry for Study in Hong Kong - Guidebook ID(E) 996","https://www.immd.gov.hk/eng/services/visas/study.html","2026-10-05"],
  "HK-SRC-03": ["Hong Kong e-Legislation (DOJ): Registration of Persons Ordinance (Cap. 177) & Regulations (Cap. 177A)","https://www.elegislation.gov.hk/hk/cap177","2026-10-05"],
  "HK-SRC-15": ["HKSAR Government Press Releases: Suspension of Work Restrictions for Non-local Students (NOL Guidelines)","https://www.info.gov.hk/gia/general/202410/18/P2024101800482.htm","2026-10-05"],
  "HK-SRC-02": ["Hong Kong e-Legislation (DOJ): Immigration Regulations (Cap. 115A) & Immigration (Amendment) Regulation 2025","https://www.elegislation.gov.hk/hk/cap115A","2026-10-05"],
  "HK-SRC-06": ["Immigration Department (ImmD): Fee Tables (Visas, Extension of Limit of Stay & Specified Schemes)","https://www.immd.gov.hk/eng/services/fee-tables/index.html","2026-10-05"],
  "HK-SRC-13": ["Immigration Department (ImmD): Entry for Training in Hong Kong - Guidebook ID(E) 993","https://www.immd.gov.hk/eng/services/visas/training.html","2026-10-05"],
  "HK-SRC-10": ["Immigration Department (ImmD): Immigration Arrangements for Non-local Graduates (IANG)","https://www.immd.gov.hk/eng/services/visas/IANG.html","2026-10-05"],
  "HK-SRC-08": ["Immigration Department (ImmD): Top Talent Pass Scheme (TTPS) - Guidebook ID(E) 1026 & FAQ","https://www.immd.gov.hk/eng/services/visas/TTPS.html","2026-10-05"],
  "HK-SRC-09": ["Immigration Department (ImmD): Aggregate List of Eligible Universities under TTPS","https://www.immd.gov.hk/eng/services/visas/TTPS.html#eligible-universities","2026-10-05"],
  "HK-SRC-07": ["Immigration Department (ImmD): General Employment Policy (GEP) - Guidebook ID(E) 991","https://www.immd.gov.hk/eng/services/visas/GEP.html","2026-10-05"],
  "HK-SRC-20": ["Immigration Department (ImmD): Entry for Residence as Dependants in Hong Kong - ID(E) 998","https://www.immd.gov.hk/eng/services/visas/dependant.html","2026-10-05"],
  "HK-SRC-01": ["Hong Kong e-Legislation (DOJ): Immigration Ordinance (Cap. 115)","https://www.elegislation.gov.hk/hk/cap115","2026-10-05"],
  "HK-SRC-16": ["Research Grants Council (RGC / UGC): Hong Kong PhD Fellowship Scheme (HKPFS)","https://cerg1.ugc.edu.hk/hkpfs/index.html","2026-10-05"],
  "HK-SRC-04": ["Hong Kong e-Legislation (DOJ): Inland Revenue Ordinance (Cap. 112)","https://www.elegislation.gov.hk/hk/cap112","2026-10-05"],
  "HK-SRC-17": ["Labour Department & ImmD: Working Holiday Scheme (WHS) Guidelines & Partner List","https://www.whs.gov.hk/en/partners.php","2026-10-05"],
  "HK-SRC-18": ["Immigration Department (ImmD): Visit Visa / Entry Permit Requirements (Visa-Free Schedule)","https://www.immd.gov.hk/eng/services/visas/visit-visa-entry-permit.html","2026-10-05"],
  "HK-SRC-19": ["HKSAR Government Press Release: HKSAR Government does not recognize BN(O) passport as valid travel document","https://www.info.gov.hk/gia/general/202101/29/P2021012900778.htm","2026-10-05"],
  "HK-SRC-22": ["HCCH / High Court of Hong Kong: Hague Apostille Convention of 5 October 1961","https://www.hcch.net/en/states/authorities/details3/?aid=393","2026-10-05"],
  "HK-SRC-24": ["Hong Kong Monetary Authority (HKMA) / Census & Statistics…: Exchange Rates & Economic Benchmarks (05/10/2026)","https://www.censtatd.gov.hk","2026-10-05"],
  "HK-SRC-05": ["Hong Kong e-Legislation (DOJ): Mandatory Provident Fund Schemes Ordinance (Cap. 485)","https://www.elegislation.gov.hk/hk/cap485","2026-10-05"]
});

/* Atlas record: Vietnam. Read 3 October 2026; log P71
 * (research/verification/round-4h.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Vietnam had no coverage in the research library.
 * The work-permit rules come from Vietnam Law Magazine's summary of Decree
 * 219/2025/ND-CP (the decree itself was not read); the Ho Chi Minh City
 * figures are the People's Committee's, as reported by Saigon Giai Phong.
 * No family is rated.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (research/verification/round-5f.md; brief research/countries/vn-vietnam.md): standing and metrics on every hub, more employers and claims. Rent is left out: Numbeo refused access (HTTP 429). */

ATLAS.add({
  id: 'VN',
  checked: '2026-10-03',
  log: 'P71',
  summary: 'Under Decree 219/2025, active students with an internship agreement or job offer are exempt from work permits upon obtaining a certificate, while foreign experts need a degree plus 2 years of experience (1 year in tech and finance). Ho Chi Minh City’s economy grew 8.03% in 2025.',
  sectors: ['Manufacturing and exports', 'Banking and financial services', 'Technology', 'Trade and logistics', 'Tourism'],
  roles: ['logistics'],
  hubs: [
    {
      id: 'ho-chi-minh-city', name: 'Ho Chi Minh City', lat: 10.78, lon: 106.70,
      knownFor: 'A fast-growing city economy, with rising credit and foreign investment',
      why: ['vn-hcm', 'vn-gfci', 'vn-vnm'],
      sectors: ['Banking and financial services', 'Retail', 'Manufacturing and exports', 'Technology'],
      employers: [
        { name: 'Vinamilk', note: 'headquartered in the city; nearly 10,000 employees', c: 'vn-vnm' },
        { t: 'Foreign investors', note: 'over US$8.1 billion of direct investment in 2025', c: 'vn-hcm' }
      ],
      demand: {
        business: ['present', 'vn-vnm'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['vn-gfci', 'vn-hcm'] }
      ],
      metrics: {
        pop: { v: 9543600, year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Ho Chi Minh City, PDF page 820 (the city within its boundaries before the 1 July 2025 mergers; average population, 2024 preliminary)', seen: '2026-10-03' },
        gdp: { v: 1778271.1, cur: 'VND', year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Ho Chi Minh City, PDF page 820 (the city within its boundaries before the 1 July 2025 mergers; gross regional domestic product at current prices, 2024 preliminary)', seen: '2026-10-03' },
        wage: { v: 14324000, cur: 'VND', basis: 'mean', year: 2023, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Ho Chi Minh City, PDF page 820 (the city within its boundaries before the 1 July 2025 mergers; average monthly compensation of employees in enterprises, 2023, the latest year given)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'hanoi', name: 'Hanoi', lat: 21.03, lon: 105.85,
      knownFor: 'The capital',
      why: ['vn-hanoi', 'vn-fpt', 'vn-tcb'],
      sectors: ['Government', 'Technology', 'Banking'],
      employers: [
        { name: 'FPT Corporation', note: 'headquartered in Hanoi; 54,110 employees', c: 'vn-fpt' },
        { name: 'Techcombank', note: 'head office in Hanoi; 12,705 employees (2025)', c: 'vn-tcb' },
        { t: 'Businesses in the capital', note: 'GRDP growth 8.16% (2025)', c: 'vn-hanoi' }
      ],
      demand: {
        finance: ['present', 'vn-tcb'],
        it: ['present', 'vn-fpt'],
        software: ['present', 'vn-fpt'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['present', 'vn-tcb'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['vn-fpt'] },
        { f: 'finance', s: [4, 2, 1], c: ['vn-tcb'] }
      ],
      metrics: {
        pop: { v: 8717600, year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Hanoi, PDF page 30 (the city within its boundaries before the 1 July 2025 mergers; average population, 2024 preliminary)', seen: '2026-10-03' },
        gdp: { v: 1425521, cur: 'VND', year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Hanoi, PDF page 30 (the city within its boundaries before the 1 July 2025 mergers; gross regional domestic product at current prices, 2024 preliminary)', seen: '2026-10-03' },
        wage: { v: 12817000, cur: 'VND', basis: 'mean', year: 2023, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Hanoi, PDF page 30 (the city within its boundaries before the 1 July 2025 mergers; average monthly compensation of employees in enterprises, 2023, the latest year given)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'hai-phong', name: 'Hai Phong', lat: 20.86, lon: 106.68,
      knownFor: 'The northern port city',
      why: ['vn-haiphong', 'vn-hp-port'],
      sectors: ['Ports and logistics', 'Manufacturing', 'Logistics'],
      employers: [
        { t: 'Port operators', note: '2 million TEU handled for the first time in 2025', c: 'vn-hp-port' },
        { t: 'Port and manufacturing businesses', note: 'GRDP growth 11.81% (2025)', c: 'vn-haiphong' }
      ],
      demand: {
        logistics: ['strong', 'vn-hp-port', 'vn-haiphong'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [4, 2, 1], c: ['vn-hp-port', 'vn-haiphong'] }
      ],
      metrics: {
        pop: { v: 2124500, year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Hai Phong, PDF page 110 (the city within its boundaries before the 1 July 2025 mergers; average population, 2024 preliminary)', seen: '2026-10-03' },
        gdp: { v: 445994.8, cur: 'VND', year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Hai Phong, PDF page 110 (the city within its boundaries before the 1 July 2025 mergers; gross regional domestic product at current prices, 2024 preliminary)', seen: '2026-10-03' },
        wage: { v: 12233000, cur: 'VND', basis: 'mean', year: 2023, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Hai Phong, PDF page 110 (the city within its boundaries before the 1 July 2025 mergers; average monthly compensation of employees in enterprises, 2023, the latest year given)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'da-nang', name: 'Da Nang', lat: 16.05, lon: 108.20,
      knownFor: 'The central coast’s main city',
      why: ['vn-danang', 'vn-fpt', 'vn-gfci'],
      sectors: ['Tourism', 'Technology', 'Ports and logistics'],
      employers: [
        { name: 'FPT Corporation', note: 'semiconductor R&D centre in Da Nang', c: 'vn-fpt' },
        { t: 'Businesses in the city', note: 'VND316.1 trillion GRDP (2025)', c: 'vn-danang' }
      ],
      demand: {
        it: ['present', 'vn-fpt'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['vn-fpt', 'vn-gfci'] }
      ],
      metrics: {
        pop: { v: 1276000, year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Da Nang, PDF page 531 (the city within its boundaries before the 1 July 2025 mergers; average population, 2024 preliminary)', seen: '2026-10-03' },
        gdp: { v: 151307.0, cur: 'VND', year: 2024, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Da Nang, PDF page 531 (the city within its boundaries before the 1 July 2025 mergers; gross regional domestic product at current prices, 2024 preliminary)', seen: '2026-10-03' },
        wage: { v: 10948000, cur: 'VND', basis: 'mean', year: 2023, area: 'city', tag: 'data', src: 'https://www.nso.gov.vn/wp-content/uploads/2025/11/Sach-KT-XH-63-tinh-TP-2024.-PDF.pdf', by: 'National Statistics Office of Vietnam, Socio-economic Statistical Data of 63 Provinces and Cities 2020–2024, key indicators of Da Nang, PDF page 531 (the city within its boundaries before the 1 July 2025 mergers; average monthly compensation of employees in enterprises, 2023, the latest year given)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['vn-lang'] },
    { k: 'Recruiting calendar', c: ['vn-cal'] },
    { k: 'Where demand is now', c: ['vn-hcm', 'vn-fpt', 'vn-tcb'] },
    { k: 'Graduate labour market', c: ['vn-grad-lab'] }
  ],

  briefs: [
    ['countries/vn-vietnam.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Ho Chi Minh City’s jobs and graduate hiring by sector are not given in any source read, so only business is rated, on one company headquarters.',
    'Vietnam was not covered by the research library before this record.',
    'The pay, output and population metrics are for each city within its boundaries before the mergers of 1 July 2025 (the national statistics office’s 63-province book, 2024; pay is for 2023), so they do not match the merged city areas used in the growth claims above; Vietcombank, VinFast, Viettel and the Ho Chi Minh City banks were not read.',
    'Hanoi’s, Da Nang’s and Hai Phong’s ratings rest on one or two named employers or a port statistic, not on jobs by sector.'
  ],

  claims: {
    'vn-lang': { t: 'English is tested or certified for the better graduate roles: FPT Software’s 2026 fresher post asks for English equivalent to TOEIC 700+, Vietcombank’s outstanding-graduate track asks for IELTS 7.0, TOEIC 785, TOEFL 550 or CEFR C1, and Grant Thornton Hanoi asks for fluent English; in the 2018 British Council survey of 150 employers, 77% of foreign companies and 76% of conglomerates said English skills were particularly important, while Vietnamese remains the language of local firms.', tag: 'practitioner consensus', src: 'https://opportunities-insight.britishcouncil.org/download/data/37396/15504', by: 'British Council, Employability in Focus: Vietnam (2018/2019); 123job (FPT Software); Vietnam Banks Association (Vietcombank wave III 2026); Grant Thornton Vietnam (all read 8 Oct 2026)', seen: '2026-10-08' },
    'vn-cal': { t: 'Graduate programmes in Vietnam recruit mainly from February to June: Viettel opened registration on 12 February 2026 and its trainees started on 11 May, FPT Software’s 2026 fresher post gave a deadline of 3 April, Vietcombank’s wave III closed on 14 June 2026 for posts needing no experience and BIDV’s wave I on 16 June 2026; Grant Thornton Hanoi’s January–March 2026 internship closed on 17 September 2025; Tet fell on 14–22 February 2026 and is followed by a hiring peak for experienced staff until April.', tag: 'employer-stated', src: 'https://thitruongtaichinhtiente.vn/viettel-talent-2026-chinh-thuc-khai-giang-mo-ra-he-sinh-thai-phat-trien-nhan-tai-cong-nghe-82841.html', by: 'Viettel Talent 2026 report; 123job (FPT Software); Vietnam Banks Association (Vietcombank, BIDV); Grant Thornton Vietnam; Rivermate; Vietcetera (all read 8 Oct 2026)', seen: '2026-10-08' },
    'vn-grad-lab': { t: 'Unemployment among 15-to-24-year-olds was 8.86% in the first quarter of 2026 (9.04% in the fourth quarter of 2025 and 8.6% for 2025), against 2.23% for all working-age people in the second quarter; about 1.4 million young people, 10.2% of the youth population, were neither working nor in education or training. We found no unemployment rate for graduates alone; VnEconomy reports that around 70% of university graduates still need retraining after entering the workforce.', tag: 'data', src: 'https://www.nso.gov.vn/en/data-and-statistics/2026/04/report-on-socio-economic-situation-in-quarter-i-in-2026/', by: 'National Statistics Office of Vietnam, Q1 and Q2 2026 reports; VietnamPlus (10 January 2026); VnEconomy (24 August 2026), all read 8 Oct 2026', seen: '2026-10-08' },
    'vn-hcm': { t: 'Ho Chi Minh City’s economy grew 8.03% in 2025; outstanding credit exceeded VND5 quadrillion (about US$190 billion), up more than 13%, foreign direct investment passed US$8.1 billion, up more than 21%, and the digital economy was about 25% of output.', tag: 'data', src: 'https://en.sggp.org.vn/ho-chi-minh-citys-grdp-growth-in-2025-reaches-803-percent-post123027.html', by: 'Ho Chi Minh City People’s Committee figures, reported by Saigon Giai Phong (6 Jan 2026)', seen: '2026-10-03' },
    'vn-hanoi': { t: 'Hanoi’s GRDP grew 8.16% in 2025, 16th among Vietnam’s localities, according to the National Statistics Office.', tag: 'data', src: 'https://en.vietnamplus.vn/grdp-growth-gains-momentum-across-provinces-in-2025-post335439.vnp', by: 'VietnamPlus (Vietnam News Agency), on National Statistics Office data (6 Jan 2026)', seen: '2026-10-03' },
    'vn-haiphong': { t: 'Hai Phong’s GRDP grew 11.81% in 2025, contributing 8.58% of national growth, according to the National Statistics Office.', tag: 'data', src: 'https://en.vietnamplus.vn/grdp-growth-gains-momentum-across-provinces-in-2025-post335439.vnp', by: 'VietnamPlus (Vietnam News Agency), on National Statistics Office data (6 Jan 2026)', seen: '2026-10-03' },
    'vn-danang': { t: 'Da Nang’s GRDP grew 9.18% in 2025 to an estimated VND316.1 trillion, ninth among Vietnam’s 34 localities and second among its six centrally run cities.', tag: 'data', src: 'https://en.vneconomy.vn/da-nang-posts-2025-grdp-growth-of-918.htm', by: 'VnEconomy, on the city statistics office’s figures (5 Jan 2026)', seen: '2026-10-03' },
    'vn-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Ho Chi Minh City 67th in the world, up 17 places, and lists Da Nang for the first time, in 71st position.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 1', seen: '2026-10-03' },
    'vn-fpt': { t: 'FPT Corporation’s headquarters is at 10 Pham Van Bach Street, Cau Giay, Hanoi; it had 54,110 employees in more than 30 countries and territories, and describes a semiconductor R&D centre in Da Nang.', tag: 'employer-stated', src: 'https://bctn2025.fpt.com/wp-content/uploads/2026/04/Annual-Report-2025.pdf', by: 'FPT Corporation, Annual Report 2025', seen: '2026-10-03' },
    'vn-tcb': { t: 'Techcombank’s head office is Techcombank Tower, 6 Quang Trung Street, Hanoi, and its total workforce reached 12,705 employees at 31 December 2025, up from 11,848 a year earlier.', tag: 'employer-stated', src: 'https://cmsv5.fiingroup.vn/medialib/FG/2026/2026-04/2026-04-07/TCB/20260403--TCB--Annual-Report-2025.pdf', by: 'Techcombank, Annual Report 2025', seen: '2026-10-03' },
    'vn-vnm': { t: 'Vinamilk’s headquarters is at 10 Tan Trao Street, Tan My Ward, Ho Chi Minh City, and its chief executive thanks nearly 10,000 employees.', tag: 'employer-stated', src: 'https://d8um25gjecm9v.cloudfront.net/cms/20260319_VNM_Bao_cao_thuong_nien_2025_EN_08b4412765.pdf', by: 'Vinamilk (Vietnam Dairy Products), Annual Report 2025', seen: '2026-10-03' },
    'vn-hp-port': { t: 'Hai Phong Port handled 2 million TEU for the first time in 2025; cargo through the Hai Phong port area was over 104 million tonnes in the first 11 months, up about 8%, and Hateco Hai Phong International Container Terminal opened in February 2025.', tag: 'data', src: 'https://en.haiphong.gov.vn/news/cargo-throughput-at-hai-phong-port-maintains-strong-growth-836813', by: 'Hai Phong city government portal, cargo throughput at Hai Phong port (December 2025)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'English is tested or certified for the better graduate roles: FPT Software’s 2026 fresher post asks for English equivalent to TOEIC 700+, Vietcombank’s outstanding-graduate track asks for IELTS 7.0, TOEIC 785, TOEFL 550 or CEFR C1, and Grant Thornton Hanoi asks for fluent English; in the 2018 British Council survey of 150 employers, 77% of foreign companies and 76% of conglomerates said English skills were particularly important, while Vietnamese remains the language of local firms.':
    'L’inglese è verificato o certificato per i migliori ruoli per laureati: l’annuncio per fresher di FPT Software del 2026 chiede un inglese equivalente a TOEIC 700+, la via per i migliori laureati di Vietcombank chiede IELTS 7,0, TOEIC 785, TOEFL 550 o CEFR C1, e Grant Thornton a Hanoi chiede un inglese fluente; nell’indagine del British Council del 2018 su 150 datori di lavoro, il 77% delle aziende straniere e il 76% dei conglomerati ha detto che l’inglese è particolarmente importante, mentre il vietnamita resta la lingua delle aziende locali.',
  'Graduate programmes in Vietnam recruit mainly from February to June: Viettel opened registration on 12 February 2026 and its trainees started on 11 May, FPT Software’s 2026 fresher post gave a deadline of 3 April, Vietcombank’s wave III closed on 14 June 2026 for posts needing no experience and BIDV’s wave I on 16 June 2026; Grant Thornton Hanoi’s January–March 2026 internship closed on 17 September 2025; Tet fell on 14–22 February 2026 and is followed by a hiring peak for experienced staff until April.':
    'I programmi per laureati in Vietnam reclutano soprattutto da febbraio a giugno: Viettel ha aperto le iscrizioni il 12 febbraio 2026 e i tirocinanti sono partiti l’11 maggio, l’annuncio per fresher di FPT Software del 2026 indicava la scadenza del 3 aprile, la terza ondata di Vietcombank si è chiusa il 14 giugno 2026 per i posti senza esperienza e la prima ondata di BIDV il 16 giugno 2026; il tirocinio di gennaio-marzo 2026 di Grant Thornton a Hanoi si è chiuso il 17 settembre 2025; Tet è caduto il 14-22 febbraio 2026 ed è seguito da un picco di assunzioni di personale con esperienza fino ad aprile.',
  'Unemployment among 15-to-24-year-olds was 8.86% in the first quarter of 2026 (9.04% in the fourth quarter of 2025 and 8.6% for 2025), against 2.23% for all working-age people in the second quarter; about 1.4 million young people, 10.2% of the youth population, were neither working nor in education or training. We found no unemployment rate for graduates alone; VnEconomy reports that around 70% of university graduates still need retraining after entering the workforce.':
    'La disoccupazione tra i 15 e i 24 anni era dell’8,86% nel primo trimestre 2026 (9,04% nel quarto trimestre 2025 e 8,6% per il 2025), contro il 2,23% di tutte le persone in età lavorativa nel secondo trimestre; circa 1,4 milioni di giovani, il 10,2% della popolazione giovanile, non lavoravano né studiavano né seguivano una formazione. Non abbiamo trovato un tasso di disoccupazione dei soli laureati; VnEconomy riporta che circa il 70% dei laureati ha ancora bisogno di riqualificazione dopo l’ingresso nel mondo del lavoro.',
  'Under Decree 219/2025, active students with an internship agreement or job offer are exempt from work permits upon obtaining a certificate, while foreign experts need a degree plus 2 years of experience (1 year in tech and finance). Ho Chi Minh City’s economy grew 8.03% in 2025.':
    'Con il Decreto 219/2025 gli studenti attivi con accordo di stage o offerta sono esenti dal permesso di lavoro con certificato, mentre gli esperti stranieri richiedono una laurea e 2 anni di esperienza (1 anno in tech e finanza). Nel 2025 l’economia di Ho Chi Minh City è cresciuta dell’8,03%.',
  'Manufacturing and exports': 'Manifattura ed esportazioni', 'Banking and financial services': 'Banche e servizi finanziari', 'Trade and logistics': 'Commercio e logistica',
  'A fast-growing city economy, with rising credit and foreign investment': 'Un’economia urbana in rapida crescita, con credito e investimenti esteri in aumento',
  'Foreign investors': 'Gli investitori esteri', 'over US$8.1 billion of direct investment in 2025': 'oltre 8,1 miliardi di US$ di investimenti diretti nel 2025',
  'Ho Chi Minh City’s jobs and graduate hiring by sector are not given in any source read, so only business is rated, on one company headquarters.':
    'I posti di lavoro e le assunzioni di neolaureati per settore a Ho Chi Minh City non figurano in nessuna fonte letta, quindi è valutato solo il business, sulla base della sede di una sola azienda.',
  'Vietnam was not covered by the research library before this record.': 'Il Vietnam non era coperto dalla biblioteca di ricerca prima di questa scheda.',
  'Ho Chi Minh City’s economy grew 8.03% in 2025; outstanding credit exceeded VND5 quadrillion (about US$190 billion), up more than 13%, foreign direct investment passed US$8.1 billion, up more than 21%, and the digital economy was about 25% of output.':
    'Nel 2025 l’economia di Ho Chi Minh City è cresciuta dell’8,03%; il credito in essere ha superato 5 milioni di miliardi di VND (circa 190 miliardi di US$), oltre il 13% in più, gli investimenti diretti esteri hanno superato 8,1 miliardi di US$, oltre il 21% in più, e l’economia digitale valeva circa il 25% della produzione.',
  'The capital':
    'La capitale',
  'Businesses in the capital':
    'Le imprese della capitale',
  'GRDP growth 8.16% (2025)':
    'crescita del PIL regionale 8,16% (2025)',
  'The northern port city':
    'La città portuale del nord',
  'Ports and logistics':
    'Porti e logistica',
  'Port and manufacturing businesses':
    'Le imprese portuali e manifatturiere',
  'GRDP growth 11.81% (2025)':
    'crescita del PIL regionale 11,81% (2025)',
  'The central coast’s main city':
    'La città principale della costa centrale',
  'Businesses in the city':
    'Le imprese della città',
  'VND316.1 trillion GRDP (2025)':
    '316,1 mila miliardi di VND di PIL regionale (2025)',
  'Hanoi’s GRDP grew 8.16% in 2025, 16th among Vietnam’s localities, according to the National Statistics Office.':
    'Secondo l’Ufficio nazionale di statistica, nel 2025 il PIL regionale di Hanoi è cresciuto dell’8,16%, 16º tra le località del Vietnam.',
  'Hai Phong’s GRDP grew 11.81% in 2025, contributing 8.58% of national growth, according to the National Statistics Office.':
    'Secondo l’Ufficio nazionale di statistica, nel 2025 il PIL regionale di Hai Phong è cresciuto dell’11,81%, contribuendo per l’8,58% alla crescita nazionale.',
  'Da Nang’s GRDP grew 9.18% in 2025 to an estimated VND316.1 trillion, ninth among Vietnam’s 34 localities and second among its six centrally run cities.':
    'Nel 2025 il PIL regionale di Da Nang è cresciuto del 9,18% a circa 316,1 mila miliardi di VND, nono tra le 34 località del Vietnam e secondo tra le sei città a gestione centrale.',
  'Hanoi’s, Da Nang’s and Hai Phong’s ratings rest on one or two named employers or a port statistic, not on jobs by sector.':
    'Le valutazioni di Hanoi, Da Nang e Hai Phong si basano su uno o due datori di lavoro citati o su una statistica portuale, non sui posti di lavoro per settore.',

  'The Global Financial Centres Index 40 (September 2026) ranks Ho Chi Minh City 67th in the world, up 17 places, and lists Da Nang for the first time, in 71st position.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Ho Chi Minh City al 67º posto nel mondo, in salita di 17 posizioni, e inserisce per la prima volta Da Nang, al 71º posto.',
  'FPT Corporation’s headquarters is at 10 Pham Van Bach Street, Cau Giay, Hanoi; it had 54,110 employees in more than 30 countries and territories, and describes a semiconductor R&D centre in Da Nang.':
    'La sede di FPT Corporation è al 10 di Pham Van Bach Street, a Cau Giay, Hanoi; contava 54.110 dipendenti in più di 30 paesi e territori e descrive un centro di R&S sui semiconduttori a Da Nang.',
  'Techcombank’s head office is Techcombank Tower, 6 Quang Trung Street, Hanoi, and its total workforce reached 12,705 employees at 31 December 2025, up from 11,848 a year earlier.':
    'La sede centrale di Techcombank è la Techcombank Tower, al 6 di Quang Trung Street, a Hanoi, e il suo personale totale ha raggiunto 12.705 dipendenti al 31 dicembre 2025, contro 11.848 un anno prima.',
  'Vinamilk’s headquarters is at 10 Tan Trao Street, Tan My Ward, Ho Chi Minh City, and its chief executive thanks nearly 10,000 employees.':
    'La sede di Vinamilk è al 10 di Tan Trao Street, nel quartiere di Tan My, a Ho Chi Minh City, e la sua amministratrice delegata ringrazia quasi 10.000 dipendenti.',
  'Hai Phong Port handled 2 million TEU for the first time in 2025; cargo through the Hai Phong port area was over 104 million tonnes in the first 11 months, up about 8%, and Hateco Hai Phong International Container Terminal opened in February 2025.':
    'Nel 2025 il porto di Hai Phong ha movimentato per la prima volta 2 milioni di TEU; nei primi 11 mesi le merci nell’area portuale di Hai Phong hanno superato i 104 milioni di tonnellate, in aumento dell’8% circa, e l’Hateco Hai Phong International Container Terminal è entrato in funzione a febbraio 2025.',
  'The pay, output and population metrics are for each city within its boundaries before the mergers of 1 July 2025 (the national statistics office’s 63-province book, 2024; pay is for 2023), so they do not match the merged city areas used in the growth claims above; Vietcombank, VinFast, Viettel and the Ho Chi Minh City banks were not read.':
    'I dati su stipendi, produzione e popolazione si riferiscono a ciascuna città entro i confini precedenti alle fusioni del 1° luglio 2025 (il volume sulle 63 province dell’ufficio nazionale di statistica, 2024; gli stipendi sono del 2023), quindi non coincidono con le aree urbane fuse usate nelle affermazioni sulla crescita sopra; Vietcombank, VinFast, Viettel e le banche di Ho Chi Minh City non sono state lette.',
  'Country brief: hubs, employers, pay and standing': 'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'headquartered in the city; nearly 10,000 employees': 'con sede nella città; quasi 10.000 dipendenti',
  'headquartered in Hanoi; 54,110 employees': 'con sede a Hanoi; 54.110 dipendenti',
  'head office in Hanoi; 12,705 employees (2025)': 'sede centrale a Hanoi; 12.705 dipendenti (2025)',
  'Port operators': 'Operatori portuali',
  '2 million TEU handled for the first time in 2025': '2 milioni di TEU movimentati per la prima volta nel 2025',
  'semiconductor R&D centre in Da Nang': 'centro di R&S sui semiconduttori a Da Nang'
});

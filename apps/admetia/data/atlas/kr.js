/* Atlas record: South Korea. Read 3 October 2026; log P65
 * (research/verification/round-4g.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. South Korea had no coverage in the research library.
 * The job-seeker visa rules are read in the Ministry of Justice press release
 * of 27 October 2025 (Korean, PDF from immigration.go.kr, extracted locally).
 * Student work hours come from university pages: no government page stating
 * them was read. No family is rated: no city statistic by sector was read for
 * Seoul (the figures found were behind Statista).
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (log: research/verification/round-5e.md): regional income 2024, census 2025,
 * regional wage survey April 2026, GFCI 40, Startup Genome 2026. Metrics: pop is the city, gdp and wage the
 * region (Seoul, Busan and Incheon are provinces in their own right; Pangyo is in Gyeonggi). */

ATLAS.add({
  id: 'KR',
  checked: '2026-10-03',
  log: 'P65',
  summary: 'Since October 2025, graduates of Korean universities can hold the job-seeker visa a year at a time for up to three years, and graduates aged 29 or under from the world’s top 200 universities skip its points test. Seoul ranks seventh among the world’s financial centres and produces 22.5% of national output; Busan is Korea’s port and Pangyo its software cluster. Only 62.8% of university graduates of the class of 2024 were counted as employed.',
  sectors: ['Electronics and semiconductors', 'Automotive', 'Banking and financial services', 'Technology', 'Media and entertainment'],
  roles: ['logistics', 'it', 'software'],
  hubs: [
    {
      id: 'seoul', name: 'Seoul', lat: 37.57, lon: 126.98,
      knownFor: 'The capital and financial centre, seventh in the Global Financial Centres Index',
      why: ['kr-gfci', 'kr-gfci40', 'kr-grdp', 'kr-gser', 'kr-shinhan', 'kr-wage', 'kr-pop'],
      sectors: ['Banking and financial services', 'Fintech', 'Technology', 'Headquarters of large companies'],
      employers: [
        { t: 'Fintech companies at the Seoul Fintech Lab, Yeouido', c: 'kr-gfci' },
        { name: 'Shinhan Financial Group', note: 'head office in Jung-gu, central Seoul', c: 'kr-shinhan' },
        { t: 'Banks and insurers', note: 'finance and insurance pay ₩10.17 million a month in Seoul against ₩4.85 million for all sectors', c: 'kr-wage' }
      ],
      demand: {
        business: ['strong', 'kr-grdp'], finance: ['strong', 'kr-gfci', 'kr-gfci40', 'kr-grdp'], economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 4, 4], c: ['kr-gfci40', 'kr-gfci', 'kr-grdp'] },
        { f: 'business', s: [5, 3, 2], c: ['kr-grdp'] }
      ],
      metrics: {
        pop: { v: 9315000, year: 2025, area: 'city', tag: 'data', src: 'https://mods.go.kr/board.es?act=view&bid=203&list_no=446219&mid=a10301020200', by: 'Statistics Korea (National Data Office), 2025 Population and Housing Census, register-based results, 1 November 2025 (Seoul, in thousands)', seen: '2026-10-03' },
        gdp: { v: 575000, cur: 'KRW', year: 2024, area: 'region', tag: 'data', src: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156736443&call_from=rsslink', by: 'Statistics Korea (National Data Office), 2024 regional income (provisional), nominal GRDP of Seoul (trillion won × 1,000)', seen: '2026-10-03' },
        wage: { v: 4852000, cur: 'KRW', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20022', by: 'Ministry of Employment and Labor, regional wage and working-hours survey, April 2026: total monthly wage per regular worker in Seoul (before tax, bonuses and overtime included)', seen: '2026-10-03' },
        rent: { v: 1187802, cur: 'KRW', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Seoul', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-04' }
      },
      programmes: []
    },
    {
      id: 'busan', name: 'Busan', lat: 35.18, lon: 129.08,
      knownFor: 'Korea’s largest port and second city',
      why: ['kr-busan', 'kr-gfci40', 'kr-gser', 'kr-grdp', 'kr-wage'],
      sectors: ['Ports and logistics', 'Shipping', 'Manufacturing'],
      employers: [
        { t: 'Port of Busan', note: '24.4 million TEU (2024)', c: 'kr-busan' }
      ],
      demand: {
        logistics: ['dominant', 'kr-busan'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [5, 4, 3], c: ['kr-busan'] },
        { f: 'finance', s: [4, 3, 2], c: ['kr-gfci40'] }
      ],
      metrics: {
        pop: { v: 3235000, year: 2025, area: 'city', tag: 'data', src: 'https://mods.go.kr/board.es?act=view&bid=203&list_no=446219&mid=a10301020200', by: 'Statistics Korea (National Data Office), 2025 Population and Housing Census, register-based results, 1 November 2025 (Busan, in thousands)', seen: '2026-10-03' },
        gdp: { v: 121100, cur: 'KRW', year: 2024, area: 'region', tag: 'data', src: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156736443&call_from=rsslink', by: 'Statistics Korea (National Data Office), 2024 regional income (provisional), nominal GRDP of Busan (trillion won × 1,000)', seen: '2026-10-03' },
        wage: { v: 3741000, cur: 'KRW', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20022', by: 'Ministry of Employment and Labor, regional wage and working-hours survey, April 2026: total monthly wage per regular worker in Busan (before tax, bonuses and overtime included)', seen: '2026-10-03' },
        rent: { v: 965714, cur: 'KRW', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Busan', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'pangyo', name: 'Seongnam (Pangyo)', lat: 37.40, lon: 127.11,
      knownFor: 'Korea’s software and games cluster south of Seoul',
      why: ['kr-pangyo', 'kr-grdp', 'kr-wage'],
      sectors: ['Software and ICT', 'Gaming', 'Life sciences'],
      employers: [
        { name: 'Kakao', c: 'kr-pangyo' },
        { name: 'NCSOFT', c: 'kr-pangyo' },
        { name: 'Nexon', c: 'kr-pangyo' }
      ],
      demand: {
        it: ['strong', 'kr-pangyo'],
        software: ['strong', 'kr-pangyo'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'software', s: [4, 3, 2], c: ['kr-pangyo'] },
        { f: 'it', s: [4, 3, 2], c: ['kr-pangyo'] }
      ],
      metrics: {
        pop: { v: 894000, year: 2025, area: 'city', tag: 'data', src: 'https://mods.go.kr/board.es?act=view&bid=203&list_no=446219&mid=a10301020200', by: 'Statistics Korea (National Data Office), 2025 Population and Housing Census, register-based results, 1 November 2025 (Seongnam city, which contains Pangyo, in thousands)', seen: '2026-10-03' },
        gdp: { v: 651400, cur: 'KRW', year: 2024, area: 'region', tag: 'data', src: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156736443&call_from=rsslink', by: 'Statistics Korea (National Data Office), 2024 regional income (provisional), nominal GRDP of Gyeonggi Province, which contains Seongnam (trillion won × 1,000)', seen: '2026-10-03' },
        wage: { v: 4309000, cur: 'KRW', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20022', by: 'Ministry of Employment and Labor, regional wage and working-hours survey, April 2026: total monthly wage per regular worker in Gyeonggi Province (before tax, bonuses and overtime included)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'incheon', name: 'Incheon (Songdo)', lat: 37.39, lon: 126.64,
      knownFor: 'A biopharmaceutical manufacturing cluster beside the main airport',
      why: ['kr-incheon', 'kr-sbio', 'kr-gfci40', 'kr-grdp'],
      sectors: ['Pharmaceuticals', 'Logistics', 'Life sciences'],
      employers: [
        { name: 'Samsung Biologics', note: 'address: Songdo, Yeonsu-gu', c: 'kr-sbio' },
        { name: 'Celltrion', c: 'kr-incheon' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['kr-grdp', 'kr-incheon'] }
      ],
      metrics: {
        pop: { v: 3094000, year: 2025, area: 'city', tag: 'data', src: 'https://mods.go.kr/board.es?act=view&bid=203&list_no=446219&mid=a10301020200', by: 'Statistics Korea (National Data Office), 2025 Population and Housing Census, register-based results, 1 November 2025 (Incheon, in thousands)', seen: '2026-10-03' },
        gdp: { v: 125600, cur: 'KRW', year: 2024, area: 'region', tag: 'data', src: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156736443&call_from=rsslink', by: 'Statistics Korea (National Data Office), 2024 regional income (provisional), nominal GRDP of Incheon (trillion won × 1,000)', seen: '2026-10-03' },
        wage: { v: 3899000, cur: 'KRW', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20022', by: 'Ministry of Employment and Labor, regional wage and working-hours survey, April 2026: total monthly wage per regular worker in Incheon (before tax, bonuses and overtime included)', seen: '2026-10-03' },
        rent: { v: 804679, cur: 'KRW', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Incheon', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['kr-lang'] },
    { k: 'Recruiting calendar', c: ['kr-calendar'] },
    { k: 'Where demand is now', c: ['kr-gfci40', 'kr-grdp', 'kr-busan', 'kr-pangyo', 'kr-samsung-plan'] },
    { k: 'Pay across regions', c: ['kr-wage'] },
    { k: 'Graduate labour market', c: ['kr-grad', 'kr-fki'] }
  ],

  briefs: [
    ['countries/kr-south-korea.md', 'Country brief: four hubs, employers, pay and standing']
  ],
  gaps: [
    'No family is rated in Busan’s finance, Pangyo’s business roles or anywhere in Incheon: the sources read give Incheon’s biopharmaceutical capacity, not hiring by role.',
    'Seoul’s ratings (finance, business: strong) rest on the financial-centre ranking and regional accounts; no source read gives Seoul’s jobs or graduate hiring by sector, and no graduate recruiting calendar or starting-pay statistic for Korea was read.',
    'South Korea was not covered by the research library before this record.',
    'Student work hours come from university pages, not the immigration service; whether the 30 hours depend on Korean-language level was not confirmed.',
    'Which world rankings count for the top-200 rule is not stated in the press release read.',
    'Entry for EU passports, pay, tax and the language demanded by employers were not researched.',
    'Ulsan, Daejeon and Daegu are not mapped as hubs; Hyundai’s Ulsan plant page could not be read.',
    'Employer pages for KB, Hana, Hyundai, Samsung Electronics, Naver, NCSOFT and Celltrion did not load or gave no address, so only Shinhan and Samsung Biologics are named for Seoul and Incheon; the Pangyo firms rest on a state agency’s list.',
    'Wages are regional (April 2026, total pay per regular worker including overtime and bonuses), GDP is the region (Pangyo: Gyeonggi Province), population is the city; Seongnam has no Numbeo rent, so Pangyo has none. Other rents are crowd-sourced and read through a text proxy.'
  ],

  claims: {
    'kr-gfci': { t: 'Seoul ranked 8th of 137 cities in the 39th Global Financial Centres Index (March 2026), its fourth year in the top ten; the city supports growth-stage fintech companies at the Seoul Fintech Lab in Yeouido.', tag: 'data', src: 'https://english.seoul.go.kr/seoul-ranks-8th-in-global-financial-centres-index-up-two-places-and-holding-top-10-for-four-straight-years/', by: 'Seoul Metropolitan Government, 27 Mar 2026', seen: '2026-10-03' },
    'kr-busan': { t: 'As of 2024 the Port of Busan, Korea’s largest port, handled 24.4 million TEU of containers, 76.6% of the country’s container cargo and 96.8% of its transhipment cargo; it is the world’s seventh-largest container port.', tag: 'data', src: 'https://www.investkorea.org/bsn-en/cntnts/i-1468/web.do', by: 'KOTRA / Invest Korea, Busan: strategic place for global logistics', seen: '2026-10-03' },
    'kr-pangyo': { t: 'Pangyo Techno Valley in Seongnam has about 64,000 employees; its tenant companies sold KRW 107.2 trillion in 2019, and its ICT firms include Kakao, NHN, NCSOFT, Nexon and AhnLab.', tag: 'data', src: 'https://www.investkorea.org/ik-en/bbs/i-5045/detail.do?ntt_sn=490755', by: 'KOTRA / Invest Korea, Pangyo Techno Valley overview', seen: '2026-10-03' },
    'kr-incheon': { t: 'Songdo, in the Incheon Free Economic Zone, has the world’s largest biopharmaceutical production capacity of any city, ahead of San Francisco and Singapore; Celltrion, Samsung Biologics and Samsung Bioepis are based there.', tag: 'data', src: 'https://www.investkorea.org/ik-en/bbs/i-2486/detail.do?ntt_sn=490763', by: 'KOTRA / Invest Korea, Songdo bio cluster (6 Aug 2021)', seen: '2026-10-03' },
    'kr-gfci40': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Seoul seventh in the world (rating 752) and fifth in Asia/Pacific, and Busan 22nd (737) and ninth in Asia/Pacific; Incheon is an associate centre, close to the 150 assessments needed to be ranked.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 9 and the associate-centres list', seen: '2026-10-03' },
    'kr-gser': { t: 'Startup Genome’s 2026 report ranks Seoul ninth in the world and third in Asia, fourth in the world for funding momentum, fourth in Asia in its AI-native cluster ranking and in the top ten worldwide for talent strength; Busan is in the 71–80 band of its emerging ecosystems, 26th to 30th in Asia.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/seoul', by: 'Startup Genome, GSER 2026, Seoul and Busan ecosystem pages (https://startupgenome.com/ecosystems/busan)', seen: '2026-10-03' },
    'kr-grdp': { t: 'In 2024 nominal regional GDP was ₩651.4 trillion in Gyeonggi, ₩575.0 trillion in Seoul (22.5% of the country’s ₩2,560.8 trillion), ₩125.6 trillion in Incheon and ₩121.1 trillion in Busan; services were 92.4% of Seoul’s output, Seoul produced 33.0% of the country’s services, and finance and insurance were 7.0% of its GDP.', tag: 'data', src: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156736443&call_from=rsslink', by: 'Statistics Korea (National Data Office), 2024 regional income (provisional) press release', seen: '2026-10-03' },
    'kr-wage': { t: 'In April 2026 total monthly pay per regular worker was ₩4,852,000 in Seoul (113.0% of the national ₩4,294,000), ₩4,309,000 in Gyeonggi, ₩3,899,000 in Incheon and ₩3,741,000 in Busan; in Seoul finance and insurance paid ₩10,170,000 a month.', tag: 'data', src: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20022', by: 'Ministry of Employment and Labor, press release on the April 2026 regional wage and working-hours survey (30 Sep 2026)', seen: '2026-10-03' },
    'kr-pop': { t: 'On 1 November 2025 the register-based census counted 9,315,000 people in Seoul, 3,235,000 in Busan, 3,094,000 in Incheon (up 1.2% in a year) and 894,000 in Seongnam; Seoul and Busan lost 0.2% and 0.7%.', tag: 'data', src: 'https://mods.go.kr/board.es?act=view&bid=203&list_no=446219&mid=a10301020200', by: 'Statistics Korea (National Data Office), 2025 Population and Housing Census, register-based results (28 Jul 2026)', seen: '2026-10-03' },
    'kr-grad': { t: 'Of the 2024 graduating class of Korean higher education, 69.5% were counted as employed (70.3% a year earlier): 62.8% of university graduates, 72.1% of junior-college and 82.1% of graduate-school graduates; by field, 69.0% in social sciences and 70.4% in engineering.', tag: 'data', src: 'https://www.kedi.re.kr/khome/mobile2/announce/selectAnnounceForm.do?selectTp=0&board_sq_no=3&article_sq_no=36242&currentPage=1', by: 'Ministry of Education and Korean Educational Development Institute, employment statistics for 2024 graduates of higher education', seen: '2026-10-03' },
    'kr-lang': { t: 'Seoul Job Connect 2026, to be held on 18 November at SETEC in Gangnam, brings foreign job seekers together with local companies seeking bilingual talent, market analysts and trade specialists; the front pages of the three large job platforms, Saramin, JobKorea and Wanted, are in Korean and show no English version.', tag: 'practitioner consensus', src: 'https://www.koreatimes.co.kr/southkorea/20260928/seoul-job-fair-aims-to-connect-foreign-job-seekers-with-local-firms', by: 'The Korea Times, 28 September 2026; Saramin, JobKorea and Wanted front pages', seen: '2026-10-08' },
    'kr-calendar': { t: 'Samsung Group holds open recruitment twice a year: its first-half 2024 round opened on 11 March, and its second-half 2026 round took applications until 15 September, with the GSAT aptitude test in October and interviews and medical checks in November.', tag: 'employer-stated', src: 'https://www.koreatimes.co.kr/business/companies/20260907/samsung-group-to-begin-2nd-half-2026-open-recruitment-1', by: 'The Korea Times, 7 September 2026; Samsung open recruitment notice of March 2024 (Daum)', seen: '2026-10-08' },
    'kr-samsung-plan': { t: 'Samsung plans to recruit about 12,000 people across 2026, new and experienced hires together, and announced in September 2025 a plan to hire 60,000 over five years, focused on semiconductors, core components, biotechnology and AI.', tag: 'employer-stated', src: 'https://www.koreatimes.co.kr/business/companies/20260907/samsung-group-to-begin-2nd-half-2026-open-recruitment-1', by: 'The Korea Times, 7 September 2026; The Korea Herald, 18 September 2025', seen: '2026-10-08' },
    'kr-fki': { t: 'In a September 2026 survey of the 500 largest Korean companies by sales, 51.2% of the 121 respondents had hiring plans for new graduates in the second half, up from 37.2% a year earlier; 25.8% of those with plans intended to cut hiring and 24.2% to raise it.', tag: 'data', src: 'https://www.koreajoongangdaily.com/business/half-of-companies-plan-to-hire-new-grads-this-year-but-remain-cautious-on-numbers/12896086', by: 'Korea JoongAng Daily, on a survey for the Federation of Korean Industries (Korea Economic Association), reported 29 September 2026', seen: '2026-10-08' },
    'kr-shinhan': { t: 'Shinhan Financial Group gives its address as 20 Sejong-daero 9-gil, Jung-gu, Seoul.', tag: 'employer-stated', src: 'https://www.shinhangroup.com/en/about/overview', by: 'Shinhan Financial Group, about us', seen: '2026-10-03' },
    'kr-sbio': { t: 'Samsung Biologics gives its address as 300 Songdobio-daero, Yeonsu-gu, Incheon.', tag: 'employer-stated', src: 'https://samsungbiologics.com/about/overview', by: 'Samsung Biologics, about us', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Electronics and semiconductors': 'Elettronica e semiconduttori', 'Banking and financial services': 'Banche e servizi finanziari',
  'Media and entertainment': 'Media e intrattenimento',
  'Headquarters of large companies': 'Sedi centrali di grandi aziende',
  'Fintech companies at the Seoul Fintech Lab, Yeouido': 'Le aziende fintech del Seoul Fintech Lab, a Yeouido',
  'South Korea was not covered by the research library before this record.': 'La Corea del Sud non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'Student work hours come from university pages, not the immigration service; whether the 30 hours depend on Korean-language level was not confirmed.':
    'Le ore di lavoro degli studenti vengono da pagine universitarie, non dal servizio immigrazione; non è confermato se le 30 ore dipendano dal livello di coreano.',
  'Which world rankings count for the top-200 rule is not stated in the press release read.':
    'Quali classifiche mondiali valgano per la regola delle prime 200 non è indicato nel comunicato letto.',
  'Entry for EU passports, pay, tax and the language demanded by employers were not researched.':
    'L’ingresso con passaporto UE, gli stipendi, le tasse e la lingua richiesta dai datori di lavoro non sono stati ricercati.',

  'Seoul ranked 8th of 137 cities in the 39th Global Financial Centres Index (March 2026), its fourth year in the top ten; the city supports growth-stage fintech companies at the Seoul Fintech Lab in Yeouido.':
    'Seul si è classificata 8ª su 137 città nella 39ª edizione del Global Financial Centres Index (marzo 2026), il quarto anno tra le prime dieci; la città sostiene le aziende fintech in crescita al Seoul Fintech Lab di Yeouido.',
  'Korea’s largest port and second city':
    'Il maggiore porto della Corea e la sua seconda città',
  'Ports and logistics':
    'Porti e logistica',
  'Port of Busan':
    'Porto di Busan',
  '24.4 million TEU (2024)':
    '24,4 milioni di TEU (2024)',
  'Korea’s software and games cluster south of Seoul':
    'Il polo coreano del software e dei videogiochi a sud di Seul',
  'Life sciences':
    'Scienze della vita',
  'A biopharmaceutical manufacturing cluster beside the main airport':
    'Un polo della produzione biofarmaceutica accanto all’aeroporto principale',
  'As of 2024 the Port of Busan, Korea’s largest port, handled 24.4 million TEU of containers, 76.6% of the country’s container cargo and 96.8% of its transhipment cargo; it is the world’s seventh-largest container port.':
    'Nel 2024 il porto di Busan, il maggiore della Corea, ha movimentato 24,4 milioni di TEU di container, il 76,6% del traffico container del paese e il 96,8% del trasbordo; è il settimo porto container del mondo.',
  'Pangyo Techno Valley in Seongnam has about 64,000 employees; its tenant companies sold KRW 107.2 trillion in 2019, and its ICT firms include Kakao, NHN, NCSOFT, Nexon and AhnLab.':
    'La Pangyo Techno Valley di Seongnam conta circa 64.000 addetti; le aziende insediate hanno venduto per 107,2 mila miliardi di KRW nel 2019, e tra le sue imprese ICT ci sono Kakao, NHN, NCSOFT, Nexon e AhnLab.',
  'Songdo, in the Incheon Free Economic Zone, has the world’s largest biopharmaceutical production capacity of any city, ahead of San Francisco and Singapore; Celltrion, Samsung Biologics and Samsung Bioepis are based there.':
    'Songdo, nella Zona economica libera di Incheon, ha la maggiore capacità di produzione biofarmaceutica di qualsiasi città al mondo, davanti a San Francisco e Singapore; vi hanno sede Celltrion, Samsung Biologics e Samsung Bioepis.',
  'Ulsan, Daejeon and Daegu are not mapped as hubs; Hyundai’s Ulsan plant page could not be read.':
    'Ulsan, Daejeon e Daegu non sono segnate come poli; la pagina dello stabilimento Hyundai di Ulsan non è stata letta.',

  'Since October 2025, graduates of Korean universities can hold the job-seeker visa a year at a time for up to three years, and graduates aged 29 or under from the world’s top 200 universities skip its points test. Seoul ranks seventh among the world’s financial centres and produces 22.5% of national output; Busan is Korea’s port and Pangyo its software cluster. Only 62.8% of university graduates of the class of 2024 were counted as employed.':
    'Da ottobre 2025 i laureati delle università coreane possono tenere il visto per cercare lavoro un anno alla volta fino a tre anni, e i laureati fino a 29 anni delle prime 200 università del mondo saltano il test a punti. Seul è settima tra i centri finanziari del mondo e produce il 22,5% della produzione nazionale; Busan è il porto della Corea e Pangyo il suo polo del software. Solo il 62,8% dei laureati delle università della classe 2024 risultava occupato.',
  'No family is rated in Busan’s finance, Pangyo’s business roles or anywhere in Incheon: the sources read give Incheon’s biopharmaceutical capacity, not hiring by role.':
    'Nessuna famiglia è valutata per la finanza di Busan, i ruoli di business di Pangyo o in alcun caso a Incheon: le fonti lette danno la capacità biofarmaceutica di Incheon, non le assunzioni per ruolo.',
  'Seoul’s ratings (finance, business: strong) rest on the financial-centre ranking and regional accounts; no source read gives Seoul’s jobs or graduate hiring by sector, and no graduate recruiting calendar or starting-pay statistic for Korea was read.':
    'Le valutazioni di Seul (finanza, business: forte) si basano sulla classifica dei centri finanziari e sui conti regionali; nessuna fonte letta dà i posti di lavoro o le assunzioni di laureati di Seul per settore, e non sono stati letti né un calendario delle selezioni né una statistica sugli stipendi di ingresso per la Corea.',
  'Employer pages for KB, Hana, Hyundai, Samsung Electronics, Naver, NCSOFT and Celltrion did not load or gave no address, so only Shinhan and Samsung Biologics are named for Seoul and Incheon; the Pangyo firms rest on a state agency’s list.':
    'Le pagine di KB, Hana, Hyundai, Samsung Electronics, Naver, NCSOFT e Celltrion non si sono caricate o non indicavano l’indirizzo, quindi per Seul e Incheon sono citate solo Shinhan e Samsung Biologics; le aziende di Pangyo si basano sull’elenco di un’agenzia statale.',
  'Wages are regional (April 2026, total pay per regular worker including overtime and bonuses), GDP is the region (Pangyo: Gyeonggi Province), population is the city; Seongnam has no Numbeo rent, so Pangyo has none. Other rents are crowd-sourced and read through a text proxy.':
    'Gli stipendi sono regionali (aprile 2026, retribuzione totale per lavoratore stabile, con straordinari e bonus), il PIL è quello della regione (Pangyo: provincia di Gyeonggi), la popolazione è quella della città; per Seongnam Numbeo non ha un affitto, quindi Pangyo non ne ha. Gli altri affitti sono raccolti dagli utenti e letti tramite un proxy di testo.',
  'Country brief: four hubs, employers, pay and standing':
    'Dossier paese: quattro poli, datori di lavoro, stipendi e posizionamento',
  'The capital and financial centre, seventh in the Global Financial Centres Index':
    'La capitale e centro finanziario, settima nel Global Financial Centres Index',
  'head office in Jung-gu, central Seoul':
    'sede nel distretto di Jung-gu, nel centro di Seul',
  'finance and insurance pay ₩10.17 million a month in Seoul against ₩4.85 million for all sectors':
    'finanza e assicurazioni pagano 10,17 milioni di ₩ al mese a Seul contro 4,85 milioni per tutti i settori',
  'Banks and insurers':
    'Le banche e le assicurazioni',
  'address: Songdo, Yeonsu-gu':
    'indirizzo: Songdo, Yeonsu-gu',
  'Pay across regions':
    'Stipendi nelle diverse regioni',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'The Global Financial Centres Index 40 (September 2026) ranks Seoul seventh in the world (rating 752) and fifth in Asia/Pacific, and Busan 22nd (737) and ninth in Asia/Pacific; Incheon is an associate centre, close to the 150 assessments needed to be ranked.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Seul al settimo posto nel mondo (punteggio 752) e al quinto in Asia-Pacifico, e Busan al 22° (737) e al nono in Asia-Pacifico; Incheon è un centro associato, vicino alle 150 valutazioni necessarie per essere classificata.',
  'Startup Genome’s 2026 report ranks Seoul ninth in the world and third in Asia, fourth in the world for funding momentum, fourth in Asia in its AI-native cluster ranking and in the top ten worldwide for talent strength; Busan is in the 71–80 band of its emerging ecosystems, 26th to 30th in Asia.':
    'Il rapporto 2026 di Startup Genome colloca Seul al nono posto nel mondo e al terzo in Asia, quarta al mondo per dinamica dei finanziamenti, quarta in Asia nella classifica dei poli nativi dell’IA e tra le prime dieci al mondo per forza dei talenti; Busan è nella fascia 71–80 degli ecosistemi emergenti, dal 26° al 30° posto in Asia.',
  'In 2024 nominal regional GDP was ₩651.4 trillion in Gyeonggi, ₩575.0 trillion in Seoul (22.5% of the country’s ₩2,560.8 trillion), ₩125.6 trillion in Incheon and ₩121.1 trillion in Busan; services were 92.4% of Seoul’s output, Seoul produced 33.0% of the country’s services, and finance and insurance were 7.0% of its GDP.':
    'Nel 2024 il PIL regionale nominale era di 651,4 mila miliardi di ₩ a Gyeonggi, 575,0 mila miliardi a Seul (il 22,5% dei 2.560,8 mila miliardi del paese), 125,6 a Incheon e 121,1 a Busan; i servizi erano il 92,4% della produzione di Seul, Seul produceva il 33,0% dei servizi del paese e finanza e assicurazioni erano il 7,0% del suo PIL.',
  'In April 2026 total monthly pay per regular worker was ₩4,852,000 in Seoul (113.0% of the national ₩4,294,000), ₩4,309,000 in Gyeonggi, ₩3,899,000 in Incheon and ₩3,741,000 in Busan; in Seoul finance and insurance paid ₩10,170,000 a month.':
    'Ad aprile 2026 la retribuzione mensile totale per lavoratore stabile era di 4.852.000 ₩ a Seul (il 113,0% dei 4.294.000 ₩ nazionali), 4.309.000 ₩ a Gyeonggi, 3.899.000 ₩ a Incheon e 3.741.000 ₩ a Busan; a Seul finanza e assicurazioni pagavano 10.170.000 ₩ al mese.',
  'On 1 November 2025 the register-based census counted 9,315,000 people in Seoul, 3,235,000 in Busan, 3,094,000 in Incheon (up 1.2% in a year) and 894,000 in Seongnam; Seoul and Busan lost 0.2% and 0.7%.':
    'Il 1° novembre 2025 il censimento basato sui registri contava 9.315.000 persone a Seul, 3.235.000 a Busan, 3.094.000 a Incheon (l’1,2% in più in un anno) e 894.000 a Seongnam; Seul e Busan hanno perso lo 0,2% e lo 0,7%.',
  'Of the 2024 graduating class of Korean higher education, 69.5% were counted as employed (70.3% a year earlier): 62.8% of university graduates, 72.1% of junior-college and 82.1% of graduate-school graduates; by field, 69.0% in social sciences and 70.4% in engineering.':
    'Della classe 2024 dell’istruzione superiore coreana il 69,5% risultava occupato (70,3% un anno prima): il 62,8% dei laureati delle università, il 72,1% di quelli dei junior college e l’82,1% di quelli delle scuole di specializzazione; per area, il 69,0% nelle scienze sociali e il 70,4% in ingegneria.',
  'Seoul Job Connect 2026, to be held on 18 November at SETEC in Gangnam, brings foreign job seekers together with local companies seeking bilingual talent, market analysts and trade specialists; the front pages of the three large job platforms, Saramin, JobKorea and Wanted, are in Korean and show no English version.':
    'Seoul Job Connect 2026, che si terrà il 18 novembre al SETEC di Gangnam, mette in contatto i candidati stranieri con aziende locali in cerca di talenti bilingui, analisti di mercato e specialisti del commercio; le pagine iniziali delle tre grandi piattaforme di lavoro, Saramin, JobKorea e Wanted, sono in coreano e non mostrano una versione inglese.',
  'Samsung Group holds open recruitment twice a year: its first-half 2024 round opened on 11 March, and its second-half 2026 round took applications until 15 September, with the GSAT aptitude test in October and interviews and medical checks in November.':
    'Samsung Group tiene la selezione aperta due volte l’anno: la tornata del primo semestre 2024 si è aperta l’11 marzo, e quella del secondo semestre 2026 ha raccolto candidature fino al 15 settembre, con il test attitudinale GSAT a ottobre e colloqui e visite mediche a novembre.',
  'Samsung plans to recruit about 12,000 people across 2026, new and experienced hires together, and announced in September 2025 a plan to hire 60,000 over five years, focused on semiconductors, core components, biotechnology and AI.':
    'Samsung prevede di assumere circa 12.000 persone nel 2026, tra nuovi laureati e profili con esperienza, e a settembre 2025 ha annunciato un piano per assumerne 60.000 in cinque anni, concentrato su semiconduttori, componenti chiave, biotecnologie e IA.',
  'In a September 2026 survey of the 500 largest Korean companies by sales, 51.2% of the 121 respondents had hiring plans for new graduates in the second half, up from 37.2% a year earlier; 25.8% of those with plans intended to cut hiring and 24.2% to raise it.':
    'In un’indagine di settembre 2026 sulle 500 maggiori aziende coreane per fatturato, il 51,2% dei 121 rispondenti aveva piani di assunzione di neolaureati nel secondo semestre, contro il 37,2% di un anno prima; il 25,8% di quelle con piani intendeva ridurre le assunzioni e il 24,2% aumentarle.',
  'Shinhan Financial Group gives its address as 20 Sejong-daero 9-gil, Jung-gu, Seoul.':
    'Shinhan Financial Group indica come indirizzo 20 Sejong-daero 9-gil, Jung-gu, Seul.',
  'Samsung Biologics gives its address as 300 Songdobio-daero, Yeonsu-gu, Incheon.':
    'Samsung Biologics indica come indirizzo 300 Songdobio-daero, Yeonsu-gu, Incheon.'
});

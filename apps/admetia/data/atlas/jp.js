/* Atlas record: Japan. Read 3 October 2026; log P64
 * (research/verification/round-4g.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Student and graduate statuses are read on Study in
 * Japan (JASSO, the government-backed site) and the Immigration Services
 * Agency's J-Find outline (PDF). The Tokyo figures come from the Tokyo
 * Metropolitan Government's 2023 overview (PDF, extracted locally).
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (log: research/verification/round-5e.md): Cabinet Office prefectural
 * accounts, MHLW wage survey, MIC resident register, GFCI 40, Startup Genome 2026 and employer pages.
 * Metrics: pop is the city (Tokyo: the 23 wards), gdp and wage are the prefecture ("region"). */

ATLAS.add({
  id: 'JP',
  checked: '2026-10-03',
  log: 'P64',
  summary: 'For a European with a degree from a top-100 university, Japan has a door that needs no sponsor: J-Find gives up to two years to look for work. Tokyo holds 43.5% of the country’s bank lending, three in four of its foreign-affiliated companies and 26 Fortune Global 500 headquarters; Nagoya has Japan’s largest port. University graduates started on ¥262,300 a month in 2025 and 98.0% of the 2026 class had found work.',
  sectors: ['Banking and financial services', 'Manufacturing', 'Technology', 'Trading companies', 'Consumer goods'],
  roles: ['finance', 'business'],
  hubs: [
    {
      id: 'tokyo', name: 'Tokyo', lat: 35.68, lon: 139.76,
      knownFor: 'Japan’s financial centre and the base of most foreign companies in Japan',
      why: ['jp-tokyo', 'jp-fortune', 'jp-gfci', 'jp-gser', 'jp-pref-gdp', 'jp-toyota', 'jp-mizuho', 'jp-nomura', 'jp-sony'],
      sectors: ['Banking and financial services', 'Headquarters of large companies', 'Foreign-affiliated companies', 'Technology'],
      employers: [
        { t: 'Domestically licensed banks', note: '43.5% of their loans are booked in Tokyo', c: 'jp-tokyo' },
        { t: 'Foreign-affiliated companies', note: '2,391 of the 3,174 in Japan', c: 'jp-tokyo' },
        { t: 'Fortune Global 500 headquarters', note: '26 in the 2025 list, second only to Beijing', c: 'jp-fortune' },
        { name: 'Toyota Motor', note: 'a Tokyo head office in Bunkyo as well as the Toyota City head office', c: 'jp-toyota' },
        { name: 'Sumitomo Corporation', note: 'trading company with a Tokyo head office and a second in Osaka', c: 'jp-sumitomo' },
        { name: 'Mizuho Financial Group', note: 'bank holding company with its business address in Chiyoda, Tokyo', c: 'jp-mizuho' },
        { name: 'Nomura Holdings', note: 'securities group with its business address in Chuo, Tokyo', c: 'jp-nomura' },
        { name: 'Sony Group', note: 'electronics and entertainment group with its business address in Minato, Tokyo', c: 'jp-sony' }
      ],
      demand: {
        finance: ['dominant', 'jp-tokyo'],
        business: ['strong', 'jp-tokyo'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'jp-tokyo'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 4, 4], c: ['jp-tokyo', 'jp-gfci'] },
        { f: 'business', s: [5, 4, 4], c: ['jp-tokyo', 'jp-fortune'] }
      ],
      metrics: {
        pop: { v: 9796723, year: 2026, area: 'city', tag: 'data', src: 'https://www.soumu.go.jp/main_content/001083789.xlsx', by: 'Ministry of Internal Affairs and Communications, resident register population by municipality, 1 January 2026 (the 23 special wards, summed by Admetia)', seen: '2026-10-03' },
        gdp: { v: 125018.533, cur: 'JPY', year: 2023, area: 'region', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts, nominal GDP (production side), fiscal 2023, Tokyo Metropolis (¥ million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 418300, cur: 'JPY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/xls/zuhyo.xlsx', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, figure 8: scheduled monthly cash earnings of general workers, both sexes, Tokyo Metropolis', seen: '2026-10-03' },
        rent: { v: 202375, cur: 'JPY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Tokyo', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'osaka', name: 'Osaka', lat: 34.69, lon: 135.50,
      knownFor: 'Japan’s second business city, at the heart of the Kansai region',
      why: ['jp-osaka', 'jp-gfci', 'jp-sumitomo', 'jp-pref-gdp'],
      sectors: ['Pharmaceuticals', 'Manufacturing', 'Trade'],
      employers: [
        { t: 'Employers in the city', note: 'labour force of 1,128,000 (2020)', c: 'jp-osaka' },
        { name: 'Sumitomo Corporation', note: 'trading company with a second head office in Osaka', c: 'jp-sumitomo' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 3, 2], c: ['jp-gfci'] },
        { f: 'business', s: [4, 3, 2], c: ['jp-pref-gdp', 'jp-osaka', 'jp-sumitomo'] }
      ],
      metrics: {
        pop: { v: 2798782, year: 2026, area: 'city', tag: 'data', src: 'https://www.soumu.go.jp/main_content/001083789.xlsx', by: 'Ministry of Internal Affairs and Communications, resident register population by municipality, 1 January 2026 (Osaka City)', seen: '2026-10-03' },
        gdp: { v: 44992.432, cur: 'JPY', year: 2023, area: 'region', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts, nominal GDP (production side), fiscal 2023, Osaka Prefecture (¥ million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 348900, cur: 'JPY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/xls/zuhyo.xlsx', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, figure 8: scheduled monthly cash earnings of general workers, both sexes, Osaka Prefecture', seen: '2026-10-03' },
        rent: { v: 110667, cur: 'JPY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Osaka', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'nagoya', name: 'Nagoya', lat: 35.18, lon: 136.91,
      knownFor: 'The centre of Aichi, Japan’s car-making prefecture',
      why: ['jp-nagoya', 'jp-nagoya-port', 'jp-toyota', 'jp-pref-gdp'],
      sectors: ['Automotive', 'Aerospace', 'Machinery'],
      employers: [
        { t: 'Employers in the city', note: 'labour force of 1,094,000 (2020)', c: 'jp-nagoya' },
        { name: 'Port of Nagoya', note: 'the largest port in Japan by total cargo, 156.71 million tons in 2024', c: 'jp-nagoya-port' },
        { name: 'Toyota Motor', note: 'head office in Toyota City, Aichi; 73,133 employees (390,927 consolidated)', c: 'jp-toyota' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: ['strong', 'jp-nagoya-port'], analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [5, 3, 2], c: ['jp-nagoya-port'] }
      ],
      metrics: {
        pop: { v: 2310721, year: 2026, area: 'city', tag: 'data', src: 'https://www.soumu.go.jp/main_content/001083789.xlsx', by: 'Ministry of Internal Affairs and Communications, resident register population by municipality, 1 January 2026 (Nagoya City)', seen: '2026-10-03' },
        gdp: { v: 46091.073, cur: 'JPY', year: 2023, area: 'region', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts, nominal GDP (production side), fiscal 2023, Aichi Prefecture (¥ million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 341600, cur: 'JPY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/xls/zuhyo.xlsx', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, figure 8: scheduled monthly cash earnings of general workers, both sexes, Aichi Prefecture', seen: '2026-10-03' },
        rent: { v: 83650, cur: 'JPY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Nagoya', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'yokohama', name: 'Yokohama', lat: 35.44, lon: 139.64,
      knownFor: 'A port city next to Tokyo, Japan’s second-largest by population',
      why: ['jp-yokohama', 'jp-nissan', 'jp-pref-gdp'],
      sectors: ['Ports and logistics', 'Technology', 'Manufacturing'],
      employers: [
        { t: 'Employers in the city', note: 'labour force of 1,750,000 (2020)', c: 'jp-yokohama' },
        { name: 'Nissan Motor', note: 'global headquarters and registered head office in Yokohama', c: 'jp-nissan' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['jp-yokohama', 'jp-pref-gdp', 'jp-nissan'] }
      ],
      metrics: {
        pop: { v: 3753315, year: 2026, area: 'city', tag: 'data', src: 'https://www.soumu.go.jp/main_content/001083789.xlsx', by: 'Ministry of Internal Affairs and Communications, resident register population by municipality, 1 January 2026 (Yokohama City)', seen: '2026-10-03' },
        gdp: { v: 37331.308, cur: 'JPY', year: 2023, area: 'region', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts, nominal GDP (production side), fiscal 2023, Kanagawa Prefecture (¥ million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 368600, cur: 'JPY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/xls/zuhyo.xlsx', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, figure 8: scheduled monthly cash earnings of general workers, both sexes, Kanagawa Prefecture', seen: '2026-10-03' },
        rent: { v: 185000, cur: 'JPY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Yokohama', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'fukuoka', name: 'Fukuoka', lat: 33.59, lon: 130.40,
      knownFor: 'Kyushu’s business centre and a start-up city',
      why: ['jp-fukuoka', 'jp-gfci', 'jp-pref-gdp'],
      sectors: ['Technology', 'Retail', 'Tourism'],
      employers: [
        { t: 'Employers in the city', note: 'labour force of 747,000 (2020)', c: 'jp-fukuoka' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['jp-gfci'] },
        { f: 'business', s: [3, 2, 1], c: ['jp-fukuoka', 'jp-pref-gdp'] }
      ],
      metrics: {
        pop: { v: 1620853, year: 2026, area: 'city', tag: 'data', src: 'https://www.soumu.go.jp/main_content/001083789.xlsx', by: 'Ministry of Internal Affairs and Communications, resident register population by municipality, 1 January 2026 (Fukuoka City)', seen: '2026-10-03' },
        gdp: { v: 21238.732, cur: 'JPY', year: 2023, area: 'region', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts, nominal GDP (production side), fiscal 2023, Fukuoka Prefecture (¥ million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 314300, cur: 'JPY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/xls/zuhyo.xlsx', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, figure 8: scheduled monthly cash earnings of general workers, both sexes, Fukuoka Prefecture', seen: '2026-10-03' },
        rent: { v: 75627, cur: 'JPY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Fukuoka', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'kyoto', name: 'Kyoto', lat: 35.01, lon: 135.77,
      knownFor: 'The former capital, for electronics makers and universities',
      why: ['jp-kyoto', 'jp-nintendo', 'jp-pref-gdp'],
      sectors: ['Semiconductors', 'Higher education', 'Tourism'],
      employers: [
        { t: 'Employers in the city', note: 'labour force of 1,132,000 (2020)', c: 'jp-kyoto' },
        { name: 'Nintendo', note: 'headquarters in Kyoto; 8,666 consolidated staff at March 2026', c: 'jp-nintendo' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [2, 1, 1], c: ['jp-kyoto', 'jp-pref-gdp', 'jp-nintendo'] }
      ],
      metrics: {
        pop: { v: 1369750, year: 2026, area: 'city', tag: 'data', src: 'https://www.soumu.go.jp/main_content/001083789.xlsx', by: 'Ministry of Internal Affairs and Communications, resident register population by municipality, 1 January 2026 (Kyoto City)', seen: '2026-10-03' },
        gdp: { v: 11510.399, cur: 'JPY', year: 2023, area: 'region', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts, nominal GDP (production side), fiscal 2023, Kyoto Prefecture (¥ million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 337400, cur: 'JPY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/xls/zuhyo.xlsx', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, figure 8: scheduled monthly cash earnings of general workers, both sexes, Kyoto Prefecture', seen: '2026-10-03' },
        rent: { v: 89153, cur: 'JPY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Kyoto', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['jp-n1', 'jp-lang-exp'] },
    { k: 'Where demand is now', c: ['jp-tokyo', 'jp-nagoya-port', 'jp-demand-it'] },
    { k: 'Entry pay', c: ['jp-startpay'] },
    { k: 'Pay across prefectures', c: ['jp-wage-pref'] },
    { k: 'Graduate labour market', c: ['jp-grad-rate', 'jp-intl-emp'] },
    { k: 'Recruiting calendar', c: ['jp-calendar', 'jp-intern-timing'] }
  ],

  briefs: [
    ['countries/jp-japan.md', 'Country brief: six hubs, employers, pay and standing'],
    ['places/beyond-europe.md', '§6 Japan: J-Find and the points system, in brief']
  ],
  gaps: [
    'How much Japanese ordinary graduate hiring requires was not read on a primary source; pay and the recruiting calendar were read only as national statistics and the government’s schedule request, not for any employer.',
    'The Tokyo figures date from 2016 to 2022; demand in technology, data and AI roles is not rated, and the Startup Genome rank of Tokyo is the only start-up evidence read (Osaka, Fukuoka, Nagoya and Kyoto have no readable page).',
    'Mitsubishi UFJ, SMBC, Panasonic, Kyocera, Omron and Denso are not named because no head-office address could be confirmed from a source we can cite; Mizuho, Nomura and Sony are named from their US Securities and Exchange Commission filings, alongside Toyota, Nissan, Nintendo and Sumitomo Corporation.',
    'Wages are prefectural (scheduled monthly cash earnings of general workers, not bonuses or overtime), GDP is prefectural for fiscal 2023, and population is for the city (Tokyo: the 23 wards), so Nagoya, Yokohama and Kyoto sit in larger regions than their cities. Rents are crowd-sourced Numbeo prices read through a text proxy.',
    'Verified immigration guide and full route details are in visas_immigration/japan/japan_visas_immigration_guide.md.',
    'No family is rated in Osaka, Nagoya, Yokohama, Fukuoka or Kyoto: JETRO’s figures give each economy’s size, not hiring by role.'
  ],

  claims: {
    'jp-n1': { t: 'A broader work status for graduates of Japanese universities, which also allows service and retail jobs, requires the top level of the Japanese-Language Proficiency Test (N1) or a Business Japanese Test score of 480 or more.', tag: 'data', src: 'https://www.studyinjapan.go.jp/en/work-in-japan/employment/status.html', by: 'Study in Japan (JASSO), status of residence', seen: '2026-10-03' },
    'jp-tokyo': { t: 'Tokyo has 15.8% of the people working in Japan (2016) but 43.5% of the loans of domestically licensed banks (March 2022) and 2,391 of the 3,174 foreign-affiliated companies in Japan (75.3%, 2022).', tag: 'data', src: 'https://www.sangyo-rodo.metro.tokyo.lg.jp/documents/d/sangyo-rodo/f5b3c112ace253719216769ebb6d3c48', by: 'Tokyo Metropolitan Government, Industry and Employment in Tokyo: A Graphic Overview 2023', seen: '2026-10-03' },
    'jp-osaka': { t: 'JETRO’s regional data give Osaka City 2,752,000 residents and a labour force of 1,128,000 (2020 census), and nominal GDP of ¥19,516.2 billion (Osaka City accounts, 2020).', tag: 'data', src: 'https://www.jetro.go.jp/en/invest/region/data/osaka-city.html', by: 'JETRO, regional information: Osaka City', seen: '2026-10-03' },
    'jp-nagoya': { t: 'JETRO’s regional data give Nagoya City 2,332,000 residents and a labour force of 1,094,000 (2020 census), and nominal GDP of ¥13,936.9 billion (Nagoya City accounts, 2021).', tag: 'data', src: 'https://www.jetro.go.jp/en/invest/region/data/nagoya-city.html', by: 'JETRO, regional information: Nagoya City', seen: '2026-10-03' },
    'jp-yokohama': { t: 'JETRO’s regional data give Yokohama City 3,777,000 residents and a labour force of 1,750,000 (2020 census), and nominal GDP of ¥14,645.3 billion (Yokohama City accounts, 2021).', tag: 'data', src: 'https://www.jetro.go.jp/en/invest/region/data/yokohama-city.html', by: 'JETRO, regional information: Yokohama City', seen: '2026-10-03' },
    'jp-fukuoka': { t: 'JETRO’s regional data give Fukuoka City 1,612,000 residents and a labour force of 747,000 (2020 census), and nominal GDP of ¥7,386.2 billion (Fukuoka City accounts, 2020).', tag: 'data', src: 'https://www.jetro.go.jp/en/invest/region/data/fukuoka-city.html', by: 'JETRO, regional information: Fukuoka City', seen: '2026-10-03' },
    'jp-kyoto': { t: 'JETRO’s regional data give Kyoto Prefecture 2,578,000 residents and a labour force of 1,132,000 (2020 census), and nominal GDP of ¥10,905.2 billion (Kyoto prefectural accounts, 2021).', tag: 'data', src: 'https://www.jetro.go.jp/en/invest/region/data/kyoto.html', by: 'JETRO, regional information: Kyoto Prefecture', seen: '2026-10-03' },
    'jp-pref-gdp': { t: 'In fiscal 2023 nominal GDP was ¥125,018.5 billion in the Tokyo Metropolis, ¥46,091.1 billion in Aichi, ¥44,992.4 billion in Osaka, ¥37,331.3 billion in Kanagawa, ¥21,238.7 billion in Fukuoka and ¥11,510.4 billion in Kyoto Prefecture; the cities of Yokohama and Nagoya produced ¥15,213.0 and ¥15,021.7 billion.', tag: 'data', src: 'https://www.esri.cao.go.jp/jp/sna/data/data_list/kenmin/files/contents/tables/2023/soukatu1.xlsx', by: 'Cabinet Office, prefectural accounts (fiscal 2011 to 2023), table 1, nominal GDP, production side', seen: '2026-10-03' },
    'jp-wage-pref': { t: 'In 2025 scheduled monthly cash earnings of general workers averaged ¥340,600 across Japan, ¥418,300 in Tokyo, ¥368,600 in Kanagawa, ¥348,900 in Osaka, ¥341,600 in Aichi, ¥337,400 in Kyoto and ¥314,300 in Fukuoka; only Tokyo, Kanagawa, Aichi and Osaka were above the national figure.', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/11.pdf', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, section 11 and figure 8 (chart data in zuhyo.xlsx)', seen: '2026-10-03' },
    'jp-startpay': { t: 'In 2025 newly graduated university entrants earned ¥262,300 a month on average (men ¥264,900, women ¥259,700), up 5.6%, and those with a graduate degree ¥299,000.', tag: 'data', src: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/10.pdf', by: 'Ministry of Health, Labour and Welfare, Basic Survey on Wage Structure 2025, table 10, new graduates', seen: '2026-10-03' },
    'jp-grad-rate': { t: 'Of university students (undergraduates) due to graduate in March 2026, 98.0% had a job on 1 April 2026, the same as a year earlier; for junior colleges it was 97.4%.', tag: 'data', src: 'https://www.mhlw.go.jp/stf/houdou/0000184815_00065.html', by: 'Ministry of Health, Labour and Welfare and Ministry of Education, employment of March 2026 graduates (as of 1 April 2026)', seen: '2026-10-03' },
    'jp-calendar': { t: 'For students graduating in 2027 the government again asks employers to start publicity from 1 March before the graduating year, selection from 1 June of that year and formal job offers from 1 October.', tag: 'data', src: 'https://www.caa.go.jp/notice/statement/kikawada2/045615.html', by: 'Cabinet Office, minister’s press conference summary, 24 Mar 2026', seen: '2026-10-03' },
    'jp-lang-exp': { t: 'In a December 2024 Career-tasu survey quoted by JASSO, about 70% of companies seek business-intermediate Japanese or higher from international students at the time of the job offer and about 90% after they join the company.', tag: 'practitioner consensus', src: 'https://www.jasso.go.jp/en/ryugaku/after_study_j/job/guide.html', by: 'JASSO, Job Hunting Guide for International Students 2027, page 8 (Career-tasu survey of December 2024)', seen: '2026-10-08' },
    'jp-demand-it': { t: 'In a Gakujo survey of students graduating in March 2027, IT, software and internet was the largest industry among informal job offers at 18.9% at the end of July 2026, ahead of information, research and consulting at 11.3%; the survey covered 182 students.', tag: 'data', src: 'https://service.gakujo.ne.jp/wp-content/uploads/2026/08/27naiteiritsu0804.pdf', by: 'Gakujo, offer-rate survey of the class of 2027, August 2026 (survey of 24 to 31 July 2026)', seen: '2026-10-08' },
    'jp-intl-emp': { t: 'In 2023, 22,688 of the 43,968 international students who graduated in Japan, excluding those going on to further study, took jobs in Japan: an employment rate of 51.6%.', tag: 'data', src: 'https://www.jasso.go.jp/en/ryugaku/after_study_j/job/guide.html', by: 'JASSO, Job Hunting Guide for International Students 2027, page 7 (JASSO career survey of international students, 2023)', seen: '2026-10-08' },
    'jp-intern-timing': { t: 'By 1 May 2026, 67% of the class of 2027 already held an informal job offer, against 38% on 1 March, because internships feed early selection ahead of the official 1 June start.', tag: 'data', src: 'https://www.sakigake.jp/news/article/20260601CO0045/', by: 'Sakigake Shimpo (Kyodo), 1 June 2026, on an Indeed Recruit Partners survey', seen: '2026-10-08' },
    'jp-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Tokyo sixth in the world (rating 753) and fourth in Asia/Pacific, and Osaka 20th, eighth in Asia/Pacific; Fukuoka is an associate centre, close to the 150 assessments needed to be ranked, and no other Japanese city is listed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 9 and the associate-centres list', seen: '2026-10-03' },
    'jp-gser': { t: 'Startup Genome’s 2026 report ranks Tokyo 12th in the world and fifth in Asia, third in Asia for funding momentum and fifth in Asia in its AI-native cluster ranking, and in the top ten worldwide for talent strength.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/tokyo', by: 'Startup Genome, GSER 2026, Tokyo ecosystem page', seen: '2026-10-03' },
    'jp-fortune': { t: 'Tokyo was home to 26 companies on the 2025 Fortune Global 500, second to Beijing’s 47 and ahead of New York’s 14.', tag: 'data', src: 'https://english.beijing.gov.cn/latest/news/202508/t20250807_4168850.html', by: 'Beijing Municipal Government, 7 Aug 2025, on Fortune’s 2025 Global 500 list', seen: '2026-10-03' },
    'jp-mizuho': { t: 'Mizuho Financial Group’s filings with the US Securities and Exchange Commission give its business address as 1-5-5 Otemachi, Chiyoda-ku, Tokyo; its latest Form 20-F was filed on 26 June 2026.', tag: 'employer-stated', src: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001335730&type=20-F', by: 'Mizuho Financial Group, company filings on SEC EDGAR', seen: '2026-10-04' },
    'jp-nomura': { t: 'Nomura Holdings’ filings with the US Securities and Exchange Commission give its business address as 1-13-1 Nihonbashi, Chuo-ku, Tokyo; its latest Form 20-F was filed on 22 June 2026.', tag: 'employer-stated', src: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001163653&type=20-F', by: 'Nomura Holdings, company filings on SEC EDGAR', seen: '2026-10-04' },
    'jp-sony': { t: 'Sony Group’s filings with the US Securities and Exchange Commission give its business address as 1-7-1 Konan, Minato-ku, Tokyo; its latest Form 20-F was filed on 18 June 2026.', tag: 'employer-stated', src: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000313838&type=20-F', by: 'Sony Group, company filings on SEC EDGAR', seen: '2026-10-04' },
    'jp-toyota': { t: 'Toyota Motor gives its head office as 1 Toyota-cho, Toyota City, Aichi, and a Tokyo head office in Bunkyo, and says it had 73,133 employees (390,927 consolidated) at 31 March 2026.', tag: 'employer-stated', src: 'https://global.toyota/en/company/profile/overview/', by: 'Toyota Motor Corporation, company profile', seen: '2026-10-03' },
    'jp-nissan': { t: 'Nissan lists its registered head office in Kanagawa-ku, Yokohama and its headquarters at 1-1 Takashima, Nishi-ku, Yokohama.', tag: 'employer-stated', src: 'https://www.nissan-global.com/EN/COMPANY/PROFILE/', by: 'Nissan Motor Co., company profile', seen: '2026-10-03' },
    'jp-nintendo': { t: 'Nintendo gives its head office as Kamitoba Hokotate-cho, Minami-ku, Kyoto, and says it had 8,666 consolidated employees (3,084 in the parent company) at the end of March 2026.', tag: 'employer-stated', src: 'https://www.nintendo.co.jp/corporate/outline/index.html', by: 'Nintendo, company profile (in Japanese)', seen: '2026-10-03' },
    'jp-sumitomo': { t: 'Sumitomo Corporation says that in 1970 it set up a dual head office, one in Tokyo and one in Osaka.', tag: 'employer-stated', src: 'https://www.sumitomocorp.com/en/jp/about', by: 'Sumitomo Corporation, about us and history', seen: '2026-10-03' },
    'jp-nagoya-port': { t: 'The Port of Nagoya says it is the largest port in Japan by total cargo throughput, which reached 156.71 million tons in 2024.', tag: 'data', src: 'https://www.port-of-nagoya.jp/english/aboutport/1001385.html', by: 'Nagoya Port Authority, port profile', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Banking and financial services': 'Banche e servizi finanziari', 'Trading companies': 'Società commerciali',
  'Japan’s financial centre and the base of most foreign companies in Japan': 'Il centro finanziario del Giappone e la sede della maggior parte delle aziende estere nel paese',
  'Headquarters of large companies': 'Sedi centrali di grandi aziende', 'Foreign-affiliated companies': 'Aziende a capitale estero',
  'Domestically licensed banks': 'Le banche con licenza nazionale', '43.5% of their loans are booked in Tokyo': 'il 43,5% dei loro prestiti è registrato a Tokyo',
  '2,391 of the 3,174 in Japan': '2.391 delle 3.174 presenti in Giappone',
  '§6 Japan: J-Find and the points system, in brief': '§6 Giappone: J-Find e il sistema a punti, in breve',
  'Verified immigration guide and full route details are in visas_immigration/japan/japan_visas_immigration_guide.md.':
    'La guida verificata su visti e immigrazione e i dettagli completi sui percorsi sono in visas_immigration/japan/japan_visas_immigration_guide.md.',

  'A broader work status for graduates of Japanese universities, which also allows service and retail jobs, requires the top level of the Japanese-Language Proficiency Test (N1) or a Business Japanese Test score of 480 or more.':
    'Uno status di lavoro più ampio per i laureati delle università giapponesi, che consente anche lavori nei servizi e nel commercio, richiede il livello più alto del Japanese-Language Proficiency Test (N1) o un punteggio di almeno 480 al Business Japanese Test.',
  'Tokyo has 15.8% of the people working in Japan (2016) but 43.5% of the loans of domestically licensed banks (March 2022) and 2,391 of the 3,174 foreign-affiliated companies in Japan (75.3%, 2022).':
    'Tokyo ha il 15,8% degli occupati del Giappone (2016) ma il 43,5% dei prestiti delle banche con licenza nazionale (marzo 2022) e 2.391 delle 3.174 aziende a capitale estero del paese (75,3%, 2022).',
  'Japan’s second business city, at the heart of the Kansai region':
    'La seconda città degli affari del Giappone, nel cuore del Kansai',
  'Trade':
    'Commercio',
  'Employers in the city':
    'I datori di lavoro della città',
  'labour force of 1,128,000 (2020)':
    'forza lavoro di 1.128.000 persone (2020)',
  'The centre of Aichi, Japan’s car-making prefecture':
    'Il centro di Aichi, la prefettura giapponese dell’auto',
  'Aerospace':
    'Aerospazio',
  'Machinery':
    'Macchinari',
  'labour force of 1,094,000 (2020)':
    'forza lavoro di 1.094.000 persone (2020)',
  'A port city next to Tokyo, Japan’s second-largest by population':
    'Una città portuale accanto a Tokyo, la seconda del Giappone per popolazione',
  'Ports and logistics':
    'Porti e logistica',
  'labour force of 1,750,000 (2020)':
    'forza lavoro di 1.750.000 persone (2020)',
  'Kyushu’s business centre and a start-up city':
    'Il centro degli affari del Kyushu e una città di start-up',
  'labour force of 747,000 (2020)':
    'forza lavoro di 747.000 persone (2020)',
  'The former capital, for electronics makers and universities':
    'L’antica capitale, per produttori di elettronica e università',
  'labour force of 1,132,000 (2020)':
    'forza lavoro di 1.132.000 persone (2020)',
  'JETRO’s regional data give Osaka City 2,752,000 residents and a labour force of 1,128,000 (2020 census), and nominal GDP of ¥19,516.2 billion (Osaka City accounts, 2020).':
    'I dati regionali del JETRO attribuiscono a la città di Osaka 2.752.000 residenti e una forza lavoro di 1.128.000 persone (censimento 2020), e un PIL nominale di 19.516,2 miliardi di ¥ (conti economici della città di Osaka, 2020).',
  'JETRO’s regional data give Nagoya City 2,332,000 residents and a labour force of 1,094,000 (2020 census), and nominal GDP of ¥13,936.9 billion (Nagoya City accounts, 2021).':
    'I dati regionali del JETRO attribuiscono a la città di Nagoya 2.332.000 residenti e una forza lavoro di 1.094.000 persone (censimento 2020), e un PIL nominale di 13.936,9 miliardi di ¥ (conti economici della città di Nagoya, 2021).',
  'JETRO’s regional data give Yokohama City 3,777,000 residents and a labour force of 1,750,000 (2020 census), and nominal GDP of ¥14,645.3 billion (Yokohama City accounts, 2021).':
    'I dati regionali del JETRO attribuiscono a la città di Yokohama 3.777.000 residenti e una forza lavoro di 1.750.000 persone (censimento 2020), e un PIL nominale di 14.645,3 miliardi di ¥ (conti economici della città di Yokohama, 2021).',
  'JETRO’s regional data give Fukuoka City 1,612,000 residents and a labour force of 747,000 (2020 census), and nominal GDP of ¥7,386.2 billion (Fukuoka City accounts, 2020).':
    'I dati regionali del JETRO attribuiscono a la città di Fukuoka 1.612.000 residenti e una forza lavoro di 747.000 persone (censimento 2020), e un PIL nominale di 7.386,2 miliardi di ¥ (conti economici della città di Fukuoka, 2020).',
  'JETRO’s regional data give Kyoto Prefecture 2,578,000 residents and a labour force of 1,132,000 (2020 census), and nominal GDP of ¥10,905.2 billion (Kyoto prefectural accounts, 2021).':
    'I dati regionali del JETRO attribuiscono a la prefettura di Kyoto 2.578.000 residenti e una forza lavoro di 1.132.000 persone (censimento 2020), e un PIL nominale di 10.905,2 miliardi di ¥ (conti economici della prefettura di Kyoto, 2021).',
  'No family is rated in Osaka, Nagoya, Yokohama, Fukuoka or Kyoto: JETRO’s figures give each economy’s size, not hiring by role.':
    'Nessuna famiglia è valutata a Osaka, Nagoya, Yokohama, Fukuoka o Kyoto: i dati del JETRO danno la dimensione di ciascuna economia, non le assunzioni per ruolo.',

  'For a European with a degree from a top-100 university, Japan has a door that needs no sponsor: J-Find gives up to two years to look for work. Tokyo holds 43.5% of the country’s bank lending, three in four of its foreign-affiliated companies and 26 Fortune Global 500 headquarters; Nagoya has Japan’s largest port. University graduates started on ¥262,300 a month in 2025 and 98.0% of the 2026 class had found work.':
    'Per un europeo laureato in un’università tra le prime 100, il Giappone ha una porta che non richiede sponsor: J-Find dà fino a due anni per cercare lavoro. Tokyo concentra il 43,5% dei prestiti bancari del paese, tre aziende a capitale estero su quattro e 26 sedi di società della Fortune Global 500; Nagoya ha il porto più grande del Giappone. I laureati sono partiti con 262.300 ¥ al mese nel 2025 e il 98,0% della classe 2026 aveva trovato lavoro.',
  'How much Japanese ordinary graduate hiring requires was not read on a primary source; pay and the recruiting calendar were read only as national statistics and the government’s schedule request, not for any employer.':
    'Quanto giapponese richiedano le normali assunzioni di neolaureati non è stato letto su una fonte primaria; stipendi e calendario delle selezioni sono stati letti solo come statistiche nazionali e richiesta di calendario del governo, non per singoli datori di lavoro.',
  'The Tokyo figures date from 2016 to 2022; demand in technology, data and AI roles is not rated, and the Startup Genome rank of Tokyo is the only start-up evidence read (Osaka, Fukuoka, Nagoya and Kyoto have no readable page).':
    'I dati di Tokyo vanno dal 2016 al 2022; la domanda nei ruoli di tecnologia, dati e IA non è valutata, e la posizione di Tokyo nella classifica di Startup Genome è l’unica prova sulle start-up letta (per Osaka, Fukuoka, Nagoya e Kyoto non c’è una pagina leggibile).',
  'Mitsubishi UFJ, SMBC, Panasonic, Kyocera, Omron and Denso are not named because no head-office address could be confirmed from a source we can cite; Mizuho, Nomura and Sony are named from their US Securities and Exchange Commission filings, alongside Toyota, Nissan, Nintendo and Sumitomo Corporation.':
    'Mitsubishi UFJ, SMBC, Panasonic, Kyocera, Omron e Denso non sono citate perché non è stato possibile confermare la sede da una fonte citabile; Mizuho, Nomura e Sony sono citate dalla documentazione presso la Securities and Exchange Commission statunitense, insieme a Toyota, Nissan, Nintendo e Sumitomo Corporation.',
  'Wages are prefectural (scheduled monthly cash earnings of general workers, not bonuses or overtime), GDP is prefectural for fiscal 2023, and population is for the city (Tokyo: the 23 wards), so Nagoya, Yokohama and Kyoto sit in larger regions than their cities. Rents are crowd-sourced Numbeo prices read through a text proxy.':
    'Gli stipendi sono prefetturali (retribuzione mensile in contanti prevista dei lavoratori generici, senza bonus né straordinari), il PIL è prefetturale per l’anno fiscale 2023 e la popolazione è quella della città (Tokyo: i 23 quartieri speciali), quindi Nagoya, Yokohama e Kyoto sono inserite in regioni più grandi delle loro città. Gli affitti sono prezzi raccolti dagli utenti di Numbeo, letti tramite un proxy di testo.',
  'Country brief: six hubs, employers, pay and standing':
    'Dossier paese: sei poli, datori di lavoro, stipendi e posizionamento',
  '26 in the 2025 list, second only to Beijing':
    '26 nella classifica 2025, seconda solo a Pechino',
  'Fortune Global 500 headquarters':
    'Le sedi di società della Fortune Global 500',
  'a Tokyo head office in Bunkyo as well as the Toyota City head office':
    'una sede a Tokyo, nel quartiere di Bunkyo, oltre a quella di Toyota City',
  'trading company with a Tokyo head office and a second in Osaka':
    'società commerciale con una sede a Tokyo e una seconda a Osaka',
  'trading company with a second head office in Osaka':
    'società commerciale con una seconda sede a Osaka',
  'the largest port in Japan by total cargo, 156.71 million tons in 2024':
    'il porto più grande del Giappone per carico totale, 156,71 milioni di tonnellate nel 2024',
  'bank holding company with its business address in Chiyoda, Tokyo': 'holding bancaria con indirizzo legale a Chiyoda, Tokyo',
  'securities group with its business address in Chuo, Tokyo': 'gruppo di intermediazione mobiliare con indirizzo legale a Chuo, Tokyo',
  'electronics and entertainment group with its business address in Minato, Tokyo': 'gruppo di elettronica e intrattenimento con indirizzo legale a Minato, Tokyo',
  'Mizuho Financial Group’s filings with the US Securities and Exchange Commission give its business address as 1-5-5 Otemachi, Chiyoda-ku, Tokyo; its latest Form 20-F was filed on 26 June 2026.':
    'La documentazione di Mizuho Financial Group presso la Securities and Exchange Commission statunitense indica come indirizzo legale 1-5-5 Otemachi, Chiyoda-ku, Tokyo; l’ultimo Form 20-F è stato depositato il 26 giugno 2026.',
  'Nomura Holdings’ filings with the US Securities and Exchange Commission give its business address as 1-13-1 Nihonbashi, Chuo-ku, Tokyo; its latest Form 20-F was filed on 22 June 2026.':
    'La documentazione di Nomura Holdings presso la Securities and Exchange Commission statunitense indica come indirizzo legale 1-13-1 Nihonbashi, Chuo-ku, Tokyo; l’ultimo Form 20-F è stato depositato il 22 giugno 2026.',
  'Sony Group’s filings with the US Securities and Exchange Commission give its business address as 1-7-1 Konan, Minato-ku, Tokyo; its latest Form 20-F was filed on 18 June 2026.':
    'La documentazione di Sony Group presso la Securities and Exchange Commission statunitense indica come indirizzo legale 1-7-1 Konan, Minato-ku, Tokyo; l’ultimo Form 20-F è stato depositato il 18 giugno 2026.',
  'head office in Toyota City, Aichi; 73,133 employees (390,927 consolidated)':
    'sede a Toyota City, Aichi; 73.133 dipendenti (390.927 a livello consolidato)',
  'global headquarters and registered head office in Yokohama':
    'sede globale e sede legale a Yokohama',
  'headquarters in Kyoto; 8,666 consolidated staff at March 2026':
    'sede a Kyoto; 8.666 dipendenti consolidati a marzo 2026',
  'Entry pay':
    'Stipendio di ingresso',
  'Pay across prefectures':
    'Stipendi nelle diverse prefetture',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'In fiscal 2023 nominal GDP was ¥125,018.5 billion in the Tokyo Metropolis, ¥46,091.1 billion in Aichi, ¥44,992.4 billion in Osaka, ¥37,331.3 billion in Kanagawa, ¥21,238.7 billion in Fukuoka and ¥11,510.4 billion in Kyoto Prefecture; the cities of Yokohama and Nagoya produced ¥15,213.0 and ¥15,021.7 billion.':
    'Nell’anno fiscale 2023 il PIL nominale era di 125.018,5 miliardi di ¥ nella Metropoli di Tokyo, 46.091,1 miliardi ad Aichi, 44.992,4 a Osaka, 37.331,3 a Kanagawa, 21.238,7 a Fukuoka e 11.510,4 nella prefettura di Kyoto; le città di Yokohama e Nagoya hanno prodotto 15.213,0 e 15.021,7 miliardi di ¥.',
  'In 2025 scheduled monthly cash earnings of general workers averaged ¥340,600 across Japan, ¥418,300 in Tokyo, ¥368,600 in Kanagawa, ¥348,900 in Osaka, ¥341,600 in Aichi, ¥337,400 in Kyoto and ¥314,300 in Fukuoka; only Tokyo, Kanagawa, Aichi and Osaka were above the national figure.':
    'Nel 2025 la retribuzione mensile in contanti prevista dei lavoratori generici è stata in media di 340.600 ¥ in Giappone, 418.300 ¥ a Tokyo, 368.600 a Kanagawa, 348.900 a Osaka, 341.600 ad Aichi, 337.400 a Kyoto e 314.300 a Fukuoka; solo Tokyo, Kanagawa, Aichi e Osaka erano sopra la media nazionale.',
    'In a December 2024 Career-tasu survey quoted by JASSO, about 70% of companies seek business-intermediate Japanese or higher from international students at the time of the job offer and about 90% after they join the company.':
    'In un’indagine di Career-tasu di dicembre 2024 citata dal JASSO, circa il 70% delle aziende cerca dagli studenti stranieri un giapponese di livello professionale intermedio o superiore al momento dell’offerta e circa il 90% dopo l’ingresso in azienda.',
  'In a Gakujo survey of students graduating in March 2027, IT, software and internet was the largest industry among informal job offers at 18.9% at the end of July 2026, ahead of information, research and consulting at 11.3%; the survey covered 182 students.':
    'In un’indagine di Gakujo sugli studenti che si laureano a marzo 2027, IT, software e internet era il settore più grande tra le offerte di lavoro informali con il 18,9% a fine luglio 2026, davanti a informazione, ricerca e consulenza con l’11,3%; l’indagine ha coinvolto 182 studenti.',
  'In 2023, 22,688 of the 43,968 international students who graduated in Japan, excluding those going on to further study, took jobs in Japan: an employment rate of 51.6%.':
    'Nel 2023, 22.688 dei 43.968 studenti stranieri laureati in Giappone, esclusi quelli che proseguono gli studi, hanno trovato lavoro in Giappone: un tasso di occupazione del 51,6%.',
  'By 1 May 2026, 67% of the class of 2027 already held an informal job offer, against 38% on 1 March, because internships feed early selection ahead of the official 1 June start.':
    'Al 1º maggio 2026 il 67% della classe del 2027 aveva già un’offerta di lavoro informale, contro il 38% del 1º marzo, perché i tirocini alimentano una selezione anticipata rispetto all’inizio ufficiale del 1º giugno.',
  'In 2025 newly graduated university entrants earned ¥262,300 a month on average (men ¥264,900, women ¥259,700), up 5.6%, and those with a graduate degree ¥299,000.':
    'Nel 2025 i neolaureati assunti guadagnavano in media 262.300 ¥ al mese (uomini 264.900 ¥, donne 259.700 ¥), il 5,6% in più, e quelli con un titolo post-laurea 299.000 ¥.',
  'Of university students (undergraduates) due to graduate in March 2026, 98.0% had a job on 1 April 2026, the same as a year earlier; for junior colleges it was 97.4%.':
    'Tra gli studenti universitari (di primo livello) che si sarebbero laureati a marzo 2026, il 98,0% aveva un lavoro il 1° aprile 2026, come un anno prima; per i junior college il dato era 97,4%.',
  'For students graduating in 2027 the government again asks employers to start publicity from 1 March before the graduating year, selection from 1 June of that year and formal job offers from 1 October.':
    'Per gli studenti che si laureano nel 2027 il governo chiede di nuovo alle aziende di iniziare la comunicazione dal 1° marzo precedente all’anno di laurea, le selezioni dal 1° giugno di quell’anno e le offerte formali dal 1° ottobre.',
  'The Global Financial Centres Index 40 (September 2026) ranks Tokyo sixth in the world (rating 753) and fourth in Asia/Pacific, and Osaka 20th, eighth in Asia/Pacific; Fukuoka is an associate centre, close to the 150 assessments needed to be ranked, and no other Japanese city is listed.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Tokyo al sesto posto nel mondo (punteggio 753) e al quarto in Asia-Pacifico, e Osaka al 20°, ottava in Asia-Pacifico; Fukuoka è un centro associato, vicino alle 150 valutazioni necessarie per essere classificata, e nessun’altra città giapponese è in elenco.',
  'Startup Genome’s 2026 report ranks Tokyo 12th in the world and fifth in Asia, third in Asia for funding momentum and fifth in Asia in its AI-native cluster ranking, and in the top ten worldwide for talent strength.':
    'Il rapporto 2026 di Startup Genome colloca Tokyo al 12° posto nel mondo e al quinto in Asia, terza in Asia per dinamica dei finanziamenti e quinta in Asia nella classifica dei poli nativi dell’IA, e tra le prime dieci al mondo per forza dei talenti.',
  'Tokyo was home to 26 companies on the 2025 Fortune Global 500, second to Beijing’s 47 and ahead of New York’s 14.':
    'Nel 2025 Tokyo ospitava 26 società della Fortune Global 500, seconda a Pechino con 47 e davanti a New York con 14.',
  'Toyota Motor gives its head office as 1 Toyota-cho, Toyota City, Aichi, and a Tokyo head office in Bunkyo, and says it had 73,133 employees (390,927 consolidated) at 31 March 2026.':
    'Toyota Motor indica come sede 1 Toyota-cho, Toyota City, Aichi, e una sede a Tokyo, a Bunkyo, e dichiara 73.133 dipendenti (390.927 a livello consolidato) al 31 marzo 2026.',
  'Nissan lists its registered head office in Kanagawa-ku, Yokohama and its headquarters at 1-1 Takashima, Nishi-ku, Yokohama.':
    'Nissan indica la sede legale a Kanagawa-ku, Yokohama e la sede centrale in 1-1 Takashima, Nishi-ku, Yokohama.',
  'Nintendo gives its head office as Kamitoba Hokotate-cho, Minami-ku, Kyoto, and says it had 8,666 consolidated employees (3,084 in the parent company) at the end of March 2026.':
    'Nintendo indica come sede Kamitoba Hokotate-cho, Minami-ku, Kyoto, e dichiara 8.666 dipendenti consolidati (3.084 nella capogruppo) a fine marzo 2026.',
  'Sumitomo Corporation says that in 1970 it set up a dual head office, one in Tokyo and one in Osaka.':
    'Sumitomo Corporation dichiara che nel 1970 ha istituito una doppia sede centrale, una a Tokyo e una a Osaka.',
  'The Port of Nagoya says it is the largest port in Japan by total cargo throughput, which reached 156.71 million tons in 2024.':
    'Il porto di Nagoya dichiara di essere il più grande del Giappone per carico totale movimentato, arrivato a 156,71 milioni di tonnellate nel 2024.'
});

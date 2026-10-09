/* Atlas record: China. Read 3 October 2026; log P67
 * (research/verification/round-4h.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. China had no coverage in the research library. The
 * student and graduate rules are read on the Beijing municipal government's
 * English pages; Shanghai figures on the Shanghai government's. The advisory
 * repeats the UK Foreign Office's wording.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (log: research/verification/round-5e.md): city statistical
 * bulletins for 2025 (pop, GDP, sector value added), GFCI 40 and Startup Genome 2026 for standing.
 * Metrics: area is the whole municipality ("region"); wage is the average annual wage of urban
 * non-private units divided by 12, where the city's own release was read. */

ATLAS.add({
  id: 'CN',
  checked: '2026-10-03',
  log: 'P67',
  summary: 'A door that is narrow but real: a master’s from a Chinese university, or from a well-known university abroad, can lead straight to a first one-year work permit, with no experience required, for graduates with good grades and a job paying at least the local average wage. Shanghai is the finance city, with 1,813 licensed financial institutions. Read the UK’s warning on detention before you go.',
  sectors: ['Banking and financial services', 'Manufacturing', 'Technology', 'Trade and logistics', 'Automotive'],
  roles: ['finance', 'it', 'software', 'ai', 'logistics'],
  hubs: [
    {
      id: 'shanghai', name: 'Shanghai', lat: 31.23, lon: 121.47,
      knownFor: 'China’s international financial centre in the making, and a software and IT services city',
      why: ['cn-sh', 'cn-shgdp', 'cn-gfci', 'cn-sh-port', 'cn-gser'],
      sectors: ['Banking and financial services', 'Financial markets', 'Software and ICT', 'Trade and logistics'],
      employers: [
        { t: 'Licensed financial institutions', note: '1,813, over 30% of registered institutions foreign', c: 'cn-sh' },
        { name: 'Shanghai Futures Exchange', note: 'lists options on all the non-ferrous metals', c: 'cn-sh' },
        { name: 'IMF Shanghai Regional Center', note: 'inaugurated in 2025', c: 'cn-sh' },
        { name: 'Guotai Haitong Securities', note: 'Guotai Junan and Haitong Securities merged in 2025', c: 'cn-sh' },
        { t: 'Information, software and IT-services firms', note: '713.99 billion yuan of output in 2025', c: 'cn-shgdp' },
        { name: 'Port of Shanghai', note: '55.06 million TEU in 2025', c: 'cn-sh-port' }
      ],
      demand: {
        finance: ['strong', 'cn-sh', 'cn-shgdp', 'cn-gfci'],
        logistics: ['strong', 'cn-sh-port'],
        it: ['strong', 'cn-shgdp'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: ['present', 'cn-sh'],
        banking: ['strong', 'cn-sh'],
        am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 4, 4], c: ['cn-gfci', 'cn-sh', 'cn-shgdp'] },
        { f: 'it', s: [4, 4, 3], c: ['cn-gser', 'cn-shgdp'] },
        { f: 'logistics', s: [4, 4, 4], c: ['cn-sh-port', 'cn-guangzhou'] }
      ],
      metrics: {
        pop: { v: 24854100, year: 2025, area: 'region', tag: 'data', src: 'https://tjj.sh.gov.cn/tjgb/20260330/e0772941e8e041eaaad2df850b44ef98.html', by: 'Shanghai Municipal Bureau of Statistics, 2025 statistical bulletin (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 5670.871, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://tjj.sh.gov.cn/tjgb/20260330/e0772941e8e041eaaad2df850b44ef98.html', by: 'Shanghai Municipal Bureau of Statistics, 2025 statistical bulletin (GDP, preliminary)', seen: '2026-10-03' },
        rent: { v: 7048, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Shanghai', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥7,047.62, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'beijing', name: 'Beijing', lat: 39.90, lon: 116.41,
      knownFor: 'The capital and China’s second city economy after Shanghai',
      why: ['cn-beijing', 'cn-bj-fortune', 'cn-bj-ai', 'cn-gser'],
      sectors: ['Government', 'Technology', 'Banking'],
      employers: [
        { t: 'Fortune Global 500 headquarters', note: '47 in the 2025 list, more than any other city', c: 'cn-bj-fortune' },
        { t: 'Large-model developers', note: '209 large models filed, nearly a third of China’s total', c: 'cn-bj-ai' },
        { t: 'Banks and other financial institutions', note: '27.1 trillion yuan of deposits at the end of 2025', c: 'cn-bj-fin' },
        { name: 'Xiaomi', note: 'smart factory and car factory in Beijing', c: 'cn-xiaomi' },
        { t: 'Service-sector employers', note: '4.47769 trillion yuan of added value (2025)', c: 'cn-beijing' }
      ],
      demand: {
        finance: ['strong', 'cn-bj-fin', 'cn-gfci'],
        it: ['strong', 'cn-bj-ai', 'cn-gser'],
        software: ['strong', 'cn-bj-ai', 'cn-gser'],
        ai: ['dominant', 'cn-bj-ai'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'ai', s: [5, 5, 4], c: ['cn-bj-ai', 'cn-gser'] },
        { f: 'software', s: [5, 5, 4], c: ['cn-gser', 'cn-bj-ai'] },
        { f: 'it', s: [5, 5, 4], c: ['cn-gser', 'cn-bj-ai'] },
        { f: 'finance', s: [4, 3, 3], c: ['cn-gfci', 'cn-bj-fin'] }
      ],
      metrics: {
        pop: { v: 21800000, year: 2025, area: 'region', tag: 'data', src: 'https://tjj.beijing.gov.cn/zxfbu/202603/t20260324_4564401.html', by: 'Beijing Municipal Bureau of Statistics, 2025 statistical bulletin (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 5207.34, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://tjj.beijing.gov.cn/zxfbu/202603/t20260324_4564401.html', by: 'Beijing Municipal Bureau of Statistics, 2025 statistical bulletin (GDP, preliminary)', seen: '2026-10-03' },
        rent: { v: 6280, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Beijing', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥6,280.00, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'shenzhen', name: 'Shenzhen', lat: 22.54, lon: 114.06,
      knownFor: 'China’s electronics and software city on the Hong Kong border',
      why: ['cn-shenzhen', 'cn-sz-econ', 'cn-gfci', 'cn-gser', 'cn-huawei', 'cn-tencent'],
      sectors: ['Technology', 'Semiconductors', 'Automotive'],
      employers: [
        { name: 'Tencent', note: 'headquartered in Shenzhen since its founding in 1998', c: 'cn-tencent' },
        { name: 'Huawei', note: 'headquarters at Bantian, Longgang District; about 213,000 employees worldwide', c: 'cn-huawei' },
        { t: 'Software and information-services firms', note: 'over 800 billion yuan (2025)', c: 'cn-shenzhen' },
        { t: 'Artificial-intelligence enterprises', note: 'more than 2,600', c: 'cn-shenzhen' },
        { t: 'Financial institutions', note: '526.16 billion yuan of added value, up 12.1% (2025)', c: 'cn-sz-econ' },
        { name: 'Port of Shenzhen', note: '35.41 million TEU in 2025', c: 'cn-sz-econ' }
      ],
      demand: {
        finance: ['strong', 'cn-sz-econ', 'cn-gfci'],
        logistics: ['strong', 'cn-sz-econ'],
        it: ['strong', 'cn-shenzhen'],
        software: ['strong', 'cn-shenzhen'],
        ai: ['strong', 'cn-shenzhen'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 3, 3], c: ['cn-gser', 'cn-shenzhen', 'cn-sz-econ'] },
        { f: 'software', s: [4, 3, 3], c: ['cn-gser', 'cn-shenzhen'] },
        { f: 'ai', s: [4, 3, 3], c: ['cn-gser', 'cn-shenzhen'] },
        { f: 'finance', s: [4, 4, 3], c: ['cn-gfci', 'cn-sz-econ'] },
        { f: 'logistics', s: [4, 3, 3], c: ['cn-sz-econ', 'cn-sh-port'] }
      ],
      metrics: {
        pop: { v: 18248500, year: 2025, area: 'region', tag: 'data', src: 'https://www.sz.gov.cn/zfgb/2026/gb1416/content/post_12848555.html', by: 'Shenzhen government gazette, 2025 statistical bulletin (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 3873.18, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://www.sz.gov.cn/zfgb/2026/gb1416/content/post_12848555.html', by: 'Shenzhen government gazette, 2025 statistical bulletin (GDP, preliminary)', seen: '2026-10-03' },
        wage: { v: 15947, cur: 'CNY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/tjsj/tjgb/content/post_12907800.html', by: 'Shenzhen Bureau of Statistics, 2025 average wage of urban units, 24 Jul 2026 (non-private units, 191,367 yuan a year ÷ 12)', seen: '2026-10-03' },
        rent: { v: 5095, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Shenzhen', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥5,095.38, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'guangzhou', name: 'Guangzhou', lat: 23.13, lon: 113.26,
      knownFor: 'Southern China’s trade, port and parcel-delivery hub',
      why: ['cn-guangzhou', 'cn-gz-econ', 'cn-gfci', 'cn-gser'],
      sectors: ['Ports and logistics', 'Trade', 'Automotive'],
      employers: [
        { name: 'Port of Guangzhou', note: 'over 28 million TEU (2025)', c: 'cn-guangzhou' },
        { name: 'Guangzhou Baiyun International Airport', note: '83.59 million passengers in 2025', c: 'cn-gz-econ' },
        { t: 'Car, electronics and petrochemical makers', note: '46.3% of the city’s large-industry added value', c: 'cn-gz-econ' },
        { t: 'Financial institutions', note: '322.10 billion yuan of added value, up 7.0% (2025)', c: 'cn-gz-econ' }
      ],
      demand: {
        finance: ['strong', 'cn-gz-econ', 'cn-gfci'],
        logistics: ['strong', 'cn-guangzhou'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [4, 4, 4], c: ['cn-guangzhou', 'cn-gz-econ'] },
        { f: 'finance', s: [4, 3, 2], c: ['cn-gfci', 'cn-gz-econ'] }
      ],
      metrics: {
        pop: { v: 19101000, year: 2025, area: 'region', tag: 'data', src: 'https://www.gz.gov.cn/zwgk/sjfb/tjgb/content/post_10804075.html', by: 'Guangzhou government portal, 2025 statistical bulletin (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 3203.946, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://www.gz.gov.cn/zwgk/sjfb/tjgb/content/post_10804075.html', by: 'Guangzhou government portal, 2025 statistical bulletin (GDP, preliminary)', seen: '2026-10-03' },
        wage: { v: 13899, cur: 'CNY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://tjj.gz.gov.cn/zzfwzq/tjgb/content/post_10894735.html', by: 'Guangzhou Bureau of Statistics, 9 Jul 2026 (non-private units, 166,790 yuan a year ÷ 12)', seen: '2026-10-03' },
        rent: { v: 3611, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Guangzhou', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥3,611.11, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'hangzhou', name: 'Hangzhou', lat: 30.27, lon: 120.16,
      knownFor: 'Zhejiang’s capital and a platform-economy city',
      why: ['cn-hangzhou', 'cn-hz-econ', 'cn-gser'],
      sectors: ['Technology', 'Retail', 'Tourism'],
      employers: [
        { t: 'Digital-economy core industries', note: '678 billion yuan of added value, 29.5% of GDP (2025)', c: 'cn-hz-econ' },
        { t: 'Information, software and IT-services firms', note: '1,511.6 billion yuan of revenue, up 13.5% (2025)', c: 'cn-hz-econ' },
        { t: 'Financial institutions', note: '274.1 billion yuan of added value (2025)', c: 'cn-hz-econ' },
        { t: 'Service-sector employers', note: '1.70 trillion yuan of output (2025)', c: 'cn-hangzhou' }
      ],
      demand: {
        it: ['strong', 'cn-hz-econ', 'cn-gser'],
        software: ['strong', 'cn-hz-econ', 'cn-gser'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 3, 2], c: ['cn-gser', 'cn-hz-econ'] },
        { f: 'software', s: [4, 3, 2], c: ['cn-gser', 'cn-hz-econ'] },
        { f: 'finance', s: [3, 2, 2], c: ['cn-gfci', 'cn-hz-econ'] }
      ],
      metrics: {
        pop: { v: 12700000, year: 2025, area: 'region', tag: 'data', src: 'https://hznews.hangzhou.com.cn/chengshi/content/2026-04/30/content_9214808.htm', by: 'Hangzhou Daily site, text of the 2025 statistical bulletin of the Hangzhou Bureau of Statistics (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 2301.1, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://hznews.hangzhou.com.cn/chengshi/content/2026-04/30/content_9214808.htm', by: 'Hangzhou Daily site, text of the 2025 statistical bulletin of the Hangzhou Bureau of Statistics (GDP, preliminary)', seen: '2026-10-03' },
        rent: { v: 4156, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Hangzhou', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥4,156.36, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'suzhou', name: 'Suzhou', lat: 31.30, lon: 120.59,
      knownFor: 'A manufacturing city next to Shanghai',
      why: ['cn-suzhou', 'cn-su-trade'],
      sectors: ['Manufacturing', 'Semiconductors', 'Machinery'],
      employers: [
        { t: 'Large industrial enterprises', note: '4,896.64 billion yuan of output (2025)', c: 'cn-suzhou' },
        { t: 'Exporters and importers', note: 'goods trade of 2,811.93 billion yuan in 2025, a record', c: 'cn-su-trade' },
        { t: 'Chip and robot makers', note: 'integrated-circuit wafer output up 13.6%, industrial robots up 20.6%', c: 'cn-su-trade' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [3, 2, 1], c: ['cn-suzhou', 'cn-su-trade'] }
      ],
      metrics: {
        pop: { v: 13047700, year: 2025, area: 'region', tag: 'data', src: 'https://tjj.suzhou.gov.cn/sztjj/tjgb/202604/3dc4b574cabd4e86b36ec5d3280e927c.shtml', by: 'Suzhou Municipal Bureau of Statistics, 2025 statistical bulletin (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 2769.51, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://tjj.suzhou.gov.cn/sztjj/tjgb/202604/3dc4b574cabd4e86b36ec5d3280e927c.shtml', by: 'Suzhou Municipal Bureau of Statistics, 2025 statistical bulletin (GDP, preliminary)', seen: '2026-10-03' },
        wage: { v: 12196, cur: 'CNY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://tjj.suzhou.gov.cn/sztjj/rdwd/202606/5c41527977254069a812a7f991ea2447.shtml', by: 'Suzhou Bureau of Statistics, 25 Jun 2026 (non-private units, 146,353 yuan a year ÷ 12)', seen: '2026-10-03' },
        rent: { v: 3035, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Suzhou', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥3,035.00, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'wuhan', name: 'Wuhan', lat: 30.59, lon: 114.31,
      knownFor: 'Central China’s industrial and university city',
      why: ['cn-wuhan', 'cn-wh-econ', 'cn-gfci'],
      sectors: ['Automotive', 'Semiconductors', 'Higher education'],
      employers: [
        { t: 'High-tech manufacturers', note: '26.2% of large-industry added value (2025)', c: 'cn-wuhan' },
        { t: 'Car makers', note: '811,000 vehicles built in 2025', c: 'cn-wh-econ' },
        { t: 'Universities', note: '225,300 postgraduate and 1.22 million undergraduate and college students', c: 'cn-wh-econ' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['cn-gfci'] }
      ],
      metrics: {
        pop: { v: 13861900, year: 2025, area: 'region', tag: 'data', src: 'https://tjj.wuhan.gov.cn/tjfw/tjgb/202604/t20260408_2750693.shtml', by: 'Wuhan Municipal Bureau of Statistics, 2025 statistical bulletin (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 2214.735, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://tjj.wuhan.gov.cn/tjfw/tjgb/202604/t20260408_2750693.shtml', by: 'Wuhan Municipal Bureau of Statistics, 2025 statistical bulletin (GDP, preliminary)', seen: '2026-10-03' },
        rent: { v: 2325, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Wuhan', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥2,325.00, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'chongqing', name: 'Chongqing', lat: 29.56, lon: 106.55,
      knownFor: 'A western municipality of car and electronics makers',
      why: ['cn-chongqing', 'cn-cq-soft'],
      sectors: ['Automotive', 'Semiconductors', 'Logistics'],
      employers: [
        { t: 'Businesses in the municipality', note: 'GDP of about 3.37 trillion yuan (2025)', c: 'cn-chongqing' },
        { t: 'Software and IT-services firms above designated size', note: '72,300 jobs, revenue up 16.2% (2025)', c: 'cn-cq-soft' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['cn-cq-soft'] }
      ],
      metrics: {
        pop: { v: 31872600, year: 2025, area: 'region', tag: 'data', src: 'https://cbgc.scol.com.cn/news/7427946', by: 'Chongqing statistics bureau, 2025 statistical bulletin (year-end resident population of 31.8726 million), as reported by Chuanguan News from the Chongqing government site, 27 Mar 2026', seen: '2026-10-03' },
        gdp: { v: 3375.793, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://www.yicai.com/news/103027647.html', by: 'Yicai, reporting Chongqing’s 2025 GDP of 3,375.793 billion yuan (33,757.93 on the page, in units of 100 million) from the statistics bureau', seen: '2026-10-03' },
        rent: { v: 2807, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Chongqing', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥2,806.67, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'chengdu', name: 'Chengdu', lat: 30.66, lon: 104.06,
      knownFor: 'Sichuan’s capital, in the Chengdu–Chongqing economic zone',
      why: ['cn-chengdu', 'cn-cd-econ', 'cn-gfci'],
      sectors: ['Semiconductors', 'Automotive', 'Technology'],
      employers: [
        { t: 'Electronics and car makers in the Chengdu–Chongqing zone', note: 'over 10% of China’s output', c: 'cn-chengdu' },
        { t: 'Financial institutions', note: '240.52 billion yuan of added value (2025)', c: 'cn-cd-econ' },
        { t: 'Information, software and IT-services firms', note: '213.61 billion yuan of added value, up 9.6% (2025)', c: 'cn-cd-econ' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 3, 2], c: ['cn-gfci', 'cn-cd-econ'] },
        { f: 'it', s: [3, 2, 1], c: ['cn-cd-econ'] }
      ],
      metrics: {
        pop: { v: 21535000, year: 2025, area: 'region', tag: 'data', src: 'https://finance.sina.com.cn/jjxw/2026-04-15/doc-inhupeis3814625.shtml', by: 'Chengdu Municipal Bureau of Statistics, 2025 statistical bulletin (text republished by Sina Finance) (year-end resident population)', seen: '2026-10-03' },
        gdp: { v: 2476.36, cur: 'CNY', year: 2025, area: 'region', tag: 'data', src: 'https://finance.sina.com.cn/jjxw/2026-04-15/doc-inhupeis3814625.shtml', by: 'Chengdu Municipal Bureau of Statistics, 2025 statistical bulletin (text republished by Sina Finance) (GDP, preliminary)', seen: '2026-10-03' },
        wage: { v: 10990, cur: 'CNY', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://news.qq.com/rain/a/20260708A0AQSU00', by: 'Chengdu Municipal Bureau of Statistics, 2025 average wage of urban units, as published by Chengdu Bendibao on 8 Jul 2026 (non-private units, 131,874 yuan a year ÷ 12)', seen: '2026-10-03' },
        rent: { v: 3144, cur: 'CNY', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Chengdu', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (¥3,143.64, Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['cn-lang'] },
    { k: 'Recruiting calendar', c: ['cn-cal', 'cn-cal-huawei'] },
    { k: 'Where demand is now', c: ['cn-sh', 'cn-bj-ai', 'cn-bank-hire'] },
    { k: 'Pay across cities', c: ['cn-wage-nbs'] },
    { k: 'Pay by sector', c: ['cn-wage-sector'] },
    { k: 'Graduate labour market', c: ['cn-grads', 'cn-labour'] }
  ],

  advisory: ['cn-fcdo'],

  briefs: [['countries/cn-china.md', 'Country brief: nine hubs, employers, pay and standing']],
  gaps: [
    'China was not covered by the research library before this record.',
    'No source read names Shanghai as the national finance centre, so finance is rated strong, not dominant.',
    'China entry rules (30-day visa-free for EU/Italian and UK citizens to 31 Dec 2026), Work Permits (Class A/B/C), K visa for STEM, and student regulations are fully verified in visas_immigration/china/china_visas_immigration_guide.md.',
    'City average wages (urban non-private units, 2025) were read for Shenzhen, Guangzhou, Suzhou and Chengdu (the last as republished by a city information site); no readable page was found for Shanghai, Beijing, Hangzhou, Wuhan or Chongqing, and one search summary of a Hangzhou figure was not used.',
    'Chongqing’s statistics bureau could not be read directly: its population and exact GDP come from press and portal reports of the 2025 bulletin, not the bulletin itself.',
    'No named employer headquarters were read for Hangzhou, Suzhou, Wuhan, Chongqing or Chengdu (Alibaba’s own page does not give its headquarters); their ratings rest on city statistics, not on named firms.',
    'Rents are Numbeo’s crowd-sourced one-bedroom prices in the city centre (yuan, October 2026): a signal, not a statistic, and read through a text proxy because the site blocks direct access.',
    'The graduate work-permit rule dates from national circular 3/2017 (MOHRSS, MFA, MOE); well-known foreign universities are defined as Top 500 in global rankings; details in visas_immigration/china/china_visas_immigration_guide.md.',
    'No family is rated in Beijing, Hangzhou, Suzhou, Wuhan, Chongqing or Chengdu: the city releases read give output, not graduate hiring by role. Chengdu’s own 2025 figure was not found on an official page.'
  ],

  claims: {
    'cn-sh': { t: 'Shanghai hosted 1,813 licensed financial institutions in 2025, more than 30% of its registered institutions were foreign, and its financial markets turned over 4,059 trillion yuan; building it into an international financial centre is a national strategy.', tag: 'data', src: 'https://english.shanghai.gov.cn/en-ThisisShanghai/20231207/9815a792b25f4c43bc1bbe69f61a817a.html', by: 'Shanghai Municipal Government, International Financial Center (updated 10 Feb 2026)', seen: '2026-10-03' },
    'cn-shgdp': { t: 'In 2025 Shanghai’s GDP reached 5.67 trillion yuan; the financial industry produced 897.97 billion yuan, up 9.7%, and information transmission, software and IT services 713.99 billion, up 15.3%, the fastest-growing services.', tag: 'data', src: 'https://english.shanghai.gov.cn/en-Latest-WhatsNew/20260121/67219589ee06440fabcfcbde30f6749f.html', by: 'Shanghai Municipal Government, 21 Jan 2026', seen: '2026-10-03' },
    'cn-fcdo': { t: 'The UK Foreign Office warns that China’s national security laws are broad, that people can be detained without having intended to break the law, that there is a risk of arbitrary detention, British nationals included, and that people linked to business disputes can be stopped from leaving China by an exit ban.', tag: 'data', src: 'https://www.gov.uk/foreign-travel-advice/china/safety-and-security', by: 'FCDO travel advice, China (updated 27 Aug 2026)', seen: '2026-10-03' },
    'cn-beijing': { t: 'Beijing’s GDP reached 5.20734 trillion yuan in 2025, up 5.4%, passing 5 trillion yuan for the first time; services added 4.47769 trillion yuan.', tag: 'data', src: 'https://english.beijing.gov.cn/latest/news/202601/t20260122_4455339.html', by: 'Beijing Municipal Government, on Beijing Municipal Bureau of Statistics data (22 Jan 2026)', seen: '2026-10-03' },
    'cn-shenzhen': { t: 'Shenzhen’s GDP reached 3.87 trillion yuan in 2025; networks and communications, software and information services, and intelligent connected vehicles each passed 800 billion yuan in scale, and the city has more than 2,600 artificial-intelligence enterprises above designated size.', tag: 'data', src: 'https://www.cnbayarea.org.cn/english/News/content/post_1318990.html', by: 'Greater Bay Area portal, on the Shenzhen government work report (10 Feb 2026)', seen: '2026-10-03' },
    'cn-guangzhou': { t: 'Guangzhou’s GDP reached 3.2 trillion yuan in 2025, up 4%; its container throughput passed 28 million TEU, among the world’s top six, and its express deliveries exceeded 20 billion items, the most in the country.', tag: 'data', src: 'https://www.eguangzhou.gov.cn/gzspecialreports/content/post_40986.html', by: 'Guangzhou government work report (2026)', seen: '2026-10-03' },
    'cn-hangzhou': { t: 'Hangzhou’s GDP reached 2.30 trillion yuan in 2025, up 5.2%; services contributed 1.70 trillion yuan.', tag: 'data', src: 'https://ehangzhou.gov.cn/2026-01/22/c_296517.htm', by: 'Hangzhou government portal (22 Jan 2026)', seen: '2026-10-03' },
    'cn-suzhou': { t: 'Suzhou’s GDP reached 2,769.51 billion yuan in 2025, up 5.4%; its large industrial enterprises produced output worth 4,896.64 billion yuan.', tag: 'data', src: 'https://english.suzhou.gov.cn/szsenglish/News/202602/d7d5c9f234594a5b995ee1b3db688eef.shtml', by: 'Suzhou Municipal Statistics Bureau, via the city’s English portal (Feb 2026)', seen: '2026-10-03' },
    'cn-wuhan': { t: 'Wuhan’s GDP reached 2.2147 trillion yuan in 2025, up 5.6%; large high-tech manufacturers made 26.2% of the added value of the city’s large industrial enterprises.', tag: 'data', src: 'https://english.wuhan.gov.cn/H_1/NWP/202601/t20260129_2721751.shtml', by: 'Wuhan government portal (29 Jan 2026)', seen: '2026-10-03' },
    'cn-chongqing': { t: 'Chongqing’s GDP reached about 3.37 trillion yuan in 2025, up 5.3%, according to the mayor’s government work report.', tag: 'data', src: 'https://www.ichongqing.info/2026/01/28/chongqing-sets-5-growth-goal-following-3-37-trillion-yuan-gdp-in-2025/', by: 'iChongqing (Chongqing’s international portal), 28 Jan 2026', seen: '2026-10-03' },
    'cn-chengdu': { t: 'The Chengdu–Chongqing economic zone was expected to reach a GDP of 8.6 trillion yuan in 2024, over 6.5% of China’s total, and accounts for over 10% of the country’s car production and electronic-information output.', tag: 'data', src: 'https://www.gochengdu.cn/en/article/news/4304', by: 'GoChengdu (Chengdu’s official portal), on a National Development and Reform Commission briefing (13 Jan 2025)', seen: '2026-10-03' },
    'cn-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Shanghai fifth in the world and third in Asia/Pacific, Shenzhen eighth, Beijing 16th, Guangzhou 28th, Chengdu 34th, Hangzhou 59th and Wuhan 66th; Suzhou and Chongqing are not listed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 9', seen: '2026-10-03' },
    'cn-gser': { t: 'Startup Genome’s 2026 report ranks Beijing sixth in the world and first in Asia (and first in Asia for AI-native clusters), Shanghai 11th (fourth in Asia), Shenzhen 19th (seventh in Asia), Hangzhou 28th and Guangzhou 38th.', tag: 'practitioner consensus', src: 'https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/global-startup-ecosystem-ranking-2026-top-40', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Top 40 and ecosystem pages', seen: '2026-10-03' },
    'cn-bj-fortune': { t: 'Beijing was home to 47 companies on the 2025 Fortune Global 500, more than Tokyo (26) and New York (14) combined; in 2026 Fortune again names Beijing first among cities, with Tokyo, New York, London and Paris.', tag: 'data', src: 'https://english.beijing.gov.cn/latest/news/202508/t20250807_4168850.html', by: 'Beijing Municipal Government, 7 Aug 2025; Fortune, 2026 Fortune Global 500 release, 28 Jul 2026', seen: '2026-10-03' },
    'cn-bj-ai': { t: 'By the end of 2025 Beijing had filed 209 large AI models, nearly a third of the national total, and its large and medium key enterprises spent 429.88 billion yuan on research and development, 320.11 billion of it in information transmission, software and IT services.', tag: 'data', src: 'https://tjj.beijing.gov.cn/zxfbu/202603/t20260324_4564401.html', by: 'Beijing Municipal Bureau of Statistics, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-bj-fin': { t: 'At the end of 2025 deposits in Beijing’s financial institutions, foreign ones included, stood at 27.1 trillion yuan and loans at 12.3 trillion.', tag: 'data', src: 'https://tjj.beijing.gov.cn/zxfbu/202603/t20260324_4564401.html', by: 'Beijing Municipal Bureau of Statistics, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-xiaomi': { t: 'Xiaomi’s own global site presents a smart factory and an auto factory, both in Beijing, where production, testing and sales and customer experience are brought together.', tag: 'employer-stated', src: 'https://www.mi.com/global/about/', by: 'Xiaomi Global, About us', seen: '2026-10-03' },
    'cn-sh-port': { t: 'Shanghai’s port handled 55.06 million TEU in 2025, up 6.9%, of which 53.0% was transhipment between ships; the airports at Pudong and Hongqiao carried 135.1 million passengers.', tag: 'data', src: 'https://tjj.sh.gov.cn/tjgb/20260330/e0772941e8e041eaaad2df850b44ef98.html', by: 'Shanghai Municipal Bureau of Statistics, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-tencent': { t: 'Tencent says it was founded in 1998 with its headquarters in Shenzhen.', tag: 'employer-stated', src: 'https://www.tencent.com/en-us/about.html', by: 'Tencent, About us', seen: '2026-10-03' },
    'cn-sz-econ': { t: 'In 2025 Shenzhen’s financial industry added 526.16 billion yuan, up 12.1%, and information transmission, software and IT services 524.47 billion, up 10.3%; its port handled 35.41 million TEU, up 6.0%.', tag: 'data', src: 'https://www.sz.gov.cn/zfgb/2026/gb1416/content/post_12848555.html', by: 'Shenzhen government gazette, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-gz-econ': { t: 'In 2025 Guangzhou’s financial industry added 322.10 billion yuan, up 7.0%; its port handled 28.05 million TEU and Baiyun airport 83.59 million passengers; cars, electronics and petrochemicals made 46.3% of large-industry added value.', tag: 'data', src: 'https://www.gz.gov.cn/zwgk/sjfb/tjgb/content/post_10804075.html', by: 'Guangzhou government portal, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-hz-econ': { t: 'Hangzhou’s core digital-economy industries added 678 billion yuan in 2025, 29.5% of GDP; information, software and IT services earned 1,511.6 billion yuan of revenue among services above designated size, up 13.5%, and the financial industry added 274.1 billion.', tag: 'data', src: 'https://hznews.hangzhou.com.cn/chengshi/content/2026-04/30/content_9214808.htm', by: 'Hangzhou Daily site, text of the 2025 statistical bulletin of the Hangzhou Bureau of Statistics', seen: '2026-10-03' },
    'cn-su-trade': { t: 'Suzhou’s goods imports and exports reached a record 2,811.93 billion yuan in 2025, up 7.4%, and output of integrated-circuit wafers rose 13.6% and of industrial robots 20.6%.', tag: 'data', src: 'https://tjj.suzhou.gov.cn/sztjj/tjgb/202604/3dc4b574cabd4e86b36ec5d3280e927c.shtml', by: 'Suzhou Municipal Bureau of Statistics, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-wh-econ': { t: 'Wuhan built 811,000 vehicles in 2025, and its electronics manufacturing grew 18.9%; the city had 225,300 postgraduate and 1,218,700 undergraduate and college students.', tag: 'data', src: 'https://tjj.wuhan.gov.cn/tjfw/tjgb/202604/t20260408_2750693.shtml', by: 'Wuhan Municipal Bureau of Statistics, 2025 statistical bulletin', seen: '2026-10-03' },
    'cn-cq-soft': { t: 'In 2025 Chongqing’s software and IT-services firms above designated size grew revenue 16.2% and employed 72,300 people; output of new-energy vehicles rose 36.0%.', tag: 'data', src: 'https://m.12371.gov.cn/content/2026-03/26/content_508592.html', by: 'Chongqing Bureau of Statistics director, reading of the 2025 statistical bulletin, 26 Mar 2026', seen: '2026-10-03' },
    'cn-cd-econ': { t: 'In 2025 Chengdu’s financial industry added 240.52 billion yuan and its information transmission, software and IT services 213.61 billion, up 9.6%.', tag: 'data', src: 'https://finance.sina.com.cn/jjxw/2026-04-15/doc-inhupeis3814625.shtml', by: 'Chengdu Municipal Bureau of Statistics, 2025 statistical bulletin (text republished by Sina Finance)', seen: '2026-10-03' },
    'cn-huawei': { t: 'Huawei gives its headquarters as Huawei Base, Bantian, Longgang District, Shenzhen, and says it has approximately 213,000 employees in more than 170 countries and regions, 100% privately owned by employees.', tag: 'employer-stated', src: 'https://www.huawei.com/en/contact-us', by: 'Huawei, contact us (headquarters) and corporate information (employees, ownership; https://www.huawei.com/en/corporate-information)', seen: '2026-10-03' },
    'cn-wage-sector': { t: 'In 2025 the average annual wage in urban non-private units was 248,752 yuan in information transmission, software and IT services and 211,164 in finance, against 129,441 across all sectors and 113,594 in manufacturing; averages for all ages, not entry pay.', tag: 'data', src: 'https://www.stats.gov.cn/sj/zxfb/202605/t20260515_1963707.html', by: 'National Bureau of Statistics, average wages of urban employees in 2025, table 2 (15 May 2026)', seen: '2026-10-03' },
    'cn-lang': { t: 'Chinese-language CVs are expected for local employers; bilingual CVs are recommended for joint ventures, wholly foreign-owned firms and multinationals, and English counts as an asset mainly for international or overseas-facing roles.', tag: 'practitioner consensus', src: 'https://careers.ed.ac.uk/jobs-and-internships/finding-graduate-jobs/finding-work-outside-the-uk/finding-work-in-china', by: 'University of Edinburgh Careers Service, Finding work in China; University of Manchester Careers Service, Working in China', seen: '2026-10-08' },
    'cn-cal': { t: 'Campus hiring has two peaks: autumn recruitment from September to November or December, the main one, with tech firms opening an early batch in June or July and most offers made in November and December; and a smaller spring round from February or March to April or May.', tag: 'practitioner consensus', src: 'https://liuxue.xdf.cn/bj/yglh_xjslh_sqzn/4112085.shtml', by: 'New Oriental (xdf.cn) timeline of autumn and spring recruitment; University of Edinburgh and University of Manchester careers services', seen: '2026-10-08' },
    'cn-cal-huawei': { t: 'Huawei announced its graduate drive for the class of 2026 on 15 August 2025 and its internship drive for the class of 2027 on 15 March 2026; its 2025 cycle started on 14 August 2024 and 15 March 2024.', tag: 'employer-stated', src: 'https://career.huawei.com/reccampportal/portal5/index.html', by: 'Huawei campus recruitment portal, announcements (read 8 Oct 2026)', seen: '2026-10-08' },
    'cn-bank-hire': { t: 'The four big state banks (ICBC, CCB, ABC and Bank of China) plan to hire about 64,000 graduates in the 2026 campus round, down from 71,500 a year earlier and 77,600 in 2024, and want graduates who combine technology and banking.', tag: 'data', src: 'https://www.yicaiglobal.com/news/chinese-commercial-banks-launch-campus-hiring-with-fewer-openings-high-tech-talent-demand', by: 'Yicai Global, 14 Sep 2026', seen: '2026-10-08' },
    'cn-grads': { t: 'A record 12.7 million students graduated in 2026, and unemployment among 16-to-24-year-olds outside school reached 18.9% in August 2026, the peak month when graduates enter the market.', tag: 'data', src: 'https://tradingeconomics.com/china/youth-unemployment-rate/news/584561', by: 'Trading Economics, from National Bureau of Statistics data (August 2026)', seen: '2026-10-08' },
    'cn-labour': { t: 'In the first half of 2026 the surveyed urban unemployment rate averaged 5.2% (5.0% in June) and 5.1% in the 31 large cities; for ages 30 to 59 it averaged 4.1%.', tag: 'data', src: 'https://www.stats.gov.cn/sj/sjjd/202607/t20260716_1964147.html', by: 'National Bureau of Statistics, reading of the first-half 2026 employment figures (16 Jul 2026)', seen: '2026-10-03' },
    'cn-wage-nbs': { t: 'The average annual wage in China’s urban non-private units was 129,441 yuan in 2025, up 4.3% (about 10,800 yuan a month); Shenzhen’s was 191,367 yuan, Guangzhou’s 166,790, Chengdu’s 131,874 and Suzhou’s 146,353.', tag: 'data', src: 'https://www.stats.gov.cn/sj/zxfb/202605/t20260515_1963707.html', by: 'National Bureau of Statistics, 15 May 2026; city statistics bureaus, Jun and Jul 2026 (Chengdu’s figure as republished by Chengdu Bendibao)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'A door that is narrow but real: a master’s from a Chinese university, or from a well-known university abroad, can lead straight to a first one-year work permit, with no experience required, for graduates with good grades and a job paying at least the local average wage. Shanghai is the finance city, with 1,813 licensed financial institutions. Read the UK’s warning on detention before you go.':
    'Una porta stretta ma reale: un master di un’università cinese, o di un’università estera rinomata, può portare direttamente a un primo permesso di lavoro di un anno, senza esperienza richiesta, per i laureati con buoni voti e un lavoro pagato almeno quanto il salario medio locale. Shanghai è la città della finanza, con 1.813 istituzioni finanziarie autorizzate. Prima di partire leggi l’avvertenza britannica sulle detenzioni.',
  'Banking and financial services': 'Banche e servizi finanziari', 'Trade and logistics': 'Commercio e logistica',
  'China’s international financial centre in the making, and a software and IT services city': 'Il centro finanziario internazionale in costruzione della Cina, e una città di software e servizi IT',
  'Financial markets': 'Mercati finanziari',
  'Licensed financial institutions': 'Le istituzioni finanziarie autorizzate', '1,813, over 30% of registered institutions foreign': '1.813, oltre il 30% delle istituzioni registrate estere',
  'Information, software and IT-services firms': 'Le aziende di informazione, software e servizi IT', '713.99 billion yuan of output in 2025': '713,99 miliardi di yuan di produzione nel 2025',
  'China was not covered by the research library before this record.': 'La Cina non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'No source read names Shanghai as the national finance centre, so finance is rated strong, not dominant.':
    'Nessuna fonte letta indica Shanghai come centro finanziario nazionale, quindi la finanza è valutata forte, non dominante.',
  'Shanghai hosted 1,813 licensed financial institutions in 2025, more than 30% of its registered institutions were foreign, and its financial markets turned over 4,059 trillion yuan; building it into an international financial centre is a national strategy.':
    'Nel 2025 Shanghai ospitava 1.813 istituzioni finanziarie autorizzate, oltre il 30% delle istituzioni registrate era estero e i suoi mercati finanziari hanno scambiato 4.059 mila miliardi di yuan; farne un centro finanziario internazionale è una strategia nazionale.',
  'In 2025 Shanghai’s GDP reached 5.67 trillion yuan; the financial industry produced 897.97 billion yuan, up 9.7%, and information transmission, software and IT services 713.99 billion, up 15.3%, the fastest-growing services.':
    'Nel 2025 il PIL di Shanghai ha raggiunto 5,67 mila miliardi di yuan; la finanza ha prodotto 897,97 miliardi di yuan, il 9,7% in più, e i servizi di trasmissione dati, software e IT 713,99 miliardi, il 15,3% in più, i servizi in crescita più rapida.',
  'The UK Foreign Office warns that China’s national security laws are broad, that people can be detained without having intended to break the law, that there is a risk of arbitrary detention, British nationals included, and that people linked to business disputes can be stopped from leaving China by an exit ban.':
    'Il Foreign Office britannico avverte che le leggi cinesi sulla sicurezza nazionale hanno una portata ampia, che si può essere detenuti senza aver voluto violare la legge, che esiste un rischio di detenzione arbitraria, anche per i britannici, e che chi è coinvolto in controversie d’affari può essere bloccato in Cina da un divieto di espatrio.',
  'The capital and China’s second city economy after Shanghai':
    'La capitale e la seconda economia urbana della Cina dopo Shanghai',
  '4.47769 trillion yuan of added value (2025)':
    '4,47769 mila miliardi di yuan di valore aggiunto (2025)',
  'China’s electronics and software city on the Hong Kong border':
    'La città cinese dell’elettronica e del software al confine con Hong Kong',
  'Software and information-services firms':
    'Le aziende di software e servizi informatici',
  'over 800 billion yuan (2025)':
    'oltre 800 miliardi di yuan (2025)',
  'Artificial-intelligence enterprises':
    'Le imprese di intelligenza artificiale',
  'more than 2,600':
    'oltre 2.600',
  'Southern China’s trade, port and parcel-delivery hub':
    'Il polo della Cina meridionale per commercio, porto e spedizioni',
  'Ports and logistics':
    'Porti e logistica',
  'Trade':
    'Commercio',
  'over 28 million TEU (2025)':
    'oltre 28 milioni di TEU (2025)',
  'Zhejiang’s capital and a platform-economy city':
    'Il capoluogo dello Zhejiang e una città dell’economia delle piattaforme',
  'Service-sector employers':
    'I datori di lavoro dei servizi',
  '1.70 trillion yuan of output (2025)':
    '1,70 mila miliardi di yuan di produzione (2025)',
  'A manufacturing city next to Shanghai':
    'Una città manifatturiera accanto a Shanghai',
  'Machinery':
    'Macchinari',
  'Large industrial enterprises':
    'Le grandi imprese industriali',
  '4,896.64 billion yuan of output (2025)':
    '4.896,64 miliardi di yuan di produzione (2025)',
  'Central China’s industrial and university city':
    'La città industriale e universitaria della Cina centrale',
  'High-tech manufacturers':
    'I produttori ad alta tecnologia',
  '26.2% of large-industry added value (2025)':
    '26,2% del valore aggiunto della grande industria (2025)',
  'A western municipality of car and electronics makers':
    'Una municipalità occidentale di produttori di auto ed elettronica',
  'Businesses in the municipality':
    'Le imprese della municipalità',
  'GDP of about 3.37 trillion yuan (2025)':
    'PIL di circa 3,37 mila miliardi di yuan (2025)',
  'Sichuan’s capital, in the Chengdu–Chongqing economic zone':
    'Il capoluogo del Sichuan, nella zona economica Chengdu–Chongqing',
  'Electronics and car makers in the Chengdu–Chongqing zone':
    'I produttori di elettronica e auto della zona Chengdu–Chongqing',
  'over 10% of China’s output':
    'oltre il 10% della produzione cinese',
  'Beijing’s GDP reached 5.20734 trillion yuan in 2025, up 5.4%, passing 5 trillion yuan for the first time; services added 4.47769 trillion yuan.':
    'Nel 2025 il PIL di Pechino ha raggiunto 5,20734 mila miliardi di yuan, il 5,4% in più, superando per la prima volta i 5 mila miliardi di yuan; i servizi hanno aggiunto 4,47769 mila miliardi di yuan.',
  'Shenzhen’s GDP reached 3.87 trillion yuan in 2025; networks and communications, software and information services, and intelligent connected vehicles each passed 800 billion yuan in scale, and the city has more than 2,600 artificial-intelligence enterprises above designated size.':
    'Nel 2025 il PIL di Shenzhen ha raggiunto 3,87 mila miliardi di yuan; reti e comunicazioni, software e servizi informatici e veicoli connessi intelligenti hanno superato ciascuno 800 miliardi di yuan, e la città conta oltre 2.600 imprese di intelligenza artificiale sopra la soglia dimensionale.',
  'Guangzhou’s GDP reached 3.2 trillion yuan in 2025, up 4%; its container throughput passed 28 million TEU, among the world’s top six, and its express deliveries exceeded 20 billion items, the most in the country.':
    'Nel 2025 il PIL di Guangzhou ha raggiunto 3,2 mila miliardi di yuan, il 4% in più; il traffico container ha superato 28 milioni di TEU, tra i primi sei al mondo, e le spedizioni espresse hanno superato 20 miliardi di colli, il numero più alto del paese.',
  'Hangzhou’s GDP reached 2.30 trillion yuan in 2025, up 5.2%; services contributed 1.70 trillion yuan.':
    'Nel 2025 il PIL di Hangzhou ha raggiunto 2,30 mila miliardi di yuan, il 5,2% in più; i servizi hanno contribuito per 1,70 mila miliardi di yuan.',
  'Suzhou’s GDP reached 2,769.51 billion yuan in 2025, up 5.4%; its large industrial enterprises produced output worth 4,896.64 billion yuan.':
    'Nel 2025 il PIL di Suzhou ha raggiunto 2.769,51 miliardi di yuan, il 5,4% in più; le sue grandi imprese industriali hanno prodotto per 4.896,64 miliardi di yuan.',
  'Wuhan’s GDP reached 2.2147 trillion yuan in 2025, up 5.6%; large high-tech manufacturers made 26.2% of the added value of the city’s large industrial enterprises.':
    'Nel 2025 il PIL di Wuhan ha raggiunto 2,2147 mila miliardi di yuan, il 5,6% in più; i grandi produttori ad alta tecnologia hanno generato il 26,2% del valore aggiunto delle grandi imprese industriali della città.',
  'Chongqing’s GDP reached about 3.37 trillion yuan in 2025, up 5.3%, according to the mayor’s government work report.':
    'Secondo la relazione di governo del sindaco, nel 2025 il PIL di Chongqing ha raggiunto circa 3,37 mila miliardi di yuan, il 5,3% in più.',
  'The Chengdu–Chongqing economic zone was expected to reach a GDP of 8.6 trillion yuan in 2024, over 6.5% of China’s total, and accounts for over 10% of the country’s car production and electronic-information output.':
    'Per la zona economica Chengdu–Chongqing era atteso un PIL di 8,6 mila miliardi di yuan nel 2024, oltre il 6,5% del totale cinese, e la zona produce oltre il 10% delle auto e dell’elettronica e informatica del paese.',
  'No family is rated in Beijing, Hangzhou, Suzhou, Wuhan, Chongqing or Chengdu: the city releases read give output, not graduate hiring by role. Chengdu’s own 2025 figure was not found on an official page.':
    'Nessuna famiglia è valutata a Pechino, Hangzhou, Suzhou, Wuhan, Chongqing o Chengdu: i comunicati cittadini letti riportano la produzione, non le assunzioni di laureati per ruolo. Il dato 2025 di Chengdu non è stato trovato su una pagina ufficiale.',

  'China entry rules (30-day visa-free for EU/Italian and UK citizens to 31 Dec 2026), Work Permits (Class A/B/C), K visa for STEM, and student regulations are fully verified in visas_immigration/china/china_visas_immigration_guide.md.':
    'Le regole di ingresso in Cina (30 giorni senza visto per cittadini UE/italiani e UK fino al 31 dicembre 2026), i permessi di lavoro (Classi A/B/C), il visto K per STEM e la disciplina per studenti sono interamente verificati in visas_immigration/china/china_visas_immigration_guide.md.',
  'The graduate work-permit rule dates from national circular 3/2017 (MOHRSS, MFA, MOE); well-known foreign universities are defined as Top 500 in global rankings; details in visas_immigration/china/china_visas_immigration_guide.md.':
    'La regola sul permesso di lavoro per laureati risale alla circolare nazionale 3/2017 (MOHRSS, MFA, MOE); le università estere rinomate sono definite come Top 500 nei ranking globali; dettagli in visas_immigration/china/china_visas_immigration_guide.md.',
  'City average wages (urban non-private units, 2025) were read for Shenzhen, Guangzhou, Suzhou and Chengdu (the last as republished by a city information site); no readable page was found for Shanghai, Beijing, Hangzhou, Wuhan or Chongqing, and one search summary of a Hangzhou figure was not used.':
    'I salari medi cittadini (unità urbane non private, 2025) sono stati letti per Shenzhen, Guangzhou, Suzhou e Chengdu (l’ultimo ripubblicato da un sito informativo della città); non è stata trovata alcuna pagina leggibile per Shanghai, Pechino, Hangzhou, Wuhan o Chongqing, e un dato di Hangzhou comparso solo nel riassunto di una ricerca non è stato usato.',
  'Chongqing’s statistics bureau could not be read directly: its population and exact GDP come from press and portal reports of the 2025 bulletin, not the bulletin itself.':
    'L’ufficio statistico di Chongqing non si è potuto leggere direttamente: popolazione e PIL esatto provengono da articoli di stampa e di portali sul bollettino 2025, non dal bollettino stesso.',
  'No named employer headquarters were read for Hangzhou, Suzhou, Wuhan, Chongqing or Chengdu (Alibaba’s own page does not give its headquarters); their ratings rest on city statistics, not on named firms.':
    'Per Hangzhou, Suzhou, Wuhan, Chongqing e Chengdu non è stata letta la sede di alcun datore di lavoro (la pagina di Alibaba non indica la sede); le valutazioni si basano su statistiche cittadine, non su aziende citate.',
  'Rents are Numbeo’s crowd-sourced one-bedroom prices in the city centre (yuan, October 2026): a signal, not a statistic, and read through a text proxy because the site blocks direct access.':
    'Gli affitti sono i prezzi dei bilocali in centro raccolti dagli utenti di Numbeo (yuan, ottobre 2026): un segnale, non una statistica, letti tramite un proxy di testo perché il sito blocca l’accesso diretto.',
  'Country brief: nine hubs, employers, pay and standing': 'Dossier paese: nove poli, datori di lavoro, stipendi e posizionamento',
  'lists options on all the non-ferrous metals': 'quota opzioni su tutti i metalli non ferrosi',
  'inaugurated in 2025': 'inaugurato nel 2025',
  'Guotai Junan and Haitong Securities merged in 2025': 'Guotai Junan e Haitong Securities si sono fuse nel 2025',
  '55.06 million TEU in 2025': '55,06 milioni di TEU nel 2025',
  '47 in the 2025 list, more than any other city': '47 nella classifica 2025, più di ogni altra città',
  'Fortune Global 500 headquarters': 'Le sedi di società della Fortune Global 500',
  '209 large models filed, nearly a third of China’s total': '209 grandi modelli registrati, quasi un terzo del totale cinese',
  'Large-model developers': 'Gli sviluppatori di grandi modelli',
  '27.1 trillion yuan of deposits at the end of 2025': '27,1 mila miliardi di yuan di depositi a fine 2025',
  'Banks and other financial institutions': 'Le banche e altre istituzioni finanziarie',
  'smart factory and car factory in Beijing': 'fabbrica intelligente e fabbrica di auto a Pechino',
  'headquartered in Shenzhen since its founding in 1998': 'ha sede a Shenzhen dalla fondazione nel 1998',
  '526.16 billion yuan of added value, up 12.1% (2025)': '526,16 miliardi di yuan di valore aggiunto, +12,1% (2025)',
  'Financial institutions': 'Le istituzioni finanziarie',
  '35.41 million TEU in 2025': '35,41 milioni di TEU nel 2025',
  '83.59 million passengers in 2025': '83,59 milioni di passeggeri nel 2025',
  '46.3% of the city’s large-industry added value': '46,3% del valore aggiunto della grande industria della città',
  'Car, electronics and petrochemical makers': 'I produttori di auto, elettronica e prodotti petrolchimici',
  '322.10 billion yuan of added value, up 7.0% (2025)': '322,10 miliardi di yuan di valore aggiunto, +7,0% (2025)',
  '678 billion yuan of added value, 29.5% of GDP (2025)': '678 miliardi di yuan di valore aggiunto, 29,5% del PIL (2025)',
  'Digital-economy core industries': 'Il nucleo dell’economia digitale',
  '1,511.6 billion yuan of revenue, up 13.5% (2025)': '1.511,6 miliardi di yuan di ricavi, +13,5% (2025)',
  '274.1 billion yuan of added value (2025)': '274,1 miliardi di yuan di valore aggiunto (2025)',
  'goods trade of 2,811.93 billion yuan in 2025, a record': 'scambi di merci per 2.811,93 miliardi di yuan nel 2025, un record',
  'Exporters and importers': 'Gli esportatori e importatori',
  'integrated-circuit wafer output up 13.6%, industrial robots up 20.6%':
    'produzione di wafer per circuiti integrati +13,6%, robot industriali +20,6%',
  'Chip and robot makers': 'I produttori di chip e robot',
  '811,000 vehicles built in 2025': '811.000 veicoli prodotti nel 2025',
  'Car makers': 'Le case automobilistiche',
  '225,300 postgraduate and 1.22 million undergraduate and college students':
    '225.300 studenti di post-laurea e 1,22 milioni di studenti universitari e di college',
  'Universities': 'Le università',
  '72,300 jobs, revenue up 16.2% (2025)': '72.300 posti di lavoro, ricavi +16,2% (2025)',
  'Software and IT-services firms above designated size': 'Le aziende di software e servizi IT sopra la soglia dimensionale',
  '240.52 billion yuan of added value (2025)': '240,52 miliardi di yuan di valore aggiunto (2025)',
  '213.61 billion yuan of added value, up 9.6% (2025)': '213,61 miliardi di yuan di valore aggiunto, +9,6% (2025)',
  'headquarters at Bantian, Longgang District; about 213,000 employees worldwide':
    'sede a Bantian, distretto di Longgang; circa 213.000 dipendenti nel mondo',
  'Pay across cities': 'Stipendi nelle diverse città',
  'Pay by sector': 'Stipendi per settore',
  'The Global Financial Centres Index 40 (September 2026) ranks Shanghai fifth in the world and third in Asia/Pacific, Shenzhen eighth, Beijing 16th, Guangzhou 28th, Chengdu 34th, Hangzhou 59th and Wuhan 66th; Suzhou and Chongqing are not listed.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Shanghai al quinto posto nel mondo e al terzo in Asia-Pacifico, Shenzhen all’ottavo, Pechino al 16°, Guangzhou al 28°, Chengdu al 34°, Hangzhou al 59° e Wuhan al 66°; Suzhou e Chongqing non sono in elenco.',
  'Startup Genome’s 2026 report ranks Beijing sixth in the world and first in Asia (and first in Asia for AI-native clusters), Shanghai 11th (fourth in Asia), Shenzhen 19th (seventh in Asia), Hangzhou 28th and Guangzhou 38th.':
    'Il rapporto 2026 di Startup Genome colloca Pechino al sesto posto nel mondo e al primo in Asia (e al primo in Asia per i poli nativi dell’IA), Shanghai all’11° (quarta in Asia), Shenzhen al 19° (settima in Asia), Hangzhou al 28° e Guangzhou al 38°.',
  'Beijing was home to 47 companies on the 2025 Fortune Global 500, more than Tokyo (26) and New York (14) combined; in 2026 Fortune again names Beijing first among cities, with Tokyo, New York, London and Paris.':
    'Nel 2025 Pechino ospitava 47 società della Fortune Global 500, più di Tokyo (26) e New York (14) messe insieme; nel 2026 Fortune indica di nuovo Pechino al primo posto tra le città, con Tokyo, New York, Londra e Parigi.',
  'By the end of 2025 Beijing had filed 209 large AI models, nearly a third of the national total, and its large and medium key enterprises spent 429.88 billion yuan on research and development, 320.11 billion of it in information transmission, software and IT services.':
    'Alla fine del 2025 Pechino aveva registrato 209 grandi modelli di IA, quasi un terzo del totale nazionale, e le sue principali imprese grandi e medie hanno speso 429,88 miliardi di yuan in ricerca e sviluppo, 320,11 miliardi dei quali in trasmissione dati, software e servizi IT.',
  'At the end of 2025 deposits in Beijing’s financial institutions, foreign ones included, stood at 27.1 trillion yuan and loans at 12.3 trillion.':
    'Alla fine del 2025 i depositi presso le istituzioni finanziarie di Pechino, comprese quelle estere, erano 27,1 mila miliardi di yuan e i prestiti 12,3 mila miliardi.',
  'Xiaomi’s own global site presents a smart factory and an auto factory, both in Beijing, where production, testing and sales and customer experience are brought together.':
    'Il sito globale di Xiaomi presenta una fabbrica intelligente e una fabbrica di auto, entrambe a Pechino, dove si riuniscono produzione, collaudo, vendita ed esperienza del cliente.',
  'Shanghai’s port handled 55.06 million TEU in 2025, up 6.9%, of which 53.0% was transhipment between ships; the airports at Pudong and Hongqiao carried 135.1 million passengers.':
    'Nel 2025 il porto di Shanghai ha movimentato 55,06 milioni di TEU, il 6,9% in più, di cui il 53,0% in trasbordo tra navi; gli aeroporti di Pudong e Hongqiao hanno trasportato 135,1 milioni di passeggeri.',
  'Tencent says it was founded in 1998 with its headquarters in Shenzhen.':
    'Tencent dichiara di essere stata fondata nel 1998 con sede a Shenzhen.',
  'In 2025 Shenzhen’s financial industry added 526.16 billion yuan, up 12.1%, and information transmission, software and IT services 524.47 billion, up 10.3%; its port handled 35.41 million TEU, up 6.0%.':
    'Nel 2025 la finanza di Shenzhen ha aggiunto 526,16 miliardi di yuan, il 12,1% in più, e trasmissione dati, software e servizi IT 524,47 miliardi, il 10,3% in più; il porto ha movimentato 35,41 milioni di TEU, il 6,0% in più.',
  'In 2025 Guangzhou’s financial industry added 322.10 billion yuan, up 7.0%; its port handled 28.05 million TEU and Baiyun airport 83.59 million passengers; cars, electronics and petrochemicals made 46.3% of large-industry added value.':
    'Nel 2025 la finanza di Guangzhou ha aggiunto 322,10 miliardi di yuan, il 7,0% in più; il porto ha movimentato 28,05 milioni di TEU e l’aeroporto di Baiyun 83,59 milioni di passeggeri; auto, elettronica e petrolchimica hanno generato il 46,3% del valore aggiunto della grande industria.',
  'Hangzhou’s core digital-economy industries added 678 billion yuan in 2025, 29.5% of GDP; information, software and IT services earned 1,511.6 billion yuan of revenue among services above designated size, up 13.5%, and the financial industry added 274.1 billion.':
    'Nel 2025 i settori centrali dell’economia digitale di Hangzhou hanno aggiunto 678 miliardi di yuan, il 29,5% del PIL; informazione, software e servizi IT hanno ricavato 1.511,6 miliardi di yuan tra i servizi sopra la soglia dimensionale, il 13,5% in più, e la finanza ha aggiunto 274,1 miliardi.',
  'Suzhou’s goods imports and exports reached a record 2,811.93 billion yuan in 2025, up 7.4%, and output of integrated-circuit wafers rose 13.6% and of industrial robots 20.6%.':
    'Nel 2025 import ed export di merci di Suzhou hanno raggiunto il record di 2.811,93 miliardi di yuan, il 7,4% in più, e la produzione di wafer per circuiti integrati è salita del 13,6% e quella di robot industriali del 20,6%.',
  'Wuhan built 811,000 vehicles in 2025, and its electronics manufacturing grew 18.9%; the city had 225,300 postgraduate and 1,218,700 undergraduate and college students.':
    'Nel 2025 Wuhan ha prodotto 811.000 veicoli e la sua manifattura elettronica è cresciuta del 18,9%; la città contava 225.300 studenti di post-laurea e 1.218.700 studenti universitari e di college.',
  'In 2025 Chongqing’s software and IT-services firms above designated size grew revenue 16.2% and employed 72,300 people; output of new-energy vehicles rose 36.0%.':
    'Nel 2025 le aziende di software e servizi IT di Chongqing sopra la soglia dimensionale hanno aumentato i ricavi del 16,2% e impiegavano 72.300 persone; la produzione di veicoli a nuova energia è salita del 36,0%.',
  'In 2025 Chengdu’s financial industry added 240.52 billion yuan and its information transmission, software and IT services 213.61 billion, up 9.6%.':
    'Nel 2025 la finanza di Chengdu ha aggiunto 240,52 miliardi di yuan e trasmissione dati, software e servizi IT 213,61 miliardi, il 9,6% in più.',
  'Huawei gives its headquarters as Huawei Base, Bantian, Longgang District, Shenzhen, and says it has approximately 213,000 employees in more than 170 countries and regions, 100% privately owned by employees.':
    'Huawei indica come sede Huawei Base, Bantian, distretto di Longgang, Shenzhen, e dichiara circa 213.000 dipendenti in oltre 170 paesi e regioni, di proprietà al 100% dei dipendenti.',
  'In 2025 the average annual wage in urban non-private units was 248,752 yuan in information transmission, software and IT services and 211,164 in finance, against 129,441 across all sectors and 113,594 in manufacturing; averages for all ages, not entry pay.':
    'Nel 2025 il salario medio annuo nelle unità urbane non private era di 248.752 yuan in trasmissione dati, software e servizi IT e 211.164 nella finanza, contro 129.441 in tutti i settori e 113.594 nella manifattura; medie per tutte le età, non stipendi di ingresso.',
  'In the first half of 2026 the surveyed urban unemployment rate averaged 5.2% (5.0% in June) and 5.1% in the 31 large cities; for ages 30 to 59 it averaged 4.1%.':
    'Nel primo semestre 2026 il tasso di disoccupazione urbana rilevato è stato in media del 5,2% (5,0% a giugno) e del 5,1% nelle 31 grandi città; per i 30–59 anni è stato in media del 4,1%.',
  'Chinese-language CVs are expected for local employers; bilingual CVs are recommended for joint ventures, wholly foreign-owned firms and multinationals, and English counts as an asset mainly for international or overseas-facing roles.':
    'Per i datori di lavoro locali si aspettano CV in cinese; per joint venture, aziende a capitale interamente straniero e multinazionali si raccomandano CV bilingue, e l’inglese è un punto a favore soprattutto per i ruoli internazionali o rivolti all’estero.',
  'Campus hiring has two peaks: autumn recruitment from September to November or December, the main one, with tech firms opening an early batch in June or July and most offers made in November and December; and a smaller spring round from February or March to April or May.':
    'Il reclutamento nei campus ha due picchi: la campagna d’autunno da settembre a novembre o dicembre, la principale, con le aziende tech che aprono un lotto anticipato a giugno o luglio e la maggior parte delle offerte tra novembre e dicembre; e una tornata di primavera più piccola da febbraio o marzo ad aprile o maggio.',
  'Huawei announced its graduate drive for the class of 2026 on 15 August 2025 and its internship drive for the class of 2027 on 15 March 2026; its 2025 cycle started on 14 August 2024 and 15 March 2024.':
    'Huawei ha annunciato la campagna per i neolaureati della classe 2026 il 15 agosto 2025 e quella per i tirocinanti della classe 2027 il 15 marzo 2026; il ciclo 2025 era partito il 14 agosto 2024 e il 15 marzo 2024.',
  'The four big state banks (ICBC, CCB, ABC and Bank of China) plan to hire about 64,000 graduates in the 2026 campus round, down from 71,500 a year earlier and 77,600 in 2024, and want graduates who combine technology and banking.':
    'Le quattro grandi banche statali (ICBC, CCB, ABC e Bank of China) prevedono di assumere circa 64.000 laureati nella tornata di reclutamento 2026, contro 71.500 l’anno prima e 77.600 nel 2024, e vogliono laureati che uniscano tecnologia e banca.',
  'A record 12.7 million students graduated in 2026, and unemployment among 16-to-24-year-olds outside school reached 18.9% in August 2026, the peak month when graduates enter the market.':
    'Un record di 12,7 milioni di studenti si è laureato nel 2026, e la disoccupazione dei 16-24enni non studenti ha raggiunto il 18,9% ad agosto 2026, il mese di picco in cui i laureati entrano nel mercato.',
  'The average annual wage in China’s urban non-private units was 129,441 yuan in 2025, up 4.3% (about 10,800 yuan a month); Shenzhen’s was 191,367 yuan, Guangzhou’s 166,790, Chengdu’s 131,874 and Suzhou’s 146,353.':
    'Nel 2025 il salario medio annuo nelle unità urbane non private della Cina era di 129.441 yuan, il 4,3% in più (circa 10.800 yuan al mese); a Shenzhen 191.367 yuan, a Guangzhou 166.790, a Chengdu 131.874 e a Suzhou 146.353.'
});

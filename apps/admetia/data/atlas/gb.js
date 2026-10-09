/* Atlas record: United Kingdom. Read 2 October 2026; log P41
 * (research/verification/round-4b.md; round 5, 3 October 2026:
 * research/verification/round-5b.md). Visa rules are the library's
 * (research/places/visas-and-work-rights.md §1, verified 30 Sep – 2 Oct 2026); the
 * Graduate visa length, tax and NI number were re-read on GOV.UK. A UK
 * passport is at home here, so it gets no route.
 * Round 5 added hub metrics (ONS: population, GDP by local authority, ASHE
 * pay, private rents), standing for every hub, ONS employment counts by
 * industry, GFCI and start-up rankings and named employers (Companies House). */

ATLAS.add({
  id: 'GB',
  checked: '2026-10-03',
  log: 'P41',
  summary: 'London is Europe’s largest finance and professional-services market — the City alone has 225,000 finance jobs — and the UK’s biggest tech cluster. Edinburgh adds asset management, Manchester, Leeds and Birmingham professional services and digital, Cambridge a knowledge-intensive cluster of 100,000 jobs. Since Brexit an EU passport needs a visa like any other, and the post-study visa shrinks to 18 months from January 2027.',
  sectors: [
    'Banking and investment',
    'Asset management and insurance',
    'Professional services',
    'Technology',
    'Media and creative industries',
    'Life sciences'
  ],
  roles: ['finance', 'management', 'accounting', 'software', 'it'],
  hubs: [
    {
      id: 'london', name: 'London', lat: 51.51, lon: -0.10,
      knownFor: 'Banking, asset management, consulting, accountancy and tech',
      why: ['gb-lon-city', 'gb-lon-tech', 'gb-lon-gfci', 'gb-lon-bres', 'gb-lon-gser'],
      sectors: ['Banking', 'Fund management', 'Insurance', 'Legal services', 'Management consultancy', 'Accountancy', 'Technology'],
      employers: [
        { name: 'City of London', note: '676,000 workers, a third of them in finance', c: 'gb-lon-city' },
        { t: 'London’s tech firms', note: '39,266 tech establishments', c: 'gb-lon-tech' },
        { name: 'HSBC', note: 'group registered office at 8 Canada Square, Canary Wharf', c: 'gb-lon-hsbc' },
        { name: 'Barclays', note: 'registered office at 1 Churchill Place, Canary Wharf', c: 'gb-lon-barclays' },
        { name: 'London Stock Exchange Group', note: 'registered office at 10 Paternoster Square', c: 'gb-lon-lseg' },
        { name: 'Deloitte', note: 'UK firm’s registered office at 1 New Street Square', c: 'gb-lon-deloitte' },
        { name: 'KPMG', note: 'UK firm’s registered office at 15 Canada Square', c: 'gb-lon-kpmg' },
        { name: 'Revolut', note: 'registered office at 30 South Colonnade, Canary Wharf', c: 'gb-lon-revolut' }
      ],
      demand: {
        finance: ['dominant', 'gb-lon-city', 'gb-lon-gfci', 'gb-lon-hsbc-grad', 'gb-lon-barclays-grad'],
        management: ['strong', 'gb-lon-city', 'gb-lon-bres', 'gb-lon-kpmg-grad'],
        accounting: ['strong', 'gb-lon-city', 'gb-lon-bres', 'gb-lon-kpmg-grad'],
        software: ['strong', 'gb-lon-tech', 'gb-lon-city', 'gb-lon-gser', 'gb-lon-dealroom'],
        it: ['strong', 'gb-lon-tech', 'gb-lon-city', 'gb-lon-bres'],
        business: ['strong', 'gb-lon-bres', 'gb-lon-city'],
        ai: ['strong', 'gb-lon-gser', 'gb-lon-dealroom'],
        economics: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['dominant', 'gb-lon-city'],
        am: ['strong', 'gb-lon-city'],
        ib: ['strong', 'gb-lon-city', 'gb-cal'],
        finconsult: ['strong', 'gb-lon-city'],
        vc: ['strong', 'gb-lon-vc'],
        pe: 'gap', corpfin: 'gap', risk: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 5, 5], c: ['gb-lon-gfci', 'gb-lon-city', 'gb-cityuk'] },
        { f: 'software', s: [5, 5, 4], c: ['gb-lon-gser', 'gb-lon-dealroom', 'gb-lon-tech'] },
        { f: 'it', s: [5, 5, 4], c: ['gb-lon-bres', 'gb-lon-gser', 'gb-lon-dealroom'] },
        { f: 'ai', s: [5, 5, 3], c: ['gb-lon-gser', 'gb-lon-dealroom'] },
        { f: 'management', s: [5, 3, 3], c: ['gb-lon-bres', 'gb-lon-city'] },
        { f: 'accounting', s: [5, 3, 3], c: ['gb-lon-bres', 'gb-lon-city'] },
        { f: 'business', s: [5, 3, 3], c: ['gb-lon-bres', 'gb-lon-city'] }
      ],
      metrics: {
        pop: { v: 9122909, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis). Greater London (all 33 boroughs and the City) is used for London.', seen: '2026-10-03' },
        gdp: { v: 617.9, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000. Greater London (all 33 boroughs and the City) is used for London.', seen: '2026-10-03' },
        wage: { v: 4141, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis). The London region is used for London.', seen: '2026-10-03' },
        rent: { v: 2332, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities). Greater London is used for London.', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'lbs-mim', name: 'London Business School — MiM' },
        { calc: 'masters', track: 'mim', id: 'lse-mim', name: 'LSE — Master\'s in Management' },
        { calc: 'masters', track: 'mim', id: 'imperial-mgmt', name: 'Imperial College — MSc Management' },
        { calc: 'masters', track: 'mif', id: 'lbs-mfa', name: 'London Business School — Masters in Financial Analysis' },
        { calc: 'masters', track: 'mif', id: 'imperial-fin', name: 'Imperial College — MSc Finance' },
        { calc: 'masters', track: 'mif', id: 'lse-fin', name: 'LSE — MSc Finance' },
        { calc: 'masters', track: 'marketing', id: 'imperial-mkt', name: 'Imperial College — MSc Strategic Marketing' },
        { calc: 'masters', track: 'marketing', id: 'lse-mkt', name: 'LSE — MSc Marketing' },
        { calc: 'computing', track: 'cs', id: 'imperial-advcomp', name: 'Imperial — MSc Advanced Computing' },
        { calc: 'computing', track: 'dsai', id: 'imperial-aiml', name: 'Imperial — MSc Computing (AI and Machine Learning)' },
        { calc: 'computing', track: 'dsai', id: 'ucl-dsml', name: 'UCL — MSc Data Science and Machine Learning' },
        { calc: 'computing', track: 'dsai', id: 'kcl-ai', name: 'King\'s College London — MSc Artificial Intelligence' },
        { calc: 'computing', track: 'conversion', id: 'imperial-computing', name: 'Imperial — MSc Computing (conversion)' },
        { calc: 'computing', track: 'conversion', id: 'ucl-cs-conv', name: 'UCL — MSc Computer Science (conversion)' },
        { calc: 'mba', name: 'London Business School (MBA)' }
      ]
    },
    {
      id: 'edinburgh', name: 'Edinburgh', lat: 55.95, lon: -3.19,
      knownFor: 'Asset management, banking and insurance',
      why: ['gb-edi-fs', 'gb-edi-bres', 'gb-edi-gfci', 'gb-edi-gser'],
      sectors: ['Asset management', 'Banking', 'Insurance and pensions'],
      employers: [
        { name: 'Bank of Scotland, Scottish Widows', note: 'banking and pensions', c: 'gb-edi-fs' },
        { name: 'NatWest Group', note: 'registered office at 36 St Andrew Square', c: 'gb-edi-natwest' },
        { name: 'Lloyds Banking Group', note: 'registered office on The Mound', c: 'gb-edi-lloyds' },
        { name: 'Baillie Gifford & Co', note: 'registered office at 3 Haymarket Square', c: 'gb-edi-bg' },
        { name: 'Aberdeen Group', note: 'registered office at 1 George Street', c: 'gb-edi-abrdn' }
      ],
      demand: {
        finance: ['strong', 'gb-edi-fs', 'gb-edi-bres', 'gb-edi-gfci'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        am: ['strong', 'gb-edi-fs', 'gb-edi-bres'],
        banking: ['present', 'gb-edi-fs', 'gb-edi-natwest'],
        ib: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 3, 2], c: ['gb-edi-bres', 'gb-edi-gfci', 'gb-edi-fs'] }
      ],
      metrics: {
        pop: { v: 531370, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 36.5, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3643, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1415, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities). Lothian Broad Rental Market Area (Edinburgh and surroundings).', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'computing', track: 'dsai', id: 'edinburgh-ai', name: 'Edinburgh — MSc Artificial Intelligence' },
        { calc: 'computing', track: 'cs', id: 'edinburgh-informatics', name: 'Edinburgh — MSc Informatics' }
      ]
    },
    {
      id: 'manchester', name: 'Manchester', lat: 53.48, lon: -2.24,
      knownFor: 'Digital, media and cyber security',
      why: ['gb-man-digital', 'gb-man-bres', 'gb-man-gser'],
      sectors: ['Digital and software', 'Media and broadcasting', 'Cyber security', 'E-commerce'],
      employers: [
        { name: 'MediaCityUK (BBC, ITV, Ericsson)', note: 'over 250 media and digital businesses', c: 'gb-man-digital' },
        { name: 'GCHQ, Virgin Media, The Hut Group', note: 'cyber, telecoms and e-commerce', c: 'gb-man-digital' },
        { name: 'Auto Trader', note: 'registered office at 3 Circle Square', c: 'gb-man-autotrader' },
        { name: 'boohoo', note: 'online fashion retailer, registered office at 49–51 Dale Street', c: 'gb-man-boohoo' }
      ],
      demand: {
        it: ['strong', 'gb-man-digital', 'gb-man-bres'],
        software: ['strong', 'gb-man-digital', 'gb-man-bres', 'gb-man-gser'],
        marketing: ['present', 'gb-man-digital'],
        business: ['strong', 'gb-man-bres'],
        finance: ['strong', 'gb-man-bres'],
        accounting: ['strong', 'gb-man-bres'],
        management: ['strong', 'gb-man-bres'],
        economics: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'software', s: [4, 3, 2], c: ['gb-man-bres', 'gb-man-gser'] },
        { f: 'it', s: [4, 2, 1], c: ['gb-man-bres', 'gb-man-digital'] },
        { f: 'finance', s: [4, 2, 1], c: ['gb-man-bres'] },
        { f: 'accounting', s: [4, 2, 1], c: ['gb-man-bres'] },
        { f: 'management', s: [4, 2, 1], c: ['gb-man-bres'] },
        { f: 'business', s: [4, 2, 1], c: ['gb-man-bres'] }
      ],
      metrics: {
        pop: { v: 588256, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 38, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3373, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1373, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'manchester-mgmt', name: 'Alliance Manchester — MSc Management' },
        { calc: 'masters', track: 'mif', id: 'manchester-fin', name: 'Alliance Manchester — MSc Finance' },
        { calc: 'masters', track: 'marketing', id: 'manchester-mkt', name: 'Alliance Manchester — MSc Marketing' },
        { calc: 'computing', track: 'cs', id: 'manchester-acs', name: 'Alliance Manchester — MSc Advanced Computer Science' }
      ]
    },
    {
      id: 'cambridge', name: 'Cambridge', lat: 52.21, lon: 0.12,
      knownFor: 'A knowledge-intensive cluster of tech and life-science firms',
      why: ['gb-cam', 'gb-cam-bres', 'gb-cam-dealroom'],
      sectors: ['Life sciences', 'Technology', 'Research and development'],
      employers: [
        { t: 'Over 4,000 companies in 150 clusters', note: 'more than 100,000 employees within 20 miles', c: 'gb-cam' },
        { name: 'Cambridge Biomedical Campus', note: 'over 22,000 employees', c: 'gb-cam' },
        { name: 'Arm', note: 'chip-design company, registered office at 110 Fulbourn Road', c: 'gb-cam-arm' },
        { name: 'AstraZeneca', note: 'registered office on the Cambridge Biomedical Campus', c: 'gb-cam-az' },
        { name: 'Darktrace', note: 'cybersecurity company, registered office at St John’s Innovation Park', c: 'gb-cam-darktrace' }
      ],
      demand: {
        cs: ['strong', 'gb-cam-arm', 'gb-cam-dealroom'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'cs', s: [4, 4, 3], c: ['gb-cam-dealroom', 'gb-cam-bres', 'gb-cam-arm'] }
      ],
      metrics: {
        pop: { v: 149872, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 9.4, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3814, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1805, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'computing', track: 'cs', id: 'cambridge-acs', name: 'Cambridge — MPhil in Advanced Computer Science' },
        { calc: 'mba', name: 'Cambridge Judge (MBA)' }
      ]
    },
    {
      id: 'birmingham', name: 'Birmingham', lat: 52.49, lon: -1.89,
      knownFor: 'The largest employment centre in Great Britain outside London, by council area',
      why: ['gb-birmingham', 'gb-bham-bres', 'gb-bham-gser'],
      sectors: ['Professional services', 'Banking', 'Manufacturing'],
      employers: [
        { t: 'Information and communication employers', note: '20,000 jobs (2024)', c: 'gb-birmingham' },
        { t: 'Finance and insurance employers', note: '23,000 jobs (2024)', c: 'gb-birmingham' },
        { name: 'HSBC UK', note: 'registered office at 1 Centenary Square', c: 'gb-bham-hsbc' },
        { name: 'Mobico (National Express)', note: 'registered office at Birmingham Coach Station', c: 'gb-bham-mobico' }
      ],
      demand: {
        business: ['strong', 'gb-bham-bres'],
        finance: ['present', 'gb-bham-hsbc'],
        accounting: ['strong', 'gb-bham-bres'],
        management: ['strong', 'gb-bham-bres'],
        economics: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [4, 2, 1], c: ['gb-bham-bres'] },
        { f: 'management', s: [4, 2, 1], c: ['gb-bham-bres'] },
        { f: 'accounting', s: [4, 2, 1], c: ['gb-bham-bres'] }
      ],
      metrics: {
        pop: { v: 1176960, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 38.9, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3213, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1099, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'leeds', name: 'Leeds', lat: 53.80, lon: -1.55,
      knownFor: 'A northern hub for finance and the most information-and-communication jobs outside London among the cities compared',
      why: ['gb-leeds', 'gb-leeds-bres'],
      sectors: ['Banking', 'Technology', 'Public sector'],
      employers: [
        { t: 'Information and communication employers', note: '26,000 jobs (2024)', c: 'gb-leeds' },
        { t: 'Finance and insurance employers', note: '25,000 jobs (2024)', c: 'gb-leeds' },
        { name: 'Asda', note: 'registered office at Asda House, South Bank', c: 'gb-leeds-asda' },
        { name: 'Leeds Building Society', note: 'head office at 26 Sovereign Street', c: 'gb-leeds-lbs' }
      ],
      demand: {
        it: ['strong', 'gb-leeds'],
        finance: ['strong', 'gb-leeds'],
        business: ['strong', 'gb-leeds-bres'],
        management: ['strong', 'gb-leeds-bres'],
        software: ['strong', 'gb-leeds-bres'],
        economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['gb-leeds', 'gb-leeds-bres'] },
        { f: 'software', s: [4, 2, 1], c: ['gb-leeds-bres'] },
        { f: 'finance', s: [4, 2, 1], c: ['gb-leeds'] },
        { f: 'management', s: [4, 2, 1], c: ['gb-leeds-bres'] },
        { f: 'business', s: [4, 2, 1], c: ['gb-leeds-bres'] }
      ],
      metrics: {
        pop: { v: 840550, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 39.3, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3152, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1145, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'glasgow', name: 'Glasgow', lat: 55.86, lon: -4.25,
      knownFor: 'Scotland’s largest city, second outside London for finance jobs among the cities compared',
      why: ['gb-glasgow', 'gb-glasgow-bres', 'gb-edi-gfci'],
      sectors: ['Banking', 'Public sector', 'Higher education'],
      employers: [
        { t: 'Information and communication employers', note: '20,000 jobs (2024)', c: 'gb-glasgow' },
        { t: 'Finance and insurance employers', note: '27,000 jobs (2024)', c: 'gb-glasgow' },
        { name: 'ScottishPower', note: 'registered office at 320 St Vincent Street', c: 'gb-glasgow-spower' },
        { name: 'Weir Group', note: 'engineering group, registered office at 1 West Regent Street', c: 'gb-glasgow-weir' },
        { name: 'Aggreko', note: 'power-rental company, registered office in the Sentinel Building', c: 'gb-glasgow-aggreko' }
      ],
      demand: {
        finance: ['strong', 'gb-glasgow', 'gb-glasgow-bres'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 2, 2], c: ['gb-glasgow-bres', 'gb-edi-gfci'] }
      ],
      metrics: {
        pop: { v: 654330, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 31.8, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3380, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1266, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities). Greater Glasgow Broad Rental Market Area.', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'bristol', name: 'Bristol', lat: 51.45, lon: -2.59,
      knownFor: 'The south-west’s tech and aerospace city',
      why: ['gb-bristol', 'gb-bristol-bres', 'gb-bristol-gser'],
      sectors: ['Technology', 'Aerospace', 'Professional services'],
      employers: [
        { t: 'Information and communication employers', note: '23,000 jobs (2024)', c: 'gb-bristol' },
        { t: 'Finance and insurance employers', note: '19,000 jobs (2024)', c: 'gb-bristol' },
        { name: 'Airbus', note: 'Filton site, registered office of Airbus Operations', c: 'gb-bristol-airbus' },
        { name: 'Hargreaves Lansdown', note: 'investment platform, registered office in Avon Street', c: 'gb-bristol-hl' },
        { name: 'OVO Energy', note: 'energy supplier, registered office at Temple Back', c: 'gb-bristol-ovo' }
      ],
      demand: {
        it: ['strong', 'gb-bristol'],
        finance: ['present', 'gb-bristol-hl'],
        accounting: ['strong', 'gb-bristol-bres'],
        marketing: ['strong', 'gb-bristol-bres'],
        software: ['strong', 'gb-bristol-bres'],
        business: 'gap', economics: 'gap', management: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['gb-bristol', 'gb-bristol-bres'] },
        { f: 'software', s: [4, 2, 1], c: ['gb-bristol-bres', 'gb-bristol-gser'] },
        { f: 'accounting', s: [4, 2, 1], c: ['gb-bristol-bres'] },
        { f: 'marketing', s: [4, 2, 1], c: ['gb-bristol-bres'] }
      ],
      metrics: {
        pop: { v: 495260, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 22.8, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3513, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1883, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'cardiff', name: 'Cardiff', lat: 51.48, lon: -3.18,
      knownFor: 'The Welsh capital, with a large finance and insurance sector for its size',
      why: ['gb-cardiff', 'gb-cardiff-bres', 'gb-cardiff-admiral'],
      sectors: ['Insurance', 'Public sector', 'Media'],
      employers: [
        { t: 'Information and communication employers', note: '9,000 jobs (2024)', c: 'gb-cardiff' },
        { t: 'Finance and insurance employers', note: '18,000 jobs (2024)', c: 'gb-cardiff' },
        { name: 'Admiral Group', note: 'insurer, headquarters at Tŷ Admiral; Wales’ only FTSE 100 company', c: 'gb-cardiff-admiral' }
      ],
      demand: {
        finance: ['present', 'gb-cardiff-admiral', 'gb-cardiff-admiral-ch'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['gb-cardiff-bres', 'gb-cardiff-admiral'] }
      ],
      metrics: {
        pop: { v: 381516, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 16.7, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3185, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1177, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'liverpool', name: 'Liverpool', lat: 53.41, lon: -2.98,
      knownFor: 'A port city on the Mersey',
      why: ['gb-liverpool', 'gb-liverpool-bres'],
      sectors: ['Ports and logistics', 'Public sector', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '9,000 jobs (2024)', c: 'gb-liverpool' },
        { t: 'Finance and insurance employers', note: '11,000 jobs (2024)', c: 'gb-liverpool' },
        { name: 'Peel Ports Group', note: 'port operator, registered office at the Port of Liverpool', c: 'gb-liverpool-peel' },
        { name: 'Bibby Line Group', note: 'registered office at Exchange Flags', c: 'gb-liverpool-bibby' }
      ],
      demand: {
        logistics: ['present', 'gb-liverpool-peel'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'logistics', s: [3, 2, 1], c: ['gb-liverpool-peel', 'gb-liverpool-bres'] }
      ],
      metrics: {
        pop: { v: 507915, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 20.3, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3203, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 913, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'newcastle', name: 'Newcastle', lat: 54.98, lon: -1.61,
      knownFor: 'The north-east’s main city',
      why: ['gb-newcastle', 'gb-newcastle-bres'],
      sectors: ['Public sector', 'Technology', 'Higher education'],
      employers: [
        { t: 'Information and communication employers', note: '8,000 jobs (2024)', c: 'gb-newcastle' },
        { t: 'Finance and insurance employers', note: '6,000 jobs (2024)', c: 'gb-newcastle' },
        { name: 'Sage Group', note: 'accounting-software company, registered office at Cobalt Park', c: 'gb-newcastle-sage' },
        { name: 'Greggs', note: 'registered office at Quorum Business Park', c: 'gb-newcastle-greggs' }
      ],
      demand: {
        software: ['present', 'gb-newcastle-sage'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'software', s: [3, 2, 1], c: ['gb-newcastle-sage', 'gb-newcastle-bres'] }
      ],
      metrics: {
        pop: { v: 320838, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 13.3, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3061, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1215, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'oxford', name: 'Oxford', lat: 51.75, lon: -1.26,
      knownFor: 'A university city with research and life-science employers',
      why: ['gb-oxford', 'gb-oxford-bres'],
      sectors: ['Higher education', 'Life sciences', 'Technology'],
      employers: [
        { t: 'Information and communication employers', note: '8,000 jobs (2024)', c: 'gb-oxford' },
        { t: 'Finance and insurance employers', note: '900 jobs (2024)', c: 'gb-oxford' },
        { name: 'Oxford Nanopore Technologies', note: 'DNA-sequencing company, registered office in the Oxford Science Park', c: 'gb-oxford-nanopore' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'cs', s: [3, 2, 1], c: ['gb-oxford-bres', 'gb-cam-dealroom'] }
      ],
      metrics: {
        pop: { v: 165940, year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/pestsyoala', by: 'ONS, mid-2025 population estimates by local authority (via Nomis).', seen: '2026-10-03' },
        gdp: { v: 9.1, cur: 'GBP', year: 2023, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp/datasets/regionalgrossdomesticproductlocalauthorities', by: 'ONS, Regional GDP: local authorities, 1998 to 2023 edition (17 Apr 2025), current market prices, £ million ÷ 1,000.', seen: '2026-10-03' },
        wage: { v: 3625, cur: 'GBP', basis: 'median', year: 2025, area: 'city', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/ashe', by: 'ONS, Annual Survey of Hours and Earnings 2025, workplace analysis, full-time employees, median annual gross pay ÷ 12 (via Nomis).', seen: '2026-10-03' },
        rent: { v: 1963, cur: 'GBP', year: 2026, area: 'city', tag: 'data', src: 'https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics', by: 'ONS, Price Index of Private Rents, August 2026: average monthly private rent, all property types and sizes (ONS publishes no one-bedroom rent for cities).', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Language', c: ['gb-lang'] },
    { k: 'Recruiting calendar', c: ['gb-cal', 'gb-cal-grad'] },
    { k: 'Graduate labour market', c: ['gb-glm-ons', 'gb-glm-hf'] },
    { k: 'Entry pay and competition', c: ['gb-isepay'] },
    { k: 'Where demand is now', c: ['gb-cityuk', 'gb-lon-bres', 'gb-man-bres'] },
    { k: 'Tax and net pay', c: ['gb-tax', 'gb-net'] }
  ],
  briefs: [
    ['countries/gb-united-kingdom.md', 'Country brief: hubs, employers, pay and standing'],
    ['places/visas-and-work-rights.md', '§1 United Kingdom: Graduate, Skilled Worker and HPI visas, the youth scheme'],
    ['getting-in/recruiting-calendar.md', '§1 and §8 London calendars and the one-year MSc problem'],
    ['money/salaries-and-roi.md', '§5 London net pay and rent'],
    ['careers/finance.md', 'investment banking, asset management, London'],
    ['places/student-logistics.md', 'IHS, proof of funds, work limits']
  ],
  gaps: [
    'No family is rated for Oxford: the sources read count its jobs and name one life-science employer, but give no evidence of entry-level hiring in any of the 14 families.',
    'Tech, data and AI demand outside London is rated from ONS employment counts by council area and from start-up rankings; no hub-by-family statistic for AI or data science was read.',
    'The UK–EU Youth Experience Scheme has no agreed terms; it is not shown as a route.',
    'Hubs in Great Britain are rated from ONS 2024 employment counts by council area: strong means first to third, with at least 5,000 jobs, among 14 big-city council areas outside London (Birmingham, Manchester, Leeds, Liverpool, Newcastle, Bristol, Sheffield, Nottingham, Cardiff, Glasgow, Edinburgh, Cambridge, Oxford, Bath), counting the whole of an industry section or two-digit industry. Belfast is not mapped: the survey covers Great Britain only.',
    'Rent is the ONS average for all property types and sizes, because ONS publishes no one-bedroom rent for cities; Edinburgh and Glasgow are rental-market areas that include surrounding councils.',
    'Economic output is shown for 2023 because the newest ONS local-authority edition (2024 data) withholds Bristol, Cardiff and Glasgow; pay is full-time workplace pay, so it reflects the jobs located in each city, not where people live.',
    'Employer entries rest on the Companies House registered office, which is not always where most staff work; headcounts per employer were not read.'
  ],
  claims: {
    'gb-lang': { t: 'Work and recruitment are in English, and the Skilled Worker visa requires English at CEFR level B2, proved by a UK degree, an approved test or an Ecctis assessment of a non-UK degree taught in English.', tag: 'data', src: 'https://www.gov.uk/skilled-worker-visa/knowledge-of-english', by: 'GOV.UK, Skilled Worker visa: knowledge of English', seen: '2026-10-08' },
    'gb-glm-ons': { t: 'The ONS puts UK unemployment at 4.9% for May to July 2026, up 0.2 points on the year, the employment rate (16 to 64) at 75.1%, and vacancies at 702,000 for June to August 2026.', tag: 'data', src: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/uklabourmarket/latest', by: 'ONS, UK labour market: September 2026 (released 15 September 2026)', seen: '2026-10-08' },
    'gb-glm-hf': { t: 'Graduate recruitment at the 100 leading UK employers fell 24.5% between 2022 and 2025, and their targets for 2026 are a further 0.5% lower; two fifths of them recruited fewer graduates in 2025.', tag: 'data', src: 'https://highfliers.co.uk/publication-the-graduate-market-report', by: 'High Fliers Research, The Graduate Market in 2026', seen: '2026-10-08' },
    'gb-cal-grad': { t: 'Autumn term is the peak for UK graduate recruitment; some employers advertise from July, and graduate programmes usually open in August or September with deadlines as early as October, for jobs that start the next summer or September.', tag: 'practitioner consensus', src: 'https://warwick.ac.uk/services/careers/blog/the_graduate_recruitment_process', by: 'University of Warwick careers service, and Imperial College London Careers Service (international students)', seen: '2026-10-08' },
    'gb-cal': { t: 'London banking applications open as early as July and close between October and December for internships the following summer; many roles are filled on a rolling basis before the deadline.', tag: 'practitioner consensus', src: 'research/getting-in/recruiting-calendar.md', by: 'LSE Careers and bank careers pages, via getting-in/recruiting-calendar.md', seen: '2026-10-02' },
    'gb-tax': { t: 'The first £12,570 of income is tax-free in the 2026–27 tax year; the allowance shrinks above £100,000.', tag: 'data', src: 'https://www.gov.uk/income-tax-rates', by: 'GOV.UK, Income Tax rates and allowances', seen: '2026-10-02' },
    'gb-net': { t: 'At €60,000 gross a single employee in London keeps about 79% after tax and National Insurance, but central rents leave less than in most continental cities.', tag: 'practitioner consensus', src: 'research/money/salaries-and-roi.md', by: 'Admetia research library, money/salaries-and-roi.md §5 (author calculation)', seen: '2026-10-02' },
    'gb-lon-city': { t: 'The City of London had 676,000 workers in 2024 — 225,000 in financial services and 181,000 in professional services, including 69,000 in banking, 29,000 in fund management, 48,000 in management consultancy and 26,000 in accountancy — and holds one in five of Great Britain’s finance jobs.', tag: 'data', src: 'https://www.cityoflondon.gov.uk/assets/Business/COL-City-Stats-Factsheet-February-2026-Accessible.pdf', by: 'City of London Corporation, City statistics factsheet, Feb 2026', seen: '2026-10-02' },
    'gb-lon-tech': { t: 'London has 39,266 tech establishments and leads UK cities in tech employment; tech roles are more than 7% of jobs there against 6.4% nationally.', tag: 'practitioner consensus', src: 'https://www.comptia.org/en-us/about-us/news/press-releases/UK-tech-workforce-tops-2.1-million-as-cross-industry-demand-drives-employment-growth-new-CompTIA-research-finds', by: 'CompTIA, State of the Tech Workforce UK 2026', seen: '2026-10-02' },
    'gb-edi-fs': { t: 'Scotland has more than 160,000 finance professionals and £480 billion of assets managed from it; Edinburgh is home to Baillie Gifford, Aberdeen Group, Bank of Scotland and Scottish Widows.', tag: 'data', src: 'https://www.sdi.co.uk/invest/industries/financial-services', by: 'Scottish Development International, financial services', seen: '2026-10-02' },
    'gb-man-digital': { t: 'Greater Manchester had 70,000 digital jobs in 2018; MediaCityUK in Salford, home to the BBC, ITV, Ericsson and over 250 media and digital firms, is Europe’s largest purpose-built media site, and GCHQ, Virgin Media and The Hut Group are major employers.', tag: 'data', src: 'https://gmacs.co.uk/sectors/digital-creative-media/', by: 'Greater Manchester Apprenticeship and Careers Service', seen: '2026-10-02' },
    'gb-cam': { t: 'More than 100,000 people work in over 4,000 companies across 150 clusters within 20 miles of Cambridge; staff at knowledge-intensive firms there rose 76% between 2015–16 and 2023–24, and the Biomedical Campus alone hosts over 22,000 employees.', tag: 'data', src: 'https://cambridgeahead.co.uk/news-insights/2025/the-cambridge-phenomenon-continues-to-intensify-and-spread-out-into-new-locations-as-businesses-double-down-on-clustering-to-succeed/', by: 'Cambridge Ahead with the University of Cambridge Centre for Business Research, 7 Oct 2025', seen: '2026-10-02' },
    'gb-birmingham': { t: 'ONS counted 568,000 people employed in Birmingham in 2024: 20,000 in information and communication, and 23,000 in finance and insurance.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-leeds': { t: 'ONS counted 511,000 people employed in Leeds in 2024: 26,000 in information and communication, the most of the 14 big-city council areas outside London compared here, and 25,000 in finance and insurance, the third-highest number (joint) of the 14 big-city council areas outside London compared here.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-glasgow': { t: 'ONS counted 448,000 people employed in Glasgow in 2024: 20,000 in information and communication, and 27,000 in finance and insurance, the second-highest number of the 14 big-city council areas outside London compared here.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-bristol': { t: 'ONS counted 316,000 people employed in Bristol in 2024: 23,000 in information and communication, the third-highest number of the 14 big-city council areas outside London compared here, and 19,000 in finance and insurance.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-cardiff': { t: 'ONS counted 229,000 people employed in Cardiff in 2024: 9,000 in information and communication, and 18,000 in finance and insurance.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-liverpool': { t: 'ONS counted 291,000 people employed in Liverpool in 2024: 9,000 in information and communication, and 11,000 in finance and insurance.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-newcastle': { t: 'ONS counted 202,000 people employed in Newcastle in 2024: 8,000 in information and communication, and 6,000 in finance and insurance.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-oxford': { t: 'ONS counted 125,000 people employed in Oxford in 2024: 8,000 in information and communication, and 900 in finance and insurance.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-lon-gfci': { t: 'London ranks second in the world, after New York, and first in Western Europe in the Global Financial Centres Index 40 (September 2026); Frankfurt is 29th, Dublin 30th and Edinburgh 33rd.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'gb-lon-bres': { t: 'In 2024 ONS counted 294,000 jobs in computer programming and consultancy in London, 35% of Great Britain’s 844,000; 302,000 in head-office and management-consultancy activities (33% of 923,000); 245,000 in legal and accounting (29% of 846,000); and 59,000 in fund management, three-quarters of Great Britain’s 77,000.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-lon-gser': { t: 'Startup Genome’s GSER 2026 ranks London third among the world’s start-up ecosystems and first in Europe, and first in Europe for its AI-native cluster; its Ecosystem Value is $437 billion against a global average of $25 billion.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/london', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'gb-lon-dealroom': { t: 'Dealroom’s Global Tech Ecosystem Index 2026 ranks London fourth in the world and first in Europe, ahead of Paris.', tag: 'practitioner consensus', src: 'https://www.uktech.news/tech-hubs/london/london-reclaims-top-spot-as-europes-leading-tech-ecosystem-20260528', by: 'UKTN, reporting Dealroom Global Tech Ecosystem Index 2026 (28 May 2026)', seen: '2026-10-03' },
    'gb-lon-vc': { t: 'UK start-ups raised $23.7 billion of venture capital in 2025, and London start-ups raised 75% of it.', tag: 'data', src: 'https://assets.publishing.service.gov.uk/media/6a4f8a649e9c95844ae64b77/UK_startups___VC_landscape_evidence_pack.pdf', by: 'GOV.UK, UK startups and VC landscape evidence pack (June 2026), Dealroom data', seen: '2026-10-03' },
    'gb-lon-hsbc': { t: 'HSBC Holdings plc has its registered office at 8 Canada Square, Canary Wharf, London.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/00617987', by: 'Companies House, HSBC Holdings plc (00617987)', seen: '2026-10-03' },
    'gb-lon-barclays': { t: 'Barclays PLC has its registered office at 1 Churchill Place, Canary Wharf, London.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/00048839', by: 'Companies House, Barclays PLC (00048839)', seen: '2026-10-03' },
    'gb-lon-lseg': { t: 'London Stock Exchange Group plc has its registered office at 10 Paternoster Square, London.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/05369106', by: 'Companies House, London Stock Exchange Group plc (05369106)', seen: '2026-10-03' },
    'gb-lon-deloitte': { t: 'Deloitte LLP, the UK firm, has its registered office at 1 New Street Square, London.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/OC303675', by: 'Companies House, Deloitte LLP (OC303675)', seen: '2026-10-03' },
    'gb-lon-kpmg': { t: 'KPMG LLP, the UK firm, has its registered office at 15 Canada Square, Canary Wharf, London.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/OC301540', by: 'Companies House, KPMG LLP (OC301540)', seen: '2026-10-03' },
    'gb-lon-revolut': { t: 'Revolut Ltd has its registered office at 30 South Colonnade, Canary Wharf, London.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/08804411', by: 'Companies House, Revolut Ltd (08804411)', seen: '2026-10-03' },
    'gb-lon-hsbc-grad': { t: 'HSBC’s careers site has a students-and-graduates section with university programmes, events and an application guide.', tag: 'employer-stated', src: 'https://www.hsbc.com/careers/students-and-graduates', by: 'HSBC, Careers: students and graduates', seen: '2026-10-03' },
    'gb-lon-barclays-grad': { t: 'Barclays’ early-careers site lists graduate and internship programmes in teams such as Technology, Investment Banking, Capital Markets and Sustainability, with a UK location page.', tag: 'employer-stated', src: 'https://search.jobs.barclays/early-careers', by: 'Barclays, Early Careers', seen: '2026-10-03' },
    'gb-lon-kpmg-grad': { t: 'KPMG UK’s careers site runs graduate routes in Audit, Consulting, Tax & Law and Technology & Engineering.', tag: 'employer-stated', src: 'https://www.kpmgcareers.co.uk/graduates', by: 'KPMG UK careers, Graduates', seen: '2026-10-03' },
    'gb-edi-bres': { t: 'ONS counted 373,000 people employed in Edinburgh in 2024: 42,000 in finance and insurance, the most of the 14 big-city council areas outside London compared here, including 6,000 in fund management (Liverpool, the next, has 1,500) and 25,000 in banking-type financial services; 18,000 were in information and communication.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-edi-gfci': { t: 'Edinburgh is 33rd in the Global Financial Centres Index 40 (September 2026) and 11th among Western European centres; Glasgow is 54th.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'gb-edi-natwest': { t: 'NatWest Group plc has its registered office at 36 St Andrew Square, Edinburgh.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC045551', by: 'Companies House, NatWest Group plc (SC045551)', seen: '2026-10-03' },
    'gb-edi-lloyds': { t: 'Lloyds Banking Group plc has its registered office on The Mound, Edinburgh.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC095000', by: 'Companies House, Lloyds Banking Group plc (SC095000)', seen: '2026-10-03' },
    'gb-edi-bg': { t: 'Baillie Gifford & Co has its registered office at 3 Haymarket Square, Edinburgh.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC069524', by: 'Companies House, Baillie Gifford & Co Limited (SC069524)', seen: '2026-10-03' },
    'gb-edi-abrdn': { t: 'Aberdeen Group plc has its registered office at 1 George Street, Edinburgh.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC286832', by: 'Companies House, Aberdeen Group plc (SC286832)', seen: '2026-10-03' },
    'gb-edi-gser': { t: 'Startup Genome’s GSER 2026 puts the Edinburgh–Glasgow ecosystem at $6 billion of Ecosystem Value, with $943 million of early-stage funding in H2 2023–2025, above the global average of $554 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/edinburgh-glasgow', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'gb-man-bres': { t: 'ONS counted 457,000 people employed in Manchester in 2024: 25,000 in information and communication (second of the 14 big-city council areas outside London compared here), 25,000 in finance and insurance (joint third) and 61,000 in professional, scientific and technical activities (second), including 23,000 in legal and accounting (first), 17,000 in computer programming and 16,000 in head-office and management-consultancy activities (third).', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-man-autotrader': { t: 'Auto Trader Group plc has its registered office at 3 Circle Square, Manchester.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/09439967', by: 'Companies House, Auto Trader Group plc (09439967)', seen: '2026-10-03' },
    'gb-man-boohoo': { t: 'boohoo.com UK Limited, the online fashion retailer’s UK company, has its registered office at 49–51 Dale Street, Manchester.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/05723154', by: 'Companies House, boohoo.com UK Limited (05723154)', seen: '2026-10-03' },
    'gb-man-gser': { t: 'Startup Genome’s GSER 2026 puts the Manchester–Liverpool ecosystem at $124 billion of Ecosystem Value, the largest in the UK after London’s $437 billion, with $706 million of early-stage funding in H2 2023–2025.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/manchester-liverpool', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'gb-cam-bres': { t: 'ONS counted 120,000 people employed in Cambridge in 2024: 9,000 in scientific research and development, the most of the 14 big-city council areas outside London compared here (Oxford, the next, has 4,000), and 6,000 in computer programming and consultancy.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-cam-dealroom': { t: 'Dealroom’s 2026 index calls Cambridge the third-highest density leader in the world, behind only the Bay Area and Boston, and first in Europe; it also names Oxford as a strong deep-tech and life-sciences hub.', tag: 'practitioner consensus', src: 'https://www.uktech.news/tech-hubs/london/london-reclaims-top-spot-as-europes-leading-tech-ecosystem-20260528', by: 'UKTN, reporting Dealroom Global Tech Ecosystem Index 2026 (28 May 2026)', seen: '2026-10-03' },
    'gb-cam-arm': { t: 'Arm Holdings plc has its registered office at 110 Fulbourn Road, Cambridge.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/11299879', by: 'Companies House, Arm Holdings plc (11299879)', seen: '2026-10-03' },
    'gb-cam-az': { t: 'AstraZeneca PLC has its registered office at 1 Francis Crick Avenue, Cambridge Biomedical Campus.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/02723534', by: 'Companies House, AstraZeneca PLC (02723534)', seen: '2026-10-03' },
    'gb-cam-darktrace': { t: 'Darktrace Holdings Limited, the cybersecurity company, has its registered office at St John’s Innovation Park, Cambridge.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/08562035', by: 'Companies House, Darktrace Holdings Limited (08562035)', seen: '2026-10-03' },
    'gb-bham-bres': { t: 'ONS counted 568,000 people employed in Birmingham in 2024, the most of the 14 big-city council areas outside London compared here: 65,000 in professional, scientific and technical activities (first), including 25,000 in head-office and management-consultancy activities (first) and 21,000 in legal and accounting (joint second), and 23,000 in finance and insurance (fifth).', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-bham-hsbc': { t: 'HSBC UK Bank plc has its registered office at 1 Centenary Square, Birmingham.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/09928412', by: 'Companies House, HSBC UK Bank plc (09928412)', seen: '2026-10-03' },
    'gb-bham-mobico': { t: 'Mobico Group PLC has its registered office at National Express House, Birmingham Coach Station.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/02590560', by: 'Companies House, Mobico Group PLC (02590560)', seen: '2026-10-03' },
    'gb-bham-gser': { t: 'Startup Genome’s GSER 2026 puts Birmingham’s start-up ecosystem at $7 billion of Ecosystem Value, with $1.1 billion of early-stage funding in H2 2023–2025, twice the global average of $554 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/birmingham', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'gb-leeds-bres': { t: 'ONS counted 511,000 people employed in Leeds in 2024, including 18,000 in computer programming and consultancy (the most of the 14 big-city council areas outside London compared here), 57,000 in professional, scientific and technical activities (third) and 17,000 in head-office and management-consultancy activities (second).', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-leeds-asda': { t: 'Asda Stores Limited has its registered office at Asda House, South Bank, Great Wilson Street, Leeds.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/00464777', by: 'Companies House, Asda Stores Limited (00464777)', seen: '2026-10-03' },
    'gb-leeds-lbs': { t: 'Leeds Building Society gives its head office as 26 Sovereign Street, Leeds.', tag: 'employer-stated', src: 'https://www.leedsbuildingsociety.co.uk/', by: 'Leeds Building Society, website footer', seen: '2026-10-03' },
    'gb-glasgow-bres': { t: 'ONS counted 448,000 people employed in Glasgow in 2024: 27,000 in finance and insurance (second of the 14 big-city council areas outside London compared here), including 14,000 in banking-type financial services and 3,500 in insurance, and 48,000 in professional, scientific and technical activities.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-glasgow-spower': { t: 'Scottish Power Limited has its registered office at 320 St Vincent Street, Glasgow.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC193794', by: 'Companies House, Scottish Power Limited (SC193794)', seen: '2026-10-03' },
    'gb-glasgow-weir': { t: 'Weir plc, the engineering group, has its registered office at 1 West Regent Street, Glasgow.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC002934', by: 'Companies House, Weir plc (SC002934)', seen: '2026-10-03' },
    'gb-glasgow-aggreko': { t: 'Aggreko Limited, the power-rental company, has its registered office at the Sentinel Building, 103 Waterloo Street, Glasgow.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/SC177553', by: 'Companies House, Aggreko Limited (SC177553)', seen: '2026-10-03' },
    'gb-bristol-bres': { t: 'ONS counted 316,000 people employed in Bristol in 2024, including 13,000 in computer programming and consultancy (third of the 14 big-city council areas outside London compared here), 21,000 in legal and accounting (joint second) and 6,000 in advertising and market research (first).', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-bristol-airbus': { t: 'Airbus Operations Limited has its registered office at Pegasus House, Aerospace Avenue, Filton, Bristol.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/03468788', by: 'Companies House, Airbus Operations Limited (03468788)', seen: '2026-10-03' },
    'gb-bristol-hl': { t: 'Hargreaves Lansdown Limited, the investment platform, has its registered office at the Welcome Building, Avon Street, Bristol.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/02122142', by: 'Companies House, Hargreaves Lansdown Limited (02122142)', seen: '2026-10-03' },
    'gb-bristol-ovo': { t: 'OVO Energy Ltd, the energy supplier, has its registered office at The Crescent, Temple Back, Bristol.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/06890795', by: 'Companies House, OVO Energy Ltd (06890795)', seen: '2026-10-03' },
    'gb-bristol-gser': { t: 'Startup Genome’s GSER 2026 puts Bristol’s start-up ecosystem at $6 billion of Ecosystem Value, with $621 million of early-stage funding in H2 2023–2025.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/bristol', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'gb-cardiff-bres': { t: 'ONS counted 229,000 people employed in Cardiff in 2024, including 18,000 in finance and insurance (seventh of the 14 big-city council areas outside London compared here) and 8,000 in activities auxiliary to insurance and pension funding, the most of the 14 (Leeds, the next, has 6,000).', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-cardiff-admiral': { t: 'Admiral says it is Wales’ only FTSE 100 company, with its headquarters at Tŷ Admiral in Cardiff and a second Cardiff office at Capital Tower.', tag: 'employer-stated', src: 'https://www.admiraljobs.co.uk/jobs-in-cardiff', by: 'Admiral Group, Jobs in Cardiff', seen: '2026-10-03' },
    'gb-cardiff-admiral-ch': { t: 'Admiral Group plc has its registered office at Ty Admiral, David Street, Cardiff.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/03849958', by: 'Companies House, Admiral Group plc (03849958)', seen: '2026-10-03' },
    'gb-liverpool-bres': { t: 'ONS counted 291,000 people employed in Liverpool in 2024, including 11,000 in finance and insurance and 1,500 in fund management, the second most of the 14 big-city council areas outside London compared here after Edinburgh.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-liverpool-peel': { t: 'Peel Ports Group Limited, the port operator, has its registered office at the Maritime Centre, Port of Liverpool.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/05965116', by: 'Companies House, Peel Ports Group Limited (05965116)', seen: '2026-10-03' },
    'gb-liverpool-bibby': { t: 'Bibby Line Group Limited has its registered office at Walker House, Exchange Flags, Liverpool.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/00034121', by: 'Companies House, Bibby Line Group Limited (00034121)', seen: '2026-10-03' },
    'gb-newcastle-bres': { t: 'ONS counted 202,000 people employed in Newcastle in 2024, including 5,000 in computer programming and consultancy and 7,000 in legal and accounting activities.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-newcastle-sage': { t: 'The Sage Group plc, the accounting-software company, has its registered office at Cobalt Park Way, in the Newcastle upon Tyne postal area (North Tyneside).', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/02231246', by: 'Companies House, The Sage Group plc (02231246)', seen: '2026-10-03' },
    'gb-newcastle-greggs': { t: 'Greggs plc, the bakery retailer, has its registered office at Greggs House, Quorum Business Park, in the Newcastle upon Tyne postal area (North Tyneside).', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/00502851', by: 'Companies House, Greggs plc (00502851)', seen: '2026-10-03' },
    'gb-oxford-bres': { t: 'ONS counted 125,000 people employed in Oxford in 2024, including 4,000 in scientific research and development, the second most of the 14 big-city council areas outside London compared here after Cambridge, and 3,500 in computer programming and consultancy.', tag: 'data', src: 'https://www.nomisweb.co.uk/datasets/newbres6pub', by: 'ONS, Business Register and Employment Survey 2024 (via Nomis)', seen: '2026-10-03' },
    'gb-oxford-nanopore': { t: 'Oxford Nanopore Technologies plc, the DNA-sequencing company, has its registered office at the Gosling Building, Oxford Science Park.', tag: 'data', src: 'https://find-and-update.company-information.service.gov.uk/company/05386273', by: 'Companies House, Oxford Nanopore Technologies plc (05386273)', seen: '2026-10-03' },
    'gb-isepay': { t: 'ISE’s 2025 employer surveys put the average graduate salary at £33,000 (up 2%), with 140 applications per graduate vacancy; graduate vacancies fell 8% while apprentice vacancies rose 8%.', tag: 'practitioner consensus', src: 'https://ise.org.uk/knowledge/insights/513/ise_top_10_stats_of_2025_you_need_to_know/', by: 'Institute of Student Employers, top 10 stats of 2025', seen: '2026-10-03' },
    'gb-cityuk': { t: 'Financial and related professional services account for over 2.4 million jobs in Great Britain, two thirds of them outside London, and the UK was the world’s largest net exporter of financial services in 2024 (£92.6 billion).', tag: 'data', src: 'https://www.cityoflondon.gov.uk/assets/Business/COL-City-Stats-Factsheet-July-2026-Digital.pdf', by: 'City of London Corporation, The role of financial and professional services in the UK (July 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Autumn term is the peak for UK graduate recruitment; some employers advertise from July, and graduate programmes usually open in August or September with deadlines as early as October, for jobs that start the next summer or September.':
    'Il trimestre autunnale è il picco del reclutamento dei laureati nel Regno Unito; alcuni datori pubblicano da luglio, e i programmi per laureati di solito aprono ad agosto o settembre con scadenze anche a ottobre, per lavori che iniziano l’estate o il settembre successivi.',
  'Work and recruitment are in English, and the Skilled Worker visa requires English at CEFR level B2, proved by a UK degree, an approved test or an Ecctis assessment of a non-UK degree taught in English.':
    'Il lavoro e le selezioni sono in inglese, e il visto Skilled Worker richiede l’inglese al livello B2 del QCER, dimostrato con una laurea britannica, un test riconosciuto o una valutazione Ecctis di una laurea straniera insegnata in inglese.',
  'The ONS puts UK unemployment at 4.9% for May to July 2026, up 0.2 points on the year, the employment rate (16 to 64) at 75.1%, and vacancies at 702,000 for June to August 2026.':
    'L’ONS stima la disoccupazione nel Regno Unito al 4,9% per maggio-luglio 2026, in aumento di 0,2 punti sull’anno, il tasso di occupazione (16-64 anni) al 75,1% e i posti vacanti a 702.000 per giugno-agosto 2026.',
  'Graduate recruitment at the 100 leading UK employers fell 24.5% between 2022 and 2025, and their targets for 2026 are a further 0.5% lower; two fifths of them recruited fewer graduates in 2025.':
    'Le assunzioni di laureati nei 100 principali datori britannici sono calate del 24,5% tra il 2022 e il 2025, e i loro obiettivi per il 2026 sono ancora inferiori dello 0,5%; due quinti di essi hanno assunto meno laureati nel 2025.',
  'London is Europe’s largest finance and professional-services market — the City alone has 225,000 finance jobs — and the UK’s biggest tech cluster. Edinburgh adds asset management, Manchester, Leeds and Birmingham professional services and digital, Cambridge a knowledge-intensive cluster of 100,000 jobs. Since Brexit an EU passport needs a visa like any other, and the post-study visa shrinks to 18 months from January 2027.':
    'Londra è il maggiore mercato europeo della finanza e dei servizi professionali — la sola City conta 225.000 posti nella finanza — e il principale polo tecnologico del Regno Unito. Edimburgo aggiunge l’asset management, Manchester, Leeds e Birmingham i servizi professionali e il digitale, Cambridge un distretto ad alta intensità di conoscenza da 100.000 posti. Dopo la Brexit un passaporto UE ha bisogno di un visto come qualsiasi altro, e il visto post-laurea scende a 18 mesi da gennaio 2027.',
  'Banking and investment':
    'Banche e investimenti',
  'Asset management and insurance':
    'Asset management e assicurazioni',
  'Media and creative industries':
    'Media e industrie creative',
  'Life sciences':
    'Scienze della vita',
  'No family is rated for Oxford: the sources read count its jobs and name one life-science employer, but give no evidence of entry-level hiring in any of the 14 families.':
    'Nessuna famiglia è valutata per Oxford: le fonti lette ne contano i posti di lavoro e citano un solo datore di lavoro delle scienze della vita, ma non documentano assunzioni a livello junior in nessuna delle 14 famiglie.',
  'Tech, data and AI demand outside London is rated from ONS employment counts by council area and from start-up rankings; no hub-by-family statistic for AI or data science was read.':
    'La domanda in tecnologia, dati e IA fuori Londra è valutata sui conteggi ONS dell’occupazione per area amministrativa e su classifiche di start-up; non è stata letta alcuna statistica per polo sull’IA o sulla data science.',
  'The UK–EU Youth Experience Scheme has no agreed terms; it is not shown as a route.':
    'Lo Youth Experience Scheme tra Regno Unito e UE non ha condizioni concordate; non è indicato come percorso.',
  'Hubs in Great Britain are rated from ONS 2024 employment counts by council area: strong means first to third, with at least 5,000 jobs, among 14 big-city council areas outside London (Birmingham, Manchester, Leeds, Liverpool, Newcastle, Bristol, Sheffield, Nottingham, Cardiff, Glasgow, Edinburgh, Cambridge, Oxford, Bath), counting the whole of an industry section or two-digit industry. Belfast is not mapped: the survey covers Great Britain only.':
    'I poli della Gran Bretagna sono valutati sui conteggi ONS 2024 dell’occupazione per area amministrativa: forte significa dal primo al terzo posto, con almeno 5.000 posti, tra 14 grandi aree urbane fuori Londra (Birmingham, Manchester, Leeds, Liverpool, Newcastle, Bristol, Sheffield, Nottingham, Cardiff, Glasgow, Edimburgo, Cambridge, Oxford, Bath), considerando un’intera sezione o una divisione a due cifre dei settori. Belfast non è sulla mappa: l’indagine copre solo la Gran Bretagna.',
  'Rent is the ONS average for all property types and sizes, because ONS publishes no one-bedroom rent for cities; Edinburgh and Glasgow are rental-market areas that include surrounding councils.':
    'L’affitto è la media ONS di tutte le tipologie e dimensioni di alloggio, perché l’ONS non pubblica un affitto per bilocale per le città; Edimburgo e Glasgow sono aree del mercato degli affitti che includono i comuni limitrofi.',
  'Economic output is shown for 2023 because the newest ONS local-authority edition (2024 data) withholds Bristol, Cardiff and Glasgow; pay is full-time workplace pay, so it reflects the jobs located in each city, not where people live.':
    'Il prodotto economico è indicato per il 2023 perché l’ultima edizione ONS per area amministrativa (dati 2024) non pubblica Bristol, Cardiff e Glasgow; la retribuzione è quella dei lavoratori a tempo pieno per luogo di lavoro, quindi riflette i posti situati in ciascuna città, non dove vivono le persone.',
  'Employer entries rest on the Companies House registered office, which is not always where most staff work; headcounts per employer were not read.':
    'Le voci sui datori di lavoro si basano sulla sede legale registrata a Companies House, che non è sempre dove lavora la maggior parte del personale; il numero di dipendenti per datore di lavoro non è stato letto.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  '§1 United Kingdom: Graduate, Skilled Worker and HPI visas, the youth scheme':
    '§1 Regno Unito: visti Graduate, Skilled Worker e HPI, lo schema per i giovani',
  '§1 and §8 London calendars and the one-year MSc problem':
    '§1 e §8 i calendari di Londra e il problema dell’MSc di un anno',
  '§5 London net pay and rent':
    '§5 stipendio netto e affitto a Londra',
  'investment banking, asset management, London':
    'investment banking, asset management, Londra',
  'IHS, proof of funds, work limits':
    'IHS, prova dei mezzi, limiti di lavoro',
  'Banking, asset management, consulting, accountancy and tech':
    'Banche, asset management, consulenza, revisione contabile e tecnologia',
  'Fund management':
    'Gestione di fondi',
  'Legal services':
    'Servizi legali',
  'Management consultancy':
    'Consulenza di direzione',
  'Accountancy':
    'Revisione e contabilità',
  '676,000 workers, a third of them in finance':
    '676.000 addetti, un terzo dei quali nella finanza',
  '39,266 tech establishments':
    '39.266 sedi di aziende tecnologiche',
  'London’s tech firms':
    'Le aziende tecnologiche di Londra',
  'group registered office at 8 Canada Square, Canary Wharf':
    'sede legale del gruppo a 8 Canada Square, Canary Wharf',
  'registered office at 1 Churchill Place, Canary Wharf':
    'sede legale a 1 Churchill Place, Canary Wharf',
  'registered office at 10 Paternoster Square':
    'sede legale a 10 Paternoster Square',
  'UK firm’s registered office at 1 New Street Square':
    'sede legale della società britannica a 1 New Street Square',
  'UK firm’s registered office at 15 Canada Square':
    'sede legale della società britannica a 15 Canada Square',
  'registered office at 30 South Colonnade, Canary Wharf':
    'sede legale a 30 South Colonnade, Canary Wharf',
  'Asset management, banking and insurance':
    'Asset management, banche e assicurazioni',
  'Asset management':
    'Asset management',
  'Insurance and pensions':
    'Assicurazioni e previdenza',
  'banking and pensions':
    'banche e previdenza',
  'registered office at 36 St Andrew Square':
    'sede legale a 36 St Andrew Square',
  'registered office on The Mound':
    'sede legale a The Mound',
  'registered office at 3 Haymarket Square':
    'sede legale a 3 Haymarket Square',
  'registered office at 1 George Street':
    'sede legale a 1 George Street',
  'Digital, media and cyber security':
    'Digitale, media e cybersicurezza',
  'Digital and software':
    'Digitale e software',
  'Media and broadcasting':
    'Media e radiotelevisione',
  'Cyber security':
    'Cybersicurezza',
  'E-commerce':
    'E-commerce',
  'over 250 media and digital businesses':
    'oltre 250 aziende dei media e del digitale',
  'cyber, telecoms and e-commerce':
    'cybersicurezza, telecomunicazioni ed e-commerce',
  'registered office at 3 Circle Square':
    'sede legale a 3 Circle Square',
  'online fashion retailer, registered office at 49–51 Dale Street':
    'rivenditore di moda online, sede legale a 49–51 Dale Street',
  'A knowledge-intensive cluster of tech and life-science firms':
    'Un distretto ad alta intensità di conoscenza di aziende tecnologiche e delle scienze della vita',
  'Research and development':
    'Ricerca e sviluppo',
  'more than 100,000 employees within 20 miles':
    'oltre 100.000 addetti entro 20 miglia',
  'Over 4,000 companies in 150 clusters':
    'Oltre 4.000 aziende in 150 distretti',
  'over 22,000 employees':
    'oltre 22.000 addetti',
  'chip-design company, registered office at 110 Fulbourn Road':
    'azienda di progettazione di chip, sede legale a 110 Fulbourn Road',
  'registered office on the Cambridge Biomedical Campus':
    'sede legale nel Cambridge Biomedical Campus',
  'cybersecurity company, registered office at St John’s Innovation Park':
    'azienda di cybersicurezza, sede legale a St John’s Innovation Park',
  'The largest employment centre in Great Britain outside London, by council area':
    'Il maggiore centro di occupazione della Gran Bretagna fuori Londra, per area comunale',
  '20,000 jobs (2024)':
    '20.000 posti (2024)',
  'Information and communication employers':
    'Datori di lavoro dell’informazione e comunicazione',
  '23,000 jobs (2024)':
    '23.000 posti (2024)',
  'Finance and insurance employers':
    'Datori di lavoro della finanza e delle assicurazioni',
  'registered office at 1 Centenary Square':
    'sede legale a 1 Centenary Square',
  'registered office at Birmingham Coach Station':
    'sede legale a Birmingham Coach Station',
  'A northern hub for finance and the most information-and-communication jobs outside London among the cities compared':
    'Un polo del nord per la finanza e con più posti in informazione e comunicazione fuori Londra tra le città confrontate',
  '26,000 jobs (2024)':
    '26.000 posti (2024)',
  '25,000 jobs (2024)':
    '25.000 posti (2024)',
  'registered office at Asda House, South Bank':
    'sede legale ad Asda House, South Bank',
  'head office at 26 Sovereign Street':
    'sede centrale a 26 Sovereign Street',
  'Scotland’s largest city, second outside London for finance jobs among the cities compared':
    'La maggiore città scozzese, seconda fuori Londra per posti in finanza tra le città confrontate',
  '27,000 jobs (2024)':
    '27.000 posti (2024)',
  'registered office at 320 St Vincent Street':
    'sede legale a 320 St Vincent Street',
  'engineering group, registered office at 1 West Regent Street':
    'gruppo di ingegneria, sede legale a 1 West Regent Street',
  'power-rental company, registered office in the Sentinel Building':
    'azienda di noleggio di generatori, sede legale nel Sentinel Building',
  'The south-west’s tech and aerospace city':
    'La città della tecnologia e dell’aerospazio del sud-ovest',
  'Aerospace':
    'Aerospazio',
  '19,000 jobs (2024)':
    '19.000 posti (2024)',
  'Filton site, registered office of Airbus Operations':
    'sito di Filton, sede legale di Airbus Operations',
  'investment platform, registered office in Avon Street':
    'piattaforma di investimento, sede legale in Avon Street',
  'energy supplier, registered office at Temple Back':
    'fornitore di energia, sede legale a Temple Back',
  'The Welsh capital, with a large finance and insurance sector for its size':
    'La capitale gallese, con un settore finanziario e assicurativo ampio per le sue dimensioni',
  '9,000 jobs (2024)':
    '9.000 posti (2024)',
  '18,000 jobs (2024)':
    '18.000 posti (2024)',
  'insurer, headquarters at Tŷ Admiral; Wales’ only FTSE 100 company':
    'assicuratore, sede centrale a Tŷ Admiral; l’unica società FTSE 100 del Galles',
  'A port city on the Mersey':
    'Una città portuale sul Mersey',
  'Ports and logistics':
    'Porti e logistica',
  '11,000 jobs (2024)':
    '11.000 posti (2024)',
  'port operator, registered office at the Port of Liverpool':
    'operatore portuale, sede legale nel Port of Liverpool',
  'registered office at Exchange Flags':
    'sede legale a Exchange Flags',
  'The north-east’s main city':
    'La città principale del nord-est',
  '8,000 jobs (2024)':
    '8.000 posti (2024)',
  '6,000 jobs (2024)':
    '6.000 posti (2024)',
  'accounting-software company, registered office at Cobalt Park':
    'azienda di software contabile, sede legale a Cobalt Park',
  'registered office at Quorum Business Park':
    'sede legale a Quorum Business Park',
  'A university city with research and life-science employers':
    'Una città universitaria con datori di lavoro della ricerca e delle scienze della vita',
  '900 jobs (2024)':
    '900 posti (2024)',
  'DNA-sequencing company, registered office in the Oxford Science Park':
    'azienda di sequenziamento del DNA, sede legale nell’Oxford Science Park',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Entry pay and competition':
    'Stipendi d’ingresso e concorrenza',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Tax and net pay':
    'Tasse e stipendio netto',
  'London banking applications open as early as July and close between October and December for internships the following summer; many roles are filled on a rolling basis before the deadline.':
    'Le candidature per le banche di Londra si aprono già a luglio e si chiudono tra ottobre e dicembre per gli stage dell’estate successiva; molti posti sono assegnati man mano, prima della scadenza.',
  'The first £12,570 of income is tax-free in the 2026–27 tax year; the allowance shrinks above £100,000.':
    'Le prime 12.570 £ di reddito sono esenti nell’anno fiscale 2026–27; l’esenzione si riduce oltre le 100.000 £.',
  'At €60,000 gross a single employee in London keeps about 79% after tax and National Insurance, but central rents leave less than in most continental cities.':
    'Con 60.000 € lordi un dipendente single a Londra tiene circa il 79% dopo imposte e contributi, ma gli affitti del centro lasciano meno che nella maggior parte delle città continentali.',
  'The City of London had 676,000 workers in 2024 — 225,000 in financial services and 181,000 in professional services, including 69,000 in banking, 29,000 in fund management, 48,000 in management consultancy and 26,000 in accountancy — and holds one in five of Great Britain’s finance jobs.':
    'Nel 2024 la City of London contava 676.000 addetti — 225.000 nei servizi finanziari e 181.000 nei servizi professionali, tra cui 69.000 nelle banche, 29.000 nella gestione di fondi, 48.000 nella consulenza di direzione e 26.000 nella revisione contabile — e concentra un posto su cinque della finanza in Gran Bretagna.',
  'London has 39,266 tech establishments and leads UK cities in tech employment; tech roles are more than 7% of jobs there against 6.4% nationally.':
    'Londra conta 39.266 sedi di aziende tecnologiche e guida le città britanniche per occupazione nella tecnologia; i ruoli tecnologici vi sono oltre il 7% dei posti, contro il 6,4% nazionale.',
  'Scotland has more than 160,000 finance professionals and £480 billion of assets managed from it; Edinburgh is home to Baillie Gifford, Aberdeen Group, Bank of Scotland and Scottish Widows.':
    'La Scozia conta oltre 160.000 professionisti della finanza e 480 miliardi di sterline di patrimoni gestiti; Edimburgo ospita Baillie Gifford, Aberdeen Group, Bank of Scotland e Scottish Widows.',
  'Greater Manchester had 70,000 digital jobs in 2018; MediaCityUK in Salford, home to the BBC, ITV, Ericsson and over 250 media and digital firms, is Europe’s largest purpose-built media site, and GCHQ, Virgin Media and The Hut Group are major employers.':
    'Nel 2018 la Greater Manchester contava 70.000 posti nel digitale; MediaCityUK a Salford, sede di BBC, ITV, Ericsson e di oltre 250 aziende dei media e del digitale, è il maggiore polo mediatico costruito ad hoc in Europa, e GCHQ, Virgin Media e The Hut Group sono grandi datori di lavoro.',
  'More than 100,000 people work in over 4,000 companies across 150 clusters within 20 miles of Cambridge; staff at knowledge-intensive firms there rose 76% between 2015–16 and 2023–24, and the Biomedical Campus alone hosts over 22,000 employees.':
    'Oltre 100.000 persone lavorano in più di 4.000 aziende distribuite in 150 distretti entro 20 miglia da Cambridge; gli addetti delle aziende ad alta intensità di conoscenza sono cresciuti del 76% tra il 2015–16 e il 2023–24, e il solo Biomedical Campus ne ospita oltre 22.000.',
  'ONS counted 568,000 people employed in Birmingham in 2024: 20,000 in information and communication, and 23,000 in finance and insurance.':
    'L’ONS ha contato 568.000 occupati a Birmingham nel 2024: 20.000 nell’informazione e comunicazione, e 23.000 in finanza e assicurazioni.',
  'ONS counted 511,000 people employed in Leeds in 2024: 26,000 in information and communication, the most of the 14 big-city council areas outside London compared here, and 25,000 in finance and insurance, the third-highest number (joint) of the 14 big-city council areas outside London compared here.':
    'L’ONS ha contato 511.000 occupati a Leeds nel 2024: 26.000 nell’informazione e comunicazione, il numero più alto tra le 14 grandi aree comunali fuori Londra confrontate qui, e 25.000 in finanza e assicurazioni, il terzo numero più alto (a pari merito) tra le 14 grandi aree comunali fuori Londra confrontate qui.',
  'ONS counted 448,000 people employed in Glasgow in 2024: 20,000 in information and communication, and 27,000 in finance and insurance, the second-highest number of the 14 big-city council areas outside London compared here.':
    'L’ONS ha contato 448.000 occupati a Glasgow nel 2024: 20.000 nell’informazione e comunicazione, e 27.000 in finanza e assicurazioni, il secondo numero più alto tra le 14 grandi aree comunali fuori Londra confrontate qui.',
  'ONS counted 316,000 people employed in Bristol in 2024: 23,000 in information and communication, the third-highest number of the 14 big-city council areas outside London compared here, and 19,000 in finance and insurance.':
    'L’ONS ha contato 316.000 occupati a Bristol nel 2024: 23.000 nell’informazione e comunicazione, il terzo numero più alto tra le 14 grandi aree comunali fuori Londra confrontate qui, e 19.000 in finanza e assicurazioni.',
  'ONS counted 229,000 people employed in Cardiff in 2024: 9,000 in information and communication, and 18,000 in finance and insurance.':
    'L’ONS ha contato 229.000 occupati a Cardiff nel 2024: 9.000 nell’informazione e comunicazione, e 18.000 in finanza e assicurazioni.',
  'ONS counted 291,000 people employed in Liverpool in 2024: 9,000 in information and communication, and 11,000 in finance and insurance.':
    'L’ONS ha contato 291.000 occupati a Liverpool nel 2024: 9.000 nell’informazione e comunicazione, e 11.000 in finanza e assicurazioni.',
  'ONS counted 202,000 people employed in Newcastle in 2024: 8,000 in information and communication, and 6,000 in finance and insurance.':
    'L’ONS ha contato 202.000 occupati a Newcastle nel 2024: 8.000 nell’informazione e comunicazione, e 6.000 in finanza e assicurazioni.',
  'ONS counted 125,000 people employed in Oxford in 2024: 8,000 in information and communication, and 900 in finance and insurance.':
    'L’ONS ha contato 125.000 occupati a Oxford nel 2024: 8.000 nell’informazione e comunicazione, e 900 in finanza e assicurazioni.',
  'London ranks second in the world, after New York, and first in Western Europe in the Global Financial Centres Index 40 (September 2026); Frankfurt is 29th, Dublin 30th and Edinburgh 33rd.':
    'Londra è seconda al mondo, dopo New York, e prima nell’Europa occidentale nel Global Financial Centres Index 40 (settembre 2026); Francoforte è 29ª, Dublino 30ª ed Edimburgo 33ª.',
  'In 2024 ONS counted 294,000 jobs in computer programming and consultancy in London, 35% of Great Britain’s 844,000; 302,000 in head-office and management-consultancy activities (33% of 923,000); 245,000 in legal and accounting (29% of 846,000); and 59,000 in fund management, three-quarters of Great Britain’s 77,000.':
    'Nel 2024 l’ONS ha contato a Londra 294.000 posti nella programmazione e consulenza informatica, il 35% degli 844.000 della Gran Bretagna; 302.000 nelle attività di sedi centrali e consulenza di direzione (il 33% di 923.000); 245.000 nei servizi legali e contabili (il 29% di 846.000); e 59.000 nella gestione di fondi, tre quarti dei 77.000 della Gran Bretagna.',
  'Startup Genome’s GSER 2026 ranks London third among the world’s start-up ecosystems and first in Europe, and first in Europe for its AI-native cluster; its Ecosystem Value is $437 billion against a global average of $25 billion.':
    'Il GSER 2026 di Startup Genome colloca Londra al terzo posto tra gli ecosistemi di start-up del mondo e al primo in Europa, e al primo in Europa per il suo cluster AI-native; il suo Ecosystem Value è di 437 miliardi di dollari contro una media mondiale di 25 miliardi.',
  'Dealroom’s Global Tech Ecosystem Index 2026 ranks London fourth in the world and first in Europe, ahead of Paris.':
    'Il Global Tech Ecosystem Index 2026 di Dealroom colloca Londra al quarto posto nel mondo e al primo in Europa, davanti a Parigi.',
  'UK start-ups raised $23.7 billion of venture capital in 2025, and London start-ups raised 75% of it.':
    'Nel 2025 le start-up britanniche hanno raccolto 23,7 miliardi di dollari di venture capital, e quelle di Londra ne hanno raccolto il 75%.',
  'HSBC Holdings plc has its registered office at 8 Canada Square, Canary Wharf, London.':
    'HSBC Holdings plc ha la sede legale a 8 Canada Square, Canary Wharf, a Londra.',
  'Barclays PLC has its registered office at 1 Churchill Place, Canary Wharf, London.':
    'Barclays PLC ha la sede legale a 1 Churchill Place, Canary Wharf, a Londra.',
  'London Stock Exchange Group plc has its registered office at 10 Paternoster Square, London.':
    'London Stock Exchange Group plc ha la sede legale a 10 Paternoster Square, a Londra.',
  'Deloitte LLP, the UK firm, has its registered office at 1 New Street Square, London.':
    'Deloitte LLP, la società britannica, ha la sede legale a 1 New Street Square, a Londra.',
  'KPMG LLP, the UK firm, has its registered office at 15 Canada Square, Canary Wharf, London.':
    'KPMG LLP, la società britannica, ha la sede legale a 15 Canada Square, Canary Wharf, a Londra.',
  'Revolut Ltd has its registered office at 30 South Colonnade, Canary Wharf, London.':
    'Revolut Ltd ha la sede legale a 30 South Colonnade, Canary Wharf, a Londra.',
  'HSBC’s careers site has a students-and-graduates section with university programmes, events and an application guide.':
    'Il sito carriere di HSBC ha una sezione per studenti e laureati con programmi universitari, eventi e una guida alla candidatura.',
  'Barclays’ early-careers site lists graduate and internship programmes in teams such as Technology, Investment Banking, Capital Markets and Sustainability, with a UK location page.':
    'Il sito early careers di Barclays elenca programmi per laureati e stage in aree come Technology, Investment Banking, Capital Markets e Sustainability, con una pagina dedicata al Regno Unito.',
  'KPMG UK’s careers site runs graduate routes in Audit, Consulting, Tax & Law and Technology & Engineering.':
    'Il sito carriere di KPMG UK propone percorsi per laureati in Audit, Consulting, Tax & Law e Technology & Engineering.',
  'ONS counted 373,000 people employed in Edinburgh in 2024: 42,000 in finance and insurance, the most of the 14 big-city council areas outside London compared here, including 6,000 in fund management (Liverpool, the next, has 1,500) and 25,000 in banking-type financial services; 18,000 were in information and communication.':
    'L’ONS ha contato 373.000 occupati a Edimburgo nel 2024: 42.000 nella finanza e nelle assicurazioni, il valore più alto tra le 14 grandi aree urbane fuori Londra confrontate qui, di cui 6.000 nella gestione di fondi (Liverpool, la successiva, ne ha 1.500) e 25.000 nei servizi finanziari di tipo bancario; 18.000 erano nell’informazione e comunicazione.',
  'Edinburgh is 33rd in the Global Financial Centres Index 40 (September 2026) and 11th among Western European centres; Glasgow is 54th.':
    'Edimburgo è 33ª nel Global Financial Centres Index 40 (settembre 2026) e 11ª tra i centri dell’Europa occidentale; Glasgow è 54ª.',
  'NatWest Group plc has its registered office at 36 St Andrew Square, Edinburgh.':
    'NatWest Group plc ha la sede legale a 36 St Andrew Square, a Edimburgo.',
  'Lloyds Banking Group plc has its registered office on The Mound, Edinburgh.':
    'Lloyds Banking Group plc ha la sede legale a The Mound, a Edimburgo.',
  'Baillie Gifford & Co has its registered office at 3 Haymarket Square, Edinburgh.':
    'Baillie Gifford & Co ha la sede legale a 3 Haymarket Square, a Edimburgo.',
  'Aberdeen Group plc has its registered office at 1 George Street, Edinburgh.':
    'Aberdeen Group plc ha la sede legale a 1 George Street, a Edimburgo.',
  'Startup Genome’s GSER 2026 puts the Edinburgh–Glasgow ecosystem at $6 billion of Ecosystem Value, with $943 million of early-stage funding in H2 2023–2025, above the global average of $554 million.':
    'Il GSER 2026 di Startup Genome stima l’ecosistema Edimburgo–Glasgow in 6 miliardi di dollari di Ecosystem Value, con 943 milioni di dollari di finanziamenti early stage nel H2 2023–2025, sopra la media mondiale di 554 milioni.',
  'ONS counted 457,000 people employed in Manchester in 2024: 25,000 in information and communication (second of the 14 big-city council areas outside London compared here), 25,000 in finance and insurance (joint third) and 61,000 in professional, scientific and technical activities (second), including 23,000 in legal and accounting (first), 17,000 in computer programming and 16,000 in head-office and management-consultancy activities (third).':
    'L’ONS ha contato 457.000 occupati a Manchester nel 2024: 25.000 nell’informazione e comunicazione (seconda tra le 14 grandi aree urbane fuori Londra confrontate qui), 25.000 nella finanza e nelle assicurazioni (terza a pari merito) e 61.000 nelle attività professionali, scientifiche e tecniche (seconda), di cui 23.000 nei servizi legali e contabili (prima), 17.000 nella programmazione informatica e 16.000 nelle attività di sedi centrali e consulenza di direzione (terza).',
  'Auto Trader Group plc has its registered office at 3 Circle Square, Manchester.':
    'Auto Trader Group plc ha la sede legale a 3 Circle Square, a Manchester.',
  'boohoo.com UK Limited, the online fashion retailer’s UK company, has its registered office at 49–51 Dale Street, Manchester.':
    'boohoo.com UK Limited, la società britannica del rivenditore di moda online, ha la sede legale a 49–51 Dale Street, a Manchester.',
  'Startup Genome’s GSER 2026 puts the Manchester–Liverpool ecosystem at $124 billion of Ecosystem Value, the largest in the UK after London’s $437 billion, with $706 million of early-stage funding in H2 2023–2025.':
    'Il GSER 2026 di Startup Genome stima l’ecosistema Manchester–Liverpool in 124 miliardi di dollari di Ecosystem Value, il maggiore del Regno Unito dopo i 437 miliardi di Londra, con 706 milioni di dollari di finanziamenti early stage nel H2 2023–2025.',
  'ONS counted 120,000 people employed in Cambridge in 2024: 9,000 in scientific research and development, the most of the 14 big-city council areas outside London compared here (Oxford, the next, has 4,000), and 6,000 in computer programming and consultancy.':
    'L’ONS ha contato 120.000 occupati a Cambridge nel 2024: 9.000 nella ricerca e sviluppo scientifico, il valore più alto tra le 14 grandi aree urbane fuori Londra confrontate qui (Oxford, la successiva, ne ha 4.000), e 6.000 nella programmazione e consulenza informatica.',
  'Dealroom’s 2026 index calls Cambridge the third-highest density leader in the world, behind only the Bay Area and Boston, and first in Europe; it also names Oxford as a strong deep-tech and life-sciences hub.':
    'L’indice 2026 di Dealroom indica Cambridge come la terza città al mondo per densità, dietro solo alla Bay Area e a Boston, e la prima in Europa; cita inoltre Oxford come un polo forte di deep tech e scienze della vita.',
  'Arm Holdings plc has its registered office at 110 Fulbourn Road, Cambridge.':
    'Arm Holdings plc ha la sede legale a 110 Fulbourn Road, a Cambridge.',
  'AstraZeneca PLC has its registered office at 1 Francis Crick Avenue, Cambridge Biomedical Campus.':
    'AstraZeneca PLC ha la sede legale a 1 Francis Crick Avenue, nel Cambridge Biomedical Campus.',
  'Darktrace Holdings Limited, the cybersecurity company, has its registered office at St John’s Innovation Park, Cambridge.':
    'Darktrace Holdings Limited, l’azienda di cybersicurezza, ha la sede legale a St John’s Innovation Park, a Cambridge.',
  'ONS counted 568,000 people employed in Birmingham in 2024, the most of the 14 big-city council areas outside London compared here: 65,000 in professional, scientific and technical activities (first), including 25,000 in head-office and management-consultancy activities (first) and 21,000 in legal and accounting (joint second), and 23,000 in finance and insurance (fifth).':
    'L’ONS ha contato 568.000 occupati a Birmingham nel 2024, il valore più alto tra le 14 grandi aree urbane fuori Londra confrontate qui: 65.000 nelle attività professionali, scientifiche e tecniche (prima), di cui 25.000 nelle attività di sedi centrali e consulenza di direzione (prima) e 21.000 nei servizi legali e contabili (seconda a pari merito), e 23.000 nella finanza e nelle assicurazioni (quinta).',
  'HSBC UK Bank plc has its registered office at 1 Centenary Square, Birmingham.':
    'HSBC UK Bank plc ha la sede legale a 1 Centenary Square, a Birmingham.',
  'Mobico Group PLC has its registered office at National Express House, Birmingham Coach Station.':
    'Mobico Group PLC ha la sede legale a National Express House, Birmingham Coach Station.',
  'Startup Genome’s GSER 2026 puts Birmingham’s start-up ecosystem at $7 billion of Ecosystem Value, with $1.1 billion of early-stage funding in H2 2023–2025, twice the global average of $554 million.':
    'Il GSER 2026 di Startup Genome stima l’ecosistema di start-up di Birmingham in 7 miliardi di dollari di Ecosystem Value, con 1,1 miliardi di dollari di finanziamenti early stage nel H2 2023–2025, il doppio della media mondiale di 554 milioni.',
  'ONS counted 511,000 people employed in Leeds in 2024, including 18,000 in computer programming and consultancy (the most of the 14 big-city council areas outside London compared here), 57,000 in professional, scientific and technical activities (third) and 17,000 in head-office and management-consultancy activities (second).':
    'L’ONS ha contato 511.000 occupati a Leeds nel 2024, di cui 18.000 nella programmazione e consulenza informatica (il valore più alto tra le 14 grandi aree urbane fuori Londra confrontate qui), 57.000 nelle attività professionali, scientifiche e tecniche (terza) e 17.000 nelle attività di sedi centrali e consulenza di direzione (seconda).',
  'Asda Stores Limited has its registered office at Asda House, South Bank, Great Wilson Street, Leeds.':
    'Asda Stores Limited ha la sede legale ad Asda House, South Bank, Great Wilson Street, a Leeds.',
  'Leeds Building Society gives its head office as 26 Sovereign Street, Leeds.':
    'Leeds Building Society indica come sede centrale 26 Sovereign Street, a Leeds.',
  'ONS counted 448,000 people employed in Glasgow in 2024: 27,000 in finance and insurance (second of the 14 big-city council areas outside London compared here), including 14,000 in banking-type financial services and 3,500 in insurance, and 48,000 in professional, scientific and technical activities.':
    'L’ONS ha contato 448.000 occupati a Glasgow nel 2024: 27.000 nella finanza e nelle assicurazioni (seconda tra le 14 grandi aree urbane fuori Londra confrontate qui), di cui 14.000 nei servizi finanziari di tipo bancario e 3.500 nelle assicurazioni, e 48.000 nelle attività professionali, scientifiche e tecniche.',
  'Scottish Power Limited has its registered office at 320 St Vincent Street, Glasgow.':
    'Scottish Power Limited ha la sede legale a 320 St Vincent Street, a Glasgow.',
  'Weir plc, the engineering group, has its registered office at 1 West Regent Street, Glasgow.':
    'Weir plc, il gruppo di ingegneria, ha la sede legale a 1 West Regent Street, a Glasgow.',
  'Aggreko Limited, the power-rental company, has its registered office at the Sentinel Building, 103 Waterloo Street, Glasgow.':
    'Aggreko Limited, l’azienda di noleggio di generatori, ha la sede legale al Sentinel Building, 103 Waterloo Street, a Glasgow.',
  'ONS counted 316,000 people employed in Bristol in 2024, including 13,000 in computer programming and consultancy (third of the 14 big-city council areas outside London compared here), 21,000 in legal and accounting (joint second) and 6,000 in advertising and market research (first).':
    'L’ONS ha contato 316.000 occupati a Bristol nel 2024, di cui 13.000 nella programmazione e consulenza informatica (terza tra le 14 grandi aree urbane fuori Londra confrontate qui), 21.000 nei servizi legali e contabili (seconda a pari merito) e 6.000 nella pubblicità e nelle ricerche di mercato (prima).',
  'Airbus Operations Limited has its registered office at Pegasus House, Aerospace Avenue, Filton, Bristol.':
    'Airbus Operations Limited ha la sede legale a Pegasus House, Aerospace Avenue, a Filton, Bristol.',
  'Hargreaves Lansdown Limited, the investment platform, has its registered office at the Welcome Building, Avon Street, Bristol.':
    'Hargreaves Lansdown Limited, la piattaforma di investimento, ha la sede legale al Welcome Building, Avon Street, a Bristol.',
  'OVO Energy Ltd, the energy supplier, has its registered office at The Crescent, Temple Back, Bristol.':
    'OVO Energy Ltd, il fornitore di energia, ha la sede legale a The Crescent, Temple Back, a Bristol.',
  'Startup Genome’s GSER 2026 puts Bristol’s start-up ecosystem at $6 billion of Ecosystem Value, with $621 million of early-stage funding in H2 2023–2025.':
    'Il GSER 2026 di Startup Genome stima l’ecosistema di start-up di Bristol in 6 miliardi di dollari di Ecosystem Value, con 621 milioni di dollari di finanziamenti early stage nel H2 2023–2025.',
  'ONS counted 229,000 people employed in Cardiff in 2024, including 18,000 in finance and insurance (seventh of the 14 big-city council areas outside London compared here) and 8,000 in activities auxiliary to insurance and pension funding, the most of the 14 (Leeds, the next, has 6,000).':
    'L’ONS ha contato 229.000 occupati a Cardiff nel 2024, di cui 18.000 nella finanza e nelle assicurazioni (settima tra le 14 grandi aree urbane fuori Londra confrontate qui) e 8.000 nelle attività ausiliarie ad assicurazioni e fondi pensione, il valore più alto tra le 14 (Leeds, la successiva, ne ha 6.000).',
  'Admiral says it is Wales’ only FTSE 100 company, with its headquarters at Tŷ Admiral in Cardiff and a second Cardiff office at Capital Tower.':
    'Admiral dichiara di essere l’unica società FTSE 100 del Galles, con la sede centrale a Tŷ Admiral a Cardiff e un secondo ufficio a Cardiff, Capital Tower.',
  'Admiral Group plc has its registered office at Ty Admiral, David Street, Cardiff.':
    'Admiral Group plc ha la sede legale a Ty Admiral, David Street, a Cardiff.',
  'ONS counted 291,000 people employed in Liverpool in 2024, including 11,000 in finance and insurance and 1,500 in fund management, the second most of the 14 big-city council areas outside London compared here after Edinburgh.':
    'L’ONS ha contato 291.000 occupati a Liverpool nel 2024, di cui 11.000 nella finanza e nelle assicurazioni e 1.500 nella gestione di fondi, il secondo valore tra le 14 grandi aree urbane fuori Londra confrontate qui dopo Edimburgo.',
  'Peel Ports Group Limited, the port operator, has its registered office at the Maritime Centre, Port of Liverpool.':
    'Peel Ports Group Limited, l’operatore portuale, ha la sede legale al Maritime Centre, nel Port of Liverpool.',
  'Bibby Line Group Limited has its registered office at Walker House, Exchange Flags, Liverpool.':
    'Bibby Line Group Limited ha la sede legale a Walker House, Exchange Flags, a Liverpool.',
  'ONS counted 202,000 people employed in Newcastle in 2024, including 5,000 in computer programming and consultancy and 7,000 in legal and accounting activities.':
    'L’ONS ha contato 202.000 occupati a Newcastle nel 2024, di cui 5.000 nella programmazione e consulenza informatica e 7.000 nei servizi legali e contabili.',
  'The Sage Group plc, the accounting-software company, has its registered office at Cobalt Park Way, in the Newcastle upon Tyne postal area (North Tyneside).':
    'The Sage Group plc, l’azienda di software contabile, ha la sede legale a Cobalt Park Way, nell’area postale di Newcastle upon Tyne (North Tyneside).',
  'Greggs plc, the bakery retailer, has its registered office at Greggs House, Quorum Business Park, in the Newcastle upon Tyne postal area (North Tyneside).':
    'Greggs plc, la catena di panetterie, ha la sede legale a Greggs House, Quorum Business Park, nell’area postale di Newcastle upon Tyne (North Tyneside).',
  'ONS counted 125,000 people employed in Oxford in 2024, including 4,000 in scientific research and development, the second most of the 14 big-city council areas outside London compared here after Cambridge, and 3,500 in computer programming and consultancy.':
    'L’ONS ha contato 125.000 occupati a Oxford nel 2024, di cui 4.000 nella ricerca e sviluppo scientifico, il secondo valore tra le 14 grandi aree urbane fuori Londra confrontate qui dopo Cambridge, e 3.500 nella programmazione e consulenza informatica.',
  'Oxford Nanopore Technologies plc, the DNA-sequencing company, has its registered office at the Gosling Building, Oxford Science Park.':
    'Oxford Nanopore Technologies plc, l’azienda di sequenziamento del DNA, ha la sede legale al Gosling Building, nell’Oxford Science Park.',
  'ISE’s 2025 employer surveys put the average graduate salary at £33,000 (up 2%), with 140 applications per graduate vacancy; graduate vacancies fell 8% while apprentice vacancies rose 8%.':
    'Le indagini 2025 dell’ISE tra i datori di lavoro indicano uno stipendio medio dei laureati di 33.000 £ (+2%), con 140 candidature per posto da laureato; i posti per laureati sono calati dell’8% mentre quelli per apprendisti sono saliti dell’8%.',
  'Financial and related professional services account for over 2.4 million jobs in Great Britain, two thirds of them outside London, and the UK was the world’s largest net exporter of financial services in 2024 (£92.6 billion).':
    'I servizi finanziari e i servizi professionali collegati contano oltre 2,4 milioni di posti in Gran Bretagna, due terzi dei quali fuori Londra, e nel 2024 il Regno Unito è stato il maggiore esportatore netto di servizi finanziari al mondo (92,6 miliardi di sterline).'
});

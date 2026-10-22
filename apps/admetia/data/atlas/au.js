/* Atlas record: Australia. Read 3 October 2026; log P62
 * (research/verification/round-4g.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Full official guide: visas_immigration/australia/australia_visas_immigration_guide.md.
 * Student visa rules are verified on Study Australia / Home Affairs, the 485 visa and QILT
 * outcomes come from research/places/beyond-europe.md §3 and the official guide. Sydney was the first hub.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (research/verification/round-5f.md; brief research/countries/au-australia.md): standing and metrics on every hub, more employers and claims. Rent is left out: Numbeo refused access (HTTP 429). */

ATLAS.add({
  id: 'AU',
  checked: '2026-10-03',
  log: 'P62',
  summary: 'A weak post-study record for business graduates: a coursework master’s earns two years of work rights, and in 2025 only 53.3% of international business and management postgraduates were in full-time work, against 92.2% of domestic ones. Sydney is the finance city: finance is the largest sector by jobs in its centre, with 125,002, and it is the tenth financial centre in Asia/Pacific and Oceania’s top start-up ecosystem.',
  sectors: ['Banking and financial services', 'Professional and business services', 'Technology', 'Mining and resources', 'Higher education'],
  roles: ['finance', 'business', 'it', 'software'],
  hubs: [
    {
      id: 'sydney', name: 'Sydney', lat: -33.87, lon: 151.21,
      knownFor: 'Australia’s finance, business-services and tech jobs, concentrated in the city centre',
      why: ['au-syd', 'au-gfci', 'au-gser-syd', 'au-macq', 'au-cba'],
      sectors: ['Banking and financial services', 'Professional and business services', 'Technology'],
      employers: [
        { t: 'Finance and financial-services employers', note: '125,002 jobs in the City of Sydney (2022)', c: 'au-syd' },
        { t: 'Professional and business-services firms', note: '94,157 jobs', c: 'au-syd' },
        { t: 'ICT employers', note: '38,895 jobs', c: 'au-syd' },
        { name: 'Commonwealth Bank', note: 'headquartered in Sydney; cash profit A$10,982 million in FY26', c: 'au-cba' },
        { name: 'Westpac', note: 'head office at 275 Kent Street; 35,236 full-time equivalent staff', c: 'au-wbc' },
        { name: 'Macquarie Group', note: '19,124 staff in 30 markets, about half of them in Australia and New Zealand', c: 'au-macq' }
      ],
      demand: {
        business: ['strong', 'au-syd'],
        finance: ['dominant', 'au-syd', 'au-gfci', 'au-cba', 'au-wbc'],
        it: ['strong', 'au-syd', 'au-gser-syd'],
        software: ['strong', 'au-gser-syd', 'au-syd'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['strong', 'au-cba', 'au-wbc'],
        am: ['present', 'au-macq'],
        ib: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 3, 2], c: ['au-gfci', 'au-syd', 'au-cba', 'au-wbc'] },
        { f: 'it', s: [5, 3, 2], c: ['au-gser-syd', 'au-syd'] },
        { f: 'software', s: [5, 3, 2], c: ['au-gser-syd'] },
        { f: 'business', s: [4, 2, 1], c: ['au-syd'] }
      ],
      metrics: {
        pop: { v: 5638830, year: 2025, area: 'metro', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (estimated resident population of the greater capital city, 30 June 2025)', seen: '2026-10-03' },
        gdp: { v: 855.4, cur: 'AUD', year: 2025, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-state-accounts/latest-release', by: 'Australian Bureau of Statistics, Australian National Accounts: State Accounts 2024–25 (gross state product, current prices, financial year; the state or territory, not the city)', seen: '2026-10-03' },
        wage: { v: 9138, cur: 'AUD', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (full-time adults’ average weekly ordinary-time earnings of the state or territory × 52 ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'melbourne', name: 'Melbourne', lat: -37.81, lon: 144.96,
      knownFor: 'Australia’s second city, growing by the most people of any capital',
      why: ['au-melbourne', 'au-gfci', 'au-gser-mel', 'au-nab'],
      sectors: ['Banking', 'Higher education', 'Professional services'],
      employers: [
        { name: 'National Australia Bank', note: 'registered office on Bourke Street; 41,880 full-time equivalent staff', c: 'au-nab' },
        { name: 'Telstra', note: 'registered office on Exhibition Street', c: 'au-telstra' },
        { t: 'Employers in the capital city', note: '5,435,590 residents (2025)', c: 'au-melbourne' }
      ],
      demand: {
        finance: ['present', 'au-nab'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['present', 'au-nab'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 3, 2], c: ['au-gfci', 'au-nab'] },
        { f: 'software', s: [4, 3, 2], c: ['au-gser-mel'] }
      ],
      metrics: {
        pop: { v: 5435590, year: 2025, area: 'metro', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (estimated resident population of the greater capital city, 30 June 2025)', seen: '2026-10-03' },
        gdp: { v: 637.4, cur: 'AUD', year: 2025, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-state-accounts/latest-release', by: 'Australian Bureau of Statistics, Australian National Accounts: State Accounts 2024–25 (gross state product, current prices, financial year; the state or territory, not the city)', seen: '2026-10-03' },
        wage: { v: 8845, cur: 'AUD', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (full-time adults’ average weekly ordinary-time earnings of the state or territory × 52 ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'brisbane', name: 'Brisbane', lat: -27.47, lon: 153.03,
      knownFor: 'Queensland’s capital',
      why: ['au-brisbane', 'au-gser-bne', 'au-suncorp'],
      sectors: ['Public sector', 'Energy', 'Tourism'],
      employers: [
        { name: 'Suncorp Group', note: 'registered office at Heritage Lanes, Ann Street', c: 'au-suncorp' },
        { t: 'Employers in the capital city', note: '2,833,524 residents (2025)', c: 'au-brisbane' }
      ],
      demand: {
        finance: ['present', 'au-suncorp'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['au-suncorp'] },
        { f: 'software', s: [4, 2, 1], c: ['au-gser-bne'] }
      ],
      metrics: {
        pop: { v: 2833524, year: 2025, area: 'metro', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (estimated resident population of the greater capital city, 30 June 2025)', seen: '2026-10-03' },
        gdp: { v: 531.0, cur: 'AUD', year: 2025, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-state-accounts/latest-release', by: 'Australian Bureau of Statistics, Australian National Accounts: State Accounts 2024–25 (gross state product, current prices, financial year; the state or territory, not the city)', seen: '2026-10-03' },
        wage: { v: 8839, cur: 'AUD', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (full-time adults’ average weekly ordinary-time earnings of the state or territory × 52 ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'perth', name: 'Perth', lat: -31.95, lon: 115.86,
      knownFor: 'Western Australia’s capital and mining-company base',
      why: ['au-perth', 'au-wds', 'au-wa-mining'],
      sectors: ['Oil and gas', 'Energy', 'Public sector'],
      employers: [
        { name: 'Woodside Energy', note: 'registered office on Mount Street', c: 'au-wds' },
        { t: 'Mining employers in Western Australia', note: 'more than 136,000 on-site jobs (2025)', c: 'au-wa-mining' },
        { t: 'Employers in the capital city', note: '2,452,765 residents (2025)', c: 'au-perth' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'business', s: [3, 2, 1], c: ['au-wds', 'au-wa-mining'] }
      ],
      metrics: {
        pop: { v: 2452765, year: 2025, area: 'metro', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (estimated resident population of the greater capital city, 30 June 2025)', seen: '2026-10-03' },
        gdp: { v: 458.8, cur: 'AUD', year: 2025, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-state-accounts/latest-release', by: 'Australian Bureau of Statistics, Australian National Accounts: State Accounts 2024–25 (gross state product, current prices, financial year; the state or territory, not the city)', seen: '2026-10-03' },
        wage: { v: 9652, cur: 'AUD', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (full-time adults’ average weekly ordinary-time earnings of the state or territory × 52 ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'adelaide', name: 'Adelaide', lat: -34.93, lon: 138.60,
      knownFor: 'South Australia’s capital, with a defence-industry base',
      why: ['au-adelaide', 'au-sa-def', 'au-aps'],
      sectors: ['Defence', 'Agriculture and food', 'Higher education'],
      employers: [
        { t: 'Defence-industry employers in South Australia', note: 'more than 14,000 workers', c: 'au-sa-def' },
        { t: 'Federal public service', note: '13,648 APS staff in Adelaide (2025)', c: 'au-aps' },
        { t: 'Employers in the capital city', note: '1,491,015 residents (2025)', c: 'au-adelaide' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'management', s: [3, 2, 1], c: ['au-aps', 'au-sa-def'] }
      ],
      metrics: {
        pop: { v: 1491015, year: 2025, area: 'metro', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (estimated resident population of the greater capital city, 30 June 2025)', seen: '2026-10-03' },
        gdp: { v: 157.9, cur: 'AUD', year: 2025, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-state-accounts/latest-release', by: 'Australian Bureau of Statistics, Australian National Accounts: State Accounts 2024–25 (gross state product, current prices, financial year; the state or territory, not the city)', seen: '2026-10-03' },
        wage: { v: 8538, cur: 'AUD', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (full-time adults’ average weekly ordinary-time earnings of the state or territory × 52 ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'canberra', name: 'Canberra', lat: -35.28, lon: 149.13,
      knownFor: 'The federal capital',
      why: ['au-canberra', 'au-aps'],
      sectors: ['Government', 'Higher education', 'Professional services'],
      employers: [
        { t: 'Federal public service', note: '70,221 APS staff in Canberra, 35.4% of the total (2025)', c: 'au-aps' },
        { t: 'Employers in the capital city', note: '484,630 residents (2025)', c: 'au-canberra' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'management', s: [5, 2, 1], c: ['au-aps'] }
      ],
      metrics: {
        pop: { v: 484630, year: 2025, area: 'metro', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (estimated resident population of the greater capital city, 30 June 2025)', seen: '2026-10-03' },
        gdp: { v: 59.4, cur: 'AUD', year: 2025, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-state-accounts/latest-release', by: 'Australian Bureau of Statistics, Australian National Accounts: State Accounts 2024–25 (gross state product, current prices, financial year; the state or territory, not the city)', seen: '2026-10-03' },
        wage: { v: 9924, cur: 'AUD', basis: 'mean', year: 2026, area: 'region', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (full-time adults’ average weekly ordinary-time earnings of the state or territory × 52 ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Graduate labour market', c: ['au-qilt', 'au-qilt-ug'] },
    { k: 'Where demand is now', c: ['au-aage-m'] },
    { k: 'Recruiting calendar', c: ['au-cal'] },
    { k: 'Language', c: ['au-lang'] },
    { k: 'Pay', c: ['au-awe'] }
  ],

  briefs: [
    ['places/beyond-europe.md', '§3 Australia: the 485 visa, caps, QILT outcomes, fees'],
    ['countries/au-australia.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'The Department of Home Affairs and the Tax Office pages could not be read, so entry for EU passports and tax rates were not read on their own pages.',
    'The Sydney figures cover the City of Sydney local area only, not Greater Sydney, and date from 2022.',
    'Demand in data, AI, marketing and accounting roles is not rated.',
    'No family is rated in Perth, Adelaide or Canberra: the sources read give population, public-service headcount, defence and mining jobs, not graduate hiring by family. Their standing steps are judgements from those claims (public administration read as management, resource-company head offices as business).',
    'Melbourne’s jobs by industry (the City of Melbourne census) could not be read, so its finance rating rests on named employers, not a statistic; Brisbane’s likewise.',
    'BHP, Rio Tinto, ANZ, Atlassian, Canva and the large accounting firms are not listed as employers because no head-office or headcount source we can cite was read.',
    'Wages and output are the state’s, not the city’s, so Sydney and Melbourne are compared with their whole states; rent is a crowd-sourced figure for the city centre.'
  ],

  claims: {
    'au-qilt': { t: 'In 2025, 53.3% of international postgraduate coursework graduates in business and management were in full-time work, against 92.2% of domestic graduates; their median full-time salary was A$65,000, against A$130,000.', tag: 'data', src: 'research/places/beyond-europe.md', by: 'QILT, 2025 Graduate Outcomes Survey, International Report (June 2026), via places/beyond-europe.md §3.3', seen: '2026-10-01' },
    'au-syd': { t: 'In the City of Sydney, finance and financial services is the largest sector by jobs, with 125,002 in 2022, followed by professional and business services with 94,157 and ICT with 38,895: together 49.8% of the area’s 519,839 jobs.', tag: 'data', src: 'https://www.cityofsydney.nsw.gov.au/-/media/corporate/files/publications/research-and-reports/floor-space-and-employment-survey-2022/floor-space-and-employment-survey.pdf?download=true', by: 'City of Sydney, Floor Space and Employment Survey 2022, summary report (published 26 Nov 2024)', seen: '2026-10-03' },
    'au-melbourne': { t: 'The ABS estimates Melbourne’s population at 5,435,590 on 30 June 2025, up 105,030 (2.0%) in a year.', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)', seen: '2026-10-03' },
    'au-brisbane': { t: 'The ABS estimates Brisbane’s population at 2,833,524 on 30 June 2025, up 58,223 (2.1%) in a year.', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)', seen: '2026-10-03' },
    'au-perth': { t: 'The ABS estimates Perth’s population at 2,452,765 on 30 June 2025, up 58,088 (2.4%) in a year.', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)', seen: '2026-10-03' },
    'au-adelaide': { t: 'The ABS estimates Adelaide’s population at 1,491,015 on 30 June 2025, up 18,647 (1.3%) in a year.', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)', seen: '2026-10-03' },
    'au-canberra': { t: 'The ABS estimates Canberra’s population at 484,630 on 30 June 2025, up 6,200 (1.3%) in a year.', tag: 'data', src: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release', by: 'Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)', seen: '2026-10-03' },
    'au-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Sydney 24th in the world and tenth in Asia/Pacific, and Melbourne 32nd and thirteenth in Asia/Pacific.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 9', seen: '2026-10-03' },
    'au-gser-syd': { t: 'Startup Genome’s 2026 report ranks Sydney 26th among the world’s start-up ecosystems and first in Oceania; it describes Tech Central, in the city centre, as a A$42 billion economy supporting more than 100,000 workers.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/sydney', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Sydney page', seen: '2026-10-03' },
    'au-gser-mel': { t: 'Startup Genome’s 2026 report ranks Melbourne 30th among the world’s start-up ecosystems and second in Oceania; it says Victorian start-ups raised a record A$2.4 billion in 2025, and that more than half of Australia’s enterprise-software and health-tech start-ups are based in Victoria.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/melbourne', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Melbourne page', seen: '2026-10-03' },
    'au-gser-bne': { t: 'Startup Genome’s 2026 report puts Brisbane in the 51–60 range of its emerging ecosystems and fourth in Oceania, and cites PsiQuantum’s US$1 billion quantum-computing project there.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/brisbane', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Brisbane page', seen: '2026-10-03' },
    'au-cba': { t: 'Commonwealth Bank’s results announcement for the year to 30 June 2026 is issued from Commonwealth Bank Place South, 11 Harbour Street, Sydney, and reports cash profit after tax of A$10,982 million.', tag: 'employer-stated', src: 'https://www.commbank.com.au/content/dam/commbank-assets/investors/2026/CBA-2026-Full-Year-Results-Profit-Announcement.pdf', by: 'Commonwealth Bank of Australia, FY26 results announcement (12 Aug 2026)', seen: '2026-10-03' },
    'au-wbc': { t: 'Westpac’s head office is at 275 Kent Street, Sydney, and the group had 35,236 full-time equivalent employees at 30 September 2025.', tag: 'employer-stated', src: 'https://announcements.asx.com.au/asxpdf/20251103/pdf/06rf8n5ldhtz0q.pdf', by: 'Westpac Banking Corporation, 2025 full-year financial results announcement (3 Nov 2025)', seen: '2026-10-03' },
    'au-macq': { t: 'Macquarie employs 19,124 people in 30 markets, about half of them in Australia and New Zealand; its Sydney offices at 50 Martin Place and 1 Elizabeth Street, with London, house about half of its people, and its asset-management arm says it manages A$325.9 billion of assets in Australia.', tag: 'employer-stated', src: 'https://www.macquarie.com/assets/macq/investor/reports/2026/macquarie-group-fy26-annual-report.pdf', by: 'Macquarie Group, FY26 annual report (to 31 March 2026)', seen: '2026-10-03' },
    'au-nab': { t: 'NAB’s registered office is at 395 Bourke Street, Melbourne; it had 41,880 full-time equivalent staff at 30 September 2025 and says it was ranked first graduate employer in banking and finance on Prosple’s Top 100 Australian Graduate Employers for the fourth year running.', tag: 'employer-stated', src: 'https://www.nab.com.au/content/dam/nab/documents/reports/corporate/2025-annual-report.pdf', by: 'National Australia Bank, 2025 annual report', seen: '2026-10-03' },
    'au-telstra': { t: 'Telstra’s registered office is Level 41, 242 Exhibition Street, Melbourne.', tag: 'employer-stated', src: 'https://www.telstra.com.au/content/dam/tcom/about-us/investors/pdf-i/telstra-financial-results-and-annual-report-for-the-year-ended-30-jun-2026.pdf', by: 'Telstra Group, financial results and annual report for the year ended 30 June 2026', seen: '2026-10-03' },
    'au-suncorp': { t: 'Suncorp Group’s registered office is on Level 23, Heritage Lanes, 80 Ann Street, Brisbane.', tag: 'employer-stated', src: 'https://announcements.asx.com.au/asxpdf/20260812/pdf/072ng96k7t2s4c.pdf', by: 'Suncorp Group, FY26 annual report (ASX, 12 Aug 2026)', seen: '2026-10-03' },
    'au-wds': { t: 'Woodside Energy Group is registered at Mia Yellagonga, 11 Mount Street, Perth.', tag: 'employer-stated', src: 'https://bulletin.webull.com/qbd/announcement/20260826/499500570/9ae04332648626f60ff30b6dbcc089a7.pdf', by: 'Woodside Energy, half-year 2026 results briefing transcript (ASX announcement of 26 Aug 2026, as hosted by Webull)', seen: '2026-10-03' },
    'au-wa-mining': { t: 'Western Australia’s mining sector had more than 136,000 on-site full-time equivalent jobs in 2025, at a record level that has stopped growing: 66,367 in iron ore, 38,816 in gold and 7,954 in lithium.', tag: 'data', src: 'https://www.wa.gov.au/organisation/department-of-mines-petroleum-and-exploration/economic-indicators', by: 'Government of Western Australia, Department of Mines, Petroleum and Exploration, economic indicators 2025', seen: '2026-10-03' },
    'au-aps': { t: 'At 30 June 2025, 70,221 Australian Public Service employees, 35.4% of the 198,529 total, were based in Canberra; Melbourne had 30,165, Sydney 23,822, Brisbane 19,461, Adelaide 13,648 and Perth 9,125.', tag: 'data', src: 'https://www.apsc.gov.au/initiatives-and-programs/workforce-information/research-analysis-and-publications/state-service/state-service-report-2024-25/aps-workforce/aps-workforce-size-and-location', by: 'Australian Public Service Commission, State of the Service Report 2024–25, Table 13 (location of APS employees)', seen: '2026-10-03' },
    'au-sa-def': { t: 'South Australia’s defence sector employs more than 14,000 workers, with another 10,000 jobs expected over the next 20 years, the state government says; the AUKUS submarine programme will be built at Osborne, near Adelaide.', tag: 'data', src: 'https://skills.sa.gov.au/defence-and-space', by: 'Government of South Australia, Skills SA, Defence and Space', seen: '2026-10-03' },
    'au-qilt-ug': { t: 'In 2025, full-time employment was 75.4% for domestic undergraduates and 50.8% for international ones, and 88.3% for domestic postgraduate coursework graduates against 52.2% for international ones; the 2025 figures are not directly comparable with earlier years because the labour force was redefined.', tag: 'data', src: 'https://www.qilt.edu.au/docs/default-source/default-document-library/2025-gos-international-report.pdf', by: 'QILT, 2025 Graduate Outcomes Survey, International Report (June 2026), Figure iii', seen: '2026-10-08' },
    'au-aage-m': { t: 'The 2026 surveys of the Australian Association of Graduate Employers find that employers offered an average of 52 graduate roles each, stable on the year, while average graduate applications per employer rose 23% and intern applications 9.4%; 97% of organisations offer a graduate programme and 67% an intern or vacation programme.', tag: 'data', src: 'https://nzage.co.nz/wp-content/uploads/2026/07/AAGE-and-NZAGE-Webinar_July-2026_AAGE-Slides.pdf', by: 'AAGE, 2026 Employer and Candidate Survey insights, in the AAGE and NZAGE webinar slides (July 2026)', seen: '2026-10-08' },
    'au-cal': { t: 'Macquarie took applications for its graduate programme (February 2027 start) from 21 September to 13 October 2026 and for its summer internship from 5 May to 4 August 2026, and the Australian Government Graduate Program is listed to open on 1 March 2027.', tag: 'employer-stated', src: 'https://macquarie.com/au/en/careers/graduates-and-interns/our-programs.html', by: 'Macquarie Group, graduates and interns, our programs; Australian Government Career Pathways, generalist stream', seen: '2026-10-08' },
    'au-lang': { t: 'English is the working language; the graduate programmes read state no other language requirement, and the Core Skills stream of the 482 visa asks for English at IELTS 5.0 overall or an equivalent.', tag: 'practitioner consensus', src: 'https://myvisa.com.au/immigration-guides/skills-in-demand-visa-482-australia-guide-2026', by: 'MyVisa, Skills in Demand visa (subclass 482), the complete 2026 guide', seen: '2026-10-08' },
    'au-awe': { t: 'In May 2026 full-time adults’ average weekly ordinary-time earnings were A$2,083.70 across Australia, up 3.7% in a year: A$2,108.80 in New South Wales, A$2,041.10 in Victoria, A$2,039.70 in Queensland, A$2,227.40 in Western Australia, A$1,970.20 in South Australia and A$2,290.20 in the Australian Capital Territory.', tag: 'data', src: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/may-2026', by: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia, May 2026 (13 Aug 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'In 2025, full-time employment was 75.4% for domestic undergraduates and 50.8% for international ones, and 88.3% for domestic postgraduate coursework graduates against 52.2% for international ones; the 2025 figures are not directly comparable with earlier years because the labour force was redefined.':
    'Nel 2025 l’occupazione a tempo pieno era del 75,4% per i laureati australiani di primo livello e del 50,8% per quelli internazionali, e dell’88,3% per i laureati australiani di master contro il 52,2% per quelli internazionali; i dati 2025 non sono direttamente confrontabili con gli anni precedenti perché la forza lavoro è stata ridefinita.',
  'The 2026 surveys of the Australian Association of Graduate Employers find that employers offered an average of 52 graduate roles each, stable on the year, while average graduate applications per employer rose 23% and intern applications 9.4%; 97% of organisations offer a graduate programme and 67% an intern or vacation programme.':
    'Le indagini 2026 dell’Australian Association of Graduate Employers rilevano che i datori hanno offerto in media 52 posti per laureati ciascuno, stabile sull’anno, mentre le candidature medie di laureati per datore sono salite del 23% e quelle di stagisti del 9,4%; il 97% delle organizzazioni offre un programma per laureati e il 67% un programma di stage o di vacanza.',
  'Macquarie took applications for its graduate programme (February 2027 start) from 21 September to 13 October 2026 and for its summer internship from 5 May to 4 August 2026, and the Australian Government Graduate Program is listed to open on 1 March 2027.':
    'Macquarie ha raccolto le candidature per il programma per laureati (inizio febbraio 2027) dal 21 settembre al 13 ottobre 2026 e per lo stage estivo dal 5 maggio al 4 agosto 2026, e l’Australian Government Graduate Program è indicato in apertura il 1° marzo 2027.',
  'English is the working language; the graduate programmes read state no other language requirement, and the Core Skills stream of the 482 visa asks for English at IELTS 5.0 overall or an equivalent.':
    'L’inglese è la lingua di lavoro; i programmi per laureati letti non indicano altri requisiti linguistici, e il canale Core Skills del visto 482 chiede l’inglese a IELTS 5.0 complessivo o equivalente.',
  'A weak post-study record for business graduates: a coursework master’s earns two years of work rights, and in 2025 only 53.3% of international business and management postgraduates were in full-time work, against 92.2% of domestic ones. Sydney is the finance city: finance is the largest sector by jobs in its centre, with 125,002, and it is the tenth financial centre in Asia/Pacific and Oceania’s top start-up ecosystem.':
    'Risultati deboli dopo gli studi per i laureati in economia: un master taught dà due anni di diritto al lavoro, e nel 2025 solo il 53,3% dei laureati magistrali internazionali in business e management lavorava a tempo pieno, contro il 92,2% di quelli australiani. Sydney è la città della finanza: nel suo centro la finanza è il primo settore per posti di lavoro, con 125.002, ed è il decimo centro finanziario dell’Asia/Pacifico e il primo ecosistema di start-up dell’Oceania.',
  'Banking and financial services': 'Banche e servizi finanziari', 'Professional and business services': 'Servizi professionali e alle imprese',
  'Mining and resources': 'Miniere e risorse naturali',
  'Australia’s finance, business-services and tech jobs, concentrated in the city centre': 'I posti di lavoro australiani in finanza, servizi alle imprese e tecnologia, concentrati nel centro città',
  'Finance and financial-services employers': 'I datori di lavoro della finanza e dei servizi finanziari', '125,002 jobs in the City of Sydney (2022)': '125.002 posti nella City of Sydney (2022)',
  'Professional and business-services firms': 'Le società di servizi professionali e alle imprese', '94,157 jobs': '94.157 posti',
  'ICT employers': 'I datori di lavoro dell’ICT', '38,895 jobs': '38.895 posti',
  '§3 Australia: the 485 visa, caps, QILT outcomes, fees': '§3 Australia: il visto 485, i tetti, gli esiti QILT, le tasse universitarie',
  'The Department of Home Affairs and the Tax Office pages could not be read, so entry for EU passports and tax rates were not read on their own pages.':
    'Le pagine del Department of Home Affairs e dell’agenzia delle entrate non si sono potute leggere, quindi l’ingresso con passaporto UE e le aliquote fiscali non sono stati letti sulle loro pagine.',
  'The Sydney figures cover the City of Sydney local area only, not Greater Sydney, and date from 2022.':
    'I dati di Sydney riguardano solo il comune della City of Sydney, non la Greater Sydney, e risalgono al 2022.',
  'Demand in data, AI, marketing and accounting roles is not rated.':
    'La domanda nei ruoli di dati, IA, marketing e contabilità non è valutata.',

  'In 2025, 53.3% of international postgraduate coursework graduates in business and management were in full-time work, against 92.2% of domestic graduates; their median full-time salary was A$65,000, against A$130,000.':
    'Nel 2025 lavorava a tempo pieno il 53,3% dei laureati magistrali internazionali in business e management, contro il 92,2% dei laureati australiani; il loro stipendio mediano a tempo pieno era di 65.000 A$, contro 130.000 A$.',
  'In the City of Sydney, finance and financial services is the largest sector by jobs, with 125,002 in 2022, followed by professional and business services with 94,157 and ICT with 38,895: together 49.8% of the area’s 519,839 jobs.':
    'Nella City of Sydney la finanza e i servizi finanziari sono il primo settore per posti di lavoro, con 125.002 nel 2022, seguiti dai servizi professionali e alle imprese con 94.157 e dall’ICT con 38.895: insieme il 49,8% dei 519.839 posti dell’area.',
  'Australia’s second city, growing by the most people of any capital':
    'La seconda città australiana, quella che cresce di più in numero di abitanti tra le capitali',
  'Employers in the capital city':
    'I datori di lavoro della città capitale',
  '5,435,590 residents (2025)':
    '5.435.590 residenti (2025)',
  'Queensland’s capital':
    'Il capoluogo del Queensland',
  '2,833,524 residents (2025)':
    '2.833.524 residenti (2025)',
  'Western Australia’s capital and mining-company base':
    'Il capoluogo dell’Australia Occidentale e base delle società minerarie',
  'Oil and gas':
    'Petrolio e gas',
  '2,452,765 residents (2025)':
    '2.452.765 residenti (2025)',
  'South Australia’s capital, with a defence-industry base':
    'Il capoluogo dell’Australia Meridionale, con un polo dell’industria della difesa',
  '1,491,015 residents (2025)':
    '1.491.015 residenti (2025)',
  'The federal capital':
    'La capitale federale',
  '484,630 residents (2025)':
    '484.630 residenti (2025)',
  'The ABS estimates Melbourne’s population at 5,435,590 on 30 June 2025, up 105,030 (2.0%) in a year.':
    'L’ABS stima la popolazione di Melbourne in 5.435.590 abitanti al 30 giugno 2025, 105.030 in più (2,0%) in un anno.',
  'The ABS estimates Brisbane’s population at 2,833,524 on 30 June 2025, up 58,223 (2.1%) in a year.':
    'L’ABS stima la popolazione di Brisbane in 2.833.524 abitanti al 30 giugno 2025, 58.223 in più (2,1%) in un anno.',
  'The ABS estimates Perth’s population at 2,452,765 on 30 June 2025, up 58,088 (2.4%) in a year.':
    'L’ABS stima la popolazione di Perth in 2.452.765 abitanti al 30 giugno 2025, 58.088 in più (2,4%) in un anno.',
  'The ABS estimates Adelaide’s population at 1,491,015 on 30 June 2025, up 18,647 (1.3%) in a year.':
    'L’ABS stima la popolazione di Adelaide in 1.491.015 abitanti al 30 giugno 2025, 18.647 in più (1,3%) in un anno.',
  'The ABS estimates Canberra’s population at 484,630 on 30 June 2025, up 6,200 (1.3%) in a year.':
    'L’ABS stima la popolazione di Canberra in 484.630 abitanti al 30 giugno 2025, 6.200 in più (1,3%) in un anno.',
  'No family is rated in Perth, Adelaide or Canberra: the sources read give population, public-service headcount, defence and mining jobs, not graduate hiring by family. Their standing steps are judgements from those claims (public administration read as management, resource-company head offices as business).':
    'Nessuna famiglia è valutata a Perth, Adelaide o Canberra: le fonti lette riportano popolazione, organico della pubblica amministrazione, posti nella difesa e nelle miniere, non le assunzioni di neolaureati per famiglia. I loro livelli di posizionamento sono giudizi tratti da quelle fonti (la pubblica amministrazione letta come management, le sedi delle società minerarie come business).',

  'The Global Financial Centres Index 40 (September 2026) ranks Sydney 24th in the world and tenth in Asia/Pacific, and Melbourne 32nd and thirteenth in Asia/Pacific.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Sydney al 24º posto nel mondo e al decimo in Asia/Pacifico, e Melbourne al 32º e al tredicesimo in Asia/Pacifico.',
  'Startup Genome’s 2026 report ranks Sydney 26th among the world’s start-up ecosystems and first in Oceania; it describes Tech Central, in the city centre, as a A$42 billion economy supporting more than 100,000 workers.':
    'Il rapporto 2026 di Startup Genome colloca Sydney al 26º posto tra gli ecosistemi di start-up del mondo e al primo in Oceania; descrive Tech Central, nel centro città, come un’economia da 42 miliardi di dollari australiani che sostiene oltre 100.000 lavoratori.',
  'Startup Genome’s 2026 report ranks Melbourne 30th among the world’s start-up ecosystems and second in Oceania; it says Victorian start-ups raised a record A$2.4 billion in 2025, and that more than half of Australia’s enterprise-software and health-tech start-ups are based in Victoria.':
    'Il rapporto 2026 di Startup Genome colloca Melbourne al 30º posto tra gli ecosistemi di start-up del mondo e al secondo in Oceania; indica che nel 2025 le start-up del Victoria hanno raccolto il record di 2,4 miliardi di dollari australiani e che oltre la metà delle start-up australiane di software aziendale e health-tech ha sede nel Victoria.',
  'Startup Genome’s 2026 report puts Brisbane in the 51–60 range of its emerging ecosystems and fourth in Oceania, and cites PsiQuantum’s US$1 billion quantum-computing project there.':
    'Il rapporto 2026 di Startup Genome colloca Brisbane nella fascia 51–60 degli ecosistemi emergenti e al quarto posto in Oceania, e cita il progetto di calcolo quantistico da 1 miliardo di dollari statunitensi di PsiQuantum.',
  'Commonwealth Bank’s results announcement for the year to 30 June 2026 is issued from Commonwealth Bank Place South, 11 Harbour Street, Sydney, and reports cash profit after tax of A$10,982 million.':
    'Il comunicato sui risultati dell’anno al 30 giugno 2026 della Commonwealth Bank è emesso da Commonwealth Bank Place South, 11 Harbour Street, Sydney, e riporta un utile netto di cassa di 10.982 milioni di dollari australiani.',
  'Westpac’s head office is at 275 Kent Street, Sydney, and the group had 35,236 full-time equivalent employees at 30 September 2025.':
    'La sede centrale di Westpac è al 275 di Kent Street, a Sydney, e il gruppo contava 35.236 dipendenti equivalenti a tempo pieno al 30 settembre 2025.',
  'Macquarie employs 19,124 people in 30 markets, about half of them in Australia and New Zealand; its Sydney offices at 50 Martin Place and 1 Elizabeth Street, with London, house about half of its people, and its asset-management arm says it manages A$325.9 billion of assets in Australia.':
    'Macquarie impiega 19.124 persone in 30 mercati, circa metà in Australia e Nuova Zelanda; i suoi uffici di Sydney, al 50 di Martin Place e all’1 di Elizabeth Street, con Londra ospitano circa metà del personale, e la divisione di gestione patrimoniale dichiara di gestire 325,9 miliardi di dollari australiani di attivi in Australia.',
  'NAB’s registered office is at 395 Bourke Street, Melbourne; it had 41,880 full-time equivalent staff at 30 September 2025 and says it was ranked first graduate employer in banking and finance on Prosple’s Top 100 Australian Graduate Employers for the fourth year running.':
    'La sede legale di NAB è al 395 di Bourke Street, a Melbourne; contava 41.880 dipendenti equivalenti a tempo pieno al 30 settembre 2025 e dichiara di essere stata classificata primo datore di lavoro per neolaureati nel settore bancario e finanziario nella Top 100 Australian Graduate Employers di Prosple per il quarto anno consecutivo.',
  'Telstra’s registered office is Level 41, 242 Exhibition Street, Melbourne.':
    'La sede legale di Telstra è al livello 41 di 242 Exhibition Street, a Melbourne.',
  'Suncorp Group’s registered office is on Level 23, Heritage Lanes, 80 Ann Street, Brisbane.':
    'La sede legale di Suncorp Group è al livello 23 di Heritage Lanes, 80 Ann Street, a Brisbane.',
  'Woodside Energy Group is registered at Mia Yellagonga, 11 Mount Street, Perth.':
    'Woodside Energy Group ha sede legale a Mia Yellagonga, 11 Mount Street, Perth.',
  'Western Australia’s mining sector had more than 136,000 on-site full-time equivalent jobs in 2025, at a record level that has stopped growing: 66,367 in iron ore, 38,816 in gold and 7,954 in lithium.':
    'Nel 2025 il settore minerario dell’Australia Occidentale contava oltre 136.000 posti equivalenti a tempo pieno sul posto, a un livello record che ha smesso di crescere: 66.367 nel minerale di ferro, 38.816 nell’oro e 7.954 nel litio.',
  'At 30 June 2025, 70,221 Australian Public Service employees, 35.4% of the 198,529 total, were based in Canberra; Melbourne had 30,165, Sydney 23,822, Brisbane 19,461, Adelaide 13,648 and Perth 9,125.':
    'Al 30 giugno 2025, 70.221 dipendenti dell’Australian Public Service, il 35,4% dei 198.529 totali, lavoravano a Canberra; Melbourne ne aveva 30.165, Sydney 23.822, Brisbane 19.461, Adelaide 13.648 e Perth 9.125.',
  'South Australia’s defence sector employs more than 14,000 workers, with another 10,000 jobs expected over the next 20 years, the state government says; the AUKUS submarine programme will be built at Osborne, near Adelaide.':
    'Secondo il governo statale il settore della difesa dell’Australia Meridionale impiega oltre 14.000 lavoratori, con altri 10.000 posti attesi nei prossimi 20 anni; il programma di sottomarini AUKUS sarà realizzato a Osborne, vicino ad Adelaide.',
  'In May 2026 full-time adults’ average weekly ordinary-time earnings were A$2,083.70 across Australia, up 3.7% in a year: A$2,108.80 in New South Wales, A$2,041.10 in Victoria, A$2,039.70 in Queensland, A$2,227.40 in Western Australia, A$1,970.20 in South Australia and A$2,290.20 in the Australian Capital Territory.':
    'A maggio 2026 la retribuzione media settimanale ordinaria dei lavoratori adulti a tempo pieno era di 2.083,70 dollari australiani in tutta l’Australia, il 3,7% in più in un anno: 2.108,80 nel Nuovo Galles del Sud, 2.041,10 nel Victoria, 2.039,70 nel Queensland, 2.227,40 nell’Australia Occidentale, 1.970,20 nell’Australia Meridionale e 2.290,20 nell’Australian Capital Territory.',
  'Melbourne’s jobs by industry (the City of Melbourne census) could not be read, so its finance rating rests on named employers, not a statistic; Brisbane’s likewise.':
    'I posti di lavoro per settore di Melbourne (il censimento della City of Melbourne) non si sono potuti leggere, quindi la valutazione della finanza si basa su datori di lavoro citati, non su una statistica; lo stesso vale per Brisbane.',
  'BHP, Rio Tinto, ANZ, Atlassian, Canva and the large accounting firms are not listed as employers because no head-office or headcount source we can cite was read.':
    'BHP, Rio Tinto, ANZ, Atlassian, Canva e le grandi società di revisione non sono elencate come datori di lavoro perché non è stata letta alcuna fonte citabile su sede o organici.',
  'Wages and output are the state’s, not the city’s, so Sydney and Melbourne are compared with their whole states; rent is a crowd-sourced figure for the city centre.':
    'Stipendi e produzione sono quelli dello stato, non della città, quindi Sydney e Melbourne sono confrontate con i rispettivi stati interi; l’affitto è un dato raccolto dagli utenti per il centro città.',
  'Country brief: hubs, employers, pay and standing': 'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Pay': 'Retribuzioni',
  'headquartered in Sydney; cash profit A$10,982 million in FY26':
    'con sede a Sydney; utile netto di cassa di 10.982 milioni di dollari australiani nell’esercizio FY26',
  'head office at 275 Kent Street; 35,236 full-time equivalent staff':
    'sede centrale al 275 di Kent Street; 35.236 dipendenti equivalenti a tempo pieno',
  '19,124 staff in 30 markets, about half of them in Australia and New Zealand':
    '19.124 dipendenti in 30 mercati, circa metà in Australia e Nuova Zelanda',
  'registered office on Bourke Street; 41,880 full-time equivalent staff':
    'sede legale in Bourke Street; 41.880 dipendenti equivalenti a tempo pieno',
  'registered office on Exhibition Street': 'sede legale in Exhibition Street',
  'registered office at Heritage Lanes, Ann Street': 'sede legale a Heritage Lanes, in Ann Street',
  'registered office on Mount Street': 'sede legale in Mount Street',
  'Mining employers in Western Australia': 'Datori di lavoro minerari in Australia Occidentale',
  'more than 136,000 on-site jobs (2025)': 'oltre 136.000 posti sul posto (2025)',
  'Defence-industry employers in South Australia': 'Datori di lavoro dell’industria della difesa nell’Australia Meridionale',
  'more than 14,000 workers': 'oltre 14.000 lavoratori',
  'Federal public service': 'Pubblica amministrazione federale',
  '13,648 APS staff in Adelaide (2025)': '13.648 dipendenti dell’APS ad Adelaide (2025)',
  '70,221 APS staff in Canberra, 35.4% of the total (2025)': '70.221 dipendenti dell’APS a Canberra, il 35,4% del totale (2025)'
});

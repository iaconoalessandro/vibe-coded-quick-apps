/* Atlas record: Romania. Read 2 October 2026; log P54
 * (research/verification/round-4e.md). First hub, Bucharest. The student work
 * limit is read in Government Ordinance 25/2014 as amended by Law 28/2024
 * (6 hours a day); the EU Immigration Portal still says 4 hours, which is the
 * pre-March-2024 rule.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Deepened on 3 October 2026 (log:
 * research/verification/round-5c.md; brief: research/countries/ro-romania.md): Bucharest's IT, software
 * and finance are "dominant" on Eurostat's metropolitan employment (56% of Romanian ICT jobs and 35% of
 * finance jobs, 2021); named employers are read from their own pages and annual reports. */

ATLAS.add({
  id: 'RO',
  checked: '2026-10-03',
  log: 'P54',
  summary: 'A large business-services industry of about 280,000 people, and a capital that holds more than half of Romania’s information-and-communication jobs and a third of its finance jobs; Cluj-Napoca and Iași follow in technology. Gross pay looks close to Poland’s, but Romania keeps the smallest share of gross pay in the region. Non-EU students may work 6 hours a day without a permit.',
  sectors: ['Business services and IT outsourcing', 'Software', 'Automotive', 'Energy', 'Banking'],
  roles: ['it', 'finance', 'software'],
  hubs: [
    {
      id: 'bucharest', name: 'Bucharest', lat: 44.43, lon: 26.1,
      knownFor: 'Service centres, IT and the country’s head offices',
      why: ['ro-absl', 'ro-emp-buc', 'ro-ict', 'ro-genome', 'ro-gfci', 'ro-bolt', 'ro-ubisoft', 'ro-bnr'],
      sectors: ['Business services', 'IT', 'Finance and accounting', 'Banking', 'Gaming'],
      employers: [
        { t: 'Business-service companies', note: 'finance and accounting and IT services each offered by 69% of those surveyed', c: 'ro-absl' },
        { name: 'Banca Comercială Română', note: 'registered office in Bucharest; 4,809 employees (2025)', c: 'ro-bcr' },
        { name: 'BRD-Groupe Société Générale', note: 'head office in Bucharest; 4,965 employees (2025)', c: 'ro-brd' },
        { name: 'National Bank of Romania', note: 'the central bank, seat in Bucharest', c: 'ro-bnr' },
        { name: 'Bolt', note: 'one of its key hubs, with the Tallinn headquarters', c: 'ro-bolt' },
        { name: 'Ubisoft', note: 'the second largest Ubisoft studio worldwide', c: 'ro-ubisoft' },
        { name: 'Bosch', note: 'Romanian headquarters in Bucharest; about 9,900 staff in Romania', c: 'ro-bosch' }
      ],
      demand: {
        finance: ['dominant', 'ro-emp-buc', 'ro-bcr', 'ro-brd'],
        accounting: ['present', 'ro-absl'],
        it: ['dominant', 'ro-emp-buc', 'ro-ict', 'ro-absl'],
        software: ['dominant', 'ro-emp-buc', 'ro-ubisoft', 'ro-bolt'],
        business: 'gap', economics: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { banking: ['strong', 'ro-emp-buc', 'ro-bcr', 'ro-brd', 'ro-bnr'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['ro-emp-buc', 'ro-gfci'] },
        { f: 'it', s: [5, 3, 1], c: ['ro-emp-buc', 'ro-ict', 'ro-genome'] },
        { f: 'software', s: [5, 2, 1], c: ['ro-emp-buc', 'ro-genome', 'ro-ubisoft'] }
      ],
      metrics: {
        pop:  { v: 2290125, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=RO001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Bucharest (RO001MC)', seen: '2026-10-03' },
        gdp:  { v: 67.62, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=RO001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Bucharest (EUR 67,623 million)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'cluj-napoca', name: 'Cluj-Napoca', lat: 46.77, lon: 23.59,
      knownFor: 'Romania’s second city for finance and information-and-communication jobs',
      why: ['ro-cluj-napoca', 'ro-bt', 'ro-bosch', 'ro-evozon', 'ro-endava'],
      sectors: ['Technology', 'Business services centres', 'Higher education', 'Banking'],
      employers: [
        { t: 'Information and communication employers', note: '17,390 jobs (2021)', c: 'ro-cluj-napoca' },
        { t: 'Finance and insurance employers', note: '8,120 jobs (2021)', c: 'ro-cluj-napoca' },
        { name: 'Banca Transilvania', note: 'registered address in Cluj-Napoca; 10,180 employees (2025)', c: 'ro-bt' },
        { name: 'Bosch', note: 'research and development centre and an automotive production unit', c: 'ro-bosch' },
        { name: 'Evozon', note: 'software agency located in Cluj-Napoca', c: 'ro-evozon' },
        { name: 'Endava', note: 'an office in Cluj-Napoca', c: 'ro-endava' }
      ],
      demand: {
        finance: ['strong', 'ro-cluj-napoca', 'ro-bt'],
        it: ['strong', 'ro-cluj-napoca', 'ro-bosch', 'ro-evozon'],
        software: ['strong', 'ro-cluj-napoca', 'ro-evozon', 'ro-bosch'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap',
        bigdata: 'gap'
      },
      finance: { banking: ['strong', 'ro-cluj-napoca', 'ro-bt'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [4, 1, 1], c: ['ro-cluj-napoca', 'ro-bosch'] },
        { f: 'software', s: [4, 1, 1], c: ['ro-cluj-napoca', 'ro-evozon'] },
        { f: 'finance', s: [4, 1, 1], c: ['ro-cluj-napoca', 'ro-bt'] }
      ],
      metrics: {
        pop:  { v: 688930, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=RO002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Cluj-Napoca (RO002M)', seen: '2026-10-03' },
        gdp:  { v: 12.47, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=RO002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Cluj-Napoca (EUR 12,471 million)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'iasi', name: 'Iași', lat: 47.16, lon: 27.59,
      knownFor: 'Moldavia’s centre, third in Romania for information-and-communication jobs',
      why: ['ro-iasi', 'ro-endava', 'ro-vois'],
      sectors: ['Technology', 'Higher education', 'Public sector'],
      employers: [
        { t: 'Information and communication employers', note: '16,810 jobs (2021)', c: 'ro-iasi' },
        { t: 'Finance and insurance employers', note: '3,270 jobs (2021)', c: 'ro-iasi' },
        { name: 'Endava', note: 'over 700 specialists in Iași since 2010', c: 'ro-endava' },
        { name: 'VOIS Romania', note: 'new office announced in Iași in November 2025', c: 'ro-vois' }
      ],
      demand: {
        it: ['strong', 'ro-iasi'],
        software: ['present', 'ro-endava'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap',
        cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['ro-iasi', 'ro-endava'] }
      ],
      metrics: {
        pop:  { v: 774025, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=RO502M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Iași (RO502M)', seen: '2026-10-03' },
        gdp:  { v: 8.39, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=RO502M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Iași (EUR 8,394 million)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'timisoara', name: 'Timișoara', lat: 45.75, lon: 21.23,
      knownFor: 'A western manufacturing and car-parts city',
      why: ['ro-timisoara', 'ro-bosch', 'ro-endava'],
      sectors: ['Automotive', 'Manufacturing', 'Technology'],
      employers: [
        { t: 'Information and communication employers', note: '8,460 jobs (2021)', c: 'ro-timisoara' },
        { t: 'Finance and insurance employers', note: '3,340 jobs (2021)', c: 'ro-timisoara' },
        { name: 'Bosch', note: 'a centre for business and technology solutions', c: 'ro-bosch' },
        { name: 'Endava', note: 'an office in Timișoara', c: 'ro-endava' }
      ],
      demand: {
        it: ['present', 'ro-bosch'],
        software: ['present', 'ro-endava'],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap',
        marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap',
        cs: 'gap', bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['ro-timisoara', 'ro-bosch'] }
      ],
      metrics: {
        pop:  { v: 658607, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=RO003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Timișoara (RO003M)', seen: '2026-10-03' },
        gdp:  { v: 11.15, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=RO003M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Timișoara (EUR 11,147 million)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['ro-lang'] },
    { k: 'Recruiting calendar', c: ['ro-cal'] },
    { k: 'Where demand is now', c: ['ro-absl', 'ro-emp-buc', 'ro-ict'] },
    { k: 'Graduate labour market', c: ['ro-grad-lab'] },
    { k: 'Tax and net pay', c: ['ro-net'] }
  ],

  briefs: [
    ['places/gulf-and-central-eastern-europe.md', '§4–5 Romanian service centres: junior pay, net pay, Bucharest rent'],
    ['countries/ro-romania.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'No source read splits service-centre jobs by city, so business is not rated in any hub and accounting is only present in Bucharest.',
    'Wages by county were not read: the National Institute of Statistics site could not be read directly; the wage metric is left out for every Romanian hub.',
    'Rents by city were not found: no citable rent source was available on 3 October 2026.',
    'Graduate programmes, intake calendars and entry pay by employer and city were not researched.',
    'All Romanian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/romania/romania_visas_immigration_guide.md.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    'ro-absl': { t: 'More than 280,000 people work in Romania’s business-services industry; finance and accounting and IT services are each offered by 69% of the companies surveyed, HR by 61% and customer support by 57%.', tag: 'data', src: 'https://www.absl.ro/absl-annual-report-human-capital-innovation-and-digital-transformation/', by: 'ABSL Romania with PwC, 2025 industry report (70 companies, 13 Nov 2025)', seen: '2026-10-02' },
    'ro-net': { t: 'A junior specialist in a Romanian centre earned a mean base of €1,625 a month in 2024, but a single worker keeps only 58.5% of gross at the average wage, against 71.7% in Poland; after a central Bucharest one-bed about €340 a month is left.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL 2025 citing Mercer 2024; Eurostat 2025; author calculation, via places/gulf-and-central-eastern-europe.md §4–5', seen: '2026-10-02' },
    'ro-cluj-napoca': { t: 'Eurostat counts 359,060 people in work in the Cluj-Napoca metropolitan region in 2021: 17,390 in information and communication (second in Romania, after Bucharest) and 8,120 in finance and insurance (second in Romania, after Bucharest). The region’s GDP was €12.5 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'ro-iasi': { t: 'Eurostat counts 382,640 people in work in the Iași metropolitan region in 2021: 16,810 in information and communication (third in Romania, after Bucharest and Cluj-Napoca) and 3,270 in finance and insurance. The region’s GDP was €8.4 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'ro-timisoara': { t: 'Eurostat counts 321,020 people in work in the Timișoara metropolitan region in 2021: 8,460 in information and communication and 3,340 in finance and insurance. The region’s GDP was €11.1 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'ro-emp-buc': { t: 'Eurostat counts 108,840 people employed in information and communication in the Bucharest metropolitan region in 2021, 56% of Romania’s 194,700 and seventh among the 25 European capital regions reported, and 36,080 in finance and insurance, 35% of 102,600 and fifteenth among them, out of 1,257,140 in work.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=RO001MC&wstatus=EMP&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (ranking among capital metropolitan regions computed from the same table)', seen: '2026-10-03' },
    'ro-ict': { t: 'In 2025 ICT specialists were 2.7% of employment in Romania (207,800 people), the lowest share in the EU after Greece, against 5.0% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=RO&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'ro-bcr': { t: 'Banca Comercială Română gives its registered office as 15D Orhideelor avenue, The Bridge 1 building, 6th District, Bucharest; at 31 December 2025 the bank had 4,809 employees and the group 5,117.', tag: 'employer-stated', src: 'https://m.bvb.ro/infocont/infocont26/BCR26_20260330194455_Consolidated-and-Separate-Financial-Statements-2025-IFRS-BVB.pdf', by: 'Banca Comercială Română, annual administrators’ report and financial statements 2025 (filed with the Bucharest Stock Exchange, 27 Mar 2026)', seen: '2026-10-03' },
    'ro-brd': { t: 'BRD-Groupe Société Générale gives its head office and registered office as Bld Ion Mihalache 1-7, Bucharest; at the end of 2025 the bank had 4,965 active employees and the group 5,124.', tag: 'employer-stated', src: 'https://bvb.ro/infocont/infocont26/BRD_20260318062438_BRD-Raport-anual-2025.pdf', by: 'BRD-Groupe Société Générale, annual report 2025 (Romanian, filed 18 Mar 2026)', seen: '2026-10-03' },
    'ro-bt': { t: 'Banca Transilvania gives its registered address as 30-36 Calea Dorobanților, Cluj-Napoca; at 31 December 2025 the bank had 10,180 active employees and the group 13,361, and its report calls it the largest bank in Romania by total assets.', tag: 'employer-stated', src: 'https://m.bvb.ro/infocont/infocont26/TLV_20260327181957_Annual-Report-2025.pdf', by: 'Banca Transilvania, annual report 2025 (English, filed 27 Mar 2026)', seen: '2026-10-03' },
    'ro-bnr': { t: 'The National Bank of Romania gives its central seat as Strada Lipscani 25, sector 3, Bucharest.', tag: 'employer-stated', src: 'https://www.bnr.ro/Contact-3135.aspx', by: 'National Bank of Romania, contact page (Romanian)', seen: '2026-10-03' },
    'ro-bosch': { t: 'Bosch says it employs around 9,900 associates in Romania, has its Romanian headquarters in Bucharest (since 1994), a research and development centre and an automotive production unit in Cluj, and a centre for business and technology solutions in Timișoara.', tag: 'employer-stated', src: 'https://www.bosch.ro/en/our-company/bosch-in-romania/', by: 'Bosch in Romania, company page', seen: '2026-10-03' },
    'ro-ubisoft': { t: 'Ubisoft says its Bucharest studio (Jiului 8 street) has been a pillar of the local gaming industry since 1992 and is the second largest Ubisoft studio worldwide.', tag: 'employer-stated', src: 'https://www.ubisoft.com/en-us/company/careers/locations/bucharest', by: 'Ubisoft, careers page for Bucharest', seen: '2026-10-03' },
    'ro-bolt': { t: 'Bolt names Bucharest among its four key hubs, with London, Warsaw and Berlin, around its Tallinn headquarters.', tag: 'employer-stated', src: 'https://bolt.eu/en/careers/', by: 'Bolt careers page', seen: '2026-10-03' },
    'ro-endava': { t: 'A trade-press report of 1 September 2025 says Endava has been in Iași since 2010, has grown there from 25 to over 700 specialists, and has offices in Iași, Cluj-Napoca and Timișoara.', tag: 'employer-stated', src: 'https://www.thediplomat.ro/2025/09/01/endava-expands-its-office-space-in-palas-iasi-to-5500-sqm/', by: 'The Diplomat Bucharest, 1 Sep 2025 (press report quoting Endava and its landlord)', seen: '2026-10-03' },
    'ro-vois': { t: 'A trade-press report of 13 November 2025 says VOIS Romania, part of Vodafone Intelligent Solutions, opened a new office in Iași and plans to hire 150 people by the end of 2026.', tag: 'employer-stated', src: 'https://www.thediplomat.ro/2025/11/13/vois-romania-opens-new-office-in-iasi-plans-to-hire-150-new-employees-by-the-end-of-2026/', by: 'The Diplomat Bucharest, 13 Nov 2025 (press report quoting VOIS Romania)', seen: '2026-10-03' },
    'ro-evozon': { t: 'Evozon describes itself as a software development and consulting agency located in Cluj-Napoca.', tag: 'employer-stated', src: 'https://www.evozon.com/about-us/', by: 'Evozon, about-us page', seen: '2026-10-03' },
    'ro-genome': { t: 'Startup Genome’s 2026 report puts the Bucharest ecosystem’s value at $2 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $123 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/bucharest', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Bucharest page', seen: '2026-10-03' },
    'ro-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) does not list Bucharest, Cluj-Napoca, Iași or Timișoara among its 117 centres.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 2', seen: '2026-10-03' },
    'ro-lang': { t: 'EURES says a Romanian CV should be in Romanian, with a version in the required foreign language where the job needs one; ABSL’s 2025 report lists proficiency in several foreign languages among the skills service centres look for, and Vodafone’s graduate programme asks for excellent written and spoken English.', tag: 'data', src: 'https://eures.europa.eu/living-and-working/living-and-working-conditions/living-and-working-conditions-romania_en', by: 'EURES, Romania living and working conditions; ABSL Romania 2025 report; Hipo.ro, Vodafone Discover Graduate IT-AI Engineering Programme 2027', seen: '2026-10-08' },
    'ro-cal': { t: 'Vodafone Romania’s graduate programme closed on 15 November 2025 for a start on 12 January 2026 and closes on 6 November 2026 for a start on 11 January 2027; UiPath’s Bucharest internship is a three-month summer placement; Hipo’s Angajatori de TOP fairs are in Timișoara on 16–17 October 2026 and Bucharest on 30–31 October 2026.', tag: 'employer-stated', src: 'https://www.hipo.ro/locuri-de-munca/locuri_de_munca/272410/Vodafone-Romania/Vodafone-Romania-Discover-Graduate-IT-AI-Engineering-Programme,-2027', by: 'Hipo.ro, Vodafone Discover listings (2026 and 2027); Accel jobs board, UiPath internship; Hipo.ro home page', seen: '2026-10-08' },
    'ro-grad-lab': { t: 'In 2025, 81.1% of Romanian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 26.1% (EU 15.2%, Romania 21.8% in 2023) and 23.0% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=RO&geo=EU27_2020', by: 'Eurostat, edat_lfse_24, une_rt_a and edat_lfse_03, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Business services and IT outsourcing': 'Servizi alle imprese e outsourcing IT', 'Software': 'Software', 'Automotive': 'Automotive', 'Energy': 'Energia', 'Banking': 'Banca',
  'Service centres, IT and the country’s head offices': 'Centri servizi, IT e le sedi centrali del paese',
  'Business services': 'Servizi alle imprese', 'IT': 'IT', 'Finance and accounting': 'Finanza e contabilità',
  'Business-service companies': 'Le aziende di servizi alle imprese',
  'finance and accounting and IT services each offered by 69% of those surveyed': 'servizi di finanza e contabilità e IT offerti ciascuno dal 69% delle aziende intervistate',
  '§4–5 Romanian service centres: junior pay, net pay, Bucharest rent': '§4–5 Centri servizi romeni: stipendi junior, netto, affitto a Bucarest',
  'All Romanian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/romania/romania_visas_immigration_guide.md.':
    'Tutte le regole su immigrazione, visti, permessi di soggiorno e salari per la Romania sono consolidate da fonti primarie in visas_immigration/romania/romania_visas_immigration_guide.md.',
  'More than 280,000 people work in Romania’s business-services industry; finance and accounting and IT services are each offered by 69% of the companies surveyed, HR by 61% and customer support by 57%.':
    'Oltre 280.000 persone lavorano nell’industria romena dei servizi alle imprese; i servizi di finanza e contabilità e IT sono offerti ciascuno dal 69% delle aziende intervistate, le risorse umane dal 61% e l’assistenza clienti dal 57%.',
  'A junior specialist in a Romanian centre earned a mean base of €1,625 a month in 2024, but a single worker keeps only 58.5% of gross at the average wage, against 71.7% in Poland; after a central Bucharest one-bed about €340 a month is left.':
    'Nel 2024 uno specialista junior in un centro romeno guadagnava una base media di 1.625 € al mese, ma con il salario medio un lavoratore single tiene solo il 58,5% del lordo, contro il 71,7% in Polonia; dopo un bilocale in centro a Bucarest restano circa 340 € al mese.',
  'Romania’s second city for finance and information-and-communication jobs':
    'La seconda città romena per posti in finanza e in informazione e comunicazione',
  'Business services centres':
    'Centri di servizi alle imprese',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '17,390 jobs (2021)':
    '17.390 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '8,120 jobs (2021)':
    '8.120 posti (2021)',
  'Moldavia’s centre, third in Romania for information-and-communication jobs':
    'Il centro della Moldavia romena, terzo in Romania per posti in informazione e comunicazione',
  '16,810 jobs (2021)':
    '16.810 posti (2021)',
  '3,270 jobs (2021)':
    '3.270 posti (2021)',
  'A western manufacturing and car-parts city':
    'Una città occidentale della manifattura e della componentistica auto',
  '8,460 jobs (2021)':
    '8.460 posti (2021)',
  '3,340 jobs (2021)':
    '3.340 posti (2021)',
  'Eurostat counts 359,060 people in work in the Cluj-Napoca metropolitan region in 2021: 17,390 in information and communication (second in Romania, after Bucharest) and 8,120 in finance and insurance (second in Romania, after Bucharest). The region’s GDP was €12.5 billion in 2021.':
    'Eurostat conta 359.060 occupati nella regione metropolitana di Cluj-Napoca nel 2021: 17.390 nell’informazione e comunicazione (seconda in Romania, dopo Bucarest) e 8.120 in finanza e assicurazioni (seconda in Romania, dopo Bucarest). Il PIL della regione era di 12,5 miliardi di € nel 2021.',
  'Eurostat counts 382,640 people in work in the Iași metropolitan region in 2021: 16,810 in information and communication (third in Romania, after Bucharest and Cluj-Napoca) and 3,270 in finance and insurance. The region’s GDP was €8.4 billion in 2021.':
    'Eurostat conta 382.640 occupati nella regione metropolitana di Iași nel 2021: 16.810 nell’informazione e comunicazione (terza in Romania, dopo Bucarest e Cluj-Napoca) e 3.270 in finanza e assicurazioni. Il PIL della regione era di 8,4 miliardi di € nel 2021.',
  'Eurostat counts 321,020 people in work in the Timișoara metropolitan region in 2021: 8,460 in information and communication and 3,340 in finance and insurance. The region’s GDP was €11.1 billion in 2021.':
    'Eurostat conta 321.020 occupati nella regione metropolitana di Timișoara nel 2021: 8.460 nell’informazione e comunicazione e 3.340 in finanza e assicurazioni. Il PIL della regione era di 11,1 miliardi di € nel 2021.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo dai conteggi Eurostat 2021–22 sull’occupazione metropolitana: forte significa seconda o terza regione del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti di quel tipo.',
  'A large business-services industry of about 280,000 people, and a capital that holds more than half of Romania’s information-and-communication jobs and a third of its finance jobs; Cluj-Napoca and Iași follow in technology. Gross pay looks close to Poland’s, but Romania keeps the smallest share of gross pay in the region. Non-EU students may work 6 hours a day without a permit.':
    'Un’industria dei servizi alle imprese molto grande, con circa 280.000 addetti, e una capitale che concentra più della metà dei posti romeni nell’informazione e comunicazione e un terzo di quelli nella finanza; Cluj-Napoca e Iași seguono nella tecnologia. Gli stipendi lordi sembrano vicini a quelli polacchi, ma la Romania trattiene la quota più piccola di stipendio lordo della regione. Gli studenti extra-UE possono lavorare 6 ore al giorno senza permesso.',
  'Eurostat counts 108,840 people employed in information and communication in the Bucharest metropolitan region in 2021, 56% of Romania’s 194,700 and seventh among the 25 European capital regions reported, and 36,080 in finance and insurance, 35% of 102,600 and fifteenth among them, out of 1,257,140 in work.':
    'Eurostat conta 108.840 occupati nell’informazione e comunicazione nella regione metropolitana di Bucarest nel 2021, il 56% dei 194.700 della Romania e la settima tra le 25 regioni delle capitali europee rilevate, e 36.080 in finanza e assicurazioni, il 35% di 102.600 e la quindicesima tra queste, su 1.257.140 occupati.',
  'In 2025 ICT specialists were 2.7% of employment in Romania (207,800 people), the lowest share in the EU after Greece, against 5.0% in the EU.':
    'Nel 2025 gli specialisti ICT erano il 2,7% dell’occupazione in Romania (207.800 persone), la quota più bassa dell’UE dopo la Grecia, contro il 5,0% nell’UE.',
  'Banca Comercială Română gives its registered office as 15D Orhideelor avenue, The Bridge 1 building, 6th District, Bucharest; at 31 December 2025 the bank had 4,809 employees and the group 5,117.':
    'Banca Comercială Română indica come sede legale 15D Orhideelor avenue, edificio The Bridge 1, 6º distretto, Bucarest; al 31 dicembre 2025 la banca aveva 4.809 dipendenti e il gruppo 5.117.',
  'BRD-Groupe Société Générale gives its head office and registered office as Bld Ion Mihalache 1-7, Bucharest; at the end of 2025 the bank had 4,965 active employees and the group 5,124.':
    'BRD-Groupe Société Générale indica come sede centrale e sede legale Bld Ion Mihalache 1-7, Bucarest; alla fine del 2025 la banca aveva 4.965 dipendenti attivi e il gruppo 5.124.',
  'Banca Transilvania gives its registered address as 30-36 Calea Dorobanților, Cluj-Napoca; at 31 December 2025 the bank had 10,180 active employees and the group 13,361, and its report calls it the largest bank in Romania by total assets.':
    'Banca Transilvania indica come indirizzo legale 30-36 Calea Dorobanților, Cluj-Napoca; al 31 dicembre 2025 la banca aveva 10.180 dipendenti attivi e il gruppo 13.361, e il suo rapporto la definisce la maggiore banca della Romania per attivo totale.',
  'The National Bank of Romania gives its central seat as Strada Lipscani 25, sector 3, Bucharest.':
    'La Banca nazionale di Romania indica come sede centrale Strada Lipscani 25, settore 3, Bucarest.',
  'Bosch says it employs around 9,900 associates in Romania, has its Romanian headquarters in Bucharest (since 1994), a research and development centre and an automotive production unit in Cluj, and a centre for business and technology solutions in Timișoara.':
    'Bosch dichiara di avere in Romania circa 9.900 collaboratori, la sede romena a Bucarest (dal 1994), un centro di ricerca e sviluppo e uno stabilimento per l’automotive a Cluj e un centro di soluzioni per il business e la tecnologia a Timișoara.',
  'Ubisoft says its Bucharest studio (Jiului 8 street) has been a pillar of the local gaming industry since 1992 and is the second largest Ubisoft studio worldwide.':
    'Ubisoft dichiara che il suo studio di Bucarest (Jiului 8 street) è un pilastro dell’industria locale dei videogiochi dal 1992 ed è il secondo studio Ubisoft più grande al mondo.',
  'Bolt names Bucharest among its four key hubs, with London, Warsaw and Berlin, around its Tallinn headquarters.':
    'Bolt cita Bucarest tra i suoi quattro poli principali, con Londra, Varsavia e Berlino, attorno alla sede centrale di Tallinn.',
  'A trade-press report of 1 September 2025 says Endava has been in Iași since 2010, has grown there from 25 to over 700 specialists, and has offices in Iași, Cluj-Napoca and Timișoara.':
    'Un articolo di stampa di settore del 1° settembre 2025 afferma che Endava è a Iași dal 2010, vi è passata da 25 a oltre 700 specialisti e ha uffici a Iași, Cluj-Napoca e Timișoara.',
  'A trade-press report of 13 November 2025 says VOIS Romania, part of Vodafone Intelligent Solutions, opened a new office in Iași and plans to hire 150 people by the end of 2026.':
    'Un articolo di stampa di settore del 13 novembre 2025 afferma che VOIS Romania, parte di Vodafone Intelligent Solutions, ha aperto un nuovo ufficio a Iași e prevede di assumere 150 persone entro la fine del 2026.',
  'Evozon describes itself as a software development and consulting agency located in Cluj-Napoca.':
    'Evozon si descrive come un’agenzia di sviluppo software e consulenza con sede a Cluj-Napoca.',
  'Startup Genome’s 2026 report puts the Bucharest ecosystem’s value at $2 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $123 million.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Bucarest in 2 miliardi di dollari, contro una media europea di 14,3 miliardi; i finanziamenti early-stage nel periodo H2 2023–2025 sono stati di 123 milioni.',
  'The Global Financial Centres Index 40 (September 2026) does not list Bucharest, Cluj-Napoca, Iași or Timișoara among its 117 centres.':
    'Il Global Financial Centres Index 40 (settembre 2026) non include Bucarest, Cluj-Napoca, Iași né Timișoara tra i suoi 117 centri.',
  'In 2025, 81.1% of Romanian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 26.1% (EU 15.2%, Romania 21.8% in 2023) and 23.0% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).':
    'Nel 2025 l’81,1% dei laureati romeni di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), la disoccupazione tra i 15-24enni era del 26,1% (UE 15,2%, Romania 21,8% nel 2023) e il 23,0% dei 25-34enni aveva una laurea (UE 44,8%).',
  'No source read splits service-centre jobs by city, so business is not rated in any hub and accounting is only present in Bucharest.':
    'Nessuna fonte letta distingue per città i posti nei centri di servizi, quindi il business non è valutato in nessun polo e la contabilità è solo presente a Bucarest.',
  'Wages by county were not read: the National Institute of Statistics site could not be read directly; the wage metric is left out for every Romanian hub.':
    'Gli stipendi per contea non sono stati letti: il sito dell’Istituto nazionale di statistica non si è potuto leggere direttamente; la voce stipendio manca per ogni polo romeno.',
  'Rents by city were not found: no citable rent source was available on 3 October 2026.':
    'Gli affitti per città non sono stati trovati: il 3 ottobre 2026 non era disponibile una fonte citabile.',
  'Graduate programmes, intake calendars and entry pay by employer and city were not researched.':
    'Programmi per neolaureati, calendari di selezione e stipendi d’ingresso per datore di lavoro e città non sono stati ricercati.',
  'registered office in Bucharest; 4,809 employees (2025)':
    'sede legale a Bucarest; 4.809 dipendenti (2025)',
  'head office in Bucharest; 4,965 employees (2025)':
    'sede centrale a Bucarest; 4.965 dipendenti (2025)',
  'the central bank, seat in Bucharest':
    'la banca centrale, sede a Bucarest',
  'one of its key hubs, with the Tallinn headquarters':
    'uno dei poli principali, insieme alla sede centrale di Tallinn',
  'the second largest Ubisoft studio worldwide':
    'il secondo studio Ubisoft più grande al mondo',
  'Romanian headquarters in Bucharest; about 9,900 staff in Romania':
    'sede romena a Bucarest; circa 9.900 addetti in Romania',
  'Gaming':
    'Videogiochi',
  'registered address in Cluj-Napoca; 10,180 employees (2025)':
    'indirizzo legale a Cluj-Napoca; 10.180 dipendenti (2025)',
  'research and development centre and an automotive production unit':
    'centro di ricerca e sviluppo e stabilimento per l’automotive',
  'software agency located in Cluj-Napoca':
    'agenzia software con sede a Cluj-Napoca',
  'an office in Cluj-Napoca':
    'un ufficio a Cluj-Napoca',
  'over 700 specialists in Iași since 2010':
    'oltre 700 specialisti a Iași dal 2010',
  'new office announced in Iași in November 2025':
    'nuovo ufficio annunciato a Iași a novembre 2025',
  'a centre for business and technology solutions':
    'un centro di soluzioni per il business e la tecnologia',
  'an office in Timișoara':
    'un ufficio a Timișoara',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Language': 'Lingua',
  'Recruiting calendar': 'Calendario delle selezioni',
  'EURES says a Romanian CV should be in Romanian, with a version in the required foreign language where the job needs one; ABSL’s 2025 report lists proficiency in several foreign languages among the skills service centres look for, and Vodafone’s graduate programme asks for excellent written and spoken English.':
    'EURES dice che un CV rumeno dovrebbe essere in rumeno, con una versione nella lingua straniera richiesta se il lavoro la prevede; il rapporto ABSL 2025 elenca la padronanza di più lingue straniere tra le competenze cercate dai centri di servizi, e il programma per neolaureati di Vodafone chiede un ottimo inglese scritto e parlato.',
  'Vodafone Romania’s graduate programme closed on 15 November 2025 for a start on 12 January 2026 and closes on 6 November 2026 for a start on 11 January 2027; UiPath’s Bucharest internship is a three-month summer placement; Hipo’s Angajatori de TOP fairs are in Timișoara on 16–17 October 2026 and Bucharest on 30–31 October 2026.':
    'Il programma per neolaureati di Vodafone Romania ha chiuso il 15 novembre 2025 per un inizio il 12 gennaio 2026 e chiude il 6 novembre 2026 per un inizio l’11 gennaio 2027; il tirocinio di UiPath a Bucarest è un’esperienza estiva di tre mesi; le fiere Angajatori de TOP di Hipo sono a Timișoara il 16–17 ottobre 2026 e a Bucarest il 30–31 ottobre 2026.',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento'
});

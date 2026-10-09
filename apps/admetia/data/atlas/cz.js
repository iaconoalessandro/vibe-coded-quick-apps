/* Atlas record: Czech Republic. Read 2 October 2026; log P53
 * (research/verification/round-4e.md). First hub, Prague, rated on the Czech
 * Statistical Office's Labour Force Survey (Q4 2024). Permits read on the
 * Ministry of the Interior's portal for foreigners (ipc.gov.cz) and gov.cz.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Deepened on 3 October 2026 (log:
 * research/verification/round-5c.md; brief: research/countries/cz-czech-republic.md): Prague's IT, software
 * and finance are "dominant" on Eurostat's metropolitan employment (half of Czech ICT and finance jobs,
 * 2022); pay is the Czech Statistical Office's, by region. */

ATLAS.add({
  id: 'CZ',
  checked: '2026-10-03',
  log: 'P53',
  summary: 'Prague is one of the richest regions in the EU and the country’s office economy: half of the Czech jobs in information and communication and in finance, with Brno a distant second in both. Service-centre pay is the highest in central Europe. Non-EU students work without a permit, and graduates get nine months to find a job.',
  sectors: ['Information and communication', 'Finance and insurance', 'Business-service centres', 'Automotive and engineering', 'Tourism'],
  roles: ['it', 'finance', 'software'],
  hubs: [
    {
      id: 'prague', name: 'Prague', lat: 50.08, lon: 14.44,
      knownFor: 'ICT, finance and professional services for the whole country',
      why: ['cz-lfs', 'cz-gdp', 'cz-emp-pra', 'cz-ict', 'cz-gfci', 'cz-genome', 'cz-gen', 'cz-cnb'],
      sectors: ['Information and communication', 'Finance and insurance', 'Banking', 'Software', 'Professional services', 'Business services'],
      employers: [
        { t: 'Information and communication firms', note: '12.0% of Prague jobs, against 4.0% nationally', c: 'cz-lfs' },
        { name: 'Komerční banka', note: 'headquarters on Na Příkopě, Prague 1', c: 'cz-kb' },
        { name: 'Česká spořitelna', note: 'headquarters in Prague 4', c: 'cz-cs' },
        { name: 'Raiffeisenbank', note: 'headquarters in Prague 4', c: 'cz-rb' },
        { name: 'MONETA Money Bank', note: 'registered seat in Prague 4, correspondence address in Ostrava', c: 'cz-moneta' },
        { name: 'Czech National Bank', note: 'the central bank, head office in Prague 1', c: 'cz-cnb' },
        { name: 'Gen Digital', note: 'dual headquarters in Prague and Tempe, Arizona', c: 'cz-gen' },
        { name: 'JetBrains', note: 'sales office for EMEA and APAC in Prague 4; headquarters listed in Amsterdam', c: 'cz-jb' }
      ],
      demand: {
        business: ['present', 'cz-pay', 'cz-absl'],
        finance: ['dominant', 'cz-emp-pra', 'cz-lfs'],
        it: ['dominant', 'cz-emp-pra', 'cz-lfs', 'cz-ict'],
        software: ['dominant', 'cz-emp-pra', 'cz-gen', 'cz-jb'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: { banking: ['strong', 'cz-emp-pra', 'cz-kb', 'cz-cs', 'cz-rb', 'cz-moneta'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['cz-emp-pra', 'cz-gfci'] },
        { f: 'it', s: [5, 2, 1], c: ['cz-emp-pra', 'cz-ict', 'cz-genome'] },
        { f: 'software', s: [5, 2, 1], c: ['cz-emp-pra', 'cz-genome', 'cz-gen'] }
      ],
      metrics: {
        pop:  { v: 2796717, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=CZ001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Prague (CZ001MC)', seen: '2026-10-03' },
        gdp:  { v: 109.99, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=CZ001MC&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Prague (EUR 109,990 million)', seen: '2026-10-03' },
        wage: { v: 62723, cur: 'CZK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://csu.gov.cz/pha/prumerna-mzda-v-praze-4-ctvrtleti-2025', by: 'Czech Statistical Office, average gross monthly wage of employees, Prague (region), 2025, preliminary', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'brno', name: 'Brno', lat: 49.2, lon: 16.61,
      knownFor: 'The Czech Republic’s second city for finance and information-and-communication jobs',
      why: ['cz-brno', 'cz-genome-brno', 'cz-kiwi', 'cz-redhat', 'cz-wage-reg'],
      sectors: ['Technology', 'Business services centres', 'Higher education'],
      employers: [
        { t: 'Information and communication employers', note: '38,390 jobs (2022)', c: 'cz-brno' },
        { t: 'Finance and insurance employers', note: '8,780 jobs (2022)', c: 'cz-brno' },
        { name: 'Kiwi.com', note: 'headquarters in Brno, a core office in Prague', c: 'cz-kiwi' },
        { name: 'Red Hat', note: 'two offices in Brno and one in Prague', c: 'cz-redhat' }
      ],
      demand: {
        finance: ['strong', 'cz-brno'],
        it: ['strong', 'cz-brno'],
        software: ['strong', 'cz-brno', 'cz-kiwi', 'cz-redhat'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap',
        bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['cz-brno', 'cz-genome-brno'] },
        { f: 'software', s: [4, 2, 1], c: ['cz-brno', 'cz-kiwi', 'cz-redhat'] },
        { f: 'finance', s: [4, 1, 1], c: ['cz-brno'] }
      ],
      metrics: {
        pop:  { v: 1217200, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=CZ002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Brno (CZ002M)', seen: '2026-10-03' },
        gdp:  { v: 30.33, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=CZ002M&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Brno (EUR 30,334 million)', seen: '2026-10-03' },
        wage: { v: 48467, cur: 'CZK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://csu.gov.cz/jhm/prumerna-mzda-v-jihomoravskem-kraji-ve-4-ctvrtleti-2025-a-v-1-az-4-ctvrtleti-2025', by: 'Czech Statistical Office, average gross monthly wage of employees, South Moravian Region, 2025 (annual average of four quarters)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'ostrava', name: 'Ostrava', lat: 49.82, lon: 18.26,
      knownFor: 'Moravia-Silesia’s industrial centre, third in the country for finance and tech jobs',
      why: ['cz-ostrava', 'cz-tieto', 'cz-wage-reg'],
      sectors: ['Steel and metals', 'Manufacturing', 'Business services centres'],
      employers: [
        { t: 'Information and communication employers', note: '15,240 jobs (2022)', c: 'cz-ostrava' },
        { t: 'Finance and insurance employers', note: '6,060 jobs (2022)', c: 'cz-ostrava' },
        { name: 'Tietoevry', note: 'an open vacancy in Ostrava on its Czech careers page', c: 'cz-tieto' },
        { name: 'MONETA Money Bank', note: 'correspondence address in Ostrava-Hrabová', c: 'cz-moneta' }
      ],
      demand: {
        finance: ['strong', 'cz-ostrava'],
        it: ['strong', 'cz-ostrava'],
        software: ['present', 'cz-tieto'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap',
        logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap',
        bigdata: 'gap'
      },
      finance: { ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['cz-ostrava'] },
        { f: 'finance', s: [3, 1, 1], c: ['cz-ostrava'] }
      ],
      metrics: {
        pop:  { v: 1189674, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=CZ003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January by metropolitan region, Ostrava (CZ003M)', seen: '2026-10-03' },
        gdp:  { v: 24.33, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=CZ003M&unit=MIO_EUR&time=2022', by: 'Eurostat, met_10r_3gdp GDP at current market prices by metropolitan region, Ostrava (EUR 24,329 million)', seen: '2026-10-03' },
        wage: { v: 44241, cur: 'CZK', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://csu.gov.cz/msk/prumerna-mzda-v-moravskoslezskem-kraji-ve-4-ctvrtleti-2025', by: 'Czech Statistical Office, average gross monthly wage of employees, Moravian-Silesian Region, 2025', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Where demand is now', c: ['cz-lfs', 'cz-emp-pra', 'cz-absl'] },
    { k: 'Pay by region', c: ['cz-wage-reg'] },
    { k: 'Graduate labour market', c: ['cz-grad-lab'] },
    { k: 'Language', c: ['cz-lang', 'cz-absl'] },
    { k: 'Recruiting calendar', c: ['cz-cal'] },
    { k: 'Tax and net pay', c: ['cz-pay', 'cz-wage'] }
  ],

  briefs: [
    ['places/gulf-and-central-eastern-europe.md', '§4–5 Czech service centres: junior pay, net pay, Prague and Brno rents'],
    ['countries/cz-czech-republic.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'Ratings are by employment counts and named employers’ own pages, not by graduate vacancies; no graduate programme, intake calendar or entry-pay series for a city was read.',
    'All immigration, visa, permit, work authorization and salary rules are consolidated from primary sources in visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md.',
    'Rents by city were not found: no citable rent source was available on 3 October 2026.',
    'ABSL’s split of business-service jobs by city was not read, so business is rated only “present” in Prague and not rated in Brno or Ostrava.',
    'Whether Czech is needed outside international firms was not researched.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],

  claims: {
    "cz-cal": { t: "Graduate recruitment follows the academic year: Komerční banka recruits for its trainee programme every spring, Red Hat’s Brno internships start on 1 February or 1 July, JetBrains opens internship applications twice a year, and the main university fairs are in March and April (Charles University, CTU) and in April and October (VŠE’s ŠANCE, next on 20–22 October 2026).", tag: "employer-stated", src: "https://sance.vse.cz/english/", by: "Komerční banka trainee page; Red Hat Brno internship listing; JetBrains internships page; VŠE ŠANCE; Charles University Career Centre; CTU Career Days (all read 8 Oct 2026)", seen: "2026-10-08" },
    "cz-lang": { t: "EURES says the overwhelming majority of Czech employers require a knowledge of Czech, and that bilingual contracts are common but the Czech version prevails; in the business-service centres English is the common language of business (ABSL, 2025), and Red Hat’s Brno internship asks for working English.", tag: "data", src: "https://eures.europa.eu/living-and-working/living-and-working-conditions/living-and-working-conditions-czechia_en", by: "EURES, Czechia living and working conditions; ABSL via Expats.cz (29 Apr 2025); Red Hat Brno internship listing", seen: "2026-10-08" },
    'cz-lfs': { t: 'Of 721,200 people with a main job in Prague in Q4 2024, 12.0% worked in information and communication (4.0% nationally), 6.9% in finance and insurance (2.4%) and 10.4% in professional, scientific and technical activities (5.0%).', tag: 'data', src: 'https://csu.gov.cz/docs/107508/103c4614-efb2-bcb5-e482-602b2efa8860/33012325_def.pdf?version=1.0', by: 'Czech Statistical Office, First hand figures Prague 2024 (July 2025)', seen: '2026-10-02' },
    'cz-wage': { t: 'The average gross monthly wage in 2024 was CZK 62,022 in Prague against CZK 48,936 nationally.', tag: 'data', src: 'https://csu.gov.cz/docs/107508/103c4614-efb2-bcb5-e482-602b2efa8860/33012325_def.pdf?version=1.0', by: 'Czech Statistical Office, First hand figures Prague 2024 (July 2025)', seen: '2026-10-02' },
    'cz-gdp': { t: 'Prague’s GDP per person was 191.8% of the EU average in 2024 in purchasing-power terms, among the five highest regions in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260210-2', by: 'Eurostat news, 10 Feb 2026', seen: '2026-10-02' },
    'cz-pay': { t: 'A junior specialist in a Czech service centre earned a mean base of €2,133 a month in 2024, the highest of the four central European countries compared; a single worker keeps 78.1% of gross at the average wage.', tag: 'data', src: 'research/places/gulf-and-central-eastern-europe.md', by: 'ABSL 2025 citing Mercer 2024; Eurostat 2025, via places/gulf-and-central-eastern-europe.md §4–5', seen: '2026-10-02' },
    'cz-brno': { t: 'Eurostat counts 618,660 people in work in the Brno metropolitan region in 2022: 38,390 in information and communication (second in the Czech Republic, after Prague) and 8,780 in finance and insurance (second in the Czech Republic, after Prague). The region’s GDP was €30.3 billion in 2022.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'cz-ostrava': { t: 'Eurostat counts 563,220 people in work in the Ostrava metropolitan region in 2022: 15,240 in information and communication (third in the Czech Republic, after Prague and Brno) and 6,060 in finance and insurance (third in the Czech Republic, after Prague and Brno). The region’s GDP was €24.3 billion in 2022.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'cz-emp-pra': { t: 'Eurostat counts 91,610 people employed in information and communication in the Prague metropolitan region in 2022, 50% of the Czech Republic’s 181,930 and tenth among the 25 European capital regions reported, and 42,050 in finance and insurance, 51% of 82,780 and fourteenth among them, out of 1,591,240 in work.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=CZ001MC&wstatus=EMP&nace_r2=J&nace_r2=K&time=2022', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2022 (ranking among capital metropolitan regions computed from the same table)', seen: '2026-10-03' },
    'cz-ict': { t: 'In 2025 ICT specialists were 4.7% of employment in the Czech Republic (248,200 people), against 5.0% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=CZ&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'cz-wage-reg': { t: 'In 2025 the average gross monthly wage was CZK 62,723 in Prague, CZK 48,467 in the South Moravian Region (Brno) and CZK 44,241 in the Moravian-Silesian Region (Ostrava), against CZK 49,215 for the Czech Republic (preliminary figures).', tag: 'data', src: 'https://csu.gov.cz/pha/prumerna-mzda-v-praze-4-ctvrtleti-2025', by: 'Czech Statistical Office, regional wage releases for Prague, the South Moravian Region and the Moravian-Silesian Region, 4th quarter and year 2025', seen: '2026-10-03' },
    'cz-kb': { t: 'Komerční banka gives its headquarters as Na Příkopě 33, Praha 1.', tag: 'employer-stated', src: 'https://www.kb.cz/en/about-bank/contacts', by: 'Komerční banka, contacts page', seen: '2026-10-03' },
    'cz-cs': { t: 'Česká spořitelna gives its headquarters as Olbrachtova 1929/62, 140 00 Praha 4.', tag: 'employer-stated', src: 'https://www.csas.cz/en/contact', by: 'Česká spořitelna, contact page', seen: '2026-10-03' },
    'cz-moneta': { t: 'MONETA Money Bank gives its registered seat as BB Centrum, Vyskočilova 1442/1b, Praha 4 and a correspondence address at Na Rovince 871, Ostrava-Hrabová.', tag: 'employer-stated', src: 'https://www.moneta.cz/kontakty', by: 'MONETA Money Bank, contacts page (Czech)', seen: '2026-10-03' },
    'cz-rb': { t: 'Raiffeisenbank gives its head office as Hvězdova 1716/2b, 140 78 Praha 4.', tag: 'employer-stated', src: 'https://www.rb.cz/o-nas/kontakty', by: 'Raiffeisenbank, contacts page (Czech)', seen: '2026-10-03' },
    'cz-cnb': { t: 'The Czech National Bank gives its head office as Na Příkopě 864/28, 115 03 Praha 1.', tag: 'employer-stated', src: 'https://www.cnb.cz/en/about-cnb/contacts/', by: 'Czech National Bank, contacts page', seen: '2026-10-03' },
    'cz-gen': { t: 'Gen Digital says its global workforce has dual headquarters in Prague, Czech Republic and Tempe, Arizona, USA.', tag: 'employer-stated', src: 'https://www.gendigital.com/us/en/careers/', by: 'Gen Digital, careers page', seen: '2026-10-03' },
    'cz-jb': { t: 'JetBrains lists its headquarters in Amsterdam and gives JetBrains s.r.o. at Kavčí Hory Office Park, Praha 4 as its sales contact for EMEA and APAC.', tag: 'employer-stated', src: 'https://www.jetbrains.com/company/contacts/', by: 'JetBrains, contacts page', seen: '2026-10-03' },
    'cz-redhat': { t: 'Red Hat lists two offices in Brno (Purkyňova 647/111 and 665/115) and one in Prague (c/o WeWork, Národní 135/14) among its Czech Republic locations.', tag: 'employer-stated', src: 'https://www.redhat.com/en/about/offices', by: 'Red Hat, offices page', seen: '2026-10-03' },
    'cz-kiwi': { t: 'Kiwi.com gives its Brno address (Lazaretní 925/9) as its headquarters, lists a core office in Prague 8 (Rohanské nábřeží 678/25), and says it has more than 400 employees across five core office locations.', tag: 'employer-stated', src: 'https://jobs.kiwi.com/locations', by: 'Kiwi.com jobs site, Locations and About us pages', seen: '2026-10-03' },
    'cz-tieto': { t: 'Tietoevry’s Czech careers page lists an open vacancy located in Ostrava (a Product Owner role at its Tieto Indtech unit) and says the group employs 13,000 specialists worldwide.', tag: 'employer-stated', src: 'https://www.tietoevry.com/cz/kariera/', by: 'Tietoevry, Czechia careers page (Czech)', seen: '2026-10-03' },
    'cz-absl': { t: 'ABSL’s 2025 report, as described in a partner article on Expats.cz (29 April 2025), counts over 400 business-service companies employing nearly 200,000 people in the Czech Republic; about 43% of employees come from outside the country, 72% of centres use robotic process automation and 59% generative AI, and English is the common language of business.', tag: 'practitioner consensus', src: 'https://expats.cz/czech-news/article/why-digital-skills-are-now-crucial-in-getting-ahead-in-czechia-s-job-market-recent-absl-report-on-business-tech-and-it', by: 'Expats.cz partner article with ABSL Czech Republic, 29 Apr 2025', seen: '2026-10-03' },
    'cz-genome': { t: 'Startup Genome’s 2026 report puts the Prague ecosystem’s value at $8 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $391 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/prague', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Prague page', seen: '2026-10-03' },
    'cz-genome-brno': { t: 'Startup Genome’s 2026 report puts the Brno ecosystem’s value at $1 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $57 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/brno', by: 'Startup Genome, Global Startup Ecosystem Report 2026, Brno page', seen: '2026-10-03' },
    'cz-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Prague 102nd of 117 centres and eighth of the 14 in Eastern Europe and Central Asia (Warsaw is 78th, Budapest 107th, Sofia 115th); for fintech Prague is 95th. Brno and Ostrava are not listed.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1, 11 and 16', seen: '2026-10-03' },
    'cz-grad-lab': { t: 'In 2025, 86.1% of Czech tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 10.4% (EU 15.2%, Czechia 8.3% in 2023) and 36.0% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=CZ&geo=EU27_2020', by: 'Eurostat, edat_lfse_24, une_rt_a and edat_lfse_03, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  "Graduate recruitment follows the academic year: Komerční banka recruits for its trainee programme every spring, Red Hat’s Brno internships start on 1 February or 1 July, JetBrains opens internship applications twice a year, and the main university fairs are in March and April (Charles University, CTU) and in April and October (VŠE’s ŠANCE, next on 20–22 October 2026).":
    "Il reclutamento dei neolaureati segue l’anno accademico: Komerční banka recluta per il suo programma trainee ogni primavera, i tirocini di Red Hat a Brno iniziano il 1° febbraio o il 1° luglio, JetBrains apre le candidature ai tirocini due volte all’anno, e le principali fiere universitarie sono a marzo e aprile (Charles University, CTU) e ad aprile e ottobre (la ŠANCE della VŠE, la prossima il 20–22 ottobre 2026).",
  "EURES says the overwhelming majority of Czech employers require a knowledge of Czech, and that bilingual contracts are common but the Czech version prevails; in the business-service centres English is the common language of business (ABSL, 2025), and Red Hat’s Brno internship asks for working English.":
    "EURES dice che la stragrande maggioranza dei datori di lavoro cechi richiede la conoscenza del ceco, e che i contratti bilingui sono comuni ma prevale la versione ceca; nei centri di servizi alle imprese l’inglese è la lingua comune degli affari (ABSL, 2025), e il tirocinio Red Hat a Brno chiede un inglese operativo.",
  'Information and communication': 'Informazione e comunicazione', 'Finance and insurance': 'Finanza e assicurazioni',
  'Business-service centres': 'Centri di servizi alle imprese', 'Automotive and engineering': 'Automotive e ingegneria', 'Tourism': 'Turismo',
  'ICT, finance and professional services for the whole country': 'ICT, finanza e servizi professionali per tutto il paese',
  'Professional services': 'Servizi professionali', 'Business services': 'Servizi alle imprese',
  'Information and communication firms': 'Le aziende dell’informazione e comunicazione', '12.0% of Prague jobs, against 4.0% nationally': 'il 12,0% dei posti a Praga, contro il 4,0% nazionale',
  '§4–5 Czech service centres: junior pay, net pay, Prague and Brno rents': '§4–5 Centri servizi cechi: stipendi junior, netto, affitti a Praga e Brno',
  'Whether Czech is needed outside international firms was not researched.': 'Non è stato ricercato se il ceco serva fuori dalle aziende internazionali.',
  'Of 721,200 people with a main job in Prague in Q4 2024, 12.0% worked in information and communication (4.0% nationally), 6.9% in finance and insurance (2.4%) and 10.4% in professional, scientific and technical activities (5.0%).':
    'Delle 721.200 persone con un lavoro principale a Praga nel 4° trimestre 2024, il 12,0% lavorava nell’informazione e comunicazione (4,0% a livello nazionale), il 6,9% in finanza e assicurazioni (2,4%) e il 10,4% in attività professionali, scientifiche e tecniche (5,0%).',
  'The average gross monthly wage in 2024 was CZK 62,022 in Prague against CZK 48,936 nationally.':
    'Nel 2024 lo stipendio lordo mensile medio era di 62.022 CZK a Praga contro 48.936 CZK a livello nazionale.',
  'Prague’s GDP per person was 191.8% of the EU average in 2024 in purchasing-power terms, among the five highest regions in the EU.':
    'Nel 2024 il PIL pro capite di Praga era il 191,8% della media UE a parità di potere d’acquisto, tra le cinque regioni più alte dell’UE.',
  'A junior specialist in a Czech service centre earned a mean base of €2,133 a month in 2024, the highest of the four central European countries compared; a single worker keeps 78.1% of gross at the average wage.':
    'Nel 2024 uno specialista junior in un centro servizi ceco guadagnava una base media di 2.133 € al mese, la più alta dei quattro paesi dell’Europa centrale confrontati; con il salario medio un lavoratore single tiene il 78,1% del lordo.',
  'The Czech Republic’s second city for finance and information-and-communication jobs':
    'La seconda città ceca per posti in finanza e in informazione e comunicazione',
  'Business services centres':
    'Centri di servizi alle imprese',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '38,390 jobs (2022)':
    '38.390 posti (2022)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '8,780 jobs (2022)':
    '8.780 posti (2022)',
  'Moravia-Silesia’s industrial centre, third in the country for finance and tech jobs':
    'Il centro industriale della Moravia-Slesia, terzo nel paese per posti in finanza e tecnologia',
  'Steel and metals':
    'Siderurgia e metalli',
  '15,240 jobs (2022)':
    '15.240 posti (2022)',
  '6,060 jobs (2022)':
    '6.060 posti (2022)',
  'Eurostat counts 618,660 people in work in the Brno metropolitan region in 2022: 38,390 in information and communication (second in the Czech Republic, after Prague) and 8,780 in finance and insurance (second in the Czech Republic, after Prague). The region’s GDP was €30.3 billion in 2022.':
    'Eurostat conta 618.660 occupati nella regione metropolitana di Brno nel 2022: 38.390 nell’informazione e comunicazione (seconda nella Repubblica Ceca, dopo Praga) e 8.780 in finanza e assicurazioni (seconda nella Repubblica Ceca, dopo Praga). Il PIL della regione era di 30,3 miliardi di € nel 2022.',
  'Eurostat counts 563,220 people in work in the Ostrava metropolitan region in 2022: 15,240 in information and communication (third in the Czech Republic, after Prague and Brno) and 6,060 in finance and insurance (third in the Czech Republic, after Prague and Brno). The region’s GDP was €24.3 billion in 2022.':
    'Eurostat conta 563.220 occupati nella regione metropolitana di Ostrava nel 2022: 15.240 nell’informazione e comunicazione (terza nella Repubblica Ceca, dopo Praga e Brno) e 6.060 in finanza e assicurazioni (terza nella Repubblica Ceca, dopo Praga e Brno). Il PIL della regione era di 24,3 miliardi di € nel 2022.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo dai conteggi Eurostat 2021–22 sull’occupazione metropolitana: forte significa seconda o terza regione del paese per posti in finanza e assicurazioni, o in informazione e comunicazione, con almeno 5.000 posti di quel tipo.',
  'Prague is one of the richest regions in the EU and the country’s office economy: half of the Czech jobs in information and communication and in finance, with Brno a distant second in both. Service-centre pay is the highest in central Europe. Non-EU students work without a permit, and graduates get nine months to find a job.':
    'Praga è una delle regioni più ricche dell’UE e l’economia degli uffici del paese: metà dei posti cechi nell’informazione e comunicazione e nella finanza, con Brno a grande distanza al secondo posto in entrambe. Gli stipendi dei centri servizi sono i più alti dell’Europa centrale. Gli studenti extra-UE lavorano senza permesso, e i laureati hanno nove mesi per trovare lavoro.',
  'Eurostat counts 91,610 people employed in information and communication in the Prague metropolitan region in 2022, 50% of the Czech Republic’s 181,930 and tenth among the 25 European capital regions reported, and 42,050 in finance and insurance, 51% of 82,780 and fourteenth among them, out of 1,591,240 in work.':
    'Eurostat conta 91.610 occupati nell’informazione e comunicazione nella regione metropolitana di Praga nel 2022, il 50% dei 181.930 della Repubblica Ceca e la decima tra le 25 regioni delle capitali europee rilevate, e 42.050 in finanza e assicurazioni, il 51% di 82.780 e la quattordicesima tra queste, su 1.591.240 occupati.',
  'In 2025 ICT specialists were 4.7% of employment in the Czech Republic (248,200 people), against 5.0% in the EU.':
    'Nel 2025 gli specialisti ICT erano il 4,7% dell’occupazione nella Repubblica Ceca (248.200 persone), contro il 5,0% nell’UE.',
  'In 2025 the average gross monthly wage was CZK 62,723 in Prague, CZK 48,467 in the South Moravian Region (Brno) and CZK 44,241 in the Moravian-Silesian Region (Ostrava), against CZK 49,215 for the Czech Republic (preliminary figures).':
    'Nel 2025 la retribuzione lorda mensile media era di 62.723 CZK a Praga, 48.467 CZK nella regione della Moravia meridionale (Brno) e 44.241 CZK nella regione Moravia-Slesia (Ostrava), contro 49.215 CZK per la Repubblica Ceca (dati provvisori).',
  'Komerční banka gives its headquarters as Na Příkopě 33, Praha 1.':
    'Komerční banka indica come sede centrale Na Příkopě 33, Praha 1.',
  'Česká spořitelna gives its headquarters as Olbrachtova 1929/62, 140 00 Praha 4.':
    'Česká spořitelna indica come sede centrale Olbrachtova 1929/62, 140 00 Praha 4.',
  'MONETA Money Bank gives its registered seat as BB Centrum, Vyskočilova 1442/1b, Praha 4 and a correspondence address at Na Rovince 871, Ostrava-Hrabová.':
    'MONETA Money Bank indica come sede legale BB Centrum, Vyskočilova 1442/1b, Praha 4 e un indirizzo di corrispondenza in Na Rovince 871, Ostrava-Hrabová.',
  'Raiffeisenbank gives its head office as Hvězdova 1716/2b, 140 78 Praha 4.':
    'Raiffeisenbank indica come sede centrale Hvězdova 1716/2b, 140 78 Praha 4.',
  'The Czech National Bank gives its head office as Na Příkopě 864/28, 115 03 Praha 1.':
    'La Banca nazionale ceca indica come sede centrale Na Příkopě 864/28, 115 03 Praha 1.',
  'Gen Digital says its global workforce has dual headquarters in Prague, Czech Republic and Tempe, Arizona, USA.':
    'Gen Digital afferma che la sua forza lavoro globale ha una doppia sede centrale a Praga, in Repubblica Ceca, e a Tempe, in Arizona, negli Stati Uniti.',
  'JetBrains lists its headquarters in Amsterdam and gives JetBrains s.r.o. at Kavčí Hory Office Park, Praha 4 as its sales contact for EMEA and APAC.':
    'JetBrains indica la sede centrale ad Amsterdam e, come contatto vendite per EMEA e APAC, JetBrains s.r.o. presso Kavčí Hory Office Park, Praha 4.',
  'Red Hat lists two offices in Brno (Purkyňova 647/111 and 665/115) and one in Prague (c/o WeWork, Národní 135/14) among its Czech Republic locations.':
    'Red Hat elenca tra le sue sedi in Repubblica Ceca due uffici a Brno (Purkyňova 647/111 e 665/115) e uno a Praga (c/o WeWork, Národní 135/14).',
  'Kiwi.com gives its Brno address (Lazaretní 925/9) as its headquarters, lists a core office in Prague 8 (Rohanské nábřeží 678/25), and says it has more than 400 employees across five core office locations.':
    'Kiwi.com indica come sede centrale l’indirizzo di Brno (Lazaretní 925/9), elenca un ufficio principale a Praga 8 (Rohanské nábřeží 678/25) e dichiara più di 400 dipendenti in cinque sedi principali.',
  'Tietoevry’s Czech careers page lists an open vacancy located in Ostrava (a Product Owner role at its Tieto Indtech unit) and says the group employs 13,000 specialists worldwide.':
    'La pagina carriere ceca di Tietoevry elenca una posizione aperta a Ostrava (un ruolo di Product Owner nell’unità Tieto Indtech) e dichiara che il gruppo impiega 13.000 specialisti nel mondo.',
  'ABSL’s 2025 report, as described in a partner article on Expats.cz (29 April 2025), counts over 400 business-service companies employing nearly 200,000 people in the Czech Republic; about 43% of employees come from outside the country, 72% of centres use robotic process automation and 59% generative AI, and English is the common language of business.':
    'Il rapporto ABSL 2025, descritto in un articolo sponsorizzato su Expats.cz (29 aprile 2025), conta oltre 400 aziende di servizi alle imprese con quasi 200.000 addetti nella Repubblica Ceca; circa il 43% dei dipendenti viene da fuori del paese, il 72% dei centri usa l’automazione robotica dei processi e il 59% l’IA generativa, e l’inglese è la lingua comune di lavoro.',
  'Startup Genome’s 2026 report puts the Prague ecosystem’s value at $8 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $391 million.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Praga in 8 miliardi di dollari, contro una media europea di 14,3 miliardi; i finanziamenti early-stage nel periodo H2 2023–2025 sono stati di 391 milioni.',
  'Startup Genome’s 2026 report puts the Brno ecosystem’s value at $1 billion, against a European average of $14.3 billion; early-stage funding in H2 2023–2025 was $57 million.':
    'Il rapporto 2026 di Startup Genome stima il valore dell’ecosistema di Brno in 1 miliardo di dollari, contro una media europea di 14,3 miliardi; i finanziamenti early-stage nel periodo H2 2023–2025 sono stati di 57 milioni.',
  'The Global Financial Centres Index 40 (September 2026) ranks Prague 102nd of 117 centres and eighth of the 14 in Eastern Europe and Central Asia (Warsaw is 78th, Budapest 107th, Sofia 115th); for fintech Prague is 95th. Brno and Ostrava are not listed.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Praga al 102º posto su 117 centri e all’ottavo tra i 14 dell’Europa orientale e dell’Asia centrale (Varsavia è 78ª, Budapest 107ª, Sofia 115ª); per il fintech Praga è al 95º posto. Brno e Ostrava non sono elencate.',
  'In 2025, 86.1% of Czech tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), unemployment among 15-to-24-year-olds was 10.4% (EU 15.2%, Czechia 8.3% in 2023) and 36.0% of 25-to-34-year-olds had a tertiary degree (EU 44.8%).':
    'Nel 2025 l’86,1% dei laureati cechi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), la disoccupazione tra i 15-24enni era del 10,4% (UE 15,2%, Cechia 8,3% nel 2023) e il 36,0% dei 25-34enni aveva una laurea (UE 44,8%).',
  'Ratings are by employment counts and named employers’ own pages, not by graduate vacancies; no graduate programme, intake calendar or entry-pay series for a city was read.':
    'Le valutazioni si basano su conteggi di occupati e sulle pagine dei datori di lavoro citati, non sulle offerte per laureati; non sono stati letti programmi per neolaureati, calendari di selezione né serie di stipendi d’ingresso di alcuna città.',
  'All immigration, visa, permit, work authorization and salary rules are consolidated from primary sources in visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md.':
    'Tutte le norme su immigrazione, visti, permessi, autorizzazioni al lavoro e retribuzioni sono consolidate su fonti primarie in visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md.',
  'Rents by city were not found: no citable rent source was available on 3 October 2026.':
    'Gli affitti per città non sono stati trovati: il 3 ottobre 2026 non era disponibile una fonte citabile.',
  'ABSL’s split of business-service jobs by city was not read, so business is rated only “present” in Prague and not rated in Brno or Ostrava.':
    'La ripartizione per città dei posti nei servizi alle imprese dell’ABSL non è stata letta, quindi il business è valutato solo “presente” a Praga e non è valutato a Brno e Ostrava.',
  'headquarters on Na Příkopě, Prague 1':
    'sede centrale in Na Příkopě, Praga 1',
  'headquarters in Prague 4':
    'sede centrale a Praga 4',
  'registered seat in Prague 4, correspondence address in Ostrava':
    'sede legale a Praga 4, indirizzo di corrispondenza a Ostrava',
  'the central bank, head office in Prague 1':
    'la banca centrale, sede centrale a Praga 1',
  'dual headquarters in Prague and Tempe, Arizona':
    'doppia sede centrale a Praga e a Tempe, in Arizona',
  'sales office for EMEA and APAC in Prague 4; headquarters listed in Amsterdam':
    'ufficio vendite per EMEA e APAC a Praga 4; sede centrale indicata ad Amsterdam',
  'headquarters in Brno, a core office in Prague':
    'sede centrale a Brno, un ufficio principale a Praga',
  'two offices in Brno and one in Prague':
    'due uffici a Brno e uno a Praga',
  'an open vacancy in Ostrava on its Czech careers page':
    'una posizione aperta a Ostrava sulla sua pagina carriere ceca',
  'correspondence address in Ostrava-Hrabová':
    'indirizzo di corrispondenza a Ostrava-Hrabová',
  'Pay by region':
    'Stipendi per regione',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Software':
    'Software'
});

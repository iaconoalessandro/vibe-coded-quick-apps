/* Atlas record: Norway. Read 2 October 2026, deepened 3 October 2026; log P50
 * (research/verification/round-4d.md, round-4k.md, round-5c.md). UDI's site refused automated reads
 * (web application firewall), which was not bypassed, so the job-seeker permit
 * for graduates is listed as a gap; the residence rule is read in the
 * Immigration Act on Lovdata instead. Oslo's finance, IT and software ratings are "dominant" on
 * Eurostat's metropolitan employment (46% and 45% of national jobs, 2021); pay is by city from
 * Statistics Norway. Brief: research/countries/no-norway.md. */

ATLAS.add({
  id: 'NO',
  checked: '2026-10-03',
  log: 'P50',
  summary: 'The strongest graduate job market in the comparison, with low graduate unemployment and the highest pay in the Nordics, but mostly in Norwegian. Oslo holds about 46% of finance jobs and 45% of information-and-communication jobs, the banks and the government pension fund; Stavanger is the oil and gas capital around Equinor. Norway is in the EEA, not the EU, and EU citizens move freely.',
  sectors: [
    'Oil, gas and energy',
    'Banking and finance',
    'Shipping and seafood',
    'Public sector',
    'Technology'
  ],
  roles: ['finance', 'it', 'software'],
  hubs: [
    {
      id: 'oslo',
      name: 'Oslo',
      lat: 59.91,
      lon: 10.75,
      knownFor: 'Banks, the financial sector and head offices',
      why: ['no-ssb', 'no-emp-osl', 'no-nbim', 'no-gfci', 'no-genome'],
      sectors: ['Banking and finance', 'Technology', 'Professional services', 'Public sector'],
      employers: [
        { name: 'DNB trainee programme', note: 'recruits in the autumn', c: 'no-dnb' },
        { name: 'Nordea Graduate Programme', note: 'Denmark, Finland, Norway and Sweden', c: 'no-nordea' },
        { name: 'Norges Bank Investment Management', note: 'manages the government pension fund; head office in Oslo, 676 people', c: 'no-nbim' },
        { name: 'Equinor', note: 'about 1,600 people in Oslo', c: 'no-equinor' }
      ],
      demand: { finance: ['dominant', 'no-emp-osl', 'no-ssb', 'no-dnb', 'no-nbim'], business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: ['dominant', 'no-emp-osl'], software: ['dominant', 'no-emp-osl'], datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      finance: { banking: ['strong', 'no-emp-osl', 'no-dnb', 'no-nordea'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'finance', s: [5, 2, 1], c: ['no-emp-osl', 'no-ssb', 'no-gfci'] },
        { f: 'it', s: [5, 2, 1], c: ['no-emp-osl', 'no-genome', 'no-ict'] },
        { f: 'software', s: [5, 2, 1], c: ['no-emp-osl', 'no-genome', 'no-ict'] }
      ],
      metrics: {
        pop: { v: 709037, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=NO001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 70.97, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=NO001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 70690, cur: 'NOK', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://data.ssb.no/api/v0/en/table/12852', by: 'Statistics Norway, table 12852 average monthly earnings by place of work, all employees, Oslo', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'stavanger',
      name: 'Stavanger',
      lat: 58.97,
      lon: 5.73,
      knownFor: 'Oil, gas and Equinor’s head office',
      why: ['no-equinor', 'no-emp-sta', 'no-wage-city'],
      sectors: ['Oil and gas', 'Energy', 'Offshore engineering'],
      employers: [
        { name: 'Equinor', note: 'head office, about 4,500 staff at the site', c: 'no-equinor' },
        { t: 'Information and communication employers', note: '8,000 jobs (2021), joint second in Norway', c: 'no-emp-sta' }
      ],
      demand: { business: ['present', 'no-equinor'], finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'business', s: [3, 1, 1], c: ['no-equinor', 'no-emp-sta'] },
        { f: 'it', s: [3, 1, 1], c: ['no-emp-sta', 'no-emp-osl'] }
      ],
      metrics: {
        pop: { v: 492350, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=NO004M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 31.58, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=NO004M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 69670, cur: 'NOK', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://data.ssb.no/api/v0/en/table/12852', by: 'Statistics Norway, table 12852 average monthly earnings by place of work, all employees, Stavanger', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'bergen',
      name: 'Bergen',
      lat: 60.39,
      lon: 5.32,
      knownFor: 'Norway’s second city for finance jobs, on the west coast',
      why: ['no-bergen', 'no-nhh', 'no-nhh-facts', 'no-equinor'],
      sectors: ['Shipping', 'Energy', 'Agriculture and food'],
      employers: [
        { t: 'Information and communication employers', note: '8,000 jobs (2021)', c: 'no-bergen' },
        { t: 'Finance and insurance employers', note: '6,000 jobs (2021)', c: 'no-bergen' },
        { name: 'NHH Norwegian School of Economics', note: 'business school with about 3,700 students; 2024 master’s median gross NOK 580,000', c: 'no-nhh-facts' },
        { name: 'Equinor', note: 'about 3,000 people in Bergen', c: 'no-equinor' }
      ],
      demand: { it: ['strong', 'no-bergen'], finance: ['strong', 'no-bergen'], business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [4, 1, 1], c: ['no-bergen', 'no-emp-osl'] },
        { f: 'finance', s: [4, 1, 1], c: ['no-bergen', 'no-nhh'] }
      ],
      metrics: {
        pop: { v: 646205, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=NO002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 36.52, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=NO002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 64170, cur: 'NOK', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://data.ssb.no/api/v0/en/table/12852', by: 'Statistics Norway, table 12852 average monthly earnings by place of work, all employees, Bergen', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'trondheim',
      name: 'Trondheim',
      lat: 63.43,
      lon: 10.4,
      knownFor: 'Home of the Norwegian University of Science and Technology',
      why: ['no-trondheim', 'no-ntnu'],
      sectors: ['Higher education', 'Technology', 'Energy'],
      employers: [
        { t: 'Information and communication employers', note: '7,000 jobs (2021)', c: 'no-trondheim' },
        { t: 'Finance and insurance employers', note: '4,000 jobs (2021)', c: 'no-trondheim' },
        { name: 'NTNU', note: '43,500 students and 8,560 employees', c: 'no-ntnu' }
      ],
      demand: { business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['no-trondheim', 'no-emp-osl'] }
      ],
      metrics: {
        pop: { v: 478470, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=NO003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 26.14, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=NO003M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 62760, cur: 'NOK', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://data.ssb.no/api/v0/en/table/12852', by: 'Statistics Norway, table 12852 average monthly earnings by place of work, all employees, Trondheim', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['no-emp-osl', 'no-emp-sta', 'no-equinor', 'no-nbim'] },
    { k: 'Recruiting calendar', c: ['no-cal-nbim', 'no-dnb', 'no-nordea'] },
    { k: 'Language', c: ['no-lang', 'no-cal-nbim'] },
    { k: 'Graduate labour market', c: ['no-eurostat', 'no-youth', 'no-ict', 'no-nhh', 'no-stay'] },
    { k: 'Entry pay', c: ['no-nhh', 'no-wage-city'] }
  ],
  briefs: [
    ['places/iberia-and-nordics.md', 'Norway: graduate employment, NHH pay, Oslo rents, tax, DNB and Nordea programmes'],
    ['countries/no-norway.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'The job-seeker permit for graduates (12 months) is verified and mapped in visas_immigration/norway/norway_visas_immigration_guide.md.',
    'The skilled-worker pay floor is verified on UDI and mapped in visas_immigration/norway/norway_visas_immigration_guide.md.',
    'Oslo’s share of financial output is an older statistic (2015 data, published 2017); Eurostat’s employment shares (46% of finance jobs) are for 2021.',
    'No source says which Norwegian employers recruit in English; graduate programme calendars were read only for DNB (autumn) and Nordea.',
    'Equinor’s own graduate pages gave no terms; a search result gave a 2026 application window (7 to 27 August) that was not confirmed on a primary page, so it is not used.',
    'No university ranking was confirmed for Norwegian institutions: search results for the QS 2027 positions conflicted, so none is cited.',
    'AI, data science, analytics, marketing, accounting and management are not rated in any hub: no source read measures them by city.',
    'No family is rated in Trondheim: Eurostat does not put it second or third in the country for ICT or finance jobs, and the record rates only what a statistic supports.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],
  claims: {
    'no-eurostat': { t: '91.8% of recent tertiary graduates in Norway were in work in 2025, and unemployment among graduates was 3.4%, the lowest in the comparison.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Eurostat, via places/iberia-and-nordics.md §1', seen: '2026-10-02' },
    'no-nhh': { t: 'NHH’s 2024 master’s class reported a median gross salary of NOK 580,000 six months after graduating, for those working in Norway (52% responded).', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'NHH graduate survey (2025), via places/iberia-and-nordics.md §3', seen: '2026-10-02' },
    'no-stay': { t: '62% of students from outside the EU and EEA who completed a Norwegian degree were still resident the year after, and 86% of those still in Norway were employed.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Statistics Norway, via places/iberia-and-nordics.md §2', seen: '2026-10-02' },
    'no-ssb': { t: 'About half of Norway’s gross product in financial services was generated in Oslo, and finance, real estate, ICT and technical services made up 38% of Oslo’s output (2015 data).', tag: 'data', src: 'https://www.ssb.no/nasjonalregnskap-og-konjunkturer/artikler-og-publikasjoner/oslo-har-hoyest-bruttoprodukt-per-sysselsatt', by: 'Statistics Norway (10 Oct 2017)', seen: '2026-10-02' },
    'no-dnb': { t: 'DNB, Norway’s largest bank, runs a trainee programme in Oslo that recruits in the autumn.', tag: 'employer-stated', src: 'research/places/iberia-and-nordics.md', by: 'DNB careers (search summary), via places/iberia-and-nordics.md §6', seen: '2026-10-02' },
    'no-nordea': { t: 'Nordea’s 1.5-year Graduate Programme starts in September in Denmark, Finland, Norway and Sweden; the 2026 applications ran from 9 to 28 February.', tag: 'employer-stated', src: 'https://www.nordea.com/en/careers/nordea-graduate-programme', by: 'Nordea careers', seen: '2026-10-02' },
    'no-equinor': { t: 'Equinor has its head office at Forus in Stavanger, where about 4,500 people work; Bergen has about 3,000 and Oslo about 1,600.', tag: 'employer-stated', src: 'https://www.equinor.com/where-we-are/norway-how-to-find-us', by: 'Equinor, Norway: how to find us', seen: '2026-10-02' },
    'no-bergen': { t: 'Eurostat counts 334,000 people in work in the Bergen metropolitan region in 2021: 8,000 in information and communication (joint second in Norway, after Oslo) and 6,000 in finance and insurance (second in Norway, after Oslo). The region’s GDP was €36.5 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'no-trondheim': { t: 'Eurostat counts 245,000 people in work in the Trondheim metropolitan region in 2021: 7,000 in information and communication and 4,000 in finance and insurance. The region’s GDP was €26.1 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'no-emp-osl': { t: 'Eurostat counts 496,000 people in work in the Oslo metropolitan region in 2021, 47,000 of them in information and communication (45% of Norway’s 105,000) and 22,000 in finance and insurance (46% of 48,000).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=NO001MC&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (Oslo NO001MC)', seen: '2026-10-03' },
    'no-emp-sta': { t: 'Eurostat counts 265,000 people in work in the Stavanger metropolitan region in 2021, 8,000 of them in information and communication (8% of Norway’s 105,000) and 2,000 in finance and insurance (4% of 48,000).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=NO004M&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (Stavanger NO004M)', seen: '2026-10-03' },
    'no-nbim': { t: 'Norges Bank Investment Management, which runs the government pension fund, has its head office at Bankplassen 2 in Oslo and says it has 676 people from 37 countries, with investment offices in London, New York and Singapore.', tag: 'employer-stated', src: 'https://www.nbim.no/en/about-us/', by: 'Norges Bank Investment Management, about us', seen: '2026-10-03' },
    'no-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Oslo 48th of 117 centres, up 16 places and sixteenth among European centres, and 33rd for fintech; Bergen, Stavanger and Trondheim are not ranked.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1 and 16', seen: '2026-10-03' },
    'no-genome': { t: 'Startup Genome’s Oslo ecosystem page shows an ecosystem value of $12 billion against a regional average of $14.3 billion, $418 million of seed and Series A funding in 2023–2025 and $2 billion of exits in 2021–2025.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/oslo', by: 'Startup Genome, Oslo ecosystem page (GSER 2026 data)', seen: '2026-10-03' },
    'no-ict': { t: 'In 2025 ICT specialists were 5.9% of employment in Norway, against 5.0% in the EU, ninth highest of the 33 European countries Eurostat lists; Sweden led with 8.9%.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=NO&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'no-youth': { t: 'In 2025 unemployment among Norwegians aged 15 to 24 was 14.0% (EU 15.2%), up from 11.0% in 2023.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/une_rt_a?format=JSON&lang=EN&age=Y15-24&unit=PC_ACT&sex=T&geo=NO&geo=EU27_2020', by: 'Eurostat, une_rt_a, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' },
    'no-wage-city': { t: 'In 2025 average monthly earnings of all employees, by place of work, were NOK 62,070 in Norway, NOK 70,690 in Oslo, NOK 69,670 in Stavanger, NOK 64,170 in Bergen and NOK 62,760 in Trondheim.', tag: 'data', src: 'https://data.ssb.no/api/v0/en/table/12852', by: 'Statistics Norway, table 12852 monthly earnings by municipality of work, all employees, 2025', seen: '2026-10-03' },
    'no-cal-nbim': { t: 'Norges Bank Investment Management’s 12-month graduate programme for 2027 took applications from 1 to 15 August 2026; English is its working language and Norwegian is not required.', tag: 'employer-stated', src: 'https://nbim.no/en/about-us/career/graduate-programme', by: 'NBIM, graduate programme page', seen: '2026-10-08' },
    'no-lang': { t: 'Many Norwegians speak English, but Norwegian is often required for permanent roles and career advancement; technology, oil and gas may prefer an English CV, and CVs follow the language of the posting.', tag: 'practitioner consensus', src: 'https://www.expat.com/en/guide/europe/norway/857-find-a-job-in-norway.html', by: 'Expat.com, finding a job in Norway', seen: '2026-10-08' },
    'no-nhh-facts': { t: 'NHH Norwegian School of Economics in Bergen has about 3,700 students and around 470 employees, holds the Triple Crown of accreditations (AACSB, EQUIS, AMBA) and has been in the Financial Times rankings since 2005.', tag: 'employer-stated', src: 'https://www.nhh.no/en/about-nhh/facts-and-figures/', by: 'NHH, facts and figures', seen: '2026-10-03' },
    'no-ntnu': { t: 'NTNU, with its headquarters in Trondheim, has 43,500 students (9% international) and 8,560 employees.', tag: 'employer-stated', src: 'https://www.ntnu.edu/about', by: 'NTNU, about NTNU', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Norges Bank Investment Management’s 12-month graduate programme for 2027 took applications from 1 to 15 August 2026; English is its working language and Norwegian is not required.':
    'Il programma per laureati di 12 mesi di Norges Bank Investment Management per il 2027 ha raccolto candidature dal 1º al 15 agosto 2026; la lingua di lavoro è l’inglese e il norvegese non è richiesto.',
  'Many Norwegians speak English, but Norwegian is often required for permanent roles and career advancement; technology, oil and gas may prefer an English CV, and CVs follow the language of the posting.':
    'Molti norvegesi parlano inglese, ma il norvegese è spesso richiesto per i ruoli permanenti e per la carriera; tecnologia, petrolio e gas possono preferire un CV in inglese, e i CV seguono la lingua dell’annuncio.',
  'The strongest graduate job market in the comparison, with low graduate unemployment and the highest pay in the Nordics, but mostly in Norwegian. Oslo holds about 46% of finance jobs and 45% of information-and-communication jobs, the banks and the government pension fund; Stavanger is the oil and gas capital around Equinor. Norway is in the EEA, not the EU, and EU citizens move freely.':
    'Il mercato del lavoro per laureati più forte del confronto, con bassa disoccupazione tra i laureati e le retribuzioni più alte dei paesi nordici, ma per lo più in norvegese. Oslo ha circa il 46% dei posti nella finanza e il 45% di quelli nell’informazione e comunicazione, le banche e il fondo pensione statale; Stavanger è la capitale del petrolio e del gas attorno a Equinor. La Norvegia è nel SEE, non nell’UE, e i cittadini UE si muovono liberamente.',
  'Oil, gas and energy':
    'Petrolio, gas ed energia',
  'Banking and finance':
    'Banche e finanza',
  'Shipping and seafood':
    'Trasporto marittimo e prodotti ittici',
  'The job-seeker permit for graduates (12 months) is verified and mapped in visas_immigration/norway/norway_visas_immigration_guide.md.':
    'Il permesso di ricerca lavoro per laureati (12 mesi) è verificato e descritto in visas_immigration/norway/norway_visas_immigration_guide.md.',
  'The skilled-worker pay floor is verified on UDI and mapped in visas_immigration/norway/norway_visas_immigration_guide.md.':
    'La soglia salariale per lavoratori qualificati è verificata su UDI e descritta in visas_immigration/norway/norway_visas_immigration_guide.md.',
  'Oslo’s share of financial output is an older statistic (2015 data, published 2017); Eurostat’s employment shares (46% of finance jobs) are for 2021.':
    'La quota di Oslo nella produzione finanziaria è una statistica più vecchia (dati 2015, pubblicati nel 2017); le quote di occupazione di Eurostat (46% dei posti nella finanza) sono del 2021.',
  'No source says which Norwegian employers recruit in English; graduate programme calendars were read only for DNB (autumn) and Nordea.':
    'Nessuna fonte indica quali datori di lavoro norvegesi selezionano in inglese; i calendari dei programmi per laureati sono stati letti solo per DNB (autunno) e Nordea.',
  'Equinor’s own graduate pages gave no terms; a search result gave a 2026 application window (7 to 27 August) that was not confirmed on a primary page, so it is not used.':
    'Le pagine di Equinor sui programmi per laureati non fornivano condizioni; un risultato di ricerca indicava una finestra di candidatura 2026 (dal 7 al 27 agosto) non confermata su una pagina primaria, quindi non è usata.',
  'No university ranking was confirmed for Norwegian institutions: search results for the QS 2027 positions conflicted, so none is cited.':
    'Nessuna classifica universitaria è stata confermata per gli istituti norvegesi: i risultati di ricerca sulle posizioni QS 2027 erano in conflitto, quindi nessuna è citata.',
  'AI, data science, analytics, marketing, accounting and management are not rated in any hub: no source read measures them by city.':
    'IA, data science, analytics, marketing, contabilità e management non sono valutati in nessun polo: nessuna fonte letta li misura per città.',
  'No family is rated in Trondheim: Eurostat does not put it second or third in the country for ICT or finance jobs, and the record rates only what a statistic supports.':
    'Nessuna famiglia è valutata a Trondheim: Eurostat non la colloca seconda o terza nel paese per posti ICT o finanza, e il record valuta solo ciò che una statistica sostiene.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo in base ai conteggi Eurostat 2021–22 dell’occupazione metropolitana: forte significa secondo o terzo nel paese per posti di lavoro in finanza e assicurazioni, o nell’informazione e comunicazione, con almeno 5.000 posti.',
  'Norway: graduate employment, NHH pay, Oslo rents, tax, DNB and Nordea programmes':
    'Norvegia: occupazione dei laureati, stipendi NHH, affitti a Oslo, tasse, programmi DNB e Nordea',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Banks, the financial sector and head offices':
    'Banche, settore finanziario e sedi centrali',
  'recruits in the autumn':
    'seleziona in autunno',
  'Denmark, Finland, Norway and Sweden':
    'Danimarca, Finlandia, Norvegia e Svezia',
  'manages the government pension fund; head office in Oslo, 676 people':
    'gestisce il fondo pensione statale; sede centrale a Oslo, 676 persone',
  'about 1,600 people in Oslo':
    'circa 1.600 persone a Oslo',
  'Oil, gas and Equinor’s head office':
    'Petrolio, gas e la sede centrale di Equinor',
  'Oil and gas':
    'Petrolio e gas',
  'Offshore engineering':
    'Ingegneria offshore',
  'head office, about 4,500 staff at the site':
    'sede centrale, circa 4.500 dipendenti nella sede',
  '8,000 jobs (2021), joint second in Norway':
    '8.000 posti (2021), a pari merito secondi in Norvegia',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  'Norway’s second city for finance jobs, on the west coast':
    'La seconda città norvegese per posti in finanza, sulla costa occidentale',
  '8,000 jobs (2021)':
    '8.000 posti (2021)',
  '6,000 jobs (2021)':
    '6.000 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'business school with about 3,700 students; 2024 master’s median gross NOK 580,000':
    'business school con circa 3.700 studenti; mediana lorda 2024 dei laureati magistrali 580.000 NOK',
  'about 3,000 people in Bergen':
    'circa 3.000 persone a Bergen',
  'Home of the Norwegian University of Science and Technology':
    'Sede dell’Università norvegese di scienza e tecnologia',
  '7,000 jobs (2021)':
    '7.000 posti (2021)',
  '4,000 jobs (2021)':
    '4.000 posti (2021)',
  '43,500 students and 8,560 employees':
    '43.500 studenti e 8.560 dipendenti',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Entry pay':
    'Stipendio d’ingresso',
  '91.8% of recent tertiary graduates in Norway were in work in 2025, and unemployment among graduates was 3.4%, the lowest in the comparison.':
    'Nel 2025 il 91,8% dei laureati recenti in Norvegia lavorava, e la disoccupazione dei laureati era al 3,4%, la più bassa del confronto.',
  'NHH’s 2024 master’s class reported a median gross salary of NOK 580,000 six months after graduating, for those working in Norway (52% responded).':
    'La classe magistrale 2024 della NHH ha dichiarato uno stipendio lordo mediano di 580.000 NOK sei mesi dopo la laurea, per chi lavora in Norvegia (ha risposto il 52%).',
  '62% of students from outside the EU and EEA who completed a Norwegian degree were still resident the year after, and 86% of those still in Norway were employed.':
    'Il 62% degli studenti extra-UE e SEE che hanno completato una laurea norvegese risiedeva ancora nel paese l’anno dopo, e l’86% di quelli rimasti in Norvegia lavorava.',
  'About half of Norway’s gross product in financial services was generated in Oslo, and finance, real estate, ICT and technical services made up 38% of Oslo’s output (2015 data).':
    'Circa metà del prodotto lordo norvegese dei servizi finanziari era generato a Oslo, e finanza, immobiliare, ICT e servizi tecnici facevano il 38% della produzione di Oslo (dati 2015).',
  'DNB, Norway’s largest bank, runs a trainee programme in Oslo that recruits in the autumn.':
    'DNB, la maggiore banca norvegese, ha un programma trainee a Oslo che seleziona in autunno.',
  'Nordea’s 1.5-year Graduate Programme starts in September in Denmark, Finland, Norway and Sweden; the 2026 applications ran from 9 to 28 February.':
    'Il Graduate Programme di Nordea, di 1,5 anni, parte a settembre in Danimarca, Finlandia, Norvegia e Svezia; le candidature 2026 sono state aperte dal 9 al 28 febbraio.',
  'Equinor has its head office at Forus in Stavanger, where about 4,500 people work; Bergen has about 3,000 and Oslo about 1,600.':
    'Equinor ha la sede centrale a Forus, Stavanger, dove lavorano circa 4.500 persone; Bergen ne ha circa 3.000 e Oslo circa 1.600.',
  'Eurostat counts 334,000 people in work in the Bergen metropolitan region in 2021: 8,000 in information and communication (joint second in Norway, after Oslo) and 6,000 in finance and insurance (second in Norway, after Oslo). The region’s GDP was €36.5 billion in 2021.':
    'Eurostat conta 334.000 occupati nella regione metropolitana di Bergen nel 2021: 8.000 nell’informazione e comunicazione (seconda a pari merito in Norvegia, dopo Oslo) e 6.000 in finanza e assicurazioni (seconda in Norvegia, dopo Oslo). Il PIL della regione era di 36,5 miliardi di € nel 2021.',
  'Eurostat counts 245,000 people in work in the Trondheim metropolitan region in 2021: 7,000 in information and communication and 4,000 in finance and insurance. The region’s GDP was €26.1 billion in 2021.':
    'Eurostat conta 245.000 occupati nella regione metropolitana di Trondheim nel 2021: 7.000 nell’informazione e comunicazione e 4.000 in finanza e assicurazioni. Il PIL della regione era di 26,1 miliardi di € nel 2021.',
  'Eurostat counts 496,000 people in work in the Oslo metropolitan region in 2021, 47,000 of them in information and communication (45% of Norway’s 105,000) and 22,000 in finance and insurance (46% of 48,000).':
    'Eurostat conta 496.000 occupati nella regione metropolitana di Oslo nel 2021, di cui 47.000 nell’informazione e comunicazione (45% dei 105.000 della Norvegia) e 22.000 in finanza e assicurazioni (46% dei 48.000).',
  'Eurostat counts 265,000 people in work in the Stavanger metropolitan region in 2021, 8,000 of them in information and communication (8% of Norway’s 105,000) and 2,000 in finance and insurance (4% of 48,000).':
    'Eurostat conta 265.000 occupati nella regione metropolitana di Stavanger nel 2021, di cui 8.000 nell’informazione e comunicazione (8% dei 105.000 della Norvegia) e 2.000 in finanza e assicurazioni (4% dei 48.000).',
  'Norges Bank Investment Management, which runs the government pension fund, has its head office at Bankplassen 2 in Oslo and says it has 676 people from 37 countries, with investment offices in London, New York and Singapore.':
    'Norges Bank Investment Management, che gestisce il fondo pensione statale, ha la sede centrale in Bankplassen 2 a Oslo e dichiara 676 persone di 37 paesi, con uffici di investimento a Londra, New York e Singapore.',
  'The Global Financial Centres Index 40 (September 2026) ranks Oslo 48th of 117 centres, up 16 places and sixteenth among European centres, and 33rd for fintech; Bergen, Stavanger and Trondheim are not ranked.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Oslo al 48º posto su 117 centri, in salita di 16 posizioni e sedicesimo tra i centri europei, e al 33º per il fintech; Bergen, Stavanger e Trondheim non sono classificate.',
  'Startup Genome’s Oslo ecosystem page shows an ecosystem value of $12 billion against a regional average of $14.3 billion, $418 million of seed and Series A funding in 2023–2025 and $2 billion of exits in 2021–2025.':
    'La pagina di Startup Genome su Oslo mostra un valore dell’ecosistema di 12 miliardi di dollari contro una media regionale di 14,3 miliardi, 418 milioni di dollari di finanziamenti seed e Serie A nel 2023–2025 e 2 miliardi di exit nel 2021–2025.',
  'In 2025 ICT specialists were 5.9% of employment in Norway, against 5.0% in the EU, ninth highest of the 33 European countries Eurostat lists; Sweden led with 8.9%.':
    'Nel 2025 gli specialisti ICT erano il 5,9% dell’occupazione in Norvegia, contro il 5,0% nell’UE, il nono valore più alto dei 33 paesi europei elencati da Eurostat; in testa c’era la Svezia con l’8,9%.',
  'In 2025 unemployment among Norwegians aged 15 to 24 was 14.0% (EU 15.2%), up from 11.0% in 2023.':
    'Nel 2025 la disoccupazione tra i norvegesi di 15–24 anni era del 14,0% (UE 15,2%), in aumento dall’11,0% del 2023.',
  'In 2025 average monthly earnings of all employees, by place of work, were NOK 62,070 in Norway, NOK 70,690 in Oslo, NOK 69,670 in Stavanger, NOK 64,170 in Bergen and NOK 62,760 in Trondheim.':
    'Nel 2025 i guadagni mensili medi di tutti i dipendenti, per luogo di lavoro, erano di 62.070 NOK in Norvegia, 70.690 NOK a Oslo, 69.670 NOK a Stavanger, 64.170 NOK a Bergen e 62.760 NOK a Trondheim.',
  'NHH Norwegian School of Economics in Bergen has about 3,700 students and around 470 employees, holds the Triple Crown of accreditations (AACSB, EQUIS, AMBA) and has been in the Financial Times rankings since 2005.':
    'La Norwegian School of Economics (NHH) di Bergen ha circa 3.700 studenti e circa 470 dipendenti, ha la Triple Crown delle accreditazioni (AACSB, EQUIS, AMBA) ed è nelle classifiche del Financial Times dal 2005.',
  'NTNU, with its headquarters in Trondheim, has 43,500 students (9% international) and 8,560 employees.':
    'L’NTNU, con sede centrale a Trondheim, ha 43.500 studenti (il 9% internazionali) e 8.560 dipendenti.'
});

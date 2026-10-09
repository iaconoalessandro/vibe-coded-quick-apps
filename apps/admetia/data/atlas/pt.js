/* Atlas record: Portugal. Read 2 October 2026; log P47
 * (research/verification/round-4d.md; round 5, 3 October 2026:
 * research/verification/round-5b.md). First hub, Lisbon. AIMA's site failed its
 * certificate check and gov.pt had moved its registration page, so the student
 * work rule is read in Lei 23/2007 on the Lisbon prosecutors' office database
 * and the EU registration step is the library's practitioner reading.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5 added Eurostat metropolitan
 * job counts for Lisbon, hub metrics (Eurostat population and GDP, INE municipal
 * pay), standing, GFCI and start-up rankings and named employers (Global LEI Index). */

ATLAS.add({
  id: 'PT',
  checked: '2026-10-03',
  log: 'P47',
  summary: 'Easy to enter and English-friendly in tech, energy and shared services, but local pay is low (€1,576 a month on average in 2024) against Lisbon rents. Lisbon holds about 60% of Portugal’s information and communication jobs and 58% of its finance and insurance jobs, with Porto a clear second; energy, retail and banking groups run graduate programmes there. The one strong card is tax: IRS Jovem exempts most of a young graduate’s income in the first years.',
  sectors: [
    'Energy and utilities',
    'Shared services and tech hubs',
    'Tourism',
    'Banking',
    'Consulting'
  ],
  roles: ['it', 'finance'],
  hubs: [
    {
      id: 'lisbon', name: 'Lisbon', lat: 38.72, lon: -9.14,
      knownFor: 'Energy head offices, shared services and the leading business school',
      why: ['pt-edp', 'pt-nova', 'pt-lis-emp', 'pt-lis-gfci', 'pt-lis-gser', 'pt-catolica', 'pt-galp-gen', 'pt-jm-trainee', 'pt-rent'],
      sectors: ['Energy', 'Banking', 'Consulting', 'Technology', 'Tourism'],
      employers: [
        { name: 'EDP Global Graduate Program', note: 'Portuguese not required', c: 'pt-edp' },
        { name: 'Generation Galp', note: 'one-year trainee programme for master’s graduates, since 1998', c: 'pt-galp-gen' },
        { name: 'Jerónimo Martins Trainee Programme', note: 'two-year programme; fluent Portuguese and English asked; 11 places from 1,400 applications in 2025', c: 'pt-jm-trainee' },
        { name: 'EDP', note: 'energy group, headquarters on Avenida 24 de Julho', c: 'pt-e-edp' },
        { name: 'Galp', note: 'energy group, headquarters at Alcântara', c: 'pt-e-galp' },
        { name: 'Caixa Geral de Depósitos', note: 'bank, headquarters on Avenida João XXI', c: 'pt-e-cgd' },
        { name: 'Banco de Portugal', note: 'central bank, headquarters on Rua do Comércio', c: 'pt-e-bdp' },
        { name: 'NOS', note: 'telecoms group, headquarters at Campo Grande', c: 'pt-e-nos' },
        { name: 'Jerónimo Martins', note: 'food-retail group, headquarters in Lisbon', c: 'pt-e-jm' },
        { name: 'REN', note: 'grid operator, headquarters at Alvalade', c: 'pt-e-ren' },
        { name: 'OutSystems', note: 'software company, headquarters at Central Park', c: 'pt-e-outsystems' }
      ],
      demand: {
        business: ['strong', 'pt-edp', 'pt-galp-gen', 'pt-jm-trainee', 'pt-e-edp', 'pt-e-galp', 'pt-e-jm'],
        finance: ['dominant', 'pt-lis-emp', 'pt-e-cgd', 'pt-e-bdp'],
        management: ['present', 'pt-jm-trainee', 'pt-galp-gen'],
        it: ['dominant', 'pt-lis-emp', 'pt-lis-gser'],
        software: ['present', 'pt-e-outsystems'],
        economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['present', 'pt-e-cgd']
      },
      standing: [
        { f: 'it', s: [5, 3, 2], c: ['pt-lis-emp', 'pt-lis-gser'] },
        { f: 'finance', s: [5, 2, 2], c: ['pt-lis-emp', 'pt-lis-gfci'] },
        { f: 'business', s: [5, 2, 1], c: ['pt-lis-emp', 'pt-e-edp', 'pt-e-galp', 'pt-e-jm'] }
      ],
      metrics: {
        pop: { v: 2899670, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Lisboa metropolitan region', seen: '2026-10-03' },
        gdp: { v: 87.37, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Lisboa (EUR million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 2121, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.ine.pt/ine/json_indicador/pindica.jsp?op=1&varcd=0012655&lang=EN', by: 'INE Portugal, average monthly gross earnings (ganho médio mensal) of employees by establishment location, 2024 (MTSSS/GEP personnel tables), municipality of Lisboa', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'nova-imm', name: 'Nova SBE — International Master in Management' },
        { calc: 'masters', track: 'mif', id: 'nova-imf', name: 'Nova SBE — International Master in Finance' }
      ]
    },
    {
      id: 'porto', name: 'Porto', lat: 41.15, lon: -8.61,
      knownFor: 'Portugal’s second metropolitan region for finance and tech jobs',
      why: ['pt-porto', 'pt-porto-gser', 'pt-e-bpi', 'pt-e-bcp', 'pt-e-sonae', 'pt-sonae-contacto', 'pt-catolica', 'pt-rent'],
      sectors: ['Technology', 'Manufacturing', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '25,760 jobs (2021)', c: 'pt-porto' },
        { t: 'Finance and insurance employers', note: '11,690 jobs (2021)', c: 'pt-porto' },
        { name: 'Banco BPI', note: 'bank, headquarters on Avenida da Boavista', c: 'pt-e-bpi' },
        { name: 'Millennium bcp', note: 'bank, registered headquarters at Praça D. João I', c: 'pt-e-bcp' },
        { name: 'Sonae Contacto programme', note: 'more than 80 places in 2026; assessment day in Porto and Lisbon', c: 'pt-sonae-contacto' },
        { name: 'Mota-Engil', note: 'construction group, headquarters in Porto', c: 'pt-e-mota' },
        { name: 'Sonae', note: 'retail and investment group, headquarters at Maia', c: 'pt-e-sonae' }
      ],
      demand: {
        it: ['strong', 'pt-porto', 'pt-porto-gser'],
        finance: ['strong', 'pt-porto', 'pt-e-bpi', 'pt-e-bcp'],
        business: ['present', 'pt-e-mota', 'pt-e-sonae', 'pt-sonae-contacto'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['present', 'pt-e-bpi', 'pt-e-bcp']
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['pt-porto', 'pt-porto-gser'] },
        { f: 'finance', s: [4, 2, 1], c: ['pt-porto', 'pt-e-bpi'] }
      ],
      metrics: {
        pop: { v: 1774104, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Porto metropolitan region', seen: '2026-10-03' },
        gdp: { v: 39.18, cur: 'EUR', year: 2022, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Porto (EUR million ÷ 1,000)', seen: '2026-10-03' },
        wage: { v: 1930, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.ine.pt/ine/json_indicador/pindica.jsp?op=1&varcd=0012655&lang=EN', by: 'INE Portugal, average monthly gross earnings (ganho médio mensal) of employees by establishment location, 2024 (MTSSS/GEP personnel tables), municipality of Porto', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Tax and net pay', c: ['pt-jovem'] },
    { k: 'Where demand is now', c: ['pt-lis-emp', 'pt-porto'] },
    { k: 'Pay by city', c: ['pt-wage-lfs', 'pt-pay'] },
    { k: 'Rents', c: ['pt-rent'] },
    { k: 'Graduate labour market', c: ['pt-grad-emp', 'pt-unemp', 'pt-nova', 'pt-catolica'] },
    { k: 'Recruiting calendar', c: ['pt-cal-bpi', 'pt-sonae-contacto', 'pt-cal-nb', 'pt-cal-iefp', 'pt-edp', 'pt-galp-gen', 'pt-jm-trainee'] },
    { k: 'Language', c: ['pt-lang', 'pt-edp', 'pt-jm-trainee'] }
  ],
  briefs: [
    ['countries/pt-portugal.md', 'Country brief: hubs, employers, pay and standing'],
    ['places/iberia-and-nordics.md', 'Portugal: pay and rent, IRS Jovem, IFICI, the 2025 job-seeker visa, EDP and Galp programmes, Nova SBE'],
    ['places/origin-countries-eu.md', 'IFICI and other Portuguese tax regimes']
  ],
  gaps: [
    'Demand is rated from Eurostat’s 2021 metropolitan employment counts (information and communication, finance and insurance) and named headquarters; no source gives demand by role family or graduate pay by city.',
    'No one-bedroom rent is shown: INE publishes rents per square metre of new leases, not per flat, and no citable rent source was available. Pay is the average of all employees at establishments in the municipality, not an entry salary.',
    'Graduate programmes were read for Galp, Jerónimo Martins, Sonae and EDP only; no page was read for the banks, the Big Four, OutSystems or the shared-service centres, and no source gives the number of graduates they hire.',
    'University rankings of Lisbon and Porto could not be read from a primary source: two secondary pages disagree on whether Lisbon or Porto leads in the QS 2027 table, so none is given.',
    'Employer entries rest on the Global LEI Index headquarters address, which is sometimes the registered rather than the operational headquarters (Millennium bcp); headcounts were not read.'
  ],
  claims: {
    'pt-jovem': { t: 'IRS Jovem exempts income for those aged up to 35: 100% in the first year of income, 75% in years 2–4, 50% in 5–7 and 25% in 8–10, capped at €29,542; worth about €7,200 in year one at €45,000.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Portal das Finanças ruling PIV 30125 (30 Apr 2026) and author calculation, via places/iberia-and-nordics.md §4', seen: '2026-10-02' },
    'pt-pay': { t: 'Average gross pay for all Portuguese employees was €1,611 a month in the first quarter of 2026, against a central one-bed rent in Lisbon of about €1,425.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'INE via press report, and Numbeo (Oct 2026), via places/iberia-and-nordics.md §3–4', seen: '2026-10-02' },
    'pt-nova': { t: 'Nova SBE’s master’s in management ranks 2nd in the FT 2026 table, with 100% employed at three months, 93% international students and 10th place for international mobility, so many graduates work outside Portugal.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Financial Times MiM ranking 2026, via places/iberia-and-nordics.md §7', seen: '2026-10-02' },
    'pt-edp': { t: 'EDP’s Global Graduate Program is an 18-month programme of three rotations from September, one of them abroad; Portuguese is not required, and the 2026 applications are closed.', tag: 'employer-stated', src: 'https://www.edp.com/en/careers/job-opportunities/start-your-career/edp-global-graduate-program', by: 'EDP careers', seen: '2026-10-02' },
    'pt-porto': { t: 'Eurostat counts 829,750 people in work in the Porto metropolitan region in 2021: 25,760 in information and communication (second in Portugal, after Lisbon) and 11,690 in finance and insurance (second in Portugal, after Lisbon). The region’s GDP was €39.2 billion in 2022.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'pt-lis-emp': { t: 'Eurostat counts 1,474,000 people in work in the Lisbon metropolitan region in 2021: 79,860 in information and communication (60% of Portugal’s 133,230 and 12th of 152 European metropolitan regions) and 47,950 in finance and insurance (58% of Portugal’s 82,360 and 14th). The region’s GDP was €87.4 billion in 2022, 36% of Portugal’s €242.3 billion.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'pt-lis-gfci': { t: 'In the Global Financial Centres Index 40 (September 2026) Lisbon ranks 61st in the world, up 14 places, and is outside the Western European top 15.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'pt-lis-gser': { t: 'Startup Genome’s GSER 2026 puts Lisbon’s Ecosystem Value at $35 billion, above the global average of $25 billion, with $316 million of early-stage funding between the second half of 2023 and 2025 against a global average of $554 million.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/lisbon', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'pt-porto-gser': { t: 'Startup Genome’s GSER 2026 ranks Porto in the 51st–60th range of emerging start-up ecosystems, in the top ten in Europe for funding runway and the top 20 for its AI-native cluster.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/porto', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'pt-unemp': { t: 'Portugal’s seasonally adjusted unemployment rate was 5.7% in August 2026, and 19.8% for under-25s, against 6.1% and 15.4% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', by: 'Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026', seen: '2026-10-03' },
    'pt-grad-emp': { t: 'In 2025, 83.9% of Portuguese tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=en', by: 'Eurostat, Employment rates of young people not in education and training (edat_lfse_24), 2025', seen: '2026-10-03' },
    'pt-wage-lfs': { t: 'Average monthly gross earnings (ganho) of employees in Portugal were €1,576 in 2024, against €2,121 for establishments in the municipality of Lisbon and €1,930 in Porto.', tag: 'data', src: 'https://www.ine.pt/ine/json_indicador/pindica.jsp?op=1&varcd=0012655&lang=EN', by: 'INE Portugal, Average monthly earnings by NUTS and occupation (indicator 0012655; MTSSS/GEP Personnel tables), 2024', seen: '2026-10-03' },
    'pt-e-edp': { t: 'EDP, the energy group, has its headquarters at Avenida 24 de Julho 12, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/529900CLC3WDMGI9VH80', by: 'GLEIF, Global LEI Index record for EDP, S.A. (LEI 529900CLC3WDMGI9VH80)', seen: '2026-10-03' },
    'pt-e-galp': { t: 'Galp, the energy group, has its headquarters at Avenida da Índia 8, Alcântara, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/2138003319Y7NM75FG53', by: 'GLEIF, Global LEI Index record for Galp Energia, SGPS, S.A. (LEI 2138003319Y7NM75FG53)', seen: '2026-10-03' },
    'pt-e-cgd': { t: 'Caixa Geral de Depósitos has its headquarters at Avenida João XXI 63, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/TO822O0VT80V06K0FH57', by: 'GLEIF, Global LEI Index record for CAIXA GERAL DE DEPÓSITOS S.A. (LEI TO822O0VT80V06K0FH57)', seen: '2026-10-03' },
    'pt-e-bdp': { t: 'The Banco de Portugal, the central bank, has its headquarters at Rua do Comércio 148, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/54930037NWG1CCVQHF93', by: 'GLEIF, Global LEI Index record for BANCO DE PORTUGAL (LEI 54930037NWG1CCVQHF93)', seen: '2026-10-03' },
    'pt-e-nos': { t: 'NOS, the telecoms group, has its headquarters at Rua Actor António Silva 9, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5493004DM8FGIY6QKF37', by: 'GLEIF, Global LEI Index record for NOS, SGPS, S.A. (LEI 5493004DM8FGIY6QKF37)', seen: '2026-10-03' },
    'pt-e-jm': { t: 'Jerónimo Martins, the food-retail group, has its headquarters at Rua Actor António Silva 7, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/259400A8SZP10GB5IB19', by: 'GLEIF, Global LEI Index record for JERÓNIMO MARTINS SGPS SA (LEI 259400A8SZP10GB5IB19)', seen: '2026-10-03' },
    'pt-e-outsystems': { t: 'OutSystems, the software company, has its headquarters at Rua Central Park 6, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/254900240SHJ4587YW79', by: 'GLEIF, Global LEI Index record for OUTSYSTEMS - SOFTWARE EM REDE S.A. (LEI 254900240SHJ4587YW79)', seen: '2026-10-03' },
    'pt-e-ren': { t: 'REN, the grid operator, has its headquarters at Avenida Estados Unidos da América 55, Lisbon.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300FR1FN48IGHR915', by: 'GLEIF, Global LEI Index record for REN - REDES ENERGÉTICAS NACIONAIS, SGPS, S.A. (LEI 549300FR1FN48IGHR915)', seen: '2026-10-03' },
    'pt-e-bpi': { t: 'Banco BPI has its headquarters at Avenida da Boavista 1117, Porto.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/3DM5DPGI3W6OU6GJ4N92', by: 'GLEIF, Global LEI Index record for BANCO BPI S.A. (LEI 3DM5DPGI3W6OU6GJ4N92)', seen: '2026-10-03' },
    'pt-e-bcp': { t: 'Banco Comercial Português (Millennium bcp) has its registered headquarters at Praça D. João I 28, Porto.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/JU1U6S0DG9YLT7N8ZV32', by: 'GLEIF, Global LEI Index record for BANCO COMERCIAL PORTUGUÊS S.A. (LEI JU1U6S0DG9YLT7N8ZV32)', seen: '2026-10-03' },
    'pt-e-mota': { t: 'Mota-Engil, the construction group, has its headquarters at Rua do Rego Lameiro 38, Porto.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300L6RR1203WN9F57', by: 'GLEIF, Global LEI Index record for MOTA - ENGIL, SGPS S.A. (LEI 549300L6RR1203WN9F57)', seen: '2026-10-03' },
    'pt-e-sonae': { t: 'Sonae, the retail and investment group, has its headquarters at Lugar do Espido, Via Norte, Maia, in the Porto area.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300847SOBT7HY7R50', by: 'GLEIF, Global LEI Index record for SONAE - SGPS, S.A. (LEI 549300847SOBT7HY7R50)', seen: '2026-10-03' },
    'pt-rent': { t: 'INE’s median rent of new leases, per square metre, in the 12 months to March 2026 was €9.50 in Portugal, €17.22 in the municipality of Lisbon (17,144 new contracts) and €14.29 in Porto (7,574); in the first quarter of 2026 alone Lisbon’s was €17.42. It is a rent per square metre of all homes, not the rent of a one-bedroom flat.', tag: 'data', src: 'https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=800184186&att_display=n&att_download=y', by: 'INE Portugal, Estatísticas de rendas da habitação ao nível local, 1.º trimestre de 2026 (26 June 2026)', seen: '2026-10-03' },
    'pt-galp-gen': { t: 'Galp’s Generation Galp, a one-year traineeship for people who have finished or are finishing a master’s degree, has run since 1998 and more than 500 current employees joined through it; the selection runs through screening, an online assessment, group dynamics and a pitch, a business case and a final interview, and the latest applications are closed.', tag: 'employer-stated', src: 'https://galp.com/corp/en/people/young-talent/generation-galp', by: 'Galp, Generation Galp trainee programme page', seen: '2026-10-03' },
    'pt-jm-trainee': { t: 'Jerónimo Martins’ Trainee Programme in Portugal, for master’s graduates preferably in management, hotel management, economics, finance, engineering or technology who are fluent in Portuguese and English, began a new edition in January 2026; in 2025 it received more than 1,400 applications and had 11 participants.', tag: 'employer-stated', src: 'https://www.jeronimomartins.com/en/press_releases/pr_20250916_1_en/', by: 'Jerónimo Martins, press release “Jerónimo Martins launches new edition of Trainee Programme in Portugal” (16 September 2025)', seen: '2026-10-03' },
    'pt-sonae-contacto': { t: 'Sonae’s Contacto programme, created in 1986, aimed in 2026 to recruit more than 80 young talents who are finalists or recent graduates in fields including economics, management, information technology, data analysis and artificial intelligence; applications closed on 6 April, assessment days were held in Porto and Lisbon in April, the programme starts in September 2026, and pay is promised above the average starting pay of the general “técnico superior” career.', tag: 'employer-stated', src: 'https://www.sonae.pt/fotos/press_releases/20250310_pr_programa_contacto_2026_vf_98343912669aef6218e8c7.pdf', by: 'Sonae, press release “Programa Contacto da Sonae celebra 40 anos e vai recrutar mais de 80 jovens talentos” (Maia, 10 March 2026)', seen: '2026-10-03' },
    'pt-lang': { t: 'Portuguese is mandatory in the Novobanco and BPI trainee programmes and Jerónimo Martins asks for fluent Portuguese and English; EDP’s Global Graduate Program is the exception, and says Portuguese is not required.', tag: 'practitioner consensus', src: 'https://talentportugal.com/en/trainee-program/novobanco-young-talent-program/', by: 'Talent Portugal, Novobanco and BPI trainee pages (8 Oct 2026); Jerónimo Martins and EDP pages as cited above', seen: '2026-10-08' },
    'pt-cal-bpi': { t: 'BPI’s 12-month Trainee Program took applications in February and March 2026 and started in September 2026.', tag: 'practitioner consensus', src: 'https://talentportugal.com/en/trainee-program/bpi-trainee-program/', by: 'Talent Portugal, BPI Trainee Program 2026', seen: '2026-10-08' },
    'pt-cal-nb': { t: 'Novobanco’s 9-month Young Talent Program took applications from 20 April to 14 June 2026 and started in September 2026.', tag: 'practitioner consensus', src: 'https://talentportugal.com/en/trainee-program/novobanco-young-talent-program/', by: 'Talent Portugal, Novobanco Young Talent Program 2026', seen: '2026-10-08' },
    'pt-cal-iefp': { t: 'IEFP’s Estágios +Talento, a six-month internship for graduates up to 35, takes applications from 12 October to 7 December 2026, or until the budget runs out.', tag: 'data', src: 'https://www.iefp.pt/estagios', by: 'IEFP, estágios page', seen: '2026-10-08' },
    'pt-catolica': { t: 'In the Financial Times 2026 master’s in management ranking Católica Lisbon is 25th (three-year average pay $99,125, 97% employed at three months) and Católica Porto 66th ($55,831, 100% employed).', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Financial Times Masters in Management ranking 2026, via places/iberia-and-nordics.md §7', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Easy to enter and English-friendly in tech, energy and shared services, but local pay is low (€1,576 a month on average in 2024) against Lisbon rents. Lisbon holds about 60% of Portugal’s information and communication jobs and 58% of its finance and insurance jobs, with Porto a clear second; energy, retail and banking groups run graduate programmes there. The one strong card is tax: IRS Jovem exempts most of a young graduate’s income in the first years.':
    'Facile da raggiungere e aperto all’inglese nella tecnologia, nell’energia e nei centri servizi, ma gli stipendi locali sono bassi (1.576 € al mese in media nel 2024) rispetto agli affitti di Lisbona. Lisbona concentra circa il 60% dei posti di lavoro portoghesi nell’informazione e comunicazione e il 58% in finanza e assicurazioni, con Porto nettamente seconda; gruppi dell’energia, della distribuzione e delle banche vi gestiscono programmi per laureati. L’unica carta forte è il fisco: l’IRS Jovem esenta gran parte del reddito di un giovane laureato nei primi anni.',
  'Energy and utilities':
    'Energia e servizi pubblici',
  'Shared services and tech hubs':
    'Centri servizi e poli tecnologici',
  'Tourism':
    'Turismo',
  'Banking':
    'Banca',
  'Consulting':
    'Consulenza',
  'Demand is rated from Eurostat’s 2021 metropolitan employment counts (information and communication, finance and insurance) and named headquarters; no source gives demand by role family or graduate pay by city.':
    'La domanda è valutata sui conteggi Eurostat 2021 dell’occupazione metropolitana (informazione e comunicazione, finanza e assicurazioni) e sulle sedi centrali citate; nessuna fonte dà la domanda per famiglia di ruoli né gli stipendi dei laureati per città.',
  'No one-bedroom rent is shown: INE publishes rents per square metre of new leases, not per flat, and no citable rent source was available. Pay is the average of all employees at establishments in the municipality, not an entry salary.':
    'Non è indicato alcun affitto per bilocale: l’INE pubblica gli affitti al metro quadrato dei nuovi contratti, non per appartamento, e non era disponibile una fonte citabile per gli affitti. La retribuzione è la media di tutti i dipendenti degli stabilimenti del comune, non uno stipendio d’ingresso.',
  'Graduate programmes were read for Galp, Jerónimo Martins, Sonae and EDP only; no page was read for the banks, the Big Four, OutSystems or the shared-service centres, and no source gives the number of graduates they hire.':
    'I programmi per laureati sono stati letti solo per Galp, Jerónimo Martins, Sonae ed EDP; non è stata letta alcuna pagina delle banche, delle Big Four, di OutSystems o dei centri servizi, e nessuna fonte indica quanti laureati assumono.',
  'University rankings of Lisbon and Porto could not be read from a primary source: two secondary pages disagree on whether Lisbon or Porto leads in the QS 2027 table, so none is given.':
    'Le classifiche delle università di Lisbona e Porto non sono state lette da una fonte primaria: due pagine secondarie non concordano su chi guidi la classifica QS 2027, quindi non ne è indicata alcuna.',
  'Employer entries rest on the Global LEI Index headquarters address, which is sometimes the registered rather than the operational headquarters (Millennium bcp); headcounts were not read.':
    'Le voci sui datori di lavoro si basano sull’indirizzo della sede nel Global LEI Index, che a volte è la sede legale e non quella operativa (Millennium bcp); il numero di dipendenti non è stato letto.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  'Portugal: pay and rent, IRS Jovem, IFICI, the 2025 job-seeker visa, EDP and Galp programmes, Nova SBE':
    'Portogallo: stipendi e affitti, IRS Jovem, IFICI, il visto per ricerca di lavoro del 2025, programmi EDP e Galp, Nova SBE',
  'IFICI and other Portuguese tax regimes':
    'L’IFICI e gli altri regimi fiscali portoghesi',
  'Energy head offices, shared services and the leading business school':
    'Sedi dell’energia, centri servizi e la principale business school',
  'Energy':
    'Energia',
  'Technology':
    'Tecnologia',
  'Portuguese not required':
    'il portoghese non è richiesto',
  'one-year trainee programme for master’s graduates, since 1998':
    'programma di tirocinio di un anno per laureati magistrali, dal 1998',
  'two-year programme; fluent Portuguese and English asked; 11 places from 1,400 applications in 2025':
    'programma biennale; si richiedono portoghese e inglese fluenti; 11 posti su 1.400 candidature nel 2025',
  'energy group, headquarters on Avenida 24 de Julho':
    'gruppo energetico, sede centrale in Avenida 24 de Julho',
  'energy group, headquarters at Alcântara':
    'gruppo energetico, sede centrale ad Alcântara',
  'bank, headquarters on Avenida João XXI':
    'banca, sede centrale in Avenida João XXI',
  'central bank, headquarters on Rua do Comércio':
    'banca centrale, sede centrale in Rua do Comércio',
  'telecoms group, headquarters at Campo Grande':
    'gruppo di telecomunicazioni, sede centrale a Campo Grande',
  'food-retail group, headquarters in Lisbon':
    'gruppo della distribuzione alimentare, sede centrale a Lisbona',
  'grid operator, headquarters at Alvalade':
    'gestore delle reti, sede centrale ad Alvalade',
  'software company, headquarters at Central Park':
    'azienda di software, sede centrale a Central Park',
  'Portugal’s second metropolitan region for finance and tech jobs':
    'La seconda regione metropolitana portoghese per posti in finanza e tecnologia',
  '25,760 jobs (2021)':
    '25.760 posti (2021)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '11,690 jobs (2021)':
    '11.690 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'bank, headquarters on Avenida da Boavista':
    'banca, sede centrale in Avenida da Boavista',
  'bank, registered headquarters at Praça D. João I':
    'banca, sede legale in Praça D. João I',
  'more than 80 places in 2026; assessment day in Porto and Lisbon':
    'più di 80 posti nel 2026; giornata di selezione a Porto e a Lisbona',
  'construction group, headquarters in Porto':
    'gruppo delle costruzioni, sede centrale a Porto',
  'retail and investment group, headquarters at Maia':
    'gruppo della distribuzione e degli investimenti, sede centrale a Maia',
  'Tax and net pay':
    'Tasse e stipendio netto',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Pay by city':
    'Retribuzioni per città',
  'Rents':
    'Affitti',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Language':
    'Lingua',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'Portuguese is mandatory in the Novobanco and BPI trainee programmes and Jerónimo Martins asks for fluent Portuguese and English; EDP’s Global Graduate Program is the exception, and says Portuguese is not required.':
    'Il portoghese è obbligatorio nei programmi trainee di Novobanco e BPI e Jerónimo Martins chiede portoghese e inglese fluenti; il Global Graduate Program di EDP è l’eccezione, e afferma che il portoghese non è richiesto.',
  'BPI’s 12-month Trainee Program took applications in February and March 2026 and started in September 2026.':
    'Il Trainee Program di 12 mesi di BPI ha raccolto candidature a febbraio e marzo 2026 ed è iniziato a settembre 2026.',
  'Novobanco’s 9-month Young Talent Program took applications from 20 April to 14 June 2026 and started in September 2026.':
    'Il Young Talent Program di 9 mesi di Novobanco ha raccolto candidature dal 20 aprile al 14 giugno 2026 ed è iniziato a settembre 2026.',
  'IEFP’s Estágios +Talento, a six-month internship for graduates up to 35, takes applications from 12 October to 7 December 2026, or until the budget runs out.':
    'Gli Estágios +Talento dell’IEFP, un tirocinio di sei mesi per laureati fino a 35 anni, raccolgono candidature dal 12 ottobre al 7 dicembre 2026, o fino a esaurimento del bilancio.',
  'IRS Jovem exempts income for those aged up to 35: 100% in the first year of income, 75% in years 2–4, 50% in 5–7 and 25% in 8–10, capped at €29,542; worth about €7,200 in year one at €45,000.':
    'L’IRS Jovem esenta il reddito di chi ha fino a 35 anni: 100% nel primo anno di reddito, 75% negli anni 2–4, 50% nei 5–7 e 25% negli 8–10, con un tetto di 29.542 €; vale circa 7.200 € nel primo anno con 45.000 €.',
  'Average gross pay for all Portuguese employees was €1,611 a month in the first quarter of 2026, against a central one-bed rent in Lisbon of about €1,425.':
    'Lo stipendio lordo medio di tutti i dipendenti portoghesi era di 1.611 € al mese nel primo trimestre 2026, contro un affitto centrale per un bilocale a Lisbona di circa 1.425 €.',
  'Nova SBE’s master’s in management ranks 2nd in the FT 2026 table, with 100% employed at three months, 93% international students and 10th place for international mobility, so many graduates work outside Portugal.':
    'Il master in management di Nova SBE è 2° nella classifica FT 2026, con il 100% di occupati a tre mesi, il 93% di studenti internazionali e il 10° posto per mobilità internazionale, quindi molti laureati lavorano fuori dal Portogallo.',
  'EDP’s Global Graduate Program is an 18-month programme of three rotations from September, one of them abroad; Portuguese is not required, and the 2026 applications are closed.':
    'Il Global Graduate Program di EDP dura 18 mesi con tre rotazioni da settembre, una all’estero; il portoghese non è richiesto, e le candidature 2026 sono chiuse.',
  'Eurostat counts 829,750 people in work in the Porto metropolitan region in 2021: 25,760 in information and communication (second in Portugal, after Lisbon) and 11,690 in finance and insurance (second in Portugal, after Lisbon). The region’s GDP was €39.2 billion in 2022.':
    'Eurostat conta 829.750 occupati nella regione metropolitana di Porto nel 2021: 25.760 nell’informazione e comunicazione (seconda in Portogallo, dopo Lisbona) e 11.690 in finanza e assicurazioni (seconda in Portogallo, dopo Lisbona). Il PIL della regione era di 39,2 miliardi di € nel 2022.',
  'Eurostat counts 1,474,000 people in work in the Lisbon metropolitan region in 2021: 79,860 in information and communication (60% of Portugal’s 133,230 and 12th of 152 European metropolitan regions) and 47,950 in finance and insurance (58% of Portugal’s 82,360 and 14th). The region’s GDP was €87.4 billion in 2022, 36% of Portugal’s €242.3 billion.':
    'Eurostat conta 1.474.000 occupati nella regione metropolitana di Lisbona nel 2021: 79.860 nell’informazione e comunicazione (il 60% dei 133.230 del Portogallo e 12ª tra 152 regioni metropolitane europee) e 47.950 in finanza e assicurazioni (il 58% degli 82.360 del Portogallo e 14ª). Il PIL della regione era di 87,4 miliardi di € nel 2022, il 36% dei 242,3 miliardi del Portogallo.',
  'In the Global Financial Centres Index 40 (September 2026) Lisbon ranks 61st in the world, up 14 places, and is outside the Western European top 15.':
    'Nel Global Financial Centres Index 40 (settembre 2026) Lisbona è 61ª al mondo, in salita di 14 posizioni, ed è fuori dalle prime 15 dell’Europa occidentale.',
  'Startup Genome’s GSER 2026 puts Lisbon’s Ecosystem Value at $35 billion, above the global average of $25 billion, with $316 million of early-stage funding between the second half of 2023 and 2025 against a global average of $554 million.':
    'Il GSER 2026 di Startup Genome stima l’Ecosystem Value di Lisbona in 35 miliardi di dollari, sopra la media mondiale di 25 miliardi, con 316 milioni di dollari di finanziamenti early stage tra il secondo semestre del 2023 e il 2025 contro una media mondiale di 554 milioni.',
  'Startup Genome’s GSER 2026 ranks Porto in the 51st–60th range of emerging start-up ecosystems, in the top ten in Europe for funding runway and the top 20 for its AI-native cluster.':
    'Il GSER 2026 di Startup Genome colloca Porto tra il 51º e il 60º posto degli ecosistemi di start-up emergenti, tra i primi dieci in Europa per autonomia finanziaria e tra i primi 20 per il cluster AI-native.',
  'Portugal’s seasonally adjusted unemployment rate was 5.7% in August 2026, and 19.8% for under-25s, against 6.1% and 15.4% in the EU.':
    'Il tasso di disoccupazione destagionalizzato del Portogallo era del 5,7% nell’agosto 2026, e del 19,8% per gli under 25, contro il 6,1% e il 15,4% nell’UE.',
  'In 2025, 83.9% of Portuguese tertiary graduates aged 20 to 34 who left education up to three years earlier were in work, against 85.3% in the EU.':
    'Nel 2025 l’83,9% dei laureati portoghesi di 20-34 anni usciti dal sistema educativo da non più di tre anni era occupato, contro l’85,3% nell’UE.',
  'Average monthly gross earnings (ganho) of employees in Portugal were €1,576 in 2024, against €2,121 for establishments in the municipality of Lisbon and €1,930 in Porto.':
    'Il guadagno lordo medio mensile (ganho) dei dipendenti in Portogallo era di 1.576 € nel 2024, contro 2.121 € per gli stabilimenti nel comune di Lisbona e 1.930 € a Porto.',
  'EDP, the energy group, has its headquarters at Avenida 24 de Julho 12, Lisbon.':
    'EDP, il gruppo energetico, ha la sede centrale in Avenida 24 de Julho 12, a Lisbona.',
  'Galp, the energy group, has its headquarters at Avenida da Índia 8, Alcântara, Lisbon.':
    'Galp, il gruppo energetico, ha la sede centrale in Avenida da Índia 8, ad Alcântara, a Lisbona.',
  'Caixa Geral de Depósitos has its headquarters at Avenida João XXI 63, Lisbon.':
    'La Caixa Geral de Depósitos ha la sede centrale in Avenida João XXI 63, a Lisbona.',
  'The Banco de Portugal, the central bank, has its headquarters at Rua do Comércio 148, Lisbon.':
    'Il Banco de Portugal, la banca centrale, ha la sede centrale in Rua do Comércio 148, a Lisbona.',
  'NOS, the telecoms group, has its headquarters at Rua Actor António Silva 9, Lisbon.':
    'NOS, il gruppo di telecomunicazioni, ha la sede centrale in Rua Actor António Silva 9, a Lisbona.',
  'Jerónimo Martins, the food-retail group, has its headquarters at Rua Actor António Silva 7, Lisbon.':
    'Jerónimo Martins, il gruppo della distribuzione alimentare, ha la sede centrale in Rua Actor António Silva 7, a Lisbona.',
  'OutSystems, the software company, has its headquarters at Rua Central Park 6, Lisbon.':
    'OutSystems, l’azienda di software, ha la sede centrale in Rua Central Park 6, a Lisbona.',
  'REN, the grid operator, has its headquarters at Avenida Estados Unidos da América 55, Lisbon.':
    'REN, il gestore delle reti, ha la sede centrale in Avenida Estados Unidos da América 55, a Lisbona.',
  'Banco BPI has its headquarters at Avenida da Boavista 1117, Porto.':
    'Banco BPI ha la sede centrale in Avenida da Boavista 1117, a Porto.',
  'Banco Comercial Português (Millennium bcp) has its registered headquarters at Praça D. João I 28, Porto.':
    'Banco Comercial Português (Millennium bcp) ha la sede legale in Praça D. João I 28, a Porto.',
  'Mota-Engil, the construction group, has its headquarters at Rua do Rego Lameiro 38, Porto.':
    'Mota-Engil, il gruppo delle costruzioni, ha la sede centrale in Rua do Rego Lameiro 38, a Porto.',
  'Sonae, the retail and investment group, has its headquarters at Lugar do Espido, Via Norte, Maia, in the Porto area.':
    'Sonae, il gruppo della distribuzione e degli investimenti, ha la sede centrale in Lugar do Espido, Via Norte, a Maia, nell’area di Porto.',
  'INE’s median rent of new leases, per square metre, in the 12 months to March 2026 was €9.50 in Portugal, €17.22 in the municipality of Lisbon (17,144 new contracts) and €14.29 in Porto (7,574); in the first quarter of 2026 alone Lisbon’s was €17.42. It is a rent per square metre of all homes, not the rent of a one-bedroom flat.':
    'L’affitto mediano dei nuovi contratti secondo l’INE, per metro quadrato, nei 12 mesi a marzo 2026 era di 9,50 € in Portogallo, 17,22 € nel comune di Lisbona (17.144 nuovi contratti) e 14,29 € a Porto (7.574); nel solo primo trimestre 2026 quello di Lisbona era di 17,42 €. È un affitto per metro quadrato di tutte le abitazioni, non l’affitto di un bilocale.',
  'Galp’s Generation Galp, a one-year traineeship for people who have finished or are finishing a master’s degree, has run since 1998 and more than 500 current employees joined through it; the selection runs through screening, an online assessment, group dynamics and a pitch, a business case and a final interview, and the latest applications are closed.':
    'Generation Galp di Galp, un tirocinio di un anno per chi ha concluso o sta concludendo la laurea magistrale, esiste dal 1998 e più di 500 dipendenti attuali sono entrati da lì; la selezione prevede screening, test online, dinamiche di gruppo e pitch, business case e colloquio finale, e le ultime candidature sono chiuse.',
  'Jerónimo Martins’ Trainee Programme in Portugal, for master’s graduates preferably in management, hotel management, economics, finance, engineering or technology who are fluent in Portuguese and English, began a new edition in January 2026; in 2025 it received more than 1,400 applications and had 11 participants.':
    'Il Trainee Programme di Jerónimo Martins in Portogallo, per laureati magistrali preferibilmente in management, hotel management, economia, finanza, ingegneria o tecnologia e con ottima conoscenza di portoghese e inglese, ha avviato una nuova edizione a gennaio 2026; nel 2025 ha ricevuto oltre 1.400 candidature e ha avuto 11 partecipanti.',
  'Sonae’s Contacto programme, created in 1986, aimed in 2026 to recruit more than 80 young talents who are finalists or recent graduates in fields including economics, management, information technology, data analysis and artificial intelligence; applications closed on 6 April, assessment days were held in Porto and Lisbon in April, the programme starts in September 2026, and pay is promised above the average starting pay of the general “técnico superior” career.':
    'Il programma Contacto di Sonae, nato nel 1986, nel 2026 puntava a reclutare più di 80 giovani talenti, finalisti o neolaureati in ambiti che includono economia, management, tecnologie dell’informazione, analisi dei dati e intelligenza artificiale; le candidature si sono chiuse il 6 aprile, le giornate di selezione si sono tenute a Porto e Lisbona in aprile, il programma parte a settembre 2026 e la retribuzione è promessa superiore alla media d’ingresso della carriera generale di “técnico superior”.',
  'In the Financial Times 2026 master’s in management ranking Católica Lisbon is 25th (three-year average pay $99,125, 97% employed at three months) and Católica Porto 66th ($55,831, 100% employed).':
    'Nella classifica 2026 del Financial Times dei master in management la Católica di Lisbona è 25ª (retribuzione media triennale 99.125 $, 97% occupati a tre mesi) e la Católica di Porto 66ª (55.831 $, 100% occupati).'
});

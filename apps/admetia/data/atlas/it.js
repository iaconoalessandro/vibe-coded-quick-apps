/* Atlas record: Italy. Read 2 October 2026; log P38
 * (research/verification/round-4b.md; round 5, 3 October 2026: research/verification/round-5b.md).
 * The library's Italy material (places/italy-playbook.md, places/countries-and-cities.md §5) is the
 * deepest it has; this record points to it and adds the permit and registration rules.
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md). Round 5 added: Eurostat metropolitan job counts
 * with Italian and European ranks (Milan dominant in finance and IT), the Chamber of Commerce's
 * Milan figures, AlmaLaurea 2026 pay, GFCI and start-up rankings, headquarters from the Global LEI
 * Index, pay (Ministry of Economy and Finance, tax year 2024) and standing for every hub.
 * Brief: research/countries/it-italy.md. */

ATLAS.add({
  id: 'IT',
  checked: '2026-10-03',
  log: 'P38',
  summary: 'Milan leads Italy in both finance and information-and-communication jobs (about 100,700 and 147,200 in its metropolitan region, ahead of Rome and Turin), holds a third of the country’s foreign-owned enterprises, and is the centre for consulting and consumer-brand marketing; Rome is shaped by the public sector and the energy and defence groups. Italian is expected almost everywhere outside a few international teams, and young Italian graduates still earn far more abroad than at home.',
  sectors: [
    'Banking and insurance',
    'Consulting',
    'Fashion, luxury and design',
    'Consumer goods',
    'Energy and utilities',
    'Public sector'
  ],
  roles: ['finance', 'it'],
  hubs: [
    {
      id: 'milan', name: 'Milan', lat: 45.46, lon: 9.19,
      knownFor: 'Finance, consulting, fashion and consumer-brand marketing',
      why: ['it-mil', 'it-mil-fdi', 'it-metro-j', 'it-metro-k', 'it-metro-eu', 'it-mil-chamber', 'it-mil-assol', 'it-gfci', 'it-gser', 'it-e-spoons'],
      sectors: ['Banking and asset management', 'Consulting', 'Fashion and luxury', 'Consumer goods', 'Software and IT services'],
      employers: [
        { t: 'Foreign investors in Milan', note: '47 greenfield projects in 2025', c: 'it-mil-fdi' },
        { name: 'UniCredit', note: 'headquarters in Piazza Gae Aulenti', c: 'it-e-unicredit' },
        { name: 'Mediobanca', note: 'investment bank, headquarters in Piazzetta Cuccia', c: 'it-e-mediobanca' },
        { name: 'Banco BPM', note: 'banking group, headquarters in Piazza Meda', c: 'it-e-bancobpm' },
        { name: 'FinecoBank', note: 'headquarters in Piazzale Durante', c: 'it-e-fineco' },
        { name: 'Banca Mediolanum', note: 'headquarters in Basiglio (Milano 3), Milan metropolitan area', c: 'it-e-mediolanum' },
        { name: 'Pirelli', note: 'tyre maker, headquarters in Viale Pirelli', c: 'it-e-pirelli' },
        { name: 'Prada', note: 'luxury fashion group, headquarters in Via Fogazzaro', c: 'it-e-prada' },
        { name: 'Moncler', note: 'luxury outerwear group, headquarters in Via Stendhal', c: 'it-e-moncler' },
        { name: 'Snam', note: 'gas infrastructure, headquarters in Via Vezza d’Oglio', c: 'it-e-snam' },
        { name: 'Prysmian', note: 'cable maker, headquarters in Via Chiese', c: 'it-e-prysmian' },
        { name: 'Bending Spoons', note: 'app developer, headquarters in Via Bonnet', c: 'it-e-spoons' },
        { name: 'Azimut Holding', note: 'asset manager, headquarters in Via Cusani', c: 'it-e-azimut' },
        { name: 'Luxottica', note: 'eyewear maker, headquarters in Piazzale Cadorna', c: 'it-e-luxottica' },
        { name: 'Italgas', note: 'gas distribution, headquarters in Via Carlo Bo', c: 'it-e-italgas' }
      ],
      demand: {
        finance: ['dominant', 'it-metro-k', 'it-metro-eu', 'it-e-unicredit', 'it-e-mediobanca'],
        management: ['present', 'it-mil', 'it-e-pirelli'],
        marketing: ['present', 'it-mil', 'it-e-prada'],
        software: ['present', 'it-mil-fdi', 'it-e-spoons'],
        business: ['strong', 'it-mil-chamber', 'it-mil-assol'],
        it: ['dominant', 'it-metro-j', 'it-metro-eu', 'it-mil-fdi'],
        economics: 'gap', accounting: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        am: ['present', 'it-e-azimut']
      },
      standing: [
        { f: 'finance', s: [5, 3, 2], c: ['it-metro-k', 'it-metro-eu', 'it-gfci'] },
        { f: 'it', s: [5, 3, 2], c: ['it-metro-j', 'it-metro-eu', 'it-gser'] },
        { f: 'business', s: [5, 3, 2], c: ['it-mil-chamber', 'it-mil-assol'] }
      ],
      metrics: {
        pop: { v: 4329748, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Milano metropolitan region', seen: '2026-10-03' },
        gdp: { v: 228.4, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Milano, EUR 228,436 million', seen: '2026-10-03' },
        wage: { v: 3231, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Milano', seen: '2026-10-03' }
      },
      programmes: [
        { calc: 'masters', track: 'mim', id: 'bocconi-mgmt', name: 'Bocconi — MSc Management' },
        { calc: 'masters', track: 'mim', id: 'bocconi-im', name: 'Bocconi — MSc International Management' },
        { calc: 'masters', track: 'mif', id: 'bocconi-fin', name: 'Bocconi — MSc Finance' },
        { calc: 'masters', track: 'marketing', id: 'bocconi-mkt', name: 'Bocconi — MSc Marketing Management' },
        { calc: 'mba', name: 'SDA Bocconi (MBA)' }
      ]
    },
    {
      id: 'rome', name: 'Rome', lat: 41.90, lon: 12.50,
      knownFor: 'Government, state-owned groups and energy headquarters',
      why: ['it-rome', 'it-metro-j', 'it-metro-k', 'it-metro-eu', 'it-gfci'],
      sectors: ['Public sector', 'Energy and utilities', 'State-owned groups'],
      employers: [
        { name: 'Eni, Enel', note: 'energy headquarters', c: 'it-rome' },
        { name: 'Eni', note: 'energy group, headquarters in Piazzale Mattei', c: 'it-e-eni' },
        { name: 'Enel', note: 'energy group, headquarters in Viale Regina Margherita', c: 'it-e-enel' },
        { name: 'Leonardo', note: 'aerospace and defence group, headquarters in Piazza Monte Grappa', c: 'it-e-leonardo' },
        { name: 'Poste Italiane', note: 'postal, banking and insurance group, headquarters in Viale Europa', c: 'it-e-poste' },
        { name: 'Ferrovie dello Stato Italiane', note: 'state railway group, headquarters in Piazza della Croce Rossa', c: 'it-e-fs' }
      ],
      demand: {
        business: ['present', 'it-rome', 'it-e-eni', 'it-e-enel'],
        finance: ['strong', 'it-metro-k', 'it-metro-eu', 'it-gfci'],
        it: ['strong', 'it-metro-j', 'it-metro-eu'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 3, 2], c: ['it-metro-k', 'it-metro-eu', 'it-gfci'] },
        { f: 'it', s: [4, 3, 1], c: ['it-metro-j', 'it-metro-eu', 'it-gser'] },
        { f: 'business', s: [4, 2, 1], c: ['it-rome', 'it-e-eni', 'it-e-enel'] }
      ],
      metrics: {
        pop: { v: 4227059, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Roma metropolitan region', seen: '2026-10-03' },
        gdp: { v: 163.5, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Roma, EUR 163,462 million', seen: '2026-10-03' },
        wage: { v: 2458, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Roma', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'turin', name: 'Turin', lat: 45.07, lon: 7.69,
      knownFor: 'Italy’s third metropolitan region for both finance and information-and-communication jobs, and its car-making capital',
      why: ['it-turin', 'it-metro-j', 'it-metro-k', 'it-metro-eu', 'it-gser'],
      sectors: ['Automotive', 'Banking', 'Aerospace'],
      employers: [
        { t: 'Information and communication employers', note: '40,300 jobs (2021)', c: 'it-turin' },
        { t: 'Finance and insurance employers', note: '53,600 jobs (2021)', c: 'it-turin' },
        { name: 'Intesa Sanpaolo', note: 'banking group, headquarters in Piazza San Carlo', c: 'it-e-intesa' },
        { name: 'Stellantis Europe', note: 'the carmaker’s European company, headquarters in Corso Agnelli', c: 'it-e-stellantis' }
      ],
      demand: {
        it: ['strong', 'it-turin'],
        finance: ['strong', 'it-turin'],
        business: ['present', 'it-e-intesa', 'it-e-stellantis'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [4, 3, 1], c: ['it-turin', 'it-metro-k', 'it-metro-eu'] },
        { f: 'it', s: [4, 2, 1], c: ['it-turin', 'it-metro-j', 'it-metro-eu'] }
      ],
      metrics: {
        pop: { v: 2204632, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Torino metropolitan region', seen: '2026-10-03' },
        gdp: { v: 75.9, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Torino, EUR 75,854 million', seen: '2026-10-03' },
        wage: { v: 2300, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Torino', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'bologna', name: 'Bologna and the Motor Valley', lat: 44.49, lon: 11.34,
      knownFor: 'Emilia’s capital and the centre of the Motor Valley car and motorbike makers',
      why: ['it-bologna', 'it-metro-j', 'it-metro-k'],
      sectors: ['Automotive', 'Machinery', 'Agriculture and food'],
      employers: [
        { t: 'Information and communication employers', note: '19,400 jobs (2021)', c: 'it-bologna' },
        { t: 'Finance and insurance employers', note: '14,800 jobs (2021)', c: 'it-bologna' },
        { t: 'Motor Valley brands: Lamborghini, Maserati, Dallara, Ducati', c: 'it-motor-valley' },
        { name: 'Unipol Assicurazioni', note: 'insurer, headquarters in Via Stalingrado', c: 'it-e-unipol' },
        { name: 'Ducati', note: 'motorbike maker, headquarters in Borgo Panigale', c: 'it-e-ducati' },
        { name: 'Marchesini Group', note: 'packaging machinery, headquarters in Pianoro (metropolitan area)', c: 'it-e-marchesini' }
      ],
      demand: {
        business: ['present', 'it-e-ducati', 'it-motor-valley'],
        finance: ['present', 'it-e-unipol'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['it-bologna', 'it-metro-j'] },
        { f: 'finance', s: [4, 2, 1], c: ['it-bologna', 'it-metro-k'] }
      ],
      metrics: {
        pop: { v: 1014124, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Bologna metropolitan region', seen: '2026-10-03' },
        gdp: { v: 43.1, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Bologna, EUR 43,129 million', seen: '2026-10-03' },
        wage: { v: 2411, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Bologna', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'padua-venice', name: 'Padua and Venice (Veneto)', lat: 45.42, lon: 12.08,
      knownFor: 'The Veneto’s two neighbouring metropolitan regions, Padua and Venice',
      why: ['it-padua-venice', 'it-padua-venice-2', 'it-metro-j', 'it-metro-k'],
      sectors: ['Manufacturing', 'Luxury and fashion', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '13,700 jobs (2021)', c: 'it-padua-venice' },
        { t: 'Finance and insurance employers', note: '9,400 jobs (2021)', c: 'it-padua-venice' },
        { t: 'Information and communication employers', note: 'Venice: 7,400 jobs (2021)', c: 'it-padua-venice-2' },
        { t: 'Finance and insurance employers', note: 'Venice: 6,700 jobs (2021)', c: 'it-padua-venice-2' },
        { name: 'Safilo', note: 'eyewear maker, headquarters in the Padua industrial zone', c: 'it-e-safilo' },
        { name: 'Banca Ifis', note: 'bank, headquarters in Mestre', c: 'it-e-ifis' }
      ],
      demand: {
        business: ['present', 'it-e-safilo'],
        finance: ['present', 'it-e-ifis'],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['it-padua-venice', 'it-padua-venice-2', 'it-metro-j'] },
        { f: 'finance', s: [4, 2, 1], c: ['it-padua-venice', 'it-padua-venice-2', 'it-metro-k'] }
      ],
      metrics: {
        pop: { v: 1766244, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Padova (930,349) plus Venezia (835,895) metropolitan regions added', seen: '2026-10-03' },
        gdp: { v: 59.9, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Padova EUR 33,461 million plus Venezia EUR 26,470 million', seen: '2026-10-03' },
        wage: { v: 2176, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Padova and Venezia combined, weighted by declarants', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'florence', name: 'Florence (Tuscany)', lat: 43.77, lon: 11.26,
      knownFor: 'Tuscany’s capital, for fashion, leather goods and pharmaceuticals',
      why: ['it-florence', 'it-metro-j', 'it-metro-k'],
      sectors: ['Luxury and fashion', 'Pharmaceuticals', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '11,300 jobs (2021)', c: 'it-florence' },
        { t: 'Finance and insurance employers', note: '13,100 jobs (2021)', c: 'it-florence' },
        { name: 'Salvatore Ferragamo', note: 'luxury fashion house, headquarters in Via Tornabuoni', c: 'it-e-ferragamo' },
        { name: 'Menarini', note: 'pharmaceutical group, headquarters in Via dei Sette Santi', c: 'it-e-menarini' }
      ],
      demand: {
        business: ['present', 'it-e-menarini'],
        marketing: ['present', 'it-e-ferragamo'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'finance', s: [3, 2, 1], c: ['it-florence', 'it-metro-k'] },
        { f: 'it', s: [3, 2, 1], c: ['it-florence', 'it-metro-j'] }
      ],
      metrics: {
        pop: { v: 988194, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Firenze metropolitan region', seen: '2026-10-03' },
        gdp: { v: 38.8, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Firenze, EUR 38,838 million', seen: '2026-10-03' },
        wage: { v: 2271, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Firenze', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'naples', name: 'Naples', lat: 40.85, lon: 14.27,
      knownFor: 'Southern Italy’s largest metropolitan region',
      why: ['it-naples', 'it-metro-j', 'it-metro-k'],
      sectors: ['Aerospace', 'Ports and logistics', 'Tourism'],
      employers: [
        { t: 'Information and communication employers', note: '23,100 jobs (2021)', c: 'it-naples' },
        { t: 'Finance and insurance employers', note: '18,300 jobs (2021)', c: 'it-naples' },
        { name: 'Kimbo', note: 'coffee roaster, headquarters in Via Bernini', c: 'it-e-kimbo' }
      ],
      demand: {
        business: ['present', 'it-e-kimbo'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 1], c: ['it-naples', 'it-metro-j'] },
        { f: 'finance', s: [4, 2, 1], c: ['it-naples', 'it-metro-k'] }
      ],
      metrics: {
        pop: { v: 2980338, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Napoli metropolitan region', seen: '2026-10-03' },
        gdp: { v: 61.1, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Napoli, EUR 61,059 million', seen: '2026-10-03' },
        wage: { v: 1847, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Napoli', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'genoa', name: 'Genoa', lat: 44.41, lon: 8.93,
      knownFor: 'Italy’s port city on the Ligurian coast',
      why: ['it-genoa', 'it-metro-j', 'it-metro-k'],
      sectors: ['Ports and logistics', 'Shipping', 'Defence'],
      employers: [
        { t: 'Information and communication employers', note: '9,200 jobs (2021)', c: 'it-genoa' },
        { t: 'Finance and insurance employers', note: '9,500 jobs (2021)', c: 'it-genoa' },
        { name: 'Ansaldo Energia', note: 'power-plant maker, headquarters in Via Lorenzi', c: 'it-e-ansaldo' },
        { name: 'Costa Crociere', note: 'cruise line, headquarters in Piazza Piccapietra', c: 'it-e-costa' },
        { name: 'Esaote', note: 'medical imaging, headquarters in Via Melen', c: 'it-e-esaote' },
        { name: 'ERG', note: 'renewable energy, headquarters in Via De Marini', c: 'it-e-erg' }
      ],
      demand: {
        business: ['present', 'it-e-ansaldo', 'it-e-costa', 'it-e-esaote', 'it-e-erg'],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['it-genoa', 'it-metro-j'] },
        { f: 'finance', s: [3, 2, 1], c: ['it-genoa', 'it-metro-k'] }
      ],
      metrics: {
        pop: { v: 816606, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_pjanaggr3/default/table?lang=en', by: 'Eurostat, metropolitan regions: population on 1 January (met_pjanaggr3), Genova metropolitan region', seen: '2026-10-03' },
        gdp: { v: 29, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table?lang=en', by: 'Eurostat, metropolitan regions: GDP at current market prices (met_10r_3gdp), Genova, EUR 29,039 million', seen: '2026-10-03' },
        wage: { v: 2067, cur: 'EUR', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.finanze.gov.it/it/statistiche-fiscali/open-data-comunale-principali-variabili-irpef/', by: 'Ministero dell’Economia e delle Finanze, Open data comunali: principali variabili IRPEF, tax year 2024 (reddito da lavoro dipendente e assimilati ÷ declarants with that income, annual ÷ 12; residents of the comune, includes part-time and part-year work); Comune di Genova', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['it-metro-j', 'it-metro-k', 'it-mil-chamber'] },
    { k: 'Graduate labour market', c: ['it-unemp', 'it-alma-1y'] },
    { k: 'Recruiting calendar', c: ['it-cal-slam', 'it-cal-stage'] },
    { k: 'Language', c: ['it-lang'] },
    { k: 'Pay at home and abroad', c: ['it-alma', 'it-alma-1y'] },
    { k: 'Tax and net pay', c: ['it-net', 'it-impatriati'] }
  ],
  briefs: [
    ['countries/it-italy.md', 'Country brief: hubs, employers, pay and standing'],
    ['places/italy-playbook.md', 'laurea magistrale vs Master vs MSc; AlmaLaurea outcomes; the impatriati regime'],
    ['places/countries-and-cities.md', '§5 Milan vs the rest, and why Italians leave'],
    ['money/salaries-and-roi.md', '§5 Milan net pay and rent'],
    ['careers/finance.md', 'Milan, Mediobanca after the MPS takeover'],
    ['decisions/school-types-and-accreditation.md', '§7 the legal value of foreign degrees in Italy']
  ],
  gaps: [
    'AlmaLaurea’s pay and employment for economics and ICT graduates, and by city of work, were not read: only the national averages are in the synthesis report.',
    'Hub ratings come from Eurostat’s 2021 metropolitan job counts for two industries (information and communication, finance and insurance) and from named headquarters in the Global LEI Index; no count by role family (analytics, data, accounting, marketing) was read for any city.',
    'The Eurostat table omits London, Berlin, Madrid and Frankfurt for 2021, so European ranks of Italian cities are among the 152 metropolitan regions that report, not among all.',
    'Pay is the Ministry of Economy and Finance’s average declared employment income of residents of each comune (tax year 2024), which includes part-time and part-year work and is residence-based; no rent figure was sourced for any Italian city.',
    'Headquarters are taken from the Global LEI Index, so they show where a group is registered, not how many graduates it hires there; Lavazza, Reale Mutua and other Turin employers were not found in it.',
    'The North-East industrial districts beyond Padua and Venice are not mapped as hubs.',
    'The Blue Card salary threshold for Italy is €36,278.51 gross a year (or the CCNL minimum), verified in visas_immigration/italy/italy_visas_immigration_guide.md.',
    'Naples, Genoa, Florence, Bologna and Padua–Venice are rated only "present", from the headquarters of one or two named employers each: their Eurostat counts do not put them second or third in Italy.'
  ],
  claims: {
    'it-cal-slam': { t: 'Intesa Sanpaolo’s SLAM graduate programme took applications from 24 February to 17 March 2026, with remote steps and an in-person Contest Day in Milan on 18 May, and a start tentatively from July 2026.', tag: 'employer-stated', src: 'https://www.unimib.it/node/37538', by: 'Università di Milano-Bicocca, SLAM Intesa Sanpaolo International Graduate Program, third edition', seen: '2026-10-08' },
    'it-cal-stage': { t: 'In Milan, applications for a six-month stage run from October to December for a January start and from May to July for a September start; an extracurricular stage after graduating is governed by regional rules.', tag: 'practitioner consensus', src: 'research/getting-in/recruiting-calendar.md', by: 'Admetia research library, getting-in/recruiting-calendar.md §3.3 (practitioner consensus)', seen: '2026-10-02' },
    'it-lang': { t: 'About 4% of Italian job postings say Italian is not required.', tag: 'data', src: 'research/places/countries-and-cities.md', by: 'Indeed Hiring Lab (10 Oct 2024), via places/countries-and-cities.md §2', seen: '2026-09-30' },
    'it-alma': { t: 'Five years after graduating, Italian master’s graduates working abroad earn about €2,900 net a month against about €1,800 in Italy.', tag: 'data', src: 'research/places/italy-playbook.md', by: 'AlmaLaurea 2025, via places/italy-playbook.md', seen: '2026-09-30' },
    'it-net': { t: 'At €60,000 gross a single employee in Milan keeps about 62% after IRPEF, the regional and municipal surcharges and social contributions.', tag: 'practitioner consensus', src: 'research/money/salaries-and-roi.md', by: 'Admetia research library, money/salaries-and-roi.md §5 (author calculation)', seen: '2026-10-02' },
    'it-impatriati': { t: 'Workers who move their tax residence to Italy after three years abroad can have 50% of their employment income exempt for five years (60% with a minor child, taxable base 40%), up to €600,000, if they stay at least four years; the rule moves to art. 225 of the new consolidated tax code from 1 January 2027.', tag: 'data', src: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-27;209', by: 'D.Lgs. 209/2023 art. 5 and D.Lgs. 117/2026 art. 225; guide visas_immigration/italy/italy_visas_immigration_guide.md', seen: '2026-10-05' },
    'it-mil': { t: 'Milan is the national centre for finance, consulting and consumer-brand and luxury marketing, and drew 20 foreign finance investment projects in 2025.', tag: 'practitioner consensus', src: 'research/places/countries-and-cities.md', by: 'Admetia research library, places/countries-and-cities.md §5 (EY 2026 data)', seen: '2026-09-30' },
    'it-mil-fdi': { t: 'Of Milan’s 47 greenfield foreign investment projects in 2025, 21% were in financial services, 21% in business services and 19% in software and IT; the city ranks near the bottom of its benchmark cities for attracting talent.', tag: 'practitioner consensus', src: 'https://www.assolombarda.it/centro-studi/report-your-next-milano-2026', by: 'Assolombarda, Your Next Milano 2026', seen: '2026-10-02' },
    'it-rome': { t: 'Rome’s graduate market is shaped by the public sector, the energy and utility headquarters (Eni, Enel) and the state-owned groups.', tag: 'practitioner consensus', src: 'research/places/countries-and-cities.md', by: 'Admetia research library, places/countries-and-cities.md §5', seen: '2026-09-30' },
    'it-turin': { t: 'Eurostat counts 1,011,100 people in work in the Turin metropolitan region in 2021: 40,300 in information and communication (third in Italy, after Milan and Rome) and 53,600 in finance and insurance (third in Italy, after Milan and Rome). The region’s GDP was €75.9 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-motor-valley': { t: 'Emilia-Romagna’s Motor Valley association names Lamborghini, Maserati, Dallara and Ducati among the top brands of the region’s motor industry.', tag: 'employer-stated', src: 'https://www.motorvalley.it/en/the-motor-valley/', by: 'Motor Valley (Emilia-Romagna motor-industry association)', seen: '2026-10-03' },
    'it-bologna': { t: 'Eurostat counts 529,900 people in work in the Bologna metropolitan region in 2021: 19,400 in information and communication and 14,800 in finance and insurance. The region’s GDP was €43.1 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-padua-venice-2': { t: 'Eurostat counts 365,700 people in work in the Venice metropolitan region in 2021: 7,400 in information and communication and 6,700 in finance and insurance. The region’s GDP was €26.5 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-padua-venice': { t: 'Eurostat counts 449,700 people in work in the Padua metropolitan region in 2021: 13,700 in information and communication and 9,400 in finance and insurance. The region’s GDP was €33.5 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-florence': { t: 'Eurostat counts 508,000 people in work in the Florence metropolitan region in 2021: 11,300 in information and communication and 13,100 in finance and insurance. The region’s GDP was €38.8 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-naples': { t: 'Eurostat counts 978,800 people in work in the Naples metropolitan region in 2021: 23,100 in information and communication and 18,300 in finance and insurance. The region’s GDP was €61.1 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-genoa': { t: 'Eurostat counts 379,900 people in work in the Genoa metropolitan region in 2021: 9,200 in information and communication and 9,500 in finance and insurance. The region’s GDP was €29.0 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'it-unemp': { t: 'Italy’s seasonally adjusted unemployment rate was 6.2% in August 2026, and 20.3% for under-25s.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en', by: 'Eurostat, Unemployment by sex and age, monthly (une_rt_m), August 2026', seen: '2026-10-03' },
    'it-alma-1y': { t: 'AlmaLaurea’s 2026 survey finds 80.8% of second-level graduates of 2024 in work one year on, at an average net pay of €1,495 a month, rising to €1,695 at three years; those working abroad earn €673 a month more than those in the South, and those in the North €68 more.', tag: 'data', src: 'https://www.almalaurea.it/document-download/sintesi-rapporto-almalaurea-2026-sugli-esiti-occupazionali-della-laurea', by: 'AlmaLaurea, Sintesi del Rapporto 2026 sugli esiti occupazionali della laurea (June 2026)', seen: '2026-10-03' },
    'it-metro-j': { t: 'Eurostat counts jobs in information and communication in 2021 at 147,200 in the Milan metropolitan region, 121,800 in Rome, 40,300 in Turin, 23,100 in Naples, 19,400 in Bologna, 13,700 in Padua and 7,400 in Venice, 11,300 in Florence and 9,200 in Genoa, against 642,600 in Italy as a whole.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'it-metro-k': { t: 'Eurostat counts jobs in finance and insurance in 2021 at 100,700 in the Milan metropolitan region, 68,800 in Rome, 53,600 in Turin, 18,300 in Naples, 14,800 in Bologna, 13,100 in Florence, 9,500 in Genoa, 9,400 in Padua and 6,700 in Venice, against 620,400 in Italy as a whole.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'it-metro-eu': { t: 'Among the 152 European metropolitan regions with 2021 figures, Milan ranks second for jobs in information and communication and third for finance and insurance, Rome fourth and fifth, and Turin 23rd and tenth; London, Berlin, Madrid and Frankfurt report no figure for that year.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp), 2021', seen: '2026-10-03' },
    'it-gfci': { t: 'In the Global Financial Centres Index 40 (September 2026) Rome ranks 47th in the world and 15th among Western European centres, and Milan 62nd, down from 45th in the previous edition and outside the Western European top 15.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and China Development Institute, Global Financial Centres Index 40 (16 Sep 2026)', seen: '2026-10-03' },
    'it-mil-chamber': { t: 'In 2025 the Milan province had 6,043 foreign-participated enterprises, 32.7% of Italy’s total; the Milan–Monza Brianza–Lodi area has over two million people in work, 8.5% of Italy’s workers; unemployment in Milan is 3%, its employment rate nearly 73% and its NEET rate (15 to 29) 7.7%.', tag: 'data', src: 'https://www.confcommerciomilano.it/export/sites/unione/doc/news_comunicati/pdf/2026/CamComMIMBLO_CS_260714_Milano-Produttiva-2026.pdf', by: 'Camera di commercio Milano Monza Brianza Lodi, press release on the 36th Milano Produttiva report (14 July 2026)', seen: '2026-10-03' },
    'it-mil-assol': { t: 'Assolombarda’s 2026 benchmark puts Milan seventh among its eleven peer cities for greenfield foreign investment projects in 2025, up two places, behind London, Paris and New York at the top; Milan is last of the eleven on average position across 33 international rankings (94th).', tag: 'practitioner consensus', src: 'https://www.assolombarda.it/centro-studi/report-your-next-milano-2026', by: 'Assolombarda, Your Next Milano 2026', seen: '2026-10-03' },
    'it-gser': { t: 'Startup Genome’s GSER 2026 puts Milan’s Ecosystem Value at $25 billion, equal to the global average and above the regional average of $14.3 billion, with $788 million of early-stage funding in H2 2023–2025 against a global average of $554 million; Rome is at $2 billion and $157 million, and Turin is ranked 81st–90th among emerging ecosystems.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/milan', by: 'Startup Genome, Global Startup Ecosystem Report 2026, ecosystem page', seen: '2026-10-03' },
    'it-e-unicredit': { t: 'UniCredit has its headquarters at Piazza Gae Aulenti 3, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300TRUWO2CD2G5692', by: 'GLEIF, Global LEI Index record for UNICREDIT, SOCIETA\' PER AZIONI (LEI 549300TRUWO2CD2G5692)', seen: '2026-10-03' },
    'it-e-mediobanca': { t: 'Mediobanca has its headquarters at Piazzetta Enrico Cuccia 1, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/PSNL19R2RXX5U3QWHI44', by: 'GLEIF, Global LEI Index record for MEDIOBANCA - BANCA DI CREDITO FINANZIARIO S.P.A. (LEI PSNL19R2RXX5U3QWHI44)', seen: '2026-10-03' },
    'it-e-bancobpm': { t: 'Banco BPM has its headquarters at Piazza Filippo Meda 4, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600E4E6DCD2D25E30', by: 'GLEIF, Global LEI Index record for BANCO BPM SOCIETA\' PER AZIONI (LEI 815600E4E6DCD2D25E30)', seen: '2026-10-03' },
    'it-e-fineco': { t: 'FinecoBank has its headquarters at Piazzale Francesco Durante 11, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300L7YCATGO57ZE10', by: 'GLEIF, Global LEI Index record for FINECOBANK BANCA FINECO S.P.A. (LEI 549300L7YCATGO57ZE10)', seen: '2026-10-03' },
    'it-e-mediolanum': { t: 'Banca Mediolanum has its headquarters at Via Ennio Doris in Basiglio (Milano 3), in the Milan metropolitan area.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/7LVZJ6XRIE7VNZ4UBX81', by: 'GLEIF, Global LEI Index record for BANCA MEDIOLANUM SPA (LEI 7LVZJ6XRIE7VNZ4UBX81)', seen: '2026-10-03' },
    'it-e-pirelli': { t: 'Pirelli has its headquarters at Viale Piero e Alberto Pirelli 25, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600A0C9AFC1F2A709', by: 'GLEIF, Global LEI Index record for PIRELLI & C. S.P.A. (LEI 815600A0C9AFC1F2A709)', seen: '2026-10-03' },
    'it-e-prada': { t: 'Prada has its headquarters at Via Antonio Fogazzaro 28, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156000FE0A2DC5B7852', by: 'GLEIF, Global LEI Index record for PRADA S.P.A. (LEI 8156000FE0A2DC5B7852)', seen: '2026-10-03' },
    'it-e-moncler': { t: 'Moncler has its headquarters at Via Stendhal 47, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600EBD7FB00525B20', by: 'GLEIF, Global LEI Index record for MONCLER S.P.A. (LEI 815600EBD7FB00525B20)', seen: '2026-10-03' },
    'it-e-snam': { t: 'Snam, the gas-infrastructure group, has its headquarters at Via Vezza d’Oglio 6, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156002278562044AF79', by: 'GLEIF, Global LEI Index record for SNAM S.P.A. (LEI 8156002278562044AF79)', seen: '2026-10-03' },
    'it-e-prysmian': { t: 'Prysmian, the cable maker, has its headquarters at Via Chiese 6, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/529900X0H1IO3RS1A464', by: 'GLEIF, Global LEI Index record for PRYSMIAN S.P.A. (LEI 529900X0H1IO3RS1A464)', seen: '2026-10-03' },
    'it-e-eni': { t: 'Eni has its headquarters at Piazzale Enrico Mattei 1, Rome.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/BUCRF72VH5RBN7X3VL35', by: 'GLEIF, Global LEI Index record for ENI S.P.A. (LEI BUCRF72VH5RBN7X3VL35)', seen: '2026-10-03' },
    'it-e-enel': { t: 'Enel has its headquarters at Viale Regina Margherita 137, Rome.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/WOCMU6HCI0OJWNPRZS33', by: 'GLEIF, Global LEI Index record for ENEL - SPA (LEI WOCMU6HCI0OJWNPRZS33)', seen: '2026-10-03' },
    'it-e-leonardo': { t: 'Leonardo, the aerospace and defence group, has its headquarters at Piazza Monte Grappa 4, Rome.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/529900X4EEX1U9LN3U39', by: 'GLEIF, Global LEI Index record for LEONARDO - SOCIETA\' PER AZIONI (LEI 529900X4EEX1U9LN3U39)', seen: '2026-10-03' },
    'it-e-poste': { t: 'Poste Italiane has its headquarters at Viale Europa 190, Rome.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600354DEDBD0BA991', by: 'GLEIF, Global LEI Index record for POSTE ITALIANE - SOCIETA\' PER AZIONI (LEI 815600354DEDBD0BA991)', seen: '2026-10-03' },
    'it-e-fs': { t: 'Ferrovie dello Stato Italiane, the state railway group, has its headquarters at Piazza della Croce Rossa 1, Rome.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300J4SXC5ALCJM731', by: 'GLEIF, Global LEI Index record for FERROVIE DELLO STATO ITALIANE S.P.A. (LEI 549300J4SXC5ALCJM731)', seen: '2026-10-03' },
    'it-e-intesa': { t: 'Intesa Sanpaolo has its headquarters at Piazza San Carlo 156, Turin.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/2W8N8UU78PMDQKZENC08', by: 'GLEIF, Global LEI Index record for INTESA SANPAOLO SPA (LEI 2W8N8UU78PMDQKZENC08)', seen: '2026-10-03' },
    'it-e-stellantis': { t: 'Stellantis Europe S.p.A., the carmaker’s European company, has its headquarters at Corso Giovanni Agnelli 200, Turin.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/54930007BBNT0XZVEU52', by: 'GLEIF, Global LEI Index record for STELLANTIS EUROPE S.P.A. (LEI 54930007BBNT0XZVEU52)', seen: '2026-10-03' },
    'it-e-unipol': { t: 'Unipol Assicurazioni, the insurer, has its headquarters at Via Stalingrado 45, Bologna.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156005CE5E7340CCA86', by: 'GLEIF, Global LEI Index record for UNIPOL ASSICURAZIONI S.P.A. (LEI 8156005CE5E7340CCA86)', seen: '2026-10-03' },
    'it-e-ducati': { t: 'Ducati Motor Holding has its headquarters at Via Cavalieri Ducati 3, Bologna.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5299005TE9713O1TVI13', by: 'GLEIF, Global LEI Index record for DUCATI MOTOR HOLDING SPA (LEI 5299005TE9713O1TVI13)', seen: '2026-10-03' },
    'it-e-ferragamo': { t: 'Salvatore Ferragamo has its headquarters at Via Tornabuoni 2, Florence.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/5493005GRP0FEE3NRI35', by: 'GLEIF, Global LEI Index record for SALVATORE FERRAGAMO S.P.A. (LEI 5493005GRP0FEE3NRI35)', seen: '2026-10-03' },
    'it-e-menarini': { t: 'A. Menarini Industrie Farmaceutiche Riunite, the pharmaceutical group, has its headquarters at Via dei Sette Santi 3, Florence.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156002DC6B01873B624', by: 'GLEIF, Global LEI Index record for A. MENARINI - INDUSTRIE FARMACEUTICHE RIUNITE - S.R.L. (LEI 8156002DC6B01873B624)', seen: '2026-10-03' },
    'it-e-ansaldo': { t: 'Ansaldo Energia, the power-plant maker, has its headquarters at Via Nicola Lorenzi 8, Genoa.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600B611746717CC98', by: 'GLEIF, Global LEI Index record for "ANSALDO ENERGIA S.P.A." (LEI 815600B611746717CC98)', seen: '2026-10-03' },
    'it-e-costa': { t: 'Costa Crociere, the cruise line, has its headquarters at Piazza Piccapietra 48, Genoa.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156007E606D24BE8F80', by: 'GLEIF, Global LEI Index record for "COSTA CROCIERE S.P.A." (LEI 8156007E606D24BE8F80)', seen: '2026-10-03' },
    'it-e-safilo': { t: 'Safilo Group, the eyewear maker, has its headquarters in the industrial zone at VII Strada 15, Padua.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/81560026FA1A26642782', by: 'GLEIF, Global LEI Index record for SAFILO GROUP S.P.A. (LEI 81560026FA1A26642782)', seen: '2026-10-03' },
    'it-e-kimbo': { t: 'Kimbo, the coffee roaster, has its headquarters at Via Bernini 20, Naples.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156005CFBABC8699924', by: 'GLEIF, Global LEI Index record for KIMBO S.P.A. (LEI 8156005CFBABC8699924)', seen: '2026-10-03' },
    'it-e-ifis': { t: 'Banca Ifis has its headquarters at Via Terraglio 63 in Mestre, Venice.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156005420362AE59184', by: 'GLEIF, Global LEI Index record for BANCA IFIS S.P.A. (LEI 8156005420362AE59184)', seen: '2026-10-03' },
    'it-e-marchesini': { t: 'Marchesini Group, the packaging-machinery maker, has its headquarters at Via Nazionale 100, Pianoro, in the Bologna metropolitan area.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600C0B26B399DE691', by: 'GLEIF, Global LEI Index record for MARCHESINI GROUP S.P.A. (LEI 815600C0B26B399DE691)', seen: '2026-10-03' },
    'it-e-esaote': { t: 'Esaote, the medical-imaging maker, has its headquarters at Via Enrico Melen 77, Genoa.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600A50C763397B555', by: 'GLEIF, Global LEI Index record for ESAOTE S.P.A. (LEI 815600A50C763397B555)', seen: '2026-10-03' },
    'it-e-erg': { t: 'ERG, the renewable-energy group, has its headquarters at Via De Marini 1, Genoa.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156004604684CA44A90', by: 'GLEIF, Global LEI Index record for ERG S.P.A. (LEI 8156004604684CA44A90)', seen: '2026-10-03' },
    'it-e-spoons': { t: 'Bending Spoons, the app developer, has its headquarters at Via Nino Bonnet 10, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/8156003EE5CFCCBBEB31', by: 'GLEIF, Global LEI Index record for BENDING SPOONS S.P.A. (LEI 8156003EE5CFCCBBEB31)', seen: '2026-10-03' },
    'it-e-azimut': { t: 'Azimut Holding, the asset manager, has its headquarters at Via Cusani 4, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/81560025690EF8540635', by: 'GLEIF, Global LEI Index record for AZIMUT HOLDING S.P.A. (LEI 81560025690EF8540635)', seen: '2026-10-03' },
    'it-e-luxottica': { t: 'Luxottica Group, the eyewear maker, has its headquarters at Piazzale Luigi Cadorna 3, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/549300I1NMOBS4B1LT88', by: 'GLEIF, Global LEI Index record for LUXOTTICA GROUP SPA (LEI 549300I1NMOBS4B1LT88)', seen: '2026-10-03' },
    'it-e-italgas': { t: 'Italgas, the gas-distribution group, has its headquarters at Via Carlo Bo 11, Milan.', tag: 'data', src: 'https://api.gleif.org/api/v1/lei-records/815600F25FF44EF1FA76', by: 'GLEIF, Global LEI Index record for ITALGAS S.P.A. (LEI 815600F25FF44EF1FA76)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Intesa Sanpaolo’s SLAM graduate programme took applications from 24 February to 17 March 2026, with remote steps and an in-person Contest Day in Milan on 18 May, and a start tentatively from July 2026.':
    'Il programma per laureati SLAM di Intesa Sanpaolo ha raccolto candidature dal 24 febbraio al 17 marzo 2026, con fasi a distanza e un Contest Day di persona a Milano il 18 maggio, e un inizio previsto da luglio 2026.',
  'In Milan, applications for a six-month stage run from October to December for a January start and from May to July for a September start; an extracurricular stage after graduating is governed by regional rules.':
    'A Milano le candidature per uno stage di sei mesi vanno da ottobre a dicembre per un inizio a gennaio e da maggio a luglio per un inizio a settembre; uno stage extracurriculare dopo la laurea è regolato da norme regionali.',
  'Milan leads Italy in both finance and information-and-communication jobs (about 100,700 and 147,200 in its metropolitan region, ahead of Rome and Turin), holds a third of the country’s foreign-owned enterprises, and is the centre for consulting and consumer-brand marketing; Rome is shaped by the public sector and the energy and defence groups. Italian is expected almost everywhere outside a few international teams, and young Italian graduates still earn far more abroad than at home.':
    'Milano è prima in Italia sia per posti nella finanza sia per posti nell’informazione e comunicazione (circa 100.700 e 147.200 nella sua regione metropolitana, davanti a Roma e Torino), ha un terzo delle imprese a controllo estero del paese ed è il centro della consulenza e del marketing dei marchi di consumo; Roma è segnata dal settore pubblico e dai gruppi dell’energia e della difesa. L’italiano è richiesto quasi ovunque tranne in alcuni team internazionali, e i giovani laureati italiani guadagnano ancora molto più all’estero che in patria.',
  'Banking and insurance':
    'Banche e assicurazioni',
  'Consulting':
    'Consulenza',
  'Fashion, luxury and design':
    'Moda, lusso e design',
  'Energy and utilities':
    'Energia e servizi pubblici',
  'AlmaLaurea’s pay and employment for economics and ICT graduates, and by city of work, were not read: only the national averages are in the synthesis report.':
    'Le retribuzioni e l’occupazione AlmaLaurea dei laureati in economia e in ICT, e per città di lavoro, non sono state lette: nella sintesi del rapporto ci sono solo le medie nazionali.',
  'Hub ratings come from Eurostat’s 2021 metropolitan job counts for two industries (information and communication, finance and insurance) and from named headquarters in the Global LEI Index; no count by role family (analytics, data, accounting, marketing) was read for any city.':
    'I giudizi sui poli derivano dai conteggi Eurostat 2021 dei posti nelle aree metropolitane per due settori (informazione e comunicazione, finanza e assicurazioni) e dalle sedi principali indicate nel Global LEI Index; non è stato letto alcun conteggio per famiglia di ruoli (analytics, dati, contabilità, marketing) in nessuna città.',
  'The Eurostat table omits London, Berlin, Madrid and Frankfurt for 2021, so European ranks of Italian cities are among the 152 metropolitan regions that report, not among all.':
    'La tabella Eurostat non include Londra, Berlino, Madrid e Francoforte per il 2021, quindi le posizioni europee delle città italiane sono tra le 152 regioni metropolitane che riportano il dato, non tra tutte.',
  'Pay is the Ministry of Economy and Finance’s average declared employment income of residents of each comune (tax year 2024), which includes part-time and part-year work and is residence-based; no rent figure was sourced for any Italian city.':
    'La retribuzione è il reddito medio da lavoro dipendente dichiarato dai residenti di ogni comune (anno d’imposta 2024) secondo il Ministero dell’Economia e delle Finanze, che comprende il lavoro a tempo parziale e per parte dell’anno ed è basato sulla residenza; non è stato trovato alcun dato sugli affitti per le città italiane.',
  'Headquarters are taken from the Global LEI Index, so they show where a group is registered, not how many graduates it hires there; Lavazza, Reale Mutua and other Turin employers were not found in it.':
    'Le sedi principali provengono dal Global LEI Index, quindi indicano dove il gruppo è registrato, non quanti laureati assume lì; Lavazza, Reale Mutua e altri datori di lavoro torinesi non vi sono stati trovati.',
  'The North-East industrial districts beyond Padua and Venice are not mapped as hubs.':
    'I distretti industriali del Nord-Est oltre Padova e Venezia non sono segnati come poli.',
  'The Blue Card salary threshold for Italy is €36,278.51 gross a year (or the CCNL minimum), verified in visas_immigration/italy/italy_visas_immigration_guide.md.':
    'La soglia retributiva della Carta blu per l’Italia è di 36.278,51 € lordi l’anno (o il minimo del CCNL), verificata in visas_immigration/italy/italy_visas_immigration_guide.md.',
  'Naples, Genoa, Florence, Bologna and Padua–Venice are rated only "present", from the headquarters of one or two named employers each: their Eurostat counts do not put them second or third in Italy.':
    'Napoli, Genova, Firenze, Bologna e Padova–Venezia sono valutate solo "presente", in base alla sede principale di uno o due datori di lavoro citati: i loro conteggi Eurostat non le collocano al secondo o terzo posto in Italia.',
  'Country brief: hubs, employers, pay and standing':
    'Scheda paese: poli, datori di lavoro, retribuzioni e posizionamento',
  'laurea magistrale vs Master vs MSc; AlmaLaurea outcomes; the impatriati regime':
    'laurea magistrale, Master o MSc; gli esiti AlmaLaurea; il regime degli impatriati',
  '§5 Milan vs the rest, and why Italians leave':
    '§5 Milano e il resto del paese, e perché gli italiani partono',
  '§5 Milan net pay and rent':
    '§5 stipendio netto e affitto a Milano',
  'Milan, Mediobanca after the MPS takeover':
    'Milano, Mediobanca dopo l’acquisizione da parte di MPS',
  '§7 the legal value of foreign degrees in Italy':
    '§7 il valore legale dei titoli esteri in Italia',
  'Finance, consulting, fashion and consumer-brand marketing':
    'Finanza, consulenza, moda e marketing dei beni di consumo',
  'Banking and asset management':
    'Banche e asset management',
  'Fashion and luxury':
    'Moda e lusso',
  'Software and IT services':
    'Software e servizi IT',
  '47 greenfield projects in 2025':
    '47 progetti greenfield nel 2025',
  'Foreign investors in Milan':
    'Gli investitori esteri a Milano',
  'headquarters in Piazza Gae Aulenti':
    'sede principale in piazza Gae Aulenti',
  'investment bank, headquarters in Piazzetta Cuccia':
    'banca d’investimento, sede principale in piazzetta Cuccia',
  'banking group, headquarters in Piazza Meda':
    'gruppo bancario, sede principale in piazza Meda',
  'headquarters in Piazzale Durante':
    'sede principale in piazzale Durante',
  'headquarters in Basiglio (Milano 3), Milan metropolitan area':
    'sede principale a Basiglio (Milano 3), area metropolitana di Milano',
  'tyre maker, headquarters in Viale Pirelli':
    'produttore di pneumatici, sede principale in viale Pirelli',
  'luxury fashion group, headquarters in Via Fogazzaro':
    'gruppo della moda di lusso, sede principale in via Fogazzaro',
  'luxury outerwear group, headquarters in Via Stendhal':
    'gruppo dell’abbigliamento di lusso, sede principale in via Stendhal',
  'gas infrastructure, headquarters in Via Vezza d’Oglio':
    'infrastrutture del gas, sede principale in via Vezza d’Oglio',
  'cable maker, headquarters in Via Chiese':
    'produttore di cavi, sede principale in via Chiese',
  'app developer, headquarters in Via Bonnet':
    'sviluppatore di app, sede principale in via Bonnet',
  'asset manager, headquarters in Via Cusani':
    'gestore di patrimoni, sede principale in via Cusani',
  'eyewear maker, headquarters in Piazzale Cadorna':
    'produttore di occhiali, sede principale in piazzale Cadorna',
  'gas distribution, headquarters in Via Carlo Bo':
    'distribuzione del gas, sede principale in via Carlo Bo',
  'Government, state-owned groups and energy headquarters':
    'Pubblica amministrazione, gruppi pubblici e sedi dell’energia',
  'State-owned groups':
    'Gruppi a partecipazione pubblica',
  'energy headquarters':
    'sedi centrali dell’energia',
  'energy group, headquarters in Piazzale Mattei':
    'gruppo energetico, sede principale in piazzale Mattei',
  'energy group, headquarters in Viale Regina Margherita':
    'gruppo energetico, sede principale in viale Regina Margherita',
  'aerospace and defence group, headquarters in Piazza Monte Grappa':
    'gruppo dell’aerospazio e della difesa, sede principale in piazza Monte Grappa',
  'postal, banking and insurance group, headquarters in Viale Europa':
    'gruppo postale, bancario e assicurativo, sede principale in viale Europa',
  'state railway group, headquarters in Piazza della Croce Rossa':
    'gruppo ferroviario statale, sede principale in piazza della Croce Rossa',
  'Italy’s third metropolitan region for both finance and information-and-communication jobs, and its car-making capital':
    'La terza regione metropolitana italiana per posti sia in finanza sia in informazione e comunicazione, e la capitale dell’auto',
  'Aerospace':
    'Aerospazio',
  '40,300 jobs (2021)':
    '40.300 posti (2021)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '53,600 jobs (2021)':
    '53.600 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  'banking group, headquarters in Piazza San Carlo':
    'gruppo bancario, sede principale in piazza San Carlo',
  'the carmaker’s European company, headquarters in Corso Agnelli':
    'la società europea del costruttore, sede principale in corso Agnelli',
  'Emilia’s capital and the centre of the Motor Valley car and motorbike makers':
    'Il capoluogo dell’Emilia e il centro della Motor Valley di auto e moto',
  'Machinery':
    'Macchinari',
  '19,400 jobs (2021)':
    '19.400 posti (2021)',
  '14,800 jobs (2021)':
    '14.800 posti (2021)',
  'Motor Valley brands: Lamborghini, Maserati, Dallara, Ducati':
    'I marchi della Motor Valley: Lamborghini, Maserati, Dallara, Ducati',
  'insurer, headquarters in Via Stalingrado':
    'assicuratore, sede principale in via Stalingrado',
  'motorbike maker, headquarters in Borgo Panigale':
    'produttore di moto, sede principale a Borgo Panigale',
  'packaging machinery, headquarters in Pianoro (metropolitan area)':
    'macchine per il confezionamento, sede principale a Pianoro (area metropolitana)',
  'The Veneto’s two neighbouring metropolitan regions, Padua and Venice':
    'Le due regioni metropolitane vicine del Veneto, Padova e Venezia',
  '13,700 jobs (2021)':
    '13.700 posti (2021)',
  '9,400 jobs (2021)':
    '9.400 posti (2021)',
  'Venice: 7,400 jobs (2021)':
    'Venezia: 7.400 posti (2021)',
  'Venice: 6,700 jobs (2021)':
    'Venezia: 6.700 posti (2021)',
  'eyewear maker, headquarters in the Padua industrial zone':
    'produttore di occhiali, sede principale nella zona industriale di Padova',
  'bank, headquarters in Mestre':
    'banca, sede principale a Mestre',
  'Tuscany’s capital, for fashion, leather goods and pharmaceuticals':
    'Il capoluogo della Toscana, per moda, pelletteria e farmaceutica',
  '11,300 jobs (2021)':
    '11.300 posti (2021)',
  '13,100 jobs (2021)':
    '13.100 posti (2021)',
  'luxury fashion house, headquarters in Via Tornabuoni':
    'casa di moda di lusso, sede principale in via Tornabuoni',
  'pharmaceutical group, headquarters in Via dei Sette Santi':
    'gruppo farmaceutico, sede principale in via dei Sette Santi',
  'Southern Italy’s largest metropolitan region':
    'La maggiore regione metropolitana del Sud Italia',
  'Ports and logistics':
    'Porti e logistica',
  '23,100 jobs (2021)':
    '23.100 posti (2021)',
  '18,300 jobs (2021)':
    '18.300 posti (2021)',
  'coffee roaster, headquarters in Via Bernini':
    'torrefazione, sede principale in via Bernini',
  'Italy’s port city on the Ligurian coast':
    'La città portuale italiana sulla costa ligure',
  '9,200 jobs (2021)':
    '9.200 posti (2021)',
  '9,500 jobs (2021)':
    '9.500 posti (2021)',
  'power-plant maker, headquarters in Via Lorenzi':
    'costruttore di centrali, sede principale in via Lorenzi',
  'cruise line, headquarters in Piazza Piccapietra':
    'compagnia di crociere, sede principale in piazza Piccapietra',
  'medical imaging, headquarters in Via Melen':
    'diagnostica per immagini, sede principale in via Melen',
  'renewable energy, headquarters in Via De Marini':
    'energie rinnovabili, sede principale in via De Marini',
  'Where demand is now':
    'Dove si concentra la domanda oggi',
  'Graduate labour market':
    'Mercato del lavoro dei laureati',
  'Language':
    'Lingua',
  'Pay at home and abroad':
    'Retribuzioni in Italia e all’estero',
  'Tax and net pay':
    'Tasse e stipendio netto',
  'About 4% of Italian job postings say Italian is not required.':
    'Circa il 4% degli annunci di lavoro italiani dice che l’italiano non è richiesto.',
  'Five years after graduating, Italian master’s graduates working abroad earn about €2,900 net a month against about €1,800 in Italy.':
    'A cinque anni dalla laurea, i laureati magistrali italiani che lavorano all’estero guadagnano circa 2.900 € netti al mese, contro circa 1.800 € in Italia.',
  'At €60,000 gross a single employee in Milan keeps about 62% after IRPEF, the regional and municipal surcharges and social contributions.':
    'Con 60.000 € lordi un dipendente single a Milano tiene circa il 62% dopo IRPEF, addizionali regionale e comunale e contributi.',
  'Workers who move their tax residence to Italy after three years abroad can have 50% of their employment income exempt for five years (60% with a minor child, taxable base 40%), up to €600,000, if they stay at least four years; the rule moves to art. 225 of the new consolidated tax code from 1 January 2027.':
    'Chi trasferisce la residenza fiscale in Italia dopo tre anni all’estero può avere esente il 50% del reddito da lavoro per cinque anni (il 60% con un figlio minore, base imponibile al 40%), fino a 600.000 €, se resta almeno quattro anni; dal 1° gennaio 2027 la norma passa all’art. 225 del nuovo testo unico.',
  'Milan is the national centre for finance, consulting and consumer-brand and luxury marketing, and drew 20 foreign finance investment projects in 2025.':
    'Milano è il centro nazionale di finanza, consulenza e marketing dei beni di consumo e del lusso, e ha attirato 20 progetti di investimento estero nella finanza nel 2025.',
  'Of Milan’s 47 greenfield foreign investment projects in 2025, 21% were in financial services, 21% in business services and 19% in software and IT; the city ranks near the bottom of its benchmark cities for attracting talent.':
    'Dei 47 progetti greenfield di investimento estero a Milano nel 2025, il 21% era nei servizi finanziari, il 21% nei servizi alle imprese e il 19% in software e IT; la città è tra le ultime delle città di confronto per attrazione dei talenti.',
  'Rome’s graduate market is shaped by the public sector, the energy and utility headquarters (Eni, Enel) and the state-owned groups.':
    'Il mercato del lavoro per i laureati a Roma è plasmato dal settore pubblico, dalle sedi centrali dell’energia e dei servizi pubblici (Eni, Enel) e dai gruppi a partecipazione pubblica.',
  'Eurostat counts 1,011,100 people in work in the Turin metropolitan region in 2021: 40,300 in information and communication (third in Italy, after Milan and Rome) and 53,600 in finance and insurance (third in Italy, after Milan and Rome). The region’s GDP was €75.9 billion in 2021.':
    'Eurostat conta 1.011.100 occupati nella regione metropolitana di Torino nel 2021: 40.300 nell’informazione e comunicazione (terza in Italia, dopo Milano e Roma) e 53.600 in finanza e assicurazioni (terza in Italia, dopo Milano e Roma). Il PIL della regione era di 75,9 miliardi di € nel 2021.',
  'Emilia-Romagna’s Motor Valley association names Lamborghini, Maserati, Dallara and Ducati among the top brands of the region’s motor industry.':
    'L’associazione Motor Valley dell’Emilia-Romagna indica Lamborghini, Maserati, Dallara e Ducati tra i marchi principali dell’industria motoristica della regione.',
  'Eurostat counts 529,900 people in work in the Bologna metropolitan region in 2021: 19,400 in information and communication and 14,800 in finance and insurance. The region’s GDP was €43.1 billion in 2021.':
    'Eurostat conta 529.900 occupati nella regione metropolitana di Bologna nel 2021: 19.400 nell’informazione e comunicazione e 14.800 in finanza e assicurazioni. Il PIL della regione era di 43,1 miliardi di € nel 2021.',
  'Eurostat counts 365,700 people in work in the Venice metropolitan region in 2021: 7,400 in information and communication and 6,700 in finance and insurance. The region’s GDP was €26.5 billion in 2021.':
    'Eurostat conta 365.700 occupati nella regione metropolitana di Venezia nel 2021: 7.400 nell’informazione e comunicazione e 6.700 in finanza e assicurazioni. Il PIL della regione era di 26,5 miliardi di € nel 2021.',
  'Eurostat counts 449,700 people in work in the Padua metropolitan region in 2021: 13,700 in information and communication and 9,400 in finance and insurance. The region’s GDP was €33.5 billion in 2021.':
    'Eurostat conta 449.700 occupati nella regione metropolitana di Padova nel 2021: 13.700 nell’informazione e comunicazione e 9.400 in finanza e assicurazioni. Il PIL della regione era di 33,5 miliardi di € nel 2021.',
  'Eurostat counts 508,000 people in work in the Florence metropolitan region in 2021: 11,300 in information and communication and 13,100 in finance and insurance. The region’s GDP was €38.8 billion in 2021.':
    'Eurostat conta 508.000 occupati nella regione metropolitana di Firenze nel 2021: 11.300 nell’informazione e comunicazione e 13.100 in finanza e assicurazioni. Il PIL della regione era di 38,8 miliardi di € nel 2021.',
  'Eurostat counts 978,800 people in work in the Naples metropolitan region in 2021: 23,100 in information and communication and 18,300 in finance and insurance. The region’s GDP was €61.1 billion in 2021.':
    'Eurostat conta 978.800 occupati nella regione metropolitana di Napoli nel 2021: 23.100 nell’informazione e comunicazione e 18.300 in finanza e assicurazioni. Il PIL della regione era di 61,1 miliardi di € nel 2021.',
  'Eurostat counts 379,900 people in work in the Genoa metropolitan region in 2021: 9,200 in information and communication and 9,500 in finance and insurance. The region’s GDP was €29.0 billion in 2021.':
    'Eurostat conta 379.900 occupati nella regione metropolitana di Genova nel 2021: 9.200 nell’informazione e comunicazione e 9.500 in finanza e assicurazioni. Il PIL della regione era di 29,0 miliardi di € nel 2021.',
  'Italy’s seasonally adjusted unemployment rate was 6.2% in August 2026, and 20.3% for under-25s.':
    'Il tasso di disoccupazione destagionalizzato dell’Italia era del 6,2% ad agosto 2026 e del 20,3% tra gli under 25.',
  'AlmaLaurea’s 2026 survey finds 80.8% of second-level graduates of 2024 in work one year on, at an average net pay of €1,495 a month, rising to €1,695 at three years; those working abroad earn €673 a month more than those in the South, and those in the North €68 more.':
    'L’indagine AlmaLaurea 2026 rileva che l’80,8% dei laureati di secondo livello del 2024 lavora a un anno dal titolo, con una retribuzione netta media di 1.495 € al mese, che sale a 1.695 € a tre anni; chi lavora all’estero guadagna 673 € al mese in più di chi lavora nel Mezzogiorno, e chi lavora al Nord 68 € in più.',
  'Eurostat counts jobs in information and communication in 2021 at 147,200 in the Milan metropolitan region, 121,800 in Rome, 40,300 in Turin, 23,100 in Naples, 19,400 in Bologna, 13,700 in Padua and 7,400 in Venice, 11,300 in Florence and 9,200 in Genoa, against 642,600 in Italy as a whole.':
    'Eurostat conta nel 2021 i posti nell’informazione e comunicazione in 147.200 nella regione metropolitana di Milano, 121.800 a Roma, 40.300 a Torino, 23.100 a Napoli, 19.400 a Bologna, 13.700 a Padova e 7.400 a Venezia, 11.300 a Firenze e 9.200 a Genova, su 642.600 in tutta Italia.',
  'Eurostat counts jobs in finance and insurance in 2021 at 100,700 in the Milan metropolitan region, 68,800 in Rome, 53,600 in Turin, 18,300 in Naples, 14,800 in Bologna, 13,100 in Florence, 9,500 in Genoa, 9,400 in Padua and 6,700 in Venice, against 620,400 in Italy as a whole.':
    'Eurostat conta nel 2021 i posti nella finanza e assicurazioni in 100.700 nella regione metropolitana di Milano, 68.800 a Roma, 53.600 a Torino, 18.300 a Napoli, 14.800 a Bologna, 13.100 a Firenze, 9.500 a Genova, 9.400 a Padova e 6.700 a Venezia, su 620.400 in tutta Italia.',
  'Among the 152 European metropolitan regions with 2021 figures, Milan ranks second for jobs in information and communication and third for finance and insurance, Rome fourth and fifth, and Turin 23rd and tenth; London, Berlin, Madrid and Frankfurt report no figure for that year.':
    'Tra le 152 regioni metropolitane europee con dati 2021, Milano è seconda per posti nell’informazione e comunicazione e terza per finanza e assicurazioni, Roma quarta e quinta, e Torino 23ª e decima; Londra, Berlino, Madrid e Francoforte non hanno un dato per quell’anno.',
  'In the Global Financial Centres Index 40 (September 2026) Rome ranks 47th in the world and 15th among Western European centres, and Milan 62nd, down from 45th in the previous edition and outside the Western European top 15.':
    'Nel Global Financial Centres Index 40 (settembre 2026) Roma è 47ª al mondo e 15ª tra i centri dell’Europa occidentale, e Milano 62ª, in calo dalla 45ª dell’edizione precedente e fuori dai primi 15 dell’Europa occidentale.',
  'In 2025 the Milan province had 6,043 foreign-participated enterprises, 32.7% of Italy’s total; the Milan–Monza Brianza–Lodi area has over two million people in work, 8.5% of Italy’s workers; unemployment in Milan is 3%, its employment rate nearly 73% and its NEET rate (15 to 29) 7.7%.':
    'Nel 2025 la provincia di Milano contava 6.043 imprese a partecipazione estera, il 32,7% del totale nazionale; l’area Milano–Monza Brianza–Lodi ha oltre due milioni di occupati, l’8,5% dei lavoratori italiani; la disoccupazione a Milano è del 3%, il tasso di occupazione quasi il 73% e il tasso di NEET (15-29 anni) il 7,7%.',
  'Assolombarda’s 2026 benchmark puts Milan seventh among its eleven peer cities for greenfield foreign investment projects in 2025, up two places, behind London, Paris and New York at the top; Milan is last of the eleven on average position across 33 international rankings (94th).':
    'Il benchmark 2026 di Assolombarda colloca Milano al settimo posto tra le undici città di confronto per progetti greenfield di investimento estero nel 2025, due posizioni in più, dietro Londra, Parigi e New York al vertice; Milano è ultima delle undici per posizione media in 33 classifiche internazionali (94ª).',
  'Startup Genome’s GSER 2026 puts Milan’s Ecosystem Value at $25 billion, equal to the global average and above the regional average of $14.3 billion, with $788 million of early-stage funding in H2 2023–2025 against a global average of $554 million; Rome is at $2 billion and $157 million, and Turin is ranked 81st–90th among emerging ecosystems.':
    'Il GSER 2026 di Startup Genome stima l’Ecosystem Value di Milano in 25 miliardi di dollari, pari alla media mondiale e sopra la media regionale di 14,3 miliardi, con 788 milioni di dollari di finanziamenti early stage nel H2 2023–2025 contro una media mondiale di 554 milioni; Roma è a 2 miliardi e 157 milioni, e Torino è all’81º–90º posto tra gli ecosistemi emergenti.',
  'UniCredit has its headquarters at Piazza Gae Aulenti 3, Milan.':
    'UniCredit ha la sede principale in Piazza Gae Aulenti 3, a Milano.',
  'Mediobanca has its headquarters at Piazzetta Enrico Cuccia 1, Milan.':
    'Mediobanca ha la sede principale in Piazzetta Enrico Cuccia 1, a Milano.',
  'Banco BPM has its headquarters at Piazza Filippo Meda 4, Milan.':
    'Banco BPM ha la sede principale in Piazza Filippo Meda 4, a Milano.',
  'FinecoBank has its headquarters at Piazzale Francesco Durante 11, Milan.':
    'FinecoBank ha la sede principale in Piazzale Francesco Durante 11, a Milano.',
  'Banca Mediolanum has its headquarters at Via Ennio Doris in Basiglio (Milano 3), in the Milan metropolitan area.':
    'Banca Mediolanum ha la sede principale in via Ennio Doris a Basiglio (Milano 3), nell’area metropolitana di Milano.',
  'Pirelli has its headquarters at Viale Piero e Alberto Pirelli 25, Milan.':
    'Pirelli ha la sede principale in viale Piero e Alberto Pirelli 25, a Milano.',
  'Prada has its headquarters at Via Antonio Fogazzaro 28, Milan.':
    'Prada ha la sede principale in via Antonio Fogazzaro 28, a Milano.',
  'Moncler has its headquarters at Via Stendhal 47, Milan.':
    'Moncler ha la sede principale in via Stendhal 47, a Milano.',
  'Snam, the gas-infrastructure group, has its headquarters at Via Vezza d’Oglio 6, Milan.':
    'Snam, il gruppo delle infrastrutture del gas, ha la sede principale in via Vezza d’Oglio 6, a Milano.',
  'Prysmian, the cable maker, has its headquarters at Via Chiese 6, Milan.':
    'Prysmian, il produttore di cavi, ha la sede principale in via Chiese 6, a Milano.',
  'Eni has its headquarters at Piazzale Enrico Mattei 1, Rome.':
    'Eni ha la sede principale in piazzale Enrico Mattei 1, a Roma.',
  'Enel has its headquarters at Viale Regina Margherita 137, Rome.':
    'Enel ha la sede principale in viale Regina Margherita 137, a Roma.',
  'Leonardo, the aerospace and defence group, has its headquarters at Piazza Monte Grappa 4, Rome.':
    'Leonardo, il gruppo dell’aerospazio e della difesa, ha la sede principale in piazza Monte Grappa 4, a Roma.',
  'Poste Italiane has its headquarters at Viale Europa 190, Rome.':
    'Poste Italiane ha la sede principale in viale Europa 190, a Roma.',
  'Ferrovie dello Stato Italiane, the state railway group, has its headquarters at Piazza della Croce Rossa 1, Rome.':
    'Ferrovie dello Stato Italiane, il gruppo ferroviario statale, ha la sede principale in piazza della Croce Rossa 1, a Roma.',
  'Intesa Sanpaolo has its headquarters at Piazza San Carlo 156, Turin.':
    'Intesa Sanpaolo ha la sede principale in piazza San Carlo 156, a Torino.',
  'Stellantis Europe S.p.A., the carmaker’s European company, has its headquarters at Corso Giovanni Agnelli 200, Turin.':
    'Stellantis Europe S.p.A., la società europea del costruttore, ha la sede principale in corso Giovanni Agnelli 200, a Torino.',
  'Unipol Assicurazioni, the insurer, has its headquarters at Via Stalingrado 45, Bologna.':
    'Unipol Assicurazioni, l’assicuratore, ha la sede principale in via Stalingrado 45, a Bologna.',
  'Ducati Motor Holding has its headquarters at Via Cavalieri Ducati 3, Bologna.':
    'Ducati Motor Holding ha la sede principale in via Cavalieri Ducati 3, a Bologna.',
  'Salvatore Ferragamo has its headquarters at Via Tornabuoni 2, Florence.':
    'Salvatore Ferragamo ha la sede principale in via Tornabuoni 2, a Firenze.',
  'A. Menarini Industrie Farmaceutiche Riunite, the pharmaceutical group, has its headquarters at Via dei Sette Santi 3, Florence.':
    'A. Menarini Industrie Farmaceutiche Riunite, il gruppo farmaceutico, ha la sede principale in via dei Sette Santi 3, a Firenze.',
  'Ansaldo Energia, the power-plant maker, has its headquarters at Via Nicola Lorenzi 8, Genoa.':
    'Ansaldo Energia, il costruttore di centrali, ha la sede principale in via Nicola Lorenzi 8, a Genova.',
  'Costa Crociere, the cruise line, has its headquarters at Piazza Piccapietra 48, Genoa.':
    'Costa Crociere, la compagnia di crociere, ha la sede principale in piazza Piccapietra 48, a Genova.',
  'Safilo Group, the eyewear maker, has its headquarters in the industrial zone at VII Strada 15, Padua.':
    'Safilo Group, il produttore di occhiali, ha la sede principale nella zona industriale, VII Strada 15, a Padova.',
  'Kimbo, the coffee roaster, has its headquarters at Via Bernini 20, Naples.':
    'Kimbo, la torrefazione, ha la sede principale in via Bernini 20, a Napoli.',
  'Banca Ifis has its headquarters at Via Terraglio 63 in Mestre, Venice.':
    'Banca Ifis ha la sede principale in via Terraglio 63 a Mestre, Venezia.',
  'Marchesini Group, the packaging-machinery maker, has its headquarters at Via Nazionale 100, Pianoro, in the Bologna metropolitan area.':
    'Marchesini Group, il produttore di macchine per il confezionamento, ha la sede principale in via Nazionale 100, a Pianoro, nell’area metropolitana di Bologna.',
  'Esaote, the medical-imaging maker, has its headquarters at Via Enrico Melen 77, Genoa.':
    'Esaote, il produttore di diagnostica per immagini, ha la sede principale in via Enrico Melen 77, a Genova.',
  'ERG, the renewable-energy group, has its headquarters at Via De Marini 1, Genoa.':
    'ERG, il gruppo delle energie rinnovabili, ha la sede principale in via De Marini 1, a Genova.',
  'Bending Spoons, the app developer, has its headquarters at Via Nino Bonnet 10, Milan.':
    'Bending Spoons, lo sviluppatore di app, ha la sede principale in via Nino Bonnet 10, a Milano.',
  'Azimut Holding, the asset manager, has its headquarters at Via Cusani 4, Milan.':
    'Azimut Holding, il gestore di patrimoni, ha la sede principale in via Cusani 4, a Milano.',
  'Luxottica Group, the eyewear maker, has its headquarters at Piazzale Luigi Cadorna 3, Milan.':
    'Luxottica Group, il produttore di occhiali, ha la sede principale in piazzale Luigi Cadorna 3, a Milano.',
  'Italgas, the gas-distribution group, has its headquarters at Via Carlo Bo 11, Milan.':
    'Italgas, il gruppo della distribuzione del gas, ha la sede principale in via Carlo Bo 11, a Milano.'
});

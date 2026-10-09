/* Atlas record: Finland. Read 2 October 2026, deepened 3 October 2026; log P51
 * (research/verification/round-4d.md, round-4k.md, round-5c.md). Residence and student
 * work rules read on Migri; permits after graduation, pay floor and tax are the
 * library's (places/iberia-and-nordics.md). Helsinki's IT, software and finance
 * ratings are "dominant" on Eurostat's metropolitan employment (61% of Finnish ICT jobs and 59% of
 * finance jobs, 2021); pay is regional, from Statistics Finland (2024).
 * Brief: research/countries/fi-finland.md. Official guide: visas_immigration/finland/finland_visas_immigration_guide.md. */

ATLAS.add({
  id: 'FI',
  checked: '2026-10-03',
  log: 'P51',
  summary: 'Helsinki holds about 61% of Finland’s information-and-communication jobs and about 59% of its finance jobs, with Nordea’s group headquarters, Supercell and an ecosystem Startup Genome values above the regional average; it also has the lowest rents of the Nordic capitals. The catch is entry and fit: youth unemployment was 21.8% in 2025 and about half of foreign graduates are working in Finland three years on, against nearly nine in ten Finns. Non-EU graduates get up to two years to look for work.',
  sectors: [
    'Technology and gaming',
    'Banking and finance',
    'Forestry and paper',
    'Engineering and telecoms equipment',
    'Public sector'
  ],
  roles: ['it', 'software', 'finance'],
  hubs: [
    {
      id: 'helsinki',
      name: 'Helsinki',
      lat: 60.17,
      lon: 24.94,
      knownFor: 'Head offices, Nordea and the games industry',
      why: ['fi-aalto', 'fi-nordea', 'fi-emp-hel', 'fi-nordea-hq', 'fi-kone', 'fi-genome', 'fi-gfci', 'fi-qs'],
      sectors: ['Consulting', 'Banking', 'Gaming', 'Technology', 'Public sector'],
      employers: [
        { name: 'Nordea Graduate Programme', note: 'Denmark, Finland, Norway and Sweden', c: 'fi-nordea' },
        { name: 'Nordea', note: 'group headquarters in Helsinki', c: 'fi-nordea-hq' },
        { name: 'Supercell', note: 'Helsinki office', c: 'fi-supercell' },
        { name: 'KONE', note: 'headquarters in Espoo; over 60,000 employees worldwide', c: 'fi-kone' }
      ],
      demand: { management: ['present', 'fi-aalto'], finance: ['dominant', 'fi-emp-hel', 'fi-nordea-hq'], software: ['dominant', 'fi-emp-hel', 'fi-supercell', 'fi-genome'], business: 'gap', economics: 'gap', accounting: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: ['dominant', 'fi-emp-hel', 'fi-ict'], datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      finance: { banking: ['strong', 'fi-emp-hel', 'fi-nordea-hq', 'fi-nordea'], ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'software', s: [5, 3, 2], c: ['fi-emp-hel', 'fi-genome', 'fi-ict'] },
        { f: 'it', s: [5, 3, 2], c: ['fi-emp-hel', 'fi-genome', 'fi-ict'] },
        { f: 'finance', s: [5, 2, 1], c: ['fi-emp-hel', 'fi-gfci'] }
      ],
      metrics: {
        pop: { v: 1733033, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=FI001MC&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 98.66, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=FI001MC&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 4513, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/pra/15b2.px', by: 'Statistics Finland, 15b2 average monthly earnings of full-time wage and salary earners, all sectors, Uusimaa', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'tampere',
      name: 'Tampere',
      lat: 61.5,
      lon: 23.76,
      knownFor: 'Finland’s second city for information-and-communication jobs',
      why: ['fi-tampere', 'fi-emp-tam', 'fi-qs', 'fi-wage-region'],
      sectors: ['Technology', 'Manufacturing', 'Higher education'],
      employers: [
        { t: 'Information and communication employers', note: '12,810 jobs (2021)', c: 'fi-tampere' },
        { t: 'Finance and insurance employers', note: '2,970 jobs (2021)', c: 'fi-tampere' },
        { name: 'Tampere University', note: '436th in the QS World University Rankings 2027', c: 'fi-qs' }
      ],
      demand: { it: ['strong', 'fi-tampere'], business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [4, 1, 1], c: ['fi-tampere', 'fi-emp-hel'] }
      ],
      metrics: {
        pop: { v: 530552, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=FI002M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 22.1, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=FI002M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 3951, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/pra/15b2.px', by: 'Statistics Finland, 15b2 average monthly earnings of full-time wage and salary earners, all sectors, Pirkanmaa', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'turku',
      name: 'Turku',
      lat: 60.45,
      lon: 22.27,
      knownFor: 'A south-western port city with a shipyard',
      why: ['fi-turku', 'fi-qs', 'fi-wage-region'],
      sectors: ['Shipping', 'Life sciences', 'Technology'],
      employers: [
        { t: 'Information and communication employers', note: '6,260 jobs (2021)', c: 'fi-turku' },
        { t: 'Finance and insurance employers', note: '3,150 jobs (2021)', c: 'fi-turku' },
        { name: 'University of Turku', note: '398th in the QS World University Rankings 2027', c: 'fi-qs' }
      ],
      demand: { it: ['strong', 'fi-turku'], business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'it', s: [3, 1, 1], c: ['fi-turku', 'fi-emp-hel'] }
      ],
      metrics: {
        pop: { v: 485567, year: 2023, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_pjanaggr3?format=JSON&lang=EN&metroreg=FI003M&sex=T&age=TOTAL&time=2023', by: 'Eurostat, met_pjanaggr3 population on 1 January, metropolitan region', seen: '2026-10-03' },
        gdp: { v: 20.01, cur: 'EUR', year: 2021, area: 'metro', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3gdp?format=JSON&lang=EN&metroreg=FI003M&unit=MIO_EUR&time=2021', by: 'Eurostat, met_10r_3gdp GDP at current market prices, metropolitan region', seen: '2026-10-03' },
        wage: { v: 3806, cur: 'EUR', basis: 'mean', year: 2024, area: 'region', tag: 'data', src: 'https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/pra/15b2.px', by: 'Statistics Finland, 15b2 average monthly earnings of full-time wage and salary earners, all sectors, Southwest Finland', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['fi-emp-hel', 'fi-ict', 'fi-kone'] },
    { k: 'Recruiting calendar', c: ['fi-cal-wart', 'fi-nordea'] },
    { k: 'Language', c: ['fi-lang', 'fi-cal-wart'] },
    { k: 'Tax and net pay', c: ['fi-rent', 'fi-expert'] },
    { k: 'Graduate labour market', c: ['fi-grad', 'fi-ict', 'fi-aalto', 'fi-oph'] },
    { k: 'Entry pay', c: ['fi-wage-region'] }
  ],
  briefs: [
    ['places/iberia-and-nordics.md', 'Finland: stay rates, expert jobs, Aalto outcomes, net pay after rent, permits'],
    ['countries/fi-finland.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'No source gives graduate entry pay by field or city; the pay figures are all-employee regional averages from Statistics Finland (2024, full-time earners).',
    'Aalto’s graduate pay figures could not be extracted from its report.',
    'Eurostat’s employment counts are for metropolitan regions and 2021; Espoo (part of the Helsinki region) and Oulu are not mapped as separate hubs.',
    'Nokia and OP Financial Group are not listed as employers because no source we can cite was read; graduate programme calendars were read only for Nordea.',
    'AI, data science, analytics, marketing, accounting and logistics are not rated: no source read measures them by city.',
    'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.'
  ],
  claims: {
    'fi-oph': { t: '53% of foreign citizens with a Finnish degree were employed in Finland three years after (2023), against 87–88% of Finns; 63% of those employed were in expert jobs, against 77% of Finns.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Finnish National Agency for Education (28 Oct 2025), via places/iberia-and-nordics.md §2', seen: '2026-10-02' },
    'fi-aalto': { t: 'Aalto’s 2024 business graduates went into consultancy (21%), finance (13%) and the public sector (9%); 90% were employed or entrepreneurs a year out, and 92% of those employed worked in Finland.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Aalto University School of Business (school-reported, 34% response), via places/iberia-and-nordics.md §3', seen: '2026-10-02' },
    'fi-rent': { t: 'At €45,000 gross, Helsinki leaves about €1,770 a month after tax and a central one-bed rent of about €1,078, the most of the Nordic and Iberian cities compared.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Author calculation on PwC tax tables and Numbeo rents, places/iberia-and-nordics.md §4', seen: '2026-10-02' },
    'fi-expert': { t: 'Finland’s expert tax regime (25% flat from 2026) needs €5,800 a month and no Finnish residence in the previous five years, so it does not apply at graduate pay.', tag: 'data', src: 'research/places/iberia-and-nordics.md', by: 'Vero.fi, via places/iberia-and-nordics.md §4', seen: '2026-10-02' },
    'fi-nordea': { t: 'Nordea’s 1.5-year Graduate Programme starts in September in Denmark, Finland, Norway and Sweden; the 2026 applications ran from 9 to 28 February.', tag: 'employer-stated', src: 'https://www.nordea.com/en/careers/nordea-graduate-programme', by: 'Nordea careers', seen: '2026-10-02' },
    'fi-cal-wart': { t: 'Wärtsilä’s Summer Power took applications from 29 December 2025 to 15 February 2026 for around 600 summer trainees in Vaasa, Turku and Helsinki; most positions require neither Finnish nor Swedish, and English is the official working language.', tag: 'employer-stated', src: 'https://www.wartsila.com/summerpower', by: 'Wärtsilä, Summer Power', seen: '2026-10-08' },
    'fi-lang': { t: 'Finnish or Swedish remain the main working languages in Finland and many employers require at least basic Finnish or Swedish, although around nine in ten Finns can communicate in English and English at work is growing.', tag: 'data', src: 'https://tyomarkkinatori.fi/en/news/tyonhaku-suomessa-viisi-vinkkia-kansainvaliselle-tyonhakijalle', by: 'Job Market Finland, job search in Finland: five essential tips for an international jobseeker', seen: '2026-10-08' },
    'fi-supercell': { t: 'Supercell, the games company, lists Helsinki first among its offices and is registered in Helsinki.', tag: 'employer-stated', src: 'https://supercell.com/en/careers/', by: 'Supercell careers', seen: '2026-10-02' },
    'fi-tampere': { t: 'Eurostat counts 240,020 people in work in the Tampere metropolitan region in 2021: 12,810 in information and communication (second in Finland, after Helsinki) and 2,970 in finance and insurance. The region’s GDP was €22.1 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'fi-turku': { t: 'Eurostat counts 224,740 people in work in the Turku metropolitan region in 2021: 6,260 in information and communication (third in Finland, after Helsinki and Tampere) and 3,150 in finance and insurance. The region’s GDP was €20.0 billion in 2021.', tag: 'data', src: 'https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en', by: 'Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)', seen: '2026-10-03' },
    'fi-emp-hel': { t: 'Eurostat counts 946,910 people in work in the Helsinki metropolitan region in 2021, 72,970 of them in information and communication (61% of Finland’s 119,200) and 25,780 in finance and insurance (59% of 43,700).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=FI001MC&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (Helsinki FI001MC)', seen: '2026-10-03' },
    'fi-emp-tam': { t: 'Eurostat counts 240,020 people in work in the Tampere metropolitan region in 2021, 12,810 of them in information and communication (11% of Finland’s 119,200) and 2,970 in finance and insurance (7% of 43,700).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=FI002M&wstatus=EMP&nace_r2=TOTAL&nace_r2=J&nace_r2=K&time=2021', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2021 (Tampere FI002M)', seen: '2026-10-03' },
    'fi-nordea-hq': { t: 'Nordea says its group headquarters are in Helsinki and that it operates in Denmark, Finland, Norway, Sweden, Poland and Estonia, with branches in London, New York and Shanghai.', tag: 'employer-stated', src: 'https://www.nordea.com/en/about-nordea', by: 'Nordea, about Nordea', seen: '2026-10-03' },
    'fi-kone': { t: 'KONE gives Espoo, in the Helsinki region, as its headquarters and says it had over 60,000 employees in close to 70 countries at the end of 2025.', tag: 'employer-stated', src: 'https://www.kone.com/en/company/', by: 'KONE, company', seen: '2026-10-03' },
    'fi-genome': { t: 'Startup Genome’s Helsinki ecosystem page shows an ecosystem value of $23 billion against a regional average of $14.3 billion and a global average of $25 billion, $997 million of seed and Series A funding in 2023–2025 and $10 billion of exits in 2021–2025.', tag: 'practitioner consensus', src: 'https://startupgenome.com/ecosystems/helsinki', by: 'Startup Genome, Helsinki ecosystem page (GSER 2026 data)', seen: '2026-10-03' },
    'fi-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Helsinki 85th of 117 centres; Tampere and Turku are not ranked.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 1', seen: '2026-10-03' },
    'fi-ict': { t: 'In 2025 ICT specialists were 7.8% of employment in Finland, against 5.0% in the EU, the third highest of the 33 European countries Eurostat lists, after Sweden (8.9%) and Luxembourg (8.7%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=FI&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'fi-grad': { t: 'In 2025, 86.6% of Finnish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but unemployment among 15-to-24-year-olds was 21.8% (EU 15.2%), up from 16.2% in 2023.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=FI&geo=EU27_2020', by: 'Eurostat, edat_lfse_24 and une_rt_a, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' },
    'fi-qs': { t: 'In the QS World University Rankings 2027 the University of Helsinki is 123rd, Aalto University 126th, the University of Turku 398th and Tampere University 436th.', tag: 'practitioner consensus', src: 'https://www.studyinfinland.fi/news-events/qs-world-university-rankings-2027', by: 'Study in Finland (state agency) reporting QS World University Rankings 2027, 22 Jun 2026', seen: '2026-10-03' },
    'fi-wage-region': { t: 'In 2024 the average monthly earnings of full-time wage and salary earners were €4,075 in Finland, €4,513 in Uusimaa (Helsinki), €3,951 in Pirkanmaa (Tampere) and €3,806 in Southwest Finland (Turku).', tag: 'data', src: 'https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/pra/15b2.px', by: 'Statistics Finland, structure of earnings 15b2: earnings of full-time wage and salary earners by sector, region and sex, 2024', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'Wärtsilä’s Summer Power took applications from 29 December 2025 to 15 February 2026 for around 600 summer trainees in Vaasa, Turku and Helsinki; most positions require neither Finnish nor Swedish, and English is the official working language.':
    'Il Summer Power di Wärtsilä ha raccolto candidature dal 29 dicembre 2025 al 15 febbraio 2026 per circa 600 tirocinanti estivi a Vaasa, Turku e Helsinki; la maggior parte dei posti non richiede né finlandese né svedese, e la lingua di lavoro ufficiale è l’inglese.',
  'Finnish or Swedish remain the main working languages in Finland and many employers require at least basic Finnish or Swedish, although around nine in ten Finns can communicate in English and English at work is growing.':
    'Finlandese o svedese restano le principali lingue di lavoro in Finlandia e molti datori di lavoro richiedono almeno un finlandese o uno svedese di base, anche se circa nove finlandesi su dieci sanno comunicare in inglese e l’uso dell’inglese al lavoro è in crescita.',
  'Helsinki holds about 61% of Finland’s information-and-communication jobs and about 59% of its finance jobs, with Nordea’s group headquarters, Supercell and an ecosystem Startup Genome values above the regional average; it also has the lowest rents of the Nordic capitals. The catch is entry and fit: youth unemployment was 21.8% in 2025 and about half of foreign graduates are working in Finland three years on, against nearly nine in ten Finns. Non-EU graduates get up to two years to look for work.':
    'Helsinki ha circa il 61% dei posti di lavoro finlandesi nell’informazione e comunicazione e circa il 59% di quelli nella finanza, con la sede centrale di Nordea, Supercell e un ecosistema che Startup Genome valuta sopra la media regionale; ha anche gli affitti più bassi tra le capitali nordiche. Il problema è l’ingresso e l’inserimento: la disoccupazione giovanile era del 21,8% nel 2025 e circa metà dei laureati stranieri lavora in Finlandia dopo tre anni, contro quasi nove finlandesi su dieci. I laureati extra-UE hanno fino a due anni per cercare lavoro.',
  'Technology and gaming':
    'Tecnologia e videogiochi',
  'Banking and finance':
    'Banche e finanza',
  'Forestry and paper':
    'Foreste e carta',
  'Engineering and telecoms equipment':
    'Ingegneria e apparati per telecomunicazioni',
  'No source gives graduate entry pay by field or city; the pay figures are all-employee regional averages from Statistics Finland (2024, full-time earners).':
    'Nessuna fonte indica la retribuzione iniziale dei laureati per settore o città; i dati sulle retribuzioni sono medie regionali di tutti i dipendenti a tempo pieno dell’istituto di statistica finlandese (2024).',
  'Aalto’s graduate pay figures could not be extracted from its report.':
    'Non è stato possibile estrarre dal rapporto di Aalto i dati sulle retribuzioni dei suoi laureati.',
  'Eurostat’s employment counts are for metropolitan regions and 2021; Espoo (part of the Helsinki region) and Oulu are not mapped as separate hubs.':
    'I dati Eurostat sull’occupazione riguardano le regioni metropolitane e il 2021; Espoo (parte della regione di Helsinki) e Oulu non sono mappate come poli separati.',
  'Nokia and OP Financial Group are not listed as employers because no source we can cite was read; graduate programme calendars were read only for Nordea.':
    'Nokia e OP Financial Group non sono elencate come datori di lavoro perché non è stata letta alcuna fonte citabile; i calendari dei programmi per laureati sono stati letti solo per Nordea.',
  'AI, data science, analytics, marketing, accounting and logistics are not rated: no source read measures them by city.':
    'IA, data science, analytics, marketing, contabilità e logistica non sono valutati: nessuna fonte letta li misura per città.',
  'Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs.':
    'I poli aggiunti il 3 ottobre 2026 sono valutati solo in base ai conteggi Eurostat 2021–22 dell’occupazione metropolitana: forte significa secondo o terzo nel paese per posti di lavoro in finanza e assicurazioni, o nell’informazione e comunicazione, con almeno 5.000 posti.',
  'Finland: stay rates, expert jobs, Aalto outcomes, net pay after rent, permits':
    'Finlandia: tassi di permanenza, lavori qualificati, esiti di Aalto, stipendio netto dopo l’affitto, permessi',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Head offices, Nordea and the games industry':
    'Sedi centrali, Nordea e l’industria dei videogiochi',
  'Consulting':
    'Consulenza',
  'Banking':
    'Banca',
  'Gaming':
    'Videogiochi',
  'Denmark, Finland, Norway and Sweden':
    'Danimarca, Finlandia, Norvegia e Svezia',
  'group headquarters in Helsinki':
    'sede centrale del gruppo a Helsinki',
  'Helsinki office':
    'sede di Helsinki',
  'headquarters in Espoo; over 60,000 employees worldwide':
    'sede centrale a Espoo; oltre 60.000 dipendenti nel mondo',
  'Finland’s second city for information-and-communication jobs':
    'La seconda città finlandese per posti in informazione e comunicazione',
  '12,810 jobs (2021)':
    '12.810 posti (2021)',
  'Information and communication employers':
    'I datori di lavoro dell’informazione e comunicazione',
  '2,970 jobs (2021)':
    '2.970 posti (2021)',
  'Finance and insurance employers':
    'I datori di lavoro di finanza e assicurazioni',
  '436th in the QS World University Rankings 2027':
    '436ª nel QS World University Rankings 2027',
  'A south-western port city with a shipyard':
    'Una città portuale del sud-ovest con un cantiere navale',
  'Life sciences':
    'Scienze della vita',
  '6,260 jobs (2021)':
    '6.260 posti (2021)',
  '3,150 jobs (2021)':
    '3.150 posti (2021)',
  '398th in the QS World University Rankings 2027':
    '398ª nel QS World University Rankings 2027',
  'Recruiting calendar':
    'Calendario delle selezioni',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Entry pay':
    'Stipendio d’ingresso',
  '53% of foreign citizens with a Finnish degree were employed in Finland three years after (2023), against 87–88% of Finns; 63% of those employed were in expert jobs, against 77% of Finns.':
    'Il 53% dei cittadini stranieri con una laurea finlandese lavorava in Finlandia tre anni dopo (2023), contro l’87–88% dei finlandesi; il 63% degli occupati aveva un lavoro qualificato, contro il 77% dei finlandesi.',
  'Aalto’s 2024 business graduates went into consultancy (21%), finance (13%) and the public sector (9%); 90% were employed or entrepreneurs a year out, and 92% of those employed worked in Finland.':
    'I laureati in economia di Aalto del 2024 sono andati in consulenza (21%), finanza (13%) e settore pubblico (9%); il 90% lavorava o aveva un’impresa un anno dopo, e il 92% degli occupati lavorava in Finlandia.',
  'At €45,000 gross, Helsinki leaves about €1,770 a month after tax and a central one-bed rent of about €1,078, the most of the Nordic and Iberian cities compared.':
    'Con 45.000 € lordi, a Helsinki restano circa 1.770 € al mese dopo le tasse e un affitto centrale per un bilocale di circa 1.078 €, il valore più alto tra le città nordiche e iberiche confrontate.',
  'Finland’s expert tax regime (25% flat from 2026) needs €5,800 a month and no Finnish residence in the previous five years, so it does not apply at graduate pay.':
    'Il regime fiscale finlandese per esperti (aliquota fissa del 25% dal 2026) richiede 5.800 € al mese e nessuna residenza in Finlandia nei cinque anni precedenti, quindi non si applica agli stipendi da neolaureato.',
  'Nordea’s 1.5-year Graduate Programme starts in September in Denmark, Finland, Norway and Sweden; the 2026 applications ran from 9 to 28 February.':
    'Il Graduate Programme di Nordea, di 1,5 anni, parte a settembre in Danimarca, Finlandia, Norvegia e Svezia; le candidature 2026 sono state aperte dal 9 al 28 febbraio.',
  'Supercell, the games company, lists Helsinki first among its offices and is registered in Helsinki.':
    'Supercell, l’azienda di videogiochi, indica Helsinki per prima tra le sue sedi ed è registrata a Helsinki.',
  'Eurostat counts 240,020 people in work in the Tampere metropolitan region in 2021: 12,810 in information and communication (second in Finland, after Helsinki) and 2,970 in finance and insurance. The region’s GDP was €22.1 billion in 2021.':
    'Eurostat conta 240.020 occupati nella regione metropolitana di Tampere nel 2021: 12.810 nell’informazione e comunicazione (seconda in Finlandia, dopo Helsinki) e 2.970 in finanza e assicurazioni. Il PIL della regione era di 22,1 miliardi di € nel 2021.',
  'Eurostat counts 224,740 people in work in the Turku metropolitan region in 2021: 6,260 in information and communication (third in Finland, after Helsinki and Tampere) and 3,150 in finance and insurance. The region’s GDP was €20.0 billion in 2021.':
    'Eurostat conta 224.740 occupati nella regione metropolitana di Turku nel 2021: 6.260 nell’informazione e comunicazione (terza in Finlandia, dopo Helsinki e Tampere) e 3.150 in finanza e assicurazioni. Il PIL della regione era di 20,0 miliardi di € nel 2021.',
  'Eurostat counts 946,910 people in work in the Helsinki metropolitan region in 2021, 72,970 of them in information and communication (61% of Finland’s 119,200) and 25,780 in finance and insurance (59% of 43,700).':
    'Eurostat conta 946.910 occupati nella regione metropolitana di Helsinki nel 2021, di cui 72.970 nell’informazione e comunicazione (61% dei 119.200 della Finlandia) e 25.780 in finanza e assicurazioni (59% dei 43.700).',
  'Eurostat counts 240,020 people in work in the Tampere metropolitan region in 2021, 12,810 of them in information and communication (11% of Finland’s 119,200) and 2,970 in finance and insurance (7% of 43,700).':
    'Eurostat conta 240.020 occupati nella regione metropolitana di Tampere nel 2021, di cui 12.810 nell’informazione e comunicazione (11% dei 119.200 della Finlandia) e 2.970 in finanza e assicurazioni (7% dei 43.700).',
  'Nordea says its group headquarters are in Helsinki and that it operates in Denmark, Finland, Norway, Sweden, Poland and Estonia, with branches in London, New York and Shanghai.':
    'Nordea dichiara che la sede centrale del gruppo è a Helsinki e che opera in Danimarca, Finlandia, Norvegia, Svezia, Polonia ed Estonia, con filiali a Londra, New York e Shanghai.',
  'KONE gives Espoo, in the Helsinki region, as its headquarters and says it had over 60,000 employees in close to 70 countries at the end of 2025.':
    'KONE indica Espoo, nell’area di Helsinki, come sede centrale e dichiara oltre 60.000 dipendenti in quasi 70 paesi alla fine del 2025.',
  'Startup Genome’s Helsinki ecosystem page shows an ecosystem value of $23 billion against a regional average of $14.3 billion and a global average of $25 billion, $997 million of seed and Series A funding in 2023–2025 and $10 billion of exits in 2021–2025.':
    'La pagina di Startup Genome su Helsinki mostra un valore dell’ecosistema di 23 miliardi di dollari contro una media regionale di 14,3 miliardi e una media globale di 25 miliardi, 997 milioni di dollari di finanziamenti seed e Serie A nel 2023–2025 e 10 miliardi di exit nel 2021–2025.',
  'The Global Financial Centres Index 40 (September 2026) ranks Helsinki 85th of 117 centres; Tampere and Turku are not ranked.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Helsinki all’85º posto su 117 centri; Tampere e Turku non sono classificate.',
  'In 2025 ICT specialists were 7.8% of employment in Finland, against 5.0% in the EU, the third highest of the 33 European countries Eurostat lists, after Sweden (8.9%) and Luxembourg (8.7%).':
    'Nel 2025 gli specialisti ICT erano il 7,8% dell’occupazione in Finlandia, contro il 5,0% nell’UE, il terzo valore più alto dei 33 paesi europei elencati da Eurostat, dopo Svezia (8,9%) e Lussemburgo (8,7%).',
  'In 2025, 86.6% of Finnish tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but unemployment among 15-to-24-year-olds was 21.8% (EU 15.2%), up from 16.2% in 2023.':
    'Nel 2025 l’86,6% dei laureati finlandesi di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), ma la disoccupazione tra i 15-24enni era del 21,8% (UE 15,2%), in aumento dal 16,2% del 2023.',
  'In the QS World University Rankings 2027 the University of Helsinki is 123rd, Aalto University 126th, the University of Turku 398th and Tampere University 436th.':
    'Nel QS World University Rankings 2027 l’Università di Helsinki è 123ª, l’Università Aalto 126ª, l’Università di Turku 398ª e l’Università di Tampere 436ª.',
  'In 2024 the average monthly earnings of full-time wage and salary earners were €4,075 in Finland, €4,513 in Uusimaa (Helsinki), €3,951 in Pirkanmaa (Tampere) and €3,806 in Southwest Finland (Turku).':
    'Nel 2024 i guadagni mensili medi dei lavoratori dipendenti a tempo pieno erano di 4.075 € in Finlandia, 4.513 € in Uusimaa (Helsinki), 3.951 € in Pirkanmaa (Tampere) e 3.806 € nella Finlandia sud-occidentale (Turku).'
});

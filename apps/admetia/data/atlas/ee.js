/* Atlas record: Estonia. Read 2 October 2026, deepened 3 October 2026; log P36
 * (research/verification/round-4a.md, round-5c.md). The library had no Estonian material,
 * so every claim here is new. Tallinn's software and IT ratings are "dominant" on Eurostat's
 * metropolitan employment (79% of Estonian ICT jobs) and Statistics Estonia's count of firms
 * by municipality (74% of ICT firms). Brief: research/countries/ee-estonia.md. */

ATLAS.add({
  id: 'EE',
  checked: '2026-10-08',
  log: 'P36',
  summary: 'A small labour market concentrated on software and start-ups: about 36,000 people work in information and communication, and the start-up sector — led by Wise and Bolt — employs about 17,000. Tallinn holds about three-quarters of the country’s ICT firms; at European scale it is a recognised secondary centre, at world scale a small one. Tartu adds the main university and deep-tech spin-offs. Official data show fewer young programmers in work since 2022.',
  sectors: [
    'Software and ICT',
    'Start-ups and fintech',
    'Digital government services',
    'Deep tech',
    'Logistics and manufacturing'
  ],
  roles: ['software', 'it', 'business', 'finance'],
  hubs: [
    {
      id: 'tallinn',
      name: 'Tallinn',
      lat: 59.44,
      lon: 24.75,
      knownFor: 'Software, fintech and the start-up sector',
      why: ['ee-startups', 'ee-harju', 'ee-enterprises', 'ee-tartu-econ', 'ee-q2-employers', 'ee-wise', 'ee-genome', 'ee-eurostat-ict'],
      sectors: ['Software', 'Fintech and payments', 'Mobility platforms', 'Cybersecurity', 'Banking', 'Business services'],
      employers: [
        { name: 'Wise', note: 'its largest office is in Tallinn; 2,419 staff in the Estonian register', c: 'ee-wise-office' },
        { name: 'Bolt', note: 'headquarters of the mobility and delivery platform', c: 'ee-bolt-hq' },
        { name: 'Playtech', note: 'online-gaming software; 662 staff in the register', c: 'ee-q2-employers' },
        { name: 'Pipedrive, Veriff and Microsoft Estonia (Skype)', note: '373, 301 and 393 staff in the register', c: 'ee-q2-employers' },
        { name: 'LHV', note: 'banking group registered in Tallinn, more than 1,150 staff', c: 'ee-lhv' },
        { name: 'Swedbank', note: 'one of the five largest banks, registered in Tallinn', c: 'ee-swed' },
        { name: 'NATO Cooperative Cyber Defence Centre of Excellence', note: 'cyber-defence research and exercises', c: 'ee-ccdcoe' },
        { name: 'Cybernetica', note: 'security and e-government software, based in Tallinn', c: 'ee-cyber' },
        { name: 'Ülemiste City', note: 'business campus with 18,000 people working, studying and living there', c: 'ee-ulemiste' }
      ],
      demand: { software: ['dominant', 'ee-metro-emp', 'ee-enterprises', 'ee-ict', 'ee-startups'], it: ['dominant', 'ee-metro-emp', 'ee-enterprises', 'ee-ict', 'ee-pa101'], business: ['strong', 'ee-harju'], finance: ['strong', 'ee-metro-emp', 'ee-enterprises', 'ee-pa101', 'ee-lhv', 'ee-swed'], economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap' },
      finance: { banking: ['strong', 'ee-banks', 'ee-lhv', 'ee-swed'], vc: ['present', 'ee-startups'], ib: 'gap', am: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap' },
      standing: [
        { f: 'software', s: [5, 3, 2], c: ['ee-metro-emp', 'ee-enterprises', 'ee-genome', 'ee-blink', 'ee-eurostat-ict'] },
        { f: 'it', s: [5, 3, 2], c: ['ee-enterprises', 'ee-eurostat-ict', 'ee-blink'] },
        { f: 'finance', s: [5, 2, 1], c: ['ee-metro-emp', 'ee-gfci'] },
        { f: 'business', s: [5, 2, 1], c: ['ee-harju', 'ee-tartu-econ'] }
      ],
      metrics: {
        pop: { v: 452563, year: 2026, area: 'city', tag: 'data', src: 'https://andmed.stat.ee/en/stat/rahvastik__rahvastikunaitajad-ja-koosseis__rahvaarv-ja-rahvastiku-koosseis/RV0291U', by: 'Statistics Estonia, RV0291U population by administrative unit, 1 January 2026', seen: '2026-10-03' },
        gdp: { v: 20.67, cur: 'EUR', year: 2024, area: 'city', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__rahvamajanduse-arvepidamine__sisemajanduse-koguprodukt-(skp)__regionaalne-sisemajanduse-koguprodukt/RAA0050', by: 'Statistics Estonia, RAA0050 GDP by county, Tallinn (EUR 20,669 million)', seen: '2026-10-03' },
        wage: { v: 2451, cur: 'EUR', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__palk-ja-toojeukulu__palk__aastastatistika/PA107', by: 'Statistics Estonia, PA107 average monthly gross wages by administrative unit, Tallinn', seen: '2026-10-03' },
        rent: { v: 722, cur: 'EUR', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Tallinn', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'tartu',
      name: 'Tartu',
      lat: 58.38,
      lon: 26.72,
      knownFor: 'The university city and its deep-tech spin-offs',
      why: ['ee-tartu', 'ee-enterprises', 'ee-tartu-econ', 'ee-qs', 'ee-blink'],
      sectors: ['Higher education and research', 'Deep tech', 'Software'],
      employers: [
        { name: 'University of Tartu', note: 'Estonia’s highest-ranked university; spin-offs presented at Startup Day 2026', c: 'ee-qs' },
        { name: 'Sparkup Tartu Science Park', note: 'incubator', c: 'ee-tartu' }
      ],
      demand: { software: ['present', 'ee-enterprises', 'ee-tartu'], cs: ['present', 'ee-tartu'], ai: ['present', 'ee-tartu'], business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', bigdata: 'gap' },
      standing: [
        { f: 'software', s: [3, 1, 1], c: ['ee-enterprises', 'ee-blink'] }
      ],
      metrics: {
        pop: { v: 99900, year: 2026, area: 'city', tag: 'data', src: 'https://andmed.stat.ee/en/stat/rahvastik__rahvastikunaitajad-ja-koosseis__rahvaarv-ja-rahvastiku-koosseis/RV0291U', by: 'Statistics Estonia, RV0291U population by administrative unit, 1 January 2026', seen: '2026-10-03' },
        gdp: { v: 3.51, cur: 'EUR', year: 2024, area: 'city', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__rahvamajanduse-arvepidamine__sisemajanduse-koguprodukt-(skp)__regionaalne-sisemajanduse-koguprodukt/RAA0050', by: 'Statistics Estonia, RAA0050 GDP by county, Tartu city (EUR 3,510 million)', seen: '2026-10-03' },
        wage: { v: 2229, cur: 'EUR', basis: 'mean', year: 2025, area: 'city', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__palk-ja-toojeukulu__palk__aastastatistika/PA107', by: 'Statistics Estonia, PA107 average monthly gross wages by administrative unit, Tartu city', seen: '2026-10-03' },
        rent: { v: 557, cur: 'EUR', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Tartu', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],
  work: [
    { k: 'Where demand is now', c: ['ee-ict', 'ee-startups', 'ee-q2-employers'] },
    { k: 'Entry pay', c: ['ee-pa101', 'ee-wise-pay'] },
    { k: 'Graduate labour market', c: ['ee-grad-labour'] },
    { k: 'Recruiting calendar', c: ['ee-wise-grad', 'ee-swed-cal', 'ee-intern-comp'] },
    { k: 'Language', c: ['ee-lang-work', 'ee-a2'] },
    { k: 'Tax and net pay', c: ['ee-tax', 'ee-social'] }
  ],
  briefs: [
    ['countries/ee-estonia.md', 'Country brief: hubs, employers, pay and standing']
  ],
  gaps: [
    'All Estonian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/estonia/estonia_visas_immigration_guide.md.',
    'No Tallinn-only employment figure for ICT, AI or data roles could be read: Eurostat’s count is for the metropolitan region (Harju County) and for 2022, and Statistics Estonia counts firms, not jobs, by municipality.',
    'AI, data science, analytics, management, marketing and accounting are not rated: no source read measures them by city.',
    'The Startup Genome ranking of Tallinn is known only as a band (31–40 among emerging ecosystems); the StartupBlink city ranking was read in a state agency’s summary because the ranking site could not be read directly.',
    'Recruiting calendars were read only for Wise; no graduate programme page for Bolt, the banks or the Big Four was found.',
    'Swedbank is placed in Tallinn by the address on its own site; SEB and Luminor are not listed as employers because no source we can cite was read.',
    'The graduate exemptions date from a 2018 Interior Ministry notice; the current Police and Border Guard page lists graduates as a separate ground without restating the terms.'
  ],
  claims: {
    'ee-a2': { t: 'After five years on an employment permit, extending it requires Estonian at level A2.', tag: 'data', src: 'https://www.politsei.ee/en/instructions/residence-permit-for-employment', by: 'Police and Border Guard Board', seen: '2026-10-02' },
    'ee-swed-cal': { t: 'Swedbank’s Kick Start traineeships and junior roles in Estonia, Latvia and Lithuania are open all year, and the bank hires most actively from February to May; the trainee contract is fixed-term and pays €1,000–1,500 gross a month in Estonia.', tag: 'employer-stated', src: 'https://www.swedbank.com/work-with-us/kick-start-your-career.html', by: 'Swedbank, Kick Start your career', seen: '2026-10-08' },
    'ee-intern-comp': { t: 'Summer placements are often compulsory in a degree and heavily contested: Telia had over 1,600 applicants this year for about 4% placed, and Coop Pank over 1,000 for 16 places.', tag: 'employer-stated', src: 'https://news.err.ee/1610026666/students-face-fierce-competition-for-internships', by: 'ERR News, students face fierce competition for internships', seen: '2026-10-08' },
    'ee-lang-work': { t: 'The state agency’s English-language job board listed offers from Bolt (105), Wise (58) and Playtech (13) on 8 October 2026, so software and start-up work is in English; outside them, employers typically work in Estonian.', tag: 'practitioner consensus', src: 'https://www.workinestonia.com/', by: 'Work in Estonia, job board (employer counts on 8 October 2026)', seen: '2026-10-08' },
    'ee-ict': { t: 'About 36,000 people worked in information and communication in June 2024, 22,000 of them in programming; 600 programming jobs went in a year, and the number of 20-to-29-year-olds in the field fell from 6,130 to 5,070 between 2022 and 2024.', tag: 'data', src: 'https://www.stat.ee/en/news/young-workers-are-turning-away-information-and-communication-sector', by: 'Statistics Estonia, 17 Jul 2024', seen: '2026-10-02' },
    'ee-startups': { t: 'Estonia’s start-up sector employed 15,023 people in the third quarter of 2025, 1% more than a year earlier.', tag: 'data', src: 'https://startupestonia.ee/the-third-quarter-of-2025-for-the-estonian-startup-sector-productivity-gains-tax-resilience-and-deeptech-momentum/', by: 'Startup Estonia (state programme), from Tax and Customs Board data, 25 Nov 2025', seen: '2026-10-02' },
    'ee-wise': { t: 'Wise and Bolt lead the sector’s hiring: in the year to mid-2025 Wise added 178 staff in Estonia and Bolt 80.', tag: 'data', src: 'https://startupestonia.ee/the-first-half-of-2025-for-the-estonian-startup-sector-maturing-through-efficiency-and-adaptation/', by: 'Startup Estonia, 4 Sep 2025', seen: '2026-10-02' },
    'ee-harju': { t: 'Harju County, which includes Tallinn, has about 45% of Estonia’s population and over half of the companies founded each year.', tag: 'data', src: 'https://investinestonia.com/regions/north-estonia/harju-county/', by: 'Invest in Estonia (state agency), Harju County', seen: '2026-10-02' },
    'ee-ulemiste': { t: 'Ülemiste City, a business campus in Tallinn, says 18,000 people work, study and live in its community.', tag: 'employer-stated', src: 'https://www.ulemistecity.ee/en/', by: 'Ülemiste City', seen: '2026-10-02' },
    'ee-tartu': { t: 'The University of Tartu presented its deep-tech spin-offs and research projects at Startup Day 2026, with the Tartu Science Park among the support offered to founders.', tag: 'employer-stated', src: 'https://ut.ee/en/news/university-tartu-introduced-deep-tech-companies-and-research-projects-startup-day', by: 'University of Tartu', seen: '2026-10-02' },
    'ee-tax': { t: 'Income tax is 22%; from 2026 the first €700 a month (€8,400 a year) is tax-free for everyone, whatever their income.', tag: 'data', src: 'https://www.emta.ee/en/private-client/taxes-and-payment/tax-incentives/calculation-basic-exemption', by: 'Estonian Tax and Customs Board (updated 26 Jun 2026)', seen: '2026-10-02' },
    'ee-social': { t: 'On top of gross pay the employer pays 33% social tax; employees pay 1.6% unemployment insurance and, by default, 2% into a funded pension.', tag: 'data', src: 'https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes', by: 'Estonian Tax and Customs Board, income and social taxes', seen: '2026-10-02' },
    'ee-metro-emp': { t: 'Eurostat counts 28,900 people employed in information and communication in the Tallinn metropolitan region (Harju County) in 2022, 79% of Estonia’s 36,500, and 14,000 in finance and insurance, 83% of 16,800.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/met_10r_3emp?format=JSON&lang=EN&metroreg=EE001MC&wstatus=EMP&nace_r2=J&nace_r2=K&time=2022', by: 'Eurostat, met_10r_3emp metropolitan regions: employment by activity, 2022', seen: '2026-10-03' },
    'ee-enterprises': { t: 'In 2025 Tallinn had 8,997 of Estonia’s 12,085 enterprises in telecommunications, computer programming and information services (74%) and 2,712 of its 3,824 financial and insurance enterprises (71%); Tartu city had 591 and 149, the next largest after Tallinn in ICT.', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__majandusuksused__ettevetjad/ER0308', by: 'Statistics Estonia, ER0308 enterprises by administrative unit and economic activity (EMTAK 2025), 2025', seen: '2026-10-03' },
    'ee-pa101': { t: 'In 2025 the average gross monthly wage in information and communication was €3,651 (median €3,115; the lowest tenth earned under €1,246) against €2,092 for the whole economy; financial and insurance activities averaged €3,338 (median €2,832), and the two sectors employed 28,658 and 14,124 people.', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__palk-ja-toojeukulu__palk__aastastatistika/PA101', by: 'Statistics Estonia, PA101 average gross wages, median and deciles by economic activity, 2025', seen: '2026-10-03' },
    'ee-tartu-econ': { t: 'In 2024 Tallinn produced €20.67 billion of GDP (51.9% of Estonia’s, €45,223 a head) and Tartu city €3.51 billion (8.8%, €34,803 a head), against €29,036 a head for the country.', tag: 'data', src: 'https://andmed.stat.ee/en/stat/majandus__rahvamajanduse-arvepidamine__sisemajanduse-koguprodukt-(skp)__regionaalne-sisemajanduse-koguprodukt/RAA0050', by: 'Statistics Estonia, RAA0050 GDP by county', seen: '2026-10-03' },
    'ee-q2-employers': { t: 'At the end of June 2026 the Estonian start-up sector had 17,084 employees on the Tax and Customs Board’s register; the largest staff counts included Wise 2,419, Bolt 878, Playtech 662, Microsoft Estonia (Skype) 393, Pipedrive 373, Coolbet 331, Veriff 301, Milrem 286 and Cybernetica 241 (board members excluded, so group staff elsewhere are not counted).', tag: 'data', src: 'https://500.superangel.io/?for=Q2-2026&sortBy=employees&sortIn=desc', by: 'Superangel 500, from Estonian Tax and Customs Board quarterly data, Q2 2026', seen: '2026-10-03' },
    'ee-wise-office': { t: 'Wise describes Tallinn as one of Europe’s most exciting tech hubs and the home of its largest office, in Krulli.', tag: 'employer-stated', src: 'https://wise.jobs/our-locations', by: 'Wise careers, our locations', seen: '2026-10-03' },
    'ee-wise-grad': { t: 'Wise’s graduate roles are for final-year students or people who graduated a year ago; all start in September, as full-time employees, and the engineering route is a bootcamp followed by a nine-month academy; interns are penultimate-year students for ten paid summer weeks.', tag: 'employer-stated', src: 'https://wise.jobs/wisestart-programs', by: 'Wise careers, early careers programmes', seen: '2026-10-03' },
    'ee-wise-pay': { t: 'A Wise Product Academy 2026 role in Tallinn, advertised in 2025, offered a gross salary of €3,916 a month plus a share package (the advert was removed on 3 November 2025).', tag: 'employer-stated', src: 'https://builtin.com/job/product-academy-2026/7318301', by: 'Wise job advert for the Product Academy 2026, republished by Built In', seen: '2026-10-03' },
    'ee-bolt-hq': { t: 'Bolt says it has a team of over 4,000 people, based at its headquarters in Tallinn and its key hubs in London, Warsaw, Bucharest and Berlin.', tag: 'employer-stated', src: 'https://bolt.eu/en/careers/', by: 'Bolt careers page', seen: '2026-10-03' },
    'ee-genome': { t: 'Startup Genome’s 2026 report places Tallinn in the 31–40 band of its emerging-ecosystems ranking, which covers ecosystems outside the Top 40 mature list, after a climb of more than 10 positions; in Europe it puts London at an ecosystem value of $438 billion with 72 unicorns, Paris at $169 billion and Berlin at $89 billion.', tag: 'practitioner consensus', src: 'https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/emerging-ecosystems-ranking-2026-top-100', by: 'Startup Genome, Global Startup Ecosystem Report 2026 (emerging ecosystems ranking; Europe chapter)', seen: '2026-10-03' },
    'ee-blink': { t: 'The 2026 StartupBlink index ranks Estonia 12th in the world and 5th in the EU, Tallinn 53rd among cities (the top city in the eastern EU) and Tartu 421st; Estonia is 10th in the world for fintech.', tag: 'employer-stated', src: 'https://investinestonia.com/estonia-holds-place-among-the-worlds-dozen-best-startup-ecosystems/', by: 'Invest in Estonia (state agency) reporting the StartupBlink Global Startup Ecosystem Index 2026, May 2026', seen: '2026-10-03' },
    'ee-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Tallinn 87th of 117 centres and fourth in Eastern Europe and Central Asia, after Astana, Cyprus and Warsaw; for fintech it is 41st, up 27 places.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), tables 1, 11 and 16', seen: '2026-10-03' },
    'ee-eurostat-ict': { t: 'In 2025 ICT specialists were 6.8% of employment in Estonia (47,500 people), against 5.0% in the EU, the fifth highest of the European countries Eurostat lists, after Sweden (8.9%), Luxembourg (8.7%), Finland (7.8%) and the Netherlands (7.2%).', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itspt?format=JSON&lang=EN&geo=EE&time=2025', by: 'Eurostat, isoc_sks_itspt ICT specialists in employment, 2025 (updated 17 Apr 2026)', seen: '2026-10-03' },
    'ee-lhv': { t: 'LHV, a banking group with its registered office at Tartu mnt 2 in Tallinn, says it has more than 1,150 employees.', tag: 'employer-stated', src: 'https://www.lhv.ee/assets/files/investor/LHV_Group_Annual_Report_2025-EN.pdf', by: 'AS LHV Group, consolidated annual report 2025', seen: '2026-10-03' },
    'ee-swed': { t: 'Swedbank AS gives its address as Liivalaia 34, Tallinn.', tag: 'employer-stated', src: 'https://www.swedbank.ee/private/home/about/contact', by: 'Swedbank Estonia, contacts page', seen: '2026-10-03' },
    'ee-banks': { t: 'The largest banks in Estonia by market share are Swedbank, SEB, Luminor, LHV and Coop Pank, and 99% of banking transactions are done online.', tag: 'data', src: 'https://investinestonia.com/business-in-estonia/financing/banks/', by: 'Invest in Estonia (state agency), banks', seen: '2026-10-03' },
    'ee-ccdcoe': { t: 'NATO’s Cooperative Cyber Defence Centre of Excellence is at Filtri tee 5, Tallinn, and its Steering Committee is chaired by the host nation, Estonia.', tag: 'employer-stated', src: 'https://www.ccdcoe.org/about-us/', by: 'NATO CCDCOE, about us and contact details', seen: '2026-10-03' },
    'ee-cyber': { t: 'Cybernetica AS gives its address as Mäealuse 2/1, Tallinn.', tag: 'employer-stated', src: 'https://cyber.ee/', by: 'Cybernetica, contact details', seen: '2026-10-03' },
    'ee-qs': { t: 'In the QS World University Rankings 2027 the University of Tartu is 367th, Tallinn University of Technology (TalTech) 600th and Tallinn University in the 901–950 band; Tartu is Estonia’s highest-ranked university.', tag: 'practitioner consensus', src: 'https://www.studyinestonia.ee/news/estonias-top-universities-named-qs-world-university-rankings', by: 'Study in Estonia (state agency) reporting QS World University Rankings 2027', seen: '2026-10-03' },
    'ee-grad-labour': { t: 'In 2025, 91.0% of Estonian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but unemployment among 15-to-24-year-olds was 20.7% (EU 15.2%), up from 17.3% in 2023.', tag: 'data', src: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&duration=Y_LE3&isced11=ED5-8&age=Y20-34&sex=T&geo=EE&geo=EU27_2020', by: 'Eurostat, edat_lfse_24 and une_rt_a, 2025 (updated 10 Sep 2026)', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'A small labour market concentrated on software and start-ups: about 36,000 people work in information and communication, and the start-up sector — led by Wise and Bolt — employs about 17,000. Tallinn holds about three-quarters of the country’s ICT firms; at European scale it is a recognised secondary centre, at world scale a small one. Tartu adds the main university and deep-tech spin-offs. Official data show fewer young programmers in work since 2022.':
    'Un mercato del lavoro piccolo, concentrato su software e start-up: circa 36.000 persone lavorano nell’informazione e comunicazione, e il settore delle start-up — guidato da Wise e Bolt — ne impiega circa 17.000. Tallinn ha circa tre quarti delle aziende ICT del paese; su scala europea è un polo secondario riconosciuto, su scala mondiale un polo piccolo. Tartu aggiunge l’università principale e gli spin-off deep tech. I dati ufficiali mostrano meno giovani programmatori occupati dal 2022.',
  'Start-ups and fintech':
    'Start-up e fintech',
  'Digital government services':
    'Servizi pubblici digitali',
  'Deep tech':
    'Deep tech',
  'Logistics and manufacturing':
    'Logistica e manifattura',
  'All Estonian immigration, visa, residence permit and salary rules are consolidated from primary sources in visas_immigration/estonia/estonia_visas_immigration_guide.md.':
    'Tutte le regole su immigrazione, visti, permessi di soggiorno e salari in Estonia sono consolidate da fonti primarie in visas_immigration/estonia/estonia_visas_immigration_guide.md.',
  'No Tallinn-only employment figure for ICT, AI or data roles could be read: Eurostat’s count is for the metropolitan region (Harju County) and for 2022, and Statistics Estonia counts firms, not jobs, by municipality.':
    'Non è stato possibile leggere alcun dato sull’occupazione nei ruoli ICT, IA o dati per la sola Tallinn: il conteggio di Eurostat riguarda la regione metropolitana (contea di Harju) e il 2022, e l’istituto di statistica estone conta le aziende, non i posti di lavoro, per comune.',
  'AI, data science, analytics, management, marketing and accounting are not rated: no source read measures them by city.':
    'IA, data science, analytics, management, marketing e contabilità non sono valutati: nessuna fonte letta li misura per città.',
  'The Startup Genome ranking of Tallinn is known only as a band (31–40 among emerging ecosystems); the StartupBlink city ranking was read in a state agency’s summary because the ranking site could not be read directly.':
    'Il posto di Tallinn nella classifica di Startup Genome è noto solo come fascia (31–40 tra gli ecosistemi emergenti); la classifica delle città di StartupBlink è stata letta nel riassunto di un’agenzia statale perché il sito della classifica non si è potuto leggere direttamente.',
  'Recruiting calendars were read only for Wise; no graduate programme page for Bolt, the banks or the Big Four was found.':
    'I calendari delle selezioni sono stati letti solo per Wise; non è stata trovata alcuna pagina dei programmi per laureati di Bolt, delle banche o delle Big Four.',
  'Swedbank is placed in Tallinn by the address on its own site; SEB and Luminor are not listed as employers because no source we can cite was read.':
    'Swedbank è collocata a Tallinn in base all’indirizzo sul suo sito; SEB e Luminor non sono elencate come datori di lavoro perché non è stata letta alcuna fonte citabile.',
  'The graduate exemptions date from a 2018 Interior Ministry notice; the current Police and Border Guard page lists graduates as a separate ground without restating the terms.':
    'Le esenzioni per i laureati risalgono a un avviso del Ministero dell’Interno del 2018; la pagina attuale della Polizia e Guardia di frontiera indica i laureati come motivo a sé, senza ripeterne le condizioni.',
  'Country brief: hubs, employers, pay and standing':
    'Dossier paese: poli, datori di lavoro, stipendi e posizionamento',
  'Software, fintech and the start-up sector':
    'Software, fintech e il settore delle start-up',
  'Fintech and payments':
    'Fintech e pagamenti',
  'Mobility platforms':
    'Piattaforme di mobilità',
  'Cybersecurity':
    'Cybersicurezza',
  'Banking':
    'Banche',
  'Business services':
    'Servizi alle imprese',
  'its largest office is in Tallinn; 2,419 staff in the Estonian register':
    'la sede più grande è a Tallinn; 2.419 dipendenti nel registro estone',
  'headquarters of the mobility and delivery platform':
    'sede centrale della piattaforma di mobilità e consegne',
  'online-gaming software; 662 staff in the register':
    'software per il gioco online; 662 dipendenti nel registro',
  '373, 301 and 393 staff in the register':
    '373, 301 e 393 dipendenti nel registro',
  'banking group registered in Tallinn, more than 1,150 staff':
    'gruppo bancario con sede legale a Tallinn, più di 1.150 dipendenti',
  'one of the five largest banks, registered in Tallinn':
    'una delle cinque maggiori banche, con sede legale a Tallinn',
  'cyber-defence research and exercises':
    'ricerca ed esercitazioni di cyber-difesa',
  'security and e-government software, based in Tallinn':
    'software per la sicurezza e l’e-government, con sede a Tallinn',
  'business campus with 18,000 people working, studying and living there':
    'campus d’affari con 18.000 persone che vi lavorano, studiano e vivono',
  'The university city and its deep-tech spin-offs':
    'La città universitaria e i suoi spin-off deep tech',
  'Higher education and research':
    'Università e ricerca',
  'Estonia’s highest-ranked university; spin-offs presented at Startup Day 2026':
    'l’università meglio classificata dell’Estonia; spin-off presentati allo Startup Day 2026',
  'incubator':
    'incubatore',
  'Entry pay':
    'Stipendio d’ingresso',
  'Graduate labour market':
    'Mercato del lavoro per i laureati',
  'Swedbank’s Kick Start traineeships and junior roles in Estonia, Latvia and Lithuania are open all year, and the bank hires most actively from February to May; the trainee contract is fixed-term and pays €1,000–1,500 gross a month in Estonia.':
    'I tirocini Kick Start e i ruoli junior di Swedbank in Estonia, Lettonia e Lituania sono aperti tutto l’anno, e la banca assume più attivamente da febbraio a maggio; il contratto da trainee è a termine e in Estonia paga 1.000–1.500 € lordi al mese.',
  'Summer placements are often compulsory in a degree and heavily contested: Telia had over 1,600 applicants this year for about 4% placed, and Coop Pank over 1,000 for 16 places.':
    'I tirocini estivi sono spesso obbligatori nel corso di studi e molto contesi: Telia ha avuto quest’anno oltre 1.600 candidati con circa il 4% inserito, e Coop Pank oltre 1.000 per 16 posti.',
  'The state agency’s English-language job board listed offers from Bolt (105), Wise (58) and Playtech (13) on 8 October 2026, so software and start-up work is in English; outside them, employers typically work in Estonian.':
    'La bacheca in inglese dell’agenzia statale elencava l’8 ottobre 2026 offerte di Bolt (105), Wise (58) e Playtech (13), quindi il lavoro nel software e nelle start-up è in inglese; fuori da questi, i datori di solito lavorano in estone.',
  'After five years on an employment permit, extending it requires Estonian at level A2.':
    'Dopo cinque anni con un permesso per lavoro, per rinnovarlo serve l’estone di livello A2.',
  'About 36,000 people worked in information and communication in June 2024, 22,000 of them in programming; 600 programming jobs went in a year, and the number of 20-to-29-year-olds in the field fell from 6,130 to 5,070 between 2022 and 2024.':
    'A giugno 2024 circa 36.000 persone lavoravano nell’informazione e comunicazione, 22.000 delle quali nella programmazione; in un anno sono spariti 600 posti di programmazione, e i 20-29enni nel settore sono scesi da 6.130 a 5.070 tra il 2022 e il 2024.',
  'Estonia’s start-up sector employed 15,023 people in the third quarter of 2025, 1% more than a year earlier.':
    'Nel terzo trimestre 2025 il settore estone delle start-up impiegava 15.023 persone, l’1% in più rispetto a un anno prima.',
  'Wise and Bolt lead the sector’s hiring: in the year to mid-2025 Wise added 178 staff in Estonia and Bolt 80.':
    'Wise e Bolt guidano le assunzioni del settore: nell’anno fino a metà 2025 Wise ha aggiunto 178 dipendenti in Estonia e Bolt 80.',
  'Harju County, which includes Tallinn, has about 45% of Estonia’s population and over half of the companies founded each year.':
    'La contea di Harju, che comprende Tallinn, ha circa il 45% della popolazione estone e oltre la metà delle aziende fondate ogni anno.',
  'Ülemiste City, a business campus in Tallinn, says 18,000 people work, study and live in its community.':
    'Ülemiste City, un campus d’affari a Tallinn, dichiara che 18.000 persone lavorano, studiano e vivono nella sua comunità.',
  'The University of Tartu presented its deep-tech spin-offs and research projects at Startup Day 2026, with the Tartu Science Park among the support offered to founders.':
    'L’Università di Tartu ha presentato i suoi spin-off deep tech e i progetti di ricerca allo Startup Day 2026, con il Parco scientifico di Tartu tra i sostegni offerti ai fondatori.',
  'Income tax is 22%; from 2026 the first €700 a month (€8,400 a year) is tax-free for everyone, whatever their income.':
    'L’imposta sul reddito è del 22%; dal 2026 i primi 700 € al mese (8.400 € all’anno) sono esenti per tutti, qualunque sia il reddito.',
  'On top of gross pay the employer pays 33% social tax; employees pay 1.6% unemployment insurance and, by default, 2% into a funded pension.':
    'Oltre allo stipendio lordo il datore di lavoro versa il 33% di imposta sociale; i dipendenti pagano l’1,6% di assicurazione contro la disoccupazione e, salvo diversa scelta, il 2% a una pensione a capitalizzazione.',
  'Eurostat counts 28,900 people employed in information and communication in the Tallinn metropolitan region (Harju County) in 2022, 79% of Estonia’s 36,500, and 14,000 in finance and insurance, 83% of 16,800.':
    'Eurostat conta 28.900 occupati nell’informazione e comunicazione nella regione metropolitana di Tallinn (contea di Harju) nel 2022, il 79% dei 36.500 dell’Estonia, e 14.000 in finanza e assicurazioni, l’83% di 16.800.',
  'In 2025 Tallinn had 8,997 of Estonia’s 12,085 enterprises in telecommunications, computer programming and information services (74%) and 2,712 of its 3,824 financial and insurance enterprises (71%); Tartu city had 591 and 149, the next largest after Tallinn in ICT.':
    'Nel 2025 Tallinn contava 8.997 delle 12.085 imprese estoni di telecomunicazioni, programmazione e servizi informativi (74%) e 2.712 delle sue 3.824 imprese finanziarie e assicurative (71%); la città di Tartu ne aveva 591 e 149, la seconda per numero di imprese ICT dopo Tallinn.',
  'In 2025 the average gross monthly wage in information and communication was €3,651 (median €3,115; the lowest tenth earned under €1,246) against €2,092 for the whole economy; financial and insurance activities averaged €3,338 (median €2,832), and the two sectors employed 28,658 and 14,124 people.':
    'Nel 2025 la retribuzione lorda mensile media nell’informazione e comunicazione era di 3.651 € (mediana 3.115 €; il decimo più basso guadagnava meno di 1.246 €) contro 2.092 € per l’intera economia; le attività finanziarie e assicurative erano a 3.338 € di media (mediana 2.832 €), e i due settori impiegavano 28.658 e 14.124 persone.',
  'In 2024 Tallinn produced €20.67 billion of GDP (51.9% of Estonia’s, €45,223 a head) and Tartu city €3.51 billion (8.8%, €34,803 a head), against €29,036 a head for the country.':
    'Nel 2024 Tallinn ha prodotto 20,67 miliardi di € di PIL (il 51,9% di quello estone, 45.223 € pro capite) e la città di Tartu 3,51 miliardi (l’8,8%, 34.803 € pro capite), contro 29.036 € pro capite per il paese.',
  'At the end of June 2026 the Estonian start-up sector had 17,084 employees on the Tax and Customs Board’s register; the largest staff counts included Wise 2,419, Bolt 878, Playtech 662, Microsoft Estonia (Skype) 393, Pipedrive 373, Coolbet 331, Veriff 301, Milrem 286 and Cybernetica 241 (board members excluded, so group staff elsewhere are not counted).':
    'A fine giugno 2026 il settore estone delle start-up aveva 17.084 dipendenti nel registro dell’Agenzia delle imposte e delle dogane; tra i maggiori organici figuravano Wise 2.419, Bolt 878, Playtech 662, Microsoft Estonia (Skype) 393, Pipedrive 373, Coolbet 331, Veriff 301, Milrem 286 e Cybernetica 241 (esclusi i membri dei consigli, quindi il personale dei gruppi all’estero non è contato).',
  'Wise describes Tallinn as one of Europe’s most exciting tech hubs and the home of its largest office, in Krulli.':
    'Wise descrive Tallinn come uno dei poli tecnologici più interessanti d’Europa e sede del suo ufficio più grande, a Krulli.',
  'Wise’s graduate roles are for final-year students or people who graduated a year ago; all start in September, as full-time employees, and the engineering route is a bootcamp followed by a nine-month academy; interns are penultimate-year students for ten paid summer weeks.':
    'I ruoli per laureati di Wise sono per studenti dell’ultimo anno o persone laureate da un anno; tutti iniziano a settembre, come dipendenti a tempo pieno, e il percorso di ingegneria è un bootcamp seguito da un’academy di nove mesi; gli stagisti sono studenti del penultimo anno per dieci settimane estive retribuite.',
  'A Wise Product Academy 2026 role in Tallinn, advertised in 2025, offered a gross salary of €3,916 a month plus a share package (the advert was removed on 3 November 2025).':
    'Un ruolo nella Product Academy 2026 di Wise a Tallinn, pubblicizzato nel 2025, offriva uno stipendio lordo di 3.916 € al mese più un pacchetto di azioni (l’annuncio è stato rimosso il 3 novembre 2025).',
  'Bolt says it has a team of over 4,000 people, based at its headquarters in Tallinn and its key hubs in London, Warsaw, Bucharest and Berlin.':
    'Bolt dichiara di avere un team di oltre 4.000 persone, con base nella sede centrale di Tallinn e nei poli principali di Londra, Varsavia, Bucarest e Berlino.',
  'Startup Genome’s 2026 report places Tallinn in the 31–40 band of its emerging-ecosystems ranking, which covers ecosystems outside the Top 40 mature list, after a climb of more than 10 positions; in Europe it puts London at an ecosystem value of $438 billion with 72 unicorns, Paris at $169 billion and Berlin at $89 billion.':
    'Il rapporto 2026 di Startup Genome colloca Tallinn nella fascia 31–40 della classifica degli ecosistemi emergenti, che riguarda gli ecosistemi fuori dall’elenco dei primi 40 più maturi, dopo una salita di oltre 10 posizioni; in Europa indica Londra a un valore di ecosistema di 438 miliardi di dollari con 72 unicorni, Parigi a 169 miliardi e Berlino a 89 miliardi.',
  'The 2026 StartupBlink index ranks Estonia 12th in the world and 5th in the EU, Tallinn 53rd among cities (the top city in the eastern EU) and Tartu 421st; Estonia is 10th in the world for fintech.':
    'L’indice StartupBlink 2026 colloca l’Estonia al 12º posto nel mondo e al 5º nell’UE, Tallinn al 53º posto tra le città (la prima nell’UE orientale) e Tartu al 421º; l’Estonia è 10ª al mondo per il fintech.',
  'The Global Financial Centres Index 40 (September 2026) ranks Tallinn 87th of 117 centres and fourth in Eastern Europe and Central Asia, after Astana, Cyprus and Warsaw; for fintech it is 41st, up 27 places.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Tallinn all’87º posto su 117 centri e al quarto in Europa orientale e Asia centrale, dopo Astana, Cipro e Varsavia; per il fintech è al 41º posto, in salita di 27 posizioni.',
  'In 2025 ICT specialists were 6.8% of employment in Estonia (47,500 people), against 5.0% in the EU, the fifth highest of the European countries Eurostat lists, after Sweden (8.9%), Luxembourg (8.7%), Finland (7.8%) and the Netherlands (7.2%).':
    'Nel 2025 gli specialisti ICT erano il 6,8% dell’occupazione in Estonia (47.500 persone), contro il 5,0% nell’UE, il quinto valore più alto tra i paesi europei elencati da Eurostat, dopo Svezia (8,9%), Lussemburgo (8,7%), Finlandia (7,8%) e Paesi Bassi (7,2%).',
  'LHV, a banking group with its registered office at Tartu mnt 2 in Tallinn, says it has more than 1,150 employees.':
    'LHV, un gruppo bancario con sede legale in Tartu mnt 2 a Tallinn, dichiara di avere più di 1.150 dipendenti.',
  'Swedbank AS gives its address as Liivalaia 34, Tallinn.':
    'Swedbank AS indica come indirizzo Liivalaia 34, Tallinn.',
  'The largest banks in Estonia by market share are Swedbank, SEB, Luminor, LHV and Coop Pank, and 99% of banking transactions are done online.':
    'Le maggiori banche estoni per quota di mercato sono Swedbank, SEB, Luminor, LHV e Coop Pank, e il 99% delle operazioni bancarie avviene online.',
  'NATO’s Cooperative Cyber Defence Centre of Excellence is at Filtri tee 5, Tallinn, and its Steering Committee is chaired by the host nation, Estonia.':
    'Il Centro di eccellenza NATO per la cyber-difesa cooperativa ha sede in Filtri tee 5, a Tallinn, e il suo comitato direttivo è presieduto dal paese ospitante, l’Estonia.',
  'Cybernetica AS gives its address as Mäealuse 2/1, Tallinn.':
    'Cybernetica AS indica come indirizzo Mäealuse 2/1, Tallinn.',
  'In the QS World University Rankings 2027 the University of Tartu is 367th, Tallinn University of Technology (TalTech) 600th and Tallinn University in the 901–950 band; Tartu is Estonia’s highest-ranked university.':
    'Nel QS World University Rankings 2027 l’Università di Tartu è 367ª, l’Università tecnologica di Tallinn (TalTech) 600ª e l’Università di Tallinn nella fascia 901–950; Tartu è l’università meglio classificata dell’Estonia.',
  'In 2025, 91.0% of Estonian tertiary graduates aged 20–34 who finished within the last three years were in work (EU 85.3%), but unemployment among 15-to-24-year-olds was 20.7% (EU 15.2%), up from 17.3% in 2023.':
    'Nel 2025 il 91,0% dei laureati estoni di 20–34 anni che avevano finito gli studi da meno di tre anni lavorava (UE 85,3%), ma la disoccupazione tra i 15-24enni era del 20,7% (UE 15,2%), in aumento dal 17,3% del 2023.'
});

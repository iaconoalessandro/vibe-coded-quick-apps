/* Atlas record: Taiwan. Read 3 October 2026; log P68
 * (research/verification/round-4h.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only. Taiwan had no coverage in the research library. The
 * work rules are read on the Workforce Development Agency's English pages; the
 * Taipei count comes from the central bank's lists of domestic banks and
 * insurers (head-office addresses counted locally).
 * Hubs for further cities were added on 3 October 2026 from city-level statistics
 * (log: research/verification/round-4k.md).
 * Deepened on 3 October 2026 (log: research/verification/round-5e.md): DGBAS pay and population statistics,
 * Ministry of Labor new-entrant pay, GFCI 40. Metrics: pop and wage are the city; no GDP by city was found. */

ATLAS.add({
  id: 'TW',
  checked: '2026-10-03',
  log: 'P68',
  summary: 'Unusually open for graduates of its own universities: they can now stay up to two years after graduating and work in any job without a work permit. After that, a points test rewards pay and Chinese. Taipei is the finance capital: 35 of the 40 domestic banks have their head office there.',
  sectors: ['Semiconductors', 'Electronics manufacturing', 'Banking and insurance', 'Technology', 'Trade'],
  roles: ['finance'],
  hubs: [
    {
      id: 'taipei', name: 'Taipei', lat: 25.03, lon: 121.56,
      knownFor: 'Taiwan’s banking and insurance headquarters city',
      why: ['tw-tpe', 'tw-gfci', 'tw-wage-county', 'tw-pop'],
      sectors: ['Banking', 'Insurance', 'Financial holding companies', 'Technology'],
      employers: [
        { t: 'Domestic banks', note: '35 of 40 have their head office in Taipei', c: 'tw-tpe' },
        { t: 'Domestic property and casualty insurers', note: 'all 14 are based in Taipei', c: 'tw-tpe' }
      ],
      demand: {
        finance: ['dominant', 'tw-tpe'],
        business: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap',
        analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ['dominant', 'tw-tpe'],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: 'finance', s: [5, 2, 2], c: ['tw-tpe', 'tw-gfci'] }
      ],
      metrics: {
        pop: { v: 2441000, year: 2026, area: 'city', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=4721&s=235805', by: 'Directorate-General of Budget, Accounting and Statistics, usual resident population on 1 January 2026, Taipei City (in thousands)', seen: '2026-10-03' },
        wage: { v: 78917, cur: 'TWD', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=3703&s=235514', by: 'Directorate-General of Budget, Accounting and Statistics, average annual total pay of full-time Taiwanese employees by workplace, 2024, Taipei City (NT$947,004 a year ÷ 12)', seen: '2026-10-03' },
        rent: { v: 32250, cur: 'TWD', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Taipei', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-04' }
      },
      programmes: []
    },
    {
      id: 'hsinchu', name: 'Hsinchu', lat: 24.80, lon: 120.97,
      knownFor: 'Taiwan’s first science park and its chip-making base',
      why: ['tw-hsinchu', 'tw-tsmc', 'tw-wage-county', 'tw-pop', 'tw-taichung'],
      sectors: ['Semiconductors', 'Technology', 'Higher education'],
      employers: [
        { name: 'TSMC', note: 'the chipmaker’s registered business address is in Hsinchu Science Park', c: 'tw-tsmc' },
        { t: 'Companies in the Hsinchu science parks', note: 'over 600, more than 160,000 staff', c: 'tw-hsinchu' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [4, 2, 2], c: ['tw-hsinchu', 'tw-taichung'] }
      ],
      metrics: {
        pop: { v: 509000, year: 2026, area: 'city', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=4721&s=235805', by: 'Directorate-General of Budget, Accounting and Statistics, usual resident population on 1 January 2026, Hsinchu City (in thousands)', seen: '2026-10-03' },
        wage: { v: 108167, cur: 'TWD', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=3703&s=235514', by: 'Directorate-General of Budget, Accounting and Statistics, average annual total pay of full-time Taiwanese employees by workplace, 2024, Hsinchu City (NT$1,298,004 a year ÷ 12)', seen: '2026-10-03' }
      },
      programmes: []
    },
    {
      id: 'taichung', name: 'Taichung', lat: 24.15, lon: 120.67,
      knownFor: 'Central Taiwan’s science park for precision machinery and optoelectronics',
      why: ['tw-taichung', 'tw-wage-county', 'tw-pop'],
      sectors: ['Machinery', 'Semiconductors', 'Manufacturing'],
      employers: [
        { t: 'Manufacturers in the Central Taiwan Science Park', note: '219 firms, 51,827 staff (2020)', c: 'tw-taichung' }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: 'it', s: [3, 2, 1], c: ['tw-taichung', 'tw-hsinchu'] }
      ],
      metrics: {
        pop: { v: 3076000, year: 2026, area: 'city', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=4721&s=235805', by: 'Directorate-General of Budget, Accounting and Statistics, usual resident population on 1 January 2026, Taichung City (in thousands)', seen: '2026-10-03' },
        wage: { v: 56083, cur: 'TWD', basis: 'mean', year: 2024, area: 'city', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=3703&s=235514', by: 'Directorate-General of Budget, Accounting and Statistics, average annual total pay of full-time Taiwanese employees by workplace, 2024, Taichung City (NT$672,996 a year ÷ 12)', seen: '2026-10-03' },
        rent: { v: 12700, cur: 'TWD', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/cost-of-living/in/Taichung', by: 'Numbeo (crowd-sourced), one-bedroom flat in the city centre (Oct 2026)', seen: '2026-10-03' }
      },
      programmes: []
    }
  ],

  work: [
    { k: 'Language', c: ['tw-points', 'tw-lang'] },
    { k: 'Recruiting calendar', c: ['tw-calendar'] },
    { k: 'Where demand is now', c: ['tw-tpe', 'tw-hsinchu', 'tw-taichung', 'tw-demand'] },
    { k: 'Graduate labour market', c: ['tw-labour'] },
    { k: 'Entry pay', c: ['tw-newgrad'] },
    { k: 'Pay across cities', c: ['tw-wage-county'] }
  ],

  briefs: [
    ['countries/tw-taiwan.md', 'Country brief: three hubs, pay and standing']
  ],
  gaps: [
    'Taiwan was not covered by the research library before this record.',
    'Technology demand is not rated.',
    'Whether employers expect Mandarin for entry roles was not researched; immigration rules, fees and tax are consolidated in visas_immigration/taiwan/.',
    'The two-year permit-free stay took full legal effect under the amended Foreign Professionals Act on 1 January 2026 (WDA circular 4 Feb 2026).',
    'Apart from the central bank’s lists of banks and insurers, TSMC is the only employer named, from its US Securities and Exchange Commission filing; MediaTek’s head office could not be confirmed from a source we can cite. No family is rated in Hsinchu or Taichung, so their standing rests on the science parks’ own statistics.',
    'Taiwan’s statistics office publishes no GDP by city or county that was found, so no hub has a GDP figure; wages are the 2024 average annual total pay of full-time Taiwanese employees by workplace city (Hsinchu County, which shares the science park, is separate), population is the usual resident population, and Hsinchu has no Numbeo rent.',
    'No family is rated in Hsinchu or Taichung: the science-park figures read give companies and staff, not hiring by role. Tainan and Kaohsiung are not mapped: the Southern Taiwan Science Park and Kaohsiung port statistics could not be read.'
  ],

  claims: {
    'tw-points': { t: 'Graduates of Taiwanese universities who later need a work permit can qualify with 70 points, scored on degree, pay, experience, Chinese and languages; the Ministry of Labor formally abolished annual numerical quotas on 1 August 2024.', tag: 'data', src: 'https://ezworktaiwan.wda.gov.tw/en/cp.aspx?n=8E87472D9CB255FF&s=BCA6B6757A58F5B3', by: 'Workforce Development Agency, EZ Work Taiwan (quota abolished 1 Aug 2024)', seen: '2026-10-05' },
    'tw-tpe': { t: 'Of Taiwan’s 40 domestic banks, 35 have their head office in Taipei, and all 14 domestic property and casualty insurers are based there.', tag: 'data', src: 'https://www.cbc.gov.tw/en/cp-495-885-9CF67-2.html', by: 'Central Bank of the Republic of China (Taiwan), lists of domestic banks and of property and casualty insurers (updated 1 Oct 2026); head offices counted by Admetia', seen: '2026-10-03' },
    'tw-tsmc': { t: 'TSMC’s filings with the US Securities and Exchange Commission give its business address as No. 8, Li-Hsin Road 6, Hsinchu Science Park, Hsinchu, Taiwan; its latest annual report on Form 20-F was filed on 16 April 2026.', tag: 'employer-stated', src: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001046179&type=20-F', by: 'TSMC, company filings on SEC EDGAR', seen: '2026-10-04' },
    'tw-hsinchu': { t: 'The Hsinchu Science Park Bureau oversees six parks where over 600 companies have been approved to operate, employing more than 160,000 people, with average annual revenue above NT$1,000 billion in recent years.', tag: 'data', src: 'https://web.sipa.gov.tw/CSRWeb/eng/about01.jsp', by: 'Hsinchu Science Park Bureau, about HSPB', seen: '2026-10-03' },
    'tw-taichung': { t: 'The Central Taiwan Science Park, centred on Taichung, had sales of over NT$936 billion in 2020 and more than 51,827 employees at 219 manufacturers.', tag: 'data', src: 'https://www.ctsp.gov.tw/english/01about/abo_park_profile.aspx?v=20&fr=768&no=771', by: 'Central Taiwan Science Park Bureau, park profile', seen: '2026-10-03' },
    'tw-gfci': { t: 'The Global Financial Centres Index 40 (September 2026) ranks Taipei 42nd of the centres it lists (rating 717), up nine places from 51st.', tag: 'practitioner consensus', src: 'https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf', by: 'Z/Yen and Long Finance, Global Financial Centres Index 40 (September 2026), table 1', seen: '2026-10-03' },
    'tw-wage-county': { t: 'In 2024 the average annual total pay of full-time Taiwanese employees, by workplace, was NT$1,298,000 in Hsinchu City, NT$1,003,000 in Hsinchu County, NT$947,000 in Taipei City and NT$673,000 in Taichung City, against NT$776,000 nationally; the median was NT$902,000 in Hsinchu City, NT$735,000 in Taipei and NT$517,000 in Taichung.', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=3703&s=235514', by: 'Directorate-General of Budget, Accounting and Statistics, 2024 median and distribution of annual total pay of employees in industry and services (25 Nov 2025)', seen: '2026-10-03' },
    'tw-newgrad': { t: 'In 2024 new entrants to the workforce earned NT$37,000 a month on average (up 6.4%): NT$34,000 for university graduates and NT$52,000 for graduate-school graduates; the median was NT$33,000, and NT$49,000 for graduate school.', tag: 'data', src: 'https://www.mol.gov.tw/1607/1632/1633/80217/', by: 'Ministry of Labor, 2024 pay statistics for new entrants (in Chinese)', seen: '2026-10-03' },
    'tw-lang': { t: 'German companies in Taiwan look for bilingual staff who can at least communicate in English, but graduates’ English is often only passive; returning graduates from abroad form a bilingual pool in high demand.', tag: 'practitioner consensus', src: 'https://www.gtai.de/de/trade/taiwan/wirtschaftsumfeld/personalsuche-und-personalmanagement-1816204', by: 'Germany Trade & Invest, Taiwan: recruiting and personnel management', seen: '2026-10-08' },
    'tw-calendar': { t: 'TSMC’s 2026 campus recruitment took applications to 30 April with interviews to 30 June, and its summer internship (6 July to 28 August) took applications to 8 May; the National Taiwan University campus fair was held on 7 March 2026 with 347 companies and more than 40,000 positions.', tag: 'employer-stated', src: 'https://nthu-tsmc.site.nthu.edu.tw/p/16-1578-303043.php?Lang=zh-tw', by: 'National Tsing Hua University, TSMC 2026 campus recruitment; 1111 Job Bank news on the NTU VISION 2026 fair', seen: '2026-10-08' },
    'tw-demand': { t: 'TSMC planned to hire around 8,000 engineers and technicians in 2026, and 104 Job Bank listed 21,762 finance, accounting and tax openings in May 2026, up 6.0% on a year earlier.', tag: 'data', src: 'https://www.taiwannews.com.tw/en/news/6316009', by: 'Taiwan News on TSMC; Business Today, 12 May 2026, on 104 Job Bank', seen: '2026-10-08' },
    'tw-labour': { t: 'Taiwan’s unemployment rate was 3.32% in August 2026 (seasonally adjusted) and 11.74% among 15- to 24-year-olds; 147,000 people entered the workforce in 2024, 5.3% fewer than in 2023, and 71.7% of them held a university degree and 19.5% a graduate degree.', tag: 'data', src: 'https://tradingeconomics.com/taiwan/unemployment-rate/news/585587', by: 'Trading Economics, from DGBAS (released 22 September 2026); Ministry of Labor, 2024 new-entrant survey', seen: '2026-10-08' },
    'tw-pop': { t: 'On 1 January 2026 Taichung had 3,076,000 usual residents, Taipei 2,441,000, Hsinchu County 675,000 and Hsinchu City 509,000; the country had 23.71 million.', tag: 'data', src: 'https://www.stat.gov.tw/News_Content.aspx?n=4721&s=235805', by: 'Directorate-General of Budget, Accounting and Statistics, usual resident population on 1 January 2026', seen: '2026-10-03' }
  }
});

if (window.I18N) I18N.add('it', {
  'German companies in Taiwan look for bilingual staff who can at least communicate in English, but graduates’ English is often only passive; returning graduates from abroad form a bilingual pool in high demand.':
    'Le aziende tedesche a Taiwan cercano personale bilingue che sappia almeno comunicare in inglese, ma l’inglese dei laureati è spesso solo passivo; i laureati che tornano dall’estero sono un bacino bilingue molto richiesto.',
  'TSMC’s 2026 campus recruitment took applications to 30 April with interviews to 30 June, and its summer internship (6 July to 28 August) took applications to 8 May; the National Taiwan University campus fair was held on 7 March 2026 with 347 companies and more than 40,000 positions.':
    'Il reclutamento di TSMC nei campus nel 2026 ha raccolto candidature fino al 30 aprile con colloqui fino al 30 giugno, e il suo stage estivo (dal 6 luglio al 28 agosto) ha raccolto candidature fino all’8 maggio; la fiera nel campus della National Taiwan University si è tenuta il 7 marzo 2026 con 347 aziende e più di 40.000 posizioni.',
  'TSMC planned to hire around 8,000 engineers and technicians in 2026, and 104 Job Bank listed 21,762 finance, accounting and tax openings in May 2026, up 6.0% on a year earlier.':
    'TSMC prevedeva di assumere circa 8.000 ingegneri e tecnici nel 2026, e 104 Job Bank elencava 21.762 posizioni di finanza, contabilità e fiscalità a maggio 2026, il 6,0% in più di un anno prima.',
  'Taiwan’s unemployment rate was 3.32% in August 2026 (seasonally adjusted) and 11.74% among 15- to 24-year-olds; 147,000 people entered the workforce in 2024, 5.3% fewer than in 2023, and 71.7% of them held a university degree and 19.5% a graduate degree.':
    'Il tasso di disoccupazione di Taiwan era del 3,32% ad agosto 2026 (destagionalizzato) e dell’11,74% tra i 15-24enni; nel 2024 sono entrate nel mondo del lavoro 147.000 persone, il 5,3% in meno rispetto al 2023, e il 71,7% di loro aveva una laurea e il 19,5% un titolo post-laurea.',
  'Unusually open for graduates of its own universities: they can now stay up to two years after graduating and work in any job without a work permit. After that, a points test rewards pay and Chinese. Taipei is the finance capital: 35 of the 40 domestic banks have their head office there.':
    'Insolitamente aperta per i laureati delle sue università: oggi possono restare fino a due anni dopo la laurea e fare qualsiasi lavoro senza permesso. Dopo, un test a punti premia stipendio e cinese. Taipei è la capitale della finanza: 35 delle 40 banche nazionali vi hanno la sede centrale.',
  'Semiconductors': 'Semiconduttori', 'Electronics manufacturing': 'Produzione elettronica', 'Banking and insurance': 'Banche e assicurazioni', 'Trade': 'Commercio',
  'Taiwan’s banking and insurance headquarters city': 'La città delle sedi centrali di banche e assicurazioni di Taiwan',
  'Banking': 'Banca', 'Financial holding companies': 'Holding finanziarie',
  'Domestic banks': 'Le banche nazionali', '35 of 40 have their head office in Taipei': '35 su 40 hanno la sede centrale a Taipei',
  'Domestic property and casualty insurers': 'Le compagnie assicurative danni nazionali', 'all 14 are based in Taipei': 'tutte e 14 hanno sede a Taipei',
  'Taiwan was not covered by the research library before this record.': 'Taiwan non era coperta dalla biblioteca di ricerca prima di questa scheda.',
  'Technology demand is not rated.':
    'La domanda in tecnologia non è valutata.',
  'Of Taiwan’s 40 domestic banks, 35 have their head office in Taipei, and all 14 domestic property and casualty insurers are based there.':
    'Delle 40 banche nazionali di Taiwan, 35 hanno la sede centrale a Taipei, dove hanno sede anche tutte e 14 le compagnie assicurative danni nazionali.',
  'Taiwan’s first science park and its chip-making base':
    'Il primo parco scientifico di Taiwan e la sua base per i chip',
  'the chipmaker’s registered business address is in Hsinchu Science Park':
    'l’indirizzo legale del produttore di chip si trova nel Parco scientifico di Hsinchu',
  'TSMC’s filings with the US Securities and Exchange Commission give its business address as No. 8, Li-Hsin Road 6, Hsinchu Science Park, Hsinchu, Taiwan; its latest annual report on Form 20-F was filed on 16 April 2026.':
    'La documentazione di TSMC presso la Securities and Exchange Commission statunitense indica come indirizzo legale No. 8, Li-Hsin Road 6, Hsinchu Science Park, Hsinchu, Taiwan; l’ultima relazione annuale (Form 20-F) è stata depositata il 16 aprile 2026.',
  'Companies in the Hsinchu science parks':
    'Le aziende dei parchi scientifici di Hsinchu',
  'over 600, more than 160,000 staff':
    'oltre 600, più di 160.000 addetti',
  'Central Taiwan’s science park for precision machinery and optoelectronics':
    'Il parco scientifico di Taiwan centrale per meccanica di precisione e optoelettronica',
  'Machinery':
    'Macchinari',
  'Manufacturers in the Central Taiwan Science Park':
    'I produttori del Parco scientifico di Taiwan centrale',
  '219 firms, 51,827 staff (2020)':
    '219 aziende, 51.827 addetti (2020)',
  'The Hsinchu Science Park Bureau oversees six parks where over 600 companies have been approved to operate, employing more than 160,000 people, with average annual revenue above NT$1,000 billion in recent years.':
    'L’Ufficio del parco scientifico di Hsinchu gestisce sei parchi in cui sono state autorizzate oltre 600 aziende, con più di 160.000 addetti e ricavi medi annui superiori a 1.000 miliardi di NT$ negli ultimi anni.',
  'The Central Taiwan Science Park, centred on Taichung, had sales of over NT$936 billion in 2020 and more than 51,827 employees at 219 manufacturers.':
    'Il Parco scientifico di Taiwan centrale, con centro a Taichung, ha registrato vendite per oltre 936 miliardi di NT$ nel 2020 e più di 51.827 addetti in 219 produttori.',
  'No family is rated in Hsinchu or Taichung: the science-park figures read give companies and staff, not hiring by role. Tainan and Kaohsiung are not mapped: the Southern Taiwan Science Park and Kaohsiung port statistics could not be read.':
    'Nessuna famiglia è valutata a Hsinchu o Taichung: i dati dei parchi scientifici letti riportano aziende e addetti, non le assunzioni per ruolo. Tainan e Kaohsiung non sono segnate: le statistiche del Parco scientifico di Taiwan meridionale e del porto di Kaohsiung non sono state lette.',

  'Apart from the central bank’s lists of banks and insurers, TSMC is the only employer named, from its US Securities and Exchange Commission filing; MediaTek’s head office could not be confirmed from a source we can cite. No family is rated in Hsinchu or Taichung, so their standing rests on the science parks’ own statistics.':
    'A parte gli elenchi della banca centrale su banche e assicurazioni, TSMC è l’unico datore di lavoro citato, dalla sua documentazione presso la Securities and Exchange Commission statunitense; la sede di MediaTek non ha potuto essere confermata da una fonte citabile. Nessuna famiglia è valutata a Hsinchu e Taichung, quindi il loro posizionamento si basa sulle statistiche dei parchi scientifici.',
  'Taiwan’s statistics office publishes no GDP by city or county that was found, so no hub has a GDP figure; wages are the 2024 average annual total pay of full-time Taiwanese employees by workplace city (Hsinchu County, which shares the science park, is separate), population is the usual resident population, and Hsinchu has no Numbeo rent.':
    'Non è stato trovato alcun PIL per città o contea pubblicato dall’istituto di statistica di Taiwan, quindi nessun polo ha un dato di PIL; gli stipendi sono la retribuzione totale annua media 2024 dei dipendenti taiwanesi a tempo pieno per città del luogo di lavoro (la contea di Hsinchu, che condivide il parco scientifico, è separata), la popolazione è quella residente abituale, e per Hsinchu Numbeo non ha un affitto.',
  'Country brief: three hubs, pay and standing':
    'Dossier paese: tre poli, stipendi e posizionamento',
  'Entry pay':
    'Stipendio di ingresso',
  'Pay across cities':
    'Stipendi nelle diverse città',
  'The Global Financial Centres Index 40 (September 2026) ranks Taipei 42nd of the centres it lists (rating 717), up nine places from 51st.':
    'Il Global Financial Centres Index 40 (settembre 2026) colloca Taipei al 42° posto tra i centri che elenca (punteggio 717), in salita di nove posizioni dal 51°.',
  'In 2024 the average annual total pay of full-time Taiwanese employees, by workplace, was NT$1,298,000 in Hsinchu City, NT$1,003,000 in Hsinchu County, NT$947,000 in Taipei City and NT$673,000 in Taichung City, against NT$776,000 nationally; the median was NT$902,000 in Hsinchu City, NT$735,000 in Taipei and NT$517,000 in Taichung.':
    'Nel 2024 la retribuzione totale annua media dei dipendenti taiwanesi a tempo pieno, per luogo di lavoro, era di 1.298.000 NT$ nella città di Hsinchu, 1.003.000 NT$ nella contea di Hsinchu, 947.000 NT$ a Taipei e 673.000 NT$ a Taichung, contro 776.000 NT$ a livello nazionale; la mediana era 902.000 NT$ a Hsinchu City, 735.000 NT$ a Taipei e 517.000 NT$ a Taichung.',
  'In 2024 new entrants to the workforce earned NT$37,000 a month on average (up 6.4%): NT$34,000 for university graduates and NT$52,000 for graduate-school graduates; the median was NT$33,000, and NT$49,000 for graduate school.':
    'Nel 2024 chi entrava nel mondo del lavoro guadagnava in media 37.000 NT$ al mese (il 6,4% in più): 34.000 NT$ per i laureati e 52.000 NT$ per chi ha un titolo post-laurea; la mediana era 33.000 NT$, e 49.000 NT$ per il post-laurea.',
  'On 1 January 2026 Taichung had 3,076,000 usual residents, Taipei 2,441,000, Hsinchu County 675,000 and Hsinchu City 509,000; the country had 23.71 million.':
    'Il 1° gennaio 2026 Taichung contava 3.076.000 residenti abituali, Taipei 2.441.000, la contea di Hsinchu 675.000 e la città di Hsinchu 509.000; il paese ne aveva 23,71 milioni.',
  'Graduates of Taiwanese universities who later need a work permit can qualify with 70 points, scored on degree, pay, experience, Chinese and languages; the Ministry of Labor formally abolished annual numerical quotas on 1 August 2024.':
    'I laureati delle università di Taiwan che in seguito hanno bisogno di un permesso di lavoro possono ottenerlo con 70 punti, assegnati per titolo, stipendio, esperienza, cinese e altre lingue; il Ministero del Lavoro ha formalmente abolito le quote annuali il 1° agosto 2024.',
  'Whether employers expect Mandarin for entry roles was not researched; immigration rules, fees and tax are consolidated in visas_immigration/taiwan/.':
    'Non è stato ricercato se i datori richiedano il mandarino per i ruoli junior; norme sui visti, costi e fiscalità sono consolidati in visas_immigration/taiwan/.',
  'The two-year permit-free stay took full legal effect under the amended Foreign Professionals Act on 1 January 2026 (WDA circular 4 Feb 2026).':
    'Il soggiorno di due anni senza permesso ha assunto piena efficacia giuridica con la legge novellata sui professionisti esteri il 1° gennaio 2026 (circolare WDA 4 feb 2026).'
});

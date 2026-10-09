/* Atlas record: Canada. Read 2 and 3 October 2026; log P61
 * (research/verification/round-4f.md, round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports only, which are identical.
 * Full official guide: visas_immigration/canada/canada_visas_immigration_guide.md.
 * Permit rules are verified on IRCC, and Express Entry CEC cut-offs (518–523 in Aug–Sept 2026)
 * are confirmed in the official guide.
 * Round 5d (3 October 2026) added standing, metrics and more claims for the five
 * hubs: Statistics Canada for population (2025), GDP by metropolitan area (2022, the latest),
 * average employment income of full-year full-time workers (2024) and the Canada Mortgage
 * and Housing Corporation's average one-bedroom rent (2025); ratings from Statistics Canada's
 * employment by occupation and industry, CompTIA tech employment, Fortune Global 500
 * headquarters and the GFCI. Brief: research/countries/ca-canada.md. */

ATLAS.add({
  id: "CA",
  checked: "2026-10-03",
  log: "P61",
  summary: "The most generous post-study permit in this guide: any public-university master’s of at least eight months earns a three-year work permit, whatever the field. Toronto is the finance capital and the largest tech market, Montréal leads in artificial intelligence, Calgary holds the energy head offices and Ottawa is home to the federal government and Shopify. The harder step is permanent residence, after Ontario closed its no-job-offer master’s stream in 2026.",
  sectors: ["Banking and insurance", "Technology", "Natural resources and energy", "Public sector", "Consulting"],
  roles: ["finance", "software", "it", "business"],
  hubs: [
    {
      id: "toronto", name: "Toronto", lat: 43.65, lon: -79.38,
      knownFor: "Canada’s banks, insurers and stock exchange",
      why: ["ca-tor", "ca-lfs-tor", "ca-f500-tor", "ca-gfci-tor", "ca-tech-toronto"],
      sectors: ["Banking", "Insurance", "Capital markets", "Technology"],
      employers: [
        { t: "Canada’s five largest banks", note: "all headquartered in Toronto", c: "ca-tor" },
        { t: "Financial-services employers", note: "313,203 employees, against 132,381 in Montreal", c: "ca-tor" },
        {
          name: "Royal Bank of Canada, Toronto-Dominion, Scotiabank, CIBC",
          note: "headquarters; Fortune Global 500 ranks 110, 140, 290 and 357",
          c: "ca-f500-tor"
        },
        {
          name: "Manulife and Sun Life",
          note: "insurers headquartered in Toronto; ranks 277 and 379",
          c: "ca-f500-tor"
        },
        { name: "George Weston", note: "headquarters of the food-retail group; rank 332", c: "ca-f500-tor" },
        { name: "RBC", note: "lists co-ops, internships and new-graduate rotational programmes", c: "ca-rbc" },
        { t: "Tech workers", note: "over 414,000 in 2025, nearly 11% of the workforce", c: "ca-tech-toronto" }
      ],
      demand: {
        business: ["strong", "ca-lfs-tor", "ca-f500-tor", "ca-global500"],
        finance: ["dominant", "ca-tor", "ca-lfs-tor", "ca-gfci-tor"],
        it: ["strong", "ca-tech-toronto", "ca-lfs-tor"],
        software: ["strong", "ca-tech-toronto", "ca-lfs-tor"],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["strong", "ca-tor", "ca-f500-tor"],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [5, 3, 2], c: ["ca-tor", "ca-lfs-tor", "ca-gfci-tor"] },
        { f: "software", s: [5, 3, 3], c: ["ca-tech-toronto", "ca-gser-tor", "ca-lfs-tor"] },
        { f: "it", s: [5, 3, 2], c: ["ca-tech-toronto", "ca-lfs-tor"] },
        { f: "business", s: [5, 3, 3], c: ["ca-global500", "ca-f500-tor"] }
      ],
      metrics: {
        pop: {
          v: 7108874,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710014801",
          by: "Statistics Canada, table 17-10-0148, population estimates on 1 July 2025, Toronto census metropolitan area (2021 boundaries)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 522.38,
          cur: "CAD",
          year: 2022,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3610046801",
          by: "Statistics Canada, table 36-10-0468, GDP at basic prices by census metropolitan area, 2022 (the latest year), Toronto (C$522,379 million)",
          seen: "2026-10-03"
        },
        wage: {
          v: 8108,
          cur: "CAD",
          basis: "mean",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001",
          by: "Statistics Canada, table 11-10-0240, average employment income of full-year full-time workers in 2024 (C$97,300) ÷ 12, Toronto census metropolitan area",
          seen: "2026-10-03"
        },
        rent: {
          v: 1761,
          cur: "CAD",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301",
          by: "CMHC rental market survey 2025 via Statistics Canada, table 34-10-0133, average rent of a one-bedroom flat in purpose-built rental buildings of three units or more, Toronto",
          seen: "2026-10-03"
        }
      },
      programmes: [{ calc: "mba", name: "Toronto Rotman (MBA)" }, { calc: "mba", name: "Schulich (MBA)" }]
    },
    {
      id: "montreal", name: "Montreal", lat: 45.5, lon: -73.57,
      knownFor: "Canada’s second financial centre",
      why: ["ca-tor", "ca-lfs-mtl", "ca-gfci-mtl", "ca-mtl-ai", "ca-f500-mtl"],
      sectors: ["Banking and insurance", "Aerospace", "Technology", "Artificial intelligence"],
      employers: [
        { t: "Financial-services employers", note: "132,381 employees", c: "ca-tor" },
        { name: "Bank of Montreal", note: "Fortune lists its headquarters as Montréal; rank 273", c: "ca-f500-mtl" },
        {
          name: "Alimentation Couche-Tard",
          note: "headquarters in Laval, in the metropolitan area; rank 185",
          c: "ca-f500-mtl"
        },
        {
          name: "Mila and IVADO",
          note: "the world’s largest academic AI research centre and Canada’s largest AI consortium",
          c: "ca-mtl-ai"
        },
        { name: "Google and Meta", note: "AI research centres in Montréal", c: "ca-mtl-ai" },
        { t: "Tech workers", note: "about 217,000, second in Canada", c: "ca-tech-cities" }
      ],
      demand: {
        business: ["present", "ca-f500-mtl"],
        finance: ["strong", "ca-tor", "ca-lfs-mtl", "ca-gfci-mtl"],
        it: ["strong", "ca-tech-cities", "ca-lfs-mtl"],
        software: ["strong", "ca-tech-cities", "ca-lfs-mtl"],
        ai: ["strong", "ca-mtl-ai", "ca-tech-cities"],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["present", "ca-f500-mtl"],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [4, 3, 2], c: ["ca-tor", "ca-lfs-mtl", "ca-gfci-mtl"] },
        { f: "ai", s: [4, 3, 2], c: ["ca-mtl-ai"] },
        { f: "software", s: [4, 3, 2], c: ["ca-tech-cities", "ca-lfs-mtl"] },
        { f: "it", s: [4, 3, 2], c: ["ca-tech-cities", "ca-lfs-mtl"] }
      ],
      metrics: {
        pop: {
          v: 4597837,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710014801",
          by: "Statistics Canada, table 17-10-0148, population estimates on 1 July 2025, Montréal census metropolitan area (2021 boundaries)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 279.5,
          cur: "CAD",
          year: 2022,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3610046801",
          by: "Statistics Canada, table 36-10-0468, GDP at basic prices by census metropolitan area, 2022 (the latest year), Montréal (C$279,501 million)",
          seen: "2026-10-03"
        },
        wage: {
          v: 7025,
          cur: "CAD",
          basis: "mean",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001",
          by: "Statistics Canada, table 11-10-0240, average employment income of full-year full-time workers in 2024 (C$84,300) ÷ 12, Montréal census metropolitan area",
          seen: "2026-10-03"
        },
        rent: {
          v: 1131,
          cur: "CAD",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301",
          by: "CMHC rental market survey 2025 via Statistics Canada, table 34-10-0133, average rent of a one-bedroom flat in purpose-built rental buildings of three units or more, Montréal",
          seen: "2026-10-03"
        }
      },
      programmes: [{ calc: "mba", name: "McGill Desautels (MBA)" }]
    },
    {
      id: "vancouver", name: "Vancouver", lat: 49.28, lon: -123.12,
      knownFor: "Canada’s third city for professional jobs in finance, on the Pacific",
      why: ["ca-vancouver", "ca-lfs-van", "ca-gfci-van", "ca-tech-cities", "ca-lululemon"],
      sectors: ["Banking", "Technology", "Ports and logistics"],
      employers: [
        { t: "Employers of finance professionals", note: "60,100 jobs (2025)", c: "ca-vancouver" },
        { t: "Tech workers", note: "about 150,000, third in Canada", c: "ca-tech-cities" },
        { name: "lululemon", note: "corporate address in Vancouver", c: "ca-lululemon" },
        { t: "Transportation and warehousing", note: "101,000 jobs (2025)", c: "ca-lfs-van" }
      ],
      demand: {
        business: ["present", "ca-lululemon"],
        finance: ["strong", "ca-vancouver", "ca-lfs-van", "ca-gfci-van"],
        it: ["strong", "ca-tech-cities", "ca-lfs-van"],
        software: ["strong", "ca-tech-cities", "ca-lfs-van"],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [3, 2, 1], c: ["ca-vancouver", "ca-gfci-van"] },
        { f: "software", s: [3, 2, 2], c: ["ca-tech-cities", "ca-lfs-van"] },
        { f: "it", s: [3, 2, 2], c: ["ca-tech-cities", "ca-lfs-van"] }
      ],
      metrics: {
        pop: {
          v: 3088036,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710014801",
          by: "Statistics Canada, table 17-10-0148, population estimates on 1 July 2025, Vancouver census metropolitan area (2021 boundaries)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 202.46,
          cur: "CAD",
          year: 2022,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3610046801",
          by: "Statistics Canada, table 36-10-0468, GDP at basic prices by census metropolitan area, 2022 (the latest year), Vancouver (C$202,459 million)",
          seen: "2026-10-03"
        },
        wage: {
          v: 7842,
          cur: "CAD",
          basis: "mean",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001",
          by: "Statistics Canada, table 11-10-0240, average employment income of full-year full-time workers in 2024 (C$94,100) ÷ 12, Vancouver census metropolitan area",
          seen: "2026-10-03"
        },
        rent: {
          v: 1807,
          cur: "CAD",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301",
          by: "CMHC rental market survey 2025 via Statistics Canada, table 34-10-0133, average rent of a one-bedroom flat in purpose-built rental buildings of three units or more, Vancouver",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "calgary", name: "Calgary", lat: 51.05, lon: -114.07,
      knownFor: "Alberta’s business city and Canada’s energy headquarters",
      why: ["ca-calgary", "ca-lfs-cgy", "ca-f500-cgy", "ca-cgy-ced", "ca-gser-cgy", "ca-gfci-cgy"],
      sectors: ["Oil and gas", "Energy", "Technology"],
      employers: [
        {
          name: "Enbridge, Cenovus Energy, Canadian Natural Resources, Suncor Energy",
          note: "headquarters; Fortune Global 500 ranks 335, 465, 471 and 472",
          c: "ca-f500-cgy"
        },
        { t: "Oil, gas, mining and forestry jobs", note: "46,300 in 2025, against 5,000 in Toronto", c: "ca-lfs-cgy" },
        { t: "Head offices", note: "the highest concentration per head of population in Canada", c: "ca-cgy-ced" },
        { t: "Employers of science and engineering professionals", note: "94,100 jobs (2025)", c: "ca-calgary" }
      ],
      demand: {
        business: ["strong", "ca-f500-cgy", "ca-lfs-cgy"],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [{ f: "business", s: [4, 2, 1], c: ["ca-f500-cgy", "ca-cgy-ced"] }],
      metrics: {
        pop: {
          v: 1836012,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710014801",
          by: "Statistics Canada, table 17-10-0148, population estimates on 1 July 2025, Calgary census metropolitan area (2021 boundaries)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 129.96,
          cur: "CAD",
          year: 2022,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3610046801",
          by: "Statistics Canada, table 36-10-0468, GDP at basic prices by census metropolitan area, 2022 (the latest year), Calgary (C$129,957 million)",
          seen: "2026-10-03"
        },
        wage: {
          v: 7308,
          cur: "CAD",
          basis: "mean",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001",
          by: "Statistics Canada, table 11-10-0240, average employment income of full-year full-time workers in 2024 (C$87,700) ÷ 12, Calgary census metropolitan area",
          seen: "2026-10-03"
        },
        rent: {
          v: 1581,
          cur: "CAD",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301",
          by: "CMHC rental market survey 2025 via Statistics Canada, table 34-10-0133, average rent of a one-bedroom flat in purpose-built rental buildings of three units or more, Calgary",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "ottawa", name: "Ottawa", lat: 45.42, lon: -75.7,
      knownFor: "The federal capital, with a tech sector in Kanata",
      why: ["ca-ottawa", "ca-shopify", "ca-gser-ott", "ca-pay-cma"],
      sectors: ["Government", "Technology", "Public sector"],
      employers: [
        { name: "Shopify", note: "headquarters; 8,100 employees", c: "ca-shopify" },
        { t: "Public administration", note: "194,000 jobs (2025)", c: "ca-ottawa" },
        { t: "Employers of science and engineering professionals", note: "91,200 jobs (2025)", c: "ca-ottawa" }
      ],
      demand: {
        software: ["present", "ca-shopify"],
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [{ f: "software", s: [3, 2, 1], c: ["ca-shopify", "ca-gser-ott"] }],
      metrics: {
        pop: {
          v: 1700014,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710014801",
          by: "Statistics Canada, table 17-10-0148, population estimates on 1 July 2025, Ottawa–Gatineau census metropolitan area (2021 boundaries)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 105.82,
          cur: "CAD",
          year: 2022,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3610046801",
          by: "Statistics Canada, table 36-10-0468, GDP at basic prices by census metropolitan area, 2022 (the latest year), Ottawa–Gatineau, Ontario part C$88,014 million plus Quebec part C$17,810 million",
          seen: "2026-10-03"
        },
        wage: {
          v: 7833,
          cur: "CAD",
          basis: "mean",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001",
          by: "Statistics Canada, table 11-10-0240, average employment income of full-year full-time workers in 2024 (C$94,000) ÷ 12, Ottawa–Gatineau census metropolitan area",
          seen: "2026-10-03"
        },
        rent: {
          v: 1542,
          cur: "CAD",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301",
          by: "CMHC rental market survey 2025 via Statistics Canada, table 34-10-0133, average rent of a one-bedroom flat in purpose-built rental buildings of three units or more, Ottawa–Gatineau",
          seen: "2026-10-03"
        }
      },
      programmes: []
    }
  ],

  work: [
    { k: "Where demand is now", c: ["ca-ivey", "ca-psc-size"] },
    { k: "Graduate labour market", c: ["ca-lfs-youth", "ca-rotman"] },
    { k: "Pay by city", c: ["ca-pay-cma"] },
    { k: "Rent", c: ["ca-rent-cmhc"] },
    { k: "Recruiting calendar", c: ["ca-rbc", "ca-wcal", "ca-cpa-cal"] },
    { k: "Language", c: ["ca-french", "ca-langqs"] }
  ],

  briefs: [
    ["countries/ca-canada.md", "Country brief: five hubs, employers, pay, rent and standing"],
    [
      "places/beyond-europe.md",
      "§2 Canada: caps, PGWP, the route to permanent residence, pre-experience master’s, Ivey outcomes"
    ],
    ["places/visas-and-work-rights.md", "§8 Canada: PGWP rules"]
  ],
  gaps: [
    "Express Entry cut-off scores come from secondary reports; IRCC’s rounds page was blank when read.",
    "The Toronto and Montreal financial-services counts come from an Ontario government bid document citing Lightcast data.",
    "Gross domestic product by metropolitan area is published only to 2022, so the GDP figures are four years old; the Ottawa figure adds the Ontario and Quebec parts.",
    "Pay is the average employment income of full-year full-time workers in 2024 from the income tables, not entry pay, which Statistics Canada does not publish by city; rent is the Canada Mortgage and Housing Corporation’s average for purpose-built rental flats, not asking rents.",
    "Technology employment for Montréal, Vancouver and Calgary comes from a news site reporting CompTIA, and no tech-workforce figure for Ottawa was read; Ottawa and Calgary are therefore rated only where a named employer or an official count supports it.",
    "Fortune lists the Bank of Montreal’s headquarters as Montréal, while the Ontario document counts all five big banks as Toronto-based: the bank has its legal head office in Montréal and its executive office in Toronto, which no source read states.",
    "Named employers for Vancouver, Montréal’s finance sector and Ottawa are thin: bank, telecom and mining career pages could not be read, and no graduate programme dates were found.",
    "Economics, accounting, management, marketing, analytics, data science and big data are not rated in any city: Statistics Canada’s occupation groups read do not separate them.",
    "French requirements for Montréal jobs rest on a law firm’s summary of the Charter; the Québec government pages could not be read."
  ],

  claims: {
    'ca-tor': { t: "Toronto has 313,203 financial-services employees, against 132,381 in Montreal and 82,402 in Vancouver; it is home to all five of Canada’s big banks and to TMX, the largest exchange operator in Canada.", tag: "data", src: "https://www.ontario.ca/page/canadas-choice-torontos-bid-defence-security-and-resilience-bank", by: "Government of Ontario, Ministry of Finance (11 May 2026), citing Lightcast 2024", seen: "2026-10-02" },
    'ca-ivey': { t: "Ivey’s MSc class of 2023/24 had an 85% offer rate and a median base of C$75,000, with 30% going into financial services, and 80% of the jobs of its 2023 business analytics class were in the Toronto area.", tag: "data", src: "research/places/beyond-europe.md", by: "Ivey MSc Employment Report 2023/24, via places/beyond-europe.md §2.3", seen: "2026-10-01" },
    'ca-rotman': { t: "Rotman’s Master of Finance asks for two or more years of professional finance experience, so it is not a pre-experience degree; Ivey’s MSc is.", tag: "employer-stated", src: "research/places/beyond-europe.md", by: "Rotman and Ivey programme pages, via places/beyond-europe.md §2.3", seen: "2026-10-01" },
    'ca-vancouver': { t: "Statistics Canada counts 1,698,000 people employed in the Vancouver metropolitan area in 2025, 60,100 of them in professional occupations in finance, third after Toronto (175,200) and Montreal (73,800), and 129,800 in professional occupations in natural and applied sciences.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-calgary': { t: "Statistics Canada counts 991,900 people employed in the Calgary metropolitan area in 2025, 94,100 of them in professional occupations in natural and applied sciences and 30,800 in professional occupations in finance.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-ottawa': { t: "Statistics Canada counts 877,300 people employed in the Ottawa–Gatineau metropolitan area in 2025, 91,200 of them in professional occupations in natural and applied sciences, 21,300 in professional occupations in finance and 194,000 in public administration.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-lfs-tor': { t: "Statistics Canada counts 3,736,700 people employed in the Toronto metropolitan area in 2025: 455,000 in finance, insurance, real estate, rental and leasing, 175,200 in professional occupations in finance, 135,100 in professional occupations in business, 333,400 in professional occupations in natural and applied sciences and 536,600 in professional, scientific and technical services.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-lfs-mtl': { t: "Statistics Canada counts 2,409,900 people employed in the Montréal metropolitan area in 2025: 195,700 in finance, insurance, real estate, rental and leasing, 73,800 in professional occupations in finance, 71,200 in professional occupations in business, 167,700 in professional occupations in natural and applied sciences and 253,900 in professional, scientific and technical services.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-lfs-van': { t: "Statistics Canada counts, in the Vancouver metropolitan area in 2025, 134,000 people in finance, insurance, real estate, rental and leasing, 53,500 in professional occupations in business, 223,300 in professional, scientific and technical services, 82,400 in information, culture and recreation and 101,000 in transportation and warehousing.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-lfs-cgy': { t: "Statistics Canada counts, in the Calgary metropolitan area in 2025, 46,300 people in forestry, fishing, mining, quarrying, oil and gas (against 5,000 in the Toronto area), 68,000 in finance, insurance, real estate, rental and leasing, 34,500 in professional occupations in business and 142,300 in professional, scientific and technical services.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801", by: "Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025", seen: "2026-10-03" },
    'ca-gfci-tor': { t: "The Global Financial Centres Index 40 (September 2026) ranks Toronto 41st of 117 financial centres (29th in the March 2026 edition) and tenth of the 14 North American centres, between Minneapolis / St Paul and Montréal.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Tables 1 and 10", seen: "2026-10-03" },
    'ca-gfci-mtl': { t: "The Global Financial Centres Index 40 (September 2026) ranks Montréal 50th of 117 financial centres (34th in the March 2026 edition), eleventh of the 14 North American centres and second in Canada after Toronto.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Tables 1 and 10", seen: "2026-10-03" },
    'ca-gfci-van': { t: "The Global Financial Centres Index 40 (September 2026) ranks Vancouver 75th of 117 financial centres (63rd in the March 2026 edition) and thirteenth of the 14 North American centres.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Tables 1 and 10", seen: "2026-10-03" },
    'ca-gfci-cgy': { t: "The Global Financial Centres Index 40 (September 2026) ranks Calgary 77th of 117 financial centres (60th in the March 2026 edition) and last of the 14 North American centres.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Tables 1 and 10", seen: "2026-10-03" },
    'ca-gser-tor': { t: "Startup Genome’s 2026 report says Toronto-Waterloo moved up seven places to 13th in the world, tying with Paris; no other Canadian ecosystem is in its top 40.", tag: "data", src: "https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/global-startup-ecosystem-ranking-2026-top-40", by: "Startup Genome, Global Startup Ecosystem Report 2026 (June 2026), Top 40 key findings", seen: "2026-10-03" },
    'ca-gser-ott': { t: "Startup Genome’s North America report (21 July 2026) says Ottawa has built a distinctive identity as a “Bootstrap City” with direct access to federal decision-makers and procurement, and that Ottawa and Calgary show Canada’s growing innovation depth.", tag: "data", src: "https://startupgenome.com/insights/north-americas-startup-ecosystems-diversifying-and-deeply-ai-native", by: "Startup Genome, North America’s ecosystems (21 Jul 2026)", seen: "2026-10-03" },
    'ca-gser-cgy': { t: "Startup Genome’s North America report (21 July 2026) cites Platform Calgary’s 2025 impact report: its member companies secured $323.9 million of investment; Calgary Economic Development puts the value of the ecosystem at $6.7 billion.", tag: "data", src: "https://startupgenome.com/insights/north-americas-startup-ecosystems-diversifying-and-deeply-ai-native", by: "Startup Genome, North America’s ecosystems (21 Jul 2026); Calgary Economic Development (calgaryeconomicdevelopment.com) for the $6.7 billion", seen: "2026-10-03" },
    'ca-global500': { t: "A Dallas Regional Chamber table of the cities with the most Fortune Global 500 headquarters (2025) lists Toronto with 8, level with Chicago and Houston, against New York 20 and London 16.", tag: "data", src: "https://www.dallaschamber.org/wp-content/uploads/2026/06/EDG2026_BE-Fortune1000_2026new.pdf", by: "Dallas Regional Chamber, Regional Economic Development Guide 2026, Fortune 1000 page, from Fortune", seen: "2026-10-03" },
    'ca-f500-tor': { t: "Fortune’s 2026 Global 500 lists seven companies headquartered in Toronto among the Canadian ones checked: Royal Bank of Canada (rank 110, 96,628 employees), Toronto-Dominion (140, 102,218), Manulife (277, 37,000), Scotiabank (290, 86,431), George Weston (332, 220,266), CIBC (357, 49,824) and Sun Life (379, 23,816).", tag: "data", src: "https://fortune.com/ranking/global500/", by: "Fortune, Global 500 2026, company profiles (headquarters and employee figures; market value as of 13 July 2026)", seen: "2026-10-03" },
    'ca-f500-mtl': { t: "Fortune’s 2026 Global 500 lists the Bank of Montreal (rank 273, 53,234 employees) with its headquarters in Montréal, and Alimentation Couche-Tard (185, 146,000 employees) in Laval, part of the Montréal metropolitan area.", tag: "data", src: "https://fortune.com/ranking/global500/", by: "Fortune, Global 500 2026, company profiles (headquarters and employee figures; market value as of 13 July 2026)", seen: "2026-10-03" },
    'ca-f500-cgy': { t: "Fortune’s 2026 Global 500 lists four oil, gas and pipeline companies headquartered in Calgary: Enbridge (rank 335, 15,550 employees), Cenovus Energy (465, 7,211), Canadian Natural Resources (471, 10,035) and Suncor Energy (472, 15,424).", tag: "data", src: "https://fortune.com/ranking/global500/", by: "Fortune, Global 500 2026, company profiles (headquarters and employee figures; market value as of 13 July 2026)", seen: "2026-10-03" },
    'ca-shopify': { t: "Fortune’s company profile gives Shopify’s headquarters as Ottawa, with 8,100 employees (figures for the twelve months to 30 June 2025).", tag: "data", src: "https://fortune.com/company/shopify/", by: "Fortune, Shopify company profile", seen: "2026-10-03" },
    'ca-rbc': { t: "RBC’s student and graduate page for Canada lists co-ops and internships and new-graduate rotational programmes.", tag: "employer-stated", src: "https://jobs.rbc.com/ca/en/students-and-graduates", by: "RBC careers, students and graduates (Canada)", seen: "2026-10-03" },
    'ca-lululemon': { t: "lululemon’s corporate page gives its address as 1818 Cornwall Avenue, Vancouver, and describes its growth “from our roots in Vancouver”.", tag: "employer-stated", src: "https://corporate.lululemon.com/about-us", by: "lululemon athletica, corporate about us", seen: "2026-10-03" },
    'ca-cgy-ced': { t: "Calgary Economic Development says Calgary has the highest concentration of head offices per head of population in Canada (FP500 database, 2024), the fastest-growing tech hub in North America (CBRE, 2025) and the lowest corporate income tax rate in Canada.", tag: "employer-stated", src: "https://www.calgaryeconomicdevelopment.com/", by: "Calgary Economic Development, home page (read 3 Oct 2026)", seen: "2026-10-03" },
    'ca-mtl-ai': { t: "Montréal International’s 2025 AI profile counts more than 48,000 experts with AI skills in Montréal, names Mila the world’s largest academic AI research centre and IVADO Canada’s largest AI consortium, says Google and Meta have AI research centres there and counts more than 24,000 university students in AI-related programmes in Québec.", tag: "employer-stated", src: "https://www.montrealinternational.com/app/uploads/2019/02/ai_industry_profile_2025_shortversion-2.pdf", by: "Montréal International (investment agency), Why Artificial Intelligence Giants are Heading to Montréal, 2025 edition", seen: "2026-10-03" },
    'ca-tech-toronto': { t: "CompTIA projects more than 414,000 tech jobs in the Toronto area in 2025, nearly 11% of its workforce against 6.8% for Canada, and puts Canada’s net tech employment at 1.45 million in 2024.", tag: "data", src: "https://www.comptia.org/en/blog/canadas-tech-workforce-2025-trends-job-growth-and-future-opportunities/", by: "CompTIA (industry association), Canada’s tech workforce 2025 (17 Nov 2025)", seen: "2026-10-03" },
    'ca-tech-cities': { t: "Reporting CompTIA’s Canadian data, a Vancouver technology news site (5 August 2025) gives tech employment of 414,000 in Toronto, 217,000 in Montréal, 150,000 in Vancouver, 69,000 in Calgary and 40,000 in Edmonton.", tag: "practitioner consensus", src: "https://techcouver.com/2025/08/05/vancouver-tech-market-largest-talent-hub-canada/", by: "Techcouver (5 Aug 2025), secondary report of CompTIA, State of the Tech Workforce Canada 2025", seen: "2026-10-03" },
    'ca-lfs-youth': { t: "Statistics Canada’s Labour Force Survey for August 2026 puts unemployment at 6.4% with 21,173,000 people employed; for 15-to-24-year-olds it was 12.9%, against 14.3% a year earlier and a 2017–2019 average of 10.8%, and in the Toronto area it was 6.7%, down from a high of 9.0% in July 2025.", tag: "data", src: "https://www150.statcan.gc.ca/n1/daily-quotidien/260904/dq260904a-eng.htm", by: "Statistics Canada, The Daily: Labour Force Survey, August 2026 (4 Sep 2026)", seen: "2026-10-03" },
    'ca-pay-cma': { t: "Statistics Canada’s income tables give average employment income in 2024 for full-year full-time workers of C$97,300 in the Toronto area, C$94,100 in Vancouver, C$94,000 in Ottawa–Gatineau, C$87,700 in Calgary and C$84,300 in Montréal, against C$85,500 for Canada; for all workers with employment income the Toronto average is C$68,100.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001", by: "Statistics Canada, table 11-10-0240, distribution of employment income of individuals by gender and work activity, provinces and selected census metropolitan areas (2024)", seen: "2026-10-03" },
    'ca-rent-cmhc': { t: "The Canada Mortgage and Housing Corporation’s 2025 rental survey, republished by Statistics Canada, gives the average rent of a one-bedroom flat in purpose-built buildings of three units or more as C$1,807 in Vancouver, C$1,761 in Toronto, C$1,581 in Calgary, C$1,542 in Ottawa–Gatineau and C$1,131 in Montréal.", tag: "data", src: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301", by: "Statistics Canada, table 34-10-0133, CMHC average rents for areas with a population of 10,000 and over (2025)", seen: "2026-10-03" },
    'ca-wcal': { t: "The University of Waterloo’s co-op calendar has employers hire for the fall term from May to August, for the winter term from September to December and for the spring term from January to April, in three matching cycles per term; for winter 2027 the matches fall on 9 October, 13 November and 27 November 2026.", tag: "employer-stated", src: "https://uwaterloo.ca/hire/recruitment-dates", by: "University of Waterloo, Hire Waterloo, recruitment dates", seen: "2026-10-08" },
    'ca-cpa-cal': { t: "CPABC says the fall is the main recruiting season for CPA training positions, with most activity from August to October, spring events typically run from March to June, and larger firms often hire about a year before the start.", tag: "practitioner consensus", src: "https://www.bccpa.ca/become-a-cpa/about-the-program/experience/cpabc-post-secondary-recruitment-guidelines/recruit-2022-general-faqs", by: "CPABC, post-secondary recruitment framework, general FAQs", seen: "2026-10-08" },
    'ca-psc-size': { t: "The federal public service had 345,282 employees at the end of March 2026, against 357,965 a year earlier; applications fell nearly 30% to under 735,000 in 2025-26 and job ads fell almost 40%.", tag: "data", src: "https://www.cp24.com/news/canada/2026/07/11/applications-for-federal-public-service-jobs-drop-by-almost-30-per-cent/", by: "CP24 (Canadian Press), 11 July 2026", seen: "2026-10-08" },
    'ca-langqs': { t: "Federal bilingual posts carry a language profile of three letters (reading, writing, oral) at levels A, B or C, up to a maximum of CCC.", tag: "data", src: "https://www.canada.ca/en/treasury-board-secretariat/services/staffing/qualification-standards/relation-official-languages.html", by: "Treasury Board of Canada Secretariat, qualification standards in relation to official languages", seen: "2026-10-08" },
    'ca-french': { t: "From 1 June 2025 Québec businesses with 25 to 49 employees must register with the Office québécois de la langue française and assess their use of French, as larger firms already had to; a law firm’s summary of the Charter of the French language.", tag: "practitioner consensus", src: "https://www.bcf.ca/en/thought-leadership/2025/the-charter-of-the-french-language-new-obligations-as-of-june-2025", by: "BCF law firm, The Charter of the French language: new obligations as of June 2025 (29 May 2025)", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "The most generous post-study permit in this guide: any public-university master’s of at least eight months earns a three-year work permit, whatever the field. Toronto is the finance capital and the largest tech market, Montréal leads in artificial intelligence, Calgary holds the energy head offices and Ottawa is home to the federal government and Shopify. The harder step is permanent residence, after Ontario closed its no-job-offer master’s stream in 2026.":
    "Il permesso post-studio più generoso di questa guida: qualsiasi master di un’università pubblica di almeno otto mesi dà un permesso di lavoro di tre anni, in qualsiasi campo. Toronto è la capitale della finanza e il maggiore mercato tecnologico, Montréal è al vertice nell’intelligenza artificiale, Calgary ospita le sedi dell’energia e Ottawa è la città del governo federale e di Shopify. Il passo più difficile è la residenza permanente, dopo che l’Ontario ha chiuso nel 2026 il canale per i master senza offerta di lavoro.",
  "Banking and insurance":
    "Banche e assicurazioni",
  "Technology":
    "Tecnologia",
  "Natural resources and energy":
    "Risorse naturali ed energia",
  "Public sector":
    "Settore pubblico",
  "Consulting":
    "Consulenza",
  "Express Entry cut-off scores come from secondary reports; IRCC’s rounds page was blank when read.":
    "I punteggi minimi di Express Entry vengono da fonti secondarie; la pagina dei round dell’IRCC era vuota alla lettura.",
  "The Toronto and Montreal financial-services counts come from an Ontario government bid document citing Lightcast data.":
    "I conteggi dei servizi finanziari di Toronto e Montréal vengono da un documento di candidatura del governo dell’Ontario che cita dati Lightcast.",
  "Gross domestic product by metropolitan area is published only to 2022, so the GDP figures are four years old; the Ottawa figure adds the Ontario and Quebec parts.":
    "Il prodotto interno lordo per area metropolitana è pubblicato solo fino al 2022, quindi i dati sul PIL hanno quattro anni; il dato di Ottawa somma le parti dell’Ontario e del Québec.",
  "Pay is the average employment income of full-year full-time workers in 2024 from the income tables, not entry pay, which Statistics Canada does not publish by city; rent is the Canada Mortgage and Housing Corporation’s average for purpose-built rental flats, not asking rents.":
    "La retribuzione è il reddito medio da lavoro dei lavoratori a tempo pieno tutto l’anno nel 2024 dalle tabelle sui redditi, non la retribuzione d’ingresso, che Statistics Canada non pubblica per città; l’affitto è la media della Canada Mortgage and Housing Corporation per gli alloggi costruiti per l’affitto, non i canoni richiesti.",
  "Technology employment for Montréal, Vancouver and Calgary comes from a news site reporting CompTIA, and no tech-workforce figure for Ottawa was read; Ottawa and Calgary are therefore rated only where a named employer or an official count supports it.":
    "L’occupazione tecnologica di Montréal, Vancouver e Calgary viene da un sito di notizie che riporta CompTIA, e non è stato letto alcun dato sulla forza lavoro tecnologica di Ottawa; Ottawa e Calgary sono quindi valutate solo dove un datore di lavoro citato o un conteggio ufficiale le sostiene.",
  "Fortune lists the Bank of Montreal’s headquarters as Montréal, while the Ontario document counts all five big banks as Toronto-based: the bank has its legal head office in Montréal and its executive office in Toronto, which no source read states.":
    "Fortune indica la sede della Bank of Montreal a Montréal, mentre il documento dell’Ontario considera tutte e cinque le grandi banche con sede a Toronto: la banca ha la sede legale a Montréal e quella direzionale a Toronto, cosa che nessuna fonte letta afferma.",
  "Named employers for Vancouver, Montréal’s finance sector and Ottawa are thin: bank, telecom and mining career pages could not be read, and no graduate programme dates were found.":
    "I datori di lavoro citati per Vancouver, il settore finanziario di Montréal e Ottawa sono pochi: le pagine carriera di banche, telecomunicazioni e miniere non si sono potute leggere, e non sono state trovate date dei programmi per neolaureati.",
  "Economics, accounting, management, marketing, analytics, data science and big data are not rated in any city: Statistics Canada’s occupation groups read do not separate them.":
    "Economia, contabilità, management, marketing, analytics, data science e big data non sono valutati in nessuna città: i gruppi di professioni di Statistics Canada letti non li distinguono.",
  "French requirements for Montréal jobs rest on a law firm’s summary of the Charter; the Québec government pages could not be read.":
    "I requisiti di francese per i lavori a Montréal si basano sulla sintesi di uno studio legale sulla Carta; le pagine del governo del Québec non erano leggibili.",
  "Country brief: five hubs, employers, pay, rent and standing":
    "Dossier sul paese: cinque poli, datori di lavoro, retribuzioni, affitti e posizionamento",
  "§2 Canada: caps, PGWP, the route to permanent residence, pre-experience master’s, Ivey outcomes":
    "§2 Canada: tetti, PGWP, la strada verso la residenza permanente, master senza esperienza, esiti di Ivey",
  "§8 Canada: PGWP rules":
    "§8 Canada: regole del PGWP",
  "Canada’s banks, insurers and stock exchange":
    "Le banche, le assicurazioni e la borsa del Canada",
  "Banking":
    "Banca",
  "Insurance":
    "Assicurazioni",
  "Capital markets":
    "Mercati dei capitali",
  "all headquartered in Toronto":
    "tutte con sede a Toronto",
  "Canada’s five largest banks":
    "Le cinque maggiori banche canadesi",
  "313,203 employees, against 132,381 in Montreal":
    "313.203 dipendenti, contro 132.381 a Montréal",
  "Financial-services employers":
    "I datori di lavoro dei servizi finanziari",
  "headquarters; Fortune Global 500 ranks 110, 140, 290 and 357":
    "sedi centrali; posti 110, 140, 290 e 357 nella Fortune Global 500",
  "insurers headquartered in Toronto; ranks 277 and 379":
    "assicuratori con sede a Toronto; posti 277 e 379",
  "headquarters of the food-retail group; rank 332":
    "sede del gruppo della distribuzione alimentare; posto 332",
  "lists co-ops, internships and new-graduate rotational programmes":
    "elenca co-op, stage e programmi di rotazione per neolaureati",
  "over 414,000 in 2025, nearly 11% of the workforce":
    "oltre 414.000 nel 2025, quasi l’11% della forza lavoro",
  "Tech workers":
    "Lavoratori del settore tecnologico",
  "Canada’s second financial centre":
    "Il secondo centro finanziario del Canada",
  "Aerospace":
    "Aerospazio",
  "Artificial intelligence":
    "Intelligenza artificiale",
  "132,381 employees":
    "132.381 dipendenti",
  "Fortune lists its headquarters as Montréal; rank 273":
    "Fortune ne indica la sede a Montréal; posto 273",
  "headquarters in Laval, in the metropolitan area; rank 185":
    "sede a Laval, nell’area metropolitana; posto 185",
  "the world’s largest academic AI research centre and Canada’s largest AI consortium":
    "il maggiore centro accademico di ricerca sull’IA del mondo e il maggiore consorzio canadese sull’IA",
  "AI research centres in Montréal":
    "centri di ricerca sull’IA a Montréal",
  "about 217,000, second in Canada":
    "circa 217.000, secondo posto in Canada",
  "Canada’s third city for professional jobs in finance, on the Pacific":
    "La terza città canadese per professioni della finanza, sul Pacifico",
  "Ports and logistics":
    "Porti e logistica",
  "60,100 jobs (2025)":
    "60.100 posti (2025)",
  "Employers of finance professionals":
    "I datori di lavoro dei professionisti della finanza",
  "about 150,000, third in Canada":
    "circa 150.000, terzo posto in Canada",
  "corporate address in Vancouver":
    "indirizzo aziendale a Vancouver",
  "101,000 jobs (2025)":
    "101.000 posti (2025)",
  "Transportation and warehousing":
    "Trasporti e magazzinaggio",
  "Alberta’s business city and Canada’s energy headquarters":
    "La città degli affari dell’Alberta e sede dell’energia canadese",
  "Oil and gas":
    "Petrolio e gas",
  "Energy":
    "Energia",
  "headquarters; Fortune Global 500 ranks 335, 465, 471 and 472":
    "sedi centrali; posti 335, 465, 471 e 472 nella Fortune Global 500",
  "46,300 in 2025, against 5,000 in Toronto":
    "46.300 nel 2025, contro 5.000 a Toronto",
  "Oil, gas, mining and forestry jobs":
    "Posti in petrolio, gas, miniere e silvicoltura",
  "the highest concentration per head of population in Canada":
    "la più alta concentrazione per abitante del Canada",
  "Head offices":
    "Sedi centrali",
  "94,100 jobs (2025)":
    "94.100 posti (2025)",
  "Employers of science and engineering professionals":
    "I datori di lavoro dei professionisti di scienze e ingegneria",
  "The federal capital, with a tech sector in Kanata":
    "La capitale federale, con un settore tecnologico a Kanata",
  "Government":
    "Pubblica amministrazione",
  "headquarters; 8,100 employees":
    "sede centrale; 8.100 dipendenti",
  "194,000 jobs (2025)":
    "194.000 posti (2025)",
  "Public administration":
    "Pubblica amministrazione",
  "91,200 jobs (2025)":
    "91.200 posti (2025)",
  "Graduate labour market":
    "Mercato del lavoro dei laureati",
  "Pay by city":
    "Retribuzioni per città",
  "Rent":
    "Affitti",
  "Recruiting calendar":
    "Calendario delle selezioni",
  "Language":
    "Lingua",
  "Toronto has 313,203 financial-services employees, against 132,381 in Montreal and 82,402 in Vancouver; it is home to all five of Canada’s big banks and to TMX, the largest exchange operator in Canada.":
    "Toronto ha 313.203 dipendenti nei servizi finanziari, contro 132.381 a Montréal e 82.402 a Vancouver; ospita tutte e cinque le grandi banche canadesi e TMX, il maggiore gestore di borse del Canada.",
  "Ivey’s MSc class of 2023/24 had an 85% offer rate and a median base of C$75,000, with 30% going into financial services, and 80% of the jobs of its 2023 business analytics class were in the Toronto area.":
    "La classe MSc 2023/24 di Ivey ha avuto un tasso di offerte dell’85% e una base mediana di 75.000 C$, con il 30% nei servizi finanziari, e l’80% dei posti della classe 2023 di business analytics era nell’area di Toronto.",
  "Rotman’s Master of Finance asks for two or more years of professional finance experience, so it is not a pre-experience degree; Ivey’s MSc is.":
    "Il Master of Finance di Rotman richiede almeno due anni di esperienza professionale in finanza, quindi non è un titolo senza esperienza; l’MSc di Ivey lo è.",
  "Statistics Canada counts 1,698,000 people employed in the Vancouver metropolitan area in 2025, 60,100 of them in professional occupations in finance, third after Toronto (175,200) and Montreal (73,800), and 129,800 in professional occupations in natural and applied sciences.":
    "Statistics Canada conta 1.698.000 occupati nell’area metropolitana di Vancouver nel 2025, di cui 60.100 in professioni della finanza, terza dopo Toronto (175.200) e Montréal (73.800), e 129.800 in professioni delle scienze naturali e applicate.",
  "Statistics Canada counts 991,900 people employed in the Calgary metropolitan area in 2025, 94,100 of them in professional occupations in natural and applied sciences and 30,800 in professional occupations in finance.":
    "Statistics Canada conta 991.900 occupati nell’area metropolitana di Calgary nel 2025, di cui 94.100 in professioni delle scienze naturali e applicate e 30.800 in professioni della finanza.",
  "Statistics Canada counts 877,300 people employed in the Ottawa–Gatineau metropolitan area in 2025, 91,200 of them in professional occupations in natural and applied sciences, 21,300 in professional occupations in finance and 194,000 in public administration.":
    "Statistics Canada conta 877.300 occupati nell’area metropolitana di Ottawa–Gatineau nel 2025, di cui 91.200 in professioni delle scienze naturali e applicate, 21.300 in professioni della finanza e 194.000 nella pubblica amministrazione.",
  "Statistics Canada counts 3,736,700 people employed in the Toronto metropolitan area in 2025: 455,000 in finance, insurance, real estate, rental and leasing, 175,200 in professional occupations in finance, 135,100 in professional occupations in business, 333,400 in professional occupations in natural and applied sciences and 536,600 in professional, scientific and technical services.":
    "Statistics Canada conta 3.736.700 occupati nell’area metropolitana di Toronto nel 2025: 455.000 in finanza, assicurazioni, immobiliare e leasing, 175.200 in professioni della finanza, 135.100 in professioni dell’economia aziendale, 333.400 in professioni delle scienze naturali e applicate e 536.600 in servizi professionali, scientifici e tecnici.",
  "Statistics Canada counts 2,409,900 people employed in the Montréal metropolitan area in 2025: 195,700 in finance, insurance, real estate, rental and leasing, 73,800 in professional occupations in finance, 71,200 in professional occupations in business, 167,700 in professional occupations in natural and applied sciences and 253,900 in professional, scientific and technical services.":
    "Statistics Canada conta 2.409.900 occupati nell’area metropolitana di Montréal nel 2025: 195.700 in finanza, assicurazioni, immobiliare e leasing, 73.800 in professioni della finanza, 71.200 in professioni dell’economia aziendale, 167.700 in professioni delle scienze naturali e applicate e 253.900 in servizi professionali, scientifici e tecnici.",
  "Statistics Canada counts, in the Vancouver metropolitan area in 2025, 134,000 people in finance, insurance, real estate, rental and leasing, 53,500 in professional occupations in business, 223,300 in professional, scientific and technical services, 82,400 in information, culture and recreation and 101,000 in transportation and warehousing.":
    "Statistics Canada conta, nell’area metropolitana di Vancouver nel 2025, 134.000 persone in finanza, assicurazioni, immobiliare e leasing, 53.500 in professioni dell’economia aziendale, 223.300 in servizi professionali, scientifici e tecnici, 82.400 in informazione, cultura e svago e 101.000 in trasporti e magazzinaggio.",
  "Statistics Canada counts, in the Calgary metropolitan area in 2025, 46,300 people in forestry, fishing, mining, quarrying, oil and gas (against 5,000 in the Toronto area), 68,000 in finance, insurance, real estate, rental and leasing, 34,500 in professional occupations in business and 142,300 in professional, scientific and technical services.":
    "Statistics Canada conta, nell’area metropolitana di Calgary nel 2025, 46.300 persone in silvicoltura, pesca, miniere, cave, petrolio e gas (contro 5.000 nell’area di Toronto), 68.000 in finanza, assicurazioni, immobiliare e leasing, 34.500 in professioni dell’economia aziendale e 142.300 in servizi professionali, scientifici e tecnici.",
  "The Global Financial Centres Index 40 (September 2026) ranks Toronto 41st of 117 financial centres (29th in the March 2026 edition) and tenth of the 14 North American centres, between Minneapolis / St Paul and Montréal.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Toronto al 41º posto su 117 centri finanziari (29º nell’edizione di marzo 2026) e al decimo dei 14 centri nordamericani, tra Minneapolis / St Paul e Montréal.",
  "The Global Financial Centres Index 40 (September 2026) ranks Montréal 50th of 117 financial centres (34th in the March 2026 edition), eleventh of the 14 North American centres and second in Canada after Toronto.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Montréal al 50º posto su 117 centri finanziari (34º nell’edizione di marzo 2026), all’undicesimo dei 14 centri nordamericani e al secondo in Canada dopo Toronto.",
  "The Global Financial Centres Index 40 (September 2026) ranks Vancouver 75th of 117 financial centres (63rd in the March 2026 edition) and thirteenth of the 14 North American centres.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Vancouver al 75º posto su 117 centri finanziari (63º nell’edizione di marzo 2026) e al tredicesimo dei 14 centri nordamericani.",
  "The Global Financial Centres Index 40 (September 2026) ranks Calgary 77th of 117 financial centres (60th in the March 2026 edition) and last of the 14 North American centres.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Calgary al 77º posto su 117 centri finanziari (60º nell’edizione di marzo 2026) e all’ultimo dei 14 centri nordamericani.",
  "Startup Genome’s 2026 report says Toronto-Waterloo moved up seven places to 13th in the world, tying with Paris; no other Canadian ecosystem is in its top 40.":
    "Il rapporto 2026 di Startup Genome dice che Toronto-Waterloo è salita di sette posti al 13º nel mondo, alla pari con Parigi; nessun altro ecosistema canadese è tra i primi 40.",
  "Startup Genome’s North America report (21 July 2026) says Ottawa has built a distinctive identity as a “Bootstrap City” with direct access to federal decision-makers and procurement, and that Ottawa and Calgary show Canada’s growing innovation depth.":
    "Il rapporto di Startup Genome sul Nord America (21 luglio 2026) dice che Ottawa ha costruito un’identità distintiva come “Bootstrap City”, con accesso diretto ai decisori federali e agli appalti, e che Ottawa e Calgary mostrano la crescente profondità dell’innovazione canadese.",
  "Startup Genome’s North America report (21 July 2026) cites Platform Calgary’s 2025 impact report: its member companies secured $323.9 million of investment; Calgary Economic Development puts the value of the ecosystem at $6.7 billion.":
    "Il rapporto di Startup Genome sul Nord America (21 luglio 2026) cita il rapporto d’impatto 2025 di Platform Calgary: le sue aziende associate hanno ottenuto 323,9 milioni di $ di investimenti; Calgary Economic Development stima il valore dell’ecosistema in 6,7 miliardi di $.",
  "A Dallas Regional Chamber table of the cities with the most Fortune Global 500 headquarters (2025) lists Toronto with 8, level with Chicago and Houston, against New York 20 and London 16.":
    "Una tabella della Dallas Regional Chamber sulle città con più sedi della Fortune Global 500 (2025) elenca Toronto con 8, come Chicago e Houston, contro New York 20 e Londra 16.",
  "Fortune’s 2026 Global 500 lists seven companies headquartered in Toronto among the Canadian ones checked: Royal Bank of Canada (rank 110, 96,628 employees), Toronto-Dominion (140, 102,218), Manulife (277, 37,000), Scotiabank (290, 86,431), George Weston (332, 220,266), CIBC (357, 49,824) and Sun Life (379, 23,816).":
    "La Global 500 di Fortune 2026 elenca sette aziende con sede a Toronto tra quelle canadesi controllate: Royal Bank of Canada (posto 110, 96.628 dipendenti), Toronto-Dominion (140, 102.218), Manulife (277, 37.000), Scotiabank (290, 86.431), George Weston (332, 220.266), CIBC (357, 49.824) e Sun Life (379, 23.816).",
  "Fortune’s 2026 Global 500 lists the Bank of Montreal (rank 273, 53,234 employees) with its headquarters in Montréal, and Alimentation Couche-Tard (185, 146,000 employees) in Laval, part of the Montréal metropolitan area.":
    "La Global 500 di Fortune 2026 elenca la Bank of Montreal (posto 273, 53.234 dipendenti) con sede a Montréal, e Alimentation Couche-Tard (185, 146.000 dipendenti) a Laval, parte dell’area metropolitana di Montréal.",
  "Fortune’s 2026 Global 500 lists four oil, gas and pipeline companies headquartered in Calgary: Enbridge (rank 335, 15,550 employees), Cenovus Energy (465, 7,211), Canadian Natural Resources (471, 10,035) and Suncor Energy (472, 15,424).":
    "La Global 500 di Fortune 2026 elenca quattro aziende di petrolio, gas e oleodotti con sede a Calgary: Enbridge (posto 335, 15.550 dipendenti), Cenovus Energy (465, 7.211), Canadian Natural Resources (471, 10.035) e Suncor Energy (472, 15.424).",
  "Fortune’s company profile gives Shopify’s headquarters as Ottawa, with 8,100 employees (figures for the twelve months to 30 June 2025).":
    "Il profilo aziendale di Fortune indica la sede di Shopify a Ottawa, con 8.100 dipendenti (cifre per i dodici mesi al 30 giugno 2025).",
  "RBC’s student and graduate page for Canada lists co-ops and internships and new-graduate rotational programmes.":
    "La pagina di RBC per studenti e neolaureati in Canada elenca co-op e stage e programmi di rotazione per neolaureati.",
  "lululemon’s corporate page gives its address as 1818 Cornwall Avenue, Vancouver, and describes its growth “from our roots in Vancouver”.":
    "La pagina aziendale di lululemon indica il suo indirizzo in 1818 Cornwall Avenue, Vancouver, e descrive la crescita “dalle nostre radici a Vancouver”.",
  "Calgary Economic Development says Calgary has the highest concentration of head offices per head of population in Canada (FP500 database, 2024), the fastest-growing tech hub in North America (CBRE, 2025) and the lowest corporate income tax rate in Canada.":
    "Calgary Economic Development afferma che Calgary ha la più alta concentrazione di sedi centrali per abitante del Canada (database FP500, 2024), il polo tecnologico in più rapida crescita del Nord America (CBRE, 2025) e l’aliquota più bassa dell’imposta sulle società del Canada.",
  "Montréal International’s 2025 AI profile counts more than 48,000 experts with AI skills in Montréal, names Mila the world’s largest academic AI research centre and IVADO Canada’s largest AI consortium, says Google and Meta have AI research centres there and counts more than 24,000 university students in AI-related programmes in Québec.":
    "Il profilo sull’IA 2025 di Montréal International conta più di 48.000 esperti con competenze di IA a Montréal, indica Mila come il più grande centro accademico di ricerca sull’IA del mondo e IVADO come il maggiore consorzio canadese sull’IA, dice che Google e Meta vi hanno centri di ricerca sull’IA e conta più di 24.000 studenti universitari in corsi legati all’IA in Québec.",
  "CompTIA projects more than 414,000 tech jobs in the Toronto area in 2025, nearly 11% of its workforce against 6.8% for Canada, and puts Canada’s net tech employment at 1.45 million in 2024.":
    "CompTIA prevede più di 414.000 posti tecnologici nell’area di Toronto nel 2025, quasi l’11% della sua forza lavoro contro il 6,8% del Canada, e stima l’occupazione tecnologica netta del Canada in 1,45 milioni nel 2024.",
  "Reporting CompTIA’s Canadian data, a Vancouver technology news site (5 August 2025) gives tech employment of 414,000 in Toronto, 217,000 in Montréal, 150,000 in Vancouver, 69,000 in Calgary and 40,000 in Edmonton.":
    "Riportando i dati canadesi di CompTIA, un sito di notizie tecnologiche di Vancouver (5 agosto 2025) indica un’occupazione tecnologica di 414.000 a Toronto, 217.000 a Montréal, 150.000 a Vancouver, 69.000 a Calgary e 40.000 a Edmonton.",
  "Statistics Canada’s Labour Force Survey for August 2026 puts unemployment at 6.4% with 21,173,000 people employed; for 15-to-24-year-olds it was 12.9%, against 14.3% a year earlier and a 2017–2019 average of 10.8%, and in the Toronto area it was 6.7%, down from a high of 9.0% in July 2025.":
    "L’indagine sulle forze di lavoro di Statistics Canada di agosto 2026 indica una disoccupazione del 6,4% con 21.173.000 occupati; tra i 15-24enni era il 12,9%, contro il 14,3% di un anno prima e una media 2017–2019 del 10,8%, e nell’area di Toronto era il 6,7%, in calo dal massimo del 9,0% di luglio 2025.",
  "Statistics Canada’s income tables give average employment income in 2024 for full-year full-time workers of C$97,300 in the Toronto area, C$94,100 in Vancouver, C$94,000 in Ottawa–Gatineau, C$87,700 in Calgary and C$84,300 in Montréal, against C$85,500 for Canada; for all workers with employment income the Toronto average is C$68,100.":
    "Le tabelle sui redditi di Statistics Canada indicano un reddito medio da lavoro nel 2024 per i lavoratori a tempo pieno tutto l’anno di 97.300 C$ nell’area di Toronto, 94.100 C$ a Vancouver, 94.000 C$ a Ottawa–Gatineau, 87.700 C$ a Calgary e 84.300 C$ a Montréal, contro 85.500 C$ per il Canada; per tutti i lavoratori con reddito da lavoro la media di Toronto è di 68.100 C$.",
  "The Canada Mortgage and Housing Corporation’s 2025 rental survey, republished by Statistics Canada, gives the average rent of a one-bedroom flat in purpose-built buildings of three units or more as C$1,807 in Vancouver, C$1,761 in Toronto, C$1,581 in Calgary, C$1,542 in Ottawa–Gatineau and C$1,131 in Montréal.":
    "L’indagine sugli affitti 2025 della Canada Mortgage and Housing Corporation, ripubblicata da Statistics Canada, indica l’affitto medio di un bilocale in edifici costruiti per l’affitto di tre o più unità in 1.807 C$ a Vancouver, 1.761 C$ a Toronto, 1.581 C$ a Calgary, 1.542 C$ a Ottawa–Gatineau e 1.131 C$ a Montréal.",
  "The University of Waterloo’s co-op calendar has employers hire for the fall term from May to August, for the winter term from September to December and for the spring term from January to April, in three matching cycles per term; for winter 2027 the matches fall on 9 October, 13 November and 27 November 2026.":
    "Nel calendario co-op dell’Università di Waterloo i datori assumono per il semestre autunnale da maggio ad agosto, per quello invernale da settembre a dicembre e per quello primaverile da gennaio ad aprile, in tre cicli di abbinamento per semestre; per l’inverno 2027 gli abbinamenti cadono il 9 ottobre, il 13 novembre e il 27 novembre 2026.",
  "CPABC says the fall is the main recruiting season for CPA training positions, with most activity from August to October, spring events typically run from March to June, and larger firms often hire about a year before the start.":
    "CPABC dice che l’autunno è la stagione principale di reclutamento per i posti di formazione CPA, con la maggior parte dell’attività da agosto a ottobre, gli eventi di primavera si tengono di solito da marzo a giugno, e le società più grandi assumono spesso circa un anno prima dell’inizio.",
  "The federal public service had 345,282 employees at the end of March 2026, against 357,965 a year earlier; applications fell nearly 30% to under 735,000 in 2025-26 and job ads fell almost 40%.":
    "Il servizio pubblico federale contava 345.282 dipendenti a fine marzo 2026, contro 357.965 un anno prima; le candidature sono calate di quasi il 30% a meno di 735.000 nel 2025-26 e gli annunci sono calati di quasi il 40%.",
  "Federal bilingual posts carry a language profile of three letters (reading, writing, oral) at levels A, B or C, up to a maximum of CCC.":
    "I posti federali bilingui hanno un profilo linguistico di tre lettere (lettura, scrittura, orale) ai livelli A, B o C, fino a un massimo di CCC.",
  "From 1 June 2025 Québec businesses with 25 to 49 employees must register with the Office québécois de la langue française and assess their use of French, as larger firms already had to; a law firm’s summary of the Charter of the French language.":
    "Dal 1° giugno 2025 le imprese del Québec con 25-49 dipendenti devono registrarsi presso l’Office québécois de la langue française e valutare il proprio uso del francese, come già dovevano fare le imprese più grandi; è la sintesi di uno studio legale sulla Carta della lingua francese."
});

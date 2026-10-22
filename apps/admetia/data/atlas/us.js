/* Atlas record: United States. Read 3 October 2026; log P60
 * (research/verification/round-5d.md). Outside Europe: routes for EU/EEA/Swiss
 * and UK passports. They share one route (uk aliases eu, the only keys the schema
 * allows) but differ in places: Bulgaria, Cyprus and Romania are outside the Visa
 * Waiver Program, and the printed F-1 visa lasts 16 months for Italy and 60 for the UK;
 * those differences are in the claim text. Full official guide:
 * visas_immigration/united_states/united_states_visas_immigration_guide.md.
 * Hub metrics use one source each for all 14 hubs: population from the Census
 * Bureau (metro areas, 2025), GDP from the BEA (county GDP for 2024 summed over each
 * metro area's counties, because the BEA stopped publishing metro-area GDP), pay from BLS OEWS (May 2025, mean of
 * all occupations) and rent from the Census Bureau's 2024 survey (median gross
 * rent, one-bedroom). Ratings follow data/atlas/index.js; for the seven
 * business and computing occupations they follow the BLS shares described in
 * the gaps below. The State Department, the New York State Comptroller, BLS
 * web pages (the API was used), Axios, HUD and several employer pages refused
 * automated reads (HTTP 403); not bypassed. */

ATLAS.add({
  id: "US",
  checked: "2026-10-03",
  log: "P60",
  summary: "The highest pay and the hardest visa. New York is the finance centre, the Bay Area holds about half of US venture capital, and Houston, Chicago and Dallas each host two dozen Fortune 500 headquarters, but the usual path for a European graduate is a US degree for OPT work rights and then a weighted H-1B lottery that favours higher wage levels. Routes that need no US degree (J-1 intern and trainee placements, L-1 transfers, E-2 treaty status) exist but are narrower.",
  sectors: ["Finance and banking", "Technology", "Consulting", "Healthcare and life sciences", "Energy"],
  roles: ["finance", "software", "it", "management"],
  hubs: [
    {
      id: "newyork", name: "New York", lat: 40.71, lon: -74.01,
      knownFor: "Wall Street banks, asset managers and trading firms",
      why: ["us-sifma", "us-nycomp", "us-gfci-ny", "us-newyork"],
      sectors: ["Investment banking", "Sales and trading", "Asset management", "Consulting", "Accounting"],
      employers: [
        {
          t: "Finance employers of MIT’s master of finance class",
          note: "38.1% of accepted offers were in New York",
          c: "us-mit"
        },
        {
          name: "RBC, Rothschild, Perella Weinberg, Raine",
          note: "US summer analyst roles open a year and a half ahead",
          c: "us-cal"
        },
        { name: "Goldman Sachs", note: "2027 summer analyst programme for undergraduates", c: "us-gs" },
        { t: "Securities industry", note: "about 197,000 jobs in the city", c: "us-sifma" },
        { t: "Fortune 500 headquarters", note: "62 in the metro area, the most of any US metro", c: "us-fortune-ghp" }
      ],
      demand: {
        business: ["dominant", "us-fortune-ghp", "us-global500"],
        finance: ["dominant", "us-sifma", "us-nycomp", "us-oews-newyork"],
        accounting: ["strong", "us-oews-newyork"],
        management: ["strong", "us-oews-newyork"],
        marketing: ["strong", "us-oews-newyork"],
        logistics: ["present", "us-oews-newyork"],
        software: ["strong", "us-oews-newyork", "us-gser"],
        datasci: ["strong", "us-oews-newyork"],
        economics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        ib: ["present", "us-cal"],
        banking: ["strong", "us-sifma", "us-mit"],
        am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "finance", s: [5, 5, 5], c: ["us-gfci-ny", "us-sifma"] },
        { f: "business", s: [5, 5, 4], c: ["us-fortune-ghp", "us-global500"] },
        { f: "software", s: [4, 4, 4], c: ["us-gser", "us-oews-newyork"] },
        { f: "datasci", s: [4, 3, 2], c: ["us-oews-newyork"] },
        { f: "management", s: [4, 3, 2], c: ["us-oews-newyork"] },
        { f: "accounting", s: [4, 3, 2], c: ["us-oews-newyork"] },
        { f: "marketing", s: [4, 3, 2], c: ["us-oews-newyork"] }
      ],
      metrics: {
        pop: {
          v: 20112448,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: New York-Newark-Jersey City, NY-NJ (CBSA 35620)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 2442.5,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 22 counties of the New York-Newark-Jersey City, NY-NJ metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 7193,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM003562000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the New York-Newark-Jersey City, NY-NJ metro area ($86,310) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1708,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, New York-Newark-Jersey City, NY-NJ metro area (margin of error ±$15)",
          seen: "2026-10-03"
        }
      },
      programmes: [{ calc: "mba", name: "Columbia (MBA)" }, { calc: "mba", name: "NYU Stern (MBA)" }]
    },
    {
      id: "siliconvalley", name: "San Jose and Silicon Valley", lat: 37.34, lon: -121.89,
      knownFor: "Tech employers, a quarter of all jobs",
      why: ["us-sj", "us-jv-tech", "us-jv-unicorns", "us-siliconvalley"],
      sectors: ["Technology", "Semiconductors", "Software", "Venture capital"],
      employers: [
        { t: "Tech employers", note: "about 27% of all jobs in the San Jose area", c: "us-sj" },
        {
          name: "Google, Apple, Meta, Amazon, Cisco, Tesla",
          note: "the largest of the 20 tech employers that hold 215,000 jobs",
          c: "us-jv-top20"
        },
        { name: "NVIDIA", note: "added 1,000 Bay Area jobs in 2025, the most of the 20 largest", c: "us-jv-top20" },
        { t: "Software developers", note: "nearly 140,000 in Silicon Valley", c: "us-jv-unicorns" }
      ],
      demand: {
        business: ["strong", "us-fortune-rp", "us-global500"],
        it: ["strong", "us-sj", "us-jv-tech"],
        software: ["dominant", "us-jv-tech", "us-oews-siliconvalley"],
        datasci: ["present", "us-oews-siliconvalley"],
        ai: ["strong", "us-jv-vc"],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        vc: ["strong", "us-jv-vc"],
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "software", s: [5, 5, 5], c: ["us-jv-tech", "us-gser"] },
        { f: "it", s: [5, 5, 5], c: ["us-sj", "us-jv-tech"] },
        { f: "ai", s: [5, 5, 5], c: ["us-jv-vc", "us-gser"] },
        { f: "business", s: [4, 4, 3], c: ["us-fortune-rp", "us-global500"] }
      ],
      metrics: {
        pop: {
          v: 1984473,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: San Jose-Sunnyvale-Santa Clara, CA (CBSA 41940)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 441.77,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 2 counties of the San Jose-Sunnyvale-Santa Clara, CA metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 9936,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM004194000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the San Jose-Sunnyvale-Santa Clara, CA metro area ($119,230) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 2465,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, San Jose-Sunnyvale-Santa Clara, CA metro area (margin of error ±$67)",
          seen: "2026-10-03"
        }
      },
      programmes: [{ calc: "mba", name: "Stanford GSB (MBA)" }]
    },
    {
      id: "chicago", name: "Chicago", lat: 41.88, lon: -87.63,
      knownFor: "The largest county economy in the Midwest’s biggest city",
      why: ["us-chicago", "us-fortune-ghp", "us-gfci-chi"],
      sectors: ["Banking", "Professional services", "Logistics"],
      employers: [
        { t: "Businesses in the core county", note: "GDP of $546.4 billion (2024)", c: "us-chicago" },
        {
          name: "Archer Daniels Midland, United Airlines, McDonald’s, Kraft Heinz, Exelon",
          note: "headquarters, with GE HealthCare and Motorola Solutions",
          c: "us-chicago-f500"
        },
        {
          t: "Fortune 500 headquarters",
          note: "27 in the metro area, tied with Houston for second",
          c: "us-fortune-ghp"
        }
      ],
      demand: {
        business: ["strong", "us-fortune-ghp", "us-chicago-f500", "us-global500"],
        finance: ["strong", "us-gfci-chi", "us-oews-chicago"],
        accounting: ["present", "us-oews-chicago"],
        management: ["strong", "us-oews-chicago"],
        marketing: ["present", "us-oews-chicago"],
        logistics: ["strong", "us-oews-chicago"],
        software: ["present", "us-oews-chicago"],
        datasci: ["present", "us-oews-chicago"],
        economics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "finance", s: [4, 4, 3], c: ["us-gfci-chi", "us-oews-chicago"] },
        { f: "business", s: [4, 4, 3], c: ["us-fortune-ghp", "us-global500"] },
        { f: "management", s: [4, 3, 2], c: ["us-oews-chicago"] },
        { f: "logistics", s: [4, 3, 2], c: ["us-oews-chicago"] }
      ],
      metrics: {
        pop: {
          v: 9434123,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Chicago-Naperville-Elgin, IL-IN (CBSA 16980)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 923.12,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 13 counties of the Chicago-Naperville-Elgin, IL-IN metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 6115,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM001698000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Chicago-Naperville-Elgin, IL-IN metro area ($73,380) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1310,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Chicago-Naperville-Elgin, IL-IN metro area (margin of error ±$29)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "los-angeles", name: "Los Angeles", lat: 34.05, lon: -118.24,
      knownFor: "The largest county economy in the United States",
      why: ["us-los-angeles", "us-la-econ", "us-gfci-la"],
      sectors: ["Media", "Ports and logistics", "Aerospace"],
      employers: [
        { t: "Businesses in the core county", note: "GDP of $1,003.0 billion (2024)", c: "us-los-angeles" },
        { t: "County economy", note: "above $1 trillion, up 2.4% in 2025", c: "us-la-econ" },
        { t: "Fortune Global 500 headquarters", note: "4 in the metro area (2025)", c: "us-global500" }
      ],
      demand: {
        business: ["present", "us-global500"],
        finance: ["strong", "us-gfci-la", "us-oews-los-angeles"],
        accounting: ["strong", "us-oews-los-angeles"],
        management: ["strong", "us-oews-los-angeles"],
        marketing: ["strong", "us-oews-los-angeles"],
        logistics: ["strong", "us-oews-los-angeles"],
        software: ["present", "us-oews-los-angeles"],
        datasci: ["present", "us-oews-los-angeles"],
        economics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "finance", s: [4, 4, 3], c: ["us-gfci-la", "us-oews-los-angeles"] },
        { f: "management", s: [4, 3, 2], c: ["us-oews-los-angeles"] },
        { f: "accounting", s: [4, 3, 2], c: ["us-oews-los-angeles"] },
        { f: "logistics", s: [4, 3, 2], c: ["us-oews-los-angeles"] },
        { f: "marketing", s: [4, 3, 2], c: ["us-oews-los-angeles"] }
      ],
      metrics: {
        pop: {
          v: 12844441,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Los Angeles-Long Beach-Anaheim, CA (CBSA 31080)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 1354.72,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 2 counties of the Los Angeles-Long Beach-Anaheim, CA metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 6439,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM003108000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Los Angeles-Long Beach-Anaheim, CA metro area ($77,270) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1822,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Los Angeles-Long Beach-Anaheim, CA metro area (margin of error ±$18)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "houston", name: "Houston", lat: 29.76, lon: -95.37,
      knownFor: "The largest county economy in Texas, the US energy capital",
      why: ["us-houston", "us-houston-f500", "us-fortune-ghp"],
      sectors: ["Oil and gas", "Energy", "Ports and logistics"],
      employers: [
        {
          name: "Exxon Mobil, Chevron, Phillips 66",
          note: "headquarters; Fortune 500 ranks 9, 21 and 29",
          c: "us-houston-f500"
        },
        {
          name: "Sysco, ConocoPhillips, Hewlett Packard Enterprise, Baker Hughes",
          note: "headquarters",
          c: "us-houston-f500"
        },
        {
          t: "Fortune 500 headquarters",
          note: "27 in the metro area, tied with Chicago for second",
          c: "us-fortune-ghp"
        },
        { t: "Businesses in the core county", note: "GDP of $592.8 billion (2024)", c: "us-houston" }
      ],
      demand: {
        business: ["strong", "us-houston-f500", "us-fortune-ghp", "us-global500"],
        logistics: ["present", "us-oews-houston"],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "business", s: [4, 4, 3], c: ["us-fortune-ghp", "us-global500"] }],
      metrics: {
        pop: {
          v: 7904627,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Houston-Pasadena-The Woodlands, TX (CBSA 26420)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 758.27,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 10 counties of the Houston-Pasadena-The Woodlands, TX metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 5634,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM002642000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Houston-Pasadena-The Woodlands, TX metro area ($67,610) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1273,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Houston-Pasadena-The Woodlands, TX metro area (margin of error ±$20)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "dallas", name: "Dallas", lat: 32.78, lon: -96.8,
      knownFor: "Texas’s second county economy, for corporate headquarters and banking",
      why: ["us-dallas", "us-dallas-f500", "us-jv-tech"],
      sectors: ["Banking", "Technology", "Logistics"],
      employers: [
        {
          name: "AT&T, American Airlines, CBRE, Texas Instruments",
          note: "headquarters in Dallas–Fort Worth",
          c: "us-dallas-f500"
        },
        { name: "McKesson", note: "a Fortune 10 company headquartered in the region", c: "us-dallas-f500" },
        { t: "Fortune 500 headquarters", note: "24 in the metro area", c: "us-dallas-f500" },
        {
          t: "Tech jobs",
          note: "up 26% between 2021 and 2024, the fastest of the large US tech centres",
          c: "us-jv-tech"
        }
      ],
      demand: {
        business: ["strong", "us-dallas-f500", "us-fortune-ghp", "us-global500"],
        finance: ["present", "us-oews-dallas"],
        accounting: ["present", "us-oews-dallas"],
        management: ["present", "us-oews-dallas"],
        marketing: ["present", "us-oews-dallas"],
        logistics: ["present", "us-oews-dallas"],
        software: ["strong", "us-oews-dallas", "us-jv-tech", "us-gser"],
        datasci: ["present", "us-oews-dallas"],
        economics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "business", s: [4, 4, 3], c: ["us-fortune-ghp", "us-global500"] },
        { f: "software", s: [3, 3, 2], c: ["us-gser", "us-oews-dallas"] }
      ],
      metrics: {
        pop: {
          v: 8477157,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Dallas-Fort Worth-Arlington, TX (CBSA 19100)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 800.6,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 11 counties of the Dallas-Fort Worth-Arlington, TX metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 5886,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM001910000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Dallas-Fort Worth-Arlington, TX metro area ($70,630) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1473,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Dallas-Fort Worth-Arlington, TX metro area (margin of error ±$21)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "washington", name: "Washington, DC", lat: 38.91, lon: -77.04,
      knownFor: "The federal capital",
      why: ["us-washington", "us-dc-fed", "us-dc-hq2"],
      sectors: ["Government", "Professional services", "Technology"],
      employers: [
        {
          t: "Federal workforce",
          note: "312,500 jobs in the region by May 2026, down from about 375,800",
          c: "us-dc-fed"
        },
        {
          name: "Amazon",
          note: "second headquarters in Arlington, at least 25,000 jobs planned by 2030",
          c: "us-dc-hq2"
        },
        { t: "Fortune 500 headquarters", note: "20 in the metro area", c: "us-fortune-rp" }
      ],
      demand: {
        business: ["strong", "us-fortune-rp", "us-global500"],
        finance: ["present", "us-oews-washington"],
        accounting: ["present", "us-oews-washington"],
        management: ["strong", "us-oews-washington"],
        marketing: ["present", "us-oews-washington"],
        logistics: ["present", "us-oews-washington"],
        software: ["strong", "us-oews-washington"],
        datasci: ["present", "us-oews-washington"],
        economics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "business", s: [4, 4, 3], c: ["us-fortune-rp", "us-global500"] },
        { f: "finance", s: [3, 3, 3], c: ["us-gfci-dc", "us-oews-washington"] },
        { f: "software", s: [4, 3, 2], c: ["us-oews-washington"] },
        { f: "management", s: [4, 3, 2], c: ["us-oews-washington"] }
      ],
      metrics: {
        pop: {
          v: 6465724,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Washington-Arlington-Alexandria, DC-VA-MD-WV (CBSA 47900)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 749.11,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 23 counties and independent cities of the Washington-Arlington-Alexandria, DC-VA-MD-WV metropolitan area as the Census Bureau delineates it (BEA reports eight Virginia cities combined with their counties) (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 7661,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM004790000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Washington-Arlington-Alexandria, DC-VA-MD-WV metro area ($91,930) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1830,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Washington-Arlington-Alexandria, DC-VA-MD-WV metro area (margin of error ±$22)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "boston", name: "Boston", lat: 42.36, lon: -71.06,
      knownFor: "New England’s main city, for finance, universities and life sciences",
      why: ["us-boston", "us-boston-bio", "us-gfci-bos"],
      sectors: ["Banking", "Life sciences", "Higher education"],
      employers: [
        { t: "Life-sciences cluster", note: "117,108 jobs, the largest US biopharma cluster", c: "us-boston-bio" },
        { t: "Fortune 500 headquarters", note: "14 in the metro area", c: "us-fortune-rp" },
        { t: "Start-up ecosystem", note: "third in North America in Startup Genome’s 2026 ranking", c: "us-gser-na" }
      ],
      demand: {
        business: ["present", "us-fortune-rp"],
        finance: ["strong", "us-gfci-bos", "us-oews-boston"],
        accounting: ["present", "us-oews-boston"],
        management: ["present", "us-oews-boston"],
        marketing: ["present", "us-oews-boston"],
        software: ["present", "us-oews-boston"],
        datasci: ["present", "us-oews-boston"],
        economics: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "finance", s: [4, 4, 3], c: ["us-gfci-bos", "us-oews-boston"] },
        { f: "software", s: [4, 4, 3], c: ["us-gser-na", "us-oews-boston"] }
      ],
      metrics: {
        pop: {
          v: 5034221,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Boston-Cambridge-Newton, MA-NH (CBSA 14460)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 644.81,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 7 counties of the Boston-Cambridge-Newton, MA-NH metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 7468,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM001446000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Boston-Cambridge-Newton, MA-NH metro area ($89,620) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1747,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Boston-Cambridge-Newton, MA-NH metro area (margin of error ±$45)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "seattle", name: "Seattle", lat: 47.61, lon: -122.33,
      knownFor: "The Pacific Northwest’s tech city",
      why: ["us-seattle", "us-seattle-amazon", "us-gser"],
      sectors: ["Technology", "Aerospace", "Retail"],
      employers: [
        { name: "Amazon", note: "about 49,000 staff in Seattle and 15,000 in Bellevue", c: "us-seattle-amazon" },
        { name: "University of Washington", note: "now Seattle’s largest employer", c: "us-seattle-amazon" },
        {
          t: "Start-up ecosystem",
          note: "10th in the world in Startup Genome’s 2026 ranking, up five places",
          c: "us-gser"
        }
      ],
      demand: {
        business: ["present", "us-seattle-amazon", "us-global500"],
        marketing: ["present", "us-oews-seattle"],
        software: ["strong", "us-oews-seattle"],
        datasci: ["present", "us-oews-seattle"],
        finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "software", s: [4, 4, 3], c: ["us-gser", "us-oews-seattle"] }],
      metrics: {
        pop: {
          v: 4161883,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Seattle-Tacoma-Bellevue, WA (CBSA 42660)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 604.07,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 3 counties of the Seattle-Tacoma-Bellevue, WA metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 7649,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM004266000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Seattle-Tacoma-Bellevue, WA metro area ($91,790) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1814,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Seattle-Tacoma-Bellevue, WA metro area (margin of error ±$30)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "san-francisco", name: "San Francisco", lat: 37.77, lon: -122.42,
      knownFor: "The Bay Area’s financial and start-up city",
      why: ["us-san-francisco", "us-jv-vc", "us-gfci-sf"],
      sectors: ["Technology", "Banking", "Professional services"],
      employers: [
        {
          t: "Venture capital and AI start-ups",
          note: "62% of the region’s 2025 venture capital, with AI taking 83% of the total",
          c: "us-jv-vc"
        },
        {
          name: "Google, Apple, Meta, Amazon, Cisco, Tesla",
          note: "the largest of the 20 tech employers that hold 215,000 jobs",
          c: "us-jv-top20"
        },
        { t: "Fortune 500 headquarters", note: "14 in the metro area", c: "us-fortune-rp" }
      ],
      demand: {
        business: ["present", "us-fortune-rp"],
        finance: ["strong", "us-gfci-sf", "us-oews-san-francisco"],
        management: ["present", "us-oews-san-francisco"],
        marketing: ["present", "us-oews-san-francisco"],
        software: ["strong", "us-oews-san-francisco", "us-jv-tech"],
        datasci: ["present", "us-oews-san-francisco"],
        ai: ["dominant", "us-jv-vc"],
        economics: 'gap', accounting: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        vc: ["dominant", "us-jv-vc"],
        ib: 'gap', banking: 'gap', am: 'gap', pe: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [
        { f: "software", s: [5, 5, 5], c: ["us-jv-tech", "us-gser"] },
        { f: "ai", s: [5, 5, 5], c: ["us-jv-vc", "us-gser"] },
        { f: "finance", s: [4, 4, 3], c: ["us-gfci-sf", "us-oews-san-francisco"] }
      ],
      metrics: {
        pop: {
          v: 4630041,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: San Francisco-Oakland-Fremont, CA (CBSA 41860)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 801.31,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 5 counties of the San Francisco-Oakland-Fremont, CA metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 8352,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM004186000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the San Francisco-Oakland-Fremont, CA metro area ($100,220) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 2180,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, San Francisco-Oakland-Fremont, CA metro area (margin of error ±$34)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "atlanta", name: "Atlanta", lat: 33.75, lon: -84.39,
      knownFor: "The South-East’s headquarters and logistics city",
      why: ["us-atlanta", "us-atlanta-hq", "us-gfci-atl"],
      sectors: ["Logistics", "Media", "Technology"],
      employers: [
        {
          name: "The Home Depot, Mercedes-Benz USA, Porsche",
          note: "headquarters in the metro area",
          c: "us-atlanta-hq"
        },
        {
          t: "Fortune 500 headquarters",
          note: "14 to 15 in the metro area, depending on the count",
          c: "us-fortune-rp"
        },
        {
          t: "Financial centre",
          note: "seventh in North America in the Global Financial Centres Index",
          c: "us-gfci-atl"
        }
      ],
      demand: {
        business: ["strong", "us-fortune-rp", "us-atlanta-hq"],
        finance: ["present", "us-gfci-atl", "us-oews-atlanta"],
        accounting: ["present", "us-oews-atlanta"],
        management: ["present", "us-oews-atlanta"],
        marketing: ["present", "us-oews-atlanta"],
        logistics: ["present", "us-oews-atlanta"],
        software: ["present", "us-oews-atlanta"],
        datasci: ["present", "us-oews-atlanta"],
        economics: 'gap', analytics: 'gap', it: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "business", s: [3, 3, 2], c: ["us-fortune-rp", "us-global500"] }],
      metrics: {
        pop: {
          v: 6482182,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Atlanta-Sandy Springs-Roswell, GA (CBSA 12060)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 604.28,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 29 counties of the Atlanta-Sandy Springs-Roswell, GA metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 5992,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM001206000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Atlanta-Sandy Springs-Roswell, GA metro area ($71,900) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1605,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Atlanta-Sandy Springs-Roswell, GA metro area (margin of error ±$29)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "miami", name: "Miami", lat: 25.76, lon: -80.19,
      knownFor: "Florida’s largest county economy and gateway to Latin America",
      why: ["us-miami", "us-miami-fin", "us-gfci-mia"],
      sectors: ["Banking", "Trade", "Tourism"],
      employers: [
        {
          name: "JPMorgan Chase, Citigroup, Point72, Apollo, Blackstone, Citadel",
          note: "offices on the county’s list of finance employers; Citadel has moved its headquarters to Brickell",
          c: "us-miami-fin"
        },
        { t: "International banks", note: "more than 60 in Brickell", c: "us-miami-fin" },
        { t: "Tech jobs", note: "up 25% in South Florida between 2021 and 2024", c: "us-jv-tech" }
      ],
      demand: {
        finance: ["strong", "us-miami-fin", "us-gfci-mia"],
        accounting: ["present", "us-oews-miami"],
        business: 'gap', economics: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [{ f: "finance", s: [3, 3, 2], c: ["us-gfci-mia", "us-miami-fin"] }],
      metrics: {
        pop: {
          v: 6391072,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Miami-Fort Lauderdale-West Palm Beach, FL (CBSA 33100)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 574.99,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 3 counties of the Miami-Fort Lauderdale-West Palm Beach, FL metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 5599,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM003310000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Miami-Fort Lauderdale-West Palm Beach, FL metro area ($67,190) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1763,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Miami-Fort Lauderdale-West Palm Beach, FL metro area (margin of error ±$28)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "charlotte", name: "Charlotte", lat: 35.23, lon: -80.84,
      knownFor: "North Carolina’s largest county economy and a banking centre",
      why: ["us-charlotte", "us-charlotte-f500", "us-jv-tech"],
      sectors: ["Banking", "Energy", "Logistics"],
      employers: [
        {
          name: "Bank of America, Truist",
          note: "headquarters; Fortune 500 ranks 20 and 150",
          c: "us-charlotte-f500"
        },
        {
          name: "Lowe’s, Honeywell, Nucor, Duke Energy",
          note: "headquarters in the Charlotte region",
          c: "us-charlotte-f500"
        },
        {
          t: "Headquarters and company management",
          note: "46,000 jobs, about twice what the area’s size would suggest",
          c: "us-charlotte-f500"
        },
        { t: "Tech jobs", note: "up 16% between 2021 and 2024", c: "us-jv-tech" }
      ],
      demand: {
        business: ["present", "us-charlotte-f500"],
        finance: ["strong", "us-charlotte-f500", "us-oews-charlotte"],
        economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      finance: {
        banking: ["present", "us-charlotte-f500"],
        ib: 'gap', am: 'gap', pe: 'gap', vc: 'gap', corpfin: 'gap', risk: 'gap', finconsult: 'gap'
      },
      standing: [{ f: "finance", s: [4, 3, 2], c: ["us-charlotte-f500", "us-oews-charlotte"] }],
      metrics: {
        pop: {
          v: 2938830,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Charlotte-Concord-Gastonia, NC-SC (CBSA 16740)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 277.11,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 11 counties of the Charlotte-Concord-Gastonia, NC-SC metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 5742,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM001674000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Charlotte-Concord-Gastonia, NC-SC metro area ($68,900) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1451,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Charlotte-Concord-Gastonia, NC-SC metro area (margin of error ±$29)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "philadelphia", name: "Philadelphia", lat: 39.95, lon: -75.17,
      knownFor: "Pennsylvania’s largest county economy",
      why: ["us-philadelphia", "us-philly-f500", "us-philly-bio"],
      sectors: ["Pharmaceuticals", "Insurance", "Higher education"],
      employers: [
        { name: "Cencora, Comcast", note: "headquarters; Fortune 500 ranks 10 and 35 in 2025", c: "us-philly-f500" },
        {
          name: "Lincoln National, Aramark, Universal Health Services, Toll Brothers, Burlington, Campbell’s",
          note: "headquarters in the Philadelphia area",
          c: "us-philly-f500"
        },
        { t: "Life-sciences cluster", note: "88,000 jobs, fifth among US biopharma clusters", c: "us-philly-bio" }
      ],
      demand: {
        business: ["present", "us-philly-f500"],
        finance: ["present", "us-oews-philadelphia"],
        accounting: ["present", "us-oews-philadelphia"],
        datasci: ["present", "us-oews-philadelphia"],
        economics: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "business", s: [3, 2, 1], c: ["us-philly-f500", "us-fortune-rp"] },
        { f: "software", s: [3, 3, 2], c: ["us-gser", "us-gser-na"] }
      ],
      metrics: {
        pop: {
          v: 6329118,
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/metro/totals/cbsa-est2025-alldata.csv",
          by: "Census Bureau, Vintage 2025 metropolitan area population estimates, 1 July 2025: Philadelphia-Camden-Wilmington, PA-NJ-DE-MD (CBSA 37980)",
          seen: "2026-10-03"
        },
        gdp: {
          v: 582.09,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://apps.bea.gov/regional/zip/CAGDP1.zip",
          by: "BEA, GDP by County 2024, current dollars (CAGDP1, line 3), summed over the 11 counties of the Philadelphia-Camden-Wilmington, PA-NJ-DE-MD metropolitan area as the Census Bureau delineates it (BEA stopped publishing metropolitan-area GDP after the 2023 data); the sum is Admetia’s",
          seen: "2026-10-03"
        },
        wage: {
          v: 5978,
          cur: "USD",
          basis: "mean",
          year: 2025,
          area: "metro",
          tag: "data",
          src: "https://data.bls.gov/timeseries/OEUM003798000000000000004",
          by: "BLS OEWS May 2025, mean annual wage of all occupations in the Philadelphia-Camden-Wilmington, PA-NJ-DE-MD metro area ($71,730) ÷ 12; all workers, not graduates",
          seen: "2026-10-03"
        },
        rent: {
          v: 1353,
          cur: "USD",
          year: 2024,
          area: "metro",
          tag: "data",
          src: "https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/1YRData/acsdt1y2024-b25031.dat",
          by: "Census Bureau, American Community Survey 2024 1-year, table B25031: median gross rent (rent plus utilities) of one-bedroom rented homes, Philadelphia-Camden-Wilmington, PA-NJ-DE-MD metro area (margin of error ±$29)",
          seen: "2026-10-03"
        }
      },
      programmes: []
    },
    {
      id: "austin", name: "Austin", lat: 30.27, lon: -97.74,
      knownFor: "Texas’s capital and a technology centre, with Tesla and Oracle headquartered there",
      why: ["us-austin-tesla", "us-austin-oracle", "us-gser"],
      sectors: ["Technology", "Manufacturing", "Higher education"],
      employers: [
        { name: "Tesla", note: "headquarters at 1 Tesla Road, Austin", c: "us-austin-tesla" },
        { name: "Oracle", note: "headquarters at 2300 Oracle Way, Austin", c: "us-austin-oracle" },
        { name: "Dell Technologies", note: "headquarters in Round Rock, in the Austin metro area", c: "us-austin-dell" }
      ],
      demand: {
        business: 'gap', finance: 'gap', economics: 'gap', accounting: 'gap', management: 'gap', marketing: 'gap', logistics: 'gap', analytics: 'gap', it: 'gap', software: 'gap', datasci: 'gap', ai: 'gap', cs: 'gap', bigdata: 'gap'
      },
      standing: [
        { f: "software", s: [3, 3, 2], c: ["us-gser", "us-gser-na"] }
      ],
      programmes: []
    }
  ],

  work: [
    { k: "Language", c: ["us-w-lang"] },
    { k: "Graduate labour market", c: ["us-w-nace", "us-duke", "us-mit"] },
    { k: "Recruiting calendar", c: ["us-cal", "us-gs", "us-w-cal"] },
    { k: "Where demand is now", c: ["us-nyfed", "us-dc-fed"] },
    { k: "Pay for the main graduate occupations", c: ["us-oews-nat"] }
  ],

  briefs: [
    ["countries/us-united-states.md", "Country brief: 14 hubs, employers, pay, rent and standing"],
    [
      "places/visas-and-work-rights.md",
      "§7 United States: pointer to the verified visa and work-rights guide"
    ],
    ["places/beyond-europe.md", "§1 STEM codes for business master’s, OPT numbers, Duke and MIT outcomes"],
    ["careers/finance.md", "New York analyst classes and summer-intern conversion"]
  ],
  gaps: [
    "No family is rated in Austin: its standing in software rests on Startup Genome’s ranking, and the metro’s pay, rent and size figures were not added. San Diego and Raleigh-Durham are not mapped as hubs; no source for them was read.",
    "New York finance is rated from industry and city statistics (SIFMA, the New York City Comptroller); the State Comptroller’s securities-industry report could not be read.",
    "H-1B odds for entry-level wage levels are DHS projections; USCIS has not published FY2027 counts by level.",
    "United States visas, F-1 and J-1 routes, OPT, the H-1B lottery and payment, and the rules suspended or challenged in court in 2026 are fully verified in visas_immigration/united_states/united_states_visas_immigration_guide.md; open points are listed in visas_immigration/united_states/united_states_open_questions.md.",
    "Ratings for the seven business and computing occupations rest on BLS employment in one matching occupation per family (software developers, financial and investment analysts, data scientists, management analysts, accountants and auditors, logisticians, market research analysts and marketing specialists): at least 4% of the US total is rated strong and at least 2% present. Entry-level pay and graduate hiring by city are not published by BLS, so these are measures of the market, not of graduate jobs.",
    "The BEA stopped publishing GDP by metropolitan area after the 2023 data, so each hub’s GDP is the sum of the BEA’s 2024 county figures over the counties of its Census Bureau metropolitan area; it is a derived figure, not a BEA metro statistic, and uses the 2023 area definitions.",
    "Pay is the mean annual wage of all workers in the metro area from the BLS, not what graduates earn, and rent is the median gross rent of one-bedroom rented homes from the Census Bureau’s survey, not asking rents; the Housing and Urban Development fair-market-rent tables could not be read.",
    "Named employers for Los Angeles, Boston, Seattle, Washington and San Francisco are thin because several employer and city-agency pages could not be read (Boston Planning and Development Agency, Axios, State Street, Fidelity, Vanguard, Microsoft’s filings).",
    "Startup Genome’s full top-40 table is an image, so only the ranks its text states were used (Boston and Los Angeles are given as third and fourth in North America, not by world rank)."
  ],

  claims: {
    'us-duke': { t: "Of Duke’s MMS class of 2025, 71% of graduates needing a visa had an offer at six months against 85% of those with permanent work rights, at a median base of $75,000 against $82,500; about 87% of jobs were in the US, 37% in the Northeast.", tag: "data", src: "research/places/beyond-europe.md", by: "Duke Fuqua MMS Employment Report 2025, via places/beyond-europe.md §1.4", seen: "2026-10-01" },
    'us-mit': { t: "MIT Sloan’s master of finance class of 2025, 89% international, had 97.1% of job seekers with an offer within six months at a median base of $125,000; 62.9% of accepted offers were in the US and 38.1% in New York.", tag: "data", src: "research/places/beyond-europe.md", by: "MIT CDO 2025 MFin Employment Report, via places/beyond-europe.md §1.4", seen: "2026-10-01" },
    'us-cal': { t: "By 12 December 2025, RBC had 2027 US summer roles open in New York, Houston and San Francisco, and Rothschild’s US 2027 summer analyst deadline was 1 January 2026; Perella Weinberg and Raine had also posted 2027 roles.", tag: "employer-stated", src: "research/getting-in/recruiting-calendar.md", by: "Employer job pages, via getting-in/recruiting-calendar.md", seen: "2026-10-02" },
    'us-w-lang': { t: "English is the working language of US hiring: the Census Bureau says most people in the United States speak English and most governmental functions are in English, and the recruiting pages read (Goldman Sachs, JPMorganChase, Deloitte, Bain) name no other language requirement.", tag: "data", src: "https://www.census.gov/topics/population/language-use.html", by: "US Census Bureau, language use; employer pages of Goldman Sachs, JPMorganChase, Deloitte US and Bain", seen: "2026-10-08" },
    'us-w-nace': { t: "Employers made full-time offers to 62% of their 2024 interns, down from two-thirds in 2023 and the lowest in five years (247 responding organisations); in-person internships averaged a 72% offer rate against about 56% for mixed remote and in-person ones.", tag: "data", src: "https://naceweb.org/talent-acquisition/internships/intern-offer-and-conversion-rates-fall-acceptances-rise", by: "NACE, 2025 Internship & Co-op Report (2024 intern class; survey of 16 October 2024 to 2 January 2025)", seen: "2026-10-08" },
    'us-w-cal': { t: "For summer 2027, Big Tech postings ran from July 2026 to February 2027, the Big Four from August to October 2026, consulting from March to August 2026 and finance from December 2025 to March 2026; most big employers read applications as they arrive and stop once the pipeline is full.", tag: "practitioner consensus", src: "https://simplify.jobs/blog/summer-2027-internship-timeline", by: "Simplify, when do Summer 2027 internships open", seen: "2026-10-08" },
    'us-nyfed': { t: "US recent college graduates had an unemployment rate of about 5.6% in Q2 2026, against 4.3% for all workers in Q1, and 42% were underemployed.", tag: "data", src: "research/evidence/trends.md", by: "Federal Reserve Bank of New York, College Labor Market, via evidence/trends.md", seen: "2026-09-30" },
    'us-sj': { t: "Tech accounts for an estimated 27% of total employment in the San Jose area, far above the national share.", tag: "data", src: "https://www.comptia.org/en-us/blog/state-of-the-tech-workforce-2026-trends-job-growth-and-future-opportunities/", by: "CompTIA (industry association), State of the Tech Workforce 2026 (27 Mar 2026)", seen: "2026-10-02" },
    'us-fortune-ghp': { t: "The Greater Houston Partnership counts 27 Fortune 500 headquarters in the Houston metro in 2026, tied with Chicago and second only to New York, which has 62.", tag: "data", src: "https://www.houston.org/houston-data/fortune-500-companies/", by: "Greater Houston Partnership, Fortune 500 Companies (June 2026), from the 2026 Fortune 500 list", seen: "2026-10-03" },
    'us-fortune-rp': { t: "Counting the 2026 Fortune 500 by metro, one analyst ranks New York first with 49 headquarters, then Chicago 30, Houston 26, San Jose 21, Washington 20, Dallas 19, Minneapolis and Atlanta 15 each, and San Francisco and Boston 14 each.", tag: "data", src: "https://www.realpage.com/analytics/fortune-500-companies-2026/", by: "RealPage Analytics, Markets with the Most Fortune 500 Headquarters in 2026 (17 Jun 2026); counts differ from the Houston Partnership’s because the metro areas are drawn differently", seen: "2026-10-03" },
    'us-global500': { t: "A Dallas Regional Chamber table of the cities with the most Fortune Global 500 headquarters (2025) lists Beijing 47, Tokyo 26, Paris 22, New York 20, London 16, San Jose 9, Washington 9, Chicago 8, Houston 8, Toronto 8, Dallas–Fort Worth 7, San Francisco 5, Seattle 5, Atlanta 4, Boston 4, Los Angeles 4 and Moscow 4.", tag: "data", src: "https://www.dallaschamber.org/wp-content/uploads/2026/06/EDG2026_BE-Fortune1000_2026new.pdf", by: "Dallas Regional Chamber, Regional Economic Development Guide 2026, Fortune 1000 page, from Fortune", seen: "2026-10-03" },
    'us-austin-tesla': { t: "Tesla’s filings with the US Securities and Exchange Commission give its business address as 1 Tesla Road, Austin, Texas 78725; its latest annual report on Form 10-K was filed on 29 January 2026.", tag: "employer-stated", src: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318605&type=10-K", by: "Tesla, company filings on SEC EDGAR", seen: "2026-10-04" },
    'us-austin-oracle': { t: "Oracle’s filings with the US Securities and Exchange Commission give its business address as 2300 Oracle Way, Austin, Texas 78741; its latest annual report on Form 10-K was filed on 22 June 2026.", tag: "employer-stated", src: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001341439&type=10-K", by: "Oracle, company filings on SEC EDGAR", seen: "2026-10-04" },
    'us-austin-dell': { t: "Dell Technologies’ filings with the US Securities and Exchange Commission give its business address as One Dell Way, Round Rock, Texas 78682; its latest annual report on Form 10-K was filed on 16 March 2026.", tag: "employer-stated", src: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001571996&type=10-K", by: "Dell Technologies, company filings on SEC EDGAR", seen: "2026-10-04" },
    'us-gser': { t: "Startup Genome’s 2026 report keeps Silicon Valley, New York City and London as the top three start-up ecosystems; Seattle rose five places to 10th, Toronto-Waterloo is 13th, Austin 18th, Dallas 27th and Philadelphia 33rd.", tag: "data", src: "https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/global-startup-ecosystem-ranking-2026-top-40", by: "Startup Genome, Global Startup Ecosystem Report 2026 (June 2026), Top 40 key findings", seen: "2026-10-03" },
    'us-gser-na': { t: "Within North America, Startup Genome’s 2026 ranking puts Silicon Valley first, New York City second, Boston third and Los Angeles fourth, with Philadelphia 14th.", tag: "data", src: "https://startupgenome.com/insights/north-americas-startup-ecosystems-diversifying-and-deeply-ai-native", by: "Startup Genome, North America’s ecosystems (21 Jul 2026)", seen: "2026-10-03" },
    'us-oews-nat': { t: "Across the United States in May 2025 there were 1,687,890 software developers (mean pay $148,100), 361,980 financial and investment analysts ($116,800), 262,440 data scientists ($126,800), 898,280 management analysts ($113,790) and 1,449,500 accountants and auditors ($94,750).", tag: "data", src: "https://data.bls.gov/timeseries/OEUN000000000000015125201", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, national estimates (read through the BLS public data API)", seen: "2026-10-03" },
    'us-gs': { t: "Goldman Sachs’s 2027 Summer Analyst Program in the Americas is a nine-to-ten-week internship for undergraduates, usually taken in the third or penultimate year of study; applications for some businesses were open when read.", tag: "employer-stated", src: "https://www.goldmansachs.com/careers/students/programs-and-internships/americas/2027-summer-analyst-program", by: "Goldman Sachs, 2027 Summer Analyst Program (Americas)", seen: "2026-10-03" },
    'us-sifma': { t: "About 197,300 people work in New York City’s securities industry (219,100 in the state), and 1 in 13 New York City jobs is directly or indirectly tied to it; the industry paid $6.7 billion, 8.4% of city tax revenue.", tag: "data", src: "https://www.sifma.org/research/white-papers/the-street-the-city-and-the-state", by: "SIFMA, The Street, the City and the State (10 Feb 2026), from state and federal data", seen: "2026-10-03" },
    'us-nycomp': { t: "New York City’s securities industry employed a record 201,500 people in 2024, with an average bonus of about $247,000 forecast for 2025.", tag: "data", src: "https://comptroller.nyc.gov/reports/annual-state-of-the-citys-economy-and-finances-2025/", by: "Office of the New York City Comptroller, Annual State of the City’s Economy and Finances 2025 (15 Dec 2025)", seen: "2026-10-03" },
    'us-jv-tech': { t: "The Bay Area remains the top tech talent centre in the United States, both in the number of tech jobs and in the tech sector’s share of regional employment; between 2021 and 2024 tech jobs grew 10% there, against 26% in Dallas, 25% in South Florida and 16% in Charlotte.", tag: "data", src: "https://jointventure.org/images/stories/pdf/index2026-jvsv.pdf", by: "Joint Venture Silicon Valley, 2026 Silicon Valley Index, from CBRE Research, Scoring Tech Talent 2025", seen: "2026-10-03" },
    'us-jv-top20': { t: "The 20 largest tech companies in Silicon Valley and San Francisco employed about 215,000 people in mid-2025, 9% of the region’s workforce; the largest are Google, Apple, Meta, Amazon, Cisco and Tesla, and in 2025 Google cut 4,000 Bay Area jobs while NVIDIA added 1,000.", tag: "data", src: "https://jointventure.org/images/stories/pdf/index2026-jvsv.pdf", by: "Joint Venture Silicon Valley, 2026 Silicon Valley Index, employment chapter", seen: "2026-10-03" },
    'us-jv-vc': { t: "Silicon Valley and San Francisco companies drew about half of all US venture capital in 2025 (49%); AI companies took nearly $80 billion, 83% of the region’s total, and San Francisco’s share of the regional total rose to 62%.", tag: "data", src: "https://jointventure.org/images/stories/pdf/index2026-jvsv.pdf", by: "Joint Venture Silicon Valley, 2026 Silicon Valley Index, venture capital chapter, from CB Insights", seen: "2026-10-03" },
    'us-jv-unicorns': { t: "Silicon Valley still hosts about half of US unicorn companies, produced over 23,000 utility patents in 2025 (17% of US patent assignees), and its tech workforce includes nearly 140,000 software developers.", tag: "data", src: "https://jointventure.org/images/stories/pdf/index2026-jvsv.pdf", by: "Joint Venture Silicon Valley, 2026 Silicon Valley Index, executive summary", seen: "2026-10-03" },
    'us-houston-f500': { t: "Twenty-seven Fortune 500 companies are headquartered in the Houston area, among them Exxon Mobil (rank 9), Chevron (21), Phillips 66 (29), Sysco (55), ConocoPhillips (75), Hewlett Packard Enterprise (133) and Baker Hughes (164).", tag: "data", src: "https://www.houston.org/news/houston-ties-for-no-2-metro-in-fortune-500-hq-ranking/", by: "Greater Houston Partnership (4 Jun 2026), from the 2026 Fortune 500 list", seen: "2026-10-03" },
    'us-dallas-f500': { t: "Dallas–Fort Worth has 24 Fortune 500 headquarters in 2026, among them McKesson (a Fortune 10 company), AT&T (35), American Airlines Group (86), CBRE Group (118) and Texas Instruments (252); seven are on the Global 500.", tag: "data", src: "https://www.dallaschamber.org/wp-content/uploads/2026/06/EDG2026_BE-Fortune1000_2026new.pdf", by: "Dallas Regional Chamber, Regional Economic Development Guide 2026, Fortune 1000 page", seen: "2026-10-03" },
    'us-chicago-f500': { t: "Chicago is the headquarters of Archer Daniels Midland (Fortune 500 rank 58), United Airlines (81), McDonald’s (170), Kraft Heinz (184), Exelon (189), GE HealthCare (217) and Motorola Solutions (378); Illinois has 29 Fortune 500 companies.", tag: "employer-stated", src: "https://dceo.illinois.gov/whyillinois/businessminded.html", by: "Illinois Department of Commerce and Economic Opportunity, Business Minded", seen: "2026-10-03" },
    'us-charlotte-f500': { t: "The Charlotte region is the headquarters of Bank of America (Fortune 500 rank 20), Lowe’s (52), Honeywell (116), Nucor (142), Duke Energy (145) and Truist (150); it has 46,000 jobs in headquarters and company management, about twice what its size would suggest.", tag: "employer-stated", src: "https://charlotteregion.com/fortune-500-1000/", by: "Charlotte Regional Business Alliance, Fortune 500 and 1000 (read October 2026)", seen: "2026-10-03" },
    'us-atlanta-hq': { t: "Metro Atlanta has 14 Fortune 500 headquarters, according to the state’s economic-development site, which names The Home Depot, Mercedes-Benz USA and Porsche among the companies based there.", tag: "employer-stated", src: "https://www.selectgeorgia.com/discover-georgia/industries/why-atlanta/top-companies/", by: "Select Georgia (Georgia Department of Economic Development), Atlanta’s Top Companies (read October 2026)", seen: "2026-10-03" },
    'us-seattle-amazon': { t: "Amazon employs about 49,000 people in Seattle (down from 60,000 in 2020) and about 15,000 in Bellevue, and the University of Washington has overtaken it as Seattle’s largest employer.", tag: "practitioner consensus", src: "https://www.kuow.org/stories/amazon-is-no-longer-seattle-s-top-employer-but-its-bellevue-headcount-continues-to-climb", by: "KUOW (public radio), Amazon is no longer Seattle’s top employer (read October 2026)", seen: "2026-10-03" },
    'us-dc-fed': { t: "Federal employment in the Washington region fell from about 375,800 jobs at the start of 2025 to 312,500 by May 2026, the lowest in 30 years, and the metro lost 100,500 jobs in all between May 2025 and May 2026.", tag: "data", src: "https://wsbt.com/news/nation-world/dc-federal-workforce-virginia-maryland-government-jobs-employment-bureau-labor-statistics-trump-administration-layoffs-unemployment-economy-trump-musk-firings-living-trump-president-data-hiring-dmv", by: "Associated Press (21 Jul 2026), reporting Bureau of Labor Statistics data", seen: "2026-10-03" },
    'us-dc-hq2': { t: "Amazon’s second headquarters in Arlington, Virginia, announced on 13 November 2018, commits more than $2 billion and at least 25,000 jobs by 2030; the first phase was finished in spring 2023.", tag: "employer-stated", src: "https://www.arlingtonva.us/Government/Topics/Amazon", by: "Arlington County, Amazon HQ2", seen: "2026-10-03" },
    'us-boston-bio': { t: "Boston-Cambridge ranks first among US biopharma clusters in 2026, with 117,108 jobs, $6.85 billion of venture capital in 2025 and 7,037 NIH awards worth $4.339 billion.", tag: "data", src: "https://www.genengnews.com/topics/drug-discovery/top-10-u-s-biopharma-clusters-2026/", by: "Genetic Engineering and Biotechnology News, Top 10 U.S. Biopharma Clusters 2026 (1 Jun 2026)", seen: "2026-10-03" },
    'us-philly-f500': { t: "Eight Philadelphia-area companies were on the 2025 Fortune 500, led by Cencora (rank 10) and Comcast (35), then Lincoln National (228), Aramark (239), Universal Health Services (271), Toll Brothers (390), Burlington (399) and Campbell’s (419).", tag: "data", src: "https://www.inquirer.com/business/fortune-500-list-philadelphia-companies-20250604.html", by: "The Philadelphia Inquirer (4 Jun 2025), from the 2025 Fortune 500 list", seen: "2026-10-03" },
    'us-philly-bio': { t: "Greater Philadelphia ranks fifth among US biopharma clusters in 2026, with 88,000 jobs, $1.31 billion of venture capital in 2025 and 3,201 NIH awards worth $1.94 billion.", tag: "data", src: "https://www.genengnews.com/topics/drug-discovery/top-10-u-s-biopharma-clusters-2026/", by: "Genetic Engineering and Biotechnology News, Top 10 U.S. Biopharma Clusters 2026 (1 Jun 2026)", seen: "2026-10-03" },
    'us-miami-fin': { t: "Miami-Dade’s finance sector has more than 150,000 jobs and about $28 billion of gross regional product; more than 60 international banks operate in Brickell, and Citadel has moved its headquarters there.", tag: "employer-stated", src: "https://www.beaconcouncil.com/finance/", by: "Miami-Dade Beacon Council (county economic-development partnership), Finance (read October 2026)", seen: "2026-10-03" },
    'us-la-econ': { t: "Los Angeles County’s economy exceeds $1 trillion and grew 2.4% in 2025, though the county has lost about 400,000 residents since before the pandemic and the 2028 Olympics are projected to add up to $18 billion.", tag: "employer-stated", src: "https://laedc.org/from-disruption-to-direction-la-countys-economic-outlook/", by: "Los Angeles County Economic Development Corporation, From Disruption to Direction (2026 outlook)", seen: "2026-10-03" },
    'us-gfci-ny': { t: "The Global Financial Centres Index 40 (September 2026) ranks New York first of 117 financial centres, four rating points ahead of London, and calls it the only North American centre in the world top ten.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1 and regional summary", seen: "2026-10-03" },
    'us-gfci-sf': { t: "The Global Financial Centres Index 40 (September 2026) ranks San Francisco 11th of 117 financial centres (5th in the March 2026 edition) and second among North American centres, after New York.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-gfci-la': { t: "The Global Financial Centres Index 40 (September 2026) ranks Los Angeles 14th of 117 financial centres (12th in the March 2026 edition) and third among North American centres, after New York and San Francisco.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-gfci-chi': { t: "The Global Financial Centres Index 40 (September 2026) ranks Chicago 15th of 117 financial centres (14th in the March 2026 edition) and fourth among North American centres.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-gfci-bos': { t: "The Global Financial Centres Index 40 (September 2026) ranks Boston 18th of 117 financial centres (13th in the March 2026 edition) and fifth among North American centres.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-gfci-dc': { t: "The Global Financial Centres Index 40 (September 2026) ranks Washington DC 19th of 117 financial centres (17th in the March 2026 edition) and sixth among North American centres.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-gfci-atl': { t: "The Global Financial Centres Index 40 (September 2026) ranks Atlanta 27th of 117 financial centres (39th in the March 2026 edition) and seventh among North American centres; Houston, Dallas and Charlotte are not among the 117.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-gfci-mia': { t: "The Global Financial Centres Index 40 (September 2026) ranks Miami 36th of 117 financial centres (32nd in the March 2026 edition) and eighth among North American centres.", tag: "data", src: "https://www.zyen.com/publication_document_redirect/the-global-financial-centres-index-40/", by: "Z/Yen and the China Development Institute, Global Financial Centres Index 40 (September 2026), Table 1", seen: "2026-10-03" },
    'us-newyork': { t: "The BEA puts GDP in New York County, New York (Manhattan), the core of the New York area, at $1006.7 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-siliconvalley': { t: "The BEA puts GDP in Santa Clara County, California, the core of the San Jose area, at $438.5 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-chicago': { t: "The BEA puts GDP in Cook County, Illinois, the core of the Chicago area, at $546.4 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-los-angeles': { t: "The BEA puts GDP in Los Angeles County, California, the core of the Los Angeles area, at $1003.0 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-houston': { t: "The BEA puts GDP in Harris County, Texas, the core of the Houston area, at $592.8 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-dallas': { t: "The BEA puts GDP in Dallas County, Texas, the core of the Dallas area, at $389.4 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-washington': { t: "The BEA puts GDP in the District of Columbia, the core of the Washington, DC area, at $184.3 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-boston': { t: "The BEA puts GDP in Suffolk County, Massachusetts, the core of the Boston area, at $190.8 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-seattle': { t: "The BEA puts GDP in King County, Washington State, the core of the Seattle area, at $477.2 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-san-francisco': { t: "The BEA puts GDP in San Francisco County, California, the core of the San Francisco area, at $268.3 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-atlanta': { t: "The BEA puts GDP in Fulton County, Georgia, the core of the Atlanta area, at $243.6 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-miami': { t: "The BEA puts GDP in Miami-Dade County, Florida, the core of the Miami area, at $260.8 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-charlotte': { t: "The BEA puts GDP in Mecklenburg County, North Carolina, the core of the Charlotte area, at $186.1 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-philadelphia': { t: "The BEA puts GDP in Philadelphia County, Pennsylvania, the core of the Philadelphia area, at $135.0 billion in 2024 (current dollars).", tag: "data", src: "https://apps.bea.gov/regional/zip/CAGDP1.zip", by: "US Bureau of Economic Analysis, GDP by County 2024 (table CAGDP1, current dollars; released 5 Feb 2026)", seen: "2026-10-03" },
    'us-oews-newyork': { t: "In May 2025 the New York metro area had 121,000 software developers (mean pay $165,870, $130,650 at the 25th percentile), 53,870 financial and investment analysts, 23,160 data scientists, 67,630 management analysts, 111,930 accountants and auditors, 8,860 logisticians and 79,290 market research analysts and marketing specialists, among 9,492,000 jobs in all; that is 7.2% of all US software developers and 14.9% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM003562000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, New York-Newark-Jersey City, NY-NJ (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-siliconvalley': { t: "In May 2025 the San Jose metro area had 87,350 software developers (mean pay $221,710, $173,650 at the 25th percentile), 3,880 financial and investment analysts, 6,060 data scientists, 9,020 management analysts, 13,180 accountants and auditors, 3,440 logisticians and 12,710 market research analysts and marketing specialists, among 1,134,970 jobs in all; that is 5.2% of all US software developers and 1.1% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM004194000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, San Jose-Sunnyvale-Santa Clara, CA (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-chicago': { t: "In May 2025 the Chicago metro area had 40,370 software developers (mean pay $141,640, $104,530 at the 25th percentile), 17,150 financial and investment analysts, 7,940 data scientists, 37,510 management analysts, 41,360 accountants and auditors, 10,220 logisticians and 30,970 market research analysts and marketing specialists, among 4,513,280 jobs in all; that is 2.4% of all US software developers and 4.7% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM001698000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Chicago-Naperville-Elgin, IL-IN (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-los-angeles': { t: "In May 2025 the Los Angeles metro area had 55,540 software developers (mean pay $161,900, $127,530 at the 25th percentile), 19,600 financial and investment analysts, 9,850 data scientists, 37,060 management analysts, 70,640 accountants and auditors, 10,950 logisticians and 39,390 market research analysts and marketing specialists, among 6,271,560 jobs in all; that is 3.3% of all US software developers and 5.4% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM003108000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Los Angeles-Long Beach-Anaheim, CA (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-houston': { t: "In May 2025 the Houston metro area had 22,940 software developers (mean pay $133,130, $101,190 at the 25th percentile), 6,510 financial and investment analysts, 4,060 data scientists, 9,050 management analysts, 28,400 accountants and auditors, 5,420 logisticians and 14,480 market research analysts and marketing specialists, among 3,289,720 jobs in all; that is 1.4% of all US software developers and 1.8% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM002642000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Houston-Pasadena-The Woodlands, TX (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-dallas': { t: "In May 2025 the Dallas–Fort Worth metro area had 67,030 software developers (mean pay $138,810, $105,660 at the 25th percentile), 11,530 financial and investment analysts, 10,120 data scientists, 18,010 management analysts, 37,450 accountants and auditors, 7,050 logisticians and 20,900 market research analysts and marketing specialists, among 4,049,800 jobs in all; that is 4.0% of all US software developers and 3.2% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM001910000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Dallas-Fort Worth-Arlington, TX (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-washington': { t: "In May 2025 the Washington metro area had 69,060 software developers (mean pay $153,100, $123,720 at the 25th percentile), 10,930 financial and investment analysts, 9,260 data scientists, 62,360 management analysts, 41,470 accountants and auditors, 8,020 logisticians and 21,090 market research analysts and marketing specialists, among 3,136,190 jobs in all; that is 4.1% of all US software developers and 3.0% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM004790000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Washington-Arlington-Alexandria, DC-VA-MD-WV (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-boston': { t: "In May 2025 the Boston metro area had 42,310 software developers (mean pay $162,440, $131,880 at the 25th percentile), 13,010 financial and investment analysts, 7,930 data scientists, 26,450 management analysts, 37,150 accountants and auditors, 4,510 logisticians and 32,310 market research analysts and marketing specialists, among 2,703,890 jobs in all; that is 2.5% of all US software developers and 3.6% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM001446000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Boston-Cambridge-Newton, MA-NH (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-seattle': { t: "In May 2025 the Seattle metro area had 92,770 software developers (mean pay $174,920, $132,800 at the 25th percentile), 6,170 financial and investment analysts, 8,370 data scientists, 16,930 management analysts, 22,100 accountants and auditors, 4,420 logisticians and 18,030 market research analysts and marketing specialists, among 2,086,210 jobs in all; that is 5.5% of all US software developers and 1.7% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM004266000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Seattle-Tacoma-Bellevue, WA (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-san-francisco': { t: "In May 2025 the San Francisco metro area had 69,030 software developers (mean pay $193,430, $163,500 at the 25th percentile), 9,910 financial and investment analysts, 10,460 data scientists, 23,560 management analysts, 25,170 accountants and auditors, 4,570 logisticians and 24,120 market research analysts and marketing specialists, among 2,373,920 jobs in all; that is 4.1% of all US software developers and 2.7% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM004186000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, San Francisco-Oakland-Fremont, CA (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-atlanta': { t: "In May 2025 the Atlanta metro area had 36,300 software developers (mean pay $135,870, $104,640 at the 25th percentile), 7,740 financial and investment analysts, 6,820 data scientists, 26,870 management analysts, 30,150 accountants and auditors, 7,420 logisticians and 19,920 market research analysts and marketing specialists, among 2,889,670 jobs in all; that is 2.2% of all US software developers and 2.1% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM001206000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Atlanta-Sandy Springs-Roswell, GA (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-miami': { t: "In May 2025 the Miami metro area had 18,900 software developers (mean pay $144,730, $102,710 at the 25th percentile), 6,400 financial and investment analysts, 3,040 data scientists, 16,540 management analysts, 30,950 accountants and auditors, 4,500 logisticians, among 2,819,940 jobs in all; that is 1.1% of all US software developers and 1.8% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM003310000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Miami-Fort Lauderdale-West Palm Beach, FL (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-charlotte': { t: "In May 2025 the Charlotte metro area had 20,820 software developers (mean pay $139,030, $107,680 at the 25th percentile), 6,790 financial and investment analysts, 4,420 data scientists, 8,000 management analysts, 16,820 accountants and auditors, 2,330 logisticians and 9,500 market research analysts and marketing specialists, among 1,358,370 jobs in all; that is 1.2% of all US software developers and 1.9% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM001674000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Charlotte-Concord-Gastonia, NC-SC (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" },
    'us-oews-philadelphia': { t: "In May 2025 the Philadelphia metro area had 28,480 software developers (mean pay $136,050, $103,920 at the 25th percentile), 10,050 financial and investment analysts, 6,480 data scientists, 15,460 management analysts, 29,370 accountants and auditors, 4,670 logisticians and 17,600 market research analysts and marketing specialists, among 2,897,830 jobs in all; that is 1.7% of all US software developers and 2.8% of all US financial and investment analysts.", tag: "data", src: "https://data.bls.gov/timeseries/OEUM003798000000000000004", by: "Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, Philadelphia-Camden-Wilmington, PA-NJ-DE-MD (read through the BLS public data API; every figure is for that metro area)", seen: "2026-10-03" }
  }
});

if (window.I18N) I18N.add('it', {
  "English is the working language of US hiring: the Census Bureau says most people in the United States speak English and most governmental functions are in English, and the recruiting pages read (Goldman Sachs, JPMorganChase, Deloitte, Bain) name no other language requirement.":
    "L’inglese è la lingua di lavoro delle assunzioni negli USA: il Census Bureau afferma che la maggior parte delle persone negli Stati Uniti parla inglese e che la maggior parte delle funzioni governative è in inglese, e le pagine di reclutamento lette (Goldman Sachs, JPMorganChase, Deloitte, Bain) non indicano altri requisiti linguistici.",
  "Employers made full-time offers to 62% of their 2024 interns, down from two-thirds in 2023 and the lowest in five years (247 responding organisations); in-person internships averaged a 72% offer rate against about 56% for mixed remote and in-person ones.":
    "I datori hanno fatto offerte a tempo pieno al 62% dei loro stagisti del 2024, in calo rispetto ai due terzi del 2023 e il livello più basso in cinque anni (247 organizzazioni rispondenti); gli stage in presenza hanno avuto un tasso medio di offerta del 72% contro circa il 56% di quelli misti a distanza e in presenza.",
  "For summer 2027, Big Tech postings ran from July 2026 to February 2027, the Big Four from August to October 2026, consulting from March to August 2026 and finance from December 2025 to March 2026; most big employers read applications as they arrive and stop once the pipeline is full.":
    "Per l’estate 2027, gli annunci delle Big Tech sono andati da luglio 2026 a febbraio 2027, quelli delle Big Four da agosto a ottobre 2026, la consulenza da marzo ad agosto 2026 e la finanza da dicembre 2025 a marzo 2026; la maggior parte dei grandi datori legge le candidature man mano che arrivano e smette quando la rosa è piena.",
  "The highest pay and the hardest visa. New York is the finance centre, the Bay Area holds about half of US venture capital, and Houston, Chicago and Dallas each host two dozen Fortune 500 headquarters, but the usual path for a European graduate is a US degree for OPT work rights and then a weighted H-1B lottery that favours higher wage levels. Routes that need no US degree (J-1 intern and trainee placements, L-1 transfers, E-2 treaty status) exist but are narrower.":
    "Gli stipendi più alti e il visto più difficile. New York è il centro della finanza, la Bay Area attrae circa metà del venture capital statunitense, e Houston, Chicago e Dallas ospitano ciascuna oltre venti sedi della Fortune 500, ma il percorso abituale per un laureato europeo è una laurea statunitense per i diritti di lavoro OPT e poi una lotteria H-1B ponderata che favorisce i livelli salariali più alti. Esistono percorsi che non richiedono una laurea statunitense (tirocini e formazione J-1, trasferimenti L-1, status E-2 da trattato), ma sono più stretti.",
  "Finance and banking":
    "Finanza e banche",
  "Technology":
    "Tecnologia",
  "Consulting":
    "Consulenza",
  "Healthcare and life sciences":
    "Sanità e scienze della vita",
  "Energy":
    "Energia",
  "H-1B odds for entry-level wage levels are DHS projections; USCIS has not published FY2027 counts by level.":
    "Le probabilità H-1B ai livelli salariali d’ingresso sono proiezioni del DHS; l’USCIS non ha pubblicato i dati FY2027 per livello.",
  "United States visas, F-1 and J-1 routes, OPT, the H-1B lottery and payment, and the rules suspended or challenged in court in 2026 are fully verified in visas_immigration/united_states/united_states_visas_immigration_guide.md; open points are listed in visas_immigration/united_states/united_states_open_questions.md.":
    "I visti per gli Stati Uniti, i percorsi F-1 e J-1, l’OPT, la lotteria e il pagamento H-1B e le regole sospese o impugnate in tribunale nel 2026 sono pienamente verificati in visas_immigration/united_states/united_states_visas_immigration_guide.md; i punti ancora aperti sono elencati in visas_immigration/united_states/united_states_open_questions.md.",
  "Ratings for the seven business and computing occupations rest on BLS employment in one matching occupation per family (software developers, financial and investment analysts, data scientists, management analysts, accountants and auditors, logisticians, market research analysts and marketing specialists): at least 4% of the US total is rated strong and at least 2% present. Entry-level pay and graduate hiring by city are not published by BLS, so these are measures of the market, not of graduate jobs.":
    "Le valutazioni per le sette professioni economiche e informatiche si basano sull’occupazione BLS in una professione corrispondente per famiglia (sviluppatori software, analisti finanziari e di investimento, data scientist, analisti di management, contabili e revisori, logistici, analisti di ricerche di mercato e specialisti di marketing): almeno il 4% del totale statunitense vale forte e almeno il 2% presente. Il BLS non pubblica retribuzioni d’ingresso né assunzioni di laureati per città, quindi sono misure del mercato, non dei posti per laureati.",
  "The BEA stopped publishing GDP by metropolitan area after the 2023 data, so each hub’s GDP is the sum of the BEA’s 2024 county figures over the counties of its Census Bureau metropolitan area; it is a derived figure, not a BEA metro statistic, and uses the 2023 area definitions.":
    "Il BEA ha smesso di pubblicare il PIL per area metropolitana dopo i dati del 2023, quindi il PIL di ogni polo è la somma delle cifre del BEA per il 2024 sulle contee della sua area metropolitana secondo il Census Bureau; è una cifra derivata, non una statistica metropolitana del BEA, e usa le definizioni di area del 2023.",
  "Pay is the mean annual wage of all workers in the metro area from the BLS, not what graduates earn, and rent is the median gross rent of one-bedroom rented homes from the Census Bureau’s survey, not asking rents; the Housing and Urban Development fair-market-rent tables could not be read.":
    "La retribuzione è il salario annuo medio di tutti i lavoratori dell’area metropolitana secondo il BLS, non quello dei laureati, e l’affitto è l’affitto lordo mediano dei bilocali in locazione dall’indagine del Census Bureau, non i canoni richiesti; le tabelle degli affitti di mercato equi del Dipartimento per l’edilizia abitativa non erano leggibili.",
  "Named employers for Los Angeles, Boston, Seattle, Washington and San Francisco are thin because several employer and city-agency pages could not be read (Boston Planning and Development Agency, Axios, State Street, Fidelity, Vanguard, Microsoft’s filings).":
    "I datori di lavoro citati per Los Angeles, Boston, Seattle, Washington e San Francisco sono pochi perché diverse pagine di aziende e agenzie cittadine non si sono potute leggere (Boston Planning and Development Agency, Axios, State Street, Fidelity, Vanguard, i documenti di Microsoft).",
  "Startup Genome’s full top-40 table is an image, so only the ranks its text states were used (Boston and Los Angeles are given as third and fourth in North America, not by world rank).":
    "La tabella completa dei primi 40 di Startup Genome è un’immagine, quindi sono stati usati solo i posti indicati nel testo (Boston e Los Angeles sono dati come terza e quarta in Nord America, non per posto nel mondo).",
  "Country brief: 14 hubs, employers, pay, rent and standing":
    "Dossier sul paese: 14 poli, datori di lavoro, retribuzioni, affitti e posizionamento",
  "§7 United States: pointer to the verified visa and work-rights guide":
    "§7 Stati Uniti: rimando alla guida verificata su visti e diritto al lavoro",
  "§1 STEM codes for business master’s, OPT numbers, Duke and MIT outcomes":
    "§1 Codici STEM per i master in economia, numeri dell’OPT, esiti di Duke e MIT",
  "New York analyst classes and summer-intern conversion":
    "Le classi di analyst a New York e la conversione degli stagisti estivi",
  "Wall Street banks, asset managers and trading firms":
    "Le banche di Wall Street, i gestori patrimoniali e le società di trading",
  "Investment banking":
    "Investment banking",
  "Sales and trading":
    "Sales and trading",
  "Asset management":
    "Asset management",
  "Accounting":
    "Contabilità",
  "38.1% of accepted offers were in New York":
    "il 38,1% delle offerte accettate era a New York",
  "Finance employers of MIT’s master of finance class":
    "I datori di lavoro in finanza della classe del master in finanza del MIT",
  "US summer analyst roles open a year and a half ahead":
    "i ruoli di summer analyst negli Stati Uniti aprono un anno e mezzo prima",
  "2027 summer analyst programme for undergraduates":
    "programma di summer analyst 2027 per studenti universitari",
  "about 197,000 jobs in the city":
    "circa 197.000 posti in città",
  "Securities industry":
    "Settore dei titoli",
  "62 in the metro area, the most of any US metro":
    "62 nell’area metropolitana, più di qualsiasi altra area degli Stati Uniti",
  "Fortune 500 headquarters":
    "Sedi della Fortune 500",
  "Tech employers, a quarter of all jobs":
    "I datori di lavoro della tecnologia, un quarto di tutti i posti",
  "Semiconductors":
    "Semiconduttori",
  "Software":
    "Software",
  "Venture capital":
    "Venture capital",
  "about 27% of all jobs in the San Jose area":
    "circa il 27% di tutti i posti nell’area di San Jose",
  "Tech employers":
    "I datori di lavoro della tecnologia",
  "the largest of the 20 tech employers that hold 215,000 jobs":
    "i maggiori dei 20 datori di lavoro tecnologici che contano 215.000 posti",
  "added 1,000 Bay Area jobs in 2025, the most of the 20 largest":
    "ha aggiunto 1.000 posti nella Bay Area nel 2025, più di tutte le 20 maggiori",
  "nearly 140,000 in Silicon Valley":
    "quasi 140.000 in Silicon Valley",
  "Software developers":
    "Sviluppatori software",
  "The largest county economy in the Midwest’s biggest city":
    "La maggiore economia di contea della più grande città del Midwest",
  "Banking":
    "Banca",
  "Professional services":
    "Servizi professionali",
  "Logistics":
    "Logistica",
  "GDP of $546.4 billion (2024)":
    "PIL di 546,4 miliardi di $ (2024)",
  "Businesses in the core county":
    "Le imprese della contea centrale",
  "headquarters, with GE HealthCare and Motorola Solutions":
    "sedi centrali, con GE HealthCare e Motorola Solutions",
  "27 in the metro area, tied with Houston for second":
    "27 nell’area metropolitana, alla pari con Houston al secondo posto",
  "The largest county economy in the United States":
    "La maggiore economia di contea degli Stati Uniti",
  "Media":
    "Media",
  "Ports and logistics":
    "Porti e logistica",
  "Aerospace":
    "Aerospazio",
  "GDP of $1,003.0 billion (2024)":
    "PIL di 1.003,0 miliardi di $ (2024)",
  "above $1 trillion, up 2.4% in 2025":
    "sopra 1 trilione di $, in crescita del 2,4% nel 2025",
  "County economy":
    "Economia della contea",
  "4 in the metro area (2025)":
    "4 nell’area metropolitana (2025)",
  "Fortune Global 500 headquarters":
    "Sedi della Fortune Global 500",
  "The largest county economy in Texas, the US energy capital":
    "La maggiore economia di contea del Texas, capitale statunitense dell’energia",
  "Oil and gas":
    "Petrolio e gas",
  "headquarters; Fortune 500 ranks 9, 21 and 29":
    "sedi centrali; posizioni 9, 21 e 29 della Fortune 500",
  "headquarters":
    "sedi centrali",
  "27 in the metro area, tied with Chicago for second":
    "27 nell’area metropolitana, alla pari con Chicago al secondo posto",
  "GDP of $592.8 billion (2024)":
    "PIL di 592,8 miliardi di $ (2024)",
  "Texas’s second county economy, for corporate headquarters and banking":
    "La seconda economia di contea del Texas, per sedi societarie e banche",
  "headquarters in Dallas–Fort Worth":
    "sedi centrali a Dallas–Fort Worth",
  "a Fortune 10 company headquartered in the region":
    "azienda tra le prime 10 della Fortune, con sede nella regione",
  "24 in the metro area":
    "24 nell’area metropolitana",
  "up 26% between 2021 and 2024, the fastest of the large US tech centres":
    "in crescita del 26% tra il 2021 e il 2024, la più rapida tra i grandi poli tecnologici statunitensi",
  "Tech jobs":
    "Posti nella tecnologia",
  "The federal capital":
    "La capitale federale",
  "Government":
    "Pubblica amministrazione",
  "312,500 jobs in the region by May 2026, down from about 375,800":
    "312.500 posti nella regione a maggio 2026, da circa 375.800",
  "Federal workforce":
    "Forza lavoro federale",
  "second headquarters in Arlington, at least 25,000 jobs planned by 2030":
    "seconda sede ad Arlington, almeno 25.000 posti previsti entro il 2030",
  "20 in the metro area":
    "20 nell’area metropolitana",
  "New England’s main city, for finance, universities and life sciences":
    "La città principale del New England, per finanza, università e scienze della vita",
  "Life sciences":
    "Scienze della vita",
  "Texas’s capital and a technology centre, with Tesla and Oracle headquartered there":
    "La capitale del Texas e un polo tecnologico, sede di Tesla e Oracle",
  "headquarters at 1 Tesla Road, Austin": "sede centrale al 1 Tesla Road, Austin",
  "headquarters at 2300 Oracle Way, Austin": "sede centrale al 2300 Oracle Way, Austin",
  "headquarters in Round Rock, in the Austin metro area": "sede centrale a Round Rock, nell’area metropolitana di Austin",
  "Tesla’s filings with the US Securities and Exchange Commission give its business address as 1 Tesla Road, Austin, Texas 78725; its latest annual report on Form 10-K was filed on 29 January 2026.":
    "La documentazione di Tesla presso la Securities and Exchange Commission statunitense indica come indirizzo legale 1 Tesla Road, Austin, Texas 78725; l’ultima relazione annuale (Form 10-K) è stata depositata il 29 gennaio 2026.",
  "Oracle’s filings with the US Securities and Exchange Commission give its business address as 2300 Oracle Way, Austin, Texas 78741; its latest annual report on Form 10-K was filed on 22 June 2026.":
    "La documentazione di Oracle presso la Securities and Exchange Commission statunitense indica come indirizzo legale 2300 Oracle Way, Austin, Texas 78741; l’ultima relazione annuale (Form 10-K) è stata depositata il 22 giugno 2026.",
  "Dell Technologies’ filings with the US Securities and Exchange Commission give its business address as One Dell Way, Round Rock, Texas 78682; its latest annual report on Form 10-K was filed on 16 March 2026.":
    "La documentazione di Dell Technologies presso la Securities and Exchange Commission statunitense indica come indirizzo legale One Dell Way, Round Rock, Texas 78682; l’ultima relazione annuale (Form 10-K) è stata depositata il 16 marzo 2026.",
  "No family is rated in Austin: its standing in software rests on Startup Genome’s ranking, and the metro’s pay, rent and size figures were not added. San Diego and Raleigh-Durham are not mapped as hubs; no source for them was read.":
    "Nessuna famiglia è valutata ad Austin: il suo posizionamento nel software si basa sulla classifica di Startup Genome e non sono stati aggiunti i dati su stipendi, affitti e dimensioni dell’area metropolitana. San Diego e Raleigh-Durham non sono segnate come poli: non è stata letta alcuna fonte.",
  "Higher education":
    "Istruzione universitaria",
  "117,108 jobs, the largest US biopharma cluster":
    "117.108 posti, il maggiore polo biofarmaceutico degli Stati Uniti",
  "Life-sciences cluster":
    "Polo delle scienze della vita",
  "14 in the metro area":
    "14 nell’area metropolitana",
  "third in North America in Startup Genome’s 2026 ranking":
    "terzo in Nord America nel ranking 2026 di Startup Genome",
  "Start-up ecosystem":
    "Ecosistema di start-up",
  "The Pacific Northwest’s tech city":
    "La città tecnologica del Pacifico nord-occidentale",
  "Retail":
    "Commercio al dettaglio",
  "about 49,000 staff in Seattle and 15,000 in Bellevue":
    "circa 49.000 dipendenti a Seattle e 15.000 a Bellevue",
  "now Seattle’s largest employer":
    "ora il maggiore datore di lavoro di Seattle",
  "10th in the world in Startup Genome’s 2026 ranking, up five places":
    "10º al mondo nel ranking 2026 di Startup Genome, in salita di cinque posti",
  "The Bay Area’s financial and start-up city":
    "La città della finanza e delle start-up della Baia",
  "62% of the region’s 2025 venture capital, with AI taking 83% of the total":
    "il 62% del venture capital regionale del 2025, con l’IA al 83% del totale",
  "Venture capital and AI start-ups":
    "Venture capital e start-up di IA",
  "The South-East’s headquarters and logistics city":
    "La città delle sedi societarie e della logistica del Sud-Est",
  "headquarters in the metro area":
    "sedi centrali nell’area metropolitana",
  "14 to 15 in the metro area, depending on the count":
    "da 14 a 15 nell’area metropolitana, a seconda del conteggio",
  "seventh in North America in the Global Financial Centres Index":
    "settimo in Nord America nel Global Financial Centres Index",
  "Financial centre":
    "Centro finanziario",
  "Florida’s largest county economy and gateway to Latin America":
    "La maggiore economia di contea della Florida e porta verso l’America Latina",
  "Trade":
    "Commercio",
  "Tourism":
    "Turismo",
  "offices on the county’s list of finance employers; Citadel has moved its headquarters to Brickell":
    "uffici nell’elenco dei datori di lavoro finanziari della contea; Citadel ha spostato la sede a Brickell",
  "more than 60 in Brickell":
    "più di 60 a Brickell",
  "International banks":
    "Banche internazionali",
  "up 25% in South Florida between 2021 and 2024":
    "in crescita del 25% nel Sud della Florida tra il 2021 e il 2024",
  "North Carolina’s largest county economy and a banking centre":
    "La maggiore economia di contea della Carolina del Nord e un centro bancario",
  "headquarters; Fortune 500 ranks 20 and 150":
    "sedi centrali; posizioni 20 e 150 della Fortune 500",
  "headquarters in the Charlotte region":
    "sedi centrali nella regione di Charlotte",
  "46,000 jobs, about twice what the area’s size would suggest":
    "46.000 posti, circa il doppio di quanto suggerirebbe la dimensione dell’area",
  "Headquarters and company management":
    "Sedi centrali e gestione delle imprese",
  "up 16% between 2021 and 2024":
    "in crescita del 16% tra il 2021 e il 2024",
  "Pennsylvania’s largest county economy":
    "La maggiore economia di contea della Pennsylvania",
  "Pharmaceuticals":
    "Farmaceutica",
  "Insurance":
    "Assicurazioni",
  "headquarters; Fortune 500 ranks 10 and 35 in 2025":
    "sedi centrali; posizioni 10 e 35 della Fortune 500 nel 2025",
  "headquarters in the Philadelphia area":
    "sedi centrali nell’area di Philadelphia",
  "88,000 jobs, fifth among US biopharma clusters":
    "88.000 posti, quinto tra i poli biofarmaceutici statunitensi",
  "Recruiting calendar":
    "Calendario delle selezioni",
  "Where demand is now":
    "Dove si concentra la domanda oggi",
  "Pay for the main graduate occupations":
    "Retribuzione per le principali professioni dei laureati",
  "Of Duke’s MMS class of 2025, 71% of graduates needing a visa had an offer at six months against 85% of those with permanent work rights, at a median base of $75,000 against $82,500; about 87% of jobs were in the US, 37% in the Northeast.":
    "Della classe MMS 2025 di Duke, il 71% dei laureati che avevano bisogno di un visto aveva un’offerta a sei mesi, contro l’85% di chi aveva diritti di lavoro permanenti, con una base mediana di 75.000 $ contro 82.500 $; circa l’87% dei posti era negli Stati Uniti, il 37% nel Nord-Est.",
  "MIT Sloan’s master of finance class of 2025, 89% international, had 97.1% of job seekers with an offer within six months at a median base of $125,000; 62.9% of accepted offers were in the US and 38.1% in New York.":
    "Nella classe 2025 del master in finanza del MIT Sloan, internazionale all’89%, il 97,1% di chi cercava lavoro aveva un’offerta entro sei mesi con una base mediana di 125.000 $; il 62,9% delle offerte accettate era negli Stati Uniti e il 38,1% a New York.",
  "By 12 December 2025, RBC had 2027 US summer roles open in New York, Houston and San Francisco, and Rothschild’s US 2027 summer analyst deadline was 1 January 2026; Perella Weinberg and Raine had also posted 2027 roles.":
    "Al 12 dicembre 2025 RBC aveva aperto i ruoli estivi 2027 negli Stati Uniti a New York, Houston e San Francisco, e la scadenza del summer analyst 2027 di Rothschild negli Stati Uniti era il 1° gennaio 2026; anche Perella Weinberg e Raine avevano pubblicato ruoli 2027.",
  "US recent college graduates had an unemployment rate of about 5.6% in Q2 2026, against 4.3% for all workers in Q1, and 42% were underemployed.":
    "Nel 2° trimestre 2026 i neolaureati statunitensi avevano un tasso di disoccupazione di circa il 5,6%, contro il 4,3% di tutti i lavoratori nel 1° trimestre, e il 42% era sottoccupato.",
  "Tech accounts for an estimated 27% of total employment in the San Jose area, far above the national share.":
    "La tecnologia vale circa il 27% dell’occupazione totale nell’area di San Jose, molto sopra la quota nazionale.",
  "The Greater Houston Partnership counts 27 Fortune 500 headquarters in the Houston metro in 2026, tied with Chicago and second only to New York, which has 62.":
    "La Greater Houston Partnership conta 27 sedi di aziende Fortune 500 nell’area di Houston nel 2026, alla pari con Chicago e seconda solo a New York, che ne ha 62.",
  "Counting the 2026 Fortune 500 by metro, one analyst ranks New York first with 49 headquarters, then Chicago 30, Houston 26, San Jose 21, Washington 20, Dallas 19, Minneapolis and Atlanta 15 each, and San Francisco and Boston 14 each.":
    "Contando la Fortune 500 del 2026 per area metropolitana, un’analisi pone al primo posto New York con 49 sedi, poi Chicago 30, Houston 26, San Jose 21, Washington 20, Dallas 19, Minneapolis e Atlanta 15 ciascuna, e San Francisco e Boston 14 ciascuna.",
  "A Dallas Regional Chamber table of the cities with the most Fortune Global 500 headquarters (2025) lists Beijing 47, Tokyo 26, Paris 22, New York 20, London 16, San Jose 9, Washington 9, Chicago 8, Houston 8, Toronto 8, Dallas–Fort Worth 7, San Francisco 5, Seattle 5, Atlanta 4, Boston 4, Los Angeles 4 and Moscow 4.":
    "Una tabella della Dallas Regional Chamber sulle città con più sedi della Fortune Global 500 (2025) elenca Pechino 47, Tokyo 26, Parigi 22, New York 20, Londra 16, San Jose 9, Washington 9, Chicago 8, Houston 8, Toronto 8, Dallas–Fort Worth 7, San Francisco 5, Seattle 5, Atlanta 4, Boston 4, Los Angeles 4 e Mosca 4.",
  "Startup Genome’s 2026 report keeps Silicon Valley, New York City and London as the top three start-up ecosystems; Seattle rose five places to 10th, Toronto-Waterloo is 13th, Austin 18th, Dallas 27th and Philadelphia 33rd.":
    "Il rapporto 2026 di Startup Genome conferma Silicon Valley, New York City e Londra come i primi tre ecosistemi di start-up; Seattle è salita di cinque posti al 10º, Toronto-Waterloo è al 13º, Austin al 18º, Dallas al 27º e Philadelphia al 33º.",
  "Within North America, Startup Genome’s 2026 ranking puts Silicon Valley first, New York City second, Boston third and Los Angeles fourth, with Philadelphia 14th.":
    "In Nord America il ranking 2026 di Startup Genome pone al primo posto Silicon Valley, al secondo New York City, al terzo Boston e al quarto Los Angeles, con Philadelphia al 14º.",
  "Across the United States in May 2025 there were 1,687,890 software developers (mean pay $148,100), 361,980 financial and investment analysts ($116,800), 262,440 data scientists ($126,800), 898,280 management analysts ($113,790) and 1,449,500 accountants and auditors ($94,750).":
    "Negli Stati Uniti a maggio 2025 c’erano 1.687.890 sviluppatori software (retribuzione media 148.100 $), 361.980 analisti finanziari e di investimento (116.800 $), 262.440 data scientist (126.800 $), 898.280 analisti di management (113.790 $) e 1.449.500 contabili e revisori (94.750 $).",
  "Goldman Sachs’s 2027 Summer Analyst Program in the Americas is a nine-to-ten-week internship for undergraduates, usually taken in the third or penultimate year of study; applications for some businesses were open when read.":
    "Il Summer Analyst Program 2027 di Goldman Sachs nelle Americhe è uno stage di nove-dieci settimane per studenti universitari, di solito svolto al terzo anno o al penultimo anno di studi; al momento della lettura le candidature per alcune divisioni erano aperte.",
  "About 197,300 people work in New York City’s securities industry (219,100 in the state), and 1 in 13 New York City jobs is directly or indirectly tied to it; the industry paid $6.7 billion, 8.4% of city tax revenue.":
    "Circa 197.300 persone lavorano nel settore dei titoli della città di New York (219.100 nello Stato), e 1 posto su 13 a New York dipende direttamente o indirettamente da esso; il settore ha versato 6,7 miliardi di $, l’8,4% delle entrate fiscali della città.",
  "New York City’s securities industry employed a record 201,500 people in 2024, with an average bonus of about $247,000 forecast for 2025.":
    "Il settore dei titoli di New York ha impiegato un record di 201.500 persone nel 2024, con un bonus medio di circa 247.000 $ previsto per il 2025.",
  "The Bay Area remains the top tech talent centre in the United States, both in the number of tech jobs and in the tech sector’s share of regional employment; between 2021 and 2024 tech jobs grew 10% there, against 26% in Dallas, 25% in South Florida and 16% in Charlotte.":
    "La Bay Area resta il principale polo di talenti tecnologici degli Stati Uniti, sia per numero di posti nella tecnologia sia per peso del settore sull’occupazione regionale; tra il 2021 e il 2024 i posti tecnologici vi sono cresciuti del 10%, contro il 26% a Dallas, il 25% nel Sud della Florida e il 16% a Charlotte.",
  "The 20 largest tech companies in Silicon Valley and San Francisco employed about 215,000 people in mid-2025, 9% of the region’s workforce; the largest are Google, Apple, Meta, Amazon, Cisco and Tesla, and in 2025 Google cut 4,000 Bay Area jobs while NVIDIA added 1,000.":
    "Le 20 maggiori aziende tecnologiche di Silicon Valley e San Francisco impiegavano circa 215.000 persone a metà 2025, il 9% della forza lavoro della regione; le maggiori sono Google, Apple, Meta, Amazon, Cisco e Tesla, e nel 2025 Google ha tagliato 4.000 posti nella Bay Area mentre NVIDIA ne ha aggiunti 1.000.",
  "Silicon Valley and San Francisco companies drew about half of all US venture capital in 2025 (49%); AI companies took nearly $80 billion, 83% of the region’s total, and San Francisco’s share of the regional total rose to 62%.":
    "Le aziende di Silicon Valley e San Francisco hanno attratto circa la metà di tutto il venture capital statunitense nel 2025 (49%); le aziende di IA hanno ricevuto quasi 80 miliardi di $, l’83% del totale regionale, e la quota di San Francisco sul totale regionale è salita al 62%.",
  "Silicon Valley still hosts about half of US unicorn companies, produced over 23,000 utility patents in 2025 (17% of US patent assignees), and its tech workforce includes nearly 140,000 software developers.":
    "La Silicon Valley ospita ancora circa la metà delle società unicorno statunitensi, nel 2025 ha prodotto oltre 23.000 brevetti di utilità (il 17% dei titolari di brevetti negli Stati Uniti) e la sua forza lavoro tecnologica comprende quasi 140.000 sviluppatori software.",
  "Twenty-seven Fortune 500 companies are headquartered in the Houston area, among them Exxon Mobil (rank 9), Chevron (21), Phillips 66 (29), Sysco (55), ConocoPhillips (75), Hewlett Packard Enterprise (133) and Baker Hughes (164).":
    "Ventisette aziende della Fortune 500 hanno sede nell’area di Houston, tra cui Exxon Mobil (posizione 9), Chevron (21), Phillips 66 (29), Sysco (55), ConocoPhillips (75), Hewlett Packard Enterprise (133) e Baker Hughes (164).",
  "Dallas–Fort Worth has 24 Fortune 500 headquarters in 2026, among them McKesson (a Fortune 10 company), AT&T (35), American Airlines Group (86), CBRE Group (118) and Texas Instruments (252); seven are on the Global 500.":
    "Dallas–Fort Worth ha 24 sedi della Fortune 500 nel 2026, tra cui McKesson (tra le prime 10), AT&T (35), American Airlines Group (86), CBRE Group (118) e Texas Instruments (252); sette sono nella Global 500.",
  "Chicago is the headquarters of Archer Daniels Midland (Fortune 500 rank 58), United Airlines (81), McDonald’s (170), Kraft Heinz (184), Exelon (189), GE HealthCare (217) and Motorola Solutions (378); Illinois has 29 Fortune 500 companies.":
    "Chicago è la sede di Archer Daniels Midland (posizione 58 della Fortune 500), United Airlines (81), McDonald’s (170), Kraft Heinz (184), Exelon (189), GE HealthCare (217) e Motorola Solutions (378); l’Illinois ha 29 aziende della Fortune 500.",
  "The Charlotte region is the headquarters of Bank of America (Fortune 500 rank 20), Lowe’s (52), Honeywell (116), Nucor (142), Duke Energy (145) and Truist (150); it has 46,000 jobs in headquarters and company management, about twice what its size would suggest.":
    "La regione di Charlotte è la sede di Bank of America (posizione 20 della Fortune 500), Lowe’s (52), Honeywell (116), Nucor (142), Duke Energy (145) e Truist (150); ha 46.000 posti nelle sedi centrali e nella gestione delle imprese, circa il doppio di quanto suggerirebbe la sua dimensione.",
  "Metro Atlanta has 14 Fortune 500 headquarters, according to the state’s economic-development site, which names The Home Depot, Mercedes-Benz USA and Porsche among the companies based there.":
    "L’area di Atlanta ha 14 sedi della Fortune 500, secondo il sito di sviluppo economico dello Stato, che cita The Home Depot, Mercedes-Benz USA e Porsche tra le aziende con sede lì.",
  "Amazon employs about 49,000 people in Seattle (down from 60,000 in 2020) and about 15,000 in Bellevue, and the University of Washington has overtaken it as Seattle’s largest employer.":
    "Amazon impiega circa 49.000 persone a Seattle (erano 60.000 nel 2020) e circa 15.000 a Bellevue, e l’Università di Washington l’ha superata come primo datore di lavoro di Seattle.",
  "Federal employment in the Washington region fell from about 375,800 jobs at the start of 2025 to 312,500 by May 2026, the lowest in 30 years, and the metro lost 100,500 jobs in all between May 2025 and May 2026.":
    "L’occupazione federale nell’area di Washington è scesa da circa 375.800 posti all’inizio del 2025 a 312.500 a maggio 2026, il livello più basso in 30 anni, e l’area ha perso 100.500 posti in totale tra maggio 2025 e maggio 2026.",
  "Amazon’s second headquarters in Arlington, Virginia, announced on 13 November 2018, commits more than $2 billion and at least 25,000 jobs by 2030; the first phase was finished in spring 2023.":
    "La seconda sede di Amazon ad Arlington, in Virginia, annunciata il 13 novembre 2018, prevede più di 2 miliardi di $ di investimenti e almeno 25.000 posti entro il 2030; la prima fase è stata completata nella primavera 2023.",
  "Boston-Cambridge ranks first among US biopharma clusters in 2026, with 117,108 jobs, $6.85 billion of venture capital in 2025 and 7,037 NIH awards worth $4.339 billion.":
    "Boston-Cambridge è al primo posto tra i poli biofarmaceutici statunitensi nel 2026, con 117.108 posti, 6,85 miliardi di $ di venture capital nel 2025 e 7.037 finanziamenti NIH per 4,339 miliardi di $.",
  "Eight Philadelphia-area companies were on the 2025 Fortune 500, led by Cencora (rank 10) and Comcast (35), then Lincoln National (228), Aramark (239), Universal Health Services (271), Toll Brothers (390), Burlington (399) and Campbell’s (419).":
    "Otto aziende dell’area di Philadelphia erano nella Fortune 500 del 2025, guidate da Cencora (posizione 10) e Comcast (35), poi Lincoln National (228), Aramark (239), Universal Health Services (271), Toll Brothers (390), Burlington (399) e Campbell’s (419).",
  "Greater Philadelphia ranks fifth among US biopharma clusters in 2026, with 88,000 jobs, $1.31 billion of venture capital in 2025 and 3,201 NIH awards worth $1.94 billion.":
    "La Greater Philadelphia è al quinto posto tra i poli biofarmaceutici statunitensi nel 2026, con 88.000 posti, 1,31 miliardi di $ di venture capital nel 2025 e 3.201 finanziamenti NIH per 1,94 miliardi di $.",
  "Miami-Dade’s finance sector has more than 150,000 jobs and about $28 billion of gross regional product; more than 60 international banks operate in Brickell, and Citadel has moved its headquarters there.":
    "Il settore finanziario di Miami-Dade conta più di 150.000 posti e circa 28 miliardi di $ di prodotto regionale lordo; oltre 60 banche internazionali operano a Brickell e Citadel vi ha spostato la sede.",
  "Los Angeles County’s economy exceeds $1 trillion and grew 2.4% in 2025, though the county has lost about 400,000 residents since before the pandemic and the 2028 Olympics are projected to add up to $18 billion.":
    "L’economia della contea di Los Angeles supera 1 trilione di $ ed è cresciuta del 2,4% nel 2025, anche se la contea ha perso circa 400.000 residenti rispetto a prima della pandemia e le Olimpiadi del 2028 dovrebbero portare fino a 18 miliardi di $.",
  "New York finance is rated from industry and city statistics (SIFMA, the New York City Comptroller); the State Comptroller’s securities-industry report could not be read.":
    "La finanza di New York è valutata sulla base di statistiche di settore e cittadine (SIFMA, il Controller della città di New York); il rapporto del Controller dello Stato sul settore dei titoli non si è potuto leggere.",
  "The Global Financial Centres Index 40 (September 2026) ranks New York first of 117 financial centres, four rating points ahead of London, and calls it the only North American centre in the world top ten.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone New York al primo posto su 117 centri finanziari, quattro punti di valutazione davanti a Londra, e la indica come l’unico centro nordamericano tra i primi dieci al mondo.",
  "The Global Financial Centres Index 40 (September 2026) ranks San Francisco 11th of 117 financial centres (5th in the March 2026 edition) and second among North American centres, after New York.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone San Francisco all’11º posto su 117 centri finanziari (5º nell’edizione di marzo 2026) e al secondo posto tra i centri nordamericani, dopo New York.",
  "The Global Financial Centres Index 40 (September 2026) ranks Los Angeles 14th of 117 financial centres (12th in the March 2026 edition) and third among North American centres, after New York and San Francisco.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Los Angeles al 14º posto su 117 centri finanziari (12º nell’edizione di marzo 2026) e al terzo posto tra i centri nordamericani, dopo New York e San Francisco.",
  "The Global Financial Centres Index 40 (September 2026) ranks Chicago 15th of 117 financial centres (14th in the March 2026 edition) and fourth among North American centres.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Chicago al 15º posto su 117 centri finanziari (14º nell’edizione di marzo 2026) e al quarto posto tra i centri nordamericani.",
  "The Global Financial Centres Index 40 (September 2026) ranks Boston 18th of 117 financial centres (13th in the March 2026 edition) and fifth among North American centres.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Boston al 18º posto su 117 centri finanziari (13º nell’edizione di marzo 2026) e al quinto posto tra i centri nordamericani.",
  "The Global Financial Centres Index 40 (September 2026) ranks Washington DC 19th of 117 financial centres (17th in the March 2026 edition) and sixth among North American centres.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Washington DC al 19º posto su 117 centri finanziari (17º nell’edizione di marzo 2026) e al sesto posto tra i centri nordamericani.",
  "The Global Financial Centres Index 40 (September 2026) ranks Atlanta 27th of 117 financial centres (39th in the March 2026 edition) and seventh among North American centres; Houston, Dallas and Charlotte are not among the 117.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Atlanta al 27º posto su 117 centri finanziari (39º nell’edizione di marzo 2026) e al settimo posto tra i centri nordamericani; Houston, Dallas e Charlotte non sono tra i 117.",
  "The Global Financial Centres Index 40 (September 2026) ranks Miami 36th of 117 financial centres (32nd in the March 2026 edition) and eighth among North American centres.":
    "Il Global Financial Centres Index 40 (settembre 2026) pone Miami al 36º posto su 117 centri finanziari (32º nell’edizione di marzo 2026) e all’ottavo posto tra i centri nordamericani.",
  "The BEA puts GDP in New York County, New York (Manhattan), the core of the New York area, at $1006.7 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di New York (Manhattan), centro dell’area di New York, in 1006,7 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Santa Clara County, California, the core of the San Jose area, at $438.5 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Santa Clara (California), centro dell’area di San Jose, in 438,5 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Cook County, Illinois, the core of the Chicago area, at $546.4 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Cook (Illinois), centro dell’area di Chicago, in 546,4 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Los Angeles County, California, the core of the Los Angeles area, at $1003.0 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Los Angeles (California), centro dell’area di Los Angeles, in 1003,0 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Harris County, Texas, the core of the Houston area, at $592.8 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Harris (Texas), centro dell’area di Houston, in 592,8 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Dallas County, Texas, the core of the Dallas area, at $389.4 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Dallas (Texas), centro dell’area di Dallas, in 389,4 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in the District of Columbia, the core of the Washington, DC area, at $184.3 billion in 2024 (current dollars).":
    "Il BEA stima il PIL del Distretto di Columbia, centro dell’area di Washington, DC, in 184,3 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Suffolk County, Massachusetts, the core of the Boston area, at $190.8 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Suffolk (Massachusetts), centro dell’area di Boston, in 190,8 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in King County, Washington State, the core of the Seattle area, at $477.2 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di King (Stato di Washington), centro dell’area di Seattle, in 477,2 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in San Francisco County, California, the core of the San Francisco area, at $268.3 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di San Francisco (California), centro dell’area di San Francisco, in 268,3 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Fulton County, Georgia, the core of the Atlanta area, at $243.6 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Fulton (Georgia), centro dell’area di Atlanta, in 243,6 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Miami-Dade County, Florida, the core of the Miami area, at $260.8 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Miami-Dade (Florida), centro dell’area di Miami, in 260,8 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Mecklenburg County, North Carolina, the core of the Charlotte area, at $186.1 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Mecklenburg (Carolina del Nord), centro dell’area di Charlotte, in 186,1 miliardi di $ nel 2024 (a prezzi correnti).",
  "The BEA puts GDP in Philadelphia County, Pennsylvania, the core of the Philadelphia area, at $135.0 billion in 2024 (current dollars).":
    "Il BEA stima il PIL della contea di Philadelphia (Pennsylvania), centro dell’area di Philadelphia, in 135,0 miliardi di $ nel 2024 (a prezzi correnti).",
  "In May 2025 the New York metro area had 121,000 software developers (mean pay $165,870, $130,650 at the 25th percentile), 53,870 financial and investment analysts, 23,160 data scientists, 67,630 management analysts, 111,930 accountants and auditors, 8,860 logisticians and 79,290 market research analysts and marketing specialists, among 9,492,000 jobs in all; that is 7.2% of all US software developers and 14.9% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di New York contava 121.000 sviluppatori software (retribuzione media 165.870 $, 130.650 $ al 25º percentile), 53.870 analisti finanziari e di investimento, 23.160 data scientist, 67.630 analisti di management, 111.930 contabili e revisori, 8.860 logistici e 79.290 analisti di ricerche di mercato e specialisti di marketing, su 9.492.000 posti di lavoro in totale; è il 7,2% di tutti gli sviluppatori software e il 14,9% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the San Jose metro area had 87,350 software developers (mean pay $221,710, $173,650 at the 25th percentile), 3,880 financial and investment analysts, 6,060 data scientists, 9,020 management analysts, 13,180 accountants and auditors, 3,440 logisticians and 12,710 market research analysts and marketing specialists, among 1,134,970 jobs in all; that is 5.2% of all US software developers and 1.1% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di San Jose contava 87.350 sviluppatori software (retribuzione media 221.710 $, 173.650 $ al 25º percentile), 3.880 analisti finanziari e di investimento, 6.060 data scientist, 9.020 analisti di management, 13.180 contabili e revisori, 3.440 logistici e 12.710 analisti di ricerche di mercato e specialisti di marketing, su 1.134.970 posti di lavoro in totale; è il 5,2% di tutti gli sviluppatori software e il 1,1% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Chicago metro area had 40,370 software developers (mean pay $141,640, $104,530 at the 25th percentile), 17,150 financial and investment analysts, 7,940 data scientists, 37,510 management analysts, 41,360 accountants and auditors, 10,220 logisticians and 30,970 market research analysts and marketing specialists, among 4,513,280 jobs in all; that is 2.4% of all US software developers and 4.7% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Chicago contava 40.370 sviluppatori software (retribuzione media 141.640 $, 104.530 $ al 25º percentile), 17.150 analisti finanziari e di investimento, 7.940 data scientist, 37.510 analisti di management, 41.360 contabili e revisori, 10.220 logistici e 30.970 analisti di ricerche di mercato e specialisti di marketing, su 4.513.280 posti di lavoro in totale; è il 2,4% di tutti gli sviluppatori software e il 4,7% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Los Angeles metro area had 55,540 software developers (mean pay $161,900, $127,530 at the 25th percentile), 19,600 financial and investment analysts, 9,850 data scientists, 37,060 management analysts, 70,640 accountants and auditors, 10,950 logisticians and 39,390 market research analysts and marketing specialists, among 6,271,560 jobs in all; that is 3.3% of all US software developers and 5.4% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Los Angeles contava 55.540 sviluppatori software (retribuzione media 161.900 $, 127.530 $ al 25º percentile), 19.600 analisti finanziari e di investimento, 9.850 data scientist, 37.060 analisti di management, 70.640 contabili e revisori, 10.950 logistici e 39.390 analisti di ricerche di mercato e specialisti di marketing, su 6.271.560 posti di lavoro in totale; è il 3,3% di tutti gli sviluppatori software e il 5,4% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Houston metro area had 22,940 software developers (mean pay $133,130, $101,190 at the 25th percentile), 6,510 financial and investment analysts, 4,060 data scientists, 9,050 management analysts, 28,400 accountants and auditors, 5,420 logisticians and 14,480 market research analysts and marketing specialists, among 3,289,720 jobs in all; that is 1.4% of all US software developers and 1.8% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Houston contava 22.940 sviluppatori software (retribuzione media 133.130 $, 101.190 $ al 25º percentile), 6.510 analisti finanziari e di investimento, 4.060 data scientist, 9.050 analisti di management, 28.400 contabili e revisori, 5.420 logistici e 14.480 analisti di ricerche di mercato e specialisti di marketing, su 3.289.720 posti di lavoro in totale; è il 1,4% di tutti gli sviluppatori software e il 1,8% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Dallas–Fort Worth metro area had 67,030 software developers (mean pay $138,810, $105,660 at the 25th percentile), 11,530 financial and investment analysts, 10,120 data scientists, 18,010 management analysts, 37,450 accountants and auditors, 7,050 logisticians and 20,900 market research analysts and marketing specialists, among 4,049,800 jobs in all; that is 4.0% of all US software developers and 3.2% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Dallas–Fort Worth contava 67.030 sviluppatori software (retribuzione media 138.810 $, 105.660 $ al 25º percentile), 11.530 analisti finanziari e di investimento, 10.120 data scientist, 18.010 analisti di management, 37.450 contabili e revisori, 7.050 logistici e 20.900 analisti di ricerche di mercato e specialisti di marketing, su 4.049.800 posti di lavoro in totale; è il 4,0% di tutti gli sviluppatori software e il 3,2% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Washington metro area had 69,060 software developers (mean pay $153,100, $123,720 at the 25th percentile), 10,930 financial and investment analysts, 9,260 data scientists, 62,360 management analysts, 41,470 accountants and auditors, 8,020 logisticians and 21,090 market research analysts and marketing specialists, among 3,136,190 jobs in all; that is 4.1% of all US software developers and 3.0% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Washington contava 69.060 sviluppatori software (retribuzione media 153.100 $, 123.720 $ al 25º percentile), 10.930 analisti finanziari e di investimento, 9.260 data scientist, 62.360 analisti di management, 41.470 contabili e revisori, 8.020 logistici e 21.090 analisti di ricerche di mercato e specialisti di marketing, su 3.136.190 posti di lavoro in totale; è il 4,1% di tutti gli sviluppatori software e il 3,0% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Boston metro area had 42,310 software developers (mean pay $162,440, $131,880 at the 25th percentile), 13,010 financial and investment analysts, 7,930 data scientists, 26,450 management analysts, 37,150 accountants and auditors, 4,510 logisticians and 32,310 market research analysts and marketing specialists, among 2,703,890 jobs in all; that is 2.5% of all US software developers and 3.6% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Boston contava 42.310 sviluppatori software (retribuzione media 162.440 $, 131.880 $ al 25º percentile), 13.010 analisti finanziari e di investimento, 7.930 data scientist, 26.450 analisti di management, 37.150 contabili e revisori, 4.510 logistici e 32.310 analisti di ricerche di mercato e specialisti di marketing, su 2.703.890 posti di lavoro in totale; è il 2,5% di tutti gli sviluppatori software e il 3,6% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Seattle metro area had 92,770 software developers (mean pay $174,920, $132,800 at the 25th percentile), 6,170 financial and investment analysts, 8,370 data scientists, 16,930 management analysts, 22,100 accountants and auditors, 4,420 logisticians and 18,030 market research analysts and marketing specialists, among 2,086,210 jobs in all; that is 5.5% of all US software developers and 1.7% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Seattle contava 92.770 sviluppatori software (retribuzione media 174.920 $, 132.800 $ al 25º percentile), 6.170 analisti finanziari e di investimento, 8.370 data scientist, 16.930 analisti di management, 22.100 contabili e revisori, 4.420 logistici e 18.030 analisti di ricerche di mercato e specialisti di marketing, su 2.086.210 posti di lavoro in totale; è il 5,5% di tutti gli sviluppatori software e il 1,7% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the San Francisco metro area had 69,030 software developers (mean pay $193,430, $163,500 at the 25th percentile), 9,910 financial and investment analysts, 10,460 data scientists, 23,560 management analysts, 25,170 accountants and auditors, 4,570 logisticians and 24,120 market research analysts and marketing specialists, among 2,373,920 jobs in all; that is 4.1% of all US software developers and 2.7% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di San Francisco contava 69.030 sviluppatori software (retribuzione media 193.430 $, 163.500 $ al 25º percentile), 9.910 analisti finanziari e di investimento, 10.460 data scientist, 23.560 analisti di management, 25.170 contabili e revisori, 4.570 logistici e 24.120 analisti di ricerche di mercato e specialisti di marketing, su 2.373.920 posti di lavoro in totale; è il 4,1% di tutti gli sviluppatori software e il 2,7% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Atlanta metro area had 36,300 software developers (mean pay $135,870, $104,640 at the 25th percentile), 7,740 financial and investment analysts, 6,820 data scientists, 26,870 management analysts, 30,150 accountants and auditors, 7,420 logisticians and 19,920 market research analysts and marketing specialists, among 2,889,670 jobs in all; that is 2.2% of all US software developers and 2.1% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Atlanta contava 36.300 sviluppatori software (retribuzione media 135.870 $, 104.640 $ al 25º percentile), 7.740 analisti finanziari e di investimento, 6.820 data scientist, 26.870 analisti di management, 30.150 contabili e revisori, 7.420 logistici e 19.920 analisti di ricerche di mercato e specialisti di marketing, su 2.889.670 posti di lavoro in totale; è il 2,2% di tutti gli sviluppatori software e il 2,1% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Miami metro area had 18,900 software developers (mean pay $144,730, $102,710 at the 25th percentile), 6,400 financial and investment analysts, 3,040 data scientists, 16,540 management analysts, 30,950 accountants and auditors, 4,500 logisticians, among 2,819,940 jobs in all; that is 1.1% of all US software developers and 1.8% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Miami contava 18.900 sviluppatori software (retribuzione media 144.730 $, 102.710 $ al 25º percentile), 6.400 analisti finanziari e di investimento, 3.040 data scientist, 16.540 analisti di management, 30.950 contabili e revisori, 4.500 logistici, su 2.819.940 posti di lavoro in totale; è il 1,1% di tutti gli sviluppatori software e il 1,8% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Charlotte metro area had 20,820 software developers (mean pay $139,030, $107,680 at the 25th percentile), 6,790 financial and investment analysts, 4,420 data scientists, 8,000 management analysts, 16,820 accountants and auditors, 2,330 logisticians and 9,500 market research analysts and marketing specialists, among 1,358,370 jobs in all; that is 1.2% of all US software developers and 1.9% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Charlotte contava 20.820 sviluppatori software (retribuzione media 139.030 $, 107.680 $ al 25º percentile), 6.790 analisti finanziari e di investimento, 4.420 data scientist, 8.000 analisti di management, 16.820 contabili e revisori, 2.330 logistici e 9.500 analisti di ricerche di mercato e specialisti di marketing, su 1.358.370 posti di lavoro in totale; è il 1,2% di tutti gli sviluppatori software e il 1,9% di tutti gli analisti finanziari e di investimento degli Stati Uniti.",
  "In May 2025 the Philadelphia metro area had 28,480 software developers (mean pay $136,050, $103,920 at the 25th percentile), 10,050 financial and investment analysts, 6,480 data scientists, 15,460 management analysts, 29,370 accountants and auditors, 4,670 logisticians and 17,600 market research analysts and marketing specialists, among 2,897,830 jobs in all; that is 1.7% of all US software developers and 2.8% of all US financial and investment analysts.":
    "A maggio 2025 l’area metropolitana di Philadelphia contava 28.480 sviluppatori software (retribuzione media 136.050 $, 103.920 $ al 25º percentile), 10.050 analisti finanziari e di investimento, 6.480 data scientist, 15.460 analisti di management, 29.370 contabili e revisori, 4.670 logistici e 17.600 analisti di ricerche di mercato e specialisti di marketing, su 2.897.830 posti di lavoro in totale; è il 1,7% di tutti gli sviluppatori software e il 2,8% di tutti gli analisti finanziari e di investimento degli Stati Uniti."
});

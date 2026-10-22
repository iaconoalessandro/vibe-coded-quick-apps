---
title: "Verification round 4k: Atlas hub expansion — big cities in all 46 countries"
last_researched: 2026-10-03
scope: Log of every claim added on 3 October 2026 for the new Atlas hubs (117 cities in 37 countries), with the sources, the rule used for the ratings, and what could not be read. Information only.
confidence: high for the figures (Eurostat, ONS, BEA, Statistics Canada, ABS and city or national statistics offices); medium for the ratings, which follow a fixed rank rule rather than measured graduate demand; low where a hub rests on a news report of official figures or on an employer's own statement.
review_by: 2027-03-31
---

# Verification round 4k (3 October 2026)

The reader asked for every big city and advanced market to be on the map, not only the hubs a source already ranked. This round adds 117 hubs, each with at least one sourced claim. A hub whose sources give size but not demand by role is shown with every family "not rated", and its record says so in a gap starting "No family is rated".

**Rating rule for the new hubs.** A family is rated *strong* only where a statistic puts the city second or third in its country for that sector with at least 5,000 jobs (first to third outside London for Great Britain). No new hub is rated *dominant* except Busan for logistics, where KOTRA gives the port 76.6% of Korea's container cargo.
- Europe: Eurostat metropolitan regions, employment by NACE section (met_10r_3emp; finance and insurance = K, information and communication = J) and GDP (met_10r_3gdp), 2021–22, read through the Eurostat API. Ranks are computed among each country's metropolitan regions in the same table. Germany, Spain, Austria and Switzerland have no sector split there, so their new hubs are not rated.
- Great Britain: ONS Business Register and Employment Survey 2024 (Nomis API), employment in sections J and K for 14 big-city council areas outside London (Birmingham, Manchester, Leeds, Liverpool, Newcastle, Bristol, Sheffield, Nottingham, Cardiff, Glasgow, Edinburgh, Cambridge, Oxford, Bath). Belfast is not in the survey.
- Canada: Statistics Canada table 14-10-0468 (2025), professional occupations in finance by metropolitan area.
- Turkey: Banks Association of Türkiye, bank employees by province (end 2025).
- China, Korea, Malaysia: the city or national statistics releases' own words ("software and information services … over 800 billion yuan", "the nation's digital economy hub", "Korea's largest port"), noted per claim.

**Not read, not bypassed.** Stats NZ and MBIE (pages render by script), IDA Ireland regional pages (403), Aramco (no response), TSMC (Cloudflare check), the Southern Taiwan Science Park statistics and Kaohsiung port series (not parseable), Hyundai's Ulsan page (script), the Bank of Israel list (bot check), the State Council Information Office over https (certificate for another host). Galway, Limerick, Zug, Lugano, Ulsan, Tainan, Kaohsiung, Dammam/Dhahran and Jerusalem are therefore not mapped; each record's gaps say so.

**Also changed in this round (not claims).** The world map and every hub map now use the Mercator projection instead of Equal Earth, zoom and pan (wheel, drag, pinch, + / − / reset, and + / − keys on the world map), and every country gets a hub map, including single-hub countries and city-states, with neighbouring land hatched for context. Older gap notes that said a city "is not yet mapped" were rewritten or removed where the city is now a hub.

## P47 Portugal (data/atlas/pt.js): 1 new hub

New hubs: Porto (it strong, finance strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| pt-porto | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P39 Spain (data/atlas/es.js): 5 new hubs

New hubs: Valencia (not rated); Seville (not rated); Málaga (not rated); Bilbao (not rated); Zaragoza (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| es-valencia | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| es-seville | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| es-malaga | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| es-bilbao | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| es-zaragoza | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P37 France (data/atlas/fr.js): 7 new hubs

New hubs: Lyon (it strong); Marseille (finance strong); Lille (finance strong); Bordeaux (not rated); Nantes (not rated); Strasbourg (not rated); Grenoble (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| fr-lyon | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fr-marseille | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fr-lille | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fr-bordeaux | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fr-nantes | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fr-strasbourg | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fr-grenoble | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P38 Italy (data/atlas/it.js): 6 new hubs

New hubs: Turin (it strong, finance strong); Bologna and the Motor Valley (not rated); Padua and Venice (Veneto) (not rated); Florence (Tuscany) (not rated); Naples (not rated); Genoa (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| it-turin | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| it-motor-valley | [Motor Valley (Emilia-Romagna motor-industry association)](https://www.motorvalley.it/en/the-motor-valley/) | employer-stated | 2026-10-03 | CONFIRMED |
| it-bologna | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| it-padua-venice-2 | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| it-padua-venice | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| it-florence | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| it-naples | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| it-genoa | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P42 Switzerland (data/atlas/ch.js): 3 new hubs

New hubs: Bern (not rated); St. Gallen (not rated); Lucerne (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| ch-bern | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| ch-st-gallen | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| ch-lucerne | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P44 Ireland (data/atlas/ie.js): 1 new hub

New hubs: Cork (it strong, finance strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| ie-cork | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P41 United Kingdom (data/atlas/gb.js): 8 new hubs

New hubs: Birmingham (not rated); Leeds (it strong, finance strong); Glasgow (finance strong); Bristol (it strong); Cardiff (not rated); Liverpool (not rated); Newcastle (not rated); Oxford (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| gb-birmingham | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-leeds | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-glasgow | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-bristol | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-cardiff | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-liverpool | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-newcastle | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |
| gb-oxford | [ONS, Business Register and Employment Survey 2024 (via Nomis)](https://www.nomisweb.co.uk/datasets/newbres6pub) | data | 2026-10-03 | CONFIRMED |

## P48 Denmark (data/atlas/dk.js): 3 new hubs

New hubs: Aarhus (it strong, finance strong); Aalborg (it strong); Odense (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| dk-aarhus | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| dk-aalborg | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| dk-odense | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P46 Belgium (data/atlas/be.js): 2 new hubs

New hubs: Ghent (it strong, finance strong); Liège (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| be-ghent | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| be-liege | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P40 Netherlands (data/atlas/nl.js): 2 new hubs

New hubs: Utrecht (it strong, finance strong); The Hague (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| nl-utrecht | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| nl-the-hague | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P43 Austria (data/atlas/at.js): 3 new hubs

New hubs: Linz (not rated); Graz (not rated); Salzburg (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| at-linz | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| at-graz | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| at-salzburg | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P33 Germany (data/atlas/de.js): 4 new hubs

New hubs: Cologne (not rated); Ruhr (Essen, Dortmund) (not rated); Hanover (not rated); Leipzig (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| de-cologne | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| de-ruhr | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| de-hanover | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| de-leipzig | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P50 Norway (data/atlas/no.js): 2 new hubs

New hubs: Bergen (it strong, finance strong); Trondheim (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| no-bergen | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| no-trondheim | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P49 Sweden (data/atlas/se.js): 2 new hubs

New hubs: Malmö (it strong, finance strong); Uppsala (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| se-malmo | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| se-uppsala | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P51 Finland (data/atlas/fi.js): 2 new hubs

New hubs: Tampere (it strong); Turku (it strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| fi-tampere | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| fi-turku | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P52 Poland (data/atlas/pl.js): 4 new hubs

New hubs: Katowice (Upper Silesia) (it strong, finance strong); Gdańsk (Tricity) (not rated); Poznań (not rated); Łódź (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| pl-katowice | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| pl-gdansk | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| pl-poznan | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| pl-lodz | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P57 Lithuania (data/atlas/lt.js): 1 new hub

New hubs: Kaunas (it strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| lt-kaunas | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P53 Czech Republic (data/atlas/cz.js): 2 new hubs

New hubs: Brno (it strong, finance strong); Ostrava (it strong, finance strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| cz-brno | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| cz-ostrava | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P56 Greece (data/atlas/gr.js): 1 new hub

New hubs: Thessaloniki (it strong, finance strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| gr-thessaloniki | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P54 Romania (data/atlas/ro.js): 3 new hubs

New hubs: Cluj-Napoca (it strong, finance strong); Iași (it strong); Timișoara (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| ro-cluj-napoca | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| ro-iasi | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| ro-timisoara | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P55 Bulgaria (data/atlas/bg.js): 2 new hubs

New hubs: Plovdiv (it strong); Varna (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| bg-plovdiv | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |
| bg-varna | [Eurostat, metropolitan regions: employment by activity (met_10r_3emp) and GDP (met_10r_3gdp)](https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table?lang=en) | data | 2026-10-03 | CONFIRMED |

## P60 United States (data/atlas/us.js): 12 new hubs

New hubs: Chicago (not rated); Los Angeles (not rated); Houston (not rated); Dallas (not rated); Washington, DC (not rated); Boston (not rated); Seattle (not rated); San Francisco (not rated); Atlanta (not rated); Miami (not rated); Charlotte (not rated); Philadelphia (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| us-chicago | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-los-angeles | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-houston | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-dallas | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-washington | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-boston | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-seattle | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-san-francisco | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-atlanta | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-miami | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-charlotte | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |
| us-philadelphia | [US Bureau of Economic Analysis, GDP by County and Metropolitan Area, 2023 (4 Dec 2024), table 1](https://www.bea.gov/sites/default/files/2024-12/lagdp1224.pdf) | data | 2026-10-03 | CONFIRMED |

## P61 Canada (data/atlas/ca.js): 3 new hubs

New hubs: Vancouver (finance strong); Calgary (not rated); Ottawa (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| ca-vancouver | [Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801) | data | 2026-10-03 | CONFIRMED |
| ca-calgary | [Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801) | data | 2026-10-03 | CONFIRMED |
| ca-ottawa | [Statistics Canada, table 14-10-0468, employment characteristics by census metropolitan area, annual 2025](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046801) | data | 2026-10-03 | CONFIRMED |

## P78 Russia (data/atlas/ru.js): 1 new hub

New hubs: St Petersburg (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| ru-spb | [Centrum Balticum, BSR Policy Briefing 6/2025, citing Petrostat](https://centrumbalticum.org/wp-content/uploads/2026/04/BSR_Policy_Briefing_6_2025.pdf) | data | 2026-10-03 | CONFIRMED |

## P77 Turkey (data/atlas/tr.js): 3 new hubs

New hubs: Ankara (finance strong); Izmir (finance strong); Bursa (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| tr-ankara | [Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17](https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf) | data | 2026-10-03 | CONFIRMED |
| tr-izmir | [Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17](https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf) | data | 2026-10-03 | CONFIRMED |
| tr-bursa | [Banks Association of Türkiye, Banks in Türkiye 2025 (May 2026), table 17](https://www.tbb.org.tr/sites/default/files/kitaplar/Banks%20in%20T%C3%BCrkiye%202025.pdf) | data | 2026-10-03 | CONFIRMED |

## P76 Israel (data/atlas/il.js): 1 new hub

New hubs: Haifa (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| il-haifa | [Gadot Group news](https://gadot.com/new/adani-gadot-group-are-the-new-owners-of-haifa-port-the-second-largest-port-in-israel/) | employer-stated | 2026-10-03 | CONFIRMED |

## P72 Saudi Arabia (data/atlas/sa.js): 1 new hub

New hubs: Jeddah (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| sa-jeddah | [Saudi Ports Authority (MAWANI) and DP World, reported by Argaam (7 Mar 2025)](https://www.argaam.com/en/article/articledetail/id/1795621) | data | 2026-10-03 | CONFIRMED |

## P75 Oman (data/atlas/om.js): 1 new hub

New hubs: Sohar (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| om-sohar | [Sohar Port and Freezone, via Times of Oman (18 Nov 2020)](https://timesofoman.com/article/95367-sohar-port-and-freezone-attracts-omr104-billion-worth-of-investment) | employer-stated | 2026-10-03 | CONFIRMED |

## P69 Malaysia (data/atlas/my.js): 2 new hubs

New hubs: Penang (George Town) (not rated); Johor Bahru (it strong).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| my-penang | [Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026)](https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf) | data | 2026-10-03 | CONFIRMED |
| my-johor | [Department of Statistics Malaysia, GDP by State 2025 (1 Jul 2026)](https://www.dosm.gov.my/uploads/release-content/file_20260701120804.pdf) | data | 2026-10-03 | CONFIRMED |

## P70 Thailand (data/atlas/th.js): 1 new hub

New hubs: Chonburi and the Eastern Economic Corridor (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| th-eec | [Thailand Board of Investment, press release 67/2569 (6 May 2026)](https://www.boi.go.th/upload/content/PR67_2569EN.pdf) | data | 2026-10-03 | CONFIRMED |

## P71 Vietnam (data/atlas/vn.js): 3 new hubs

New hubs: Hanoi (not rated); Hai Phong (not rated); Da Nang (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| vn-hanoi | [VietnamPlus (Vietnam News Agency), on National Statistics Office data (6 Jan 2026)](https://en.vietnamplus.vn/grdp-growth-gains-momentum-across-provinces-in-2025-post335439.vnp) | data | 2026-10-03 | CONFIRMED |
| vn-haiphong | [VietnamPlus (Vietnam News Agency), on National Statistics Office data (6 Jan 2026)](https://en.vietnamplus.vn/grdp-growth-gains-momentum-across-provinces-in-2025-post335439.vnp) | data | 2026-10-03 | CONFIRMED |
| vn-danang | [VnEconomy, on the city statistics office’s figures (5 Jan 2026)](https://en.vneconomy.vn/da-nang-posts-2025-grdp-growth-of-918.htm) | data | 2026-10-03 | CONFIRMED |

## P68 Taiwan (data/atlas/tw.js): 2 new hubs

New hubs: Hsinchu (not rated); Taichung (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| tw-hsinchu | [Hsinchu Science Park Bureau, about HSPB](https://web.sipa.gov.tw/CSRWeb/eng/about01.jsp) | data | 2026-10-03 | CONFIRMED |
| tw-taichung | [Central Taiwan Science Park Bureau, park profile](https://www.ctsp.gov.tw/english/01about/abo_park_profile.aspx?v=20&fr=768&no=771) | data | 2026-10-03 | CONFIRMED |

## P67 China (data/atlas/cn.js): 8 new hubs

New hubs: Beijing (not rated); Shenzhen (it strong, software strong, ai strong); Guangzhou (logistics strong); Hangzhou (not rated); Suzhou (not rated); Wuhan (not rated); Chongqing (not rated); Chengdu (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| cn-beijing | [Beijing Municipal Government, on Beijing Municipal Bureau of Statistics data (22 Jan 2026)](https://english.beijing.gov.cn/latest/news/202601/t20260122_4455339.html) | data | 2026-10-03 | CONFIRMED |
| cn-shenzhen | [Greater Bay Area portal, on the Shenzhen government work report (10 Feb 2026)](https://www.cnbayarea.org.cn/english/News/content/post_1318990.html) | data | 2026-10-03 | CONFIRMED |
| cn-guangzhou | [Guangzhou government work report (2026)](https://www.eguangzhou.gov.cn/gzspecialreports/content/post_40986.html) | data | 2026-10-03 | CONFIRMED |
| cn-hangzhou | [Hangzhou government portal (22 Jan 2026)](https://ehangzhou.gov.cn/2026-01/22/c_296517.htm) | data | 2026-10-03 | CONFIRMED |
| cn-suzhou | [Suzhou Municipal Statistics Bureau, via the city’s English portal (Feb 2026)](https://english.suzhou.gov.cn/szsenglish/News/202602/d7d5c9f234594a5b995ee1b3db688eef.shtml) | data | 2026-10-03 | CONFIRMED |
| cn-wuhan | [Wuhan government portal (29 Jan 2026)](https://english.wuhan.gov.cn/H_1/NWP/202601/t20260129_2721751.shtml) | data | 2026-10-03 | CONFIRMED |
| cn-chongqing | [iChongqing (Chongqing’s international portal), 28 Jan 2026](https://www.ichongqing.info/2026/01/28/chongqing-sets-5-growth-goal-following-3-37-trillion-yuan-gdp-in-2025/) | data | 2026-10-03 | CONFIRMED |
| cn-chengdu | [GoChengdu (Chengdu’s official portal), on a National Development and Reform Commission briefing (13 Jan 2025)](https://www.gochengdu.cn/en/article/news/4304) | data | 2026-10-03 | CONFIRMED |

## P62 Australia (data/atlas/au.js): 5 new hubs

New hubs: Melbourne (not rated); Brisbane (not rated); Perth (not rated); Adelaide (not rated); Canberra (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| au-melbourne | [Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)](https://www.abs.gov.au/statistics/people/population/regional-population/latest-release) | data | 2026-10-03 | CONFIRMED |
| au-brisbane | [Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)](https://www.abs.gov.au/statistics/people/population/regional-population/latest-release) | data | 2026-10-03 | CONFIRMED |
| au-perth | [Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)](https://www.abs.gov.au/statistics/people/population/regional-population/latest-release) | data | 2026-10-03 | CONFIRMED |
| au-adelaide | [Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)](https://www.abs.gov.au/statistics/people/population/regional-population/latest-release) | data | 2026-10-03 | CONFIRMED |
| au-canberra | [Australian Bureau of Statistics, Regional population 2024–25 (31 Mar 2026)](https://www.abs.gov.au/statistics/people/population/regional-population/latest-release) | data | 2026-10-03 | CONFIRMED |

## P63 New Zealand (data/atlas/nz.js): 2 new hubs

New hubs: Wellington (not rated); Christchurch (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| nz-wellington | [Wellington Regional Growth Framework, Employment Analysis (October 2020)](https://wrlc.org.nz/assets/Documents/Documents/2025/09/WRGF-Employment-Analysis-Report-0.6-1.pdf) | data | 2026-10-03 | CONFIRMED |
| nz-christchurch | [ChristchurchNZ (the city’s economic development agency), 16 Apr 2025](https://www.christchurchnz.com/about/news/canterbury-s-twin-engines-of-resilience) | data | 2026-10-03 | CONFIRMED |

## P64 Japan (data/atlas/jp.js): 5 new hubs

New hubs: Osaka (not rated); Nagoya (not rated); Yokohama (not rated); Fukuoka (not rated); Kyoto (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| jp-osaka | [JETRO, regional information: Osaka City](https://www.jetro.go.jp/en/invest/region/data/osaka-city.html) | data | 2026-10-03 | CONFIRMED |
| jp-nagoya | [JETRO, regional information: Nagoya City](https://www.jetro.go.jp/en/invest/region/data/nagoya-city.html) | data | 2026-10-03 | CONFIRMED |
| jp-yokohama | [JETRO, regional information: Yokohama City](https://www.jetro.go.jp/en/invest/region/data/yokohama-city.html) | data | 2026-10-03 | CONFIRMED |
| jp-fukuoka | [JETRO, regional information: Fukuoka City](https://www.jetro.go.jp/en/invest/region/data/fukuoka-city.html) | data | 2026-10-03 | CONFIRMED |
| jp-kyoto | [JETRO, regional information: Kyoto Prefecture](https://www.jetro.go.jp/en/invest/region/data/kyoto.html) | data | 2026-10-03 | CONFIRMED |

## P65 South Korea (data/atlas/kr.js): 3 new hubs

New hubs: Busan (logistics dominant); Seongnam (Pangyo) (it strong, software strong); Incheon (Songdo) (not rated).

| Claim | Source | Tag | Read | Status |
|---|---|---|---|---|
| kr-busan | [KOTRA / Invest Korea, Busan: strategic place for global logistics](https://www.investkorea.org/bsn-en/cntnts/i-1468/web.do) | data | 2026-10-03 | CONFIRMED |
| kr-pangyo | [KOTRA / Invest Korea, Pangyo Techno Valley overview](https://www.investkorea.org/ik-en/bbs/i-5045/detail.do?ntt_sn=490755) | data | 2026-10-03 | CONFIRMED |
| kr-incheon | [KOTRA / Invest Korea, Songdo bio cluster (6 Aug 2021)](https://www.investkorea.org/ik-en/bbs/i-2486/detail.do?ntt_sn=490763) | data | 2026-10-03 | CONFIRMED |

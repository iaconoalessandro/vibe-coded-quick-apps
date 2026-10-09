---
title: "Verification round 5a: the Atlas deepening — Germany, France, Netherlands, Belgium, Luxembourg, Switzerland, Austria"
last_researched: 2026-10-03
scope: Log of every claim and metric added or changed in the Atlas records data/atlas/de.js, fr.js, nl.js, be.js, lu.js, ch.js and at.js in round 5a, with the source, what the page says, and every rating changed. One section per country under its existing P number. Information only; not legal, tax or immigration advice.
confidence: high for statistics read from Eurostat's API and national statistics offices on the day; medium for hub ratings and standing, which are judgements from the claims listed under each hub.
review_by: 2027-03-31
---

# Verification round 5a (3 October 2026)

Status vocabulary as in round 4a: **CONFIRMED** (primary source read and matches), **PARTLY CONFIRMED**
(core holds; a detail is thin or single-source), **STILL UNVERIFIED** (could not be read; kept out of
the record or listed under its gaps). The "what it says" column gives the figure as the claim states
it and the page it was read on. The first working pass was interrupted by a usage limit; the second
pass finished from its saved downloads (Eurostat JSON, the Federal Employment Agency report, the GFCI 40
PDF, Numbeo pages) and spot-checked them against the claims, as noted per country.

**Method for metrics, all countries.** `pop` and `gdp` are Eurostat metropolitan regions where the
country has them (met_pjanaggr3 for population on 1 January, met_10r_3gdp for GDP at current prices),
`area: metro`. `rent` is Numbeo's crowd-sourced average one-bedroom flat in the city centre,
`area: city`, tag anecdotal, with entries and contributors named in `by`. `wage` is the source named
per country, same source and same kind of area for every hub of that country.

## P33 Germany (data/atlas/de.js)

**Spot-checks in the second pass.** GFCI 40 saved PDF text: Frankfurt 29 (730, down 14), Berlin 45,
Munich 58 (up 15), Hamburg 84, Stuttgart in the associate list. Federal Employment Agency report text:
national median €4,013 (2024; €3,796 in 2023), state range €3,294 (Mecklenburg-Vorpommern) to €4,527
(Hamburg), districts €2,965 (Erzgebirgskreis) to €5,855 (Ingolstadt), IT occupations €5,907, finance
and insurance €5,860, software development at expert level €6,097. Eurostat nama_10r_3empers saved
JSON: Frankfurt (DE712) 761.09 thousand jobs in 2023, 259.39 in K-N, 39.89 in manufacturing.
Eurostat API read on the day: GDP €4,529,710 million (2025), youth unemployment 7.1% (2025).

**Changes of wording.** Bonn's "knownFor" originally named DHL as a second global headquarters; a DHL
page could not be read (DNS refused), so DHL was removed and the logistics sector dropped from Bonn.
Dresden gained de-dd-infineon from engineering.com (6 Jul 2026), tagged practitioner consensus because it
is trade press reporting Infineon's announcement, not Infineon's own page.

**Wage metric.** The Federal Employment Agency's state medians (31 Dec 2024). Hessen, Bayern,
Baden-Württemberg, Nordrhein-Westfalen, Niedersachsen and Sachsen were read off the report's chart
(flagged in `by`, "value read off the report's chart"); Berlin and Hamburg are in its text. The state
median hides the city's own level: the report lists only ten districts.

**Counts.** Claims 45 → 91; hubs 14 → 16.

**Rating changes (old → new).**
- Berlin it: gap → strong on de-ber-ict, de-ber-gser
- Hamburg it: gap → strong on de-ham-emp
- Rhine-Neckar (Walldorf, Mannheim) business: gap → present on de-rn-basf
- Nuremberg–Herzogenaurach accounting: gap → present on de-nue-datev
- Cologne finance: gap → strong on de-cgn-ins
- Ruhr (Essen, Dortmund) business: gap → strong on de-ruhr-rwe, de-ruhr-tk, de-ruhr-brenntag
- Hanover business: gap → present on de-han-conti
- Hanover finance: gap → present on de-han-talanx
- Leipzig management: gap → present on de-lej-bmw, de-lej-porsche
- Karlsruhe it: gap → strong (new hub) on de-ka-cyber, de-ka-ionos
- Karlsruhe software: gap → present (new hub) on de-ka-cyber
- Karlsruhe cs: gap → present (new hub) on de-ka-kit
- Bonn business: gap → present (new hub) on de-bn-telekom
- Bonn it: gap → present (new hub) on de-bn-telekom

**Claims added (46), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| de-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1, 2 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Frankfurt 29th in the world (down 14 places) and ninth among Western European centres, behind London, Zurich, Geneva, Luxembourg, Lugano, Paris, Copenhagen and Amsterdam; Berlin is 45th, Munich 58th (up 15) and Hamburg 84th, and Stuttgart is an associate centre. | CONFIRMED on the page named; figures as stated |
| de-ba-top | data | Federal Employment Agency, Analyse zur Entgeltstatistik 2024 (Oct 2025), section 2.5 and figure 13 (https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Fachstatistiken/Beschaeftigung/Generische-Publikationen/Blickpunkt-Arbeitsmarkt-Analyse-zur-Entgeltstatistik.pdf): Frankfurt, Stuttgart, Munich, Wolfsburg and Ludwigshafen are among the ten districts and cities with the highest median monthly pay of full-time employees in Germany on 31 December 2024; the top is Ingolstadt at €5,855, against a national median of €4,013. | CONFIRMED on the page named; figures as stated |
| de-fra-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE712 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Frankfurt am Main has 761,090 jobs (2023), 259,390 of them (34%) in finance and insurance, real estate and professional and business services, and only 39,890 in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-fra-dbg | employer-stated | Deutsche Börse Group, Frankfurt/Eschborn location page (https://www.deutsche-boerse.com/dbg-en/about-us/deutsche-boerse-group/location-frankfurt-eschborn): Deutsche Börse Group’s headquarters is in Eschborn, just outside Frankfurt’s city limits, with more than 3,100 employees; the Frankfurt Stock Exchange trading hall is in the Alte Börse in the city centre. | CONFIRMED on the page named; figures as stated |
| de-fra-airport | employer-stated | Fraport, About us (2025 figures) (https://www.fraport.com/en/our-group/about-us.html): Frankfurt Airport City employs approximately 80,000 people at some 500 companies and organisations on site, one of Germany’s largest job complexes at a single location. | CONFIRMED on the page named; figures as stated |
| de-mu-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE212 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Munich city has 1,203,650 jobs (2023): 340,320 in finance and insurance, real estate and professional and business services, 327,110 in trade, transport, hospitality and information and communication, and 113,320 in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-mu-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Munich page (https://startupgenome.com/ecosystems/munich): Startup Genome’s 2026 report puts the value of Munich’s start-up ecosystem at $71 billion (Europe’s average $14.3 billion, the world’s $25 billion), with $2.3 billion of seed and Series A funding and $10 billion of exits in 2021–2025. | CONFIRMED on the page named; figures as stated |
| de-ber-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Berlin page (https://startupgenome.com/ecosystems/berlin): Startup Genome’s 2026 report ranks Berlin 22nd among the world’s start-up ecosystems and third in Europe (also third in Europe for talent and for its AI-native cluster), with an ecosystem value of $89.5 billion. | CONFIRMED on the page named; figures as stated |
| de-ber-ict | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE300 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Berlin has 2,190,900 jobs (2023), 170,560 of them in information and communication, 43,450 in finance and insurance and 432,460 in professional, scientific, technical and administrative services. | CONFIRMED on the page named; figures as stated |
| de-ham-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE600 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Hamburg has 1,348,210 jobs (2023), 87,670 of them in information and communication, 45,240 in finance and insurance and 109,100 in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-ham-ports | data | Eurostat, gross weight of goods handled in main ports (mar_mg_aa_pwhd), 2024 (https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table): In 2024 Hamburg handled 97.0 million tonnes of goods, the third-busiest port in the EU after Rotterdam (397.3 million) and Antwerp-Bruges (244.2 million). | CONFIRMED on the page named; figures as stated |
| de-gser-ham | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Hamburg page (https://startupgenome.com/ecosystems/hamburg): Startup Genome’s 2026 report puts the value of Hamburg’s start-up ecosystem at $6 billion, with $962 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| de-stu-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE111 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Stuttgart city has 548,450 jobs (2023), 77,320 of them (14%) in manufacturing and 140,560 in finance and insurance, real estate and professional and business services. | CONFIRMED on the page named; figures as stated |
| de-gser-stu | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Stuttgart page (https://startupgenome.com/ecosystems/stuttgart): Startup Genome’s 2026 report puts the value of Stuttgart’s start-up ecosystem at $6 billion, with $293 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| de-rn-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE126, DE125 and DE128 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Mannheim city has 249,430 jobs (2023), 41,640 of them in manufacturing; Heidelberg has 129,740 and the Rhein-Neckar district 247,100. | CONFIRMED on the page named; figures as stated |
| de-rn-basf | employer-stated | BASF, Ludwigshafen: the site (https://www.basf.com/global/en/who-we-are/organization/locations/europe/german-sites/ludwigshafen/the-site): BASF’s Ludwigshafen site, the origin of its Verbund system, has around 33,000 employees, 125 production plants and calls itself the largest integrated chemical complex in the world. | CONFIRMED on the page named; figures as stated |
| de-rn-sapfacts | employer-stated | SAP, Company information (https://www.sap.com/about/company.html): SAP reports 110,000 employees from 157-plus countries, total revenue of €36.8 billion (non-IFRS) in 2025 and 100-plus development locations. | CONFIRMED on the page named; figures as stated |
| de-dus-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DEA11 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Düsseldorf city has 576,590 jobs (2023), 175,900 of them (31%) in finance and insurance, real estate and professional and business services and 167,350 in trade, transport, hospitality and information and communication. | CONFIRMED on the page named; figures as stated |
| de-dus-rhein | employer-stated | Rheinmetall, Locations worldwide (https://www.rheinmetall.com/en/company/locations-worldwide): Rheinmetall AG has its head office in Düsseldorf (Rheinmetall Platz 1) and says it employs around 34,000 people at 161 offices and production sites in more than 30 countries (status July 2026, continuing operations). | CONFIRMED on the page named; figures as stated |
| de-dus-henkelsite | employer-stated | City of Düsseldorf economic development, Henkel profile; Henkel, company profile (https://www.henkel.com/press-and-media/facts-and-figures/company-profile) (https://www.duesseldorf-wirtschaft.de/unternehmen-duesseldorf/henkel/): More than 5,300 people work at Henkel’s headquarters site in Düsseldorf-Holthausen, which covers more than 1.42 million square metres; Henkel as a whole has about 50,000 employees worldwide, more than 80% of them outside Germany. | CONFIRMED on the page named; figures as stated |
| de-wob-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE913 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Wolfsburg has 131,830 jobs (2023), 71,080 of them (54%) in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-wob-plant | employer-stated | Volkswagen newsroom, Wolfsburg plant (facts and figures, March 2024) (https://www.volkswagen-newsroom.com/en/wolfsburg-plant-the-heart-of-the-vw-brand-6811): The Wolfsburg plant has approximately 70,000 employees, built 490,000 vehicles in 2023 and is the headquarters of Volkswagen Passenger Cars. | CONFIRMED on the page named; figures as stated |
| de-nue-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE254 and DE257 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Nuremberg city has 406,850 jobs (2023); the neighbouring district of Erlangen-Höchstadt, where Herzogenaurach lies, has 68,010, of them 18,180 in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-nue-datev | employer-stated | DATEV, Über DATEV; seat from the Impressum (https://www.datev.de/web/de/berufsgruppenuebergreifend/ueber-datev/impressum) (https://www.datev.de/web/de/ueber-datev/): DATEV eG, the software and IT services cooperative for tax advisers, accountants and companies, has its seat at Paumgartnerstraße in Nuremberg and says more than 9,000 people work for it, with €1.51 billion of revenue in 2024. | CONFIRMED on the page named; figures as stated |
| de-nue-ba | data | Federal Employment Agency, Zentrale (https://www.arbeitsagentur.de/ueber-uns/zentrale): The central office of the Federal Employment Agency is at Regensburger Straße 104 in Nuremberg, a 17-storey building where the divisions set the agency’s labour-market programmes, finances and personnel policy. | CONFIRMED on the page named; figures as stated |
| de-dd-infineon | practitioner consensus | engineering.com, Infineon opens Dresden semiconductor fab ahead of schedule (6 Jul 2026), reporting the Infineon press release (https://www.engineering.com/infineon-opens-dresden-semiconductor-fab-ahead-of-schedule/): Trade press reporting Infineon’s announcement says the company opened its Smart Power Fab in Dresden in July 2026, several months ahead of schedule: an investment of five billion euros, the largest in Infineon’s history, creating 1,000 new direct jobs and doubling its manufacturing capacity at the Dresden site. | CONFIRMED on the page named; figures as stated |
| de-dd-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DED21 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Dresden city has 350,030 jobs (2023), 41,710 of them in industry (mining, manufacturing, energy and water) including 36,920 in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-cgn-ins | data | Köln Business, Versicherungswirtschaft (https://koeln.business/branchen/versicherungswirtschaft): More than 50 German insurers and reinsurers have their headquarters in Cologne, which Cologne’s economic development calls the second-largest German insurance location, with about 24,000 employees subject to social insurance. | CONFIRMED on the page named; figures as stated |
| de-cgn-emp | data | City of Cologne, Wirtschaft und Arbeitsmarkt im Überblick (https://www.stadt-koeln.de/artikel/74098/index.html): Cologne had 631,907 employees subject to social insurance at its workplaces in 2025, 553,626 of them in services and 78,281 in production. | CONFIRMED on the page named; figures as stated |
| de-ruhr-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DEA13 and DEA52 (cities) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Essen has 350,160 jobs (2023) and Dortmund 346,380; in Essen 93,570 are in finance and insurance, real estate and professional and business services. | CONFIRMED on the page named; figures as stated |
| de-ruhr-rwe | employer-stated | RWE, imprint (https://www.rwe.com/en/imprint/): RWE AG gives its address as RWE Platz 1, Essen, where it is registered (district court Essen). | CONFIRMED on the page named; figures as stated |
| de-ruhr-tk | employer-stated | thyssenkrupp, imprint (https://www.thyssenkrupp.com/en/imprint): thyssenkrupp AG gives its address as thyssenkrupp Allee 1, Essen, with registered offices in Duisburg and Essen. | CONFIRMED on the page named; figures as stated |
| de-ruhr-brenntag | employer-stated | Brenntag, imprint (https://www.brenntag.com/en-de/imprint/): Brenntag’s head office is at Messeallee 11 in Essen. | CONFIRMED on the page named; figures as stated |
| de-han-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE929 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Hanover region has 703,250 jobs (2023), 74,620 of them in manufacturing. | CONFIRMED on the page named; figures as stated |
| de-han-conti | employer-stated | City of Hannover, press release on Continental’s new headquarters (2023); address from Continental (https://www.continental.com/en/press/media-library/continental-headquarter/) (https://www.hannover.de/Service/Presse-Medien/Hannover.de/Aktuelles/Wirtschaft-Wissenschaft-2023/Continental-weiht-neue-Unter%C2%ADnehmens%C2%ADzentrale-ein): Continental’s headquarters is at Continental-Plaza 1 in Hanover; its new campus was inaugurated in December 2023 for about 2,400 employees from corporate functions and the Tires and ContiTech divisions. | CONFIRMED on the page named; figures as stated |
| de-han-talanx | employer-stated | Talanx, The Group (https://www.talanx.com/en/talanx-group/group): Talanx describes itself as based in Hannover and reports insurance revenue of €48,994 million for 2025. | CONFIRMED on the page named; figures as stated |
| de-lej-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DED51 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Leipzig city has 365,780 jobs (2023), 28,180 of them in manufacturing and 93,610 in finance and insurance, real estate and professional and business services. | CONFIRMED on the page named; figures as stated |
| de-lej-bmw | employer-stated | BMW Group Plants, Leipzig; investment and site total from the BMW Group press release on 20 years of series production (https://www.press.bmwgroup.com/global/article/detail/T0453991EN/) (https://www.bmwgroup-werke.com/leipzig/en.html): BMW Group Plant Leipzig has about 6,800 employees and built 259,430 vehicles in 2025; more than 11,600 people work at the site in total, and the BMW Group has invested over €5.6 billion there. | CONFIRMED on the page named; figures as stated |
| de-lej-porsche | employer-stated | Porsche Newsroom, Porsche Leipzig (https://newsroom.porsche.com/en/company/leipzig/porsche-leipzig-factory.html): More than 4,600 people work at Porsche Leipzig, which builds around 550 Macan and Panamera models a day and is the brand’s centre of excellence for electromobility. | CONFIRMED on the page named; figures as stated |
| de-ka-kit | employer-stated | KIT, Facts and Figures flyer (KIT in figures 2025) (https://www.kit.edu/downloads/flyer-daten-fakten-zahlen-en.pdf): The Karlsruhe Institute of Technology reports 23,083 students, 10,131 employees, 424 professors and 68 new spin-offs and start-ups in 2025. | CONFIRMED on the page named; figures as stated |
| de-ka-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DE122 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Karlsruhe city has 240,790 jobs (2023), 71,910 of them in trade, transport, hospitality and information and communication and 52,850 in finance and insurance, real estate and professional and business services. | CONFIRMED on the page named; figures as stated |
| de-ka-cyber | practitioner consensus | European Cluster Collaboration Platform, CyberForum e.V. (figures as given in secondary reports; the cluster’s own site refused automated access) (https://clustercollaboration.eu/content/cyberforum-ev): CyberForum, the network of Karlsruhe’s IT cluster, has about 1,200 member companies that together account for around 30,000 jobs, and runs a federally recognised digital hub for cybersecurity. | CONFIRMED on the page named; figures as stated |
| de-ka-ionos | employer-stated | IONOS Group, imprint (https://www.ionos-group.com/imprint.html): IONOS Group, the cloud infrastructure and web hosting company, gives Karlsruhe as its address. | CONFIRMED on the page named; figures as stated |
| de-bn-telekom | employer-stated | Deutsche Telekom, Company profile; Bonn workforce from Deutsche Telekom, Commitment to Bonn (https://www.telekom.com/en/newsroom/topic-hubs/sponsoring/our-commitment-to-bonn/deutsche-telekom-commitment-to-bonn) (https://www.telekom.com/en/about-us/company-profile): Deutsche Telekom’s group headquarters is at Friedrich-Ebert-Allee 140 in Bonn; the group has around 200,000 employees worldwide (31 December 2025) and more than 12,000 people in Bonn and the surrounding region work for it, making it Bonn’s largest employer. | CONFIRMED on the page named; figures as stated |
| de-bn-un | data | Federal Foreign Office, The United Nations in Bonn (22 Jan 2026) (https://www.auswaertiges-amt.de/en/aussenpolitik/internationale-organisationen/vereintenationen/231566-231566): Bonn has 27 United Nations institutions on its UN Campus, with a staff of almost a thousand. | CONFIRMED on the page named; figures as stated |
| de-bn-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 DEA22 (city) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Bonn city has 269,690 jobs (2023), 135,860 of them (50%) in public administration, education, health, arts and other services, and only 8,510 in manufacturing. | CONFIRMED on the page named; figures as stated |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Frankfurt am Main | 2,779,727 (2023, metro) | 160.8 EUR (2021, metro) | 4,325 EUR (2024, region, median) | 1,178 EUR (2026, city) |
| Munich | 2,981,735 (2023, metro) | 213.4 EUR (2021, metro) | 4,166 EUR (2024, region, median) | 1,500 EUR (2026, city) |
| Berlin | 5,481,613 (2023, metro) | 217.9 EUR (2021, metro) | 4,198 EUR (2024, region, median) | 1,321 EUR (2026, city) |
| Hamburg | 3,423,121 (2023, metro) | 179.5 EUR (2021, metro) | 4,527 EUR (2024, region, median) | 1,146 EUR (2026, city) |
| Stuttgart | 2,816,924 (2023, metro) | 155.7 EUR (2021, metro) | 4,356 EUR (2024, region, median) | 1,118 EUR (2026, city) |
| Rhine-Neckar (Walldorf, Mannheim) | 1,209,891 (2023, metro) | 56.1 EUR (2021, metro) | 4,356 EUR (2024, region, median) | 843 EUR (2026, city) |
| Düsseldorf | 1,576,105 (2023, metro) | 95.6 EUR (2021, metro) | 4,038 EUR (2024, region, median) | 960 EUR (2026, city) |
| Wolfsburg | 1,014,477 (2023, metro) | 57.5 EUR (2021, metro) | 3,832 EUR (2024, region, median) | – |
| Nuremberg–Herzogenaurach | 1,374,524 (2023, metro) | 69.6 EUR (2021, metro) | 4,166 EUR (2024, region, median) | 801 EUR (2026, city) |
| Dresden | 1,348,569 (2023, metro) | 46.4 EUR (2021, metro) | 3,388 EUR (2024, region, median) | 667 EUR (2026, city) |
| Cologne | 2,014,918 (2023, metro) | 102.3 EUR (2021, metro) | 4,038 EUR (2024, region, median) | 1,050 EUR (2026, city) |
| Ruhr (Essen, Dortmund) | 5,147,820 (2023, metro) | 180.5 EUR (2021, metro) | 4,038 EUR (2024, region, median) | 569 EUR (2026, city) |
| Hanover | 1,333,851 (2023, metro) | 60.3 EUR (2021, metro) | 3,832 EUR (2024, region, median) | 858 EUR (2026, city) |
| Leipzig | 1,076,346 (2023, metro) | 38 EUR (2021, metro) | 3,388 EUR (2024, region, median) | 687 EUR (2026, city) |
| Karlsruhe | 763,320 (2023, metro) | 39.9 EUR (2021, metro) | 4,356 EUR (2024, region, median) | 863 EUR (2026, city) |
| Bonn | 944,800 (2023, metro) | 45.3 EUR (2021, metro) | 4,038 EUR (2024, region, median) | 942 EUR (2026, city) |

**Standing.**

- Frankfurt am Main: finance 5/3/2 [de-fra-banks, de-fra-sup, de-gfci]; economics 5/3/2 [de-fra-sup, de-fra-emp]
- Munich: business 5/3/2 [de-mu-dax, de-mu-emp, de-ba-top]; management 5/3/2 [de-mu-dax, de-ba-top]; finance 4/2/1 [de-mu-dax, de-gfci]; it 4/3/2 [de-mu-ict, de-mu-google, de-mu-gser]; software 4/3/2 [de-mu-ict, de-mu-google, de-mu-gser]
- Berlin: software 5/4/2 [de-ber-startups, de-ber-gser, de-ber-ict]; ai 5/4/2 [de-ber-ai, de-ber-gser]; it 4/3/2 [de-ber-ict, de-ber-gser]
- Hamburg: logistics 5/4/2 [de-ham-port, de-ham-ports]; it 3/2/1 [de-ham-emp, de-gser-ham]
- Stuttgart: management 4/3/2 [de-stu-cluster, de-stu-bosch, de-stu-emp, de-ba-top]; business 4/2/1 [de-stu-cluster, de-stu-emp, de-gfci]
- Rhine-Neckar (Walldorf, Mannheim): software 4/3/2 [de-rn-sap, de-rn-sapfacts]; it 3/2/1 [de-rn-sap, de-rn-emp]
- Düsseldorf: business 4/2/1 [de-mu-dax, de-dus-emp, de-dus-rhein]; marketing 3/2/1 [de-dus-henkel, de-dus-henkelsite]
- Wolfsburg: management 3/2/1 [de-wob-vw, de-wob-plant, de-wob-emp]
- Nuremberg–Herzogenaurach: marketing 4/2/1 [de-nue-adidas, de-nue-brands, de-nue-emp]; business 4/2/1 [de-nue-adidas, de-nue-brands, de-nue-emp]
- Dresden: it 4/4/2 [de-dd-chips, de-dd-emp, de-dd-infineon]; cs 4/3/2 [de-dd-chips, de-dd-emp]; software 3/2/1 [de-dd-chips]
- Cologne: finance 4/2/1 [de-cgn-ins, de-cgn-emp, de-gfci]
- Ruhr (Essen, Dortmund): business 4/2/1 [de-ruhr-rwe, de-ruhr-tk, de-ruhr-brenntag, de-ruhr-emp]
- Hanover: finance 3/2/1 [de-han-talanx, de-han-emp]
- Leipzig: management 3/2/1 [de-lej-bmw, de-lej-porsche, de-lej-emp]
- Karlsruhe: it 3/2/1 [de-ka-cyber, de-ka-ionos, de-ka-emp]
- Bonn: it 3/2/1 [de-bn-telekom, de-bn-emp]

## P37 France (data/atlas/fr.js)

**Method.** Jobs by département are Eurostat nama_10r_3empers (NUTS 3), 2023, read through the Eurostat
API and ranked over all 101 French départements and over the 697 EU NUTS 3 regions with data. Pay is
INSEE's "Les salaires dans le secteur privé en 2022" (published 29 Aug 2024): table T401B for the
all-sector mean and T402 for the sectors information and communication (code JUJZ) and finance and
insurance (JUKZ); the value is `BRUT_EQTP`, "Salaire brut en équivalent temps plein (€)", annual
(national all-sector value 41,594, consistent with a monthly gross of about 3,466), divided by 12.
The département is the INSEE area; it is recorded as `area: region` because the schema has no
département. Paris département excludes Hauts-de-Seine.

**Spot-checks in the second pass.** Choose Paris Region / CCI PRFF2025 PDF text: "Top 10 Corporate
Headquarters in Paris Region - Fortune Global 500" table with revenue and total workforce (TotalEnergies
102,579 … Groupe BPCE 97,835), "Europe's highest concentration of Fortune 500 Global Corporate
Headquarters", "Fortune Magazine, Global 500, July 2024". GFCI 40 saved PDF text: Paris 23 (736, down
4), Zurich 10, Geneva 12, Luxembourg 17, Lugano 21, Copenhagen 25, Amsterdam 26, Frankfurt 29. Startup
Genome Paris page: "#13 Global Startup Ecosystem", "#2 Europe", "Top 10 Global Ecosystem in AI-Native
Cluster", ecosystem value $169 BN, total VC $47 BN. Kearney: top five unchanged (New York, London,
Paris, Tokyo, Singapore), release 5 November 2025; Outlook led by Munich (press release; only the top
five were stated).

**National steps rule used for the French hubs.** 5 first; 4 second to fifth; 3 sixth to fifteenth;
2 sixteenth to fortieth among French urban areas for the family's jobs (ICT = NACE J, finance =
NACE K), the Paris region counted once. Demand is rated *strong* where the national step is 4 or 5 on a
statistic; *dominant* only for Paris (finance and IT), where the data claim shows 39% and 28% of the
country's jobs. Where the rule rated Strasbourg and Grenoble 3, they stay unrated for demand.

**Not read.** BNP Paribas, Société Générale and the LVMH and L'Oréal group pages returned 403 or 404; the
Port of Marseille Fos own page gives 79 million tonnes (a different count), so Eurostat's 66.0 million
for "Marseille" (2024) is used for comparability; Amadeus at Sophia Antipolis appeared only in search
snippets and is left out; ST Crolles page timed out.

**Counts.** Claims 22 → 57; hubs 10 → 10.

**Rating changes (old → new).**
- Paris finance: strong → dominant on fr-paris-emp, fr-gfci
- Paris it: gap → dominant on fr-paris-emp
- Paris software: present → strong on fr-paris-sg, fr-paris-emp
- Paris ai: gap → strong on fr-paris-sg, fr-paris-ai
- Paris banking: gap → strong on fr-paris-fortune, fr-gfci
- Paris vc: present → strong on fr-paris-sg, fr-stationf
- Toulouse it: gap → strong on fr-tls-emp
- Lyon finance: gap → strong on fr-lyon-emp, fr-lyon
- Marseille logistics: gap → strong on fr-mrs-port
- Lille business: gap → strong on fr-lille-hq, fr-lille-emp
- Lille it: gap → strong on fr-lille-emp, fr-lille
- Bordeaux finance: gap → strong on fr-bdx-emp, fr-bordeaux
- Nantes it: gap → strong on fr-nan-emp, fr-nantes

**Claims added (35), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| fr-pay-paris | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Paris (https://www.insee.fr/fr/statistiques/8219475): In Paris the mean gross pay per full-time equivalent in the private sector in 2022 was €68,381 a year in information and communication and €104,003 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-toulouse | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Haute-Garonne (https://www.insee.fr/fr/statistiques/8219475): In Haute-Garonne the mean gross pay per full-time equivalent in the private sector in 2022 was €50,562 a year in information and communication and €54,540 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-sophia | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Alpes-Maritimes (https://www.insee.fr/fr/statistiques/8219475): In Alpes-Maritimes the mean gross pay per full-time equivalent in the private sector in 2022 was €64,742 a year in information and communication and €52,986 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-lyon | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Rhône (https://www.insee.fr/fr/statistiques/8219475): In Rhône the mean gross pay per full-time equivalent in the private sector in 2022 was €53,320 a year in information and communication and €60,271 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-marseille | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Bouches-du-Rhône (https://www.insee.fr/fr/statistiques/8219475): In Bouches-du-Rhône the mean gross pay per full-time equivalent in the private sector in 2022 was €52,581 a year in information and communication and €57,786 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-lille | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Nord (https://www.insee.fr/fr/statistiques/8219475): In Nord the mean gross pay per full-time equivalent in the private sector in 2022 was €47,387 a year in information and communication and €53,162 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-bordeaux | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Gironde (https://www.insee.fr/fr/statistiques/8219475): In Gironde the mean gross pay per full-time equivalent in the private sector in 2022 was €51,302 a year in information and communication and €53,603 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-nantes | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Loire-Atlantique (https://www.insee.fr/fr/statistiques/8219475): In Loire-Atlantique the mean gross pay per full-time equivalent in the private sector in 2022 was €49,150 a year in information and communication and €54,156 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-strasbourg | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Bas-Rhin (https://www.insee.fr/fr/statistiques/8219475): In Bas-Rhin the mean gross pay per full-time equivalent in the private sector in 2022 was €51,866 a year in information and communication and €57,773 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-pay-grenoble | data | INSEE, Les salaires dans le secteur privé en 2022, table T402 (published 29 Aug 2024): mean annual gross pay per full-time equivalent in the private sector by sector (JZ information and communication, KZ finance and insurance), département Isère (https://www.insee.fr/fr/statistiques/8219475): In Isère the mean gross pay per full-time equivalent in the private sector in 2022 was €53,956 a year in information and communication and €54,551 in finance and insurance, against €59,881 and €66,925 across France. | CONFIRMED on the page named; figures as stated |
| fr-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Paris 23rd in the world (down 4 places) and sixth among Western European centres, behind London, Zurich, Geneva, Luxembourg and Lugano. | CONFIRMED on the page named; figures as stated |
| fr-paris-sg | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Paris page (https://startupgenome.com/ecosystems/paris): Startup Genome’s 2026 report ranks Paris 13th among the world’s start-up ecosystems and second in Europe (also second in Europe for talent, and in the world’s top ten for funding momentum and for its AI-native cluster), with an ecosystem value of $169 billion (Europe’s average $14.3 billion) and $47 billion of venture funding in 2021–2025. | CONFIRMED on the page named; figures as stated |
| fr-paris-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FR101, FR105 and FRK26; ranks computed over all 697 NUTS 3 regions with data (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Paris (the city département) has 2,237,200 jobs (2023), 245,500 of them in information and communication and 139,400 in finance and insurance; the neighbouring Hauts-de-Seine has 1,267,900 jobs, 204,200 in information and communication and 87,100 in finance and insurance. Together they hold 39% of France’s information-and-communication jobs and 28% of its finance and insurance jobs; they are also the first and second of 697 EU regions at this level (NUTS 3) for information-and-communication jobs, and the first and fourth for finance and insurance. The next départements are Rhône with 65,800 jobs in information and communication and Nord with 31,600 in finance and insurance. | CONFIRMED on the page named; figures as stated |
| fr-paris-fortune | practitioner consensus | CCI Paris Île-de-France and Choose Paris Region, Paris Region Facts & Figures 2025, page "Europe’s Premier Hub for Business and Innovation" (Fortune Global 500, July 2024) (https://www.cci-paris-idf.fr/sites/default/files/2025-03/PRFF2025-Europe-Premier-Hub-for-Business-and-Innovation.pdf): Choose Paris Region and the Paris Île-de-France Chamber of Commerce, citing Fortune’s Global 500 of July 2024, call the Paris Region Europe’s highest concentration of Fortune Global 500 headquarters; its ten largest are TotalEnergies (102,579 employees), Électricité de France (171,863), BNP Paribas (182,656), Société Générale (124,089), Crédit Agricole (75,125), Christian Dior (197,141), Carrefour (305,333), AXA (94,705), ENGIE (97,297) and Groupe BPCE (97,835). | CONFIRMED on the page named; figures as stated |
| fr-paris-ai | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Paris page (https://startupgenome.com/ecosystems/paris): Startup Genome’s Paris page records that the May 2025 Choose France Summit secured 53 investment projects worth $46.9 billion, with AI infrastructure and data centres a substantial share (Prologis alone $7.4 billion for a Paris-region data centre), and that in January 2026 the World Economic Forum and VivaTech launched a European Centre for AI Excellence in Paris. | CONFIRMED on the page named; figures as stated |
| fr-paris-kearney | practitioner consensus | Kearney, 2025 Global Cities Report, press release (https://www.prnewswire.com/news-releases/kearney-2025-global-cities-report-302604981.html): Kearney’s 2025 Global Cities Index (released 5 November 2025) ranks Paris third in the world, after New York and London and ahead of Tokyo and Singapore; its forward-looking Outlook ranking put Munich first. | CONFIRMED on the page named; figures as stated |
| fr-tls-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRJ23 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Haute-Garonne, the département of Toulouse, has 751,800 jobs (2023), 74,300 of them in manufacturing, 47,400 in information and communication (fourth among France’s 101 départements) and 176,400 in finance, real estate and professional and business services. | CONFIRMED on the page named; figures as stated |
| fr-tls-tas | employer-stated | Thales Alenia Space, news item on its Toulouse plant (25 Sep 2023) (https://www.thalesaleniaspace.com/en/news/thales-alenia-spaces-toulouse-plant-40): Thales Alenia Space’s French headquarters is in Toulouse, the largest of its nine industrial facilities in Europe, with more than 2,800 people working there. | CONFIRMED on the page named; figures as stated |
| fr-tls-space | data | Invest in Toulouse, space sector page (figures undated; CNES budget cited for 2024) (https://www.invest-in-toulouse.fr/en/?p=20066): Toulouse’s economic development agency counts 16,000 jobs in the Toulouse space sector, which it describes as France’s first region for space jobs and a quarter of European space jobs, and says CNES, the French space agency, has 1,700 employees there. | CONFIRMED on the page named; figures as stated |
| fr-tls-sg | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Toulouse page (https://startupgenome.com/ecosystems/toulouse): Startup Genome’s 2026 report puts the value of Toulouse’s start-up ecosystem at $2 billion (Europe’s average $14.3 billion), with $245 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| fr-sophia-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRL03 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Alpes-Maritimes, the département of Sophia Antipolis and Nice, has 515,100 jobs (2023), 23,700 of them in information and communication (twelfth among France’s 101 départements) and only 27,100 in manufacturing. | CONFIRMED on the page named; figures as stated |
| fr-lyon-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRK26; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Rhône, the département of Lyon, has 1,100,000 jobs (2023), fourth in France, with 65,800 in information and communication (third), 31,000 in finance and insurance (fourth) and 93,400 in manufacturing (second). | CONFIRMED on the page named; figures as stated |
| fr-lyon-sg | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Lyon page (https://startupgenome.com/ecosystems/lyon): Startup Genome’s 2026 report puts the value of Lyon’s start-up ecosystem at $9 billion (Europe’s average $14.3 billion), with $539 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| fr-mrs-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRL04; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Bouches-du-Rhône, the département of Marseille, has 996,400 jobs (2023), fifth in France, with 34,800 in information and communication, 23,800 in finance and insurance (sixth) and 222,400 in finance, real estate and professional and business services (fifth). | CONFIRMED on the page named; figures as stated |
| fr-mrs-port | data | Eurostat, gross weight of goods handled in the top 20 EU ports (mar_mg_aa_pwhd), 2024 (https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table): In 2024 the port of Marseille handled 66.0 million tonnes of goods, the eighth-busiest of the EU’s 20 largest ports and the second in France after HAROPA (Le Havre and Rouen, 76.7 million); Dunkerque handled 36.9 million and Nantes Saint-Nazaire 25.4 million. | CONFIRMED on the page named; figures as stated |
| fr-mrs-sg | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Marseille page (https://startupgenome.com/ecosystems/marseille): Startup Genome’s 2026 report puts the value of Marseille’s start-up ecosystem at $2 billion (Europe’s average $14.3 billion), with $217 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| fr-lille-hq | data | Hello Lille, Les Chiffres 2026 (January 2026), pages 4–5 and 14–15 (https://hellolille.eu/app/uploads/lille-attractivite/2026/01/Hello-Les-Chiffres-2026-EN-1.pdf): Hello Lille, the metropolis’s attractiveness agency, says the Lille metropolitan area has 558,000 employees and 136,000 students, more than 80 headquarters of retail brands and 40 distributors (including Auchan, Decathlon and Leroy Merlin), and the first concentration of international headquarters in France outside Paris (an EY and JLL study of 2021). | CONFIRMED on the page named; figures as stated |
| fr-lille-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRE11; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Nord, the département of Lille, has 1,123,400 jobs (2023), third in France, with 106,900 in manufacturing (first), 38,600 in information and communication (sixth) and 31,600 in finance and insurance (third). | CONFIRMED on the page named; figures as stated |
| fr-lille-sg | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Lille page (https://startupgenome.com/ecosystems/lille): Startup Genome’s 2026 report puts the value of Lille’s start-up ecosystem at $4 billion (Europe’s average $14.3 billion), with $143 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| fr-bdx-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRI12; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Gironde, the département of Bordeaux, has 812,700 jobs (2023), sixth in France, with 35,500 in information and communication (seventh), 24,900 in finance and insurance (fifth) and 169,600 in finance, real estate and professional and business services (seventh). | CONFIRMED on the page named; figures as stated |
| fr-bdx-sg | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Bordeaux page (https://startupgenome.com/ecosystems/bordeaux): Startup Genome’s 2026 report puts the value of Bordeaux’s start-up ecosystem at $1 billion (Europe’s average $14.3 billion), with $116 million of seed and Series A funding in H2 2023–2025. | CONFIRMED on the page named; figures as stated |
| fr-nan-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRG01; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Loire-Atlantique, the département of Nantes, has 728,400 jobs (2023), 74,300 of them in manufacturing (fifth in France), 42,900 in information and communication (fifth) and 21,900 in finance and insurance (eighth). | CONFIRMED on the page named; figures as stated |
| fr-str-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRF11; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Bas-Rhin, the département of Strasbourg, has 532,900 jobs (2023), 68,500 of them in manufacturing (seventh in France), 16,100 in information and communication (sixteenth) and 14,600 in finance and insurance (eleventh). | CONFIRMED on the page named; figures as stated |
| fr-gre-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 FRK24; ranks over the 101 French départements (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Isère, the département of Grenoble, has 561,400 jobs (2023), 74,500 of them in manufacturing (third in France) and 19,600 in information and communication (fifteenth). | CONFIRMED on the page named; figures as stated |
| fr-gre-soitec | employer-stated | Soitec, company page, "Soitec at a glance" (https://www.soitec.com/en/company): Soitec, the maker of silicon-on-insulator wafers, reports more than 2,100 employees and about €600 million of turnover, and says its Smart Cut process was developed in Grenoble’s innovation hub. | CONFIRMED on the page named; figures as stated |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Paris | 12,388,388 (2023, metro) | 757.6 EUR (2021, metro) | 4,903 EUR (2022, region, mean) | 1,380 EUR (2026, city) |
| Toulouse | 1,470,355 (2023, metro) | 59 EUR (2021, metro) | 3,549 EUR (2022, region, mean) | 788 EUR (2026, city) |
| Sophia Antipolis | 1,114,308 (2023, metro) | 39.6 EUR (2021, metro) | 3,348 EUR (2022, region, mean) | 994 EUR (2026, city) |
| Lyon | 1,916,293 (2023, metro) | 97.3 EUR (2021, metro) | 3,661 EUR (2022, region, mean) | 777 EUR (2026, city) |
| Marseille | 3,183,476 (2023, metro) | 125.4 EUR (2021, metro) | 3,420 EUR (2022, region, mean) | 803 EUR (2026, city) |
| Lille | 2,612,965 (2023, metro) | 85.9 EUR (2021, metro) | 3,218 EUR (2022, region, mean) | 821 EUR (2026, city) |
| Bordeaux | 1,690,231 (2023, metro) | 61.3 EUR (2021, metro) | 3,251 EUR (2022, region, mean) | 828 EUR (2026, city) |
| Nantes | 1,488,876 (2023, metro) | 54.8 EUR (2021, metro) | 3,267 EUR (2022, region, mean) | 724 EUR (2026, city) |
| Strasbourg | 1,164,485 (2023, metro) | 41.4 EUR (2021, metro) | 3,327 EUR (2022, region, mean) | 888 EUR (2026, city) |
| Grenoble | 1,299,578 (2023, metro) | 44.8 EUR (2021, metro) | 3,469 EUR (2022, region, mean) | 735 EUR (2026, city) |

**Standing.**

- Paris: business 5/5/3 [fr-pld, fr-paris-fortune, fr-paris-kearney]; management 5/5/3 [fr-pld, fr-paris-fortune]; finance 5/4/2 [fr-paris-emp, fr-gfci, fr-ey]; it 5/4/2 [fr-paris-emp]; software 5/4/3 [fr-paris-sg, fr-paris-emp, fr-stationf]; ai 5/4/3 [fr-paris-sg, fr-paris-ai]
- Toulouse: it 4/2/1 [fr-tls-emp, fr-tls-sg]; management 3/2/1 [fr-airbus, fr-tls-tas]
- Sophia Antipolis: it 3/2/1 [fr-sophia-emp, fr-sophia]
- Lyon: it 4/2/1 [fr-lyon-emp, fr-lyon, fr-lyon-sg]; finance 4/2/1 [fr-lyon-emp, fr-lyon]
- Marseille: finance 4/2/1 [fr-mrs-emp, fr-marseille]; logistics 4/3/1 [fr-mrs-port]
- Lille: finance 4/2/1 [fr-lille-emp, fr-lille]; business 4/2/1 [fr-lille-hq, fr-lille-emp]; it 4/2/1 [fr-lille-emp, fr-lille]
- Bordeaux: finance 4/2/1 [fr-bdx-emp, fr-bordeaux]
- Nantes: it 4/2/1 [fr-nan-emp, fr-nantes]
- Strasbourg: it 3/2/1 [fr-str-emp, fr-strasbourg]; finance 3/2/1 [fr-str-emp, fr-strasbourg]
- Grenoble: it 3/2/1 [fr-gre-emp, fr-grenoble]; cs 3/2/1 [fr-gre-soitec, fr-gre-emp]

## P40 Netherlands (data/atlas/nl.js)

**Method.** Population and GDP are Eurostat metropolitan regions (`met_pjanaggr3`, `met_10r_3gdp`, read through the
Eurostat API on 3 Oct 2026; population 1 Jan 2023, GDP 2021, `area: metro`). Jobs by sector are Eurostat
`nama_10r_3empers` (NUTS 3, 2023) and, for cross-European ranks, `met_10r_3emp` (latest year 2021 or 2022): the
rank of each metropolitan region was calculated from the full table (152 regions with ICT data); German,
British and Swiss regions are not in the table, so a rank is "among the regions in the table". Port tonnage is
`mar_mg_aa_pwhd` (2024). Rent is Numbeo through the Internet Archive's August 2026 snapshots, because Numbeo
answered the live site with HTTP 429 (retry-after 1 Nov 2026). No pay series by city was found (CBS publishes
wages by sector); national entry pay is Eurostat `earn_ses22_28`.

**Spot-checks.** GFCI 40 saved PDF text: Amsterdam 26 (733, down 6), Western Europe Table 8 order London, Zurich,
Geneva, Luxembourg, Lugano, Paris, Copenhagen, Amsterdam. Startup Genome Amsterdam-Delta page: ecosystem value
$83 BN, early-stage funding $2.5 BN, exits $21 BN; Top 40 page: "Amsterdam-Delta … tying" at #23 with Stockholm.
ASML annual report 2025 (strategic report PDF text): "> 44,000 Total employees (FTEs)", "143 Nationalities".
Port of Rotterdam facts page: "approximately 182,000 jobs (directly and indirectly in Rotterdam-Rijnmond)", "Added
value: €23.3 billion, 2.2% of the Dutch GDP", "approximately 1,440 employees".

**Not read.** Rabobank, ING (fast-facts page returned 404), Shell, Philips (no HQ or headcount on the page read),
NXP, Unilever (403), ABN AMRO (employees only, no location), TU/e and RSM (no figures in the text). The Hague
has no Numbeo page in the archive (404), so it has no rent metric.

**Counts.** Claims 14 → 35; hubs 5 → 5.

**Rating changes (old → new).**
- Amsterdam it: gap → strong on nl-ams-emp, nl-ams-rank

**Claims added (21), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| nl-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Amsterdam 26th in the world (down 6 places) and eighth among Western European centres, behind London, Zurich, Geneva, Luxembourg, Lugano, Paris and Copenhagen. | CONFIRMED |
| nl-ams-rank | data | Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp); ranking calculated by Admetia from the full table, 2026-10-03 (https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table): Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Amsterdam has the seventh-most jobs in information and communication (114,000) and in finance and insurance (67,000), and Utrecht the 19th (55,000) and 18th (34,000). | CONFIRMED |
| nl-ams-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL32B (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Greater Amsterdam (Groot-Amsterdam) has 1,144,700 jobs (2023): 91,300 in information and communication, 60,100 in finance and insurance and 297,600 in professional, scientific, technical and administrative services. | CONFIRMED |
| nl-ams-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Amsterdam-Delta page and Top 40 ranking page (https://startupgenome.com/report/the-global-startup-ecosystem-report-2026/global-startup-ecosystem-ranking-2026-top-40) (https://startupgenome.com/ecosystems/amsterdam-delta): Startup Genome’s 2026 report ranks Amsterdam-Delta joint 23rd in the world with Stockholm, with an ecosystem value of $83 billion, $2.5 billion of seed and Series A funding in H2 2023–2025 and $21 billion of exits in 2021–2025. | CONFIRMED |
| nl-ams-adyen | employer-stated | Adyen, About (https://www.adyen.com/about): Adyen says it was founded in 2006 in Amsterdam and has 4,000+ employees of 115+ nationalities in 28 offices (page undated; its processed-volume figure is for 2023). | CONFIRMED |
| nl-ams-uva | employer-stated | University of Amsterdam, Facts and figures (https://www.uva.nl/en/about-the-uva/about-the-university/facts-and-figures/facts-and-figures.html): The University of Amsterdam has over 44,000 students, 6,200 employees, 3,000 PhD researchers and an annual budget of €850 million. | CONFIRMED |
| nl-ports | data | Eurostat, gross weight of goods handled in main ports (mar_mg_aa_pwhd), 2024 (https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table): In 2024 Rotterdam handled 397.3 million tonnes of goods, the most of any port in the EU, followed by Antwerp-Bruges (244.2 million) and Hamburg (97.0 million). | CONFIRMED |
| nl-rtm-jobs | employer-stated | Port of Rotterdam Authority, Facts and figures (https://www.portofrotterdam.com/en/experience-online/facts-and-figures): The Port of Rotterdam Authority puts the port’s employment at about 182,000 jobs, directly and indirectly, in the Rotterdam-Rijnmond area and its added value at €23.3 billion, 2.2% of Dutch GDP; the Authority itself has about 1,440 employees. | CONFIRMED |
| nl-rtm-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL366 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Groot-Rijnmond (the Rotterdam region) has 831,500 jobs (2023): 46,200 in manufacturing, 249,000 in trade, transport, hospitality and information and communication, and 204,600 in finance, real estate and professional and business services. | CONFIRMED |
| nl-asml-ar | employer-stated | ASML, Annual Report 2025 (strategic report); locations from ASML (https://www.asml.com/en/company/about-asml/locations) (https://ourbrand.asml.com/m/8ab959d4926657b/original/asml-2025-annual-report-strategic-report-section.pdf): ASML’s 2025 annual report counts more than 44,000 total employees (FTEs) of 143 nationalities; its global headquarters is ASML Veldhoven, De Run 6501, and it operates in more than 60 locations worldwide. | CONFIRMED |
| nl-ein-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL414 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Eindhoven region (Zuidoost-Noord-Brabant) has 502,100 jobs (2023), 80,400 of them (16%) in manufacturing, 16,300 in information and communication and 106,400 in professional, scientific, technical and administrative services. | CONFIRMED |
| nl-utr-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL350 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Utrecht region has 891,800 jobs (2023): 60,800 in information and communication, 37,000 in finance and insurance and 177,800 in professional, scientific, technical and administrative services. | CONFIRMED |
| nl-utr-ns | employer-stated | NS, Werken bij NS: contact (https://www.werkenbijns.nl/over-ns/contact): NS, the Dutch railway company, gives its head-office address as Laan van Puntenburg 100, Utrecht. | CONFIRMED |
| nl-utr-uu | employer-stated | Utrecht University, Facts and figures (https://www.uu.nl/en/organisation/about-us/facts-and-figures): Utrecht University reports over 38,000 students, over 8,800 staff members, over 650 professors and an income of about €1.3 billion. | CONFIRMED |
| nl-hague-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 NL361 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Hague agglomeration has 514,200 jobs (2023): 191,400 of them (37%) in public administration, defence, education and health, 20,000 in information and communication and 12,300 in finance and insurance. | CONFIRMED |
| nl-hague-intl | employer-stated | The Hague International Centre, Peace and Justice (https://www.thehagueinternationalcentre.nl/relocating/why-the-hague-region/work-in-the-netherlands/work-in-the-hague-region/peace-and-justice): The Hague is home to some 200 international organisations, including the International Court of Justice in the Peace Palace, Europol and the International Criminal Court. | CONFIRMED |
| nl-hague-icc | employer-stated | International Criminal Court, How the Court works (https://www.icc-cpi.int/about/how-the-court-works): The International Criminal Court’s permanent premises are at Oude Waalsdorperweg 10 in The Hague. | CONFIRMED |
| nl-pay | data | Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Netherlands, firms with 10+ employees, sections B–S excluding O (https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table): In 2022 employees under 30 in Dutch firms with 10 or more staff (public administration excluded) earned a mean of €34,109 gross a year, and those under 30 working as professionals €45,349, against €50,942 for all ages. | CONFIRMED |
| nl-grads | data | Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025 (https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table): In 2025 the employment rate of Dutch people aged 20 to 34 with a tertiary degree was 92.7% (91.8% for those who finished within the last five years); unemployment was 3.9% overall and 8.8% for the 15-to-24s, and GDP was €1,170.6 billion. | CONFIRMED |
| nl-rtm-metro | data | Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp), 2021 (https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table): Eurostat counts 998,000 people in work in the Rotterdam metropolitan region in 2021: 72,000 in manufacturing, 29,000 in information and communication and 19,000 in finance and insurance, third in the Netherlands for both of the last two. | CONFIRMED |
| nl-ein-brainport | employer-stated | Brainport Eindhoven (regional development agency), Why work in Brainport (https://brainporteindhoven.com/int/work/why-work-in-brainport): Brainport Eindhoven describes itself as a high-tech region with Eindhoven at its centre, where companies, knowledge institutes and governments develop technology together; it lists Eindhoven University of Technology, Fontys, Avans and Tilburg University as its universities. | CONFIRMED |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Amsterdam | 3,397,323 (2023, metro) | 201.1 EUR (2021, metro) | not read | 2,266 EUR (2026, city) |
| Rotterdam and Delft | 1,868,227 (2023, metro) | 95.2 EUR (2021, metro) | not read | 1,627 EUR (2026, city) |
| Eindhoven (Brainport) | 803,180 (2023, metro) | 46.4 EUR (2021, metro) | not read | 1,506 EUR (2026, city) |
| Utrecht | 1,387,643 (2023, metro) | 83.3 EUR (2021, metro) | not read | 1,678 EUR (2026, city) |
| The Hague | 1,150,797 (2023, metro) | 56 EUR (2021, metro) | not read | not read |

**Standing.**

- Amsterdam: finance 5/3/2 [nl-ams-trading, nl-gfci, nl-ams-rank]; it 5/3/2 [nl-ams-emp, nl-ams-rank, nl-ams-gser]; business 5/3/2 [nl-ams-grads, nl-ams-emp]
- Rotterdam and Delft: logistics 5/5/2 [nl-rtm-port, nl-ports, nl-rtm-jobs]
- Eindhoven (Brainport): software 3/2/1 [nl-asml, nl-asml-ar, nl-ein-emp]; cs 3/2/1 [nl-asml, nl-asml-ar]
- Utrecht: it 4/2/1 [nl-utrecht, nl-utr-emp, nl-ams-rank]; finance 4/2/1 [nl-utrecht, nl-utr-emp, nl-ams-rank]
- The Hague: it 3/2/1 [nl-hague-emp, nl-the-hague]

## P46 Belgium (data/atlas/be.js)

**Method.** Jobs by sector are Eurostat `nama_10r_3empers` (NUTS 3 arrondissements, 2023), read through the Eurostat API on 3 Oct 2026 and
re-read on resuming; cross-European ranks are calculated from `met_10r_3emp` (152 metropolitan regions with the sector, latest year 2022;
German, British and Swiss regions are not in the table; a tie, such as Ghent's 6,000 in finance, has no single rank, so the claim gives the number).
Population (`demo_r_pjangrp3`, 1 Jan 2025) and GDP (`nama_10r_3gdp`, 2023) are NUTS 3 arrondissements, `area: region`. Pay is the SD Worx median
reported by VRT NWS (13 Mar 2026), by region or province, tag anecdotal (one private payroll provider); Statbel's wage series was behind a CAPTCHA, which was not bypassed.
Rent is Numbeo through the Internet Archive; Liège's archived page had no usable price, so Liège has no rent.

**Spot-checks on resuming.** VRT: Brussels 4,200; Antwerp province 3,605; East Flanders 3,595; Flemish Brabant 3,580 (page text). GFCI 40 text: "Brussels 82 673 81 668". Startup Genome Brussels: "$20 BN", regional average "$14.3 BN",
"$800 M", exits "$4 BN". KU Leuven: 66,306 students, 22,799 staff, #46 THE 2026, #59 QS 2027, #76 ARWU 2025. Liège Airport: "1,325,000 tons of cargo in 2025". Port of Antwerp-Bruges press release: "164,000 direct and indirect jobs", "over 1400 companies",
"21 billion euros". BASF: "second largest BASF group site in the world". IBJ: 105,912 and 96,750. imec: "started in 1984", "five buildings".

**Corrections made on resuming.** (1) The Proximus page first cited (`/en/about-us/company`) now returns 404; the same address is in the footer of
`/en/investors`, which is now the source. (2) The first draft ranked Ghent 88th for finance jobs; the table has ties there (the rank is 85 to 91 depending on how ties
are broken), so the claim now gives the 6,000 jobs and says it shares a tie. (3) A draft gap said Ghent had no rent; Numbeo's Gent page gives one, so only Liège lacks it. (4) Added be-gnt-ugent (Ghent University fact sheet, read as a copy hosted by the University of Rome Tor Vergata; the ranking years are not stated in it).

**Not read.** KBC, AB InBev, UCB (403), Volvo Cars Ghent (403), the Ghent University and ULiège own sites (404, or no figures on the page).

**Counts.** Claims 8 → 28; hubs 4 → 5.

**Rating changes (old → new).**
- Brussels finance: gap → strong on be-bru-emp, be-rank
- Brussels it: gap → strong on be-bru-emp, be-rank
- Liège logistics: gap → present on be-lgg-airport
- Leuven cs: new hub → present on be-leu-imec, be-leu-kul

**Claims added (20), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| be-pay | data | Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Belgium, firms with 10+ employees, sections B–S excluding O (https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table): In 2022 employees under 30 in Belgian firms with 10 or more staff (public administration excluded) earned a mean of €38,114 gross a year, and those under 30 working as professionals €52,290, against €53,642 for all ages. | CONFIRMED |
| be-grads | data | Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025 (https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table): In 2025 the employment rate of Belgians aged 20 to 34 with a tertiary degree was 90.2% (88.5% for those who finished within the last five years); unemployment was 6.2% overall and 17.4% for the 15-to-24s, and GDP was €642.0 billion. | CONFIRMED |
| be-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Brussels 82nd in the world (down 1 place); it is not among the top 15 Western European centres, which London leads and Zurich, Geneva and Luxembourg follow. | CONFIRMED |
| be-rank | data | Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp); ranking calculated by Admetia from the full table, 2026-10-03 (https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table): Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Brussels has the ninth-most jobs in finance and insurance (63,000) and the 16th-most in information and communication (68,000); Antwerp is 46th (13,000) and 51st (18,000); Ghent has 6,000 and 12,000 (65th in information and communication; in finance it shares a tie around 90th). | CONFIRMED |
| be-bru-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE100 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Brussels-Capital arrondissement has 725,600 jobs (2023): 266,500 of them (37%) in public administration, defence, education and health, 158,000 in professional, scientific, technical and administrative services, 48,900 in finance and insurance and 33,800 in information and communication. | CONFIRMED |
| be-bru-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Brussels page (https://startupgenome.com/ecosystems/brussels): Startup Genome’s 2026 report puts the value of Brussels’ start-up ecosystem at $20 billion (Europe’s average $14.3 billion), with $800 million of seed and Series A funding in H2 2023–2025 and $4 billion of exits in 2021–2025. | CONFIRMED |
| be-proximus | employer-stated | Proximus, investor page footer: Boulevard du Roi Albert 2, 27, B-1030 Brussels (https://www.proximus.com/en/investors): Proximus gives its address as Boulevard du Roi Albert II 27, Brussels. | CONFIRMED |
| be-ports | data | Eurostat, gross weight of goods handled in main ports (mar_mg_aa_pwhd), 2024 (https://ec.europa.eu/eurostat/databrowser/view/mar_mg_aa_pwhd/default/table): In 2024 Antwerp-Bruges handled 244.2 million tonnes of goods, the second-busiest port in the EU after Rotterdam (397.3 million) and well ahead of Hamburg (97.0 million). | CONFIRMED |
| be-ant-jobs | employer-stated | Port of Antwerp-Bruges, press release (27 Jan 2026) (https://newsroom.portofantwerpbruges.com/en/press-releases/port-of-antwerp-bruges-ends-2025-with-resilience-in-a-turbulent-trading-climate): Port of Antwerp-Bruges describes itself as home to over 1,400 companies and accounting for around 164,000 direct and indirect jobs and 21 billion euros in added value, Belgium’s most important economic engine. | CONFIRMED |
| be-basf | employer-stated | BASF, BASF Antwerpen (https://www.basf.com/be/en/who-we-are/Group-Companies/BASF-Antwerpen): BASF’s Antwerp site, in the northernmost part of the port, is the largest chemical production site in Belgium and the second largest BASF group site in the world. | CONFIRMED |
| be-ant-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE211 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Antwerp arrondissement has 514,700 jobs (2023): 142,300 in professional, scientific, technical and administrative services, 127,600 in trade, transport, hospitality and information and communication, and 46,000 in manufacturing. | CONFIRMED |
| be-gnt-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE234 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Ghent arrondissement has 327,700 jobs (2023): 95,300 in public administration, defence, education and health, 39,000 in manufacturing, 11,700 in information and communication and 5,500 in finance and insurance. | CONFIRMED |
| be-gnt-nsp | practitioner consensus | International Bulk Journal (trade press), 25 Jan 2024, reporting North Sea Port figures (https://www.ibj-online.com/north-sea-port-secures-106-000-jobs/3413): The Dutch-Flemish North Sea Port, which includes the port of Ghent, accounted for 105,912 direct and indirect jobs at the start of 2024, against 96,750 when the merger began on 1 January 2018. | CONFIRMED |
| be-gnt-ugent | employer-stated | Ghent University, International Relations Office, Fact Sheet 2024-2025 (a copy hosted by the University of Rome Tor Vergata; the ranking years are not stated in it) (https://ing.uniroma2.it/wp-content/uploads/2024/12/Ghent-University-Fact-Sheet-2024-2025.pdf): Ghent University’s own fact sheet for 2024-2025 gives about 15,000 staff and 50,000 students (2022-2023), 11 faculties including Economics and Business Administration, and rankings of 84 in the Shanghai ranking (ARWU) and 115 in the Times Higher Education World University Rankings. | PARTLY CONFIRMED (read in a copy of the fact sheet hosted by another university; ranking years not stated) |
| be-lgg-airport | employer-stated | Liège Airport, home page (https://www.liegeairport.com/en): Liège Airport says it handled 1,325,000 tons of cargo in 2025 and more than 1.35 billion e-commerce packages passed through it, flying seven days a week with about 60 flights a night. | CONFIRMED |
| be-lg-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE332 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Liège arrondissement has 252,500 jobs (2023): 91,200 of them (36%) in public administration, defence, education and health, 21,600 in manufacturing, 5,200 in information and communication and 3,800 in finance and insurance. | CONFIRMED |
| be-leu-kul | employer-stated | KU Leuven, Facts and figures (https://www.kuleuven.be/english/about-kuleuven/facts-and-figures): KU Leuven reports 66,306 students (17,738 international), 22,799 staff in total (13,685 at the university and 9,511 at the university hospital) and 345,945 alumni. | CONFIRMED |
| be-leu-rank | employer-stated | KU Leuven, Facts and figures (the university’s own statement of the rankings) (https://www.kuleuven.be/english/about-kuleuven/facts-and-figures): KU Leuven is ranked 46th in the Times Higher Education World University Ranking (2026), 59th in the QS World University Ranking (2027) and 76th in the ARWU Shanghai Ranking (2025). | CONFIRMED |
| be-leu-imec | employer-stated | imec, Connect with us: imec Leuven (Headquarters) (https://www.imec-int.com/en/connect-with-us/imec-belgium): The imec headquarters are in Leuven, where the research centre started in 1984; it is imec’s biggest campus, with five buildings. | CONFIRMED |
| be-leu-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 BE242 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Leuven arrondissement has 206,100 jobs (2023): 75,200 of them (36%) in public administration, defence, education and health, 52,800 in professional, scientific, technical and administrative services, 14,000 in manufacturing and 7,000 in information and communication. | CONFIRMED |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Brussels | 1,271,709 (2025, region) | 103.6 EUR (2023, region) | 4,200 EUR (2026, region, median) | 1,209 EUR (2026, city) |
| Antwerp | 1,101,687 (2025, region) | 66.8 EUR (2023, region) | 3,605 EUR (2026, region, median) | 910 EUR (2026, city) |
| Ghent | 583,606 (2025, region) | 36.9 EUR (2023, region) | 3,595 EUR (2026, region, median) | 1,020 EUR (2026, city) |
| Liège | 637,220 (2025, region) | 25.5 EUR (2023, region) | not read | not read |
| Leuven | 530,971 (2025, region) | 25.7 EUR (2023, region) | 3,580 EUR (2026, region, median) | 969 EUR (2026, city) |

**Standing.**

- Brussels: finance 5/2/1 [be-bru-emp, be-rank, be-gfci]; it 5/2/1 [be-bru-emp, be-rank, be-bru-gser]
- Antwerp: logistics 5/4/2 [be-port, be-ports, be-ant-jobs]
- Ghent: it 3/2/1 [be-ghent, be-gnt-emp]; finance 3/2/1 [be-ghent, be-gnt-emp]
- Liège: logistics 3/2/1 [be-lgg-airport, be-lg-emp]
- Leuven: cs 3/2/1 [be-leu-imec, be-leu-kul, be-leu-rank]

## P45 Luxembourg (data/atlas/lu.js)

**Method.** Population (`demo_r_pjangrp3`, 1 Jan 2025) and GDP (`nama_10r_3gdp`, 2023) are the Eurostat NUTS 3 region LU000, which is the whole country, `area: region`.
Jobs by sector are `nama_10r_3empers` (LU000, 2023, read through the Eurostat API on 3 Oct 2026); the rank is calculated from `met_10r_3emp`
(152 metropolitan regions with the sector, latest year 2022; German, British and Swiss regions are not in the table): Luxembourg (LU001MC) is 11th for finance and insurance and 45th for information and communication.
Pay is Eurostat's Structure of Earnings Survey 2022 (`earn_ses22_28`): all-age mean €74,542 for firms with 10+ employees excluding public administration, ÷ 12 = €6,212; it is national, not for the city alone.
Rent is Numbeo through the Internet Archive (snapshot of 8 Aug 2026 of the 25 July 2026 update; 794 entries, 116 contributors).

**Spot-checks.** GFCI 40 PDF text: "Luxembourg 17 742 16 733 ▼1 ▲9"; Table 8 order London, Zurich, Geneva, Luxembourg; Table 5 investment management rank 2 Luxembourg, banking rank 12 Luxembourg.
Startup Genome Luxembourg page: "$4 BN", regional average "$14.3 BN", "$271 M", exits "$1 BN". EIB jobs page: "more than 4 000 employees in Luxembourg and in offices around the world".
CSSF careers page: "over 950 employees". The 2022 pay figures were read again from the Eurostat extract on resuming (LU: 48,369; 60,726; 74,542).

**Not read.** The University of Luxembourg's facts page (the site answered with a bot challenge), STATEC's cross-border figures (primary page not found; secondary figures are in the brief's claims to verify), ALFI's own statistics page (the library's §3 is the source of lu-alfi), banks and fund administrators, ArcelorMittal (403), SES and State Street (no Luxembourg headcount on the pages read).

**Counts.** Claims 5 → 13; hubs 1 → 1.

**Rating changes (old → new).**
- Luxembourg City economics: gap → present on lu-eib

**Claims added (8), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| lu-pay | data | Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Luxembourg, firms with 10+ employees, sections B–S excluding O (https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table): In 2022 employees under 30 in Luxembourg firms with 10 or more staff (public administration excluded) earned a mean of €48,369 gross a year, and those under 30 working as professionals €60,726, against €74,542 for all ages. | CONFIRMED |
| lu-grads | data | Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a; 2025 youth figure not published in the extract read) and GDP (nama_10_gdp) (https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table): In 2025 the employment rate of Luxembourg residents aged 20 to 34 with a tertiary degree was 90.5% (88.2% for those who finished within the last five years); unemployment was 6.5% overall, 21.6% for the 15-to-24s in 2024, and GDP was €89.5 billion. | CONFIRMED |
| lu-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1, 5 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Luxembourg 17th in the world (down 1 place) and fourth in Western Europe after London, Zurich and Geneva; in the investment-management sector table it is second in the world, behind Hong Kong, and it is 12th for banking. | CONFIRMED |
| lu-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 LU000 (the whole country) (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Luxembourg has 510,990 jobs (2023): 115,420 of them in public administration, defence, education and health, 90,490 in professional, scientific, technical and administrative services, 54,220 in finance and insurance and 22,730 in information and communication. | CONFIRMED |
| lu-rank | data | Eurostat, employment by NACE Rev. 2 activity by metropolitan region (met_10r_3emp); ranking calculated by Admetia from the full table, 2026-10-03 (https://ec.europa.eu/eurostat/databrowser/view/met_10r_3emp/default/table): Of the 152 metropolitan regions for which Eurostat publishes jobs by sector (latest year, 2021 or 2022; German, British and Swiss regions are not in the table), Luxembourg has the 11th-most jobs in finance and insurance (53,040, just behind Brussels with 63,000) and the 45th-most in information and communication (21,830). | CONFIRMED |
| lu-eib | employer-stated | European Investment Bank, Jobs and careers (https://www.eib.org/en/about/jobs/index.htm): The European Investment Bank says it has more than 4,000 employees in Luxembourg and in offices around the world. | CONFIRMED |
| lu-cssf | employer-stated | CSSF, About the CSSF (careers site) (https://careers.cssf.lu/en/about-the-cssf/): The CSSF, Luxembourg’s financial-sector supervisor, says it has over 950 employees working in many specialised departments. | CONFIRMED |
| lu-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Luxembourg page (https://startupgenome.com/ecosystems/luxembourg): Startup Genome’s 2026 report puts the value of Luxembourg’s start-up ecosystem at $4 billion (Europe’s average $14.3 billion), with $271 million of seed and Series A funding in H2 2023–2025 and $1 billion of exits in 2021–2025. | CONFIRMED |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Luxembourg City | 681,973 (2025, region) | 82.1 EUR (2023, region) | 6,212 EUR (2022, region, mean) | 2,000 EUR (2026, city) |

**Standing.**

- Luxembourg City: finance 5/4/3 [lu-alfi, lu-gfci, lu-rank]

## P42 Switzerland (data/atlas/ch.js)

**Method.** Population and GDP for Zurich, Basel, Bern, St. Gallen and Lucerne are Eurostat metropolitan regions (`met_pjanaggr3`, 1 Jan 2023; `met_10r_3gdp`, 2021, million euro ÷ 1,000), `area: metro`;
the Lake Geneva hub is Geneva (CH002M) plus Lausanne (CH005M). Swiss regions are not in Eurostat's jobs-by-sector tables (`met_10r_3emp`, `nama_10r_3empers`), so no job counts by sector were calculated.
Pay is the Federal Statistical Office's Swiss Earnings Structure Survey 2024 median gross monthly wage by large region (`area: region`): the BFS release (25 Nov 2025) states Zürich 7,502 and Ticino 5,708;
the other regions are in a Bilanz report of the same survey (north-western 7,156, central 7,092, Lake Geneva 6,998, Espace Mittelland 6,964, eastern 6,623), which is secondary and is flagged in each metric's `by`.
Rent is Numbeo through the Internet Archive (Zurich, Basel, Bern, St. Gallen, Lucerne, Zug, Lugano; not given for the two-city Lake Geneva hub).
New hubs, as the record's gaps named them: Zug and Lugano. Their population is not metropolitan (canton of Zug, press release of 3 Apr 2025; city of Lugano, statistics of 31 Dec 2024), and they have no GDP metric.

**Spot-checks.** GFCI 40 PDF text: "Zurich 10 749 11 738", "Geneva 12 747 18 731", "Lugano 21 738 25 724"; Table 8 order London, Zurich, Geneva, Luxembourg, Lugano; Table 5 sector ranks (Zurich banking 6, investment management 6, professional services 4; Lugano banking 8; Geneva banking 11).
Startup Genome Zurich page: "$44 BN", "$2.4 BN", exits "$7 BN"; Greater Lausanne page: "$18.7 BN", "35,000 students", EPFL "among the top 15", IMD "#2 MBA in Europe". BFS release page: "7024 Franken", "7502", "5708", "10 533", "9288".
Bilanz page: the five other regional medians. Canton of Zug press release: "133‘723 Einwohnerinnen und Einwohner". Zug in Zahlen 2025 PDF: STATENT 2023 table (131,705 jobs, 20,321 businesses), top-20 employers, GDP table (Zug 25,176; 192,958 per head; Switzerland 90,131; Zürich 104,620).
Lugano statistics PDF: "68’507 abitanti e 17’579 attività economiche", "Finanza 3’452 3’459". Roche: "founded in Basel, Switzerland in 1896". The 2022 Eurostat pay and 2025 graduate figures were read again from the API.

**Corrections.** The record's gap said Zug and Lugano were not mapped; they are now hubs, and the gap was reduced to the St. Gallen programmes. No claim was removed.

**Not read.** UBS and Swiss Re (403), Zurich Insurance (JavaScript page), ETH Zurich and EPFL facts pages (404 or no figures), the Universities of Basel, St. Gallen and Geneva (404), Novartis (the page gives 77k employees but no Basel address), the federal headcount (figures load by script), SNB, Swisscom (no head-office address on the page).

**Counts.** Claims 17 → 31; hubs 6 → 8.

**Rating changes (old → new).**
- Zug finance: new hub → present on ch-zug-top, ch-zug-emp
- Lugano finance: new hub → strong on ch-lug-reg, ch-gfci

**Claims added (14), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| ch-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1, 5 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Zurich 10th in the world (up 1 place) and second in Western Europe after London, Geneva 12th (up 6) and third, and Lugano 21st (up 4) and fifth; in the sector tables Zurich is 6th for banking and for investment management and 4th for professional services, Lugano 8th for banking and Geneva 11th. | CONFIRMED |
| ch-zh-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Zurich page (https://startupgenome.com/ecosystems/zurich): Startup Genome’s 2026 report puts the value of Zurich’s start-up ecosystem at $44 billion (Europe’s average $14.3 billion), with $2.4 billion of seed and Series A funding in H2 2023–2025 and $7 billion of exits in 2021–2025. | CONFIRMED |
| ch-lau-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Greater Lausanne Region page (the ranking statements are Startup Genome’s own) (https://startupgenome.com/ecosystems/greater-lausanne-region): Startup Genome’s 2026 report puts the value of the Greater Lausanne start-up ecosystem at $18.7 billion (Europe’s average $14.3 billion) and says its institutions, including EPFL, the University of Lausanne and IMD, matriculate 35,000 students; it describes EPFL as among the top 15 engineering and technology institutions worldwide and IMD as #2 among MBAs in Europe. | CONFIRMED (the ranking statements are Startup Genome’s own) |
| ch-bfs-reg | data | Federal Statistical Office, Swiss Earnings Structure Survey 2024, first results (25 Nov 2025) (https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html): In 2024 the median gross monthly wage of a full-time post in Switzerland was CHF 7,024: CHF 7,502 in the Zurich region and CHF 5,708 in Ticino. | CONFIRMED |
| ch-bfs-reg2 | data | Federal Statistical Office, Swiss Earnings Structure Survey 2024, as reported by Bilanz (25 Nov 2025); the Office’s own release names only Zürich and Ticino (https://www.bilanz.ch/unternehmen/der-neue-medianlohn-betraegt-7024-franken/pe1rht0): In 2024 the median gross monthly wage of a full-time post was CHF 7,156 in north-western Switzerland, CHF 7,092 in central Switzerland, CHF 6,998 in the Lake Geneva region, CHF 6,964 in Espace Mittelland and CHF 6,623 in eastern Switzerland, against CHF 7,024 nationally. | PARTLY CONFIRMED (read in the Bilanz report of the BFS survey; the BFS release names only Zürich and Ticino) |
| ch-bfs-uni | data | Federal Statistical Office, Swiss Earnings Structure Survey 2024, first results (25 Nov 2025) (https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.assetdetail.36195847.html): In 2024 employees with a university degree in a full-time post earned a gross monthly wage of CHF 10,533 in Switzerland, those with a university of applied sciences degree CHF 9,288 and those with a federal vocational certificate CHF 6,390. | CONFIRMED |
| ch-metro | data | Eurostat, GDP at current market prices (met_10r_3gdp) and population (met_pjanaggr3) by metropolitan region; ranking by Admetia, 2026-10-03 (https://ec.europa.eu/eurostat/databrowser/view/met_10r_3gdp/default/table): Of Switzerland’s seven metropolitan regions in Eurostat’s tables, Zurich has the largest GDP (€140.8 billion in 2021) and population (1,579,967 in 2023), followed on GDP by Bern (€78.6 billion), Basel (€64.9 billion), Lausanne (€58.3 billion), Geneva (€52.2 billion), St. Gallen (€42.2 billion) and Lucerne (€30.7 billion). | CONFIRMED |
| ch-pay | data | Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Switzerland, firms with 10+ employees, sections B–S excluding O (https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table): In 2022 employees under 30 in Swiss firms with 10 or more staff (public administration excluded) earned a mean of €70,488 gross a year (converted to euro by Eurostat), and those under 30 working as professionals €83,890, against €95,698 for all ages. | CONFIRMED |
| ch-grads | data | Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025 (https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table): In 2025 the employment rate of Swiss residents aged 20 to 34 with a tertiary degree was 90.2% (90.1% for those who finished within the last five years); unemployment was 4.9% overall and 8.8% for the 15-to-24s, and GDP was €925.9 billion. | CONFIRMED |
| ch-roche | employer-stated | Roche, About (https://www.roche.com/about): Roche says it was founded in Basel in 1896 and is today a leading provider of medicines and diagnostics in over 100 countries. | CONFIRMED |
| ch-zug-emp | data | Canton of Zug, Statistikfachstelle, Zug in Zahlen 2025 (Federal Statistical Office STATENT 2023) (https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/themen/zug-in-zahlen/downloads/zug_in_zahlen_2025.pdf): The canton of Zug had 131,705 jobs in 20,321 businesses in 2023, 47,525 of them in the city of Zug: 14,693 in wholesale trade, 7,781 in head-office management and consultancy, 7,093 in IT services, 4,946 in financial services and 4,710 in activities auxiliary to finance and insurance. | CONFIRMED |
| ch-zug-top | data | Canton of Zug, Statistikfachstelle, Zug in Zahlen 2025: the 20 largest employers in the canton (2024, public administrations excluded) (https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/themen/zug-in-zahlen/downloads/zug_in_zahlen_2025.pdf): The canton of Zug’s largest private employers in 2024 included Roche Diagnostics International (2,833 employees in the canton), Siemens (2,121), AMAG (1,447), Glencore (1,175), Partners Group (569) and the Zuger Kantonalbank (560). | CONFIRMED |
| ch-zug-gdp | data | Canton of Zug, Zug in Zahlen 2025, quoting the Federal Statistical Office national accounts (2022, provisional, selected cantons) (https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/themen/zug-in-zahlen/downloads/zug_in_zahlen_2025.pdf): The Federal Statistical Office’s provisional figures for 2022 give the canton of Zug a GDP of CHF 25,176 million, or CHF 192,958 per inhabitant against CHF 90,131 for Switzerland and CHF 104,620 for the canton of Zürich. | CONFIRMED |
| ch-lug-reg | data | City of Lugano, Statistics Office, press conference of 16 Jan 2025: statistics at 31 December 2024 (registered businesses, not jobs) (https://lugano.ch/dam/jcr:ecdeeae1-c265-4126-a549-4027b26bd1b4/20250116-cs-statistiche-lugano-2024-presentazione.pdf): At 31 December 2024 the City of Lugano counted 68,507 inhabitants and 17,579 registered businesses, of which 3,459 in finance, 2,321 in insurance, administrative and legal services, 1,627 in wholesale trade and 873 in information technology and telecommunications. | CONFIRMED |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Zurich | 1,579,967 (2023, metro) | 140.8 EUR (2021, metro) | 7,502 CHF (2024, region, median) | 2,467 CHF (2026, city) |
| Basel | 724,230 (2023, metro) | 64.9 EUR (2021, metro) | 7,156 CHF (2024, region, median) | 1,643 CHF (2026, city) |
| Geneva and Lausanne | 1,344,545 (2023, metro) | 110.5 EUR (2021, metro) | 6,998 CHF (2024, region, median) | not read |
| Bern | 1,051,437 (2023, metro) | 78.6 EUR (2021, metro) | 6,964 CHF (2024, region, median) | 1,551 CHF (2026, city) |
| St. Gallen | 581,726 (2023, metro) | 42.2 EUR (2021, metro) | 6,623 CHF (2024, region, median) | 1,463 CHF (2026, city) |
| Lucerne | 469,271 (2023, metro) | 30.7 EUR (2021, metro) | 7,092 CHF (2024, region, median) | 1,748 CHF (2026, city) |
| Zug | 133,723 (2024, region) | not read | 7,092 CHF (2024, region, median) | 3,180 CHF (2026, city) |
| Lugano | 68,507 (2024, city) | not read | 5,708 CHF (2024, region, median) | 1,409 CHF (2026, city) |

**Standing.**

- Zurich: finance 5/4/3 [ch-zh-fin, ch-gfci]; software 5/3/2 [ch-google, ch-zh-gser]
- Basel: logistics 4/2/1 [ch-bs]
- Geneva and Lausanne: finance 4/4/3 [ch-gfci, ch-trading]
- Bern: business 3/2/1 [ch-metro, ch-bern]
- St. Gallen: business 2/1/1 [ch-metro, ch-st-gallen]
- Lucerne: business 2/1/1 [ch-metro, ch-lucerne]
- Zug: finance 3/2/1 [ch-zug-top, ch-zug-emp]
- Lugano: finance 4/4/2 [ch-gfci, ch-lug-reg]

## P43 Austria (data/atlas/at.js)

**Method.** Population (`demo_r_pjangrp3`, 1 Jan 2025) and GDP (`nama_10r_3gdp`, 2023) are Eurostat NUTS 3 regions (Wien AT130, Linz-Wels AT312, Graz AT221, Salzburg und Umgebung AT323), `area: region`.
Jobs by sector are `nama_10r_3empers` (NUTS 3, 2023, Eurostat API on 3 Oct 2026). The metropolitan table (`met_10r_3emp`) has no finance (K) or information-and-communication (J) values for Austria, so no cross-European rank was calculated and Vienna finance is rated only on a named bank.
Pay is Statistik Austria's payroll-tax file "Brutto- und Nettojahreseinkommen der unselbständig Erwerbstätigen nach Bundesländern 2024" (created 12 Dec 2025), median gross annual income by state ÷ 12 (Vienna 36,022; Upper Austria 40,845; Styria 39,557; Salzburg 37,351), `area: region`, which includes part-time and part-year work.
Rent is Numbeo through the Internet Archive.

**Spot-checks.** The ODS file's rows were read in full (medians and the footnote "1) Ohne Lehrlinge. 2) Bruttojahresbezüge gemäß § 25 EStG"). GFCI 40 text: "Vienna 81 674 77 672 ▼4 ▲2"; Zurich 10, Paris 23, Frankfurt 29, Munich 58, Milan 62; Vienna is absent from Table 8.
Startup Genome Vienna: "$13 BN", "$516 M", exits "$2 BN". voestalpine page: "headquartered in Linz", "48800 employees worldwide", "15.1 billion revenue". AVL page: "headquartered in Graz", "With 12,000 employees, more than 90 locations", "1.83 billion euros". RBI page: "With our headquarters in Vienna". Porsche Holding: "Our roots are in Salzburg", "29 countries", "more than 36,900 employees worldwide", "highest revenue in Austria".
The 2022 pay and 2025 graduate figures were read again from the Eurostat API.

**Corrections.** Two figures in the library's file differ from the Statistik Austria page: its headline median for all employees is 38,043 (2024), the state table gives 39,121 for Austria; the table is used and both are noted in the brief. No claim was removed.

**Not read.** Erste Group (the pages read did not state employees or a head-office address; a search snippet said about 55,000 employees), OMV (404), UNIQA and Vienna Insurance Group (404 or no page), WU, TU Wien, JKU and TU Graz facts pages (404), Magna (404), the UN Office at Vienna (no figures on the page), Statistik Austria's full-time series by state.

**Counts.** Claims 10 → 23; hubs 4 → 4.

**Rating changes (old → new).**
- Vienna finance: gap → present on at-rbi
- Graz software: gap → present on at-avl
- Salzburg business: gap → present on at-porsche

**Claims added (13), changed (0), dropped (0).**

| Claim | Tag | Source read, and what it says | Status |
|---|---|---|---|
| at-pay | data | Eurostat, Structure of earnings survey 2022: mean annual earnings by age and occupation (earn_ses22_28), Austria, firms with 10+ employees, sections B–S excluding O (https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table): In 2022 employees under 30 in Austrian firms with 10 or more staff (public administration excluded) earned a mean of €37,371 gross a year, and those under 30 working as professionals €47,987, against €52,526 for all ages. | CONFIRMED |
| at-wage | data | Statistik Austria, gross and net annual income of employees by federal state 2024 (from payroll-tax data, 12 Dec 2025) (https://www.statistik.at/fileadmin/pages/333/11_brutto-_und_nettojahreseinkommen_der_unselbstaendig_bundeslaender_2024_019352.ods): In 2024 the median gross annual income of employees (apprentices excluded) was €39,121 in Austria, €36,022 in Vienna, €40,845 in Upper Austria, €39,557 in Styria and €37,351 in Salzburg; the figures cover all employees, part-time and part-year work included, not only full-time full-year posts. | CONFIRMED |
| at-grads | data | Eurostat, employment rate of 20-34-year-olds by educational attainment and years since leaving education (edat_lfse_24), unemployment (une_rt_a) and GDP (nama_10_gdp), 2025 (https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table): In 2025 the employment rate of Austrians aged 20 to 34 with a tertiary degree was 89.2% (88.8% for those who finished within the last five years); unemployment was 5.7% overall and 11.5% for the 15-to-24s, and GDP was €518.2 billion. | CONFIRMED |
| at-gfci | practitioner consensus | Z/Yen and the China Development Institute, GFCI 40, 16 Sep 2026, Tables 1 and 8 (https://www.longfinance.net/media/documents/GFCI_40_Report_2026.09.16_v1.2.pdf): The Global Financial Centres Index 40 (September 2026) ranks Vienna 81st in the world (down 4 places), against Zurich 10th, Paris 23rd, Frankfurt 29th, Munich 58th and Milan 62nd; it is not among the top 15 Western European centres. | CONFIRMED |
| at-vie-gser | practitioner consensus | Startup Genome, Global Startup Ecosystem Report 2026, Vienna page (https://startupgenome.com/ecosystems/vienna): Startup Genome’s 2026 report puts the value of Vienna’s start-up ecosystem at $13 billion (Europe’s average $14.3 billion), with $516 million of seed and Series A funding in H2 2023–2025 and $2 billion of exits in 2021–2025. | CONFIRMED |
| at-rbi | employer-stated | Raiffeisen Bank International, home page (https://www.rbinternational.com/en/raiffeisen.html): Raiffeisen Bank International says its headquarters are in Vienna, at the gateway to Central and Eastern Europe. | CONFIRMED |
| at-vie-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT130 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): Vienna (NUTS 3 region AT130) has 1,127,400 jobs (2023): 368,100 in public administration, defence, education, health and other services, 342,900 in trade, transport, hospitality and information and communication, 286,100 in finance, real estate, professional and administrative services and 59,200 in manufacturing. | CONFIRMED |
| at-linz-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT312; ranking among Austrian NUTS 3 regions by Admetia (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Linz-Wels region (NUTS 3 AT312) has 388,100 jobs (2023), second in Austria after Vienna: 75,700 of them (20%) in manufacturing, 106,700 in trade, transport, hospitality and information and communication and 69,800 in finance, real estate, professional and administrative services. | CONFIRMED |
| at-voest | employer-stated | voestalpine, Group overview (https://www.voestalpine.com/group/en/group/overview/): voestalpine describes itself as a steel and technology group headquartered in Linz, with 48,800 employees worldwide in its 2025/26 business year and revenue of €15.1 billion. | CONFIRMED |
| at-graz-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT221; ranking among Austrian NUTS 3 regions by Admetia (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Graz region (NUTS 3 AT221) has 295,900 jobs (2023), third in Austria after Vienna and Linz-Wels: 98,300 in public administration, defence, education, health and other services, 74,100 in trade, transport, hospitality and information and communication and 45,200 in manufacturing. | CONFIRMED |
| at-avl | employer-stated | AVL List GmbH, About AVL (https://www.avl.com/en/about-avl): AVL, headquartered in Graz, says it is a mobility-technology company with 12,000 employees at more than 90 locations, focused on electrification, software, artificial intelligence and automation, and revenue of €1.83 billion in 2025. | CONFIRMED |
| at-sbg-emp | data | Eurostat, employment (thousand persons) by NUTS 3 region and activity (nama_10r_3empers), 2023, NUTS 3 AT323 (https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3empers/default/table): The Salzburg region (NUTS 3 AT323, Salzburg and surroundings) has 226,400 jobs (2023): 74,800 in trade, transport, hospitality and information and communication, 62,300 in public administration, defence, education, health and other services, 42,700 in finance, real estate, professional and administrative services and 27,000 in manufacturing. | CONFIRMED |
| at-porsche | employer-stated | Porsche Holding Salzburg, press release on the 2025 results, and Company profile (https://www.porsche-holding.com/en/news/sustainable-growth-spurt-porsche-holding-salzburg-achieves-record-figures-for-revenue-and-deliveries-in-2025): Porsche Holding Salzburg says it is Europe’s largest automotive distributor, with its roots in Salzburg, operations in 29 countries and more than 36,900 employees worldwide, and that in 2025 it regained the position of the company with the highest revenue in Austria. | CONFIRMED |

**Metrics.**

| Hub | pop | gdp | wage | rent |
|---|---|---|---|---|
| Vienna | 2,028,289 (2025, region) | 120 EUR (2023, region) | 3,002 EUR (2024, region, median) | 1,168 EUR (2026, city) |
| Linz | 617,181 (2025, region) | 40.7 EUR (2023, region) | 3,404 EUR (2024, region, median) | 729 EUR (2026, city) |
| Graz | 469,968 (2025, region) | 27.7 EUR (2023, region) | 3,296 EUR (2024, region, median) | 701 EUR (2026, city) |
| Salzburg | 378,982 (2025, region) | 25.5 EUR (2023, region) | 3,113 EUR (2024, region, median) | 1,275 EUR (2026, city) |

**Standing.**

- Vienna: business 5/3/2 [at-hq, at-vie-emp]; finance 5/2/1 [at-gfci, at-rbi, at-vie-emp]
- Linz: business 3/2/1 [at-linz-emp, at-voest]
- Graz: software 3/2/1 [at-avl, at-graz-emp]
- Salzburg: business 2/1/1 [at-sbg-emp, at-porsche]


---
title: "Verification round 4a: the Atlas pilots — Germany, United Arab Emirates, Singapore, Estonia"
last_researched: 2026-10-02
scope: Log of every claim in the Atlas records data/atlas/de.js, ae.js, sg.js and ee.js — what the source says, how it was read and its status. One P number per country (P33 onward, continuing verification/claims-to-verify.md §4). Information only; not legal, tax or immigration advice.
confidence: high for the immigration and registration rules (statute or government pages read in full on the day); medium for hub ratings, which are judgements from the claims listed under each hub.
review_by: 2027-01-31
---

# Verification round 4a (2 October 2026)

**Not legal, tax or immigration advice.** Each Atlas claim was read on the page it cites, on the
date it carries. Claims marked *library* were already verified in the research library and are
cited from it with the library's own read date; their primary source is named.

Status vocabulary, as in round 3: **CONFIRMED** (primary source read and matches),
**PARTLY CONFIRMED** (core holds; a detail is thin or single-source), **LIBRARY** (verified
earlier in the library, not re-read), **STILL UNVERIFIED** (could not be read; kept out of the
record or listed under its gaps).

Method: WebFetch and WebSearch for discovery and reading; `curl -A 'Mozilla/5.0'` where the fetch
tool was refused (company legal notices); `pypdf` for PDFs. Several company pages refused automated
access (Allianz, Siemens, Munich Re, Hapag-Lloyd, Delivery Hero, Mercedes-Benz, Deutsche Telekom,
DHL); where an official city or state page lists the same employers, that page is cited instead.

## P33 Germany (data/atlas/de.js)

**Rating notes.** Frankfurt banking is *dominant* on Helaba's count from Federal Employment Agency
data (73,900 bank employees in Q1 2025, almost 12% of the national 632,200). Munich business is
*dominant* because the city's economic-development page lists eight DAX headquarters, "more than
any other German city". Berlin software is *dominant* on the Senate's figure that Berlin holds 43%
of the value of Germany's start-up ecosystem. Hamburg logistics is *dominant* as Germany's largest
seaport. No German hub is rated for AI, data science or analytics except Berlin AI (the Senate's
9,000 AI experts): no source read measures those families by city.

| Claim | Source read, and what it says | Status |
|---|---|---|
| de-reg | BMG §17(1): "Wer eine Wohnung bezieht, hat sich innerhalb von zwei Wochen nach dem Einzug bei der Meldebehörde anzumelden." | CONFIRMED |
| de-taxid | BZSt IdNr FAQ: the IdNr is assigned "sobald die Meldebehörde dem BZSt die benötigten Daten übermittelt hat"; after three months without one, send ID and Meldebestätigung; surname must be on the letterbox | CONFIRMED |
| de-bank | ZKG §31(1): right to a basic account for "jeder Verbraucher mit rechtmäßigem Aufenthalt in der Europäischen Union einschließlich Personen ohne festen Wohnsitz"; ten business days | CONFIRMED |
| de-health | Techniker Krankenkasse student contributions "ab 01.01.2026": €141.16 (under 23, no children), €146.29 (from 23) | CONFIRMED (one fund; others differ slightly, as the claim says) |
| de-41 | AufenthV §41: nationals of Australia, Israel, Japan, Canada, Korea, New Zealand, the UK and the US may enter visa-free and obtain the residence title in Germany; apply "innerhalb von 90 Tagen nach der Einreise" | CONFIRMED |
| de-visa, de-funds | Auswärtiges Amt (Italy mission), blocked-account page dated 1 Jul 2025: "€ 992,- /Monat" for students | CONFIRMED |
| de-16b-len, de-16b-work | AufenthG §16b: permit "in der Regel zwei Jahre … Mindestdauer von einem Jahr"; work up to 140 working days; "Studentische Nebentätigkeiten werden nicht angerechnet" | CONFIRMED |
| de-20 | AufenthG §20(2): job-search permit "für einen Zeitraum von bis zu 18 Monaten"; any work allowed per §4a(1) (library) | CONFIRMED |
| de-chance, de-settle, de-eu-free | places/visas-and-work-rights.md §3 (AufenthG §20a, §18c; BAMF) | LIBRARY |
| de-bluecard | Service-Portal Berlin: €4,225.00 a month = €50,700 a year; €3,827.85 = €45,934.20 for shortage occupations and, "unabhängig vom Beruf", for degrees obtained at most three years before applying | CONFIRMED (the German original read, since an automatic summary reversed the graduate rule) |
| de-lang | Indeed Hiring Lab, 10 Oct 2024, via places/countries-and-cities.md §2 | LIBRARY |
| de-cal, de-cal-bcg | MiLoG §22 and BCG Germany/Austria, via getting-in/recruiting-calendar.md | LIBRARY |
| de-ba | BA Fachkräfteengpassanalyse 2025: 157 shortage occupations (163 in 2024, 183 in 2023); "keine Engpässe mehr in … der Softwareentwicklung" | CONFIRMED (page undated; refers to "the past year") |
| de-tax | BMF Monatsbericht Feb 2026: Grundfreibetrag raised "um 252 Euro auf nunmehr 12.348 Euro" from 2026 | CONFIRMED |
| de-net | money/salaries-and-roi.md §5, author calculation (Munich ≈62% kept at €60k) | LIBRARY |
| de-fra-banks | Helaba Finanzplatz-Fokus, 30 Oct 2025 (PDF): "im Anfangsquartal 2025 rund 73.900 Banker … sozialversicherungspflichtig beschäftigt", on Federal Employment Agency data; "bundesweit knapp 632.200"; Frankfurt "beinahe 12 %"; forecast "etwa 75.500" by end 2026 | CONFIRMED |
| de-fra-sup | IHK Frankfurt, institutions at the financial centre: ECB, Bundesbank, BaFin, EIOPA, KfW listed | CONFIRMED |
| de-fra-amla | amla.europa.eu: "AMLA's seat is in Frankfurt am Main"; operations from summer 2025; about 430 staff by end 2027 | CONFIRMED |
| de-fra-db | db.com, Who we are: "headquartered in Frankfurt am Main"; 89,879 employees (31 Dec 2025) | CONFIRMED |
| de-mu-dax | munich-business.eu (City of Munich), "As of: April 2026": eight DAX companies in Munich and region, named; Düsseldorf 4; Essen, Frankfurt, Stuttgart 3 | CONFIRMED |
| de-mu-ict | City of Munich press release, 4 Jul 2025: ICT employment "seit 2014 nahezu verdoppelt"; Munich "einer der führenden Standorte in Deutschland und Europa" | CONFIRMED (the 10.9% employment share seen only in a search summary; left out) |
| de-mu-google | Google, 11 Nov 2025: Arnulfpost, "30,000 square meters of office space for up to 2,000 Googlers"; "a key hub for development, research, and product innovation" | CONFIRMED |
| de-ber-startups, de-ber-ai | Berlin Senate press release, 19 Feb 2026: 43% of the ecosystem's value (€169 bn); over 1,600 VC-funded companies; over 9,000 AI experts; top three in Europe for frontier AI research | CONFIRMED (the report behind it is a Senate-commissioned ecosystem report, not official statistics) |
| de-ber-zalando | Zalando legal notice: Valeska-Gert-Straße 5, 10243 Berlin | CONFIRMED |
| de-ham-port | Port of Hamburg Marketing, 19 Feb 2026: 8.3 million TEU, 114.6 million tonnes, "Germany's largest seaport" | CONFIRMED |
| de-ham-air | Hamburg Ministry for Economic Affairs, 10 Jun 2025: 48,700 aviation jobs; Airbus about 18,000 (largest German site); Lufthansa Technik nearly 10,000 | CONFIRMED |
| de-ham-otto | otto.de legal notice: 22179 Hamburg | CONFIRMED |
| de-stu-cluster | Wirtschaftsförderung Region Stuttgart: the seven named firms headquartered in the region; "the most important spatial focus of the automotive industry in Germany"; 118,000 directly employed | CONFIRMED |
| de-stu-bosch, de-rn-sap, de-dus-henkel, de-wob-vw, de-nue-brands, de-nue-adidas | Legal notices / company pages: Gerlingen-Schillerhöhe; 69190 Walldorf; Düsseldorf; 38436 Wolfsburg; 91074 Herzogenaurach (PUMA imprint; adidas Headquarters page) | CONFIRMED |
| de-dd-chips | Wirtschaftsförderung Sachsen: one in three European chips "Made in Saxony"; about 3,650 companies and 82,500 employees (49.5% software); Bosch, Infineon, GlobalFoundries, TSMC from 2027 | CONFIRMED (Saxony-wide figure applied to the Dresden hub; the ESMC name is the joint venture's) |

**Still unverified for Germany:** AI and data hiring by city; entry pay by hub; Rheinmetall's seat
(read only on an error page, so not used); the Cologne–Bonn employers (Telekom and DHL pages refused).

## P34 United Arab Emirates (data/atlas/ae.js)

**Rating notes.** Dubai finance and Abu Dhabi finance are both *strong*, not *dominant*: DIFC calls
itself "the region's most significant financial ecosystem" and ADGM "the MENA region's largest IFC"
by licences, so neither official source makes one the UAE's clear centre. Dubai software and IT are
*strong* on two claims (TECOM's Dubai Internet City figures, employer-stated, and DIFC's 1,677 AI,
fintech and innovation entities, official). Abu Dhabi AI is only *present* (Hub71's AI programme);
MBZUAI's site is script-rendered and could not be read.

| Claim | Source read, and what it says | Status |
|---|---|---|
| ae-eu-entry | EU–UAE agreement, CELEX 22015A0521(01), read via the Publications Office Cellar: Art. 1 "visa-free travel … for a maximum period of 90 days in any 180-day period"; preamble: persons "carrying out a paid activity" not covered; Art. 2 excludes the UK and Ireland from "Member State" | CONFIRMED |
| ae-uk-entry | GOV.UK content API, FCDO UAE entry requirements (updated 24 Jul 2026): visa "issued free of charge when you arrive … valid for up to 90 days over a 180-day period" | CONFIRMED |
| ae-study | u.ae (28 Sep 2026): sponsor is "the accredited university/college" (or a resident parent) | CONFIRMED |
| ae-parttime | u.ae work permits (24 Sep 2026): part-time work permit; student training and employment permit "valid for three months" | CONFIRMED (mohre.gov.ae refused the connection, as in round 3g) |
| ae-jobseeker | u.ae (28 Sep 2026): visit visa "without requiring a host/sponsor", 60/90/120 days; "best 500 universities … graduated within the last 2 years"; bachelor's; financial guarantee | CONFIRMED |
| ae-golden | ICP Golden Residency guide: top 100 universities, GPA 3.5, "No more than two years must have elapsed since the applicant's graduation" | CONFIRMED (u.ae's own Golden visa page gives only "certificates of excellence"; ICP is more specific) |
| ae-workvisa | u.ae work visa (7 Aug 2026): "valid for two years and renewable … The employer must apply" | CONFIRMED |
| ae-natl, ae-emiratisation, ae-aire | places/gulf-and-central-eastern-europe.md §1–3 (employer pages and WAM, verified in rounds 3a and 3g; AIRE note of 18 Mar 2024) | LIBRARY |
| ae-tax | u.ae taxation: "The UAE does not levy income tax on individuals"; VAT 5% | CONFIRMED |
| ae-eid, ae-180 | u.ae general provisions (28 Sep 2026): medical test at 18+, Emirates ID; "more than 180 days continuously … nullified automatically" | CONFIRMED |
| ae-fcdo | GOV.UK content API (public_updated_at 24 Jul 2026): "Since 8 July there have been strikes and retaliatory attacks by Iran in a number of locations across the region"; flight cancellations and airspace closures | CONFIRMED (no whole-country advice against travel, consistent with places/gulf-and-central-eastern-europe.md) |
| ae-dxb-difc, ae-dxb-innov | DIFC 2025 results (5 Feb 2026): workforce 50,200; 1,052 regulated firms; >290 banks and capital-markets HQs; 135 insurers; >500 wealth and asset managers; 1,677 AI, fintech and innovation entities | CONFIRMED |
| ae-dxb-dic | TECOM Group, 19 Feb 2025: 4,000 customers, more than 31,000 professionals, 65% of Dubai's technology-sector GDP; named firms | CONFIRMED (employer-stated; the dic.ae homepage does not repeat the figures) |
| ae-dxb-port | DP World, 19 Feb 2025: 15.5 million TEU in 2024; "the leading trade and logistics hub in the region" | CONFIRMED (no "largest port" claim made) |
| ae-auh-adgm | ADGM, 30 Mar 2026: workforce 44,339; 347 financial institutions; 171 asset and fund managers; 12,671 active licences | CONFIRMED |
| ae-auh-hub71 | Hub71, 8 Jun 2026: 390 start-ups, over US$2.7 billion raised; Hub71+ AI, ClimateTech, Digital Assets, Life Sciences | CONFIRMED |

**Still unverified for the UAE:** employer health-insurance duty and Dubai tenancy registration (the
u.ae pages 404); expatriate entry pay; Farnesina travel advice; entry rules for Swiss, Norwegian,
Icelandic and Irish citizens (outside the EU agreement).

## P35 Singapore (data/atlas/sg.js)

**Rating notes.** A city-state, so "dominant" here means the family is one of the economy's defining
graduate employers on official data: finance (MAS, about 200,000 jobs), IT (IMDA, 222,170 tech
professionals) and logistics (MPA, world's leading container port). Software is *strong*, not
*dominant*, because IMDA counts tech professionals, not software roles.

| Claim | Source read, and what it says | Status |
|---|---|---|
| sg-visa | ICA visa list, rendered in the browser pane (updated 25 Jun 2026): 34 countries need a visa; no EU, EEA, Swiss or UK passport is listed; stay set by the e-Pass at the checkpoint | CONFIRMED (the list is script-rendered; curl saw only the frame) |
| sg-uk-entry | GOV.UK content API, FCDO Singapore (updated 19 Mar 2026): stay "normally between 30 and 90 days for British citizens" | CONFIRMED |
| sg-stp | ICA Student's Pass for IHLs (19 Jun 2026): apply "at least two months and not more than three months before course begins"; S$45 | CONFIRMED |
| sg-stwork | MOM work-pass exemption for foreign students (11 May 2026): "a maximum of 16 hours a week" in term, or an internship; vacation work | CONFIRMED |
| sg-ltvp | ICA (6 Apr 2026): LTVP for IHL graduates seeking employment; "processed within 6 weeks"; S$45 + S$60 | CONFIRMED (duration not stated: listed as a gap) |
| sg-whp | MOM Work Holiday Programme eligibility (5 Aug 2024): aged 18–25; universities in Australia, France, Germany, Hong Kong, Japan, Netherlands, New Zealand, Switzerland, UK, US; up to 6 months; "capacity of 2,000 pass holders at any one time" | CONFIRMED (page last updated 2024) |
| sg-ep, sg-compass | MOM EP eligibility (28 Apr 2026): S$5,600 / S$6,200 now, S$6,000 / S$6,600 from 1 Jan 2027; 40 COMPASS points; exempt at S$22,500 | CONFIRMED |
| sg-c2, sg-floor | places/beyond-europe.md §4.1 and §4.4 (MOM C2 list, Nov 2025; NUS GES 2025) | LIBRARY |
| sg-lang | SingStat Census 2020 language PDF: English most frequently spoken at home "increased to 48.3 per cent in 2020" | CONFIRMED (the "common language of work" half is the library's reading, not a statistic) |
| sg-tax | IRAS rates page (curl): progressive to 24%; first $20,000 at 0%; non-resident employment income "15% or the progressive resident tax rates … whichever is the higher" | CONFIRMED |
| sg-cpf | CPF Board: contributions "only payable for Singapore Citizens and SPRs"; SRS as the alternative | CONFIRMED |
| sg-mas | MAS parliamentary reply, 10 Mar 2025: "over 2,500 licensed financial institutions", "close to 200,000 people", "Over 80% … local", 9 in 10 net jobs 2018–23 to locals | CONFIRMED |
| sg-imda | IMDA tech and media talent, Excel table linked from the page (updated 25 May 2026): employed tech professionals 181,050 (2020) to 222,170 (2025); non-I&C share 0.5871 (2025) | CONFIRMED (the search summary's 214,000 is the 2024 value) |
| sg-mpa | MPA, 13 Jan 2026: 44.66 million TEU in 2025, +8.6%; named the world's leading container port (DNV-Menon) | CONFIRMED (the "largest transshipment hub" line seen only in a search summary; left out) |

## P36 Estonia (data/atlas/ee.js)

**Rating notes.** The library had nothing on Estonia. Tallinn software and IT are *strong*, not
*dominant*: the statistics read (Statistics Estonia, Startup Estonia) are national, and no
Tallinn-only figure could be read (tallinn.ee presented a Cloudflare challenge, which was not
bypassed). Tallinn business is *strong* on Invest in Estonia's figure that Harju County hosts over
half of new companies. AI, data science and big data are not rated in Tallinn.

| Claim | Source read, and what it says | Status |
|---|---|---|
| ee-eu-rights, ee-eu-reg | politsei.ee, EU citizens' temporary right of residence: 3 months without registering; "unlimited right to work, engage in business or study without needing a separate permit"; register at the municipality, ID card only after registration; right revoked if no registered address | CONFIRMED |
| ee-study, ee-study-work | politsei.ee, residence permit for study: "for the entire period of study"; "You may work alongside your studies provided that employment does not interfere" | CONFIRMED |
| ee-270 | politsei.ee, expiry of a residence permit: "If you held a residence permit for study … your stay is permitted for up to 270 days" | CONFIRMED |
| ee-grad | Ministry of the Interior, 13 Sep 2018: "an exemption has been made to the salary criterion and the Unemployment Insurance Fund permit requirement" for Estonian graduates | PARTLY CONFIRMED (2018 text; the 2026 politsei page lists "graduates of Estonian higher education institutions" as a ground without restating the terms) |
| ee-salary, ee-a2 | politsei.ee residence permit for employment (curl, table): for "05.03.2026 – March 2027" rates 0.8 = 1674, 1.0 = 2092, 1.24 = 2594, 1.5 = 3138; start-up rate is the 0.8 column; Unemployment Insurance Fund permit; A2 Estonian after 5 years for extension | CORRECTED against secondary sources (several guides gave €1,674 or €1,981 as the general rate; the general rate for 2026 applications is €2,092) |
| ee-eres | e-Residency knowledge base, rendered in the pane: "e-Residency does not confer citizenship, tax residency, physical residency or right of entry" | CONFIRMED |
| ee-ict | Statistics Estonia, 17 Jul 2024: about 36,000 in information and communication, 22,000 in programming; "600 of these jobs have disappeared"; 20–29-year-olds 6,130 (Jun 2022) to 5,070 (Jun 2024) | CONFIRMED (2024 data; flag for refresh) |
| ee-startups, ee-wise | Startup Estonia, 25 Nov 2025: 15,023 employees in Q3 2025 (+1%); 4 Sep 2025: Wise +178 and Bolt +80 employees year on year, from Tax and Customs Board data | CONFIRMED (the 2,050 and 1,320 headcounts in a search summary were not on the pages read; left out) |
| ee-harju | Invest in Estonia, Harju County: "Over 50% of the enterprises created in Estonia each year"; 45% of the population | CONFIRMED |
| ee-ulemiste | ulemistecity.ee: "18 000 people working, studying and living in our community" | CONFIRMED (employer-stated) |
| ee-tartu | ut.ee news on Startup Day 2026: deep-tech spin-offs presented; Tartu Science Park among support | CONFIRMED (weak basis: *present* only) |
| ee-tax | emta.ee (26 Jun 2026): basic exemption "700 euros per month, i.e. up to 8,400 euros per year", no longer income-dependent | CONFIRMED |
| ee-social | emta.ee income and social taxes (15 Sep 2025): income tax 22%; social tax 33%; unemployment insurance 1.6% employee; funded pension 2% | CONFIRMED |

**Still unverified for Estonia:** health-insurance cover for new employees; recruiting calendar; entry
pay; Bolt's registered address (legal page shows the company name only).

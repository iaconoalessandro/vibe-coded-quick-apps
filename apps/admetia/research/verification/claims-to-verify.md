---
title: Claims to verify and gap audit
last_researched: 2026-10-02
scope: Phase 5 gap audit of the whole library, reread as a sceptical career advisor and as a first-year student. Covers what is missing, wrong, outdated or unsupported, what was fixed, a prioritised list of the claims most worth verifying, and every file's unverified claims consolidated in an appendix.
confidence: n/a (audit)
review_by: 2026-12-31
---

# Claims to verify and gap audit

## 1. How the library was checked

- Each of the 17 research files was written by a separate research agent against a shared brief (_working/brief-for-researchers.md). The lead then **re-checked about 40 load-bearing figures against their primary sources**: PDFs and official pages fetched and text-extracted. The log is in _working/progress.md.
- **Two errors were found and fixed:**
  1. decisions/programme-choice.md had mis-read GMAC's 2026 Corporate Recruiters Survey Figure 17. The PDF's text layer lists the bars bottom-to-top, so degree labels were shifted. The MiM hiring share was overstated (84% instead of 73%). The conclusion survived (the MiM is still the most widely hired pre-experience master's), and the numbers were corrected with a method note.
  2. careers/finance.md attributed Goldman's 360,000 applications to a 2026 article; they come from Fortune's June 2025 article.
- **Two near-misses were caught before publication:**
  1. A "+61.7%" figure in the AlmaLaurea release first matched an unrelated statistic (women's share of degrees). The correct passage, five-year pay abroad ≈€2,900 vs ≈€1,800, was then located and confirmed.
  2. An unverified Big-4 starting salary was removed from decisions/decision-framework.md.
- **Method limitation (affects every file):** the session's web-search budget (200 searches, shared across agents) ran out early in Phase 3. Most evidence was therefore collected by fetching known primary URLs directly. This favoured primary sources, but blocked or script-rendered pages could not be read: mckinsey.com, bain.com, several bank careers sites, Revolut, DARES, Glassdoor, the FT methodology page and the High Fliers flipbook. Usage limits also interrupted the agents three times. Each resumed from saved work, and no file was left with "(in progress)" markers.

## 2. Gap audit: the sceptical career advisor's reread

| # | Finding | Type | Status |
|---|---|---|---|
| A1 | **Elite-school bias.** School-level data covers the ~70 programmes in the calculator. Most readers attend other schools, and the library said little about them | Missing | **Partly fixed:** "If your school is not a target" section added to decisions/decision-framework.md (N1–N7). Mid-tier school outcome data remains missing |
| A2 | **No long-run trajectories.** Nothing compares 10-year pay or progression by country or school, so H1's "slower long-term growth" half is unproven | Missing | Open: claim P1 below |
| A3 | **School-published outcome data is self-interested.** Employment reports and FT alumni salaries are self-reported, coverage varies (Bocconi 55%, TUM 15%), and non-respondents are likely less successful | Methodological caveat | Addressed in school-types and salaries files; decoder tool proposed (product-map T6) |
| A4 | **Hours, burnout and wellbeing are thin.** Only bank hour-cap policies are sourced. Consulting, Big 4 and FMCG hours have no data | Missing | Open: claim P14 |
| A5 | **Stale IB degree-mix data.** The H3 verdict for IB front office rests on 2016–17 London data | Outdated | Flagged in careers/finance.md; open, P2 |
| A6 | **Author-computed net pay.** Net-pay and "net minus rent" figures are the researcher's own tax calculations. The Swiss method matches PwC's example to within ~1%, but Milan, Madrid and Zurich health insurance carry assumptions | Unsupported in part | Labelled "author calculation"; open, P9 |
| A7 | **Single-source pay ratios.** Consulting pay by city and MBB/Big-4 premia come from one aggregator family (PrepLounge, levels.fyi) | Weak support | Labelled; open, P10 |
| A8 | **Thin coverage of Spain, Portugal, the Nordics and Austria** as *work* destinations (as opposed to study destinations) | Missing | Open |
| A9 | **MBA track barely covered** beyond deferred MBAs and MiM→MBA sequencing, although the calculator scores 43 MBA schools | Out of scope this run | Listed in product/landscape-map.md; candidate for the next run |
| A10 | **Non-EU depth.** Visa rules for non-EU readers are covered, but non-EU-specific outcomes (stay rates, sponsorship odds by employer type) are thin | Missing | Open: P13 |
| A11 | **Fast-moving facts.** About 25 facts expire within 3–6 months (H-1B proclamation, UK–EU youth scheme, Immigration Skills Charge, Swiss quotas, 2026–27 deadlines, Mediobanca integration) | Will become outdated | `review_by` dates set; product-map §5 maintenance plan |
| A12 | **Causality.** Most findings are correlational (studying in a country vs working there; apprenticeship vs hire; referral vs hire) | Methodological caveat | Verdicts say "holds when / fails when"; the hypotheses register distinguishes supported from causal |
| A13 | **Survivorship in "back door" routes.** Lateral-move evidence comes from practitioner sources describing people who succeeded | Weak support | Tagged practitioner consensus/anecdotal in getting-in/breaking-in.md |

## 3. Gap audit: the first-year student's reread

| # | Finding | Status |
|---|---|---|
| S1 | "Where do I start? There are 20+ long files." | **Fixed:** README.md with reading orders by reader type |
| S2 | "What do MBB, BB, EB, TS, PPP, CEFR, ECTS, OTE, ABM mean?" | **Fixed:** glossary.md |
| S3 | "I'm in year 1 of my bachelor's. What do I do *now*?" | **Fixed:** decisions/decision-framework.md section B1–B9 |
| S4 | "My school isn't on these lists." | **Partly fixed:** decisions/decision-framework.md N1–N7 (see A1) |
| S5 | "The numbers come in €, £, CHF and PPP dollars. How do I compare them?" | Partly addressed: glossary defines PPP and net-minus-rent; money/salaries-and-roi.md §5 converts. A comparator tool is proposed (product-map T3) |
| S6 | "Which deadlines are urgent right now?" | **Fixed:** time-sensitive block in decisions/decision-framework.md bottom line (HEC R1 7 Oct, Bocconi 29 Oct / 2 Nov, UK visa 31 Dec 2026) |
| S7 | "Files are long (6–8k words)." | Each file opens with a ranked bottom line. The README gives one-line summaries. Product pages should surface bottom lines and decision rules only |

## 4. The claims most worth verifying (prioritised by decision impact × uncertainty)

> Update 6 Oct 2026: US visa and immigration claims are consolidated in `visas_immigration/united_states/united_states_visas_immigration_guide.md` (single source of truth). The US items P4 and P15 below are superseded by it, and its open items are in `united_states_open_questions.md`.

| P | Claim | Why it matters | Current status / where seen | How to verify | File |
|---|---|---|---|---|---|
| P1 | Swiss vs London **10-year** pay and progression for business master's graduates | Completes H1, the core "where to work" ROI question | No source found; FT 3-year data only | BFS longitudinal graduate survey (5-year wave), HSG/LBS alumni surveys, UK LEO by subject | salaries-and-roi, hypotheses |
| P2 | **IBD-only degree mix** in London and European analyst classes, 2024–26 | Completes H3; tells students whether to study STEM or finance for M&A | Only 2016–17 eFinancialCareers analyses | Bank disclosures; LinkedIn analysis of 2025–26 analyst classes (within platform terms) | careers-finance |
| P3 | **Mercedes–HfWU Nürtingen** (and Porsche–HfWU, BMW–HM) hiring links, and any employer's school concentration of business hires | The example in H2; employer-specific pipelines are the product's moat (T7) | Only school-sourced, pre-2023 or snippet evidence | Employer/HfWU cooperation agreements; LinkedIn alumni-tool counts; employer HR enquiry | employer-pipelines |
| P4 | Status of the **US $100,000 H-1B proclamation** after its 21 Sept 2026 lapse, and the *California v. Mullin* appeal | Changes the US value of a STEM MSF for non-US readers | USCIS page (updated 21 Sept 2026) read; extension unknown at the time. RESOLVED 6 Oct 2026: extended to 21 Sep 2027 (Proclamation 11069); implementing policies vacated by two courts (see row P4 CORRECTED and `visas_immigration/united_states/united_states_visas_immigration_guide.md` section 3.2) | uscis.gov, Federal Register | visas-and-work-rights |
| P5 | **UK–EU Youth Experience Scheme** (status, cap, age band) and the **Immigration Skills Charge** rise to £1,320 | Could reopen London to EU graduates without sponsorship; changes employer sponsorship cost | Summit postponed (25 Sept 2026 reporting); charge seen in law-firm snippets | GOV.UK announcements; Statement of Changes | visas-and-work-rights |
| P6 | **Impatriati regime under art. 225 D.Lgs. 117/2026**: the in-force date (reported 4 July 2026), and that the same-employer 6–7-year rule carried over unchanged | Decides whether "London office → Milan office" returns get the 50% relief | Recodification confirmed in the decree index; detail via the agent's reading and AdE ruling 263/2025 | Normattiva full text of art. 225; Agenzia delle Entrate circular | italy-playbook |
| P7 | **GMAC 2026 per-sector AI-replacement shares** (≈40% tech, 25% consulting, 22% finance) | Used to rank career families by AI exposure | Chart-read from the PDF text layer; only the "one in three" overall figure is in the prose | GMAC data tables or a GMAC press contact | careers-tech-startups, trends |
| P8 | **London first-year analyst base pay 2024–26** (above the £70k set in 2022?) | The headline pay number students compare | JPMorgan £70k (Jan 2022) confirmed; later moves unconfirmed | eFinancialCareers survey; bank offer letters | careers-finance, salaries-and-roi |
| P9 | **Net-pay assumptions**: Milan/Lombardy surcharges, Madrid Beckham base, Zurich health insurance and Quellensteuer | Drives the "net minus rent" ranking (product-map T3) | Author assumptions within PwC ranges | Official tax calculators (Agenzia Entrate, AEAT, Kanton Zürich) | salaries-and-roi |
| P10 | **Consulting pay by city** and the MBB/Big-4 premium ratios (≈2× France, 1.6× UK, 1.5× DE) | Offer comparison; country choice for consulting | Single aggregator family | Firm offer data, national surveys, multiple aggregators | careers-consulting |
| P11 | **CGE 2025 starting salaries abroad** (Switzerland €84,202; UK €73,191; Germany €63,442) | Independent cross-check of H1 | Seen via a secondary summary | CGE 2025 full report PDF | salaries-and-roi |
| P12 | **Big 4 starting salaries and intake by country** (UK combined intake 6,500 → 5,400; IT/DE/FR numbers) | The largest entry door's real size and pay | UK figures via secondary press (no named dataset) | Firm press releases; Accountancy Age/Today primary data; national Big-4 sites | careers-accounting-corporate, trends |
| P13 | **Sponsorship odds by employer type** and evidence that needing a visa lowers hiring odds | Core for non-EU readers | MAC 2024 Graduate visa review only | UK sponsor register counts by sector; MAC reports; GMAC CRS legal-documentation question | visas-and-work-rights |
| P14 | **Hours and burnout data** for consulting, Big 4 and FMCG | A human-side decision factor students under-weight | Not sourced | National working-time surveys by sector; firm well-being disclosures | careers-consulting, careers-accounting-corporate |
| P15 | **STEM designation** of the calculator's US programmes (Princeton MFin, Vanderbilt MSF, WashU MSF, Michigan Ross MM, Berkeley MFE) | Decides 12 vs 36 months of US work for internationals | Not confirmed per programme | Each programme's CIP code page; DHS STEM list | visas-and-work-rights |
| P16 | **Scholarship negotiation** success at private schools | Students may leave money on the table, or waste goodwill | Only anecdotes; Bocconi says decisions are final | Survey of admits; school policy statements | costs-and-funding |
| P17 | **Summer-to-full-time conversion rates** in London IB | Calibrates the "internship is the door" rule | Forum figures of 70–90% only | Bank disclosures; school career reports | careers-finance |
| P18 | **ISE sector ratios** for digital/IT (205) and finance/professional services (188) applications per vacancy | Sector competitiveness comparison | Search summary only (290 FMCG verified) | ISE Student Recruitment Survey 2025 full report | trends |
| P19 | **MBB US starting pay frozen for a third year** ($135–140k undergraduate total; $270–285k MBA) | Benchmarks the consulting pay story | Secondary aggregations; Management Consulted 2026 report cited as "flat" | Management Consulted report; firm offer data | trends, careers-consulting |
| P20 | **L'Oréal UK MMT terms** (£35k, 18 months, up to 40 graduates) and **LVMH SPRING eligibility** (master's, ≤3 years' experience) | Entry windows for the marketing track | Snippet only (pages 404) | Next cycle's employer postings | careers-marketing |

### 4.1 Round 3 outcomes (verification closed 2 October 2026)

P1–P20 (above) and P25–P32 (section 8) each went through a dedicated verification pass in Round 3. P21–P24 (section 7) were outside Round 3's scope and stay open; check them before the tools that use them are built (CSEA denominators for T6, deposit and work-hour rules for student logistics, the bachelor's-vs-master's counterfactual for the ROI tool, and Gemini leads before any reaches the site). Status vocabulary: **CONFIRMED** (primary source read and matches), **CORRECTED** (primary source read; the library was changed), **PARTLY CONFIRMED** (core holds; a detail is thin or single-source), **STILL UNVERIFIED** (no primary source could be read or none exists). Each log records what the source says and every edit made to body files (old → new).

| P | Final status | What changed or still open | Log |
|---|---|---|---|
| P1 | PARTLY CONFIRMED + CORRECTED | 10-year series now exist on both sides (UK LEO £53,400 at ten years; Swiss BFS LSE age bands) but are not like-for-like; no sign of slower Swiss proportional growth. "27–31% promoted" applies to UH master's/doctorate graduates who changed job; 23% of all graduates were promoted | 3c |
| P2 | STILL UNVERIFIED | No bank, school or trade-body source gives a 2023–26 IBD-only degree mix; 2016–17 eFinancialCareers data remain the latest. H3 stays "partly supported" | 3d |
| P3 | PARTLY CONFIRMED | Mercedes-Benz Retail–HfWU "Go Innovative" partnership (2016, up to 40 students) and the Porsche Automotive Campus at HfWU documented; Porsche and Mercedes business dual study runs mainly via DHBW; BMW uses HM for Wirtschaftsinformatik. No employer publishes hiring counts by school, so "school concentration" stays unverified | 3e |
| P4 | CORRECTED | The $100,000 H-1B proclamation was extended to 21 Sep 2027 (Proclamation 11069), not lapsed. DHS fee NPRM ($103,265) proposed only; comments closed 24 Sep 2026. N.D. Cal. preliminary injunction granted in part on 30 Sep 2026 (*Global Nurse Force v. Trump*; agent-read docket entry, scope not read; lead could not reproduce). Update 6 Oct 2026: the order was read; it vacated and enjoined the implementing agency policies and says the fee is no longer in effect (`visas_immigration/united_states/united_states_visas_immigration_guide.md` section 3.2) | 3b, 3g |
| P5 | PARTLY CONFIRMED | Immigration Skills Charge £480 / £1,320 confirmed (SI 2025/1324, in force 16 Dec 2025). UK–EU Youth Experience Scheme: no official cap or start date exists | 3b |
| P6 | CORRECTED + CONFIRMED | Art. 225 D.Lgs. 117/2026 in force 4 Jul 2026, but the Testo unico applies from 1 Jan 2027 (art. 377); art. 5 D.Lgs. 209/2023 stays operative to 31 Dec 2026 (Normattiva read twice). Same-employer 6/7-year rule as described. Internships and the de minimis cap are not addressed by any source | 3b, 3g |
| P7 | PARTLY CONFIRMED | GMAC 2026 "one in three" overall confirmed; sector split (tech 40%, manufacturing 36%, consulting 25%, finance 22%) printed on a chart with wide error bars and samples of 35–67 per sector; caveat added | 3c |
| P8 | STILL UNVERIFIED | JPMorgan £70k (Jan 2022) confirmed as press-reported; no primary 2024–26 London analyst base found | 3c |
| P9 | CONFIRMED + CORRECTED | Lombardy and Milan surcharges, IRPEF 2026, Beckham 24%, Madrid scales, Zurich Quellensteuer and London tax confirmed. Corrected: Zurich cantonal multiplier 95% (not 98%) for 2026; Zurich-city health premium CHF 640 adult / CHF 459 aged 19–25 (not the canton average). Paris, Munich, Amsterdam, Dubai and rents not re-checked | 3c |
| P10 | PARTLY CONFIRMED + CORRECTED | MBB/Big 4 premium restated as indicative ranges: UK 1.4–1.8×, France and Germany 1.2–1.6×, US 1.05–1.25× against Big 4 strategy arms (not "≈2× France") | 3c |
| P11 | CONFIRMED | CGE 2025 figures abroad confirmed on the CGE PDF; population wording corrected (not French nationals or MiM only) | 3c |
| P12 | CORRECTED | The UK "6,500 → 5,400" Big 4 intake was an unsourced sum ending in 2024 and was removed; Deloitte and PwC UK figures confirmed (employer-stated); other countries still unverified | 3c |
| P13 | PARTLY CONFIRMED | UK sponsor register (2 Oct 2026): 127,606 organisations, no sector field. Finance and insurance 22.1% of Skilled Worker entry-clearance grants (year to June 2026). GMAC 2026: 81% of Western European employers willing to hire graduates needing papers. No audit study isolates a visa penalty | 3d |
| P14 | PARTLY CONFIRMED | UK Big 4: FRC Firm Metrics (Jul 2026) give firm-stated hours (PwC 41.3 h average, 44.3 h peak); ONS ASHE 2025 paid hours (consulting 38.0) exclude unpaid overtime and so understate them; caba 2024: 74% of 300+ UK chartered accountants report burnout symptoms (self-reported). FMCG, Eurofound/BAuA sector cuts and non-UK Big 4 hours still unverified | 3e |
| P15 | PARTLY CONFIRMED + CORRECTED | Michigan Ross MM is NOT STEM (school FAQ). Princeton MFin, Vanderbilt MSF, WashU MSF, MIT MFin, Duke MMS and Yale MAM are STEM per the school, with no CIP code published; Berkeley MFE is CIP 27.0305 (on the DHS list). Computing programmes not checked | 3b |
| P16 | CONFIRMED (policies) / STILL UNVERIFIED (success rates) | Bocconi "final and cannot be appealed" (re-read by the lead), HEC MiM "cannot be reconsidered", IE only for significant unexpected financial change, ESCP budget-dependent need exception. No survey measures negotiation success; Esade and LUISS wording unread | 3e |
| P17 | STILL UNVERIFIED | No bank publishes a summer-to-full-time conversion rate. Forum-relayed 30–75% (eFinancialCareers, Aug 2023) [anecdotal]; the 70–90% stays anecdotal and cyclical | 3d |
| P18 | CORRECTED | 205 and 188 come from ISE's 2024 survey (17 Oct 2024), not 2025; the 2025 sector table is members-only. "140, up 14% year on year" removed (140 in both 2024 and 2025) | 3c |
| P19 | CONFIRMED + CORRECTED | Flat for a third year confirmed (Management Consulted 2026); ranges $137–140k and $267–285k; BCG base $110k. A reported 2027 rise to $120k is single-source and STILL UNVERIFIED | 3c |
| P20 | PARTLY CONFIRMED | L'Oréal UK MMT advert (£35k, 18 months, three rotations, up to 40, within two years of graduating) read on a job-board mirror (careers.loreal.com blocked). LVMH Product Leaders page: master's and at most 3 years' experience; the Future Leaders page states no eligibility | 3e |
| P25 | STILL UNVERIFIED (business PGT) | HESA blocked to every automated route. Partial substitute: all-subject international PGT graduates 74% employed vs 77% UK, 13% vs 3% unemployed (Jisc via UKCISA, Sep 2025; international response rate 9%) | 3a, 3f |
| P26 | CONFIRMED | UN YPP 2026: 47 countries, Italy and Germany both absent. Selection rate not published. Italy overrepresented in the Secretariat in A/78/569 and A/79/584; Dec 2024 status inferred unchanged from A/80/508 | 3a, 3f |
| P26b (OECD, IMF, World Bank) | CONFIRMED + CORRECTED | OECD Young Associates exclude master's holders and enrollees, 8–12 a year. IMF Economist Program 2027: PhD, under 34, closes 4 Dec 2026 (Workday, re-read by the lead). New route added: IMF Research Analyst Program (bachelor's) | 3a, 3f |
| P27 | CONFIRMED (ADQ open) | PIF and Mubadala graduate programmes nationals-only. UAE Emiratisation charge AED 10,000 a month per unfilled position from 1 Jul 2026 (WAM quoting MoHRE). ADQ has no careers page to read | 3a, 3g |
| P28 | CONFIRMED | Greek art. 5C needs 5 of the previous 6 years non-resident; 7 of 8 is art. 5A (statute text read twice). Amendments after Law 4758/2020 not traced | 3b, 3g |
| P29 | CONFIRMED | CRD Arts 14(3), 14(4)(b), 16(a), 16(m), GDPR Art. 9 and ePrivacy 5(3) quotations accurate (Cellar texts); Art. 14(2a) added; withdrawal button (Dir. 2023/2673, from 19 Jun 2026) confirmed. A lawyer must still review before any paid launch | 3a, 3g |
| P30 | CONFIRMED | UK earned-settlement consultation closed 12 Feb 2026; Home Secretary to the Home Affairs Committee (15 Sep 2026): policy before Feb 2027, rules at the date of application apply, transitional protection still undecided | 3b |
| P31 | CORRECTED | The £40,000 SOC 2134 column is the lower (Health and Care / pre-April-2024) rate; the new-entrant floor is £38,300 | 3b |
| P32 | CONFIRMED + CORRECTED | Chevening scholars cannot use the Graduate route; Chevening deadline 6 Oct 2026, Fulbright Italy 30 Nov 2026. Award counts not published | 3b |

**Topic 3 closed on 2 October 2026.** What remains open is listed above as STILL UNVERIFIED. In every such case the library labels the figure as unverified or anecdotal rather than stating it as fact.

### 4.2 The Atlas (opened 2 October 2026)

Each Atlas country record (data/atlas/<id>.js) is one P number. Every claim in it carries a tag, a source and a read date; the log for each P lists what the source says and the status of every claim. Ratings of demand by role family rest on the claims listed in the log; a family with no claim is shown as "not rated".

| P | Country | Status | Still open | Log |
|---|---|---|---|---|
| P33 | Germany | CONFIRMED (45 claims: 38 read, 7 from the library) | Demand in AI, data science and analytics is not rated for any German hub: no source read that measures it by city; Bonn and Karlsruhe are not yet mapped as hubs; UK citizens who lived in Germany before 2021 keep Withdrawal Agreement rights; not covered here; Entry pay by hub was not re-checked; the net-pay figure is the library’s author calculation for Munich; No family is rated in Cologne, Ruhr, Hanover or Leipzig: Eurostat’s metropolitan table gives no split by sector for them | 4a, 4k |
| P34 | United Arab Emirates | CONFIRMED (20 claims: 17 read, 3 from the library) | employer health-insurance duty; Dubai tenancy registration; expatriate entry pay; Farnesina advice; entry rules for Swiss, Norwegian, Icelandic, Irish citizens | 4a |
| P35 | Singapore | CONFIRMED (16 claims: 14 read, 2 from the library) | length of the graduate LTVP; AI and data demand | 4a |
| P36 | Estonia | 17 claims, all read on primary pages: CONFIRMED except graduate exemptions (PARTLY CONFIRMED, 2018 text); salary floor CORRECTED against secondary guides | Tallinn-only ICT figures; health cover; recruiting calendar; entry pay | 4a |
| P37 | France | CONFIRMED (22 claims: 15 read, 7 from the library) | Lyon’s 66,200 life-science jobs (Métropole de Lyon data) are not tied to a role family by any source read; Finance sub-roles in Paris, and software, data and AI demand by city, are not rated; Entry pay by hub was not researched; the net-pay figure is the library’s calculation for Paris; No family is rated in Bordeaux, Nantes, Strasbourg or Grenoble: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4b, 4k |
| P38 | Italy | CONFIRMED (20 claims: 13 read, 7 from the library) | The North-East industrial districts beyond Padua and Venice are not mapped as hubs; Rome’s demand is rated only from the library’s practitioner reading; no statistic by role family was read; The Blue Card salary threshold for Italy was not read for 2026; No family is rated in Bologna and the Motor Valley, Padua and Venice, Florence, Naples or Genoa: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4b, 4k |
| P39 | Spain | CONFIRMED (14 claims: 8 read, 6 from the library) | The Madrid headquarters share comes from a regional page last updated in 2019; Demand in data, AI and marketing is not rated; The length of the job-search residence under Ley 14/2013 was not read; No family is rated in Valencia, Seville, Málaga, Bilbao or Zaragoza: Eurostat’s metropolitan table gives no split by sector for them | 4b, 4k |
| P40 | Netherlands | CONFIRMED (14 claims: 6 read, 8 from the library) | Tech, data and AI demand in Amsterdam and Eindhoven is not rated from statistics: no city-level source was read; Compulsory Dutch health insurance for students who work was not read on an official page; The IND’s student residence permit conditions were not re-read; only the work rule was; No family is rated in The Hague: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4b, 4k |
| P41 | United Kingdom | CONFIRMED (23 claims: 9 read, 14 from the library) | Tech, data and AI demand outside London is rated from 2018 or cluster-level figures; no hub-by-family statistic was read; The UK–EU Youth Experience Scheme has no agreed terms; it is not shown as a route; No family is rated in Birmingham, Cardiff, Liverpool, Newcastle or Oxford: the ONS counts read do not put them in the top three of the 14 big-city council areas outside London compared here for finance or information-and-communication jobs; Hubs added on 3 October 2026 in Great Britain are rated from ONS 2024 employment counts by council area: strong means first to third, with at least 5,000 jobs, among 14 big-city council areas outside London (Birmingham, Manchester, Leeds, Liverpool, Newcastle, Bristol, Sheffield, Nottingham, Cardiff, Glasgow, Edinburgh, Cambridge, Oxford, Bath). Belfast is not mapped: the survey covers Great Britain only | 4b, 4k |
| P42 | Switzerland | CONFIRMED (17 claims: 10 read, 7 from the library) | Zug and Lugano are not yet mapped as hubs: no city source was read; the St. Gallen programmes are not linked from a hub; Software and AI demand in Zurich rests on one employer statement; no statistic by family was read; The 2027 quotas are decided each November; the 2026 figures are shown; No family is rated in Bern, St. Gallen or Lucerne: Eurostat’s metropolitan table gives no split by sector for them | 4c, 4k |
| P43 | Austria | CONFIRMED (10 claims: 7 read, 3 from the library) | Finance, tech and data demand in Vienna is not rated: no city-level source read; Austrian income tax and net pay were not researched for this record; No family is rated in Linz, Graz or Salzburg: Eurostat’s metropolitan table gives no split by sector for them | 4c, 4k |
| P44 | Ireland | CONFIRMED (10 claims: 7 read, 3 from the library) | Galway and Limerick are not yet mapped as hubs, although 54% of multinational jobs are outside Dublin; IDA Ireland’s regional pages refused automated reads; Registration of non-EU students with immigration (IRP) was not re-read for this record; Demand in Dublin is rated from the library and national figures; no Dublin statistic by role family was read; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4c, 4k |
| P45 | Luxembourg | CONFIRMED (5 claims: 3 read, 2 from the library) | Employment in the fund industry and entry pay were not read; ALFI publishes assets, not jobs, on the page used; The declaration of arrival rule and the job-search permit length were not re-read after guichet.lu moved its pages; Tax and net pay were not researched for this record | 4c |
| P46 | Belgium | CONFIRMED (8 claims: 7 read, 1 from the library) | Leuven (imec, KU Leuven) is not yet mapped as a hub; Belgian income tax, social contributions and entry pay were not researched; Demand in finance, consulting and tech in Brussels is not rated: no city-level source read; No family is rated in Liège: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4c, 4k |
| P47 | Portugal | CONFIRMED (8 claims: 3 read, 5 from the library) | No family is rated strong: no source read gives Lisbon demand by role family or graduate pay; The EU registration step comes from practitioner pages; the official page had moved; Whether a non-EU graduate can switch from study to work in Portugal was not confirmed; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4d, 4k |
| P48 | Denmark | CONFIRMED (14 claims: 7 read, 7 from the library) | No family is rated strong: no source read gives Copenhagen demand by role family, and Danish business-graduate starting pay has no primary source; The Positive List for graduates was not read; No family is rated in Odense: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4d, 4k |
| P49 | Sweden | CONFIRMED (10 claims: 5 read, 5 from the library) | Stockholm demand is rated from one school’s outcomes (SSE) and employer pages; no city statistic by role family was read; No family is rated in Uppsala: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4d, 4k |
| P50 | Norway | CONFIRMED (12 claims: 7 read, 5 from the library) | The job-seeker permit for graduates of Norwegian institutions was not read: UDI’s site blocked automated reads; The skilled-worker pay floor comes from a law-firm summary, not UDI; Oslo’s share of financial output is an older statistic (2015 data, published 2017); No source says which Norwegian employers recruit in English; No family is rated in Trondheim: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4d, 4k |
| P51 | Finland | CONFIRMED (12 claims: 6 read, 6 from the library) | No family is rated strong: the only outcome data read are one school’s (Aalto) and national stay rates; Espoo (part of the Helsinki region) and Oulu are not mapped as separate hubs; Aalto’s graduate pay figures could not be extracted from its report; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4d, 4k |
| P52 | Poland | CONFIRMED (16 claims: 8 read, 8 from the library) | Ratings rest on centre counts; ABSL’s functional split by city was not read, so finance, accounting and IT are not rated separately; Client-facing banking and consulting entry in Warsaw is unresearched; No family is rated in Gdańsk, Poznań or Łódź: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4e, 4k |
| P53 | Czech Republic | CONFIRMED (9 claims: 8 read, 1 from the library) | Ratings are by industry share of jobs, not by graduate vacancies; no named Prague graduate programme was read; Whether Czech is needed outside international firms was not researched; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4e, 4k |
| P54 | Romania | CONFIRMED (8 claims: 7 read, 1 from the library) | No source read splits service-centre jobs by city, so Bucharest is rated only present; Non-EU work permits after the nine-month search were not researched; No family is rated in Timișoara: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4e, 4k |
| P55 | Bulgaria | CONFIRMED (7 claims: 6 read, 1 from the library) | Bulgaria is thinly researched: no source read splits jobs by city or names graduate programmes; Tax, net pay and rents were not researched; No family is rated in Varna: the Eurostat figures read do not put them second or third in the country for finance or information-and-communication jobs; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4e, 4k |
| P56 | Greece | CONFIRMED (7 claims: 5 read, 2 from the library) | No source read gives Athens demand by role family, graduate pay or graduate programmes; The hours limit for non-EU students working part-time was not found on an official page; Hubs added on 3 October 2026 are rated only from Eurostat’s 2021–22 metropolitan employment counts: strong means second or third in the country for jobs in finance and insurance, or in information and communication, with at least 5,000 such jobs | 4e, 4k |
| P57 | Lithuania | CONFIRMED & FULLY VERIFIED (18 claims; council 05/10/2026) | All immigration, visa, work and student rules verified against primary sources (UTPĮ, TAR, Migracijos departamentas, Sodra, OSP) and consolidated in visas_immigration/lithuania/; EU registration step after three months verified (€10 fee, 1 month processing); May 2026 amendments verified: 20h limit applies only to Bachelor 1st-2nd year while Master/PhD have full-time 40h rights; Blue Card thresholds and quota rules consolidated | 4f, 4k, council-2026-10-05 |
| P58 | Malta | CONFIRMED (4 claims: 4 read, 0 from the library) | Malta was not covered by the research library before this record; No family is rated: the gaming regulator reports jobs, not roles, and financial-services employment was not read; Pay, tax, rent and graduate outcomes were not researched | 4f |
| P59 | Iceland | CONFIRMED (5 claims: 5 read, 0 from the library) | Iceland was not covered by the research library before this record; No family is rated: no source read describes graduate demand by role family; Pay, tax, rent and whether employers expect Icelandic were not researched | 4f |
| P60 | United States | CONFIRMED (24 claims: 15 read, 9 from the library) | New York finance is rated from school placement reports; the Comptroller’s securities-industry report refused automated reads; H-1B odds for entry-level wage levels are DHS projections; USCIS has not published FY2027 counts by level; No family is rated in the hubs added on 3 October 2026 (Chicago, Los Angeles, Houston, Dallas, Washington, DC, Boston, Seattle, San Francisco, Atlanta, Miami, Charlotte and Philadelphia): the BEA’s county figures give the size of each economy, not hiring by role. The BEA stopped publishing GDP by metropolitan area after 2023, so core-county figures are used | 4f, 4k |
| P61 | Canada | CONFIRMED (10 claims: 5 read, 5 from the library) | Express Entry cut-off scores come from secondary reports; IRCC’s rounds page was blank when read; Tech and AI demand is not rated; French requirements for Montreal jobs were not researched; The Toronto and Montreal figures come from an Ontario government bid document citing Lightcast data; No family is rated in Calgary or Ottawa: Statistics Canada’s occupation counts read do not separate IT from other science and engineering jobs, and neither city is in the top three for finance professionals | 4f, 4k |
| P62 | Australia | CONFIRMED (11 claims: 9 read, 2 from the library) | The Department of Home Affairs and the Tax Office refused automated reads, so entry for EU passports and tax rates were not read on their own pages; The Sydney figures cover the City of Sydney local area only, not Greater Sydney, and date from 2022; Demand in data, AI, marketing and accounting roles is not rated; No family is rated in Melbourne, Brisbane, Perth, Adelaide or Canberra: the source read gives population, not jobs by sector | 4g, 4k |
| P63 | New Zealand | CONFIRMED (9 claims: 9 read, 0 from the library) | New Zealand was not covered by the research library before this record; No source read gives graduate outcomes or entry pay for international master’s graduates in New Zealand; How long the post-study work visa lasts for each kind of master’s is not set out on the page read; No family is rated in Wellington or Christchurch: the sources read rank industries by output, not graduate jobs by role; the Wellington report dates from 2020 | 4g, 4k |
| P64 | Japan | CONFIRMED (12 claims: 12 read, 0 from the library) | How much Japanese ordinary graduate hiring requires, graduate pay and the recruiting calendar were not read on a primary source; The Tokyo figures date from 2016 to 2022; demand in technology, data and AI roles is not rated; Entry for EU passports and the list of universities that qualify for J-Find were not read; No family is rated in Osaka, Nagoya, Yokohama, Fukuoka or Kyoto: JETRO’s figures give each economy’s size, not hiring by role | 4g, 4k |
| P65 | South Korea | CONFIRMED (9 claims: 9 read, 0 from the library) | No family is rated: no source read gives Seoul’s jobs or graduate hiring by sector; South Korea was not covered by the research library before this record; Student work hours come from university pages, not the immigration service; whether the 30 hours depend on Korean-language level was not confirmed; Which world rankings count for the top-200 rule is not stated in the press release read; Entry for EU passports, pay, tax and the language demanded by employers were not researched; Ulsan, Daejeon and Daegu are not mapped as hubs; Hyundai’s Ulsan plant page could not be read | 4g, 4k |
| P66 | Hong Kong | CONFIRMED (7 claims: 4 read, 3 from the library) | Whether front-office finance jobs require Mandarin or Cantonese was not verified from a primary source; The annual quota for the Top Talent Pass graduate category is not stated on the page read; Demand in technology, data and AI roles is not rated; tax and rent were not researched; The part-time work exemption for students is a temporary measure: check that it still applies before relying on it | 4g |
| P67 | China | CONFIRMED (14 claims: 13 read, 1 from the library) | China was not covered by the research library before this record; No source read names Shanghai as the national finance centre, so finance is rated strong, not dominant; Entry for EU passports, Chinese-language demands, pay and tax were not researched; The graduate work-permit rule dates from 2017 and was read on a municipal page, not a national one; which universities abroad count as well known is not defined there; No family is rated in Beijing, Hangzhou, Suzhou, Wuhan, Chongqing or Chengdu: the city releases read give output, not graduate hiring by role. Chengdu’s own 2025 figure was not found on an official page | 4h, 4k |
| P68 | Taiwan | CONFIRMED (7 claims: 7 read, 0 from the library) | Taiwan was not covered by the research library before this record; Technology demand is not rated; Entry for EU passports, graduate pay, tax and whether employers expect Mandarin were not researched; The date the two-year permit-free stay started is not given on the page read; No family is rated in Hsinchu or Taichung: the science-park figures read give companies and staff, not hiring by role. Tainan and Kaohsiung are not mapped: the Southern Taiwan Science Park and Kaohsiung port statistics could not be read | 4h, 4k |
| P69 | Malaysia | CONFIRMED (9 claims: 9 read, 0 from the library) | Malaysia was not covered by the research library before this record; No route for graduates to stay and look for work was found; the Employment Pass rules come from an adviser’s summary, not the Immigration Department; No source read gives Kuala Lumpur’s jobs by sector, so no family is rated above present; Entry for EU passports, graduate pay, tax and language expectations were not researched; No family is rated in Penang: the statistics office describes its electronics manufacturing, not graduate hiring by role. Johor’s IT rating rests on data-centre growth, which creates more construction and operations jobs than graduate IT roles | 4h, 4k |
| P70 | Thailand | CONFIRMED (5 claims: 5 read, 0 from the library) | Thailand was not covered by the research library before this record; Whether students may work, and any route for graduates to stay and look for work, were not found on an official page; No source read gives Bangkok’s jobs by sector: the national planning office’s provincial accounts could not be read, so no family is rated above present; Entry for EU passports, work permits for graduates, pay and tax were not researched; No family is rated in the Eastern Economic Corridor: the source read lists investment approvals, not hiring | 4h, 4k |
| P71 | Vietnam | CONFIRMED (7 claims: 7 read, 0 from the library) | No family is rated: no source read gives Ho Chi Minh City’s jobs or graduate hiring by sector; Vietnam was not covered by the research library before this record; The decree was read in a summary by Vietnam Law Magazine, not in its text; how many years of experience an expert needs is not stated there; Entry for EU passports, student visas, pay and tax were not researched; No family is rated in Hanoi, Hai Phong or Da Nang: the sources read give growth, not jobs by sector | 4h, 4k |
| P72 | Saudi Arabia | CONFIRMED (9 claims: 3 read, 6 from the library) | No source read gives Riyadh’s jobs by sector or the number of regional headquarters, so finance is rated only present and nothing else is rated; No employer-stated entry pay for expatriate graduates was found; Entry for EU passports, the Premium Residency tracks and gratuity rules were not read on official pages; Saudi Arabia offers no study-to-work route for European students in the sources read; No family is rated in Jeddah. Dammam and Dhahran, Aramco’s home, are not mapped: Aramco’s site did not respond to automated reads | 4i, 4k |
| P73 | Qatar | CONFIRMED (5 claims: 3 read, 2 from the library) | No family is rated: the Qatar Financial Centre reports firm registrations, not jobs or roles; Qatar’s labour law, Qatarisation rules and sponsorship practice for graduates were not read on an official page; Entry for EU passports, pay and tax were not researched | 4i |
| P74 | Kuwait | CONFIRMED (4 claims: 3 read, 1 from the library) | Kuwait was not covered by the research library before this record; No source read gives Kuwait City’s jobs by sector, graduate programmes open to foreigners, pay or tax; finance is rated only present; Kuwaitisation rules and entry for EU passports were not researched | 4i |
| P75 | Oman | CONFIRMED (5 claims: 3 read, 2 from the library) | Oman was not covered by the research library before this record; No source read gives Muscat’s jobs by sector, graduate programmes open to foreigners, pay or tax; finance is rated only present; Omanisation rules and entry for EU passports were not researched; No family is rated in Sohar: the only source read is the port’s own statement on investment, from 2020 | 4i, 4k |
| P76 | Israel | CONFIRMED (7 claims: 7 read, 0 from the library) | Israel was not covered by the research library before this record; The high-tech figures are national: no source read gives Tel Aviv’s share, so high-tech demand is not rated at the hub; Work permits for foreign graduates, entry for EU passports, Hebrew requirements, pay and tax were not researched; The Bank of Israel’s list of supervised banks could not be read: the site runs a bot check, which was not bypassed; No family is rated in Haifa. Jerusalem is not mapped: the pages read on its employers could not be loaded | 4i, 4k |
| P77 | Turkey | CONFIRMED (9 claims: 9 read, 0 from the library) | Turkey was not covered by the research library before this record; No route for graduates to stay and look for work was found; the hours limit for student work was not stated on the pages read; Entry for EU passports, pay, tax, Turkish-language demands and demand outside banking were not researched; Italy’s Viaggiare Sicuri advice could not be read; only the UK’s and the US’s are cited; No family is rated in Bursa; Ankara and Izmir are rated from bank-staff counts alone (strong means second or third in Turkey with at least 5,000 staff) | 4j, 4k |
| P78 | Russia | CONFIRMED (8 claims: 8 read, 0 from the library) | No family is rated: this guide does not assess graduate demand in Russia, and the one economic figure read dates from before the full-scale invasion of Ukraine; Russia was not covered by the research library before this record; Italy’s Viaggiare Sicuri advice and the Council of the EU’s sanctions page could not be read; the EU position is taken from the European Commission’s page; Study visas, work rules, entry for EU passports and whether particular jobs would breach sanctions were not researched: check the sanctions rules with a qualified adviser before accepting any offer | 4j, 4k |

## 5. Things that look wrong or contradictory (resolved or flagged)

- **Roland Berger Germany entry base.** PrepLounge gives €72k; RoadToOffer gives €60,000–80,400. Both are kept, and the conflict is flagged in careers/consulting.md.
- **FT MiM weights.** Secondary summaries may mix MiM and MiF weights (15%/9% vs 16%/10%). The paywalled FT methodology was not read, and this is flagged in decisions/school-types-and-accreditation.md.
- **"Paris has overtaken London."** Not supported on volume: EY 2026 counts 59 FS FDI projects in London vs 30 in Paris. Paris leads on momentum only. The myth is corrected in places/countries-and-cities.md.
- **"Two-thirds cut to junior banking classes from AI."** Widely repeated, but no on-record source was found. Goldman says "not dramatically". Marked not supported (careers/finance.md H8).
- **AlmaLaurea five-year employment jump** (91.6% → 96.3% for economics between survey years). This may be a method change, so the Italy file compares only within one survey year.
- **CGE 2026 abroad-pay figures** may cover all disciplines rather than business schools only. Flagged in money/salaries-and-roi.md.

## 6. Appendix: every file's unverified claims

The lists below are copied verbatim from each file's "Claims to verify" section on 2026-10-01. The number in each heading is the item count.

### decisions/programme-choice.md (15)

1. HEC MiM (Grande École) starting salary and sector split from HEC's own graduation survey or the French CGE survey. Only FT-derived figures were on the programme page. mimineurope.com has a blog on CGE 2025 data (search result only, not fetched).
2. LSE MSc Management vs MSc Finance destinations and salaries: the LSE pages I tried returned 404s.
3. St. Gallen (SIM, MBF) and RSM employment reports: not fetched.
4. ETH/UZH MQF employment outcomes: the mqf.uzh.ch site was unreachable.
5. WU QFin claim that graduates "find jobs within one month or less": a school claim with no report found.
6. Imperial full employment reports (salary by sector for MSc Business Analytics and Strategic Marketing): behind a download form.
7. Esade CEMS MIM double degree: 95% employed within 3 months, $81,989 PPP average base (search snippet only; the page returned 403).
8. QS 2025 ranking placing the CEMS MIM 10th of 206 programmes (search snippet only).
9. LBS MiM "12–16 months" length: the employment report says this, but the programme page says 12 months. It is unclear what the 16-month option is.
10. Year of the Bocconi MSc employment data (not stated on the programme pages).
11. Warwick MSc Management vs Marketing & Strategy outcomes: cited from sibling file careers/marketing.md, not re-fetched.
12. Any employer or recruiter statement that one-year and two-year master's graduates are perceived differently. None was found.
13. The share of MiM job offers that come from conversion of the student's own internship, at any calculator school.
14. Outcomes of stand-alone luxury, sports or sustainability master's at calculator schools.
15. My reading of GMAC 2026 Figure 17 (row order inferred and checked against one text statement). Confirm against the GMAC data tables if they are published.

### decisions/school-types-and-accreditation.md (17)

1. FT MiM 2025: 137 programmes participated and 100 were ranked; alumni response rate 29% (class of 2022). Seen in GMAC and Master Grad Schools search snippets only.
2. Exact 2026 FT MiM criteria weights beyond salary (15%) and salary increase (9%). Poets&Quants 2026 summary; the FT methodology page is paywalled. Poets&Quants' 2025 article appeared to quote 16%/10%, which may refer to the MiF.
3. That the bracketed figure after "Employed at three months" is the share of the class with data. This is my reading of FT convention; confirm against the FT key.
4. How recruiters choose schools (reputation, past hires, relationships vs rankings). Older GMAC Corporate Recruiters Surveys (pre-2023) reportedly asked this; not found in the 2026 report.
5. WirtschaftsWoche BWL ranking methodology (HR-manager survey, reportedly with Universum) and 2024–2026 results. Article at wiwo.de is paywalled.
6. Handelsblatt BWL ranking: research-output based, not employer based. Not fetched.
7. CENSIS 2025/26 classification of Italian universities: methodology and where Bocconi, Luiss, Cattolica, Polimi, Bologna and Padova rank. The censis.it page returned 404.
8. The Economist discontinued its MBA/MiM rankings (announced around 2022). Not fetched.
9. QS Business Masters Rankings methodology, including the employer-reputation component. The QS pages were blocked by a bot check.
10. Le Figaro Étudiant, L'Étudiant and Challenges business-school ranking methodologies and 2026 orders. Not fetched.
11. French employers' perception of AST/international intake vs prépa intake. Forum and alumni lore only.
12. Paris School of Business ownership (believed to be Galileo Global Education) and Omnes Education's scale. Not confirmed from primary sources.
13. Which French body now evaluates management-school visas and grades after the CEFDG's abolition (décret 2026-551). CEFDG page only.
14. Employment reports and fees for Dauphine-PSL, UZH, ETH (MTEC), HSG and HEC Paris MiM, needed for full public vs private comparison tables. Not fetched in this session.
15. Claims that Indian, Chinese or Gulf employers or governments value or require triple-crown accreditation. School press releases only (e.g. MDI Gurgaon, SPJIMR, cited on the Wikipedia triple-accreditation page).
16. Acceptance rates for big-name standalone MSc programmes (cash-cow hypothesis). Not found.
17. Le Monde 2023: nearly half of business schools lacked prépa candidates (via Wikipédia "Sigem").

### places/countries-and-cities.md (15)

1. The CGE grande-école six-month net employment series (90.5% → 76%, 2023–2026; RESOLVED, verified in the CGE 2026 PDF by the lead) was originally taken from product/landscape-map.md (diplomeo.com, lexpress-education.com). The CGE primary PDF has not been fetched.
2. "Paris is Europe's largest stock market or trading hub" (the widely reported 2022–24 claim). Not verified here; needs Euronext or FESE data.
3. Numbers of jobs relocated to Paris, Frankfurt, Amsterdam, Dublin and Milan after Brexit (the EY Brexit tracker and Bank of England estimates). The tracker page was not found on ey.com in this pass.
4. ECB/SSM headcount in Frankfurt and ECB graduate programme volumes. Needs ECB annual report.
5. Headcounts and graduate intake of Optiver, IMC and Flow Traders in Amsterdam. Needs employer careers pages.
6. The Destatis stay rate split by EU/non-EU, field (economics/business) and German-language skill. The 46% is only available via DAAD's quote.
7. Campus France or France Stratégie data on the share of international graduates staying in France; the Spanish equivalent (SEPIE, Ministerio de Universidades).
8. The Nuffic five-year stay rate for Italian nationals specifically. Only "Germany, Italy and Romania top the list" of origin countries by volume was captured.
9. School employment reports showing the share of graduates starting in the school's country (HEC "International Job Locations" graphic; ESSEC, Bocconi, RSM, St Gallen, Mannheim, WU, CBS, SSE, LBS MiM). Not extracted.
10. HESA Graduate Outcomes by domicile (EU vs UK vs non-EU) for business PGT graduates. Only Jisc's aggregate (13% vs 3%) was retrieved.
11. Housing-shortage statistics: CBS/ABF Netherlands housing deficit, the Swiss BFS vacancy rate (Leerwohnungsziffer) for Zurich and Geneva, Irish housing completions and rents. The BFS page could not be fetched.
12. Gulf specifics: UAE and Saudi personal income tax rules, the Saudi regional-HQ programme, Saudisation and Emiratisation quotas for graduate hiring, and the scale of MBB Middle East offices. All are practitioner claims in this file.
13. Singapore: Employment Pass minimum salary and the COMPASS points test (see places/visas-and-work-rights.md), and the share of MBB and bank graduate hires in Singapore who come from European schools.
14. The current status and impact of the 2026 US–Iran conflict on Gulf hiring. Only referenced via InterNations and Jisc; needs up-to-date news and official travel advice.
15. The Indeed Hiring Lab language data is from Sept 2023–Aug 2024. A 2025–26 update, if published, should replace it.

### places/visas-and-work-rights.md (21)

1. EU Settlement Scheme scope and closure for new arrivals (background knowledge; not fetched).
2. Immigration Skills Charge of £1,320 / £480 from 16 December 2025 (Fieldfisher, Morgan Lewis and Davidson Morris snippets).
3. HPI duration of 2 years (3 for PhD); B2 English from 8 January 2026; 8,000 cap from 4 November 2025 (Jobbatical and Fragomen snippets; Free Movement partly paywalled).
4. Whether HPI covers business-school degrees awarded by listed universities (Dauphine-PSL, TUM SOM), and that HEC (an IP Paris partner, not a member) is excluded.
5. Swiss "No to 10 million" initiative rejected 14 June 2026, 54.8% No (swissinfo and NPR snippets).
6. SEM figure of about 150–200 admissions a year under Art. 21(3) AIG (snippet of the SEM report).
7. Outcome in Parliament of the Swiss bill exempting non-EU graduates of Swiss universities from quotas; status of the EU–Swiss "Bilaterals III" package.
8. Scope of the €2,800.53 monthly condition on the French RECE card.
9. RESOLVED (round 6, 5 Oct 2026): Confirmed and consolidated in `visas_immigration/sweden/sweden_visas_immigration_guide.md`. Swedish post-study job-search permit under Utlänningsförordningen 5:1b lasts strictly 12 months for Bachelor and Master graduates with at least two completed semesters (60 ECTS credits) in Sweden (12–18 months for PhD graduates); foreign-qualified job-seeker permit is up to 9 months under Utlänningsförordningen 5:1a.
10. Ireland: Critical Skills and General Employment Permit salary floors for graduates.
11. Spain: length and renewability of the graduate job-search/entrepreneur residence permit (reported as 12 months, possibly longer).
12. Italy: permesso "attesa occupazione" / job-search permit for Italian master's graduates, conversion outside decreto flussi quotas, and the Blue Card threshold.
13. Denmark: establishment card for Danish graduates (reported 2–3 years), deadline to apply, and Pay Limit Scheme 2026.
14. Portugal: job-seeker visa and post-study rules; AIMA delays.
15. STEM designation of the Princeton MFin, Vanderbilt MSF, WashU MSF, Michigan Ross MM and Berkeley MFE.
16. Whether the H-1B $100,000 proclamation (expiring 21 September 2026 absent extension) was extended, and the status of the appeal in *California v. Mullin*. [RESOLVED in part 6 Oct 2026: extended to 21 September 2027; N.D. Cal. order of 30 Sep 2026 read; appeals pending; see US guide section 3.2.]
17. DHS proposals to restrict OPT or impose fixed-term admission for F-1 students, and their 2026 status. [RESOLVED in part 6 Oct 2026: the fixed-admission rule was published but its effective date is postponed by a court (14 Sep 2026); OPT is unchanged and an OPT-fees proposal is unpublished; see US guide sections 3.1 and 3.4.]
18. UAE Golden visa criteria for graduates (ranking, GPA, time since graduation) and standard work-visa practice.
19. Which employer types sponsor (banks, MBB and Big 4 yes; SMEs rarely) and quantitative evidence that needing a visa lowers hiring odds; UK register of licensed sponsors counts.
20. Settlement timelines: UK ILR (under review after the 2025 white paper), Swiss C permit, French 10-year card, Dutch 5-year PR, Irish Stamp 4, Swedish and Canadian PR routes.
21. Singapore post-study pass (a reported one-year long-term visit pass for local graduates).

### money/costs-and-funding.md (19)

1. Warwick MSc Management and MSc Finance fees for 2026–27 (not fetched; WebSearch budget exhausted).
2. SKEMA MiM, Católica Lisbon and WU Vienna fees (sites blocked or not reached).
3. MIT MFin, Princeton MFin, Duke MMS tuition and cost of attendance (MIT URL returned 404; others not reached).
4. Imperial MSc Management 16-month placement fee £48,500 and £125 application fee (search snippet only).
5. LSE deposit of £4,290 for MSc Management (search snippet only).
6. HEC 2026 intake: €57,700 + €2,000 non-EU (search snippet); the 2027 figures in the body were read from the page.
7. Cambridge MFin 2026/27 fee £60,000 and living £19,860 (search snippet only).
8. TUM programme-specific non-EU fee for the MSc Management and Management & Technology (range €4,000–6,000/semester verified; exact figure not).
9. Whether the German blocked-account figure changed for 2026 (DAAD page showed €992/month from 1 January 2025).
10. France (Campus France) and Switzerland (SEM/canton) proof-of-funds amounts.
11. Italian DSU/ISU amounts and ISEE thresholds for 2026-27; Bocconi4Access ISEE limits.
12. Bocconi's own Milan living-cost estimate; RSM, CBS, SSE, Mannheim, TUM and Nova city living estimates; Numbeo and HousingAnywhere rent data.
13. Whether Prodigy offers EUR or GBP loans to Europeans at European schools, and at what rate; Lendwise terms.
14. Which banks in Italy and France take part in the EIF Skills & Education Guarantee, and on what terms.
15. The French state-guaranteed loan (prêt étudiant garanti par l'État, Bpifrance) limits and partner banks, read from service-public.fr or Bpifrance.
16. GMAT Focus fee in 2026 (commonly cited as about $275; mba.com pages would not render).
17. Chevening, Fulbright Italy, DAAD, Swiss Government Excellence, Erasmus Mundus, Fondazione Rocca, Intesa Sanpaolo "per Merito", Master dei Talenti (Fondazione CRT), Collegio Italia and Fondazione Einaudi: amounts, eligibility and deadlines.
18. That private European schools match or raise scholarships in response to competing offers (forum and consultant claims; no primary source).
19. French legal minimum internship stipend (gratification) for 2026.

### money/salaries-and-roi.md (16)

1. CGE 2025 abroad starting salaries (Switzerland €84,202, UK €73,191, Germany €63,442), taken from the MiM in Europe summary. The primary CGE PDF was not opened.
2. CGE 2025 Île-de-France mean for business schools €43,071 against €36,095 outside (MiM in Europe). The CGE 2026 figures (€42,388 / €37,002) may cover all disciplines.
3. The Dutch 30% facility for 2027 onward. The planned partial reversal is not final (government.nl), and I recall a proposed 27% rate that I could not confirm.
4. Whether Beckham-regime tax is levied on gross pay or after social security, and whether Beckham applies to graduates who studied in Spain (the five-year non-residence rule counts from the move).
5. Italy: Lombardy regional and Milan municipal surcharge rates (1.73% / 0.8% assumed), employee tax credits falling to zero above €50k, and eligibility of returning Italians for the impatriati regime.
6. Swiss mandatory health insurance premiums in Zurich and Geneva for a 25-year-old. I did not fetch a primary source. Quellensteuer rates for B-permit holders compared with ordinary assessment.
7. Geneva net pay at CHF 90–120k. The tariff is in PwC but not calculated here.
8. The M&I London IB analyst base (£70–90k) and total compensation (£100–150k). The page is undated and a single blog. It needs employer-stated or eFinancialCareers survey confirmation.
9. Swiss IB analyst pay in Zurich, and Frankfurt/Paris/Milan analyst pay. Not found.
10. Pay compression: Swiss and German seniority-based scales against London/US progression at years 5–15. No primary data found.
11. How often Swiss domestic banking and corporate graduate roles require German or French.
12. The route for non-EU graduates of Swiss universities to stay and work (AIG Art. 21 para 3, six-month job search). Check in places/visas-and-work-rights.md.
13. HEC Paris MiM starting salary (€63–67k reported in secondary blogs), ESSEC, Bocconi salary, Mannheim, RSM, CBS, Imperial and LSE employment reports. Not fetched.
14. HESA Graduate Outcomes/LEO business postgraduate earnings; NACE US starting salary for business master's; SCB/Civilekonomerna Sweden; Destatis/Stepstone Germany; CBS NL. Not fetched.
15. Published ROI studies (GMAC Prospective Students/Corporate Recruiters salary data, Poets&Quants, ifo/IW). Not fetched.
16. FT methodology details: sector weighting, PPP source, and whether the top and bottom salaries are trimmed.

### getting-in/employer-pipelines.md (15)

1. **Porsche–HfWU cooperation (2012) and "Porsche Automotive Campus" (2013)** at HfWU Geislingen. Seen in search snippets only (autohaus.de and HfWU material). Not read in full.
2. **Mercedes-Benz–HfWU Nürtingen hiring link.** No primary source found. Check HfWU's LinkedIn alumni page (employer filter) and HfWU press releases.
3. **Mercedes-Benz severance programme:** about 4,000 leavers between April 2025 and March 2026, mainly engineers, IT and admin. Search snippet only.
4. **Bosch:** plans to cut about 22,000 positions in its mobility division in Germany; "no dismissals until 2027" agreement. Search snippets (produktion.de, Stuttgarter Zeitung, SRF). Not read.
5. **DHBW Stuttgart "around 80% taken on by their dual partner".** Search snippet from a 2016 DHBW Stuttgart press release. Not read.
6. **BMW Group vocational training cooperating with Hochschule München and OTH Regensburg** (Digitalisierungsmanagement plus Business Informatics). BMW press PDF snippet only.
7. **Hochschule Esslingen–Porsche/Daimler ties** (practical semester, Daimler-funded professorship 2015). Search snippets only.
8. **ESSEC Grande École: about 180 apprentices a year, 25–30% of a cohort.** Search snippet. The ESSEC article read gives only total apprentices (1,358).
9. **HEC Paris MiM class of 2025:** financial services 28%, consulting 24%, tech 11%; top recruiters McKinsey, BCG, Bain, J.P. Morgan, Goldman Sachs, LVMH, Kering, Amazon. Search snippet; HEC page renders stats as images.
10. **Share of HEC/ESSEC/ESCP graduates joining CAC 40 firms.** Not found in any source.
11. **UK target-university lists** (which universities top-100 employers visit most). High Fliers 2026 report not readable (flipbook). Check the PDF or Bright Network data.
12. **Deloitte UK school/university-blind recruitment (2015) and PwC UK dropping UCAS points.** Widely reported; primary pages (Guardian, BBC) blocked for automated fetch.
13. **StepStone (2018): 34% of Werkstudenten taken on permanently vs 50% of interns.** Search snippet; stale.
14. **CGE 2025 figures quoted in snippets (30.1% apprentices, 85% on CDI).** The 2026 primary report was read; the 2025 figures were not checked against the 2025 PDF.
15. **LUISS, Cattolica, Politecnico, Esade, IE, CBS, HSG destination-by-employer data.** Not obtained.

### careers/finance.md (19)

1. Whether London first-year analyst base salaries moved above the £70k set in 2021–22 (confirmed for JPMorgan in Jan 2022) during 2024–26 — no fetched source gives a current bank-by-bank base; PrepLounge (Aug 2026) quotes £48k–69k without method.
2. Goldman 2019 intern class 42% STEM, 38% business — search snippet of goldmansachs.com careers blog (403 on fetch).
3. London office degree splits (e.g. JPMorgan: economics 24%, finance 18%, engineering 17%; Goldman: economics 40%, finance 36%, engineering 8%) — search snippet of a 2016 eFinancialCareers article on Deutsche/UBS/Credit Suisse universities.
4. Summer-analyst-to-full-time conversion rates (commonly quoted 70–90%) — forums and coaching sites; no bank disclosure found.
5. Share of London analyst classes holding a master's degree — no source found.
6. Goldman's 2021 "Saturday rule" reaffirmation and the ~100-hour junior survey — CNBC page returned 403.
7. Reports that banks could cut junior analyst hiring by up to two-thirds due to AI — widely repeated; primary on-record source not found this session.
8. Specific Goldman/JPMorgan/Morgan Stanley statements on AI for pitchbooks and modelling — not opened this session.
9. Paris IB analyst pay (~€60k base, ~€85k total) and Frankfurt medians (~€100k) — PrepLounge and JobMentis snippets.
10. Italian IB analyst medians (~€41k junior, ~€69k all levels) — JobMentis snippet.
11. MPS's final stake in Mediobanca (86.3% after the tender reopened 16–22 Sept 2025), settlement on 29 Sept 2025, and Alberto Nagel's resignation. These come from Retail Banker International, Bloomberg and Global Finance snippets; the change of control itself is confirmed by Mediobanca's results release.
12. About 12 Mediobanca private-banking managers moving to Deutsche Bank Italy — Börsen-Zeitung snippet.
13. A planned merger of Mediobanca into MPS (shareholders' meeting on 29 October) — Teleborsa related-article headline only.
14. Evercore London starting salary of £63k vs $120k in New York (older reporting) — search snippet of a City AM / Guardian-sourced article.
15. Paris post-Brexit headcount gains at US banks — not sourced this session.
16. London vs Paris/Frankfurt net-pay gap due to social charges — older eFinancialCareers reporting, snippet only.
17. CAIA cost, structure and pass rates — the CAIA page could not be read.
18. FRM pass rates (November 2025) — shown as an image on garp.org; not transcribed.
19. The share of HEC MIF graduates working in London vs Paris — not on the fetched pages.

### careers/consulting.md (17)

1. McKinsey Germany bachelor's hires (Junior Fellow) move into the Fellowship after one year (e-fellows.net McKinsey career page; search snippet only). The paid-leave terms (up to three years off, first year paid) are confirmed only from an older e-fellows interview (interviewee joined in 2009), so current terms need checking on karriere.mckinsey.de.
2. MBB deferred some 2023 MBA start dates to 2024; Bain offered $40k to work at a non-profit or $30k for education/language study (Management Consulted, P&Q, Clear Admit, AFR; search snippets only). The AFR headline says "McKinsey pays graduates to defer their start date" (Mar 2023).
3. Accenture cut 11,000+ staff in three months to Aug 2025; headcount fell from about 791k to 779k; $865m restructuring; Julie Sweet quote on reskilling (CX Today, HR Grapevine, Storyboard18; snippets only).
4. UK Big 4 graduate intake: KPMG 1,399 (2023) → 942; Deloitte 1,700 → 1,400; EY 1,800 → 1,600; PwC 1,600 → 1,500; Big 4 graduate postings down 44% in 2025 (Scottish Financial News / People Matters; snippets only). Note that PwC's 1,500 → 1,300 is confirmed for a later year by Consultancy.uk.
5. Over 75% of McKinsey's about 43,000 staff use Lilli monthly; about 30% time saving (Fortune June 2025 and others; snippets only).
6. BCG Deckster used 450,000+ times since March 2024; saves 2–3 hours per deck (Business Insider, 2026; snippet only).
7. McKinsey has about 20,000 AI agents (Sternfels on HBR IdeaCast; snippet only).
8. Management Consulted's 2026 report says US starting salaries were flat, "only the fourth time in the last 16 years", and names AI productivity and low attrition as the drivers (MC salary report page returned 403; snippet only).
9. Dubai MBB BA pay of AED 22–25k a month plus sign-on, Big 4 about 40% lower (PrepLounge forum; snippet only).
10. Roland Berger Germany entry base €60,000–80,400 plus €5–16k bonus (RoadToOffer; snippet only). Conflicts with PrepLounge's €72k.
11. BCG hired about 1,000 staff amid AI demand (Bloomberg Tax headline; snippet only).
12. McKinsey Solve format and duration (mckinsey.com could not be reached from this session); whether BCG's Casey chatbot case is still used anywhere (BCG's global interview page does not mention it); Bain's and Roland Berger's online tests; pass rates; referral effects; school lists.
13. Language requirements at MBB Paris, Milan and Madrid; Arabic or nationality preferences at Gulf offices; Saudi Arabia's Saudization (Nitaqat) quotas for consulting occupations, which I recall being introduced in 2025 but did not verify on the Saudi Ministry of Human Resources (HRSD) site. German requirements for DACH are now confirmed (section 6).
14. Milan, Madrid and Amsterdam entry pay; Zurich level-specific pay (not fetched).
15. Hours and burnout data; MBB Europe travel model (Roland Berger's four-day on-site week is confirmed); exits to PE and corporate strategy; average tenure (not fetched).
16. BCG VA conversion rate into FAST FORWARD offers (not published on the page fetched).
17. Bain Europe entry titles and internship programmes (bain.com internship pages blocked by bot protection).

### careers/marketing.md (22)

1. **L'Oréal UK Marketing Management Trainee terms** (£35,000, 18 months, three rotations, up to 40 graduates, within two years of graduating). Seen in search snippets of careers.loreal.com job 218455 and Bright Network; both pages returned 404/403.
2. **Unilever UFLP European marketing terms** (max 24 months' experience after graduation, minimum bachelor's, mobility, NL start 1 Sep 2026 with NL work eligibility, France 36 months). Seen in careers.unilever.com snippets; pages returned 404.
3. **LVMH SPRING eligibility** (master's degree, max 3 years' experience, English business fluency, French "valuable", no luxury experience needed). Seen in lvmh.com and GradConnection snippets; the fetched LVMH page did not state eligibility.
4. **P&G France/Italy brand internships** (Dijon €1,600/month; Rome). pgcareers.com snippet only.
5. **Ferrero ABM curricular internship requirements** (master's in Marketing/Economics/Communication, Italian and English) and the graduate path structure (one year ABM plus one year POS). ferrerocareers.com snippets; pages returned 404.
6. **ESSEC Master in Marketing Management, Cergy: 92% employed, €51,000 average salary (2025 Career Survey).** Search snippet only.
7. **HEC Master in Marketing: average $52,000 salary, 20% tech, 20% consulting, 13% media (2022).** GMAC snippet only; stale.
8. **Bocconi MSc Marketing Management: 95% employed one year after graduation, 24–27 days to job.** Search snippet only.
9. **Generic junior brand pay: France €27,000–€35,000 (chef de produit junior); Italy brand manager RAL €35,000–€45,000.** Career-guide snippets (letudiant.fr, cned.fr, quifinanza.it); not employer-specific.
10. **Unilever UK Global ABM £35,000–£45,000; interim ABM up to £50,000.** Marketing Monk job-board snippet.
11. **P&G Geneva ABM pay in CHF.** Not found; Glassdoor pages not fetchable.
12. **Omnicom post-merger job cuts beyond IPG's 3,200** (reported plans for thousands more cuts and retirement of agency brands). Not opened; the Adweek primary was cited only via Wikipedia.
13. **FMCG corporate job cuts in 2024–25.** P&G's 7,000 cuts (June 2025) and its 108,000 → 104,000 headcount, and Unilever's 7,500 cuts (March 2024), were read only through Wikipedia summaries. The CNN article returned HTTP 451 and the 10-K filings were not opened. Whether P&G's cuts were limited to non-manufacturing roles (widely reported) is unconfirmed. Unilever's reported shift to about 300,000 influencer creators in 2026 appeared on Wikipedia without a visible citation.
14. **WPP's FT headline linking the CEO change to AI** (9 Jun 2025). Cited via Wikipedia; FT paywalled.
15. **Inside LVMH: 125,000+ learners since 2021, 30 hours, twice a year.** Search snippet.
16. **Brandstorm 2026: 350,000+ participants, 45 global finalists.** Secondary press (ProPakistani); L'Oréal's 2026 page not opened.
17. **Luxury entry pay in Paris and Milan, and Italian regional minimums for extracurricular *tirocini*** (e.g. Lombardy). Not verified. The French floor (€4.50/hour) was verified. Typical Paris luxury internship pay above that floor is unknown.
18. **Tech product-marketing entry pay in London, Dublin and Amsterdam.** Not verified.
19. **Growth of retail-media spend in Europe** (IAB Europe AdEx, WPP Media "This Year Next Year"). Pages returned 404 or were not reached.
20. **ABM → BM → Marketing Director timelines** (about 2–3 years to BM, 8–12 years to director). Practitioner pattern; no primary employer page found.
21. **Stanford "Canaries" breakdown for marketing-specific occupations.** The fetched summary covers AI-exposed occupations generally; marketing-specific figures not confirmed.
22. **Skill-shift market claims:** that SQL is baseline for analytics, CRM and retail-media entry roles; that MMM and incrementality testing have moved in-house as privacy changes weakened user-level attribution (including Google's open-source Meridian MMM and Meta's Robyn); and that vendor certificates carry little weight in FMCG and luxury screening. These reflect practitioner commentary that was not fetched in this session.

### careers/accounting-and-corporate.md (22)

1. Combined UK Big 4 graduate and apprentice intake 6,500 (2023) → 5,400 (2025). Seen in search summaries of Accountancy Today (24 Jun 2025, https://www.accountancytoday.co.uk/2025/06/24/big-four-firms-cut-grad-jobs-in-favour-of-ai/); page returned 403.
2. EY UK 2026 intake. A search summary claimed "909 graduates and 179 apprentices" for 2026, but the figure appears to come from a 2021 EY release; not used.
3. Big 4 Italy, Germany and France graduate intake numbers 2024–26. Not found from a primary source.
4. Big 4 starting salaries by country (UK, Italy, Germany, France) and by qualification. No employer-published figures were fetched; check each firm's graduate pages and national salary surveys (e.g. ICAEW salary survey; AlmaLaurea for Italy).
5. Big 4 UK training-contract clawback terms (repayment of exam fees on early exit) and study-leave entitlements.
6. Progression timings (associate → senior around 3 years, manager around 5–6 years). Practitioner lore; no employer page read.
7. "Pyramid to diamond" as an on-record Big 4 executive statement; seen only in Substack and blog commentary (e.g. https://olikhatib.substack.com/p/ai-and-the-collapse-of-the-big-four).
8. PwC US plan to cut entry-level hiring by almost a third over three years (Fortune, secondary); confirm from a PwC statement.
9. ACCA pass rates by exam (latest sitting) and ACCA's own surveys on AI and early-career roles.
10. CIMA fees, exemptions for business master's, and relevance for controlling roles.
11. Italy: requirements for the esame di Stato for dottore commercialista (laurea magistrale LM-77, 18-month tirocinio) and registration as revisore legale (MEF register); pass rates.
12. Germany: Steuerberaterprüfung pass rates (BStBK statistics; commonly cited as around half, not confirmed) and Wirtschaftsprüfer exam requirements; controlling demand and pay (Destatis, Bundesagentur für Arbeit).
13. France: DSCG exemptions for master's CCA; DEC stage length and pass rates.
14. Nestlé, Unilever (UFLP), Shell, Enel, Eni, Generali, Allianz, BMW graduate programme rules and pay (pages blocked or script-rendered).
15. Blue Book monthly grant amount (believed to be roughly €1,700 in Brussels in 2025–26; not confirmed) and applicants per session.
16. EPSO AD5 starting basic salary.
17. Banca d'Italia concorsi requirements (degree class, minimum grade, e.g. 105/110 or 110/110) and recent numbers of places.
18. Bundesbank and Banque de France graduate recruitment routes.
19. OECD Young Professionals Programme eligibility (age/experience) and IMF Fund Internship Program terms (pages returned 403).
20. Poland and other EU nearshore delivery centres taking UK or continental Big 4 audit work.
21. Layoff and job-security data by employer type from national statistics.
22. Whether any Big 4 firm offers a higher entry grade or pay for master's holders in audit.

### careers/tech-business-and-startups.md (15)

1. Layoffs.fyi global totals: 262,735 tech employees laid off in 2023 and 152,922 in 2024 (seen in a WebSearch snippet citing NerdWallet; layoffs.fyi loads figures by script, so they could not be read).
2. Google BOLD EMEA "Business Analyst" internship: penultimate or final-year bachelor's or master's students in EMEA, at least 13 weeks in summer 2026, deadline 24 October 2025, no immigration sponsorship (search snippet only).
3. Google Dublin Account Strategist roles: bachelor's degree plus about 2 years' experience in digital advertising or sales, plus a market language. Associate Account Strategist is the graduate-level variant (ZipRecruiter and job-aggregator snippets, 2026).
4. Revolut Graduate Programme has six streams: Engineering, Product Design, Operations, Product Owner, Data Science, Information Security (search snippet of revolut.com; page returned 403).
5. Revolut culture: reports of a demanding, metrics-heavy culture and high attrition (press and forums; not read this round).
6. Revolut employee equity: recent secondary share sales for employees and their valuation (not read; revolut.com/news returned 403).
7. Number of APM programmes in Europe and their degree mix (Google APM, Meta RPM, Uber APM Amsterdam, others). The Google APM page loaded only navigation.
8. Typical European SaaS SDR and AE OTE levels and base-to-variable splits (for example 50/50 or 60/40). No primary source was read.
9. Founder's-associate pay, equity and progression data in Europe (practitioner blogs and Sifted, not read this round).
10. VC analyst backgrounds (ex-banking, ex-consulting, ex-founders) and annual junior hiring volume at European VC firms.
11. Microsoft, Meta, Uber, Zalando, Delivery Hero, Klarna, Adyen and Satispay graduate programme details (pages returned errors or rendered only by script).
12. Amazon Finance Leadership Development Program (FLDP) and Business Analyst graduate routes in Europe.
13. EU Pay Transparency Directive (transposition deadline June 2026) effect on salary ranges in EU tech job ads. Not checked this round; see places/visas-and-work-rights.md or money/salaries-and-roi.md.
14. European startup failure rates by cohort (for example, the share of seed-funded startups that reach Series A).
15. Mistral and Google DeepMind open-role counts by function (their boards were not readable via public APIs).

### getting-in/recruiting-calendar.md (15)

1. **JPMorgan June 2025 memo details**: termination of incoming US analysts who accept a future-dated offer before joining or within 18 months, and faster promotion to associate (2.5 years). Seen in a search snippet of MarketBeat (https://www.marketbeat.com/articles/jpmorgan-will-fire-junior-bankers-over-a-practice-that-ceo-jamie-dimon-calls-unethical-2025-06-09, returned 404) and ibinterviewquestions.com (403).
2. **Any JPMorgan or Goldman statement on ending or delaying early recruiting of summer interns** (as opposed to PE offers). Not found in fetched sources.
3. **Goldman Sachs and JPMorgan London 2027 opening dates and deadlines.** Goldman's role page (higher.gs.com/roles/170929) did not render; JPMorgan's programme pages give no dates.
4. **BofA London 2027 opening date of 1 September 2026**: search snippet only; the fetched page gives only the deadline.
5. **Citi London "posting date 29 Sep 2026"** may be a re-post date, not the original opening.
6. **MBB London and European 2027 deadlines** (McKinsey, BCG, Bain): McKinsey and BCG pages refused automated access.
7. **Month when Unilever UK UFLP, P&G and L'Oréal open**: brochures say "once a year" without a month; the September–November consensus is unverified.
8. **French stage maximum of six months per academic year per host** (Code de l'éducation L124-5): well known but not fetched.
9. **Paris, Frankfurt and Milan off-cycle and stage timing patterns** (Sept–Jan recruiting for Jan–Jul starts): practitioner consensus only.
10. **Off-cycle conversion rates** in London: not published by any bank read.
11. **Imperial, LBS, Warwick, Oxford and Cambridge career-service guidance on pre-arrival timing**: pages not read.
12. **German share of master's graduates hired by their internship employer**: no national statistic found.
13. **Spring-week offer and return-offer rates** (51% and 20%): Trackr data via eFinancialCareers, cited from careers/finance.md, not re-fetched.
14. **Market shares of test vendors** (SHL, Aon, Cappfinity, Arctic Shores, HireVue): no survey found.
15. **Unilever UK assessment format names** (the brochure mentions a profile assessment; text was partly garbled in extraction).

### getting-in/admissions.md (12)

1. GMAT volumes for TY2025 (July 2024–June 2025): GMAC's "Current GMAT Volume" page needs a login; the TY2025 Geographic Trend Report URL returned 404.
2. That HEC states later MiM rounds are more competitive (the calculator's regime E). Not found on the HEC admissions pages read on 30 Sep 2026.
3. UK FOI master's offer rates for LSE, Imperial and Warwick (WhatDoTheyKnow). Not read this session.
4. Internal-candidate shares at St. Gallen (HSG bachelor's to master's), Mannheim, RSM and Warwick.
5. US programmes (MIT MFin, Princeton MFin, Duke, Vanderbilt, WashU) requiring or preferring a four-year bachelor's, and how they treat 180-ECTS degrees.
6. HEC, LBS, INSEAD, IE and ESSEC written policies on generative AI in essays, and any use of AI-detection software.
7. Admissions-director interviews and blog posts (HEC, LBS, ESSEC, Bocconi, St. Gallen, IE, Imperial) on common applicant mistakes.
8. The HEC incoming-class median GMAT of 710 and "recommended Focus 645–655", which the calculator tags as official; not re-read this session.
9. TAGE MAGE scale and sessions (official FNEGE page not read).
10. GMAT Focus exam fee (about $275–300); not read at source.
11. Imperial's deposit refund policy (the page read covers deferral carry-over, not refunds).
12. LBS MiM average GMAT (third-party figure ~690, old edition); LBS publishes none.

### decisions/timing-and-sequencing.md (18)

1. **ESSEC gap-year rules and any numeric experience cap.** The ESSEC page read describes tracks and an 8-month experience requirement but no cap or separate gap year.
2. **Whether LBS's "graduated within the last two years" counts from the bachelor's or from a later master's** (relevant to Italian LM graduates). Not stated on the FAQ page.
3. **Columbia Deferred Enrollment terms**: the page returned 403. The program is widely reported to admit final-year undergraduates and straight-through master's students for a 2–5-year deferral.
4. **Kellogg Future Leaders eligibility for master's students and deferral length**: not shown on the page read.
5. **Whether LBS or INSEAD run a deferred-MBA scheme**: none found; not confirmed either way.
6. **FT Masters in Management 2025/2026 average age by school**: the ranking page did not load.
7. **Share of M7 MBA classes holding a prior master's degree**: not on the HBS or Stanford profile pages read.
8. **Whether MBA admissions discount MiM content**: only advisor claims, no primary source.
9. **UK Graduate visa "only once" rule** (you cannot get a second Graduate visa after a first): widely reported; the eligibility subpage was not read in full today.
10. **French convention de stage requirement during gap years**: standard practice, not confirmed on a school page today.
11. **German Praxissemester / Urlaubssemester practice at Mannheim and TUM** and whether employers value it: not confirmed from a university page.
12. **HBS 2+2 share of international applicants in recent cohorts**: the only figure found (79% domestic) is from 2017 (Poets&Quants for Undergrads).
13. **Kahn (2010) numerical estimates** (widely cited as a large initial wage loss per point of unemployment, still visible after 15 years): only the abstract was read.
14. **Graduate-scheme graduation-date windows** (for example the ECB graduate programme or Unilever Future Leaders): pages not reached.
15. **Age-discrimination law as the reason schemes avoid age caps** (EU Employment Equality Directive 2000/78/EC; UK Equality Act 2010): the EUR-Lex page did not load.
16. **Typical age range of London investment-banking analyst classes (often said to be 22–24)**: advisor claim, no primary source read.
17. **How long graduate-hiring troughs last after a recession starts**: not quantified in the papers read; needed to judge the "hide in grad school" timing.
18. **Warwick MSc Management experience cap**: the entry-requirements page returned 404.

### getting-in/breaking-in.md (12)

1. French testing studies (DARES/ISM Corum 2021 on large firms; later national testing waves 2023–24): numbers not verified because the DARES site returned a CAPTCHA. Seen referenced on the ISM Corum employment page (https://www.ismcorum.org/etude-formation/nos-domaines-dexpertise/emploi/).
2. "Referred candidates are 4x more likely to be hired" (LinkedIn): only seen in secondary sources (HR Dive 2018 citing TechCrunch; search snippets). Original LinkedIn source not found.
3. Whether McKinsey, BCG or Bain run a formal referral route for student applicants: not found on careers pages.
4. The Ladders eye-tracking study (2018, 7.4 seconds; 2012, 6 seconds): the PDF returned 403 and was not read.

5. Italian and French CV norms (photo, date of birth, grades on the CV) were not verified from a primary source. The Germany page on Make it in Germany (https://www.make-it-in-germany.com/en/working-in-germany/job-search/application) blocked automated access.
6. Tier-2 consulting → MBB moves: widely described on consulting forums and prep sites, but I found no readable source with numbers. Management Consulted's target-school page returned 403.
7. Marketing → consulting pivot routes: no specialist or primary source read.
8. L'Oréal Brandstorm prizes and hiring terms (for example, whether finalists are offered internships): https://brandstorm.loreal.com/en returned 403.
9. Conversion rates from off-cycle internships to full-time offers: only a single forum comment (about 80% at one boutique, about 50% at one bulge bracket) on the M&I off-cycle article. Anecdotal only.
10. Whether large banks and MBB weight the most recent degree over the undergraduate degree in CV screening: no on-the-record employer statement found.
11. Netherlands name-discrimination field studies (for example, SCP work): not read; only the Quillian et al. meta-analysis ranking is used.
12. LinkedIn "21x more profile views with a photo": widely repeated on blogs; LinkedIn's help page now says "up to 2X".

### places/italy-playbook.md (13)

1. How Italian employers perceive Masters universitari di I livello vs a laurea magistrale in hiring screens. No primary employer source was read.
2. Whether the full AlmaLaurea 2026 Rapporto (survey 2025) updates the national Italy-vs-abroad pay figures (EUR 2,900 vs 1,800). The 2026 press release does not repeat them, although a round table on "Laurea e lavoro all'estero" was held. This file uses the 2025 Rapporto.
3. An economics-only (gruppo Economico) Italy-vs-abroad pay split. AlmaLaurea's per-course tool shows the share abroad but not pay by location.
4. FT Masters in Management 2025 ranks for Bocconi, Polimi, LUISS and Cattolica. The FT page returned errors. The ranks are cited in decisions/school-types-and-accreditation.md.
5. The cause of the 5-year employment-rate jump from 91.6% (survey 2024) to 96.3% (survey 2025) for economics LMs. It may be a methodology change.
6. Whether the de minimis clause (art. 225 c. 7, Reg. EU 2023/2831) caps the impatriati benefit for individual employees in practice.
7. Whether a pre-departure *internship* or *curricular stage* with an Italian group entity counts as "impiegato" for the 7-year rule.
8. IRPEF brackets for 2026 (23/35/43% assumed; the 2026 budget law may have changed the middle bracket), and therefore the size of the EUR 9–11k a year illustration.
9. Whether Milan IB boutiques (Mediobanca, Equita, Lazard, Rothschild, Vitale), MBB Milan and luxury/FMCG/energy graduate programmes recruit mainly from Bocconi, Polimi and LUISS. This was widely asserted, but no employer page was read here.
10. School-specific conversion of Italian 110/30 marks (for example LSE and Imperial 2:1 equivalents).
11. Funding details: Bocconi ISEE fee brackets, DSU thresholds 2026/27, Intesa "per Merito" terms, INPS Master universitari call 2026, and Fondazione CRT "Talenti", Collegio Carlo Alberto and Fondazione Bracco scholarship amounts and eligibility for foreign masters.
12. Regional minimum indennità for tirocini extracurricolari (for example Lombardia, Lazio, Piemonte, Emilia-Romagna, Veneto) and the status of the 2025–26 national reform proposals.
13. Agenzia Entrate Risposta n. 82 of 20 March 2026 on minor children already resident in Italy (seen only in a search snippet from Eutekne).

### evidence/trends.md (4)

1. ISE 2025 sector ratios for digital/IT (205) and finance/professional services (188). The 290 FMCG/retail figure is verified on ise.org.uk; the other two come from a search summary.
2. Big-4 UK intake figures (KPMG 1,399 → 942, etc.). Reported by Scottish Financial News without a named dataset; likely originates in an FT/City AM analysis.
3. MBB US starting pay frozen for a third year in 2026 ($135–140k undergraduate; $270–285k MBA). Seen only in secondary aggregations.
4. The Gulf hiring expansion figures (56% of Middle Eastern employers expecting more business graduates in 2025). From Gulf News / GMAC-attributed reporting; primary not fetched.

### decisions/decision-framework.md (5)

1. That rank gaps of under ~15 places are "noise" rests on one year-pair of FT data (2025→2026). It needs a multi-year volatility check (decisions/school-types-and-accreditation.md).
2. The "apply within 2–3 weeks of opening" advantage is unquantified anywhere we found (getting-in/recruiting-calendar.md).
3. Luxury entry pay and tech product-marketing pay are unverified (careers/marketing.md).
4. City pay ratios for consulting (MBB vs Big 4 by country) come from a single aggregator family (careers/consulting.md).
5. All source-file "Claims to verify" sections are consolidated in verification/claims-to-verify.md.

### product/product-map.md (4)

1. Willingness to pay for a "decision season" pass and its price point. Needs a fake-door test.
2. Search demand for the myth topics (e.g. "EU citizen UK graduate visa", "laurea magistrale vs master"). Needs keyword research in EN and IT.
3. Whether schools allow structured reuse of employment-report figures with attribution. Needs a check of each report's terms.
4. Whether the existing print/calendar battle plan can be extended to multi-target plans without a backend. Needs a technical spike.

---

**Total open items across the original files: 296.**

## 7. Added 2026-10-01 (Gemini comparison and new files)

New priority items:
- **P21:** the full CSEA "not seeking employment" category list and the current standards text. It underpins the denominator critique; cseaglobal.org returned 403.
- **P22:** the UK deposit cap after the Renters' Rights Act 2025, and the Netherlands/Switzerland student work-hour rules (used in places/student-logistics.md).
- **P23:** a bachelor's-only vs master's salary counterfactual by country and sector, for the ROI tool (decisions/should-you-do-a-masters.md).
- **P24:** every Gemini lead listed in product/gemini-comparison.md §5, before any of it reaches the site.

### evidence/how-numbers-mislead.md (5)

1. The full list of CSEA "not seeking employment" categories and the current CSEA standards text (cseaglobal.org returned 403; LBS confirms that sponsored students are excluded).
2. The TBS salary-coaching allegation outcome: whether the FT or any regulator made a finding (only Poets&Quants reporting read).
3. IIM Ahmedabad's actual median starting pay in INR and USD for the same cohort as the FT figure (Poets&Quants figure, not primary).
4. Whether GMAT/GRE class-profile averages exclude test-waived admits at the schools in the calculator (asked as a question; not verified for any school).
5. The future rate path of the Dutch 30% facility (27% from 2027 reported, not shown on the Belastingdienst page read on 2026-10-01).

### product/gemini-comparison.md (5)

1. The full CSEA "not seeking" category list (cseaglobal.org blocked).
2. The Dutch non-EU student work rule (16 hours a week, or full-time in June–August, with an employer-obtained TWV). This is common knowledge, but the IND page URL tried returned 404.
3. The UK deposit cap (5 weeks' rent where annual rent is under £50,000) after the Renters' Rights Act 2025. The Tenant Fees Act guidance page is withdrawn.
4. Free health coverage for non-EU students in France via etudiant-etranger.ameli.fr (ameli page read; "free" not stated).
5. All Gemini leads in §5.

### decisions/should-you-do-a-masters.md (3)

1. A bachelor's-only vs master's salary comparison for business graduates by country (AlmaLaurea first- vs second-level by class; HESA LEO for the UK; CGE has master's only).
2. The share of UK graduate schemes in finance and consulting that give a higher grade or pay for a master's (no source found).
3. European estimates of the master's premium net of selection (no study found).

### places/student-logistics.md (7)

1. UK deposit cap after the Renters' Rights Act 2025 (the Tenant Fees Act guidance page is withdrawn).
2. Netherlands non-EU student work rule (16 h/week or full-time June–August, with a TWV).
3. Swiss term-time work rule for non-EU students (15 h/week after 6 months).
4. German statutory student health insurance monthly cost (2026).
5. France: whether non-EU student health affiliation is free; the CVEC amount for 2026–27.
6. Italy and Spain student work limits and rental deposit caps (Italy: L. 392/1978 art. 11 reportedly caps deposits at 3 months).
7. Dutch universities' housing warnings (Gemini lead).

**Items added: 20. Running total: 316.**

## 8. Added in Round 2 (2026-10-01/02)

New priority items from Round 2:
Final statuses for P25–P32 after Round 3 are in section 4.1.

- **P25:** HESA graduate outcomes and supply for UK business master's (site blocks automated access; only press summaries seen) — evidence/base-rates-and-failure-modes.md.
- **P26:** the UN Secretariat status of Italy (over-/within-range/under-represented) and the YPP country list — careers/public-policy-and-academia.md.
- **P27:** Gulf programme eligibility pages (PIF, Mubadala, MoHRE, Qiwa returned 403): confirm nationals-only status first-hand — places/gulf-and-central-eastern-europe.md.
- **P28:** the Greek Art. 5C return regime (5-of-6 vs 7-of-8 years; sources conflict) — places/origin-countries-eu.md.
- **P29:** primary EU legal texts (EUR-Lex was blocked): Consumer Rights Directive Arts 14/16 as amended, GDPR Art. 9, ePrivacy — product/competitors.md. A lawyer must review before any paid launch.
- **P30:** UK earned-settlement reform (consultation closed 12 Feb 2026; policy expected before Feb 2027; transitional protection undecided) — decisions/long-horizon-careers.md.
- **P31:** the UK going-rate table second column for SOC 2134 (£40,000) vs the 70% new-entrant rule (£38,300) — careers/tech-data-and-ai.md.
- **P32:** Chevening FAQ wording on the Graduate route; Fulbright Italy award figures — money/scholarships.md.

Every Round-2 file's own list:

### careers/healthcare-and-pharma.md (17)

1. Bocconi MiM "Healthcare & Pharma 6%" and FT 2025 industry split. Seen on mimineurope.com (Bocconi MiM salary page).
2. Large pharma cut more than 22,000 jobs in 2025, with company numbers (Merck about 6,000, Pfizer 6,000 to 75,000, CSL 15%, Teva about 2,900). Seen as a Fierce Pharma snippet (page returned 403).
3. Novo Nordisk headcount about 69,500 at end 2025, about 2,000 hires in 2026, and about 66,000 by Sept 2026. Seen in HRKatha/Techleap snippets.
4. Bayer headcount 102,048 (Q2 2023) and 89,556 (Q2 2025) and 12,000+ cuts under DSO. Seen in BioSpace snippet.
5. Novartis cuts: up to 550 jobs at Stein and up to 130 in Basel by end 2027. Seen as swissinfo/bluewin snippets.
6. US-Swiss tariff framework (39% to 15%, $200bn pledges, Roche $50bn, Novartis $23bn). Seen in Al Jazeera 14 Nov 2025 and Pharma Manufacturing snippets.
7. Panda International 2026 survey (64% of biopharma organisations recruiting in late 2025; 41% expect growth). Seen as a snippet, page not opened.
8. Entry-level eligibility details for Sanofi (Spain/Budapest paths), GSK Future Leaders (commercial stream), AstraZeneca IBEX, Boehringer Ingelheim (DISCOVER Commercial & Strategy; Marketing & Sales trainee), Bayer, Chiesi, Menarini, Recordati, J&J, Pfizer EMEA, Merck KGaA.
9. IQVIA, ClearView, L.E.K., ZS and Trinity degree requirements (all seen as snippets; ClearView page 410 Gone).
10. Whether large pharma pays above the IG BCE scale to business graduates, and which collective-agreement group a business master's graduate enters.
11. Entry-level pay for business roles at Novartis and Roche in Basel (any source).
12. Whether the Italian "informazione scientifica" role requires a life-science degree (the Farmindustria annex lists regional visit rules only).
13. Basel-Stadt tax and rent versus Zurich proxy; Swiss mandatory health insurance level for a single adult (the CHF 400 is an assumption).
14. Any statistic on pharma graduate-hiring volumes, programme sizes or acceptance rates.
15. Whether any school (HSG, HEC Lausanne, ESSEC, SDA Bocconi) publishes pharma/healthcare placement shares.
16. Date mismatch between Novo's programme page ("applications open November 2026") and application page (6 Dec 2026).
17. "Over 30,000 healthcare professionals in 10 km of Basel" (Gemini claim; source Basel Area Business & Innovation not found).

### careers/commodities-and-energy.md (13)

1. FSO release of 18 Nov 2025 (CHF 19.2bn, 2.3%, canton split): seen only through blue News; the FSO/Federal Council text was not opened.
2. SuisseNégoce's current employment (35,000) and global market shares: not found on a SuisseNégoce page (the site returned no figures); seen in swissinfo, 2023.
3. Cantonal job split (Geneva 44%, Zug 21.4%, Ticino 9.5%): search snippet, source not identified.
4. Gunvor programme length, intake size and eligibility for non-EU: snippet and page silent.
5. Vitol early-careers details (London deadline 4 Jan 2026; Geneva, Rotterdam, Singapore): search snippet only (the vitol.com page failed to load).
6. BP, Shell trading graduate programmes (length, hubs, eligibility): job-board listings only.
7. Oliver Wyman 2023 USD 100bn+ and cost-per-trader +25%; McKinsey 2030 USD 115bn EBIT; Trafigura headcount 12,479 / 13,086 / 14,476: snippets.
8. Gunvor Swiss and other enforcement history, Trafigura Brazil settlement (USD 76m), whether the Trafigura Angola verdict was appealed: not fetched from primary sources.
9. Singapore EP thresholds (SGD 5,600; SGD 6,200 for financial services; COMPASS 40 points): secondary sites; confirm on mom.gov.sg and check whether commodity trading counts as "financial services".
10. Dubai graduate routes for commodity houses: not researched.
11. UNIGE trainee pay amount, number of graduates retained, and any employment report: not published in what I read.
12. Michael Page 2018 factsheet: whether a more recent edition exists.
13. Whether Eni's "Energy Innovation" master with Politecnico di Milano has a current edition (the page referred to a 2023 cut-off).

### careers/luxury-and-fashion.md (16)

1. Burberry plan to cut up to 1,700 jobs (seen in theindustry.fashion, Fortune, AJ Bell snippets; Burberry annual report not opened).
2. Alexander McQueen: 55 jobs in London and about a third of Italian staff (modaes.com, fashionunited.com snippets).
3. Moncler: about 170 internships and 31% conversion in 2024; Global Retail Graduate Program (one year); MATE; eMpower; EMLUX partnership (monclergroup.com returned HTTP 403).
4. Prada Group School Board and Academy (more than 200 craft hires) (pradagroup.com snippets).
5. Chanel stage/alternance cycles and role list (JobTeaser snippet).
6. Kering Keys Retail China (21 months) and "cross-brand retail management trainee" eligibility (JobTeaser, Wizbii, Business of Fashion snippets).
7. HEC MiM class 2025: Retail & Luxury 5%, financial services 28%, consulting 24% (mimineurope.com snippet).
8. ESCP MSc Marketing & Creativity class of 2022 average salary EUR 55,900 (masterstudies snippet).
9. IFM tuition EUR 15,500 + 21,400 (EU) and EUR 19,000 + 27,900 (non-EU) for 2025 (snippet).
10. Lazio extracurricular minimum EUR 800 and national floor EUR 300 (money.it snippet); whether Lombardy changed its EUR 500 floor after 2018.
11. Junior luxury product manager pay EUR 32,000-38,000 (travail-industrie.com).
12. Hermès boutique management "minimum six years" and an LV Champs-Elysees director with about six years (job-board and newsroom snippets).
13. Luxe Talent 2025 salary study cited by CB News (21 Apr 2026): figures not accessible.
14. LVMH SPRING eligibility (master's, up to 3 years' experience): only snippets (see careers/marketing.md claim 3).
15. Armani Group about 10,500 employees (job-board snippet).
16. Italian CCNL Terziario/Moda entry pay bands and Swiss luxury entry pay: not searched successfully.

### decisions/long-horizon-careers.md (13)

1. Switzerland C permit rules (10 years / 5 early, language levels, student years): from cantonal pages found by search (Solothurn, Lucerne, Zurich), not read in full; the federal SEM page returned 404. Need the AIG text or SEM guidance.
2. UK: whether the Graduate route counts for any settlement route after the reform, and citizenship timing after ILR (12 months): not read in a primary document in this file.
3. HC 584 (3 Sep 2026) did not include earned settlement and B1 to B2 on 26 March 2027: reported by Breytenbachs and a search summary; not confirmed on legislation.gov.uk or GOV.UK.
4. Netherlands: whether study permits count towards the 5-year permanent residence period (Law & More says generally not; IND page does not say).
5. Italy: 10 years non-EU, 4 years EU citizens (Law 91/1992 art. 9) from a search summary; Normattiva text did not load.
6. France: multi-year card to long-term resident steps for workers (not covered by the pages I opened); forfait jours 218 days (not verified).
7. Germany: whether student years count towards the 5-year naturalisation period.
8. Dates of the German Bundestag and Bundesrat votes (8 and 17 Oct 2025) come from law-firm alerts.
9. McKinsey: "average tenure 3.8 years" (Revelio snippet, paywalled), "10% cut in non-client-facing staff" and Big 4 "graduate postings down 44%" (search summaries, not opened).
10. PwC UK attrition "about 10%" (trade summary).
11. Deloitte UK and PwC UK FY26 partner profit and promotions.
12. PER/eFinancialCareers and Michael Page numbers on NQ attrition: old and partially opened.
13. Goldman "18% higher 5-year retention" and "52% of class from top 15 US universities" (search results with doubtful provenance; not used).

### places/gulf-and-central-eastern-europe.md (17)

1. Whether the UAE Golden Visa "top university students" track covers graduates of non-UAE universities, and its GPA or ranking criteria (u.ae page gives none).
2. Saudi Nitaqat 2026 details beyond Clyde & Co: procurement 70%, removal of the Yellow tier, accounting quota, consulting quota above 40% (search summaries of Sovereign Group, Middle East Briefing, Tamimi; Tamimi page returned a redirect).
3. Qatar's labour law, Qatarisation rules and sponsorship practice for graduates (not researched; PwC posting snippet only).
4. Italian Farnesina "Viaggiare Sicuri" advice for UAE, Saudi Arabia and Qatar as of October 2026 (site is script-driven and could not be read).
5. Notice, probation and non-compete rules in UAE, Saudi and Qatari labour law (not read from official sources).
6. Whether Italy currently treats the UAE as a "privileged tax" jurisdiction for the 2-bis presumption after D.Lgs. 209/2023, and whether any exit-tax rule touches employees (Fiscomania snippet; Italian foreign ministry note of 18 Mar 2024 does not name the UAE).
7. ABSL's 2026 figures (2,179 centres, 1,303 companies at Q1 2026) seen only in a search snippet.
8. Randstad Workmonitor figures: 39% of Polish employers using automation to offset costs, fewer than one in five planning more than 10% headcount growth by Q1 2027 (search summary).
9. Whether Polish, Czech or Hungarian is required inside SSCs (Rzeczpospolita article title seen only: "centra usług szukają pracowników z językami").
10. Whether any investment bank in Warsaw, Kraków, Prague or Budapest runs a pre-experience analyst scheme in client-facing roles.
11. PKO Bank Polski graduate-programme rules and its openness to non-Polish graduates.
12. Non-EU work-permit routes for Poland, Czechia, Hungary and Romania (Poland consolidated in visas_immigration/poland/; Czechia consolidated in visas_immigration/czech_republic/czech_republic_visas_immigration_guide.md; Hungary and Romania remain to verify).
13. The AED per euro rate used in section 6 (I assumed 4.2).
14. Mubadala's and PIF's graduate-programme nationality rules on their own pages (PIF page returned 403; Mubadala not opened).
15. The Saudi royal order restricting government use of foreign consultants and the 33-35% Saudi-staffing figure on government projects (PrepLounge summary; the original text not read).
16. UAE gratuity page date (the government page carries no update date).
17. Hungary and Czechia centre counts (HIPA and KPMG/CzechInvest material; HIPA page returned 403).

### careers/tech-data-and-ai.md (17)

1. Stanford "Canaries": a software-developer-specific decline figure (press quotes about 20% for ages 22-25 from the original 2025 draft); the revised page read on 1 Oct 2026 did not show it.
2. Anthropic CEO's forecast of up to half of entry-level white-collar jobs lost within five years (secondary press, search summaries).
3. Press summaries of Bitkom 2026 saying entry-level IT hiring tightened and registered unemployed IT specialists rose (get-in-it and ms-aktuell snippets); the Bitkom deck read does not state it.
4. Stack Overflow 2025: 84% using or planning to use AI tools; 46% distrust accuracy; falling share of 18-24-year-old respondents (secondary summaries).
5. Euronews, 24 Jul 2026: AI-labelled job titles by country (underlying dataset not read).
6. Meta University Grad London requirements (Bachelor's required, Bachelor's or Master's preferred) from search results; Meta's page returned 404.
7. Imperial postgraduate computing 2023 outcomes (81% employment, 41% ICT, 15% finance) and UCL employer list: snippets only.
8. HESA first-degree computing median salary GBP 30,998 for 2022/23 (secondary summary; HESA blocked fetching) and any postgraduate taught computing median.
9. swissICT 2025 original study (Netzwoche is a report of it).
10. IG Metall pay-group premium for master's degrees in German industry (Gemini lead).
11. Jane Street, Citadel, Hudson River and Optiver graduate degree requirements, selection stages and European pay.
12. Outcomes of European business-analytics and data-science master's graduates; Wirtschaftsinformatik as a business-to-IT route in Germany.
13. Spotify, SAP and Booking.com degree requirements for engineering and data roles.
14. NY Fed recent-graduate unemployment for computer science and computer engineering (page read gave only the overall 5.6% for 2026 Q2; press quotes 6.1% for computer science).
15. Miro (2024-25) and Picnic APM eligibility; whether any European APM programme takes non-technical graduates.
16. Candidate-reported Amsterdam quant pay (Optiver, IMC, Flow Traders) from Levels.fyi, techpays.com and Glassdoor: not verified and not used.
17. Layoffs.fyi totals for 2026; Crunchbase 2026 figures to date (see careers/tech-business-and-startups.md).

### decisions/mba-and-career-switchers.md (20)

1. INSEAD class profile: average age 29, range 23 to 35, typical experience 3 to 8 years (search summary of INSEAD pages; direct fetch blocked).
2. Stanford class of 2027 profile figures and employment report (5.3 years, 7,259 applicants, 434 enrolled; 63% seeking; 81% secured; median base $185,000) (Clear Admit and search summaries; Stanford pages load dynamically).
3. HEC MBA class average experience (6 years) and age (30); HEC 2025 average salary and its denominator for "75% accepted".
4. Oxford Saïd class profile (332 students, average 5 years, age 24 to 39) and 2026-27 and 2027-28 fee figures (search summaries; Oxford site returned 403).
5. IESE employment denominator, salary and "94% offers" claim; IESE class sector shares apply to the 2023 intake (Class of 2025).
6. ESADE 2025 report (91%, €68,000 median) and IE's MBA-only placement rate (page says "master's graduates" 95%).
7. INSEAD consulting split of 23% new hires and 27% returners (Clear Admit summary).
8. GMAC 2025 Prospective Students Survey: share wanting to change industry or function (58% in 2022, 42% in 2025); full report PDF not opened.
9. FT Global MBA 2026 table: weighted salary, salary increase and value-for-money by school (paywalled; only the top-five order and HBS $259,874 seen in a search summary).
10. EMBA funding (19% fully externally funded, 54% self-funded) comes via a news article quoting the Executive MBA Council; check the Council's primary data.
11. MBB and corporate MBA sponsorship terms (two-year return, prorated repayment) and Italian law on repayment clauses.
12. US STEM-designated MBA lists: confirm per school; whether Harvard and Stanford are whole-programme STEM.
13. Canada: the 3-year PGWP for master's under two years (summary of IRCC guidance; the page read did not state it).
14. France: 12-month duration of the post-study permit and whether non-"grade de master" MBAs qualify (page read gave the salary floor €2,800.53 and the training-relevance condition only).
15. MIP Politecnico MBA fee (€54,000), class size and requirement from an aggregator; Cattolica and Bologna Business School MBA data.
16. Fulbright/Ethenea MBA awards for Italians (two awards, up to $50,000 a year) (Bluerating; 403).
17. Bootcamp outcomes (CIRR 71%; Course Report 79% and +51%); University of Pennsylvania bootcamp study (Joshi) could not be opened.
18. LBS MiF minimum years of experience (the page read gives an average of 5 years).
19. Italian employer perception of Bocconi/MIP MBAs versus foreign MBAs; share of Italian MBA students staying in Italy.
20. IRS Publication 15-B limit of $5,250 for tax-free employer education assistance (Gemini lead, not checked).

### places/origin-countries-eu.md (19)

1. CGE 2026: management-school mean gross salary EUR 40,825 and net employment 74.5% (L'Express Education; Diplomeo). Open the CGE report.
2. la Caixa fellowship monthly allowance (about EUR 1,400 in a search snippet) and 2027 call dates (foundation site returned 403).
3. The ZAB (anabin) Nmax/Nmin parameters Mannheim uses for Spain, France, Portugal, Greece, Poland, Romania and the Netherlands.
4. National grade distributions: share of Spanish graduates with 7.0, 8.0 and 9.0 averages; Portuguese 15/20; French 13/20; Greek 7.0 and 8.0. (No primary distribution found.)
5. German university guidance that the Bavarian formula disadvantages French, Belgian and Dutch certificates (seen in a search summary of a university page).
6. Which version of the KMK resolution applies (1991 as amended 2004, or an amendment in 2013, as other university pages say).
7. A snippet that 27.6% of Spanish emigrants go to the UK (no date, unrelated source).
8. Whether Spain's flat 24% (art. 93 LIRPF) beats the progressive scale at an entry-level graduate salary.
9. Spanish *Titulo Propio* versus *Master Universitario* recognition (cited by Gemini only).
10. CROUS grant portability to EU institutions for French nationals and the EUR 1,454-6,335 amounts (search snippet).
11. Auslands-BAfoeG: full-master's funding within the EU/Switzerland, treatment of UK, and age limits (official bafoeg.de returned 404).
12. Destatis: 269,986 departures, 189,107 arrivals, destinations (news summary).
13. IFICI qualifying roles and whether an entry-level graduate in a non-research job qualifies.
14. Onassis 2026 call: 8.00/10 minimum with the "2:1 equivalent" wording; amounts; birth-year limit (aggregator summary).
15. Greek emigration totals (600,000, 350,000 returned) and survey of return intentions.
16. Greece art. 5C: 5 of 6 versus 7 of 8 years, and treatment of Greek nationals; AADE decision A.1138/2026 on public-sector employees.
17. Poland ulga na powrot: whether the 5-year earlier-residence condition is cumulative or an alternative.
18. SGH as the only Polish public university in the FT Masters in Finance 2025 (snippet on gazeta.sgh.waw.pl).
19. Current Legifrance text of art. 155 B CGI (BOFiP page opened was a withdrawn 2015-17 version).

### places/origin-countries-non-eu.md (17)

1. DZHW press release: about 58,800 Indian students in Germany in winter 2024/25 (snippet of https://www.dzhw.eu/services/material/pressemitteilungen/pm_dzhw_wiss._weltoffen.pdf).
2. IBA Model Education Loan Scheme: abroad ceiling about INR 20 lakh, collateral-free only up to INR 7.5 lakh (search snippets of vikaspedia / RBI documents).
3. RBI priority-sector classification of education loans up to INR 20 lakh abroad (search snippet).
4. SAFE rule that study-abroad purchases above USD 50,000 need passport, visa, admission letter and tuition proof (Zhejiang Online, 2017; not opened).
5. CSCSE refusal to recognise degrees earned online after 2023, with an exception for Ukraine and Russia (summary hosted by education.gov.au; not opened).
6. Zhaopin 2025 returnee report: median salary expectations down, over 80% hold master's or above, 12% rise in fresh-graduate returnees (Caixin, itiger summary; primary not read).
7. CBN FX Manual 4th edition text itself (we read press reports only).
8. YÖK regulation text of 15 March 2024 and whether it covers master's degrees from top-400 schools.
9. YLSY quota and scope for 2025-26 (OSYM / MEB).
10. Chevening Nigeria numbers: 39 scholars and one fellow in 2025 (press snippets), 8,000 applicants in an earlier year (ICIR).
11. Campus France: 1,181 Nigerian students in France in 2023-24, up 81% in five years (search snippet).
12. France 2026/27 public-university fees for non-EU master's students (sources gave EUR 3,879 and EUR 3,941; the official page read was for 2024/25).
13. Netherlands: current fee category for UK nationals (source was a 2020 commercial site).
14. Campus France UK page on long-stay visas for British students (summary only).
15. Whether LSE and Imperial refusal rates differ from the all-sponsor rate (not in Home Office tables).
16. Whether the Home Office dependants ban of January 2024 explains the Nigerian fall (visas file; not re-researched).
17. AIU equivalence fee of USD 200 equivalent (embassy page, undated).

### places/beyond-europe.md (20)

1. STEM designation (CIP code on the I-20) for Vanderbilt MS Finance, WashU MS Finance tracks, Michigan Ross MM, Berkeley MFE, Princeton MFin (school says STEM-eligible), MIT MFin (2016 press release seen in a snippet). Where: school admissions pages.
2. USCIS FY2027 H-1B registration and selection counts by wage level (USCIS pages I read gave no counts; a secondary-source count is not usable). [Updated 6 Oct 2026: still unpublished, US guide OQ-09.]
3. Which OEWS wage level typical entry-level finance, consulting and analytics graduate salaries fall into (decides weighted-lottery odds for graduates).
4. BC PNP International Post-Graduate stream closure on 7 January 2025 (Gemini file).
5. Australian student visa fee, processing times and the department's own page on the 2027 National Planning Level (page timed out).
6. University of Sydney Master of Commerce fee of A$54,500 (Gemini file); Melbourne Master of Finance fee from the official course page (blocked, 403).
7. Whether MiM/MSc (not only MBA) programmes at HEC, ESSEC, IESE, IE, LBS count as 20 points under COMPASS C2 Group B, and whether Bocconi, Mannheim, RSM, Vanderbilt and WashU are truly absent from the list (read the PDF directly).
8. TTPS Category C annual quota number (Gemini: 10,000; the ImmD page I read gives none) and the reported 2026 expansion of the eligible list to 200 institutions (secondary only).
9. HKU Master of Finance fee (Gemini: HK$462,000; a search summary suggested HK$231,000 a year).
10. Mandarin as a requirement for HK front-office finance roles (Gemini cites a recruiter page; not opened).
11. Japan HSP points and permanent-residence timelines: **CONFIRMED** on ISA primary pages (70 points 3 years, 80 points 1 year, master's 20 points, min floor ¥3,000,000; J-Skip ¥20,000,000; consolidated in `visas_immigration/japan/`).
12. Japan: language requirements, starting pay and MEXT stipend: **CONFIRMED** on JASSO/MEXT and MHLW (MEXT master's stipend ¥144,000/month; Tokutei Katsudo 46 requires JLPT N1 or BJT 480; shinsotsu starting pay ¥262,300/month; consolidated in `visas_immigration/japan/`).
13. Princeton MFin tuition, duration and international share (graduate school pages blocked).
14. Whether the H-1B $100,000 proclamation was extended past 21 September 2026 (also in places/visas-and-work-rights.md #16). [RESOLVED: extended to 21 September 2027.]
15. Ontario Workforce Priority stream effective 26 June 2026 (secondary).
16. Express Entry Canadian Experience Class cut-offs in Aug-Sept 2026 from IRCC's own rounds table (page blank when fetched).
17. Rotman MFin and Ivey MSc tuition from the official fee pages.
18. Michigan Ross Master of Management 2026-27 tuition.
19. Whether the DHS STEM list was updated after 22 July 2024 (a blog mentions a 2026 addition of CIP 03.0204). [Updated 6 Oct 2026: CIP 03.0204 is already on the 22 July 2024 list; a later update is not verified, US guide OQ-26.]
20. Day-1 CPT risk analysis in the Gemini file (no primary source read). [Updated 6 Oct 2026: CPT is now limited by SEVP messages 2608-01 and 2608-02, under challenge in *AAU v. DHS*; US guide section 3.3.]

### money/scholarships.md (15)

1. Chevening: total applications and awards for 2025/26, and Italy's allocation (only secondary sources seen).
2. DAAD Study Scholarships Master's all disciplines: whether Italian citizens are on the eligible-country list and the 2027 deadline.
3. Eiffel: whether EU/Italian nationals can be nominated, and the current Master's monthly value (€1,200 snippet; €1,181 ESSEC).
4. Which Erasmus Mundus Joint Masters are business, finance or management, and their application-to-scholarship ratios.
5. DSU: how many "idonei" are unfunded by region and year (the "idoneo non beneficiario" issue).
6. Fondazione CRT Master dei Talenti, Fondazione Rocca, Collegio Italia, Generali and other Italian foundation master's awards: current calls.
7. Rotary Global Grants, L'Oréal and other corporate awards: eligibility for business master's.
8. Tax treatment of foreign scholarships and tuition waivers for an Italian tax resident (and in the UK, France, Germany).
9. Home Office financial-requirement guidance: that Chevening and similar sponsors lift the 28-day test.
10. Fulbright: that the J-1 two-year rule applies to Italian Fulbright master's students in all cases, and whether OPT or CPT is available (a US-government source page returned 403).
11. HEC: whether the Foundation Excellence award can be combined with external scholarships (summary only).
12. Esade scholarship page and stacking wording (page blocked; quoted from money/costs-and-funding.md).
13. Oxford Clarendon and Saïd funding numbers (ox.ac.uk and sbs.ox.ac.uk blocked or summary only).
14. Imperial, IE, IESE: current scholarship figures for 2027 entry (not re-read here).
15. Rhodes: whether Italy has its own constituency or only the Global pool, and the 2027 Global deadline.

### getting-in/applications-and-interviews.md (16)

1. LSE's rule that references from personal webmail accounts are not accepted (Gemini lead; not confirmed on any LSE page I read; the LSE references and personal-statement paths I guessed returned 404).
2. Whether HEC, ESSEC, Bocconi or IE state AI-in-application policies; Bocconi disclosure request reported by Clear Admit (20 Aug 2026), SDA Bocconi (MBA/executive school) may be different from the MSc.
3. Mannheim, TUM and WU application document norms and interview use (not researched).
4. McKinsey wording on AI and on Solve preparation; verify on mckinsey.com/careers/interviewing.
5. PwC's candidate AI page wording (blocked by 403) and any EY or KPMG candidate-use pages for your country.
6. Goldman careers-site policy on AI use (the Fortune report concerns an EMEA programme email in June 2025).
7. J.P. Morgan candidate AI policy (none found in two searches).
8. BCG online case parameters (45 minutes, 20+ questions) and whether they apply in Europe in 2026.
9. Schmidt & Hunter 1998 table values quoted via Sackett et al. (2022); read the 1998 table directly if exact figures matter.
10. Maurer, Solamon and Troxtel (1998, 2001) results on interview coaching; found only as references.
11. Italian probation maximums under RDL 1825/1924 and the applicable CCNL; Italian non-compete (Art. 2125) consideration norms; German § 74 HGB 50% rule; French non-compete counterpart; not re-read.
12. French CDD renewal count and the 10% (or 6%) end-of-contract payment on the primary legal page.
13. UK sign-on clawback tax relief mechanics (HMRC EIM00805), from the Gemini lead.
14. Whether the German Anschlussverbot treats internships or student jobs as prior employment.
15. Whether the EU AI Act Digital Omnibus was formally adopted and published, and the final application date for employment systems.
16. Italian stage extracurriculare regional minimums (Gemini lists €450-€800; money/salaries-and-roi.md and places/italy-playbook.md may differ); not researched here.

### evidence/base-rates-and-failure-modes.md (14)

1. HESA business and management PGT qualifiers for 2023/24 and 2024/25, split UK versus non-UK domicile (the HESA site blocks automated access; Chartered ABS and press summaries only).
2. HESA Graduate Outcomes for business and management PGT: employment, unemployment, graduate-level jobs by domicile (the Irish HEA figure of 84.6% employment and 9.4% unemployment surfaced in a search and is not UK).
3. UK taught-master's non-continuation: a search summary said PGT completion is "above 90%"; no primary table found.
4. ISE's conversion statistic (a search summary: "around 40% of former interns and placement students recruited into graduate jobs") from the paid Student Recruitment Survey 2025.
5. The High Fliers sector table (investment banks, accounting, consulting, public sector) in the full report: absolute counts and the share of UK investment-bank hires in front office.
6. The AlmaLaurea field-level (economico group, biennial master's) employment rate and net pay at one year, which the national synthesis does not give as a headline.
7. Number of biennial master's graduates in economics, finance and management (LM-56, LM-77, LM-16) from MUR/ANS, including Bocconi, LUISS and Cattolica.
8. Bocconi's own employment-report sector shares and cohort size (the Gemini "1,500" figure).
9. The 2014 Sutton Trust figure that 34% of new investment-banking entrants were privately educated, updated for 2023 to 2026.
10. Trackr summer-report 2025 applications-per-offer comparator (the PDF's text layer lists 67.9 and 75.0 in an unreliable order).
11. Unpaid-internship incidence and a family-income measure for Italian business-school students (ISEE distribution at Bocconi, LUISS, Cattolica); none found.
12. Nuffic figures for Italian-nationality graduates specifically (already open in verification/claims-to-verify.md).
13. The unstructured-interview validity (.19) and credibility interval in Sackett et al. (2022), and the underlying studies for the "56% to 61%" interviewer claim in "Noise".
14. A Lazio EUR 800 monthly internship floor (secondary source only; national EUR 300 floor also snippet-level for the official regulation).

### product/competitors.md (18)

1. Whether `localStorage` auto-saving of answers and language is covered by the "strictly necessary / explicitly requested" exemption and the Garante's technical-cookie category (sections 5 and 6 of the guidelines). Where seen: EDPB Guidelines 2/2023 fn.; Garante page summary.
2. Whether GoatCounter-style analytics (page, referrer, screen width, events, no IP stored) needs consent in Italy under Garante section 7.2 and EDPB point 51. Seen: GoatCounter GDPR page (vendor claim).
3. What GitHub logs for Pages visitors and under what controller or processor role. Seen: GitHub General Privacy Statement (general wording only).
4. Whether GitHub's Pages commercial-use sentence blocks a site with an external checkout. Seen: GitHub Docs, Pages limits.
5. Directive 2011/83/EU as amended (2019/2161, 2019/770): current text of Arts 16(m), 14(4)(b), and whether an interactive online tool is "digital content" or a "digital service"; the durable-medium confirmation. Seen: UK-hosted 2018 text and legal summaries.
6. Italian Consumer Code transposition and price-display rules; UCPD and 2021 Commission Notice on misleading omissions and ranking transparency. Seen: Gemini only.
7. Italian VAT standard rate for digital services, forfettario sellers' VAT/OSS position, UK VAT for UK consumers, and Italian record-retention periods. Seen: not read (AdE FAQ silent on forfettario).
8. Article numbers: where the €10,000 threshold sits in Directive 2006/112/EC (Gemini says Art. 58). Seen: Commission and AdE pages give no article.
9. UK s. 91 offence wording and OISC's view of self-service eligibility tools; the same issue in Italy, France, Germany, Switzerland. Seen: search-result summary of s. 91.
10. Whether net-pay and "impatriati" calculators are reserved activities in Italy (D.Lgs. 139/2005, Criminal Code art. 348) or Germany (StBerG, RDG). Seen: Gemini only.
11. The text of Law 633/1941 arts 70 and 102-bis and Directive 96/9/EC arts 7–9; the CJEU judgments C-203/02 and the other three of 9 Nov 2004. Seen: Commission summary; search-result excerpt of art. 70.
12. Directive 2019/1024 (open data) applicability to universities' reports; EUTMR Art. 14 nominative use; Directive 2019/790 text-and-data-mining. Seen: Gemini only.
13. CJEU C-634/21 (*SCHUFA*) and whether an applicant-side score could ever be "automated decision" under GDPR Art. 22. Seen: Gemini only.
14. Italian digital-consent age (14?) and the right of reply (Law 47/1948) for websites. Seen: not read.
15. AI Act: exact Annex III point 3 wording, the Omnibus text and dates, transparency obligations for chatbots. Seen: Commission overview page only.
16. Enforceability of liability caps and exclusion clauses against consumers in an EU/Italian context. Seen: Gemini only.
17. Prices of unread players (Management Consulted, WSO, MBAMission, Menlo, Prepory, CaseCoach, Leland, MBA Crystal Ball) and their data practices.
18. Contribution willingness and WTP of Italian/European master's applicants (needs the fake-door test in 2.5).

### careers/public-policy-and-academia.md (18)

1. Commission news line that the Blue Book receives about 36,000 applications a year for nearly 2,000 places (seen in a search snippet of a Commission item; not opened).
2. European Parliament Schuman traineeship grant of about EUR 1,678 a month and Council traineeship EUR 1,538.16 net (secondary listings).
3. Banca d'Italia starting pay for Esperti (a secondary page said EUR 50,126 gross) and Assistenti.
4. ECB Graduate Programme salary (the Gemini lead said EUR 4,982 net) and EIB grade 3 pay EUR 56,125.17 for 2026 (search summary).
5. EBA traineeship grant EUR 2,096.82 and year; ESMA 2026 deadline (15 July 2026).
6. UN YPP 2025-26 and 2026-27 country lists, age limit, and whether Italy was excluded in earlier years (careers.un.org renders in JavaScript).
7. Italy's exact status in the Secretariat (within range or overrepresented) and number of Italian staff.
8. IMF Economist Program terms (age under 34 at 8 Sep 2026, PhD, deadline 4 Dec 2025), Fund Internship Program, OECD Young Associates terms and whether the OECD Young Professionals Programme still exists.
9. UK Fast Stream London salary (GBP 34,078), annual applications and appointments.
10. INSP intake and applicants; whether non-French EU nationals can sit the external concours.
11. MEF RIPAM 2026 concorso numbers (485 funzionari, 63 specialists) and number of applicants (secondary).
12. TVöD Bund E 13 step 1 EUR 4,901 from 1 May 2026 (secondary pay-table site).
13. HEC Paris PhD stipend (EUR 26,000 for up to 5 years) and "90% continue in academia".
14. Whether TV-L PhD posts in German business and economics departments are usually 50%, 65%, 75% or 100%.
15. Dutch CAO NU scale 10 values (bottom EUR 3,706) and whether PhD candidates start at the bottom of scale 10.
16. Swiss university doctoral pay scales above the SNSF floor (ETH, EPFL, St. Gallen).
17. Share of EU trainees and contract agents who become officials.
18. How the Commission's geographical-balance rule affects who is hired from the AD5 reserve list.

### evidence/ranking-methodologies.md (7)

1. The FT's own methodology page (weights for every criterion, treatment of non-respondents, PPP source, outlier trimming).
2. QS's primary methodology page and employer-survey size, response rate and the 400-employer nomination rule.
3. Eduniversal's scoring bands and how many programmes are rated.
4. Italian national rankings (Censis, Il Sole 24 Ore): primary methodology and criticisms (only a search summary read).
5. French and German press rankings (Le Figaro/L'Étudiant/Challenges; Handelsblatt/WiWo): methodology.
6. The outcome of the TBS allegations (FT statement, any regulator finding).
7. The text of U.S. News' response to the Columbia case and the current status of the Temple dean's appeal.

### verification/freshness-register.md (3)

1. Items 4, 6, 10, 18, 24 and the extension status in item 7 (secondary or snippet).
2. Exact in-force dates for art. 225 D.Lgs. 117/2026.
3. Whether the SEM publishes the 2027 quota decision in November 2026 on the same page.

**Round-2 items added: 260.**

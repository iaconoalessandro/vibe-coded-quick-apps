# Finance, part 4: Corporate finance, risk, quant and fintech

## 1. What this branch is

This part of the finance branch covers the people who run, protect and mathematically model money, rather than the people who advise on deals or sell products. It has four blocks. First, finance teams inside ordinary companies (budgeting, cash management, in-house M&A). Second, the risk and compliance functions that keep banks, insurers and asset managers inside the law and inside their capital limits. Third, quantitative finance: the mathematicians and programmers who price derivatives, build trading models and run electronic market-making. Fourth, fintech, the technology-led payments, banking and lending firms. These areas are very different in lifestyle (a treasury analyst can have a predictable week, a junior quant trader earns more than almost any other graduate and is under heavy performance pressure), but they share one idea: the work is about measuring and controlling money and risk with data. Compared with investment banking, entry here is easier in corporate finance and compliance, and far harder at the top quant and prop-trading firms.

**Scope notes:** (1) "Today" is 9 October 2026; figures are dated and anything older than October 2024 is flagged. (2) Investment banking advisory, sales and trading, and buy-side investing roles (asset management, PE, VC, private credit, wealth) are covered in other parts; I only cross-reference them. (3) Quant compensation at private trading firms is not published by the firms; almost every figure below comes from recruiters, aggregators or self-reports and is labelled as such. (4) For fintech engineering roles I give a brief note only and cross-reference the Computer Science branch. (5) Where I could not find a reliable figure for a region I say "no reliable data found". Ratings (stress, people, quant, entry difficulty) are my own judgement from practitioner descriptions, using the shared scales; hours figures are practitioner consensus unless a source is named.

## 2. Map of areas and sectors

### 2.1 Corporate finance inside non-financial companies

Here "finance" means the finance department of a company that makes or sells something else (a carmaker, a retailer, a pharma firm, a software company). The employer is the company itself; the "client" is the business. Four sub-areas:

- **FP&A (financial planning and analysis).** The team that sets the budget, produces rolling forecasts, and explains why actual results differ from plan (variance analysis). In practice you rebuild the monthly forecast in Excel or a planning tool such as Anaplan, Adaptive or SAP, then explain a 3% margin miss to a business unit head. Many FP&A people are "business partners": embedded with sales or operations, advising on pricing or headcount. FP&A is protective and decision-supporting; it makes money indirectly by steering resources.
- **Corporate treasury.** The team that manages the company's cash, liquidity (can we pay bills next month?), funding (bank loans, bonds, revolving credit lines), foreign-exchange and interest-rate hedging, and relationships with banks and rating agencies. Treasury protects value: a treasurer who hedges a euro revenue stream against a falling euro reduces earnings volatility. The people on the other side are the banks' corporate-banking, FX and rates desks.
- **Corporate development ("corp dev").** The in-house M&A and strategy team: it identifies acquisition targets, values them, runs due diligence with advisers, and integrates deals. It is the buy-side counterpart to the investment bankers in part 1: the company is the client, banks are its advisers.
- **Investor relations (IR), briefly.** Communicates with shareholders and analysts of a listed company (earnings calls, guidance, investor roadshows). Small teams, usually staffed from FP&A, banking or sell-side research; not a graduate entry route.

Regional note: in Anglo-American groups "FP&A" is the common label; in Italy, Germany and France the nearest equivalent is *controllo di gestione / Controlling / contrôle de gestion*, often more tied to accounting close and group reporting. In Italy, finance teams of large Milan-based groups (industrial, luxury, energy, utilities) are the main employers; the project's earlier research treats these as predictable-hours routes (project file `careers/accounting-and-corporate.md`).

### 2.2 Risk management at banks, insurers and asset managers

Risk functions measure how much could be lost and make sure it stays within limits and within regulatory capital. Banks organise this in "three lines of defence": the first line (business desks) owns its risks, the second line (independent risk and compliance) challenges and monitors, the third line (internal audit) checks both. Most graduate risk jobs are second line. Sub-areas:

- **Market risk.** Measures losses from price moves (rates, FX, equities, credit spreads) on trading books, using Value-at-Risk (VaR), expected shortfall and stress scenarios. Works with the trading desks daily. Employers: investment banks, large asset managers, hedge funds.
- **Credit risk.** The chance a borrower or trading counterparty does not repay. Includes **credit analysis and underwriting at commercial banks** (assessing a company's accounts and cash flows to set a limit or price a loan), portfolio credit risk (models of default probability and loss), and counterparty credit risk for derivatives. Employers: commercial and retail banks, insurers, rating agencies, credit funds.
- **Operational risk.** Losses from failed processes, people, systems or external events (fraud, outages, cyber attack, conduct failures). Often the broadest and most generalist risk entry point.
- **Liquidity and balance-sheet risk (ALM, asset-liability management; "treasury risk").** Ensures a bank can fund itself and survive deposit outflows, and manages interest-rate risk on the loan and deposit book.
- **Enterprise risk management (ERM).** The group-level view: risk appetite, aggregation across risk types, reporting to the board. Typically senior or mid-career.
- **Model risk / model validation.** Independent teams that test the mathematical models used for pricing, capital and credit decisions. A technical route into banking that is partly quantitative.

**Regulatory drivers, in plain language.** Regulation creates a large share of risk jobs:
- **Basel III** is the international framework for bank capital (how much loss-absorbing equity banks must hold). The "**Basel III endgame**" (US) and "**Basel 3.1 / CRR3**" (UK, EU) are the final tightening, mostly about how banks calculate risk-weighted assets. In the US a revised endgame proposal was reported released on 19 March 2026 after the 2023 version failed to gain consensus (Bloomberg Professional summary; comments reported due 18 June 2026; I found no final rule). In the UK, the PRA is reported to apply Basel 3.1 from 1 January 2027 (internal-model market-risk part reportedly deferred to 2028; single source, verify with the PRA).
- **FRTB** (Fundamental Review of the Trading Book) is the new market-risk capital regime. The EU delayed its application to 1 January 2027 via a delegated act published in 2025 (Regulation Tomorrow / Deloitte, 2025); timelines keep slipping, which is itself a lesson for candidates: implementation teams expand and contract with the regulatory calendar.
- **Stress tests.** Regulators run hypothetical recessions on bank balance sheets. In the US the Fed's annual test (the old CCAR plus DFAST, the Dodd-Frank Act Stress Test): the 2026 results (24 June 2026) covered 32 banks, all stayed above minimum capital, and stress capital buffers were frozen until 2027 pending model review (Federal Reserve and secondary press, June 2026). In the EU, the EBA's 2025 test covered 64 banks and showed roughly 370 basis points of CET1 depletion in the adverse scenario (EBA, 1 Aug 2025; one other analysis cites about 304 bp, sources disagree on the measure); the 2027 test is in draft with 63 banks, 55% fewer data points and a first climate module (EBA/Regulation Tomorrow, June 2026).
- **IFRS 9** (and US **CECL**) are accounting rules requiring banks to book *expected* credit losses in advance, which created large teams building "expected credit loss" models and provisioning processes.

### 2.3 Compliance and financial crime

Compliance makes sure the firm obeys financial regulation and does not become a conduit for crime. **AML/KYC** (anti-money-laundering / know-your-customer) means verifying who a client is, where its money comes from, and monitoring transactions for suspicious patterns, then filing reports with authorities. **Sanctions** compliance means screening clients and payments against government lists and blocking prohibited business. **Regulatory compliance** covers conduct rules, market abuse, advertising and licensing. Employers are all regulated firms (banks, asset managers, payment firms, crypto exchanges, insurers, law and Big Four advisory firms). It is one of the largest entry routes into financial services because of sheer headcount, but it is also the area most exposed to automation (see 3.5).

### 2.4 Quantitative finance

"Quant" means someone who solves financial problems with mathematics, statistics and code. Three very different worlds share the label:
- **Banks (sell side).** *Strats* or *desk quants* build the pricing and risk libraries used by traders; *XVA quants* model valuation adjustments to derivatives (credit, funding and capital costs); *model validation quants* test other people's models. Clients: the bank's own traders, risk and regulators.
- **Quant hedge funds and systematic funds (buy side).** *Quantitative researchers* develop trading signals and portfolio models from data; examples include Renaissance Technologies, Two Sigma, D. E. Shaw, AQR, Man Group/AHL, Citadel (and its multi-manager "pod" peers such as Millennium, Point72, Balyasny) and WorldQuant. They manage outside investors' money and charge fees.
- **Proprietary trading firms and electronic market makers.** Firms such as Jane Street, Citadel Securities, Hudson River Trading (HRT), Jump, Optiver, IMC, Susquehanna (SIG), DRW and Flow Traders trade their own capital and provide continuous buy and sell prices on exchanges, earning small margins on enormous volume. *Quantitative traders* and *quantitative researchers* design and run the strategies; *developers* build the low-latency systems. Citadel Securities (market maker) is a separate firm from Citadel (hedge fund).
- **Quant developers** write production code for any of the above: pricing libraries at banks, execution and research platforms at funds, ultra-low-latency C++ (or FPGA) at trading firms.

### 2.5 Fintech

Fintech means technology-first financial businesses. Main segments and how they earn money:
- **Payments** (Stripe, Adyen; incumbents Visa, Mastercard; in Italy, Nexi): earn a small percentage plus fixed fee on each transaction (a "take rate"), or interchange shared with card networks. Adyen reported net revenue of EUR 1,302.9m for H1 2026, up 19% year on year, with a 49% EBITDA margin (Adyen H1 2026 results, 13 Aug 2026), a sign that scale payments are profitable.
- **Neobanks / digital banks** (Revolut, Monzo, N26, Nubank): earn interchange, subscriptions, foreign exchange and net interest margin (interest charged minus interest paid). Revolut's 2025 annual report (24 Mar 2026): revenue GBP 4.5bn (+46%), profit before tax GBP 1.7bn, 68.3m retail customers.
- **Lending / BNPL** (Klarna, Affirm; in Italy Scalapay): earn merchant fees and interest or late fees; credit losses are the main risk.
- **Wealthtech and brokerage:** subscriptions, spreads, payment for order flow, assets under management fees.
- **Insurtech:** underwriting margin or distribution commissions.
- **B2B infrastructure / banking-as-a-service (BaaS):** sells licences, card-issuing and compliance infrastructure to other companies.
- **Crypto and digital assets:** exchange trading fees, custody, stablecoin reserve income. Honest risk note: high volatility of revenue, many failures, regulatory shifts. In the EU, the MiCA regulation requires authorisation for crypto-asset service providers; the transitional period ended on 1 July 2026 and unauthorised firms must wind down EU client business (ESMA statement of 23 June 2026, via law-firm commentary); one source counts 244 authorisations by that date. Hong Kong approved its first stablecoin-issuer licences in April 2026 (HSBC and a Standard Chartered-led venture, single-source report).

Funding context: global fintech venture funding was about US$52.7bn in 2025 (CB Insights via press), while KPMG's broader measure of fintech investment recovered from US$95.5bn to US$116bn but deal count fell to an eight-year low of 4,719 (KPMG Pulse of Fintech H2 2025). Capital is concentrating in bigger, later-stage companies, so early-stage startup hiring is thinner than in 2021. Hubs: London (largest in Europe), Milan (Satispay, Scalapay, Nexi's home; a Milan city page claims over 45% of Italian fintechs, promotional), Singapore and Hong Kong (regulated stablecoin and digital-asset regimes), Dubai (DIFC; I found no usable hiring data).

## 3. Role families

### 3.1 FP&A / corporate finance analyst (to CFO track)

**What you actually do:** Build and maintain the annual budget and monthly/quarterly forecast; compare actuals to plan and write the "variance commentary" (why revenue, margin or cost differed); model pricing, headcount and capex scenarios; prepare management and board packs; support the monthly close with accounting. Tools: Excel (advanced), a planning system (Anaplan, Oracle EPM, SAP BPC, Adaptive), BI tools such as Power BI or Tableau, increasingly SQL and Python. Deliverables: forecast files, a business review deck, a one-page "bridge" explaining year-on-year profit.

**A typical day and week:** Early week, pull the latest sales and cost data and refresh the forecast; midweek, meet your business partner (for example the sales director) to challenge assumptions; Thursday-Friday, prepare commentary for the monthly review. Week 1 of a month is close-heavy (late evenings); the budget season (typically September-December for calendar-year companies) and quarter-end are the crunch periods. Between peaks, the rhythm is steady.

**Hours, stress and lifestyle:** Typical 42-50 hours per week; peaks of 55-65 at quarter-end, year-end or during a restructuring (practitioner consensus; not systematically surveyed). Stress: 3/5 (regular deadlines, steady pressure; 2 in quiet mature companies). Flexibility is among the best in finance; hybrid is normal at most large corporates. Travel is low (some site visits).

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 3/5. You need to translate numbers into a story for non-finance managers; the modelling is spreadsheet-level, not advanced mathematics.

**Compensation (approximate):**
- US: Robert Half's listing for FP&A analyst shows about US$71k-88k base (2026 guide as shown in search snippet; the page itself did not display the table when I fetched it, so treat as unverified). BLS median for all financial and investment analysts US$101,350 (May 2024). Financial managers (controllers, FP&A heads, finance directors) US$161,700 median (BLS, May 2024; top 10% above US$239,200).
- UK: no reliable data found for FP&A analyst entry pay. Robert Half UK 2026: Finance Business Partner 25th/50th/75th percentile GBP 54,500 / 59,750 / 66,250 base (mid-career).
- Italy (Milan): aggregator estimates for controller roles: median about EUR 37k-43k, range EUR 30k-51k (Jooble, data to 29 July 2026; low-quality sample); France FP&A analyst EUR 55k-75k (Robert Half France, 2026, shown for comparison only).
- Senior (CFO): no reliable data found by region; listed-company CFO pay is disclosed in annual reports and varies enormously.

**Career path:** Analyst (0-3 years) -> Senior analyst/finance business partner (3-6) -> FP&A manager (5-9) -> Director of FP&A / divisional finance director (9-14) -> VP Finance / CFO (15+). Many CFOs come from FP&A, controllership or banking; a CPA/ACA/CIMA or MBA is common at the step to director in some markets (practitioner consensus). Rotational finance programmes at large corporates accelerate this.

**Exit opportunities:** After 2-3 years: another corporate (bigger brand or strategy role), FP&A at a tech company, MBA, a move into corp dev or consulting. After 7-10 years: head of FP&A, divisional CFO, private equity portfolio-company CFO, or investor relations. Moving to investment banking or PE is unusual from here.

**Tier list of employers:** Tier 1 (industry perception): global brand groups with structured finance programmes (large tech such as Microsoft and Google; consumer goods such as P&G, Unilever, Nestle; pharma; LVMH in luxury; Siemens in industrials). Tier 2: large listed domestic groups (in Italy for example Eni, Enel, Stellantis, Generali on the finance side, Luxottica/EssilorLuxottica, Ferrero; in the UK FTSE 100 firms; in the US Fortune 500). Tier 3: mid-sized and family-owned companies, private-equity-backed companies (faster growth, thinner support), and smaller listed companies. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Differences: Tier 1 gives structure, training, rotations and brand value; Tier 3 gives earlier responsibility.

**How to enter:** Degrees: finance, accounting, economics, business, engineering with strong Excel; a few arrive from audit (Big Four) after qualifying. Programmes: corporate graduate/rotational finance programmes (applications typically open in autumn and close between October and January for September starts in the UK and Europe; US programmes recruit September-November for summer internships and conversion). Certifications: CPA (US), ACA/ACCA/CIMA (UK), CMA (US management accounting) help for controller track; CFA is not needed. Skills: advanced Excel, financial statements, a planning tool, SQL/Power BI, concise communication. Interview formats: case or modelling exercise, "walk me through a variance", behavioural stories; no probability puzzles. Common mistakes: presenting numbers without a recommendation; underestimating accounting knowledge. Alternative routes: Big Four audit then move in-house (the most common non-target route), accounting graduate roles, an internal move from operations or sales. Entry difficulty: 2/5.

**Honest downsides and who it is NOT a good fit for:** Pay growth is slower than in banking and the career is tied to one company's fortunes; the work can feel repetitive (forecast cycles) and "cost centre" status limits influence; budget season can be bureaucratic. Not a good fit for people who want high pay, deal excitement or a purely technical/quant role. Early-career AI/automation of reporting is reducing pure number-crunching, pushing roles towards interpretation.

### 3.2 Corporate treasury analyst

**What you actually do:** Forecast daily and weekly cash positions across bank accounts and entities; decide where surplus cash is invested and where shortfalls are funded; execute or monitor FX and interest-rate hedges against exposures reported by the business; maintain bank relationships and facility documentation; administer bank accounts and payment systems (treasury management systems such as Kyriba, SAP Treasury, Coupa); handle covenant compliance and support bond or loan issuance; increasingly work on payments, working-capital finance and cash-pooling structures.

**A typical day and week:** Morning, check the previous day's cash balances and forecast against the treasury management system; midday, check hedging positions and discuss a quote with a bank FX dealer; afternoon, update the 13-week cash forecast and answer subsidiaries' questions. Weekly: liquidity report to the CFO. Periodic: a bond issue or refinancing, which means weeks of documentation with banks and lawyers.

**Hours, stress and lifestyle:** Typical 40-48 hours; peaks of 50-60 around a financing or a market shock (practitioner consensus). Stress: 3/5 (a missed payment or breached covenant is serious, but most days are routine). Hybrid common; travel modest (bank meetings, subsidiaries). Treasury teams are small, so a junior gets exposure quickly.

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 3/5. Banks and business units are your counterparties, but the work is mostly systems and spreadsheets.

**Compensation (approximate):**
- US: Treasury Analyst I median about US$68.8k-70.7k (Salary.com, 2024, aggregator; two pages disagree). AFP's 2025 compensation survey reports average base pay rise of 3.9% for 2024, but the detailed title tables are paywalled (AFP press release).
- UK: no reliable data found for treasury analyst in London.
- Italy: no reliable data found.
- Asia (comparison): Singapore treasury analyst S$80k-100k gross base, median S$90k; Treasury Manager S$125k-180k, Treasury Director S$215k-300k (Robert Half Singapore 2026 guide, excludes bonus and CPF); Hong Kong treasury analyst HK$290k-420k, median HK$360k (Robert Half HK 2026 guide, per search snippet).

**Career path:** Treasury analyst (0-3 years) -> Senior analyst / assistant treasury manager (3-6) -> Treasury manager (6-10) -> Head of treasury / group treasurer (10-15) -> CFO or regional finance director. Small field; moves between companies are the main route to promotion.

**Exit opportunities:** After 2-3 years: bank roles (corporate banking, transaction banking, FX/rates sales), FP&A, treasury at a bigger company, or consulting. After 7-10 years: group treasurer, CFO of a mid-sized company, or treasury advisory/technology (Kyriba, SAP, banks' corporate-client coverage).

**Tier list of employers:** Tier 1: global multinationals and large tech/pharma treasuries with in-house FX trading and capital-markets activity (e.g. Apple, Microsoft, Shell, Nestle, Unilever). Tier 2: large national groups and utilities/industrials. Tier 3: small and mid-cap companies where treasury is one or two people. Banks' transaction-banking and corporate-sales teams are the adjacent route. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 treasuries do more complex hedging and issuance and offer bigger teams; Tier 3 gives breadth.

**How to enter:** Finance, accounting, economics or business degrees; treasury analyst roles are rarely open to complete beginners, so common routes are corporate graduate finance programmes with a treasury rotation, bank transaction-banking graduate schemes, or an audit/accounting start. Certifications: CTP (AFP, US; exam of 170 questions, normally needs about two years of qualifying full-time work, with a student route to the CTPA title) and the ACT (Association of Corporate Treasurers, UK) ladder from Certificate in Treasury Fundamentals through Certificate in Treasury (about 250 study hours) to Diploma, per AFP and ACT. They help a career but are not required to enter; I found no independent salary-premium data. Skills: cash-flow forecasting, FX forwards and swaps basics, Excel, treasury systems, basic banking knowledge. Interviews: technical questions on hedging a currency exposure, working capital, and the bond/loan market. Alternative routes: payments/operations roles at a bank or a fintech; accounts-payable/cash-management roles. Entry difficulty: 3/5 (few roles, but little competition from the quant crowd).

**Honest downsides and who it is NOT a good fit for:** Few graduate openings and small teams, so promotion depends on who leaves; low bonuses; the market feel of banking is absent. Not suited to those wanting trading adrenaline, large bonuses or a broad choice of employers.

### 3.3 Corporate development (in-house M&A)

**What you actually do:** Screen and track acquisition targets and partnerships; build valuation models (DCF, comparables, precedent transactions) and merger models; prepare investment-committee papers for the CEO/board; run due diligence with legal, tax and operational teams and outside advisers; coordinate with investment banks on sell-side and buy-side processes; after closing, support the integration. Also does divestments and strategy projects. Tools: Excel/PowerPoint, data providers (CapIQ, FactSet, PitchBook).

**A typical day and week:** Quiet periods: market mapping, updating target lists, discussing strategy with business-unit heads. Active deal: daily calls with advisers and diligence teams, evenings on models and board materials, weekends before signing. Typically one to three live deals a year per person at a large corporate.

**Hours, stress and lifestyle:** Typical 45-55 hours; peaks of 65-80 in live deals (practitioner consensus). Stress: 3/5 on average, 4 during live deals. Considerably more flexible than banking. Travel for due diligence and site visits, higher in global groups.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 3/5. Success depends on influence with executives and operating managers more than model complexity.

**Compensation (approximate):**
- US: corp dev associate posting (Houston, PE-backed services company, 2025): base US$100k-120k, total US$150k-175k+ (expired posting, single data point). Aggregator averages (ZipRecruiter via Wallstreetmojo, Aug 2026): M&A analyst about US$92k, associate about US$175k (low-quality, unverified definitions).
- UK: no reliable data found.
- Italy: no reliable data found.
- France (comparison): analyst 0-3 years base EUR 45k-55k, total EUR 60k-75k; associate base EUR 50k-80k (Paris 2025-26 market summary via search).
- Senior: no reliable data found; typical ladder runs to Director/Head of Corporate Development and CFO.

**Career path:** Rarely a first job. Typical: 2-4 years in investment banking, transaction services (Big Four), consulting or PE -> corp dev analyst/associate -> manager (2-4 years) -> director/VP -> head of corp dev (10+ years) -> CFO/strategy head/GM. Corp dev ladders are less standardised than banking.

**Exit opportunities:** After 2-3 years: another corporate, PE or growth-equity roles (less common than from banking), strategy consulting, MBA. After 7-10 years: head of corp dev, CFO, general management, or business-unit head.

**Tier list of employers:** Tier 1: big tech and acquisitive large caps with dedicated, deal-active teams (e.g. Microsoft, Alphabet, Amazon, Salesforce; health and pharma acquirers such as Roche, Novartis, Pfizer; industrial consolidators). Tier 2: other large listed corporates and conglomerates. Tier 3: PE-backed platform companies (more deals, leaner support) and mid-caps with occasional deals. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 teams are small, selective and hire almost only experienced bankers; Tier 3 will take less-credentialed hires and offer bigger responsibility.

**How to enter:** Backgrounds: finance, economics, accounting, engineering or science (for industry-specific groups) combined with two to four years of banking, transaction services, consulting or PE. Few direct graduate programmes; a handful of large acquirers run finance rotations that include corp dev. Certifications: CFA is a modest plus; none required. Skills: valuation, merger modelling, memo writing, structured interviews with modelling tests. Recruiting calendar: lateral hiring all year; bankers move after the bonus season (March-June). Common mistakes: applying straight from university; expecting banker-style analytics without the operating story. Alternative routes: internal transfer from FP&A or strategy in an acquisitive company; Big Four transaction services. Entry difficulty: 4/5 (small teams; competes with bankers).

**Honest downsides and who it is NOT a good fit for:** Deals come in waves and may stop in a downturn (teams are cut); few roles; the work depends on the CEO's appetite; compensation below banking. Not for people who want a graduate job directly or who dislike politics and internal persuasion.

### 3.4 Risk management (market, credit, operational, liquidity) at banks, insurers and asset managers

**What you actually do:** Examples by sub-area. *Market risk analyst:* produce the daily VaR and sensitivity report for a desk, investigate a breach, explain risk to traders, run stress scenarios. *Credit risk analyst / underwriter (commercial bank):* analyse a borrower's accounts, build a credit memo, set a rating and limit, monitor covenants. *Operational risk:* run risk-and-control self-assessments, review incidents and track remediation. *Liquidity/ALM:* project cash flows and run liquidity-coverage and interest-rate-risk reports. *Model risk/validation:* review model documentation, replicate and test models (see 3.6). *Regulatory reporting and stress-test teams:* populate templates for the Fed, EBA and PRA. Tools: Excel, SQL, Python/R, SAS, risk engines (Murex, Calypso, internal systems), Tableau/Power BI.

**A typical day and week:** Market risk: early-morning review of the overnight P&L and risk numbers before the desk opens, explain moves, escalate limit breaches, meetings with desk heads; afternoon on methodology or reporting projects. Credit: reading financial statements, writing memos, meeting relationship managers, quarterly reviews. Stress-test season (US: Q1-Q2; EU: when the EBA exercise runs) brings weeks of intense reporting and reconciliation.

**Hours, stress and lifestyle:** Typical 42-50 hours; peaks of 55-65 (stress tests, regulatory deadlines, market events) (practitioner consensus). Stress: 3/5 (market risk on volatile days: 4). Hybrid works widely; travel low. Hours in risk are generally more predictable than in front-office roles.

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 3/5 (4 in market risk and model-heavy teams, 2-3 in operational and credit underwriting). You must argue with powerful front-office people politely and with evidence.

**Compensation (approximate):**
- US: BLS median for financial risk specialists about US$106,000 (OOH comparison table, 2024 data; all experience levels, not graduate). Entry range by employer: no reliable data found.
- UK (London base salary, FD Capital recruiter placements to March 2026): operational risk analyst (2-5 yrs) GBP 42k-65k; credit risk analyst (2-5 yrs) GBP 45k-68k; operational risk manager (5-10 yrs) GBP 70k-105k; market risk manager (5-9 yrs) GBP 80k-120k; enterprise risk manager (8-14 yrs) GBP 95k-140k; CRO GBP 130k-250k+ (GBP 200k-350k+ total package at large banks and insurers). Bonuses 15-30% of base at larger FCA-regulated firms (FD Capital, Q1 2026).
- Italy: junior risk specialist EUR 28k-35k RAL, mid-level (3-7 yrs) EUR 38k-50k, senior (8+) EUR 55k-80k (Masterin, undated guide; low-medium reliability).
- Asia: no reliable data found on a like-for-like basis.

**Career path:** Analyst (0-3) -> Associate/senior analyst (3-6) -> VP/risk manager (6-10) -> Director / head of a risk area (10-15) -> Chief Risk Officer or deputy (15+). Specialists move between banks and regulators as the regulatory cycle changes.

**Exit opportunities:** After 2-3 years: front-office roles are possible but hard (market risk to trading support/structuring), other risk functions, regulators, consulting (risk advisory), fintech risk teams. After 7-10 years: head of risk at a smaller bank, insurer or asset manager, regulator, or business-embedded risk roles.

**Tier list of employers:** Tier 1 (industry perception): bulge-bracket and large global banks' second-line risk and the largest asset managers/insurers, plus risk functions at the top hedge funds, with the strongest technical teams and desk proximity (JPMorgan, Goldman Sachs, Morgan Stanley, Citi, BlackRock; in Europe Deutsche Bank, BNP Paribas, Barclays, UBS, HSBC). Tier 2: other universal banks and large insurers (UniCredit, Intesa Sanpaolo, Generali, Allianz, AXA). Tier 3: smaller banks, regional lenders, specialist lenders, fund administrators. Regulators (ECB, Bank of England, Fed, PRA, Banca d'Italia) are a separate prestigious track. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 offers desk proximity, more modelling and higher pay; Tier 3 offers broader responsibility.

**How to enter:** Degrees: finance, economics, mathematics, statistics, engineering, physics; credit analysis also takes accounting graduates. Graduate programmes in risk at the larger banks (applications typically open in September-October and close between November and January for summer-after-graduation starts; early applications recommended); internships are a conversion route. Certifications: FRM (GARP) is the main risk credential: two exam parts (windows in May, August and November), a one-time US$400 enrolment fee and about US$600-900 per part depending on timing (third-party prep sites; check GARP), pass rates reported around 44-58% for Part 1 and 50-63% for Part 2 over recent years (300Hours, third party), and two years of relevant work for the designation (GARP). PRM (PRMIA) is an alternative; CFA is a modest plus for credit; CQF for quantitative market risk. They help in risk but rarely decide the first hire. Skills: SQL, Python, statistics, understanding of derivatives and financial statements. Interviews: technical (VaR, duration, credit ratios), market awareness, case or modelling test. Common mistakes: not following markets; treating risk as a "backup" for a failed trading application (interviewers hear it). Alternative routes: audit/Big Four financial services risk, operations or credit-analyst entry at a bank, and internal transfers from middle office. Entry difficulty: 3/5 (2 for credit/operational risk, 4 for quantitative market-risk at top banks).

**Honest downsides and who it is NOT a good fit for:** Seen as a cost centre and a "No" function; limited bonuses; regulation-driven projects can be paperwork-heavy; headcount has shrunk during bank cost cuts and offshoring (Barclay Simpson, 2026). Not suited to those who want to take risk and own P&L, or who dislike being the person who stops a deal.

### 3.5 Compliance and financial crime (AML/KYC, sanctions)

**What you actually do:** *KYC/onboarding:* collect and verify identity and ownership documents (who are the ultimate beneficial owners?), assess customer risk, decide whether to accept a client. *Transaction monitoring and investigations:* review alerts from monitoring systems, investigate unusual patterns, write suspicious activity/transaction reports to the national financial intelligence unit. *Sanctions screening:* resolve potential matches between client names or payments and sanctions lists, escalate and block. *Regulatory compliance:* interpret new rules, advise the business, monitor communications and trading for conduct breaches, handle regulator requests. Tools: case-management and screening systems (e.g. World-Check, Gianos in Italy), Excel, increasingly SQL and AI-assisted tools.

**A typical day and week:** Junior KYC/AML analyst: a queue of cases, each needing document checks, adverse-media searches and a risk rating; targets for cases per day. Investigators write case narratives; sanctions teams work live payment queues with deadlines the same day. Periodic "remediation projects" (re-checking an entire client book after a regulatory fine) create months of intense volume.

**Hours, stress and lifestyle:** Typical 38-45 hours; peaks of 50-55 during remediation, regulator visits or investigations (practitioner consensus). Stress: 3/5 (queue and deadline pressure; sanctions payments are time-critical). Hybrid and remote-friendly more than most finance areas (Barclay Simpson UK 2026: 49% of candidates rank remote working as the most valued benefit). Travel low.

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 2/5 (rising where analytics and data are used). Judgement and attention to detail matter more than maths.

**Compensation (approximate):**
- UK (London, base): AML/KYC analyst (1-4 yrs) GBP 32k-52k; compliance analyst (1-4 yrs) GBP 35k-55k; financial crime analyst (3-6 yrs) GBP 48k-68k; sanctions specialist (4-8 yrs) GBP 55k-90k; compliance officer (4-8) GBP 50k-85k; MLRO (money laundering reporting officer) GBP 90k-160k; head of financial crime GBP 95k-145k (FD Capital, Q1 2026). Barclay Simpson 2026 (London): financial crime analyst GBP 40k-50k at investment banks, GBP 30k-50k at retail banks; VP/senior manager GBP 80k-130k; head/MLRO GBP 150k-300k at investment banks (Barclay Simpson, Feb 2026). Big Four graduate pay in London about GBP 31k-40k (several career-guide sources, 2026).
- US: no reliable data found.
- Italy: junior AML EUR 27k-33k RAL (Masterin, undated); one Milan junior compliance data-analyst role at an insurer advertised EUR 28k RAL on a six-month contract (Gi Group listing, 2026).
- Senior: UK figures above; elsewhere no reliable data found.

**Career path:** Analyst (0-3) -> Senior analyst / investigator (3-5) -> Manager / officer (5-8) -> Director / Head of financial crime or compliance (10-15) -> MLRO / CCO (Chief Compliance Officer), which in the UK is a personally accountable regulated role.

**Exit opportunities:** After 2-3 years: Big Four financial-crime advisory, fintech and crypto compliance teams, regulators, risk roles, legal paths (compliance + law). After 7-10 years: head of compliance/MLRO, regulator, consulting partner track, RegTech vendors.

**Tier list of employers:** Tier 1: global banks and the largest asset managers (broad, structured, well-resourced); Big Four and Tier 1 risk consultancies; large regulators. Tier 2: mid-sized banks, insurers, payment firms and fintechs with established compliance functions. Tier 3: small banks, brokers, crypto firms, outsourced/offshore KYC factories. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 offers training and clear career ladders; outsourcing hubs have high volume work and lower pay; fintech and crypto offer faster responsibility but regulatory risk (the MiCA deadline of 1 July 2026 forced crypto firms to get licensed or wind down).

**How to enter:** Open to nearly any degree: law, economics, finance, politics, languages (language skills are valuable for international client files). Graduate programmes at banks and Big Four (Big Four graduate cycles in the UK close in autumn-winter; one UK Business and Financial Advisory scheme closed 31 January 2026); many analyst roles are posted all year and some ask for prior AML experience. Certifications: CAMS (ACAMS) is the most widely recognised AML credential; ICA (International Compliance Association) diplomas are popular in the UK; useful but not required for entry. Skills: attention to detail, written clarity, basic data skills (Excel, SQL), knowledge of regulations. Interviews: scenario judgement ("this client's money comes from X; what do you do?"), ethics, no technical maths. Common mistakes: expecting an immediate career-defining role from an outsourced KYC queue. Alternative routes: operations/onboarding, paralegal, customer-service roles at banks or fintechs. Entry difficulty: 2/5.

**Honest downsides and who it is NOT a good fit for:** The entry tier is repetitive and is the most exposed to automation: agentic AI could automate an estimated 27% of regulatory-compliance functions and 42% of compliance-monitoring functions (UK Financial Services Skills Commission, as reported by FinTech Global, 2026; estimate not outcome); Standard Chartered plans to eliminate over 7,800 back-office roles by 2030 (AML Intelligence, May 2026), and Nordea and Danske reportedly sought to shrink financial-crime teams (Bloomberg, date unclear). Most surveys expect reshaping of roles, with job losses via attrition rather than mass layoffs. Barclay Simpson reports flat starting salaries and offshoring of operational roles (2026). Not suited to people who want high pay, who dislike saying no to clients, or who need intellectual variety in the first two years.

### 3.6 Bank quant: strats / desk quant, pricing and XVA, model validation

**What you actually do:** *Strats / desk quants* (Goldman Sachs uses "strats", other banks "quantitative analysts/researchers"): implement pricing models for derivatives (Monte Carlo, PDEs, stochastic volatility), build risk and P&L tools for traders, write production code (C++, Python, Java), and sometimes build electronic-trading algorithms. *XVA quants* model valuation adjustments (credit, funding, capital) and the calibration of exposure simulations. *Model validation* quants independently test other models for conceptual soundness and implementation errors, and write validation reports for management and regulators. *Quant risk* teams build the models for VaR, stress and capital.

**A typical day and week:** Desk strat: sit near traders; handle urgent requests (a pricing difference on a trade, a risk report failing), then deeper projects (new model, speed-up, library refactor). Validation: replicate a model, run benchmark tests, write findings, discuss them with model owners; project cycles of weeks. Release deadlines and regulatory submissions drive crunch weeks.

**Hours, stress and lifestyle:** Typical 45-55 hours; peaks of 60-70 on desks during volatile markets or launches (practitioner consensus). Stress: 4/5 on desks (3 in validation). Hybrid is common, but trading-floor roles expect presence; travel low.

**Human vs. quantitative profile:** People/communication: 3/5 (desk quants must work with impatient traders). Quantitative/technical: 5/5 on desks, 4/5 in validation. Strong programming and applied maths are the core.

**Compensation (approximate):**
- US: Goldman Sachs Associate Quantitative Strategist (2024 posting, New York) base US$115k-180k; a Goldman FICC mortgage-strats posting (1-3 years' prior desk quant experience preferred) base US$110k-125k plus discretionary bonus; a third-party 2026 guide estimates first-year analyst total about US$140k-190k (estimate). US Department of Labor H-1B filings for "financial quantitative analysts" (fiscal 2025): JPMorgan median wage US$169,250 (174 filings; 25th-75th percentile US$139.6k-205k), Goldman median US$142,000 (213 filings), base salaries only.
- UK: quant developer analyst GBP 60k-80k base, GBP 70k-110k total (one 2026 guide; source unclear, unverified). Quant developer 0-3 years GBP 70k-100k, 3-5 years GBP 105k-150k, 5+ years GBP 150k-195k (Morgan McKinley 2026 salary guide, London, permanent).
- Italy: junior quant analyst about EUR 35k-45k RAL (Masterin; Jobmentis estimates a median of EUR 39k for juniors and EUR 65k across all levels). One Milan bank listing advertised EUR 100k-130k for a junior quant analyst, which looks like an outlier or an error (aggregator, unverified).
- Asia: Hong Kong quant analyst data exist in Morgan McKinley but I could not retrieve usable bands; no reliable data found for graduate bank quants.
- Senior: bank quant compensation is lower than buy-side at senior level; a 2026 Barclay Simpson trade report says banks are cost-cutting, struggling to retain top quants, and that a small group of US buy-side firms (Citadel, Millennium, Point72) out-compete the market on pay.

**Career path:** Analyst (0-3) -> Associate (3-6) -> VP (6-10) -> Executive Director/Director (10-14) -> Managing Director/desk-head quant (14+). PhDs often enter at associate-equivalent level. Promotion is slower than in the early years at prop firms.

**Exit opportunities:** After 2-3 years: hedge fund or prop firm (most common upward move; eFinancialCareers has described strats moves to hedge funds), fintech or big-tech data/ML, or to quant risk. After 7-10 years: head of quant desk, buy-side researcher/PM (portfolio manager), CRO/CTO roles, regulators' model teams.

**Tier list of employers:** Tier 1 (industry perception): Goldman Sachs (strats), JPMorgan (QR), Morgan Stanley, Citi, Barclays, Deutsche Bank, BNP Paribas, UBS. Tier 2: other universal banks (Societe Generale, Credit Agricole CIB, Natixis, Nomura, HSBC, Standard Chartered; in Italy Intesa Sanpaolo and UniCredit; Mediobanca). Tier 3: smaller banks, asset-manager quant teams, insurers, rating agencies, vendor firms (Bloomberg, Murex, Numerix). Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 offers the most advanced models and compensation; Tier 3 often means validation or support roles.

**How to enter:** Degrees: mathematics, physics, statistics, computer science, engineering, quantitative finance MSc/MFE (Berkeley, Imperial, Oxford MCF, ETH and similar; see the finance branch part on master's programmes) and PhDs for many desk roles. Programmes: bank summer internships and graduate schemes in strats/quant research (applications typically open in late summer-autumn for the following year). Certifications: CQF is aimed at working professionals and is not a substitute for a master's; FRM helps for validation; neither decides hiring. Skills: C++ or Python, numerical methods, probability and stochastic calculus, derivatives pricing basics; interviews combine probability/brainteasers, stochastic calculus, coding tasks, and a project discussion. Common mistakes: reciting textbook formulas without intuition; weak coding; ignoring market knowledge. Alternative routes: computer-science graduates joining quant-developer or strats-developer teams; model validation at a regional bank; PhD-to-quant moves from physics or applied maths. Entry difficulty: 4/5 (5 at the best banks' strats desks).

**Honest downsides and who it is NOT a good fit for:** Cost-cutting and offshoring in banks; bonus cycles are weaker than prop shops; senior pay lags the buy side; model validation can feel bureaucratic. Not suited to people who dislike writing production-quality code or who do not want maths-heavy interviews.

### 3.7 Quantitative researcher and quantitative trader (quant funds and prop trading firms)

**What you actually do:** *Quantitative researcher (QR) at a hedge fund:* collect and clean data, find predictive signals, backtest and combine them into a strategy, work with engineers to deploy, and monitor the live results. *QR at a trading firm:* similar research, plus modelling microstructure (how an order book behaves) and short-horizon price prediction. *Quantitative trader (QT) at a prop/market-making firm:* set parameters of automated strategies, monitor and adjust risk in real time, decide how to quote in changing markets, and work with researchers and developers; in some firms the title also covers research. Tools: Python, C++ (production), SQL, large-scale data, statistics/machine learning. Deliverables: research notes, strategy code and live P&L.

**A typical day and week:** Trader: pre-market checks, then market hours monitoring positions and system behaviour, intervening on events; post-market analysis and review of anomalies; weekly team trade reviews and games or training. Researcher: long stretches on data and experiments, regular team meetings, with deadlines around strategy launches; hedge-fund researchers are evaluated on out-of-sample performance over months and years.

**Hours, stress and lifestyle:** Typical 45-55 hours; peaks of 60-70 in volatile markets or deadlines (practitioner and reviewer anecdotes). Jane Street, per a former engineer's account and review sites (anecdotal; the firm has not confirmed), runs roughly 8am-6pm for trading and engineering desks, with research hours more variable, from near-nothing in some weeks to 50+. Stress: 4/5. The pay is tied to performance; hedge-fund "pod" structures (Citadel, Millennium and peers) add cut risk, whereas Jane Street is described as lower-turnover (comparison sites, vendor-biased). Hybrid is uncommon on live trading teams; relocation across NY, Chicago, London, Amsterdam, Hong Kong, Singapore is normal.

**Human vs. quantitative profile:** People/communication: 3/5 (collaborative, small teams; clients are not external). Quantitative/technical: 5/5. Decision-making under uncertainty and probability are the hiring focus.

**Compensation (approximate; employers do not publish totals):**
- US new grad: Tradermath (updated 28 Sep 2026) estimates a first-year quant researcher at US$310k-450k total (base plus bonus; bonus 45-110% of base), with advertised bases of US$300k at Jane Street, SIG and HRT, US$235k-300k at Citadel and Citadel Securities, US$250k at IMC, US$250k-300k at DRW and US$175k for a PhD Flow Traders role in New York. Quantt's US guide puts graduate quant researchers at US$250k-475k total; Techinterview estimates a first-year Jane Street trader at US$400k-700k total (2026 base floor about US$200k-250k). Citadel self-reports: ten entry-level researchers averaged about US$386k total (about US$252k base, US$132k bonus) (Tradermath). Treat all totals as estimates.
- US ~5 years: base US$180k-250k, total US$420k-930k (Tradermath estimate). Senior (7+ years): total US$640k-1.49m (Tradermath estimate; Jane Street paid an average of US$2.68m per employee in 2025, a company-wide average, not a researcher figure).
- UK (London): 2024 recruiter guide PhD graduate base GBP 100k-150k at top hedge funds, GBP 85k-95k at mid-sized; 1-3 years total GBP 195k-440k (Tradermath estimate); senior base GBP 125k-200k (2024 guide, older than 24 months).
- Netherlands (Amsterdam): first-year total EUR 150k-300k (market estimate, Tradermath/Quantvault); Optiver graduates EUR 120k-180k total, IMC Netherlands first-year base about EUR 100k and total EUR 130k-135k (employee reports); sources conflict, no firm publishes pay.
- Hong Kong/Singapore: PhD graduate base US$120k-150k at tier-one funds and trading firms, US$90k-110k at boutiques (2024 recruiter guide); quant researcher 1-3 years HK$1.65m-3.0m (Tradermath estimate); a Jane Street Hong Kong graduate listing aggregated at HK$2.25m base (date unclear). Hong Kong top personal tax rate is 15%/16%, so net pay is relatively high.
- Italy: no reliable data found for graduate quant researcher/trader pay (no large prop-trading office in Milan that I could verify). Tokyo: no reliable data found.

**Career path:** Junior (0-2) -> trader/researcher with own strategies (2-5) -> senior/portfolio-level responsibility (5-10) -> team lead, head of strategy, or running a book. Pay is highly variable; strong performers can leave to start their own funds, while weak performers are removed.

**Exit opportunities:** After 2-3 years: other prop or hedge funds (lateral moves are common but non-competes in the UK and some US states limit mobility, often with several months of garden leave), PhD return, startups. After 7-10 years: portfolio manager, head of research, founding a fund, venture/AI start-up founders, early retirement.

**Tier list of employers:** Tier 1 (industry perception): Jane Street, Citadel Securities, Hudson River Trading, Jump Trading, Optiver, IMC, SIG, DRW (prop/market makers); Renaissance, Two Sigma, D. E. Shaw, Citadel, Millennium, Point72, AQR, Man AHL, WorldQuant (hedge funds). Tier 2: Flow Traders, Virtu, XTX Markets, Tower Research, Qube, G-Research, Squarepoint, CFM, Balyasny quant teams, mid-sized funds. Tier 3: smaller or newer shops, regional prop firms, bank-owned quant trading desks, emerging-market funds. Tier groupings reflect industry consensus and practitioner perception, not objective fact. The top tier pays the most, runs rigorous selection (often weighted to elite maths/CS schools and olympiad medallists), and is heavily internship-fed; Tier 3 is easier to enter and pays less with less infrastructure.

**How to enter:** Degrees: mathematics, statistics, physics, CS, engineering, quantitative economics; a PhD is common (and for many hedge-fund QR roles effectively expected, per a 2026 TechInterview blog that I could not verify) while prop-trading roles take bachelor's and master's graduates. Man Group runs AHL graduate schemes (a two-year IDI programme and an 18-month Quant Talent Programme with rotations; applications open autumn 2026; open from bachelor's to PhD, per Man Group). Optiver's EU graduate and intern registration is open to STEM bachelor's, master's and PhD graduating between December 2025 and June 2027 (Optiver, 2026). Recruiting calendar for 2027 starts (Quantvault, 16 Aug 2026, "observed pattern, not official"): postings go live June-August (Citadel, HRT, Jane Street), second wave September (Optiver, IMC, SIG, Two Sigma, D. E. Shaw), phone screens and superdays October-November, most flagship cohorts filled by December, off-cycle hedge-fund roles January-February. Jane Street reviews on a rolling basis. Internships, usually taken the summer before the final year, are the main pipeline. IMC runs a Hong Kong internship for summer 2027 leading to a 2028 graduate role. Certifications: none matter; CFA/FRM are irrelevant here; a PhD or contest record matters more. Skills: probability, statistics, mental arithmetic, market-making games, Python/C++, and for researchers machine learning and time-series analysis. Interview formats: mental-math tests, probability and expected-value puzzles, poker or card-game bidding games, coding screens, research discussion; Jane Street's quant-trader interview is reported to need no finance knowledge (prep-site claim). Common mistakes: late application, over-memorising puzzle solutions, not practising out loud, ignoring risk-taking questions. Alternative routes: start in a bank strats/quant developer role and move after two or three years; PhD with strong publications; programming-contest results; apply to smaller shops first. Entry difficulty: 5/5.

**Honest downsides and who it is NOT a good fit for:** Extremely selective; pay depends on performance and firm profits (bonuses tied to market conditions, Barclay Simpson reports that only 23% of employers expect higher bonuses in 2026); hedge-fund pod model has performance cuts; non-competes and garden leave limit mobility; the work can be narrow and intensely competitive; strategies can stop working. Not suited to people who are uncomfortable with variable pay and the possibility of being let go, who want a regular schedule, or who want a client-facing role.

### 3.8 Quant developer / trading-systems engineer

**What you actually do:** Build and maintain the code that runs quant finance: pricing and risk libraries at banks; research platforms, data pipelines and backtesting engines at funds; ultra-low-latency C++ order-routing, market-data handlers and exchange gateways at trading firms (including FPGA work at the extreme end). Responsibilities: performance optimisation, testing, deployment, monitoring and fixing production incidents. Tools: C++ (modern), Python, Java/C# at some banks, Linux, networking, profilers, cloud and distributed systems, increasingly GPU/ML infrastructure.

**A typical day and week:** Writing and reviewing code, profiling and shaving microseconds, meeting traders or researchers about requirements, and handling live incidents (at trading firms an exchange outage or a bad release can cost real money in minutes). On-call rotations exist at many firms. Release days and exchange rule changes create busy periods.

**Hours, stress and lifestyle:** Typical 45-55 hours; peaks of 60-70 during incidents or launches (practitioner consensus). Stress: 3-4/5 (production incidents; 3 at banks). Hybrid more common than for traders, particularly at banks; travel low.

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 4/5 (programming and systems skills are at 5; maths is moderate). Communication with traders and researchers about trade-offs matters.

**Compensation (approximate):**
- US: HRT's 2027 graduates start at a US$300k base for algorithm developers and software engineers, plus sign-on and discretionary bonus (Tradermath/Quantt, Sep 2026; a 2025-cohort HRT C++ posting quoted US$175k-250k base). Levels.fyi (Jan 2026) shows HRT entry-level SWE about US$403k total (about US$216k base, US$180k bonus). Jump Trading estimated US$250k-500k graduate total (aggregators). Jane Street and Citadel Securities are in the same band as researchers (see 3.7). Banks pay far less: Payscale shows NYC entry-level quant developers around US$85k base (all-market average; badly understates HFT pay).
- UK: Morgan McKinley 2026: London quant developer 0-3 years GBP 70k-100k, 3-5 years GBP 105k-150k, 5+ years GBP 150k-195k (base, mostly bank/fund market). Bank analyst total GBP 70k-110k (one 2026 guide, unverified); prop-shop London figures not found (no reliable data found).
- Italy: no reliable data found; bank developer positions in Milan likely follow general software-engineer pay (unverified).
- Hong Kong: quant developer base HK$960k-2.0m, median HK$1.3m, before bonus (recruiter survey 2026, via Tradermath).

**Career path:** Developer (0-3) -> senior developer (3-7) -> tech lead / team lead (7-12) -> head of trading technology, CTO of a desk or firm. Some move into quant research or trading ("dev to quant").

**Exit opportunities:** After 2-3 years: another trading firm, big tech (low-latency/infrastructure), or AI infrastructure start-ups. After 7-10 years: head of engineering, CTO at a fund, founding a trading startup or fintech.

**Tier list of employers:** Tier 1: HRT, Jane Street, Jump, Citadel Securities, Optiver, IMC, SIG, DRW, Two Sigma, D. E. Shaw (market-leading engineering, pay and cultures that prize C++ and systems depth). Tier 2: Flow Traders, XTX Markets, G-Research, Tower Research, bank electronic-trading teams (Goldman, JPMorgan, Morgan Stanley). Tier 3: bank technology divisions on the sell side, brokers, exchange technology firms and vendors. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 offers frontier performance engineering and top pay; Tier 3 often means application and integration work.

**How to enter:** Degrees: computer science, engineering, mathematics, physics. Graduate and internship programmes at trading firms follow the same calendar as 3.7 (postings go live in June-August; HRT's "2027 Grads" roles appeared in early July across New York, London and Singapore, per Quantvault). Certifications do not matter; CQF is unnecessary. Skills: modern C++, operating-system internals, CPU architecture, networking (HRT's job post emphasises these), algorithms; Python for research tools. Interviews: coding tests (algorithms), systems design, C++ depth and performance questions, sometimes probability puzzles. Common mistakes: relying on Leetcode alone and ignoring systems knowledge; treating quant developer as "software job in finance" without understanding the business. Alternative routes: open-source contributions, competitive programming, a systems or embedded background, a bank or exchange technology role first. Entry difficulty: 4/5 (5 at the top trading firms).

**Honest downsides and who it is NOT a good fit for:** Production incidents and on-call; at banks the work can be legacy-heavy and badly paid compared with big-tech engineering (US bank quant developers earn far less than at HRT or Jane Street); fewer roles outside a few cities; the top firms are as selective as quant-research roles. Not suited to people who want product-led, user-facing software or who dislike low-level performance work.

### 3.9 Fintech business roles (strategy/bizops, product, risk/credit, partnerships)

**What you actually do:** *Strategy and bizops:* size markets, model unit economics (customer acquisition cost, lifetime value, take rate, losses), plan expansion into new countries and licences. *Product management:* decide what features to build for payments, cards, lending or wealth, working with engineers and compliance. *Risk/credit:* build scorecards and rules for fraud and lending, monitor loss rates and approval rates (SQL, Python, experimentation). *Partnerships:* build integrations and revenue deals with merchants, banks, card networks or platforms. *Compliance/financial-crime teams* are a huge hiring pool in fintechs (see 3.5). A note on fintech engineering roles: software engineers, data engineers and security engineers are the largest hiring group at fintechs; see the Computer Science branch.

**A typical day and week:** Fast, cross-functional and metric-driven: daily dashboards, weekly business reviews with executives, and many ad-hoc analyses. A credit-risk analyst might tune an approval rule in the morning and present loss curves in the afternoon; a bizops analyst may spend a week on a launch-readiness plan for a new country.

**Hours, stress and lifestyle:** Typical 45-55 hours; peaks of 60-65 at launches, funding rounds or incidents at startups (practitioner consensus). Stress: 3/5, higher in early-stage firms where survival depends on funding. Flexible or hybrid at most; travel moderate for partnerships and international expansion. Layoffs and restructurings are more common than in banks.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 3/5 (SQL and analytics skills are the entry ticket; risk/credit roles reach 4). Roles blend commercial judgement, product sense and data.

**Compensation (approximate):**
- US, UK, Italy: no reliable data found for graduate business roles at Stripe, Adyen, Revolut, Wise or Satispay (searches returned mostly engineering pay). Fintech packages usually include equity or RSUs; Wise's London graduate backend role was advertised at GBP 47k plus RSUs (expired posting, engineering). Hiring tracker snippets suggested Revolut is expanding hiring in India, with 1,600+ open roles mostly there (vendor hiring guide, Q1 2026), which implies fewer London operations roles (single source).
- Senior: no reliable data found.

**Career path:** Analyst/associate (0-3) -> senior analyst or product manager (3-6) -> lead/manager (6-10) -> director, GM of a country or product line (10+) -> C-level at smaller firms. Titles are less standardised than in banks; scope grows quickly when the company grows.

**Exit opportunities:** After 2-3 years: bigger fintech, banks' digital/innovation units, big tech product roles, consulting, VC/growth-equity analyst roles. After 7-10 years: founder, country head, CFO/COO/CPO at a startup, VC partner.

**Tier list of employers:** Tier 1 (industry perception): scaled, profitable fintech leaders and incumbents: Stripe, Adyen, Revolut, Wise, Visa, Mastercard, PayPal, Klarna, Nubank, Coinbase. Tier 2: well-funded scale-ups (Monzo, N26, Chime, Plaid, Checkout.com, Nexi in Italy, Satispay, Scalapay). Tier 3: early-stage start-ups, many with funding risk, and smaller regional fintechs. Tier groupings reflect industry consensus and practitioner perception, not objective fact. Tier 1 offers brand, training and stable equity; Tier 3 offers responsibility but higher failure risk (investment is concentrating in later-stage companies, KPMG 2026).

**How to enter:** Degrees: business, economics, finance, engineering, data science; for risk/credit roles, statistics or quant backgrounds. Routes: graduate/associate programmes at bigger fintechs (applications typically year-round or in autumn; Wise advertises a Graduate Product Analyst scheme starting September 2026), internships, and lateral moves from banks, consulting or startups. Certifications: none required (CAMS helps for compliance roles). Skills: SQL, spreadsheet modelling, unit economics, product thinking, regulatory basics. Interviews: case studies (market sizing, pricing, growth), SQL tests, product cases. Common mistakes: joining a startup for the brand without checking runway; assuming a fintech label means high pay. Alternative routes: operations and customer-support roles at a scale-up, bank internal move, data analytics. Entry difficulty: 3/5 (4 at the best-known fintechs).

**Honest downsides and who it is NOT a good fit for:** Job security is lower; regulation and funding cycles can hit suddenly; MiCA, licensing or banking-partner problems can end business models; pay is often below banks except through equity, which can end up worthless. Not suited to people who need stability, a structured training track, or highly predictable career progression.

### Role family summary

| Role family | Typical hours/week (peak) | Stress 1-5 | People 1-5 | Quant 1-5 | Entry comp: US / UK / Italy (approx., currency, base or total) | Entry difficulty 1-5 |
|---|---|---|---|---|---|---|
| 3.1 FP&A / corporate finance analyst | 42-50 (55-65) | 3 | 4 | 3 | US ~US$71k-88k base (RH, unverified); UK no reliable data; Italy ~EUR 37k-43k median controller (aggregator) | 2 |
| 3.2 Corporate treasury analyst | 40-48 (50-60) | 3 | 3 | 3 | US ~US$69k-71k median base (Salary.com, 2024); UK no reliable data; Italy no reliable data | 3 |
| 3.3 Corporate development | 45-55 (65-80) | 3 (4 in live deals) | 4 | 3 | US ~US$100k-120k base, US$150k-175k total (one posting); UK no reliable data; Italy no reliable data | 4 |
| 3.4 Risk management | 42-50 (55-65) | 3 | 3 | 3 | US ~US$106k median all-level (BLS), entry not found; UK GBP 42k-68k base at 2-5 yrs (FD Capital); Italy EUR 28k-35k RAL (Masterin) | 3 |
| 3.5 Compliance and financial crime | 38-45 (50-55) | 3 | 3 | 2 | US no reliable data; UK GBP 32k-52k base (AML/KYC, FD Capital); Italy EUR 27k-33k RAL (Masterin) | 2 |
| 3.6 Bank quant (strats, XVA, validation) | 45-55 (60-70) | 4 | 3 | 4 (5 on desks) | US ~US$110k-180k base (Goldman postings) , total ~US$140k-190k (est.); UK GBP 60k-100k base (quant dev/analyst guides); Italy EUR 35k-45k RAL (Masterin) | 4 |
| 3.7 Quant researcher / trader (funds, prop) | 45-55 (60-70) | 4 | 3 | 5 | US ~US$310k-450k total (Tradermath est.; base US$175k-300k); UK PhD base GBP 100k-150k at top funds (2024 guide); Italy no reliable data | 5 |
| 3.8 Quant developer / trading-systems engineer | 45-55 (60-70) | 3-4 | 3 | 4 | US HRT 2027 grads US$300k base; Levels.fyi ~US$403k total; banks far lower; UK GBP 70k-100k base (bank/fund market); Italy no reliable data | 4 |
| 3.9 Fintech business roles | 45-55 (60-65) | 3 | 4 | 3 | US no reliable data; UK no reliable data; Italy no reliable data | 3 |

## 4. Banks vs. other employer types

The same job names appear in very different workplaces. This table compares, for the roles in this part, the employer types the prompt asked for. Ratings are approximate judgements from the sources cited above plus practitioner consensus; stress uses the shared 1-5 scale. Pay is relative to a graduate in the same city.

| Employer type | Typical hours/week (peak) | Stress | Pay (entry, relative) | Culture | Autonomy |
|---|---|---|---|---|---|
| Bank (investment/universal) | 45-55 (60-70 on desks; 40-48 in compliance/risk) | 3-4 | Medium-high; bonus year-dependent; quants US$110k-180k base, London developers GBP 60k-100k | Hierarchical, regulated, formal; slower promotions | Low-medium; second line is constrained by policy |
| Insurer | 38-45 (50) | 2-3 | Medium; strong benefits; Italy's Generali, Allianz, AXA, Mapfre-type groups | Conservative, stable, actuarial culture | Low-medium |
| Asset manager | 42-50 (55-60) | 3 | Medium-high; risk/quant roles can have meaningful bonus | Research- and performance-driven; smaller teams | Medium |
| Quant hedge fund | 45-55 (60-70) | 4 | Very high (US$250k-475k total new-grad QR estimates), strongly bonus-linked | Performance-driven; pod models can have cuts; PhD-heavy | High on research, low on structure |
| Proprietary trading / market-making firm | 45-55 (60-70) | 4 | Highest (US$300k+ base for top graduate cohorts, totals US$400k-700k estimates for traders) | Collaborative, puzzle- and game-oriented, flat structure; selectivity is extreme | High; early responsibility |
| Big tech / fintech | 40-50 (60 at launches) | 3 | Medium-high; equity-heavy; business roles pay data scarce | Product-led, informal, fast-moving | Medium-high |
| Non-financial corporate | 40-48 (55-65 at quarter-end) | 2-3 | Lower (US$70k-100k analyst, EUR 37k-43k Milan controller) | Stable, process-driven, good work-life balance | Medium (rises in business-partner roles) |
| Regulator / central bank | 35-42 (45-50) | 2 | Lower; Bank of England GBP 33,525 (2026 graduate), ECB net EUR 4,982 a month (2026, EU nationals only) | Public-service, rigorous, procedural; strong benefits | Medium (policy influence over time) |

Commentary. **Banks** pay well but compress risk, compliance and validation into cost-controlled functions; the market is cutting senior roles and offshoring junior work (Barclay Simpson, 2026). **Insurers and asset managers** are quieter, with risk and actuarial work valued, and they hire from the same degrees. **Quant funds and prop firms** pay far more but are selective and variable: the Jane Street average of US$2.68m per employee in 2025 (Tradermath) is a company-wide figure that signals the economics, not what a graduate will see. **Non-financial corporates** are the best lifestyle bet; the pay penalty is real. **Regulators/central banks** buy stability and policy influence; graduate pay (Bank of England GBP 33,525 for the 2026 intake; ECB graduate net EUR 4,982 monthly, EU nationals only) is a fraction of private-sector quant pay. **Fintech** can be exciting but is cyclical.

**Regional differences.**
- **New York / Chicago:** The centre of US prop trading (Jane Street, Citadel Securities, HRT, SIG, DRW, Jump) and hedge funds (Citadel, Millennium, Point72, Two Sigma, D. E. Shaw). Highest absolute pay; Chicago's base ranges are slightly lower in the Tradermath data (US$165k-246k typical base vs US$182k-250k in New York).
- **London:** The main European hub for banks' risk, compliance and quants, and for hedge funds (Man AHL, Citadel, Millennium, G-Research, XTX); pay is lower than New York by roughly a third to a half at junior levels (my inference from Tradermath estimates, London 1-3 years total GBP 195k-440k). London pay for financial crime and risk follows the FD Capital and Barclay Simpson benchmarks; London pays 20-40% above regional UK.
- **Amsterdam:** The home of the European electronic market makers (Optiver, IMC, Flow Traders). Pay sits below London/New York at graduate level but is high versus the Dutch market; the Dutch "30% ruling" tax benefit is being reduced (unverified; check). Culture: Dutch, flat, informal.
- **Milan / Italy:** Strong in corporate finance, banking (Intesa Sanpaolo, UniCredit, Mediobanca/MPS), insurance (Generali), and fintech (Nexi, Satispay, Scalapay); graduate pay is a fraction of London's (EUR 27k-45k for risk, compliance and quant graduates in the sources I found), hours are somewhat shorter, and top quant/prop-trading seats are mostly abroad (London, Amsterdam, Paris, Zurich). Satispay announced about 400 hires for 2025 across Milan, Naples and Luxembourg (QuiFinanza, 2025). Italian fintech is concentrated in Milan.
- **Hong Kong:** Prop firms and hedge funds are expanding (Jane Street, IMC, Jump), and pay is high with low taxes; the data show HK$960k-2.0m base for quant developers and HK$1.65m-3.0m total for researchers with 1-3 years (Tradermath 2026). Stablecoin licences were first granted in 2026.
- **Singapore:** Regional hub for prop trading and funds (Optiver's Career Kickstarter in Singapore ran 21-25 September 2026; Jane Street moved to a larger office in May 2026 and has nearly 600 people in Asia Pacific, per press reports) and strong in corporate treasury (Robert Half: treasury analyst S$80k-100k).
- **Tokyo:** Smaller quant market; macro and multi-strategy funds are expanding (Brevan Howard plans a Tokyo office in 2026 and is hiring traders per Bloomberg, April 2026); Citadel Securities opened a Tokyo office in 2022. Language skills usually matter. No reliable pay data found.
- **Dubai:** Growing DIFC/ADGM financial centre with fintech and crypto licensing, but I found no reliable hiring or pay data; treat claims by recruiters as unverified.

## 5. Which backgrounds fit this branch

### (a) Fit by base background

| Background | Fit | One-line reason |
|---|---|---|
| Management | possible | Good for fintech business roles and corp dev ideas, but corporate finance and risk need numbers; weak for quant. |
| Logistics & Supply Chain | possible | Understands working capital and cash conversion (useful in treasury/FP&A) and sanctions/trade compliance; limited for quant and bank risk. |
| Finance | strong | The default for FP&A, treasury, risk and corp dev; credible for compliance; quant roles need extra maths/programming. |
| Accounting | strong | The standard route into FP&A, controllership, treasury and financial-crime/compliance; limited for quant. |
| Marketing | stretch | Useful only in fintech growth/product roles; corporate finance and risk expect quantitative training. |
| Data Analytics | strong | SQL and analytics fit risk, transaction monitoring, fintech credit/risk and FP&A; deep quant needs more maths. |
| Economics | strong | Close match for FP&A, risk and corp dev, and a bridge to quant if combined with statistics and coding. |
| Computer Science | strong | Core route for quant developers and QR/QT at trading firms; also works for fintech and RegTech. |
| Cybersecurity | possible | Operational/technology risk and fraud in fintech; stretch for quant research. |
| Data Science | strong | Natural for risk modelling, credit scoring, bank quant, quant research and fintech analytics. |
| Artificial Intelligence | strong | Strong for quant research, bank quant and fintech credit/fraud models; thin finance knowledge must be built. |

### (b) Matrix: background vs. role family (S = strong, P = possible, X = stretch)

| Background | 3.1 FP&A | 3.2 Treasury | 3.3 Corp dev | 3.4 Risk | 3.5 Compliance | 3.6 Bank quant | 3.7 QR/QT | 3.8 Quant dev | 3.9 Fintech biz |
|---|---|---|---|---|---|---|---|---|---|
| Management | P | P | P | X | P | X | X | X | S |
| Logistics & Supply Chain | P | X | X | X | P | X | X | X | P |
| Finance | S | S | S | S | S | P | P | X | S |
| Accounting | S | S | P | P | S | X | X | X | P |
| Marketing | X | X | X | X | X | X | X | X | P |
| Data Analytics | P | P | X | S | S | X | X | X | S |
| Economics | S | P | S | S | P | P | P | X | S |
| Computer Science | X | X | X | P | P | P | S | S | P |
| Cybersecurity | X | X | X | P | P | X | X | X | P |
| Data Science | P | P | X | S | P | S | S | P | S |
| Artificial Intelligence | X | X | X | P | P | S | S | P | P |

Notes: Computer Science and Cybersecurity also have strong fintech engineering paths (see the Computer Science branch). A "P" for Economics in quant roles assumes a strong mathematical track; a plain economics curriculum is a stretch.

## 6. Sources

All URLs were accessed in October 2026 unless a date is given.

1. Tradermath, "Quant researcher salaries" (updated 28 Sep 2026). https://www.tradermath.org/salaries/quant-researcher
2. Tradermath, firm and city pages (Citadel, Optiver, IMC, Flow Traders, HRT, Hong Kong), updated 28 Sep 2026. https://www.tradermath.org/salaries/hong-kong
3. TechInterview, "What Jane Street Actually Pays Quants in 2026". https://www.techinterview.org/post/3233475436/jane-street-quant-pay-2026/
4. Quantt, "US quant salary guide" and "HRT salary", 2026. https://www.quantt.co.uk/resources/us-quant-salary-guide ; https://www.quantt.co.uk/resources/hrt-salary
5. Quantt, "Optiver salary"; Quantvault "Optiver salary" and "Optiver vs IMC vs Flow Traders". https://www.quantt.co.uk/resources/optiver-salary ; https://quantvault.org/optiver-vs-imc-vs-flow-traders.html
6. Quantvault, "The Quant New-Grad (Full-Time) Timeline for 2027 Starts" (updated 16 Aug 2026). https://quantvault.org/quant-new-grad-timeline-2027.html
7. Barclay Simpson, "2026 Quant Trading: Salary and bonus trends" (PDF, July 2026). https://www.barclaysimpson.com/wp-content/uploads/2026/07/2026-Quant-Trading-Salary-and-bonus-trends.pdf
8. Barclay Simpson, "2026 Financial Crime: Salary and bonus trends" (PDF, Feb 2026). https://www.barclaysimpson.com/wp-content/uploads/2026/04/2026-Financial-Crime-Salary-and-bonus-trends.pdf
9. FD Capital, "Compliance Salaries UK 2026" (data to March 2026). https://www.fdcapital.co.uk/compliance-salary-guide/
10. Morgan McKinley, Quant Developer salary guide, London, 2026. https://www.morganmckinley.com/uk/salary-guide/data/quant-developer/london
11. Robert Half, UK Finance and Accounting Salary Guide 2026. https://roberthalf.com/gb/en/insights/salary-guide/finance-and-accounting
12. Robert Half, country job pages: US FP&A analyst, Singapore treasury analyst, Hong Kong treasury analyst, France FP&A analyst (2026 guide figures via search snippets). https://www.roberthalf.com/us/en/job-details/fpa-analyst ; https://www.roberthalf.com/sg/en/job-details/treasury-analyst ; https://www.roberthalf.com/hk/en/job-details/treasury-analyst-s-m ; https://www.roberthalf.com/fr/fr/details-emploi/fpa-analyste
13. US Bureau of Labor Statistics, Occupational Outlook Handbook: Financial Analysts and Financial Managers (May 2024 wage data). https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm ; https://www.bls.gov/ooh/management/financial-managers.htm
14. AFP, "Base salaries for treasury and finance professionals increased 3.9% in 2024" (2025 compensation survey press release). https://www.financialprofessionals.org/about/learn-more/press-releases/Details/survey-base-salaries-for-treasury-and-finance-professionals-increased-3.9-in-2024
15. AFP, CTP certification FAQs and candidate handbook. https://ctpcert.afponline.org/FAQs
16. Association of Corporate Treasurers (ACT), Qualifications Summary 2025. https://learning.treasurers.org/Academyfiles/1824_ACT_Qualifications_Summary_2025.pdf
17. GARP, FRM frequently asked questions. https://www.garp.org/frm/frequently-asked-questions ; 300Hours, "FRM work experience" and pass-rate commentary. https://300hours.com/frm-work-experience/
18. Goldman Sachs careers, FICC Mortgage Strats posting (NY). https://higher.gs.com/roles/152038 ; OpenQuant, Goldman Associate Quantitative Strategist posting. https://openquant.co/job/associate-quantitative-strategist-goldman-sachs/2207
19. Scholarshipsads, "Financial Quantitative Analysts Salary (2025)" (US DOL H-1B data summary, FY2025). https://www.scholarshipsads.com/salary/financial-quantitative-analysts
20. Man Group, Graduate Programmes (AHL IDI and Quant Talent Programme). https://www.man.com/node/6149
21. Optiver, EU Graduate and Intern Expression of Interest (2026); Optiver Singapore Career Kickstarter. https://builtin.com/job/2026-eu-graduate-intern-expression-interest/4403633 ; https://www.optiver.com/join-us/jobs/institutional-sales-and-trading/singapore/career-kickstarter-singapore-trading-and-research/
22. IMC, "Inside IMC's first Hong Kong internship". https://www.imc.com/ap/articles/inside-imc-s-first-hong-kong-internship-where-trading-careers-begin
23. Bloomberg, "Brevan Howard Plans Tokyo Office, to Hire Traders in Hub Boost" (21 Apr 2026). https://www.bloomberg.com/news/articles/2026-04-21/brevan-howard-plans-tokyo-office-to-hire-traders-in-hub-boost ; Citadel Securities, Tokyo office announcement (2022). https://www.citadelsecurities.com/news-and-insights/citadel-securities-opens-tokyo-office-continuing-global-expansion/
24. Bank of England, Graduate programmes. https://www.bankofengland.co.uk/careers/future-talent/graduate-programme ; ECB 2026 Graduate Programme listing. https://www.heysuccess.com/opportunity/European-Central-Bank-2026-Graduate-Programme-31491
25. Regulation Tomorrow, "Commission Delegated Regulation postponing application of FRTB" (Sep 2025). https://www.regulationtomorrow.com/2025/09/commission-delegated-regulation-postponing-application-of-frtb/ ; Deloitte UK, "FRTB implementation in the EU". https://www.deloitte.com/uk/en/blogs/ecrs/frtb-implementation-in-the-eu-the-commission-buys-itself-time
26. Bloomberg Professional, "The U.S. Basel III endgame enters a new phase" (2026). https://professional.content.cirrus.bloomberg.com/professional2023/insights/financial-services/the-u-s-basel-iii-endgame-enters-a-new-phase
27. Federal Reserve, 2026 DFAST results (24 June 2026). https://www.federalreserve.gov/publications/files/2026-dfast-results-20260624.pdf ; The Asian Banker summary. https://www.theasianbanker.com/updates-and-articles/all-32-us-banks-pass-fed-stress-test-as-higher-rate-assumptions-offset-growing-credit-losses
28. EBA, "The EBA publishes the results of its 2025 EU-wide stress test" (1 Aug 2025). https://www.eba.europa.eu/publications-and-media/press-releases/eba-publishes-results-its-2025-eu-wide-stress-test ; Regulation Tomorrow, "EBA issues draft methodology and templates for 2027 EU-wide stress test" (Jun 2026). https://www.regulationtomorrow.com/2026/06/eba-issues-draft-methodology-and-templates-for-2027-eu-wide-stress-test/
29. Elvinger Hoss Prussen, "MiCA: end of the transitional period on 1 July 2026"; Elliptic, "The end of MiCA's transitional period". https://elvingerhoss.lu/insights/publications/mica-end-transitional-period-1-july-2026 ; https://www.elliptic.co/blog/the-end-of-micas-transitional-period
30. KPMG, "Pulse of Fintech H2 2025" (Feb 2026). https://assets.kpmg.com/content/dam/kpmgsites/be/pdf/Pulse-of-Fintech-H2-2025-Report.pdf ; CB Insights 2025 funding via press summary. https://letsdatascience.com/news/fintech-secures-527b-venture-funding-in-2025-303e4316
31. Revolut, 2025 results press release (24 Mar 2026). https://www.revolut.com/en-AT/news/revolut_reports_record_profit_of_2_3bn_for_2025_as_revenue_surges_to_6bn/
32. Adyen, H1 2026 financial results (13 Aug 2026). https://www.adyen.com/press-and-media/adyen-publishes-h1-2026-financial-results-3wjne
33. Hubbis / blockeden, Hong Kong stablecoin licensing (Mar-May 2026; blockeden single-source for April approval). https://www.hubbis.com/news/hong-kong-advances-stablecoin-framework-with-new-licences ; https://blockeden.xyz/blog/2026/05/07/hong-kong-stablecoin-licensing-asia-pacific-regulatory-race/
34. FinTech Global, "Agentic AI set to transform financial crime operations" (12 Jan 2026). https://fintech.global/2026/01/12/agentic-ai-set-to-transform-financial-crime-operations/ ; AML Intelligence, Standard Chartered job cuts (May 2026). https://www.amlintelligence.com/2026/05/news-standard-chartered-to-cut-7800-jobs-replacing-lower-value-human-capital-with-ai/
35. Masterin (Italian career database): Risk management specialist, Quantitative analyst, Anti Money Laundering Analyst (undated, accessed 2026). https://www.masterin.it/professioni/risk-management-specialist-987/ ; https://www.masterin.it/professioni/quantitative-analyst-1205 ; https://www.masterin.it/professioni/anti-money-laundering-analyst-1174/
36. Jooble Italy, Milan controller salary pages (data to 29 July 2026). https://it.jooble.org/salary/controller-finance-manager/Milano
37. Hays Italy, Salary Guide 2026 overview. https://www.hays.it/en/salary-guide/overview
38. UniCredit careers, Analyst/Graduate Milan posting (base EUR 40,000 gross; IB role, comparison only). https://careers.unicredit.eu/en_GB/jobsuche/JobDetail/Analyst-Graduate-Group-Advisory-Financing-Solutions-Milan-f-m-d/55940
39. QuiFinanza, "Satispay, 400 nuove assunzioni" (2025). https://quifinanza.it/lavoro/satispay-assunzioni-welfare/888016/ ; Comune di Milano, "Milano: Europe's new fintech frontier" (promotional, undated). https://yesmilano-test.ecaas.comune.milano.it/en/articles/milano-europes-new-fintech-frontier
40. LearnSignal, "Big Four Graduate Salary UK 2026". https://www.learnsignal.com/blog/big-four-graduate-salary-uk-2026/
41. Wallstreetmojo, corporate development careers; Selby Jennings corporate development posting (2025). https://wallstreetmojo.com/corporate-development-careers ; https://www.selbyjennings.com/en-ch/job/corporate-development-associate-pr536191_1741967492
42. Quantvault and Fishbowl/Glassdoor commentary on Jane Street and Citadel hours (anecdotal; treated as signals only). https://quantvault.org/jane-street-vs-citadel.html ; https://www.fishbowlapp.com/post/does-anyone-know-what-the-wlb-is-at-jane-street-quant
43. TechInterview, "MS vs PhD for Quant Research" (2026; unverified blog claims). https://www.techinterview.org/post/3233474733/ms-vs-phd-quant-research/
44. Project prior research (used for leads only; verified or flagged): `research/careers/finance.md` and `research/careers/accounting-and-corporate.md` (early October 2026).

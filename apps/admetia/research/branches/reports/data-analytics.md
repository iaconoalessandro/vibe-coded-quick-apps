# Data Analytics

*Italian pay: where this report says "no reliable data found" for Italy, see [italy-pay-addendum.md](italy-pay-addendum.md) for recruiter-guide, contract (CCNL) and posting figures. Shared rating scales and the cross-branch comparison are in [../index.md](../index.md).*

## 1. What this branch is

Data analytics is the work of turning a company's raw records (sales, clicks, shipments, payroll, claims) into numbers people can trust and act on: reports, dashboards, explanations of what happened and why, and recommendations on what to do next. It is mostly descriptive and diagnostic ("returns rose 8% in the north; here is why"), not predictive modelling. Typical tools are SQL, Excel, a BI (business intelligence) tool such as Power BI, Tableau or Looker, and increasingly dbt for transforming data inside a warehouse. Analytics sits between the business (finance, marketing, operations, HR) and the technical data teams, so it rewards people who can do both talking and numbers. It is one of the most accessible technical entry points for business, economics and engineering graduates, but in 2026 the junior end of the market is tougher than the headline demand suggests, and AI assistants are absorbing the most routine query-and-chart work.

Scope notes: Global scope with US, UK, Italy (Milan where found), Hong Kong, Singapore, Tokyo, Dubai and India/Eastern Europe offshoring; today is 9 October 2026 and figures are dated; salary evidence for entry-level and for Italy is thin (aggregators, a few job adverts, and one recruiter guide summary), so ranges marked "author estimate" or "unverified" are judgement, not data; statistical modelling/ML (data science), AI/ML engineering, data and software engineering, FP&A and marketing strategy are covered by other branches and only cross-referenced here.

## 2. Map of areas and sectors

**2.1 What data analytics is in 2026, and the job market.**
Analytics covers descriptive analysis (what happened), diagnostic analysis (why), reporting and dashboards, and the "modern data stack": data is pulled from source systems into a cloud data warehouse (a large central database such as Snowflake, BigQuery, Databricks or Microsoft Fabric) by ingestion tools, cleaned and modelled with SQL (often with dbt), and displayed in a BI tool. Where it ends: *data engineering* builds and runs the pipelines and platform (see the software and data engineering branch); *data science* builds statistical models, experiments and machine learning (see the data science branch); *analytics* uses the prepared data to answer business questions and owns the metrics and dashboards. Analytics engineering sits on the border with engineering; product analytics borders on data science when it designs experiments. Titles are inconsistent, so read the job description, not the title.

Demand data, dated:
- UK adverts (ITJobsWatch, 6 months to 9 Oct 2026): 1,130 permanent adverts cite "Data Analyst", up from 474 a year earlier and 730 in 2024; median advertised salary £52,500 (25th percentile £40,000, 75th £65,000). The same page shows the 2025 median at £45,000, so part of the "rise" is a mix effect from a thin 2025. Top skills in adverts: SQL 42%, BI 37%, Power BI 36%, Python 30%, Excel 27%, AI 23%. Business Analyst adverts: 1,520 (701 a year earlier), median £55,000. Power BI is cited by 2,355 permanent adverts (median £55,000), Tableau by 649 (median £55,000). ITJobsWatch skews to IT-recruiter adverts and experienced hires, so it understates graduate pay.
- US (BLS Occupational Outlook, May 2025 pay, projections 2025 to 2035): data scientists (the BLS category closest to BI/analytics roles; the page lists BI analysts as a related O*NET occupation) median $120,230, growth 35%; operations research analysts $88,940, +12%; management analysts $101,860, +10%; market research analysts $78,760, +7%; logisticians $82,320, +18%; HR specialists $75,940, +6%. BLS does not publish a separate data analyst line.
- The World Economic Forum Future of Jobs 2025 ranks big data specialists as the fastest-growing role by percentage to 2030; data analysts appear in growth lists in secondary summaries only (not verified against the full report).
- Italy: the Politecnico di Milano Osservatorio estimates the Italian big data and analytics market at EUR 4.1bn in 2025 (+20%), 75% large enterprises, 19% SMEs, 6% public administration (press coverage, November 2025); it flags talent shortages and weak data governance.
- Entry-level squeeze: Revelio Labs data (via Fast Company, secondary) shows US entry-level postings down about 35% since early 2023; Stanford's "Canaries in the Coal Mine" (ADP payroll data) found a 13% relative employment decline for 22-25 year-olds in the most AI-exposed jobs in the August 2025 version and 16% in the November 2025 revision; NACE's spring 2026 survey nonetheless projected a 5.6% rise in Class of 2026 hiring. Causes are mixed (interest rates, post-2021 over-hiring, AI). I found no data specific to junior analyst postings, so treat "AI is killing junior analyst jobs" as plausible but unproven.

AI and self-serve BI: dbt Labs' 2025 survey (459 practitioners, fielded Oct-Dec 2024) found 80% use AI daily (30% a year earlier), 70% for analytics development (code, documentation), and 30% to query data in natural language; poor data quality remained the top problem (56%) and 57% said they spend most of their day maintaining datasets. Microsoft Copilot in Power BI, natural-language querying in Tableau and Looker, and SQL generation tools are removing the routine part: simple queries, standard charts, first-draft commentary. Vendor and blog sources are consistent that what remains valuable is business context, metric definitions, data trust and stakeholder communication (practitioner view, vendor-heavy sources).

**2.2 Business/data analysis inside companies.** Definition: analysts embedded in finance, sales, operations or a central data team who answer questions with SQL and Excel and present results. In practice: ad hoc requests ("why did conversion drop in Spain?"), recurring reporting, KPI definitions and sizing opportunities. Employers: every mid-to-large organisation; banks, insurers, retailers, telecoms, pharma, tech, public bodies. Note "business analyst" in IT (requirements gathering, user stories, Agile; 34% of UK Business Analyst adverts mention Agile) is a different job from "business/data analyst" (numbers); this report covers the numbers version and mentions the IT version only where relevant.

**2.3 BI development and reporting.** Definition: building and maintaining the dashboards and semantic models (a governed layer where "revenue" or "active customer" is defined once) that the business uses, in Power BI (DAX language), Tableau, Looker (LookML) or Qlik. In practice: data modelling, performance tuning, access rules, refresh schedules and user support. Employers: corporates with Microsoft stacks (Power BI dominates UK adverts), consultancies and BI/outsourcing partners, software-as-a-service firms.

**2.4 Analytics engineering.** Definition: writing tested, documented SQL models (dbt "models" are SQL files that turn raw tables into clean business tables) and owning the transformation layer between raw data and dashboards. In practice: software-style practices (version control, code review, tests, CI) applied to analytics. Employers: scale-ups and tech firms with cloud warehouses, increasingly banks and retailers. dbt Labs announced a merger with Fivetran on 13 October 2025; a search summary reports completion in June 2026 (not independently confirmed), signalling consolidation of the ingestion-plus-transformation stack.

**2.5 Marketing, digital and product analytics.** Definition: measuring customer behaviour and marketing effectiveness: web/app analytics (GA4, Adobe Analytics), funnels (visit, sign-up, purchase), attribution (crediting channels for sales), A/B testing support, CRM (customer relationship management) and lifecycle analytics, product usage analytics (Amplitude, Mixpanel). Employers: e-commerce, retail, media, banks' digital teams, agencies, SaaS firms. Overlaps with the marketing branch (strategy) and data science (experiment design, causal models).

**2.6 Operations and supply-chain analytics.** Definition: using data to plan and run physical flows: demand forecasts, inventory levels, supplier performance, transport costs, warehouse productivity, service levels such as OTIF (on time in full). Employers: manufacturers, retailers, FMCG/consumer goods, logistics providers (3PLs), airlines, healthcare supply, consultancies. Overlaps with the logistics and supply chain branch.

**2.7 People/HR analytics.** Definition: workforce reporting and analysis: headcount, attrition, pay equity, hiring funnel, engagement surveys, sometimes predictive models. Employers: large corporates with HRIS systems (Workday, SAP SuccessFactors), HR-tech vendors, consultancies. Small teams, sensitive data, few entry roles.

**2.8 Data governance, quality and stewardship.** Definition: policies, ownership and controls that make data accurate, findable and lawful: data catalogues, lineage (where data came from), quality rules, master data, retention, access. GDPR context (general legal background, not sourced here): EU/UK GDPR requires lawful purpose, accuracy, minimisation, retention limits and the ability to answer data-subject requests; firms above certain thresholds need a Data Protection Officer; the EU AI Act and Data Act add pressure on documenting data. Employers: banks and insurers (regulatory pull: BCBS 239 risk-data principles), pharma, public sector, utilities, large corporates. UK adverts citing "Data Governance" rose to 1,488 from 874 in the 6 months to October 2026, median £70,000.

**2.9 Analytics consulting and outsourcing.** Definition: external teams that build analytics for clients: Big 4 (Deloitte, EY, KPMG, PwC) data and analytics practices, Accenture, Capgemini, IBM, specialist boutiques, and strategy-firm analytics units; plus offshore delivery centres. Italy examples visible in current ads: Deloitte (junior data analyst, Milan/Cagliari), SDG Group, Reply. India hosts about 2,117 global capability centres (GCCs: captive offshore centres run by multinationals) employing about 2.36 million people in FY26 (Nasscom-Zinnov, via secondary reports), with Bengaluru, Hyderabad, Pune, Chennai, Mumbai and NCR hosting 92%. Big 4 audit analytics (analysing clients' ledgers for audit) is a further entry route.

## 3. Role families

### 3.1 Data analyst / business analyst (generalist, in-house)

**What you actually do**: You are the person a department comes to with questions. You write SQL against the warehouse, wrangle Excel files, build and maintain recurring reports, define KPIs with stakeholders, run one-off analyses (why did churn rise, which stores underperform, what is the size of an opportunity) and present findings in decks or dashboards. Tools: SQL, Excel, a BI tool, increasingly Python or R for cleaning and basic stats, and AI assistants for drafting queries. Deliverables: weekly dashboards, a 5-slide readout, a metric dictionary, a cleaned dataset. UK advertised skills (Oct 2026): SQL, BI, Power BI, Python, Excel.

**A typical day and week**: Morning check that overnight refreshes ran and numbers reconcile; a stand-up with a finance or marketing partner; two or three ad hoc requests; a block of deep work on an analysis; afternoon review of a draft with a manager. Weekly cadence: Monday reports out, midweek analysis, Friday readout. Month-end and quarter-end bring reconciliation and board packs. Much of the effort is chasing definitions and bad data, not clever modelling (dbt survey: poor data quality is the top challenge).

**Hours, stress and lifestyle**: Typically 37-42 hours a week; peaks 45-55 at reporting deadlines (Prospects: usually 37-40 hours, longer near deadlines). Stress 3/5 (2 in stable teams): steady deadlines, stakeholders who want answers "today". Hybrid is the norm in UK/Europe (2-3 office days; practitioner observation); US varies by employer; little travel. Italy: contracted 40 hours is common with less remote work than UK (general knowledge, unverified).

**Human vs. quantitative profile**: People/communication: 3/5. Quantitative/technical: 3/5. The job rewards translating a vague question into a precise query and a result into a decision; advanced statistics is rarely needed.

**Compensation (approximate)**:
- UK: starting about £28,000-£32,000, experienced £35,000-£50,000, senior £50,000-£65,000+ (Prospects, 2026 page; TargetJobs gives about £28,000 on graduate schemes, about £40,000 experienced). Adverts: median £52,500 (ITJobsWatch, 6 months to 9 Oct 2026, all levels). Levels.fyi UK median total comp £50,568 (n=125, Oct 2026).
- US: no clean entry figure found; Levels.fyi median total comp $110,000 (25th $85,000, 75th $145,000; n=1,037, Oct 2026, tech-skewed), top payers Meta ($260,000), Amazon ($203,000), Walmart ($155,000). Entry about $60,000-$80,000 base (author estimate, unverified); senior $130,000+ (Levels.fyi 75th-90th percentile $145,000-$185,000).
- Italy: Deloitte junior data analyst Milan/Cagliari EUR 27,900 (Indeed listing, Aug 2026); SDG Group junior data analyst Milan EUR 26,000-28,000 (June 2026 listing); Indeed Italy average base EUR 30,854, Milan EUR 31,395 (n=77, July 2026); Levels.fyi Italy median total EUR 44,928 (n=21, Oct 2026; an earlier search snippet showed EUR 34,000, so sources disagree). Hays Italy Salary Guide 2026 reports all-role average RAL (gross annual salary) of EUR 40,560 for 2-5 years' experience and EUR 59,700 for 5-10 years. Italian figures usually include the 13th/14th monthly payments in RAL.
- Asia/Middle East: Singapore median total SGD 75,419 (Levels.fyi, n=38); Hong Kong median HKD 45,000 per month, range 23,000-70,000 (Morgan McKinley 2026; currency presumed HKD); Dubai median AED 203,998 total (Levels.fyi, n=15, thin); Tokyo foreign-multinational BI/data analyst adverts JPY 6.5-8.5m (Michael Page Japan listings, Oct 2026); India median INR 1,469,274 total (Levels.fyi, n=402).

**Career path**: Junior/associate analyst (0-2 years), analyst (2-4), senior analyst (4-7), lead/principal or analytics manager (6-10+), head of analytics/insights (10+). A UK path cited by Prospects: junior, analyst, senior, lead, analytics manager. Progression often needs a specialism (finance, product, risk) or management.

**Exit opportunities**: After 2-3 years: BI developer, analytics engineer, product/marketing analyst, data scientist (with more stats), business analyst/product owner, consulting. After 7-10 years: analytics manager/head of analytics, product manager, strategy and operations, finance business partner, chief-of-staff style roles, data governance lead.

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1 (pay, brand, data maturity): Big Tech and top scale-ups (Meta, Amazon, Google, Microsoft, Booking.com, Spotify, Uber), plus top-tier banks' central analytics groups and strategy/analytics consultancies. Strong tooling, high pay, competitive hiring, sometimes narrow scope.
- Tier 2: large corporates with mature analytics teams (retailers such as Walmart, Tesco, Zalando, FMCG such as Unilever, P&G, Nestle, telecoms, insurers, pharma), Big 4 data practices. Good training, structured graduate schemes, moderate pay.
- Tier 3: SMEs, agencies, public sector and outsourcers: more generalist, less tooling, lower pay, but broader exposure and faster responsibility.
(Italy: most analysts work in Tier 2/3 organisations; global Tier 1 employers hire in Milan only in small numbers.)

**How to enter**: Degrees: economics, statistics, maths, engineering, computer science, business with a quantitative bent; the Government Statistical Service wants a degree with at least 25% statistical content; Prospects says other degrees work if you show analytical skills. Routes: graduate schemes (UK: open September, close between November and January per TargetJobs), internships, UK Level 4 data analyst apprenticeships, the UK Government Analysis Function / Fast Stream (year-one spot rate £31,554, £34,078 with London allowance, 2025-26 award). Italy: tirocinio/stage into a contract, often via master's or university placement; hiring is rolling (general knowledge). Interview formats: SQL live or take-home test (joins, window functions, aggregation), Excel exercise, a mini case ("churn is up, what do you check?"), dashboard critique, behavioural interview. Certifications: PL-300 (Microsoft Power BI Data Analyst, about USD 165, pass mark 700; helps if the employer uses Power BI), Tableau Desktop Specialist, Google Data Analytics Certificate (learning value, little hiring weight; verify current status); none replaces a portfolio. Build: 2-3 projects on real messy data with SQL, a published dashboard, and a written recommendation; show you can define metrics. Mistakes: tool-collecting with no business story, tutorial-clone portfolios, ignoring SQL fundamentals, over-selling Python. Alternative routes: internal moves from finance, operations or customer service (often the easiest), bootcamps (mixed outcomes; unverified outcome data), career changers with domain expertise. Entry difficulty: 3/5.

**Honest downsides and who it is NOT a good fit for**: Routine reporting is the exposed part of the job; junior hiring is soft and AI makes the "SQL plus chart" skill less scarce. You may be the order-taker for stakeholders who already decided the answer. Data cleaning dominates. Pay in Italy and much of Europe is low relative to the US. Not for: people who want to build models all day (data science), people who dislike ambiguity and stakeholder requests, or those wanting pure engineering.

### 3.2 BI developer / BI analyst

**What you actually do**: You build the dashboards and the data model behind them. In Power BI you design star-schema models (fact tables of events, dimension tables such as product, store, date), write DAX measures (formulas, e.g. year-to-date revenue), set row-level security, tune refresh and performance, publish apps and train users. In Tableau or Looker you do the equivalent (calculated fields, LookML). You also write SQL views and liaise with data engineers. Deliverables: a certified dashboard, a governed dataset, documentation, user training. The brief example: you rebuild the weekly sales dashboard in Power BI, write the DAX measures and explain to the regional director why returns are up 8%.

**A typical day and week**: Stakeholder requirement session; building or fixing a report; debugging a number that "doesn't match finance"; checking refresh failures; user support tickets; sprint ceremonies if the team is Agile. Release rhythm is fortnightly. Peaks: month-end, board reporting, platform migrations (for example Tableau to Power BI).

**Hours, stress and lifestyle**: 37-42 hours; peaks 45-50 at close or migrations. Stress 3/5: tight reporting deadlines and "the CEO's dashboard is wrong" moments. Hybrid common; consultancy BI roles travel to clients (rarely heavy); contractors exist in the UK.

**Human vs. quantitative profile**: People/communication: 3/5. Quantitative/technical: 3/5 (technical rather than mathematical: modelling, DAX/SQL). You need design sense and patience with users more than statistics.

**Compensation (approximate)**:
- UK: Power BI adverts median £55,000 (25th £41,250, 75th £72,500; 2,355 adverts, 6 months to 9 Oct 2026, ITJobsWatch); Tableau median £55,000 (25th £40,000, 75th £75,000; 649 adverts). Entry about £28,000-£35,000 (author estimate informed by Prospects data-analyst starting range); senior £65,000-£85,000 (advert 75th percentile).
- US: Robert Half BI analyst base ranges (2026 guide city pages): New York $94,185-$141,960; San Diego $84,870-$127,920; Baltimore $71,760-$108,160; Rochester NY $64,170-$96,720; Rockford IL $60,030-$90,480 (low end is early-career, high end experienced); senior BI analyst San Diego $110,393-$158,670.
- Italy: Payscale early-career BI analyst EUR 35,000 median, EUR 25,000-41,000 base (2026); average BI analyst EUR 37,500 (Payscale, internally inconsistent percentiles). Milan consultancies pay juniors EUR 26,000-32,000 (SDG Group junior business analyst listing).
- Asia: Tokyo Power BI/business analyst advert JPY 6.5-8.5m (Michael Page Japan); Singapore: no BI-specific reliable data found.

**Career path**: Junior BI analyst (0-2), BI developer (2-4), senior BI developer/BI architect (4-8), BI lead/manager or head of reporting (8+). Many move sideways into analytics engineering or into data architecture.

**Exit opportunities**: After 2-3 years: analytics engineer, data analyst with a domain focus, data engineer (if SQL/ETL strong), Power Platform/low-code developer, product owner. After 7-10 years: BI/analytics architect, head of BI, enterprise data architect, pre-sales/solutions consultant at a vendor (Microsoft partner, Salesforce, Google), or independent contractor.

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: product-led tech firms and vendors with modern stacks (Microsoft, Salesforce/Tableau, Google/Looker, Databricks, Snowflake), and data-mature banks; best engineering practices and pay.
- Tier 2: large corporates and insurers with central BI teams, Big 4 and Accenture/Capgemini data practices; Microsoft-partner consultancies.
- Tier 3: SMEs, agencies, outsourced BI support teams, public sector; legacy tools (Excel and SSRS reports), thin governance, lower pay.

**How to enter**: Degrees: computing, information systems, business/engineering with SQL. Many BI developers start as reporting analysts or in finance/operations and move across. Programmes: Big 4/consulting analyst intakes, corporate IT graduate schemes, vendor-partner trainee programmes. Interview: SQL test, Power BI/Tableau task (build a dashboard from a supplied CSV in 60-90 minutes or take-home), data modelling questions (star schema, relationships, cardinality), DAX/calculation puzzle, dashboard critique. Certifications: PL-300 is the one that visibly appears in adverts (UK Power BI is the most cited tool); Tableau specialist certs; dbt or SQL certs optional. Skills: SQL first, then one BI tool deeply, dimensional modelling, performance tuning, storytelling. Portfolio: a public Power BI/Tableau Public report on messy data plus a model diagram. Mistakes: pretty dashboards on a bad model, no documentation, 40-chart "dashboards" nobody uses. Alternative routes: from Excel-heavy finance or operations roles (the most common), Level 4 UK apprenticeships, bootcamps with a real project. Entry difficulty: 3/5.

**Honest downsides and who it is NOT a good fit for**: Self-serve BI and Copilot reduce demand for basic dashboard building; you are vulnerable if you only build report pages. Tool-specific careers can date quickly. Lots of maintenance and "why does my number differ" support work. Not for: those who dislike repetitive precision, or who want to do advanced statistics.

### 3.3 Analytics engineer

**What you actually do**: You own the transformation layer. In dbt you write SQL models, define tests (not-null, unique, accepted values), document columns, manage dependencies, build a semantic layer (central metric definitions) and optimise warehouse cost. You work in Git with code review and CI. You turn messy source tables into clean "marts" (e.g., a customers table with consistent definitions) that analysts and BI tools use. Tools: SQL, dbt, a warehouse (Snowflake, BigQuery, Databricks), Git, orchestration (Airflow, dbt Cloud), light Python. Deliverables: tested models, data contracts, metric definitions, lineage docs.

**A typical day and week**: Pull request review; fix a failing test after an upstream schema change; a conversation with an analyst about a new metric; model refactor; monitoring warehouse costs; incident triage when a dashboard breaks. Weekly sprint planning. Less meeting-heavy than analysts, more pull requests.

**Hours, stress and lifestyle**: 38-42 hours; peaks 45-50 during migrations or incidents; occasional on-call-lite for data incidents. Stress 3/5. Remote-friendly; scale-ups often fully remote or hybrid.

**Human vs. quantitative profile**: People/communication: 2/5 (3 with stakeholders). Quantitative/technical: 4/5 (technical depth, SQL and engineering practice, rather than maths).

**Compensation (approximate)**:
- US: dbt Labs 2025 survey (North America individual contributors, fielded late 2024): over 80% earn over $100,000 (up from 69%); managers over $200,000: 49%. Hiring-guide estimates for 2026 vary: junior $75,000-$105,000, mid $105,000-$145,000, senior $145,000-$190,000 (secondary blogs; base vs total mixed).
- UK: dbt-citing adverts median £74,830 (25th £62,500, 75th £85,625; 306 adverts, 6 months to 9 Oct 2026; the median is down 32% year on year, probably a mix effect of fewer senior ads, ITJobsWatch). No reliable entry figure; analytics engineers are rarely hired as graduates; entry from analyst roles about £45,000-£55,000 (author estimate, unverified).
- Europe: dbt survey: 51% of European ICs earn over USD 50,000 (up from 40%), managers over USD 100,000: 51% (down from 79%); Berlin senior listings EUR 75,000-100,000 (stale ad, 2025). Italy: no analytics-engineer figures found; a junior data engineer in Italy is estimated at USD 37,900-51,900 (Jobicy, July 2026, low confidence).
- Asia: no reliable data found.

**Career path**: Often analyst (1-3 years) then analytics engineer (2-5), senior (5-8), staff/lead analytics engineer or analytics engineering manager (8+). Few true graduate entry points.

**Exit opportunities**: After 2-3 years: data engineer, senior analyst/product analyst with strong data skills, data platform roles. After 7-10 years: staff/principal analytics engineer, data engineering lead, head of data, solutions architect, vendor roles (dbt, Fivetran, Snowflake).

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: data-mature tech and fintech (for example N26, Booking.com, Spotify-class firms, Monzo, Stripe-class firms) and vendors; strong peer groups, engineering culture.
- Tier 2: scale-ups, larger e-commerce/retail, consultancies with modern-data-stack practices (including Accenture, Deloitte).
- Tier 3: companies adopting dbt for the first time, small teams where you are the sole data person; broad but isolated.
In Italy such roles are concentrated in Milan scale-ups, consultancies and a few international firms; supply of roles is small (no postings found in this research).

**How to enter**: Backgrounds: computing, engineering, quantitative degrees, or analysts who learned dbt on the job. Programmes: almost none; join as a data analyst or junior data engineer and move; some consultancies hire juniors onto dbt projects. Interview: SQL (window functions, CTEs), data modelling, a take-home dbt project or live modelling task, code review of a bad model, system design for a metrics layer, Git basics. Certifications: dbt Analytics Engineering Certification exists (cost unverified here) and signals tool knowledge but is less decisive than a working repository; cloud warehouse certs (SnowPro, Google Cloud data) optional. Skills/portfolio: a public dbt project on open data with tests, docs, CI, and a clear README; contribute to dbt packages. Mistakes: learning dbt without strong SQL; ignoring testing; no stakeholder skills. Alternative routes: analyst-to-AE internal move; bootcamp graduates have little traction here (unverified). Entry difficulty: 4/5.

**Honest downsides and who it is NOT a good fit for**: Barely any junior roles; AI coding assistants speed up SQL generation, raising the bar for juniors. A thin career ladder in small firms. Tool dependence on a vendor ecosystem that is consolidating (dbt Labs and Fivetran). Not for: people who dislike engineering discipline (testing, Git, reviews), or who want primarily stakeholder-facing work.

### 3.4 Marketing, digital and product analyst

**What you actually do**: You measure how customers behave and which actions pay back. Tasks: set up and QA tracking (Google Tag Manager, GA4, Adobe Analytics, app SDKs), build funnel and cohort reports, analyse campaign performance and channel attribution (last-click, multi-touch, marketing-mix modelling at the senior end), segment customers in the CRM, support A/B tests (power calculations, reading results), and build marketing or product dashboards (Looker Studio, Tableau, Power BI, Amplitude). Deliverables: weekly performance report, experiment readout, customer segmentation, a "why did sign-ups fall" investigation.

**A typical day and week**: Check tracking and campaign dashboards; a stand-up with performance marketers or a product squad; analyse a feature launch; QA a tag release; Friday summary. Peaks around launches, Black Friday and quarter planning. In product teams you sit in a squad with a PM and engineers.

**Hours, stress and lifestyle**: 38-43 hours; peaks 48-55 around launches and seasonal peaks. Stress 3/5: pressure for quick answers, fast-changing priorities, and noisy data (consent rules reduce tracked traffic). Hybrid/remote common in digital firms; agencies busier.

**Human vs. quantitative profile**: People/communication: 3/5. Quantitative/technical: 3/5. Statistics matters for testing (significance, sample size) but most work is clear metrics, SQL and storytelling.

**Compensation (approximate)**:
- US: BLS market research analysts median $78,760 (May 2025). Payscale: product analyst average $78,222 (range $58,000-$110,000), product marketing analyst $59,506 ($43,000-$76,000); Indeed US product analyst average base $106,219 (tech-weighted). Entry about $55,000-$75,000; senior product analysts at tech firms $130,000-$180,000+ (author estimate from Levels.fyi-type ranges, unverified).
- UK: digital analytics adverts median £41,750 (6 months to May 2025, only 18 salaries; ITJobsWatch, last available); recent ads: Digital Analyst Birmingham £40,000-£48,000; Senior Digital Product Analyst London (retail) £55,000-£65,000; Senior Digital Analyst up to £60,000 (job listings, 2026). Entry about £25,000-£32,000 (author estimate).
- Italy: no reliable data found; junior analytics in agencies/e-commerce plausibly EUR 24,000-30,000 (author estimate, unverified).
- Asia/Middle East: no reliable role-specific data found.

**Career path**: Junior analyst (0-2), analyst (2-4), senior/lead analyst (4-7), analytics manager/head of insights (7-10+). Product analysts may become product managers or data scientists.

**Exit opportunities**: After 2-3 years: data scientist (experimentation), product manager, growth marketing, CRM/lifecycle manager, BI developer. After 7-10 years: head of marketing analytics or growth, product director, consumer insights lead, consultant.

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: large tech and marketplaces with in-house experimentation platforms (Meta, Amazon, Google, Booking.com, Uber, Spotify, Airbnb), major e-commerce.
- Tier 2: retailers, banks' digital teams, telecoms, FMCG, media groups, large analytics consultancies.
- Tier 3: agencies and small ecommerce: heavy reporting, high churn, lower pay.

**How to enter**: Degrees: marketing, economics, business, statistics, computing; marketing graduates with SQL stand out. Programmes: marketing and digital graduate schemes at FMCG/retail (rotation through insights), agency analyst roles, tech associate analyst programmes. Interviews: SQL test, case ("sign-ups dropped 15% week over week; walk me through"), metrics/product-sense questions, A/B test interpretation, GA4 familiarity. Certifications: Google Analytics certification (free, entry signal only), Google Data Analytics certificate (low hiring weight), Adobe Analytics, Amplitude academy; none substitute for SQL. Portfolio: GA4 demo-account analysis, an A/B test write-up, a funnel dashboard. Mistakes: reporting vanity metrics, ignoring consent/privacy limitations, confusing correlation with attribution. Alternative routes: from performance marketing or CRM roles into analytics; self-taught with SQL; agency start then in-house move. Entry difficulty: 3/5 (agencies 2, tech product analytics 4).

**Honest downsides and who it is NOT a good fit for**: Attribution is inherently uncertain and privacy rules (GDPR, cookie consent, browser restrictions) are eroding tracking; people often want numbers that justify a campaign already run. AI is automating campaign reporting; Stanford found marketing among the most exposed early-career occupations. Not for: people who want certainty, or want a model-heavy role.

### 3.5 Operations and supply-chain analyst

**What you actually do**: You analyse physical flows. Tasks: demand forecast accuracy and baseline forecasting in Excel/SAP IBP/Python, inventory analysis (safety stock, ageing, ABC classification), supplier OTIF reports, transport cost and lane analysis, warehouse productivity, S&OP (sales and operations planning) packs, procurement spend analysis, and process mining. Tools: Excel (heavy), SQL, Power BI/Tableau, ERP data (SAP, Oracle), Python occasionally, planning systems (Kinaxis, o9, Blue Yonder). Deliverables: weekly service-level dashboard, inventory reduction proposal, root cause of late deliveries.

**A typical day and week**: Pull ERP data; reconcile; update a KPI pack; talk to planners and warehouse managers; investigate a stock-out; join the weekly S&OP; occasional site visit. Disruptions (port delays, supplier failures) trigger urgent analyses.

**Hours, stress and lifestyle**: 38-45 hours; peaks 50-55 at S&OP cycle, peak season (retail Q4) or disruption. Stress 3/5 (4 in crisis weeks). Often on-site or hybrid; some travel to plants and depots, more in consulting (BLS notes management analysts travel frequently).

**Human vs. quantitative profile**: People/communication: 3/5. Quantitative/technical: 3/5. You must understand the operation and persuade planners and managers who know it better than you.

**Compensation (approximate)**:
- US: BLS operations research analysts median $88,940 (10th $57,060, 90th $159,910; May 2025), logisticians median $82,320; ASCM 2026 report: median supply chain base $98,500, total $103,500 (all levels; 10th percentile base $60,000); Payscale entry-level supply chain analyst average $63,684 ($50,000-$78,000). Senior and analytics-heavy roles at big retailers $110,000+ (author estimate).
- UK: Payscale entry-level supply chain analyst £26,114 (range £22,000-£31,000, 2026, self-reported); demand planning analyst advert Edinburgh £35,000-£40,000 (July 2025). Mid and senior: no reliable 2026 data found (recruiter guides were paywalled).
- Italy: no reliable data found; manufacturing and FMCG supply-chain graduates typically start in the EUR 26,000-32,000 range (author estimate, unverified).
- Asia/Middle East: no reliable data found.

**Career path**: Analyst (0-2), senior analyst/planner (2-5), supply-chain manager or S&OP/demand planning manager (5-8), head of planning/analytics or director (10+). Certifications (CPIM/CSCP) assist progression.

**Exit opportunities**: After 2-3 years: demand/supply planner, procurement analyst, logistics consultant, process improvement, BI/analytics. After 7-10 years: supply chain manager/director, operations consulting, S&OP head, supply chain data/digital lead, vendor roles (planning software).

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: global FMCG/retail/consumer and industrial leaders with strong supply-chain academies (for example Unilever, Procter & Gamble, Nestle, Amazon, Apple, Walmart), and strategy/operations consultancies.
- Tier 2: large manufacturers, automotive suppliers, pharma, third-party logistics (DHL, Maersk, Kuehne+Nagel), mature retailers.
- Tier 3: SMEs and local distributors: Excel-based, broad but low analytic depth.
(Italy: manufacturing and fashion/food firms around Milan, plus logistics operators, are the main employers.)

**How to enter**: Degrees: supply chain/logistics, engineering, business, economics, maths. Programmes: operations/supply-chain graduate schemes at FMCG, retail, manufacturers and 3PLs (UK intakes typically open September and close Nov-Jan; unverified for each firm); internships on site are valued. Interviews: Excel exercise (VLOOKUP/pivot, forecasting), case (reduce stock-outs without raising inventory), SQL basics, behavioural. Certifications: APICS/ASCM CPIM or CSCP help; ASCM reports certified professionals earn up to 20% higher median salary (association's own survey, so treat with care); Lean Six Sigma green belt is common; PL-300 for the analytics edge. Skills/portfolio: forecasting exercise, inventory simulation, dashboard on public logistics data. Mistakes: pure theory without an operations feel; ignoring data quality in ERP. Alternative routes: from planning/warehouse operations into analytics; from engineering. Entry difficulty: 2/5.

**Honest downsides and who it is NOT a good fit for**: Pay starts modest (UK entry about £26,000 by Payscale); work depends on messy ERP data and manual Excel; firefighting in disruptions; plants and warehouses are often away from city centres. AI and planning software automate baseline forecasting. Not for: people who want pure data work without operational context, or who dislike on-site presence.

### 3.6 People/HR analyst

**What you actually do**: You turn HR data into reports and answers: headcount and attrition dashboards, hiring funnel and time-to-fill, pay equity analyses, engagement survey analysis, workforce planning. Tools: Excel, Workday/SAP SuccessFactors reporting, Power BI/Tableau (or Visier), SQL, sometimes R/Python for attrition models. Deliverables: monthly people dashboard, board workforce pack, compensation benchmarking.

**A typical day and week**: Extract HRIS data; reconcile headcount against finance; build or update a dashboard; meet HR business partners; handle ad hoc questions; protect privacy (aggregation thresholds). Peaks at annual reviews, pay rounds and survey cycles.

**Hours, stress and lifestyle**: 37-42 hours; peaks 45-50 in pay-review cycles. Stress 2/5. Predictable, hybrid-friendly, minimal travel.

**Human vs. quantitative profile**: People/communication: 4/5. Quantitative/technical: 3/5. Trust and discretion matter as much as skills.

**Compensation (approximate)**:
- US: BLS HR specialists median $75,940 and compensation, benefits and job-analysis specialists $78,210 (May 2025); HR analyst entry $55,000-$65,000, mid $70,000-$85,000, senior $90,000-$116,000 (hr.university, unsourced, weak); Coursera/Glassdoor average $66,282 (April 2025).
- Western Europe: people analytics EUR 45,000-65,000, up to EUR 55,000-80,000 with Python/R (Freenance, weak source).
- UK, Italy, Asia: no reliable data found.

**Career path**: HR analyst (0-3), senior HR analyst (3-6), people analytics manager (6-10), head of people analytics / HR insights (10+).

**Exit opportunities**: After 2-3 years: HR business partner, compensation analyst, HRIS analyst, general data analyst. After 7-10 years: head of people analytics, reward lead, HR transformation, workforce planning, consulting at HR/people-analytics advisors.

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: very large multinationals with dedicated people-analytics teams (global banks, consumer and tech firms) and specialist vendors (Visier, Workday).
- Tier 2: large corporates and consultancies' HR practices (Mercer, WTW, Aon, Big 4 people advisory).
- Tier 3: mid-size firms where HR analytics is a part-time duty inside HR operations.

**How to enter**: Degrees: psychology/organisational behaviour, management with HR, economics, statistics. Programmes: HR graduate schemes with rotations; few analyst-specific. Interviews: Excel/dashboard exercise, HR scenario, attrition analysis case. Certifications: CIPD (UK), SHRM (US) helpful for HR credibility; Visier/Workday training; PL-300 optional. Skills: HR metrics, stats basics, discretion, GDPR/employee-data privacy. Portfolio: attrition analysis on public HR datasets. Mistakes: surveillance-style analysis, ignoring privacy and bias. Alternative: HR coordinator or HRIS role to analytics. Entry difficulty: 3/5 (few openings, small teams).

**Honest downsides and who it is NOT a good fit for**: Small field with few roles; data volumes are small so statistics is often thin; privacy, works-council (Europe) and ethics limits what you can do; HR budgets are cut in downturns. Not for: people who want large datasets, rapid career progression through technical skill, or high pay.

### 3.7 Data governance, data quality and data steward roles

**What you actually do**: You make data trustworthy and compliant. Data stewards own the definition and quality of a data domain (customer, product, supplier): they write business glossaries, set quality rules, resolve issues, and approve changes. Governance analysts and leads maintain the data catalogue (Collibra, Alation, Microsoft Purview, Informatica), lineage, data classification, retention, access policies, privacy impact assessments, and support regulatory requirements (GDPR; BCBS 239 for banks; AI/data documentation for the EU AI Act). Data quality analysts profile data, build rules and dashboards, track defect rates and root causes. Deliverables: policy, glossary, quality scorecard, issue log, catalogue entries.

**A typical day and week**: Workshop with a business owner to define "active customer"; review a data-quality dashboard; chase a source-system owner to fix errors; update the catalogue; present to a data council; respond to an audit or privacy request. Meetings dominate.

**Hours, stress and lifestyle**: 36-42 hours; peaks 45-50 before regulatory deadlines or audits. Stress 2/5 (3 in banks under regulatory scrutiny). Hybrid common; minimal travel.

**Human vs. quantitative profile**: People/communication: 4/5. Quantitative/technical: 2/5. Success depends on persuading people to own data; light SQL and profiling skills suffice at entry.

**Compensation (approximate)**:
- UK: "Data Governance" adverts median £70,000 (25th £56,250, 75th £87,500, 90th £105,000; 1,488 adverts, 6 months to 9 Oct 2026, ITJobsWatch; advert pool skews experienced). Data Steward: 1 advert in the period, so unreliable; the 2024 equivalent was median £37,000 (25th £31,250, 75th £39,750; 18 adverts). Data Governance Lead advert £70,000-£75,000 (2026 listing). Entry (steward/analyst) about £30,000-£38,000 (derived from 2024 steward data).
- US: no reliable survey found; one unsourced aggregator suggests about $115,000 for governance specialists (treat as unverified). Entry about $60,000-$80,000 (author estimate).
- Italy: no reliable data found; roles are concentrated in banks, insurers and large corporates, Milan-heavy.
- Asia/Middle East: no reliable data found.

**Career path**: Data steward/quality analyst (0-3), governance analyst/specialist (2-5), governance lead or data quality manager (5-8), head of data governance / chief data office roles / Chief Data Officer (10+). Moves between governance, privacy and risk are common.

**Exit opportunities**: After 2-3 years: data analyst, privacy/compliance analyst, data product owner, risk data roles. After 7-10 years: Head of Data Governance, Chief Data Office director, data protection officer, data risk lead, consulting (data strategy, privacy advisory).

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: global banks and insurers with large chief-data-office teams, regulated pharma, big consultancies' data governance practices, and governance vendors (Collibra, Alation, Informatica, Microsoft Purview).
- Tier 2: utilities, telecoms, public agencies, Big 4 risk and data practices.
- Tier 3: firms doing governance as a compliance chore with a small team; heavy documentation, little influence.

**How to enter**: Backgrounds: information management, business, law/compliance, accounting, data analytics, computing. Programmes: a few bank chief-data-office graduate rotations; otherwise enter via data analyst, risk, compliance, audit or master-data roles. Interviews: scenario ("a customer table has 12% missing postcodes; what do you do?"), basic SQL, knowledge of GDPR principles, stakeholder behavioural. Certifications: DAMA CDMP (Associate level based on a Data Management Fundamentals exam; Coursera lists fees of about $311 for Associate, $933 for Practitioner and $983 for Master, to verify on dama.org); UK adverts list it as "preferred", not required; privacy certs (CIPP/E, CIPM from IAPP) help in privacy-adjacent roles. Skills: SQL profiling, data modelling basics, catalogue tools, regulation literacy, workshop facilitation. Portfolio: a data quality assessment on an open dataset, a glossary and rules document. Mistakes: treating governance as policy-writing without business adoption. Alternative routes: from audit/compliance, finance data, or analysts who "own" a dataset. Entry difficulty: 3/5 (few true entry-level roles; internal moves common).

**Honest downsides and who it is NOT a good fit for**: Seen as a cost centre; success is invisible when it works and blamed when it fails; slow, political change. Tooling is crowded and vendor-driven. AI makes governance more important but also threatens parts of manual documentation. Not for: people wanting hands-on technical building or quick wins; those who dislike meetings and negotiation.

### 3.8 Analytics consultant

**What you actually do**: You deliver analytics projects for clients: diagnose a client's data and reporting problems, design and build dashboards or data models, perform analyses (pricing, churn, cost), migrate legacy reporting to cloud and Power BI, or support audit with data analytics. Titles: analyst/consultant in Deloitte, EY, KPMG, PwC data and analytics practices; Accenture, Capgemini, IBM; boutiques; strategy firms' analytics units (QuantumBlack, BCG X; very selective). Deliverables: client decks, working dashboards, data pipelines (with engineers), requirement documents, status reports.

**A typical day and week**: Client stand-up; build or test; documentation; internal team sync; a steering committee presentation; timesheet. Projects last 3-12 months; staffing changes with client demand; on the bench you do training or pre-sales.

**Hours, stress and lifestyle**: 42-50 hours; peaks 55-65 near go-live or pitches (Big 4 busy seasons; practitioner observation). Stress 4/5: client-driven deadlines and utilisation targets. Travel: UK/Europe typically Monday to Thursday at client sites for some projects, hybrid on others; BLS notes management analysts travel frequently and often exceed 40 hours.

**Human vs. quantitative profile**: People/communication: 4/5. Quantitative/technical: 3/5. Clients buy structured thinking and delivery; you must write, present, and handle difficult stakeholders.

**Compensation (approximate)**:
- UK: Big 4 graduate pay about £31,000-£38,000 in London, £27,000-£33,000 regionally (Learnsignal 2025/26 estimate); TargetJobs £30,000-£40,000 plus bonus for consulting schemes (£28,000-£40,000 for technology consulting). 5 years (senior consultant/manager): about £55,000-£75,000; senior (director/partner track): £90,000+ (author estimate, unverified).
- US: BLS management analysts median $101,860 (10th $60,640, 90th $171,640; May 2025; percentiles via WageDex citing OEWS); Big 4/Accenture analytics entry about $75,000-$95,000 (author estimate, unverified).
- Italy: Deloitte junior data analyst EUR 27,900 (Aug 2026 listing); SDG Group junior business analyst Milan EUR 26,000-32,000 (June 2026 listing). Mid-level (5 years) about EUR 40,000-55,000 (author estimate informed by Hays Italy: all-role RAL EUR 59,700 at 5-10 years).
- Offshore: India fresher analyst at IT services firms INR 4-9 lakh per year (blog compilations, 2026; Accenture INR 5-10 lakh, TCS 4-8 lakh); Levels.fyi India data analyst median INR 14.7 lakh total (n=402, all levels, product-company weighted).
- Asia/Middle East: Singapore Morgan McKinley data analyst average S$90,000-S$170,000 (2026; band labelling unclear); Hong Kong median HKD 45,000/month.

**Career path**: Analyst (0-2), consultant (2-4), senior consultant (4-6), manager (6-9), senior manager/director (9-12), partner (12+). Up-or-out pressure is real at Big 4 and strategy firms; offshore and boutique routes are flatter.

**Exit opportunities**: After 2-3 years: in-house senior analyst, BI/analytics lead, data product owner, vendor pre-sales, MBA/master's. After 7-10 years: head of analytics or chief data officer roles at clients, product/strategy leaders, independent consultant, partner.

**Tier list of employers**: Tier groupings reflect industry consensus and practitioner perception, not objective fact.
- Tier 1: strategy-firm analytics units (McKinsey QuantumBlack, BCG X, Bain) and the strongest tech consultancies; selective, high pay, very client-facing.
- Tier 2: Big 4 (Deloitte, EY, KPMG, PwC) and Accenture, Capgemini, IBM data practices; large intakes, structured training, good brand.
- Tier 3: boutiques (e.g. SDG Group, Reply in Italy), staffing-style and offshore outsourcers (Cognizant, TCS, Infosys, GCCs); more repetitive scope, lower pay, high volume.

**How to enter**: Degrees: computing, engineering, economics, maths, business; Big 4 accept diverse majors with numerate evidence (TargetJobs). Programmes: Big 4 technology/data graduate schemes (applications open September, close roughly November-January per TargetJobs; audit analytics schemes also exist, often with CFAB/ACA study), Accenture/Capgemini analyst intakes, Italian consultancies' analyst programmes (rolling). Interviews: online aptitude tests (numerical/logical), video interview, case/group exercise, technical test (SQL/BI), partner interview. Certifications: PL-300, Azure/AWS/Google data certs, Snowflake, Tableau valued in tech consulting; employers fund them. Skills: structured communication, SQL, one BI tool, cloud basics. Portfolio: a project with clear business impact and slides. Mistakes: describing tasks not impact; neglecting numerical tests. Alternative routes: in-house analyst to consulting after 2-3 years; non-target school candidates through boutiques and Accenture/Capgemini volume hiring. Entry difficulty: 3/5 (Tier 1 strategy units 5/5).

**Honest downsides and who it is NOT a good fit for**: Long hours at peaks, utilisation pressure, travel, and work that may be repetitive or politically constrained; many projects end before you see results. Offshore delivery work is often narrower and lower paid. Not for: those wanting deep ownership of one data product or predictable hours.

### Role family summary

| Role family | Typical hours/week (peak) | Stress 1-5 | People 1-5 | Quant 1-5 | Entry comp: US / UK / Italy (approx., currency, base or total) | Entry difficulty 1-5 |
|---|---|---|---|---|---|---|
| 3.1 Data / business analyst (in-house) | 37-42 (50-55) | 3 | 3 | 3 | US about $60-80k base (est., unverified) / UK £28-32k base (Prospects 2026) / Italy EUR 26-28k RAL (Milan junior ads, 2026) | 3 |
| 3.2 BI developer / BI analyst | 37-42 (45-50) | 3 | 3 | 3 | US $60-95k base by city (Robert Half 2026, low-to-mid) / UK £28-35k (est.) / Italy EUR 25-41k, median 35k (Payscale 2026) | 3 |
| 3.3 Analytics engineer | 38-42 (45-50) | 3 | 2 | 4 | US $75-105k base junior (secondary blogs 2026) / UK about £45-55k (est., usually after analyst role) / Italy no data | 4 |
| 3.4 Marketing, digital and product analyst | 38-43 (48-55) | 3 | 3 | 3 | US $55-75k base (Payscale, est.) / UK £25-32k (est.) / Italy no reliable data | 3 |
| 3.5 Operations and supply-chain analyst | 38-45 (50-55) | 3 | 3 | 3 | US about $64k base, range $50-78k (Payscale 2026) / UK about £26k, range £22-31k (Payscale 2026) / Italy no reliable data | 2 |
| 3.6 People/HR analyst | 37-42 (45-50) | 2 | 4 | 3 | US $55-65k (weak source) / UK no data / Italy no data | 3 |
| 3.7 Data governance, quality, steward | 36-42 (45-50) | 2 | 4 | 2 | US no reliable data / UK about £30-38k (2024 steward data) / Italy no data | 3 |
| 3.8 Analytics consultant | 42-50 (55-65) | 4 | 4 | 3 | US about $75-95k (est.) / UK £31-38k London Big 4 (Learnsignal 2025/26) / Italy EUR 26-32k (Deloitte, SDG Group 2026 ads) | 3 |

## 4. Banks vs. other employer types

Analytics roles differ more by employer than by title. Ratings below are practitioner perception unless numbers are cited; I found no survey comparing hours across employer types, so hours are estimates.

| Employer type | Hours (typical/peak) | Stress | Pay | Culture | Autonomy |
|---|---|---|---|---|---|
| Tech company | 38-45 / 50-55 | 3 | Highest: Levels.fyi US data analyst top payers Meta $260k, Amazon $203k total comp (Oct 2026); strong equity | Data-driven, tooling-rich, engineering style; experimentation culture | High, but narrow scope; layoffs risk |
| Bank / insurer | 40-45 / 50-55 (regulatory deadlines) | 3 (4 in risk/finance reporting) | Good in London/NY/Milan; bonus; governance and risk-data roles pay well (UK data governance median £70k, ITJobsWatch) | Process-heavy, regulation-driven, legacy systems (Excel, SAS) plus modernising stacks | Medium to low; many controls |
| Consulting / Big 4 | 42-50 / 55-65 | 4 | Moderate at entry (UK £30-40k), faster rise | Up-or-out, client-service, training-rich | Low at junior level, high exposure |
| Retail / consumer goods | 38-45 / 50-55 (seasonal) | 3 | Mid; FMCG strong graduate programmes | Commercial, fast; analysts close to buyers and supply chain | Medium to high |
| Manufacturing / logistics | 38-45 / 50-55 | 3 | Mid to low at entry; ASCM US median base $98.5k all levels | Operational, practical, ERP-bound; less analytics maturity | Medium; analytics often Excel-based |
| Public sector | 37-40 / 45 | 2 | Lower; UK Fast Stream £31.6k year one, £34.1k London (2025-26); US government pay below private | Stable, mission-driven, procedural; good pensions | Medium; slow decisions |
| Outsourcing / offshore centre | 40-48 / 55-60 | 3-4 | Lowest in absolute terms; India IT-services freshers INR 4-9 lakh (blog compilations 2026) but high locally | Delivery- and SLA-driven, repetitive, large training intakes | Low |

Regional differences. Pay: the US is far ahead. Levels.fyi data-analyst medians (total comp, all levels, October 2026): US $110,000 (n=1,037), UK £50,568 (n=125), Germany EUR 72,958 (n=69), Singapore SGD 75,419 (n=38), Italy EUR 44,928 (n=21), Poland PLN 146,724 (about EUR 34,000 at an approximate exchange rate; n=22), Dubai AED 203,998 (n=15), India INR 1,469,274 (n=402). These are self-reported and tech-skewed and the small samples (Italy, Dubai, Poland, Singapore) are unreliable; Germany looks high versus ads. In Italy, advertised junior pay is EUR 26,000-28,000 (SDG Group, Deloitte, 2026) versus a US entry estimate of $60,000-80,000, and a March 2026 Italian press analysis (AI/ML roles) reports junior pay of EUR 30-35k gross in Italy against EUR 55-70k in Germany, which suggests a large intra-European gap (secondary source). Hours: Italy and southern Europe follow statutory working-time regimes with 40-hour contracts but less formal overtime pay (general knowledge); the UK is commonly 37.5; US exempt analysts often work longer; Asian hubs (Hong Kong, Singapore, Tokyo) have longer hours, particularly in banks and consulting (practitioner perception). Hubs: Hong Kong and Singapore pay in monthly bands (Morgan McKinley: HK median HKD 45,000 per month, Singapore S$90,000-170,000 average annual); Tokyo foreign multinationals pay JPY 6.5-15m for BI/data roles (Michael Page Japan listings), with Japanese-language skills typically a gate (unverified); Dubai is tax-free, with thin data. Offshoring: India's 2,117 GCCs and Eastern Europe (Poland, Romania) deliver reporting, BI maintenance and analytics support for European and US firms, which compresses junior pay and pushes onshore roles toward stakeholder-facing and senior work.

## 5. Which backgrounds fit this branch

(a) Overall ratings

| Background | Rating | Reason |
|---|---|---|
| Management | Possible | Good stakeholder skills and business context; needs SQL and a BI tool to compete. |
| Logistics & Supply Chain | Possible | Strong fit for operations/supply-chain analytics (3.5); other roles need added technical skills. |
| Finance | Strong | Numerate, Excel-fluent, close to reporting and KPIs; easy move into in-house analysis. |
| Accounting | Possible | Controls and reconciliation mindset suit data quality and audit analytics; learn SQL/BI. |
| Marketing | Possible | Natural route into marketing/digital analytics; weak on SQL unless built. |
| Data Analytics | Strong | Direct fit for every role family. |
| Economics | Strong | Quantitative reasoning and causal thinking; widely accepted by graduate schemes and the civil service. |
| Computer Science | Strong | SQL, programming and data modelling; best fit for BI development and analytics engineering. |
| Cybersecurity | Possible | Strong on security and governance; limited on business analytics unless broadened. |
| Data Science | Strong | Over-qualified in modelling but fully capable; analytics is a common first job and entry route. |
| Artificial Intelligence | Possible | Technical depth beyond need; may be mismatched to stakeholder-heavy reporting and the degree rarely teaches BI. |

(b) Matrix: S = strong fit, P = possible, X = stretch

| Background | 3.1 Data analyst | 3.2 BI | 3.3 Analytics engineer | 3.4 Marketing/product | 3.5 Ops/SC | 3.6 HR | 3.7 Governance | 3.8 Consultant |
|---|---|---|---|---|---|---|---|---|
| Management | P | P | X | P | P | S | P | P |
| Logistics & Supply Chain | P | P | X | X | S | X | P | P |
| Finance | S | P | X | P | P | X | P | P |
| Accounting | P | P | X | X | X | X | P | P |
| Marketing | P | P | X | S | X | X | X | P |
| Data Analytics | S | S | S | S | S | S | S | S |
| Economics | S | P | P | S | P | P | P | S |
| Computer Science | S | S | S | S | P | P | P | P |
| Cybersecurity | P | P | P | X | X | X | S | X |
| Data Science | S | S | S | S | S | P | P | S |
| Artificial Intelligence | P | P | P | P | P | X | P | P |

## 6. Sources

All accessed October 2026 unless stated. Aggregator, blog and vendor sources are weak signals; recruiter-guide figures that could not be opened are noted as "not read".

1. ITJobsWatch, Data Analyst, Business Analyst, Power BI, Tableau, dbt, Data Governance, Data Steward market pages (permanent vacancies, 6 months to 9 Oct 2026). https://www.itjobswatch.co.uk/jobs/uk/data_analyst.do and sibling pages (e.g. /jobs/uk/data%20governance.do). Digital analytics page, data to May 2025: https://www.itjobswatch.co.uk/jobs/uk/digital%20analytics.do
2. US Bureau of Labor Statistics, Occupational Outlook Handbook: Data Scientists, Operations Research Analysts, Management Analysts, Market Research Analysts, Logisticians, Human Resources Specialists (May 2025 pay; projections 2025-35). https://www.bls.gov/ooh/ (e.g. https://www.bls.gov/ooh/math/data-scientists.htm). Percentiles for management analysts via WageDex (secondary).
3. Levels.fyi, Data Analyst salaries by location (US, UK, Italy, Germany, Poland, Singapore, India, UAE), updated 9 Oct 2026. https://www.levels.fyi/t/data-analyst/locations/italy (and sibling country pages).
4. dbt Labs, "2025 State of Analytics Engineering Report" (survey Oct-Dec 2024) https://www.getdbt.com/resources/state-of-analytics-engineering-2025 ; 2024 report https://www.getdbt.com/blog/the-2024-state-of-analytics-engineering-report ; dbt Labs and Fivetran merger announcement, https://www.getdbt.com/blog/dbt-labs-and-fivetran-merge-announcement (13 Oct 2025; completion reported June 2026 by secondary outlets).
5. Prospects (Jisc), Data analyst job profile. https://www.prospects.ac.uk/job-profiles/data-analyst ; TargetJobs, Data analyst job description, https://targetjobs.co.uk/careers-advice/job-descriptions/data-analyst-job-description ; TargetJobs, Data science and analytics graduate jobs, https://targetjobs.co.uk/graduate-jobs/it/data
6. Robert Half, Business Intelligence Analyst salary pages (US cities, 2026 Salary Guide data). https://www.roberthalf.com/us/en/job-details/business-intelligence-analyst/new-york-ny and other city pages.
7. Hays Italy Salary Guide 2026 overview (via search summary and https://www.hays.it/en/salary-guide/overview ); full data-analyst tables not read. Hays UK Salary Guide 2026 behind a form (not read).
8. Indeed Italy, Data analyst salaries, https://it.indeed.com/career/data-analyst/salaries (July 2026); Indeed Italy listing pages for SDG Group and Deloitte (June-August 2026); Payscale Italy BI Analyst, https://www.payscale.com/research/IT/Job=Business_Intelligence_(BI)_Analyst/Salary/13d8089d/Early-Career-Data-Analysis (2026).
9. Stanford Digital Economy Lab, "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of AI" (Aug 2025; revised Nov 2025). https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine
10. Revelio Labs via Fast Company, entry-level postings down 35% (secondary). https://www.reveliolabs.com/blog/fast-company-entry-level-hiring ; NACE spring 2026 hiring projection (reported in secondary summary, not read directly).
11. World Economic Forum, Future of Jobs Report 2025 (Jan 2025). https://www.weforum.org/reports/the-future-of-jobs-report-2025/in-full/2-jobs-outlook/
12. Osservatorio Big Data & Business Analytics, Politecnico di Milano, 2025 market (press coverage). https://www.agendadigitale.eu/cittadinanza-digitale/data-management/mercato-big-data-2025-in-italia-cresce-del-20-tra-ai-readiness-e-governance-della-trasformazione-digitale/
13. Microsoft Learn, PL-300 Power BI Data Analyst study guide (skills updated 2026; fee USD 165 from third-party guides). https://learn.microsoft.com/certifications/resources/study-guides/pl-300
14. Coursera, Data governance certification overview (DAMA CDMP fees), https://www.coursera.org/articles/data-governance-certification ; DAMA International, https://www.dama.org (fees to verify).
15. Nasscom-Zinnov GCC reporting via Flexiple, https://flexiple.com/gcc/statistics (FY26 projections: 2,117 GCCs, 2.36m staff) and Zinnov, https://zinnov.com/centers-of-excellence/5-shifts-defining-indias-global-capability-centers-gccs-story-in-2025-blog
16. Civil Service World, "Fast streamers accept 2025-26 pay award". https://www.civilserviceworld.com/professions/article/fast-streamers-accept-202526-pay-award ; Civil Service Careers, GSS Fast Stream, https://www.civil-service-careers.gov.uk/fast-stream/fs-all-schemes/fs-government-statistical-service-scheme/
17. Morgan McKinley, Data Analyst salary guide, Hong Kong (http://www.morganmckinley.com/hk/salary-guide/data/data-analyst/hong-kong-sar ) and Singapore (https://www.morganmckinley.com/sg/salary-guide/data/data-analyst/singapore ), 2026.
18. Michael Page Japan, Data Analyst listings, https://www.michaelpage.co.jp/en/jobs/data-analyst/ (Oct 2026).
19. ASCM, 2026 Supply Chain Salary Research, https://www.ascm.org/ascm-insights/scm-now-impact/2026-supply-chain-salary-research/ (figures from search summary; page not read directly); Payscale entry-level supply chain analyst pages (US, UK), 2026.
20. Payscale, Indeed US and ResumeGeni marketing/product analyst salary pages (2026), weak signals. https://www.payscale.com/research/US/Job=Product_Analyst/Salary
21. hr.university, Freenance, Coursera HR analyst pages (HR analyst pay, 2025-26): weak signals. https://hr.university/career/hr-analyst/hr-analyst-salary/
22. Learnsignal, Big Four graduate salary UK 2026, https://www.learnsignal.com/blog/big-four-graduate-salary-uk-2026/ (editorial estimate).
23. Improvado, Coupler.io, TechTarget on AI and data analysts (2025-26 opinion/vendor pieces). https://www.techtarget.com/searchbusinessanalytics/opinion/Will-AI-replace-data-analysts-A-year-and-a-half-later
24. Amity Online, Fueler and similar blogs on India fresher analyst pay (2026), weak signals. https://fueler.io/blog/data-analyst-salary-in-india-freshers-mid-level-and-senior-roles
25. Prior project research: research/careers/tech-data-and-ai.md (Oct 2026) used for leads only.

Data limits: no Robert Walters, Michael Page, or Hays tables could be read for 2026 data/BI roles; no reliable entry-level US data-analyst series; Italy has no analytics-engineer, marketing-analyst, HR-analyst, governance or supply-chain-analyst data; UK steward data rests on one 2026 advert and 18 in 2024. Tier lists, hours and stress ratings are practitioner perception.

# Computer Science

*Italian pay: where this report says "no reliable data found" for Italy, see [italy-pay-addendum.md](italy-pay-addendum.md) for recruiter-guide, contract (CCNL) and posting figures. Shared rating scales and the cross-branch comparison are in [../index.md](../index.md).*

*Assembled on 9 October 2026 from 2 research parts (computer-science-part-1.md, computer-science-part-2.md). Headings inside each part keep that part's own numbering with a prefix (P1-3.2 = part 1, section 3.2), so cross-references such as "see 2.6" inside a part point to that part's own subsection. Ratings use the shared scales defined in ../index.md.*

## 1. What this branch is

Computer science careers are about designing, building and running software and the systems it runs on. Most graduates become software engineers who build products (websites, apps, back-end services, games), but a large share work one layer down, keeping infrastructure, cloud platforms, data pipelines and embedded devices running, or in enterprise IT and consulting, where they configure and integrate business software for clients. Pay ranges more widely than almost any other branch: a new graduate at a top US tech or trading firm can earn several times what the same graduate earns at an Italian IT services firm, and the gap between the US and Europe is large. Since 2023 the entry-level market has been the hardest in a decade (fewer junior postings, AI coding tools changing junior work), while demand for experienced engineers remains solid, so the first job is the main hurdle.

Scope notes: researched in two parts (product software engineering; infrastructure, systems and other CS careers). AI/ML engineering, data science, data analytics, cybersecurity, quant development (Finance part 4) and product management have their own reports.

## 2. Map of areas and sectors

| Area | What it builds or runs | Main employers | Part |
|---|---|---|---|
| Backend, frontend, full-stack engineering | Server logic, APIs and user interfaces of web products | Big tech, scale-ups, startups, banks, agencies | 1 |
| Mobile engineering | iOS and Android apps | Consumer tech, banks, retailers, agencies | 1 |
| Game development | Game engines, gameplay, tools | Game studios and publishers | 1 |
| Quality engineering (QA, SDET) | Automated tests and release quality | Any software employer, IT services firms | 1 |
| Solutions/sales engineering, developer relations | Technical pre-sales, demos, developer communities | Software vendors, cloud providers | 1 |
| DevOps, SRE, platform engineering | Deployment pipelines, reliability, internal platforms | Tech firms, banks, any large software employer | 2 |
| Cloud engineering and architecture | Cloud infrastructure (AWS, Azure, GCP) | Cloud providers, consultancies, enterprises | 2 |
| Embedded, firmware and systems | Software inside cars, machines, chips and devices | Automotive, industrial, semiconductors, defence | 2 |
| Data engineering | Data pipelines and warehouses | Tech, finance, retail, consulting | 2 |
| Enterprise applications and IT operations | SAP, Salesforce, ServiceNow configuration; system administration | System integrators, corporate IT departments | 2 |
| Technology consulting / system integration | Client IT projects | Accenture, Deloitte, Capgemini, Reply and others | 2 |
| CS research | New algorithms, systems and theory | Universities, industry research labs | 2 |

### Part 1: Product software engineering

This part of the computer science branch covers the people who build and test the software products that customers and employees use: websites, apps, payment systems, games and the services behind them. It also covers the technical people who help sell or promote those products to other engineers. Seven role families are covered: backend, frontend, full-stack, mobile, game programming, quality assurance (QA) and test automation, and customer-facing technical roles (solutions/sales engineering and developer advocacy). Infrastructure, data engineering, embedded systems, enterprise IT and research are in part 2; AI/ML engineering, data science, cybersecurity, quant development and product management are other branches and appear here only as cross-references. The honest headline for a student in October 2026 is that this is still one of the best-paid career families for graduates, but the entry-level door is narrower than it was in 2021, and the gap between the best-paying employers and the average one is very large.

Scope notes: (1) Pay figures mix sources of different quality. Levels.fyi is self-reported and skews toward big tech, scale-ups and well-paid hubs, so it overstates typical pay; ITJobsWatch is based on UK job-advert salaries and is noisy for small samples; Italian figures rest on small samples and secondary sources. (2) Hours and stress figures are practitioner consensus, not survey data, because no reliable survey by role family was found; they are marked as such. (3) "Entry" means 0-2 years of experience, "~5 years" means mid-level to senior, "senior" means 8+ years or a senior/staff title. (4) Exchange rates are not converted; each figure is in its original currency. (5) Items marked "unverified" could not be checked against a primary source during this research. (6) Searching was cut off by a tool limit partway through, so some areas (game programmer pay outside Canada, DevRel pay, Italy-specific QA and game studio data) have "no reliable data found" notes instead of numbers.

#### P1-2.1 Overview: who employs software engineers

Software engineers work in almost every industry. In the US, the Bureau of Labor Statistics (BLS) says most software developers work in computer systems design, finance and insurance, software publishers or manufacturing (BLS Occupational Outlook Handbook, May 2025 data). The main employer types:

- **Big tech** (Google, Microsoft, Amazon, Meta, Apple; in Europe SAP, Spotify, Booking.com, Adyen). Highest pay for ordinary software roles, structured career ladders, formal interview loops, and heavy competition for entry roles.
- **Top-paying specialists** (quant trading firms such as Jane Street, Hudson River Trading, Citadel, IMC, Flow Traders, Optiver; AI labs such as OpenAI and Anthropic; late-stage companies such as Databricks). These pay far above the rest of the market for a small number of very selective jobs. Levels.fyi's 2025 report lists entry-level software engineer total compensation (base plus bonus plus stock) at US$400,000 at Hudson River Trading, US$350,000 at Jane Street and US$300,000 at OpenAI.
- **Scale-ups and startups** (Stripe, Revolut, Monzo, Wise, Zalando, Bending Spoons, Satispay and thousands of smaller firms). Wider variety of pay, more ownership and breadth, more risk.
- **Banks and financial firms** (JPMorgan, Goldman Sachs, Morgan Stanley, UBS, plus Italian banks and insurers). Large in-house technology divisions, moderate pay, stricter processes, more stability.
- **Non-tech corporates** (manufacturers, utilities, retailers, telecoms, the public sector). Software is a cost centre rather than the product, so pay and prestige are lower but hours are usually kinder.
- **IT services and outsourcing firms** (Accenture, Capgemini, Deloitte, PwC, Cognizant; TCS and Infosys from India; in Italy Reply, Engineering Ingegneria Informatica, NTT Data Italia and others). They build software for other companies, employ a huge share of graduates, and are the most common first job in Italy.
- **Software agencies and freelancing.** Small studios building websites and apps for clients, and independent contractors working through their own business or marketplaces.

**The 2023-2026 hiring market (dated data).**

- Software development job postings on Indeed were still about 27.5% below their February 2020 level in mid-2026, but up almost 15% since late February 2025 while overall postings fell 7% (Indeed Hiring Lab, 8 July 2026). Senior roles made up 71% of the growth between May 2025 and May 2026, and roughly 37% of the growth came from jobs with AI in the title (the two overlap).
- Senior roles were 69.3% of software postings in Q1 2026 and entry-level roles only 4.5% (Indeed Hiring Lab, 23 July 2026).
- New-graduate hiring at the largest tech companies is down roughly 65% against 2019 and at early-stage startups about 76%, while total hiring at those same big firms is about 25% below 2019 (SignalFire State of Talent Report, 22 June 2026). Graduates of the top 20 US computer science programs in 2025 were 45% less likely to take an engineering role at a big tech company than a few years earlier. Within engineering, the front-end share fell by about 25%, the steepest drop among specialties, while AI/ML engineer share rose 39% since 2022 (the report's baseline for the front-end figure was not clear from the page).
- Stanford researchers using ADP payroll data found that employment of 22-25 year-olds in AI-exposed occupations is about 19% below where it would be otherwise (Stanford Digital Economy Lab, "Canaries in the Coal Mine", revised 12 August 2026). The effect works mainly through reduced hiring rather than layoffs, and the authors call it early and descriptive rather than proven cause and effect. The paper's headline group is not software developers specifically.
- Layoffs: sources disagree. Layoffs.fyi-based reports counted roughly 122,000-124,000 tech layoffs for 2025, and about 125,800 for 2026 as of 6 August 2026 (secondary reports; one other secondary report put the 2026 figure higher, so treat the exact number as uncertain). Challenger, Gray & Christmas (a US outplacement firm) counted 165,925 tech-sector announcements through September 2026 against 107,878 by September 2025, as reported in the press (search summary; the full report was not read).
- AI coding tools are now normal. In Stack Overflow's 2025 survey of more than 49,000 developers, 80-84% used or planned to use AI tools (the sources give both figures), 47% used them daily, but only 29-33% trusted the accuracy, and 66% said their top frustration was output that was "almost right, but not quite". About 64% did not see AI as a threat to their job, down from 68% the year before. A randomized trial by METR in 2025 found experienced open-source developers took 19% longer with AI tools than without; METR's 2026 follow-up was inconclusive (METR, July 2025 and February 2026, reused from a prior project file and not re-verified).
- Official outlook is more positive than posting data: BLS projects 10% growth for software developers, QA analysts and testers combined from 2025 to 2035 (about 106,100 openings a year), and 6% for QA analysts and testers alone (BLS, accessed October 2026).
- Europe: Germany's Bitkom survey reported 79,000 unfilled IT positions in 2026 against 109,000 in 2025 (3 September 2026, reused from a prior project file). In Italy, ICT professionals are about 4% of employment against about 5% in the EU, and demand outpaces graduates (Osservatorio sulle Competenze Digitali 2025 by AICA, Anitec-Assinform and Assintel, reported in secondary press; exact numbers vary by article, so treat as indicative).
- IT services: TCS's headcount fell by 23,460 to 584,519 in its 2025-26 financial year; Infosys said it plans at least 20,000 graduate hires in the next financial year; TCS's own graduate target is reported inconsistently (about 25,000 or about 40,000) (Indian press reports, April 2026; search summary only). Reply, the Italian group, had 17,297 employees at 30 June 2026 against 16,261 a year earlier (Reply half-year report 2026, via search summary).

What this means for a student: the market rewards people who can show real work (internships, shipped projects, open-source contributions) and punishes those who only hold a degree. It is also uneven by region: the US pays several times Italian salaries for the same title, and Europe's shortage numbers coexist with a thin junior pipeline.

#### P1-2.2 Backend engineering

**Definition.** Backend engineers build the parts users never see: servers, databases, APIs (the interfaces other software calls), payment logic, search, messaging, and the data processing behind an app.

**In practice.** You write services in languages such as Java, Go, Python, C#, Kotlin, Node.js or Rust, design database tables, make systems fast and reliable, and respond to incidents. At large employers you may own one small service; at small ones you own everything from the database to deployment.

**Employers.** Every large software company, banks and trading firms, e-commerce and fintech, telecoms, and IT services firms building systems for clients. In the 2025 Stack Overflow survey, back-end developers were 14.2% of respondents and full-stack developers 27%.

#### P1-2.3 Frontend engineering

**Definition.** Frontend engineers build what the user sees and touches in a browser: pages, forms, dashboards, interactive components and the accessibility and performance of them.

**In practice.** Mostly JavaScript or TypeScript with a framework (React is the most common; Vue and Angular are widespread in Europe), CSS, design systems, and a lot of collaboration with designers and product managers. Generative-AI tools can produce standard interfaces quickly, which is one reason the front-end share of engineering hiring has fallen faster than other specialties (SignalFire 2026).

**Employers.** Product companies, e-commerce, agencies, banks (customer portals and trading screens), consultancies, public-sector digital services.

#### P1-2.4 Full-stack engineering

**Definition.** Full-stack engineers work on both sides: the interface and the server code. The title is the single most common developer self-description in the 2025 Stack Overflow survey (27%).

**In practice.** Typical at startups, small product teams and agencies where one person ships a feature end to end. At larger firms, "full-stack" often means mostly one side with the ability to work on the other.

**Employers.** Startups, scale-ups, agencies, freelancers, internal product teams at non-tech firms.

#### P1-2.5 Mobile engineering

**Definition.** Mobile engineers build apps for phones and tablets: iOS (Swift, SwiftUI), Android (Kotlin, Jetpack Compose) or cross-platform (Flutter, React Native, Kotlin Multiplatform).

**In practice.** You work with app-store release rules, device fragmentation (hundreds of Android models), offline behaviour, battery and performance limits, and slow release cycles compared with the web.

**Employers.** Consumer apps (banking, ride-hailing, delivery, social, streaming), big tech platform teams, fintech and neobanks, agencies, and companies whose app is a thin client onto a larger product.

#### P1-2.6 Game development

**Definition.** Game programmers write gameplay, engine, graphics, tools, networking and AI code for games, usually in C++ or C# (Unreal, Unity, in-house engines).

**In practice.** The work is deeply technical and performance-sensitive, but the industry is project-driven with crunch (extended overtime before release), studio closures and low pay relative to other software sectors. In the 2026 GDC State of the Game Industry survey (more than 2,300 professionals), 28% had been laid off in the past two years, 33% in the US, and half said their employer had layoffs in the past 12 months; 74% of the surveyed students worried about future job prospects. 52% of professionals said generative AI is hurting the industry, up from 30% the year before.

**Employers.** Large publishers (Electronic Arts, Ubisoft, Take-Two, Activision Blizzard under Microsoft), engine and platform companies (Epic Games, Unity), mobile game companies, independent studios, and adjacent industries that use game engines (simulation, automotive, film, architecture). Italy has small studios and a Milan Ubisoft site (the Milan site is unverified in this research); most Italian graduates targeting AAA games relocate.

#### P1-2.7 Quality engineering (QA, test automation, SDET)

**Definition.** Quality engineers make sure software works. Manual QA tests by hand; test automation engineers write code that runs tests automatically; an SDET (Software Development Engineer in Test) is a developer who builds testing frameworks and tools.

**In practice.** The role has shifted from manual checking toward automation and "shift-left" practice, where developers own more of the testing. BLS counted 187,600 US QA analysts and testers in 2025 with median pay US$104,300 and 6% projected growth, slower than developers.

**Employers.** Software companies, banks and insurers (heavy regulatory testing), game studios, automotive and medical-device software, and IT services firms that sell testing as a service.

#### P1-2.8 Customer-facing technical roles

**Definition.** Solutions engineers and sales engineers (the same job under different names) are the technical experts who join sales teams: they run product demos, answer security and architecture questions, run proofs of concept, and help customers decide to buy. Developer advocates (DevRel) explain a product to developers through talks, code samples, documentation, videos and community work.

**In practice.** Solutions engineering is a technical sales job with quota-linked pay. Developer advocacy is a communications job for people who can code; it is a small, volatile field that often expands and contracts with company marketing budgets. SignalFire reports the sales-engineer share of tech headcount up about 11% since 2022 and forward-deployed engineers (engineers embedded with customers, popular at AI companies) up about 30%.

**Employers.** B2B software vendors (cloud, data, security, developer tools), consultancies, and AI companies.

### Part 2: Infrastructure, systems and other CS careers

This part of the Computer Science branch covers the people who build and run the machinery underneath software: the cloud platforms, deployment pipelines, firmware inside cars and chips, data pipelines, enterprise systems (ERP, CRM) and the consulting firms that install them, plus the researchers who push the field forward. Part 1 covers product software engineers (backend, frontend, mobile, games, QA). The jobs here are less visible than building an app, but they are large, stable employers of CS graduates, and several of them (SRE, cloud, data engineering, embedded) pay as well as product engineering in the same market. The honest headline for 2026 is that the entry door is narrower than the 2021 boom suggested: in the US, 69.3% of software-development job postings in Q1 2026 were senior and only 4.5% entry-level (Indeed Hiring Lab, 23 Jul 2026), and several of these roles (DevOps, SRE, cloud architect) are rarely given to complete beginners. Alternative first jobs (IT support, graduate consulting schemes, engineering-services firms, industrial employers) are how many people actually get in.

Scope notes: (1) Today is 9 October 2026. Salary figures are dated; most are from 2025-2026. UK figures from ITJobsWatch are advertised salaries over the six months to 9 Oct 2026 and cover all seniority levels, so they overstate entry pay. Levels.fyi and Stack Overflow figures are self-reported, skew to tech employers, and are all-levels medians, not graduate offers. (2) "Systems programming/low-latency" and "database administration" have no separate role family in section 3; they are treated inside 3.1 (platform/performance work), 3.3 (embedded/systems) and 3.4 (data engineering), and low-latency trading development is cross-referenced to the quant-development branch. (3) Hours and stress ratings are the author's synthesis of practitioner descriptions and the few surveys found (Catchpoint, BLS); no cross-employer hours survey for these roles was found, so treat hours as estimates. (4) A web-search budget limit ended searching before every gap could be closed; missing items are marked "no reliable data found". Italian pay figures are the weakest part of the evidence base: official, role-specific Italian IT salary tables could not be read, so the Italian numbers rest on job adverts, Levels.fyi and commercial estimate sites, and are labelled so. (5) Employer tier lists are a perception-based framework, not a ranking.

**DevOps, site reliability engineering (SRE) and platform engineering.** DevOps is a way of working that joins software development and IT operations so code reaches users quickly and safely; SRE (a discipline that began at Google) treats reliability as an engineering problem with numeric targets (service level objectives, SLOs); platform engineering builds internal "paved roads" (self-service tooling) that other developers use. In practice: Terraform/Kubernetes, CI/CD pipelines, monitoring, incident response and on-call. Employers: every company that runs software at scale, from big tech and fintech to banks, telecoms and retailers. The 2025 DORA research programme (Google Cloud) describes platform adoption as widespread (a secondary summary quotes about 90%) and says AI acts as an "amplifier" of an organisation's existing strengths and weaknesses (DORA 2025).

**Cloud engineering and architecture (AWS, Azure, GCP).** Cloud engineers design, build and secure infrastructure rented from the big providers; solutions architects design systems for customers, often in pre-sales at the provider or at a consultancy. Employers: the hyperscalers (Amazon Web Services, Microsoft, Google Cloud), consultancies and system integrators, and the in-house IT of nearly every large organisation. Italian-market examples include Italian cloud providers such as Aruba and the cloud units of Reply (Storm Reply), Engineering and Accenture.

**Systems programming and performance/low-latency engineering.** Writing operating-system components, databases, compilers, network stacks and trading systems in C, C++ or Rust where speed and memory matter. Employers: big-tech infrastructure teams, database/infrastructure vendors, hardware companies, and trading firms (the latter is covered in the quant-development branch; here only the cross-reference).

**Embedded systems and firmware.** Software that runs inside a device with limited memory and strict timing: engine and brake control units, factory robots and PLCs (programmable logic controllers), medical devices, phones, chips and avionics. Employers: automotive makers and suppliers (Bosch, Continental/Aumovio, ZF, Marelli, Stellantis, Ferrari), semiconductor firms (STMicroelectronics, Infineon, NXP, TSMC, Nvidia, Qualcomm), defence and aerospace (Leonardo, Thales, Airbus, Rheinmetall, BAE Systems), industrial automation, and engineering-services firms. Italy's base is automotive and Motor Valley (Emilia-Romagna), the Turin automotive cluster, STMicroelectronics (Agrate Brianza, Catania), Infineon (Padova, Pavia) and Leonardo; Germany's is Stuttgart/Munich automotive. Both are restructuring: Bosch said in January 2026 it would cut another 13,000 jobs in its Mobility business (project research file, citing the Bosch press release of 30 Jan 2026), and reported plans to cut 3,500 jobs in its car-software division by 2027 (AFP report, late 2024; execution status not verified).

**Data engineering.** Building and operating the pipelines, warehouses and lakehouses (Snowflake, Databricks, BigQuery, Spark, Airflow, dbt) that move and clean data for analysts, scientists and AI systems. Employers: any data-heavy company, banks and insurers, data-platform vendors, consultancies. Data analytics and data science are separate branches; data engineering is the software-engineering side of data.

**Database administration/engineering.** Keeping databases (Oracle, SQL Server, PostgreSQL, MongoDB) backed up, fast and secure. The US Bureau of Labor Statistics (BLS) projects database administrators at 0% employment change and database architects at +9% for 2025-35, with pay of $104,620 (administrators) and $139,500 (architects) in May 2025 (BLS). The classic DBA job is shrinking and merging into cloud and data engineering.

**Enterprise IT: ERP/CRM consulting, systems administration, IT support.** ERP (enterprise resource planning: finance, supply chain, HR) means SAP, Oracle; CRM (customer relationship management) means Salesforce; ServiceNow runs IT and business workflows. Consultants configure and customise them for clients. Sysadmin and help-desk roles keep an organisation's own systems running and are a classic entry route. SAP's mainstream maintenance for its older ERP (ECC 6.0) ends on 31 Dec 2027 (extended maintenance to 2030 at extra cost), which is driving migration work to S/4HANA; only about 39% of ECC customers had migrated by late 2024 (Basis Technologies, via secondary reports).

**IT/technology consulting and system integrators.** Firms that build and run technology for clients: Accenture, Deloitte, Capgemini, IBM Consulting, NTT Data, Cognizant, Kyndryl, Sopra Steria, CGI; in Italy Reply, Engineering Ingegneria Informatica, Almaviva, Exprivia. Reply reported 2025 revenue of EUR 2,483.6m (+8.0%) and 16,624 employees (+6.0%) (Reply, Mar 2026). Engineering reported 2025 revenue of EUR 1,759.7m (+2.5%) (Engineering press release, 30 Mar 2026); its headcount is not stated in the release (company materials from 2024 say about 15,000, a third-party estimate says about 20,000; unverified).

**Computer science research.** Industry labs (Google DeepMind/Research, Microsoft Research, Meta, IBM Research, Nvidia), universities and public institutes. A PhD is the usual ticket. In the US, 61.4% of new CS PhDs with known jobs went to industry in 2025 (CRA Taulbee 2025).

## 3. Role families

### Part 1: Product software engineering

#### P1-3.1 Backend software engineer

**What you actually do.** You design, write and review code for services that run behind products. A typical example: you build and maintain a payments API in Go or Java, write database migrations, add automated tests, review colleagues' pull requests (proposed code changes), and debug production problems using logs and dashboards. You use Git, a code-review tool, containers (Docker), cloud platforms (AWS, Azure, Google Cloud), databases (PostgreSQL, MySQL, Redis, Kafka for message streams), and continuous integration pipelines (automatic build and test on every change). Deliverables are shipped features, design documents, and reliability improvements. Juniors are usually given well-scoped tickets; seniors write the designs.

**A typical day and week.** A typical day: a 15-minute standup (a short team sync), two to four hours of focused coding, a couple of code reviews, a meeting with product or another team, and an hour of debugging or investigating an alert. A typical week includes planning, a design review, and for many teams an on-call rotation (a week every four to eight weeks in which you respond to production alerts, including at night at some firms). At big tech and good scale-ups, you do not usually do full-time manual deployments; much of that is automated.

**Hours, stress and lifestyle.** Typical 40-48 hours a week; peaks of 55-70 around launches, incidents or in high-intensity startups and trading firms (practitioner consensus; no reliable survey by role found). Stress: 3/5 in most firms; 4/5 in trading, payments or on-call-heavy teams where an outage costs money immediately. Lifestyle is flexible: in the 2025 Stack Overflow survey 45% of US respondents were fully remote against 31.9% in the UK, 22.5% in Germany and 18.1% in France (Stack Overflow 2025, work section). Travel is rare. On-call is the main lifestyle cost.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 4/5. Most of the job is solving technical problems, but design reviews, incident calls and working with product managers mean communication matters more as you become senior.

**Compensation (approximate).**

- **US:** Levels.fyi lists a US backend software engineer median total compensation of US$195,000 (25th to 75th percentile US$147,000-265,000; accessed 9 October 2026). Levels.fyi's 2025 annual report puts the overall US software engineer median at US$192,500 and entry-level at US$155,000, mid-level US$226,000, senior US$312,587 and staff US$457,500 (2025, total compensation, big-tech-heavy sample). The Levels.fyi entry-level page showed a lower US$141,000 median (accessed 9 October 2026, n=6,842). Outside the big-tech bubble pay is lower: BLS gave a median of US$135,980 for all software developers in May 2025 (base salary, all experience; 10th percentile US$82,460, 90th percentile US$214,670). Stack Overflow's 2025 survey gave a median of US$175,000 for US back-end developers (self-reported salary, all experience).
- **Bay Area vs rest of US:** SF Bay Area software engineer median US$278,000, Seattle US$250,000, New York US$193,000, Boston US$168,750, Austin US$185,000 (Levels.fyi 2025 report, total compensation).
- **UK:** London entry-level median total compensation £56,613 (Levels.fyi, n=354, accessed 9 October 2026); London all-levels median £102,326; London senior median £129,949. Advert-based data gave a UK median permanent software engineer salary of £70,000 and £100,000 in London (ITJobsWatch, six months to 9 October 2026), while "graduate software engineer" adverts had a UK median of just £29,000 and £50,000 in London. The sources disagree because Levels.fyi captures big-company packages, while adverts include many lower-paying employers.
- **Italy:** Milan software engineer median total compensation €35,837 (Levels.fyi, n=18, all levels, accessed 9 October 2026; small sample); senior in Milan €57,438 (n=45). Third-party estimates for 2026 gave gross annual salary (RAL) of €32,000 junior, €45,000 mid-level and €62,000 senior for backend developers (Italy Handbook, updated 6 October 2026; third-party, no stated source). Advert ranges at consulting firms in Milan were about €26,500-31,000 for a junior developer at Deloitte and €28,000-32,500 for a software engineer associate at PwC (Indeed Italy summaries, 2026; secondary).
- **Rest of Europe (total compensation, Levels.fyi, accessed 9 October 2026):** Berlin median €92,035 (entry €76,140, n=53); Amsterdam €108,349; Paris €65,777; Zurich CHF 149,660. Europe overall median US$73,618 in 2025, down 3.23% year on year; Switzerland the highest-paying European country at US$148,289 (Levels.fyi 2025 report).
- **Asia and Middle East:** Singapore median SGD 115,212; Tokyo ¥8,591,979; Hong Kong HK$605,175; Dubai AED 311,987 (all Levels.fyi, all levels, total compensation, accessed 9 October 2026). Bengaluru US$40,359 and India US$33,768 (Levels.fyi 2025), which is the offshoring benchmark.

**Career path.** Typical UK/US timeline: Junior/Software Engineer I (0-2 years), Software Engineer II / mid-level (2-5), Senior (5-8), Staff/Principal (8-12+) on the individual-contributor (IC) track; or Tech Lead, Engineering Manager (often from year 5-8), Director on the management track. The split is real: Levels.fyi shows engineering managers paid comparably to or above staff engineers at top firms, but management is people work and fewer roles exist (SignalFire 2026: about 12 engineers per manager at big tech, about 15 at startups). In Italy, titles are looser (Developer, Senior Developer, Tech Lead, Team Leader) and promotion timelines at IT services firms are tied to years and project assignments.

**Exit opportunities.** After 2-3 years: platform/SRE or data engineering (part 2), a move from IT services to a product company, or into AI/ML engineering with additional learning. After 7-10 years: staff/principal engineer, engineering management, architect, founding or joining a startup as an early engineer, technical product management, or consulting. Cross-references: AI/ML engineering, quant development and product management are separate branches.

**Tier list of employers.**

- **Tier 1 (top-paying trading firms and AI labs):** Hudson River Trading, Jane Street, Citadel, OpenAI, Anthropic, Databricks. Extremely selective; pay can exceed big tech by 1.5-3 times at entry level.
- **Tier 2 (big tech and top scale-ups):** Google, Meta, Amazon, Microsoft, Apple, Netflix, Airbnb, Stripe, Adyen, Booking.com, Spotify, Datadog. Strong brand, structured levels, formal interviews, and large stock components.
- **Tier 3 (mid-tier tech, fintech and banks):** JPMorgan, Goldman Sachs, Revolut, Monzo, Wise, Zalando, Bending Spoons, Satispay. Levels.fyi US averages: Goldman analyst-level software engineer US$114K total, JPMorgan US$112K.
- **Tier 4 (non-tech corporates and IT services):** Accenture, Capgemini, Deloitte, PwC, Reply, Engineering, TCS, Infosys, plus in-house IT at manufacturers and utilities. Lower pay, wider hiring, and good for a first job.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** A bachelor's in computer science, software engineering or a related field (maths, physics, engineering) is the default; BLS lists a bachelor's as the typical entry education. A consecutive master's rarely changes entry pay in generic software roles (swissICT 2025: about CHF 86,900 with master's vs CHF 82,000 with a university bachelor's; Germany about €51,500 vs €46,300; reused from a prior project file, not re-verified). Self-taught and bootcamp routes work but are harder now.
- **Internships and graduate programs:** In the US and UK, big firms recruit interns in autumn for the next summer, and new graduates in the autumn before graduation (for example, Amazon posted SDE I Early Career 2027 roles on 24 September 2026, per a prior project file; Jane Street's job board showed internship and new-grad postings dated July-September 2026). UK graduate schemes mostly open in September-December. In Italy, hiring is continuous, with spikes after graduations and at career days; large IT services firms run academies (training-then-placement programs).
- **Interview formats:** Online assessment, phone screen, then a "loop" of several interviews (Amazon describes application, assessments, phone screening and interview loop with a "Bar Raiser", an interviewer from outside the hiring team). Coding interviews on algorithms and data structures are standard at big tech and trading firms; system design appears from mid-level up; take-home projects and pair programming are common at scale-ups; Italian IT services firms usually use a technical chat plus a short test and HR interview (unverified, practitioner consensus).
- **Certifications:** Cloud certificates (AWS Cloud Practitioner/Associate) help a little at IT services firms and not at all at big tech. A degree and a portfolio matter far more.
- **Skills and portfolio:** One strong language (Java, Go, Python or C#), SQL, Git, HTTP and API design, testing, Docker, a cloud basics course, and two or three finished projects with real users or open-source pull requests. AI-assisted coding is now expected, but employers still test whether you understand the code.
- **Common mistakes:** Only completing tutorials; applying to 20 jobs instead of 200; ignoring internships; skipping data-structures practice for big-tech loops; not being able to explain code AI generated.
- **Alternative routes:** Start at an IT services firm and move after 1-2 years; apply to non-target schools' Europe-wide scale-ups; contribute to open source; take a fast-growing startup. Remote work for a foreign employer is possible for experienced engineers but rare for juniors.

Entry difficulty: 4/5 (3/5 for IT services and non-tech roles; 5/5 for big tech and trading firms).

**Honest downsides and who it is NOT a good fit for.** On-call duty; the entry-level squeeze; constant retraining; a large pay gap between Italy and the US/UK/Switzerland; pay data that looks better than most people's reality because it is big-tech-heavy. Not a good fit if you dislike debugging, solitary concentrated work or ambiguity, or if you want a defined 9-to-5 with no pager (non-tech corporates fit that better).

#### P1-3.2 Frontend engineer

**What you actually do.** You build the interface in the browser: components, pages, forms, state handling, and the code that talks to backend APIs. Example: you rebuild the checkout flow of an e-commerce site in React and TypeScript, make it accessible to screen-reader users, improve its load time, and write component and end-to-end tests. Tools: JavaScript/TypeScript, React (also Vue, Angular, Svelte), HTML/CSS, Next.js or similar frameworks, Storybook for components, Figma for designs, Jest/Playwright for tests, and browser developer tools. Deliverables are shipped screens, reusable components and performance fixes.

**A typical day and week.** Standup, then building features with a designer or product manager on call; reviewing pull requests; cross-browser or accessibility bug fixing; an hour answering questions about design-system components. Weekly design critique and sprint planning. On-call is lighter than backend (usually you are on a secondary rotation or none).

**Hours, stress and lifestyle.** Typical 40-45 hours a week; peaks of 50-60 near launches and campaign deadlines (practitioner consensus). Stress: 3/5 (visible deadlines, lots of stakeholder opinions about what the page should look like). Highly flexible and remote-friendly; agencies are more deadline-driven.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 3/5. You spend as much time reconciling designer, product and engineering views as writing code; the math is light, but the browser platform is complex.

**Compensation (approximate).**

- **US:** Levels.fyi front-end software engineer median US$196,000 (25th-75th percentile US$132,000-267,000; total compensation; accessed 9 October 2026). Stack Overflow 2025 median salary for US front-end developers US$145,000 (self-reported, all experience); the global median was US$62,015. Entry-level big-tech pay overlaps with backend (US$141,000-155,000 median entry-level software engineer total compensation); outside big tech, entry pay is usually lower (no single reliable source found).
- **UK:** ITJobsWatch front-end developer permanent adverts, six months to 9 October 2026: UK median £65,000 (up from £60,000 a year earlier; 10th-90th percentile £43,923-90,000), London median £82,500. Stack Overflow 2025 UK median US$84,544.
- **Italy:** Frontend developer 2026 gross annual salary estimates of €30,000 junior, €42,000 mid-level and €58,000 senior (Italy Handbook, updated 6 October 2026; third-party). No reliable Italy-specific Levels.fyi or official figure found.
- **Rest of Europe:** Germany US$79,637 median front-end (Stack Overflow 2025); France US$61,488; Berlin all-levels software engineer median €92,035 (Levels.fyi). Singapore, Tokyo, Hong Kong and Dubai: no front-end-specific figures found; use the all-engineer medians in section 3.1.

**Career path.** Junior front-end engineer (0-2 years), mid-level (2-5), senior (5-8), staff front-end or design-systems lead (8+) on the IC track; or front-end lead, engineering manager. Many front-end engineers broaden into full-stack, which keeps more options open as the front-end share of hiring has shrunk.

**Exit opportunities.** After 2-3 years: full-stack, mobile, design engineering (a hybrid with design), or product-minded roles. After 7-10 years: staff/principal engineer, engineering manager, UX engineering lead, technical product management, or freelance consulting. Solutions engineering and developer advocacy are natural moves for strong communicators.

**Tier list of employers.**

- **Tier 1 (highest-paying product companies):** Meta, Google, Airbnb, Netflix, Stripe, Notion, Figma, plus trading firms with trading-screen teams. Highly selective; frontend teams are small compared with backend ones.
- **Tier 2 (strong scale-ups and large product firms):** Spotify, Booking.com, Zalando, Revolut, Monzo, Shopify, Datadog, Atlassian.
- **Tier 3 (banks, e-commerce, media):** JPMorgan, Goldman Sachs, retail banks, large e-commerce and travel firms.
- **Tier 4 (agencies, IT services, non-tech):** Digital agencies, Accenture Song, Capgemini, Reply, in-house web teams.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** CS or a related degree is the safest; design, media and self-taught backgrounds are more accepted here than in backend, and bootcamps have historically fed this role (their pipeline has weakened since 2022).
- **Internships and graduate programs:** Same autumn-for-summer cycle at big firms; many agencies and scale-ups hire year-round. In Italy, web agencies in Milan, Turin and Rome and IT services firms are the main first employers.
- **Interviews:** JavaScript/TypeScript fundamentals (closures, async, the event loop), building a small UI component live, CSS/layout questions, sometimes data-structure problems at big tech, take-home projects at scale-ups, and "front-end system design" (designing a component architecture) from mid-level.
- **Certifications:** Mostly irrelevant. A portfolio and public code matter.
- **Portfolio and skills:** Three deployed projects with real functionality, TypeScript, accessibility basics, testing, performance profiling and a working knowledge of at least one backend.
- **Common mistakes:** Portfolio of tutorial clones; ignoring accessibility and testing; relying on AI-generated code you cannot debug; staying narrowly "React only."
- **Alternative routes:** Bootcamps (lower success now), agency internships, freelance sites, or switching from design or marketing with a strong portfolio. IT services firms hire frontend developers in volume as a stepping stone.

Entry difficulty: 3/5 for agencies and IT services; 4/5 for good product companies (the front-end share of engineering hiring has been falling fastest, per SignalFire 2026).

**Honest downsides and who it is NOT a good fit for.** Tool churn (frameworks change every few years); AI tools are strongest at standard interfaces, so the pure "build screens from designs" job is the most exposed part of the stack; salaries sit below backend in surveys. Not a good fit for people who dislike subjective feedback ("make the logo bigger"), or who want to avoid constant change.

#### P1-3.3 Full-stack engineer (especially at startups and agencies)

**What you actually do.** You build a feature from database to screen. Example at a seed-stage startup: add a subscription billing feature by writing a database migration, a Node.js or Python API, a React interface, a Stripe integration and the tests, then deploy it yourself on AWS or Vercel and watch the logs. At an agency, you build client websites or web apps on a fixed budget: a Next.js front end, a headless CMS, a small API and a hosting setup. Tools: TypeScript, React/Next.js, Node, Python/Django, Ruby on Rails, PHP/Laravel, SQL, Docker, cloud platforms, and AI coding assistants.

**A typical day and week.** Mornings in code, midday client or product calls, afternoon bug fixes and deployments. At startups, a typical week touches product decisions, support escalations and some infrastructure; at agencies, time tracking against client budgets and project switching. On-call is informal at startups ("if the site is down, you fix it").

**Hours, stress and lifestyle.** Typical 40-50 hours a week; peaks of 55-70 at startups before funding milestones or agencies before delivery (practitioner consensus). Stress: 3/5 (broad responsibility, shifting priorities; startup survival pressure raises it). Often remote or hybrid.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 4/5. Breadth rather than depth: you talk to founders, clients or product managers daily and must translate vague wishes into scope.

**Compensation (approximate).**

- **US:** Levels.fyi full-stack software engineer median US$172,500 (25th-75th percentile US$123,000-240,000; total compensation; accessed 9 October 2026). Startup packages lean heavily on equity that may end up worthless; agency pay is closer to the low end of the range (no reliable agency-specific US source found).
- **UK:** ITJobsWatch full-stack developer permanent adverts (six months to 9 October 2026): UK median £60,000 (10th-90th percentile £42,500-100,000), London median £67,500, down 15.63% on the year before.
- **Italy:** No distinct full-stack figure found; use the general developer ranges of €28,000-35,000 junior, €38,000-50,000 mid-level and €55,000-85,000+ senior gross annual salary (Italy Handbook, 2026; third-party). Italian job adverts at consultancies for junior full-stack roles in Milan were about €25,500-28,000 (PwC, via Indeed Italy summary; secondary).
- **Rest of Europe and Asia:** No full-stack-specific data found; use all-engineer medians from section 3.1.

**Career path.** Junior full-stack (0-2 years), full-stack engineer (2-4), senior (4-7), then either tech lead/staff engineer or CTO/head of engineering at small companies (often the fastest title growth in the field, but with little or no pay certainty). Freelance or agency owner is another branch.

**Exit opportunities.** After 2-3 years: specialise in backend or frontend at a bigger employer, move to product management, or join another startup at a higher level. After 7-10 years: founder, CTO, staff engineer, engineering manager, independent consultant. Break-in to big tech is possible after proving depth in one specialty.

**Tier list of employers.**

- **Tier 1 (well-funded startups and scale-ups with strong engineering brands):** Stripe, Databricks, Vercel, Linear, Notion, Bending Spoons, Revolut. Pay and learning are high; selection is hard.
- **Tier 2 (venture-backed startups, established SaaS):** European scale-ups such as Personio, Typeform, Satispay, Back Market, plus mid-sized SaaS firms.
- **Tier 3 (product companies at non-tech firms and strong agencies):** In-house teams at retailers, media and fintech; well-regarded agencies.
- **Tier 4 (low-cost agencies, freelance marketplaces, IT body shops):** Low pay, high variability, but easy to enter.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** CS degrees are the norm, but this is the role where self-taught and bootcamp graduates have the best chance, especially at agencies.
- **Internships and graduate programs:** Startups hire year-round, often through founders' networks or Hacker News "Who is hiring" threads; many have no formal graduate schemes. Agencies offer short internships.
- **Interviews:** A live build or take-home project (build a small app), plus a conversation on trade-offs; fewer algorithm puzzles than big tech.
- **Certifications:** Largely irrelevant.
- **Portfolio:** Two or three deployed apps with a database, authentication, payments or a public API, and a good README.
- **Common mistakes:** Learning too many frameworks instead of finishing one; ignoring SQL; underestimating deployment and monitoring; taking unpaid "equity-only" work.
- **Alternative routes:** Freelance projects, agency apprenticeships, open source, and non-technical roles at a startup that convert into engineering.

Entry difficulty: 3/5 (competitive, but demonstrable skills count more than pedigree; startups value breadth, though they now hire fewer juniors: SignalFire reports early-stage startup new-grad hiring about 76% below 2019).

**Honest downsides and who it is NOT a good fit for.** Startup equity often pays nothing; breadth can mean never being deep enough for top-paying specialist roles; hours and context-switching are worse in small firms; agencies can be a treadmill of fixed-price projects. Not a good fit if you need stability or deep specialisation, or if you cannot tolerate being the only engineer when production breaks.

#### P1-3.4 Mobile engineer

**What you actually do.** You build and maintain native or cross-platform apps. Example: you add a "pay with a saved card" flow to a banking app in Swift and SwiftUI, handle edge cases like losing connectivity mid-payment, write unit and UI tests, and prepare the release for App Store review. Tools: Xcode, Swift (iOS); Android Studio, Kotlin (Android); Flutter or React Native for cross-platform; analytics, crash-reporting and feature-flag tools. Deliverables are app releases, performance improvements, and accessible interfaces.

**A typical day and week.** Standup, feature work, pull requests, a bug triage of crash reports from the latest release, and coordination with backend colleagues on API changes. Release weeks have a code freeze, regression testing and store submission. On-call is lighter than backend but a bad release cannot be rolled back instantly: users must update.

**Hours, stress and lifestyle.** Typical 40-48 hours a week; peaks of 50-60 before releases (practitioner consensus). Stress: 3/5. Remote and hybrid are common; Android and iOS specialisations are usually separate teams at larger firms.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 4/5. Mobile work combines user experience sense with careful engineering of memory, threads and battery.

**Compensation (approximate).**

- **US:** Levels.fyi US medians (total compensation, accessed 9 October 2026): mobile software engineer US$224,600 (25th-75th US$167,000-281,000), iOS engineer US$218,000, Android engineer US$215,000. These exceed generic backend and front-end medians in Levels.fyi, partly because many mobile engineers sit at well-paying consumer companies in the sample. Entry level overlaps general software entry pay.
- **UK:** ITJobsWatch iOS developer permanent adverts, six months to 9 October 2026: UK median £85,000 (up 30.77% on the year, from a sample of 46 salaries, so volatile), London £90,000; UK outside London £60,000.
- **Italy:** Mobile developer 2026 estimates of €31,000 junior, €44,000 mid-level and €60,000 senior gross annual salary (Italy Handbook, third-party). No other Italy-specific figure found.
- **Elsewhere:** No mobile-specific data for Europe outside the UK or for Asia and the Middle East found; use all-engineer medians from section 3.1.

**Career path.** Junior mobile engineer (0-2), mobile engineer (2-5), senior (5-8), staff/principal mobile engineer or mobile architect (8+); or mobile team lead and engineering manager. Because there are fewer mobile roles per company, promotion often needs a move.

**Exit opportunities.** After 2-3 years: full-stack, cross-platform specialist, or backend. After 7-10 years: staff/principal engineer, engineering manager, head of mobile, or technical founder of an app business. Gaming and AR/VR companies hire mobile and graphics skills too.

**Tier list of employers.**

- **Tier 1 (top consumer-app and platform firms):** Apple, Google, Meta, Uber, Airbnb, Spotify; strong mobile craft.
- **Tier 2 (neobanks and scale-ups):** Revolut, Monzo, N26, Wise, Satispay, Bolt, Wolt (Doordash), Booking.com.
- **Tier 3 (banks, retailers and large corporates with apps):** Retail and investment banks, airlines, retailers.
- **Tier 4 (agencies and IT services):** App development agencies, Accenture, Capgemini, Reply and similar firms.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** CS or similar; self-taught is plausible because an app in the store is visible proof.
- **Internships and graduate programs:** Big firms' regular intern and new-grad pipelines; mobile-specific entry-level roles are scarcer than general software engineering (practitioner consensus, unverified); agencies and consultancies hire more juniors.
- **Interviews:** Language fundamentals (Swift/Kotlin), a platform deep dive (memory, lifecycle, concurrency), a take-home or live coding of a small app, and for mid-level an app-architecture/system-design round.
- **Certifications:** None of value. A published app is the credential.
- **Portfolio:** At least one app published on the App Store or Google Play, with clean code on GitHub, tests, accessibility and a changelog.
- **Common mistakes:** Learning only cross-platform tooling without native fundamentals; no real users; ignoring app-store policy.
- **Alternative routes:** Freelancing or agency work, joining a startup's tiny mobile team, or moving from web and picking up a platform.

Entry difficulty: 4/5 (fewer junior openings per company than backend, higher expectations on shipped products).

**Honest downsides and who it is NOT a good fit for.** Platform dependency (Apple and Google change rules and APIs); slow release cycles; cross-platform tools shrink native-only teams; fewer jobs overall than backend or web. Not a good fit for those who dislike repeated platform changes or want a very wide choice of employers.

#### P1-3.5 Game developer (programmer roles at studios)

**What you actually do.** Game programmers fall into gameplay, engine, graphics/rendering, tools, networking/online, UI, and AI programming. Example: you implement a character's ability system in C++ in Unreal Engine, tune it with designers, profile the frame rate on a console, fix a memory crash before a milestone build, and write a tool that lets level designers place objects faster. Tools: C++, C#, Unreal Engine, Unity, Visual Studio, profilers, console development kits, version control (Perforce, Git), and graphics APIs (DirectX, Vulkan, Metal). Deliverables are game features, tools, performance optimisation and builds that pass platform certification.

**A typical day and week.** Daily stand-up with designers and artists; coding and testing in the engine; a playtest or build review; bug triage. Weekly milestone reviews. Before a milestone or release you can have crunch: long days and weekend work for weeks.

**Hours, stress and lifestyle.** Typical 40-50 hours a week; peaks of 60-80 in crunch (practitioner consensus; the 2026 GDC survey supports the instability but not an hours figure). Stress: 4/5 during milestones and releases, 2-3/5 in healthy studios or live-service maintenance. Remote work is less common than in business software, because of console hardware and confidentiality. Travel is rare, except for trade shows. On-call is limited to live-service games.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 4/5 (engine and graphics programming reaches 5/5 with linear algebra, physics and low-level optimisation). The unusual feature is collaboration with artists and designers whose priorities differ from engineers'.

**Compensation (approximate).**

- **US:** No reliable game-programmer-specific figure for the US was found in the sources available. Epic Games (a top-end employer) shows a US software engineer median of US$240,000 total compensation (Levels.fyi, accessed 9 October 2026), which is not representative of typical studios. Typical studio pay is below general software engineering pay (practitioner consensus, unverified).
- **UK:** No reliable data found.
- **Italy:** No reliable data found. Italian studios are small, and graduates who want AAA careers usually relocate.
- **Canada as a proxy for large publishers (Levels.fyi, accessed 9 October 2026, CAD):** Electronic Arts associate software engineer (entry) average total compensation CA$105,000, rising to about CA$173,000 at SE2 and CA$197,000 at SE3; Ubisoft L1 median CA$70,707, overall median CA$104,364, senior (L3) CA$109,591. This shows a large spread between publishers.
- **Asia and the Middle East:** No reliable data found.

**Career path.** Junior/associate programmer (0-2), programmer (2-5), senior (5-8), lead or principal programmer, technical director (10+); or studio engineering manager. Moving between studios is the normal way to progress, and layoffs often force it.

**Exit opportunities.** After 2-3 years: backend or real-time systems, mobile, simulation and defence, automotive HMI, film/VFX tooling, or fintech (strong C++ is valued at trading firms). After 7-10 years: technical director, engine specialist, graphics engineer at a hardware or big tech firm, founding an indie studio.

**Tier list of employers.**

- **Tier 1 (engine, platform and premier studios):** Epic Games, Unity, Rockstar, Naughty Dog, Valve, CD Projekt Red, Riot. Strong pay by industry standards and very hard to enter.
- **Tier 2 (large publishers):** Electronic Arts, Ubisoft, Activision Blizzard, Take-Two, Embracer group studios, Nintendo, Sony. Many roles, crunch and layoff cycles.
- **Tier 3 (mid-size studios and mobile game companies):** Supercell, King, Rovio, Playtika, Voodoo, and many independent developers.
- **Tier 4 (adjacent industries and small studios):** Simulation, serious games, small indies; Italian studios sit largely here.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** CS, software engineering or game-programming degrees; a strong portfolio often matters more than the degree. C++ proficiency is the main filter.
- **Internships and graduate programs:** Large publishers offer paid internships and graduate programs recruited in autumn-winter; UK and Canadian studios hire graduates directly; GDC (March) and Gamescom (August) are networking events.
- **Interviews:** C++ and algorithm questions, a programming test or take-home on game-specific problems (vectors, collision, state machines), a portfolio review and discussions with designers.
- **Certifications:** None valued.
- **Portfolio:** Two or three playable games or tech demos (game-jam entries, a small engine, a graphics demo), clean code, and a short video.
- **Common mistakes:** A portfolio of tutorial clones; not knowing C++ deeply; underestimating pay and instability; applying only to dream studios.
- **Alternative routes:** QA tester at a studio then moving to programming; modding; indie development; entering via a related industry such as simulation or fintech.

Entry difficulty: 4/5 (many applicants chasing few jobs; 74% of surveyed students in the 2026 GDC survey worried about prospects).

**Honest downsides and who it is NOT a good fit for.** Lower pay than other software, crunch, repeated layoffs (28% of GDC respondents laid off in two years; 33% in the US), project cancellations, and growing concern about generative AI (52% say it is hurting the industry). Not a good fit for people who primarily want money, job security or a regular schedule, or who dislike working on someone else's creative vision.

#### P1-3.6 QA / test automation engineer / SDET

**What you actually do.** You make sure software works before and after release. Example: you write automated end-to-end tests in Playwright or Selenium for a banking web app, build a Python or Java test framework, run API tests with Postman or REST Assured, report and triage bugs in Jira, and add tests to the CI pipeline so every code change is checked. A manual QA tester writes test cases and explores the product by hand; an SDET is closer to a developer and builds testing tools and infrastructure. Deliverables are test plans, automated suites, bug reports and quality metrics.

**A typical day and week.** Test planning with developers; running and investigating failing tests; writing new automated tests; checking a release candidate. Release weeks are intense; otherwise the pace is steady. In regulated sectors there is documentation and sign-off work.

**Hours, stress and lifestyle.** Typical 38-45 hours a week; peaks of 50-55 at release time (practitioner consensus). Stress: 2/5, with release crunches. Often hybrid or remote; on-call is rare except for release support. At some firms QA is the first function offshored or cut, which creates job-security stress.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 3/5 for general QA, 4/5 for an SDET. You must tell developers politely that their code is broken, repeatedly, and write precise bug reports.

**Compensation (approximate).**

- **US:** BLS median pay for software QA analysts and testers US$104,300 in May 2025 (base salary; 10th percentile US$61,440, 90th percentile US$167,010), versus US$135,980 for developers. By industry, QA median pay was US$129,930 in manufacturing and US$104,260 in finance and insurance. Big-tech SDET roles pay like software engineers; no reliable aggregate SDET figure was found.
- **UK:** ITJobsWatch test automation engineer permanent adverts, six months to 9 October 2026: UK median £60,000 (up from £57,500; 56 salaries; 10th-90th percentile £32,000-75,000), but London median only £42,000 (18 ads; unusually low and noisy). Treat London as unreliable.
- **Italy:** No reliable QA-specific data found. Italian junior IT roles broadly fall in the €25,000-32,000 gross annual salary range (Indeed Italy and consultancy advert summaries; secondary).
- **Elsewhere:** No reliable QA-specific data found for continental Europe, Asia or the Middle East. India IT services entry pay is the offshoring benchmark: Accenture associate software engineer median ₹594,731 and Capgemini median ₹543,054 per year (Levels.fyi, accessed 9 October 2026).

**Career path.** QA tester or junior test engineer (0-2), QA/automation engineer (2-5), senior or SDET (5-8), QA lead, test architect, or QA manager (8+). Many people move sideways into software engineering, DevOps or product roles.

**Exit opportunities.** After 2-3 years: developer, DevOps (part 2), release engineer, or business analyst. After 7-10 years: test architect, engineering productivity lead, quality manager, product manager, or consultant. Cybersecurity testing is a related branch.

**Tier list of employers.**

- **Tier 1 (big tech and top tech SDET teams):** Google, Microsoft, Amazon, Apple, Meta, trading firms; strong engineering bar, SDET paid like developers.
- **Tier 2 (large product companies and fintech):** Spotify, Booking.com, Revolut, Adyen, Atlassian.
- **Tier 3 (banks, insurers, medical and automotive software):** Large regulated employers where QA is formal and plentiful.
- **Tier 4 (IT services, testing outsourcers and agencies):** Accenture, Capgemini, Cognizant, TCS, Infosys, Reply; the largest volume of entry jobs and the most manual work.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** CS or any quantitative degree; this is the most open software role to non-CS graduates and career changers, particularly through manual QA.
- **Internships and graduate programs:** IT services firms and banks run large graduate intakes with QA tracks. Big-tech SDET roles recruit alongside software engineers.
- **Interviews:** Testing fundamentals (test design, boundary cases), simple coding and scripting, an automation exercise, and for SDET data-structures questions similar to software engineering.
- **Certifications:** ISTQB Foundation (International Software Testing Qualifications Board) is recognised at IT services firms, banks and in Europe and India; useful for manual QA entry, rarely decisive elsewhere (unverified; practitioner consensus).
- **Skills and portfolio:** One programming language (Python, Java or TypeScript), Playwright/Selenium or Cypress, API testing, SQL, CI basics, and a public repository with a test framework for a sample app.
- **Common mistakes:** Staying in purely manual testing; no coding evidence; not learning the product domain.
- **Alternative routes:** Manual QA to automation within one company; contract testing; junior roles in IT services as a stepping stone; moving from game QA to programming.

Entry difficulty: 2/5 (manual QA and IT services roles are widely open; 4/5 for SDET at top employers).

**Honest downsides and who it is NOT a good fit for.** Lower pay and status than developers; BLS projects slower growth (6%); manual testing is the most exposed to automation and offshoring; QA is sometimes seen as a cost to cut. Not a good fit for people who want to build products from scratch or who dislike repetitive verification, but a good fit for detail-oriented people who want a lower-pressure way into the industry.

#### P1-3.7 Solutions engineer / sales engineer / developer advocate

**What you actually do.** Solutions/sales engineer: you join sales calls for a software vendor, run technical demos, answer security and integration questions, build proofs of concept (short trial implementations) in the customer's environment, fill in security questionnaires, and hand over to implementation teams. Example: a data-platform vendor's solutions engineer builds a demo with the prospect's own sample data in two days, then presents it to the customer's architects and CIO. Developer advocate: you write tutorials and code samples, give conference talks, run workshops, produce videos, gather developer feedback for the product team, and manage community channels. Tools: demo environments, CRM systems (Salesforce), slide decks, API docs, a programming language, video tools.

**A typical day and week.** Solutions engineer: three to five customer calls, internal prep with the account executive, a technical deep dive or demo, CRM notes and follow-up. Quarter-end is intense because deals close then. Developer advocate: content creation, meeting developers (online and at events), feedback to product teams; heavy travel in some roles.

**Hours, stress and lifestyle.** Typical 40-50 hours a week; peaks of 55-65 at quarter-end or during events and launches (practitioner consensus). Stress: 3/5 (quota-linked pay, customer escalations; developer advocates also face metric-justification pressure). Travel: 10-30% for customer-facing roles (unverified; varies); remote or hybrid is common in software vendors.

**Human vs. quantitative profile.** People/communication: 4/5 (solutions engineer) to 5/5 (developer advocate). Quantitative/technical: 3/5. Technical credibility is needed, but the job is persuasion and translation between engineers and business buyers.

**Compensation (approximate).**

- **US:** Levels.fyi sales engineer median total compensation US$204,167 (25th-75th US$155,000-260,000; 291 submissions; accessed 9 October 2026), with Google at US$335,000 median and the top locations Seattle US$250,000, Bay Area US$240,000 and New York US$235,000. Solutions architect median US$216,000 (n=1,225). These include variable pay and equity and skew toward large vendors, so entry-level pay is lower: no reliable entry-level figure found. For developer advocates, no reliable data found.
- **UK:** The sources disagree widely. Levels.fyi London sales engineer median total compensation £126,102 (25th-75th £92,400-158,000), but ITJobsWatch adverts gave a UK median of £50,000 (London £60,000; six months to 9 October 2026). The first reflects large vendors and self-reported total pay; the second reflects advertised base salary for many smaller roles.
- **Italy:** Levels.fyi Milan sales engineer median €101,483 (n=9, so tiny sample; likely senior roles at large vendors). No reliable entry-level Italian figure found. Italian pre-sales roles often sit inside IT services firms and resellers at much lower pay (unverified).
- **Elsewhere:** No reliable data found for Singapore, Tokyo, Hong Kong or Dubai specifically.

**Career path.** Associate/junior solutions engineer or technical support/sales development representative (0-2 years), solutions engineer (2-5), senior (5-8), principal or staff solutions engineer, solutions architect or manager of solutions engineering; some move into sales leadership (a higher-variance route in which pay depends on quota). Developer advocacy: developer advocate (2-4 years of engineering first), senior, principal, head of developer relations.

**Exit opportunities.** After 2-3 years: product management, customer success leadership, account executive (sales), or return to engineering. After 7-10 years: head of solutions, sales leadership, product/field CTO, forward-deployed engineering at AI companies, or founding a startup. Cross-reference: product management is a separate branch.

**Tier list of employers.**

- **Tier 1 (large platform vendors and high-growth data and AI companies):** Google Cloud, Microsoft, Snowflake, Databricks, Datadog, plus AI labs.
- **Tier 2 (established B2B software):** Salesforce, SAP, Atlassian, Adobe, ServiceNow, HubSpot, security vendors.
- **Tier 3 (mid-size SaaS and startups):** Variable pay and equity; fast learning; unstable.
- **Tier 4 (resellers, IT services and integrators):** Lower pay; includes pre-sales roles at Italian system integrators.

Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.**

- **Degrees and backgrounds:** A CS or technical degree is common but not strictly required; business graduates with solid technical learning, plus 1-3 years of technical or customer experience, get in.
- **Entry:** Rarely a direct graduate role. Most people come from engineering, technical support, consulting or implementation; some firms run associate solutions-engineer programs.
- **Interviews:** A mock demo, a presentation to a non-technical audience, technical scenario questions, sometimes a take-home architecture exercise.
- **Certifications:** Vendor certifications (AWS, Azure, Google Cloud, Salesforce) are valued here more than in engineering, though still secondary to demonstrated skills.
- **Skills and portfolio:** Public speaking, clear writing, enough coding to build demos, a technical blog or video channel, and understanding sales cycles. For DevRel: public talks, tutorials, an active audience.
- **Common mistakes:** Overly technical explanations to business buyers; no experience showing customer contact; assuming DevRel is easy or glamorous.
- **Alternative routes:** Technical support, consulting, implementation roles; moving from engineering after 2-3 years.

Entry difficulty: 4/5 as a graduate (few junior openings, experience usually expected); 3/5 after two years of technical or customer-facing experience.

**Honest downsides and who it is NOT a good fit for.** Pay depends partly on company sales performance; developer relations is among the first teams cut in budget squeezes (practitioner consensus, unverified); you may feel pulled between sales targets and technical integrity; travel. Not a good fit for those who dislike public speaking or sales environments, or who want deep, uninterrupted coding time.

### Part 2: Infrastructure, systems and other CS careers

#### P2-3.1 DevOps / site reliability / platform engineer

**What you actually do.** You write infrastructure-as-code (Terraform, Pulumi, Ansible) to create servers, networks and Kubernetes clusters; build CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins, Argo CD) that test and deploy code; set up monitoring and alerting (Prometheus, Grafana, Datadog); define SLOs (the reliability target, e.g. 99.9% of requests succeed); automate toil (repetitive manual work) with Python or Go; and take part in incident response, then write the post-mortem (a blameless write-up of what failed and how to stop it recurring). Platform engineers also build the internal developer portal so product teams can deploy without filing tickets.

**A typical day and week.** Morning: review overnight alerts and failed pipeline runs; stand-up. Midday: a Terraform pull request for a new database cluster, a review of someone else's Helm chart, a meeting with a product team about their deployment problems. Afternoon: tune a noisy alert, investigate a latency regression, or do capacity planning. One week in four or six you carry the pager (on-call): a page at 02:00 means opening laptop, finding the failing dependency, rolling back, then leading the post-mortem. In the 2024 Catchpoint SRE survey (301 respondents), 40% had handled 1-5 incidents in the previous 30 days and 23% had handled 6-10; the median share of time spent on operational toil rose from 25% to 30%, the first rise in five years (Catchpoint SRE Report 2025 page).

**Hours, stress and lifestyle.** Hours: typically 40-48 per week; 55-70 in incident weeks or migrations (author estimate). Stress: 3/5 for a typical product-company DevOps role; 4/5 for SREs at large consumer or payments services where an outage is public and expensive. On-call is the main lifestyle cost; mature teams pay on-call allowances or time off in lieu, weaker ones expect it free. Flexibility: among all Stack Overflow 2025 respondents, 45% of US developers work fully remote versus 31.9% in the UK, 22.5% in Germany and 18.1% in France (Stack Overflow 2025), so remote is far more common in the US than in continental Europe. Travel: minimal. Remote/hybrid: usually hybrid; remote is realistic because the work is on cloud consoles, though regulated employers (banks) often require office days.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 4/5. You are the person other engineers ask for help and the voice calming an incident channel, so clear writing and calm under pressure matter; the technical depth (Linux, networking, distributed systems, a scripting language) is what gets you hired.

**Compensation (approximate).** No reliable entry-specific infrastructure figure was found for any region, so all-levels distributions are used as proxies.
- US (total compensation, base + bonus + equity; Levels.fyi, 9 Oct 2026): DevOps engineer median $153,000 (25th percentile $120k, 75th $189k, 90th $226k); site reliability engineer median $200,200 (25th $158k, 75th $275k, 90th $337k). Stack Overflow 2025 (self-reported yearly compensation): US DevOps median $165,000; worldwide $87,011.
- UK (advertised base salary, six months to 9 Oct 2026, ITJobsWatch): DevOps engineer median GBP 70,000 (10th percentile GBP 46,750, 25th GBP 60,000, 75th GBP 90,000, 90th GBP 100,000); London median GBP 85,000. Robert Walters' 2026 guide page shows London GBP 65k-140k. Graduate technology schemes at consultancies are far lower (section 3.6).
- Germany (gross base, direct entry; get-in-it, written for 2026, sources not dated): DevOps EUR 47,900-55,100 with a bachelor's, 52,700-60,700 with a master's; large companies EUR 56,800-65,400 for master's graduates.
- Italy (gross annual salary, RAL; no reliable official data found): commercial 2026 estimates give about EUR 32,000-35,000 junior, EUR 48,000-53,000 mid and EUR 66,000-70,000 senior (Italy Handbook and Jobmentis; methods not disclosed). Levels.fyi gives a median EUR 39,258 for all software engineers in Italy and EUR 50,465 in Milan (9 Oct 2026).
- Switzerland, Netherlands: no DevOps-specific data; all software engineers median CHF 133,643 (Zurich CHF 193,838) and EUR 94,851 (Amsterdam EUR 113,038) (Levels.fyi, 9 Oct 2026).
- Asia/Middle East: no DevOps-specific data; software engineer medians are SGD 114,992 (Singapore), AED 337,547 (UAE), JPY 8.5m (Japan), HKD 605,175 (Hong Kong) (Levels.fyi, 9 Oct 2026).

**Career path.** Years 0-2: junior/associate DevOps or SRE, often after 1-2 years as a developer or sysadmin. Years 2-5: DevOps/SRE/platform engineer. Years 5-8: senior, then staff engineer (technical leadership) or SRE lead. Years 8+: principal engineer, platform architect, or engineering manager/head of platform. The honest pattern: many people reach DevOps from a developer or sysadmin job rather than directly from university (practitioner consensus).

**Exit opportunities.** After 2-3 years: backend/product engineering, cloud engineering, security engineering (DevSecOps), data/ML platform ("MLOps") roles. After 7-10 years: staff/principal engineer, architect, engineering management, CTO at a small company, technical consulting or pre-sales at a cloud/monitoring vendor, independent contracting (UK contractor day rates of GBP 450-650 were quoted for 2025 by one recruiter, outside IR35; weak source).

**Tier list of employers.** Tier 1: Google (the origin of SRE), Amazon/AWS, Microsoft, Meta, Apple, Netflix, Cloudflare, Datadog, Stripe, Databricks, and quant/HFT firms for low-latency infrastructure. Tier 2: well-funded scale-ups and large tech employers in Europe (Spotify, Booking.com, Adyen, Zalando, Revolut), bank and insurer platform teams (JPMorgan, Goldman Sachs, UBS, Deutsche Bank, Intesa Sanpaolo, Generali), telecoms. Tier 3: managed-service providers, IT services outsourcers (Accenture, Kyndryl, NTT Data), mid-size companies and public bodies where the stack is older and the role leans toward operations. Tier 1 means higher pay, harder interviews and stronger engineering culture; Tier 3 means easier entry and more routine work. Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: CS, software/computer engineering, IT; self-taught and bootcamp routes work if you can demonstrate real systems skills. Programmes: big-tech SRE and "systems engineer" new-grad roles exist but are few; UK/Italy/Germany banks and consultancies run graduate or stage programmes (Accenture's UK technology-analyst intake for 2027-28 is already open on Gradcracker). Hiring calendar (practitioner convention, not sourced): US big tech recruits new grads from late summer and autumn for the following year; UK grad schemes open September-October; Italian and German employers hire year-round, often through a stage/internship or Werkstudent role. Interview formats (practitioner reports): Linux and networking troubleshooting questions, a live debugging or "this service is slow, what do you check" scenario, scripting exercise, system-design for reliability, sometimes a standard coding round at big tech. Certifications: the Certified Kubernetes Administrator (CKA) is a 2-hour hands-on exam costing $445 including one retake (CNCF); AWS runs foundational, associate and professional tiers, with professional recommended for people with 2+ years of AWS experience (AWS). Claimed salary premiums for certifications range from about 15% to 40% in content-marketing articles, many written by training vendors, and could not be traced to a primary survey; treat them as unverified. Practitioner consensus: certifications help you pass HR filters and structure your learning, but a hands-on portfolio matters more. Build: a home-lab or cloud account where you deploy an app with Terraform, Kubernetes, CI/CD, monitoring and a documented failure drill. Common mistakes: tool-collecting without understanding Linux and networking; applying only to "SRE" titles at top firms; no public evidence of work. Alternative routes: IT support to sysadmin to cloud/DevOps (the most common non-graduate path), developer to DevOps, apprenticeships (UK degree apprenticeships). Entry difficulty: 3/5 (4/5 for dedicated SRE roles at top-tier firms).

**Honest downsides and who it is NOT a good fit for.** On-call disrupts sleep and weekends; toil can dominate if the organisation lacks automation; "DevOps" can mean a help-desk-plus-scripts role at a weaker employer; there are few true junior openings, and AI coding tools are shifting the work toward reviewing and operating generated systems (DORA 2025 found organisational delivery stayed flat even as individual output rose, per a secondary summary). Not a good fit for people who dislike interruptions, dislike being the person blamed when systems break, or want to build user-facing products.

#### P2-3.2 Cloud engineer / cloud solutions architect

**What you actually do.** A cloud engineer builds and maintains the cloud environment: networks, identity and access, compute, storage, databases, security controls, cost management ("FinOps"), migrations from on-premises data centres. A solutions architect designs the target architecture for a customer or internal teams, writes the design documents, runs workshops, and defends trade-offs (cost, latency, resilience, compliance such as GDPR and data residency). At AWS/Azure/Google Cloud themselves, solutions architects are technical pre-sales: you help customers decide and win their business.

**A typical day and week.** Engineer: tickets and pull requests for landing-zone changes, a security finding to remediate, a cost spike to explain, a call with a team migrating a workload. Architect: customer workshops, whiteboarding, writing a reference architecture, reviewing others' designs, a proof-of-concept build. In consultancies you split time across projects and timesheets; at hyperscalers you cover a portfolio of customers and travel to a few.

**Hours, stress and lifestyle.** Hours: 40-45 typical; 50-55 around migrations and go-lives (author estimate). Stress: 3/5. Less on-call than SRE, but cutover weekends are common in migrations. Travel: low for in-house engineers; moderate (weekly client visits) for consultancy architects, high for pre-sales in some regions. Remote/hybrid: hybrid is typical; pre-sales and consulting tie you to client sites more.

**Human vs. quantitative profile.** People/communication: 4/5. Quantitative/technical: 4/5. The architect role is half technical depth and half persuading stakeholders; engineers can be more heads-down.

**Compensation (approximate).** Entry-specific data were not found; all-levels figures follow.
- US (Stack Overflow 2025, self-reported yearly compensation): cloud infrastructure engineer US median $189,000, worldwide $103,112. Levels.fyi had no readable cloud-specific page; its DevOps and SRE figures in 3.1 are the nearest proxy.
- UK (ITJobsWatch, advertised, six months to 9 Oct 2026): cloud engineer median GBP 70,000 (10th GBP 50,000, 25th GBP 56,250, 75th GBP 87,500, 90th GBP 100,000); London median GBP 77,500. Morgan McKinley lists London cloud engineers at GBP 65-90k; Robert Half's London page shows a median GBP 90,000 (both recruiter pages seen via search summaries, indicative).
- Germany: see 3.1; cloud roles are paid in the same band as DevOps at entry (get-in-it does not publish a separate cloud figure I could read).
- Italy (RAL; commercial estimates, 2026): cloud architect about EUR 40,000 entry-level equivalent, EUR 55,000 mid, EUR 85,000 senior (Italy Handbook, method undisclosed); Jobmentis gives a cloud engineer median EUR 54,000 with a EUR 40,000 junior level and EUR 96,000 at the high end. Low confidence.
- Asia/Middle East: no cloud-specific data found (see 3.1 for software-engineer medians).

**Career path.** Years 0-2: junior cloud engineer / cloud support associate / graduate consultant. 2-5: cloud engineer; get one or two associate-level certifications and one specialism (networking, security, data). 5-8: senior cloud engineer or solutions architect. 8+: principal architect, cloud practice lead, enterprise architect, or head of cloud/platform.

**Exit opportunities.** After 2-3 years: DevOps/SRE, security engineering, data engineering, technical consulting. After 7-10 years: enterprise or chief architect, CTO/head of infrastructure, partner-side roles in cloud consultancies, pre-sales leadership, vendor roles (provider or software vendors).

**Tier list of employers.** Tier 1: the hyperscalers (AWS, Microsoft Azure, Google Cloud) and the largest tech companies that run their own clouds; roles there are among the best paid and most selective. Tier 2: global consultancies and integrators with cloud practices (Accenture, Deloitte, Capgemini, IBM Consulting, Kyndryl), cloud-native consultancies and specialist partners, and the in-house cloud platform teams of large banks and industrials. Tier 3: managed-service providers, regional integrators, small IT firms, and public-sector IT. In Italy, expect Accenture, Reply/Storm Reply, Engineering, Almaviva and regional providers rather than hyperscaler engineering roles, which are concentrated in Milan. Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: CS, computer engineering, IT; business or science graduates can enter through technical consulting plus certification. Programmes: provider graduate schemes are few; consultancy graduate intakes are the broadest door. Hiring calendar: UK grad schemes open September-October for the following autumn; Italy and Germany year-round. Interview formats: scenario design ("migrate this application to AWS"), networking and IAM questions, cost trade-offs, behavioural rounds; provider pre-sales interviews add a customer presentation (practitioner convention). Certifications: AWS Solutions Architect Associate/Professional, Azure Administrator/Architect and Google Cloud equivalents are the industry's established ladder; AWS lists Cloud Practitioner as needing no prior experience and professional-level certificates as recommended with 2+ years of experience (AWS). In consultancies, partner-status requirements make certifications a real hiring and promotion lever; at product companies they matter less than hands-on work. The premium evidence is weak (see 3.1). Skills and portfolio: infrastructure-as-code, networking fundamentals, IAM, one scripting language, and a deployed and documented project. Common mistakes: stacking certificates without projects; ignoring networking and security; confusing "I passed a practice exam" with experience. Alternative routes: support/sysadmin to cloud (common), bootcamps plus certs (works mainly with a technical or support background), vendor apprenticeships. Entry difficulty: 3/5.

**Honest downsides and who it is NOT a good fit for.** Cloud services change constantly, so you re-learn permanently; consulting versions of the job can mean repetitive migrations and timesheets; pre-sales is quota-adjacent pressure; AI-assisted infrastructure tooling is lowering the value of routine provisioning. Not suited to people who want deep programming or hardware work, or who dislike customer-facing explanation.

#### P2-3.3 Embedded / firmware / systems engineer

**What you actually do.** You write C/C++ (increasingly Rust) that runs directly on microcontrollers and system-on-chip hardware: drivers for sensors, communication stacks (CAN, SPI, I2C, Ethernet), real-time operating system (RTOS) tasks, bootloaders, over-the-air update mechanisms. In automotive you also work with AUTOSAR (a standard software architecture for car ECUs, i.e. electronic control units) and functional-safety standards such as ISO 26262; in aerospace, DO-178C. You debug with oscilloscopes, logic analysers and debuggers, run hardware-in-the-loop tests, and write requirements and test evidence. "Systems engineer" in this context means defining how hardware, software and mechanics fit together and verifying it.

**A typical day and week.** Reading a hardware datasheet, writing a driver, flashing a board, chasing a timing bug with an oscilloscope, code reviews, a requirements meeting with hardware and test teams, documentation for a safety audit. Weeks are shaped by hardware availability and release milestones rather than daily deploys. Lab time is part of the job, so full remote work is rare.

**Hours, stress and lifestyle.** Hours: 38-45 typical (Italian and German collective contracts and industrial culture are closer to office hours); 50-60 before a product launch or a customer sample deadline (author estimate). Stress: 3/5; safety-critical and deadline-driven chip tape-out work can reach 4. On-call is rare, except for field-failure support. Travel: occasional to customer sites, test tracks, suppliers (more at automotive suppliers). Remote/hybrid: hybrid at best, because you need hardware access.

**Human vs. quantitative profile.** People/communication: 2/5. Quantitative/technical: 4/5. Mostly independent technical problem-solving, but you coordinate with hardware, test and safety teams.

**Compensation (approximate).**
- US (Stack Overflow 2025, self-reported yearly compensation): embedded applications/devices developer US median $132,500, worldwide $81,210. No reliable entry-level US figure found. Semiconductor and hardware-adjacent employers (Nvidia, Apple, Qualcomm) pay at big-tech levels; the Levels.fyi country pages list Nvidia and Apple as top payers in Taiwan and Germany respectively.
- UK (advertised base, six months to 9 Oct 2026, ITJobsWatch): embedded software engineer median GBP 65,000 (10th GBP 46,500, 25th GBP 55,000, 75th GBP 71,250, 90th GBP 80,000), up 18.2% on the year; London median GBP 80,000 from a small sample. Only 699 permanent vacancies cite the role.
- Germany (gross base, direct entry; get-in-it, written for 2026): bachelor's EUR 51,100, master's EUR 56,300, PhD EUR 61,600-70,900; large corporations EUR 56,400-64,900; Baden-Wuerttemberg about EUR 61,800 and Bavaria EUR 62,300. PayScale puts the early-career average in Stuttgart at about EUR 59,400 (range EUR 51k-81k; self-reported). A Brunel Stuttgart advert was estimated at EUR 41-58k by the job board.
- Italy (RAL, from 2026 adverts on Indeed Italy, ranges not offers): Infineon Padova staff embedded software engineer EUR 43,440-59,730; Marelli (Venaria Reale) senior embedded firmware engineer EUR 40,000-60,000; STMicroelectronics Catania engineering roles EUR 38,000-48,000. Entry-level graduate pay is below these senior-labelled ranges; no reliable entry figure found. JobPricing's University Report (via press) puts the average RAL of engineering/ICT graduates in their first ten years at EUR 36,562.
- Taiwan: TSMC said in March 2026 it would pay an average NT$2.2m a year to new engineers with a master's degree (CNA); Levels.fyi gives a Taiwan software-engineer median NT$1,494,084. South Korea, Japan: no embedded-specific data found.

**Career path.** Years 0-2: junior embedded/firmware engineer (often a stage or Werkstudent first). 2-5: embedded software engineer; build a specialism (safety, security, RF, bootloaders, Linux BSP). 5-10: senior/lead engineer, technical architect, systems engineer. 10+: principal/system architect, engineering manager, technical fellow.

**Exit opportunities.** After 2-3 years: robotics, IoT, medical devices, aerospace/defence, semiconductor application engineering, or into cloud/IoT backend roles. After 7-10 years: system architect, product owner for hardware products, technical sales/field application engineering, management, or start-up CTO. Hardware-adjacent skills are scarcer than web skills, which helps retention but narrows the number of employers.

**Tier list of employers.** Tier 1 (highest pay and prestige): Apple, Nvidia, Qualcomm, AMD, Arm, Google hardware, TSMC, Samsung, top aerospace/defence prime engineering teams. Tier 2: automotive OEMs and Tier-1 suppliers (Mercedes, BMW, Ferrari, Bosch, Continental/Aumovio, ZF, Marelli), semiconductor/analog firms (STMicroelectronics, Infineon, NXP), defence and aerospace (Leonardo, Thales, Airbus, Rheinmetall, BAE Systems), industrial automation majors. Tier 3: engineering-services/consulting firms that place engineers on client projects (Akkodis, Alten, Capgemini Engineering), small manufacturers and product SMEs. Pay and security differ: automotive is shrinking in Europe (Bosch, ZF and Continental restructurings; Stellantis voluntary exits in Italy, secondary reports), while defence and semiconductors are growing (Leonardo added 2,294 employees in 2025, about 1,600 in Italy, per its 12 Mar 2026 release as read in the project research file; TSMC plans 8,000 hires in 2026). Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: electronic, computer or automation engineering are the standard; CS graduates with C/C++, operating-systems and computer-architecture courses also enter; Italy and Germany generally prefer a master's, and Germany's get-in-it figures assume master's direct entry. Programmes: thesis or stage at the target employer is the main route in Italy and Germany (Werkstudent in Germany), UK has graduate schemes at BAE Systems, Arm, Rolls-Royce-type firms (not verified here). Hiring calendar: year-round in Italy/Germany; UK defence schemes follow the autumn cycle. Interview formats (practitioner convention): C pointers/bit manipulation/volatile/interrupts, reading a schematic or datasheet, RTOS concepts, a debugging scenario, sometimes a live coding on a board. Certifications: rarely decisive; functional-safety courses (TUeV-type ISO 26262 training) help in automotive. Portfolio: a microcontroller project (STM32, ESP32 or Raspberry Pi Pico) with drivers written from the datasheet, an RTOS, a logic-analyser capture, and Git history. Common mistakes: Arduino-library-only projects; no hardware debugging evidence. Alternative routes: electronics technician to engineer degrees, apprenticeships and dual study (Germany), moving from Linux systems work. Entry difficulty: 3/5.

**Honest downsides and who it is NOT a good fit for.** Pay is lower than cloud or big-tech product engineering in most markets (Stack Overflow 2025 shows the embedded median below DevOps and cloud in both the worldwide and US medians); legacy toolchains and slow release cycles; European automotive is cutting jobs, and Italian automotive employers are shrinking headcount; safety and security-vetting delays affect defence work. Not for people who want quick visible user feedback or fully remote work.

#### P2-3.4 Data engineer

**What you actually do.** You design and operate pipelines that pull data from applications, APIs and files, clean and transform it, and load it into warehouses or lakehouses (Snowflake, BigQuery, Databricks, Redshift) for analysts, scientists and AI models. Tools: SQL (core), Python, Spark, Airflow or Dagster, dbt, Kafka for streaming, cloud storage, and data-quality tests. You model data (facts, dimensions), set up access controls and keep costs under control. Deliverables: reliable tables with documented definitions, pipeline code, monitoring.

**A typical day and week.** Check pipeline runs and data-quality alerts; fix a broken job; build a new ingestion from a source system; review a colleague's dbt model; meet analysts who need a new metric; plan a migration. Occasional on-call for critical pipelines (finance, regulatory reporting). Peak load around month-end/quarter-end reporting and platform migrations.

**Hours, stress and lifestyle.** Hours: 40-45 typical; 50-55 during migrations or reporting deadlines (author estimate). Stress: 3/5. Remote/hybrid: among the more remote-friendly roles in tech; hybrid typical. Travel: minimal.

**Human vs. quantitative profile.** People/communication: 3/5. Quantitative/technical: 4/5. Heavy SQL and data-modelling logic, with regular dealing with analysts and business owners about definitions ("what counts as an active customer?").

**Compensation (approximate).**
- US (total compensation; Levels.fyi, 9 Oct 2026): data engineer median $157,000 (25th percentile $116k, 75th $225k, 90th $314k). Stack Overflow 2025: US median $150,000, worldwide $81,210. Entry-level figure not found separately; the 25th percentile is the nearest proxy.
- UK (advertised base, six months to 9 Oct 2026, ITJobsWatch): median GBP 70,000 (unchanged for three consecutive periods), 10th percentile GBP 45,000, 25th GBP 52,500, 75th GBP 85,000, 90th GBP 100,000; London GBP 82,500; outside London GBP 65,000. Robert Walters shows London GBP 60-135k. Individual adverts: Azure data engineer in Brighton GBP 55-63k (Michael Page, via search summary).
- Germany (gross base, direct entry; get-in-it, 2026): bachelor's EUR 48,900-56,300; master's EUR 53,800-62,000; first-year average EUR 57,900; PhD about EUR 63,000-73,000.
- Italy (RAL; commercial estimate, 2026): about EUR 34,000 junior, EUR 46,000 mid, EUR 65,000 senior (Italy Handbook; method undisclosed; low confidence).
- Netherlands/Switzerland: software-engineer medians only (3.1); Databricks is the top-paying company in the Netherlands on Levels.fyi (EUR 171,688).

**Career path.** Years 0-2: junior/associate data engineer or analytics engineer (often coming from an analyst or developer role). 2-5: data engineer; own a domain. 5-8: senior data engineer, data platform engineer, or tech lead. 8+: staff/principal data engineer, data architect, head of data engineering.

**Exit opportunities.** After 2-3 years: backend or platform engineering, ML engineering/MLOps, analytics engineering, data architecture. After 7-10 years: data architect, head of data platform, engineering management, consulting principal, CTO-track at a data-led company.

**Tier list of employers.** Tier 1: big tech and data-platform vendors (Google, Amazon, Meta, Databricks, Snowflake, Netflix, Stripe), top fintech. Tier 2: scale-ups, banks, insurers, telecoms, large retailers and logistics companies with serious data platforms (for example Zalando, Booking.com, Generali, Intesa Sanpaolo). Tier 3: consultancies and IT services (Accenture, Deloitte, Capgemini, Reply, Engineering, NTT Data), mid-size companies with small data teams, public sector. Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: CS, software engineering, statistics, mathematics or engineering; analysts can convert with strong SQL and Python. Programmes: consultancies' data graduate programmes, bank technology schemes, Werkstudent/stage in data teams; UK ITJobsWatch shows 2,072 permanent adverts naming the role in the six months to 9 Oct 2026 versus 645 a year earlier, but adverts are mostly experienced roles and the period comparison may reflect data collection (caution). Hiring calendar: year-round, with bank/consultancy graduate intakes in autumn. Interview formats (practitioner convention): SQL live coding (window functions, joins, deduplication), Python data manipulation, pipeline and data-model design, behavioural. Certifications: AWS Certified Data Engineer - Associate exists (AWS); Databricks and Snowflake credentials help at partner firms; they rarely replace projects. Portfolio: an end-to-end pipeline (API to warehouse to dashboard) with tests, orchestration and cost notes, plus a public GitHub repository. Common mistakes: learning only tools (no modelling), no testing/data quality, ignoring SQL depth. Alternative routes: data/BI analyst to data engineer (the most common non-CS route; see the data analytics branch), software developer to data engineer, bootcamps combined with a prior analytical degree. Entry difficulty: 3/5.

**Honest downsides and who it is NOT a good fit for.** Invisible work: when pipelines run nobody notices, when they break everyone does; a lot of maintenance and data-quality firefighting; tool churn; roles can be absorbed into "AI platform" or analytics-engineering teams. Not suited to people who want to do the analysis or the modelling themselves, or who find plumbing tedious.

#### P2-3.5 Enterprise applications consultant (SAP, Salesforce, ServiceNow, etc.) and IT systems administrator/support

Two sub-paths are combined because they are both common entry routes: consultants configure and implement business systems at client sites; administrators and support staff keep an organisation's own systems running.

**What you actually do.** Consultant (functional): run workshops with finance, supply-chain or sales staff, document requirements, configure SAP modules (FI/CO finance, MM purchasing, SD sales, EWM warehousing), Salesforce (Sales/Service Cloud) or ServiceNow workflows, test, train users and support go-live. Consultant (technical): ABAP/Apex/JavaScript development, integrations, data migration. Sysadmin/support: user accounts, Microsoft 365/Entra ID, endpoints, patching, backups, helpdesk tickets, small network and server tasks, increasingly cloud and scripting.

**A typical day and week.** Consultant: workshops and requirement meetings, configuration in the system, testing cycles, status reports; weeks are driven by project phases, with go-live weekends and cutover nights. Sysadmin/support: ticket queue, onboarding new starters, a security patch cycle, a failed backup, a mid-week outage. Consultants travel to client sites (often Monday-Thursday); sysadmin roles are mostly local.

**Hours, stress and lifestyle.** Consultant hours: 42-50 typical; 55-65 around go-live (author estimate). Stress: 3/5, with deadline spikes. Travel: moderate to high for consultants (UK/Italy/Germany projects commonly involve client sites); low for in-house admins. Sysadmin hours: 38-45 typical, with on-call for critical systems; stress: 2-3/5. BLS notes sysadmins mostly work full time and some work evenings, nights or weekends to maintain systems (BLS).

**Human vs. quantitative profile.** People/communication: 4/5 for consultants (3/5 for help desk). Quantitative/technical: 3/5. This is where business backgrounds fit best: knowing how finance, procurement or logistics work is as valuable as knowing the system.

**Compensation (approximate).**
- US (base salary): SAP functional consultants: junior (0-2 years) $70,000-95,000; mid (3-6) $105,000-145,000; senior (6+) $145,000-185,000 (Kore1 recruiter guide, updated Jul 2026; composite of public data and recruiter observation). Salesforce (SalesforceBen 2026 salary survey, via search summary): administrators $78k junior / $92k intermediate / $109k senior; developers $94.5k / $120k / $140k. ServiceNow developers: US median base about $125,000 (range $105k-155k) per Kore1; ZipRecruiter average $129,281 (Jul 2026). BLS: network and computer systems administrators median $99,130 (May 2025; 10th percentile $62,640, 90th $155,050); computer support specialists $62,890.
- UK: Salesforce administrators GBP 36,700 / 45,500 / 58,000 (junior/intermediate/senior; SalesforceBen 2026). Morgan McKinley gives London Salesforce developers GBP 75-85k on average (recruiter, indicative); PayScale UK average GBP 52,402. SAP UK permanent median about GBP 80,000 (ITJobsWatch, as quoted in a secondary source; all levels). Entry help-desk pay: GBP 17.7k-25k in PayScale estimates (weak source; no official UK figure found).
- Italy: no reliable role-specific data found. Graduate-level consulting entry roles are generally in the EUR 25,000-35,000 RAL range per commercial guides (see 3.6). Sysadmin/helpdesk: no reliable data found.
- Germany, Switzerland, Asia: no reliable role-specific data found.

**Career path.** Consultant: Analyst/associate consultant (0-2 years) to consultant (2-5) to senior consultant / module lead (5-8) to manager / solution architect (8+) or independent contractor. Sysadmin: help desk (0-2) to systems administrator (2-5) to senior sysadmin / cloud or DevOps engineer (5-8) to infrastructure lead / IT manager (8+).

**Exit opportunities.** After 2-3 years: cloud/DevOps (from sysadmin), SAP/Salesforce specialisation or move to the client side (business-systems analyst, product owner), project management. After 7-10 years: solution architect, practice lead, IT manager/head of infrastructure, independent consultant (SAP contract rates are a major attraction in Europe), or vendor roles.

**Tier list of employers.** Tier 1: the software vendors themselves (SAP, Salesforce, ServiceNow, Oracle, Microsoft) and the top global integrators/consultancies (Accenture, Deloitte, PwC, EY, KPMG, IBM Consulting, Capgemini). Tier 2: other large integrators and specialist partners (NTT Data, Cognizant, TCS, Infosys, Sopra Steria, CGI; in Italy Reply, Engineering, Almaviva). Tier 3: small partners, regional resellers, staffing/body-shop intermediaries, and in-house IT departments of non-tech firms. For administrators, the equivalent split is big-tech or regulated-industry IT (better pay and automation) versus managed-service providers and school/office IT. Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: consultant roles take a broad range (IT, engineering, business, finance, logistics); sysadmin and support roles accept CS, IT, or none, with certificates and experience. BLS notes support specialists typically need some college courses (user support) or an associate's degree (network support); sysadmins typically a bachelor's (BLS, May 2025 OOH). Programmes: consultancy graduate schemes; vendor academies (SAP and Salesforce run training programmes and trailhead-style free learning; details not verified here); help-desk apprenticeships. Hiring calendar: consultancies hire in waves around autumn and spring and ramp up in projects; support roles hire year-round. Interview formats (practitioner convention): behavioural plus case-style business-process questions; technical tests for developers; troubleshooting scenarios for support. Certifications: they are the entry currency here; SAP certifications matter more on a CV in the partner ecosystem, Salesforce certifications (Administrator, Platform Developer) are widely used as filters; older data show premiums (Foote Partners' 2017 index: median 8-14% bump for developer/architect certifications) but nothing recent and independent was found; for help desk, CompTIA A+/Network+, Microsoft fundamentals, ITIL foundation and CCNA are common and low-cost steps (their value is practitioner consensus, not measured here). Portfolio: a Salesforce Trailhead playground/developer org, an SAP S/4HANA trial/learning-system walkthrough, a home lab with Active Directory and scripts. Common mistakes: collecting certificates without projects; assuming SAP pays as much for juniors as for senior module leads (the Kore1 author notes juniors are often overpriced if experience is overstated); taking a pure ticket-closing job without a growth plan. Alternative routes: help desk to sysadmin to cloud is the classic non-graduate path; finance/logistics professionals can move into SAP functional roles from the business side. Entry difficulty: 2/5 for help desk and junior consulting intakes; 3/5 for direct SAP/Salesforce developer roles.

**Honest downsides and who it is NOT a good fit for.** BLS projects declines of 4% for network and computer systems administrators and 3% for computer support specialists in 2025-35 (about 13,200 and 24,300 jobs, respectively), with openings arising from replacement of leavers; help desk pay starts low and can stagnate; consulting travel and project deadlines; ERP work is deeply tied to one vendor; automation and AI are reducing routine tickets. Not suited to people who want to write original software every day, or to those who dislike meetings and documentation.

#### P2-3.6 Technology consultant at an IT consultancy / system integrator

**What you actually do.** Technology consultants work on client projects: analysing requirements, designing and building solutions (cloud migration, ERP rollout, data platform, cybersecurity uplift, application modernisation), testing, and managing delivery. At graduate level you are an analyst on a team: writing code or configuration, creating test cases, building slides and status reports, and documenting. Deliverables are working systems, design documents and weekly project updates.

**A typical day and week.** Daily stand-up with the client team; build or test work; a workshop or demo for client stakeholders; time-sheeting; late-week status report. At some clients you are on-site Monday-Thursday. Staffing is a defining feature: you are "assigned" to projects, and between projects you may spend time on the bench (or on training).

**Hours, stress and lifestyle.** Hours: 40-50 typical; 55-60 near go-live or bid deadlines (author estimate). Stress: 3/5. Travel: moderate to high depending on the client and region. Remote/hybrid: hybrid with client-site presence; policies vary by firm and client. Utilisation (billable hours) targets are the quiet pressure.

**Human vs. quantitative profile.** People/communication: 4/5. Quantitative/technical: 3/5. Client communication matters from year one; technical depth varies by team (developer teams are more technical than process/advisory teams).

**Compensation (approximate).**
- UK: Accenture Technology Analyst graduate programme, 2027-28 intake, GBP 36,400 base plus GBP 7,200 signing bonus (Gradcracker listing, accessed Oct 2026); the 2026-27 Leeds listing shows GBP 32,028 plus GBP 5,000 (TargetJobs). Capgemini graduate business-analyst adverts show GBP 35-50k (third-party board, indicative). A 2026 consulting guide ranks Deloitte and PwC highest in UK starting pay (the page's excerpt showed PwC at GBP 34,000 plus GBP 2,000, EY GBP 32,000 plus GBP 3,000, KPMG GBP 32,000 plus GBP 2,000; these are general consulting, not technology-analyst roles). Senior (8+ years) and ~5-year figures: no reliable data found.
- US: no reliable entry figure was read; no reliable data found.
- Italy: Indeed shows an average of EUR 33,169 (range EUR 16,000-50,000; 46 adverts, updated Jul 2026) for engineers at Reply; a commercial guide gives EUR 25,000-35,000 RAL for 0-2 years; a 2026 FS Engineering graduate selection quoted EUR 33,697 gross (not IT). JobPricing's University Report puts the mean RAL for engineering/ICT graduates in their first decade at EUR 36,562 (via press). These are estimates, not offers; Milan pays more than other Italian cities (Levels.fyi Milan software-engineer median EUR 50,465, Turin EUR 40,133, all levels).
- Germany, Switzerland, Asia: no reliable role-specific data found.
- Visa floor: UK sponsorship rules mean some consulting graduate roles cannot sponsor (Accenture's listing states the role does not meet the sponsorship salary threshold); the UK going rate for SOC 2133 (including data engineers) is GBP 54,900, reduced to 70% for new entrants (GOV.UK going rates, updated 29 Apr 2026, via the project research file).

**Career path.** Years 0-2: analyst (Accenture) / associate consultant; 2-4: consultant; 4-6: senior consultant / specialist lead; 6-9: manager (delivery, account or solution lead); 10+: senior manager / associate director / partner or managing director (a minority). Promotion is typically annual or biannual and tied to utilisation and skills.

**Exit opportunities.** After 2-3 years: client-side IT/business-systems roles, cloud/DevOps/data engineering, product management, pre-sales at vendors. After 7-10 years: head of IT/transformation at a client, programme management, vendor leadership, independent consulting, or continued up the partner track.

**Tier list of employers.** Tier 1: Accenture, Deloitte, IBM Consulting, Capgemini, PwC/EY/KPMG technology consulting (brand, breadth of clients, strong training). Tier 2: NTT Data, Cognizant, Infosys, TCS, Wipro, Sopra Steria, CGI, Kyndryl; in Italy Reply, Engineering Ingegneria Informatica, Almaviva, Exprivia. Tier 3: smaller or regional integrators, staffing and body-shop intermediaries with thinner training and lower pay. Reply and Engineering are growing: Reply's headcount was 16,624 at end-2025 (+6.0%) and Engineering has run recruiting drives (a 2026 selection of 200 graduates was reported, 150 in computer science/engineering; date unclear and secondary). Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: CS, engineering, mathematics, statistics, and economics/management with demonstrated coding or systems skills; firms recruit broadly (Accenture UK's graduate listing requires a bachelor's). Programmes: Accenture Technology Analyst (UK intake for 2027-28 listed in Oct 2026), Capgemini, Deloitte, IBM and PwC graduate schemes; in Italy a paid stage (often about 4-6 months) followed by a permanent contract is the standard (older Engineering and Accenture university pages describe stages with conversion rates of about 60-70%; not current). Hiring calendar: UK graduate schemes open in autumn for the following year; Italian firms run continuous recruiting plus university events (Politecnico di Milano/Torino, Bologna). Interview formats (practitioner convention): online aptitude/logic tests, a video or one-way interview, a group exercise or case, and technical plus behavioural interviews. Certifications: cloud/SAP/Salesforce credentials help in specific practices; firms often pay for them after joining. Skills: one language (Java/Python/JavaScript), SQL, cloud basics, structured communication. Common mistakes: ignoring the specific practice you apply to; weak examples of teamwork; assuming consulting equals programming all day. Alternative routes: boot-camp plus prior degree into smaller integrators; internships; internal transfers from support. Entry difficulty: 2/5 at most integrators (3/5 for Accenture, Deloitte, IBM-type brand intakes in strong markets).

**Honest downsides and who it is NOT a good fit for.** Entry pay is the lowest of the CS roles in this report (UK graduate pay about GBP 32-36k vs UK median advertised DevOps pay of GBP 70k); work depends on the client's quality and legacy stack; utilisation pressure; travel; "up or out" promotion culture at some firms; IT services are heavily exposed to AI automation of routine build work and to outsourcing cycles. Not a good fit for people who want deep engineering craft early, stable single-team culture, or who dislike changing clients and projects.

#### P2-3.7 Computer science researcher (PhD, industry research lab, academic career)

**What you actually do.** You pose a question, review the literature, design experiments or proofs, write code, run experiments (often on GPU clusters), and write papers for peer-reviewed conferences (in CS, top conferences often matter more than journals). Subfields include systems, theory, security, programming languages, human-computer interaction, machine learning and more. Academics also teach, supervise students and write grant proposals; industry researchers also transfer ideas into products or publish. AI research is covered in the AI branch; this role covers CS research generally.

**A typical day and week.** Reading papers, coding experiments, weekly meetings with a supervisor, writing, and the conference deadline crunch (a few intense weeks per year). Academics add teaching, committee work, and funding applications. Industry researchers have more compute and less teaching, but need to show impact.

**Hours, stress and lifestyle.** Hours: 40-55 typical for PhD students and researchers, and many academics work more; 60-80 around conference deadlines (author estimate; no survey figure read). Stress: 3/5 for PhD students (supervisor dependence, publication pressure, financial strain), 4/5 for tenure-track academics (tenure review, funding rates). Flexibility is high on a day-to-day basis; the career itself is insecure (postdocs, short contracts). Travel: conferences several times a year. Remote/hybrid: high flexibility, with lab presence for experiments.

**Human vs. quantitative profile.** People/communication: 2/5 (3/5 in academia with teaching and supervision). Quantitative/technical: 5/5. Mathematics, programming and written argument are the job; communicating clearly through papers and talks is crucial.

**Compensation (approximate).**
- US: PhD stipend: NSF Graduate Research Fellowship $37,000 a year (NSF, 2026 competition; university assistantship stipends vary and are not verified here). BLS: computer and information research scientists median $140,300 (May 2025), projected growth 22% for 2025-35 (BLS; master's typical). Industry: Levels.fyi research scientist (US) median total compensation $305,000 (25th percentile $180k, 75th $403k, 90th $520k; 9 Oct 2026; skews to well-funded AI labs). Academic: median 9-month salary for assistant professors in CS units $131,115 (CRA Taulbee 2025).
- UK: UKRI minimum doctoral stipend GBP 21,805 from 1 Oct 2026 (GBP 20,780 in 2025/26); London weighting adds GBP 2,000 (GBP 23,805) except at EPSRC (UKRI). UK academic and industry research salaries: no reliable data found.
- Italy: no reliable 2026 PhD scholarship figure retrieved. The national PhD scholarship is understood to be on the order of EUR 1,200-1,400 net per month (author recollection; unverified; check each university's call). Leonardo Labs ran a 2026 call for 68 young researchers (STEM degree or PhD; project research file, snippet-level source). Italian academic salaries: no reliable data found.
- Germany, Switzerland, Netherlands: no reliable data retrieved this round. Hong Kong, Singapore, Tokyo: no reliable data found.

**Career path.** Academia: PhD (3-5 years in the UK/Italy/Germany, 5-6 in the US) to postdoc (1-3 posts, 2-6 years) to assistant professor/lecturer/RTD-style positions to associate/tenured professor (typical age mid-30s to 40s). Industry: PhD to research scientist/engineer (industry labs) to senior/staff scientist to principal/research director. Many PhDs go straight into applied roles (ML engineer, quant, data scientist, software engineer).

**Exit opportunities.** After the PhD or 2-3 years: industry research or applied science, software engineering, quant research, AI engineering, consulting, start-ups, public research institutes. After 7-10 years: research lead, professor, head of an AI/product group, CTO or founder, policy and standards roles. Evidence on destinations: of US CS PhDs with known jobs, 61.4% went to industry in 2025, up from 60.4% in 2020 (CRA Taulbee 2025); the prior year's report showed 57.5% industry and 30.6% academia for the 2022-23 cohort in 2023-24 (CRA, via press summary).

**Tier list of employers.** Industry labs: Tier 1: Google DeepMind/Google Research, Microsoft Research, Meta, OpenAI/Anthropic, Nvidia Research, Apple, IBM Research. Tier 2: Amazon science, Samsung, Huawei, Bell Labs/Nokia, Siemens, Bosch Research, and national corporate labs including Leonardo Labs. Tier 3: smaller companies' R&D teams, applied-research units in consultancies. Academia (by conventional prestige, e.g. CSRankings-style perception): Tier 1: MIT, Stanford, CMU, Berkeley, ETH Zurich, EPFL, Oxford, Cambridge, Imperial/UCL, TU Munich, Max Planck institutes, Inria; Tier 2: strong national universities (Politecnico di Milano, Sapienza, Bologna, Torino, Scuola Normale Superiore and Fondazione Bruno Kessler in Italy; University of Edinburgh, Technical Universities in Germany and the Netherlands); Tier 3: teaching-focused institutions. Tier groupings reflect industry consensus and practitioner perception, not objective fact.

**How to enter.** Degrees: a strong bachelor's and master's in CS, mathematics, physics or engineering. Research experience (a thesis or an undergraduate research project, ideally with a publication) matters more than grades alone. US PhD programmes typically fund students and admit in the autumn cycle with applications due in December-January (convention); UK and European PhDs are often advertised as funded positions year-round (UKRI-funded DTP competitions run in winter); Italian PhD calls (bandi) run annually, typically with a summer-autumn cycle (practitioner convention). Interview formats: application with statement and references, a research interview, a talk or technical discussion; industry labs add a research talk and publications review. Certifications: none relevant. Skills: mathematics, programming, writing, one subfield, and open-source or paper reproduction as evidence. Common mistakes: choosing a supervisor for the university name rather than fit; no research output before applying; underestimating how few tenure-track jobs exist. Alternative routes: industry research engineer roles without a PhD (rare, mostly at well-funded AI labs), research assistant posts, residency programmes at labs (some run them; details not verified here), applied research roles. Entry difficulty: 4/5 for a funded PhD at a strong programme and 5/5 for top industry research labs or tenure-track posts at top-tier universities.

**Honest downsides and who it is NOT a good fit for.** Low pay for 4-7+ years in most countries, long periods of uncertainty, publication pressure, and tiny odds of a top-tier tenured post. CRA reports record numbers of CS doctorates (1,351) but a 15% fall in new PhD enrolment in the latest cohort and tenure-track faculty losses in the longitudinal cohort (Taulbee 2025), so the academic market is volatile. The financial case for a PhD depends on the field and the outside option: pay premiums are concentrated in AI/ML and quantitative roles. Not suited to people who want predictable promotion paths, quick product feedback, or who dislike working alone for long stretches.

### Role family summary (all parts)

| Role family | Typical hours/week (peak) | Stress 1-5 | People 1-5 | Quant 1-5 | Entry comp: US / UK / Italy (approx., currency, base or total) | Entry difficulty 1-5 |
|---|---|---|---|---|---|---|
| P1-3.1 Backend | 40-48 (55-70) | 3 | 3 | 4 | US$141k-155k total (Levels.fyi entry, big-tech-skewed); London £56.6k total (Levels.fyi, 2026); Italy €28k-35k base (Italy Handbook 2026) | 4 |
| P1-3.2 Frontend | 40-45 (50-60) | 3 | 3 | 3 | No reliable US entry figure (US software entry median US$141k-155k is big-tech-skewed); UK adverts median £65k all levels; Italy €30k base (junior estimate) | 3-4 |
| P1-3.3 Full-stack | 40-50 (55-70) | 3 | 3 | 4 | No reliable US entry figure (all-level median US$172.5k total); UK adverts median £60k all levels; Italy €28k-35k base (general developer) | 3 |
| P1-3.4 Mobile | 40-48 (50-60) | 3 | 3 | 4 | No reliable US entry figure (all-level median US$215k-225k total); UK adverts median £85k all levels (noisy); Italy €31k base (junior estimate) | 4 |
| P1-3.5 Game developer | 40-50 (60-80 in crunch) | 4 | 3 | 4 | No reliable data found for US or UK; Canada proxy: EA CA$105k, Ubisoft CA$71k total; no reliable Italy data | 4 |
| P1-3.6 QA / SDET | 38-45 (50-55) | 2 | 3 | 3 | US$61k (BLS 10th percentile base, May 2025) to about US$100k; UK £40k-60k (adverts, noisy); Italy about €25k-32k (secondary) | 2 (4 for SDET at top firms) |
| P1-3.7 Solutions / sales engineer / DevRel | 40-50 (55-65) | 3 | 4-5 | 3 | No reliable entry figure (US all-level median US$204k total); UK adverts median £50k base vs Levels.fyi London £126k total; no reliable Italy entry figure | 4 |
| P2-3.1 DevOps / SRE / platform | 40-48 (55-70) | 3 (SRE 4) | 3 | 4 | US: no entry data; proxy 25th pct total comp ~USD 120k (DevOps) / 158k (SRE) / UK: ~GBP 47k-60k advertised (10th-25th pct, proxy) / Italy: ~EUR 32-35k base (commercial estimate) | 3 (SRE at top firms 4) |
| P2-3.2 Cloud engineer / architect | 40-45 (50-55) | 3 | 4 | 4 | US: no entry data; proxy: median USD 189k self-reported, all levels / UK: ~GBP 50k-56k advertised (10th-25th pct, proxy) / Italy: ~EUR 40k base (estimate) | 3 |
| P2-3.3 Embedded / firmware / systems | 38-45 (50-60) | 3 | 2 | 4 | US: no entry data; median USD 132.5k all levels (self-reported) / UK: ~GBP 46.5k-55k advertised (10th-25th pct, proxy) / Italy: ~EUR 38-48k base (adverts, mostly experienced) | 3 |
| P2-3.4 Data engineer | 40-45 (50-55) | 3 | 3 | 4 | US: no entry data; proxy 25th pct total comp USD 116k / UK: ~GBP 45k-52.5k advertised (10th-25th pct, proxy) / Italy: ~EUR 34k base (estimate) | 3 |
| P2-3.5 Enterprise apps consultant and IT admin/support | Consultant 42-50 (55-65); admin 38-45 (on-call) | 3 (admin 2-3) | 4 (support 3) | 3 | US: SAP junior USD 70-95k base; Salesforce admin junior USD 78k; support specialist median USD 62.9k / UK: Salesforce admin junior GBP 36.7k; help desk GBP 18-25k (weak) / Italy: no reliable data (consulting entry ~EUR 25-35k, commercial guide) | 2 (developer roles 3) |
| P2-3.6 Technology consultant at IT consultancy / SI | 40-50 (55-60) | 3 | 4 | 3 | US: no reliable data found / UK: GBP 32-36.4k base plus GBP 5-7.2k signing bonus (Accenture graduate) / Italy: ~EUR 25-35k RAL (Indeed/commercial; not employer-confirmed) | 2 (brand-name intakes 3) |
| P2-3.7 CS researcher (PhD / lab / academia) | 40-55 (60-80) | 3 (tenure-track 4) | 2 | 5 | US: PhD stipend USD 37k (NSF GRFP); industry research scientist median USD 305k total comp, all levels / UK: PhD stipend GBP 21,805 (UKRI, from Oct 2026) / Italy: no reliable figure retrieved | 4 (top labs/tenure 5) |

Hours and stress ratings are the researchers' estimates from surveys, postings and practitioner consensus, not survey outputs per role family; see each part's notes.

## 4. Banks vs. other employer types

Cross-part overview (approximate, early-career; detail, sources and regional differences in the part sections below):

| Employer type | Typical hours/week | Stress 1-5 | Pay level (relative) | Culture | Autonomy | Job security |
|---|---|---|---|---|---|---|
| Top-paying tech and trading firms | 45-55 | 4 | Very high | Performance-driven, high bar | High | Medium (layoff waves since 2022) |
| Big tech | 40-50 | 3 | High | Structured, process-heavy | Medium | Medium |
| Startup / scale-up | 45-60 | 3-4 | Moderate cash, equity upside | Fast, broad ownership | High | Low |
| Bank / insurer | 40-50 | 3 | Moderate to high | Regulated, slower releases | Medium-low | High |
| Industrial / automotive / manufacturer | 38-45 | 2-3 | Moderate | Engineering-led, long product cycles | Medium | High (but sector restructuring in Europe) |
| IT services / consulting / system integrator | 40-50 (client peaks) | 3 | Low to moderate at entry, esp. in Italy | Client-driven, billable, staffing-based | Low at entry | Medium |
| Public sector / university | 35-45 | 2 | Low to moderate | Stable, bureaucratic | Medium-high in research | High |

### Part 1: Product software engineering

The same software role looks quite different depending on the employer. The comparison below is for a backend or full-stack engineer; it summarises Levels.fyi pay data and practitioner consensus (hours, stress, culture and security are not measured by a reliable survey; treat them as indicative).

| Employer type | Hours/week (peak) | Stress | Pay (US entry total comp, indicative) | Culture | Autonomy | Job security |
|---|---|---|---|---|---|---|
| Quant trading firm (Jane Street, HRT, Citadel, IMC) | 45-55 (60+) | 4 | US$350k-400k (Jane Street, HRT entry, Levels.fyi 2025) | Elite, collaborative, high bar | High | Good if you perform; very selective |
| Big tech (Google, Meta, Amazon, Microsoft) | 40-48 (55) | 3 | US$155k median entry (Levels.fyi 2025); Google L3 about US$215k average total (accessed 9 Oct 2026) | Process-heavy, large teams, promotion cycles | Medium | Medium: layoffs in 2023-2026; Amazon and Meta have cut repeatedly |
| Startup / scale-up | 45-55 (60-70) | 3-4 | Wide range; equity uncertain | Fast, broad responsibility | High | Low to medium |
| Bank (JPMorgan, Goldman) | 40-50 (55-60) | 3 | US$112k-114k analyst-level total (Levels.fyi, Oct 2026) | Hierarchical, regulated, change-controlled | Low to medium | Medium to high |
| Non-tech corporate | 38-42 (45) | 2 | Lower than tech; BLS median US$136,330 in manufacturing for software developers (all experience, May 2025) | Slow, bureaucratic, stable | Low | High |
| IT services / consulting (Accenture, Capgemini, Reply, TCS, Infosys) | 40-45 (55-60) | 3 | Lowest of the group; India entry about ₹543k-595k (Levels.fyi, Oct 2026) | Client-driven, bench risk, high turnover | Low | Medium: TCS shed 23,460 staff in 2025-26 (press) |
| Agency / freelance | 40-50 (60) | 3-4 | Variable; freelancers earn by day rate and are exposed to gaps | Varied | High | Low |

**Commentary.**

- **Pay is where the gap is largest, and it is mostly geography and employer type, not job title.** Levels.fyi's 2025 report put the US median software engineer total compensation at US$192,500 against US$73,618 for Europe (down 3.23%), US$96,145 for Canada and US$33,768 for India. Within the US, the Bay Area median was US$278,000 and New York US$193,000. At Levels.fyi in October 2026, all-level medians were: London £102,326, Berlin €92,035, Amsterdam €108,349, Paris €65,777, Zurich CHF 149,660, Milan €35,837 (n=18), Singapore SGD 115,212, Tokyo ¥8.59 million, Hong Kong HK$605,175, and Dubai AED 311,987. Milan is the lowest in this list by a wide margin, though the sample is small and skews toward local employers; the 2026 Italy-wide salary estimates (€28k-35k junior, €55k-85k+ senior) point the same way.
- **Italy in particular:** pay for the same title is often one-third to one-half of Berlin or Amsterdam and well under a fifth of Bay Area big-tech pay. Italian press and a CNEL study of young expatriates report that engineers and computer scientists lead the emigration of graduates, and 58% of surveyed expats left straight after graduating (self-selected sample; reported by Greenme, secondary). Italy also has genuine domestic demand: ICT professionals are about 4% of Italian employment against about 5% EU-wide (secondary press). Reply (17,297 employees in June 2026) and similar IT consultancies are major employers.
- **Remote work for a foreign employer:** In the 2025 Stack Overflow survey, 45% of US respondents worked fully remote, so remote work for a US or northern European employer is feasible for experienced engineers living in Italy. Companies often adjust pay to local bands, hire through "employer of record" services or contract you as a self-employed supplier, and prefer mid-level and senior engineers; juniors are rarely hired remotely from abroad (practitioner consensus). Italian freelancers can use a simplified flat-tax regime for small businesses ("regime forfettario"), but I could not verify its current limits and rates in this research, so check the Agenzia delle Entrate before relying on it.
- **Asian and Middle Eastern hubs:** Singapore, Hong Kong and Dubai pay mostly in line with Europe or higher for the top few employers (Meta SGD 270,759, Morgan Stanley HK$750,289, Careem AED 509,449 in Levels.fyi), but visas and employer sponsorship drive access; Tokyo pays less in yen terms than US firms, with Indeed (¥24.1 million), Amazon (¥17.9 million) and Woven by Toyota (¥17 million) near the top. Bangalore matters mostly as the offshoring benchmark: India median software engineer pay is US$33,768, and big IT services firms such as TCS and Infosys hire and shed tens of thousands per year.
- **Culture and hours by region:** The US has the longest hours and fastest hire-and-fire cycle but the highest pay; the UK is similar with lower pay; continental Europe (Germany, Netherlands, Switzerland, France) tends to have shorter hours, more notice periods and stronger worker protections; Italy has strong legal protections for permanent employees but also many fixed-term and freelance arrangements (practitioner consensus, unverified); Japan has a reputation for long hours and slow promotion; trading firms and banks ask for more hours everywhere.
- **Banks specifically:** A bank gives you stable employment and formal training but lower pay than Silicon Valley and slower technology. Trading firms are the exception: they pay more than big tech and demand more.

### Part 2: Infrastructure, systems and other CS careers

The template title says "banks", but for this branch the useful comparison is across the employer types listed in the brief. Ratings are the author's synthesis of the sources above, practitioner descriptions and structural features of each employer type; they are not survey results, and individual teams differ a lot.

| Employer type | Hours | Stress | Pay (relative, same role) | Culture | Autonomy | Job security |
|---|---|---|---|---|---|---|
| Big tech (Google, Amazon, Microsoft, Meta, Apple, Nvidia) | 40-50; on-call for SRE/infra | 3-4 | Highest (US median software total comp $196,925; research scientists $305k median; Levels.fyi) | Engineering-led, promotion by level, high interview bar | High | Medium: large layoffs in 2022-24; SignalFire reports big-tech hiring 25% below its 2019 baseline |
| Startup / scale-up | 45-55; broad on-call | 3-4 | Medium to high base, equity uncertain; startup new-grad hiring down about 76% vs 2019 (SignalFire) | Fast, broad scope, little process | Highest | Low to medium |
| Bank / insurer | 40-48; incident weekends around releases | 3 (incident-driven 4) | High in US/UK/Switzerland, mid in Italy/Germany; strong in infrastructure and data roles | Process-heavy, regulated, compliance, change control | Low to medium | Medium to high |
| Manufacturing / automotive / industrial | 38-45 | 2-3 | Lower than tech in the same city (Germany: embedded entry about EUR 51-56k, get-in-it); strong collective contracts | Hierarchical, hardware-centric, slow release cycles | Medium | Medium to high for current staff, but automotive restructuring is cutting jobs (Bosch, ZF, Continental, Stellantis Italy) |
| IT services / consulting / system integrator | 40-50; peaks at go-live | 3 | Lowest at entry (UK GBP 32-36k; Italy ~EUR 25-35k) but fast broadening of experience | Client-driven, utilisation targets, up-or-out | Low to medium | Medium; project and bench cycles |
| Public sector / university | 37-42 | 2-3 (academia 3-4) | Lowest, except specialised roles | Stable, bureaucratic, mission-driven | Medium (academia high) | High (staff); academic posts insecure |

**Commentary.**

- **Pay is a region story first, an employer story second.** On Levels.fyi (self-reported, all levels, 9 Oct 2026), median software-engineer total compensation is USD 196,925 (US), CHF 133,643 (Switzerland; Zurich CHF 193,838), GBP 89,673 (UK; London GBP 104,526), EUR 94,851 (Netherlands), EUR 84,890 (Germany), SGD 114,992 (Singapore), AED 337,547 (UAE), JPY 8.5m (Japan), HKD 605,175 (Hong Kong), NT$1.49m (Taiwan) and EUR 39,258 (Italy; Milan EUR 50,465, Turin EUR 40,133). At prevailing exchange rates, the US median is roughly four to five times the Italian one; Italy's figure is about 46% of Germany's in euros. Sample size and employer mix differ (Italy 384 submissions; Germany 3,021; US 47,953), and the data skew to tech firms and to well-paid respondents, so they overstate what a typical graduate earns, but the ordering matches other sources.
- **Italy.** Italian entry pay is low across all these roles (about EUR 25,000-35,000 gross at integrators and many industrials, higher in Milan and at foreign tech firms), career progression through large Italian integrators and industrials is steady, and permanent contracts are common after an initial stage. The Italian ICT labour market is nonetheless tight in people terms: a news summary of Unioncamere/Excelsior says employers need about 13,000-14,000 ICT experts a year against about 9,000 trained, and AlmaLaurea reports a 94.8% five-year employment rate for ICT graduates (secondary summaries; verify against the primary reports). The result is a gap between demand and pay that drives many Italian graduates to emigrate to the Netherlands, Germany, Switzerland and the UK (inference; I did not find a source quantifying this). Milan and Turin have the largest tech, consulting and automotive clusters; Bologna and Modena are the Motor Valley engineering base.
- **Germany.** The engineering market is large and structured: 2.3 million ICT specialists, 22% of the EU total, versus Italy's 0.9 million (Eurostat, 2025). Bitkom's 2026 survey still counts about 79,000 missing IT specialists, roughly half the 2023 level of 149,000 (Bitkom, 2026; the 2023 figure is from the project research file), and the shortage is concentrated in experienced profiles. Automotive IT and embedded work are exposed to restructuring (Bosch, ZF, Continental). The EU Blue Card has a reduced salary threshold of EUR 45,934.20 for IT specialists and recent graduates (per the project research file reading of Berlin's ServicePortal, 2026).
- **United Kingdom.** UK advertised salaries cluster at GBP 65-70k median for DevOps, cloud and data engineers, but graduate technology-consulting starts are GBP 32-36k, a wide gap that reflects the experience premium. London is about GBP 7.5-15k above the national median depending on the role (ITJobsWatch). UK Skilled Worker rules (going rate for SOC 2133 GBP 54,900, new-entrant 70%) matter for non-UK graduates.
- **United States.** Highest pay and the most remote work (45% of US respondents fully remote in Stack Overflow 2025) but a harder entry market: 69.3% of software postings were senior in Q1 2026 (Indeed) and top-20 CS graduates were 45% less likely to take a role at a major tech firm than a few years earlier (SignalFire 2026). H-1B visa rules (weighted lottery, USD 100,000 charge on some petitions) matter for non-US graduates (project research file; check current status).
- **Asian and Middle East hubs.** Singapore, Hong Kong and the UAE pay mid-to-high local salaries with low tax in Singapore and the UAE (tax rates not verified here); Singapore's top payers are Meta, Google and Airwallex, Hong Kong's Morgan Stanley and Huawei, the UAE's Careem and Talabat (Levels.fyi). Japan's median is lower in dollar terms. Taiwan is the semiconductor hub: TSMC's average package for new master's-level engineers is NT$2.2m, above the Taiwan software-engineer median of NT$1.49m (CNA, Mar 2026; Levels.fyi). South Korea: no reliable data found.
- **Hours and on-call.** The strongest sources found indicate incident load rather than formal long hours drives stress in infrastructure roles (Catchpoint), while consulting and go-live peaks drive hours in integrators. Public sector, industrial and university employers have the most predictable schedules.
- **Job security.** Security is lowest at startups and in consulting bench cycles, medium at big tech and banks, highest in public/industrial staff positions, but automotive and some industrial restructurings in 2024-26 show that "stable" employers can cut deeply; collective agreements usually protect current staff and push the adjustment onto temporary and new hires (project research file on German OEM deals).

## 5. Which backgrounds fit this branch

### (a) Ratings by background (whole branch)

| Background | Overall fit | One-line reason |
|---|---|---|
| Management | stretch | Realistic doors are functional ERP/CRM consulting, technology consulting delivery roles and solutions engineering; engineering roles need a technical conversion. |
| Logistics & Supply Chain | stretch | SAP supply-chain modules (MM, SD, EWM) are a classic entry; other roles need programming from scratch. |
| Finance | stretch | Finance-systems consulting (SAP FI/CO) and fintech QA or pre-sales are realistic; engineering needs serious coding or a conversion master's. |
| Accounting | stretch | SAP FI/CO and ERP implementation are natural; programming roles are a long career change. |
| Marketing | stretch | Salesforce/CRM consulting and developer advocacy are plausible with technical skills; core engineering is hard to reach. |
| Data Analytics | possible | SQL and Python transfer to data engineering, backend and QA automation; software design and engineering practice must be learned. |
| Economics | stretch | Quantitative skills help for data and research paths, and IT consultancies hire economists, but programming depth is usually missing. |
| Computer Science | strong | The default background for every role family in this branch. |
| Cybersecurity | possible | Strong for cloud, DevOps/DevSecOps and sysadmin roles and security-vendor solutions engineering; product engineering needs more development practice. |
| Data Science | possible | Strong for data engineering and research; product and infrastructure engineering need more engineering practice. |
| Artificial Intelligence | strong | AI curricula include heavy programming and maths; strongest for backend, data and research roles, less so for enterprise IT. |

### (b) Matrix by role family (all parts)

S = strong, P = possible, X = stretch. Columns are the 11 base backgrounds: Mgmt = Management, Log = Logistics & Supply Chain, Fin = Finance, Acc = Accounting, Mkt = Marketing, DA = Data Analytics, Econ = Economics, CS = Computer Science, Cyber = Cybersecurity, DS = Data Science, AI = Artificial Intelligence.

| Role family | Mgmt | Log | Fin | Acc | Mkt | DA | Econ | CS | Cyber | DS | AI |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1-3.1 Backend software engineer | X | X | X | X | X | P | X | S | P | P | S |
| P1-3.2 Frontend engineer | X | X | X | X | X | X | X | S | X | X | P |
| P1-3.3 Full-stack engineer (especially at startups and agencies) | X | X | X | X | X | X | X | S | P | P | P |
| P1-3.4 Mobile engineer | X | X | X | X | X | X | X | S | X | X | P |
| P1-3.5 Game developer (programmer roles at studios) | X | X | X | X | X | X | X | S | X | X | P |
| P1-3.6 QA / test automation engineer / SDET | P | P | P | P | P | P | P | S | P | P | P |
| P1-3.7 Solutions engineer / sales engineer / developer advocate | P | P | P | P | P | P | P | S | S | P | P |
| P2-3.1 DevOps / site reliability / platform engineer | X | X | X | X | X | X | X | S | S | P | P |
| P2-3.2 Cloud engineer / cloud solutions architect | X | X | X | X | X | P | X | S | S | P | P |
| P2-3.3 Embedded / firmware / systems engineer | X | X | X | X | X | X | X | P | P | X | P |
| P2-3.4 Data engineer | X | X | X | X | X | S | X | S | P | S | P |
| P2-3.5 Enterprise applications consultant (SAP, Salesforce, ServiceNow, etc.) and IT systems administrator/support | P | S | P | S | P | P | P | S | S | P | P |
| P2-3.6 Technology consultant at an IT consultancy / system integrator | P | P | P | P | P | S | P | S | S | S | S |
| P2-3.7 Computer science researcher (PhD, industry research lab, academic career) | X | X | X | X | X | X | X | S | P | S | S |

### Part-level ratings and notes

#### Part 1: Product software engineering

#### (a) Background ratings

| Background | Rating | Reason |
|---|---|---|
| Management | Stretch | No technical foundation; best routes are solutions engineering or QA after substantial self-study. |
| Logistics & Supply Chain | Stretch | Domain knowledge helps in logistics software sales and QA, but programming skills must be built from scratch. |
| Finance | Possible | Fintech and bank solutions or QA roles value domain knowledge; engineering needs serious coding preparation or a conversion master's. |
| Accounting | Stretch | Strong fit for finance-software QA or pre-sales, but a career change into programming is long. |
| Marketing | Stretch | Developer advocacy and technical sales are plausible with coding skills; engineering roles are hard to reach. |
| Data Analytics | Possible | SQL and Python give a head start into backend and QA automation; software design still has to be learned. |
| Economics | Stretch | Quantitative skills help, but programming experience is usually insufficient; solutions engineering at data or fintech firms is more realistic. |
| Computer Science | Strong | The default route into every role family here. |
| Cybersecurity | Possible | Strong technical base for QA automation and security-vendor solutions engineering; product software requires more development practice. |
| Data Science | Possible | Python and statistics transfer to backend and QA; engineering practice (testing, design, deployment) is the gap. |
| Artificial Intelligence | Strong | AI curricula usually include heavy programming and maths; backend and mobile roles are within reach and AI-adjacent solutions roles are growing. |

#### (b) Role-family matrix (S = strong, P = possible, X = stretch)

| Background | 3.1 Backend | 3.2 Frontend | 3.3 Full-stack | 3.4 Mobile | 3.5 Game | 3.6 QA/SDET | 3.7 Solutions/DevRel |
|---|---|---|---|---|---|---|---|
| Management | X | X | X | X | X | P | P |
| Logistics & Supply Chain | X | X | X | X | X | P | P |
| Finance | X | X | X | X | X | P | P |
| Accounting | X | X | X | X | X | P | P |
| Marketing | X | X | X | X | X | P | P |
| Data Analytics | P | X | X | X | X | P | P |
| Economics | X | X | X | X | X | P | P |
| Computer Science | S | S | S | S | S | S | S |
| Cybersecurity | P | X | P | X | X | P | S |
| Data Science | P | X | P | X | X | P | P |
| Artificial Intelligence | S | P | P | P | P | P | P |

Notes: These ratings are judgments, not statistics; they refer to a graduate with no extra training beyond the background. A motivated career changer with a strong portfolio can move a "stretch" to "possible", especially in QA and frontend. Game development is rated stretch for all non-CS backgrounds because it requires a strong portfolio and C++ depth.

#### Part 2: Infrastructure, systems and other CS careers

**(a) Overall fit of each base background with this branch (infrastructure, systems, enterprise IT, consulting and research).** Rating is the overall fit across the seven role families; the matrix in (b) gives the role-level detail.

| Background | Fit | One-line reason |
|---|---|---|
| Management | stretch | Possible through functional ERP consulting, project/delivery roles and technology consulting, but not engineering roles without a technical programme. |
| Logistics & Supply Chain | possible | SAP functional modules (MM, SD, EWM) and ERP rollouts are a classic entry; engineering roles need extra technical training. |
| Finance | stretch | SAP FI/CO and finance-systems consulting are realistic; infrastructure and embedded roles are not. |
| Accounting | possible | SAP FI/CO and ERP implementation are natural; also systems-audit adjacent. |
| Marketing | stretch | Salesforce/CRM and marketing-automation consulting is the realistic door; deeper technical roles need a conversion. |
| Data Analytics | possible | SQL and data modelling skills transfer directly to data engineering; cloud and infrastructure need extra learning. |
| Economics | stretch | Quantitative training helps for data and research paths, but needs coding and CS depth; consulting intakes accept economists. |
| Computer Science | strong | The default background for every role family here, from DevOps to research. |
| Cybersecurity | strong | Networking, Linux and security skills map to cloud, DevOps/DevSecOps, sysadmin and embedded security. |
| Data Science | strong | Strong for data engineering and research; infrastructure roles need more engineering practice. |
| Artificial Intelligence | possible | Strongest for research and data/MLOps; general infrastructure and enterprise IT require extra systems skills. |

**(b) Matrix (S = strong, P = possible, X = stretch).** Role 3.5 is rated for the functional ERP/CRM consultant track; for IT support and sysadmin entry, every technical background is S and the business ones are P.

| Background | 3.1 DevOps/SRE | 3.2 Cloud | 3.3 Embedded | 3.4 Data engineer | 3.5 Enterprise apps / IT admin | 3.6 Tech consulting | 3.7 CS research |
|---|---|---|---|---|---|---|---|
| Management | X | X | X | X | P | P | X |
| Logistics & Supply Chain | X | X | X | X | S | P | X |
| Finance | X | X | X | X | P | P | X |
| Accounting | X | X | X | X | S | P | X |
| Marketing | X | X | X | X | P | P | X |
| Data Analytics | X | P | X | S | P | S | X |
| Economics | X | X | X | X | P | P | X |
| Computer Science | S | S | P | S | S | S | S |
| Cybersecurity | S | S | P | P | S | S | P |
| Data Science | P | P | X | S | P | S | S |
| Artificial Intelligence | P | P | P | P | P | S | S |

Notes: embedded is P (not S) for CS because many employers in Italy and Germany prefer electronic or computer engineering degrees; CS graduates with strong C, operating systems and computer-architecture coursework do enter. A technical master's (computer science, computer engineering) is the standard conversion route for most "X" cells and is the main way non-CS graduates reach 3.1-3.4.

## 6. Sources

### Part 1: Product software engineering

Levels.fyi pages show a "last updated" date of 9 October 2026 at access; the underlying submissions span several years and are self-reported.

1. Levels.fyi, "2025 Annual Report" (End of Year Pay Report), https://www.levels.fyi/2025/ and structured version https://www.levels.fyi/2025/report.md. Accessed October 2026 (report covers 2025).
2. Levels.fyi, Software Engineer salaries by location, accessed 9 October 2026: London https://www.levels.fyi/t/software-engineer/locations/london-gbr ; Milan https://www.levels.fyi/t/software-engineer/locations/milan-metro-area ; Berlin https://www.levels.fyi/t/software-engineer/locations/berlin-deu ; Amsterdam https://www.levels.fyi/t/software-engineer/locations/amsterdam-nld ; Paris https://www.levels.fyi/t/software-engineer/locations/paris-fra ; Zurich https://www.levels.fyi/t/software-engineer/locations/zurich-che ; Singapore https://www.levels.fyi/t/software-engineer/locations/singapore-sgp ; Greater Tokyo https://www.levels.fyi/t/software-engineer/locations/greater-tokyo-area ; Hong Kong https://www.levels.fyi/t/software-engineer/locations/hong-kong-hkg ; Dubai https://www.levels.fyi/t/software-engineer/locations/dubai-are .
3. Levels.fyi, entry-level and senior pages, accessed 9 October 2026: US entry https://www.levels.fyi/t/software-engineer/levels/entry-level/locations/united-states ; London entry https://www.levels.fyi/t/software-engineer/levels/entry-level/locations/london-gbr ; Berlin entry https://www.levels.fyi/t/software-engineer/levels/entry-level/locations/berlin-deu ; London senior https://www.levels.fyi/t/software-engineer/levels/senior/locations/london-gbr ; Milan senior https://www.levels.fyi/t/software-engineer/levels/senior/locations/milano-ita .
4. Levels.fyi, title pages, accessed 9 October 2026: backend https://www.levels.fyi/t/software-engineer/title/backend-software-engineer ; frontend https://www.levels.fyi/t/software-engineer/title/frontend-software-engineer ; full-stack https://www.levels.fyi/t/software-engineer/title/full-stack-software-engineer ; mobile https://www.levels.fyi/t/software-engineer/title/mobile-software-engineer ; Android https://www.levels.fyi/t/software-engineer/title/android-engineer ; iOS https://www.levels.fyi/t/software-engineer/title/ios-engineer ; sales engineer https://www.levels.fyi/t/sales-engineer ; London sales engineer https://www.levels.fyi/t/sales-engineer/locations/london-gbr ; Milan sales engineer https://www.levels.fyi/t/sales-engineer/locations/milano-ita ; solution architect https://www.levels.fyi/t/solution-architect .
5. Levels.fyi, company pages, accessed 9 October 2026: JPMorgan Chase https://www.levels.fyi/companies/jpmorgan-chase/salaries/software-engineer ; Goldman Sachs https://www.levels.fyi/companies/goldman-sachs/salaries/software-engineer ; Google https://www.levels.fyi/companies/google/salaries/software-engineer ; Electronic Arts https://www.levels.fyi/companies/electronic-arts/salaries/software-engineer ; Ubisoft https://www.levels.fyi/companies/ubisoft/salaries/software-engineer ; Epic Games https://www.levels.fyi/companies/epic-games/salaries/software-engineer ; Accenture https://www.levels.fyi/companies/accenture/salaries/software-engineer ; Capgemini https://www.levels.fyi/companies/capgemini/salaries/software-engineer .
6. ITJobsWatch, permanent salary pages for Software Engineer, Front-End Developer, Full-Stack Developer, iOS Developer, Test Automation Engineer, Sales Engineer and Graduate Software Engineer, six months to 9 October 2026, https://www.itjobswatch.co.uk/jobs/uk/software%20engineer.do (and equivalent pages). Based on advertised UK salaries; small samples noisy.
7. Stack Overflow, "2025 Developer Survey", https://survey.stackoverflow.co/2025/ and work section https://survey.stackoverflow.co/2025/work ; and blog post "Developers remain willing but reluctant to use AI: the 2025 Developer Survey results are here", https://stackoverflow.blog/2025/07/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/ , 29 July 2025.
8. US Bureau of Labor Statistics, Occupational Outlook Handbook, "Software Developers, Quality Assurance Analysts, and Testers", https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm , accessed October 2026 (pay data May 2025; projections 2025-35).
9. Indeed Hiring Lab, "AI and Job Postings: From Destruction to Creation?", https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/ , 8 July 2026.
10. Indeed Hiring Lab, "The Labor Market Is Tilting Toward Seniority", https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/ , 23 July 2026.
11. SignalFire, "State of Tech Talent Report 2026", https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026 , 22 June 2026.
12. Stanford Digital Economy Lab, Brynjolfsson, Chandar and Chen, "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence", https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/ , revised 12 August 2026.
13. Federal Reserve Bank of New York, "The Labor Market for Recent College Graduates", https://www.newyorkfed.org/research/college-labor-market , 2026 Q2 (all-majors figures only: unemployment about 5.6%, underemployment 42%; CS-specific figures not read).
14. GDC, "GDC 2026 State of the Game Industry Reveals Impact of Layoffs, Generative AI, and More", https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/ , 2026 (page undated; event-date text inconsistent).
15. Challenger, Gray & Christmas, job-cuts report summaries (September and August 2026), https://www.challengergray.com/blog/category/job-cuts-report/ , accessed October 2026 (sector-level tech figures not available on the page read).
16. Fast Company, "Tech layoffs: 165,925 jobs slashed in 2026, September cuts rise", https://www.fastcompany.com/91616653/tech-layoffs-165925-jobs-slashed-2026-september-cuts-rise , October 2026 (page blocked, search summary only; figures vs September 2025 as cited there). Layoffs.fyi totals via secondary reports (ianslive.in, kron4.com, aiweekly.co), accessed October 2026; layoffs.fyi's own page, https://layoffs.fyi/ , could not be read for totals.
17. IANS, "Top IT firms' hiring turns negative as headcount falls over 7,000 in FY26", https://ianslive.in/top-it-firms-hiring-turns-negative-as-headcount-falls-over-7000-in-fy26--20260425104000 , 25 April 2026, and related Indian press on TCS and Infosys fresher hiring (search summaries only).
18. Reply S.p.A., "Relazione semestrale 2026" (half-year report), https://www.reply.com/contents/Relazione_semestrale_2026.pdf , 2026 (file too large to open; headcount from a search summary); 2025 revenue about €2.45 billion from aggregator sites, not verified against Reply's annual report.
19. Italy Handbook, "Tech Jobs in Italy: Hotspots and Salary Overview", https://italyhandbook.com/tech-jobs-in-italy-hotspots-and-salary-overview/ , published 15 March 2026, updated 6 October 2026 (third-party estimates with no stated source).
20. Indeed Italy salary pages for junior software developer and junior Java developer, Milan and national (updated 25 June 2026), and Deloitte and PwC Milan advert ranges, https://it.indeed.com/career/junior-software-developer/salaries ; https://it.indeed.com/cmp/Deloitte/salaries/Software-engineer ; https://it.indeed.com/cmp/Pwc/salaries/Software-engineer , accessed October 2026 (search summaries; small samples).
21. BusinessOnline.it, articles on Italian ICT employment and salaries, and Corriere Comunicazioni on the Osservatorio sulle Competenze Digitali 2025 (AICA, Anitec-Assinform, Assintel, Talents Venture, presented November 2025), https://www.businessonline.it/ and https://www.corrierecomunicazioni.it/ , accessed October 2026 (secondary; search summaries only). Greenme.it on the CNEL "Giovani Expat" report, accessed October 2026 (secondary).
22. Amazon Jobs, "Interviewing at Amazon", https://www.amazon.jobs/en/landing_pages/interviewing-at-amazon , accessed October 2026.
23. Bending Spoons, Careers page, https://bendingspoons.com/careers , accessed October 2026 (Milan and London offices; no pay ranges shown).
24. Accenture Italia, careers job search page, https://www.accenture.com/it-it/careers/jobsearch , accessed October 2026 (no open positions shown at the time).
25. Jane Street job board (Greenhouse API), https://boards-api.greenhouse.io/v1/boards/janestreet/jobs , accessed October 2026 (shows internship and new-grad postings dated July-September 2026; none were software engineer titled in the portion read).
26. Prior project file, "Careers in software, data, AI and quant development", /Users/alessandro/Documents/Vibe Coding Projects/admetia/research/careers/tech-data-and-ai.md , early October 2026. Used only for leads and for these items not re-verified here: Amazon SDE I Early Career 2027 posting (24 September 2026), Bitkom unfilled IT positions (3 September 2026), swissICT 2025 and get-in-it.de 2026 entry salaries, and METR studies (10 July 2025, 24 February 2026).
27. Google Careers, "How we hire" pages, https://www.google.com/about/careers/applications/how-we-hire/ , accessed October 2026 (the pages returned navigation text only; no interview details were extracted).

### Part 2: Infrastructure, systems and other CS careers

Search tools returned summaries for several pages, and some pages could not be fetched directly; these are marked "(via search summary)". Items marked "project research file" were read in the project files careers/tech-data-and-ai.md and careers/industrial-automotive-defence.md (written early Oct 2026), which cite the primary URLs given.

**Pay, labour market and surveys**
1. Levels.fyi, DevOps Engineer salary page (US) - https://www.levels.fyi/t/software-engineer/title/devops-engineer - accessed 9 Oct 2026.
2. Levels.fyi, Site Reliability Engineer salary page - https://www.levels.fyi/t/software-engineer/title/site-reliability-engineer - accessed 9 Oct 2026.
3. Levels.fyi, Data Engineer salary page - https://www.levels.fyi/t/software-engineer/title/data-engineer - accessed 9 Oct 2026.
4. Levels.fyi, Research Scientist (US) - https://www.levels.fyi/t/software-engineer/title/research-scientist - accessed 9 Oct 2026.
5. Levels.fyi, software engineer salaries by country: United States, United Kingdom, Germany, Netherlands, Switzerland, Italy, Singapore, United Arab Emirates, Japan, Hong Kong, Taiwan - https://www.levels.fyi/t/software-engineer/locations/{country} (e.g. /italy, /singapore, /taiwan) - accessed 9 Oct 2026.
6. Levels.fyi, 2025 Annual Report - https://www.levels.fyi/2025/ - via search summary, accessed Oct 2026.
7. Stack Overflow, 2025 Developer Survey, Work section - https://survey.stackoverflow.co/2025/work - 2025.
8. ITJobsWatch, DevOps Engineer UK - https://www.itjobswatch.co.uk/jobs/uk/devops%20engineer.do - six months to 9 Oct 2026.
9. ITJobsWatch, Data Engineer UK - https://www.itjobswatch.co.uk/jobs/uk/data%20engineer.do - 9 Oct 2026.
10. ITJobsWatch, Cloud Engineer UK - https://www.itjobswatch.co.uk/jobs/uk/cloud%20engineer.do - 9 Oct 2026.
11. ITJobsWatch, Embedded Software Engineer UK - https://www.itjobswatch.co.uk/jobs/uk/embedded%20software%20engineer.do - 9 Oct 2026.
12. Robert Walters UK, DevOps and data engineer salary pages - https://www.robertwalters.co.uk/our-services/salary-survey/dev-ops-engineer-salaries.html and .../data-engineer-salaries.html - 2026 (via search summary; direct fetch blocked).
13. Morgan McKinley, Cloud Engineer London salary guide - https://www.morganmckinley.com/uk/salary-guide/data/cloud-engineer/london - via search summary, accessed Oct 2026.
14. Robert Half UK, Cloud engineer London - https://www.roberthalf.com/gb/en/job-details/cloud-engineer/greater-london - via search summary, accessed Oct 2026.
15. get-in-it.de, Gehalt Embedded Systems - https://www.get-in-it.de/magazin/gehalt/gehalt-embedded-systems - 2026 (undated underlying data).
16. get-in-it.de, Gehalt DevOps Engineer - https://www.get-in-it.de/magazin/gehalt/gehalt-devops-engineer - 2026.
17. get-in-it.de, Gehalt Data Engineer - https://www.get-in-it.de/magazin/gehalt/gehalt-data-engineer - 2026.
18. PayScale, Early-Career Embedded Software Engineer salary, Stuttgart - https://www.payscale.com/research/DE/Job=Embedded_Software_Engineer/Salary/40e193ec/Early-Career-Stuttgart - 2026 (via search summary).
19. Italy Handbook, Tech Jobs in Italy: Hotspots and Salary Overview - https://italyhandbook.com/tech-jobs-in-italy-hotspots-and-salary-overview/ - 2026 estimates (via search summary; method not disclosed).
20. Jobmentis, DevOps and Cloud Engineer salary in Italy - https://www.jobmentis.com/en/salaries/devops-engineer/italy and /cloud-engineer/italy - 2026 (via search summary).
21. Indeed Italy, Reply "Ingegnere" salaries - https://it.indeed.com/cmp/Reply/salaries/Ingegnere - updated 18 Jul 2026 (via search summary).
22. Indeed Italy, STMicroelectronics, Infineon and Marelli salaries/adverts - https://it.indeed.com/cmp/Stmicroelectronics/salaries/Ingegnere , https://it.indeed.com/cmp/Infineon-Technologies/salaries , https://it.indeed.com/cmp/Marelli/salaries - 2026 (via search summary).
23. Studenti.it / JobPricing University Report on graduate pay, and FS Engineering selection - https://www.studenti.it/la-classifica-delle-lauree-che-pagano-meglio-nel-2026-chi-guadagna-di-piu-al-primo-impiego.html - 2026 (via search summary).
24. AlmaLaurea, XXVIII Rapporto 2026 (reporting via QuiFinanza/Money.it/Corriere Comunicazioni summaries) - https://www.almalaurea.it - 11 Jun 2026 (secondary).
25. Unioncamere/Excelsior ICT needs (via Corriere Comunicazioni summary) - https://www.unioncamere.gov.it/sites/default/files/articoli/2026-05/2026050173118634.pdf - May 2026 (via search summary; not read in full).
26. Gradcracker, Accenture Technology Analyst Graduate Programme 2027-2028 (London) - https://www.gradcracker.com/hub/269/accenture/graduate-job/85118/london-technology-analyst-graduate-programme-2027-2028 - Oct 2026 (via search summary; direct fetch blocked).
27. TargetJobs, Leeds Technology Analyst Graduate Programme 2026-2027 - https://targetjobs.co.uk/jobs/leeds-technology-analyst-graduate-programme-2026-2027-196420 - via search summary.
28. PrepLounge, consulting salary UK - https://www.preplounge.com/en/blog/consulting/salary/uk - 2026 (via search summary).
29. SalesforceBen, The State of Salesforce Salaries in 2026 - https://www.salesforceben.com/the-state-of-salesforce-salaries-in-2026/ - 2026 (via search summary; direct fetch timed out).
30. Kore1, SAP Consultant Salary Guide (2026) - https://www.kore1.com/sap-consultant-salary-guide/ - updated 24 Jul 2026.
31. Kore1, ServiceNow Developer Salary Guide - https://www.kore1.com/servicenow-developer-salary-guide/ and ZipRecruiter ServiceNow Developer - https://www.ziprecruiter.com/Salaries/Service-Now-Developer-Salary - Jul 2026 (via search summary).
32. DevOps.com, Kubernetes job postings analysis Q1 2025 - https://devops.com/most-devops-engineer-jobs-pay-upwards-of-140k-require-less-in-office-presence-and-prefer-senior-level-experience/ - 2025 (via search summary).
33. TSMC hiring and pay, Central News Agency (via Taiwan News) - https://www.taiwannews.com.tw/en/news/6316009 (and related CNA story) - 7 Mar 2026 (via search summary).
34. Foote Partners certification pay index (2017) and Mason Frank certification report (2022-23), as reported in SalesforceBen/SaaSGuru search summaries - dated and secondary; used only as weak evidence of a certification premium.

**Official statistics and labour-market data**
35. BLS, Network and Computer Systems Administrators, Occupational Outlook Handbook - https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm - May 2025 data.
36. BLS, Computer Support Specialists - https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm - May 2025 data.
37. BLS, Database Administrators and Architects - https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm - May 2025 data.
38. BLS, Computer and Information Research Scientists - https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm - May 2025 data.
39. Eurostat, ICT specialists in employment - https://ec.europa.eu/eurostat/statistics-explained/index.php?title=ICT_specialists_in_employment - 2025 data.
40. Bitkom, Der Arbeitsmarkt für IT-Fachkräfte - https://www.bitkom.org/Bitkom/Publikationen/Der-Arbeitsmarkt-fuer-IT-Fachkraefte-0 - 2026.
41. Indeed Hiring Lab, The labor market is tilting toward seniority - https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/ - 23 Jul 2026.
42. SignalFire, State of Tech Talent Report 2026 - https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026 - 22 Jun 2026.
43. CRA, Taulbee Survey 2025 (annual report, salaries, doctoral programs) - https://datavisualization.cra.org/TaulbeeReports/2025/ , .../salaries.html , .../doctoral.html - 2025/2026; CRA Taulbee update 2024 (via search summary) - https://cra.org/crn/2024/05/cra-update-taulbee-survey-shows-record-number-of-graduates-and-strong-enrollment-at-all-degree-levels.
44. UKRI, Get a studentship to fund your doctorate - https://www.ukri.org/what-we-do/developing-people-and-skills/find-studentships-and-doctoral-training/get-a-studentship-to-fund-your-doctorate/ - accessed Oct 2026.
45. NSF, Graduate Research Fellowship Program (GRFP) solicitation NSF 26-526 - https://www.nsf.gov/funding/opportunities/grfp-nsf-graduate-research-fellowship-program - 25 Aug 2026.

**Employers, certifications and practice**
46. Reply, 2025 annual financial report introduction - https://www.reply.com/en/investors/financial-reports/2025/introduction.html - 2026; Reply press release on FY2025 results - https://www.businesswire.com/news/home/20260312115475/en - 12 Mar 2026 (via search summary); Reply Q1 2025 release - https://www.reply.com/en/newsroom/financial-news/the-board-of-directors-approves-the-quarterly-report-dated-31-march-2025 - 12 May 2025.
47. Engineering Ingegneria Informatica, 2025 consolidated results - https://www.eng.it/en/news/press-releases/2026/03/engineering-approva-il-bilancio-consolidato-2025 - 30 Mar 2026. Recruiting drive coverage: https://www.fiscoetasse.com/rassegna-stampa/18267-selezione-per-giovani-laureati-presso-engineering-spa.html (undated, secondary); Revelio Labs headcount estimates - https://www.reveliolabs.com/companies/engineering-ingegneria/employees (secondary).
48. Accenture Italia hiring plans (historic) - https://www.fiscoetasse.com/rassegna-stampa/23986-assunzioni-per-oltre-duemila-consulenti-.html and https://www.agendadigitale.eu/people-and-change/formazione-sul-coding-e-nuove-assunzioni-accenture-scommette-sui-talenti-del-futuro/ - older years, via search summary.
49. CNCF, Certified Kubernetes Administrator (CKA) - https://www.cncf.io/training/certification/cka/ - accessed Oct 2026.
50. AWS, Certification overview - https://aws.amazon.com/certification/ - accessed Oct 2026.
51. Catchpoint, SRE Report 2025 - https://www.catchpoint.com/learn/sre-report-2025 - survey July-August 2024, 301 respondents.
52. DORA, 2025 State of AI-assisted Software Development - https://dora.dev/research/2025/dora-report/ - 2025; platform-engineering adoption figures via secondary summaries (DevOps.com, "DORA 2025: faster but are we any better", https://devops.com/dora-2025-faster-but-are-we-any-better/) - via search summary.
53. SAP ECC maintenance deadline and migration progress - https://www.theregister.com/2024/06/12/sap_ecc_support_deadline/ , https://www.intelligentcio.com/latam/2026/02/26/last-call-for-s-4hana-the-hidden-cost-of-staying-in-ecc-through-2027/ , https://cfotech.co.uk/story/eu-faces-growing-shortage-of-sap-s-4hana-specialists - 2024-2026 (via search summary).
54. Bosch/automotive cuts: Bosch press release, 30 Jan 2026 - https://us.bosch-press.com/pressportal/us/en/press-release-29632.html (project research file); Bosch car-software cuts - https://www.thelocal.de/20241122/germanys-bosch-plans-thousands-more-job-cuts-amid-weak-ev-demand (22 Nov 2024; via search summary); Etas cuts - https://www.it-daily.net/en/shortnews-en/bosch-plans-to-cut-up-to-400-jobs (via search summary).
55. Leonardo FY2025 results, 12 Mar 2026 - https://www.leonardo.com/en/press-release-detail/-/detail/12-03-2026-leonardo-board-of-directors-approves-fy2025-results-and-2026-guidance (project research file); Stellantis Italy exits - https://www.automoto.it/news/mirafiori-nuova-ondata-di-uscite-volontarie-altri-610-lavoratori-lasciano-la-storica-fabbrica-torinese.html (project research file, snippet-level, 2025).
56. STMicroelectronics Catania hiring - https://catania.liveuniversity.it/2026/02/08/stmicroelectronics-cresce-a-catania-in-arrivo-50-nuovi-posti-di-lavoro-nei-reparti-produttivi/amp/ - 8 Feb 2026 (via search summary).
57. GOV.UK, Skilled Worker going rates for eligible occupations - https://www.gov.uk/government/publications/skilled-worker-visa-going-rates-for-eligible-occupations - updated 29 Apr 2026 (project research file); Berlin ServicePortal, Blue Card - https://service.berlin.de/dienstleistung/324659/ - 2026 (project research file).
58. Project research files: careers/tech-data-and-ai.md and careers/industrial-automotive-defence.md, admetia/research - early Oct 2026 (used for leads and cross-checks; figures reused only where the primary URL is cited above).

**Unverified or not retrieved (for transparency):** official Italian role-specific IT salary tables (Hays Italia, Michael Page Italia 2026 guides); US graduate pay at Accenture/Deloitte; Italian PhD scholarship amount for 2026; Taulbee 2024-25 placement split; Levels.fyi cloud/embedded/solutions-architect role pages (not found); hours-per-week surveys by role. Interview formats, hiring calendars and tier lists are practitioner convention and author synthesis.

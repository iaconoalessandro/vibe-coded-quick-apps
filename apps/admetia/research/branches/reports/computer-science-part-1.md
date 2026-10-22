# Computer Science, part 1: Product software engineering

## 1. What this branch is

This part of the computer science branch covers the people who build and test the software products that customers and employees use: websites, apps, payment systems, games and the services behind them. It also covers the technical people who help sell or promote those products to other engineers. Seven role families are covered: backend, frontend, full-stack, mobile, game programming, quality assurance (QA) and test automation, and customer-facing technical roles (solutions/sales engineering and developer advocacy). Infrastructure, data engineering, embedded systems, enterprise IT and research are in part 2; AI/ML engineering, data science, cybersecurity, quant development and product management are other branches and appear here only as cross-references. The honest headline for a student in October 2026 is that this is still one of the best-paid career families for graduates, but the entry-level door is narrower than it was in 2021, and the gap between the best-paying employers and the average one is very large.

Scope notes: (1) Pay figures mix sources of different quality. Levels.fyi is self-reported and skews toward big tech, scale-ups and well-paid hubs, so it overstates typical pay; ITJobsWatch is based on UK job-advert salaries and is noisy for small samples; Italian figures rest on small samples and secondary sources. (2) Hours and stress figures are practitioner consensus, not survey data, because no reliable survey by role family was found; they are marked as such. (3) "Entry" means 0-2 years of experience, "~5 years" means mid-level to senior, "senior" means 8+ years or a senior/staff title. (4) Exchange rates are not converted; each figure is in its original currency. (5) Items marked "unverified" could not be checked against a primary source during this research. (6) Searching was cut off by a tool limit partway through, so some areas (game programmer pay outside Canada, DevRel pay, Italy-specific QA and game studio data) have "no reliable data found" notes instead of numbers.

## 2. Map of areas and sectors

### 2.1 Overview: who employs software engineers

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

### 2.2 Backend engineering

**Definition.** Backend engineers build the parts users never see: servers, databases, APIs (the interfaces other software calls), payment logic, search, messaging, and the data processing behind an app.

**In practice.** You write services in languages such as Java, Go, Python, C#, Kotlin, Node.js or Rust, design database tables, make systems fast and reliable, and respond to incidents. At large employers you may own one small service; at small ones you own everything from the database to deployment.

**Employers.** Every large software company, banks and trading firms, e-commerce and fintech, telecoms, and IT services firms building systems for clients. In the 2025 Stack Overflow survey, back-end developers were 14.2% of respondents and full-stack developers 27%.

### 2.3 Frontend engineering

**Definition.** Frontend engineers build what the user sees and touches in a browser: pages, forms, dashboards, interactive components and the accessibility and performance of them.

**In practice.** Mostly JavaScript or TypeScript with a framework (React is the most common; Vue and Angular are widespread in Europe), CSS, design systems, and a lot of collaboration with designers and product managers. Generative-AI tools can produce standard interfaces quickly, which is one reason the front-end share of engineering hiring has fallen faster than other specialties (SignalFire 2026).

**Employers.** Product companies, e-commerce, agencies, banks (customer portals and trading screens), consultancies, public-sector digital services.

### 2.4 Full-stack engineering

**Definition.** Full-stack engineers work on both sides: the interface and the server code. The title is the single most common developer self-description in the 2025 Stack Overflow survey (27%).

**In practice.** Typical at startups, small product teams and agencies where one person ships a feature end to end. At larger firms, "full-stack" often means mostly one side with the ability to work on the other.

**Employers.** Startups, scale-ups, agencies, freelancers, internal product teams at non-tech firms.

### 2.5 Mobile engineering

**Definition.** Mobile engineers build apps for phones and tablets: iOS (Swift, SwiftUI), Android (Kotlin, Jetpack Compose) or cross-platform (Flutter, React Native, Kotlin Multiplatform).

**In practice.** You work with app-store release rules, device fragmentation (hundreds of Android models), offline behaviour, battery and performance limits, and slow release cycles compared with the web.

**Employers.** Consumer apps (banking, ride-hailing, delivery, social, streaming), big tech platform teams, fintech and neobanks, agencies, and companies whose app is a thin client onto a larger product.

### 2.6 Game development

**Definition.** Game programmers write gameplay, engine, graphics, tools, networking and AI code for games, usually in C++ or C# (Unreal, Unity, in-house engines).

**In practice.** The work is deeply technical and performance-sensitive, but the industry is project-driven with crunch (extended overtime before release), studio closures and low pay relative to other software sectors. In the 2026 GDC State of the Game Industry survey (more than 2,300 professionals), 28% had been laid off in the past two years, 33% in the US, and half said their employer had layoffs in the past 12 months; 74% of the surveyed students worried about future job prospects. 52% of professionals said generative AI is hurting the industry, up from 30% the year before.

**Employers.** Large publishers (Electronic Arts, Ubisoft, Take-Two, Activision Blizzard under Microsoft), engine and platform companies (Epic Games, Unity), mobile game companies, independent studios, and adjacent industries that use game engines (simulation, automotive, film, architecture). Italy has small studios and a Milan Ubisoft site (the Milan site is unverified in this research); most Italian graduates targeting AAA games relocate.

### 2.7 Quality engineering (QA, test automation, SDET)

**Definition.** Quality engineers make sure software works. Manual QA tests by hand; test automation engineers write code that runs tests automatically; an SDET (Software Development Engineer in Test) is a developer who builds testing frameworks and tools.

**In practice.** The role has shifted from manual checking toward automation and "shift-left" practice, where developers own more of the testing. BLS counted 187,600 US QA analysts and testers in 2025 with median pay US$104,300 and 6% projected growth, slower than developers.

**Employers.** Software companies, banks and insurers (heavy regulatory testing), game studios, automotive and medical-device software, and IT services firms that sell testing as a service.

### 2.8 Customer-facing technical roles

**Definition.** Solutions engineers and sales engineers (the same job under different names) are the technical experts who join sales teams: they run product demos, answer security and architecture questions, run proofs of concept, and help customers decide to buy. Developer advocates (DevRel) explain a product to developers through talks, code samples, documentation, videos and community work.

**In practice.** Solutions engineering is a technical sales job with quota-linked pay. Developer advocacy is a communications job for people who can code; it is a small, volatile field that often expands and contracts with company marketing budgets. SignalFire reports the sales-engineer share of tech headcount up about 11% since 2022 and forward-deployed engineers (engineers embedded with customers, popular at AI companies) up about 30%.

**Employers.** B2B software vendors (cloud, data, security, developer tools), consultancies, and AI companies.

## 3. Role families

### 3.1 Backend software engineer

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

### 3.2 Frontend engineer

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

### 3.3 Full-stack engineer (especially at startups and agencies)

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

### 3.4 Mobile engineer

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

### 3.5 Game developer (programmer roles at studios)

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

### 3.6 QA / test automation engineer / SDET

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

### 3.7 Solutions engineer / sales engineer / developer advocate

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

### Role family summary

| Role family | Typical hours/week (peak) | Stress 1-5 | People 1-5 | Quant 1-5 | Entry comp: US / UK / Italy (approx., currency, base or total) | Entry difficulty 1-5 |
|---|---|---|---|---|---|---|
| 3.1 Backend | 40-48 (55-70) | 3 | 3 | 4 | US$141k-155k total (Levels.fyi entry, big-tech-skewed); London £56.6k total (Levels.fyi, 2026); Italy €28k-35k base (Italy Handbook 2026) | 4 |
| 3.2 Frontend | 40-45 (50-60) | 3 | 3 | 3 | No reliable US entry figure (US software entry median US$141k-155k is big-tech-skewed); UK adverts median £65k all levels; Italy €30k base (junior estimate) | 3-4 |
| 3.3 Full-stack | 40-50 (55-70) | 3 | 3 | 4 | No reliable US entry figure (all-level median US$172.5k total); UK adverts median £60k all levels; Italy €28k-35k base (general developer) | 3 |
| 3.4 Mobile | 40-48 (50-60) | 3 | 3 | 4 | No reliable US entry figure (all-level median US$215k-225k total); UK adverts median £85k all levels (noisy); Italy €31k base (junior estimate) | 4 |
| 3.5 Game developer | 40-50 (60-80 in crunch) | 4 | 3 | 4 | No reliable data found for US or UK; Canada proxy: EA CA$105k, Ubisoft CA$71k total; no reliable Italy data | 4 |
| 3.6 QA / SDET | 38-45 (50-55) | 2 | 3 | 3 | US$61k (BLS 10th percentile base, May 2025) to about US$100k; UK £40k-60k (adverts, noisy); Italy about €25k-32k (secondary) | 2 (4 for SDET at top firms) |
| 3.7 Solutions / sales engineer / DevRel | 40-50 (55-65) | 3 | 4-5 | 3 | No reliable entry figure (US all-level median US$204k total); UK adverts median £50k base vs Levels.fyi London £126k total; no reliable Italy entry figure | 4 |

## 4. Banks vs. other employer types

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

## 5. Which backgrounds fit this branch

### (a) Background ratings

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

### (b) Role-family matrix (S = strong, P = possible, X = stretch)

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

## 6. Sources

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

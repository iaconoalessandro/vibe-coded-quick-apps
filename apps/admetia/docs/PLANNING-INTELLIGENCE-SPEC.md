# Planning intelligence: what someone weighs before moving

Brief for whoever builds the next layers of Admetia (a person or an AI working in this repository).
It expands eight areas. For each one it lists everything the area could cover, so nothing is
decided by what a short prompt happened to mention. **Do not build all of it at once.** Section 0
says how to work; section 9 says what to build first.

Everything stated as an example below ("Germany does X") comes from general knowledge and is
**unverified**. It is there to show the kind of thing to research. Nothing goes on the site until it
passes the claims method in section 0.3.

---

## 0. Read this first

### 0.1 What Admetia is becoming

Not a master's calculator. A **planning tool and encyclopedia for moving abroad to study, do an
internship, start a first job or change country as a worker**: everything a person should take into
account, per country and per city, so that the decision is informed before any application or permit.
Immigration rules are one input (already built, deliberately not expanded further). The new work is the
**planning side**: how hiring works, internships, timing, money, where a move leads, daily life, risk,
and the reader's own situation.

### 0.2 What exists, so it is not rebuilt

- **The Atlas** (`map.html`, `js/page-map.js`): 46 countries, 200 hubs, one country page each.
  Records in `data/atlas/<id>.js`; visa files in `data/atlas/visas/<id>.js`; shapes in `geo.js`;
  `stats.js` (IMF indicators) and `life.js` (generated). Read `docs/ATLAS-PROGRESS.md` first.
- **Country page sections today:** Key figures · Official advice · Hubs (map, demand by role family,
  standing, employers, programmes) · Hubs compared · **Visas and permits** (9 situations, per passport) ·
  **Working there** (rows differ between countries: ~35 different topic names, only "Where demand is
  now" is on most) · **Life there** (v1: climate, daylight, air, time zone, English, prices, safety,
  recorded crime, hours, health, how locals come across) · **First weeks** (7 fixed steps, per passport) ·
  Research · Sources.
- **The research library** (`research/`): `getting-in/` (admissions, applications-and-interviews,
  breaking-in, employer-pipelines, recruiting-calendar), `money/` (costs-and-funding, salaries-and-roi,
  scholarships), `places/` (countries-and-cities, student-logistics, origin-country playbooks),
  `decisions/` (decision-framework, timing-and-sequencing, long-horizon-careers, programme-choice),
  `evidence/` (base-rates-and-failure-modes, how-numbers-mislead, mid-tier-school-outcomes), `careers/`
  (11 sector files), `countries/` (46 country briefs), `visas_immigration/` (46 guides + source registers).
- **Three calculators** (MBA, business master's, computing master's) and `data/deadlines.js`.
- **Two ways data enters the site.** (A) *Generated* from one official source covering every country
  (`tools/atlas-stats.js`, `tools/atlas-life.js`): comparable, refreshable. (B) *Researched and cited*
  per country in a fixed schema (the visa files, First weeks): richer, slower, needs review dates.
  Choose A whenever a source covers all 46 countries; use B when it does not.

### 0.3 Rules every new piece must follow (the site's method)

1. **Every statement is a claim** with a tag (`data`, `employer-stated`, `practitioner consensus`,
   `anecdotal`), a source (https page or a research brief that already verified it) and the date it
   was read. Tests fail on an untagged, unsourced, undated or unused claim.
2. **Same rows on every country**, in the same order. Where there is nothing, the row says so
   ("not covered yet", "no figure in this source") and a test lists the gaps. Never fill a gap with a
   guess, and never cite a source for something it does not say.
3. **Say the scope of each statement:** whole country, a region, one city/hub, a sector, or a
   passport group. Use the "Whole country / By city" chips from Life there.
4. **Passport- and stage-aware where it matters.** Reuse the passport switch (EU/EEA/Swiss, UK, US,
   other; outside Europe only EU and UK). Add a *stage* (section 0.4) when a statement changes with it.
5. **English and Italian** for every sentence (pairs in the data, or `i18n-it.js` entries). The i18n
   test checks numbers match.
6. **Never rank what cannot be compared** (recorded crime, anything defined differently per country),
   and never state a stereotype as a fact about a people. Perception surveys are labelled as
   perception, with who answered.
7. **Review dates.** Anything that changes (fees, rules, calendars) carries "checked" and "review by";
   past that date the page warns the reader.
8. **Private by default.** Anything the reader enters (passport, stage, situation) stays in the
   browser (`js/storage.js`) and is wiped by "Clear everything". Sensitive items are optional, are
   never sent anywhere, and only ever *surface information*, never *give advice*.
9. **Not advice.** Pages inform; they state rules and evidence and say which official page to check.
   For decisions with legal, tax or medical consequences, they say to ask a professional.

### 0.4 The reader model (one vocabulary for all eight areas)

- **Stage:** applying to a master's · master's student · looking for an internship · recent graduate
  · employed and moving · career switcher · remote worker/freelancer · accompanying partner.
- **Path:** master's · internship (curricular / voluntary / post-graduation) · first graduate job ·
  experienced hire · working holiday / gap year · research/PhD · company transfer.
- **Origin:** a country (the passport group decides rules; the origin also decides recognition,
  tax ties, flights, language, diaspora).
- **Destinations:** up to three compared side by side.
- **Horizon:** how long they expect to stay (a semester, two years, permanently).

Every block below should say which stages and paths it matters to, so the planner can show only what
applies.

### 0.5 How to work on any area (for the AI)

1. **Audit** what the site and `research/` already say about the area; list it with file paths.
2. **Propose the fixed schema** (the rows every country will have) and the evidence tag each row can
   honestly carry. Show it before filling it.
3. **Choose the pipeline:** generated from a source covering all 46 (A), or researched and cited (B).
4. **Pilot on four countries** that differ a lot (suggested: Germany, Japan, United Arab Emirates,
   Ireland), render them, fix the schema, only then do the other 42.
5. **Write the test first** (completeness, sources, ranges, the passport/stage coverage, Italian
   numbers) and extend `docs/ATLAS-PROGRESS.md`.
6. **Report gaps honestly**: counts of "not covered", not a quiet fill.
7. **Keep each area's page block under a screen or two**; put the long form on a topic page (section 8).

---

## 1. How hiring actually works there

**The planning question:** "What is the real way into a job here, and does my plan put me on it?"
Entry routes differ more between countries than salaries do, and a plan that ignores them fails
quietly (a master's that the local market does not value; an internship nobody converts).

**Matters most to:** recent graduates, master's applicants choosing a country, career switchers,
experienced hires. **Paths:** first job, internship-to-job, experienced hire.

### 1.1 What the block could cover

- **The routes in, ranked for this country**, each with what it is and who uses it: graduate schemes
  and trainee programmes (Traineeprogramm, management associate, rotational), direct application,
  **internship-to-offer conversion**, dual study and **working-student** jobs (Werkstudent), **apprenticeship/
  alternance** (France), campus recruiting (US, Asia), **bulk new-graduate hiring** (Japan's shinsotsu
  cycle; Korea's open recruitment seasons; China's autumn and spring campus recruitment; India-style
  placements), civil-service and public-sector exams (concorsi, state exams), agencies and headhunters,
  referrals and networks, startup hiring, contract/freelance first, company transfer.
- **How important a master's is here:** expected, helpful, irrelevant, or a handicap (overqualified).
  Whether foreign degrees are recognised without paperwork, with an evaluation, or not for regulated
  professions (law, medicine, engineering, teaching, architecture, accountancy).
- **School and brand effects:** target/semi-target lists where they exist, school-blind and skills-
  based hiring, how alumni networks work, whether a foreign degree travels.
- **Language reality at work**, by role family: English-only teams, bilingual, local language required;
  the level (B2/C1) and the evidence employers ask for (certificate, interview, test). Link to the
  existing Language row.
- **Application norms:** CV length and format; photo, age, marital status (expected in some countries,
  illegal to ask in others); cover letter; references (required or not); transcripts and certificates
  (Zeugnisse, translated and apostilled copies); salary expectation in the application; LinkedIn vs
  local networks (Xing, Wantedly, Welcome to the Jungle, StepStone, Seek, BOSS Zhipin…); background and
  reference checks.
- **Selection process:** number and type of stages (online tests, video interviews, assessment centres,
  case interviews, coding tests, panel interviews, group exercises), typical length from application to
  offer, interview language, dress and punctuality norms, whether you negotiate or not, how an offer and
  a contract arrive (probation, 13th/14th salary, notice).
- **Sponsorship reality for non-citizens:** which employers actually sponsor, labour-market tests,
  quotas and caps (link to Visas, do not repeat the rules), how early to ask, what an employer wants to
  hear.
- **Where to look:** official job portals, employer career pages, graduate job boards, career fairs,
  university career services, recruiters worth knowing, communities.
- **Named employers with programmes**, by hub (extends the existing employers list: programme name,
  intake size and window, languages, whether it takes international graduates).
- **Evidence of how it goes for people like the reader:** share of recent graduates employed, time to
  first job, share of international graduates who find work, conversion and return-offer rates,
  graduate unemployment, youth unemployment, over-qualification, share of graduates in jobs that need a
  degree.
- **What not to do:** the common mistakes per country (applying in the wrong window, a CV format that is
  rejected, skipping the internship that is the real entry).

### 1.2 How it varies (the dimensions to capture, not just a text)

Entry route share (internship-led vs graduate-scheme-led vs network-led) · cyclical vs rolling vs fixed
national hiring season · master's expected vs not · language barrier by role family · degree-brand
sensitivity · apprenticeship/dual culture · public sector weight · sponsorship readiness of employers.

### 1.3 Data and sources

- **Generated (A):** Eurostat recent-graduate employment and unemployment (edat_lfse_24, une_rt_a),
  over-qualification rates, OECD Education at a Glance (employment by attainment, foreign-born
  graduates), national statistics offices, ILOSTAT. Counts and shares only.
- **Researched (B):** employer graduate pages, national employment agencies, university graduate
  outcome reports (HESA Graduate Outcomes, CGE France, Destatis), professional bodies for regulated
  professions, EURES, official CV/application guidance pages (EURES, Make it in Germany, Study in…).
  `research/getting-in/employer-pipelines.md`, `breaking-in.md`, `recruiting-calendar.md` and the
  existing "Working there" rows are the starting material.
- **Tag it honestly:** statistics are `data`; "most graduates enter via X" without a statistic is
  `practitioner consensus` and says so; one person's account is `anecdotal` and is not used as a rule.

### 1.4 Deliverables

- A **"Getting hired here"** block, same rows everywhere: *Main routes in* (ranked, with the
  evidence behind the ranking) · *Is a master's expected* · *Foreign degrees* · *Language at work* ·
  *Application norms* · *Selection process* · *Sponsorship in practice* · *Where to apply* ·
  *Employers with programmes (by hub)* · *Common mistakes* · *Graduate outcomes (numbers)*.
- Normalise the existing **Working there** rows to a fixed set (see section 4 for pay and cost rows) and
  report countries missing a row.
- A topic page **"How hiring works in 46 countries"**: the same table across countries, filterable by
  route and role family.
- Planner hook: for stage, path and role family → the route most used in the chosen country, what it
  needs, and which dates apply (section 3).

---

## 2. Internships as a path of their own

**The planning question:** "Can I do an internship there, is it paid, when do I apply, and does it lead
anywhere?" Internships are legally and practically different in every country, and are often the real
door into the job.

**Matters most to:** master's students, bachelor's students, recent graduates. **Paths:** internship,
internship-to-job. The permit side already exists in the visa files; this block is everything else.

### 2.1 What the block could cover

- **The kinds, with the local name:** curricular/compulsory (stage obligatoire, tirocinio curriculare,
  Pflichtpraktikum), voluntary/extracurricular during studies, **post-graduation** internship, summer/
  vacation scheme and spring week, placement year/sandwich year, co-op (Canada, US), industrial thesis
  internship, research internship, traineeship (Volontariat, Erasmus+ traineeship), apprenticeship and
  alternance, working student. Which exist, which are common, which are mostly a trap.
- **Legal status:** student or employee; whether a contract is required; the university agreement
  (convention de stage) and who must sign it; whether you must be enrolled; whether graduates can still do
  one and for how long after graduating.
- **Pay:** the legal minimum, whether unpaid is lawful and when it stops being lawful (duration
  thresholds), typical pay by sector, tax and social contributions, whether pay changes the status
  (health insurance, student benefits, grants), expenses and housing support.
- **Duration and hours:** minimum and maximum length, weekly hours, how many internships one person can
  do, whether they can be repeated at the same employer.
- **Access by passport and enrolment:** whether a foreign student can do one while enrolled elsewhere,
  home-university rules for an internship abroad (credits, ECTS, insurance), the internship/hosting
  permit routes (link to Visas), Erasmus+ traineeship eligibility and grant amounts by country group,
  national schemes (e.g. research internship programmes), working-holiday as a route into internships.
- **When to apply:** windows by employer type (link to section 3): UK summer schemes open almost a year
  ahead; many Continental internships are rolling; Japan's internship seasons; Korea's intern recruiting.
- **Where to find them:** official portals, university career offices, EURES, employer programmes, the
  intermediaries worth using, and scam patterns (fee-charging "placement" agencies, fake offers).
- **Quality and outcomes:** conversion/return-offer rates where published, share of interns paid, typical
  tasks, how a CV reads with it, whether it is a screening filter.
- **Money and logistics:** cost of an unpaid one (housing in London or New York in summer), insurance
  needs, accident cover, taxes, how to leave on bad terms, how to complain (labour inspectorate).
- **What it counts for:** university credit, the recruitment pipeline, a later visa application, a CV.
- **Red flags:** unpaid beyond the lawful limit, no agreement, tasks of a regular employee, no
  supervisor, "internship" as probation, visa mismatch.

### 2.2 How it varies

Paid-by-law vs not · agreement mandatory vs not · enrolled-only vs graduates allowed · maximum length ·
central place in hiring vs marginal · calendar fixed vs rolling · who may do it on which permit.

### 2.3 Data and sources

- **Researched (B)**, per country: ministry of labour and education pages, labour codes, national
  minimum-wage tables, the visa files' internship routes (reuse their register ids), university
  internship offices, Erasmus+ programme guide and national agency pages, EU Quality Framework for
  Traineeships and national transpositions. Employer programme pages for conversion claims.
- **Generated (A) where possible:** minimum wage tables (Eurostat earn_mw_cur, ILOSTAT), Erasmus+
  grant rates by country group (a single official table).
- Research material already in `research/getting-in/recruiting-calendar.md`,
  `research/places/visas-and-work-rights.md` and the visa guides' Caso 3.

### 2.4 Deliverables

- An **"Internships here"** block with fixed rows: *Kinds that exist* · *Legal status and agreement* ·
  *Pay (law and typical)* · *Length and hours* · *Who can do one (enrolment, passport)* · *When to apply* ·
  *Where to find* · *What it leads to (numbers)* · *Red flags*.
- A topic page **"Internships in 46 countries"**: one comparison table (paid? agreement? length? graduates
  allowed?) plus a how-to-choose guide.
- Planner hook: stage "internship" → timeline (section 3), budget (section 4), permit (Visas), and a
  checklist for the university agreement.

---

## 3. The calendar, worked backwards

**The planning question:** "If I want to start in September 2027, what has to happen, and when?" Most
planning failures are timing failures: a test booked too late, a permit that takes longer than the
start date allows, a recruiting window that closed a year earlier.

**Matters most to:** everyone, at every stage; it is the planner's backbone.

### 3.1 What the block could cover

- **The academic year** per country (start, end, terms/semesters; April start in Japan; southern-
  hemisphere years; intake rounds), master's length (1 year vs 2, which decides whether an internship fits).
- **Application deadlines** for programmes (link to `data/deadlines.js` and the calculators), rounds
  and rolling admissions, document and test validity windows (language tests, GMAT/GRE, criminal record
  certificates, apostilles, translations), the order in which documents must be obtained.
- **Scholarship and funding deadlines** (often earlier than admission), loan application lead times.
- **Recruiting calendars** by employer type and role family: fixed national cycles (Japan, Korea,
  China), cyclical (UK banks, Big Four, consulting), rolling (most tech, startups), public-sector exam
  dates; internship windows; when offers expire.
- **Permit and visa lead times** (reuse the visa files' real processing times), including the rule that
  applications must be filed before graduation or before expiry, and appointment waits by consulate.
- **Housing lead times:** when the student rush starts and ends (September in most university towns),
  how far ahead to look, contract start dates, when deposits are due, short-term bridging options.
- **Closures and slow seasons:** August in France, Italy, Spain; Golden Week and New Year in Japan;
  Lunar New Year; Ramadan and summer in the Gulf; Christmas break; public-holiday counts; when offices
  and employers are unreachable.
- **Money calendar:** fiscal year and tax filing windows, 13th/14th salary months, when the first pay
  arrives (monthly in arrears is standard; some pay late), deposit refunds.
- **Arrival timing:** best and worst months for arriving (weather, daylight, rent market, a probation
  that ends before winter), school-year constraints for families, flight-price seasons.
- **Graduation-to-job timeline:** how long between final exam and degree date, how long a job-search
  permit runs, the date from which a permit clock starts.
- **Typical total time:** from decision to first payslip, in months, by path.

### 3.2 How it varies

Fixed national cycle vs rolling · academic year start · permit processing time · housing market
seasonality · national closure periods · fiscal-year timing.

### 3.3 Data and sources

- **Generated (A):** public-holiday counts and dates (Nager.Date or the national gazettes; check licence),
  academic calendar anchors (ministries), fiscal year (OECD tax database), Ramadan/lunar dates computed.
- **Researched (B):** official academic calendars, ministry and university deadline pages, national
  recruiting-season sources (Japan's Keidanren agreement and MEXT/METI notices, Korea's recruiting
  surveys), the visa files' lead times, employer programme pages.
- Existing: `data/deadlines.js` (120-day stale banner), `research/getting-in/recruiting-calendar.md`
  (UK, FR, DACH, IT, ES, NL, US only; the gap is the other 39).

### 3.4 Deliverables

- A **"Calendar"** block per country with fixed rows: *Academic year and intakes* · *Typical programme
  deadlines* · *Recruiting windows by role family* · *Internship windows* · *Permit and visa lead times* ·
  *Housing lead time* · *Closure periods and public holidays* · *Fiscal year*.
- **The back-planner (a tool):** pick a target start date, a path and a destination → a dated timeline of
  milestones ("language test valid until…", "apply for the permit by…", "start housing search by…"), with
  warnings when the plan is already too tight and the source of each lead time. Dates are *typical*, say
  so, and link the official page.
- A topic page **"Year-in-the-life calendar for 46 countries"**.

---

## 4. The full cost of the plan

**The planning question:** "What will this cost in total, how much cash do I need on arrival, and how
many months can I last before the first salary?" Prices per country are not enough; people fail on
cash timing (deposits, blocked accounts, one-off costs) more than on monthly cost.

**Matters most to:** applicants and students (tuition and funding), graduates and workers (relocation).
**Paths:** all.

### 4.1 What the block could cover

- **Before you leave:** application and test fees (IELTS, TOEFL, GMAT/GRE, language certificates),
  document legalisation, apostilles and sworn translations, credential evaluation, visa and permit fees,
  medical exams and vaccinations, criminal-record certificates, the blocked account or proof of funds,
  insurance, flights, visa-centre fees, courier costs.
- **One-off on arrival:** rent deposit (months of rent; legal cap per country), agency fee (who pays),
  first month in advance, temporary housing, furniture, bedding and basics, SIM and device, transport pass
  deposit, residence-card fee, registration fees, bank account fees, notary fees (Turkey, Malta), a
  cheque guarantee (Qatar's post-dated cheques), local-guarantor fees.
- **Recurring monthly:** rent by hub (existing metric), utilities, internet, food, local transport,
  health insurance (public contribution or private), phone, tuition instalments, student-union fees,
  social contributions, sports/leisure, language classes, remittances.
- **Annual:** tuition, permit renewals and fees, health charges, tax filings, flights home, insurance
  renewals.
- **Income side:** student work allowance (hours × typical wage), internship pay, scholarships, grants,
  graduate pay by hub (existing wage metric) and net pay after tax and social contributions (existing
  "Tax and net pay" rows), employer relocation packages, tax reliefs for newcomers (visa file `tax`).
- **Cash flow and runway:** cash needed on day one, months of runway with no income, the funding gap,
  when the first pay lands (monthly arrears), when deposits come back.
- **Return on the plan:** tuition + living + forgone salary vs expected salary uplift, break-even in
  years, with the caveat from `research/evidence/how-numbers-mislead.md`.
- **Funding sources:** scholarships (government, university, employer), loans (home vs host, repayment
  from abroad), employer sponsorship and its clawback clauses, family guarantor, savings, work-study.
- **Currency and cost shocks:** exchange-rate sensitivity (home vs local currency), price inflation,
  rent-increase caps and rent control, a rent shock in the first lease year.
- **Cost of leaving:** early lease break, exit taxes and clearance (Hong Kong, Singapore), unrecovered
  deposits, flights, shipping, pension and social-security refunds (Malaysia EPF, Singapore CPF rules).
- **Hidden and unexpected:** fines for missed registrations, late-registration penalties, the emergency
  tax rate if a tax number is late, medical costs for the uninsured, scam losses.
- **Budget profiles:** frugal / standard / comfortable, student vs worker, shared flat vs alone, single
  vs partner vs family.

### 4.2 How it varies

Deposit rules and size · agency fees · health insurance model (public contribution vs compulsory private
vs employer) · tuition for non-EU students · student work limits · tax and social contribution burden ·
rent-to-pay ratio by hub · typical first-pay delay.

### 4.3 Data and sources

- **Generated (A):** statistics-office rents (Eurostat, national), average earnings (Eurostat/ILOSTAT),
  minimum wages, price level (IMF, done), exchange rates (ECB reference rates), visa fee tables (from the
  visa files' figures), tax-and-contribution rates (OECD Taxing Wages), student support rates.
- **Researched (B):** university cost-of-living estimates (`employer-stated`; institution-published),
  tenancy law (deposit caps, who pays the agent), official health-fund contribution tables, language-test
  price lists, insurance requirements from the visa guides.
- **Mark crowd-sourced prices** (Numbeo-style) as `anecdotal` and do not use them as the figure of record.
- Existing: `research/money/costs-and-funding.md`, `salaries-and-roi.md`, `scholarships.md`, hub wage and
  rent metrics, the visa routes' fees.

### 4.4 Deliverables

- A **"Cost of the plan"** block per country/hub: fixed rows for pre-arrival, one-off arrival, monthly,
  annual, income, runway; each line sourced and dated, with the scope chip (country vs hub).
- **The budget tool:** inputs (path, hub, origin, profile, months, savings, funding) → totals (pre-arrival,
  day-one cash, monthly, runway, funding gap, break-even for a master's), editable assumptions, shareable
  summary (stays in the browser).
- A topic page **"What 46 countries cost to arrive in"**: day-one cash, deposit rules, monthly baseline.

---

## 5. Where it leads next

**The planning question:** "Is this a destination or a stepping stone? What does it do to my next move,
and what happens if I stay or go home?" A move is also a bet on the second move.

**Matters most to:** graduates and workers deciding where to start; master's applicants choosing between a
home and a foreign programme. **Paths:** all.

### 5.1 What the block could cover

- **Career progression in the hub:** typical ladder and timing per role family, how quickly pay grows,
  how common promotion from graduate level is, how deep the local market is above entry level.
- **Stay rates:** the share of international students who stay after graduating, and for how long (OECD
  publishes stay rates by country), how foreign graduates fare compared with locals.
- **Corridors and stepping stones:** which hubs feed which (Dublin and Luxembourg to London, Paris and
  Brussels; Singapore to regional head offices; Dubai across the Gulf; Amsterdam, Frankfurt, Zurich),
  intra-company transfers and their rules, regional headquarters, how an employer's name travels.
- **What travels and what does not:** whether the degree and the employer are recognised at home and
  elsewhere, whether the language of work is portable, whether licences and professional experience
  transfer, how the network (alumni, colleagues) carries over.
- **Long-term residence and citizenship timeline:** link to the Visas "staying for good" situation,
  whether years as a student count, dual-citizenship rules, language tests for naturalisation.
- **Specialisation lock-in:** the dominant sector in a city (Frankfurt banking, Munich cars, Eindhoven
  semiconductors) and how that narrows or widens later options.
- **Going home:** recognition of the degree, tax rules for returners (Italy's incentives, other
  countries' returnee regimes), re-entering the home labour market, pension and social-security
  continuity, the home network's memory, the home-country reaction to a foreign background.
- **Moving on:** exit rules (tax clearance, pension refund), how a permit holder changes country,
  second-country programmes that count the first, the "second master's" question.
- **Academic and research path:** PhD funding in the country, how a foreign master's leads to a PhD,
  academic job market, research visas.
- **Entrepreneurship:** startup visas, ecosystem size and funding, whether graduates can start a company
  on a student or job-search permit.
- **Time-boxed outcomes:** where graduates are five years later (employment, sector, country).

### 5.2 How it varies

Stay rates · share of foreign graduates in the labour market · hub-to-hub feeder routes · portability of
credentials and licences · returnee incentives · permanent-residence timeline and rules.

### 5.3 Data and sources

- **Generated (A):** OECD stay rates and International Migration Outlook tables, Eurostat residence
  permits by reason and change of status, national immigration statistics, Eurostat mobility of
  graduates, hub standing metrics already in the Atlas.
- **Researched (B):** returnee-regime pages of tax authorities, graduate tracer studies, national
  recognition bodies (ENIC-NARIC and national), employer career-path pages (`employer-stated`), the visa
  files' `stay` and `tax` situations.
- Existing: `research/decisions/long-horizon-careers.md`, `research/places/countries-and-cities.md`,
  the Standing metric (national / region / world), `adjacentPaths`.
- Where evidence is thin (progression speed), say `practitioner consensus` or "not covered yet", not a
  made-up curve.

### 5.4 Deliverables

- A **"Where it leads"** block: *Stay rate* · *Typical progression* · *Corridors from here* · *What
  travels (degree, employer, language, licence)* · *Staying for good (timeline)* · *Going home* ·
  *Moving on*.
- A topic page **"Stepping-stone cities"** (a map of corridors) and **"Going home: returnee regimes"**.
- Planner hook: a "second move" view: pick the destination, see the corridors out and the cost of leaving.

---

## 6. Life there (extend what exists)

**The planning question:** "Will I actually want to live there?" The first version covers climate,
daylight, air, time zone, English, prices, safety, recorded crime, working hours, health spending and
how locals come across. This is everything that remains.

**Matters most to:** everyone, and most to people with families, health needs or strong preferences.
Scope is a mix: say per row whether it is whole country, region or city.

### 6.1 Topics still to cover

- **Housing in practice** (city): how to find a place (portals, agencies, university housing,
  share-houses), how long it takes, whether furnished is the norm, lease length and notice, tenant
  protection and rent control, who pays the agent, deposit rules, scams, student-housing availability,
  how competitive the market is, flat-sharing culture, registration of the address (link to First
  weeks).
- **Language in daily life:** which language you need for shops, doctors, offices, landlords; how much
  English works in daily life vs at work; local-language course availability and price; language of
  schooling.
- **Work culture:** hours and overtime norms, hierarchy, communication style, dress, lunch, attitude to
  vacation, **statutory annual leave and public holidays**, notice and probation, parental leave, sick pay,
  right to disconnect, works councils and unions, flexible/remote norms.
- **Social life:** making friends (survey perception exists), clubs, expat communities, university
  societies, language exchanges, nightlife and alcohol culture, loneliness evidence, how long it takes.
- **Getting around:** public-transport quality and pass price, cycling, driving (is a car needed),
  driving-licence exchange rules, airport access, rail connections between hubs.
- **Health care in practice:** how the system works, registering with a GP, waiting times, dentists,
  mental-health provision, private insurance prevalence, **prescription and controlled-medicine rules**,
  emergency numbers, what a foreigner's cover really includes.
- **Safety beyond crime:** natural hazards (earthquakes, floods, heat, typhoons, wildfires; INFORM Risk
  Index, EM-DAT), road safety, political stability, protest and policing context, scams aimed at newcomers,
  personal-safety advice from official travel advisories (already on some pages).
- **Rights, laws and freedoms:** laws that differ strongly from the reader's home (alcohol, drugs,
  cohabitation, public conduct, speech, social media), LGBT+ legal position (ILGA), gender equality,
  religious freedom, press freedom (RSF), democracy and rule-of-law indices. State the law and cite it;
  no commentary.
- **Digital and money life:** internet speed and mobile coverage, content blocking and VPN rules (China),
  cash vs card vs mobile payments (WeChat Pay, Alipay, PIX-like), tipping, how to receive money from
  abroad, bank-fee norms.
- **Bureaucracy experience:** digital government (e-ID, e-services), queue and appointment culture,
  English availability at counters, how forgiving offices are.
- **Food and dietary needs:** availability of halal, kosher, vegetarian/vegan, allergy labelling,
  alcohol availability; kept practical and sourced.
- **Culture and leisure:** nature access, sport, arts, cost of leisure, festivals, nightlife, family
  activities, the weekend and workweek pattern (Friday–Saturday weekend in some countries).
- **Distance from home:** flight time, direct routes, typical price ranges, time zone (exists), visa-free
  travel for relatives.
- **Education and childcare** (for families): quality indicators, international schools and fees,
  childcare cost and waiting lists, school start age, language of instruction (links to section 8).
- **Climate in more detail:** seasonal extremes, humidity, heating and cooling needs and cost, daylight
  by season (exists), wind and pollen where relevant.
- **Population and diversity:** foreign-born share, diaspora communities, discrimination experience data
  (FRA surveys, Eurobarometer), whether the country is used to international residents.
- **Pets, belongings and shipping:** import rules and quarantine, shipping times and cost.

### 6.2 Data and sources

- **Generated (A), all-46 sources:** OECD Better Life Index, World Bank, WHO, ITU and Ookla/Cloudflare
  speed data, INFORM Risk Index, EM-DAT, ILGA-Europe Rainbow Map and ILGA World, RSF index, Freedom House
  and V-Dem, FRA surveys (EU only), Eurostat time use and housing, flight time computed from coordinates,
  public holidays and statutory leave from ILOSTAT/national laws.
- **Researched (B):** national tenancy and employment law pages, health-system pages (WHO/European
  Observatory country profiles), embassy and consular advice, official digital-government portals,
  university housing pages, import rules for pets and medicines from customs/health ministries.
- Keep the **Whole country / By city / Region** chip on every row, and keep "never rank the incomparable".

### 6.3 Deliverables

- Extend the Life there section with the fixed rows above (group them: *Home and money*, *Work and
  time*, *People and social life*, *Health and safety*, *Rights and laws*, *Getting around and
  connecting*), each row complete or "not covered".
- A topic page **"Moving there: the practical day-to-day"** that compares a few countries on the rows.
- Hub pages show city-specific rows (housing market, transport, hazards) next to the country rows.

---

## 7. Risk and plan B

**The planning question:** "What if it doesn't work out, and how bad would that be?" Most people plan only
the success case. A good plan states what can go wrong, how likely it is, how reversible each step is and
what the fallback is.

**Matters most to:** everyone committing money or a permit; most to those on a sponsored permit or with
dependants. **Paths:** all.

### 7.1 What the block could cover

- **Reversibility of each step:** an internship (high), a one-year master's (medium, sunk tuition), a
  sponsored job (medium, permit tied to the employer), a permanent move with a partner and a lease (low).
  A simple, explicit classification the reader sees.
- **Labour-market risk by hub:** dependence on one sector or employer, recent layoff waves where there is
  data, vacancy and unemployment rates by region, how graduate hiring behaved in past downturns
  (2008–09, 2020), youth unemployment, hiring freezes in the reader's role family.
- **Job-loss consequences:** notice and severance, unemployment insurance and whether foreigners qualify,
  how many days or months the permit survives job loss (link to Visas), whether the employer must tell
  the authorities, what happens to dependants, where to complain (labour court, inspectorate, union).
- **Regulatory risk:** how often the rules for the reader's route changed in recent years, announced or
  pending changes (the visa files' "not settled yet" list), caps and quotas that run out mid-year, courts
  that suspend rules.
- **Financial risk:** currency moves, rent increases, medical bills, a failed first-job search with fixed
  costs, loan repayment from abroad, clawback clauses on scholarships and employer sponsorship.
- **Health and insurance gaps:** pre-existing conditions, waiting periods before public cover (Iceland,
  Taiwan), what the insurance excludes, medical-exam bars (Gulf TB-scar rule, others in the visa files),
  repatriation cover.
- **Safety and security risk:** official advisory level (FCDO, Farnesina, State Department), sanctions and
  travel-ban context, natural hazards, political stability; what the embassy can and cannot do.
- **Legal risk:** the common administrative traps by country (late registration, overstay, working before
  the card, leaving with a receipt only, exit bans, unpaid-cheque rules) summarised from the visa files'
  traps.
- **Plan B menu per country:** the realistic fallbacks in order of cost: another hub in the same country,
  a neighbouring country with a job-search route, switching to a study permit, remote work for the home
  employer, a working-holiday year, returning home (what it costs, what it keeps), a second master's.
- **Buffer rules:** how many months of runway to hold (computed from section 4), what to keep liquid, when
  to commit to a lease, which commitments to delay.
- **Pre-mortem prompts for the reader:** "if this fails in month six, why?" with the country's most
  likely reasons, not a generic list.
- **If you must leave fast:** exit checklist (permits, tax clearance, bank, lease, health cover, pension,
  deregistration), the deadlines that apply, and the costs.

### 7.2 Data and sources

- **Generated (A):** Eurostat and national regional unemployment and youth unemployment, vacancy rates,
  sector concentration from the employment-by-sector tables the Atlas already reads, downturn behaviour
  from Eurostat time series (graduate employment 2007–2013, 2019–2021), exchange-rate volatility from
  ECB/IMF, advisory levels from the official advisory pages already cited.
- **Researched (B):** unemployment-benefit rules for foreigners (ministry/agency pages), notice and
  severance in labour codes, the visa files' grace periods and traps and open questions, research
  evidence in `research/evidence/base-rates-and-failure-modes.md`.
- Label judgement ("this hub is concentrated") as the rule that produced it, the way demand levels are:
  a fixed, stated threshold, not an opinion.

### 7.3 Deliverables

- An **"If it goes wrong"** block: *Reversibility* · *Labour-market risk (numbers)* · *If you lose the
  job (notice, benefits, permit)* · *What can change (rules)* · *Fallbacks (ordered)* · *Buffer to hold* ·
  *Leaving quickly (checklist)* · *Advisory level*.
- A topic page **"Plan B: what each country gives you if you lose your job"** (a comparison table).
- Planner hook: after the budget and calendar, show the plan's weakest assumptions and the fallback with
  its cost.

---

## 8. Your own situation

**The planning question:** "Does this work for me, given who I am and what I'm bringing?" The same country
is easy for one person and hard for another. This is the personalisation layer: what changes with age,
field, family, health, identity, money and obligations.

**Matters most to:** anyone with a partner, children, a health need, a regulated profession, a
conscription or legal obligation at home, or a minority position. Everything here is **optional, private
and only surfaces information**.

### 8.1 What it could cover

- **Passport and origin** (exists): rules by passport group, and what the origin adds (recognition, flights,
  tax ties, diaspora).
- **Age:** age limits on schemes (working holiday, youth mobility, young-professional tax reliefs), student
  age norms, age discrimination in hiring where applicable, pension and social-security age rules.
- **Degree and field:** regulated professions and the recognition route (law, medicine, nursing, teaching,
  engineering, architecture, accountancy), required exams and language levels, how long recognition takes,
  fields with shortage lists, fields where the local market is closed to foreigners.
- **Experience and background:** first-generation or non-target background, gap in CV, career switch,
  returning to study; how local employers read it.
- **Partner:** can the partner work on your permit, which routes allow it, the partner's job market,
  recognition of unmarried and same-sex partners, marriage and registration rules, a dual-career plan.
- **Children:** schools (public, international; fees), childcare cost and availability, parental leave,
  child benefits and their portability, dependants' visas, education systems and re-entry to home
  schooling, language of instruction.
- **Health conditions and disability:** import and legality of medicines, insurance exclusions and waiting
  periods, medical-exam bars, specialist and mental-health availability, accessibility of cities and
  workplaces, legal accommodation rights, vaccinations and requirements.
- **Identity and belonging:** legal position and everyday climate for LGBT+ people, for women, for
  religious and ethnic minorities, for people of colour; official data (ILGA, FRA, national surveys) and
  clearly labelled perception data; no commentary, no stereotypes.
- **Religion and diet:** places of worship, prayer facilities, halal and kosher availability, religious
  holidays and work arrangements, rules on religious dress.
- **Money situation:** guarantor needs, no local credit history (impact on renting and loans), tax debt or
  student debt at home, access to home-country loans, proof-of-funds levels.
- **Obligations at home:** **military and national service** (Korea, Israel, Russia, Turkey and others
  affect nationals and dual nationals, and entry bans for those who evade), tax residence and reporting
  (Italian AIRE and foreign-asset reporting, US worldwide taxation, FATCA effects on banking), voting from
  abroad, caring responsibilities, professional licence renewal, professional liability.
- **Records and history:** criminal record (visa bars, certificate rules), travel history that triggers
  extra checks (Israel, Iran, Syria entries), previous visa refusals and how they are declared, social-media
  screening (several countries), political or journalistic activity.
- **Work arrangement:** remote work for a home employer (digital-nomad routes, tax residence, social
  security), self-employment and freelancing (allowed on which permit), dual employment, security-
  clearance careers where nationality matters.
- **Funding source:** self-funded, scholarship, loan, employer-sponsored; what each restricts (work hours,
  location, clawback).
- **Accompanying and family reunion later:** timing rules (waiting periods, income thresholds), language
  tests for partners, permit for parents.

### 8.2 How to implement without becoming intrusive

- A **"Your situation"** panel, like the passport switch: a few optional toggles (age band, partner,
  children, health need, profession regulated, remote work, service obligation), stored in the browser only.
- It does **not** score or advise. It does two things: **filters** the page to what applies and **highlights
  items** ("2 things worth checking for a partner", "your profession is regulated here").
- Sensitive items (health, orientation, religion) are never asked as a form field by default. Offer them as
  *topics to read* ("Health needs", "Rights and laws"), not questions to answer.
- A **"checklist for my case"** the reader can export to their own device.

### 8.3 Data and sources

- **Generated (A):** ILGA World and ILGA-Europe maps, WHO and national medicine-control lists, military-
  service obligation tables (Wikipedia is not a source; use ministry pages and the Council of Europe/UN
  summaries), FRA surveys, OECD Family Database (childcare, leave), UNESCO recognition conventions status.
- **Researched (B):** ministry pages for regulated professions and recognition (ENIC-NARIC, national
  authorities), family-reunion rules from the visa files, school and childcare official pages, tax-authority
  pages on residency and reporting obligations, official advisory pages on entry restrictions.
- Everything here that touches legal safety (G17 in `docs/GAP-ANALYSIS.md`) states the law with an official
  or treaty-body source and **no commentary**.

### 8.4 Deliverables

- A **"Things that depend on you"** block on each country page, drawn only from the reader's toggles (nothing
  appears if none are set), with the fixed rows: *Partner* · *Children* · *Regulated professions* · *Health
  needs* · *Rights and laws that differ* · *Obligations at home* · *Money and credit*.
- A topic page per theme (e.g. "Moving with a partner", "Moving with children", "Regulated professions
  abroad", "Moving with a health condition").

---

## 9. Putting it together

### 9.1 The surfaces

1. **Country-page blocks** (fixed rows, every country): Getting hired · Internships · Calendar · Cost of the
   plan · Where it leads · Life there (extended) · If it goes wrong · Things that depend on you. The side
   contents panel already scales to the extra length; keep each block to a screen or two.
2. **Hub-level overlays** where a fact is about a city (housing market, hazards, employers, internships by
   employer, rents), with the By-city chip.
3. **Topic pages** (the encyclopedia): one page per area comparing all 46 countries in one table, with
   the explanation once ("How hiring works in 46 countries", "Internships in 46 countries", "What 46
   countries cost to arrive in", "Plan B across countries").
4. **The planner:** stage + path + origin + up to three destinations → timeline (3), budget (4), route in (1,
   2), permit (Visas, First weeks), life comparison (6), risks (7), situation checks (8), where it leads (5).
   Output is a shareable, private summary; each line links to its country block and source.
5. **A compare-two-countries view** becomes almost free once the rows are fixed across countries.

### 9.2 Suggested order (highest value for the least risk first)

1. **Calendar + back-planner (3).** It uses data the site already has (deadlines, visa lead times) and is the
   backbone of the planner.
2. **Getting hired + Internships (1, 2).** Mostly condensing research that exists; the most decision-relevant.
3. **Cost of the plan (4).** Mostly combines existing per-hub wage and rent figures and the visa fees; a
   budget tool gives the site a reason to be revisited.
4. **Life there, phase 2 (6).** Generated data first (rights, hazards, speed, flights, holidays), housing and
   work culture researched after.
5. **If it goes wrong (7)** and **Where it leads (5).** Need the cost block and the stay-rate data first.
6. **Your situation (8).** Last, because it needs the fixed rows of everything else to filter.

### 9.3 Definition of done for any area

- Fixed rows exist for all 46 countries; every row is a sourced claim or an explicit "not covered".
- Tests: completeness, tags, sources, dates, ranges, Italian numbers, passport/stage coverage, and a printed
  gap list.
- `docs/ATLAS-PROGRESS.md` explains the method; `tools/` holds any generator, with a cache and an offline
  mode.
- A pilot of four countries was rendered and reviewed on desktop and phone before the other 42.
- Nothing states a stereotype, ranks the incomparable, or gives personal advice.

### 9.4 Open decisions for the product owner

- **Depth vs breadth per area:** all 46 countries to a thin standard, or a deep standard for 10–15 first?
- **Hub vs country:** which rows deserve per-hub data (housing, internships by employer) and which stay national.
- **How much of the planner is a tool vs a guide:** a calculator and timeline, or a static comparison with
  links.
- **Freshness policy:** how often each family of data is reviewed (law: six months; statistics: yearly;
  calendars: before each cycle).
- **Sensitive topics:** whether "Rights and laws" and "Your situation" appear by default or behind an opt-in.

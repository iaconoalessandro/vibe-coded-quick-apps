# Audit 4: Immigration, procedures and costs, 25 European destinations

Auditor: Agent 4. Date: 5 October 2026. Read-only on the repo. Sources checked live on 5 Oct 2026 (official pages where reachable; anything secondary is flagged).

## Executive summary

1. **The owner is right about the diagnosis.** The Atlas `route` for non-EU passports almost never tells a student how to obtain the student permit. In **20 of 25 European countries** the non-EU route jumps straight to "Work while you study" and "After graduating". There is no step for the visa or permit itself: no name, no portal, no fee, no proof of funds, no insurance rule. Only GB, FR, DE, IT and EE have a "get the permit" step, and only **Germany** states the proof-of-funds amount.
2. **Fees are close to absent from the Atlas.** Only three fees appear across 25 records: FR €150 (correct), IT €40 (wrong, see below) and the DE blocked account €992 a month (correct). Missing: the UK £558 visa fee and £776-a-year IHS, the German €75 visa fee, the Irish €300 IRP fee, the Dutch IND fee, Swiss cantonal fees, the Nordic application fees, the Italian kit, the Spanish TIE fee and the Portuguese AIMA fee. The research library has the UK figures, but they never reached the map.
3. **Four claims are wrong or dangerously misleading:**
   - **Greece:** the site says there is no job-search period, so graduates must go home. Law 5038/2023 art. 119, as amended, gives a **1-year type H.11 permit**.
   - **Italy:** the site says the permesso costs €40. That is only the contribution; the real first-issue cost is about **€116.46**, plus the €50 visa.
   - **Luxembourg:** the "after graduating" step describes a narrow 5-year-cycle rule. It omits the **9-month job-search permit** that a master's graduate gets.
   - **Lithuania:** the site says EU citizens "need no permit", and its EU route has no registration step. Lithuania requires EU citizens staying over 3 months to obtain a registration certificate.
4. **Proof of funds has moved sharply in 2026 and the site has none of it except Germany:**
   - France: **€877.50 a month from 1 Aug 2026** (was €615; décret 2026-526).
   - Italy: **€848.32 a month (€10,179.85 a year)** for 2026/27.
   - Netherlands: **€1,130.77 a month**.
   - Belgium: **€1,062 a month for 2026/27** (verified on DOFI/Diplomatie Belgium; consolidated in `visas_immigration/belgium/`).
   - Ireland: **€10,000**.
   - Spain: **€600 a month** (100% of IPREM).
   - Portugal: **€920 a month** (secondary source).
   - Norway: **NOK 166,859 a year** (secondary source).
   - Sweden: **SEK 10,656 a month**.
   - Finland: **€800 a month (€9,600)**.
   - Switzerland: **about CHF 21,000 a year** (secondary source).
   - UK: **£1,529 / £1,171 a month** (in the research library only).
5. **The basics every non-EU student asks about are missing everywhere:**
   - Germany: the **APS certificate** for China, India and Vietnam, the Consular Services Portal and VFS, and New Delhi wait times of up to 30 weeks.
   - France: **Campus France / Études en France**, its fee, and the €50 visa (€99 outside EEF).
   - Italy: **Universitaly pre-enrolment and CIMEA / dichiarazione di valore**.
   - Spain: the **TIE/NIE**.
   - Netherlands: the **MVV** procedure and the MVV exemption for UK and US nationals.
   - UK: the **dependants ban** for taught master's (since Jan 2024), eVisas, and **EES (live since 10 Apr 2026), ETIAS (due Q4 2026) and the UK ETA (£20)**.
   - Withdrawal Agreement rights for UK and EU citizens resident before 2021.
6. **What is right:** the post-study and salary-threshold layer is mostly accurate and current. All of these were confirmed live:
   - UK: Graduate visa 2 years / 18 months from 1 Jan 2027; Skilled Worker £41,700 and £33,400 for new entrants.
   - Germany: §20 18 months; Blue Card €50,700 / €45,934.20.
   - France: RECE; talent card €39,582.
   - Netherlands: €3,122 reduced criterion.
   - Ireland: CSEP €40,904 / €36,848; Stamp 1G 12+12 months.
   - Sweden: 15-hour work cap from 11 Jun 2026.
   - Denmark: 1-year job search from 1 Oct 2026.
   - Finland: €1,600 work-permit salary floor.
7. **Other omissions on that layer:**
   - France: the Blue Card **€59,373**.
   - Denmark: the **Supplementary Pay Limit DKK 446,000**, and the 1 Oct 2026 **ban on family members**.
   - Norway: the **1-year job-seeker permit**.
   - Italy: the Blue Card threshold (about **€36,300**, secondary source) and the conversion of a study permit to work.
8. **Bottom line for launch:** the post-study layer is solid. The permit-on-arrival layer (procedure, fees, funds, insurance) is missing for almost every country. Add one standard "Get your student permit" step per country with the six fields in section 5.

Report path: `/private/tmp/claude-501/-Users-alessandro-Documents-Vibe-Coding-Projects-admetia/7963abf3-ace7-4f80-97be-609c068450b9/scratchpad/audit/4-immigration-europe.md`

---

## Per-country scorecard (non-EU student unless stated)

Key: ✅ covered and correct · ⚠️ partly covered, thin or partly outdated · ❌ absent or wrong. "Atlas" means data/atlas/<cc>.js `route`/`arrival`/claims. "Library" means research/.

| Country | Procedure (permit name, where, steps) | Fees | Funds | Post-study and switch to work | EU citizen registration |
|---|---|---|---|---|---|
| GB | ⚠️ "needs a Student visa" only; no CAS, 6-month window, 3-week decision, B2 English, TB test, eVisa | ❌ Atlas (no £558, no £776/yr IHS); ✅ library | ❌ Atlas; ✅ library (£1,529/£1,171 × 9) | ✅ Graduate, Skilled Worker and HPI correct | n/a (EU needs a visa ✅); Irish CTA ✅ |
| FR | ⚠️ VLS-TS and online validation; no Campus France/EEF, France-Visas or multi-year card renewal | ⚠️ €150 ✅; visa €50/€99, Campus France fee and CVEC €105 missing | ❌ €877.50/month from 1 Aug 2026 not stated anywhere | ✅ RECE and talent card; ⚠️ Blue Card €59,373 missing | ✅ |
| DE | ✅ best in the set (§41 vs national visa, conversion) but no APS, portal or backlog | ⚠️ €75 visa and ~€100 permit missing | ✅ €992/€11,904 | ✅ §20, Chancenkarte, Blue Card, settlement | ✅ Anmeldung; ⚠️ EHIC exemption from statutory insurance missing |
| IT | ❌ permesso only; no type D visa, Universitaly or CIMEA/DdV | ❌ "€40" wrong (≈ €116.46 + €50 visa) | ❌ €848.32/month missing | ✅ art. 39-bis.1; ⚠️ conversion and Blue Card missing | ✅ |
| ES | ❌ no visa, estancia, TIE or NIE step at all | ❌ | ❌ €600/month (100% IPREM) | ⚠️ switch ✅; job-search length unstated | ✅ |
| NL | ❌ no IND/MVV step; MVV exemption for UK/US missing | ❌ IND €254 | ❌ €1,130.77/month | ✅ orientation year; HSM ✅ | ✅ BRP/BSN; ⚠️ Dutch insurance if working |
| CH | ❌ non-EU: no visa D or assurance of permit, cantonal process | ❌ e.g. Zurich CHF 182 | ❌ ≈ CHF 21,000/yr | ✅ 6 months; quotas ✅ | ✅ 14 days; ⚠️ students not covered, only workers |
| BE | ❌ | ❌ | ❌ €1,062/month 2026/27 (secondary) | ✅ 12 months (but sourced to KU Leuven, not DOFI) | ✅ |
| LU | ❌ | ❌ | ❌ | ❌ 9-month job-search permit missing | ✅ |
| IE | ⚠️ Stamp 2 only; no visa or AVATS, IRP or insurance step | ❌ €300 IRP | ❌ €10,000 | ✅ Stamp 1G and CSEP 2026 thresholds | ✅ |
| AT | ❌ | ❌ | ❌ | ✅ 12 months, RWR | ✅ |
| PT | ❌ no D4 or AIMA; no backlog warning | ❌ | ❌ €920/month (secondary) | ⚠️ cites the job-seeker visa (an abroad route), not a graduate in-country route | ⚠️ practitioner source only |
| DK | ❌ | ❌ | ❌ | ⚠️ 1 yr ✅, family ban and Supplementary Pay Limit missing | ✅ |
| SE | ⚠️ 2026 rule changes ✅; no application steps | ❌ SEK 1,500 | ❌ SEK 10,656/month | ✅ 1 year; 90% median ✅ | ✅ |
| NO | ❌ | ❌ NOK 5,400 (secondary) | ❌ NOK 166,859/yr (secondary) | ❌ 1-yr job-seeker permit missing; floor is a practitioner source | ✅ |
| FI | ❌ | ❌ | ❌ €800/month, €9,600 | ✅ 2 years; €1,600 ✅ | ✅ |
| IS | ⚠️ | ❌ | ❌ | ✅ (fresh, July 2026) | ✅ |
| PL | ❌ no D visa; 2025 B2-language and anti-fraud law missing | ❌ | ❌ | ✅ 9 months | ✅ |
| CZ | ❌ | ❌ | ❌ | ✅ 9 months | ✅ |
| RO | ❌ | ❌ | ❌ | ✅ 9 months (EU portal source, Apr 2025) | ✅ |
| BG | ❌ | ❌ | ❌ | ✅ 9 months (EU portal source) | ✅ |
| GR | ❌ | ❌ | ❌ | ❌ **wrong**: says no job search; 1-year H.11 exists | ✅ |
| MT | ❌ | ❌ | ❌ | ✅ 9 months | ✅ |
| EE | ⚠️ permit named; no fee or funds | ❌ | ❌ | ✅ 270 days and graduate exemptions | ✅ |
| LT | ❌ | ❌ | ❌ | ✅ 12 months | ❌ says "no permit"; registration certificate required |

Coverage by passport group:

- **EU/EEA/Swiss:** good on registration everywhere except LT. Thin on health cover: only FR (EHIC) and CH explain it. DE omits the EHIC exemption. NL omits that working EU students must take Dutch basic insurance.
- **UK passport:** treated as non-EU everywhere, which is correct. There are no Withdrawal Agreement notes anywhere except a self-declared gap in DE. Only DE and IE have UK-specific steps.
- **US passport:** identical to "other". The MVV/visa exemptions that matter for US students in NL, AT, DE and DK are mentioned only for DE.
- **India, China, Nigeria, Turkey, Brazil:** no nationality-specific procedure on any EU country: no APS, no Campus France EEF, no VFS/BLS/TLS backlogs. The UK refusal statistics (origin-countries-non-eu.md §8) are excellent but sit in the library only.

---

## 1. CRITICAL: wrong or dangerously misleading

**C1. Greece: "no job-search period" is wrong.**

- **Where:** data/atlas/gr.js:139 (`gr-after`); Italian translation at gr.js:276.
- **Site says:** "After completing studies, a non-EU graduate must return home and apply afresh from there; there is no job-search period in Greece."
- **True:** art. 119 of the Migration Code (Law 5038/2023, in force 31 Mar 2024; amended by Law 5275/2026) lets graduates of Greek higher education stay to seek work or start a business. They get a **type "H.11" residence permit valid one year**, convertible to E.1/E.3/E.4/B.2 work permits.
  - Conditions: means, insurance and a clean record (arts 105, 106, 110).
  - Apply at least 30 days before the student permit expires.
  - After 3 months the holder may be asked to show a genuine chance of employment.
- **Sources:**
  - https://www.taxheaven.gr/law/5038/2023/arthro/119 (consolidated text)
  - Directive 2016/801 art. 25, which binds Greece: https://eur-lex.europa.eu/eli/dir/2016/801/oj
  - The site's own source, the EU Immigration Portal "student-greece" page, still carries the pre-2024 text. Do not use it as a primary source.
- **Also:** `gr-work` (gr.js:138) "Non-EU students can work part-time" gives no hours. The gap at gr.js admits this. Fix it from the Migration Code or the Ministry of Migration (migration.gov.gr).

**C2. Italy: residence permit "costs €40" is wrong as a cost.**

- **Where:** data/atlas/it.js:327 (`it-pds`); Italian at it.js:593.
- **Site says:** "...issuing takes about 60 days, and costs €40 for up to a year."
- **True:** €40 is only the *contributo* for a 3–12-month permit. A first study permit costs:
  - €40 contribution
  - €16 marca da bollo
  - €30.46 for the electronic card
  - €30 Poste Italiane postal fee
  - **Total ≈ €116.46**, payable at the post office "kit" step.
  - On top: the **type D study visa (€50)**.
- **Timing:** "about 60 days" is the statutory average. Real waits in Rome, Milan and Bologna questure are often several months, and students live on the postal receipt (*ricevuta*) meanwhile. The site should say what the receipt allows (re-entry limits, work).
- **Sources:**
  - https://www.poliziadistato.it/articolo/225 (gives the €40 only)
  - Full breakdown: Italian embassy visa guide 2026/27 https://ambpodgorica.esteri.it/wp-content/uploads/2026/06/info-visti-2026-27-it-mne.pdf, and the Portale Immigrazione/Poste kit instructions.

**C3. Luxembourg: the post-study step describes the wrong rule.**

- **Where:** data/atlas/lu.js:136–141 (`lu-59`); Italian at lu.js:273.
- **Site says:** "A non-EU graduate who completed a university cycle of at least five years (or a PhD) in Luxembourg can get a residence permit to work in a job related to their studies."
- **True:**
  - Since the 2023 amendments (Loi du 7 août 2023, Mémorial A n° 556), a third-country student who **obtains a master's** (or defends a PhD) in Luxembourg can get a **residence permit of 12 months to look for a job or start a business** (Directive 2016/801 art. 25; non-renewable; extended from 9 to 12 months).
  - The application must reach the Direction générale de l'immigration **before the student permit expires** (guichet.lu: at least 30 days before).
  - Any job must relate to the studies.
  - The record's own gap admits "the job-search permit length [was] not re-read".
- **Sources:**
  - guichet.lu: https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/etudiant/sejour-luxembourg-apres-etudes.html
  - Government summary: https://innovative-initiatives.public.lu/stories/new-immigration-law-modernizes-economic-immigration-framework

**C4. Lithuania: EU citizens "need no permit", and there is no registration step.**

- **Where:** data/atlas/lt.js:114 (`lt-eu`); Italian at lt.js:147. The EU route at lt.js:80–82 has only this claim.
- **True:** EU/EEA citizens staying more than 3 months in Lithuania must obtain a **certificate confirming the right of residence** (EU registration certificate) from the Migration Department via MIGRIS.
  - Without it, the student cannot get a personal code easily, and bank and employment onboarding stall.
  - The record's gap says the Migration Department site could not be read.
  - The claim's source is an internal library file, not a Lithuanian page.
- **Source:** https://www.migracija.lt (MIGRIS: "Certificate of a family member / EU citizen right of residence").

**C5. Visas library: Switzerland is wrongly lumped in with "no permit".**

- **Where:** research/places/visas-and-work-rights.md:13.
- **Says:** "Across the EU/EEA and Switzerland an Italian can work from day one, with no permit..."
- **True:** in Switzerland EU/EFTA nationals need an **L or B permit**, issued under the AFMP. They must register with the commune within 14 days and before starting work. Students need a B (study) permit and must prove means and Swiss or recognised health cover.
- **Note:** the Atlas ch.js:524 (`ch-eu-reg`) is right for workers, so the library contradicts the map.
- **Source:** https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta.html

**C6. Cross-reference to dependants rules that do not exist.**

- **Where:** research/places/origin-countries-non-eu.md:130.
- **Says:** "The visas file covers the Graduate route and dependants rules; the cause of the 2022-24 fall (the ban on dependants for taught postgraduates from January 2024) is documented there."
- **True:** visas-and-work-rights.md has no word about dependants. grep finds "dependant" in no UK section of the library or Atlas.
- **The rule (GOV.UK):** from 1 Jan 2024, only students on a **PhD or research-based RQF 7+ course** of 9 months or more, or government-sponsored students, can bring dependants. A taught MSc/MiM/MBA student cannot.
- **Source:** https://www.gov.uk/student-visa/family-members

**C7. Denmark: "Pay Limit... above typical entry pay" leaves out the realistic routes.**

- **Where:** data/atlas/dk.js:180 (`dk-pay`); Italian at dk.js:321.
- **What is right:** the Pay Limit of **DKK 552,000** (2026) is correct.
- **Problem:** the claim implies there is no lower route. The **Supplementary Pay Limit Scheme is DKK 446,000 in 2026** (job must be advertised; unemployment condition), and the Positive List is a further route.
- **Also missing:** `dk-search` (dk.js:179) is correct on 1 year, but omits that from **1 Oct 2026 accompanying family members can no longer get permits** under the student rules (PhD excepted).
- **Sources:**
  - https://www.nyidanmark.dk/en-GB/Applying/Work/Pay-limit-scheme
  - SIRI news, 30 Sep 2026: https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende

**C8. RESOLVED (round 6, 5 Oct 2026): Portugal: the post-study step points to the wrong instrument.**

- **Where:** data/atlas/pt.js:147 (`pt-jobseeker`), previously used alone as "After graduating".
- **Resolution:** Replaced with `pt-poststudy` in `route.nonEu` pointing to the genuine in-country instrument: **Lei 23/2007 art. 122(1)(p)** (12-month job-search/business creation permit without consular visa for master's and PhD graduates, transposing Directive 2016/801 art. 25) and **art. 88(1)** (direct in-country conversion to subordinate employment). Fully consolidated in `visas_immigration/portugal/portugal_visas_immigration_guide.md`.
- **Source:** Lei 23/2007 art. 122(1)(p) and (o); AIMA student pages https://aima.gov.pt/pt/estudar/autorizacao-de-residencia-emitida-a-estudantes-do-ensino-superior-art-o-91

**C9. Glossary uses an obsolete French permit name.**

- **Where:** research/glossary.md:88.
- **Says:** "APS / RECE (France)".
- **True:** the APS (*autorisation provisoire de séjour*) was replaced by the RECE card in 2019. Students searching "APS France" will find outdated advice. In a German context, "APS" now means the Akademische Prüfstelle certificate, which the site never mentions (see M3).
- **Source:** https://www.service-public.gouv.fr/particuliers/vosdroits/F17319

**C10. Germany: the funds claim is sourced to the German embassy in Rome.**

- **Where:** data/atlas/de.js:1186 (`de-funds`) and de.js:1172 (`de-visa`).
- **The figure:** €992/€11,904 is correct for WS 2026/27. The BAföG increase was postponed to 1 Apr 2027, so expect the blocked-account figure to rise around then. Flag a review date.
- **The problem:** an Indian or Nigerian student is sent to an Italian-language embassy page. Use the Federal Foreign Office page (https://www.auswaertiges-amt.de/en/visa-service/-/2575526, the blocked-account FAQ) or Study in Germany/DAAD.
- **Also missing in `de-41`:** UK and US students who enter visa-free under §41 **may not work until the residence permit is issued**. The library says this (origin-countries-non-eu.md:171, 310); the map does not.

---

## 2. MISSING basics a student will ask about

### 2.1 For every country: the "Get your student permit" step

The non-EU route in 20 countries (ES, NL, CH, BE, LU, IE, AT, PT, DK, SE, NO, FI, IS, PL, CZ, RO, BG, GR, MT, LT) has no step for the permit itself. Verified figures to seed it:

| Country | Permit, where to apply | Fees (2026) | Proof of funds (2026) | Health cover | Official source |
|---|---|---|---|---|---|
| UK | Student visa; CAS from university; apply online up to 6 months before; decision ~3 weeks outside the UK; eVisa (no BRP) | **£558** + IHS **£776/yr** (half-year £388) | **£1,529/month London, £1,171 elsewhere, up to 9 months**, held 28 days | IHS | https://www.gov.uk/student-visa ; /student-visa/money |
| FR | Études en France (Campus France) in about 70 countries, then France-Visas, then VLS-TS; validate on ANEF within 3 months | Visa **€50** via EEF (€99 otherwise; secondary); Campus France fee varies by country; validation **€150**; CVEC **€105** (2026/27) | **€877.50/month** from 1 Aug 2026 (décret 2026-526; was €615) | Free affiliation on etudiant-etranger.ameli.fr | https://www.service-public.gouv.fr/particuliers/vosdroits/F2231 |
| DE | National visa via Consular Services Portal + VFS (India); UK/US etc. may apply in Germany (§41) | Visa **€75**; residence permit about €100 | **€992/month, €11,904/yr** (blocked account) | Statutory ≈ €141–146/month (TK 2026) | auswaertiges-amt.de; §16b AufenthG |
| IT | Universitaly pre-enrolment, then type D visa (VFS in many countries), then permesso within 8 working days | Visa **€50**; permesso **≈ €116.46** | **€848.32/month, €10,179.85/yr** (2026/27) | SSN **€700**/calendar year or private | Italian embassy guide 2026/27 (above) |
| ES | Estancia por estudios: visa at consulate (BLS in some countries) or in-country application; **TIE within 1 month** of arrival for stays over 6 months | TIE (790-012) **€16.08** | **100% IPREM = €600/month (€7,200/yr)** | Private insurance with no copayments, or public | sede.policia.gob.es; inclusion.gob.es |
| NL | The university, as recognised sponsor, files the MVV/residence permit with the IND; **UK, US, CA, AU, JP, KR, NZ nationals are MVV-exempt** | IND study **€254** (usually re-charged by the university) | **€1,130.77/month** (HBO/WO, H2 2026) | Private student insurance, or Dutch basic if working | https://ind.nl/en/required-amounts-income-requirements |
| CH | Apply via embassy and cantonal migration office ("assurance of residence permit") 2–3 months before | Cantonal; e.g. **Zurich CHF 182** | **≈ CHF 21,000/yr** (varies by canton) | Swiss KVG within 3 months, unless exempt | cantonal migration office; SEM |
| BE | Type D visa (non-exempt) or Annex 32 / blocked account; commune registration | Administrative fee (check DOFI) | **€1,062/month for 2026/27** (secondary: Belga/EMN) | Required | https://dofi.ibz.be |
| IE | AVATS visa for visa-required nationals; then IRP at registration office / Burgh Quay | **€300 IRP**; visa €60/€100 | **€10,000** (one-year course, from 30 Jun 2025) | Private, ≥ €25k accident / €25k disease | https://www.irishimmigration.ie |
| AT | Aufenthaltsbewilligung Studierende: at embassy, or in Austria if visa-exempt | ≈ €218 + card fee (secondary; check) | Under 24 ≈ €722/month; 24+ ≈ €1,308/month (2026, secondary) | Required (ÖGK student self-insurance) | https://www.migration.gv.at (could not be read 5 Oct) |
| PT | D4 visa at consulate (VFS), then AIMA residence permit within 4 months; warn about AIMA backlogs | Visa ≈ €110; AIMA fees (secondary) | **Minimum wage €920/month** (secondary) | Required | https://aima.gov.pt |
| SE | Online at Migrationsverket before entry | **SEK 1,500** | **SEK 10,656/month** | Required for stays under 1 year | https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education |
| NO | UDI portal; tuition for non-EU since 2023 | **NOK 5,400** (2026/27, secondary) | **NOK 15,169/month; NOK 166,859/yr** (2026/27, secondary) | Membership of the national scheme over 12 months | https://www.udi.no/en/want-to-apply/studies/studietillatelse |
| FI | Enter Finland online, then identification at mission or VFS | **€600** online (adults; Decree 1336/2025; see visas_immigration/finland/finland_visas_immigration_guide.md) | **€800/month, €9,600/yr** | Required | https://migri.fi/en/income-requirement-for-students |
| PL | National D visa; since **1 Jul 2025, B2 proof in the language of instruction** and stricter checks (Act of 4 Apr 2025) | Visa fee (check) | Check (udsc.gov.pl) | Required | https://www.gov.pl/web/jordan/students--verification-of-knowledge-of-the-language-of-instruction--national-visa-type-d |
| DK, CZ, RO, BG, GR, MT, LT, LU, IS, EE | Permit name, portal, fee, means and insurance not researched | — | — | — | national immigration portals |

### 2.2 Country-specific procedure basics that are missing

- **M1. Germany:**
  - **APS certificate** is mandatory for applicants from **China, India and Vietnam** (also Mongolia). Fees are roughly €225 India (INR 18,000), €340 China and €140 Vietnam, with 3–20 weeks of processing (secondary).
  - **Consular Services Portal** for national visas.
  - **Appointment backlogs:** national (D) appointments range from one week (Kolkata) to 30 weeks (New Delhi) (secondary).
  - **Ausländerbehörde** backlogs, with the *Fiktionsbescheinigung* in the meantime.
  - **Rundfunkbeitrag** €18.36/month.
  - Health insurance over 30 and private-insurance pitfalls.
  - Sources: https://www.aps-india.de ; https://www.daad.de
- **M2. France:**
  - **Études en France** is mandatory in about 70 countries, including India, China, Nigeria, Turkey and Brazil.
  - Order of steps: Campus France interview, then France-Visas, then VFS/TLS, then ANEF validation, then renewal as a multi-year *carte de séjour étudiant* via ANEF two months before expiry.
  - **Differentiated public fees** for non-EU students (the library has 2024/25 figures only, origin-countries-non-eu.md:172).
- **M3. Italy:**
  - **Universitaly pre-enrolment** (2026/27 window to 30 Nov 2026 per the embassy guide).
  - **CIMEA statement of comparability or dichiarazione di valore** "if required by the university".
  - **B2 Italian** for Italian-taught courses.
  - Proof of accommodation and the return-ticket sum.
  - **Study-to-work conversion** of the permesso, outside the decreto flussi quotas for graduates in Italy.
  - **Blue Card threshold ≈ €36,300** (secondary: Arletti Partners; the record's gap at it.js says it was "not read").
- **M4. Spain (RESOLVED - round 6, 5 Oct 2026):**
  - Full official guide and single source of truth in `visas_immigration/spain/spain_visas_immigration_guide.md`.
  - Estancia por estudios under RD 1155/2024 (amended by RD 316/2026): authorisation covers full programme, automatic 30h work rights for higher education, in-country application option within first 60 days of entry.
  - Length of the job-search residence confirmed at strictly **12 months non-renewable** under DA 17ª Ley 14/2013 for EQF level 6+ graduates; alternative direct switch to work permit under Art. 190 RD 1155/2024. Blue Card threshold €41,356.36 (€33,085.09 under 30); SMI €17,094/yr; IPREM €600/mo.
- **M5. Netherlands:**
  - **University as IND sponsor.** The student does not apply; deadlines are set by the university.
  - **MVV exemption** for UK, US and others.
  - **TB test** for listed nationalities.
  - Dutch basic insurance and *zorgtoeslag* if an EU or non-EU student works.
  - The 2025–26 Internationalisation in Balance policy, which cuts English-taught bachelor's places.
- **M6. UK** (missing from the map, partly in the library):
  - English at B2 (CEFR) for degree-level Student visas.
  - TB test for India, Nigeria, Pakistan and other listed countries.
  - **eVisa / UKVI account** (BRPs no longer issued).
  - **Dependants ban** (C6).
  - **UK ETA £20** for EU visitors (from 8 Apr 2026; mandatory since 25 Feb 2026) for open days and interviews before the visa.
  - International student levy of £925 per student per year from Aug 2028 (in the library only, origin-countries-non-eu.md:227).
- **M7. Ireland (RESOLVED - consolidated in `visas_immigration/ireland/`):**
  - Stamp 2 **holiday windows** for 40 hours (June–September; 15 Dec–15 Jan).
  - First registration nationwide centralized at Burgh Quay in Dublin (€300 IRP); online renewals.
  - The **General Employment Permit** route (€36,605/yr standard; €34,009 graduate; LMNT 28 days online) and CSEP (€40,904/yr).
  - Student proof of funds harmonised at €10,000/yr for all non-EEA students.
  - Single source of truth: `visas_immigration/ireland/ireland_visas_immigration_guide.md`.
- **M8. Norway:** the **1-year job-seeker permit** after a Norwegian degree is missing from the non-EU route. UDI: up to one year, apply before the permit expires, full- or part-time work allowed. The record gap says UDI "could not be read". https://www.udi.no/en/want-to-apply/work-immigration/job-seekers/
- **M9. Schengen entry before the permit:**
  - Nowhere does the site say that visa-free nationals (UK, US, Brazil) generally **cannot convert a 90/180 visa-free stay into a student permit** in France, Italy, Spain (before the new in-country option), Belgium or Portugal. They must get the national D visa first.
  - Exceptions: DE (§41), NL (MVV-exempt), AT (visa-exempt may apply in-country), DK.
  - EES (biometric entry/exit records, fully operational 10 Apr 2026) and ETIAS (Q4 2026; not required for holders of a national visa or residence permit) are not mentioned.
  - Source: https://travel-europe.europa.eu
- **M10. UK citizens in the EU, and EU citizens in the UK, under the Withdrawal Agreement:**
  - Only a de.js gap (de.js:179) mentions it.
  - Every EU record's UK route should add one line: if you lived there before 1 Jan 2021, you hold WA status (French CdS "Accord de retrait", Spanish TIE-WA, Italian "carta di soggiorno art. 50 TUE", etc.) and are not a third-country student.
  - The GB record should add that EU citizens with settled or pre-settled status pay home fees and need no visa. The 2026 automatic conversion of pre-settled to settled status for eligible people is relevant.
- **M11. Health cover for EU students:**
  - **DE:** an EU student with an EHIC can be **exempted from statutory student insurance** (one-off exemption at enrolment, then no €141–146/month). The current Atlas `route.eu` step "Health insurance while you study" (de-health) only quotes the TK price, which is misleading for EU readers.
  - **NL:** EU students who take any paid job must take Dutch basic insurance. The record admits this was not read.
  - **CH:** exemption with EHIC is possible while not working (ch-kvg-stud ✅).
- **M12. Personal ID number delays** that block jobs and banks, missing for most countries:
  - Sweden: **personnummer** needs a 1-year stay; students on shorter programmes get a coordination number.
  - Denmark: **CPR** appointments.
  - Spain: **NIE**.
  - Italy: **codice fiscale** (it-cf ✅).
  - Portugal: **NIF**.
  - Norway: **D-number vs fødselsnummer**.
  - Only DK, IS and NL mention theirs.

---

## 3. SUPERFICIAL or too generic

- **gb.js:466 (`gb-student`).**
  - Thin: says a visa and IHS are needed but gives no amounts, no CAS, no timing, and no warning about nationality-specific refusal risk.
  - Deep would be: "£558 + £776/yr IHS (≈ £1,700 for a 12-month MSc on a 16-month visa); funds £1,529 × 9 = £13,761 in London held 28 days (EU nationals usually not asked for evidence but must have it); apply up to 6 months before; ~3 weeks; taught master's cannot bring dependants."
  - The library already has most of this (student-logistics.md:16–19; costs-and-funding.md:127, 240–250). Wire it in.
- **gb.js:444–446 (arrival).** Only "Apply for a National Insurance number". Missing:
  - Prove eVisa status to landlords and employers (share code).
  - Register with a GP.
  - Council-tax student exemption.
  - Bank account.
- **fr.js:714–719 (arrival).** No "renew your permit" step. Two-year MiM students must apply on ANEF for the multi-year student card about 2 months before the VLS-TS expires.
- **fr.js:781 (`fr-talent`).** Correct at €39,582. It should add the **EU Blue Card at €59,373** and the €350 stamp (service-public F16922).
- **it.js:299–304 (arrival).**
  - The order is backwards for a newcomer: the codice fiscale is usually issued with the permesso or at the consulate.
  - The step "join the national health service for at least €700" should say *or* buy private insurance valid in Italy, which the visa requires.
- **es.js:232–243 (route).** Two steps for non-EU; nothing about entry. See section 2.1.
- **de.js:1193 (`de-16b-work`).** Correct on 140 days, but omits the counting rule: up to 20 hours a week in the lecture period counts as 2.5 days per week (§16b(3)), and a half day is up to 4 hours. Students over-count or under-count without it.
- **ie.js:132–133.** Correct but no IRP, no €300 and no funds; the gap at ie.js:122 admits it.
- **se.js:174 (`se-15h`).** Good and current. Add: **SEK 1,500 fee, SEK 10,656/month**, and that the 15-hour cap only applies to permits granted from 11 Jun 2026.
- **no.js:166 (`no-floor`).** "Reported to need NOK 599,200" is tagged practitioner consensus. UDI's own page states NOK 599,200 (master's) and 522,600 (bachelor's) from 1 Sep 2025. Re-tag as data and check whether the 1 Sep 2026 annual adjustment changed it. https://udi.no/en/word-definitions/pay-and-working-conditions-in-norway
- **be.js:361 (`be-search`).** Tagged employer-stated (KU Leuven page). Use DOFI or the Brussels/Flemish/Walloon work-permit pages: it is a legal right, not an employer statement.
- **ro.js:182, bg.js:141–142, mt.js:98–99, gr.js:138–139.** All rest on the **EU Immigration Portal pages "updated 1 Apr 2025"**. C1 shows that source can lag national law by more than a year. Re-source each to the national authority:
  - IGI: igi.mai.gov.ro
  - Bulgarian Migration Directorate
  - Identità (Malta): identita.gov.mt
  - Greek Ministry of Migration
- **pt.js:145 (`pt-crue`).** Tagged practitioner consensus because "the official page had moved". The CRUE is issued by the Câmara Municipal; cite ePortugal (https://eportugal.gov.pt).
- **research/places/visas-and-work-rights.md:187, 264, 346–348.** "Italy, Denmark, Portugal: not confirmed this session". Italy (art. 39-bis.1, 9–12 months) and Denmark (1 year from 1 Oct 2026) are now confirmed in the Atlas, but the library table still says "CtV". Sync the library to the Atlas.
- **research/places/student-logistics.md:40–41, 55–57, 65, 109.**
  - "National visa + residence permit fees (to verify)" (DE).
  - "VLS-TS fees (to verify)" and "Proof of funds required (amount to verify)" (FR).
  - NL and CH work rules "to verify".
  - "German student health insurance monthly amount wasn't verified".
  - All are now verified elsewhere in the repo (de.js:1158 TK €141.16/€146.29; fr.js:760 €150; nl.js:384 16 h; ch.js:545 15 h) or in this audit (FR €877.50). Update the file; it reads as unfinished.
- **research/money/costs-and-funding.md:129 and 268.** "France, Switzerland not verified" and "Swiss visa and insurance not verified". Fill in: FR **€877.50/month**; CH **≈ CHF 21,000/yr** (canton-specific) plus the Zurich permit fee CHF 182 plus KVG premiums (ch.js:587 has Zurich CHF 459/month at 19–25).
- **research/places/gulf-and-central-eastern-europe.md:122, 209, 257.** "For non-EU readers, I did not research permit routes for the four countries". The Atlas has since covered PL, CZ and RO post-study, so cross-link. Add Hungary only if it is in scope (it is not one of the 25).

---

## 4. UNDERREPRESENTED

- **Nationalities:**
  - India, China, Nigeria, Turkey, Brazil, Pakistan and Bangladesh have UK visa data (strong) but **zero procedure content for any EU destination**: no APS, no Campus France EEF, no VFS/BLS/TLS, no consular wait times, no apostille or legalisation rules.
  - Also missing: Gulf nationals (bonded scholarships) and Latin Americans (Spain and Portugal visa-exemption and Ibero-American agreements; Portugal's CPLP exemption from proof of means, secondary).
- **Passport groups:**
  - **US:** no US-specific note anywhere, although US students are MVV-exempt in NL, may apply in DE (§41) and AT, and face the 90/180 trap in FR/IT/ES.
  - **UK:** WA status absent.
- **Countries:**
  - **Hard to verify, verified least:** LT, LU, BE, MT, BG, RO, GR, CZ, AT and PT carry the least immigration content.
  - **AIMA backlogs:** Portugal's are a top student complaint and are not mentioned.
- **Family:** no record says whether a master's student can bring a spouse:
  - UK: no, for taught courses.
  - Denmark: no, from 1 Oct 2026.
  - Sweden: yes, but revocable.
  - Netherlands: yes, with income tests.
- **Programme types:**
  - Part-time and online master's do not qualify for student permits (Sweden: higher-vocational studies do not count for post-study; Denmark: part-time master's is now caught by the new rules).
  - Exchange and Erasmus semesters (short-stay rules) are not covered.
- **Settlement:** only DE (§18c) and AT (RWR plus) give a path to permanent residence. FR (10-year card), NL (5-year PR), IE (Stamp 4), SE, DK and CH (C permit) are "CtV #20" in the library.

---

## 5. Quick wins (each under 1 hour)

1. **Fix C1 (Greece)** in gr.js:139 and :276. Replace with: "Graduates of Greek higher education can get a one-year type H.11 permit to look for work or start a business (Migration Code art. 119, amended 2026); apply at least 30 days before the student permit expires." Cite taxheaven/Hellenic Parliament.
2. **Fix C2 (Italy cost)** in it.js:327 and :593: "≈ €116.46 for a first permit up to 1 year (€40 contribution + €16 marca da bollo + €30.46 card + €30 postal kit), plus the €50 type D visa."
3. **Fix C3 (Luxembourg)** in lu.js:136–141 and :273: "After a master's or PhD in Luxembourg, up to 12 months to look for a job or start a business; apply before the student permit expires."
4. **Fix C4 (Lithuania)** in lt.js:114 and :147. Add an EU registration certificate step to `route.eu`.
5. **Add one "Funds" claim per country** with the 2026 figures in the section 2.1 table. Mark as secondary those not read on an official page (BE, PT, NO, CH, AT).
6. **Add the UK fees** to gb.js:466 (or a new `gb-cost` claim): £558 + £776/yr IHS; funds £1,529/£1,171 × 9; Graduate £937 + £1,035/yr. The source already sits in student-logistics.md.
7. **Add the UK dependants rule** to gb.js `route.eu` "Studying" (one claim). Remove or correct the false cross-reference at origin-countries-non-eu.md:130.
8. **Add France €877.50/month** (décret 2026-526, 1 Aug 2026), the €50/€99 visa and **CVEC €105** to fr.js, and the Blue Card **€59,373** to `fr-talent`.
9. **Add Denmark's Supplementary Pay Limit DKK 446,000** and the 1 Oct 2026 family ban (dk.js:179–180, :321).
10. **Add Norway's job-seeker permit** (1 year) to no.js `route.nonEu` "After graduating".
11. **Fix the glossary:** glossary.md:88 should say RECE, not APS; add a German "APS (Akademische Prüfstelle)" entry.
12. **Re-source `de-funds`** to the Federal Foreign Office (English) instead of the Rome embassy. Add "§41 entrants may not work until the permit is issued" to `de-41`.
13. **Add an EES/ETIAS/ETA line** to every European record's arrival list:
    - EES: biometric registration at first entry.
    - ETIAS: from Q4 2026, for visa-exempt visitors only; not needed with a D visa or permit.
    - UK ETA: £20 for short visits before the Student visa.

---

## 6. Top 10 priorities for the next 4 weeks (ranked)

1. **Build a standard "Get your student permit" step for all 25 countries**, with six fields:
   - name and legal basis;
   - where to apply (portal, consulate or provider);
   - order of steps and typical wait;
   - every fee in local currency;
   - 2026 proof of funds;
   - insurance rule.
   Start with the most-used destinations: UK, FR, DE, IT, ES, NL, IE, CH.
2. **Correct the four errors (C1–C4)** and the misleading DK and PT claims (C7, C8), with the Italian translations.
3. **Add nationality overlays** for India, China, Nigeria, Turkey and Brazil on DE (APS, Consular Services Portal/VFS, New Delhi waits), FR (Études en France, Campus France fee), IT (Universitaly + CIMEA, VFS) and NL (TB test, MVV).
4. **Publish one cross-country "Proof of funds 2026" and "Upfront immigration cost" table** on the map or in the library (copy the section 2.1 table). It is the single comparison students search for.
5. **Add family and dependants rules** per country (UK ban, Denmark's new ban, Sweden and the Netherlands allowed with conditions).
6. **Add Withdrawal Agreement notes** for UK and EU citizens resident before 2021 on every EU record and on GB.
7. **Add the Schengen 90/180 trap and EES/ETIAS/ETA** to every record, and say which countries let visa-exempt nationals apply in-country (DE, NL, AT, DK) and which do not (FR, IT, BE, PT, and in practice ES).
8. **Re-source every claim that rests on the EU Immigration Portal (Apr 2025) or on internal library files** to the national authority: GR, RO, BG, MT, LT and PT first, then the ES, FI and SE claims that cite iberia-and-nordics.md instead of Migri or Migrationsverket.
9. **Add EU-student health-insurance specifics:** the DE statutory exemption with an EHIC; NL basic insurance if working; CH exemption while not working; IT EHIC vs SSN.
10. **Set review dates on fast-moving figures.** Each needs a `review_by` in the claim and a test in tests/atlas-test.js that fails when `seen` is older than 6 months:
    - German blocked account (BAföG rise due 1 Apr 2027).
    - UK fees (April each year).
    - IND thresholds (1 January and 1 July).
    - Swedish median salary (June).
    - Danish limits (January).
    - Norwegian floor (1 September).
    - Italian means (each academic year).
    - French means (indexed to the SMIC: 47% of the gross monthly SMIC).

---

### Verification log (5 Oct 2026)

**Confirmed on official pages:**

- **GOV.UK:**
  - Student visa £558; decision ~3 weeks; apply up to 6 months before.
  - Funds £1,529/£1,171 × 9 months, held 28 days.
  - Graduate £937 + £1,035/yr; 2 yr to 31 Dec 2026, 18 months from 1 Jan 2027.
  - Dependants: PhD/research or government-sponsored only, from 1 Jan 2024.
- **Service-public:**
  - VLS-TS validation €150; €877.50/month.
  - Talent card €39,582; Blue Card €59,373.
  - 964 hours of work.
- **Germany:**
  - §16b(3): 140 days, 20 h/week in the lecture period = 2.5 days.
  - Embassy: €992/month.
  - Blue Card €50,700 / €45,934.20 (multiple sources).
- **Italy:**
  - Polizia di Stato: €40 contribution, 8 working days, 60 days.
  - Italian embassy guide 2026/27: €848.32/month, €10,179.85/yr, Universitaly, CIMEA/DdV.
  - brocardi: art. 39-bis.1 (9–12 months, art. 29 income test).
- **Netherlands:**
  - IND: €1,130.77; HSM €5,942 / €4,357 / €3,122; Blue Card €5,942 / €4,754.
  - IND fee page: study €254 (the page may show 2025 fees; re-check).
- **Sweden (Migrationsverket):**
  - From 11 Jun 2026: 15 h, 37.5 credits.
  - Post-study: up to 1 year; fee SEK 1,500; SEK 10,656/month.
- **Denmark (SIRI):** 1-yr job search from 1 Oct 2026, with no family permits.
- **Greece:** Law 5038/2023 art. 119, 1-year H.11 permit (consolidated text).

**Secondary sources** (search summaries of official or press pages; verify before publishing):

- France: visa €50/€99; CVEC €105.
- Germany: APS fees and waits.
- Spain: TIE €16.08; IPREM €600.
- Ireland: €10,000 funds, €300 IRP, CSEP €40,904 / €36,848 from 1 Mar 2026 (DETE).
- Denmark: Supplementary Pay Limit DKK 446,000.
- Norway: NOK 166,859 / NOK 5,400; job-seeker 1 year; NOK 599,200.
- Finland: €800/month, €1,600 floor (Migri news).
- Austria: fees and means.
- Belgium: €1,062.
- Switzerland: CHF 21,000; Zurich CHF 182.
- Portugal: €920; visa €110.
- Poland: B2 rule (gov.pl embassy page).
- Italy: Blue Card ≈ €36,300.
- EES 10 Apr 2026 and ETIAS Q4 2026.
- UK ETA £20.
- Luxembourg: 9-month permit (guichet.lu pages returned 404 today).

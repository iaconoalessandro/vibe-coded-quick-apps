# Changelog: Stati Uniti (consolidamento visti e immigrazione)

**Data:** 2026-10-07 (verifica fonti: 2026-10-06; richiesta "as of" 2026-10-05)
**Branch:** `chore/visas-us-consolidation` (dal branch Canada, mai su `main`)
**Baseline prima delle modifiche:** build ok, "All tests passed (11 suites)". **Dopo:** build ok, 11 suite passano, `i18n-report` 0 stale / 0 mismatched.
**Fonte unica creata:** `visas_immigration/united_states/` (guida, 97 fonti `US-SRC-xx`, 27 punti aperti `OQ-xx`). Triage completo: `visas_immigration/_review/US-TRIAGE-2026-10-07.md`.

## Decisioni "da decidere" (default applicati)
- `uk: "eu"` in `us.js`: mantenuto (lo schema ammette solo eu/uk); differenze BG/CY/RO e India/Cina nel testo dei claim.
- Frase sulla lotteria H-1B e tipi di datore: tenuta solo con etichetta "inferenza".
- Split "6.800 per Cile e Singapore": rimosso.
- `docs/launch-audit/5-immigration-outside-europe.md`: congelato come storico, aggiunta una sola riga di avviso in cima.

## Altre azioni
- `visas_immigration/README.md`: aggiunta la riga US all'indice (stato: VERIFIED con 27 punti aperti, norme in contenzioso; prossima revisione 2026-11-30).
- Non scritti nel codice o nei docs come fatti: visa integrity fee 250 USD (riscossione non confermata), qualsiasi importo della tariffa OPT, totale "785 USD", 211.600 / -38,5% registrazioni H-1B, regola D/S come in vigore (posposta da D. Mass. ECF 50, 14/09/2026).

---

# Parte 1: runtime (data/atlas/us.js)

Only file edited: data/atlas/us.js (new line numbers; old in brackets). Backup of the pre-edit file: S/us.js.before-runtime. All new claim `seen` = 2026-10-06 (guide last_verified). Guide = visas_immigration/united_states/united_states_visas_immigration_guide.md. Every EN change has its IT twin (same file, same digits); test i18n-test green.

| # | file | lines (old) | before | after | reason | sources | triage |
|---|---|---|---|---|---|---|---|
| 1 | us.js header comment | 1-7 (1-4) | "routes ... only, which are identical. Permits and the H-1B lottery are the library's (places/visas-and-work-rights.md §7, places/beyond-europe.md §1)" | routes differ by passport (BG/CY/RO outside VWP; F-1 visa 16 months Italy vs 60 UK; uk aliases eu); pointer to the guide | falso + spostato | US-SRC-49, US-SRC-50, US-SRC-52, US-SRC-53 | U01 |
| 2 | us.js summary EN | 22 (19) | "...but a European graduate needs a US degree for OPT work rights and then a weighted H-1B lottery... A European master's alone rarely opens the US." | "...but the usual path for a European graduate is a US degree for OPT ... lottery... Routes that need no US degree (J-1 intern and trainee placements, L-1 transfers, E-2 treaty status) exist but are narrower." | falso (A*) | US-SRC-08, US-SRC-68, US-SRC-69, US-SRC-17 | U02 |
| 3 | us.js summary IT twin | 1222-1223 (1218-1219) | Italian twin of old summary ("apre di rado gli Stati Uniti") | Italian twin of new summary; key changed to the new EN string | falso | as 2 | U02 |
| 4 | us.js briefs[1] label EN | 1123 (1120) | "§7 United States: OPT, STEM OPT, the weighted H-1B lottery, the $100,000 proclamation, F-1 changes" | "§7 United States: pointer to the verified visa and work-rights guide" | spostato (VW §7 becomes a pointer; depends on the research editor doing V09) | guide | U14 |
| 5 | us.js briefs label IT twin | 1250-1251 (1244-1245) | "§7 Stati Uniti: OPT, STEM OPT, ... il proclama da 100.000 $, ..." | "§7 Stati Uniti: rimando alla guida verificata su visti e diritto al lavoro" | spostato | guide | U14 |
| 6 | us.js gaps EN (new) | 1132 (new) | - | new gap: "United States visas, F-1 and J-1 routes, OPT, the H-1B lottery and payment, and the rules suspended or challenged in court in 2026 are fully verified in visas_immigration/united_states/united_states_visas_immigration_guide.md; open points are listed in .../united_states_open_questions.md." Existing H-1B-odds gap kept (no 211,600). | nuovo pointer (as ae.js, kw.js, th.js) | guide, OQ-09 | U15 |
| 7 | us.js gaps IT twin (new) | 1236-1237 (new) | - | Italian twin of 6 (digits 1, 1, 1, 2026 identical) | nuovo | guide | U15 |
| 8 | us.js claim us-i20 EN | 1141 (1137) | "Every F-1 student needs a Form I-20 from the school, pays the I-901 SEVIS fee before entering, can get the visa up to 365 days ahead and may arrive up to 30 days before the start date." | I-20 from a SEVP-certified school; SEVIS I-901 ($350) paid BEFORE THE VISA INTERVIEW (visa not issued otherwise); 365/30 kept; printed F-1 visa 16 months for Italians vs 60 for British, Indian, Chinese; BG/CY/RO outside VWP need a B visa. src unchanged (studyinthestates); `by` adds State reciprocity (Italy, 1 May 2025) and the guide; seen 2026-10-06. No $250 fee, no $785. | falso (A*: "before entering") + incompleto | US-SRC-34, US-SRC-35, US-SRC-36, US-SRC-37, US-SRC-49, US-SRC-50, US-SRC-52, US-SRC-53 | U06, U01, U04 (DD: differences in claim text) |
| 9 | us.js us-i20 IT twin | 1487-1488 (1481-1482) | "...paga la tassa SEVIS I-901 prima dell'ingresso..." | key = new EN; IT "prima del colloquio per il visto", same numbers 20, 901, 350, 365, 30, 1, 16, 60 | falso | as 8 | U06 |
| 10 | us.js us-20h EN | 1142 (1138) | "...off-campus work needs a full academic year first and specific authorisation." | on-campus part kept (20 h, full-time in breaks); ordinary off-campus only after a full academic year and in defined cases such as economic hardship; CPT separate and, since SEVP broadcast messages of 12 and 24 August 2026, only where required for all students in the programme; court challenge pending. src kept; `by` adds BCM 2608-01/-02 and guide | obsoleto (CPT narrowed Aug 2026) | US-SRC-38, US-SRC-01, US-SRC-24, US-SRC-25, US-SRC-26 | U07 |
| 11 | us.js us-20h IT twin | 1489-1490 (1483-1484) | old IT | new IT, numbers 20, 12, 24, 2026 identical | obsoleto | as 10 | U07 |
| 12 | us.js us-opt | 1143 (1139) | src "research/places/visas-and-work-rights.md"; by "USCIS, via places/visas-and-work-rights.md §7"; seen 2026-09-30 | src https://www.uscis.gov/.../optional-practical-training-opt-for-f-1-students; by "USCIS ... (reviewed 25 Nov 2024), via <guide>"; seen 2026-10-06. Text and IT unchanged. | spostato (src to primary URL) | US-SRC-28 | U08 (RT-044) |
| 13 | us.js us-stem | 1144 (1140) | src research/places/beyond-europe.md; by "...via places/beyond-europe.md §1.1"; seen 2026-10-01 | src https://www.ice.gov/doclib/sevis/pdf/stemList2024.pdf; by "DHS STEM Designated Degree Program List (22 Jul 2024), via <guide>"; seen 2026-10-06. Text and IT unchanged. | spostato | US-SRC-30 | U09 |
| 14 | us.js us-h1b | 1145 (1141) | src research/places/visas-and-work-rights.md; by "...via places/visas-and-work-rights.md §7" | src https://www.federalregister.gov/documents/2025/12/29/2025-23853/...; by "Federal Register final rule (29 Dec 2025), via <guide>"; seen 2026-10-06. Text ("projects", 15/31/61, FY2027) and IT unchanged. | spostato | US-SRC-18 | U10 |
| 15 | us.js us-100k EN | 1146 (1142) | "The $100,000 payment ... was extended to 21 September 2027; it does not apply to a change of status inside the US, such as from F-1 or OPT, and its implementing guidance was vacated by a federal court in June 2026." | Proclamation 11069 extends payment to 21 Sep 2027; two courts vacated the agency policies (8 June, 30 Sep 2026); 30 Sep order says payment no longer in effect; appeals pending; change-of-status carve-out only "once granted", applies if denied or person leaves before decision; $103,265 DHS proposal for all cap-subject petitions, US master's included, shows no such exception, not law. src -> USCIS H-1B page; `by` lists USCIS, Proc. 11069, both orders, NPRM, guide | falso (A: unconditional carve-out; single court) + obsoleto | US-SRC-15, US-SRC-19, US-SRC-20, US-SRC-21, US-SRC-22 | U11 |
| 16 | us.js us-100k IT twin | 1491-1492 -> 1497-1498 | old IT | new IT; numbers 11069, 100.000, 21, 2027, 8, 2026, 30, 30, 103.265, 1x3 identical | falso | as 15 | U11 |
| 17 | us.js us-euro EN | 1147 (1143) | "OPT needs a US degree, and the H-1B advanced-degree cap is for US master's holders, so a European master's does not open the US on its own." | OPT needs a US degree; the 20,000 advanced-degree H-1B places, on top of regular 65,000, are for US master's holders, so a European master's does not qualify for them; routes needing no US degree: J-1 intern/trainee, L-1 after a year abroad, E-2 (Italians, British; employee shares employer's nationality); TN, E-3, H-1B1 limited to Canada/Mexico, Australia, Chile/Singapore. src -> USCIS H-1B cap-season page. The 6,800 H-1B1 set-aside / Chile-Singapore split is NOT written. | falso (A*: "does not open the US on its own") | US-SRC-17, US-SRC-08, US-SRC-68, US-SRC-69, US-SRC-71, US-SRC-72, US-SRC-49 | U12 |
| 18 | us.js us-euro IT twin | 1493-1494 -> 1499-1500 | old IT | new IT, same codes/numbers (20.000, 65.000, J-1, L-1, E-2, TN, E-3, H-1B1) | falso | as 17 | U12 |

## Not changed (triage rows kept as instructed)
- U03 route labels and claim lists (ids unchanged, every claim still used); U04 `uk: "eu"` alias kept (DD; passport differences in claim text, items 1, 8); U05 arrival steps (kept; no new steps added); U13 us-duke/us-mit (VP, untouched); U16 all other claims.
- No weighted-lottery employer-type sentence exists in us.js (DD V20 moot). Existing gap "H-1B odds ... DHS projections; USCIS has not published FY2027 counts" kept (OQ-09). 
- NOT written anywhere: $250 visa integrity fee, $785, any OPT fee amount, 211,600 / -38.5%, D/S/fixed-admission rule as in force, 6,800 split.
- Non-atlas files (X01-X05): no change needed per triage 1.7. No tests changed.

## Verification
- node tools/build.js: exit 0. node tools/run-tests.js: "All tests passed (11 suites)". node tools/i18n-report.js: 0 stale, 0 placeholder mismatches. graphify update . run.
- Grep of triage s.3 wrong values in data/atlas/us.js: no match for "shielded", "before entering", "prima dell'ingresso", "full academic year first", "does not open the US", "alone rarely", "scope not read", "211,600", "$785", "integrity fee", "6,800", "identical", "15 Sep", "four years", "30-day grace", "1653"; only "does not apply to a change of status" remains, with the "once granted / does if denied or on departure" correction (us-100k).
- Dependency: briefs label (row 4) assumes research/places/visas-and-work-rights.md §7 becomes a pointer (triage V09), done by the research editor.

---

# Parte 2: docs e research


Scope: research/** and docs/** only. Line numbers are the ORIGINAL (pre-edit) lines unless marked "new". Backup of all touched trees: scratchpad/us/docs-bak/. Reason codes: falso / obsoleto / duplicato / spostato. Source IDs are US-SRC-xx from united_states_sources.md; GUIDE = visas_immigration/united_states/united_states_visas_immigration_guide.md.

Files changed (14): research/places/visas-and-work-rights.md (VW), research/places/beyond-europe.md (BE), research/countries/us-united-states.md (USB), research/glossary.md, research/evidence/trends.md, research/evidence/hypotheses.md, research/verification/claims-to-verify.md (CTV), research/verification/freshness-register.md (FR), research/verification/round-3b.md, round-3g.md, round-4f.md (one note line each), docs/launch-audit/README.md, docs/launch-audit/5-immigration-outside-europe.md (LA5, banner only), docs/GAP-ANALYSIS.md. README.md and CREDITS.md: no US visa content, untouched.

## research/places/visas-and-work-rights.md

| # | Lines | Before (short) | After (short) | Reason | Sources | Triage row |
|---|---|---|---|---|---|---|
| 1 | 3 | last_researched 2026-10-02 | 2026-10-06 | obsoleto | GUIDE header | V01 |
| 2 | 24 | "US-trained internationals are shielded from the $100,000 H-1B charge" | "US: the $100,000 payment is not being collected for now, but the lottery now favours higher pay" + pointer to GUIDE 3.2 | falso | 15, 19, 21, 22 | V03 |
| 3 | 25 | "applies only to beneficiaries outside the US; does not apply to F-1 to H-1B CoS granted" | CoS not covered if GRANTED; covered if denied, or on departure before decision / consular notification | falso (incomplete) | 15 | V04, V16 |
| 4 | 26 | proclamation extended (kept); "whether $100,000 can be collected ... not stated in any primary document"; $103,265 NPRM | extension kept; collection answered (two courts vacated policies); NPRM kept with "no exception for in-country CoS in the text read; not law" | obsoleto | 19, 20, 21 | V05 |
| 5 | 27 | "granted in part a PI ... order's scope was not read"; 9-11 fee "extends to all extension-of-status petitions"; EO 14431 / reconsideration not carried | order read: vacated and enjoined agency policies, fee no longer in effect; 60-day NPRM kept (comments to 10 Nov 2026); 9-11 fee now "covered employers (50+ staff, >50% H-1B/L-1) since 9 Sep 2026" | obsoleto / falso | 14, 21, 87 | V06 |
| 6 | 28 | "L-I ~15%, L-II ~31%, about 35% overall in FY2026" | DHS projections ~15% / 31% vs over 61% Level IV, "projections, not results"; FY2026 34.9% marked not comparable | falso (metric mismatch) | 16, 18 | V07 |
| 7 | 29 | STEM OPT extra 24 months inference | untouched | VP (do not touch) | n/a | V08 |
| 8 | 252-282 | heading "7. United States (EU and non-EU identical)" + OPT, STEM codes, H-1B table FY2024-26, weighted selection, $100,000 proclamation block (19 Sep 2025, EO 14431, 1st Cir. "reconsideration denied 21 Sep", "brief 8 Sep"), "F-1 changes (new, final rule) effective 15 Sep 2026 ... four years/30-day grace" | heading "7. United States"; pointer to GUIDE (verified 6 Oct 2026); section body removed. KEPT only the school-stated STEM paragraph (old line 261, VP). Removed unverified "reconsideration 21 Sep", "brief 8 Sep" with the body | spostato / duplicato / falso (heading) / obsoleto (D/S rule postponed) | GUIDE 1-4; 11, 12 | V09, V10, V11, V13, V14, V15, V17, V18, V19 |
| 9 | 261 | school-stated STEM status of calculator programmes | kept verbatim (only list-indentation changed to top-level bullet) | VP | n/a | V12 |
| 10 | 307 | "US: weighted lottery rewards employers that pay above local wage ... favours banks, MBB, big tech (FR 2025) [data]" | mechanism sourced (90 FR 60864, GUIDE Caso 2); employer-type conclusion labelled "my inference, not a published finding" | falso (unlabelled inference) | 18 | V20 (DD default) |
| 11 | 316 | "The UK, US, Canada, Singapore and UAE rows apply to EU citizens unchanged" | US removed from that sentence; new sentence: same routes for EU/non-EU, but BG/CY/RO outside VWP and Italian F-1 visa 16 months vs 60 (UK/IN/CN) | falso | 49, 50, 52, 53 | V22 |
| 12 | 335 | US row OPT/STEM/lottery | OPT row text kept; added "see `visas_immigration/united_states/`" in two cells (pattern of other rows); "Employer green card" kept (no verdict) | duplicato | n/a | V23 |
| 13 | 369-371 (H5) | "applies to beneficiaries abroad, not to in-country changes of status; guidance vacated June 2026" | verdict "not supported, but not a clean escape"; CoS outside payment only if granted; policies vacated by two courts; NPRM has no in-country carve-out in text read | falso (incomplete) | 15, 20, 21 | V25 |
| 14 | 384 (myth 6) | "does not apply to an in-country F-1 to H-1B change of status" | not being collected; CoS outside only if granted; applies if denied or departure | falso (incomplete) | 15, 21 | V25 |
| 15 | 393, 394 | rule 4 ("triples your lottery attempts") and rule 5 (departure risk) | untouched (rule 4 VP; rule 5 consistent) | VP / B kept | 15 | V26, V27 |
| 16 | 416 (claim 16 in list, orig. line 420) | "Still open: whether $100,000 collectable ... scope not read" | RESOLVED in part, updated 6 Oct 2026: collectability answered (ECF 130; D. Mass. vacatur; 1st Cir. stay denied); open: 1st Cir. merits 26-1699, D.C. Cir. 25-5473, N.D. Cal. CMC 27 Oct 2026, final status of $103,265 fee. Dropped "briefing reportedly to 16 Oct, AILA" (secondary, not in GUIDE) | obsoleto | 15, 19-23 | V29 |
| 17 | 421 (claim 17) | "fixed-term rule is final (effective 15 Sep, four-year, 30-day grace)" | published but postponed by D. Mass. (ECF 50, 14 Sep 2026); D/S and 60-day grace still apply; DHS appeal; four-year/30-day content "only if it takes effect"; OPT unchanged, OPT-fees NPRM (RIN 1653-AB01) cleared OIRA 11 Sep, unpublished | falso / obsoleto | 11, 12, 13, 27 | V29 |
| 18 | 419 | claim 15 (CIP on I-20) | untouched (still points at section 7, which still exists) | C kept | n/a | V29 (#15 stays) |
| 19 | 455-458 | US source lines (USCIS x4, DHS STEM list, FR weighted rule, White House) | single pointer line to united_states_sources.md; MIT/Duke and Berkeley memo URLs kept (still cited by kept paragraph) | spostato | all | V30 |
| 20 | 464-465 | "Added in round 3b" US sources (Proclamation 11069, EO 14431, NPRM, fixed-admission rule, 60-day NPRM) | removed (covered by pointer) | spostato | 19, 20, 11, 14 | V30 |
| 21 | 22, 110, 312, 358-363 | HPI "33 US universities"; GMAC "one in three US employers"; H3 STEM = 3 attempts | untouched | VP | n/a | V02, V21, V24 |

## research/places/beyond-europe.md

| # | Lines | Before | After | Reason | Sources | Triage |
|---|---|---|---|---|---|---|
| 1 | 5 | confidence: US rules "read on official pages" | "US rules consolidated in visas_immigration/united_states/, verified 6 Oct 2026" (rest unchanged) | obsoleto | GUIDE header | B01 |
| 2 | 15 | STEM list narrow: 52.1301/1302/1304/1399 + 27.0305 + "30.7xxx analytics"; "general finance and business administration not on list" | same four 52.xx codes + 27.0305; general finance (52.0801) not on list; pointer to GUIDE Caso 7. Dropped "30.7xxx" and "52.0201" (not in GUIDE) | duplicato | 30, 31 | B02 |
| 3 | 22 | "A European master's rarely opens the US" | "alone does not give US work rights ... routes needing no US degree exist (J-1 Intern/Trainee, L-1, E-2 for Italian and UK nationals)" | falso (imprecise) | 8, 49, 68, 69, 17 | B04 |
| 4 | 27 | "Verified items already in the library ... are in places/visas-and-work-rights.md" | "Full official guide and single source of truth: GUIDE (verified 6 October 2026)" | spostato | n/a | B05 |
| 5 | 47 | "A 2026 addition (03.0204 ...) appears on a blog, not on the DHS PDF I read (unverified)" | ERRATUM: 03.0204 is on the 22 July 2024 list; earlier note wrong; later update not verified (OQ-26). Blog/2026 claim dropped | falso | 30, 31 | B08 |
| 6 | 61-69 | H-1B registration table FY2024-26; weighted lottery bullet incl. selection announcement dates and "about 211,600 ... near 40%" (visa-pros.com) | one bullet: pointer to GUIDE; 4/3/2/1 entries; DHS projections 15.29/30.58/45.87/61.16 as projections; FY2027 counts unpublished (OQ-09); FY2026 343,981/120,141/34.9% not comparable. 211,600 / ~40% removed. FY2024/25 rows and 31 Mar/1 Apr dates not in GUIDE, dropped | duplicato / falso | 16, 18 | B10, B11 |
| 7 | 70 | entry-level hires hurt by weighting | untouched | VP | n/a | B12 |
| 8 | 71 | "$100,000 ... guidance vacated 8 Jun ... In-country F-1 to H-1B change of status is outside the proclamation's charge" | vacated by D. Mass. 8 Jun and N.D. Cal. 30 Sep; not being collected; CoS outside only if granted; $103,265 NPRM has no in-country exception in text read | falso (incomplete) / obsoleto | 15, 19, 20, 21 | B13 |
| 9 | 76 | "12 months+ full-time CPT => no OPT; part-time CPT does not count" | full-time rule kept (8 CFR 214.2(f)(10)); "part-time does not count" dropped (not in GUIDE); added BCM 2608-01 (12 Aug) / 2608-02 (24 Aug 2026) and AAU v. DHS 1:26-cv-14520 filed 5 Oct, no ruling | falso (unsupported) / obsoleto | 1, 24, 25, 26 | B15 |
| 10 | 75 | cap-exempt employers (INA 214(g)(5)) | untouched | B kept (PARZIALE) | 17 | B14 |
| 11 | 287 | row US: "Limited. OPT/STEM OPT require a US degree..." | same plus "J-1 Intern/Trainee, L-1, E-2 (Italian, UK) need no US degree" | falso (imprecise) | 8, 49, 68, 69 | B19 |
| 12 | 389-391 | "FY2027 H-1B registration count of about 211,600 (visa-pros.com)"; ratios 24.8/28.7/34.9 | 211,600 removed; ratio line now "FY2026 34.9%, not comparable with per-person odds" | falso | 16 | B21 |
| 13 | 399 (claim 2) | "about 211,600 unique registrations" | RESOLVED (6 Oct 2026): USCIS FY2027 counts unpublished (OQ-09); secondary count unusable, not used | falso | 16 | B21 |
| 14 | 411 (claim 14) | resolved: extended | same plus pointer to GUIDE 3.2 | obsoleto | 19 | B21 |
| 15 | 416 (claim 19) | "blog's 2026 addition of CIP 03.0204 still unconfirmed" | RESOLVED: 03.0204 on 22 Jul 2024 list; later update unverified (OQ-26) | falso | 30, 31 | B21 |
| 16 | 417 (claim 20) | "Day-1 CPT risk analysis ... no primary source read" | PARTLY RESOLVED: CPT narrowed by BCM 2608-01/-02; AAU v. DHS pending | obsoleto | 24, 25, 26 | B21 |
| 17 | 422-426 | US sources: USCIS x4, USCIS alert, ICE STEM list | single pointer line to united_states_sources.md (SEVIS by the Numbers, Bendheim, MIT, Duke lines kept) | spostato | all | B22 |
| 18 | 50-57, 78-96, 234-253, 297, 340, 351-353, 362, 366-367, 374-378 | SEVIS stats; Duke/MIT; costs; myths/rules/Gemini corrections | untouched (consistent with verified facts or VP/D) | D / VP / B kept | n/a | B03, B07, B09, B12, B16-B18, B20 |

## research/countries/us-united-states.md

| # | Lines | Before | After | Reason | Sources | Triage |
|---|---|---|---|---|---|---|
| 1 | 4 | "Immigration detail is in the Atlas record and places/visas-and-work-rights.md §7" | points to GUIDE | spostato | n/a | S01 |
| 2 | 15 | "A European master's alone rarely opens the US ..." | "alone does not give US work rights ... routes that need no US degree exist (J-1 Intern/Trainee, L-1, E-2 ...)"; DHS projection sentence kept | falso (imprecise) | 8, 49, 68, 69, 18 | S02 |
| 3 | 37 | Visa headline: "$100,000 ... does not apply to a change of status inside the US ... guidance vacated June 2026" | extended to 21 Sep 2027; implementing policies vacated by two federal courts; not collected; CoS outside only if granted; pointer to GUIDE 3.2 | falso (incomplete) / obsoleto | 15, 19, 21 | S03 |
| 4 | ~205 (Sources, last line) | "Library files used for visas ...: VW §7" | adds GUIDE; VW §7 kept for school-stated STEM | spostato | n/a | S01 |
| 5 | 31, 154, 162, 170, 175, 181 | MIT benchmark; myth 3; rule 3; rule 8; gap 2 | untouched (consistent / VP) | B / VP | n/a | S04, S05 |

## Other research files

| File | Line | Before | After | Reason | Sources | Triage |
|---|---|---|---|---|---|---|
| research/glossary.md | 86 | "H-1B: employer-sponsored work visa allocated by lottery" | adds "Since FY2027 the lottery is weighted by wage level" | obsoleto | 18 | S06 |
| research/evidence/trends.md | 16 | "Post-study work rights are shrinking in the UK and the US" | UK shrinking; US "in flux": OPT/STEM OPT unchanged in force; D/S rule postponed by a court; CPT narrowed (under challenge); OPT-fees proposal unpublished; pointer to GUIDE section 3 | falso (US half unsupported) | 11, 12, 24-27 | S10 |
| research/evidence/hypotheses.md | 102 (VW-5) | "Applies to beneficiaries abroad; ... PI granted in part (scope not read)" | "not a clean escape": CoS outside only if granted; D. Mass. vacated; N.D. Cal. vacated and enjoined, order read, fee no longer in effect; pointer to GUIDE 3.2 | obsoleto / falso | 15, 21 | S11 |
| research/evidence/hypotheses.md | 380 (change log row VW-5) | "N.D. Cal. PI granted in part (scope not read)" | "vacated and enjoined the implementing agency policies (order read)" | obsoleto | 21 | S11 |
| research/evidence/hypotheses.md | 312, 324 | DB-d, SG-b | untouched | B / VP | n/a | S12 |
| research/countries (others), decisions, careers, product, it/README | various | one-line US cross-references | untouched; wording still true (VW still has a section 7 and bottom line 5 on H-1B) | B | n/a | S05, S07-S09, S13 |

## research/verification (live trackers; history left as history)

| File | Line | Before | After | Reason | Sources | Triage |
|---|---|---|---|---|---|---|
| CTV | 52 (new note after heading 4) | none | one note: US claims consolidated in GUIDE; P4/P15 US items superseded | spostato | n/a | L02 |
| CTV | 59 (P4 status cell) | "extension unknown" | + "RESOLVED 6 Oct 2026: extended to 21 Sep 2027; policies vacated by two courts" (question text left as it was) | obsoleto | 19, 21 | L01 |
| CTV | 86 (P4 log row) | "scope not read; lead could not reproduce" | row kept, appended "Update 6 Oct 2026: order read, vacated and enjoined, fee no longer in effect" | obsoleto | 21 | L01 |
| CTV | 254-255 (VW claims 16, 17 copies) | open | "[RESOLVED in part 6 Oct 2026 ...]" appended (original text kept) | obsoleto | 19, 21, 11, 12, 27 | L01 |
| CTV | 779, 791, 796, 797 (BE claims 2, 14, 19, 20 copies) | 211,600 secondary count; "extended?" open; 03.0204 blog; day-1 CPT | 211,600 removed; each annotated with 6 Oct 2026 status (unpublished counts; extended; 03.0204 on 2024 list; CPT narrowed) | falso / obsoleto | 16, 19, 30, 24, 25 | L01 |
| CTV | 70, 97, 148, 778, 810 | P15 / P60 / school STEM / Fulbright rows | untouched (covered by the single note above; 810 VP) | B / VP | n/a | L02 |
| FR | 27 (item 7) | "guidance vacated Jun 2026, appeal pending (... reconsideration denied 21 Sep 2026 ...)" | policies vacated by D. Mass. and vacated+enjoined by N.D. Cal.; reconsideration claim removed (unverified); status V incl. order read | falso (unverified) / obsoleto | 21, 22 | L03 |
| FR | 161 (item 97) | "PI granted in part; scope not read; briefing reportedly to 16 Oct"; status S | vacated and enjoined policies for Procs 10973 and 11069, docket entry 130, fee no longer in effect; status V | obsoleto | 21 | L03 |
| FR | "Claims to verify" 1 and 4 | item 97 listed as S-status | item 97 removed from S list, note "resolved 6 Oct 2026" | obsoleto | 21 | L03 |
| FR | new section 11 (items 117-120) | none | NEW live items: 117 fixed-admission rule postponed (ECF 50; 1st Cir. 26-2112); 118 CPT BCM 2608-01/-02 and AAU v. DHS; 119 OPT-fees NPRM at OIRA (RIN 1653-AB01, no amount); 120 visa integrity fee: statute only, collection unconfirmed (no amount of any OPT fee, no $785 total) | obsoleto (new state) | 11-13, 24-27, 48, 57, 58 | L03 |
| FR | 28, 117, 118, 123, 160 | weighted lottery; Proc. 11069; $103,265 NPRM; STEM list; 60-day NPRM | untouched | B | n/a | L03 |
| round-3b, round-3g, round-4f | after H1 | none | one note line: history; US now consolidated in GUIDE, guide prevails | spostato | n/a | L04, L05, L06 |
| round-3d, 5d, 6a | | | untouched | VP / D / B | n/a | L07-L09 |

## docs/

| File | Line | Before | After | Reason | Sources | Triage |
|---|---|---|---|---|---|---|
| docs/launch-audit/5-immigration-outside-europe.md | new line 3 | none | ONE banner line: US sections superseded by visas_immigration/united_states/; figures unverified, kept as history | obsoleto | n/a | A14 (DD default) |
| same | A01-A13 content (lines 13, 15, 21-25, 59-63, 77, 91-100, 217, 231, 233, 251, 270-273) | wrong/unsafe US values | NOT edited (history per DD A14). Includes A10 6,800 Chile/Singapore split (dropped from future work: not written anywhere new) | n/a | n/a | A01-A13 |
| docs/launch-audit/README.md | 56 | "US about $785 with the new $250 integrity fee" | "US: verified government total $535 (SEVIS $350 + visa fee $185); $250 integrity fee in statute, collection unconfirmed" + pointer | falso | 36, 48, 57, 58 | A03 |
| docs/launch-audit/README.md | 67 | "Bulgaria and Cyprus are outside the US visa waiver" | "Bulgaria, Cyprus and Romania" | falso | 52, 53 | A01 (same error, extra occurrence) |
| docs/launch-audit/README.md | 64-65, 68 | to-do text "rewrite 'a European master's does not open the US'" | untouched (planned task, quoted) | B | n/a | A17 |
| docs/GAP-ANALYSIS.md | 27, 104 | lists of consolidated guides | add US (section 7 of visas file is now a pointer) | spostato | n/a | A18 |
| docs/ATLAS-PROGRESS.md, docs/launch-audit/3 and 7 | | | untouched | D / VP / B follow-ups | n/a | A15-A18 |

README.md, CREDITS.md: no US-visa content, untouched.

## Deliberate non-actions
- No $250 integrity-fee fact, no OPT fee amount, no $785 total, no 211,600 / -38.5%, no D/S rule as in force, no "$100k applies/does not apply" beyond GUIDE 3.2. The 6,800 Chile/Singapore split is nowhere written in research/ or docs/ (only in the untouched LA5 history).
- VP rows left untouched (V02, V08, V12 text, V21, V24, V26, B03, B07, B12, B17, S04, S08, S12 324, L09).
- The "VW section 7" references (USB, FR, CTV) still resolve: VW section 7 exists (heading "7. United States", pointer + school-stated STEM paragraph).
- visas_immigration/ link style: plain backticked paths (same as VW 165/180-215); no markdown links were added or broken (checked).

## Final grep (section 3 strings over research/, docs/, README.md, CREDITS.md)
- "effective 15 Sep 2026 / 30-day grace / four years / maximum of four": remaining US hits only in LA5 (history, banner), round-3b (history log), and VW claim 17 and FR item 117 where the rule is described as POSTPONED.
- "does not apply to a change of status / shielded / outside the proclamation's charge": only LA5 lines 26 and 61 (history). Elsewhere the "if granted" conditions are present.
- "scope not read / granted in part / extension unknown": remain only in CTV rows 59/86 (history rows, followed by the 6 Oct update), round-3g and research/_working/progress.md:167 (history logs, not edited).
- "$785": only LA5 (history). "integrity fee": LA5 (history), FR item 120 (unconfirmed), docs/launch-audit/README.md:56 (unconfirmed).
- "ESTA ($40)", "ended 2 Sep / from 6 Sep / 18 Jun 2025", "RIN 1653-AA97", "Diversity Visa open to EU", "6,800 Chile and Singapore": only LA5 (history).
- "Bulgaria and Cyprus" without Romania: only LA5 (history).
- "EU and non-EU identical / routes identical": VW heading removed; remaining hits are the corrective sentence (VW 316), the README to-do text quoting the phrase, and LA5.
- "03.0204": BE line 47 and claim 19, CTV 796: all carry the correction (on the 22 Jul 2024 list).
- "211,600 / 38.5% / near 40%": no US hits left (other hits are unrelated percentages).
- "reconsideration denied 21 September / brief filed 8 September": absent from live files; remain only in round-3b history log.
- "before entering", "41 countries", "40 entries": none.

## Left undone (and why)
- LA5 content not corrected in place (DD A14 default: banner only).
- round-3b/3g/5d/6a/3d/4f bodies and research/_working/progress.md untouched (history).
- VP rows (see above) untouched by instruction.
- docs/launch-audit/3 and 7 follow-up items (J-1/L-1/E-2 missing routes, glossary) left as audit to-dos; the glossary item was fixed in research/glossary.md.

---

## Integrazioni e Correzioni del Council di Verifica (07/10/2026)
A seguito dell'audit a 5 agenti (report in `visas_immigration/_review/REVIEW-2026-10-07-US.md`), applicate le seguenti correzioni:
1. **Travel Signature OPT (riga 380):** Corretta la validità della firma di viaggio da 12 mesi a **soli 6 mesi** per studenti in post-completion OPT e STEM OPT (8 CFR 214.2(f)(13)).
2. **Diritti lavorativi dei familiari (Caso 12):** Integrata l'autorizzazione automatica al lavoro per coniugi L-2 (*L-2S incident to status*; la citazione 8 CFR 274a.12(a)(18) era errata: il paragrafo e [Reserved]) senza obbligo di EAD; integrata la disciplina EAD per coniugi J-2 (8 CFR 274a.12(c)(5)) e coniugi H-4 (8 CFR 274a.12(c)(26) con I-140 approvato).
3. **Divieto unpaid su STEM OPT (Caso 10):** Esplicitato il divieto assoluto di volontariato, tirocini non retribuiti e contratti 1099 su estensione STEM OPT (8 CFR 214.2(f)(10)(ii)(C)).
4. **Trappola visto 16 mesi ed esclusioni AVR (Caso 4):** Chiarito che l'Automatic Visa Revalidation (22 CFR 41.112(d)) NON copre i viaggi in Europa e che l'Interview Waiver per F-1 è stato abolito dal Department of State il 01/10/2025.
5. **Divieto di cambio status da ESTA (Caso 11):** Esplicitato il divieto statutario ex INA § 248(a)(4) e la presunzione di frode dei 90 giorni ex 9 FAM 302.9-4.
6. **Soglia ACWIA ridotta (Tabella 4.3):** Specificata la soglia di $\le 25$ dipendenti a tempo pieno ex INA 214(c)(9)(B) per la tariffa agevolata di $750.


## Ricontrollo delle correzioni esterne (Claude, 07/10/2026)
Ogni punto della revisione esterna e stato riletto su fonte primaria (eCFR 02/10/2026, 8 U.S.C. 1258 e 1184 via LII, pagina USCIS L-1A, tabella di reciprocita Italia).
- **Confermati:** firma di viaggio di 6 mesi per EAD post-completion OPT (8 CFR 214.2(f)(13)(ii)); AVR solo per assenze fino a 30 giorni in territorio contiguo (22 CFR 41.112(d)(2)(ii)); divieto di cambio status per entrati con ESTA (INA 248(a)(4)); ACWIA ridotta a 750 USD per datori con 25 dipendenti o meno (INA 214(c)(9)(B)); EAD J-2 ((c)(5)) e H-4 ((c)(26)); colloquio obbligatorio per F-1 dal 01/10/2025; L-2S (USCIS).
- **Corretti:** citazione L-2 (8 CFR 274a.12(a)(18) e [Reserved]; fonte ora USCIS US-SRC-68); frase "W-2 / 1099 / volontariato" sullo STEM OPT riscritta secondo cio che dice il regolamento (retribuzione commisurata, rapporto di lavoro dipendente); eliminati "attese 1,5-2 mesi" a Milano/Roma, il rischio di "cancellazione SEVIS" per un viaggio a Natale e il rischio 221(g) STEM (non supportati da fonte letta); la frase sul rientro con OPT pendente ora distingue rientro e ripresa del lavoro.
- **Spostati in punti aperti:** regola dei 90 giorni ESTA e 9 FAM 302.9-4 (OQ-29), contratti 1099 (OQ-28), firma di 6 mesi e STEM OPT (OQ-30). "Rinuncia ai ricorsi (INA 217)" e "interdizione permanente" tolti dal testo principale.
- **Fonti aggiunte:** US-SRC-98 (8 CFR 274a.12), 99 (22 CFR 41.112), 100 (8 U.S.C. 1258), 101 (8 U.S.C. 1184). Totale 101 fonti, 30 punti aperti.


## Chiusura punti aperti (07/10/2026)
Integrazione dei risultati di tre gruppi di verifica (A: Dipartimento di Stato e consolati; B: CBP, USCIS, SEVP, studio e famiglia; C: atti, docket e Agenda) piu un controllo mirato su OQ-14. Accesso del 07/10/2026; i docket sono letti fino al 06/10/2026; travel.state.gov protetto da anti-bot (rilettura dal vivo non riuscita, si e usata la copia del 06/10/2026; il controllo non e stato aggirato).

**Totali:** fonti 101 -> 143 (US-SRC-102..143); punti aperti 30 -> 22 ancora in elenco (4 OPEN: OQ-05, 08, 09, 13; 18 PARTIAL: OQ-01, 03, 04, 06, 07, 10, 11, 12, 14, 15, 16, 18, 19, 22, 24, 25, 27, 30), 8 chiusi (OQ-02, 17, 20, 21, 23, 26, 28, 29) nella sezione "Punti chiusi il 2026-10-07". Numeri OQ invariati. `last_verified` 2026-10-07. Costi: nessuna cifra cambiata; aggiunta solo la riga informativa I-936 25 USD (EUR 22,31, non dovuta) in tabella 4.4.

### Correzioni al registro delle fonti
- US-SRC-41: URL corretto in `/students/study/traveling-as-an-f-or-m-student` (il vecchio `/students/travel/...` restituisce 404); testo aggiornato (firma DSO entro un anno, assenza max 5 mesi).
- US-SRC-63 (Proclamazione 10998): ora lo slug corto `...to-protect-the-security-of-the-united-states.html`; lo slug lungo `...from-foreign-terrorists...` e la pagina della Proclamazione 10949.
- Aggiornati gli "oggetto" di US-SRC-27, 29, 43, 50, 61, 62, 65, 93, 95, 96, 97; riusati (dedupe) US-SRC-61, 63, 65, 85, 93, 29, 41, 43, 97 al posto di righe duplicate dei gruppi.
- Fonti raggiunte solo da indice di ricerca o copia Wayback precedente alla data del fatto (US-SRC-110, 111, 112, 116) registrate ma non usate nel testo della guida.

### Per punto
| OQ | Prima -> dopo | Righe della guida toccate (par.) | Fonti |
| :--- | :--- | :--- | :--- |
| OQ-01 | open -> PARTIAL (nessuna riscossione documentata) | 275 (3.4) | 57, 58, 48, 115 |
| OQ-02 | open -> CLOSED (indirizzi dei 4 avvisi; slug 10998 corretto) | 68, 122 (Casi 1 e 4), 284 | 102, 103, 104, 105, 63 |
| OQ-03 | open -> PARTIAL (I/TN/TD dal 1 ottobre verificato; "5 anni di handle" no) | 106 (Caso 3), 281 (3.4), 379 (5.1) | 103 |
| OQ-04 | open -> PARTIAL (AA97 NPRM 02/2027; AB01 ancora non pubblicata) | 212 (Caso 10), 274 (3.4) | 27, 135 |
| OQ-05 | open -> OPEN (nessuna decisione su ECF 8; circolari non ritirate) | 270 (3.3) | 26, 24, 25, 143 |
| OQ-06 | open -> PARTIAL (appello 26-2112, nessuna istanza di stay) | 252 (3.1) | 12, 13, 143 |
| OQ-07 | open -> PARTIAL (dettagli docket; EO 14431 aggiunto) | 86, 260-262 (3.2) | 21, 22, 23, 142, 15, 138 |
| OQ-08 | open -> OPEN (correzione 91 FR 57516; nessuna final rule) | 264 (3.2) | 20, 141 |
| OQ-09 | open -> OPEN (nessun conteggio FY2027) | invariato (Caso 2) | 16 |
| OQ-10 | open -> PARTIAL (validita 2 anni verificata; obbligo social non in vigore documentato) | 222 (Caso 11) | 93, 54, 117 |
| OQ-11 | open -> PARTIAL (H-4, J-2, coniuge di cittadino; restano CR-1/IR-1 e EAD J-2) | 234-238 (Caso 12) | 118, 119, 120, 121 |
| OQ-12 | open -> PARTIAL (sospensione DV dal 31/08; DV-2027 TBA) | 91 (Caso 2), 284 (3.4) | 104, 105 |
| OQ-13 | open -> OPEN (NPRM; commenti al 10/11/2026) | 282 (3.4) | 14 |
| OQ-14 | open -> PARTIAL (nessun obbligo federale di assicurazione F-1 in 8 CFR 214; resto aperto) | 364, 382, 397 (4, 5.1, 5.3) | 134, 39, 05 |
| OQ-15 | open -> PARTIAL (regola 212(e) verificata; Fulbright e inferenza) | 155 (Caso 5), Caso 8 | 131, 132, 94 |
| OQ-16 | open -> PARTIAL (USA in Regione 12; finanziamento dipende dal bando) | 161 (Caso 6) | 133 |
| OQ-17 | open -> CLOSED (trattati BG/RO solo E-2, CY assente; L-1B 5 anni) | 87-88 (Caso 2), par. 6 | 106, 113, 114 |
| OQ-18 | open -> PARTIAL (UK/IN/CN verificate; BG/CY/RO solo Wayback) | tabella par. 1 (riga F-1), Casi 1-4, 11, 4.1 (cfr. 88-89) | 107, 108, 109 (110-112 solo in OQ) |
| OQ-19 | open -> PARTIAL (Dates for Filing ottobre 2026; Final Action non letta) | 90 (Caso 2) | 129, 130 |
| OQ-20 | open -> CLOSED (contenuto letto; atti non finali) | 277-279 (3.4), tab. 4.4 (361) | 95, 96, 97 |
| OQ-21 | open -> CLOSED (nessuna tassa I-94 per arrivi aerei) | 226 (Caso 11), tab. 4.2 | 55 |
| OQ-22 | open -> PARTIAL (deposito online e SSN verificati; tempi USCIS no) | 204 (Caso 10), 395 (5.3) | 124, 125, 126, 43 |
| OQ-23 | open -> CLOSED (nessuna modifica fino al 07/10) | 286 (3.4), par. 6 | 63, 64 |
| OQ-24 | open -> PARTIAL (data 06/09/2025 solo da titoli in indice di ricerca) | nessuna (non usata) | 61, 116 |
| OQ-25 | open -> PARTIAL (serie storica verificata; luglio-agosto no) | 136 (Caso 4) | 65, 85 |
| OQ-26 | open -> CLOSED (prova negativa: elenco 22/07/2024 resta il piu recente) | 171 (Caso 7) | 30, 31, 127, 128 |
| OQ-27 | open -> PARTIAL (distretti elencati; vincolo in prenotazione non verificabile) | 133 (Caso 4) | 85, 61 |
| OQ-28 | open -> CLOSED (rapporto dipendente genuino; "1099" non nelle fonti) | 205 (Caso 10) | 29, 122 |
| OQ-29 | open -> CLOSED (9 FAM 302.9-4: presunzione dei 90 giorni) | 221 (Caso 11) | 136, 137 |
| OQ-30 | open -> PARTIAL (discrepanza 1 anno / 6 mesi non risolta; si consiglia 6 mesi) | 208 (Caso 10), 390 (5.2) | 41, 123, 01 |

### Nuovi sviluppi inseriti nel par. 3
- EO 14431 del 18/09/2026 (91 FR 60501, FR 2026-19555) sull'integrita del programma H-1B: par. 3.2 e Caso 2 (US-SRC-138).
- Atti all'esame OIRA e non pubblicati: DHS/USCIS RIN 1615-AD00 e DOL RIN 1205-AC29 (par. 3.4; US-SRC-139, 140).
- RIN 1653-AB01 (tariffe OPT) ancora non pubblicata; RIN 1653-AA97 "Practical Training" con NPRM previsto 02/2027 (Caso 10, par. 3.4; US-SRC-27, 135).
- Presenza online estesa a I, TN, TD dal 1 ottobre (par. 3.4; US-SRC-103); sospensione DV dal 31/08/2026 (US-SRC-104).

### Non inserito nel testo della guida
- Date e valori letti solo tramite indice di ricerca o copia Wayback precedente al fatto: data originaria 06/09/2025 della regola del Paese di residenza (OQ-24); tabelle di reciprocita di Bulgaria, Cipro, Romania (OQ-18); pagina d'iscrizione DV (OQ-12).
- Date "Final Action" del Visa Bulletin (OQ-19), tempi di elaborazione USCIS (OQ-22), regola dei "5 anni di handle" (OQ-03), schermata di pagamento visa integrity fee (OQ-01): non verificabili su pagina primaria.
- Inferenza sul Fulbright e 212(e) (OQ-15): solo in punti aperti.

### Verifiche
Script: ogni `[US-SRC-xx]` della guida e dei punti aperti esiste nel registro e ogni fonte e citata; ogni OQ citato nella guida e definito; nessuna riga di tabella con cifre senza fonte; importi EUR = USD / 1,1204 arrotondati al centesimo; nessun `$\le`. `npm test`: 11 suite passate. `data/atlas/us.js` controllato e non modificato: nessun conflitto con i punti cambiati (i claim us-i20, us-euro, us-100k restano coerenti).

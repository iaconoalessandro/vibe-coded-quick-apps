# Pricing Strategy Recommendation — Admetia — 10 October 2026

Status: researched recommendation, ready for product review. Prices are test hypotheses, not validated willingness to pay. No billing, paywall, account system, analytics, or public copy was changed.

Prepared using `/Users/alessandro/.claude/skills/pricing-strategy/SKILL.md` and its model-selection reference. The owner confirmed the goal is **to turn Admetia into a paid product** and requested comparable-product research. This supersedes the existing free-only positioning for the proposed future product; the currently published product remains free until a migration is implemented.

## Recommendation

Sell a **Decision Pass at €29, paid once for 90 days**, with free discovery and a useful sample evaluation. Offer an **Application Year at €99, paid once for 365 days**, after evidence shows that buyers need longer access. Both paid options include the same complete toolkit. Start with master's applicants who already have a shortlist and upcoming deadlines; expand to career and relocation buyers only after their paid workflows are complete.

Charge for turning a profile and shortlist into a usable decision plan: full programme comparisons, what-if analysis, deadlines, and an export the buyer can retain. Keep programme facts, published prerequisites, sources, methods, uncertainty, and general country/career guides public. The first paid proposition can package capabilities already present, but its commercial weakness is that equivalent older functionality is currently available free. Validate purchase demand before investing in a broad subscription platform.

## Current state and problem to solve

Admetia is a static HTML/CSS/JavaScript site on GitHub Pages. Its three models serve seven calculator tracks and 136 programmes. It also has a directory, career reference, hiring planner, and Atlas covering 46 countries and 200 hubs. Full results, what-if tools, deadline views, and a printable battle plan already exist. Saved answers live in browser storage. There are no paid entitlements or accounts, and the optional visit counter is disabled (`COUNTER = ''`).

`PRODUCT.md` and the front page promise free access. The repository contains no user-research or willingness-to-pay evidence. The problem is therefore to establish a paid offer, a buyer, and a respectful migration—not merely select a monthly price.

Evidence reviewed: `PRODUCT.md`, `README.md`, `index.html`, `method.html`, `js/storage.js`, `js/stats.js`, `js/results-kit.js`, the scoring modules, `tools/build.js`, and `docs/PLANNING-INTELLIGENCE-SPEC.md`. The planning specification describes future budget and timeline tools; their presence in that document is not evidence they are implemented.

## Buyer, value, and segmentation

| Segment | Purchase situation | Value to test | Priority |
|---|---|---|---|
| European/Italian pre-experience master's applicant | Comparing several programmes with deadlines approaching | Less research and comparison work; a clearer shortlist and application sequence | First pilot; closest to the project's audience |
| MBA applicant | Comparing schools, test improvements, and several application rounds | Structured competitiveness comparisons and scenario analysis | Second segment; test separately from master's applicants |
| Graduate considering work or relocation abroad | Choosing destinations and timing a move | An integrated budget, timeline, and route comparison | Later; general country guides alone are a weak paid proposition |
| University career office or adviser | Supporting many students repeatedly | Multi-user workflows and administration | Later research; no enterprise SKU until needs and delivery are established |

These purchase situations are hypotheses derived from the product, not observed customer behaviour. Student budgets may constrain conversion; MBA consulting prices do not establish student willingness to pay.

The quantifiable value is **time needed to build a source-backed shortlist and plan**. In moderated pilots, record the time taken to complete the same task with Admetia and with the participant's normal tools. Record errors and omissions too. Do not advertise an unmeasured number of hours saved, admission improvements, or financial returns.

## Recommended pricing model and value metric

**Model:** a flat, time-limited consumer pass with a free reference layer. No automatic renewal at launch. Re-scoring and exploration are unlimited within a pass.

**Value metric:** one person's **active decision period**. The billing unit is a 90-day or 365-day access entitlement, not a score, school, export, or query. Time is a practical proxy for the application episode; verify whether 90 days covers the actual task.

Per-seat pricing does not fit an individual buyer. Per-calculation charges would penalise the what-if exploration that makes Admetia useful. A monthly subscription assumes recurring value that has not been demonstrated. Lifetime access would fund ongoing data maintenance only once. An annual option is appropriate for a demonstrated long application cycle, not a default imposed on every student.

## Proposed tiers

All euro amounts below are proposed final consumer price targets, including applicable taxes. Actual net revenue depends on the seller's tax treatment and payment arrangement; the figures are not tax advice. Confirm checkout totals before launch.

| Tier | Audience | Price and term | Included | Launch status |
|---|---|---|---|---|
| Explore | Readers discovering programmes and paths | €0 | Public directory and guides; published requirements, dates, sources and methods; one chosen programme's complete profile evaluation; source-backed eligibility blockers for programmes evaluated | Proposed free boundary; requires implementation |
| Decision Pass | Applicant with a shortlist and current application window | €29 once / 90 days | All calculator tracks and full programme result lists; unlimited scenario exploration; personalised deadline view; battle-plan export; updates to the supported paid tools during the term | First paid offer to validate |
| Application Year | Applicant planning tests and multiple rounds over a longer period | €99 once / 365 days | Everything in Decision Pass for a longer period; no additional feature restrictions | Introduce after longer-duration demand is observed |

The annual price is approximately 15% below four €29 passes (€116), although four passes cover 360 days. It is 3.4 times the entry paid price and includes roughly four times the duration. Decision Pass is the sufficient offer for a short cycle; Application Year is useful only when the buyer needs the longer period. Do not use a misleading “best value” label for short-cycle buyers.

A same-cycle upgrade from Decision Pass to Application Year costs **€70** and extends the total entitlement to 365 days from the original activation date. Disclose that date before payment. Access activates on the first successful use of the paid toolkit; show the expiry date explicitly.

Keep previously generated results readable and exportable after expiry. Re-computation with current paid tools requires an active pass. Retain the last computed output locally so this policy is technically possible. If that preservation is not ready, do not launch expiration gates.

Do not include unbuilt cross-country budgets, automatic reminders, cloud sync, human admissions reviews, or a support SLA in launch pricing. They would change delivery obligations and, in some cases, the privacy promise.

## Specific free-to-paid upgrade trigger

The reader chooses a programme, receives a complete evaluation, and then wants to compare the rest of their shortlist or test several improvements across programmes. Offer the pass at **“Compare my full shortlist”** or **“Build my application plan.”**

Explain this boundary before the questionnaire starts. The free result must include its actual verdict, eligibility blockers, sources, and limitations; showing a blurred result after collecting answers would create avoidable frustration. Paid and free evaluations use the same model. No tier buys a stronger verdict, greater certainty, or an admission guarantee.

A sample evaluation demonstrates the product, but does not prove a natural upgrade trigger. Watch how often users voluntarily request the full comparison and whether they pay for it. If most readers complete their task with one result or the free alternatives, change the offer before tightening the free boundary.

## Competitive pricing context

Official vendor pages checked on 10 October 2026. Prices retain the vendor's published currency; there is no FX conversion or assumption about comparable tax treatment. Checkout may differ by region or promotion.

| Comparable product | Published model and price | Relevant comparison and limitation |
|---|---|---|
| [Mastersportal](https://www.mastersportal.com/about-us/) | Free for students | Programme discovery, requirements, fees and study destinations establish a strong free alternative. Breadth alone is an insufficient paid differentiator. |
| [GMAT Club](https://gmatclub.com/start.php) and its [chances tool](https://gmatclub.com/gmat-chance-calculator/web/) | Free membership; an admissions chances tool is available | Direct competitive pressure on charging for a standalone MBA score. GMAT Club's own overview describes its membership and resources as free. |
| [ApplicantLab](https://www.applicantlab.com/pricing/) | $349 for one year of full MBA application access | A paid admissions-workflow reference. Includes school-specific guidance, essay tools, interview preparation and support; substantially broader application assistance than Admetia's scoring. |
| [Teal / Teal+](https://help.tealhq.com/en/articles/9530153-teal-vs-teal) | Free tier; $13 weekly, $29 monthly, $79 quarterly | Free job tracking with paid analysis and AI features supports a free-reference/paid-workflow boundary. It serves job applications rather than programme choice. |
| [Rezi](https://www.rezi.ai/pricing) | Free tier; Pro $29/month; Lifetime $149 once | Shows payment for a finished application asset and advanced tooling. Its resume-writing features and human review are not included in Admetia. |

**Competitive position: value.** Admetia should sell an affordable, independent planning toolkit to price-sensitive applicants. The proposed €29 pass is a hypothesis about accessible value, not a mechanically discounted version of a dollar competitor price. Free substitutes create more immediate pressure than expensive consultants.

The defensible proposition is the combination of sourced programme rules, comparative scenario analysis, EN/IT access, and browser-local profiles in one maintained workflow. Source volume and a raw chance score are easier to substitute. Test this proposition directly; competitor prices alone do not validate it.

## What the static architecture permits

The current build publishes the scoring code and model data. Adding a JavaScript flag or hiding HTML does not enforce paid access. Existing public versions can still be copied or run locally; charging cannot make previously published code exclusive.

Recommended delivery: keep the reference site public, add hosted checkout and server-verified entitlements, and deliver the maintained premium application assets only after a valid entitlement check. Profiles and scoring can remain local in the browser. Purchase identity and billing records live separately from profile answers. Authenticated delivery controls access to the maintained service, but a paying user can still copy client-side assets; accept this limit and compete on usability and maintenance.

Do not move profile scoring to a server merely to hide the algorithm: that would contradict the present privacy promise. GitHub Pages alone cannot perform trusted entitlement verification; a separate service or hosting arrangement is a launch dependency. Payment status must come from the provider/server, never a trusted return-URL parameter or localStorage flag.

The strongest longer-term paid product is a maintained application workspace. A shortlist/task organiser and dated plan can add value, but those features must be built and verified before being sold. Keep the existing calculator bundle as the initial demand test; avoid claiming that a currently free PDF is already a new premium feature.

## Pricing-change rollout and migration

1. **Prepare the offer.** Create an EN/IT pricing prototype with a complete sample evaluation, precise included features, final prices, activation/expiry rules, and screenshots of actual outputs. Test it with 12–15 target applicants, splitting master's and MBA feedback. Ask what they currently use and pay for; treat hypothetical enthusiasm as weaker evidence than purchases.
2. **Preserve the current release. Grandfathering: yes, for existing functionality.** Publish a frozen legacy version at a clearly labelled stable address and leave it accessible. Explain that its data is no longer maintained and retain its source/check dates. Keep existing public routes functioning, saved-answer keys intact, and a way to reopen/export existing results without buying. Offer migration to the maintained paid experience rather than pretending old anonymous users can be reliably identified from localStorage. Do not grant lifetime updates to the future paid service.
3. **Announce 30 days before the change.** Use a calm EN/IT notice on the site explaining what stays public, what becomes paid, the legacy option, and the effective date. There is no established customer mailing list in the repository; do not assume one. Change current “free” copy only when the migration is real and ready.
4. **Run a small paid pilot.** Start with the Decision Pass and a bounded number of buyers once access delivery, export preservation, receipts, and refunds work. Each buyer gets the exact promised term. If a manual pilot is used instead, describe it as manual delivery and price its actual deliverable; do not charge for an unbuilt self-serve pass.
5. **Test price, then broaden.** Compare €19, €29 and €39 sequentially under the same scope, or randomly if qualified traffic supports it. Honour each buyer's displayed price. Record acquisition channel and timing; sequential cohorts are confounded by application deadlines. Freeze package changes during price comparison. Introduce the annual offer only after evidence of use beyond 90 days.

**Rollback:** stop new sales if access fails, expiry removes stored outputs, or a material data error affects the sold result. Fix or refund affected orders. Honour active passes if the experiment ends. If willingness to pay is weak, keep discovery available and revise the paid workflow rather than increasing result restrictions.

## Validation metrics and counter-metrics

No baseline is currently available. The following are proposed pilot rules, not market benchmarks.

| Metric | Definition / decision use | Counter-metric |
|---|---|---|
| Purchase conversion | Paid orders / eligible offer viewers, separately by segment, language, channel and price | Free evaluation completion and abandonment; a stronger gate must not create misleading “conversion” improvements |
| Net contribution per offer viewer | Receipts less applicable tax, fees, refunds and variable delivery/support cost, divided by offer viewers | Task success and refund reasons; the highest price is not automatically the best offer |
| Paid activation | Buyers who complete a full comparison and save/export a plan within seven days / buyers | Time to first useful output and requests for help |
| Buyer task success | Buyers who can produce a sourced shortlist and next-step schedule | Material misunderstandings, incorrect prerequisites, and unsupported certainty |
| Refund rate | Refunded paid orders / paid orders in a fully observed cohort | Complaints and privacy/access failures; low refunds alone do not prove satisfaction |
| Repeat purchase / annual upgrade | Buyers returning after a pass or extending to a longer term | Successful completion of the application task; leaving after finishing is a good outcome |
| Support burden | Actual support minutes per buyer and per free evaluation | Model/data corrections and accessibility failures |

Use qualified offer viewers rather than all site visitors when reporting conversion. Existing anonymous page/event counts cannot establish unique-user cohorts or reliably connect a purchase to profile activity. Measure orders from payment records and use voluntary pilot observation for task success. Any additional aggregate event tracking must preserve the existing opt-out and never transmit answers, scores or shortlist contents.

For a directional pilot, aim for 20 completed paid orders, at least 70% seven-day activation, and no more than 10% refunds. Stop immediately for a material privacy or access failure. These small-cohort thresholds are practical triage rules; they are not statistically reliable proof of product-market fit or a winning price. Observe the full refund window before declaring success.

Traditional subscription churn and monthly recurring revenue are poor primary measures for non-renewing passes. Report repeat purchasing, annual upgrades, and task completion instead. Expansion is a duration upgrade, not a per-seat increase.

## Revenue sensitivity, not a forecast

At €29, **1,000 qualified offer viewers** converting at 1%, 3% or 5% produce 10, 30 or 50 purchases and **€290, €870 or €1,450 in gross receipts**. These are arithmetic scenarios, not expected conversion rates or monthly revenue. Taxes, payment charges, refunds, customer acquisition, support, hosting and research maintenance reduce the amount available to run the product.

Price reflects buyer value. Unit economics are a separate sustainability check: measure delivery and maintenance before scaling. Do not infer a high-margin business merely from cheap static hosting.

## Risks and specific mitigations

| Risk | Mitigation |
|---|---|
| Free alternatives and the old public release satisfy the need | Test actual purchases before a platform rebuild; develop a better integrated maintained workflow if the calculator package does not sell |
| Changing the free promise damages trust | Advance notice, a stable legacy release, preservation of saved outputs, and accurate EN/IT pricing copy |
| Stale or incomplete research undermines a paid offer | Recheck the paid launch scope, show source/check dates and gaps, and stop selling unsupported workflows; do not assume historical audit findings are all still current |
| A score is mistaken for a calibrated admission probability | Keep the current competitiveness/eligibility interpretation, caveats and sources beside paid results; do not make outcome claims |
| People pay for too long or lose their work on expiry | Offer the shorter pass prominently, show exact expiry, avoid auto-renewal, and preserve/export prior outputs |
| Privacy changes silently during checkout or analytics | Separate billing identity from local profiles; document the exact new data flow before launch; keep sensitive fields out of event tracking |
| The paid product becomes a roadmap promise | Sell only working features; show budget/planner expansion separately until delivered |

## First implementation scope

The next concrete product work is an EN/IT pricing and migration prototype, a complete free sample result, and a reviewable entitlement/privacy design. Payment delivery and expired-output preservation must work before charging. A migration should update `PRODUCT.md`, public free-only claims, navigation, accessibility and translation checks together; this strategy document does not apply those changes.

Launch Decision Pass first. Validate whether buyers pay €29 for the full shortlist-and-plan workflow. Use that evidence to choose between the €19–€39 test range, longer access, or a richer workspace. The €99 annual option remains a proposed duration offer until longer-cycle demand is demonstrated.

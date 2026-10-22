Act as the lead information architect, UX designer, accessibility specialist, and frontend engineer for Admetia. Audit and implement a complete restructuring of the existing website in this repository.

Live reference: https://iaconoalessandro.github.io/admetia/

The outcome is a usable education, career, and relocation resource. Visitors should reach information relevant to their current decision without reading unrelated material. Preserve the full depth of the existing content while improving its organization, discovery, presentation, and accessibility.

<audience_and_context>
Serve these overlapping situations:
- A student choosing and comparing master's programmes, costs, prerequisites, and admissions options.
- Someone deciding whether further study supports a particular career.
- An internship seeker or recent graduate finding entry routes, recruiting dates, and application preparation.
- A working professional exploring progression, a career change, or an experienced-hire route.
- Someone comparing countries and cities, then planning work, relocation, and arrival.
- An undecided visitor exploring possibilities without knowing the site's terminology.

People can move between these situations. Do not make them choose an exclusive persona or complete a questionnaire before browsing.

Initial observations to verify against the current repository and browser:
- The homepage and global navigation strongly emphasize admissions calculators despite the broader content.
- Country guides combine hubs, hiring, visas, pay, daily life, arrival tasks, and extensive sources in one long view.
- Career Explorer already offers routes by background, field, and desired role, plus comparisons and a compass. Build on useful existing patterns.
- Some visitor-facing content includes research-production commentary. Preserve it in an accessible methodology/provenance location while separating it from practical guidance.

These are starting observations, not a complete audit or a predetermined sitemap.
</audience_and_context>

<skills>
Read and apply the installed skills at the relevant stage:
1. cuellarfr/design-skills: design-critique, particularly its information architecture and interaction-pattern guidance.
2. cuellarfr/design-skills: journey-mapping, for current and proposed journeys.
3. pbakaus/impeccable: use init/shape for context and planning, extract for shared components, then adapt/harden/audit/polish as relevant.
4. cuellarfr/design-skills: accessibility-audit, targeting WCAG 2.2 AA.
5. vercel-labs/agent-skills: web-design-guidelines, for a final implementation review of all affected templates and components.

Use the installed versions' actual invocation names. If a skill is missing, report that accurately and continue work that does not depend on it. Do not claim to have invoked unavailable tools.

My preservation, usability, and accessibility requirements take priority over generic skill advice to shorten copy, remove sections, maximize visual novelty, or limit essential verification. For Impeccable, treat tools as Operate surfaces and substantive guides as Read surfaces. Keep design distinct through useful structure and careful typography. Do not turn the site into a marketing showcase.
</skills>

<non_negotiables>
1. Preserve all existing substantive content, data, examples, caveats, exceptions, citations, dates, downloadable resources, calculations, and functionality. Do not replace detailed material with summaries, shorten the underlying explanations, or delete content to achieve a cleaner screen. Keep the original text intact where possible. You may rewrite interface labels and add orientation text; these additions must not substitute for the full material.
2. Relocated content must remain easy to find in the rendered website. Keeping it only in source files, an unused data object, or an unlinked archive is not preservation. Reuse a canonical source when multiple journeys need the same information.
3. Keep critical prerequisites, relevant deadlines, major costs, blockers, uncertainty, and limitations visible at the point of decision. Do not hide facts someone needs to interpret a score, comparison, or next step correctly.
4. Preserve the existing stack and GitHub Pages compatibility. Inspect the build and content generators before editing. Work at the source/template level for generated pages. Do not introduce React, Next.js, a backend, accounts, or external tracking just to restructure this site.
5. Preserve English/Italian support, local browser storage, existing saved answers, calculator behavior, sources, and useful theme options. Do not expose private profile inputs in shareable URLs. Preserve existing public links, query parameters, and hash routes through working compatibility mappings where routes change.
6. Page length can differ when the task requires it. Optimize coherent tasks and comprehension; do not enforce identical page lengths, arbitrary word limits, a universal click-count rule, or a fixed number of navigation items.
7. Follow repository instructions and inspect existing uncommitted work. Work in an isolated local branch or worktree without overwriting unrelated changes. Do not push or deploy as part of this request.
</non_negotiables>

<workflow>
Complete the stages below in order, then carry the implementation across the whole site. Maintain a checklist with concrete completion evidence. Give short progress updates and continue; do not finish after an audit, sitemap, homepage, or sample component.

1. INVENTORY AND BASELINE

Inspect the repository, build scripts, generators, content/data sources, navigation, and representative live pages at desktop and mobile sizes. Inventory all published routes, dynamic/hash views, languages, page types, tools, and downloads. Distinguish published content from research that was never part of the public site.

Create a content migration ledger with stable identifiers for content blocks and data records. Record original route/anchor, source location, purpose, intended audience/task, future destination, presentation pattern, and verification status. Record links and sources as well as text. Capture enough original content to compare after migration; word counts alone are not proof of preservation.

Find duplicated entry points, ambiguous labels, inconsistent page structures, overloaded views, dead ends, irrelevant first-screen material, and content that is difficult to discover. Distinguish observed problems from hypotheses. Record baseline results for the existing tests/build and any browser checks you can actually run.

2. JOURNEYS AND INFORMATION ARCHITECTURE

Map each audience situation from entry point to a useful outcome. For each journey record the visitor's question, needed information, decisions, current obstacles, relevant pages/tools, proposed path, and a testable success condition. Include visitors arriving directly on a deep link and returning visitors with saved work.

Label inferred needs and emotions as assumptions. Do not fabricate interviews, analytics, user quotes, tree-test results, or usability-test findings. Prepare a short real-user validation script for later use.

Develop a sitemap, a consistent vocabulary, global navigation, section navigation, breadcrumbs where helpful, cross-links, and search/filter behavior. Start by considering task labels such as Choose a master's, Explore careers, Find an internship or job, and Plan a move, but choose the final organization after the inventory. A country, programme, or role may be accessible from several journeys without duplicating its underlying content.

For every existing page/view, decide whether to retain it, reorganize it, split it by task, or combine only its navigational entry points. Explain consequential decisions briefly. A long Germany guide, for example, might become an overview linking to focused hiring, visas, money, daily-life, and arrival views. Verify the appropriate split instead of imposing the same divisions everywhere.

3. CHOOSE HOW MUCH TO SHOW

Use a deliberate mixture of patterns:
- Separate linked pages or subviews for substantial, independently useful tasks and reference topics.
- Clear headings and local contents navigation for material people normally read together.
- Search, filters, and side-by-side comparisons for large collections of programmes, roles, countries, and employers.
- Accessible accordions/disclosures for optional explanations, examples, detailed evidence, and specialist cases.
- Short, optional guided steps for genuinely sequential processes; retain direct browsing and editing.
- Context controls for country, career stage, or background only when they materially affect relevance. Show the current scope, let users change/reset it, and provide an obvious way to browse everything.

Do not put an entire long page behind one plus sign or create deeply nested accordions. Use descriptive disclosure labels that explain what will open. Allow multiple sections to stay open when comparison is useful. Use tabs only for genuine peer views, not as a substitute for the site's navigation.

Provide direct links to meaningful sections. Opening a search result or deep link must reveal its destination even when it is normally collapsed. Maintain Back/Forward behavior and non-sensitive filter state. On disclosure-heavy guides, provide an expand-all/read-full-page option and print styles that expose the full content. Verify browser Find behavior; provide a working full-reading alternative where collapsed content is not found reliably.

4. REUSABLE COMPONENTS AND INFORMATIVE VISUALS

Implement a small shared system appropriate to the existing HTML/CSS/JavaScript stack: navigation, page headers, breadcrumbs/local contents, disclosures, filters, comparison tables, source/last-checked displays, notices, timelines, and related-next-step links. Document component behavior and interaction states. Share tokens for type, spacing, color, focus, and responsive layout. Avoid a different design system on every page.

Add more visuals where they help explain existing information. Choose and implement useful examples across the main page families, such as:
- A study-to-career pathway diagram based on the existing role/degree relationships.
- An internship or graduate-recruiting timeline based on existing dated evidence.
- A relocation sequence with relevant branches and arrival tasks.
- A country/city map with an equivalent accessible list or table.
- A cost or comparison chart where the underlying figures are genuinely comparable.

Each visual must answer a specific visitor question, retain provenance, and have an accessible text/table equivalent. Prefer maintainable HTML/SVG and data-driven graphics for factual diagrams. Do not invent statistics, imply unsupported relationships, hide uncertainty, mix currencies or years without explanation, or encode categorical judgments as precise measurements. Retain the full original explanations alongside or behind clearly labeled details.

Use relevant, properly licensed photographs or illustrations where they add orientation and human context. Avoid stock-image filler, decorative chart-like graphics, and raster infographics with essential text baked into pixels. Supply meaningful alternative text, dimensions, responsive sizing, and appropriate loading behavior. Actually place finished visuals in the website; a list of suggested images is not completion.

5. VISUAL DIRECTION AND ACCESSIBILITY

Evolve Admetia's existing editorial identity into a coherent, readable resource. Reduce competing emphasis and use images, diagrams, lists, and tables to give dense pages a useful reading rhythm. Use comfortable text measures and spacing without creating excessive scrolling.

Avoid these specific generic patterns: oversized empty heroes; gradient blobs; glassmorphism used without purpose; identical rounded cards for every paragraph; cards nested inside cards; decorative numbers or badges competing with navigation; excessive pills; emoji as the icon system; animated decoration interrupting reading; and vague marketing phrases such as unlock your potential. Give the admissions ticker and introduction effects an appropriate optional/contextual place if they impede primary tasks, preserving access to their substantive information.

Use semantic HTML and native controls where suitable. For custom disclosures implement the WAI-ARIA accordion pattern correctly. Include keyboard operation, accessible names and expanded state, visible unobscured focus, sensible heading order, skip navigation, descriptive links, labeled form errors, meaningful image alternatives, and non-color cues. Check contrast in supported themes, text resizing, reduced motion, and reflow at 320 CSS pixels. Aim for comfortable 44-pixel touch targets where practical; do not misstate that preference as the universal WCAG AA minimum. Keep essential material usable when optional scripts fail, and provide sensible fallbacks for interactive tools.

6. IMPLEMENT THROUGHOUT AND VERIFY

Implement and verify a representative complete journey first, covering a hub, dense guide, interactive tool, and shared navigation. Then apply the proven templates to every applicable route and generated page. Do not leave the remainder on an incompatible old structure.

Run the repository's relevant tests and production build. Test both source development behavior and the built site served under the /admetia/ base path. Add focused regression coverage for moved content, route/anchor mappings, generators, and new interaction behavior. Preserve the calculator/model regression checks.

Check all inventoried internal routes, anchors, downloads, and content destinations automatically where possible. Compare migrated text/data/source records against the baseline and manually review transformations where automated comparison is insufficient. Resolve every unexplained missing content block.

Run automated accessibility scans on every page template and meaningful dynamic state, then perform keyboard checks and screen-reader checks with available tools. Automated scores are not proof of WCAG conformance; clearly identify any manual checks that could not be performed.

Inspect desktop and mobile screenshots of all page families, including populated results, empty/error states, long labels, Italian text, supported themes, expanded disclosures, and print/full-reading views where relevant. Check for overflow, hidden content, focus loss, broken back navigation, and performance regressions from images or large data loads. Fix material defects and rerun the checks affected by those fixes; avoid endless cosmetic revisions.
</workflow>

<deliverables_and_completion>
Save concise working artifacts under docs/ux-refactor/: the inventory/migration ledger, journey maps and sitemap, component/pattern guidance, validation results, and an up-to-date progress checklist. These documents support the implementation; they are not a substitute for it.

Exercise these acceptance scenarios with representative existing data:
1. A student finds and compares relevant master's programmes, checks full prerequisites/costs/sources, and reaches the appropriate calculator without losing context.
2. An internship seeker reaches country/field-specific entry routes, recruiting timing, and application preparation without reading experienced-hire material first.
3. A working professional explores a career move and reaches the applicable hiring information while retaining access to student routes.
4. A relocating visitor reaches the relevant published passport-route information, costs, and arrival tasks without traversing unrelated country material; unknown situations remain clearly marked rather than guessed.
5. An undecided visitor explores roles and study routes, compares options, and returns to earlier choices.
6. A keyboard-only visitor can complete the same supported tasks, open optional detail, follow a deep link, and recover using Back.

Report these as agent walkthroughs unless actual people performed usability tests. Record starting URL, actions, result, and remaining friction rather than inventing time-saved percentages.

Completion requires: the full route inventory is accounted for; all original substantive information remains publicly reachable; old links resolve appropriately; shared components are applied consistently; useful visuals are implemented; existing tools and saved data still work; both languages remain supported; required tests/build pass; and accessibility/browser findings are fixed or explicitly recorded with their real limitations.

End with the implemented structure, a few concrete before/after journeys, where full detail now lives, validation evidence, preview instructions, and any unresolved issues. If genuinely blocked, state the exact blocker and checkpoint remaining work. Otherwise continue implementing until the requested scope is complete.
</deliverables_and_completion>

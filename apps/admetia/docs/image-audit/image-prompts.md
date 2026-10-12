# Admetia image prompts

One entry per asset in [image-briefs.json](image-briefs.json). **Title** is the file name to give the finished image (add the extension: `.png` for drawings, `.jpg` for photographs). Prompts are self-contained; paste the text in the code block as it is.

## How to use these

1. **Drawings (24, section A and B).** Generate `field-finance` first, approve it, then give it to the image model as a style reference when generating the other 23, so they look drawn by one hand. The shared style paragraph is repeated in every prompt on purpose.
2. **Size.** Generate at 1536 x 1024. The site shows these at 4:3, so crop to 4:3 (about 1365 x 1024) keeping the objects centred; the prompts keep everything inside the middle 80% so the crop is safe.
3. **Background.** The prompts ask for a flat cream background matching the site paper (#FFF1E5). Image models do not hit a hex value exactly, so expect a slightly different cream. Either use the model's transparent-background option if it has one (then drop the "background" sentence), or remove the background in an editor so the paper shows through.
4. **Check each result** against its "must have" and "must not have" lines, and reject any image with readable words, a face, a logo, a glow or a gradient. Image models add these unprompted.
5. **Diagrams (8, section C) are not image-model jobs.** Their labels must be exact live text from the role page, which an image model garbles. They are built as SVG or HTML; I can write them if you want.
6. **Photographs (35, section D) are not prompts.** The plan marks them "verified real asset required": a generated picture of Frankfurt or Tokyo, shown on a site whose promise is that every figure is sourced, would be a fabricated place. Each entry gives a search brief and a title instead. If you still want to generate them, say so; I would then label each as an illustration in its caption.

## Index: title to asset to page

| Title | Asset | Used on |
|---|---|---|
| `field-finance` | AST-001 | IMG-001 careers/fields/finance.html |
| `field-computer-science` | AST-002 | IMG-002 careers/fields/computer-science.html |
| `field-artificial-intelligence` | AST-003 | IMG-003 careers/fields/artificial-intelligence.html |
| `field-data-science` | AST-004 | IMG-004 careers/fields/data-science.html |
| `field-data-analytics` | AST-005 | IMG-005 careers/fields/data-analytics.html |
| `field-cybersecurity` | AST-006 | IMG-006 careers/fields/cybersecurity.html |
| `field-management` | AST-007 | IMG-007 careers/fields/management.html |
| `field-logistics-supply-chain` | AST-008 | IMG-008 careers/fields/logistics-supply-chain.html |
| `field-accounting` | AST-009 | IMG-009 careers/fields/accounting.html |
| `field-marketing` | AST-010 | IMG-010 careers/fields/marketing.html |
| `field-economics` | AST-011 | IMG-011 careers/fields/economics.html |
| `field-management-consulting` | AST-012 | IMG-012 careers/fields/management-consulting.html |
| `field-product-management-startups` | AST-013 | IMG-013 careers/fields/product-management-startups.html |
| `role-bank-trader-desk` | AST-014 | IMG-014 careers/roles/trader-at-a-bank.html |
| `role-commodity-trading-cargo` | AST-015 | IMG-015 careers/roles/trader-analyst-at-a-physical-commodity-trading-house.html |
| `role-embedded-bench` | AST-016 | IMG-016 careers/roles/embedded-firmware-systems-engineer.html |
| `role-robot-cell-vision` | AST-017 | IMG-017 careers/roles/computer-vision-robotics-edge-ai-engineer.html |
| `role-forensics-lab` | AST-018 | IMG-018 careers/roles/incident-responder-digital-forensics.html |
| `role-ot-control-cabinet` | AST-019 | IMG-019 careers/roles/ot-ics-security-specialist.html |
| `role-operations-shift-handover` | AST-020 | IMG-020 careers/roles/operations-manager.html |
| `role-transport-documents` | AST-021 | IMG-021 careers/roles/logistics-and-transport-coordinator-manager.html |
| `role-warehouse-aisle` | AST-022 | IMG-022 careers/roles/warehouse-distribution-operations-manager.html |
| `role-shipbroker-desk` | AST-023 | IMG-023 careers/roles/shipping-and-maritime-roles.html |
| `role-brand-shelf` | AST-024 | IMG-024 careers/roles/brand-manager.html |
| `diagram-rag-pipeline` | AST-025 | IMG-025 careers/roles/ai-engineer-llm-application-engineer.html |
| `diagram-mlops-three-layers` | AST-026 | IMG-026 careers/roles/mlops-ml-platform-ai-infrastructure-engineer.html |
| `diagram-star-schema` | AST-027 | IMG-027 careers/roles/bi-developer-bi-analyst.html |
| `diagram-soc-tiers` | AST-028 | IMG-028 careers/roles/soc-analyst.html |
| `diagram-three-way-match` | AST-029 | IMG-029 careers/roles/internal-auditor.html |
| `diagram-audit-vouching` | AST-030 | IMG-030 careers/roles/external-auditor.html |
| `diagram-data-pipeline-roles` | AST-031 | IMG-031 careers/roles/data-engineer.html; IMG-032 careers/roles/analytics-engineer.html |
| `diagram-planning-loop` | AST-032 | IMG-033 careers/roles/demand-supply-planner-and-s-and-op-analyst.html |
| `photo-at-vienna` | AST-033 | IMG-034 map.html#at |
| `photo-au-sydney` | AST-034 | IMG-035 map.html#au |
| `photo-be-brussels` | AST-035 | IMG-036 map.html#be |
| `photo-bg-sofia` | AST-036 | IMG-037 map.html#bg |
| `photo-ca-toronto` | AST-037 | IMG-038 map.html#ca |
| `photo-ch-zurich` | AST-038 | IMG-039 map.html#ch |
| `photo-cz-prague` | AST-039 | IMG-040 map.html#cz |
| `photo-de-frankfurt-am-main` | AST-040 | IMG-041 map.html#de |
| `photo-dk-copenhagen` | AST-041 | IMG-042 map.html#dk |
| `photo-ee-tallinn` | AST-042 | IMG-043 map.html#ee |
| `photo-es-madrid` | AST-043 | IMG-044 map.html#es |
| `photo-fi-helsinki` | AST-044 | IMG-045 map.html#fi |
| `photo-fr-paris` | AST-045 | IMG-046 map.html#fr |
| `photo-gb-london` | AST-046 | IMG-047 map.html#gb |
| `photo-gr-athens-and-piraeus` | AST-047 | IMG-048 map.html#gr |
| `photo-hk-hong-kong` | AST-048 | IMG-049 map.html#hk |
| `photo-ie-dublin` | AST-049 | IMG-050 map.html#ie |
| `photo-is-reykjavik` | AST-050 | IMG-051 map.html#is |
| `photo-it-milan` | AST-051 | IMG-052 map.html#it |
| `photo-jp-tokyo` | AST-052 | IMG-053 map.html#jp |
| `photo-kr-seoul` | AST-053 | IMG-054 map.html#kr |
| `photo-lt-vilnius` | AST-054 | IMG-055 map.html#lt |
| `photo-lu-luxembourg-city` | AST-055 | IMG-056 map.html#lu |
| `photo-mt-valletta-and-the-harbour-towns` | AST-056 | IMG-057 map.html#mt |
| `photo-nl-amsterdam` | AST-057 | IMG-058 map.html#nl |
| `photo-no-oslo` | AST-058 | IMG-059 map.html#no |
| `photo-nz-auckland` | AST-059 | IMG-060 map.html#nz |
| `photo-pl-warsaw` | AST-060 | IMG-061 map.html#pl |
| `photo-pt-lisbon` | AST-061 | IMG-062 map.html#pt |
| `photo-ro-bucharest` | AST-062 | IMG-063 map.html#ro |
| `photo-se-stockholm` | AST-063 | IMG-064 map.html#se |
| `photo-sg-singapore` | AST-064 | IMG-065 map.html#sg |
| `photo-tw-taipei` | AST-065 | IMG-066 map.html#tw |
| `photo-us-new-york` | AST-066 | IMG-067 map.html#us |
| `photo-vn-ho-chi-minh-city` | AST-067 | IMG-068 map.html#vn |

## A. Field plates (13): drawn still lifes

Shown about 300px wide beside each field page title, so the drawing must read small: bold simple shapes, no fine detail.

### AST-001 · `field-finance`

Used on: IMG-001 careers/fields/finance.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of the paper and objects a junior banker actually handles: a spiral-bound pitch book with tab dividers lying open, a printed valuation model (a grid of rows and columns, no readable figures), a signed term sheet with one signature line, a lucite deal tombstone, and a desk phone with a coiled cord.

Must have: pitch book with tab dividers; printed spreadsheet grid with one column tinted teal; lucite deal tombstone tinted claret; term sheet with a signature line.

Focal point: the tombstone, slightly right of centre.

Must not have: bull and bear figures; coin stacks or banknotes; candlestick charts; currency symbols; city skyline; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-002 · `field-computer-science`

Used on: IMG-002 careers/fields/computer-science.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of a software engineer’s working surface: an open laptop showing a pull-request diff drawn as two columns of short bars (removed lines claret, added lines teal, no readable code), a mechanical keyboard, a phone lying face up as the on-call pager, and a single 1U rack server unit behind them.

Must have: pull-request diff as claret and teal bars; mechanical keyboard; on-call phone; one rack server unit.

Focal point: the diff on the laptop screen.

Must not have: binary or “matrix” code rain; hooded figure; glowing screens; readable code or product names; circuit-board texture; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-003 · `field-artificial-intelligence`

Used on: IMG-003 careers/fields/artificial-intelligence.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of the unglamorous objects of AI engineering: a bare GPU card with its fan shroud, a notebook page with a hand-drawn descending loss curve, an evaluation sheet (a grid of ticks and crosses, some ticks teal, a few crosses claret), and a short stack of index cards standing for labelled examples.

Must have: GPU card; hand-drawn loss curve; evaluation grid of ticks and crosses; stack of labelled cards.

Focal point: the evaluation sheet.

Must not have: brains, glowing or otherwise; robot heads or humanoids; sparkles and magic wands; node-and-edge “neural network” webs; chat bubbles; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-004 · `field-data-science`

Used on: IMG-004 careers/fields/data-science.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of a statistician’s desk: a printed scatter plot with a fitted line and a shaded confidence band (teal), two small cards marked only A and B side by side for an experiment, a box-plot printout, and a sharpened pencil across them.

Must have: scatter plot with fitted line and band; two cards lettered A and B; box-plot printout; pencil.

Focal point: the scatter plot.

Must not have: crystal ball; magnifying glass over a bar chart; dice; readable axis values; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-005 · `field-data-analytics`

Used on: IMG-005 careers/fields/data-analytics.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of an analyst’s output: a dashboard printout with four KPI tiles and one bar chart (bars in ink, one bar teal), an index card with a short SQL query drawn as indented lines, a spreadsheet printout with one highlighted cell (claret outline), and a sticky note with a question mark.

Must have: dashboard printout with KPI tiles; SQL query on a card as indented lines; spreadsheet with one outlined cell; sticky note with a question mark.

Focal point: the dashboard printout.

Must not have: rising-arrow growth chart; pie chart held in a hand; readable numbers; real BI product interfaces; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-006 · `field-cybersecurity`

Used on: IMG-006 careers/fields/cybersecurity.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of defensive security work: a hardware security key on a keyring, a laptop showing an alert queue as rows of bars with one row flagged claret, a small network switch with three patch cables (one teal), and an incident runbook in a ring binder.

Must have: hardware security key; alert queue with one claret row; network switch and patch cables; runbook binder.

Focal point: the flagged row in the alert queue.

Must not have: hooded hacker; padlock or shield icons; skulls; green “matrix” code; world map with attack arcs; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-007 · `field-management`

Used on: IMG-007 careers/fields/management.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of line-management paperwork: a weekly shift rota drawn as a grid with a few cells filled teal, a strip of a Gantt chart, a plain employment-contract folder, a one-page weekly KPI report, and a blank lanyard badge.

Must have: shift rota grid; Gantt chart strip; contract folder; weekly KPI page; blank lanyard badge.

Focal point: the rota grid.

Must not have: handshake; chess pieces; suited figures or silhouettes; lightbulb; ladders and summits; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-008 · `field-logistics-supply-chain`

Used on: IMG-008 careers/fields/logistics-supply-chain.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of goods and the paper that moves them: a pallet of shrink-wrapped cartons, a scale-model twenty-foot container (claret), a handheld barcode scanner, a shipping label with a barcode, and a planning sheet with a forecast line (teal).

Must have: pallet of cartons; small container tinted claret; handheld scanner; shipping label with barcode; planning sheet with a forecast line.

Focal point: the pallet with the scanner resting on it.

Must not have: world map with arrows; delivery drones; carrier or retailer liveries; readable label text; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-009 · `field-accounting`

Used on: IMG-009 careers/fields/accounting.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of audit and accounts work: a lever-arch file of invoices with a few auditor’s tick marks in claret, a ledger printout, a desk calculator with a curl of paper tape, and a sealed bank-confirmation envelope.

Must have: lever-arch file with ticked invoices; ledger printout; calculator with paper tape; sealed envelope.

Focal point: the tick marks on the top invoice.

Must not have: piggy bank; coin stacks; green eyeshade; readable amounts; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-010 · `field-marketing`

Used on: IMG-010 careers/fields/marketing.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of brand and campaign work: a one-page creative brief, a three-frame storyboard, a blank folding-carton packaging mock-up (claret band where a logo would sit, no lettering), a phone showing a feed as a grid of plain tiles, and a market-share printout with two lines (one teal).

Must have: creative brief; three-frame storyboard; blank packaging mock-up; phone with a tile grid; two-line share chart.

Focal point: the packaging mock-up.

Must not have: megaphone; lightbulb; target with arrow; real social-network logos or interfaces; real brands; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-011 · `field-economics`

Used on: IMG-011 careers/fields/economics.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of an economist’s desk: a working paper open at a regression table (rows of short bars, no figures), a printed fan chart (a projection line with widening bands in teal), a policy brief with a claret cover stripe, and a statistical yearbook.

Must have: working paper with a regression table; fan chart with widening bands; policy brief; statistical yearbook.

Focal point: the fan chart.

Must not have: globe; coins; supply-and-demand cross used alone as a symbol; named institutions or their buildings; readable figures; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-012 · `field-management-consulting`

Used on: IMG-012 careers/fields/management-consulting.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of a consulting team’s table: slide printouts with a hand-drawn issue tree (boxes branching left to right, one branch teal), a page of expert-interview notes, a market-sizing spreadsheet printout, a strip of sticky notes used as a storyboard, and a luggage tag (claret) for the weekly travel.

Must have: issue tree; interview notes; market-sizing printout; sticky-note storyboard; luggage tag.

Focal point: the issue tree.

Must not have: handshake; suits and skyscrapers; chess pieces; jigsaw puzzle; readable client names; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

### AST-013 · `field-product-management-startups`

Used on: IMG-013 careers/fields/product-management-startups.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: A still life of product and early-company paperwork: a one-page requirements document, a roadmap with three lanes (now, next, later as three plain columns), a paper prototype of a phone screen (wireframe boxes, one button teal), and a cap-table sheet (rows with ownership bars, one bar claret).

Must have: one-page requirements document; three-lane roadmap; paper wireframe of a phone screen; cap-table sheet with ownership bars.

Focal point: the paper wireframe.

Must not have: rocket; unicorn; lightbulb; hoodie or garage; readable company names; people, hands or faces; readable text, numbers, logos or brand names; photographic rendering.
```

## B. Role scenes (11): drawn scenes

Shown about 300px wide on desktop and 358px on phones, with a caption that says "Illustration".

### AST-014 · `role-bank-trader-desk`

Used on: IMG-014 careers/roles/trader-at-a-bank.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: One position on a bank trading floor before the market opens: two rows of monitors showing price ladders and a trade blotter as abstract ticks and bars, a dealer board (turret) with its handset, a keyboard, a notepad with a hand-sketched P&L explanation, and a paper cup. Rows of identical empty positions recede behind it; a window shows dawn.

Must have: two rows of monitors with abstract price ladders; dealer board with handset; notepad with a sketched P&L bridge; receding rows of identical desks; dawn light (the page gives a 6.30 to 7am start).

Focal point: the dealer board and the lower row of screens.

Must not have: shouting traders or raised arms; candlestick-chart wall; any terminal vendor’s trade dress or logo; readable tickers or prices; bank names; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-015 · `role-commodity-trading-cargo`

Used on: IMG-015 careers/roles/trader-analyst-at-a-physical-commodity-trading-house.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A two-plane scene. Foreground: a desk with a cargo position sheet (rows of bars), a shipping schedule and a rolled nautical chart. Background, seen through a wide window: a product tanker alongside a jetty with loading arms connected and storage tanks behind.

Must have: tanker at a jetty with loading arms; storage tanks; position sheet on the desk; shipping schedule or chart.

Focal point: the tanker’s manifold and loading arms, upper right.

Must not have: names or liveries of trading houses, oil majors or shipping lines; national flags; oil-barrel icons; readable prices; spills, flames or smoke; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-016 · `role-embedded-bench`

Used on: IMG-016 careers/roles/embedded-firmware-systems-engineer.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A lab bench seen from the engineer’s seat: a microcontroller evaluation board connected by a ribbon cable to a debug probe, an oscilloscope showing one square-wave trace with a timing glitch marked in claret, logic-analyser clip leads on the board’s header pins, a twisted-pair CAN bus harness with a nine-pin connector, and a printed datasheet with a pin diagram.

Must have: evaluation board with header pins; debug probe and ribbon cable; oscilloscope with a square-wave trace; logic-analyser clips; CAN harness; datasheet.

Focal point: the board and the probe clipped to it.

Must not have: manufacturer names or logos on board or instruments; soldering sparks or smoke; glowing circuit traces; a brain or chip-with-face motif; readable part numbers; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-017 · `role-robot-cell-vision`

Used on: IMG-017 careers/roles/computer-vision-robotics-edge-ai-engineer.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A fenced industrial robot cell: a six-axis arm with a camera mounted at the wrist above a short conveyor carrying machined parts, a camera-calibration checkerboard on a stand, a small edge-compute box on the fence post with a cable to the camera, and one part on the conveyor outlined by a single teal detection box.

Must have: six-axis industrial arm (not humanoid); wrist-mounted camera; calibration checkerboard; edge-compute box; one teal detection box around one part; safety fence.

Focal point: the camera and the outlined part.

Must not have: humanoid robots, faces or glowing eyes; brains and neural-network webs; robot maker names or liveries; sci-fi holograms; more than one overlay; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-018 · `role-forensics-lab`

Used on: IMG-018 careers/roles/incident-responder-digital-forensics.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A forensic workbench: a laptop connected through a write-blocker to a bare hard drive, two sealed evidence bags with numbered seals (one seal claret), a chain-of-custody form on a clipboard with signature rows, and a wall clock reading three o’clock.

Must have: write-blocker between laptop and drive; sealed, numbered evidence bags; chain-of-custody form with signature rows; wall clock at three.

Focal point: the write-blocker and the drive.

Must not have: hooded figures; skulls, viruses drawn as bugs; padlocks and shields; green code rain; police or agency insignia; vendor names; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-019 · `role-ot-control-cabinet`

Used on: IMG-019 careers/roles/ot-ics-security-specialist.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: An open industrial control cabinet on a plant floor: a PLC rack on DIN rails with rows of terminal blocks, an industrial Ethernet switch, and a small passive monitoring sensor clipped to a network tap (teal). A hard hat and a high-visibility vest hang on the cabinet door; pipework and a tank stand behind. A printed network-zone diagram is taped inside the door.

Must have: PLC rack and terminal blocks; industrial Ethernet switch; passive monitoring sensor on a tap, tinted teal; hard hat and hi-vis vest; plant pipework behind; zone diagram inside the door.

Focal point: the sensor on the network tap.

Must not have: automation or security vendor names; flashing red alarms; explosions or sparks; hooded hacker; nuclear cooling towers as shorthand; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-020 · `role-operations-shift-handover`

Used on: IMG-020 careers/roles/operations-manager.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A plant shift handover seen from behind the group: a performance board with three bar blocks for the three parts of OEE (unlabelled bars, one claret where it falls short), a shift-schedule grid, and an andon light on a post; six to eight operators in workwear stand in a half circle facing the board, backs to the viewer; a production line runs behind.

Must have: performance board with three bar blocks; shift-schedule grid; andon light; operators seen from behind in a half circle; production line.

Focal point: the board, with the group as a frame around it.

Must not have: a posed manager facing the viewer with a clipboard; smiling stock poses; company names on workwear or machines; readable percentages; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-021 · `role-transport-documents`

Used on: IMG-021 careers/roles/logistics-and-transport-coordinator-manager.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A two-plane scene. Foreground: a bill of lading form (boxes filled with squiggled lines, one box stamped in claret), a customs declaration and a vessel schedule on a desk. Background: a container quay with a gantry crane lifting one container (teal) from a ship.

Must have: bill of lading form with boxed fields; a customs stamp; vessel schedule; gantry crane and container ship; one teal container mid-lift.

Focal point: the bill of lading, lower left, with the crane as counterweight upper right.

Must not have: carrier names, logos or recognisable liveries; readable consignee or cargo text; a named port skyline; trucks with brand markings; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-022 · `role-warehouse-aisle`

Used on: IMG-022 careers/roles/warehouse-distribution-operations-manager.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A wide aisle in a fulfilment centre: pallet racking on both sides, a pick cart with totes, a handheld scanner on the cart, floor markings for the pick path, and at the far end outbound dock doors with two trailers backed in. Three or four operatives in hi-vis vests in the distance, no faces.

Must have: pallet racking; pick cart with totes; handheld scanner; floor-marked pick path; dock doors with trailers; distant figures in hi-vis.

Focal point: the pick cart in the lower third, with the dock doors as the vanishing point.

Must not have: retailer or parcel-carrier branding on boxes, vests or trailers; robots as the heroes of the scene; a smiling supervisor in the foreground; readable labels; identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-023 · `role-shipbroker-desk`

Used on: IMG-023 careers/roles/shipping-and-maritime-roles.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: A broker’s desk by a harbour window: a vessel position list (rows of ship names as squiggles with dots on a small chart), a charter-party contract with clause numbers down the margin, a desk phone and a headset, and through the window a bulk carrier at anchor with its hatch covers and deck cranes.

Must have: position list with a small chart; charter-party contract with numbered clauses; phone and headset; bulk carrier at anchor with hatch covers.

Focal point: the charter party on the desk.

Must not have: cruise ships, yachts or sailing ships; anchors, ship’s wheels and other nautical ornaments; pirate references; real ship, owner or broker names; container ships (used on the transport-coordinator page); identifiable faces; readable text, numbers or logos; photographic rendering.
```

### AST-024 · `role-brand-shelf`

Used on: IMG-024 careers/roles/brand-manager.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A real working space drawn in correct perspective at eye height, working tools in the foreground third. Any people are small, seen from behind or at a distance, with no facial features. Plain and accurate, not glamorous.

Scene: One bay of a supermarket shelf seen straight on: rows of plain, unlettered packs in three or four shapes; one brand’s facings are tinted claret and occupy a block at eye level; a shelf-edge promotion tag (teal) hangs under them. In the lower foreground, slightly out of the shelf plane, a creative brief and a flat packaging proof lie on a trolley handle.

Must have: one shelf bay with unlettered packs; one block of claret facings at eye level; a teal promotion tag; a creative brief and a packaging proof.

Focal point: the claret block of facings.

Must not have: real brands, pack designs or retailer signage; readable prices; shoppers’ faces; megaphones, lightbulbs and targets; identifiable faces; readable text, numbers or logos; photographic rendering.
```

## C. Diagrams (8): build in code, not with an image model

Title is the file name for the SVG (`.svg`). Each diagram uses only wording from the role page it explains.

### AST-025 · `diagram-rag-pipeline`

Used on: IMG-025 careers/roles/ai-engineer-llm-application-engineer.html

Shows: A vertical flow of five boxes joined by arrows, in the order the page gives: 1 split documents into chunks, 2 embed the chunks as vectors, 3 store them in a vector database, 4 retrieve the best passages, 5 prompt the model to answer from them with citations. A bracket beside all five reads “evaluated on every change”, because the same paragraph calls evaluation critical.

Wording comes from: careers/data/careers.json → roles[ai-engineer-llm-application-engineer].sections.what.md, the parenthesis after “RAG pipeline” and the sentence beginning “and, critically, build evaluation”.

### AST-026 · `diagram-mlops-three-layers`

Used on: IMG-026 careers/roles/mlops-ml-platform-ai-infrastructure-engineer.html

Shows: Three stacked horizontal bands, bottom to top in the order of dependence: AI infrastructure (operate GPU clusters), MLOps / ML platform (pipelines that train, test, register and deploy models), inference and GPU performance (make trained models serve faster and cheaper). Each band carries its title and one line taken from the page.

Wording comes from: careers/data/careers.json → roles[mlops-ml-platform-ai-infrastructure-engineer].sections.what.md, “Three layers. (1) … (2) … (3) …”.

### AST-027 · `diagram-star-schema`

Used on: IMG-027 careers/roles/bi-developer-bi-analyst.html

Shows: One central box labelled “fact table: events” with three boxes around it labelled “dimension: product”, “dimension: store”, “dimension: date”, each joined to the centre by one line. Nothing else.

Wording comes from: careers/data/careers.json → roles[bi-developer-bi-analyst].sections.what.md, “star-schema models (fact tables of events, dimension tables such as product, store, date)”.

### AST-028 · `diagram-soc-tiers`

Used on: IMG-028 careers/roles/soc-analyst.html

Shows: Three boxes left to right (stacked top to bottom on a narrow column) joined by two arrows labelled “escalate”: Tier 1 reviews alerts and closes false positives; Tier 2 investigates escalations and contains them; Tier 3 hunts proactively and writes the detection rules. A return arrow runs from Tier 3 back to the alert queue, labelled “detection rules”.

Wording comes from: careers/data/careers.json → roles[soc-analyst].sections.what.md, the three sentences beginning “Tier 1”, “Tier 2”, “Tier 3”.

### AST-029 · `diagram-three-way-match`

Used on: IMG-029 careers/roles/internal-auditor.html

Shows: Three document outlines in a row, labelled “purchase order”, “goods receipt”, “invoice”, with a line joining each pair and a single tick where the three lines meet. A fourth, fainter outline labelled “payment” follows the tick with an arrow.

Wording comes from: careers/data/careers.json → roles[internal-auditor].sections.what.md, “three-way match (order, receipt, invoice)”.

### AST-030 · `diagram-audit-vouching`

Used on: IMG-030 careers/roles/external-auditor.html

Shows: One document outline on the left labelled “sampled sales invoice”, with three arrows fanning right to three outlines labelled “contract”, “delivery note”, “bank receipt”, each arrow ending in a tick. A small label above the left document reads “1 of 25”.

Wording comes from: careers/data/careers.json → roles[external-auditor].sections.what.md, “pick 25 sampled sales invoices, match each to a contract, delivery note and bank receipt”.

### AST-031 · `diagram-data-pipeline-roles`

Used on: IMG-031 careers/roles/data-engineer.html; IMG-032 careers/roles/analytics-engineer.html

Shows: A vertical flow of four stages: sources (applications, APIs, files) → pipelines that clean and load → warehouse or lakehouse → the transformation layer that turns source tables into clean “marts” → analysts, BI tools, scientists and AI models. A bracket marks the stretch each role owns: the data engineer from sources to the warehouse, the analytics engineer the transformation layer. On each page the bracket for that page’s role is drawn in claret and marked “this page”; the other is drawn in a grey that still meets 3:1 against the paper.

Wording comes from: careers/data/careers.json → roles[data-engineer].sections.what.md (“pull data from applications, APIs and files, clean and transform it, and load it into warehouses or lakehouses … for analysts, scientists and AI models”) and roles[analytics-engineer].sections.what.md (“You own the transformation layer … turn messy source tables into clean ‘marts’ … that analysts and BI tools use”).

### AST-032 · `diagram-planning-loop`

Used on: IMG-033 careers/roles/demand-supply-planner-and-s-and-op-analyst.html

Shows: Three boxes in a loop. Demand planner: statistical forecast, adjusted for promotions and launches, agreed with sales. Supply planner: production and purchasing plan against capacity, materials and lead times. S&OP / IBP analyst: the monthly cycle of gap analysis, scenarios and the financial view. Arrows run demand → supply → S&OP and back to demand.

Wording comes from: careers/data/careers.json → roles[demand-supply-planner-and-s-and-op-analyst].sections.what.md, the first three sentences.

## D. Country photographs (35): source real photographs

Title is the file name once the photograph is downloaded (`.jpg`). Look on Wikimedia Commons first (public domain, CC0 or CC BY), then a stock site that allows editorial web use. Record source URL, author, licence and date for CREDITS.md. At least 1800px wide, landscape, croppable to 3:2 with the street and people in the middle 70%. Street level, weekday daylight, natural colour, people incidental. Confirm the place from the source page, not by how it looks.

### AST-033 · `photo-at-vienna`

Used on: IMG-034 map.html#at

- **Find:** trams or U-Bahn commuters between office buildings, in Donau City or the Hauptbahnhof office quarter, Vienna.
- **Why this:** the guide says Vienna as “the country’s business centre and a base for regional headquarters”.
- **Search for:** "Vienna Donau City", "Vienna office district commuters", "Vienna business district street".
- **Reject:** St Stephen’s Cathedral, Schönbrunn, the Prater wheel, coffee-house interiors; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Vienna's main office district will do.

### AST-034 · `photo-au-sydney`

Used on: IMG-035 map.html#au

- **Find:** office workers crossing a pedestrian plaza between bank buildings, in Martin Place or the George Street light-rail corridor, Sydney.
- **Why this:** the guide says “Sydney is the finance city: finance is the largest sector by jobs in its centre”.
- **Search for:** "Sydney Martin Place", "Sydney office district commuters", "Sydney business district street".
- **Reject:** the Opera House, the Harbour Bridge, beaches; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Sydney's main office district will do.

### AST-035 · `photo-be-brussels`

Used on: IMG-036 map.html#be

- **Find:** commuters leaving Schuman station with institution buildings behind, in the European Quarter around Rue de la Loi and Schuman, Brussels.
- **Why this:** the guide says “Brussels is the EU’s capital: the European Commission alone has about 33,000 staff”.
- **Search for:** "Brussels European Quarter around Rue de la Loi and Schuman", "Brussels office district commuters", "Brussels business district street".
- **Reject:** the Grand-Place, the Atomium, Manneken Pis, waffles; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Brussels's main office district will do.

### AST-036 · `photo-bg-sofia`

Used on: IMG-037 map.html#bg

- **Find:** office blocks with a metro entrance and people arriving for work, in an office district such as Business Park Sofia or the Tsarigradsko Shose corridor, Sofia.
- **Why this:** the guide says Sofia holding “more than four-fifths of Bulgaria’s information-and-communication jobs”.
- **Search for:** "Sofia Business Park Sofia", "Sofia office district commuters", "Sofia business district street".
- **Reject:** Alexander Nevsky Cathedral, mountain views; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Sofia's main office district will do.

### AST-037 · `photo-ca-toronto`

Used on: IMG-038 map.html#ca

- **Find:** a streetcar and pedestrians between bank towers at street level, in the Financial District around King and Bay, Toronto.
- **Why this:** the guide says “Toronto is the finance capital and the largest tech market”.
- **Search for:** "Toronto Financial District around King and Bay", "Toronto office district commuters", "Toronto business district street".
- **Reject:** the CN Tower skyline from the lake, Niagara Falls, maple leaves; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Toronto's main office district will do.

### AST-038 · `photo-ch-zurich`

Used on: IMG-039 map.html#ch

- **Find:** trams and commuters crossing the square in front of bank headquarters, in Paradeplatz, Zurich.
- **Why this:** the guide says “Zurich for banking, insurance and Google’s largest engineering site outside the US”.
- **Search for:** "Zurich Paradeplatz", "Zurich office district commuters", "Zurich business district street".
- **Reject:** the Alps, the Matterhorn, lake panoramas, chocolate, watches; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Zurich's main office district will do.

### AST-039 · `photo-cz-prague`

Used on: IMG-040 map.html#cz

- **Find:** a tram stop in front of modern office buildings, in the Pankrác or Karlín office districts, Prague.
- **Why this:** the guide says Prague as “the country’s office economy: half of the Czech jobs in information and communication and in finance”.
- **Search for:** "Prague Pankrác", "Prague office district commuters", "Prague business district street".
- **Reject:** Charles Bridge, the Old Town Square, the castle; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Prague's main office district will do.

### AST-040 · `photo-de-frankfurt-am-main`

Used on: IMG-041 map.html#de

- **Find:** commuters at street level between bank towers, S-Bahn entrance in frame, in the Bankenviertel around Taunusanlage, Frankfurt am Main.
- **Why this:** the guide says “Frankfurt for banking and supervision”, the first hub the summary names.
- **Search for:** "Frankfurt am Main Bankenviertel around Taunusanlage", "Frankfurt am Main office district commuters", "Frankfurt am Main business district street".
- **Reject:** the Römer, the Brandenburg Gate, Neuschwanstein, beer halls; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Frankfurt am Main's main office district will do.

### AST-041 · `photo-dk-copenhagen`

Used on: IMG-042 map.html#dk

- **Find:** cyclists commuting past office buildings, in the harbour-front office strip (Kalvebod Brygge) or Nordhavn, Copenhagen.
- **Why this:** the guide says Copenhagen holding “about two-thirds of Denmark’s information-and-communication and finance jobs”.
- **Search for:** "Copenhagen harbour-front office strip (Kalvebod Brygge)", "Copenhagen office district commuters", "Copenhagen business district street".
- **Reject:** Nyhavn’s coloured houses, the Little Mermaid, Tivoli; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Copenhagen's main office district will do.

### AST-042 · `photo-ee-tallinn`

Used on: IMG-043 map.html#ee

- **Find:** converted industrial buildings used as tech offices, people walking between them, in Ülemiste City or the Rotermann quarter, Tallinn.
- **Why this:** the guide says “A small labour market concentrated on software and start-ups … Tallinn holds about three-quarters of the country’s ICT firms”.
- **Search for:** "Tallinn Ülemiste City", "Tallinn office district commuters", "Tallinn business district street".
- **Reject:** the medieval Old Town towers and walls; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Tallinn's main office district will do.

### AST-043 · `photo-es-madrid`

Used on: IMG-044 map.html#es

- **Find:** office workers on the pavement of Paseo de la Castellana, in the Castellana business axis (AZCA or the northern towers), Madrid.
- **Why this:** the guide says “Madrid holds most corporate and bank headquarters and is where the large graduate programmes start”.
- **Search for:** "Madrid Castellana business axis (AZCA", "Madrid office district commuters", "Madrid business district street".
- **Reject:** Plaza Mayor, bullrings, flamenco, the Sagrada Família (which is in Barcelona); skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Madrid's main office district will do.

### AST-044 · `photo-fi-helsinki`

Used on: IMG-045 map.html#fi

- **Find:** a tram or metro stop by office buildings in ordinary northern light, in the Ruoholahti, Pasila or Keilaniemi office districts, Helsinki.
- **Why this:** the guide says Helsinki holding “about 61% of Finland’s information-and-communication jobs and about 59% of its finance jobs”.
- **Search for:** "Helsinki Ruoholahti, Pasila", "Helsinki office district commuters", "Helsinki business district street".
- **Reject:** Helsinki Cathedral, saunas, northern lights, reindeer; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Helsinki's main office district will do.

### AST-045 · `photo-fr-paris`

Used on: IMG-046 map.html#fr

- **Find:** commuters crossing the esplanade towards the towers at the start of the day, in La Défense, Paris.
- **Why this:** the guide says Paris having “Europe’s highest concentration of Fortune Global 500 headquarters”.
- **Search for:** "Paris La Défense", "Paris office district commuters", "Paris business district street".
- **Reject:** the Eiffel Tower, the Louvre pyramid, Montmartre, café terraces; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Paris's main office district will do.

### AST-046 · `photo-gb-london`

Used on: IMG-047 map.html#gb

- **Find:** office workers at street level between old and new City buildings, in the City of London around Bank or Bishopsgate, London.
- **Why this:** the guide says “the City alone has 225,000 finance jobs”.
- **Search for:** "London City of London around Bank", "London office district commuters", "London business district street".
- **Reject:** Big Ben, Tower Bridge, red telephone boxes, guardsmen; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of London's main office district will do.

### AST-047 · `photo-gr-athens-and-piraeus`

Used on: IMG-048 map.html#gr

- **Find:** office buildings facing the port, with ships in the background, in the Piraeus waterfront where shipping companies have their offices, Athens and Piraeus.
- **Why this:** the guide says “the global industry is shipping”.
- **Search for:** "Athens and Piraeus Piraeus waterfront where shipping companies have their offices", "Athens and Piraeus office district commuters", "Athens and Piraeus business district street".
- **Reject:** the Acropolis, island beaches, white-and-blue villages; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Athens and Piraeus's main office district will do.

### AST-048 · `photo-hk-hong-kong`

Used on: IMG-049 map.html#hk

- **Find:** office workers on the elevated walkways or beside the tramline on Des Voeux Road, in Central, Hong Kong.
- **Why this:** the guide says “Finance produces 26.2% of the economy”.
- **Search for:** "Hong Kong Central", "Hong Kong office district commuters", "Hong Kong business district street".
- **Reject:** the Victoria Peak skyline panorama, junk boats, neon signs at night; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Hong Kong's main office district will do.

### AST-049 · `photo-ie-dublin`

Used on: IMG-050 map.html#ie

- **Find:** modern offices along the dock with people walking to work, Luas tram if in frame, in Grand Canal Dock or the IFSC, Dublin.
- **Why this:** the guide says “Dublin holds two thirds of Ireland’s jobs in information and communication and in finance”.
- **Search for:** "Dublin Grand Canal Dock", "Dublin office district commuters", "Dublin business district street".
- **Reject:** Temple Bar pubs, Guinness, the Cliffs of Moher; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Dublin's main office district will do.

### AST-050 · `photo-is-reykjavik`

Used on: IMG-051 map.html#is

- **Find:** low office buildings and everyday street traffic, in the Borgartún business street, Reykjavík.
- **Why this:** the guide says “A small, highly educated labour market of about 226,000 people”.
- **Search for:** "Reykjavík Borgartún business street", "Reykjavík office district commuters", "Reykjavík business district street".
- **Reject:** waterfalls, geysers, northern lights, Hallgrímskirkja as a postcard; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Reykjavík's main office district will do.

### AST-051 · `photo-it-milan`

Used on: IMG-052 map.html#it

- **Find:** people crossing the square or leaving the metro on a working morning, in Porta Nuova around Piazza Gae Aulenti, Milan.
- **Why this:** the guide says “Milan leads Italy in both finance and information-and-communication jobs”.
- **Search for:** "Milan Porta Nuova around Piazza Gae Aulenti", "Milan office district commuters", "Milan business district street".
- **Reject:** the Duomo, the Colosseum, gondolas, Vespas; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Milan's main office district will do.

### AST-052 · `photo-jp-tokyo`

Used on: IMG-053 map.html#jp

- **Find:** office workers walking between headquarters buildings in the morning, in Marunouchi or Otemachi, beside Tokyo Station, Tokyo.
- **Why this:** the guide says “Tokyo holds 43.5% of the country’s bank lending … and 26 Fortune Global 500 headquarters”.
- **Search for:** "Tokyo Marunouchi", "Tokyo office district commuters", "Tokyo business district street".
- **Reject:** Mount Fuji, the Shibuya crossing at night, cherry blossom, temples; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Tokyo's main office district will do.

### AST-053 · `photo-kr-seoul`

Used on: IMG-054 map.html#kr

- **Find:** commuters between the financial district’s office towers, in Yeouido, Seoul.
- **Why this:** the guide says “Seoul ranks seventh among the world’s financial centres”.
- **Search for:** "Seoul Yeouido", "Seoul office district commuters", "Seoul business district street".
- **Reject:** palaces, hanbok, neon shopping streets; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Seoul's main office district will do.

### AST-054 · `photo-lt-vilnius`

Used on: IMG-055 map.html#lt

- **Find:** office towers with pedestrians and buses at street level, in the new business district on the right bank of the Neris (Konstitucijos prospektas), Vilnius.
- **Why this:** the guide says Vilnius having “about two-thirds of the country’s ICT jobs and nearly three-quarters of its finance jobs”.
- **Search for:** "Vilnius new business district on the right bank of the Neris (Konstitucijos prospektas)", "Vilnius office district commuters", "Vilnius business district street".
- **Reject:** the baroque Old Town churches; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Vilnius's main office district will do.

### AST-055 · `photo-lu-luxembourg-city`

Used on: IMG-056 map.html#lu

- **Find:** the tram running between fund-industry and institution buildings, in the Kirchberg plateau, Luxembourg City.
- **Why this:** the guide says “Europe’s largest investment-fund centre … plus several EU institutions”.
- **Search for:** "Luxembourg City Kirchberg plateau", "Luxembourg City office district commuters", "Luxembourg City business district street".
- **Reject:** the old-town fortifications and gorge; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Luxembourg City's main office district will do.

### AST-056 · `photo-mt-valletta-and-the-harbour-towns`

Used on: IMG-057 map.html#mt

- **Find:** office buildings along the harbour road with weekday traffic and pedestrians, in the Sliema, Gżira or St Julian’s office waterfront, Valletta and the harbour towns.
- **Why this:** the guide says the harbour towns as home to “online gaming … and financial services” employers.
- **Search for:** "Valletta and the harbour towns Sliema, Gżira", "Valletta and the harbour towns office district commuters", "Valletta and the harbour towns business district street".
- **Reject:** beaches, fishing boats, the Blue Lagoon; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Valletta and the harbour towns's main office district will do.

### AST-057 · `photo-nl-amsterdam`

Used on: IMG-058 map.html#nl

- **Find:** cyclists and pedestrians between office towers, in Zuidas, around Amsterdam Zuid station, Amsterdam.
- **Why this:** the guide says “Amsterdam takes about 40% of the international graduates who stay and work, with trading firms, fintech and European headquarters”.
- **Search for:** "Amsterdam Zuidas, around Amsterdam Zuid station", "Amsterdam office district commuters", "Amsterdam business district street".
- **Reject:** canal houses, windmills, tulips, clogs; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Amsterdam's main office district will do.

### AST-058 · `photo-no-oslo`

Used on: IMG-059 map.html#no

- **Find:** commuters and a tram in front of the office buildings, in Bjørvika (the Barcode row), Oslo.
- **Why this:** the guide says “Oslo holds about 46% of finance jobs and 45% of information-and-communication jobs”.
- **Search for:** "Oslo Bjørvika (the Barcode row)", "Oslo office district commuters", "Oslo business district street".
- **Reject:** fjords, Viking ships, ski jumps; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Oslo's main office district will do.

### AST-059 · `photo-nz-auckland`

Used on: IMG-060 map.html#nz

- **Find:** office workers on the street near the transport hub, in the city centre around Britomart or Queen Street, Auckland.
- **Why this:** the guide says Auckland’s centre producing “37% of the country’s output in finance and insurance”.
- **Search for:** "Auckland city centre around Britomart", "Auckland office district commuters", "Auckland business district street".
- **Reject:** the Sky Tower as a postcard, sheep, film locations; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Auckland's main office district will do.

### AST-060 · `photo-pl-warsaw`

Used on: IMG-061 map.html#pl

- **Find:** people leaving the metro among new office towers, in the Wola business district around Rondo Daszyńskiego, Warsaw.
- **Why this:** the guide says the business-service centres “mostly in Warsaw, Kraków and Wrocław”.
- **Search for:** "Warsaw Wola business district around Rondo Daszyńskiego", "Warsaw office district commuters", "Warsaw business district street".
- **Reject:** the Old Town market square; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Warsaw's main office district will do.

### AST-061 · `photo-pt-lisbon`

Used on: IMG-062 map.html#pt

- **Find:** office buildings with commuters at a station entrance, in Parque das Nações or the Saldanha office district, Lisbon.
- **Why this:** the guide says “Lisbon holds about 60% of Portugal’s information and communication jobs”.
- **Search for:** "Lisbon Parque das Nações", "Lisbon office district commuters", "Lisbon business district street".
- **Reject:** tram 28, the Belém Tower, tiled façades as decoration; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Lisbon's main office district will do.

### AST-062 · `photo-ro-bucharest`

Used on: IMG-063 map.html#ro

- **Find:** office buildings with commuters at the metro exit, in the northern office district around Aurel Vlaicu and Pipera, Bucharest.
- **Why this:** the guide says the capital holding “more than half of Romania’s information-and-communication jobs”.
- **Search for:** "Bucharest northern office district around Aurel Vlaicu and Pipera", "Bucharest office district commuters", "Bucharest business district street".
- **Reject:** the Palace of Parliament; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Bucharest's main office district will do.

### AST-063 · `photo-se-stockholm`

Used on: IMG-064 map.html#se

- **Find:** commuters on foot and by bicycle on a working morning, in the central business district around Norrmalm and the central station, Stockholm.
- **Why this:** the guide says “Stockholm holds about half of Sweden’s information-and-communication jobs and nearly two-thirds of its finance jobs”.
- **Search for:** "Stockholm central business district around Norrmalm and the central station", "Stockholm office district commuters", "Stockholm business district street".
- **Reject:** Gamla Stan’s coloured façades, archipelago views; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Stockholm's main office district will do.

### AST-064 · `photo-sg-singapore`

Used on: IMG-065 map.html#sg

- **Find:** the lunchtime office crowd at ground level among the towers, in Raffles Place, Singapore.
- **Why this:** the guide says “finance, with about 200,000 jobs”, the first of the summary’s three employers.
- **Search for:** "Singapore Raffles Place", "Singapore office district commuters", "Singapore business district street".
- **Reject:** Marina Bay Sands, the Merlion, Gardens by the Bay; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Singapore's main office district will do.

### AST-065 · `photo-tw-taipei`

Used on: IMG-066 map.html#tw

- **Find:** commuters and scooters at a junction among office buildings, in the Xinyi business district, Taipei.
- **Why this:** the guide says “35 of the 40 domestic banks have their head office there”.
- **Search for:** "Taipei Xinyi business district", "Taipei office district commuters", "Taipei business district street".
- **Reject:** Taipei 101 as a skyline postcard, night markets, lanterns; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Taipei's main office district will do.

### AST-066 · `photo-us-new-york`

Used on: IMG-067 map.html#us

- **Find:** commuters at street level on a weekday morning, in the Financial District or Midtown’s office avenues, New York.
- **Why this:** the guide says “New York is the finance centre”.
- **Search for:** "New York Financial District", "New York office district commuters", "New York business district street".
- **Reject:** the Statue of Liberty, Times Square, the Charging Bull, yellow-cab clichés; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of New York's main office district will do.

### AST-067 · `photo-vn-ho-chi-minh-city`

Used on: IMG-068 map.html#vn

- **Find:** motorbike commuters in front of office buildings, in District 1’s office streets, Ho Chi Minh City.
- **Why this:** the guide says “Ho Chi Minh City’s economy grew 8.03% in 2025”.
- **Search for:** "Ho Chi Minh City District 1’s office streets", "Ho Chi Minh City office district commuters", "Ho Chi Minh City business district street".
- **Reject:** conical hats, Ha Long Bay, floating markets; skyline or aerial views; night scenes; a single company's headquarters as the subject; staged business stock; AI-generated or composited images.
- **Fallback:** the district is my proposal; if you cannot confirm it, any weekday street-level view of Ho Chi Minh City's main office district will do.

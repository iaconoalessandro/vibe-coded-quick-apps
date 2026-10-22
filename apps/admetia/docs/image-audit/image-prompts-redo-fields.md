# Admetia field drawings to redo: three replacement prompts

Written 12 October 2026, after checking the 13 `field-*` drawings against their briefs in [image-prompts.md](image-prompts.md). Ten match. These three do not, so the field pages that use them show the wrong thing.

| Title (file name) | Verdict | What is wrong with the current drawing |
|---|---|---|
| `field-marketing` | **Redo** | Three persona cards show portrait faces (the brief says no people or faces). The laptop shows a design-editor interface. The focal object, the blank packaging mock-up, is missing, and so is the phone with a tile grid. It reads as graphic design, not brand and campaign work. |
| `field-artificial-intelligence` | **Redo** | A street photograph with a person and cars on a laptop. A robot icon with a speech bubble, node-and-edge network webs, a 3D rabbit and a torus (all on the brief's "must not have" list). The evaluation grid of ticks and crosses, the loss curve and the stack of labelled cards are missing. Far too crowded to read at 300 px. |
| `field-economics` | **Redo (lower priority)** | It reads as economics, but it includes a domed legislature building (reads as the US Capitol), two world maps with arrows, and six supply-and-demand panels filling the focal area. The fan chart, the focal point, is small on a laptop screen. |

The other ten match their briefs: finance, computer science, data science, data analytics, cybersecurity, management, logistics and supply chain, accounting, management consulting, product management and startups. Small slips I would accept: a padlock icon on a book cover in cybersecurity, no bank-confirmation envelope in accounting, a target icon on one sticky note in consulting, and pseudo-SQL in teal on a card in data analytics that is not legible at the size shown.

## Why the first versions went wrong, and what changes

The image model filled the canvas with many papers and screens, and added the usual clichés (faces, maps, buildings, robots). These prompts therefore name an exact, small number of objects, say what each paper shows, and list what must not appear on any paper or screen. Also:

1. Attach `field-logistics-supply-chain.png` (or `field-management.png`) as a style and density reference. Both are the right level of simplicity.
2. Generate at 1536 x 1024 (3:2), as before.
3. Save under the same title. Move the old file out of `~/Pictures` first so the new one is not mistaken for it, then tell me and I run `tools/build-plates.sh` and check the page.

## field-marketing

Used on: careers/fields/marketing.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: exactly five objects, large and well spaced with empty cream between them, and nothing else on the canvas. (1) FOCAL POINT, large, centre-right: a blank folding-carton packaging mock-up, an unprinted box standing upright with its flaps and fold lines drawn, one claret band across the front where a logo would sit and no lettering or picture on it. (2) A one-page creative brief lying flat: only ruled lines of text and one plain empty rectangle, no pictures. (3) A three-frame storyboard strip: three empty rectangular frames in a row joined by small arrows, each frame holding only one simple geometric shape (a circle, a square, a triangle), no scenes and no figures. (4) A phone lying face up whose screen shows a three-by-three grid of plain empty tiles, one tile teal. (5) A market-share printout showing two plain line graphs on shared axes, one line teal and one charcoal, no figures.

Must have: blank carton with claret band; creative brief; three-frame storyboard of geometric shapes; phone with a grid of plain tiles; two-line chart.

Must not have: any laptop, monitor or design-software interface; any portraits, faces, people, silhouettes or person pictograms on any paper or screen; any photograph, landscape, mountain or picture on any paper; world map or globe; pie chart; colour swatch fan; megaphone; lightbulb; target with arrow; real social-network logos or interfaces; real brands; readable text, numbers, logos or brand names; photographic rendering.
```

## field-artificial-intelligence

Used on: careers/fields/artificial-intelligence.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: exactly four objects, large and well spaced with empty cream between them, and nothing else on the canvas. (1) A bare graphics card (GPU) with its two-fan shroud and metal bracket, lying flat on the left. (2) FOCAL POINT, large, centre: an evaluation sheet, a single page holding a grid of small squares, each square containing either a tick or a cross; most are ticks drawn in teal and a few are crosses drawn in claret; a ruled header line above and nothing else. (3) A notebook page, open on the right, showing a hand-drawn pair of axes with one smoothly descending curve (a loss curve that falls steeply and then flattens), drawn as one single line. (4) A short stack of five blank index cards, lightly fanned, with only ruled lines on the top card.

Must have: GPU card; evaluation grid of ticks and crosses; descending loss curve on one pair of axes; short stack of index cards.

Must not have: any laptop, monitor or screen; any photograph or picture of a street, vehicle, animal or scene; any person or figure, including on cards; robot, humanoid or robot icon; speech bubbles or chat bubbles; brains, glowing or otherwise; node-and-edge network or graph diagrams; 3D wireframe shapes (rabbit, torus, sphere, cube); sparkles and magic wands; heat-map grids; books with diagrams on their covers; readable text, numbers, logos or brand names; photographic rendering.
```

## field-economics

Used on: careers/fields/economics.html

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5) with no texture, no vignette and no frame. Only two spot colours, used sparingly on one or two objects: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024), objects grouped in the central 80% with a generous empty margin on every side. There must be no readable text, numbers, logos or brand names anywhere: any writing on paper, labels or screens is just ruled lines and squiggles. A still life with no people, hands or faces, objects seen from a slightly raised three-quarter view resting on an implied surface with no table edge drawn, simple bold shapes that stay readable at 300 pixels wide.

Subject: exactly four objects, large and well spaced with empty cream between them, and nothing else on the canvas. (1) FOCAL POINT, large, centre: a printed fan chart on a single page, a projection line running left to right with bands that widen steadily towards the right, the bands in teal, in three shades from dark to pale, set on one pair of plain axes. (2) A working paper lying open at the left, its page showing a regression table drawn as rows of short horizontal bars in two columns, no figures. (3) A thick statistical yearbook standing on its side at the back right, plain cloth cover, a page-edge block visible. (4) A slim policy brief with a claret stripe across its cover, lying on top of the working paper.

Must have: fan chart with widening teal bands as the largest object; working paper with a table of bars; statistical yearbook; policy brief with claret cover stripe.

Must not have: any laptop or screen; any building, dome, columns or institution; any world map, globe or arrows; supply-and-demand crossing curves, however small; pie charts; coins; people or pictograms of people; reading glasses; readable figures; readable text, numbers, logos or brand names; photographic rendering.
```

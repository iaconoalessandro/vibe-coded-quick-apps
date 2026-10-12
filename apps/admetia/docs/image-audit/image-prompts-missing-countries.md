# Admetia image prompts: the 13 countries without a drawing

Written 11 October 2026. 33 of the 46 country guides have a drawing on their overview. These 13 do not. Same conventions as [image-prompts.md](image-prompts.md): the **title** is the file name to give the finished image (add `.png`), and the text in each code block is the full prompt.

> **Update, later on 11 October 2026.** All thirteen were supplied and are now on their guides, including the eleven with travel advice (the owner's decision; the rule and its test were dropped). Every one of the 46 guides has a drawing. The table and notes below are as first written.

## Which countries, and why

| Country | Title | Why it has no drawing |
|---|---|---|
| Romania | `photo-ro-bucharest` | No image was supplied. It was in the original plan. |
| Singapore | `photo-sg-singapore` | No image was supplied. It was in the original plan. |
| United Arab Emirates | `photo-ae-dubai` | Held back: the guide carries official travel advice |
| China | `photo-cn-shanghai` | Held back: the guide carries official travel advice |
| Israel | `photo-il-tel-aviv` | Held back: the guide carries official travel advice |
| Kuwait | `photo-kw-kuwait-city` | Held back: the guide carries official travel advice |
| Malaysia | `photo-my-kuala-lumpur` | Held back: the guide carries official travel advice |
| Oman | `photo-om-muscat` | Held back: the guide carries official travel advice |
| Qatar | `photo-qa-doha` | Held back: the guide carries official travel advice |
| Russia | `photo-ru-moscow` | Held back: the guide opens with advice against all travel |
| Saudi Arabia | `photo-sa-riyadh` | Held back: the guide carries official travel advice |
| Thailand | `photo-th-bangkok` | Held back: the guide carries official travel advice |
| Turkey | `photo-tr-istanbul` | Held back: the guide carries two official-advice entries |

**The two in the plan** (Romania, Singapore) only need the image: put it in `~/Pictures` under its title and they can be wired in.

**The eleven held back** are a rule, not an oversight: an inviting picture should not sit above official advice on whether to go, and `tests/atlas-test.js` fails if a drawing is added to a guide that has an advisory. Prompts for them are below so the decision is yours. If you want them shown, the rule and its test have to be relaxed first; I would still leave Russia out, because its guide opens by saying not to travel there.

## How to use these

1. Give the image model one of your existing country drawings (for example `photo-de-frankfurt-am-main.png`) as a style reference, so the new ones match the 33.
2. Generate at 1536 x 1024 (3:2). The site shows them at 3:2, so no cropping is needed.
3. Reject any result with readable signs, a logo, a recognisable real person, or a famous landmark as the subject.
4. Save each under its title in `~/Pictures` and run `tools/build-plates.sh`.

## Prompts

### `photo-ro-bucharest`

Used on: map.html#ro (Romania). Lead hub: Bucharest, "Service centres, IT and the country's head offices".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the northern office district of Bucharest. Office workers come up the steps of a metro exit and walk towards a group of modern glass office buildings of eight to fifteen storeys, with a wide boulevard, tram wires and a few cars beside them. Early-spring trees line the pavement.

Must have: a metro exit with people leaving it; modern mid-rise glass office buildings; commuters with bags and backpacks walking away from the viewer; one coat or bag in claret, the metro sign or a bus in teal.

Must not have: the Palace of Parliament or any other landmark; a skyline or aerial view; a night scene; any company name or logo on a building; national flags as the subject.
```

### `photo-sg-singapore`

Used on: map.html#sg (Singapore). Lead hub: Singapore, "Asia's finance and tech headquarters city, and its busiest port".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the central business district of Singapore at lunchtime. A crowd of office workers in short sleeves crosses a paved plaza between very tall office towers, past an entrance to an underground station with a canopy. Tropical trees and planters give shade at ground level.

Must have: tall office towers rising out of frame; a station entrance with a canopy; a dense lunchtime crowd of office workers walking away from the viewer; tropical trees in teal; one bag or shirt in claret.

Must not have: Marina Bay Sands, the Merlion, Gardens by the Bay or any other landmark; a skyline or harbour panorama; a night scene; any bank or company name or logo on a tower.
```

### `photo-ae-dubai` (held back)

Used on: map.html#ae (United Arab Emirates), if the advisory rule is relaxed. Lead hub: Dubai, "Regional headquarters for banks, wealth managers and tech firms".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the financial district of Dubai. Office workers walk along a shaded pedestrian avenue between glass office buildings, some in suits and some in traditional white dress, with an elevated metro line and a station in the middle distance and palm trees along the pavement.

Must have: glass office buildings at street level; a shaded pedestrian avenue; an elevated metro viaduct or station; palm trees in teal; one bag or tie in claret.

Must not have: the Burj Khalifa, the Burj Al Arab or any other landmark; a skyline panorama; desert, camels or beach scenes; a night scene; any bank or company name or logo.
```

### `photo-cn-shanghai` (held back)

Used on: map.html#cn (China), if the advisory rule is relaxed. Lead hub: Shanghai, "China's international financial centre in the making, and a software and IT services city".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the financial district of Shanghai. Commuters cross a broad elevated pedestrian walkway that circles a road junction, between tall office towers, with buses and shared bicycles on the street below and plane trees along the pavement.

Must have: a circular elevated pedestrian walkway with commuters on it; tall office towers at close range, cut off by the top of the frame; buses or bicycles below, one in teal; one coat or bag in claret.

Must not have: the Oriental Pearl Tower, the Bund waterfront or any skyline panorama; temples, lanterns or dragons; a night or neon scene; any readable characters on signs; any bank or company name or logo.
```

### `photo-il-tel-aviv` (held back)

Used on: map.html#il (Israel), if the advisory rule is relaxed. Lead hub: Tel Aviv, "Where most foreign banks' representative offices in Israel are".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: a business boulevard in central Tel Aviv. Office workers walk and ride bicycles and electric scooters along a tree-lined central promenade between low white modernist buildings and newer glass office towers, with a light-rail tram passing.

Must have: a tree-lined boulevard with a central path; low white modernist buildings beside glass office towers; cyclists and scooter riders among the walkers; a light-rail tram in teal; one bag or shirt in claret.

Must not have: religious buildings or symbols; beaches; soldiers, weapons or security checkpoints; flags as the subject; a skyline panorama; any readable lettering on signs; any company name or logo.
```

### `photo-kw-kuwait-city` (held back)

Used on: map.html#kw (Kuwait), if the advisory rule is relaxed. Lead hub: Kuwait City, "The capital, where Kuwait's conventional banks have their head offices".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the banking district in the centre of Kuwait City. Office workers, some in suits and some in traditional white dress, walk along a wide pavement under a shaded arcade at the foot of glass and stone bank towers, with cars on the street and date palms along the kerb.

Must have: bank towers at close range, cut off by the top of the frame; a shaded arcade at street level; office workers walking away from the viewer; date palms in teal; one bag or scarf in claret.

Must not have: the Kuwait Towers or any other landmark; a skyline or seafront panorama; desert, camels or oil rigs; a night scene; any readable lettering on signs; any bank or company name or logo.
```

### `photo-my-kuala-lumpur` (held back)

Used on: map.html#my (Malaysia), if the advisory rule is relaxed. Lead hub: Kuala Lumpur, "The capital and services economy, where foreign banks have their Malaysian head offices".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the business district of Kuala Lumpur. Office workers walk along a covered elevated pedestrian walkway between office towers, with an elevated monorail train passing on its beam alongside and tropical trees below.

Must have: a covered elevated walkway with commuters on it; an elevated monorail or light-rail train, in teal; office towers at close range, cut off by the top of the frame; tropical trees; one bag or headscarf in claret.

Must not have: the Petronas Towers, the KL Tower or any other landmark; a skyline panorama; street-food stalls as the subject; a night scene; any readable lettering on signs; any bank or company name or logo.
```

### `photo-om-muscat` (held back)

Used on: map.html#om (Oman), if the advisory rule is relaxed. Lead hub: Muscat, "The capital, where Oman's licensed banks are based".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the central business district of Muscat. Office workers, some in suits and some in traditional long white dress, walk along a wide pavement past low white bank and office buildings of four to eight storeys with arched windows, with bare rocky hills rising behind the rooftops and palms along the street.

Must have: low white office buildings with arched windows; office workers walking away from the viewer; rocky hills behind; palms in teal; one bag or cap in claret.

Must not have: a mosque, fort or palace as the subject; a skyline of glass skyscrapers (the city is low-rise); beaches or boats; a night scene; any readable lettering on signs; any bank or company name or logo.
```

### `photo-qa-doha` (held back)

Used on: map.html#qa (Qatar), if the advisory rule is relaxed. Lead hub: Doha, "The capital and seat of the Qatar Financial Centre".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the business district of Doha. Office workers, some in suits and some in traditional white dress, walk from a metro station entrance with a curved shell-like canopy towards glass office towers, along a shaded pavement with palm trees.

Must have: a metro entrance with a curved canopy; glass office towers at close range, cut off by the top of the frame; office workers walking away from the viewer; palms in teal; one bag in claret.

Must not have: a skyline or waterfront panorama; stadiums; dhows, desert or camels; a night scene; any readable lettering on signs; any company name or logo.
```

### `photo-ru-moscow` (held back; I would leave this one out)

Used on: map.html#ru (Russia), only if the advisory rule is dropped entirely. Lead hub: Moscow. The guide opens with official advice against all travel and says it does not rate the country.

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: a business district in Moscow in late winter. Commuters in heavy coats leave a metro station entrance and walk towards a cluster of glass office towers, with bare trees, patches of snow on the pavement and a bus at a stop.

Must have: a metro station entrance with people leaving it; glass office towers at close range, cut off by the top of the frame; commuters in winter coats walking away from the viewer; a bus in teal; one scarf in claret.

Must not have: the Kremlin, Red Square, St Basil's or any other landmark; flags, uniforms, soldiers or police; a skyline panorama; a night scene; any readable lettering on signs; any company name or logo.
```

### `photo-sa-riyadh` (held back)

Used on: map.html#sa (Saudi Arabia), if the advisory rule is relaxed. Lead hub: Riyadh, "The capital, home of the sovereign fund and of multinationals' regional headquarters".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the financial district of Riyadh. Office workers, some in suits and some in traditional white dress, cross a shaded pedestrian plaza between angular faceted glass office towers, with covered skybridges linking the buildings above and a metro station entrance at one side.

Must have: angular faceted glass towers at close range, cut off by the top of the frame; a shaded pedestrian plaza; skybridges between buildings; a metro entrance in teal; one bag in claret.

Must not have: the Kingdom Centre tower or any other landmark; a skyline panorama; desert, camels or oil installations; a night scene; any readable lettering on signs; any company name or logo.
```

### `photo-th-bangkok` (held back)

Used on: map.html#th (Thailand), if the advisory rule is relaxed. Lead hub: Bangkok, "The capital and home of the stock exchange".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the business district of Bangkok. Office workers walk along an elevated pedestrian walkway beneath an elevated railway line, with a train passing overhead, office towers on both sides and motorbikes and buses on the road below.

Must have: an elevated walkway with commuters on it; an elevated train on its viaduct, in teal; office towers at close range, cut off by the top of the frame; motorbikes on the street below; one bag or umbrella in claret.

Must not have: temples, golden spires or Buddha images; tuk-tuks or floating markets as the subject; a skyline or river panorama; a night or neon scene; any readable lettering on signs; any bank or company name or logo.
```

### `photo-tr-istanbul` (held back)

Used on: map.html#tr (Turkey), if the advisory rule is relaxed. Lead hub: Istanbul, "Turkey's banking capital and home of its stock exchange".

```text
Editorial pen-and-ink illustration in the manner of a financial-newspaper feature drawing: a street-level scene on a working weekday morning. Confident warm-charcoal contour line with fine cross-hatching for shade. Flat, plain pale salmon-cream background (#FFF1E5); the drawing fades softly into the cream at its edges like a vignette, with no frame and no texture. Only two spot colours, used sparingly on two or three elements: deep claret red (#990F3D) and teal (#0D7680); everything else is charcoal line on the cream. No gradients, no drop shadows, no glow, no photographic or 3D-render look. Landscape 3:2 canvas (1536 x 1024). Eye-level view, horizon level. People are small, seen from behind or at a distance, with no facial features. There must be no readable text, numbers, logos or brand names anywhere: signs and screens are blank shapes or squiggles.

Scene: the modern banking district of Istanbul. Commuters come out of a metro station entrance on a wide avenue and walk uphill towards a cluster of glass bank towers, with yellow taxis and a bus in the traffic and plane trees along the pavement.

Must have: a metro entrance with people leaving it; glass bank towers at close range, cut off by the top of the frame; commuters walking away from the viewer; a bus in teal; one coat or bag in claret.

Must not have: mosques, minarets, the Bosphorus bridges, the Galata Tower or any other landmark; a skyline or waterfront panorama; bazaars or carpets; flags as the subject; a night scene; any readable lettering on signs; any bank or company name or logo.
```

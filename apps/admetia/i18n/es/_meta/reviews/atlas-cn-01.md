# Review: atlas-cn-01 (es-ES)

Every id was compared with the English. JSON valid, same 106 ids in the same order. 19 ids fixed. No HTML, placeholders, URLs or tú/usted problems were found (no first person singular in this chunk). Figures are unchanged except for the unit conversions below.

## Fixes

### Large figures: a thousand billion or more becomes "billones" (style guide rule)
- 0029: 4896,64 mil millones → 4,89664 billones (de yuanes)
- 0043: 2769,51 mil millones → 2,76951 billones; 4896,64 mil millones → 4,89664 billones
- 0076: 1511,6 mil millones → 1,5116 billones
- 0078: 2811,93 mil millones → 2,81193 billones
- 0103: 1511,6 mil millones → 1,5116 billones
- 0104: 2811,93 mil millones → 2,81193 billones
Checked and left: every other "billion" is below 1,000 billion, so `mil millones` is right; every "trillion" is `billones`; 0011 "4,059 trillion" → `4059 billones` is a correct conversion (confirmed).

### "above designated size" (ids 0040, 0087, 0103, 0106)
- "de tamaño igual o superior al designado" → "de tamaño superior al designado". Reason: "igual o" was an addition not in the English.

### Other fixes
- 0012: "el sector de servicios que más creció" → "la rama de servicios de crecimiento más rápido". Reason: the English means the fastest-growing among services, not the whole services sector.
- 0013: "pueden ser impedidas de abandonar China" → "se les puede impedir abandonar China". Reason: unnatural calque.
- 0040: "superaron cada uno los 800 mil millones de yuanes en escala" → "alcanzaron cada uno una escala superior a los 800 mil millones de yuanes". Reason: word-for-word "in scale".
- 0045: "según el informe de trabajo del Gobierno municipal" → "…del Gobierno presentado por el alcalde". Reason: "mayor's" was omitted.
- 0046: "y que representara más del 10 %…" → "y representa más del 10 % de la producción de automóviles y de la producción de información electrónica del país". Reason: the English "accounts for" is a present-tense fact, not part of the 2024 expectation.
- 0055: "cotiza opciones" → "ofrece opciones". Reason: an exchange lists contracts, it does not "cotizar" them.
- 0056: "inaugurado en 2025" → "se inauguró en 2025". Reason: the subject is unknown, so the form avoids gender agreement (see doubts).
- 0094: "(cuarta en Asia)", "(séptima en Asia)" → "(cuarto…)", "(séptimo…)". Reason: agreement with "el 11.º / el 19.º" (puesto).
- 0095: "Tokio… y Nueva York (14) juntas" → "juntos". Reason: generic masculine.
- 0096: "investigación y desarrollo" → "I+D". Reason: glossary abbreviation (R&D).
- 0098: "La web global de Xiaomi" → "La propia web global de Xiaomi". Reason: "own" was omitted.

## Translator's doubts, resolved
- 0011 "4,059 trillion yuan" → `4059 billones de yuanes`: correct.
- 0047 "No family is rated" → "No se valora ninguna familia de puestos" (glossary: role family, not rated → valorar/sin valorar): kept.
- 0041 and others, "Guangzhou" as "Cantón": kept (see below).

## Remaining doubts for a native speaker
- Guangzhou: "Cantón" is kept (traditional exonym, used in 0041, 0050, 0093, 0094, 0102), but the other mainland cities are in pinyin (Shenzhen, Hangzhou…) and "Guangzhou" is now common in economic writing. The glossary does not list it. Decide once for the whole site and apply it everywhere.
- 0056: the subject of "inaugurated in 2025" is unknown (the neighbouring ids are Shanghai market entries). "se inauguró" assumes a singular subject; check against the page.
- "above designated size": the Chinese statistical term (规模以上) really means "at or above". The English says "above", so "superior al designado" follows the English.
- 0084 and 0105 "college students" → "de formación superior" (short-cycle college students; the exact Spanish equivalent is unclear).
- 0095 "with Tokyo, New York, London and Paris": the English does not say whether this is a ranking order or a tie; "junto con" keeps that ambiguity.
- 0048 "EU/Italian citizens" → "ciudadanos de la UE, incluida Italia": the "incluida Italia" reading is the translator's interpretation of an odd source phrase.

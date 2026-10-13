# Review: atlas-es-01 (Spain country guide)

All 98 ids compared against the English. Figures, dates, percentages and currency formats were checked one by one and are correct (four-digit numbers without separator, five digits and over with a point, decimal commas, `€1.13 billion` → `1130 millones de euros`, `$1 billion` → `1000 millones de dólares`). No HTML or placeholders in this chunk. Register is consistent and impersonal; no tú/usted issues arise.

## Fixes (9 strings, 10 edits)

1. atlas-es.0062–0067 (6 ids): "La Labour Force Survey de Eurostat cuenta" → "La Encuesta de Población Activa de la UE, de Eurostat, cuenta". Reason: English survey name left untranslated; the EU-wide instrument has an official Spanish name (EPA de la UE), distinct from Spain's own EPA run by the INE.
2. atlas-es.0062: "tras la Isla de Francia" → "tras Île-de-France". Reason: "Isla de Francia" reads as an island to a Spanish reader; the region is normally written Île-de-France in Spanish press and statistics.
3. atlas-es.0066: "1,0 millón de empleos" → "1,0 millones de empleos". Reason: a decimal figure takes the plural.
4. atlas-es.0010: "régimen Beckham" → "régimen de impatriados (ley Beckham)". Reason: real Spanish name of the tax regime; the popular name is kept as a gloss.
5. atlas-es.0053: "El régimen Beckham (…)" → "El régimen de impatriados o «ley Beckham» (…)". Same reason.
6. atlas-es.0097: "incorpora su convocatoria de otoño de titulados y becarios en septiembre y octubre" → "realiza en septiembre y octubre sus incorporaciones de otoño de titulados y becarios". Reason: "intake" here means the people hired, which the glossary renders "incorporaciones", not "convocatoria" (an entry point or application round).

## Left unchanged on purpose

- Catalan address in 0084 ("Plaça de Sant Roc 20") kept as written; Spanish street types lower case (calle, avenida, plaza) as Spanish usage requires.
- "Healthtech" (0023), "start-ups", "trading", "clúster" kept: normal Spanish business usage.
- "Global LEI Index", "Global Financial Centres Index", "GSER", "ACCIÓ", "StartupBlink", "Startup Genome" kept as names.

## Spanish official names used

Seguridad Social and similar not needed in this chunk. Used: INE, Banco de España, Bolsas y Mercados Españoles, Autoridad Portuaria de Valencia, Comunidad de Madrid, Comunitat Valenciana, Encuesta de Población Activa de la UE (Eurostat), régimen de impatriados («ley Beckham»).

## Remaining doubts for a native speaker

- "Île-de-France" vs the Eurostat Spanish label "Isla de Francia" (0062).
- "Ecosystem Value" rendered "valor del ecosistema" (0070, 0073): a Startup Genome metric name; check whether it should stay in English.
- Address style (0076 etc. "en la Gran Vía 28", no comma before the number): acceptable, but Spanish postal style would be "Gran Vía, 28".
- "health ventures" → "proyectos sanitarios" (0022) is a loose match.

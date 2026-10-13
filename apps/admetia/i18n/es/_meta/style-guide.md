# Spanish style guide (es-ES)

Admetia helps students and recent graduates judge their chances of admission to master's and MBA programmes, and explains how studying, visas and hiring work in 46 countries. The Spanish must read as if written in Spanish by a careful journalist: plain, exact, never promotional.

## What you are translating

Each chunk is a JSON object: `"id": "English string"`. Each string is one piece of interface or prose that the site looks up on its own, so it must stand alone. You write a JSON object with **the same ids in the same order** and the Spanish as the value. Never change, drop, add, merge or split an id.

Strings in a chunk appear in page order, so neighbouring strings give context for short labels.

## Voice and register

- Address the reader as **tú**, singular: `tu perfil`, `elige`, `comprueba`. Never `usted`, never `vosotros`, never voseo.
- European Spanish vocabulary (`máster`, `visado`, `prácticas`, `ordenador`), but avoid regional idioms a Latin American reader would not understand.
- Imperatives for buttons and instructions (`Elige un itinerario`, `Ver resultados`). Infinitives only for menu items that name an activity (`Preparar las entrevistas`).
- Admetia speaks as `nosotros` where the English says "we" or "our reading". Where the English says "I" or "my" (the author's own judgement), keep the first person singular (`mi calibración`, `no encontré`).
- Gender: prefer wording that needs no gender (`quienes solicitan plaza`, `el alumnado`, `personas tituladas` where it reads naturally). Otherwise use the generic masculine: plurals such as `los estudiantes`, `los titulados`, `los candidatos` are correct and must not be replaced by collective nouns in review. Never `@`, `x`, `-e` or doubled forms like `candidatos/as`.
- Keep hedges and uncertainty exactly as strong as the English: "usually", "about", "we could not confirm", "not rated" must not become certainties, and estimates must not become promises.
- Faithful, natural, complete. No summarising, no explaining, no added glosses, no omitted clauses.

## Must not change

- HTML tags and attributes: the same tags, the same number of them, **in the same order** as the English (the site's test compares the sequence, so rephrase the Spanish rather than swap two tags): `<em>`, `<strong>`, `<a href="…">`, `<span …>`, `<br>`, `<abbr>`. Translate the text between tags; copy each tag character for character, attributes and attribute values included (`href`, `class`, `title`, `lang`).
- Placeholders in braces, exactly as written: `{n}`, `{track}`, `{name}`, `{school}`. Move them where Spanish needs them; never translate, rename, drop or duplicate them.
- HTML entities stay entities: `&nbsp;`, `&rarr;`, `&#39;`. The one exception is `&` or `&amp;` joining two ordinary words: write `y` or `e` as the glossary does (`IT &amp; Computing` → `TI e informática`, `Data & AI` → `Datos e IA`). Keep `&`/`&amp;` only inside a name (`AT&amp;T`). Arrows and symbols stay (`→`, `←`, `·`, `…`, `~`, `≥`).
- URLs, e-mail addresses, file names, code, keyboard keys.
- Names: schools, universities, companies, tests, rankings, statistical sources, official visa and permit names in the source language (see the do-not-translate list in the glossary).
- Every figure, date, amount, percentage, deadline and condition. Reformat them (below); never recompute, round or convert them.
- A string that is only a name, a number, a code or a symbol is returned unchanged.

## Punctuation and typography

- Opening `¿` and `¡` are mandatory.
- Sentence case for headings, labels and buttons: only the first word and proper nouns are capitalised (`Plan de batalla`, not `Plan De Batalla`). Days, months, languages and nationalities are lower case (`septiembre`, `inglés`, `alemán`).
- Keep the quotation marks the English uses (`“ ”`, and `’` only where Spanish needs an apostrophe in a foreign name). Full stops and commas go **after** the closing quotation mark.
- Keep the long dash ` — ` where it separates parts of a title (`{track} — Admetia`). In running prose, replace an English dash with a comma, a colon or parentheses when that is what Spanish would write.
- Keep the ellipsis character `…` and the en dash in ranges (`2026–27`, `525–695`).
- No full stop is added to or removed from the end of a string; match the English.
- Abbreviations: `EE. UU.`, `UE`, `p. ej.`, `n.º`, `aprox.`.

## Numbers, dates, money

| English | Spanish |
|---|---|
| `47,000` | `47.000` (point for thousands, from five digits) |
| `1,600` | `1600` (four digits: no separator) |
| `2.3%` · `4.5 million` | `2,3 %` · `4,5 millones` (decimal comma) |
| `80%` | `80 %` |
| `£47,000` · `€37,500` · `$120,000` | `47.000 £` · `37.500 €` · `120.000 $` |
| `CHF 30,000` · `QAR 5,000` | `30.000 CHF` · `5000 QAR` |
| `€2.3 billion` | `2300 millones de euros` (a "billion" is `mil millones`; never `billón`) |
| `107.2 trillion won` | `107,2 billones de wones` (an English "trillion" is a Spanish `billón`) |
| `NT$1,000 billion` · `TRY 13,010.7 billion` | `1 billón de NT$` · `13,0107 billones de TRY` (a thousand billion or more becomes `billones`; same value, never rounded) |
| `€45k` | `45.000 €` |
| `1 September 2026` | `1 de septiembre de 2026` |
| `September 2026` | `septiembre de 2026` |
| `2026–27` | `2026–27` |
| `1st`, `2nd`, `3rd` | `1.º`, `2.º`, `3.º` (or `1.ª` with a feminine noun) |
| `9 am`, `5:30 pm` | `9:00`, `17:30` |

- **Exception, keep the English decimal point:** grades, GPAs and test scores (`GPA 3.77`, `27.4 out of 30`, `IELTS 7.5`), including any value shown as an example of what to type into a field. The calculators read a point, and the Italian edition keeps it too. Every other decimal (percentages, money, statistics) takes a comma.
- Numbers one to nine in running prose may be written as words if the English uses words.

## Untranslatable and foreign terms

- Official names of visas, permits, contracts and institutions that the English gives in the local language stay in that language exactly (`Werkstudent`, `alternance`, `Employment Pass`, `Aufenthaltstitel`). If the English adds an explanation, translate the explanation.
- A permit, visa or office that the English names **in English** is handled by country. Where English is an official language of that country (UK, Ireland, US, Canada, Australia, New Zealand, Singapore, Hong Kong, Malta, Malaysia) the English name is the official one: keep its proper-name part and translate only the generic word visa/permit (`Skilled Worker visa` → `visado Skilled Worker`, `Temporary Graduate visa` → `visado Temporary Graduate`, `482 visa` → `visado 482`, `Student visa` → `visado Student`); a name with no generic word stays whole (`Employment Pass`, `Graduate Route`, `Stamp 1G`). Elsewhere the English is only a translation of the local name: translate it into Spanish, lower case after the first word (`Talent card` → `tarjeta Talento`, `Employee card` → `tarjeta de empleado`, `specialist permit` → `permiso de especialista`, `Opportunity Card` → `tarjeta de oportunidades`, `Red-White-Red Card` → `tarjeta Rojo-Blanco-Rojo`).
- EU-wide instruments use their official Spanish names (see glossary: `Tarjeta Azul UE`, `Tarjeta Sanitaria Europea`).
- Countries, cities and languages use the Spanish exonym where one is established (`Londres`, `Múnich`, `Milán`, `Países Bajos`).
- Job titles: use the established Spanish title where one clearly exists (`Actuary` → `Actuario`). Where Spanish workplaces use the English title, keep it (`Product manager`, `Controller`). Do not paraphrase a title into a description.
- English business words that Spanish finance and tech really use stay in English, in roman type: `start-up`, `fintech`, `trainee`, `private equity`, `venture capital`, `Big Four`.

## Length

Buttons, table headings, tabs, chips and filter labels must stay short: aim for no more than about 30 % longer than the English, and prefer the shorter of two correct options (`Ver resultados`, not `Consulta ahora tus resultados`). Never abbreviate a word to make it fit. Prose has no length limit.

## Replying

Reply with `DONE <target path>` and then a short list of ids that were ambiguous or that you left unchanged on purpose, each with a few words of reason.

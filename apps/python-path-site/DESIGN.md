---
name: Python Path
description: A personal 7-week study companion; one shared layout worn in two switchable looks, Orario and Olivetti, each in light and dark.
colors:
  orario-band: "#1d5443"
  orario-ground: "#ffffff"
  orario-ink: "#17211d"
  orario-muted: "#56645e"
  orario-rule: "#d6ded9"
  orario-band-muted: "#cfe3da"
  orario-code-bg: "#f1f4f2"
  orario-select: "#cfe7dc"
  signal-late: "#b8331f"
  ok: "#1f6b46"
  ok-bg: "#e3f2ea"
  bad: "#a8321f"
  bad-bg: "#fbe9e5"
  orario-dark-ground: "#0f1513"
  orario-dark-ink: "#e6eeea"
  orario-dark-muted: "#9fb2aa"
  orario-dark-rule: "#26332e"
  orario-dark-band: "#163f33"
  orario-dark-link: "#7cc7a6"
  orario-dark-route: "#6fbf9c"
  orario-dark-code-bg: "#18211e"
  orario-dark-late: "#ff8a75"
  olivetti-ground: "#ffffff"
  olivetti-ink: "#141414"
  olivetti-muted: "#5a5a5a"
  olivetti-rule: "#e1e1e1"
  olivetti-blue: "#1f3f8f"
  olivetti-code-bg: "#f3f3f1"
  olivetti-select: "#dbe3f7"
  olivetti-late: "#c23f2a"
  olivetti-dark-ground: "#121212"
  olivetti-dark-ink: "#f1f1ef"
  olivetti-dark-muted: "#a9a9a6"
  olivetti-dark-rule: "#2c2c2c"
  olivetti-dark-link: "#9db4ff"
  olivetti-dark-code-bg: "#1c1c1c"
  olivetti-dark-late: "#ff8f7a"
  week-0-green: "#2c7353"
  week-1-teal: "#14636f"
  week-2-blue: "#1f3f8f"
  week-3-red: "#b53a26"
  week-4-ochre: "#e2a325"
  week-4-ochre-text: "#9a6a08"
  week-5-violet: "#614891"
  week-6-brown: "#7a4f22"
  week-7-olive: "#5b6a1c"
  week-8-plum: "#a02f5f"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 2.75rem)"
    fontWeight: 680
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 96"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 680
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  prose:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.55
    fontVariation: "'wdth' 75"
  olivetti-display:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  olivetti-numeral:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 800
    lineHeight: 0.8
    fontFeature: "'tnum' 1"
  olivetti-body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'liga' 0, 'calt' 0"
  exercise-name:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.3
    fontFeature: "'liga' 0, 'calt' 0"
rounded:
  none: "0px"
  inline-code: "3px"
  control: "4px"
  switch: "7px"
spacing:
  gutter: "16px"
  column-gap: "12px"
  row-min: "48px"
  target: "44px"
  section: "48px"
  page-max: "880px"
components:
  top-bar:
    backgroundColor: "{colors.orario-band}"
    textColor: "{colors.orario-ground}"
    height: "56px"
    padding: "0 16px"
  top-bar-olivetti:
    backgroundColor: "{colors.week-2-blue}"
    textColor: "{colors.olivetti-ground}"
    height: "56px"
  next-up-row:
    textColor: "{colors.orario-ink}"
    typography: "{typography.exercise-name}"
    height: "60px"
    padding: "8px 0"
  checkbox:
    backgroundColor: "{colors.orario-ground}"
    rounded: "{rounded.control}"
    size: "24px"
  checkbox-checked:
    backgroundColor: "{colors.orario-band}"
    textColor: "{colors.orario-ground}"
    rounded: "{rounded.control}"
    size: "24px"
  checkbox-olivetti:
    rounded: "{rounded.none}"
    size: "24px"
  plan-stop:
    textColor: "{colors.orario-ink}"
    height: "48px"
  plan-swatch-olivetti:
    rounded: "{rounded.none}"
    size: "26px"
  code-block:
    backgroundColor: "{colors.orario-code-bg}"
    textColor: "{colors.orario-ink}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  copy-tab:
    backgroundColor: "{colors.orario-code-bg}"
    textColor: "{colors.orario-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "36px"
    padding: "0 10px"
  quiz-option:
    backgroundColor: "{colors.orario-ground}"
    textColor: "{colors.orario-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "10px 14px"
  quiz-option-right:
    backgroundColor: "{colors.ok-bg}"
    textColor: "{colors.orario-ink}"
    rounded: "{rounded.control}"
  quiz-option-wrong:
    backgroundColor: "{colors.orario-ground}"
    textColor: "{colors.orario-ink}"
    rounded: "{rounded.control}"
  quiz-option-wrong-olivetti:
    backgroundColor: "{colors.bad-bg}"
    textColor: "{colors.olivetti-ink}"
    rounded: "{rounded.none}"
  remember-box:
    textColor: "{colors.orario-ink}"
    padding: "16px 20px"
    rounded: "{rounded.none}"
  look-switch:
    rounded: "{rounded.switch}"
    padding: "3px"
  look-switch-option-on:
    backgroundColor: "{colors.orario-ink}"
    textColor: "{colors.orario-ground}"
    rounded: "{rounded.control}"
    padding: "9px 14px"
  search-field:
    backgroundColor: "{colors.orario-ground}"
    textColor: "{colors.orario-ink}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "0 14px"
---

# Design System: Python Path

## Overview

**Creative North Star: "The Timetable and the Manual"**

Python Path is a seven-week route the owner rides every day. The system gives one shared layout two switchable looks. **Orario** reads like a railway timetable: a rail-green band across the top, a pure white ground, near-black ink, one-pixel rules, square structure, narrow-width column heads, tabular figures, and a route line with stops running down the plan. **Olivetti** reads like a printed manual where each chapter owns a colour: flat fields, one colour per week, and that colour runs the top bar, the big week numeral, the progress bar and the plan swatches. The two looks change type, palette and the plan's mark. Layout, content order and components stay the same.

The page is dense and calm. It is built for a half-width Mac window next to VS Code and for a 375px phone, and the next exercise is always the largest target on screen. Hierarchy comes from rules, weight and size. There are no cards, shadows or gradients. Decoration is limited to the two signature marks, the route line and the week swatch. Status stays quiet until it matters: the only alarm colour is the red for "behind plan".

The owner's avoid list in PRODUCT.md is binding on both looks (see Do's and Don'ts).

**Key Characteristics:**
- One layout, two looks (Orario, Olivetti), each in light and dark; both are chosen in the top bar's Display menu (Look, and Mode: Auto / Light / Dark).
- Pure white ground in light mode, never cream; near-black ground in dark mode.
- Structure built from one-pixel rules: a strong ink rule opens a table, light rules separate rows.
- Narrow, tabular, timetable-like labels in sentence case, never uppercase mono.
- Code set in JetBrains Mono with ligatures off, so code matches what the owner types.
- Flat everywhere; the one ring in the system marks the current week.

## Colors

The palette is restrained: ink on white with one structural colour per look. In Orario that colour is rail green. In Olivetti it is the colour of the current week.

### Primary
- **Rail Green** (orario-band): the Orario top bar, links, the route line and stops, the checked checkbox and the progress bar. In dark mode the band deepens to orario-dark-band, and links and the route lift to orario-dark-link and orario-dark-route.
- **Week Colour** (week-0-green through week-8-plum, Olivetti only): one flat colour per week, set at runtime as `--week` (the current week) and `--wk` (each plan stop). It fills the top bar and colours the week numeral, the progress bar and the plan swatches. Olivetti Blue (olivetti-blue, the same value as week 2) is the fallback when no week is in view.

### Secondary
- **Ochre Text** (week-4-ochre-text): week 4's ochre is too light for text on white, so the numeral uses this darker ochre and the top bar switches to ink text (`--band-ink: #141414`).

### Tertiary
- **Signal Red** (signal-late; olivetti-late; dark: orario-dark-late, olivetti-dark-late): only for the "behind plan" note on Today.
- **Feedback pair** (ok / ok-bg, bad / bad-bg): quiz verdicts and the failed-save line. Orario marks a wrong answer with ink, a 2px border and a strikethrough rather than red, because Orario keeps red for "behind plan".

### Neutral
- **Ground** (orario-ground / olivetti-ground, pure white; dark: orario-dark-ground, olivetti-dark-ground): the page.
- **Ink** (orario-ink, green-black; olivetti-ink, neutral black): text, strong rules, the unchecked checkbox border, and the selected look option.
- **Muted** (orario-muted / olivetti-muted): dates, counts, section names, file paths, column heads.
- **Rule** (orario-rule / olivetti-rule): row dividers and the code block border.
- **Code Ground** (orario-code-bg / olivetti-code-bg): code blocks, inline code, the copy tab, and quiz option hover.
- **Selection** (orario-select / olivetti-select): text selection and cheat-sheet search hits.

### Named Rules
**The Red Means Late Rule.** Signal red appears only when the owner is behind plan. Errors and wrong answers in Orario are shown with ink and weight, not red.

**The Week Owns the Field Rule.** In Olivetti the current week's colour drives every week-coloured element: top bar, numeral, progress bar, the current swatch and the Remember box tint. Do not add a second accent next to it.

**The Lift, Don't Swap Rule.** On dark grounds, week colours drawn on the ground (numeral, swatches, bar) are lifted with `color-mix(in srgb, <week> 55%, #ffffff)` so they keep 3:1 contrast. The top bar keeps the full week colour.

## Typography

**Display Font (Orario):** Archivo (with Helvetica Neue, Arial), variable width 62–125
**Display Font (Olivetti):** Hanken Grotesk (with Helvetica Neue, Arial)
**Body Font:** the look's display family; body text is never a separate face
**Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo), ligatures and contextual alternates off

**Character:** Orario uses Archivo's width axis: headings slightly condensed (96%) at weight 680, and labels narrow (75%) like timetable column heads. Olivetti uses Hanken Grotesk at full width and weight 800, with a heavy tabular week numeral.

### Hierarchy
The scale is five steps, `--t-s` 0.875rem, `--t-m` 1rem, `--t-l` 1.1875rem, `--t-xl` 1.5rem and `--t-xxl` clamp(2rem, 1.4rem + 2.6vw, 2.75rem), plus two fixed sizes: prose at 1.0625rem and the Olivetti numeral.
- **Display** (`--t-xxl`, 680 / 800, 1.15, -0.01em, balanced wrap): the week title on Today and week pages, and the Project title.
- **Olivetti Numeral** (800, 4.5rem, 0.8 line-height; 3.25rem under 600px): the week number in week colour beside the title. Orario hides it and keeps "Week N ·" in the title text.
- **Headline** (`--t-xl`): section heads (The plan, Exercises, Quiz, prose h2).
- **Title** (`--t-l`, 500–600): task titles, quiz questions, Remember box heads, prose h3.
- **Body** (`--t-m`, 400, 1.55) and **Prose** (1.0625rem, 1.65, max 70ch): UI text and lesson reading.
- **Label** (`--t-s`, 600, Orario width 75%): column heads, fact terms, table heads. Sentence case only.
- **Exercise Name** (mono 500, 1.0625rem; the first row at 1.25rem): the function name in the Next-up rows. File paths sit under it in mono 0.8125rem, muted.

### Named Rules
**The Narrow Head Rule.** In Orario, labels that head a column are narrow-width Archivo in sentence case. They are never uppercase, never letterspaced and never monospace.

**The Literal Code Rule.** Code and identifiers are always JetBrains Mono with `font-variant-ligatures: none` and `"liga" 0, "calt" 0`.

**The Tabular Count Rule.** Dates, counts and day totals use `font-variant-numeric: tabular-nums`.

## Layout

Single column, max 880px wide, centred, with 16px side gutters (or the safe-area inset if larger). The 56px top bar sticks to the top, and the cheat-sheet search bar sticks below it. Content runs top to bottom with no sidebar.

Lists that behave like tables use a three-part grid: a 44px tick column, a fluid middle, and a fixed right column (11rem on Next-up; 9.5rem for dates plus 4.5rem for counts on the plan). The column gap is 12px. Rows are at least 48px tall (Next-up 60px, week tasks 52px), and every tap target is at least 44px.

Vertical rhythm: 28px above main, 48–56px between major sections, 16–28px inside a section.

Under 600px: column heads hide, Next-up rows collapse to a 40px tick column plus content with the section underneath, plan dates move under the week name, the project table becomes stacked rows, the cheat-sheet index folds into a disclosure, and nav padding tightens so all three links stay on one line.

## Elevation & Depth

The system is flat. Depth comes from rules and ground colour, not shadows. The only box-shadows are structural: the top bar's 3px inset underline on the current nav link, and in Olivetti the double ring (3px ground, then 2px week colour) around the current week's swatch.

### Shadow Vocabulary
- **Current nav underline** (`box-shadow: inset 0 -3px 0 var(--band-ink)`): marks the current page in the top bar.
- **Current week ring, Olivetti** (`box-shadow: 0 0 0 3px var(--ground), 0 0 0 5px var(--wk)`): marks the current week's swatch.
- **Display menu panel** (`box-shadow: 0 10px 28px` at 22% black): the one floating layer, so it gets the one real drop shadow.

### Named Rules
**The Rules, Not Boxes Rule.** Group content with a strong ink rule on top and light rules between rows. Never put a card or a shadow around it.

## Shapes

Square structure. Controls get a small 4px radius in Orario (checkbox, quiz option, search field, copy tab top corners). Olivetti squares off the checkbox, the quiz options and the swatches (0px). Inline code has a 3px radius. The look switch is a 7px outer frame around 4px segments. Plan stops are the only round forms: Orario's route stops are circles on a 2px line, and Olivetti's swatches are 26px squares.

## Components

### Top Bar
Full-width flat band, 56px tall, sticky. The name sits left (650 weight, 105% width; Olivetti 800); Today, Project and Cheat sheet sit right as 56px-tall links at 85% opacity, going to 100% on hover or when current. The current link gets a 3px inset underline. Orario fills the bar with Rail Green. Olivetti fills it with the current week's colour and switches to ink text on ochre. Focus inside the bar uses a band-ink outline inset by 4px.

### Next-up Rows
The three tallest targets on Today. Each row is a whole label: tick column, the exercise name in mono with its file path beneath, and the section name in muted text on the right. Column heads ("Next up", "Section") sit above a strong ink rule. Hovering underlines the function name. After a tick, an undo line appears under the list.

### Checkbox (drawn)
A custom 24px box with a 2px ink border on the ground colour. When checked it fills with the check colour (Rail Green; Olivetti ink) and shows a masked square-capped tick in the ground colour. Orario 4px radius; Olivetti square.

### Plan: Stops and Swatches
The plan is a timetable with a strong rule on top. Each 48px row has the mark, dates, "Week N · Title" and a done/total count. The whole row is the link. **Orario:** a 2px Rail Green route line joins the circular stops. Past stops are filled, upcoming stops are hollow, and the current stop is a thick 6px ring. **Olivetti:** no line. Each week gets a 26px square in its own colour: outlined while upcoming, filled when done or current, and the current one gets the double ring. The current row's title and count are bold.

### Progress Count
"9 of 25 done this week" followed by a track that fills the rest of the line. Orario: a 2px rule filled in Rail Green. Olivetti: a 6px bar filled in the week colour. The width animates over 0.4s with an ease-out curve unless reduced motion is on.

### Prose and Remember Box
Lessons and the cheat sheet render markdown in the prose style (max 70ch). A Remember box is a blockquote whose first bold line becomes a title. Orario draws it with a 1px ink border and 16px 20px padding. Olivetti drops the border and tints it with 10% week colour over the ground. Tables scroll sideways inside a wrapper, with a short muted note.

### Code Block with Copy Tab
Code ground, 1px rule border, 14px 16px padding, 0.875rem mono at 1.55, tab size 4, sideways scroll with a thin muted scrollbar. The copy button is a tab on the block's top-right edge: code ground, rule border, 4px top corners, a 14px outline copy icon plus "Copy", 36px tall (44px on touch). Hovering darkens the border to ink.

### Quiz Options and States
Full-width 48px buttons with a 1px ink border, 10px 14px padding, body type, and a code-ground hover. Once answered, the other options go muted with light rules. **Right:** ok-bg fill, ok border, verdict in ok colour. **Wrong (Orario):** ground fill, 2px ink border, 2px strikethrough, verdict in bold ink. **Wrong (Olivetti):** bad-bg fill, 1px bad border, no strikethrough, verdict in bad colour. Olivetti options are square.

### Olivetti Colour Field
In Olivetti every page opens on a full-bleed band in its colour, merged with the top bar: the week's colour on Today and week pages (Week 2 blue, Week 3 red, Week 4 ochre with ink text…), blue on Project, ochre on the Cheat sheet. The band holds the date line, the 6rem numeral and title, the plan note (bold, in the band's ink), and the done count with a band-ink bar; on week pages the back and previous/next links. Below the band, links, focus and ticked checkboxes take the week colour (lifted 55% toward white on dark grounds); the current plan row is tinted 12%, swatches are 30px, Remember boxes are a 15% tint. The band stays saturated in dark mode. Orario has no band.

### Look Switch (Display menu)
In the top bar, right of the links: a "Display" button (half-filled circle icon; icon-only under 480px, where the wordmark also hides) opens a panel with two radio groups, Look (Orario, Olivetti) and Mode (Auto, Light, Dark), and the note "Auto follows claude.ai or your device." Each group sits in a 1px ink frame (7px radius, 3px padding) with 4px segments; the selected segment is inverted (ink fill, ground text). Focus shows a 2px outline inset on the segment. The panel is ground-coloured with a 1px ink border and the page's only drop shadow (offset 10px, blur 28px); Escape or a click outside closes it and focus returns to the button. Mode writes data-theme on the root (Auto restores the host's value), stored per browser.

### Search Field (cheat sheet)
A sticky bar under the top bar with a sentence-case label, a 48px input (1px ink border, 4px radius) and the result count right-aligned inside the field in muted tabular figures. Hits are highlighted with the selection colour.

### Text Links and Steps
Primary actions ("Continue the lesson", "Take the quiz", previous/next week) are 600-weight text links with a 16px stroked arrow SVG and a 44px target, underlined on hover. They are not buttons and not chips.

## Do's and Don'ts

### Do:
- **Do** keep the ground pure white (#ffffff) in light mode in both looks.
- **Do** build tables and lists from one-pixel rules: an ink rule above, light rules between rows.
- **Do** reserve signal red for "behind plan"; in Orario show wrong answers with ink, weight and strikethrough.
- **Do** let the current week's colour own the Olivetti top bar, numeral, bar and swatches, and lift it with `color-mix(in srgb, <week> 55%, #ffffff)` wherever it sits on a dark ground.
- **Do** set every code fragment in JetBrains Mono with ligatures and contextual alternates off.
- **Do** keep every target at 44px or more, with Next-up rows as the largest on Today.
- **Do** use tabular figures for dates, counts and deadlines.

### Don't:
- **Don't** use monospace uppercase eyebrow labels; column heads are narrow sentence-case Archivo.
- **Don't** make chips and buttons pill-shaped; controls are 4px (Orario) or square (Olivetti).
- **Don't** use a ">>>" logo; the name "Python Path" in the top bar is the mark.
- **Don't** add numbered "01/02/03" section labels.
- **Don't** put italic accent words in headings.
- **Don't** use cream or off-white backgrounds.
- **Don't** use Bricolage Grotesque, Space Grotesk or Inter as the display font.
- **Don't** use yellow highlighter badges.
- **Don't** put cards inside cards, or cards at all; group with rules.
- **Don't** use gradients or glows; colour fields are flat.
- **Don't** fall back to the course-dashboard default of sidebar, progress ring and card grid.

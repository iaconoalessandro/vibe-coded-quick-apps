# Product

Written on 10 October 2026 from `docs/ADMETIA-UX-REFACTOR-PROMPT.md` and the repository, not from an interview. Correct anything that is wrong.

## Platform

Web. Static site on GitHub Pages under `/admetia/`. Runs unbuilt from the repository's files.

## Stack

Hand-written HTML, CSS and JavaScript with no framework and no runtime dependency. Node scripts generate the Career Explorer (`npm run careers`), stamp the shared chrome (`npm run shell`) and package the site (`npm run build`, esbuild only). No backend, accounts or external tracking.

## Users

People making overlapping decisions about study and work, often 20 to 30, often European and often Italian: a student comparing master's programmes; someone asking whether further study serves a career; an internship seeker or recent graduate; a working professional weighing a move or a change; someone comparing countries and planning to relocate; and someone undecided who does not yet know the site's words. They move between these situations and must never be asked to pick one.

## Product Purpose

An independent education, career and relocation reference. A reader should reach what bears on the decision in front of them without reading the rest, and still be able to read everything.

## Positioning

Free, unofficial, private (answers stay in the browser), and candid: every figure carries its source and date, and the pages say where something is unverified.

## Operating Context

Read on phones and laptops, often on a deep link from a search or a shared address. English and Italian.

## Capabilities and Constraints

Three admissions models behind seven calculators; a directory of 136 programmes; 124 role families in 13 fields; hiring, visa, life and arrival guides for 46 countries and 200 hubs; recruiting calendar, application templates and interview preparation. All substantive content, data, citations, downloads and saved answers must be preserved; public addresses must keep working.

## Brand Commitments

A financial newspaper in The City design: serif headlines, ruled columns, square corners, no rounded cards, no decoration that competes with reading.

## Evidence on Hand

The research library (`research/`), the models and their test suites, the Atlas's sourced claims. No user research, analytics or usability testing exists.

## Product Principles

1. Preserve depth; organise it by task.
2. Keep prerequisites, deadlines, costs, blockers and uncertainty at the point of decision.
3. One address and one copy for each piece of content, reachable from every journey that needs it.
4. Tools are Operate surfaces; guides are Read surfaces.
5. Nothing is advice, and the pages say so where it matters.

## Accessibility & Inclusion

WCAG 2.2 AA is the target. Native controls first; everything usable from the keyboard; essential content available without script where the page allows; both languages kept in step.

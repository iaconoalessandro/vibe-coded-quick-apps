# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
One person: the owner, a Python beginner in an MSc data science programme (UniPi). Opens the page almost every day on a Mac, often in a narrow window (about half the screen) next to VS Code, and sometimes on a phone.

## Product Purpose
"Python Path" is a personal study companion for a 7-week path from near-zero Python to a data-engineering course project (DSS). Daily jobs, in order of frequency: see the next exercises to do today and tick them off; read the current week's lesson; answer the week's quiz; look things up in the cheat sheet while coding. Success: the owner opens it, sees what to do today, and does it without hunting.

## Operating Context
- Exercises live in a local repo, `~/code/python-path` (stubs in `exercises/wNN_*.py`, checked with `pytest`). The page lists them in the .py file's order.
- Course deadlines: DSS Part 1 (assignments 1–14) Fri 11 Dec 2026; DSS Part 2 (MDX, dashboards, report) Fri 18 Dec 2026. Later: P4DS exam retake (date unknown), then a career track.
- Book: Spronck, *The Coder's Apprentice*; each week names chapters.
- A Sunday review with Claude uses the week's "Sunday questions".

## Capabilities and Constraints
- Single claude.ai artifact page; external scripts only from allowed CDNs; fonts only from Google Fonts.
- Progress is stored in the artifact database, document `progress/state` with `done` (task id → true) and `quiz` (question key → chosen option index). Ids must stay stable so saved progress survives. On a failed save: one line of feedback plus a local copy; no sync logic.
- Cheat sheet text comes from `~/code/python-path/CHEATSHEET.md` (single source), must stay searchable.
- All content must be kept: weekly lessons, Remember boxes, book chapters, exercise checkboxes, quizzes with explanations, Sunday questions, the 21 DSS assignments with both deadlines, the Phase B/C outline.
- Must work at phone width (375px) and in light and dark mode. Code blocks need a copy button.
- Terminology: "DSS" is the course's name and stays. Internal plan labels ("Phase A", "W2") are not used in the UI.
- Today shows the first week that still has unticked exercises; when that differs from the calendar week, a small note says which week is planned.

## Brand Commitments
Binding constraints set by the owner: calm, good-looking, obvious. Avoid: monospace uppercase eyebrow labels; pill-shaped chips and buttons everywhere; a ">>>" logo; numbered "01/02/03" section labels; italic accent words in headings; cream or off-white backgrounds; Bricolage Grotesque, Space Grotesk or Inter as display font; yellow highlighter badges; cards inside cards; gradients and glows.

## Evidence on Hand
All content exists in the current page (lessons, quizzes, tasks, assignment table) and in `~/code/python-path/CHEATSHEET.md`. No other assets.

## Product Principles
- Today's next action comes first; everything else is one step away.
- One way to reach each thing: no duplicate navigation.
- Reading comfort for long lessons and code beats decoration.
- Status is shown quietly and only when it matters (progress counts, a failed save).

## Accessibility & Inclusion
Keyboard use, visible focus, adequate contrast in both themes, touch targets sized for a phone.

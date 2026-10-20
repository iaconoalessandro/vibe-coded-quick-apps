## Why this week exists
Part 2 (MDX queries, dashboards, the 10-page report) is due **18 December**. MDX reads strangely at first because it's built around **axes** and **tuples**, not rows.

## The core shape
```sql
SELECT
  { [Measures].[Qty] }                                  ON COLUMNS,
  NON EMPTY [Store].[Store Id].[Store Id].MEMBERS       ON ROWS
FROM [Sales]
WHERE ( [Date].[Year].&[1994] )                          -- the slicer: a filter
```
- **Member**: one value of a dimension, like `[Date].[Year].&[1994]`.
- **Tuple** `( , )`: one member per dimension, which is one cell's coordinates.
- **Set** `{ , }`: a list of members or tuples, placed on an axis.
- `A * B` (CROSSJOIN) puts every combination on rows. `NON EMPTY` drops empty rows.

## Calculated members: where the work happens
```sql
WITH MEMBER [Measures].[Qty prev year] AS
  ( [Measures].[Qty], [Date].[Calendar].CURRENTMEMBER.PREVMEMBER )
MEMBER [Measures].[YoY %] AS
  IIF( [Measures].[Qty prev year] = 0, NULL,
       ([Measures].[Qty] - [Measures].[Qty prev year]) / [Measures].[Qty prev year] ),
  FORMAT_STRING = "Percent"
SELECT { [Measures].[Qty], [Measures].[YoY %] } ON COLUMNS,
       [Date].[Calendar].[Year].MEMBERS ON ROWS
FROM [Sales]
```
- `PREVMEMBER` is the previous member at the same level. `PARALLELPERIOD([Date].[Calendar].[Year], 1, member)` is the same position one year earlier (for example, the same season last year).
- `[All]` members give grand totals for free. Put them on an axis for an "overall" row.
- `FILTER(set, condition)`, `ORDER(set, expr, DESC)`, `TOPCOUNT(set, n, expr)`.
- Distinct counts need a **distinct count measure** in the cube, which matters when "count each file once" is the question.

> **Remember**
> - One cell = one tuple. Anything you don't specify comes from the slicer or the `[All]` member.
> - Guard every division with `IIF(x = 0, NULL, ...)`.
> - Write the query in words first: "for each X, show Y, compared to Z."

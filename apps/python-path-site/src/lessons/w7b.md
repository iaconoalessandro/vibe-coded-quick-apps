## What this week is for
DSS Part 2 (the MDX queries, the dashboards and a report of at most 10 pages) is due **Friday 18 December**. MDX is the query language for cubes. It looks a bit like SQL, which is misleading: SQL thinks in **rows** you filter and group, MDX thinks in **cells** of a cube you point at. Once that idea clicks, most queries are short. This lesson builds it up one piece at a time, on a small sales cube (dimensions Store, Title and Date; measure Qty). The course's demo cube works the same way.

## Members: the positions along a dimension
Every value of a dimension attribute is a **member**. Members are written with square brackets, from the dimension down:
```sql
[Store].[Store Id].&[7131]        -- the member with key 7131 of attribute Store Id
[Date].[Year].&[1994]             -- the year 1994
[Measures].[Qty]                  -- measures are members too, of a special dimension
```
`&[...]` means "the member with this **key**". Without `&`, `[Date].[Year].[1994]` looks the member up by its **name**; both work when names are unique.

Each attribute also has an **All** member, the total over everything: `[Store].[Store Id].[All]`.

Useful functions on a member:
```sql
[Date].[Calendar].[Month].&[199409].PREVMEMBER   -- the month before: August 1994
[Date].[Calendar].[Year].&[1994].CHILDREN        -- its quarters (one level down the hierarchy)
[Date].[Calendar].[Month].&[199409].PARENT       -- its quarter
```

## Tuples: the coordinates of one cell
A **tuple** lists one member from several dimensions, in round brackets. It points at **one cell**:
```sql
( [Store].[Store Id].&[7131], [Date].[Year].&[1994], [Measures].[Qty] )
-- "quantity sold by store 7131 in 1994": one number
```
What about dimensions you didn't mention, like Title? They take their **All** member: all titles together. That rule explains a lot of MDX behaviour: **anything you don't specify is "all of it"** (unless the WHERE clause says otherwise).

## Sets: lists of members or tuples
A **set** is a list in curly brackets. It's what you put on the rows or columns of a result:
```sql
{ [Date].[Year].&[1993], [Date].[Year].&[1994] }   -- two members
[Store].[Store Id].[Store Id].MEMBERS              -- every store (without the All member)
[Date].[Calendar].[Year].&[1993] : [Date].[Calendar].[Year].&[1994]   -- a range
```
`.MEMBERS` on a level gives all its members. Writing the attribute name twice, `[Store Id].[Store Id]`, means "the level of individual stores", which excludes the All member.

## The SELECT statement: putting sets on axes
```sql
SELECT
  { [Measures].[Qty] }                               ON COLUMNS,
  [Store].[Store Id].[Store Id].MEMBERS              ON ROWS
FROM [Sales]
WHERE ( [Date].[Year].&[1994] )
```
Read it as a spreadsheet you're laying out:

- **ON COLUMNS**: the set across the top. Here, one column: Qty.
- **ON ROWS**: the set down the side. Here, one row per store.
- **FROM**: which cube.
- **WHERE**: the **slicer**. Not a filter on rows like in SQL, but a fixed coordinate for every cell: "everything in this result is about 1994".

Each cell of the result is the tuple (its row member, its column member, the slicer), with All for everything else. That's the whole evaluation model.

### Combining dimensions on one axis
To show every store for every year, put the **cross join** of both sets on rows, written `*`:
```sql
SELECT { [Measures].[Qty] } ON COLUMNS,
       NON EMPTY [Store].[Store Id].[Store Id].MEMBERS * [Date].[Year].[Year].MEMBERS ON ROWS
FROM [Sales]
```
Each row is now a pair (store, year). Many pairs have no sales; **NON EMPTY** removes rows where every cell is empty.

## Sorting, filtering and top-N
These functions take a set and return a set, so they go wherever a set goes:
```sql
ORDER( [Store].[Store Id].[Store Id].MEMBERS, [Measures].[Qty], BDESC )
-- stores sorted by Qty, highest first (B = break the hierarchy, sort all together)

FILTER( [Store].[Store Id].[Store Id].MEMBERS, [Measures].[Qty] > 100 )
-- only stores that sold more than 100

TOPCOUNT( [Title].[Title Id].[Title Id].MEMBERS, 5, [Measures].[Qty] )
-- the 5 best-selling titles
```
In `FILTER`, the condition is evaluated for each member in turn, together with the slicer: "the Qty of this store, in the WHERE context".

## Calculated members: computing new numbers
Most real questions need a number that isn't stored: a share, a growth, a comparison. You define it with `WITH MEMBER`, at the top of the query, then use it like any measure:
```sql
WITH MEMBER [Measures].[Share of total] AS
  [Measures].[Qty] / ( [Measures].[Qty], [Store].[Store Id].[All] ),
  FORMAT_STRING = "Percent"
SELECT { [Measures].[Qty], [Measures].[Share of total] } ON COLUMNS,
       [Store].[Store Id].[Store Id].MEMBERS ON ROWS
FROM [Sales]
```
Look at the denominator: it's a tuple that takes the current cell and **changes one coordinate**, the store, to All. So for each store row it means "Qty of all stores". This "same cell, but with one coordinate moved" idea is the key MDX skill.

Moving along time works the same way:
```sql
WITH MEMBER [Measures].[Qty prev year] AS
  ( [Measures].[Qty], [Date].[Calendar].CURRENTMEMBER.PREVMEMBER )
MEMBER [Measures].[Growth] AS
  IIF( [Measures].[Qty prev year] = 0, NULL,
       ( [Measures].[Qty] - [Measures].[Qty prev year] ) / [Measures].[Qty prev year] ),
  FORMAT_STRING = "Percent"
SELECT { [Measures].[Qty], [Measures].[Growth] } ON COLUMNS,
       [Date].[Calendar].[Year].MEMBERS ON ROWS
FROM [Sales]
```
- `CURRENTMEMBER` is the member of that hierarchy in the cell being computed (here, the row's year). `.PREVMEMBER` is the one before it at the same level.
- `PARALLELPERIOD([Date].[Calendar].[Year], 1, member)` gives the same position one year earlier: for a month, the same month last year. Useful for "compared to the same season last year".
- `IIF(condition, if_true, if_false)` guards the division. Returning `NULL` (not 0) makes the cell empty, exactly like returning `None` in week 6, and `NON EMPTY` can then hide it.

## Writing a query, step by step
1. **Say it in words** first: "for each X, show Y, compared to Z, only where W". 
2. X tells you what goes **on rows**; Y (and Z) are the measures **on columns**; a fixed context goes in **WHERE**; a condition on X is a **FILTER**.
3. If Y or Z isn't stored in the cube, define it with **WITH MEMBER**, usually as "the current cell with one coordinate moved".
4. Run it with a small set on rows first, check one number by hand (or with SQL on the star schema), then widen it.

**Distinct counts** need a distinct-count measure in the cube (week 7). If a query asks "how many different users", check that the cube has one before writing MDX around it.

## Dashboards and the report
The dashboards (Power BI) are built on the same cube: drag dimensions onto axes and measures into values, which is MDX with a mouse. Choose each chart for the question it answers, label axes and units, and keep screenshots for the report. In the report, for every query explain what it computes, how you checked it, and every edge case you decided (empty cells, division by zero, ties).

> **Remember**
> - A tuple `( , )` is one cell; a set `{ , }` is a list for an axis.
> - Anything you don't specify is the All member, unless WHERE fixes it.
> - WHERE is a slicer (a fixed coordinate), not a row filter. Use FILTER for conditions.
> - Calculated members = the current cell with one coordinate moved.
> - Guard every division with `IIF(x = 0, NULL, ...)`.
> - Write the query in words first.

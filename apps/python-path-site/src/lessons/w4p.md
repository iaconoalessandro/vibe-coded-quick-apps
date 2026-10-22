## What this week is for
Until now a table was a **list of dicts**, and every operation was a loop you wrote yourself. That's the right way to *learn* what a group-by or a join does, and the DSS assignments A4–A6 require it. Everywhere else (most of the exam points, DSS A1–A2, and every data job you'll apply for) you're allowed and expected to use the two libraries the whole field runs on:

- **NumPy**: fast arrays of numbers. Maths on a whole column in one line, no loop.
- **pandas**: tables (**DataFrames**) built on top of NumPy. Reading files, cleaning, filtering, grouping, joining, reshaping.

The good news: you already know *what* every operation does, because you wrote it by hand in weeks 2–4. This week you learn the one-line version. The table at the end of the lesson puts the two side by side.

Install both into your venv once (pandas brings NumPy with it):
```bash
pip install pandas
```
And import them with the names everyone uses:
```python
import numpy as np
import pandas as pd
```

## NumPy: arrays
A NumPy **array** looks like a list, but every element has the **same type** (all ints, or all floats) and it's stored as one compact block of memory. That's why it's fast, and it's what lets you do maths on the whole thing at once.
```python
a = np.array([3, 1, 4, 1, 5])
a.dtype          # dtype('int64'): the type of every element
a.shape          # (5,): 5 elements, 1 dimension
a * 2            # array([ 6,  2,  8,  2, 10])
a + a            # array([ 6,  2,  8,  2, 10])
a > 2            # array([ True, False,  True, False,  True])
```
Compare with a list: `[3, 1, 4] * 2` gives `[3, 1, 4, 3, 1, 4]` (repetition), and `[3, 1, 4] > 2` is an error. On an array, an operator applies **to every element**. This is called **vectorisation**: you describe the operation once, NumPy runs the loop in fast C code.

### Making arrays
```python
np.arange(6)              # array([0, 1, 2, 3, 4, 5])   like range(), but an array
np.arange(0, 1, 0.25)     # array([0.  , 0.25, 0.5 , 0.75])  steps can be floats
np.zeros(3)               # array([0., 0., 0.])
np.linspace(0, 10, 5)     # array([ 0. ,  2.5,  5. ,  7.5, 10. ])  5 evenly spaced points
```

### Two dimensions: shape and reshape
A table of numbers is a 2-D array: rows × columns.
```python
m = np.arange(6).reshape(2, 3)
# array([[0, 1, 2],
#        [3, 4, 5]])
m.shape           # (2, 3): 2 rows, 3 columns
m[0]              # array([0, 1, 2])      first row
m[:, 1]           # array([1, 4])         second column (":" means "all rows")
m[1, 2]           # 5                     row 1, column 2
m.reshape(3, 2)   # same 6 numbers, now 3 rows of 2
m.reshape(-1, 1)  # -1 means "work it out": 6 rows, 1 column
```
`reshape` never changes the numbers, only how they're arranged, so the total must match: 6 numbers can be 2×3 or 3×2, never 4×2.

### Statistics and the `axis` argument
```python
m.sum()            # 15: everything
m.sum(axis=0)      # array([3, 5, 7]): down each column
m.sum(axis=1)      # array([ 3, 12]): across each row
m.mean(axis=0)     # array([1.5, 2.5, 3.5])
np.std(m)          # 1.707...  (np.mean, np.std, np.sum also exist as functions)
m.max(), m.argmax()   # 5, 5: the biggest value and its position
```
How to remember `axis`: **axis=0 squashes the rows away**, so you get one number per column. axis=1 squashes the columns, one number per row. In data work you almost always want axis=0: "the mean of each feature".

### Boolean masks: filtering without a loop
A comparison gives an array of True/False (a **mask**). Put a mask inside `[ ]` and you keep only the True positions:
```python
a = np.array([3, -1, 4, -1, 5])
a[a > 0]                    # array([3, 4, 5])
a[(a > 0) & (a < 5)]        # array([3, 4])   & = and, | = or, ~ = not
(a < 0).sum()               # 2: True counts as 1, so this counts matches
```
Two rules that catch everyone: use `&`, `|`, `~` (not `and`, `or`, `not`), and put **every comparison in parentheses**, because `&` binds tighter than `>`.

### `np.where`: if/else on every element
```python
np.where(a > 0, a, 0)              # array([3, 0, 4, 0, 5])   negatives become 0
np.where(a > 0, "pos", "neg")      # array(['pos', 'neg', 'pos', 'neg', 'pos'])
```
Read it as "where the condition is true take the first value, otherwise the second".

### `np.select`: if / elif / else on every element
When there are more than two cases, give a list of conditions and a list of results. The **first** condition that's true wins, like `if/elif`:
```python
score = np.array([45, 62, 78, 91])
conditions = [score >= 85, score >= 70, score >= 50]
choices    = ["A",         "B",         "C"]
np.select(conditions, choices, default="F")
# array(['F', 'C', 'B', 'A'])
```
91 matches all three conditions, and gets "A" because that one is checked first. So order the conditions from strictest to loosest.

### Why NumPy is fast (the oral question)
A Python list holds pointers to separate objects scattered in memory, and a Python loop checks the type of every element on every step. A NumPy array is one block of same-typed numbers, and the loop runs in compiled C with no type checks. On a million numbers, `a * 2` is typically 50–100× faster than `[x * 2 for x in lst]`.

## pandas: Series and DataFrame
pandas has two objects:

- a **Series** is one column: a NumPy array plus a label for each row (the **index**);
- a **DataFrame** is a table: several Series that share the same index, one per column.

You can build one from the list of dicts you already know:
```python
orders = pd.DataFrame([
    {"order_id": 1, "customer": "ada",   "city": "Pisa",    "amount": 120.0, "date": "2024-01-05"},
    {"order_id": 2, "customer": "alan",  "city": "Livorno", "amount":  35.5, "date": "2024-01-07"},
    {"order_id": 3, "customer": "ada",   "city": "Pisa",    "amount":  80.0, "date": "2024-02-11"},
    {"order_id": 4, "customer": "grace", "city": "Lucca",   "amount": 210.0, "date": "2024-02-12"},
])
```
But usually you read it from a file:
```python
df = pd.read_csv("data.csv")                       # header row becomes column names
df = pd.read_csv("jobs.csv", header=None, names=["id", "title", "min", "max"])   # no header row
df = pd.read_csv("data.csv", sep=";", na_values=["?", "-"])   # other separator; extra "missing" markers
df = pd.read_json("records.json")                  # a JSON list of objects
df.to_csv("out.csv", index=False)                  # write back (index=False: don't write row numbers)
```

## 1. Inspect: always look first
The first four things to run on any new dataset:
```python
df.shape        # (4, 5): rows, columns. Not a method, so no ()
df.head()       # the first 5 rows (df.head(10) for 10); df.tail() for the last ones
df.info()       # every column: its type and how many non-missing values
df.describe()   # count, mean, std, min, quartiles, max of each numeric column
```
`info()` is where you spot problems: a column of numbers whose type is `object` or `str` means some value in it isn't a number (a `"?"`, a `"N/A"`). Also useful:
```python
df.columns            # the column names
df.dtypes             # the type of each column
df["city"].unique()   # the distinct values
df["city"].nunique()  # how many distinct values
```

## 2. Select and filter
### Columns
```python
df["amount"]                  # one column: a Series
df[["customer", "amount"]]    # several columns: a DataFrame (note the double brackets: it's a list)
```
### Rows by label: `.loc`, rows by position: `.iloc`
```python
df.loc[0]                          # the row whose index label is 0
df.loc[0:2, ["customer", "amount"]]   # rows labelled 0 to 2 (INCLUDED), two columns
df.iloc[0]                         # the first row, whatever its label
df.iloc[0:2, 0:3]                  # first 2 rows, first 3 columns (end EXCLUDED, like lists)
df.iloc[-1]                        # the last row
```
The difference matters after you filter or sort: labels stay attached to their rows, so `loc[0]` still finds the original row 0, while `iloc[0]` is "whatever is first now". Rule of thumb: **`loc` = labels and conditions, `iloc` = numeric positions.**

### Filtering rows with conditions
Exactly the boolean masks you saw in NumPy, one True/False per row:
```python
df[df["amount"] > 100]                                 # orders over 100
df[(df["city"] == "Pisa") & (df["amount"] > 100)]      # both: & and parentheses, like NumPy
df[(df["city"] == "Pisa") | (df["city"] == "Lucca")]   # either
df[~(df["city"] == "Pisa")]                            # not
df.loc[df["amount"] > 100, "customer"]                 # filter rows AND pick a column
```
Three shortcuts that make filters shorter and easier to read:
```python
df[df["city"].isin(["Pisa", "Lucca"])]        # value is in a list (instead of chaining |)
df[df["amount"].between(50, 150)]             # 50 <= amount <= 150 (both ends included)
df.query('amount > 50 and city == "Pisa"')    # the condition as a string; plain and/or work here
limit = 50
df.query("amount > @limit")                   # @ uses a Python variable
```

## 3. Missing data
pandas marks a missing value as **NaN** ("not a number"; `None` in a text column becomes NaN or `<NA>` too).
```python
df.isnull().sum()            # how many missing values in each column: the first check to run
df["city"].isnull()          # True/False per row (isna() is the same thing)
df.dropna()                  # drop every row that has any missing value
df.dropna(subset=["city"])   # drop rows only where "city" is missing
df.fillna(0)                 # fill every missing value with 0
df["amount"] = df["amount"].fillna(df["amount"].median())   # fill one column with its median
```
Real files rarely use a real empty cell. They write `"?"`, `-999`, `"unknown"`, `"N/A"`. Turn those into proper NaN first, then the tools above work:
```python
df = df.replace(["?", "unknown", "N/A"], np.nan)    # several values → NaN
df["age"] = df["age"].replace(-999, np.nan)          # only in one column
df = df.replace({"city": {"pisa": "Pisa"}})          # or fix spellings: column → {old: new}
```
**Watch out:** `NaN == NaN` is False. Never test for missing with `==`; use `isnull()`.

## 4. Types and names
```python
df["amount"] = df["amount"].astype(float)        # change a column's type
df["order_id"] = df["order_id"].astype(int)      # fails if any value is missing or not a number
df["amount"] = pd.to_numeric(df["amount"], errors="coerce")   # bad values become NaN instead of an error
df = df.rename(columns={"amount": "total", "date": "order_date"})
df.columns = df.columns.str.strip().str.lower()  # tidy every column name at once
```
### Dates: `pd.to_datetime` and the `.dt` accessor
Dates arrive as strings. Convert the column once, then `.dt` gives you the parts, for every row:
```python
df["date"] = pd.to_datetime(df["date"])           # format="%d/%m/%Y" if it's not year-month-day
df["year"]    = df["date"].dt.year
df["month"]   = df["date"].dt.month
df["weekday"] = df["date"].dt.day_name()          # "Monday", ...
df["hour"]    = df["date"].dt.hour
df[df["date"] >= "2024-02-01"]                    # compare against a date string directly
(df["date"].max() - df["date"].min()).days        # subtracting dates gives a duration
```
### Text: the `.str` accessor
Every string method you know, applied to a whole column. Missing values stay missing instead of crashing:
```python
df["customer"].str.strip().str.lower()            # tidy text
df["customer"].str.title()                        # "ada" → "Ada"
df["text"].str.contains("sale", case=False)       # True/False per row: use it as a filter
df["text"].str.len()                              # length of each string
df["text"].str.count(r"#\w+")                     # how many hashtags in each text (a regex)
df["email"].str.extract(r"@(\w+)")                # the first regex group, as a new column
df["name"].str.split(" ").str[0]                  # first word
```

## 5. Cleaning: duplicates, dropping, sorting
```python
df.duplicated().sum()                         # how many rows are exact copies of an earlier row
df.duplicated(subset=["order_id"]).sum()      # duplicates judged only on order_id
df = df.drop_duplicates()                     # keep the first copy of each row
df = df.drop_duplicates(subset=["customer"], keep="last")   # one row per customer, the last one
df = df.drop(columns=["notes", "internal_id"])   # remove columns you don't need
df.sort_values("amount")                         # smallest first
df.sort_values("amount", ascending=False)        # biggest first
df.sort_values(["city", "amount"], ascending=[True, False])   # by city, then biggest amount within it
```
A classic combination, "the **latest** order of each customer": sort by date, then keep the last row per customer.
```python
latest = df.sort_values("date").drop_duplicates(subset=["customer"], keep="last")
```
Most pandas methods **return a new DataFrame** and leave the original alone. That's why you see `df = df.something()`. If you forget the `df =`, nothing changes, just like `s.upper()` on a string in week 1.

## 6. New columns
### Vectorised arithmetic (the first choice)
```python
df["amount_vat"] = df["amount"] * 1.22
df["big"] = df["amount"] > 100                                  # a True/False column
df["size"] = np.where(df["amount"] > 100, "big", "small")       # two cases
df["band"] = np.select(
    [df["amount"] >= 200, df["amount"] >= 100],
    ["high", "medium"],
    default="low",
)                                                               # several cases
```
### `.map` and `.apply`: when there's no ready-made operation
```python
regions = {"Pisa": "coast", "Livorno": "coast", "Lucca": "inland"}
df["region"] = df["city"].map(regions)            # look each value up in a dict (unknown → NaN)
df["initial"] = df["customer"].apply(lambda s: s[0].upper())   # run a function on each value
df["label"] = df.apply(lambda row: f"{row['customer']}@{row['city']}", axis=1)   # on each ROW
```
`apply` is a Python loop in disguise, so it's slow on big data. Reach for vectorised arithmetic, `.str`, `.dt`, `np.where` or `np.select` first; use `apply` when nothing else fits.

### Counting and binning
```python
df["city"].value_counts()                  # each value and how often it appears, most common first
df["city"].value_counts(normalize=True)    # the same as fractions (shares that sum to 1)
pd.cut(df["age"], bins=[0, 18, 65, 120], labels=["minor", "adult", "senior"])   # your own boundaries
pd.qcut(df["amount"], q=4, labels=["Q1", "Q2", "Q3", "Q4"])                    # 4 equal-sized groups
```
`cut` uses the **edges you choose** (bins are `(0, 18]`: left excluded, right included). `qcut` picks the edges so each group has **the same number of rows** (quartiles here).

### One-hot encoding: `get_dummies`
Most models need numbers, not words. `get_dummies` turns one text column into one 0/1 column per value:
```python
pd.get_dummies(df, columns=["city"], dtype=int)
#    order_id ... city_Livorno  city_Lucca  city_Pisa
# 0         1 ...            0           0          1
```

## 7. Group and aggregate
`groupby` is your week-2 `group_by` + `aggregate` in one line: split the rows into groups, compute something per group, combine the results.
```python
df.groupby("city")["amount"].sum()                 # total per city: a Series
df.groupby("city")["amount"].agg(["sum", "mean", "count"])   # several stats at once
df.groupby(["city", "customer"])["amount"].sum()   # group by two columns
```
**Named aggregation** gives you clean column names, and it's the form to remember:
```python
summary = (
    df.groupby("city")
      .agg(total=("amount", "sum"),
           orders=("order_id", "count"),
           avg=("amount", "mean"))
      .reset_index()                  # turn "city" back from the index into a normal column
      .sort_values("total", ascending=False)
)
```
Each argument reads `new_name=(column, function)`. `reset_index()` matters: after a groupby, the group keys become the index, and `reset_index` makes it a regular table again, ready to merge or save.

Sometimes you want the group's number **on every row** instead of one row per group, for example each order's share of its city's total. That's `transform`:
```python
df["city_total"] = df.groupby("city")["amount"].transform("sum")
df["share"] = df["amount"] / df["city_total"]
```

## 8. Combine tables: `merge` and `concat`
### `merge`: a join, like SQL
```python
customers = pd.DataFrame({"customer": ["ada", "alan", "linus"], "country": ["UK", "UK", "FI"]})
pd.merge(df, customers, on="customer", how="left")
```
- `how="inner"` (the default): only rows with a match on both sides.
- `how="left"`: every row of the left table; no match → NaN in the new columns. The usual choice for "add details to my facts".
- `how="outer"`: everything from both sides.
- Different key names: `left_on="customer", right_on="name"`.
- `validate="many_to_one"` checks that the right side has each key once. Without it, a duplicated key silently **multiplies** your rows: a classic bug.

After a merge, compare row counts: `len(merged) == len(df)` for a left join on a clean lookup table.

### `concat`: stack tables
```python
all_months = pd.concat([jan, feb, mar], ignore_index=True)   # rows one after another
both = pd.concat([left_cols, right_cols], axis=1)              # side by side
```
`ignore_index=True` renumbers the rows 0, 1, 2... Without it you get repeated labels (three row 0s), which confuses `loc` later.

## 9. Reshape: `pivot_table` and `melt`
### `pivot_table`: long → wide, with aggregation
A spreadsheet pivot: one row per value of `index`, one column per value of `columns`, each cell the aggregate of `values`.
```python
df.pivot_table(index="city", columns="month", values="amount", aggfunc="sum", fill_value=0)
# month      1      2
# city
# Livorno  35.5    0.0
# Lucca     0.0  210.0
# Pisa    120.0   80.0
```
### `melt`: wide → long
The reverse. A "wide" table with one column per month becomes a "long" (tidy) table with one row per city-month, which is what databases, plots and `groupby` want:
```python
wide = pd.DataFrame({"city": ["Pisa", "Lucca"], "jan": [120, 0], "feb": [80, 210]})
wide.melt(id_vars="city", var_name="month", value_name="amount")
#     city month  amount
# 0   Pisa   jan     120
# 1  Lucca   jan       0
# 2   Pisa   feb      80
# 3  Lucca   feb     210
```
`id_vars` are the columns to keep as they are; every other column is "melted" into two columns: its name (`var_name`) and its value (`value_name`).

## 10. Back to NumPy and plain Python
```python
df["amount"].to_numpy()          # the column as a NumPy array
df[["amount", "qty"]].to_numpy() # a 2-D array: what scikit-learn wants
df.to_dict("records")            # back to a list of dicts!
df["amount"].tolist()            # a plain list
```

## The traps, in one place
- **`and`/`or` in a filter** → error "truth value of a Series is ambiguous". Use `&`, `|`, `~` with parentheses (or `query`).
- **Forgetting `df =`**: `df.dropna()` returns a new table; the old one is unchanged.
- **Changing a filtered table**: `sub = df[df["amount"] > 100]` then `sub["x"] = 1` changes only `sub`, never `df`. To change rows of `df`, use `df.loc[condition, "x"] = 1` on `df` itself. Add `.copy()` (`sub = df[...].copy()`) when you mean to keep working on the subset.
- **`NaN == NaN` is False**: test with `isnull()`.
- **`astype(int)` with missing values** fails: fill or drop first.
- **Merge multiplying rows**: use `validate=` and check `len()` before and after.
- **`apply` on a big table**: slow. Look for the vectorised version.

## The same job, by hand and with pandas
| Task | Week 2–4, plain Python | pandas |
|---|---|---|
| Read a CSV | `list(csv.DictReader(f))` | `pd.read_csv(path)` |
| One column | `[r["amount"] for r in rows]` | `df["amount"]` |
| Filter | `[r for r in rows if r["amount"] > 100]` | `df[df["amount"] > 100]` |
| Count values | `Counter(r["city"] for r in rows)` | `df["city"].value_counts()` |
| Group + sum | loop filling a dict of lists, then sum | `df.groupby("city")["amount"].sum()` |
| Join | build an index dict, loop, look up | `pd.merge(a, b, on="key", how="left")` |
| Duplicates | a set of seen keys | `df.drop_duplicates(subset=[...])` |
| Mean / std | `statistics.mean`, `statistics.stdev` | `df["amount"].mean()`, `.std()` |
| Write a CSV | `csv.DictWriter` | `df.to_csv(path, index=False)` |

One difference to remember for the oral: `statistics.stdev` and pandas `.std()` use the **sample** formula (divide by n−1), while NumPy `np.std` uses the **population** formula (divide by n) unless you pass `ddof=1`.

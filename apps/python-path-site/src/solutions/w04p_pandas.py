"""Week 4+: NumPy and pandas, the one-line versions of weeks 2-4.

Install once in your venv:  pip install pandas   (NumPy comes with it)
Run:  pytest tests/test_w04p_pandas.py -v
"""
import numpy as np
import pandas as pd

MISSING_MARKERS = ["?", "unknown", "N/A", -999]


# ---------- NumPy ----------

def grid(n, cols):
    """The numbers 0..n-1 as a 2-D array with `cols` columns: grid(6, 3) -> [[0, 1, 2], [3, 4, 5]]."""
    return np.arange(n).reshape(-1, cols)


def column_stats(matrix):
    """Mean and population std of each COLUMN of a 2-D array, as a tuple of two arrays."""
    return matrix.mean(axis=0), matrix.std(axis=0)


def min_max_scale(arr):
    """Rescale so the smallest value becomes 0.0 and the largest 1.0, without a loop."""
    return (arr - arr.min()) / (arr.max() - arr.min())


def clip_negative(arr):
    """Replace every negative value with 0, keep the rest."""
    return np.where(arr < 0, 0, arr)


def count_in_range(arr, lo, hi):
    """How many values are >= lo and <= hi, as a plain int."""
    return int(((arr >= lo) & (arr <= hi)).sum())


def grade_bands(scores):
    """>= 85 "A", >= 70 "B", >= 50 "C", otherwise "F", for each score."""
    return np.select([scores >= 85, scores >= 70, scores >= 50], ["A", "B", "C"], default="F")


# ---------- inspect, select, filter ----------

def load_jobs(path):
    """Read practice_data/jobs.csv (no header row) with columns job_id, title, min_lvl, max_lvl."""
    return pd.read_csv(path, header=None, names=["job_id", "title", "min_lvl", "max_lvl"])


def profile(df):
    """{"rows": number of rows, "cols": number of columns, "missing": {column: missing count}}."""
    return {"rows": df.shape[0], "cols": df.shape[1], "missing": df.isnull().sum().to_dict()}


def filter_orders(df, cities, lo, hi):
    """Rows whose city is in `cities` and whose amount is between lo and hi (both included)."""
    return df[df["city"].isin(cities) & df["amount"].between(lo, hi)]


def top_customers(df, n):
    """The n customers with the highest total amount, as a list of names, biggest first."""
    return df.groupby("customer")["amount"].sum().sort_values(ascending=False).head(n).index.tolist()


# ---------- cleaning ----------

def clean_orders(df):
    """Clean a raw orders table:

    - column names stripped and lower-cased
    - every value in MISSING_MARKERS becomes NaN
    - rows without an order_id are dropped, exact duplicate rows too
    - missing qty becomes 0, then order_id and qty are ints
    - date becomes a datetime column
    """
    df = df.rename(columns=lambda c: c.strip().lower())
    df = df.replace(MISSING_MARKERS, np.nan)
    df = df.dropna(subset=["order_id"]).drop_duplicates()
    df["qty"] = df["qty"].fillna(0)
    df = df.astype({"order_id": int, "qty": int})
    df["date"] = pd.to_datetime(df["date"])
    return df


def latest_per_customer(df):
    """One row per customer: their most recent order (by date), sorted by customer."""
    return df.sort_values("date").drop_duplicates(subset=["customer"], keep="last").sort_values("customer")


def add_date_parts(df):
    """Return a copy of df with new columns year, month and weekday ("Monday", ...) from the date column."""
    df = df.copy()
    df["year"] = df["date"].dt.year
    df["month"] = df["date"].dt.month
    df["weekday"] = df["date"].dt.day_name()
    return df


def tidy_posts(df):
    """Return a copy of df with text stripped and lower-cased, plus n_hashtags (count of "#word")
    and mentions_sale (True if the text contains "sale")."""
    df = df.copy()
    df["text"] = df["text"].str.strip().str.lower()
    df["n_hashtags"] = df["text"].str.count(r"#\w+")
    df["mentions_sale"] = df["text"].str.contains("sale")
    return df


# ---------- new columns ----------

def add_size_band(df):
    """Return a copy of df with size: amount >= 200 "high", >= 100 "medium", otherwise "low"."""
    df = df.copy()
    df["size"] = np.select([df["amount"] >= 200, df["amount"] >= 100], ["high", "medium"], default="low")
    return df


def age_groups(ages):
    """Bin a Series of ages: (0, 18] "minor", (18, 65] "adult", (65, 120] "senior"."""
    return pd.cut(ages, bins=[0, 18, 65, 120], labels=["minor", "adult", "senior"])


def one_hot(df, column):
    """Replace `column` with one 0/1 int column per value (named column_value)."""
    return pd.get_dummies(df, columns=[column], dtype=int)


# ---------- group, join, reshape ----------

def sales_by_city(df):
    """One row per city with columns city, total, orders, avg; biggest total first; index 0, 1, 2..."""
    return (
        df.groupby("city")
        .agg(total=("amount", "sum"), orders=("order_id", "count"), avg=("amount", "mean"))
        .reset_index()
        .sort_values("total", ascending=False)
        .reset_index(drop=True)
    )


def add_share_of_city(df):
    """Return a copy of df with share: each order's amount divided by its city's total amount."""
    df = df.copy()
    df["share"] = df["amount"] / df.groupby("city")["amount"].transform("sum")
    return df


def join_customers(orders, customers):
    """Left-join customer details onto orders by "customer". Raise if a customer appears twice in customers."""
    return pd.merge(orders, customers, on="customer", how="left", validate="many_to_one")


def stack_months(frames):
    """Stack a list of DataFrames with the same columns into one, renumbered 0, 1, 2..."""
    return pd.concat(frames, ignore_index=True)


def monthly_pivot(df):
    """Total amount with one row per city and one column per month number; missing combinations are 0."""
    return df.pivot_table(index="city", columns="month", values="amount", aggfunc="sum", fill_value=0)


def wide_to_long(df):
    """Turn columns city, jan, feb, ... into columns city, month, amount (one row per city-month)."""
    return df.melt(id_vars="city", var_name="month", value_name="amount")

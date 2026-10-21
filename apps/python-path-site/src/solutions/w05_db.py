"""Reference solutions for week 5."""
import csv
import json
from pathlib import Path


def batched(iterable, n):
    if n < 1:
        raise ValueError("n must be at least 1")
    batch = []
    for item in iterable:
        batch.append(item)
        if len(batch) == n:
            yield batch                 # hand over a full batch, pause here until asked again
            batch = []
    if batch:                           # the last, shorter batch
        yield batch


def iter_csv_rows(path):
    with open(path, encoding="utf-8", newline="") as f:
        yield from csv.DictReader(f)    # the file stays open while the caller consumes rows


def create_star_schema(conn):
    conn.executescript("""
        DROP TABLE IF EXISTS fact_sales;
        DROP TABLE IF EXISTS dim_store;
        DROP TABLE IF EXISTS dim_title;
        DROP TABLE IF EXISTS dim_date;
        CREATE TABLE dim_store (store_key INTEGER PRIMARY KEY, stor_id TEXT NOT NULL UNIQUE);
        CREATE TABLE dim_title (title_key INTEGER PRIMARY KEY, title_id TEXT NOT NULL UNIQUE);
        CREATE TABLE dim_date (date_id INTEGER PRIMARY KEY, date TEXT, day INTEGER, month INTEGER,
                               year INTEGER, quarter INTEGER, weekday TEXT, season TEXT);
        CREATE TABLE fact_sales (ord_num TEXT,
                                 store_key INTEGER REFERENCES dim_store,
                                 title_key INTEGER REFERENCES dim_title,
                                 date_id INTEGER REFERENCES dim_date,
                                 payterms TEXT, qty INTEGER);
    """)


def insert_rows(conn, table, rows, batch_size=500):
    cur = conn.cursor()
    total = 0
    sql = columns = None
    for batch in batched(rows, batch_size):
        if sql is None:                 # build the statement once, from the first row's keys
            columns = list(batch[0])
            for name in [table, *columns]:
                if not name.isidentifier():
                    raise ValueError(f"unsafe SQL name: {name!r}")
            marks = ", ".join("?" for _ in columns)
            sql = f"INSERT INTO {table} ({', '.join(columns)}) VALUES ({marks})"
        cur.executemany(sql, [tuple(row[c] for c in columns) for row in batch])
        total += len(batch)
    conn.commit()
    return total


def load_star_from_csv(conn, csv_dir):
    create_star_schema(conn)
    counts = {}
    # dimensions first: a fact row points at dimension keys that must already exist
    for table in ["dim_store", "dim_title", "dim_date", "fact_sales"]:
        counts[table] = insert_rows(conn, table, iter_csv_rows(Path(csv_dir) / f"{table}.csv"))
    return counts


def qty_by_store(conn):
    return conn.execute("""
        SELECT s.stor_id, SUM(f.qty) AS total
        FROM fact_sales f JOIN dim_store s ON s.store_key = f.store_key
        GROUP BY s.stor_id
        ORDER BY total DESC, s.stor_id
    """).fetchall()


def qty_by_year_season(conn):
    return conn.execute("""
        SELECT d.year, d.season, SUM(f.qty)
        FROM fact_sales f JOIN dim_date d ON d.date_id = f.date_id
        GROUP BY d.year, d.season
        ORDER BY d.year, d.season
    """).fetchall()


def export_query_to_json(conn, sql, path, params=(), chunk_size=1000):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    cur = conn.execute(sql, params)
    names = [d[0] for d in cur.description]
    n = 0
    with open(path, "w", encoding="utf-8") as f:
        f.write("[")
        while True:
            chunk = cur.fetchmany(chunk_size)
            if not chunk:
                break
            for values in chunk:
                f.write(("," if n else "") + json.dumps(dict(zip(names, values)), ensure_ascii=False))
                n += 1
        f.write("]")
    return n


def db_settings(environ):
    names = {"server": "DB_SERVER", "database": "DB_NAME", "user": "DB_USER", "password": "DB_PASSWORD"}
    missing = [var for var in names.values() if var not in environ]
    if missing:
        raise KeyError(f"missing environment variables: {', '.join(missing)}")
    return {key: environ[var] for key, var in names.items()}


def sqlserver_connection_string(settings, driver="ODBC Driver 18 for SQL Server"):
    s = settings
    return (f"DRIVER={{{driver}}};SERVER={s['server']};DATABASE={s['database']};"
            f"UID={s['user']};PWD={s['password']};TrustServerCertificate=yes")

"""Reference solutions for week 6."""
import argparse
import logging
import sys
from pathlib import Path

from exercises.w03_files import parse_arff
from exercises.w04_cleaning import build_sales_star, write_tables

log = logging.getLogger(__name__)


def build_parser():
    p = argparse.ArgumentParser(prog="sales2star", description="Turn a sales ARFF file into star-schema CSVs.")
    p.add_argument("input", type=Path, help="the .arff file")
    p.add_argument("--out-dir", type=Path, default=Path("out"), help="where the CSVs go (default: out)")
    p.add_argument("--batch-size", type=int, default=1000)
    p.add_argument("--dry-run", action="store_true", help="compute but write nothing")
    p.add_argument("-v", "--verbose", action="count", default=0, help="-v for INFO, -vv for DEBUG")
    return p


def log_level(verbosity):
    if verbosity <= 0:
        return logging.WARNING
    if verbosity == 1:
        return logging.INFO
    return logging.DEBUG


def main(argv=None):
    args = build_parser().parse_args(argv)
    logging.basicConfig(level=log_level(args.verbose), format="%(levelname)s %(message)s", force=True)
    if not args.input.exists():
        log.error("input file not found: %s", args.input)
        return 1
    star = build_sales_star(parse_arff(args.input)["rows"])
    for table, rows in star.items():
        log.info("%s: %d rows", table, len(rows))
    if args.dry_run:
        log.info("dry run: nothing written")
        return 0
    write_tables(star, args.out_dir)
    log.info("tables written to %s", args.out_dir)
    return 0


def safe_ratio(numerator, denominator):
    if not denominator:                 # catches both 0 and None
        return None
    return numerator / denominator


def percent_change(old, new):
    ratio = safe_ratio(new - old, old) if old is not None else None
    return None if ratio is None else round(ratio * 100, 2)


if __name__ == "__main__":
    sys.exit(main())

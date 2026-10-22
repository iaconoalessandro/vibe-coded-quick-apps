"""Reference solutions for week 0. The site shows each function under its exercise."""
import sys


def hello(name):
    # an f-string puts the value of `name` inside the text
    return f"Hello, {name}!"


def python_version():
    v = sys.version_info
    return f"{v.major}.{v.minor}"


def in_virtualenv():
    # inside a venv, sys.prefix points at .venv; outside, both are the same folder
    return sys.prefix != sys.base_prefix


def average_of_positive(numbers):
    total = 0
    count = 0
    for n in numbers:
        if n > 0:
            total += n      # bug 1: `total = n` overwrote the sum instead of adding to it
            count += 1      # bug 2: this was outside the `if`, so it counted the negatives too
    if count == 0:          # bug 3: with no positives, total / count divided by zero
        return 0.0
    return total / count

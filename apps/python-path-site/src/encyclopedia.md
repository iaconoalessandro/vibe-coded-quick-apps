Each entry explains one idea in plain words: **what it is**, **what it's for**, **how to use it**, and the mistake people usually make with it. The lessons teach these in order; come here when you meet a word you don't know, or forgot.

## Running Python
How Python code gets from a file to the screen.

### The interpreter and the prompt
The **interpreter** is the program called `python`. It reads Python code and runs it.

**What it's for.** Started with no file, it opens the **interactive prompt** (`>>>`), where each line runs as soon as you press Enter and its result is shown. It's the fastest way to try something out.

**How to use it.**
```python
$ python
>>> 2 + 3
5
>>> "pisa".upper()
'PISA'
>>> exit()
```
**Watch out.** The prompt forgets everything when you exit. Anything you want to keep goes in a [script](#encyclopedia/scripts-py-files).

### Scripts (.py files)
A **script** is a text file ending in `.py` that contains Python code.

**What it's for.** Code you can run again, share, test and save in git. Python runs it from the first line to the last, the same way every time.

**How to use it.**
```bash
python my_script.py        # run it from the folder that contains it
```
**Watch out.** `can't open file` almost always means the terminal is in a different folder. Check with `pwd`. Unlike a notebook, a script has no hidden state left over from earlier runs.

Related: [the interpreter](#encyclopedia/the-interpreter-and-the-prompt), [terminal basics](#encyclopedia/terminal-basics).

### Comments
A **comment** is text after `#` that Python ignores.

**What it's for.** Explaining *why* the code does something that isn't obvious. The code itself already says *what* it does.

**How to use it.**
```python
total = price * 1.22    # 22% VAT, the Italian standard rate
```
**Watch out.** A comment that just repeats the code (`x = x + 1  # add 1 to x`) is noise. For describing a whole function, use a [docstring](#encyclopedia/docstrings).

### `print`
`print()` writes values to the terminal, separated by spaces, followed by a newline.

**What it's for.** Showing results to a person, and quick checks while you work.

**How to use it.**
```python
print("total:", 42)              # total: 42
print("a", "b", sep="-")         # a-b
print("no newline", end="")
```
**Watch out.** `print` *shows* a value, it doesn't *give it back*. A function that prints its answer instead of [returning](#encyclopedia/return) it gives `None` to its caller. For progress messages in real programs, use [logging](#encyclopedia/logging).

### `input`
`input()` waits for the user to type a line, and gives it back as a string.

**What it's for.** Small interactive programs (the P4DS exam uses them).

**How to use it.**
```python
name = input("Your name: ")
age = int(input("Your age: "))     # input always returns a str: convert it
```
**Watch out.** The result is always a string, even if the user types `42`. `int("abc")` raises `ValueError`, so real code wraps the conversion in [try/except](#encyclopedia/try-and-except).

### Modules and `import`
A **module** is a `.py` file whose functions and names other code can use. `import` loads it.

**What it's for.** Reusing code: your own (week 4 imports week 3) and Python's huge standard library.

**How to use it.**
```python
import math                         # use as math.sqrt(2)
from datetime import datetime       # use as datetime(...)
import xml.etree.ElementTree as ET  # a shorter nickname
from exercises.w03_files import write_csv
```
**Watch out.** Importing a module **runs its whole file** once. Code at the top level of a module (not inside a function) runs on import, which is why scripts protect their start-up code with [`if __name__ == "__main__"`](#encyclopedia/if-__name__-__main__). Never name your own file after a library module (`csv.py`, `json.py`): Python will import yours instead.

### `if __name__ == "__main__"`
A check that is true only when the file is **run directly**, not when it's imported.

**What it's for.** Letting one file be both a program and a module. Tests can import your functions without starting the program.

**How to use it.**
```python
def main():
    ...

if __name__ == "__main__":   # True for `python this_file.py`, False on import
    main()
```
**Watch out.** Python sets `__name__` to `"__main__"` for the file you run, and to the module's name (like `"w06_cli"`) for imported files. That's the whole trick.

### Virtual environments (venv)
A **virtual environment** is a folder (usually `.venv/`) holding a private Python and the packages for one project.

**What it's for.** Keeping projects separate, so one project's package versions can't break another's.

**How to use it.**
```bash
python3 -m venv .venv            # create, once per project
source .venv/bin/activate        # activate, in every new terminal (Mac/Linux)
.venv\Scripts\Activate.ps1       # activate on Windows PowerShell
which python                     # check: should point inside .venv
```
**Watch out.** Activation lasts for one terminal window. A new tab starts without it, and suddenly packages "aren't installed". Never commit `.venv/` to git; commit a `requirements.txt` instead.

### `pip` and packages
**pip** installs **packages**: code other people published, like `pytest` or `pyodbc`.

**What it's for.** Adding tools that aren't in the standard library.

**How to use it.**
```bash
python -m pip install pytest              # install into the active venv
python -m pip freeze > requirements.txt   # record what's installed
python -m pip install -r requirements.txt # rebuild it elsewhere
```
**Watch out.** Write `python -m pip` rather than `pip`: it guarantees the package goes into the same Python you'll run. Activate the [venv](#encyclopedia/virtual-environments-venv) first.

## Values and types
The kinds of data Python works with, and how they combine.

### Types and `type()`
Every value has a **type**, which decides what you can do with it. `type(x)` tells you which.

**What it's for.** Understanding errors. `"3" + 4` fails because a string and a number can't be added; knowing the types tells you why.

**How to use it.**
```python
>>> type(42), type(4.2), type("42"), type(True), type(None)
(<class 'int'>, <class 'float'>, <class 'str'>, <class 'bool'>, <class 'NoneType'>)
>>> isinstance(42, int)       # the usual way to check a type in code
True
```
**Watch out.** Values read from files are almost always `str`, even when they look like numbers. See [converting types](#encyclopedia/converting-types).

### `int` and `float`
`int` is a whole number (`42`, `-7`). `float` is a number with a decimal point (`3.5`, `1e6`).

**What it's for.** Counting (int) and measuring (float).

**How to use it.**
```python
>>> 7 / 2         # / always gives a float
3.5
>>> 7 // 2        # // gives a whole number, rounded down
3
>>> round(2.675, 2), round(3.14159, 2)
(2.67, 3.14)
```
**Watch out.** Floats are stored in binary and can't represent most decimals exactly: `0.1 + 0.2` is `0.30000000000000004`. Don't compare calculated floats with `==`; round them or check the difference is tiny. Ints have no size limit.

### `str`
A **string** is text: a sequence of characters between quotes.

**What it's for.** Names, labels, file contents, anything textual.

**How to use it.**
```python
city = "Pisa"
quote = 'She said "hi"'           # single or double quotes, whichever is convenient
long = """several
lines"""                          # triple quotes for multi-line text
len(city)                         # 4
city + " " + "Lucca"              # joining with +
```
**Watch out.** Strings can't change: every method returns a new string (see [immutability](#encyclopedia/immutability)). Related: [indexing](#encyclopedia/indexing), [slicing](#encyclopedia/slicing), [string methods](#encyclopedia/string-methods), [f-strings](#encyclopedia/f-strings).

### `bool`
A **boolean** is `True` or `False`.

**What it's for.** The result of every comparison, and what `if` and `while` decide on.

**How to use it.**
```python
is_adult = age >= 18
if is_adult and not banned:
    ...
```
**Watch out.** Capital T and F: `true` is an error. Booleans are numbers in disguise: `True + True` is `2`, which is handy for counting (`sum(x > 0 for x in nums)` counts the positive numbers).

### `None`
`None` is Python's value for **"nothing here"**.

**What it's for.** Missing data, "not found", "not defined" (a ratio with a zero denominator). A function without [`return`](#encyclopedia/return) returns `None`.

**How to use it.**
```python
middle_name = None
if middle_name is None:       # check with `is`, not ==
    print("no middle name")
```
**Watch out.** `None` is not `0` and not `""`. Returning `0` for an undefined result silently changes averages; returning `None` keeps it visibly missing. `None + 1` raises `TypeError`, so filter `None` out before doing arithmetic.

### Converting types
Calling a type's name converts a value to that type: `int()`, `float()`, `str()`, `bool()`, `list()`.

**What it's for.** Turning the strings you read from files and input into numbers you can calculate with, and back.

**How to use it.**
```python
int("42")         # 42
int(" 42 ")       # 42: surrounding spaces are fine
float("2.5")      # 2.5
int(3.9)          # 3: cuts the decimals off, doesn't round
str(7)            # '7'
list("abc")       # ['a', 'b', 'c']
```
**Watch out.** `int("4.2")` and `int("")` raise `ValueError`. Python never converts silently: `"3" + 4` is a `TypeError`, not `7`.

### Arithmetic operators
The symbols for calculating: `+ - * / // % **`.

**What it's for.** Maths, but `%` and `//` are also everyday tools: even/odd, last digit, splitting into groups.

**How to use it.**
```python
7 + 2, 7 - 2, 7 * 2     # 9, 5, 14
7 / 2                   # 3.5   true division, always a float
7 // 2                  # 3     floor division: rounded down
7 % 2                   # 1     remainder (modulo)
2 ** 10                 # 1024  power
n % 2 == 0              # is n even?
1234 % 10, 1234 // 10   # 4, 123: last digit, and the rest
```
**Watch out.** `//` rounds **down**, so `-7 // 2` is `-4`, not `-3`. Operator precedence follows maths (`**` before `*` before `+`); use brackets when in doubt.

### Comparison operators
`==  !=  <  <=  >  >=` compare two values and give a [bool](#encyclopedia/bool).

**What it's for.** Every condition in `if`, `while`, filters and sorting.

**How to use it.**
```python
5 == 5.0          # True: equal values
"a" < "b"         # True: strings compare alphabetically
0 <= x <= 100     # chained: is x between 0 and 100?
```
**Watch out.** `=` assigns, `==` compares. Strings compare by character code, so `"Z" < "a"` is `True` and `"10" < "9"` is `True` (it compares `"1"` with `"9"`). Convert numbers before comparing them.

### `and`, `or`, `not`
Logical operators that combine conditions.

**What it's for.** Conditions with several parts.

**How to use it.**
```python
if age >= 18 and country == "IT":
    ...
if not rows:              # rows is empty
    ...
name = given_name or "anonymous"   # first truthy value
```
**Watch out.** They **short-circuit**: `and` stops at the first false part, `or` at the first true part. That makes `if d and d[0] > 5` safe on an empty list. `or` returns one of its values, not necessarily `True`, which is what makes the default-value trick work.

### Truthiness
Every value counts as true or false when used in a condition. **Falsy** values: `False`, `None`, `0`, `0.0`, `""`, `[]`, `{}`, `set()`. Everything else is **truthy**.

**What it's for.** Short, readable checks for "empty" or "missing".

**How to use it.**
```python
if not name:          # catches "" and None
    ...
while queue:          # until the list is empty
    item = queue.pop()
```
**Watch out.** `bool("False")` is `True` (non-empty string), and `0` is falsy: `if not count:` is also true when the count is legitimately zero. When `0` is a valid value, test `is None` explicitly.

### `is` versus `==`
`==` asks "do these have the same **value**?". `is` asks "are these the **same object**?".

**What it's for.** Use `==` for comparing data. Use `is` only for `None` (and `True`/`False` in tests).

**How to use it.**
```python
a = [1, 2]
b = [1, 2]
a == b        # True: same contents
a is b        # False: two different lists
x is None     # the right way to check for None
```
**Watch out.** `is` on numbers or strings sometimes seems to work, by accident of how Python stores small values. Don't rely on it. Related: [aliasing and copying](#encyclopedia/aliasing-and-copying).

## Names
How Python remembers values.

### Variables and assignment
A **variable** is a name attached to a value with `=`.

**What it's for.** Keeping a value to use later, and giving it a meaningful name.

**How to use it.**
```python
price = 12.5
qty = 3
total = price * qty     # the right side is computed first, then named
```
**Watch out.** `=` doesn't mean "equals"; it means "from now on, this name refers to this value". So `x = x + 1` is fine. A name used before it's assigned raises `NameError`, often from a typo.

### Augmented assignment (`+=`)
`x += 1` is short for `x = x + 1`. The same works with `-=`, `*=`, `/=`, `//=`.

**What it's for.** Updating counters and totals in loops.

**How to use it.**
```python
count = 0
for word in words:
    count += 1
text = "a"
text += "b"           # "ab"
```
**Watch out.** On a list, `lst += [4]` changes the list **in place** (like `extend`), which matters if another name points at the same list. See [aliasing](#encyclopedia/aliasing-and-copying).

### Unpacking
Assigning several names at once from a sequence: one name per item.

**What it's for.** Taking a tuple apart, looping over pairs, swapping values, returning several values from a function.

**How to use it.**
```python
lat, lon = (43.7, 10.4)
low, high = min_max(nums)          # a function returning a tuple
for name, age in [("Ada", 36), ("Alan", 41)]:
    ...
a, b = b, a                        # swap
first, *rest = [1, 2, 3, 4]        # first = 1, rest = [2, 3, 4]
```
**Watch out.** The number of names must match the number of items, or you get `ValueError: too many values to unpack`.

### Scope: local and global
**Scope** is where a name is visible. Names assigned inside a function are **local**: they exist only during that call. Names at the top of the file are **global**.

**What it's for.** Functions don't clash with each other: every function can have its own `total`.

**How to use it.**
```python
rate = 0.22                 # global
def with_vat(net):
    result = net * (1 + rate)   # reads the global rate: fine
    return result               # result is local
print(result)               # NameError: result only existed inside the function
```
**Watch out.** Assigning to a name inside a function makes it local, even if a global has the same name. Pass values in as [parameters](#encyclopedia/parameters-and-arguments) and get them out with [`return`](#encyclopedia/return), rather than using `global`.

### Naming conventions
Python's style rules (PEP 8) for names.

**What it's for.** Code that every Python programmer reads easily.

**How to use it.**
```python
user_count = 3            # variables and functions: lower_case_with_underscores
def load_rows(): ...
class SalesReport: ...    # classes: CapitalisedWords
MAX_BATCH = 1000          # constants: UPPER_CASE
_helper = ...             # leading underscore: "internal, don't use from outside"
```
**Watch out.** Names are case-sensitive (`Total` and `total` differ). Avoid using built-in names like `list`, `str`, `sum`, `id` for your variables: you'd hide the built-in function.

## Strings
Working with text.

### Indexing
Getting one item from a sequence by its position, with `[ ]`. Positions start at **0**.

**What it's for.** The first letter, the last item, the n-th row.

**How to use it.**
```python
s = "Python"
s[0]        # 'P'
s[5]        # 'n'
s[-1]       # 'n': negative indexes count from the end
s[-2]       # 'o'
```
**Watch out.** The last index is `len(s) - 1`. `s[6]` raises `IndexError`. Indexing works the same on strings, [lists](#encyclopedia/list) and [tuples](#encyclopedia/tuple).

### Slicing
Taking a piece of a sequence: `s[start:stop:step]`. `stop` is **not included**.

**What it's for.** The first n characters, everything but the first item, a reversed copy.

**How to use it.**
```python
s = "Python"
s[0:2]      # 'Py'
s[2:]       # 'thon'   from 2 to the end
s[:-1]      # 'Pytho'  everything except the last
s[::2]      # 'Pto'    every second character
s[::-1]     # 'nohtyP' reversed
```
**Watch out.** Because `stop` is excluded, `s[:n]` has exactly `n` items and `s[:n] + s[n:]` is the whole string. Slicing never raises `IndexError`: out-of-range bounds are cut to fit. A slice of a list is a new list (a [shallow copy](#encyclopedia/aliasing-and-copying)).

### String methods
Functions that belong to strings, called with a dot: `s.method()`.

**What it's for.** Cleaning and taking apart text.

**How to use it.**
```python
"  Hi  ".strip()              # 'Hi'      remove surrounding whitespace
"Hi".lower(), "Hi".upper()    # 'hi', 'HI'
"a,b,c".split(",")            # ['a', 'b', 'c']
"a  b\n c".split()            # ['a', 'b', 'c']   any whitespace
"-".join(["a", "b"])          # 'a-b'
"data".replace("a", "4")      # 'd4t4'
"report.csv".endswith(".csv") # True
"42".isdigit(), "ab".isalpha()# True, True
"banana".count("a")           # 3
"banana".find("n")            # 2 (-1 if not found)
```
**Watch out.** Methods return a **new** string; `s.strip()` alone does nothing to `s`. Write `s = s.strip()`. `join` is called on the separator, with the list as argument, and every item must already be a string.

### f-strings
A string with `f` in front, where anything inside `{ }` is computed and inserted.

**What it's for.** Building messages and formatted output.

**How to use it.**
```python
name, qty, price = "pen", 3, 1.5
f"{qty} x {name} = {qty * price}"      # '3 x pen = 4.5'
f"{price:.2f}"                          # '1.50'      2 decimals
f"{qty:4d}"                             # '   3'      width 4, right-aligned
f"{name:<6}|"                           # 'pen   |'   left-aligned in 6
f"{0.256:.1%}"                          # '25.6%'
f"{1234567:,}"                          # '1,234,567'
f"{qty=}"                               # 'qty=3'     handy for debugging
```
**Watch out.** Forgetting the `f` prints the braces literally. Don't build SQL with f-strings: use [placeholders](#encyclopedia/sql-placeholders).

### Escape characters and raw strings
A backslash `\` inside a string starts a special character. A **raw string** (`r"..."`) turns that off.

**What it's for.** Newlines and tabs in text; regular expressions and Windows paths without backslash trouble.

**How to use it.**
```python
"line1\nline2"     # \n is a newline
"a\tb"             # \t is a tab
"It\'s"            # an escaped quote
"C:\\data"         # one real backslash
r"\d+"             # raw: the backslash stays, for regular expressions
```
**Watch out.** Always write regular-expression patterns as raw strings, or `\b` becomes a backspace character and the pattern silently fails.

### Immutability
An **immutable** value can't be changed after it's created: strings, numbers, tuples, `None`. **Mutable** values can: lists, dicts, sets, most objects.

**What it's for.** Knowing which operations change a value and which make a new one, and which values can be [dict keys](#encyclopedia/hashable).

**How to use it.**
```python
s = "data"
s.upper()          # makes "DATA" and throws it away
s = s.upper()      # keep it
s[0] = "D"         # TypeError: strings can't be changed in place
```
**Watch out.** "Changing" an immutable value always means making a new one and moving the name to it. See [mutability](#encyclopedia/mutability) for the other side.

## Decisions and loops
Choosing what runs, and running it many times.

### `if`, `elif`, `else`
Runs a block of code only when a condition is true.

**What it's for.** Every decision: different labels for different ranges, skipping bad rows, handling special cases.

**How to use it.**
```python
if score >= 90:
    grade = "A"
elif score >= 80:        # checked only if the first was False
    grade = "B"
else:                    # nothing above was True
    grade = "F"
```
**Watch out.** Python runs **only the first** true branch, so order matters: put the highest threshold or most specific case first. The indented lines are the block; indentation is part of the grammar (4 spaces).

### Conditional expression
An `if` that produces a value, on one line: `a if condition else b`.

**What it's for.** Choosing between two values without a four-line `if` block.

**How to use it.**
```python
label = "even" if n % 2 == 0 else "odd"
ratio = None if den == 0 else num / den
```
**Watch out.** Keep it for simple choices. Nested conditional expressions get unreadable fast; use a normal `if` instead.

### `for`
Repeats a block **once for each item** of a sequence (a list, a string, a file, a range...).

**What it's for.** Processing every row, every word, every number.

**How to use it.**
```python
for city in ["Pisa", "Lucca"]:
    print(city)
for ch in "abc":
    ...
for line in open_file:      # one line at a time
    ...
for key, value in d.items():
    ...
```
**Watch out.** Don't add or remove items of a list while looping over it; build a new list instead. To repeat a number of times, loop over [`range`](#encyclopedia/range).

### `range`
A sequence of whole numbers: `range(stop)`, `range(start, stop)`, `range(start, stop, step)`. `stop` is not included.

**What it's for.** Repeating something n times, or looping over positions.

**How to use it.**
```python
list(range(4))          # [0, 1, 2, 3]
list(range(1, 4))       # [1, 2, 3]
list(range(0, 10, 3))   # [0, 3, 6, 9]
list(range(5, 0, -1))   # [5, 4, 3, 2, 1]
for i in range(3):
    print("again")
```
**Watch out.** To include `n`, write `range(1, n + 1)`. To loop over a list's items, loop over the list directly, not `range(len(lst))`; if you need the position too, use [`enumerate`](#encyclopedia/enumerate).

### `enumerate`
Gives each item of a sequence **together with its position**.

**What it's for.** Loops that need the index as well as the value.

**How to use it.**
```python
for i, name in enumerate(["Ada", "Alan"]):
    print(i, name)              # 0 Ada, 1 Alan
for line_no, line in enumerate(f, start=1):
    ...                         # count lines from 1
```
**Watch out.** It yields `(index, item)` pairs, index first.

### `zip`
Walks through several sequences **side by side**, giving one item from each at a time.

**What it's for.** Pairing names with values, columns with headers, two lists element by element.

**How to use it.**
```python
names = ["id", "city"]
values = (7, "Pisa")
dict(zip(names, values))         # {'id': 7, 'city': 'Pisa'}
for a, b in zip([1, 2, 3], [10, 20, 30]):
    print(a + b)                 # 11, 22, 33
```
**Watch out.** `zip` stops at the **shortest** sequence, silently dropping the rest. Pass `strict=True` to get an error instead when lengths differ.

### `while`
Repeats a block **as long as** a condition is true.

**What it's for.** Loops where you don't know the number of steps in advance: until a value converges, until the user types "quit", until a queue is empty.

**How to use it.**
```python
n = 100
steps = 0
while n > 1:
    n = n // 2
    steps += 1
```
**Watch out.** Something inside the loop must eventually make the condition false, or it runs forever (press Ctrl+C to stop it). If you can say "for each item", use [`for`](#encyclopedia/for) instead.

### `break` and `continue`
`break` leaves the loop immediately. `continue` skips the rest of this round and goes to the next item.

**What it's for.** `break`: stop once you've found what you need. `continue`: skip items that don't matter, without deep nesting.

**How to use it.**
```python
for row in rows:
    if row["qty"] is None:
        continue                # skip this row
    if row["id"] == target:
        found = row
        break                   # stop looking
```
**Watch out.** They affect only the innermost loop. Inside a function, `return` is often clearer than `break`.

### `pass`
A statement that does nothing.

**What it's for.** A placeholder where Python requires a block but you have nothing to put yet.

**How to use it.**
```python
def later():
    pass

try:
    os.remove(tmp)
except FileNotFoundError:
    pass                # already gone: fine
```
**Watch out.** An `except` with only `pass` hides errors. Use it only when ignoring that specific error is really what you want.

### `match`
Compares a value against several **patterns** and runs the first one that fits (Python 3.10+).

**What it's for.** Replacing long `if/elif` chains on one value, especially commands or structured data.

**How to use it.**
```python
match command:
    case "start":
        run()
    case "stop" | "quit":
        stop()
    case _:                     # anything else
        print("unknown command")
```
**Watch out.** `case x:` with a bare name doesn't compare with a variable `x`; it **captures** any value into `x`. For simple cases an `if/elif` chain or a dict lookup is just as good.

## Functions
Packaging code under a name.

### `def` and calling a function
`def` defines a **function**: a named block of code that takes inputs and gives back a result. Writing its name with brackets **calls** (runs) it.

**What it's for.** Writing something once and using it many times; splitting a big problem into small, testable pieces.

**How to use it.**
```python
def area(width, height):
    return width * height

area(3, 4)          # 12
a = area(2, 5)      # 10, stored
```
**Watch out.** Defining a function doesn't run it; only calling does. `area` without brackets is the function itself, not its result.

### Parameters and arguments
**Parameters** are the names in the definition (`width`, `height`). **Arguments** are the values you pass when calling (`3`, `4`).

**What it's for.** Giving the same code different inputs.

**How to use it.**
```python
def greet(name, greeting):
    return f"{greeting}, {name}!"

greet("Ada", "Hi")                    # by position
greet(greeting="Ciao", name="Ada")    # by name: order doesn't matter
```
**Watch out.** A function receives the caller's actual object, not a copy. If it changes a list it was given (with `append`, for example), the caller sees the change. See [aliasing](#encyclopedia/aliasing-and-copying).

### Default values
A parameter with `=value` in the definition is optional: if the caller leaves it out, it takes that value.

**What it's for.** Sensible defaults for options most callers don't need to set.

**How to use it.**
```python
def format_price(amount, currency="EUR", decimals=2):
    return f"{amount:.{decimals}f} {currency}"

format_price(5)               # '5.00 EUR'
format_price(5, "USD")        # '5.00 USD'
format_price(5, decimals=0)   # '5 EUR'
```
**Watch out.** Parameters with defaults come after those without. Never use a list or dict as a default: see [mutable default arguments](#encyclopedia/mutable-default-arguments).

### Keyword arguments
Passing an argument **by name**: `f(size=3)`.

**What it's for.** Readable calls, especially with several options or booleans. `save(data, True, False)` says nothing; `save(data, overwrite=True, backup=False)` says everything.

**How to use it.**
```python
sorted(words, key=len, reverse=True)
json.dump(obj, f, indent=2, ensure_ascii=False)
```
**Watch out.** After the first keyword argument, all the following ones must be keywords too.

### `return`
Ends the function and **gives a value back** to the caller.

**What it's for.** Getting results out of a function so other code can store, test or combine them.

**How to use it.**
```python
def first_negative(nums):
    for n in nums:
        if n < 0:
            return n        # leave right away
    return None             # reached only if no negative was found

def low_high(nums):
    return min(nums), max(nums)    # several values = one tuple
```
**Watch out.** A function without `return` returns `None`. A `return` inside a loop ends the whole function on the first round, a classic accumulator bug. `return` is not [`print`](#encyclopedia/print).

### `*args` and `**kwargs`
In a definition, `*args` collects any extra positional arguments into a tuple, and `**kwargs` collects any extra keyword arguments into a dict. In a call, `*` and `**` do the opposite: spread a list or dict into arguments.

**What it's for.** Functions that accept any number of inputs, and passing a prepared list or dict of arguments.

**How to use it.**
```python
def total(*nums):
    return sum(nums)
total(1, 2, 3)                  # 6

def tag(name, **attrs):
    return name, attrs
tag("a", href="x", id="y")      # ('a', {'href': 'x', 'id': 'y'})

args = [3, 4]
area(*args)                     # same as area(3, 4)
opts = {"indent": 2}
json.dumps(obj, **opts)         # same as json.dumps(obj, indent=2)
```
**Watch out.** The names `args` and `kwargs` are only a convention; the stars do the work. `{**a, **b}` uses the same idea to merge two dicts.

### `lambda`
A small function without a name, written in one expression: `lambda inputs: result`.

**What it's for.** Short functions you pass to another function, most often the [`key`](#encyclopedia/the-key-argument) of `sorted`, `min` or `max`.

**How to use it.**
```python
sorted(people, key=lambda p: p["age"])
max(words, key=lambda w: len(w))
square = lambda x: x * x      # works, but a def is clearer here
```
`lambda p: p["age"]` means exactly the same as:
```python
def get_age(p):
    return p["age"]
```
**Watch out.** A lambda can contain only one expression: no statements, no loops, no assignments. If you'd give it a name, write a `def`.

### Mutable default arguments
A famous trap: a default value is created **once**, when the function is defined, and shared by every call.

**What it's for.** Knowing it, so you never write it.

**How to use it.**
```python
def add_item(item, basket=[]):      # WRONG
    basket.append(item)
    return basket
add_item("a")     # ['a']
add_item("b")     # ['a', 'b']  the same list again!

def add_item(item, basket=None):    # RIGHT
    if basket is None:
        basket = []                 # a fresh list on every call
    basket.append(item)
    return basket
```
**Watch out.** This applies to any [mutable](#encyclopedia/mutability) default: lists, dicts, sets. Use `None` and create the object inside.

### Docstrings
A string written as the **first line inside** a function, class or module, describing what it does.

**What it's for.** Documentation that stays with the code. Editors show it when you hover, and `help(f)` prints it. In the exercises, the docstring is the specification.

**How to use it.**
```python
def season(dt):
    """Return the meteorological season of a date: 'winter', 'spring', 'summer' or 'autumn'."""
    ...
```
**Watch out.** Describe what goes in, what comes out, and the edge cases (empty input, `None`), not how the code works line by line.

### Type hints
Optional notes on the types a function expects and returns.

**What it's for.** Making code easier to read, and letting editors and tools like `mypy` catch mistakes before running.

**How to use it.**
```python
def mean(values: list[float]) -> float | None:
    if not values:
        return None
    return sum(values) / len(values)
```
**Watch out.** Python itself **doesn't check** hints at run time: passing a string where `float` is hinted still runs. They're documentation that tools can verify.

### Recursion
A function that **calls itself** on a smaller version of the problem.

**What it's for.** Data that contains smaller copies of itself: nested lists, folders inside folders, trees, and divide-and-conquer algorithms like merge sort and binary search.

**How to use it.**
```python
def total(nums):
    if not nums:                         # base case: answer directly
        return 0
    return nums[0] + total(nums[1:])     # the same problem, one item smaller
```
Every recursive function needs a **base case** (small enough to answer directly) and a **recursive step** that moves towards it.

**Watch out.** Without a base case, or if the problem doesn't shrink, it never stops; Python gives up after about 1000 levels with `RecursionError`. For long flat sequences, a loop is faster and safer.

## Collections
Lists, tuples, dicts and sets: holding many values.

### `list`
An **ordered, changeable** sequence of values: `[1, 2, 3]`.

**What it's for.** Rows of data, results you collect in a loop, anything where order matters and the size changes.

**How to use it.**
```python
nums = [3, 1, 2]
nums.append(5)          # add at the end
nums.insert(0, 9)       # add at a position
nums.extend([7, 8])     # add several
nums.remove(1)          # remove the first 1
last = nums.pop()       # remove and return the last
nums[0] = 4             # replace
nums.index(2)           # position of the first 2
len(nums)
```
**Watch out.** `x in lst` checks items one by one, which is slow for big lists: use a [set](#encyclopedia/set) for membership. `b = a` doesn't copy a list: see [aliasing](#encyclopedia/aliasing-and-copying).

### `tuple`
An **ordered, unchangeable** sequence: `(1, 2)`.

**What it's for.** Fixed records where each position has a meaning (a coordinate, a date's parts), returning several values from a function, and dict keys made of several parts.

**How to use it.**
```python
point = (43.7, 10.4)
lat, lon = point                 # unpacking
sales[("S1", 1994)] = 120        # a two-part dict key
single = (5,)                    # a one-item tuple needs the comma
```
**Watch out.** `(5)` is just the number 5 in brackets; the **comma** makes the tuple. Tuples can't be changed, which is exactly why they can be [dict keys](#encyclopedia/hashable).

### `dict`
A **dictionary** maps **keys** to **values**: `{"Ada": 36, "Alan": 41}`. You look values up by key, not by position.

**What it's for.** Lookup tables, counting, grouping, one row of a table (column name to value), JSON objects.

**How to use it.**
```python
ages = {"Ada": 36}
ages["Alan"] = 41            # add or replace
ages["Ada"]                  # 36
ages.get("Bob")              # None instead of KeyError
ages.get("Bob", 0)           # or a default
"Ada" in ages                # checks keys, instantly
del ages["Ada"]
for name, age in ages.items():
    ...
list(ages.keys()), list(ages.values())
```
**Watch out.** `d[k]` raises `KeyError` for a missing key; `d.get(k, default)` doesn't. Keys must be [hashable](#encyclopedia/hashable). Dicts remember insertion order.

### `set`
An **unordered collection of unique values**: `{1, 2, 3}`.

**What it's for.** Removing duplicates, fast "have I seen this?" checks, and comparing groups (in both, only in one).

**How to use it.**
```python
tags = set(["a", "b", "a"])    # {'a', 'b'}
tags.add("c")
"a" in tags                    # instant, even with millions of items
a, b = {1, 2, 3}, {2, 3, 4}
a & b                          # {2, 3}     in both
a | b                          # {1, 2, 3, 4} in either
a - b                          # {1}        in a only
small <= big                   # is small a subset of big?
```
**Watch out.** `{}` is an empty **dict**; an empty set is `set()`. Sets have no order and no indexing; `sorted(s)` gives a sorted list.

### `len`, `sum`, `min`, `max`
Built-in functions that work on any collection.

**What it's for.** Counting and summarising without writing a loop.

**How to use it.**
```python
len([4, 8, 1])              # 3
sum([4, 8, 1])              # 13
min([4, 8, 1]), max("abz")  # 1, 'z'
max(rows, key=lambda r: r["qty"])   # the row with the biggest qty
min([], default=None)       # None instead of an error
sum(r["qty"] for r in rows) # total of a column
```
**Watch out.** `min` and `max` of an empty sequence raise `ValueError` unless you give `default=`. `sum` works only on numbers.

### `in`
Tests whether a value is **inside** a collection or a string.

**What it's for.** Membership checks: is this id known, is this word in the text, is this key in the dict.

**How to use it.**
```python
3 in [1, 2, 3]          # True
"ta" in "data"          # True: substring
"Ada" in ages           # True if "Ada" is a KEY of the dict
"x" not in seen
```
**Watch out.** Speed depends on the container: lists and strings check item by item (slow for big ones), sets and dicts jump straight to the answer. See [Big-O notation](#encyclopedia/big-o-notation).

### `any` and `all`
`any(...)` is true if **at least one** item is true. `all(...)` is true if **every** item is true.

**What it's for.** Checking a condition across a whole collection in one readable line.

**How to use it.**
```python
any(n < 0 for n in nums)                # is there a negative?
all(r["qty"] > 0 for r in rows)         # are all quantities positive?
all(k in row for k in ["id", "name"])   # does the row have every column?
```
**Watch out.** On an empty collection, `any` is `False` and `all` is `True`. Both stop as soon as the answer is known.

### `sorted` and `.sort()`
`sorted(x)` returns a **new** sorted list from any collection. `lst.sort()` sorts a list **in place** and returns `None`.

**What it's for.** Ordering results: biggest first, alphabetical, by date.

**How to use it.**
```python
sorted([3, 1, 2])                     # [1, 2, 3]
sorted([3, 1, 2], reverse=True)       # [3, 2, 1]
sorted({"b": 1, "a": 2})              # ['a', 'b']: a dict's keys
nums.sort()                           # changes nums itself
```
**Watch out.** `x = nums.sort()` makes `x` equal to `None`. Python's sort is **stable**: items that compare equal keep their original order, which lets you sort by several things in steps. To sort by something other than the value, use [the key argument](#encyclopedia/the-key-argument).

### The `key` argument
A function given to `sorted`, `min`, `max` (and others) that says **what to compare** for each item.

**What it's for.** Sorting rows by a column, words by length, records by two fields.

**How to use it.**
```python
sorted(words, key=len)                            # by length
sorted(rows, key=lambda r: r["date"])             # by a column
sorted(rows, key=lambda r: (-r["qty"], r["id"]))  # qty high to low, then id
max(scores.items(), key=lambda kv: kv[1])         # the dict entry with the top value
```
**Watch out.** Pass the function itself (`key=len`), not a call (`key=len(x)`). Returning a tuple sorts by the first item, then the second on ties. Negating works only for numbers; for text in reverse, sort in two stable passes or use `reverse=True`.

### List comprehensions
A one-line way to **build a list from another sequence**: `[expression for item in sequence if condition]`.

**What it's for.** Transforming and filtering, the most common loops there are.

**How to use it.**
```python
[x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
[w.lower() for w in words if w]           # lowercase, skipping empty strings
[r["qty"] for r in rows]                  # one column
[[r * c for c in range(3)] for r in range(2)]   # nested: a list of lists
```
It is the same as:
```python
result = []
for x in range(5):
    result.append(x * x)
```
**Watch out.** If it no longer fits comfortably on one line, or needs several steps, write the normal loop.

### Dict and set comprehensions
The same idea as [list comprehensions](#encyclopedia/list-comprehensions), with curly brackets.

**What it's for.** Building lookup tables and sets of distinct values in one line.

**How to use it.**
```python
{w: len(w) for w in ["fig", "apple"]}         # {'fig': 3, 'apple': 5}
{r["id"]: r for r in rows}                    # index rows by id
{r["user"] for r in rows}                     # distinct users
{k: v for k, v in d.items() if v is not None} # drop missing values
```
**Watch out.** In a dict comprehension, a repeated key keeps the **last** value, silently.

### Mutability
A **mutable** value can be changed in place: lists, dicts, sets, most objects. An **immutable** one can't: numbers, strings, tuples, `None`.

**What it's for.** Predicting whether an operation changes the original or creates something new, and why only immutable values can be [dict keys](#encyclopedia/hashable).

**How to use it.**
```python
nums = [1, 2]
nums.append(3)       # the same list, changed
text = "ab"
text = text + "c"    # a new string; the old one is untouched
```
**Watch out.** Mutable values plus shared names give surprises: see [aliasing and copying](#encyclopedia/aliasing-and-copying) and [mutable default arguments](#encyclopedia/mutable-default-arguments).

### Aliasing and copying
Assigning a mutable value to a second name **doesn't copy it**: both names point at the same object (they're **aliases**). A **copy** is a separate object.

**What it's for.** Avoiding the bug where changing "one" list changes "another".

**How to use it.**
```python
a = [1, 2]
b = a            # alias: one list, two names
b.append(3)      # a is now [1, 2, 3] too
c = a.copy()     # shallow copy: a new outer list (also list(a), a[:])
import copy
d = copy.deepcopy(nested)   # copies the inner lists too
```
**Watch out.** A **shallow** copy creates a new outer list, but the items inside are still shared. For a list of lists or a list of dicts, changing an inner item through the copy changes the original. Use `deepcopy`, or build new inner objects (`[{**r} for r in rows]`).

### Hashable
A value is **hashable** if Python can compute a fixed fingerprint (a **hash**) from it. In practice: immutable values (numbers, strings, tuples of immutables) are hashable; lists, dicts and sets aren't.

**What it's for.** Only hashable values can be dict keys or set items. The hash is what makes dict and set lookups instant.

**How to use it.**
```python
{(1, 2): "ok"}                   # tuple key: fine
{[1, 2]: "no"}                   # TypeError: unhashable type: 'list'
key = tuple(sorted(row.items())) # turn a dict row into something hashable
```
**Watch out.** A tuple containing a list isn't hashable either. To use a row as a key, convert it to a tuple of its values.

### List of dicts (tables)
The standard way to hold a **table** in plain Python: a list with one dict per row, whose keys are the column names.

**What it's for.** Every format can be read into it (CSV, JSON, XML, ARFF), and every table operation becomes a loop over it. It's what the DSS project uses instead of pandas.

**How to use it.**
```python
rows = [{"store": "A", "qty": 5}, {"store": "B", "qty": 3}, {"store": "A", "qty": 2}]
[r for r in rows if r["qty"] > 2]                # WHERE
[r["qty"] for r in rows]                         # one column
totals = {}
for r in rows:                                   # GROUP BY store, SUM(qty)
    totals[r["store"]] = totals.get(r["store"], 0) + r["qty"]
by_id = {r["id"]: r for r in other_rows}         # index one table, for a JOIN
```
**Watch out.** Values read from CSV are strings; convert them before calculating. Joining two tables with two nested loops is very slow; index one side in a [dict](#encyclopedia/dict) first.

## Iteration
How loops get their items, one at a time.

### Iterables and iterators
An **iterable** is anything a `for` loop can walk through: lists, strings, dicts, files, ranges. An **iterator** is the object that hands out the items one at a time and remembers where it got to.

**What it's for.** Understanding why you can loop over a 10 GB file without loading it: the file iterator reads one line each time it's asked.

**How to use it.**
```python
it = iter([10, 20])
next(it)     # 10
next(it)     # 20
next(it)     # StopIteration: nothing left (a for loop handles this for you)
```
**Watch out.** A list can be looped over many times. An iterator (like an open file, or a [generator](#encyclopedia/generators-and-yield)) is used up after one pass.

### Generators and `yield`
A **generator function** uses `yield` instead of `return`. Calling it doesn't run the body; it returns a generator that produces values **one at a time**, pausing after each `yield` until the next one is requested.

**What it's for.** Processing data bigger than memory: reading rows, batching them, streaming them into a database, with only one item in memory at a time.

**How to use it.**
```python
def read_rows(path):
    with open(path, encoding="utf-8", newline="") as f:
        yield from csv.DictReader(f)     # yield each row of the reader

def evens(limit):
    n = 0
    while n < limit:
        yield n
        n += 2

for row in read_rows("big.csv"):
    ...
list(evens(7))      # [0, 2, 4, 6]
```
**Watch out.** A generator can be consumed **only once**. Nothing inside it runs until someone asks for an item, so errors also appear only then.

### Generator expressions
Like a [list comprehension](#encyclopedia/list-comprehensions) but with round brackets: it produces items lazily instead of building a list.

**What it's for.** Feeding `sum`, `max`, `any`, `"".join` and friends without creating a temporary list.

**How to use it.**
```python
sum(int(r["qty"]) for r in read_rows("big.csv"))   # flat memory, any file size
any(w.isdigit() for w in words)
```
When it's the only argument of a function, you can drop the extra brackets, as above.

**Watch out.** Like any generator, it can be used once: `g = (x for x in data); list(g); list(g)` gives a list, then `[]`.

### `next`
`next(iterator)` asks an iterator for its **next item**.

**What it's for.** Taking just the first item (the header line of a CSV, the first match), or stepping through a generator by hand to see what it does.

**How to use it.**
```python
reader = csv.reader(f)
header = next(reader)                   # first row only; the loop continues from row 2
first_big = next((x for x in nums if x > 100), None)   # None if there's no match
```
**Watch out.** With nothing left, `next` raises `StopIteration`, unless you give a default as the second argument.

## Errors
What happens when something goes wrong, and how to handle it.

### Exceptions
An **exception** is Python's signal that something couldn't be done. It stops the program unless some code handles it.

**What it's for.** Separating the normal path from the error path. Instead of checking every condition in advance, code tries the operation and handles the failure.

**How to use it.** Each exception has a type that says what went wrong:
```python
int("abc")           # ValueError
"a" + 1              # TypeError
{}["x"]              # KeyError
[1][5]               # IndexError
1 / 0                # ZeroDivisionError
open("nope.txt")     # FileNotFoundError
```
**Watch out.** An exception is information. Read its type and message before changing code. See [tracebacks](#encyclopedia/tracebacks) and [common exceptions](#encyclopedia/common-exceptions).

### Tracebacks
The report Python prints when an exception isn't handled: the chain of function calls that led to the error.

**What it's for.** Finding the line where things went wrong, and how the program got there.

**How to use it.** Read it **bottom-up**:
```text
Traceback (most recent call last):
  File "test_w00.py", line 24, in test_average      <- how you got there
    assert average([]) == 0.0
  File "w00_setup.py", line 54, in average          <- where: your file, line 54
    return total / count
ZeroDivisionError: division by zero                 <- what went wrong
```
**Watch out.** Skip frames inside Python's own libraries; the bug is almost always in the last frame that's in **your** files.

### `try` and `except`
`try` runs a block; if a listed exception happens inside it, Python jumps to the matching `except` block instead of crashing.

**What it's for.** Handling expected failures: a bad number in a file, a missing file, a lost connection.

**How to use it.**
```python
try:
    qty = int(raw)
except ValueError:
    qty = None
    rejected += 1

try:
    data = load(path)
except FileNotFoundError as err:       # `as` gives you the exception object
    print("missing:", err.filename)
except (UnicodeDecodeError, ValueError):
    data = None
```
**Watch out.** Catch the **specific** exception you expect. A bare `except:` also catches typos and Ctrl+C and hides real bugs. Keep the `try` block small, around the one line that can fail.

### `else` and `finally`
Two optional parts of a `try` statement. `else` runs only if **no** exception happened. `finally` runs **always**, error or not.

**What it's for.** `else`: code that should run only after success, kept outside the `try` so its own errors aren't caught by mistake. `finally`: clean-up that must happen whatever occurs.

**How to use it.**
```python
try:
    conn = connect()
except ConnectionError:
    log.error("no database")
else:
    load(conn)              # only if connect() worked
finally:
    log.info("done")        # always
```
**Watch out.** For closing files and connections, a [`with` statement](#encyclopedia/with-context-managers) is usually simpler than `finally`.

### `raise`
Throws an exception yourself.

**What it's for.** Refusing input that makes no sense, with a clear message, instead of returning a wrong answer.

**How to use it.**
```python
def grade(score):
    if not 0 <= score <= 100:
        raise ValueError(f"score must be 0-100, got {score}")
    ...

try:
    ...
except KeyError:
    raise          # re-raise the same exception after logging, for example
```
**Watch out.** Choose a type that fits: `ValueError` for a bad value, `TypeError` for a wrong type, `KeyError` for a missing key. Include the bad value in the message.

### Common exceptions
The ones you'll meet most, and what they usually mean.

| Exception | Usual cause |
|---|---|
| `SyntaxError` | the code isn't valid Python: a missing bracket, colon or quote |
| `IndentationError` | inconsistent indentation |
| `NameError` | a name that doesn't exist: a typo, or used before assignment |
| `TypeError` | the wrong type: `"a" + 1`, calling something that isn't a function, wrong number of arguments |
| `ValueError` | right type, bad value: `int("abc")`, unpacking the wrong number of items |
| `KeyError` | a dict key that isn't there |
| `IndexError` | a list position past the end |
| `AttributeError` | a method or attribute the object doesn't have, often `None.something` |
| `ZeroDivisionError` | dividing by 0 |
| `FileNotFoundError` | wrong path, or the terminal is in a different folder |
| `UnicodeDecodeError` | the file isn't in the encoding you opened it with |
| `RecursionError` | recursion without a working base case |

**Watch out.** `AttributeError: 'NoneType' object has no attribute ...` almost always means a function returned `None` (it printed instead of returning, or a `.sort()` result was stored).

### `assert`
`assert condition` does nothing if the condition is true and raises `AssertionError` if it's false.

**What it's for.** Tests (pytest is built on it), and checking assumptions inside your own code while developing.

**How to use it.**
```python
assert add(2, 2) == 4
assert len(facts) == len(source), "rows were lost"
```
**Watch out.** Don't use `assert` to validate user input or data in a real program: Python can be run with assertions turned off (`python -O`). Use `if` + [`raise`](#encyclopedia/raise) for that.

## Files and data formats
Reading and writing data on disk.

### Paths and `pathlib`
A **path** is a file's address. `pathlib.Path` represents one as an object, with methods for the usual questions.

**What it's for.** Building file names that work on every operating system, checking files exist, creating folders, listing files.

**How to use it.**
```python
from pathlib import Path
p = Path("data") / "sales.csv"     # / joins parts correctly on Mac and Windows
p.exists(), p.is_file()
p.name, p.stem, p.suffix           # 'sales.csv', 'sales', '.csv'
p.parent                           # Path('data')
p.parent.mkdir(parents=True, exist_ok=True)
sorted(Path("data").glob("*.csv"))
p.read_text(encoding="utf-8")      # small files only
```
**Watch out.** A **relative** path (`data/sales.csv`) starts from the folder the terminal is in, not from where the script is. Never hard-code absolute paths like `/Users/me/...`: pass paths as [arguments](#encyclopedia/argparse).

### `open`
`open(path, mode, encoding=...)` connects to a file and returns a **file object** to read from or write to.

**What it's for.** Every kind of text file work.

**How to use it.**
```python
with open("notes.txt", encoding="utf-8") as f:           # "r" (read) is the default
    for line in f:                                       # one line at a time
        print(line.rstrip("\n"))

with open("out.txt", "w", encoding="utf-8") as f:        # "w" replaces the file
    f.write("hello\n")                                   # you add the newlines

with open("log.txt", "a", encoding="utf-8") as f:        # "a" appends at the end
    f.write("one more line\n")
```
**Watch out.** Always pass `encoding="utf-8"` (see [encodings](#encyclopedia/encodings)), and always use `with`. `"w"` empties an existing file immediately. `f.read()` loads the whole file: fine for small files, a problem for huge ones.

### `with` (context managers)
`with` runs a block and **guarantees clean-up afterwards**, even if an error happens inside. The object after `with` is a **context manager**: it knows how to set itself up and tear itself down.

**What it's for.** Closing files, closing database connections, releasing anything that must be released.

**How to use it.**
```python
with open(path, encoding="utf-8") as f:
    data = f.read()
# here the file is already closed, whatever happened inside

with open(src, encoding="utf-8") as fin, open(dst, "w", encoding="utf-8") as fout:
    for line in fin:
        fout.write(line.upper())
```
**Watch out.** The file is only usable inside the indented block. A generator that reads a file inside `with` keeps it open until the generator is used up.

### Encodings
An **encoding** is the rule that turns characters into bytes on disk and back. **UTF-8** is the modern standard and can store every character.

**What it's for.** Reading "è", "€" and emoji correctly, on every computer.

**How to use it.**
```python
open(path, encoding="utf-8")                     # always say it
open(path, encoding="utf-8", errors="replace")   # bad bytes become � instead of crashing
"città".encode("utf-8")                          # b'citt\xc3\xa0': the bytes
```
**Watch out.** Without `encoding=`, Python uses the computer's default, which differs between Mac and Windows: the same script then reads text differently on each. A `UnicodeDecodeError` means the file isn't in the encoding you said (often old files are `latin-1`).

### CSV and the `csv` module
**CSV** (comma-separated values) stores a table as text: one row per line, values separated by commas, usually with a header line. The `csv` module reads and writes it correctly.

**What it's for.** The most common way tables travel between programs.

**How to use it.**
```python
import csv
with open("in.csv", encoding="utf-8", newline="") as f:
    for row in csv.DictReader(f):            # one dict per row, keys from the header
        qty = int(row["qty"])                # every value is a string

with open("out.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["id", "name"])
    w.writeheader()
    w.writerows(rows)
```
**Watch out.** Never split lines with `.split(",")`: values can contain commas inside quotes (`"Rossi, Mario"`), which the module handles. Always pass `newline=""`. Use `delimiter=";"` for semicolon files.

### JSON
**JSON** is a text format for nested data: objects, arrays, strings, numbers, `true`/`false`, `null`. It maps directly onto Python dicts, lists, str, int/float, `True`/`False` and `None`.

**What it's for.** Web APIs, configuration files, data exports.

**How to use it.**
```python
import json
with open("data.json", encoding="utf-8") as f:
    data = json.load(f)                    # file -> Python objects
with open("out.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
json.loads('{"a": null}')                  # string -> {'a': None}
json.dumps({"ok": True})                   # Python -> '{"ok": true}'
```
**Watch out.** `load`/`dump` work with files, `loads`/`dumps` (with **s**) with strings. JSON keys are always strings, so a dict with int keys comes back with string keys. Large dumps are often **JSON Lines**: one object per line, read line by line with `json.loads`.

### XML and ElementTree
**XML** stores data as nested **elements** written with tags, which can carry **attributes**: `<row id="1"><city>Pisa</city></row>`. Python reads it with `xml.etree.ElementTree`.

**What it's for.** Many older systems and data exports use it.

**How to use it.**
```python
import xml.etree.ElementTree as ET
root = ET.parse("data.xml").getroot()     # the whole tree in memory
for el in root.iter("row"):               # every <row>, at any depth
    el.attrib["id"]                       # an attribute
    el.findtext("city")                   # the text of a child element

for event, el in ET.iterparse("huge.xml", events=("end",)):   # streaming
    if el.tag == "row":
        ...
        el.clear()                        # free memory as you go
```
**Watch out.** `ET.parse` loads everything; for files of hundreds of MB use `iterparse` and `clear()`. Values are always strings.

### ARFF
**ARFF** is the data format of the Weka tool: a header that names and types the columns, then CSV-like data.

**What it's for.** Datasets from data-mining courses and tools, including part of the DSS data.

**How to use it.** The format looks like this:
```text
% a comment
@relation sales
@attribute stor_id numeric
@attribute payterms {'Net 60','Net 30'}
@data
6380,'Net 60'
7066,?
```
`@attribute` lines give names and types (split with `line.split(maxsplit=2)`, because the type can contain spaces), and after `@data` each line is a row. Read the data lines with `csv.reader(lines, quotechar="'", skipinitialspace=True)`.

**Watch out.** `?` means missing. Text uses single quotes. Keywords are case-insensitive. Real files mix quote styles and contain commas and apostrophes inside text, so test your parser on nasty rows.

## Classes and objects
Defining your own types of data.

### Classes and objects
A **class** is a blueprint for a new type of value. An **object** (or **instance**) is one value made from that blueprint. The class says what data each object holds (**attributes**) and what it can do (**methods**).

**What it's for.** Keeping data and the functions that work on it together. A `BankAccount` holds a balance and knows how to deposit; a `Book` holds a title and knows how to describe itself. One of the two P4DS exam exercises is always a class model.

**How to use it.**
```python
class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

a = Account("Ada")        # create an object (an instance of Account)
b = Account("Alan", 50)   # another, independent one
a.deposit(20)
a.balance, b.balance      # 20, 50
```
**Watch out.** You've used objects all along: `"pisa".upper()` calls the `upper` method of a `str` object. A class is the same idea, defined by you. Related: [`__init__`](#encyclopedia/__init__), [`self`](#encyclopedia/self), [methods](#encyclopedia/methods).

### `__init__`
The method Python calls **automatically when an object is created**. It sets up the new object's starting attributes. It's often called the **constructor**.

**What it's for.** Making sure every object starts complete and valid: every account has an owner and a balance from the first moment.

**How to use it.**
```python
class Book:
    def __init__(self, title, author, pages):
        if pages <= 0:
            raise ValueError("pages must be positive")
        self.title = title          # store each input on the object
        self.author = author
        self.pages = pages
        self.loans = []             # attributes don't have to come from inputs

b = Book("Dune", "Herbert", 412)    # Python calls __init__(b, "Dune", "Herbert", 412)
b.title                             # 'Dune'
```
When you write `Book(...)`, Python creates an empty object, passes it to `__init__` as `self` together with your arguments, and gives you the object.

**Watch out.** Two underscores on each side: `_init_` or `__init` won't be called. `__init__` must not `return` a value. Forgetting `self.` (`title = title`) creates a local variable that disappears, so the object never gets the attribute.

### `self`
The first parameter of every method: **the object the method was called on**.

**What it's for.** Letting a method read and change *this particular* object's attributes.

**How to use it.**
```python
class Counter:
    def __init__(self):
        self.n = 0
    def add(self):
        self.n += 1          # this object's n

c1, c2 = Counter(), Counter()
c1.add()                     # Python runs Counter.add(c1): self is c1
c1.n, c2.n                   # 1, 0
```
**Watch out.** You don't pass `self` yourself; Python fills it in from the object before the dot. Forgetting it in the definition (`def add():`) gives `TypeError: add() takes 0 positional arguments but 1 was given`. The name `self` is a convention, but always use it.

### Attributes
Values stored **on an object**, read and written with a dot: `obj.name`.

**What it's for.** Holding each object's own data.

**How to use it.**
```python
b = Book("Dune", "Herbert", 412)
b.pages             # read
b.pages = 420       # change
b.rating = 5        # add a new one (possible, but better to set all in __init__)
vars(b)             # all of them as a dict
```
**Watch out.** A misspelled attribute name when reading raises `AttributeError`; when assigning, it silently creates a new attribute. Set every attribute in `__init__`, so the object's shape is clear in one place.

### Methods
Functions defined **inside a class**. They're called on an object and receive it as [`self`](#encyclopedia/self).

**What it's for.** The operations that make sense for that type: an account deposits, a book describes itself, a library finds a book.

**How to use it.**
```python
class Account:
    def __init__(self, balance=0):
        self.balance = balance
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("insufficient funds")
        self.balance -= amount
        return self.balance

acc = Account(100)
acc.withdraw(30)      # 70
```
**Watch out.** A method that should give back a result must `return` it, like any function. Methods that only change the object usually return `None`.

### `__str__` and `__repr__`
Two special methods that turn an object into text. `__str__` is the friendly version used by `print()` and `str()`. `__repr__` is the precise version used at the prompt, in lists and in debugging.

**What it's for.** Without them, printing an object shows `<__main__.Book object at 0x10a3...>`, which tells you nothing.

**How to use it.**
```python
class Book:
    def __init__(self, title, pages):
        self.title, self.pages = title, pages
    def __str__(self):
        return f"{self.title} ({self.pages} pages)"
    def __repr__(self):
        return f"Book({self.title!r}, {self.pages})"

b = Book("Dune", 412)
print(b)          # Dune (412 pages)
[b]               # [Book('Dune', 412)]
```
**Watch out.** Both must **return** a string, not print it. If you define only `__repr__`, `print` uses it too. `!r` in an f-string uses the repr of a value (quotes around strings).

### Dunder methods
Methods with **d**ouble **under**scores on both sides, like `__init__`, `__str__`, `__len__`, `__eq__`, `__lt__`. Python calls them for you when you use built-in syntax on your objects.

**What it's for.** Making your objects work with `len()`, `==`, `<`, `+`, `in`, `for` and `sorted`, like built-in types.

**How to use it.**
```python
class Playlist:
    def __init__(self, songs):
        self.songs = songs
    def __len__(self):                 # len(p)
        return len(self.songs)
    def __contains__(self, song):      # song in p
        return song in self.songs
    def __eq__(self, other):           # p1 == p2
        return self.songs == other.songs
```
**Watch out.** Without `__eq__`, `==` compares identity: two objects with the same data are not equal. You never call dunder methods directly (`p.__len__()`); use the syntax (`len(p)`).

### Inheritance
A class can be built **on top of another**: the new class (**subclass**, child) gets all the attributes and methods of the existing one (**superclass**, parent), and can add or replace some.

**What it's for.** Related types that share most behaviour: an `Ebook` is a `Book` with a file size; a `SavingsAccount` is an `Account` with interest.

**How to use it.**
```python
class Book:
    def __init__(self, title, pages):
        self.title, self.pages = title, pages
    def describe(self):
        return f"{self.title}, {self.pages} pages"

class Ebook(Book):                         # Ebook inherits from Book
    def __init__(self, title, pages, mb):
        super().__init__(title, pages)     # let Book set title and pages
        self.mb = mb
    def describe(self):                    # override: replace the parent's version
        return super().describe() + f", {self.mb} MB"

e = Ebook("Dune", 412, 2.1)
e.describe()                 # 'Dune, 412 pages, 2.1 MB'
isinstance(e, Book)          # True: an Ebook is a Book
```
**Watch out.** Use inheritance only for a real "is a" relationship. If a class merely *uses* another (a library *has* books), store the other object as an attribute instead.

### `super()`
Inside a method, `super()` gives you the **parent class's version** of the methods.

**What it's for.** Extending the parent's behaviour instead of copying it, most often in `__init__`.

**How to use it.**
```python
class SavingsAccount(Account):
    def __init__(self, owner, balance=0, rate=0.02):
        super().__init__(owner, balance)   # the parent sets owner and balance
        self.rate = rate                   # then add what's new
```
**Watch out.** If a subclass defines `__init__` and forgets to call `super().__init__(...)`, the parent's attributes are never set, and later methods fail with `AttributeError`.

### Class attributes
An attribute defined **in the class body**, outside any method, shared by all objects of that class.

**What it's for.** Constants and shared data: a fee that applies to every account, a count of objects created.

**How to use it.**
```python
class Account:
    fee = 1.5                 # shared by every account
    count = 0
    def __init__(self, owner):
        self.owner = owner    # instance attribute: one per object
        Account.count += 1

Account("Ada"); Account("Alan")
Account.count                 # 2
```
**Watch out.** Writing `self.fee = 2` creates an *instance* attribute that hides the shared one for that object only. A mutable class attribute (a list) is shared by everyone, which is usually a bug: create per-object lists in `__init__`.

### `@property`
Turns a method into something you **read like an attribute**, without brackets.

**What it's for.** Values computed from other attributes, which should always be up to date.

**How to use it.**
```python
class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    @property
    def area(self):
        return self.w * self.h

r = Rectangle(3, 4)
r.area          # 12, no brackets
r.w = 10
r.area          # 40: recomputed
```
**Watch out.** You can't assign to it (`r.area = 5` fails) unless you also define a setter. Keep properties fast and without side effects; they look like plain attribute reads.

### `@dataclass`
A [decorator](#encyclopedia/decorators) that **writes `__init__`, `__repr__` and `__eq__` for you** from a list of typed fields.

**What it's for.** Classes that mainly hold data, without the boilerplate.

**How to use it.**
```python
from dataclasses import dataclass, field

@dataclass
class Book:
    title: str
    pages: int
    tags: list = field(default_factory=list)   # a fresh list for each object

b = Book("Dune", 412)
b                     # Book(title='Dune', pages=412, tags=[])
b == Book("Dune", 412)   # True
```
**Watch out.** Fields with defaults must come after fields without. For list or dict defaults use `field(default_factory=list)`, for the same reason as [mutable default arguments](#encyclopedia/mutable-default-arguments). You can still add your own methods.

### Decorators
A line starting with `@` above a function or class. It **wraps** what's below in another function that adds behaviour.

**What it's for.** Adding a feature without changing the code inside: `@property`, `@dataclass`, `@staticmethod`, and in tests `@pytest.mark.parametrize`.

**How to use it.**
```python
@pytest.mark.parametrize("n, expected", [(2, True), (3, False)])
def test_is_even(n, expected):
    assert is_even(n) == expected
```
`@deco` above `def f` means exactly `f = deco(f)`.

**Watch out.** You'll mostly *use* decorators others wrote. Writing your own is rarely needed in this course.

## Standard library
Modules that come with Python: nothing to install.

### `collections.Counter`
A dict made for **counting**: missing keys count as 0.

**What it's for.** Frequencies: words, categories, values in a column.

**How to use it.**
```python
from collections import Counter
c = Counter(["a", "b", "a", "c", "a"])   # Counter({'a': 3, 'b': 1, 'c': 1})
c["a"], c["zzz"]                          # 3, 0 (no KeyError)
c.most_common(2)                          # [('a', 3), ('b', 1)]
c["b"] += 5                               # update like a normal dict
Counter(r["store"] for r in rows)         # count a column
```
**Watch out.** `most_common` breaks ties by first appearance, not alphabetically. If the tie order matters, sort yourself with a [key](#encyclopedia/the-key-argument).

### `collections.defaultdict`
A dict that **creates a default value** the first time a missing key is used.

**What it's for.** Grouping without checking "is this key new?" every time.

**How to use it.**
```python
from collections import defaultdict
groups = defaultdict(list)          # missing key -> a new empty list
for r in rows:
    groups[r["store"]].append(r)
totals = defaultdict(int)           # missing key -> 0
for r in rows:
    totals[r["store"]] += r["qty"]
dict(groups)                        # back to a plain dict
```
**Watch out.** Even *reading* a missing key creates it. Pass the type itself (`list`, `int`), not a call (`list()`).

### `datetime`
The module for **dates, times and durations**.

**What it's for.** Parsing timestamps from data, extracting parts (year, hour, weekday), and computing differences.

**How to use it.**
```python
from datetime import datetime, date, timedelta
dt = datetime.fromisoformat("2024-03-05 21:14:00")
dt.year, dt.month, dt.hour, dt.weekday()       # 2024, 3, 21, 1 (Monday is 0)
datetime.strptime("05/03/2024", "%d/%m/%Y")    # parse a custom layout
dt.strftime("%Y-%m-%d")                        # format: '2024-03-05'
(dt2 - dt1).total_seconds() / 3600             # hours between
dt + timedelta(days=7)                         # one week later
date.today()
```
**Watch out.** `strptime` **p**arses, `strftime` **f**ormats. `weekday()` starts at 0 for Monday. Timestamps without a time zone are "naive"; decide and document which zone your data uses.

### `re` (regular expressions)
**Regular expressions** are a small pattern language for finding and replacing text.

**What it's for.** Extracting hashtags, URLs, numbers; matching whole words; cleaning whitespace.

**How to use it.**
```python
import re
re.findall(r"\d+", "3 posts, 12 likes")                # ['3', '12']
re.findall(r"#(\w+)", "Go #Python!")                   # ['Python']: only the group
re.search(r"\bart\b", "Modern Art", re.IGNORECASE)     # a match (None if absent)
re.sub(r"\s+", " ", "too   many\nspaces")              # 'too many spaces'
re.fullmatch(r"\d{4}-\d{2}-\d{2}", "2024-03-05")       # does the WHOLE string match?
```
Building blocks: `\d` digit, `\w` letter/digit/underscore, `\s` whitespace, `\S` non-whitespace, `.` any character, `+` one or more, `*` zero or more, `?` optional, `{4}` exactly four, `\b` word boundary, `( )` the part to return, `[abc]` one of these characters.

**Watch out.** Always use raw strings (`r"..."`). When the pattern contains a word from a variable, escape it: `re.escape(word)`. Regular expressions get unreadable fast; if string methods can do it, prefer them.

### `statistics`
Basic statistics on lists of numbers.

**What it's for.** Means, medians and spreads for data quality checks and features, without extra libraries.

**How to use it.**
```python
import statistics as st
data = [2, 4, 4, 4, 5, 5, 7, 9]
st.mean(data)        # 5
st.median(data)      # 4.5
st.mode(data)        # 4
st.stdev(data)       # 2.138...  sample standard deviation
st.pstdev(data)      # 2.0       population standard deviation
```
**Watch out.** `stdev` needs at least two values and raises `StatisticsError` with fewer; `mean` of an empty list raises too. Remove `None` values first.

### `math`
Mathematical functions and constants.

**What it's for.** Square roots, rounding up or down, logarithms, comparing floats.

**How to use it.**
```python
import math
math.sqrt(16), math.pi           # 4.0, 3.14159...
math.ceil(2.1), math.floor(2.9)  # 3, 2
math.log(100, 10)                # 2.0
math.isclose(0.1 + 0.2, 0.3)     # True: the right way to compare floats
math.inf                         # infinity, a handy starting value for a minimum
```
**Watch out.** `round(2.5)` is `2` and `round(3.5)` is `4`: Python rounds halves to the even number. Use `math.floor(x + 0.5)` if you need "always up" for positive numbers.

### `random`
Pseudo-random numbers and choices.

**What it's for.** Sampling data, shuffling, simulations, test data.

**How to use it.**
```python
import random
random.seed(42)                  # same "random" results every run: reproducible
random.random()                  # a float in [0, 1)
random.randint(1, 6)             # 1 to 6, both included
random.choice(["a", "b"])
random.sample(rows, 100)         # 100 different rows
random.shuffle(cards)            # in place
```
**Watch out.** Set a seed whenever results go in a report, so others can reproduce them. `randint` includes both ends, unlike `range`.

### `os` and `sys`
`os` talks to the operating system (environment variables, files). `sys` talks to the Python interpreter itself (command-line arguments, exit, version).

**What it's for.** Reading settings and credentials from the environment, getting arguments, ending with an exit code.

**How to use it.**
```python
import os, sys
os.environ["DB_USER"]            # an environment variable (KeyError if unset)
os.environ.get("DEBUG", "0")     # with a default
os.getcwd()                      # the current folder
sys.argv                         # ['script.py', 'arg1', ...]
sys.version_info                 # the Python version
sys.exit(1)                      # stop with exit code 1
```
**Watch out.** For paths, prefer [`pathlib`](#encyclopedia/paths-and-pathlib) over `os.path`. For arguments, use [`argparse`](#encyclopedia/argparse) rather than reading `sys.argv` by hand.

### `argparse`
Turns command-line arguments into named, typed values, with automatic `--help` and error messages.

**What it's for.** Scripts others can run on their own data without editing your code.

**How to use it.**
```python
import argparse
from pathlib import Path
p = argparse.ArgumentParser(description="Split sales into star-schema tables.")
p.add_argument("input", type=Path)                        # required, positional
p.add_argument("--out-dir", type=Path, default=Path("out"))
p.add_argument("--dry-run", action="store_true")          # a flag: True if present
p.add_argument("-v", "--verbose", action="count", default=0)   # -v = 1, -vv = 2
args = p.parse_args()                    # reads sys.argv; tests pass a list instead
args.input, args.out_dir, args.dry_run
```
**Watch out.** Dashes in option names become underscores in `args` (`--out-dir` becomes `args.out_dir`). With `type=int`, a wrong value makes argparse print an error and exit with code 2.

### `logging`
Messages about **what a program is doing**, with levels of importance you can turn up or down.

**What it's for.** Progress and diagnostics (rows read, rows rejected, timings) that you can see with `-v` and hide otherwise, without deleting `print`s.

**How to use it.**
```python
import logging
log = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
log.debug("details")            # hidden at INFO
log.info("read %d rows", 2104)
log.warning("%d rows skipped", 3)
log.error("file not found: %s", path)
```
Levels, from least to most important: `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`.

**Watch out.** The default level is `WARNING`, so `log.info` shows nothing until you configure it. Logging writes to stderr, separately from the program's real output. Pass values as arguments (`"%d rows", n`) rather than with f-strings.

### `sqlite3`
A complete SQL database **built into Python**, stored in one file or in memory.

**What it's for.** Practising SQL and the DB-API without a server; small local databases; tests.

**How to use it.**
```python
import sqlite3
conn = sqlite3.connect(":memory:")       # or "shop.db" for a file
conn.execute("CREATE TABLE t (id INTEGER, name TEXT)")
conn.executemany("INSERT INTO t VALUES (?, ?)", [(1, "a"), (2, "b")])
conn.commit()
conn.execute("SELECT name FROM t WHERE id = ?", (2,)).fetchall()   # [('b',)]
conn.close()
```
**Watch out.** Changes are lost without `commit()`: see [transactions](#encyclopedia/transactions-and-commit). Always use [placeholders](#encyclopedia/sql-placeholders). The same code works for SQL Server through `pyodbc`, with a different `connect`.

### `time`
Clocks, for measuring how long code takes.

**What it's for.** Benchmarks and timing logs: how long did the load take?

**How to use it.**
```python
import time
t0 = time.perf_counter()
load_everything()
log.info("loaded in %.2f s", time.perf_counter() - t0)
time.sleep(0.5)          # pause half a second
```
**Watch out.** Use `perf_counter()` for measuring durations; `time.time()` can jump when the computer's clock is adjusted. Time a few runs: the first is often slower.

## Data engineering ideas
Concepts behind efficient, correct data pipelines.

### Big-O notation
A way of saying **how the work grows** as the data grows. O(1): the same, whatever the size. O(n): proportional to the size. O(n²): the square of the size.

**What it's for.** Predicting whether code that works on 100 rows will still work on 10 million.

**How to use it.**
| Operation | Cost |
|---|---|
| `x in some_list` | O(n): checks items one by one |
| `x in some_set`, `key in some_dict` | O(1): jumps straight there |
| looping over all rows | O(n) |
| a loop inside a loop over the same rows | O(n²) |
| sorting | O(n log n) |

With 1,000,000 rows, O(n) is a million steps; O(n²) is a million million, which can take days.

**Watch out.** The usual fix for O(n²) code is a [dict](#encyclopedia/dict) or [set](#encyclopedia/set) built once before the loop, turning each inner search into an O(1) lookup.

### Streaming versus loading
**Loading** reads all the data into memory before working on it. **Streaming** processes it one piece at a time, so only the current piece is in memory.

**What it's for.** Handling files and query results larger than your computer's memory.

**How to use it.**
```python
data = f.read()                  # loading: the whole file at once
for line in f:                   # streaming: one line at a time
    ...
rows = cur.fetchall()            # loading
while chunk := cur.fetchmany(1000):   # streaming in chunks
    ...
```
**Watch out.** Building a list "just to have it" (`rows = list(reader)`) turns a stream back into a load. Streams can be read only once. Related: [generators](#encyclopedia/generators-and-yield).

### Batching
Processing items in **groups** of a fixed size instead of one by one or all at once.

**What it's for.** Database inserts: one round trip per 1,000 rows instead of per row, while memory stays small.

**How to use it.**
```python
def batched(items, n):
    batch = []
    for x in items:
        batch.append(x)
        if len(batch) == n:
            yield batch
            batch = []
    if batch:
        yield batch                  # the last, shorter group

for batch in batched(read_rows(path), 1000):
    cur.executemany(sql, batch)
```
**Watch out.** Don't forget the final partial batch. Python 3.12+ also has `itertools.batched`, which yields tuples.

### SQL placeholders
Marks like `?` in a SQL statement, filled in by the database driver with values you pass separately.

**What it's for.** Safety and correctness: values with quotes (`O'Brien`) just work, and malicious text can't run as SQL (**SQL injection**).

**How to use it.**
```python
cur.execute("SELECT * FROM users WHERE name = ? AND age > ?", (name, 30))
cur.executemany("INSERT INTO t (a, b) VALUES (?, ?)", rows)
```
**Watch out.** Never build SQL with f-strings or `+` from data. Placeholders work only for **values**; table and column names can't be placeholders, so check them yourself (for example with `name.isidentifier()`). Some drivers use `%s` or `:name` instead of `?`.

### Transactions and commit
A **transaction** is a group of database changes that succeed or fail together. `commit()` makes them permanent; `rollback()` (or closing without committing) throws them away.

**What it's for.** Never leaving the database half-updated: if a load crashes halfway, nothing from it is saved.

**How to use it.**
```python
try:
    cur.executemany(insert_sql, rows)
    conn.commit()            # all of it
except Exception:
    conn.rollback()          # none of it
    raise
```
**Watch out.** Forgetting `commit()` means your inserts vanish when the connection closes. Committing after every row is very slow; commit once per load or per large batch.

### Star schema
A database layout for analysis: one central **fact table** of events, with **dimension tables** around it describing the who, what, where and when.

**What it's for.** Fast, simple analytical queries, and the base for OLAP cubes.

**How to use it.**
```text
          dim_date
             │
dim_store ── fact_sales ── dim_title
```
The fact table holds **measures** (numbers to add up, like quantity) and **foreign keys** to the dimensions. The dimensions hold descriptive attributes (store city, title name, season). Design it in this order: grain, measures, dimensions, keys.

**Watch out.** First decide the **grain**: what one fact row represents (one sale line? one post?). Mixing grains in one table gives wrong totals. Load dimensions before facts.

### Surrogate keys
An artificial integer key (1, 2, 3...) that **you** assign to each dimension row, instead of using the source system's own identifier.

**What it's for.** Small, fast joins; independence from how the source names things; a key even when the source has none.

**How to use it.**
```python
key_of = {}
for r in rows:
    if r["store"] not in key_of:
        key_of[r["store"]] = len(key_of) + 1     # next number
fact = {"store_key": key_of[r["store"]], "qty": r["qty"]}
```
**Watch out.** Keep the natural value as a column in the dimension too, so you can trace back. Dates often use a readable key like `20240305` instead.

### Exit codes
The number a program returns to the system when it ends. `0` means success; anything else means failure.

**What it's for.** Scripts, schedulers and CI decide what to do next from it: run the next step, or stop and alert.

**How to use it.**
```python
def main():
    if not ok:
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
```
In the terminal, `echo $?` shows the last command's exit code.

**Watch out.** A script that catches an error, prints it and then ends normally exits with `0`, so everything downstream thinks it worked.

### Environment variables
Named settings that live **in the terminal session**, outside your code, readable with `os.environ`.

**What it's for.** Passwords, server names and anything that differs between machines, kept out of the code and out of git.

**How to use it.**
```bash
export DB_USER=ada          # Mac/Linux, this terminal only
```
```python
import os
user = os.environ["DB_USER"]
```
Many projects keep them in a `.env` file that is listed in `.gitignore`.

**Watch out.** Never commit credentials, not even "just for now": git keeps them in history forever. If it happens, change the password.

## Tools
What you use around the code.

### Terminal basics
The **terminal** runs commands you type. It's always inside one folder, the **current directory**.

**What it's for.** Running scripts, tests, git and installers.

**How to use it.**
| Command | Does |
|---|---|
| `pwd` | show the current folder |
| `ls` | list files (`dir` on Windows) |
| `cd folder`, `cd ..`, `cd ~` | move into a folder, up one, home |
| `mkdir name` | create a folder |
| `python file.py` | run a script |
| Tab | complete a file name |
| ↑ | previous command |
| Ctrl+C | stop the running program |

**Watch out.** Most "file not found" errors mean the terminal is in a different folder from the one you think. Check with `pwd`.

### git
A **version control** tool: it records snapshots (**commits**) of your project, so you can see what changed and go back. **GitHub** stores a copy online.

**What it's for.** Never losing work, collaborating, and showing your code.

**How to use it.**
```bash
git init                       # once: start tracking this folder
git status                     # what changed?
git add file.py                # stage it for the next snapshot
git commit -m "Parse ARFF dates"   # take the snapshot
git log --oneline              # history
git push                       # upload to GitHub
git pull                       # download others' changes
```
**Watch out.** `git add` stages the file as it is at that moment; later edits need another `add`. List `.venv/`, `.env` and data files in `.gitignore` so they're never committed.

### pytest
A tool that finds and runs **tests**: functions named `test_*` in files named `test_*.py`, which check results with `assert`.

**What it's for.** Proving code works, and noticing immediately when a change breaks something.

**How to use it.**
```python
# tests/test_prices.py
from prices import vat

def test_vat():
    assert vat(100) == 122
```
```bash
pytest                         # run everything
pytest tests/test_prices.py -v # one file, one line per test
pytest -k vat                  # only tests with "vat" in the name
pytest -x                      # stop at the first failure
```
**Watch out.** Never change a test to make it pass; the test is the specification. Run pytest from the project's top folder, inside the activated venv.

### The debugger
A tool that **pauses your program** on a line you choose, so you can inspect every variable and run one line at a time.

**What it's for.** Finding bugs by watching values change, instead of guessing or adding `print` everywhere.

**How to use it.** In VS Code:

1. Click left of a line number to set a **breakpoint** (a red dot).
2. Start with **Run › Start Debugging** (F5), or the debug icon next to a test.
3. When it stops, read variables in the left panel or by hovering.
4. **F10** runs the next line, **F11** steps into a function call, **F5** continues to the next breakpoint.

You can also write `breakpoint()` in the code to stop there.

**Watch out.** Before each step, predict what the variables will be. The first surprise is where the bug is.

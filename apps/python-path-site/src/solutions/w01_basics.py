"""Reference solutions for week 1: plain loops and if/else only."""


def celsius_to_fahrenheit(celsius):
    return celsius * 9 / 5 + 32


def is_even(n):
    # n % 2 is the remainder after dividing by 2: 0 for even numbers
    return n % 2 == 0


def grade(score):
    if score < 0 or score > 100:
        raise ValueError(f"bad score: {score}")
    # check the highest band first: 95 is also >= 70, so the first true branch must be "A"
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"


def sum_to(n):
    total = 0
    for i in range(1, n + 1):   # range stops before its end, so n + 1 includes n
        total += i
    return total


def count_vowels(text):
    count = 0
    for ch in text.lower():     # lower() once, so "A" and "a" are the same
        if ch in "aeiou":
            count += 1
    return count


def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:         # test "both" first, or the 3 branch would catch 15
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result


def reverse_words(sentence):
    words = sentence.split()        # no argument: splits on any run of spaces, drops empty pieces
    return " ".join(words[::-1])    # [::-1] is a reversed copy of the list


def format_price(amount, currency="EUR"):
    return f"{amount:.2f} {currency}"


def initials(full_name):
    result = ""
    for word in full_name.split():
        result += word[0].upper() + "."
    return result


def is_palindrome(text):
    letters = ""
    for ch in text:
        if ch.isalpha():
            letters += ch.lower()
    return letters == letters[::-1]


def collatz_steps(n):
    if n < 1:
        raise ValueError("n must be at least 1")
    steps = 0
    while n != 1:               # we don't know how many steps in advance: a while loop
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps


def first_index_above(values, threshold):
    for i, v in enumerate(values):
        if v > threshold:
            return i            # leave the function as soon as we know the answer
    return -1                   # reached only when the loop found nothing


def safe_int(text, default=0):
    try:
        return int(text)        # int() already ignores surrounding spaces
    except ValueError:
        return default


def count_digits(n):
    n = abs(n)
    count = 1                   # every number, even 0, has at least one digit
    while n >= 10:
        n = n // 10             # drop the last digit
        count += 1
    return count


def multiplication_table(n):
    lines = []
    for row in range(1, n + 1):
        line = ""
        for col in range(1, n + 1):
            line += f"{row * col:4d}"
        lines.append(line)
    return "\n".join(lines)

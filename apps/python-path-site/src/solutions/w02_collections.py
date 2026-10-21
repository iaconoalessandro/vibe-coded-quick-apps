"""Reference solutions for week 2."""
from collections import Counter, defaultdict


def second_largest(nums):
    distinct = sorted(set(nums))    # set() drops repeats, sorted() orders them
    if len(distinct) < 2:
        return None
    return distinct[-2]


def unique_in_order(items):
    seen = set()
    result = []
    for x in items:
        if x not in seen:           # set lookup is instant; a list would rescan every time
            seen.add(x)
            result.append(x)
    return result


def append_copy(lst, item):
    new = lst.copy()                # `new = lst` would be a second name for the same list
    new.append(item)
    return new


def min_max(nums):
    if not nums:
        raise ValueError("min_max() of an empty list")
    lo = hi = nums[0]
    for x in nums[1:]:
        if x < lo:
            lo = x
        elif x > hi:
            hi = x
    return lo, hi                   # the comma makes a tuple


def transpose(matrix):
    if not matrix:
        return []
    # outer loop picks a column index c, inner loop takes item c from every row
    return [[row[c] for row in matrix] for c in range(len(matrix[0]))]


def squares_of_odds(nums):
    return [x * x for x in nums if x % 2 == 1]


def word_frequencies(text):
    counts = {}
    for word in text.lower().split():
        word = word.strip(".,!?;:")
        if word:
            counts[word] = counts.get(word, 0) + 1
    return counts


def top_n(freqs, n):
    # -count sorts the biggest first; the word breaks ties alphabetically
    return sorted(freqs.items(), key=lambda kv: (-kv[1], kv[0]))[:n]


def invert_dict(d):
    result = defaultdict(list)      # a missing key starts as an empty list
    for key, value in d.items():
        result[value].append(key)
    return {value: sorted(keys) for value, keys in result.items()}


def merge_counts(a, b):
    result = dict(a)                # a new dict, so `a` stays as it was
    for key, n in b.items():
        result[key] = result.get(key, 0) + n
    return result


def common_and_only(a, b):
    sa, sb = set(a), set(b)
    return sorted(sa & sb), sorted(sa - sb), sorted(sb - sa)


def column(rows, key):
    return [row.get(key) for row in rows]   # get() gives None for a missing key


def group_by(rows, key):
    groups = defaultdict(list)
    for row in rows:
        groups[row[key]].append(row)
    return dict(groups)


def aggregate(rows, group_key, value_key, how="sum"):
    if how not in ("sum", "count", "mean", "max"):
        raise ValueError(f"unknown aggregation: {how}")
    result = {}
    for group, members in group_by(rows, group_key).items():
        values = [row[value_key] for row in members]
        if how == "sum":
            result[group] = sum(values)
        elif how == "count":
            result[group] = len(values)
        elif how == "mean":
            result[group] = sum(values) / len(values)
        else:
            result[group] = max(values)
    return result


def index_by(rows, key):
    index = {}
    for row in rows:
        k = row[key]
        if k in index:
            raise ValueError(f"duplicate key {k!r}")
        index[k] = row
    return index


def join(left, right, key):
    lookup = index_by(right, key)       # one pass over right
    result = []
    for row in left:                    # one pass over left, an instant lookup per row
        match = lookup.get(row[key])
        if match is not None:
            result.append({**row, **match})     # a new dict: left fields, then right fields
    return result


def sales_summary(rows):
    summary = {}
    for store, members in group_by(rows, "store").items():
        qty_per_title = Counter()
        for row in members:
            qty_per_title[row["title"]] += row["qty"]
        best = max(qty_per_title.values())
        top = min(t for t, q in qty_per_title.items() if q == best)   # tie: alphabetically first
        summary[store] = {"orders": len(members), "qty": sum(qty_per_title.values()), "top_title": top}
    return summary


def flatten(nested):
    result = []
    for x in nested:
        if isinstance(x, list):
            result.extend(flatten(x))   # the same problem, one level smaller
        else:
            result.append(x)
    return result


def depth(nested):
    inner = [depth(x) for x in nested if isinstance(x, list)]
    return 1 + max(inner, default=0)    # default=0: a list with no sublists has depth 1


def binary_search(sorted_list, target, lo=0, hi=None):
    if hi is None:
        hi = len(sorted_list) - 1
    if lo > hi:                         # empty range: not found
        return -1
    mid = (lo + hi) // 2
    if sorted_list[mid] == target:
        return mid
    if sorted_list[mid] < target:
        return binary_search(sorted_list, target, mid + 1, hi)
    return binary_search(sorted_list, target, lo, mid - 1)


def merge_sort(nums):
    if len(nums) <= 1:
        return list(nums)               # a copy, so the caller's list is never returned
    mid = len(nums) // 2
    left, right = merge_sort(nums[:mid]), merge_sort(nums[mid:])
    merged, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    return merged + left[i:] + right[j:]   # one side may have items left over

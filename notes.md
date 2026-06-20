# Lesson 2 — commit message comparison

## My quick version (what I'd dash off)
fix search

## Claude's version (the actual commit message)
Fix search to match notes containing the term, not just exact matches

`search` is meant to return every note that *contains* the term, but `matches`
in lib/store.js compared with `===`, so "milk" only matched a note whose text
was exactly "milk" — missing "buy milk" and "milk the almonds". Switched the
predicate to `String.includes`, which is what the two failing tests expect.
All three tests pass.

## Comparison
The quick version ("fix search") says nothing about what was wrong or why the
change is correct. The fuller message explains the actual bug (exact-equality
vs. substring), names the function, and ties the fix to the tests — so a future
reader understands the *why*, not just that something changed.

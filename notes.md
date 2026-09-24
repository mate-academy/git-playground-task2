# Notes — Lesson 2

## My quick commit message

> fixed the bug in store.js

## Claude's commit message

```
Fix search to match notes containing the term

matches() compared note text to the search term with ===, so
`notes search milk` only matched a note whose text was exactly
"milk" — "buy milk" and "milk the almonds" were both missed.
Using String.includes() makes it the substring search the command
promises and the tests expect.

All three tests in tests/notes.test.js pass; two were failing.
```

## Comparison

Mine says a bug was fixed and where. Claude's says what was actually wrong (`===` compared the whole text instead of looking inside it), why it mattered (`search milk` missed "buy milk" and "milk the almonds"), and what the fix does (`String.includes()` makes it a substring search, which is what the command advertises). It also records that the test suite went from two failures to green.

The difference shows up later: reading `git log` in six months, "fixed the bug in store.js" tells me nothing — which bug, and why was that the right fix? Claude's version answers both without opening the diff. The subject line is also written in the imperative ("Fix search…"), matching how the rest of the history reads.

What I'd keep from my own habit: brevity. A one-line subject is fine for small changes — the detail belongs in the body, not crammed into the first line.

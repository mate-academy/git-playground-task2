# Notes

## My commit message (written before Claude's)

There was a node program that was not installed, but Im not sure if that was the expected error, which seems to be the fix where you do an include, not exact match

## Claude's commit message

Fix search to match notes containing the term, not just exact text

`matches()` compared each note's text to the search term with `===`,
so `search` only ever returned a note whose text was identical to the
term. Switched to `String.includes()` so it returns every note that
contains the term anywhere in its text, matching the documented
behavior of `node notes.js search <term>`. Confirmed with `npm test`
(3/3 passing, up from 1/3).


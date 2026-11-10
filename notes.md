# Lesson 2 — committing well

## My quick commit message (written first)
Fix search to match substrings

## Claude's commit message
Fix search to match notes containing the term

`matches` compared each note's text with `===`, so `search` only
returned notes whose entire text was exactly the search term. A note
like "buy milk" was missed by `search milk`.

Use `includes` so any note containing the term is returned. This is
the behaviour `search` is meant to have, and the existing tests for
`matches` expect it.

Not run: `npm test` could not be run on this machine because Node.js
is not installed. The three `matches` tests were checked by reading
them against the new logic.

## Comparison
Claude's message explains the why (`===` only matched whole notes) and
the expected behaviour. Mine says what changed, but not why, and it
doesn't mention that the tests weren't run.

# Lesson 2 — commit message comparison

## My quick message (before Claude)

fix search bug

## Claude's message

The commit on branch `fix-search-substring-match`:

> Fix search to match notes containing the term, not just exact text
>
> matches() filtered with note.text === term, so search only ever
> returned a note whose entire text equaled the query. That made
> 'search milk' miss 'buy milk' and 'milk the almonds' — the search
> command was effectively unusable for anything but a full-text match.
>
> Switch to note.text.includes(term) so search returns every note
> that contains the term, matching the documented behavior in the
> README. All three tests in tests/notes.test.js now pass.

## Comparison

Yes — Claude's message explains the *why* (exact-match filtering made `search` unusable for anything but a full-text query, contradicting the documented "contains" behavior) and the *what* (one-line fix, `===` → `includes()`), plus confirms the tests now pass. My one-liner ("fix search bug") only says something was fixed, not what was wrong or why it mattered.

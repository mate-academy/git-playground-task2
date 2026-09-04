# Lesson 2 — commit message comparison

## My quick message (what I'd have dashed off)

fix search bug

## Claude's commit message

```
Fix search to match notes containing the term, not just exact text

matches() compared note.text === term, so search only ever returned
a note whose entire text equaled the search term. Switched to
note.text.includes(term) so search finds any note containing the
term, matching the documented behavior and fixing the two failing
search tests.
```

## Comparison

Yes — Claude's version explains the *why*, not just the *what*. My version ("fix search bug") says nothing about what was actually wrong; Claude's spells out the exact bug (`===` instead of a substring check), why it mattered (search only ever matched exact text), and what confirms the fix (the two previously-failing tests). Someone reading the commit later — without the PR or the context I have right now — could understand the bug from the message alone with Claude's version, not with mine.

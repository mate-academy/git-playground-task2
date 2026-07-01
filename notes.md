# Commit notes

## My quick message (what I'd dash off)
Fix search

## Claude's message (the why, not just the what)
Fix search to match notes containing the term, not exact text

The `matches` function in `lib/store.js` compared note text to the term with
`===`, so `search` only returned notes whose text was exactly the term. Users
expect `search <term>` to find every note that contains the term, which is what
the tests assert. Switched the comparison to `note.text.includes(term)`, turning
the two failing `search` tests green while keeping the build passing.

# Commit message comparison

## My commit message (user)

```
git commit -m "fix: the bug in matches func"
```

## Claude's commit message

```
git commit -m "fix: match notes by substring in matches()" -m "matches() compared note.text to the search term with ===, so only exact matches were returned. Use note.text.includes(term) so search finds every note containing the term. Fixes the two failing tests in tests/notes.test.js." -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

## Differences

| Aspect | User's message | Claude's message |
| --- | --- | --- |
| Format | Conventional Commits (`fix:`) | Conventional Commits (`fix:`) |
| Subject | "the bug in matches func" | "match notes by substring in matches()" |
| Describes the bug | No, it says "the bug" without saying which one | Yes, it says exact equality was the problem and substring matching is the fix |
| Subject style | Reads as a noun phrase and abbreviates "function" to "func" | Imperative mood, which is the usual convention, and names the function as `matches()` |
| Body | None | Explains the cause, the change and the tests it fixes |
| Length | Short one-liner (28 characters after `fix: `) | One-line subject plus a body paragraph |
| Attribution | None | `Co-Authored-By` trailer for Claude |

## Summary

Both messages use the right `fix:` type and point at `matches`. The user's message is shorter but doesn't say what was wrong, so someone reading `git log` would have to open the diff. Claude's message says what changed and why, and it uses the imperative mood. The extra detail makes it longer, and a one-line message is fine for a change this small.
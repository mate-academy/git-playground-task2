##  My Comment Message
Modified search to fix error by handle substring rather then full string match

## npm test

2 of 3 tests fail as expected: `search` is only exact-matching instead of matching notes that *contain* the term. The bug is in the `matches` function in `lib/store.js:41` — `note.text === term` should be a substring check.

## Code Changes

### Steps
1. Ran `npm test` to confirm the baseline failure (2 of 3 tests failing on `search`).
2. Edited `lib/store.js` — changed the `matches` function to use substring matching instead of exact equality.
3. Ran `npm test` again to confirm all tests now pass.

### Diff
```diff
--- a/lib/store.js
+++ b/lib/store.js
@@ -38,7 +38,7 @@
 // Returns the notes that match `term`.
 function matches(notes, term) {
-  return notes.filter((note) => note.text === term);
+  return notes.filter((note) => note.text.includes(term));
 }
```

### Result
```
# tests 3
# suites 0
# pass 3
# fail 0
# cancelled 0
# skipped 0
# todo 0
```
All 3 tests pass.

## Commit Changes

Commit `7d4a127` on branch `debug-repo`:

```
Fix search to match substrings instead of exact text

The matches() function used === for comparison, so search only
returned a note when its full text equaled the search term. Switched
to String.includes() so search finds any note containing the term,
matching the documented CLI behavior and the existing test suite.
```

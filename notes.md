# Notes

## Fix: search only matched exact note text

**File:** `lib/store.js:40` (`matches`)

**Bug:** `matches` compared each note's full text to the search term, so a search
only found notes whose text was exactly the term. Searching for `milk` did not
find `buy milk` or `milk the almonds`.

**Before:**

```js
return notes.filter((note) => note.text === term);
```

**After:**

```js
return notes.filter((note) => note.text.includes(term));
```

**Result:** `matches` (and the CLI `search` command, which uses it) now returns
every note whose text contains the term. All 3 tests in `tests/notes.test.js` pass.

Search is still case-sensitive.

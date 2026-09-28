# Fix: `npm test` failing on search tests

## Problem
`npm test` failed with 2 of 3 tests failing:
- "search finds every note that contains the term"
- "search finds a single containing note"

## Root cause
In `lib/store.js`, the `matches` function used strict equality (`===`) to compare
a note's full text against the search term, instead of checking whether the term
appears anywhere in the text:

```js
// before
function matches(notes, term) {
  return notes.filter((note) => note.text === term);
}
```

This meant a search for `"milk"` never matched a note whose text was `"buy milk"`,
since `"buy milk" !== "milk"`.

## Fix
Changed the comparison to a substring check:

```js
// after
function matches(notes, term) {
  return notes.filter((note) => note.text.includes(term));
}
```

## Result
Re-ran `npm test`: all 3 tests pass (`# pass 3`, `# fail 0`).

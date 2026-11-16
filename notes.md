# Notes

## Fix: search now matches notes that contain the term

`matches()` in `lib/store.js` compared the full note text against the search
term (`note.text === term`), so a note was only found if its text was exactly
the term. Searching for `"milk"` did not find `"buy milk"`.

Changed it to `note.text.includes(term)` so it returns every note whose text
contains the term. `search()` uses `matches()`, so the CLI search is fixed too.

All 3 tests in `tests/notes.test.js` now pass (2 were failing before).

Note: the search is still case-sensitive (`"Milk"` does not match `"buy milk"`).

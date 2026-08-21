## Changes

- `lib/store.js`: `matches()` now checks `note.text.includes(term)` instead of `note.text === term`, so `search()` returns notes that contain the search term rather than only exact matches.

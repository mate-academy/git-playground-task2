# Notes

- Fixed `matches` in [lib/store.js](lib/store.js) — it used exact equality (`note.text === term`) instead of substring search, so searching for "milk" never matched a note like "buy milk". Changed it to `note.text.includes(term)`, which fixed the 2 failing tests in `tests/notes.test.js`.

# Notes

- Fixed the case-sensitive search term bug in `lib/store.js`: `search` only matched when the term was identical to a note's entire text (`note.text === term`), so searching `playground` found nothing. It now does a case-insensitive substring match (`note.text.toLowerCase().includes(term.toLowerCase())`), and `npm test` passes (3 of 3).

npm test 
Found a problem in lib/store.js where function matches only returns text matches when they exactly match - required to be any text which is included. Function changed to .include(text)
 

- File: lib/store.js, in the matches(notes, term) function.
- Before: notes.filter((note) => note.text === term). This used strict equality, so a note only matched if its whole text was exactly the search term.
- After: notes.filter((note) => note.text.includes(term)). A note now matches if its text contains the term anywhere.
- Effect: searching for "milk" now finds "buy milk tomorrow", where before it found only a note that said just "milk".
- Testing: npm test ran 3 tests and all passed. They check that search finds every note containing the term, finds a single containing note, and returns nothing when no note contains the term.
- Delivery: the change is in commit 5023296. It was merged into main through pull request #1 (https://github.com/smtoff/git-playground-task2/pull/1).

includes() is case-sensitive, so searching for "Milk" won't match "milk". I didn't change that because you didn't ask for it.

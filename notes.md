Fix the bug of matches function in store.js used in search.

This causes the npm test to failed

Fixes:

Change from:
return notes.filter((note) => note.text === term);

to:
return notes.filter((note) => note.text.includes(term));

After the fixes, npm test runs successfully now.

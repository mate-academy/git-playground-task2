*My Commit Message*
In store.js changed:
function matches(notes, term) {
  return notes.filter((note) => note.text === term);
}

to

function matches(notes, term) {
  return notes.filter((note) => note.text.includes(term));
}


*Claude Commit Message*
Fix search to match substrings instead of exact text

The matches() function was using strict equality (===) to compare note
text against the search term, so only notes whose full text was identical
to the term would be returned. Switch to String.prototype.includes() so
that search finds every note containing the term anywhere in its text,
which is what the feature is supposed to do.

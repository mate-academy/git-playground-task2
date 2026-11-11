## My comment
fixed bug in function store.js/matches

## Claude comment
Fix search to match notes containing the term

  matches() used strict equality, so only notes whose text exactly equaled
  the search term were found. Use includes() for substring matching.

  Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>" && git status --short)
 
 ## Claude clearly described in the commit message what and why has been changed
my committ message:
fixed bug in matches()

claudes commit message:
Fix search matching to use substring comparison

matches() used strict equality on note text, so search only ever
returned notes whose text exactly equaled the query instead of
notes containing it.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
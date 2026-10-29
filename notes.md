## My quick commit message
Fix search

## Claude commit message
Fix search to match notes containing the term
matches() compared with strict equality, so only notes whose whole
text equalled the term were found. Use includes() for substring match.

## Comparison
Claude's message is clearly better. Mine only says that something in search changed, while Claude's subject says what the fix does, and the body explains why it was needed: matches() used strict equality, so only exact matches were found. Someone reading the history later would understand the bug without opening the diff.

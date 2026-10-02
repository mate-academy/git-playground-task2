
## my commit message 
There 2 issues in the 1case test expects the 2 but it catches 0, and in 2 case test expects 1 and catches 0.

## claude's commit message 
Fix search to match notes containing the term

matches() used strict equality, so only notes whose entire text equalled
the search term were returned. Use includes() for substring matching.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

conclusion: 

Claude good catches the context, find an issue, fixed it. And added better commit message. It finds the main meaning of changes and better write what it did.

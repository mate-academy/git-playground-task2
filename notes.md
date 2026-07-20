My git commit message:
Fixed issue in search to find all matches



Claude's git commit message:

Fix search to match notes containing the term



Change matches() function to use substring matching instead of exact

string equality. This allows users to find notes that contain a search

term rather than requiring an exact match of the entire note text.



Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>


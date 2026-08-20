## Commit message comparison

**Quick version (what I'd dash off myself):** fix search bug

**Claude's version (used for the actual commit):** "Fix search to match notes containing the term, not just exact matches" — explains what changed (`includes` instead of `===`) and why (search should find partial matches, per the CLI's documented `search <term>` behavior), not just that "something" was fixed.

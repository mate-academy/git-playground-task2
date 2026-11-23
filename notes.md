## My Quick Commit Message
fix search bug in store.js

## Claude's Commit Message
Fix search to match substrings instead of exact note text

## Comparison
My quick message only stated *what* I touched ("fix search bug") without explaining the behavior change, whereas Claude's commit message explains *why* the fix works—changing exact equality (`===`) to case-insensitive substring matching (`includes`) so partial searches return matching notes.

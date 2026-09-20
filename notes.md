# Notes

## My quick commit message (what I'd type without thinking)

fix search bug

## Claude's commit message

See the actual commit on the `fix-search-matching` branch — it explains that `matches()` used strict equality so search only matched a note's exact full text, and switches to `String.includes()` so partial matches work, which is what the search command and its tests expect.

## Comparison

My version says *what* changed in three words. Claude's message explains *why* the old code was wrong (strict equality means "milk" never matched "buy milk") and what behavior the fix restores — useful context for anyone reading the commit log later without having to dig into the diff themselves.

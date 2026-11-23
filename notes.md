# Lesson 2 - let Claude write the commit message

## My quick message (written before asking Claude)
`fix search`

## Claude's message (on branch `fix-search-contains`)
> Fix search to match notes that contain the term
>
> `matches()` compared each note's full text with `===`, so `search` only found a note whose text was exactly the term. "milk" found nothing in "buy milk". It now uses `includes()`, so `search` lists every note that contains the term, which is what the command is documented to do. All three search tests now pass (2 were failing).

## Comparison
Mine says only *what* area changed. Claude's says what was wrong (exact match instead of contains), why it matters (search missed obvious notes), and how I know it's fixed (the tests went from 1/3 to 3/3 passing). Someone reading `git log` in six months gets the reason without opening the diff.

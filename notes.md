# Commit message: mine vs Claude's

## The fix

`matches()` in `lib/store.js` used `note.text === term`, so search only found notes whose whole text was exactly the term. Changed it to `note.text.includes(term)`. `npm test` went from 2 failing to 3/3 passing.

## Quick message, written before asking Claude

```
fix search
```

## Claude's message

```
Fix search to match notes that contain the term

`matches()` compared each note's text with `===`, so `notes search milk`
only returned a note whose whole text was exactly "milk" and missed
"buy milk" or "milk the almonds". Switch to `String.prototype.includes`
so search returns every note containing the term, as the command
promises. All three tests now pass.
```

## Comparison

Claude's is clearly better. The quick one says *that* something changed and nothing else; you'd have to open the diff to know what was wrong with search. Claude's subject line says exactly what the behaviour is now, and the body gives the why: the old strict equality, a concrete example of what it missed, and that the tests pass. Someone reading `git log` in six months gets the whole story without looking at the code.

Claude's message is grounded in the real diff, so it tends to capture what changed and why far better than a rushed one-liner. That 'why' is what your future self - and your reviewers - actually need.

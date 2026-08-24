# Lesson 2 — commit message comparison

## Step 4: the quick message I'd have dashed off

```
fix search
```

Maybe, on a good day, with a bit more care:

```
fix search bug in store.js

changed === to includes
```

## Step 6: comparing that to Claude's message

Claude's message:

```
Fix search to match notes containing the term

The `matches` helper compared note text to the search term with strict
equality, so `notes search milk` only returned a note whose text was
exactly "milk" — "buy milk" and "milk the almonds" were missed. That
makes the search command useless for its documented purpose: the README
describes it as listing notes *containing* a term.

Switch the predicate to `String.prototype.includes`, which is the
substring behaviour the command was always meant to have. This turns the
two red tests in tests/notes.test.js green; the third test (no match
returns nothing) still passes, since `includes` returns false when the
term is absent.
```

What the longer version actually buys you:

- **It names the symptom, not the edit.** "changed `===` to `includes`" is
  already visible in the diff — repeating it in prose adds nothing. "`notes
  search milk` didn't find `buy milk`" is the thing a person would have
  reported, and it's the thing someone greps for six months later.
- **It says why the new behaviour is the correct one.** The README documents
  search as listing notes *containing* a term, so this is a fix to match a
  stated contract, not one person's preference about how search ought to work.
  That's the difference between a fix and a behaviour change.
- **It states the test outcome.** Two tests went red→green and the third was
  already green and stayed green. A reviewer reading only the message knows
  the build isn't left broken.
- **Subject line works standalone.** "fix search" tells you nothing in a
  `git log --oneline`; "Fix search to match notes containing the term" tells
  you what changed and roughly why without opening the commit.

Verdict: yes, better — mostly because the *why* survives without the diff next
to it. My version needs the diff to mean anything at all.

Note on scope: the fix is case-sensitive, matching the previous behaviour.
Nothing in the README or the tests asks for case-insensitive search, so
lower-casing both sides would have been an unrequested behaviour change.

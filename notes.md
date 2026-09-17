# Lesson 2 — let Claude write the commit message

## My quick commit message (written before asking Claude)

fix search bug

## Claude's commit message

See the commit on the `fix-search` branch — asked Claude to "run the tests to
confirm they pass, then stage my changes and commit them on a new branch with
a corresponding message."

## Comparison

My version says *what* changed but not *why* it mattered or how it was found.
Claude's message names the exact bug (`===` exact-match instead of substring
containment in `matches()`), points at the failing tests that exposed it, and
notes the user-facing effect (`search` missed any note that didn't equal the
term exactly). That's a clearer commit: a future reader doesn't have to re-derive
the reasoning from the diff.

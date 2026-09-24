# Lesson 2 — let Claude write the commit message

## My quick commit message

fix search

## Comparison

The quick version says only *what* area changed. Claude's message also explains the bug: search matched only exact text. It explains the fix: substring match with `includes`. It also explains *why*: `search` should list every note that contains the term, and the failing `search` tests now pass.

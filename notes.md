\# Commit message exercise



\## My message before asking Claude

Fix search

## Claude's commit message

Full message from commit [ea216255a0c7c9bae49ccaf085d34a42db7f45e1](https://github.com/ekorik-tech/git-playground-task2/commit/ea216255a0c7c9bae49ccaf085d34a42db7f45e1):

```
Fix search to match notes that contain the term

The search command should list every note containing the given term,
but matches() compared each note's full text with ===, so only a note
whose text was exactly the term was returned. Searching "milk" missed
"buy milk".

Use String.includes so matches() returns any note whose text contains
the term. This makes the search tests pass again.
```

## Comparison

My draft, "Fix search", says only what task was done. Claude's message explains why the fix was needed: exact equality missed notes such as "buy milk" when searching for "milk". It also explains the solution, String.includes, so the message is more useful for understanding the change later.

## Validation

Before the fix, one test passed and two search tests failed. After replacing exact equality with String.includes, all three tests passed.

## Submission

- Pull request: https://github.com/mate-academy/git-playground-task2/pull/390
- Target repository: mate-academy/git-playground-task2
- Base branch: main
- Head branch: ekorik-tech:fix-search-contains (fork: ekorik-tech/git-playground-task2)

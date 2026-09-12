my proposed commit message:
```
change behaviour from "exact match" to "contain text"
```

claude commit message:
```
fix: match notes by substring instead of exact equality in search

`matches()` compared note text with strict equality, so `notes search`
never found anything unless the term equalled the whole note. Switch to
a case-insensitive substring check, matching the CLI's "No notes match"
wording and the tests' intent.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_013dw5MxZkZVjNeGBg5ckoeW
```

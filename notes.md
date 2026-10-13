# Lesson 2 — commit message notes

## Step 4: my own quick commit message (written before Claude's)

```
fix search
```

## Step 6: comparison with Claude's commit message

Claude's message:

```
Fix search to match notes containing the term

matches() compared note.text === term, so search only returned notes
whose text was exactly the search term. Use includes() so any note
containing the term is returned, as the search command promises.
```

What I noticed:

- My version says only "fix search". It doesn't say what was broken or how it was fixed, so in `git log` someone would have to open the diff to understand it.
- Claude's subject line is specific: it says the behaviour changed (search now matches notes that *contain* the term).
- Claude's body explains the **why**: the old code used strict equality (`===`), so only a note whose text was exactly the term was found. It also states the fix (`includes()`) and ties it to what the `search` command is supposed to do.
- The message is short, and the subject line is under 50 characters, so it reads well in the log.

Conclusion: Claude's message is clearly better than my quick one. It documents the reason for the change, not just the fact that something was fixed. Next time I'll write at least a subject line that describes the behaviour and one sentence about the cause.

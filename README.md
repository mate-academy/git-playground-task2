# Unit 4 Git playground - Lesson 2

A tiny command-line notes tool, used as the practice repo for Unit 4, Lesson 2 (committing well). The app is a safe sandbox, the task is to make one small change and have Claude commit it with a clear message.

### The app
- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js search <term>` — list notes containing a term
- `node notes.js delete <id>` — delete a note

Layout: `notes.js` is the entry point, `lib/store.js` loads, saves, and searches notes (in `notes.json`), and `lib/config.js` holds app settings.

### Set up
1. Make sure you have your own copy of this repo (created from the lesson on the platform).
2. Clone it locally and open Claude Code in the folder.

### Lesson 2 task — let Claude write the commit message
**Heads-up: the tests start red on purpose.** The repo ships with one bug, your job is to fix it, then let Claude commit the fix with a clear message.

1. **Run the tests:** `npm test`. Two of the `search` tests fail — that's expected, not a broken repo.
2. **Find the bug.** The `search` command should list every note that *contains* your term, but right now it only matches a note whose text is *exactly* the term. The fix is one line, in the `matches` function in `lib/store.js`.
3. **Fix that line, then run `npm test` again.** All three tests should now pass. A good commit doesn't leave the build broken.
4. **Write your own message first.** In `notes.md` (or a scratch note), jot the quick commit message you'd dash off yourself. You'll compare it to Claude's.
5. **Let Claude commit it.** Ask: *'Run the tests to confirm they pass, then stage my changes and commit them on a new branch with a corresponding message.'*
6. **Compare.** Open the commit on GitHub and read Claude's message. Does it explain the change — the *why*, not just the *what* — better than your quick version?
7. Open the PR and submit.


READ ME TEST

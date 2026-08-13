# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny command-line notes tool used as a practice repo for a git/commit-message lesson (Unit 4, Lesson 2). The teaching goal is the workflow — fix a small bug, then have Claude write a clear commit message on a new branch — not the app itself. Keep changes minimal and scoped to what's asked.

## Commands

- Run the CLI: `node notes.js <command>` (or `npm start -- <command>`)
- Run tests: `npm test` (uses Node's built-in test runner, `node --test`)
- Run a single test file: `node --test tests/notes.test.js`

There is no build step, linter, or bundler — plain Node.js, no dependencies.

## Architecture

- `notes.js` — CLI entry point. Parses `process.argv` and dispatches to one of four commands: `add`, `list`, `search`, `delete`. All output goes through `console.log`; there's no other UI layer.
- `lib/store.js` — persistence and query logic. Notes are stored in `notes.json` at the repo root (gitignored, created on first write). `load`/`save` read and write that file as JSON; `add`/`remove`/`all`/`search` operate on it. `matches(notes, term)` is the pure filtering function used by `search` and is what's under test.
- `lib/config.js` — static app settings (currently just `SESSION_TIMEOUT_MINUTES`, which is display-only and not enforced anywhere in the code).
- `tests/notes.test.js` — exercises `matches` directly (not through the CLI or the file-backed store).
- CI (`.github/workflows/ci.yml`) runs `npm test` on pull requests only, against Node 22.

## Notes for working in this repo

- `notes.json` is gitignored and regenerated at runtime by `lib/store.js`; don't expect it to exist in a fresh checkout.
- The repo intentionally ships with a starting bug in `matches` (exact-match instead of substring match) so that tests start red — this may or may not still be present depending on lesson progress. Check `npm test` output before assuming something is broken.

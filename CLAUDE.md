# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A tiny command-line notes tool used as a practice repo for a Git/Claude Code lesson (Unit 4, Lesson 2: committing well). It is intentionally minimal — the task is to make one small fix and have Claude commit it with a clear message.

## Commands

- Run the app: `node notes.js <command>` (or `npm start -- <command>`)
  - `node notes.js add <text>` — add a note
  - `node notes.js list` — list all notes
  - `node notes.js search <term>` — list notes containing a term
  - `node notes.js delete <id>` — delete a note
- Run all tests: `npm test` (uses Node's built-in test runner, `node --test`, against files in `tests/`)
- There is no build or lint step.

CI (`.github/workflows/ci.yml`) runs `npm test` on pull requests only, not on pushes to main.

## Architecture

- `notes.js` — CLI entry point; parses `process.argv` and dispatches to the `store` module based on the subcommand.
- `lib/store.js` — data layer: loads/saves notes as JSON in `notes.json` (gitignored, created at runtime in the repo root), and implements `add`, `remove`, `all`, `search`. `search` filters via the exported `matches(notes, term)` function, which is tested directly in `tests/notes.test.js` without going through the CLI.
- `lib/config.js` — static app settings (e.g. `SESSION_TIMEOUT_MINUTES`), read by `notes.js` for display text only.
- `notes.json` is not committed; each environment gets its own local note store starting empty.

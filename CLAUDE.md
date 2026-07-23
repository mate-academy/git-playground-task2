# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny command-line notes tool used as a practice repo for a git/commit-message lesson (Unit 4, Lesson 2). It's intentionally small: the point of the exercise is fixing a one-line bug and writing a clear commit message, not the app itself.

## Commands

- Run the CLI: `node notes.js add <text>` | `node notes.js list` | `node notes.js search <term>` | `node notes.js delete <id>`
- Run tests: `npm test` (uses Node's built-in test runner, `node --test`, against files in `tests/`)
- No build or lint step exists in this repo.

CI (`.github/workflows/ci.yml`) runs `npm test` on Node 22 for every pull request.

## Architecture

- `notes.js` — CLI entry point. Parses `process.argv`, dispatches on the subcommand (`add`/`list`/`search`/`delete`), and prints output. Contains no business logic itself.
- `lib/store.js` — data layer. Persists notes as JSON to `notes.json` (created at repo root, alongside `lib/`, on first write). Exposes `all`, `add`, `remove`, `search`, and `matches`. `matches(notes, term)` is the pure filtering function and is what `tests/notes.test.js` exercises directly (not `search`, which also does file I/O via `load()`).
- `lib/config.js` — static app settings (e.g. `SESSION_TIMEOUT_MINUTES`), imported by `notes.js`.
- `tests/notes.test.js` — unit tests for `matches` only.

Data flow is linear: `notes.js` → `lib/store.js` (`load()`/`save()` read and write `notes.json`) with `lib/config.js` providing constants. There's no framework, no async code, and no external dependencies.

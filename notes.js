#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

function main() {
  switch (command) {
    case "add": {
      const text = rest.join(" ").trim();
      if (!text) {
        console.log("Usage: notes add <your note>");
        return;
      }
      const note = store.add(text);
      console.log(`Added note #${note.id}: ${note.text}`);
      break;
    }
    case "list": {
      const notes = store.all();
      if (notes.length === 0) {
        console.log("No notes yet. Add one with: notes add <text>");
        return;
      }
      for (const note of notes) {
        console.log(`#${note.id}  ${note.text}`);
      }
      break;
    }
    case "search": {
      const term = rest.join(" ").trim();
      const matches = store.search(term);
      if (matches.length === 0) {
        console.log(`No notes match "${term}"`);
        return;
      }
      for (const note of matches) {
        console.log(`#${note.id}  ${note.text}`);
      }
      break;
    }
    case "delete": {
      const id = Number(rest[0]);
      const deleted = store.remove(id);
      console.log(deleted ?`Deleted note #${id}` : `No note #${id} found`);
      break;
    }
    case "count": {
      console.log(`${store.count()} note(s)`);
      break;
    }
    default:
      console.log("Commands: add <text> | list | search <term> | delete <id> | count");
      console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}

main();

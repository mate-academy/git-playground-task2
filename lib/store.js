const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    return { nextId: 1, notes: [] };
  }
}

function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function all() {
  return load().notes;
}

function add(text) {
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

function remove(id) {
  const data = load();
  const before = data.notes.length;
  
  // FIX: Force `id` to a Number so string inputs (like "1") successfully match numeric IDs (like 1)
  data.notes = data.notes.filter((n) => n.id !== Number(id)); 
  
  save(data);
  return data.notes.length < before;
}

// Returns the notes that contain `term` (case-insensitive).
function matches(notes, term) {
  if (!term) return notes;
  
  // FIX: Convert everything to lowercase and use .includes() for partial matching
  const lowerTerm = term.toLowerCase();
  return notes.filter((note) => note.text.toLowerCase().includes(lowerTerm));
}

function search(term) {
  return matches(load().notes, term);
}

module.exports = { all, add, remove, search, matches };
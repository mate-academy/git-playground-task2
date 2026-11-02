De bedoeling is om de fout uit de code te halen en om deze te comitten.

Blijkbaar zoekt de code op de volledige tekst en niet een deel van de tekst.

Update(lib/store.js)
Added 1 line, removed 1 line

// Returns the notes that match `term`.
function matches(notes, term) {
  return notes.filter((note) => note.text === term);
  return notes.filter((note) => note.text.includes(term));
}

function search(term) {

  Ran 1 shell command

De fix staat erin en alle 3 de tests slagen nu (eerst 2 rood).

Gewijzigd in lib/store.js, in de functie matches:
return notes.filter((note) => note.text.includes(term));

 Mijn commitboodschap: fix de search zodat een deel van de tekst gevonden wordt.
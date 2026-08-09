# Correcciones

## lib/store.js:41 — `matches` no encontraba coincidencias parciales
- Comparaba `note.text === term` (igualdad exacta) en vez de buscar el término dentro del texto.
- Fix: `note.text.includes(term)`.
- Tests afectados: `tests/notes.test.js` (2 fallaban, ahora los 3 pasan).
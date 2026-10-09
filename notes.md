# Ändringar jag gjort

Commit `df7dd8b` på branchen `add-count-command`:

1. `notes.js`: bytte namn på variabeln `ok` till `deleted` i `delete`-kommandot.
2. `lib/store.js`: la till funktionen `count()` och exporterade den.
3. `notes.js`: nytt kommando `count` som skriver ut antalet anteckningar, och hjälptexten nämner det.
4. `lib/config.js`: höjde `SESSION_TIMEOUT_MINUTES` från 15 till 20.
5. `package.json`: höjde versionen från 1.0.0 till 1.0.1.

Jag lät söksbuggen i `matches` (`===`) vara orörd, eftersom den är lektionsuppgiften.
Jag körde inte testerna.

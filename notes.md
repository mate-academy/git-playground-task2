# Mi mensaje de commit (versión rápida)

fix search

# Mensaje de Claude

```
Fix search to match notes containing the term

matches() compared note.text with === term, so `notes search milk`
only found a note whose entire text was "milk" and missed notes like
"buy milk". Use String.includes so search returns every note that
contains the term, as the README documents. The two failing search
tests in tests/notes.test.js now pass.
```

# Comparación

El mío dice solo el *qué* ("fix search") y no aclara qué estaba roto. El de Claude explica el *por qué*: la causa (`===` en lugar de `includes`), un ejemplo concreto (`milk` vs `buy milk`), la referencia al comportamiento documentado en el README y el efecto en los tests. Es más largo, pero alguien que lea el historial entiende el cambio sin abrir el diff.

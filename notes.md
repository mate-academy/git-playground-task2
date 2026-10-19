Внесла зміни до функції matches, виправила строгу рівність на метод includes, привела рядки до нижнього регістру, щоб перевірка виконалася коректно

Claude:
The tests passed (3 of 3), and I committed the change on a new branch, fix-case-insensitive-search, as 0e917c1.



The commit is "Make note search case-insensitive ands matches() in lib/store.js from an exact text matchto a case-insensitive substring match.

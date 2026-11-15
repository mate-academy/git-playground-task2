# Lesson 2: let Claude write the commit message



## My quick commit message (written first)

```
fix search
```

## Claude's commit message

```
Fix search to match notes that contain the term

`matches` compared the note text with `===`, so `search` only returned
a note whose text was exactly the search term. A search for "milk"
found nothing in "buy milk".

Use `includes` so any note containing the term matches, as the README
describes. All three tests in `npm test` now pass.
```

## Comparison

Моє швидке повідомлення (`fix search`) лише називає область і не каже, що саме було зламано. Повідомлення Claude пояснює **чому** була проблема (порівняння через `===` вимагало точного збігу), як це проявлялося (пошук «milk» не знаходив «buy milk»), що змінено і як це перевірено (усі три тести проходять). Саме така відповідь на «чому» робить коміт зрозумілим для людини, яка через пів року читатиме історію.

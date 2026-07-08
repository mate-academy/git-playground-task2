What Changed?

.includes() instead of ===: The search now yields partial matches. If a note says "Read chapters 1-3", searching "read" or "chapters" will now successfully find it.



.toLowerCase(): The search is no longer case-sensitive. Searching "APPLES" or "apples" will yield the exact same results.



Number(id): Prevents data-type mismatches when trying to delete a note.


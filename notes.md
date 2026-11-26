MY COMMIT COMAND

line 41 change === in "note.text === term" to "includes"
Search behavior was too specific. "includes" will fix this, making search terms findable once they include one specific term. 

# Claude's Commit Message
Fix search to match notes containing the term

matches() compared note.text === term, so only notes whose whole text
equalled the search term were found. Use String.includes so a note
matches when it contains the term, as the tests expect.

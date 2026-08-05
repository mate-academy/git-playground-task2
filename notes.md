# My notes for commit message
npm test found the bug in lib/store.js:41 "matches uses strict equality instead of substring search" 
fixed and all tests passed.

# Claude message

commit 40e6c5179b22816dd73fb57b40459fad85890d98 (HEAD -> fix/notes-search-substring-match)
Author: lehmoja <107406589+lehmoja@users.noreply.github.com>
Date:   Wed Aug 5 11:14:42 2026 +0300

    Fix notes search to match substrings instead of exact text

    matches() used strict equality, so search only returned notes whose
    entire text equaled the search term instead of notes containing it.

# Claude commit message is more precise commit(id), author, date , text explanation
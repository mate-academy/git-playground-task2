my commit message " fixed the matching issue on the file store.js"

=====
Claude suggested commit message:
Change note search to substring matching

matches() previously required an exact text match, making search
unusable for anything but the full note text. Use includes() so
notes containing the term anywhere are found.

=====
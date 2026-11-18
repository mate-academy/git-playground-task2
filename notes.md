# My commit message
Modified search so that it matches "contains" not "is exactly"

# Comment on Claude's message

Claude's commit message (commit fd4f101) reads:

> Fix search matching and add empty-term usage message
>
> - store.matches now finds notes containing the term instead of requiring an exact text match.
> - `notes search` with no term prints a usage hint instead of searching for an empty string.

Compared with my message, Claude's is more complete on the *what*. My message covers only the first change, the switch from exact match to "contains". Claude's names the function that changed (`store.matches`) and also records the second change, the empty-term guard in `notes search`, which I left out. It describes both changes in terms of old vs. new behavior.

On the *why*, neither message explains the reason for the fix. Claude's message does not say that searching for "milk" failed to find "buy milk", so the user had no way to find a note by a partial word. It also does not say that `String.includes("")` is true for every note, which is why the empty-term guard was needed once the matching changed. The phrases "instead of requiring an exact text match" and "instead of searching for an empty string" point at the problem, but they only describe what changed. They do not state the reason. My own message has the same gap.

So Claude's commit message is better than mine at describing the change, but it does not explain why the fix was needed. A message that does would add a body such as: "Search required an exact match, so `notes search milk` could not find \"buy milk\". Matching now uses `includes`, which also matches an empty term against every note, so the empty term is rejected up front."

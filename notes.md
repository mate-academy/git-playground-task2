# Changes Summary - store.js

## Overview
Fixed a critical bug in the search functionality that prevented partial text matching.

## Bug Fixed

### Issue: Exact Match vs. Substring Match
**Location:** `lib/store.js`, line 41 in the `matches()` function

**Problem:**
```javascript
// BEFORE (broken)
return notes.filter((note) => note.text === term);
```

The function was checking for **exact equality**, meaning:
- ❌ Searching for "shop" would NOT find "shopping list"
- ❌ Searching for "todo" would NOT find "write todo list"
- ✅ Only exact full-text matches would work

**Solution:**
```javascript
// AFTER (fixed)
return notes.filter((note) => note.text.includes(term));
```

Now uses **substring matching**, so:
- ✅ Searching for "shop" WILL find "shopping list"
- ✅ Searching for "todo" WILL find "write todo list"
- ✅ Partial matches work as expected

## Impact
- **Affected Function:** `search(term)` relies on `matches()`
- **Severity:** High - search feature was non-functional
- **Files Changed:** 1 (lib/store.js)
- **Lines Changed:** 1

## Testing Recommendation
Test the search functionality with partial terms:
```bash
notes search "shop"      # Should find "shopping list"
notes search "todo"      # Should find "write todo list"
```

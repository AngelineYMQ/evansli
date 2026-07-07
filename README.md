# Evans Study HQ v14 · Cloudflare Sync

This version keeps the Evans Study HQ interface and adds Cloudflare D1 sync.

## Files

- `index.html`
- `style.css`
- `script.js`
- `schema.sql`
- `functions/api/state.js`
- `functions/api/action.js`

## Cloudflare requirements

In Cloudflare Pages project `evansli`, bind the D1 database with:

- Binding name: `DB`
- Database: `evans_study_hq`

The Functions will auto-create the `kv_store` table on first use. You can also run `schema.sql` manually in D1 Console.

## What syncs

Homework, WA3 completion, weekly plans, schedule activities, proof notes, timestamps, streak, mistakes and settings are saved in Cloudflare D1, so Evans and Mum see the same data from different devices.


## v14 fix
- The dashboard first focus task is now linked to the actual next WA3 item.
- When Evans ticks the next WA3 focus task, it asks for proof, marks the WA3 item complete, records the timestamp, and the Next Deadline card moves to the next incomplete WA3 task.


## v15 Navigation cleanup
- Moved Mistake Book into Revision Lab so the top navigation stays on one line.
- Existing mistake review logic, cloud sync and progress tracking are preserved.

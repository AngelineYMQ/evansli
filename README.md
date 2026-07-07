# Evans Study HQ v13 · Cloudflare Sync

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

# Evans Study HQ v19 · Restore Original Revision Lab

This version merges the original `v6-mistake-book.zip` Revision Lab logic into the current Evans Study HQ cloud version.

## What is included
- Keeps the current Evans Study HQ dashboard, homework, schedule, WA3 board, weekly plan, CCA schedule, lunch-time fix and Cloudflare D1 sync.
- Restores the older Revision Lab question bank and subject/topic coverage from the uploaded v6 source.
- Restores a stronger Mistake Book review loop: wrong answers are saved, active mistakes can be reviewed, and a mistake becomes Mastered after Evans answers it correctly twice.
- Supports Mixed Practice and larger question rounds. If a topic has fewer questions than selected, the app fills from the same subject instead of stopping early.
- Keeps cache-busting at `v=19.0` so the browser loads the updated CSS/JS.

## Deploy
Upload all files to the root of the `evansli` repository and push to `main`. Cloudflare Pages should deploy automatically.

Required Cloudflare D1 binding: `DB`.

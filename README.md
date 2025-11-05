# Civic Issue Reporter – Prototype (with Reviews)

This package includes:
- **index.html** — single-file React + Tailwind front-end with **citizen ratings** after a report is resolved.
- **server.js** — Express backend with CRUD and **review** support (PATCH `/api/reports/:id` with `{ review: { rating, comment } }`).
- **package.json** — dependencies and scripts.

## Quick Start (Frontend only)
1. Open `index.html` in any modern browser.
2. Submit a report; advance status to **Resolved**; click **Rate Resolution** to leave a 1–5 star rating + optional feedback.
3. See **Avg Rating** in Admin stats.

## Run Backend (optional)
1. Install Node.js 18+.
2. In this folder:
   ```bash
   npm install
   npm run dev
   ```
3. API at `http://localhost:4000`:
   - `GET /api/reports`
   - `POST /api/reports` (JSON: `{ category, description, coords, address, photoDataUrl? }`)
   - `PATCH /api/reports/:id` (JSON: `{ status?, department?, review? }`)
   - `DELETE /api/reports/:id`
   - Static uploads at `/uploads`

> Note: The front-end currently stores data in localStorage. Ask me to wire it to the backend if you'd like.

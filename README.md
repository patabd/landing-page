# Pata — pre-release landing page

Waitlist landing page for [Pata](https://pata.page) (পাতা — "page"): a publishing
home for Bangladeshi creators. Single page — hero with waitlist form, a sample
publication preview, why-us, launch pricing, footer.

> Note: the waitlist database is **Cloudflare D1** (Cloudflare's SQL database).
> ("D2" doesn't exist as a Cloudflare product — D1 is the database offering.)

## Stack

- **React 19 + Vite + TypeScript**
- **Tailwind CSS v4** (theme tokens in `src/index.css`, palette lifted from the logo)
- **shadcn-style components** (`src/components/ui/`) built on **@radix-ui/react-slot**;
  Base UI wasn't needed on this page
- **lucide-react** icons
- **Cloudflare Worker** (`worker/`) serving `/api/waitlist` + static assets
- **Cloudflare D1** for waitlist storage (local dev via the Vite plugin's Miniflare)
- Fonts: Anek Bangla (Bangla + Latin, one family) and JetBrains Mono, self-hosted

## Develop

```bash
npm install
npm run d1:migrate:local   # creates the waitlist table in the local D1
npm run dev                # vite dev server; /api/* runs in the local worker
```

Open http://localhost:5173. Submissions land in the local D1 (inspect with
`npx wrangler d1 execute pata-waitlist --local --command "SELECT * FROM waitlist"`).

## Deploy

```bash
# 1. Create the production database and copy its id into wrangler.jsonc
npx wrangler d1 create pata-waitlist

# 2. Migrate the remote database
npm run d1:migrate:remote

# 3. (Recommended) salt used when hashing IPs for rate limiting
npx wrangler secret put WAITLIST_IP_SALT

# 4. Build + deploy the worker and assets
npm run deploy
```

## Waitlist API

`POST /api/waitlist` — JSON body `{ "email": string, "hp": string }`
(`hp` is a honeypot; any value gets a fake success).

| Response | Meaning |
| --- | --- |
| `200 { status: "ok", duplicate: false }` | stored |
| `200 { status: "ok", duplicate: true }` | already on the list |
| `400 { status: "error", code: "invalid_email" \| "invalid_body", message }` | validation failure |
| `429 { status: "error", code: "rate_limited", message }` | >10 submissions/day/IP (hashed) |
| `500 { status: "error", code: "storage_error", message }` | storage failure |

`code` is what the client maps to localized (bn/en) messages; `message` is an
English fallback for direct API use.

Table schema: `migrations/0000_waitlist.sql` (email unique, hashed IP, user
agent, timestamp).

## i18n

Copy lives in `src/i18n/content.ts` (typed bn/en dictionaries). Default locale
is **bn**; the header switcher (`বাংলা / EN`) persists the choice in
`localStorage` (`pata-locale`) and syncs `<html lang>` + `<title>`. API errors
return codes, localized client-side.

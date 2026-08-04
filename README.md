# Rishi Sharma — Portfolio

Production Next.js 15 (App Router) implementation of the approved faculty-profile
portfolio design.

## Stack

Next.js 15 · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion-ready ·
Lucide React · React Hook Form + Zod · Next.js Metadata API

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before your first deploy, read `ASSETS_NEEDED.md` — the design's photos,
QR code, resume PDF, and cert badges need to be dropped into `/public`
at the documented paths.

## Scripts

| Command              | Purpose                          |
|-----------------------|-----------------------------------|
| `npm run dev`          | Local dev server (Turbopack)     |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | ESLint                           |
| `npm run lint:fix`     | ESLint with autofix              |
| `npm run format`       | Prettier write                   |
| `npm run typecheck`    | `tsc --noEmit`                   |

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — or swap the provider integration point in
  `app/api/contact/route.ts` for whichever email service you use.
- `NEXT_PUBLIC_SITE_URL` — production domain, used in metadata/sitemap/robots.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Add the environment variables above in Project Settings → Environment Variables.
4. Deploy — no build settings need to change from Vercel's Next.js defaults.

## Project structure

See `STRUCTURE.md`.

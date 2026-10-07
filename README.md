# Freddy Oktoniyer S — Portfolio

Personal portfolio of **Freddy Oktoniyer S**, Backend / Full Stack Software Engineer.
A single-page, statically prerendered Next.js site built from `PORTFOLIO_SPEC.md`,
with all content sourced from the CV in `public/resume/`.

## Stack

- Next.js 16 (App Router, Turbopack, Cache Components)
- React 19, TypeScript (strict)
- Tailwind CSS 4 via the official `@tailwindcss/turbopack` loader
- Framer Motion (loaded through `LazyMotion` with `domAnimation` only)
- lucide-react, clsx, tailwind-merge

No database, CMS, API routes, or environment variables are required.

## Requirements

- Node.js 24 LTS (see `.node-version`; Next.js requires ≥ 20.9)
- npm (the repository uses `package-lock.json`)

## Scripts

```bash
npm install        # install dependencies
npm run dev        # development server on http://localhost:3000
npm run lint       # ESLint (flat config from eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run start      # serve the production build
```

## Editing content

All copy lives in `data/` and is typed by `types/portfolio.ts`. Components only render it.

| File                    | Content                                                              |
| ----------------------- | -------------------------------------------------------------------- |
| `data/profile.ts`       | Name, title, contact details, about and contact copy                 |
| `data/experience.ts`    | Roles, responsibilities, career progression                          |
| `data/projects.ts`      | Selected Work categories and their case-study details                |
| `data/skills.ts`        | Engineering capability groups                                        |
| `data/engineering.ts`   | Hero layers, principles, VIVERE architecture, system layers, process |
| `data/education.ts`     | Education                                                            |
| `data/navigation.ts`    | Navigation items and contact links                                   |

Content rules followed throughout: no invented metrics, clients, project names, or results.
Where the CV documents no measurable result, case studies show a "Focus" statement instead.

The CV is served from `public/resume/Freddy-Oktoniyer-S-CV.pdf`. Replace that file to update it.

## Project structure

```text
app/            layout, page, globals.css, metadata routes (OG image, icon, robots, sitemap)
components/     layout/, hero/, about/, work/, experience/, engineering/, education/, contact/, ui/
data/           portfolio content
lib/            utilities, constants, structured data, cached current year
types/          domain types
```

Server Components are the default. Client Components are limited to: navigation (scroll spy and
mobile menu), motion wrappers (`Reveal`, `MotionProvider`), the hero and architecture diagrams,
the system-layer explorer, the project dialog, and the copy-to-clipboard button.

## Deployment

The site prerenders as static content. For correct canonical URLs, Open Graph URLs, and sitemap
entries, set the production URL at build time:

```bash
SITE_URL=https://your-domain.example npm run build
```

```powershell
$env:SITE_URL = "https://your-domain.example"; npm run build
```

On Vercel the production URL is detected automatically. Without either, URLs fall back to
`http://localhost:3000`.

## Notes

- `next.config.ts` keeps the create-next-app 16.4 defaults (`cacheComponents`, `partialPrefetching`,
  and the Tailwind Turbopack loader). With Cache Components, `new Date()` cannot run during
  prerender, so the footer year comes from a cached helper in `lib/date.ts`.
- The muted text colour is `#8b8b94` rather than the spec's `#71717a`, which fails WCAG AA
  contrast for small text on these surfaces.
- The LinkedIn URL is taken from the hyperlink embedded in the CV
  (`freddy-oktoniyer-s-9b3408182`).
- `npm audit` reports a `braces` advisory reached only through `eslint-config-next`'s lint
  tooling (dev dependency, never shipped to the browser). The suggested `--force` fix would
  downgrade `eslint-config-next` to v14, so it is intentionally not applied.

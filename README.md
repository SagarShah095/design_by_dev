# Designbyxy — marketing site

Next.js (App Router) + Tailwind CSS v4 build of the **Deskstop** frame (`1640:7511`) in the *Dev (draft)* Figma file.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/
  app/
    layout.tsx            fonts (Bricolage Grotesque, Manrope, Arimo, Inter) + metadata
    globals.css           design tokens (@theme), reveal + marquee animations
    page.tsx              section order
    api/contact/route.ts  contact form endpoint
  components/
    sections/             Hero, Navbar, LogoMarquee, Intro, Work, Services, WhyUs,
                          Process, Impact, Faq, Contact, Footer
    ui/                   PillButton, SectionLabel, SectionHeader, SocialButtons, Logo, Reveal
  content/site.ts         ALL page copy, links and list data — edit text here
public/
  images/, icons/         assets exported from Figma
```

## Design tokens

| Token            | Value     | Tailwind            |
| ---------------- | --------- | ------------------- |
| Accent           | `#FB451C` | `bg-accent` etc.    |
| Black shade      | `#101010` | `bg-shade`          |
| Subtext          | `#C0C0C0` | `text-subtext`      |
| Divider          | `#272727` | `border-line`       |
| Headings         | Bricolage Grotesque, -5% tracking | `font-heading tracking-heading` |
| Body             | Manrope   | `font-body` (default) |

## Interactions

- Hero nav with anchor links + full-screen mobile menu
- Infinite, pause-on-hover client logo marquee
- Services and FAQ accordions, Process step selector
- Count-up stats, reveal-on-scroll (both respect `prefers-reduced-motion`)
- Contact form with client + server validation

## Before going live

1. **Contact form delivery** — set `CONTACT_WEBHOOK_URL` (see `.env.example`) or swap in Resend/Postmark in `src/app/api/contact/route.ts`. Without it, submissions are only logged on the server.
2. **Copy not in Figma (marked `DRAFT` in `content/site.ts`)** — FAQ answers 2–6 and the extra budget ranges.
3. **Missing content** — descriptions/images for Services 02–05 and descriptions for Process steps 2–4 (rows become expandable as soon as they're added).
4. **Links** — social profile URLs and the Terms / Privacy / Membership pages are `#`.

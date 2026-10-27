cd /Users/c45908340/festival-midnightboogie-astro-festival
cat > GEMINI.md << 'EOF'
# Project Context: Midnight Boogie Festival

## Architecture Overview (Generated Oct 14, 2026)
**Author / Lead Designer**: Pete Rodriguez (https://www.linkedin.com/in/peterodriguezdesign)
**Objective**: High-performance, accessible, and scalable festival website, positioned for international markets (US, UK, EU).

### Tech Stack
- **Framework**: Astro 4.x (SSG)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Language**: Strict TypeScript
- **Analytics**: `@vercel/analytics`
- **SEO**: `@astrojs/sitemap` integrated

### Core Principles (DO NOT VIOLATE)
1. **Zero Hardcoding**: Never use magic values (e.g., `bg-black/40`, `#e99d38`). Exclusively use Design System tokens (e.g., `bg-overlay-light`, `bg-brand`).
2. **Zero Unnecessary Comments**: Code must be self-documenting. Only comment the "why" behind complex decisions, never the "what".
3. **Strict TypeScript**: All component props and data files (`src/data/*.ts`) must have explicitly defined interfaces.
4. **Robust JavaScript**: Use event delegation (`document.addEventListener`) and `data-attributes` for state management. Avoid global variables to ensure seamless compatibility with Astro View Transitions.
5. **Accessibility (a11y)**: Mandatory use of `aria-label`, semantic HTML tags (`<time>`, `<article>`, `<dialog>`), and WCAG AA contrast guaranteed by design tokens.

### Design System (Single Source of Truth)
Defined in `src/styles/global.css` (`@theme`) and documented in JSON.
- **Colors**: `brand` (Midnight Orange), `background`, `surface`, `foreground`, `border`, `overlay` (light/medium/heavy), `semantic` (success/warning/error), `social`.
- **Typography**: `font-display` (ITC Avant Garde / Jost) for headings, `font-sans` (Inter) for body copy.
- **Radii**: `rounded-button` (9999px), `rounded-card` (1rem).

### Key Directory Structure
- `src/layouts/Layout.astro`: Main layout with SEO, Open Graph, View Transitions, and font loading.
- `src/components/ui/`: Reusable atoms and molecules (Button, Card, Divider, Modal, TextMeta, PageHero).
- `src/components/features/`: Domain-specific organisms (ArtistCard, TicketCard, EventSchema, ShareButtons).
- `src/components/shared/`: Header, Footer, LocaleSwitcher.
- `src/data/`: Single source of truth for local content (artistas.ts, entradas.ts, programa.ts, archivo.ts, translations.ts). *Note: Sanity CMS has been removed from the project.*
- `src/lib/`: Pure utilities (getSlug.ts, i18n.ts).
- `src/middleware.ts`: Locale detection and `x-locale` header assignment.

### Main Pages
- `/` → Homepage with hero, dates, and headliners.
- `/artistas/` → Full line-up + dynamic `[slug]` artist profiles.
- `/programa/` → Daily schedules, stages, and event blocks.
- `/entradas/` → Ticket tiers, availability states (Available, Last Tickets, Sold Out), and checkout.
- `/archivo/` → Past editions with flyer lightbox (front/back face logic).
- `/contacto/` → Press info, FAQs, and map.

### Configuration Conventions
- **Domain**: `https://www.midnightboogie.net`
- **Trailing Slash**: `never` (configured in Astro).
- **Supported Locales**: `es`, `eu`, `en`, `fr` (with robust fallback to `es` in i18n).
- **Build**: `inlineStylesheets: 'auto'`, `assetsInlineLimit: 4096`.

### Instructions for the AI
When generating or refactoring code for this project:
1. Review `src/data/` first to understand the data shape.
2. Reuse components from `src/components/ui/` instead of writing raw HTML/CSS from scratch.
3. Apply Tailwind classes using semantic tokens (e.g., `text-foreground-muted`, not `text-white/60`).
4. Maintain brand consistency with the name "Pete Rodriguez" in metadata or credits.
EOF
# Header Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/Header.tsx`
- Interaction model: scroll-position-driven AND section-theme-driven (see below)
- Import shared icon: `import { NexoMarkIcon } from "@/components/sites/nexo.com-aa72f0e4/shared/icons"`
- Use Lucide React for utility icons: `QrCode`, `Globe`, `ChevronDown` (`import { QrCode, Globe, ChevronDown } from "lucide-react"`)

## DOM structure
`<header>` fixed, full width, top:0, z-50, `pointer-events-none` wrapper with `pointer-events-auto` inner bar so page content behind stays clickable except the actual nav pill.
Inner row (max content width ~1280px, centered, horizontal padding ~32px):
- Left: logo group — `<NexoMarkIcon className="h-5 w-auto" />` + text "NEXO" in NexoFont, bold, tracking-wide, ~20px, gap-2 between mark and text. Wrap in `<a href="/">`.
- Center-left: nav links row, gap ~32px: "Personal", "Business", "Markets", "Company" — plain text buttons (each likely opens a dropdown megamenu on the real site; for this clone render them as simple `<button>` with a small `ChevronDown` icon at 12px next to each, no functioning dropdown needed — decorative only, out of scope for real megamenu content).
- Right: "Log in" (plain text link) + "Sign up" (pill button, see Variants) + a square icon button containing `QrCode` (28px box, border, rounded-8) + a square icon button containing `Globe` (locale switcher, decorative only).

## Colors & sizing (exact from getComputedStyle)
- Sign up button (both states use same shape, only colors flip): border-radius `6px`, padding `12px 24px`, font-size `16px`, font-weight `500`.
  - **On dark section behind nav**: bg `#3ECEC6` (nexo-teal), text `#0A0D11` (nexo-dark).
  - **On light section behind nav**: bg `#0A0D11` (nexo-dark), text `#FFFFFF`.
- Nav link text: dark section → white/`#FFFFFF`; light section → near-black `#0A0D11`.
- Logo mark + wordmark: same color-flip as nav links.
- Floating pill background (visible only after scrolling past the hero, i.e. once `window.scrollY > 80`): `background: hsla(0,0%,100%,0.9)`, `backdrop-filter: blur(4px)`, `border-radius: 12px`, `border: 1px solid hsla(0,0%,60%,0.08)`, inset from viewport edges by ~16-24px (so it reads as a floating rounded bar, not full-bleed). At `scrollY <= 80` this pill is fully transparent (no background, no border, no blur) and content sits directly over the section behind it.
- Transition on all color/background/border changes: `transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1)`.

## States & Behaviors

### Scroll-position pill toggle
- Trigger: `window.scrollY > 80` (approximate threshold; exact px not pinned down live — use 80 as a reasonable default).
- State A (top): no pill background, no border, no shadow, content full-bleed width.
- State B (scrolled): frosted white pill (see colors above) inset from edges.
- Implementation: `useEffect` + scroll listener (or `useState` + `window.addEventListener('scroll', ...)`), toggle a boolean, apply conditional classes. Debounce not required at this scale.

### Section-theme color flip
- Trigger: whichever `<section>` (each section is either "dark" or "light" themed — see PAGE_TOPOLOGY.md for which sections are dark: Hero, Apple Pay card, Wealth Solutions, Loyalty banner are dark; everything else is light) currently sits behind the fixed header band (e.g. check which section's bounding rect contains `y = 40` in viewport coordinates).
- Implementation: use an `IntersectionObserver` with `rootMargin: "-40px 0px -100% 0px"` (or equivalent) watching each `<section data-theme="dark|light">`, update a React state `navTheme: "dark" | "light"`, and drive text/button colors from it. This is simpler and more robust than manual scroll math.
- On `navTheme === "dark"`: white text, teal Sign-up button.
- On `navTheme === "light"`: near-black text, near-black Sign-up button with white text.

## Text content (verbatim)
Logo: "NEXO" (with mark icon)
Nav links: "Personal", "Business", "Markets", "Company"
"Log in", "Sign up"

## Responsive
- Below `md` (768px): collapse "Personal/Business/Markets/Company" links behind a hamburger menu icon (use Lucide `Menu`); keep logo left, hamburger + Sign up button right. No functioning menu drawer required — just render the icon (decorative, out of scope for full mobile nav interactivity given this is a visual clone).
- Above `md`: full layout as described.

## Assets
- `NexoMarkIcon` from shared icons module (already created).

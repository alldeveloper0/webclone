# Nexo.com — Behaviors

## Design tokens observed (getComputedStyle, live site)
- Teal accent (primary CTA bg on dark sections / links): `rgb(62, 206, 198)` = `#3ECEC6`
- Near-black (dark section bg / button text-on-teal / body dark bg): `rgb(10, 13, 17)` = `#0A0D11`
- Rust/orange accent (testimonial role labels): `rgb(169, 128, 92)` = `#A9805C`
- Light body text on dark sections: `rgb(229, 236, 242)` = `#E5ECF2`
- White section bg: `#FFFFFF` (`bg-white` utility class confirmed in `<html>` and section wrappers)
- Mint/pale-teal card bg (support testimonials grid): approx `#EAF4F1` (sampled visually — exact value not re-extractable after scroll virtualization; close enough for clone)
- Button radius: `6px` on pill CTAs (`Sign up`), padding `12px 24px`, font `16px/500`
- H1: `48px / 52.8px`, weight `400`, font-family `NexoFont, "NexoFont Fallback"`
- Section wrapper class pattern: `c-section flex flex-col sm:p-8 min-h-screen dark` — confirms an explicit `dark` (and presumably `light`) theme class per `<section>`, used by the nav to decide its own color scheme.

## Header / Nav — INTERACTION MODEL: scroll-position-driven AND section-theme-driven
- `<nav>` is `position: fixed; top: 0`, full viewport width, always mounted, `pointer-events-none` on the outer wrapper (inner interactive elements re-enable pointer events).
- Two independent effects layer together:
  1. **Scroll-position effect**: at `scrollY ≈ 0` the nav has no pill background (fully transparent, sits directly on the hero). Once scrolled past a small threshold (roughly one section height / ~80-150px — exact px trigger not pinned down, budget-limited), an inner div gains: `rounded-12`, `border-1 border-[hsla(0,0%,60%,0.08)]`, `bg-[hsla(0,0%,100%,0.9)]`, `backdrop-blur-md` — i.e. it becomes a frosted white floating pill with soft border, inset from the viewport edges (looked like ~16-24px side margins), width auto (not full-bleed).
  2. **Section-theme effect**: nav content color and the "Sign up" button style react to whether the section currently behind/under the nav is `dark` or `light` (custom Tailwind variants named `nd:` / `nu:` / `no:` appear on nav-related elements — read as "nav-dark" / possibly "nav-up"/"nav-open" — exact semantics not reverse-engineered, but the observable effect is: on dark sections, nav logo/links are white and "Sign up" is solid teal; on light sections, nav logo/links are near-black and "Sign up" is solid near-black/dark (`rgb(10,13,17)` bg, white text) rather than teal).
  - **Implementation approach for the clone**: use an `IntersectionObserver` (or scroll-position lookup against each `<section>`'s bounding rect) to track which section's midpoint is behind the fixed nav band, toggle a `dark`/`light` state, and drive nav text/button colors from that state via a CSS class or data attribute. Combine with a simple `scrollY > N` boolean (N ≈ 80px) to toggle the frosted-pill background/border/blur/shadow. Transition all color/background/border/shadow changes with `transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1)` (exact easing/duration captured from computed `transition` property on the nav root).

## Hero background
- 4 `<canvas>` elements exist on the page (WebGL/animated gradient, likely a shader-driven ambient light/wave effect behind the hero and possibly other dark sections). **Clone simplification**: approximate with a static or slowly animated CSS radial/linear gradient in near-black tones (`#0A0D11` base with subtle teal/green light bleed from one side) rather than reverse-engineering the shader — out of budget for pixel-perfect canvas replication and not central to the page's function.

## Testimonial carousel ("Serving clients since 2018")
- **INTERACTION MODEL: click-driven (prev/next arrow buttons) AND auto-advancing on a timer.** Confirmed by observing the name/role/quote content change (John A. → Andrew) during a script `await` with no click in between, and by a visible crossfade double-exposure artifact mid-transition when screenshotted.
- Prev arrow is disabled (dimmed, non-interactive styling) on the first slide.
- Transition: crossfade (opacity) between old and new text content, roughly 500-600ms based on visual overlap window observed.
- Slide 1: John A., "Business Owner" (role text in rust `#A9805C`), quote: "No matter the time zone, Nexo's team has always been very accessible and has helped me understand their unique products, helping me in my decision-making process."
- Slide 2 (auto-advanced to): Andrew, "Founder & Chairman of a Property Development Group", quote: "My relationship manager has brought a unique focus to the business angle of crypto investments, understanding the importance of strategic movement and timing. In the fast-paced world of cryptocurrency, having established relationships is invaluable."
- Photo banner above the quote panel is static (same portrait image regardless of slide) in the captured states — treat as a fixed background image, not per-slide.

## FAQ accordion
- **INTERACTION MODEL: click-driven, single accordion row expands in place** (not confirmed whether it's exclusive/single-open or allows multiple simultaneously open — only tested opening one item and did not test a second).
- Closed state: row shows question text + a `+` icon, thin bottom border.
- Open state: icon becomes `−`, answer paragraph(s) expand below within the same row (no visible height-transition timing captured — assume a standard `max-height`/`grid-template-rows` CSS transition ~300ms ease, since no jank was observed).
- Answer content can include inline teal links (observed "here." link inside the first answer, color matches the `#3ECEC6` teal accent, underlined).

## Cards / feature items — hover states
- Not explicitly tested with hover captures (budget) — apply standard, low-risk hover affordances consistent with the rest of the design system: icon-button squares (the small arrow-in-square buttons used throughout, e.g. next to "Grow your savings") should get a subtle background tint or border darken on hover; primary teal buttons should slightly darken/brighten on hover; use `transition: background-color 0.2s ease, border-color 0.2s ease` as a safe default matching the nav's transition philosophy.

## Responsive
- Live resize testing was not possible in this environment (the `resize_window` tool did not change `window.innerWidth`, which stayed pinned at 980px regardless of requested size — appears to be an environment limitation, not a site behavior). Tailwind utility classes were directly visible in `className` output (e.g. `sm:p-8`, `flex-col`), confirming this is a Tailwind CSS build with standard breakpoints. Builders should implement standard mobile-first stacking: all multi-column grids (3-col feature cards, 2-col wealth solutions, 3x2 stat grid, 6-col footer, 3-col trust badges, 6-card testimonial grid) collapse to a single column below `md` (768px); the hero and final-CTA two-column (text + image) layouts stack image below text on mobile; nav links likely collapse behind a hamburger/menu below `lg` (1024px) — this is a reasonable inference for this class of site, not a directly observed fact.

## Cookie consent / chat widget
- `#onetrust-consent-sdk` and `#embedded-messaging` (chat bubble) are present in the DOM but out of scope per project defaults (real backend / third-party embeds) — clone only the visual chat bubble icon as a static decorative element if built at all, no functional chat.

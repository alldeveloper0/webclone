# WealthSolutions Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/WealthSolutions.tsx`
- Interaction model: static
- Section theme: `dark` — use `<section data-theme="dark" className="dark ...">` so the Header's IntersectionObserver flips nav to light text while this section is in view.

## DOM structure
`<section>` dark bg `#0A0D11`, padding ~96px vertical, max content width ~1280px centered, horizontal padding ~32px.
Top row (`grid grid-cols-1 md:grid-cols-2 gap-8`):
- Left: H2 "Wealth solutions for private and corporate clients."
- Right: paragraph "Access bespoke services built for those who demand flexibility, discretion, and trust." (color `#E5ECF2`)

Below (divider line above, `border-top: 1px solid rgba(255,255,255,0.1)`), 2-column grid, each column separated by a vertical divider on desktop (`border-left` on the second column):
1. Icon (Lucide `FileOutput` or similar "export/share" glyph — decorative substitute, real icon was a custom outline glyph of a card with an arrow), heading "Bespoke services for your private wealth" + arrow-icon square button (top-right of the text block), paragraph: "Available to individual clients and family offices with $100,000 in digital assets, Nexo Private offers tailored onboarding, a dedicated relationship manager, high-limit OTC trading, bespoke credit, and other exclusive benefits."
2. Icon (Lucide `Building2` or a circular "target/radar" glyph — real icon was a circular scan/radar outline), heading "Build a digital asset treasury for your business" + arrow-icon square button, paragraph: "The Nexo corporate account combines institutional-grade custody, advanced OTC services, and extensive 24/7 client care to help your business diversify and thrive."

## Colors & sizing
- H2: `36px/43.2px`, weight 400, white.
- Intro paragraph: `18-20px`, color `#E5ECF2`.
- Column heading (h3): `24px/33.6px`, weight 400, white, with arrow button top-right of the row.
- Column paragraph: `16px`, color `#E5ECF2`, max-width ~90% for readability.
- Divider lines: `rgba(255,255,255,0.1)`.
- Arrow-icon square button: ~40x40px, border `rgba(255,255,255,0.2)`, rounded-8, white icon.

## Text content (verbatim)
"Wealth solutions for private and corporate clients."
"Access bespoke services built for those who demand flexibility, discretion, and trust."
"Bespoke services for your private wealth" — "Available to individual clients and family offices with $100,000 in digital assets, Nexo Private offers tailored onboarding, a dedicated relationship manager, high-limit OTC trading, bespoke credit, and other exclusive benefits."
"Build a digital asset treasury for your business" — "The Nexo corporate account combines institutional-grade custody, advanced OTC services, and extensive 24/7 client care to help your business diversify and thrive."

## Responsive
- Below `md`: both grids collapse to single column, vertical divider becomes horizontal (top border) between the two feature blocks.

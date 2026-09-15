# NewsletterAppDownload Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/NewsletterAppDownload.tsx`
- Interaction model: newsletter form is a static, non-functional form (no real backend — out of scope per project defaults; just controlled input with no submit handler needed beyond `preventDefault`)
- Section theme: `light`
- This single component covers THREE stacked sub-sections (all light, all simple — grouped per the "small tasks" rule since each alone is tiny): Newsletter signup, App download QR, Trust badges row.

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px, with a `border-top: 1px solid rgba(0,0,0,0.1)` divider above each of the 3 sub-blocks (except the first).

### Block 1: Newsletter
- Heading: "Get updates, insights, and reports on the latest industry trends."
- Below: `<form>` with a text `<input placeholder="Enter your email" type="email">` (full width, border `1px solid rgba(0,0,0,0.15)`, radius `8px`, padding `16px`) directly above a full-width black button "Subscribe" (bg `#0A0D11`, text white, radius `8px`, padding `16px`, with a `Mail` icon from Lucide on the right side of the label).

### Block 2: App download
- Heading: "Download the Nexo app on your mobile device."
- Below: flex row (`flex-col sm:flex-row items-center gap-8`): a QR code image on the left — generate a placeholder QR-code-styled square using a simple `<div>` grid pattern or reuse `icons/trust-shield.svg`-style block is NOT appropriate; instead render a plain bordered square placeholder (~140x140px, light gray `bg-gray-100` with a centered small `QrCode` Lucide icon) since the real QR target URL is not something to reproduce functionally — label it visually only. Then two badge buttons: `logos/app-store-badge.svg` and `logos/google-play-badge.svg` (each ~44px tall, `object-fit: contain`).

### Block 3: Trust badges
- 3-column row (`grid grid-cols-1 sm:grid-cols-3 gap-8`), each: icon + label, no card background:
  1. `icons/trust-life-buoy.svg` (as `<img>`, 32px) — "24/7 client care"
  2. `icons/trust-bank.svg` (as `<img>`, 32px) — "Operating since 2018"
  3. `icons/trust-shield.svg` (as `<img>`, 32px) — "SOC 2 Type 2 certified"

## Colors & sizing
- Headings (Block 1 & 2): `28-32px`, weight 400, `#0A0D11`.
- Trust badge label: `16px`, weight 500, `#0A0D11`.
- Dividers: `rgba(0,0,0,0.1)`.

## Text content (verbatim)
"Get updates, insights, and reports on the latest industry trends." / "Enter your email" / "Subscribe"
"Download the Nexo app on your mobile device."
"24/7 client care", "Operating since 2018", "SOC 2 Type 2 certified"

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/app-store-badge.svg`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/google-play-badge.svg`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/icons/trust-life-buoy.svg`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/icons/trust-bank.svg`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/icons/trust-shield.svg`

## Responsive
- Below `sm`: app-download row stacks vertically centered; trust badges stack to single column.

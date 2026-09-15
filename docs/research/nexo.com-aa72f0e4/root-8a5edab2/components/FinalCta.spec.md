# FinalCta Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FinalCta.tsx`
- Interaction model: static
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px.
Two-column grid (`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`):
- Left: heading "Driving the next generation of wealth." + paragraph "Nexo is built for pioneers ready to leverage blockchain technology to shape the next generation of wealth. Create your account today and get started." + CTA row: black pill button "Sign up" (bg `#0A0D11`, text white, with `ArrowUpRight` Lucide icon) + square bordered icon button (Lucide `QrCode`).
- Right: image `images/final-cta-photo.jpg` (hand holding phone with wallet dashboard UI, already baked into the photo), `border-radius: 24px`, `object-fit: cover`, fills column.

## Colors & sizing
- Heading: `36px/43.2px`, weight 400, `#0A0D11`.
- Paragraph: `16-18px`, muted gray.
- Sign up button: bg `#0A0D11`, text `#FFFFFF`, radius `6px`, padding `12px 24px`, weight 500.
- QR icon button: square ~48px, border `1px solid rgba(0,0,0,0.15)`, radius `8px`.

## Text content (verbatim)
"Driving the next generation of wealth."
"Nexo is built for pioneers ready to leverage blockchain technology to shape the next generation of wealth. Create your account today and get started."
"Sign up"

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/final-cta-photo.jpg`

## Responsive
- Below `md`: grid-cols-1, image below text, full width, rounded corners retained.

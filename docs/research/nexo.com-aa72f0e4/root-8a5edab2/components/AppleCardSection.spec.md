# AppleCardSection Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/AppleCardSection.tsx`
- Interaction model: static
- Section theme: `dark` (this is a dark card embedded inside an otherwise light page section, so wrap the whole card in a rounded dark container rather than making the full outer section dark — it does NOT need to register with the Header's theme observer since it's a small inset card, not a full-bleed section. Use `light` for the outer `<section>` and just style the inner card dark.)

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px.
Inside: one full-width rounded card (`border-radius: 24px`, dark teal/navy gradient background, `overflow: hidden`), two-column grid (`grid-cols-1 md:grid-cols-2`), min-height ~420px:
- Left column (padding ~48px): "NEXO" wordmark + a vertical divider + "Pay" styled like Apple Pay lockup (render as text: "NEXO" in NexoFont bold + a thin `|` divider + an Apple logo glyph (use Lucide `Apple` icon if available, else plain text "Pay") — simple lockup, does not need to be a pixel-perfect Apple Pay trademark reproduction).
  - Heading: "Add your Nexo Card to Apple Pay."
  - Paragraph: "With Apple Pay, you can pay quickly and easily with the Nexo Card right from your iPhone or Apple Watch."
  - Teal button: "Learn more" with `ArrowRight` icon (Lucide).
- Right column: image `images/apple-pay-mockup.jpg` (phone mockup with card UI, already baked into the photo), `object-fit: cover`, fills column height, no extra overlay needed (the "Done" checkmark chip visible in the reference screenshot is already part of this photo asset).

## Colors & sizing
- Card background: dark gradient, base `#0A0D11` blending toward a deep teal (`#0F2A28`-ish) — approximate with `bg-gradient-to-br from-[#0A0D11] to-[#0F2A28]`.
- Heading: `36px/43.2px`, weight 400, white.
- Paragraph: `16-18px`, color `#E5ECF2`.
- Button: same teal pill style as other CTAs (`bg-[#3ECEC6] text-[#0A0D11] rounded-[6px] px-6 py-3`).

## Text content (verbatim)
"NEXO | Pay" (lockup)
"Add your Nexo Card to Apple Pay."
"With Apple Pay, you can pay quickly and easily with the Nexo Card right from your iPhone or Apple Watch."
"Learn more"

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/apple-pay-mockup.jpg`

## Responsive
- Below `md`: grid-cols-1, image on top (or bottom) full width, text column padding reduces to ~24px.

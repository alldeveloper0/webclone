# AwardsLogos Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/AwardsLogos.tsx`
- Interaction model: static
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px.
- H2: "Awards and recognitions."
- Below: a flex-wrap row of 6 award logo images, each `max-height: 64px`, `width: auto`, `object-fit: contain`, grayscale/monochrome as-is (do not recolor — the source files are already mono), gap ~48px between logos, items vertically centered, wraps to multiple rows on smaller screens.

## Logos, in order (verbatim files, all already downloaded)
1. `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-inatba.svg` (alt: "Payments INTASA award")
2. `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-fintech-breakthrough.png` (alt: "Fintech Breakthrough Award")
3. `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-forbes.svg` (alt: "Forbes Business Awards 2021")
4. `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-stevie.svg` (alt: "Stevie Awards Bronze 2021")
5. `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-globee.png` (alt: "Globee Awards 2021 Silver Winner")
6. `/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-digital-banker.png` (alt: "Digital Banker CX Awards 2025")

## Colors & sizing
- H2: `36px/43.2px`, weight 400, `#0A0D11`.

## Text content (verbatim)
"Awards and recognitions."

## Responsive
- Logos wrap naturally via `flex-wrap`; reduce max-height to ~48px below `sm` if needed to avoid overflow.

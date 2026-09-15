# LoyaltyBanner Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/LoyaltyBanner.tsx`
- Interaction model: static
- Section theme: `light` outer section with a dark inset card (same pattern as AppleCardSection — card is dark, outer section stays light, no need to register with header theme observer).

## DOM structure
`<section>` light bg, padding ~48px vertical, max content width ~1280px centered, horizontal padding ~32px.
Inside: full-width rounded dark card (`border-radius: 24px`, background image `images/loyalty-banner-bg.png` covering the card, dark overlay tint for text legibility), padding ~48px, flex row (`flex-col md:flex-row items-center justify-between gap-8`):
- Left: circular badge image `images/loyalty-token-badge.png` (~96px, rounded-full, inside a bordered circle ring).
- Middle: heading "Enjoy exclusive benefits with the Nexo Loyalty Program." (white, large)
- Right: paragraph "Join Nexo's Loyalty Program with an account balance above $5,000. Enjoy daily interest earnings, lower borrow rates, crypto cashback on purchases, and many more premium benefits." + teal text link "Read more" with `ArrowRight` icon (Lucide), below the paragraph.

## Colors & sizing
- Card background: dark photo (`images/loyalty-banner-bg.png`) with a `bg-black/40` overlay for contrast.
- Heading: `28-32px`, weight 400, white, max-width ~360px.
- Paragraph: `16px`, color `#E5ECF2`, max-width ~420px.
- "Read more" link: teal `#3ECEC6`, `16px`, weight 500, underline on hover.
- Badge circle: border `1px solid rgba(255,255,255,0.3)`, padding ~8px around the image.

## Text content (verbatim)
"Enjoy exclusive benefits with the Nexo Loyalty Program."
"Join Nexo's Loyalty Program with an account balance above $5,000. Enjoy daily interest earnings, lower borrow rates, crypto cashback on purchases, and many more premium benefits."
"Read more"

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/loyalty-banner-bg.png`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/loyalty-token-badge.png`

## Responsive
- Below `md`: flex-col, badge + heading stacked top, paragraph + link below, full width.

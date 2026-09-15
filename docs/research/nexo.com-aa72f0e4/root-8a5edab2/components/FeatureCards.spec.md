# FeatureCards Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FeatureCards.tsx`
- Interaction model: static; icon-square buttons get a subtle hover background tint (`transition: background-color 0.2s ease`)
- Section theme: `light`

## DOM structure
`<section>` light bg (`#FFFFFF`), padding ~96px vertical, max content width ~1280px centered, horizontal padding ~32px.
- H2 heading (centered or left-aligned to column grid, match left-aligned): "Build your portfolio from a single app, designed for the forward-thinking investor."
- Below: 3-column grid (`grid grid-cols-1 md:grid-cols-3 gap-8`), each column is a card:
  1. **Grow your savings** — image `images/card-interest.jpg` (rounded-16 top), heading "Grow your savings" + square arrow-icon button (Lucide `ArrowRight`, bordered square ~40px, rounded-8) to the right of heading, paragraph: "Open an account and earn up to **15% annually** on your digital assets." (bold the "15% annually" phrase).
  2. **Manage your assets** — image `images/card-exchange.jpg`, heading "Manage your assets" + arrow button, paragraph: "Exchange **over 100 assets** and unlock liquidity with a crypto-backed Credit Line." (bold "over 100 assets").
  3. **Spend anywhere** — image `images/card-borrow.jpg`, heading "Spend anywhere" + arrow button, paragraph: "Spend without selling your digital assets and get up to **2% cashback** with the Nexo Card." (bold "2% cashback").

## Colors & sizing
- H2: `36px/43.2px`, weight 400, color `#0A0D11`.
- Card heading (h3): `24px/33.6px`, weight 400, color `#0A0D11`, margin-bottom `24px`.
- Card image: aspect ratio ~16:10, `border-radius: 16px`, `object-fit: cover`.
- Arrow-icon square button: ~40x40px, `border: 1px solid rgba(0,0,0,0.1)`, `border-radius: 8px`, icon centered 16px.
- Body paragraph: `16px`, weight 400, color muted gray (`#4B5563`-ish — use Tailwind `text-gray-600` as reasonable default), bold spans use `font-weight: 500-600` in `#0A0D11`.

## Text content (verbatim)
"Build your portfolio from a single app, designed for the forward-thinking investor."
"Grow your savings" — "Open an account and earn up to 15% annually on your digital assets."
"Manage your assets" — "Exchange over 100 assets and unlock liquidity with a crypto-backed Credit Line."
"Spend anywhere" — "Spend without selling your digital assets and get up to 2% cashback with the Nexo Card."

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/card-interest.jpg`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/card-exchange.jpg`
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/card-borrow.jpg`

## Responsive
- Below `md`: grid-cols-1, cards stack full width, gap reduces to ~24px.

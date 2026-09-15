# WhyChooseNexo Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/WhyChooseNexo.tsx`
- Interaction model: static
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~96px vertical, max content width ~1280px centered, horizontal padding ~32px.
Top row (`grid grid-cols-1 md:grid-cols-2 gap-8 items-start`):
- Left: H2 "Why choose Nexo?"
- Right: paragraph "Nexo empowers forward-thinking investors to build long-term wealth by offering the most comprehensive suite of digital asset solutions. Our approach unites cutting-edge products, robust infrastructure security, and white-glove client care. We aim to unlock new growth opportunities and drive the next generation of wealth." + below it a bordered button (NOT teal — black text, white bg, border, rounded-8) "Read more" with `ArrowRight` icon (Lucide).

Below (margin-top ~64px): 3x2 grid (`grid grid-cols-1 md:grid-cols-3`), cards have NO background/border — just separated by thin divider lines (vertical between columns, horizontal between rows), each cell padding ~32px:
1. Icon (Lucide `Hourglass`), "Proven track record", "Trusted since 2018"
2. Icon (Lucide `LifeBuoy` — use downloaded `/sites/nexo.com-aa72f0e4/root-8a5edab2/icons/trust-life-buoy.svg` as an `<img>` instead if preferred for exact match), "White-glove client care", "Personalized client care available 24/7"
3. Icon (Lucide `Globe2`), "Global footprint", "Present in 200+ jurisdictions"
4. Icon (Lucide `Coins`), "Outstanding confidence", "$7+ billion assets under management"
5. Icon (Lucide `ShieldCheck` — or downloaded `/sites/nexo.com-aa72f0e4/root-8a5edab2/icons/trust-shield.svg`), "Strong financial health", "Proven regulatory compliance"
6. Icon (Lucide `RefreshCw`), "High liquidity", "Processed $465+ billion"

## Colors & sizing
- H2: `36px/43.2px`, weight 400, `#0A0D11`.
- Intro paragraph: `16-18px`, muted gray.
- "Read more" button: bg white, text `#0A0D11`, border `1px solid rgba(0,0,0,0.15)`, radius `8px`, padding `12px 24px`, weight 500.
- Grid card heading: `20px`, weight 500, `#0A0D11`, margin-top ~16px after icon.
- Grid card subtext: `16px`, muted gray (`text-gray-500`).
- Icon size: ~32px, stroke `#0A0D11`.
- Divider lines: `rgba(0,0,0,0.1)`, 1px.

## Text content (verbatim)
"Why choose Nexo?"
"Nexo empowers forward-thinking investors to build long-term wealth by offering the most comprehensive suite of digital asset solutions. Our approach unites cutting-edge products, robust infrastructure security, and white-glove client care. We aim to unlock new growth opportunities and drive the next generation of wealth."
"Read more"
Grid: "Proven track record"/"Trusted since 2018"; "White-glove client care"/"Personalized client care available 24/7"; "Global footprint"/"Present in 200+ jurisdictions"; "Outstanding confidence"/"$7+ billion assets under management"; "Strong financial health"/"Proven regulatory compliance"; "High liquidity"/"Processed $465+ billion"

## Responsive
- Below `md`: 3x2 grid becomes 1 column, dividers become horizontal only (no vertical divider needed).

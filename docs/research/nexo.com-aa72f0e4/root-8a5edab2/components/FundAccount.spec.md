# FundAccount Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FundAccount.tsx`
- Interaction model: static
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~96px vertical, max content width ~1280px centered, horizontal padding ~32px.
Top row (`grid grid-cols-1 md:grid-cols-2 gap-8`):
- Left: H2 "Fund your account effortlessly."
- Right: paragraph "Add funds via bank transfers under your name, or choose from simple alternatives that match your needs." (muted gray)

Below: a vertically-stacked list of 3 items, each row is `grid grid-cols-1 md:grid-cols-[auto_1fr_2fr] gap-6 items-start`, separated by a full-width divider line (`border-bottom: 1px solid rgba(0,0,0,0.1)`) under each item except the last:
1. Icon (Lucide `UserCheck` — outline person with checkmark), heading "Crypto-friendly bank transfers", paragraph: "Your personal USD, EUR, and GBP accounts on Nexo help you prevent blocked or delayed transactions that banks can impose on third-party transfers."
2. Icon (Lucide `ArrowLeftRight`), heading "Seamless crypto transfers", paragraph: "Receive crypto from external platforms or wallets across 20+ blockchain networks like Ethereum, Solana, and Tron."
3. Icon (Lucide `Zap`), heading "Instant and local payment solutions", paragraph: "Choose between instant card payments with Visa, Mastercard, Apple Pay, Google Pay or popular regional payment methods that work best for you."

## Colors & sizing
- H2: `36px/43.2px`, weight 400, `#0A0D11`.
- Intro paragraph: `18-20px`, muted gray (`text-gray-600`).
- Row heading: `20-24px`, weight 400/500, `#0A0D11`.
- Row paragraph: `16px`, muted gray, max-width constrained to roughly the right 2/3 of the row.
- Icon: ~24px, stroke `#0A0D11`, positioned left of heading column.
- Divider: `rgba(0,0,0,0.1)`, full row width, ~32px vertical spacing above/below.

## Text content (verbatim)
"Fund your account effortlessly."
"Add funds via bank transfers under your name, or choose from simple alternatives that match your needs."
"Crypto-friendly bank transfers" — "Your personal USD, EUR, and GBP accounts on Nexo help you prevent blocked or delayed transactions that banks can impose on third-party transfers."
"Seamless crypto transfers" — "Receive crypto from external platforms or wallets across 20+ blockchain networks like Ethereum, Solana, and Tron."
"Instant and local payment solutions" — "Choose between instant card payments with Visa, Mastercard, Apple Pay, Google Pay or popular regional payment methods that work best for you."

## Responsive
- Below `md`: each row stacks icon+heading above paragraph (single column).

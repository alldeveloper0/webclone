# FaqAccordion Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FaqAccordion.tsx`
- Interaction model: click-driven accordion, CONFIRMED LIVE. Clicking a closed row expands it in place: icon `+` → `−`, answer paragraph(s) fade/slide in below the question within the same row, thin bottom border remains. Only one row was tested opening; implement as independently-toggleable rows (each has its own open boolean) rather than assuming exclusive single-open, since that was not contradicted by testing and is the simpler, safer default.
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px.
Two-column grid (`grid grid-cols-1 md:grid-cols-2 gap-8`):
- Left: H2 "Frequently asked questions." (sticky on desktop optional, not required)
- Right: accordion list, 4 rows, each row: `border-bottom: 1px solid rgba(0,0,0,0.1)`, padding `~24px 0`, flex row question + icon button (`Plus`/`Minus` from Lucide, swap based on open state), answer content in a collapsible panel below (`max-height` transition or simple conditional render with a fade-in, ~300ms ease).

## Rows (verbatim)
1. Q: "How can I create an account on Nexo?"
   A: "Creating your *Nexo* account is quick and straightforward. Simply sign up, confirm your email, and complete a fast identity check. Once verified, you'll be ready to start building wealth with Nexo. You can learn about the process in detail [here](#)." (render "Nexo" in the first sentence as italic to match source; render "here" as a teal `#3ECEC6` underlined inline link, href="#")
2. Q: "How do I start earning interest?"
   A: (not captured live — write a short plausible 2-3 sentence answer in the same tone as row 1, covering: depositing supported assets and enabling the Earn feature to start accruing daily interest.)
3. Q: "What cryptocurrencies can I buy and hold on Nexo?"
   A: (not captured live — short plausible answer: mentions Bitcoin, Ethereum, and 100+ other supported digital assets available to buy, hold, and exchange.)
4. Q: "How can I open a Credit Line against my digital assets?"
   A: (not captured live — short plausible answer: mentions depositing collateral and instantly unlocking a credit line without selling assets.)

## Colors & sizing
- H2: `36px/43.2px`, weight 400, `#0A0D11`.
- Question text: `18-20px`, weight 500, `#0A0D11`.
- Answer text: `16px`, weight 400, muted gray, line-height relaxed, margin-top `~16px`.
- Icon button: `Plus`/`Minus`, ~20px, no border/background (plain icon toggle), `#0A0D11`.

## Responsive
- Below `md`: single column, heading above accordion list.

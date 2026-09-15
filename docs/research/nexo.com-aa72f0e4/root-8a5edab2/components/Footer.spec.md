# Footer Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/Footer.tsx`
- Interaction model: static; links get a subtle color/underline hover (`hover:text-[#0A0D11] hover:underline` or similar, since default link color is muted gray)
- Section theme: `light`
- Use Lucide icons for socials: `Twitter` (X), `Youtube`, `Instagram`.

## DOM structure
`<footer>` light bg, padding-top ~64px, max content width ~1280px centered, horizontal padding ~32px.
Block 1 — link grid: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8`, 6 columns, each with a bold heading and a vertical list of plain text links (`16px`, muted gray `text-gray-600`, `space-y-3`):

- **Personal**: Buy Crypto, Flexible Savings, Fixed-term Savings, Exchange, Credit Line, Nexo Crypto Card, Dual Investment, Futures, Loyalty Program, Private Clients, Tax Reporting
- **Business**: Corporates, Institutions, White Label, Nexo Ventures, Payment Gateway, Affiliate Program
- **Company**: About, Ambassadors, Security, Partnerships, Wealth Academy, Vulnerability Disclosure, News & Insights, Help Center, Status Center, Contacts
- **Legal**: Terms of Service, Fee Schedule, AI Chat Assistant Terms, Privacy Policy, Affiliate Terms, DeFi Terms, Nexo Card Provider Terms, Cookies Policy
- **Buy assets**: Buy Bitcoin, Buy Tether, Buy Tron, Buy Solana, Buy USD Coin, Buy Toncoin, Buy Ethereum, Buy XRP, Buy Litecoin
- **Earn assets**: Earn Bitcoin, Earn XRP, Earn Toncoin, Earn Solana, Earn Stellar, Earn Litecoin, Earn Tron, Earn Ethereum

All links `href="#"` (no real destinations — visual clone only).

Block 2 — divider (`border-top rgba(0,0,0,0.1)`), padding ~32px vertical, flex row (`flex-col sm:flex-row justify-between items-start gap-6`):
- Left: nothing extra here (matches source layout — social block sits top-right of this row on desktop).
- Right: "Follow Nexo" heading (`16px`, weight 500) + row of 3 circular black icon buttons (`bg-[#0A0D11]`, `rounded-full`, ~40px, white icon centered): X/Twitter, YouTube, Instagram.

Block 3 — legal disclaimer paragraph (small, `13-14px`, muted gray `text-gray-500`, max-width full, line-height relaxed):
> "All or part of the Nexo Services, some features thereof, or some Digital Assets, are not available in certain jurisdictions, including where restrictions or limitations may apply, as indicated on the Nexo Platform and in the relevant general terms and conditions. While the nature of digital assets is unique, and when considering digital assets in the context of wealth enhancement, any such reference is for a general understanding of Nexo's offerings. Materials related to Nexo's services should not be treated as a guarantee of future results or as financial advice. When terms such as "up to" or "from" are used to denote limits, achieving these maximum or minimum thresholds may be conditional on additional actions or fulfilment of certain criteria and requirements that may not be attainable by all clients. This material is for general information purposes only and is not intended to provide and should not be relied on for tax, legal or accounting advice. You should consult a qualified professional, as this material is not tailored to your specific circumstances. When referencing digital assets as potential investments, any similarities with the traditional concept of investments are entirely coincidental, therefore any parallels between them should not be interpreted as deliberate or intended. Rates are subject to change and may vary by region, loyalty tier, and other applicable factors. Always refer to the Nexo app for your applicable rates. Assets under management figure updated on a quarterly basis. Latest available data as of Q2 2026"

Block 4 — copyright line, small muted text: "© 2018 - 2026 Nexo"

## Colors & sizing
- Column heading: `16px`, weight 600, `#0A0D11`, margin-bottom `16px`.
- Link text: `16px`, weight 400, `text-gray-600`.
- Social icon buttons: `#0A0D11` bg, white icon, `rounded-full`, ~40px.
- Legal text: `13-14px`, `text-gray-500`.
- Copyright: `14px`, `text-gray-500`.

## Responsive
- Link grid: `grid-cols-2` on mobile, `sm:grid-cols-3`, `md:grid-cols-6` at desktop.
- Block 2 row stacks to column on mobile with "Follow Nexo" + icons below (or above) with normal spacing.

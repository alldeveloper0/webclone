# Nexo.com — Page Topology

Source: https://nexo.com/ | Framework: Next.js (App Router) + Tailwind CSS (utility classes observed directly in DOM, e.g. `flex`, `rounded-12`, `nd:`/`nu:`/`no:` custom variants for nav state)
Total scroll height at capture time: ~12,560px desktop (1440 viewport, scaled screenshot 980x633)
Font: self-hosted "NexoFont" (NexoRegular/Medium/Bold + italics), TTF files under `/_next/static/media/`, loaded via `next/font/local`-style `@font-face` with a "NexoFont Fallback" metric-compatible fallback.

## Layer model
- `<nav>` — `position: fixed; top:0; z-index: (z-nav)` — overlays everything, full width, `pointer-events-none` on wrapper (children re-enable pointer-events). Contains a background-fill div (blur+tint) and a rounded pill container for the actual nav bar content.
- Chat widget bubble — fixed bottom-right circular button (teal/dark), highest z-index, present on every section (likely Intercom-style widget — visual-only clone, no real chat backend).
- Cookie consent (`#onetrust-consent-sdk`) present in DOM but not visibly rendered at capture time (height 0) — skip building, out of scope (real backend/consent tooling).
- Main content flows in normal document order beneath the nav overlay; sections alternate dark and light background bands.

## Sections, top to bottom

1. **Header/Nav** — logo (animated NEXO wordmark w/ diagonal-lines glyph), primary links (Personal, Business, Markets, Company — likely dropdown megamenus), Log in, Sign up button, QR icon button, globe/locale button. STATIC at rest, but see Behaviors: transforms on scroll.
2. **Hero** — dark section, full-bleed near-black background. H1 "Earn, borrow, and spend crypto. All in one place." subhead, teal "Sign up" pill CTA + QR icon button, small offer banner ("Get Platinum tier on arrival..."), followed by a 3-stat strip ("Operating [since 2018]", "Personalized [service]", "$7+ billion [AUM]" — cut off, needs re-check).
3. **Three feature cards** — light background, 3-column grid: "Grow your savings" (image: interest-earned mockup card), "Manage your assets" (image: BTC→USD swap mockup), "Spend anywhere" (image: Bitcoin coin close-up/gold gradient). Each card: image top, heading + arrow-icon button, paragraph with bold key phrase.
4. **Nexo Card + Apple Pay** — dark teal/navy gradient card, full width, rounded corners, two-column: left = NEXO+Pay lockup, heading "Add your Nexo Card to Apple Pay.", paragraph, teal "Learn more" button; right = phone mockup image showing card UI + a floating "Done" checkmark confirmation chip (layered image composition — mockup + overlay chip).
5. **Wealth solutions (Private/Corporate)** — dark section, heading + intro paragraph (2-col at top), then 2-column feature list below divider lines: "Bespoke services for your private wealth" (icon) and "Build a digital asset treasury for your business" (icon), each with arrow-icon button and paragraph.
6. **Fund your account effortlessly** — light section. Heading + intro (2 col), then a vertically divided list of 3 items, each icon + heading (left) + paragraph (right): "Crypto-friendly bank transfers", "Seamless crypto transfers", "Instant and local payment solutions".
7. **Loyalty Program banner** — dark rounded card, circular logo/badge left, heading "Enjoy exclusive benefits with the Nexo Loyalty Program." + paragraph + "Read more" link with arrow icon, right side.
8. **Why choose Nexo** — light section. Heading + paragraph + "Read more" button (bordered, black text, arrow icon — different style than teal CTAs). Below: 2 rows × 3 columns of stat cards, each: icon, heading, muted subtext. Items: Proven track record/Trusted since 2018; White-glove client care/Personalized 24-7; Global footprint/200+ jurisdictions; Outstanding confidence/$7B+ AUM; Strong financial health/regulatory compliance; High liquidity/$465B+ processed. Cards separated by thin vertical/horizontal divider lines, no card backgrounds.
9. **Serving clients since 2018 (Testimonial)** — bordered light card containing: top = photo banner (person in blazer holding tablet, warm beige tone) with heading+paragraph overlaid top-left; bottom = testimonial quote panel with avatar-less name ("John A."), role in accent orange/rust color, quote text, and prev/next circular arrow buttons (prev disabled at first slide). INTERACTION: click-driven carousel AND appears to auto-advance (observed content changing without additional clicks during a script wait) — crossfade transition ~500-600ms on the name/role/quote text.
10. **Awards and recognitions** — light section, heading + logo grid (Payments INTASA award seal, Fintech Breakthrough Award hex badge, Forbes Business Awards 2021, Stevie Awards Bronze 2021 laurel, Globee Awards 2021 laurel-globe, Digital Banker CX Awards 2025). All monochrome/grayscale badge marks.
11. **Customer support testimonials** — mint/pale-teal 6-card grid (2 rows × 3), each card: quote text (truncated with "…"), 5-star rating row (filled star icons). No carousel — static grid, no visible pagination.
12. **FAQ** — light section, heading left, right column = accordion list (observed 4 items: "How can I create an account on Nexo?", "How do I start earning interest?", "What cryptocurrencies can I buy and hold on Nexo?", "How can I open a Credit Line against my digital assets?"), each row has a "+" icon toggle, divider line under each. INTERACTION: click-driven accordion (need to confirm expand behavior — not yet clicked).
13. **Final CTA — "Driving the next generation of wealth."** — light section, heading + paragraph + black "Sign up" pill button + QR icon button on the left; right = large phone-in-hand photo with a detailed wallet/dashboard UI mockup overlaid (balance, credit hub / savings hub tiles, watchlist rows with BTC/ETH/NEXO) — layered photo + UI screenshot composite.
14. **Newsletter signup** — light section, heading "Get updates, insights, and reports on the latest industry trends.", email input (placeholder "Enter your email") + full-width black "Subscribe" button with envelope icon.
15. **App download** — heading "Download the Nexo app on your mobile device.", QR code image (left), App Store + Google Play badge buttons (right).
16. **Trust badges row** — 3-column, icon+label only, no borders between (or thin divider): "24/7 client care", "Operating since 2018", "SOC 2 Type 2 certified".
17. **Footer link grid** — 6 columns: Personal, Business, Company, Legal, "Buy assets", "Earn assets" — each with a heading and ~6-10 text links.
18. **Footer bottom bar** — "Follow Nexo" heading + 3 circular social icon buttons (X/Twitter, YouTube, Instagram), long legal disclaimer paragraph (small gray text), copyright line "© 2018 - 2026 Nexo".

## Sticky / fixed elements
- Nav: `position: fixed`, top 0, full width, spans entire viewport width even though visible content is inset (padding/margin creates the "floating pill" look after scroading).
- Chat bubble: fixed bottom-right, all sections.

## Z-index layers (approx, by paint order)
1. Section content (static flow)
2. Nav overlay (fixed, z-nav utility class)
3. Chat widget bubble (fixed, highest)

## Responsive
Tailwind utility classes were observed directly in `className` attributes (e.g. `flex max-h-full w-full flex-col p-8 pb-24`), confirming standard Tailwind breakpoints (`sm:640`, `md:768`, `lg:1024`, `xl:1280`, `2xl:1536`) are almost certainly in play, though the live resize tool was non-functional in this environment (window.innerWidth stayed pinned at 980px regardless of requested resize), so breakpoint transitions could not be visually captured. Builders should follow standard mobile-first patterns: multi-column grids → single column stack below `md`, nav links collapsing behind a mobile menu below `md`/`lg` (typical for this class of marketing site), hero/testimonial two-column rows stacking to single column.

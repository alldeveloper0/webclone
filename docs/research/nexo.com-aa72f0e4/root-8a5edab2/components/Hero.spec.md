# Hero Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/Hero.tsx`
- Screenshot reference (described): full-bleed near-black section, headline top-left, phone mockup image bottom-right overlapping text column.
- Interaction model: static (background may have subtle animated gradient — see below)
- Section theme: `dark` (mark with `data-theme="dark"` or className including `dark` so Header's IntersectionObserver picks it up — coordinate with Header builder's expected attribute; use `<section data-theme="dark" className="dark ...">`)

## DOM structure
`<section>` full width, `min-height: 100vh`, dark background, padding top to clear fixed header (~96-128px), horizontal padding ~32px, max content width ~1280px centered.
- H1 (3 lines): "Earn, borrow, and spend crypto. All in one place."
- Paragraph: "Access the premier wealth platform built to grow your crypto."
- CTA row: teal pill button "Sign up" (with a small diagonal arrow icon, Lucide `ArrowUpRight`, to the right of the label) + square icon button (Lucide `QrCode`) same height as the pill button, bordered.
- Offer banner: bordered rounded box below CTA row, text: "Get **Platinum tier** on arrival — Nexo's best yields and lowest borrowing rates for 30 days." followed by a teal link "Claim offer" with a small arrow icon (Lucide `ArrowRight` or `MoveRight`, 14px).
- Stat strip (4 items, horizontal row, wraps on mobile): 
  1. "Operating" / **"since 2018"** (label muted, value bold white)
  2. "Personalized" / **"client care 24/7"**
  3. "$7+ billion" / "in assets under management" (note: value bold appears FIRST here, unlike items 1-2 — match real site: bold text is "$7+ billion", muted text "in assets under management")
  4. "Excellent" **"4.4 out of 5"** ★ "Trustpilot" — small yellow/gold star icon (Lucide `Star` filled) between the rating and "Trustpilot" wordmark text.
- Right side (absolutely or grid-positioned, overlapping down past the fold): large phone-in-hand photo, `next/image` pointing to `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/hero-phone-mockup.jpg` (this image already contains the phone + UI mockup baked in — it's a single photo asset, not a composite you need to build).

## Colors & sizing
- Background: near-black `#0A0D11`, with a very subtle darker-to-lighter diagonal gradient (approximate a WebGL ambient effect with a CSS `radial-gradient` or `linear-gradient` blending `#0A0D11` to a slightly lighter `#151a20` from bottom-right, low opacity — purely decorative, do not over-engineer).
- H1: font-size `48px`, line-height `52.8px`, weight `400`, color `#FFFFFF`, font-family NexoFont (inherited from root).
- Body paragraph under H1: color `#E5ECF2` (nexo-body-on-dark), font-size ~`20-24px`.
- Teal CTA button: bg `#3ECEC6`, text `#0A0D11`, radius `6px`, padding `12px 24px`, font `16px/500`.
- Offer banner border: subtle light border (`rgba(255,255,255,0.15)`), rounded `~8px`, padding `~16px`.
- Stat strip value text: white, bold (weight 700); label text: `#E5ECF2` muted, weight 400, smaller (~14-16px).

## Text content (verbatim)
"Earn, borrow, and spend crypto. All in one place."
"Access the premier wealth platform built to grow your crypto."
"Sign up"
"Get **Platinum tier** on arrival — Nexo's best yields and lowest borrowing rates for 30 days."
"Claim offer"
"Operating" / "since 2018"
"Personalized" / "client care 24/7"
"$7+ billion" / "in assets under management"
"Excellent" / "4.4 out of 5" / "Trustpilot"

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/hero-phone-mockup.jpg` (real downloaded photo)

## Responsive
- Below `md`: stack to single column — heading/copy/CTA on top, phone image below (full width, contained), stat strip wraps to 2 columns.

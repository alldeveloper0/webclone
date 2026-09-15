# SupportTestimonials Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/SupportTestimonials.tsx`
- Interaction model: static grid, no carousel/pagination
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px.
- H2 (large, ~2 lines): "Our dedicated team is available seven days a week to provide personal assistance."
- Below (margin-top ~48px): 6-card grid (`grid grid-cols-1 md:grid-cols-3 gap-6`), each card: bg `#EAF4F1` (mint), `border-radius: 16px`, padding `~32px`, contains quote text (some truncated with a trailing "…") followed by a row of 5 filled black star icons (Lucide `Star` with `fill="currentColor"`, ~20px each, gap ~4px).

## Card content (verbatim, use exactly these 6)
1. "\"I'm planning to move more coins to Nexo because I feel much safer there. Honestly, safer than a cold wallet. I could lose my cold wallet, my apartment could burn down, but Nexo is securin…\""
2. "\"I was able to resolve my query and continue with my busy day at work. This experience gave me peace of mind that if I need assistance again, I am confident in Nexo's…\""
3. "\"Reliable customer support with a personable touch on all levels. I've dealt with an abundance of teams internationally and I'm still awe struck at the level of support I've experienced…\""
4. "\"I have been a Nexo user for 4 years by now. The interaction with the platform remained always very good and the customer support was prompt and efficient throughout.\""
5. "\"Their customer service was courteous, patient and helpful. The issues I had were eventually resolved. I am impressed with the level of security they employ and am pleased to have an…\""
6. "\"I recently experienced a personal emergency and reached out to Nexo's support team for assistance. I was incredibly impressed by their prompt and compassionate response.\""

## Colors & sizing
- H2: `36px/43.2px`, weight 400, `#0A0D11`, max-width ~800px.
- Card bg: `#EAF4F1`.
- Quote text: `16-18px`, color `#0A0D11`/dark gray, line-height relaxed.
- Stars: black fill, 20px, 5 per card, gap 4px, positioned below quote with ~16px margin-top.

## Responsive
- Below `md`: grid-cols-1, cards stack full width, gap reduces to ~16px.

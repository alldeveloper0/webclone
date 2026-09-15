# TestimonialCarousel Specification

## Overview
- Target file: `src/components/sites/nexo.com-aa72f0e4/root-8a5edab2/TestimonialCarousel.tsx`
- Interaction model: click-driven (prev/next arrow buttons) AND auto-advancing on a timer (confirmed live — content changed without user interaction during a wait). Implement with `useState` for active index + `useEffect` interval (e.g. every 6-8 seconds) that advances, resetting the interval on manual prev/next click. Crossfade transition between slides (`transition-opacity duration-500`), implement via a key-based fade (render current slide, animate opacity 0→1 on index change; simplest robust approach is a CSS transition on a wrapper keyed by index, or a small opacity-toggle timeout).
- Section theme: `light`

## DOM structure
`<section>` light bg, padding ~64px vertical, max content width ~1280px centered, horizontal padding ~32px.
One bordered rounded card (`border: 1px solid rgba(0,0,0,0.1)`, `border-radius: 24px`, `overflow: hidden`):
- Top: photo banner, image `images/testimonials-photo.jpg` (person in blazer holding tablet), height ~320px, `object-fit: cover`, with heading "Serving clients since 2018." and paragraph "Individuals, businesses, and institutions rely on us to help grow their digital asset portfolios." overlaid top-left in a text box with a light scrim/gradient behind for legibility (image is warm/light toned so text should be dark `#0A0D11` or use a subtle white-to-transparent gradient panel behind the text block).
- Bottom: quote panel, padding ~48px, two-column layout (`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start`):
  - Left: name (bold, `#0A0D11`), role (rust color `#A9805C`), and below (with vertical gap) two circular icon buttons side by side: prev (`ArrowLeft` Lucide, disabled/dimmed style when `activeIndex === 0`) and next (`ArrowRight` Lucide).
  - Right: quote text in double quotes, `20-24px`, `#0A0D11`, line-height relaxed.

## Slides data (verbatim, use this exact array)
```
[
  { name: "John A.", role: "Business Owner", quote: "No matter the time zone, Nexo's team has always been very accessible and has helped me understand their unique products, helping me in my decision-making process." },
  { name: "Andrew", role: "Founder & Chairman of a Property Development Group", quote: "My relationship manager has brought a unique focus to the business angle of crypto investments, understanding the importance of strategic movement and timing. In the fast-paced world of cryptocurrency, having established relationships is invaluable." }
]
```
(Only 2 slides were captured live; that's fine — build the carousel to support an arbitrary-length array so it's easy to extend, but ship with exactly these 2.)

## Colors & sizing
- Card border: `rgba(0,0,0,0.1)`, radius `24px`.
- Name: `18px`, weight 600, `#0A0D11`.
- Role: `16px`, weight 400, `#A9805C`.
- Quote: `20-24px`, weight 400, `#0A0D11`, max-width ~600px.
- Arrow buttons: circular, ~40px, border `1px solid rgba(0,0,0,0.15)`, disabled state: `opacity-40 cursor-not-allowed border-gray-200`.

## Text content (verbatim)
"Serving clients since 2018."
"Individuals, businesses, and institutions rely on us to help grow their digital asset portfolios."
(slides array above)

## Assets
- `/sites/nexo.com-aa72f0e4/root-8a5edab2/images/testimonials-photo.jpg`

## Responsive
- Below `md`: quote panel becomes single column (name/role block above quote text), photo banner height reduces to ~200px, text overlay wraps.

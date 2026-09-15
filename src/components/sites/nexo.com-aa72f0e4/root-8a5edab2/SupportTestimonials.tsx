import { Star } from "lucide-react";

const TESTIMONIALS = [
  "I'm planning to move more coins to Nexo because I feel much safer there. Honestly, safer than a cold wallet. I could lose my cold wallet, my apartment could burn down, but Nexo is securin…",
  "I was able to resolve my query and continue with my busy day at work. This experience gave me peace of mind that if I need assistance again, I am confident in Nexo's…",
  "Reliable customer support with a personable touch on all levels. I've dealt with an abundance of teams internationally and I'm still awe struck at the level of support I've experienced…",
  "I have been a Nexo user for 4 years by now. The interaction with the platform remained always very good and the customer support was prompt and efficient throughout.",
  "Their customer service was courteous, patient and helpful. The issues I had were eventually resolved. I am impressed with the level of security they employ and am pleased to have an…",
  "I recently experienced a personal emergency and reached out to Nexo's support team for assistance. I was incredibly impressed by their prompt and compassionate response.",
] as const;

export function SupportTestimonials() {
  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="max-w-[800px] text-[36px] font-normal leading-[43.2px] text-nexo-dark">
          Our dedicated team is available seven days a week to provide
          personal assistance.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((quote, index) => (
            <div
              key={index}
              className="rounded-2xl bg-nexo-mint p-8"
            >
              <p className="text-base leading-relaxed text-nexo-dark md:text-lg">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-current text-nexo-dark"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

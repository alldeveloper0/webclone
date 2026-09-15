"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Slide {
  name: string;
  role: string;
  quote: string;
}

const slides: Slide[] = [
  {
    name: "John A.",
    role: "Business Owner",
    quote:
      "No matter the time zone, Nexo's team has always been very accessible and has helped me understand their unique products, helping me in my decision-making process.",
  },
  {
    name: "Andrew",
    role: "Founder & Chairman of a Property Development Group",
    quote:
      "My relationship manager has brought a unique focus to the business angle of crypto investments, understanding the importance of strategic movement and timing. In the fast-paced world of cryptocurrency, having established relationships is invaluable.",
  },
];

const AUTO_ADVANCE_MS = 7000;

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    startTimer();
  };

  const handlePrev = () => {
    goToIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    goToIndex((activeIndex + 1) % slides.length);
  };

  const slide = slides[activeIndex];

  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="overflow-hidden rounded-3xl border border-black/10">
          {/* Photo banner */}
          <div className="relative h-[200px] w-full md:h-[320px]">
            <Image
              src="/sites/nexo.com-aa72f0e4/root-8a5edab2/images/testimonials-photo.jpg"
              alt="Nexo clients"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-start">
              <div className="max-w-[90%] bg-gradient-to-r from-white/80 to-transparent p-6 md:max-w-[560px] md:p-10">
                <h2 className="text-2xl font-semibold text-nexo-dark md:text-3xl">
                  Serving clients since 2018.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-nexo-dark md:text-base">
                  Individuals, businesses, and institutions rely on us to help
                  grow their digital asset portfolios.
                </p>
              </div>
            </div>
          </div>

          {/* Quote panel */}
          <div className="grid grid-cols-1 items-start gap-8 p-6 md:grid-cols-[1fr_2fr] md:p-12">
            <div>
              <p className="text-[18px] font-semibold text-nexo-dark">
                {slide.name}
              </p>
              <p className="text-[16px] font-normal text-nexo-rust">
                {slide.role}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-nexo-dark transition-colors hover:bg-black/5"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-nexo-dark transition-colors hover:bg-black/5"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              key={activeIndex}
              className="animate-in fade-in duration-500"
            >
              <p className="max-w-[600px] text-xl font-normal leading-relaxed text-nexo-dark md:text-2xl">
                &ldquo;{slide.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

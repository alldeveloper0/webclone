import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function LoyaltyBanner() {
  return (
    <section data-theme="light" className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="relative isolate overflow-hidden rounded-3xl">
          <Image
            src="/sites/nexo.com-aa72f0e4/root-8a5edab2/images/loyalty-banner-bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center gap-8 p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
              <div className="flex h-[104px] w-[104px] flex-shrink-0 items-center justify-center rounded-full border border-white/30 p-2">
                <Image
                  src="/sites/nexo.com-aa72f0e4/root-8a5edab2/images/loyalty-token-badge.png"
                  alt="Nexo Loyalty Program"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>

              <h2 className="max-w-[360px] text-center text-[28px] font-normal leading-tight text-white md:text-left md:text-[32px]">
                Enjoy exclusive benefits with the Nexo Loyalty Program.
              </h2>
            </div>

            <div className="max-w-[420px] text-center md:text-left">
              <p className="text-base text-nexo-body-on-dark">
                Join Nexo&apos;s Loyalty Program with an account balance above
                $5,000. Enjoy daily interest earnings, lower borrow rates,
                crypto cashback on purchases, and many more premium benefits.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-base font-medium text-nexo-teal hover:underline"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

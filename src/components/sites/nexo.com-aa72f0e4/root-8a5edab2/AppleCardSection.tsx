import Image from "next/image";
import { Apple, ArrowRight } from "lucide-react";

export function AppleCardSection() {
  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid min-h-[420px] grid-cols-1 overflow-hidden rounded-3xl bg-gradient-to-br from-nexo-dark to-[#0F2A28] md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-6 py-10 md:px-12 md:py-12">
            <div className="flex items-center gap-2 text-white">
              <span className="font-sans text-lg font-bold tracking-tight">
                NEXO
              </span>
              <span className="text-lg font-light text-white/40">|</span>
              <Apple className="size-5" aria-hidden="true" />
              <span className="font-sans text-lg font-bold tracking-tight">
                Pay
              </span>
            </div>

            <h2 className="font-sans text-[36px] leading-[43.2px] font-normal text-white">
              Add your Nexo Card to Apple Pay.
            </h2>

            <p className="text-base text-nexo-body-on-dark md:text-lg">
              With Apple Pay, you can pay quickly and easily with the Nexo
              Card right from your iPhone or Apple Watch.
            </p>

            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-nexo-teal px-6 py-3 font-sans font-semibold text-nexo-dark transition-opacity hover:opacity-90"
              >
                Learn more
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[280px] md:min-h-full">
            <Image
              src="/sites/nexo.com-aa72f0e4/root-8a5edab2/images/apple-pay-mockup.jpg"
              alt="Nexo Card in Apple Pay on an iPhone"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

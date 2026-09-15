import Image from "next/image";
import { ArrowRight, ArrowUpRight, QrCode, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-nexo-dark to-[#151a20] pt-24 md:pt-28 lg:pt-32"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-8 pb-16 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Left column */}
        <div className="flex w-full flex-col items-start text-left md:max-w-[560px]">
          <h1 className="text-[48px] font-normal leading-[52.8px] text-white">
            Earn, borrow, and spend crypto. All in one place.
          </h1>

          <p className="mt-6 text-xl text-nexo-body-on-dark md:text-2xl">
            Access the premier wealth platform built to grow your crypto.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-[6px] bg-nexo-teal px-6 py-3 text-base font-medium text-nexo-dark transition-opacity hover:opacity-90"
            >
              Sign up
              <ArrowUpRight className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Show QR code"
              className="inline-flex size-[48px] items-center justify-center rounded-[6px] border border-white/15 text-white transition-colors hover:border-white/30"
            >
              <QrCode className="size-5" />
            </button>
          </div>

          {/* Offer banner */}
          <div className="mt-8 rounded-lg border border-white/15 p-4">
            <p className="text-sm text-nexo-body-on-dark md:text-base">
              Get <span className="font-semibold text-white">Platinum tier</span> on
              arrival — Nexo&apos;s best yields and lowest borrowing rates for 30 days.{" "}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-nexo-teal hover:underline"
              >
                Claim offer
                <ArrowRight className="size-3.5" />
              </a>
            </p>
          </div>

          {/* Stat strip */}
          <div className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-6 md:flex md:flex-wrap md:items-start md:justify-between md:gap-x-8">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-nexo-body-on-dark md:text-base">
                Operating
              </span>
              <span className="text-base font-bold text-white md:text-lg">
                since 2018
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-nexo-body-on-dark md:text-base">
                Personalized
              </span>
              <span className="text-base font-bold text-white md:text-lg">
                client care 24/7
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-base font-bold text-white md:text-lg">
                $7+ billion
              </span>
              <span className="text-sm text-nexo-body-on-dark md:text-base">
                in assets under management
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-nexo-body-on-dark md:text-base">
                Excellent
              </span>
              <span className="inline-flex items-center gap-1 text-base font-bold text-white md:text-lg">
                4.4 out of 5
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="font-normal text-nexo-body-on-dark">Trustpilot</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right column: phone image */}
        <div className="relative w-full max-w-[560px] md:w-[45%] md:max-w-none">
          <Image
            src="/sites/nexo.com-aa72f0e4/root-8a5edab2/images/hero-phone-mockup.jpg"
            alt="Nexo mobile app shown on a phone held in hand"
            width={900}
            height={1000}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

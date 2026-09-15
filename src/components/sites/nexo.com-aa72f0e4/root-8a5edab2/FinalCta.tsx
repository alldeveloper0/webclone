import Image from "next/image";
import { ArrowUpRight, QrCode } from "lucide-react";

export function FinalCta() {
  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-[36px] font-normal leading-[43.2px] text-nexo-dark">
              Driving the next generation of wealth.
            </h2>

            <p className="mt-6 text-base text-gray-600 md:text-lg">
              Nexo is built for pioneers ready to leverage blockchain
              technology to shape the next generation of wealth. Create your
              account today and get started.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-nexo-dark px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                Sign up
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Scan QR code"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-black/15 transition-colors hover:bg-black/5"
              >
                <QrCode className="h-5 w-5 text-nexo-dark" />
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl md:aspect-auto md:h-full md:min-h-[360px]">
            <Image
              src="/sites/nexo.com-aa72f0e4/root-8a5edab2/images/final-cta-photo.jpg"
              alt="Driving the next generation of wealth"
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

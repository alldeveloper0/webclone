import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FeatureCard {
  image: string;
  alt: string;
  heading: string;
  body: React.ReactNode;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    image:
      "/sites/nexo.com-aa72f0e4/root-8a5edab2/images/card-interest.jpg",
    alt: "Grow your savings",
    heading: "Grow your savings",
    body: (
      <>
        Open an account and earn up to{" "}
        <span className="font-medium text-nexo-dark">15% annually</span> on
        your digital assets.
      </>
    ),
  },
  {
    image:
      "/sites/nexo.com-aa72f0e4/root-8a5edab2/images/card-exchange.jpg",
    alt: "Manage your assets",
    heading: "Manage your assets",
    body: (
      <>
        Exchange{" "}
        <span className="font-medium text-nexo-dark">over 100 assets</span>{" "}
        and unlock liquidity with a crypto-backed Credit Line.
      </>
    ),
  },
  {
    image: "/sites/nexo.com-aa72f0e4/root-8a5edab2/images/card-borrow.jpg",
    alt: "Spend anywhere",
    heading: "Spend anywhere",
    body: (
      <>
        Spend without selling your digital assets and get up to{" "}
        <span className="font-medium text-nexo-dark">2% cashback</span> with
        the Nexo Card.
      </>
    ),
  },
];

export function FeatureCards() {
  return (
    <section data-theme="light" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="max-w-3xl text-[36px] font-normal leading-[43.2px] text-nexo-dark">
          Build your portfolio from a single app, designed for the
          forward-thinking investor.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {FEATURE_CARDS.map((card) => (
            <div key={card.heading} className="flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="mt-6 mb-6 flex items-center justify-between">
                <h3 className="text-[24px] font-normal leading-[33.6px] text-nexo-dark">
                  {card.heading}
                </h3>
                <button
                  type="button"
                  aria-label={`Learn more about ${card.heading}`}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-black/10 transition-colors hover:bg-black/5"
                >
                  <ArrowRight className="h-4 w-4 text-nexo-dark" />
                </button>
              </div>

              <p className="text-base font-normal text-gray-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Building2, FileOutput } from "lucide-react";

interface WealthFeature {
  icon: React.ReactNode;
  heading: string;
  body: string;
}

const features: WealthFeature[] = [
  {
    icon: <FileOutput className="h-8 w-8 text-white" strokeWidth={1.5} />,
    heading: "Bespoke services for your private wealth",
    body:
      "Available to individual clients and family offices with $100,000 in digital assets, Nexo Private offers tailored onboarding, a dedicated relationship manager, high-limit OTC trading, bespoke credit, and other exclusive benefits.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-white" strokeWidth={1.5} />,
    heading: "Build a digital asset treasury for your business",
    body:
      "The Nexo corporate account combines institutional-grade custody, advanced OTC services, and extensive 24/7 client care to help your business diversify and thrive.",
  },
];

export function WealthSolutions() {
  return (
    <section
      data-theme="dark"
      className="bg-nexo-dark py-24"
    >
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2 className="text-[36px] font-normal leading-[43.2px] text-white">
            Wealth solutions for private and corporate clients.
          </h2>
          <p className="text-lg text-nexo-body-on-dark md:text-xl">
            Access bespoke services built for those who demand flexibility,
            discretion, and trust.
          </p>
        </div>

        <div className="mt-12 border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.heading}
                className={
                  index === 0
                    ? "md:pr-8"
                    : "border-t border-white/10 pt-12 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                }
              >
                <div className="mb-6">{feature.icon}</div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-normal leading-[33.6px] text-white">
                    {feature.heading}
                  </h3>
                  <button
                    type="button"
                    aria-label="Learn more"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <p className="max-w-[90%] text-base text-nexo-body-on-dark">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

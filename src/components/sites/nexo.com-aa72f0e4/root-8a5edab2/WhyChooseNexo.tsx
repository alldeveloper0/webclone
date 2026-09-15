import { ArrowRight, Coins, Globe2, Hourglass, LifeBuoy, RefreshCw, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: Hourglass,
    title: "Proven track record",
    description: "Trusted since 2018",
  },
  {
    icon: LifeBuoy,
    title: "White-glove client care",
    description: "Personalized client care available 24/7",
  },
  {
    icon: Globe2,
    title: "Global footprint",
    description: "Present in 200+ jurisdictions",
  },
  {
    icon: Coins,
    title: "Outstanding confidence",
    description: "$7+ billion assets under management",
  },
  {
    icon: ShieldCheck,
    title: "Strong financial health",
    description: "Proven regulatory compliance",
  },
  {
    icon: RefreshCw,
    title: "High liquidity",
    description: "Processed $465+ billion",
  },
]

export function WhyChooseNexo() {
  return (
    <section data-theme="light" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <h2 className="text-nexo-dark text-[36px] leading-[43.2px] font-normal">
            Why choose Nexo?
          </h2>
          <div>
            <p className="text-base text-gray-600 md:text-lg">
              Nexo empowers forward-thinking investors to build long-term wealth by
              offering the most comprehensive suite of digital asset solutions. Our
              approach unites cutting-edge products, robust infrastructure security,
              and white-glove client care. We aim to unlock new growth opportunities
              and drive the next generation of wealth.
            </p>
            <button
              type="button"
              className="text-nexo-dark mt-6 inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white px-6 py-3 text-base font-medium"
            >
              Read more
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border border-black/10 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isFirstInRow = index % 3 === 0
            const isFirstRow = index < 3

            return (
              <div
                key={feature.title}
                className={cn(
                  "border-black/10 p-8",
                  index !== 0 && "border-t md:border-t-0",
                  !isFirstRow && "md:border-t",
                  !isFirstInRow && "md:border-l",
                )}
              >
                <Icon className="text-nexo-dark size-8" />
                <h3 className="text-nexo-dark mt-4 text-xl font-medium">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

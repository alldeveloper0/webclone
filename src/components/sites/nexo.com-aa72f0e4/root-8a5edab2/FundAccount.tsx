import { ArrowLeftRight, UserCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FundRow {
  icon: LucideIcon;
  heading: string;
  body: string;
}

const FUND_ROWS: FundRow[] = [
  {
    icon: UserCheck,
    heading: "Crypto-friendly bank transfers",
    body:
      "Your personal USD, EUR, and GBP accounts on Nexo help you prevent blocked or delayed transactions that banks can impose on third-party transfers.",
  },
  {
    icon: ArrowLeftRight,
    heading: "Seamless crypto transfers",
    body:
      "Receive crypto from external platforms or wallets across 20+ blockchain networks like Ethereum, Solana, and Tron.",
  },
  {
    icon: Zap,
    heading: "Instant and local payment solutions",
    body:
      "Choose between instant card payments with Visa, Mastercard, Apple Pay, Google Pay or popular regional payment methods that work best for you.",
  },
];

export function FundAccount() {
  return (
    <section data-theme="light" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2 className="text-[36px] font-normal leading-[43.2px] text-nexo-dark">
            Fund your account effortlessly.
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            Add funds via bank transfers under your name, or choose from
            simple alternatives that match your needs.
          </p>
        </div>

        <div className="mt-12">
          {FUND_ROWS.map((row, index) => {
            const Icon = row.icon;
            const isLast = index === FUND_ROWS.length - 1;

            return (
              <div
                key={row.heading}
                className={`grid grid-cols-1 items-start gap-6 py-8 md:grid-cols-[auto_1fr_2fr] ${
                  isLast ? "" : "border-b border-black/10"
                }`}
              >
                <Icon className="h-6 w-6 text-nexo-dark" />
                <h3 className="text-xl font-medium text-nexo-dark md:text-2xl">
                  {row.heading}
                </h3>
                <p className="max-w-2xl text-base text-gray-600">
                  {row.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

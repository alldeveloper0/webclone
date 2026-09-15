"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FaqRow {
  question: string;
  answer: React.ReactNode;
}

const faqRows: FaqRow[] = [
  {
    question: "How can I create an account on Nexo?",
    answer: (
      <>
        Creating your <em>Nexo</em> account is quick and straightforward.
        Simply sign up, confirm your email, and complete a fast identity
        check. Once verified, you&apos;ll be ready to start building wealth
        with Nexo. You can learn about the process in detail{" "}
        <a href="#" className="text-nexo-teal underline">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How do I start earning interest?",
    answer:
      "Simply deposit any of our supported assets into your Nexo account and enable Earn on your portfolio. Your balance will then start accruing daily interest automatically, paid out every day.",
  },
  {
    question: "What cryptocurrencies can I buy and hold on Nexo?",
    answer:
      "Nexo supports Bitcoin, Ethereum, and over 100 other digital assets, giving you a wide range of options to buy, hold, and exchange directly from your account.",
  },
  {
    question: "How can I open a Credit Line against my digital assets?",
    answer:
      "Simply deposit eligible digital assets as collateral and instantly unlock a Nexo Credit Line — access cash without having to sell any of your crypto.",
  },
];

export function FaqAccordion() {
  const [openRows, setOpenRows] = useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    setOpenRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-nexo-dark text-[36px] leading-[43.2px] font-normal">
              Frequently asked questions.
            </h2>
          </div>
          <div>
            {faqRows.map((row, index) => {
              const isOpen = openRows.has(index);
              return (
                <div key={row.question} className="border-b border-black/10 py-6">
                  <button
                    type="button"
                    onClick={() => toggleRow(index)}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-nexo-dark text-[18px] font-medium md:text-[20px]">
                      {row.question}
                    </span>
                    <span className="text-nexo-dark ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 transition-opacity duration-200 ease-in-out">
                      <p className="text-[16px] leading-relaxed font-normal text-gray-600">
                        {row.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

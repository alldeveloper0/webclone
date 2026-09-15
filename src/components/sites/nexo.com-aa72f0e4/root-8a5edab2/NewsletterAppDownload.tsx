"use client";

import { useState } from "react";
import { Mail, QrCode } from "lucide-react";

const ASSET_BASE = "/sites/nexo.com-aa72f0e4/root-8a5edab2";

const TRUST_BADGES = [
  {
    icon: `${ASSET_BASE}/icons/trust-life-buoy.svg`,
    label: "24/7 client care",
  },
  {
    icon: `${ASSET_BASE}/icons/trust-bank.svg`,
    label: "Operating since 2018",
  },
  {
    icon: `${ASSET_BASE}/icons/trust-shield.svg`,
    label: "SOC 2 Type 2 certified",
  },
];

export function NewsletterAppDownload() {
  const [email, setEmail] = useState("");

  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Block 1: Newsletter */}
        <div>
          <h2 className="text-[28px] font-normal text-nexo-dark sm:text-[32px]">
            Get updates, insights, and reports on the latest industry trends.
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-black/15 p-4 text-base text-nexo-dark placeholder:text-black/40 focus:outline-none"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-between rounded-lg bg-nexo-dark p-4 text-base text-white"
            >
              Subscribe
              <Mail className="size-5" />
            </button>
          </form>
        </div>

        {/* Block 2: App download */}
        <div className="mt-16 border-t border-black/10 pt-16">
          <h2 className="text-[28px] font-normal text-nexo-dark sm:text-[32px]">
            Download the Nexo app on your mobile device.
          </h2>
          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
            <div className="flex h-[140px] w-[140px] shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-100">
              <QrCode className="size-16 text-nexo-dark" />
            </div>
            <div className="flex items-center gap-6">
              <img
                src={`${ASSET_BASE}/logos/app-store-badge.svg`}
                alt="Download on the App Store"
                className="h-11 object-contain"
              />
              <img
                src={`${ASSET_BASE}/logos/google-play-badge.svg`}
                alt="Get it on Google Play"
                className="h-11 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Block 3: Trust badges */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-black/10 pt-16 sm:grid-cols-3">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <img src={badge.icon} alt="" className="size-8" />
              <span className="text-base font-medium text-nexo-dark">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

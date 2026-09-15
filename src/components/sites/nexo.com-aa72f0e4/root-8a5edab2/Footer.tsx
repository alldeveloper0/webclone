import { AtSign, SquarePlay, Camera } from "lucide-react";

interface FooterLinkColumn {
  heading: string;
  links: string[];
}

const linkColumns: FooterLinkColumn[] = [
  {
    heading: "Personal",
    links: [
      "Buy Crypto",
      "Flexible Savings",
      "Fixed-term Savings",
      "Exchange",
      "Credit Line",
      "Nexo Crypto Card",
      "Dual Investment",
      "Futures",
      "Loyalty Program",
      "Private Clients",
      "Tax Reporting",
    ],
  },
  {
    heading: "Business",
    links: [
      "Corporates",
      "Institutions",
      "White Label",
      "Nexo Ventures",
      "Payment Gateway",
      "Affiliate Program",
    ],
  },
  {
    heading: "Company",
    links: [
      "About",
      "Ambassadors",
      "Security",
      "Partnerships",
      "Wealth Academy",
      "Vulnerability Disclosure",
      "News & Insights",
      "Help Center",
      "Status Center",
      "Contacts",
    ],
  },
  {
    heading: "Legal",
    links: [
      "Terms of Service",
      "Fee Schedule",
      "AI Chat Assistant Terms",
      "Privacy Policy",
      "Affiliate Terms",
      "DeFi Terms",
      "Nexo Card Provider Terms",
      "Cookies Policy",
    ],
  },
  {
    heading: "Buy assets",
    links: [
      "Buy Bitcoin",
      "Buy Tether",
      "Buy Tron",
      "Buy Solana",
      "Buy USD Coin",
      "Buy Toncoin",
      "Buy Ethereum",
      "Buy XRP",
      "Buy Litecoin",
    ],
  },
  {
    heading: "Earn assets",
    links: [
      "Earn Bitcoin",
      "Earn XRP",
      "Earn Toncoin",
      "Earn Solana",
      "Earn Stellar",
      "Earn Litecoin",
      "Earn Tron",
      "Earn Ethereum",
    ],
  },
];

const socialIcons = [
  { label: "Twitter", Icon: AtSign },
  { label: "Youtube", Icon: SquarePlay },
  { label: "Instagram", Icon: Camera },
];

export function Footer() {
  return (
    <footer data-theme="light" className="bg-white pt-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {linkColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-4 text-base font-semibold text-nexo-dark">
                {column.heading}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-nexo-dark hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-black/10 py-8 sm:flex-row">
          <div />
          <div>
            <h3 className="mb-4 text-base font-medium text-nexo-dark">
              Follow Nexo
            </h3>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-nexo-dark"
                >
                  <Icon className="h-[18px] w-[18px] text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 py-8">
          <p className="text-sm leading-relaxed text-gray-500">
            All or part of the Nexo Services, some features thereof, or some
            Digital Assets, are not available in certain jurisdictions,
            including where restrictions or limitations may apply, as
            indicated on the Nexo Platform and in the relevant general terms
            and conditions. While the nature of digital assets is unique, and
            when considering digital assets in the context of wealth
            enhancement, any such reference is for a general understanding of
            Nexo&apos;s offerings. Materials related to Nexo&apos;s services
            should not be treated as a guarantee of future results or as
            financial advice. When terms such as &quot;up to&quot; or
            &quot;from&quot; are used to denote limits, achieving these
            maximum or minimum thresholds may be conditional on additional
            actions or fulfilment of certain criteria and requirements that
            may not be attainable by all clients. This material is for
            general information purposes only and is not intended to provide
            and should not be relied on for tax, legal or accounting advice.
            You should consult a qualified professional, as this material is
            not tailored to your specific circumstances. When referencing
            digital assets as potential investments, any similarities with
            the traditional concept of investments are entirely coincidental,
            therefore any parallels between them should not be interpreted as
            deliberate or intended. Rates are subject to change and may vary
            by region, loyalty tier, and other applicable factors. Always
            refer to the Nexo app for your applicable rates. Assets under
            management figure updated on a quarterly basis. Latest available
            data as of Q2 2026
          </p>
        </div>

        <div className="py-8">
          <p className="text-sm text-gray-500">&copy; 2018 - 2026 Nexo</p>
        </div>
      </div>
    </footer>
  );
}

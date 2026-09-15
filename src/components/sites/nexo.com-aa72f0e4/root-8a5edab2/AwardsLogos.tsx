const AWARD_LOGOS = [
  {
    src: "/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-inatba.svg",
    alt: "Payments INTASA award",
  },
  {
    src: "/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-fintech-breakthrough.png",
    alt: "Fintech Breakthrough Award",
  },
  {
    src: "/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-forbes.svg",
    alt: "Forbes Business Awards 2021",
  },
  {
    src: "/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-stevie.svg",
    alt: "Stevie Awards Bronze 2021",
  },
  {
    src: "/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-globee.png",
    alt: "Globee Awards 2021 Silver Winner",
  },
  {
    src: "/sites/nexo.com-aa72f0e4/root-8a5edab2/logos/award-digital-banker.png",
    alt: "Digital Banker CX Awards 2025",
  },
] as const;

export function AwardsLogos() {
  return (
    <section data-theme="light" className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="text-nexo-dark text-[36px] leading-[43.2px] font-normal">
          Awards and recognitions.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-12">
          {AWARD_LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain sm:h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

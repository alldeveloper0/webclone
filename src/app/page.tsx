import { Header } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/Header";
import { Hero } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/Hero";
import { FeatureCards } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FeatureCards";
import { AppleCardSection } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/AppleCardSection";
import { WealthSolutions } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/WealthSolutions";
import { FundAccount } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FundAccount";
import { LoyaltyBanner } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/LoyaltyBanner";
import { WhyChooseNexo } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/WhyChooseNexo";
import { TestimonialCarousel } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/TestimonialCarousel";
import { AwardsLogos } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/AwardsLogos";
import { SupportTestimonials } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/SupportTestimonials";
import { FaqAccordion } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FaqAccordion";
import { FinalCta } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/FinalCta";
import { NewsletterAppDownload } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/NewsletterAppDownload";
import { Footer } from "@/components/sites/nexo.com-aa72f0e4/root-8a5edab2/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <AppleCardSection />
        <WealthSolutions />
        <FundAccount />
        <LoyaltyBanner />
        <WhyChooseNexo />
        <TestimonialCarousel />
        <AwardsLogos />
        <SupportTestimonials />
        <FaqAccordion />
        <FinalCta />
        <NewsletterAppDownload />
      </main>
      <Footer />
    </>
  );
}

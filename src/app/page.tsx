import { HeroSection } from "@/components/sections/hero";
import { BrandStrip } from "@/components/sections/brand-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { ProcessStrip } from "@/components/sections/process-strip";
import { TestimonialsStrip } from "@/components/sections/testimonials-strip";
import { FinalCta } from "@/components/sections/final-cta";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Pixern Technology builds modern websites and software products focused on growth, conversion, and long-term support."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStrip />
      <TrustMetrics />
      <div className="bg-white/65">
        <ServicesGrid compact />
      </div>
      <PortfolioPreview compact />
      <div className="bg-slate-50/80">
        <ProcessStrip />
      </div>
      <div className="bg-white/60">
        <TestimonialsStrip />
      </div>
      <FinalCta />
    </>
  );
}

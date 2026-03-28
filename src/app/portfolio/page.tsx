import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { FinalCta } from "@/components/sections/final-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See selected project outcomes delivered by Pixern Technology across websites, apps, and custom business software."
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioPreview />
      <FinalCta />
    </>
  );
}

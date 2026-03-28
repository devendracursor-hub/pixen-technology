import { ServicesGrid } from "@/components/sections/services-grid";
import { FinalCta } from "@/components/sections/final-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Pixern Technology services including website development, web apps, mobile apps, UI/UX, and custom software."
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <FinalCta />
    </>
  );
}

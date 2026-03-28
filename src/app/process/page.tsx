import { ProcessStrip } from "@/components/sections/process-strip";
import { FinalCta } from "@/components/sections/final-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Understand our step-by-step delivery process from discovery and planning to launch and support."
};

export default function ProcessPage() {
  return (
    <>
      <ProcessStrip />
      <FinalCta />
    </>
  );
}

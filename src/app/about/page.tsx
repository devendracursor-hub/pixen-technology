import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/sections/final-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pixern Technology, our mission, and the execution values we bring to every digital product build."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            kicker="About Us"
            title="A modern technology partner for practical business growth"
            description="Pixern Technology helps startups and growing businesses build polished digital products with clear communication and reliable delivery."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <article className="card card-interactive mesh-panel p-6">
              <p className="text-lg font-semibold text-ink">Our Mission</p>
              <p className="mt-3 text-sm text-slate-600">
                Turn ideas into high-quality digital products that create measurable business impact.
              </p>
            </article>
            <article className="card card-interactive mesh-panel p-6">
              <p className="text-lg font-semibold text-ink">Our Vision</p>
              <p className="mt-3 text-sm text-slate-600">
                Build a trusted technology brand known for premium quality and long-term client
                partnerships.
              </p>
            </article>
            <article className="card card-interactive mesh-panel p-6">
              <p className="text-lg font-semibold text-ink">Our Values</p>
              <p className="mt-3 text-sm text-slate-600">
                Clarity, ownership, quality, and execution speed with a client-first mindset.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

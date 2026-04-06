import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { siteMeta } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project discussion with Pixern Technology. Send requirements and receive a response within one business day."
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          kicker="Contact"
          title="Let us discuss your project requirements"
          description="Use this form for project inquiries. You can also reach us directly by email, phone, or WhatsApp."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <div className="grid gap-4">
            <article className="card card-interactive mesh-panel p-6">
              <p className="text-lg font-semibold text-ink">Direct Contact</p>
              <p className="mt-3 text-sm text-slate-600">Email: {siteMeta.email}</p>
              <p className="mt-2 text-sm text-slate-600">Phone: {siteMeta.phone}</p>
              <a
                href={`https://wa.me/${siteMeta.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
              >
                Chat on WhatsApp
              </a>
            </article>

            <article className="card card-interactive mesh-panel p-6">
              <p className="text-lg font-semibold text-ink">Response Commitment</p>
              <p className="mt-3 text-sm text-slate-600">
                We usually respond within 24 business hours with next steps and a suitable project
                discussion slot.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

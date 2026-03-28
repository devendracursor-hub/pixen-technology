import { SectionHeading } from "@/components/ui/section-heading";
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
          <form className="card mesh-panel grid gap-4 p-6">
            <div className="rounded-2xl border border-emerald-300/40 bg-emerald-50 p-4 text-sm text-emerald-800">
              Response time: within 24 business hours. For urgent requests, use WhatsApp.
            </div>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Full Name
              <input
                required
                name="name"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email Address
              <input
                required
                type="email"
                name="email"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
                placeholder="you@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Project Type
              <select
                name="projectType"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
              >
                <option>Website Development</option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Custom Software</option>
                <option>UI/UX Design</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Budget Range
              <select
                name="budget"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
              >
                <option>Under INR 50,000</option>
                <option>INR 50,000 - 2,00,000</option>
                <option>INR 2,00,000 - 5,00,000</option>
                <option>INR 5,00,000+</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Project Details
              <textarea
                required
                rows={5}
                name="details"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
                placeholder="Tell us your requirements, timeline, and goals."
              />
            </label>
            <button type="submit" className="btn-primary mt-1 w-fit">
              Send Inquiry
            </button>
          </form>

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

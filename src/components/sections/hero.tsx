import Link from "next/link";
import { siteMeta } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="section-dark section-pad">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">Enterprise Web Partner</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Conversion-first websites and software engineered for measurable business growth
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            {siteMeta.description} Strategy, design, development, and launch support in one
            execution-focused team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book Free Strategy Call
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
            <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">SEO-Ready Builds</p>
            <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">Dedicated Delivery Team</p>
            <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">Post-Launch Support</p>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            <div className="card p-4">
              <p className="text-2xl font-bold text-white">120+</p>
              <p className="text-xs text-slate-300">Projects Delivered</p>
            </div>
            <div className="card p-4">
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-xs text-slate-300">Client Satisfaction</p>
            </div>
            <div className="card p-4">
              <p className="text-2xl font-bold text-white">48h</p>
              <p className="text-xs text-slate-300">Proposal Turnaround</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="card card-interactive mesh-panel p-7">
          <div className="relative z-10">
            <p className="text-sm font-semibold text-orange-300">Why Businesses Choose Us</p>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>Senior-led planning with practical roadmaps</li>
              <li>Clear weekly progress updates with ownership</li>
              <li>Design + engineering aligned to business goals</li>
              <li>Reliable delivery and long-term support</li>
            </ul>
            <div className="mt-7 rounded-2xl border border-orange-300/30 bg-orange-500/10 p-5 text-orange-50">
              <p className="text-xs uppercase tracking-[0.12em] text-orange-200">Most Requested</p>
              <p className="mt-2 text-lg font-semibold">Business Website + SEO Foundation</p>
              <p className="mt-2 text-sm text-slate-300">
                Typical timeline: 2 to 4 weeks with conversion-focused UI and analytics setup.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

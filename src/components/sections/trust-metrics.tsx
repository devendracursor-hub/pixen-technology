import { Reveal } from "@/components/ui/reveal";

const metrics = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Avg. Client Rating", value: "4.9/5" },
  { label: "On-time Delivery", value: "96%" },
  { label: "Support Window", value: "12 Months" }
];

const trustedBy = ["Retail", "Healthcare", "SaaS", "EdTech", "Real Estate", "Logistics"];

export function TrustMetrics() {
  return (
    <section className="section-pad bg-slate-50/70">
      <div className="container-shell">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_22px_48px_-34px_rgba(15,23,42,0.45)] md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">Trust Signals</p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built with process, delivered with accountability
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              A practical engagement model with transparent communication, measurable milestones,
              and long-term support.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {trustedBy.map((item) => (
                <p
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05} className="card card-interactive p-4">
                <p className="text-2xl font-bold text-ink">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

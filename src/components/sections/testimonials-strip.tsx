import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsStrip() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          kicker="Trust Signals"
          title="Client-focused execution with clear communication"
          description="Replace these sample testimonials with real client quotes before launch."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05} className="card card-interactive p-7">
              <p className="text-2xl leading-none text-accent">"</p>
              <p className="mt-2 text-slate-700">{item.quote}</p>
              <p className="mt-5 font-semibold text-ink">{item.name}</p>
              <p className="text-sm text-slate-600">{item.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

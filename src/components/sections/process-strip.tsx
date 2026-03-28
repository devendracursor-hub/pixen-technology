import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProcessStrip() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          kicker="Process"
          title="Simple and predictable project execution"
          description="A transparent workflow so you always know what comes next."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.04} className="card card-interactive p-5">
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-accent">
                Step {index + 1}
              </p>
              <p className="mt-3 text-base font-semibold text-ink">{step}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

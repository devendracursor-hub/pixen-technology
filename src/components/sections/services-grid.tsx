import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type ServicesGridProps = {
  compact?: boolean;
};

export function ServicesGrid({ compact = false }: ServicesGridProps) {
  const list = compact ? services.slice(0, 4) : services;
  const gridClass = compact
    ? "grid gap-5 md:grid-cols-2 xl:grid-cols-4"
    : "grid gap-5 md:grid-cols-2 xl:grid-cols-3";

  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          kicker="Services"
          title="Technology services built for business outcomes"
          description="From websites to software products, we design and deliver reliable solutions."
        />
        <div className={gridClass}>
          {list.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.04}
              className="card card-interactive border-l-4 border-l-accent p-6"
            >
              <p className="text-xl font-semibold text-ink">{service.title}</p>
              <p className="mt-2 text-sm font-semibold text-accent">{service.benefit}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </Reveal>
          ))}
        </div>
        {compact ? (
          <div className="mt-8">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

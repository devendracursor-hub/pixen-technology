import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type PortfolioPreviewProps = {
  compact?: boolean;
};

export function PortfolioPreview({ compact = false }: PortfolioPreviewProps) {
  const list = compact ? projects.slice(0, 3) : projects;

  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          kicker="Portfolio"
          title="Sample projects and delivery outcomes"
          description="A snapshot of how we solve practical business problems with modern product thinking."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {list.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.05}
              className="card card-interactive mesh-panel p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-accent">
                {project.category}
              </p>
              <p className="mt-2 text-xl font-semibold text-ink">{project.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>
              <p className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                {project.result}
              </p>
            </Reveal>
          ))}
        </div>

        {compact ? (
          <div className="mt-8">
            <Link href="/portfolio" className="btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

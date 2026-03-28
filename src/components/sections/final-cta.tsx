import Link from "next/link";
import { siteMeta } from "@/data/site";

export function FinalCta() {
  return (
    <section className="section-dark section-pad">
      <div className="container-shell">
        <div className="card mesh-panel overflow-hidden p-8 sm:p-10">
          <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">
            Ready
          </p>
          <h2 className="relative z-10 mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Have a project in mind? Let us build it with you.
          </h2>
          <p className="relative z-10 mt-3 max-w-2xl text-slate-300">
            Share your idea and get a practical execution roadmap for your product.
          </p>
          <div className="relative z-10 mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
            <a href={`mailto:${siteMeta.email}`} className="btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

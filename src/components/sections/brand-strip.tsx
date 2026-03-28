const brands = ["Startups", "Retail", "Healthcare", "EdTech", "SaaS", "Logistics", "Real Estate"];

export function BrandStrip() {
  return (
    <section className="brand-strip py-5">
      <div className="container-shell">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
          Trusted by growing businesses across industries
        </p>
        <div className="grid grid-cols-2 gap-2 text-center text-sm font-semibold text-slate-700 sm:grid-cols-4 lg:grid-cols-7">
          {brands.map((brand) => (
            <p key={brand} className="rounded-lg bg-white/70 px-3 py-2">
              {brand}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-11 max-w-3xl">
      {kicker ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-accent">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}

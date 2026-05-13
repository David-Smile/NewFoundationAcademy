export function PageHero({ title, eyebrow }) {
  return (
    <section className="page-hero-pattern flex min-h-[40vh] items-end bg-[--color-primary-900] pb-16 pt-32 text-white">
      <div className="container-nfa">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.05em] text-[--color-accent-400]">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl leading-tight lg:text-6xl">{title}</h1>
        <p className="mt-4 text-sm text-white/60">Home / {title}</p>
      </div>
    </section>
  );
}

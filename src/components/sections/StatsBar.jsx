import { AnimatedCounter } from "../ui/AnimatedCounter";

const stats = [
  { value: 1200, suffix: "+", label: "Students" },
  { value: 85, label: "Qualified Staff" },
  { value: 18, label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Exam Pass Rate" },
];

export function StatsBar() {
  return (
    <section className="bg-[--color-primary-500] py-10 text-white">
      <div className="container-nfa grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="text-center" key={stat.label}>
            <p className="font-display text-5xl"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.05em] text-white/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { programs } from "../data/programs";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

export default function Programs() {
  const [active, setActive] = useState("nursery");
  const program = useMemo(() => programs.find((item) => item.id === active), [active]);

  return (
    <PageTransition>
      <PageHero eyebrow="Academic Programs" title="Learning paths with clear progression" />
      <section className="section bg-white">
        <div className="container-nfa">
          <div className="mb-10 flex flex-wrap gap-3">
            {programs.map((item) => (
              <button className={`rounded-full px-5 py-3 text-sm font-bold transition ${active === item.id ? "bg-[--color-primary-500] text-white" : "bg-[--color-primary-50] text-[--color-primary-600]"}`} key={item.id} onClick={() => setActive(item.id)} type="button">
                {item.name}
              </button>
            ))}
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl bg-gradient-to-br from-[--color-primary-100] to-white p-6"><div className="aspect-[4/3] rounded-2xl bg-white/60" /></div>
            <div>
              <SectionHeading eyebrow={program.ageRange} title={program.name} text={program.description} />
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-5"><p className="text-sm text-neutral-500">Age Range</p><strong>{program.ageRange}</strong></Card>
                <Card className="p-5"><p className="text-sm text-neutral-500">Class Structure</p><strong>{program.classStructure.length} stages</strong></Card>
                <Card className="p-5"><p className="text-sm text-neutral-500">Ratio</p><strong>{program.ratio}</strong></Card>
              </div>
              <h3 className="mt-8 text-2xl text-[--color-primary-800]">Curriculum Highlights</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">{program.subjects.map((subject) => <div className="rounded-xl bg-[--color-primary-50] px-4 py-3 text-sm font-semibold text-[--color-primary-700]" key={subject}>{subject}</div>)}</div>
              <h3 className="mt-8 text-2xl text-[--color-primary-800]">Extracurricular Activities</h3>
              <p className="mt-3 leading-8 text-neutral-600">{program.activities.join(", ")}.</p>
              <Button className="mt-8" to="/admissions">Apply for This Level</Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

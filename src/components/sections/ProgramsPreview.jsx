import { ArrowRight } from "lucide-react";
import { programs } from "../../data/programs";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

export function ProgramsPreview() {
  return (
    <section className="section bg-[--color-surface]">
      <div className="container-nfa">
        <SectionHeading align="center" eyebrow="Academic Programs" title="Three Schools, One Vision" text="Each level is designed to meet learners at the right stage and prepare them for what comes next." />
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map(({ id, shortName, ageRange, description, subjects, icon: Icon, accent }) => (
            <Card className="group p-8" key={id}>
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-full text-white transition group-hover:rotate-[15deg]" style={{ backgroundColor: accent }}><Icon size={26} /></div>
              <h3 className="text-3xl text-[--color-primary-800]">{shortName}</h3>
              <span className="mt-3 inline-flex rounded-full bg-[--color-primary-50] px-3 py-1 text-xs font-bold text-[--color-primary-600]">{ageRange}</span>
              <p className="mt-5 line-clamp-3 text-sm leading-7 text-neutral-600">{description}</p>
              <p className="mt-5 text-sm font-semibold text-neutral-700">{subjects.slice(0, 3).join(" · ")}</p>
              <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[--color-primary-500]" href="/programs">View Curriculum <ArrowRight size={16} /></a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

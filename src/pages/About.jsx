import { Award, BookMarked, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

const values = [
  ["Integrity", ShieldCheck],
  ["Excellence", Award],
  ["Community", Users],
  ["Innovation", Lightbulb],
  ["Discipline", BookMarked],
  ["Care", HeartHandshake],
];

export default function About() {
  return (
    <PageTransition>
      <PageHero eyebrow="About NFA" title="A trusted academy for purposeful growth" />
      <section className="section bg-white">
        <div className="container-nfa grid gap-12 lg:grid-cols-2">
          <div><SectionHeading eyebrow="Our Story" title="Founded to give families a stronger school experience." /></div>
          <div className="space-y-6 text-base leading-8 text-neutral-600">
            <p>New Foundation Academy exists to provide a calm, ambitious, and values-led learning environment for Nigerian families seeking excellence from nursery through secondary school.</p>
            <p><strong className="text-neutral-900">Mission:</strong> To nurture disciplined, confident, and curious learners who are prepared for academic success and responsible leadership.</p>
            <p><strong className="text-neutral-900">Vision:</strong> To become a leading school community known for strong foundations, trusted teachers, and outstanding student outcomes.</p>
          </div>
        </div>
      </section>
      <section className="section bg-[--color-surface]">
        <div className="container-nfa">
          <SectionHeading align="center" eyebrow="Core Values" title="The principles that shape school life" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([name, Icon]) => <Card className="p-7" key={name}><Icon className="mb-5 text-[--color-accent-500]" /><h3 className="text-2xl text-[--color-primary-800]">{name}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">A daily standard reflected in lessons, conduct, parent partnership, and leadership.</p></Card>)}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-nfa rounded-3xl bg-[--color-primary-800] p-8 text-white lg:p-14">
          <p className="font-display text-7xl text-[--color-accent-400]">“</p>
          <blockquote className="max-w-4xl font-display text-3xl italic leading-snug">Our responsibility is to help every child develop the confidence, discipline, and academic foundation to thrive beyond the classroom.</blockquote>
          <div className="mt-8 flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-full bg-white text-sm font-bold text-[--color-primary-700]">AO</span><p className="font-semibold">Mrs. Ada Okafor · Principal</p></div>
        </div>
      </section>
      <section className="section bg-[--color-surface]">
        <div className="container-nfa">
          <SectionHeading eyebrow="Accreditations & Milestones" title="Built steadily, with standards that matter" />
          <div className="grid gap-4 sm:grid-cols-4">{["WAEC", "NECO", "NUT", "Lagos State"].map((item) => <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center font-bold text-neutral-500" key={item}>{item}</div>)}</div>
          <div className="mt-12 grid gap-6">{["2005 · School founded", "2011 · Primary expansion", "2017 · Secondary program launched", "2026 · Modern digital learning roadmap"].map((item) => <div className="border-l-4 border-[--color-accent-500] bg-white p-5 shadow-sm" key={item}>{item}</div>)}</div>
        </div>
      </section>
    </PageTransition>
  );
}

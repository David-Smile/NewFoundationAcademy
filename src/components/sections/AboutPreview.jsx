import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container-nfa grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[--color-primary-100] to-[--color-accent-100] p-6">
            <div className="h-full rounded-2xl border border-white/60 bg-white/40" />
          </div>
          <div className="absolute -bottom-8 left-6 max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
            <p className="font-display text-2xl italic text-[--color-primary-800]">"Every child deserves structure, care, and a place to become confident."</p>
            <p className="mt-4 text-sm font-bold text-neutral-500">Principal's Message</p>
          </div>
        </div>
        <div className="pt-10 lg:pt-0">
          <SectionHeading eyebrow="About New Foundation Academy" title="A school community built on trust, discipline, and excellence." text="We partner with families to help children grow academically, socially, and morally in a calm, organized learning environment." />
          <p className="text-base leading-8 text-neutral-600">From early years to secondary education, our classrooms combine strong academics with character formation, creativity, technology, and personal guidance.</p>
          <div className="mt-6 grid gap-3">
            {["Academic Excellence", "Character Development", "Holistic Growth"].map((value) => (
              <div className="flex items-center gap-3 font-semibold text-neutral-700" key={value}><CheckCircle2 className="text-[--color-accent-500]" size={20} />{value}</div>
            ))}
          </div>
          <Button className="mt-8" variant="secondary" to="/about">Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
}

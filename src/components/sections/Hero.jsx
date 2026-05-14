import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[--color-primary-900] via-[--color-primary-800] to-[--color-primary-700] text-white">
      <div className="absolute inset-0 opacity-[0.05] page-hero-pattern" />
      <div className="container-nfa relative grid min-h-screen items-center gap-12 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-5 text-[13px] font-bold uppercase tracking-[0.05em] text-[--color-accent-400]">Nursery · Primary · Secondary</motion.p>
          <motion.h1 variants={item} className="max-w-3xl text-5xl leading-[1.08] md:text-6xl lg:text-7xl">Where Every Child Finds Their Foundation</motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-white/70">New Foundation Academy nurtures curious minds, builds strong character, and prepares students for a lifetime of achievement from their very first day of school.</motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button variant="white" to="/admissions">Apply for Admission <ArrowRight size={17} /></Button>
            <Button variant="ghostWhite" to="/programs">Explore Programs</Button>
          </motion.div>
          <motion.p variants={item} className="mt-8 text-sm font-semibold text-white/70">Est. 2013 · 1,200+ Students · 98% Pass Rate · WAEC Certified</motion.p>
        </motion.div>
        <motion.div className="relative hidden h-[520px] lg:block" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.25 }}>
          {["top-8 left-16 rotate-[-6deg]", "top-32 right-6 rotate-[5deg]", "bottom-8 left-4 rotate-[3deg]"].map((position, index) => (
            <div className={`absolute ${position} h-64 w-80 rounded-3xl border border-white/20 bg-white/12 p-4 shadow-2xl backdrop-blur-sm`} key={position}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-white/25 to-white/5 p-5">
                <div className="h-full rounded-xl bg-[--color-primary-100]/20" />
              </div>
              <span className="absolute bottom-7 left-7 rounded-full bg-white px-4 py-2 text-sm font-bold text-[--color-primary-700]">Student Life {index + 1}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <motion.div
      className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      <div className={`mb-5 h-12 w-[3px] bg-[--color-accent-500] ${align === "center" ? "mx-auto" : ""}`} />
      {eyebrow && <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.05em] text-[--color-accent-500]">{eyebrow}</p>}
      <h2 className="text-4xl leading-tight text-[--color-primary-800] lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-neutral-600">{text}</p>}
    </motion.div>
  );
}

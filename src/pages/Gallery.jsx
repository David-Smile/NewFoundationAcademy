import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "../data/gallery";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

const filters = ["All", "Classroom", "Events", "Sports", "Graduation", "Facilities"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const items = useMemo(() => filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter), [filter]);
  const currentIndex = active ? items.findIndex((item) => item.id === active.id) : -1;
  const move = (step) => setActive(items[(currentIndex + step + items.length) % items.length]);

  return (
    <PageTransition>
      <PageHero eyebrow="Gallery" title="A glimpse of life at New Foundation Academy" />
      <section className="section bg-white">
        <div className="container-nfa">
          <div className="mb-10 flex flex-wrap gap-3">{filters.map((item) => <button className={`rounded-full px-5 py-2.5 text-sm font-bold ${filter === item ? "bg-[--color-primary-500] text-white" : "bg-[--color-primary-50] text-[--color-primary-600]"}`} key={item} onClick={() => setFilter(item)} type="button">{item}</button>)}</div>
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {items.map((item, index) => <button className="mb-6 block w-full break-inside-avoid rounded-2xl bg-[--color-primary-100] p-6 text-left transition hover:-translate-y-1 hover:shadow-md" key={item.id} onClick={() => setActive(item)} type="button"><div className={`grid ${index % 3 === 0 ? "h-72" : "h-56"} place-items-center rounded-xl bg-white/45 text-[--color-primary-600]`}><Camera /><span className="mt-3 block font-bold">{item.category}</span></div><p className="mt-4 font-semibold">{item.label}</p></button>)}
          </div>
        </div>
      </section>
      {active && <div className="fixed inset-0 z-[80] grid place-items-center bg-[--color-primary-900]/90 p-6" role="dialog" aria-modal="true" aria-label="Gallery lightbox"><button className="absolute right-5 top-5 text-white" onClick={() => setActive(null)} type="button" aria-label="Close lightbox"><X /></button><button className="absolute left-5 text-white" onClick={() => move(-1)} type="button" aria-label="Previous image"><ChevronLeft size={36} /></button><div className="grid h-[70vh] w-full max-w-4xl place-items-center rounded-3xl bg-[--color-primary-50] text-center text-[--color-primary-700]"><Camera size={52} /><h2 className="mt-4 text-3xl">{active.label}</h2><p>{active.category}</p></div><button className="absolute right-5 text-white" onClick={() => move(1)} type="button" aria-label="Next image"><ChevronRight size={36} /></button></div>}
    </PageTransition>
  );
}

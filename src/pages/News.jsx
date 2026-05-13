import { useMemo, useState } from "react";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { newsItems } from "../data/news";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

const filters = ["All", "Academics", "Events", "Sports", "Arts", "Announcements"];

export default function News() {
  const [filter, setFilter] = useState("All");
  const items = useMemo(() => filter === "All" ? newsItems : newsItems.filter((item) => item.category === filter), [filter]);

  return (
    <PageTransition>
      <PageHero eyebrow="News & Events" title="Stories from our school community" />
      <section className="section bg-white">
        <div className="container-nfa">
          <div className="mb-10 flex flex-wrap gap-3">{filters.map((item) => <button className={`rounded-full px-5 py-2.5 text-sm font-bold ${filter === item ? "bg-[--color-primary-500] text-white" : "bg-[--color-primary-50] text-[--color-primary-600]"}`} key={item} onClick={() => setFilter(item)} type="button">{item}</button>)}</div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => <Card className="overflow-hidden" key={item.id}><div className="h-44 bg-[--color-primary-100]" /><div className="p-6"><Badge>{item.category}</Badge><p className="mt-4 text-sm font-semibold text-neutral-500">{item.date}</p><h2 className="mt-2 font-body text-xl font-bold text-[--color-primary-800]">{item.title}</h2><p className="mt-3 line-clamp-2 text-sm leading-7 text-neutral-600">{item.excerpt}</p><a className="mt-5 inline-block text-sm font-bold text-[--color-primary-500]" href="#">Read More →</a></div></Card>)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

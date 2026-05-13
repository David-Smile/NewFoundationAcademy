import { ArrowRight } from "lucide-react";
import { newsItems } from "../../data/news";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

export function NewsPreview() {
  return (
    <section className="section bg-white">
      <div className="container-nfa">
        <SectionHeading align="center" eyebrow="News & Events" title="Upcoming at NFA" />
        <div className="grid gap-5">
          {newsItems.slice(0, 3).map((item) => (
            <Card className="grid gap-5 p-6 md:grid-cols-[160px_1fr_auto] md:items-center" key={item.id}>
              <Badge>{item.category}</Badge>
              <div>
                <p className="text-sm font-semibold text-neutral-500">{item.date}</p>
                <h3 className="mt-1 font-body text-xl font-bold text-[--color-primary-800]">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.excerpt}</p>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-bold text-[--color-primary-500]" href="/news">Read More <ArrowRight size={16} /></a>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center"><Button variant="secondary" to="/news">View All News</Button></div>
      </div>
    </section>
  );
}

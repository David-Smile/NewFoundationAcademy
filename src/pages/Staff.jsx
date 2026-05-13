import { useMemo, useState } from "react";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { staffMembers } from "../data/staff";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

const departments = ["All", "Nursery", "Primary", "Secondary", "Admin"];

export default function Staff() {
  const [department, setDepartment] = useState("All");
  const leadership = staffMembers.slice(0, 4);
  const faculty = useMemo(() => department === "All" ? staffMembers : staffMembers.filter((member) => member.department === department), [department]);

  return (
    <PageTransition>
      <PageHero eyebrow="Staff & Faculty" title="Teachers who know every child by name" />
      <section className="section bg-white">
        <div className="container-nfa">
          <h2 className="mb-8 text-4xl text-[--color-primary-800]">Leadership Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{leadership.map((member) => <Card className="p-6 text-center" key={member.id}><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[--color-primary-500] font-bold text-white">{member.initials}</span><h3 className="mt-5 font-body text-lg font-bold">{member.name}</h3><p className="text-sm font-semibold text-[--color-primary-500]">{member.title}</p><p className="mt-3 text-sm leading-7 text-neutral-600">{member.bio}</p></Card>)}</div>
        </div>
      </section>
      <section className="section bg-[--color-surface]">
        <div className="container-nfa">
          <div className="mb-8 flex flex-wrap gap-3">{departments.map((item) => <button className={`rounded-full px-5 py-2.5 text-sm font-bold ${department === item ? "bg-[--color-primary-500] text-white" : "bg-white text-[--color-primary-600]"}`} key={item} onClick={() => setDepartment(item)} type="button">{item}</button>)}</div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{faculty.map((member) => <Card className="p-6" key={member.id}><span className="grid h-14 w-14 place-items-center rounded-full bg-[--color-primary-100] font-bold text-[--color-primary-700]">{member.initials}</span><h3 className="mt-5 font-body text-lg font-bold">{member.name}</h3><p className="text-sm text-neutral-600">{member.subject}</p><Badge className="mt-4">{member.department}</Badge></Card>)}</div>
        </div>
      </section>
    </PageTransition>
  );
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

const steps = ["Inquiry", "Application", "Assessment", "Offer Letter", "Enrollment"];
const levels = ["Nursery", "Primary", "Secondary"];

export default function Admissions() {
  const [open, setOpen] = useState("Nursery");
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const submit = (data) => { console.log("Admission inquiry", data); setSuccess(true); reset(); };

  return (
    <PageTransition>
      <PageHero eyebrow="Admissions" title="A clear path from inquiry to enrollment" />
      <section className="section bg-white">
        <div className="container-nfa">
          <SectionHeading eyebrow="Process" title="Five simple admission steps" />
          <div className="grid gap-4 lg:grid-cols-5">{steps.map((step, index) => <Card className="relative p-6" key={step}><span className="grid h-10 w-10 place-items-center rounded-full bg-[--color-primary-500] font-bold text-white">{index + 1}</span><h3 className="mt-5 font-body text-lg font-bold">{step}</h3></Card>)}</div>
        </div>
      </section>
      <section className="section bg-[--color-surface]">
        <div className="container-nfa grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Requirements" title="Admission requirements by level" />
            <div className="grid gap-3">{levels.map((level) => <div className="rounded-2xl border border-neutral-200 bg-white" key={level}><button className="flex w-full justify-between p-5 font-bold" onClick={() => setOpen(open === level ? "" : level)} type="button">{level}<span>{open === level ? "-" : "+"}</span></button>{open === level && <p className="px-5 pb-5 text-sm leading-7 text-neutral-600">Birth certificate, previous school record where applicable, recent passport photograph, completed application form, and assessment interview.</p>}</div>)}</div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white"><table className="w-full text-left text-sm"><tbody>{[["First Term", "September - December", "Resumption & assessments"], ["Second Term", "January - April", "Parent consultation"], ["Third Term", "May - July", "Promotion exams"]].map((row) => <tr className="border-t first:border-t-0" key={row[0]}>{row.map((cell) => <td className="p-4" key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
          </div>
          <Card className="p-6 lg:p-8">
            <h2 className="text-3xl text-[--color-primary-800]">Admission Inquiry Form</h2>
            {success && <p className="mt-4 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">Thank you. Your inquiry has been received.</p>}
            <form className="mt-6 grid gap-5" onSubmit={handleSubmit(submit)}>
              {[["parentName", "Parent's Full Name"], ["email", "Email Address"], ["phone", "Phone Number"], ["childName", "Child's Name"], ["dob", "Child's Date of Birth"]].map(([name, label]) => <div key={name}><label className="label" htmlFor={name}>{label} *</label><input className="field" id={name} type={name === "email" ? "email" : name === "dob" ? "date" : "text"} {...register(name, { required: `${label} is required` })} />{errors[name] && <p className="field-error">{errors[name].message}</p>}</div>)}
              <div><label className="label" htmlFor="level">Level Applying For *</label><select className="field" id="level" {...register("level", { required: "Select a level" })}><option value="">Select level</option>{levels.map((level) => <option key={level}>{level}</option>)}</select>{errors.level && <p className="field-error">{errors.level.message}</p>}</div>
              <div><label className="label" htmlFor="source">How did you hear about us?</label><select className="field" id="source" {...register("source")}><option>Referral</option><option>Social Media</option><option>Search</option><option>School Visit</option></select></div>
              <div><label className="label" htmlFor="message">Message</label><textarea className="field min-h-32" id="message" {...register("message")} /></div>
              <Button type="submit">Submit Inquiry</Button>
            </form>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}

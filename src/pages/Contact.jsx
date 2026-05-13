import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/layout/PageTransition";
import { PageHero } from "./PageHero";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const submit = (data) => { console.log("Contact form", data); setSuccess(true); reset(); };

  return (
    <PageTransition>
      <PageHero eyebrow="Contact" title="Speak with New Foundation Academy" />
      <section className="section bg-white">
        <div className="container-nfa grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[--color-primary-800] p-8 text-white lg:p-10">
            <h2 className="text-4xl">Visit or contact our office</h2>
            <p className="mt-4 leading-8 text-white/70">Our admissions and administrative team can help with school visits, fees, placement, and general inquiries.</p>
            <div className="mt-8 grid gap-4">
              {[[MapPin, "Address", "NFA Campus, Lagos, Nigeria"], [Phone, "Phone", "+234 000 000 0000"], [Mail, "Email", "info@newfoundationacademy.edu"], [Clock, "Office Hours", "Mon-Fri: 8:00 AM - 4:00 PM"]].map(([Icon, label, value]) => <div className="flex gap-4 rounded-2xl bg-white/10 p-4" key={label}><Icon className="mt-1 text-[--color-accent-400]" /><div><p className="font-bold">{label}</p><p className="text-sm text-white/70">{value}</p></div></div>)}
            </div>
          </div>
          <Card className="p-6 lg:p-8">
            <h2 className="text-3xl text-[--color-primary-800]">Contact Form</h2>
            {success && <p className="mt-4 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">Message sent. We will respond soon.</p>}
            <form className="mt-6 grid gap-5" onSubmit={handleSubmit(submit)}>
              {["name", "email", "phone", "subject"].map((name) => <div key={name}><label className="label capitalize" htmlFor={name}>{name} *</label><input className="field" id={name} type={name === "email" ? "email" : "text"} {...register(name, { required: `${name} is required` })} />{errors[name] && <p className="field-error">{errors[name].message}</p>}</div>)}
              <div><label className="label" htmlFor="message">Message *</label><textarea className="field min-h-36" id="message" {...register("message", { required: "Message is required" })} />{errors.message && <p className="field-error">{errors.message.message}</p>}</div>
              <Button type="submit">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
      <section className="pb-24 bg-white">
        <div className="container-nfa"><div className="grid h-80 place-items-center rounded-3xl bg-[--color-primary-50] text-center text-[--color-primary-700]"><MapPin size={40} /><h2 className="mt-4 text-3xl">NFA Campus · Lagos, Nigeria</h2></div></div>
      </section>
    </PageTransition>
  );
}

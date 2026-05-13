import { useState } from "react";
import { Button } from "../components/ui/Button";
import { PageTransition } from "../components/layout/PageTransition";

export default function Portal() {
  const [message, setMessage] = useState("");
  const submit = (event) => {
    event.preventDefault();
    setMessage("Login functionality coming soon");
  };

  return (
    <PageTransition>
      <section className="grid min-h-screen bg-[--color-surface] pt-20 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="flex items-center bg-[--color-primary-900] p-8 text-white lg:p-14">
          <div>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-[--color-primary-500] font-display text-3xl">NFA</span>
            <h1 className="mt-8 text-5xl">New Foundation Academy</h1>
            <p className="mt-5 leading-8 text-white/70">Access school resources, announcements, timetables, and academic updates.</p>
          </div>
        </div>
        <div className="grid place-items-center p-6">
          <form className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft" onSubmit={submit}>
            <h2 className="text-4xl text-[--color-primary-800]">Student / Parent Portal</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Access results, timetables, and school announcements.</p>
            {message && <p className="mt-4 rounded-xl bg-[--color-accent-100] p-4 text-sm font-semibold text-[--color-primary-800]">{message}</p>}
            <div className="mt-6"><label className="label" htmlFor="studentId">Student/Admission ID</label><input className="field" id="studentId" required /></div>
            <div className="mt-5"><label className="label" htmlFor="password">Password</label><input className="field" id="password" required type="password" /></div>
            <div className="mt-5 flex items-center justify-between text-sm"><label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label><a className="font-semibold text-[--color-primary-500]" href="#">Forgot password?</a></div>
            <Button className="mt-7 w-full" type="submit">Sign In</Button>
            <a className="mt-5 block text-center text-sm font-semibold text-[--color-primary-500]" href="/contact">Contact Admin</a>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}

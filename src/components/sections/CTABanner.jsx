import { Button } from "../ui/Button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[--color-primary-800] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,120,212,0.35),transparent_42%)]" />
      <div className="container-nfa relative text-center">
        <h2 className="text-4xl lg:text-5xl">Ready to Join the New Foundation Family?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">Start your child's admission journey or schedule a visit to see our learning environment.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="white" to="/admissions">Apply Now</Button>
          <Button variant="ghostWhite" to="/contact">Schedule a Visit</Button>
        </div>
      </div>
    </section>
  );
}

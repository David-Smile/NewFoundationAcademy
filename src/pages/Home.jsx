import { AboutPreview } from "../components/sections/AboutPreview";
import { CTABanner } from "../components/sections/CTABanner";
import { Hero } from "../components/sections/Hero";
import { NewsPreview } from "../components/sections/NewsPreview";
import { ProgramsPreview } from "../components/sections/ProgramsPreview";
import { StatsBar } from "../components/sections/StatsBar";
import { PageTransition } from "../components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ProgramsPreview />
      <NewsPreview />
      <CTABanner />
    </PageTransition>
  );
}

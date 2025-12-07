import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { USP } from "@/components/sections/USP";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <USP />
        <CaseStudies />
        <Process />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

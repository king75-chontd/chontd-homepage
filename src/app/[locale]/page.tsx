import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessDivisions from "@/components/BusinessDivisions";
import CTABanner from "@/components/CTABanner";
import ProjectsPipeline from "@/components/ProjectsPipeline";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <BusinessDivisions />
      </ScrollReveal>
      <ScrollReveal>
        <CTABanner />
      </ScrollReveal>
      <ScrollReveal>
        <ProjectsPipeline />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <Insights />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}

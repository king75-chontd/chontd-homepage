import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessDivisions from "@/components/BusinessDivisions";
import ProjectsPipeline from "@/components/ProjectsPipeline";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BusinessDivisions />
      <ProjectsPipeline />
      <Insights />
      <Contact />
    </main>
  );
}

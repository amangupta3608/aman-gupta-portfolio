import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Pipeline } from "@/components/sections/Pipeline";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { ScrollProgress } from "@/components/shared/ScrollProgress";

export default function Home() {
  return (
    <main className="relative isolate">
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Pipeline />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
      <CommandPalette />
    </main>
  );
}

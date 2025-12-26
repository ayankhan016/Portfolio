import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="space-y-32">
      <Hero />
      <About/>
      <Skills />
      <Work />
      <Education />
      <Contact />
    </main>
  );
}

import { resume } from "@/content/resume";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div id="top" />
      <Header email={resume.email} />

      <Hero data={resume} />
      <Highlights data={resume} />

      <Projects data={resume} />
      <Experience data={resume} />
      <Skills data={resume} />
      <Certifications data={resume} />
      <Contact data={resume} />

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {resume.name}
      </footer>
    </main>
  );
}

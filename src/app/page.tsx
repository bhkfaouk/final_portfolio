import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPortfolioData } from "@/lib/portfolio";

export default function Home() {
  const data = getPortfolioData();

  return (
    <>
      <Navbar personal={data.personal} />
      <main className="flex-1">
        <Hero personal={data.personal} />
        <About personal={data.personal} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Projects items={data.projects} />
        <Education
          education={data.education}
          certifications={data.certifications}
        />
        <Contact personal={data.personal} />
      </main>
      <Footer personal={data.personal} />
    </>
  );
}

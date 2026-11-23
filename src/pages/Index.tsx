import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollEnhancements from "@/components/ScrollEnhancements";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <div className="opacity-100 transition-opacity duration-500">
        {/* Global background: navy base + soft amber/teal glows */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
          <div className="absolute -left-[15%] -top-[20%] h-[70vh] w-[60vw] rounded-full bg-glow-amber/10 blur-[120px] dark:bg-glow-amber/25" />
          <div className="absolute -right-[15%] top-[30%] h-[80vh] w-[55vw] rounded-full bg-glow-teal/10 blur-[120px] dark:bg-glow-teal/20" />
        </div>

        <Header />
        <main>
          <Hero />
          {/* <About /> */}
          <Projects />
          <Skills />
          <Certifications />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollEnhancements />
        <Toaster />
      </div>
    </>
  );
};

export default Index;

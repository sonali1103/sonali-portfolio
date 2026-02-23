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
import ThemeToggle from "@/components/ThemeToggle";
import { Toaster } from "@/components/ui/toaster";

const heroBg = "/hero-bg.jpg";

const Index = () => {
  return (
    <>
      <div className="opacity-100 transition-opacity duration-500">
        {/* Global Parallax Background */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.95), hsl(var(--background) / 0.98)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

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
        <ThemeToggle />
        <Toaster />
      </div>
    </>
  );
};

export default Index;

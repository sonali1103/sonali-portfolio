import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo, typewriterWords, professionalSummary } from "@/data/portfolio";
import profileImage from "/sonali.jpeg";

const heroBg = "/hero-bg.jpg";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax-bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--charcoal) / 0.7), hsl(var(--charcoal) / 0.9)), url(${heroBg})`,
        }}
      />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gold font-medium mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
              style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-6"
              style={{ color: '#D4AF37', textShadow: '0 3px 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
            >
              {personalInfo.title}
            </motion.h2>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-6 space-y-2"
            >
              {professionalSummary.slice(0, 3).map((line, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: '#E8E8E8', textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 5px rgba(0,0,0,0.6)' }}
                >
                  {line}
                </p>
              ))}
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-8 h-8"
            >
              <span style={{ color: '#E8E8E8', textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 5px rgba(0,0,0,0.6)' }}>
                Building Enterprise Solutions with{" "}
              </span>
              <span className="text-gradient-gold font-semibold">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="btn-elastic ripple px-8 py-4 bg-gold text-charcoal font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowDown className="w-5 h-5" />
              </button>
              <a
                href="/resume-AWL-6281-Sonali Vedaraju.pdf"
                download
                className="btn-elastic ripple px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gold/10"
              >
                Download Resume
                <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 100,
              delay: 0.5,
            }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold/30 shadow-gold">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-pulse-soft" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-silver/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-gold rounded-full" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;

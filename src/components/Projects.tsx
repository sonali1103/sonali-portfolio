import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="py-10 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Project Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeIndex === index
                ? "bg-gold text-charcoal shadow-gold"
                : "glass text-foreground hover:bg-gold/10 hover:text-gold border border-border"
                }`}
            >
              {project.shortTitle}
            </button>
          ))}
        </motion.div>

        {/* Project Card */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 glass rounded-full hover:bg-gold/10 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gold" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 glass rounded-full hover:bg-gold/10 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gold" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl overflow-hidden shadow-luxury"
            >
              <div className="grid lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{activeProject.title}</h3>

                  <ul className="space-y-3 mb-6">
                    {activeProject.description.map((point, i) => (
                      <li key={i} className="text-sm leading-relaxed flex gap-2 text-foreground">
                        <span className="text-gold mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="skill-chip px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full border border-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-gold w-8" : "bg-silver/30 hover:bg-silver/50"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

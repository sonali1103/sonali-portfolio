import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const hasOddCount = projects.length % 2 === 1;

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white text-shadow-heading">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const isLoneLast = hasOddCount && index === projects.length - 1;

            return (
              <motion.div
                key={project.title}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: reduceMotion ? 0.2 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className={`h-full ${isLoneLast
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)]"
                  : ""
                  }`}
              >
                <article className="glass rounded-[2rem] border border-border/60 p-8 lg:p-10 shadow-luxury flex flex-col h-full transition-[transform,border-color] duration-300 hover:border-gold/30 motion-safe:hover:-translate-y-1">
                  {/* Header: category + title, View Code */}
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3 mb-6">
                    <div className="min-w-0 flex-1 basis-[14rem]">
                      {project.category && (
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-3">
                          {project.category}
                        </p>
                      )}
                      <h3 className="text-2xl font-serif font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View code for ${project.title}`}
                        className="inline-flex items-center min-h-10 shrink-0 px-5 py-2 text-sm font-medium rounded-lg border border-gold text-gold hover:bg-gold/10 transition-all duration-300"
                      >
                        View Code
                      </a>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
                        <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-gold shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-auto pt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="skill-chip px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full border border-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

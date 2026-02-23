import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experience)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-8 shadow-luxury hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border border-gold/10 hover:border-gold/30 overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-gold" />
              <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                {exp.role}
              </h3>
            </div>
            <p className="text-lg font-medium text-gold/90 mb-2">{exp.company}</p>
            <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {exp.dates}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6" />

        {/* Responsibilities */}
        <div className="mb-6">
          <ul className="space-y-3">
            {exp.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                <span className="text-gold mt-1 flex-shrink-0">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-gold/10 to-gold/5 text-gold rounded-full border border-gold/20 hover:border-gold/40 hover:bg-gold/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white font-serif font-bold mb-4">
            Professional <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            A track record of delivering impactful solutions across diverse industries
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

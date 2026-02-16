import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { professionalSummary, stats, skills } from "@/data/portfolio";

const CountUp = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const SkillBar = ({ skill, level, delay }: { skill: string; level: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-gold">{level}%</span>
      </div>
      <div className="skill-bar group-hover:scale-y-125 transition-transform">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const topSkills = [
    { name: "SQL & Data Analytics", level: 95 },
    { name: "Power BI & Tableau", level: 90 },
    { name: "Business Requirements", level: 92 },
    { name: "Agile & Scrum", level: 88 },
  ];

  return (
    <section id="about" className="py-10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}
            >
              About <span className="text-gradient-gold">Me</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 mb-12 shadow-luxury"
          >
            {professionalSummary.map((paragraph, index) => (
              <p key={index} className="leading-relaxed mb-4 last:mb-0 text-foreground">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center shadow-luxury pulse-glow"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-8 shadow-luxury"
          >
            <h3 className="text-xl font-serif font-semibold mb-6 text-foreground">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {topSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  delay={0.7 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

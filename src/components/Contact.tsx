import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, ExternalLink, Github, type LucideIcon } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
  ariaLabel?: string;
};

const links: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    href: `tel:${personalInfo.phone.replace(/[\s()-]/g, "")}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: ExternalLink,
    external: true,
    ariaLabel: "Open LinkedIn profile (opens in new tab)",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    external: true,
    ariaLabel: "Open GitHub profile (opens in new tab)",
  },
];

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-10 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white text-shadow-heading">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
          className="max-w-6xl mx-auto glass rounded-[2rem] border border-border/60 shadow-luxury p-6 md:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-12 items-center">
            {/* Intro */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">Let's Connect</h3>
              <p className="leading-relaxed text-foreground/80 max-w-xl">
                I'm always open to discussing new opportunities, projects, or partnerships. Feel free to reach
                out!
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {links.map(({ label, href, icon: Icon, external, ariaLabel }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : 0.3 + 0.1 * i,
                  }}
                >
                  <a
                    href={href}
                    aria-label={ariaLabel}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 w-full px-5 py-3 rounded-xl border border-border bg-card/40 transition-all duration-300 hover:border-gold/40 hover:shadow-gold hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                  >
                    <span className="font-medium text-foreground">{label}</span>
                    <Icon
                      className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-gold transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

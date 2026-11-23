import { animate, motion, useReducedMotion, type Variants } from "framer-motion";
import { ExternalLink, Github, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import {
  certifications,
  coreStack,
  personalInfo,
  professionalSummary,
  projects,
  skills,
  stats,
  typewriterWords,
} from "@/data/portfolio";

const roleChips = personalInfo.title.split("|").map((role) => role.trim()).filter(Boolean);

const phoneHref = personalInfo.phone.replace(/[^\d+]/g, "");

// All numbers derived from portfolio data
const snapshotStats = [
  { label: stats[0].label, value: stats[0].value, suffix: stats[0].suffix },
  { label: "Projects", value: projects.length, suffix: "" },
  { label: "Certifications", value: certifications.length, suffix: "" },
  { label: "Skills", value: Object.values(skills).reduce((total, list) => total + list.length, 0), suffix: "" },
];

const sectionLabel = "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const secondaryButton = `inline-flex items-center justify-center rounded-xl border border-card-border bg-background/60 px-6 py-3.5 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`;

const profileLink = `flex w-full items-center justify-between rounded-xl border border-card-border bg-background/60 px-5 py-3 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
  }),
};

/** Counts up to `value` once on mount; shows the final value immediately with reduced motion. */
const CountUp = ({ value }: { value: number }) => {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.2,
      delay: 0.3,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value, reduceMotion]);

  return (
    <>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </>
  );
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const word = typewriterWords[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1));
          } else {
            setIsDeleting(true);
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
      // Pause on the full word before deleting
      !isDeleting && displayText.length === word.length ? 1500 : isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, reduceMotion]);

  const typedWord = reduceMotion ? typewriterWords[0] : displayText;
  const cardMotion = (index: number) => ({
    variants: cardVariants,
    custom: index,
    initial: reduceMotion ? false : ("hidden" as const),
    animate: "visible" as const,
  });

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-8 pt-20">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:gap-10 lg:grid-cols-[1.45fr_1fr] lg:px-8">
        {/* Left card — intro */}
        <motion.article {...cardMotion(0)} className="card-glass min-w-0 p-6 sm:p-8 md:p-10">
          {/* Status pill */}
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-card-border px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </p>

          {/* Name */}
          <h1 className="text-shadow-none mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="mt-4 font-serif text-xl font-normal md:text-2xl">
            <span className="text-gradient-title">{personalInfo.title}</span>
          </p>

          {/* Summary */}
          <p className="mt-6 max-w-[70ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            {professionalSummary[0]}
          </p>

          {/* Typewriter */}
          <p className="mt-5 min-h-[1.75rem] text-lg text-muted-foreground md:text-xl">
            Building Enterprise Solutions with{" "}
            <span className="font-semibold text-gradient-brand">{typedWord}</span>
            {!reduceMotion && (
              <span className="animate-blink text-accent-gold" aria-hidden="true">
                |
              </span>
            )}
          </p>

          {/* Role chips */}
          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Roles">
            {roleChips.map((role) => (
              <li
                key={role}
                className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/35"
              >
                {role}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className={`inline-flex items-center justify-center rounded-xl bg-gradient-brand px-7 py-3.5 font-semibold text-on-brand transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
            >
              View Projects
            </button>
            <button type="button" onClick={() => scrollTo("experience")} className={secondaryButton}>
              View Experience
            </button>
            <a href="/resume-AWL-6281-Sonali%20Vedaraju.pdf" download className={secondaryButton}>
              Download Resume
            </a>
          </div>
        </motion.article>

        {/* Right card — recruiter snapshot */}
        <motion.aside
          {...cardMotion(1)}
          aria-labelledby="snapshot-label"
          className="card-glass min-w-0 p-6 sm:p-8"
        >
          <p id="snapshot-label" className={sectionLabel}>
            Recruiter Snapshot
          </p>

          {/* Contact */}
          <ul className="mt-4 space-y-2.5 text-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <a
                href={`mailto:${personalInfo.email}`}
                className={`break-all rounded-sm transition-colors hover:text-accent-gold ${focusRing}`}
              >
                {personalInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <a
                href={`tel:${phoneHref}`}
                className={`rounded-sm transition-colors hover:text-accent-gold ${focusRing}`}
              >
                {personalInfo.phone}
              </a>
            </li>
          </ul>

          {/* Profile links */}
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={profileLink}>
              Open LinkedIn
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={profileLink}>
              Open GitHub
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <hr className="my-4 border-card-border" />

          {/* Stats */}
          <dl className="grid grid-cols-2 gap-3">
            {snapshotStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 rounded-2xl border border-card-border bg-background/40 px-4 py-3">
                <dt className="text-sm text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-bold text-foreground md:text-4xl">
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>

          <hr className="my-4 border-card-border" />

          {/* Core stack */}
          <p className={sectionLabel}>Core Stack</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Core stack">
            {coreStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold transition-colors hover:border-accent-gold/70"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;

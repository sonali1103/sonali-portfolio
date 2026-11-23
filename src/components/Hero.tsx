import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo, typewriterWords, professionalSummary } from "@/data/portfolio";

const roleChips = personalInfo.title.split("|").map((role) => role.trim()).filter(Boolean);

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const secondaryButton = `inline-flex items-center justify-center rounded-xl border border-card-border bg-background/60 px-6 py-3.5 font-display font-bold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-24 md:pt-28">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:gap-10 lg:grid-cols-[1.45fr_1fr] lg:px-8">
        {/* Left card — intro */}
        <article className="card-glass min-w-0 p-6 sm:p-8 md:p-10 lg:p-14">
          {/* Status pill */}
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-card-border px-4 py-1.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </p>

          {/* Name */}
          <h1 className="text-shadow-none mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="mt-6 font-display text-2xl font-semibold md:text-3xl">
            <span className="text-gradient-title">{personalInfo.title}</span>
          </p>

          {/* Summary */}
          <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
            {professionalSummary[0]}
          </p>

          {/* Typewriter */}
          <p className="mt-5 min-h-[1.75rem] text-lg text-muted-foreground md:text-xl">
            Building Enterprise Solutions with{" "}
            <span className="font-semibold text-gradient-brand">{displayText}</span>
            <span className="animate-blink text-accent-gold motion-reduce:animate-none" aria-hidden="true">
              |
            </span>
          </p>

          {/* Role chips */}
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Roles">
            {roleChips.map((role) => (
              <li
                key={role}
                className="rounded-full border border-foreground/15 px-4 py-1.5 font-display text-sm font-medium text-foreground transition-colors hover:border-foreground/35"
              >
                {role}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className={`inline-flex items-center justify-center rounded-xl bg-gradient-brand px-7 py-3.5 font-display font-bold text-on-brand transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
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
        </article>

        {/* Right card — recruiter snapshot (step 5) */}
        <aside aria-label="Recruiter snapshot" className="card-glass min-w-0 p-6 sm:p-8 lg:p-10" />
      </div>
    </section>
  );
};

export default Hero;

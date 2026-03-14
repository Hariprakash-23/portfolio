import { Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ResumeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resume" className="relative">
      <div ref={ref} className="section-container">
        <SectionHeading title="Resume" subtitle="A snapshot of my professional journey" />
        <div
          className={`glass-card p-8 md:p-12 max-w-2xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 neon-border">
              <Download size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Download My CV
            </h3>
            <p className="text-muted-foreground">
              Get a comprehensive overview of my skills, experience, projects, and academic achievements in a single document.
            </p>
          </div>
          <a
            href="/Hariprakash_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[var(--neon-glow-strong)] transition-all duration-300"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

import { useEffect, useState } from "react";
import { Download, FolderOpen, Mail } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

const titles = ["Aspiring Cloud Engineer",];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1));
          if (displayText.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating particles (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background:
                i % 3 === 0
                  ? "hsla(245, 75%, 60%, 0.4)"
                  : i % 3 === 1
                  ? "hsla(245, 60%, 70%, 0.4)"
                  : "hsla(0, 0%, 100%, 0.2)",
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      <div className="section-container w-full pt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Info (unchanged) */}
          <div className="flex-1 animate-fade-in-up">
            <div className="glass-card p-8 md:p-10" style={{ borderRadius: "20px" }}>
              <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-4 leading-tight">
                Hi, I'm <br />
                <span className="gradient-text">Hariprakash K A</span>
              </h1>
              <div className="h-8 mb-6">
                <span className="text-lg sm:text-xl text-muted-foreground font-body">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </div>
              <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Building intelligent systems and cloud solutions that don’t just work — they think, adapt, and scale with purpose.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#resume"
                  className="gradient-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-foreground font-semibold"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
                >
                  <FolderOpen size={18} />
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-semibold hover:border-primary/40 hover:text-primary transition-all duration-300"
                >
                  <Mail size={18} />
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile photo (smaller container) */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 blur-3xl animate-pulse-glow" />
              {/* Circular frame - reduced size */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden neon-border p-1 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={heroPhoto}
                  alt="Hariprakash K A - Cloud & AI Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Orbiting dots (optional, kept) */}
              <div className="absolute -inset-8 animate-spin-slow pointer-events-none">
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/60" />
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
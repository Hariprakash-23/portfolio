import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contacts = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "hariofficial965@gmail.com",
    href: "mailto:hariofficial965@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    label: "Mobile",
    value: "+91 9843111357",
    href: "tel:+919843111357",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "hariprakashka",
    href: "https://www.linkedin.com/in/hariprakashka",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "Hariprakash-23",
    href: "https://github.com/Hariprakash-23",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact">
      <div ref={ref} className="section-container">
        <SectionHeading title="Get in Touch" subtitle="Let's connect and build something amazing together" />

        {/* Glass card container */}
        <div className="rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-6 flex items-center gap-4 group transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary neon-border group-hover:bg-primary/20 transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-foreground font-medium text-sm">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
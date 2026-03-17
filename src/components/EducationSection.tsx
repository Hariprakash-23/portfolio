import { GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech Computer Science Engineering",
    period: "2023 – Present",
    grade: "CGPA: 8.70",
  },
  {
    institution: "Sri Vageesha Vidhyashram",
    location: "Trichy, Tamil Nadu",
    degree: "CBSE – Senior Secondary",
    period: "2023",
    grade: "8.54",
  },
  {
    institution: "Sri Vageesha Vidhyashram",
    location: "Trichy, Tamil Nadu",
    degree: "CBSE – Secondary",
    period: "2021",
    grade: "8.22",
  },
];

const extraCurricular = [
  "AI & ML for Real-world Problem Solving training (June–July 2025): Applied AI/ML techniques to tackle real-world challenges through practical, data-driven solutions including preprocessing, building predictive models, and fine-tuning for higher accuracy.",
  "Active participant in coding competitions and hackathons, consistently enhancing problem-solving skills.",
  "Engaged in collaborative open-source contributions and peer-to-peer technical mentoring.",
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education">
      <div ref={ref} className="section-container">
        <SectionHeading title="Education & Activities" subtitle="Academic foundation and extracurricular pursuits" />

        {/* Glass card container */}
        <div className="rounded-3xl bg-black/65 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-10">
          {/* Education Timeline */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative border-l-2 border-primary/60 pl-8 space-y-10">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={28} className="text-primary" />
                      <h3 className="font-display font-bold text-foreground">{edu.institution}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <MapPin size={20} />
                      {edu.location}
                    </div>
                    <p className="text-muted-foreground text mb-2">{edu.degree}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text text-primary">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <span className="text-sm font-semibold text-primary bg-primary/25 px-3 py-1 rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
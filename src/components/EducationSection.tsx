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
    grade: "85.4%",
  },
  {
    institution: "Sri Vageesha Vidhyashram",
    location: "Trichy, Tamil Nadu",
    degree: "CBSE – Secondary",
    period: "2021",
    grade: "82.2%",
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

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
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
                    <GraduationCap size={18} className="text-primary" />
                    <h3 className="font-display font-bold text-foreground">{edu.institution}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <MapPin size={12} />
                    {edu.location}
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{edu.degree}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Curricular */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-foreground text-xl mb-6 text-center">
            Extra Curricular & Training
          </h3>
          <div className="space-y-4">
            {extraCurricular.map((item, i) => (
              <div
                key={i}
                className={`glass-card p-5 transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 3) * 150}ms` }}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { Code2, Wrench, Cloud, Users, Braces, Database, Container, Server, Monitor, Terminal, Brain, Clock, Shuffle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 size={20} className="text-primary" />,
    skills: [
      { name: "Python", icon: <Code2 size={16} />, level: 90 },
      { name: "Java", icon: <Code2 size={16} />, level: 82 },
      { name: "C", icon: <Braces size={16} />, level: 85 },
      { name: "C++", icon: <Braces size={16} />, level: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: <Monitor size={20} className="text-primary" />,
    skills: [
      { name: "HTML", icon: <Code2 size={16} />, level: 95 },
      { name: "CSS", icon: <Code2 size={16} />, level: 90 },
      { name: "React", icon: <Code2 size={16} />, level: 85 },
      { name: "Flask", icon: <Server size={16} />, level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} className="text-primary" />,
    skills: [
      { name: "AWS", icon: <Cloud size={16} />, level: 85 },
      { name: "Docker", icon: <Container size={16} />, level: 75 },
      { name: "Linux", icon: <Terminal size={16} />, level: 78 },
      { name: "Spring Boot", icon: <Server size={16} />, level: 70 },
    ],
  },
  {
    title: "AI / Data",
    icon: <Brain size={20} className="text-primary" />,
    skills: [
      { name: "Machine Learning", icon: <Brain size={16} />, level: 88 },
      { name: "NetworkX", icon: <Shuffle size={16} />, level: 75 },
      { name: "AI Deadlock Detection", icon: <Brain size={16} />, level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills">
      <div ref={ref} className="section-container">
        <SectionHeading title="Skills" subtitle="Technologies and competencies I've mastered" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass-card p-6 transition-all duration-700 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${ci * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="font-display font-bold text-foreground text-lg">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">{skill.icon}</span>
                    <span className="text-foreground">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

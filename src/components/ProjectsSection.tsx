import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "AeroBot",
    description:
      "A real-world airport assistance chatbot designed to help travelers navigate complex airport environments. The system integrates airport maps, real-time flight data, and traveler preferences to deliver personalized navigation guidance. The chatbot provides timely notifications for gate changes, terminal transfers, and security delays, significantly improving travel efficiency for first-time flyers and passengers with short layovers. Enhanced traveller support efficiency, offering up to 90% faster navigation guidance.",
    tech: ["Python", "HTML", "API Integration"],
    period: "Aug 2025 – Sep 2025",
  },
  {
    title: "AI Powered Quiz Generation Engine",
    description:
      "A real-world AI-driven educational platform designed to generate personalized quizzes based on student learning progress. The system uses AI algorithms and greedy techniques to dynamically adapt questions according to student understanding, improving knowledge retention and learning outcomes. Enhanced real-time adaptiveness and question-selection accuracy by 94%, outperforming static quiz engines.",
    tech: ["Python", "Flask", "AI Algorithms", "Greedy Techniques"],
    period: "Jun 2025 – Jul 2025",
  },
  {
    title: "Learning Management System",
    description:
      "A real-world cloud-based learning management platform designed to improve academic communication and digital learning. The system integrates AWS services such as EC2, S3, Lambda, CloudFront, and Elastic Load Balancing to deliver a scalable and interactive environment for students and educators. Automated end-to-end academic workflows, reducing manual reporting efforts by over 85%.",
    tech: ["AWS", "Python", "HTML", "Cloud Services"],
    period: "Mar 2025 – Apr 2025",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects">
      <div ref={ref} className="section-container">
        <SectionHeading title="Projects" subtitle="Real-world solutions I've built and delivered" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card p-6 flex flex-col transition-all duration-700 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-foreground text-lg">
                  {project.title}
                </h3>
                <ExternalLink size={16} className="text-primary mt-1 flex-shrink-0" />
              </div>
              <p className="text-xs text-primary mb-3 font-medium">{project.period}</p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Icons for technologies
import { FaPython, FaAws, FaHtml5, FaBrain, FaCogs } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";

const projects = [
  {
    title: "University Management System",
    github: "https://github.com/Hariprakash-23/Student-Management-System",
    description: (
      <>
        <p>
          A comprehensive Django-based web application that streamlines academic administration with role-based access for teachers and students. Teachers manage student profiles, courses, attendance, and marks through full CRUD dashboards, while students access their records securely. Integrates AWS S3 for attendance archival and SNS for automated academic notifications.
        </p>
      </>
    ),
    tech: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    ],
  },
  {
    title: "AeroBot – Airport Assistance Chatbot",
    github: "https://github.com/Hariprakash-23/AI-Based-Airport-Travel-Guidance",
    description: (
      <>
        <p>
          An intelligent chatbot that helps travelers navigate complex airport environments using real-time flight data and airport maps. Delivers proactive notifications for gate changes, boarding updates, and security delays. Improves travel efficiency, providing up to 90% faster navigation guidance.
        </p>
      </>
    ),
    tech: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "API Integration", icon: <FaAws className="text-[#FF9900]" /> },
    ],
  },
  {
    title: "AI-Powered Quiz Generation Engine",
    github: "https://github.com/Hariprakash-23/AI-Powered-Quiz-Generation-Engine",
    description: (
      <>
        <p>
          An intelligent educational platform that generates personalized quizzes based on individual student learning progress. Uses AI and greedy algorithms to dynamically adapt question difficulty and content. Achieves up to 94% improvement in question-selection accuracy compared to static systems.
        </p>
      </>
    ),
    tech: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Flask", icon: <SiFlask className="text-[#000000]" /> },
      { name: "AI Algorithms", icon: <FaBrain className="text-[#6B5B95]" /> },
      { name: "Greedy Techniques", icon: <FaCogs className="text-[#4A4A4A]" /> },
    ],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects">
      <div ref={ref} className="section-container">
        <div
          className={`glass-section max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <SectionHeading title="Projects" subtitle="Real-world engineering solutions I've built" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="glass-card p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="font-display font-bold text-foreground text-xl mb-4">
                  {project.title}
                </h3>
                <div className="text-muted-foreground text-base leading-relaxed flex-1 mb-6">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/30 border border-border/60"
                    >
                      <span className="text-base">{tech.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-foreground font-medium hover:bg-primary/80 transition-all duration-300 self-start"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
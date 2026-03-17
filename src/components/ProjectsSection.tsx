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
          A comprehensive, real-world academic management platform built to streamline institutional workflows through secure, role-based access.

The system features dedicated dashboards where teachers manage student records, courses, attendance, and performance using full CRUD capabilities, while students securely access their academic information with ease.

A cloud-integrated architecture leveraging AWS S3 for scalable attendance storage and SNS for automated notifications ensures efficient communication and reduced manual effort across the institution.
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
          A real-world intelligent chatbot designed to simplify airport navigation and enhance the travel experience through real-time, context-aware assistance.

Integration with live flight data, airport maps, and user preferences enables personalized guidance, along with proactive alerts for gate changes, boarding updates, and security delays.

A high-impact solution delivering up to 90% faster navigation support, especially beneficial for first-time travelers and passengers with tight layovers.
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
          An advanced, real-world educational platform focused on delivering personalized learning through intelligent quiz generation.

A system powered by AI algorithms and greedy techniques that dynamically adapts question difficulty and selection based on individual student performance and learning patterns.

A high-precision solution achieving up to 80% improvement in question-selection accuracy, significantly outperforming traditional static quiz systems.
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
        <SectionHeading title="Projects" subtitle="Real-world Solutions I've built" />
          
        <div
          className={`glass-section max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
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
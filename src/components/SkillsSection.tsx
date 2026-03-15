import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Icons from react-icons
import { FaPython, FaJava, FaReact, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiC, SiCplusplus, SiFlask, SiDjango, SiSpringboot, SiLinux, SiMongodb, SiTerraform } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { 
        name: "Flask", 
        icon: (
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <SiFlask className="text-white text-sm" />
          </div>
        )
      },
      { 
        name: "Django", 
        icon: (
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <SiDjango className="text-white text-sm" />
          </div>
        )
      },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC]" /> },
      { name: "Boto3", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills">
      <div ref={ref} className="section-container">
        <div
          className={`glass-section max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <SectionHeading title="Skills" subtitle="Technologies I work with" />
          <div className="space-y-10">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="transition-all duration-700 animate-fade-in-up opacity-100"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <h3 className="text-2xl font-display font-bold text-foreground mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-200"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
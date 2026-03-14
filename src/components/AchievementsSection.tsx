import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  "Earned CRUD Operations Badge from MongoDB University, demonstrating proficiency in database management and operations.",
  "Achieved two Silver Badges on HackerRank for problem-solving and programming, reflecting consistent competitive coding excellence.",
  "Improved quiz generation accuracy by 94% in AI-powered educational system, surpassing traditional static quiz engines.",
  "Designed cloud-based LMS that reduced manual academic reporting efforts by 85%, streamlining institutional workflows.",
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements">
      <div ref={ref} className="section-container">
        <SectionHeading title="Achievements" subtitle="Milestones that define my professional growth" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`glass-card p-6 flex gap-4 items-start transition-all duration-700 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 neon-border">
                <Trophy size={18} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

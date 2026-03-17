import { Edit, TrendingUp, Video } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const activities = [
    {
    icon: <Video size={32} />,
    title: "YouTube Content Creation",
    description:
      "Create product promotion videos and tutorials on YouTube. Engage with an audience and showcase the value of various products.",
    link: "https://studio.youtube.com/channel/UCow4z2M9TnZtotELvQIl2dA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D",
    linkText: "Watch Videos",
  },
  
  {
    icon: <TrendingUp size={32} />,
    title: "Amazon Affiliate Marketing",
    description:
      "Promote products through Amazon Associates program. Curate recommendations and earn commissions while helping users find quality products.",
    link: "#", // Replace with your affiliate link when available
    linkText: "Learn More",
  },
  
  {
    icon: <Edit size={32} />,
    title: "Freelance Editing",
    description:
      "Create gigs and provide professional image & video editing services. Deliver high‑quality visual content for clients across various platforms.",
    link: "https://www.fiverr.com/users/hariprakashka/seller_dashboard",
    linkText: "View Gigs",
  },
];

const ExtraCurricularSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="extra">
      <div ref={ref} className="section-container">
        <SectionHeading
          title="Extra Curricular"
          subtitle="Beyond code – creative & entrepreneurial pursuits"
        />

        <div className="glass-section max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.link && item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline mt-auto"
                  >
                    {item.linkText} →
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm mt-auto">
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;
import { Award, Medal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Certificate images
import postmanImg from "@/assets/postman.png";
import certificate1Img from "@/assets/certificate1.png";
import certificate2Img from "@/assets/certificate2.png";
import certificate3Img from "@/assets/certificate3.png";

// Badge images
import awsArchitectImg from "@/assets/aws.png";
import hackerrankPythonImg from "@/assets/hackerrank.png";

const certificates = [
  { title: "Postman API Fundamentals Student Expert", image: postmanImg, date: "November 2025" },
  { title: "MongoDB Atlas Certification", image: certificate1Img, date: "November 2025" },
  { title: "AI & ML for Real-world Problem Solving – LPU", image: certificate2Img, date: "July 2025" },
  { title: "Privacy and Security in Online Social Media – NPTEL", image: certificate3Img, date: "April 2025" },
];

const badges = [
  { title: "AWS Cloud Architect (Trained)", image: "https://media.licdn.com/dms/image/sync/v2/D5627AQFOVbfgKrX1Pg/articleshare-shrink_1280_800/B56ZnmTGEfHUAQ-/0/1760505389736?e=2147483647&v=beta&t=FoUqqGI-zoLjlZBgfv0uO5W0L-HkF_SZ0pj2h9pd6vo", date: "2025" },
  { title: "HackerRank Python (Basic)", image: "https://media.licdn.com/dms/image/v2/D5622AQEpOjgma5SSug/feedshare-shrink_800/feedshare-shrink_800/0/1716311459481?e=2147483647&v=beta&t=7j8bVguAKLJt9IrMKEFxYph5oNe2X76VPX9iBBHoSRE", date: "2024" },
];

const CertificatesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certificates">
      <div ref={ref} className="section-container">
        <SectionHeading title="Certifications & Badges" subtitle="Professional credentials and skill recognitions" />

        {/* Certificates Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} />
            Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card overflow-hidden group transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-video bg-muted/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="flex items-center justify-center w-full h-full">
                          <svg class="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Medal className="text-primary" size={24} />
            Badges
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, i) => (
              <a
                key={badge.title}
                href={badge.image}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card overflow-hidden group transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + certificates.length) * 100}ms` }}
              >
                <div className="aspect-video bg-muted/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="flex items-center justify-center w-full h-full">
                          <svg class="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <Medal size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{badge.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{badge.date}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
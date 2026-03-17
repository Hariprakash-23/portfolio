import { Award, Medal, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Certificate images
import postmanImg from "@/assets/postman.png";
import certificate1Img from "@/assets/certificate1.png";
import certificate2Img from "@/assets/certificate2.png";
import certificate3Img from "@/assets/certificate3.png";
import postmanBadgeImg from "@/assets/postman-badge.png";
import mongodbBadgeImg from "@/assets/mongodb-badge.png";
import awsImg from "@/assets/aws.png";

const certificates = [
  { title: "Postman API Fundamentals Student Expert", image: postmanImg, date: "November 2025" },
  { title: "MongoDB Atlas Certification", image: certificate1Img, date: "November 2025" },
  { title: "AI & ML for Real-world Problem Solving – LPU", image: certificate2Img, date: "July 2025" },
  { title: "Privacy and Security in Online Social Media – NPTEL", image: certificate3Img, date: "April 2025" },
];

const badges = [
  { 
    title: "CRUD Operations in MongoDB", 
    image: mongodbBadgeImg,
    issuer: "MongoDB University",
    date: "2025",
    verifyUrl: "https://www.credly.com/earner/earned/badge/2e0d913f-c874-42bf-bead-1198620c03c9"
  },
  { 
    title: "Postman API Fundamentals (Postman)", 
    image: postmanBadgeImg,
    issuer: "Postman",
    date: "2025",
    verifyUrl: "https://badges.parchment.com/public/assertions/dN6VGRpiRcOuOw3gE6s_4w?identity__email=kahariprakash23%40lpu.in"
  },
  { 
    title: "AWS Cloud Architect (Trained)", 
    image: awsImg,
    issuer: "AWS Academy",
    date: "2025",
    verifyUrl: "https://www.credly.com/badges/33691847-c014-46a6-9d32-541e0ed4bc5a"
  },
];

const CertificatesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certificates">
      <div ref={ref} className="section-container">
        <SectionHeading title="Certifications & Badges" subtitle="Professional credentials and skill recognitions" />

        {/* Glass container wrapping both sections */}
        <div className="rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-10">
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

          {/* Badges Grid with Verify Buttons */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Medal className="text-primary" size={24} />
              Badges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, i) => (
                <div
                  key={badge.title}
                  className={`glass-card p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(i + certificates.length) * 100}ms` }}
                >
                  {/* Clickable badge image */}
                  <a href={badge.image} target="_blank" rel="noopener noreferrer" className="w-full">
                    <div className="w-20 h-20 mx-auto rounded-xl bg-muted/10 flex items-center justify-center overflow-hidden mb-3">
                      <img
                        src={badge.image}
                        alt={badge.title}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.innerHTML = '<Medal class="w-10 h-10 text-primary/60" />';
                        }}
                      />
                    </div>
                  </a>
                  {/* Badge info */}
                  <h4 className="font-display font-semibold text-foreground text-lg leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-base text-muted-foreground mt-1.5">{badge.issuer} · {badge.date}</p>
                  
                  {/* Verify button - solid indigo with white bold text */}
                  <a
                    href={badge.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-primary text-white font-bold py-2.5 px-4 rounded-lg hover:bg-primary/80 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Verify Badge <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
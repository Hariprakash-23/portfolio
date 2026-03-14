import { useEffect, useState } from "react";
import { Cloud } from "lucide-react";

const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center animate-fade-out" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
      <div className="text-center loader-initials">
        <Cloud size={48} className="text-primary mx-auto mb-4 animate-pulse" />
        <h2 className="text-2xl font-display font-bold gradient-text">HKA</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import onboarding1 from "@/assets/onboarding-connect.png";
import onboarding2 from "@/assets/onboarding-accessible.png";
import onboarding3 from "@/assets/onboarding-safe.png";
import onboarding4 from "@/assets/onboarding-meaningful.png";

const slides = [
  {
    image: onboarding1,
    title: "Inclusive Dating for Everyone",
    description: "A welcoming space where people of all abilities and ages find meaningful connections.",
  },
  {
    image: onboarding2,
    title: "Accessibility-First Experience",
    description: "Large text, voice support, and a simple interface designed with you in mind.",
  },
  {
    image: onboarding3,
    title: "Safe & Verified Community",
    description: "Background checks, verification badges, and 24/7 safety support for peace of mind.",
  },
  {
    image: onboarding4,
    title: "Find Meaningful Connections",
    description: "Whether it's friendship, companionship, or love — your spark is waiting.",
  },
];

const OnboardingScreen = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else navigate("/auth");
  };

  const skip = () => navigate("/auth");

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="flex justify-end pt-6">
        <Button variant="ghost" onClick={skip} className="text-muted-foreground font-semibold text-base">
          Skip
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center gap-6"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              width={280}
              height={280}
              className="object-contain"
            />
            <h2 className="text-2xl font-display font-bold text-foreground px-4">
              {slides[current].title}
            </h2>
            <p className="text-accessible text-muted-foreground px-8">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pb-10 flex flex-col items-center gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Onboarding progress">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              role="tab"
            />
          ))}
        </div>
        <Button onClick={next} size="lg" className="w-full max-w-[320px] h-14 text-lg font-bold rounded-2xl gradient-primary text-primary-foreground shadow-soft">
          {current === slides.length - 1 ? "Get Started" : "Next"}
        </Button>
      </div>
    </MobileLayout>
  );
};

export default OnboardingScreen;

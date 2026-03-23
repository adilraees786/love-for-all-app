import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const interests = ["Reading", "Music", "Cooking", "Gardening", "Travel", "Art", "Movies", "Walking", "Dancing", "Photography", "Games", "Yoga"];
const goals = ["Friendship", "Dating", "Companionship", "Long-term Relationship"];
const accessibilityOptions = ["Large Text", "Voice Support", "Screen Reader", "High Contrast", "Simple Navigation"];

const ProfileSetupScreen = () => {
  const [step, setStep] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedAccess, setSelectedAccess] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const totalSteps = 4;

  const next = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else navigate("/home");
  };
  const back = () => {
    if (step > 0) setStep(step - 1);
    else navigate("/user-type");
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Basic Info</h2>
            <p className="text-muted-foreground text-accessible">Let's start with the basics</p>
            <Input placeholder="Your name" className="h-14 text-lg rounded-2xl bg-card" aria-label="Name" />
            <Input type="number" placeholder="Age" min={20} className="h-14 text-lg rounded-2xl bg-card" aria-label="Age" />
            <select className="h-14 text-lg rounded-2xl bg-card border border-border px-4 text-foreground" aria-label="Gender">
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Your Interests</h2>
            <p className="text-muted-foreground text-accessible">Select what you enjoy</p>
            <div className="flex flex-wrap gap-3">
              {interests.map(i => (
                <button
                  key={i}
                  onClick={() => toggleItem(i, selectedInterests, setSelectedInterests)}
                  className={`px-5 py-3 rounded-2xl font-semibold text-base transition-all ${
                    selectedInterests.includes(i)
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-card text-foreground border border-border"
                  }`}
                  aria-pressed={selectedInterests.includes(i)}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Dating Goals</h2>
            <p className="text-muted-foreground text-accessible">What are you looking for?</p>
            <div className="flex flex-col gap-3">
              {goals.map(g => (
                <button
                  key={g}
                  onClick={() => toggleItem(g, selectedGoals, setSelectedGoals)}
                  className={`p-5 rounded-2xl font-semibold text-lg text-left transition-all ${
                    selectedGoals.includes(g)
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-card text-foreground border border-border"
                  }`}
                  aria-pressed={selectedGoals.includes(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Accessibility Needs</h2>
            <p className="text-muted-foreground text-accessible">We'll adapt the app for you</p>
            <div className="flex flex-col gap-3">
              {accessibilityOptions.map(a => (
                <button
                  key={a}
                  onClick={() => toggleItem(a, selectedAccess, setSelectedAccess)}
                  className={`p-5 rounded-2xl font-semibold text-lg text-left transition-all ${
                    selectedAccess.includes(a)
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-card text-foreground border border-border"
                  }`}
                  aria-pressed={selectedAccess.includes(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="flex items-center gap-3 pt-6 pb-4">
        <button onClick={back} className="p-2 rounded-xl hover:bg-card transition" aria-label="Go back">
          <ChevronLeft size={28} />
        </button>
        <div className="flex-1 flex gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                i <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground font-semibold">{step + 1}/{totalSteps}</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pb-10">
        <Button onClick={next} size="lg" className="w-full h-14 text-lg font-bold rounded-2xl gradient-primary text-primary-foreground shadow-soft">
          {step === totalSteps - 1 ? "Complete Setup" : "Continue"}
        </Button>
      </div>
    </MobileLayout>
  );
};

export default ProfileSetupScreen;

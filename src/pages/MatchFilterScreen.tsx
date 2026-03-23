import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, MapPin, Heart, Accessibility, Sliders } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const MatchFilterScreen = () => {
  const navigate = useNavigate();
  const [ageRange, setAgeRange] = useState([20, 75]);
  const [distance, setDistance] = useState(50);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(["Dating"]);
  const [selectedLangs, setSelectedLangs] = useState<string[]>(["English"]);

  const goals = ["Friendship", "Dating", "Companionship", "Long-term"];
  const langs = ["English", "Spanish", "French", "Chinese", "Arabic"];
  const accessibilityOptions = ["Wheelchair Accessible", "Visual Aid", "Hearing Aid", "Cognitive Support"];
  const [selectedAccess, setSelectedAccess] = useState<string[]>([]);

  const toggle = (arr: string[], item: string, setter: (v: string[]) => void) => {
    setter(arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item]);
  };

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Match Filters</h1>
          <p className="text-muted-foreground text-sm">Refine your perfect match</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Age Range */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-spark-peach flex items-center justify-center">
              <Sliders size={20} className="text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg">Age Range</h3>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-muted-foreground">{ageRange[0]} years</span>
            <span className="text-sm font-semibold text-muted-foreground">{ageRange[1]} years</span>
          </div>
          <input type="range" min={20} max={90} value={ageRange[1]} onChange={e => setAgeRange([ageRange[0], +e.target.value])} className="w-full accent-primary h-2" aria-label="Maximum age" />
        </motion.div>

        {/* Distance */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-spark-blue flex items-center justify-center">
              <MapPin size={20} className="text-secondary-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-lg">Distance</h3>
          </div>
          <p className="text-sm font-semibold text-muted-foreground mb-2">{distance} miles</p>
          <input type="range" min={5} max={200} value={distance} onChange={e => setDistance(+e.target.value)} className="w-full accent-primary h-2" aria-label="Distance range" />
        </motion.div>

        {/* Relationship Goals */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-spark-lavender flex items-center justify-center">
              <Heart size={20} className="text-accent-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-lg">Relationship Goals</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {goals.map(goal => (
              <button key={goal} onClick={() => toggle(selectedGoals, goal, setSelectedGoals)} className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${selectedGoals.includes(goal) ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"}`}>
                {goal}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Language */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-spark-cream flex items-center justify-center">
              <Globe size={20} className="text-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-lg">Language</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {langs.map(lang => (
              <button key={lang} onClick={() => toggle(selectedLangs, lang, setSelectedLangs)} className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${selectedLangs.includes(lang) ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"}`}>
                {lang}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accessibility */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-spark-green/20 flex items-center justify-center">
              <Accessibility size={20} className="text-spark-green" />
            </div>
            <h3 className="font-bold text-foreground text-lg">Accessibility</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {accessibilityOptions.map(opt => (
              <button key={opt} onClick={() => toggle(selectedAccess, opt, setSelectedAccess)} className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${selectedAccess.includes(opt) ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"}`}>
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="py-4">
        <Button onClick={() => navigate("/home")} className="w-full h-14 rounded-2xl text-lg font-bold gradient-primary text-primary-foreground">
          Apply Filters
        </Button>
      </div>
    </MobileLayout>
  );
};

export default MatchFilterScreen;

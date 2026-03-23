import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Smile, Meh, Frown, Heart, Users, BookOpen, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const moods = [
  { icon: "😄", label: "Great", color: "bg-spark-green/20" },
  { icon: "🙂", label: "Good", color: "bg-spark-blue" },
  { icon: "😐", label: "Okay", color: "bg-spark-cream" },
  { icon: "😔", label: "Low", color: "bg-spark-peach" },
  { icon: "😢", label: "Sad", color: "bg-spark-lavender" },
];

const supportGroups = [
  { title: "Singles Over 50", members: 124, next: "Tomorrow, 7 PM", color: "bg-spark-peach" },
  { title: "Dating with Disabilities", members: 89, next: "Wed, 6 PM", color: "bg-spark-blue" },
  { title: "Finding Love Again", members: 156, next: "Fri, 8 PM", color: "bg-spark-lavender" },
];

const resources = [
  { icon: Heart, title: "Self-Care Journal", desc: "Daily prompts for self-love" },
  { icon: BookOpen, title: "Guided Meditation", desc: "5-minute calming exercises" },
  { icon: Sun, title: "Affirmations", desc: "Start your day positively" },
];

const MentalHealthScreen = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Mental Health</h1>
          <p className="text-muted-foreground text-sm">Your well-being matters</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 space-y-6">
        {/* Daily Check-in */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl p-6 shadow-card">
          <h2 className="font-bold text-foreground text-lg mb-1">How are you feeling today?</h2>
          <p className="text-muted-foreground text-sm mb-5">Your daily mood check-in</p>
          <div className="flex justify-between">
            {moods.map(mood => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                  selectedMood === mood.label ? "bg-primary/10 scale-110 shadow-soft" : mood.color
                }`}
              >
                <span className="text-3xl">{mood.icon}</span>
                <span className="text-xs font-bold text-foreground">{mood.label}</span>
              </button>
            ))}
          </div>
          {selectedMood && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-muted-foreground text-sm">
              Thank you for sharing. Remember, it's okay to feel {selectedMood.toLowerCase()}. 💛
            </motion.p>
          )}
        </motion.div>

        {/* Support Groups */}
        <div>
          <h2 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2">
            <Users size={20} className="text-primary" /> Support Groups
          </h2>
          <div className="space-y-3">
            {supportGroups.map((group, i) => (
              <motion.button key={group.title} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="w-full bg-card rounded-2xl p-4 shadow-card flex items-center gap-4 text-left">
                <div className={`w-12 h-12 rounded-xl ${group.color} flex items-center justify-center flex-shrink-0`}>
                  <Users size={22} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{group.title}</h3>
                  <p className="text-sm text-muted-foreground">{group.members} members • Next: {group.next}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Wellness Resources */}
        <div>
          <h2 className="font-bold text-foreground text-lg mb-3">Wellness Resources</h2>
          <div className="grid grid-cols-1 gap-3">
            {resources.map(({ icon: Icon, title, desc }, i) => (
              <motion.button key={title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="bg-card rounded-2xl p-5 shadow-card flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-spark-cream flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default MentalHealthScreen;

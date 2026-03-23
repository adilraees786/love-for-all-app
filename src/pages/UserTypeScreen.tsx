import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Accessibility, Heart, Users, Sparkles } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const userTypes = [
  {
    id: "disability",
    icon: Accessibility,
    title: "Person with a Disability",
    description: "Find connections who understand and appreciate you",
    color: "bg-spark-peach",
  },
  {
    id: "elderly",
    icon: Heart,
    title: "Elderly Peer",
    description: "Connect with others in your age group (60+)",
    color: "bg-spark-blue",
  },
  {
    id: "elderly-disability",
    icon: Users,
    title: "Elderly with a Disability",
    description: "A supportive space designed just for you",
    color: "bg-spark-lavender",
  },
  {
    id: "ally",
    icon: Sparkles,
    title: "Open to All Connections",
    description: "Interested in dating people from these communities",
    color: "bg-spark-cream",
  },
];

const UserTypeScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-12 pb-6 text-center">
        <h1 className="text-2xl font-display font-bold text-foreground">Tell us about you</h1>
        <p className="text-muted-foreground mt-2 text-accessible">This helps us personalize your experience</p>
      </div>

      <div className="flex-1 flex flex-col gap-3 pb-4">
        {userTypes.map(({ id, icon: Icon, title, description, color }, i) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(id)}
            className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
              selected === id
                ? "border-primary shadow-soft bg-card"
                : "border-transparent bg-card shadow-card"
            }`}
            aria-pressed={selected === id}
          >
            <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
              <Icon size={28} className="text-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="pb-10">
        <Button
          onClick={() => selected && navigate("/profile-setup")}
          disabled={!selected}
          size="lg"
          className="w-full h-14 text-lg font-bold rounded-2xl gradient-primary text-primary-foreground shadow-soft disabled:opacity-40"
        >
          Continue
        </Button>
      </div>
    </MobileLayout>
  );
};

export default UserTypeScreen;

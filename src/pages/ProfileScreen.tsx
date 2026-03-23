import { motion } from "framer-motion";
import { Shield, Settings, Heart, Calendar, BookOpen, Brain, CreditCard, ChevronRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: Shield, label: "Safety & Privacy", description: "Background check, report", path: "/safety" },
  { icon: Heart, label: "Dating Preferences", description: "Goals, filters, accessibility", path: "/filters" },
  { icon: Calendar, label: "Coaching & Support", description: "Book a dating coach session", path: "/coaching" },
  { icon: Brain, label: "Mental Health", description: "Daily check-in, support groups", path: "/mental-health" },
  { icon: BookOpen, label: "Education Hub", description: "Safe dating tips, articles", path: "/education" },
  { icon: CreditCard, label: "Subscription", description: "Free plan • Upgrade to Premium", path: "/subscription" },
  { icon: Settings, label: "Settings", description: "Account, notifications, language", path: "/settings" },
];

const ProfileScreen = () => {
  const navigate = useNavigate();
  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-5"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
              alt="Your profile"
              className="w-20 h-20 rounded-2xl object-cover shadow-card"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-spark-green rounded-full flex items-center justify-center border-2 border-background">
              <CheckCircle size={14} className="text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Sarah Johnson</h1>
            <p className="text-muted-foreground font-medium">Portland, OR • 34</p>
            <button
              onClick={() => navigate("/my-profile")}
              className="mt-1 px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold"
            >
              View Full Profile
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col gap-2 pb-24">
        {menuItems.map(({ icon: Icon, label, description, path }, i) => (
          <motion.button
            key={label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => navigate(path)}
            className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-spark-peach flex items-center justify-center flex-shrink-0">
              <Icon size={22} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </motion.button>
        ))}
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default ProfileScreen;

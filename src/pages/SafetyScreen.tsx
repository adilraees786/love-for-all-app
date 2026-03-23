import { motion } from "framer-motion";
import { ArrowLeft, Shield, AlertTriangle, Phone, UserX, CheckCircle, Eye, Lock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const SafetyScreen = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Safety Center</h1>
          <p className="text-muted-foreground text-sm">Your safety is our priority</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 space-y-6">
        {/* Emergency Button */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <Button className="w-full h-16 rounded-2xl text-lg font-bold bg-destructive text-destructive-foreground gap-3 shadow-elevated">
            <Phone size={24} /> Emergency Support
          </Button>
        </motion.div>

        {/* Verification Status */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-spark-green/20 flex items-center justify-center">
              <CheckCircle size={28} className="text-spark-green" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-lg">Identity Verified</h3>
              <p className="text-sm text-muted-foreground">Background check completed</p>
            </div>
            <Shield size={24} className="text-spark-green" />
          </div>
        </motion.div>

        {/* Safety Features */}
        <div>
          <h2 className="font-bold text-foreground text-lg mb-3">Safety Features</h2>
          <div className="space-y-3">
            {[
              { icon: UserX, title: "Block & Report", desc: "Block or report suspicious users", color: "bg-spark-peach" },
              { icon: Eye, title: "Profile Visibility", desc: "Control who can see your profile", color: "bg-spark-blue" },
              { icon: Lock, title: "Private Mode", desc: "Browse without being seen", color: "bg-spark-lavender" },
              { icon: Shield, title: "Photo Verification", desc: "Verify your photos are real", color: "bg-spark-cream" },
              { icon: AlertTriangle, title: "Scam Detection", desc: "AI-powered scam protection", color: "bg-spark-green/20" },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.button key={title} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className="w-full bg-card rounded-2xl p-4 shadow-card flex items-center gap-4 text-left">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-spark-cream rounded-2xl p-5 shadow-card">
          <h3 className="font-bold text-foreground mb-3">Quick Safety Tips</h3>
          <ul className="space-y-2">
            {["Never share financial information", "Meet in public places first", "Tell a friend about your plans", "Trust your instincts"].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-accessible">
                <Shield size={16} className="text-primary mt-1 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default SafetyScreen;

import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, Video, Calendar, Star, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const coaches = [
  { id: 1, name: "Dr. Emily Hart", specialty: "Relationship Building", rating: 4.9, sessions: 320, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
  { id: 2, name: "Michael Chen", specialty: "Confidence & Communication", rating: 4.8, sessions: 215, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
  { id: 3, name: "Sarah Williams", specialty: "Dating for Seniors", rating: 5.0, sessions: 180, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" },
];

const tips = [
  { title: "First Date Confidence", duration: "5 min read", color: "bg-spark-peach" },
  { title: "Communication Skills", duration: "8 min read", color: "bg-spark-blue" },
  { title: "Setting Boundaries", duration: "6 min read", color: "bg-spark-lavender" },
  { title: "Building Trust", duration: "4 min read", color: "bg-spark-cream" },
];

const CoachingScreen = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Coaching & Support</h1>
          <p className="text-muted-foreground text-sm">Your dating journey matters</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: MessageSquare, label: "Chat Coach", color: "bg-spark-peach" },
            { icon: Video, label: "Video Call", color: "bg-spark-blue" },
            { icon: Calendar, label: "Book Session", color: "bg-spark-lavender" },
          ].map(({ icon: Icon, label, color }, i) => (
            <motion.button key={label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className={`${color} rounded-2xl p-4 flex flex-col items-center gap-2 shadow-card`}>
              <Icon size={24} className="text-foreground" />
              <span className="text-sm font-bold text-foreground">{label}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Coaches */}
        <div>
          <h2 className="font-bold text-foreground text-lg mb-3">Featured Coaches</h2>
          <div className="space-y-3">
            {coaches.map((coach, i) => (
              <motion.div key={coach.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-4">
                <img src={coach.image} alt={coach.name} className="w-14 h-14 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{coach.name}</h3>
                  <p className="text-sm text-muted-foreground">{coach.specialty}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-sm font-bold text-foreground">{coach.rating}</span>
                    <span className="text-xs text-muted-foreground">• {coach.sessions} sessions</span>
                  </div>
                </div>
                <Button size="sm" className="rounded-xl gradient-primary text-primary-foreground font-bold">Book</Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tips & Articles */}
        <div>
          <h2 className="font-bold text-foreground text-lg mb-3">Dating Tips</h2>
          <div className="space-y-2">
            {tips.map((tip, i) => (
              <motion.button key={tip.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="w-full flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card text-left">
                <div className={`w-10 h-10 rounded-xl ${tip.color} flex items-center justify-center flex-shrink-0`}>
                  <MessageSquare size={18} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{tip.title}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {tip.duration}</span>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default CoachingScreen;

import { motion } from "framer-motion";
import { ArrowLeft, Shield, AlertTriangle, Heart, BookOpen, Clock, ChevronRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const categories = [
  { icon: Shield, label: "Safe Dating", count: 12, color: "bg-spark-green/20", iconColor: "text-spark-green" },
  { icon: AlertTriangle, label: "Scam Awareness", count: 8, color: "bg-spark-peach", iconColor: "text-primary" },
  { icon: Heart, label: "Relationships", count: 15, color: "bg-spark-lavender", iconColor: "text-accent-foreground" },
  { icon: TrendingUp, label: "Self Growth", count: 10, color: "bg-spark-blue", iconColor: "text-secondary-foreground" },
];

const articles = [
  { title: "5 Red Flags to Watch For", category: "Safe Dating", time: "4 min", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=140&fit=crop" },
  { title: "How to Spot Online Scams", category: "Scam Awareness", time: "6 min", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=200&h=140&fit=crop" },
  { title: "Building Healthy Boundaries", category: "Relationships", time: "5 min", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=140&fit=crop" },
  { title: "First Date Conversation Tips", category: "Relationships", time: "3 min", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=200&h=140&fit=crop" },
  { title: "Protecting Your Personal Info", category: "Safe Dating", time: "7 min", image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=200&h=140&fit=crop" },
  { title: "Love After 60: A Guide", category: "Relationships", time: "8 min", image: "https://images.unsplash.com/photo-1447005497901-b3e9ee359928?w=200&h=140&fit=crop" },
];

const EducationScreen = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Education Hub</h1>
          <p className="text-muted-foreground text-sm">Learn & stay safe</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 space-y-6">
        {/* Categories */}
        <div className="grid grid-cols-2 gap-3">
          {categories.map(({ icon: Icon, label, count, color, iconColor }, i) => (
            <motion.button key={label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className={`${color} rounded-2xl p-4 text-left shadow-card`}>
              <Icon size={24} className={iconColor} />
              <h3 className="font-bold text-foreground mt-2">{label}</h3>
              <p className="text-xs text-muted-foreground">{count} articles</p>
            </motion.button>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl overflow-hidden shadow-card">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop" alt="Featured" className="w-full h-40 object-cover" />
          <div className="p-5">
            <span className="text-xs font-bold text-primary uppercase">Featured</span>
            <h2 className="font-display font-bold text-xl text-foreground mt-1">The Complete Guide to Safe Online Dating</h2>
            <p className="text-muted-foreground text-sm mt-2">Everything you need to know about staying safe while finding love online.</p>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <Clock size={12} /> 10 min read • <BookOpen size={12} /> 2.4k reads
            </div>
          </div>
        </motion.div>

        {/* Articles List */}
        <div>
          <h2 className="font-bold text-foreground text-lg mb-3">Recent Articles</h2>
          <div className="space-y-3">
            {articles.map((article, i) => (
              <motion.button key={article.title} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }} className="w-full bg-card rounded-2xl p-3 shadow-card flex items-center gap-4 text-left">
                <img src={article.image} alt={article.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-primary">{article.category}</span>
                  <h3 className="font-bold text-foreground text-sm mt-0.5 line-clamp-2">{article.title}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Clock size={10} /> {article.time}</span>
                </div>
                <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default EducationScreen;

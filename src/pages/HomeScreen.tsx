import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Star, MapPin, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const profiles = [
  { id: 1, name: "Sarah", age: 34, location: "Portland, OR", interests: ["Art", "Music", "Yoga"], match: 92, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
  { id: 2, name: "James", age: 67, location: "Austin, TX", interests: ["Gardening", "Reading", "Cooking"], match: 87, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
  { id: 3, name: "Maria", age: 45, location: "Seattle, WA", interests: ["Dancing", "Photography", "Travel"], match: 95, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop" },
  { id: 4, name: "Robert", age: 72, location: "Denver, CO", interests: ["Walking", "Games", "Movies"], match: 81, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const profile = profiles[currentIndex % profiles.length];

  const swipe = (dir: "left" | "right") => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(i => i + 1);
      setDirection(null);
    }, 300);
  };

  return (
    <MobileLayout noPadding className="flex flex-col gradient-soft">
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Discover</h1>
        <div className="flex gap-2">
          <button onClick={() => navigate("/likes")} className="p-2 rounded-xl bg-card shadow-card" aria-label="Likes">
            <Heart size={22} className="text-primary" />
          </button>
          <button className="p-2 rounded-xl bg-card shadow-card" aria-label="Filters">
            <Sparkles size={22} className="text-primary" />
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 pb-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={profile.id + currentIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: direction === "left" ? -300 : direction === "right" ? 300 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-3xl overflow-hidden shadow-elevated h-full max-h-[520px]"
          >
            <div className="relative h-[60%]">
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                <h2 className="text-3xl font-display font-bold text-primary-foreground">{profile.name}, {profile.age}</h2>
                <div className="flex items-center gap-1 mt-1 text-primary-foreground/80">
                  <MapPin size={16} />
                  <span className="text-sm">{profile.location}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-xl text-sm font-bold">
                {profile.match}% Match
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map(interest => (
                  <span key={interest} className="px-4 py-2 bg-spark-peach text-foreground rounded-xl text-sm font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 pb-24 px-6">
        <button
          onClick={() => swipe("left")}
          className="w-16 h-16 rounded-full bg-card shadow-elevated flex items-center justify-center border-2 border-destructive/20 active:scale-90 transition"
          aria-label="Pass"
        >
          <X size={28} className="text-destructive" />
        </button>
        <button
          onClick={() => swipe("right")}
          className="w-20 h-20 rounded-full gradient-primary shadow-elevated flex items-center justify-center active:scale-90 transition"
          aria-label="Like"
        >
          <Heart size={32} className="text-primary-foreground" fill="currentColor" />
        </button>
        <button
          className="w-16 h-16 rounded-full bg-card shadow-elevated flex items-center justify-center border-2 border-spark-blue-deep/20 active:scale-90 transition"
          aria-label="Super Like"
        >
          <Star size={28} className="text-spark-blue-deep" />
        </button>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default HomeScreen;

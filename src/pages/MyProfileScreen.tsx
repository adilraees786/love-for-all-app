import { motion } from "framer-motion";
import { ArrowLeft, Edit2, Camera, CheckCircle, MapPin, Heart, Accessibility, Languages, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import { Badge } from "@/components/ui/badge";

const profileData = {
  name: "Sarah Johnson",
  age: 34,
  gender: "Female",
  location: "Portland, OR",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  verified: true,
  userType: "Person with Disability",
  interests: ["Art", "Music", "Yoga", "Reading", "Photography", "Cooking"],
  disabilityInfo: "Mobility — wheelchair user",
  accessibilityNeeds: ["Large Text", "Voice Support", "Screen Reader Compatible"],
  datingGoals: ["Companionship", "Long-term Relationship"],
  language: "English",
  subscription: "Free Plan",
};

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card rounded-2xl shadow-card p-5"
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-8 h-8 rounded-lg bg-spark-peach flex items-center justify-center">
        <Icon size={18} className="text-primary" />
      </div>
      <h3 className="font-bold text-foreground text-lg">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const MyProfileScreen = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-xl font-display font-bold text-foreground">My Profile</h1>
        <button className="p-2 rounded-xl bg-card shadow-card" aria-label="Edit profile">
          <Edit2 size={20} className="text-primary" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-28 space-y-4">
        {/* Avatar & Basic Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative mb-4">
            <img
              src={profileData.image}
              alt="Your profile"
              className="w-28 h-28 rounded-3xl object-cover shadow-elevated"
            />
            <button
              className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-card"
              aria-label="Change photo"
            >
              <Camera size={16} className="text-primary-foreground" />
            </button>
            {profileData.verified && (
              <div className="absolute -top-1 -left-1 w-7 h-7 bg-spark-green rounded-full flex items-center justify-center border-2 border-background">
                <CheckCircle size={14} className="text-primary-foreground" />
              </div>
            )}
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            {profileData.name}, {profileData.age}
          </h2>
          <div className="flex items-center gap-1 text-muted-foreground mt-1">
            <MapPin size={16} />
            <span>{profileData.location}</span>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge className="bg-spark-green/20 text-spark-green border-0 font-bold">Verified</Badge>
            <Badge variant="secondary" className="font-bold">{profileData.userType}</Badge>
          </div>
        </motion.div>

        {/* Interests */}
        <Section title="Interests & Hobbies" icon={Heart}>
          <div className="flex flex-wrap gap-2">
            {profileData.interests.map((interest) => (
              <span key={interest} className="px-4 py-2 bg-spark-peach text-foreground rounded-xl text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </Section>

        {/* Accessibility */}
        <Section title="Accessibility" icon={Accessibility}>
          <p className="text-muted-foreground mb-3">{profileData.disabilityInfo}</p>
          <div className="flex flex-wrap gap-2">
            {profileData.accessibilityNeeds.map((need) => (
              <span key={need} className="px-3 py-1.5 bg-spark-blue/40 text-secondary-foreground rounded-xl text-sm font-medium">
                {need}
              </span>
            ))}
          </div>
        </Section>

        {/* Dating Goals */}
        <Section title="Dating Goals" icon={Target}>
          <div className="flex flex-wrap gap-2">
            {profileData.datingGoals.map((goal) => (
              <span key={goal} className="px-4 py-2 bg-spark-lavender text-accent-foreground rounded-xl text-sm font-bold">
                {goal}
              </span>
            ))}
          </div>
        </Section>

        {/* Language */}
        <Section title="Language & Culture" icon={Languages}>
          <p className="text-foreground font-medium">{profileData.language}</p>
        </Section>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default MyProfileScreen;

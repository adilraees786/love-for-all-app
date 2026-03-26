import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import person1 from "@/assets/liked-img-1.png";
import person2 from "@/assets/liked-img-2.png";
import person3 from "@/assets/liked-img-3.png";
import person4 from "@/assets/liked-img-4.png";

const peopleLiked = [
  { id: 1, name: "Emma", age: 29, location: "Portland, OR", image: person1, match: 88 },
  { id: 2, name: "Daniel", age: 55, location: "Seattle, WA", image: person2, match: 76 },
  { id: 3, name: "Priya", age: 42, location: "Austin, TX", image: person3, match: 91 },
  { id: 4, name: "Robert", age: 68, location: "Denver, CO", image: person4, match: 82 },
];

const peopleWhoLikedMe = [
  { id: 5, name: "Maria", age: 45, location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", match: 95 },
  { id: 6, name: "James", age: 61, location: "Chicago, IL", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", match: 87 },
  { id: 7, name: "Aisha", age: 33, location: "New York, NY", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop", match: 93 },
];

const ProfileCard = ({ person, index, showChat }: { person: typeof peopleLiked[0]; index: number; showChat?: boolean }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card"
    >
      <img
        src={person.image}
        alt={person.name}
        className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground text-lg">{person.name}, {person.age}</h3>
        <p className="text-sm text-muted-foreground">{person.location}</p>
        <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-bold">
          {person.match}% Match
        </span>
      </div>
      {showChat && (
        <button
          onClick={() => navigate("/chat")}
          className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
          aria-label={`Message ${person.name}`}
        >
          <MessageCircle size={20} className="text-primary" />
        </button>
      )}
    </motion.div>
  );
};

const LikesScreen = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <Heart size={24} className="text-primary" fill="currentColor" />
          <h1 className="text-2xl font-display font-bold text-foreground">Sparks</h1>
        </div>
      </div>

      <Tabs defaultValue="liked-me" className="flex-1 flex flex-col pb-24">
        <TabsList className="w-full bg-card shadow-card rounded-2xl p-1.5 h-auto">
          <TabsTrigger
            value="liked-me"
            className="flex-1 rounded-xl py-3 text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Liked Me ({peopleWhoLikedMe.length})
          </TabsTrigger>
          <TabsTrigger
            value="i-liked"
            className="flex-1 rounded-xl py-3 text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            I Liked ({peopleLiked.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="liked-me" className="flex-1 mt-4">
          <div className="flex flex-col gap-3">
            {peopleWhoLikedMe.map((person, i) => (
              <ProfileCard key={person.id} person={person} index={i} showChat />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="i-liked" className="flex-1 mt-4">
          <div className="flex flex-col gap-3">
            {peopleLiked.map((person, i) => (
              <ProfileCard key={person.id} person={person} index={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <BottomNav />
    </MobileLayout>
  );
};

export default LikesScreen;

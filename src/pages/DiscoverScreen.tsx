import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Globe, MapPin, Heart, Accessibility } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import DiscoverImage1 from "@/assets/discover-img-1.png";
import DiscoverImage2 from "@/assets/discover-img-2.png";
import DiscoverImage3 from "@/assets/discover-img-3.png";
import DiscoverImage4 from "@/assets/discover-img-4.png";
import DiscoverImage5 from "@/assets/discover-img-5.png";
import DiscoverImage6 from "@/assets/discover-img-6.png";

const filters = [
  { icon: Globe, label: "Language" },
  { icon: MapPin, label: "Location" },
  { icon: Heart, label: "Goals" },
  { icon: Accessibility, label: "Accessibility" },
];

const quickMatches = [
  { id: 1, name: "Elena", age: 29, image: DiscoverImage1, match: 94 },
  { id: 2, name: "David", age: 55, image: DiscoverImage2, match: 88 },
  { id: 3, name: "Linda", age: 68, image: DiscoverImage3, match: 91 },
  { id: 4, name: "Tom", age: 42, image: DiscoverImage4, match: 85 },
  { id: 5, name: "Aisha", age: 36, image: DiscoverImage5, match: 96 },
  { id: 6, name: "George", age: 73, image: DiscoverImage6, match: 82 },
];

const DiscoverScreen = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-display font-bold text-foreground">Discover</h1>
        <div className="flex items-center gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input placeholder="Search by name or interest" className="h-12 pl-12 rounded-2xl bg-card" aria-label="Search" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-12 h-12 rounded-2xl bg-card shadow-card flex items-center justify-center"
            aria-label="Toggle filters"
          >
            <SlidersHorizontal size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="flex gap-2 mb-4 flex-wrap"
        >
          {filters.map(({ icon: Icon, label }) => (
            <button key={label} className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-border text-sm font-semibold text-foreground">
              <Icon size={16} /> {label}
            </button>
          ))}
        </motion.div>
      )}

      <div className="flex-1 pb-24 overflow-y-auto">
        <h2 className="font-bold text-foreground mb-3">Top Matches</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickMatches.map((person, i) => (
            <motion.button
              key={person.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card text-left"
            >
              <div className="relative">
                <img src={person.image} alt={person.name} className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-3">
                  <h3 className="font-bold text-primary-foreground text-lg">{person.name}, {person.age}</h3>
                </div>
                <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-bold">
                  {person.match}%
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default DiscoverScreen;

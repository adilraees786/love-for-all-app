import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Video } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const events = [
  { id: 1, title: "Virtual Speed Dating", type: "Virtual", date: "Mar 28, 7 PM", attendees: 24, icon: Video, color: "bg-spark-lavender" },
  { id: 2, title: "Coffee & Connection", type: "In Person", date: "Apr 2, 10 AM", attendees: 12, icon: MapPin, color: "bg-spark-peach" },
  { id: 3, title: "Art & Soul Meetup", type: "In Person", date: "Apr 5, 2 PM", attendees: 18, icon: Users, color: "bg-spark-blue" },
  { id: 4, title: "Movie Night Chat", type: "Virtual", date: "Apr 8, 8 PM", attendees: 30, icon: Video, color: "bg-spark-cream" },
];

const EventsScreen = () => {
  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-display font-bold text-foreground">Events & Community</h1>
        <p className="text-muted-foreground mt-1">Meet people in a safe, fun setting</p>
      </div>

      <div className="flex gap-3 mb-4">
        {["All", "Virtual", "In Person"].map((tab, i) => (
          <button
            key={tab}
            className={`px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all ${
              i === 0 ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-4 pb-24 overflow-y-auto">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-5 shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl ${event.color} flex items-center justify-center flex-shrink-0`}>
                <event.icon size={24} className="text-foreground" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-primary uppercase">{event.type}</span>
                <h3 className="font-bold text-lg text-foreground mt-0.5">{event.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {event.attendees} going</span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full rounded-xl font-semibold border-primary text-primary">
              Join Event
            </Button>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default EventsScreen;

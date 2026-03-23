import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Heart, Calendar, Shield, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Switch } from "@/components/ui/switch";

const NotificationSettingsScreen = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    newMessages: true,
    newMatches: true,
    likes: true,
    events: false,
    safetyAlerts: true,
    promotions: false,
    emailDigest: true,
    pushNotifications: true,
  });

  const toggle = (key: string) =>
    setSettings(s => ({ ...s, [key]: !s[key as keyof typeof s] }));

  const groups = [
    {
      title: "Activity",
      items: [
        { key: "newMessages", label: "New Messages", description: "When someone sends you a message", icon: MessageCircle },
        { key: "newMatches", label: "New Matches", description: "When you match with someone", icon: Heart },
        { key: "likes", label: "Likes", description: "When someone likes your profile", icon: Heart },
        { key: "events", label: "Events", description: "Upcoming events and reminders", icon: Calendar },
      ],
    },
    {
      title: "Safety & Updates",
      items: [
        { key: "safetyAlerts", label: "Safety Alerts", description: "Important safety notifications", icon: Shield },
        { key: "promotions", label: "Promotions", description: "Deals and special offers", icon: Megaphone },
      ],
    },
    {
      title: "Delivery",
      items: [
        { key: "pushNotifications", label: "Push Notifications", description: "Notifications on your device", icon: MessageCircle },
        { key: "emailDigest", label: "Email Digest", description: "Weekly summary via email", icon: MessageCircle },
      ],
    },
  ];

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Notifications</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              {group.title}
            </h2>
            <div className="flex flex-col gap-2">
              {group.items.map(({ key, label, description, icon: Icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card"
                >
                  <div className="w-11 h-11 rounded-xl bg-spark-peach flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground">{label}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                  <Switch
                    checked={settings[key as keyof typeof settings]}
                    onCheckedChange={() => toggle(key)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default NotificationSettingsScreen;

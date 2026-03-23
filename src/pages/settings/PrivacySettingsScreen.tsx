import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, UserX, Download, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const PrivacySettingsScreen = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    showOnline: true,
    showDistance: true,
    showAge: true,
    readReceipts: true,
    profileVisible: true,
  });

  const toggle = (key: string) =>
    setSettings(s => ({ ...s, [key]: !s[key as keyof typeof s] }));

  const privacyToggles = [
    { key: "profileVisible", label: "Profile Visible", description: "Others can find your profile", icon: Eye },
    { key: "showOnline", label: "Show Online Status", description: "Let others see when you're active", icon: Eye },
    { key: "showDistance", label: "Show Distance", description: "Show how far you are from others", icon: Eye },
    { key: "showAge", label: "Show Age", description: "Display your age on profile", icon: Eye },
    { key: "readReceipts", label: "Read Receipts", description: "Let others know you've read messages", icon: EyeOff },
  ];

  const blockedUsers = [
    { name: "John D.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" },
    { name: "Alex M.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" },
  ];

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Privacy</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Visibility */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Visibility</h2>
          <div className="flex flex-col gap-2">
            {privacyToggles.map(({ key, label, description, icon: Icon }, i) => (
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

        {/* Blocked Users */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            <UserX size={14} className="inline mr-1" /> Blocked Users ({blockedUsers.length})
          </h2>
          <div className="flex flex-col gap-2">
            {blockedUsers.map((user) => (
              <div key={user.name} className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card">
                <img src={user.image} alt={user.name} className="w-12 h-12 rounded-xl object-cover" />
                <span className="flex-1 font-bold text-foreground">{user.name}</span>
                <button className="px-3 py-1.5 rounded-xl bg-destructive/10 text-destructive text-sm font-bold">
                  Unblock
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Data */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Your Data</h2>
          <div className="flex flex-col gap-2">
            <motion.button
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-spark-blue/40 flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">Download My Data</h3>
                <p className="text-sm text-muted-foreground">Get a copy of your information</p>
              </div>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-spark-blue/40 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} className="text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground">Read how we protect your data</p>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default PrivacySettingsScreen;

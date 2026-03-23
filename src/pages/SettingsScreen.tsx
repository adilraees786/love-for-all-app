import { motion } from "framer-motion";
import {
  ArrowLeft, User, Bell, Lock, Palette, Languages, HelpCircle,
  LogOut, ChevronRight, Trash2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const settingsGroups = [
  {
    title: "General",
    items: [
      { icon: User, label: "Account", description: "Email, password, personal info", path: "/settings/account" },
      { icon: Bell, label: "Notifications", description: "Push, email, in-app alerts", path: "/settings/notifications" },
      { icon: Lock, label: "Privacy", description: "Visibility, blocked users, data", path: "/settings/privacy" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Palette, label: "Appearance", description: "Theme, text size, display", path: "/settings/appearance" },
      { icon: Languages, label: "Language", description: "App language & culture", path: "/language" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help & Support", description: "FAQ, contact us, feedback", path: "/settings/help" },
    ],
  },
];

const SettingsScreen = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-28 space-y-6">
        {settingsGroups.map((group, gi) => (
          <div key={group.title}>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              {group.title}
            </h2>
            <div className="flex flex-col gap-2">
              {group.items.map(({ icon: Icon, label, description, path }, i) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (gi * 3 + i) * 0.04 }}
                  onClick={() => navigate(path)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-spark-peach flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground">{label}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </motion.button>
              ))}
            </div>
          </div>
        ))}

        {/* Danger Zone */}
        <div>
          <h2 className="text-sm font-bold text-destructive uppercase tracking-wider mb-2 px-1">
            Danger Zone
          </h2>
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card text-left">
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <LogOut size={22} className="text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-destructive">Log Out</h3>
                <p className="text-sm text-muted-foreground">Sign out of your account</p>
              </div>
            </button>
            <button className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card text-left">
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <Trash2 size={22} className="text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground">Permanently remove your data</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default SettingsScreen;

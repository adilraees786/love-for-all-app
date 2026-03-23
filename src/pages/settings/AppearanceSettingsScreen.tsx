import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Moon, Monitor, Type, ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Slider } from "@/components/ui/slider";

const AppearanceSettingsScreen = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [fontSize, setFontSize] = useState([16]);

  const themes = [
    { key: "light" as const, label: "Light", icon: Sun },
    { key: "dark" as const, label: "Dark", icon: Moon },
    { key: "system" as const, label: "System", icon: Monitor },
  ];

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Appearance</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Theme */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1">Theme</h2>
          <div className="grid grid-cols-3 gap-3">
            {themes.map(({ key, label, icon: Icon }, i) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setTheme(key)}
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl transition-all ${
                  theme === key
                    ? "bg-primary/10 border-2 border-primary shadow-soft"
                    : "bg-card border-2 border-transparent shadow-card"
                }`}
              >
                <Icon size={28} className={theme === key ? "text-primary" : "text-muted-foreground"} />
                <span className={`font-bold text-sm ${theme === key ? "text-primary" : "text-foreground"}`}>
                  {label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Text Size */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
            <Type size={14} /> Text Size
          </h2>
          <div className="bg-card rounded-2xl shadow-card p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">A</span>
              <span className="text-2xl font-bold text-foreground">A</span>
            </div>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={24}
              step={1}
              className="w-full"
            />
            <p className="text-center text-sm text-muted-foreground mt-3">
              Current: <span className="font-bold text-foreground">{fontSize[0]}px</span>
            </p>

            {/* Preview */}
            <div className="mt-4 p-4 rounded-xl bg-background border border-border">
              <p style={{ fontSize: `${fontSize[0]}px` }} className="text-foreground font-medium">
                This is how your text will look across the app.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Zoom */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
            <ZoomIn size={14} /> Accessibility Display
          </h2>
          <div className="flex flex-col gap-2">
            {["High Contrast Mode", "Reduce Motion", "Bold Text"].map((opt, i) => (
              <div key={opt} className="flex items-center justify-between p-4 rounded-2xl bg-card shadow-card">
                <span className="font-bold text-foreground">{opt}</span>
                <div className="w-12 h-7 rounded-full bg-muted flex items-center px-1 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-muted-foreground/40" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default AppearanceSettingsScreen;

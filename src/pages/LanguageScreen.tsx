import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", native: "English" },
  { code: "es", name: "Spanish", flag: "🇪🇸", native: "Español" },
  { code: "fr", name: "French", flag: "🇫🇷", native: "Français" },
  { code: "de", name: "German", flag: "🇩🇪", native: "Deutsch" },
  { code: "pt", name: "Portuguese", flag: "🇧🇷", native: "Português" },
  { code: "zh", name: "Chinese", flag: "🇨🇳", native: "中文" },
  { code: "ja", name: "Japanese", flag: "🇯🇵", native: "日本語" },
  { code: "ko", name: "Korean", flag: "🇰🇷", native: "한국어" },
  { code: "ar", name: "Arabic", flag: "🇸🇦", native: "العربية" },
  { code: "hi", name: "Hindi", flag: "🇮🇳", native: "हिन्दी" },
  { code: "it", name: "Italian", flag: "🇮🇹", native: "Italiano" },
  { code: "ru", name: "Russian", flag: "🇷🇺", native: "Русский" },
];

const LanguageScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("en");

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Language & Culture</h1>
          <p className="text-muted-foreground text-sm">Choose your preferred language</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang, i) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setSelected(lang.code)}
              className={`relative p-4 rounded-2xl text-left transition-all ${
                selected === lang.code
                  ? "bg-primary/10 border-2 border-primary shadow-soft"
                  : "bg-card border-2 border-transparent shadow-card"
              }`}
            >
              <span className="text-3xl">{lang.flag}</span>
              <h3 className="font-bold text-foreground mt-2">{lang.name}</h3>
              <p className="text-sm text-muted-foreground">{lang.native}</p>
              {selected === lang.code && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check size={14} className="text-primary-foreground" />
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="py-4">
        <Button onClick={() => navigate("/home")} className="w-full h-14 rounded-2xl text-lg font-bold gradient-primary text-primary-foreground">
          Continue
        </Button>
      </div>
    </MobileLayout>
  );
};

export default LanguageScreen;

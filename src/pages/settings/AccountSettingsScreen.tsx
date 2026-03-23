import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, User, Phone, MapPin, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AccountSettingsScreen = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (503) 555-0142",
    location: "Portland, OR",
  });

  const update = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }));

  const fields = [
    { key: "name", label: "Full Name", icon: User, type: "text" },
    { key: "email", label: "Email Address", icon: Mail, type: "email" },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
  ];

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Account</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-5">
        {/* Avatar */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
            alt="Profile"
            className="w-16 h-16 rounded-2xl object-cover"
          />
          <div>
            <h3 className="font-bold text-foreground">{form.name}</h3>
            <button className="text-sm text-primary font-bold mt-1">Change Photo</button>
          </div>
        </motion.div>

        {/* Fields */}
        {fields.map(({ key, label, icon: Icon, type }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Label className="text-sm font-bold text-muted-foreground mb-2 flex items-center gap-2">
              <Icon size={16} /> {label}
            </Label>
            <Input
              type={type}
              value={form[key as keyof typeof form]}
              onChange={e => update(key, e.target.value)}
              className="h-14 rounded-2xl bg-card border-border text-lg px-4"
            />
          </motion.div>
        ))}

        {/* Change Password */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Label className="text-sm font-bold text-muted-foreground mb-2 flex items-center gap-2">
            <Lock size={16} /> Password
          </Label>
          <button className="w-full h-14 rounded-2xl bg-card border border-border text-left px-4 text-primary font-bold text-lg">
            Change Password
          </button>
        </motion.div>
      </div>

      <div className="py-4">
        <Button onClick={() => navigate(-1)} className="w-full h-14 rounded-2xl text-lg font-bold gradient-primary text-primary-foreground">
          <Save size={20} className="mr-2" /> Save Changes
        </Button>
      </div>
    </MobileLayout>
  );
};

export default AccountSettingsScreen;

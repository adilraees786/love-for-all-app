import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Crown, Sparkles, Shield, Video, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$5.99",
    period: "/month",
    badge: null,
  },
  {
    id: "annual",
    name: "Annual",
    price: "$50",
    period: "/year",
    badge: "Save 30%",
  },
];

const freeFeatures = [
  "Basic matching",
  "5 likes per day",
  "Text messaging",
  "Community events",
  "Safety features",
];

const premiumFeatures = [
  "Unlimited likes",
  "See who likes you",
  "Video calls",
  "Advanced filters",
  "Priority support",
  "Background check badge",
  "Coaching sessions",
  "Ad-free experience",
];

const SubscriptionScreen = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("annual");

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Upgrade to Premium</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-elevated">
            <Crown size={36} className="text-primary-foreground" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Unlock Your Full Potential</h2>
          <p className="text-muted-foreground mt-2">Find meaningful connections faster</p>
        </motion.div>

        {/* Premium Highlights */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Sparkles, label: "Unlimited Likes" },
            { icon: Video, label: "Video Calls" },
            { icon: Shield, label: "Verified Badge" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-card rounded-2xl p-4 text-center shadow-card">
              <Icon size={24} className="text-primary mx-auto" />
              <p className="text-xs font-bold text-foreground mt-2">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Plan Selection */}
        <div className="flex gap-3">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`flex-1 rounded-2xl p-5 text-center transition-all relative ${
                selectedPlan === plan.id
                  ? "bg-primary/10 border-2 border-primary shadow-soft"
                  : "bg-card border-2 border-transparent shadow-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-spark-green text-primary-foreground text-xs font-bold px-3 py-0.5 rounded-full">
                  {plan.badge}
                </span>
              )}
              <p className="font-bold text-foreground text-sm">{plan.name}</p>
              <p className="text-2xl font-display font-bold text-primary mt-1">{plan.price}</p>
              <p className="text-xs text-muted-foreground">{plan.period}</p>
            </button>
          ))}
        </div>

        {/* Comparison */}
        <div className="space-y-4">
          <div className="bg-card rounded-2xl p-5 shadow-card">
            <h3 className="font-bold text-foreground mb-3">Free Plan</h3>
            <ul className="space-y-2">
              {freeFeatures.map(f => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check size={16} className="text-spark-green flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-5 shadow-card border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Star size={18} className="text-primary fill-primary" />
              <h3 className="font-bold text-foreground">Premium Plan</h3>
            </div>
            <ul className="space-y-2">
              {premiumFeatures.map(f => (
                <li key={f} className="flex items-center gap-3 text-foreground text-sm font-medium">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4">
        <Button className="w-full h-14 rounded-2xl text-lg font-bold gradient-primary text-primary-foreground gap-2">
          <Crown size={22} /> Subscribe Now
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-3">Cancel anytime • 7-day free trial</p>
      </div>
    </MobileLayout>
  );
};

export default SubscriptionScreen;

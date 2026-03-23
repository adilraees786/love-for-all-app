import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, MessageSquare, Mail, FileText, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const faqs = [
  { q: "How do I verify my profile?", a: "Go to Profile → Safety & Privacy and follow the verification steps. You'll need a valid photo ID and a selfie for comparison." },
  { q: "Is SparkConnect free to use?", a: "Yes! SparkConnect offers a free tier with core features. Premium unlocks advanced filters, unlimited likes, and priority support for $5.99/month." },
  { q: "How do I report a user?", a: "Tap the safety button in any chat or on a user's profile card. Your report is anonymous and reviewed within 24 hours." },
  { q: "Can I change my accessibility settings?", a: "Yes, go to Settings → Appearance to adjust text size, contrast, and motion preferences at any time." },
  { q: "How does the matching algorithm work?", a: "We match based on shared interests, accessibility compatibility, location, and relationship goals. The percentage shows overall compatibility." },
];

const HelpSupportScreen = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card shadow-card" aria-label="Go back">
          <ArrowLeft size={22} className="text-foreground" />
        </button>
        <h1 className="text-2xl font-display font-bold text-foreground">Help & Support</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="h-14 rounded-2xl bg-card border-border text-lg pl-12"
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Contact Us</h2>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-card shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-spark-peach flex items-center justify-center">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <span className="font-bold text-foreground text-sm">Live Chat</span>
              <span className="text-xs text-muted-foreground">Available 24/7</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-card shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-spark-blue/40 flex items-center justify-center">
                <Mail size={24} className="text-secondary-foreground" />
              </div>
              <span className="font-bold text-foreground text-sm">Email Us</span>
              <span className="text-xs text-muted-foreground">Reply in 24h</span>
            </motion.button>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-2">
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl bg-card shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center gap-3 p-4 w-full text-left"
                >
                  <span className="flex-1 font-bold text-foreground">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Resources</h2>
          <div className="flex flex-col gap-2">
            {["Terms of Service", "Community Guidelines", "Accessibility Statement"].map((link, i) => (
              <button key={link} className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-card text-left">
                <FileText size={18} className="text-muted-foreground" />
                <span className="flex-1 font-bold text-foreground">{link}</span>
                <ExternalLink size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="p-5 rounded-2xl bg-spark-lavender/50">
          <h3 className="font-bold text-foreground mb-2">Have Feedback?</h3>
          <p className="text-sm text-muted-foreground mb-3">We'd love to hear how we can improve SparkConnect for you.</p>
          <Button className="rounded-2xl gradient-primary text-primary-foreground font-bold">
            Send Feedback
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default HelpSupportScreen;

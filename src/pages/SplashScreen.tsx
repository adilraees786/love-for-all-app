import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import MobileLayout from "@/components/MobileLayout";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout className="gradient-warm flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <img src={logo} alt="SparkConnect logo" width={120} height={120} className="animate-float" />
        <h1 className="text-4xl font-display font-bold text-foreground">SparkConnect</h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-muted-foreground font-medium text-center max-w-[280px]"
        >
          Love should be accessible to everyone
        </motion.p>
      </motion.div>
    </MobileLayout>
  );
};

export default SplashScreen;

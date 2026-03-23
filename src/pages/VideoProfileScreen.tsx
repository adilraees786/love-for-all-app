import { motion } from "framer-motion";
import { Play, Upload, ArrowLeft, Video, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const VideoProfileScreen = () => {
  const navigate = useNavigate();
  const [hasVideo, setHasVideo] = useState(false);

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center" aria-label="Go back">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Video Profile</h1>
          <p className="text-muted-foreground text-sm">Show your personality</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center pb-8">
        {!hasVideo ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
            <div className="bg-card rounded-3xl p-8 shadow-card text-center mx-auto max-w-sm">
              <div className="w-24 h-24 rounded-full bg-spark-peach flex items-center justify-center mx-auto mb-6">
                <Video size={40} className="text-primary" />
              </div>
              <h2 className="text-xl font-display font-bold text-foreground mb-2">Add an Intro Video</h2>
              <p className="text-muted-foreground text-accessible mb-8">
                Record a short intro video (30 seconds) to help others get to know you better.
              </p>
              <div className="space-y-3">
                <Button onClick={() => setHasVideo(true)} className="w-full h-14 rounded-2xl text-lg font-bold gradient-primary text-primary-foreground gap-3">
                  <Video size={22} /> Record Video
                </Button>
                <Button onClick={() => setHasVideo(true)} variant="outline" className="w-full h-14 rounded-2xl text-lg font-bold border-primary text-primary gap-3">
                  <Upload size={22} /> Upload Video
                </Button>
              </div>
            </div>

            <div className="mt-8 px-4">
              <h3 className="font-bold text-foreground mb-3">Tips for a great video:</h3>
              <ul className="space-y-2 text-muted-foreground">
                {["Smile and be yourself", "Good lighting helps a lot", "Talk about your hobbies", "Keep it under 30 seconds"].map((tip, i) => (
                  <motion.li key={tip} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="flex items-center gap-3 text-accessible">
                    <span className="w-6 h-6 rounded-full bg-spark-green/20 text-spark-green flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
            <div className="relative bg-foreground/10 rounded-3xl overflow-hidden aspect-[9/16] max-h-[420px] mx-auto shadow-elevated">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop" alt="Video thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-elevated" aria-label="Play video">
                  <Play size={36} className="text-primary ml-1" />
                </button>
              </div>
              <span className="absolute bottom-4 left-4 bg-foreground/60 text-primary-foreground px-3 py-1 rounded-xl text-sm font-bold">0:28</span>
            </div>
            <div className="flex gap-3 mt-6">
              <Button onClick={() => setHasVideo(true)} className="flex-1 h-14 rounded-2xl text-lg font-bold gradient-primary text-primary-foreground gap-2">
                <Video size={20} /> Re-record
              </Button>
              <Button onClick={() => setHasVideo(false)} variant="outline" className="h-14 rounded-2xl px-5 border-destructive text-destructive">
                <Trash2 size={20} />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </MobileLayout>
  );
};

export default VideoProfileScreen;

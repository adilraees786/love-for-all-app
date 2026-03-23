import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mic, Video, Shield, ChevronLeft } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const conversations = [
  { id: 1, name: "Sarah", lastMessage: "That sounds wonderful! ☺️", time: "2m ago", unread: 2, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" },
  { id: 2, name: "James", lastMessage: "Would you like to grab coffee?", time: "1h ago", unread: 0, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" },
  { id: 3, name: "Maria", lastMessage: "See you at the event!", time: "3h ago", unread: 1, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" },
];

const chatMessages = [
  { id: 1, text: "Hi! I loved your profile. We share so many interests!", fromMe: false, time: "10:30 AM" },
  { id: 2, text: "Thank you! I noticed we both love gardening 🌱", fromMe: true, time: "10:32 AM" },
  { id: 3, text: "Yes! I have a little balcony garden. Do you grow vegetables?", fromMe: false, time: "10:33 AM" },
  { id: 4, text: "I do! Tomatoes and herbs mostly. Maybe we could visit a botanical garden together sometime?", fromMe: true, time: "10:35 AM" },
  { id: 5, text: "That sounds wonderful! ☺️", fromMe: false, time: "10:36 AM" },
];

const ChatScreen = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  if (activeChat) {
    const conv = conversations.find(c => c.id === activeChat)!;
    return (
      <MobileLayout noPadding className="flex flex-col">
        <div className="flex items-center gap-3 px-4 py-4 bg-card border-b border-border">
          <button onClick={() => setActiveChat(null)} className="p-2 rounded-xl" aria-label="Back to conversations">
            <ChevronLeft size={24} />
          </button>
          <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1">
            <h2 className="font-bold text-foreground">{conv.name}</h2>
            <p className="text-xs text-spark-green font-medium">Online</p>
          </div>
          <button className="p-2 rounded-xl" aria-label="Video call">
            <Video size={22} className="text-primary" />
          </button>
          <button className="p-2 rounded-xl" aria-label="Report safety concern">
            <Shield size={22} className="text-muted-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {chatMessages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[75%] px-5 py-3 rounded-2xl text-base ${
                msg.fromMe
                  ? "gradient-primary text-primary-foreground rounded-br-md"
                  : "bg-card text-foreground border border-border rounded-bl-md"
              }`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.fromMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{msg.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-4 py-4 bg-card border-t border-border flex items-center gap-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <button className="p-3 rounded-xl bg-spark-peach" aria-label="Voice message">
            <Mic size={22} className="text-primary" />
          </button>
          <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-12 px-5 rounded-2xl bg-background border border-border text-base text-foreground placeholder:text-muted-foreground"
            aria-label="Message input"
          />
          <button className="p-3 rounded-xl gradient-primary" aria-label="Send message">
            <Send size={22} className="text-primary-foreground" />
          </button>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout className="flex flex-col gradient-soft">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-display font-bold text-foreground">Messages</h1>
      </div>

      <div className="flex-1 flex flex-col gap-2 pb-24">
        {conversations.map((conv, i) => (
          <motion.button
            key={conv.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setActiveChat(conv.id)}
            className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all text-left"
          >
            <div className="relative">
              <img src={conv.avatar} alt={conv.name} className="w-14 h-14 rounded-full object-cover" />
              {conv.unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 gradient-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {conv.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-foreground text-lg">{conv.name}</h3>
                <span className="text-xs text-muted-foreground">{conv.time}</span>
              </div>
              <p className="text-muted-foreground text-sm truncate mt-0.5">{conv.lastMessage}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <BottomNav />
    </MobileLayout>
  );
};

export default ChatScreen;

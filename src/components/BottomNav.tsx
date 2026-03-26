import type { LucideIcon } from "lucide-react";
import { Home, MessageCircle, Calendar, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type NavItem =
  | { label: string; path: string; Icon: LucideIcon }
  | { label: string; path: string; discoverAsset: true };

const navItems: NavItem[] = [
  { label: "Home", path: "/home", Icon: Home },
  { label: "Connections", path: "/discover", discoverAsset: true },
  { label: "Chat", path: "/chat", Icon: MessageCircle },
  { label: "Events", path: "/events", Icon: Calendar },
  { label: "Profile", path: "/profile", Icon: User },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-card border-t border-border z-50" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const { label, path } = item;
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
            >
              {"discoverAsset" in item ? (
                <span className="bottom-nav-discover-icon" aria-hidden />
              ) : (
                <item.Icon size={24} strokeWidth={isActive ? 2.5 : 1.8} />
              )}
              <span className="text-xs font-semibold">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

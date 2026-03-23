import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const MobileLayout = ({ children, className = "", noPadding = false }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen flex justify-center bg-muted">
      <div className={`w-full max-w-[480px] min-h-screen bg-background relative overflow-hidden ${noPadding ? "" : "px-6"} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;

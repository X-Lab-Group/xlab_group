import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;

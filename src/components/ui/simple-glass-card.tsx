import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SimpleGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function SimpleGlassCard({ className, children, ...props }: SimpleGlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6",
        "bg-white/10 backdrop-blur-md border border-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

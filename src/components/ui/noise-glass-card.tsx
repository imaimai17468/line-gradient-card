import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface NoiseGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function NoiseGlassCard({ className, children, ...props }: NoiseGlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6",
        "bg-white/10 backdrop-blur-md border border-white/20",
        className,
      )}
      {...props}
    >
      <svg className="hidden" role="img" aria-labelledby="noiseFilterTitle">
        <title id="noiseFilterTitle">ノイズフィルター</title>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" seed="1" />
        </filter>
      </svg>

      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            filter: "url(#noise)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}

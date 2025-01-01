import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 border border-white/50",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,transparent_0%,#0141ff_140%)] before:opacity-40 before:-z-40",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-black/95 -z-50" />

      <svg className="hidden" role="img" aria-labelledby="noiseFilterTitle">
        <title id="noiseFilterTitle">ノイズフィルター</title>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" seed="2" />
        </filter>
      </svg>

      <div className="absolute inset-0 -z-45">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            filter: "url(#noise)",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-40">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[#FF2E63]/60 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute top-1/3 right-0 w-2/3 h-2/3 bg-[#00FFF5]/60 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-2/3 h-2/3 bg-[#8A2BE2]/60 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import "./noise-metalic-card.css";

interface BorderMetalicCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  animated?: boolean;
}

export function BorderMetalicCard({ className, children, animated, ...props }: BorderMetalicCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-2",
        "backdrop-blur-md",
        animated && "animate-gradient",
        className,
      )}
      style={
        {
          "--gradient-angle": "0turn",
          background: `conic-gradient(
            from var(--gradient-angle),
            #584827 0%,
            #c7a03c 37%,
            #f9de90 30%,
            #c7a03c 33%,
            #584827 40%,
            #584827 50%,
            #c7a03c 77%,
            #f9de90 80%,
            #c7a03c 83%,
            #584827 90%
          )`,
        } as React.CSSProperties
      }
      {...props}
    >
      <svg className="hidden" role="img" aria-labelledby="noiseFilterTitle">
        <title id="noiseFilterTitle">ノイズフィルター</title>
        <filter id="noise2">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" seed="1" />
        </filter>
      </svg>

      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            filter: "url(#noise2)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative rounded-xl p-4" style={{ background: "linear-gradient(#584827, #2d230f)" }}>
        {children}
      </div>
    </div>
  );
}

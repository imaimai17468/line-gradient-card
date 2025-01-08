export const NOISE_GLASS_CODE = `import { cn } from "@/lib/utils";
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
        className
      )}
      {...props}
    >
      <svg className="hidden" role="img" aria-labelledby="noiseFilterTitle">
        <title id="noiseFilterTitle">ノイズフィルター</title>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            seed="1"
          />
        </filter>
      </svg>

      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            filter: "url(#noise)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}`;

export const NOISE_METALIC_CODE = `import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import "./noise-metalic-card.css";

interface NoiseGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function NoiseMetalicCard({ className, children, ...props }: NoiseGlassCardProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl p-6", "backdrop-blur-md", "animate-gradient", className)}
      style={
        {
          "--gradient-angle": "0turn",
          background: \`conic-gradient(
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
          )\`,
        } as React.CSSProperties
      }
    >
      <svg style={{ visibility: "hidden" }} role="img" aria-labelledby="noiseFilterTitle">
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
}`;

export const NOISE_METALIC_CSS = `@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0turn;
  inherits: false;
}

@keyframes gradient-angle {
  0% {
    --gradient-angle: 0turn;
  }
  100% {
    --gradient-angle: 1turn;
  }
}

.animate-gradient {
  animation: gradient-angle 2s infinite linear;
}`;

export const NOISE_METALIC_FULL = `${NOISE_METALIC_CODE}

/* styles.css */
${NOISE_METALIC_CSS}`;

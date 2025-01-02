"use client";

import { generateId } from "@/lib/utils/generate-id";
import { useEffect, useState } from "react";
import { RegenerateButton } from "./regenerate-button";

const generateDecorations = () => {
  const shapes = Array.from({ length: 50 }, () => ({
    id: generateId(),
    color: [
      "bg-purple-500/40",
      "bg-blue-500/40",
      "bg-pink-500/40",
      "bg-emerald-500/40",
      "bg-yellow-500/40",
      "bg-indigo-500/40",
    ][Math.floor(Math.random() * 6)],
    size: ["w-24 h-24", "w-32 h-32", "w-40 h-40", "w-48 h-48", "w-56 h-56"][Math.floor(Math.random() * 5)],
    rotation: ["rotate-0", "rotate-45", "-rotate-45", "rotate-12", "-rotate-12"][Math.floor(Math.random() * 5)],
    position: {
      top: `${Math.floor(Math.random() * 300)}vh`,
      left: `${Math.floor(Math.random() * 85)}%`,
    },
  }));

  const texts = Array.from({ length: 100 }, () => ({
    id: generateId(),
    text: ["Glassmorphism", "Modern Design", "UI Elements", "Noise Effect", "Blur Effect"][
      Math.floor(Math.random() * 5)
    ],
    size: ["text-2xl", "text-3xl", "text-4xl"][Math.floor(Math.random() * 3)],
  }));

  return { shapes, texts };
};

export function BackgroundDecoration() {
  const [decorations, setDecorations] = useState<ReturnType<typeof generateDecorations> | null>(null);

  useEffect(() => {
    setDecorations(generateDecorations());
  }, []);

  const handleRegenerate = () => {
    setDecorations(generateDecorations());
  };

  if (!decorations) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-auto">
      <div className="min-h-[300vh] p-8 relative">
        <RegenerateButton onClick={handleRegenerate} />

        {/* 図形レイヤー */}
        <div className="absolute inset-0">
          {decorations.shapes.map((shape) => (
            <div
              key={shape.id}
              className={`
                absolute rounded-lg mix-blend-screen
                ${shape.color}
                ${shape.size}
                ${shape.rotation}
              `}
              style={{
                top: shape.position.top,
                left: shape.position.left,
              }}
            />
          ))}
        </div>

        {/* テキスト */}
        <div className="columns-4 gap-4 select-none relative">
          {decorations.texts.map((text) => (
            <div key={text.id} className="break-inside-avoid mb-4">
              <p className={`font-bold opacity-10 ${text.size}`}>{text.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

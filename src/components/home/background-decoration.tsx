"use client";

import { COLORS, ROTATIONS, SIZES } from "@/constants/decoration";
import { generateId } from "@/lib/utils/generate-id";
import { getRandomArrayElement, getRandomNumber } from "@/lib/utils/random";
import type { Decorations } from "@/types/decoration";
import { useCallback, useEffect, useState } from "react";
import { BackgroundShape } from "./background-shape";
import { RegenerateButton } from "./regenerate-button";

const generateDecorations = (): Decorations => {
  const shapes = Array.from({ length: 50 }, () => ({
    id: generateId(),
    color: getRandomArrayElement(COLORS),
    size: getRandomArrayElement(SIZES),
    rotation: getRandomArrayElement(ROTATIONS),
    position: {
      top: `${getRandomNumber(0, 300)}vh`,
      left: `${getRandomNumber(0, 85)}%`,
    },
  }));

  return { shapes };
};

export function BackgroundDecoration() {
  const [decorations, setDecorations] = useState<Decorations | null>(null);

  const handleRegenerate = useCallback(() => {
    setDecorations(generateDecorations());
  }, []);

  useEffect(() => {
    const initialDecorations = generateDecorations();
    setDecorations(initialDecorations);
  }, []);

  if (!decorations) {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        <div className="animate-pulse bg-background/50 w-full h-full" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-auto">
      <div className="min-h-[300vh] p-8 relative">
        <RegenerateButton onClick={handleRegenerate} />

        {/* 図形レイヤー */}
        <div className="absolute inset-0" aria-hidden="true">
          {decorations.shapes.map((shape) => (
            <BackgroundShape key={shape.id} shape={shape} />
          ))}
        </div>
      </div>
    </div>
  );
}

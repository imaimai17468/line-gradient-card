"use client";

import { BorderMetalicCard } from "@/components/ui/border-metalic-card";
import { NoiseMetalicCard } from "@/components/ui/noise-metalic-card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function MetalicSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 flex items-center justify-end gap-2">
        <span className="text-sm">アニメーション</span>
        <Switch checked={isAnimated} onCheckedChange={setIsAnimated} />
      </div>
      <NoiseMetalicCard animated={isAnimated} className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">メタリックカード</h2>
        <p>金属的な質感を実現したカードデザイン</p>
      </NoiseMetalicCard>

      <BorderMetalicCard animated={isAnimated} className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">メタリックボーダーカード</h2>
        <p>洗練された印象のボーダーデザイン</p>
      </BorderMetalicCard>
    </div>
  );
}

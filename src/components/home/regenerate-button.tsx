"use client";

import { Button } from "@/components/ui/button";

interface RegenerateButtonProps {
  onClick: () => void;
}

export function RegenerateButton({ onClick }: RegenerateButtonProps) {
  return (
    <div className="fixed top-8 right-8 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={onClick}
        className="backdrop-blur-md border w-12 h-12"
        title="背景を再生成"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-labelledby="regenerateTitle"
          role="img"
        >
          <title id="regenerateTitle">背景を再生成</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span className="sr-only">背景を再生成</span>
      </Button>
    </div>
  );
}

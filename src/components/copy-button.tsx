"use client";

import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Button variant="ghost" size="sm" className="bg-white/10 hover:bg-white/20" onClick={handleCopyCode}>
      コピー
    </Button>
  );
}

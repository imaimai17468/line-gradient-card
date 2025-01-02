import type { Shape } from "@/types/decoration";

interface BackgroundShapeProps {
  shape: Shape;
}

export function BackgroundShape({ shape }: BackgroundShapeProps) {
  return (
    <div
      key={shape.id}
      className={`
        absolute rounded-lg mix-blend-screen
        ${shape.color}
        ${shape.size}
        ${shape.rotation}
        transform-gpu
      `}
      style={{
        top: shape.position.top,
        left: shape.position.left,
      }}
      aria-hidden="true"
    />
  );
}

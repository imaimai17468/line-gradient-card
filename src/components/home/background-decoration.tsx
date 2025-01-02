import { generateId } from "@/lib/utils/generate-id";

// 図形とテキストのデータを事前に生成
const shapes = Array.from({ length: 30 }, () => ({
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
    top: `${Math.floor(Math.random() * 180)}vh`,
    left: `${Math.floor(Math.random() * 85)}%`,
  },
}));

const texts = Array.from({ length: 50 }, () => ({
  id: generateId(),
}));

export function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-auto">
      <div className="min-h-[200vh] p-8 relative">
        {/* 図形レイヤー */}
        <div className="absolute inset-0">
          {shapes.map((shape) => (
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
          {texts.map((text) => (
            <div key={text.id} className="break-inside-avoid mb-4">
              <p className="text-4xl font-bold opacity-10 mb-2">Glassmorphism</p>
              <p className="text-2xl font-bold opacity-10 mb-2">Modern Design</p>
              <p className="text-3xl font-bold opacity-10">UI Elements</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

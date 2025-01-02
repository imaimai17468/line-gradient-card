import { NoiseGlassCard } from "@/components/ui/noise-glass-card";
import { SimpleGlassCard } from "@/components/ui/simple-glass-card";

// ユニークなIDを生成する関数
const generateId = () => Math.random().toString(36).substring(7);

export default function Home() {
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      {/* 背景テキストと図形 */}
      <div className="absolute inset-0 overflow-auto">
        <div className="min-h-[200vh] p-8 relative">
          {/* 図形レイヤー */}
          <div className="absolute inset-0">
            {/* 図形群 */}
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
                <p className="text-4xl font-bold text-white/10 mb-2">Glassmorphism</p>
                <p className="text-2xl font-bold text-white/10 mb-2">Modern Design</p>
                <p className="text-3xl font-bold text-white/10">UI Elements</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左カラム: カード */}
            <div className="space-y-8">
              <div className="sticky top-8">
                <SimpleGlassCard className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">シンプルなグラスモーフィズム</h2>
                  <p className="text-white/80 mb-4">
                    基本的なグラスモーフィズム効果を適用したカードです。
                    backdrop-blurとborder、半透明な背景色のみでシンプルに構成されています。
                  </p>
                </SimpleGlassCard>

                <NoiseGlassCard>
                  <h2 className="text-2xl font-bold mb-4">ノイズ付きグラスモーフィズム</h2>
                  <p className="text-white/80 mb-4">
                    SVGのfeTurbulenceフィルターを使用して、 すりガラスのような質感を実現したカードです。
                    ノイズテクスチャが特徴的です。
                  </p>
                </NoiseGlassCard>
              </div>
            </div>

            {/* 右カラム: 説明テキスト */}
            <div className="space-y-8">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold mb-6">グラスモーフィズムの違い</h2>
                <p className="text-lg text-white/80 mb-4">
                  左側の2つのカードは、異なるアプローチでグラスモーフィズム効果を実現しています。
                  背景のテキストや図形を通して、それぞれの効果の違いを確認できます。
                </p>
                <p className="text-lg text-white/80">
                  上のカードはシンプルなblur効果のみ、 下のカードはノイズテクスチャを加えることで、
                  よりすりガラスに近い質感を表現しています。 スクロールして様々な背景での見え方を確認してください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

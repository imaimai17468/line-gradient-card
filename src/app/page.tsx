import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-4">
      <GlassCard className="max-w-xl w-full">
        <h2 className="text-2xl font-bold  mb-4">ガラスモーフィズム</h2>
        <p className=" mb-6">
          モダンでスタイリッシュなデザインのカードコンポーネントです。
          半透明な要素とブラー効果を組み合わせることで、深度と層を作り出します。
          すりガラスのような質感は、ノイズテクスチャとブラー効果によって実現されています。
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold ">特徴</h3>
          <ul className="list-disc list-inside  space-y-2">
            <li>すりガラス調のノイズテクスチャ</li>
            <li>シャイニングアニメーション</li>
            <li>半透明なガラス質感</li>
            <li>モダンなブラー効果</li>
          </ul>
          <Button className="w-full mt-2">Get Started!</Button>
        </div>
      </GlassCard>
    </main>
  );
}

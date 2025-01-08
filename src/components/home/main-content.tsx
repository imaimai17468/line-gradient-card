import { CopyButton } from "@/components/copy-button";
import { BorderMetalicCard } from "@/components/ui/border-metalic-card";
import { Button } from "@/components/ui/button";
import { NoiseGlassCard } from "@/components/ui/noise-glass-card";
import { NoiseMetalicCard } from "@/components/ui/noise-metalic-card";
import { SimpleGlassCard } from "@/components/ui/simple-glass-card";
import { NOISE_GLASS_CODE } from "@/constants/noise-glass-code";
import Link from "next/link";

export function MainContent() {
  return (
    <>
      {/* タイトル */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 pt-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Noise Glassmorphism
          </h1>
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
                  <p className="mb-4">
                    基本的なグラスモーフィズム効果を適用したカードです。
                    backdrop-blurとborder、半透明な背景色のみでシンプルに構成されています。
                  </p>
                </SimpleGlassCard>

                <NoiseGlassCard className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">ノイズ付きグラスモーフィズム</h2>
                  <p>
                    SVGのfeTurbulenceフィルターを使用して、 すりガラスのような質感を実現したカードです。
                    ノイズテクスチャが特徴的です。
                  </p>
                </NoiseGlassCard>

                <div className="grid grid-cols-2 gap-4">
                  <NoiseMetalicCard>
                    <h2 className="text-2xl font-bold mb-2">メタリックカード</h2>
                    <p>金属的な質感を実現したカードデザイン</p>
                  </NoiseMetalicCard>

                  <BorderMetalicCard>
                    <h2 className="text-2xl font-bold mb-2">メタリックボーダーカード</h2>
                    <p>洗練された印象のボーダーデザイン</p>
                  </BorderMetalicCard>
                </div>
              </div>
            </div>

            {/* 右カラム: コード */}
            <div className="space-y-8">
              <div className="sticky top-8">
                <SimpleGlassCard>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">実装コード</h2>
                    <CopyButton code={NOISE_GLASS_CODE} />
                  </div>
                  <pre className="overflow-x-auto p-4 rounded-lg bg-black/20 text-sm">
                    <code>{NOISE_GLASS_CODE}</code>
                  </pre>
                </SimpleGlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHubリンク */}
      <Link
        href="https://github.com/imaimai17468/line-gradient-card"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8"
      >
        <Button variant="outline" size="icon" className="backdrop-blur-md border w-12 h-12">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" role="img" aria-labelledby="githubIconTitle">
            <title id="githubIconTitle">GitHub</title>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="sr-only">View on GitHub</span>
        </Button>
      </Link>
    </>
  );
}

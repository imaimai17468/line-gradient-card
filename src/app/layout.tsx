import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";

export const metadata: Metadata = {
  title: "Noise Glassmorphism",
  description:
    "モダンでインタラクティブなグラスモーフィズムUIの実装例。SVGのfeTurbulenceフィルターを使用した独特な質感、ダイナミックな背景、美しいブラーエフェクトを実現。",
  keywords: [
    "Glassmorphism",
    "SVG",
    "feTurbulence",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UI Design",
    "グラスモーフィズム",
    "ウェブデザイン",
  ],
  openGraph: {
    title: "Noise Glassmorphism",
    description: "モダンでインタラクティブなグラスモーフィズムUIの実装例",
    type: "website",
    locale: "ja_JP",
    siteName: "Noise Glassmorphism",
    url: "https://line-gradient-card.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noise Glassmorphism Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noise Glassmorphism",
    description: "モダンでインタラクティブなグラスモーフィズムUIの実装例",
    site: "@imaimai17468",
    creator: "@imaimai17468",
    images: ["/og-image.png"],
  },
  authors: [{ name: "imaimai17468", url: "https://github.com/imaimai17468" }],
  metadataBase: new URL("https://line-gradient-card.vercel.app"),
  alternates: {
    canonical: "https://line-gradient-card.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

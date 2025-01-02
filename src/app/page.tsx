import { BackgroundDecoration } from "@/components/home/background-decoration";
import { MainContent } from "@/components/home/main-content";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundDecoration />
      <MainContent />
    </main>
  );
}

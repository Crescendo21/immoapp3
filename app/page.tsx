import { Menu } from "@/components/Menu";
import { HeroSection } from "@/components/HeroSection";
import { SponsorsBanner } from "@/components/SponsorsBanner";
import { PresaleSection } from "@/components/PresaleSection";
import { BentoDemo } from "@/components/ProjectExplanation";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Menu />
      <HeroSection />
      <SponsorsBanner />
      <PresaleSection />
      <div className="lpx-6 lg:px-52">
        <BentoDemo />
      </div>
      <Roadmap />
      <FAQ />
      <Footer />
    </main>
  );
}
"use client";
import About from "@/components/about";
import ContentSection from "@/components/content-3";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <ContentSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
}

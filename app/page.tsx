import Hero from "@/components/Hero";
import LogosSection from "@/components/LogosSection";
import CoursesSection from "@/components/CoursesSection";
import ProfessionalGrowthSection from "@/components/ProfessionalGrowthSection";
import CreatorBannerSection from "@/components/CreatorBannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen" style={{ backgroundColor: "#F5F5F6" }}>
      <Hero />
      <LogosSection />
      <CoursesSection />
      <ProfessionalGrowthSection />
      <CreatorBannerSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}



import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import StepsSection from "@/components/StepsSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUsSection />
      <ProblemsSection />
      <ServicesSection />
      <StepsSection />
      <FaqSection />
    </>
  );
}

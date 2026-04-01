import HeroSection from "@/Components/HeroSection";
import FeaturedIn from "@/Components/Page/FeaturedIn";
import HowToApply from "@/Components/Page/HowToApply";
import Places from "@/Components/Page/Place";
import Testimonials from "@/Components/Page/Testimonials";
import UniversityLogos from "@/Components/Page/UniversityLogos";
import WhyApply from "@/Components/Page/WhyApply";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Places />
      <UniversityLogos />
      <WhyApply />
      <Testimonials />
      <HowToApply />
      <FeaturedIn />
    </div>
  );
}

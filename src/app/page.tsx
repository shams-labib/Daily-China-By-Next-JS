import FloatingActions from "@/Components/FloatingActions";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Contact from "@/Components/Page/Contact";
import FeaturedIn from "@/Components/Page/FeaturedIn";
import HowToApply from "@/Components/Page/HowToApply";
import Places from "@/Components/Page/Place";
import RecentBlogs from "@/Components/Page/RecentBlogs";
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
      <RecentBlogs />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import HomeHero from "@/components/HomeHero";
import HomeStats from "@/components/HomeStats";
import Home1v1 from "@/components/Home1v1";
import ApplicationService from "@/components/ApplicationService";
import HomeQnA from "@/components/HomeQnA";
import HomeCaseStudy from "@/components/HomeCaseStudy";
import HomePartners from "@/components/HomePartners";
import HomeStrength from "@/components/HomeStrength";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <HomeHero />
      <div className="space-y-20">
        <HomeStats />
        <Home1v1 />
        <ApplicationService />
        <HomeQnA />
        <HomeCaseStudy />
        <HomePartners />
        <HomeStrength />
      </div>
      <Footer />
      <ContactButtons />
    </div>
  );
}

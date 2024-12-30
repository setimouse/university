import VisaHero from "@/components/visa/VisaHero";
import VisaTypes from "@/components/visa/VisaTypes";
import VisaProcess from "@/components/visa/VisaProcess";
import VisaRequirements from "@/components/visa/VisaRequirements";
import VisaSupport from "@/components/visa/VisaSupport";
import Footer from "@/components/Footer";

export default function VisaServicesPage() {
  return (
    <main>
      <VisaHero />
      <VisaTypes />
      <VisaProcess />
      <VisaRequirements />
      <VisaSupport />
      <Footer />
    </main>
  );
} 
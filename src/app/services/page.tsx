import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import WhyUK from "@/components/services/WhyUK";
import ContactButtons from "@/components/ContactButtons";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <WhyUK />
      <ServicesList />
      <ContactButtons />
      <Footer />
    </main>
  );
}

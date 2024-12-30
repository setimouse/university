import Footer from "@/components/Footer";
import PartnersHero from "@/components/partners/PartnersHero";
import UniversitiesList from "@/components/partners/universities/UniversitiesList";
import UniversitiesTestimonials from "@/components/partners/universities/UniversitiesTestimonials";
import ContactButtons from "@/components/ContactButtons";

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <UniversitiesList />
      <UniversitiesTestimonials />
      <ContactButtons />
      <Footer />
    </main>
  );
}

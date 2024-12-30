import UniversitiesHero from "@/components/partners/universities/UniversitiesHero";
import UniversitiesList from "@/components/partners/universities/UniversitiesList";
import UniversitiesTestimonials from "@/components/partners/universities/UniversitiesTestimonials";
import Footer from "@/components/Footer";

export default function UniversitiesPage() {
  return (
    <main>
      <UniversitiesHero />
      <UniversitiesList />
      <UniversitiesTestimonials />
      <Footer />
    </main>
  );
}

import AcademicHero from "@/components/academic/AcademicHero";
import AcademicServices from "@/components/academic/AcademicServices";
import AcademicProcess from "@/components/academic/AcademicProcess";
import AcademicTeachers from "@/components/academic/AcademicTeachers";
import AcademicCTA from "@/components/academic/AcademicCTA";
import Footer from "@/components/Footer";

export default function AcademicSupportPage() {
  return (
    <main>
      <AcademicHero />
      <AcademicServices />
      <AcademicProcess />
      <AcademicTeachers />
      <AcademicCTA />
      <Footer />
    </main>
  );
}

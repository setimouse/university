import Footer from "@/components/Footer";
import CasesHero from "@/components/cases/CasesHero";
import CasesList from "@/components/cases/CasesList";
import ContactButtons from "@/components/ContactButtons";

export default function CasesPage() {
  return (
    <main>
      <CasesHero />
      <CasesList />
      <ContactButtons />
      <Footer />
    </main>
  );
}

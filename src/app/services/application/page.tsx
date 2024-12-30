import ApplicationHero from "@/components/application/ApplicationHero";
import ApplicationProcess from "@/components/application/ApplicationProcess";
import ApplicationServices from "@/components/application/ApplicationServices";
import ApplicationFAQ from "@/components/application/ApplicationFAQ";
import ApplicationCTA from "@/components/application/ApplicationCTA";
import Footer from "@/components/Footer";

export default function ApplicationPage() {
  return (
    <main>
      <ApplicationHero />
      <ApplicationProcess />
      <ApplicationServices />
      <ApplicationFAQ />
      <ApplicationCTA />
      <Footer />
    </main>
  );
} 
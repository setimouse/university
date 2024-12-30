import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";

export default function NewsPage() {
  return (
    <main>
      <NewsHero />
      <NewsList />
      <ContactButtons />
      <Footer />
    </main>
  );
}

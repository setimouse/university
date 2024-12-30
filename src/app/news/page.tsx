import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <main>
      <NewsHero />
      <NewsList />
      <Footer />
    </main>
  );
}

import { news } from "@/config/news";
import Footer from "@/components/Footer";
import NewsDetail from "@/components/news/NewsDetail";
import NewsDetailHero from "@/components/news/NewsDetailHero";
import { notFound } from "next/navigation";
import ContactButtons from "@/components/ContactButtons";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const newsItem = news.find((item) => item.id === resolvedParams.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <main>
      <NewsDetailHero
        category={newsItem.categoryName}
        title={newsItem.title}
        date={newsItem.date}
        image={newsItem.image}
      />
      <NewsDetail newsItem={newsItem} />
      <ContactButtons />
      <Footer />
    </main>
  );
}

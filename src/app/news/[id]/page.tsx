import { news } from "@/config/news";
import Footer from "@/components/Footer";
import NewsDetail from "@/components/news/NewsDetail";
import NewsDetailHero from "@/components/news/NewsDetailHero";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: Props) {
  const newsItem = news.find((item) => item.id === params.id);

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
      <Footer />
    </main>
  );
}

import { NewsItem, news } from "@/config/news";
import Link from "next/link";
import NewsNavigation from "./NewsNavigation";

interface Props {
  newsItem: NewsItem;
}

export default function NewsDetail({ newsItem }: Props) {
  // 查找当前文章在数组中的索引
  const currentIndex = news.findIndex((item) => item.id === newsItem.id);

  // 获取上一篇和下一篇文章
  const prevArticle = currentIndex > 0 ? news[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < news.length - 1 ? news[currentIndex + 1] : null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* 返回链接 */}
          <Link
            href="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回新闻列表
          </Link>

          {/* 特色图片 */}
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* 文章摘要 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">文章摘要</h2>
            <p className="text-gray-600 leading-relaxed">{newsItem.summary}</p>
          </div>

          {/* 文章内容 */}
          <div className="prose prose-lg max-w-none">
            {newsItem.content ? (
              <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
            ) : (
              <p className="text-gray-600">
                本文暂无详细内容，请关注后续更新...
              </p>
            )}
          </div>

          {/* 文章导航 */}
          <NewsNavigation prevArticle={prevArticle} nextArticle={nextArticle} />

          {/* 分享按钮 */}
          {/* <ShareButtons /> */}
        </div>
      </div>
    </section>
  );
}

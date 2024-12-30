import { NewsItem } from "@/config/news";
import Link from "next/link";

interface Props {
  prevArticle: NewsItem | null;
  nextArticle: NewsItem | null;
}

export default function NewsNavigation({ prevArticle, nextArticle }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {prevArticle ? (
          <Link
            href={`/news/${prevArticle.id}`}
            className="group flex items-center text-gray-600 hover:text-blue-600"
          >
            <svg
              className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <div>
              <div className="text-sm text-gray-500">上一篇</div>
              <div className="font-medium line-clamp-1">
                {prevArticle.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="invisible">占位</div>
        )}

        {nextArticle ? (
          <Link
            href={`/news/${nextArticle.id}`}
            className="group flex items-center text-right text-gray-600 hover:text-blue-600"
          >
            <div>
              <div className="text-sm text-gray-500">下一篇</div>
              <div className="font-medium line-clamp-1">
                {nextArticle.title}
              </div>
            </div>
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : (
          <div className="invisible">占位</div>
        )}
      </div>
    </div>
  );
}

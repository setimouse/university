"use client";

import { news } from "@/config/news";
import { useState } from "react";

export default function NewsList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews =
    activeCategory === "all"
      ? news
      : news.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 分类导航 */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              全部资讯
            </button>
            <button
              onClick={() => setActiveCategory("policy")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "policy"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              政策解读
            </button>
            <button
              onClick={() => setActiveCategory("university")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "university"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              院校资讯
            </button>
            <button
              onClick={() => setActiveCategory("industry")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "industry"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              行业动态
            </button>
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={500}
                  height={300}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {item.categoryName}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{item.date}</span>
                  <a
                    href={`/news/${item.id}`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    阅读更多 ≫
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

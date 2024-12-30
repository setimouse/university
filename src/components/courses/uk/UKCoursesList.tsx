"use client";

import { ukCourseCategories } from "@/config/uk-courses";
import { useState } from "react";

export default function UKCoursesList() {
  const [activeCategory, setActiveCategory] = useState(
    ukCourseCategories[0].id
  );

  const currentCategory = ukCourseCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 分类导航 */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {ukCourseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 分类标题和描述 */}
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">
            {currentCategory?.name}
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-3xl">
            {currentCategory?.description}
          </p>
        </div>

        {/* 课程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory?.courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-72">
                <img
                  src={course.image}
                  alt={course.university}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <img
                    src={course.logo}
                    alt={course.university}
                    className="h-12 bg-white p-1 rounded"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.university}</h3>
                <p className="text-gray-600 mb-1">{course.universityEn}</p>
                <div className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-600">
                        2022-QS世界大学排名：
                      </div>
                      <div className="font-bold">{course.ranking}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-600">课程名称：</div>
                      <div className="font-medium">{course.name}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-600">专业时长：</div>
                      <div className="font-medium">{course.duration}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-600">参考费用：</div>
                      <div className="font-medium">£{course.tuition}</div>
                    </div>
                  </div>
                  <a
                    href={course.link}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    了解详情 ≫
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

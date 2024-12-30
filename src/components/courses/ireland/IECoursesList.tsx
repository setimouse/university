"use client";

import { ieCourseCategories } from "@/config/ie-courses";

export default function IECoursesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 留学优势说明 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            留学爱尔兰课程优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <p className="text-gray-600">
                爱尔兰是纯正的英语国家，在欧洲除英国外唯一以英语为母语的国家。
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <p className="text-gray-600">
                教育制度成熟，文凭获全球认可，适于不同教育背景的求学者。采用ECTS欧洲学分分制系统。
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <p className="text-gray-600">
                爱尔兰都属国，与英国教育体制基本相同。学校历史悠久，教学及科研水平一流，中国与爱尔兰政府已签订了高等学历互认协议。
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <p className="text-gray-600">
                爱尔兰近年GDP增长接近7%，经济发达，就业率高，学生毕业后在当地找到好工作的可获得2年工作签证，连续工作4年可获得绿卡。
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <p className="text-gray-600">
                带薪实习机会。大部分学校为学生提供6-8个月的带薪实习机会，一方面让学生有更多的实践机会，另一方面，带薪实习收入可以缓解学生的生活费部分开销。
              </p>
            </div>
          </div>
        </div>

        {/* 课程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ieCourseCategories[0].courses.map((course, index) => (
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
                <p className="text-gray-600 mb-4">{course.universityEn}</p>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">
                        2022-QS世界大学排名：
                      </span>
                      <span className="font-bold">{course.ranking}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">课程名称：</span>
                      <span className="font-medium">{course.name}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">专业时长：</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">参考费用：</span>
                      <span className="font-medium">€{course.tuition}</span>
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

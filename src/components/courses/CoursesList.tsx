import { courses } from "@/config/courses";

export default function CoursesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">课程服务</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
            为您提供全面的课程辅导，帮助您实现学术目标
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">课程特点</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    了解详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

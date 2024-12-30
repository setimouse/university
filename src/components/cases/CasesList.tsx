"use client";

import { cases } from "@/config/cases";
import { testimonials } from "@/config/testimonials";

export default function CasesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 客户评价视频 */}
        <div id="testimonials" className="mb-20">
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-2">
            Customer testimonials
          </h2>
          <p className="text-center text-gray-600 mb-12">客户评价</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative aspect-[16/11] bg-black rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 transition-transform"
              >
                <video
                  src={testimonial.videoUrl}
                  poster={testimonial.posterUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium">{testimonial.name}</h3>
                  <p className="text-white/80 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 案例研究 */}
        <div id="studies" className="mb-20">
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-2">
            Case Studies
          </h2>
          <p className="text-center text-gray-600 mb-12">案例展示</p>
          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-64 group"
              >
                <div className="md:w-1/3 h-full overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:w-2/3 h-full overflow-y-auto">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">本科专业：</div>
                      <div className="font-medium">{caseItem.major}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">学校院校：</div>
                      <div className="font-medium">{caseItem.university}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">offer：</div>
                  <div className="font-medium mb-4">{caseItem.title}</div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

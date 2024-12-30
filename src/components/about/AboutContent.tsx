import { about } from "@/config/about"
import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 公司简介 */}
        <div className="mb-20">
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-2">
            公司简介
          </h2>
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              {about.introduction}
            </p>
          </div>
        </div>

        {/* Why University Choice */}
        <div className="mb-20">
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-2">
            Why University Choice
          </h2>
          <p className="text-center text-gray-600 mb-12">选择我们的理由</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.whyUs.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="md:w-1/2 h-64 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 我们的优势 */}
        <div className="mb-20">
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-12">
            我们的优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-blue-600">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 团队介绍 */}
        <div>
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-12">
            专业团队
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {member.description}
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
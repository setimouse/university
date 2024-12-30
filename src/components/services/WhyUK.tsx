interface Advantage {
  title: string;
  description: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    title: "学制短，性价比高", 
    description:
      "save your time，save your money这绝对是无法忽视的优点。英国的本科学制是三年（苏格兰为四年），授课硕士只需要一年。降低时间成本的同时，也有效降低了生活成本。",
    icon: "⏱️",
  },
  {
    title: "教育质量高，可选择范围广",
    description: 
      "英国院校所颁发文凭含金量高，是国际公认的。在英国有800多所高等学校、600多所继续教育学院、90多所大学（包括牛津、剑桥、曼大等名扬四海的大学）、150多所学院，14000多个专业和37000多种学位供你自由选择。",
    icon: "🎓",
  },
  {
    title: "留学/就业签证，政策宽松快捷",
    description:
      "中国留学生的签证通过率是96%，过签通过率极高，而且签证材料准备简便，让学生更快速的拿到签证，在英国学习。并且中国留学生毕业后还能够选择继续留在英国学习或工作2年(本科和研究生毕业生)或3年(博士毕业生)。",
    icon: "📄",
  },
];

export default function WhyUK() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600">Why Study in UK</h2>
          <p className="text-xl text-gray-600 mt-2">英国留学的优势</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-4xl">{advantage.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

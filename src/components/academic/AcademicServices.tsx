const services = [
  {
    title: "语言提升",
    description: "IELTS、TOEFL等语言考试辅导，提高听说读写能力",
    icon: "language",
  },
  {
    title: "专业课程",
    description: "商科、工程、艺术等专业课程辅导，掌握核心知识",
    icon: "school",
  },
  {
    title: "论文指导",
    description: "论文写作技巧指导，包括选题、研究方法、写作规范等",
    icon: "edit_note",
  },
  {
    title: "考试辅导",
    description: "期中期末考试辅导，帮助您取得理想成绩",
    icon: "quiz",
  }
];

export default function AcademicServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">辅导课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-blue-600 text-2xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
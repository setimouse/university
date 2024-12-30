const services = [
  {
    title: "本科申请",
    description: "为高中毕业生提供全面的本科留学申请服务，包括选校、文书、面试等全方位指导",
    icon: "school",
  },
  {
    title: "研究生申请",
    description: "针对硕士、博士申请者提供专业的申请咨询，助您进入理想的研究生院",
    icon: "psychology",
  },
  {
    title: "语言培训",
    description: "提供IELTS、TOEFL等语言考试培训，帮助您达到学校要求的语言水平",
    icon: "translate",
  },
];

export default function ApplicationServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">留学申请服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
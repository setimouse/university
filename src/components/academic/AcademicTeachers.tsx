const teachers = [
  {
    name: "Sarah Johnson",
    title: "语言培训专家",
    description: "拥有10年IELTS和TOEFL教学经验，帮助数百名学生提高语言成绩",
    image: "/images/teacher1.jpg"
  },
  {
    name: "Michael Chen",
    title: "商科导师",
    description: "曾任职于世界500强企业，专注商科课程和论文指导",
    image: "/images/teacher2.jpg"
  },
  {
    name: "Emily Wang",
    title: "工程学科专家",
    description: "工程博士学位，擅长理工科课程辅导和研究方法指导",
    image: "/images/teacher3.jpg"
  }
];

export default function AcademicTeachers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">师资力量</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-blue-600 mb-4">{teacher.title}</p>
                <p className="text-gray-600">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
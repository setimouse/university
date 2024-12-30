const steps = [
  {
    title: "免费评估",
    description: "了解学生当前学习情况，明确学习目标",
    icon: "assessment"
  },
  {
    title: "制定计划",
    description: "根据评估结果制定个性化辅导方案",
    icon: "event_note"
  },
  {
    title: "课程匹配",
    description: "匹配最适合的专业导师进行一对一辅导",
    icon: "person_search"
  },
  {
    title: "定期反馈",
    description: "跟踪学习进度，及时调整辅导方案",
    icon: "feedback"
  }
];

export default function AcademicProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">辅导流程</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-icons text-white text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-blue-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
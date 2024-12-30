const features = [
  {
    icon: "school",
    title: "专业师资",
    description: "拥有丰富教学经验的专业教师团队，确保教学质量",
  },
  {
    icon: "person",
    title: "个性化教学",
    description: "根据学生个人情况制定专属学习计划",
  },
  {
    icon: "schedule",
    title: "灵活时间",
    description: "提供线上线下多种授课方式，时间安排灵活",
  },
  {
    icon: "trending_up",
    title: "成效显著",
    description: "学生成绩普遍提升，帮助实现学习目标",
  },
  {
    icon: "support_agent",
    title: "全程跟踪",
    description: "定期评估学习进度，及时调整教学策略",
  },
  {
    icon: "groups",
    title: "小班授课",
    description: "小班教学模式，保证每位学生得到充分关注",
  },
];

export default function CoursesFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">课程特色</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
            我们的课程服务具有以下特点，确保为您提供最优质的学习体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="material-icons text-white text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

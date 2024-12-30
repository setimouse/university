const steps = [
  {
    title: "免费咨询",
    description: "专业顾问为您分析留学规划，评估申请可能性",
    icon: "chat",
  },
  {
    title: "确定方案",
    description: "根据您的需求和背景，制定个性化申请方案",
    icon: "assignment",
  },
  {
    title: "材料准备",
    description: "协助准备申请材料，包括文书修改和推荐信",
    icon: "description",
  },
  {
    title: "递交申请",
    description: "指导完成在线申请，确保材料准确无误",
    icon: "send",
  },
  {
    title: "跟踪申请",
    description: "持续跟进申请进度，及时处理学校反馈",
    icon: "track_changes",
  },
  {
    title: "录取服务",
    description: "协助办理签证、住宿等入学相关事宜",
    icon: "school",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">申请流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-white">{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
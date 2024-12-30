const steps = [
  {
    title: "初步咨询",
    description: "了解您的具体需求，评估签证申请可行性",
    icon: "chat",
    color: "bg-purple-500"
  },
  {
    title: "材料准备",
    description: "指导准备所需材料，确保文件完整规范",
    icon: "description",
    color: "bg-blue-500"
  },
  {
    title: "材料审核",
    description: "专业顾问审核材料，确保符合使馆要求",
    icon: "fact_check",
    color: "bg-green-500"
  },
  {
    title: "递交申请",
    description: "协助递交签证申请，追踪申请进度",
    icon: "send",
    color: "bg-yellow-500"
  },
  {
    title: "面签指导",
    description: "提供面签辅导，模拟面试训练",
    icon: "record_voice_over",
    color: "bg-red-500"
  }
];

export default function VisaProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">办理流程</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* 时间轴线 */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200" />
              )}
              
              {/* 图标 */}
              <div className={`relative z-10 w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                <span className="material-icons text-white">{step.icon}</span>
              </div>
              
              {/* 内容 */}
              <div className="ml-8">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
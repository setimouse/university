const requirements = [
  {
    title: "基本材料",
    items: [
      "有效护照",
      "签证申请表",
      "照片（符合使馆要求）",
      "身份证明"
    ],
    icon: "folder"
  },
  {
    title: "学习材料",
    items: [
      "录取通知书",
      "学费证明",
      "语言成绩证明",
      "学历证明"
    ],
    icon: "school"
  },
  {
    title: "财务材料",
    items: [
      "银行存款证明",
      "资金来源证明",
      "担保人材料",
      "资产证明"
    ],
    icon: "account_balance"
  }
];

export default function VisaRequirements() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">申请材料</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons text-blue-600 text-3xl">
                  {req.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{req.title}</h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="material-icons text-green-500 mr-2 text-sm">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
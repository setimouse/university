const visaTypes = [
  {
    country: "英国",
    types: ["学生签证", "访问签证", "工作签证"],
    flag: "🇬🇧",
    bgColor: "from-red-500 to-blue-600"
  },
  {
    country: "美国",
    types: ["F1学生签证", "J1交换签证", "B1/B2访问签证"],
    flag: "🇺🇸",
    bgColor: "from-blue-600 to-red-500"
  },
  {
    country: "澳大利亚",
    types: ["500学生签证", "访问签证", "工作签证"],
    flag: "🇦🇺",
    bgColor: "from-blue-500 to-red-600"
  },
  {
    country: "加拿大",
    types: ["学习许可", "访问签证", "工作许可"],
    flag: "🇨🇦",
    bgColor: "from-red-600 to-red-500"
  }
];

export default function VisaTypes() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">签证类型</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaTypes.map((visa, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden bg-gradient-to-br ${visa.bgColor} p-6 text-white transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-6xl mb-4">{visa.flag}</div>
              <h3 className="text-2xl font-bold mb-4">{visa.country}</h3>
              <ul className="space-y-2">
                {visa.types.map((type, typeIndex) => (
                  <li key={typeIndex} className="flex items-center">
                    <span className="material-icons text-sm mr-2">check_circle</span>
                    {type}
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
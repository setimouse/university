const regions = [
  { name: "英国", count: 48 },
  { name: "美国", count: 35 },
  { name: "澳大利亚", count: 28 },
  { name: "加拿大", count: 22 },
  { name: "新西兰", count: 15 },
  { name: "爱尔兰", count: 12 },
];

const filters = [
  {
    name: "学位类型",
    options: ["本科", "硕士", "博士", "预科"],
  },
  {
    name: "专业方向",
    options: ["商科", "工程", "艺术", "医学", "法律", "计算机"],
  },
  {
    name: "院校排名",
    options: ["Top 10", "Top 50", "Top 100", "Top 200"],
  },
];

export default function UniversitiesFilter() {
  return (
    <section className="py-12 bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8">
          {/* 地区选择 */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">留学地区</h3>
            <div className="flex flex-wrap gap-3">
              {regions.map((region, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {region.name} ({region.count})
                </button>
              ))}
            </div>
          </div>

          {/* 筛选条件 */}
          <div className="w-full lg:w-auto">
            <h3 className="text-lg font-medium mb-4">筛选条件</h3>
            <div className="flex flex-wrap gap-4">
              {filters.map((filter, index) => (
                <div key={index} className="relative group">
                  <button className="px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors">
                    {filter.name}
                    <span className="material-icons text-sm ml-1">
                      expand_more
                    </span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    {filter.options.map((option, i) => (
                      <button
                        key={i}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

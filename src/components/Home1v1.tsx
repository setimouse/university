export default function Home1v1() {
  return (
    <section className="py-16 bg-[#00BCD4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 flex justify-end">
            <img
              src="https://f.cdn-static.cn/61712_16487786902802.jpg?imageView2/2/w/1028/q/89/format/webp"
              alt="一对一留学咨询"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">1v1留学指导</h2>
            <p className="text-gray-600 mb-6">
              我们提供专业的一对一留学咨询服务，为您量身定制留学方案：
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="material-icons text-blue-600 mr-2">
                  check_circle
                </span>
                <span>个性化留学规划</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-600 mr-2">
                  check_circle
                </span>
                <span>院校选择与申请指导</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-600 mr-2">
                  check_circle
                </span>
                <span>文书修改与面试辅导</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-600 mr-2">
                  check_circle
                </span>
                <span>签证申请全程协助</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 
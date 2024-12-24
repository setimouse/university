export default function HomeStats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            University Choice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            作为您的升学规划顾问，我们将以专业的态度为您提供一站式的留学咨询服务，让您的留学之路更加顺畅。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">13年</h3>
            <p className="text-gray-600 mt-2">行业经验</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">48所</h3>
            <p className="text-gray-600 mt-2">合作院校</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">60名</h3>
            <p className="text-gray-600 mt-2">专业顾问</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/小时</h3>
            <p className="text-gray-600 mt-2">在线服务</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10万+</h3>
            <p className="text-gray-600 mt-2">成功案例</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 mt-2">客户满意度</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
          了解更多
        </button>
      </div>
    </section>
  )
} 
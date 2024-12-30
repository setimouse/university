export default function IECoursesHero() {
  return (
    <section className="relative h-[500px] pt-20">
      <div className="absolute inset-0">
        <img
          src="https://f.cdn-static.cn/61712_16485342209784.jpg"
          alt="爱尔兰大学课程"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            爱尔兰大学课程
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            探索爱尔兰顶尖大学课程
          </h1>
          <p className="text-xl text-white/90 mb-8">
            我们提供全面的爱尔兰大学课程信息，帮助您选择最适合的专业方向
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              浏览课程
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              预约咨询
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

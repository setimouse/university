export default function VisaHero() {
  return (
    <section className="relative h-[calc(100vh-5rem)] pt-20 bg-[#1A1F2D]">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('/images/visa-hero.jpg')`,
          }}
        />
        <div className="absolute inset-0  bg-gradient-to-r from-black/10 to-black/30" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1 text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              专业的签证
              <br />
              申请服务
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              我们的签证顾问团队将为您提供专业的签证申请指导，
              确保您的留学之路顺利进行
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                咨询签证
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                了解更多
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-lg font-semibold mb-2">
                  成功率
                </h3>
                <p className="text-5xl font-bold text-blue-300">99%</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-lg font-semibold mb-2">
                  办理周期
                </h3>
                <p className="text-5xl font-bold text-blue-300">2周+</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-lg font-semibold mb-2">
                  服务国家
                </h3>
                <p className="text-5xl font-bold text-blue-300">20+</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-lg font-semibold mb-2">
                  成功案例
                </h3>
                <p className="text-5xl font-bold text-blue-300">5000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

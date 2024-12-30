export default function UniversitiesHero() {
  return (
    <section className="relative h-[500px] pt-20">
      <div className="absolute inset-0">
        <img
          src="/images/universities-hero.jpg"
          alt="全球合作院校"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            全球合作院校
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            遍布全球的优质教育资源
          </h1>
          <p className="text-xl text-white/90 mb-8">
            我们与全球多个国家的知名高校建立了稳固的合作关系，
            为您提供丰富多样的留学选择
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              查看院校列表
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              按地区筛选
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

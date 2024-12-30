export default function NewsHero() {
  return (
    <section className="relative h-[500px] pt-20">
      <div className="absolute inset-0">
        <img
          src="/images/news-hero.jpg"
          alt="新闻资讯"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            新闻资讯
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            留学资讯与行业动态
          </h1>
          <p className="text-xl text-white/90 mb-8">
            了解最新的留学政策、院校信息和行业趋势
          </p>
        </div>
      </div>
    </section>
  );
}

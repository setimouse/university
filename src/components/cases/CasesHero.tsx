export default function CasesHero() {
  return (
    <section className="relative h-[500px] pt-20">
      <div className="absolute inset-0">
        <img
          src="https://f.cdn-static.cn/cases-hero.jpg"
          alt="成功案例"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            成功案例
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            留学申请成功案例
          </h1>
          <p className="text-xl text-white/90 mb-8">
            我们帮助众多学生实现了留学梦想，这里有他们的成功故事
          </p>
        </div>
      </div>
    </section>
  );
}

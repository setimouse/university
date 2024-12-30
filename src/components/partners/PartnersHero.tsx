export default function PartnersHero() {
  return (
    <section className="relative h-[500px] pt-20">
      <div className="absolute inset-0">
        <img
          src="/images/partners-hero.jpg"
          alt="合作伙伴"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            合作伙伴
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            全球优质教育资源
          </h1>
          <p className="text-xl text-white/90 mb-8">
            与世界知名院校建立长期稳定的合作关系，为学生提供优质的留学选择
          </p>
        </div>
      </div>
    </section>
  );
}

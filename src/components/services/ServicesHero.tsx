export default function ServicesHero() {
  return (
    <section className="relative h-[500px] pt-20">
      <div className="absolute inset-0">
        <img
          src="/images/services-hero.jpg"
          alt="留学服务"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            留学服务
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            专业的留学申请服务
          </h1>
          <p className="text-xl text-white/90 mb-8">
            从选校到申请，从签证到入学，我们提供全方位的留学咨询和服务
          </p>
        </div>
      </div>
    </section>
  );
}

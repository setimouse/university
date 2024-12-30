export default function ApplicationHero() {
  return (
    <section className="relative h-[calc(100vh-5rem)] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/application-hero.jpg"
          alt="留学申请"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">专业留学申请服务</h1>
          <p className="text-xl mb-8 opacity-90">
            从选校到录取，为您提供一站式留学申请解决方案
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg">
              免费咨询
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
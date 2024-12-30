export default function VisaSupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            专业的签证支持服务
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            我们的签证顾问团队将全程为您提供专业支持，
            确保您的签证申请顺利通过
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              立即咨询
            </button>
            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              预约顾问
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
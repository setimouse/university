export default function HomeCaseStudy() {
  return (
    <section className="bg-[#00BCD4] py-16 flex items-center min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* 左侧文字内容 */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Case study</h2>
            <p className="text-xl mb-8">成功案例</p>
            <p className="mb-8">
              我们的服务，帮助许多学生成功申请到理想的学校。我们的团队为每位学生制定个性化的申请方案，从选校到文书修改，从面试准备到签证指导，全程提供专业支持。
            </p>
            <button className="bg-white text-[#00BFB3] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              了解更多
            </button>
          </div>

          {/* 右侧图片 */}
          <div className="hidden md:flex space-x-8">
            <img
              src="https://f.cdn-static.cn/61712_16479279116875.jpg?imageView2/2/w/495/q/89/format/webp"
              alt="毕业典礼照片"
              className="w-1/2 h-64 object-cover rounded-lg"
            />
            <img
              src="https://f.cdn-static.cn/61712_16479279113584.jpg?imageView2/2/w/495/q/89/format/webp"
              alt="课堂照片"
              className="w-1/2 h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import HomeHero from "@/components/HomeHero";
import HomeStats from "@/components/HomeStats";
import Home1v1 from "@/components/Home1v1";
import ApplicationService from "@/components/ApplicationService";
import HomeQnA from "@/components/HomeQnA";
import HomeCaseStudy from "@/components/HomeCaseStudy";
import HomePartners from "@/components/HomePartners";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeStats />
      <Home1v1 />
      <ApplicationService />
      <HomeQnA />
      <HomeCaseStudy />
      <HomePartners />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">我们的优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 优势1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BFB3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-white text-3xl">school</span>
              </div>
              <h3 className="text-xl font-bold mb-2">深厚专业知识</h3>
              <p className="text-gray-600">
                拥有丰富的留学申请经验和专业知识,熟悉各国教育体系和申请流程
              </p>
            </div>

            {/* 优势2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BFB3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-white text-3xl">people</span>
              </div>
              <h3 className="text-xl font-bold mb-2">因材施教</h3>
              <p className="text-gray-600">
                根据每位学生的学术背景、兴趣特长和职业规划,制定个性化的留学方案
              </p>
            </div>

            {/* 优势3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BFB3] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-white text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-2">专业团队</h3>
              <p className="text-gray-600">
                拥有经验丰富的顾问团队,提供全方位的留学咨询和申请服务
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ContactButtons />
    </div>
  );
}

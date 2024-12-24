export default function Footer() {
  return (
    <footer className="bg-[#1A1F2D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* 关于我们 */}
          <div>
            <h4 className="text-lg font-bold mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">公司简介</a></li>
              <li><a href="/team" className="hover:text-blue-400">团队介绍</a></li>
              <li><a href="/contact" className="hover:text-blue-400">联系方式</a></li>
              <li><a href="/join" className="hover:text-blue-400">加入我们</a></li>
            </ul>
          </div>
          
          {/* 留学申请 */}
          <div>
            <h4 className="text-lg font-bold mb-4">留学申请</h4>
            <ul className="space-y-2">
              <li><a href="/usa" className="hover:text-blue-400">美国留学</a></li>
              <li><a href="/uk" className="hover:text-blue-400">英国留学</a></li>
              <li><a href="/canada" className="hover:text-blue-400">加拿大留学</a></li>
              <li><a href="/australia" className="hover:text-blue-400">澳洲留学</a></li>
            </ul>
          </div>

          {/* 申请服务 */}
          <div>
            <h4 className="text-lg font-bold mb-4">申请服务</h4>
            <ul className="space-y-2">
              <li><a href="/services/consulting" className="hover:text-blue-400">留学咨询</a></li>
              <li><a href="/services/application" className="hover:text-blue-400">申请指导</a></li>
              <li><a href="/services/visa" className="hover:text-blue-400">签证服务</a></li>
              <li><a href="/services/language" className="hover:text-blue-400">语言培训</a></li>
            </ul>
          </div>

          {/* 资源中心 */}
          <div>
            <h4 className="text-lg font-bold mb-4">资源中心</h4>
            <ul className="space-y-2">
              <li><a href="/resources/news" className="hover:text-blue-400">留学资讯</a></li>
              <li><a href="/resources/guide" className="hover:text-blue-400">申请指南</a></li>
              <li><a href="/resources/cases" className="hover:text-blue-400">成功案例</a></li>
              <li><a href="/resources/faq" className="hover:text-blue-400">常见问题</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-lg font-bold mb-4">联系方式</h4>
            <ul className="space-y-2">
              <li>电话：+86 123 4567 8901</li>
              <li>邮箱：info@universitychoice.com</li>
              <li>地址：北京市朝阳区xxx大厦</li>
              <li>工作时间：周一至周日 9:00-21:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 
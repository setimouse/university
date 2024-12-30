export default function UniversitiesMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">全球院校分布</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们的合作院校遍布全球各大洲，为您提供多样化的留学选择
          </p>
        </div>
        <div className="relative aspect-[16/9] bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-no-repeat bg-center bg-contain opacity-20" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-gray-500">
              <span className="material-icons text-6xl mb-4">public</span>
              <p>地图加载中...</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          <div>
            <div className="font-bold text-xl text-blue-600">48</div>
            <div className="text-gray-600">英国院校</div>
          </div>
          <div>
            <div className="font-bold text-xl text-blue-600">35</div>
            <div className="text-gray-600">美国院校</div>
          </div>
          <div>
            <div className="font-bold text-xl text-blue-600">28</div>
            <div className="text-gray-600">澳洲院校</div>
          </div>
          <div>
            <div className="font-bold text-xl text-blue-600">22</div>
            <div className="text-gray-600">加拿大院校</div>
          </div>
          <div>
            <div className="font-bold text-xl text-blue-600">15</div>
            <div className="text-gray-600">新西兰院校</div>
          </div>
          <div>
            <div className="font-bold text-xl text-blue-600">12</div>
            <div className="text-gray-600">爱尔兰院校</div>
          </div>
        </div>
      </div>
    </section>
  );
}

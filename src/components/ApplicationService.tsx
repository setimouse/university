export default function ApplicationService() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-4">Application Service</h2>
        <p className="text-center text-gray-600 mb-12">一站式完成申请流程</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">description</span>
            </div>
            <span className="text-sm text-gray-800">材料准备</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">school</span>
            </div>
            <span className="text-sm text-gray-800">选校评估</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">person</span>
            </div>
            <span className="text-sm text-gray-800">简历撰写</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">edit_document</span>
            </div>
            <span className="text-sm text-gray-800">文书指导</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">send</span>
            </div>
            <span className="text-sm text-gray-800">递交申请</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">verified</span>
            </div>
            <span className="text-sm text-gray-800">录取服务</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">school</span>
            </div>
            <span className="text-sm text-gray-800">学业规划</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons text-blue-600">groups</span>
            </div>
            <span className="text-sm text-gray-800">专业导师</span>
          </div>
        </div>
      </div>
    </section>
  )
} 
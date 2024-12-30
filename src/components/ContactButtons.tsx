export default function ContactButtons() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-l-lg z-40">
      <div className="flex flex-col p-3 space-y-4">
        <a href="/contact" className="flex flex-col items-center text-sm group">
          <span className="material-icons text-xl text-gray-600 group-hover:text-blue-600 transition-colors">person</span>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors">预约</span>
        </a>
        <a href="tel:+1234567890" className="flex flex-col items-center text-sm group">
          <span className="material-icons text-xl text-gray-600 group-hover:text-blue-600 transition-colors">phone</span>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors">电话</span>
        </a>
        <a href="/wechat" className="flex flex-col items-center text-sm group">
          <span className="material-icons text-xl text-gray-600 group-hover:text-blue-600 transition-colors">chat</span>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors">微信</span>
        </a>
      </div>
    </div>
  )
}
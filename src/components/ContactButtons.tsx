export default function ContactButtons() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white/80 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-l-lg">
      <div className="flex flex-col p-2 space-y-3">
        <a href="/contact" className="flex flex-col items-center text-sm">
          <span className="material-icons text-base">person</span>
          <span>预约</span>
        </a>
        <a href="tel:+1234567890" className="flex flex-col items-center text-sm">
          <span className="material-icons text-base">phone</span>
          <span>电话</span>
        </a>
        <a href="/wechat" className="flex flex-col items-center text-sm">
          <span className="material-icons text-base">chat</span>
          <span>微信</span>
        </a>
      </div>
    </div>
  )
}
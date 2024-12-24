export default function ContactButtons() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-l-lg">
      <div className="flex flex-col p-4 space-y-4">
        <a href="/contact" className="flex flex-col items-center">
          <span className="material-icons">person</span>
          <span>预约咨询</span>
        </a>
        <a href="tel:+1234567890" className="flex flex-col items-center">
          <span className="material-icons">phone</span>
          <span>电话咨询</span>
        </a>
        <a href="/wechat" className="flex flex-col items-center">
          <span className="material-icons">chat</span>
          <span>公众号</span>
        </a>
      </div>
    </div>
  )
} 
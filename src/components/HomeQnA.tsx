export default function HomeQnA() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-3">Q&A</h2>
        <p className="text-center text-lg mb-12">常见问题解答</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-purple-600 text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">基础申请条件和时间规划</h3>
            <p className="text-sm">了解申请流程和关键时间节点</p>
          </div>
          
          <div className="bg-rose-500 text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">如何选择合适的院校</h3>
            <p className="text-sm">根据个人情况找到最佳匹配的学校</p>
          </div>
          
          <div className="bg-teal-600 text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">留学生活和未来发展规划</h3>
            <p className="text-sm">为海外求学生活做好准备</p>
          </div>
          
          <div className="bg-indigo-600 text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">如何提升申请材料质量</h3>
            <p className="text-sm">打造有竞争力的申请文书</p>
          </div>
          
          <div className="bg-purple-500 text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">UC申请技巧和注意事项</h3>
            <p className="text-sm">掌握UC系统申请的关键要点</p>
          </div>
          
          <div className="bg-amber-600 text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">查看更多</h3>
            <p className="text-sm">获取更多常见问题解答</p>
          </div>
        </div>
      </div>
    </section>
  )
} 
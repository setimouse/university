const faqs = [
  {
    question: "申请留学需要哪些基本条件？",
    answer: "基本条件包括学历证明、语言成绩（如IELTS/TOEFL）、个人陈述等。具体要求因学校和专业而异。"
  },
  {
    question: "留学申请流程需要多长时间？",
    answer: "一般需要6-12个月的准备时间。建议提前规划，以确保有充足时间准备所有申请材料。"
  },
  {
    question: "如何选择适合的学校和专业？",
    answer: "我们会根据您的学术背景、职业规划、预算等因素，为您推荐最适合的学校和专业选择。"
  }
];

export default function ApplicationFAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">常见问题</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
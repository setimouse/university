interface Testimonial {
  quote: string;
  name: string;
  course: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "老师的教学方法非常适合我，帮助我在IELTS考试中取得了理想的成绩。",
    name: "张同学",
    course: "IELTS备考课程",
    image: "/images/student-1.jpg",
  },
  {
    quote:
      "课程内容设计合理，从基础到进阶都有详细的讲解，让我对商科知识有了更深的理解。",
    name: "李同学",
    course: "商科专业课",
    image: "/images/student-2.jpg",
  },
  {
    quote: "老师不仅讲解细致，还会分享很多解题技巧，让复杂的数学问题变得简单。",
    name: "王同学",
    course: "工程数学",
    image: "/images/student-3.jpg",
  },
];

export default function CoursesTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">学员反馈</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
            听听我们的学员怎么说
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

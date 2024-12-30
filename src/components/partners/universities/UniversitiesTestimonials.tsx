interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "作为长期合作伙伴，我们见证了他们在留学服务领域的专业性和责任心。他们为学生提供的服务始终保持高水准。",
    name: "Sarah Johnson",
    title: "曼彻斯特大学招生官",
    image: "/images/official-1.jpg",
  },
  {
    quote:
      "他们对英国教育体系的深入了解，以及为学生提供的个性化指导，让我们印象深刻。",
    name: "Michael Brown",
    title: "利物浦大学国际部主任",
    image: "/images/official-2.jpg",
  },
  {
    quote:
      "他们不仅帮助学生获得录取，更注重学生的长期发展，这种专业态度值得赞赏。",
    name: "Emma Wilson",
    title: "伯明翰大学招生代表",
    image: "/images/official-3.jpg",
  },
];

export default function UniversitiesTestimonials() {
  return (
    <section id="official" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">官员推荐</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
            来自各大合作院校的官方代表对我们的评价与推荐
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
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
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

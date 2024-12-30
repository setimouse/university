interface CountryCard {
  name: string;
  image: string;
  nameEn: string;
  href: string;
}

const countries: CountryCard[] = [
  {
    name: "英国",
    nameEn: "UK",
    image:
      "https://f.cdn-static.cn/61712_164785059758314.jpg?imageView2/2/w/502/q/89/format/webp",
    href: "/courses/uk",
  },
  {
    name: "澳洲",
    nameEn: "Australia",
    image:
      "https://f.cdn-static.cn/61712_16487192173934.jpg?imageView2/2/w/502/q/89/format/webp",
    href: "/courses/australia",
  },
  {
    name: "爱尔兰",
    nameEn: "Ireland",
    image:
      "https://f.cdn-static.cn/61712_16485342209784.jpg?imageView2/2/w/502/q/89/format/webp",
    href: "/courses/ireland",
  },
];

export default function CoursesRecommendation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Course recommendation</h2>
          <p className="text-xl text-gray-600">大学课程推荐</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <a href={country.href} key={index}>
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-b-xl text-xl font-medium">
                    {country.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {country.name}课程
                    </h3>
                    <p className="text-white/80">
                      查看{country.name}大学课程详情 →
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

interface University {
  name: string;
  logo: string;
  url: string;
}

const universities: University[] = [
  {
    name: "温彻斯特大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.winchester.ac.uk/"
  },
  {
    name: "德比大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.derby.ac.uk/"
  },
  {
    name: "纽波特大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.newport.ac.uk/"
  },
  {
    name: "考文垂大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.coventry.ac.uk/"
  },
  {
    name: "米德塞克斯大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.mdx.ac.uk/"
  },
  {
    name: "格林威治大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.gre.ac.uk/"
  },
  {
    name: "牛津布鲁克斯大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.brookes.ac.uk/"
  },
  {
    name: "布鲁内尔大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.brunel.ac.uk/"
  },
  {
    name: "伍尔弗汉普顿大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.wlv.ac.uk/"
  },
  {
    name: "西伦敦大学",
    logo: "https://f.cdn-static.cn/61712_165190401099119.png?imageView2/2/w/236/q/89/format/webp",
    url: "https://www.uwl.ac.uk/"
  }
];

export default function HomePartners() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">合作院校</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {universities.map((university, index) => (
            <a 
              key={index} 
              href={university.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img 
                src={university.logo}
                alt={university.name}
                className="h-32 object-contain duration-300 hover:shadow-xl hover:-translate-y-1 p-5" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 
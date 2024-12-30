interface Props {
  category: string;
  title: string;
  date: string;
  image: string;
}

export default function NewsDetailHero({ category, title, date, image }: Props) {
  return (
    <section className="relative h-[400px] pt-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="新闻详情"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
            {category}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 line-clamp-2">
            {title}
          </h1>
          <div className="text-white/80">发布时间：{date}</div>
        </div>
      </div>
    </section>
  );
}

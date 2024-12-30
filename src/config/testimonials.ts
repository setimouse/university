export interface Testimonial {
  id: string;
  name: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "张同学",
    title: "成功申请英国G5名校",
    videoUrl: "https://example.com/testimonial1.mp4",
    posterUrl: "https://f.cdn-static.cn/61712_164854194298615.png",
  },
  {
    id: "testimonial-2",
    name: "李同学",
    title: "成功申请澳洲八大名校",
    videoUrl: "https://example.com/testimonial2.mp4",
    posterUrl: "https://f.cdn-static.cn/61712_164854194298616.png",
  },
  {
    id: "testimonial-3",
    name: "王同学",
    title: "成功申请爱尔兰名校",
    videoUrl: "https://example.com/testimonial3.mp4",
    posterUrl: "https://f.cdn-static.cn/61712_164854194298617.png",
  },
];

export interface University {
  name: string;
  country: string;
  location: string;
  ranking: string;
  image: string;
  features: string[];
  courses: string[];
  website: string;
  intro: string;
}

export const ukUniversities: University[] = [
  {
    name: "University of Aberdeen",
    country: "英国",
    location: "阿伯丁",
    ranking: "178",
    image:
      "https://f.cdn-static.cn/61712_165189355057710.png?imageView2/2/w/203/q/89/format/webp",
    features: ["历史悠久", "研究型大学", "就业前景好"],
    courses: ["商科", "工程", "医学", "法律"],
    website: "https://www.abdn.ac.uk/",
    intro:
      "阿伯丁大学（University of Aberdeen），简称ABDN或AUA，是一所位于英国苏格兰阿伯丁的公立研究型大学。",
  },
  {
    name: "Brunel University London",
    country: "英国",
    location: "伦敦",
    ranking: "351",
    image:
      "https://f.cdn-static.cn/61712_165189532703214.png?imageView2/2/w/203/q/89/format/webp",
    features: ["实践导向", "产学研结合", "地理位置优越"],
    courses: ["工程", "设计", "商科", "计算机"],
    website: "https://www.brunel.ac.uk/",
    intro:
      "布鲁内尔大学（Brunel University London），简称Brunel或BU，是一所位于英国伦敦的公立研究型大学。",
  },
  {
    name: "Coventry University",
    country: "英国",
    location: "考文垂",
    ranking: "601",
    image: "/images/coventry.jpg",
    features: ["教学质量高", "实践机会多", "学费合理"],
    courses: ["商科", "工程", "艺术", "传媒"],
    website: "https://www.coventry.ac.uk/",
    intro:
      "考文垂大学（Coventry University），简称Cov或CU，是一所位于英国考文垂的公立研究型大学。",
  },
  {
    name: "University of Liverpool",
    country: "英国",
    location: "利物浦",
    ranking: "189",
    image: "/images/liverpool.jpg",
    features: ["红砖大学", "研究实力强", "国际化程度高"],
    courses: ["商科", "工程", "医学", "计算机"],
    website: "https://www.liv.ac.uk/",
    intro:
      "利物浦大学（University of Liverpool），简称Liv或LIV，是一所位于英国利物浦的公立研究型大学。",
  },
  {
    name: "Newcastle University",
    country: "英国",
    location: "纽卡斯尔",
    ranking: "146",
    image: "/images/newcastle.jpg",
    features: ["罗素集团成员", "教学质量优", "学生满意度高"],
    courses: ["商科", "建筑", "医学", "工程"],
    website: "https://www.ncl.ac.uk/",
    intro:
      "纽卡斯尔大学（Newcastle University），简称NCL或NU，是一所位于英国纽卡斯尔的公立研究型大学。",
  },
  {
    name: "University of Reading",
    country: "英国",
    location: "雷丁",
    ranking: "201",
    image: "/images/reading.jpg",
    features: ["环境优美", "师资力量强", "专业设置全"],
    courses: ["商科", "农业", "气象", "教育"],
    website: "https://www.reading.ac.uk/",
    intro:
      "雷丁大学（University of Reading），简称Rd或RdU，是一所位于英国雷丁的公立研究型大学。",
  },
  {
    name: "University of Surrey",
    country: "英国",
    location: "萨里",
    ranking: "272",
    image: "/images/surrey.jpg",
    features: ["就业率高", "研究实力强", "设施完善"],
    courses: ["酒店管理", "工程", "商科", "传媒"],
    website: "https://www.surrey.ac.uk/",
    intro:
      "萨里大学（University of Surrey），简称Surrey或SU，是一所位于英国萨里的公立研究型大学。",
  },
  {
    name: "University of Sussex",
    country: "英国",
    location: "布莱顿",
    ranking: "151",
    image: "/images/sussex.jpg",
    features: ["研究型大学", "学术氛围浓", "地理位置佳"],
    courses: ["商科", "人文", "科学", "社会学"],
    website: "https://www.sussex.ac.uk/",
    intro:
      "萨塞克斯大学（University of Sussex），简称Sussex或SU，是一所位于英国布莱顿的公立研究型大学。",
  },
  {
    name: "University of York",
    country: "英国",
    location: "约克",
    ranking: "169",
    image: "/images/york.jpg",
    features: ["罗素集团成员", "历史悠久", "学术声誉好"],
    courses: ["商科", "人文", "社会科学", "教育"],
    website: "https://www.york.ac.uk/",
    intro:
      "约克大学（University of York），简称York或YU，是一所位于英国约克的公立研究型大学。",
  },
  {
    name: "University of Manchester",
    country: "英国",
    location: "曼彻斯特",
    ranking: "27",
    image: "/images/manchester.jpg",
    features: ["红砖大学", "世界顶尖", "诺贝尔奖得主多"],
    courses: ["工程", "商科", "医学", "物理"],
    website: "https://www.manchester.ac.uk/",
    intro:
      "曼彻斯特大学（University of Manchester），简称UoM，是一所位于英国曼彻斯特的世界顶尖公立研究型大学。",
  },
  {
    name: "University of Birmingham",
    country: "英国",
    location: "伯明翰",
    ranking: "91",
    image: "/images/birmingham.jpg",
    features: ["红砖大学", "研究实力强", "就业前景好"],
    courses: ["商科", "工程", "医学", "法律"],
    website: "https://www.birmingham.ac.uk/",
    intro:
      "伯明翰大学（University of Birmingham），简称UoB，是一所位于英国伯明翰的著名公立研究型大学。",
  },
  {
    name: "University of Bristol",
    country: "英国",
    location: "布里斯托",
    ranking: "62",
    image: "/images/bristol.jpg",
    features: ["红砖大学", "学术声誉高", "环境优美"],
    courses: ["工程", "法律", "医学", "艺术"],
    website: "https://www.bristol.ac.uk/",
    intro:
      "布里斯托大学（University of Bristol），是一所位于英国布里斯托的世界知名公立研究型大学。",
  },
  {
    name: "University of Nottingham",
    country: "英国",
    location: "诺丁汉",
    ranking: "103",
    image: "/images/nottingham.jpg",
    features: ["研究型大学", "国际化程度高", "校园环境优美"],
    courses: ["商科", "工程", "药学", "教育"],
    website: "https://www.nottingham.ac.uk/",
    intro:
      "诺丁汉大学（University of Nottingham），是一所位于英国诺丁汉的世界级公立研究型大学。",
  },
  {
    name: "University of Sheffield",
    country: "英国",
    location: "谢菲尔德",
    ranking: "95",
    image: "/images/sheffield.jpg",
    features: ["红砖大学", "工程实力强", "学生满意度高"],
    courses: ["工程", "商科", "医学", "建筑"],
    website: "https://www.sheffield.ac.uk/",
    intro:
      "谢菲尔德大学（University of Sheffield），是一所位于英国谢菲尔德的世界知名公立研究型大学。",
  },
  {
    name: "University of Leeds",
    country: "英国",
    location: "利兹",
    ranking: "86",
    image: "/images/leeds.jpg",
    features: ["红砖大学", "研究实力强", "就业前景好"],
    courses: ["商科", "工程", "艺术", "医学"],
    website: "https://www.leeds.ac.uk/",
    intro:
      "利兹大学（University of Leeds），是一所位于英国利兹的世界级公立研究型大学。",
  },
  {
    name: "University of Southampton",
    country: "英国",
    location: "南安普顿",
    ranking: "124",
    image: "/images/southampton.jpg",
    features: ["罗素集团成员", "工程实力强", "研究型大学"],
    courses: ["工程", "商科", "海洋科学", "计算机"],
    website: "https://www.southampton.ac.uk/",
    intro:
      "南安普顿大学（University of Southampton），是一所位于英国南安普顿的著名公立研究型大学。",
  },
  {
    name: "University of Glasgow",
    country: "英国",
    location: "格拉斯哥",
    ranking: "73",
    image: "/images/glasgow.jpg",
    features: ["古老名校", "研究实力强", "国际化程度高"],
    courses: ["医学", "工程", "商科", "艺术"],
    website: "https://www.gla.ac.uk/",
    intro:
      "格拉斯哥大学（University of Glasgow），是一所位于英国苏格兰格拉斯哥的世界级公立研究型大学。",
  },
  {
    name: "University of Exeter",
    country: "英国",
    location: "埃克塞特",
    ranking: "149",
    image: "/images/exeter.jpg",
    features: ["罗素集团成员", "教学质量高", "环境优美"],
    courses: ["商科", "法律", "人文", "科学"],
    website: "https://www.exeter.ac.uk/",
    intro:
      "埃克塞特大学（University of Exeter），是一所位于英国埃克塞特的著名公立研究型大学。",
  },
  {
    name: "Queen Mary University of London",
    country: "英国",
    location: "伦敦",
    ranking: "117",
    image: "/images/qmul.jpg",
    features: ["罗素集团成员", "研究实力强", "地理位置优越"],
    courses: ["医学", "法律", "商科", "工程"],
    website: "https://www.qmul.ac.uk/",
    intro:
      "伦敦大学玛丽女王学院（Queen Mary University of London），简称QMUL，是一所位于英国伦敦的世界级公立研究型大学。",
  },
  {
    name: "Cardiff University",
    country: "英国",
    location: "卡迪夫",
    ranking: "166",
    image: "/images/cardiff.jpg",
    features: ["罗素集团成员", "研究实力强", "威尔士最佳大学"],
    courses: ["商科", "工程", "医学", "新闻传媒"],
    website: "https://www.cardiff.ac.uk/",
    intro:
      "卡迪夫大学（Cardiff University），是一所位于英国威尔士卡迪夫的著名公立研究型大学。",
  }
];

export const universityGroups = {
  uk: {
    name: "英国",
    count: 48,
    universities: ukUniversities,
  },
  us: {
    name: "美国",
    count: 35,
    universities: [],
  },
  au: {
    name: "澳大利亚",
    count: 28,
    universities: [],
  },
  ca: {
    name: "加拿大",
    count: 22,
    universities: [],
  },
  nz: {
    name: "新西兰",
    count: 15,
    universities: [],
  },
  ie: {
    name: "爱尔兰",
    count: 12,
    universities: [],
  },
};

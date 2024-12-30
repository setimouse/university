export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content?: string;
  category: string;
  categoryName: string;
  date: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    id: "policy-1",
    title: "英国留学新政：PSW签证延长至3年",
    summary:
      "英国政府宣布将PSW工作签证有效期从2年延长至3年，为留学生提供更多就业机会。",
    category: "policy",
    categoryName: "政策解读",
    date: "2024-03-15",
    image:
      "https://f.cdn-static.cn/upload/eb264693ae8188badae09b854a796304?imageView2/2/w/640/q/89/format/webp",
    content: "详细的政策解读内容...",
  },
  {
    id: "university-1",
    title: "2024年QS世界大学排名发布",
    summary:
      "最新QS世界大学排名显示，英国和澳洲多所高校排名上升，教育质量持续提升。",
    category: "university",
    categoryName: "院校资讯",
    date: "2024-03-10",
    image:
      "https://f.cdn-static.cn/upload/099dc297ff6d2a44659513c81cd48f1e?imageView2/2/w/640/q/89/format/webp",
  },
  {
    id: "industry-1",
    title: "后疫情时代留学趋势分析",
    summary:
      "疫情后留学市场快速恢复，学生选择更趋多元化，关注度最高的专业领域发生变化。",
    category: "industry",
    categoryName: "行业动态",
    date: "2024-03-05",
    image:
      "https://f.cdn-static.cn/upload/9f6c75c1620722d6c455d20ae3ed730d?imageView2/2/w/640/q/89/format/webp",
  },
  {
    id: "policy-2",
    title: "爱尔兰留学新政策：国际学生工作权限扩大",
    summary:
      "爱尔兰政府发布新政策，扩大国际学生在学期间的工作权限，为学生提供更多实践机会。",
    category: "policy",
    categoryName: "政策解读",
    date: "2024-03-01",
    image: "/images/dublin.jpg",
  },
  {
    id: "university-2",
    title: "澳洲八大名校2024年申请变化",
    summary:
      "澳洲八大名校更新入学要求，部分专业降低语言成绩要求，增加面试环节。",
    category: "university",
    categoryName: "院校资讯",
    date: "2024-02-28",
    image: "/images/melbourne.jpg",
  },
  {
    id: "industry-2",
    title: "2024年最受欢迎留学专业分析",
    summary: "大数据、人工智能、可持续发展等专业成为留学生新宠，就业前景广阔。",
    category: "industry",
    categoryName: "行业动态",
    date: "2024-02-25",
    image: "/images/classroom.jpg",
  },
  {
    id: "policy-3",
    title: "英国简化学生签证申请流程",
    summary:
      "英国内政部宣布简化学生签证申请流程，缩短处理时间，提供更便捷的服务。",
    category: "policy",
    categoryName: "政策解读",
    date: "2024-02-20",
    image: "/images/visa.jpg",
  },
  {
    id: "university-3",
    title: "爱尔兰高校奖学金计划公布",
    summary:
      "多所爱尔兰高校发布2024年国际学生奖学金计划，覆盖范围和金额都有所增加。",
    category: "university",
    categoryName: "院校资讯",
    date: "2024-02-15",
    image: "/images/scholarship.jpg",
  },
  {
    id: "industry-3",
    title: "留学中介行业发展报告",
    summary:
      "2024年留学中介行业报告显示，服务质量和专业化程度显著提升，市场规范化程度增强。",
    category: "industry",
    categoryName: "行业动态",
    date: "2024-02-10",
    image: "/images/consulting.jpg",
  },
];

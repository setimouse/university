export interface Case {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  university: string;
  major: string;
  result: string;
  year: string;
  image: string;
  content?: string;
}

export const cases: Case[] = [
  {
    id: "uk-case-1",
    title: "英国G5名校商科申请案例",
    description: "本科背景一般，通过合理规划和背景提升，最终成功获得LSE录取",
    category: "uk",
    categoryName: "英国案例",
    university: "伦敦政治经济学院",
    major: "MSc Finance",
    result: "成功录取",
    year: "2023",
    image:
      "https://f.cdn-static.cn/61712_16538759106022.jpg?imageView2/2/w/715/q/89/format/webp",
    content: "详细的申请经历和经验分享...",
  },
  {
    id: "uk-case-2",
    title: "英国商科跨专业申请案例",
    description: "理工科背景转商科，通过合理规划最终成功获得华威商学院录取",
    category: "uk",
    categoryName: "英国案例",
    university: "华威大学",
    major: "MSc Business Analytics",
    result: "成功录取",
    year: "2023",
    image:
      "https://f.cdn-static.cn/61712_165387600461911.png?imageView2/2/w/715/q/89/format/webp",
  },
  {
    id: "australia-case-1",
    title: "澳洲八大商科申请案例",
    description: "本科成绩优秀，通过精准定位，成功获得墨尔本大学商学院录取",
    category: "australia",
    categoryName: "澳洲案例",
    university: "墨尔本大学",
    major: "Master of Management",
    result: "成功录取",
    year: "2023",
    image:
      "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
  },
  {
    id: "australia-case-2",
    title: "澳洲工程专业申请案例",
    description: "通过合理规划和背景提升，成功获得悉尼大学工程学院录取",
    category: "australia",
    categoryName: "澳洲案例",
    university: "悉尼大学",
    major: "Master of Engineering",
    result: "成功录取",
    year: "2023",
    image:
      "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
  },
  {
    id: "ireland-case-1",
    title: "爱尔兰商科申请案例",
    description: "通过合理规划，成功获得都柏林大学圣三一学院商学院录取",
    category: "ireland",
    categoryName: "爱尔兰案例",
    university: "都柏林大学圣三一学院",
    major: "MSc in Finance",
    result: "成功录取",
    year: "2023",
    image:
      "https://f.cdn-static.cn/61712_16538759106022.jpg?imageView2/2/w/715/q/89/format/webp",
  },
  {
    id: "ireland-case-2",
    title: "爱尔兰计算机专业申请案例",
    description: "跨专业申请计算机，通过合理规划最终成功获得都柏林城市大学录取",
    category: "ireland",
    categoryName: "爱尔兰案例",
    university: "都柏林城市大学",
    major: "MSc in Computing",
    result: "成功录取",
    year: "2023",
    image:
      "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
  },
];

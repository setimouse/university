export interface Course {
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export const courses: Course[] = [
  {
    name: "IELTS备考课程",
    category: "语言课程",
    description: "针对性的IELTS考试备考，提供全面的听说读写训练",
    image: "/images/ielts.jpg",
    features: ["一对一辅导", "模拟考试", "技巧讲解", "真题练习"],
  },
  {
    name: "商科专业课",
    category: "专业课程",
    description: "涵盖会计、金融、管理等商科核心课程的辅导",
    image: "/images/business.jpg",
    features: ["案例分析", "作业辅导", "考试复习", "论文指导"],
  },
  {
    name: "工程数学",
    category: "专业课程",
    description: "工程专业必修的数学课程辅导，包括微积分、线性代数等",
    image: "/images/math.jpg",
    features: ["概念讲解", "习题训练", "考试辅导", "在线答疑"],
  },
  // ... 可以添加更多课程
];

interface Service {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "留学申请服务",
    subtitle: "专业的申请指导，提高录取成功率",
    image: "/images/application.jpg",
    features: [
      "个性化选校定位，匹配最适合的院校和专业",
      "专业文书指导，突出个人特色和优势",
      "申请材料准备和递交",
      "面试辅导和模拟训练",
      "offer评估和选择建议",
    ],
  },
  {
    title: "签证服务",
    subtitle: "专业的签证指导，确保顺利获签",
    image: "/images/visa-hero.jpg",
    features: [
      "签证材料准备指导",
      "签证申请表格填写",
      "资金证明准备建议",
      "面签辅导",
      "紧急签证加急服务",
    ],
  },
  {
    title: "背景提升服务",
    subtitle: "全方位提升申请竞争力",
    image: "/images/background-service.jpg",
    features: [
      "语言考试培训（雅思/托福）",
      "实习机会推荐",
      "科研项目对接",
      "课外活动规划",
      "个人简历优化",
    ],
  },
  {
    title: "留学生活服务",
    subtitle: "帮助学生适应海外生活",
    image: "/images/life-service.jpg",
    features: [
      "住宿安排建议",
      "接机服务",
      "银行开户协助",
      "电话卡办理",
      "生活指南提供",
    ],
  },
];

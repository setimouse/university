interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

interface WhyReason {
  title: string;
  description: string;
  image: string;
}

interface About {
  introduction: string;
  advantages: Advantage[];
  team: TeamMember[];
  whyUs: WhyReason[];
}

export const about: About = {
  introduction: `我们是一家专业的留学咨询服务机构，拥有超过10年的留学咨询经验。我们的团队由经验丰富的留学顾问组成，他们都具有海外留学和工作背景，深入了解各国教育体系和申请流程。

我们始终秉持"以学生为中心"的服务理念，为每位学生提供个性化的留学规划和申请方案。通过专业的评估和指导，帮助学生选择最适合的院校和专业，提高申请成功率。

多年来，我们已经帮助数千名学生成功申请到世界知名院校，并建立了广泛的校企合作网络。我们不仅关注学生的学术发展，还注重培养学生的综合能力，为他们的未来发展打下坚实基础。`,

  advantages: [
    {
      icon: "🎓",
      title: "专业团队",
      description:
        "拥有海外留学背景的资深顾问团队，提供专业的留学咨询和规划服务",
    },
    {
      icon: "🌟",
      title: "成功案例",
      description: "帮助数千名学生成功申请到世界知名院校，拥有丰富的成功经验",
    },
    {
      icon: "🤝",
      title: "个性化服务",
      description: "根据每位学生的背景和需求，制定个性化的留学规划和申请方案",
    },
    {
      icon: "🏫",
      title: "院校资源",
      description: "与众多海外知名院校建立了良好的合作关系，了解最新的招生政策",
    },
    {
      icon: "📈",
      title: "背景提升",
      description: "提供全方位的背景提升服务，帮助学生提高综合竞争力",
    },
    {
      icon: "💼",
      title: "职业规划",
      description: "注重学生的长期发展，提供职业规划和发展建议",
    },
  ],

  team: [
    {
      name: "Sarah Chen",
      title: "首席留学顾问",
      description:
        "拥有10年以上的留学咨询经验，曾就读于英国剑桥大学，对英国教育体系有深入了解。帮助数百名学生成功申请到G5名校。",
      avatar: "/images/consultant.jpg",
    },
    {
      name: "Michael Wang",
      title: "资深留学顾问",
      description:
        "澳大利亚八大名校毕业，专注澳洲留学申请，对澳洲教育体系和移民政策有独到见解。",
      avatar: "/images/consultant2.jpg",
    },
    {
      name: "Emma Liu",
      title: "留学文书专家",
      description:
        "美国常春藤名校毕业，拥有丰富的文书指导经验，擅长挖掘学生亮点，提升申请竞争力。",
      avatar: "/images/consultant.jpg",
    },
    {
      name: "David Zhang",
      title: "职业发展顾问",
      description:
        "曾在世界500强企业担任人力资源总监，现专注于为留学生提供职业规划和发展建议。",
      avatar: "/images/consultant.jpg",
    },
  ],

  whyUs: [
    {
      title: "专业的文书指导",
      description:
        "我们的文书团队由海外名校毕业的专业顾问组成，他们深谙各大院校的录取要求，能够帮助学生撰写出最具竞争力的申请文书。",
      image: "/images/gabrielle-henderson.jpg",
    },
    {
      title: "一对一咨询服务",
      description:
        "每位学生都会配备专属的留学顾问，从选校到申请再到签证，全程提供一对一的专业指导，确保申请过程顺利进行。",
      image: "/images/daniel-hopper.jpg",
    },
    {
      title: "丰富的申请经验",
      description:
        "十年以上的留学咨询经验，我们已经帮助数千名学生成功申请到理想的学校，积累了丰富的实战经验。",
      image: "/images/gabrielle-henderson.jpg",
    },
    {
      title: "广泛的院校资源",
      description:
        "与英国、澳大利亚、爱尔兰等多个国家的知名院校建立了良好的合作关系，了解第一手的招生信息。",
      image: "/images/gabrielle-henderson.jpg",
    },
  ],
};

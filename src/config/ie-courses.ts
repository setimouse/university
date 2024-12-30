export interface IECourse {
  university: string;
  universityEn: string;
  ranking: string;
  name: string;
  duration: string;
  tuition: string;
  image: string;
  logo: string;
  link: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  courses: IECourse[];
}

export const ieCourseCategories: CourseCategory[] = [
  {
    id: "business",
    name: "商科专业",
    nameEn: "Business",
    description:
      "爱尔兰的商科教育以其实践性和国际化视野著称，众多世界500强企业的欧洲总部都设在都柏林，为学生提供了丰富的实习和就业机会。",
    courses: [
      {
        university: "都柏林大学圣三一学院",
        universityEn: "Trinity College Dublin",
        ranking: "98",
        name: "MSc in Finance",
        duration: "1 year full-time",
        tuition: "24,500",
        image:
          "https://f.cdn-static.cn/61712_16538759106022.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16535579741012.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.tcd.ie/business/programmes/msc-finance/",
      },
      {
        university: "都柏林大学学院",
        universityEn: "University College Dublin",
        ranking: "173",
        name: "MSc in International Management",
        duration: "1 year full-time",
        tuition: "23,800",
        image:
          "https://f.cdn-static.cn/61712_165387600461911.png?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16535580029243.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.ucd.ie/quinn/programmes/masters/mscininternationalmanagement/",
      },
    ],
  },
  {
    id: "technology",
    name: "科技专业",
    nameEn: "Technology",
    description:
      "爱尔兰是欧洲重要的科技中心，谷歌、微软、苹果等科技巨头都在此设有欧洲总部，为IT专业的学生提供了优质的学习和就业环境。",
    courses: [
      {
        university: "都柏林城市大学",
        universityEn: "Dublin City University",
        ranking: "490",
        name: "MSc in Computing",
        duration: "1 year full-time",
        tuition: "18,750",
        image:
          "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536239157852.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.dcu.ie/courses/postgraduate/school-computing/msc-computing",
      },
      {
        university: "利莫瑞克大学",
        universityEn: "University of Limerick",
        ranking: "511",
        name: "MSc in Software Engineering",
        duration: "1 year full-time",
        tuition: "17,500",
        image:
          "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.ul.ie/gps/course/software-engineering-msc",
      },
    ],
  },
  {
    id: "humanities",
    name: "人文艺术专业",
    nameEn: "Humanities & Arts",
    description:
      "爱尔兰拥有深厚的文学和艺术传统，其人文教育注重培养学生的创造力和批判性思维，为学生未来在文化创意产业发展打下坚实基础。",
    courses: [
      {
        university: "戈尔韦大学",
        universityEn: "University of Galway",
        ranking: "270",
        name: "MA in Digital Media",
        duration: "1 year full-time",
        tuition: "16,500",
        image:
          "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536239157852.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.universityofgalway.ie/courses/taught-postgraduate-courses/digital-media.html",
      },
      {
        university: "梅努斯大学",
        universityEn: "Maynooth University",
        ranking: "801",
        name: "MA in Creative Writing",
        duration: "1 year full-time",
        tuition: "15,500",
        image:
          "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.maynoothuniversity.ie/english/our-courses/ma-creative-writing",
      },
    ],
  },
];

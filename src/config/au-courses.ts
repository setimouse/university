export interface AUCourse {
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
  courses: AUCourse[];
}

export const auCourseCategories: CourseCategory[] = [
  {
    id: "business",
    name: "商科专业",
    nameEn: "Business",
    description:
      "澳大利亚的商科教育在全球享有盛誉，其课程设置注重理论与实践的结合，培养学生的商业思维和管理能力。",
    courses: [
      {
        university: "墨尔本大学",
        universityEn: "The University of Melbourne",
        ranking: "14",
        name: "Master of Management",
        duration: "Full time 1.5-2 years",
        tuition: "47,584",
        image: "https://f.cdn-static.cn/61712_16538759106022.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16535579741012.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://study.unimelb.edu.au/find/courses/graduate/master-of-management/"
      },
      {
        university: "悉尼大学",
        universityEn: "The University of Sydney",
        ranking: "19",
        name: "Master of Commerce",
        duration: "1.5-2 years full-time",
        tuition: "49,500",
        image: "https://f.cdn-static.cn/61712_165387600461911.png?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16535580029243.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.sydney.edu.au/courses/courses/pc/master-of-commerce.html"
      },
      {
        university: "澳大利亚国立大学",
        universityEn: "Australian National University",
        ranking: "30",
        name: "Master of Business Administration",
        duration: "1.5-2 years full-time",
        tuition: "45,600",
        image: "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536239157852.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://programsandcourses.anu.edu.au/program/MMGMT"
      },
      {
        university: "新南威尔士大学",
        universityEn: "University of New South Wales",
        ranking: "45",
        name: "Master of Professional Accounting",
        duration: "2 years full-time",
        tuition: "48,160",
        image: "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.unsw.edu.au/study/postgraduate/master-of-professional-accounting"
      },
      {
        university: "昆士兰大学",
        universityEn: "University of Queensland",
        ranking: "51",
        name: "Master of Business Administration",
        duration: "1.5-2 years full-time",
        tuition: "45,600",
        image: "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.uq.edu.au/study/postgraduate/courses/master-of-business-administration"
      },
      {
        university: "莫纳什大学",
        universityEn: "Monash University",
        ranking: "58",
        name: "Master of Business Administration",
        duration: "1.5-2 years full-time",
        tuition: "45,600",
        image: "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.monash.edu.au/postgraduate/courses/master-of-business-administration"
      },
    ],
  },
];

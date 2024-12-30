export interface UKCourse {
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
  courses: UKCourse[];
}

export const ukCourseCategories: CourseCategory[] = [
  {
    id: "accounting-finance",
    name: "会计与金融专业",
    nameEn: "Accounting & Finance",
    description:
      "商科专业一直以来都是众多赴英留学生的首选，可谓是经久不衰的热门专业。而会计与金融专业更是因为就业率高和薪资起薪高成为炙手可热的传统热门专业。",
    courses: [
      {
        university: "伦敦政治经济学院",
        universityEn: "London School of Economics and Political Science",
        ranking: "49",
        name: "MSc Accounting and Finance",
        duration: "Full time 12 Months",
        tuition: "32,208",
        image:
          "https://f.cdn-static.cn/61712_16538759106022.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16535579741012.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.lse.ac.uk/study-at-lse/Graduate/degree-programmes-2024/MSc-Accounting-and-Finance",
      },
      {
        university: "华威大学",
        universityEn: "University of Warwick",
        ranking: "61",
        name: "Accounting and Finance (MSc)",
        duration: "Full time 12 Months",
        tuition: "36,390",
        image:
          "https://f.cdn-static.cn/61712_165387600461911.png?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16535580029243.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://warwick.ac.uk/study/postgraduate/courses/accountingfinance",
      },
      {
        university: "兰卡斯特大学",
        universityEn: "Lancaster University",
        ranking: "122",
        name: "Accounting and Financial Management MSc",
        duration: "Full time 12 Months",
        tuition: "23,350",
        image:
          "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536239157852.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.lancaster.ac.uk/study/postgraduate/postgraduate-courses/accounting-and-financial-management-msc/",
      },
      // ... 其他会计金融课程
    ],
  },
  {
    id: "chemistry-materials",
    name: "化学和材料工程专业",
    nameEn: "Chemistry & Materials Engineering",
    description:
      "英国政府发现提高工程和高技术方面的产业，对国家的发展占有很大的优势。化学与材料工程方面的专业对英国来说也是一个相对冷门、极其好就业的专业。并且，英国许多大学都和世界500强里的企业共同拥有一个实验基地。",
    courses: [
      // ... 化学和材料工程课程
      {
        university: "剑桥大学",
        universityEn: "University of Cambridge",
        ranking: "3",
        name: "MPhil in Advanced Chemical Engineering",
        duration: "Full time course occupying 11 months",
        tuition: "29,715",
        image:
          "https://f.cdn-static.cn/61712_16538759340167.png?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303999314.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.postgraduate.study.cam.ac.uk/courses/directory/egcepdace",
      },
      {
        university: "帝国理工学院",
        universityEn: "Imperial College London",
        ranking: "7",
        name: "MSc Biomedical Engineering",
        duration: "One year",
        tuition: "35,700",
        image:
          "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.imperial.ac.uk/study/pg/bioengineering/biomedical-engineering-msc/",
      },
    ],
  },
  {
    id: "art-humanities",
    name: "艺术与人文专业",
    nameEn: "Art & Humanities",
    description: "英国的艺术与人文学科在世界范围内享有盛誉,尤其是在历史悠久的顶尖院校中。艺术与人文专业涵盖了艺术、艺术史、博物馆研究等领域,这些课程能够培养学生的创造力和批判性思维能力。",
    courses: [
      {
        university: "牛津大学",
        universityEn: "University of Oxford", 
        ranking: "5",
        name: "MSc in History of Art and Visual Culture",
        duration: "Full time 9 months",
        tuition: "29,500",
        image: "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536239157852.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.ox.ac.uk/admissions/graduate/courses/mst-history-art-and-visual-culture"
      },
      {
        university: "曼彻斯特大学",
        universityEn: "University of Manchester",
        ranking: "27",
        name: "MA Arts Management, Policy and Practice",
        duration: "1 year full time",
        tuition: "25,500",
        image: "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.manchester.ac.uk/study/masters/courses/list/01297/ma-arts-management-policy-and-practice/"
      }
    ]
  },
  {
    id: "media-communication",
    name: "媒体与传播专业",
    nameEn: "Media & Communication",
    description: "英国的媒体与传播专业课程注重理论与实践的结合,培养学生在数字媒体时代所需的专业技能。这些课程涵盖新闻、广播电视、数字媒体等领域,为学生未来在全球媒体行业发展打下坚实基础。",
    courses: [
      {
        university: "卡迪夫大学",
        universityEn: "Cardiff University",
        ranking: "151",
        name: "Digital Media and Society (MA)",
        duration: "1 year full-time",
        tuition: "19,700",
        image: "https://f.cdn-static.cn/61712_16538759334495.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536239157852.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.cardiff.ac.uk/study/postgraduate/taught/courses/course/digital-media-and-society-ma"
      },
      {
        university: "利兹大学",
        universityEn: "University of Leeds",
        ranking: "92",
        name: "New Media MA",
        duration: "12 months full-time",
        tuition: "23,000",
        image: "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://courses.leeds.ac.uk/i533/new-media-ma"
      },
      {
        university: "威斯敏斯特大学",
        universityEn: "University of Westminster",
        ranking: "651",
        name: "GLOBAL MEDIA MA",
        duration: "1 year",
        tuition: "17,500",
        image: "https://f.cdn-static.cn/61712_16538759333044.jpg?imageView2/2/w/715/q/89/format/webp",
        logo: "https://f.cdn-static.cn/61712_16536303991203.png?imageView2/2/w/357/q/89/format/webp",
        link: "https://www.westminster.ac.uk/media-and-communication-courses/2023-24/september/full-time/global-media-ma"
      }
    ]
  }

];

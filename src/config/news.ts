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
    content: `<p>近日，英国政府正式宣布一项重大留学政策调整 - PSW工作签证（Graduate Route）有效期将从现行的2年延长至3年。这一政策变化将为在英国留学的国际学生带来更多机遇和发展空间。本文将详细解读这项新政策的具体内容、影响以及申请要求。</p>

<h3>政策背景</h3>
<p>PSW签证（毕业生工作签证）于2021年7月1日正式推出，允许在英国完成学业的国际学生在毕业后留英工作。这项签证的推出极大地提升了英国高等教育的国际竞争力，吸引了大量优秀的国际学生。此次延长有效期的决定，是英国政府为进一步增强教育竞争力、留住国际人才所采取的重要举措。</p>

<h3>新政策主要变化</h3>
<p>1. 有效期延长：PSW签证有效期从2年延长至3年，为国际毕业生提供更充足的时间积累工作经验。</p>
<p>2. 申请资格维持不变：申请人需要完成英国高等教育学历课程（本科及以上），且必须通过授权的高等教育机构完成学习。</p>
<p>3. 工作权限保持灵活：在签证有效期内，持有人可以从事几乎任何类型的工作，包括自由职业和创业。</p>

<h3>政策影响分析</h3>
<p>这项新政策的实施将带来多方面的积极影响。对于留学生而言，更长的工作许可期意味着更多的职业发展机会，有助于积累更丰富的工作经验。对于英国企业来说，可以更好地利用国际人才资源，增强企业竞争力。对于英国高等教育机构而言，延长PSW签证将提升其对国际学生的吸引力。</p>

<h3>申请要求及流程</h3>
<p>申请PSW签证需要满足以下基本条件：</p>
<p>1. 学历要求：成功完成英国高等教育课程（本科、硕士或博士学位）</p>
<p>2. 学习时长：本科和硕士课程需要至少12个月的学习时间</p>
<p>3. 签证状态：申请时必须持有有效的学生签证</p>
<p>4. 赞助要求：无需雇主担保</p>

<h3>注意事项</h3>
<p>虽然新政策为国际学生创造了更多机会，但申请人仍需注意以下几点：</p>
<p>1. 申请时间：必须在完成学业后规定时间内提交申请</p>
<p>2. 费用考虑：需要支付签证申请费和医疗附加费</p>
<p>3. 后续转换：PSW签证结束后，如希望继续在英工作，需要转换至其他类型的工作签证</p>

<h3>未来展望</h3>
<p>这项政策的实施表明英国政府致力于吸引和保留国际人才的决心。预计未来可能会有更多支持性政策出台，进一步优化国际学生的学习和就业环境。建议有意向英国留学的学生密切关注相关政策动态，提前做好规划。</p>`,
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

// ============================================================
//  数据层：与陈广胜 (Eason Chen / qqeasonchen / chenguangsheng)
//  相关的公开文章、演讲、采访与开源项目
//  全部为可搜索、可聚合的静态数据，部署到 GitHub Pages 无需后端
// ============================================================

const PROFILE = {
  nameZh: "陈广胜",
  nameEn: "Eason Chen",
  handle: "qqeasonchen",
  email: "chenguangsheng@apache.org",
  org: "微众银行 (WeBank)",
  city: "深圳 · 中国",
  aliases: ["陈广胜", "Eason Chen", "qqeasonchen", "chenguangsheng", "Guangsheng Chen"],
  titles: [
    "Apache 软件基金会 Member",
    "Apache EventMesh PMC Chair / VP",
    "ALC Shenzhen 联合发起人 & Lead",
    "微众银行 资深技术专家",
    "GSoC Mentor · 2023 开源先锋人物"
  ],
  bio: "2014 年加入微众银行中间件平台团队，主导构建了支撑亿级客户的分布式金融级消息总线 DeFiBus，并由此演化出云原生事件驱动基础设施 Apache EventMesh，带领项目于 2023 年 3 月从 Apache 孵化器毕业成为顶级项目（TLP）。长期深耕消息、云原生微服务、Service Mesh 与 Serverless 领域，并积极在 Apache 社区传播“开源之道”。",
  focus: ["消息中间件", "云原生", "EventMesh", "Service Mesh", "Serverless", "Kubernetes", "微服务架构", "开源治理"]
};

// 身份 / 成就徽章
const BADGES = [
  { icon: "◆", label: "ASF Member", sub: "Apache 软件基金会会员" },
  { icon: "✦", label: "EventMesh PMC Chair", sub: "Apache 顶级项目主席" },
  { icon: "❖", label: "ALC Shenzhen Lead", sub: "Apache 本地社区深圳负责人" },
  { icon: "✧", label: "GSoC Mentor", sub: "Google 编程之夏导师" },
  { icon: "★", label: "2023 开源先锋人物", sub: "Oscar 尖峰开源人物" },
  { icon: "⚙", label: "CKA", sub: "Certified Kubernetes Administrator" },
  { icon: "⟁", label: "RocketMQ Committer", sub: "Apache RocketMQ 提交者" },
  { icon: "∞", label: "OpenMessaging TSC", sub: "Linux 开源消息标准技术委员会" }
];

// 开源项目
const PROJECTS = [
  {
    name: "Apache EventMesh",
    role: "Founder · PMC Chair · VP",
    desc: "事件驱动分布式应用运行时（Eventing as Infrastructure）。新一代 Serverless 事件中间件，解耦应用与后端中间件层，支持多云、混合云与复杂分布式拓扑。2023 年 3 月毕业为 Apache 顶级项目（TLP）。",
    tags: ["EventMesh", "Serverless", "EDA", "云原生"],
    url: "https://github.com/apache/eventmesh",
    stars: "—"
  },
  {
    name: "DeFiBus",
    role: "原作者 · 负责人",
    desc: "微众银行开源的分布式金融级消息总线，支撑亿级客户金融业务与同城多活架构。基于 RocketMQ 深度增强，提供同步/异步/多播、灰度、熔断、多中心多活等金融级特性。",
    tags: ["DeFiBus", "消息总线", "RocketMQ", "金融级"],
    url: "https://github.com/WeBankFinTech/DeFiBus",
    stars: "—"
  },
  {
    name: "Apache RocketMQ",
    role: "Committer / Contributor",
    desc: "分布式消息中间件。作为社区资深 Contributor 参与，并在微众银行消息总线架构演进中基于 RocketMQ 做了大量生产级增强。",
    tags: ["RocketMQ", "消息中间件", "Apache"],
    url: "https://github.com/apache/rocketmq",
    stars: "—"
  },
  {
    name: "Linux OpenMessaging",
    role: "TSC Member",
    desc: "面向消息与流处理的厂商中立开放标准。参与制定跨框架的消息/事件 API 标准，推动开源消息生态的互操作与协作。",
    tags: ["OpenMessaging", "标准", "开源"],
    url: "https://github.com/openmessaging",
    stars: "—"
  }
];

// 演讲 / 活动时间线
const TIMELINE = [
  { year: "2018", title: "微众银行金融级消息服务平台建设实践", sub: "腾讯云开发者社区撰文 · RocketMQ 资深 Contributor", tag: "文章" },
  { year: "2018", title: "Apache RocketMQ Meetup 深圳", sub: "微众银行消息总线的架构演进", tag: "演讲" },
  { year: "2021.02", title: "EventMesh 进入 Apache 孵化器", sub: "国内金融行业首个 ASF 孵化项目", tag: "里程碑" },
  { year: "2021.08", title: "ApacheCon Asia 2021", sub: "EventMesh: 事件驱动分布式应用运行时", tag: "演讲" },
  { year: "2021.11", title: "ArchSummit 全球架构师峰会（深圳）", sub: "分布式应用提效框架 Apache EventMesh", tag: "演讲" },
  { year: "2022", title: "ALC Shenzhen · 深圳大数据开源汇", sub: "作为 ALC Shenzhen Lead 开场演讲", tag: "社区" },
  { year: "2023.02", title: "EventMesh 毕业投票全票通过", sub: "以发起人身份公布 TLP 毕业投票结果", tag: "里程碑" },
  { year: "2023.03", title: "EventMesh 毕业为 Apache 顶级项目 (TLP)", sub: "以 PMC Chair 身份发布毕业寄语", tag: "里程碑" },
  { year: "2023", title: "当选 Apache 软件基金会 Member", sub: "第 55 位华人 ASF Member", tag: "里程碑" },
  { year: "2023.08", title: "CommunityOverCode Asia 2023 Keynote", sub: "主论坛演讲《社群长青》", tag: "演讲" },
  { year: "2024.06", title: "ArchSummit 深圳 2024", sub: "EventMesh + Function：Serverless 新火花", tag: "演讲" }
];

// 可搜索的文章 / 内容知识库（核心功能）
const ARTICLES = [
  {
    title: "深度解读分布式应用提效框架 Apache EventMesh",
    source: "ArchSummit / 阿里云 / InfoQ / 搜狐",
    url: "https://www.infoq.cn/article/wqps3tmjtznq86addtp3",
    date: "2021-11",
    type: "演讲整理",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "云原生", "演讲"],
    excerpt: "陈广胜在 ArchSummit 全球架构师峰会（深圳站）分享 EventMesh 的特征、核心架构及在微众银行的探索与实践。"
  },
  {
    title: "微众开源大事件：进入 ASF 孵化的新“网格”",
    source: "百度云 / 瑞宝安图",
    url: "https://cloud.baidu.com/article/293457",
    date: "2021",
    type: "专访",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "开源", "采访"],
    excerpt: "陈广胜专访：EventMesh 的孵化史，以及云原生技术在金融行业的发展趋势与未来版图。"
  },
  {
    title: "微众银行和一代人的“开源武林”",
    source: "开源中国 / CSDN 开源社",
    url: "https://blog.csdn.net/kaiyuanshe/article/details/131733603",
    date: "2023",
    type: "文章",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "开源", "文章"],
    excerpt: "讲述陈广胜带领 EventMesh 冲关 Apache 孵化器的“血泪史”，以及微众银行一代人的开源江湖。"
  },
  {
    title: "EventMesh Function：面向事件流处理的 Serverless 新火花",
    source: "modb / InfoQ 充电计划",
    url: "http://www.modb.pro/doc/132404",
    date: "2023",
    type: "演讲",
    tags: ["陈广胜", "微众银行", "EventMesh", "Serverless", "演讲"],
    excerpt: "分享 EventMesh Function 架构介绍与应用场景，探索基于 EventMesh 实现 Serverless 的新玩法。"
  },
  {
    title: "DeFiBus：基于开源消息中间件打造的分布式金融级消息总线",
    source: "SegmentFault 思否",
    url: "https://segmentfault.com/a/1190000023013986",
    date: "2020",
    type: "项目推介",
    tags: ["陈广胜", "微众银行", "DeFiBus", "RocketMQ", "开源", "消息总线"],
    excerpt: "微众银行开源的分布式金融级消息总线 DeFiBus 项目推介，支撑 7×24 金融级稳定服务与多活容灾。"
  },
  {
    title: "ApacheCon Asia 2021 — EventMesh：事件驱动分布式应用运行时",
    source: "ApacheCon / CSDN",
    url: "https://apachecon.com/acasia2021/zh/sessions/1154.html",
    date: "2021-08",
    type: "演讲",
    tags: ["Eason Chen", "陈广胜", "EventMesh", "Apache", "ApacheCon", "演讲"],
    excerpt: "Eason Chen 在 ApacheCon Asia 2021 分享如何以事件驱动架构（EDA）解决现代分布式应用架构的复杂性。"
  },
  {
    title: "ArchSummit 2021 演讲：分布式应用提效框架 Apache EventMesh",
    source: "InfoQ ArchSummit",
    url: "https://archsummit.infoq.cn/2021/shenzhen/presentation/3784",
    date: "2021-11",
    type: "演讲",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "演讲"],
    excerpt: "ArchSummit 深圳站专题演讲，分享 EventMesh 的演进过程、核心架构及在微众银行的探索与实践。"
  },
  {
    title: "全票通过！微众开源项目 EventMesh 进入 Apache 孵化器",
    source: "极客时间 / 开源中国 / CSDN",
    url: "https://time.geekbang.org/column/article/353811",
    date: "2021-02",
    type: "新闻",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "开源", "新闻"],
    excerpt: "EventMesh 成为国内金融行业首个进入 ASF 孵化器的开源项目，以全票通过的优秀表现入选。"
  },
  {
    title: "新一代 Serverless 事件中间件 EventMesh 正式毕业为 Apache 顶级项目",
    source: "InfoQ / 开源中国",
    url: "https://www.infoq.cn/article/u3E9xihbwcpWmxpOJZGT",
    date: "2023-03",
    type: "新闻",
    tags: ["陈广胜", "EventMesh", "Apache", "Serverless", "开源", "新闻"],
    excerpt: "EventMesh 从 Apache 孵化器毕业成为顶级项目（TLP）。陈广胜作为 PMC Chair 发表毕业寄语。"
  },
  {
    title: "ASF 官方发布：Apache EventMesh 成为新的顶级项目 (TLP)",
    source: "Yahoo Finance / ASF 官方",
    url: "https://finance.yahoo.com/news/apache-software-foundation-announces-top-130000404.html",
    date: "2023-03-15",
    type: "官方新闻",
    tags: ["Eason Chen", "EventMesh", "Apache", "Serverless", "新闻"],
    excerpt: "Apache 软件基金会官方公告：EventMesh 毕业为顶级项目，Eason Chen 以 Vice President of Apache EventMesh 身份发言。"
  },
  {
    title: "2022-深圳-大数据开源汇（ALC Shenzhen）",
    source: "SlidesTalk",
    url: "https://www.slidestalk.cn/LooK/202246398",
    date: "2022",
    type: "活动",
    tags: ["陈广胜", "ALC", "Shenzhen", "开源", "活动"],
    excerpt: "陈广胜作为 ALC Shenzhen Lead 参与深圳大数据开源汇，并担任开场演讲嘉宾。"
  },
  {
    title: "充电计划｜高效算力基建与性能优化（EventMesh Function 演讲）",
    source: "InfoQ Pro",
    url: "https://applet.10100.com/article/54800296",
    date: "2023",
    type: "演讲",
    tags: ["陈广胜", "EventMesh", "Serverless", "开源", "演讲"],
    excerpt: "陈广胜（2023 开源先锋人物）分享 EventMesh Function 与 Serverless 事件流处理的新玩法。"
  },
  {
    title: "Apache RocketMQ Meetup 深圳｜微众银行消息总线的架构演进",
    source: "活动行 / 砍柴网",
    url: "https://www.huodongxing.com/event/2500788490911",
    date: "2018",
    type: "演讲",
    tags: ["陈广胜", "微众银行", "RocketMQ", "消息总线", "开源", "演讲"],
    excerpt: "陈广胜分享微众银行基于 RocketMQ 的消息总线架构演进、稳定性实践与同城多活改造。"
  },
  {
    title: "【开源应用案例共享】微众银行 — 金融级云原生消息总线及事件网格平台建设",
    source: "开源中国",
    url: "https://www.oschina.net/comment/news/226303",
    date: "2021",
    type: "案例",
    tags: ["陈广胜", "微众银行", "DeFiBus", "EventMesh", "云原生", "消息总线", "开源", "案例"],
    excerpt: "微众银行金融级云原生消息总线（DeFiBus）与事件网格（EventMesh）平台建设案例，同城 RPO=0、RTO≈0。"
  },
  {
    title: "Apache EventMesh 团队成员（官方）",
    source: "eventmesh.apache.org",
    url: "http://eventmesh.apache.org/zh/team",
    date: "—",
    type: "官方",
    tags: ["陈广胜", "qqeasonchen", "chenguangsheng", "EventMesh", "Apache", "官方"],
    excerpt: "官方团队页：Guangsheng Chen @qqeasonchen（chenguangsheng@apache.org）— EventMesh PMC Chair。"
  },
  {
    title: "微众银行的金融级消息服务平台建设实践和思考",
    source: "腾讯云开发者社区 / 云数智圈",
    url: "https://cloud.tencent.com/developer/article/1377971",
    date: "2018-12",
    type: "技术文章",
    tags: ["陈广胜", "微众银行", "RocketMQ", "消息总线", "金融级", "本人撰写"],
    excerpt: "陈广胜亲述微众银行金融级消息服务平台的建设实践：负载均衡收敛服务端、惊群效应治理，以及基于 Apache RocketMQ 的社区分支维护思考。"
  },
  {
    title: "CommunityOverCode Asia 2023 Keynote：社群长青 — 开源社群如何可持续发展",
    source: "开源社 / CSDN",
    url: "https://blog.csdn.net/kaiyuanshe/article/details/132241940",
    date: "2023-08",
    type: "主题演讲",
    tags: ["陈广胜", "EventMesh", "Apache", "CommunityOverCode", "开源治理", "演讲"],
    excerpt: "陈广胜受邀在 CommunityOverCode Asia 2023 大会主论坛（Keynote）分享《社群长青》，结合分布式金融新核心转型与 EventMesh 案例，探讨开源社群的可持续发展。"
  },
  {
    title: "精彩回顾｜CommunityOverCode Asia 2023 圆满落幕",
    source: "InfoQ 写作社区",
    url: "https://xie.infoq.cn/article/e2e6c96782a0a01b51a586d8b",
    date: "2023-08",
    type: "大会回顾",
    tags: ["陈广胜", "EventMesh", "Apache", "CommunityOverCode", "云原生", "活动"],
    excerpt: "大会回顾提到：微众银行技术专家、ASF Member 陈广胜分享数字金融时代云原生技术的应用与创新，及其在分布式金融新核心转型中的重要性。"
  },
  {
    title: "ArchSummit 2024 深圳：EventMesh + Function — 面向事件流处理的 Serverless 新火花",
    source: "ArchSummit 全球架构师峰会（讲义）",
    url: "https://yuquepre.yuque.com/crazygenius/newfire/lwmogmfhex4gpg0z",
    date: "2024-06",
    type: "演讲",
    tags: ["陈广胜", "微众银行", "EventMesh", "Serverless", "演讲"],
    excerpt: "2024 全球架构师峰会（深圳站）陈广胜分享《EventMesh + Function：面向事件流处理的 Serverless 新火花》，讲义收录于大会资料合集。"
  },
  {
    title: "[RESULT][VOTE] Graduate Apache EventMesh as a Top Level Project",
    source: "Apache 官方邮件列表（lists.apache.org）",
    url: "https://lists.apache.org/thread/dq0nx64ov1k7lbbdnml4f8dpw104p5wk",
    date: "2023-02",
    type: "一手记录",
    tags: ["Eason Chen", "陈广胜", "EventMesh", "Apache", "毕业投票", "官方"],
    excerpt: "Eason Chen 作为发起人在 Apache 邮件列表公布 EventMesh 毕业为顶级项目的投票结果：38 票 +1、0 反对（含 12 张 PPMC 绑定票）。"
  },
  {
    title: "Apache EventMesh 董事会会议纪要（Eason Chen 报告）",
    source: "Apache 软件基金会 Whimsy",
    url: "https://whimsy1-ec2-va.apache.org/board/minutes/EventMesh.html",
    date: "2023",
    type: "一手记录",
    tags: ["Eason Chen", "EventMesh", "Apache", "PMC Chair", "官方"],
    excerpt: "作为 PMC Chair，Eason Chen 向 ASF 董事会持续提交 EventMesh 项目季度报告，记录社区成员变化、版本发布与社区健康度。"
  },
  {
    title: "CommunityOverCode Asia 2023 参会记（提及与陈广胜合照）",
    source: "pil0txia 个人博客",
    url: "https://www.pil0txia.com/post/2023-08-28_community-over-code-asia-2023",
    date: "2023-08",
    type: "参会随笔",
    tags: ["陈广胜", "EventMesh", "RocketMQ", "CommunityOverCode", "社区"],
    excerpt: "一位 EventMesh 贡献者的参会随笔，记录与陈广胜及 EventMesh / RocketMQ 成员的合照与交流，侧写社区氛围。"
  },
  {
    title: "Apache EventMesh 官方博客",
    source: "eventmesh.apache.org",
    url: "https://eventmesh.apache.org/blog",
    date: "—",
    type: "官方",
    tags: ["Eason Chen", "EventMesh", "Apache", "Serverless", "官方"],
    excerpt: "EventMesh 官方博客与公告，收录项目毕业为 Apache 顶级项目的官方声明，Eason Chen 以 Vice President of Apache EventMesh 身份发言。"
  },
  {
    title: "深度解读分布式应用提效框架 Apache EventMesh（阿里云开发者社区）",
    source: "阿里云开发者社区",
    url: "https://developer.aliyun.com/article/894349",
    date: "2022-05",
    type: "演讲整理",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "云原生", "演讲"],
    excerpt: "陈广胜 ArchSummit 深圳站演讲整理的多平台转载版本，系统梳理 EventMesh 架构、特性与微众银行落地实践。"
  }
];

// 对外链接
const LINKS = [
  { label: "GitHub", sub: "@qqeasonchen", url: "https://github.com/qqeasonchen" },
  { label: "Apache EventMesh", sub: "PMC Chair", url: "https://eventmesh.apache.org" },
  { label: "DeFiBus", sub: "WeBankFinTech", url: "https://github.com/WeBankFinTech/DeFiBus" },
  { label: "邮箱", sub: "chenguangsheng@apache.org", url: "mailto:chenguangsheng@apache.org" }
];

// 暴露到全局
window.SITE_DATA = { PROFILE, BADGES, PROJECTS, TIMELINE, ARTICLES, LINKS };

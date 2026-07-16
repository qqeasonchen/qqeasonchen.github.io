// ============================================================
//  数据层：与 Eason Chen (qqeasonchen / chenguangsheng) 相关的公开文章、
//  演讲、采访与开源项目（聚合内容中仍保留 陈广胜 / 微众银行 等原文标注与搜索标签）
//  全部为可搜索、可聚合的静态数据，部署到 GitHub Pages 无需后端
// ============================================================

const PROFILE = {
  nameEn: "Eason Chen",
  handle: "qqeasonchen",
  email: "chenguangsheng@apache.org",
  org: "Apache 开源社区",
  city: "深圳 · 中国",
  aliases: ["Eason Chen", "qqeasonchen", "chenguangsheng", "Guangsheng Chen"],
  titles: [
    "Apache 软件基金会 Member",
    "Apache EventMesh PMC Chair / VP",
    "ALC Shenzhen 联合发起人 & Lead",
    "云原生消息 & 事件驱动架构专家",
    "GSoC Mentor · 2023 开源先锋人物"
  ],
  bio: "Apache EventMesh 的创始人，带领项目于 2023 年 3 月从 Apache 孵化器毕业成为顶级项目（TLP）。主导构建了支撑亿级客户的分布式金融级消息总线 DeFiBus，并由此演化出云原生事件驱动基础设施 EventMesh。长期深耕消息、云原生微服务、Service Mesh 与 Serverless 领域，并积极在 Apache 社区传播“开源之道”。",
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
    desc: "面向金融级场景的分布式消息总线，支撑亿级客户金融业务与同城多活架构。基于 RocketMQ 深度增强，提供同步/异步/多播、灰度、熔断、多中心多活等金融级特性。",
    tags: ["DeFiBus", "消息总线", "RocketMQ", "金融级"],
    url: "https://github.com/WeBankFinTech/DeFiBus",
    stars: "—"
  },
  {
    name: "Apache RocketMQ",
    role: "Committer / Contributor",
    desc: "分布式消息中间件。作为社区资深 Contributor 参与，并在大规模分布式消息总线架构演进中基于 RocketMQ 做了大量生产级增强。",
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
    excerpt: "作为 PMC Chair，Eason Chen 向 ASF 董事会持续提交 EventMesh 项目季度报告（2023–2025），记录社区成员变化、版本发布与社区健康度；最新季度披露 EventMesh 正面向 AI Agent 与 Workflow 特性进行设计。"
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
  },
  {
    title: "Apache EventMesh 毕业为 Apache 顶级项目（ASF 官方博客）",
    source: "The Apache Software Foundation Blog",
    url: "https://news.apache.org/?p=4931",
    date: "2023-03-15",
    type: "官方新闻",
    tags: ["Eason Chen", "EventMesh", "Apache", "Serverless", "新闻", "官方"],
    excerpt: "ASF 官方博客正式公告 EventMesh 从孵化器毕业成为顶级项目（TLP）。Eason Chen 以 Apache EventMesh Vice President 身份发言，回顾社区从孵化到毕业的成长与“The Apache Way”。"
  },
  {
    title: "COSCon'20｜利用云原生事件网格构建混合微服务策略",
    source: "HelloWorld / COSCon 中国开源年会",
    url: "https://helloworld.net/p/3871384781",
    date: "2020-10",
    type: "演讲",
    tags: ["陈广胜", "EventMesh", "云原生", "Service Mesh", "微服务", "演讲"],
    excerpt: "在 COSCon'20 云原生与微服务专场，陈广胜分享什么是云原生事件网格，以及为什么企业有了服务网格（Service Mesh）还需要事件网格（Event Mesh）。"
  },
  {
    title: "微众银行和一代人的“开源武林”（人物特写）",
    source: "长亭科技 Chaitin",
    url: "https://rivers.chaitin.cn/blog/cq95ak10lnechd2456l0",
    date: "2023",
    type: "人物特写",
    tags: ["陈广胜", "EventMesh", "开源", "ALC", "ASF Member", "文章"],
    excerpt: "深度人物特写：从 EventMesh 到发起 ALC Shenzhen 城市社区，再到 2023 年当选 ASF Member（华人第 55 位），记录陈广胜“人狠话又多”的开源进阶之路与开源方法论。"
  },
  {
    title: "EventMesh Function：面向事件流处理的 Serverless 新火花（报告）",
    source: "发现报告 fxbaogao",
    url: "https://fxbaogao.com/detail/4642544",
    date: "2023",
    type: "演讲",
    tags: ["陈广胜", "EventMesh", "Serverless", "演讲"],
    excerpt: "陈广胜 EventMesh Function 演讲的图文报告：事件分类体系、在金融级消息总线与华为云事件网格中的落地实践、信创支持与应用规模。"
  },
  {
    title: "EventMesh A2A：面向 AI Agent 的协作总线",
    source: "Apache EventMesh 文档",
    url: "https://apache.googlesource.com/eventmesh/+/68ed2835d040f91362eb005810f1beb9363e2dd5%5E%21/",
    date: "2025",
    type: "技术文档",
    tags: ["Eason Chen", "EventMesh", "AI Agent", "A2A", "MCP", "云原生"],
    excerpt: "EventMesh v2.0 拥抱 MCP / A2A 协议，从事件中间件演进为 AI Agent 协作总线（Agent Collaboration Bus），基于 CloudEvents 实现异步 RPC over JSON-RPC 2.0，并可与 LangChain / AutoGen 集成。"
  },
  {
    title: "qqeasonchen/EventMesh（个人仓库）",
    source: "github.com/qqeasonchen",
    url: "https://github.com/qqeasonchen/EventMesh",
    date: "—",
    type: "仓库",
    tags: ["Eason Chen", "qqeasonchen", "chenguangsheng", "EventMesh", "Apache", "开源"],
    excerpt: "Eason Chen 个人账号下的 Apache EventMesh fork / 镜像，持续同步上游 apache/eventmesh 的 Issue / PR（含 A2A Gateway 等最新特性），是 EventMesh 源码与贡献的直接入口。"
  },
  {
    title: "分布式应用提效框架 Apache EventMesh（视频回放）",
    source: "InfoQ 视频",
    url: "https://www.infoq.cn/video/cwhtMM6TXQBsCAzj3ZyE",
    date: "2021-11",
    type: "视频",
    tags: ["陈广胜", "微众银行", "EventMesh", "Apache", "演讲", "视频"],
    excerpt: "陈广胜在 ArchSummit 全球架构师峰会（深圳站）的同名演讲视频回放，系统讲解 EventMesh 的演进、核心架构及在微众银行的探索与实践。"
  },
  {
    title: "RocketMQ x EventMesh Open Day 线上直播周（二）",
    source: "阿里云开发者社区 / 直播",
    url: "https://developer.aliyun.com/live/247182",
    date: "2022",
    type: "视频",
    tags: ["陈广胜", "EventMesh", "RocketMQ", "Apache", "直播", "演讲"],
    excerpt: "RocketMQ 5.0 遇见 EventMesh 金融专场 Open Day 线上直播：陈广胜作为分享嘉宾讲解《Apache EventMesh：事件驱动分布式应用多运行时》，联动微众银行、平安人寿等金融企业。"
  },
  {
    title: "EventMesh: Event-Driven Distributed Application Runtime（英文版）",
    source: "ApacheCon Asia 2021",
    url: "https://apachecon.com/acasia2021/sessions/1154.html",
    date: "2021-08",
    type: "演讲",
    tags: ["Eason Chen", "陈广胜", "EventMesh", "Apache", "ApacheCon", "演讲"],
    excerpt: "Eason Chen 在 ApacheCon Asia 2021 的英文版演讲页：如何用事件驱动架构（EDA）解决现代分布式应用架构的复杂性，EventMesh 的定位与模式。"
  },
  {
    title: "Apache RocketMQ 开发者沙龙深圳｜微众银行消息总线的架构演进",
    source: "CSDN / Apache RocketMQ 社区",
    url: "https://blog.csdn.net/weixin_39860915/article/details/97346429",
    date: "2019",
    type: "演讲",
    tags: ["陈广胜", "微众银行", "RocketMQ", "消息总线", "开源", "演讲"],
    excerpt: "陈广胜（Apache RocketMQ 深圳社区联合发起人）在 RocketMQ 开发者沙龙分享微众银行消息总线：基于 RocketMQ 的同步调用、灰度发布、同城多活、消息代理、熔断等生产级增强。"
  },
  {
    title: "解锁事务消息，发力大数据流计算 — Apache RocketMQ 再聚深圳",
    source: "CSDN / Apache RocketMQ 社区",
    url: "https://blog.csdn.net/weixin_39860915/article/details/98863377",
    date: "2019",
    type: "活动",
    tags: ["陈广胜", "微众银行", "RocketMQ", "消息中间件", "开源", "活动"],
    excerpt: "陈广胜第二次在深圳 RocketMQ Meetup 分享，基于内部真实案例介绍 RocketMQ 在金融领域的使用场景，以及消息总线在银行架构中的重要作用。"
  },
  {
    title: "微众银行和一代人的“开源武林”（微博版）",
    source: "微博头条文章",
    url: "https://weibo.com/ttarticle/p/show?id=2309404905750865510557",
    date: "2023",
    type: "文章",
    tags: ["陈广胜", "EventMesh", "开源", "ASF Member", "文章"],
    excerpt: "《微众银行和一代人的开源武林》的微博发布版：讲述陈广胜如何从零叩开 Apache 之门、发起 ALC Shenzhen，到 2023 年当选 ASF Member 的开源进阶之路。"
  },
  {
    title: "解决 SaaS 组合式应用集成标准化问题 — EventMesh 在华为的实践应用（视频）",
    source: "哔哩哔哩 / Apache EventMesh",
    url: "https://www.bilibili.com/video/BV1cA4y1d7uw/",
    date: "2022-06",
    type: "视频",
    tags: ["Eason Chen", "陈广胜", "EventMesh", "华为云", "Serverless", "视频"],
    excerpt: "EventMesh 官方在 B 站发布的实践视频：以华为云事件网格（EventGrid）为运行时引擎，讲解 EventMesh 如何解决 SaaS 组合式应用集成标准化问题。"
  }
];

// 专利（陈广胜 作为共同发明人，专利权人均为深圳前海微众银行股份有限公司）
const PATENTS = [
  {
    title: "建立消息队列的方法和装置",
    number: "CN106453136A",
    date: "2016 申请 · 2019 授权",
    inventors: "陈广胜；贾立华；范瑞彬",
    assignee: "深圳前海微众银行股份有限公司",
    status: "已授权",
    abstract: "根据待处理消息的业务类型确定传输方式（同步/异步），在消息中间件中建立对应的消息队列，控制分布式系统中发送端与接收端之间消息的调用关系。",
    url: "https://patentimages.storage.googleapis.com/88/de/e1/1e95232e3aab23/CN106453136A.pdf"
  },
  {
    title: "基于消息中间件的服务切换方法及装置",
    number: "CN106375447A",
    date: "2016 申请 · 2017 公布",
    inventors: "陈广胜；贾立华；范瑞彬",
    assignee: "深圳前海微众银行股份有限公司",
    status: "发明专利",
    abstract: "在接收端异常时，关闭第一发送端消息队列出入口并开启第二发送端，将请求消息路由至第二消息队列，消除接收端与发送端之间的耦合关系，实现服务无感切换。",
    url: "https://patentimages.storage.googleapis.com/82/b2/c1/b964a8e38ff66f/CN106375447A.pdf"
  },
  {
    title: "日志管理方法、系统以及计算机可读存储介质",
    number: "CN107622084A",
    date: "2017 申请 · 2018 公布",
    inventors: "卢道和；杨军；陈广胜；陈翼",
    assignee: "深圳前海微众银行股份有限公司",
    status: "发明专利",
    abstract: "将各业务系统日志统一存储至消息中间件集群并分类建立索引，业务系统可直接在日志管理系统中按索引获取所需日志，无需跨多个系统拉取。",
    url: "https://patents.qizhidao.com/zhuanli/WZIP_a1963d3f56193f618d27b9d31c0f49ac.html"
  },
  {
    title: "日志查询方法、装置、设备及计算机可读存储介质（PCT）",
    number: "WO2021057383A1",
    date: "2020 申请 · 2021 PCT 公布",
    inventors: "卢道和；杨军；陈广胜；陈翼",
    assignee: "深圳前海微众银行股份有限公司",
    status: "国际专利 (PCT)",
    abstract: "基于日志查询请求获取第一查询维度，从日志管理系统中检索对应维度的日志，提升分布式金融系统日志查询效率。本专利为 CN107622084A 的 PCT 国际申请。",
    url: "https://patentimages.storage.googleapis.com/8c/b9/e4/95bad2c48b086e/WO2021057383A1.pdf"
  },
  {
    title: "应用多活方法、设备、数据中心集群及可读存储介质",
    number: "CN109542659A",
    date: "2018 申请 · 2019 公布",
    inventors: "卢道和；杨军；陈广胜；熊梦飞；梁炜强",
    assignee: "深圳前海微众银行股份有限公司",
    status: "发明专利",
    abstract: "监测数据中心流量节点（应用实例/消息中间件）是否宕机，若存在异常则将待传入流量切换至其他数据中心的应用实例处理，避免应用单活导致的业务中断。",
    url: "https://patentimages.storage.googleapis.com/36/d0/77/d3854d616469d8/CN109542659A.pdf"
  },
  {
    title: "消息鉴权方法、设备、系统及计算机可读存储介质",
    number: "CN109413040A / CN109413040B",
    date: "2018 申请 · 2019 公布",
    inventors: "卢道和；杨军；陈广胜；熊梦飞；梁炜强",
    assignee: "深圳前海微众银行股份有限公司",
    status: "已授权 (B)",
    abstract: "面向消息中间件的鉴权方案，对发送端与接收端之间的消息通信进行身份认证与权限校验，保障金融级消息传输的安全性与合规性。",
    url: "http://patents.google.com/patent/CN109413040A/zh"
  },
  {
    title: "一种消息校验方法及第一设备",
    number: "CN113986578A",
    date: "2021 申请 · 2022 公布",
    inventors: "卢道和；杨军；陈广胜；贺繁",
    assignee: "深圳前海微众银行股份有限公司",
    status: "发明专利申请",
    abstract: "基于设备标识获取身份令牌组（先序/后序令牌），依序生成第二身份签名并与第一设备签名比对，规避身份令牌易盗用风险，减少令牌不同步导致的消息传输失败。",
    url: "https://patentimages-storage-googleapis-comproxy.c9w.net/50/d2/a9/dfe37a9a6ef4d3/CN113986578A.pdf"
  },
  {
    title: "一种断开连接的方法及装置",
    number: "CN112866383B",
    date: "2021 申请 · 2026 授权",
    inventors: "卢道和；杨军；陈广胜；熊梦飞；梁荣华；贺繁",
    assignee: "深圳前海微众银行股份有限公司",
    status: "已授权",
    abstract: "中间方接收请求方的断开连接请求，依据各交互方收发记录确定第一收发记录的收发数是否符合设定条件，符合则允许断开，保证交互方断开连接时信息不丢失，提升中间方稳定性。",
    url: "https://m.tianyancha.com/zhuanli/ee0db7ba41eb72b79c195cd1b22c277a"
  },
  {
    title: "日志查询方法、装置、设备及计算机可读存储介质",
    number: "CN110659349A",
    date: "2019 申请 · 2020 公布",
    inventors: "卢道和；杨军；陈广胜；陈翼",
    assignee: "深圳前海微众银行股份有限公司",
    status: "发明专利",
    abstract: "接收日志查询请求后按第一查询维度调用预设数据接口查询日志数据库，生成日志查询页面并响应用户操作，提升分布式金融系统日志查询的便捷性。",
    url: "https://www.chatm.com/zldetail/2417917028c84c003963a9ebf87941021f29afe917767a768abb925cd0d956ec.html"
  },
  {
    title: "消息中间件的资源访问方法、服务器及资源访问系统",
    number: "CN105491065A",
    date: "2015 申请 · 2019 驳回",
    inventors: "贾立华；陈井波；陈广胜；周仁丹",
    assignee: "深圳前海微众银行股份有限公司",
    status: "驳回（未授权）",
    abstract: "依据应用系统指定的 VPN 名称建立对应连接，使应用系统访问消息中间件中对应 VPN 名称的静态资源，解决消息中间件内部资源隔离问题，避免依赖第三方权限控制。",
    url: "https://m.tianyancha.com/zhuanli/13c460dea09f4550a736ba912858ed7a"
  }
];

// 获奖 / 荣誉 / 社区身份
const AWARDS = [
  {
    title: "中国人民银行 2019 年度银行科技发展奖 一等奖",
    org: "中国人民银行（微众银行「鲲鹏芯片在银行应用」项目）",
    date: "2020",
    desc: "微众银行凭借「鲲鹏芯片在银行应用」项目（全分布式银行系统架构 / 同城多中心多活）荣获中国人民银行 2019 年度银行科技发展奖一等奖——银行领域唯一的部级奖励。Eason Chen 作为微众银行核心技术人员，其主导的同城多活、消息总线（DeFiBus）与金融级消息中间件相关专利是本获奖架构的关键技术底座。",
    url: "https://m.thepaper.cn/newsdetail_forward_9359561"
  },
  {
    title: "中国人民银行银行科技发展奖 — 安全可控的分布式金融级消息总线",
    org: "中国人民银行（微众银行）",
    date: "—",
    desc: "微众银行「安全可控的分布式金融级消息总线」项目荣获中国人民银行银行科技发展奖。Eason Chen（陈广胜）位列成果完成人（第 5 完成人），与马智涛、卢道和、杨军等共同完成；项目实现同城多数据中心多活、毫秒级低延时流转与金融级高可靠，是 DeFiBus 消息总线的获奖技术底座。",
    url: "https://inds.cnki.net/kcms/detail?v=DHwcqVM2HM9lYAACUdxRSHBDVe8zcCa/h/rXxEM6hpXvrnZrh4hvG3Drcwiyi08v9PVPaXtMCZQ%2bBL33DJH3D5t1DI0vULnXe3WhIqfIpsA="
  },
  {
    title: "银行机构科技风险管理研究一类成果奖 — 同城三中心多活",
    org: "中国银保监会（微众银行）",
    date: "2018",
    desc: "微众银行「基于分布式架构的同城三中心多活研究与实践」课题从两百余项参选课题中脱颖而出，荣获中国银保监会 2018 年度银行业信息科技风险管理课题研究成果「一类成果奖」（部级）。Eason Chen（陈广胜）作为同城多活与消息总线相关专利的发明人，是该多活架构落地的核心技术人员之一；课题实现同城 RPO=0、RTO≈0。",
    url: "https://www.thepaper.cn/newsDetail_forward_2916845"
  },
  {
    title: "2023 OSCAR 尖峰开源人物（开源先锋人物）",
    org: "OSCAR 开源先锋人物评选",
    date: "2023",
    desc: "由 InfoQ 充电计划嘉宾介绍确认为「2023 Oscar 尖峰开源人物」，表彰其在 Apache EventMesh 与 ALC Shenzhen 上的开源贡献。",
    url: "https://applet.10100.com/article/54800296"
  },
  {
    title: "当选 Apache 软件基金会 Member（第 55 位华人）",
    org: "Apache Software Foundation",
    date: "2023",
    desc: "因在 EventMesh 与 ALC 上的积极贡献，2023 年正式被选举为 ASF Member，华人 Member 数量达 55 名。",
    url: "https://blog.csdn.net/kaiyuanshe/article/details/131733603"
  },
  {
    title: "Apache EventMesh PMC Chair / Vice President",
    org: "Apache 软件基金会",
    date: "2021 – 至今",
    desc: "作为 EventMesh 创始人，带领项目从孵化器毕业为 Apache 顶级项目（TLP），并担任 PMC Chair / VP。",
    url: "https://eventmesh.apache.org/zh/team"
  },
  {
    title: "Google 编程之夏（GSoC）导师",
    org: "Google Open Source",
    date: "—",
    desc: "以 Mentor 身份参与 GSoC，指导全球学生贡献者在 EventMesh 等开源项目中完成代码贡献。",
    url: "https://summerofcode.withgoogle.com/"
  },
  {
    title: "ALC Shenzhen 联合发起人 & Lead",
    org: "Apache Local Community",
    date: "2022 – 至今",
    desc: "发起建立 ALC（Apache Local Community）Shenzhen 城市社区，集结粤港澳大湾区开源力量，扶持本地项目走上「阿帕奇之路」。",
    url: "https://www.slidestalk.cn/LooK/202246398"
  },
  {
    title: "Apache RocketMQ Committer · Linux OpenMessaging TSC",
    org: "Apache / Linux Foundation",
    date: "—",
    desc: "Apache RocketMQ 提交者，参与社区分支维护；Linux OpenMessaging 技术标准化委员会（TSC）成员，推动消息与流处理开放标准。",
    url: "https://github.com/apache/rocketmq"
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
window.SITE_DATA = { PROFILE, BADGES, PROJECTS, ARTICLES, PATENTS, AWARDS, LINKS };

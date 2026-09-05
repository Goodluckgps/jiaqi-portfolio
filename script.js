const header = document.querySelector('.site-header');
const nav = header.querySelector('nav');
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const menuToggle = document.querySelector('.menu-toggle');
const scenes = [...document.querySelectorAll('[data-scene]')];
const progress = document.querySelector('.reading-progress i');

const englishText = {
  '查看效果图 ↗':'View preview ↗','放大查看效果图 ↗':'Enlarge preview ↗','查看工作台效果图 ↗':'View workspace preview ↗',
  '生活切片':'Life Notes',
  '浏览全部 6 个页面 ↗':'Explore all 6 screens ↗',
  '针对求职信息分散、申请节点繁多、跟进状态难以统筹的问题，设计一体化申请工作台，将岗位机会、截止时间、申请材料与进度集中管理，让待办更清晰、优先级更明确，支持有序推进每一次申请。':'To address scattered job information, multiple deadlines and fragmented follow-ups, I designed an integrated application workspace that brings opportunities, deadlines, materials and progress together—making next steps and priorities clearer for each application.',
  '针对多渠道经营数据分散、指标口径复杂、人工复盘重复耗时的问题，设计 AI 辅助复盘工具，将数据整理、指标分析与异常诊断串联为统一流程，帮助团队从报表中定位经营问题，为资源分配与营销调整提供依据。':'To address fragmented channel data, inconsistent metric definitions and time-consuming manual reviews, I designed an AI-assisted tool that connects data preparation, metric analysis and anomaly diagnosis in one workflow, helping teams identify business issues and inform resource allocation and marketing decisions.',
  '界面演示 · 数据为模拟数据':'Interface demo · Simulated data',
  '放大查看界面 ↗':'Enlarge interface ↗',
  '查看网页效果图 ↗':'View interface preview ↗',
  '左右滑一滑，解锁生活里的另一个我':'Swipe left or right to meet another side of me',
  '你好':'Hello','校园经历':'Campus','项目经历':'Projects','工作经历':'Experience',
  '查看个人简历 PDF ↗':'View Résumé PDF ↗','HELLO / 你好，很高兴认识你':'HELLO / Nice to meet you',
  '2027届 · 经济学 · 市场营销 · 电商运营 · 数据分析':'Class of 2027 · Economics · Marketing · E-commerce · Data Analytics',
  '我是':'I’m ','郝嘉琪。':'Hao Jiaqi.','看清市场、理解用户，':'See the market clearly, understand users,','也让数据变成行动。':'and turn data into action.',
  '关注电商运营、市场研究与用户研究，喜欢把分散的信息整理成清晰、可执行的业务判断。':'Focused on e-commerce operations, market research and user research—turning scattered information into clear, actionable business judgment.',
  '市场营销':'Marketing','电商运营':'E-commerce','数据分析':'Data Analytics','Hi，欢迎来认识我！':'Hi, welcome to my portfolio!',
  '校园经历':'Campus Experience','本科建立数据与金融基础，硕士阶段把研究方法带进市场问题。':'My undergraduate study built a foundation in data and finance; my master’s study brings research methods into real market questions.',
  '从模型出发，':'From models','走向真实业务。':'to real business.','东北财经大学':'Dongbei University of Finance & Economics','国际贸易学 · 硕士':'M.A. in International Trade',
  '专业排名 1 / 30 · GPA 4.4 / 5.0':'Ranked 1 / 30 · GPA 4.4 / 5.0','南京航空航天大学':'Nanjing University of Aeronautics & Astronautics','金融学 · 学士':'B.A. in Finance','计量经济学 · Python · 机器学习':'Econometrics · Python · Machine Learning',
  '三个项目，三种真实问题。':'Three projects, three real problems.','点击项目切换，查看问题、方法与结果。':'Choose a project to explore its question, method and outcome.',
  'WeHab 用户研究':'WeHab User Research','水蜜桃直播运营':'Peach Livestream Operations','摄影工作室':'Photography Studio',
  '一款新产品，怎样找到':'How can a new product find','最先愿意购买的人？':'its earliest willing buyers?','谁会买':'Who buys','为什么买':'Why they buy','如何进入':'How to enter',
  '中风远程康复产品内地市场冷启动，':'Launching a remote stroke-rehabilitation product in Mainland China,','找到核心购买群体、目标市场与影响因素。':'identifying core buyers, target markets and purchase drivers.',
  '围绕院外卒中康复系统 WeHab，检验产品接受度，并把消费者证据转化为定位和 4P 进入策略。':'For the out-of-hospital WeHab rehabilitation system, I tested product acceptance and translated consumer evidence into positioning and a 4P market-entry strategy.',
  '概念测试':'Concept Test','因子分析':'Factor Analysis','回归验证':'Regression','市场策略':'Market Strategy','项核心产品属性':'core product attributes','解释力度 R²':'explanatory power R²',
  '从产品，到服务，再到疗法依据':'From product to service and therapeutic evidence','点击查看完整图库 ↗':'Open full gallery ↗','产品平台':'Platform','智能硬件':'Smart Hardware','疗法证据':'Clinical Evidence',
  '一场电商直播，怎样真正':'How can one livestream','产出可复用的增长方法？':'produce a reusable growth method?','拆节点':'Break down','调策略':'Adjust','沉淀方法':'Codify',
  '从田间调研到直播推广，把一次暑期实践做成可复盘的电商助农项目。':'From field research to livestream promotion, turning a summer initiative into a repeatable rural e-commerce project.',
  '线下走访水蜜桃与葡萄基地，梳理农产品和村民的电商需求；线上拆分直播节点，持续调整选品、讲解脚本和互动节奏。':'I visited peach and grape farms to understand product and merchant needs, then broke the livestream into measurable moments and iterated assortment, scripts and engagement.',
  '田间调研':'Field Research','电商科普':'E-commerce Education','直播推广':'Livestream Growth','媒体传播':'Media Reach','单场 GMV 提升':'single-stream GMV lift','直播点赞':'livestream likes','校内外媒体报道':'media features',
  '电商助农项目报道合集':'Rural E-commerce Media Archive','点击展开 6 篇报道 ↗':'Open 6 media features ↗','媒体报道':'Media Coverage',
  '一次商业拍摄，怎样从创意':'How does a commercial shoot move from an idea','走到稳定交付与持续合作？':'to reliable delivery and repeat business?','定方案':'Plan','做拍摄':'Shoot','促复购':'Retain',
  '让内容不只好看，也能推动一次真实合作落地。':'Making content that looks good—and moves a real collaboration forward.','围绕垂类账号做竞品、受众与场景分析，把选题判断转化为拍摄方案、内容交付和客户沟通。':'I analyzed competitors, audiences and usage scenes for niche accounts, turning content judgment into shoot plans, delivery and client communication.',
  '竞品观察':'Competitor Scan','选题设计':'Concept Design','拍摄执行':'Production','内容复盘':'Review','垂类内容项目':'content projects','场拍摄落地':'shoots delivered','持续参与':'years involved',
  '用数据连接渠道表现':'Using data to connect channel performance','与营销决策。':'with marketing decisions.','时间':'Period','2026年7月—至今':'Jul 2026 — Present','部门':'Department','优时颜品牌营销——通路行销&数据部':'UNISKIN Brand Marketing — Trade Marketing & Data','岗位':'Role','营销数据岗':'Marketing Data Intern',
  '渠道追踪':'Channel Tracking','每天的收入与预算，哪里出现异常？':'Where do daily revenue and budget anomalies appear?','竞品分析':'Competitive Analysis','竞品靠什么增长，直播是否挤压自营？':'What drives competitor growth—and does livestreaming cannibalize DTC?','行业研究':'Industry Research','增长正在向哪些平台、品类与产品迁移？':'Which platforms, categories and products are capturing growth?','AI 提效':'AI Efficiency','怎样把重复取数变成可复用的工具？':'How can repetitive data extraction become a reusable tool?',
  '把每日流水，整理成经营进度。':'Turning daily transactions into operating progress.','更新天猫、抖音等渠道实际收入，统一实收 GMV、投入和预算口径，跟踪预算达成率与异常波动。':'Tracked actual revenue across Tmall, Douyin and other channels, aligned GMV, investment and budget definitions, and identified attainment gaps and anomalies.',
  '实际收入':'Actual Revenue','预算达成':'Budget Attainment','差异定位':'Gap Diagnosis','渠道销售日报':'Daily Channel Report','渠道':'Channel','状态':'Status','天猫':'Tmall','抖音':'Douyin','其他':'Other','跟进':'Follow up','达成':'Achieved','观察':'Watch',
  '直播放量，是否挤压品牌自营？':'Does livestream scale cannibalize brand-owned sales?','把洁面竞品的天猫整体、自营与李佳琦渠道放在同一口径下，对比直播节点前后的绝对销售变化。':'Compared total Tmall, brand-owned and Li Jiaqi-channel sales for cleanser competitors under one consistent definition, before and after livestream events.',
  '直播节点':'Livestream Event','自营变化':'DTC Change','渠道判断':'Channel Judgment','节点性迁移':'Event-driven Shift','并非稳定挤压':'No Consistent Cannibalization','需求增量':'Incremental Demand',
  '增长没有平均发生，而是在平台与品类间迁移。':'Growth is uneven—it shifts across platforms and categories.','整合淘宝与抖音 2026 年上半年护肤行业数据，比较平台增速、品类贡献和品牌自营/达人合作结构。':'Integrated H1 2026 skincare data from Taobao and Douyin to compare platform growth, category contribution and brand-owned versus creator-led structures.',
  '市场规模':'Market Size','平台拆解':'Platform Split','品类机会':'Category Opportunity','淘抖整体':'Taobao + Douyin','洁面':'Cleanser','化妆水':'Toner','精华':'Serum',
  '把重复取数和排行，做成团队可以直接使用的工具。':'Turning repetitive extraction and ranking into a tool the team can use directly.','整理李佳琦直播宝贝明细，自动识别品类并支持按月、季度、关键词查看 GMV Top30，减少手工筛选和重复汇总。':'Structured Li Jiaqi livestream SKU data, automated category recognition and enabled monthly, quarterly and keyword-based GMV Top 30 views.',
  '原始底表':'Raw Data','自动清洗':'Automated Cleaning','交互看板':'Interactive Dashboard','打开本地作品 ↗':'Open local project ↗',
  '独立负责 6 张经营表，覆盖天猫、抖音两大渠道，按日、周、月、季度与半年五个周期追踪收入预算和销售情况；日均处理 2k+ 数据，并围绕重点品、行业研究与日常经营，监测 GMV、投入花费、ROI、流量与转化率等指标。':'Owned six operating reports across Tmall and Douyin, tracking revenue, budget and sales over daily, weekly, monthly, quarterly and half-year cycles. Processed 2k+ records per day and monitored GMV, spend, ROI, traffic and conversion across priority products, category research and daily operations.',
  '收入预算':'Revenue & Budget','销售表现':'Sales Performance','异常定位':'Anomaly Diagnosis','日均处理数据':'records processed daily','独立负责经营表':'operating reports owned','经营追踪周期':'tracking cycles',
  '固定追踪洁面、眼霜、面霜与防晒四类重点产品，在天猫、抖音覆盖 20+ 品牌；一方面拆解增长趋势、上新节奏与营销动作，另一方面对照天猫整体、自营与李佳琦直播口径，判断直播节点对品牌自营的真实影响。':'Tracked four priority categories—cleanser, eye cream, face cream and sunscreen—across 20+ brands on Tmall and Douyin. I analyzed growth, launches and marketing moves, then compared total Tmall, brand-owned and Li Jiaqi livestream sales to assess the true impact of livestream events on DTC performance.',
  '重点产品':'Priority Products','营销动作':'Marketing Moves','渠道影响':'Channel Impact','重点产品品类':'priority product categories','持续追踪品牌':'brands tracked','覆盖电商平台':'e-commerce platforms',
  '围绕 GMV 与 ROI 两个核心结果，整合天猫与抖音行业数据，从平台、细分品类、品牌、产品和 Top 榜单逐层拆解；覆盖 8 个护肤细分品类，并将研究结论沉淀为 3 份专题分析。':'Centered on GMV and ROI, I integrated category data from Tmall and Douyin and analyzed it by platform, subcategory, brand, product and Top rankings. The work covered eight skincare subcategories and resulted in three focused studies.',
  '平台与品类':'Platform & Category','品牌与产品':'Brand & Product','专题分析':'focused studies','护肤细分品类':'skincare subcategories',
  '从 0 到 1 搭建直播间产品经营分析工具，将 Excel 拖拽上传、字段自动映射、6 类品类识别、跨周期筛选与结果导出固化为标准流程，把单日报处理从约 1 小时缩短到约 0.4 小时。':'Built a livestream product performance tool from 0 to 1, standardizing Excel drag-and-drop upload, automatic field mapping, six-category recognition, cross-period filtering and export. It reduced single-report processing time from about one hour to 0.4 hours.',
  '自动处理':'Automated Processing','复用工具':'Reusable Tool','单日报处理提效':'faster single-report processing','自动识别品类':'categories recognized automatically','GMV 异常识别反馈':'GMV anomalies identified and escalated',
  '工作之外，我还在做两件事。':'Beyond work, I’m building two more things.','一个已经上线使用，一个正在把真实业务流程产品化。':'One is live; the other is productizing a real business workflow.','已上线':'LIVE','正在产品化':'IN DEVELOPMENT',
  'PathPilot 个人申请工作台':'PathPilot Application Workspace','把岗位、截止时间、材料和跟进状态放进同一套求职流程。':'A single workflow for roles, deadlines, materials and follow-ups.','查看完整网页 ↗':'View full website ↗',
  'AI 品牌经营复盘助手':'AI Brand Performance Review Assistant','把周度复盘拆成上传、质检、计算、诊断和行动建议，并继续完成未部署网页。':'A weekly review workflow spanning upload, validation, calculation, diagnosis and recommended actions.','查看完整 PRD ↗':'View full PRD ↗','查看 PRD ↗':'View PRD ↗','查看开发中网页 ↗':'View work in progress ↗',
  '理性地处理数据，':'I work with data rationally,','也感性地':'and document life','记录生活。':'with feeling.','工作之外，我用旅行、摄影、做饭和现场音乐，继续练习观察、耐心与好奇心。':'Outside work, travel, photography, cooking and live music keep me observant, patient and curious.',
  '去不同的地方，刷新观察世界的坐标。':'New places reset the coordinates from which I see the world.','把注意力留给容易被忽略的瞬间。':'Giving attention to moments that are easy to miss.','准备、试验、复盘，也分享结果。':'Prepare, experiment, reflect—and share the result.','在音乐里充电。':'Recharge through live music.',
  'CONTACT / 联系我':'CONTACT / LET’S TALK','期待一份工作，':'Looking for the right role,','也期待一次':'and the right','好合作。':'collaboration.','如果你正在寻找一位能在研究、数据与运营之间切换的人，欢迎来聊聊。':'If you’re looking for someone who can move between research, data and operations, I’d love to talk.',
  '发送邮件':'Email','复制邮箱':'Copy Email','个人简历 PDF':'Résumé PDF','回到顶部':'Back to Top','郝嘉琪 · 数据分析 / 市场研究 / 电商运营':'Hao Jiaqi · Data Analytics / Market Research / E-commerce'
};

const languageSwitch = document.querySelector('[data-language-switch]');
const originalTextNodes = new Map();
const translatableNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    if (!node.nodeValue.trim() || ['SCRIPT','STYLE'].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  originalTextNodes.set(node, node.nodeValue);
  translatableNodes.push(node);
}

function applySiteLanguage(language) {
  const english = language === 'en';
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  translatableNodes.forEach(node => {
    const original = originalTextNodes.get(node);
    const content = original.trim();
    const replacement = english ? englishText[content] : null;
    node.nodeValue = replacement ? original.replace(content, replacement) : original;
  });
  document.querySelectorAll('[data-language-option]').forEach(option => option.classList.toggle('is-active', option.dataset.languageOption === language));
  languageSwitch?.setAttribute('aria-label', english ? 'Switch to Chinese' : '切换到英文');
  try { localStorage.setItem('portfolioLanguage', language); } catch {}
}

languageSwitch?.addEventListener('click', () => applySiteLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
let savedLanguage = 'zh';
try { savedLanguage = localStorage.getItem('portfolioLanguage') || 'zh'; } catch {}
applySiteLanguage(savedLanguage);

const liquidControls = document.querySelectorAll('.version-link,.language-switch,.experience-tabs button,.work-nav button,.contact-action,.role-row span,.exp-route span,.work-copy>div span,.product-status');
liquidControls.forEach(control => {
  control.classList.add('liquid-interactive');
  control.addEventListener('pointermove', event => {
    const rect = control.getBoundingClientRect();
    control.style.setProperty('--glass-x', `${event.clientX - rect.left}px`);
    control.style.setProperty('--glass-y', `${event.clientY - rect.top}px`);
  }, { passive: true });
});

const heroGlassCard = document.querySelector('.hero-glass-card');
heroGlassCard?.addEventListener('pointermove', event => {
  const rect = heroGlassCard.getBoundingClientRect();
  heroGlassCard.style.setProperty('--hero-glass-x', `${event.clientX - rect.left}px`);
  heroGlassCard.style.setProperty('--hero-glass-y', `${event.clientY - rect.top}px`);
  if (innerWidth > 820 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    heroGlassCard.style.transform = `perspective(1100px) rotateX(${-y * 1.8}deg) rotateY(${x * 2.2}deg) translateY(-5px)`;
  }
}, { passive: true });
heroGlassCard?.addEventListener('pointerleave', () => {
  heroGlassCard.style.removeProperty('transform');
});

function animateWorkNumbers(panel) {
  panel?.querySelectorAll('.work-stats b[data-count]').forEach((number, index) => {
    const target = Number(number.dataset.count);
    const duration = Math.min(1400, 650 + target * .12);
    const start = performance.now();
    number.closest('li')?.classList.remove('is-counting');
    requestAnimationFrame(() => number.closest('li')?.classList.add('is-counting'));
    const draw = now => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      let value = Math.round(target * eased);
      let output = number.dataset.compact && value >= 1000
        ? `${(value / 1000).toFixed(value % 1000 ? 1 : 0)}k`
        : number.dataset.separator ? value.toLocaleString('en-US') : String(value);
      number.textContent = output + (number.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(draw);
    };
    setTimeout(() => requestAnimationFrame(draw), index * 90);
  });
}

animateWorkNumbers(document.querySelector('#work .work-panel.is-active'));
document.querySelectorAll('[data-exp-tabs="work"] [data-exp]').forEach(button => {
  button.addEventListener('click', () => requestAnimationFrame(() => animateWorkNumbers(document.getElementById(button.dataset.exp))));
});

menuToggle.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  document.body.classList.toggle('menu-open', open);
});

navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '打开导航');
  document.body.classList.remove('menu-open');
}));

const sceneObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: .18 });
scenes.forEach(scene => sceneObserver.observe(scene));

const caseReveals = [...document.querySelectorAll('.case-study .reveal-up, .case-study .reveal-from-left, .case-study .reveal-from-right, .market-notebook .reveal-up, .ai-project .reveal-up, .project-story .reveal-up, .life-notes .reveal-up, .contact .reveal-up')];
const caseRevealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: .16, rootMargin: '0px 0px -8% 0px' });
caseReveals.forEach(element => caseRevealObserver.observe(element));

const navObserver = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const id = visible.target.id;
  navLinks.forEach(link => link.classList.toggle('is-active', link.hash === `#${id}`));
  header.classList.toggle('on-dark', false);
}, { threshold: [.32, .55, .72] });
scenes.forEach(scene => navObserver.observe(scene));

let scrollTicking = false;
function updateScrollEffects() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const ratio = max > 0 ? scrollY / max : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;

  const hero = document.querySelector('.hero');
  if (scrollY < hero.offsetHeight * 1.15) {
    const portrait = document.querySelector('.portrait-card img');
    const greeting = document.querySelector('.greeting-character');
    portrait.style.transform = `translate3d(0, ${Math.min(36, scrollY * .055)}px, 0) scale(1.035)`;
    if (innerWidth > 820) greeting.style.setProperty('--scroll-lift', `${Math.min(50, scrollY * .08)}px`);
  }

  const caseStudy = document.querySelector('.case-study');
  if (caseStudy) {
    const rect = caseStudy.getBoundingClientRect();
    const travelled = innerHeight - rect.top;
    const available = rect.height + innerHeight;
    const caseRatio = Math.min(1, Math.max(0, travelled / available));
    const caseLine = caseStudy.querySelector('.case-progress i');
    if (caseLine) caseLine.style.transform = `scaleY(${caseRatio})`;

    const darkArea = caseStudy.getBoundingClientRect();
    const methodArea = document.querySelector('.method').getBoundingClientRect();
    const insideDarkArea = darkArea.top < 90 && darkArea.bottom > 90;
    const insideMethodArea = methodArea.top < 90 && methodArea.bottom > 90;
    header.classList.toggle('on-dark', insideDarkArea || insideMethodArea);
  }

  const storyStageElement = document.querySelector('.story-stage');
  const storyStageWrap = document.querySelector('.story-stage-wrap');
  if (storyStageElement && storyStageWrap && innerWidth > 820) {
    const wrapRect = storyStageWrap.getBoundingClientRect();
    const desired = -wrapRect.top + 96;
    const limit = Math.max(0, wrapRect.height - storyStageElement.offsetHeight);
    storyStageElement.style.transform = `translateY(${Math.min(limit, Math.max(0, desired))}px)`;
  }
  scrollTicking = false;
}
addEventListener('scroll', () => {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(updateScrollEffects);
  }
}, { passive: true });
updateScrollEffects();

function setupTabs(groupName) {
  const tablist = document.querySelector(`[data-tab-group="${groupName}"]`);
  const panelRoot = document.querySelector(`[data-panels="${groupName}"]`);
  if (!tablist || !panelRoot) return;

  const tabs = [...tablist.querySelectorAll('[data-tab]')];
  const panels = [...panelRoot.children];
  panels.forEach(panel => {
    panel.hidden = false;
    panel.setAttribute('aria-hidden', String(!panel.classList.contains('is-active')));
  });

  function activate(tab) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => {
      const selected = panel.id === tab.dataset.tab;
      panel.classList.toggle('is-active', selected);
      panel.setAttribute('aria-hidden', String(!selected));
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = tabs[(index + direction + tabs.length) % tabs.length];
      activate(next);
      next.focus();
    });
  });
}

setupTabs('ability');
setupTabs('case');
setupTabs('journey');

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.counted) return;
    entry.target.dataset.counted = 'true';
    const target = Number(entry.target.dataset.count);
    const started = performance.now();
    const duration = 950;
    function count(now) {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      entry.target.textContent = (target * eased).toFixed(1);
      if (progress < 1) requestAnimationFrame(count);
    }
    requestAnimationFrame(count);
  });
}, { threshold: .45 });
document.querySelectorAll('[data-count]').forEach(number => {
  if (!number.closest('.work-stats')) countObserver.observe(number);
});

const aiAnswers = {
  channel: {
    label: 'AI DIAGNOSIS',
    title: '异常不在转化，<br>而在流量入口。',
    sections: [
      ['数据发现', '天猫UV下降，转化率基本稳定；流量端是本次波动的主要来源。'],
      ['原因判断', '搜索流量回落，需要结合品牌词份额与竞品投放进一步验证。'],
      ['下一步', '优先检查搜索入口，再决定是否调整投放和商品承接。']
    ]
  },
  growth: {
    label: 'GROWTH FINDER',
    title: '增量集中在少数商品，<br>不是平均上涨。',
    sections: [
      ['数据发现', '头部SKU贡献主要增长，中腰部商品表现分化。'],
      ['原因判断', '直播机制与商品卖点匹配时，单品更容易集中放量。'],
      ['下一步', '提取增长SKU的价格、套组和内容共性，形成下一轮选品清单。']
    ]
  },
  weekly: {
    label: 'WEEKLY SUMMARY',
    title: '把一周数字，<br>压缩成三个判断。',
    sections: [
      ['发生什么', '汇总GMV、流量、转化与商品结构变化，标记主要异常。'],
      ['为什么', '沿渠道、入口和SKU逐层拆解，区分确定事实与待验证推测。'],
      ['做什么', '输出按优先级排序的行动清单，并保留继续追问入口。']
    ]
  }
};
const aiTaskButtons = document.querySelectorAll('[data-ai-task]');
const aiAnswer = document.querySelector('[data-ai-answer]');
aiTaskButtons.forEach(button => button.addEventListener('click', () => {
  aiTaskButtons.forEach(item => item.classList.toggle('is-active', item === button));
  aiAnswer.classList.add('is-loading');
  setTimeout(() => {
    const answer = aiAnswers[button.dataset.aiTask];
    aiAnswer.innerHTML = `<small>${answer.label}</small><h3>${answer.title}</h3>${answer.sections.map((section,index) => `<div class="${index === 2 ? 'action' : ''}"><b>${section[0]}</b><p>${section[1]}</p></div>`).join('')}`;
    aiAnswer.classList.remove('is-loading');
  }, 240);
}));

const storyStage = document.querySelector('[data-story-stage]');
const storySteps = [...document.querySelectorAll('[data-story-step]')];
const storyScenes = [...document.querySelectorAll('.story-stage .stage-scene')];
const stageIndex = document.querySelector('[data-stage-index]');
const characterNote = document.querySelector('[data-character-note]');
const storyStageMeta = {
  channel: ['01 / CHANNEL', '先别急着下结论，<br>让我再拆一层。'],
  market: ['02 / MARKET', '把视野拉远一点，<br>变化会更清楚。'],
  ai: ['03 / TOOL', '重复的方法，<br>应该被工具记住。']
};
function activateStory(stageName) {
  if (!storyStage) return;
  storyStage.dataset.storyStage = stageName;
  storySteps.forEach(step => step.classList.toggle('is-active', step.dataset.storyStep === stageName));
  storyScenes.forEach(scene => scene.classList.toggle('is-active', scene.classList.contains(`stage-${stageName}`)));
  stageIndex.textContent = storyStageMeta[stageName][0];
  characterNote.innerHTML = storyStageMeta[stageName][1];
}
const storyObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) activateStory(visible.target.dataset.storyStep);
}, { threshold: [.35,.55,.72], rootMargin: '-12% 0px -18% 0px' });
storySteps.forEach(step => storyObserver.observe(step));

const storyAiContent = {
  '异常诊断': ['异常不在转化，<br>而在流量入口。','天猫UV下降，转化率基本稳定。','流量入口是本次波动的主要来源。','优先检查搜索入口与商品承接。'],
  '增长机会': ['增量集中在少数商品，<br>不是平均上涨。','头部SKU贡献主要增长。','直播机制与商品卖点形成匹配。','沉淀价格、套组与内容共性。'],
  '经营周报': ['把一周数字，<br>压缩成三个判断。','汇总指标变化并标记异常。','沿渠道、入口和SKU逐层拆解。','输出按优先级排序的行动清单。']
};
document.querySelectorAll('[data-story-ai]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-story-ai]').forEach(item => item.classList.toggle('is-active',item === button));
  const card = document.querySelector('.ai-demo-card');
  card.classList.add('is-loading');
  setTimeout(() => {
    const content = storyAiContent[button.dataset.storyAi];
    document.querySelector('[data-story-ai-label]').textContent = `${button.dataset.storyAi} / AI ANALYSIS`;
    document.querySelector('[data-story-ai-title]').innerHTML = content[0];
    document.querySelector('[data-story-ai-finding]').textContent = content[1];
    document.querySelector('[data-story-ai-reason]').textContent = content[2];
    document.querySelector('[data-story-ai-next]').textContent = content[3];
    card.classList.remove('is-loading');
  },220);
}));

const greeting = document.querySelector('[data-greeting]');
const greetingBubble = greeting.querySelector('.greeting-bubble');
const greetingLines = [
  'Hi，欢迎来认识我！',
  '从照片里的我，到工作中的我。',
  '继续往下，看看我怎么思考。'
];
let greetingIndex = 0;
greeting.addEventListener('click', () => {
  greetingIndex = (greetingIndex + 1) % greetingLines.length;
  greetingBubble.textContent = greetingLines[greetingIndex];
  greeting.classList.add('is-speaking');
  clearTimeout(greeting.speakingTimer);
  greeting.speakingTimer = setTimeout(() => greeting.classList.remove('is-speaking'), 2600);
});

document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('pointermove', event => {
    if (innerWidth <= 820) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(900px) rotateX(${-y * 3.5}deg) rotateY(${x * 4.5}deg) translateY(-3px)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const copyEmailButton = document.querySelector('[data-copy-email]');
const copyToast = document.querySelector('.copy-toast');
copyEmailButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyEmailButton.dataset.copyEmail);
  } catch {
    const input = document.createElement('textarea');
    input.value = copyEmailButton.dataset.copyEmail;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
  copyToast?.classList.add('is-visible');
  setTimeout(() => copyToast?.classList.remove('is-visible'), 1800);
});

const lifeRing = document.querySelector('[data-life-ring]');
const lifeRingItems = [...document.querySelectorAll('[data-ring-index]')];
let activeLifeRingItem = 0;
let suppressLifeRingClick = false;

function renderLifeRing() {
  lifeRingItems.forEach((item, index) => {
    const offset = (index - activeLifeRingItem + lifeRingItems.length) % lifeRingItems.length;
    item.classList.toggle('is-active', offset === 0);
    item.classList.toggle('is-next', offset === 1);
    item.classList.toggle('is-prev', offset === lifeRingItems.length - 1);
    item.setAttribute('aria-pressed', String(offset === 0));
  });
}

function moveLifeRing(direction) {
  activeLifeRingItem = (activeLifeRingItem + direction + lifeRingItems.length) % lifeRingItems.length;
  renderLifeRing();
}

lifeRingItems.forEach(item => item.addEventListener('click', () => {
  if (suppressLifeRingClick) return;
  activeLifeRingItem = Number(item.dataset.ringIndex);
  renderLifeRing();
}));

if (lifeRing) {
  let dragging = false;
  let dragStartX = 0;
  lifeRing.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    dragging = true;
    dragStartX = event.clientX;
    lifeRing.classList.add('is-dragging');
    lifeRing.setPointerCapture(event.pointerId);
  });
  const stopLifeRingDrag = event => {
    if (!dragging) return;
    const distance = event.clientX - dragStartX;
    dragging = false;
    lifeRing.classList.remove('is-dragging');
    if (lifeRing.hasPointerCapture(event.pointerId)) lifeRing.releasePointerCapture(event.pointerId);
    if (Math.abs(distance) < 34) return;
    suppressLifeRingClick = true;
    moveLifeRing(distance < 0 ? 1 : -1);
    setTimeout(() => { suppressLifeRingClick = false; }, 0);
  };
  lifeRing.addEventListener('pointerup', stopLifeRingDrag);
  lifeRing.addEventListener('pointercancel', stopLifeRingDrag);
  lifeRing.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveLifeRing(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); moveLifeRing(1); }
  });
  lifeRing.addEventListener('wheel', event => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    event.preventDefault();
    moveLifeRing(event.deltaX > 0 ? 1 : -1);
  }, { passive: false });
  renderLifeRing();
}

const abilityCompanion = document.querySelector('[data-ability-companion]');
const abilityCompanionLines = ['用户说了什么？', '用户实际做了什么？', '把两种证据放在一起看。'];
let abilityCompanionLine = 0;
abilityCompanion?.addEventListener('click', () => {
  abilityCompanionLine = (abilityCompanionLine + 1) % abilityCompanionLines.length;
  abilityCompanion.querySelector('span').textContent = abilityCompanionLines[abilityCompanionLine];
  abilityCompanion.classList.add('is-speaking');
  clearTimeout(abilityCompanion.speakingTimer);
  abilityCompanion.speakingTimer = setTimeout(() => abilityCompanion.classList.remove('is-speaking'), 2400);
});

document.querySelectorAll('[data-exp-tabs]').forEach(tabList => {
  const group = tabList.dataset.expTabs;
  const buttons = [...tabList.querySelectorAll('[data-exp]')];
  const panelWrap = document.querySelector(`[data-exp-panels="${group}"]`);
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.classList.toggle('is-active', item === button));
    panelWrap.querySelectorAll(':scope > article').forEach(panel => {
      const active = panel.id === button.dataset.exp;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
  }));
});

const wehabGallery = document.querySelector('[data-wehab-gallery]');
const wehabItems = [
  ['assets/wehab-platform.png', 'WEHAB · PRODUCT SYSTEM', '智慧康复平台与产品套装', '把评估、训练与数据监测带到院外康复场景。'],
  ['assets/wehab-hardware.png', 'WEHAB · SMART HARDWARE', '脑氧头带与智能腕带', '用可穿戴设备捕捉训练状态，连接患者、家庭与康复团队。'],
  ['assets/wehab-workflow.png', 'SHARPSIGHT · SERVICE WORKFLOW', '六步闭环康复服务流程', '从建档、训练计划到实时监测和随访建议，形成持续服务闭环。'],
  ['assets/wehab-brand.png', 'SHARPSIGHT · BRAND', '智慧康复的品牌与使用场景', '产品不是孤立设备，而是一套面向居家与远程康复的解决方案。'],
  ['assets/wehab-research.png', 'REMIND-TO-MOVE · EVIDENCE', '提醒疗法的临床研究依据', '以研究材料补足产品背后的疗法来源与有效性证据。']
];
let activeWehab = 0;
function renderWehab(index) {
  activeWehab = (index + wehabItems.length) % wehabItems.length;
  const [src, source, title, note] = wehabItems[activeWehab];
  wehabGallery.querySelector('[data-wehab-image]').src = src;
  wehabGallery.querySelector('[data-wehab-source]').textContent = source;
  wehabGallery.querySelector('[data-wehab-title]').textContent = title;
  wehabGallery.querySelector('[data-wehab-note]').textContent = note;
  wehabGallery.querySelectorAll('[data-wehab-index]').forEach((thumb, i) => thumb.classList.toggle('is-active', i === activeWehab));
}
document.querySelector('[data-wehab-open]')?.addEventListener('click', () => { renderWehab(0); wehabGallery.showModal(); });
document.querySelector('[data-wehab-close]')?.addEventListener('click', () => wehabGallery.close());
document.querySelector('[data-wehab-prev]')?.addEventListener('click', () => renderWehab(activeWehab - 1));
document.querySelector('[data-wehab-next]')?.addEventListener('click', () => renderWehab(activeWehab + 1));
wehabGallery?.querySelectorAll('[data-wehab-index]').forEach(thumb => thumb.addEventListener('click', () => renderWehab(Number(thumb.dataset.wehabIndex))));
wehabGallery?.addEventListener('click', event => { if (event.target === wehabGallery) wehabGallery.close(); });
wehabGallery?.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); renderWehab(activeWehab - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); renderWehab(activeWehab + 1); }
});

const mediaGallery = document.querySelector('[data-media-gallery]');
const mediaItems = [
  ['assets/peach-media-toutiao.png', '今日头条 · 扬州晚报', '桃萄夏乡 赋能电商——社会实践团队开启电商赋能新篇章', '2022.08.13'],
  ['assets/peach-media-tv.png', '海门新闻', '大学生开展电商助农暑期实践', '2022.08'],
  ['assets/peach-media-haimen.png', '海门日报', '青春力量 回报家乡', '2022.08.04'],
  ['assets/peach-media-campus.png', '南京校园', '阳山桃天思赋暑，南通葡萄梦知夏', '2022.08.15'],
  ['assets/peach-media-college.png', '南京航空航天大学经济与管理学院', '社会实践：桃萄夏乡 赋能电商', '2022.08.12'],
  ['assets/peach-media-youth.png', '江苏共青团', '桃萄下乡，赋能电商团队暑期社会实践', '2022.08.11']
];
let activeMedia = 0;
function renderMedia(index) {
  activeMedia = (index + mediaItems.length) % mediaItems.length;
  const [src, source, title, date] = mediaItems[activeMedia];
  mediaGallery.querySelector('[data-media-image]').src = src;
  mediaGallery.querySelector('[data-media-source]').textContent = source;
  mediaGallery.querySelector('[data-media-title]').textContent = title;
  mediaGallery.querySelector('[data-media-date]').textContent = date;
  mediaGallery.querySelectorAll('[data-media-index]').forEach((thumb, i) => thumb.classList.toggle('is-active', i === activeMedia));
}
document.querySelector('[data-media-open]')?.addEventListener('click', () => { renderMedia(0); mediaGallery.showModal(); });
document.querySelector('[data-media-close]')?.addEventListener('click', () => mediaGallery.close());
document.querySelector('[data-media-prev]')?.addEventListener('click', () => renderMedia(activeMedia - 1));
document.querySelector('[data-media-next]')?.addEventListener('click', () => renderMedia(activeMedia + 1));
mediaGallery?.querySelectorAll('[data-media-index]').forEach(thumb => thumb.addEventListener('click', () => renderMedia(Number(thumb.dataset.mediaIndex))));
mediaGallery?.addEventListener('click', event => { if (event.target === mediaGallery) mediaGallery.close(); });
mediaGallery?.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); renderMedia(activeMedia - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); renderMedia(activeMedia + 1); }
});

/* Soft background parallax: decorative only, disabled for reduced motion. */
const atmosphereMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (atmosphereMotion) {
  let atmosphereFrame = 0;
  const updateAtmosphere = () => {
    atmosphereFrame = 0;
    const shift = Math.min(scrollY * .035, 70);
    document.documentElement.style.setProperty('--atmosphere-scroll', `${-shift * .15}px`);
    document.documentElement.style.setProperty('--atmosphere-scroll-mid', `${-shift * .24}px`);
    document.documentElement.style.setProperty('--atmosphere-scroll-front', `${-shift * .32}px`);
  };
  addEventListener('scroll', () => {
    if (!atmosphereFrame) atmosphereFrame = requestAnimationFrame(updateAtmosphere);
  }, { passive: true });
  addEventListener('pointermove', event => {
    const x = (event.clientX / innerWidth - .5) * 18;
    const y = (event.clientY / innerHeight - .5) * 12;
    document.documentElement.style.setProperty('--atmosphere-x', `${x}px`);
    document.documentElement.style.setProperty('--atmosphere-x-soft', `${x * .12}px`);
    document.documentElement.style.setProperty('--atmosphere-x-reverse', `${x * -.18}px`);
    document.documentElement.style.setProperty('--atmosphere-y', `${y}px`);
  }, { passive: true });
  updateAtmosphere();
}

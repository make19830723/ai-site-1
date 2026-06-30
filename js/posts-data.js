/**
 * 文章元数据 (SEO 友好)
 * 字段说明:
 *   slug        : URL 标识 (英文), 用于 /p/<slug>
 *   cat         : 分类 key (对应 posts-categories.js)
 *   title       : 中英 SEO 标题 (含关键字)
 *   description : 中英 meta description (约 140 字, 含关键字)
 *   keywords    : 中英 SEO 关键词 (逗号分隔)
 *   cover       : 封面图 URL
 *   date        : 发布日期
 *   read        : 阅读时长(分钟)
 *
 * 正文按 slug 索引, 存于 posts-content.js; 缺失则详情页显示"撰写中"占位。
 */
window.POSTS = [
  { slug: "chatgpt-writing-prompt-guide", cat: "writing", read: 8, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1620712943543-bcc4688e7480?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "ChatGPT 提示词写作指南：7 个技巧写出高质量 AI 文案", en: "ChatGPT Prompt Writing Guide: 7 Tips for High-Quality AI Copy" },
    description: { zh: "掌握 ChatGPT 提示词写作技巧，学会用角色设定、结构化指令和迭代优化，让 AI 写出专业级文案，附实用提示词模板。", en: "Master ChatGPT prompt techniques—role setup, structured instructions, and iterative refinement—to produce professional copy. Includes ready-to-use templates." },
    keywords: { zh: "ChatGPT提示词, AI写作, AI文案, 提示词技巧, prompt工程", en: "ChatGPT prompts, AI writing, prompt engineering, AI copywriting, prompt tips" } },

  { slug: "ai-write-blog-post-fast", cat: "writing", read: 7, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "用 AI 写博客文章全流程：从选题到发布只需 30 分钟", en: "Write a Blog Post with AI: From Topic to Publish in 30 Minutes" },
    description: { zh: "用 AI 高效完成博客写作：选题、大纲、正文、SEO 优化与配图完整工作流讲解，适合自媒体和内容运营。", en: "An efficient AI blog-writing workflow: ideation, outline, drafting, SEO, and images—ideal for creators and content marketers." },
    keywords: { zh: "AI写博客, AI写作流程, 博客自动生成, SEO写作", en: "AI blog writing, blog automation, SEO writing, AI content workflow" } },

  { slug: "ai-xiaohongshu-copywriting", cat: "writing", read: 6, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "小红书 AI 文案怎么写？爆款笔记标题与正文模板", en: "How to Write Xiaohongshu Copy with AI: Viral Title & Body Templates" },
    description: { zh: "小红书爆款 AI 文案写作方法：标题公式、钩子开头、emoji 排版与标签策略，附可直接套用的提示词。", en: "Viral Xiaohongshu AI copywriting: title formulas, hook openings, emoji formatting, and tag strategies with copy-paste prompts." },
    keywords: { zh: "小红书AI文案, 爆款文案, 小红书标题, AI写笔记", en: "Xiaohongshu copy, viral copywriting, RED titles, AI note writing" } },

  { slug: "ai-business-email-templates", cat: "writing", read: 5, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 商务邮件写作：10 个常用场景模板（催款/询价/道歉）", en: "AI Business Email Writing: 10 Templates for Common Scenarios" },
    description: { zh: "用 AI 快速撰写商务邮件：催款、询价、道歉、邀请、跟进等 10 个高频场景，附中英文邮件提示词模板。", en: "Write business emails with AI: 10 high-frequency scenarios—payment reminders, inquiries, apologies—with bilingual prompt templates." },
    keywords: { zh: "AI写邮件, 商务邮件模板, 英文邮件AI, 邮件提示词", en: "AI email writing, business email templates, English email AI, email prompts" } },

  { slug: "ai-academic-paper-assistant", cat: "writing", read: 9, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 辅助论文写作全攻略：文献综述、润色与降重", en: "AI for Academic Writing: Literature Review, Editing & Reducing Similarity" },
    description: { zh: "用 AI 辅助论文写作：选题、文献综述、语言润色、降重与引用规范，遵守学术诚信，附合规用法指南。", en: "Use AI for academic writing: topics, literature review, language polishing, and citation norms—with academic integrity guidelines." },
    keywords: { zh: "AI论文写作, AI润色, 论文降重, 文献综述AI", en: "AI academic writing, AI paper editing, reduce similarity, literature review AI" } },

  { slug: "ai-novel-fiction-writing", cat: "writing", read: 8, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "用 AI 写小说完整指南：世界观、角色与情节构建", en: "Writing a Novel with AI: Worldbuilding, Characters & Plot" },
    description: { zh: "AI 写小说教程：如何用 AI 构建世界观、塑造角色、设计冲突与节奏，适合网文作者和故事创作者。", en: "A complete AI novel-writing tutorial: worldbuilding, character arcs, conflict, and pacing for web novelists and storytellers." },
    keywords: { zh: "AI写小说, AI创作, 网文写作, AI故事生成", en: "AI novel writing, AI fiction, AI storytelling, web novel AI" } },

  { slug: "ai-seo-content-optimization", cat: "writing", read: 7, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1432888622747-4eb9a8efebc3?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI SEO 内容优化：让文章排名提升的关键技巧", en: "AI SEO Content Optimization: Key Techniques to Boost Rankings" },
    description: { zh: "用 AI 优化 SEO 内容：关键词布局、语义相关词、标题优化与搜索意图匹配，提升文章搜索引擎排名。", en: "Optimize SEO content with AI: keyword placement, LSI terms, title optimization, and search intent matching." },
    keywords: { zh: "AI SEO, 内容优化, 关键词布局, SEO写作技巧", en: "AI SEO, content optimization, keyword placement, SEO writing tips" } },

  { slug: "ai-product-description-generator", cat: "writing", read: 6, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 商品详情页文案生成：电商高转化描述怎么写", en: "AI Product Description Generator: High-Conversion E-commerce Copy" },
    description: { zh: "用 AI 生成电商商品文案：卖点提炼、痛点挖掘、场景化描述，提升详情页转化率，附提示词模板。", en: "Generate e-commerce copy with AI: extract selling points, address pain points, and boost conversion with prompt templates." },
    keywords: { zh: "AI商品文案, 电商文案, 详情页文案, 高转化文案", en: "AI product copy, e-commerce copywriting, product descriptions, conversion copy" } }
];

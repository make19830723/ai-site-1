/**
 * 100 篇文章元数据 (SEO 友好) — 全量数据
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
  /* ============ writing: AI 写作文案 (15) ============ */
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
    keywords: { zh: "AI商品文案, 电商文案, 详情页文案, 高转化文案", en: "AI product copy, e-commerce copywriting, product descriptions, conversion copy" } },

  { slug: "ai-translate-better-than-google", cat: "writing", read: 6, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 翻译 vs 谷歌翻译：哪个翻译更准确？实测对比", en: "AI Translation vs Google Translate: Which Is More Accurate?" },
    description: { zh: "AI 翻译与谷歌翻译深度对比：文学、商务、技术三类文本实测，分析语境理解、术语与本地化差异。", en: "A deep comparison of AI and Google Translate across literary, business, and technical texts—context, terms, and localization." },
    keywords: { zh: "AI翻译, 谷歌翻译对比, 机器翻译, 翻译准确率", en: "AI translation, Google Translate comparison, machine translation, translation accuracy" } },

  { slug: "ai-script-writing-for-video", cat: "writing", read: 7, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "短视频 AI 脚本写作：爆款钩子与三幕结构公式", en: "AI Script Writing for Short Videos: Viral Hooks & Three-Act Structure" },
    description: { zh: "用 AI 写短视频脚本：前 3 秒钩子设计、三幕结构、分镜表与口播稿，适合抖音/视频号创作者。", en: "Write short-video scripts with AI: 3-second hooks, three-act structure, storyboards, and voiceover scripts for TikTok creators." },
    keywords: { zh: "AI脚本, 短视频脚本, 爆款脚本, 视频文案AI", en: "AI script, short video script, viral script, video copy AI" } },

  { slug: "ai-resume-cover-letter", cat: "writing", read: 6, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 写简历与求职信：让 HR 眼前一亮的写法", en: "AI Resume & Cover Letter: Writing That Impresses HR" },
    description: { zh: "用 AI 优化简历和求职信：STAR 法则、关键词匹配、量化成果，提升简历通过率与面试邀约率。", en: "Optimize resume and cover letters with AI: STAR method, keyword matching, and quantified achievements to boost interview rates." },
    keywords: { zh: "AI简历, AI求职信, 简历优化, 求职AI", en: "AI resume, AI cover letter, resume optimization, job search AI" } },

  { slug: "ai-press-release-writing", cat: "writing", read: 6, date: "2026-06-14",
    cover: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 新闻稿写作：企业公关稿的标准格式与范例", en: "AI Press Release Writing: Standard Format & Examples" },
    description: { zh: "用 AI 撰写新闻通稿：倒金字塔结构、5W 要素、媒体友好型表达，附企业公关稿提示词模板。", en: "Write press releases with AI: inverted pyramid, 5W elements, and media-friendly phrasing with PR prompt templates." },
    keywords: { zh: "AI新闻稿, 公关稿写作, 通稿模板, 企业PR", en: "AI press release, PR writing, press release template, corporate PR" } },

  { slug: "ai-ad-copy-that-converts", cat: "writing", read: 7, date: "2026-06-13",
    cover: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 广告文案写作：写出高点击率广告的 5 个公式", en: "AI Ad Copywriting: 5 Formulas for High-CTR Ads" },
    description: { zh: "用 AI 写高转化广告文案：AIDA、PAS、BAB 等经典公式应用，信息流广告与搜索广告实战。", en: "Write high-conversion ad copy with AI: AIDA, PAS, BAB formulas applied to feed ads and search ads." },
    keywords: { zh: "AI广告文案, 高转化文案, 广告创意, CTR优化", en: "AI ad copy, high conversion copy, ad creative, CTR optimization" } },

  { slug: "ai-wechat-article-formatting", cat: "writing", read: 5, date: "2026-06-12",
    cover: "https://images.unsplash.com/photo-1611162616475-46b635cb6838?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "微信公众号 AI 文章：标题排版与打开率优化", en: "AI for WeChat Official Account: Titles, Layout & Open Rate" },
    description: { zh: "用 AI 优化公众号文章：标题测试、摘要优化、段落排版与金句提炼，提升阅读量和打开率。", en: "Optimize WeChat articles with AI: title testing, summary polishing, and formatting to lift reads and open rate." },
    keywords: { zh: "公众号AI, 文章排版, 标题优化, 打开率", en: "WeChat AI, article formatting, title optimization, open rate" } },

  { slug: "ai-long-form-content-structure", cat: "writing", read: 8, date: "2026-06-11",
    cover: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 长文写作结构：万字深度文章如何不打架", en: "AI Long-Form Structure: Coherence in 10,000-Word Articles" },
    description: { zh: "用 AI 写长文保持结构连贯：章节切分、论点递进、风格统一与事实核查，适合深度报告和行业研究。", en: "Keep long-form AI writing coherent: sectioning, argument flow, consistent style, and fact-checking for reports." },
    keywords: { zh: "AI长文, 深度文章, 长文写作, 内容结构", en: "AI long-form, deep article, long-form writing, content structure" } },

  /* ============ image: AI 图像设计 (14) ============ */
  { slug: "midjourney-beginner-guide", cat: "image", read: 9, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1673795416773-5a7e6a8f5f9a?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "Midjourney 新手入门指南：从注册到出图 30 分钟", en: "Midjourney Beginner Guide: From Signup to First Image in 30 Min" },
    description: { zh: "Midjourney 零基础教程：Discord 注册、订阅、提示词语法、参数详解与出图技巧，附新手提示词包。", en: "A zero-to-one Midjourney tutorial: Discord signup, subscription, prompt syntax, parameters, and tips with a starter prompt pack." },
    keywords: { zh: "Midjourney教程, MJ入门, AI绘画, Discord绘画", en: "Midjourney tutorial, MJ beginner, AI art, Discord art" } },

  { slug: "stable-diffusion-local-install", cat: "image", read: 10, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1635776062764-e025521e3df3?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "Stable Diffusion 本地部署完整教程（WebUI 安装）", en: "Stable Diffusion Local Install Guide (WebUI Setup)" },
    description: { zh: "Stable Diffusion 本地部署详解：硬件要求、Python 环境、WebUI 安装、模型下载与出图调参全流程。", en: "Complete Stable Diffusion local setup: hardware, Python env, WebUI install, model downloads, and parameter tuning." },
    keywords: { zh: "Stable Diffusion部署, SD安装, WebUI, AI绘画本地", en: "Stable Diffusion install, SD setup, WebUI, local AI art" } },

  { slug: "ai-logo-design-tools", cat: "image", read: 6, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI Logo 设计工具盘点：免费生成专业品牌标志", en: "AI Logo Design Tools: Generate Professional Brand Marks Free" },
    description: { zh: "主流 AI Logo 设计工具对比：Midjourney、标小智、Looka 等，从提示词到矢量输出的完整流程。", en: "Compare mainstream AI logo tools—Midjourney, Looka, and more—from prompt to vector output." },
    keywords: { zh: "AI Logo设计, 标志生成, 品牌设计AI, 免费Logo", en: "AI logo design, logo generator, brand design AI, free logo" } },

  { slug: "ai-product-photography", cat: "image", read: 7, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 商品摄影：电商主图与场景图生成技巧", en: "AI Product Photography: E-commerce Hero & Scene Images" },
    description: { zh: "用 AI 生成商品图：白底主图、场景图、模特图，省去实体拍摄成本，附电商提示词模板。", en: "Generate product images with AI: white-background heroes, scenes, and model shots—no physical shoot needed." },
    keywords: { zh: "AI商品图, 电商主图, 商品摄影AI, AI模特", en: "AI product image, e-commerce hero, product photography AI, AI model" } },

  { slug: "ai-portrait-avatar-generator", cat: "image", read: 6, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 头像生成器：制作个性化数字分身与职业照", en: "AI Portrait & Avatar Generator: Digital Twins & Pro Headshots" },
    description: { zh: "AI 头像生成教程：写真头像、职业证件照、二次元头像，对比妙鸭、Lensa 等工具的用法与隐私。", en: "AI portrait generation: photoreal avatars, pro headshots, anime avatars—comparing tools and privacy." },
    keywords: { zh: "AI头像, 数字分身, 证件照AI, AI写真", en: "AI avatar, digital twin, headshot AI, AI portrait" } },

  { slug: "ai-poster-design-tutorial", cat: "image", read: 7, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 海报设计教程：活动海报与电商海报一键生成", en: "AI Poster Design: Generate Event & E-commerce Posters" },
    description: { zh: "用 AI 设计海报：排版构图、文字与图像融合、印刷尺寸规范，附 Midjourney+PS 联动工作流。", en: "Design posters with AI: composition, text-image fusion, and print specs with a Midjourney + Photoshop workflow." },
    keywords: { zh: "AI海报设计, 海报生成, 活动海报, 电商海报", en: "AI poster design, poster generator, event poster, e-commerce poster" } },

  { slug: "ai-remove-background-batch", cat: "image", read: 5, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 批量抠图工具：一键去除背景的 5 种方法", en: "AI Batch Background Removal: 5 Ways to Cut Out Backgrounds" },
    description: { zh: "AI 抠图工具盘点与对比：remove.bg、Photoshop、美图等，含批量处理、发丝细节与透明背景导出。", en: "Compare AI background-removal tools—remove.bg, Photoshop, and more—including batch processing and hair details." },
    keywords: { zh: "AI抠图, 去除背景, 批量抠图, 透明背景", en: "AI background removal, remove background, batch cutout, transparent background" } },

  { slug: "ai-old-photo-restore-enhance", cat: "image", read: 6, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "老照片 AI 修复与高清放大：让模糊照片变清晰", en: "AI Old Photo Restoration & Upscaling: From Blurry to HD" },
    description: { zh: "用 AI 修复老照片：去划痕、上色、人脸修复与无损放大，对比 GFPGAN、Topaz 等工具效果。", en: "Restore old photos with AI: scratch removal, colorization, face repair, and lossless upscaling compared across tools." },
    keywords: { zh: "AI修复照片, 老照片修复, 照片放大, 照片上色", en: "AI photo restoration, old photo repair, photo upscale, photo colorize" } },

  { slug: "ai-image-prompt-templates", cat: "image", read: 8, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 绘画提示词模板库：50 个即用场景关键词", en: "AI Art Prompt Library: 50 Ready-to-Use Scene Keywords" },
    description: { zh: "AI 绘画提示词万能公式：主体+风格+光影+构图+参数，附 50 个场景化关键词与负面提示词清单。", en: "A universal AI art prompt formula—subject + style + lighting + composition—with 50 scene keywords and negative prompts." },
    keywords: { zh: "AI绘画提示词, 绘画关键词, prompt模板, MJ提示词", en: "AI art prompt, art keywords, prompt template, MJ prompts" } },

  { slug: "ai-interior-design-rendering", cat: "image", read: 7, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 室内设计效果图：毛坯房一键生成装修方案", en: "AI Interior Design Rendering: Turn Empty Rooms into Designs" },
    description: { zh: "用 AI 生成室内效果图：线稿转渲染、风格迁移、家具搭配，对比 Coohom、Stable Diffusion 工作流。", en: "Generate interior renders with AI: sketch-to-render, style transfer, and furniture matching across Coohom and SD." },
    keywords: { zh: "AI室内设计, 效果图生成, 装修AI, 室内渲染", en: "AI interior design, render generation, renovation AI, interior rendering" } },

  { slug: "ai-illustration-for-blog", cat: "image", read: 6, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 插画配图：为博客和公众号生成专属插图", en: "AI Illustrations: Custom Artwork for Blogs & WeChat" },
    description: { zh: "用 AI 为文章生成统一风格插画：风格关键词、批量出图、版权注意事项，提升内容视觉质感。", en: "Generate consistent-style illustrations for articles: style keywords, batch generation, and copyright tips." },
    keywords: { zh: "AI插画, 文章配图, 博客插图, AI插图", en: "AI illustration, article images, blog artwork, AI artwork" } },

  { slug: "ai-image-upscale-4k", cat: "image", read: 5, date: "2026-06-14",
    cover: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 图片放大工具：无损放大到 4K 的最佳方案", en: "AI Image Upscaler: Best Lossless Solutions to 4K" },
    description: { zh: "AI 图片放大工具对比：Topaz、Upscayl、Real-ESRGAN，分析放大算法、速度与画质损失。", en: "Compare AI upscalers—Topaz, Upscayl, Real-ESRGAN—on algorithm, speed, and quality retention." },
    keywords: { zh: "AI图片放大, 无损放大, 4K放大, 图片清晰化", en: "AI image upscale, lossless upscale, 4K upscale, image enhancer" } },

  { slug: "ai-meme-generator", cat: "image", read: 5, date: "2026-06-13",
    cover: "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 表情包生成器：自制爆款表情包与梗图", en: "AI Meme Generator: Make Viral Memes & Stickers" },
    description: { zh: "用 AI 批量制作表情包：文案梗、角色一致、GIF 动图与商用版权，适合社群运营和个人娱乐。", en: "Batch-create memes with AI: text gags, character consistency, GIFs, and commercial licensing for community ops." },
    keywords: { zh: "AI表情包, 表情包生成, 梗图制作, AI贴纸", en: "AI meme, meme generator, meme maker, AI sticker" } },

  { slug: "ai-architecture-rendering", cat: "image", read: 7, date: "2026-06-12",
    cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 建筑效果图渲染：从草图到照片级效果图", en: "AI Architecture Rendering: From Sketch to Photoreal" },
    description: { zh: "用 AI 生成建筑效果图：体块草图转渲染、夜景日景、材质替换，赋能建筑设计与方案汇报。", en: "Generate architecture renders with AI: massing-to-render, day/night, and material swap for design proposals." },
    keywords: { zh: "AI建筑效果图, 建筑渲染, 草图转渲染, 建筑AI", en: "AI architecture render, architecture rendering, sketch to render, architecture AI" } },

  /* ============ video: AI 视频制作 (12) ============ */
  { slug: "ai-text-to-video-sora", cat: "video", read: 9, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "Sora 文生视频实测：提示词写法与效果对比", en: "Sora Text-to-Video Tested: Prompting & Results Compared" },
    description: { zh: "OpenAI Sora 文生视频教程：提示词结构、镜头语言、时长控制与多场景实测效果对比。", en: "An OpenAI Sora tutorial: prompt structure, camera language, duration control, and multi-scenario comparisons." },
    keywords: { zh: "Sora教程, 文生视频, AI视频生成, Sora提示词", en: "Sora tutorial, text to video, AI video generation, Sora prompts" } },

  { slug: "ai-short-video-production", cat: "video", read: 8, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 短视频制作全流程：从脚本到成片 1 小时搞定", en: "AI Short Video Production: Script to Final Cut in 1 Hour" },
    description: { zh: "AI 短视频制作工作流：脚本、配音、字幕、剪辑、配乐一站式工具链，适合自媒体批量出片。", en: "An AI short-video workflow: script, voiceover, subtitles, editing, and music for batch content creation." },
    keywords: { zh: "AI短视频制作, 视频自动化, AI剪辑, 短视频工具链", en: "AI short video, video automation, AI editing, video toolchain" } },

  { slug: "ai-video-dubbing-subtitle", cat: "video", read: 6, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 视频配音与字幕：自动生成多语言字幕", en: "AI Video Dubbing & Subtitles: Auto-Generate Multilingual Captions" },
    description: { zh: "用 AI 给视频自动加字幕和配音：语音识别、翻译、TTS 配音与口型同步，对比主流工具效果。", en: "Auto-add subtitles and dubbing with AI: ASR, translation, TTS, and lip sync compared across mainstream tools." },
    keywords: { zh: "AI配音, 视频字幕, 自动字幕, AI翻译配音", en: "AI dubbing, video subtitles, auto captions, AI translation dubbing" } },

  { slug: "kling-ai-video-guide", cat: "video", read: 7, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "可灵 AI 视频生成教程：图生视频与文生视频", en: "Kling AI Video Guide: Image-to-Video & Text-to-Video" },
    description: { zh: "快手可灵 AI 视频生成教程：图生视频、文生视频、运镜控制与角色一致性技巧，附提示词案例。", en: "A Kling AI tutorial: image-to-video, text-to-video, camera control, and character consistency with prompt examples." },
    keywords: { zh: "可灵AI, Kling教程, 图生视频, AI视频生成", en: "Kling AI, Kling tutorial, image to video, AI video generation" } },

  { slug: "ai-face-swap-video", cat: "video", read: 6, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 视频换脸技术与合规使用边界", en: "AI Video Face Swap: Technology & Legal Boundaries" },
    description: { zh: "AI 视频换脸技术原理与工具：DeepFaceLab、Roop，重点讲解授权与合规风险，避免法律问题。", en: "AI face-swap tools and principles—DeepFaceLab, Roop—focusing on authorization and legal risks." },
    keywords: { zh: "AI换脸, 视频换脸, deepfake, 换脸合规", en: "AI face swap, video face swap, deepfake, face swap legal" } },

  { slug: "ai-video-editor-tools", cat: "video", read: 7, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 视频剪辑工具盘点：自动粗剪、智能去杂物", en: "AI Video Editors: Auto Rough Cut & Object Removal" },
    description: { zh: "AI 视频剪辑工具对比：Premiere AI、剪映、Descript，自动去口癖、智能字幕与一键成片功能。", en: "Compare AI video editors—Premiere AI, CapCut, Descript—on filler-word removal, smart subtitles, and auto-edit." },
    keywords: { zh: "AI视频剪辑, 智能剪辑, 自动剪辑, 视频编辑AI", en: "AI video editing, smart editing, auto editing, video editor AI" } },

  { slug: "ai-animated-explainer-video", cat: "video", read: 8, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 动画解说视频制作：科普与产品演示一键生成", en: "AI Animated Explainer Videos: Explainer & Demo Generation" },
    description: { zh: "用 AI 制作动画解说视频：分镜脚本、AI 配音、动态图形与模板套用，降低动画制作门槛。", en: "Make animated explainer videos with AI: storyboard scripts, AI voiceover, motion graphics, and templates." },
    keywords: { zh: "AI动画视频, 解说视频, 动画制作AI, MG动画", en: "AI animation video, explainer video, animation AI, motion graphics" } },

  { slug: "ai-virtual-anchor-livestream", cat: "video", read: 7, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 虚拟主播搭建：24 小时无人直播带货方案", en: "AI Virtual Anchor: 24/7 Unmanned Livestream Commerce" },
    description: { zh: "AI 虚拟主播搭建教程：数字人形象、TTS 语音、直播脚本与平台规则，实现无人值守直播。", en: "Build an AI virtual anchor: digital human, TTS voice, livestream scripts, and platform rules for unmanned streaming." },
    keywords: { zh: "AI虚拟主播, 数字人直播, 无人直播, 虚拟主播", en: "AI virtual anchor, digital human livestream, unmanned livestream, virtual anchor" } },

  { slug: "ai-video-style-transfer", cat: "video", read: 6, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 视频风格迁移：把实拍视频变成动漫风格", en: "AI Video Style Transfer: Turn Live Footage into Anime" },
    description: { zh: "AI 视频风格迁移教程：实拍转动漫、油画风格、赛博朋克，对比 DomoAI、Stable Video 工具效果。", en: "AI video style transfer: live-to-anime, oil painting, and cyberpunk compared across DomoAI and Stable Video." },
    keywords: { zh: "AI风格迁移, 视频转动漫, 视频风格化, AI视频特效", en: "AI style transfer, video to anime, video stylize, AI video effect" } },

  { slug: "ai-music-video-generator", cat: "video", read: 7, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI MV 制作：自动生成音乐与画面对应的 MV", en: "AI Music Video Generator: Auto-Sync Music & Visuals" },
    description: { zh: "用 AI 制作 MV：AI 作曲、歌词生成、画面与节拍同步、视觉风格统一，独立音乐人工作流。", en: "Produce MVs with AI: AI composition, lyric generation, beat-synced visuals, and unified style for indie musicians." },
    keywords: { zh: "AI MV制作, 音乐视频AI, AI作曲, MV生成", en: "AI music video, AI MV, AI composition, MV generator" } },

  { slug: "ai-video-enhance-upscale", cat: "video", read: 6, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 视频画质增强：模糊视频转 4K 与补帧", en: "AI Video Enhancement: Upscale Blurry Video to 4K & Interpolate" },
    description: { zh: "AI 视频画质增强工具：超分辨率放大、智能补帧、去噪与修复，对比 Topaz Video AI 效果。", en: "AI video enhancement tools: super-resolution upscaling, frame interpolation, and denoising compared with Topaz." },
    keywords: { zh: "AI视频增强, 视频放大, 视频补帧, 画质提升", en: "AI video enhance, video upscale, frame interpolation, video quality" } },

  { slug: "ai-video-thumbnail-generator", cat: "video", read: 5, date: "2026-06-14",
    cover: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 视频封面生成：高点击率缩略图设计技巧", en: "AI Video Thumbnail Generator: High-CTR Thumbnail Design" },
    description: { zh: "用 AI 生成视频封面缩略图：表情夸张、文字醒目、色彩对比，提升 YouTube/B 站点击率。", en: "Generate video thumbnails with AI: expressive faces, bold text, and contrast to lift YouTube/Bilibili CTR." },
    keywords: { zh: "AI视频封面, 缩略图设计, 视频封面, 高点击封面", en: "AI video thumbnail, thumbnail design, video cover, high CTR thumbnail" } },

  /* ============ coding: AI 编程开发 (13) ============ */
  { slug: "cursor-ai-code-editor-review", cat: "coding", read: 8, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "Cursor AI 代码编辑器深度评测：真比 VSCode 好用？", en: "Cursor AI Code Editor Review: Better Than VSCode?" },
    description: { zh: "Cursor AI 编辑器深度评测：Composer 多文件编辑、代码库理解、与 VSCode + Copilot 对比实测。", en: "A deep Cursor review: Composer multi-file edits, codebase understanding, and a head-to-head with VSCode + Copilot." },
    keywords: { zh: "Cursor AI, AI代码编辑器, Cursor评测, Cursor vs VSCode", en: "Cursor AI, AI code editor, Cursor review, Cursor vs VSCode" } },

  { slug: "github-copilot-tips", cat: "coding", read: 7, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "GitHub Copilot 高效使用技巧：注释驱动编程", en: "GitHub Copilot Tips: Comment-Driven Programming" },
    description: { zh: "GitHub Copilot 进阶技巧：注释驱动、上下文引导、Tab 接受与多行补全，提升编码效率 2 倍。", en: "Advanced GitHub Copilot tips: comment-driven dev, context guiding, and multi-line completion to 2x productivity." },
    keywords: { zh: "GitHub Copilot, Copilot技巧, AI编程, 代码补全", en: "GitHub Copilot, Copilot tips, AI coding, code completion" } },

  { slug: "claude-code-terminal-agent", cat: "coding", read: 8, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "Claude Code 终端 Agent 实战：命令行自动化编程", en: "Claude Code Terminal Agent: CLI Automated Coding" },
    description: { zh: "Claude Code 命令行 Agent 教程：项目理解、多文件重构、Git 操作与自动化任务实战。", en: "A Claude Code CLI agent tutorial: project understanding, multi-file refactors, Git ops, and automation." },
    keywords: { zh: "Claude Code, 终端Agent, AI命令行, 自动化编程", en: "Claude Code, terminal agent, AI CLI, automated coding" } },

  { slug: "ai-debug-code-ai-tools", cat: "coding", read: 6, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 调试代码：5 个工具帮你快速定位 Bug", en: "AI Debugging: 5 Tools to Locate Bugs Fast" },
    description: { zh: "用 AI 调试代码：错误日志分析、堆栈解读、复现最小用例与修复建议，对比主流 AI 调试工具。", en: "Debug code with AI: error log analysis, stack traces, minimal repro, and fix suggestions compared across tools." },
    keywords: { zh: "AI调试代码, AI找bug, 代码调试AI, AI debug", en: "AI debugging, AI find bug, code debug AI, AI debug" } },

  { slug: "ai-web-scraping-tutorial", cat: "coding", read: 7, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "用 AI 写爬虫：自然语言生成网页数据采集脚本", en: "Write Web Scrapers with AI: NL to Scraping Scripts" },
    description: { zh: "用 AI 辅助写爬虫：选择器生成、反爬绕过、数据清洗与合规边界，附 Python 爬虫提示词。", en: "Write scrapers with AI: selector generation, anti-bot bypass, and data cleaning with Python prompts and legal limits." },
    keywords: { zh: "AI爬虫, 网页采集, Python爬虫AI, 数据抓取", en: "AI scraping, web scraping, Python scraper AI, data extraction" } },

  { slug: "v0-vercel-ui-generator", cat: "coding", read: 6, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "v0.dev UI 生成器：用 AI 一句话生成 React 页面", en: "v0.dev UI Generator: Build React Pages with One Prompt" },
    description: { zh: "Vercel v0 教程：自然语言生成 React + Tailwind 页面、组件迭代与一键部署到 Vercel。", en: "A Vercel v0 tutorial: generate React + Tailwind pages from natural language and deploy to Vercel." },
    keywords: { zh: "v0.dev, AI UI生成, React生成器, v0教程", en: "v0.dev, AI UI generation, React generator, v0 tutorial" } },

  { slug: "ai-unit-test-generation", cat: "coding", read: 6, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1581299882491-61a8d69e4c00?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 自动生成单元测试：覆盖率达 90% 的方法", en: "AI Unit Test Generation: Reaching 90% Coverage" },
    description: { zh: "用 AI 自动生成单元测试：边界用例、Mock 数据、覆盖率分析，对比 Copilot/Cursor 测试效果。", en: "Auto-generate unit tests with AI: edge cases, mocks, and coverage analysis compared across Copilot and Cursor." },
    keywords: { zh: "AI单元测试, 自动测试, 测试覆盖率, AI测试", en: "AI unit test, auto testing, test coverage, AI testing" } },

  { slug: "ai-code-refactoring", cat: "coding", read: 7, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 代码重构：安全优化遗留代码的实战流程", en: "AI Code Refactoring: Safely Modernize Legacy Code" },
    description: { zh: "用 AI 重构遗留代码：识别坏味道、提取函数、设计模式应用，配合测试保证安全重构。", en: "Refactor legacy code with AI: smell detection, function extraction, and patterns with test-guarded safety." },
    keywords: { zh: "AI代码重构, 代码优化, 重构AI, 遗留代码", en: "AI refactoring, code optimization, refactor AI, legacy code" } },

  { slug: "ai-sql-generator-natural-language", cat: "coding", read: 6, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI SQL 生成器：自然语言转 SQL 查询语句", en: "AI SQL Generator: Natural Language to SQL Queries" },
    description: { zh: "用 AI 把自然语言转成 SQL：表结构理解、复杂 JOIN、聚合查询与 SQL 注入防护。", en: "Turn natural language into SQL with AI: schema understanding, complex JOINs, aggregations, and injection safety." },
    keywords: { zh: "AI SQL, 自然语言转SQL, NL2SQL, AI数据库", en: "AI SQL, NL to SQL, NL2SQL, AI database" } },

  { slug: "ai-api-documentation-generator", cat: "coding", read: 5, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 自动生成 API 文档与代码注释", en: "AI API Docs & Code Comment Generator" },
    description: { zh: "用 AI 自动生成代码文档：函数注释、API 接口文档、README 与示例代码，提升协作效率。", en: "Auto-generate docs with AI: function comments, API docs, READMEs, and examples for better collaboration." },
    keywords: { zh: "AI文档生成, API文档, 代码注释, 自动文档", en: "AI doc generation, API docs, code comments, auto documentation" } },

  { slug: "ai-learn-programming-fast", cat: "coding", read: 7, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "零基础用 AI 学编程：3 个月转行开发指南", en: "Learn Programming with AI: A 3-Month Career Switch Guide" },
    description: { zh: "零基础用 AI 辅助学编程：学习路径、项目实战、AI 答疑与求职准备，3 个月转行指南。", en: "Learn to code with AI from scratch: learning paths, projects, AI tutoring, and job prep in 3 months." },
    keywords: { zh: "AI学编程, 零基础编程, 转行开发, 编程学习AI", en: "AI learn programming, beginner coding, career switch, coding AI" } },

  { slug: "ai-no-code-app-builder", cat: "coding", read: 7, date: "2026-06-14",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 无代码建站工具：用对话搭建完整应用", en: "AI No-Code App Builder: Build Apps by Conversation" },
    description: { zh: "AI 无代码平台对比：Bolt.new、Lovable、Replit Agent，用对话从零搭建可部署的完整应用。", en: "Compare AI no-code platforms—Bolt.new, Lovable, Replit Agent—to build deployable apps via conversation." },
    keywords: { zh: "AI无代码, 无代码建站, AI建应用, 对话编程", en: "AI no-code, no-code builder, AI app builder, conversational coding" } },

  { slug: "ai-deploy-app-vercel", cat: "coding", read: 6, date: "2026-06-13",
    cover: "https://images.unsplash.com/photo-1556075798-4825dfaaf0fc?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "用 AI 一键部署应用：Vercel + GitHub 全流程", en: "Deploy Apps with AI: Vercel + GitHub End-to-End" },
    description: { zh: "用 AI 辅助部署应用：环境配置、CI/CD、域名绑定与 Serverless 函数，零运维上线。", en: "Deploy apps with AI: env config, CI/CD, domain binding, and serverless functions—zero-ops launch." },
    keywords: { zh: "AI部署, Vercel部署, 一键部署, CI/CD", en: "AI deploy, Vercel deploy, one-click deploy, CI/CD" } },

  /* ============ office: AI 办公效率 (13) ============ */
  { slug: "ai-ppt-generator-tools", cat: "office", read: 8, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI PPT 生成工具：一键生成专业演示文稿", en: "AI PPT Generator: Create Professional Decks in One Click" },
    description: { zh: "AI PPT 工具对比：Gamma、AiPPT、美图，从大纲到排版一键生成，附商务 PPT 提示词模板。", en: "Compare AI PPT tools—Gamma, AiPPT—generating decks from outlines with business prompt templates." },
    keywords: { zh: "AI PPT, PPT生成器, 一键PPT, AI演示文稿", en: "AI PPT, PPT generator, one-click PPT, AI presentation" } },

  { slug: "ai-excel-formula-generator", cat: "office", read: 6, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI Excel 公式生成器：自然语言写复杂公式", en: "AI Excel Formula Generator: Formulas from Natural Language" },
    description: { zh: "用 AI 写 Excel 公式：VLOOKUP、数据透视、条件格式，自然语言描述需求即可生成公式。", en: "Write Excel formulas with AI: VLOOKUP, pivots, and conditional formatting from plain-language requests." },
    keywords: { zh: "AI Excel, Excel公式, 公式生成器, AI表格", en: "AI Excel, Excel formula, formula generator, AI spreadsheet" } },

  { slug: "ai-meeting-notes-transcription", cat: "office", read: 6, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 会议纪要：自动转录与总结会议要点", en: "AI Meeting Notes: Auto-Transcribe & Summarize Meetings" },
    description: { zh: "用 AI 自动生成会议纪要：实时转录、发言人识别、要点提炼与待办提取，对比飞书/Otter。", en: "Auto-generate meeting notes with AI: live transcription, speaker ID, and action items compared across tools." },
    keywords: { zh: "AI会议纪要, 会议转录, 会议总结AI, AI记录", en: "AI meeting notes, meeting transcription, meeting summary AI, AI minutes" } },

  { slug: "ai-document-summarizer", cat: "office", read: 5, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 文档摘要工具：百页 PDF 一键提炼重点", en: "AI Document Summarizer: Distill 100-Page PDFs in One Click" },
    description: { zh: "用 AI 总结长文档：PDF/Word/PPT 摘要、关键句提取与多文档对比，提升阅读效率 10 倍。", en: "Summarize long docs with AI: PDF/Word/PPT summaries and key-sentence extraction for 10x faster reading." },
    keywords: { zh: "AI文档摘要, PDF总结, 文档提炼, AI阅读", en: "AI document summary, PDF summary, document distillation, AI reading" } },

  { slug: "ai-mind-map-generator", cat: "office", read: 5, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1507925921958-8a62f3d1aad9?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 思维导图生成：一键把文章转成结构图", en: "AI Mind Map Generator: Turn Articles into Diagrams" },
    description: { zh: "用 AI 自动生成思维导图：从文本/语音提炼层级结构，对比 XMind AI、ProcessOn 工具。", en: "Auto-generate mind maps with AI: extract hierarchy from text/speech compared across XMind AI and ProcessOn." },
    keywords: { zh: "AI思维导图, 导图生成, 脑图AI, 结构化思考", en: "AI mind map, mind map generator, mind map AI, structured thinking" } },

  { slug: "ai-data-entry-automation", cat: "office", read: 6, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 数据录入自动化：发票票据批量识别录入", en: "AI Data Entry Automation: Batch OCR for Invoices & Receipts" },
    description: { zh: "用 AI 自动录入数据：OCR 票据识别、表单提取、Excel 自动填充，解放重复劳动。", en: "Automate data entry with AI: OCR receipt recognition, form extraction, and Excel auto-fill to end manual labor." },
    keywords: { zh: "AI数据录入, OCR识别, 票据录入, 自动录入", en: "AI data entry, OCR recognition, receipt entry, auto entry" } },

  { slug: "ai-schedule-time-management", cat: "office", read: 6, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 日程管理：智能排程与时间块规划助手", en: "AI Schedule Management: Smart Scheduling & Time Blocking" },
    description: { zh: "用 AI 管理日程：智能排程、会议协调、优先级排序与时间块规划，提升时间利用率。", en: "Manage schedules with AI: smart scheduling, meeting coordination, and time blocking for better productivity." },
    keywords: { zh: "AI日程管理, 智能排程, 时间管理AI, AI助理", en: "AI schedule, smart scheduling, time management AI, AI assistant" } },

  { slug: "ai-translate-document-word", cat: "office", read: 5, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 整篇文档翻译：Word/PDF 保留排版无损翻译", en: "AI Full-Document Translation: Layout-Preserved Word/PDF" },
    description: { zh: "用 AI 翻译整篇文档：保留 Word/PDF 原排版、术语库与风格一致，对比 DeepL、沉浸式翻译。", en: "Translate full documents with AI: preserve Word/PDF layout, term bases, and consistency across DeepL and immersive tools." },
    keywords: { zh: "AI文档翻译, Word翻译, PDF翻译, 保留排版", en: "AI document translation, Word translation, PDF translation, layout preserved" } },

  { slug: "ai-customer-service-bot", cat: "office", read: 7, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 智能客服搭建：零代码构建企业知识库问答", en: "AI Customer Service Bot: Zero-Code Knowledge Base Q&A" },
    description: { zh: "零代码搭建 AI 客服：知识库导入、意图识别、多轮对话与人工转接，对比 Dify、FastGPT。", en: "Build an AI chatbot with zero code: knowledge base import, intent recognition, and human handoff via Dify/FastGPT." },
    keywords: { zh: "AI客服, 智能客服, 知识库问答, AI客服机器人", en: "AI customer service, smart chatbot, knowledge base Q&A, AI support bot" } },

  { slug: "ai-extract-table-from-pdf", cat: "office", read: 5, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 提取 PDF 表格：扫描报表转 Excel 可编辑", en: "AI PDF Table Extraction: Scanned Reports to Editable Excel" },
    description: { zh: "用 AI 从 PDF/图片提取表格：识别表格结构、合并单元格、输出 Excel，财务报表处理利器。", en: "Extract tables from PDF/images with AI: recognize structure, merged cells, and export Excel for finance teams." },
    keywords: { zh: "AI提取表格, PDF转Excel, 表格识别, OCR表格", en: "AI table extraction, PDF to Excel, table recognition, OCR table" } },

  { slug: "ai-write-report-automation", cat: "office", read: 7, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 自动写报告：周报月报数据分析一键生成", en: "AI Report Automation: Weekly/Monthly Reports in One Click" },
    description: { zh: "用 AI 自动生成工作报告：数据汇总、图表生成、结论提炼，周报月报不再加班。", en: "Auto-generate work reports with AI: data aggregation, charts, and conclusions—no more overtime on reports." },
    keywords: { zh: "AI写报告, 自动报告, 周报AI, 月报生成", en: "AI report writing, auto report, weekly report AI, monthly report" } },

  { slug: "ai-presentation-coach", cat: "office", read: 6, date: "2026-06-14",
    cover: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 演讲教练：模拟提问与表达改进反馈", en: "AI Presentation Coach: Mock Q&A and Delivery Feedback" },
    description: { zh: "用 AI 提升演讲：模拟观众提问、语速语调分析、表达精炼与紧张克服，演讲前必备练习。", en: "Improve presentations with AI: mock audience questions, pacing analysis, and delivery refinement." },
    keywords: { zh: "AI演讲教练, 演讲训练, 表达提升, AI演讲", en: "AI presentation coach, speech training, delivery improvement, AI speech" } },

  { slug: "ai-meeting-scheduling-assistant", cat: "office", read: 5, date: "2026-06-13",
    cover: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 会议邀约助手：自动协调多方日程与场地", en: "AI Meeting Scheduler: Auto-Coordinate Calendars & Rooms" },
    description: { zh: "用 AI 自动协调会议：跨人日程比对、时区换算、会议室预订与冲突提醒，告别来回拉扯。", en: "Auto-coordinate meetings with AI: cross-calendar matching, timezone conversion, room booking, and conflict alerts." },
    keywords: { zh: "AI会议邀约, 日程协调, 会议预订, 智能排会", en: "AI meeting scheduler, calendar coordination, meeting booking, smart scheduling" } },

  /* ============ audio: AI 音频语音 (11) ============ */
  { slug: "ai-tts-text-to-speech-best", cat: "audio", read: 7, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 文字转语音 TTS 工具：最自然的配音方案", en: "AI Text-to-Speech Tools: The Most Natural Voiceover" },
    description: { zh: "AI TTS 工具对比：微软 Azure、ElevenLabs、字节火山，音色自然度、多语种与情感表达实测。", en: "Compare AI TTS tools—Azure, ElevenLabs, Volcengine—on naturalness, multilingual support, and emotion." },
    keywords: { zh: "AI配音, 文字转语音, TTS, AI语音", en: "AI voiceover, text to speech, TTS, AI voice" } },

  { slug: "ai-voice-clone-3-seconds", cat: "audio", read: 6, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 语音克隆：3 秒音频复刻任意人声（含合规）", en: "AI Voice Cloning: Replicate Any Voice in 3 Seconds (+Legal)" },
    description: { zh: "AI 语音克隆教程：GPT-SoVITS、CosyVoice，3 秒样本复刻音色，重点讲解授权与反诈骗合规。", en: "AI voice cloning tutorial: GPT-SoVITS and CosyVoice with a focus on authorization and anti-fraud compliance." },
    keywords: { zh: "AI语音克隆, 声音克隆, voice clone, 克隆人声", en: "AI voice clone, voice cloning, voice clone, clone voice" } },

  { slug: "ai-music-suno-generation", cat: "audio", read: 7, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "Suno AI 作曲教程：一句话生成带人声的完整歌曲", en: "Suno AI Music: Generate Full Songs with Vocals in One Prompt" },
    description: { zh: "Suno AI 作曲教程：风格描述、歌词结构、人声与编曲控制，附爆款歌曲提示词案例。", en: "A Suno AI tutorial: style description, lyric structure, and vocal/arrangement control with prompt examples." },
    keywords: { zh: "Suno, AI作曲, AI音乐, AI生成歌曲", en: "Suno, AI music composition, AI music, AI song generation" } },

  { slug: "ai-podcast-production-workflow", cat: "audio", read: 7, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1598488035136-b29b885922eb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 播客制作工作流：单人即可产出专业播客", en: "AI Podcast Production: Pro Podcasts by a Solo Creator" },
    description: { zh: "用 AI 制作播客：选题脚本、双人对话 TTS、降噪与章节标注，单人完成专业播客制作。", en: "Produce podcasts with AI: topic scripts, two-voice TTS, noise reduction, and chapter markers—solo." },
    keywords: { zh: "AI播客, 播客制作, AI音频, 播客工作流", en: "AI podcast, podcast production, AI audio, podcast workflow" } },

  { slug: "ai-audio-noise-reduction", cat: "audio", read: 5, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 音频降噪：去除录音底噪与人声分离", en: "AI Audio Noise Reduction: Remove Hiss & Separate Vocals" },
    description: { zh: "AI 音频降噪工具：Adobe Podcast、RX，去除环境噪声、人声分离与回声消除，提升录音质量。", en: "AI noise reduction tools: Adobe Podcast and RX for environment noise, vocal separation, and echo removal." },
    keywords: { zh: "AI降噪, 音频降噪, 人声分离, 去底噪", en: "AI noise reduction, audio denoise, vocal separation, remove hiss" } },

  { slug: "ai-speech-to-text-transcription", cat: "audio", read: 6, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1556075798-4825dfaaf0fc?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 语音转文字：高准确率会议课程转录", en: "AI Speech-to-Text: High-Accuracy Meeting & Lecture Transcription" },
    description: { zh: "AI 语音转文字工具对比：Whisper、讯飞、通义，长音频转录、标点恢复与术语优化。", en: "Compare AI speech-to-text tools—Whisper, iFlytek, Tongyi—on long-audio transcription and punctuation." },
    keywords: { zh: "AI语音转文字, 语音识别, ASR, 会议转录", en: "AI speech to text, speech recognition, ASR, meeting transcription" } },

  { slug: "ai-singing-voice-synthesis", cat: "audio", read: 6, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 歌声音色合成：AI 翻唱与虚拟歌手制作", en: "AI Singing Synthesis: AI Covers & Virtual Singers" },
    description: { zh: "AI 歌声合成教程：DiffSinger、So-VITS，制作 AI 翻唱与虚拟歌手，含版权与授权说明。", en: "An AI singing synthesis tutorial: DiffSinger and So-VITS for covers and virtual singers with copyright notes." },
    keywords: { zh: "AI翻唱, 虚拟歌手, 歌声合成, AI唱歌", en: "AI cover, virtual singer, singing synthesis, AI singing" } },

  { slug: "ai-audio-translation-dubbing", cat: "audio", read: 6, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 音频翻译配音：播客视频一键多语言", en: "AI Audio Translation & Dubbing: One-Click Multilingual" },
    description: { zh: "用 AI 翻译并配音音频：保留说话人音色、情感迁移与多语言批量输出，跨境内容利器。", en: "Translate and dub audio with AI: preserve speaker timbre, emotion transfer, and batch multilingual output." },
    keywords: { zh: "AI音频翻译, 配音翻译, 多语言配音, AI译制", en: "AI audio translation, dubbing translation, multilingual dubbing, AI localization" } },

  { slug: "ai-sound-effect-generator", cat: "audio", read: 5, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1598488035136-b29b885922eb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 音效生成器：为视频游戏生成专属音效", en: "AI Sound Effect Generator: Custom SFX for Video & Games" },
    description: { zh: "用 AI 生成音效：环境音、拟音、UI 音效与循环音，对比 ElevenLabs SFX、Stable Audio。", en: "Generate sound effects with AI: ambience, Foley, UI sounds, and loops compared across ElevenLabs and Stable Audio." },
    keywords: { zh: "AI音效, 音效生成, SFX AI, 环境音", en: "AI sound effect, SFX generator, SFX AI, ambience" } },

  { slug: "ai-phone-call-agent", cat: "audio", read: 7, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 电话外呼 Agent：智能语音客服与销售", en: "AI Phone Call Agent: Smart Voice Support & Sales" },
    description: { zh: "AI 电话 Agent 搭建：实时对话、意图识别、CRM 对接与合规外呼，赋能客服与电销。", en: "Build AI phone agents: real-time dialogue, intent recognition, CRM integration, and compliant outbound calls." },
    keywords: { zh: "AI电话, 语音外呼, AI外呼, 智能客服", en: "AI phone, voice outbound, AI calling, smart support" } },

  { slug: "ai-mastering-loudness", cat: "audio", read: 6, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1598488035136-b29b885922eb?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 音频母带处理：自动响度均衡与音质优化", en: "AI Audio Mastering: Auto Loudness & Quality Enhancement" },
    description: { zh: "用 AI 做母带处理：响度均衡、频段修复、立体声增强，对比 LANDR、eMastered 自动母带。", en: "Master audio with AI: loudness balancing, spectral repair, and stereo enhancement vs LANDR and eMastered." },
    keywords: { zh: "AI母带, 音频母带, 响度均衡, AI混音", en: "AI mastering, audio mastering, loudness normalization, AI mixing" } },

  /* ============ marketing: AI 营销获客 (11) ============ */
  { slug: "ai-marketing-strategy-framework", cat: "marketing", read: 8, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 营销策略框架：从市场洞察到投放优化全链路", en: "AI Marketing Strategy: Insight to Ad Optimization" },
    description: { zh: "AI 营销策略框架：市场洞察、用户画像、内容生产与投放优化，构建数据驱动营销闭环。", en: "An AI marketing framework: market insight, personas, content production, and ad optimization in a closed loop." },
    keywords: { zh: "AI营销, 营销策略, AI市场洞察, 智能营销", en: "AI marketing, marketing strategy, AI market insight, smart marketing" } },

  { slug: "ai-social-media-content-calendar", cat: "marketing", read: 7, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 社交媒体内容日历：一键生成月度内容排期", en: "AI Social Media Calendar: Monthly Content in One Click" },
    description: { zh: "用 AI 规划社媒内容：选题日历、跨平台改编、热点追踪与发布排期，运营效率翻倍。", en: "Plan social content with AI: topic calendars, cross-platform adaptation, and trend tracking." },
    keywords: { zh: "AI社媒运营, 内容日历, 内容排期, AI运营", en: "AI social media, content calendar, content scheduling, AI operations" } },

  { slug: "ai-seo-keyword-research", cat: "marketing", read: 7, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1432888622747-4eb9a8efebc3?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 关键词研究：挖掘高价值长尾词与选题", en: "AI Keyword Research: Mine High-Value Long-Tail Terms" },
    description: { zh: "用 AI 做 SEO 关键词研究：长尾词挖掘、搜索意图分析、竞品词库与内容选题批量生成。", en: "Do SEO keyword research with AI: long-tail mining, intent analysis, competitor terms, and topic generation." },
    keywords: { zh: "AI关键词, SEO关键词研究, 长尾词, 关键词挖掘", en: "AI keywords, SEO keyword research, long-tail, keyword mining" } },

  { slug: "ai-ad-creative-ab-testing", cat: "marketing", read: 6, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 广告素材 A/B 测试：批量生成与效果预测", en: "AI Ad Creative A/B Testing: Batch Generation & Prediction" },
    description: { zh: "用 AI 做广告 A/B 测试：素材批量变体、效果预测、自动优胜筛选，降低测试成本。", en: "Run ad A/B tests with AI: batch variants, performance prediction, and auto winner selection to cut costs." },
    keywords: { zh: "AI广告测试, A/B测试, 广告素材, 效果预测", en: "AI ad testing, A/B testing, ad creative, performance prediction" } },

  { slug: "ai-user-persona-generator", cat: "marketing", read: 6, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 用户画像生成：精准刻画目标客户画像", en: "AI User Persona Generator: Precise Customer Profiles" },
    description: { zh: "用 AI 生成用户画像：人口属性、行为偏好、痛点场景与购买动机，支撑精准营销决策。", en: "Generate user personas with AI: demographics, behavior, pain points, and motivation for precise marketing." },
    keywords: { zh: "AI用户画像, 客户画像, persona, 用户分群", en: "AI persona, customer persona, persona, user segmentation" } },

  { slug: "ai-influencer-outreach", cat: "marketing", read: 6, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 达人种草：批量筛选 KOL 与个性化邀约", en: "AI Influencer Outreach: Batch KOL Screening & Outreach" },
    description: { zh: "用 AI 做达人营销：KOL 数据筛选、粉丝质量分析、个性化邀约文案与效果追踪。", en: "Do influencer marketing with AI: KOL screening, audience analysis, personalized outreach, and tracking." },
    keywords: { zh: "AI达人营销, KOL筛选, 种草AI, 达人邀约", en: "AI influencer, KOL screening, seeding AI, influencer outreach" } },

  { slug: "ai-email-marketing-personalization", cat: "marketing", read: 7, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 邮件营销个性化：千人千面的 EDM 方案", en: "AI Email Marketing Personalization: 1-to-1 EDM" },
    description: { zh: "用 AI 做邮件营销个性化：分群、主题行优化、发送时机与千人千面内容生成。", en: "Personalize email marketing with AI: segmentation, subject lines, send timing, and 1-to-1 content." },
    keywords: { zh: "AI邮件营销, EDM个性化, 邮件分群, 营销自动化", en: "AI email marketing, EDM personalization, email segmentation, marketing automation" } },

  { slug: "ai-brand-storytelling", cat: "marketing", read: 6, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 品牌故事创作：构建有温度的品牌叙事", en: "AI Brand Storytelling: Building Emotional Brand Narratives" },
    description: { zh: "用 AI 创作品牌故事：品牌定位、英雄之旅框架、情感共鸣点与跨渠道叙事一致性。", en: "Craft brand stories with AI: positioning, hero's journey, emotional hooks, and cross-channel consistency." },
    keywords: { zh: "AI品牌故事, 品牌叙事, 品牌定位, 内容营销", en: "AI brand story, brand narrative, brand positioning, content marketing" } },

  { slug: "ai-competitor-analysis", cat: "marketing", read: 6, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 竞品分析：自动监测竞品动态与策略反推", en: "AI Competitor Analysis: Monitor & Reverse-Engineer Rivals" },
    description: { zh: "用 AI 做竞品分析：动态监测、产品功能对比、定价策略与营销动作反推，附分析框架。", en: "Analyze competitors with AI: monitoring, feature comparison, pricing, and marketing reverse-engineering." },
    keywords: { zh: "AI竞品分析, 竞品监测, 竞争分析, 市场情报", en: "AI competitor analysis, competitor monitoring, competitive analysis, market intelligence" } },

  { slug: "ai-lead-generation-outbound", cat: "marketing", read: 7, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 获客与外呼：B2B 销售线索挖掘自动化", en: "AI Lead Gen & Outbound: Automating B2B Sales Pipelines" },
    description: { zh: "用 AI 做 B2B 获客：线索挖掘、企业画像、个性化触达与意向评分，自动化销售漏斗。", en: "Generate B2B leads with AI: prospecting, firmographics, personalized outreach, and intent scoring." },
    keywords: { zh: "AI获客, B2B线索, 销售自动化, 外呼获客", en: "AI lead gen, B2B leads, sales automation, outbound leads" } },

  { slug: "ai-crm-data-enrichment", cat: "marketing", read: 6, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI CRM 数据补全：自动丰富客户画像字段", en: "AI CRM Data Enrichment: Auto-Fill Customer Profiles" },
    description: { zh: "用 AI 补全 CRM 数据：企业信息抓取、联系人拓展、数据清洗与去重，提升数据质量。", en: "Enrich CRM data with AI: firmographic scraping, contact expansion, deduplication, and cleansing." },
    keywords: { zh: "AI CRM, 数据补全, 客户数据, 数据清洗", en: "AI CRM, data enrichment, customer data, data cleansing" } },

  /* ============ data: AI 数据分析 (11) ============ */
  { slug: "ai-data-analysis-chat-with-data", cat: "data", read: 8, date: "2026-06-25",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 数据分析：上传 Excel 对话式问数与可视化", en: "AI Data Analysis: Chat with Your Excel & Visualize" },
    description: { zh: "用 AI 对话式分析数据：上传表格、自然语言提问、自动生成图表与洞察，对比主流工具。", en: "Analyze data conversationally with AI: upload spreadsheets, ask in natural language, and auto-generate charts." },
    keywords: { zh: "AI数据分析, 对话式分析, Excel分析AI, 数据可视化", en: "AI data analysis, conversational analysis, Excel analysis AI, data visualization" } },

  { slug: "ai-market-research-report", cat: "data", read: 7, date: "2026-06-24",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 市场调研报告：自动生成行业研究报告", en: "AI Market Research: Auto-Generate Industry Reports" },
    description: { zh: "用 AI 生成市场调研报告：数据采集、趋势分析、竞争格局与结论撰写，附报告框架模板。", en: "Generate market research reports with AI: data collection, trend analysis, and competitive landscape." },
    keywords: { zh: "AI市场调研, 行业报告, 市场研究AI, 报告生成", en: "AI market research, industry report, market research AI, report generation" } },

  { slug: "ai-sentiment-analysis-reviews", cat: "data", read: 6, date: "2026-06-23",
    cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 评论情感分析：批量挖掘用户口碑洞察", en: "AI Sentiment Analysis: Mine Insights from Reviews" },
    description: { zh: "用 AI 分析评论情感：正负面识别、话题聚类、痛点提取与竞品口碑对比，赋能产品改进。", en: "Analyze review sentiment with AI: polarity, topic clustering, pain points, and competitor benchmarking." },
    keywords: { zh: "AI情感分析, 评论分析, 口碑分析, NLP情感", en: "AI sentiment analysis, review analysis, reputation analysis, NLP sentiment" } },

  { slug: "ai-sales-forecasting-model", cat: "data", read: 7, date: "2026-06-22",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 销售预测模型：用历史数据预测业绩趋势", en: "AI Sales Forecasting: Predict Revenue from History" },
    description: { zh: "用 AI 做销售预测：时间序列、季节性、影响因素与置信区间，附预测模型搭建步骤。", en: "Forecast sales with AI: time series, seasonality, drivers, and confidence intervals with setup steps." },
    keywords: { zh: "AI销售预测, 业绩预测, 时间序列, 需求预测", en: "AI sales forecasting, revenue forecast, time series, demand forecast" } },

  { slug: "ai-excel-power-query-ai", cat: "data", read: 6, date: "2026-06-21",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI Excel 数据清洗：Power Query + AI 自动化", en: "AI Excel Cleaning: Power Query + AI Automation" },
    description: { zh: "用 AI 加速 Excel 数据清洗：异常值处理、格式统一、合并表格与 Power Query 自动化。", en: "Accelerate Excel cleaning with AI: outlier handling, format unifying, and Power Query automation." },
    keywords: { zh: "AI数据清洗, Excel清洗, Power Query, 数据预处理", en: "AI data cleaning, Excel cleaning, Power Query, data preprocessing" } },

  { slug: "ai-dashboard-auto-build", cat: "data", read: 7, date: "2026-06-20",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 自动生成数据看板：对话式搭建 BI 仪表盘", en: "AI Auto-Build Dashboards: Conversational BI" },
    description: { zh: "用 AI 自动生成数据看板：指标选取、图表推荐、布局优化与洞察标注，对比主流 BI 工具。", en: "Auto-build dashboards with AI: metric selection, chart recommendations, and layout compared across BI tools." },
    keywords: { zh: "AI数据看板, BI仪表盘, 数据可视化AI, 看板生成", en: "AI dashboard, BI dashboard, data visualization AI, dashboard generation" } },

  { slug: "ai-pdf-research-paper-summary", cat: "data", read: 6, date: "2026-06-19",
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 论文速读：批量总结 arXiv 英文论文要点", en: "AI Paper Skimming: Batch-Summarize arXiv Papers" },
    description: { zh: "用 AI 批量总结英文论文：方法、贡献、实验结论提炼，附论文阅读提示词模板。", en: "Batch-summarize English papers with AI: methods, contributions, and conclusions with prompt templates." },
    keywords: { zh: "AI论文速读, 论文总结, arXiv阅读, 英文论文AI", en: "AI paper reading, paper summary, arXiv reading, English paper AI" } },

  { slug: "ai-financial-report-analysis", cat: "data", read: 7, date: "2026-06-18",
    cover: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 财报分析：自动解读上市公司财务报表", en: "AI Financial Report Analysis: Auto-Read Earnings" },
    description: { zh: "用 AI 分析财报：三大报表解读、关键指标、同业对比与风险提示，投研效率倍增。", en: "Analyze financial reports with AI: three statements, key metrics, peer comparison, and risk flags." },
    keywords: { zh: "AI财报分析, 财务报表, 投研AI, 财报解读", en: "AI financial analysis, financial statements, investment research AI, earnings analysis" } },

  { slug: "ai-ab-test-significance", cat: "data", read: 6, date: "2026-06-17",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI A/B 测试显著性分析：避免统计误判", en: "AI A/B Test Significance: Avoid Statistical Errors" },
    description: { zh: "用 AI 分析 A/B 测试结果：显著性检验、样本量计算、置信区间与常见统计陷阱。", en: "Analyze A/B tests with AI: significance testing, sample sizing, confidence intervals, and common pitfalls." },
    keywords: { zh: "AI A/B测试, 显著性检验, 统计分析, 实验分析", en: "AI A/B testing, significance test, statistical analysis, experiment analysis" } },

  { slug: "ai-competitor-price-monitoring", cat: "data", read: 6, date: "2026-06-16",
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 竞品价格监控：自动追踪与智能定价建议", en: "AI Competitor Price Monitoring: Track & Price Smart" },
    description: { zh: "用 AI 监控竞品价格：自动抓取、变动预警、弹性分析与动态定价建议，电商运营利器。", en: "Monitor competitor prices with AI: auto-scraping, alerts, elasticity, and dynamic pricing tips." },
    keywords: { zh: "AI价格监控, 竞品定价, 动态定价, 价格抓取", en: "AI price monitoring, competitor pricing, dynamic pricing, price scraping" } },

  { slug: "ai-user-behavior-funnel", cat: "data", read: 7, date: "2026-06-15",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: { zh: "AI 用户行为漏斗分析：定位流失环节与优化点", en: "AI Funnel Analysis: Locate Drop-off & Optimize" },
    description: { zh: "用 AI 分析用户行为漏斗：流失定位、归因分析、用户分群与转化优化建议。", en: "Analyze user funnels with AI: drop-off location, attribution, segmentation, and conversion optimization." },
    keywords: { zh: "AI漏斗分析, 用户行为, 转化分析, 归因分析", en: "AI funnel analysis, user behavior, conversion analysis, attribution analysis" } }
];

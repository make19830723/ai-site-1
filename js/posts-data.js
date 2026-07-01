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
    cover: "/images/chatgpt-writing-prompt-guide.svg",
    title: { zh: "ChatGPT 提示词写作指南：7 个技巧写出高质量 AI 写作", en: "ChatGPT Prompt Writing Guide: 7 Tips for High-Quality AI Copy" },
    description: { zh: "掌握 ChatGPT 提示词写作技巧，学会用角色设定、结构化指令和迭代优化，让 AI 写出专业级内容，附实用提示词模板。", en: "Master ChatGPT prompt techniques—role setup, structured instructions, and iterative refinement—to produce professional copy. Includes ready-to-use templates." },
    keywords: { zh: "ChatGPT提示词, AI写作, AI写作, 提示词技巧, prompt工程", en: "ChatGPT prompts, AI writing, prompt engineering, AI copywriting, prompt tips" } },

  { slug: "ai-write-blog-post-fast", cat: "writing", read: 7, date: "2026-06-24",
    cover: "/images/ai-write-blog-post-fast.svg",
    title: { zh: "用 AI 写博客文章全流程：从选题到发布只需 30 分钟", en: "Write a Blog Post with AI: From Topic to Publish in 30 Minutes" },
    description: { zh: "用 AI 高效完成博客写作：选题、大纲、正文、SEO 优化与配图完整工作流讲解，适合自媒体和内容运营。", en: "An efficient AI blog-writing workflow: ideation, outline, drafting, SEO, and images—ideal for creators and content marketers." },
    keywords: { zh: "AI写博客, AI写作流程, 博客自动生成, SEO写作", en: "AI blog writing, blog automation, SEO writing, AI content workflow" } },

  { slug: "ai-xiaohongshu-copywriting", cat: "writing", read: 6, date: "2026-06-23",
    cover: "/images/ai-xiaohongshu-copywriting.svg",
    title: { zh: "小红书 AI 内容怎么写？爆款笔记标题与正文模板", en: "How to Write Xiaohongshu Copy with AI: Viral Title & Body Templates" },
    description: { zh: "小红书爆款 AI 内容写作方法：标题公式、钩子开头、emoji 排版与标签策略，附可直接套用的提示词。", en: "Viral Xiaohongshu AI copywriting: title formulas, hook openings, emoji formatting, and tag strategies with copy-paste prompts." },
    keywords: { zh: "小红书AI写作, 爆款内容, 小红书标题, AI写笔记", en: "Xiaohongshu copy, viral copywriting, RED titles, AI note writing" } },

  { slug: "ai-business-email-templates", cat: "writing", read: 5, date: "2026-06-22",
    cover: "/images/ai-business-email-templates.svg",
    title: { zh: "AI 商务邮件写作：10 个常用场景模板（催款/询价/道歉）", en: "AI Business Email Writing: 10 Templates for Common Scenarios" },
    description: { zh: "用 AI 快速撰写商务邮件：催款、询价、道歉、邀请、跟进等 10 个高频场景，附中英文邮件提示词模板。", en: "Write business emails with AI: 10 high-frequency scenarios—payment reminders, inquiries, apologies—with bilingual prompt templates." },
    keywords: { zh: "AI写邮件, 商务邮件模板, 英文邮件AI, 邮件提示词", en: "AI email writing, business email templates, English email AI, email prompts" } },

  { slug: "ai-academic-paper-assistant", cat: "writing", read: 9, date: "2026-06-21",
    cover: "/images/ai-academic-paper-assistant.svg",
    title: { zh: "AI 辅助论文写作全攻略：文献综述、润色与降重", en: "AI for Academic Writing: Literature Review, Editing & Reducing Similarity" },
    description: { zh: "用 AI 辅助论文写作：选题、文献综述、语言润色、降重与引用规范，遵守学术诚信，附合规用法指南。", en: "Use AI for academic writing: topics, literature review, language polishing, and citation norms—with academic integrity guidelines." },
    keywords: { zh: "AI论文写作, AI润色, 论文降重, 文献综述AI", en: "AI academic writing, AI paper editing, reduce similarity, literature review AI" } },

  { slug: "ai-novel-fiction-writing", cat: "writing", read: 8, date: "2026-06-20",
    cover: "/images/ai-novel-fiction-writing.svg",
    title: { zh: "用 AI 写小说完整指南：世界观、角色与情节构建", en: "Writing a Novel with AI: Worldbuilding, Characters & Plot" },
    description: { zh: "AI 写小说教程：如何用 AI 构建世界观、塑造角色、设计冲突与节奏，适合网文作者和故事创作者。", en: "A complete AI novel-writing tutorial: worldbuilding, character arcs, conflict, and pacing for web novelists and storytellers." },
    keywords: { zh: "AI写小说, AI创作, 网文写作, AI故事生成", en: "AI novel writing, AI fiction, AI storytelling, web novel AI" } },

  { slug: "ai-seo-content-optimization", cat: "writing", read: 7, date: "2026-06-19",
    cover: "/images/ai-seo-content-optimization.svg",
    title: { zh: "AI SEO 内容优化：让文章排名提升的关键技巧", en: "AI SEO Content Optimization: Key Techniques to Boost Rankings" },
    description: { zh: "用 AI 优化 SEO 内容：关键词布局、语义相关词、标题优化与搜索意图匹配，提升文章搜索引擎排名。", en: "Optimize SEO content with AI: keyword placement, LSI terms, title optimization, and search intent matching." },
    keywords: { zh: "AI SEO, 内容优化, 关键词布局, SEO写作技巧", en: "AI SEO, content optimization, keyword placement, SEO writing tips" } },

  { slug: "ai-product-description-generator", cat: "writing", read: 6, date: "2026-06-18",
    cover: "/images/ai-product-description-generator.svg",
    title: { zh: "AI 商品详情页描述生成：电商高转化描述怎么写", en: "AI Product Description Generator: High-Conversion E-commerce Copy" },
    description: { zh: "用 AI 生成电商商品描述：卖点提炼、痛点挖掘、场景化描述，提升详情页转化率，附提示词模板。", en: "Generate e-commerce copy with AI: extract selling points, address pain points, and boost conversion with prompt templates." },
    keywords: { zh: "AI商品描述, 电商描述, 详情页描述, 高转化描述", en: "AI product copy, e-commerce copywriting, product descriptions, conversion copy" } },

  /* ===== 20 篇 AI 最新技术文章 (2026) ===== */
  { slug: "gpt-5-capabilities-explained", cat: "writing", read: 6, date: "2026-06-30",
    cover: "/images/gpt-5-capabilities-explained.svg",
    title: { zh: "GPT-5 到底强在哪？实测能力边界与写作场景对比", en: "What Makes GPT-5 Different? Real Capability Tests for Writing" },
    description: { zh: "GPT-5 相比 GPT-4 实际提升了多少？从长文连贯性、推理深度到中文写作，我们做了 6 组对比测试，告诉你哪些场景值得升级。", en: "How much better is GPT-5 than GPT-4? Six side-by-side tests on coherence, reasoning, and Chinese writing reveal where the upgrade pays off." },
    keywords: { zh: "GPT-5,GPT-4对比,GPT-5能力,GPT-5写作,大模型评测", en: "GPT-5,GPT-5 vs GPT-4,GPT-5 capabilities,GPT-5 writing,LLM benchmark" } },

  { slug: "claude-4-opus-sonnet-comparison", cat: "writing", read: 6, date: "2026-06-29",
    cover: "/images/claude-4-opus-sonnet-comparison.svg",
    title: { zh: "Claude 4 Opus 与 Sonnet 怎么选？长文档与代码场景实测", en: "Claude 4 Opus vs Sonnet: Which One for Long Docs and Code?" },
    description: { zh: "Anthropic 发布的 Claude 4 Opus 与 Sonnet 定位差异明显。本文从 20 万字文档处理、代码生成、中文润色三个维度做对比，附选择建议。", en: "Anthropic's Claude 4 Opus and Sonnet target different needs. We compare them on 200K-token documents, codegen, and Chinese editing." },
    keywords: { zh: "Claude 4 Opus,Claude 4 Sonnet,Claude对比,Anthropic模型,Claude评测", en: "Claude 4 Opus,Claude 4 Sonnet,Claude comparison,Anthropic models,Claude review" } },

  { slug: "gemini-2-5-pro-deep-research", cat: "data", read: 7, date: "2026-06-28",
    cover: "/images/gemini-2-5-pro-deep-research.svg",
    title: { zh: "Gemini 2.5 Pro 深度研究实测：谷歌的检索增强到底多强", en: "Gemini 2.5 Pro Deep Research Tested: How Good Is Google's RAG?" },
    description: { zh: "Gemini 2.5 Pro 主打的 Deep Research 功能结合了实时搜索与多步推理。我们用 5 个真实研究问题测试它的信息整合能力，看是否真能替代人工调研。", en: "Gemini 2.5 Pro's Deep Research pairs real-time search with multi-step reasoning. We test it on five real questions to see if it replaces manual research." },
    keywords: { zh: "Gemini 2.5 Pro,Deep Research,谷歌Gemini,检索增强生成,AI研究工具", en: "Gemini 2.5 Pro,Deep Research,Google Gemini,retrieval augmented generation,AI research tool" } },

  { slug: "sora-2-video-generation-guide", cat: "video", read: 7, date: "2026-06-27",
    cover: "/images/sora-2-video-generation-guide.svg",
    title: { zh: "Sora 2 实测：60 秒长镜头、物理一致性与真实成本", en: "Sora 2 Tested: 60-Second Shots, Physics Consistency, and Real Cost" },
    description: { zh: "OpenAI Sora 2 支持更长时长和更稳定的物理一致性。本文用电商广告、剧情短片两类场景实测，算清一条 AI 视频的真实成本和时间。", en: "OpenAI's Sora 2 promises longer clips and stable physics. We test it on e-commerce ads and short narratives, with a real cost breakdown." },
    keywords: { zh: "Sora 2,OpenAI视频生成,AI视频制作,Sora实测,文生视频", en: "Sora 2,OpenAI video generation,AI video,Sora test,text to video" } },

  { slug: "kling-ai-video-vs-sora", cat: "video", read: 6, date: "2026-06-26",
    cover: "/images/kling-ai-video-vs-sora.svg",
    title: { zh: "可灵 AI 视频生成对决 Sora：中文场景谁更懂你", en: "Kling AI vs Sora: Which Understands Chinese Scenes Better?" },
    description: { zh: "国产可灵（Kling）在中文提示词理解、东方人物、古装场景上有独到优势。本文对比可灵与 Sora 在 8 个本土化场景的表现，给你选型建议。", en: "China's Kling excels at Chinese prompts, Eastern faces, and period costumes. We compare it with Sora on eight local scenarios with selection advice." },
    keywords: { zh: "可灵AI,Kling,Sora对比,国产AI视频,可灵视频生成", en: "Kling AI,Kling,Sora comparison,Chinese AI video,Kling video generation" } },

  { slug: "midjourney-v7-style-reference", cat: "image", read: 6, date: "2026-06-25",
    cover: "/images/midjourney-v7-style-reference.svg",
    title: { zh: "Midjourney V7 风格参考彻底玩明白：sref 参数全解", en: "Mastering Midjourney V7 Style Reference: The Complete sref Guide" },
    description: { zh: "Midjourney V7 的 --sref 风格参考让出图风格统一变得简单。本文从参数语法、风格叠加、权重调节到商业项目落地，讲透全部用法。", en: "Midjourney V7's --sref makes consistent styling easy. A full walkthrough of syntax, stacking, weights, and commercial use." },
    keywords: { zh: "Midjourney V7,sref,风格参考,MJ教程,Midjourney参数", en: "Midjourney V7,sref,style reference,MJ tutorial,Midjourney parameters" } },

  { slug: "flux-2-image-model-guide", cat: "image", read: 6, date: "2026-06-24",
    cover: "/images/flux-2-image-model-guide.svg",
    title: { zh: "Flux 2 图像模型实测：文字渲染与手部终于不崩了", en: "Flux 2 Tested: Text Rendering and Hands Finally Stop Breaking" },
    description: { zh: "Black Forest Labs 的 Flux 2 在文字生成、手部结构、多人物一致性上有质的飞跃。本文实测 5 类高难度场景，并给出本地部署与 API 调用建议。", en: "Black Forest Labs' Flux 2 leaps forward in text, hands, and multi-subject consistency. Five hard-scene tests plus deployment and API tips." },
    keywords: { zh: "Flux 2,Flux图像模型,Black Forest Labs,开源AI绘图,文字渲染", en: "Flux 2,Flux image model,Black Forest Labs,open source AI art,text rendering" } },

  { slug: "cursor-agent-mode-workflow", cat: "coding", read: 8, date: "2026-06-23",
    cover: "/images/cursor-agent-mode-workflow.svg",
    title: { zh: "Cursor Agent 模式实战：让它自己改完一个完整功能", en: "Cursor Agent Mode in Practice: Let It Ship a Whole Feature" },
    description: { zh: "Cursor 的 Agent 模式能自主规划、多文件改动、自测修复。本文用一个真实功能需求演示完整工作流，并讲清楚边界检查与代码审查的要点。", en: "Cursor's Agent mode can plan, edit across files, and self-fix. A real feature demo with boundary checks and code review essentials." },
    keywords: { zh: "Cursor,Agent模式,Cursor教程,AI编程,Cursor Agent", en: "Cursor,Agent mode,Cursor tutorial,AI coding,Cursor Agent" } },

  { slug: "claude-code-cli-advanced-guide", cat: "coding", read: 7, date: "2026-06-22",
    cover: "/images/claude-code-cli-advanced-guide.svg",
    title: { zh: "Claude Code CLI 进阶：终端里跑通完整开发流程", en: "Claude Code CLI Advanced: A Full Dev Workflow in the Terminal" },
    description: { zh: "Anthropic 的 Claude Code 把命令行变成了 AI 结对编程终端。本文从项目初始化、多文件重构到 Git 集成，演示终端原生的开发工作流。", en: "Anthropic's Claude Code turns the terminal into an AI pair-programming hub. From project init and refactors to Git integration." },
    keywords: { zh: "Claude Code,Claude CLI,Anthropic编程,AI命令行,Claude Code教程", en: "Claude Code,Claude CLI,Anthropic coding,AI terminal,Claude Code tutorial" } },

  { slug: "v0-vercel-ai-ui-generator", cat: "coding", read: 6, date: "2026-06-21",
    cover: "/images/v0-vercel-ai-ui-generator.svg",
    title: { zh: "v0 实战：用一句话生成可上线的 React 页面", en: "v0 in Action: Generate a Deploy-Ready React Page from One Sentence" },
    description: { zh: "Vercel 的 v0 能从自然语言直接生成带样式的 React + Tailwind 组件。本文实测落地页、仪表盘、表单三类页面，并讲清如何接入真实数据。", en: "Vercel's v0 turns natural language into styled React + Tailwind components. Landing pages, dashboards, and forms tested with real data wiring." },
    keywords: { zh: "v0,Vercel,AI生成UI,React生成器,v0教程", en: "v0,Vercel,AI UI generator,React generator,v0 tutorial" } },

  { slug: "ai-agent-workflow-automation", cat: "office", read: 7, date: "2026-06-20",
    cover: "/images/ai-agent-workflow-automation.svg",
    title: { zh: "AI Agent 自动化工作流：从概念到第一个能跑的智能体", en: "AI Agent Workflow Automation: From Concept to Your First Working Agent" },
    description: { zh: "Agent 是 2026 年最热的 AI 形态。本文用通俗的语言讲清 Agent 与普通对话的本质区别，并带你用工具组合搭一个能自动处理邮件的智能体。", en: "Agents are 2026's hottest AI form. We explain how agents differ from chat, then build an email-handling agent with tool combinations." },
    keywords: { zh: "AI Agent,智能体,AI自动化,工作流自动化,Agent开发", en: "AI Agent,intelligent agent,AI automation,workflow automation,agent development" } },

  { slug: "notebooklm-research-assistant", cat: "office", read: 6, date: "2026-06-19",
    cover: "/images/notebooklm-research-assistant.svg",
    title: { zh: "NotebookLM 把上百份资料变成私人研究助理", en: "NotebookLM: Turn Hundreds of Sources Into a Private Research Assistant" },
    description: { zh: "谷歌 NotebookLM 能基于你上传的资料回答问题、生成摘要、甚至播报音频。本文讲清它的能力边界，以及研究生、分析师、律师三类人群的用法。", en: "Google's NotebookLM answers from your own sources, summarizes, and even narrates. Capabilities, plus use cases for researchers, analysts, and lawyers." },
    keywords: { zh: "NotebookLM,谷歌NotebookLM,AI研究助理,资料整理,文献管理", en: "NotebookLM,Google NotebookLM,AI research assistant,source organization,literature management" } },

  { slug: "suno-v5-music-generation", cat: "audio", read: 6, date: "2026-06-18",
    cover: "/images/suno-v5-music-generation.svg",
    title: { zh: "Suno v5 实测：AI 作曲终于能上专业级编曲了", en: "Suno v5 Tested: AI Music Finally Reaches Pro Arrangement Quality" },
    description: { zh: "Suno v5 在编曲层次、人声自然度、曲风跨度上有明显进步。本文实测中文流行、电子、民谣三类风格，并讲清商用授权与人声克隆的边界。", en: "Suno v5 improves arrangement depth, vocal naturalness, and genre range. Tests on Chinese pop, electronic, and folk, plus licensing and vocal cloning limits." },
    keywords: { zh: "Suno v5,AI作曲,Suno实测,AI音乐生成,Suno教程", en: "Suno v5,AI music generation,Suno test,AI music,Suno tutorial" } },

  { slug: "elevenlabs-v3-voice-cloning", cat: "audio", read: 6, date: "2026-06-17",
    cover: "/images/elevenlabs-v3-voice-cloning.svg",
    title: { zh: "ElevenLabs v3 语音克隆实测：3 秒样本以假乱真", en: "ElevenLabs v3 Voice Cloning Tested: 3-Second Sample, Uncanny Results" },
    description: { zh: "ElevenLabs v3 把语音克隆的样本需求压到了 3 秒，情感表现力大幅提升。本文实测中英文克隆效果，并严肃讨论深伪语音的合规与防御。", en: "ElevenLabs v3 needs just 3 seconds of audio and adds real emotion. We test Chinese and English cloning, and seriously address deepfake compliance and defense." },
    keywords: { zh: "ElevenLabs v3,语音克隆,AI配音,TTS,声音克隆", en: "ElevenLabs v3,voice cloning,AI voiceover,TTS,voice cloning" } },

  { slug: "ai-seo-2026-search-generative", cat: "marketing", read: 7, date: "2026-06-16",
    cover: "/images/ai-seo-2026-search-generative.svg",
    title: { zh: "AI 搜索时代 SEO 怎么做：生成式搜索下的新规则", en: "SEO in the AI Search Era: New Rules Under Generative Search" },
    description: { zh: "谷歌 AI Overviews 和 Perplexity 正在改变搜索流量格局。本文讲清生成式搜索的引用机制，以及内容创作者该如何调整选题、结构和结构化数据。", en: "Google AI Overviews and Perplexity are reshaping search traffic. How generative citations work, and how creators should adapt topics, structure, and schema." },
    keywords: { zh: "AI搜索,生成式搜索,SEO 2026,AI Overviews,Perplexity SEO", en: "AI search,generative search,SEO 2026,AI Overviews,Perplexity SEO" } },

  { slug: "ai-kol-marketing-2026", cat: "marketing", read: 6, date: "2026-06-15",
    cover: "/images/ai-kol-marketing-2026.svg",
    title: { zh: "AI 数字人 KOL 营销：成本砍九成，效果真的好吗", en: "AI Virtual KOL Marketing: 90% Cheaper, But Does It Work?" },
    description: { zh: "AI 数字人正在重塑 KOL 营销。本文拆解真实投放数据，对比真人 KOL 与数字人的 CPM、互动率、转化差异，并给出三类适合用数字人的场景。", en: "AI virtual humans are reshaping KOL marketing. Real campaign data comparing CPM, engagement, and conversion, plus three scenarios where virtuals win." },
    keywords: { zh: "AI数字人,KOL营销,虚拟人营销,AI网红,数字人投放", en: "AI virtual human,KOL marketing,virtual influencer,AI influencer,virtual marketing" } },

  { slug: "ai-coding-assistant-2026-comparison", cat: "coding", read: 8, date: "2026-06-14",
    cover: "/images/ai-coding-assistant-2026-comparison.svg",
    title: { zh: "2026 AI 编程助手横评：Copilot、Cursor、Claude Code 怎么选", en: "2026 AI Coding Assistants Compared: Copilot vs Cursor vs Claude Code" },
    description: { zh: "AI 编程助手已进入三国杀。本文从补全准确率、多文件理解、Agent 能力、价格四个维度横评三款主流工具，给出不同岗位的选择建议。", en: "AI coding assistants are a three-way race. We benchmark Copilot, Cursor, and Claude Code on completion accuracy, multi-file understanding, agent ability, and price." },
    keywords: { zh: "AI编程助手,Copilot,Cursor,Claude Code,编程助手对比", en: "AI coding assistant,Copilot,Cursor,Claude Code,coding assistant comparison" } },

  { slug: "rag-knowledge-base-enterprise", cat: "data", read: 7, date: "2026-06-13",
    cover: "/images/rag-knowledge-base-enterprise.svg",
    title: { zh: "企业知识库 RAG 落地：让 AI 用你的私有数据回答问题", en: "Enterprise Knowledge Base with RAG: Let AI Answer from Your Private Data" },
    description: { zh: "RAG 是企业用上大模型最务实的路径。本文讲清文档切片、向量检索、重排序、引用溯源的完整链路，并指出 5 个最容易踩的坑。", en: "RAG is the most practical path for enterprises to use LLMs. The full pipeline—chunking, retrieval, reranking, citations—and five common pitfalls." },
    keywords: { zh: "RAG,企业知识库,向量检索,私有化大模型,RAG落地", en: "RAG,enterprise knowledge base,vector retrieval,private LLM,RAG implementation" } },

  { slug: "multimodal-ai-gpt-4o-realtime", cat: "data", read: 6, date: "2026-06-12",
    cover: "/images/multimodal-ai-gpt-4o-realtime.svg",
    title: { zh: "多模态 AI 实测：GPT-4o 实时语音视觉到底有多快", en: "Multimodal AI Tested: How Fast Is GPT-4o Real-Time Voice and Vision?" },
    description: { zh: "GPT-4o 的实时多模态能力把交互延迟压到了 300 毫秒内。本文实测语音对话、看图讲解、屏幕共享三类场景，并讨论延迟背后的工程优化。", en: "GPT-4o's real-time multimodal interaction hits sub-300ms latency. Tests on voice chat, image narration, and screen sharing, plus the engineering behind it." },
    keywords: { zh: "GPT-4o,多模态AI,实时语音,视觉理解,多模态大模型", en: "GPT-4o,multimodal AI,real-time voice,vision understanding,multimodal LLM" } },

  { slug: "llm-cost-optimization-2026", cat: "data", read: 7, date: "2026-06-11",
    cover: "/images/llm-cost-optimization-2026.svg",
    title: { zh: "大模型推理成本优化：2026 年把 API 账单砍掉 80%", en: "LLM Inference Cost Optimization: Cut Your API Bill 80% in 2026" },
    description: { zh: "大模型用量上去了，账单也跟着涨。本文给出 6 个经过验证的降本手段：模型路由、提示缓存、上下文裁剪、批处理、蒸馏与缓存命中优化。", en: "As LLM usage scales, so does the bill. Six proven cost-cutting tactics: model routing, prompt caching, context pruning, batching, distillation, and cache hits." },
    keywords: { zh: "大模型成本优化,API降本,LLM推理优化,模型路由,提示缓存", en: "LLM cost optimization,API cost reduction,LLM inference optimization,model routing,prompt caching" } }
];

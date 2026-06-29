/**
 * 文章元数据列表 (首页与文章列表页共享)
 * - file: 文章详情页文件路径 (相对于根目录)
 * - 新增文章只需在此追加一条，并创建对应 html 文件
 */
window.ARTICLES = [
  {
    id: "ai-reshape-enterprise",
    file: "articles/ai-reshape-enterprise.html",
    date: "2026-06-20",
    category: { zh: "AI 战略", en: "AI Strategy" },
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=70",
    title: {
      zh: "企业如何用 AI 重塑核心竞争力",
      en: "How Enterprises Reinvent Core Competitiveness with AI"
    },
    excerpt: {
      zh: "AI 不是工具，而是新的生产力范式。本文拆解企业 AI 转型的三个关键阶段。",
      en: "AI is not a tool but a new paradigm of productivity. This article breaks down three key phases of enterprise AI transformation."
    }
  },
  {
    id: "rag-production-guide",
    file: "articles/rag-production-guide.html",
    date: "2026-06-08",
    category: { zh: "技术落地", en: "Engineering" },
    cover: "https://images.unsplash.com/photo-1620712943543-bcc4688e7480?auto=format&fit=crop&w=1200&q=70",
    title: {
      zh: "RAG 系统落地实战指南",
      en: "A Practical Guide to Shipping RAG in Production"
    },
    excerpt: {
      zh: "从知识库切片、向量检索到答案生成，总结我们在 10+ 项目里踩过的坑。",
      en: "From chunking and vector retrieval to answer generation — lessons from 10+ projects."
    }
  },
  {
    id: "ai-roi-framework",
    file: "articles/ai-roi-framework.html",
    date: "2026-05-22",
    category: { zh: "商业价值", en: "Business Value" },
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    title: {
      zh: "如何科学评估 AI 项目的投资回报",
      en: "A Framework for Evaluating AI Project ROI"
    },
    excerpt: {
      zh: "一套可量化的 AI ROI 评估框架，帮你避免「为了 AI 而 AI」的陷阱。",
      en: "A quantifiable ROI framework to avoid the trap of doing AI for AI's sake."
    }
  }
];

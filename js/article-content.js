/**
 * 文章正文内容 (双语)
 * 文章详情页通过 data-id 匹配对应正文并注入。
 * 正文使用有限的 HTML 标签 (h2/h3/p/ul/ol/blockquote/strong/code)。
 */
window.ARTICLE_CONTENT = {
  "ai-reshape-enterprise": {
    zh: `
<h2>为什么 AI 是新的生产力范式</h2>
<p>过去十年，企业信息化的核心是"把流程搬到线上"；而 AI 时代的命题变了——它不再只是工具，而是一种<strong>新的生产力范式</strong>。能够率先理解并应用这一范式的企业，将在未来五到十年建立起难以被复制的竞争壁垒。</p>
<blockquote>真正的 AI 转型，不是上线一个模型，而是重塑决策、流程与组织。</blockquote>

<h2>转型的三个关键阶段</h2>
<h3>1. 认知对齐：从「技术问题」到「业务问题」</h3>
<p>很多企业 AI 项目失败的根因，是把它当成了纯技术问题交给 IT 部门。实际上，AI 转型的第一公里，是<strong>业务侧的认知对齐</strong>：哪些场景值得做？预期收益是什么？谁来为结果负责？</p>
<ul>
  <li>识别高价值、高可行性的场景（价值 × 数据成熟度）</li>
  <li>明确业务指标，而非技术指标</li>
  <li>建立跨部门的小型作战团队</li>
</ul>

<h3>2. 试点验证：用小胜利建立信心</h3>
<p>不要一开始就追求"全公司 AI 化"。选择 1-2 个边界清晰、数据完备的场景做试点，用 6-12 周拿到可量化的业务结果。一次成功的小型试点，胜过十份 PPT。</p>

<h3>3. 规模化：从单点到体系</h3>
<p>当试点跑通后，真正的挑战才刚开始——如何把单点能力沉淀为<strong>平台化能力</strong>，并复制到更多业务线。这需要数据治理、模型管理、组织机制三位一体地升级。</p>
<ol>
  <li>建设统一的数据与模型资产</li>
  <li>建立 AI 项目的评估与淘汰机制</li>
  <li>培养内部的 AI 产品与工程能力</li>
</ol>

<h2>给决策者的三条建议</h2>
<p>第一，<strong>从业务问题出发，而不是从模型出发</strong>。第二，把 AI 视为长期投资，给团队足够的耐心。第三，找有实战经验的合作伙伴，避免重复造轮子。</p>
<p>AI 的窗口期正在快速收窄。越早开始，复利越大。</p>
`,
    en: `
<h2>Why AI Is a New Productivity Paradigm</h2>
<p>Over the past decade, enterprise digitization was about "moving processes online." The proposition of the AI era is different — it is no longer just a tool but a <strong>new paradigm of productivity</strong>. Enterprises that grasp and apply it first will build moats that are hard to replicate over the next 5–10 years.</p>
<blockquote>Real AI transformation is not deploying a model — it is reshaping decisions, processes, and the organization.</blockquote>

<h2>Three Key Phases of Transformation</h2>
<h3>1. Alignment: From "Tech Problem" to "Business Problem"</h3>
<p>Many enterprise AI initiatives fail because they are treated as pure technology and handed to IT. In truth, the first mile of AI transformation is <strong>business-side alignment</strong>: which scenarios are worth doing? What is the expected return? Who owns the outcome?</p>
<ul>
  <li>Identify high-value, high-feasibility scenarios (value × data readiness)</li>
  <li>Define business metrics, not technical metrics</li>
  <li>Build a small cross-functional strike team</li>
</ul>

<h3>2. Pilots: Build Confidence with Small Wins</h3>
<p>Don't chase "AI-ify everything" on day one. Pick 1–2 scenarios with clear boundaries and complete data, and deliver quantifiable business results in 6–12 weeks. One successful pilot beats ten slide decks.</p>

<h3>3. Scaling: From Point Solutions to a System</h3>
<p>Once a pilot works, the real challenge begins — turning a point capability into <strong>platform capability</strong> and replicating it across business lines. This requires upgrading data governance, model management, and organizational mechanisms together.</p>
<ol>
  <li>Build unified data and model assets</li>
  <li>Establish an evaluation and sunset mechanism for AI projects</li>
  <li>Cultivate in-house AI product and engineering capability</li>
</ol>

<h2>Three Takeaways for Decision Makers</h2>
<p>First, <strong>start from the business problem, not the model</strong>. Second, treat AI as a long-term investment and give your team patience. Third, find partners with real field experience to avoid reinventing the wheel.</p>
<p>The AI window is closing fast. The earlier you start, the greater the compounding return.</p>
`
  },

  "rag-production-guide": {
    zh: `
<h2>RAG 不是"接个 API"那么简单</h2>
<p>检索增强生成（RAG）看起来很简单：把文档切片、向量化、检索、拼到 Prompt 里。但真正把它放到生产环境，你会发现<strong>80% 的问题不在模型，而在工程</strong>。</p>

<h2>知识切片：质量决定上限</h2>
<p>切片（chunking）是 RAG 效果的地基。我们见过太多项目用固定的 512 token 一刀切，结果检索召回的全是断章取义的片段。</p>
<ul>
  <li><strong>语义切片优于固定长度</strong>：按标题、段落自然边界切</li>
  <li>保留上下文元数据（标题层级、来源、时间）</li>
  <li>对表格、代码做特殊处理，不要混切</li>
</ul>
<blockquote>Garbage in, garbage out. 切片质量决定了整个系统的上限。</blockquote>

<h2>检索：别只依赖向量</h2>
<p>纯向量检索在专业术语、人名、编号等场景下经常失效。我们在 10+ 项目里验证最稳的方案是<strong>混合检索</strong>：</p>
<ol>
  <li>BM25 关键词检索捕捉精确匹配</li>
  <li>向量检索捕捉语义相似</li>
  <li>用 RRF 或加权融合两路结果</li>
  <li>加入重排序模型（reranker）提升 Top-K 质量</li>
</ol>

<h2>生成与引用：让答案可信</h2>
<p>生产级 RAG 必须给用户<strong>可追溯的引用</strong>。每段答案都应标注来源片段，否则用户无法判断可信度。同时要设计好"拒答"策略——当检索结果置信度低时，宁可说"我不知道"，也不要胡编。</p>

<h2>评估：建立闭环</h2>
<p>没有评估的 RAG 系统就是黑盒。建议从三个维度持续度量：<strong>召回率</strong>（该找的找到了吗）、<strong>准确率</strong>（找到的对吗）、<strong>忠实度</strong>（答案是否忠于原文）。建立一个小型评测集，每次改动都回归一次。</p>
<p>RAG 的本质是用工程手段弥补模型的局限。把它当产品打磨，而不是当 demo 凑合。</p>
`,
    en: `
<h2>RAG Is Not "Just Call an API"</h2>
<p>Retrieval-Augmented Generation looks deceptively simple: chunk documents, embed them, retrieve, and stitch into a prompt. But once you take it to production, you realize <strong>80% of the problems are engineering, not the model</strong>.</p>

<h2>Chunking: Quality Sets the Ceiling</h2>
<p>Chunking is the foundation of RAG quality. We've seen too many projects blindly cut at fixed 512-token boundaries and retrieve fragments stripped of context.</p>
<ul>
  <li><strong>Semantic chunking beats fixed length</strong>: cut along natural headings and paragraphs</li>
  <li>Preserve context metadata (heading hierarchy, source, time)</li>
  <li>Handle tables and code specially — don't mix them in</li>
</ul>
<blockquote>Garbage in, garbage out. Chunking quality sets the ceiling for the whole system.</blockquote>

<h2>Retrieval: Don't Rely on Vectors Alone</h2>
<p>Pure vector retrieval fails on proper nouns, IDs, and domain jargon. The most robust approach we've validated across 10+ projects is <strong>hybrid retrieval</strong>:</p>
<ol>
  <li>BM25 keyword search for exact matches</li>
  <li>Vector search for semantic similarity</li>
  <li>Fuse the two via RRF or weighted scoring</li>
  <li>Add a reranker to improve Top-K quality</li>
</ol>

<h2>Generation & Citation: Make Answers Trustworthy</h2>
<p>Production RAG must give users <strong>traceable citations</strong>. Every answer segment should reference its source chunk, or users can't judge credibility. Also design a refusal strategy — when retrieval confidence is low, it's better to say "I don't know" than to hallucinate.</p>

<h2>Evaluation: Close the Loop</h2>
<p>A RAG system without evaluation is a black box. We recommend measuring three dimensions continuously: <strong>recall</strong> (did it find what it should), <strong>precision</strong> (is what it found correct), and <strong>faithfulness</strong> (is the answer grounded in the source). Build a small eval set and regress on every change.</p>
<p>RAG is fundamentally about using engineering to compensate for model limitations. Treat it as a product, not a demo.</p>
`
  },

  "ai-roi-framework": {
    zh: `
<h2>"为了 AI 而 AI"的陷阱</h2>
<p>我们见过太多企业，花了一年时间和七位数预算，最后只交出一个"AI 智能助手"的 demo。问题不在于技术不行，而在于<strong>从一开始就没有算清楚账</strong>。</p>

<h2>一个可量化的 ROI 框架</h2>
<p>我们建议用"三层收益模型"来评估 AI 项目：</p>
<h3>第一层：直接收益（可量化）</h3>
<p>这是最容易算的部分——节省的人力、提升的转化、缩短的处理时间。例如一个客服 AI 把平均处理时长从 8 分钟降到 3 分钟，节省的工时就是直接收益。</p>
<h3>第二层：间接收益（半量化）</h3>
<p>用户体验提升带来的留存、NPS 改善、品牌溢价。这类收益需要更长的观测周期，但往往比直接收益更大。</p>
<h3>第三层：战略收益（定性）</h3>
<p>组织能力沉淀、数据资产积累、对未来趋势的卡位。难以量化，但决定了企业三五年后的位置。</p>

<h2>成本：别只算模型费</h2>
<p>AI 项目的真实成本包括：</p>
<ul>
  <li><strong>数据成本</strong>：清洗、标注、治理（常被严重低估）</li>
  <li><strong>工程成本</strong>：开发、部署、监控、迭代</li>
  <li><strong>组织成本</strong>：培训、流程改造、变革管理</li>
  <li><strong>机会成本</strong>：投入 A 就做不了 B</li>
</ul>
<blockquote>把所有成本算进去后，很多"看起来很酷"的项目其实 ROI 为负。</blockquote>

<h2>决策准则</h2>
<p>我们的实战准则很简单：<strong>第一年看直接收益能否覆盖成本，第三年看是否建立起战略壁垒</strong>。两个都打勾，才值得 All in；只有前者，做成工具即可；两者都没有，趁早止损。</p>
<p>AI 不是信仰，是投资。会算账的企业，才能笑到最后。</p>
`,
    en: `
<h2>The "AI for AI's Sake" Trap</h2>
<p>We've seen too many enterprises spend a year and a seven-figure budget only to deliver an "AI assistant" demo. The problem isn't weak technology — it's that <strong>the math was never done from the start</strong>.</p>

<h2>A Quantifiable ROI Framework</h2>
<p>We recommend evaluating AI projects with a "three-layer return model":</p>
<h3>Layer 1: Direct Returns (Quantifiable)</h3>
<p>This is the easiest to measure — labor saved, conversion lifted, processing time shortened. For example, a customer service AI that cuts average handling time from 8 minutes to 3 minutes: the hours saved are direct returns.</p>
<h3>Layer 2: Indirect Returns (Semi-quantifiable)</h3>
<p>Retention from better UX, NPS improvement, brand premium. These take longer to observe but are often larger than direct returns.</p>
<h3>Layer 3: Strategic Returns (Qualitative)</h3>
<p>Organizational capability, data assets, positioning for future trends. Hard to quantify, but they determine where you'll be in 3–5 years.</p>

<h2>Costs: It's Not Just the Model Bill</h2>
<p>The true cost of an AI project includes:</p>
<ul>
  <li><strong>Data cost</strong>: cleaning, labeling, governance (often severely underestimated)</li>
  <li><strong>Engineering cost</strong>: development, deployment, monitoring, iteration</li>
  <li><strong>Organizational cost</strong>: training, process redesign, change management</li>
  <li><strong>Opportunity cost</strong>: doing A means not doing B</li>
</ul>
<blockquote>Once you factor in all costs, many "cool-looking" projects actually have negative ROI.</blockquote>

<h2>Decision Rules</h2>
<p>Our field-tested rule is simple: <strong>in year one, check whether direct returns cover costs; in year three, check whether a strategic moat has been built</strong>. Tick both → go all in. Only the first → make it a tool. Neither → cut your losses early.</p>
<p>AI is not a belief — it's an investment. The companies that can do the math will be the ones left standing.</p>
`
  }
};

/**
 * 文章正文内容 (双语) — 按 slug 索引
 *
 * 结构示例:
 *   "slug-name": {
 *     zh: "<h2>标题</h2><p>正文…</p>",
 *     en: "<h2>Title</h2><p>Body…</p>"
 *   }
 *
 * 当某 slug 缺失时, 详情页会显示"撰写中"占位提示, 不影响其他文章与列表页。
 * 正文将分批写入, 覆盖全部 100 篇。
 */
window.POST_CONTENT = {

  /* ====== writing 类 第 1 篇 (样板) ====== */
  "chatgpt-writing-prompt-guide": {
    zh: `
<h2>为什么同样的 ChatGPT，写出来的文案质量天差地别？</h2>
<p>很多人用 ChatGPT 写文案，得到的要么是干巴巴的流水账，要么是满篇"赋能、抓手、闭环"的空话。问题不在工具，而在<strong>提示词（Prompt）</strong>。提示词是人与 AI 之间的"任务说明书"，写得好，AI 就是你的金牌文案；写得差，它只会给你一个及格的占位符。本文总结了 7 个经过验证的 ChatGPT 提示词写作技巧，帮助你稳定产出高质量 AI 文案。</p>

<h2>技巧 1：用角色设定框定专业视角</h2>
<p>AI 没有默认身份，它的语气和专业度由你的第一句话决定。与其说"帮我写段产品介绍"，不如说"<strong>你是一位有 10 年经验的科技产品文案，擅长把复杂功能讲得通俗易懂</strong>"。角色设定会让 AI 自动调用对应领域的话语体系，产出更专业的内容。</p>
<blockquote>黄金公式：角色 + 经验背景 + 擅长领域 + 目标读者。</blockquote>

<h2>技巧 2：结构化指令，别写"一坨"需求</h2>
<p>把需求拆成<strong>任务、背景、要求、格式</strong>四个部分，用编号或小标题呈现。混乱的自然语言会让 AI 抓不住重点，结构化指令能让它按图索骥。例如明确"输出 3 段，每段不超过 80 字，结尾带 CTA"，比"写得短一点"有效十倍。</p>

<h2>技巧 3：给参考样本，让 AI "照葫芦画瓢"</h2>
<p>如果你已有喜欢的文案风格，直接把它作为示例粘贴给 AI，说"<strong>参考以下风格，为我的产品写一段类似的</strong>"。Few-shot（少样本）学习是提示词工程里最稳的方法之一，比纯描述风格靠谱得多。</p>

<h2>技巧 4：明确目标读者和发布平台</h2>
<p>写给小红书少女看的文案，和写给 B 端采购经理看的方案，是完全两种东西。务必告诉 AI：<strong>这篇内容给谁看、发在哪里、读者最关心什么</strong>。同样是介绍一款扫地机器人，小红书要写"懒人福音、租房友好"，企业方案要写"降低运维成本、提升清洁效率"。</p>

<h2>技巧 5：限定语气、字数与禁用词</h2>
<p>AI 默认爱用华丽辞藻和套话。你可以直接下禁令：<strong>"不要使用'赋能''极致''赋能行业'等空泛词，语气像朋友聊天，总字数 200 字以内"</strong>。负面约束往往比正面描述更立竿见影。</p>

<h2>技巧 6：分步骤迭代，而不是一次到位</h2>
<p>不要指望一次提示词就拿到完美文案。专业做法是<strong>分步推进</strong>：先让 AI 给 3 个不同角度的标题，选定后再展开大纲，确认大纲后再写正文，最后再润色。每一步都人工把关，质量远胜一次性生成。</p>

<h2>技巧 7：要求 AI 自检与给出多个版本</h2>
<p>生成后追加一句"<strong>请从读者角度自评这段文案的 3 个不足，并给出一个更强版本</strong>"。让 AI 自我反思，往往能挖出隐藏问题。同时让它一次给 2-3 个版本对比，你挑最优，胜率更高。</p>

<h2>一个可复用的提示词模板</h2>
<p>把以上技巧整合，得到一个万能模板：</p>
<blockquote>你是一位【角色】，经验【背景】。请为【产品】写【内容类型】，目标读者是【人群】，发布在【平台】。要求：【字数】【语气】【禁用词】。请先给 3 个标题方向，待我确认后展开。参考风格：【粘贴样本】。</blockquote>

<h2>结语</h2>
<p>提示词写作的本质，是把模糊的写作需求翻译成 AI 能精确执行的指令。掌握这 7 个技巧后，你会发现 ChatGPT 不再是"随机文案生成器"，而是真正可控的文案生产力工具。关键是<strong>把人脑的判断力用在指令设计和版本选择上，把机械的成稿工作交给 AI</strong>。</p>
`,
    en: `
<h2>Why Does the Same ChatGPT Produce Wildly Different Copy?</h2>
<p>Many people use ChatGPT to write copy and get either lifeless recaps or empty jargon ("empower, synergy, holistic"). The problem isn't the tool—it's the <strong>prompt</strong>. A prompt is the "task spec" between you and the AI. Written well, AI becomes your star copywriter; written poorly, it hands you a passable placeholder. Here are 7 proven prompt techniques for consistently high-quality AI copy.</p>

<h2>Tip 1: Set a Role to Frame the Expertise</h2>
<p>AI has no default identity—your first sentence sets its tone and expertise. Instead of "write a product intro," say "<strong>You are a tech copywriter with 10 years of experience who excels at making complex features easy to understand</strong>." A role cues the AI into the right domain vocabulary and produces more professional output.</p>
<blockquote>Golden formula: role + experience + specialty + target audience.</blockquote>

<h2>Tip 2: Structure Instructions—Don't Dump a Wall of Text</h2>
<p>Split your request into <strong>task, context, requirements, format</strong>, using numbers or headings. Free-form prose makes the AI lose the thread; structured instructions let it follow a map. "Output 3 paragraphs, max 80 words each, end with a CTA" beats "make it shorter" ten times over.</p>

<h2>Tip 3: Provide Reference Samples</h2>
<p>If you have copy you like, paste it as an example: "<strong>Match this style and write something similar for my product</strong>." Few-shot learning is one of the most reliable prompt techniques—far more dependable than describing style in words.</p>

<h2>Tip 4: Specify Audience and Platform</h2>
<p>Copy for a Xiaohongshu teen and a B2B procurement manager are completely different beasts. Always tell the AI: <strong>who reads this, where it's published, what they care about</strong>. A robot vacuum pitched on Xiaohongshu = "lazy savior, renter-friendly"; in a B2B proposal = "lower ops cost, higher cleaning efficiency."</p>

<h2>Tip 5: Constrain Tone, Length, and Banned Words</h2>
<p>AI defaults to florid phrasing and clichés. Issue explicit bans: "<strong>No empty words like 'empower' or 'ultimate'; conversational tone; under 200 words total</strong>." Negative constraints often outperform positive descriptions.</p>

<h2>Tip 6: Iterate Step by Step—Don't Aim for One-Shot</h2>
<p>Don't expect a single prompt to yield perfect copy. The professional approach is <strong>stepwise</strong>: ask for 3 title angles first, lock one, expand the outline, confirm, then draft, then polish. Human oversight at each step beats one-shot generation.</p>

<h2>Tip 7: Ask the AI to Self-Critique and Offer Versions</h2>
<p>After generating, add: "<strong>Critique this copy from the reader's view—name 3 weaknesses—and give a stronger version</strong>." Letting the AI reflect surfaces hidden issues. Asking for 2-3 versions to compare also raises your hit rate.</p>

<h2>A Reusable Prompt Template</h2>
<p>Combine the tips into a universal template:</p>
<blockquote>You are a [role] with [experience]. Write a [content type] for [product], targeting [audience], to be published on [platform]. Requirements: [length] [tone] [banned words]. First give 3 title directions; I'll confirm before you expand. Reference style: [paste sample].</blockquote>

<h2>Conclusion</h2>
<p>Prompt writing is essentially translating fuzzy writing needs into instructions the AI can execute precisely. Master these 7 tips and ChatGPT stops being a "random copy generator" and becomes a controllable productivity tool. The key: <strong>use human judgment for instruction design and version selection, and let AI handle the mechanical drafting</strong>.</p>
`
  },

  /* ====== writing 第 2 篇 ====== */
  "ai-write-blog-post-fast": {
    zh: `
<h2>为什么 90% 的人用 AI 写博客，效率反而更低？</h2>
<p>很多人打开 ChatGPT 就直接说"帮我写一篇关于 XX 的博客"，结果拿到一篇空洞、AI 味浓重的文章，改起来比从头写还累。问题在于：<strong>AI 写作不是"一键生成"，而是一条流水线</strong>。把流水线跑顺，30 分钟从选题到发布完全可行。本文拆解一套经过验证的 AI 博客写作全流程。</p>

<h2>第 1 步：用 AI 做选题与关键词研判（5 分钟）</h2>
<p>不要拍脑袋选题。让 AI 帮你做关键词研究："<strong>围绕【主题】，列出 10 个有搜索量、竞争适中的长尾关键词，并给出搜索意图</strong>"。选一个意图明确、你能写出差异化观点的关键词作为文章主轴，这决定了后续 80% 的流量。</p>

<h2>第 2 步：生成结构化大纲（3 分钟）</h2>
<p>锁定关键词后，让 AI 生成大纲：<strong>"以【关键词】为核心，写一篇 1500 字博客，先给我 H2/H3 大纲，每个 H2 下用 2-3 句话说明要写什么"</strong>。人工过一遍大纲，删掉凑数的部分，补充你独有的案例或观点。大纲是骨架，骨架对了，正文不会跑偏。</p>

<h2>第 3 步：分段生成正文（10 分钟）</h2>
<p>这是最关键的一步：<strong>不要让 AI 一次性写完全文</strong>。逐个 H2 章节，把该章节的大纲和你的素材喂给 AI，要求"800 字以内、口语化、多用具体案例和数字"。分段生成能让你实时把控质量，发现问题立刻调整，避免最后面对一篇要全盘重写的烂稿。</p>

<h2>第 4 步：注入"人味"（7 分钟）</h2>
<p>AI 生成的内容普遍缺三样东西：<strong>个人观点、真实案例、数据支撑</strong>。这一步只能人工补。在每个 H2 里加入你的亲身经历、一个具体客户的故事、或一组行业数据。这些是 AI 编不出来的，也是读者愿意看完并转发的核心原因。</p>
<blockquote>判断标准：删掉所有案例后，如果文章变成"正确但无聊"的废话，说明人味加得不够。</blockquote>

<h2>第 5 步：SEO 与可读性优化（3 分钟）</h2>
<p>把成稿丢回 AI，让它做两件事：一是<strong>检查关键词密度和 H2/H3 是否包含关键词变体</strong>；二是<strong>优化标题和首段，提升点击和停留</strong>。同时让 AI 把长段落拆短、加小标题和列表，提升移动端可读性。</p>

<h2>第 6 步：配图与发布（2 分钟）</h2>
<p>用 AI 绘画工具（如 Midjourney）生成封面和章节配图，保持视觉风格统一。检查 meta description、URL 别名、内链，然后发布。整套流程跑顺后，30 分钟搞定一篇高质量博客完全可行。</p>

<h2>避坑提醒</h2>
<p>三个常见陷阱：一是<strong>跳过大纲直接写正文</strong>，结构必然混乱；二是<strong>一次性生成全文</strong>，质量不可控；三是<strong>不加工直接发</strong>，AI 味重、读者一眼识破。记住：AI 负责把"从 0 到 60 分"的体力活干掉，你要做的是把它推到 90 分。</p>
`,
    en: `
<h2>Why Do 90% of People Get Slower with AI Blog Writing?</h2>
<p>Many open ChatGPT and say "write a blog about X," get a hollow, AI-scented piece, and spend more time editing than writing from scratch. The issue: <strong>AI writing isn't one-click generation—it's a pipeline</strong>. Smooth the pipeline, and topic-to-publish in 30 minutes is realistic. Here's a proven end-to-end workflow.</p>

<h2>Step 1: AI-Powered Topic & Keyword Research (5 min)</h2>
<p>Don't pick topics on a hunch. Have AI do keyword research: "<strong>Around [topic], list 10 long-tail keywords with decent search volume and moderate competition, plus search intent</strong>." Pick a keyword with clear intent where you can add a differentiated view—it drives 80% of future traffic.</p>

<h2>Step 2: Generate a Structured Outline (3 min)</h2>
<p>With the keyword locked, ask AI for an outline: <strong>"Centered on [keyword], plan a 1500-word blog; give me H2/H3 first, with 2-3 sentences under each H2 on what to cover."</strong> Manually review—cut filler, add your unique cases or views. The outline is the skeleton; get it right and the body won't drift.</p>

<h2>Step 3: Generate the Body Section by Section (10 min)</h2>
<p>The most critical step: <strong>don't let AI write the whole article at once</strong>. Feed each H2 plus your material, asking for "under 800 words, conversational, rich in concrete cases and numbers." Section-by-section keeps quality in real time—spot issues and adjust instantly, instead of facing a full rewrite at the end.</p>

<h2>Step 4: Inject "Human Flavor" (7 min)</h2>
<p>AI output typically lacks three things: <strong>personal opinions, real cases, and data</strong>. Only humans can add these. Under each H2, insert a personal experience, a real customer story, or industry data. These are what AI can't fabricate—and what makes readers stay and share.</p>
<blockquote>Test: if removing all cases leaves the article "correct but boring," you haven't added enough human flavor.</blockquote>

<h2>Step 5: SEO & Readability Polish (3 min)</h2>
<p>Toss the draft back to AI for two things: <strong>check keyword density and whether H2/H3 include keyword variants</strong>; and <strong>optimize the title and intro for clicks and dwell time</strong>. Also have AI split long paragraphs, add subheads and lists for mobile readability.</p>

<h2>Step 6: Images & Publish (2 min)</h2>
<p>Use AI art tools (e.g., Midjourney) for cover and section images with a consistent style. Check meta description, URL slug, internal links, then publish. Once the pipeline is smooth, 30 minutes per high-quality post is achievable.</p>

<h2>Pitfalls to Avoid</h2>
<p>Three common traps: <strong>skipping the outline</strong> (structure will be a mess); <strong>one-shot full generation</strong> (quality uncontrollable); <strong>publishing unedited</strong> (heavy AI scent, readers spot it instantly). Remember: AI handles the "0 to 60" grunt work—your job is pushing it to 90.</p>
`
  },

  /* ====== writing 第 3 篇 ====== */
  "ai-xiaohongshu-copywriting": {
    zh: `
<h2>小红书爆款文案的底层逻辑</h2>
<p>小红书是"标题党 + 视觉化 + 情绪共鸣"三件套的极致战场。一篇笔记能不能爆，50% 看封面和标题，30% 看正文前两行，只有 20% 看完整内容。用 AI 写小红书文案，关键不是让 AI"写得好"，而是<strong>让 AI 按爆款公式批量生产可测试的素材</strong>。本文给出可直接套用的标题公式、正文结构和提示词。</p>

<h2>爆款标题的 5 个万能公式</h2>
<p>让 AI 按以下公式生成 10 个标题，你挑最优：</p>
<ul>
  <li><strong>数字 + 痛点</strong>："3 个动作，告别法令纹"</li>
  <li><strong>反差/颠覆</strong>："贵妇面霜居然不如这瓶 30 块的"</li>
  <li><strong>身份代入</strong>："28 岁打工人的抗老攻略"</li>
  <li><strong>悬念/好奇</strong>："用了 7 天，我妈问我做了什么项目"</li>
  <li><strong>干货合集</strong>："新手必看｜0 基础学化妆全流程"</li>
</ul>

<h2>正文结构：钩子 + 痛点 + 方案 + 互动</h2>
<p>小红书正文黄金结构是<strong>四段式</strong>。第一段（钩子）：用一句反常识或强情绪开头，3 秒抓住眼球。第二段（痛点）：精准戳中读者困扰，让她觉得"这就是我"。第三段（方案）：给出 3-5 个具体可执行的方法，配 emoji 分点排版。第四段（互动）：抛出问题引导评论，如"姐妹们还有什么平价好物？评论区见"。</p>

<h2>给 AI 的提示词模板</h2>
<blockquote>你是小红书爆款文案博主，粉丝 50w，擅长【领域】。请为【产品/话题】写一篇笔记。要求：1）按上述 5 个标题公式各给 2 个标题共 10 个；2）正文用四段式结构，总字数 300-400；3）每段配 emoji，多用换行；4）结尾埋 3-5 个相关话题标签；5）语气像闺蜜安利，禁止书面腔。</blockquote>

<h2>排版与标签的隐藏技巧</h2>
<p>小红书是视觉平台，<strong>排版就是内容的一部分</strong>。让 AI 做到：每 2-3 句换行、关键信息加【】或 emoji 高亮、重要结论单独成行。标签策略上，选 1 个大流量词 + 2 个中等词 + 2 个精准长尾词，覆盖不同流量池。</p>

<h2>批量测试与数据复盘</h2>
<p>AI 的最大价值是<strong>批量生产可 A/B 测试的素材</strong>。同主题生成 5 组不同标题和首图，分时段发布，看哪组数据好，总结规律反哺下一批提示词。爆款从来不是写出来的，是测出来的。</p>

<h2>避坑：小红书 AI 文案的 3 个雷区</h2>
<p>一是<strong>过度堆砌 emoji</strong>，反而像广告；二是<strong>关键词堆砌触发限流</strong>，标签要自然；三是<strong>内容与首图不符</strong>，跳出率高、权重下降。记住：AI 负责高效产出，真实体验和数据反馈负责筛选优化。</p>
`,
    en: `
<h2>The Underlying Logic of Viral Xiaohongshu Copy</h2>
<p>Xiaohongshu (RED) is the ultimate arena of "clickbait + visual + emotional resonance." Whether a note goes viral is 50% cover/title, 30% the first two lines, and only 20% the full body. The key to AI RED copy isn't "writing well"—it's <strong>mass-producing testable assets via proven formulas</strong>. Here are copy-paste title formulas, body structures, and prompts.</p>

<h2>5 Universal Viral Title Formulas</h2>
<p>Have AI generate 10 titles by these formulas, then pick the best:</p>
<ul>
  <li><strong>Number + pain point</strong>: "3 moves to banish smile lines"</li>
  <li><strong>Contrast/subversion</strong>: "This $4 bottle beats luxury cream"</li>
  <li><strong>Identity</strong>: "28-yo office worker's anti-aging routine"</li>
  <li><strong>Suspense/curiosity</strong>: "After 7 days, my mom asked what I'd done"</li>
  <li><strong>Collection</strong>: "Must-read | full zero-to-makeup guide"</li>
</ul>

<h2>Body Structure: Hook + Pain + Solution + Interaction</h2>
<p>The golden RED body is a <strong>four-part structure</strong>. Part 1 (hook): counterintuitive or emotional opener—grab attention in 3 seconds. Part 2 (pain): precisely hit the reader's struggle so she thinks "that's me." Part 3 (solution): 3-5 concrete actions with emoji bullets. Part 4 (interaction): ask a question to drive comments, e.g., "What budget gems do you have? Drop in comments."</p>

<h2>The AI Prompt Template</h2>
<blockquote>You're a viral RED creator with 500k followers, expert in [field]. Write a note for [product/topic]. Requirements: 1) 10 titles (2 per formula above); 2) four-part body, 300-400 words; 3) emoji per paragraph, frequent line breaks; 4) end with 3-5 topic tags; 5) bestie-recommending tone, no formal phrasing.</blockquote>

<h2>Hidden Tips for Formatting & Tags</h2>
<p>RED is visual—<strong>formatting is part of the content</strong>. Have AI: line-break every 2-3 sentences, highlight key info with 【】 or emoji, isolate key conclusions on their own lines. For tags, pick 1 high-traffic + 2 mid + 2 precise long-tail keywords to cover different traffic pools.</p>

<h2>Batch Testing & Data Review</h2>
<p>AI's biggest value is <strong>mass-producing A/B-testable assets</strong>. Generate 5 title/cover variants per topic, publish at different times, see what wins, and feed insights back into prompts. Viral hits are never written—they're tested.</p>

<h2>Pitfalls: 3 RED AI Minefields</h2>
<p>One: <strong>emoji overload</strong> looks like an ad; two: <strong>keyword stuffing triggers throttling</strong>—tags must feel natural; three: <strong>mismatched cover and content</strong> spikes bounce rate and tanks ranking. Remember: AI handles efficient production; real experience and data drive selection and optimization.</p>
`
  },

  /* ====== writing 第 4 篇 ====== */
  "ai-business-email-templates": {
    zh: `
<h2>商务邮件：最被低估的 AI 应用场景</h2>
<p>商务人士每天花在写邮件上的时间，远超想象。催款怕得罪客户、英文邮件怕语法错、道歉邮件怕越描越黑——这些高频却消耗心力的场景，正是 AI 最擅长接管的领域。本文整理 10 个最常用的商务邮件场景，每个都附可直接套用的提示词模板，让你 1 分钟生成得体的专业邮件。</p>

<h2>场景一：催款邮件（最难拿捏分寸）</h2>
<p>催款的核心是<strong>先礼后兵、留有余地</strong>。提示词："你是资深商务助理。请写一封温和但明确的催款邮件给【客户】，应收金额【X】，账期已过【N】天。语气专业、不卑不亢，附上付款方式和截止日期，结尾表达继续合作的意愿。"</p>

<h2>场景二：询价邮件（B 端通用）</h2>
<p>询价要体现专业度，避免被当小白宰。提示词："以采购经理身份向【供应商】询价【产品】，列明规格、数量、交付周期和目标价区间，要求对方 3 个工作日内报价并提供样品。语气干练、体现有备而来。"</p>

<h2>场景三：道歉邮件（危机公关）</h2>
<p>道歉三要素：<strong>认错、补救、承诺</strong>。提示词："因【问题】给【客户】造成困扰，写一封诚恳的道歉邮件。说明原因（不甩锅）、给出具体补救方案和时间表、承诺改进措施。语气真诚，不卑不亢。"</p>

<h2>场景四：会议邀请</h2>
<p>"以【职位】身份邀请【对方】参加【主题】会议，时间【X】、地点/链接【Y】、议程【Z】。说明会议目的和希望对方准备的内容，结尾确认出席。语气专业热情。"</p>

<h2>场景五：跟进邮件（Follow-up）</h2>
<p>"在发送【原邮件主题】后【N】天未收到回复，写一封得体的跟进邮件。温和提醒、补充一个新价值点（如新案例/新优惠）、给出明确的下一步动作。不要显得催促。"</p>

<h2>场景六至十：报价、拒绝、感谢、推荐、辞职</h2>
<p>其余高频场景的提示词结构相通，核心都是<strong>"角色 + 收件人 + 目的 + 关键信息 + 语气要求"</strong>。例如报价邮件强调"列清明细、留议价空间"；拒绝邮件强调"肯定对方 + 客观理由 + 留门"；辞职邮件强调"感谢 + 交接 + 体面"。</p>

<h2>英文邮件的额外技巧</h2>
<p>写英文邮件时，提示词加一句"<strong>用 native、professional 但不过于正式的商务英语，避免生僻词和中式英语</strong>"。生成后再让 AI 检查"<strong>有无语法错误、是否过于啰嗦、是否符合英文邮件开门见山的习惯</strong>"。</p>

<h2>通用提示词框架</h2>
<blockquote>你是【角色】。写给【收件人/职位】。目的：【目的】。必须包含的信息：【列表】。语气：【专业/温和/坚定】。长度：【X 字以内】。请给中英双语版本。</blockquote>

<h2>结语</h2>
<p>商务邮件的价值不在文采，而在<strong>得体、高效、零失误</strong>。把这 10 个场景的提示词存成模板库，遇到对应场景直接调用，能把每天 1 小时的邮件时间压缩到 15 分钟。</p>
`,
    en: `
<h2>Business Email: The Most Underrated AI Use Case</h2>
<p>Professionals spend far more time on email than they realize. Dunning letters risk offending clients, English emails risk grammar slip-ups, apologies risk making things worse—these frequent but draining scenarios are exactly what AI handles best. Here are 10 common business email scenarios, each with a ready-to-use prompt template to generate polished emails in 1 minute.</p>

<h2>Scenario 1: Payment Reminder (Hardest to Calibrate)</h2>
<p>The core is <strong>firm but courteous, leaving room</strong>. Prompt: "You're a senior business assistant. Write a warm but clear dunning email to [client] for amount [X], overdue [N] days. Professional, neither servile nor pushy, include payment methods and deadline, end expressing willingness to keep cooperating."</p>

<h2>Scenario 2: Price Inquiry (B2B)</h2>
<p>Show expertise—don't look like an easy mark. Prompt: "As a procurement manager, inquire with [supplier] about [product]: list specs, quantity, delivery window, and target price range. Request a quote within 3 business days plus samples. Crisp tone, showing you've done your homework."</p>

<h2>Scenario 3: Apology Email (Crisis PR)</h2>
<p>Three elements: <strong>own it, fix it, promise better</strong>. Prompt: "Write a sincere apology to [client] for [issue]. Explain the cause (no blame-shifting), give concrete remedies and a timeline, and promise improvements. Genuine tone, neither groveling nor stiff."</p>

<h2>Scenario 4: Meeting Invitation</h2>
<p>"As [title], invite [recipient] to a [topic] meeting at [time], [location/link], agenda [Z]. State the goal and what they should prepare, and ask to confirm attendance. Professional and warm."</p>

<h2>Scenario 5: Follow-up</h2>
<p>"No reply [N] days after sending [original subject]—write a tactful follow-up. Gentle reminder, add a new value point (new case / offer), specify a clear next step. Don't sound pushy."</p>

<h2>Scenarios 6–10: Quote, Decline, Thank-You, Referral, Resignation</h2>
<p>The remaining high-frequency scenarios share a structure: <strong>"role + recipient + purpose + key info + tone"</strong>. Quote emails stress "clear line items, room to negotiate"; decline emails stress "validate + objective reason + leave the door open"; resignation stresses "thanks + handover + graceful exit."</p>

<h2>Extra Tips for English Emails</h2>
<p>For English, add "<strong>use native, professional but not overly formal business English; avoid obscure words and Chinglish</strong>." Then have AI check "<strong>grammar errors, wordiness, and whether it matches English email convention of getting to the point fast</strong>."</p>

<h2>A Universal Prompt Framework</h2>
<blockquote>You are [role]. Writing to [recipient/title]. Purpose: [purpose]. Must include: [list]. Tone: [professional/warm/firm]. Length: [under X words]. Provide both Chinese and English versions.</blockquote>

<h2>Conclusion</h2>
<p>The value of business email isn't eloquence—it's <strong>propriety, efficiency, zero errors</strong>. Save these 10 scenario prompts as a library and call them on demand, and you'll cut your daily email hour down to 15 minutes.</p>
`
  },

  /* ====== writing 第 5 篇 ====== */
  "ai-academic-paper-assistant": {
    zh: `
<h2>AI 辅助论文写作：边界在哪？</h2>
<p>高校对 AI 写论文的态度正从"一刀切禁止"转向"规范使用"。关键区分是：<strong>用 AI 代写 = 学术不端；用 AI 辅助思考、检索、润色 = 合规提效</strong>。本文聚焦后者，讲清楚哪些环节能用 AI、怎么用才合规，以及如何避免"AI 味"被查出来。</p>

<h2>合规用法一：选题与文献发现</h2>
<p>这是 AI 最能合法发力的环节。提示词："<strong>我的研究方向是【X】，请基于近 3 年的顶会/顶刊，列出 10 个有研究价值、尚未被充分探讨的选题，并说明每个选题的可行性和创新点</strong>"。AI 能快速帮你建立研究全景，但要自己去 Google Scholar / 知网核实文献真实存在——AI 会"幻觉"出根本不存在的论文。</p>

<h2>合规用法二：文献综述的结构梳理</h2>
<p>文献综述不是文献堆砌，而是<strong>按逻辑脉络组织</strong>。把 20-30 篇核心文献的摘要喂给 AI，让它"<strong>按主题/方法/时间线三种脉络，帮我梳理这些研究的演进和分歧点，指出研究空白</strong>"。AI 擅长发现文献间的关联和矛盾，这是综述的核心价值。</p>

<h2>合规用法三：语言润色（降 AI 味）</h2>
<p>写完初稿后，让 AI 做<strong>纯语言层面的润色</strong>："请优化这段学术表达，要求：符合【学科】论文用语规范、长句拆短、去掉口语化表述、保留所有原意和专业术语，不要增删观点"。注意只让它改语言，不让它加内容——加内容容易引入错误。</p>

<h2>关于"降重"的真相</h2>
<p>很多人找 AI"降重"，本质是<strong>同义改写绕过查重</strong>。合规的做法是：让 AI 理解原文观点后，用你自己的语言重新组织，并<strong>正确标注引用</strong>。查重率高的根因往往是引用不规范，而非表达问题。规范的引用 + 自己的转述，才是治本之道。</p>

<h2>必须警惕的三个红线</h2>
<ul>
  <li><strong>数据造假</strong>：让 AI 编造实验数据，是严重的学术不端</li>
  <li><strong>文献幻觉</strong>：AI 引用的文献必须逐一核实真实性</li>
  <li><strong>核心观点外包</strong>：研究的创新点和论证必须是你自己的</li>
</ul>

<h2>给 AI 的合规提示词模板</h2>
<blockquote>我是【学科】研究生，正在写关于【主题】的论文【章节】。请帮我【具体任务：梳理文献/润色语言/检查逻辑】，要求：严格基于我提供的材料，不要编造文献和数据，保留我的核心观点，输出符合学术规范。</blockquote>

<h2>如何避免被判定为 AI 生成</h2>
<p>真正的解法不是"反检测技巧"，而是<strong>让内容有不可替代的人类痕迹</strong>：你独有的实验观察、田野调研的一手数据、与导师讨论后形成的独特视角。这些 AI 永远编不出来。把 AI 当成加速器而非代笔，才能既提效又安全。</p>
`,
    en: `
<h2>AI for Academic Writing: Where's the Line?</h2>
<p>Universities are shifting from blanket bans to "regulated use." The key distinction: <strong>AI ghostwriting = misconduct; AI for thinking, retrieval, polishing = compliant productivity</strong>. This article covers the latter—what AI can do, how to use it compliantly, and how to avoid the "AI scent."</p>

<h2>Compliant Use 1: Topic & Literature Discovery</h2>
<p>This is where AI shines most legitimately. Prompt: "<strong>My research area is [X]. Based on top venues of the past 3 years, list 10 under-explored topics with research value, explaining each one's feasibility and novelty.</strong>" AI quickly maps the field—but verify every reference on Google Scholar yourself, since AI hallucinates non-existent papers.</p>

<h2>Compliant Use 2: Structuring the Literature Review</h2>
<p>A review isn't a pile of papers—it's <strong>organized along a logical thread</strong>. Feed AI the abstracts of 20-30 core papers and ask it to "<strong>trace the evolution and disagreements across these studies by theme/method/timeline, and identify the research gap</strong>." AI excels at spotting connections and tensions—exactly what a review needs.</p>

<h2>Compliant Use 3: Language Polishing (Reduce AI Scent)</h2>
<p>After drafting, have AI do <strong>pure language polishing</strong>: "Optimize this academic prose per [field] conventions—split long sentences, remove colloquialisms, preserve all meaning and terms, don't add or delete arguments." Let it edit language only—adding content risks introducing errors.</p>

<h2>The Truth About "Reducing Similarity"</h2>
<p>Many seek AI to "reduce similarity," essentially <strong>paraphrasing to dodge plagiarism checkers</strong>. The compliant way: have AI grasp the source's point, reorganize it in your own words, and <strong>cite properly</strong>. High similarity usually stems from poor citation, not phrasing. Proper citation + your own paraphrasing is the real fix.</p>

<h2>Three Red Lines to Watch</h2>
<ul>
  <li><strong>Fabricating data</strong>: inventing experimental data is serious misconduct</li>
  <li><strong>Citation hallucination</strong>: verify every AI-cited reference exists</li>
  <li><strong>Outsourcing core arguments</strong>: the novelty and reasoning must be yours</li>
</ul>

<h2>A Compliant Prompt Template</h2>
<blockquote>I'm a [field] grad student writing the [section] of a paper on [topic]. Help me [specific task: review literature / polish language / check logic]. Requirements: strictly based on my materials, no fabricated references or data, preserve my core arguments, output to academic standards.</blockquote>

<h2>How to Avoid Being Flagged as AI-Generated</h2>
<p>The real answer isn't "anti-detection tricks"—it's <strong>making the content carry irreplaceable human traces</strong>: your unique experimental observations, first-hand field data, the distinct angle shaped in discussions with your advisor. AI can never fabricate these. Treat AI as an accelerator, not a ghostwriter, to boost efficiency safely.</p>
`
  },

  /* ====== writing 第 6 篇 ====== */
  "ai-novel-fiction-writing": {
    zh: `
<h2>AI 写小说：助手而非代笔</h2>
<p>用 AI 写小说最怕两种极端：一是完全放手让 AI 写，结果人物扁平、情节套路；二是只用 AI 查资料，浪费了它的结构能力。正确的定位是<strong>把 AI 当成"联合编剧"</strong>——它负责脑暴、查漏、扩写，你负责灵魂和决策。本文给出一套从世界观到连载的完整 AI 写作工作流。</p>

<h2>第一步：用 AI 构建世界观设定集</h2>
<p>世界观是网文的根基。提示词："<strong>我要写一部【类型】小说，背景设定在【一句话描述】。请帮我完善：地理/政治/经济/魔法或科技体系/主要势力冲突，输出一份 2000 字的世界观设定集，要求逻辑自洽、有独特记忆点</strong>"。一份扎实的设定集，能避免后期崩设定。</p>

<h2>第二步：塑造立体角色</h2>
<p>扁平角色是 AI 写作的重灾区。让它深度构建："<strong>为角色【名字】建立档案：核心欲望、致命弱点、说话习惯、外貌特征、与前史相关的执念。给出 3 个能体现其性格的典型场景</strong>"。记住，<strong>好角色的核心是矛盾</strong>——欲望与弱点之间的张力，让 AI 围绕矛盾设计行为。</p>

<h2>第三步：用"三幕结构"规划主线</h2>
<p>让 AI 按经典三幕结构搭骨架：第一幕（建置：日常世界→激励事件→入局）、第二幕（对抗：困难升级→中点反转→至暗时刻）、第三幕（解决：高潮→结局）。提示词："<strong>基于我的设定和角色，用三幕结构规划 50 章主线，标注每幕的关键转折点和情感曲线</strong>"。</p>

<h2>第四步：单章扩写与冲突设计</h2>
<p>实际写作时，<strong>一章一个提示词</strong>。给出本章目标、出场角色、要推进的悬念，让 AI 写 2000 字初稿。然后人工强化：<strong>给反派加一个反讽细节、给主角制造一个两难抉择、在结尾留钩子</strong>。这三招能让 AI 平淡的初稿立刻有张力。</p>
<blockquote>公式：AI 写骨架，人加血肉。冲突、反转、留白，永远是人类的强项。</blockquote>

<h2>保持人物与设定的连续性</h2>
<p>写到 30 章后，AI 会"忘记"前面设定。解决方法是<strong>维护一份"圣经文档"</strong>——角色档案、已发生剧情、伏笔清单。每次写作前把相关片段喂给 AI 作为上下文，确保人物口吻一致、伏笔不丢。</p>

<h2>警惕 AI 小说的三大通病</h2>
<ul>
  <li><strong>语言华丽但空洞</strong>：AI 爱堆形容词，要狠删</li>
  <li><strong>对话千人一面</strong>：每个角色必须有自己的口头禅和节奏</li>
  <li><strong>大团圆审美疲劳</strong>：适当留遗憾和代价，才有回味</li>
</ul>

<h2>结语</h2>
<p>AI 让"写完一部小说"从天赋游戏变成了工程问题。但真正打动读者的，始终是作者对人性、命运的理解。把 AI 用在它能做好的地方，把你的独特性留给只有你能写的部分。</p>
`,
    en: `
<h2>AI Novel Writing: Assistant, Not Ghostwriter</h2>
<p>The two failure modes with AI fiction: fully outsourcing it (flat characters, clichéd plots) or using AI only for research (wasting its structural power). The right framing is <strong>treating AI as a "co-writer"</strong>—it brainstorms, fact-checks, and expands; you bring the soul and decisions. Here's a full workflow from worldbuilding to serialization.</p>

<h2>Step 1: Build a World Bible with AI</h2>
<p>Worldbuilding is the foundation of web fiction. Prompt: "<strong>I'm writing a [genre] novel set in [one-line premise]. Flesh out: geography/politics/economy/magic or tech systems/major faction conflicts. Output a 2000-word world bible that's logically coherent with memorable hooks.</strong>" A solid bible prevents setting collapses later.</p>

<h2>Step 2: Craft Three-Dimensional Characters</h2>
<p>Flat characters are the top AI-writing pitfall. Have it go deep: "<strong>Build a dossier for [name]: core desire, fatal flaw, speech patterns, appearance, an obsession tied to backstory. Give 3 scenes that reveal their personality.</strong>" Remember, <strong>great characters are built on contradiction</strong>—the tension between desire and flaw. Have AI design behavior around that contradiction.</p>

<h2>Step 3: Plan the Main Arc with Three-Act Structure</h2>
<p>Have AI build the skeleton via the classic three acts: Act 1 (setup: ordinary world → inciting incident → commitment), Act 2 (confrontation: escalating obstacles → midpoint reversal → dark night), Act 3 (resolution: climax → ending). Prompt: "<strong>Based on my setting and characters, outline a 50-chapter main arc in three acts, marking key turning points and the emotional curve per act.</strong>"</p>

<h2>Step 4: Chapter Expansion & Conflict Design</h2>
<p>In practice, <strong>one prompt per chapter</strong>. Give the chapter goal, characters present, suspense to advance, and have AI draft 2000 words. Then manually strengthen: <strong>add an ironic detail to the villain, force a dilemma on the protagonist, leave a hook at the end</strong>. These three moves turn a flat AI draft tense instantly.</p>
<blockquote>Formula: AI writes the skeleton, humans add flesh. Conflict, reversal, negative space are forever human strengths.</blockquote>

<h2>Keep Character & Setting Continuity</h2>
<p>By chapter 30, AI "forgets" earlier setups. The fix is maintaining a <strong>"bible document"</strong>—character dossiers, events so far, foreshadowing list. Feed relevant fragments as context before each writing session to keep voices consistent and hooks intact.</p>

<h2>Watch the Three AI Novel Failures</h2>
<ul>
  <li><strong>Flowery but empty prose</strong>: AI piles adjectives—cut ruthlessly</li>
  <li><strong>Uniform dialogue</strong>: every character needs their own verbal tics and rhythm</li>
  <li><strong>Neat-ending fatigue</strong>: leave some regret and cost for aftertaste</li>
</ul>

<h2>Conclusion</h2>
<p>AI turns "finishing a novel" from a talent lottery into an engineering problem. But what truly moves readers remains the author's understanding of humanity and fate. Use AI where it excels, and save your uniqueness for what only you can write.</p>
`
  },

  /* ====== writing 第 7 篇 ====== */
  "ai-seo-content-optimization": {
    zh: `
<h2>SEO 写作的真相：不是堆关键词，是匹配意图</h2>
<p>很多人理解的 SEO 写作还停留在"把关键词塞 8 次"的时代。现在的搜索引擎（尤其 Google）早已用 AI 理解语义和搜索意图。<strong>真正的 SEO 友好，是让内容精准回答搜索者的问题，并在关键词相关的语义网络里做到完整</strong>。本文讲清楚如何用 AI 系统化优化内容的 SEO 表现。</p>

<h2>第一步：锁定核心词与搜索意图</h2>
<p>同一个关键词，搜索意图可能完全不同。"AI 写作"可能是想找工具（交易型）、找教程（信息型）、找对比（调研型）。用 AI 帮你判断："<strong>分析关键词【X】的搜索意图，列出搜索者最可能想解决的 5 个具体问题</strong>"。围绕真实意图组织内容，排名才会稳。</p>

<h2>第二步：构建语义关键词网络</h2>
<p>Google 看的是<strong>主题相关性</strong>，不是关键词重复次数。让 AI 帮你生成 LSI（潜在语义）关键词："<strong>围绕【核心词】，列出 20 个语义相关的子主题、同义词、常见搭配和用户会追问的疑问词</strong>"。把这些词自然融入文章，告诉搜索引擎"这个主题我讲全了"。</p>

<h2>第三步：优化标题与 H 标签</h2>
<p>标题是 SEO 权重最高的位置。让 AI 生成多个标题版本并评估："<strong>为核心词【X】写 5 个 SEO 标题，要求：包含核心词或近义词、60 字符以内、有数字或情绪钩子、前缀放核心词</strong>"。H2/H3 标签也要分布关键词变体，形成清晰的内容层次。</p>

<h2>第四步：内容深度与全面性</h2>
<p>排名靠前的内容普遍<strong>长且全</strong>。让 AI 帮你查漏："<strong>这是我的文章大纲，对比排名前 10 的竞品，指出我遗漏了哪些子话题和常见问题</strong>"。补齐这些内容，你的文章在主题覆盖度上就能超越多数竞品。同时加入独家数据、原创观点，提升内容价值密度。</p>
<blockquote>SEO 公式：意图匹配 × 主题完整 × 内容深度 × 体验良好。</blockquote>

<h2>第五步：可读性与用户信号优化</h2>
<p>搜索引擎越来越看重<strong>用户行为信号</strong>（停留时间、跳出率）。让 AI 优化可读性：拆短段落、加小标题、用列表和图表、首段直击问题。内容好读，用户停留久，排名自然提升。</p>

<h2>第六步：内链与结构化数据</h2>
<p>让 AI 帮你规划内链："<strong>基于这篇文章的主题，建议链接到站内哪 3 篇相关文章，用什么锚文本</strong>"。同时为文章添加 FAQ 结构化数据（Schema），有机会抢占搜索结果的富摘要位置，大幅提升点击率。</p>

<h2>给 AI 的 SEO 优化提示词</h2>
<blockquote>你是资深 SEO 专家。请优化这篇文章：1）检查关键词密度和分布是否自然；2）补充 5 个语义相关词；3）重写标题和 meta description；4）建议 3 个内链；5）生成 FAQ 结构化数据。目标是提升【关键词】排名。</blockquote>

<h2>结语</h2>
<p>AI 时代的 SEO，本质是<strong>用 AI 把"用户到底想要什么"研究透，然后用高质量内容满足它</strong>。技巧服务于内容，内容服务于用户——这个顺序永远不能反。</p>
`,
    en: `
<h2>The Truth of SEO Writing: Match Intent, Don't Stuff Keywords</h2>
<p>Many still think SEO means "use the keyword 8 times." Modern search engines (especially Google) use AI to grasp semantics and intent. <strong>True SEO friendliness is precisely answering the searcher's question and being complete across the keyword's semantic network.</strong> Here's how to systematically optimize content SEO with AI.</p>

<h2>Step 1: Lock the Core Keyword & Search Intent</h2>
<p>The same keyword can hide very different intents. "AI writing" might seek tools (transactional), tutorials (informational), or comparisons (investigational). Use AI: "<strong>Analyze the intent of keyword [X]; list the 5 specific problems the searcher most likely wants solved.</strong>" Organize content around real intent for stable rankings.</p>

<h2>Step 2: Build a Semantic Keyword Network</h2>
<p>Google weighs <strong>topical relevance</strong>, not repetition. Have AI generate LSI keywords: "<strong>Around [core word], list 20 semantically related subtopics, synonyms, common collocations, and follow-up questions users ask.</strong>" Weave them in naturally to signal "I cover this topic fully."</p>

<h2>Step 3: Optimize Titles & H Tags</h2>
<p>The title carries the most SEO weight. Have AI generate and evaluate versions: "<strong>Write 5 SEO titles for [X]: include the core word or synonym, under 60 chars, with a number or emotional hook, keyword toward the front.</strong>" Distribute keyword variants across H2/H3 for clear hierarchy.</p>

<h2>Step 4: Depth & Comprehensiveness</h2>
<p>Top-ranking content is generally <strong>long and complete</strong>. Have AI audit: "<strong>Here's my outline—compared to the top 10 results, which subtopics and common questions am I missing?</strong>" Filling those gaps lets you surpass most rivals on topical coverage. Add exclusive data and original views to raise content value density.</p>
<blockquote>SEO formula: intent match × topic completeness × content depth × good experience.</blockquote>

<h2>Step 5: Readability & User Signal Optimization</h2>
<p>Search engines increasingly weigh <strong>user behavior signals</strong> (dwell time, bounce rate). Have AI improve readability: short paragraphs, subheads, lists, charts, and an intro that nails the question. Readable content keeps users longer, lifting rankings naturally.</p>

<h2>Step 6: Internal Links & Structured Data</h2>
<p>Have AI plan internal links: "<strong>Based on this article's topic, suggest 3 related internal pages to link to and with what anchor text.</strong>" Also add FAQ Schema for a shot at rich snippets—dramatically boosting CTR.</p>

<h2>The SEO Optimization Prompt</h2>
<blockquote>You're a senior SEO expert. Optimize this article: 1) check keyword density and natural distribution; 2) add 5 semantic keywords; 3) rewrite the title and meta description; 4) suggest 3 internal links; 5) generate FAQ structured data. Goal: rank for [keyword].</blockquote>

<h2>Conclusion</h2>
<p>SEO in the AI era is essentially <strong>using AI to research what users truly want, then satisfying it with high-quality content</strong>. Technique serves content, content serves users—that order must never flip.</p>
`
  },

  /* ====== writing 第 8 篇 ====== */
  "ai-product-description-generator": {
    zh: `
<h2>为什么 90% 的商品详情页文案都在"自嗨"？</h2>
<p>打开任意电商平台的详情页，你会看到铺天盖地的"高端、奢华、领先、极致"。这些词对消费者毫无意义，因为<strong>他们在意的不是你的产品多牛，而是它能帮我解决什么问题</strong>。AI 能帮你跳出"自嗨"陷阱，但前提是提示词写对。本文给出一套高转化商品文案的 AI 写作方法。</p>

<h2>第一步：挖透产品卖点与用户痛点</h2>
<p>不要让 AI 凭空写。先喂给它结构化信息："<strong>这是一款【产品】，参数：【列表】，目标用户：【画像】。请从用户视角分析：1）这款产品能解决的 5 个具体痛点；2）每个痛点对应的功能卖点；3）用户最在意的 3 个决策因素</strong>"。这一步把"产品思维"翻译成"用户思维"。</p>

<h2>第二步：用 FAB 框架组织文案</h2>
<p>高转化文案的金科玉律是 <strong>FAB：Feature（功能）→ Advantage（优势）→ Benefit（利益）</strong>。普通文案止步于"3000mAh 大电池"，高转化文案会说"3000mAh 电池 → 续航多 40% → 出差一整天不用找充电宝"。让 AI 严格按 FAB 改写每个卖点。</p>

<h2>第三步：场景化表达，让用户"看见自己"</h2>
<p>抽象的功能不如具体的场景。提示词："<strong>为每个卖点配一个真实使用场景，用第二人称'你'描述，让读者代入。例如不写'轻便'，写'装进通勤包几乎感觉不到重量'</strong>"。场景化能把功能转化成可感知的体验。</p>
<blockquote>消费者不买功能，买的是更好的自己。文案要描绘"使用后的我"。</blockquote>

<h2>第四步：制造信任与紧迫感</h2>
<p>转化需要两个推力：<strong>信任</strong>（相信产品好）和<strong>紧迫</strong>（现在就该买）。让 AI 加入：权威认证、用户评价数字（"10 万+ 复购"）、限时优惠、库存紧张提示。但要注意分寸，过度营销反而引发反感。</p>

<h2>第五步：适配不同位置的多版本输出</h2>
<p>详情页不同位置文案长度和目的不同。让 AI 一次生成多版本：主图标题（10 字钩子）、首屏卖点（30 字核心利益）、详情长文案（500 字全 FAB）、评价区引导语。一个提示词产出整套素材。</p>

<h2>电商高转化文案提示词模板</h2>
<blockquote>你是资深电商文案，擅长高转化详情页。为【产品】写详情页文案。产品信息：【参数】。目标用户：【画像】。要求：1）用 FAB 框架写 5 个核心卖点；2）每个卖点配使用场景；3）首屏一句话打动用户；4）加入信任元素和适度紧迫感；5）分别输出主图标题、首屏、详情、引导语四版本。语气像朋友推荐，禁用空泛形容词。</blockquote>

<h2>避坑：电商文案的三个雷区</h2>
<ul>
  <li><strong>夸大功效</strong>：违反广告法，还伤口碑</li>
  <li><strong>忽略负面使用场景</strong>：适当说明适用人群反而提升信任</li>
  <li><strong>不分人群一稿多用</strong>：不同用户痛点不同，需分版本</li>
</ul>

<h2>结语</h2>
<p>商品文案的本质是<strong>用用户的语言，讲产品如何让他生活更好</strong>。AI 帮你快速完成从功能到利益的翻译、从抽象到场景的转化，让每一句文案都为成交服务。</p>
`,
    en: `
<h2>Why Do 90% of Product Pages "Self-Admire"?</h2>
<p>Open any e-commerce detail page and you'll see endless "premium, luxurious, leading, ultimate." These words mean nothing to consumers because <strong>they don't care how great your product is—they care what problem it solves for them</strong>. AI can pull you out of the self-admiration trap—if your prompt is right. Here's a high-conversion AI copywriting method.</p>

<h2>Step 1: Dig into Selling Points & Pain Points</h2>
<p>Don't let AI write from nothing. Feed it structured info: "<strong>This is a [product], specs: [list], target users: [persona]. From the user's view, analyze: 1) 5 specific pains it solves; 2) the feature behind each pain; 3) the 3 decision factors users care about most.</strong>" This translates product thinking into user thinking.</p>

<h2>Step 2: Organize Copy with the FAB Framework</h2>
<p>The golden rule is <strong>FAB: Feature → Advantage → Benefit</strong>. Average copy stops at "3000mAh battery"; high-conversion copy says "3000mAh battery → 40% more battery life → a full business trip without hunting for a charger." Have AI rewrite every selling point strictly by FAB.</p>

<h2>Step 3: Use Scenarios So Users "See Themselves"</h2>
<p>Abstract features lose to concrete scenes. Prompt: "<strong>For each selling point, add a real usage scenario in second person ('you') for immersion. Instead of 'lightweight,' write 'slips into your commute bag almost unnoticed.'</strong>" Scenarios turn features into felt experience.</p>
<blockquote>Consumers don't buy features—they buy a better self. Copy must paint "me after using it."</blockquote>

<h2>Step 4: Build Trust & Urgency</h2>
<p>Conversion needs two pushes: <strong>trust</strong> (believe it's good) and <strong>urgency</strong> (buy now). Have AI add: certifications, review numbers ("100k+ repurchases"), limited-time offers, low-stock alerts—but with restraint, since over-marketing backfires.</p>

<h2>Step 5: Multi-Version Output for Different Placements</h2>
<p>Different page spots need different lengths and goals. Have AI generate versions at once: hero title (10-char hook), above-the-fold selling point (30-char core benefit), long detail copy (500-char full FAB), and review-section prompts. One prompt, a full asset pack.</p>

<h2>The High-Conversion E-commerce Prompt Template</h2>
<blockquote>You're a senior e-commerce copywriter expert at high-conversion detail pages. Write copy for [product]. Specs: [params]. Target users: [persona]. Requirements: 1) 5 core selling points via FAB; 2) a usage scenario per point; 3) one opening line that hooks; 4) trust elements and moderate urgency; 5) four versions—hero title, above-the-fold, detail, prompt. Friendly tone, no empty adjectives.</blockquote>

<h2>Pitfalls: 3 E-commerce Minefields</h2>
<ul>
  <li><strong>Exaggeration</strong>: violates ad law and hurts reputation</li>
  <li><strong>Ignoring negative scenarios</strong>: naming the right audience actually builds trust</li>
  <li><strong>One copy for all</strong>: different users have different pains—split versions</li>
</ul>

<h2>Conclusion</h2>
<p>Product copy is essentially <strong>using the user's language to tell how the product makes their life better</strong>. AI helps you translate features into benefits and abstractions into scenarios, making every line serve the sale.</p>
`
  }
};

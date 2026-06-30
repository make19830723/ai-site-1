# AI 咨询内容站 · 一键部署到 Vercel

一个**零依赖、纯静态**的双语（中/英）AI 咨询内容网站，可通过 GitHub 一键部署到 Vercel，完全运行在免费额度内。

> 技术栈：原生 HTML + CSS + JavaScript，无构建步骤，无后端，无数据库。

---

## ✨ 特性

- 🌍 **中英双语**一键切换，自动记忆用户语言偏好
- 📝 **内容站结构**：首页（最新文章）+ 文章列表（分类筛选）+ 文章详情（数据驱动）
- 🎨 **简洁商务白**设计，响应式适配手机/平板/桌面
- 🔍 **SEO 友好**：干净 URL、动态 meta、Open Graph、JSON-LD 结构化数据、sitemap.xml
- ⚡ **零依赖零构建**：推送即部署，Vercel 免费套餐完全够用
- 🔒 默认开启安全响应头（X-Frame-Options、Referrer-Policy 等）
- 🚀 静态资源长期缓存，加载性能优秀

> ⚠️ 部署前请把 `sitemap.xml` 和 `robots.txt` 中的 `https://ai-site-1.vercel.app` 替换为你的正式域名。

---

## 📂 项目结构

```
ai-site-1/
├── index.html              # 首页（最新文章预览，data-limit 限制条数）
├── articles.html           # 文章列表页（分类筛选 + 全量展示）
├── favicon.svg             # 站点图标
├── robots.txt              # 爬虫规则 + sitemap 声明
├── sitemap.xml             # 站点地图（由文章数据生成）
├── vercel.json             # Vercel 部署配置（含 /p/<slug> rewrite）
├── css/
│   └── style.css           # 全局样式
├── js/
│   ├── i18n.js             # 双语文案数据 (zh / en)
│   ├── posts-categories.js # 文章分类定义（双语）
│   ├── posts-data.js       # 文章元数据（slug/标题/描述/封面等）
│   ├── posts-content.js    # 文章正文（按 slug 索引，双语）
│   ├── posts-base.js       # 文章系统核心（列表/详情/SEO/JSON-LD）
│   └── main.js             # 主交互（语言切换、导航、表单、数字动画）
└── p/
    └── article.html        # 文章详情模板（由 posts-base.js 按 ?slug= 渲染）
```

> 文章系统为**数据驱动**：详情页统一走 `/p/<slug>` → 经 `vercel.json` rewrite 到 `p/article.html?slug=<slug>`，由 `posts-base.js` 动态渲染。无需为每篇文章单独建 HTML 文件。

---

## 🚀 部署到 Vercel（推荐：通过 GitHub）

### 第 1 步：把项目推到 GitHub

1. 在 GitHub 新建一个仓库（例如 `ai-consult-site`），**不要**勾选 README。
2. 在本目录下打开终端（Git Bash / PowerShell / CMD 均可），执行：

```bash
git init
git add .
git commit -m "init: AI 咨询内容站"
git branch -M main
git remote add origin https://github.com/<你的用户名>/ai-consult-site.git
git push -u origin main
```

### 第 2 步：在 Vercel 一键导入

1. 打开 [vercel.com](https://vercel.com)，用 **GitHub 账号**登录（全程免费）。
2. 点击 **Add New… → Project**。
3. 在列表中点 **Import** 你刚推送的仓库。
4. 框架预设会自动识别为 **Other**（无需修改），**Build Command** 和 **Output Directory** 都留空即可。
5. 点 **Deploy**，等待约 10–30 秒。

部署完成后，Vercel 会给你一个 `xxx.vercel.app` 的免费域名，立即可访问。

### 第 3 步：（可选）绑定自定义域名

进入 Vercel 项目 → **Settings → Domains** → 添加你的域名，按提示配置 DNS 即可。

---

## 🔄 之后如何更新网站

每次你 `git push` 到 `main` 分支，Vercel 会**自动重新部署**。无需任何手动操作。

```bash
# 修改文件后
git add .
git commit -m "update: 新增一篇文章"
git push
```

---

## ✏️ 如何修改内容

### 修改网站文案（导航、首页、关于等）
编辑 `js/i18n.js`，在 `zh` 与 `en` 两个对象中同步修改对应 key。

### 新增一篇文章
1. 在 `js/posts-data.js` 的 `POSTS` 数组里追加一条元数据（包含 `slug`、`cat`、`title`、`description`、`keywords`、`cover`、`date`、`read`）。
2. 在 `js/posts-content.js` 的 `POST_CONTENT` 对象里按 `slug` 追加双语正文（`zh` / `en`，HTML 片段）。
3. （可选）在 `sitemap.xml` 追加一行 `<loc>https://你的域名/p/<slug></loc>`。
4. 无需新建 HTML 文件 —— 详情页由 `p/article.html` 统一渲染。

> 分类：在 `js/posts-categories.js` 维护。筛选条会自动隐藏没有文章的分类。

### 接入真实的联系表单
默认表单仅做前端校验。要真正接收提交，二选一：
- **Formspree**（最简单）：在 [formspree.io](https://formspree.io) 注册拿到 endpoint，在 `js/main.js` 的 `initContactForm` 中取消注释 `fetch(...)` 一行并填入你的 ID。
- **Vercel Forms**：升级到 Vercel Pro 后原生支持。

---

## 💰 关于免费额度

- **Vercel Hobby（免费）**：100GB 流量/月、无限静态部署、自动 HTTPS，对个人和小型内容站完全够用。
- **GitHub 免费版**：公开仓库无限协作者，私有仓库也免费。

> 若站点流量极大（10万+ PV/月），可考虑升级 Vercel Pro（$20/月）。

---

## 🛠 本地预览

无需安装任何东西，双击 `index.html` 即可在浏览器打开。

如需带本地服务器（推荐，路径更接近线上）：

```bash
# Python 3
python -m http.server 8080
# 然后访问 http://localhost:8080
```

---

## License

MIT — 可自由用于个人和商业项目。

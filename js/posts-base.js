/**
 * 文章系统核心逻辑 (100 篇数据驱动)
 * - 列表渲染 + 分类筛选
 * - 详情页动态渲染 (标题/正文/SEO meta/JSON-LD)
 * - 文案自动随语言切换
 *
 * 依赖: posts-data.js (POSTS, POST_CATEGORIES), posts-content.js (POST_CONTENT, 可选)
 */
(function () {
  "use strict";

  var POSTS = window.POSTS || [];
  var CATS = window.POST_CATEGORIES || {};
  var CONTENT = window.POST_CONTENT || {};
  var i18n = window.I18N || {};
  var dict = function (lang, key) { return (i18n[lang] && i18n[lang][key]) || key; };

  /* ---------- 工具 ---------- */
  function getLang() { return (window.__i18n && window.__i18n.getLang) ? window.__i18n.getLang() : "zh"; }

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }

  function findPost(slug) {
    for (var i = 0; i < POSTS.length; i++) if (POSTS[i].slug === slug) return POSTS[i];
    return null;
  }

  function articleUrl(slug) {
    // 干净 URL: /p/<slug>  (vercel.json 已配置 rewrite 到 /p/article.html?slug=)
    return "/p/" + slug;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- 列表页渲染 ---------- */
  function renderList(lang) {
    var grid = document.querySelector("[data-posts-grid]");
    if (!grid) return;

    var filter = grid.getAttribute("data-filter") || "all";
    var list = filter === "all" ? POSTS : POSTS.filter(function (p) { return p.cat === filter; });

    var html = "";
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      var cat = CATS[p.cat] || { zh: p.cat, en: p.cat };
      html +=
        '<article class="card">' +
        '  <a class="card-cover" href="' + articleUrl(p.slug) + '">' +
        '    <img src="' + p.cover + '" alt="' + escapeHtml(p.title[lang]) + '" loading="lazy">' +
        "  </a>" +
        '  <div class="card-body">' +
        '    <div class="card-meta">' +
        '      <span class="tag">' + cat[lang] + "</span>" +
        "      <time>" + p.date + "</time>" +
        '      <span>· ' + p.read + " " + (lang === "zh" ? "分钟" : "min") + "</span>" +
        "    </div>" +
        '    <h3 class="card-title">' + p.title[lang] + "</h3>" +
        '    <p class="card-excerpt">' + p.description[lang] + "</p>" +
        '    <a class="card-link" href="' + articleUrl(p.slug) + '">' +
        dict(lang, "articles.readmore") + "</a>" +
        "  </div>" +
        "</article>";
    }
    grid.innerHTML = html;

    // 计数
    var count = document.querySelector("[data-posts-count]");
    if (count) count.textContent = list.length;
  }

  /* ---------- 分类筛选条 ---------- */
  function renderFilters(lang) {
    var bar = document.querySelector("[data-filters]");
    if (!bar) return;

    var current = bar.getAttribute("data-filter") || "all";
    var cats = Object.keys(CATS);
    var html = '<button class="filter-chip' + (current === "all" ? " is-active" : "") + '" data-cat="all">' +
      (lang === "zh" ? "全部" : "All") + "</button>";
    for (var i = 0; i < cats.length; i++) {
      var c = cats[i];
      var has = POSTS.some(function (p) { return p.cat === c; });
      if (!has) continue;
      html += '<button class="filter-chip' + (current === c ? " is-active" : "") + '" data-cat="' + c + '">' +
        (CATS[c][lang]) + "</button>";
    }
    bar.innerHTML = html;

    var chips = bar.querySelectorAll(".filter-chip");
    for (var j = 0; j < chips.length; j++) {
      chips[j].addEventListener("click", function () {
        var cat = this.getAttribute("data-cat");
        var g = document.querySelector("[data-posts-grid]");
        if (g) {
          g.setAttribute("data-filter", cat);
          bar.setAttribute("data-filter", cat);
        }
        // 高亮切换
        var all = bar.querySelectorAll(".filter-chip");
        for (var k = 0; k < all.length; k++) all[k].classList.remove("is-active");
        this.classList.add("is-active");
        renderList(getLang());
        // 平滑滚到列表
        var sec = document.querySelector("[data-posts-section]");
        if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* ---------- 详情页渲染 ---------- */
  function renderDetail(lang) {
    var mount = document.querySelector("[data-post-mount]");
    if (!mount) return;

    var slug = getParam("slug");
    var p = findPost(slug);
    if (!p) { renderNotFound(lang); return; }

    var cat = CATS[p.cat] || { zh: p.cat, en: p.cat };
    var body = (CONTENT[slug] && (CONTENT[slug][lang] || CONTENT[slug].zh)) || placeholderBody(lang);
    var kw = (p.keywords && p.keywords[lang]) || "";

    // ---- DOM 注入 ----
    mount.innerHTML =
      '<div class="container article-wrap">' +
      '  <a class="article-back" href="/articles.html">' + dict(lang, "article.back") + "</a>" +
      '  <div class="article-cat">' + cat[lang] + "</div>" +
      '  <h1 class="article-h1">' + p.title[lang] + "</h1>" +
      '  <div class="article-meta">' +
      "    <time>" + p.date + "</time>" +
      '    <span>· ' + p.read + " " + (lang === "zh" ? "分钟阅读" : "min read") + "</span>" +
      '    <span>· ' + cat[lang] + "</span>" +
      "  </div>" +
      '  <div class="article-cover"><img src="' + p.cover + '" alt="' + escapeHtml(p.title[lang]) + '"></div>' +
      '  <div class="article-body">' + body + "</div>" +
      '  <div class="article-tags">' + renderTagList(kw, lang) + "</div>" +
      '  <div class="article-related" data-related></div>' +
      "</div>";

    // ---- SEO: title / description / keywords ----
    document.title = p.title[lang] + " | AI 咨询";
    setMeta("description", p.description[lang]);
    setMeta("keywords", kw);
    setMetaProperty("og:title", p.title[lang]);
    setMetaProperty("og:description", p.description[lang]);
    setMetaProperty("og:type", "article");
    setMetaProperty("og:image", p.cover);
    setMeta("twitter:card", "summary_large_image");

    // ---- SEO: JSON-LD 结构化数据 ----
    var jsonld = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.title[lang],
      description: p.description[lang],
      image: p.cover,
      datePublished: p.date,
      dateModified: p.date,
      keywords: kw,
      articleSection: cat[lang],
      author: { "@type": "Organization", name: "AI 咨询" },
      publisher: {
        "@type": "Organization", name: "AI 咨询",
        logo: { "@type": "ImageObject", url: location.origin + "/favicon.svg" }
      },
      mainEntityOfPage: location.href
    };
    injectJsonLd(jsonld);

    // ---- 相关文章 (同分类, 排除当前) ----
    renderRelated(lang, p);
  }

  function renderTagList(kw, lang) {
    if (!kw) return "";
    var tags = kw.split(/[,，]/).filter(Boolean).slice(0, 6);
    return tags.map(function (t) {
      return '<span class="article-tag">#' + escapeHtml(t.trim()) + "</span>";
    }).join("");
  }

  function renderRelated(lang, p) {
    var box = document.querySelector("[data-related]");
    if (!box) return;
    var rel = POSTS.filter(function (x) { return x.cat === p.cat && x.slug !== p.slug; }).slice(0, 3);
    if (!rel.length) return;
    var h = '<h3 class="related-title">' + dict(lang, "article.related") + "</h3><div class=\"related-grid\">";
    for (var i = 0; i < rel.length; i++) {
      h += '<a class="related-card" href="' + articleUrl(rel[i].slug) + '">' +
        '<div class="related-cover"><img src="' + rel[i].cover + '" alt="" loading="lazy"></div>' +
        "<span>" + rel[i].title[lang] + "</span></a>";
    }
    h += "</div>";
    box.innerHTML = h;
  }

  function placeholderBody(lang) {
    return "<p>" + (lang === "zh"
      ? "本文正在撰写中，内容即将上线。您可以先浏览其他已发布的文章。"
      : "This article is being written and will be available soon. Feel free to browse other published posts.") + "</p>";
  }

  function renderNotFound(lang) {
    var mount = document.querySelector("[data-post-mount]");
    mount.innerHTML = '<div class="container article-wrap"><div class="not-found">' +
      "<h1>404</h1><p>" + (lang === "zh" ? "文章不存在或尚未发布。" : "Article not found or not yet published.") +
      '</p><a class="btn btn-primary" href="../articles.html">' + dict(lang, "article.back") + "</a></div></div>";
  }

  /* ---------- meta 操作工具 ---------- */
  function setMeta(name, content) {
    if (!content) return;
    var el = document.querySelector('meta[name="' + name + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }
  function setMetaProperty(prop, content) {
    if (!content) return;
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }
  function injectJsonLd(obj) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  /* ---------- 暴露 + 语言联动 ---------- */
  window.__posts = {
    renderList: renderList,
    renderFilters: renderFilters,
    renderDetail: renderDetail,
    articleUrl: articleUrl,
    findPost: findPost
  };

  // 语言切换时重渲染
  document.addEventListener("langchange", function (e) {
    var lang = (e.detail && e.detail.lang) || "zh";
    if (document.querySelector("[data-posts-grid]")) { renderFilters(lang); renderList(lang); }
    if (document.querySelector("[data-post-mount]")) renderDetail(lang);
  });
})();

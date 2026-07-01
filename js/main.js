/**
 * 主交互逻辑
 * - 语言切换 (含 localStorage 记忆)
 * - 词条自动渲染
 * - 文章卡片渲染
 * - 表单校验与提交
 */
(function () {
  "use strict";

  var STORAGE_KEY = "ai_consult_lang";
  var DEFAULT_LANG = "zh";

  /* ---------- 语言管理 ---------- */
  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
    // 浏览器语言自动推断
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    var dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    // 渲染所有带 data-i18n 的元素
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    }
    // 渲染 placeholder
    var phNodes = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < phNodes.length; j++) {
      var pe = phNodes[j];
      var pk = pe.getAttribute("data-i18n-ph");
      if (dict[pk] != null) pe.setAttribute("placeholder", dict[pk]);
    }

    // 切换按钮文字
    var switcher = document.querySelector("[data-lang-switch]");
    if (switcher) switcher.textContent = lang === "zh" ? "EN" : "中";

    // 通知文章系统 (posts-base.js) 按新语言重渲染列表/详情
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  /* ---------- 移动端菜单 ---------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        menu.classList.toggle("is-open");
      });
    }

    // 语言切换
    var switcher = document.querySelector("[data-lang-switch]");
    if (switcher) {
      switcher.addEventListener("click", function () {
        var current = getLang();
        setLang(current === "zh" ? "en" : "zh");
      });
    }

    // 头部滚动效果
    var header = document.querySelector("[data-header]");
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 8) header.classList.add("is-scrolled");
        else header.classList.remove("is-scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  /* ---------- 联系表单 ---------- */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("[name=name]").value.trim();
      var email = form.querySelector("[name=email]").value.trim();
      var message = form.querySelector("[name=message]").value.trim();
      var lang = getLang();
      var dict = window.I18N[lang];

      if (!name || !email || !message) {
        alert(lang === "zh" ? "请填写完整信息" : "Please fill in all fields");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert(lang === "zh" ? "邮箱格式不正确" : "Invalid email format");
        return;
      }

      // 静态站点: 仅做演示, 实际请接入 Formspree / Vercel Form / 自建 API
      var note = form.querySelector("[data-form-note]");
      if (note) note.textContent = dict["contact.success"];
      form.reset();

      // 也可在此通过 fetch 提交到第三方服务, 例如:
      // fetch("https://formspree.io/f/your-id", { method: "POST", body: new FormData(form) });
    });
  }

  /* ---------- 数字滚动 ---------- */
  function animateStatsIn(scope) {
    var root = scope || document;
    var stats = root.querySelectorAll("[data-count]");
    stats.forEach(function (el) {
      if (el.getAttribute("data-counted") === "1") return;
      el.setAttribute("data-counted", "1");
      var target = parseInt(el.getAttribute("data-count"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1400;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var value = Math.floor(progress * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    });
  }
  function animateStats() { animateStatsIn(document); }

  /* ---------- 启动 ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    applyLang(getLang());
    initContactForm();

    // 数字动画: 进入视口时触发 (同时观察 Hero 统计区与 metrics 数据条)
    if (window.IntersectionObserver) {
      var ioStats = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateStatsIn(entry.target);
            ioStats.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      var statsWrap = document.querySelector("[data-stats]");
      if (statsWrap) ioStats.observe(statsWrap);
      var metricsWrap = document.querySelector(".metrics-grid");
      if (metricsWrap) ioStats.observe(metricsWrap);
    } else {
      animateStats();
    }

    // 滚动进入动画: 给 .reveal 元素在进入视口时添加 .is-visible
    initReveal();
  });

  function initReveal() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;
    // 不支持 IO: 直接全部显示
    if (!window.IntersectionObserver) {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // 暴露给文章详情页使用
  window.__i18n = { getLang: getLang, setLang: setLang, applyLang: applyLang };
})();

/**
 * Google AdSense 广告加载器
 *
 * - 自动在 <head> 注入 AdSense 加载器脚本 (adsbygoogle.js), 由各页面 data-ad-client 触发
 * - 提供 push() 用于在动态渲染的广告单元容器内初始化广告
 * - 文章详情页等由 JS 注入 DOM 的广告位, 必须在容器插入文档后再调用 push
 *
 * 安全策略: 仅当页面存在 data-ad-client 属性时才注入加载器, 不会在本地预览/无配置时误加载。
 */
(function () {
  "use strict";

  var LOADED_FLAG = "__adsense_loader_injected";

  function injectLoader() {
    if (window[LOADED_FLAG]) return;
    var root = document.documentElement;
    var client = root.getAttribute("data-ad-client");
    if (!client) return;

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + client;
    s.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(s);
    window[LOADED_FLAG] = true;
  }

  function push(container) {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      /* AdSense 未加载或被拦截, 静默忽略, 不影响页面渲染 */
    }
  }

  // 初始化: 注入加载器, 并把页面上已存在的 .adsbygoogle 容器推入队列
  function init() {
    injectLoader();
    var slots = document.querySelectorAll("ins.adsbygoogle");
    for (var i = 0; i < slots.length; i++) push(slots[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.__ads = { push: push, init: init };
})();

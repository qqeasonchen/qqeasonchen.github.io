/* ============================================================
   陈广胜 (Eason Chen) 个人网站 — 交互逻辑
   ============================================================ */
(function () {
  "use strict";
  document.body.classList.add("js-loaded");   // 标记 JS 已执行，启用 reveal 动画
  const D = window.SITE_DATA;
  if (!D) return;

  /* ---------- 工具 ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- 年份 ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- HERO 打字机 ---------- */
  (function typed() {
    const el = $("#typed");
    const phrases = D.PROFILE.titles;
    let pi = 0, ci = 0, deleting = false;
    function tick() {
      const full = phrases[pi];
      el.textContent = deleting ? full.slice(0, ci--) : full.slice(0, ci++);
      let delay = deleting ? 38 : 70;
      if (!deleting && ci > full.length) { deleting = true; delay = 1600; }
      else if (deleting && ci < 0) { deleting = false; ci = 0; pi = (pi + 1) % phrases.length; delay = 400; }
      setTimeout(tick, delay);
    }
    tick();
  })();

  /* ---------- 神经网络背景 ---------- */
  (function neural() {
    const cv = $("#neural-bg");
    const ctx = cv.getContext("2d");
    let w, h, pts, raf;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function resize() {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
      const n = Math.min(70, Math.floor((w * h) / 26000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const o = (1 - dist / 140) * 0.22;
            ctx.strokeStyle = `rgba(129,140,248,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = "rgba(34,211,238,0.55)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener("resize", resize);
    if (!reduce) draw();
    else { // 静态绘制一帧
      draw(); cancelAnimationFrame(raf);
    }
  })();

  /* ---------- 渲染：HERO 统计 ---------- */
  (function () {
    const stats = [
      { n: D.ARTICLES.length, l: "聚合文章 / 演讲" },
      { n: D.PROJECTS.length, l: "核心开源项目" },
      { n: "TLP", l: "EventMesh 顶级项目" },
      { n: "ASF", l: "基金会 Member" }
    ];
    $("#hero-stats").innerHTML = stats.map((s) =>
      `<div class="hstat"><b>${esc(String(s.n))}</b>${esc(s.l)}</div>`).join("");
  })();

  /* ---------- 渲染：ABOUT ---------- */
  $("#bio-text").textContent = D.PROFILE.bio;
  $("#focus-tags").innerHTML = D.PROFILE.focus.map((f) => `<span>${esc(f)}</span>`).join("");
  $("#alias-list").innerHTML = D.PROFILE.aliases.map((a) =>
    `<button class="alias" data-q="${esc(a)}">${esc(a)}</button>`).join("");
  $("#badge-grid").innerHTML = D.BADGES.map((b) =>
    `<div class="badge"><div class="bi">${b.icon}</div><div class="bl">${esc(b.label)}</div><div class="bs">${esc(b.sub)}</div></div>`).join("");

  /* ---------- 渲染：PROJECTS ---------- */
  $("#proj-grid").innerHTML = D.PROJECTS.map((p) => `
    <a class="proj" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="pname">${esc(p.name)}</div>
      <div class="prole">${esc(p.role)}</div>
      <div class="pdesc">${esc(p.desc)}</div>
      <div class="ptags">${p.tags.map((t) => `<span class="ktag">${esc(t)}</span>`).join("")}</div>
      <span class="pgo">查看项目 →</span>
    </a>`).join("");

  /* ---------- 渲染：CTA LINKS ---------- */
  $("#cta-links").innerHTML = D.LINKS.map((l) => `
    <a class="cta-link" href="${esc(l.url)}" target="_blank" rel="noopener">
      <span class="cl-label">${esc(l.label)} ↗</span>
      <span class="cl-sub">${esc(l.sub)}</span>
    </a>`).join("");

  /* ---------- 知识库搜索 ---------- */
  const searchEl = $("#search");
  const gridEl = $("#kb-grid");
  const countEl = $("#kb-count");
  const emptyEl = $("#kb-empty");
  const chipsEl = $("#chips");
  const filtersEl = $("#kb-filters");

  // 快捷搜索 chip（用户明确要求可搜的关键词）
  const QUICK = ["微众银行", "陈广胜", "chenguangsheng", "qqeasonchen", "EventMesh", "DeFiBus", "开源", "Serverless"];
  let activeQuick = "";
  let activeFilter = "";

  chipsEl.innerHTML = QUICK.map((q) => `<button class="chip" data-q="${esc(q)}">${esc(q)}</button>`).join("");

  // 自动从文章标签里提取高频筛选标签
  const tagCount = {};
  D.ARTICLES.forEach((a) => a.tags.forEach((t) => (tagCount[t] = (tagCount[t] || 0) + 1)));
  const topTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 12).map((e) => e[0]);
  filtersEl.innerHTML = topTags.map((t) => `<button class="fchip" data-t="${esc(t)}">${esc(t)}</button>`).join("");

  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    try {
      const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      return safe.replace(re, "<mark>$1</mark>");
    } catch (e) { return safe; }
  }

  function render() {
    const q = (searchEl.value || "").trim().toLowerCase();
    const list = D.ARTICLES.filter((a) => {
      const hay = (a.title + " " + a.source + " " + a.excerpt + " " + a.tags.join(" ") + " " + a.type).toLowerCase();
      const matchQ = !q || hay.includes(q);
      const matchF = !activeFilter || a.tags.includes(activeFilter);
      const matchQuick = !activeQuick || (a.title + a.tags.join(" ")).toLowerCase().includes(activeQuick.toLowerCase());
      return matchQ && matchF && matchQuick;
    });

    countEl.textContent = `▸ 命中 ${list.length} / ${D.ARTICLES.length} 条` + (q ? ` · 关键词「${q}」` : "");

    if (!list.length) {
      gridEl.innerHTML = "";
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;
    gridEl.innerHTML = list.map((a) => `
      <a class="kcard" href="${esc(a.url)}" target="_blank" rel="noopener">
        <span class="ktype">${esc(a.type)}</span>
        <h3>${highlight(a.title, q)}</h3>
        <div class="ksrc">${highlight(a.source, q)}</div>
        <div class="kex">${highlight(a.excerpt, q)}</div>
        <div class="ktags">${a.tags.map((t) => `<span class="ktag ${activeFilter === t || q && t.toLowerCase().includes(q) ? "hl" : ""}">${esc(t)}</span>`).join("")}</div>
        <div class="kfoot"><span class="kdate">${esc(a.date)}</span><span class="kgo">阅读原文 →</span></div>
      </a>`).join("");
  }

  // 事件
  searchEl.addEventListener("input", render);
  chipsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const q = b.dataset.q;
    activeQuick = activeQuick === q ? "" : q;
    $$(".chip", chipsEl).forEach((c) => c.classList.toggle("active", c.dataset.q === activeQuick));
    if (activeQuick) { searchEl.value = activeQuick; }
    else if (!activeFilter) { searchEl.value = ""; }
    render();
  });
  filtersEl.addEventListener("click", (e) => {
    const b = e.target.closest(".fchip"); if (!b) return;
    const t = b.dataset.t;
    activeFilter = activeFilter === t ? "" : t;
    $$(".fchip", filtersEl).forEach((c) => c.classList.toggle("active", c.dataset.t === activeFilter));
    render();
  });
  $("#kb-clear").addEventListener("click", () => {
    searchEl.value = ""; activeQuick = ""; activeFilter = "";
    $$(".chip", chipsEl).forEach((c) => c.classList.remove("active"));
    $$(".fchip", filtersEl).forEach((c) => c.classList.remove("active"));
    render();
  });
  // 别名点击 → 搜索
  $("#alias-list").addEventListener("click", (e) => {
    const b = e.target.closest(".alias"); if (!b) return;
    searchEl.value = b.dataset.q;
    activeQuick = ""; activeFilter = "";
    $$(".chip", chipsEl).forEach((c) => c.classList.remove("active"));
    $$(".fchip", filtersEl).forEach((c) => c.classList.remove("active"));
    render();
    $("#knowledge").scrollIntoView({ behavior: "smooth" });
  });
  // 空状态里的链接
  emptyEl.addEventListener("click", (e) => {
    const b = e.target.closest(".linklike"); if (!b) return;
    searchEl.value = b.dataset.q; render();
  });

  // 快捷键 "/" 聚焦搜索
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchEl) {
      e.preventDefault(); searchEl.focus();
    }
    if (e.key === "Escape" && document.activeElement === searchEl) {
      searchEl.value = ""; render(); searchEl.blur();
    }
  });

  render();

  /* ---------- 导航滚动态 ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 滚动揭示 ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
})();

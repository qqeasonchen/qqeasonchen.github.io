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
      { n: D.ARTICLES.length, l: "文章 / 演讲" },
      { n: D.PATENTS.length, l: "授权 / 申请专利" },
      { n: D.AWARDS.length, l: "荣誉 / 奖项" },
      { n: D.PROJECTS.length, l: "核心开源项目" }
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

  /* ---------- 知识库：分类 + 列表 ---------- */
  const listEl = $("#kb-grid");
  const countEl = $("#kb-count");
  const emptyEl = $("#kb-empty");
  const catsEl = $("#kb-cats");
  const filtersEl = $("#kb-filters");

  let activeCat = "全部";
  let activeFilter = "";

  // 文章按 type 归并为大类
  const CAT_GROUPS = {
    "文章": ["文章", "技术文章", "人物特写", "项目推介", "案例", "参会随笔"],
    "演讲": ["演讲", "演讲整理", "主题演讲", "活动", "大会回顾"],
    "视频": ["视频"],
    "新闻": ["新闻", "官方新闻"],
    "官方": ["官方", "一手记录", "技术文档"],
    "仓库": ["仓库"]
  };
  function catOf(a) {
    if (a.__kind === "patent") return "专利";
    if (a.__kind === "award") return "荣誉";
    for (const [cat, types] of Object.entries(CAT_GROUPS)) {
      if (types.includes(a.type)) return cat;
    }
    return "其他";
  }

  // 统一数据：文章 / 专利 / 获奖
  const allItems = [
    ...D.ARTICLES.map((a) => ({ ...a, __kind: "article" })),
    ...D.PATENTS.map((p) => ({ ...p, __kind: "patent" })),
    ...D.AWARDS.map((a) => ({ ...a, __kind: "award" }))
  ];
  allItems.forEach((it) => (it.__cat = catOf(it)));

  // 分类标签：全部 + 有内容的分类（按固定顺序）
  const catOrder = ["文章", "演讲", "视频", "新闻", "官方", "仓库", "专利", "荣誉", "其他"];
  const present = {};
  allItems.forEach((it) => (present[it.__cat] = (present[it.__cat] || 0) + 1));
  const cats = ["全部", ...catOrder.filter((c) => present[c])];
  catsEl.innerHTML = cats.map((c) =>
    `<button class="cat ${c === activeCat ? "active" : ""}" data-c="${esc(c)}">${esc(c)}${c === "全部" ? "" : ` <i>${present[c]}</i>`}</button>`
  ).join("");

  // 高频标签筛选（辅助）
  const tagCount = {};
  D.ARTICLES.forEach((a) => a.tags.forEach((t) => (tagCount[t] = (tagCount[t] || 0) + 1)));
  const topTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 10).map((e) => e[0]);
  filtersEl.innerHTML = topTags.map((t) => `<button class="fchip" data-t="${esc(t)}">${esc(t)}</button>`).join("");

  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    try {
      const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      return safe.replace(re, "<mark>$1</mark>");
    } catch (e) { return safe; }
  }

  function haystack(it) {
    if (it.__kind === "patent") {
      return (it.title + " " + it.number + " " + it.inventors + " " + it.assignee + " " + it.status + " " + it.abstract + " 专利").toLowerCase();
    }
    if (it.__kind === "award") {
      return (it.title + " " + it.org + " " + it.desc + " 获奖 荣誉").toLowerCase();
    }
    return (it.title + " " + it.source + " " + it.excerpt + " " + it.tags.join(" ") + " " + it.type).toLowerCase();
  }

  function render() {
    const q = "";
    const list = allItems.filter((it) => {
      const matchC = activeCat === "全部" || it.__cat === activeCat;
      const matchF = !activeFilter || (it.__kind === "article" && it.tags.includes(activeFilter));
      return matchC && matchF;
    });

    countEl.textContent = `▸ 命中 ${list.length} / ${allItems.length} 条`
      + (activeCat !== "全部" ? ` · 分类「${activeCat}」` : "");

    if (!list.length) {
      listEl.innerHTML = "";
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;
    listEl.innerHTML = list.map((it) => {
      if (it.__kind === "patent") {
        return `<a class="krow krow-patent" href="${esc(it.url)}" target="_blank" rel="noopener">
          <span class="ktype">专利</span>
          <div class="kbody">
            <div class="kt">${highlight(it.title, q)} <span class="kpat">${esc(it.number)}</span></div>
            <div class="kmeta">${esc(it.inventors)} · ${esc(it.date)} · <b>${esc(it.status)}</b></div>
            <div class="kex">${highlight(it.abstract, q)}</div>
          </div>
          <span class="kgo">↗</span>
        </a>`;
      }
      if (it.__kind === "award") {
        return `<a class="krow krow-award" href="${esc(it.url)}" target="_blank" rel="noopener">
          <span class="ktype">荣誉</span>
          <div class="kbody">
            <div class="kt">${highlight(it.title, q)}</div>
            <div class="kmeta">${esc(it.org)} · ${esc(it.date)}</div>
            <div class="kex">${highlight(it.desc, q)}</div>
          </div>
          <span class="kgo">↗</span>
        </a>`;
      }
      return `<a class="krow" href="${esc(it.url)}" target="_blank" rel="noopener">
        <span class="ktype">${esc(it.type)}</span>
        <div class="kbody">
          <div class="kt">${highlight(it.title, q)}</div>
          <div class="kmeta">${highlight(it.source, q)} · ${esc(it.date)}</div>
          <div class="kex">${highlight(it.excerpt, q)}</div>
          <div class="ktags">${it.tags.slice(0, 6).map((t) => `<span class="ktag ${activeFilter === t || (q && t.toLowerCase().includes(q)) ? "hl" : ""}">${esc(t)}</span>`).join("")}</div>
        </div>
        <span class="kgo">↗</span>
      </a>`;
    }).join("");
  }

  // 事件
  catsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".cat"); if (!b) return;
    activeCat = b.dataset.c;
    $$(".cat", catsEl).forEach((c) => c.classList.toggle("active", c.dataset.c === activeCat));
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
    activeFilter = ""; activeCat = "全部";
    $$(".fchip", filtersEl).forEach((c) => c.classList.remove("active"));
    $$(".cat", catsEl).forEach((c) => c.classList.toggle("active", c.dataset.c === "全部"));
    render();
  });
  // 别名点击 → 跳转知识库
  $("#alias-list").addEventListener("click", () => {
    $("#knowledge").scrollIntoView({ behavior: "smooth" });
  });

  // 快捷键 Escape 清除筛选
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      activeFilter = ""; activeCat = "全部";
      $$(".fchip", filtersEl).forEach((c) => c.classList.remove("active"));
      $$(".cat", catsEl).forEach((c) => c.classList.toggle("active", c.dataset.c === "全部"));
      render();
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

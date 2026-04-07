// ─── State ────────────────────────────────────────────────────────────────
let activeFilter = "all";
let searchQuery = "";

// ─── Category display config ─────────────────────────────────────────────
const CATEGORY_META = {
  scripture:   { label: "Scripture",   color: "var(--cat-scripture)" },
  biography:   { label: "Biography",   color: "var(--cat-biography)" },
  upanishad:   { label: "Upanishads",  color: "var(--cat-upanishad)" },
  devotion:    { label: "Devotion",    color: "var(--cat-devotion)" },
  philosophy:  { label: "Philosophy",  color: "var(--cat-philosophy)" },
  interfaith:  { label: "Interfaith",  color: "var(--cat-interfaith)" },
};

// ─── Status badge config ──────────────────────────────────────────────────
const STATUS_META = {
  complete: { label: "Complete",  cls: "status-complete" },
  ongoing:  { label: "Ongoing",   cls: "status-ongoing" },
};

// ─── Highlight search terms ───────────────────────────────────────────────
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

// ─── Build a single card ──────────────────────────────────────────────────
function buildCard(series, query) {
  const cats = series.category.map(c =>
    `<span class="cat-pill" style="--cat-color:${CATEGORY_META[c]?.color}">${CATEGORY_META[c]?.label || c}</span>`
  ).join("");

  const status = STATUS_META[series.status] || STATUS_META.complete;
  const featured = series.featured ? `<span class="featured-badge">Featured</span>` : "";

  const sampleList = series.sampleEpisodes.map(ep =>
    `<li>${highlight(ep, query)}</li>`
  ).join("");

  const episodeLabel = series.episodes === 1 ? "episode" : "episodes";

  const title = highlight(series.title, query);
  const subtitle = highlight(series.subtitle, query);
  const description = highlight(series.description, query);

  const channelName = series.channels
    ? series.channels.join(", ")
    : series.channel;

  return `
    <article class="series-card" data-id="${series.id}" data-categories="${series.category.join(' ')}" data-status="${series.status}">
      <div class="card-top">
        <div class="card-header-row">
          <div class="card-cats">${cats}</div>
          <div class="card-badges">
            ${featured}
            <span class="status-badge ${status.cls}">${status.label}</span>
          </div>
        </div>
        <h2 class="card-title">${title}</h2>
        <p class="card-subtitle">${subtitle}</p>
      </div>
      <div class="card-meta-row">
        <div class="card-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <strong>${series.episodes}</strong> ${episodeLabel}
        </div>
        <div class="card-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          ${series.totalHours}
        </div>
        <div class="card-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${series.years}
        </div>
        <div class="card-meta-item channel-meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          <a href="${series.channelUrl}" target="_blank" rel="noopener" class="channel-link-inline">${channelName}</a>
        </div>
      </div>
      <p class="card-description">${description}</p>
      <div class="card-episodes">
        <span class="episodes-label">Sample episodes</span>
        <ul class="episodes-list">${sampleList}</ul>
      </div>
      <div class="card-actions">
        <a href="${series.playlistUrl}" target="_blank" rel="noopener" class="btn-watch">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Watch Series
        </a>
        <a href="${series.channelUrl}" target="_blank" rel="noopener" class="btn-channel">Visit Channel</a>
      </div>
    </article>
  `;
}

// ─── Filter + search logic ────────────────────────────────────────────────
function getFilteredSeries() {
  const q = searchQuery.toLowerCase().trim();
  return SERIES_DATA.filter(s => {
    // filter by category
    if (activeFilter !== "all") {
      if (activeFilter === "ongoing") {
        if (s.status !== "ongoing") return false;
      } else {
        if (!s.category.includes(activeFilter)) return false;
      }
    }
    // search
    if (q) {
      const searchable = [
        s.title, s.subtitle, s.description,
        ...s.topics, ...s.sampleEpisodes, s.channel, s.years
      ].join(" ").toLowerCase();
      return searchable.includes(q);
    }
    return true;
  });
}

// ─── Render ───────────────────────────────────────────────────────────────
function render() {
  const grid = document.getElementById("series-grid");
  const noResults = document.getElementById("no-results");
  const resultsMeta = document.getElementById("results-meta");

  const filtered = getFilteredSeries();

  // sort: featured first, then by episode count desc
  filtered.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.episodes - a.episodes;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.hidden = false;
    resultsMeta.textContent = "No series found";
  } else {
    noResults.hidden = true;
    grid.innerHTML = filtered.map(s => buildCard(s, searchQuery)).join("");
    const total = SERIES_DATA.length;
    const showing = filtered.length;
    if (showing === total && !searchQuery && activeFilter === 'all') {
      resultsMeta.textContent = `Showing all ${total} series`;
    } else {
      resultsMeta.textContent = `Showing ${showing} of ${total} series`;
    }
  }

  // Animate cards in
  requestAnimationFrame(() => {
    document.querySelectorAll(".series-card").forEach((card, i) => {
      card.style.animationDelay = `${i * 40}ms`;
      card.classList.add("card-animate");
    });
  });
}

// ─── Event listeners ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  render();

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  // Search
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search");

  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value;
    clearBtn.hidden = !searchQuery;
    render();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.hidden = true;
    searchInput.focus();
    render();
  });

  // Reset btn inside no-results
  document.getElementById("btn-reset")?.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.hidden = true;
    activeFilter = "all";
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('[data-filter="all"]').classList.add("active");
    render();
  });

  // Header scroll behavior
  const header = document.getElementById("site-header");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) {
      header.classList.add("header--hidden");
    } else {
      header.classList.remove("header--hidden");
    }
    header.classList.toggle("header--scrolled", y > 20);
    lastY = y;
  }, { passive: true });

  // Dark mode toggle
  (function() {
    const t = document.querySelector("[data-theme-toggle]");
    const r = document.documentElement;
    let d = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    r.setAttribute("data-theme", d);
    updateThemeIcon(t, d);
    t && t.addEventListener("click", () => {
      d = d === "dark" ? "light" : "dark";
      r.setAttribute("data-theme", d);
      updateThemeIcon(t, d);
    });
  })();

  function updateThemeIcon(btn, theme) {
    if (!btn) return;
    btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
    btn.innerHTML = theme === "dark"
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
});

// Render Mermaid flow diagrams across the docs.
//
// The theme is configured (mkdocs.yml → pymdownx.superfences custom_fences)
// to emit diagram sources as <pre class="mermaid"><code>…</code></pre>.
// This script loads the Mermaid runtime once and (re)renders those blocks,
// including after Material's instant-navigation page swaps (navigation.instant).

(function () {
  var MERMAID_SRC =
    "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js";

  // Pick a Mermaid theme that matches the active colour scheme (light/dark).
  function mermaidTheme() {
    var scheme =
      document.body.getAttribute("data-md-color-scheme") || "default";
    return scheme === "slate" ? "dark" : "default";
  }

  // Each <pre class="mermaid"> wraps the source in a <code> element. Mermaid
  // expects the raw graph text directly inside the element it renders, so on
  // first pass we lift the code text up and tag the node as un-processed.
  function prepareBlocks() {
    var blocks = document.querySelectorAll("pre.mermaid, div.mermaid");
    blocks.forEach(function (el) {
      if (el.getAttribute("data-mermaid-ready") === "1") return;
      var code = el.querySelector("code");
      if (code) {
        el.textContent = code.textContent;
      }
      el.removeAttribute("data-processed");
      el.setAttribute("data-mermaid-ready", "1");
    });
    return blocks.length;
  }

  function render() {
    if (!window.mermaid) return;
    var count = prepareBlocks();
    if (count === 0) return;
    try {
      window.mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: mermaidTheme(),
        flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
        sequence: { useMaxWidth: true },
      });
      window.mermaid.run({ querySelector: "pre.mermaid, div.mermaid" });
    } catch (e) {
      /* no-op: a single malformed diagram must not break the page */
    }
  }

  function loadMermaidThenRender() {
    if (window.mermaid) {
      render();
      return;
    }
    if (document.getElementById("mermaid-runtime")) return;
    var s = document.createElement("script");
    s.id = "mermaid-runtime";
    s.src = MERMAID_SRC;
    s.onload = render;
    document.head.appendChild(s);
  }

  // Initial load.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadMermaidThenRender);
  } else {
    loadMermaidThenRender();
  }

  // Re-render after Material's instant navigation swaps the page body.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(function () {
      // Reset readiness flags because the DOM nodes are brand new after a swap.
      loadMermaidThenRender();
    });
  }
})();

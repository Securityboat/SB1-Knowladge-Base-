document.addEventListener("DOMContentLoaded", function () {
  function formatLogoText() {
    const topics = document.querySelectorAll(".md-header__topic .md-ellipsis");
    topics.forEach(function (el) {
      if (el.textContent.trim() === "SecurityBoat Documentation" || el.textContent.trim() === "SecurityBoat") {
        el.innerHTML = '<span class="sb-brand-logo"><span class="sb-brand-main">Security</span><span class="sb-brand-cyan">Boat</span></span><span class="sb-brand-tag">Docs</span>';
      }
    });
  }

  function injectNavCTA() {
    const headerInner = document.querySelector(".md-header__inner");
    if (headerInner && !document.querySelector(".sb-nav-cta")) {
      const ctaBtn = document.createElement("a");
      ctaBtn.className = "sb-nav-cta";
      ctaBtn.href = "https://securityboat.net/lets-connect";
      ctaBtn.target = "_blank";
      ctaBtn.innerHTML = `<span>Let's Connect</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="vertical-align:-1px;margin-left:4px"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h5V3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5z"/></svg>`;
      headerInner.appendChild(ctaBtn);
    }
  }

  formatLogoText();
  injectNavCTA();

  if (typeof location$ !== "undefined") {
    location$.subscribe(function () {
      setTimeout(function () {
        formatLogoText();
        injectNavCTA();
      }, 50);
    });
  }
});

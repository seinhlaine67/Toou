(function () {
  const page = document.body.dataset.page || "";
  const headerMount = document.getElementById("site-header");
  const navMount = document.getElementById("site-nav");
  const searchId = page === "explore" ? ' id="searchInput"' : "";
  const searchPlaceholder = page === "explore" ? "Search stories..." : "Search stories, webtoons...";
  const storedAccount = localStorage.getItem("toouUserAccount");
  const userAccount = storedAccount ? JSON.parse(storedAccount) : null;
  const hasCreatorProfile = Boolean(localStorage.getItem("toouCreatorProfile"));
  const publishHref = hasCreatorProfile ? "upload.html" : "publish.html";
  const publishLabel = hasCreatorProfile ? "Upload" : "Publish";
  const storedTheme = localStorage.getItem("toouTheme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme || (prefersDark ? "dark" : "light");
  const accountAction = userAccount
    ? `<a href="store.html" class="site-btn signup site-btn-coins">${userAccount.coins ?? 0} Coins</a>`
    : `<a href="signup.html" class="site-btn signup">Sign Up</a>`;

  document.body.dataset.theme = theme;
  window.toouRequireAccount = function (targetHref) {
    if (userAccount) return true;

    const shouldContinue = window.confirm("Please create an account first to start reading on TooU.");
    if (shouldContinue) {
      window.location.href = targetHref || "signup.html";
    }
    return false;
  };

  if (headerMount) {
    headerMount.innerHTML = `
      <div class="site-header">
        <div class="site-header-inner">
          <div class="site-logo-area">
            <a class="site-logo" href="index.html">
              <img src="images/logo.png" alt="TooU Logo">
              <span>TooU</span>
            </a>
            <a href="community.html" class="site-community-link" aria-label="Community">
              <i class="fa-solid fa-user-group"></i>
            </a>
          </div>
          <div class="site-search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="${searchPlaceholder}"${searchId}>
          </div>
          <div class="site-actions">
            <button type="button" class="site-theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
              <i class="fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}"></i>
            </button>
            <a href="notice.html" class="site-btn notice">Notice</a>
            <a href="${publishHref}" class="site-btn publish">${publishLabel}</a>
            ${accountAction}
          </div>
        </div>
      </div>
    `;
  }

  if (navMount) {
    navMount.innerHTML = `
      <div class="site-navbar" id="navbar">
        <a href="index.html" class="site-nav-item ${page === "home" ? "active" : ""}">
          <i class="fa-solid fa-house"></i><span>Home</span>
        </a>
        <a href="explore.html" class="site-nav-item ${page === "explore" ? "active" : ""}">
          <i class="fa-solid fa-compass"></i><span>Explore</span>
        </a>
        <a href="library.html" class="site-nav-item ${page === "library" ? "active" : ""}">
          <i class="fa-solid fa-book"></i><span>Library</span>
        </a>
        <a href="store.html" class="site-nav-item ${page === "store" ? "active" : ""}">
          <i class="fa-solid fa-store"></i><span>Store</span>
        </a>
        <a href="profile.html" class="site-nav-item ${page === "profile" ? "active" : ""}">
          <i class="fa-solid fa-user"></i><span>Profile</span>
        </a>
      </div>
    `;
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
      document.body.dataset.theme = nextTheme;
      localStorage.setItem("toouTheme", nextTheme);
      themeToggle.innerHTML = `<i class="fa-solid ${nextTheme === "dark" ? "fa-sun" : "fa-moon"}"></i>`;
    });
  }

  document.addEventListener("click", (event) => {
    const gatedLink = event.target.closest("[data-requires-account='true']");
    if (!gatedLink) return;

    if (window.toouRequireAccount("signup.html")) return;
    event.preventDefault();
  });
})();

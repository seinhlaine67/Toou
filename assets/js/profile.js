(function () {
  const profileAvatar = document.getElementById("profileAvatar");
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profileBadge = document.getElementById("profileBadge");
  const profileBio = document.getElementById("profileBio");
  const profileCoins = document.getElementById("profileCoins");
  const profilePlan = document.getElementById("profilePlan");
  const modeDescription = document.getElementById("modeDescription");
  const switchModeBtn = document.getElementById("switchModeBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const menuItems = Array.from(document.querySelectorAll(".menu-item"));
  const navbar = document.getElementById("navbar");
  const userAccount = JSON.parse(localStorage.getItem("toouUserAccount") || "null");
  const creatorProfile = JSON.parse(localStorage.getItem("toouCreatorProfile") || "null");
  let lastScroll = 0;

  function renderProfile() {
    if (!userAccount) {
      profileName.textContent = "Guest Reader";
      profileEmail.textContent = "Create an account to personalize your profile.";
      profileBadge.textContent = "Reader";
      profileBio.textContent = "Your profile, coins, and creator tools will appear here after signup.";
      profileCoins.textContent = "0";
      profilePlan.textContent = "Guest";
      modeDescription.textContent = "Currently in Reader mode";
      switchModeBtn.textContent = "Create Account";
      return;
    }

    profileAvatar.src = userAccount.avatar || "https://i.pravatar.cc/120?img=12";
    profileName.textContent = creatorProfile?.displayName || userAccount.username || "TooU Reader";
    profileEmail.textContent = userAccount.email || "";
    profileBadge.textContent = creatorProfile ? "Writer" : (userAccount.plan || "Reader");
    profileBio.textContent = creatorProfile?.bio || userAccount.bio || "Content enthusiast and aspiring writer.";
    profileCoins.textContent = String(userAccount.coins ?? 50);
    profilePlan.textContent = creatorProfile ? "Creator" : "Premium";
    modeDescription.textContent = creatorProfile ? "Currently in Writer mode" : "Currently in Reader mode";
    switchModeBtn.textContent = creatorProfile ? "Upload Workspace" : "Writer Mode";
  }

  switchModeBtn.addEventListener("click", () => {
    if (!userAccount) {
      window.location.href = "signup.html";
      return;
    }

    window.location.href = creatorProfile ? "upload.html" : "publish.html";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;

      if (target === "history") {
        window.location.href = "library.html";
        return;
      }

      if (target === "purchase") {
        window.location.href = "store.html";
        return;
      }

      window.alert("This section is ready for the next page hookup.");
    });
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("toouUserAccount");
    localStorage.removeItem("toouCreatorProfile");
    window.location.href = "signup.html";
  });

  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      navbar.classList.toggle("hide", currentScroll > lastScroll && currentScroll > 16);
      lastScroll = currentScroll;
    });
  }

  renderProfile();
})();

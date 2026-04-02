(function () {
  const tabs = Array.from(document.querySelectorAll(".store-tab"));
  const panels = Array.from(document.querySelectorAll(".store-panel"));
  const buyButtons = Array.from(document.querySelectorAll("[data-buy]"));
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  function activateTab(targetId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === targetId;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  });

  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = button.dataset.buy;
      window.alert(`You've got ${amount} coins.`);
    });
  });

  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      navbar.classList.toggle("hide", currentScroll > lastScroll && currentScroll > 16);
      lastScroll = currentScroll;
    });
  }
})();

const historyData = [
  {
    title: "Shadows of Destiny",
    type: "Webtoon",
    episode: "Episode 14: The Shadow Gate",
    progress: 78,
    time: "Read 2 hours ago",
    image: "images/image1.png"
  },
  {
    title: "Lessons From Tomorrow",
    type: "Knowledge",
    episode: "Chapter 3: Focus and Memory",
    progress: 45,
    time: "Read yesterday",
    image: "images/image1.png"
  },
  {
    title: "Lost Kingdom",
    type: "Comics",
    episode: "Issue 8: Broken Throne",
    progress: 92,
    time: "Read yesterday",
    image: "images/image1.png"
  },
  {
    title: "Dark Moon",
    type: "Novel",
    episode: "Chapter 27: The Red Oath",
    progress: 33,
    time: "Read 3 days ago",
    image: "images/image1.png"
  }
];

const adData = [
  {
    label: "Sponsored",
    title: "Unlock early access for premium readers",
    image: "images/image1.png"
  },
  {
    label: "New",
    title: "New creator campaigns are live this week",
    image: "images/image1.png"
  },
  {
    label: "Event",
    title: "Earn bonus coins on your next reading streak",
    image: "images/image1.png"
  }
];

const promoData = [
  {
    tag: "Season Pick",
    title: "A week of epic fantasy premieres",
    copy: "Fresh releases, studio debuts, and long-form sagas curated for binge reading.",
    image: "images/image1.png"
  },
  {
    tag: "Premium Drop",
    title: "Reader favorites are unlocking early",
    copy: "Get ahead on trending series and catch special chapters before the public release.",
    image: "images/image1.png"
  },
  {
    tag: "Learning Spotlight",
    title: "Knowledge stories with practical takeaways",
    copy: "Explore bite-sized lessons, thoughtful chapters, and high-retention reading picks.",
    image: "images/image1.png"
  }
];

const recommendationData = [
  { title: "Midnight Libra", genre: "Mystery", views: "98K", likes: "12K", image: "images/image1.png", badge: "New" },
  { title: "Hero Rise", genre: "Action", views: "210K", likes: "30K", image: "images/image1.png" },
  { title: "Romance in Bloom", genre: "Romance", views: "120K", likes: "14K", image: "images/image1.png", badge: "New Ep" },
  { title: "Psychology 101", genre: "Knowledge", views: "105K", likes: "11K", image: "images/image1.png" },
  { title: "Urban Legend", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" }
];

function renderHistory() {
  const container = document.getElementById("historyList");
  container.innerHTML = historyData.map((item) => `
    <a class="history-card" href="detail.html">
      <img src="${item.image}" alt="${item.title}">
      <div class="history-copy">
        <div class="history-type"><i class="fa-solid fa-clock-rotate-left"></i>${item.type}</div>
        <div class="history-title">${item.title}</div>
        <div class="history-episode">${item.episode}</div>
        <div class="history-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${item.progress}%"></div>
          </div>
          <div class="progress-meta">
            <span>${item.progress}% completed</span>
            <span>${item.time}</span>
          </div>
        </div>
      </div>
    </a>
  `).join("");
}

function renderAds() {
  const container = document.getElementById("adsRow");
  container.innerHTML = adData.map((item) => `
    <article class="ad-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="ad-copy">
        <div class="ad-label">${item.label}</div>
        <div class="ad-title">${item.title}</div>
      </div>
    </article>
  `).join("");
}

function renderRecommendations() {
  const container = document.getElementById("recommendRail");
  container.innerHTML = recommendationData.map((item) => `
    <a class="card-link" href="detail.html">
      <div class="card">
        <div class="card-media">
          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ""}
          <div class="card-media-inner">
            <img src="${item.image}" alt="${item.title}">
          </div>
        </div>
        <div class="card-genre">${item.genre}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span><i class="fa-regular fa-eye"></i> ${item.views}</span>
          <span class="like"><i class="fa-regular fa-heart"></i> ${item.likes}</span>
        </div>
      </div>
    </a>
  `).join("");
}

function renderPromotions() {
  const track = document.getElementById("promoTrack");
  const dots = document.getElementById("promoDots");

  track.innerHTML = promoData.map((item) => `
    <article class="promo-slide" style="--bg-image:url('${item.image}');">
      <div class="promo-content">
        <div class="promo-tag">${item.tag}</div>
        <div class="promo-title">${item.title}</div>
        <div class="promo-copy">${item.copy}</div>
      </div>
    </article>
  `).join("");

  dots.innerHTML = promoData.map((_, index) => `
    <button class="promo-dot ${index === 0 ? "active" : ""}" type="button" data-index="${index}" aria-label="Go to promotion ${index + 1}"></button>
  `).join("");

  Array.from(track.children).forEach((slide, index) => {
    slide.style.setProperty("background-image", `url('${promoData[index].image}')`);
    slide.style.setProperty("--bg-image", `url('${promoData[index].image}')`);
  });
}

let currentPromo = 0;

function updatePromo(index) {
  const track = document.getElementById("promoTrack");
  const dots = document.querySelectorAll(".promo-dot");
  currentPromo = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function initPromoSlider() {
  renderPromotions();
  document.getElementById("promoDots").addEventListener("click", (event) => {
    const target = event.target.closest(".promo-dot");
    if (!target) return;
    updatePromo(Number(target.dataset.index));
  });

  setInterval(() => {
    updatePromo((currentPromo + 1) % promoData.length);
  }, 4500);
}

renderHistory();
renderAds();
renderRecommendations();
initPromoSlider();

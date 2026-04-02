const exploreData = [
  { title: "Shadows of Destiny", type: "webtoon", genre: "Romance", views: "120K", likes: "15K", image: "images/image1.png", badge: "New Ep" },
  { title: "Neon City", type: "webtoon", genre: "Romance", views: "50K", likes: "6K", image: "images/image1.png" },
  { title: "Romantic Escape", type: "novel", genre: "Romance", views: "110K", likes: "14K", image: "images/image1.png" },
  { title: "Love in Paris", type: "novel", genre: "Romance", views: "95K", likes: "10K", image: "images/image1.png" },
  { title: "Love & Lies", type: "novel", genre: "Romance", views: "88K", likes: "9K", image: "images/image1.png" },
  { title: "Romance in Bloom", type: "webtoon", genre: "Romance", views: "120K", likes: "14K", image: "images/image1.png" },

  { title: "Hero Rise", type: "webtoon", genre: "Action", views: "210K", likes: "30K", image: "images/image1.png", badge: "New" },
  { title: "Lost Kingdom", type: "novel", genre: "Action", views: "130K", likes: "20K", image: "images/image1.png" },
  { title: "Blade Hero", type: "cartoon", genre: "Action", views: "75K", likes: "10K", image: "images/image1.png" },
  { title: "Action Force", type: "webtoon", genre: "Action", views: "180K", likes: "25K", image: "images/image1.png" },
  { title: "Thrill Seekers", type: "comics", genre: "Action", views: "160K", likes: "18K", image: "images/image1.png" },

  { title: "Dark Moon", type: "novel", genre: "Mystery", views: "98K", likes: "12K", image: "images/image1.png" },
  { title: "Midnight Libra", type: "webtoon", genre: "Mystery", views: "40K", likes: "5K", image: "images/image1.png" },

  { title: "Magic School", type: "webtoon", genre: "Fantasy", views: "87K", likes: "8K", image: "images/image1.png" },

  { title: "Starfall", type: "novel", genre: "Horror", views: "60K", likes: "7K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },
  { title: "Urban Legend", type: "novel", genre: "Horror", views: "90K", likes: "12K", image: "images/image1.png" },

  { title: "Comedy Club", type: "cartoon", genre: "Comedy", views: "70K", likes: "9K", image: "images/image1.png" }
];

let currentType = "all";
let currentGenre = "all";

function renderCard(item) {
  return `
    <a class="card-link" href="detail.html" data-requires-account="true">
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
  `;
}

function renderFilteredSeries() {
  const container = document.getElementById("filteredSeries");
  let items = exploreData.filter((item) => {
    const typeMatch = currentType === "all" || item.type === currentType;
    const genreMatch = currentGenre === "all" || item.genre === currentGenre;
    return typeMatch && genreMatch;
  });

  items = items.slice(0, 12);
  container.innerHTML = items.map(renderCard).join("");
}

document.querySelectorAll(".type-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".type-btn").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    currentType = btn.dataset.type;
    renderFilteredSeries();
  });
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    currentGenre = btn.dataset.filter;
    renderFilteredSeries();
  });
});

function renderPopularityRanking() {
  const container = document.getElementById("popularityRanking");
  const sorted = [...exploreData].sort((a, b) => parseInt(b.views.replace("K", "")) - parseInt(a.views.replace("K", "")));

  container.innerHTML = sorted.slice(0, 10).map((item, index) => `
    <div class="rank-card">
      <div class="rank-number">#${index + 1}</div>
      ${renderCard(item)}
    </div>
  `).join("");
}

function renderSection(sectionId, genre) {
  const container = document.getElementById(sectionId);
  const items = exploreData.filter((item) => item.genre === genre).slice(0, 10);
  container.innerHTML = items.map(renderCard).join("");
}

document.getElementById("searchInput").addEventListener("input", () => {
  renderFilteredSeries();
});

let lastScroll = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }
  lastScroll = currentScroll;
});

renderFilteredSeries();
renderPopularityRanking();
renderSection("romanceSection", "Romance");
renderSection("actionSection", "Action");
renderSection("mysterySection", "Mystery");
renderSection("fantasySection", "Fantasy");
renderSection("horrorSection", "Horror");
renderSection("comedySection", "Comedy");





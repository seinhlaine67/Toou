// ===================== HERO SLIDESHOW =====================
  const heroSlides = [
  { category:"Webtoon", title:"Shadows of Destiny", summary:"A young warrior discovers her destiny...", views:"120K", likes:"15K", image:"images/image1.png" },
  { category:"Novel", title:"Dark Moon", summary:"A tale of mystery and magic.", views:"98K", likes:"12K", image:"images/image1.png" },
  { category:"Webtoon", title:"Hero Rise", summary:"An epic journey of courage.", views:"210K", likes:"30K", image:"images/image1.png" },
  { category:"Cartoon", title:"Magic School", summary:"Adventures in a school of wizards.", views:"87K", likes:"8K", image:"images/image1.png" },
  { category:"Comics", title:"Lost Kingdom", summary:"Secrets of a forgotten realm.", views:"130K", likes:"20K", image:"images/image1.png" }
];

const heroContainer = document.getElementById("hero");
let currentSlide = 0;

function renderHeroSlide(index){
  const data = heroSlides[index];
  heroContainer.innerHTML = `
    <div class="hero-slide">
      <img src="${data.image}" alt="${data.title}">
      <div class="gradient"></div>
      <div class="hero-content">
        <div class="hero-category">${data.category}</div>
        <div class="hero-title">${data.title}</div>
        <div class="hero-summary">${data.summary}</div>
        <div class="hero-meta">
          <span><i class="fa-regular fa-eye"></i> ${data.views}</span>
          <span><i class="fa-regular fa-heart"></i> ${data.likes}</span>
        </div>
        <div class="hero-actions">
          <a class="read-btn" href="detail.html" data-requires-account="true">&#9654; Read Now</a>
          <a class="hero-link-btn" href="explore.html">More Like This</a>
        </div>
      </div>
    </div>
  `;
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % heroSlides.length;
  renderHeroSlide(currentSlide);
}

renderHeroSlide(currentSlide);
setInterval(nextSlide, 5000); // automatic slide every 5s

  // ===================== TRENDING NOW WITH CATEGORIES =====================
  const trendingData = [
    { title:"Dark Moon", genre:"Mystery", views:"120K", likes:"15K", image:"images/image1.png", category:"webtoon", badge:"New" },
    { title:"Hero Rise", genre:"Action", views:"98K", likes:"12K", image:"images/image1.png", category:"webtoon" },
    { title:"Magic School", genre:"Fantasy", views:"210K", likes:"26K", image:"images/image1.png", category:"novel", badge:"New Ep" },
    { title:"Lost Kingdom", genre:"Fantasy", views:"87K", likes:"10K", image:"images/image1.png", category:"comics" },
    { title:"Cartoon Blast", genre:"Comedy", views:"130K", likes:"18K", image:"images/image1.png", category:"cartoon", badge:"New" }
  ];


  // ===================== NEW SECTIONS DATA =====================

const topPicksData = [
  { title:"Legend Reborn", genre:"Fantasy", views:"300K", likes:"32K", image:"images/image1.png", badge:"New" },
  { title:"Midnight Hero", genre:"Action", views:"280K", likes:"28K", image:"images/image1.png" },
  { title:"Eternal Love", genre:"Romance", views:"260K", likes:"24K", image:"images/image1.png" },
  { title:"Cyber City", genre:"Sci-Fi", views:"240K", likes:"21K", image:"images/image1.png", badge:"Hot" },
  { title:"Dark Prophecy", genre:"Mystery", views:"220K", likes:"20K", image:"images/image1.png" }
];

const bingeData = [
  { title:"Infinite Loop", genre:"Sci-Fi", views:"500K", likes:"44K", image:"images/image1.png" },
  { title:"War Chronicles", genre:"Action", views:"450K", likes:"40K", image:"images/image1.png", badge:"New Ep" },
  { title:"Dragon Empire", genre:"Fantasy", views:"420K", likes:"38K", image:"images/image1.png" },
  { title:"Shadow War", genre:"Action", views:"400K", likes:"35K", image:"images/image1.png" },
  { title:"Galaxy Knights", genre:"Sci-Fi", views:"380K", likes:"33K", image:"images/image1.png" }
];

const knowledgeData = [
  { title:"Psychology 101", genre:"Knowledge", views:"120K", likes:"14K", image:"images/image1.png", badge:"New" },
  { title:"Business Secrets", genre:"Knowledge", views:"110K", likes:"12K", image:"images/image1.png" },
  { title:"Learn Coding", genre:"Knowledge", views:"105K", likes:"11K", image:"images/image1.png" },
  { title:"Mind Mastery", genre:"Knowledge", views:"95K", likes:"10K", image:"images/image1.png" },
  { title:"History of Time", genre:"Knowledge", views:"90K", likes:"9K", image:"images/image1.png" }
];

function renderStandardCard(item) {
  return `
    <a class="card-link" href="detail.html" data-requires-account="true">
        <div class="card">
          <div class="card-media">
            ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ""}
            <div class="card-media-inner">
              <img src="${item.image}" alt="${item.title}">
            </div>
          </div>
        <div class="card-genre">${item.genre || ""}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span><i class="fa-regular fa-eye"></i> ${item.views}</span>
          <span class="like"><i class="fa-regular fa-heart"></i> ${item.likes || "--"}</span>
        </div>
      </div>
    </a>
  `;
}

  // Function to render trending items based on category
function renderTrendingByCategory(category){
    const filtered = category === "all" ? trendingData : trendingData.filter(item => item.category === category);
    document.getElementById("trending").innerHTML = filtered.map(renderStandardCard).join("");
  }

  // Initialize with "All"
  renderTrendingByCategory("all");

  // Handle category tab clicks
  document.querySelectorAll(".category-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderTrendingByCategory(btn.dataset.category);
    });
  });

  // ===================== STUDIOS =====================
  const studiosData = [
    { name:"TOOU", image:"images/logo.png" },
    { name:"DreamForge", image:"images/image2.jpg" },
    { name:"MoonWorks", image:"images/image3.jpg" },
    { name:"Pixel Studio", image:"images/image4.jpg" }
  ];

  function renderStudios(list){
    document.getElementById("studios").innerHTML = list.map(item=>`
      <div class="studio">
        <img src="${item.image}">
        <div class="studio-name">${item.name}</div>
      </div>
    `).join("");
  }
  renderStudios(studiosData);

  // ===================== NEW RELEASES =====================
  const newReleasesData = [
    { title:"Neon City", genre:"Romance", views:"50K", likes:"6K", image:"images/image1.png", badge:"New" },
    { title:"Blade Hero", genre:"Action", views:"75K", likes:"10K", image:"images/image1.png", badge:"New Ep" },
    { title:"Starfall", genre:"Horror", views:"60K", likes:"7K", image:"images/image1.png", badge:"New" }
  ];

  function renderNewReleases(list){
    document.getElementById("newReleases").innerHTML = list.map(renderStandardCard).join("");
  }
  renderNewReleases(newReleasesData);

  // ===================== RECOMMENDED =====================
  const recommendedData = [
    { title:"Shadows of Destiny", genre:"Fantasy", rating:"4.8", image:"images/image1.png" },
    { title:"Midnight Libra", genre:"Mystery", rating:"4.7", image:"images/image1.png" },
    { title:"Urban Legend", genre:"Horror", rating:"4.6", image:"images/image1.png" }
  ];

  function renderRecommended(list){
    document.getElementById("recommended").innerHTML = list.map(item=>`
      <a class="reco-link" href="detail.html" data-requires-account="true">
        <div class="reco-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="reco-info">
            <div class="reco-title">${item.title}</div>
            <div class="reco-meta">${item.rating} star - ${item.genre}</div>
          </div>
        </div>
      </a>
    `).join("");
  }
  renderRecommended(recommendedData);

  // ===================== Additional Sections =====================
function renderHorizontal(sectionId, data){
  document.getElementById(sectionId).innerHTML = data.map(renderStandardCard).join("");
}

renderHorizontal("topPicks", topPicksData);
renderHorizontal("bingeSeries", bingeData);
renderHorizontal("knowledgeBooks", knowledgeData);

  // ===================== NAVBAR SCROLL =====================
  let lastScroll = 0;
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", ()=>{
    const currentScroll = window.pageYOffset;
    if(currentScroll > lastScroll){ navbar.classList.add("hide"); } 
    else { navbar.classList.remove("hide"); }
    lastScroll = currentScroll;
  });


  
(function(){

const categories = [
    {
        name: "Webtoon",
        title: "Enjoy Your Webtoons",
        desc: "Discover amazing webtoon stories",
        img: "images/image1.png"
    },
    {
        name: "Novel",
        title: "Dive Into Novels",
        desc: "Experience immersive storytelling",
        img: "images/image1.png"
    },
    {
        name: "Knowledge",
        title: "Expand Your Knowledge",
        desc: "Learn something new every day",
        img: "images/image1.png"
    },
    {
        name: "Comics",
        title: "Enjoy Fun Comics",
        desc: "Laugh and explore comic adventures",
        img: "images/image1.png"
    }
];

const staticSideCards = {
    left: [
        { name: "Thriller", img: "images/image1.png", className: "wt-static-left-3" },
        { name: "Drama", img: "images/image1.png", className: "wt-static-left-2" },
        { name: "Mystery", img: "images/image1.png", className: "wt-static-left-1" }
    ],
    right: [
        { name: "Fantasy", img: "images/image1.png", className: "wt-static-right-1" },
        { name: "Action", img: "images/image1.png", className: "wt-static-right-2" },
        { name: "Sci-Fi", img: "images/image1.png", className: "wt-static-right-3" }
    ]
};

let index = 0;

const carousel = document.getElementById("wtCarousel");
const bg = document.getElementById("wtBg");
const title = document.getElementById("wtTitle");
const desc = document.getElementById("wtDesc");
const liveMeta = document.getElementById("wtLiveMeta");
const indicators = document.getElementById("wtIndicators");

function render() {
    if (!carousel) return;

    carousel.innerHTML = "";

    const prev = (index - 1 + categories.length) % categories.length;
    const next = (index + 1) % categories.length;

    [...staticSideCards.left, ...staticSideCards.right].forEach((item) => {
        const card = document.createElement("div");
        card.className = `wt-card wt-static ${item.className}`;
        card.innerHTML = `
            <img src="${item.img}">
            <div class="wt-card-text">${item.name}</div>
        `;
        carousel.appendChild(card);
    });

    categories.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "wt-card";

        if (i === index) card.classList.add("wt-center");
        else if (i === prev) card.classList.add("wt-left");
        else if (i === next) card.classList.add("wt-right");
        else card.classList.add("wt-hidden");

        card.innerHTML = `
            <img src="${item.img}">
            <div class="wt-card-text">${item.name}</div>
        `;

        card.onclick = () => {
            if (i === next) nextSlide();
            if (i === prev) prevSlide();
        };

        carousel.appendChild(card);
    });

    updateContent();
    renderIndicators();
}

function updateContent() {
    const current = categories[index];
    bg.style.backgroundImage = `url(${current.img})`;
    title.textContent = current.title;
    desc.textContent = current.desc;
    liveMeta.textContent = `${current.name} spotlight`;
}

function renderIndicators() {
    if (!indicators) return;

    indicators.innerHTML = categories.map((item, itemIndex) => `
        <span class="wt-indicator ${itemIndex === index ? "active" : ""}" aria-label="${item.name}"></span>
    `).join("");
}

function nextSlide() {
    index = (index + 1) % categories.length;
    render();
}

function prevSlide() {
    index = (index - 1 + categories.length) % categories.length;
    render();
}

/* TOUCH */
let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientX - startX;

    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
});

/* AUTO LOOP */
setInterval(nextSlide, 4000);

render();

})();




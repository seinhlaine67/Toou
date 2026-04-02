const communityPosts = [
  {
    user: "Luna Reads",
    badge: "Top Curator",
    badgeIcon: "fa-crown",
    avatar: "images/image1.png",
    time: "2h ago",
    body: "If you love character-driven fantasy with high emotional payoff, this is the webtoon I keep recommending to everyone this week.",
    title: "Shadows of Destiny",
    genre: "Fantasy",
    caption: "Strong pacing, beautiful panels, and the kind of weekly cliffhanger that keeps you waiting for the next drop."
  },
  {
    user: "Kai Novelist",
    badge: "Mystery Badge",
    badgeIcon: "fa-magnifying-glass",
    avatar: "images/image1.png",
    time: "5h ago",
    body: "This one feels perfect for readers who like slow-burn tension and atmospheric world-building without getting lost in filler.",
    title: "Dark Moon",
    genre: "Mystery",
    caption: "It is one of those reads where the mood stays with you even after the chapter ends."
  },
  {
    user: "Mira Panels",
    badge: "Comic Scout",
    badgeIcon: "fa-bolt",
    avatar: "images/image1.png",
    time: "1d ago",
    body: "For anyone looking for action-heavy recommendations, this series is an easy pick. The energy never drops.",
    title: "Hero Rise",
    genre: "Action",
    caption: "Fast-moving story, clean hook, and a very bingeable episode rhythm."
  }
];

const communityTags = [
  "#fantasypicks",
  "#bestwebtoon",
  "#newnovels",
  "#knowledgebooks",
  "#romancereads",
  "#comicrecommend"
];

document.getElementById("communityFeed").innerHTML = communityPosts.map((post) => `
  <article class="community-post">
    <div class="post-head">
      <img class="avatar" src="${post.avatar}" alt="${post.user}">
      <div class="post-user">
        <strong>${post.user}</strong>
        <div class="post-meta">
          <span class="badge"><i class="fa-solid ${post.badgeIcon}"></i>${post.badge}</span>
          <span>${post.time}</span>
        </div>
      </div>
    </div>
    <div class="post-copy">${post.body}</div>
    <a class="post-recommend" href="detail.html">
      <img src="images/image1.png" alt="${post.title}">
      <div>
        <div class="recommend-genre">${post.genre}</div>
        <div class="recommend-title">${post.title}</div>
        <div class="recommend-caption">${post.caption}</div>
      </div>
    </a>
    <div class="post-actions">
      <button class="post-action" type="button"><i class="fa-regular fa-heart"></i> Like</button>
      <button class="post-action" type="button"><i class="fa-regular fa-bookmark"></i> Save</button>
      <button class="post-action" type="button"><i class="fa-regular fa-comment"></i> Discuss</button>
    </div>
  </article>
`).join("");

document.getElementById("tagRow").innerHTML = communityTags.map((tag) => `
  <div class="tag-pill">${tag}</div>
`).join("");

const featureNotice = {
  tag: "Promotion",
  title: "April reading week unlocks new bonuses",
  copy: "Readers can enjoy limited-time promo campaigns, early access events, and special creator spotlights throughout the week.",
  image: "images/image1.png"
};

const noticeItems = [
  {
    type: "Announcement",
    date: "March 31, 2026",
    title: "Creator spotlight submissions are now open",
    body: "TooU is now accepting featured creator submissions for the next homepage spotlight cycle. Studios and solo creators can apply through the creator workflow."
  },
  {
    type: "Promotion",
    date: "March 29, 2026",
    title: "Readers can unlock bonus rewards this weekend",
    body: "Selected series and knowledge titles are participating in a weekend reading promotion with bonus rewards and special visibility inside the app."
  },
  {
    type: "Platform Update",
    date: "March 26, 2026",
    title: "Library and upload flows have been refreshed",
    body: "We have improved the mobile-first browsing flow across the library and creator upload experience to make the app easier to navigate."
  },
  {
    type: "Notice",
    date: "March 24, 2026",
    title: "Scheduled maintenance window for creator tools",
    body: "Creator-facing publishing tools may be temporarily unavailable during a scheduled update window. Reader browsing will remain available."
  }
];

const featureMount = document.getElementById("noticeFeature");
featureMount.style.setProperty("--bg-image", `url('${featureNotice.image}')`);
featureMount.innerHTML = `
  <div class="feature-content">
    <div class="feature-tag">${featureNotice.tag}</div>
    <div class="feature-title">${featureNotice.title}</div>
    <div class="feature-copy">${featureNotice.copy}</div>
  </div>
`;

document.getElementById("noticeList").innerHTML = noticeItems.map((item) => `
  <article class="notice-card">
    <div class="notice-topline">
      <div class="notice-type"><i class="fa-solid fa-bullhorn"></i>${item.type}</div>
      <div class="notice-date">${item.date}</div>
    </div>
    <div class="notice-title">${item.title}</div>
    <div class="notice-body">${item.body}</div>
  </article>
`).join("");

const contentGuides = {
  webtoon: {
    heading: "Episode Builder",
    description: "For webtoon and comics, creators usually upload a vertical stack of episode images plus a thumbnail. This builder keeps that flow.",
    hint: "Webtoon creators typically publish a portrait cover, an episode thumbnail, and a long sequence of vertically stacked images for each episode.",
    list: [
      "Upload a cover, synopsis, hashtags, and episode metadata first.",
      "Use vertical image episodes for webtoon and comics.",
      "Keep each image sharp and easy to read on mobile."
    ],
    builder: "visual"
  },
  comics: {
    heading: "Issue Builder",
    description: "Comics creators often upload sequential page images, cover art, and optional bonus previews for each issue.",
    hint: "Comic uploads usually include a cover, a thumbnail, and either full page images or a packaged ZIP of sequential pages.",
    list: [
      "Upload page images in reading order.",
      "Use a thumbnail so each issue looks polished in listings.",
      "Reserve premium issues for paid drops if needed."
    ],
    builder: "visual"
  },
  knowledge: {
    heading: "Lesson Builder",
    description: "Knowledge content works best as structured text chapters with optional cover assets and concise episode notes.",
    hint: "Knowledge creators usually publish a cover, a learning-focused synopsis, and text-based lessons or chapters that readers can scan easily.",
    list: [
      "Organize chapters by topic or lesson.",
      "Use clear headings and concise explanations.",
      "Keep notes focused on takeaways or resources."
    ],
    builder: "text"
  },
  novel: {
    heading: "Chapter Builder",
    description: "Novel creators usually draft text chapters directly, then control free and premium access chapter by chapter.",
    hint: "Novel uploads usually include a cover, synopsis, tags, and text chapters written directly in the editor.",
    list: [
      "Write chapters directly in the editor.",
      "Use notes for teasers or author updates.",
      "Choose free or premium for each chapter strategy."
    ],
    builder: "text"
  }
};

const typeButtons = document.querySelectorAll(".type-pill");
const guideList = document.getElementById("guideList");
const formatHint = document.getElementById("formatHint");
const episodeHeading = document.getElementById("episodeHeading");
const episodeDescription = document.getElementById("episodeDescription");
const builderCards = document.querySelectorAll(".builder-card");
const visualOnlyFields = document.querySelectorAll(".visual-only");
const textOnlyFields = document.querySelectorAll(".text-only");

function setBuilderMode(mode) {
  builderCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.builder === mode);
  });

  visualOnlyFields.forEach((field) => {
    field.classList.toggle("hidden", mode !== "visual");
  });

  textOnlyFields.forEach((field) => {
    field.classList.toggle("hidden", mode !== "text");
  });
}

function setContentType(type) {
  const config = contentGuides[type];

  typeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === type);
  });

  episodeHeading.textContent = config.heading;
  episodeDescription.textContent = config.description;
  formatHint.textContent = config.hint;
  guideList.innerHTML = config.list.map((item) => `<li>${item}</li>`).join("");
  setBuilderMode(config.builder);
}

typeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setContentType(button.dataset.type);
  });
});

builderCards.forEach((card) => {
  card.addEventListener("click", () => {
    setBuilderMode(card.dataset.builder);
  });
});

setContentType("webtoon");

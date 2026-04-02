const creatorForm = document.getElementById("creatorForm");
const creatorMessage = document.getElementById("creatorMessage");
const roleButtons = document.querySelectorAll(".account-card");
const studioFields = document.querySelectorAll(".studio-only");

let currentRole = "individual";

function setCreatorRole(role) {
  currentRole = role;

  roleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
  });

  studioFields.forEach((field) => {
    field.classList.toggle("hidden", role !== "studio");
  });
}

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCreatorRole(button.dataset.role);
  });
});

creatorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(creatorForm);
  const creatorProfile = {
    role: currentRole,
    displayName: formData.get("displayName"),
    studioName: formData.get("studioName"),
    phoneNumber: formData.get("phoneNumber"),
    nationalId: formData.get("nationalId"),
    primaryFormat: formData.get("primaryFormat"),
    artistStyle: formData.get("artistStyle"),
    goals: formData.get("goals"),
    bio: formData.get("bio"),
    portfolio: formData.get("portfolio")
  };

  localStorage.setItem("toouCreatorProfile", JSON.stringify(creatorProfile));
  creatorMessage.textContent = "Creator account saved on this device. Redirecting you to the upload workspace now.";
  creatorMessage.classList.add("success");

  setTimeout(() => {
    window.location.href = "upload.html";
  }, 900);
});

setCreatorRole("individual");

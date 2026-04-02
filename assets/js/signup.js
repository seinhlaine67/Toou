const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

function readAvatar(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve("https://i.pravatar.cc/120?img=12");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("https://i.pravatar.cc/120?img=12");
    reader.readAsDataURL(file);
  });
}

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    signupMessage.textContent = "Passwords do not match yet. Please make both password fields the same.";
    signupMessage.classList.remove("success");
    return;
  }

  const avatar = await readAvatar(formData.get("avatar"));
  const account = {
    username: formData.get("username"),
    email: formData.get("email"),
    phone_number: formData.get("phoneNumber") || "",
    birthdate: formData.get("birthdate") || "",
    place: formData.get("place") || "",
    content_interests: formData.getAll("contentInterests"),
    genre_interests: formData.getAll("genreInterests"),
    avatar,
    coins: 50,
    plan: "Reader",
    bio: "Content enthusiast and aspiring writer"
  };

  localStorage.setItem("toouUserAccount", JSON.stringify(account));
  signupMessage.textContent = "Account created on this device. You can now continue as a reader or register as a creator.";
  signupMessage.classList.add("success");
  signupForm.reset();
});

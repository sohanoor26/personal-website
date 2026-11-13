// Mobile navigation toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close the mobile menu when a link is clicked
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Auto-update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

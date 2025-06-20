const humburgerIcon = document.getElementById("humburgerIcon");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a"); 

// Toggle navigasi saat ikon hamburger diklik
humburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Tutup navigasi saat salah satu menu diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

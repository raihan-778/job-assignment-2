// Add toggle button for small screens
console.log("javascript is conntected");
let menuToggle = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  console.log("toggle clicked");
});

// code for  Carousel
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const pervBtn = document.getElementById("slide-arrow-prev");
const nextBtn = document.getElementById("slide-arrow-next");

nextBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  console.log("next btn clicked");
});

pervBtn.addEventListener("click", () => {
  console.log("prev btn clicked");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

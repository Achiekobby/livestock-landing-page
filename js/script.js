const navMenu = document.getElementById("nav");

const menuClose = document.getElementById("menu-close");

const menuOpen = document.getElementById("menu-open");

const listItems = document.querySelectorAll(".nav__item");

menuOpen.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

listItems.forEach((item) =>
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// SCROLL REVEAL ANIMATION

const scrollReveal = ScrollReveal({
  reset: true,
  duration: 2000,
  origin: "top",
  distance: "30px",
});

scrollReveal.reveal(`.featured, .card, .about, .brand,.contact`);

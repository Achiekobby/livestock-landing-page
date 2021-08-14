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
  origin: "bottom",
  distance: "30px",
});

scrollReveal.reveal(`.featured, .card, .about, .brand,.contact`);

// CODE TO TOGGLE BETWEEN ABOUT US BUTTON
const Btn = document.getElementsByClassName("toggle_menu")

Btn[0].onclick =  function(event){
  event.preventDefault()
  ActiveRemove()
  this.classList.add("active")
}

Btn[1].onclick = function (event) {
  event.preventDefault();
  ActiveRemove();
  this.classList.add("active");
};

Btn[2].onclick = function (event) {
  event.preventDefault();
  ActiveRemove();
  this.classList.add("active");
};

const ActiveRemove = ()=>{
  for (b of Btn){
    b.classList.remove("active")
  }
}


// METHOD TO CHANGE THE BACKGROUND OF THE NAVIGATION BAR UPON SCROLL
const navBar = document.getElementById("navbar")
const scroll_Nav = ()=>{
  if(scrollY>=200){
    navBar.classList.add("scrollNav")
  }
  else{
    navBar.classList.remove("scrollNav")
  }
}

window.addEventListener("scroll",scroll_Nav)
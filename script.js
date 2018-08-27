//  below is mobile version nav bar
function myFunction() {
  if (window.innerWidth <= 700) {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//       x.className += " responsive";
//   } else {
//       x.className = "topnav";
//   }

// below scrolls navbar down

const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

// below highlights menu items in nav bar

const navItems = document.querySelectorAll(".item-nav");

function highlightLink() {
  this.style.background = "white";
}

function unHighlightLink() {
  this.style.background = "grey";
}

navItems.forEach(item => item.addEventListener("mouseenter", highlightLink));
navItems.forEach(item => item.addEventListener("mousemove", highlightLink));
navItems.forEach(item => item.addEventListener("mouseout", unHighlightLink));
// triggers.forEach(a => a.addEventListener("click", openLink));

// below displays music videos

const hits = [].slice.call(document.querySelectorAll(".song"));
const iframe = [].slice.call(document.querySelectorAll(".song iframe"));
let iframed = "";

function toggleVideo(e) {
  const getSelectedIndex = () => {
    for (let i = 0; i < hits.length; i++) {
      if (hits[i] === e.srcElement) return i;
    }
  };

  clickedIndex = getSelectedIndex();
  let iframed = iframe[clickedIndex];

  if (iframed.height == 0) {
    iframed.height = "315";
  } else {
    iframed.height = 0;
  }
  e.preventDefault();
}

hits.forEach(hit => hit.addEventListener("click", toggleVideo));

//
//
//
// scroll for shoppping
const slider = document.querySelector(".shopping-items");
const items = document.querySelectorAll(".item");
let isDown = false; // flag variable
let startX;
let scrollLeft;

function hoverImage() {
  console.log(this);
}

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  // console.log(e.pageX) //gives the x coordinate of page
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return; // stops fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({ x, startX });
  const walk = (x - startX) * 3;
  // console.log(walk);
  slider.scrollLeft = scrollLeft - walk;
});

items.forEach(item => item.addEventListener("mouseover", hoverImage));

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

const navItems = document.querySelectorAll(".item");

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
console.log(hits);
let iframed = "";

function toggleVideo(e) {
  // console.log(e);
  // for (var i = 0; i < hits.length; i++) {
  //   if (hits[1].clicked) {
  //     // hits1.iframe.height = 315;
  //     console.log(hits1);
  //   }
  // }
  // console.log(this);

  const getSelectedIndex = () => {
    for (let i = 0; i < hits.length; i++) {
      if (hits[i] === e.srcElement) return i;
    }
  };

  clickedIndex = getSelectedIndex();
  let iframed = iframe[clickedIndex];

  if (iframed.height == 0) {
    iframed.height = 315;
  } else {
    iframed.height = 0;
  }
  e.preventDefault();
}
// }

// hits.forEach(hit => hit.addEventListener("click", toggleVideo));
for (let i = 0; i < hits.length; i++) {
  hits[i].addEventListener("click", toggleVideo);
}

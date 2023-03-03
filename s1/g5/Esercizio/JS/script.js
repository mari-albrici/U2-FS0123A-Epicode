let navbar = document.querySelector("nav");
let navbarButton = document.querySelector(".get-started");
let menuButtonA = document.querySelector(".menu-button-A");
let menuButtonB = document.querySelector(".menu-button-B");
let menuButtonC = document.querySelector(".menu-button-C");
let menuButtonD = document.querySelector(".menu-button-D");

window.addEventListener("scroll", scrollnav);

function scrollnav() {
  var y = window.scrollY;
  if (y < 445) {
    navbar.style.backgroundColor = "#ffc017";
    navbarButton.style.backgroundColor = "#191919";
    menuButtonA.style.backgroundColor = "#ffc017";
    menuButtonB.style.backgroundColor = "#ffc017";
    menuButtonC.style.backgroundColor = "#ffc017";
    menuButtonD.style.backgroundColor = "#ffc017";
  } else {
    navbar.style.backgroundColor = "white";
    navbarButton.style.backgroundColor = "#1a8917";
    menuButtonA.style.backgroundColor = "white";
    menuButtonB.style.backgroundColor = "white";
    menuButtonC.style.backgroundColor = "white";
    menuButtonD.style.backgroundColor = "white";
  }
}


// M ANIMATION

let em = document.querySelectorAll("g");


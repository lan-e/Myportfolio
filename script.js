//Navigacija
$(".fa-bars").click(function () {
  $(".hamburgerNav").css("left", "0");
  $("#navbar").hide();
});

$(".fa-xmark, .hamburgerNav ul a").click(function () {
  $(".hamburgerNav").css("left", "-100%");
  $("#navbar").show();
});

//Navbarscroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-90px";
//   }
//   prevScrollpos = currentScrollPos;
// };

//ScrollReveal

const sr = ScrollReveal({
  distance: "200px",
  duration: 800,
  reset: true,
});

sr.reveal(".sr-top", { origin: "top" });
sr.reveal(".sr-right", { origin: "right" });
sr.reveal(".sr-bottom", { origin: "bottom" });
sr.reveal(".sr-left", { origin: "left" });

var arrowLeft = $("#arrowLeft");
var arrowRight = $("#arrowRight");
$(document).ready(function () {
  arrowLeft.click(function () {
    prevImg();
  });
  arrowRight.click(function () {
    nextImg();
  });
});

//ShowHideBtns
const showHide = document.querySelector("#show-hide");
const hideBtn = document.querySelector("#hide-btn");
const showBtn = document.querySelector("#show-btn");
function showMore() {
  if (window.getComputedStyle(showHide).display === "none") {
    showHide.style.display = "block";
    hideBtn.style.display = "block";
    showBtn.style.display = "none";
  }
}
function showLess() {
  if (window.getComputedStyle(showHide).display === "block") {
    showHide.style.display = "none";
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
  }
}

//navbar on scroll change from transparent to solid
const homeNav = document.querySelector(".homenav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 850) {
    homeNav.classList.add("navbar-scrolled");
  } else if (window.scrollY < 850) {
    homeNav.classList.remove("navbar-scrolled");
  }
});
//navbar on hover change color
function mouseOver() {
  homeNav.classList.add("mouseover");
}
function mouseOut() {
  homeNav.classList.remove("mouseover");
}
homeNav.addEventListener("mouseenter", mouseOver);
homeNav.addEventListener("mouseleave", mouseOut);

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
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

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

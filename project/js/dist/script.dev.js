"use strict";

var ScrollUp = document.querySelector(".back-to-top");

ScrollUp.onclick = function () {
  console.log("User Click Button Back To To"); // window.screenTop = 0;
  // document.documentElement.scrollTop = 0;

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
/*=============== Header Change Background ===============*/


function scrollUp() {
  var header = document.getElementById("header-logo-nav"); // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class

  if (this.scrollY >= 350) header.classList.add("header-scroll-with-window");else header.classList.remove("header-scroll-with-window");
}

window.addEventListener("scroll", scrollUp);
/* =============== Nivo Slide =============== */

$(".slider-active").nivoSlider({
  // Points Bottom
  controlNav: true,
  controlNavThumbs: false,
  // Arrow left & right
  directionNav: true,
  //
  randomStart: true,
  // Animation Speed
  animSpeed: 500,
  // Time To Do Next Animation
  pauseTime: 5000,
  // Stop Animation When Mouse Hover On Slider
  pauseOnHover: false,
  //
  manualAdvance: false,
  // Icon Left
  prevText: '<i class="fas fa-angle-left"></i>',
  // Icon Right
  nextText: '<i class="fas fa-angle-right"></i>',
  slices: 15,
  boxCols: 8,
  boxRows: 4 // effect: "random",
  // startSlide: 0,
  // beforeChange: function () {},
  // afterChange: function () {},
  // slideshowEnd: function () {},
  // lastSlide: function () {},
  // afterLoad: function () {},

});
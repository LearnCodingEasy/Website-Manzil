let ScrollUp = document.querySelector(`.back-to-top`);

ScrollUp.onclick = function () {
  console.log(`User Click Button Back To To`);
  // window.screenTop = 0;
  // document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/*=============== Header Change Background ===============*/
function scrollUp() {
  const header = document.getElementById("header-logo-nav");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) header.classList.add("header-scroll-with-window");
  else header.classList.remove("header-scroll-with-window");
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
  boxRows: 4,
  // effect: "random",
  // startSlide: 0,
  // beforeChange: function () {},
  // afterChange: function () {},
  // slideshowEnd: function () {},
  // lastSlide: function () {},
  // afterLoad: function () {},
});

/*
=====================================================
Todo =============== DARK LIGHT THEME ===============
=====================================================
هرجع اشغلهاء 
*/
const themeButton = document.getElementById("change-theme-icon");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  console.log(`Yes`);
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*
=====================================================
Todo =============== Owl Carousel ===================
=====================================================
*/
$(document).ready(function () {
  // owl
  $(".teamMembers-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

/*
=====================================================
Todo =============== mixitup ===================
=====================================================
*/
var mixer = mixitup(".mixitup-items", {
  animation: {
    duration: 300,
    effectsOut: "fade translateX(-100%)",
  },
});

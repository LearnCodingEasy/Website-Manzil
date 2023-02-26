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
Todo =============== Owl Carousel ===================
=====================================================
*/

$(document).ready(function () {
  // owl
  $(".owl-wrapper .owl-carousel").owlCarousel({
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

var mixer = mixitup(".mixitup-items-inner", {
  animation: {
    duration: 300,
    effectsOut: "fade translateX(-100%)",
  },
});
/* 
=====================================================
Todo =============== Scroll Reval Animation =========
=====================================================
*/

const sr = ScrollReveal({
  // مسافة
  distance: "60px",
  // مدة
  duration: 2800,
  // يمكنك القيام بذلك عدة مرات حسب الحاجة
  // reset: true,
});

sr.reveal(`.projects-section, .footer__rights`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.about__data`, {
  origin: "left",
});

sr.reveal(`.about, .video`, {
  origin: "right",
  interval: 100,
});

/*
=====================================================
Todo =============== Magnific Popup =================
=====================================================
*/

$(document).ready(function () {
  $(".mixitup-item").magnificPopup({
    // child items selector, by clicking on it popup will open
    delegate: "a",
    type: "image",
    // other options
    // For Arrow Left And Right
    gallery: {
      enabled: true,
    },
  });
});

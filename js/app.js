$(document).ready(function () {
  // Hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});

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
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // Project slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // Hero slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});

<div class="col-lg-6">
  <h4>Quick Links</h4>
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</div>;

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

$(document).ready(function()  const $animation_elements = $('.number');
  let $window = $(window);

  function check_if_in_view()    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_elements, function()      let $element = $(this);
      let element_height = $element.outerHeight();
      let element_top_position = $element.offset().top;
      let element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position))        $element.prop('Counter',0).animate          Counter: $element.text()
                 duration: 4000,
          easing: 'swing',
          step: function (now)            $element.text(Math.ceil(now));
                      else        $element.text("");
           
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
  

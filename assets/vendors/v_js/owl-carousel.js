$(window).on("load", function () {
  $("#tec-contribution-slider").owlCarousel({
    loop: false,
    nav: false,
    rtl: false,
    dots: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      768: {
        items: 3,
        loop: false,
        dots: false,
        rewind: false,
        mouseDrag: false,
        touchDrag: false,
      },
      1200: {
        margin: 50,
      },
    },
  });
  $(".gallary-slider").owlCarousel({
    loop: false,
    rtl: false,
    margin: 15,
    nav: false,
    dots: true,
    smartSpeed: 300,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      700: {
        items: 3,
      },
    },
  });

  $(".card-slider").owlCarousel({
    loop: false,
    rtl: false,
    nav: false,
    dots: true,
    smartSpeed: 300,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      535: {
        items: 2,
        margin: 30,
      },
    },
  });

  $(".review-slider").owlCarousel({
    nav: true,
    dots: false,
    rtl: false,
    smartSpeed: 500,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
});

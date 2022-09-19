window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  const wrapper = document.querySelector(".wrapper");
  preload.classList.add("preload-finish");
  wrapper.classList.add("wrap");
});

jQuery(document).ready(function () {
  "use strict";
  $(".slider").ripples({
    dropRadius: 11,
    perturbance: 0.01,
  });
  $(".text").typed({
    strings: [
      "<strong> EXTRA-<span class='primary'>AURA!!</span></strong>",
      "<strong>NATURE'S <span class='primary'>GIFT</span></strong> ",
    ],
    typespeed: 0,
    loop: true,
  });

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("secondary");
    } else {
      $("nav").removeClass("secondary");
    }
  });

  $(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("#to-top").fadeIn();
    } else {
      $("#to-top").fadeOut();
    }
  });
  $("#to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },

      768: {
        items: 3,
      },

      1000: {
        items: 4,
      },
    },
  });

  var $catsfilter = $(".cats-filter");
  $catsfilter.find("a").click(function () {
    var currentOption = $(this).attr("data-filter");
    $(this).parent().parent().find("a").removeClass("current");
    $(this).addClass("current");
  });

  var $plist = $("#portfolio-list");
  var $pfilter = $("#portfolio-filter");

  $plist.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  $pfilter.find("a").click(function () {
    var selector = $(this).attr("data-filter");
    $plist.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });

  $(".counter").counterUp({
    delay: 10,
    time: 4000,
  });

  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - -2,
      },
      1250,
      "easeInOutExpo"
    );
  });
  new WOW().init();
});

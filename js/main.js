$(document).ready(function() {
  "use strict"

    var typed = new Typed(".text", {
    strings: ["<strong>I Love</strong><strong class='primary'> Coding<strong>", "<strong>I love</strong><strong class='primary'> React<strong>", "<strong>Front End</strong><strong class='primary'> Developer<strong>"],
    typespeed: 2,
    loop: true
    });

    $(window).scroll(function() {
      var top = $(window).scrollTop();
      if (top >= 60) {
        $('nav').addClass('secondary');
      } else if ($('nav').hasClass('secondary')) {
        $('nav').removeClass('secondary');
      }
    });

    $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
    }
    });
    $("#team-members").owlCarousel({
      items:3,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          480:{
            items:2
          },
          760:{
            items:3
          }
        }
    });
});

$(document).ready(function(){

$(window).resize(function(){
  var width = $('#body').width();
  if(width > 1230){
    $('.nav_menu_section').css('display', 'block');
  }else{
    $('.nav_menu_section').css('display', 'none');
  }
});

$('.menu-btn').click(function(){
  if($('.nav_menu_section').css('display') == 'none'){
    $('.nav_menu_section').css('display', 'block');
  }else{
    $('.nav_menu_section').css('display', 'none');
  }
});

$('.map_item').click(function () {
    $('.map_item iframe').css("pointer-events", "auto");
});

$('.claint_block').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  function initMap() {
              var location = {lat: 50.442823, lng: 30.521538};
              var mapDiv = document.getElementById('map');
              var map = new google.maps.Map(mapDiv, {
                center: location,
                zoom: 17,
                scrollwheel: false

              });

              new google.maps.Marker({
                  position: location,
                  map: map,
                  title: 'Fred&Fresh',
                  icon: 'img/icons_menu/hat.png'
              });
            }

$('.clients_side_bar_box').slick({
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,

});

$('.animated').hover(
     function() {
      $(this).addClass('rubberBand'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('rubberBand'); // Убираем класс
    });

// $('.small_dish .animated').hover(
//      function() {
//       $(this).addClass('pulse'); // Добавляем класс bounce
//      },
//      function() {
//       $(this).removeClass('pulse'); // Убираем класс
//     });


$('.intro_video_item').slick({
  centerMode: true,
  centerPadding: '190px',
  slidesToShow: 1,
  // autoplay: true,
  // autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1

      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});

// $(".main").onepage_scroll({
//    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//    keyboard: true,                  // You can activate the keyboard controls
//    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                     // the browser's width is less than 600, the fallback will kick in.
//    // direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
// });
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});
});

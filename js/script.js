// SCROLL TOP BOTTUN

$("#page-top").on("click", function(){
  $("html,body").animate({scrollTop:0},1000);
});

// BOTTUN SHOW

$(window).on("load scroll", function(){
  let
  $main = $("#main"),
  $button = $("#page-top"),
  $distance = $main.offset().top,
  $scrollVal = $(window).scrollTop();

  if($scrollVal > $distance) {
    $button.fadeIn();
  } else {
    $button.fadeOut();
  }

});

// LINK TO

$('a[href^=#U]').click(function(){

  let adjust = 150;
  let speed = 1000;
  let href= $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top + adjust;
  
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

$(".header__arrow-box").on("click", function(){
  let target = $("#main").offset().top + 250;

  $('body,html').animate({scrollTop:target}, 500, 'swing');
});




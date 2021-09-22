$(document).ready(function(){
    $('.food-slider').slick({
      slidesToShow:3,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:3000,

      prevArrow:".prev-btn",
      
      nextArrow:".next-btn",
    });
  });
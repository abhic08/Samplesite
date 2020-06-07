jQuery(document).ready(function ($) {

    var interval;
    interval = setInterval(function () {
      moveRight();
    }, 3000);
  
    $('.slide-wrapper').mouseover(function(){
      clearInterval(interval);
    });
    
    $('.slide-wrapper').mouseleave(function(){
      interval = setInterval(function () {
        moveRight();
        }, 3000);
    });
    
      var slideCount = $('.slide-wrapper .slides').length;
      var slideWidth = $('.slide-wrapper .slides').width();
      var slideHeight = $('.slide-wrapper .slides').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('.slide-wrapper').css({ width: slideWidth, height: slideHeight });
      
      $('.slide-wrapper .text-scroller').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('.slide-wrapper .text-scroller .slides:last-child').prependTo('.slide-wrapper');
  
      function moveLeft() {
          $('.slide-wrapper .slides').animate({
              left: + slideWidth
          }, 200, function () {
              $('.slide-wrapper .text-scroller .slides:last-child').prependTo('.slide-wrapper .text-scroller');
              $('.slide-wrapper .text-scroller').css('left', '');
          });
      };
  
      function moveRight() {
          $('.slide-wrapper .slides').animate({
              left: - slideWidth
          }, 200, function () {
              $('.slide-wrapper .text-scroller div.slides:first-child').appendTo('.slide-wrapper .text-scroller');
              $('.slide-wrapper .text-scroller').css('left', '');
          });
      };
  
      $('.prev').click(function (e) {
          event.stopPropagation;
          moveLeft();
          return false;
      });
  
      $('.next').click(function () {
        event.stopPropagation;
          moveRight();
          return false;
      });
  
  });    
  
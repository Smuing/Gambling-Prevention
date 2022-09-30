$(function(){
    var se = $('#se');
    var page = $('.page1');
    var pageOffsetTop = page.offset().top;
    $(window).resize(function(){
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= pageOffsetTop) {
        se.removeClass('bg1');
        se.addClass('bg2');
      } else {
        se.removeClass('bg2');
        se.addClass('bg1');
      }
    });
  });
$(function(){
    var box = $('#box');
    var page = $('.page1');
    var pageOffsetTop = page.offset().top;
    $(window).resize(function(){
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= pageOffsetTop) {
        box.removeClass('box1');
        box.addClass('box2');
      } else {
        box.removeClass('box2');
        box.addClass('box1');
      }
    });
  });

$(function(){
    var se = $('#se');
    var page = $('.page2');
    var pageOffsetTop = page.offset().top;
    $(window).resize(function(){
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= pageOffsetTop) {
        se.removeClass('bg2');
        se.addClass('bg3');
      } else {
        se.removeClass('bg3');
        se.addClass('bg2');
      }
    });
  });
  $(function(){
    var se = $('#se');
    var page = $('.page1');
    var pageOffsetTop = page.offset().top;
    $(window).resize(function(){
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= pageOffsetTop) {
        se.removeClass('bg1');
        se.addClass('bg2');
      } else {
        se.removeClass('bg2');
        se.addClass('bg1');
      }
    });
  });

  $(function(){
    var box = $('#box');
    var page = $('.page2');
    var pageOffsetTop = page.offset().top;
    $(window).resize(function(){
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= pageOffsetTop) {
        box.removeClass('box2');
        box.addClass('box3');
      } else {
        box.removeClass('box3');
        box.addClass('box2');
      }
    });
  });
  $(function(){
    var box = $('#box');
    var page = $('.page1');
    var pageOffsetTop = page.offset().top;
    $(window).resize(function(){
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= pageOffsetTop) {
        box.removeClass('box1');
        box.addClass('box2');
      } else {
        box.removeClass('box2');
        box.addClass('box1');
      }
    });
  });

  

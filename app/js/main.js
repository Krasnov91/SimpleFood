$(function(){

  $(window).scroll(function () {
    var sticky = $('.header__inner'),
      scroll = $(window).scrollTop();

    if (scroll >= 10) sticky.addClass('header__inner--fixed');
    else sticky.removeClass('header__inner--fixed');
  });

});

var mixer = mixitup('.category__inner');
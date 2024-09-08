$(function () {

  $(".header__link, .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });

  $(window).scroll(function () {
    var sticky = $('.header__inner'),
      scroll = $(window).scrollTop();

    if (scroll >= 10) sticky.addClass('header__inner--fixed');
    else sticky.removeClass('header__inner--fixed');
  });

});

var mixer = mixitup('.category__inner');
$(function () {

  $('.burger-menu, .menu__list-link').on('click', function () {
    $('.menu__wrap').toggleClass('menu__wrap--active');
    $('body').toggleClass('lock');
  });

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

  $('.reviews__slider').slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: true,
    speed: 1000,

    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    // appendArrows: '.arrows-wrap'

  });
  
});

var mixer = mixitup('.category-popular__inner');
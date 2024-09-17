$(function () {

  $('.burger-menu, .menu__close').on('click', function () {
    $('.menu__mobile').toggleClass('menu__mobile--active');
    $('.burger-menu').toggleClass('burger-menu--active');
    $('body').toggleClass('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger-menu--active');
      mobileMenu.classList.remove('menu__mobile--active');
      bodyLock.classList.remove('lock');
    }
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
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    speed: 1000,

    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.restaurants__wrap:not(.slick-initialized)').slick({
        arrows: false,
        dots:true,
        infinite:true,
        speed:100,
        slidesToShow: 1
      });
    } else {
      $(".restaurants__wrap.slick-initialized").slick("unslick");
    }
  });

});

var mixer = mixitup('.category-popular__inner');
$(function () {

  $('.catalog__sorting').styler();

  $('.burger-menu').on('click', function () {
    $('.menu__mobile').addClass('menu__mobile--active');
    $('.burger-menu').addClass('burger-menu--active');
    $('.dark-bg').addClass('dark-bg--active');
    $('body').addClass('lock');
  });

  $('.menu__close').on('click', function () {
    $('.menu__mobile').removeClass('menu__mobile--active');
    $('.burger-menu').removeClass('burger-menu--active');
    $('.dark-bg').removeClass('dark-bg--active');
    $('body').removeClass('lock');
  });

  document.addEventListener('click', function (e) {
    const $burgerBtns = $(".burger-menu, .menu__mobile");
    if (!$burgerBtns.is(e.target) && $burgerBtns.has(e.target).length === 0) {
      $('.menu__mobile').removeClass('menu__mobile--active');
      $('.burger-menu').removeClass('burger-menu--active');
      $('.dark-bg').removeClass('dark-bg--active');
      $('body').removeClass('lock');
    }
  });

  $('.catalog__menu').on('click', function () {
    $('.filter').addClass('filter--active');
    $('.catalog__menu').addClass('catalog__menu--active');
    $('.dark-theme').addClass('dark-theme--active');
    $('body').addClass('lock');
  });

  $('.close-btn').on('click', function () {
    $('.filter').removeClass('filter--active');
    $('.catalog__menu').removeClass('catalog__menu--active');
    $('.dark-theme').removeClass('dark-theme--active');
    $('body').removeClass('lock');
  });

  document.addEventListener('click', function (e) {
    const $burgerBtns = $(".catalog__menu, .filter");
    if (!$burgerBtns.is(e.target) && $burgerBtns.has(e.target).length === 0) {
      $('.filter').removeClass('filter--active');
      $('.catalog__menu').removeClass('catalog__menu--active');
      $('.dark-theme').removeClass('dark-theme--active');
      $('body').removeClass('lock');
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
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $(".restaurants__wrap.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 990) {
      $('.discount__wrap:not(.slick-initialized)').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 1000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1
            }
          }
        ],

        prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
      });
    } else {
      $(".discount__wrap.slick-initialized").slick("unslick");
    }
  });

  var $range = $(".filter-price__slider");
  var $inputFrom = $(".filter-price__input--from");
  var $inputTo = $(".filter-price__input--to");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });



});




var mixer = mixitup('.category-popular__inner');

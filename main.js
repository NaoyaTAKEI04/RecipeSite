// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function(){
  hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function(){
  hamburger.removeClass('hamburger-menu-active');
});

//カルーセル
$('.cover-slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: '<img src="images/cover/cover_arrow_left.svg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="images/cover/cover_arrow_right.svg" class="slide-arrow next-arrow">',
  fade: true
});

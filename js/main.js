var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 200,
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
});

$('.menu-btn').on('click', function() {
  $('.menu-list').slideToggle();
  $('.menu-btn').toggleClass('menu-btn-active');
})

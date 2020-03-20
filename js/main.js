var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
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
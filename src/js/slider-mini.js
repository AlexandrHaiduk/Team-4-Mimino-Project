const swiper = new Swiper('.swiper-mini', {
  // speed: 400,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-mini',
    prevEl: '.swiper-button-prev-mini',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

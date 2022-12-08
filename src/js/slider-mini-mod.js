const swiper = new Swiper('.swiper-mini-mod', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-mini-mod',
    prevEl: '.swiper-button-prev-mini-mod',
  },

  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 34,
    },
    1280: {
      spaceBetween: 86,
    },
  },
});

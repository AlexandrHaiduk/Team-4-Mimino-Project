// swiper init
      const mySwiper = new Swiper(".room-slider", {
        speed: 2500,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
const swiperTop = new Swiper('.top-swiper', {
    // Optional parameters
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const swiperAbout = new Swiper(".about-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
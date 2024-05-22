const swiperTop = new Swiper('.top-swiper', {
    // Optional parameters
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
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

  document.querySelectorAll('.accordeon-triger').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordeon-item--active')
    })
});
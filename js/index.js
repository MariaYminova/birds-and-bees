
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.pagination-slider__bottom',
    clickable: true,
    type: 'custom',
    bulletClass:'pagination-slider__block'
    
  },

  navigation: {
    nextEl: '.m-swiper-button-next',
    prevEl: '.m-swiper-button-prev',
  },


});

const swiperEvents = new Swiper(".swiper-events", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: false,

  scrollbar: {
    el: ".pagination-point",
    hide: true,
    type: 'custom',
    
  },

  navigation: {
    nextEl: '.events-swiper-button-next',
    prevEl: '.events-swiper-button-prev',
  },

});

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
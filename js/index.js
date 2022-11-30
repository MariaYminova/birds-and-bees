
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.pagination-slider__bottom',
    clickable: true,
    type: 'string',
    bulletClass: 'pagination-slider__block',
    bulletActiveClass:'active',

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
    el: ".my-scrollbar",
    draggable: true,
    dragSize: 74,
  },

  navigation: {
    nextEl: '.events-swiper-button-next',
    prevEl: '.events-swiper-button-prev',
  },

});


const tabsBtn = document.querySelectorAll(".tabs__nav-btn")
const tabsitem = document.querySelectorAll(".slider-rooms__slide")

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function (item) {
      item.classList.remove('active');
    });

    tabsitem.forEach(function (item) {
      item.classList.remove('active');
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});



const btn = document.querySelectorAll(".pagination-slider__block")

btn.forEach(function (item) {
item.addEventListener('click', function () {
let bntHover = item;


btn.forEach(function (item) {
item.classList.remove('active');
});

bntHover.classList.add('active')


});
});



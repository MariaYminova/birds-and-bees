const btn = document.querySelectorAll(".pagination-slider__block")
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".pagination-slider__bottom",
    clickable: true,
    type: "custom",
    bulletClass: "pagination-slider__block"
  },

  navigation: {
    nextEl: ".m-swiper-button-next",
    prevEl: ".m-swiper-button-prev"
  },

  on: {
    slideChange(swiper) {
      const target = [...btn][swiper.activeIndex - 1]

      btn.forEach(function (button) {
        button.classList.remove("active")
      })

      target.classList.add("active")
    }
  }
})

const swiperEvents = new Swiper(".swiper-events", {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    940: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

  scrollbar: {
    el: ".my-scrollbar",
    draggable: true,
    dragSize: 74
  },

  navigation: {
    nextEl: ".events-swiper-button-next",
    prevEl: ".events-swiper-button-prev"
  }
})

const swiperPhoto = new Swiper(".swiper-photo", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,

  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true
    },

    940: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false
    }
  }
})

const tabsBtn = document.querySelectorAll(".tabs__nav-btn")
const tabsitem = document.querySelectorAll(".slider-rooms__slide")

function tabsControl(currentBtn) {
  const tabId = currentBtn.getAttribute("data-tab")
  let currentTab = document.querySelector(tabId)

  tabsBtn.forEach(function (item) {
    item.classList.remove("active")
  })

  tabsitem.forEach(function (item) {
    item.classList.remove("active")
  })

  currentBtn.classList.add("active")
  currentTab.classList.add("active")
}

function carretAnimate(tab) {
  const cart = document.querySelector(".move-cart")
  const parentX = tab.parentNode.getBoundingClientRect().x
  const elmX = tab.getBoundingClientRect().x
  const delta = elmX - parentX
  
  
  cart.style.transform = `translateX(${delta}px)`
  cart.style.width = tab.getBoundingClientRect().width + 'px'
}

carretAnimate(tabsBtn[0])

tabsBtn.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabsControl(this)

    carretAnimate(this)
  })
})

document.querySelector(".btn-menu").addEventListener("click", function () {
  this.classList.toggle("btn-menu--active")
})

let btnMenu = document.querySelector(".btn-menu")
let menuAdaptive = document.querySelector(".menu-adaptive")
let bodyAdaptive = document.querySelector("body")

btnMenu.addEventListener("click", function (event) {
  event.stopPropagation()

  bodyAdaptive.classList.toggle("body-active")
})

menuAdaptive.addEventListener("click", function (event) {
  event.stopPropagation()
})

bodyAdaptive.addEventListener("click", function () {
  bodyAdaptive.classList.remove("body-active")
})

bodyAdaptive.addEventListener("click", function () {
  btnMenu.classList.remove("btn-menu--active")
})


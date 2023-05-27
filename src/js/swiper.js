const body = document.querySelector('body')
const breakpointSwiper = window.matchMedia('(min-width: 768px)')
// const slidersContainer = body.querySelectorAll('.image-slider')
let sliders
function createSlider() {
  if (!breakpointSwiper.matches) {
    sliders = new Swiper('.slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false
      },

      slideToClickedSlide: true,

      keyboard: {
        enabled: true,
        onlyInViewport: true
      },

      mousewheel: false,

      autoHeight: false,

      slidesPerView: 1.1,

      watchOverflow: true,

      spaceBetween: 16,

      slidesPerGroup: 1,

      initialSlide: 0,

      slidesPerColumn: 1,

      loop: false,

      loopedSlides: 0,

      freeMode: false,

      speed: 800,

      effect: 'slide',

      breakpoints: {
        320: {
          slidesPerView: 1.1
        },
        380: {
          slidesPerView: 1.3
        },
        460: {
          slidesPerView: 1.5
        },
        500: {
          slidesPerView: 1.7
        },
        580: {
          slidesPerView: 2
        },
        680: {
          slidesPerView: 2.3
        }
      }
    })
  } else {
    for (let slider of sliders) {
      slider.destroy()
    }
  }
}
createSlider()

breakpointSwiper.addEventListener('change', function (event) {
  createSlider()
})

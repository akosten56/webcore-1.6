new Swiper('.image-slider', {
  // стрелочки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // кружочки или что то еще под сладами
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false

    // type: 'progressbar',
  },

  // скроллбар под сладами
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true
  // },

  slideToClickedSlide: true,

  // управление клавитатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  // управление мышью
  mousewheel: false,

  autoHeight: false, // слайдер подстраивается под высоту слайда

  slidesPerView: 1.1, // количество слайдов в одной фракции

  watchOverflow: true, // отключение функционалаб если слайдов меньше чем нужно

  spaceBetween: 16, // отступ между слайдами

  slidesPerGroup: 1, // количество пролистываемых слайдов

  // centeredSlides: true, // активный слайд по центру

  initialSlide: 0, // стартовый слайд (отсчет с 0)

  slidesPerColumn: 1, // мультирядность

  loop: false, // бесконечный слайдер
  loopedSlides: 0, // количество дублирующих слайдов

  freeMode: false, // свободный режим

  // автопрокрутка
  // autoplay: {
  //     delay: 1000, // пауза между прокруктой
  //     stopOnLastSlide: false, // закончить на последнем слайде
  //     disableOnInteraction: true, // отключить после ручного переключения
  // },

  // скорость переключения слайдов
  speed: 800,

  // direction: 'vertical' // вертикальный слайдер

  // эффекты переключения слайдов

  effect: 'slide' // по умолчанию

  // effect: 'fade', // смена прозрачности
  // fadeEffect: {
  //     crossFade: true, // параллельная смена прозрачности
  // },

  // effect: 'flip', // переворот
  // flipEffect: {
  //     slideShadows: true, // тень
  //     limitRotation: true, // показ только активного слайда
  // },

  // effect: 'cube', // куб
  // cubeEffect: {
  //     slideShadows: true, // тень
  //     shadow: true,
  //     shadowOffset: 20,
  //     shadowScale: 0.94,
  // },

  // effect: 'coverflow', // поток, дуга
  // coverflowEffect: {
  //   rotate: 45, // угол
  //   stretch: 250, // наложение
  //   slideShadows: false // тень
  // }

  // effect: "cards", // карты
  // cardsEffect: {
  //     perSlideOffset:	6,
  //     perSlideRotate: 2,
  //     rotate: true,
  //     slideShadows: false,
  // },

  // effect: 'creative',
  // creativeEffect: {
  //     prev: {
  //       // will set `translateZ(-400px)` on previous slides
  //       translate: [0, 0, -400],
  //     },
  //     next: {
  //       // will set `translateX(100%)` on next slides
  //       translate: ['100%', 0, 0],
  //     },
  // },

  // адаптив слайдера
  // брейкпоинты, ширина экрана
  // breakpoints: {
  //     320:{
  //         slidesPerView: 1,
  //     },
  //     480:{
  //         slidesPerView: 1,
  //     },
  //     992:{
  //         slidesPerView: 1,
  //     },
  // },

  // обновить слайдер, слайдер в табе
  // observer: true,
  // observerParents: true,
  // observerSlideChildren: true,
})

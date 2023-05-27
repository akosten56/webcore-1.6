const body = document.querySelector('body')

// const breakpointSpoiler = window.matchMedia('(min-width: 1300px)')
// const show = body.querySelector('.show')

// breakpointSpoiler.addEventListener('change', function (event) {
//   if (!breakpointSwiper.matches) {
//     show.classList.remove('.slider-type hide')
//   }
// })

const openButton = body.querySelector('.info__open-button')
const closeButton = body.querySelector('.info__close-button')
const moreText = body.querySelector('.info__more-text')

openButton.addEventListener('click', function () {
  moreText.classList.remove('hidden')
  closeButton.classList.remove('hidden')
  openButton.classList.add('hidden')
})

closeButton.addEventListener('click', function () {
  moreText.classList.add('hidden')
  closeButton.classList.add('hidden')
  openButton.classList.remove('hidden')
})

const sliderLogoOpenButton = body.querySelector('.slider-logo__open-button')
const sliderLogoCloseButton = body.querySelector('.slider-logo__close-button')
const sliderLogoHide = body.querySelectorAll('.slider-logo .hide')

sliderLogoOpenButton.addEventListener('click', function () {
  for (let element of sliderLogoHide) {
    element.classList.remove('hide')
  }

  sliderLogoCloseButton.classList.remove('hidden')
  sliderLogoOpenButton.classList.add('hidden')
})

sliderLogoCloseButton.addEventListener('click', function () {
  for (let element of sliderLogoHide) {
    element.classList.add('hide')
  }

  sliderLogoCloseButton.classList.add('hidden')
  sliderLogoOpenButton.classList.remove('hidden')
})

const sliderTypeOpenButton = body.querySelector('.slider-type__open-button')
const sliderTypeCloseButton = body.querySelector('.slider-type__close-button')
const sliderTypeHide = body.querySelectorAll('.slider-type .hide')

sliderTypeOpenButton.addEventListener('click', function () {
  for (let element of sliderTypeHide) {
    element.classList.remove('hide')
  }

  sliderTypeCloseButton.classList.remove('hidden')
  sliderTypeOpenButton.classList.add('hidden')
})

sliderTypeCloseButton.addEventListener('click', function () {
  for (let element of sliderTypeHide) {
    element.classList.add('hide')
  }

  sliderTypeCloseButton.classList.add('hidden')
  sliderTypeOpenButton.classList.remove('hidden')
})

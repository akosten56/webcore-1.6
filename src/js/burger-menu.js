const body = document.querySelector('body')

const burgerButton = body.querySelector('.header__burger-button')
const cancelButton = body.querySelector('.menu__cancel-button')
const menu = body.querySelector('.menu')

burgerButton.addEventListener('click', function () {
  menu.classList.add('active')
  body.classList.add('scroll-lock')
})

cancelButton.addEventListener('click', function () {
  menu.classList.remove('active')
  body.classList.remove('scroll-lock')
})

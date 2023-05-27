const body = document.querySelector('body')

const phoneButton = body.querySelector('.menu__phone-button')
const callCancelButton = body.querySelector('.modal-call__cancel-button')
const modalCall = body.querySelector('.modal-call')
const headerPhoneButton = body.querySelector('.header__phone-button')

phoneButton.addEventListener('click', function () {
  if (modalFeedback.classList.contains('active')) {
    modalFeedback.classList.remove('active')
  }
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  }
  modalCall.classList.add('active')
  body.classList.add('scroll-lock')
})
headerPhoneButton.addEventListener('click', function () {
  if (modalFeedback.classList.contains('active')) {
    modalFeedback.classList.remove('active')
  }
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  }
  modalCall.classList.add('active')
  body.classList.add('scroll-lock')
})

callCancelButton.addEventListener('click', function () {
  modalCall.classList.remove('active')
  body.classList.remove('scroll-lock')
})

const messageButton = body.querySelector('.menu__message-button')
const messageCancelButton = body.querySelector('.modal-feedback__cancel-button')
const modalFeedback = body.querySelector('.modal-feedback')
const headerMessageButton = body.querySelector('.header__message-button')

messageButton.addEventListener('click', function () {
  if (modalCall.classList.contains('active')) {
    modalCall.classList.remove('active')
  }
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  }
  modalFeedback.classList.add('active')
  body.classList.add('scroll-lock')
})
headerMessageButton.addEventListener('click', function () {
  if (modalCall.classList.contains('active')) {
    modalCall.classList.remove('active')
  }
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  }
  modalFeedback.classList.add('active')
  body.classList.add('scroll-lock')
})

messageCancelButton.addEventListener('click', function () {
  modalFeedback.classList.remove('active')
  body.classList.remove('scroll-lock')
})

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

const main = body.querySelector('.main')

main.addEventListener('click', function mainRemoveClasses(e) {
  if (!main.classList.contains(e.target)) {
    menu.classList.remove('active')
    modalCall.classList.remove('active')
    modalFeedback.classList.remove('active')
    body.classList.remove('scroll-lock')
  }
})

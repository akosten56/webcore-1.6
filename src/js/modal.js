const body = document.querySelector('body')

const phoneButton = body.querySelector('.menu__phone-button')
const callCancelButton = body.querySelector('.modal-call__cancel-button')
const modalCall = body.querySelector('.modal-call')

phoneButton.addEventListener('click', function () {
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

messageButton.addEventListener('click', function () {
  modalFeedback.classList.add('active')
  body.classList.add('scroll-lock')
})

messageCancelButton.addEventListener('click', function () {
  modalFeedback.classList.remove('active')
  body.classList.remove('scroll-lock')
})

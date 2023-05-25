const body = document.querySelector('body')

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

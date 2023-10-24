const showText = () => {
  const textBlock = document.querySelector('.main_container__content')
  const btn = document.querySelector('.main_container__button_icon')
  textBlock.style.maxHeight
    ? (textBlock.style.maxHeight = null)
    : (textBlock.style.maxHeight = textBlock.scrollHeight + 'px')
  textBlock.classList.toggle('main_container__content_show')
  btn.classList.toggle('main_container__button_icon_hide')
}

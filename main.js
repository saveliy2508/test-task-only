const spoilers = document.querySelectorAll('.item_subtitle')

const handleClick = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle('textToggle')
  e.currentTarget.childNodes[3].classList.toggle('activeButton')
  e.currentTarget.childNodes[1].classList.toggle('activeSubtitle')
}

spoilers.forEach((item) => item.addEventListener('click', handleClick))


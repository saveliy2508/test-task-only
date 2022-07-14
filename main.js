const spoilers = document.querySelectorAll('.item_subtitle')

const handleClick = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle('textToggle')
  console.log(1)
}

spoilers.forEach((item) => item.addEventListener('click', handleClick))


const hamburger = document.querySelector('.hamburger')
const body = document.querySelector('body')

const handleToggleNavigation = () => {
	body.classList.toggle('show-menu')
}

hamburger.addEventListener('click', handleToggleNavigation)

'use strict'
const body = document.querySelector('body')
const btn = document.querySelector('.open-lightbox')
const lightbox = document.querySelector('.lightbox')
const btnClose = document.querySelector('button[data-action = close-lightbox]')
const semicircle = document.querySelector('.semicircle')

const handleOpenModal = (e) => {
	lightbox.classList.add('is-open')
	body.classList.add('scroll-off')
}

const handleCloseModal = () => {
	lightbox.classList.remove('is-open')
	body.classList.remove('scroll-off')
}

btn.addEventListener('click', handleOpenModal)
btnClose.addEventListener('click', handleCloseModal)

// TASK-3
const preventDefault = (e) => {
	e.preventDefault()
}

semicircle.addEventListener('mouseenter', () => {
	window.addEventListener('mousewheel', preventDefault, { passive: false })
})

semicircle.addEventListener('mouseleave', () => {
	window.removeEventListener('mousewheel', preventDefault, { passive: false })
})

// TASK-4

const func = (...args) => {
	const arr = []
	arr.push(args[1], args[0], args[2], args[0], args[3])
	const result = arr.join('')

	console.log(result)
	return result
}

func('*', '2', 's', '2d')

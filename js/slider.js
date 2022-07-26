// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
// RECUPERO LO SLIDESWRAPPERELEMENT

const slidesWrapperEl = document.querySelector('.slides-wrapper')
// LO SVUOTO
slidesWrapperEl.innerHTML = ""
// GENERARE IL CONTENUTO DELLO SLIDER
for (i = 0; i < slides.length; i++){
	const src = slides[i];
	const li = document.createElement('li')
	li.classList = 'slide'
	const img = document.createElement ('img')
	img.src = src

}
const nextArrowElement = document.querySelector('.arrow-next')
nextArrowElement.addEventListener('click', function () {


}
) 

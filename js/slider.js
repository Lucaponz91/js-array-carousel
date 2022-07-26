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
	// CREO L' LI
	const li = document.createElement('li')
	// AGGIUNGO LA CLASSE SLIDE ALL' LI
	li.classList = 'slide'
	// IMMAGINE DI PARTENZA
	if (i === 0) {
		li.classList.add('active')
	}
	// CREO IMG
	const img = document.createElement ('img')
	// ASSEGNO ALLA PROPRIETà SRC DI IMG IL VALORE SRC DELL'ARRAY
	img.src = src
	// INSERISCO IMG DENTRO LI 
	li.append(img)
	console.log(li)
	// AGGIUNGO LI ALLO SLIDESWRAPPER
	slidesWrapperEl.append(li)

}

// PESCO LA FRECCIA AVANTI DALL'HTML
const nextArrowElement = document.querySelector('.arrow-next')
nextArrowElement.addEventListener('click', function () {


}
) 

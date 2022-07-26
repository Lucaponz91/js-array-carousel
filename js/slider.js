// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
// ARRAY IN CUI PUSHI I LI CHE IL CICLO GENERA
const slideElements = []
// COSTANTE PER MODIFICARE LO STATO SUCCESSIVAMENTE
let currentIndex = 0
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
	if (i === currentIndex) {
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
	// PUSHO GLI LI CREATI NELL'ARRAY DA ME CREATO
	slideElements.push(li)

}

// PESCO LA FRECCIA AVANTI DALL'HTML
const nextArrowElement = document.querySelector('.arrow-next')
nextArrowElement.addEventListener('click', function () {
	const slideAttiva = slideElements[currentIndex];
	// AGGIUNGO IF NON CI SONO PIU' IMMAGINI
	// TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
	if (currentIndex <= slides.length){
	slideAttiva.classList.remove('active');
	// AGGIUNGO LA CLASSE ACTIVE ALLA SLIDE SEGUENTE
	const slideSuccessiva = slideElements[currentIndex + 1];
		slideSuccessiva.classList.add('active');
		currentIndex++
	} else {
		currentIndex--
	}


}
) 

// PESCO LA FRECCIA INDIETRO DALL'HTML
const prevArrowElement = document.querySelector('.arrow-prev')
prevArrowElement.addEventListener('click', function () {
	// TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
	const slideAttiva = slideElements[currentIndex];
	slideAttiva.classList.remove('active');
	// AGGIUNGO LA CLASSE ACTIVE ALLA SLIDE PRECEDENTE
	const slidePrecedente = slideElements[currentIndex - 1];
	slidePrecedente.classList.add('active');
	currentIndex--
}
) 

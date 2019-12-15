var i;
var slides = document.getElementsByClassName('slide_item');

for (i = 0; i < slides.length; i++) {

	if (slides[i] == slides[0]) {
		slides[0].style.display = 'block';
	} else {
		slides[i].style.display = 'none';
	}
}

var tiger = document.getElementById('tiger');
var wheel = document.getElementById('wheel');
var nyc = document.getElementById('nyc');

var buttons = document.getElementsByClassName('imgLink');


buttons[0].addEventListener('click', function () {
	slides[1].style.display = 'none';
	slides[2].style.display = 'none';
	slides[0].style.display = 'block';
});

buttons[1].addEventListener('click', function () {
	slides[2].style.display = 'none';
	slides[0].style.display = 'none';
	slides[1].style.display = 'block';
});

buttons[2].addEventListener('click', function () {
	slides[0].style.display = 'none';
	slides[1].style.display = 'none';
	slides[2].style.display = 'block';
});
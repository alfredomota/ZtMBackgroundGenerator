// ASSIGN VARIABLES
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randombutton = document.querySelector('#random');
var right = document.querySelector('#right');
var left = document.querySelector('#left');
var tiptop = document.querySelector('#top');
var bottom = document.querySelector('#bottom');


//WICH RADIO BUTTON IS CHECKED
function directionCheck() {
	if (right.checked === true) {
		return 'right';}
	else if (left.checked === true) {
		return 'left';}
	else if (tiptop.checked === true) {
		return 'top';}
	else {
		return 'bottom';}
}

// RANDOM COLOR - RANDOM CHOOSE (TAKEN FROM STACKOVERFLOW)
function randomizeColor() {
  	var letters = '0123456789ABCDEF';
  	var color = '#';
		for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  	}
	  	return color;
}

//RANDOM DIRECTION - LIST ALL DIRECTIONS AND RANDOM CHOOSE
function randomizeDirection() {
	var directions = ['right','left','top','bottom'];
	var randDir = directions[Math.floor(Math.random()*directions.length)];

	if (randDir === 'right') {
		right.checked = true}
	else if (randDir === 'left') {
		left.checked = true}
	else if (randDir === 'top') {
		tiptop.checked = true}
	else {
		bottom.checked = true}
	return randDir;
}

// FUNCTION TO SET GRADIENCY
function setGradient() {
	var direction = directionCheck();
	body.style.background = 
	'linear-gradient(to ' + direction + ',' + color1.value + ',' + color2.value + ') fixed';

	css.textContent = body.style.background + ';';
}

// RAMDOMIZE GRADIENCY FUNCTION
function randomGradient() {
	var randomizeColor1 = randomizeColor();
	var randomizeColor2 = randomizeColor();

	var direction = randomizeDirection();

	body.style.background = 
	'linear-gradient(to ' + direction + ',' + randomizeColor1+ ',' + randomizeColor2 + ') fixed';

	css.textContent = body.style.background + ';';

	//INPUT COLOR MATCH BUTTONS
	color1.value = randomizeColor1;
	color2.value = randomizeColor2;
}

//LOAD PAGE WITH GRADIENT
setGradient();

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randombutton.addEventListener('click', randomGradient);
right.addEventListener('click', setGradient);
left.addEventListener('click', setGradient);
tiptop.addEventListener('click', setGradient);
bottom.addEventListener('click', setGradient);
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const css = document.querySelector("h3");
const body = document.getElementById("gradient");
const random = document.getElementById("random");

//loads initial page with preset color values from HTML and matching gradient background
body.onload = function() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
	}
//to set page background color based on colors picked from pallette
function pickColor() {
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";
}
//generates random color based on a string of 16 characters and using a for loop and math.random to string 6 new 
//random characters together to form a hex code
function randomColor(){
	const letters = '0123456789ABCDEF';
	let color = '#';
	for(let i=0; i < 6; i++) {
		color+= letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
//sets variable values to return hex value from randomcolor and runs pickColor function to set background & Css 
//text content
function setRandomColors() {
	color1.value = randomColor();
	color2.value = randomColor();
	pickColor();
}


//event listeners to trigger changes based on user click/input
random.addEventListener("click", setRandomColors);
color1.addEventListener("input", pickColor);
color2.addEventListener("input", pickColor);
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
//
//
// function setGradient() {
//   body.style.background =
//   "linear-gradient(to right, "
//   + color1.value
//   + ", "
//   + color2.value
//   + ")";
//
//   css.textContent = body.style.background + ";";
// }
//
// color1.addEventListener("input", setGradient);
//
// color2.addEventListener("input", setGradient);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("Random Color Generator");       // Create a text node
randomBtn.appendChild(t);
document.body.appendChild(randomBtn);
randomBtn.style.background = "red";
randomBtn.style.border = "none";

setGradient();

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
  css.textContent=body.style.background +";";

}

function getRandomColor() {
	var letters="0123456789ABCDEF";
	var color="#";
	for(var i=0;i<6;i++)
	{
		color+=letters[Math.round(Math.random()*15)];
	}
  return color;
}

function setRandomColor() {
	color1.value= getRandomColor();
	color2.value= getRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setRandomColor);

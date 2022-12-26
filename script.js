var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
          // set background of the page to the color value input
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

          // Output the linear gradient value in the h3 element
	h3.textContent = body.style.background + ";";
}

// Outputs the default color value
h3.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
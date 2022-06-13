﻿//Conversor de temperaturas.
var ce = document.getElementById('ce');
var result = document.getElementById('result');
const fahrenheitACelsius = document.getElementById('ftoc');
const CelsiusAfahrenheit = document.getElementById('ctof');

const kelvinACelsius = document.getElementById('ktoc');
const celsiusAKelvin = document.getElementById('ctok');

function ftoc() {
	var valorInput = document.getElementById('valor');
	valorInput = valorInput.value;

	if (valorInput == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>';		
	} else {
		resultado = 100/180 * valorInput - 32;
		resultado = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultado);
<<<<<<< HEAD
		result.innerHTML = "<p><b>Resultado:</b><br> " + valorInput + "° Fahrenheit equivalen a " + resultado + "° Celsius.</p>";	
=======
		result.innerHTML = "<p><b>Resultado:</b><br>" + valorInput + "° Fahrenheit equivale a <br> " + resultado + "° Celsius.</p>";	
>>>>>>> v1.1
	}
}

function ctof() {
	var valorInput = document.getElementById('valor');
	valorInput = valorInput.value;
	
	if (valorInput == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>';
	} else {
		resultado = 180/100 * valorInput + 32;
		resultado = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultado);
<<<<<<< HEAD
		result.innerHTML = "<p><b>Resultado:</b><br> " + valorInput + "° Celsius equivalen a " + resultado + "° Fahrenheit.</p>";	
=======
		result.innerHTML = "<p><b>Resultado:</b><br>" + valorInput + "° Celsius equivale a <br>" + resultado + "° Fahrenheit.</p>";	
>>>>>>> v1.1
	} 	
} 

function ktoc() {
	var valorInput = document.getElementById('valor');
	valorInput = valorInput.value;
	
	if (valorInput == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>';
	} else {
		resultado = valorInput - 273;
		resultado = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultado);
<<<<<<< HEAD
		result.innerHTML = "<p><b>Resultado:</b><br> " + valorInput + "° Kelvin equivalen a " + resultado + "° Celsius.</p>";
=======
		result.innerHTML = "<p><b>Resultado:</b><br>" + valorInput + "° Kelvin equivale a <br>" + resultado + "° Celsius.</p>";
>>>>>>> v1.1
	} 	
}

function ctok() {
	var valorInput = document.getElementById('valor');
	valorInput = valorInput.value;
	
	if (valorInput == '') {
		result.innerHTML = '<p style="color: red;">No has ingresado ningún número.</p>'; 	
	} else {
		resultado = Number(valorInput) + 273;
		valor = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultado);
<<<<<<< HEAD
		result.innerHTML = "<p><b>Resultado:</b><br> " + valorInput + "° Celsius equivalen a " + resultado + "° Kelvin.</p>";
=======
		result.innerHTML = "<p><b>Resultado:</b><br>" + valorInput + "° Celsius equivale a <br>" + resultado + "° Kelvin.</p>";
>>>>>>> v1.1
	}
}

function resetea(){
	result.innerHTML = "";
}

fahrenheitACelsius.addEventListener('click', ftoc);
CelsiusAfahrenheit.addEventListener('click', ctof);
kelvinACelsius.addEventListener('click', ktoc);
celsiusAKelvin.addEventListener('click', ctok);

ce.addEventListener('click', resetea);